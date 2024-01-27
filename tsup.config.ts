import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: [
    "src/index.ts",
    "src/object.ts",
    "src/events.ts",
    "src/formatting.ts",
  ],
  entry: {
    index: "src/index.ts",
    "object/index": "src/object.ts",
    "events/index": "src/events.ts",
    "formatting/index": "src/formatting.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  shims: true,
  skipNodeModulesBundle: true,
});
