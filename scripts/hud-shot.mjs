// HUD layout check: the top row at desktop and phone widths for a timed and
// a judged format — the progress bar must stay clear of the readouts.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4299, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const [fmt, w, h] of [['combined', 900, 600], ['combined', 400, 720], ['halfpipe', 400, 720]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(`http://localhost:4299/?event=vermont&format=${fmt}`);
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  await page.waitForTimeout(800);
  const boxes = await page.evaluate(() => {
    const r = (id) => { const e = document.querySelector(id); if (!e || getComputedStyle(e).display === 'none') return null; const b = e.getBoundingClientRect(); return [Math.round(b.left), Math.round(b.right)]; };
    return { rank: r('#rank-box'), format: r('#format-box'), clock: r('#clock-box'), progress: r('#progress-wrap'), speed: r('#speed-box'), style: r('#style-box') };
  });
  console.log(fmt, w, JSON.stringify(boxes));
  await page.screenshot({ path: `scratch-hud-${fmt}-${w}.png` });
  await page.close();
}
await browser.close(); await server.close(); process.exit(0);
