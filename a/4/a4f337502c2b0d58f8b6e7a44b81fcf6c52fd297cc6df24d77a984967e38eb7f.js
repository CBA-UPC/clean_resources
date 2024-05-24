'use strict';

console.log('Started', self);
self.addEventListener('push', function (event) {
    console.log('Received a push message', event);
    event.waitUntil(
        fetch('/push/latest').then(function (response) {
            if (response.status !== 200) {
                console.log('Server code: ' + response.status);
                throw new Error('Server code: ' + response.status);
            }

            return response.json().then(function (data) {
                return self.registration.showNotification(
                    data.title,
                    {
                        tag: data.id,
                        icon: '/static/img/push_icon.png',
                        data: {
                        url: data.url
                        }
                    }
                );
            });
        }).catch(
    );
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();

    var url = event.notification.data.url;

    event.waitUntil(
        clients.matchAll({
            type: "window"
        })
            .then(function (clientList) {
                for (var i = 0; i < clientList.length; i++) {
                    var client = clientList[i];
                    if (client.url == '/' && 'focus' in client)
                        return client.focus();
                }
                if (clients.openWindow) {
                    return clients.openWindow(url);
                }
            })
    );
});
self.addEventListener('fetch', function(e) {
	//console.log(e.request.url);
	  e.respondWith(
	    caches.match(e.request).then(
	  );});