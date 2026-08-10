// Photographs every event venue in-engine: forces each event via ?event=<id>,
// rides into the course, hides the HUD and captures a uniform 16:9 action
// shot into public/events/<id>.jpg — the card art for the event roller.
import { chromium } from 'playwright';
import { preview } from 'vite';
import { EVENTS } from '../src/game/rtp.js';
import fs from 'node:fs';

fs.mkdirSync('public/events', { recursive: true });

const port = Number(process.env.PORT || 4211);
const server = await preview({ preview: { port, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

for (const ev of EVENTS) {
  await page.goto(`http://localhost:${port}/?event=${ev.id}`);
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.click('#start-btn');
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 180000 });
  await page.keyboard.down('w');
  // ride well into the course so the start gates drop out of frame and
  // trails, spray and the pack fill it instead
  await page.waitForTimeout(14000);
  await page.addStyleTag({ content: '#ui { display: none !important; }' });
  await page.waitForTimeout(250);
  await page.screenshot({ path: `public/events/${ev.id}.jpg`, type: 'jpeg', quality: 74 });
  await page.keyboard.up('w');
  console.log(`shot ${ev.id}`);
}

await browser.close();
await server.close();
console.log('event art complete');
process.exit(0);
