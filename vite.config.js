import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Professional-Portfolio/',    // ✅ Aapke repo ka exact naam
  publicDir: 'public',
})