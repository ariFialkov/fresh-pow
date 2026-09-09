import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4186, strictPort: true }});
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 300, height: 200 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4186/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => !!window.__fp?.race, undefined, { timeout: 60000 });
const out = await page.evaluate(() => {
  const tr = window.__fp.race.playerTrail.tracks[0].trail;
  tr.points.length = 0;
  tr.head = null;
  // segment A, airborne gap, segment B
  for (let i = 0; i < 5; i++) tr.push(0, -400 - i, true, 0.2);
  tr.push(0, -406, false);
  for (let i = 0; i < 5; i++) tr.push(0, -420 - i, true, 0.2);
  tr.update(0.016);
  const a = tr.aPos.array;
  const nPairs = tr.geo.drawRange.count / 6 + 1;
  const pairs = [];
  for (let v = 0; v < nPairs; v++) {
    const L = [a[v*6], a[v*6+2]], R = [a[v*6+3], a[v*6+5]];
    pairs.push({ z: +((L[1]+R[1])/2).toFixed(1), collapsed: Math.hypot(L[0]-R[0], L[1]-R[1]) < 1e-6 });
  }
  return pairs;
});
console.log(JSON.stringify(out));
await browser.close(); await server.close(); process.exit(0);
