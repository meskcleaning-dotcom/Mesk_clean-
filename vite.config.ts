process.env.VITE_CONFIG_NATIVE_IGNORE_WARNING = 'true';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { 
  getAllServicePagesMetadata, 
  injectServiceMetaIntoHtml, 
  getServicePageMetadata, 
  CITIES_LIST, 
  SERVICES_LIST 
} from './src/utils/servicePagesMeta';

function servicePagesPrerenderPlugin(): Plugin {
  return {
    name: 'service-pages-prerender',
    closeBundle() {
      const distDir = path.resolve('dist');
      const templatePath = path.join(distDir, 'index.html');
      if (!fs.existsSync(templatePath)) return;
      const baseHtml = fs.readFileSync(templatePath, 'utf-8');
      const allPages = getAllServicePagesMetadata();
      for (const page of allPages) {
        const pageHtml = injectServiceMetaIntoHtml(baseHtml, page);
        const targetDir = path.join(distDir, page.cityId, 'services', page.serviceId);
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml, 'utf-8');
      }
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url) return next();
        const urlObj = new URL(req.url, 'http://localhost');
        const match = urlObj.pathname.match(/^\/(jeddah|makkah|rabigh)\/services\/([^/?#]+)\/?$/);
        if (match) {
          const [, city, service] = match;
          if (CITIES_LIST.includes(city as any) && SERVICES_LIST.includes(service)) {
            try {
              const meta = getServicePageMetadata(city as any, service);
              const template = fs.readFileSync(path.resolve('index.html'), 'utf-8');
              const withMeta = injectServiceMetaIntoHtml(template, meta);
              const transformed = await server.transformIndexHtml(req.url, withMeta);
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.statusCode = 200;
              res.end(transformed);
              return;
            } catch (err) {
              console.error('Error serving prerendered dev HTML:', err);
            }
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), servicePagesPrerenderPlugin()],
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
