self.addEventListener('notificationclick', function(event) {
    const target = event.notification.data.link || 'https://www.skelbiu.lt/?no-link';
    event.notification.close();
    event.waitUntil(
        self.clients.matchAll(
            {
                type: 'window',
                includeUncontrolled: true
            }
        ).then(function(clientList) {
            for (var i = 0; i < clientList.length; i++) {
                var client = clientList[i];
                if (client.url == target && 'focus' in client) {
                    return client.focus();
                }
            }

            return clients.openWindow(target);
        }));
});

importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-messaging.js');

firebase.initializeApp({
    'apiKey': 'AIzaSyAzb3vZIv84ZDz8m2g5SiNEPFkGcoSgcd0',
    'messagingSenderId': '395605984809'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('Handling background message ', payload);
    payload.data.data = payload.data;
    return self.registration.showNotification(payload.data.title, payload.data);
});