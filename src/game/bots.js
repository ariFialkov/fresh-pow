// Simulated-multiplayer bots.
//
// Bots don't run real physics — each one rides its own line down the
// mountain at its own natural pace, and paces itself on a TIME budget: from
// the player's running pace it keeps an estimate of when the player will
// reach the line, and steers its own arrival to land the drawn gap before
// or after that. A rider running early sheds the time the way a real one
// would — by easing off, or by lining up an obstacle well ahead on its line
// and going down on it — rather than by matching the player's speed metre
// for metre. Hard guarantees, regardless of what the player does:
//   * a bot destined to cross BEHIND never crosses before the player
//   * a bot destined to cross AHEAD always reaches the line first
// (near the line those guarantees are enforced outright, so a pack that
// arrives out of shape still crosses in order)
import * as THREE from 'three';
import { createRider, setPose, landingBrace } from './riderMesh.js';
import { COURSE } from './terrain.js';
import { noise1, clamp, lerp, smoothstep } from './rng.js';

const CRUISE = 27;
const VMAX = 46;
const M_PER_S_GAP = 22; // a metre of finishing gap is about this many seconds at pace
const PLAN_MIN_SURPLUS = 2.6; // seconds early before a rider plans a fall
const PLAN_LOOK = [55, 175]; // how far ahead an obstacle is picked, metres
const PLAN_MAX_DEV = 16; // metres of line change a plan may ask for

/** How far a rider drawn to cross behind may lead the player: generous early, nothing on the run-in. */
export function leadAllowance(L, playerD) {
  return 60 * (1 - smoothstep(L - 320, L - 150, playerD));
}

export class Bot {
  /**
   * @param {object} opts { terrain, gear, identity {name,color}, seed, rank,
   *                        playerRank, finalGap, lane }
   */
  constructor(opts) {
    Object.assign(this, opts);
    this.rider = createRider(this.gear, this.identity.color);
    this.obj = this.rider.root;

    this.d = 4; // distance down the hill
    this.speed = 0;
    this.y = 0;
    this.vFall = 0;
    this._landT = -1; // seconds since touchdown while the landing brace plays
    this._landAmp = 0;
    this.frozen = true;
    this.finished = false;
    this.finishTime = null;
    this.style = 0; // trick tally, dealt by the race around the player's (formats.js)
    this.stumbleT = 0;
    this.autopilot = false; // set when the player stalls out mid-race

    this.personality = noise1(this.seed * 0.13, 991) * 18;
    this.weavePhase = this.seed * 2.39;
    this.overall = opts.overall ?? opts.rank; // drawn result position (the sheet); rank is the crossing order
    this.vNat = CRUISE + this.personality * 0.3; // this rider's own cruising pace
    this.seedU = (noise1(this.seed * 0.71, 443) + 1) / 2; // 0..1, this rider's own dice
    // the race plan: where this rider means to be relative to the player
    // at a few points down the course — its own story of leads taken and
    // lost, paced to one waypoint at a time — before the drawn gap at the
    // line. Late chargers plan to lurk early, early leaders to show out
    // front; nobody drawn behind plans a lead the run-in would not allow.
    const L = this.terrain.length;
    const bias = this.script === 'lateCharge' ? -28 : this.script === 'earlyLead' ? 28 : 0;
    this.waypoints = [0.3, 0.55, 0.78].map((f, k) => {
      let off = 48 * noise1(this.seed * 0.37 + k * 3.1, 523) + bias * (k < 2 ? 1 : 0.4);
      off = this.rank < this.playerRank ? clamp(off, -70, 75) : clamp(off, -75, leadAllowance(L, f * L) * 0.75);
      return { s: f * L, off };
    });
    this.plan = null; // a fall lined up ahead: { s0, s, x, hit }
    this._planCd = 0;
    this._washCd = 0;
    this._surplusT = 0; // seconds spent running early — falls are planned on a sustained surplus, not a blip
    this._holdT = 0; // seconds pinned behind a stalled player
    this._t = 0;
    this.knockT = 0; // flattened by a collision
    this.aggro = 0; // seconds left in a deliberate take-out attempt
    this.aggroCooldown = 8;
    this._aggroBlend = 0;
    this._pushX = 0; // lateral shove from collisions, decays

    this.placeAt(this.lane.x, this.lane.z);
  }

  placeAt(x, z) {
    this.d = -z;
    this.y = this.terrain.groundAt(x, z);
    this.obj.position.set(x, this.y, z);
  }

