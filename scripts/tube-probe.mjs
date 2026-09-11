// Hollow-log collider check. Rides the bore end to end at several entry
// offsets, then rams the flank, and compares where the physics stopped the
// rider against where the shell mesh actually is (raycast at rider height).
import { chromium } from 'playwright';
// dev server, not preview: the probe imports the game's own modules so it can
// check the collider's numbers against the mesh it is supposed to match
import { createServer } from 'vite';
const server = await createServer({ server: { port: 4217, strictPort: true } });
await server.listen();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

for (let i = 0; i < 12; i++) {
  await page.goto('http://localhost:4217/');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  if (await page.evaluate(() => window.__fp.race.terrain.hollowTubes.length > 0)) break;
  console.log('reroll: no hollow log');
}

// how wide is the mouth, and does the physics agree with the mesh?
const geo = await page.evaluate(async () => {
  const THREE = await import('/node_modules/three/build/three.module.js');
  const { tubeRadii } = await import('/src/game/terrain.js');
  const r = window.__fp.race;
  const tb = r.terrain.hollowTubes[0];
  // find the rendered trunk in the scene and raycast it at rider height
  const meshes = [];
  r.scene.traverse((o) => {
    if (!o.isMesh || !o.geometry?.boundingSphere) return;
    const p = new THREE.Vector3();
    o.getWorldPosition(p);
    if (Math.hypot(p.x - tb.x, -p.z - tb.s0) < 60 && o.geometry.boundingSphere.radius * Math.max(o.scale.x, 1) > 3) meshes.push(o);
  });
  for (const m of meshes) m.material = Object.assign(m.material.clone(), { side: THREE.DoubleSide });
  const rc = new THREE.Raycaster();
  const stations = [];
  for (const f of [-0.85, -0.4, 0, 0.4, 0.85]) {
    const along = tb.halfL * f;
    const px = tb.x + tb.ax * along;
    const ps = tb.s0 + tb.az * along;
    const gy = r.terrain.heightAt(px, -ps) + 0.6; // rider chest height
    // sweep laterally for the first wood on each side
    const wood = [];
    for (const sgn of [-1, 1]) {
      rc.set(new THREE.Vector3(px, gy, -ps), new THREE.Vector3(tb.az * sgn, 0, tb.ax * sgn));
      const h = rc.intersectObjects(meshes, true)[0];
      wood.push(h ? +h.distance.toFixed(2) : null);
    }
    const { rIn, rOut } = tubeRadii(tb, along);
    const v = gy - (tb.axY0 + along * tb.axSlope);
    stations.push({
      along: +along.toFixed(1),
      meshWoodAt: wood, // metres to the first wood, left / right of the axis
      colliderBore: +(Math.abs(v) < rIn ? Math.sqrt(rIn * rIn - v * v) : 0).toFixed(2),
      rIn: +rIn.toFixed(2), rOut: +rOut.toFixed(2), riderAboveAxis: +v.toFixed(2),
    });
  }
  return { tube: { sc: +tb.sc.toFixed(2), halfL: +tb.halfL.toFixed(1) }, stations };
});
console.log('geometry:', JSON.stringify(geo, null, 1));

// ride the bore at a few lateral offsets and see who gets through
const runs = await page.evaluate(async () => {
  const r = window.__fp.race;
  const t = r.terrain;
  const tb = t.hollowTubes[0];
  const P = r.player;
  const yaw = Math.atan2(-tb.ax, -tb.az); // downhill, along the bore
  const out = [];
  const orig = r.update.bind(r);
  for (const off of [0, 1.5, 3, 4.5]) {
    const startA = tb.halfL + 14;
    const px = tb.x + tb.ax * startA + tb.az * off;
    const ps = tb.s0 + tb.az * startA - tb.ax * off;
    P.pos.set(px, t.heightAt(px, -ps), -ps);
    P.speed = 16;
    P.airborne = false;
    P.stumbleT = 0;
    P.knockT = 0;
    P.yaw = P.travelYaw = yaw;
    const rec = { off, stumbles: 0, minSpeed: 99, exited: false, maxLat: 0 };
    r.update = (dt) => {
      const pre = P.stumbleT;
      orig(dt);
      if (P.stumbleT > pre + 0.1) rec.stumbles++;
      const ds = -P.pos.z - tb.s0;
      const dx = P.pos.x - tb.x;
      const along = ds * tb.az + dx * tb.ax;
      const lat = dx * tb.az - ds * tb.ax;
      if (Math.abs(along) < tb.halfL) {
        rec.minSpeed = Math.min(rec.minSpeed, P.speed);
        rec.maxLat = Math.max(rec.maxLat, Math.abs(lat));
      }
      if (along < -tb.halfL - 3) rec.exited = true;
      P.yaw = P.travelYaw = yaw; // hold the line straight down the bore
    };
    const t0 = performance.now();
    while (performance.now() - t0 < 2600 && !rec.exited) await new Promise((k) => requestAnimationFrame(k));
    rec.minSpeed = +rec.minSpeed.toFixed(1);
    rec.maxLat = +rec.maxLat.toFixed(2);
    out.push(rec);
  }
  r.update = orig;
  return out;
});
console.log('bore runs:', JSON.stringify(runs));

// now ram the flank broadside — that must stop you outside the wood
const flank = await page.evaluate(async () => {
  const THREE = await import('/node_modules/three/build/three.module.js');
  const r = window.__fp.race;
  const t = r.terrain;
  const tb = t.hollowTubes[0];
  const P = r.player;
  const yaw = Math.atan2(-tb.az, tb.ax); // straight at the side of the trunk
  const px = tb.x + tb.az * 22;
  const ps = tb.s0 + tb.ax * -22 + 4;
  P.pos.set(px, t.heightAt(px, -ps), -ps);
  P.speed = 15;
  P.airborne = false;
  P.stumbleT = 0;
  P.yaw = P.travelYaw = yaw;
  const rec = { minLat: 99, stumbled: false, insideWood: false };
  const orig = r.update.bind(r);
  r.update = (dt) => {
    orig(dt);
    const ds = -P.pos.z - tb.s0;
    const dx = P.pos.x - tb.x;
    const lat = Math.abs(dx * tb.az - ds * tb.ax);
    const along = ds * tb.az + dx * tb.ax;
    if (Math.abs(along) < tb.halfL) rec.minLat = Math.min(rec.minLat, lat);
    if (P.stumbleT > 0) rec.stumbled = true;
  };
  const t0 = performance.now();
  while (performance.now() - t0 < 2600) await new Promise((k) => requestAnimationFrame(k));
  r.update = orig;
  rec.minLat = +rec.minLat.toFixed(2);
  return rec;
});
console.log('flank ram:', JSON.stringify(flank));
await browser.close(); await server.close(); process.exit(0);
