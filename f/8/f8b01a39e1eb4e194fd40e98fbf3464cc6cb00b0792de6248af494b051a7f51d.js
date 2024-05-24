importScripts('https://app.najva.com/static/cdn/najva-app/najva-app.js');
importScripts('https://app.najva.com/static/cdn/najva-app/najva-messaging.js');

// configuration

var config = {
    messagingSenderId: "334645784830"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

function isMobileUserAgent() {
    let check = false;
    ((self.navigator.userAgent || self.navigator.vendor);
    return check;
}
const isMobile = isMobileUserAgent();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);

    const notificationTitle = payload.data.title;

    var expireTime = parseInt(payload.data.expireTime);

    const notificationOptions = {
        body: payload.data.body,
        icon: payload.data.icon,
        image: payload.data.image,
        requireInteraction: true,
        data: payload.data,
        silent: payload.data.silent || false,
        dir: payload.data.direction || 'auto',
        tag: payload.data.tag || '',
        renotify: payload.data.renotify || false,
        timestamp: payload.data.timestamp,
        badge: payload.data.badge,
        vibrate: payload.data.vibrate,
        sound: payload.data.sound,
    };
    let notif_actions = [];
    if (payload.data.btn1_enabled && payload.data.btn1_action) {
        if (isMobile) {
            if (
                payload.data.btn1_action === "open-link"
                || payload.data.btn1_action === "open-app"
                || payload.data.btn1_action === "open-call"
                || payload.data.btn1_action === "open-sms"
                || payload.data.btn1_action === "open-telegram-channel"
                || payload.data.btn1_action === "join-telegram-channel"
            ) {
                notif_actions.push({
                    title: payload.data.btn1_title,
                    icon: payload.data.btn1_icon,
                    action: "btn1_clicked",
                });
            }
        }
        else {
            if (
                payload.data.btn1_action === "open-link"
                || payload.data.btn1_action === "open-telegram-channel"
                || payload.data.btn1_action === "join-telegram-channel"
            ) {
                notif_actions.push({
                    title: payload.data.btn1_title,
                    icon: payload.data.btn1_icon,
                    action: "btn1_clicked",
                });
            }
        }
    }
    if (payload.data.btn2_enabled && payload.data.btn2_action) {
        if (isMobile) {
            if (
                payload.data.btn2_action === "open-link"
                || payload.data.btn2_action === "open-app"
                || payload.data.btn2_action === "open-call"
                || payload.data.btn2_action === "open-sms"
                || payload.data.btn2_action === "open-telegram-channel"
                || payload.data.btn2_action === "join-telegram-channel"
            ) {
                notif_actions.push({
                    title: payload.data.btn2_title,
                    icon: payload.data.btn2_icon,
                    action: "btn2_clicked",
                });
            }
        }
        else {
            if (
                payload.data.btn2_action === "open-link"
                || payload.data.btn2_action === "open-telegram-channel"
                || payload.data.btn2_action === "join-telegram-channel"
            ) {
                notif_actions.push({
                    title: payload.data.btn2_title,
                    icon: payload.data.btn2_icon,
                    action: "btn2_clicked",
                });
            }
        }
    }
    notificationOptions["actions"] = notif_actions;

    var notificationPromise = self.registration.showNotification(notificationTitle,
        notificationOptions);

    notificationPromise.then(function () {
        registration.getNotifications().then(function (notifications) {
            var current_notification = notifications[notifications.length - 1];
            console.log(current_notification);
            if (expireTime > 0) {
                setTimeout( expireTime);
            }
        });
    });

    return notificationPromise;
});


self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event.notification);
    event.notification.close();
    event.notification.clicked = true;
    if (event.action === "btn1_clicked") {
        event.waitUntil(
            clients.matchAll({
                type: "window",
                includeUncontrolled: true
            })
                .then(function (clientList) {
                    const action = event.notification.data.btn1_action;
                    const final_address = event.notification.data.btn1_final_address;
                    const content = event.notification.data.btn1_content;
                    let url = final_address;
                    if (isMobile) {
                        url = `https://click.najva.com/call-actions?action=${encodeURIComponent(action)}&final_address=${encodeURIComponent(final_address)}&content=${encodeURIComponent(content)}`;
                    }
                    if (clients.openWindow) {
                        return clients.openWindow(url);
                    }
                })
        );
    }
    else if (event.action === "btn2_clicked") {
        event.waitUntil(
            clients.matchAll({
                type: "window",
                includeUncontrolled: true
            })
                .then(function (clientList) {
                    const action = event.notification.data.btn2_action;
                    const final_address = event.notification.data.btn2_final_address;
                    const content = event.notification.data.btn2_content;
                    let url = final_address;
                    if (isMobile) {
                        url = `https://click.najva.com/call-actions=${encodeURIComponent(action)}&final_address=${encodeURIComponent(final_address)}&content=${encodeURIComponent(content)}`;
                    }
                    if (clients.openWindow) {
                        return clients.openWindow(url);
                    }
                })
        );
    }
    else {
        event.waitUntil(
            clients.matchAll({
                type: "window",
                includeUncontrolled: true
            })
                .then(function (clientList) {
                    var url = "";
                    if (event.notification.data.complete_url) {
                        url = event.notification.data.complete_url
                    }
                    else {
                        url = "https://click.najva.com/redirect/?notification_id=" + event.notification.data.notification_id;
                        url += '&website_id=' + event.notification.data.website_id;
                        url += '&api_key=' + event.notification.data.api_key;
                        url += "&next=" + event.notification.data.url;
                    }

                    for (var i = 0; i < clientList.length; i++) {
                        var client = clientList[i];
                        if (client.url === url && 'focus' in client)
                            return client.focus();
                    }
                    if (clients.openWindow) {
                        return clients.openWindow(url);
                    }
                })
        );
    }
});

self.addEventListener('notificationclose', function (event) {
    var p = new Promise(function (resolve, reject) {
        if (event.notification.clicked) {
            resolve('ok');
        }
    });
    event.waitUntil(p);
    event.notification.close();
});


