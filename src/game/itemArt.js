// Product shots for the pro shop: each ride and outfit rendered off-screen
// from the same meshes the game uses, so the card shows the actual item —
// the rider in the kit on their current ride, or the ride on its own — on
// a transparent ground. Rendered once per item and cached as a data URL.
import * as THREE from 'three';
import { createRider, createGearMesh, setPose } from './riderMesh.js';
import { equipmentById } from './equipment.js';
import { state } from './state.js';

const SIZE = 256;
let ctx = null;
const cache = new Map();

function context() {
  if (ctx) return ctx;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(SIZE, SIZE);
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xdcefff, 0x55657a, 1.15));
  const sun = new THREE.DirectionalLight(0xfff2dc, 1.7);
  sun.position.set(2.5, 4, -3);
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xbfe3ff, 0.5);
  fill.position.set(-3, 1.5, 2);
  scene.add(fill);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 60);
  ctx = { renderer, scene, camera };
  return ctx;
}

function shoot(object, target, dist, azimuth, elevation) {
  const { renderer, scene, camera } = context();
  scene.add(object);
  // the rig faces -z: a camera out at -z, swung to one side, sees the front
  camera.position.set(
    target.x + Math.sin(azimuth) * Math.cos(elevation) * dist,
    target.y + Math.sin(elevation) * dist,
    target.z - Math.cos(azimuth) * Math.cos(elevation) * dist
  );
  camera.lookAt(target);
  renderer.render(scene, camera);
  const url = renderer.domElement.toDataURL('image/png');
  scene.remove(object);
  return url;
}

/**
 * The shot for a shop item — { kind: 'ride'|'outfit', id }.
 * Outfits are shown on the ride the player has equipped.
 */
export function itemArt(item) {
  const key = item.kind === 'ride' ? item.id : `${item.id}:${state.gearId}`;
  if (cache.has(key)) return cache.get(key);
  let url;
  if (item.kind === 'ride') {
    const gear = equipmentById(item.id);
    const g = createGearMesh(gear);
    // frame off the actual footprint: skis run long, a saucer is a disc
    const box = new THREE.Box3().setFromObject(g);
    const size = box.getSize(new THREE.Vector3());
    const c = box.getCenter(new THREE.Vector3());
    const dist = (Math.hypot(size.x, size.z) * 0.5 + 0.12) / Math.sin(camHalfFov()) * 0.96;
    url = shoot(g, c, dist, -0.72, 0.62);
  } else {
    const gear = equipmentById(state.gearId);
    const rider = createRider(gear, 0xfbbf24, item.outfit);
    // let the pose springs settle into the idle stance
    for (let i = 0; i < 4; i++) setPose(rider, { idle: true, t: 0.8, dt: 1 });
    url = shoot(rider.root, new THREE.Vector3(0, 0.92, 0), 3.95, -0.55, 0.14);
  }
  cache.set(key, url);
  return url;
}

function camHalfFov() {
  return THREE.MathUtils.degToRad(context().camera.fov / 2);
}

/** Free the off-screen context (the cached shots stay). */
export function releaseItemArt() {
  if (!ctx) return;
  ctx.renderer.dispose();
  ctx.renderer.forceContextLoss();
  ctx = null;
}
