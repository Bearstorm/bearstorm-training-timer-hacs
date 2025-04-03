
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "BearstormTimer",
      fileName: () => "bearstorm-timer.js",
      formats: ["iife"]
    },
    outDir: "dist",
    emptyOutDir: true
  }
});
