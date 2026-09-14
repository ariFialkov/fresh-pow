// Player rider: arcade downhill physics on the heightfield, air time, tricks.
// Skill here changes how the run FEELS — speed, style, stumbles — but never the
// betting result: bots pace themselves around whatever the player does.
import * as THREE from 'three';
import { createRider, setPose, landingBrace } from './riderMesh.js';
import { tubeRadii, rockPenetration } from './terrain.js';
import { clamp, lerp } from './rng.js';

const G = 8; // arcade gravity along the slope — deep snow eats the pull
const AIR_G = 15;
const DRAG_K = 0.0095; // terminal ~ sqrt(G*grade/K) — roughly half the old pace
const TUCK_DRAG = 0.55;
const BRAKE_DECEL = 14;
const MAX_YAW = 1.15; // radians away from straight downhill
const POP_WINDOW = 320; // ms after tuck release that still counts at the lip
const ROCK_PAD = 0.35; // half a rider's shoulders outside a boulder's outline

const TRICK_NAMES = { left: 'Backside 360', right: 'Frontside 360', up: 'Front Flip', down: 'Backflip' };
const HALF_NAMES = { left: 'Backside 180', right: 'Frontside 180' };
// specials: two directions thrown together (a diagonal flick, two keys at
// once) instead of one after the other — off-axis rotations with their own
// body shapes, worth more than a stacked pair
const SPECIALS = {
  'left+up': { name: 'Backside Rodeo', spin: -1, flip: -1, roll: 0.6, pose: 'grab' },
  'right+up': { name: 'Misty Flip', spin: 1, flip: -1, roll: -0.6, pose: 'grab' },
  'left+down': { name: 'Backside Jackknife', spin: -1, flip: 0, roll: 0.45, pose: 'jackknife' },
  'right+down': { name: 'Frontside Superman', spin: 1, flip: 0, roll: -0.45, pose: 'superman' },
};
const SPECIAL_PTS = 250;
const SPECIAL_WINDOW = 120; // ms: two directions inside this count as one special
const KNUCKLE_PTS = 150; // per trick while drifting a lip (vs 100)
const SWITCH_PTS = 150; // landing backwards, clean
const SWITCH_WINDOW = (15 * Math.PI) / 180; // how far off dead-backwards still lands switch
const UP = new THREE.Vector3(0, 1, 0);
const FWD = new THREE.Vector3(0, 0, -1);
const IDENTITY_Q = new THREE.Quaternion();
const TAU = Math.PI * 2;
const isVert = (dir) => dir === 'up' || dir === 'down';

export class Player {
  constructor(terrain, gear, input, hud, outfit = null) {
    this.terrain = terrain;
    this.input = input;
    this.hud = hud;
    this.rider = createRider(gear, 0xfbbf24, outfit);
    this.obj = this.rider.root;
    // the player's rider gets its own materials (they are shared per colour
    // across the field) so it alone can ghost out after a stumble
    this._mats = [];
    this.obj.traverse((o) => {
      if (o.isMesh && o !== this.rider.shadow) {
        o.material = o.material.clone();
        this._mats.push(o.material);
      }
    });
    this._ghost = 1;
    this.immuneT = 0; // seconds of obstacle immunity after a stumble
    this._tilt = new THREE.Quaternion(); // the root's tilt onto the snow
    this._yawQ = new THREE.Quaternion();
    this._n = new THREE.Vector3();

    this.isSled = gear.type === 'sled';
    this.isBoard = gear.type === 'board';
    this.pos = new THREE.Vector3();
    this.yaw = 0; // board/ski heading, 0 = straight downhill (-z)
    this.travelYaw = 0; // velocity direction — chases yaw at the edge's grip
    this.edge = 0; // how loaded the carving edge is (ski/board steering state)
    this.latA = 0; // smoothed centripetal accel -> body lean
    this.slip = 0; // yaw - travelYaw: the drift angle
    this.speed = 0;
    this.vy = 0;
    this.airborne = false;
    this.stumbleT = 0;
    this.frozen = true; // in the gate until GO
    this.finished = false;
    this.groundVy = 0; // smoothed terrain vertical rate -> launch impulse
    this.landComp = 0; // knee compression after landings
    this._landT = -1; // seconds since touchdown while the brace plays
    this._landAmp = 0;
    this.fx = null; // SprayPool, wired up by the race scene
    this.t = 0;
    this.knockT = 0; // knocked-flat timer after rider collisions
    this._wasBraking = false;
    this.bump = 0; // terrain roughness -> continuous leg suspension

    // tricks
    this.trickSpin = 0; // target extra yaw revolutions (signed, radians)
    this.trickFlip = 0;
    this.spinDone = 0;
    this.flipDone = 0;
    this.combo = [];
    this.style = 0; // banked: only what was landed
    this.pending = 0; // this jump's tricks — paid on a stomped landing, lost on a crash
    this._pipeReturn = 0; // after a pipe pop: which way is back into the pipe
    this._boostT = 0; // seconds of slipstream left after threading a boost gate
    this._pendDir = null; // a direction waiting to see if a second joins it (specials)
    this._special = null; // the special in flight: { kind, roll, t }
    this._roll = new THREE.Quaternion(); // off-axis roll of a special, on the root
    this._knuckle = false; // drifting a lip: low, long, floaty flight
    this.switchRide = false; // riding backwards after a switch landing
    this._halfDone = false; // the half-spin back to forward has been thrown this flight
    this._lookSide = 1; // which shoulder a switch rider looks over

    // keep a handle on our swipe hook: the input is shared across scenes and
    // a dying race must only unhook itself, never the race replacing it
    this._onSwipe = (dir) => this._trick(dir);
    input.onSwipe = this._onSwipe;
  }

