import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4188, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4188/');
await page.waitForFunction(() => { const b = document.querySelector('#start-btn'); return b && !b.disabled; }, undefined, { timeout: 120000 });
await page.evaluate(() => document.querySelector('#start-btn').click());
await page.waitForFunction(() => window.__fp?.race?.stateName === 'racing', undefined, { timeout: 120000 });
await page.evaluate(() => {
  const r = window.__fp.race;
  const s = 1755;
  r.player.pos.set(r.terrain.centerAt(s), r.terrain.heightAt(r.terrain.centerAt(s), -s), -s);
  r.player.speed = 12;
});
const dbg = await page.evaluate(() => {
  const r = window.__fp.race;
  const s = 1800;
  const cx = r.terrain.centerAt(s);
  let arch = null, stand = null;
  r.scene.traverse((o) => {
    if (o.name === 'finish_line') arch = o;
    if (o.name === 'bleachers' && !stand) stand = o;
  });
  const V = r.player.pos.constructor;
  const box = new (Object.getPrototypeOf(r.terrain).constructor === Object ? null : function(){})();
  const b = new (arch.geometry ? null : Object) ();
  const THREEBox = arch && window.__fp ? null : null;
  const out = {
    hC: +r.terrain.heightAt(cx, -s).toFixed(1),
    hL: +r.terrain.heightAt(cx - 17, -s).toFixed(1),
    hR: +r.terrain.heightAt(cx + 17, -s).toFixed(1),
  };
  if (arch) {
    let m = null;
    arch.traverse((o) => { if (o.isMesh && !m) m = o; });
    arch = m;
    arch.updateWorldMatrix(true, true);
    // compute world bbox manually
    const pos = arch.geometry.attributes.position;
    let minY = 1e9, maxY = -1e9;
    const v = new V();
    for (let i = 0; i < pos.count; i += 7) {
      v.fromBufferAttribute(pos, i).applyMatrix4(arch.matrixWorld);
      if (v.y < minY) minY = v.y;
      if (v.y > maxY) maxY = v.y;
    }
    out.archMinY = +minY.toFixed(1);
    out.archMaxY = +maxY.toFixed(1);
  }
  return out;
});
console.log('finish debug:', JSON.stringify(dbg));
await page.keyboard.down('w');
await page.waitForTimeout(2500);
await page.screenshot({ path: 'scratch-finish-close.png' });
console.log('shot finish-close');
await browser.close(); await server.close(); process.exit(0);
