// Where the binary models live, and under what file extension.
//
// The models are glTF binaries (meshopt-compressed, with their textures
// packed in). GLTFLoader identifies them by the magic bytes at the start of
// the file, not by the name, so the extension is free to be whatever the
// host that serves them will accept. Some upload targets reject `.glb` on a
// file-type allowlist; set VITE_MODEL_EXT at build time to rename them:
//
//   npm run build                      -> dist/models/props.glb
//   VITE_MODEL_EXT=bin npm run build   -> dist/models/props.bin
//
// vite.config.js renames the emitted files to match, so this constant and
// what is on disk never drift apart. The contents are glTF either way.
export const MODEL_EXT = (import.meta.env?.VITE_MODEL_EXT || 'glb').replace(/^\./, '');

/** Absolute-free URL for one model, e.g. modelURL('props') -> 'models/props.glb' */
export const modelURL = (name) => `models/${name}.${MODEL_EXT}`;
