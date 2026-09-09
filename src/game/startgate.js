// The start structure: the uploaded gate-tower modules (two tiled across the
// five lanes, venue-tinted) plus the timing pavilion beside them, with the
// original electronic lane gates, LED track lighting, smoke machines and
// gate-open pyro layered on top.
import * as THREE from 'three';
import { createProp } from './props.js';

export class StartGate {
  constructor(terrain) {
    this.terrain = terrain;
    this.group = new THREE.Group();
    this.openT = -1; // >=0 once the gates have been released
    this.phase = 'idle';

    const darkMetal = new THREE.MeshLambertMaterial({ color: 0x232833 });

    const lanes = terrain.gateLanes;
    const cx = (lanes[0].x + lanes[lanes.length - 1].x) / 2;
    const z = lanes[0].z;
    const y = Math.max(...lanes.map((l) => terrain.heightAt(l.x, l.z)));
    const width = Math.abs(lanes[lanes.length - 1].x - lanes[0].x) + 11;
    this.cx = cx;
    this.z = z;
    this.trussY = y + 7.2;
    const theme = terrain.theme;

    // ---- the pavilion IS the start house: a big overhang spanning all
    // lanes, its open front facing downhill, with ten rider-scale start
    // gate booths lined up under its leading edge ----
    this.smokers = [];
    this.pyroPorts = [];
    const pavW = width + 9;
    const pav = createProp('pavilion', theme);
    pav.scale.set(pavW / 100, 0.155, 0.185);
    const pvz = z + 6.5;
    let pvTop = -Infinity, pvBot = Infinity;
    for (const [dx, dz] of [[-pavW / 2, -5.5], [pavW / 2, -5.5], [-pavW / 2, 5.5], [pavW / 2, 5.5]]) {
      const h = terrain.heightAt(cx + dx, pvz + dz);
      if (h > pvTop) pvTop = h;
      if (h < pvBot) pvBot = h;
    }
    pav.position.set(cx, pvTop - 0.35, pvz);
    pav.rotation.y = Math.PI; // open front faces down the hill
    if (pvTop - pvBot > 0.8) {
      const pd = pvTop - pvBot + 1.4;
      const plinth = new THREE.Mesh(new THREE.BoxGeometry(pavW - 2, pd, 10), darkMetal);
      plinth.position.set(cx, pvTop - 0.25 - pd / 2, pvz);
      this.group.add(plinth);
    }
    this.group.add(pav);
    // pyro from the pavilion roof line, smoke machines at its corners
    const roofY = pvTop + 60.5 * 0.155 - 1.2;
    for (const t of [-0.36, -0.12, 0.12, 0.36]) {
      this.pyroPorts.push(new THREE.Vector3(cx + t * pavW, roofY, z + 2));
    }
    for (const side of [-1, 1]) {
      const sx = cx + side * (width / 2 - 1);
      const smoker = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.65, 0.9), darkMetal);
      smoker.position.set(sx, terrain.heightAt(sx, z + 0.8) + 0.35, z + 0.8);
      this.smokers.push(smoker.position.clone());
      this.group.add(smoker);
    }

    // ---- ten gate booths, rider-scale, under the pavilion's front edge ----
    const gw = (width + 2) / 10;
    for (let i = 0; i < 10; i++) {
      const booth = createProp('start_gate', theme);
      booth.scale.set(gw / 100 - 0.002, 0.036, 0.032);
      const gx = cx + (i - 4.5) * gw;
      booth.position.set(gx, terrain.heightAt(gx, z + 1.4) - 0.12, z + 1.4);
      this.group.add(booth);
    }

    // ---- LED track lighting along the start line ----
    this.ledMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    for (const off of [-1.6, 1.6]) {
      const led = new THREE.Mesh(new THREE.BoxGeometry(width + 1.7, 0.16, 0.14), this.ledMat);
      led.position.set(cx, y + 0.18, z + off);
      this.group.add(led);
    }
    this.screenMat = new THREE.MeshBasicMaterial({ color: 0x0d2233 }); // kept for the phase pulse

    // ---- per-lane electronic gates ----
    this.laneLightMats = [];
    this.bars = [];
    const barMat = new THREE.MeshBasicMaterial({ color: 0xff5c45 });
    for (const lane of lanes) {
      const ly = terrain.heightAt(lane.x, lane.z);
      const lightMat = new THREE.MeshBasicMaterial({ color: 0xd6452f });
      this.laneLightMats.push(lightMat);
      for (const s of [-1.4, 1.4]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.24, 2.0, 0.38), darkMetal);
        post.position.set(lane.x + s, ly + 1.0, lane.z);
        const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), lightMat);
        lamp.position.set(lane.x + s, ly + 2.1, lane.z);
        const sensor = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.14), new THREE.MeshBasicMaterial({ color: 0x1de9b6 }));
        sensor.position.set(lane.x + s, ly + 1.5, lane.z - 0.16);
        this.group.add(post, lamp, sensor);
      }
      const bar = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.15, 0.15), barMat);
      bar.position.set(lane.x, ly + 1.35, lane.z);
      bar.userData.baseY = ly + 1.35;
      this.bars.push(bar);
      this.group.add(bar);
    }

    this.group.traverse((o) => {
      if (o.isMesh) o.castShadow = true;
    });
  }

  /** 'idle' (red) -> 'set' (amber) -> 'go' (green + bars fly + pyro). */
  setPhase(p) {
    this.phase = p;
    const col = p === 'go' ? 0x3ee06b : p === 'set' ? 0xf5a623 : 0xd6452f;
    for (const m of this.laneLightMats) m.color.setHex(col);
    if (p === 'go' && this.openT < 0) this.openT = 0;
  }

  /**
   * @param {SprayPool} fx   white pool for smoke (may be null)
   * @param {SprayPool} pyro warm additive pool for flames/fireworks (may be null)
   */
  update(dt, t, fx, pyro) {
    // LED chase pulse; frantic once the race is on
    const pulse = 0.5 + 0.5 * Math.sin(t * (this.phase === 'go' ? 9 : 2.1));
    this.ledMat.color.setHSL(0.55, 0.9, 0.3 + pulse * 0.35);
    this.screenMat.color.setHSL(0.58, 0.75, 0.1 + 0.09 * (0.5 + 0.5 * Math.sin(t * 1.3)));

    // ambient wisps from the smoke machines while the lobby idles
    if (fx && this.openT < 0 && Math.random() < dt * 1.2) {
      const s = this.smokers[Math.floor(Math.random() * this.smokers.length)];
      fx.spawn(s.x, s.y + 0.3, s.z, (Math.random() - 0.5) * 0.8, 0.7 + Math.random() * 0.5, 0.7, 2.6, 2.4);
    }

    if (this.openT >= 0) {
      const prev = this.openT;
      this.openT += dt;
      // bars fly up and spin away over the first 0.7 s
      const k = Math.min(1, this.openT / 0.7);
      for (const bar of this.bars) {
        bar.position.y = bar.userData.baseY + k * k * 6;
        bar.rotation.z = k * 2.6;
        bar.visible = k < 1;
      }
      // pyro: flame jets + firework bursts off the truss for ~1.7 s
      if (pyro && this.openT < 1.7) {
        for (const p of this.pyroPorts) {
          pyro.burst(p, { x: 0, z: 0 }, { count: 5, speed: 1.5, up: 12 + Math.random() * 6, spread: Math.PI, size: 1.5, life: 1.1 });
        }
        if (Math.floor(prev * 5) !== Math.floor(this.openT * 5)) {
          const px = this.cx + (Math.random() - 0.5) * 16;
          pyro.burst({ x: px, y: this.trussY + 2.5, z: this.z }, { x: 0, z: 0 }, { count: 22, speed: 7, up: 9, spread: Math.PI, size: 1.2, life: 0.9 });
        }
      }
      // smoke machines dump across the track through the launch
      if (fx && this.openT < 2.6) {
        for (const [i, s] of this.smokers.entries()) {
          if (Math.random() < dt * 14) {
            const toward = i === 0 ? 1 : -1;
            fx.spawn(s.x, s.y + 0.3, s.z, toward * (2.2 + Math.random() * 1.6), 0.8, 1.4, 2.6 + Math.random() * 1.4, 2.0);
          }
        }
      }
    }
  }
}
