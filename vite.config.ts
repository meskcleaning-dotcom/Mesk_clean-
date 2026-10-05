process.env.VITE_CONFIG_NATIVE_IGNORE_WARNING = 'true';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { 
  getAllServicePagesMetadata, 
  injectServiceMetaIntoHtml, 
  getServicePageMetadata, 
  generateSitemapXml,
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

      // Automatically generate and update sitemap.xml during build
      const sitemapXml = generateSitemapXml();
      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
      const publicSitemap = path.resolve('public', 'sitemap.xml');
      if (fs.existsSync(path.dirname(publicSitemap))) {
        fs.writeFileSync(publicSitemap, sitemapXml, 'utf-8');
      }

      // Ensure city files are also accessible as [city].html for hosting cleanUrls compatibility
      const cities = ['jeddah', 'makkah', 'rabigh', 'khulais'];
      for (const city of cities) {
        const cityIndex = path.join(distDir, city, 'index.html');
        if (fs.existsSync(cityIndex)) {
          fs.copyFileSync(cityIndex, path.join(distDir, `${city}.html`));
        }
      }
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url) return next();
        const urlObj = new URL(req.url, 'http://localhost');

        if (urlObj.pathname === '/m' || urlObj.pathname === '/m/' || urlObj.pathname.startsWith('/m/')) {
          res.writeHead(301, {
            Location: 'https://www.meskclean.com/jeddah',
            'Content-Type': 'text/plain; charset=utf-8'
          });
          res.end('301 Moved Permanently to https://www.meskclean.com/jeddah');
          return;
        }

        if (urlObj.pathname === '/sitemap.xml') {
          const sitemapXml = generateSitemapXml();
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.statusCode = 200;
          res.end(sitemapXml);
          return;
        }

        const cityMatch = urlObj.pathname.match(/^\/(jeddah|makkah|rabigh|khulais)\/?$/);
        if (cityMatch) {
          const city = cityMatch[1];
          const cityHtmlPath = path.resolve(city, 'index.html');
          if (fs.existsSync(cityHtmlPath)) {
            try {
              const template = fs.readFileSync(cityHtmlPath, 'utf-8');
              const transformed = await server.transformIndexHtml(req.url, template);
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.statusCode = 200;
              res.end(transformed);
              return;
            } catch (err) {
              console.error('Error serving city dev HTML:', err);
            }
          }
        }

        const match = urlObj.pathname.match(/^\/([^/?#]+)\/services\/([^/?#]+)\/?$/);
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
    plugins: [
      react(), 
      tailwindcss(), 
      servicePagesPrerenderPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon.svg'],
        manifest: {
          id: '/',
          name: 'شركة مسك للنظافة بالجموم وجدة ومكة ورابغ',
          short_name: 'مسك للنظافة',
          description: 'شركة مسك للنظافة المتخصصة في خدمات التنظيف الشاملة ومكافحة الحشرات وغسيل المكيفات بجدة ومكة ورابغ',
          theme_color: '#0284c7',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}']
        },
        devOptions: {
          enabled: true
        }
      })
    ],
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
          khulais: path.resolve('khulais/index.html'),
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
