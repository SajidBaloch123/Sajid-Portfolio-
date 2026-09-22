import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Sajid-Portfolio-/',    // ✅ Exact match
  publicDir: 'public',
})
