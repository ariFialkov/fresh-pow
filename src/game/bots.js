// Simulated-multiplayer bots.
//
// Bots don't run real physics — each one is a pacing controller that rides a
// smooth line down the mountain. Through the race they shuffle dramatically
// around the player (seeded noise), and over the last quarter their target
// offsets blend into the predetermined finishing gaps drawn by rtp.js.
// Hard guarantees, regardless of what the player does:
//   * a bot destined to finish BEHIND never crosses before the player
//   * a bot destined to finish AHEAD always reaches the line first
import * as THREE from 'three';
import { createRider, setPose } from './riderMesh.js';
import { COURSE } from './terrain.js';
import { noise1, clamp, lerp, smoothstep } from './rng.js';

const CRUISE = 27;
const VMAX = 46;
const GAIN = 0.32;

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
    this.frozen = true;
    this.finished = false;
    this.finishTime = null;
    this.stumbleT = 0;
    this.autopilot = false; // set when the player stalls out mid-race

    this.personality = noise1(this.seed * 0.13, 991) * 18;
    this.weavePhase = this.seed * 2.39;
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
    this.y = this.terrain.heightAt(x, z);
    this.obj.position.set(x, this.y, z);
  }

  get ahead() {
    return this.rank < this.playerRank;
  }

  /** Lateral line this bot follows at distance s. */
  lineAt(s) {
    const weave = Math.sin(s * 0.03 + this.weavePhase) * 7 + Math.sin(s * 0.009 + this.weavePhase * 2) * 6;
    const laneBias = this.personality * 0.35;
    const x = this.terrain.centerAt(s) + clamp(weave + laneBias, -COURSE.halfWidth * 0.8, COURSE.halfWidth * 0.8);
    return x;
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

    const L = COURSE.length;
    const playerD = race.player.progress;
    const playerFinished = race.player.finished;

    if (!this.finished && this.d >= L) {
      this.finished = true;
      this.finishTime = race.time;
      race.onBotFinish(this);
    }

    let v;
    if (this.finished) {
      // hockey-stop into the corral
      v = Math.max(0, this.speed - 13 * dt);
    } else if (this.autopilot || playerFinished || (!this.ahead && this.d > L - 45)) {
      // free running to the line. Ahead-bots stay on the pacing controller all
      // the way across so their drawn gaps (and order) hold to the line.
      v = Math.min(this.speed + 6 * dt, CRUISE + this.personality * 0.2);
    } else {
      // ---- paced racing around the player ----
      // race-script bias: late chargers lurk behind then surge; early
      // leaders (destined behind) show out front before fading
      let bias = 0;
      if (this.script === 'lateCharge') bias = -24 * (1 - smoothstep(0.55 * L, 0.8 * L, playerD));
      else if (this.script === 'earlyLead') bias = 20 * (1 - smoothstep(0.5 * L, 0.82 * L, playerD));

      let drama = 30 * noise1(this._t * 0.16 + this.seed * 7.1, 313) + this.personality + bias;
      // soft-compress the ahead side so nobody pins against the allowance
      // ceiling — leads breathe and trade instead of freezing at max
      if (drama > 0) drama = 30 * Math.tanh(drama / 30);
      // hold the drama late — the rate-limited order enforcement in the race
      // scene guarantees the drawn crossing order regardless
      const blend = smoothstep(0.66 * L, 0.9 * L, Math.max(playerD, this.d));
      const gap = this.ahead ? Math.abs(this.finalGap) : -Math.abs(this.finalGap);
      // micro-battles persist all the way to the line (amplitude stays under
      // half the gap spacing so it can never flip the order)
      const wiggle = 6 * noise1(this._t * 0.45 + this.seed * 2.9, 401) * (1 - blend * 0.7);
      const offset = lerp(drama, gap, blend) + wiggle;
      const desired = playerD + offset;
      // ahead-bots rubber-band above the player's speed so a tucked sprint
      // can never out-run a rider destined to finish in front
      let vmax = this.ahead ? Math.max(VMAX, race.player.speed + 8) : VMAX;
      // no holeshot: off the start the pack accelerates with the player
      // instead of blasting away at cruise while they're still winding up
      if (this.d < 220) vmax = Math.min(vmax, race.player.speed + 7);
      const gain = GAIN * (1 + blend * 1.2);
      // feed-forward on the player's actual speed: zero steady-state error at
      // any pace, so the drama offsets are what you actually see on the snow
      const base = clamp(race.player.speed, 6, 44);
      v = clamp(base + gain * (desired - this.d), this.ahead ? 5 : 0, vmax);

      // scripted drama: brief stumbles when the pacing noise dives
      if (this.stumbleT <= 0 && noise1(this._t * 0.11 + this.seed * 3.7, 577) > 0.86) {
        this.stumbleT = 1.1;
      }
      if (this.stumbleT > 0) v *= 0.45;

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

    // the "finishes behind" guarantee — mid-race these riders may genuinely
    // lead (that's the volatility), but the allowance tapers to zero on the
    // approach so they never cross before the player, and nobody parks
    // within 55 m of an unfinished line
    if (!this.ahead && !playerFinished && !this.finished) {
      const allowance = 38 * (1 - smoothstep(L - 260, L - 130, playerD));
      this.d = Math.min(this.d, Math.max(playerD - 4 + allowance, 2), L - 55);
    }
    // the "finishes ahead" guarantee — as the player closes on the line, a
    // rider destined in front is always in front, with rank-ordered floors so
    // even a compressed pack crosses in its drawn order
    if (this.ahead && !playerFinished && !this.finished && playerD > L - 60) {
      this.d = Math.max(this.d, playerD + 2.5 + (this.playerRank - this.rank - 1) * 3);
    }

    // ---- place on the mountain ----
    // aggro pulls the line onto the player's; collision shoves decay away
    const wantAggro = this.aggro > 0 && !this.finished ? 1 : 0;
    this._aggroBlend += (wantAggro - this._aggroBlend) * clamp(dt * 1.6, 0, 1);
    this._pushX *= Math.max(0, 1 - dt * 2.2);
    let x = this.lineAt(this.d) + this._pushX;
    if (this._aggroBlend > 0.01) x = lerp(x, race.player.pos.x, this._aggroBlend * 0.9);
    // off the start, hold the gate lane and merge onto the racing line
    // gradually — no sideways bunching into the neighbors' gates
    x = lerp(this.lane.x, x, smoothstep(6, 85, this.d));
    const z = -this.d;
    const ground = this.terrain.heightAt(x, z);
    if (ground <= this.y) {
      // falling / flying off drops
      this.vFall += 16 * dt;
      this.y = Math.max(ground, this.y - this.vFall * dt);
    } else {
      this.y = ground;
      this.vFall = 0;
    }
    const airborne = this.y > ground + 0.2;
    if (this._wasAirborne && !airborne && race.fx) {
      race.fx.burst(this.obj.position, { x: 0, z: -1 }, { count: 14, speed: 4, up: 3, spread: 1.6, size: 1.2 });
    }
    this._wasAirborne = airborne;

    this.obj.position.set(x, this.y, z);
    if (!airborne) this.obj.position.y += 0.09;

    // the tip leads: heading looks further down the line than the travel
    // direction, so the board visibly initiates each carve
    const visYaw = Math.atan2(this.lineAt(this.d + 7) - this.lineAt(this.d), 7);
    this.obj.rotation.y = -visYaw;
    this.visYaw = visYaw;
    // body lean from the actual curvature of the line (centripetal force)
    const curv = (this.lineAt(this.d + 5) - 2 * this.lineAt(this.d) + this.lineAt(this.d - 5)) / 25;
    const lean = clamp(this.speed * this.speed * curv * 0.09, -1, 1);

    if (!airborne) {
      const n = this.terrain.normalAt(x, z);
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
        tuck: this.speed > 34 && this.knockT <= 0 ? 1 : 0,
        stumble: this.stumbleT > 0 ? 1 : 0,
        knocked,
        airborne,
        speedNorm: clamp(this.speed / 42, 0, 1),
        longG: clamp((this._longA ?? 0) / 11, -1, 1),
        t: this._t + this.weavePhase,
        dt,
      });
    }

    // powder off the carves (cheaper budget than the player's spray)
    if (race.fx && !airborne && this.speed > 10) {
      const edge = Math.abs(lean);
      this._sprayAcc = (this._sprayAcc || 0) + (0.25 + edge * 1.1 + (this.stumbleT > 0 ? 2 : 0)) * this.speed * 0.05 * dt * 60;
      const side = Math.sign(lean) || 1;
      while (this._sprayAcc >= 1) {
        this._sprayAcc -= 1;
        race.fx.spawn(
          x + side * 0.4, this.y + 0.05, z + 0.7,
          side * (1 + edge * 3.5) + (Math.random() - 0.5) * 2,
          1 + edge * 2 + Math.random() * 1.2,
          2 + (Math.random() - 0.5) * 2,
          0.6 + edge * 0.5,
          0.45 + Math.random() * 0.35
        );
      }
    }

    // shadow
    this.rider.shadow.position.y = ground - this.y + 0.06;
    const h = clamp(this.y - ground, 0, 10);
    this.rider.shadow.scale.setScalar(clamp(1 - h * 0.07, 0.3, 1));
  }
}
