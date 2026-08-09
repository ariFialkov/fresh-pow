// Player rider: arcade downhill physics on the heightfield, air time, tricks.
// Skill here changes how the run FEELS — speed, style, stumbles — but never the
// betting result: bots pace themselves around whatever the player does.
import * as THREE from 'three';
import { createRider, setPose } from './riderMesh.js';
import { clamp, lerp } from './rng.js';

const G = 12.5; // arcade gravity along the slope
const AIR_G = 18;
const DRAG_K = 0.0031; // terminal ~ sqrt(G*grade/K)
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

    this.pos = new THREE.Vector3();
    this.yaw = 0; // 0 = straight downhill (-z)
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
    const stumbling = this.stumbleT > 0 || this.knockT > 0;
    if (this.stumbleT > 0) this.stumbleT -= dt;
    this.landComp = Math.max(0, this.landComp - dt * 2.6);

    // ---- steering ----
    const steerIn = stumbling ? inp.steer * 0.25 : inp.steer;
    const targetYaw = clamp(steerIn, -1, 1) * MAX_YAW;
    this.yaw = lerp(this.yaw, targetYaw, clamp(dt * (this.airborne ? 1.2 : 5.2), 0, 1));

    const dir = new THREE.Vector3(Math.sin(this.yaw), 0, -Math.cos(this.yaw));

    if (!this.airborne) {
      // ---- slope acceleration along heading ----
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

      // fresh brake press throws a plume off the now-sideways edge
      if (braking && !this._wasBraking && this.fx && this.speed > 8) {
        const side = Math.sign(inp.steer) || 1;
        this.fx.burst(this.pos, { x: side * -dir.z, z: side * dir.x }, {
          count: 18, speed: 5, up: 3, spread: 1.1, size: 1.2,
        });
      }
      this._wasBraking = braking;
      // carving scrubs a little speed
      a -= Math.abs(this.yaw) * 0.9;

      this.speed = Math.max(0, this.speed + a * dt);

      // ---- move & follow / leave the ground ----
      const nx = this.pos.x + dir.x * this.speed * dt;
      const nz = this.pos.z + dir.z * this.speed * dt;
      const ground = t.heightAt(nx, nz);
      const rate = dt > 0 ? (ground - this.pos.y) / dt : 0;
      this.groundVy = lerp(this.groundVy, clamp(rate, -30, 30), clamp(dt * 10, 0, 1));

      if (ground < this.pos.y - 0.55 && this.speed > 6) {
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
      this.vy -= AIR_G * dt;
      this.speed = Math.max(0, this.speed - DRAG_K * 0.4 * this.speed * this.speed * dt);
      const nx = this.pos.x + dir.x * this.speed * dt;
      const nz = this.pos.z + dir.z * this.speed * dt;
      const ny = this.pos.y + this.vy * dt;
      const ground = t.heightAt(nx, nz);

      // animate tricks toward their targets
      const spinRate = 7.5, flipRate = 6.5;
      this.spinDone = approach(this.spinDone, this.trickSpin, spinRate * dt);
      this.flipDone = approach(this.flipDone, this.trickFlip, flipRate * dt);

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
            count: 10 + Math.round(impact * 26),
            speed: 3 + impact * 6,
            up: 2.5 + impact * 3,
            spread: 1.4,
            size: 1.3,
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

    // continuous powder: wake at speed, fans off carves, roost when braking
    if (this.fx && !this.airborne && this.speed > 7) {
      const carve = Math.abs(this.yaw) / MAX_YAW;
      const braking = inp.brake && !stumbling ? 1 : 0;
      const intensity = 0.15 + carve * 1.6 + braking * 3 + (stumbling ? 2 : 0);
      const rate = intensity * this.speed * 0.14;
      this._sprayAcc = (this._sprayAcc || 0) + rate * dt * 60;
      const side = Math.sign(this.yaw) || (Math.random() < 0.5 ? -1 : 1);
      while (this._sprayAcc >= 1) {
        this._sprayAcc -= 1;
        const back = 0.6 + Math.random() * 0.5;
        this.fx.spawn(
          this.pos.x - dir.x * back + side * -dir.z * 0.35,
          this.pos.y + 0.06,
          this.pos.z - dir.z * back + side * dir.x * 0.35,
          -dir.x * 2 + side * -dir.z * (1.5 + carve * 4 + braking * 5) + (Math.random() - 0.5) * 2,
          1.2 + carve * 2 + braking * 2.5 + Math.random() * 1.5,
          -dir.z * 2 + side * dir.x * (1.5 + carve * 4 + braking * 5) + (Math.random() - 0.5) * 2,
          0.7 + carve * 0.5 + braking * 0.7,
          0.5 + Math.random() * 0.4
        );
      }
    }

    this._sync(dt);

    setPose(this.rider, {
      tuck: inp.tuck && !stumbling ? 1 : 0,
      brake: inp.brake && !stumbling ? 1 : 0,
      steer: this.yaw / MAX_YAW,
      stumble: this.stumbleT > 0 ? 1 : 0,
      knocked,
      airborne: this.airborne,
      crouch: this.landComp,
      speedNorm: clamp(this.speed / 42, 0, 1),
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
      this.fx.burst(this.pos, dir, { count: 34, speed: 6, up: 4.5, spread: 2.6, size: 1.5 });
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
        this.stumble(o.kind === 'tree' ? 'clipped a tree' : 'hit a boulder');
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
      this.fx.burst(this.pos, dir, { count: 26, speed: 5, up: 4, spread: 2.2, size: 1.4 });
    }
  }

  _sync(dt) {
    const t = this.terrain;
    this.obj.position.copy(this.pos);
    // riding IN the snow, not on it: settle slightly into the surface
    if (!this.airborne) this.obj.position.y -= 0.05 + Math.min(0.04, this.speed * 0.001);
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
