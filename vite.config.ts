import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      rollupOptions: {
        input: {
          main: path.resolve('index.html'),
          jeddah: path.resolve('jeddah/index.html'),
          makkah: path.resolve('makkah/index.html'),
          rabigh: path.resolve('rabigh/index.html'),
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/motion')) {
              return 'vendor-motion';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
          },
        },
      },
      minify: 'esbuild',
      cssMinify: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000,
    },
    esbuild: {
      legalComments: 'none',
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
      },
    },
    preview: {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
      },
    },
  };
});
