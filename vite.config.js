import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/react-template/' : '/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
}))
