// Procedural ski hill. Every race gets a fresh mountain from a seed:
// a meandering valley run with rolls, mogul fields, kicker jumps, cliff drops,
// crevices, boulders and tree lines. heightAt(x, z) is a pure function of the
// seed so physics and rendering always agree.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mulberry32, noise1, fbm2, clamp, lerp, smoothstep } from './rng.js';
import { THEMES } from './themes.js';

export const COURSE = {
  length: 1800, // meters from gate to finish line (s = -z)
  halfWidth: 55, // playable half width around the centerline
  meshHalfWidth: 110, // rendered half width (includes valley walls)
};

const GRADE = 0.5; // average downhill grade

export class Terrain {
  constructor(seed, theme = THEMES.utah) {
    this.seed = seed >>> 0;
    this.theme = theme;
    const rng = mulberry32(this.seed);
    this.ph = Array.from({ length: 8 }, () => rng() * Math.PI * 2);

    // ---- discrete features along the run ----
    this.jumps = [];
    let s = 170 + rng() * 80;
    while (s < COURSE.length - 220) {
      this.jumps.push({ s, x: this.centerAt(s) + (rng() - 0.5) * 36, w: 15 + rng() * 6 });
      s += 190 + rng() * 150;
    }

    this.drops = [];
    s = 320 + rng() * 160;
    while (s < COURSE.length - 300) {
      // keep cliffs clear of kickers
      if (!this.jumps.some((j) => Math.abs(j.s - s) < 60)) {
        this.drops.push({ s, h: (4 + rng() * 6) * theme.cliffMul });
      }
      s += 380 + rng() * 260;
    }

    // one mega cliff for the drama
    const megaS = 700 + rng() * 600;
    if (!this.jumps.some((j) => Math.abs(j.s - megaS) < 80)) {
      this.drops.push({ s: megaS, h: (12 + rng() * 5) * Math.max(0.7, theme.cliffMul) });
    }

    this.crevices = [];
    for (let i = 0; i < 4; i++) {
      const cs = 250 + rng() * (COURSE.length - 500);
      if (this.jumps.some((j) => Math.abs(j.s - cs) < 50)) continue;
      this.crevices.push({ s: cs, x: this.centerAt(cs) + (rng() - 0.5) * 70, w: 14 + rng() * 12, d: 2.5 + rng() * 2 });
    }

    // ice bridges: a crosswise snow ridge with a portal gap — ride the ridge
    // over the top, or thread the arch through the underpass
    this.bridges = [];
    let bs = 340 + rng() * 160;
    while (bs < COURSE.length - 320) {
      const clear = !this.jumps.some((j) => Math.abs(j.s - bs) < 80) && !this.drops.some((d) => Math.abs(d.s - bs) < 90);
      if (clear) {
        this.bridges.push({
          s: bs,
          h: 6 + rng() * 2.5,
          gapX: this.centerAt(bs) + (rng() - 0.5) * 42,
          gapW: 12 + rng() * 4,
          len: 21,
        });
        bs += 420 + rng() * 260;
      } else {
        // blocked by a jump or cliff — slide downhill and try again soon
        bs += 70 + rng() * 40;
      }
    }

    // spines: long ridges running down the fall line — pick a side
    this.spines = [];
    for (let i = 0; i < 2; i++) {
      const s0 = 420 + rng() * 700;
      this.spines.push({
        s0,
        s1: s0 + 220 + rng() * 200,
        xOff: (rng() < 0.5 ? -1 : 1) * (10 + rng() * 18),
        h: 3.2 + rng() * 2.4,
        w: 7 + rng() * 4,
      });
    }

    // ---- obstacles (collidable) + scenery ----
    this.obstacles = []; // { x, z, r, kind } sorted by s for cheap lookup
    const treeXf = [];
    const rockXf = [];
    const addTree = (x, sPos, collides) => {
      const sc = 0.8 + rng() * 0.9;
      const z = -sPos;
      treeXf.push({ x, z, sc, rot: rng() * Math.PI * 2 });
      if (collides) this.obstacles.push({ x, z, r: 1.1 * sc, kind: 'tree' });
    };
    const addRock = (x, sPos, collides) => {
      const sc = 1.1 + rng() * 1.6;
      const z = -sPos;
      rockXf.push({ x, z, sc, rot: rng() * Math.PI * 2 });
      if (collides) this.obstacles.push({ x, z, r: 1.3 * sc, kind: 'rock' });
    };

    const nearBridge = (ts) => this.bridges.some((b) => Math.abs(b.s - ts) < b.len + 12);
    const nearJump = (ts) => this.jumps.some((j) => Math.abs(j.s - ts) < 50);

    // 1) boundary treelines: continuous groomed run edges, like a real hill
    const treeMul = theme.treeMul;
    const edgeStep = clamp(11 / Math.max(0.05, treeMul), 6, 200);
    for (const side of [-1, 1]) {
      let ts = 70 + rng() * 8;
      while (ts < COURSE.length + 60) {
        const wiggle = noise1(ts * 0.01 + side * 3.3, this.seed + 5) * 0.08;
        const u = 0.94 + wiggle + rng() * 0.08;
        addTree(this.centerAt(ts) + side * COURSE.halfWidth * u, ts, u < 1.0);
        // staggered second row just outside thickens the edge
        if (rng() < 0.65) {
          addTree(this.centerAt(ts) + side * COURSE.halfWidth * (u + 0.1 + rng() * 0.1), ts + 3 + rng() * 4, false);
        }
        ts += edgeStep * (0.7 + rng() * 0.6);
      }
    }

    // 2) glades: dense organized woods bulging into the run — pick a line
    //    around them or thread the clearings
    this.glades = [];
    let gs = treeMul < 0.3 ? COURSE.length : 220 + rng() * 200; // treeless venues skip glades
    while (gs < COURSE.length - 260) {
      if (!nearBridge(gs) && !nearJump(gs)) {
        this.glades.push({
          s0: gs,
          s1: gs + 110 + rng() * 130,
          side: rng() < 0.5 ? -1 : 1,
          depth: 0.34 + rng() * 0.2,
        });
        gs += 340 + rng() * 300;
      } else {
        gs += 80;
      }
    }
    for (const g of this.glades) {
      for (let ts = g.s0; ts < g.s1; ts += 6.5) {
        for (let r = 0; r < 4; r++) {
          if (rng() < 0.22) continue; // clearings to thread
          const u = 1.0 - g.depth * (r / 3) - rng() * 0.05;
          addTree(
            this.centerAt(ts) + g.side * COURSE.halfWidth * u + (rng() - 0.5) * 2.5,
            ts + (rng() - 0.5) * 4,
            u < 1.0
          );
        }
      }
    }

    // 3) slalom hazards inside the run — enough to keep the open snow honest
    const loneTrees = Math.round(34 * clamp(treeMul, 0.1, 1.2));
    for (let i = 0; i < loneTrees; i++) {
      const ts = 150 + rng() * (COURSE.length - 280);
      const x = this.centerAt(ts) + (rng() - 0.5) * COURSE.halfWidth * 1.1;
      if (nearJump(ts) || nearBridge(ts)) continue;
      addTree(x, ts, true);
    }

    // 4) rockfall clusters at the wall bases + a handful of lone boulders
    const clusters = clamp(Math.round(4 * theme.rockMul), 2, 8);
    for (let ci = 0; ci < clusters; ci++) {
      const cs = 200 + rng() * (COURSE.length - 420);
      if (nearBridge(cs) || nearJump(cs)) continue;
      const side = rng() < 0.5 ? -1 : 1;
      const cxr = this.centerAt(cs) + side * COURSE.halfWidth * (0.7 + rng() * 0.22);
      const n = 4 + Math.floor(rng() * 5);
      for (let i = 0; i < n; i++) {
        addRock(cxr + (rng() - 0.5) * 11, cs + (rng() - 0.5) * 15, true);
      }
    }
    const loneRocks = clamp(Math.round(26 * theme.rockMul), 8, 55);
    for (let i = 0; i < loneRocks; i++) {
      const ts = 160 + rng() * (COURSE.length - 320);
      const x = this.centerAt(ts) + (rng() - 0.5) * COURSE.halfWidth * 1.4;
      if (nearJump(ts) || nearBridge(ts)) continue;
      addRock(x, ts, Math.abs(x - this.centerAt(ts)) < COURSE.halfWidth);
    }
    this.obstacles.sort((a, b) => -a.z - -b.z); // ascending s
    this._treeXf = treeXf;
    this._rockXf = rockXf;
  }

