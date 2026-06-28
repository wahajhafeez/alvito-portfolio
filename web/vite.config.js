import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'query-vendor': ['@tanstack/react-query', 'axios', 'zustand'],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});
