import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import prefresh from '@prefresh/vite';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`
  },
  plugins: [
    prefresh(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
});
