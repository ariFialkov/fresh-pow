// Shrinks animals.glb: weld + quantize + meshopt + webp textures.
import { NodeIO } from '@gltf-transform/core';
import { KHRMeshQuantization, EXTMeshoptCompression, EXTTextureWebP } from '@gltf-transform/extensions';
import { prune, weld, quantize, textureCompress } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';
import sharp from 'sharp';

const io = new NodeIO()
  .registerExtensions([KHRMeshQuantization, EXTMeshoptCompression, EXTTextureWebP])
  .registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });

const doc = await io.read('public/models/animals.glb');
await doc.transform(
  prune({ keepAttributes: true }),
  weld(),
  quantize(),
  textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 80 }),
);
doc
  .createExtension(EXTMeshoptCompression)
  .setRequired(true)
  .setEncoderOptions({ method: EXTMeshoptCompression.EncoderMethod.QUANTIZE });
await io.write('public/models/animals.glb', doc);
console.log('optimized');
