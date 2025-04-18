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
        description: 'An app to manage school schedules and tasks',
        start_url: '/',
        display: 'standalone',
        background_color: "#151515",
        theme_color: "#ffffff",
        icons: [
          {
            src: 'icons/icon-any-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/icon-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'icons/icon-any-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/icon-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        "screenshots": [
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/Home.png?raw=true",
            "sizes": "1417x2862",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/DarkMode.png?raw=true",
            "sizes": "1417x2862",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/Pine.png?raw=true",
            "sizes": "1417x2862",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/Explore.png?raw=true",
            "sizes": "1417x2862",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/Settings.png?raw=true",
            "sizes": "1417x2862",
            "type": "image/png",
            "platform": "mobile"
          },
          {
            "src": "https://github.com/lucAmbr0/school-times/blob/main/public/screenshots/Themes.png?raw=true",
            "sizes": "1417x2862",
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
