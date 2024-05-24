/* Kraken Service Worker 2019 */
'use strict';
var krakenCloudUrl = 'https://cdn.krakenoptimize.com';

self.addEventListener('push', function (event) {
    const pusher = () => {
        try {
            var payload = JSON.parse(event.data.text());

            return self.registration.showNotification(payload.Title, {
                body: payload.Body,
                icon: payload.Icon,
                badge: payload.Badge,
                image: payload.Image,
                vibrate: payload.Vibrate.split(','),
                data: {
                    link: payload.Link,
                    msgid: payload.GuidId
                },
                tag: payload.Tag,
                renotify: payload.Renotify,
                silent: payload.Silent,
                requireInteraction: payload.RequireInteraction
            }).then(
                function () {
                    getEndpoint()
                        .the});
                }
            );
        }
        catch (e) {
            return;
        }
    };
    event.waitUntil(pusher());
});

self.addEventListener('notificationclick', function (event) {
    if (event.notification.data === null) return;
    getEndpoint()
        .then(function (endpoint) {
            callGet('/api/pushtrace/clicked?m=' + event.notification.data.msgid + '&e=' + endpoint);
        });
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.link)
    );
});

self.addEventListener('install'});
self.addEventListener('activate'});

function callGet(url) {
    var u = krakenCloudUrl + url;
    fetch(u, { method: "GET", mode: "no-cors" })
        .catc});
}

function getEndpoint() {
    return self.registration.pushManager.getSubscription()
        .then(function (subscription) {
            if (subscription) {
                return subscription.endpoint;
            }
        });
}

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.includes('hellonewkrakensubscriber')) return;

    event.respondWith(async function () {
        var pushurl = new URL(event.request.url);
        var pushtitle = pushurl.searchParams.get("title");
        var pushicon = pushurl.searchParams.get("icon");

        if (pushtitle !== null) {
            self.registration.showNotification(pushtitle, {
                icon: pushicon
            });
        }

        return new Response(".", { "status": 200 });
    }());

});

self.addEventListener('pushsubscriptionchange', function (event) {
    event.waitUntil(
        fetch(krakenCloudUrl + '/api/pushtrace/pushsubscriptionchange', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                oldEndpoint: event.oldSubscription ? event.oldSubscription.endpoint : null,
                newEndpoint: event.newSubscription ? event.newSubscription.endpoint : null,
                newP256dh: event.newSubscription ? event.newSubscription.toJSON().keys.p256dh : null,
                newAuth: event.newSubscription ? event.newSubscription.toJSON().keys.auth : null
            })
        })
            .the})
            .catc})
    );
});