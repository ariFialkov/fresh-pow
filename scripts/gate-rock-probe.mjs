// Boost gate look + rock collider check: a camera shot of the first gate's
// chevrons, and the boulder outline measured against the rendered mesh —
// a point just outside the crag's silhouette must be clear, a point on it
// must hit, all the way round.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4313, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4313/?event=utah&format=race');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });

// the gate: from behind and above, the way a rider sees it coming
await page.evaluate(() => {
  const r = window.__fp.race;
  const t = r.terrain;
  const g = t.boostGates[0];
  r.update = (dt) => {
    r.time += dt;
    t.pulseGates(r.time);
    r.camera.position.set(g.x + 1.5, t.heightAt(g.x, -(g.s - 9)) + 4.2, -(g.s - 9));
    r.camera.lookAt(g.x, t.heightAt(g.x, -g.s) + 0.3, -g.s);
  };
});
await page.waitForTimeout(400);
await page.screenshot({ path: 'scratch-gate-a.png' });
await page.waitForTimeout(230);
await page.screenshot({ path: 'scratch-gate-b.png' });
// a rider threads it: the whole gate flares
await page.evaluate(() => { const r = window.__fp.race; r.terrain.flashGate(r.terrain.boostGates[0]); });
await page.waitForTimeout(60);
await page.screenshot({ path: 'scratch-gate-flash.png' });
console.log('gate shots', await page.evaluate(() => {
  const t = window.__fp.race.terrain;
  const g = t.boostGates[0];
  // how far the ribbon vertices sit off the snow, and the worst bump under the old flat plane
  const n = t.normalAt(g.x, -g.s);
  let bump = 0;
  for (let x = -1.8; x <= 1.8; x += 0.3) for (let s = -1.5; s <= 1.2; s += 0.3) {
    const planeY = t.heightAt(g.x, -g.s) - (n.x * x + n.z * (-s)) / n.y;
    bump = Math.max(bump, t.heightAt(g.x + x, -(g.s + s)) - planeY);
  }
  return { flatPlaneBuriedBy: +bump.toFixed(2), flash: t.gateFx[0].flash >= 0 };
}));

// the rocks: the hull vs the instanced mesh's actual vertices
const rock = await page.evaluate(() => {
  const r = window.__fp.race;
  const t = r.terrain;
  const rocks = t.obstacles.filter((o) => o.kind === 'rock');
  // measure the widest and narrowest reach of the outline, then probe
  // points around the mesh silhouette computed straight from the geometry
  let geo = null;
  r.scene.traverse((o) => { if (o.isInstancedMesh && o.material.flatShading && o.material.color?.getHex() === new (Object.getPrototypeOf(o.material.color).constructor)(t.theme.rock).getHex() && !geo) geo = o.geometry; });
  const pos = geo.attributes.position;
  const out = [];
  for (const o of rocks.slice(0, 6)) {
    let miss = 0, hit = 0, worst = 0;
    // every band vertex, rotated into the world: on the surface = hit;
    // pushed 0.5 m out = clear
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (Math.abs(y - 0.55) > 0.22) continue; // the equator: the widest ring, the silhouette from above
      const lx = pos.getX(i) * o.sc, lz = pos.getZ(i) * o.sc;
      const c = Math.cos(o.rot), s = Math.sin(o.rot);
      const wx = lx * c + lz * s, wz = -lx * s + lz * c;
      const d = Math.hypot(wx, wz);
      const on = probe(o, wx, wz);
      const off = probe(o, wx * (d + 0.5) / d, wz * (d + 0.5) / d);
      if (on.depth < -0.1) miss++; // the outline sits inside this vertex by more than a boot
      if (off.depth > -0.35) hit++; // half a metre off the crag still reads as a hit
      worst = Math.max(worst, Math.abs(on.depth));
    }
    out.push({ sc: +o.sc.toFixed(2), r: +o.r.toFixed(2), surfaceMisses: miss, offsetHits: hit, worst: +worst.toFixed(2) });
  }
  function probe(o, dx, dz) { return window.__fp.rockPenetration(o, dx, dz); }
  return out;
});
console.log('rocks:', JSON.stringify(rock));
await browser.close(); await server.close(); process.exit(0);
