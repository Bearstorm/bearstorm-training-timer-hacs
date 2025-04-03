import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'BearstormTimer',
      fileName: 'bearstorm-timer',
      formats: ['iife']
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        globals: {
          mqtt: 'mqtt'
        }
      }
    }
  }
});
