import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'School Times',
        short_name: 'School Times',
        start_url: '/',
        display: 'standalone',
        background_color: "#151515",
        theme_color: "#151515",
        icons: [
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/icons/icon-any-192x192.png?raw=true",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/icons/icon-any-512x512.png?raw=true",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/icons/icon-maskable-192x192.png?raw=true",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/icons/icon-maskable-512x512.png?raw=true",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
        screenshots: [
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/mobile-screenshot1.png?raw=true",
            "sizes": "1082x2402",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/mobile-screenshot1.png?raw=true",
            "sizes": "1082x2402",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/mobile-screenshot1.png?raw=true",
            "sizes": "1082x2402",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/mobile-screenshot1.png?raw=true",
            "sizes": "1082x2402",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/mobile-screenshot1.png?raw=true",
            "sizes": "1082x2402",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/mobile-screenshot1.png?raw=true",
            "sizes": "1082x2402",
            "type": "image/png",
            "platform": "mobile"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
  publicDir: 'public',
});
