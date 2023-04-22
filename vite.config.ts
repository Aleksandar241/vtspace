import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@atoms', replacement: path.resolve(__dirname, 'src/components/atoms') },
      { find: '@molecules', replacement: path.resolve(__dirname, 'src/components/molecules') },
      { find: '@organisms', replacement: path.resolve(__dirname, 'src/components/organisms') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles/styles.scss') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') }
    ]
  },
  css: {
    devSourcemap: true
  }
});
