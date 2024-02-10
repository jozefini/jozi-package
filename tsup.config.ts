import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'events/index': 'src/events/index.ts',
    'object/index': 'src/object/index.ts',
    'string/index': 'src/string/index.ts',
    'utils/index': 'src/utils/index.ts',
    'html/index': 'src/html/index.ts',
  },
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
  // shims: true,
  // skipNodeModulesBundle: true,
})
