import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  root: path.join(rootDir, 'website'),
  build: {
    outDir: path.join(rootDir, 'website-dist'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'lizard-ui': path.join(rootDir, 'src/index.ts'),
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    fs: {
      allow: [rootDir],
    },
  },
});
