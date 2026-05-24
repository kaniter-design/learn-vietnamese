// Hanoi Survival Vietnamese — Service Worker
// Cache name includes version for easy updates
const CACHE = 'hanoi-vn-v1';

// Assets to pre-cache on install
const PRECACHE = [
  '.',
  'index.html',
  'data.js',
  'design-tokens.css',
  'manifest.json'
];

// Install: pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(PRECACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      // Return cached response if available
      if (cached) return cached;

      // Otherwise fetch from network
      return fetch(event.request).then((response) => {
        // Don't cache API responses
        if (event.request.url.includes('/api/')) {
          return response;
        }

        // Cache successful responses
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('.');
        }
        // Return a simple offline indicator for other assets
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