  placeAt(x, z) {
    this.pos.set(x, this.terrain.groundAt(x, z), z);
    this._sync(0);
  }

  get progress() {
    return -this.pos.z;
  }

  /**
   * A direction thrown in the air. It waits a beat for a partner: a second
   * direction on the other axis inside the window makes a special; on its
   * own (or after the window) it is the ordinary trick it always was.
   */
  _trick(dir) {
    if (!this.airborne || this.finished) return;
    const now = performance.now();
    const p = this._pendDir;
    if (p && now - p.at < SPECIAL_WINDOW && isVert(dir) !== isVert(p.dir)) {
      this._pendDir = null;
      this._specialTrick(p.dir, dir);
      return;
    }
    if (p) {
      this._pendDir = null;
      this._basicTrick(p.dir);
    }
    this._pendDir = { dir, at: now };
  }

  /** Commit a waiting direction once its window has passed (or at touchdown). */
  _flushTrick(force = false) {
    const p = this._pendDir;
    if (!p) return;
    if (force || performance.now() - p.at >= SPECIAL_WINDOW) {
      this._pendDir = null;
      if (this.airborne && !this.finished) this._basicTrick(p.dir);
    }
  }

  _basicTrick(dir) {
    let name = TRICK_NAMES[dir];
    if (dir === 'left' || dir === 'right') {
      // riding switch, the first spin is only the half turn back to forward
      const half = this.switchRide && !this._halfDone;
      const turn = half ? Math.PI : TAU;
      this.trickSpin += dir === 'left' ? -turn : turn;
      if (half) {
        this._halfDone = true;
        name = HALF_NAMES[dir];
      }
    } else if (dir === 'up') this.trickFlip -= TAU;
    else this.trickFlip += TAU;
    this._score(name, this._knuckle ? KNUCKLE_PTS : 100);
  }

  _specialTrick(a, b) {
    const key = isVert(a) ? `${b}+${a}` : `${a}+${b}`;
    const sp = SPECIALS[key];
    if (!sp) return;
    if (sp.spin) this.trickSpin += sp.spin * (this.switchRide && !this._halfDone ? Math.PI : TAU);
    if (this.switchRide && !this._halfDone && sp.spin) this._halfDone = true;
    if (sp.flip) this.trickFlip += sp.flip * TAU;
    this._special = { kind: sp.pose, roll: sp.roll, t: 0 };
    this._score(sp.name, this._knuckle ? SPECIAL_PTS * 1.5 : SPECIAL_PTS);
  }

  _score(name, base) {
    this.combo.push(name);
    // combos build multipliers — but nothing counts until the landing sticks
    this.pending += Math.round(base * this.combo.length);
    if (this.hud) this.hud.trickToast(this.combo.join(' + '), `${this.pending} riding on the landing${this._knuckle ? ' · knuckle' : ''}`);
  }

