// Dumps skeleton/mesh/material structure of the uploaded rider FBX files.
import { createServer } from 'vite';
import { chromium } from 'playwright';
import fs from 'node:fs';

const server = await createServer({ server: { port: 4300, strictPort: true } });
await server.listen();

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
page.on('pageerror', (e) => console.error('pageerror:', e));
page.on('console', (m) => { if (m.type() === 'error') console.error('console:', m.text()); });

await page.goto('http://localhost:4300/tools/inspect.html');
await page.waitForFunction(() => !!window.__result, undefined, { timeout: 120000 });
const result = await page.evaluate(() => window.__result);
fs.writeFileSync('/tmp/claude-0/-home-user-fresh-pow/610bfd7c-02af-5d5e-8d70-c47f40284a10/scratchpad/fbx-report.json', result);
console.log('report written,', result.length, 'bytes');

await browser.close();
await server.close();
process.exit(0);
