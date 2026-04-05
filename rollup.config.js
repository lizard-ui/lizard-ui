import { copyFileSync, mkdirSync } from 'node:fs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/** Inline Rollup plugin: copies src/styles/ into dist/styles/ after each build. */
const copyStyles = {
  name: 'copy-styles',
  writeBundle() {
    mkdirSync('dist/styles', { recursive: true });
    copyFileSync('src/styles/themes.css', 'dist/styles/themes.css');
  },
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react', 'react-markdown', 'remark-gfm'],
  plugins: [
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    copyStyles,
  ],
};
