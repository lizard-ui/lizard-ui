import { copyFileSync, mkdirSync } from 'node:fs';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

/** Copies src/styles/ into dist/styles/ after each build. */
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
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: id =>
    id === 'react' ||
    id === 'react-dom' ||
    id.startsWith('react/') ||
    id === 'lucide-react' ||
    id === 'react-markdown' ||
    id === 'remark-gfm' ||
    id.startsWith('@radix-ui/'),
  plugins: [
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
    }),
    esbuild({
      target: 'es2022',
      tsconfig: './tsconfig.json',
      jsx: 'automatic',
    }),
    copyStyles,
  ],
};
