// Player rider: arcade downhill physics on the heightfield, air time, tricks.
// Skill here changes how the run FEELS — speed, style, stumbles — but never the
// betting result: bots pace themselves around whatever the player does.
import * as THREE from 'three';
import { createRider, setPose } from './riderMesh.js';
import { clamp, lerp } from './rng.js';

const G = 8; // arcade gravity along the slope — deep snow eats the pull
const AIR_G = 15;
const DRAG_K = 0.0095; // terminal ~ sqrt(G*grade/K) — roughly half the old pace
const TUCK_DRAG = 0.55;
const BRAKE_DECEL = 14;
const MAX_YAW = 1.15; // radians away from straight downhill
const POP_WINDOW = 320; // ms after tuck release that still counts at the lip

const TRICK_NAMES = { left: 'Backside 360', right: 'Frontside 360', up: 'Front Flip', down: 'Backflip' };

export class Player {
  constructor(terrain, gear, input, hud) {
    this.terrain = terrain;
    this.input = input;
    this.hud = hud;
    this.rider = createRider(gear, 0xfbbf24);
    this.obj = this.rider.root;

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
    this.style = 0;

    input.onSwipe = (dir) => this._trick(dir);
  }

  placeAt(x, z) {
    this.pos.set(x, this.terrain.heightAt(x, z), z);
    this._sync(0);
  }

  get progress() {
    return -this.pos.z;
  }

