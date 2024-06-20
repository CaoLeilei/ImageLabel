import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import baseSSL from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    baseSSL(),
    vue()
  ],
  server: {
    https: true,
  },
})
