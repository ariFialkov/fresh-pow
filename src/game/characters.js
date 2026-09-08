// Rigged rider characters (uploaded models), reskinned per instance.
//
// Pipeline: three meshopt-compressed GLBs (boarder / skier / tuber) plus their
// original scan-style textures as JPEGs. The textures are chaotic UV atlases,
// so per-part recoloring works by COLOR-CLUSTER CLASSIFICATION: each model has
// 10 canonical k-means centers (baked offline) with a hand-assigned role per
// cluster (jacket / jacket2 / pants / hat / accessory / skin / hair). At load
// we classify every texel once; per variant we emit a recolored texture where
// texel = roleColor * (texelLuminance / roleMainLuminance) — shading survives,
// garments change color, faces get real skin tones.
//
// The pose system stays the game's own: riderMesh.js drives proxy joints and
// applySkeleton() retargets them onto these bones every frame.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';
import { mulberry32 } from './rng.js';

export const MODEL_SCALE = 0.0105; // model cm -> world meters (~1.78 m tall)

// canonical cluster centers (fixed k-means result) + role per cluster.
// role 'main: true' marks the luminance reference for that garment family.
const CFG = {
  boarder: {
    clusters: [
      ['#121214', 'pants', true],
      ['#403f2f', 'jacket', true],
      ['#6e5036', 'hair', true],
      ['#2f2a29', 'hair', false],
      ['#593e26', 'hair', false],
      ['#8d684e', 'hair', false],
      ['#d49274', 'skin', true],
      ['#421c95', 'accessory', true],
      ['#dacfc5', 'jacket2', true],
      ['#2a66db', 'accessory', false],
    ],
  },
  skier: {
    clusters: [
      ['#1b191b', 'accessory', true],
      ['#222023', 'pants', true],
      ['#b42f2b', 'jacket', true],
      ['#151214', 'pants', false],
      ['#8b211f', 'jacket', false],
      ['#342e2f', 'hat', true],
      ['#391b1c', 'hair', true],
      ['#602423', 'jacket', false],
      ['#85685c', 'skin', false],
      ['#c6a495', 'skin', true],
    ],
  },
  tuber: {
    clusters: [
      ['#1f2736', 'jacket2', true],
      ['#1a1a1f', 'pants', false],
      ['#131317', 'pants', false],
      ['#232125', 'pants', true],
      ['#29303e', 'jacket2', false],
      ['#ed6025', 'jacket', true],
      ['#efae94', 'skin', true],
      ['#983a11', 'jacket', false],
      ['#583b31', 'hair', true],
      ['#a0786a', 'skin', false],
    ],
  },
};

export const TYPE_TO_MODEL = { ski: 'skier', board: 'boarder', sled: 'tuber' };

// wardrobe pools for per-instance variety
const POOL = {
  jacket2: [0xf4f4f4, 0x1b1e24, 0xffd94a, 0x7ae0d8, 0xf08c2e, 0x88b7e8, 0x2b2f3a, 0xe0407e],
  pants: [0x16181c, 0x2b2f38, 0x243447, 0x3c3428, 0x4a2430, 0x333a2e, 0x1e2a24],
  hat: [0xd6452f, 0xf5a623, 0x3ec66b, 0x38bdf8, 0xe0407e, 0xf4f4f4, 0x1b1e24],
  accessory: [0xf5a623, 0x38bdf8, 0xe0407e, 0x3ec66b, 0xc03028, 0xf4f4f4, 0x7a4fd0],
  skin: [0xf2c9ab, 0xeab890, 0xdba57b, 0xc98f63, 0xa97045, 0x8a5533, 0x6b4226, 0x54331d],
  hair: [0x2a2018, 0x453018, 0x6b4a24, 0xa0762e, 0xc9a45c, 0xd9c9a0, 0x8a8a90, 0x1c1c22],
};

const hex2rgb = (h) => [(h >> 16) & 255, (h >> 8) & 255, h & 255];
const parseHex = (s) => parseInt(s.slice(1), 16);

const ASSETS = {}; // id -> { gltf, classIdx, pixLum, size, roles }
const texCache = new Map();

