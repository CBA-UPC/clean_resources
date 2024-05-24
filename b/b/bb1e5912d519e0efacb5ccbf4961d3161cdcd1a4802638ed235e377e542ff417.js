/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable no-underscore-dangle */
/* eslint-disable complexity */
/* eslint-env serviceworker */
/* eslint no-restricted-globals: ["error"] */

const swConfig = {
  cdnUrl: 'https://cdn.pushmaster-cdn.xyz',
  ingestPath: 'https://in.pushmaster-in.com/api/v1/p.gif',
  ingestToken: 'js.aa7fqr9vb3omsh5i5fnhpr.h2f6ea2b7tqqkst6wwgjo',
  cVersion: 1.6,
  _sw_v: '2.16',
};

function pushanPayload(eventType, pushData, miscData = {}) {
  return {
    v: swConfig._sw_v,
    type: eventType,
    href: self.location.href,
    split: (pushData.data || {}).split,
    ping: (pushData.data || {}).ping,
    ad: {
      id: (pushData.data || {}).adId,
      hash: (pushData.data || {}).adHash,
      p: (pushData.data || {}).adProvider, // this is the winning ad provider (selected from the CF)
      ...(eventType === 'received'
        ? {
            title: pushData.title,
            body: pushData.body,
            icon: pushData.icon,
            image: pushData.image,
            url: (pushData.data || {}).url,
            cpc: (pushData.data || {}).cpc || null,
            cpm: (pushData.data || {}).cpm || null,
            cat: (pushData.data || {}).adCategories || [],
          }
        : {}),
    },
    sub: {
      id: (pushData.data || {}).subscriptionId,
      sd: (pushData.data || {}).subscriptionDate,
      audid: (pushData.data || {}).audienceId,
    },
    campaign: {
      msgid: (pushData.data || {}).pushMessageId,
      csid: (pushData.data || {}).campaignScheduleId,
      cf: (pushData.data || {}).contentFunnel,
    },
    miscData,
  };
}

function pushan(eType, pushData, miscData = {}) {
  const serverEndpoint = new URL(swConfig.ingestPath);
  const payload = pushanPayload(eType, pushData, miscData);
  serverEndpoint.search = new URLSearchParams({
    data: btoa(
      JSON.stringify({
        token: swConfig.ingestToken,
        event: payload,
      })
    ),
    cookie_policy: 'strict',
    ip_policy: 'strict',
  }).toString();
  return fetch(serverEndpoint, { method: 'GET', mode: 'no-cors' });
}

function timeout(ms, promise) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout( ms);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch(;
  });
}

self.addEventListener('push', (e) => {
  function displayPush(d) {
    function getCleanNotification(data) {
      const options = {
        actions: data.actions || null,
        badge: data.badge || null,
        title: data.title,
        body: data.body || null,
        data: data.metadata || data.data || null,
        dir: data.dir || null,
        icon: data.icon || null,
        image: data.image || null,
        lang: data.lang || null,
        renotify: data.renotify || null,
        requireInteraction: data.requireInteraction || null,
        silent: data.silent || null,
        tag: data.tag || null,
        timestamp: data.timestamp || null,
        vibrate: data.vibrate || [300, 100, 400],
      };

      Object.keys(options).forEach((key) => options[key] == null && delete options[key]);
      return options;
    }
    // removes all the data we do not need in the push notification
    const cleanPush = getCleanNotification(d);

    return self.registration.showNotification(cleanPush.title, cleanPush).then(;
  }

  
  function pushDynamic(d) {
    function pushloadExt(data) {
      const fetchHeaders = new Headers({ 'Content-Type': 'text/plain' });
      const fetchUrl = `${swConfig.cdnUrl}/scripts/content-providers/${swConfig.cVersion}/${data.cScript}`;

      return timeout(
        3000,
        fetch(fetchUrl, {
          method: 'GET',
          headers: fetchHeaders,
          mode: 'cors',
          cache: 'default',
        })
      ).then((scriptLoaded) => {
        return scriptLoaded.text().then((script) => {
          return new Function('data', 'displayPush', `return (async () => {${script}; return wrapperFn(data)})()`)(
            data,
            displayPush
          );
        });
      });
    }

    // TODO: Finish Logic
    return pushloadExt(d).catch(;
  }

  function fullDisplayLoop(event) {
    if (event.data) {
      const data = event.data.json();

      if (data.notifType === 'dynamic' && data.cScript) {
        return pushDynamic(data);
      }
      return pushPreset(data);
    }
    return undefined;
  }
  e.waitUntil(fullDisplayLoop(e));
});

self.addEventListener('notificationclick', (e) => {
  function clickHandle(ev) {
    function openTrack(clickURL, notification, clickAction = null) {
      const openPromise = clients.openWindow(clickURL);
      const miscData = { clickAction }; // no longer sent to the tracking endpoint
      const trakPromise = pushan('click', notification, miscData);
      const closePromise = notification.close();
      return Promise.all([openPromise, trakPromise, closePromise]);
    }

    function buttonFinder(notification) {
      const notifData = notification.data;
      const notifActions = notifData.actions;
      let results;
      if (notifActions && Array.isArray(notifActions)) {
        const eventAction = ev.action;
        if (eventAction) {
          notifActions.forEach((listItem) => {
            if (listItem.action === eventAction) {
              results = {
                url: listItem.url,
                action: listItem.action,
              };
            }
          });
        }
      }
      if (!results) {
        results = {
          url: notifData.url,
          action: 'no_action',
        };
      }
      return results;
    }

    const { notification } = ev;
    const bttn = buttonFinder(notification);
    return openTrack(bttn.url, notification, bttn.action);
  }

  e.waitUntil(clickHandle(e));
});

self.addEventListener('notificationclose', (e) => {
  function t(ev) {
    const cleanPush = ev.notification;
    return pushan('close', cleanPush);
  }

  e.waitUntil(t(e));
});

self.addEventListener('install', ;

self.addEventListener('activate', ;
