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
      { find: '@routers', replacement: path.resolve(__dirname, 'src/routers') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles/styles.scss') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@contexts', replacement: path.resolve(__dirname, 'src/contexts') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') }
    ]
  },
  css: {
    devSourcemap: true
  }
});
