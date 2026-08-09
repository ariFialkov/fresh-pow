// Shared scene dressing: sky dome, lighting, fog, drifting snow.
import * as THREE from 'three';

export function makeSky() {
  const geo = new THREE.SphereGeometry(2600, 16, 10);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color(0x4b8fd4) },
      bottom: { value: new THREE.Color(0xdcefff) },
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 top; uniform vec3 bottom; varying vec3 vDir;
      void main() {
        float t = clamp(vDir.y * 1.3 + 0.28, 0.0, 1.0);
        gl_FragColor = vec4(mix(bottom, top, t), 1.0);
      }`,
  });
  const dome = new THREE.Mesh(geo, mat);
  dome.frustumCulled = false;
  return dome;
}

// Global render quality knobs (main.js turns shadows off on weak devices)
export const Quality = { shadows: true };

export function addLights(scene) {
  // dimmer ambient + stronger warm sun = deeper shading on riders and moguls
  const hemi = new THREE.HemisphereLight(0xcfe6ff, 0x8e99ab, 0.85);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0d0, 1.9);
  sun.position.set(75, 85, 35);
  scene.add(sun);
  scene.add(sun.target);
  if (Quality.shadows) {
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    const c = sun.shadow.camera;
    c.left = -26;
    c.right = 26;
    c.top = 26;
    c.bottom = -26;
    c.near = 1;
    c.far = 320;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.5;
  }
  return { hemi, sun };
}

/** Keeps the tight shadow frustum centered on the action. */
export function aimSun(sun, focus) {
  sun.position.set(focus.x + 75, focus.y + 85, focus.z + 35);
  sun.target.position.copy(focus);
}

export class Snowfall {
  constructor(scene, count = 450, range = 70) {
    this.range = range;
    const pos = new Float32Array(count * 3);
    this.vel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * range * 2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * range;
      pos[i * 3 + 2] = (Math.random() - 0.5) * range * 2;
      this.vel[i] = 1.5 + Math.random() * 2.5;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.22,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.center = new THREE.Vector3();
  }

  update(dt, center) {
    this.center.copy(center);
    this.points.position.copy(center);
    const pos = this.points.geometry.attributes.position;
    const r = this.range;
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i) - this.vel[i] * dt;
      if (y < -r / 2) y += r;
      pos.setY(i, y);
      pos.setX(i, pos.getX(i) + Math.sin((y + i) * 0.5) * dt * 0.6);
    }
    pos.needsUpdate = true;
  }
}