  update(dt) {
    const t = this.terrain;
    const inp = this.input;

    this.t += dt;

    if (this.frozen) {
      this._sync(dt);
      setPose(this.rider, { tuck: inp.tuck ? 1 : 0, idle: !inp.tuck, t: this.t });
      return;
    }

    if (this.knockT > 0) this.knockT -= dt;
    const knocked = Math.max(0, Math.min(1, Math.min(this.knockT * 3, (1.7 - this.knockT) * 4)));
    // after the line: ride it out with a hockey stop, then stand
    if (this.finished) {
      this.speed = Math.max(0, this.speed - 11 * dt);
      const dir = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
      const nx = this.pos.x + dir.x * this.speed * dt;
      const nz = this.pos.z + dir.z * this.speed * dt;
      this.pos.set(nx, this.terrain.groundAt(nx, nz), nz);
      this.airborne = false;
      this._sync(dt);
      setPose(this.rider, {
        brake: this.speed > 1.5 ? 1 : 0,
        idle: this.speed <= 1.5,
        t: this.t,
        dt,
      });
      return;
    }

    const stumbling = this.stumbleT > 0 || this.knockT > 0;
    if (this.stumbleT > 0) this.stumbleT -= dt;
    if (this.immuneT > 0) this.immuneT -= dt;
    if (this._boostT > 0) this._boostT -= dt;
    const prevS = this.progress;
    // the landing brace runs its course from touchdown: sink, push, settle
    if (this._landT >= 0) {
      this._landT += dt;
      this.landComp = landingBrace(this._landT, this._landAmp);
      if (this._landT > 1.1) this._landT = -1;
    }

    // ---- steering: three distinct feels ----
    // Sleds: point-and-slide, loose and reactive (they have no edge).
    // Ski/board: CARVING — steering loads an edge against the snow, and the
    // loaded edge turns the heading at a RATE. The load-up lag is the
    // resistance of snow being carved through; travel then hugs the heading
    // (minimal slip), so the tip leads the arc instead of washing sideways.
    const steerIn = stumbling ? inp.steer * 0.25 : inp.steer;

    if (this.isSled) {
      const targetYaw = clamp(steerIn, -1, 1) * MAX_YAW;
      this.yaw = lerp(this.yaw, targetYaw, clamp(dt * (this.airborne ? 1.0 : 2.8), 0, 1));
    } else if (this.airborne) {
      const targetYaw = clamp(steerIn, -1, 1) * MAX_YAW;
      this.yaw = lerp(this.yaw, targetYaw, clamp(dt * 1.0, 0, 1));
      this.edge = lerp(this.edge, clamp(steerIn, -1, 1), clamp(dt * 2, 0, 1));
    } else {
      // the edge takes a beat to bite before the gear comes around
      this.edge = lerp(this.edge, clamp(steerIn, -1, 1), clamp(dt * 2.4, 0, 1));
      // turn rate scaled to the slower snow: full edge at cruise draws a
      // long ~15-20m arc instead of a twitchy pivot
      const carveRate = this.edge * (0.55 + 0.75 * clamp(this.speed / 24, 0, 1.2));
      this.yaw += carveRate * dt;
      // gravity pulls the line back to the fall line — gently mid-carve,
      // firmly once the edge is released
      const centering = Math.abs(steerIn) < 0.12 ? 0.9 : 0.2;
      this.yaw = lerp(this.yaw, 0, clamp(dt * centering, 0, 1));
      this.yaw = clamp(this.yaw, -MAX_YAW, MAX_YAW);
    }

    if (!this.airborne) {
      // edge grip: a carving edge rails; braking breaks it loose from the
      // center of the board (that slide is real); sleds are always loose
      const braking = this.input.brake && !stumbling;
      let grip;
      if (this.isSled) {
        grip = (4.2 - 2.6 * clamp(this.speed / 40, 0, 1)) * 0.7 * (braking ? 0.55 : 1);
      } else if (braking) {
        grip = 2.0;
      } else {
        grip = 8.5 - 2.2 * clamp(this.speed / 40, 0, 1);
      }
      if (stumbling) grip *= 0.7;
      const prevTravel = this.travelYaw;
      this.travelYaw = lerp(this.travelYaw, this.yaw, clamp(dt * grip, 0, 1));
      const turnRate = dt > 0 ? (this.travelYaw - prevTravel) / dt : 0;
      // centripetal accel felt by the body -> lean into the turn
      this.latA = lerp(this.latA, this.speed * turnRate, clamp(dt * 5, 0, 1));
    }
    this.slip = this.yaw - this.travelYaw;

    const dir = new THREE.Vector3(Math.sin(this.travelYaw), 0, -Math.cos(this.travelYaw));

    if (!this.airborne) {
      // ---- slope acceleration along the direction of travel ----
      const e = 1.6;
      const hHere = t.groundAt(this.pos.x, this.pos.z);
      const hAhead = t.groundAt(this.pos.x + dir.x * e, this.pos.z + dir.z * e);
      const slope = (hHere - hAhead) / e; // >0 when heading downhill
      let a = G * slope;

      // drag & braking
      const tucking = inp.tuck && !stumbling;
      const braking = inp.brake && !stumbling;
      // right before a grind rail the brake sets the sideways stance
      // without washing off the momentum you need to carry onto the log
      const railApproach = braking && t.nearGrindEntry(this.pos.x, -this.pos.z);
      // a boost gate's kick lingers as a stretch of near-drag-free running
      const k = DRAG_K * (tucking ? TUCK_DRAG : 1) * (braking ? (railApproach ? 1.4 : 4) : 1) * (this._boostT > 0 ? 0.35 : 1);
      a -= k * this.speed * this.speed;
      if (braking) a -= BRAKE_DECEL * (railApproach ? 0.18 : 1);
      if (stumbling) a -= 6;
      if (this.knockT > 0) a -= 10; // sliding on your side scrubs hard

      // never stuck: at a crawl, leaning forward skates/poles you up to
      // walking pace anywhere — the push also cancels uphill gravity so even
      // the steepest kicker face or ridge back can be climbed out of
      if (tucking && this.speed < 5 && !braking) {
        a += 3.4 + Math.max(0, -slope) * G * 0.95;
      }

      // fresh brake press throws a plume off the now-sideways edge
      if (braking && !this._wasBraking && this.fx && this.speed > 8) {
        const side = Math.sign(inp.steer) || 1;
        this.fx.burst(this.pos, { x: side * -dir.z, z: side * dir.x }, {
          count: 130, speed: 5, up: 3, spread: 1.1, size: 0.24,
        });
      }
      this._wasBraking = braking;
      // the drifting edge scrubs speed — sideways is slow
      a -= Math.abs(this.slip) * this.speed * 0.055;
      // and a LOADED edge carves a trench: railing through a turn bleeds
      // speed into the snow it displaces (boards dig the deepest)
      if (!this.isSled) a -= Math.abs(this.edge) * this.speed * (this.isBoard ? 0.058 : 0.046);

      // on a grind rail none of the snow physics bite — flat wood, light drag
      if (this._grindT > 0) a = -0.5; // wood barely bites

      this.speed = Math.max(0, this.speed + a * dt);

      // ---- move & follow / leave the ground ----
      let nx = this.pos.x + dir.x * this.speed * dt;
      let nz = this.pos.z + dir.z * this.speed * dt;

      // cliffside ledge faces are solid from below: pushing into the wall
      // stops you dead against it (sliding along it is fine); from on top
      // the edge stays a clean drop-off
      for (const wall of t.ledgeWallsAt(-nz)) {
        const before = (this.pos.x - wall.x) * wall.side;
        const after = (nx - wall.x) * wall.side;
        if (before < 0.05 && after > -0.35) {
          nx = wall.x - wall.side * 0.4;
          this.speed *= Math.abs(dir.z) * 0.85; // keep only the along-wall run
        }
      }

      // ---- log grind: brake sideways onto a rail at the lip, carry the
      // momentum along it, trick off the end over the drop ----
      let grinding = false;
      if (inp.brake && !stumbling && this.speed > 5) {
        const gr = t.grindAt(nx, -nz);
        if (gr && (this._grindT > 0 || this.pos.y > gr.topY - 1.4)) {
          grinding = true;
          this._grindT = (this._grindT || 0) + dt;
          this.travelYaw = gr.yaw; // locked to the rail line
          this.pos.set(gr.px, gr.topY, gr.pz);
          this.vy = 0;
          this.groundVy = 0;
          this.style += 45 * dt;
        }
      }
      if (!grinding && this._grindT > 0) {
        // off the end (or bailed early): a little pop into the trick window
        const dur = this._grindT;
        this._grindT = 0;
        this.airborne = true;
        this.vy = 2.4;
        this.pos.set(nx, this.pos.y + this.vy * dt, nz);
        if (this.hud && dur > 0.35) {
          this.hud.trickToast('LOG GRIND', `${dur.toFixed(1)}s on the rail`);
          this.style += 60 + Math.round(dur * 45);
        }
        grinding = true; // the ground logic stays out of it this frame too
      }

      if (!grinding) {
      // giant hollow trunks are solid — the bore wall contains you
      ({ nx, nz } = this._tubeClamp(nx, nz, dir));

      const ground = t.groundAt(nx, nz);
      // the climb rate a takeoff throws with is last frame's: at the lip the
      // ground ahead has already dropped away, and folding that drop in
      // would read a kicker as a fall
      const climbVy = this.groundVy;
      const rate = dt > 0 ? (ground - this.pos.y) / dt : 0;
      this.groundVy = lerp(this.groundVy, clamp(rate, -30, 30), clamp(dt * 10, 0, 1));

      // half-pipe lip: carrying speed up the near-vertical wall boosts you
      // off the lip — outward momentum converts to straight-up pop, so the
      // arc drops you back down flush with the wall you left
      const pp = t.pipeAt(nx, -nz);
      let lipLaunch = false;
      if (pp && Math.abs(pp.q) >= pp.lipQ && this._prevPipeQ != null && Math.abs(this._prevPipeQ) < pp.lipQ
          && this.groundVy > 3 && this.speed > 7) {
        lipLaunch = true;
        this.airborne = true;
        this.vy = clamp(this.groundVy * 0.9, 5, 13);
        if (performance.now() - inp.lastTuckRelease < POP_WINDOW) {
          this.vy += 4.2;
          if (this.hud) this.hud.trickToast('POP!', 'off the lip');
        }
        // straight up and straight back down: all the across-pipe run goes
        // into the pop, so the arc lands on the wall at the same x it left
        // from and the ride carries back around the transition. Only the
        // downhill run is kept.
        const vx = 0;
        const vz = dir.z * this.speed;
        this._pipeReturn = -Math.sign(pp.q); // land turned back into the pipe
        this.speed = Math.hypot(vx, vz);
        this.travelYaw = Math.atan2(vx, -vz);
        this.pos.set(nx, this.pos.y + this.vy * dt, nz);
      }
      this._prevPipeQ = pp ? pp.q : null;

      if (lipLaunch) {
        // airborne now — skip ground follow, collisions come back on landing
      } else if (ground < this.pos.y - Math.max(0.55, 0.9 * this.speed * dt) && this.speed > 6) {
        // (the threshold grows with the step so a long frame on a steep
        // grade — low fps at speed — never reads as the ground falling away)
        // ground fell away — takeoff
        this.airborne = true;
        this.vy = clamp(climbVy, 0, t.launchCapAt(-nz)); // the Big Air lip throws harder
        if (braking && this.speed > 8) {
          // the knuckle tuck: drifting the lip sideways kills the kick the
          // ramp would have given, but the run carries — a low, long,
          // floating flight (the tricks in it pay more)
          this._knuckle = true;
          this.vy = Math.max(0.8, this.vy * 0.35);
          this.speed *= 1.12;
          if (this.hud) this.hud.trickToast('KNUCKLE TUCK', 'drifted the lip');
        } else if (performance.now() - inp.lastTuckRelease < POP_WINDOW) {
          // pop: released tuck right at the lip
          this.vy += 4.2;
          if (this.hud) this.hud.trickToast('POP!', 'perfect release');
        }
        this.pos.set(nx, this.pos.y + this.vy * dt, nz);
      } else {
        this.pos.set(nx, ground, nz);
        this.vy = 0;
      }

      if (!this.airborne) this._collide();
      // threading a boost gate: a kick now, slipstream for a moment after
      if (!this.airborne && !stumbling) {
        const g = t.boostGateAt(this.pos.x, prevS, this.progress);
        if (g) {
          this.speed = Math.min(this.speed + 7, 46);
          this._boostT = 1.6;
          t.flashGate(g);
          if (this.hud) this.hud.trickToast('BOOST!', 'gate threaded');
          if (this.fx) this.fx.burst(this.pos, dir, { count: 60, speed: 5, up: 2, spread: 1.2, size: 0.24 });
        }
      }
      }
    } else {
      // ---- air ----
      this._prevPipeQ = null; // re-arm the lip launch only from riding, not landing
      this._flushTrick();
      // a knuckle flight hangs: the drift reads as floating out over the knuckle
      this.vy -= AIR_G * (this._knuckle ? 0.55 : 1) * dt;
      this.speed = Math.max(0, this.speed - DRAG_K * (this._knuckle ? 0.2 : 0.4) * this.speed * this.speed * dt);
      if (this._special) this._special.t += dt;
      let nx = this.pos.x + dir.x * this.speed * dt;
      let nz = this.pos.z + dir.z * this.speed * dt;
      // even airborne, a hollow trunk's walls stay solid — launching off the
      // gutter can't carry you through the wood
      ({ nx, nz } = this._tubeClamp(nx, nz, dir));
      const ny = this.pos.y + this.vy * dt;
      // grind rails are solid in the air as well: smack the trunk mid-flight
      // and you glance off sideways (clearing over or under it is fine)
      if (!(this._grindT > 0)) {
        const railHit = t.grindAt(nx, -nz);
        if (railHit && ny < railHit.topY + 0.15 && ny > railHit.topY - 1.05) {
          const latOut = Math.sign(railHit.lat || 1) * 1.15;
          nx = railHit.gx + railHit.ax * railHit.along + railHit.az * latOut;
          nz = -(railHit.gs0 + railHit.az * railHit.along - railHit.ax * latOut);
          this.speed *= 0.4;
        }
      }
      const ground = t.groundAt(nx, nz);

      // animate tricks toward their targets
      const spinRate = 6.2, flipRate = 5.4;
      const prevSpin = this.spinDone, prevFlip = this.flipDone;
      this.spinDone = approach(this.spinDone, this.trickSpin, spinRate * dt);
      this.flipDone = approach(this.flipDone, this.trickFlip, flipRate * dt);
      // rotation rates drive the body: wind into spins, curl into flips
      if (dt > 0) {
        this.twist = lerp(this.twist ?? 0, clamp((this.spinDone - prevSpin) / dt / 7, -1, 1), clamp(dt * 9, 0, 1));
        this.curl = lerp(this.curl ?? 0, clamp(Math.abs(this.flipDone - prevFlip) / dt / 6, 0, 1), clamp(dt * 9, 0, 1));
      }

      if (ny <= ground) {
        // ---- landing ----
        this._flushTrick(true);
        this.pos.set(nx, ground, nz);
        this.airborne = false;
        const spinLeft = Math.abs(this.trickSpin - this.spinDone);
        const flipLeft = Math.abs(this.trickFlip - this.flipDone);
        // the switch window: upright (every flip finished) and half a turn
        // from where the spin was going — that lands too, backwards
        const facing = this.switchRide ? Math.PI : 0;
        const landedAt = ((facing + this.spinDone) % TAU + TAU) % TAU;
        const switchLanding = flipLeft <= 0.9 && spinLeft > 0.9 && Math.abs(landedAt - Math.PI) <= SWITCH_WINDOW;
        const sloppy = !switchLanding && (spinLeft > 0.9 || flipLeft > 0.9);
        const impact = Math.min(1, -this.vy / 14);
        this._landT = 0;
        this._landAmp = 0.45 + impact * 0.55;
        if (this.fx) {
          this.fx.burst(this.pos, dir, {
            count: 32 + Math.round(impact * 80),
            speed: 3 + impact * 6,
            up: 2.5 + impact * 3,
            spread: 1.4,
            size: 0.28,
          });
        }
        if (sloppy) {
          // the crash takes every point this jump was worth, landed tricks
          // included — the run only counts what you ride away from
          this.stumble(this.pending > 0 ? `crashed the landing — lost ${this.pending}` : 'crashed the landing');
          this.pending = 0;
        } else if (this.combo.length) {
          this.speed += 1.5; // clean landing keeps momentum
          const wasSwitch = this.switchRide;
          if (switchLanding) {
            // the spin only got halfway: it was a 180 all along
            const last = this.combo.length - 1;
            this.combo[last] = this.combo[last].replace('360', '180');
            this.switchRide = !wasSwitch;
            this._lookSide = this.spinDone < 0 ? -1 : 1;
          } else {
            // a completed spin lands where it was headed: forward unless a
            // full turn was thrown from switch (which brings it back around)
            this.switchRide = Math.abs(((facing + this.trickSpin) % TAU + TAU) % TAU - Math.PI) < 0.01;
          }
          // landing backwards from forward is the trick that pays; turning
          // back is the easy way round
          if (this.switchRide && !wasSwitch) {
            this.pending += SWITCH_PTS;
            this.combo.push('Switch landing');
          }
          this.style += this.pending;
          if (this.hud) this.hud.trickToast(`STOMPED IT  +${this.pending}`, this.combo.join(' + '));
          this.pending = 0;
        }
        this.pending = 0;
        this.trickSpin = this.spinDone = 0;
        this.trickFlip = this.flipDone = 0;
        this.combo = [];
        this._special = null;
        this._knuckle = false;
        this._halfDone = false;
        this.vy = 0;
        // off a pipe wall: land turned square across the pipe, facing the
        // middle, so the run carries back through the transition
        if (this._pipeReturn) {
          this.yaw = this.travelYaw = this._pipeReturn * 1.1;
          this._pipeReturn = 0;
        }
      } else {
        this.pos.set(nx, ny, nz);
      }
    }

    // continuous powder: wake at speed, roost off the drifting edge
    if (this.fx && !this.airborne && !(this._grindT > 0) && this.speed > 7) {
      // a railing edge under load throws its own clean plume even with no
      // slip; sliding (slip) and braking still roost the most
      const carve = Math.abs(this.slip) * 2.2 + Math.abs(this.latA) / 11 + (Math.abs(this.yaw) / MAX_YAW) * 0.25;
      const braking = inp.brake && !stumbling ? 1 : 0;
      const intensity = 0.15 + carve * 1.6 + braking * 3 + (stumbling ? 2 : 0);
      // finer grains, more of them: a mist rather than a few big puffs
      const rate = intensity * this.speed * 0.9;
      this._sprayAcc = (this._sprayAcc || 0) + rate * dt * 60;
      const side = Math.sign(this.yaw) || (Math.random() < 0.5 ? -1 : 1);
      while (this._sprayAcc >= 1) {
        this._sprayAcc -= 1;
        const back = 0.6 + Math.random() * 0.5;
        this.fx.spawn(
          this.pos.x - dir.x * back + side * -dir.z * 0.35,
          this.pos.y + 0.16,
          this.pos.z - dir.z * back + side * dir.x * 0.35,
          -dir.x * 2 + side * -dir.z * (1.5 + carve * 4 + braking * 5) + (Math.random() - 0.5) * 2,
          1.2 + carve * 2 + braking * 2.5 + Math.random() * 1.5,
          -dir.z * 2 + side * dir.x * (1.5 + carve * 4 + braking * 5) + (Math.random() - 0.5) * 2,
          0.15 + carve * 0.1 + braking * 0.15,
          0.5 + Math.random() * 0.4
        );
      }
    }

    // deep frontside carve: the trailing mitt brushes the snow and leaves
    // its own thin feather of spray behind the hand
    const mitt = this.rider.mittDrag ?? 0;
    if (this.fx && !this.airborne && mitt > 0.4 && this.rider.mittWorld && this.speed > 8) {
      this._mittAcc = (this._mittAcc || 0) + mitt * this.speed * 0.26 * dt * 60;
      const mw = this.rider.mittWorld;
      while (this._mittAcc >= 1) {
        this._mittAcc -= 1;
        this.fx.spawn(
          mw.x + (Math.random() - 0.5) * 0.12,
          mw.y - 0.05,
          mw.z + (Math.random() - 0.5) * 0.12,
          -dir.x * 1.5 + (Math.random() - 0.5) * 0.8,
          0.6 + Math.random() * 0.7,
          -dir.z * 1.5 + (Math.random() - 0.5) * 0.8,
          0.1 + Math.random() * 0.05,
          0.3 + Math.random() * 0.25
        );
      }
    }

    this._sync(dt);

    // legs work the terrain like suspension: rough snow = constant absorption
    const bumpTarget = this.airborne ? 0 : clamp(Math.abs(this.groundVy) * 0.045, 0, 0.4);
    this.bump = lerp(this.bump, bumpTarget, clamp(dt * 5, 0, 1));
    if (!this.airborne) {
      this.twist = lerp(this.twist ?? 0, 0, clamp(dt * 10, 0, 1));
      this.curl = lerp(this.curl ?? 0, 0, clamp(dt * 10, 0, 1));
    }

    // longitudinal G: the body gets thrown forward under braking and pressed
    // back under acceleration — the pose springs react to this
    const rawLongA = dt > 0 ? (this.speed - (this._prevSpeed ?? this.speed)) / dt : 0;
    this._prevSpeed = this.speed;
    this.longA = lerp(this.longA ?? 0, clamp(rawLongA, -18, 12), clamp(dt * 7, 0, 1));

    // a special's off-axis roll swells and dies over the flight
    const spAmt = this._special ? Math.sin(Math.PI * clamp(this._special.t / 0.9, 0, 1)) : 0;
    setPose(this.rider, {
      tuck: inp.tuck && !stumbling ? 1 : 0,
      brake: inp.brake && !stumbling ? 1 : 0,
      // lean comes from the actual centripetal force of the carve — felt
      // the other way round by a body riding backwards
      steer: clamp(this.latA / 11, -1, 1) * (this.switchRide ? -1 : 1),
      switchRide: this.switchRide,
      lookSide: this._lookSide,
      special: this._special ? { kind: this._special.kind, amt: spAmt } : null,
      drift: this._knuckle && this.airborne ? 1 : 0,
      // weight shifts back over the tails as the edge drifts, forward in a tuck
      shift: clamp((inp.tuck ? 0.45 : 0) - Math.abs(this.slip) * 1.3 - (inp.brake ? 0.5 : 0), -1, 0.5),
      stumble: this.stumbleT > 0 ? 1 : 0,
      knocked,
      airborne: this.airborne,
      crouch: clamp(this.landComp + this.bump, -0.2, 1), // a little negative: the rebound past standing
      speedNorm: clamp(this.speed / 26, 0, 1),
      longG: clamp(this.longA / 11, -1, 1),
      jolt: this.bump * 1.3,
      twist: this.twist ?? 0,
      curl: this.curl ?? 0,
      t: this.t,
      dt,
    });
  }

