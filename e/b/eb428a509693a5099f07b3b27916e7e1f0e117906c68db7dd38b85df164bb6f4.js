/* eslint-disable require-jsdoc, no-magic-numbers, camelcase, valid-jsdoc, no-debugger */

/**
 * Spark serviceWorker
 * Provides push notifications
 *
 * ! important
 * Better place this script in '/' (root) dir to allow client use max scope '/' for ServiceWorkerGlobalScope
 * Optionally, you can use Service-Worker-Allowed HTTP header
 *
 * @author Savchenko P. <specc.dev@gmail.com> vk.com/specc
 *
 * @since 2016-02-12
 * @version 0.1.6
 */

'use strict';

/**
 * Url where payload json stored
 */
const PUSH_PAYLOAD_URL = 'https://push.vc.ru/payload/latest.json';

const ONE_MINUTE = 60000;

self.addEventListener('install', ;

// self.addEventListener('activate', function(event) {});

// addEventListener('fetch', function(evt) {
// evt.respondWith(fetch(evt.request));
// });

/**
 * Push-event listener
 * @uses Push API, Notification API
 */
self.addEventListener('push', function (event) {
  // console.log('[sPusher] Got the push: %o. It\'ll be shown in %o seconds', event, delay/1000);

  event.waitUntil(

    fetch(PUSH_PAYLOAD_URL).then(function (response) {
      if (response.status !== 200) {
        throw new Error();
      }

      return response.json().then(function (data) {
        if (data.error) {
          throw new Error(data.error);
        }
        if (!data.title || !data.url) {
          throw new Error('Push title or url missed: %o', data);
        }

        var notify_data = {
          body: data.text,
          icon: data.icon,
          tag: data.tag || '',
          data: {
            url: data.url,
          },
        };

        return new Promise(resolve => {
          /**
           * Spread push notification for a one minute
           */
          var delay = Math.floor(Math.random() * ONE_MINUTE) + 10;

          console.log('[sPusher] Got the push: %o. It\'ll be shown in %o seconds', event, delay / 1000);

          setTimeout(function () {
            resolve(self.registration.showNotification(data.title, notify_data));
          }, delay);
        });
      })
        .catch(;
    })
  );
});

/**
 * Module methods
 */
// var swCore = {
//
//   /**
//    * Returns push subscribtion
//    * @usage swCore.getSubscription(self.registration).then(function(subscribtion) { console.log(subscribtion.endpoint) });
//    */
//   getSubscription: function (registration) {
//     return registration.pushManager.getSubscription();
//   },
//
// };

/**
 * Notification click handler
 * Opens tab with specified url
 */
self.addEventListener('notificationclick', function (event) {
  // console.log('Notification click: tag ', event.notification.tag);

  event.notification.close();

  var url = event.notification.data.url;

  event.waitUntil(
    window.clients.matchAll({
      type: 'window',
    })
      .then(function (windowClients) {
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];

          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        if (window.clients.openWindow) {
          return window.clients.openWindow(url);
        }
      })
  );
});
