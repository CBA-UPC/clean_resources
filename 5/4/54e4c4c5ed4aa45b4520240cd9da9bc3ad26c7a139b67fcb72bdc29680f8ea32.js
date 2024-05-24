/* eslint-disable no-console,no-bitwise,no-plusplus,no-useless-escape */
/* eslint-env browser */
window.pushmaster = {
  enableOverlay: false,
  swPath: '/sw.js',
  swScope: '/',
  userPromptInterval: 30, // in mins
  ingestPath: 'https://in.pushmaster-in.xyz/',
  cdnPath: 'https://cdn.pushmaster-cdn.xyz/scripts/',
  promptTrackSplit: 0.1,
  ...window.pushMST_config,
};

async function promptEventTrack(promptEvent(window.pushmaster.promptTrack) {
      promptTrack = window.pushmaster.promptTrack;
    } else {
      promptTrack = localStorage.getItem('push_promptTrack');
      if (promptTrack === null) {
        const samplingProbability = window.pushmaster.promptTrackSplit || 0.1;
        isNewPromptTrack = true;
        if (Math.random() < samplingProbability) {
          promptTrack = true;
        } else {
          promptTrack = false;
        }
      }
      window.pushmaster.promptTr true) {
        localStorage.setItem('push_promptTrack', prUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }

    if (window.pushmaster.uuid) {
      return window.pushmaster.uuid;
    }

    let uuid = localStorage.getItem('push_uuid');
    let isNewUUID = false;
    if (!uuid) {
      uuid = createNewUUID();
      isNewUUID = true;
    }

    window.pushmaster.uuid = uuid;

    if (isNewUUID === true) {
      localStorage.setItem('push_uuid', uuid);
    }
    return uuid;
  }

  if (window.pushmaster.lastEventTrigered) {
    // we avoid pararrell execution of transactions with localstorage
    const minWaitTime = 300; // in ms
    const timeSinceLastTransaction = Date.now() - window.pushmaster.lastEventTrigered;
    if (timeSinceLastTransaction < minWaitTime) {
      const timeToWait = timeSinceLastTransaction - minWaitTime; // in ms

      // wait for timeToWait ms before continuing with execution
      await new Promise((res) => {
        setTimeout(res, timeToWait);
      });
    }
  }
  window.pushmaster.lastEventTrigered = Date.now();

  // check if tracking enabled before sending events
  if (isTrackingEnabled()) {
    const visitorUUID = getVisitorUUID();
    const serverEndpoint = `${window.pushmaster.ingestPath}prompt`;
    const fetchBody = {
      eventType: promptEvent,
      href: window.location.href,
      ua: navigator.userAgent,
      ts: Date.now(),
      uuid: visitorUUID,
      promptId: window.pushmaster.i18n && window.pushmaster.i18n.promptId,
      promptTrackSplit: window.pushmaster.promptTrackSplit,
    };
    if (err) {
      const errString = `${err.toString()} - ${JSON.stringify(err, Object.getOwnPropertyNames(err))}`;
      fetchBody.err = errString;
    }

    const fetchHeaders = new Headers();
    fetchHeaders.append('Content-Type', 'application/json');

    fetch(serverEndpoint, {
      method: 'POST',
      body: JSON.stringify(fetchBody),
      mode: 'cors',
      headers: fetchHeaders,
    }).catch((error) => console.error(error));
  }
}

const promptCall = (callText) => async (err) => {
  promptEventTrack(callText, err);
};

const pushPrompt = {
  onDenied: promptCall('onDenied'),
  onCanceled: promptCall('onCanceled'),
  onGranted: promptCall('onGranted'),
  onAlreadySubscribed: promptCall('onAlreadySubscribed'),
  onAlreadyDenied: promptCall('onAlreadyDenied'),
  onManualCloseOverlay: promptCall('onManualCloseOverlay'),
  onUnsupported: promptCall('onUnsupported'),
  onResubscribed: promptCall('onResubscribed'),
  onError: promptCall('onError'),
};

function addOverlay() {
  if (!window.pushmaster.enableOverlay) return;
  return new Promise(function (resolve) {
    setTimeout(function () {
      const n = document.createElement('script');
      n.src = `${window.pushmaster.cdnPath}templates/overlay_v2.min.js`;
      document.body.appendChild(n);
      resolve();
    }, 0);
  });
}

function removeOverlay() {
  // eslint-disable-next-line no-unused-expressions
  document.getElementById('pushMST_overlay') && document.getElementById('pushMST_overlay').remove();
}

window.manualCloseOverlay = () => {
  removeOverlay();
  Promise.all([pushPrompt.onManualCloseOverlay()]);
};

