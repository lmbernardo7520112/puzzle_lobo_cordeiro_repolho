/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@domain': path.resolve(__dirname, './src/game/domain'),
      '@application': path.resolve(__dirname, './src/game/application'),
      '@ui': path.resolve(__dirname, './src/game/ui'),
      '@shared': path.resolve(__dirname, './src/shared')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  }
})
