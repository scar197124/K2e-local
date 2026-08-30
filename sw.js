const CACHE_NAME = 'k2e-local-v2.0.0-rc.45';
const APP_SHELL = [
  './','./index.html','./app.html','./manifest.json','./robots.txt','./sitemap.xml',
  './icon-192.png','./icon-512.png',
  './assets/k2e-local-brand-night.png','./assets/k2e-local-social-preview.png',
  './assets/chart.umd.js',
  './assets/k2e-evolution-rc38.css','./assets/k2e-evolution-rc38.js',
  './assets/k2e-advisor-rc39.css','./assets/k2e-advisor-rc39.js',
  './assets/k2e-forecast-rc40.css','./assets/k2e-forecast-rc40.js',
  './assets/k2e-timeline-rc41.css','./assets/k2e-timeline-rc41.js','./assets/k2e-smart-hub-rc42.css','./assets/k2e-smart-hub-rc42.js','./assets/k2e-ui-polish-rc43.css','./assets/k2e-ui-polish-rc43.js','./assets/k2e-goals-rc44.css','./assets/k2e-goals-rc44.js',
  './assets/k2e-consolidation-rc45.css','./assets/k2e-consolidation-rc45.js'
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
