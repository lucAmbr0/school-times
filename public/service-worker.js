const CACHE_NAME = 'vite-pwa-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '../src/assets/fonts/Inter.ttf',
  '../src/assets/fonts/Inter-Italic.ttf',
  '../src/assets/fonts/material-symbols-outlined.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => 
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) =>
      cachedResponse || fetch(event.request)
    )
  );
});
