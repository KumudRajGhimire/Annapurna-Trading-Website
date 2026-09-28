import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      'unplied-ardis-systemizable.ngrok-free.dev',
    ],
    port: 5174,
    strictPort: true,
  },
})
