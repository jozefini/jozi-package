import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: [
    'src/index.ts',
    'src/events/index.ts',
    'src/object/index.ts',
    'src/string/index.ts',
    'src/utils/index.ts',
    'src/html/index.ts',
  ],
  entry: {
    index: 'src/index.ts',
    events: 'src/events/index.ts',
    object: 'src/object/index.ts',
    string: 'src/string/index.ts',
    utils: 'src/utils/index.ts',
    html: 'src/html/index.ts',
  },

  format: ['cjs', 'esm'],
  dts: true,
  outDir: '',
  clean: true,
  minify: true,
  shims: true,
  skipNodeModulesBundle: true,
})
