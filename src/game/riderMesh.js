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

function capsule(key, r, len, cs = 4, rs = 12) {
  return cached(`cap:${key}`, () => new THREE.CapsuleGeometry(r, len, cs, rs));
}

function lathe(key, pts, segs = 16) {
  return cached(`lathe:${key}`, () => {
    const g = new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), segs);
    g.computeVertexNormals();
    return g;
  });
}

function sphere(key, r, w = 12, h = 10) {
  return cached(`sph:${key}`, () => new THREE.SphereGeometry(r, w, h));
}

const mesh = (geo, material) => new THREE.Mesh(geo, material);

// ---------------------------------------------------------------- gear ----

function buildGear(gear) {
  const g = new THREE.Group();
  const deckMat = mat(gear.deck);
  const accentMat = mat(gear.accent);
  const darkMat = mat(0x2c3038);

  const baseMat = mat(0x14171d); // near-black base so decks pop off the snow

  if (gear.type === 'ski') {
    for (const side of [-0.1, 0.1]) {
      const base = mesh(capsule('skibase', 0.062, 1.52), baseMat);
      base.rotation.x = Math.PI / 2;
      base.scale.set(1, 1, 0.16);
      base.position.set(side, 0.008, 0.05);
      const ski = mesh(capsule('ski', 0.055, 1.5), deckMat);
      ski.rotation.x = Math.PI / 2;
      ski.scale.set(1, 1, 0.22);
      ski.position.set(side, 0.022, 0.05);
      const tip = mesh(capsule('skitip', 0.05, 0.16), accentMat);
      tip.rotation.x = Math.PI / 2 - 0.55;
      tip.scale.set(0.95, 1, 0.3);
      tip.position.set(side, 0.07, -0.82);
      const binding = mesh(cached('bind', () => new THREE.BoxGeometry(0.1, 0.07, 0.3)), darkMat);
      binding.position.set(side, 0.05, 0.05);
      g.add(base, ski, tip, binding);
    }
  } else if (gear.type === 'board') {
    const base = mesh(capsule('boardbase', 0.168, 1.17), baseMat);
    base.rotation.x = Math.PI / 2;
    base.scale.set(1, 1, 0.1);
    base.position.y = 0.02;
    const deck = mesh(capsule('board', 0.155, 1.15), deckMat);
    deck.rotation.x = Math.PI / 2;
    deck.scale.set(1, 1, 0.14);
    deck.position.y = 0.035;
    const stripe = mesh(capsule('bstripe', 0.1, 1.0), accentMat);
    stripe.rotation.x = Math.PI / 2;
    stripe.scale.set(1, 1, 0.12);
    stripe.position.y = 0.048;
    g.add(base, deck, stripe);
    // bindings sit where the pose actually plants the boots
    for (const [z, rot] of [[-0.24, -0.3], [0.24, -0.3]]) {
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
  // boards ride a touch higher so the deck never vanishes into the snow
  // surface between heightfield samples (the rider sink + terrain curvature
  // was swallowing it)
  if (isBoard) gearGroup.position.y = 0.07;
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
  lowerTorso.scale.set(1, 1, 0.72);
  spineG.add(lowerTorso);

  const chestG = new THREE.Group();
  chestG.position.y = 0.17;
  spineG.add(chestG);
  parts.chest = chestG;
  const upperTorso = mesh(lathe('utorso', [
    [0.128, -0.02], [0.152, 0.08], [0.17, 0.18], [0.162, 0.26], [0.088, 0.33],
  ], 14), suitMat);
  upperTorso.scale.set(1, 1, 0.72);
  chestG.add(upperTorso);
  const collar = mesh(capsule('collar', 0.082, 0.12), suitMat);
  collar.rotation.z = Math.PI / 2;
  collar.position.y = 0.3;
  collar.scale.set(0.9, 1, 0.9);
  chestG.add(collar);

  // backcountry pack — riders here always carry one
  const pack = mesh(capsule('pack', 0.115, 0.14), mat(darken(gear.accent, 0.75)));
  pack.scale.set(0.95, 1, 0.55);
  pack.position.set(0, 0.12, 0.16);
  const packLid = mesh(capsule('packlid', 0.09, 0.05), mat(darken(gear.accent, 0.5)));
  packLid.scale.set(0.9, 1, 0.5);
  packLid.position.set(0, 0.24, 0.15);
  chestG.add(pack, packLid);

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
  const face = mesh(sphere('head', 0.094, 14, 12), skinMat);
  face.scale.set(0.92, 1.05, 0.98);
  const helmet = mesh(cached('helmet', () => new THREE.SphereGeometry(0.106, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.6)), helmetMat);
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

  // soft contact blob (real shadows carry most of the grounding now)
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.8, 16),
    new THREE.MeshBasicMaterial({ color: 0x0b1c2c, transparent: true, opacity: 0.13, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  root.add(shadow);

  // riders cast real shadows onto the snow (the blob is just soft contact)
  rig.traverse((o) => {
    if (o.isMesh) o.castShadow = true;
  });

  const rider = {
    root, rig, gearGroup, parts, shadow,
    isSled, isBoard, type: gear.type,
    baseBodyYaw: isBoard ? 0.6 : 0,
    // visual-only: the deck yaws to run under the angled stance line, so the
    // boots sit on the board instead of hanging off its edges
    gearYawBase: isBoard ? 0.29 : 0,
    _brakeSmooth: 0,
    _brakeSide: 1,
    _wasBraking: false,
    _s: { tuck: 0, brakeIn: 0, steer: 0, stumble: 0, knocked: 0, crouch: 0, air: 0, shift: 0, twist: 0, curl: 0 },
  };
  setPose(rider, { idle: true, t: 0, dt: 1 }); // dt=1 converges the damping instantly
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

  // ---- input smoothing: gameplay params ease instead of stepping ----
  const S = rider._s;
  const ease = (cur, target, rate) => cur + (target - cur) * (1 - Math.exp(-dt * rate));
  S.tuck = ease(S.tuck, p.tuck ?? 0, 5);
  S.brakeIn = ease(S.brakeIn, p.brake ?? 0, 7);
  S.steer = ease(S.steer, p.steer ?? 0, 6);
  S.stumble = ease(S.stumble, p.stumble ?? 0, 6);
  S.knocked = ease(S.knocked, p.knocked ?? 0, 9);
  S.crouch = ease(S.crouch, p.crouch ?? 0, 10);
  S.air = ease(S.air, p.airborne ? 1 : 0, 6);
  S.shift = ease(S.shift, p.shift ?? 0, 4.5); // fore/aft weight over the deck
  S.twist = ease(S.twist, p.twist ?? 0, 8); // spin rate while tricking
  S.curl = ease(S.curl, p.curl ?? 0, 8); // flip rate while tricking
  const tuck = S.tuck, steer = S.steer, stumble = S.stumble, knocked = S.knocked, crouch = S.crouch, air = S.air;
  const shift = S.shift;
  const twist = S.twist;
  const curl = S.curl;
  const brake = S.brakeIn;
  const airborne = !!p.airborne;
  const idle = !!p.idle;
  const speed = p.speedNorm ?? 0;

  // ---- output springs: joints carry inertia. Loose parts (arms, head,
  // poles) lag and overshoot like flesh reacting to forces; legs stay
  // near-critical so the feet keep their plant. This is what separates
  // "reacting to the mountain" from "leaning on cue". ----
  const spr = (g, axis, target, om, zt) => {
    let sv = g.userData._sv;
    if (!sv) sv = g.userData._sv = { x: 0, y: 0, z: 0, py: 0, pz: 0 };
    const cur = axis === 'py' ? g.position.y : axis === 'pz' ? g.position.z : g.rotation[axis];
    if (dt > 0.2) {
      // init/convergence call — snap, no dynamics
      sv[axis] = 0;
      if (axis === 'py') g.position.y = target;
      else if (axis === 'pz') g.position.z = target;
      else g.rotation[axis] = target;
      return;
    }
    const acc = om * om * (target - cur) - 2 * zt * om * sv[axis];
    sv[axis] += acc * dt;
    const nv = cur + sv[axis] * dt;
    if (axis === 'py') g.position.y = nv;
    else if (axis === 'pz') g.position.z = nv;
    else g.rotation[axis] = nv;
  };
  const RX = (g, v, om = 13, zt = 0.85) => spr(g, 'x', v, om, zt);
  const RY = (g, v, om = 13, zt = 0.85) => spr(g, 'y', v, om, zt);
  const RZ = (g, v, om = 13, zt = 0.85) => spr(g, 'z', v, om, zt);
  const PY = (g, v, om = 14, zt = 0.9) => spr(g, 'py', v, om, zt);
  const PZ = (g, v, om = 9, zt = 0.7) => spr(g, 'pz', v, om, zt);

  // force-reaction channels: longitudinal G pitches the body (thrown forward
  // under braking, pressed back under acceleration); jolt is terrain shock
  const longG = Math.max(-1, Math.min(1, p.longG ?? 0));
  const jolt = p.jolt ?? 0;
  // imperfection: nobody holds a pose perfectly — tiny asymmetric sway
  if (rider._nph === undefined) rider._nph = Math.random() * 20;
  const ph = rider._nph;
  const busy = idle ? 0.25 : 0.5 + speed * 0.8 + air * 1.2;
  const swayA = (Math.sin(t * 1.13 + ph) + 0.6 * Math.sin(t * 2.71 + ph * 2)) * 0.035 * busy;
  const swayB = (Math.sin(t * 0.97 + ph * 3) + 0.5 * Math.sin(t * 2.23 + ph)) * 0.03 * busy;

  const wobS = stumble * Math.sin(t * 11) * 0.32;
  const wobA = stumble * Math.sin(t * 9 + 1.3) * 0.45;
  const breathe = idle ? Math.sin(t * 1.7) * 0.5 + 0.5 : 0;
  const pump = !idle && !airborne ? Math.sin(t * 4.5) * 0.04 * speed : 0;

  // hockey-stop: gear and body swing perpendicular together, smoothly
  if ((p.brake ?? 0) > 0 && !rider._wasBraking) rider._brakeSide = steer < -0.05 ? -1 : 1;
  rider._wasBraking = (p.brake ?? 0) > 0;
  const bk = rider._brakeSmooth += ((idle || airborne ? 0 : brake) - rider._brakeSmooth) * Math.min(1, dt * 6);
  const bkYaw = rider._brakeSide * bk;

  // whole-body edge angle into the turn; knocked riders lie on their side
  RZ(rider.rig, -steer * (isSled ? 0.28 : 0.42) * (1 - tuck * 0.25) + wobS * 0.4 + swayB * 0.4 + knocked * rider._brakeSide * 1.35, 6.5, 0.6);

  if (!isSled) {
    // skis/board pivot across the slope to scrub speed
    RY(rider.gearGroup, rider.gearYawBase + bkYaw * (isBoard ? 1.2 : 1.3) - steer * 0.12, 12, 0.8);
  } else {
    RY(rider.gearGroup, bkYaw * 0.25);
  }

  if (isSled) {
    PY(parts.pelvis, 0.34 - knocked * 0.1);
    RY(parts.pelvis, bkYaw * 0.25);
    const spx = 0.14 + brake * -0.4 + tuck * 0.3 + wobS + longG * -0.3 + swayB * 0.5 + knocked * 0.4;
    RX(parts.spine, spx, 9, 0.65);
    RZ(parts.spine, -steer * 0.3 + swayA, 9, 0.65);
    RX(parts.chest, 0.1 + brake * -0.15 + tuck * 0.2 + longG * -0.2, 8.5, 0.6);
    RX(parts.neck, -(spx + 0.1) * 0.7 + longG * 0.25, 7, 0.5);
    RZ(parts.neck, steer * 0.22 + swayA * 0.8, 7, 0.5);
    for (const leg of parts.legs) {
      RX(leg.hip, 1.5 + breathe * 0.02);
      RX(leg.knee, -0.95);
      RX(leg.ankle, -0.6);
      RY(leg.ankle, 0);
    }
    for (const arm of parts.arms) {
      RX(arm.shoulder, -0.85 + brake * 0.55 + air * -0.5 + wobA + longG * -0.45 + swayA * arm.side + knocked * 0.8, 8, 0.5);
      RZ(arm.shoulder, arm.side * (-0.18 + jolt * 0.5 + knocked * 0.9), 8, 0.5);
      RX(arm.elbow, 0.5 + brake * 0.5, 9, 0.55);
      RX(arm.wrist, -0.3, 7, 0.45);
    }
    return;
  }

  // ---- standing riders (ski / board) ----
  // ground and air stances blend continuously through S.air
  const kneeGround = idle
    ? 0.18 + breathe * 0.03
    : 0.55 + tuck * 0.6 + crouch * 0.85 + brake * 0.25 + knocked * 0.9;
  const kneeBend = kneeGround * (1 - air) + (1.05 + crouch * 0.2 + curl * 0.55 + Math.abs(twist) * 0.3) * air;

  // per-leg chain angles; board legs split fore/aft to reach the bindings
  let legVSum = 0;
  const legAngles = [];
  for (const leg of parts.legs) {
    const split = isBoard ? (leg.index === 0 ? 0.42 : -0.36) : 0;
    const stag = !isBoard ? (leg.index === 0 ? 1 : -1) * pump * 0.5 : 0;
    const a = kneeBend * 0.8 + split * 0.5 + stag; // thigh from vertical
    const b = kneeBend * 1.65 + Math.abs(split) * 0.4 + stag * 0.4; // knee fold
    legAngles.push({ a, b });
    legVSum += THIGH_L * Math.cos(a) + CALF_L * Math.cos(b - a);
  }
  // solve pelvis height so soles land on the deck (0.16 ankle->deck stack,
  // 0.05 hip offset inside the pelvis)
  PY(parts.pelvis, legVSum / 2 + 0.16 + 0.05 + (isBoard ? 0.07 : 0) - air * 0.12 - knocked * 0.35);
  // center of gravity slides fore/aft over the deck with the weight shift
  PZ(parts.pelvis, -shift * 0.11);
  const pelvisYaw = rider.baseBodyYaw + bkYaw * (isBoard ? 0.5 : 0.8);
  RY(parts.pelvis, pelvisYaw, 11, 0.75);

  const spineGround = idle
    ? 0.05 + breathe * 0.015
    : 0.2 + tuck * 0.45 - brake * 0.22 + knocked * 0.5 + shift * 0.22;
  const spineBase = spineGround * (1 - air) + (-0.08 + tuck * 0.2 + curl * 0.6) * air;
  // the fold spreads over two spine joints for a rounded back; the torso
  // counter-rotates against the hips through carves for that wound-up look
  RX(parts.spine, spineBase * 0.45 + wobS * 0.5 + longG * -0.28 + swayB * 0.4, 9, 0.65);
  RZ(parts.spine, -steer * 0.12 + wobS * 0.3 + swayA * 0.6, 9, 0.65);
  RY(parts.spine, -pelvisYaw * 0.25 + steer * 0.18 + twist * 0.35 * air, 9, 0.65);
  RX(parts.chest, spineBase * 0.55 + tuck * 0.35 + wobS * 0.5 + longG * -0.22, 8.5, 0.6);
  RZ(parts.chest, -steer * 0.12 + swayA * 0.5, 8.5, 0.6);
  RY(parts.chest, -pelvisYaw * 0.3 + steer * 0.14 + twist * 0.5 * air, 8.5, 0.6);
  // the head is the loosest mass: it counter-balances late and wobbles
  RX(parts.neck, -(spineBase + tuck * 0.35) * 0.75 + longG * 0.3, 6.5, 0.48);
  RZ(parts.neck, steer * 0.38 + swayA * 0.9, 6.5, 0.48);
  RY(parts.neck, -pelvisYaw * 0.45 - steer * 0.2 + twist * 0.7 * air, 6.5, 0.48);

  for (const [i, leg] of parts.legs.entries()) {
    const { a, b } = legAngles[i];
    RX(leg.hip, a, 14, 0.9);
    RX(leg.knee, -b, 14, 0.9);
    RX(leg.ankle, b - a, 16, 0.95); // levels the boot on the deck
    // boots stay bound to the deck line whatever the hips do
    RY(leg.ankle, -pelvisYaw + rider.gearGroup.rotation.y, 16, 0.95);
  }

  // ---- pole plants: entering a carve, the inside arm punches forward and
  // stabs the pole, then recovers. Detected off the lean crossing into a
  // new turn; each arm has its own plant clock. ----
  const mix = (u, v, k) => u + (v - u) * k;
  if (!rider._plant) rider._plant = { t: [0, 0], prevSteer: 0 };
  const P = rider._plant;
  const PLANT_DUR = 0.55;
  P.t[0] = Math.max(0, P.t[0] - dt);
  P.t[1] = Math.max(0, P.t[1] - dt);
  if (rider.type === 'ski' && !idle && !airborne && tuck < 0.4 && brake < 0.3 && knocked < 0.2) {
    const rising = Math.abs(steer) > 0.2 && Math.abs(P.prevSteer) <= 0.2;
    const flipped = Math.sign(steer) !== Math.sign(P.prevSteer) && Math.abs(steer) > 0.14;
    if (rising || flipped) {
      const idx = steer > 0 ? 1 : 0; // inside arm of the new turn
      if (P.t[idx] <= 0) P.t[idx] = PLANT_DUR;
    }
  }
  P.prevSteer = steer;
  // punchy pulse: fast attack, easy release
  const plantEnv = P.t.map((rem) => {
    if (rem <= 0) return 0;
    const u = 1 - rem / PLANT_DUR;
    return Math.sin(Math.PI * Math.pow(u, 0.6));
  });

  // arm stance targets blend by state weight instead of hard branches
  for (const arm of parts.arms) {
    const pi = arm.side > 0 ? 1 : 0;
    const inside = arm.side * steer > 0 ? Math.abs(steer) : 0; // this arm is inside the carve
    let sx, sz, ex, wx;
    if (knocked > 0.3) {
      sx = -1.2 + wobA; sz = arm.side * 1.2; ex = 0.4; wx = 0;
    } else if (idle) {
      sx = 0.12; sz = arm.side * 0.16; ex = 0.35 + swayB * 0.3; wx = -0.15;
    } else if (isBoard) {
      // balance arms working the carve: inside elbow folds, outside reaches;
      // a tuck sweeps both arms straight back along the body
      sx = mix(0.2 + wobA + bk * -0.3 + steer * arm.side * 0.25, -0.72 + wobA * 0.5, tuck);
      sz = mix(arm.side * (0.55 + steer * arm.side * 0.3) + bk * arm.side * 0.45, arm.side * 0.15, tuck);
      ex = mix(0.5 + inside * 0.55 + swayB * 0.35, 0.18, tuck);
      wx = arm.side * steer * 0.2;
    } else {
      // skier: hands ride in front, elbows pumping with the carve; the tuck
      // sends both arms straight back with the poles trailing uphill; pole
      // plants punch the inside hand forward with the elbow extending
      const env = plantEnv[pi];
      sx = mix(0.5 + bk * -0.35 + wobA + steer * arm.side * 0.18, -0.82, tuck) + env * 0.95;
      sz = mix(arm.side * (0.3 + bk * 0.5), arm.side * 0.1, tuck);
      ex = mix(0.9 + inside * 0.5 + swayB * 0.3, 0.15, tuck) - env * 0.55;
      wx = mix(0.35 - bk * 0.5, 0.05, tuck) - env * 0.85;
    }
    // airborne arms: spread for balance, whip TOWARD the spin to feed it,
    // pull in as it winds up (skater physics), flare back out as it dies,
    // and the leading arm reaches down into flips (grab)
    if (!idle && knocked <= 0.3) {
      const spread = 1.15 - Math.abs(twist) * 0.85 + stumble * 0.4;
      const grab = arm.side < 0 ? curl * 0.9 : curl * 0.25;
      const throwZ = twist * 0.55; // both arms swing toward the rotation
      sx = sx * (1 - air) + (-0.5 + wobA + grab + Math.abs(twist) * 0.3 + twist * arm.side * 0.4) * air;
      sz = sz * (1 - air) + (arm.side * spread + throwZ) * air;
      ex = ex * (1 - air) + (0.55 + grab * 0.5 + Math.abs(twist) * 0.5) * air;
      wx = wx * (1 - air) + -0.2 * air;
    }
    // arms are loose masses: they trail the body and swing through stops
    RX(arm.shoulder, sx + longG * -0.5 + swayA * arm.side * 0.7, 8, 0.5);
    RZ(arm.shoulder, sz + jolt * arm.side * 0.4 + swayB * arm.side * 0.5, 8, 0.5);
    RX(arm.elbow, ex, 9, 0.55);
    RX(arm.wrist, wx + swayB * 0.4, 7, 0.45);
  }
  for (const [i, pole] of parts.poles.entries()) {
    // poles trail at cruise, sweep flat back-uphill in a tuck, and swing
    // forward to stab the snow on a plant
    const env = plantEnv[i];
    RX(pole, mix(-1.15, -2.05, tuck) + longG * 0.3 + env * 1.05, 6, 0.45);
  }
}
