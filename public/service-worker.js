self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('school-times-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icons/icon-any-192x192.png',
        '/icons/icon-any-512x512.png',
        '/icons/icon-maskable-192x192.png',
        '/icons/icon-maskable-512x512.png',
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['school-times-cache'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});