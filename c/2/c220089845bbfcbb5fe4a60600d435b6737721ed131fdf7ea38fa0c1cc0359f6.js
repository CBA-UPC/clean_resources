__jp0({"success":true,"app_id":"03af4f0d-d67b-4f65-97b0-20b392223db6","version":2,"features":{"restrict_origin":{"enable":true},"cookie_sync":{"enable":false},"metrics":{"enable":true,"mixpanel_reporting_token":"7c2582e45a6ecf1501aa3ca7887f3673"},"enable_on_session":false,"web_on_focus_enabled":true,"session_threshold":30},"config":{"siteInfo":{"name":"oPeniazoch.sk","origin":"https://openiazoch.zoznam.sk","proxyOrigin":null,"defaultIconUrl":"https://img.onesignal.com/permanent/5bb93f5b-cb6b-4c9b-91bd-648852e38ce0/kF83gmXUT2uuuChv4hnS_android-icon-192x192.png","proxyOriginEnabled":false},"integration":{"kind":"wordpress"},"setupBehavior":{"allowLocalhostAsSecureOrigin":false},"autoResubscribe":true,"staticPrompts":{"native":{"enabled":false,"autoPrompt":true},"bell":{"enabled":false,"size":"large","color":{"main":"#E12D30","accent":"white"},"dialog":{"main":{"title":"Manage Notifications","subscribeButton":"Subscribe","unsubscribeButton":"Unsubscribe"},"blocked":{"title":"Unblock Notifications","message":"Click here to learn how to unblock notifications."}},"offset":{"left":15,"right":15,"bottom":15},"message":{"subscribing":"Thanks for subscribing!","unsubscribing":"You won't receive notifications again"},"tooltip":{"blocked":"You've blocked notifications","subscribed":"You're subscribed to notifications","unsubscribed":"Subscribe to notifications"},"location":"bottom-right","hideWhenSubscribed":false,"customizeTextEnabled":false},"slidedown":{"enabled":false,"autoPrompt":true,"acceptButton":"Subscribe","cancelButton":"Later","actionMessage":"Subscribe to our notifications for the latest news and updates. You can disable anytime.","customizeTextEnabled":false,"isTagsEnabled":false,"categories":{"negativeUpdateButton":"Cancel","positiveUpdateButton":"Save Preferences","tags":[],"updateMessage":"Update your push notification subscription preferences."},"prompts":[]},"fullscreen":{"enabled":false,"title":"example.com","caption":"You can unsubscribe anytime","message":"This is an example notification message.","acceptButton":"Continue","cancelButton":"No Thanks","actionMessage":"Subscribe to our notifications for the latest news and updates. You can disable anytime.","autoAcceptTitle":"Click Allow","customizeTextEnabled":false},"customlink":{"enabled":false,"style":"button","size":"medium","color":{"button":"#e54b4d","text":"#ffffff"},"text":{"subscribe":"Subscribe to push notifications","unsubscribe":"Unsubscribe from push notifications","explanation":""},"unsubscribeEnabled":true}},"webhooks":{"enable":false},"serviceWorker":{"customizationEnabled":false,"path":"/","workerName":"OneSignalSDKWorker.js","registrationScope":"/","updaterWorkerName":"OneSignalSDKUpdaterWorker.js"},"welcomeNotification":{"enable":true,"url":"https://openiazoch.zoznam.sk/?_osp=do_not_open","title":"oPeniazoch.sk","message":"Thanks for subscribing!","urlEnabled":false},"vapid_public_key":"BH-Jbc4juAt1Gkc4I3KhADX_rIVIzQfeeMJMn7K2TkL-dmcmIqcRoyxYCHjQr-fOrRUh_TSMu4K5B1aWSurkxgY","onesignal_vapid_public_key":"BMzCIzYqtgz2Bx7S6aPVK6lDWets7kGm-pgo2H4RixFikUaNIoPqjPBBOEWMAfeFjuT9mAvbe-lckGi6vvNEiW0","safari_web_id":"web.onesignal.auto.0dd8fdab-49d8-437b-ac06-36c9d15991be","origin":"https://openiazoch.zoznam.sk","outcomes":{"direct":{"enabled":false},"indirect":{"enabled":false,"notification_attribution":{"minutes_since_displayed":60,"limit":10}},"unattributed":{"enabled":false}}},"generated_at":1707540557})iano-user-logout').hide();
        if (!googleLoginPromise) {
            if (typeof addGTMScript === 'function') {
                addGTMScript();
            }
            if (typeof pianoArticleView === 'function') {
                pianoArticleView();
            }
        }
    }

    try {
        if (blSubscriber) {
            window.localStorage.setItem('subscriber', 'yes');
            document.querySelector('body').classList.add('subscriber--yes');
            document.querySelector('body').classList.remove('subscriber--no');
        } else {
            window.localStorage.setItem('subscriber', 'no');
            document.querySelector('body').classList.add('subscriber--no');
            document.querySelector('body').classList.remove('subscriber--yes');
        }
    } catch (error) {
        console.error(error);
    }
    if (!adFree && typeof adScript === 'function') {
        window.localStorage.setItem('adfree', 'no');
        adScript();
    } else {
        window.localStorage.setItem('adfree', 'yes');
    }

    if (googleLoginPromise) {
        if (typeof clsfix === 'function') {
            clsfix();
        }
        dispatchGoogleNewsLoginEvent(userState);
    } else {
        if (document.querySelectorAll(".itemView").length > 0) {
            initGaaMetering(userState);
        }
    }
}