  /** Flattened by another rider. Harsher than a stumble — you go down. */
  /**
   * Solid hollow trunks, collided against the shell's real shape: the wood is
   * a tapered tube, so at the rider's own height it covers a lateral band
   * running from the bore wall out to the outer surface. A step landing in
   * that band is pushed back to the face it came from; the open bore, the air
   * over the top and the buried belly underneath are all free.
   */
  _tubeClamp(nx, nz, dir) {
    const RIDER = 0.55; // half-width of the board and body
    for (const tb of this.terrain.hollowTubes) {
      // trunk frame: `along` runs up the bore axis toward the uphill mouth,
      // `lat` square across it. (ax, az) is the axis heading in world x/z, so
      // in the (s, x) the physics works in it reads as (-az, ax).
      const dsN = -nz - tb.s0;
      const dxN = nx - tb.x;
      const alongN = dxN * tb.ax - dsN * tb.az;
      if (Math.abs(alongN) > tb.halfL) continue;
      const latN = dxN * tb.az + dsN * tb.ax;
      const dsO = -this.pos.z - tb.s0;
      const dxO = this.pos.x - tb.x;
      const alongO = dxO * tb.ax - dsO * tb.az;
      const latO = dxO * tb.az + dsO * tb.ax;
      const { rIn, rOut } = tubeRadii(tb, alongN);
      const axisY = tb.axY0 + alongN * tb.axSlope;
      // the wood the standing rider can reach: widest lateral span of the
      // shell across the board-to-shoulders slice of the section
      let inner = Infinity;
      let outer = 0;
      for (const h of [0.12, 1.5]) {
        const v = this.pos.y + h - axisY;
        if (Math.abs(v) >= rOut) continue; // clear over the top or under the belly
        outer = Math.max(outer, Math.sqrt(rOut * rOut - v * v));
        inner = Math.min(inner, Math.abs(v) < rIn ? Math.sqrt(rIn * rIn - v * v) : 0);
      }
      if (outer === 0) continue;
      if (inner === Infinity) inner = 0;
      const aLat = Math.abs(latN);
      if (aLat + RIDER <= inner || aLat - RIDER >= outer) continue; // in the bore, or clear of the trunk
      // running into the cut rim at either mouth stops you cold
      if (Math.abs(alongO) > tb.halfL) {
        const stopA = Math.sign(alongO) * (tb.halfL + 0.35);
        nx = tb.x + tb.ax * stopA + tb.az * latN;
        nz = -(tb.s0 - tb.az * stopA + tb.ax * latN);
        this.speed *= 0.25;
        if (!this.airborne && this.stumbleT <= 0 && this.immuneT <= 0) this.stumble('slammed a log');
        continue;
      }
      // resolve to whichever face is shallower: a line narrowing into the
      // taper gets held inside the bore, a flank hit gets pushed back out
      const inFace = Math.max(0, inner - RIDER);
      const outFace = outer + RIDER;
      const lat = Math.sign(latN || latO || 1) * (aLat - inFace <= outFace - aLat ? inFace : outFace);
      nx = tb.x + tb.ax * alongN + tb.az * lat;
      nz = -(tb.s0 - tb.az * alongN + tb.ax * lat);
      // ride it out along the trunk rather than stopping dead against it
      const alongVel = dir.x * tb.ax + dir.z * tb.az;
      this.travelYaw = alongVel >= 0 ? Math.atan2(tb.ax, -tb.az) : Math.atan2(-tb.ax, tb.az);
      this.speed *= Math.min(1, Math.abs(alongVel)) * 0.9;
    }
    return { nx, nz };
  }

