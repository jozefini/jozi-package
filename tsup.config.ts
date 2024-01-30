import { defineConfig } from 'tsup'

export default defineConfig({
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
  outDir: '.',
  clean: true,
  minify: true,
  shims: true,
  skipNodeModulesBundle: true,
})
