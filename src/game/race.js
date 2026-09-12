// The race itself: countdown, chase camera, live standings, finish + payout.
// The finishing order was drawn from the paytable before the gates open —
// everything the bots do afterwards is theater in service of that draw.
import * as THREE from 'three';
import { Terrain } from './terrain.js';
import { FORMATS, liveBotStyle, settleScores } from './formats.js';
import { Player } from './player.js';
import { Bot } from './bots.js';
import { RaceHud, showResults } from './hud.js';
import { makeSky, addLights, aimSun, Snowfall } from './world.js';
import { SprayPool, GearTrails } from './snowfx.js';
import { StartGate } from './startgate.js';
import { mulberry32, smoothstep } from './rng.js';
import { drawOutcome, multiplierFor, EVENTS } from './rtp.js';
import { THEMES } from './themes.js';
import { Animals } from './animals.js';
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
    this.event = opts.event ?? EVENTS[2];
    this.format = opts.format ?? FORMATS[0];
    // solo formats: the player runs the course alone and the field's runs
    // are posted afterwards, one by one
    this.solo = !!this.format.solo;
    const theme = THEMES[this.event.theme];
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(theme.fog, theme.fogNear * 0.8, theme.fogFar * 0.85);
    this.camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.1, 4000);

    this.terrain = new Terrain(opts.seed, theme, this.format.id);
    const tg = new THREE.Group();
    this.terrain.build(tg);
    this.scene.add(tg);
    this.scene.add(makeSky(theme));
    this.sun = addLights(this.scene, theme).sun;
    this.snow = new Snowfall(this.scene);

    // ---- the draw: outcome decided here, before anyone moves ----
    const raceRng = mulberry32(opts.seed ^ 0xbe77e7);
    this.outcome = drawOutcome(raceRng, opts.bet, this.event.table);
    state.balance = Math.round((state.balance - opts.bet) * 100) / 100;
    save();

    this.hud = new RaceHud(this.format);
    // spray matches this mountain's snow tone, lifted toward white the way
    // airborne powder catches the light
    const sprayCol = new THREE.Color(this.terrain.theme.snow).lerp(new THREE.Color(1, 1, 1), 0.75);
    this.fx = new SprayPool(this.scene, 5000, { color: [sprayCol.r, sprayCol.g, sprayCol.b] });
    this.pyro = new SprayPool(this.scene, 320, { color: [1, 0.7, 0.3], blending: THREE.AdditiveBlending, gravity: 5 });
    this.gate = new StartGate(this.terrain);
    this.scene.add(this.gate.group);
    // the judged showpieces keep the course clear — no wildlife crossing the pipe
    this.animals = this.format.scored === 'style'
      ? { events: [], active: [], update() {} }
      : new Animals(this.scene, this.terrain, this.event.theme, opts.seed);
    const laneNames = [null, null, 'You', null, null];
    for (const b of opts.bots) laneNames[b.lane] = b.identity.name;
    this.gate.setRoster(laneNames);
    this.player = new Player(this.terrain, opts.gear, input, this.hud);
    this.player.fx = this.fx;
    const playerLane = this.terrain.gateLanes[2];
    this.player.placeAt(playerLane.x, playerLane.z);
    this.scene.add(this.player.obj);
    this.playerTrail = new GearTrails(this.scene, this.terrain, opts.gear);

    this.bots = opts.bots.map((b, i) => {
      const rank = this.outcome.botPositions[i];
      const ahead = rank < this.outcome.playerPos;
      // race scripts: some riders charge late, some lead early and fade —
      // volatility theater on top of the deterministic draw
      const roll = raceRng();
      const script = ahead
        ? roll < 0.4 ? 'lateCharge' : 'steady'
        : roll < 0.45 ? 'earlyLead' : 'steady';
      const bot = new Bot({
        terrain: this.terrain,
        gear: b.gear,
        identity: b.identity,
        seed: (opts.seed % 1000) + i * 97 + raceRng() * 50,
        rank,
        playerRank: this.outcome.playerPos,
        // tight, strictly ordered gaps (jitter < spacing): photo-finish
        // margins that still cross in the drawn order
        finalGap: Math.abs(rank - this.outcome.playerPos) * 4.5 + 2 + raceRng() * 2.5,
        script,
        lane: this.terrain.gateLanes[b.lane],
      });
      if (!this.solo) this.scene.add(bot.obj);
      bot.trail = new GearTrails(this.scene, this.terrain, b.gear);
      return bot;
    });

    this.time = 0;
    this.playerStallTime = 0;
    this.playerKnocks = 0; // times the player has been flattened (capped)
    this.stateName = 'countdown';
    this.countdownT = 3.9; // small lead-in before "3"
    this._lastCount = null;
    this.finishOrder = [];
    this._camPos = new THREE.Vector3().copy(this.camera.position);
    this._resultsShown = false;

    // finish-line pyro: fires when the first rider crosses
    const fcx = this.terrain.centerAt(this.terrain.length);
    this._finishPorts = [-15, 15].map(
      (off) => new THREE.Vector3(fcx + off, this.terrain.heightAt(fcx + off, -this.terrain.length) + 9.8, -this.terrain.length)
    );
    this._finishPyroT = -1;

    // prime the camera behind the player
    this._updateCamera(1, true);

    // debug/test hook (also handy in devtools)
    window.__fp = { race: this };
  }

  onBotFinish(bot) {
    this.finishOrder.push({ name: bot.identity.name, color: bot.identity.color, me: false });
    this._firstCross();
  }

  _firstCross() {
    if (this._finishPyroT < 0) this._finishPyroT = 0;
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
        if (!this.solo) for (const b of this.bots) b.frozen = false;
        this.gate.setPhase('go'); // lights green, bars fly, pyro + smoke
      } else if (n !== this._lastCount && n <= 3) {
        this._lastCount = n;
        this.hud.countdown(String(n));
        if (n === 1) this.gate.setPhase('set');
      }
    }

    const racing = this.stateName === 'racing' || this.stateName === 'done';

    if (racing) {
      // track stalls so ahead-bots can eventually ride out
      if (this.player.speed < 2 && !this.player.finished) this.playerStallTime += dt;
      else this.playerStallTime = 0;

      this.player.update(dt);
      this.playerTrail.push(
        this.player.pos.x,
        this.player.pos.z,
        this.player.yaw,
        !this.player.airborne && !(this.player._grindT > 0),
        Math.abs(Math.sin(this.player.rider.gearGroup.rotation.y))
      );
      for (const b of this.solo ? [] : this.bots) {
        b.update(dt, this);
        b.trail.push(
          b.obj.position.x,
          b.obj.position.z,
          b.visYaw || 0,
          b.y <= this.terrain.heightAt(b.obj.position.x, b.obj.position.z) + 0.25,
          Math.abs(Math.sin(b.rider.gearGroup.rotation.y))
        );
      }
      if (!this.solo) {
        this._resolveRiderCollisions(dt);
        this._enforceDrawnOrder(dt);
      }

      // player crosses the line
      if (!this.player.finished && this.player.progress >= this.terrain.length) {
        this.player.finished = true;
        this.finishOrder.push({ name: 'You', color: 0xfbbf24, me: true });
        this._firstCross();
        this.stateName = 'done';
        this._finish();
      }
    }

    // bots' trick tallies are dealt around the player's — and never ahead
    // of a player who hasn't scored yet, so with zero on the board the draw
    // alone orders the judges' sheet
    const L = this.terrain.length;
    for (const b of this.bots) {
      b.style = liveBotStyle(this.player.style, this.outcome.playerPos - b.rank, b.d / L);
    }
    // live standings: race order by distance, or the judges' running tally
    // for the style formats (ties broken by the draw)
    const judged = this.format.scored === 'style';
    const live = [
      { name: 'You', color: 0xfbbf24, me: true, d: this.player.progress, done: this.player.finished, pts: this.player.style, pos: this.outcome.playerPos },
      ...(this.solo ? [] : this.bots).map((b) => ({ name: b.identity.name, color: b.identity.color, me: false, d: b.d, done: b.finished, pts: b.style, pos: b.rank })),
    ].sort((a, b) => (judged ? b.pts - a.pts || a.pos - b.pos : b.d - a.d));
    const rank = live.findIndex((r) => r.me) + 1;

    this.hud.update({
      rank,
      speed: this.player.speed,
      progress: Math.min(1, this.player.progress / L),
      board: live,
      style: this.player.style,
      solo: this.solo,
    });

    // neon FINISH signage: a lazy celebratory pulse that goes frantic once
    // the first rider is across
    if (this.terrain.finishSigns) {
      const rate = this._finishPyroT >= 0 ? 11 : 3.2;
      for (const [i, m] of this.terrain.finishSigns.entries()) {
        m.color.setScalar(0.62 + 0.38 * Math.sin(this.time * rate + i * 2.1));
      }
    }

    this.animals.update(dt, this.player.progress, this.player);
    this.fx.update(dt);
    this.pyro.update(dt);
    this.gate.update(dt, this.time, this.fx, null, this.camera.position.z); // pyro lives at the finish now

    // finish-line show: big opening salvo, then crackle for ~2 s
    if (this._finishPyroT >= 0 && this._finishPyroT < 2.0) {
      if (this._finishPyroT === 0) {
        for (const port of this._finishPorts) {
          this.pyro.burst(port, { x: 0, z: 0 }, { count: 30, speed: 6, up: 13, spread: Math.PI, size: 1.5, life: 1.2 });
        }
      }
      for (const port of this._finishPorts) {
        if (Math.random() < dt * 11) {
          this.pyro.burst(port, { x: 0, z: 0 }, { count: 9, speed: 4, up: 10 + Math.random() * 7, spread: Math.PI, size: 1.3, life: 1.0 });
        }
      }
      this._finishPyroT += dt;
    }
    this.playerTrail.update(dt);
    for (const b of this.bots) b.trail.update(dt);

    this._updateCamera(dt, false);
    aimSun(this.sun, this.player.pos); // keep the shadow frustum on the action
    this.snow.update(dt, this.camera.position);
  }

  /**
   * Rider-vs-rider contact: whoever is slower gets flattened; near-equal
   * speeds shove both riders apart with a wobble. Bots use this deliberately
   * (see Bot.aggro) to bump back past the player — pacing guarantees are
   * unaffected because the controllers work around whatever speed the player
   * has left.
   */
  _resolveRiderCollisions(dt) {
    const p = this.player;
    if (p.finished) return;
    for (const b of this.bots) {
      b._collideCd = Math.max(0, (b._collideCd || 0) - dt);
      if (b.finished || b.frozen || b._collideCd > 0) continue;
      const dx = b.obj.position.x - p.pos.x;
      const dz = b.obj.position.z - p.pos.z;
      const dy = Math.abs(b.obj.position.y - p.pos.y);
      // radius is generous to cover per-frame tunneling at high closing speed
      if (dx * dx + dz * dz > 1.6 * 1.6 || dy > 1.6) continue;

      b._collideCd = 3;
      b.aggroCooldown = 16 + Math.random() * 12;
      const side = Math.sign(dx) || 1;
      b._pushX += side * 1.5;

      if (b.speed > p.speed + 1.5) {
        // bot rolls through the player
        this.playerKnocks++;
        p.knockDown(b.identity.name);
      } else if (p.speed > b.speed + 1.5) {
        b.knockDown();
        this.hud.trickToast('BOOM!', `you took out ${b.identity.name}`);
        this.fx.burst(b.obj.position, { x: 0, z: -1 }, { count: 100, speed: 5, up: 4, spread: 2.4, size: 0.28 });
        p.speed *= 0.9; // shoulder check isn't free
      } else {
        // trading paint at matched speed — both wobble apart
        p.stumbleT = Math.max(p.stumbleT, 0.7);
        b.stumbleT = Math.max(b.stumbleT, 0.7);
        p.pos.x -= side * 0.8;
      }
    }
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
    const near = Math.max(playerD, ...active.map((b) => b.d)) > 0.86 * this.terrain.length;
    if (!near) return;

    active.sort((a, b) => a.rank - b.rank); // rank 1 must cross first = largest d
    for (let i = active.length - 2; i >= 0; i--) {
      const better = active[i];
      const worse = active[i + 1];
      const need = worse.d + 2.2 - better.d;
      if (need > 0) {
        // urgent when the worse-ranked rider is closing on the line
        const rate = worse.d > this.terrain.length - 25 ? 80 : 18;
        better.d += Math.min(need, rate * dt);
      }
    }
    if (!this.player.finished) {
      // same progressive ceiling the bots use themselves — never a snap-back
      const L = this.terrain.length;
      const allowance = 38 * (1 - smoothstep(L - 260, L - 130, playerD));
      for (const b of active) {
        if (!b.ahead) b.d = Math.min(b.d, Math.max(playerD - 4 + allowance, 2), L - 55);
      }
    }
  }

  _finish() {
    // the drawn position is what pays — and thanks to the pacing guarantees
    // it matches what just crossed the line
    const { playerPos, bet, payout } = this.outcome;
    state.balance = Math.round((state.balance + payout) * 100) / 100;
    save();

    // the sheet: the player's numbers are real, the bots' are dealt so the
    // format's totals rank in the drawn order (bots still on course get a
    // finish time projected at their current pace)
    const L = this.terrain.length;
    const scores = settleScores(this.format, {
      playerPos,
      playerStyle: this.player.style,
      playerTime: this.time,
      bots: this.bots.map((b) => ({ rank: b.rank, time: this.solo ? null : b.finishTime ?? this.time + (L - b.d) / Math.max(8, b.speed) })),
      rng: mulberry32(this.terrain.seed ^ 0x5c0e),
    });
    for (const b of this.bots) b.style = scores.bots.find((r) => r.rank === b.rank).style;
    const rows = [
      { pos: playerPos, name: 'You', color: 0xfbbf24, me: true, mult: multiplierFor(playerPos, this.event.table), score: scores.player },
      ...this.bots.map((b) => ({ pos: b.rank, name: b.identity.name, color: b.identity.color, me: false, score: scores.bots.find((r) => r.rank === b.rank) })),
    ].sort((a, b) => a.pos - b.pos);

    if (this._resultsShown) return;
    this._resultsShown = true;
    showResults({
      event: this.event,
      format: this.format,
      reveal: this.solo,
      standings: rows,
      playerPos,
      bet,
      payout,
      style: this.player.style,
      onAgain: () => this.cb.onExit('again'),
      onLodge: () => this.cb.onExit('lodge'),
    });
  }

  _updateCamera(dt, snap) {
    const p = this.player.pos;
    // tight, steady chase behind the direction of TRAVEL (not the board),
    // so drifts read as the board swinging out across the screen
    const yaw = this.player.travelYaw * 0.4;
    const back = 7.0;
    const target = new THREE.Vector3(
      p.x - Math.sin(yaw) * back,
      0,
      p.z + Math.cos(yaw) * back
    );
    // keep the camera above terrain behind the player
    const ground = this.terrain.heightAt(target.x, target.z);
    target.y = Math.max(p.y + 3.0, ground + 2.0);

    if (snap) {
      this._camPos.copy(target);
      this._lookAt = new THREE.Vector3(p.x, p.y + 1.3, p.z - 4);
    } else {
      const k = 1 - Math.exp(-dt * 3.6);
      this._camPos.lerp(target, k);
      this._lookAt.lerp(new THREE.Vector3(p.x, p.y + 1.3, p.z - 4), 1 - Math.exp(-dt * 6));
    }
    this.camera.position.copy(this._camPos);
    this.camera.lookAt(this._lookAt);

    // speed widens the lens gently — the "wind in your face" cue
    const targetFov = 58 + this.player.speed * 0.22 + (this.player.airborne ? 2 : 0);
    const fov = this.camera.fov + (targetFov - this.camera.fov) * Math.min(1, dt * 2.2);
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
    // the next race is built before this one is torn down and has already
    // claimed the swipe hook — only clear it if it is still ours, or every
    // re-race would start with tricks disconnected
    if (this.input.onSwipe === this.player._onSwipe) this.input.onSwipe = null;
  }
}