  knockDown(byName) {
    if (this.knockT > 0) return;
    this.knockT = 1.7;
    this.speed *= 0.25;
    this.switchRide = false;
    if (this.hud) this.hud.stumbleFlash(`taken out by ${byName}!`);
    if (this.fx) {
      const dir = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
      this.fx.burst(this.pos, dir, { count: 130, speed: 6, up: 4.5, spread: 2.6, size: 0.28 });
    }
  }

  _collide() {
    // just been down: a short grace so a rider dropped into a thicket rides
    // out of it instead of bouncing tree to tree
    if (this.stumbleT > 0 || this.immuneT > 0) return;
    const s = this.progress;
    for (const o of this.terrain.obstaclesNear(s - 6, s + 6)) {
      const dx = this.pos.x - o.x;
      const dz = this.pos.z - o.z;
      if (o.kind === 'rock') {
        // boulders hit on their own outline (yawed and scaled like the
        // instance), plus a shoulder's width — riding past one clean stays
        // clean. r is only the broad phase.
        const r = o.r + ROCK_PAD;
        if (dx * dx + dz * dz > r * r) continue;
        const hit = rockPenetration(o, dx, dz);
        if (hit.depth > -ROCK_PAD) {
          this.stumble('hit a boulder');
          this.pos.x += hit.nx * 1.2;
          this.pos.z += hit.nz * 1.2;
          break;
        }
        continue;
      }
      const r = o.r + 0.7;
      if (dx * dx + dz * dz < r * r) {
        this.stumble(o.kind === 'tree' ? 'clipped a tree' : 'slammed a log');
        // shove clear so we don't re-trigger
        const d = Math.max(0.1, Math.hypot(dx, dz));
        this.pos.x += (dx / d) * 1.2;
        this.pos.z += (dz / d) * 1.2;
        break;
      }
    }
  }