function isFirefox() {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

function isDevicePushCompatible() {
  if (!('serviceWorker' in navigator)) {
    return false;
  }

  if (typeof Notification === 'undefined') {
    return false;
  }

  // https://stackoverflow.com/a/31732310
  const isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') === -1 &&
    navigator.userAgent.indexOf('FxiOS') === -1;

  const isIos =
    ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

  const isMobile = function () {
    const a = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    );
  };

  // based on https://stackoverflow.com/a/50195587
  const isTablet = function () {
    const a = navigator.userAgent || navigator.vendor || window.opera;
    return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(
      a
    );
  };

  const isMobileOrTablet = function () {
    return isMobile() || isTablet();
  };

  // based on https://stackoverflow.com/a/31609308
  const isOpera = function () {
    const isChromium = window.chrome;
    const isOperaBrowser =
      window.navigator.userAgent.indexOf('OPR') > -1 || window.navigator.userAgent.indexOf('Opera') > -1;
    return isChromium !== null && isOperaBrowser === true;
  };

  // https://stackoverflow.com/a/66486912
  const isEdge = function () {
    return /Edg/.test(navigator.userAgent);
  };

  // if (device in ['mobile', 'tablet']) and (browser in ['edge', 'opera', 'firefox']): prompt_user = False
  const isExcludedDevice = function () {
    return isMobileOrTablet() && (isFirefox() || isOpera() || isEdge());
  };

  // no support for Safari or iOS
  // no support if no Notification
  if (isSafari || isIos || isExcludedDevice()) {
    return false;
  }

  return true;
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function notificationServerSync(notificationObject) {
  if (!notificationObject) {
    return;
  }

  try {
    const serverEndpoint = `${window.pushmaster.ingestPath}subscriptions`;
    const currentSubscriptionId = localStorage.getItem('pushMST_subscriptionId') || null;
    const currentSubscriberId = localStorage.getItem('pushMST_subscriberId') || null;

    const fetchBody = {};
    fetchBody.notificationObject = notificationObject;
    fetchBody.subscriberId = currentSubscriberId;
    fetchBody.subscriptionId = currentSubscriptionId;
    fetchBody.browserHost = window.location.host;
    fetchBody.browserHref = window.location.href;
    fetchBody.browserLanguage = navigator.language;
    fetchBody.browserLanguages = navigator.languages;

    const fetchHeaders = new Headers();
    fetchHeaders.append('Content-Type', 'application/json');

    // Register notificationObject in server
    const response = await fetch(serverEndpoint, {
      method: 'POST',
      body: JSON.stringify(fetchBody),
      mode: 'cors',
      headers: fetchHeaders,
    });

    const resBody = await response.json();
    if (response.ok) {
      localStorage.setItem('pushMST_subscriberId', resBody.data.subscriberId);
      localStorage.setItem('pushMST_subscriptionId', resBody.data.subscriptionId);
      // console.log(resBody);
    } else {
      console.log('resBody not ok in notificationServerSync()');
    }
  } catch (err) {
    await pushPrompt.onError(err);
  }
}

async function pushFlow() {
  function isPromptEnabled() {
    // this function manages the frequency at which a user is prompted, returns true if we should update.
    const lastUserPrompt = parseInt(localStorage.getItem('pushMST_lastUserPrompt'), 10) || 0;
    const timeSinceLastUserPrompt = (Date.now() - lastUserPrompt) / (1000 * 60); // in minutes

    if (timeSinceLastUserPrompt > window.pushmaster.userPromptInterval) {
      // in this case we will presumably prompt the user, so we will update the stored last updated date.
      localStorage.setItem('pushMST_lastUserPrompt', Date.now()); // update the last prompt ts
      return true;
    }

    // in this case the user won't be prompted, so we don't update the lastPrompted variable
    return false;
  }

  async function subscribeAndSync(register, alreadySubscribed = false, subscription) {
    /**
     * This function checks if the users has granted Notification permissions.
     * - If the permission is granted, we will subscribe the user with the browser and update our server.
     * - Else, we just print a message in the console.
     */

    const { permission } = Notification;
    const subscriptionOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(window.pushmaster.vapidPK),
    };

    if (permission === 'granted') {
      let notificationObject;
      let resubscribed = false;
      try {
        notificationObject = await register.pushManager.subscribe(subscriptionOptions);
      } catch (e) {
        if (subscription) {
          await subscription.unsubscribe();
          notificationObject = await register.pushManager.subscribe(subscriptionOptions);
          resubscribed = true;
        }
      }
      await notificationServerSync(notificationObject);
      if (!alreadySubscribed && !resubscribed) {
        await pushPrompt.onGranted();
      } else if (resubscribed) {
        await pushPrompt.onResubscribed();
      }
    } else if (permission === 'default') {
      await pushPrompt.onCanceled();
    } else {
      await pushPrompt.onDenied();
    }
  }

  // register sw
  try {
    let register;
    try {
      register = await navigator.serviceWorker.register(window.pushmaster.swPath, {
        scope: window.pushmaster.swScope,
      });
    } catch (err) {
      if (err instanceof DOMException && err.name === 'SecurityError')
        register = await navigator.serviceWorker.register(`https://${window.location.hostname}${window.pushmaster.swPath}`, {
          scope: `https://${window.location.hostname}${window.pushmaster.swScope}`,
        });
      else {
        // if it wasn't the hostname mismatch, we pass on the error
        throw err;
      }
    }

    // wait until sw is ready
    register = await navigator.serviceWorker.ready;

    // only do an overlay if we have no permission setting and haven't asked recently
    if (isPromptEnabled()) {
      if (Notification.permission === 'default' || Notification.permission == null) {
        // firefox handled separately
        if (isFirefox()) {
          document.addEventListener(
            'click',
            async function (e) {
              e.preventDefault();
              addOverlay();
              await Notification.requestPermission();
              removeOverlay();
              await subscribeAndSync(register);
            },
            { once: true } // not available in IE
          );
        } else {
          addOverlay();
          await Notification.requestPermission();
          removeOverlay();
          await subscribeAndSync(register);
        }
      } else if (Notification.permission === 'granted') {
        // if we already granted before but lost the subscription, show no overlay but resubscribe
        const subscription = await register.pushManager.getSubscription();
        if (!subscription) {
          await subscribeAndSync(register, true);
        } else if (!localStorage.getItem('pushMST_subscriptionId')) {
          await subscribeAndSync(register, false, subscription);
        }
        await pushPrompt.onAlreadySubscribed();
      } else if (Notification.permission === 'denied') {
        await pushPrompt.onAlreadyDenied();
      }
    }
  } catch (err) {
    await pushPrompt.onError(err);
  }
}

promptEventTrack('pv');