  /** Centerline x of the valley at distance s downhill. */
  centerAt(s) {
    const u = clamp(s, 0, COURSE.length);
    return 24 * Math.sin(u * 0.0081 + this.ph[0]) + 16 * Math.sin(u * 0.0031 + this.ph[1]);
  }

  /** Terrain height. Pure function of (x, z) and the seed. */
  heightAt(x, z) {
    const s = -z;
    const su = clamp(s, 0, COURSE.length);

    // base descent: average grade with long rollers; flattens into a runout past the line
    let gs;
    if (s < 0) gs = s; // rises behind the gates — natural backstop
    else if (s <= COURSE.length) gs = s;
    else gs = COURSE.length + (s - COURSE.length) * 0.12;
    let h = -GRADE * gs + 16 * Math.sin(su * 0.011 + this.ph[2]) + 9 * Math.sin(su * 0.0047 + this.ph[3]);

    // valley cross-section: gentle dish + steep walls past the course edge
    const c = this.centerAt(s);
    const u = (x - c) / COURSE.halfWidth;
    h += 5 * u * u;
    const au = Math.abs(u);
    if (au > 0.85) h += 55 * (au - 0.85) * (au - 0.85);

    // start apron: keep the gate area clean
    const rough = smoothstep(25, 90, s);

    // big rolls and ridge lines
    h += 5.5 * this.theme.roughMul * fbm2(x * 0.017, s * 0.017, this.seed, 3) * rough;
    // mogul fields come and go in zones
    const mogul = smoothstep(0.25, 0.75, noise1(s * 0.004 + 7.7, this.seed) * 0.5 + 0.5);
    h += 1.3 * this.theme.mogulMul * fbm2(x * 0.085, s * 0.085, this.seed + 31, 2) * mogul * rough;

    // kicker jumps: ramp up then the ground falls away
    for (const j of this.jumps) {
      const lat = 1 - ((x - j.x) / j.w) ** 2;
      if (lat <= 0) continue;
      const t = (s - (j.s - 16)) / 16;
      if (t > 0 && t <= 1) h += 5.2 * t * t * lat;
      else if (s > j.s && s < j.s + 34) h -= 2.8 * (1 - (s - j.s) / 34) * lat; // carved landing
    }

    // corduroy striations: fine grooves running down the fall line
    const striae = smoothstep(0.3, 0.7, noise1(su * 0.0031 + 3.3, this.seed + 12) * 0.5 + 0.5);
    h += 0.85 * Math.sin(x * 0.34 + su * 0.004 + this.ph[5]) * striae * rough;

    // cliff drops: full-width sharp step down
    for (const d of this.drops) {
      h -= d.h * smoothstep(0, 2.5, s - d.s);
    }

    // ice bridges: crosswise ridge with a portal gap at gapX
    for (const b of this.bridges) {
      const ds = (s - b.s) / b.len;
      if (Math.abs(ds) < 1) {
        const env = 0.5 + 0.5 * Math.cos(ds * Math.PI);
        const gx = (x - b.gapX) / (b.gapW / 2);
        const gap = Math.abs(gx) < 1 ? Math.cos((gx * Math.PI) / 2) ** 2 : 0;
        h += b.h * env * (1 - gap);
      }
    }

    // spines along the fall line
    for (const sp of this.spines) {
      if (s > sp.s0 - 50 && s < sp.s1 + 50) {
        const env = smoothstep(sp.s0 - 40, sp.s0, s) * (1 - smoothstep(sp.s1, sp.s1 + 40, s));
        const q = (x - (c + sp.xOff)) / sp.w;
        h += sp.h * env * Math.exp(-q * q);
      }
    }

    // crevices: narrow icy trenches
    for (const cv of this.crevices) {
      const ds = (s - cv.s) / 3.2;
      const dx = (x - cv.x) / cv.w;
      if (Math.abs(ds) < 3 && Math.abs(dx) < 1) {
        h -= cv.d * Math.exp(-ds * ds) * (1 - dx * dx);
      }
    }

    return h;
  }

