importScripts("precache-manifest.f91517413565eacf9763c4c6ffe83181.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

if (workbox) {
  workbox.precaching.precache(self.__precacheManifest)

  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request)
      })
    )
  })
}

self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.');
  console.log(
    `[Service Worker] Push had this data: "${event.data.text()}"`
  );

  let data = JSON.parse(event.data.text())

  const title = data.notification.title;
  const options = {
    body: data.notification.body,
    icon: 'images/icon.png',
    badge: 'images/badge.png',
  };

  event.waitUntil(registration.showNotification(title, options));
});

