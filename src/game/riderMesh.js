// Rider assembly: procedural gear (skis/boards/sleds) + the uploaded rigged
// character models (characters.js), reskinned per instance.
//
// The pose engine below is unchanged from the procedural era: setPose()
// drives spring-damped PROXY joints in the rig's own axis conventions
// (pelvis -> spine -> chest -> neck, shoulders -> elbows -> wrists,
// hips -> knees -> ankles), and applySkeleton() retargets those proxies onto
// the character's real bones every frame via precomputed rest-frame axes.
import * as THREE from 'three';
import { createCharacter, MODEL_SCALE } from './characters.js';

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
    for (const side of [-0.175, 0.175]) {
      const base = mesh(capsule('skibase', 0.075, 1.74), baseMat);
      base.rotation.x = Math.PI / 2;
      base.scale.set(1, 1, 0.16);
      base.position.set(side, 0.008, 0.05);
      const ski = mesh(capsule('ski', 0.068, 1.72), deckMat);
      ski.rotation.x = Math.PI / 2;
      ski.scale.set(1, 1, 0.22);
      ski.position.set(side, 0.024, 0.05);
      const tip = mesh(capsule('skitip', 0.062, 0.18), accentMat);
      tip.rotation.x = Math.PI / 2 - 0.55;
      tip.scale.set(0.95, 1, 0.3);
      tip.position.set(side, 0.078, -0.94);
      const binding = mesh(cached('bind', () => new THREE.BoxGeometry(0.13, 0.08, 0.36)), darkMat);
      binding.position.set(side, 0.05, 0.05);
      g.add(base, ski, tip, binding);
    }
  } else if (gear.type === 'board') {
    const base = mesh(capsule('boardbase', 0.205, 1.32), baseMat);
    base.rotation.x = Math.PI / 2;
    base.scale.set(1, 1, 0.085);
    base.position.y = 0.02;
    const deck = mesh(capsule('board', 0.19, 1.3), deckMat);
    deck.rotation.x = Math.PI / 2;
    deck.scale.set(1, 1, 0.115);
    deck.position.y = 0.035;
    const stripe = mesh(capsule('bstripe', 0.125, 1.14), accentMat);
    stripe.rotation.x = Math.PI / 2;
    stripe.scale.set(1, 1, 0.12);
    stripe.position.y = 0.048;
    g.add(base, deck, stripe);
    // bindings sit where the pose actually plants the boots (measured), with
    // the same duck angles the ankle comp applies: front open, back near flat
    for (const [z, rot] of [[-0.35, 0.28], [0.35, -0.08]]) {
      const b = mesh(cached('bbind', () => new THREE.BoxGeometry(0.17, 0.05, 0.33)), darkMat);
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

  const gearGroup = buildGear(gear);
  // boards ride a touch higher so the deck never vanishes into the snow
  if (isBoard) gearGroup.position.y = 0.07;
  // yaw first, then pitch/roll in the yawed frame: rotation.x pitches about
  // the BOARD's own lateral axis and rotation.z rolls its long axis, however
  // far the deck has swung (needed to keep a checked board flush)
  gearGroup.rotation.order = 'YXZ';
  rig.add(gearGroup);

  // ---- rigged character (uploaded model), reskinned per instance ----
  let seed = helmetColor >>> 0;
  for (const ch of gear.id) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const char = createCharacter(gear.type, helmetColor, seed);
  const wrapper = new THREE.Group();
  wrapper.rotation.y = Math.PI; // model faces +z; the rig faces -z
  wrapper.scale.setScalar(MODEL_SCALE);
  wrapper.add(char.root);
  rig.add(wrapper);

  // ---- joint retarget table: per bone, the rig axes in bone-local rest
  // frame (arms get an extra "T-pose -> hanging" offset folded in) ----
  const RIG_AXES = {
    x: new THREE.Vector3(-1, 0, 0), // rig +x == model -X
    y: new THREE.Vector3(0, 1, 0),
    z: new THREE.Vector3(0, 0, -1), // rig -z (forward) == model +Z
  };
  const axesFromEff = (effQ) => {
    const inv = effQ.clone().invert();
    return {
      x: RIG_AXES.x.clone().applyQuaternion(inv).normalize(),
      y: RIG_AXES.y.clone().applyQuaternion(inv).normalize(),
      z: RIG_AXES.z.clone().applyQuaternion(inv).normalize(),
    };
  };
  const ctl = { joints: {}, char };
  const addJoint = (key, bone, effQ, offsetQ = null) => {
    if (!bone) return;
    ctl.joints[key] = { bone, restLocal: bone.quaternion.clone(), axes: axesFromEff(effQ), offsetQ };
  };
  const restWorld = (bone) => char.rest[bone.name].worldRelInv.clone().invert();

  const B = char.bones;
  addJoint('hips', B.Hips, restWorld(B.Hips));
  if (B.Spine) addJoint('spine', B.Spine, restWorld(B.Spine));
  if (B.Spine01) addJoint('spine1', B.Spine01, restWorld(B.Spine01));
  if (B.Spine02) addJoint('chest', B.Spine02, restWorld(B.Spine02));
  if (B.neck) addJoint('neck', B.neck, restWorld(B.neck));
  if (B.Head) addJoint('head', B.Head, restWorld(B.Head));

  for (const s of [-1, 1]) {
    const arm = char.sided.arms[s];
    const forearm = char.sided.forearms[s];
    const hand = char.sided.hands[s];
    // fold the arm from the model's T-pose down to the rig's hanging rest
    const drop = new THREE.Quaternion().setFromAxisAngle(
      char.rest[arm.name].axes.z,
      -s * (Math.PI / 2 - 0.18)
    );
    const effArm = restWorld(arm).multiply(drop);
    addJoint('arm' + s, arm, effArm, drop);
    const effFore = effArm.clone().multiply(forearm.quaternion);
    addJoint('fore' + s, forearm, effFore);
    const effHand = effFore.clone().multiply(hand.quaternion);
    addJoint('hand' + s, hand, effHand);

    addJoint('upleg' + s, char.sided.upLegs[s], restWorld(char.sided.upLegs[s]));
    addJoint('leg' + s, char.sided.legs[s], restWorld(char.sided.legs[s]));
    addJoint('foot' + s, char.sided.feet[s], restWorld(char.sided.feet[s]));
  }

  // ---- leg IK rest data: standing riders pin their ankles to fixed
  // binding anchors on the gear (no foot wiggle), so the legs are solved
  // as a two-bone chain instead of driven by open-loop angles ----
  char.root.updateWorldMatrix(true, true);
  ctl.ik = {};
  for (const s of [-1, 1]) {
    const U = char.sided.upLegs[s], L = char.sided.legs[s], F = char.sided.feet[s];
    const up = U.getWorldPosition(new THREE.Vector3());
    const lp = L.getWorldPosition(new THREE.Vector3());
    const fp = F.getWorldPosition(new THREE.Vector3());
    ctl.ik[s] = {
      upleg: U, leg: L, foot: F,
      L1: up.distanceTo(lp), L2: lp.distanceTo(fp),
      uplegRestQ: U.getWorldQuaternion(new THREE.Quaternion()),
      legRestQ: L.getWorldQuaternion(new THREE.Quaternion()),
      footRestQ: F.getWorldQuaternion(new THREE.Quaternion()),
      dirThighRest: lp.clone().sub(up).normalize(),
      dirCalfRest: fp.clone().sub(lp).normalize(),
    };
  }

  // hips crouch/shift offsets convert into the hips-parent frame
  const hp = B.Hips.parent;
  const hpQ = new THREE.Quaternion();
  hp.getWorldQuaternion(hpQ);
  const rootQ = new THREE.Quaternion();
  char.root.getWorldQuaternion(rootQ);
  ctl.hipsParentInv = rootQ.invert().multiply(hpQ).invert();
  ctl.hipsRestPos = B.Hips.position.clone();

  // ---- proxy joints: the pose code keeps its own rig semantics ----
  const proxy = () => ({ rotation: { x: 0, y: 0, z: 0 }, position: { x: 0, y: 0, z: 0 }, userData: {} });
  const parts = {
    pelvis: proxy(),
    spine: proxy(),
    chest: proxy(),
    neck: proxy(),
    head: proxy(),
    legs: [
      { hip: proxy(), knee: proxy(), ankle: proxy(), index: 0, side: -1 },
      { hip: proxy(), knee: proxy(), ankle: proxy(), index: 1, side: 1 },
    ],
    arms: [
      { shoulder: proxy(), elbow: proxy(), wrist: proxy(), side: -1 },
      { shoulder: proxy(), elbow: proxy(), wrist: proxy(), side: 1 },
    ],
    poles: [],
  };

  // ski poles hang from the hands positionally, but their SWING frame is
  // re-stabilized to the rig every frame in applySkeleton — a plant must
  // stab and pivot backward along the line of travel, not wherever the
  // mid-punch hand happens to be pointing (which read as an inward sweep)
  if (gear.type === 'ski') {
    const poleMat = mat(0x3a404c);
    ctl.poleStab = [];
    for (const s of [-1, 1]) {
      const hand = char.sided.hands[s];
      const holder = new THREE.Group();
      const handRest = restWorld(hand);
      holder.quaternion.copy(handRest.invert()).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI));
      holder.scale.setScalar(1 / MODEL_SCALE);
      hand.add(holder);
      ctl.poleStab.push({ hand, holder });
      const poleG = new THREE.Group();
      const pole = mesh(cached('pole', () => new THREE.CylinderGeometry(0.011, 0.011, 1.05, 5)), poleMat);
      pole.position.y = -0.38;
      const basket = mesh(cached('basket', () => new THREE.ConeGeometry(0.045, 0.03, 8)), poleMat);
      basket.position.y = -0.85;
      const grip = mesh(capsule('grip', 0.02, 0.06), mat(gear.accent));
      grip.position.y = 0.05;
      poleG.add(pole, basket, grip);
      holder.add(poleG);
      parts.poles.push(poleG);
    }
  }

  // soft contact blob (real shadows carry most of the grounding)
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.8, 16),
    new THREE.MeshBasicMaterial({ color: 0x0b1c2c, transparent: true, opacity: 0.13, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  root.add(shadow);

  // fixed ankle anchors in gearGroup-local space — the bindings. Feet stay
  // exactly here, always (IK solves the legs down to them).
  const footAnchors = isSled
    ? null
    : isBoard
      ? {
          1: { pos: new THREE.Vector3(0, 0.175, -0.35), yaw: 0.28 }, // front foot, ducked open
          [-1]: { pos: new THREE.Vector3(0, 0.175, 0.35), yaw: -0.08 }, // back foot, near flat
        }
      : {
          1: { pos: new THREE.Vector3(0.175, 0.2, 0.03), yaw: 0 },
          [-1]: { pos: new THREE.Vector3(-0.175, 0.2, 0.03), yaw: 0 },
        };

  const rider = {
    root, rig, gearGroup, parts, shadow, char, ctl, footAnchors,
    isSled, isBoard, type: gear.type,
    isSaucer: gear.id === 'sled-saucer',
    // sideways GOOFY stance (chest to the rider's right): braking out of a
    // left cut puts the back to the mountain, out of a right cut the chest —
    // the mapping asked of the slide checks. The board itself points dead
    // forward so its trail leaves straight off the tail.
    baseBodyYaw: isBoard ? -Math.PI / 2 : 0,
    gearYawBase: 0,
    _brakeSmooth: 0,
    _brakeSide: 1,
    _wasBraking: false,
    _s: { tuck: 0, brakeIn: 0, steer: 0, stumble: 0, knocked: 0, crouch: 0, air: 0, shift: 0, twist: 0, curl: 0 },
  };
  setPose(rider, { idle: true, t: 0, dt: 1 }); // dt=1 converges the damping instantly
  return rider;
}

// ------------------------------------------------------ skeleton apply ----

const STAND_Y = 1.0; // the pose solver's standing pelvis height (meters)
const _aq = new THREE.Quaternion();
const _av = new THREE.Vector3();
// IK scratch
const _tW = new THREE.Vector3();
const _hipW = new THREE.Vector3();
const _v1 = new THREE.Vector3();
const _kf = new THREE.Vector3();
const _n = new THREE.Vector3();
const _bx = new THREE.Vector3();
const _by = new THREE.Vector3();
const _bz = new THREE.Vector3();
const _m1 = new THREE.Matrix4();
const _m2 = new THREE.Matrix4();
const _q1 = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _q3 = new THREE.Quaternion();
const _rigQ = new THREE.Quaternion();
const _kneeW = new THREE.Vector3();
const _calfDir = new THREE.Vector3();
const _legQ = new THREE.Quaternion();
const _RIG_X = new THREE.Vector3(-1, 0, 0); // rig lateral axis in model space
const _UP = new THREE.Vector3(0, 1, 0);
const _POLE_FLIP = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI);

