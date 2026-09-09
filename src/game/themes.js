// Location themes: palette + topography + vegetation character per event
// venue. Terrain, sky, fog and lighting all read from these.
export const THEMES = {
  vermont: {
    eventA: 0xc22b35, eventB: 0xf5d76e, // venue accent: banners/panels + lights/trim
    skyTop: 0x4f8fce, skyBottom: 0xe9f2fa, fog: 0xe4eefa, fogNear: 220, fogFar: 1000,
    snow: 0xf3f7fc, ice: 0xb6d2e8, rock: 0x6e7663,
    trunk: 0x6b4a2e, foliage: 0x486b42,
    treeMul: 1.35, rockMul: 0.6, roughMul: 0.75, mogulMul: 0.9, cliffMul: 0.55,
    hemiSky: 0xdcecff, hemiGround: 0x9aa89b, hemiI: 0.9, sunCol: 0xfff0c8, sunI: 1.8,
  },
  quebec: {
    eventA: 0x2456a8, eventB: 0x6fd9e8, // venue accent: banners/panels + lights/trim
    skyTop: 0x3d7cc0, skyBottom: 0xdceaf6, fog: 0xdae8f4, fogNear: 200, fogFar: 900,
    snow: 0xf0f5fb, ice: 0x9cc2e0, rock: 0x877672,
    trunk: 0x4a3a28, foliage: 0x27503c,
    treeMul: 1.5, rockMul: 0.7, roughMul: 0.85, mogulMul: 1.1, cliffMul: 0.7,
    hemiSky: 0xcfe2f8, hemiGround: 0x8d99a8, hemiI: 0.85, sunCol: 0xffeec0, sunI: 1.7,
  },
  colorado: {
    eventA: 0xd96b1f, eventB: 0x35c0a0, // venue accent: banners/panels + lights/trim
    skyTop: 0x3f83c9, skyBottom: 0xe6f0f8, fog: 0xe2ecf6, fogNear: 240, fogFar: 1100,
    snow: 0xf4f8fd, ice: 0xaccbe6, rock: 0x8494a6,
    trunk: 0x5a4630, foliage: 0x2e5d46,
    treeMul: 1.0, rockMul: 1.1, roughMul: 1.0, mogulMul: 1.0, cliffMul: 1.0,
    hemiSky: 0xcfe6ff, hemiGround: 0x9c9484, hemiI: 0.85, sunCol: 0xfff0d0, sunI: 1.9,
  },
  utah: {
    eventA: 0xa8262e, eventB: 0xf0a840, // venue accent: banners/panels + lights/trim
    skyTop: 0x2f7ac8, skyBottom: 0xe4f0fa, fog: 0xe6f0fa, fogNear: 230, fogFar: 1050,
    snow: 0xf6fafe, ice: 0xb8d6ee, rock: 0xa25a3c,
    trunk: 0x5a4630, foliage: 0x2e5d46,
    treeMul: 0.85, rockMul: 1.2, roughMul: 1.15, mogulMul: 0.8, cliffMul: 1.1,
    hemiSky: 0xd4e9ff, hemiGround: 0x8e99ab, hemiI: 0.85, sunCol: 0xfff4d8, sunI: 2.0,
  },
  bc: {
    eventA: 0x1f7f78, eventB: 0x9fe8d0, // venue accent: banners/panels + lights/trim
    skyTop: 0x5580a8, skyBottom: 0xd4e0e8, fog: 0xd0dde6, fogNear: 150, fogFar: 720,
    snow: 0xeef3f8, ice: 0xa4c4da, rock: 0x525e66,
    trunk: 0x4a3826, foliage: 0x1f4534,
    treeMul: 1.6, rockMul: 0.9, roughMul: 1.05, mogulMul: 1.0, cliffMul: 1.3,
    hemiSky: 0xc2d4e2, hemiGround: 0x828e96, hemiI: 0.95, sunCol: 0xf2ead8, sunI: 1.35,
  },
  chile: {
    eventA: 0xc03028, eventB: 0xf5a623, // venue accent: banners/panels + lights/trim
    skyTop: 0x2a6ec2, skyBottom: 0xeaf2f8, fog: 0xe8f0f6, fogNear: 280, fogFar: 1300,
    snow: 0xf5f8fc, ice: 0xbad2e6, rock: 0x9a6f46,
    trunk: 0x6a5a40, foliage: 0x5d6b48,
    treeMul: 0.06, rockMul: 2.2, roughMul: 1.35, mogulMul: 0.7, cliffMul: 1.5,
    hemiSky: 0xd8e8fa, hemiGround: 0xa89a80, hemiI: 0.9, sunCol: 0xfff6e0, sunI: 2.1,
  },
  nz: {
    eventA: 0x0f8f9f, eventB: 0xc4ec4e, // venue accent: banners/panels + lights/trim
    skyTop: 0x3579b8, skyBottom: 0xe2ecf2, fog: 0xe0eaf0, fogNear: 260, fogFar: 1200,
    snow: 0xf2f6fa, ice: 0xb0cce0, rock: 0x8e8b7c,
    trunk: 0x7a6a4a, foliage: 0x8a8250,
    treeMul: 0.1, rockMul: 1.9, roughMul: 1.25, mogulMul: 1.15, cliffMul: 1.35,
    hemiSky: 0xd2e4f2, hemiGround: 0xa0987e, hemiI: 0.9, sunCol: 0xfff2d4, sunI: 1.95,
  },
  swiss: {
    eventA: 0xd0202a, eventB: 0xf4f9ff, // venue accent: banners/panels + lights/trim
    skyTop: 0x2560a8, skyBottom: 0xdfeaf6, fog: 0xdde9f4, fogNear: 240, fogFar: 1150,
    snow: 0xf6f9fd, ice: 0xbcd8f0, rock: 0x939aa6,
    trunk: 0x4f4030, foliage: 0x2a5240,
    treeMul: 0.7, rockMul: 1.3, roughMul: 1.2, mogulMul: 0.95, cliffMul: 1.7,
    hemiSky: 0xd0e4fa, hemiGround: 0x8b95a5, hemiI: 0.85, sunCol: 0xfff2d0, sunI: 2.0,
  },
  japan: {
    eventA: 0xd543a0, eventB: 0x67e8f9, // venue accent: banners/panels + lights/trim
    // night session under the lights
    skyTop: 0x141238, skyBottom: 0x5a4e8e, fog: 0x4a4272, fogNear: 140, fogFar: 620,
    snow: 0xdfe2f2, ice: 0x9aa4cc, rock: 0x474b63,
    trunk: 0xd8d0c0, foliage: 0x3d5a4a,
    treeMul: 1.45, rockMul: 0.6, roughMul: 0.9, mogulMul: 0.75, cliffMul: 0.8,
    hemiSky: 0x7a74b0, hemiGround: 0x3c3a56, hemiI: 0.75, sunCol: 0xbcc8ff, sunI: 1.0,
  },
};
