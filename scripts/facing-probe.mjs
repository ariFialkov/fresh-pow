// Numeric facing check for the boarder: where the hips, chest and head
// actually point in rig space (rig forward = -z, +x = rider's right), and
// which way the knees bend, for the idle and tuck poses.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4333, strictPort: true } });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 400, height: 400 } });
page.on('pageerror', (e) => console.error('pageerror:', e));
await page.goto('http://localhost:4333/');
await page.waitForFunction(() => !!window.__fp?.menu, undefined, { timeout: 30000 });
const out = await page.evaluate(async () => {
  const m = window.__fp.menu;
  m.hud._pickType('board');
  const r = m.playerRider;
  const THREE = await import('/node_modules/three/build/three.module.js').catch(() => null);
  const res = {};
  const rigQ = r.rig.getWorldQuaternion(new (r.rig.quaternion.constructor)());
  const inv = rigQ.clone().invert();
  const fwd = (bone, local) => {
    const q = bone.getWorldQuaternion(new (r.rig.quaternion.constructor)());
    const v = local.clone().applyQuaternion(q).applyQuaternion(inv);
    return [+v.x.toFixed(2), +v.y.toFixed(2), +v.z.toFixed(2)];
  };
  for (const [name, pose] of [['idle', { idle: true }], ['tuck', { tuck: 1, speedNorm: 1 }]]) {
    for (let i = 0; i < 6; i++) window.__fp.setPose(r, { ...pose, t: 1, dt: 1 });
    r.root.updateWorldMatrix(true, true);
    const b = r.char.bones;
    // the model faces +Z in its own space; bone "forward" is taken as the
    // rest-space +Z carried by each bone's rest orientation
    const V = r.rig.position.constructor;
    const restFwd = (bone) => new V(0, 0, 1).applyQuaternion(r.char.rest[bone.name].worldRelInv.clone().invert());
    const knee = (s) => {
      const ik = r.ctl.ik[s];
      const hip = ik.upleg.getWorldPosition(new V());
      const kn = ik.leg.getWorldPosition(new V());
      const ft = ik.foot.getWorldPosition(new V());
      const mid = hip.clone().add(ft).multiplyScalar(0.5);
      const d = kn.sub(mid).applyQuaternion(inv);
      return [+d.x.toFixed(2), +d.y.toFixed(2), +d.z.toFixed(2)];
    };
    res[name] = {
      hips: fwd(b.Hips, restFwd(b.Hips)),
      chest: fwd(b.Spine02, restFwd(b.Spine02)),
      head: fwd(b.Head, restFwd(b.Head)),
      kneeFront: knee(1), kneeBack: knee(-1),
      pelvisYaw: +r.parts.pelvis.rotation.y.toFixed(2),
      gearYaw: +r.gearGroup.rotation.y.toFixed(2),
      rigRoll: +r.rig.rotation.z.toFixed(2),
    };
  }
  return res;
});
console.log(JSON.stringify(out, null, 1));
await browser.close(); await server.close(); process.exit(0);
