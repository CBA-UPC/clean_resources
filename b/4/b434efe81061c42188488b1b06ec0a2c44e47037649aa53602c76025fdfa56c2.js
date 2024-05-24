function sendSubscriptionToServer(subscription, type) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/subscribe-device/?type=' + type, true);
    xhttp.setRequestHeader('X_REQUESTED_WITH', "XMLHttpRequest");
    xhttp.send(JSON.stringify(subscription));
    console.log(JSON.stringify(subscription));
}


var pushId = "web.ru.utro";

var pushNotification = function () {
    "use strict";

    if ('safari' in window && 'pushNotification' in window.safari) {
        var permissionData = window.safari.pushNotification.permission(pushId);
        checkRemotePermission(permissionData);
    } else {
    	console.log("Push notifications not supported.");
    }
};

var checkRemotePermission = function (permissionData) {
    "use strict";

    if (permissionData.permission === 'default') {
        console.log("The user is making a decision");
        window.safari.pushNotification.requestPermission(
            'https://utro.ru/safaripush',
            pushId,
            {},
            checkRemotePermission
        );
    }
    else if (permissionData.permission === 'denied') {
        console.dir(arguments);
    }
    else if (permissionData.permission === 'granted') {
        console.log("The user said yes, with token: "+ permissionData.deviceToken);
    }
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function (r) {
        navigator.serviceWorker.ready.then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

            navigator.serviceWorker.ready.then(function (reg) {
                // Do we already have a push message subscription?
                reg.pushManager.getSubscription()
                    .then(function (subscription) {

                        if (!subscription) {
                            registration.pushManager.subscribe({userVisibleOnly: true}).then(function (subscription) {
                                var subscriptionId = subscription.subscriptionId;
                                if (!subscriptionId) {
                                    subscriptionId = subscription.endpoint; //.split("/").slice(-1)[0];
                                }

                                return sendSubscriptionToServer(subscriptionId, 'subscribe');
                            });
                        } else {
                            var subscriptionId = subscription.subscriptionId;
                            if (!subscriptionId) {
                                subscriptionId = subscription.endpoint; //.split("/").slice(-1)[0];
                            }

                            console.log("subscription: " + subscriptionId);
                        }
                    })
                    .catch(function (err) {
                        console.log('Error during getSubscription()', err);
                    });
            })

        })
    }).catch(;
} else {
    pushNotification();
}
var deferredPrompt;

window.addEventListener('beforeinstallprompt', ;
    