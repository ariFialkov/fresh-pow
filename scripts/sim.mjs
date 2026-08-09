// Headless physics sanity check: run the Player's math against a real Terrain
// (no DOM, no renderer) and report speed/progress over time.
import * as THREE from 'three';
import { Terrain, COURSE } from '../src/game/terrain.js';

const terrain = new Terrain(1234);

const G = 12.5, AIR_G = 16, DRAG_K = 0.0031, TUCK_DRAG = 0.55;
let pos = new THREE.Vector3();
const lane = { x: terrain.centerAt(4), z: -4 };
pos.set(lane.x, terrain.heightAt(lane.x, lane.z), lane.z);
let speed = 0, vy = 0, airborne = false, groundVy = 0;
let airTime = 0, airCount = 0;
const dt = 1 / 60;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, l, h) => Math.min(h, Math.max(l, v));

for (let step = 0; step <= 60 * 90; step++) {
  const dir = new THREE.Vector3(0, 0, -1);
  if (!airborne) {
    const e = 1.6;
    const hHere = terrain.heightAt(pos.x, pos.z);
    const hAhead = terrain.heightAt(pos.x + dir.x * e, pos.z + dir.z * e);
    const slope = (hHere - hAhead) / e;
    let a = G * slope - DRAG_K * TUCK_DRAG * speed * speed;
    speed = Math.max(0, speed + a * dt);
    const nx = pos.x + dir.x * speed * dt;
    const nz = pos.z + dir.z * speed * dt;
    const ground = terrain.heightAt(nx, nz);
    const rate = (ground - pos.y) / dt;
    groundVy = lerp(groundVy, clamp(rate, -30, 30), clamp(dt * 10, 0, 1));
    if (ground < pos.y - 0.45 && speed > 6) {
      airborne = true; airCount++;
      vy = clamp(groundVy, 0, 9);
      pos.set(nx, pos.y + vy * dt, nz);
    } else {
      pos.set(nx, ground, nz);
      vy = 0;
    }
  } else {
    airTime += dt;
    vy -= AIR_G * dt;
    speed = Math.max(0, speed - DRAG_K * 0.4 * speed * speed * dt);
    const nx = pos.x + dir.x * speed * dt;
    const nz = pos.z + dir.z * speed * dt;
    const ny = pos.y + vy * dt;
    const ground = terrain.heightAt(nx, nz);
    if (ny <= ground) { pos.set(nx, ground, nz); airborne = false; vy = 0; }
    else pos.set(nx, ny, nz);
  }
  if (step % 300 === 0) {
    console.log(`t=${(step / 60).toFixed(0)}s v=${speed.toFixed(1)}m/s s=${(-pos.z).toFixed(0)}m air%=${((airTime * 60) / (step + 1) * 100).toFixed(0)} airCount=${airCount}`);
  }
  if (-pos.z >= COURSE.length) { console.log(`FINISHED at t=${(step / 60).toFixed(1)}s`); break; }
}
