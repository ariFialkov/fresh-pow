// Lodge framing check: where the hero sits on screen against the fitting
// room panel, desktop and phone.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4311, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const [w, h] of [[1000, 640], [400, 760]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  page.on('pageerror', (e) => console.error('pageerror:', e));
  await page.goto('http://localhost:4311/');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `scratch-lodge-${w}.png` });
  console.log(w, await page.evaluate(() => {
    const m = window.__fp.menu;
    const r = m.playerRider.root;
    const v = r.position.clone();
    const proj = (y) => { const p = v.clone(); p.y += y; p.project(m.camera); return Math.round((1 - p.y) / 2 * innerHeight); };
    return { feet: proj(0), head: proj(1.85), panelTop: Math.round(document.querySelector('.customize').getBoundingClientRect().top) };
  }));
  await page.close();
}
await browser.close(); await server.close(); process.exit(0);
