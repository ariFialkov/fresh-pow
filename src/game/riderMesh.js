// Low-poly rider rigs. One builder for all 12 rides — skis, boards and sleds
// get different gear meshes and stances, but the skeleton is shared so poses
// (tuck, brake, stumble, tricks) work everywhere.
import * as THREE from 'three';

const SKIN = 0xd9a878;

function box(w, h, d, color) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color }));
}

/**
 * @param {{type:string, deck:number, accent:number, suit:number}} gear
 * @param {number} helmetColor bot identity color (also used for HUD dots)
 */
export function createRider(gear, helmetColor) {
  const root = new THREE.Group(); // positioned on the snow, yawed to heading
  const rig = new THREE.Group(); // trick rotations happen here
  root.add(rig);

  const parts = {};

  // ---- gear under the rider ----
  const gearGroup = new THREE.Group();
  rig.add(gearGroup);
  if (gear.type === 'ski') {
    for (const side of [-0.22, 0.22]) {
      const ski = box(0.13, 0.05, 1.85, gear.deck);
      ski.position.set(side, 0.03, 0);
      const tip = box(0.13, 0.05, 0.22, gear.accent);
      tip.position.set(side, 0.1, -0.95);
      tip.rotation.x = 0.5;
      gearGroup.add(ski, tip);
    }
  } else if (gear.type === 'board') {
    const deck = box(0.34, 0.05, 1.6, gear.deck);
    deck.position.set(0, 0.04, 0);
    gearGroup.add(deck);
    for (const end of [-0.78, 0.78]) {
      const kick = box(0.34, 0.05, 0.18, gear.accent);
      kick.position.set(0, 0.09, end);
      kick.rotation.x = end < 0 ? 0.45 : -0.45;
      gearGroup.add(kick);
    }
  } else if (gear.id === 'sled-saucer') {
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.75, 0.55, 0.16, 12),
      new THREE.MeshLambertMaterial({ color: gear.deck })
    );
    disc.position.y = 0.1;
    gearGroup.add(disc);
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.06, 6, 12),
      new THREE.MeshLambertMaterial({ color: gear.accent })
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.18;
    gearGroup.add(rim);
  } else {
    // toboggan-style sled
    const hull = box(0.55, 0.14, 1.45, gear.deck);
    hull.position.y = 0.18;
    gearGroup.add(hull);
    const nose = box(0.55, 0.14, 0.3, gear.accent);
    nose.position.set(0, 0.28, -0.78);
    nose.rotation.x = 0.7;
    gearGroup.add(nose);
    for (const side of [-0.24, 0.24]) {
      const runner = box(0.06, 0.1, 1.5, gear.accent);
      runner.position.set(side, 0.05, 0);
      gearGroup.add(runner);
    }
  }

  // ---- body ----
  const isSled = gear.type === 'sled';
  const body = new THREE.Group();
  rig.add(body);
  parts.body = body;

  const hips = new THREE.Group();
  body.add(hips);
  parts.hips = hips;

  // legs
  parts.legs = [];
  for (const side of [-0.14, 0.14]) {
    const leg = new THREE.Group();
    const thigh = box(0.16, 0.42, 0.18, gear.suit);
    thigh.position.y = -0.21;
    const shin = box(0.14, 0.4, 0.16, 0x22242a);
    shin.position.y = -0.6;
    const boot = box(0.16, 0.12, 0.32, 0x30343c);
    boot.position.set(0, -0.84, 0.04);
    leg.add(thigh, shin, boot);
    leg.position.set(side, 0, 0);
    hips.add(leg);
    parts.legs.push(leg);
  }

  const torsoG = new THREE.Group();
  hips.add(torsoG);
  parts.torso = torsoG;
  const torso = box(0.42, 0.55, 0.26, gear.suit);
  torso.position.y = 0.3;
  torsoG.add(torso);

  // arms
  parts.arms = [];
  for (const side of [-0.27, 0.27]) {
    const arm = new THREE.Group();
    const upper = box(0.11, 0.34, 0.13, gear.suit);
    upper.position.y = -0.15;
    const glove = box(0.12, 0.12, 0.14, 0x30343c);
    glove.position.y = -0.38;
    arm.add(upper, glove);
    arm.position.set(side, 0.5, 0);
    arm.rotation.z = side < 0 ? 0.35 : -0.35;
    torsoG.add(arm);
    parts.arms.push(arm);
  }

  // head + helmet
  const headG = new THREE.Group();
  headG.position.y = 0.72;
  torsoG.add(headG);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), new THREE.MeshLambertMaterial({ color: SKIN }));
  const helmet = new THREE.Mesh(
    new THREE.SphereGeometry(0.17, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62),
    new THREE.MeshLambertMaterial({ color: helmetColor })
  );
  helmet.position.y = 0.02;
  const goggles = box(0.24, 0.08, 0.05, 0x1a2634);
  goggles.position.set(0, 0.02, -0.13);
  headG.add(head, helmet, goggles);

  // stance
  if (isSled) {
    // seated: hips low, legs forward
    hips.position.y = 0.42;
    for (const leg of parts.legs) leg.rotation.x = -1.35;
    torsoG.rotation.x = 0.28;
  } else if (gear.type === 'board') {
    hips.position.y = 0.92;
    body.rotation.y = 0.45; // sideways-ish stance
    for (const leg of parts.legs) leg.rotation.x = 0.12;
  } else {
    hips.position.y = 0.92;
    for (const leg of parts.legs) leg.rotation.x = 0.1;
  }

  // blob shadow
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.85, 14),
    new THREE.MeshBasicMaterial({ color: 0x0b1c2c, transparent: true, opacity: 0.28, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  root.add(shadow);

  return { root, rig, gearGroup, parts, shadow, isSled, baseBodyYaw: body.rotation.y };
}

/**
 * Applies a pose each frame. All values 0..1 except steer (-1..1).
 */
export function setPose(rider, { tuck = 0, brake = 0, steer = 0, stumble = 0, airborne = false } = {}) {
  const { parts, isSled } = rider;
  const lean = steer * 0.45;

  // whole-body edge lean into turns
  rider.rig.rotation.z = -lean * (isSled ? 0.5 : 1);

  if (!isSled) {
    // crouch: tuck folds the torso, brake sits back
    const crouch = tuck * 0.55 + brake * 0.2 + stumble * 0.3;
    parts.hips.position.y = 0.92 - crouch * 0.34;
    parts.torso.rotation.x = tuck * 1.05 - brake * 0.35 + (airborne ? -0.15 : 0) + stumble * (Math.sin(performance.now() * 0.02) * 0.35);
    for (const leg of parts.legs) leg.rotation.x = 0.1 + crouch * 0.9;
    for (const [i, arm] of parts.arms.entries()) {
      arm.rotation.x = tuck * -1.0 + (airborne ? -0.9 : 0);
      arm.rotation.z = (i === 0 ? 0.35 : -0.35) * (1 - tuck * 0.7);
    }
    // hockey-stop rotation while braking
    parts.body.rotation.y = rider.baseBodyYaw + brake * 0.9;
  } else {
    parts.torso.rotation.x = 0.28 + tuck * 0.5 - brake * 0.3 + stumble * (Math.sin(performance.now() * 0.02) * 0.3);
    for (const arm of parts.arms) arm.rotation.x = brake * -1.4 + (airborne ? -1.1 : 0);
  }
}
