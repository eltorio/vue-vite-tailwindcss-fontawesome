/*!
=========================================================
* © 2022 Ronan LE MEILLAT for %CLIENT_NAME%
=========================================================
This website use:
- Vite, Vue3, FontAwesome 6, TailwindCss 3
- And many others
*/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vitePluginFontawesomeminify from '@highcanfly-club/fontawesome'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginFontawesomeminify()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './node_modules'),
      '§': path.resolve(__dirname, './'),
    },
  }
})