function setConsentToDisagree() {
    window.didomiOnReady = window.didomiOnReady || [];
    window.didomiOnReady.push(function (Didomi) {
        Didomi.setUserDisagreeToAll();
    });
}

function userAuthenticationFail() {
    pianoLogout();
    jQuery('.piano-user-login').show();
    jQuery('.piano-user-logout').hide();
    if (typeof addGTMScript === 'function') {
        addGTMScript();
    }
    if (typeof pianoArticleView === 'function') {
        pianoArticleView();
    }
    if (typeof adScript === 'function') {
        adScript();
    }
}

var userAuthentication = function () {
    var id = typeof premiumID !== 'undefined' ? premiumID : false;
    var page = typeof premiumPage !== 'undefined' ? premiumPage : false;
    var pagePrefix =  typeof premiumPagePrefix !== 'undefined' ? premiumPagePrefix : false;
    var preview =  typeof premiumPreview !== 'undefined' ? premiumPreview : false;
    var link =  typeof premiumLink !== 'undefined' ? premiumLink : false;
    var reqData = {
        option: 'com_ajax',
        group: 'authentication',
        plugin: 'ocm_piano',
        task: 'userAuth',
        id: id,
        page: page,
        pagePrefix: pagePrefix,
        preview: preview,
        link: link,
        format: 'json'
    };
    return jQuery.ajax({
        url: '/',
        method: 'POST',
        data: reqData,
        cache: false,
        dataType: 'JSON'
    });
};

tp = window["tp"] || [];
tp.push(['setUsePianoIdUserProvider', true]);
var tp_cookie_domain = '.hnonline.sk';
tp.push(['setCookieDomain', tp_cookie_domain]);
tp.push(["addHandler", "loginSuccess", function(data) {
    if (window.location.pathname == '/auth-code') {console.log(data);}
    var reqData = {
        option: 'com_ajax',
        group: 'authentication',
        plugin: 'ocm_piano',
        task: 'loginCallback',
        format: 'json'
    };
    jQuery.ajax({
        url: '/',
        method: 'POST',
        data: reqData,
        cache: false,
        dataType: 'JSON'
    }).done(function (response) {
        var auth = userAuthentication();
        auth.done(function (response) {
            if (response.success && typeof response.logged_in !== 'undefined' && response.logged_in) {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'user_login'
                });
            }
            if (data.registration || (data.source === 'OFFER' && typeof data.termId !== 'undefined' && data.termId) || googleLoginPromise) {
                userAuthenticationResponse(response);
            } else {
                var adfree = typeof response.adfree !== 'undefined' && response.adfree ? true : false;
                if (adfree) {
                    window.localStorage.setItem('adfree', 'yes');
                } else {
                    window.localStorage.setItem('adfree', 'no');
                }
                location.reload();
            }
        }).fail(function (response) {
            if (googleLoginPromise) {
                dispatchGoogleNewsLoginEvent();
            }
            userAuthenticationFail();
        });
    }).fail(function (response) {
        location.reload();
    });
}]);

tp.push(["addHandler", "loginDisplayed", function(data) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({'event': 'user_login_popup'});
}]);

tp.push(["addHandler", "registrationSuccess", function(data){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({'event': 'user_registration'});
}]);

tp.push(["addHandler", "startCheckout", function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({'event': 'article_upgrade'});
}]);

tp.push(["addHandler", "checkoutSelectTerm", function(termDetails, iframeId){
    getTermData(termDetails.termId).done(function (response) {
        console.log(termDetails);
        console.log(response);
        if (typeof response.type !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'begin_checkout',
                'product_info': {
                    'name': response.name, // e.g. Digital, Digital Premium, ...
                    'type': response.type, //month,year , half_year, ...
                    'product_id': termDetails.termId
                }
            });
        }
    }).fail(function (response) {
    });
}]);

tp.push(["addHandler", "checkoutComplete", function(conversion){
    getTermData(conversion.termId, conversion.termConversionId).done(function (response) {
        console.log(conversion.termId);
        console.log(response);
        if (typeof response.type !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'purchase',
                'product_info': {
                    'name': response.name, // e.g. Digital, Digital Premium, ...
                    'type': response.type, //month,year , half_year, ...
                    'price': conversion.chargeAmount,
                    'product_id': conversion.termId
                },
                'ecommerce': {
                    'transaction_id': response.transactionId
                }
            });
        }
    }).fail(function (response) {
    });
}]);

