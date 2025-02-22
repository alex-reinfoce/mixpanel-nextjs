import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/action.ts", "src/browser-info.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "next"],
});