/** Loads all three character models + classifies their textures. Call once. */
export async function loadCharacters() {
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);

  await Promise.all(
    Object.keys(CFG).map(async (id) => {
      const [gltf, img] = await Promise.all([
        loader.loadAsync(`models/${id}.glb`),
        new Promise((res, rej) => {
          const im = new Image();
          im.onload = () => res(im);
          im.onerror = rej;
          im.src = `models/${id}-base.jpg`;
        }),
      ]);

      // classify every texel once (palette-independent)
      const S = 1024;
      const c = document.createElement('canvas');
      c.width = c.height = S;
      const ctx = c.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, S, S);
      const px = ctx.getImageData(0, 0, S, S).data;
      const centers = CFG[id].clusters.map(([hex]) => hex2rgb(parseHex(hex)));
      const n = S * S;
      const classIdx = new Uint8Array(n);
      const pixLum = new Uint8Array(n);
      for (let i = 0; i < n; i++) {
        const r = px[i * 4], g = px[i * 4 + 1], b = px[i * 4 + 2];
        let bi = 0, bd = 1e9;
        for (let ci = 0; ci < centers.length; ci++) {
          const cc = centers[ci];
          const d = (r - cc[0]) ** 2 + (g - cc[1]) ** 2 + (b - cc[2]) ** 2;
          if (d < bd) { bd = d; bi = ci; }
        }
        classIdx[i] = bi;
        pixLum[i] = (r + g + b) / 3;
      }
      // role + luminance reference per cluster
      const mainLum = {};
      for (const [hex, role, main] of CFG[id].clusters) {
        if (main) {
          const [r, g, b] = hex2rgb(parseHex(hex));
          mainLum[role] = (r + g + b) / 3;
        }
      }
      const roles = CFG[id].clusters.map(([, role]) => ({ role, mainLum: mainLum[role] ?? 128 }));
      ASSETS[id] = { gltf, classIdx, pixLum, size: S, roles };
    })
  );
}

/** Seeded wardrobe: jacket = identity color, the rest drawn from the pools. */
export function makePalette(jacketColor, seed) {
  const rng = mulberry32(seed >>> 0);
  const pick = (arr) => arr[Math.floor(rng() * arr.length)];
  return {
    jacket: jacketColor,
    jacket2: pick(POOL.jacket2),
    pants: pick(POOL.pants),
    hat: pick(POOL.hat),
    accessory: pick(POOL.accessory),
    skin: pick(POOL.skin),
    hair: pick(POOL.hair),
  };
}

function variantTexture(modelId, palette) {
  const key = modelId + '|' + Object.values(palette).join(',');
  let tex = texCache.get(key);
  if (tex) return tex;

  const { classIdx, pixLum, size, roles } = ASSETS[modelId];
  const table = roles.map(({ role, mainLum }) => ({
    rgb: role === 'keep' ? null : hex2rgb(palette[role] ?? 0x888888),
    inv: 1 / Math.max(8, mainLum),
  }));
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const im = ctx.createImageData(size, size);
  const out = im.data;
  const n = size * size;
  for (let i = 0; i < n; i++) {
    const t = table[classIdx[i]];
    const bright = Math.min(1.85, (pixLum[i] + 3) * t.inv);
    out[i * 4] = Math.min(255, t.rgb[0] * bright);
    out[i * 4 + 1] = Math.min(255, t.rgb[1] * bright);
    out[i * 4 + 2] = Math.min(255, t.rgb[2] * bright);
    out[i * 4 + 3] = 255;
  }
  ctx.putImageData(im, 0, 0);
  tex = new THREE.CanvasTexture(c);
  tex.flipY = true; // geometry keeps FBX-style UVs
  tex.colorSpace = THREE.SRGBColorSpace;
  texCache.set(key, tex);
  return tex;
}

/** test/debug hook */
export function __debug() {
  return { assets: ASSETS, variantTexture };
}

const BONE_NAMES = {
  hips: 'Hips',
  spine: 'Spine',
  spine1: 'Spine01',
  chest: 'Spine02',
  neck: 'neck',
  head: 'Head',
};

