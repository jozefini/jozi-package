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
    object: "src/object.ts",
    events: "src/events.ts",
    formatting: "src/formatting.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  shims: true,
  skipNodeModulesBundle: true,
});
