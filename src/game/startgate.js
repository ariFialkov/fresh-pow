// The start structure: the uploaded pavilion embedded in the summit as the
// start house — its five front bays line up with the five rider lanes — with
// a rider-scale gate booth in each bay whose stopper bar swings down on GO,
// plus LED track lighting, smoke machines and gate-open pyro layered on top.
import * as THREE from 'three';
import { createProp, propPalette } from './props.js';

// pavilion model facts (normalized units, width 100, base y=0):
// front bay dividers at x ±9/±25/±43.5 -> bay centers 0/±17/±34.3, so a
// uniform x-scale of 6.5/17 lands the bays on the 6.5 m lane grid; each bay
// has a ramp whose walkable face (measured off the mesh, scripts/ramp-measure)
// runs from y 8.58 at z 8 down to y 1.38 at its mouth, z 28.
const PAV_SX = 6.5 / 17;
const PAV_SY = 0.15;
const PAV_SZ = 0.185;
const PAV_FRONT = 28.7; // front edge z in model units
const rampY = (zn) => 8.58 - 0.36 * (THREE.MathUtils.clamp(zn, 8, 28) - 8);
// the ramp meets the snow at the rider line and its lip sits 1.45 m downhill,
// this much lower — the terrain banks its snow up to that lip so riders roll
// off the ramp instead of dropping off it
const LIP_DZ = 1.45;
export const RAMP_APRON = {
  lipDz: LIP_DZ,
  lipDrop: (rampY(PAV_FRONT - LIP_DZ / PAV_SZ) - 1.4) * PAV_SY,
  halfW: 50 * PAV_SX,
  blend: 2.4, // metres past the lip over which the bank eases into the slope
};

// gate booth model facts: the rider lane opens between the hub posts at
// x -17.9..11.7 (center -3.1), the stopper bar pivots on the right hub at
// (11.2, 43.4, 3.6)
const BOOTH_SX = 0.052;
const BOOTH_SY = 0.036;
const BOOTH_SZ = 0.032;