/**
 * Clones a character, applies its variant texture, and precomputes the
 * retargeting data (rest orientations + rig-space rotation axes per bone).
 */
export function createCharacter(type, jacketColor, seed) {
  const modelId = TYPE_TO_MODEL[type] ?? 'boarder';
  const asset = ASSETS[modelId];
  const root = cloneSkeleton(asset.gltf.scene);
  const palette = makePalette(jacketColor, seed);

  let mesh = null;
  root.traverse((o) => {
    if (o.isSkinnedMesh) mesh = o;
  });
  mesh.material = new THREE.MeshLambertMaterial({ map: variantTexture(modelId, palette) });
  mesh.castShadow = true;
  mesh.frustumCulled = false; // skinned bounds don't track the pose

  // ---- collect bones + rest pose (in model-root space) ----
  root.updateMatrixWorld(true);
  const bones = {};
  root.traverse((o) => {
    if (o.isBone) bones[o.name] = o;
  });
  const rootQ = new THREE.Quaternion();
  root.getWorldQuaternion(rootQ);
  const rootQInv = rootQ.clone().invert();

  // rig axes expressed in model space (the rig faces -z; the model faces +z
  // and gets a PI wrapper, so x and z flip)
  const RIG_AXES = {
    x: new THREE.Vector3(-1, 0, 0),
    y: new THREE.Vector3(0, 1, 0),
    z: new THREE.Vector3(0, 0, -1),
  };

  const rest = {};
  const tmpQ = new THREE.Quaternion();
  for (const [name, bone] of Object.entries(bones)) {
    bone.getWorldQuaternion(tmpQ);
    const worldRel = rootQInv.clone().multiply(tmpQ); // model-space rest orientation
    const invWorldRel = worldRel.clone().invert();
    rest[name] = {
      localQ: bone.quaternion.clone(),
      localPos: bone.position.clone(),
      axes: {
        x: RIG_AXES.x.clone().applyQuaternion(invWorldRel).normalize(),
        y: RIG_AXES.y.clone().applyQuaternion(invWorldRel).normalize(),
        z: RIG_AXES.z.clone().applyQuaternion(invWorldRel).normalize(),
      },
      worldRelInv: invWorldRel,
    };
  }

  // resolve left/right chains by rig-side (rig +x == model -X)
  const sideOf = (prefix) => {
    const L = bones[`Left${prefix}`];
    const R = bones[`Right${prefix}`];
    const lx = new THREE.Vector3();
    L.getWorldPosition(lx);
    // model -X is rig +x
    return -lx.x >= 0 ? { 1: L, [-1]: R } : { 1: R, [-1]: L };
  };
  const arms = sideOf('Arm');
  const forearms = sideOf('ForeArm');
  const hands = sideOf('Hand');
  const upLegs = sideOf('UpLeg');
  const legs = sideOf('Leg');
  const feet = sideOf('Foot');

  return { root, bones, rest, mesh, palette, sided: { arms, forearms, hands, feet, legs, upLegs } };
}

const _qa = new THREE.Quaternion();
const _qb = new THREE.Quaternion();

/**
 * bone.quaternion = restLocal * offset * Rx * Ry * Rz, where each R rotates
 * about the bone-local image of a rig axis — so the pose code can keep
 * thinking in the rig's own axes.
 */
export function poseBone(char, bone, rx, ry, rz, offsetQ = null) {
  const r = char.rest[bone.name];
  if (!r) return;
  const q = bone.quaternion.copy(r.localQ);
  if (offsetQ) q.multiply(offsetQ);
  if (ry) q.multiply(_qa.setFromAxisAngle(r.axes.y, ry));
  if (rx) q.multiply(_qa.setFromAxisAngle(r.axes.x, rx));
  if (rz) q.multiply(_qa.setFromAxisAngle(r.axes.z, rz));
}

/** Offset quaternion rotating about a rig axis, in a bone's local frame. */
export function rigAxisOffset(char, boneName, axis, angle) {
  const r = char.rest[boneName];
  return new THREE.Quaternion().setFromAxisAngle(r.axes[axis], angle);
}
