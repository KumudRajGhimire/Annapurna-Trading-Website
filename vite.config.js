import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      'ossie-unnymphal-nonrefractively.ngrok-free.dev',
    ],
    port: 5174,
    strictPort: true,
  },
})
