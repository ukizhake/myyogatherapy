const CACHE_NAME = 'yoga-therapy-v1.0.0';
const STATIC_CACHE = 'yoga-therapy-static-v1.0.0';
const DYNAMIC_CACHE = 'yoga-therapy-dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/offline.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/firebase_auth.js',
  '/guna-assessment.js',
  '/ayurveda-integration.js',
  '/guna-therapeutics.js',
  '/kleshas-assessment.js',
  '/ashtanga-antarayas.js',
  '/recommendation_engine.js',
  '/therapeutic_protocols.js',
  '/practical_implementation.js',
  '/advice_engine.js',
  '/pwa.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install event - cache static files
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Static files cached');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Error caching static files:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle Firebase requests (don't cache)
  if (url.hostname.includes('firebase') || url.hostname.includes('googleapis')) {
    return;
  }

  // Skip chrome-extension and other non-cacheable schemes
  if (url.protocol === 'chrome-extension:' || url.protocol === 'moz-extension:' || url.protocol === 'chrome:') {
    return;
  }

  // Handle data files (CSV, JSON)
  if (url.pathname.includes('/data/') || url.pathname.includes('/knowledge_base/') || url.pathname.includes('/pranayama_techniques/')) {
    event.respondWith(
      caches.open(DYNAMIC_CACHE)
        .then(cache => {
          return cache.match(request)
            .then(response => {
              if (response) {
                // Return cached version and update in background
                fetch(request)
                  .then(fetchResponse => {
                    cache.put(request, fetchResponse.clone());
                  })
                  .catch(() => {
                    // Ignore fetch errors for background updates
                  });
                return response;
              }
              return fetch(request)
                .then(fetchResponse => {
                  cache.put(request, fetchResponse.clone());
                  return fetchResponse;
                });
            });
        })
    );
    return;
  }

  // Handle static files
  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(request)
          .then(fetchResponse => {
            // Don't cache if not a valid response
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }
            
            // Clone the response
            const responseToCache = fetchResponse.clone();
            
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(request, responseToCache);
              });
            
            return fetchResponse;
          });
      })
      .catch(() => {
        // Return offline page for navigation requests
        if (request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Background sync for offline data
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(
      // Handle any background sync tasks here
      Promise.resolve()
    );
  }
});

// Push notification handling
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New yoga therapy content available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Take Assessment',
        icon: '/icons/icon-96x96.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon-96x96.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Yoga Therapy', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/?action=assessment')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
