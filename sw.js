const CACHE_NAME = 'noog-cache-v5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './src/style.css',
  './src/game.js',
  './src/ui.js',
  './src/levels.js',
  './src/sw-register.js',
  './icons/icon-512.jpg'
];

// Install Service Worker and cache all shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Service Worker and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch handler - cache first, fallback to network
self.addEventListener('fetch', (event) => {
  // Prevent caching API calls or non-GET requests if any exist
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        // Cache new resource dynamically if it's from our own origin
        if (response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(() => {
        // Offline fallback can be defined here if necessary
      });
    })
  );
});
