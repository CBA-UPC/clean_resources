let version = '2.0.2';
let fbDomain = document.domain;
let fbSwFile = 'firebase-messaging-sw.js';


FireBase.prototype.setConfig = function (config) {
    this._config = config;
}

FireBase.prototype.setVapidKey = 
FireBase.prototype.main = function (libFireBase, sw) {
    this.checkPushSupport()
        .then(() => {
            if (this.getPermission() == "granted" || this.getPermission() == "default") {
                if (this.getPermission() == "granted" && this.checkExistCookie('fb_delsw5') === false) {
                    this.unSubscribeFromOldPush();
                    this.setCookie('fb_delsw5', 1, 3600 * 1000 * 24 * 30, '/');
                }
                if (this.checkExistCookie('fb_check5') === false) {
                    this.setSubscribe(libFireBase, sw);
                    this.setCookie('fb_check5', 1, 3600*1000*24*30, '/');
                }
            }
        })
        .catch(
}

FireBase.prototype.setSubscribe = function (libFireBase, sw) {
    libFireBase.initializeApp(this._config);
    try {
        if ('analytics' in libFireBase) {
            libFireBase.analytics().logEvent('notification_received');
            console.log('%c%s', 'color: green; font-weight:700;', "analytics enable");
        }
    } catch (err) {
        console.error('%c%s', 'color: green; font-weight:700;', "FB analytics is't found");
    }
    const messaging = firebase.messaging();
    messaging.useServiceWorker(sw);
    messaging.usePublicVapidKey(this._vapidKey);

    messaging.getToken().then((currentToken) => {
        if (currentToken) {
            console.log('%c%s', 'color: green; font-weight:700;', "new Token:", currentToken);
            this._sendTokenToServer(currentToken);
        } else {
            console.log('%c%s', 'color: green; font-weight:700;', 'No Instance ID token available. Request permission to generate one.');
        }
    }).catch((err) => {
        console.log('%c%s', 'color: green; font-weight:700;', 'An error occurred while retrieving token. ', err);
    });

    messaging.onTokenRefresh(() => {
        messaging.getToken().then((refreshedToken) => {
            console.log('%c%s', 'color: green; font-weight:700;', 'Token refreshed.');
            this._sendTokenToServer(refreshedToken);
        }).catch(;
    });
}

FireBase.prototype.checkPushSupport = function () {
    return new Promise((resolve, reject) => {
        if (!('serviceWorker' in navigator)) {
            console.log('%c%s', 'color: green; font-weight:700;', 'sw_not_found');
            reject();
        }
        if (!('PushManager' in window)) {
            console.log('%c%s', 'color: green; font-weight:700;', 'fb_not_found');
            reject();
        }
        console.log('%c%s', 'color: green; font-weight:700;', 'fb_supported');
        resolve();
    });
}

FireBase.prototype.checkExistCookie = function (name, postfix) {
    postfix = postfix ? '_' + postfix : '';
    let result = false;
    let value = this.getCookie(name);

    if (value) {
        result = true;
        console.log('fb_cookie_' + name + '_exist' + postfix, value);
    } else {
        console.log('fb_cookie_' + name + '_noexist' + postfix, value);
    }

    return result;
}

FireBase.prototype.getPermission = function (data, postfix) {
    postfix = postfix ? '_' + postfix : '';
    let permision = Notification.permission;
    console.log('%c%s', 'color: green; font-weight:700;', 'fb_permission_' + permision + postfix);

    return permision;
}

FireBase.prototype._sendTokenToServer = function (currentToken) {
    let body = {
        'token' : currentToken,
        'domain' : fbDomain
    };
    let post = {
        method : 'POST', headers : {
            'Content-Type' : 'application/json;charset=utf-8'
        }, body : JSON.stringify(body)
    };
    fetch(this._urlServer, post)
        .then((response) => {
            let data = response.json();
        })
        .catch((error, e) => {
            console.log('%c%s', 'color: green; font-weight:700;', 'FB handler returned an error', error, e);
        })
}

FireBase.prototype.setCookie = function (cookieName, value, msToExpire, path, domain, secure) {
    var expiryDate;

    // relative time to expire in milliseconds
    if (msToExpire) {
        expiryDate = new Date();
        expiryDate.setTime(expiryDate.getTime() + msToExpire);
    }
    console.log('fb_cookie_set', cookieName);
    document.cookie = cookieName + '=' + value + (msToExpire ? ';expires=' + expiryDate.toGMTString() : '') + ';path=' + (path || '/') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
}

FireBase.prototype.getCookie = function (cookieName) {
    var cookiePattern = new RegExp('(^|;)[ ]*' + cookieName + '=([^;]*)'),
        cookieMatch = cookiePattern.exec(document.cookie);
    console.log('fb_cookie_get', [cookieName, cookieMatch ? decodeURIComponent(cookieMatch[2]) : 0]);
    return cookieMatch ? decodeURIComponent(cookieMatch[2]) : 0;
}

FireBase.prototype.unSubscribeFromOldPush = function () {
    navigator.serviceWorker.getRegistrations()
        .then(function (registrations) {
            for (let reg of registrations) {
                if (fbSwFile != "" && reg.active.scriptURL.indexOf(fbSwFile) == -1 && reg.active.state == "activated") {
                    reg.unregister();
                    console.log('%c%s', 'color: green; font-weight:700;', "Unreg script: ", reg.active.scriptURL);
                }
            }
        })
        .catch(;
}

let objFB = new FireBase();
objFB.setConfig(firebaseConfig);
objFB.setVapidKey(vapidKey);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((sw) => {
            console.log('%c%s', 'color: green; font-weight:700;', '### Service worker register');
            objFB.main(firebase, sw);
        });

    // if (objFB.checkExistCookie('fb_cachev1all') === false) {
        caches.delete('cache-v1');
        // objFB.setCookie('fb_cachev1all', 1, 3600 * 1000 * 24 * 2, '/');
    // }
    // if (objFB.checkExistCookie('fb_cachev1') === false) {
    //     console.log('%c%s', 'color: green; font-weight:700;', '### Service worker root refresh');

    //     caches.open('cache-v1').then(function(cache) {
    //         return fetch('/?offline=1').then(function(response) {
    //             cache.put('/?offline=1', response.clone());
    //         });
    //     });
    //     objFB.setCookie('fb_cachev1', 1, 2 * 60 * 1000, '/');
    // }
    // if (objFB.checkExistCookie('fb_cachearticlesv1') === false) {
        caches.delete('cache-articles-v1');
        // objFB.setCookie('fb_cachearticlesv1', 1, 60 * 60 * 1000, '/');
    // }
}

let ispwavisits = parseInt(objFB.getCookie('ispwa-user-visits'));
objFB.setCookie('ispwa-user-visits', ispwavisits + 1, 3600 * 1000 * 24 * 60, '/');

window.addEventListener('beforeinstallprompt', function(e) {
    if (objFB.checkExistCookie('ispwa-app-install-banner') === false) {
        objFB.setCookie('ispwa-app-install-banner', 'showed', 3600 * 1000 * 24 * 60, '/');
    }
    e.userChoice.then((result) => {
        if (result.outcome === 'accepted') {
            objFB.setCookie('ispwa-app-install-banner', 'accepted', 3600 * 1000 * 24 * 60, '/');
        } else {
            objFB.setCookie('ispwa-app-install-banner', 'dismissed', 3600 * 1000 * 24 * 60, '/');
        }
    });

    window.deferredPrompt = e;
});

window.addEventListener('appinstalled', ;

