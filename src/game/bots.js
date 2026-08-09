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
    const weave = Math.sin(s * 0.045 + this.weavePhase) * 7 + Math.sin(s * 0.013 + this.weavePhase * 2) * 6;
    const laneBias = this.personality * 0.35;
    const x = this.terrain.centerAt(s) + clamp(weave + laneBias, -COURSE.halfWidth * 0.8, COURSE.halfWidth * 0.8);
    return x;
  }

  update(dt, race) {
    if (this.frozen) return;
    this._t += dt;
    if (this.stumbleT > 0) this.stumbleT -= dt;

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
      // glide out and stop in the corral
      v = Math.max(0, this.speed - 8 * dt);
    } else if (this.autopilot || playerFinished || this.d > L - 45) {
      // free running to the line (only reachable in this state if allowed ahead
      // or the player already finished)
      v = Math.min(this.speed + 6 * dt, CRUISE + this.personality * 0.2);
    } else {
      // ---- paced racing around the player ----
      const drama = 30 * noise1(this._t * 0.07 + this.seed * 7.1, 313) + this.personality;
      const blend = smoothstep(0.7 * L, 0.93 * L, Math.max(playerD, this.d));
      const gap = this.ahead ? Math.abs(this.finalGap) : -Math.abs(this.finalGap);
      const offset = lerp(drama, gap, blend);
      const desired = playerD + offset;
      // ahead-bots rubber-band above the player's speed so a tucked sprint
      // can never out-run a rider destined to finish in front
      const vmax = this.ahead ? Math.max(VMAX, race.player.speed + 8) : VMAX;
      v = clamp(CRUISE + GAIN * (desired - this.d), this.ahead ? 5 : 0, vmax);

      // scripted drama: brief stumbles when the pacing noise dives
      if (this.stumbleT <= 0 && noise1(this._t * 0.11 + this.seed * 3.7, 577) > 0.86) {
        this.stumbleT = 1.1;
      }
      if (this.stumbleT > 0) v *= 0.45;

      // player parked mid-race? riders destined ahead eventually just send it
      if (this.ahead && race.playerStallTime > 5) this.autopilot = true;
    }

    this.speed = lerp(this.speed, v, clamp(dt * 2.5, 0, 1));
    this.d += this.speed * dt;

    // the "finishes behind" guarantee — never cross before the player does
    if (!this.ahead && !playerFinished && !this.finished) {
      this.d = Math.min(this.d, Math.max(playerD - 4, 2));
    }
    // the "finishes ahead" guarantee — as the player closes on the line, a
    // rider destined in front is always at least a couple of meters in front
    if (this.ahead && !playerFinished && !this.finished && playerD > L - 60) {
      this.d = Math.max(this.d, playerD + 2.5);
    }

    // ---- place on the mountain ----
    const x = this.lineAt(this.d);
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

    this.obj.position.set(x, this.y, z);

    // heading from the line derivative
    const ahead = 3;
    const yaw = Math.atan2(this.lineAt(this.d + ahead) - x, ahead);
    this.obj.rotation.y = -yaw;

    if (!airborne) {
      const n = this.terrain.normalAt(x, z);
      this.rider.rig.rotation.x = Math.atan2(-n.z, n.y) * -0.85;
    }

    const carve = Math.cos(this.d * 0.045 + this.weavePhase);
    setPose(this.rider, {
      steer: clamp(carve, -1, 1) * 0.7,
      tuck: this.speed > 34 ? 1 : 0,
      stumble: this.stumbleT > 0 ? 1 : 0,
      airborne,
    });

    // shadow
    this.rider.shadow.position.y = ground - this.y + 0.06;
    const h = clamp(this.y - ground, 0, 10);
    this.rider.shadow.scale.setScalar(clamp(1 - h * 0.07, 0.3, 1));
  }
}
