import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/treasure-hunt-game/',
  plugins: [vue()] // 启用 Vue 插件，让 Vite 能解析 .vue 文件
})
