// Powder: pooled spray particles (carve fans, brake roosts, landing bursts,
// speed wake) and carved trails left in the snow behind every rider.
import * as THREE from 'three';

// soft round sprite generated once at runtime — no asset download
let spriteTex = null;
function getSprite() {
  if (spriteTex) return spriteTex;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  spriteTex = new THREE.CanvasTexture(c);
  return spriteTex;
}

export class SprayPool {
  /**
   * @param {object} opts { color: [r,g,b] 0..1, blending, gravity } — defaults
   *   are powder-white; pyro pools use warm colors + additive blending.
   */
  constructor(scene, max = 900, opts = {}) {
    this.max = max;
    this.cursor = 0;
    this.gravity = opts.gravity ?? 7.5;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.age = new Float32Array(max).fill(1e9);
    this.life = new Float32Array(max).fill(1);
    this.size0 = new Float32Array(max);

    this.aSize = new THREE.BufferAttribute(new Float32Array(max), 1);
    this.aAlpha = new THREE.BufferAttribute(new Float32Array(max), 1);
    const geo = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3);
    geo.setAttribute('position', this.aPos);
    geo.setAttribute('aSize', this.aSize);
    geo.setAttribute('aAlpha', this.aAlpha);

    const mtl = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: opts.blending ?? THREE.NormalBlending,
      uniforms: {
        uTex: { value: getSprite() },
        uColor: { value: new THREE.Vector3(...(opts.color ?? [0.97, 0.99, 1.0])) },
      },
      vertexShader: `
        attribute float aSize; attribute float aAlpha; varying float vA;
        void main() {
          vA = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (240.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform sampler2D uTex; uniform vec3 uColor; varying float vA;
        void main() {
          vec4 c = texture2D(uTex, gl_PointCoord);
          gl_FragColor = vec4(uColor, c.a * vA);
        }`,
    });
    this.points = new THREE.Points(geo, mtl);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  spawn(x, y, z, vx, vy, vz, size, life) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.max;
    this.pos[i * 3] = x;
    this.pos[i * 3 + 1] = y;
    this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx;
    this.vel[i * 3 + 1] = vy;
    this.vel[i * 3 + 2] = vz;
    this.age[i] = 0;
    this.life[i] = life;
    this.size0[i] = size;
  }

  /** Fan of powder kicked from a point. dir = horizontal throw direction. */
  burst(p, dir, { count = 20, speed = 6, up = 3.5, spread = 0.8, size = 1.1, life = 0.8 } = {}) {
    for (let i = 0; i < count; i++) {
      const a = (Math.random() - 0.5) * spread * 2;
      const cos = Math.cos(a), sin = Math.sin(a);
      const dx = dir.x * cos - dir.z * sin;
      const dz = dir.x * sin + dir.z * cos;
      const s = speed * (0.4 + Math.random() * 0.9);
      this.spawn(
        p.x + (Math.random() - 0.5) * 0.5,
        p.y + 0.1 + Math.random() * 0.25,
        p.z + (Math.random() - 0.5) * 0.5,
        dx * s, up * (0.5 + Math.random()), dz * s,
        size * (0.6 + Math.random() * 0.8),
        life * (0.6 + Math.random() * 0.8)
      );
    }
  }

  update(dt) {
    const { pos, vel, age, life, size0, max } = this;
    const sz = this.aSize.array;
    const al = this.aAlpha.array;
    for (let i = 0; i < max; i++) {
      if (age[i] >= life[i]) {
        al[i] = 0;
        sz[i] = 0;
        continue;
      }
      age[i] += dt;
      const k = age[i] / life[i];
      vel[i * 3 + 1] -= this.gravity * dt; // light powder falls slowly
      const drag = 1 - 1.6 * dt;
      vel[i * 3] *= drag;
      vel[i * 3 + 1] *= 1 - 0.4 * dt;
      vel[i * 3 + 2] *= drag;
      pos[i * 3] += vel[i * 3] * dt;
      pos[i * 3 + 1] += vel[i * 3 + 1] * dt;
      pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      al[i] = (1 - k) * 0.85;
      sz[i] = size0[i] * (0.6 + k * 1.6); // puffs expand as they die
    }
    this.aPos.needsUpdate = true;
    this.aSize.needsUpdate = true;
    this.aAlpha.needsUpdate = true;
  }
}