const ledTex = (w, h, draw) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
};

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
    const frontZ = z - LIP_DZ; // ramp lip just downhill of the riders
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
    // the bay ramps are a real surface: riders slide down them to the lip
    // instead of sinking through to the snow underneath. Registered on the
    // terrain so player and bots alike stand on max(snow, ramp).
    const halfW = pavW / 2;
    terrain.surface = (x, wz) => {
      if (Math.abs(x - cx) > halfW) return -Infinity;
      const zn = (pz - wz) / PAV_SZ; // model z, +z runs downhill after the flip
      if (zn < 8 || zn > PAV_FRONT) return -Infinity;
      return pavY + rampY(zn) * PAV_SY;
    };

    // ---- LED screens filling the pavilion's blank display shells. The big
    // center shell (model x -19.5..20.1, y -2..8.4 sloping z 16.8..22.6,
    // face normal down-forward) gets a full-width ticker ribbon cycling the
    // lined-up racers; the tilted fascia band beside it carries flashing
    // START signs in the clear stretches between its columns ----
    this.screens = new THREE.Group();
    this.accA = '#' + new THREE.Color(theme.eventA ?? 0xd6452f).getHexString();
    this.accB = '#' + new THREE.Color(theme.eventB ?? 0xf5d76e).getHexString();
    this.tickerTex = null;
    this.tickerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const ticker = new THREE.Mesh(new THREE.PlaneGeometry(15.0, 1.84), this.tickerMat);
    const tickerTilt = Math.atan((5.8 * PAV_SZ) / (10.4 * PAV_SY));
    ticker.rotation.order = 'YXZ';
    ticker.rotation.set(tickerTilt, Math.PI, 0);
    ticker.position.set(
      cx - 0.3 * PAV_SX,
      pavY + 33.6 * PAV_SY - Math.sin(tickerTilt) * 0.09,
      pz - 20.3 * PAV_SZ - Math.cos(tickerTilt) * 0.09,
    );
    this.screens.add(ticker);
    this.sideSignMats = [];
    // side screen shells: model x +-(29.5..43.6), y -2.6..8.5, z 18.4..23.2
    const signTilt = Math.atan((4.8 * PAV_SZ) / (11.1 * PAV_SY));
    for (const side of [-1, 1]) {
      const signMat = new THREE.MeshBasicMaterial({
        map: ledTex(512, 172, (ctx, w, h) => {
          ctx.fillStyle = '#0a0e16';
          ctx.fillRect(0, 0, w, h);
          ctx.strokeStyle = this.accA;
          ctx.lineWidth = 10;
          ctx.strokeRect(8, 8, w - 16, h - 16);
          ctx.font = 'bold 108px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = this.accB;
          ctx.fillText('START', w / 2, h / 2 + 6);
        }),
      });
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.55), signMat);
      sign.rotation.order = 'YXZ';
      sign.rotation.set(signTilt, Math.PI, 0);
      sign.position.set(
        cx + side * 36.5 * PAV_SX,
        pavY + 33.45 * PAV_SY - Math.sin(signTilt) * 0.09,
        pz - 20.8 * PAV_SZ - Math.cos(signTilt) * 0.09,
      );
      this.screens.add(sign);
      this.sideSignMats.push(signMat);
    }
    this.group.add(this.screens);

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
    this.laneScreens = [];
    for (const lane of lanes) {
      const bx = lane.x + 3.1 * BOOTH_SX; // center the lane opening, not the model
      const booth = createProp('start_gate', theme);
      booth.scale.set(BOOTH_SX, BOOTH_SY, BOOTH_SZ);
      booth.position.set(bx, deckY - 0.12, boothZ);
      // the kiosk towers carry small screen plates facing the rider (model
      // x -41.7..-30.2 and 24..35.3, y 25.5..51.9, z 4.2) — lit up with the
      // lane number and, once someone lines up, their name
      const laneNo = this.laneScreens.length + 1;
      const kioskMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      for (const tx of [-35.95, 29.65]) {
        const screen = new THREE.Mesh(new THREE.PlaneGeometry(11 * BOOTH_SX, 25 * BOOTH_SY), kioskMat);
        screen.position.set(bx + tx * BOOTH_SX, deckY - 0.12 + 38.7 * BOOTH_SY, boothZ + 4.2 * BOOTH_SZ + 0.035);
        this.group.add(screen);
      }
      this.laneScreens.push({ mat: kioskMat, no: laneNo, name: null });
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

    this.setRoster([]);

    this.group.traverse((o) => {
      if (o.isMesh) o.castShadow = true;
    });
  }

  /**
   * Redraw the ticker + lane screens for the riders currently lined up.
   * @param {(string|null)[]} names racer name per lane (null = empty gate)
   */
  setRoster(names) {
    const lineup = names.filter(Boolean);
    const text = 'RACE STARTING  •  ' + (lineup.length ? lineup.join('  •  ') + '  •  ' : '');
    this.tickerTex?.dispose();
    this.tickerTex = ledTex(2048, 256, (ctx, w, h) => {
      ctx.fillStyle = '#0a0e16';
      ctx.fillRect(0, 0, w, h);
      for (let x = 0; x < w; x += 32) {
        for (const y of [0, h - 26]) {
          ctx.fillStyle = (x / 32) % 2 ? '#e8edf4' : '#12161e';
          ctx.fillRect(x, y, 32, 26);
        }
      }
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.accB;
      // pick a font size whose whole number of copies tiles the canvas with
      // little distortion — the scroll then wraps seamlessly
      let font = 130, tw = 0, k = 1, scale = 1;
      for (; font >= 56; font -= 8) {
        ctx.font = `bold ${font}px sans-serif`;
        tw = ctx.measureText(text).width;
        k = Math.max(1, Math.round(w / tw));
        scale = w / (k * tw);
        if (scale >= 0.85 && scale <= 1.25) break;
      }
      ctx.setTransform(scale, 0, 0, 1, 0, 0);
      for (let i = 0; i < k; i++) ctx.fillText(text, i * tw, h / 2 + 8);
    });
    this.tickerTex.wrapS = THREE.RepeatWrapping;
    this.tickerMat.map = this.tickerTex;
    this.tickerMat.needsUpdate = true;
    for (const [i, s] of this.laneScreens.entries()) {
      const name = names[i] ?? null;
      if (s.mat.map && s.name === name) continue;
      s.name = name;
      s.mat.map?.dispose();
      s.mat.map = ledTex(128, 256, (ctx, w, h) => {
        ctx.fillStyle = '#0a0e16';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = this.accA;
        ctx.lineWidth = 6;
        ctx.strokeRect(5, 5, w - 10, h - 10);
        ctx.textAlign = 'center';
        ctx.fillStyle = this.accB;
        ctx.font = 'bold 110px sans-serif';
        ctx.fillText(String(s.no), w / 2, name ? 128 : 150);
        if (name) {
          ctx.fillStyle = '#e8edf4';
          let size = 30;
          ctx.font = `bold ${size}px sans-serif`;
          while (size > 14 && ctx.measureText(name).width > w - 18) {
            size -= 2;
            ctx.font = `bold ${size}px sans-serif`;
          }
          ctx.fillText(name, w / 2, 200);
        }
      });
      s.mat.needsUpdate = true;
    }
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
    if (camZ !== undefined) {
      const vis = camZ < this.hideZ;
      this.pav.visible = vis;
      this.screens.visible = vis;
    }
    // ticker crawl + START sign flash (frantic once the race is on)
    if (this.tickerTex) this.tickerTex.offset.x += dt * 0.045;
    const flash = 0.66 + 0.34 * Math.sin(t * (this.phase === 'go' ? 11 : 2.6));
    for (const m of this.sideSignMats) m.color.setScalar(flash);
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