  /** Central-difference surface normal. */
  normalAt(x, z, out = new THREE.Vector3()) {
    const e = 0.8;
    const hx = this.heightAt(x + e, z) - this.heightAt(x - e, z);
    const hz = this.heightAt(x, z + e) - this.heightAt(x, z - e);
    return out.set(-hx / (2 * e), 1, -hz / (2 * e)).normalize();
  }

  /** Obstacles with s within [s0, s1] (cheap scan — list is sorted by s). */
  obstaclesNear(s0, s1) {
    return this.obstacles.filter((o) => -o.z >= s0 && -o.z <= s1);
  }

  // ------------------------------------------------------------------
  // Rendering
  // ------------------------------------------------------------------

  /** Builds all static meshes into `group`. */
  build(group) {
    this._buildGround(group);
    this._buildInstances(group);
    this._buildBridges(group);
    this._buildGatesAndFinish(group);
  }

  _buildBridges(group) {
    // A vault of snow filling the ridge above each portal: outer surface
    // rounds up to the ridge crest, inner surface is the arched tunnel
    // ceiling. Snow-colored so it reads as part of the mountain, with the
    // underside falling into natural blue shade from the hemisphere light.
    const snowMat = new THREE.MeshLambertMaterial({ color: 0xecf3fa });
    for (const b of this.bridges) {
      const floorY = this.heightAt(b.gapX, -b.s);
      const r1 = b.gapW / 2 + 0.4; // tunnel opening
      const r2 = r1 + 4.2; // shoulders that bury into the ridge
      const shape = new THREE.Shape();
      shape.absarc(0, 0, r2, 0, Math.PI, false);
      shape.lineTo(-r1, 0);
      shape.absarc(0, 0, r1, Math.PI, 0, true);
      shape.lineTo(r2, 0);
      // short enough that both end caps stay buried where the ridge is tall
      const depth = b.len * 0.66;
      const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 22 });
      geo.applyMatrix4(new THREE.Matrix4().makeScale(1, (b.h + 1.7) / r2, 1));
      const vault = new THREE.Mesh(geo, snowMat);
      vault.position.set(b.gapX, floorY - 0.2, -b.s - depth / 2);
      vault.castShadow = true;
      vault.receiveShadow = true;
      group.add(vault);
    }
  }

  _buildGround(group) {
    // Snow material: Lambert plus injected view-dependent glints so the
    // surface shimmers like real powder as the camera moves.
    const snowMat = new THREE.MeshLambertMaterial({ vertexColors: true });
    snowMat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', 'varying vec3 vWPos;\n#include <common>')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', 'varying vec3 vWPos;\n#include <common>')
        .replace(
          '#include <dithering_fragment>',
          `{
            vec3 gi = floor(vWPos * 5.0);
            float gh = fract(sin(dot(gi, vec3(127.1, 311.7, 74.7))) * 43758.5453);
            float dist = length(cameraPosition - vWPos);
            vec3 vdir = (cameraPosition - vWPos) / dist;
            vec3 gn = normalize(vec3(fract(gh * 13.7) - 0.5, 1.2, fract(gh * 7.3) - 0.5));
            float glint = step(0.982, gh) * pow(max(dot(vdir, gn), 0.0), 14.0);
            gl_FragColor.rgb += glint * 0.7 * exp(-dist * 0.012);
          }
          #include <dithering_fragment>`
        );
    };

    // Non-uniform grid: fine cells in the riding corridor, coarse on the
    // valley walls. Normals come analytically from heightAt so strip seams
    // are invisible.
    const FINE = 1.7, COARSE = 6.0, CORRIDOR = 74;
    const xs = [];
    for (let x = -COURSE.meshHalfWidth; x < -CORRIDOR; x += COARSE) xs.push(x);
    for (let x = -CORRIDOR; x <= CORRIDOR; x += FINE) xs.push(x);
    for (let x = CORRIDOR + COARSE; x <= COURSE.meshHalfWidth; x += COARSE) xs.push(x);

    const stripLen = 102;
    const rows = Math.round(stripLen / FINE);
    const colSnow = new THREE.Color(this.theme.snow);
    const colIce = new THREE.Color(this.theme.ice);
    const colRock = new THREE.Color(this.theme.rock);
    const tmp = new THREE.Color();

    for (let s0 = -60; s0 < COURSE.length + 180; s0 += stripLen) {
      const cx = this.centerAt(s0 + stripLen / 2);
      const nx = xs.length, nz = rows + 1;

      // heights with one ghost cell on each side for finite-difference normals
      const H = new Float32Array((nx + 2) * (nz + 2));
      const gx = [xs[0] - FINE, ...xs, xs[nx - 1] + FINE];
      const gz = [];
      for (let j = -1; j <= nz; j++) gz.push(-(s0 + j * FINE * (stripLen / (rows * FINE))));
      for (let j = 0; j < nz + 2; j++) {
        for (let i = 0; i < nx + 2; i++) {
          H[j * (nx + 2) + i] = this.heightAt(gx[i] + cx, gz[j]);
        }
      }

      const positions = new Float32Array(nx * nz * 3);
      const normals = new Float32Array(nx * nz * 3);
      const colors = new Float32Array(nx * nz * 3);
      let v = 0;
      for (let j = 0; j < nz; j++) {
        for (let i = 0; i < nx; i++) {
          const wx = xs[i] + cx;
          const wz = gz[j + 1];
          const h = H[(j + 1) * (nx + 2) + (i + 1)];
          positions[v * 3] = wx;
          positions[v * 3 + 1] = h;
          positions[v * 3 + 2] = wz;

          const hl = H[(j + 1) * (nx + 2) + i];
          const hr = H[(j + 1) * (nx + 2) + (i + 2)];
          const hd = H[j * (nx + 2) + (i + 1)];
          const hu = H[(j + 2) * (nx + 2) + (i + 1)];
          const dhdx = (hr - hl) / (gx[i + 2] - gx[i]);
          const dhdz = (hu - hd) / (gz[j + 2] - gz[j]);
          const inv = 1 / Math.hypot(dhdx, 1, dhdz);
          normals[v * 3] = -dhdx * inv;
          normals[v * 3 + 1] = inv;
          normals[v * 3 + 2] = -dhdz * inv;

          const slope = Math.hypot(dhdx, dhdz);
          tmp.copy(colSnow);
          if (slope > 0.85) tmp.lerp(colRock, clamp((slope - 0.85) / 0.9, 0, 1));
          else tmp.lerp(colIce, clamp((slope - 0.45) / 1.2, 0, 0.35));
          const grain = fbm2(wx * 0.21, -wz * 0.21, this.seed + 77, 2) * 0.03;
          colors[v * 3] = clamp(tmp.r + grain, 0, 1);
          colors[v * 3 + 1] = clamp(tmp.g + grain, 0, 1);
          colors[v * 3 + 2] = clamp(tmp.b + grain * 1.5, 0, 1);
          v++;
        }
      }

      const index = [];
      for (let j = 0; j < nz - 1; j++) {
        for (let i = 0; i < nx - 1; i++) {
          const a = j * nx + i;
          index.push(a, a + 1, a + nx, a + 1, a + nx + 1, a + nx);
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geo.setIndex(index);
      geo.computeBoundingSphere();
      const mesh = new THREE.Mesh(geo, snowMat);
      mesh.frustumCulled = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    }
  }

  _buildInstances(group) {
    // trees: trunk + two foliage cones merged per-instance via two instanced meshes
    const trunkGeo = new THREE.CylinderGeometry(0.16, 0.24, 1.4, 6);
    trunkGeo.translate(0, 0.7, 0);
    // layered spruce: two cones + a snow-dusted cap
    const lower = new THREE.ConeGeometry(1.6, 3.0, 8);
    lower.translate(0, 2.4, 0);
    const upper = new THREE.ConeGeometry(1.1, 2.6, 8);
    upper.translate(0, 3.9, 0);
    const foliageGeo = mergeGeometries([lower, upper]);
    const trunkMat = new THREE.MeshLambertMaterial({ color: this.theme.trunk });
    const foliageMat = new THREE.MeshLambertMaterial({ color: this.theme.foliage });
    const nTrees = this._treeXf.length;
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, nTrees);
    const foliage = new THREE.InstancedMesh(foliageGeo, foliageMat, nTrees);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    const sc = new THREE.Vector3();
    this._treeXf.forEach((t, i) => {
      const y = this.heightAt(t.x, t.z) - 0.15;
      q.setFromAxisAngle(up, t.rot);
      sc.set(t.sc, t.sc, t.sc);
      m.compose(new THREE.Vector3(t.x, y, t.z), q, sc);
      trunks.setMatrixAt(i, m);
      foliage.setMatrixAt(i, m);
    });
    trunks.castShadow = foliage.castShadow = true;
    group.add(trunks, foliage);

    const rockGeo = new THREE.IcosahedronGeometry(1.1, 1);
    rockGeo.translate(0, 0.55, 0);
    const rockMat = new THREE.MeshLambertMaterial({ color: this.theme.rock, flatShading: true });
    const rocks = new THREE.InstancedMesh(rockGeo, rockMat, this._rockXf.length);
    this._rockXf.forEach((r, i) => {
      const y = this.heightAt(r.x, r.z) - 0.35;
      q.setFromAxisAngle(up, r.rot);
      sc.set(r.sc, r.sc * (0.7 + (i % 3) * 0.2), r.sc);
      m.compose(new THREE.Vector3(r.x, y, r.z), q, sc);
      rocks.setMatrixAt(i, m);
    });
    rocks.castShadow = true;
    group.add(rocks);

    // course flags every ~90 m marking the line
    const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 2.2, 4);
    poleGeo.translate(0, 1.1, 0);
    const flagGeo = new THREE.PlaneGeometry(0.7, 0.45);
    flagGeo.translate(0.4, 1.8, 0);
    const flags = [];
    for (let s = 90; s < COURSE.length; s += 90) flags.push(s);
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x2c3440 });
    const redMat = new THREE.MeshLambertMaterial({ color: 0xd6452f, side: THREE.DoubleSide });
    const blueMat = new THREE.MeshLambertMaterial({ color: 0x2f6fd6, side: THREE.DoubleSide });
    const poles = new THREE.InstancedMesh(poleGeo, poleMat, flags.length * 2);
    const redFlags = new THREE.InstancedMesh(flagGeo, redMat, flags.length);
    const blueFlags = new THREE.InstancedMesh(flagGeo, blueMat, flags.length);
    flags.forEach((s, i) => {
      const c = this.centerAt(s);
      for (const [k, side] of [[0, -1], [1, 1]]) {
        const x = c + side * 17;
        const z = -s;
        m.compose(new THREE.Vector3(x, this.heightAt(x, z), z), q.identity(), sc.set(1, 1, 1));
        poles.setMatrixAt(i * 2 + k, m);
        (side < 0 ? redFlags : blueFlags).setMatrixAt(i, m);
      }
    });
    group.add(poles, redFlags, blueFlags);
  }

  _buildGatesAndFinish(group) {
    // lane positions only — the start structure itself is built by StartGate
    this.gateLanes = [];
    const c0 = this.centerAt(4);
    for (let i = 0; i < 5; i++) {
      this.gateLanes.push({ x: c0 + (i - 2) * 6.5, z: -4 });
    }

    // finish arch
    const s = COURSE.length;
    const cx = this.centerAt(s);
    const y = this.heightAt(cx, -s);
    const postMat = new THREE.MeshLambertMaterial({ color: 0xf4f9ff });
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 9, 8), postMat);
      const px = cx + side * 15;
      post.position.set(px, this.heightAt(px, -s) + 4.5, -s);
      group.add(post);
    }
    const bannerGeo = new THREE.BoxGeometry(31, 2.2, 0.4);
    const banner = new THREE.Mesh(bannerGeo, new THREE.MeshLambertMaterial({ color: 0xd6452f }));
    banner.position.set(cx, y + 9.5, -s);
    group.add(banner);
    const stripes = new THREE.Mesh(
      new THREE.BoxGeometry(31, 0.7, 0.42),
      new THREE.MeshLambertMaterial({ color: 0xf4f9ff })
    );
    stripes.position.set(cx, y + 8.6, -s);
    group.add(stripes);
  }
}
