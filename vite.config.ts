import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills';


// https://vite.dev/config/
export default defineConfig({

  server: {
    port: 3000,
  },

  plugins: [
    react(),
    nodePolyfills(),
  ],
})
