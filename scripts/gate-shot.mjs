// Close-up of the start gates: camera parked downhill looking back uphill,
// one frame during the countdown (bars closed) and one after GO (bars down).
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4191, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4191/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => !!window.__fp?.race, undefined, { timeout: 40000 });
await page.evaluate(() => {
  const r = window.__fp.race;
  const cx = r.gate.cx, z = r.gate.z;
  const h = r.terrain.heightAt(cx, z);
  const orig = r.update.bind(r);
  r.update = (dt) => {
    orig(dt);
    r.camera.position.set(cx + 2.5, h + 2.4, z - 9.5);
    r.camera.lookAt(cx, h + 1.6, z + 3);
  };
});
await page.waitForTimeout(1200);
await page.screenshot({ path: 'scratch-gate-closed.png' });
console.log('shot closed, phase', await page.evaluate(() => window.__fp.race.gate.phase));
await page.waitForFunction(() => window.__fp.race.gate.openT > 0.8, undefined, { timeout: 120000 });
await page.screenshot({ path: 'scratch-gate-open.png' });
console.log('shot open');
await browser.close(); await server.close(); process.exit(0);
