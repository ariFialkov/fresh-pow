// Screenshots: hollow log (bore view), small log, and an animal herd crossing.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4195, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));

for (let attempt = 0; attempt < 10; attempt++) {
  await page.goto('http://localhost:4195/');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
  const ok = await page.evaluate(() => {
    const r = window.__fp.race;
    return r.terrain.logs.some((l) => l.kind === 'log_hollow') && r.animals.events.length > 0 && r.terrain.theme.sunI > 1.2;
  });
  if (ok) break;
  console.log('reroll');
}

// pin player uphill, drive the camera manually
await page.evaluate(() => {
  const r = window.__fp.race;
  window.__aim = null;
  const orig = r.update.bind(r);
  r.update = (dt) => {
    if (window.__pin) {
      r.player.pos.set(r.terrain.centerAt(window.__pin), r.terrain.heightAt(r.terrain.centerAt(window.__pin), -window.__pin), -window.__pin);
      r.player.speed = 0;
    }
    orig(dt);
    if (window.__aim) {
      const a = window.__aim;
      r.camera.position.set(a.x, a.y, a.z);
      r.camera.lookAt(a.tx, a.ty, a.tz);
    }
  };
});

const logs = await page.evaluate(() => {
  const r = window.__fp.race;
  const t = r.terrain;
  const out = {};
  for (const l of t.logs) {
    if (!out[l.kind]) out[l.kind] = { x: l.x, s: -l.z, y: t.heightAt(l.x, l.z) };
  }
  return out;
});
console.log('logs:', JSON.stringify(logs));
for (const [kind, l] of Object.entries(logs)) {
  const far = kind === 'log_hollow' ? { dx: 20, dy: 9, dz: 34, ty: 5 } : { dx: 13, dy: 2.6, dz: 4, ty: 1.2 };
  await page.evaluate((a) => { window.__pin = 300; window.__aim = a; },
    { x: l.x + far.dx, y: l.y + far.dy, z: -(l.s - far.dz), tx: l.x, ty: l.y + far.ty, tz: -l.s });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `scratch-${kind}.png` });
  console.log('shot', kind);
}

// animal herd: trigger the first event by teleporting the player near it
const ev = await page.evaluate(() => {
  const r = window.__fp.race;
  const e = r.animals.events[0];
  return { s: e.s, side: e.side };
});
await page.evaluate((e) => {
  const r = window.__fp.race;
  window.__pin = e.s - 90;
  window.__aim = null;
}, ev);
await page.waitForFunction(() => window.__fp.race.animals.active.length > 0, undefined, { timeout: 30000 });
await page.waitForTimeout(2200);
await page.evaluate(() => {
  const r = window.__fp.race;
  const a = r.animals.active[0];
  const y = r.terrain.heightAt(a.x, -a.s);
  window.__aim = { x: a.x + 6, y: y + 3, z: -(a.s - 14), tx: a.x, ty: y + 1, tz: -a.s };
});
await page.waitForTimeout(400);
await page.screenshot({ path: 'scratch-herd.png' });
console.log('shot herd, active:', await page.evaluate(() => window.__fp.race.animals.active.length),
  'theme:', await page.evaluate(() => window.__fp.race.event.theme));
await browser.close(); await server.close(); process.exit(0);
