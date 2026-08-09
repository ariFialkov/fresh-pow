// Organic procedural rider rigs.
//
// No external assets: bodies are built from lathe profiles (two-piece torso,
// thighs with quad bulge, calves with calf bulge), capsules and spheres, wired
// into a full joint hierarchy —
//   pelvis -> lower spine -> chest -> neck -> head
//   chest  -> shoulders -> elbows -> wrists (+ poles for skiers)
//   pelvis -> hips -> knees -> ankles -> boots
// setPose() drives every joint each frame, and the pelvis height is solved
// analytically from the leg chain so boots always plant on the gear deck.
// Geometry and materials are cached module-wide so five riders share buffers.
import * as THREE from 'three';

const SKIN = 0xd9a878;
const THIGH_L = 0.41;
const CALF_L = 0.39;

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
      ski.scale.set(1, 1, 0.22);
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
    // bindings sit where the pose actually plants the boots
    for (const [z, rot] of [[-0.24, -0.5], [0.24, -0.5]]) {
      const b = mesh(cached('bbind', () => new THREE.BoxGeometry(0.13, 0.05, 0.3)), darkMat);
      b.position.set(0, 0.065, z);
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
  const padMat = mat(darken(gear.suit, 0.32)); // knee/elbow pads
  const skinMat = mat(SKIN);
  const bootMat = mat(0x23262d);
  const gloveMat = mat(0x2e323a);
  const helmetMat = mat(helmetColor);
  const poleMat = mat(0x3a404c);

  const gearGroup = buildGear(gear);
  rig.add(gearGroup);

  const parts = { legs: [], arms: [], poles: [] };

  // ---- pelvis ----
  const pelvisG = new THREE.Group();
  rig.add(pelvisG);
  parts.pelvis = pelvisG;
  const pelvis = mesh(capsule('pelvis', 0.125, 0.12), pantsMat);
  pelvis.rotation.z = Math.PI / 2;
  pelvis.scale.set(0.8, 1, 0.85);
  pelvis.position.y = 0.0;
  pelvisG.add(pelvis);

  // ---- two-piece spine: lower back + chest fold separately ----
  const spineG = new THREE.Group();
  spineG.position.y = 0.06;
  pelvisG.add(spineG);
  parts.spine = spineG;
  const lowerTorso = mesh(lathe('ltorso', [
    [0.146, -0.02], [0.15, 0.04], [0.134, 0.12], [0.127, 0.19],
  ], 14), suitMat);
  lowerTorso.scale.set(1, 1, 0.8);
  spineG.add(lowerTorso);

  const chestG = new THREE.Group();
  chestG.position.y = 0.17;
  spineG.add(chestG);
  parts.chest = chestG;
  const upperTorso = mesh(lathe('utorso', [
    [0.128, -0.02], [0.152, 0.08], [0.17, 0.18], [0.162, 0.26], [0.088, 0.33],
  ], 14), suitMat);
  upperTorso.scale.set(1, 1, 0.8);
  chestG.add(upperTorso);
  const collar = mesh(capsule('collar', 0.082, 0.12), suitMat);
  collar.rotation.z = Math.PI / 2;
  collar.position.y = 0.3;
  collar.scale.set(0.9, 1, 0.9);
  chestG.add(collar);

  // ---- neck + head ----
  const neckG = new THREE.Group();
  neckG.position.y = 0.33;
  chestG.add(neckG);
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

  // ---- arms: shoulder -> elbow -> wrist ----
  for (const side of [-1, 1]) {
    const shoulderG = new THREE.Group();
    shoulderG.position.set(side * 0.185, 0.25, 0);
    chestG.add(shoulderG);
    const delt = mesh(sphere('delt', 0.065), suitMat);
    shoulderG.add(delt);
    const uarm = mesh(lathe('uarm', [
      [0.032, -0.24], [0.04, -0.15], [0.048, -0.05], [0.04, 0.01],
    ]), suitMat);
    shoulderG.add(uarm);
    const elbowG = new THREE.Group();
    elbowG.position.y = -0.25;
    shoulderG.add(elbowG);
    const elbowPad = mesh(sphere('elbow', 0.045), padMat);
    elbowG.add(elbowPad);
    const farm = mesh(lathe('farm', [
      [0.024, -0.23], [0.032, -0.15], [0.041, -0.06], [0.035, 0.01],
    ]), suitMat);
    elbowG.add(farm);
    const wristG = new THREE.Group();
    wristG.position.y = -0.25;
    elbowG.add(wristG);
    const cuff = mesh(capsule('wcuff', 0.032, 0.03), gloveMat);
    cuff.position.y = 0.02;
    const hand = mesh(sphere('hand', 0.046), gloveMat);
    hand.scale.set(0.8, 1.15, 0.95);
    hand.position.y = -0.03;
    wristG.add(cuff, hand);
    parts.arms.push({ shoulder: shoulderG, elbow: elbowG, wrist: wristG, side });

    if (gear.type === 'ski') {
      const poleG = new THREE.Group();
      poleG.position.y = -0.03;
      wristG.add(poleG);
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

  // ---- legs: hip -> knee -> ankle. Hip joints tuck INSIDE the pelvis and
  // wear a covering sphere so bends never open a gap. ----
  const hipXZ = isBoard
    ? [{ x: -0.05, z: -0.07 }, { x: 0.05, z: 0.07 }]
    : [{ x: -0.1, z: 0 }, { x: 0.1, z: 0 }];
  for (const [i, s] of hipXZ.entries()) {
    const hipG = new THREE.Group();
    hipG.position.set(s.x, -0.05, s.z);
    pelvisG.add(hipG);
    const hipCover = mesh(sphere('hipc', 0.075), pantsMat);
    hipG.add(hipCover);
    const thigh = mesh(lathe('thigh', [
      [0.05, -0.42], [0.06, -0.3], [0.07, -0.16], [0.077, -0.06], [0.062, 0.02],
    ]), pantsMat);
    hipG.add(thigh);
    const kneeG = new THREE.Group();
    kneeG.position.y = -THIGH_L;
    hipG.add(kneeG);
    const kneePad = mesh(sphere('knee', 0.06), padMat);
    kneeG.add(kneePad);
    const calf = mesh(lathe('calf', [
      [0.035, -0.4], [0.042, -0.27], [0.06, -0.13], [0.055, -0.04], [0.04, 0.02],
    ]), pantsMat);
    kneeG.add(calf);
    const ankleG = new THREE.Group();
    ankleG.position.y = -CALF_L;
    kneeG.add(ankleG);
    const boot = mesh(capsule('boot', 0.055, 0.14), bootMat);
    boot.rotation.x = Math.PI / 2;
    boot.scale.set(0.95, 1, 0.75);
    boot.position.set(0, -0.05, -0.03);
    const cuff2 = mesh(capsule('cuff', 0.06, 0.05), bootMat);
    cuff2.position.set(0, 0.02, 0.01);
    ankleG.add(boot, cuff2);
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
    _brakeSmooth: 0,
    _brakeSide: 1,
    _wasBraking: false,
  };
  setPose(rider, { idle: true, t: 0 });
  return rider;
}

// ---------------------------------------------------------------- pose ----

/**
 * Drives every joint from a handful of gameplay params.
 * @param {object} p
 *   tuck/brake/stumble/knocked 0..1, steer -1..1, airborne bool, idle bool,
 *   crouch 0..1 (landing compression), speedNorm 0..1, t seconds, dt seconds
 */
export function setPose(rider, p = {}) {
  const { parts, isSled, isBoard } = rider;
  const t = p.t ?? 0;
  const dt = p.dt ?? 1 / 60;
  const tuck = p.tuck ?? 0;
  const brake = p.brake ?? 0;
  const steer = p.steer ?? 0;
  const stumble = p.stumble ?? 0;
  const knocked = p.knocked ?? 0;
  const airborne = !!p.airborne;
  const idle = !!p.idle;
  const crouch = p.crouch ?? 0;
  const speed = p.speedNorm ?? 0;

  const wobS = stumble * Math.sin(t * 11) * 0.32;
  const wobA = stumble * Math.sin(t * 9 + 1.3) * 0.45;
  const breathe = idle ? Math.sin(t * 1.7) * 0.5 + 0.5 : 0;
  const pump = !idle && !airborne ? Math.sin(t * 4.5) * 0.04 * speed : 0;

  // hockey-stop: gear and body swing perpendicular together, smoothly
  if (brake > 0 && !rider._wasBraking) rider._brakeSide = steer < -0.05 ? -1 : 1;
  rider._wasBraking = brake > 0;
  const bk = rider._brakeSmooth += ((idle || airborne ? 0 : brake) - rider._brakeSmooth) * Math.min(1, dt * 6);
  const bkYaw = rider._brakeSide * bk;

  // whole-body edge angle into the turn; knocked riders lie on their side
  rider.rig.rotation.z =
    -steer * (isSled ? 0.28 : 0.42) * (1 - tuck * 0.25) + wobS * 0.4 + knocked * rider._brakeSide * 1.35;

  if (!isSled) {
    // skis/board pivot across the slope to scrub speed
    rider.gearGroup.rotation.y = bkYaw * (isBoard ? 1.2 : 1.3) - steer * 0.12;
  } else {
    rider.gearGroup.rotation.y = bkYaw * 0.25;
  }

  if (isSled) {
    parts.pelvis.position.y = 0.34 - knocked * 0.1;
    parts.pelvis.rotation.y = bkYaw * 0.25;
    parts.spine.rotation.x = 0.14 + brake * -0.4 + tuck * 0.3 + wobS + knocked * 0.4;
    parts.spine.rotation.z = -steer * 0.3;
    parts.chest.rotation.x = 0.1 + brake * -0.15 + tuck * 0.2;
    parts.neck.rotation.x = -(parts.spine.rotation.x + parts.chest.rotation.x) * 0.7;
    parts.neck.rotation.z = steer * 0.22;
    for (const leg of parts.legs) {
      leg.hip.rotation.x = -1.5 + breathe * 0.02;
      leg.knee.rotation.x = 0.95;
      leg.ankle.rotation.x = 0.6;
      leg.ankle.rotation.y = 0;
    }
    for (const arm of parts.arms) {
      arm.shoulder.rotation.x = -0.85 + brake * 0.55 + (airborne ? -0.5 : 0) + wobA + knocked * 0.8;
      arm.shoulder.rotation.z = arm.side * (-0.18 + knocked * 0.9);
      arm.elbow.rotation.x = -0.5 - brake * 0.5;
      arm.wrist.rotation.x = -0.3;
    }
    return;
  }

  // ---- standing riders (ski / board) ----
  const kneeBend = idle
    ? 0.18 + breathe * 0.03
    : airborne
      ? 1.05 + crouch * 0.2
      : 0.55 + tuck * 0.6 + crouch * 0.85 + brake * 0.25 + knocked * 0.9;

  // per-leg chain angles; board legs split fore/aft to reach the bindings
  let legVSum = 0;
  const legAngles = [];
  for (const leg of parts.legs) {
    const split = isBoard ? (leg.index === 0 ? -0.42 : 0.36) : 0;
    const stag = !isBoard ? (leg.index === 0 ? 1 : -1) * pump * 0.5 : 0;
    const a = kneeBend * 0.8 + split * 0.5 + stag; // thigh from vertical
    const b = kneeBend * 1.65 + Math.abs(split) * 0.4 + stag * 0.4; // knee fold
    legAngles.push({ a, b });
    legVSum += THIGH_L * Math.cos(a) + CALF_L * Math.cos(b - a);
  }
  // solve pelvis height so soles land on the deck (0.16 ankle->deck stack,
  // 0.05 hip offset inside the pelvis)
  parts.pelvis.position.y = legVSum / 2 + 0.16 + 0.05 - (airborne ? 0.12 : 0) - knocked * 0.35;
  parts.pelvis.rotation.y = rider.baseBodyYaw + bkYaw * (isBoard ? 0.5 : 0.8);

  const spineBase = idle
    ? 0.05 + breathe * 0.015
    : airborne
      ? -0.08 + tuck * 0.2
      : 0.2 + tuck * 0.45 - brake * 0.22 + knocked * 0.5;
  // the fold spreads over two spine joints for a rounded back
  parts.spine.rotation.x = spineBase * 0.45 + wobS * 0.5;
  parts.spine.rotation.z = -steer * 0.12 + wobS * 0.3;
  parts.spine.rotation.y = -parts.pelvis.rotation.y * 0.25;
  parts.chest.rotation.x = spineBase * 0.55 + tuck * 0.35 + wobS * 0.5;
  parts.chest.rotation.z = -steer * 0.12;
  parts.chest.rotation.y = -parts.pelvis.rotation.y * 0.3;
  parts.neck.rotation.x = -(spineBase + tuck * 0.35) * 0.75;
  parts.neck.rotation.z = steer * 0.26 + steer * 0.12;
  parts.neck.rotation.y = -parts.pelvis.rotation.y * 0.45;

  for (const [i, leg] of parts.legs.entries()) {
    const { a, b } = legAngles[i];
    leg.hip.rotation.x = -a;
    leg.knee.rotation.x = b;
    leg.ankle.rotation.x = a - b; // levels the boot on the deck
    // boots stay bound to the deck line whatever the hips do
    leg.ankle.rotation.y = -parts.pelvis.rotation.y + rider.gearGroup.rotation.y;
  }

  for (const arm of parts.arms) {
    if (knocked > 0.3) {
      arm.shoulder.rotation.x = -1.2 + wobA;
      arm.shoulder.rotation.z = arm.side * 1.2;
      arm.elbow.rotation.x = -0.4;
      arm.wrist.rotation.x = 0;
    } else if (airborne) {
      arm.shoulder.rotation.x = -0.5 + wobA;
      arm.shoulder.rotation.z = arm.side * (1.15 + stumble * 0.4);
      arm.elbow.rotation.x = -0.5;
      arm.wrist.rotation.x = -0.2;
    } else if (idle) {
      arm.shoulder.rotation.x = 0.12;
      arm.shoulder.rotation.z = arm.side * 0.16;
      arm.elbow.rotation.x = -0.35;
      arm.wrist.rotation.x = -0.15;
    } else if (isBoard) {
      // balance arms: relaxed droop, trailing arm rises with edge angle
      arm.shoulder.rotation.x = 0.2 + wobA + bk * -0.3;
      arm.shoulder.rotation.z = arm.side * (0.55 + steer * arm.side * 0.3) + bk * arm.side * 0.45;
      arm.elbow.rotation.x = -0.55;
      arm.wrist.rotation.x = arm.side * steer * 0.2; // palms working the air
    } else {
      arm.shoulder.rotation.x = 0.55 + tuck * 0.65 + bk * -0.35 + wobA;
      arm.shoulder.rotation.z = arm.side * (0.32 - tuck * 0.18 + bk * 0.5);
      arm.elbow.rotation.x = -1.05 - tuck * 0.55;
      // wrists cock back so the poles trail; plant forward when braking
      arm.wrist.rotation.x = 0.35 + tuck * 0.25 - bk * 0.5;
    }
  }
  for (const pole of parts.poles) {
    pole.rotation.x = -1.15 - tuck * 0.35;
  }
}
