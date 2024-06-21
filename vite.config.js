import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import baseSSL from '@vitejs/plugin-basic-ssl'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // baseSSL(),
    vue(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  server: {
    https: false,
  },
  css: {
    preprocessorOptions: {
      // scss: {
      //   additionalData: `@use "~/styles/element/index.scss" as *;`,
      // },
    },
  },
})
