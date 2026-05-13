import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
     alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
      { find: '~pages', replacement: path.resolve(__dirname, 'src/_legacy/pages') },
      { find: '~components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '~layout', replacement: path.resolve(__dirname, 'src/app/layout') },
      { find: '~styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '~assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '~ressources', replacement: path.resolve(__dirname, 'src/ressources') },
      { find: '~animations', replacement: path.resolve(__dirname, 'src/animations') }
     ],
    },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "~/styles/variables" as *;
          @use "~/styles/mixins" as *;
        `
      }
    }
  }
})
