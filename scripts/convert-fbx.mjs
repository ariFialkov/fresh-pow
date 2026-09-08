// Converts uploaded rider FBX files to lean GLBs + color classmaps.
import { createServer } from 'vite';
import { chromium } from 'playwright';
import fs from 'node:fs';

const server = await createServer({ server: { port: 4302, strictPort: true } });
await server.listen();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
page.on('pageerror', (e) => console.error('pageerror:', e));
page.on('console', (m) => { if (m.type() === 'error') console.error('console:', m.text()); });
await page.goto('http://localhost:4302/tools/convert.html');
await page.waitForFunction(() => !!window.__result, undefined, { timeout: 600000 });
const { reports, files } = JSON.parse(await page.evaluate(() => window.__result));
fs.mkdirSync('public/models', { recursive: true });
for (const [name, data] of Object.entries(files)) {
  const dest = name.endsWith('swatches.png') ? `scratch-${name}` : `public/models/${name}`;
  fs.writeFileSync(dest, Buffer.from(data, 'base64'));
  console.log(dest, Math.round(Buffer.from(data, 'base64').length / 1024), 'KB');
}
console.log(JSON.stringify(reports, null, 1));
await browser.close();
await server.close();
process.exit(0);
