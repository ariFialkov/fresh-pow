// Shrinks the raw exported GLBs: drops the duplicated emissive texture the
// FBX importer left behind, then welds + quantizes + meshopt-compresses.
// prune({ keepAttributes: true }) is load-bearing — the materials reference no
// textures (recoloring happens at runtime), so a default prune would discard
// the TEXCOORD_0 attribute the runtime canvas texture samples through.
import { NodeIO } from '@gltf-transform/core';
import { KHRMeshQuantization, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { prune, weld, quantize } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';

const io = new NodeIO()
  .registerExtensions([KHRMeshQuantization, EXTMeshoptCompression])
  .registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });

for (const id of ['boarder', 'skier', 'tuber']) {
  const doc = await io.read(`public/models/${id}.glb`);
  for (const mat of doc.getRoot().listMaterials()) {
    mat.setEmissiveTexture(null);
    mat.setEmissiveFactor([0, 0, 0]);
  }
  await doc.transform(prune({ keepAttributes: true }), weld(), quantize());
  doc
    .createExtension(EXTMeshoptCompression)
    .setRequired(true)
    .setEncoderOptions({ method: EXTMeshoptCompression.EncoderMethod.QUANTIZE });
  await io.write(`public/models/${id}.glb`, doc);
  const prim = doc.getRoot().listMeshes()[0].listPrimitives()[0];
  console.log(id, 'attrs:', prim.listSemantics().join(','));
}
console.log('optimized');
