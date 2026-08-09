// The lodge / lobby scene: camera drifts above the start gates at the summit,
// looking down the actual course for the next race. Bots "join" the lobby one
// by one and take their gates; the player picks a ride and a bet.
import * as THREE from 'three';
import { Terrain } from './terrain.js';
import { createRider } from './riderMesh.js';
import { MenuHud } from './hud.js';
import { makeSky, addLights, Snowfall } from './world.js';
import { mulberry32 } from './rng.js';
import { pickBots } from './names.js';
import { EQUIPMENT } from './equipment.js';
import { state, save } from './state.js';

/** Deterministic lobby roster for a seed — shared by the lobby scene and quick re-races. */
export function rosterFor(seed) {
  const rng = mulberry32(seed ^ 0x5eed);
  const identities = pickBots(rng);
  const gear = identities.map(() => EQUIPMENT[Math.floor(rng() * EQUIPMENT.length)]);
  const lanes = [0, 1, 3, 4].sort(() => rng() - 0.5);
  return identities.map((identity, i) => ({ identity, gear: gear[i], lane: lanes[i] }));
}

export class MenuScene {
  /**
   * @param {number} seed course + race seed (shared with the race so the vista
   *   behind the gates IS the mountain about to be raced)
   * @param {(opts:{seed:number,bet:number,gear:object,bots:object[]}) => void} onStart
   */
  constructor(seed, onStart) {
    this.seed = seed;
    this.onStart = onStart;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xdcefff, 220, 1100);
    this.camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 4000);

    this.terrain = new Terrain(seed);
    const tg = new THREE.Group();
    this.terrain.build(tg);
    this.scene.add(tg);
    this.scene.add(makeSky());
    addLights(this.scene);
    this.snow = new Snowfall(this.scene, 350);

    // lane 2 (center) is the player's; bots take the rest
    const roster = rosterFor(seed);
    this.botIdentities = roster.map((r) => r.identity);
    this.botGear = roster.map((r) => r.gear);
    this.botLanes = roster.map((r) => r.lane);
    const rng = mulberry32(seed ^ 0x10bb1);

    // player rider standing in the middle gate
    this.playerRider = null;
    this._placePlayer(EQUIPMENT.find((e) => e.id === state.gearId) || EQUIPMENT[0]);

    // bots join over the first seconds
    this.joinQueue = this.botIdentities.map((b, i) => ({
      at: 1.2 + i * (1.0 + rng() * 2.2),
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
        this._placePlayer(g);
      },
      onBetChange: () => save(),
      onStart: () => this._start(),
    });

    this.t = 0;
  }

  _placePlayer(gear) {
    if (this.playerRider) this.scene.remove(this.playerRider.root);
    this.playerRider = createRider(gear, 0xfbbf24);
    const lane = this.terrain.gateLanes[2];
    this.playerRider.root.position.set(lane.x, this.terrain.heightAt(lane.x, lane.z), lane.z);
    this.scene.add(this.playerRider.root);
  }

  _start() {
    save();
    this.onStart({
      seed: this.seed,
      bet: this.hud.bet,
      gear: this.hud.gear,
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
        rider.root.position.set(lane.x, this.terrain.heightAt(lane.x, lane.z), lane.z);
        this.scene.add(rider.root);
        this.botRiders.push(rider);
        this.hud.addRider({ name: j.identity.name, color: j.identity.color, gearName: j.gear.name });
      }
    }

    // idle sway for everyone in the gates
    for (const [i, r] of [this.playerRider, ...this.botRiders].entries()) {
      if (r) r.rig.rotation.z = Math.sin(this.t * 1.3 + i * 2.1) * 0.04;
    }

    // slow cinematic drift behind the gates, looking down the mountain
    const lane = this.terrain.gateLanes[2];
    const gy = this.terrain.heightAt(lane.x, lane.z);
    const a = this.t * 0.08;
    this.camera.position.set(
      lane.x + Math.sin(a) * 10,
      gy + 6.5 + Math.sin(this.t * 0.21) * 0.8,
      lane.z + 16 + Math.cos(a) * 3
    );
    const lookAhead = this.terrain.centerAt(120);
    this.camera.lookAt(lookAhead, this.terrain.heightAt(lookAhead, -120) + 4, -120);

    this.snow.update(dt, this.camera.position);
  }

  resize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  destroy() {
    this.hud.destroy();
  }
}
