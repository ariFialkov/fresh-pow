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

export function addLights(scene) {
  const hemi = new THREE.HemisphereLight(0xcfe6ff, 0x9aa4b5, 1.15);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff2d8, 1.6);
  sun.position.set(120, 220, 60);
  scene.add(sun);
  return { hemi, sun };
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
