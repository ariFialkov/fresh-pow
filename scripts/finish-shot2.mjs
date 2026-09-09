import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4189, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4189/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
await page.evaluate(() => {
  const r = window.__fp.race;
  const s = 1800;
  const cx = r.terrain.centerAt(s);
  const archY = Math.min(r.terrain.heightAt(cx - 17, -s), r.terrain.heightAt(cx + 17, -s));
  const orig = r.update.bind(r);
  r.update = (dt) => {
    // hold the player far uphill so the race never ends during the shot
    r.player.pos.set(r.terrain.centerAt(300), r.terrain.heightAt(r.terrain.centerAt(300), -300), -300);
    r.player.speed = 0;
    orig(dt);
    r.camera.position.set(cx, archY + 7, -s + 40);
    r.camera.lookAt(cx, archY + 5.4, -s);
  };
});
await page.waitForTimeout(1500);
await page.screenshot({ path: 'scratch-finish-near.png' });
console.log('shot finish-near');
await browser.close(); await server.close(); process.exit(0);
