// Procedural ski hill. Every race gets a fresh mountain from a seed:
// a meandering valley run with rolls, mogul fields, kicker jumps, cliff drops,
// crevices, boulders and tree lines. heightAt(x, z) is a pure function of the
// seed so physics and rendering always agree.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mulberry32, noise1, fbm2, clamp, lerp, smoothstep } from './rng.js';

export const COURSE = {
  length: 1800, // meters from gate to finish line (s = -z)
  halfWidth: 55, // playable half width around the centerline
  meshHalfWidth: 110, // rendered half width (includes valley walls)
};

const GRADE = 0.5; // average downhill grade

export class Terrain {
  constructor(seed) {
    this.seed = seed >>> 0;
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
        this.drops.push({ s, h: 4 + rng() * 6 });
      }
      s += 380 + rng() * 260;
    }

    this.crevices = [];
    for (let i = 0; i < 4; i++) {
      const cs = 250 + rng() * (COURSE.length - 500);
      if (this.jumps.some((j) => Math.abs(j.s - cs) < 50)) continue;
      this.crevices.push({ s: cs, x: this.centerAt(cs) + (rng() - 0.5) * 70, w: 14 + rng() * 12, d: 2.5 + rng() * 2 });
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

    for (let i = 0; i < 260; i++) {
      const ts = 60 + rng() * (COURSE.length + 60);
      const side = rng() < 0.5 ? -1 : 1;
      const edge = COURSE.halfWidth * (0.55 + rng() * 0.75);
      addTree(this.centerAt(ts) + side * edge, ts, edge < COURSE.halfWidth);
    }
    for (let i = 0; i < 60; i++) {
      const ts = 120 + rng() * (COURSE.length - 200);
      const x = this.centerAt(ts) + (rng() - 0.5) * COURSE.halfWidth * 1.5;
      if (this.jumps.some((j) => Math.abs(j.s - ts) < 45 && Math.abs(j.x - x) < j.w + 8)) continue;
      addRock(x, ts, Math.abs(x - this.centerAt(ts)) < COURSE.halfWidth);
    }
    // sparse trees inside the run for slalom danger
    for (let i = 0; i < 40; i++) {
      const ts = 140 + rng() * (COURSE.length - 260);
      const x = this.centerAt(ts) + (rng() - 0.5) * COURSE.halfWidth * 1.2;
      if (this.jumps.some((j) => Math.abs(j.s - ts) < 45)) continue;
      addTree(x, ts, true);
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
    h += 5.5 * fbm2(x * 0.017, s * 0.017, this.seed, 3) * rough;
    // mogul fields come and go in zones
    const mogul = smoothstep(0.25, 0.75, noise1(s * 0.004 + 7.7, this.seed) * 0.5 + 0.5);
    h += 1.3 * fbm2(x * 0.085, s * 0.085, this.seed + 31, 2) * mogul * rough;

    // kicker jumps: ramp up then the ground falls away
    for (const j of this.jumps) {
      const lat = 1 - ((x - j.x) / j.w) ** 2;
      if (lat <= 0) continue;
      const t = (s - (j.s - 16)) / 16;
      if (t > 0 && t <= 1) h += 5.2 * t * t * lat;
      else if (s > j.s && s < j.s + 34) h -= 2.8 * (1 - (s - j.s) / 34) * lat; // carved landing
    }

    // cliff drops: full-width sharp step down
    for (const d of this.drops) {
      h -= d.h * smoothstep(0, 2.5, s - d.s);
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
    this._buildGatesAndFinish(group);
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
    const colSnow = new THREE.Color(0xf2f7fd);
    const colIce = new THREE.Color(0xa8cdea);
    const colRock = new THREE.Color(0x7d8590);
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
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5a4630 });
    const foliageMat = new THREE.MeshLambertMaterial({ color: 0x2e5d46 });
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
    group.add(trunks, foliage);

    const rockGeo = new THREE.IcosahedronGeometry(1.1, 1);
    rockGeo.translate(0, 0.55, 0);
    const rockMat = new THREE.MeshLambertMaterial({ color: 0x8b93a1, flatShading: true });
    const rocks = new THREE.InstancedMesh(rockGeo, rockMat, this._rockXf.length);
    this._rockXf.forEach((r, i) => {
      const y = this.heightAt(r.x, r.z) - 0.35;
      q.setFromAxisAngle(up, r.rot);
      sc.set(r.sc, r.sc * (0.7 + (i % 3) * 0.2), r.sc);
      m.compose(new THREE.Vector3(r.x, y, r.z), q, sc);
      rocks.setMatrixAt(i, m);
    });
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
    // 5 start gates on the apron
    const gateMat = new THREE.MeshLambertMaterial({ color: 0x38414d });
    const barMat = new THREE.MeshLambertMaterial({ color: 0xd6452f });
    this.gateLanes = [];
    const c0 = this.centerAt(4);
    for (let i = 0; i < 5; i++) {
      const gx = c0 + (i - 2) * 6.5;
      const gz = -4;
      const gy = this.heightAt(gx, gz);
      this.gateLanes.push({ x: gx, z: gz });
      const g = new THREE.Group();
      for (const side of [-1, 1]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.5, 0.18), gateMat);
        post.position.set(gx + side * 1.3, gy + 0.75, gz);
        g.add(post);
      }
      const bar = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.1, 0.1), barMat);
      bar.position.set(gx, gy + 1.15, gz);
      g.add(bar);
      group.add(g);
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
