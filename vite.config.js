import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

export default {
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      }
    ],
  },
  plugins: [
    vue(),
    WindiCSS(),
  ],
  build: {
    polyfillDynamicImport: false,
  },
  server: {
    host: 'note'
  },
  optimizeDeps: {
    entries: ['axios', 'vue', 'vue-router']
  }
}