// Orthonormal frame (X ~ bend axis, Y = bone direction) -> quaternion.
function frameQuat(out, x, y) {
  _bz.crossVectors(x, y).normalize();
  _bx.crossVectors(y, _bz).normalize();
  _m1.makeBasis(_bx, y, _bz);
  return out.setFromRotationMatrix(_m1);
}

function setJoint(ctl, key, rx, ry, rz) {
  const j = ctl.joints[key];
  if (!j) return;
  const q = j.bone.quaternion.copy(j.restLocal);
  if (j.offsetQ) q.multiply(j.offsetQ);
  if (ry) q.multiply(_aq.setFromAxisAngle(j.axes.y, ry));
  if (rx) q.multiply(_aq.setFromAxisAngle(j.axes.x, rx));
  if (rz) q.multiply(_aq.setFromAxisAngle(j.axes.z, rz));
}

/** Retargets the proxy joints onto the character skeleton. */
function applySkeleton(rider) {
  const { ctl, parts: P } = rider;
  if (!ctl) return;

  const pel = P.pelvis;
  setJoint(ctl, 'hips', pel.rotation.x, pel.rotation.y, pel.rotation.z);
  const dx = -pel.position.x / MODEL_SCALE;
  const dy = (pel.position.y - STAND_Y) / MODEL_SCALE;
  const dz = -pel.position.z / MODEL_SCALE;
  _av.set(dx, dy, dz).applyQuaternion(ctl.hipsParentInv);
  ctl.joints.hips.bone.position.copy(ctl.hipsRestPos).add(_av);

  // the torso fold spreads across the model's three spine bones
  const sp = P.spine.rotation, chn = P.chest.rotation;
  setJoint(ctl, 'spine', sp.x * 0.6, sp.y * 0.6, sp.z * 0.6);
  setJoint(ctl, 'spine1', sp.x * 0.4 + chn.x * 0.3, sp.y * 0.4 + chn.y * 0.3, sp.z * 0.4 + chn.z * 0.3);
  setJoint(ctl, 'chest', chn.x * 0.7, chn.y * 0.7, chn.z * 0.7);
  const nk = P.neck.rotation;
  setJoint(ctl, 'neck', nk.x * 0.55, nk.y * 0.55, nk.z * 0.55);
  setJoint(ctl, 'head', nk.x * 0.45, nk.y * 0.45, nk.z * 0.45);

  for (const arm of P.arms) {
    const s = arm.side;
    setJoint(ctl, 'arm' + s, arm.shoulder.rotation.x, arm.shoulder.rotation.y, arm.shoulder.rotation.z);
    setJoint(ctl, 'fore' + s, arm.elbow.rotation.x, 0, 0);
    setJoint(ctl, 'hand' + s, arm.wrist.rotation.x, 0, 0);
  }
  if (rider.footAnchors) {
    const gg = rider.gearGroup;
    rider.rig.updateWorldMatrix(true, false);
    rider.rig.getWorldQuaternion(_rigQ);

    // ---- aero-tuck fold, in WORLD frame: rotate hips + spine chain about
    // the rig's lateral axis so the fold always aims down the hill, no
    // matter how far the pelvis is yawed. Local-axis pitch can't do this —
    // the spine's pitch axis turns with the hips. The neck/head get a
    // counter-share so the rider keeps looking down the line. ----
    const fold = rider.rigFold ?? 0;
    if (fold > 0.002) {
      _kf.set(-1, 0, 0).applyQuaternion(_rigQ); // world-space rig lateral axis
      const b = rider.char.bones;
      for (const [bone, share] of [
        [ctl.joints.hips.bone, 0.42],
        [b.Spine, 0.16], [b.Spine01, 0.16], [b.Spine02, 0.16],
        [b.neck, -0.42], [b.Head, -0.3],
      ]) {
        if (!bone) continue;
        bone.parent.getWorldQuaternion(_q1);
        _q2.setFromAxisAngle(_kf, fold * share);
        bone.quaternion.premultiply(_q3.copy(_q1).invert().multiply(_q2).multiply(_q1));
      }
    }

    // ---- standing riders: two-bone leg IK pins each ankle to its binding
    // anchor on the gear — the feet never wiggle, whatever the body does ----
    // knees aim between the board nose and the hips' facing
    const kneeYaw = (P.pelvis.rotation.y || 0) * 0.55 + gg.rotation.y * 0.45;
    for (const s of [-1, 1]) {
      const ik = ctl.ik[s];
      const anchor = rider.footAnchors[s];
      // anchor -> world through the gear's live transform
      _tW.copy(anchor.pos).applyQuaternion(gg.quaternion).add(gg.position);
      rider.rig.localToWorld(_tW);
      ik.upleg.getWorldPosition(_hipW); // fresh: climbs the just-posed hips
      _v1.subVectors(_tW, _hipW);
      const reach = ik.L1 + ik.L2;
      const d = Math.min(Math.max(_v1.length(), reach * 0.3), reach * 0.995);
      _v1.normalize();
      // bend plane: knees kick out the way the rider faces (yaw + faces -x,
      // so the facing vector is (-sin, 0, -cos) — the sign matters: flipped,
      // the knees bend backwards and the legs read as twisted around)
      _kf.set(-Math.sin(kneeYaw), 0, -Math.cos(kneeYaw)).applyQuaternion(_rigQ);
      _n.crossVectors(_kf, _v1);
      if (_n.lengthSq() < 1e-6) _n.set(-1, 0, 0).applyQuaternion(_rigQ);
      _n.normalize();
      const alpha = Math.acos(Math.min(1, Math.max(-1, (ik.L1 * ik.L1 + d * d - ik.L2 * ik.L2) / (2 * ik.L1 * d))));
      const thighDir = _v1.applyAxisAngle(_n, -alpha); // aliases _v1
      // world orientation: rotate the bone's rest pose by the world-space
      // delta between its rest chain frame and the solved chain frame (the
      // rig rotation cancels through the rest frame, so none leads here)
      frameQuat(_q1, _n, thighDir);
      _by.copy(ik.dirThighRest).applyQuaternion(_rigQ);
      _bx.copy(_RIG_X).applyQuaternion(_rigQ);
      frameQuat(_q2, _bx, _by);
      const uplegW = _q3.copy(_q1).multiply(_q2.invert()).multiply(_rigQ).multiply(ik.uplegRestQ);
      ik.upleg.parent.getWorldQuaternion(_q1);
      ik.upleg.quaternion.copy(_q1.invert()).multiply(uplegW);
      // calf: from the solved knee point down to the anchor
      _kneeW.copy(_hipW).addScaledVector(thighDir, ik.L1);
      _calfDir.subVectors(_tW, _kneeW).normalize();
      frameQuat(_q1, _n, _calfDir);
      _by.copy(ik.dirCalfRest).applyQuaternion(_rigQ);
      _bx.copy(_RIG_X).applyQuaternion(_rigQ);
      frameQuat(_q2, _bx, _by);
      const legW = _legQ.copy(_q1).multiply(_q2.invert()).multiply(_rigQ).multiply(ik.legRestQ);
      ik.leg.quaternion.copy(_q1.copy(uplegW).invert()).multiply(legW);
      // boot: flat on the deck, turned to its binding angle, riding the
      // gear's own tilt — fully independent of what the legs are doing
      _q1.setFromAxisAngle(_UP, anchor.yaw);
      const footW = _q2.copy(_rigQ).multiply(gg.quaternion).multiply(_q1).multiply(ik.footRestQ);
      ik.foot.quaternion.copy(_q1.copy(legW).invert()).multiply(footW);
    }
  } else {
    for (const leg of P.legs) {
      const s = leg.side;
      setJoint(ctl, 'upleg' + s, leg.hip.rotation.x, leg.hip.rotation.y, leg.hip.rotation.z);
      setJoint(ctl, 'leg' + s, leg.knee.rotation.x, 0, 0);
      setJoint(ctl, 'foot' + s, leg.ankle.rotation.x, leg.ankle.rotation.y, leg.ankle.rotation.z);
    }
  }

  // pole holders: cancel the hand's LIVE orientation so the pole frame is
  // always rig-aligned — the grip rides in the hand, the shaft swings only
  // fore-aft along travel (hang, plant and recovery all sagittal)
  if (ctl.poleStab) {
    rider.rig.getWorldQuaternion(_q2).multiply(_POLE_FLIP);
    for (const ps of ctl.poleStab) {
      ps.hand.getWorldQuaternion(_q1);
      ps.holder.quaternion.copy(_q1.invert()).multiply(_q2);
    }
  }

  // trailing-hand world position while the mitt is brushing the snow
  if ((rider.mittDrag ?? 0) > 0.05) {
    const hb = ctl.joints['hand-1']?.bone;
    if (hb) {
      if (!rider.mittWorld) rider.mittWorld = new THREE.Vector3();
      hb.getWorldPosition(rider.mittWorld);
    }
  }
}

