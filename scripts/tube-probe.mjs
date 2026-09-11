// Hollow-log collider check. Raycasts the trunk the game actually drew and
// compares, station by station, where the wood really is against where the
// collider stops the rider — then walks paths through the bore and into the
// flank to confirm the clamp lets the right ones through.
import { chromium } from 'playwright';
// dev server, not preview: the probe imports the game's own modules so it can
// check the collider's numbers against the mesh it is supposed to match
import { createServer } from 'vite';
const server = await createServer({ server: { port: 4277, strictPort: true } });
await server.listen();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

for (let i = 0; i < 14; i++) {
  await page.goto('http://localhost:4277/');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  if (await page.evaluate(() => window.__fp.race.terrain.hollowTubes.length > 0)) break;
  console.log('reroll: no hollow log');
}

const out = await page.evaluate(async () => {
  const THREE = await import('/node_modules/three/build/three.module.js');
  const { tubeRadii } = await import('/src/game/terrain.js');
  const r = window.__fp.race;
  const t = r.terrain;
  const tb = t.hollowTubes[0];
  const P = r.player;

  // the drawn trunk, by name — no guessing which mesh is which
  const trunk = r.scene.getObjectByName('hollow_log');
  const meshes = [];
  trunk.traverse((o) => {
    if (!o.isMesh) return;
    o.material = Object.assign(o.material.clone(), { side: THREE.DoubleSide });
    meshes.push(o);
  });
  const rc = new THREE.Raycaster();
  // trunk frame: +along is the uphill mouth, lat square across the bore
  const at = (along, lat) => ({
    x: tb.x + tb.ax * along + tb.az * lat,
    s: tb.s0 - tb.az * along + tb.ax * lat,
  });
  const LAT = (sgn) => new THREE.Vector3(tb.az * sgn, 0, -tb.ax * sgn);

  // 1) mesh vs. collider: free half-width of the bore at rider height
  const stations = [];
  for (const f of [-0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9]) {
    const along = tb.halfL * f;
    const c = at(along, 0);
    const gy = t.heightAt(c.x, -c.s) + 0.6; // rider chest
    const mesh = [];
    for (const sgn of [-1, 1]) {
      rc.set(new THREE.Vector3(c.x, gy, -c.s), LAT(sgn));
      const h = rc.intersectObjects(meshes, true)[0];
      mesh.push(h ? +h.distance.toFixed(2) : null);
    }
    const { rIn, rOut } = tubeRadii(tb, along);
    const v = gy - (tb.axY0 + along * tb.axSlope);
    const bore = Math.abs(v) < rIn ? Math.sqrt(rIn * rIn - v * v) : 0;
    stations.push({
      along: +along.toFixed(1),
      meshWood: mesh, // metres from the axis to real wood, left / right
      colliderStop: +bore.toFixed(2), // where the clamp holds the rider
      err: mesh.map((m) => (m == null ? null : +(bore - m).toFixed(2))), // + = clamp sits inside wood
    });
  }

  // 2) ride the bore: step a straight line through at several offsets and see
  // whether the clamp moves the rider off it
  const dir = new THREE.Vector3(-tb.ax, 0, -tb.az); // downhill, through the bore
  const rides = [];
  for (const off of [0, 1, 2, 3, 4]) {
    let maxPush = 0;
    let blocked = false;
    let worstLat = 0;
    // walk the line the way the game does: each step starts from wherever the
    // clamp actually left the rider, not back on the ideal line
    let cur = at(tb.halfL + 2, off);
    for (let a = tb.halfL + 1.5; a >= -tb.halfL - 2; a -= 0.5) {
      const ideal = at(a, off);
      P.pos.set(cur.x, t.heightAt(cur.x, -cur.s), -cur.s);
      P.airborne = false;
      P.stumbleT = 0;
      P.speed = 15;
      const res = P._tubeClamp(ideal.x, -ideal.s, dir);
      maxPush = Math.max(maxPush, Math.hypot(res.nx - ideal.x, res.nz + ideal.s));
      if (P.stumbleT > 0) blocked = true;
      cur = { x: res.nx, s: -res.nz };
      const lat = (cur.x - tb.x) * tb.az + (cur.s - tb.s0) * tb.ax;
      if (Math.abs(a) < tb.halfL) worstLat = Math.max(worstLat, Math.abs(lat));
    }
    rides.push({ off, maxPush: +maxPush.toFixed(2), maxLat: +worstLat.toFixed(2), stopped: blocked });
  }

  // 3) hit the flank broadside: the clamp must hold the rider off the wood
  const flanks = [];
  for (const along of [-tb.halfL * 0.5, 0, tb.halfL * 0.5]) {
    let held = null;
    for (let lat = 30; lat > 0; lat -= 0.25) {
      const prev = at(along, lat + 0.25);
      const next = at(along, lat);
      P.pos.set(prev.x, t.heightAt(prev.x, -prev.s), -prev.s);
      P.airborne = false;
      P.stumbleT = 0;
      P.speed = 15;
      const res = P._tubeClamp(next.x, -next.s, LAT(-1));
      const ds = -res.nz - tb.s0;
      const dx = res.nx - tb.x;
      const gotLat = Math.abs(dx * tb.az + ds * tb.ax);
      if (gotLat > lat + 0.05) { held = +gotLat.toFixed(2); break; } // pushed back out
    }
    // where is the real wood at that height?
    const c = at(along, 0);
    const gy = t.heightAt(c.x, -c.s) + 0.6;
    const far = at(along, 40);
    rc.set(new THREE.Vector3(far.x, gy, -far.s), LAT(-1));
    const h = rc.intersectObjects(meshes, true)[0];
    flanks.push({ along: +along.toFixed(1), heldAtLat: held, meshOuterAtLat: h ? +(40 - h.distance).toFixed(2) : null });
  }
  // 4) the bore floor: snow along the axis must never drop below the line
  // the trunk was seated on (min dev >= 0), and never bulge far above it
  const floorDev = [];
  for (let a = -tb.halfL; a <= tb.halfL; a += tb.halfL / 8) {
    const c = at(a, 0);
    const line = tb.axY0 - 1.0 + a * tb.axSlope;
    floorDev.push(+(t.heightAt(c.x, -c.s) - line).toFixed(2));
  }
  return {
    tube: { sc: +tb.sc.toFixed(2), halfL: +tb.halfL.toFixed(1) },
    stations, rides, flanks,
    floor: { minDev: Math.min(...floorDev), maxDev: Math.max(...floorDev), devs: floorDev },
  };
});
console.log(JSON.stringify(out, null, 1));
await browser.close(); await server.close(); process.exit(0);
