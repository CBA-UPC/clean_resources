﻿var HIDE_NOTIFICATION_AFTER = false;
var apiUrl = 'https://pahaber.tmgrup.com.tr';

self.addEventListener('install'});

importScripts('https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.1/firebase-messaging.js');
var firebaseConfig = {
    apiKey: "AIzaSyD9P16P88n4ErZL4CoHkCc-QagdKEuaXg8",
    authDomain: "fir-webpush-28ff4.firebaseapp.com",
    databaseURL: "https://fir-webpush-28ff4.firebaseio.com",
    projectId: "fir-webpush-28ff4",
    storageBucket: "fir-webpush-28ff4.appspot.com",
    messagingSenderId: "994314251369",
    appId: "1:994314251369:web:76f25b45b7623642c846f8"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
var recentNotif;

messaging.setBackgroundMessageHandle});

self.addEventListener('message'});

self.addEventListener('notificationclick', function (event) {
    if (event.action === 'close') {
        return closeNotifications();
    }

    if (!event.notification || !event.notification.data || !event.notification.data.payload)
        return event.notification.close();
    else {
        event.notification.close();
        return event.waitUntil(
            onNotificationClicked(event)
        );
    }
});

function onNotificationClicked(event) {
    if (clients.openWindow) {
        var url = event.notification.data.payload.ContentUrl;
        if (!url) {
            url = event.notification.data.payload.Url;
        }

        if ((url && url.indexOf('/clickredirect') == -1) || event.notification.data.payload.FirstButtonLink || event.notification.data.payload.SecondButtonLink) {
            fetch(apiUrl + '/click?pushid=' + event.notification.data.payload.Id, {
                method: 'get',
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8"
                },
                mode: 'cors'
            });
        }

        if (event.action === 'OneClickButton') {
            return clients.openWindow(event.notification.data.payload.FirstButtonLink);
        }
        else if (event.action === 'TwoClickButton') {
            return clients.openWindow(event.notification.data.payload.SecondButtonLink);
        }
        else {
            return clients.openWindow(url)
        }
    }
    return;
}

function showNotification(notification) {
    if (notification == null || (recentNotif && recentNotif.Id == notification.Id))
        return;

    recentNotif = notification;

    var title = notification.Title;
    var body = notification.Body;
    var iconUrl = notification.Logo;
    var tag = notification.Tag;
    var notificationOptionActions = [
        { action: 'open', title: 'Devam Et' }
    ];

    if (notification.ButtonType == "1") {
        notificationOptionActions = [
            {
                action: "OneClickButton",
                title: notification.FirstButtonTitle,
            }
        ];
    }
    else if (notification.ButtonType == "2") {
        notificationOptionActions = [
            {
                action: "OneClickButton",
                title: notification.FirstButtonTitle
            },
            {
                action: 'TwoClickButton',
                title: notification.SecondButtonTitle
            }
        ];
    }

    var notificationOptionImage = "";
    if (notification.LogoType == "2") {
        notificationOptionImage = notification.Image;
    }

    if (HIDE_NOTIFICATION_AFTER) {
        setTimeout(closeNotifications, HIDE_NOTIFICATION_AFTER * 1000);
    }

    if (Math.ceil(Math.random() * 20) == 3) {
        setTimeout(function () {
            fetch(apiUrl + '/impression?s=1&pushid=' + notification.Id, {
                method: 'get',
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8"
                },
                mode: 'cors'
            });
        }, (Math.ceil(Math.random() * 15400)));
    }

    return self.registration.showNotification(title, {
        body: body,
        icon: iconUrl,
        tag: tag,
        image: notificationOptionImage,
        data: { payload: notification },
        actions: notificationOptionActions
    });
}

function delay(t, v) {
    return new Promis});
}

function closeNotifications() {
    self.registration.getNotifications().the});
}