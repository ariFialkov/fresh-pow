// Measures the pavilion's real bay-ramp surface: rays dropped from above at
// each bay centre, station by station down the ramp, give the top face
// height in model units — what the rider surface in startgate.js must match.
import { createServer } from 'vite';
import { chromium } from 'playwright';
const server = await createServer({ server: { port: 4331, strictPort: true } });
await server.listen();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4331/');
await page.waitForFunction(() => !!window.__fp, undefined, { timeout: 180000 });

const out = await page.evaluate(async () => {
  const THREE = await import('/node_modules/three/build/three.module.js');
  const { createProp, loadProps } = await import('/src/game/props.js');
  const { THEMES } = await import('/src/game/themes.js');
  await loadProps();
  const obj = createProp('pavilion', THEMES.vermont, 1);
  obj.updateMatrixWorld(true);
  const meshes = [];
  obj.traverse((o) => {
    if (!o.isMesh) return;
    o.material = Object.assign(o.material.clone(), { side: THREE.DoubleSide });
    meshes.push(o);
  });
  const rc = new THREE.Raycaster();
  const rows = [];
  for (let z = 4; z <= 30; z += 1) {
    const row = { z };
    for (const bx of [0, 17, 34.3]) {
      rc.set(new THREE.Vector3(bx, 200, z), new THREE.Vector3(0, -1, 0));
      const hits = rc.intersectObjects(meshes, true);
      // top-most surface below the roof band: skip anything above y 30
      const tops = hits.map((h) => 200 - h.distance).filter((y) => y < 30);
      row[`x${bx}`] = tops.length ? +tops[0].toFixed(2) : null;
    }
    rows.push(row);
  }
  return rows;
});
console.log('z\ttop@x0\ttop@x17\ttop@x34.3');
for (const r of out) console.log([r.z, r.x0, r.x17, r['x34.3']].join('\t'));
await browser.close();
await server.close();
process.exit(0);
