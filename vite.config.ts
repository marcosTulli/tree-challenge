import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "./src/styles/variables.scss";', 
      },
    },
  },
})
