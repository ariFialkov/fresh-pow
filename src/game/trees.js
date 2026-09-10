// Venue tree prefabs: the uploaded conifer sculpts, cluster-decimated to
// ~2.4k tris and bucketed into trunk/foliage/snow parts the terrain tints
// per theme and instances along the run. Venues without an uploaded tree
// keep the procedural spruce.
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

let treeRoot = null;
const cache = new Map();

export async function loadTrees() {
  if (treeRoot) return;
  try {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const gltf = await loader.loadAsync('models/trees.glb');
    treeRoot = gltf.scene;
    treeRoot.updateMatrixWorld(true);
  } catch {
    treeRoot = null;
  }
}

/**
 * Parts of a venue's tree model, or null to use the procedural spruce.
 * Quantized attributes must never be baked, so each part carries the
 * compensating node matrix to fold into per-instance matrices.
 * @returns {null | {name: string, geometry: BufferGeometry, nodeMatrix: Matrix4}[]}
 */
export function customTree(themeKey) {
  if (!treeRoot || !themeKey) return null;
  if (cache.has(themeKey)) return cache.get(themeKey);
  const node = treeRoot.getObjectByName(`tree_${themeKey}`);
  let parts = null;
  if (node) {
    parts = [];
    node.traverse((o) => {
      if (!o.isMesh) return;
      const mat = Array.isArray(o.material) ? o.material[0] : o.material;
      parts.push({ name: mat.name, geometry: o.geometry, nodeMatrix: o.matrixWorld.clone() });
    });
  }
  cache.set(themeKey, parts);
  return parts;
}
