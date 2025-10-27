// Service Worker for Entalogics - Automatic Cache Busting
// This ensures PWA users get instant updates on every deploy

const CACHE_NAME = 'entalogics-v1';
const STATIC_CACHE_NAME = 'entalogics-static-v1';

// Files to cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/manifest.json',
  '/favicon.svg',
  '/logo.svg'
];

// Install event - skip waiting to activate immediately
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  // Skip waiting to activate immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Service Worker: Cache failed', error);
      })
  );
});

// Activate event - claim all clients immediately
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  // Claim all clients immediately
  clients.claim();
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old caches
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - implement cache-first strategy for static assets, network-first for dynamic content
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }
  
  // Handle different types of requests
  if (isStaticAsset(request)) {
    // Static assets: Cache first strategy
    event.respondWith(cacheFirst(request));
  } else if (isHTMLPage(request)) {
    // HTML pages: Network first strategy (always get latest)
    event.respondWith(networkFirst(request));
  } else {
    // Other requests: Network first
    event.respondWith(networkFirst(request));
  }
});

// Helper function to check if request is for static assets
function isStaticAsset(request) {
  const url = new URL(request.url);
  const staticExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.css'];
  return staticExtensions.some(ext => url.pathname.endsWith(ext));
}

// Helper function to check if request is for HTML page
function isHTMLPage(request) {
  return request.headers.get('accept')?.includes('text/html') || 
         request.url.endsWith('/') ||
         !request.url.includes('.');
}

// Cache first strategy for static assets
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network first strategy for dynamic content
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Handle background sync (if supported)
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
});

// Handle push notifications (if needed in future)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  // Handle push notification here if needed
});

console.log('Service Worker: Loaded successfully');
