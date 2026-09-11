import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4200, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
for (let i = 0; i < 8; i++) {
  await page.goto('http://localhost:4200/');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  const ok = await page.evaluate(() => window.__fp.race.animals.events.length > 0 && window.__fp.race.terrain.theme.sunI > 1.2);
  if (ok) break;
}
await page.evaluate(() => {
  const r = window.__fp.race;
  const ev = r.animals.events[0];
  const orig = r.update.bind(r);
  r.update = (dt) => {
    r.player.pos.set(r.terrain.centerAt(ev.s - 150), r.terrain.heightAt(r.terrain.centerAt(ev.s - 150), -(ev.s - 150)), -(ev.s - 150));
    r.player.speed = 0;
    orig(dt);
    const a = r.animals.active[0];
    if (a) {
      // side-on follow cam so stance and tracks read clearly
      const p = a.obj.position;
      r.camera.position.set(p.x + 7, p.y + 2.6, p.z + 6);
      r.camera.lookAt(p.x, p.y + 0.6, p.z - 2);
    }
  };
});
await page.waitForFunction(() => window.__fp.race.animals.active.length > 0, undefined, { timeout: 30000 });
await page.waitForTimeout(3500);
await page.screenshot({ path: 'scratch-animalcam.png' });
console.log('shot, theme:', await page.evaluate(() => window.__fp.race.terrain.theme.key));
console.log(await page.evaluate(() => {
  const A = window.__fp.race.animals;
  const a = A.active[0];
  return JSON.stringify({
    trails: A.trails.length,
    pts: a ? a.tracks.map((t) => t.trail.points.length) : null,
    sample: a ? a.tracks[0].trail.points.slice(-4).map((p) => (p ? [Math.round(p.x), Math.round(p.z)] : null)) : null,
    animalAt: a ? [Math.round(a.x), Math.round(-a.s)] : null,
  });
}));
await browser.close(); await server.close(); process.exit(0);
