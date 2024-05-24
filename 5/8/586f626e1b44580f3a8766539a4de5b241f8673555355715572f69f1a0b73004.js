/* global fetch,importScripts,goog,self,caches,Request,Promise,indexedDB,Headers,sendAnalyticsEvent */
/* jshint ignore:start */

importScripts('https://s1.trrsf.com/fe/zaz-ui-t360/_js/sw-helper/analytics-helper.js');
importScripts('https://s1.trrsf.com/fe/zaz-ui-t360/_js/sw-helper/offline-google-analytics-import.min.js');
goog.offlineGoogleAnalytics.initialize();


var PRIVATE = {};
PRIVATE.context = {};
PRIVATE.isOffline = false;
PRIVATE.requestTimeout = 20000;
PRIVATE.feederURL = 'https://www.terra.com.br/feeder/articles/pwa/20e07ef2795b2310VgnVCM3000009af154d0RCRD.json?limit=20';
PRIVATE.htmlOfflineURL = "https://s1.trrsf.com/fe/pwa-offline/offline.html";

var hasPubIframe = new RegExp("globalSTATIC|ads2\/varejo"),
    regIncluder = new RegExp("trrsf\.com\/update-([0-9]{10})\/fe\/((?:[a-z]|\/|\.|-)+)"),
    dbName = 'terra-sw-data',
    currentCache = 'statics-v15',
    currentImageCache = 'statics-image',
    urlsToCache = [
        PRIVATE.htmlOfflineURL,
        "https://s1.trrsf.com/fe/pwa-offline/_css/theme-default.min.css",
        "https://s1.trrsf.com/fe/pwa-offline/_js/pwa-offline.js",
        "https://s1.trrsf.com/fe/zaz-3rd/google/analytics.js",
        PRIVATE.feederURL
    ];

self.addEventListener('install', function(event) {
    "use strict";

    event.waitUntil(
        caches.open(currentCache).then(function(cache) {
            return cache.addAll(urlsToCache).then(function(){
                self.skipWaiting();
            });
        })
    );
});

self.addEventListener('activate', function(event) {
    "use strict";

    event.waitUntil(async function() {
        if (self.registration.navigationPreload) {
            await self.registration.navigationPreload.disable();
        }

        PRIVATE.getSiteInfo();

        return caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (key.indexOf('statics-v') > -1 && !currentCache.includes(key)) {
                    return caches.delete(key);
                }
            })
        ));
    }());
});

