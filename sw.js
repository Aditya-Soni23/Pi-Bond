const CACHE_NAME = 'pi-bond-v1';
const ASSETS = [
  './',
  './index.html',
  './logo.png',
  './image1.png',
  './image2.png',
  './image3.png',
  './image4.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});