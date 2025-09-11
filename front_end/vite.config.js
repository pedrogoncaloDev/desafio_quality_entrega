import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'node:path'

export default defineConfig({
  plugins: [vue(), vuetify()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  }
})
