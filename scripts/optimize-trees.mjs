// Decimates the venue trees hard (~2200 tris each) + weld/quantize/meshopt.
import { NodeIO } from '@gltf-transform/core';
import { KHRMeshQuantization, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { prune, weld, quantize } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';

const TARGET_TRIS = 2200;

const io = new NodeIO()
  .registerExtensions([KHRMeshQuantization, EXTMeshoptCompression])
  .registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });

// decimation happens via vertex clustering in the converter — the AI
// sculpts' disconnected shells defeat border-respecting simplifiers
const doc = await io.read('public/models/trees.glb');
await doc.transform(weld(), prune({ keepAttributes: true }), quantize());
doc
  .createExtension(EXTMeshoptCompression)
  .setRequired(true)
  .setEncoderOptions({ method: EXTMeshoptCompression.EncoderMethod.QUANTIZE });
await io.write('public/models/trees.glb', doc);

for (const mesh of doc.getRoot().listMeshes()) {
  let tris = 0;
  for (const prim of mesh.listPrimitives()) tris += prim.getIndices().getCount() / 3;
  console.log(mesh.getName() || mesh.listPrimitives().length, Math.round(tris), 'tris');
}
console.log('optimized');