/**
 * Vehicle-accurate track sets: twin lines for skis, a single band for boards,
 * runner tracks for toboggans, one wide groove for saucers. Offsets are laid
 * perpendicular to the rider's heading, so drifting sideways leaves angled,
 * separated tracks just like a real slide.
 */
export class GearTrails {
  constructor(scene, terrain, gear) {
    // off = lateral offset, tail = how far behind the rider the line leaves
    // the gear (board tail, ski tails, sled stern) so the track visibly
    // pours out of the vehicle instead of appearing underneath the body
    const specs =
      gear.type === 'ski'
        ? [{ off: -0.175, w: 0.065, tail: 0.8 }, { off: 0.175, w: 0.065, tail: 0.8 }]
        : gear.type === 'board'
          ? [{ off: 0, w: 0.16, tail: 0.62 }]
          : gear.id === 'sled-saucer'
            ? [{ off: 0, w: 0.36, tail: 0.6 }]
            : [{ off: -0.21, w: 0.045, tail: 0.75 }, { off: 0.21, w: 0.045, tail: 0.75 }];
    this.tracks = specs.map((s) => ({ off: s.off, tail: s.tail, trail: new Trail(scene, terrain, s.w) }));
  }

  /** yaw = the vehicle's heading (rotation convention: forward = -z at 0). */
  push(x, z, yaw, grounded) {
    const rx = Math.cos(yaw);
    const rz = Math.sin(yaw);
    const bx = -Math.sin(yaw); // unit vector pointing behind the gear
    const bz = Math.cos(yaw);
    for (const t of this.tracks) {
      t.trail.push(x + rx * t.off + bx * t.tail, z + rz * t.off + bz * t.tail, grounded);
    }
  }

  update(dt) {
    for (const t of this.tracks) t.trail.update(dt);
  }
}

/** A carved line pressed into the snow behind one rider. */
export class Trail {
  constructor(scene, terrain, width = 0.34, max = 230) {
    this.terrain = terrain;
    this.width = width;
    this.max = max;
    this.points = []; // {x, z, age}
    this.minDist = 1.1;

    const geo = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(new Float32Array(max * 2 * 3), 3);
    this.aCol = new THREE.BufferAttribute(new Float32Array(max * 2 * 3), 3);
    this.aNorm = new THREE.BufferAttribute(new Float32Array(max * 2 * 3), 3);
    geo.setAttribute('position', this.aPos);
    geo.setAttribute('color', this.aCol);
    geo.setAttribute('normal', this.aNorm);
    const idx = [];
    for (let i = 0; i < max - 1; i++) {
      const a = i * 2;
      // wound so the faces look UP — the track is pressed into the snow's
      // top surface and must render from above (it was flipped, and only
      // ever visible from underneath)
      idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
    geo.setIndex(idx);
    geo.setDrawRange(0, 0);
    this.geo = geo;

    this.mesh = new THREE.Mesh(
      geo,
      // Lambert so the pressed track shades with the same light as the snow.
      // The heavy polygon offset lets the ribbon hug the surface tightly
      // (tiny lift) and still win the depth fight against the snow mesh
      // where its linear interpolation rises above the analytic curve.
      new THREE.MeshLambertMaterial({
        vertexColors: true,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4,
      })
    );
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);

    // pressed track = this mountain's own snow with the darkness turned up
    // ~25%; it ages back to pure snow color, melting into the slope
    const snow = new THREE.Color(terrain.theme?.snow ?? 0xf2f7fd);
    this.trackCol = snow.clone().multiplyScalar(0.75);
    this.snowCol = snow;
    this.fadeTime = 15; // tracks linger well behind the pack
    this.minDist = 0.55; // dense sampling keeps thin lines smooth through carves
    this.head = null; // live point pinned to the gear's tail every frame
  }

