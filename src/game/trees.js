// Venue tree species, procedurally built to each uploaded sculpt's measured
// silhouette (tools/treeanalyze.html: per-band 80th-percentile radius, crown
// start, asymmetry). Clean low-poly primitives in the game's own look —
// cone tiers for conifers, clustered blobs for broadleaves — instead of
// decimated sculpt soup. Each species returns trunk/foliage/snow geometries
// (height = the theme's treeH meters, base on y=0) that the terrain tints
// and instances like the default spruce.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const cache = new Map();

// deterministic per-species jitter so clumps don't look copy-pasted
function jrng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a * 1664525 + 1013904223) >>> 0;
    return a / 4294967296;
  };
}

const cone = (r, h, y, seg = 8) => {
  const g = new THREE.ConeGeometry(r, h, seg);
  g.translate(0, y, 0);
  return g;
};
const blob = (r, squash, x, y, z, rng) => {
  const g = new THREE.IcosahedronGeometry(r, 1);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const j = 1 + (rng() - 0.5) * 0.3;
    p.setXYZ(i, p.getX(i) * j, p.getY(i) * squash * j, p.getZ(i) * j);
  }
  g.computeVertexNormals();
  g.translate(x, y, z);
  return g;
};
const snowBlob = (r, x, y, z) => {
  const g = new THREE.IcosahedronGeometry(r, 0);
  g.scale(1, 0.38, 1);
  g.translate(x, y, z);
  return g;
};
const trunkCyl = (r0, r1, h, y, lean = 0, seg = 7) => {
  const g = new THREE.CylinderGeometry(r1, r0, h, seg);
  if (lean) g.applyMatrix4(new THREE.Matrix4().makeRotationZ(lean));
  g.translate(lean ? Math.sin(-lean) * h * 0.5 : 0, y + h / 2, 0);
  return g;
};

// ---- conifer: stacked cone tiers following a radius profile ----
// tiers: [yFrac, rFrac] pairs (fractions of total height H)
function tiered(H, trunkR, tiers, tierH) {
  const trunk = trunkCyl(trunkR * H, trunkR * H * 0.55, H * 0.92, 0);
  const fol = [];
  const snow = [];
  for (const [yf, rf] of tiers) {
    fol.push(cone(rf * H, tierH * H, yf * H, 8));
    // settled snow rides every tier's upper shoulder
    snow.push(cone(rf * H * 0.66, tierH * H * 0.42, (yf + tierH * 0.28) * H, 8));
  }
  return { trunk, foliage: mergeGeometries(fol), snow: mergeGeometries(snow) };
}

// ---- broadleaf: trunk + clustered canopy blobs ----
// blobs: [x, y, z, r, squash] in height fractions
function canopied(H, trunkR, trunkH, blobs, seed, lean = 0) {
  const rng = jrng(seed);
  const trunk = trunkCyl(trunkR * H, trunkR * H * 0.5, trunkH * H * 1.12, 0, lean);
  const fol = [];
  const snow = [];
  for (const [x, y, z, r, squash] of blobs) {
    fol.push(blob(r * H, squash, x * H, y * H, z * H, rng));
    snow.push(snowBlob(r * H * 0.62, x * H, (y + r * squash * 0.88) * H, z * H));
  }
  return { trunk, foliage: mergeGeometries(fol), snow: mergeGeometries(snow) };
}

// silhouettes from the analysis of each uploaded sculpt
const SPECIES = {
  // narrow boreal spike: r80 14->1.5, foliage to the ground
  quebec: (H) => tiered(H, 0.022, [
    [0.10, 0.145], [0.26, 0.13], [0.42, 0.115], [0.57, 0.085], [0.71, 0.06], [0.84, 0.038],
  ], 0.2),
  // classic blue spruce cone: r80 26->4, chunky
  colorado: (H) => tiered(H, 0.03, [
    [0.10, 0.27], [0.30, 0.235], [0.50, 0.19], [0.68, 0.14], [0.84, 0.085],
  ], 0.24),
  // hemlock: tall spire with alternating skirt widths and a wispy tip
  bc: (H) => tiered(H, 0.026, [
    [0.08, 0.215], [0.22, 0.17], [0.34, 0.22], [0.47, 0.15], [0.58, 0.18], [0.70, 0.13], [0.81, 0.10], [0.91, 0.045],
  ], 0.16),
  // stone pine: dense egg, widest low (r80 peak 37 at 25-40%)
  swiss: (H) => canopied(H, 0.045, 0.3, [
    [0, 0.30, 0, 0.32, 0.75],
    [0.10, 0.52, 0.06, 0.27, 0.8],
    [-0.09, 0.50, -0.07, 0.26, 0.8],
    [0, 0.72, 0, 0.20, 0.85],
    [0, 0.88, 0, 0.11, 0.9],
  ], 11),
  // araucaria: long bare trunk, flat umbrella canopy massed high
  chile: (H) => canopied(H, 0.034, 0.6, [
    [0, 0.76, 0, 0.34, 0.36],
    [0.19, 0.72, 0.10, 0.22, 0.4],
    [-0.18, 0.73, -0.11, 0.22, 0.4],
    [0.02, 0.87, -0.02, 0.24, 0.42],
    [0, 0.95, 0, 0.12, 0.5],
  ], 23),
  // sugar maple: short trunk, wide round crown (r80 ~45 low, taper up)
  vermont: (H) => canopied(H, 0.05, 0.24, [
    [0, 0.42, 0, 0.34, 0.72],
    [0.22, 0.48, 0.10, 0.24, 0.7],
    [-0.20, 0.47, -0.12, 0.25, 0.7],
    [0.08, 0.66, -0.10, 0.24, 0.75],
    [-0.06, 0.70, 0.12, 0.21, 0.75],
    [0, 0.84, 0, 0.15, 0.8],
  ], 37),
  // aspen: slim bare trunk to ~45%, small high crown
  utah: (H) => canopied(H, 0.022, 0.5, [
    [0, 0.60, 0, 0.19, 0.8],
    [0.09, 0.74, 0.05, 0.16, 0.85],
    [-0.08, 0.73, -0.06, 0.15, 0.85],
    [0, 0.88, 0, 0.11, 0.9],
  ], 41),
  // white birch: pale trunk to ~28%, airy tall rounded crown
  japan: (H) => canopied(H, 0.026, 0.34, [
    [0, 0.48, 0, 0.26, 0.7],
    [0.12, 0.62, 0.07, 0.20, 0.75],
    [-0.11, 0.63, -0.08, 0.19, 0.75],
    [0, 0.80, 0, 0.18, 0.8],
    [0.02, 0.93, 0, 0.10, 0.85],
  ], 53),
  // wind-swept southern beech: leaning trunk, canopy massed hard to one side
  nz: (H) => canopied(H, 0.06, 0.5, [
    [-0.12, 0.48, 0.02, 0.30, 0.55],
    [-0.38, 0.60, -0.10, 0.36, 0.45],
    [-0.62, 0.68, -0.20, 0.34, 0.4],
    [-0.20, 0.72, 0.10, 0.24, 0.5],
    [0.10, 0.50, 0.06, 0.18, 0.55],
  ], 67, 0.28),
};

/**
 * Species tree geometry for a venue, or null for the default spruce.
 * @returns {null | {trunk, foliage, snow}} BufferGeometries, height treeH m
 */
export function speciesTree(theme) {
  const key = theme?.key;
  if (!key || !SPECIES[key]) return null;
  if (cache.has(key)) return cache.get(key);
  const built = SPECIES[key](theme.treeH ?? 7.5);
  cache.set(key, built);
  return built;
}
