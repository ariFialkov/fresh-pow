// Wildlife: per-venue animals that break from the trees and run down and
// across the mountain as moving obstacles — individuals or small herds,
// galloping procedurally (bob + rock), knocking the player flat on contact.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { mulberry32 } from './rng.js';
import { COURSE } from './terrain.js';
import { Trail } from './snowfx.js';

const _n = new THREE.Vector3();
const _d = new THREE.Vector3();

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
  japan: { label: 'a fox', herd: [2, 3], speed: 11, across: 5, r: 0.55, gallop: 8.5, bob: 0.2, evGap: 0.55 },
};

export class Animals {
  constructor(scene, terrain, themeKey, seed) {
    this.scene = scene;
    this.terrain = terrain;
    this.spec = SPECIES[themeKey] ?? null;
    this.src = (this.spec && animalRoot?.getObjectByName(`animal_${themeKey}`)) || null;
    this.events = [];
    this.active = [];
    this.trails = []; // hoof tracks keep fading after their animal is gone
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
      s += (430 + rng() * 380) * (this.spec.evGap ?? 1);
    }
  }

  _spawn(ev) {
    const rng = mulberry32(ev.seed);
    for (let i = 0; i < ev.n; i++) {
      const s = ev.s + rng() * 14;
      const x = this.terrain.centerAt(s) + ev.side * COURSE.halfWidth * (0.72 + rng() * 0.16) + (rng() - 0.5) * 5;
      const obj = new THREE.Group();
      const body = this.src.clone();
      // per-animal materials so each one can fade out on its own
      const mats = [];
      body.traverse((o) => {
        if (o.isMesh) {
          o.material = o.material.clone();
          mats.push(o.material);
        }
      });
      obj.add(body);
      if (!Animals._shadowGeo) {
        Animals._shadowGeo = new THREE.CircleGeometry(1, 14);
      }
      const shMat = new THREE.MeshBasicMaterial({ color: 0x0a1420, transparent: true, opacity: 0.26, depthWrite: false });
      const shadow = new THREE.Mesh(Animals._shadowGeo, shMat);
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.y = 0.07;
      shadow.scale.setScalar(this.spec.r * 1.5);
      obj.add(shadow);
      this.scene.add(obj);
      // paired hoof lines pressed into the snow — dashes match the gait
      const trackW = this.spec.r * 0.18 + 0.05;
      const tracks = [-1, 1].map((side) => {
        const trail = new Trail(this.scene, this.terrain, trackW);
        trail.minDist = 0.5; // short gait dashes need close points to render
        trail.trackCol.multiplyScalar(0.8); // hoof-churned snow digs darker than a ski line
        return { off: side * this.spec.r * 0.35, trail };
      });
      this.trails.push(...tracks.map((t) => t.trail));
      this.active.push({
        obj,
        body,
        shadow,
        shMat,
        mats,
        tracks,
        x,
        s,
        y: this.terrain.heightAt(x, -s) + 0.06,
        vy: 0,
        air: false,
        fade: 1,
        fading: false,
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
      if (!ev.fired && playerS > ev.s - 95) {
        ev.fired = true;
        this._spawn(ev);
      }
    }
    for (const a of this.active) {
      a.t += dt;
      a.s += a.vs * dt;
      a.x += a.vx * dt;
      const z = -a.s;
      const L = Math.hypot(a.vx, a.vs) || 1;
      const dx = a.vx / L;
      const dz = -a.vs / L;
      // stand on the slope, not on the point under the center: sample under
      // nose and tail too, and align the body to the terrain so no half of
      // it buries into a cross-slope
      const half = this.spec.r * 1.1;
      const hC = this.terrain.heightAt(a.x, z);
      const hN = this.terrain.heightAt(a.x + dx * half, z + dz * half);
      const hT = this.terrain.heightAt(a.x - dx * half, z - dz * half);
      const groundY = Math.max(hC, (hN + hT) / 2) + 0.06;
      // ledges and cliff lips: hop off ballistically and land back in stride
      // instead of snapping straight down to the lower ground
      if (!a.air) {
        if (groundY < a.y - 0.75) {
          a.air = true;
          a.vy = 2.0; // a small bound off the edge
        } else {
          a.y = groundY;
        }
      }
      if (a.air) {
        a.vy -= 13 * dt;
        a.y += a.vy * dt;
        if (a.y <= groundY) {
          a.y = groundY;
          a.air = false;
          a.vy = 0;
        }
      }
      const stride = Math.abs(Math.sin(a.t * a.gallop));
      a.obj.position.set(a.x, a.y, z);
      if (a.air) _n.set(0, 1, 0);
      else this.terrain.normalAt(a.x, z, _n);
      a.obj.up.copy(_n);
      const dn = dx * _n.x + dz * _n.z; // travel projected onto the slope
      _d.set(dx - _n.x * dn, -_n.y * dn, dz - _n.z * dn);
      a.obj.lookAt(a.x + _d.x, a.y + _d.y, z + _d.z); // model faces +z
      a.body.position.y = a.air ? 0 : stride * this.spec.bob;
      a.body.rotation.x = a.air ? 0.12 : Math.sin(a.t * a.gallop * 2) * 0.1; // gallop rock / mid-air pose
      // the blob shadow stays on the snow below and shrinks with height
      const drop = a.y - (hC + 0.06);
      a.shadow.position.y = -drop + 0.07;
      a.shadow.scale.setScalar(this.spec.r * 1.5 * Math.max(0.35, 1 - drop * 0.12));
      // hooves press dashed bounding tracks during the contact phase
      const contact = !a.air && stride < 0.45;
      for (const tk of a.tracks) {
        tk.trail.push(a.x - dz * tk.off - dx * half * 0.7, z + dx * tk.off - dz * half * 0.7, contact);
      }
      // hitting one hurts
      if (player && !a.fading && !player.finished && player.knockT <= 0 && player.stumbleT <= 0 && !player.airborne) {
        const px = player.pos.x - a.x;
        const pz = player.pos.z - z;
        const rr = this.spec.r + 0.8;
        if (px * px + pz * pz < rr * rr) player.knockDown(this.spec.label);
      }
      // leaving: far behind the player, past the finish, or off into the
      // trees — fade out mid-stride instead of vanishing
      if (
        !a.fading &&
        (a.s < playerS - 80 ||
          a.s > COURSE.length - 40 ||
          Math.abs(a.x - this.terrain.centerAt(a.s)) > COURSE.halfWidth * 1.5)
      ) {
        a.fading = true;
        for (const m of a.mats) {
          m.transparent = true;
          m.depthWrite = false;
        }
      }
      if (a.fading) {
        a.fade -= dt / 1.1;
        for (const m of a.mats) m.opacity = Math.max(0, a.fade);
        a.shMat.opacity = 0.26 * Math.max(0, a.fade);
        if (a.fade <= 0) {
          a.dead = true;
          this.scene.remove(a.obj);
          for (const m of a.mats) m.dispose();
          a.shMat.dispose();
        }
      }
    }
    this.active = this.active.filter((a) => !a.dead);
    for (const t of this.trails) t.update(dt);
  }
}
