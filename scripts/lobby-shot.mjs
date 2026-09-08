// Lobby + start-gate screenshots: all five riders visible for outfit-variety QA.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4179, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

await page.goto('http://localhost:4179/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: 'scratch-lobby.png' });
console.log('shot lobby');

await page.click('#start-btn');
await page.waitForFunction(() => !!window.__fp?.race, undefined, { timeout: 40000 });
await page.waitForTimeout(900);
await page.screenshot({ path: 'scratch-startline.png' });
console.log('shot startline');

await page.waitForFunction(() => window.__fp.race.stateName === 'racing', undefined, { timeout: 120000 });
await page.keyboard.down('w');
await page.waitForTimeout(2500);
await page.screenshot({ path: 'scratch-pack.png' });
console.log('shot pack');
await browser.close();
await server.close();
process.exit(0);
