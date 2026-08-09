// The race itself: countdown, chase camera, live standings, finish + payout.
// The finishing order was drawn from the paytable before the gates open —
// everything the bots do afterwards is theater in service of that draw.
import * as THREE from 'three';
import { Terrain, COURSE } from './terrain.js';
import { Player } from './player.js';
import { Bot } from './bots.js';
import { RaceHud, showResults } from './hud.js';
import { makeSky, addLights, Snowfall } from './world.js';
import { SprayPool, Trail } from './snowfx.js';
import { mulberry32 } from './rng.js';
import { drawOutcome, multiplierFor } from './rtp.js';
import { state, save } from './state.js';

export class RaceScene {
  /**
   * @param {{seed:number, bet:number, gear:object, bots:object[]}} opts
   * @param {Input} input
   * @param {{onExit:(next:'again'|'lodge')=>void}} cb
   */
  constructor(opts, input, cb) {
    this.cb = cb;
    this.input = input;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xdcefff, 180, 950);
    this.camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.1, 4000);

    this.terrain = new Terrain(opts.seed);
    const tg = new THREE.Group();
    this.terrain.build(tg);
    this.scene.add(tg);
    this.scene.add(makeSky());
    addLights(this.scene);
    this.snow = new Snowfall(this.scene);

    // ---- the draw: outcome decided here, before anyone moves ----
    const raceRng = mulberry32(opts.seed ^ 0xbe77e7);
    this.outcome = drawOutcome(raceRng, opts.bet);
    state.balance = Math.round((state.balance - opts.bet) * 100) / 100;
    save();

    this.hud = new RaceHud();
    this.fx = new SprayPool(this.scene);
    this.player = new Player(this.terrain, opts.gear, input, this.hud);
    this.player.fx = this.fx;
    const playerLane = this.terrain.gateLanes[2];
    this.player.placeAt(playerLane.x, playerLane.z);
    this.scene.add(this.player.obj);
    this.playerTrail = new Trail(this.scene, this.terrain, opts.gear.type === 'ski' ? 0.3 : 0.36);

    this.bots = opts.bots.map((b, i) => {
      const bot = new Bot({
        terrain: this.terrain,
        gear: b.gear,
        identity: b.identity,
        seed: (opts.seed % 1000) + i * 97 + raceRng() * 50,
        rank: this.outcome.botPositions[i],
        playerRank: this.outcome.playerPos,
        // strictly ordered by rank distance (jitter < spacing) so the bots
        // also cross the line in their drawn order relative to each other
        finalGap: Math.abs(this.outcome.botPositions[i] - this.outcome.playerPos) * 10 + 3 + raceRng() * 4,
        lane: this.terrain.gateLanes[b.lane],
      });
      this.scene.add(bot.obj);
      bot.trail = new Trail(this.scene, this.terrain);
      return bot;
    });

    this.time = 0;
    this.playerStallTime = 0;
    this.stateName = 'countdown';
    this.countdownT = 3.9; // small lead-in before "3"
    this._lastCount = null;
    this.finishOrder = [];
    this._camPos = new THREE.Vector3().copy(this.camera.position);
    this._resultsShown = false;

    // prime the camera behind the player
    this._updateCamera(1, true);

    // debug/test hook (also handy in devtools)
    window.__fp = { race: this };
  }

  onBotFinish(bot) {
    this.finishOrder.push({ name: bot.identity.name, color: bot.identity.color, me: false });
  }

  update(dt) {
    this.time += dt;

    if (this.stateName === 'countdown') {
      this.countdownT -= dt;
      const n = Math.ceil(this.countdownT);
      if (this.countdownT <= 0) {
        this.hud.countdown('GO!');
        setTimeout(() => this.hud.countdown(''), 800);
        this.stateName = 'racing';
        this.player.frozen = false;
        for (const b of this.bots) b.frozen = false;
      } else if (n !== this._lastCount && n <= 3) {
        this._lastCount = n;
        this.hud.countdown(String(n));
      }
    }

    const racing = this.stateName === 'racing' || this.stateName === 'done';

    if (racing) {
      // track stalls so ahead-bots can eventually ride out
      if (this.player.speed < 2 && !this.player.finished) this.playerStallTime += dt;
      else this.playerStallTime = 0;

      this.player.update(dt);
      this.playerTrail.push(this.player.pos.x, this.player.pos.z, !this.player.airborne);
      for (const b of this.bots) {
        b.update(dt, this);
        b.trail.push(b.obj.position.x, b.obj.position.z, b.y <= this.terrain.heightAt(b.obj.position.x, b.obj.position.z) + 0.25);
      }
      this._enforceDrawnOrder(dt);

      // player crosses the line
      if (!this.player.finished && this.player.progress >= COURSE.length) {
        this.player.finished = true;
        this.finishOrder.push({ name: 'You', color: 0xfbbf24, me: true });
        this.stateName = 'done';
        this._finish();
      }
    }

    // live standings: race order by distance (finished riders keep their slot)
    const live = [
      { name: 'You', color: 0xfbbf24, me: true, d: this.player.progress, done: this.player.finished },
      ...this.bots.map((b) => ({ name: b.identity.name, color: b.identity.color, me: false, d: b.d, done: b.finished })),
    ].sort((a, b) => b.d - a.d);
    const rank = live.findIndex((r) => r.me) + 1;

    this.hud.update({
      rank,
      speed: this.player.speed,
      progress: Math.min(1, this.player.progress / COURSE.length),
      board: live,
    });

    this.fx.update(dt);
    this.playerTrail.update(dt);
    for (const b of this.bots) b.trail.update(dt);

    this._updateCamera(dt, false);
    this.snow.update(dt, this.camera.position);
  }

  /**
   * Near the line, the bots' own controllers can still carry small ordering
   * errors from the drama phase. Nudge better-ranked riders forward (rate-
   * limited, so it reads as an overtake, never a teleport) until the pack
   * matches the drawn order, then re-assert the behind-the-player clamp.
   */
  _enforceDrawnOrder(dt) {
    const playerD = this.player.progress;
    const active = this.bots.filter((b) => !b.finished);
    if (!active.length) return;
    const near = Math.max(playerD, ...active.map((b) => b.d)) > 0.8 * COURSE.length;
    if (!near) return;

    active.sort((a, b) => a.rank - b.rank); // rank 1 must cross first = largest d
    for (let i = active.length - 2; i >= 0; i--) {
      const better = active[i];
      const worse = active[i + 1];
      const need = worse.d + 2.2 - better.d;
      if (need > 0) {
        // urgent when the worse-ranked rider is about to cross
        const rate = worse.d > COURSE.length - 8 ? 60 : 16;
        better.d += Math.min(need, rate * dt);
      }
    }
    if (!this.player.finished) {
      for (const b of active) {
        if (!b.ahead) b.d = Math.min(b.d, Math.max(playerD - 4, 2));
      }
    }
  }

  _finish() {
    // the drawn position is what pays — and thanks to the pacing guarantees
    // it matches what just crossed the line
    const { playerPos, bet, payout } = this.outcome;
    state.balance = Math.round((state.balance + payout) * 100) / 100;
    save();

    // full standings from the draw
    const rows = [
      { pos: playerPos, name: 'You', color: 0xfbbf24, me: true, mult: multiplierFor(playerPos) },
      ...this.bots.map((b) => ({ pos: b.rank, name: b.identity.name, color: b.identity.color, me: false })),
    ].sort((a, b) => a.pos - b.pos);

    setTimeout(() => {
      if (this._resultsShown) return;
      this._resultsShown = true;
      showResults({
        standings: rows,
        playerPos,
        bet,
        payout,
        style: this.player.style,
        onAgain: () => this.cb.onExit('again'),
        onLodge: () => this.cb.onExit('lodge'),
      });
    }, 1600);
  }

  _updateCamera(dt, snap) {
    const p = this.player.pos;
    const yaw = this.player.yaw * 0.5;
    const back = 8.5;
    const target = new THREE.Vector3(
      p.x - Math.sin(yaw) * back,
      0,
      p.z + Math.cos(yaw) * back
    );
    // keep the camera above terrain behind the player
    const ground = this.terrain.heightAt(target.x, target.z);
    target.y = Math.max(p.y + 3.6, ground + 2.2);

    if (snap) this._camPos.copy(target);
    else {
      const k = 1 - Math.exp(-dt * 5.5);
      this._camPos.lerp(target, k);
    }
    this.camera.position.copy(this._camPos);
    this.camera.lookAt(p.x, p.y + 1.4, p.z - 4);

    // speed widens the lens — the "wind in your face" cue
    const targetFov = 62 + this.player.speed * 0.36 + (this.player.airborne ? 3 : 0);
    const fov = this.camera.fov + (targetFov - this.camera.fov) * Math.min(1, dt * 4);
    if (Math.abs(fov - this.camera.fov) > 0.02) {
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }
  }

  resize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  destroy() {
    this.hud.destroy();
    this.input.onSwipe = null;
  }
}