self.addEventListener('fetch', function(event) {
    "use strict";

    var requestName,
        rewriteDefault = false,
        rewriteArticle = false,
        isImage = (/\.(gif|jpg|jpeg|svg|png)$/i).test(event.request.url);

    //pega o accept image que o browser suporta
    if(!PRIVATE.context.accept && isImage){
        var acceptType = event.request.headers.get('accept');

        PRIVATE.context.accept = acceptType;

        if(acceptType){
            var data = {
                'accept' : acceptType
            };

            PRIVATE.setSiteInfo(data, PRIVATE.updateFeedNews);
        }
    }

    //pega a qualidade da rede do usuário
    if(navigator && navigator.connection && navigator.connection.effectiveType){
        switch(navigator.connection.effectiveType) {
            case "slow-2g":
            case "2g":
                rewriteArticle = rewriteDefault = true;
            break;
            case "3g":
                rewriteArticle = true;
            break;
        }
    }

    if(event.request.mode === 'navigate' && event.request.referrerPolicy != 'unsafe-url' && hasPubIframe.exec(event.request.url) === null){
        requestName = 'index';
    }else if(rewriteDefault && isImage && (/^(.*\/image\/fget)((?!filters\:)(.))+$/).test(event.request.url)){
        requestName = 'image';
    }else{
        if(!PRIVATE.isOffline){
            return;
        }        
    }

    event.respondWith(async function(){
        //faz o fetch somente no index sem bater no cache
        if(requestName == 'index'){
            var requestIndex = event.request;

            //promises para simular o timeout do fetch
            var promises = [
                PRIVATE.fetchTimeout(),
                PRIVATE.promiseRequestIndex = fetch(requestIndex).then(function(response){
                    if(!response.ok){
                        var status = response.status.toString();

                        //se der algum erro >= 500 entrega a pagina offline
                        if(status && status.charAt(0) === '5'){
                            return Promise.reject(response.status);
                        }
                    }

                    return response;
                })
            ];

            //se o timeout responder primeiro entrega a pagina offline
            return await Promise.race(promises).then(function(result){
                PRIVATE.isOffline = false;

                //atualiza o feed de noticias
                PRIVATE.updateFeedNews();

                return result;
            }, function(errorMessage){
                PRIVATE.setSiteInfo({
                    "response" : errorMessage
                });
                PRIVATE.isOffline = true;
                return caches.match(PRIVATE.htmlOfflineURL);
            });
        }else if(PRIVATE.isOffline){
            var cacheName = currentCache,
                isImageOffline = event.request.url.search('p2.trrsf.com/image/fget');

            if(isImageOffline > -1){
                cacheName = currentImageCache;
            }

            return await PRIVATE.getCache(event.request, cacheName);

        //entrega imagens em baixa qualidade para usuarios com a rede lenta
        }else if(requestName == 'image'){
            var positionCropURL = event.request.url.search(/(images|thumbox-ttv|sdp)\.terra.com/);

            if(positionCropURL > -1){
                var newImageURL = event.request.url.substring(0,positionCropURL) +'filters:quality(10)/'+ event.request.url.substring(positionCropURL);

                var init = {
                    method: event.request.method,
                    headers: event.request.headers,
                    mode: event.request.mode
                };

                var req = new Request(newImageURL, init);
                return fetch(req);
            }
        }

        return fetch(event.request).catch(function(e){
            return e;
        });
    }());
});


self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'update-feed-news') {
        PRIVATE.updateFeedNews();
        sendAnalyticsEvent('PWA','pbs', 'update-feed-news', {'cid': PRIVATE.context.cid});
    }
});

PRIVATE.checkCompatibleHeaders = function(cachedResponse, eventRequest){
    var isCompatible = false;

    if(cachedResponse.type == 'opaque' && eventRequest.mode == 'no-cors'){
        isCompatible = true;
    }else if(cachedResponse.type == 'cors' && eventRequest.mode == 'cors'){
        isCompatible = true;
    }

    return isCompatible;
};

PRIVATE.fetchTimeout = function() {
    "use strict";

    return new Promise(function(resolve, reject) {
        setTimeout, PRIVATE.requestTimeout);
    });
};

PRIVATE.updateFeedNews = function(){
    "use strict";

    PRIVATE.getSiteInfo(function(){
        if(PRIVATE.context.accept && !PRIVATE.isOffline){
            PRIVATE.cacheJson();
        }
    });
};

PRIVATE.checkDateFeed = function(dateTime){
    "use strict";

    var timeDiff, hours,
        dateNow = new Date();

    timeDiff = Math.abs(dateNow.getTime() - dateTime);
    hours = parseInt(timeDiff / (1000*60*60));

    if(hours >= 4){
        return true;
    }else{
        return false;
    }
};

PRIVATE.setCache = function(request, cacheName){
    "use strict";

    return caches.open(cacheName).then(function(cache) {
        return fetch(request).then(function(response) {
            cache.put(request, response.clone());
            return response;
        }).catch);
    });
};

PRIVATE.getCache = function(request, cacheName){
    "use strict";

    return caches.open(cacheName).then(function(cache) {
        return cache.match(request).then(function(response) {
            return response;
        }).catch(function(){
            return fetch(request).then);
        });
    });
};

