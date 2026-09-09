// Aerial screenshots of terrain features: half-pipe, cliffside ledge,
// glade path, and the (now open) ice-bridge notch.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4193, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
let feats = {};
for (let attempt = 0; attempt < 7; attempt++) {
  await page.goto('http://localhost:4193/');
  await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
  await page.evaluate(() => document.querySelector('#start-btn').click());
  await page.waitForFunction(() => !!window.__fp?.race, undefined, { timeout: 40000 });
  const has = await page.evaluate(() => {
    const t = window.__fp.race.terrain;
    return !!t.pipes[0] && !!t.ledges[0] && t.theme.sunI > 1.2;
  });
  if (has || attempt === 6) break;
  console.log('no pipe/ledge this seed, reloading');
}

feats = await page.evaluate(() => {
  const t = window.__fp.race.terrain;
  const mid = (f) => (f.s0 + f.s1) / 2;
  const out = {};
  if (t.pipes[0]) out.pipe = { s: mid(t.pipes[0]), x: t.centerAt(mid(t.pipes[0])) + t.pipes[0].off };
  if (t.ledges[0]) {
    const L = t.ledges[0];
    out.ledge = { s: mid(L), x: t.centerAt(mid(L)) + L.side * 55 * L.uFace };
  }
  if (t.glades[0]) {
    const g = t.glades[0];
    out.glade = { s: mid(g), x: t.centerAt(mid(g)) + g.side * 55 * (1 - g.depth / 2) };
  }
  if (t.bridges[0]) out.bridge = { s: t.bridges[0].s, x: t.bridges[0].gapX };
  return out;
});
console.log('features:', JSON.stringify(feats));

await page.evaluate(() => {
  const r = window.__fp.race;
  window.__aim = null;
  const orig = r.update.bind(r);
  r.update = (dt) => {
    r.player.pos.set(r.terrain.centerAt(300), r.terrain.heightAt(r.terrain.centerAt(300), -300), -300);
    r.player.speed = 0;
    orig(dt);
    if (window.__aim) {
      const a = window.__aim;
      const h = r.terrain.heightAt(a.x, -a.s);
      // downhill of the feature, looking back up at its face
      const cz = -(a.s + a.back);
      const ch = r.terrain.heightAt(a.x + 4, cz) + a.up;
      r.camera.position.set(a.x + 4, Math.max(ch, h + 4), cz);
      r.camera.lookAt(a.x, h + 2, -a.s);
    }
  };
});
for (const [name, f] of Object.entries(feats)) {
  await page.evaluate((a) => { window.__aim = a; }, { ...f, up: name === 'glade' ? 18 : 9, back: name === 'bridge' ? 55 : 42 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: `scratch-geo-${name}.png` });
  console.log('shot', name);
}
await browser.close(); await server.close(); process.exit(0);
