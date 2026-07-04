import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),],
  base: "/Plantified/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Creates a vendor chunk that contains all code from node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Keep this to remove console logs and debuggers in production builds
    esbuild: {
      drop: ['console', 'debugger'],
    },
  },
});
