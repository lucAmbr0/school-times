self.addEventListener('install', (event) => {
  const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '../src/assets/fonts/Inter.ttf',
    '../src/assets/fonts/Inter-Italic.ttf',
    '../src/assets/fonts/material-symbols-outlined.woff2'
  ];
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('Caching files...');
          return cache.addAll(filesToCache);
        })
    );
  });
  
  self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
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
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
})