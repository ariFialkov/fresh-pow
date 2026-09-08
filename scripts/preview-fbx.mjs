import { createServer } from 'vite';
import { chromium } from 'playwright';
import fs from 'node:fs';

const server = await createServer({ server: { port: 4301, strictPort: true } });
await server.listen();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4301/tools/preview.html');
await page.waitForFunction(() => !!window.__done, undefined, { timeout: 180000 });
const save = (name, dataUrl) => fs.writeFileSync(name, Buffer.from(dataUrl.split(',')[1], 'base64'));
save('scratch-fbx-front.png', await page.evaluate(() => window.__front));
save('scratch-fbx-back.png', await page.evaluate(() => window.__back));
const tex = await page.evaluate(() => window.__tex);
for (const [id, t] of Object.entries(tex)) {
  save(`scratch-tex-${id}.png`, t.url);
  console.log(id, 'texture', t.w, 'x', t.h);
}
await browser.close();
await server.close();
process.exit(0);