  stumble(reason) {
    this.stumbleT = 1.3;
    this.immuneT = 2.5;
    this.speed *= 0.35;
    this.switchRide = false; // back up facing the way you came in
    if (this.hud) this.hud.stumbleFlash(reason);
    if (this.fx) {
      const dir = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
      this.fx.burst(this.pos, dir, { count: 100, speed: 5, up: 4, spread: 2.2, size: 0.28 });
    }
  }

  _sync(dt) {
    const t = this.terrain;
    this.obj.position.copy(this.pos);
    // ride ON the rendered surface: the mesh interpolates above the analytic
    // height between samples, so lift slightly to keep gear visible
    if (!this.airborne) this.obj.position.y += 0.09;

    // the whole rider stands on the local snow: the root is tilted onto
    // the full ground normal (fore-aft AND side-to-side), then yawed, so
    // the gear lies flush whichever way it points — a board checked
    // sideways across a cross-slope no longer buries its nose. Airborne
    // the tilt eases back upright while the rig carries the tricks.
    const k = clamp(dt * 8, 0, 1);
    // riding switch the whole rider (gear included) is turned half round on
    // the rig; spins in the air run on from wherever the body faces
    const facing = this.switchRide ? Math.PI : 0;
    if (!this.airborne) {
      const n = t.groundNormalAt(this.pos.x, this.pos.z, this._n);
      this._tilt.slerp(new THREE.Quaternion().setFromUnitVectors(UP, n), k);
      this.rider.rig.rotation.x = lerp(this.rider.rig.rotation.x % (Math.PI * 2), 0, k);
      this.rider.rig.rotation.y = facing;
      this._roll.slerp(IDENTITY_Q, k);
    } else {
      this._tilt.slerp(IDENTITY_Q, clamp(dt * 2, 0, 1));
      this.rider.rig.rotation.y = facing + this.spinDone;
      this.rider.rig.rotation.x = this.flipDone;
      // a special corks off-axis: a roll on the root that swells mid-flight
      const roll = this._special ? this._special.roll * Math.sin(Math.PI * clamp(this._special.t / 0.9, 0, 1)) : 0;
      this._roll.setFromAxisAngle(FWD, roll);
    }
    this._yawQ.setFromAxisAngle(UP, -this.yaw);
    this.obj.quaternion.copy(this._tilt).multiply(this._yawQ).multiply(this._roll);

    // ghosted while immune after a stumble: a soft flicker, like a respawn
    const ghost = this.immuneT > 0 ? 0.45 + 0.2 * Math.sin(this.t * 22) : 1;
    if (ghost !== this._ghost) {
      this._ghost = ghost;
      for (const m of this._mats) {
        m.transparent = ghost < 1;
        m.opacity = ghost;
        m.depthWrite = ghost >= 1;
      }
    }

    // blob shadow hugs the snow
    const gy = t.groundAt(this.pos.x, this.pos.z);
    this.rider.shadow.position.y = gy - this.pos.y + 0.06;
    const h = clamp(this.pos.y - gy, 0, 10);
    this.rider.shadow.scale.setScalar(clamp(1 - h * 0.07, 0.3, 1));
  }
}

function approach(v, target, step) {
  if (v < target) return Math.min(target, v + step);
  return Math.max(target, v - step);
}
