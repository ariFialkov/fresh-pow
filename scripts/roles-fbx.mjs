import { createServer } from 'vite';
import { chromium } from 'playwright';
import fs from 'node:fs';
const server = await createServer({ server: { port: 4303, strictPort: true } });
await server.listen();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4303/tools/roles.html');
await page.waitForFunction(() => !!window.__done, undefined, { timeout: 300000 });
const save = (name, b64) => fs.writeFileSync(name, Buffer.from(b64, 'base64'));
save('scratch-roles-front.png', (await page.evaluate(() => window.__front)).split(',')[1]);
save('scratch-roles-rear.png', (await page.evaluate(() => window.__rear)).split(',')[1]);
const base = await page.evaluate(() => window.__base);
for (const [id, b64] of Object.entries(base)) {
  save(`public/models/${id}-base.jpg`, b64);
  console.log(`${id}-base.jpg`, Math.round(Buffer.from(b64, 'base64').length / 1024), 'KB');
}
await browser.close();
await server.close();
process.exit(0);
