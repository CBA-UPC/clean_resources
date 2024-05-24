importScripts("https://static.nbt.indiatimes.com/wb-manifest.71682d67134fb406f302048ef0accd96.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
const izCacheVer = "1";
// importScripts("https://cdn.izooto.com/scripts/workers/8b6fb35825c21cb0989eff9eb3e02e24aa1dea4e.js");
importScripts("https://static.growthrx.in/js/v2/push-sw.js");

const DOMAIN_NAME = self.location.origin;
//  Trying fix for service worker nbt
const API_BASEPOINT = "https://navbharattimesfeeds.indiatimes.com/pwafeeds";
const API_BASEPOINT_TECH = "https://navbharattimes.indiatimes.com/pwafeeds";
const NODE_API_BASEPOINT = "https://nbtfeed.indiatimes.com/langapi";
const ARTICLE_API_CACHE = "articles-api-cache";
const PHOTO_API_CACHE = "photos-api-cache";
const VIDEO_API_CACHE = "videos-api-cache";
const HOME_HTML_CACHE = "homepage-html-cache";
const HOME_PLUS_HTML_CACHE = "homepage-plus-html-cache";
const LangNetStorageBasePath = "https://langnetstorage.indiatimes.com/langappfeeds";
const LANG_HIGH_CACHE_NAME = "Lang_high_cache_name_1";

const SITE_ID = "696089404";
// const SITE_ID_GN = "66130905";
const SITE_ID_GN = "19615041"; // test id should be replace


if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉 at`, DOMAIN_NAME);
  workbox.clientsClaim();
  workbox.precaching.suppressWarnings();

  /*   workbox.routing.registerRoute(
    "/",
    workbox.strategies.staleWhileRevalidate({
      cacheName: HOME_HTML_CACHE,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 1,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        }),
      ],
    }),
  ); */

  const { NetworkFirst } = workbox.strategies;

  workbox.routing.registerRoute(
    "/",
    new NetworkFirst({
      networkTimeoutSeconds: 10,
      cacheName: HOME_HTML_CACHE,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 1,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        }),
      ],
    }),
  );

  workbox.routing.registerRoute(
    "/plus",
    new NetworkFirst({
      networkTimeoutSeconds: 10,
      cacheName: HOME_PLUS_HTML_CACHE,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 1,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        }),
      ],
    }),
  );

  workbox.routing.registerRoute(
    "/?web=no&utm_source=pwahomescreen&utm_medium=direct",
    workbox.strategies.staleWhileRevalidate({
      cacheName: HOME_HTML_CACHE,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 1,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        }),
      ],
    }),
  );

  const HIGH_CACHE_FILES = [
    "https://js-sec.indexww.com/ht/p/191952-71956427846521.js",
    "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
    "https://agi-static.indiatimes.com/cms-common/ibeat.min.js",
    "https://static.nbt.indiatimes.com/fonts/NotoSansDevanagari-Regular.woff2",
    "https://static.growthrx.in/js/v2/web-sdk.js",
    "https://www.instagram.com/embed.js",
    "https://platform.twitter.com/widgets.js",
    "https://www.googletagmanager.com/ns.html?id=GTM-NS5K3GZ",
    "https://tvid.in/sdk/slikeloader.js",
    "https://static.clmbtech.com/ad/commons/js/2310/colombia_v2.js",
    "https://static.clmbtech.com/ase/2310/16/aa.js",
    "https://navbharattimes.indiatimes.com/thumb/100842088/navbharat-times.jpg?width=128&resizemode=4",
    "https://static.langimg.com/thumb/76544596/navbharat-times.jpg?width=256&resizemode=4",
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1902173858658913",
    "https://navbharattimes.indiatimes.com/timedate.cms",
    "https://p.adlooxtracking.com/gpt/a.js",
  ];

  workbox.routing.registerRoute(
    ({ url }) => HIGH_CACHE_FILES.soe)),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: LANG_HIGH_CACHE_NAME,
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 100,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        }),
      ],
    }),
  );

  self.__precacheManifest.unshift(
    {
      url: "/",
      revision: new Date().getTime(),
    },
    {
      url: "/?web=no&utm_source=pwahomescreen&utm_medium=direct",
      revision: new Date().getTime(),
    },
    {
      url: "/icons/nbtfavicon.ico",
    },
  );

  workbox.precaching.precacheAndRoute(self.__precacheManifest || [], {
    directoryIndex: null,
    cleanUrls: false,
  });

  // const homeApiHandler = workbox.strategies.staleWhileRevalidate({
  //   cacheName: 'top-news',
  //   plugins: [
  //     new workbox.broadcastUpdate.Plugin('topnews_api_updates')
  //   ]
  // });
  const articleApiHandler = workbox.strategies.staleWhileRevalidate({
    cacheName: ARTICLE_API_CACHE,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60, // 1day
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [200],
      }),
    ],
  });
  const photoApiHandler = workbox.strategies.cacheFirst({
    cacheName: PHOTO_API_CACHE,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 24 * 60 * 60, // 1day
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [200],
      }),
    ],
  });
  const videoApiHandler = workbox.strategies.cacheFirst({
    cacheName: VIDEO_API_CACHE,
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 24 * 60 * 60, // 1day
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [200],
      }),
    ],
  });

  workbox.routing.registerRoute(/(.*)\/sc_articleshow\.cms/, args =>
    articleApiHandler
      .handle(args)
      .then(response => {
        if (response.status === 404) {
          return caches.match("404.html");
        }
        return response;
      })
      .catch(ex => {
        console.log(ex);
        return caches.match("500.html");
      }),
  );

  workbox.routing.registerRoute(/(.*)\/sc_photoshow\.cms/, args =>
    photoApiHandler
      .handle(args)
      .then(response => {
        if (response.status === 404) {
          return caches.match("404.html");
        }
        return response;
      })
      .catch(ex => caches.match("500.html")),
  );

  workbox.routing.registerRoute(/(.*)\/sc_videoshow\.cms/, args =>
    videoApiHandler
      .handle(args)
      .then(response => {
        if (response.status === 404) {
          return caches.match("404.html");
        }
        return response;
      })
      .cat")),
  );

  const cacheAllHomePageApi = () => {
    const acceptedTemplates = ["news", "photo", "video", "moviereview"];
    let template;
    let cacheName;
    return fetch(`${LangNetStorageBasePath}/nbtheadline.htm`).then(response => {
      response.json().then(result => {
        result.items.map((item, index) => {
          if (typeof item.id === "undefined" || !acceptedTemplates.includes(item.tn) || index > 20) return;

          switch (item.tn) {
            case "news":
              template = "sc_articleshow";
              cacheName = ARTICLE_API_CACHE;
              break;
            case "photo":
              template = "sc_photoshow";
              cacheName = PHOTO_API_CACHE;
              break;
            case "video":
              template = "sc_videoshow";
              cacheName = VIDEO_API_CACHE;
              break;
            case "moviereview":
              template = "sc_articleshow";
              cacheName = ARTICLE_API_CACHE;
              break;
            default:
              break;
          }
          const version = template === "sc_articleshow" ? "v10" : "v9";
          const apiUpdate = template === "sc_videoshow" ? NODE_API_BASEPOINT : API_BASEPOINT;
          const apiUrl = `${apiUpdate}/${template}.cms?feedtype=sjson&version=${version}&msid=${item.id}`;
          fetch(apiUrl).then(res => {
            if (res.status == 200) {
              caches.open(cacheName).th });
            }
          });
        });
      });
    });
  };

  self.addEventListener("install", event => {
    console.log("Inside Install");
    const urls = ["/"];
    const cacheName = HOME_HTML_CACHE; // workbox.core.cacheNames.runtime
    event.waitUntil(
      caches.open(cacheName).then(cache =>
        cache
          .addAll(urls)
          .th{})
          .cat }),
      ),
    );
    return event.waitUntil(self.skipWaiting());
  });

  self.addEventListener("activate });

  const fetchMsid = url =>
    url
      .split("/")
      .filt-1)[0]
      .split(".")[0];

  const extractSplat = url => {
    const splat = url
      .split("/")
      .filter(item => item.indexOf("amp_") === -1 && item.indexOf(".cms") === -1 && item !== "");
    splat.shift();
    splat.shift();
    return splat.join("/");
  };

  const idb = {
    dbName: "userdb",
    dbVersion: 1,
    defaultKey: "key",
    storeList: [
      { storeName: "journey", keyPath: "key" },
      { storeName: "pwa_meta", keyPath: "msid" },
    ],
    createDBStore: (db, storename, _key) => {
      if (db) {
        db.createObjectStore(storename, { keyPath: _key || idb.defaultKey });
        console.log(`Object Store created ${db.name}`);
      }
    },
    setData: data => {
      const requestDB = indexedDB.open(idb.dbName, idb.dbVersion);
      requestDB.onupgradeneeded = e => {
        idb.storeList.forEach((item, index) => idb.createDBStore(e.target.result, item.storeName, item.keyPath));
        console.log({
          message: "DB upgraded successfully",
          data: e.target.result,
        });
      };
      requestDB.onsuccess = e => {
        const db = e.target.result;
        const store = idb.storeList.filter(item => item.keyPath === data.keyPath);
        const transaction = db.transaction(store[0].storeName, "readwrite");
        transaction.onerror = err => {
          console.log({ message: `${err.target.error}` });
        };
        transaction.oncomplete = res => {
          console.log({
            message: `Data added to store`,
          });
        };
        const apiDataStore = transaction.objectStore(store[0].storeName);
        apiDataStore.put(data.value);
      };
      requestDB.onerror = e => {
        console.log({
          message: `DB creation/open failed due to ${e.target.error}`,
        });
      };
    },
    getData: (searchKey, data) => {
      if (typeof searchKey != "string") {
        console.log({
          message: "Please provide valid searchKey as String only",
        });
        return false;
      }
      // Open DB request
      const requestDB = indexedDB.open(idb.dbName, idb.dbVersion);
      // Request DB Upgrade handler
      requestDB.onupgradeneeded = e => {
        // Initialize Stores
        idb.storeList.forEach((item, index) => idb.createDBStore(e.target.result, item.storeName, item.keyPath));
        console.log({
          message: "DB upgraded successfully",
          data: e.target.result,
        });
      };
      // Request DB error handler
      requestDB.onerror = e => {
        // console.error(`DB creation failed due to ${e.target}`);
        console.log({
          message: `DB creation/open failed due to ${e.target.error}`,
        });
      };

      // Request DB success handler
      return new Promise((resolve, reject) => {
        requestDB.onsuccess = e => {
          const db = e.target.result;
          console.log({
            message: "DB opened successfully",
            data: db,
          });
          const store = idb.storeList.filtth);
          // Create transaction
          const transaction = db.transaction(store[0].storeName, "readonly");
          // Get Object Store
          const apiDataStore = transaction.objectStore(store[0].storeName);
          // Get data frm store
          const getObj = apiDataStore.get(searchKey);
          getObj.onsuccess = res => {
            // console.log("data added to store:");
            console.log({
              message: res.target.result,
              searchKey,
            });
            resolve(res.target.result);
          };
          getObj.onerror = err => {
            console.log({
              message: `${err.target.error}`,
            });
            reject(err);
          };
          db.close();
        };
      });
    },
    processDataThenAdd: data => {
      const { key } = data.value;
      let { value } = data.value;

      if (typeof value === "string" && value.indexOf(".cms") > -1) {
        const valueObj = {
          splat: value.split("/"),
        };
        if (valueObj.splat instanceof Array) {
          if (valueObj.splat[0] === "") valueObj.splat.shift();
          // eslint-disable-next-line prefer-destructuring
          valueObj.msid = valueObj.splat.pop().split(".cms")[0];
          // pop template
          valueObj.splat.pop();
          value = valueObj;
        }
      }

      const { splat, msid } = value;
      const _key = key;

      if (_key === "userMsid" && msid) {
        idb.getData(_key, data).then(resp => {
          const userMsid = resp && resp.value instanceof Array ? resp.value : [];
          if (userMsid instanceof Array) {
            if (userMsid.length >= 10) {
              userMsid.shift();
            }
            if (userMsid.indexOf(msid) === -1) userMsid.push(msid);
            idb.setData({
              keyPath: "key",
              value: {
                key: "userMsid",
                value: userMsid,
              },
            });
          }
        });
      }

      if (_key === "userSecMap" && splat) {
        idb.getData("userResetTime", data).then(resp1 => {
          const userResetTime = resp1 && resp1.value;
          const defaultResetDays = 7;
          let shouldNormalize = false;
          if (userResetTime) {
            if (new Date().getTime() - userResetTime > defaultResetDays * 24 * 60 * 60 * 1000) {
              idb.setData({
                keyPath: "key",
                value: {
                  key: "userResetTime",
                  value: new Date().getTime(),
                  days: (resp1.days || 1) + defaultResetDays,
                },
              });
              shouldNormalize = true;
            }
          } else {
            idb.setData({
              keyPath: "key",
              value: {
                key: "userResetTime",
                value: new Date().getTime(),
                days: 1,
              },
            });
          }
          idb.getData(_key, data).then(resp => {
            let userSecMap = resp && resp.value instanceof Map ? resp.value : new Map();
            const isNotPresentFlag = {
              0: true,
              1: true,
              2: true,
            };
            let splatC = typeof splat === "string" ? splat.split("/") : splat;
            if (splatC instanceof Array) {
              // pop seo part
              splatC.pop();
              // convert to string
              splatC = splatC.join("/");
            }
            if (userSecMap.size >= 10) {
              userSecMap = new Map([...userSecMap].so1]));
              shouldNormalize && (userSecMap = new Map([...userSecMap].slice(0, 8)));
            }
            userSecMap.forEach((Value, Key, map) => {
              if (shouldNormalize) {
                map.set(Key, Math.round((Value - Math.log(Value) / Math.log(defaultResetDays)) * 10) / 10);
              }
              // const index = splatC.indexOf(`${Key}`);
              // if (index > -1) {
              if (splatC === Key) {
                map.set(Key, 1 + Value);
                isNotPresentFlag[0] = false;
              }
            });
            if (userSecMap) {
              isNotPresentFlag[0] && userSecMap.set(splatC, 1);
              // isNotPresentFlag[0] && splatC[0] && splatC[0].split("-").length <= 3 && userSecMap.set(splatC[0], 1);
              // isNotPresentFlag[1] && splatC[1] && splatC[1].split("-").length <= 3 && userSecMap.set(splatC[1], 1);
            }
            idb.setData({
              keyPath: "key",
              value: {
                key: "userSecMap",
                value: userSecMap,
              },
            });
          });
        });
      }
    },
  };

  self.addEventListener("fetch", event => {
    // Storing Top Sections in AMP templates in IDB
    if (
      (event.request.url.indexOf("amp_videoshow") > -1 ||
        event.request.url.indexOf("amp_articleshow") > -1 ||
        event.request.url.indexOf("amp_photoshow") > -1 ||
        event.request.url.indexOf("amp_movieshow") > -1) &&
      event.request.url.indexOf("?") === -1
    ) {
      if (indexedDB) {
        const msid = fetchMsid(event.request.url);
        if (!isNaN(parseInt(msid, 10))) {
          const splat = extractSplat(event.request.url);
          if (splat) {
            idb.processDataThenAdd({
              keyPath: "key",
              value: {
                key: "userSecMap",
                value: {
                  splat,
                  msid,
                },
              },
            });
          }

          idb.processDataThenAdd({
            keyPath: "key",
            value: {
              key: "userMsid",
              value: {
                splat,
                msid,
              },
            },
          });
        }
      }
    }

    // Storing pwa_meta in AMP templates in IDB
    if (event.request.url.indexOf("amp_articleshow") > -1) {
      if (indexedDB) {
        const msid = fetchMsid(event.request.url);
        if (!isNaN(parseInt(msid, 10))) {
          const url = `${API_BASEPOINT}/sc_articleshow.cms?feedtype=sjson&msid=${msid}&version=v10`;
          fetch(url)
            .th())
            .then(
              response => {
                const { pwa_meta } = response;
                if (pwa_meta) {
                  const idbObject = {
                    msid: pwa_meta.msid,
                    webtitle: pwa_meta.webtitle,
                    pagetype: pwa_meta.pagetype,
                    sec_hierarchy: pwa_meta.sec_hierarchy,
                    keyhundred: pwa_meta.keyhundred,
                    timestamp: Date.now(),
                  };
                  idb.setData({ keyPath: "msid", value: idbObject });
                } else console.log("pwa_meta missing");
              },
            },
            );
        } else console.log("msid is missing");
      } else console.log("IndexedDB is not supported");
    }
    if (
      hostParser(event.request.url) === self.location.origin // same origin
    ) {
      const modifiedRequest = new Request(event.request, {
        credentials: "omit", // this is what removes cookies
      });
      // modifiedRequest.headers.set("Accept-Language", "*");

      event.respondWith(
        fetch(modifiedRequest)
          .th })
          .cat }),
      );
    }
  });
  self.addEventListener("sync", event => {
    if (event.tag == "syncHomePage") {
      event.waitUntil(cacheAllHomePageApi());
    }
  });

  self.addEventListener("message", event => {
    console.log(`SW Received Message: ${event.data}`);
    // var Promise1 = fetch('/'+event.data[0]);
    // var Promise2 = fetch('/'+event.data[1]);
    // var Promise3 = fetch('/'+event.data[2]);
    if (Array.isArray(event.data)) {
      const jsArray = event.data.ms));
      Promise.all(jsArray).then(
        data => event.ports[0].postMessage("SW Says 'Hello back!'"),
        error => event.ports[0].postMessage("SW Says 'Hello back Error!'"),
      );
    }
  });

  workbox.routing.registerRoute(
    /https:\/\/static.langimg.com\/thumb/,
    workbox.strategies.cacheFirst({
      cacheName: "dynamic-images",
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [200],
        }),
        new workbox.expiration.Plugin({
          maxEntries: 20,
          maxAgeSeconds: 6 * 60 * 60, // 6hrs
        }),
      ],
    }),
    "GET",
  );

  workbox.routing.registerRoute(
    /https:\/\/static.nbt.indiatimes.com/,
    workbox.strategies.cacheFirst({
      cacheName: "static-resources",
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [200],
        }),
        new workbox.expiration.Plugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30d
        }),
      ],
    }),
    "GET",
  );

  // workbox.routing.registerRoute(/http:\/\/localhost/,
  //   workbox.strategies.cacheFirst({
  //     cacheName: "static-resources-js",
  //     plugins: [
  //       new workbox.cacheableResponse.Plugin({
  //         statuses: [200]
  //       }),
  //       new workbox.expiration.Plugin({
  //         maxEntries: 100,
  //         maxAgeSeconds: 30 * 24 * 60 * 60 // 30d
  //       })
  //     ]
  //   }), 'GET');

  workbox.googleAnalytics.initialize({
    parameterOverrides: {
      cd1: "offline",
    },
  });
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

