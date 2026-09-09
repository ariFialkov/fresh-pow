// Close-up of the pavilion fascia LED screens from downhill.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4192, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4192/');
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
    r.gate.pav.visible = true;
    r.gate.screens.visible = true;
    r.camera.position.set(cx - 12, h + 3.6, z - 10);
    r.camera.lookAt(cx - 13.8, h + 4.6, z + 2);
  };
});
await page.waitForTimeout(1500);
await page.screenshot({ path: 'scratch-screens.png' });
console.log('shot screens');
await browser.close(); await server.close(); process.exit(0);
