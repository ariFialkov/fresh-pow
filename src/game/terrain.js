// Procedural ski hill. Every race gets a fresh mountain from a seed:
// a meandering valley run with rolls, mogul fields, kicker jumps, cliff drops,
// crevices, boulders and tree lines. heightAt(x, z) is a pure function of the
// seed so physics and rendering always agree.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mulberry32, noise1, fbm2, clamp, lerp, smoothstep } from './rng.js';
import { THEMES } from './themes.js';
import { createProp } from './props.js';

export const COURSE = {
  length: 1800, // meters from gate to finish line (s = -z)
  halfWidth: 55, // playable half width around the centerline
  meshHalfWidth: 110, // rendered half width (includes valley walls)
};

const GRADE = 0.5; // average downhill grade

// Hollow-trunk geometry, measured off the model itself (100 units long, bore
// axis running at y = 19.8). Both the bore and the shell taper end to end, so
// the collider is a tapered tube rather than a plain cylinder.
const TUBE = {
  axisY: 19.8, // bore axis height in model units, above the model origin
  rIn0: 9.8, rInK: 0.05, // bore radius at mid-length, and its taper per unit
  rOut0: 12.9, rOutK: 0.035, // outer shell, same
  flare: 1.8, flareA: 26, // both butts swell past this station
  lift: 1.0, // bury it so the axis rides this far above the snow line
};

/**
 * Bore and shell radius in metres at an along-axis offset from a tube's
 * anchor. `along` and the result are world units; the profile itself is
 * measured in model units, so it scales with the trunk.
 */
export function tubeRadii(tb, along) {
  const a = clamp(along, -tb.halfL, tb.halfL) / tb.sc;
  const fl = Math.max(0, (Math.abs(a) - TUBE.flareA) / (50 - TUBE.flareA));
  return {
    rIn: (TUBE.rIn0 + TUBE.rInK * a) * tb.sc,
    rOut: (TUBE.rOut0 + TUBE.rOutK * a + TUBE.flare * fl * fl) * tb.sc,
  };
}