  get ahead() {
    return this.rank < this.playerRank;
  }

  /** This rider's own racing line at distance s. */
  lineAt(s) {
    const weave = Math.sin(s * 0.03 + this.weavePhase) * 7 + Math.sin(s * 0.009 + this.weavePhase * 2) * 6;
    const laneBias = this.personality * 0.35;
    const x = this.terrain.centerAt(s) + clamp(weave + laneBias, -COURSE.halfWidth * 0.8, COURSE.halfWidth * 0.8);
    return x;
  }

  /**
   * The line actually ridden: the racing line, bent gradually across to a
   * planned obstacle over the whole approach and eased back after it — a
   * drift onto a bad line, never a cut across the hill.
   */
  pathAt(s) {
    const p = this.plan;
    if (!p) return this.lineAt(s);
    const dev = p.x - this.lineAt(p.s);
    const w = s <= p.s ? smoothstep(p.s0, p.s - 6, s) : 1 - smoothstep(p.s, p.s + 70, s);
    return this.lineAt(s) + dev * w;
  }

  /**
   * Line up a fall: pick the obstacle ahead on or near this rider's line
   * that costs the least line change, as far ahead as the window allows,
   * and start drifting toward it now. Returns false if nothing plausible
   * is in reach.
   */
  _planFall(race) {
    const L = this.terrain.length;
    if (this.plan || this._planCd > 0 || this.d < 250 || this.d > L - 260) return false;
    // one rider at a time lines something up, and never the same spot as
    // another — a field going down together on one rock is a pile-up, not
    // a race ('wait' rather than false: the obstacles are there, it is just
    // not this rider's turn)
    if (race.time - race._lastPlanT < 2.5) return 'wait';
    const s0 = this.d;
    let best = null;
    let bestCost = Infinity;
    for (const o of this.terrain.obstaclesNear(s0 + PLAN_LOOK[0], s0 + PLAN_LOOK[1])) {
      const s = -o.z;
      if (Math.abs(o.x - this.terrain.centerAt(s)) > COURSE.halfWidth * 0.85) continue;
      if (race._plans.some((ps) => Math.abs(ps - s) < 30)) continue;
      const dev = Math.abs(o.x - this.lineAt(s));
      if (dev > PLAN_MAX_DEV) continue;
      // cheapest line change wins; nearer ones only when they are much cheaper
      const cost = dev + 0.06 * (s - s0);
      if (cost < bestCost) {
        bestCost = cost;
        best = o;
      }
    }
    if (!best) return false;
    this.plan = { s0, s: -best.z, x: best.x, hit: false, kind: best.kind };
    this._planCd = 16 + this.seedU * 10;
    race._plans.push(this.plan.s);
    race._lastPlanT = race.time;
    return true;
  }

  /** Go down: a real fall that costs a couple of seconds, not a wobble. */
  _fall(race, hard) {
    this.stumbleT = hard ? 1.5 : 1.2;
    this.speed *= hard ? 0.35 : 0.5;
    if (race.fx) race.fx.burst(this.obj.position, { x: 0, z: -1 }, { count: hard ? 80 : 40, speed: 5, up: 4, spread: 2.2, size: 0.3 });
  }

  /**
   * This rider's own lead ceiling while drawn to cross behind: a personal
   * share of the field allowance that wanders slowly, so riders held up by
   * a slow player string out at different distances instead of sitting in
   * a row at one line.
   */
  allowance(L, playerD) {
    const base = leadAllowance(L, playerD);
    return base * (0.55 + 0.45 * this.seedU) + 8 * noise1(this._t * 0.07 + this.seed * 2.3, 811) * (base / 60);
  }

  /** Flattened by a collision — brief faceplant, then back up. */
  knockDown() {
    if (this.knockT > 0) return;
    this.knockT = 1.6;
    this.aggro = 0;
  }

