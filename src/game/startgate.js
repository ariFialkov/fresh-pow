// The start structure: a modern two-pylon truss over all five lanes with
// electronic lane gates, pulsing LED strips, smoke machines at the pylon feet
// and pyro on the truss that fires when the gates open.
import * as THREE from 'three';

export class StartGate {
  constructor(terrain) {
    this.terrain = terrain;
    this.group = new THREE.Group();
    this.openT = -1; // >=0 once the gates have been released
    this.phase = 'idle';

    const metal = new THREE.MeshLambertMaterial({ color: 0x39404f });
    const darkMetal = new THREE.MeshLambertMaterial({ color: 0x232833 });
    const accent = new THREE.MeshLambertMaterial({ color: 0xd6452f });

    const lanes = terrain.gateLanes;
    const cx = (lanes[0].x + lanes[lanes.length - 1].x) / 2;
    const z = lanes[0].z;
    const y = Math.max(...lanes.map((l) => terrain.heightAt(l.x, l.z)));
    const width = Math.abs(lanes[lanes.length - 1].x - lanes[0].x) + 11;
    this.cx = cx;
    this.z = z;
    this.trussY = y + 7.2;

    // ---- pylons with accent fins, feet and smoke machines ----
    this.smokers = [];
    this.pyroPorts = [];
    for (const side of [-1, 1]) {
      const px = cx + (side * width) / 2;
      const py = terrain.heightAt(px, z);
      const pylon = new THREE.Mesh(new THREE.BoxGeometry(1.35, 8.6, 1.7), metal);
      pylon.position.set(px, py + 4.3, z);
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.32, 8.6, 2.4), accent);
      fin.position.set(px + side * 0.6, py + 4.3, z);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 2.8), darkMetal);
      foot.position.set(px, py + 0.45, z);
      const smoker = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.65, 0.9), darkMetal);
      const sx = px - side * 1.9;
      smoker.position.set(sx, terrain.heightAt(sx, z + 0.8) + 0.35, z + 0.8);
      this.smokers.push(smoker.position.clone());
      this.pyroPorts.push(new THREE.Vector3(px, py + 9.2, z));
      this.group.add(pylon, fin, foot, smoker);
    }

    // ---- truss canopy with LED strips and a screen ----
    const beam = new THREE.Mesh(new THREE.BoxGeometry(width + 1.6, 1.2, 2.5), metal);
    beam.position.set(cx, this.trussY, z);
    const beamTop = new THREE.Mesh(new THREE.BoxGeometry(width + 1.6, 0.4, 1.4), darkMetal);
    beamTop.position.set(cx, this.trussY + 0.85, z);
    // truss diagonals for that engineered look
    for (let i = 0; i < 7; i++) {
      const dx = cx - width / 2 + ((i + 0.5) * width) / 7;
      const diag = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.35, 0.16), darkMetal);
      diag.position.set(dx, this.trussY + 0.4, z);
      diag.rotation.z = i % 2 ? 0.7 : -0.7;
      this.group.add(diag);
    }
    this.ledMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    for (const off of [-1.28, 1.28]) {
      const led = new THREE.Mesh(new THREE.BoxGeometry(width + 1.7, 0.2, 0.12), this.ledMat);
      led.position.set(cx, this.trussY - 0.45, z + off);
      this.group.add(led);
    }
    this.screenMat = new THREE.MeshBasicMaterial({ color: 0x0d2233 });
    const screen = new THREE.Mesh(new THREE.BoxGeometry(6.5, 2.1, 0.3), this.screenMat);
    screen.position.set(cx, this.trussY + 2.1, z);
    const screenFrame = new THREE.Mesh(new THREE.BoxGeometry(7.1, 2.6, 0.24), darkMetal);
    screenFrame.position.set(cx, this.trussY + 2.1, z + 0.05);
    this.group.add(beam, beamTop, screen, screenFrame);

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
