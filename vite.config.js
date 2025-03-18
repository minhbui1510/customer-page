import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from "tailwindcss";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind],
      preprocessorOptions: {
      scss: {
        additionalData: `@import './src/asset/styles/variables.scss';`
      }
    }
    }
  }
})
