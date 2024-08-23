const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
<<<<<<< HEAD
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
=======
const { CacheFirst } = require('workbox-strategies');
>>>>>>> 79f3e56d1233ca5665868c6c2831da93c2f9d8bb
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
<<<<<<< HEAD
      maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
=======
      maxAgeSeconds: 30 * 24 * 60 * 60,
>>>>>>> 79f3e56d1233ca5665868c6c2831da93c2f9d8bb
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

<<<<<<< HEAD
// Register route for navigation requests
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Asset caching implementation
registerRoute(
  ({ request }) => request.destination === 'style' || 
                   request.destination === 'script' || 
                   request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);
=======
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
registerRoute();
>>>>>>> 79f3e56d1233ca5665868c6c2831da93c2f9d8bb