PRIVATE.cacheJson = function(){
    "use strict";

    var req = new Request(PRIVATE.feederURL);

    PRIVATE.setCache(req, currentCache).then(function(response) {
        response.json().then(function(json){
            if(json && json.length > 0){
                var data = {
                    dateJson : new Date().getTime()
                };

                PRIVATE.setSiteInfo(data);
                PRIVATE.cacheNewsImages(json);
            }
        });
    });
};

PRIVATE.cacheNewsImages = function(json){
    "use strict";

    var i=0, source, pathImg,
        length = json.length;

    //empty images cache
    caches.delete(currentImageCache).then(function(cache) {
        for(i; i<length; i++){
            //card image
            if(json[i].images && json[i].images.length > 0){
                source = json[i].images[0].url.replace("http://","");
                pathImg = 'https://p2.trrsf.com/image/fget/cf/300/300/'+ source;
            }

            if(pathImg){
                PRIVATE.cacheImage(pathImg);
                pathImg = '';
            }

            //source image
            if(json[i].sources && json[i].sources.length > 0 && json[i].sources[0].image && json[i].sources[0].image !== ''){
                source = json[i].sources[0].image.replace("http://","");
                pathImg = 'https://p2.trrsf.com/image/fget/cf/fit-in/compose/70/25/'+ source;
            }

            if(pathImg){
                PRIVATE.cacheImage(pathImg);
                pathImg = '';
            }
        }
    });
};


PRIVATE.cacheImage = function(pathImg){
    "use strict";

    var objHeaders = new Headers();
    objHeaders.append("accept", PRIVATE.context.accept);

    var init = {
        method: 'GET',
        headers: objHeaders,
        mode: 'cors',
        cache: 'default'
    };

    var req = new Request(pathImg, init);
    PRIVATE.setCache(req, currentImageCache);
};


PRIVATE.getSiteInfo = function(callback){
    "use strict";

    var open = indexedDB.open(dbName, 1);

    open.onupgradeneeded = PRIVATE.createObjectStore;

    open.onsuccess = function() {
        var db = this.result;

        try{
            if(db.objectStoreNames.length === 0){
                return;
            }

            var tx = db.transaction("context", "readwrite");
            var context = tx.objectStore("context");

            context.getAll().onsuccess = function(event) {
                var result = event.target.result,
                    i=0,
                    length = result.length;

                for(i; i<length; i++){
                    PRIVATE.context[result[i].name] = result[i].value || '';
                }

                if(callback){
                    callback();
                }
            };

            tx.oncomplete =;
        }catch(e){
            if(callback){
                callback();
            }
        }
    };
};

PRIVATE.createObjectStore = function(event){
    "use strict";
    var db = event.target.result;
    return db.createObjectStore("context", {keyPath: "name"});
};

PRIVATE.setSiteInfo = function(data, callback){
    "use strict";

    var open = indexedDB.open(dbName, 1);
    var addData = function(data, store){
        var promisseList = [],
            i = 0;

        for (var x in data) {
            if (data.hasOwnProperty(x)) {
                promisseList[i] = new Promise(function(resolve, reject){
                    var insert = store.put({'name': x, 'value': data[x]});
                    insert.onsuccess =;
                });

                i++;
            }
        }

        store.transaction.db.close();
        return Promise.all(promisseList);
    }

    open.onupgradeneeded = PRIVATE.createObjectStore;

    open.onsuccess = function(event) {
        if(data){
            var db = event.target.result;

            try{
                var tx = db.transaction("context", "readwrite");
                var store = tx.objectStore("context");

                addData(data, store).then);
            }catch(e){
                if(db.objectStoreNames.length === 0){
                    db.close();
                    indexedDB.deleteDatabase(dbName);
                }
            }
        }
    };
};

//create DB
PRIVATE.setSiteInfo({
    'lang' : 'pt',
    'country' : 'br',
    'feederURL' : PRIVATE.feederURL
});
/* jshint ignore:end */