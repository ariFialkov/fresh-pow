import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4174, strictPort: true }, root: '/home/user/fresh-pow' });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto('http://localhost:4174/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, { timeout: 20000 });

// measure fps
const fps = await page.evaluate(() => new Promise((res) => {
  let n = 0; const t0 = performance.now();
  const tick = () => { n++; if (performance.now() - t0 < 2000) requestAnimationFrame(tick); else res(n / 2); };
  requestAnimationFrame(tick);
}));
console.log('fps:', fps);

await page.click('#start-btn');
await page.waitForTimeout(4200);
await page.keyboard.down('w');
for (let i = 0; i < 10; i++) {
  await page.waitForTimeout(3000);
  const hud = await page.evaluate(() => ({
    spd: document.querySelector('#speed-box .spd')?.textContent,
    prog: document.querySelector('#progress-fill')?.style.width,
    rank: document.querySelector('#rank-box .pos')?.textContent,
  }));
  console.log(`t=${(i + 1) * 3}s`, JSON.stringify(hud));
  const done = await page.evaluate(() => !!document.querySelector('#results'));
  if (done) { console.log('RESULTS SHOWN'); break; }
}
const res = await page.evaluate(() => document.querySelector('#results')?.innerText || null);
console.log('results:', res);
if (errors.length) { console.error('ERRORS:', errors.join('\n')); process.exit(1); }
await browser.close();
await server.close();
process.exit(0);
