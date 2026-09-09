// The start structure: the uploaded pavilion embedded in the summit as the
// start house — its five front bays line up with the five rider lanes — with
// a rider-scale gate booth in each bay whose stopper bar swings down on GO,
// plus LED track lighting, smoke machines and gate-open pyro layered on top.
import * as THREE from 'three';
import { createProp, propPalette } from './props.js';

// pavilion model facts (normalized units, width 100, base y=0):
// front bay dividers at x ±9/±25/±43.5 -> bay centers 0/±17/±34.3, so a
// uniform x-scale of 6.5/17 lands the bays on the 6.5 m lane grid; each bay
// has a ramp sloping from y 7.4 (z 8) down to y 1.4 (z 28) at its mouth.
const PAV_SX = 6.5 / 17;
const PAV_SY = 0.15;
const PAV_SZ = 0.185;
const PAV_FRONT = 28.7; // front edge z in model units
const rampY = (zn) => 7.4 - 6 * (THREE.MathUtils.clamp(zn, 8, 28) - 8) / 20;

// gate booth model facts: the rider lane opens between the hub posts at
// x -17.9..11.7 (center -3.1), the stopper bar pivots on the right hub at
// (11.2, 43.4, 3.6)
const BOOTH_SX = 0.052;
const BOOTH_SY = 0.036;
const BOOTH_SZ = 0.032;

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
    const theme = terrain.theme;
    const palette = propPalette(theme);
    this.cx = cx;
    this.z = z;

    // ---- the pavilion IS the start house: embedded in the flat summit (no
    // foundation — the uphill corners sink into the snow) and positioned so
    // each bay's ramp surface meets the snow right at the rider line ----
    const pavW = 100 * PAV_SX;
    const frontZ = z - 1.45; // ramp lip just downhill of the riders
    const pz = frontZ + PAV_FRONT * PAV_SZ;
    const pavY = terrain.heightAt(cx, z) - rampY((pz - z) / PAV_SZ) * PAV_SY;
    const pav = createProp('pavilion', theme);
    pav.scale.set(PAV_SX, PAV_SY, PAV_SZ);
    pav.position.set(cx, pavY, pz);
    pav.rotation.y = Math.PI; // open front faces down the hill
    this.group.add(pav);
    // the chase camera starts inside the structure's enclosed back half —
    // hide the pavilion until the camera has moved out past the ramp lips
    this.pav = pav;
    this.hideZ = frontZ - 1.5;

    // pyro from the pavilion's front roof line, smoke machines at its sides
    this.smokers = [];
    this.pyroPorts = [];
    const roofY = pavY + 60.6 * PAV_SY - 0.8;
    this.trussY = roofY + 1.6;
    for (const t of [-0.36, -0.12, 0.12, 0.36]) {
      this.pyroPorts.push(new THREE.Vector3(cx + t * pavW, roofY, frontZ + 0.4));
    }
    for (const side of [-1, 1]) {
      const sx = cx + side * (pavW / 2 + 0.9);
      const smoker = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.65, 0.9), darkMetal);
      smoker.position.set(sx, terrain.heightAt(sx, z - 1) + 0.35, z - 1);
      this.smokers.push(smoker.position.clone());
      this.group.add(smoker);
    }

    // ---- one gate booth per bay, sitting on the bay ramp, its turnstile
    // lane centered on the rider; the stopper bar swings down on GO ----
    this.wands = [];
    this.laneLightMats = [];
    const boothZ = z - 0.45 - 3.1 * BOOTH_SZ; // turnstile bar just downhill of the rider's chest
    const deckY = pavY + rampY((pz - boothZ) / PAV_SZ) * PAV_SY;
    const wandMat = new THREE.MeshLambertMaterial({
      color: palette.trim,
      emissive: palette.trim.clone().multiplyScalar(0.35),
    });
    for (const lane of lanes) {
      const bx = lane.x + 3.1 * BOOTH_SX; // center the lane opening, not the model
      const booth = createProp('start_gate', theme);
      booth.scale.set(BOOTH_SX, BOOTH_SY, BOOTH_SZ);
      booth.position.set(bx, deckY - 0.12, boothZ);
      // stopper bar hung off the right hub post, spanning the opening
      const pivot = new THREE.Group();
      pivot.position.set(11.2, 43.4, 3.6);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(28, 2, 2), wandMat);
      bar.position.x = -14;
      pivot.add(bar);
      booth.add(pivot);
      this.wands.push(pivot);
      this.group.add(booth);
      // phase lights on the two kiosk towers
      const lightMat = new THREE.MeshBasicMaterial({ color: 0xd6452f });
      this.laneLightMats.push(lightMat);
      for (const tx of [-33.4, 29.1]) {
        const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.085, 8, 6), lightMat);
        lamp.position.set(bx + tx * BOOTH_SX, deckY - 0.12 + 69 * BOOTH_SY, boothZ + 9 * BOOTH_SZ);
        this.group.add(lamp);
      }
    }

    // ---- LED track lighting across the snow below the ramp lips ----
    this.ledMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    for (const off of [-2.0, -3.2]) {
      const led = new THREE.Mesh(new THREE.BoxGeometry(pavW - 3, 0.16, 0.14), this.ledMat);
      led.position.set(cx, terrain.heightAt(cx, z + off) + 0.15, z + off);
      this.group.add(led);
    }
    this.screenMat = new THREE.MeshBasicMaterial({ color: 0x0d2233 }); // kept for the phase pulse

    this.group.traverse((o) => {
      if (o.isMesh) o.castShadow = true;
    });
  }

  /** 'idle' (red) -> 'set' (amber) -> 'go' (green + bars drop + pyro). */
  setPhase(p) {
    this.phase = p;
    const col = p === 'go' ? 0x3ee06b : p === 'set' ? 0xf5a623 : 0xd6452f;
    for (const m of this.laneLightMats) m.color.setHex(col);
    if (p === 'go' && this.openT < 0) this.openT = 0;
  }

  /**
   * @param {SprayPool} fx   white pool for smoke (may be null)
   * @param {SprayPool} pyro warm additive pool for flames/fireworks (may be null)
   * @param {number} camZ   camera world z (omit to always show the pavilion)
   */
  update(dt, t, fx, pyro, camZ) {
    if (camZ !== undefined) this.pav.visible = camZ < this.hideZ;
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
      // the stopper bars swing down out of the lane over the first 0.55 s
      const k = Math.min(1, this.openT / 0.55);
      const e = 1 - Math.pow(1 - k, 3);
      for (const w of this.wands) w.rotation.z = e * 1.45;
      // pyro: flame jets + firework bursts off the roof line for ~1.7 s
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
