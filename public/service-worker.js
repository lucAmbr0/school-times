self.addEventListener('install', (event) => {
  const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '../src/assets/fonts/Inter.ttf',
    '../src/assets/fonts/Inter-Italic.ttf',
    '../src/assets/fonts/material-symbols-outlined.woff2'
  ];

  event.waitUntil(
    caches.open('vite-cache-v1').then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If there's a cached response, return it
      if (cachedResponse) return cachedResponse;

      // Otherwise, fetch and cache dynamically
      return fetch(event.request).then((response) => {
        // Only cache requests for assets that can be cached (e.g., images, js, css)
        if (event.request.url.includes('.jpg') || event.request.url.includes('.js') || event.request.url.includes('.css')) {
          caches.open('vite-cache-v1').then((cache) => {
            cache.put(event.request, response.clone());
          });
        }
        return response;
      });
    })
  );
});
