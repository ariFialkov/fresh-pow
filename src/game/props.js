// Venue support props: the uploaded start/finish structures (gate towers,
// timing pavilion, finish arch, podium, grandstand) converted to one
// meshopt GLB with four named material buckets per prop —
// structure / secondary / panel / trim — recolored per venue theme at
// spawn so every event's furniture wears that mountain's palette.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

let propRoot = null;

export async function loadProps() {
  if (propRoot) return;
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync('models/props.glb');
  propRoot = gltf.scene;
}

// organic props wear wood tones keyed to the venue's trees, not event steel
const WOODY = new Set(['log_small', 'log_hollow']);

/** The four bucket colors for a venue theme (wood tones for organic props). */
export function propPalette(theme, id) {
  if (id && WOODY.has(id)) {
    const bark = new THREE.Color(theme.trunk ?? 0x5a4630);
    return {
      structure: bark.clone().multiplyScalar(0.9),
      secondary: bark.clone().lerp(new THREE.Color(0xc9b795), 0.4),
      panel: new THREE.Color(0xc9b083), // cut faces / heartwood
      trim: new THREE.Color(0xf4f8fd), // snow dusting
    };
  }
  const secondary = new THREE.Color(0xaab4bf).lerp(new THREE.Color(theme.snow), 0.25);
  return {
    structure: new THREE.Color(0x2e3542).lerp(new THREE.Color(theme.fog), 0.12),
    secondary,
    panel: new THREE.Color(theme.eventA ?? 0xd6452f),
    trim: new THREE.Color(theme.eventB ?? 0xf5d76e),
  };
}

const matCache = new Map();
function bucketMat(name, palette, paletteKey) {
  const key = `${paletteKey}:${name}`;
  let m = matCache.get(key);
  if (!m) {
    const c = palette[name] ?? new THREE.Color(0x888888);
    m = name === 'trim'
      ? new THREE.MeshLambertMaterial({ color: c, emissive: c.clone().multiplyScalar(0.35) })
      : new THREE.MeshLambertMaterial({ color: c });
    matCache.set(key, m);
  }
  return m;
}

/**
 * Instantiate a prop recolored for the theme.
 * @param {string} id start_gate | pavilion | finish_line | podium | bleachers
 * @param {object} theme venue theme (themes.js entry)
 * @param {number} scale uniform scale (model native width = 100 units)
 */
export function createProp(id, theme, scale = 1) {
  const src = propRoot.getObjectByName(id);
  const palette = propPalette(theme, id);
  const paletteKey = `${WOODY.has(id) ? 'wood' : 'evt'}:${theme.snow}:${theme.eventA}`;
  // wrap the clone: quantized GLBs carry a compensating scale on the mesh
  // node itself, so instance scaling must live on a parent, never overwrite it
  const inner = src.clone();
  inner.traverse((o) => {
    if (!o.isMesh) return;
    if (Array.isArray(o.material)) o.material = o.material.map((m) => bucketMat(m.name, palette, paletteKey));
    else o.material = bucketMat(o.material.name, palette, paletteKey);
    o.castShadow = true;
  });
  const inst = new THREE.Group();
  inst.add(inner);
  inst.scale.setScalar(scale);
  return inst;
}
