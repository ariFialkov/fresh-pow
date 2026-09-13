// UI screenshots: the lodge (desktop + phone), the pro shop, the event roller
// at its lock, and a combined-format results sheet.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4303, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ready = async (page) => page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });

for (const [w, h] of [[1000, 640], [400, 760]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  page.on('pageerror', (e) => console.error('pageerror:', e));
  await page.goto('http://localhost:4303/');
  await ready(page);
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `scratch-lodge-${w}.png` });
  console.log('lodge', w, await page.evaluate(() => ({ gear: document.querySelector('#gear-name').textContent, fit: document.querySelector('#fit-name').textContent, start: document.querySelector('#start-btn').textContent })));
  if (w === 1000) {
    await page.click('#shop-btn');
    await page.waitForTimeout(400);
    await page.screenshot({ path: 'scratch-shop.png' });
    console.log('shop cards', await page.evaluate(() => ({ n: document.querySelectorAll('.item-card').length, top: document.querySelector('.shop-card').getBoundingClientRect().top, h: document.querySelector('.shop-card').getBoundingClientRect().height })));
    for (const tab of ['ski', 'outfit']) {
      await page.click(`.stab[data-tab="${tab}"]`);
      await page.waitForTimeout(300);
      await page.screenshot({ path: `scratch-shop-${tab}.png` });
      console.log(tab, await page.evaluate(() => ({ top: document.querySelector('.shop-card').getBoundingClientRect().top, h: document.querySelector('.shop-card').getBoundingClientRect().height })));
    }
    await page.click('#shop-close');
    // the roller: normal flow, no forced event
    page.on('console', (m) => { if (m.type() === 'error') console.error('console:', m.text()); });
    await page.click('#start-btn');
    // poll the roller and grab it the moment the format reel locks
    let got = false;
    for (let i = 0; i < 80 && !got; i++) {
      await page.waitForTimeout(100);
      got = await page.evaluate(() => !!document.querySelector('.ev-format.fmt-locked'));
    }
    await page.waitForTimeout(150);
    await page.screenshot({ path: 'scratch-roller.png' });
    console.log('roller', await page.evaluate(() => ({ name: document.querySelector('.ev-name')?.textContent, fmt: document.querySelector('.fmt-locked .fmt-name')?.textContent, chips: document.querySelectorAll('.stat-chips span').length })));
  }
  await page.close();
}
// results: combined, settled with a real style total
const page = await browser.newPage({ viewport: { width: 1000, height: 760 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4303/?event=japan&format=combined');
await ready(page);
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
await page.evaluate(() => {
  const r = window.__fp.race;
  r.player.style = 640;
  r.goTime = 4; r.time = 88;
  for (const b of r.bots) { b.finishTime = b.rank < r.outcome.playerPos ? 70 + b.rank * 3 : null; b.d = 900; b.speed = 22; }
  r._finish();
});
await page.waitForTimeout(600);
await page.screenshot({ path: 'scratch-results.png' });
console.log('results rows', await page.evaluate(() => [...document.querySelectorAll('.standings li')].map((li) => li.textContent.replace(/\s+/g, ' ').trim())));
await browser.close(); await server.close(); process.exit(0);
