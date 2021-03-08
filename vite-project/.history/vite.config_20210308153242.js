import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // css: {

  // },
  // esbuild: {}
  alias: {
    '@': path.join(__dirname, 'src'),
    'comps': path.join(__dirname, 'src/components'),
    'views': path.join(__dirname, 'src/views'),
    'apis': path.join(__dirname, 'src/apis'),
    'utils': path.join(__dirname, 'src/utils'),
    'routes': path.join(__dirname, 'src/routes'),
    'styles': path.join(__dirname, 'src/styles')
  },
  plugins: [vue()]
})
