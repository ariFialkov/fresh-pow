// Measures the real log_hollow bore: rays fired outward from inside the bore
// hit the inner wall first and the outer shell second, giving the true bore
// radius, shell radius and axis height at stations down the trunk — the
// numbers the player collider needs to match the actual shape.
import { createServer } from 'vite';
import { chromium } from 'playwright';
const server = await createServer({ server: { port: 4311, strictPort: true } });
await server.listen();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4311/');
await page.waitForFunction(() => !!window.__fp, undefined, { timeout: 180000 });

const out = await page.evaluate(async () => {
  const THREE = await import('/node_modules/three/build/three.module.js');
  const { createProp, loadProps } = await import('/src/game/props.js');
  const { THEMES } = await import('/src/game/themes.js');
  await loadProps();
  const obj = createProp('log_hollow', THEMES.vermont, 1);
  obj.updateMatrixWorld(true);
  const meshes = [];
  obj.traverse((o) => {
    if (!o.isMesh) return;
    o.material = Object.assign(o.material.clone(), { side: THREE.DoubleSide });
    meshes.push(o);
  });
  const rc = new THREE.Raycaster();
  const N = 48;
  const shoot = (cx, cy, z, th) => {
    rc.set(new THREE.Vector3(cx, cy, z), new THREE.Vector3(Math.cos(th), Math.sin(th), 0));
    const ds = [];
    let last = -1;
    for (const h of rc.intersectObjects(meshes, true)) {
      if (h.distance - last > 0.4) ds.push(h.distance);
      last = h.distance;
    }
    return ds;
  };
  const rows = [];
  for (let z = -48; z <= 48; z += 4) {
    // two refinement passes on the section center: rays from inside the bore
    // hit the near wall first, so opposite pairs locate the axis
    let cx = 0, cy = 19.5;
    for (let pass = 0; pass < 3; pass++) {
      let sx = 0, sy = 0, np = 0;
      for (let i = 0; i < N / 2; i++) {
        const th = (i / N) * Math.PI * 2;
        const a = shoot(cx, cy, z, th)[0];
        const b = shoot(cx, cy, z, th + Math.PI)[0];
        if (a == null || b == null) continue;
        sx += Math.cos(th) * (a - b) / 2; sy += Math.sin(th) * (a - b) / 2; np++;
      }
      if (!np) break;
      cx += sx / np; cy += sy / np;
    }
    const ins = [], outs = [];
    for (let i = 0; i < N; i++) {
      const ds = shoot(cx, cy, z, (i / N) * Math.PI * 2);
      if (ds[0] != null) ins.push(ds[0]);
      if (ds[1] != null) outs.push(ds[1]);
    }
    const q = (arr, p) => (arr.length ? +[...arr].sort((a, b) => a - b)[Math.floor((arr.length - 1) * p)].toFixed(2) : null);
    rows.push({
      z, cx: +cx.toFixed(2), cy: +cy.toFixed(2),
      inN: ins.length, in10: q(ins, 0.1), inMed: q(ins, 0.5), in90: q(ins, 0.9),
      outN: outs.length, out10: q(outs, 0.1), outMed: q(outs, 0.5), out90: q(outs, 0.9),
    });
  }
  return rows;
});
console.log('z\tcx\tcy\tinN\tin10\tinMed\tin90\toutN\tout10\toutMed\tout90');
for (const r of out) {
  console.log([r.z, r.cx, r.cy, r.inN, r.in10, r.inMed, r.in90, r.outN, r.out10, r.outMed, r.out90].join('\t'));
}
await browser.close();
await server.close();
process.exit(0);