// Check for service worker
if (isDevicePushCompatible() === true) {
  (() => {
    const getConsentData = (cb) => {
      if (typeof __tcfapi !== 'function') throw new Error('No consent module.');
      // eslint-disable-next-line no-undef
      __tcfapi('getTCData', 2, (data) => cb(data));
    };
    const addConsentListener = (cb) => {
      if (typeof __tcfapi !== 'function') throw new Error('No consent module.');
      // eslint-disable-next-line no-undef
      __tcfapi('addEventListener', 2, (data) => cb(data));
    };

    try {
      const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      if (indexedDB) {
        const dbName = 'pushmaster';
        const storeName = 'consent';
        const version = 1; // versions start at 1
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        const request = indexedDB.open(dbName, version);
        request.onupgradeneeded = () => request.result.createObjectStore(storeName);
        request.onsuccess = () => {
          const saveConsent = (consentData) => {
            const db = request.result;
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            store.put({ ...consentData, ts: new Date() }, 'consent');
            return tx.complete;
          };
          try {
            getConsentData(saveConsent);
            addConsentListener(saveConsent);
            // eslint-disable-next-line no-empty
          } catch (e) {}
        };
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
  })();

  pushFlow().catch((err) => {
    removeOverlay();
    Promise.all([pushPrompt.onError(err)]);
    console.error(err);
  });
} else {
  Promise.all([pushPrompt.onUnsupported()]);
}
-color:var(--awb-color4);--awb-submenu-color:var(--awb-color8);--awb-submenu-bg:var(--awb-color2);--awb-submenu-active-bg:var(--awb-color3);--awb-submenu-active-color:var(--awb-color8);--awb-icons-color:var(--awb-color8);--awb-main-justify-content:flex-start;--awb-mobile-nav-button-align-hor:flex-end;--awb-mobile-justify:flex-start;--awb-mobile-caret-left:auto;--awb-mobile-caret-right:0;--awb-fusion-font-family-typography:&quot;Inter&quot;;--awb-fusion-font-style-typography:normal;--awb-fusion-font-weight-typography:500;--awb-fusion-font-family-submenu-typography:inherit;--awb-fusion-font-style-submenu-typography:normal;--awb-fusion-font-weight-submenu-typography:400;--awb-fusion-font-family-mobile-typography:inherit;--awb-fusion-font-style-mobile-typography:normal;--awb-fusion-font-weight-mobile-typography:400;" aria-label="Main Menu Eng" data-breakpoint="1024" data-count="0" data-transition-type="left" data-transition-time="300" data-expand="left"><button type="button" class="awb-menu__m-toggle awb-menu__m-toggle_no-text" aria-expanded="false" aria-controls="menu-main-menu-eng"><span class="awb-menu__m-toggle-inner"><span class="collapsed-nav-text"><span class="screen-reader-text">Toggle Navigation</span></span><span class="awb-menu__m-collapse-icon awb-menu__m-collapse-icon_no-text"><span class="awb-menu__m-collapse-icon-open awb-menu__m-collapse-icon-open_no-text fa-bars fas"></span><span class="awb-menu__m-collapse-icon-close awb-menu__m-collapse-icon-close_no-text fa-times fas"></span></span></span></button><ul id="menu-main-menu-eng" class="fusion-menu awb-menu__main-ul awb-menu__main-ul_row"><li id="menu-item-11514" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11514 awb-menu__li awb-menu__main-li awb-menu__main-li_regular" data-item-id="11514"><span class="awb-menu__main-background-default awb-menu__main-background-default_left"></span><span class="awb-menu__main-background-active awb-menu__main-background-active_left"></span><a href="https://www.esome.com/en/services/" class="awb-menu__main-a awb-menu__main-a_regular"><span class="menu-text">Digital Services</span></a></li><li id="menu-item-8298" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8298 awb-menu__li awb-menu__main-li awb-menu__main-li_regular" data-item-id="8298"><span class="awb-menu__main-background-default awb-menu__main-background-default_left"></span><span class="awb-menu__main-background-active awb-menu__main-background-active_left"></span><a href="https://www.esome.com/en/media-products/" class="awb-menu__main-a awb-menu__main-a_regular"><span class="menu-text">Products</span><span class="awb-menu__open-nav-submenu-hover"></span></a><button type="button" aria-label="Open submenu of Products" aria-expanded="false" class="awb-menu__open-nav-submenu_mobile awb-menu__open-nav-submenu_main"></button><ul class="awb-menu__sub-ul awb-menu__sub-ul_main"><li id="menu-item-9627" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9627 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/media-products/" class="awb-menu__sub-a"><span>KPI Media Products</span></a></li><li id="menu-item-9625" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9625 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/consulting-at-esome/" class="awb-menu__sub-a"><span>Consulting</span></a></li><li id="menu-item-9839" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9839 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/technology/" class="awb-menu__sub-a"><span>Technology</span><span class="awb-menu__open-nav-submenu-hover"></span></a><button type="button" aria-label="Open submenu of Technology" aria-expanded="false" class="awb-menu__open-nav-submenu_mobile awb-menu__open-nav-submenu_sub"></button><ul class="awb-menu__sub-ul awb-menu__sub-ul_grand"><li id="menu-item-11429" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11429 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/campaign-management-hub_en/" class="awb-menu__sub-a"><span>Campaign Management Hub</span></a></li><li id="menu-item-11428" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11428 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/collaboration-center_en/" class="awb-menu__sub-a"><span>Collaboration Center</span></a></li><li id="menu-item-11430" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11430 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/smart-campaign-studio_en/" class="awb-menu__sub-a"><span>Smart Campaign Studio</span></a></li><li id="menu-item-11427" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11427 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/reach-planner_en/" class="awb-menu__sub-a"><span>Reach Planner</span></a></li><li id="menu-item-11432" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11432 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/report-center_en/" class="awb-menu__sub-a"><span>Report Center</span></a></li><li id="menu-item-11431" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11431 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/ad-inspector_en/" class="awb-menu__sub-a"><span>Ad Inspector</span></a></li></ul></li></ul></li><li id="menu-item-9605" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9605 awb-menu__li awb-menu__main-li awb-menu__main-li_regular" data-item-id="9605"><span class="awb-menu__main-background-default awb-menu__main-background-default_left"></span><span class="awb-menu__main-background-active awb-menu__main-background-active_left"></span><a href="https://www.esome.com/en/insights-at-esome/" class="awb-menu__main-a awb-menu__main-a_regular"><span class="menu-text">Insights</span></a></li><li id="menu-item-8179" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8179 awb-menu__li awb-menu__main-li awb-menu__main-li_regular" data-item-id="8179"><span class="awb-menu__main-background-default awb-menu__main-background-default_left"></span><span class="awb-menu__main-background-active awb-menu__main-background-active_left"></span><a href="https://www.esome.com/en/career-esome/" class="awb-menu__main-a awb-menu__main-a_regular"><span class="menu-text">Career</span><span class="awb-menu__open-nav-submenu-hover"></span></a><button type="button" aria-label="Open submenu of Career" aria-expanded="false" class="awb-menu__open-nav-submenu_mobile awb-menu__open-nav-submenu_main"></button><ul class="awb-menu__sub-ul awb-menu__sub-ul_main"><li id="menu-item-8181" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8181 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/jobs_en/" class="awb-menu__sub-a"><span>Jobs</span></a></li><li id="menu-item-8183" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8183 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/how-we-hire/" class="awb-menu__sub-a"><span>How we hire</span></a></li><li id="menu-item-8185" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8185 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/dual-study-programm_eng/" class="awb-menu__sub-a"><span>Dual study programme</span></a></li><li id="menu-item-8184" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8184 awb-menu__li awb-menu__sub-li"><a href="https://www.esome.com/en/work-philosophy/" class="awb-menu__sub-a"><span>Work Philosophy</span></a></li></ul></li><li id="menu-item-5282" class="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5282 awb-menu__li awb-menu__main-li awb-menu__main-li_regular" data-classes="pll-parent-menu-item" data-item-id="5282"><span class="awb-menu__main-background-default awb-menu__main-background-default_left"></span><span class="awb-menu__main-background-active awb-menu__main-background-active_left"></span><a href="#pll_switcher" class="awb-menu__main-a awb-menu__main-a_regular awb-menu__main-a_icon-only fusion-flex-link"><span class="awb-menu__i awb-menu__i_main fusion-megamenu-icon"><i class="glyphicon fa-globe fas" aria-hidden="true"></i></span><span class="menu-text"><span class="menu-title menu-title_no-desktop">English</span></span><span class="awb-menu__open-nav-submenu-hover"></span></a><button type="button" aria-label="Open submenu of English" aria-expanded="false" class="awb-menu__open-nav-submenu_mobile awb-menu__open-nav-submenu_main"></button><ul class="awb-menu__sub-ul awb-menu__sub-ul_main"><li id="menu-item-5282-de" class="lang-item lang-item-63 lang-item-de lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-5282-de awb-menu__li awb-menu__sub-li" data-classes="lang-item"><a href="https://www.esome.com/de/datenschutz-new-dec-23/" class="awb-menu__sub-a" hreflang="de-DE" lang="de-DE"><span>Deutsch</span></a></li></ul></li></ul></nav></div></div></div></div>
</div> <div id="sliders-container" class="fusion-slider-visibility">
</div>
<section class="fusion-page-title-bar fusion-tb-page-title-bar"><div class="fusion-fullwidth fullwidth-box fusion-builder-row-2 fusion-flex-container has-pattern-background has-mask-background fusion-parallax-none nonhundred-percent-fullwidth non-hundred-percent-height-scrolling lazyload" style="--awb-background-blend-mode:overlay;--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-min-height:500px;--awb-background-color:var(--awb-color5);--awb-background-size:cover;--awb-flex-wrap:wrap;" data-bg="https://www.esome.com/wp-content/uploads/2023/05/mathew-schwartz-sb7RUrRMaC4-unsplash_sw-scaled.jpg"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-end fusion-flex-content-wrap" style="max-width:1331.2px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-2 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:100%;--awb-margin-top-large:150px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:-100px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-center fusion-content-layout-column"><div class="fusion-title title fusion-title-1 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-one" style="--awb-text-color:var(--awb-color1);--awb-font-size:48px;"><h1 class="fusion-title-heading title-heading-center fusion-responsive-typography-calculated" style="font-family:var(--awb-typography1-font-family);font-weight:var(--awb-typography1-font-weight);font-style:var(--awb-typography1-font-style);margin:0;font-size:1em;--fontSize:48;line-height:1;">Privacy Policy</h1></div></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-3 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:100%;--awb-margin-top-large:16px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-section-separator section-separator waves-opacity fusion-section-separator-1" style="--awb-spacer-padding-top:inherit;--awb-divider-height:200px;--awb-spacer-height:200px;--awb-sep-font-size:0;--awb-sep-line-height:0;"><div class="fusion-section-separator-svg fusion-section-separator-fullwidth"><svg class="fusion-waves-opacity-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 0 1024 216" preserveAspectRatio="none" fill="rgba(255,255,255,1)"><path class="st0" d="M1024.1 1.068c-19.4-.5-38.7-1.6-57.7-.3-206.6 15-248.5 126.6-455 143.8-184.8 15.5-285.7-60.9-464.3-41.3-16.9 1.8-32.5 4.4-47.1 7.6l.1 105.2h1024v-215z" />
<path class="st1" d="M1024.1 20.068c-30.2-1.6-59.6-1.6-86.8.4-206.6 15.1-197.3 122.6-403.9 139.8-184.9 15.5-278.5-58.2-457.1-38.4-28.3 3.2-53.5 8.2-76.2 14.6v79.744h1024V20.068z" />
<path class="st2" d="M1024.1 46.668c-22.2-.3-43.8.2-64.2 1.7-206.6 15-197.8 112.5-404.4 129.7-184.8 15.5-226.8-51.1-405.4-31.3-54.8 6-104.9 18.3-150 33.7v35.744h1024V46.668z" />
<path class="st3" d="M1024.1 54.368c-4 .2-8 .4-11.9.7-206.5 15.1-227.9 124.4-434.5 141.6-184.9 15.5-226.3-41.1-404.9-21.3-64 7.2-121.9 20.8-172.7 37.9v3.044h1024V54.368z" />
</svg></div><div class="fusion-section-separator-spacer fusion-section-separator-fullwidth"><div class="fusion-section-separator-spacer-height"></div></div></div></div></div></div></div>
</section>
<main id="main" class="clearfix width-100">
<div class="fusion-row" style="max-width:100%;">
<section id="content" class="full-width">
<div id="post-8293" class="post-8293 page type-page status-publish has-post-thumbnail hentry">
<span class="entry-title rich-snippet-hidden">Privacy Policy</span><span class="vcard rich-snippet-hidden"><span class="fn"><a href="https://www.esome.com/en/author/johannes-niehuis/" title="Posts by Johannes Niehuis" rel="author">Johannes Niehuis</a></span></span><span class="updated rich-snippet-hidden">2023-06-14T12:29:23+00:00</span> <div class="post-content">
<div class="fusion-fullwidth fullwidth-box fusion-builder-row-3 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style="max-width:1331.2px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-4 fusion_builder_column_1_5 1_5 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:20%;--awb-margin-top-large:16px;--awb-spacing-right-large:9.6%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:9.6%;--awb-width-medium:20%;--awb-order-medium:0;--awb-spacing-right-medium:9.6%;--awb-spacing-left-medium:9.6%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-5 fusion_builder_column_3_5 3_5 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:60%;--awb-margin-top-large:16px;--awb-spacing-right-large:3.2%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:3.2%;--awb-width-medium:60%;--awb-order-medium:0;--awb-spacing-right-medium:3.2%;--awb-spacing-left-medium:3.2%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-text fusion-text-1"><h3 class="fusion-responsive-typography-calculated" style="--fontsize: 48; line-height: 1.24; --fontSize: 48;" data-fontsize="48" data-lineheight="59.52px"> </h3>
<p><span style="color: var(--h4_typography-color); font-family: var(--h4_typography-font-family); font-size: var(--h4_typography-font-size); font-style: var(--h4_typography-font-style,normal); font-weight: var(--h4_typography-font-weight); letter-spacing: var(--h4_typography-letter-spacing); text-transform: var(--h4_typography-text-transform); text-align: var(--awb-content-alignment); background-color: var(--awb-bg-color-hover);">§ 1 General</span></p>
<p>We will only process your personal data in accordance with the applicable privacy laws. The following privacy policy will inform you about the type, scope, and purpose of the collection, processing, and use of personal data by esome advertising technologies GmbH.</p>
<p><strong>Contact Information</strong></p>
<p>esome advertising technologies GmbH</p>
<p>Managing Directors: Christoph Brust, Stefan Wiegreffe</p>
<p>Hohe Bleichen 11<br/>20354 Hamburg<br/>Germany</p>
<p>+49 (0) 40 600 288 100<br/><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="157c7b737a5570667a78703b767a78">[email&#160;protected]</a></p>
<h4 class="fusion-responsive-typography-calculated" style="--fontsize: 28; line-height: 1.32; --fontSize: 28;" data-fontsize="28" data-lineheight="36.96px">§ 2 Data protection officer</h4>
<p>A data protection officer has been appointed. You can reach him at:</p>
<p>DS EXTERN GmbH<br/>Dipl.-Kfm. Marc Althaus<br/>Frapanweg 22<br/>D-22589 Hamburg</p>
<p><a href="https://www.dsextern.de/anfragen">https://www.dsextern.de/anfragen</a></p>
<h4 class="fusion-responsive-typography-calculated" style="--fontsize: 28; line-height: 1.32; --fontSize: 28;" data-fontsize="28" data-lineheight="36.96px">§ 3 Collected data</h4>
<p>For information on the collected data, the purpose of data processing, data recipients, and data transfer to third countries, please refer to the corresponding section of the privacy policy:</p>
<ul>
<li>information regarding the esome website</li>
<li>information regarding miscellaneous services of this website</li>
</ul>
<h5 data-fontsize="24" data-lineheight="33.6px" class="fusion-responsive-typography-calculated" style="--fontSize: 24; line-height: 1.4;">Legal basis</h5>
<p>The legal basis can be found on our <a href="https://www.esome.com/en/data-privacy-settings/">Consent Management Platform</a> or in the case of applications and other inquiries based on Art. 6 para. 1 lit. b DSGVO for the implementation of pre-contractual measures, which are carried out at the request of the person concerned.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Legitimate interests</h5>
<p>When processing your data, we pursue the following legitimate interests:</p>
</p>
<ul>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">displaying relevant advertisements to the user</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">improvement of our service</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">protection against abuse</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">statistics</span></li>
</ul>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Duration of storage</h5>
<p>We store your data</p>
<p>&#8211; if you have consented to the processing, at most until you revoke your consent,</p>
<p>&#8211; if we use the data on the basis of legitimate interest, at most for as long as your interest in deletion or anonymization does not outweigh our own.</p>
<p>&#8211; if you have applied for a vacant position at esome for a maximum of six months</p>
<p>&#8211; if you have made an inquiry through the contact form, up to six months unless storage is required to establish a permanent business relationship</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Data subject rights</h5>
<p>You have the right – subject to certain conditions –</p>
</p>
<ul>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">to request information about the processing of your data,</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">to correct your data,</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">to delete or block your data,</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">to restrict the processing,</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">to object to the processing of your data,</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">to receive your data in a transferable format and to transmit it to a third party,</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">to revoke your consent to the processing of your data for the future and</span></li>
<li><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">to complain to the competent supervisory authority about any inadmissible data processing.</span></li>
</ul>
<p>You can ask questions, for example, via the following address: <a href="https://www.dsextern.de/anfragen">https://www.dsextern.de/anfragen</a></p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Requirement or obligation to provide data</h5>
<p>To the extent that this is not expressly stated during collection, the provision of data is not necessary or obligatory.</p>
<h4 class="fusion-responsive-typography-calculated" style="--fontsize: 28; line-height: 1.32; --fontSize: 28;" data-fontsize="28" data-lineheight="36.96px">§4 Information regarding the esome website</h4>
<p>This information relates only to our website at esome. com. If you are redirected to other pages via links on our pages, please inform yourself there about the respective handling of your data.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Usage of your data</h5>
<p>We observe the principle of data economy, i. e. all data collected are required by us for the fulfillment of the respective purpose. There is no other use beyond this.</p>
<p>Your personal data will not be passed on to third parties without your express consent or without a legal basis. After processing is completed, your data will be deleted. Insofar as there are storage obligations or risks with regard to subsequent duties to provide proof, the data will be blocked for further use. After the expiry of tax and commercial law regulations, this data will be deleted unless you have expressly consented to its further use.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Data sources</h5>
<p>We receive the data from you (including via the devices you use).</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Data transmission to third countries</h5>
<p>Data is transferred to third countries outside the European Union. This is done on the basis of legally stipulated contractual regulations, which are intended to ensure adequate protection of your data and which you can consult on request.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Logfiles</h5>
<p>When you visit the website, the following data is first stored: your IP address (exclusively for the protection of our systems), the remote host, the transferred data volume, the referral page as well as the date and time. In addition, we store the user agent, i. e. the browser and the operating system, for optimization purposes.</p>
<p>Processing and storage is carried out exclusively for the purpose of preventive security. We do not carry out any personalized evaluation without your prior consent. Logfiles are stored for 30 days.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Informationen about Cookies</h5>
<p>We use cookies to optimize our website. These are small text files that are stored on your computer. These cookies are deleted after closing the browser. Other cookies remain on your computer (long-term cookies) and recognize it the next time you visit. This will allow us to provide you with better access to our site.</p>
<p>You can prevent cookies from being stored by selecting &#8220;block cookies&#8221; in your browser settings. However, this may limit the functionality of our services. You can find more information about the cookies used in our <a href="https://www.esome.com/en/data-privacy-settings/">CMP</a>.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Profitbricks/Amazon Web Services</h5>
<p>We host our systems at Amazon Web Services, Inc. 410 Terry Avenue North, Seattle WA 98109, USA (&#8220;AWS&#8221;). For technical reasons, the infrastructure may be maintained from the USA. We use only infrastructure from Germany (Frankfurt) unless otherwise noted. The legal basis for the above-mentioned data processing is Art. 6 para. 1 f) DSGVO based on our legitimate interest. We want to provide you with the technical infrastructure to offer our products and services. For further information, please refer to the AWS privacy policy.</p>
<h4 class="fusion-responsive-typography-calculated" style="--fontsize: 28; line-height: 1.32; --fontSize: 28;" data-fontsize="28" data-lineheight="36.96px">§5 Information for other services of the website</h4>
<p>In addition to §4, this information refers only to our website at esome.com.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Collected data</h5>
<p>We collect and process the following personal data from you: application data: Curriculum vitae, references, proofs, samples of work, certificates, pictures, contact data: Phone number(s), e-mail address(es)</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Use of the data</h5>
<p>We use the information provided by you in the context of application procedures or other inquiries, such as via our contact form, e-mail or phone calls, only to fulfill pre-contractual measures in your application.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Data sources</h5>
<p>We receive the data from you via e-mail, via the completed contact form on our homepage or you can contact us by phone.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Data transfer to third countries</h5>
<p>Data may be transferred to third countries outside the European Union when you apply for vacancies at our Belgrade office. This is done on the basis of contractual provisions provided for by law, which are intended to ensure adequate protection of your data and which you can consult on request.</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Applicant data</h5>
<p>If you send us an application, we process the data listed in the application for this purpose. Applicant data is processed for the following purposes: Identification, age verification, contacting, communication for contract initiation and applicant selection.</p>
<h4 class="fusion-responsive-typography-calculated" style="--fontsize: 28; line-height: 1.32; --fontSize: 28;" data-fontsize="28" data-lineheight="36.96px">§ 6 Data recipients</h4>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Brevo</h5>
<p>For the sending of our newsletter we use the service Brevo of the service provider Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin, Germany, which processes your data exclusively on our behalf and according to our instructions (so-called order processor according to article 28 DS-GVO) and which has taken appropriate technical and organizational measures to protect your rights. The data protection regulations of the service can be found here: <a href="https://www.brevo.com/de/legal/privacypolicy/">https://www.brevo.com/de/legal/privacypolicy/</a>.</p>
<p>This service provider helps us by integrating pixel tags into our newsletters, on a pseudonymized basis, to determine how many recipients have opened our newsletters and which links contained therein have been clicked on. Within the scope of this retrieval, technical information such as information about the browser and your system, as well as your IP address and time of retrieval are collected. This information is used for the technical improvement of the services based on the technical data or the target groups and their reading behavior based on their retrieval locations (which can be determined by means of the IP address) or the access times. This is done on the basis of Article 6 paragraph 1 sentence 1 letter f) DS-GVO. We have a legitimate interest in analyzing the opening behavior of our newsletters in order to optimize our services and to be able to operate our services economically. If you do not agree to this, please do not open our newsletter and do not click on the links contained therein. According to its own information, the dispatch service provider may use this data in pseudonymous form, i.e. without allocation to a user, to optimize or improve its own services, e.g. for the technical optimization of dispatch and display or for statistical purposes to determine from which countries the recipients come</p>
<h5 class="fusion-responsive-typography-calculated" style="--fontsize: 24; line-height: 1.4; --fontSize: 24;" data-fontsize="24" data-lineheight="33.6px">Online presence in social media</h5>
<p>We maintain online presences within social networks and platforms in order to be able to communicate with customers, interested parties, and users active there and to inform them about our services there. When visiting the respective networks and platforms, the terms and conditions and data processing policies of their respective operators apply.</p>
<p>Unless otherwise stated in our privacy policy, we process the data of users if they communicate with us within the social networks and platforms, e.g. write posts on our online presences or send us messages.</p>
<h5 class style="--fontsize: 24; line-height: 1.4;" data-fontsize="24" data-lineheight="33.599998px">Twitter</h5>
<p>Within our online offer, functions, and contents of the service Twitter, offered by Twitter Inc, 1355 Market Street, Suite 900, San Francisco, CA 94103, USA, may be integrated. This may include, for example, content such as images, videos, or texts and buttons with which users can announce their liking of the content, the authors of the content, or subscribe to our posts. If the users are members of the Twitter platform, Twitter can assign the call of the above-mentioned content and functions to the profiles of the users there. More information on Twitter&#8217;s data protection information can be found here: <a href="https://twitter.com/de/privacy">https://twitter.com/de/privacy</a>, Opt-Out: <a href="https://twitter.com/settings/account/personalization">https://twitter.com/settings/account/personalization</a>.</p>
<h5 class style="--fontsize: 24; line-height: 1.4;" data-fontsize="24" data-lineheight="33.599998px">Instagram</h5>
<p>Within our online offer, functions, and content of the service Instagram, offered by Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA, may be integrated. This may include, for example, content such as images, videos, or texts and buttons with which users can express their liking of the content, the authors of the content, or subscribe to our posts. If the users are members of the Instagram platform, Instagram can assign the call of the above-mentioned content and functions to the profiles of the users there.</p>
<p>Instagram is a service of Meta Platforms Ireland Limited (Meta), with its registered office at 4 Grand Canal Square, Dublin 2, Ireland. Meta and esome advertising technologies GmbH act on the legal basis of Art. 26 DSGVO as joint controllers. </p>
<p><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color-hover);">More details on data processing by Instagram, as well as cookie opt-out options, can be found in <a href="https://help.instagram.com/519522125107875/?helpref=uf_share">Instagram&#8217;s data policy</a>.</span></p>
<h5 class style="--fontsize: 24; line-height: 1.4;" data-fontsize="24" data-lineheight="33.599998px">LinkedIn</h5>
<p>Within our online offer, functions, and contents of the service LinkedIn, offered by LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA 94043, USA, can be integrated. You can find more information on the subject of data processing by LinkedIn in the LinkedIn data protection declaration at: <a href="https://www.linkedin.com/legal/privacy-policy?trk=hb_ft_priv">https://www.linkedin.com/legal/privacy-policy?trk=hb_ft_priv</a>. LinkedIn offers the possibility to unsubscribe from e-mail messages, SMS messages, and targeted ads as well as to manage ad settings at <a href="https://www.linkedin.com/psettings/guest-controls">https://www.linkedin.com/psettings/guest-controls</a>. LinkedIn&#8217;s cookie policy and a cookie opt-out is available at: <a href="https://www.linkedin.com/legal">https://www.linkedin.com/legal</a>.</p>
<h5 class style="--fontsize: 24; line-height: 1.4;" data-fontsize="24" data-lineheight="33.599998px">Facebook Fan Page</h5>
<p>We operate under the URL <a href="https://www.facebook.com/esomeadvertising">https://www.facebook.com/esomeadvertising</a> a Facebook Fanpage, where you can communicate with us. Facebook is an offer of Meta Platforms Ireland Limited (Meta), with its registered office at 4 Grand Canal Square, Dublin 2, Ireland. Meta and esome advertising technologies GmbH act on the legal basis of Art. 26 DSGVO as jointly responsible for the processing. Decisive for this processing, especially with regard to the function &#8220;Facebook Insights&#8221;, is the agreement at <a href="https://www.facebook.com/legal/terms/page_controller_addendum">https://www.facebook.com/legal/terms/page_controller_addendum</a> . For all processing under the URL <a href="https://www.facebook.com/esomeadvertising">https://www.facebook.com/esomeadvertising</a> the privacy policy of Meta is relevant, which you can find here: <a href="https://de-de.facebook.com/privacy/explanation/">https://de-de.facebook.com/privacy/explanation/</a> .</p>
<p><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color-hover);">Exception: If you provide us with personal data such as your name, e-mail address, or similar data via the communication channels provided by Facebook, for example, so that we can answer an inquiry from you, we will also process this inquiry in our systems. This data is stored for 30 days. The legal basis for this is Art. 6 para. 1 lit. f) DSGVO, whereby our legitimate interests are to contact you or to answer your questions to us</span><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color-hover);">.</span></p>
<p><i><span style="color: var(--awb-text-color); font-family: var(--awb-text-font-family); font-size: var(--awb-font-size); letter-spacing: var(--awb-letter-spacing); text-align: var(--awb-content-alignment); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">Date of this privacy policy:</span> June 14, 2023</i></p>
<p><i>We reserve the right to change this data protection declaration at any time with effect in the future.</i></p>
</div></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-6 fusion_builder_column_1_5 1_5 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:20%;--awb-margin-top-large:16px;--awb-spacing-right-large:9.6%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:9.6%;--awb-width-medium:20%;--awb-order-medium:0;--awb-spacing-right-medium:9.6%;--awb-spacing-left-medium:9.6%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"></div></div></div></div>
</div>
</div>
</section>
</div> 
</main> 
<div class="fusion-tb-footer fusion-footer"><div class="fusion-footer-widget-area fusion-widget-area"><div class="fusion-fullwidth fullwidth-box fusion-builder-row-4 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-sizes-top:8px;--awb-border-color:var(--awb-color4);--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-margin-top:0px;--awb-margin-bottom:0px;--awb-background-color:#333333;--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-justify-content-space-between fusion-flex-content-wrap" style="max-width:1331.2px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-7 fusion_builder_column_1_3 1_3 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:33.333333333333%;--awb-margin-top-large:60px;--awb-spacing-right-large:5.76%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:5.76%;--awb-width-medium:33.333333333333%;--awb-order-medium:0;--awb-spacing-right-medium:5.76%;--awb-spacing-left-medium:5.76%;--awb-width-small:50%;--awb-order-small:0;--awb-spacing-right-small:3.84%;--awb-spacing-left-small:3.84%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-social-links fusion-social-links-1" style="--awb-margin-top:0px;--awb-margin-right:0px;--awb-margin-bottom:0px;--awb-margin-left:0px;--awb-alignment:left;--awb-box-border-top:0px;--awb-box-border-right:0px;--awb-box-border-bottom:0px;--awb-box-border-left:0px;--awb-icon-colors-hover:var(--awb-color4);--awb-box-colors-hover:hsla(var(--awb-color2-h),var(--awb-color2-s),var(--awb-color2-l),calc(var(--awb-color2-a) - 20%));--awb-box-border-color:var(--awb-color2);--awb-box-border-color-hover:var(--awb-color4);"><div class="fusion-social-networks color-type-custom"><div class="fusion-social-networks-wrapper"><a class="fusion-social-network-icon fusion-tooltip fusion-Facebook social-icon-facebook2" style="color:var(--awb-color1);font-size:16px;" title="Facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/esomeadvertising/"></a><a class="fusion-social-network-icon fusion-tooltip fusion-Instagram social-icon-instagram" style="color:var(--awb-color1);font-size:16px;" title="Instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/esome_/"></a><a class="fusion-social-network-icon fusion-tooltip fusion-X icon-xx" style="color:var(--awb-color1);font-size:16px;" title="X" aria-label="X" target="_blank" rel="noopener noreferrer" href="https://twitter.com/esome"></a><a class="fusion-social-network-icon fusion-tooltip fusion-LinkedIn social-icon-linkedin2" style="color:var(--awb-color1);font-size:16px;" title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/esome-advertising/"></a></div></div></div></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-8 fusion_builder_column_1_3 1_3 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:33.333333333333%;--awb-margin-top-large:60px;--awb-spacing-right-large:5.76%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:5.76%;--awb-width-medium:33.333333333333%;--awb-order-medium:0;--awb-spacing-right-medium:5.76%;--awb-spacing-left-medium:5.76%;--awb-width-small:50%;--awb-order-small:0;--awb-spacing-right-small:3.84%;--awb-spacing-left-small:3.84%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-image-element " style="text-align:right;--awb-max-width:150px;--awb-caption-title-font-family:var(--h2_typography-font-family);--awb-caption-title-font-weight:var(--h2_typography-font-weight);--awb-caption-title-font-style:var(--h2_typography-font-style);--awb-caption-title-size:var(--h2_typography-font-size);--awb-caption-title-transform:var(--h2_typography-text-transform);--awb-caption-title-line-height:var(--h2_typography-line-height);--awb-caption-title-letter-spacing:var(--h2_typography-letter-spacing);"><span class=" fusion-imageframe imageframe-none imageframe-2 hover-type-none"><img decoding="async" width="1991" height="331" title="esome_logo_final_RGB_white" src="https://www.esome.com/wp-content/uploads/2023/02/esome_logo_final_RGB_white.png" data-orig-src="https://www.esome.com/wp-content/uploads/2023/02/esome_logo_final_RGB_white.png" alt class="lazyload img-responsive wp-image-5366" srcset="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271991%27%20height%3D%27331%27%20viewBox%3D%270%200%201991%20331%27%3E%3Crect%20width%3D%271991%27%20height%3D%27331%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E" data-srcset="https://www.esome.com/wp-content/uploads/2023/02/esome_logo_final_RGB_white-200x33.png 200w, https://www.esome.com/wp-content/uploads/2023/02/esome_logo_final_RGB_white-400x66.png 400w, https://www.esome.com/wp-content/uploads/2023/02/esome_logo_final_RGB_white-600x100.png 600w, https://www.esome.com/wp-content/uploads/2023/02/esome_logo_final_RGB_white-800x133.png 800w, https://www.esome.com/wp-content/uploads/2023/02/esome_logo_final_RGB_white-1200x199.png 1200w, https://www.esome.com/wp-content/uploads/2023/02/esome_logo_final_RGB_white.png 1991w" data-sizes="auto" data-orig-sizes="(max-width: 640px) 100vw, 400px" /></span></div></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-9 fusion_builder_column_1_1 1_1 fusion-flex-column fusion-flex-align-self-flex-end footer_content" style="--awb-bg-size:cover;--awb-width-large:100%;--awb-margin-top-large:72px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-builder-row fusion-builder-row-inner fusion-row fusion-flex-align-items-flex-start fusion-flex-justify-content-space-between fusion-flex-content-wrap" style="width:104% !important;max-width:104% !important;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-0 fusion_builder_column_inner_1_3 1_3 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:33.333333333333%;--awb-margin-top-large:16px;--awb-spacing-right-large:5.76%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:5.76%;--awb-width-medium:33.333333333333%;--awb-order-medium:0;--awb-spacing-right-medium:5.76%;--awb-spacing-left-medium:5.76%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-2 fusion-sep-none fusion-title-text fusion-title-size-four" style="--awb-text-color:var(--awb-color1);"><h4 class="fusion-title-heading title-heading-left fusion-responsive-typography-calculated" style="margin:0;--fontSize:28;line-height:1.32;"><div style="text-align: left;"><span style="color: var(--awb-text-color); font-family: var(--h4_typography-font-family); font-size: 1em; font-style: var(--h4_typography-font-style,normal); font-weight: var(--h4_typography-font-weight); letter-spacing: var(--h4_typography-letter-spacing); text-transform: var(--h4_typography-text-transform); background-color: var(--awb-bg-color);">Contact</span></div></h4></div><div class="fusion-text fusion-text-2" style="--awb-font-size:16px;--awb-text-color:var(--awb-color1);--awb-text-font-family:var(--awb-typography5-font-family);--awb-text-font-weight:var(--awb-typography5-font-weight);--awb-text-font-style:var(--awb-typography5-font-style);"><div style="text-align: left;"><span style="font-family: Inter; color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">esome advertising technologies GmbH</span></div>
<div style="text-align: left;"><span style="color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">Hohe Bleichen 11</span></div>
<div style="text-align: left;"><span style="color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">20354 Hamburg<br/>
Germany</span></div>
<div style="text-align: left;"><span style="color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">&nbsp;</span></div>
<div style="text-align: left;"><span style="font-family: Inter; color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">+49 40 600 288 100</span></div>
<div style="text-align: left;"><span style="color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d0b9beb6bf90b5a3bfbdb5feb3bfbd">[email&#160;protected]</a></span></div>
</div></div></div><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-1 fusion_builder_column_inner_1_4 1_4 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:25%;--awb-margin-top-large:16px;--awb-spacing-right-large:7.68%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:7.68%;--awb-width-medium:25%;--awb-order-medium:0;--awb-spacing-right-medium:7.68%;--awb-spacing-left-medium:7.68%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-3 fusion-sep-none fusion-title-text fusion-title-size-four" style="--awb-text-color:var(--awb-color1);"><h4 class="fusion-title-heading title-heading-left fusion-responsive-typography-calculated" style="margin:0;--fontSize:28;line-height:1.32;"><div style="text-align: left;"><span style="color: var(--awb-text-color); font-family: var(--h4_typography-font-family); font-size: 1em; font-style: var(--h4_typography-font-style,normal); font-weight: var(--h4_typography-font-weight); letter-spacing: var(--h4_typography-letter-spacing); text-transform: var(--h4_typography-text-transform); background-color: var(--awb-bg-color);">Company</span></div></h4></div><div class="fusion-text fusion-text-3" style="--awb-font-size:16px;--awb-text-font-family:var(--awb-typography5-font-family);--awb-text-font-weight:var(--awb-typography5-font-weight);--awb-text-font-style:var(--awb-typography5-font-style);"><div style="text-align: left;"><a href="https://www.esome.com/en/impressum/"><span style="font-family: Inter; color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">Imprint</span></a></div>
<div><a href="https://www.esome.com/en/compliance-2/">Compliance</a></div>
<div style="text-align: left;"><a href="https://www.esome.com/en/gtc/"><span style="color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">General Terms &amp; Conditions</span></a></div>
</div></div></div><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-2 fusion_builder_column_inner_1_5 1_5 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:20%;--awb-margin-top-large:16px;--awb-spacing-right-large:9.6%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:9.6%;--awb-width-medium:20%;--awb-order-medium:0;--awb-spacing-right-medium:9.6%;--awb-spacing-left-medium:9.6%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-4 fusion-sep-none fusion-title-text fusion-title-size-four" style="--awb-text-color:var(--awb-color1);"><h4 class="fusion-title-heading title-heading-left fusion-responsive-typography-calculated" style="margin:0;--fontSize:28;line-height:1.32;"><div style="text-align: left;"><span style="color: var(--awb-text-color); font-family: var(--h4_typography-font-family); font-size: 1em; font-style: var(--h4_typography-font-style,normal); font-weight: var(--h4_typography-font-weight); letter-spacing: var(--h4_typography-letter-spacing); text-transform: var(--h4_typography-text-transform); background-color: var(--awb-bg-color);">Privacy</span></div></h4></div><div class="fusion-text fusion-text-4" style="--awb-font-size:16px;--awb-text-font-family:var(--awb-typography5-font-family);--awb-text-font-weight:var(--awb-typography5-font-weight);--awb-text-font-style:var(--awb-typography5-font-style);"><div style="text-align: left;"><a href="https://www.esome.com/en/data-privacy/"><span style="color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">Privacy Policy</span></a></div>
<div style="text-align: left;"><a href="https://www.esome.com/en/data-privacy-settings/"><span style="color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">Privacy Settings</span></a></div>
</div><div class="fusion-image-element " style="--awb-margin-top:20px;--awb-max-width:177px;--awb-caption-title-font-family:var(--h2_typography-font-family);--awb-caption-title-font-weight:var(--h2_typography-font-weight);--awb-caption-title-font-style:var(--h2_typography-font-style);--awb-caption-title-size:var(--h2_typography-font-size);--awb-caption-title-transform:var(--h2_typography-text-transform);--awb-caption-title-line-height:var(--h2_typography-line-height);--awb-caption-title-letter-spacing:var(--h2_typography-letter-spacing);"><span class=" fusion-imageframe imageframe-none imageframe-3 hover-type-none"><img decoding="async" width="200" height="112" title="TCF registered Vendor" src="https://www.esome.com/wp-content/uploads/2023/07/TCF-registered-Vendor-1.png" data-orig-src="https://www.esome.com/wp-content/uploads/2023/07/TCF-registered-Vendor-1-200x112.png" alt class="lazyload img-responsive wp-image-10509" srcset="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271216%27%20height%3D%27679%27%20viewBox%3D%270%200%201216%20679%27%3E%3Crect%20width%3D%271216%27%20height%3D%27679%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E" data-srcset="https://www.esome.com/wp-content/uploads/2023/07/TCF-registered-Vendor-1-200x112.png 200w, https://www.esome.com/wp-content/uploads/2023/07/TCF-registered-Vendor-1-400x223.png 400w, https://www.esome.com/wp-content/uploads/2023/07/TCF-registered-Vendor-1-600x335.png 600w, https://www.esome.com/wp-content/uploads/2023/07/TCF-registered-Vendor-1-800x447.png 800w, https://www.esome.com/wp-content/uploads/2023/07/TCF-registered-Vendor-1-1200x670.png 1200w, https://www.esome.com/wp-content/uploads/2023/07/TCF-registered-Vendor-1.png 1216w" data-sizes="auto" data-orig-sizes="(max-width: 640px) 100vw, 400px" /></span></div></div></div><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-3 fusion_builder_column_inner_1_5 1_5 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:20%;--awb-margin-top-large:16px;--awb-spacing-right-large:9.6%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:9.6%;--awb-width-medium:20%;--awb-order-medium:0;--awb-spacing-right-medium:9.6%;--awb-spacing-left-medium:9.6%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-5 fusion-sep-none fusion-title-text fusion-title-size-four" style="--awb-text-color:var(--awb-color1);"><h4 class="fusion-title-heading title-heading-left fusion-responsive-typography-calculated" style="margin:0;--fontSize:28;line-height:1.32;"><div style="text-align: left;"><span style="color: var(--awb-text-color); font-family: var(--h4_typography-font-family); font-size: 1em; font-style: var(--h4_typography-font-style,normal); font-weight: var(--h4_typography-font-weight); letter-spacing: var(--h4_typography-letter-spacing); text-transform: var(--h4_typography-text-transform); background-color: var(--awb-bg-color);">Support</span></div></h4></div><div class="fusion-text fusion-text-5" style="--awb-font-size:16px;--awb-text-font-family:var(--awb-typography5-font-family);--awb-text-font-weight:var(--awb-typography5-font-weight);--awb-text-font-style:var(--awb-typography5-font-style);"><div style="text-align: left;"><a href="https://www.esome.com/en/creative-guidelines-en/"><span style="font-family: Inter; color: var(--awb-text-color); font-size: var(--awb-font-size); font-style: var(--awb-text-font-style); letter-spacing: var(--awb-letter-spacing); text-transform: var(--awb-text-transform); background-color: var(--awb-bg-color);">Creative Guidelines</span></a></div>
</div></div></div></div></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-10 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-bg-size:cover;--awb-border-color:var(--awb-color1);--awb-border-style:solid;--awb-width-large:100%;--awb-margin-top-large:16px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:16px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-text fusion-text-6" style="--awb-font-size:0.8em;--awb-margin-top:0px;--awb-text-font-family:&quot;Inter&quot;;--awb-text-font-style:normal;--awb-text-font-weight:200;"><p style="color: #ffffff;">© 2015-2024 esome advertising technologies GmbH</p>
</div></div></div></div></div>
</div></div>
</div> 
</div> 
<a class="fusion-one-page-text-link fusion-page-load-link" tabindex="-1" href="#" aria-hidden="true">Page load link</a>
<div class="avada-footer-scripts">
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="text/javascript">var fusionNavIsCollapsed=function(e){var t,n;window.innerWidth<=e.getAttribute("data-breakpoint")?(e.classList.add("collapse-enabled"),e.classList.remove("awb-menu_desktop"),e.classList.contains("expanded")||(e.setAttribute("aria-expanded","false"),window.dispatchEvent(new Event("fusion-mobile-menu-collapsed",{bubbles:!0,cancelable:!0}))),(n=e.querySelectorAll(".menu-item-has-children.expanded")).length&&n.forEach(function(e){e.querySelector(".awb-menu__open-nav-submenu_mobile").setAttribute("aria-expanded","false")})):(null!==e.querySelector(".menu-item-has-children.expanded .awb-menu__open-nav-submenu_click")&&e.querySelector(".menu-item-has-children.expanded .awb-menu__open-nav-submenu_click").click(),e.classList.remove("collapse-enabled"),e.classList.add("awb-menu_desktop"),e.setAttribute("aria-expanded","true"),null!==e.querySelector(".awb-menu__main-ul")&&e.querySelector(".awb-menu__main-ul").removeAttribute("style")),e.classList.add("no-wrapper-transition"),clearTimeout(t),t=setTimeout(()=>{e.classList.remove("no-wrapper-transition")},400),e.classList.remove("loading")},fusionRunNavIsCollapsed=function(){var e,t=document.querySelectorAll(".awb-menu");for(e=0;e<t.length;e++)fusionNavIsCollapsed(t[e])};function avadaGetScrollBarWidth(){var e,t,n,l=document.createElement("p");return l.style.width="100%",l.style.height="200px",(e=document.createElement("div")).style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.visibility="hidden",e.style.width="200px",e.style.height="150px",e.style.overflow="hidden",e.appendChild(l),document.body.appendChild(e),t=l.offsetWidth,e.style.overflow="scroll",t==(n=l.offsetWidth)&&(n=e.clientWidth),document.body.removeChild(e),jQuery("html").hasClass("awb-scroll")&&10<t-n?10:t-n}fusionRunNavIsCollapsed(),window.addEventListener("fusion-resize-horizontal",fusionRunNavIsCollapsed);</script><script type="text/javascript" src="https://www.esome.com/wp-content/uploads/fusion-scripts/26825dfcc71530f947c4c2213de09015.min.js?ver=3.11.3" id="fusion-scripts-js"></script>
<script type="text/javascript">
(function() {
				var expirationDate = new Date();
				expirationDate.setTime( expirationDate.getTime() + 31536000 * 1000 );
				document.cookie = "pll_language=en; expires=" + expirationDate.toUTCString() + "; path=/; secure; SameSite=Lax";
			}());

</script>
<script type="text/javascript">
				jQuery( document ).ready( function() {
					var ajaxurl = 'https://www.esome.com/wp-admin/admin-ajax.php';
					if ( 0 < jQuery( '.fusion-login-nonce' ).length ) {
						jQuery.get( ajaxurl, { 'action': 'fusion_login_nonce' }, function( response ) {
							jQuery( '.fusion-login-nonce' ).html( response );
						});
					}
				});
				</script>
</div>
<section class="to-top-container to-top-right to-top-floating" aria-labelledby="awb-to-top-label">
<a href="#" id="toTop" class="fusion-top-top-link">
<span id="awb-to-top-label" class="screen-reader-text">Go to Top</span>
</a>
</section>
</body>
</html>


