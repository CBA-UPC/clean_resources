importScripts('https://www.gstatic.com/firebasejs/5.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.1/firebase-messaging.js');



firebase
    .initializeApp({
        'apiKey': 'AIzaSyDkGLO2v5v9B4csHD23WgOYqa3uKztwr4Y',
        'messagingSenderId': '284834648299'
    });

firebase
    .messaging()
    .setBackgroundMessageHandler(function (payload) {
        payload.data.data = payload.data;

        return self
            .registration
            .showNotification(
                payload.data.title,
                payload.data
            );
    });


self.addEventListener('notificationclick', function (event) {
    const target = event.notification.data.link || 'https://autoplius.lt/';

    event.notification.close();
    event
        .waitUntil(
            clients
                .matchAll({
                    type: 'window',
                    includeUncontrolled: true
                })
                .then(function (clientList) {
                    for (let i = 0; i < clientList.length; i++) {
                        let client = clientList[i];

                        if (client.url === target && 'focus' in client) {
                            return client.focus();
                        }
                    }

                    return clients.openWindow(target);
                })
        );
});
