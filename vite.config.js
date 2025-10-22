import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
<<<<<<< HEAD
  base: '/treasure-hunt-game/', // 替换为你的仓库名
=======
  base: '/treasure-hunt-game/',
>>>>>>> be6c2b2fafcc178dfdec2ea7ccf8c76d6c2363e8
  plugins: [vue()] // 启用 Vue 插件，让 Vite 能解析 .vue 文件
})