// deterministic per-vertex jitter for craggy rock silhouettes
function hashJitter(a, b, c) {
  const n = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453;
  return (n - Math.floor(n)) - 0.5;
}

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
    // over the top, or thread the open notch straight through
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

    // natural half-pipe: a carved U-channel running down the fall line —
    // pump the transitions for big airs and trick points
    this.pipes = [];
    for (let tries = 0; tries < 24 && this.pipes.length === 0; tries++) {
      const ps = 380 + rng() * (COURSE.length - 800);
      const pe = ps + 80 + rng() * 35;
      const clear =
        !this.jumps.some((j) => j.s > ps - 35 && j.s < pe + 45) &&
        !this.drops.some((d) => d.s > ps - 35 && d.s < pe + 45) &&
        !this.bridges.some((b) => b.s > ps - 55 && b.s < pe + 60) &&
        !this.spines.some((sp) => ps < sp.s1 + 30 && pe > sp.s0 - 30);
      if (clear) {
        this.pipes.push({ s0: ps, s1: pe, off: (rng() - 0.5) * 12, w: 13 + rng() * 2, d: 6.8 + rng() * 1.2 });
      }
    }

    // cliffside ledges: a sheer-faced rock shelf along one side — a wall to
    // dodge from below, a drop-off trick line from above
    this.ledges = [];
    for (let tries = 0; tries < 14 && this.ledges.length < 2; tries++) {
      const ls = 300 + rng() * (COURSE.length - 700);
      const le = ls + 100 + rng() * 60;
      const clear =
        !this.jumps.some((j) => j.s > ls - 30 && j.s < le + 30) &&
        !this.bridges.some((b) => b.s > ls - 55 && b.s < le + 55) &&
        !this.pipes.some((p) => ls < p.s1 + 50 && le > p.s0 - 50) &&
        !this.ledges.some((o) => ls < o.s1 + 80 && le > o.s0 - 80);
      if (!clear) continue;
      this.ledges.push({
        s0: ls,
        s1: le,
        side: rng() < 0.5 ? -1 : 1,
        h: (3.5 + rng() * 2.5) * Math.max(0.6, theme.cliffMul),
        uFace: 0.34 + rng() * 0.2,
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

    // 2) glades: wide forested shoulders bulging deep into the run, with a
    //    narrow cleared line meandering through the bumps and trunks — thread
    //    it or swing around the whole wood
    const nearPipe = (ts) => this.pipes.some((p) => ts > p.s0 - 30 && ts < p.s1 + 30);
    // scatter guards: keep hazards out of the half-pipe channel and off the
    // sheer ledge faces
    const inPipe = (x, ts) =>
      this.pipes.some((p) => ts > p.s0 - 30 && ts < p.s1 + 30 && Math.abs(x - (this.centerAt(ts) + p.off)) < p.w * 2.1);
    const onLedgeFace = (x, ts) =>
      this.ledges.some((L) => {
        if (ts < L.s0 - 20 || ts > L.s1 + 20) return false;
        const us = ((x - this.centerAt(ts)) / COURSE.halfWidth) * L.side;
        return Math.abs(us - L.uFace) < 0.09;
      });
    this.glades = [];
    let gs = treeMul < 0.3 ? COURSE.length : 220 + rng() * 200; // treeless venues skip glades
    while (gs < COURSE.length - 260) {
      if (!nearBridge(gs) && !nearJump(gs) && !nearPipe(gs)) {
        this.glades.push({
          s0: gs,
          s1: gs + 120 + rng() * 140,
          side: rng() < 0.5 ? -1 : 1,
          depth: 0.46 + rng() * 0.22,
          pathPh: rng() * Math.PI * 2,
          pathFreq: 0.03 + rng() * 0.02,
        });
        gs += 340 + rng() * 300;
      } else {
        gs += 80;
      }
    }
    for (const g of this.glades) {
      for (let ts = g.s0; ts < g.s1; ts += 5.5) {
        // the cleared path snakes between the run edge and the glade's
        // inner fringe
        const pathU = 1 - g.depth * (0.5 + 0.38 * Math.sin((ts - g.s0) * g.pathFreq + g.pathPh));
        for (let r = 0; r < 5; r++) {
          if (rng() < 0.1) continue; // stray gaps beyond the main line
          const u = 1.0 - g.depth * (r / 4) - rng() * 0.05;
          if (Math.abs(u - pathU) < 0.055) continue; // keep the path clear
          const tx = this.centerAt(ts) + g.side * COURSE.halfWidth * u + (rng() - 0.5) * 2.5;
          const tsJ = ts + (rng() - 0.5) * 4;
          if (onLedgeFace(tx, tsJ)) continue;
          addTree(tx, tsJ, u < 1.0);
        }
      }
    }

    // 3) slalom hazards inside the run — enough to keep the open snow honest
    const loneTrees = Math.round(34 * clamp(treeMul, 0.1, 1.2));
    for (let i = 0; i < loneTrees; i++) {
      const ts = 150 + rng() * (COURSE.length - 280);
      const x = this.centerAt(ts) + (rng() - 0.5) * COURSE.halfWidth * 1.1;
      if (nearJump(ts) || nearBridge(ts) || inPipe(x, ts) || onLedgeFace(x, ts)) continue;
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
        const rx = cxr + (rng() - 0.5) * 11;
        const rs = cs + (rng() - 0.5) * 15;
        if (inPipe(rx, rs) || onLedgeFace(rx, rs)) continue;
        addRock(rx, rs, true);
      }
    }
    const loneRocks = clamp(Math.round(26 * theme.rockMul), 8, 55);
    for (let i = 0; i < loneRocks; i++) {
      const ts = 160 + rng() * (COURSE.length - 320);
      const x = this.centerAt(ts) + (rng() - 0.5) * COURSE.halfWidth * 1.4;
      if (nearJump(ts) || nearBridge(ts) || inPipe(x, ts) || onLedgeFace(x, ts)) continue;
      addRock(x, ts, Math.abs(x - this.centerAt(ts)) < COURSE.halfWidth);
    }
    // 5) downed timber: small logs to slalom around, and massive hollow
    // logs laid down the fall line — ride straight through the bore, but
    // the flanks hit like any trunk
    this.logs = [];
    const nLogs = 7 + Math.floor(rng() * 5);
    for (let i = 0; i < nLogs; i++) {
      const ts = 180 + rng() * (COURSE.length - 360);
      const x = this.centerAt(ts) + (rng() - 0.5) * COURSE.halfWidth * 1.15;
      if (nearJump(ts) || nearBridge(ts) || inPipe(x, ts) || onLedgeFace(x, ts)) continue;
      const rot = rng() * Math.PI * 2;
      const sc = 0.038 + rng() * 0.018; // 3.8-5.6 m trunks
      this.logs.push({ x, z: -ts, rot, sc, kind: 'log_small' });
      for (const a of [-30, 30]) {
        // two collision pucks along the trunk axis (model x, rotated by rot)
        this.obstacles.push({
          x: x + Math.cos(rot) * a * sc,
          z: -ts - Math.sin(rot) * a * sc,
          r: 22 * sc,
          kind: 'log',
        });
      }
    }
    for (let i = 0, want = 1 + (rng() < 0.55 ? 1 : 0); i < want; i++) {
      const ts = 280 + rng() * (COURSE.length - 620);
      const x = this.centerAt(ts) + (rng() - 0.5) * COURSE.halfWidth * 0.8;
      if (nearJump(ts) || nearBridge(ts) || inPipe(x, ts) || onLedgeFace(x, ts)) continue;
      const rot = (rng() - 0.5) * 0.4; // bore roughly down the fall line
      const sc = 0.48 + rng() * 0.07; // a colossal fallen giant — ride the bore
      this.logs.push({ x, z: -ts, rot, sc, kind: 'log_hollow' });
      // the shell itself is the collider (player tube clamp) — just clear
      // any earlier scatter out of the tube's footprint
      const inTube = (px, ps) => {
        const dsl = ps - ts;
        const dxl = px - x;
        const along = dsl * Math.cos(rot) + dxl * Math.sin(rot);
        const lat = dxl * Math.cos(rot) - dsl * Math.sin(rot);
        return Math.abs(along) < 50 * sc + 3 && Math.abs(lat) < 15 * sc + 2;
      };
      this.obstacles = this.obstacles.filter((o) => o.kind === 'log' || !inTube(o.x, -o.z));
      for (const list of [treeXf, rockXf]) {
        for (let j = list.length - 1; j >= 0; j--) {
          if (inTube(list[j].x, -list[j].z)) list.splice(j, 1);
        }
      }
    }

    // 6) grind rails: a horizontal log poking out of a snow mound right at a
    // cliff lip — brake sideways onto it, carry momentum along the rail, and
    // trick off the far end where the ground has already fallen away
    this.grindLogs = [];
    for (const d of this.drops) {
      if (this.grindLogs.length >= 2) break;
      if (d.h < 3.5 || d.h > 10 || d.s < 320 || d.s > COURSE.length - 320) continue;
      if (nearBridge(d.s) || nearPipe(d.s)) continue;
      const gx = this.centerAt(d.s) + (rng() < 0.5 ? -1 : 1) * (7 + rng() * 13);
      if (onLedgeFace(gx, d.s)) continue;
      const yaw = (rng() - 0.5) * 0.14; // all but straight down the fall line
      const sc = 0.05 + rng() * 0.012; // a normal-size trunk, just placed level
      const len = 100 * sc;
      const s0 = d.s - 2.5; // entry mound at the lip, far end out over the drop
      const topY = this.heightAt(gx, -s0) + 1.15; // above the mound this log adds
      this.grindLogs.push({ x: gx, s0, ax: Math.sin(yaw), az: Math.cos(yaw), sc, len, topY, bumpH: 0.9 });
    }

    // Seat the hollow trunks now that the surface is final: pitch each one
    // with the run and sink it until the bore axis sits just above the snow,
    // so the mouth opens at its widest right at the surface. Solving it once
    // here means the shell the player collides with is the shell they see.
    this.hollowTubes = this.logs
      .filter((l) => l.kind === 'log_hollow')
      .map((l) => {
        const ax = Math.sin(l.rot);
        const az = Math.cos(l.rot);
        const halfL = 50 * l.sc;
        const hUp = this.heightAt(l.x + ax * halfL, l.z + az * halfL);
        const hDown = this.heightAt(l.x - ax * halfL, l.z - az * halfL);
        l.pitch = Math.atan2(hUp - hDown, 2 * halfL);
        l.axY0 = (hUp + hDown) / 2 + TUBE.lift;
        l.posY = l.axY0 - TUBE.axisY * l.sc * Math.cos(l.pitch);
        return {
          x: l.x,
          s0: -l.z,
          ax,
          az,
          sc: l.sc,
          halfL,
          axY0: l.axY0,
          axSlope: (hUp - hDown) / (2 * halfL),
        };
      });

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
    if (au > 0.85) {
      // saturating rise: steep flanks near the run easing into broad high
      // ridges — mountain shoulders, not a slot canyon
      const w = au - 0.85;
      h += 130 * (1 - Math.exp(-w * w * 0.5));
      // large-scale ridge noise gives the walls real crestlines and cols
      h += fbm2(x * 0.006, su * 0.006, this.seed + 91, 3) * 42 * smoothstep(0.95, 1.9, au);
    }

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

    // natural half-pipe, superpipe scale: dished floor, circular transition
    // into a near-vertical upper wall, crisp lip, flat deck, taper to grade
    for (const p of this.pipes) {
      if (s > p.s0 - 40 && s < p.s1 + 40) {
        const env = smoothstep(p.s0 - 35, p.s0 + 14, s) * (1 - smoothstep(p.s1 - 14, p.s1 + 35, s));
        const aq = Math.abs((x - (c + p.off)) / p.w);
        let prof;
        if (aq <= 0.4) prof = -0.6;
        else if (aq < 1) {
          const k = (aq - 0.4) / 0.6;
          prof = -0.6 + k * k; // steepens toward ~65 deg at the lip
        } else if (aq <= 1.35) prof = 0.4; // deck
        else prof = 0.4 * (1 - smoothstep(1.35, 2, aq));
        h += p.d * env * prof;
      }
    }

    // cliffside ledges: one side steps up behind a near-vertical rock face
    for (const L of this.ledges) {
      if (s > L.s0 - 40 && s < L.s1 + 40) {
        const env = smoothstep(L.s0 - 30, L.s0 + 15, s) * (1 - smoothstep(L.s1 - 15, L.s1 + 30, s));
        const face = L.uFace + noise1(s * 0.02, this.seed + 7) * 0.05;
        h += L.h * env * smoothstep(face, face + 0.045, u * L.side);
      }
    }

    // entry mounds for the grind rails: a little natural ramp of drifted
    // snow the log's uphill end sticks out of
    for (const g of this.grindLogs) {
      const dsb = s - (g.s0 + 1);
      const dxb = x - g.x;
      const q2 = (dxb * dxb + dsb * dsb) / 10.6;
      if (q2 < 4) h += g.bumpH * Math.exp(-q2);
    }

    // glades ride over rougher, bumpier snow than the groomed corridor
    for (const g of this.glades) {
      if (s > g.s0 - 10 && s < g.s1 + 10) {
        const us = u * g.side;
        const band = smoothstep(1 - g.depth - 0.06, 1 - g.depth + 0.04, us) * (1 - smoothstep(1.0, 1.1, us));
        if (band > 0) {
          const env = smoothstep(g.s0 - 8, g.s0 + 14, s) * (1 - smoothstep(g.s1 - 14, g.s1 + 8, s));
          h += 1.15 * band * env * fbm2(x * 0.1, su * 0.1, this.seed + 53, 2);
        }
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

  /**
   * Half-pipe lookup for the physics: q is the signed cross-pipe coordinate
   * (|q|=1 at the lip), or null when (x, s) is not inside an active pipe.
   */
  pipeAt(x, s) {
    for (const p of this.pipes) {
      if (s < p.s0 - 35 || s > p.s1 + 35) continue;
      const env = smoothstep(p.s0 - 35, p.s0 + 14, s) * (1 - smoothstep(p.s1 - 14, p.s1 + 35, s));
      if (env < 0.55) continue;
      return { q: (x - (this.centerAt(s) + p.off)) / p.w, env, p };
    }
    return null;
  }

  /**
   * Grind rail lookup: the point (x, s) projected onto a rail within reach,
   * or null. Returns the snapped position on the rail axis, the rail's top
   * height and its heading.
   */
  grindAt(x, s) {
    for (const g of this.grindLogs) {
      const ds = s - g.s0;
      const dx = x - g.x;
      const along = ds * g.az + dx * g.ax;
      const lat = dx * g.az - ds * g.ax;
      if (along < 0 || along > g.len || Math.abs(lat) > 0.8) continue;
      return {
        along,
        lat,
        len: g.len,
        topY: g.topY,
        gx: g.x,
        gs0: g.s0,
        ax: g.ax,
        az: g.az,
        px: g.x + g.ax * along,
        pz: -(g.s0 + g.az * along),
        yaw: Math.atan2(g.ax, g.az),
      };
    }
    return null;
  }

  /** True within the short approach patch just uphill of a grind rail. */
  nearGrindEntry(x, s) {
    for (const g of this.grindLogs) {
      const ds = s - g.s0;
      const dx = x - g.x;
      const along = ds * g.az + dx * g.ax;
      if (along < -9 || along > 1.5) continue;
      if (Math.abs(dx * g.az - ds * g.ax) < 2.5) return true;
    }
    return false;
  }

  /**
   * Cliffside ledge faces that act as solid walls at s: world x of each face
   * and which side its shelf rises on (+1 / -1). Empty where the ledge has
   * tapered low enough to ride over.
   */
  ledgeWallsAt(s) {
    const out = [];
    for (const L of this.ledges) {
      if (s < L.s0 - 30 || s > L.s1 + 30) continue;
      const env = smoothstep(L.s0 - 30, L.s0 + 15, s) * (1 - smoothstep(L.s1 - 15, L.s1 + 30, s));
      if (env * L.h < 1.2) continue;
      const face = L.uFace + noise1(s * 0.02, this.seed + 7) * 0.05;
      out.push({ x: this.centerAt(s) + L.side * face * COURSE.halfWidth, side: L.side });
    }
    return out;
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
    const FINE = 1.7, COARSE = 6.0, CORRIDOR = 74, OUTER = 235, OSTEP = 13;
    const xs = [];
    for (let x = -OUTER; x < -COURSE.meshHalfWidth; x += OSTEP) xs.push(x);
    for (let x = -COURSE.meshHalfWidth; x < -CORRIDOR; x += COARSE) xs.push(x);
    for (let x = -CORRIDOR; x <= CORRIDOR; x += FINE) xs.push(x);
    for (let x = CORRIDOR + COARSE; x <= COURSE.meshHalfWidth; x += COARSE) xs.push(x);
    for (let x = COURSE.meshHalfWidth + OSTEP; x <= OUTER; x += OSTEP) xs.push(x);

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
    const nTreesAll = this._treeXf.length;
    const m = new THREE.Matrix4();
    const m2 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    const sc = new THREE.Vector3();

    // trees: trunk + two foliage cones merged per-instance via two instanced meshes
    const trunkGeo = new THREE.CylinderGeometry(0.16, 0.26, 1.5, 7);
    trunkGeo.translate(0, 0.75, 0);
    // three-tier spruce with snow-dusted shoulders on every tier
    const tiers = [
      [1.75, 2.6, 1.9],
      [1.3, 2.3, 3.3],
      [0.85, 2.1, 4.6],
    ];
    const foliageGeo = mergeGeometries(
      tiers.map(([r, h, y]) => {
        const g = new THREE.ConeGeometry(r, h, 9);
        g.translate(0, y, 0);
        return g;
      })
    );
    const snowGeo = mergeGeometries(
      [
        [1.15, 0.55, 3.0],
        [0.78, 0.5, 4.35],
        [0.42, 0.9, 5.35],
      ].map(([r, h, y]) => {
        const g = new THREE.ConeGeometry(r, h, 9);
        g.translate(0, y, 0);
        return g;
      })
    );
    const trunkMat = new THREE.MeshLambertMaterial({ color: this.theme.trunk });
    const foliageMat = new THREE.MeshLambertMaterial({ color: this.theme.foliage });
    const snowCapMat = new THREE.MeshLambertMaterial({ color: 0xf4f8fd });
    const nTrees = this._treeXf.length;
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, nTrees);
    const foliage = new THREE.InstancedMesh(foliageGeo, foliageMat, nTrees);
    const treeSnow = new THREE.InstancedMesh(snowGeo, snowCapMat, nTrees);
    this._treeXf.forEach((t, i) => {
      const y = this.heightAt(t.x, t.z) - 0.15;
      q.setFromAxisAngle(up, t.rot);
      sc.set(t.sc, t.sc, t.sc);
      m.compose(new THREE.Vector3(t.x, y, t.z), q, sc);
      trunks.setMatrixAt(i, m);
      foliage.setMatrixAt(i, m);
      treeSnow.setMatrixAt(i, m);
    });
    trunks.castShadow = foliage.castShadow = true;
    group.add(trunks, foliage, treeSnow);
    this._buildRocksAndFlags(group, m, q, up, sc);
  }

  _buildRocksAndFlags(group, m, q, up, sc) {
    const snowCapMat = new THREE.MeshLambertMaterial({ color: 0xf4f8fd });
    // craggy boulders: jittered icosahedron + a settled snow cap on top
    const rockGeo = new THREE.IcosahedronGeometry(1.1, 1);
    {
      const pos = rockGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const jx = hashJitter(pos.getX(i), pos.getY(i), pos.getZ(i));
        pos.setXYZ(
          i,
          pos.getX(i) * (1 + jx * 0.22),
          pos.getY(i) * (1 + hashJitter(pos.getY(i), pos.getZ(i), pos.getX(i)) * 0.18),
          pos.getZ(i) * (1 + hashJitter(pos.getZ(i), pos.getX(i), pos.getY(i)) * 0.22)
        );
      }
      rockGeo.computeVertexNormals();
    }
    rockGeo.translate(0, 0.55, 0);
    const rockSnowGeo = new THREE.IcosahedronGeometry(0.92, 1);
    rockSnowGeo.scale(1, 0.32, 1);
    rockSnowGeo.translate(0, 1.18, 0);
    const rockMat = new THREE.MeshLambertMaterial({ color: this.theme.rock, flatShading: true });
    const rocks = new THREE.InstancedMesh(rockGeo, rockMat, this._rockXf.length);
    const rockSnow = new THREE.InstancedMesh(rockSnowGeo, snowCapMat, this._rockXf.length);
    this._rockXf.forEach((r, i) => {
      const y = this.heightAt(r.x, r.z) - 0.35;
      q.setFromAxisAngle(up, r.rot);
      sc.set(r.sc, r.sc * (0.7 + (i % 3) * 0.2), r.sc);
      m.compose(new THREE.Vector3(r.x, y, r.z), q, sc);
      rocks.setMatrixAt(i, m);
      rockSnow.setMatrixAt(i, m);
    });
    rocks.castShadow = true;
    group.add(rocks, rockSnow);

    // downed timber props, sunk slightly and seated flush with the slope
    const qa = new THREE.Quaternion();
    const qy = new THREE.Quaternion();
    for (const log of this.logs) {
      const inst = createProp(log.kind, this.theme, log.sc);
      if (log.kind === 'log_hollow') {
        // pitch and burial were solved with the collider (see the log build)
        // so the shell the player hits is exactly the shell they see
        inst.rotation.order = 'YXZ';
        inst.rotation.set(-log.pitch, log.rot, 0);
        inst.position.set(log.x, log.posY, log.z);
      } else {
        inst.position.set(log.x, this.heightAt(log.x, log.z) - 0.28, log.z);
        const n = this.normalAt(log.x, log.z);
        qa.setFromUnitVectors(up, n);
        qy.setFromAxisAngle(up, log.rot);
        inst.quaternion.copy(qa).multiply(qy);
      }
      inst.traverse((o) => {
        if (o.isMesh) o.castShadow = true;
      });
      group.add(inst);
    }

    // grind rails: horizontal in world space, uphill end buried in the
    // entry mound, far end hanging out over the drop
    for (const g of this.grindLogs) {
      const inst = createProp('log_small', this.theme, g.sc);
      const mx = g.x + g.ax * (g.len / 2 - 0.5);
      const mz = -(g.s0 + g.az * (g.len / 2 - 0.5));
      inst.position.set(mx, g.topY - 20.6 * g.sc, mz);
      inst.rotation.y = Math.atan2(g.az, g.ax);
      inst.traverse((o) => {
        if (o.isMesh) o.castShadow = true;
      });
      group.add(inst);
    }

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

    // ---- finish venue: the uploaded arch, podium and grandstands,
    // tinted to this event's palette ----
    const s = COURSE.length;
    const cx = this.centerAt(s);

    const arch = createProp('finish_line', this.theme);
    arch.scale.set(0.34, 0.22, 0.22);
    const archY = Math.min(this.heightAt(cx - 17, -s), this.heightAt(cx + 17, -s));
    arch.position.set(cx, archY - 0.25, -s);
    group.add(arch);

    // ---- LED screens on the arch, facing the riders: a big banner display
    // plus vertical neon FINISH signs on each pylon. The materials are
    // collected on this.finishSigns so the race scene can flash them. ----
    this.finishSigns = [];
    const ledTex = (w, h, draw) => {
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d');
      draw(ctx, w, h);
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    };
    const accA = '#' + new THREE.Color(this.theme.eventA ?? 0xd6452f).getHexString();
    const accB = '#' + new THREE.Color(this.theme.eventB ?? 0xf5d76e).getHexString();
    const bannerMat = new THREE.MeshBasicMaterial({
      map: ledTex(1024, 160, (ctx, w, h) => {
        ctx.fillStyle = '#0a0e16';
        ctx.fillRect(0, 0, w, h);
        // checker rails top and bottom, like timing eyes
        for (let x = 0; x < w; x += 32) {
          for (const y of [0, h - 20]) {
            ctx.fillStyle = (x / 32) % 2 ? '#e8edf4' : '#12161e';
            ctx.fillRect(x, y, 32, 20);
          }
        }
        ctx.font = 'bold 96px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = accB;
        ctx.fillText('FINISH', w / 2, h / 2 + 4);
      }),
    });
    const bannerScreen = new THREE.Mesh(new THREE.PlaneGeometry(17.5, 2.9), bannerMat);
    bannerScreen.position.set(cx, archY + 7.35, -s + 2.0);
    group.add(bannerScreen);
    this.finishSigns.push(bannerMat);
    for (const side of [-1, 1]) {
      const signMat = new THREE.MeshBasicMaterial({
        map: ledTex(128, 640, (ctx, w, h) => {
          ctx.fillStyle = '#0a0e16';
          ctx.fillRect(0, 0, w, h);
          ctx.strokeStyle = accA;
          ctx.lineWidth = 10;
          ctx.strokeRect(8, 8, w - 16, h - 16);
          ctx.font = 'bold 78px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = accB;
          const word = 'FINISH';
          for (let i = 0; i < word.length; i++) {
            ctx.fillText(word[i], w / 2, 70 + i * ((h - 130) / (word.length - 1)));
          }
        }),
      });
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 8.2), signMat);
      sign.position.set(cx + side * 13.9, archY + 5.4, -s + 1.6);
      group.add(sign);
      this.finishSigns.push(signMat);
    }

    // big structures can't sit level on a 27-degree slope — like real venue
    // builds they stand on scaffold foundations: plant each prop level at
    // its uphill-corner height with a dark plinth filling down to the snow
    const plinthMat = new THREE.MeshLambertMaterial({ color: 0x232833 });
    const founded = (prop, px, pz, halfW, halfD) => {
      let top = -Infinity, bot = Infinity;
      for (const [dx, dz] of [[-halfW, -halfD], [halfW, -halfD], [-halfW, halfD], [halfW, halfD]]) {
        const h = this.heightAt(px + dx, pz + dz);
        if (h > top) top = h;
        if (h < bot) bot = h;
      }
      prop.position.set(px, top - 0.15, pz);
      if (top - bot > 0.8) {
        const depth = top - bot + 1.2;
        const plinth = new THREE.Mesh(new THREE.BoxGeometry(halfW * 1.9, depth, halfD * 1.9), plinthMat);
        plinth.position.set(px, top - 0.15 - depth / 2 + 0.1, pz);
        group.add(plinth);
      }
      group.add(prop);
    };

    const podium = createProp('podium', this.theme);
    podium.scale.setScalar(0.06);
    podium.rotation.y = 0.6; // angled toward the run-out
    founded(podium, cx - 20, -s - 14, 3.2, 2.2);

    for (const side of [-1, 1]) {
      const stand = createProp('bleachers', this.theme);
      stand.scale.set(0.24, 0.2, 0.13);
      stand.rotation.y = -side * (Math.PI / 2); // stairs face the corridor
      founded(stand, cx + side * 27, -s + 20, 6.4, 12.2);
    }

    // spectator pens beside the run-out, and the lift base station at the
    // bottom — the resort the finishers roll into
    for (const [bx, bz, k] of [[cx - 32, -s - 4, 0.13], [cx + 30, -s - 10, 0.15]]) {
      const pen = createProp('barrier', this.theme);
      pen.scale.setScalar(k);
      founded(pen, bx, bz, 50 * k * 0.9, 50 * k * 0.9);
    }
    const lift = createProp('ski_lift', this.theme);
    lift.scale.setScalar(0.16);
    lift.rotation.y = 0.35; // angled toward the corral
    founded(lift, cx + 16, -s - 40, 8, 8);
  }
}
