// Wildlife: per-venue animals that break from the trees and run down and
// across the mountain as moving obstacles — individuals or small herds,
// galloping procedurally (bob + rock), knocking the player flat on contact.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { mulberry32 } from './rng.js';
import { COURSE } from './terrain.js';

let animalRoot = null;

export async function loadAnimals() {
  if (animalRoot) return;
  try {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const gltf = await loader.loadAsync('models/animals.glb');
    animalRoot = gltf.scene;
    animalRoot.traverse((o) => {
      if (o.isMesh) {
        // swap PBR for the game's lambert look, keep the baked texture
        o.material = new THREE.MeshLambertMaterial({ map: o.material.map });
        o.castShadow = true;
      }
    });
  } catch {
    animalRoot = null; // species not shipped yet — venues just have no wildlife
  }
}

// species behavior per venue key (model mesh: animal_<venue>, faces +z)
const SPECIES = {
  vermont: { label: 'a deer', herd: [3, 5], speed: 10.5, across: 5.5, r: 0.85, gallop: 7.5, bob: 0.3 },
  quebec: { label: 'a moose', herd: [1, 1], speed: 8.5, across: 3.5, r: 1.4, gallop: 5.5, bob: 0.34 },
  colorado: { label: 'an elk', herd: [4, 6], speed: 10, across: 4.5, r: 1.1, gallop: 6.5, bob: 0.32 },
  utah: { label: 'a bighorn', herd: [2, 4], speed: 9.5, across: 4.5, r: 0.9, gallop: 7, bob: 0.28 },
  bc: { label: 'a mountain goat', herd: [1, 2], speed: 8.5, across: 4, r: 0.9, gallop: 6.5, bob: 0.28 },
  chile: { label: 'a guanaco', herd: [3, 6], speed: 11, across: 5, r: 0.95, gallop: 7, bob: 0.3 },
  nz: { label: 'a sheep', herd: [5, 8], speed: 7.5, across: 3.5, r: 0.8, gallop: 6, bob: 0.22 },
  swiss: { label: 'an ibex', herd: [1, 2], speed: 9, across: 4.5, r: 0.9, gallop: 6.8, bob: 0.28 },
};

export class Animals {
  constructor(scene, terrain, themeKey, seed) {
    this.scene = scene;
    this.terrain = terrain;
    this.spec = SPECIES[themeKey] ?? null;
    this.src = (this.spec && animalRoot?.getObjectByName(`animal_${themeKey}`)) || null;
    this.events = [];
    this.active = [];
    if (!this.src) return;
    const rng = mulberry32((seed ^ 0xa111) >>> 0);
    let s = 360 + rng() * 300;
    while (s < COURSE.length - 380) {
      this.events.push({
        s,
        side: rng() < 0.5 ? -1 : 1,
        n: Math.round(this.spec.herd[0] + rng() * (this.spec.herd[1] - this.spec.herd[0])),
        seed: (seed ^ Math.floor(s)) >>> 0,
        fired: false,
      });
      s += 430 + rng() * 380;
    }
  }

  _spawn(ev) {
    const rng = mulberry32(ev.seed);
    for (let i = 0; i < ev.n; i++) {
      const s = ev.s + rng() * 14;
      const x = this.terrain.centerAt(s) + ev.side * COURSE.halfWidth * (0.72 + rng() * 0.16) + (rng() - 0.5) * 5;
      const obj = new THREE.Group();
      const body = this.src.clone();
      obj.add(body);
      if (!Animals._shadowGeo) {
        Animals._shadowGeo = new THREE.CircleGeometry(1, 14);
        Animals._shadowMat = new THREE.MeshBasicMaterial({ color: 0x0a1420, transparent: true, opacity: 0.26, depthWrite: false });
      }
      const shadow = new THREE.Mesh(Animals._shadowGeo, Animals._shadowMat);
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.y = 0.07;
      shadow.scale.setScalar(this.spec.r * 1.5);
      obj.add(shadow);
      this.scene.add(obj);
      this.active.push({
        obj,
        body,
        x,
        s,
        vs: this.spec.speed * (0.85 + rng() * 0.3), // downhill run
        vx: -ev.side * this.spec.across * (0.75 + rng() * 0.5), // cutting across
        t: rng() * 6.3,
        gallop: this.spec.gallop * (0.9 + rng() * 0.2),
      });
    }
  }

  update(dt, playerS, player) {
    if (!this.src) return;
    for (const ev of this.events) {
      if (!ev.fired && playerS > ev.s - 160) {
        ev.fired = true;
        this._spawn(ev);
      }
    }
    for (const a of this.active) {
      a.t += dt;
      a.s += a.vs * dt;
      a.x += a.vx * dt;
      const z = -a.s;
      const y = this.terrain.heightAt(a.x, z);
      const stride = Math.abs(Math.sin(a.t * a.gallop));
      a.obj.position.set(a.x, y, z);
      a.body.position.y = stride * this.spec.bob; // shadow stays on the snow
      a.obj.rotation.y = Math.atan2(a.vx, -a.vs); // model faces +z
      a.body.rotation.x = Math.sin(a.t * a.gallop * 2) * 0.1; // gallop rock
      // hitting one hurts
      if (player && !player.finished && player.knockT <= 0 && player.stumbleT <= 0 && !player.airborne) {
        const dx = player.pos.x - a.x;
        const dz = player.pos.z - z;
        const rr = this.spec.r + 0.8;
        if (dx * dx + dz * dz < rr * rr) player.knockDown(this.spec.label);
      }
      // gone: far behind the player, past the finish, or off into the trees
      if (
        a.s < playerS - 80 ||
        a.s > COURSE.length - 40 ||
        Math.abs(a.x - this.terrain.centerAt(a.s)) > COURSE.halfWidth * 1.35
      ) {
        a.dead = true;
        this.scene.remove(a.obj);
      }
    }
    this.active = this.active.filter((a) => !a.dead);
  }
}
