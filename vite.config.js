import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '.', // Dito nito ilalagay ang built files sa labas mismo
    assetsDir: 'assets',
    emptyOutDir: false, // Huwag buburahin ang source files mo sa root!
  }
})