  _trick(dir) {
    if (!this.airborne || this.finished) return;
    if (dir === 'left') this.trickSpin -= Math.PI * 2;
    else if (dir === 'right') this.trickSpin += Math.PI * 2;
    else if (dir === 'up') this.trickFlip -= Math.PI * 2;
    else this.trickFlip += Math.PI * 2;
    this.combo.push(TRICK_NAMES[dir]);
    this.style += 100 * this.combo.length; // combos build multipliers
    if (this.hud) this.hud.trickToast(this.combo.join(' + '), `+${100 * this.combo.length} style`);
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
      this.pos.set(nx, this.terrain.heightAt(nx, nz), nz);
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
    this.landComp = Math.max(0, this.landComp - dt * 2.6);

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
      const hHere = t.heightAt(this.pos.x, this.pos.z);
      const hAhead = t.heightAt(this.pos.x + dir.x * e, this.pos.z + dir.z * e);
      const slope = (hHere - hAhead) / e; // >0 when heading downhill
      let a = G * slope;

      // drag & braking
      const tucking = inp.tuck && !stumbling;
      const braking = inp.brake && !stumbling;
      const k = DRAG_K * (tucking ? TUCK_DRAG : 1) * (braking ? 4 : 1);
      a -= k * this.speed * this.speed;
      if (braking) a -= BRAKE_DECEL;
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

      this.speed = Math.max(0, this.speed + a * dt);

      // ---- move & follow / leave the ground ----
      let nx = this.pos.x + dir.x * this.speed * dt;
      const nz = this.pos.z + dir.z * this.speed * dt;

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

      const ground = t.heightAt(nx, nz);
      const rate = dt > 0 ? (ground - this.pos.y) / dt : 0;
      this.groundVy = lerp(this.groundVy, clamp(rate, -30, 30), clamp(dt * 10, 0, 1));

      // half-pipe lip: carrying speed up the near-vertical wall boosts you
      // off the lip — outward momentum converts to straight-up pop, so the
      // arc drops you back down flush with the wall you left
      const pp = t.pipeAt(nx, -nz);
      let lipLaunch = false;
      if (pp && Math.abs(pp.q) >= 0.97 && this._prevPipeQ != null && Math.abs(this._prevPipeQ) < 0.97
          && this.groundVy > 3 && this.speed > 7) {
        lipLaunch = true;
        this.airborne = true;
        this.vy = clamp(this.groundVy * 0.9, 5, 13);
        if (performance.now() - inp.lastTuckRelease < POP_WINDOW) {
          this.vy += 4.2;
          if (this.hud) this.hud.trickToast('POP!', 'off the lip');
        }
        // bleed the outward lateral speed; keep the downhill run
        const out = Math.sign(pp.q);
        let vx = dir.x * this.speed;
        const vz = dir.z * this.speed;
        if (vx * out > 0) vx *= 0.15;
        this.speed = Math.hypot(vx, vz);
        this.travelYaw = Math.atan2(vx, -vz);
        this.pos.set(nx, this.pos.y + this.vy * dt, nz);
      }
      this._prevPipeQ = pp ? pp.q : null;

      if (lipLaunch) {
        // airborne now — skip ground follow, collisions come back on landing
      } else if (ground < this.pos.y - 0.55 && this.speed > 6) {
        // ground fell away — takeoff
        this.airborne = true;
        this.vy = clamp(this.groundVy, 0, 9);
        // pop: released tuck right at the lip
        if (performance.now() - inp.lastTuckRelease < POP_WINDOW) {
          this.vy += 4.2;
          if (this.hud) this.hud.trickToast('POP!', 'perfect release');
        }
        this.pos.set(nx, this.pos.y + this.vy * dt, nz);
      } else {
        this.pos.set(nx, ground, nz);
        this.vy = 0;
      }

      if (!this.airborne) this._collide();
    } else {
      // ---- air ----
      this._prevPipeQ = null; // re-arm the lip launch only from riding, not landing
      this.vy -= AIR_G * dt;
      this.speed = Math.max(0, this.speed - DRAG_K * 0.4 * this.speed * this.speed * dt);
      const nx = this.pos.x + dir.x * this.speed * dt;
      const nz = this.pos.z + dir.z * this.speed * dt;
      const ny = this.pos.y + this.vy * dt;
      const ground = t.heightAt(nx, nz);

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
        this.pos.set(nx, ground, nz);
        this.airborne = false;
        const spinLeft = Math.abs(this.trickSpin - this.spinDone);
        const flipLeft = Math.abs(this.trickFlip - this.flipDone);
        const sloppy = spinLeft > 0.9 || flipLeft > 0.9;
        const impact = Math.min(1, -this.vy / 14);
        this.landComp = 0.4 + impact * 0.6;
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
          this.stumble('crashed the landing');
          this.style = Math.max(0, this.style - 150);
        } else if (this.combo.length) {
          this.speed += 1.5; // clean landing keeps momentum
          if (this.hud) this.hud.trickToast('STOMPED IT', this.combo.join(' + '));
        }
        this.trickSpin = this.spinDone = 0;
        this.trickFlip = this.flipDone = 0;
        this.combo = [];
        this.vy = 0;
      } else {
        this.pos.set(nx, ny, nz);
      }
    }

    // continuous powder: wake at speed, roost off the drifting edge
    if (this.fx && !this.airborne && this.speed > 7) {
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

    setPose(this.rider, {
      tuck: inp.tuck && !stumbling ? 1 : 0,
      brake: inp.brake && !stumbling ? 1 : 0,
      // lean comes from the actual centripetal force of the carve
      steer: clamp(this.latA / 11, -1, 1),
      // weight shifts back over the tails as the edge drifts, forward in a tuck
      shift: clamp((inp.tuck ? 0.45 : 0) - Math.abs(this.slip) * 1.3 - (inp.brake ? 0.5 : 0), -1, 0.5),
      stumble: this.stumbleT > 0 ? 1 : 0,
      knocked,
      airborne: this.airborne,
      crouch: clamp(this.landComp + this.bump, 0, 1),
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
  knockDown(byName) {
    if (this.knockT > 0) return;
    this.knockT = 1.7;
    this.speed *= 0.25;
    if (this.hud) this.hud.stumbleFlash(`taken out by ${byName}!`);
    if (this.fx) {
      const dir = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));
      this.fx.burst(this.pos, dir, { count: 130, speed: 6, up: 4.5, spread: 2.6, size: 0.28 });
    }
  }

  _collide() {
    if (this.stumbleT > 0) return;
    const s = this.progress;
    for (const o of this.terrain.obstaclesNear(s - 6, s + 6)) {
      const dx = this.pos.x - o.x;
      const dz = this.pos.z - o.z;
      const r = o.r + 0.7;
      if (dx * dx + dz * dz < r * r) {
        this.stumble(o.kind === 'tree' ? 'clipped a tree' : o.kind === 'log' ? 'slammed a log' : 'hit a boulder');
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
    this.speed *= 0.35;
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
    this.obj.rotation.y = -this.yaw;

    // align to slope when grounded, trick rotations when flying
    if (!this.airborne) {
      const n = t.normalAt(this.pos.x, this.pos.z);
      const pitch = Math.atan2(-n.z, n.y) * 0.85;
      this.rider.rig.rotation.x = lerp(this.rider.rig.rotation.x % (Math.PI * 2), -pitch, clamp(dt * 8, 0, 1));
      this.rider.rig.rotation.y = 0;
    } else {
      this.rider.rig.rotation.y = this.spinDone;
      this.rider.rig.rotation.x = this.flipDone;
    }

    // blob shadow hugs the snow
    const gy = t.heightAt(this.pos.x, this.pos.z);
    this.rider.shadow.position.y = gy - this.pos.y + 0.06;
    const h = clamp(this.pos.y - gy, 0, 10);
    this.rider.shadow.scale.setScalar(clamp(1 - h * 0.07, 0.3, 1));
  }
}

function approach(v, target, step) {
  if (v < target) return Math.min(target, v + step);
  return Math.max(target, v - step);
}
