// Regenerates the event card art from the actual courses: one scenic frame
// per venue, looking down the run from above the gates, HUD hidden.
import { chromium } from 'playwright';
import { preview } from 'vite';
import { mkdirSync } from 'node:fs';
const server = await preview({ preview: { port: 4301, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 960, height: 540 }, deviceScaleFactor: 1 });
page.on('pageerror', (e) => console.error('pageerror:', e));
mkdirSync('public/events', { recursive: true });
const ids = process.env.EV ? process.env.EV.split(',') : ['vermont', 'quebec', 'colorado', 'utah', 'bc', 'chile', 'nz', 'swiss', 'japan'];
for (const id of ids) {
  await page.goto(`http://localhost:4301/?event=${id}&format=race`);
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  await page.evaluate(() => {
    const r = window.__fp.race;
    const t = r.terrain;
    document.getElementById('ui').style.display = 'none';
    // a sweeping view from a shoulder above the run, down toward a feature-rich stretch
    const s = 420;
    const cx = t.centerAt(s);
    const orig = r.update.bind(r);
    r.update = (dt) => {
      r.player.pos.set(cx, t.heightAt(cx, -s), -s);
      r.player.speed = 0;
      orig(dt);
      // aerial: high over the run's shoulder, looking down the valley so the
      // features, treelines and far walls all read
      const px = cx - 14;
      const pz = -(s - 30);
      r.camera.position.set(px, t.heightAt(cx, -s) + 26, pz);
      r.camera.lookAt(cx + 6, t.heightAt(cx, -(s + 140)) + 2, -(s + 150));
      r.camera.fov = 58;
      r.camera.updateProjectionMatrix();
    };
  });
  await page.waitForTimeout(900);
  await page.screenshot({ path: `public/events/${id}.jpg`, type: 'jpeg', quality: 84 });
  console.log('art', id);
}
await browser.close(); await server.close(); process.exit(0);
