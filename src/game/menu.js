// The lodge: a hero shot of the player in their kit on their ride, standing
// on the snow just below the start house with the camera hovering around
// them, while the field fills the gates behind. The player dresses, picks a
// ride and a bet here; the pro shop hangs off the same screen.
import * as THREE from 'three';
import { Terrain } from './terrain.js';
import { createRider, setPose } from './riderMesh.js';
import { MenuHud } from './hud.js';
import { makeSky, addLights, aimSun, Snowfall } from './world.js';
import { SprayPool } from './snowfx.js';
import { StartGate } from './startgate.js';
import { mulberry32 } from './rng.js';
import { pickBots } from './names.js';
import { EQUIPMENT, equipmentById } from './equipment.js';
import { outfitById } from './wardrobe.js';
import { state, save } from './state.js';

/** Deterministic lobby roster for a seed — shared by the lobby scene and quick re-races. */
export function rosterFor(seed) {
  const rng = mulberry32(seed ^ 0x5eed);
  const identities = pickBots(rng);
  const gear = identities.map(() => EQUIPMENT[Math.floor(rng() * EQUIPMENT.length)]);
  const lanes = [0, 1, 3, 4].sort(() => rng() - 0.5);
  return identities.map((identity, i) => ({ identity, gear: gear[i], lane: lanes[i] }));
}

// The fitting room, bet and start button stack up the bottom of the screen,
// so the hero is framed in the top part: the view is shifted so the rider
// (board included) sits above the panels instead of centred behind them.
const HERO_LIFT = 0.2; // fraction of the viewport height the frame moves up

export class MenuScene {
  /**
   * @param {number} seed course + race seed (shared with the race so the vista
   *   behind the gates IS the mountain about to be raced)
   * @param {(opts:{seed:number,bet:number,gear:object,outfit:object,bots:object[]}) => void} onStart
   */
  constructor(seed, onStart) {
    this.seed = seed;
    this.onStart = onStart;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xdcefff, 220, 1100);
    // a wider lens than the chase camera: the rider stays big and close
    // while the start house still fits in above them
    this.camera = new THREE.PerspectiveCamera(64, innerWidth / innerHeight, 0.1, 4000);

    this.terrain = new Terrain(seed);
    const tg = new THREE.Group();
    this.terrain.build(tg);
    this.scene.add(tg);
    this.scene.add(makeSky());
    this.sun = addLights(this.scene).sun;
    const gate = this.terrain.gateLanes[2];
    aimSun(this.sun, new THREE.Vector3(gate.x, this.terrain.heightAt(gate.x, gate.z), gate.z));
    this.snow = new Snowfall(this.scene, 350);
    this.gate = new StartGate(this.terrain);
    this.scene.add(this.gate.group);
    this._laneNames = [null, null, 'You', null, null]; // gate LED screens
    this.gate.setRoster(this._laneNames);
    this.fx = new SprayPool(this.scene, 220); // ambient smoke-machine wisps

    // lane 2 (center) is the player's; bots take the rest
    const roster = rosterFor(seed);
    this.botIdentities = roster.map((r) => r.identity);
    this.botGear = roster.map((r) => r.gear);
    this.botLanes = roster.map((r) => r.lane);
    const rng = mulberry32(seed ^ 0x10bb1);

    // the hero stands on open snow a little below the gate line, facing
    // down the hill — the camera circles in front
    this.hero = new THREE.Vector3(gate.x, 0, gate.z - 12);
    this.hero.y = this.terrain.groundAt(this.hero.x, this.hero.z);
    this.playerRider = null;
    this._dress();

    // bots pile into the lobby fast — every seat filled within ~2 seconds,
    // each on its own independently random clock so the order feels organic
    this.joinQueue = this.botIdentities.map((b, i) => ({
      at: 0.25 + rng() * 1.65,
      identity: b,
      gear: this.botGear[i],
      lane: this.botLanes[i],
      joined: false,
    }));
    this.botRiders = [];

    this.hud = new MenuHud({
      onGearChange: (g) => {
        state.gearId = g.id;
        save();
        this._dress();
      },
      onOutfitChange: (o) => {
        state.outfitId = o.id;
        save();
        this._dress();
      },
      onBetChange: () => save(),
      onStart: () => this._start(),
    });

    this.t = 0;

    // debug/test hook (also handy in devtools)
    window.__fp = { menu: this, setPose };
  }

  /** Rebuild the hero in the current ride and outfit. */
  _dress() {
    if (this.playerRider) this.scene.remove(this.playerRider.root);
    const gear = equipmentById(state.gearId);
    const outfit = outfitById(state.outfitId);
    this.playerRider = createRider(gear, 0xfbbf24, outfit);
    this.playerRider.root.position.copy(this.hero);
    this.scene.add(this.playerRider.root);
  }

  _start() {
    save();
    this.onStart({
      seed: this.seed,
      bet: this.hud.bet,
      gear: this.hud.gear,
      outfit: this.hud.outfit,
      bots: this.botIdentities.map((b, i) => ({
        identity: b,
        gear: this.botGear[i],
        lane: this.botLanes[i],
      })),
    });
  }

  update(dt) {
    this.t += dt;

    // lobby joins
    for (const j of this.joinQueue) {
      if (!j.joined && this.t >= j.at) {
        j.joined = true;
        const rider = createRider(j.gear, j.identity.color);
        const lane = this.terrain.gateLanes[j.lane];
        rider.root.position.set(lane.x, this.terrain.groundAt(lane.x, lane.z), lane.z);
        this.scene.add(rider.root);
        this.botRiders.push(rider);
        this.hud.addRider({ name: j.identity.name, color: j.identity.color, gearName: j.gear.name });
        this._laneNames[j.lane] = j.identity.name;
        this.gate.setRoster(this._laneNames);
      }
    }

    // the field breathes in the gates; the hero stands and breathes too
    for (const [i, r] of this.botRiders.entries()) {
      setPose(r, { idle: true, t: this.t + i * 1.7, dt });
      r.rig.rotation.z = Math.sin(this.t * 1.3 + i * 2.1) * 0.03;
    }
    if (this.playerRider) setPose(this.playerRider, { idle: true, t: this.t, dt });

    // hovering hero camera: a slow swing across the front of the rider,
    // the start house rising behind
    const h = this.hero;
    const a = Math.sin(this.t * 0.22) * 0.75;
    const R = 4.0;
    const cx = h.x + Math.sin(a) * R;
    const cz = h.z - Math.cos(a) * R;
    // low and tilted up: on this grade a chest-high camera only sees snow
    // behind the rider, but from knee height the gate booths and the start
    // house rise into the frame behind them
    const cy = Math.max(h.y + 0.9 + Math.sin(this.t * 0.31) * 0.12, this.terrain.groundAt(cx, cz) + 0.7);
    this.camera.position.set(cx, cy, cz);
    this.camera.lookAt(h.x, h.y + 1.4, h.z);

    this.gate.update(dt, this.t, this.fx, null, this.camera.position.z);
    this.fx.update(dt);
    this.snow.update(dt, this.camera.position);
  }

  resize(w, h) {
    this.camera.aspect = w / h;
    // render a window sitting lower in the full frame, so everything the
    // camera looks at lands higher on screen — the hero clears the panels
    this.camera.setViewOffset(w, h, 0, Math.round(h * HERO_LIFT), w, h);
    this.camera.updateProjectionMatrix();
  }

  destroy() {
    this.hud.destroy();
  }
}