  push(x, z, grounded) {
    if (!grounded) {
      // break the ribbon over jumps
      if (this.points.length && this.points[this.points.length - 1] !== null) this.points.push(null);
      this.head = null;
      return;
    }
    // the head follows the vehicle continuously so the ribbon pours out of
    // the gear instead of popping forward in minDist-sized chunks
    this.head = { x, z, age: 0 };
    const last = [...this.points].reverse().find((p) => p);
    if (last && Math.hypot(x - last.x, z - last.z) < this.minDist) return;
    this.points.push({ x, z, age: 0 });
    while (this.points.length > this.max - 1) this.points.shift();
  }

  update(dt) {
    const pts = this.points;
    for (const p of pts) if (p) p.age += dt;
    while (pts.length && pts[0] && pts[0].age > this.fadeTime) pts.shift();
    while (pts.length && pts[0] === null) pts.shift();

    // the live head joins the sampled points so the ribbon's leading edge
    // sits exactly at the gear's tail every frame — no chunky pops
    const draw = pts.slice();
    const lastReal = [...pts].reverse().find((p) => p);
    if (this.head && lastReal && Math.hypot(this.head.x - lastReal.x, this.head.z - lastReal.z) > 0.03) {
      draw.push(this.head);
    }

    const pos = this.aPos.array;
    const col = this.aCol.array;
    const nrm = this.aNorm.array;
    const n3 = new THREE.Vector3();
    let v = 0;
    const c = new THREE.Color();
    const LIFT = 0.05; // hug the surface; the polygon offset resolves overlap
    for (let i = 0; i < draw.length && v < this.max; i++) {
      const p = draw[i];
      if (!p) continue;
      // consistent forward direction so the ribbon never bowties:
      // toward the next point when there is one, else FROM the previous
      const nxt = draw[i + 1] || null;
      const prv = draw[i - 1] || null;
      let dx = 0, dz = -1;
      if (nxt) {
        dx = nxt.x - p.x;
        dz = nxt.z - p.z;
      } else if (prv) {
        dx = p.x - prv.x;
        dz = p.z - prv.z;
      }
      const d = Math.hypot(dx, dz) || 1;
      const nx = -dz / d;
      const nz = dx / d;
      const y = this.terrain.heightAt(p.x, p.z) + LIFT;
      const w = this.width;
      pos[v * 6] = p.x + nx * w;
      pos[v * 6 + 1] = y;
      pos[v * 6 + 2] = p.z + nz * w;
      pos[v * 6 + 3] = p.x - nx * w;
      pos[v * 6 + 4] = this.terrain.heightAt(p.x - nx * w, p.z - nz * w) + LIFT;
      pos[v * 6 + 5] = p.z - nz * w;
      this.terrain.normalAt(p.x, p.z, n3);
      c.copy(this.trackCol).lerp(this.snowCol, Math.min(1, p.age / this.fadeTime));
      for (const side of [0, 1]) {
        col[v * 6 + side * 3] = c.r;
        col[v * 6 + side * 3 + 1] = c.g;
        col[v * 6 + side * 3 + 2] = c.b;
        nrm[v * 6 + side * 3] = n3.x;
        nrm[v * 6 + side * 3 + 1] = n3.y;
        nrm[v * 6 + side * 3 + 2] = n3.z;
      }
      v++;
    }
    this.geo.setDrawRange(0, Math.max(0, (v - 1) * 6));
    this.aPos.needsUpdate = true;
    this.aCol.needsUpdate = true;
    this.aNorm.needsUpdate = true;
  }
}
