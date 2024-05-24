var sp = (function(self, undefined) {
  var async = true;
  var host;
  var global = window;
  var location = document.location;
  var toString = Object.prototype.toString;
  var withCredentials = global.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();
  var defaultEventName = 'pageview';
  var defaultTrackName = 'sp_alias';
  var pageViewed = false;
  let errorCacheKey = 'splunkErrorKey';
  let infoCacheKey = 'splunkInfoKey';
  let debugCacheKey = 'splunkDebugKey';
  var extractDomain = 

  var settings = {
    api_host: (location.protocol === 'https:' ? 'https://' : 'http://') + location.hostname + location.pathname,
    track_pageview: true,
    track_links_timeout: 300,
    cookie_name: '_sp_tracking',
    cookie_tracking: 'is_tracking_enabled',
    cookie_logging: 'is_logging_enabled',
    cookie_expiration: 365,
    cookie_domain: extractDomain(sp._endpoint)
  };

  /*\
  |*| Polyfill Date.toISOString
  \*/
  if (!Date.prototype.toISOString) {
    (function() {
      /**
           * @param {number} text
           * @returns {?}
           */
            /**
           * @returns {string}
           */
      Date.prototype.toISOString = 
    }());
  }

  /*\
  |*| Polyfill Array.forEach
  |*| Reference: http://es5.github.io/#x15.4.4.18
  |*| Production steps of ECMA-262, Edition 5, 15.4.4.18
  \*/
  if (!Array.prototype.forEach) {

    Array.prototype.forEach = function(callback, thisArg) {

      var T; var
        k;

      if (this === null || this === undefined) {
        throw new TypeError(' this is null or not defined');
      }

      // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
      var O = Object(this);

      // 2. Let lenValue be the result of calling the Get internal method of O with the argument 'length'.
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;

      // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
        T = thisArg;
      }

      // 6. Let k be 0
      k = 0;

      // 7. Repeat, while k < len
      while (k < len) {

        var kValue;

        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {

          // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
          kValue = O[k];

          // ii. Call the Call internal method of callback with T as the this value and
          // argument list containing kValue, k, and O.
          callback.call(T, kValue, k, O);
        }
        // d. Increase k by 1.
        k++;
      }
      // 8. return undefined
    };
  }

  /*\
  |*|
  |*|  :: cookies.js ::
  |*|
  |*|  A complete cookies reader/writer framework with full unicode support.
  |*|
  |*|  Revision #1 - September 4, 2014
  |*|
  |*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
  |*|  https://developer.mozilla.org/User:fusionchess
  |*|
  |*|  This framework is released under the GNU Public License, version 3 or later.
  |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
  |*|
  |*|  Syntaxes:
  |*|
  |*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
  |*|  * docCookies.getItem(name)
  |*|  * docCookies.removeItem(name[, path[, domain]])
  |*|  * docCookies.hasItem(name)
  |*|  * docCookies.keys()
  |*|
  \*/
  var docCookies = {
    getItem: 
    setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
        return false;
      }
      var sExpires = '';
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
            break;
          case String:
            sExpires = '; expires=' + vEnd;
            break;
          case Date:
            sExpires = '; expires=' + vEnd.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
      return true;
    },
    removeItem: function(sKey, sPath, sDomain) {
      if (!this.hasItem(sKey)) {
        return false;
      }
      document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
      return true;
    },
    hasItem: function(sKey) {
      if (!sKey) {
        return false;
      }
      return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    },
    keys: function() {
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
        aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
      }
      return aKeys;
    }
  };

  /**
   * @returns {Object} cookieData
   */
  var getCookie = function() {
    var rawCookie = docCookies.getItem(settings.cookie_name);
    var cookieData = {};
    if (rawCookie) {
      try {
        cookieData = JSON.parse(decodeURIComponent(rawCookie));
      } catch (n) {}
      return cookieData;
    }
    return false;
  };

  /**
   * @param {Object} cookieData
   */
  var setCookie = function(cookieData) {
    docCookies.setItem(settings.cookie_name, encodeURIComponent(JSON.stringify(cookieData)), 3600 * 24 * settings.cookie_expiration, '/', settings.cookie_domain);
  };

  /**
   * @returns {string} A new GUID.
   */
  var generateGUID = (function() {
        return guid;
  }());

  /**
   * @returns {string} The id if available, else false.
   */
  var hasId = function() {
    var cookieData;
    var identified = false;
    return (cookieData = getCookie()) && (identified = cookieData && cookieData.id), identified;
  };

  /**
   * @param {string} id
   * @returns {string} The current id.
   */
  var identify = function(id) {
    var cookieData;
    return cookieData = getCookie() || {}, cookieData.id = id ? id : generateGUID(), setCookie(cookieData), cookieData.id;
  };

  /**
   * @returns {string} The screen resolution
   */
  var getScreenResolution = 
  /**
   * @returns {string} The view port
   * https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
   */
  var getSystemViewPort = function() {
    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    return  width + "x" + height;
  };

  /**
   * @returns {string} The current id.
   */
  var getId = function() {
    var id;
    return (id = hasId()) || (id = identify()), id;
  };

  /**
   * @param {(Object|null)} element
   * @param {string} event
   * @param {(Function|null)} callback
   * @param {boolean} captures?
   * @returns {Function} The callback.
   */
  var addListener = function(el, event, callback, captures) {
    return el.addEventListener ? el.addEventListener(event, callback, captures || false) : el.attachEvent('on' + event, callback), callback;
  };

  /**
   * @param {(Function|null)} callback
   * @returns {number} A timeoutID.
   */
  var action = function(callback) {
    if (typeof callback === 'function') {
      var value = settings.track_links_timeout;
      return toString.call(value) != '[object Number]' ? (global.setTimeout(callback), void 0) : (global.setTimeout(callback, value), void 0);
    }
  };

  /**
   * @param {(Event|null)} event
   * @returns {boolean}
   */
  var handleKeyEvent = function(e) {
    if (e.metaKey || (e.altKey || (e.ctrlKey || e.shiftKey))) {
      return true;
    }
    var key = e.which;
    var button = e.button;
    return key || button === undefined ? key === 2 ? true : false : 1 & !button && (2 & !button && 4 & button);
  };
  /**
   * @param {String} key
   * @returns {Array}
   */
  var getMessage = (key) => {
    let message = localStorage.getItem(key);
    return message ? JSON.parse(message) : [];
  };

  var logToServer = () => {
    let trackingCookie = getCookie(settings.cookie_name);
    if (!trackingCookie || !trackingCookie[settings.cookie_logging]) {
      trackingCookie = {
        ...trackingCookie, [settings.cookie_logging]: (localStorage.getItem(settings.cookie_logging)==='true')
      }
    }
    if(trackingCookie && trackingCookie[settings.cookie_logging] === true) {
      let interval = setInterval(() => {
        let infoMessages = getMessage(infoCacheKey);
        let debugMessages = getMessage(debugCacheKey);
        let errorMessages = getMessage(errorCacheKey);
        let data = {
          eht: 'logging',
          aid: window.applicationId,
          a0: {
            error: errorMessages,
            info: infoMessages,
            debug: debugMessages
          }
        };
        if (errorMessages.length > 0 || infoMessages.length > 0 || debugMessages.length > 0) {
          fetch(settings.api_host + '/logger', {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify({data}) // body data type must match "Content-Type" header
          }).then(() => {
            console.log('logs sent to server');
            localStorage.removeItem(infoCacheKey);
            localStorage.removeItem(debugCacheKey);
            localStorage.removeItem(errorCacheKey);
          }).catch(;
        }
      }, 300000);
      window.addEventListener('beforeunload',  ;
    }
  };

  /**
   * @param {(Object|null)} options
   * @returns {Object} this
   */
  self.init = function(options) {
    for (var name in options) {
      var val = options[name];
      if (val !== undefined) {
        settings[name] = options[name];
      }
    }

    // Adding a custom event listener for handling the changes on the user's consent preferences
    if (window.OneTrust) {
      window.OneTrust.OnConsentChanged(function() {
        if (isOneTrustConscentAccepted() && !pageViewed) {
          self.pageview();
        }
      });
    }
    //Setup interval for logging every 5 mins
    logToServer();
    return settings.api_host = settings.api_host.replace('/$', ''), self;
  };

  /**
   * Checking OneTrust is defined and its performance tracking enabled
   * @returns {Boolean} A flag for disabling/enabling analytics tracking.
   */
  var isOneTrustConscentAccepted = function() {
    var OneTrust = window.OneTrust;
    var OnetrustActiveGroups = window.OnetrustActiveGroups;
    var dataLayer = window.dataLayer;
    var allowed = true;

    if (OneTrust) {

      if (OnetrustActiveGroups && OnetrustActiveGroups.indexOf('2') === -1) {

        allowed = false;

      } else if (OnetrustActiveGroups === undefined && dataLayer) {

        var oneTrustLoadEventDataEntry = null;
        for (var i = 0, dataLength = dataLayer.length; i < dataLength; i++) {
          if (dataLayer[i].event === 'OneTrustLoaded') {
            oneTrustLoadEventDataEntry = dataLayer[i];
            break;
          }
        };

        if (
          !oneTrustLoadEventDataEntry ||
          !oneTrustLoadEventDataEntry['OnetrustActiveGroups'] ||
          oneTrustLoadEventDataEntry['OnetrustActiveGroups'].indexOf('2') === -1
        ){
          allowed = false;
        }

      } else if (dataLayer === undefined) {

        allowed = false;

      }

    }

    return allowed;
  };

  var isTrackingDisabled = function() {
    let trackingCookie = getCookie(settings.cookie_name);
    if((trackingCookie && trackingCookie[settings.cookie_tracking] === false) || !isOneTrustConscentAccepted()) {
      return true;
    }
    return false;
  };
   /**
   * @param {object} data
   * @param {string} key
   * @returns null
   */
  var storeMessage = (data, key) => {
    let messages = localStorage.getItem(key);
    messages = messages ? JSON.parse(messages) : [];
    messages.push(data);
    localStorage.setItem(key, JSON.stringify(messages));
  };

  /**
   * @param {string} event
   * @param {(Object|null)} properties
   * @param {(Function|null)} callback
   */
  self.track = function(event, properties, callback) {
    if (isTrackingDisabled()) {
      console.log("Tracking disabled. Skipping event tracking...");
      return ;
    }

    properties = properties || {};
    var cookieData = getCookie();
    if (cookieData) {
      var key;
      for (key in cookieData) {
        properties[key] = cookieData[key];
      }
    }
    if (!properties.id) {
      properties.id = getId();
    }

    const props = {
      eht: event,
      et : (new Date()).toISOString(),
      aid: window.applicationId,
      an: window.applicationName,
      sr: getScreenResolution(),
      svp: getSystemViewPort(),
      url: location.href,
      edh: location.host,
      edt: document.title,
      edp: location.pathname,
      referrer: document.referrer
    };

    const result = {
      ...props,
      ...properties,
    };

    var path = settings.api_host + '/track?data=' + encodeURIComponent(JSON.stringify(result));
    if (withCredentials) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, async);
      xhr.withCredentials = async;
      xhr.send(null);
    } else {
      var el = document.createElement('script');
      el.type = 'text/javascript';
      el.async = async;
      el.defer = async;
      el.src = path;
      var insertAt = document.getElementsByTagName('script')[0];
      insertAt.parentNode.insertBefore(el, insertAt);
    }
    return action(callback), self;
  };

  /**
   * @param {string} url
   */
  self.pageview = function(url) {
    var props = {
      url: url || location.href,
      edh: location.host,
      edt: document.title,
      edp: location.pathname,
      referrer: document.referrer
    };
    if (settings.track_pageview) {
      return self.track(defaultEventName, props, ;
    }
    return 1;
  };

  /**
   * @param {(Object|null)} el
   * @param {?} eventName
   * @param {(Object|null|string)} properties
   */
  self.trackLink = function(el, eventName, properties) {
    return el ? (el.jquery && (el = el.get()), toString.call(el) != '[object Array]' && (el = [el]), el.forEach(function(el) {
      addListener(el, 'click', function(e) {
        var event = typeof eventName === 'function' ? eventName(el) : eventName;
        var props = typeof props === 'function' ? props(el) : props;
        props = props || {};
        props.href = el.href;
        props.text = el.textContent;
        self.track(event, props);
        if (el.href) {
          if (el.target !== '_blank') {
            if (!handleKeyEvent(e)) {
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
              action(;
            }
          }
        }
      });
    }), self) : false;
  };

  /**
   * @param {(string|null)} userId
   * @param {(Object|null)} userTraits
   * @returns {Object} self
   */
  self.identify = function(userId, userTraits) {
    if (userId) {
      var id = hasId();
      identify(userId);
      if (id) {
        self.track(defaultTrackName, {
          oldId: id
        });
      }
    }
    if (userTraits) {
      var cookieData = getCookie();
      var prop;
      for (prop in userTraits) {
        cookieData[prop] = userTraits[prop];
      }
      setCookie(cookieData);
    }
    return self;
  };
  self.log = {
    error: (data) => {
      storeMessage(data, errorCacheKey);
    },
    info: (data) => {
      storeMessage(data, infoCacheKey);
    },
    debug:   };
  if (self._endpoint) {
    self.init({
      api_host: self._endpoint
    });
  } else {
    console.error('[sp] Your must set your collector endpoint via sp.load(endpoint) in Splunk Analytics JS snippet');
  }
  //New Testing
  var doTrackPageView = false;
  var functionName = '';
  queueSize = self.length;
  for (var i = 0; queueSize > i; i++) {
    functionName = self[i][0];
    if (functionName == 'pageview') {
      doTrackPageView = true;
    }
    self[functionName].apply(null, self[i].slice(1));
  }
  return self.splice(0, queueSize), !doTrackPageView && (settings.track_pageview && self.pageview()), self;
}(sp || []));
