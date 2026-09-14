import { existsSync, readdirSync, renameSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';

// The model files are glTF binaries whatever they are called: GLTFLoader
// reads the magic bytes, not the name. Hosts that reject `.glb` on a
// file-type allowlist can be fed the same bytes under another extension.
// Set VITE_MODEL_EXT (e.g. `VITE_MODEL_EXT=bin npm run build`) and this
// plugin renames what lands in dist/models to match src/game/assets.js.
const MODEL_EXT = (process.env.VITE_MODEL_EXT || 'glb').replace(/^\./, '');
const PUBLIC_MODELS = resolve('public/models');

function modelExtension() {
  let outDir = 'dist';
  // the .fbx in public/models are the originals the tools/*.html converters
  // read in dev; nothing at runtime loads them, so they stay out of the build
  const toolSources = existsSync(PUBLIC_MODELS)
    ? readdirSync(PUBLIC_MODELS).filter((f) => f.endsWith('.fbx'))
    : [];

  return {
    name: 'fresh-pow-model-extension',
    configResolved(cfg) {
      outDir = cfg.build.outDir;
    },
    // dev serves public/ straight off disk, where the files are still .glb
    configureServer(server) {
      if (MODEL_EXT === 'glb') return;
      server.middlewares.use((req, _res, next) => {
        const [path, query] = (req.url || '').split('?');
        if (path.startsWith('/models/') && path.endsWith(`.${MODEL_EXT}`)) {
          const glb = `${path.slice(0, -MODEL_EXT.length)}glb`;
          // only when a .glb of that name really exists, so the tools' own
          // .fbx requests are left alone
          if (existsSync(join(PUBLIC_MODELS, glb.slice('/models/'.length)))) {
            req.url = query ? `${glb}?${query}` : glb;
          }
        }
        next();
      });
    },
    closeBundle() {
      const dir = resolve(outDir, 'models');
      if (!existsSync(dir)) return;
      for (const f of toolSources) rmSync(join(dir, f), { force: true });
      if (MODEL_EXT === 'glb') return;
      for (const f of readdirSync(dir)) {
        if (f.endsWith('.glb')) renameSync(join(dir, f), join(dir, `${f.slice(0, -3)}${MODEL_EXT}`));
      }
    },
  };
}

export default defineConfig({
  // Relative base so the built app works from any static host or sub-path
  base: './',
  plugins: [modelExtension()],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1200,
  },
});
