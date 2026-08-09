import * as THREE from 'three';
import './style.css';
import { Input } from './game/input.js';
import { MenuScene, rosterFor } from './game/menu.js';
import { RaceScene } from './game/race.js';
import { randomSeed } from './game/rng.js';
import { needsTopUp, topUp, state } from './game/state.js';

const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
app.appendChild(renderer.domElement);

const input = new Input(renderer.domElement);

let current = null;

function setScene(scene) {
  if (current) current.destroy();
  current = scene;
  current.resize(innerWidth, innerHeight);
}

function toMenu() {
  if (needsTopUp()) topUp(); // the lodge comps broke players back in — virtual chips only
  const seed = randomSeed();
  setScene(new MenuScene(seed, (opts) => startRace(opts)));
}

function startRace(opts) {
  setScene(
    new RaceScene(opts, input, {
      onExit: (next) => {
        if (next === 'again' && state.balance >= opts.bet) {
          // quick re-race: same bet and gear, fresh mountain and roster
          if (needsTopUp()) topUp();
          const seed = randomSeed();
          startRace({ seed, bet: opts.bet, gear: opts.gear, bots: rosterFor(seed) });
        } else {
          toMenu();
        }
      },
    })
  );
}

addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight);
  if (current) current.resize(innerWidth, innerHeight);
});

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  if (current) {
    current.update(dt);
    renderer.render(current.scene, current.camera);
  }
});

toMenu();

// ---- PWA ----
if ('serviceWorker' in navigator && !location.hostname.includes('localhost')) {
  addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