// ---------------------------------------------------------------- pose ----
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
    if (!sv) sv = g.userData._sv = { x: 0, y: 0, z: 0, px: 0, py: 0, pz: 0 };
    const isPos = axis[0] === 'p';
    const pAxis = axis[1];
    const cur = isPos ? g.position[pAxis] : g.rotation[axis];
    if (dt > 0.2) {
      // init/convergence call — snap, no dynamics
      sv[axis] = 0;
      if (isPos) g.position[pAxis] = target;
      else g.rotation[axis] = target;
      return;
    }
    const acc = om * om * (target - cur) - 2 * zt * om * sv[axis];
    sv[axis] += acc * dt;
    const nv = cur + sv[axis] * dt;
    if (isPos) g.position[pAxis] = nv;
    else g.rotation[axis] = nv;
  };
  const RX = (g, v, om = 13, zt = 0.85) => spr(g, 'x', v, om, zt);
  const RY = (g, v, om = 13, zt = 0.85) => spr(g, 'y', v, om, zt);
  const RZ = (g, v, om = 13, zt = 0.85) => spr(g, 'z', v, om, zt);
  const PX = (g, v, om = 14, zt = 0.9) => spr(g, 'px', v, om, zt);
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

  // hockey-stop: gear and body swing perpendicular together, smoothly.
  // The brake edge follows the INPUT, latched at the press (regular
  // stance): steering left = heelside check, steering right = toeside
  // check, no steer = either at random.
  if ((p.brake ?? 0) > 0 && !rider._wasBraking) {
    const rnd = Math.random() < 0.5 ? -1 : 1;
    rider._brakeSide = Math.abs(steer) > 0.05 ? (steer < 0 ? 1 : -1) : rnd;
    rider._edgeLean = Math.abs(steer) > 0.05 ? (steer < 0 ? 1 : -1) : rnd;
  }
  rider._wasBraking = (p.brake ?? 0) > 0;
  const bk = rider._brakeSmooth += ((idle || airborne ? 0 : brake) - rider._brakeSmooth) * Math.min(1, dt * 6);
  const bkYaw = rider._brakeSide * bk;

  // whole-body edge angle into the turn; braking leans the body over the
  // chosen edge (+z Euler roll tips the body toward -x, the toe side of the
  // regular stance); knocked riders lie on their side
  const brakeLean = isSled ? 0 : bk * (rider._edgeLean ?? 1) * 0.42;
  RZ(rider.rig, -steer * (isSled ? 0.28 : isBoard ? 0.58 : 0.42) * (1 - tuck * 0.25) * (1 - bk * 0.6) + brakeLean + wobS * 0.4 + swayB * 0.4 + knocked * rider._brakeSide * 1.35, 6.5, 0.6);

  if (!isSled) {
    // skis pivot across the slope to scrub; the board instead noses INTO the
    // turn slightly ahead of the body, so the deck reads as leading the carve
    RY(rider.gearGroup, rider.gearYawBase + bkYaw * (isBoard ? 1.57 : 1.45) + steer * (isBoard ? 0.16 : -0.12), 12, 0.8);
    // The body's roll is about the RIG's forward axis; once the gear has
    // swung toward perpendicular that roll geometrically turns into fore-aft
    // PITCH on the deck — which is why a checked board used to nose into the
    // hill. Cancel the live rig roll in the BOARD's own axes (cos -> roll,
    // sin -> pitch), keeping just a small dug-edge tilt, so the deck stays
    // flush with tips level at 90 degrees. Knocked riders tumble whole.
    const gy = rider.gearGroup.rotation.y;
    const rr = rider.rig.rotation.z;
    // boards always glide decoupled from the body bank; skis edge with the
    // body through carves and only decouple while checked sideways
    const cancelW = (1 - knocked) * (isBoard ? 1 : bk);
    const dugEdge = -bk * (rider._edgeLean ?? 1) * (isBoard ? 0.22 : 0.15);
    const carveEdge = isBoard ? -steer * 0.14 * (1 - tuck * 0.25) * (1 - bk * 0.6) : 0;
    RZ(rider.gearGroup, (carveEdge + dugEdge - rr * Math.cos(gy)) * cancelW, 7, 0.6);
    RX(rider.gearGroup, rr * Math.sin(gy) * cancelW, 9, 0.7);
  } else {
    RY(rider.gearGroup, bkYaw * 0.25);
  }

  if (isSled && rider.isSaucer) {
    // tube ride: kneeling in the dish — shins along the bottom, toes pointed
    // back past the rim, butt near the heels, hands down on the handles
    // holding onto the tube keeps the body quiet: small smooth leans, knees
    // riding the bumps, the head tucking in a little as speed picks up
    PY(parts.pelvis, 0.58 - knocked * 0.18);
    RY(parts.pelvis, bkYaw * 0.25);
    const spx = 0.28 + brake * -0.22 + tuck * 0.18 + wobS * 0.6 + longG * -0.2 + swayB * 0.3 + knocked * 0.4;
    RX(parts.spine, spx, 8, 0.6);
    RZ(parts.spine, -steer * 0.2 + swayA * 0.6, 8, 0.6);
    RX(parts.chest, 0.1 + tuck * 0.12 + longG * -0.14 + speed * 0.08, 8, 0.6);
    RX(parts.neck, -(spx + 0.1) * 0.7 + longG * 0.2 + speed * 0.14, 7, 0.5);
    RZ(parts.neck, steer * 0.16 + swayA * 0.5, 7, 0.5);
    for (const leg of parts.legs) {
      // thigh near vertical; the knees soak the bumps in small up-downs
      RX(leg.hip, 0.3 + breathe * 0.02 + jolt * 0.14 + swayB * 0.06, 9, 0.6);
      RZ(leg.hip, leg.side * 0.14); // knees spread toward the rim
      RX(leg.knee, -2.25); // deep fold: shin back along the dish
      RX(leg.ankle, 0.85); // toes pointed behind
      RY(leg.ankle, 0);
      RZ(leg.ankle, 0);
    }
    const grip = Math.abs(steer) * 0.3 + brake * 0.3; // hang on tighter through turns
    for (const arm of parts.arms) {
      RX(arm.shoulder, -0.6 + brake * 0.25 + air * -0.35 + wobA * 0.6 + longG * -0.3 + swayA * arm.side * 0.6 + knocked * 0.8, 8, 0.5);
      RZ(arm.shoulder, arm.side * (-0.22 + jolt * 0.35 + knocked * 0.9), 8, 0.5);
      RX(arm.elbow, 0.4 + grip, 9, 0.55);
      RX(arm.wrist, -0.3, 7, 0.45);
    }
    applySkeleton(rider);
    return;
  }
  if (isSled) {
    // seated sledder gripping the deck: quiet body, smooth small leans,
    // knees riding the chop, head ducking a touch with speed
    PY(parts.pelvis, 0.5 - knocked * 0.1); // seat height: butt on the deck, legs clear of it
    RY(parts.pelvis, bkYaw * 0.25);
    const spx = 0.14 + brake * -0.25 + tuck * 0.2 + wobS * 0.6 + longG * -0.2 + swayB * 0.3 + knocked * 0.4;
    RX(parts.spine, spx, 8, 0.6);
    RZ(parts.spine, -steer * 0.2 + swayA * 0.6, 8, 0.6);
    RX(parts.chest, 0.1 + tuck * 0.15 + longG * -0.14 + speed * 0.07, 8, 0.6);
    RX(parts.neck, -(spx + 0.1) * 0.7 + longG * 0.2 + speed * 0.12, 7, 0.5);
    RZ(parts.neck, steer * 0.16 + swayA * 0.5, 7, 0.5);
    for (const leg of parts.legs) {
      RX(leg.hip, 1.5 + breathe * 0.02 + jolt * 0.12 + swayB * 0.05, 9, 0.6);
      RX(leg.knee, -0.95);
      RX(leg.ankle, -0.6);
      RY(leg.ankle, 0);
    }
    const grip = Math.abs(steer) * 0.3 + brake * 0.25; // hang on tighter through turns
    for (const arm of parts.arms) {
      RX(arm.shoulder, -0.85 + brake * 0.3 + air * -0.3 + wobA * 0.6 + longG * -0.3 + swayA * arm.side * 0.6 + knocked * 0.8, 8, 0.5);
      RZ(arm.shoulder, arm.side * (-0.18 + jolt * 0.35 + knocked * 0.9), 8, 0.5);
      RX(arm.elbow, 0.5 + grip, 9, 0.55);
      RX(arm.wrist, -0.3, 7, 0.45);
    }
    applySkeleton(rider);
    return;
  }

  // ---- standing riders (ski / board) ----
  // deep frontside carve: the whole body sinks and the trailing mitt reaches
  // down to brush the snow (race scene reads mittDrag + mittWorld for spray)
  // (regular stance: toeside is a RIGHT turn, steer > 0)
  const fsDrag = isBoard && !idle
    ? Math.max(0, (steer - 0.45) / 0.55) * (1 - air) * (1 - tuck) * (1 - knocked)
    : 0;
  rider.mittDrag = fsDrag;

  // ground and air stances blend continuously through S.air. Legs stay long
  // and casual — knees only really load up through turns, landings and
  // tucks, never as a resting crouch; airborne legs stay floaty, not balled.
  const kneeGround = idle
    ? (isBoard ? 0.2 : 0.14) + breathe * 0.03
    : (isBoard ? 0.26 : 0.32) + Math.abs(steer) * 0.28 + fsDrag * 0.4 + tuck * (isBoard ? 0.2 : 0.5) + crouch * (isBoard ? 0.45 : 0.6) + brake * 0.25 + knocked * 0.9;
  const kneeBend = kneeGround * (1 - air) + ((isBoard ? 0.55 : 0.75) + crouch * 0.2 + curl * 0.5 + Math.abs(twist) * 0.25) * air;

  // the legs are IK-solved to the binding anchors (applySkeleton); the pose
  // only decides how LOW the pelvis rides, which is what sets the knee bend
  const a = kneeBend * 0.8;
  const b = kneeBend * 1.65;
  const legVSum = 2 * (THIGH_L * Math.cos(a) + CALF_L * Math.cos(b - a));
  // solve pelvis height so soles land on the deck (0.16 ankle->deck stack,
  // 0.05 hip offset inside the pelvis)
  PY(parts.pelvis, legVSum / 2 + 0.16 + 0.05 + (isBoard ? 0.03 : 0) - air * 0.12 - knocked * 0.35);
  // center of gravity slides fore/aft over the deck with the weight shift
  PZ(parts.pelvis, -shift * 0.11);
  // hips flow with the turn on a lazy spring — the twist "catches up" the
  // torso rather than snapping with it. Board heelside carves open the hips
  // toward the fall line (that laid-back backside look); ski hips swing
  // gently into every turn.
  const pelvisYaw = rider.baseBodyYaw + bkYaw * (isBoard ? 0.5 : 0.8)
    + (isBoard ? Math.min(0, steer) * 0.5 : steer * 0.42) * (1 - tuck)
    + (isBoard ? -0.5 * tuck : 0); // a tucked boarder squares up toward travel to fold low over the nose
  RY(parts.pelvis, pelvisYaw, 7, 0.7);
  // aero tuck: the fold happens in applySkeleton as a WORLD-frame rotation
  // about the rig's lateral axis (hips + spine chain), because the spine
  // bones hang under the yawed pelvis and any local-axis pitch would bend
  // the sideways board rider toward his hips' facing instead of downhill
  rider.rigFold = isBoard ? tuck * 1.5 * (1 - knocked) : 0;

  const spineGround = idle
    ? 0.05 + breathe * 0.015
    : (isBoard ? 0.14 : 0.06) + tuck * (isBoard ? 0.15 : 0.45) - brake * 0.22 + knocked * 0.5 + shift * 0.22
      + (isBoard ? Math.min(0, steer) * 0.25 * (1 - tuck) : 0); // heelside (left turn): lean back casual
  const spineBase = spineGround * (1 - air) + (-0.08 + tuck * 0.2 + curl * 0.6) * air;
  // the fold spreads over two spine joints for a rounded back; the torso
  // counter-rotates against the hips through carves for that wound-up look
  // acceleration G presses the body upright/back — but a tucked rider is
  // braced hard forward, so the tuck largely overrides that press
  const gBrace = 1 - tuck * 0.8;
  RX(parts.spine, spineBase * 0.45 + wobS * 0.5 + longG * -0.28 * gBrace + swayB * 0.4, 9, 0.65);
  RZ(parts.spine, -steer * 0.12 + wobS * 0.3 + swayA * 0.6, 9, 0.65);
  // boarders keep their shoulders with the board (only the head opens
  // downhill); skiers square the torso back toward the fall line
  RY(parts.spine, -pelvisYaw * (isBoard ? 0.08 : 0.25) + steer * (isBoard ? 0.26 : 0.18) + twist * 0.35 * air, 9, 0.65);
  RX(parts.chest, spineBase * 0.55 + tuck * (isBoard ? 0.1 : 0.35) + wobS * 0.5 + longG * -0.22 * gBrace, 8.5, 0.6);
  RZ(parts.chest, -steer * 0.12 + swayA * 0.5, 8.5, 0.6);
  RY(parts.chest, -pelvisYaw * (isBoard ? 0.14 : 0.3) + steer * (isBoard ? 0.22 : 0.14) + twist * 0.5 * air, 8.5, 0.6);
  // the head is the loosest mass: it counter-balances late and wobbles
  RX(parts.neck, -(spineBase + tuck * 0.35) * 0.75 + longG * 0.3, 6.5, 0.48);
  RZ(parts.neck, steer * 0.38 + swayA * 0.9, 6.5, 0.48);
  RY(parts.neck, -pelvisYaw * (isBoard ? 0.72 : 0.45) - steer * 0.2 + twist * 0.7 * air, 6.5, 0.48);

  // (legs: nothing to drive here — applySkeleton IK-solves them down to the
  // binding anchors from the pelvis the springs above just placed)

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
      if (arm.side < 0 && fsDrag > 0) { // regular: the trailing mitt is the left hand
        // trailing mitt drops toward the snow on the toeside lean
        sx = mix(sx, 0.5, fsDrag);
        sz = mix(sz, -1.45, fsDrag);
        ex = mix(ex, 0.08, fsDrag);
      }
    } else {
      // skier: hands ride in front, elbows pumping with the carve; the tuck
      // sends both arms straight back with the poles trailing uphill; pole
      // plants punch the inside hand forward with the elbow extending
      const env = plantEnv[pi];
      sx = mix(0.42 + bk * -0.35 + wobA + steer * arm.side * 0.18, -0.82, tuck) + env * 0.95;
      sz = mix(arm.side * (0.3 + bk * 0.5), arm.side * 0.1, tuck);
      ex = mix(0.72 + inside * 0.5 + swayB * 0.3, 0.15, tuck) - env * 0.55;
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
    // poles dangle loose behind the hands at cruise (that thrown-away flowy
    // look), sweep flat back-uphill in a tuck, and swing forward to stab on
    // a plant. The soft spring lets them lag and swing like dead weight.
    const env = plantEnv[i];
    // rig-frame targets: near-vertical at a standstill, trailing down-back
    // at cruise, flat back-uphill in a tuck, stabbing just ahead on a plant
    const hang = idle ? -0.55 : -1.15;
    RX(pole, mix(hang, -2.1, tuck) + longG * 0.3 + env * 1.35, 4.5, 0.38);
  }
  applySkeleton(rider);
}