  update(dt, race) {
    if (this.frozen) return;
    this._t += dt;
    if (this.stumbleT > 0) this.stumbleT -= dt;
    if (this.knockT > 0) this.knockT -= dt;
    const knocked = Math.max(0, Math.min(1, Math.min(this.knockT * 3, (1.6 - this.knockT) * 4)));

    const L = this.terrain.length;
    const playerD = race.player.progress;
    const playerFinished = race.player.finished;

    if (!this.finished && this.d >= L) {
      this.finished = true;
      this.finishTime = race.time;
      race.onBotFinish(this);
    }

    let v;
    this._planCd -= dt;
    this._washCd -= dt;
    if (this.finished) {
      // hockey-stop into the corral
      v = Math.max(0, this.speed - 13 * dt);
    } else if (this.autopilot || playerFinished || (!this.ahead && this.d > L - 45)) {
      // free running to the line. Ahead-bots stay on the pacing controller all
      // the way across so their drawn gaps (and order) hold to the line.
      v = Math.min(this.speed + 6 * dt, this.vNat);
    } else {
      // ---- pacing on a time budget ----
      // when will the player reach the line? Their average pace so far,
      // leaning on the current speed — a normal pace assumed off the start,
      // before the average means anything
      const elapsed = Math.max(1, race.time - (race.goTime ?? race.time));
      const avgP = clamp(playerD / elapsed, 4, 44);
      let vP = clamp(0.55 * avgP + 0.45 * race.player.speed, 4, 44);
      if (playerD < 150) vP = Math.max(vP, CRUISE * 0.8);
      // the next waypoint of the plan: be off_w metres from the player when
      // the player reaches s_w; past the last one, the drawn gap at the line
      const wp = this.waypoints.find((w) => w.s > playerD + 60);
      let vReq;
      if (wp) {
        const tW = (wp.s - playerD) / vP;
        vReq = (wp.s + wp.off - this.d) / Math.max(0.4, tW);
      } else {
        const tP = (L - playerD) / vP;
        // a slow personal drift of a couple of seconds, fading on the run-in
        const drift = 2.2 * noise1(this._t * 0.05 + this.seed * 1.7, 619) * (1 - smoothstep(L - 420, L - 160, playerD));
        const gapT = (this.ahead ? -1 : 1) * this.finalGap / M_PER_S_GAP;
        vReq = (L - this.d) / Math.max(0.4, tP + gapT + drift);
      }
      vReq = Math.max(0, vReq); // the average pace that lands it
      // the rider's own pace, coloured by the race script: late chargers
      // lurk, early leaders show out front (and will have to fade)
      let mul = 1;
      if (this.script === 'lateCharge') mul = 0.86 + 0.14 * smoothstep(0.45 * L, 0.75 * L, playerD);
      else if (this.script === 'earlyLead') mul = 1.12 - 0.12 * smoothstep(0.4 * L, 0.7 * L, playerD);
      mul *= 1 + 0.05 * noise1(this._t * 0.2 + this.seed * 3.1, 313);
      const vNat = this.vNat * mul;
      // ahead-bots can always out-run the player when they must, so a
      // tucked sprint never beats a rider destined to finish in front
      let vmax = this.ahead ? Math.max(VMAX, race.player.speed + 8) : VMAX;
      // no holeshot: off the start the pack winds up with the player
      if (this.d < 220) vmax = Math.min(vmax, race.player.speed + 9);
      if (vReq > vNat * 1.06) v = Math.min(vReq * 1.04 + 1.5, vmax); // running late: push
      else if (vReq < vNat * 0.94) v = Math.max(vReq * 0.97, vNat * 0.5); // running early: ease off
      else v = vNat;

      // running well early? shed the time like a rider would: line up an
      // obstacle far ahead and go down on it, or — with nothing plausible
      // in reach — wash out on a carve
      // (only on a surplus held for a few seconds — a player's momentary
      // stumble is not a reason for the whole field to fall over — and
      // each rider has its own tolerance for running early)
      const legEnd = wp ? wp.s + wp.off : L;
      const surplus = Math.max(0, legEnd - this.d) / Math.max(1, vReq) - Math.max(0, legEnd - this.d) / vNat;
      const tolerance = PLAN_MIN_SURPLUS + this.seedU * 1.8;
      this._surplusT = surplus > tolerance ? this._surplusT + dt : 0;
      if (this._surplusT > 2.5 + this.seedU * 2 && !this.plan && this.stumbleT <= 0 && elapsed > 8) {
        const planned = this._planFall(race);
        if (planned === false && surplus > tolerance + 2.5 && this._washCd <= 0 && this.d > 250 && this.d < L - 200 && race.time - race._lastPlanT >= 2.5) {
          this._fall(race, false);
          this._washCd = 12 + this.seedU * 8;
          this._surplusT = 0;
          race._lastPlanT = race.time;
        }
      }
      // ride in at pace — the obstacle is the brake, not a slow approach
      if (this.plan && !this.plan.hit) v = Math.max(v, vNat * 0.95);

      // a little flavour: the odd unforced wobble
      if (this.stumbleT <= 0 && noise1(this._t * 0.11 + this.seed * 3.7, 577) > 0.9) {
        this.stumbleT = 0.9;
        this.speed *= 0.85;
      }
      if (this.stumbleT > 0) v = Math.min(v, this.speed); // no acceleration while down

      // player parked mid-race? riders destined ahead eventually just send it
      if (this.ahead && race.playerStallTime > 5) this.autopilot = true;

      // deliberate take-outs: a rider destined ahead who finds themself stuck
      // behind the player lines up a bump to get back through
      this.aggroCooldown -= dt;
      const gapBehind = playerD - this.d;
      if (
        this.aggro <= 0 && this.aggroCooldown <= 0 && this.ahead &&
        gapBehind > 3 && gapBehind < 24 && race.playerKnocks < 2 &&
        race.player.knockT <= 0 && noise1(this._t * 0.23 + this.seed * 5.3, 727) > 0.45
      ) {
        this.aggro = 6;
      }
    }

    if (this.aggro > 0) this.aggro -= dt;
    if (this.knockT > 0) v = Math.min(v, 3); // down riders slide, not race

    const prevSpeed = this.speed;
    this.speed = lerp(this.speed, v, clamp(dt * 2.5, 0, 1));
    this._longA = lerp(this._longA ?? 0, dt > 0 ? clamp((this.speed - prevSpeed) / dt, -18, 12) : 0, clamp(dt * 7, 0, 1));
    this.d += this.speed * dt;

    // the planned fall: reaching the obstacle, go down on it
    if (this.plan) {
      if (!this.plan.hit && this.d >= this.plan.s - 1.2) {
        this.plan.hit = true;
        if (!this.finished) this._fall(race, true);
      }
      if (this.d > this.plan.s + 80) this.plan = null;
    }

    // the "crosses behind" guarantee — mid-race these riders may genuinely
    // lead (that's the volatility), but the allowance tapers to zero on the
    // approach so they never cross before the player. Each holds its own
    // gap behind rather than the whole pack pressing on the player's tail,
    // and nobody parks within 55 m of an unfinished line.
    if (!this.ahead && !playerFinished && !this.finished) {
      const before = this.d;
      this.d = Math.min(this.d, Math.max(playerD - this.finalGap + this.allowance(L, playerD), 2), L - 55);
      // pinned at the ceiling (a slow player, or one who has stopped): go
      // down rather than hover there in lockstep with them
      // (not while parked short of the line waiting for the player: a rider
      // standing there falling over every few seconds is worse than waiting)
      const pinned = before - this.d > 0.15 && this.d < L - 70;
      this._holdT = pinned ? this._holdT + dt : 0;
      const patience = race.player.speed < 3 ? 1.2 : 3.5 + this.seedU * 3;
      if (this._holdT > patience && this._washCd <= 0 && this.stumbleT <= 0) {
        this._fall(race, false);
        this._washCd = 10 + this.seedU * 6;
        this._holdT = 0;
      }
    }
    // the "finishes ahead" guarantee — as the player closes on the line, a
    // rider destined in front is always in front, with rank-ordered floors so
    // even a compressed pack crosses in its drawn order
    if (this.ahead && !playerFinished && !this.finished && playerD > L - 60) {
      this.d = Math.max(this.d, playerD + 2.5 + (this.playerRank - this.rank - 1) * 3);
    }
    // a rider the floor just carried over the line has crossed THIS frame,
    // before the player's own crossing is checked — not next frame, when
    // the player could already be on the sheet ahead of them
    if (!this.finished && this.d >= L) {
      this.finished = true;
      this.finishTime = race.time;
      race.onBotFinish(this);
    }

    // ---- place on the mountain ----
    // aggro pulls the line onto the player's; collision shoves decay away
    const wantAggro = this.aggro > 0 && !this.finished ? 1 : 0;
    this._aggroBlend += (wantAggro - this._aggroBlend) * clamp(dt * 1.6, 0, 1);
    this._pushX *= Math.max(0, 1 - dt * 2.2);
    let x = this.pathAt(this.d) + this._pushX;
    if (this._aggroBlend > 0.01) x = lerp(x, race.player.pos.x, this._aggroBlend * 0.9);
    // off the start, hold the gate lane and merge onto the racing line
    // gradually — no sideways bunching into the neighbors' gates
    x = lerp(this.lane.x, x, smoothstep(6, 85, this.d));
    const z = -this.d;
    const ground = this.terrain.groundAt(x, z);
    const fallV = this.vFall; // how hard a landing this frame would hit
    if (ground <= this.y) {
      // falling / flying off drops
      this.vFall += 16 * dt;
      this.y = Math.max(ground, this.y - this.vFall * dt);
    } else {
      this.y = ground;
      this.vFall = 0;
    }
    const airborne = this.y > ground + 0.2;
    if (this._wasAirborne && !airborne) {
      if (race.fx) race.fx.burst(this.obj.position, { x: 0, z: -1 }, { count: 14, speed: 4, up: 3, spread: 1.6, size: 1.2 });
      this._landT = 0;
      this._landAmp = 0.4 + Math.min(1, fallV / 12) * 0.5;
    }
    this._wasAirborne = airborne;
    let crouch = 0;
    if (this._landT >= 0) {
      this._landT += dt;
      crouch = landingBrace(this._landT, this._landAmp);
      if (this._landT > 1.1) this._landT = -1;
    }

    this.obj.position.set(x, this.y, z);
    if (!airborne) this.obj.position.y += 0.09;

    // the tip leads: heading looks further down the line than the travel
    // direction, so the board visibly initiates each carve
    const visYaw = Math.atan2(this.pathAt(this.d + 7) - this.pathAt(this.d), 7);
    this.obj.rotation.y = -visYaw;
    this.visYaw = visYaw;
    // body lean from the actual curvature of the line (centripetal force)
    const curv = (this.pathAt(this.d + 5) - 2 * this.pathAt(this.d) + this.pathAt(this.d - 5)) / 25;
    const lean = clamp(this.speed * this.speed * curv * 0.09, -1, 1);

    if (!airborne) {
      const n = this.terrain.groundNormalAt(x, z);
      this.rider.rig.rotation.x = Math.atan2(-n.z, n.y) * -0.85;
    }

    if (this.finished) {
      // brake out after the line, then stand in the corral
      setPose(this.rider, {
        brake: this.speed > 2 ? 1 : 0,
        idle: this.speed <= 2,
        t: this._t + this.weavePhase,
        dt,
      });
    } else {
      setPose(this.rider, {
        steer: lean,
        tuck: this.speed > 21 && this.knockT <= 0 ? 1 : 0,
        stumble: this.stumbleT > 0 ? 1 : 0,
        knocked,
        airborne,
        crouch,
        speedNorm: clamp(this.speed / 26, 0, 1),
        longG: clamp((this._longA ?? 0) / 11, -1, 1),
        t: this._t + this.weavePhase,
        dt,
      });
    }

    // powder off the carves (cheaper budget than the player's spray)
    if (race.fx && !airborne && this.speed > 10) {
      const edge = Math.abs(lean);
      this._sprayAcc = (this._sprayAcc || 0) + (0.25 + edge * 1.1 + (this.stumbleT > 0 ? 2 : 0)) * this.speed * 0.32 * dt * 60;
      const side = Math.sign(lean) || 1;
      while (this._sprayAcc >= 1) {
        this._sprayAcc -= 1;
        race.fx.spawn(
          x + side * 0.4, this.y + 0.05, z + 0.7,
          side * (1 + edge * 3.5) + (Math.random() - 0.5) * 2,
          1 + edge * 2 + Math.random() * 1.2,
          2 + (Math.random() - 0.5) * 2,
          0.12 + edge * 0.09,
          0.45 + Math.random() * 0.35
        );
      }
    }
    // boarder bots brushing a mitt through a deep frontside carve
    const mitt = this.rider.mittDrag ?? 0;
    if (race.fx && !airborne && mitt > 0.4 && this.rider.mittWorld && this.speed > 8) {
      this._mittAcc = (this._mittAcc || 0) + mitt * this.speed * 0.15 * dt * 60;
      const mw = this.rider.mittWorld;
      while (this._mittAcc >= 1) {
        this._mittAcc -= 1;
        race.fx.spawn(
          mw.x + (Math.random() - 0.5) * 0.12, mw.y - 0.05, mw.z + (Math.random() - 0.5) * 0.12,
          (Math.random() - 0.5) * 0.8, 0.6 + Math.random() * 0.7, 1.2 + (Math.random() - 0.5) * 0.8,
          0.1 + Math.random() * 0.05,
          0.3 + Math.random() * 0.25
        );
      }
    }

    // shadow
    this.rider.shadow.position.y = ground - this.y + 0.06;
    const h = clamp(this.y - ground, 0, 10);
    this.rider.shadow.scale.setScalar(clamp(1 - h * 0.07, 0.3, 1));
  }
}