jQuery('.item__share-twitter').on('click', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'article_share',
        'social_network_shared': 'twitter'
    });

});

jQuery('.item__share-facebook').on('click', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'article_share',
        'social_network_shared': 'facebook'
    });
});

jQuery('body').on('click', '.nav-tabs--24h3d7d button', function(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'circulation_click',
        'click_text': jQuery(this).text(),
        'circulation_category': 'linkbox'
    });
});

if (document.querySelectorAll(".itemView").length > 0) {
    jQuery('body').on('click', '.tp-close', function(){
        initGaaMetering(userState);
    });
}

var userAuth = userAuthentication();

jQuery(function () {
    userAuth.done(function (response) {
        userAuthenticationResponse(response);
    }).fail(function ( jqXHR, textStatus, errorThrown) {
        userAuthenticationFail();
    });
});

function dispatchGoogleNewsLoginEvent (userState = {granted: false}) {
    let event = new CustomEvent('googleNewsLogin', {detail: userState});
    window.dispatchEvent(event);
}

function handleLoginPromise() {
    return new Promise((resolve) => {
        GaaMetering.getLoginPromise().then(() => {
            googleLoginPromise = true;

            jQuery('.piano-user-login').click();

            GaaMeteringRegwall.remove();

            window.addEventListener('googleNewsLogin', (event) => {
                googleLoginPromise = false;
                resolve(event.detail);
            });
        });
    });
}

function registerUserPromise() {
    return new Promise((resolve) => {
        GaaMetering.getGaaUserPromise().then((gaaUser) => {
            var reqData = {
                option: 'com_ajax',
                group: 'authentication',
                plugin: 'ocm_piano',
                task: 'googleNewsRegistration',
                format: 'json',
                token: gaaUser.credential
            };
            jQuery.ajax({
                url: '/',
                method: 'POST',
                data: reqData,
                cache: false,
                dataType: 'JSON'
            }).done(function (response) {
                if (response.success && typeof response.logged_in !== 'undefined' && response.logged_in) {
                    jQuery('.piano-user-login').hide();
                    jQuery('.piano-user-logout').show();
                }
                if (typeof response.userState !== 'undefined') {
                    resolve(response.userState);
                } else {
                    resolve({granted: false});
                }
            }).fail(function (response) {
                resolve({granted: false});
            });
        });
    });
}

function publisherEntitlementPromise() {
    return new Promise((resolve) => {
        var auth = userAuthentication();
        auth.done(function (response) {
            let userState = {granted: false};
            if (response.success && typeof response.logged_in !== 'undefined' && response.logged_in) {
                if (typeof response.uid !== 'undefined') {
                    userState.id = response.uid;
                }
                if (typeof response.registrationTimestamp !== 'undefined') {
                    userState.registrationTimestamp = response.registrationTimestamp;
                }
                if (typeof response.subscriber !== 'undefined' && response.subscriber) {
                    userState.subscriptionTimestamp = response.subscriptionTimestamp;
                    userState.granted = true;
                    userState.grantReason = 'SUBSCRIBER';
                }
            }
            resolve(userState);
        }).fail(function (response) {
            resolve({granted: false});
        });
    });
}

function unlockArticle() {
    console.log('UA start');
    var id = typeof premiumID !== 'undefined' ? premiumID : false;
    var page = typeof premiumPage !== 'undefined' ? premiumPage : false;
    var pagePrefix =  typeof premiumPagePrefix !== 'undefined' ? premiumPagePrefix : false;
    var link =  typeof premiumLink !== 'undefined' ? premiumLink : false;
    var reqData = {
        option: 'com_ajax',
        group: 'authentication',
        plugin: 'ocm_piano',
        task: 'unlockArticle',
        id: id,
        page: page,
        pagePrefix: pagePrefix,
        link: link,
        url: window.location.href,
        format: 'json'
    };
    jQuery.ajax({
        url: '/',
        method: 'POST',
        data: reqData,
        cache: false,
        dataType: 'JSON'
    }).done(function (response) {
        if (typeof response.premiumText !== 'undefined' && response.premiumText) {
            renderPremiumText(response.premiumText);
        }
    }).fail(function (response) {

    });
}

function showPaywall() {
        jQuery('.piano-container')[0].scrollIntoView();
}

function initGaaMetering (userState) {
    GaaMetering.init({
        googleApiClientId: googleApiClientId,
        allowedReferrers: allowedReferrers,
        userState: userState,
        handleLoginPromise: handleLoginPromise(),
        registerUserPromise: registerUserPromise(),
        publisherEntitlementPromise: publisherEntitlementPromise(),
        unlockArticle: unlockArticle,
        showPaywall: showPaywall
    });
}