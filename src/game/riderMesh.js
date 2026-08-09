// Organic procedural rider rigs.
//
// No external assets: bodies are built from lathe profiles (torso with
// shoulders/waist, thighs with quad bulge, calves with calf bulge), capsules
// and spheres, wired into a real joint hierarchy —
//   pelvis -> spine -> neck/head, shoulders -> elbows -> hands,
//   hips -> knees -> ankles -> boots
// setPose() drives every joint each frame: knee compression, leg pumping,
// tuck folds, hockey-stop braking, airborne flail, seated sled stance.
// Geometry and materials are cached module-wide so five riders share buffers.
import * as THREE from 'three';

const SKIN = 0xd9a878;

const geoCache = new Map();
const matCache = new Map();

function mat(color) {
  let m = matCache.get(color);
  if (!m) {
    m = new THREE.MeshLambertMaterial({ color });
    matCache.set(color, m);
  }
  return m;
}

function darken(hex, f) {
  const c = new THREE.Color(hex).multiplyScalar(f);
  return c.getHex();
}

function cached(key, make) {
  let g = geoCache.get(key);
  if (!g) {
    g = make();
    geoCache.set(key, g);
  }
  return g;
}

function capsule(key, r, len, cs = 4, rs = 10) {
  return cached(`cap:${key}`, () => new THREE.CapsuleGeometry(r, len, cs, rs));
}

function lathe(key, pts, segs = 12) {
  return cached(`lathe:${key}`, () => {
    const g = new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), segs);
    g.computeVertexNormals();
    return g;
  });
}

function sphere(key, r, w = 10, h = 8) {
  return cached(`sph:${key}`, () => new THREE.SphereGeometry(r, w, h));
}

const mesh = (geo, material) => new THREE.Mesh(geo, material);

// ---------------------------------------------------------------- limbs ----

/** Thigh with quad bulge, pivot at hip, hangs down -y. */
function thighGeo() {
  return lathe('thigh', [
    [0.045, -0.41], [0.058, -0.30], [0.068, -0.16], [0.075, -0.07], [0.066, 0], [0.02, 0.02],
  ]);
}

/** Calf with calf-muscle bulge, pivot at knee. */
function calfGeo() {
  return lathe('calf', [
    [0.035, -0.39], [0.042, -0.26], [0.06, -0.12], [0.055, -0.04], [0.03, 0.01],
  ]);
}

/** Torso: hips -> waist -> chest -> shoulders. Pivot at pelvis top. */
function torsoGeo() {
  return lathe('torso', [
    [0.148, 0.0], [0.152, 0.05], [0.128, 0.15], [0.148, 0.26], [0.168, 0.36], [0.16, 0.44], [0.085, 0.5],
  ], 14);
}

function upperArmGeo() {
  return lathe('uarm', [
    [0.032, -0.24], [0.04, -0.15], [0.048, -0.05], [0.04, 0.01],
  ]);
}

function forearmGeo() {
  return lathe('farm', [
    [0.026, -0.24], [0.034, -0.16], [0.042, -0.06], [0.036, 0.01],
  ]);
}

// ---------------------------------------------------------------- gear ----

