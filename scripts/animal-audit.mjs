// Audits every species on the same course: swaps each animal model into the
// live wildlife system, spawns a pair, and photographs them close up so
// stance/burial can be checked side by side.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4201, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

// keep in sync with SPECIES in src/game/animals.js
const SPECIES = {
  vermont: { label: 'a deer', herd: [3, 5], speed: 10.5, across: 5.5, r: 0.85, gallop: 7.5, bob: 0.3 },
  quebec: { label: 'a moose', herd: [1, 1], speed: 8.5, across: 3.5, r: 1.4, gallop: 5.5, bob: 0.34 },
  colorado: { label: 'an elk', herd: [4, 6], speed: 10, across: 4.5, r: 1.1, gallop: 6.5, bob: 0.32 },
  utah: { label: 'a bighorn', herd: [2, 4], speed: 9.5, across: 4.5, r: 0.9, gallop: 7, bob: 0.28 },
  bc: { label: 'a mountain goat', herd: [1, 2], speed: 8.5, across: 4, r: 0.9, gallop: 6.5, bob: 0.28 },
  chile: { label: 'a guanaco', herd: [3, 6], speed: 11, across: 5, r: 0.95, gallop: 7, bob: 0.3 },
  nz: { label: 'a sheep', herd: [5, 8], speed: 7.5, across: 3.5, r: 0.8, gallop: 6, bob: 0.22 },
  swiss: { label: 'an ibex', herd: [1, 2], speed: 9, across: 4.5, r: 0.9, gallop: 6.8, bob: 0.28 },
  japan: { label: 'a fox', herd: [1, 2], speed: 11, across: 5.5, r: 0.55, gallop: 8.5, bob: 0.2 },
};

for (let i = 0; i < 8; i++) {
  await page.goto('http://localhost:4201/');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  const ok = await page.evaluate(() => window.__fp.race.animals.src && window.__fp.race.terrain.theme.sunI > 1.2);
  if (ok) break;
}
console.log('course theme:', await page.evaluate(() => window.__fp.race.terrain.theme.key));

// follow-cam on the newest animal, player pinned uphill
await page.evaluate(() => {
  const r = window.__fp.race;
  const orig = r.update.bind(r);
  r.update = (dt) => {
    r.player.pos.set(r.terrain.centerAt(250), r.terrain.heightAt(r.terrain.centerAt(250), -250), -250);
    r.player.speed = 0;
    orig(dt);
    const a = r.animals.active[0];
    if (a) {
      const p = a.obj.position;
      r.camera.position.set(p.x + 5.5, p.y + 1.9, p.z + 4.5);
      r.camera.lookAt(p.x, p.y + 0.5, p.z - 1.5);
    }
  };
});

for (const [key, spec] of Object.entries(SPECIES)) {
  await page.evaluate(({ key, spec }) => {
    const A = window.__fp.race.animals;
    for (const a of A.active) A.scene.remove(a.obj);
    A.active = [];
    A.spec = spec;
    A.src = A.src.parent.getObjectByName(`animal_${key}`) ?? A.src;
    A._spawn({ seed: 7, side: -1, n: 2, s: 600 });
    // walk them onto open snow near the centerline for a clean look
    for (const [i, a] of A.active.entries()) {
      a.x = A.terrain.centerAt(600) + 6 + i * 3;
      a.s = 600 + i * 2.5;
    }
  }, { key, spec });
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `scratch-audit-${key}.png` });
  console.log('shot', key);
}
await browser.close(); await server.close(); process.exit(0);
