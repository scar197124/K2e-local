const CACHE_NAME = 'k2e-local-v2.0.0-rc.24';
const APP_SHELL = [
  './','./index.html','./app.html','./manifest.json','./robots.txt','./sitemap.xml',
  './icon-192.png','./icon-512.png','./assets/k2e-local-brand-dark.png',
  './assets/k2e-local-brand-detailed.png','./assets/k2e-local-brand-night.png',
  './assets/k2e-local-mark.png','./assets/k2e-local-social-preview.png',
  './assets/k2e-local-readme-banner.jpg',
  './assets/chart.umd.js'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const request = event.request;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      return response;
    }).catch(() => caches.match(request).then(hit => hit || caches.match('./app.html') || caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response && response.status === 200 && response.type === 'basic') {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  })));
});