function buildGear(gear) {
  const g = new THREE.Group();
  const deckMat = mat(gear.deck);
  const accentMat = mat(gear.accent);
  const darkMat = mat(0x2c3038);

  if (gear.type === 'ski') {
    for (const side of [-0.1, 0.1]) {
      const ski = mesh(capsule('ski', 0.055, 1.5), deckMat);
      ski.rotation.x = Math.PI / 2;
      ski.scale.set(1, 1, 0.22); // after rotation: thin, long, rounded ends
      ski.position.set(side, 0.02, 0.05);
      const tip = mesh(capsule('skitip', 0.05, 0.16), accentMat);
      tip.rotation.x = Math.PI / 2 - 0.55;
      tip.scale.set(0.95, 1, 0.3);
      tip.position.set(side, 0.07, -0.82);
      const binding = mesh(cached('bind', () => new THREE.BoxGeometry(0.1, 0.07, 0.3)), darkMat);
      binding.position.set(side, 0.05, 0.05);
      g.add(ski, tip, binding);
    }
  } else if (gear.type === 'board') {
    const deck = mesh(capsule('board', 0.155, 1.15), deckMat);
    deck.rotation.x = Math.PI / 2;
    deck.scale.set(1, 1, 0.14);
    deck.position.y = 0.035;
    const stripe = mesh(capsule('bstripe', 0.1, 1.0), accentMat);
    stripe.rotation.x = Math.PI / 2;
    stripe.scale.set(1, 1, 0.12);
    stripe.position.y = 0.048;
    g.add(deck, stripe);
    for (const [z, rot] of [[-0.26, 0.35], [0.26, 0.15]]) {
      const b = mesh(cached('bbind', () => new THREE.BoxGeometry(0.12, 0.06, 0.24)), darkMat);
      b.position.set(0, 0.07, z);
      b.rotation.y = rot;
      g.add(b);
    }
  } else if (gear.id === 'sled-saucer') {
    const dish = mesh(lathe('saucer', [
      [0.0, 0.04], [0.3, 0.05], [0.55, 0.09], [0.7, 0.17], [0.74, 0.24],
    ], 18), deckMat);
    const rim = mesh(cached('srim', () => new THREE.TorusGeometry(0.72, 0.045, 8, 18)), accentMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.24;
    const handleL = mesh(sphere('shandle', 0.05), accentMat);
    handleL.position.set(-0.5, 0.16, 0);
    const handleR = handleL.clone();
    handleR.position.x = 0.5;
    g.add(dish, rim, handleL, handleR);
  } else {
    // toboggan
    const hull = mesh(cached('hull', () => new THREE.BoxGeometry(0.5, 0.1, 1.3)), deckMat);
    hull.position.set(0, 0.17, 0.1);
    const nose = mesh(capsule('snose', 0.24, 0.42), deckMat);
    nose.rotation.x = Math.PI / 2;
    nose.scale.set(1, 1, 0.28);
    nose.position.set(0, 0.2, -0.62);
    const lip = mesh(capsule('slip', 0.06, 0.4), accentMat);
    lip.rotation.z = Math.PI / 2;
    lip.scale.set(1, 0.8, 0.8);
    lip.position.set(0, 0.33, -0.8);
    g.add(hull, nose, lip);
    for (const side of [-0.21, 0.21]) {
      const runner = mesh(cached('runner', () => new THREE.BoxGeometry(0.05, 0.1, 1.5)), accentMat);
      runner.position.set(side, 0.06, 0);
      g.add(runner);
    }
  }
  return g;
}

// ---------------------------------------------------------------- rider ----

export function createRider(gear, helmetColor) {
  const root = new THREE.Group();
  const rig = new THREE.Group();
  root.add(rig);

  const isSled = gear.type === 'sled';
  const isBoard = gear.type === 'board';

  const suitMat = mat(gear.suit);
  const pantsMat = mat(darken(gear.suit, 0.5));
  const skinMat = mat(SKIN);
  const bootMat = mat(0x23262d);
  const gloveMat = mat(0x2e323a);
  const helmetMat = mat(helmetColor);
  const poleMat = mat(0x3a404c);

  const gearGroup = buildGear(gear);
  rig.add(gearGroup);

  const parts = { legs: [], arms: [], poles: [] };

  // pelvis is the master joint the whole body hangs off
  const pelvisG = new THREE.Group();
  rig.add(pelvisG);
  parts.pelvis = pelvisG;
  const pelvis = mesh(capsule('pelvis', 0.125, 0.1), pantsMat);
  pelvis.rotation.z = Math.PI / 2;
  pelvis.scale.set(0.75, 1, 0.8);
  pelvis.position.y = 0.02;
  pelvisG.add(pelvis);

  // spine / torso
  const spineG = new THREE.Group();
  spineG.position.y = 0.08;
  pelvisG.add(spineG);
  parts.spine = spineG;
  const torso = mesh(torsoGeo(), suitMat);
  torso.scale.set(1, 1, 0.78);
  spineG.add(torso);
  const collar = mesh(capsule('collar', 0.085, 0.12), suitMat);
  collar.rotation.z = Math.PI / 2;
  collar.position.y = 0.47;
  collar.scale.set(0.9, 1, 0.9);
  spineG.add(collar);

  // neck + head (own joint so the face can counter body pitch)
  const neckG = new THREE.Group();
  neckG.position.y = 0.5;
  spineG.add(neckG);
  parts.neck = neckG;
  const neck = mesh(capsule('neck', 0.045, 0.05), skinMat);
  neck.position.y = 0.04;
  neckG.add(neck);
  const headG = new THREE.Group();
  headG.position.y = 0.13;
  neckG.add(headG);
  parts.head = headG;
  const face = mesh(sphere('head', 0.1, 12, 10), skinMat);
  face.scale.set(0.92, 1.05, 0.98);
  const helmet = mesh(cached('helmet', () => new THREE.SphereGeometry(0.112, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.6)), helmetMat);
  helmet.position.y = 0.015;
  const brim = mesh(cached('brim', () => new THREE.TorusGeometry(0.1, 0.018, 6, 12, Math.PI * 1.1)), helmetMat);
  brim.rotation.x = Math.PI / 2;
  brim.rotation.z = Math.PI * 0.42;
  brim.position.y = 0.045;
  const goggles = mesh(cached('goggles', () => new THREE.CapsuleGeometry(0.035, 0.12, 3, 8)), mat(0x141c28));
  goggles.rotation.z = Math.PI / 2;
  goggles.scale.set(1, 1, 0.6);
  goggles.position.set(0, 0.022, -0.088);
  headG.add(face, helmet, brim, goggles);

  // arms: shoulder -> elbow -> hand
  for (const side of [-1, 1]) {
    const shoulderG = new THREE.Group();
    shoulderG.position.set(side * 0.185, 0.42, 0);
    spineG.add(shoulderG);
    const delt = mesh(sphere('delt', 0.065), suitMat);
    shoulderG.add(delt);
    const uarm = mesh(upperArmGeo(), suitMat);
    shoulderG.add(uarm);
    const elbowG = new THREE.Group();
    elbowG.position.y = -0.25;
    shoulderG.add(elbowG);
    const elbow = mesh(sphere('elbow', 0.042), suitMat);
    elbowG.add(elbow);
    const farm = mesh(forearmGeo(), suitMat);
    elbowG.add(farm);
    const handG = new THREE.Group();
    handG.position.y = -0.27;
    elbowG.add(handG);
    const hand = mesh(sphere('hand', 0.048), gloveMat);
    hand.scale.set(0.85, 1.1, 1);
    handG.add(hand);
    parts.arms.push({ shoulder: shoulderG, elbow: elbowG, hand: handG, side });

    if (gear.type === 'ski') {
      const poleG = new THREE.Group();
      handG.add(poleG);
      const pole = mesh(cached('pole', () => new THREE.CylinderGeometry(0.011, 0.011, 1.05, 5)), poleMat);
      pole.position.y = -0.38;
      const basket = mesh(cached('basket', () => new THREE.ConeGeometry(0.045, 0.03, 8)), poleMat);
      basket.position.y = -0.85;
      const grip = mesh(capsule('grip', 0.02, 0.06), mat(gear.accent));
      grip.position.y = 0.05;
      poleG.add(pole, basket, grip);
      parts.poles.push(poleG);
    }
  }

  // legs: hip -> knee -> ankle -> boot
  const stance = isBoard
    ? [{ x: -0.02, z: -0.24 }, { x: 0.02, z: 0.2 }] // board: staggered along the deck
    : [{ x: -0.1, z: 0 }, { x: 0.1, z: 0 }];
  for (const [i, s] of stance.entries()) {
    const hipG = new THREE.Group();
    hipG.position.set(s.x, -0.02, s.z);
    pelvisG.add(hipG);
    const thigh = mesh(thighGeo(), pantsMat);
    hipG.add(thigh);
    const kneeG = new THREE.Group();
    kneeG.position.y = -0.41;
    hipG.add(kneeG);
    const knee = mesh(sphere('knee', 0.058), pantsMat);
    kneeG.add(knee);
    const calf = mesh(calfGeo(), pantsMat);
    kneeG.add(calf);
    const ankleG = new THREE.Group();
    ankleG.position.y = -0.39;
    kneeG.add(ankleG);
    const boot = mesh(capsule('boot', 0.055, 0.14), bootMat);
    boot.rotation.x = Math.PI / 2;
    boot.scale.set(0.95, 1, 0.75);
    boot.position.set(0, -0.04, -0.03);
    const cuff = mesh(capsule('cuff', 0.06, 0.05), bootMat);
    cuff.position.set(0, 0.02, 0.01);
    ankleG.add(boot, cuff);
    parts.legs.push({ hip: hipG, knee: kneeG, ankle: ankleG, index: i });
  }

  // blob shadow
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.85, 16),
    new THREE.MeshBasicMaterial({ color: 0x0b1c2c, transparent: true, opacity: 0.26, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  root.add(shadow);

  const rider = {
    root, rig, gearGroup, parts, shadow,
    isSled, isBoard, type: gear.type,
    baseBodyYaw: isBoard ? 0.6 : 0,
  };
  setPose(rider, { idle: true, t: 0 });
  return rider;
}

// ---------------------------------------------------------------- pose ----

/**
 * Drives every joint from a handful of gameplay params.
 * @param {object} p
 *   tuck/brake/stumble 0..1, steer -1..1, airborne bool, idle bool,
 *   crouch 0..1 (landing compression), speedNorm 0..1, t seconds
 */
export function setPose(rider, p = {}) {
  const { parts, isSled, isBoard } = rider;
  const t = p.t ?? 0;
  const tuck = p.tuck ?? 0;
  const brake = p.brake ?? 0;
  const steer = p.steer ?? 0;
  const stumble = p.stumble ?? 0;
  const airborne = !!p.airborne;
  const idle = !!p.idle;
  const crouch = p.crouch ?? 0;
  const speed = p.speedNorm ?? 0;

  const wobS = stumble * Math.sin(t * 21) * 0.35; // flailing
  const wobA = stumble * Math.sin(t * 17 + 1.3) * 0.5;
  const breathe = idle ? Math.sin(t * 1.7) * 0.5 + 0.5 : 0;
  const pump = !idle && !airborne ? Math.sin(t * 8) * 0.05 * speed : 0;

  // whole-body edge angle into the turn
  rider.rig.rotation.z = -steer * (isSled ? 0.28 : 0.42) * (1 - tuck * 0.25) + wobS * 0.4;

  if (isSled) {
    // ---- seated sled stance ----
    parts.pelvis.position.y = 0.34;
    parts.pelvis.rotation.y = 0;
    parts.spine.rotation.x = 0.18 + brake * -0.45 + tuck * 0.35 + wobS;
    parts.spine.rotation.z = -steer * 0.3;
    parts.neck.rotation.x = -parts.spine.rotation.x * 0.75;
    parts.neck.rotation.z = steer * 0.22;
    for (const leg of parts.legs) {
      leg.hip.rotation.x = -1.5 + breathe * 0.02;
      leg.knee.rotation.x = 0.95;
      leg.ankle.rotation.x = 0.6;
    }
    for (const arm of parts.arms) {
      // gripping the front of the sled; pull up and back to brake
      arm.shoulder.rotation.x = -0.85 + brake * 0.55 + (airborne ? -0.5 : 0) + wobA;
      arm.shoulder.rotation.z = arm.side * -0.18;
      arm.elbow.rotation.x = -0.5 - brake * 0.5;
    }
    return;
  }

  // ---- standing riders (ski / board) ----
  const kneeBend = idle
    ? 0.18 + breathe * 0.03
    : airborne
      ? 1.05 + crouch * 0.2
      : 0.55 + tuck * 0.6 + crouch * 0.85 + brake * 0.2 + pump;

  parts.pelvis.position.y = 0.98 - kneeBend * 0.26;
  // hockey-stop: swing the hips across the slope while braking
  parts.pelvis.rotation.y = rider.baseBodyYaw + brake * (isBoard ? 0.45 : 0.75);

  const spinePitch = idle
    ? 0.06 + breathe * 0.02
    : airborne
      ? -0.1 + tuck * 0.3
      : 0.32 + tuck * 0.8 - brake * 0.28;
  parts.spine.rotation.x = spinePitch + wobS;
  parts.spine.rotation.z = -steer * 0.22 + wobS * 0.5;
  parts.spine.rotation.y = -parts.pelvis.rotation.y * 0.4;
  // head counters the body so the eyes stay on the fall line
  parts.neck.rotation.x = -spinePitch * 0.8;
  parts.neck.rotation.z = steer * 0.26 - parts.spine.rotation.z;
  parts.neck.rotation.y = -parts.pelvis.rotation.y * 0.5;

  for (const leg of parts.legs) {
    const stagger = isBoard ? (leg.index === 0 ? 0.12 : -0.08) : (leg.index === 0 ? 1 : -1) * pump * 0.6;
    leg.hip.rotation.x = -kneeBend * 0.8 + stagger * 0.4;
    leg.knee.rotation.x = kneeBend * 1.65 + stagger * 0.2;
    leg.ankle.rotation.x = -kneeBend * 0.82 - stagger * 0.5;
    leg.ankle.rotation.y = isBoard ? -parts.pelvis.rotation.y : 0; // boots stay on the deck line
  }

  for (const arm of parts.arms) {
    if (airborne) {
      arm.shoulder.rotation.x = -0.5 + wobA;
      arm.shoulder.rotation.z = arm.side * (1.15 + stumble * 0.4);
      arm.elbow.rotation.x = -0.5;
    } else if (idle) {
      arm.shoulder.rotation.x = 0.12;
      arm.shoulder.rotation.z = arm.side * 0.16;
      arm.elbow.rotation.x = -0.35;
    } else if (isBoard) {
      // balance arms, trailing arm rises with edge angle
      arm.shoulder.rotation.x = 0.15 + wobA;
      arm.shoulder.rotation.z = arm.side * (0.85 + steer * arm.side * 0.35) + brake * arm.side * 0.3;
      arm.elbow.rotation.x = -0.35;
    } else {
      // skier: hands forward with poles; tuck pins them tight
      arm.shoulder.rotation.x = 0.55 + tuck * 0.65 + brake * -0.25 + wobA;
      arm.shoulder.rotation.z = arm.side * (0.32 - tuck * 0.18 + brake * 0.4);
      arm.elbow.rotation.x = -1.05 - tuck * 0.55;
    }
  }
  for (const pole of parts.poles) {
    pole.rotation.x = -0.9 - tuck * 0.5;
  }
}
