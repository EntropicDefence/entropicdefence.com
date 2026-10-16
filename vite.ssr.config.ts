import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

/**
 * SSR-bygge för prerendering. Samma alias/plugins som klientbygget, men
 * skriver bara entry-server-bundlen till dist-server/ — ingen public/-kopia,
 * inget index.html.
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist-server',
    emptyOutDir: true,
    copyPublicDir: false,
  },
})
