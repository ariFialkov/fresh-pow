import { chromium } from 'playwright';
import { preview } from 'vite';
const port = Number(process.env.PORT || 4206);
const want = process.env.WANT || null; // event name substring to hunt for
const server = await preview({ preview: { port, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto(`http://localhost:${port}/`);
for (let tries = 0; ; tries++) {
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.click('#start-btn');
  await page.waitForSelector('.ev-locked', { timeout: 20000 });
  const ev = await page.evaluate(() => document.querySelector('.ev-name')?.textContent);
  if (!want || ev.toLowerCase().includes(want.toLowerCase())) {
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'scratch-roller.png' });
    console.log('locked event:', ev);
    break;
  }
  console.log('rolled', ev, '- retrying');
  if (tries > 14) { console.log('gave up hunting', want); process.exit(1); }
  await page.reload();
}
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 180000 });
await page.keyboard.down('w');
await page.waitForTimeout(6000);
await page.screenshot({ path: 'scratch-theme.png' });
console.log('theme shot done');
process.exit(0);
