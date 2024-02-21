import { defineConfig } from "tsup";

export default defineConfig({
    format: ["esm", "cjs"],
    entryPoints: ["./Source/index.ts"],
    dts: true,
    shims: true,
    clean: true,
    outDir: "./Build",
    target: "es6",
    skipNodeModulesBundle: true,
    sourcemap: true,
    minify: true,
});