// @license  magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-v3.0
/* eslint-disable no-var, semi, prefer-arrow-callback, prefer-template */

/**
 * Collection of methods for sending analytics events to Archive.org's analytics server.
 *
 * These events are used for internal stats and sent (in anonymized form) to Google Analytics.
 *
 * @see analytics.md
 *
 * @type {Object}
 */
window.archive_analytics = (function defineArchiveAnalytics() {
  // keep orignal Date object so as not to be affected by wayback's
  // hijacking global Date object
  var Date = window.Date;
  var ARCHIVE_ANALYTICS_VERSION = 2;
  var DEFAULT_SERVICE = 'ao_2';
  var NO_SAMPLING_SERVICE = 'ao_no_sampling'; // sends every event instead of a percentage

  var startTime = new Date();

  /**
   * @return {Boolean}
   */
  function isPerformanceTimingApiSupported() {
    return 'performance' in window && 'timing' in window.performance;
  }

  /**
   * Determines how many milliseconds elapsed between the browser starting to parse the DOM and
   * the current time.
   *
   * Uses the Performance API or a fallback value if it's not available.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance_API
   *
   * @return {Number}
   */
  function getLoadTime() {
    var start;

    if (isPerformanceTimingApiSupported())
      start = window.performance.timing.domLoading;
    else
      start = startTime.getTime();

    return new Date().getTime() - start;
  }

  /**
   * Determines how many milliseconds elapsed between the user navigating to the page and
   * the current time.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance_API
   *
   * @return {Number|null} null if the browser doesn't support the Performance API
   */
  function getNavToDoneTime() {
    if (!isPerformanceTimingApiSupported())
      return null;

    return new Date().getTime() - window.performance.timing.navigationStart;
  }

  /**
   * Performs an arithmetic calculation on a string with a number and unit, while maintaining
   * the unit.
   *
   * @param {String} original value to modify, with a unit
   * @param {Function} doOperation accepts one Number parameter, returns a Number
   * @returns {String}
   */
  function computeWithUnit(original, doOperation) {
    var number = parseFloat(original, 10);
    var unit = original.replace(/(\d*\.\d+)|\d+/, '');

    return doOperation(number) + unit;
  }

  /**
   * Computes the default font size of the browser.
   *
   * @returns {String|null} computed font-size with units (typically pixels), null if it cannot be computed
   */
  function getDefaultFontSize() {
    var fontSizeStr;

    if (!('getComputedStyle' in window))
      return null;

    var style = window.getComputedStyle(document.documentElement);
    if (!style)
      return null;

    fontSizeStr = style.fontSize;

    // Don't modify the value if tracking book reader.
    if (document.querySelector('#BookReader'))
      return fontSizeStr;

    return computeWithUnit(fontSizeStr, function reverseBootstrapFontSize(number) {
      // Undo the 62.5% size applied in the Bootstrap CSS.
      return number * 1.6;
    });
  }

  /**
   * Get the URL parameters for a given Location
   * @param  {Location}
   * @return {Object} The URL parameters
   */
  function getParams(location) {
    if (!location) location = window.location;
    var vars;
    var i;
    var pair;
    var params = {};
    var query = location.search;
    if (!query) return params;
    vars = query.substring(1).split('&');
    for (i = 0; i < vars.length; i++) {
      pair = vars[i].split('=');
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
  }

  function getMetaProp(name) {
    var metaTag = document.querySelector('meta[property=' + name + ']');
    return metaTag ? metaTag.getAttribute('content') || null : null;
  }

  var ArchiveAnalytics = {
    /**
     * @type {String|null}
     */
    service: getMetaProp('service'),
    mediaType: getMetaProp('mediatype'),
    primaryCollection: getMetaProp('primary_collection'),

    /**
     * Key-value pairs to send in pageviews (you can read this after a pageview to see what was
     * sent).
     *
     * @type {Object}
     */
    values: {},

    /**
     * Sends an analytics ping, preferably using navigator.sendBeacon()
     * @param {Object}   values
     * @param {Function} [onload_callback]      (deprecated) callback to invoke once ping to analytics server is done
     * @param {Boolean}  [augment_for_ao_site]  (deprecated) if true, add some archive.org site-specific values
     */
    send_ping: function send_ping(values, onload_callback, augment_for_ao_site) {
      if (typeof window.navigator !== 'undefined' && typeof window.navigator.sendBeacon !== 'undefined')
        this.send_ping_via_beacon(values);
      else
        this.send_ping_via_image(values);
    },

    /**
     * Sends a ping via Beacon API
     * NOTE: Assumes window.navigator.sendBeacon exists
     * @param {Object} values Tracking parameters to pass
     */
    send_ping_via_beacon: function send_ping_via_beacon(values) {
      var url = this.generate_tracking_url(values || {});
      window.navigator.sendBeacon(url);
    },

    /**
     * Sends a ping via Image object
     * @param {Object} values Tracking parameters to pass
     */
    send_ping_via_image: function send_ping_via_image(values) {
      var url = this.generate_tracking_url(values || {});
      var loadtime_img = new Image(1, 1);
      loadtime_img.src = url;
      loadtime_img.alt = '';
    },

    /**
     * Construct complete tracking URL containing payload
     * @param {Object} params Tracking parameters to pass
     * @return {String} URL to use for tracking call
     */
    generate_tracking_url: function generate_tracking_url(params) {
      var baseUrl = '//analytics.archive.org/0.gif';
      var keys;
      var outputParams = params;
      var outputParamsArray = [];

      outputParams.service = outputParams.service || this.service || DEFAULT_SERVICE;

      // Build array of querystring parameters
      keys = Object.keys(outputParams);
      keys.forEach(function keyIteration(key) {
        outputParamsArray.push(encodeURIComponent(key) + '=' + encodeURIComponent(outputParams[key]));
      });
      outputParamsArray.push('version=' + ARCHIVE_ANALYTICS_VERSION);
      outputParamsArray.push('count=' + (keys.length + 2)); // Include `version` and `count` in count

      return baseUrl + '?' + outputParamsArray.join('&');
    },

    /**
     * @param {int} page Page number
     */
    send_scroll_fetch_event: function send_scroll_fetch_event(page) {
      var additionalValues = { ev: page };
      var loadTime = getLoadTime();
      var navToDoneTime = getNavToDoneTime();
      if (loadTime) additionalValues.loadtime = loadTime;
      if (navToDoneTime) additionalValues.nav_to_done_ms = navToDoneTime;
      this.send_event('page_action', 'scroll_fetch', location.pathname, additionalValues);
    },

    send_scroll_fetch_base_event: function send_scroll_fetch_base_event() {
      var additionalValues = {};
      var loadTime = getLoadTime();
      var navToDoneTime = getNavToDoneTime();
      if (loadTime) additionalValues.loadtime = loadTime;
      if (navToDoneTime) additionalValues.nav_to_done_ms = navToDoneTime;
      this.send_event('page_action', 'scroll_fetch_base', location.pathname, additionalValues);
    },

    /**
     * @param {Object} [options]
     * @param {String} [options.mediaType]
     * @param {String} [options.mediaLanguage]
     * @param {String} [options.page] The path portion of the page URL
     */
    send_pageview: function send_pageview(options) {
      var settings = options || {};

      var defaultFontSize;
      var loadTime = getLoadTime();
      var mediaType = settings.mediaType;
      var primaryCollection = settings.primaryCollection;
      var page = settings.page;
      var navToDoneTime = getNavToDoneTime();

      /**
       * @return {String}
       */
      function get_locale() {
        if (navigator) {
          if (navigator.language)
            return navigator.language;

          else if (navigator.browserLanguage)
            return navigator.browserLanguage;

          else if (navigator.systemLanguage)
            return navigator.systemLanguage;

          else if (navigator.userLanguage)
            return navigator.userLanguage;
        }
        return '';
      }

      defaultFontSize = getDefaultFontSize();

      // Set field values
      this.values.kind     = 'pageview';
      this.values.timediff = (new Date().getTimezoneOffset()/60)*(-1); // *timezone* diff from UTC
      this.values.locale   = get_locale();
      this.values.referrer = (document.referrer == '' ? '-' : document.referrer);

      if (loadTime)
        this.values.loadtime = loadTime;

      if (navToDoneTime)
        this.values.nav_to_done_ms = navToDoneTime;

      if (settings.trackingId) {
        this.values.ga_tid = settings.trackingId;
      }

      /* START CUSTOM DIMENSIONS */
      if (defaultFontSize)
        this.values.iaprop_fontSize = defaultFontSize;

      if ('devicePixelRatio' in window)
        this.values.iaprop_devicePixelRatio = window.devicePixelRatio;

      if (mediaType)
        this.values.iaprop_mediaType = mediaType;

      if (settings.mediaLanguage) {
        this.values.iaprop_mediaLanguage = settings.mediaLanguage;
      }

      if (primaryCollection) {
        this.values.iaprop_primaryCollection = primaryCollection;
      }
      /* END CUSTOM DIMENSIONS */

      if (page)
        this.values.page = page;

      this.send_ping(this.values);
    },

    /**
     * Sends a tracking "Event".
     * @param {string} category
     * @param {string} action
     * @param {string} label
     * @param {Object} additionalEventParams
     */
    send_event: function send_event(
        category,
        action,
        label,
        additionalEventParams
    ) {
      if (!label) label = window.location.pathname;
      if (!additionalEventParams) additionalEventParams = {};
      if (additionalEventParams.mediaLanguage) {
        additionalEventParams.ga_cd4 = additionalEventParams.mediaLanguage;
        delete additionalEventParams.mediaLanguage;
      }
      var eventParams = Object.assign(
        {
          kind: 'event',
          ec: category,
          ea: action,
          el: label,
          cache_bust: Math.random(),
        },
        additionalEventParams
      );
      this.send_ping(eventParams);
    },

    /**
     * Sends every event instead of a small percentage.
     *
     * Use this sparingly as it can generate a lot of events.
     *
     * @param {string} category
     * @param {string} action
     * @param {string} label
     * @param {Object} additionalEventParams
     */
    send_event_no_sampling: function send_event_no_sampling(
      category,
      action,
      label,
      additionalEventParams
    ) {
      var extraParams = additionalEventParams || {};
      extraParams.service = NO_SAMPLING_SERVICE;
      this.send_event(category, action, label, extraParams);
    },

    /**
     * @param {Object} options see this.send_pageview options
     */
    send_pageview_on_load: function send_pageview_on_load(options) {
      var self = this;
      window.addEventListener('load', function send_pageview_with_options() {
        self.send_pageview(options);
      });
    },

    /**
     * Handles tracking events passed in URL.
     * Assumes category and action values are separated by a "|" character.
     * NOTE: Uses the unsampled analytics property. Watch out for future high click links!
     * @param {Location}
     */
    process_url_events: function process_url_events(location) {
      var eventValues;
      var actionValue;
      var eventValue = getParams(location).iax;
      if (!eventValue) return;
      eventValues = eventValue.split('|');
      actionValue = eventValues.length >= 1 ? eventValues[1] : '';
      this.send_event_no_sampling(
        eventValues[0],
        actionValue,
        window.location.pathname
      );
    },

    /**
     * Attaches handlers for event tracking.
     *
     * To enable click tracking for a link, add a `data-event-click-tracking`
     * attribute containing the Google Analytics Event Category and Action, separated
     * by a vertical pipe (|).
     * e.g. `<a href="foobar" data-event-click-tracking="TopNav|FooBar">`
     *
     * To enable form submit tracking, add a `data-event-form-tracking` attribute
     * to the `form` tag.
     * e.g. `<form data-event-form-tracking="TopNav|SearchForm" method="GET">`
     *
     * Additional tracking options can be added via a `data-event-tracking-options`
     * parameter. This parameter, if included, should be a JSON string of the parameters.
     * Valid parameters are:
     * - service {string}: Corresponds to the Google Analytics property data values flow into
     */
    set_up_event_tracking: function set_up_event_tracking() {
      var self = this;
      var clickTrackingAttributeName = 'event-click-tracking';
      var formTrackingAttributeName = 'event-form-tracking';
      var trackingOptionsAttributeName = 'event-tracking-options';

      function handleAction(event, attributeName) {
        var selector = '[data-' + attributeName + ']';
        var eventTarget = event.target;
        if (!eventTarget) return;
        var target = eventTarget.closest(selector);
        if (!target) return;
        var categoryAction;
        var categoryActionParts;
        var options;
        categoryAction = target.dataset[toCamelCase(attributeName)];
        if (!categoryAction) return;
        categoryActionParts = categoryAction.split('|');
        options = target.dataset[toCamelCase(trackingOptionsAttributeName)];
        options = options ? JSON.parse(options) : {};
        self.send_event(
          categoryActionParts[0],
          categoryActionParts[1],
          categoryActionParts[2] || window.location.pathname,
          options.service ? { service: options.service } : {}
        );
      }

      function toCamelCase(str) {
        return str.replace(/\W+(.)/g, function (match, chr) {
          return chr.toUpperCase();
        });
      };

      document.addEventListener('click', function(e) {
        handleAction(e, clickTrackingAttributeName);
      });

      document.addEventListener('submit', function(e) {
        handleAction(e, formTrackingAttributeName);
      });
    },

    /**
     * @returns {Object[]}
     */
    get_data_packets: function get_data_packets() {
      return [this.values];
    },

    /**
     * Creates a tracking image for tracking JS compatibility.
     *
     * @param {string} type The type value for track_js_case in query params for 0.gif
     */
    create_tracking_image: function create_tracking_image(type) {
      this.send_ping_via_image({
        cache_bust: Math.random(),
        kind: 'track_js',
        track_js_case: type,
      });
    }
  };

  return ArchiveAnalytics;
}());
// @license-end
};p=g.map&&g.map[p.id.match(/[^\/]+/)[0]];for(r in p)m[r]?m[r][0]=p[r]:m[r]=[p[r],{}];for(r in m)p=m[r],p[1]._scopeName=p[0],k.noGlobals||(e[p[0]]=p[1]);q.scopeMap=m;q.baseUrl=q.config.baseUrl=g.baseUrl;q.isAsync=g.async;q.locale=k.locale;e="$Rev: f4fef70 $".match(/[0-9a-f]{7,}/);q.version={major:1,minor:1,patch:1,
flag:"eba076926ba3dee14c360d226e969beb47375458",revision:e?e[0]:NaN,toString:function(){var b=q.version;return b.major+"."+b.minor+"."+b.patch+b.flag+" ("+b.revision+")"}};Function("d","d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(q);q.exit=function(){};"undefined"!=typeof console||(console={});p="assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");var b;for(e=0;b=p[e++];)console[b]||
function(){var a=b+"";console[a]="log"in console?function(){var b=Array.prototype.slice.call(arguments);b.unshift(a+":");console.log(b.join(" "))}:function(){};console[a]._fake=!0}();a.add("dojo-debug-messages",!!k.isDebug);q.deprecated=q.experimental=function(){};a("dojo-debug-messages")&&(q.deprecated=function(b,a,c){},q.experimental=function(b,a){});if(k.modulePaths){q.deprecated("dojo.modulePaths","use paths configuration");a={};for(r in k.modulePaths)a[r.replace(/\./g,"/")]=k.modulePaths[r];
g({paths:a})}q.moduleUrl=function(b,a){q.deprecated("dojo.moduleUrl()","use require.toUrl","2.0");var c=null;b&&(c=g.toUrl(b.replace(/\./g,"/")+(a?"/"+a:"")+"/*.*").replace(/\/\*\.\*/,"")+(a?"":"/"));return c};q._hasResource={};return q})},"dojo/has":function(){define(["require","module"],function(a,k){var g=a.has||function(){};g.add("dom-addeventlistener",!!document.addEventListener);g.add("touch","ontouchstart"in document||"onpointerdown"in document&&0<navigator.maxTouchPoints||window.navigator.msMaxTouchPoints);
g.add("touch-events","ontouchstart"in document);g.add("pointer-events","pointerEnabled"in window.navigator?window.navigator.pointerEnabled:"PointerEvent"in window);g.add("MSPointer",window.navigator.msPointerEnabled);g.add("device-width",screen.availWidth||innerWidth);var p=document.createElement("form");g.add("dom-attributes-explicit",0==p.attributes.length);g.add("dom-attributes-specified-flag",0<p.attributes.length&&40>p.attributes.length);g.clearElement=function(a){a.innerHTML="";return a};g.normalize=
function(a,r){var m=a.match(/[\?:]|[^:\?]*/g),l=0,q=function(b){var a=m[l++];if(":"==a)return 0;if("?"==m[l++]){if(!b&&g(a))return q();q(!0);return q(b)}return a||0};return(a=q())&&r(a)};g.load=function(a,g,m){a?g([a],m):m()};return g})},"dojo/_base/config":function(){define(["../has","require"],function(a,k){var g={},p=k.rawConfig,e;for(e in p)g[e]=p[e];!g.locale&&"undefined"!=typeof navigator&&(p=navigator.language||navigator.userLanguage)&&(g.locale=p.toLowerCase());return g})},"dojo/sniff":function(){define(["./has"],
function(a){var k=navigator,g=k.userAgent,k=k.appVersion,p=parseFloat(k);a.add("air",0<=g.indexOf("AdobeAIR"));a.add("msapp",parseFloat(g.split("MSAppHost/")[1])||void 0);a.add("khtml",0<=k.indexOf("Konqueror")?p:void 0);a.add("webkit",parseFloat(g.split("WebKit/")[1])||void 0);a.add("chrome",parseFloat(g.split("Chrome/")[1])||void 0);a.add("safari",0<=k.indexOf("Safari")&&!a("chrome")?parseFloat(k.split("Version/")[1]):void 0);a.add("mac",0<=k.indexOf("Macintosh"));a.add("quirks","BackCompat"==document.compatMode);
if(g.match(/(iPhone|iPod|iPad)/)){var e=RegExp.$1.replace(/P/,"p"),r=g.match(/OS ([\d_]+)/)?RegExp.$1:"1",r=parseFloat(r.replace(/_/,".").replace(/_/g,""));a.add(e,r);a.add("ios",r)}a.add("android",parseFloat(g.split("Android ")[1])||void 0);a.add("bb",(0<=g.indexOf("BlackBerry")||0<=g.indexOf("BB10"))&&parseFloat(g.split("Version/")[1])||void 0);a.add("trident",parseFloat(k.split("Trident/")[1])||void 0);a.add("svg","undefined"!==typeof SVGAngle);a("webkit")||(0<=g.indexOf("Opera")&&a.add("opera",
9.8<=p?parseFloat(g.split("Version/")[1])||p:p),0<=g.indexOf("Gecko")&&!a("khtml")&&!a("webkit")&&!a("trident")&&a.add("mozilla",p),a("mozilla")&&a.add("ff",parseFloat(g.split("Firefox/")[1]||g.split("Minefield/")[1])||void 0),document.all&&!a("opera")&&(g=parseFloat(k.split("MSIE ")[1])||void 0,(k=document.documentMode)&&5!=k&&Math.floor(g)!=k&&(g=k),a.add("ie",g)),a.add("wii","undefined"!=typeof opera&&opera.wiiremote));return a})},"dojo/_base/lang":function(){define(["./kernel","../has","../sniff"],
function(a,k){k.add("bug-for-in-skips-shadowed",function(){for(var b in{toString:1})return 0;return 1});var g=k("bug-for-in-skips-shadowed")?"hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" "):[],p=g.length,e=function(b,h,d){d||(d=b[0]&&a.scopeMap[b[0]]?a.scopeMap[b.shift()][1]:a.global);try{for(var c=0;c<b.length;c++){var f=b[c];if(!(f in d))if(h)d[f]={};else return;d=d[f]}return d}catch(t){}},r=Object.prototype.toString,m=function(b,a,d){return(d||
[]).concat(Array.prototype.slice.call(b,a||0))},l=/\{([^\}]+)\}/g,q={_extraNames:g,_mixin:function(b,a,d){var c,f,t,n={};for(c in a)f=a[c],c in b&&(b[c]===f||c in n&&n[c]===f)||(b[c]=d?d(f):f);if(k("bug-for-in-skips-shadowed")&&a)for(t=0;t<p;++t)c=g[t],f=a[c],c in b&&(b[c]===f||c in n&&n[c]===f)||(b[c]=d?d(f):f);return b},mixin:function(b,a){b||(b={});for(var d=1,c=arguments.length;d<c;d++)q._mixin(b,arguments[d]);return b},setObject:function(b,a,d){var c=b.split(".");b=c.pop();return(d=e(c,!0,d))&&
b?d[b]=a:void 0},getObject:function(b,a,d){return e(b?b.split("."):[],a,d)},exists:function(b,a){return void 0!==q.getObject(b,!1,a)},isString:function(b){return"string"==typeof b||b instanceof String},isArray:function(b){return b&&(b instanceof Array||"array"==typeof b)},isFunction:function(b){return"[object Function]"===r.call(b)},isObject:function(b){return void 0!==b&&(null===b||"object"==typeof b||q.isArray(b)||q.isFunction(b))},isArrayLike:function(b){return b&&void 0!==b&&!q.isString(b)&&!q.isFunction(b)&&
!(b.tagName&&"form"==b.tagName.toLowerCase())&&(q.isArray(b)||isFinite(b.length))},isAlien:function(b){return b&&!q.isFunction(b)&&/\{\s*\[native code\]\s*\}/.test(String(b))},extend:function(b,a){for(var d=1,c=arguments.length;d<c;d++)q._mixin(b.prototype,arguments[d]);return b},_hitchArgs:function(b,h){var d=q._toArray(arguments,2),c=q.isString(h);return function(){var f=q._toArray(arguments),t=c?(b||a.global)[h]:h;return t&&t.apply(b||this,d.concat(f))}},hitch:function(b,h){if(2<arguments.length)return q._hitchArgs.apply(a,
arguments);h||(h=b,b=null);if(q.isString(h)){b=b||a.global;if(!b[h])throw['lang.hitch: scope["',h,'"] is null (scope\x3d"',b,'")'].join("");return function(){return b[h].apply(b,arguments||[])}}return b?function(){return h.apply(b,arguments||[])}:h},delegate:function(){function b(){}return function(a,d){b.prototype=a;var c=new b;b.prototype=null;d&&q._mixin(c,d);return c}}(),_toArray:k("ie")?function(){function b(b,a,c){c=c||[];for(a=a||0;a<b.length;a++)c.push(b[a]);return c}return function(a){return(a.item?
b:m).apply(this,arguments)}}():m,partial:function(b){return q.hitch.apply(a,[null].concat(q._toArray(arguments)))},clone:function(b){if(!b||"object"!=typeof b||q.isFunction(b))return b;if(b.nodeType&&"cloneNode"in b)return b.cloneNode(!0);if(b instanceof Date)return new Date(b.getTime());if(b instanceof RegExp)return new RegExp(b);var a,d,c;if(q.isArray(b))for(a=[],d=0,c=b.length;d<c;++d)d in b&&a.push(q.clone(b[d]));else a=b.constructor?new b.constructor:{};return q._mixin(a,b,q.clone)},trim:String.prototype.trim?
function(b){return b.trim()}:function(b){return b.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},replace:function(b,a,d){return b.replace(d||l,q.isFunction(a)?a:function(b,d){return q.getObject(d,!1,a)})}};q.mixin(a,q);return q})},"dojo/_base/array":function(){define(["./kernel","../has","./lang"],function(a,k,g){function p(b){return m[b]=new Function("item","index","array",b)}function e(b){var a=!b;return function(d,c,f){var t=0,n=d&&d.length||0,e;n&&"string"==typeof d&&(d=d.split(""));"string"==typeof c&&
(c=m[c]||p(c));if(f)for(;t<n;++t){if(e=!c.call(f,d[t],t,d),b^e)return!e}else for(;t<n;++t)if(e=!c(d[t],t,d),b^e)return!e;return a}}function r(b){var a=1,d=0,c=0;b||(a=d=c=-1);return function(f,e,n,g){if(g&&0<a)return q.lastIndexOf(f,e,n);g=f&&f.length||0;var r=b?g+c:d;n===l?n=b?d:g+c:0>n?(n=g+n,0>n&&(n=d)):n=n>=g?g+c:n;for(g&&"string"==typeof f&&(f=f.split(""));n!=r;n+=a)if(f[n]==e)return n;return-1}}var m={},l,q={every:e(!1),some:e(!0),indexOf:r(!0),lastIndexOf:r(!1),forEach:function(b,a,d){var c=
0,f=b&&b.length||0;f&&"string"==typeof b&&(b=b.split(""));"string"==typeof a&&(a=m[a]||p(a));if(d)for(;c<f;++c)a.call(d,b[c],c,b);else for(;c<f;++c)a(b[c],c,b)},map:function(b,a,d,c){var f=0,e=b&&b.length||0;c=new (c||Array)(e);e&&"string"==typeof b&&(b=b.split(""));"string"==typeof a&&(a=m[a]||p(a));if(d)for(;f<e;++f)c[f]=a.call(d,b[f],f,b);else for(;f<e;++f)c[f]=a(b[f],f,b);return c},filter:function(b,a,d){var c=0,f=b&&b.length||0,e=[],n;f&&"string"==typeof b&&(b=b.split(""));"string"==typeof a&&
(a=m[a]||p(a));if(d)for(;c<f;++c)n=b[c],a.call(d,n,c,b)&&e.push(n);else for(;c<f;++c)n=b[c],a(n,c,b)&&e.push(n);return e},clearCache:function(){m={}}};g.mixin(a,q);return q})},"dojo/ready":function(){define(["./_base/kernel","./has","require","./domReady","./_base/lang"],function(a,k,g,p,e){var r=0,m=[],l=0;k=function(){r=1;a._postLoad=a.config.afterOnLoad=!0;q()};var q=function(){if(!l){for(l=1;r&&(!p||0==p._Q.length)&&(g.idle?g.idle():1)&&m.length;){var b=m.shift();try{b()}catch(c){if(c.info=c.message,
g.signal)g.signal("error",c);else throw c;}}l=0}};g.on&&g.on("idle",q);p&&(p._onQEmpty=q);var b=a.ready=a.addOnLoad=function(b,c,f){var h=e._toArray(arguments);"number"!=typeof b?(f=c,c=b,b=1E3):h.shift();f=f?e.hitch.apply(a,h):function(){c()};f.priority=b;for(h=0;h<m.length&&b>=m[h].priority;h++);m.splice(h,0,f);q()},h=a.config.addOnLoad;if(h)b[e.isArray(h)?"apply":"call"](a,h);a.config.parseOnLoad&&!a.isAsync&&b(99,function(){a.parser||(a.deprecated("Add explicit require(['dojo/parser']);","","2.0"),
g(["dojo/parser"]))});p?p(k):k();return b})},"dojo/domReady":function(){define(["./has"],function(a){function k(b){q.push(b);l&&g()}function g(){if(!b){for(b=!0;q.length;)try{q.shift()(e)}catch(c){}b=!1;k._onQEmpty()}}var p=function(){return this}(),e=document,r={loaded:1,complete:1},m="string"!=typeof e.readyState,l=!!r[e.readyState],q=[],b;k.load=function(b,c,a){k(a)};k._Q=q;k._onQEmpty=function(){};m&&(e.readyState="loading");if(!l){var h=[],d=function(b){b=b||p.event;l||"readystatechange"==b.type&&
!r[e.readyState]||(m&&(e.readyState="complete"),l=1,g())},c=function(b,c){b.addEventListener(c,d,!1);q.push(function(){b.removeEventListener(c,d,!1)})};if(!a("dom-addeventlistener")){var c=function(b,c){c="on"+c;b.attachEvent(c,d);q.push(function(){b.detachEvent(c,d)})},f=e.createElement("div");try{f.doScroll&&null===p.frameElement&&h.push(function(){try{return f.doScroll("left"),1}catch(b){}})}catch(n){}}c(e,"DOMContentLoaded");c(p,"load");"onreadystatechange"in e?c(e,"readystatechange"):m||h.push(function(){return r[e.readyState]});
if(h.length){var t=function(){if(!l){for(var b=h.length;b--;)if(h[b]()){d("poller");return}setTimeout(t,30)}};t()}}return k})},"dojo/_base/declare":function(){define(["./kernel","../has","./lang"],function(a,k,g){function p(b,c){throw Error("declare"+(c?" "+c:"")+": "+b);}function e(b,c,a){var d,f,h,n,e,g,u,q=this._inherited=this._inherited||{};"string"==typeof b&&(d=b,b=c,c=a);a=0;n=b.callee;(d=d||n.nom)||p("can't deduce a name to call inherited()",this.declaredClass);e=this.constructor._meta;h=
e.bases;u=q.p;if("constructor"!=d){if(q.c!==n&&(u=0,g=h[0],e=g._meta,e.hidden[d]!==n)){(f=e.chains)&&"string"==typeof f[d]&&p("calling chained method with inherited: "+d,this.declaredClass);do if(e=g._meta,f=g.prototype,e&&(f[d]===n&&f.hasOwnProperty(d)||e.hidden[d]===n))break;while(g=h[++u]);u=g?u:-1}if(g=h[++u])if(f=g.prototype,g._meta&&f.hasOwnProperty(d))a=f[d];else{n=w[d];do if(f=g.prototype,(a=f[d])&&(g._meta?f.hasOwnProperty(d):a!==n))break;while(g=h[++u])}a=g&&a||w[d]}else{if(q.c!==n&&(u=
0,(e=h[0]._meta)&&e.ctor!==n)){for((f=e.chains)&&"manual"===f.constructor||p("calling chained constructor with inherited",this.declaredClass);(g=h[++u])&&(!(e=g._meta)||e.ctor!==n););u=g?u:-1}for(;(g=h[++u])&&!(a=(e=g._meta)?e.ctor:g););a=g&&a}q.c=a;q.p=u;if(a)return!0===c?a:a.apply(this,c||b)}function r(b,c){return"string"==typeof b?this.__inherited(b,c,!0):this.__inherited(b,!0)}function m(b,c,a){var d=this.getInherited(b,c);if(d)return d.apply(this,a||c||b)}function l(b){for(var c=this.constructor._meta.bases,
a=0,d=c.length;a<d;++a)if(c[a]===b)return!0;return this instanceof b}function q(b,c){for(var a in c)"constructor"!=a&&c.hasOwnProperty(a)&&(b[a]=c[a]);if(k("bug-for-in-skips-shadowed"))for(var d=g._extraNames,f=d.length;f;)a=d[--f],"constructor"!=a&&c.hasOwnProperty(a)&&(b[a]=c[a])}function b(b){x.safeMixin(this.prototype,b);return this}function h(b,c){b instanceof Array||"function"==typeof b||(c=b,b=void 0);c=c||{};b=b||[];return x([this].concat(b),c)}function d(b,c){return function(){var a=arguments,
d=a,f=a[0],h,n;n=b.length;var e;if(!(this instanceof a.callee))return v(a);if(c&&(f&&f.preamble||this.preamble))for(e=Array(b.length),e[0]=a,h=0;;){(f=a[0])&&(f=f.preamble)&&(a=f.apply(this,a)||a);f=b[h].prototype;(f=f.hasOwnProperty("preamble")&&f.preamble)&&(a=f.apply(this,a)||a);if(++h==n)break;e[h]=a}for(h=n-1;0<=h;--h)f=b[h],(f=(n=f._meta)?n.ctor:f)&&f.apply(this,e?e[h]:a);(f=this.postscript)&&f.apply(this,d)}}function c(b,c){return function(){var a=arguments,d=a,f=a[0];if(!(this instanceof a.callee))return v(a);
c&&(f&&(f=f.preamble)&&(d=f.apply(this,d)||d),(f=this.preamble)&&f.apply(this,d));b&&b.apply(this,a);(f=this.postscript)&&f.apply(this,a)}}function f(b){return function(){var c=arguments,a=0,d,f;if(!(this instanceof c.callee))return v(c);for(;d=b[a];++a)if(d=(f=d._meta)?f.ctor:d){d.apply(this,c);break}(d=this.postscript)&&d.apply(this,c)}}function t(b,c,a){return function(){var d,f,h=0,n=1;a&&(h=c.length-1,n=-1);for(;d=c[h];h+=n)f=d._meta,(d=(f?f.hidden:d.prototype)[b])&&d.apply(this,arguments)}}
function n(b){y.prototype=b.prototype;b=new y;y.prototype=null;return b}function v(b){var c=b.callee,a=n(c);c.apply(a,b);return a}function x(a,m,v){"string"!=typeof a&&(v=m,m=a,a="");v=v||{};var k,y,B,H,N,E,D,K=1,W=m;if("[object Array]"==A.call(m)){K=a;y=[];B=[{cls:0,refs:[]}];H={};E=1;for(var ca=m.length,O=0,F,X,G,C;O<ca;++O){(F=m[O])?"[object Function]"!=A.call(F)&&p("mixin #"+O+" is not a callable constructor.",K):p("mixin #"+O+" is unknown. Did you use dojo.require to pull it in?",K);X=F._meta?
F._meta.bases:[F];G=0;for(F=X.length-1;0<=F;--F)C=X[F].prototype,C.hasOwnProperty("declaredClass")||(C.declaredClass="uniqName_"+z++),C=C.declaredClass,H.hasOwnProperty(C)||(H[C]={count:0,refs:[],cls:X[F]},++E),C=H[C],G&&G!==C&&(C.refs.push(G),++G.count),G=C;++G.count;B[0].refs.push(G)}for(;B.length;){G=B.pop();y.push(G.cls);for(--E;k=G.refs,1==k.length;){G=k[0];if(!G||--G.count){G=0;break}y.push(G.cls);--E}if(G)for(O=0,ca=k.length;O<ca;++O)G=k[O],--G.count||B.push(G)}E&&p("can't build consistent linearization",
K);F=m[0];y[0]=F?F._meta&&F===y[y.length-F._meta.bases.length]?F._meta.bases.length:1:0;E=y;B=E[0];K=E.length-B;m=E[K]}else E=[0],m?"[object Function]"==A.call(m)?(B=m._meta,E=E.concat(B?B.bases:m)):p("base class is not a callable constructor.",a):null!==m&&p("unknown base class. Did you use dojo.require to pull it in?",a);if(m)for(y=K-1;;--y){k=n(m);if(!y)break;B=E[y];(B._meta?q:u)(k,B.prototype);H=new Function;H.superclass=m;H.prototype=k;m=k.constructor=H}else k={};x.safeMixin(k,v);B=v.constructor;
B!==w.constructor&&(B.nom="constructor",k.constructor=B);for(y=K-1;y;--y)(B=E[y]._meta)&&B.chains&&(D=u(D||{},B.chains));k["-chains-"]&&(D=u(D||{},k["-chains-"]));B=!D||!D.hasOwnProperty("constructor");E[0]=H=D&&"manual"===D.constructor?f(E):1==E.length?c(v.constructor,B):d(E,B);H._meta={bases:E,hidden:v,chains:D,parents:W,ctor:v.constructor};H.superclass=m&&m.prototype;H.extend=b;H.createSubclass=h;H.prototype=k;k.constructor=H;k.getInherited=r;k.isInstanceOf=l;k.inherited=M;k.__inherited=e;a&&(k.declaredClass=
a,g.setObject(a,H));if(D)for(N in D)k[N]&&"string"==typeof D[N]&&"constructor"!=N&&(B=k[N]=t(N,E,"after"===D[N]),B.nom=N);return H}var u=g.mixin,w=Object.prototype,A=w.toString,y=new Function,z=0,M=a.config.isDebug?m:e;a.safeMixin=x.safeMixin=function(b,c){var a,d;for(a in c)d=c[a],d===w[a]&&a in w||"constructor"==a||("[object Function]"==A.call(d)&&(d.nom=a),b[a]=d);if(k("bug-for-in-skips-shadowed"))for(var f=g._extraNames,h=f.length;h;)a=f[--h],d=c[a],d===w[a]&&a in w||"constructor"==a||("[object Function]"==
A.call(d)&&(d.nom=a),b[a]=d);return b};return a.declare=x})},"dojo/_base/connect":function(){define("./kernel ../on ../topic ../aspect ./event ../mouse ./sniff ./lang ../keys".split(" "),function(a,k,g,p,e,r,m,l){function q(b,c,d,h,e){h=l.hitch(d,h);if(!b||!b.addEventListener&&!b.attachEvent)return p.after(b||a.global,c,h,!0);"string"==typeof c&&"on"==c.substring(0,2)&&(c=c.substring(2));b||(b=a.global);if(!e)switch(c){case "keypress":c=f;break;case "mouseenter":c=r.enter;break;case "mouseleave":c=
r.leave}return k(b,c,h,e)}function b(b){b.keyChar=b.charCode?String.fromCharCode(b.charCode):"";b.charOrCode=b.keyChar||b.keyCode}m.add("events-keypress-typed",function(){var b={charCode:0};try{b=document.createEvent("KeyboardEvent"),(b.initKeyboardEvent||b.initKeyEvent).call(b,"keypress",!0,!0,null,!1,!1,!1,!1,9,3)}catch(c){}return 0==b.charCode&&!m("opera")});var h={106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39,229:113},d=m("mac")?"metaKey":"ctrlKey",
c=function(c,a){var d=l.mixin({},c,a);b(d);d.preventDefault=function(){c.preventDefault()};d.stopPropagation=function(){c.stopPropagation()};return d},f;f=m("events-keypress-typed")?function(b,a){var d=k(b,"keydown",function(b){var d=b.keyCode,f=13!=d&&32!=d&&(27!=d||!m("ie"))&&(48>d||90<d)&&(96>d||111<d)&&(186>d||192<d)&&(219>d||222<d)&&229!=d;if(f||b.ctrlKey){f=f?0:d;if(b.ctrlKey){if(3==d||13==d)return a.call(b.currentTarget,b);f=95<f&&106>f?f-48:!b.shiftKey&&65<=f&&90>=f?f+32:h[f]||f}d=c(b,{type:"keypress",
faux:!0,charCode:f});a.call(b.currentTarget,d);if(m("ie"))try{b.keyCode=d.keyCode}catch(e){}}}),f=k(b,"keypress",function(b){var d=b.charCode;b=c(b,{charCode:32<=d?d:0,faux:!0});return a.call(this,b)});return{remove:function(){d.remove();f.remove()}}}:m("opera")?function(b,a){return k(b,"keypress",function(b){var d=b.which;3==d&&(d=99);d=32>d&&!b.shiftKey?0:d;b.ctrlKey&&!b.shiftKey&&65<=d&&90>=d&&(d+=32);return a.call(this,c(b,{charCode:d}))})}:function(c,a){return k(c,"keypress",function(c){b(c);
return a.call(this,c)})};var t={_keypress:f,connect:function(b,c,a,d,f){var h=arguments,e=[],g=0;e.push("string"==typeof h[0]?null:h[g++],h[g++]);var m=h[g+1];e.push("string"==typeof m||"function"==typeof m?h[g++]:null,h[g++]);for(m=h.length;g<m;g++)e.push(h[g]);return q.apply(this,e)},disconnect:function(b){b&&b.remove()},subscribe:function(b,c,a){return g.subscribe(b,l.hitch(c,a))},publish:function(b,c){return g.publish.apply(g,[b].concat(c))},connectPublisher:function(b,c,a){var d=function(){t.publish(b,
arguments)};return a?t.connect(c,a,d):t.connect(c,d)},isCopyKey:function(b){return b[d]}};t.unsubscribe=t.disconnect;l.mixin(a,t);return t})},"dojo/on":function(){define(["./has!dom-addeventlistener?:./aspect","./_base/kernel","./sniff"],function(a,k,g){function p(b,c,a,h,e){if(h=c.match(/(.*):(.*)/))return c=h[2],h=h[1],l.selector(h,c).call(e,b,a);g("touch")&&(q.test(c)&&(a=z(a)),g("event-orientationchange")||"orientationchange"!=c||(c="resize",b=window,a=z(a)));f&&(a=f(a));if(b.addEventListener){var n=
c in d,u=n?d[c]:c;b.addEventListener(u,a,n);return{remove:function(){b.removeEventListener(u,a,n)}}}if(x&&b.attachEvent)return x(b,"on"+c,a);throw Error("Target must be an event emitter");}function e(){this.cancelable=!1;this.defaultPrevented=!0}function r(){this.bubbles=!1}var m=window.ScriptEngineMajorVersion;g.add("jscript",m&&m()+ScriptEngineMinorVersion()/10);g.add("event-orientationchange",g("touch")&&!g("android"));g.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&
!!window.Event.prototype.stopImmediatePropagation);g.add("event-focusin",function(b,c,a){return"onfocusin"in a});g("touch")&&g.add("touch-can-modify-event-delegate",function(){var b=function(){};b.prototype=document.createEvent("MouseEvents");try{var c=new b;c.target=null;return null===c.target}catch(a){return!1}});var l=function(b,c,a,d){return"function"!=typeof b.on||"function"==typeof c||b.nodeType?l.parse(b,c,a,p,d,this):b.on(c,a)};l.pausable=function(b,c,a,d){var f;b=l(b,c,function(){if(!f)return a.apply(this,
arguments)},d);b.pause=function(){f=!0};b.resume=function(){f=!1};return b};l.once=function(b,c,a,d){var f=l(b,c,function(){f.remove();return a.apply(this,arguments)});return f};l.parse=function(b,c,a,d,f,h){if(c.call)return c.call(h,b,a);if(c instanceof Array)e=c;else if(-1<c.indexOf(","))var e=c.split(/\s*,\s*/);if(e){var g=[];c=0;for(var n;n=e[c++];)g.push(l.parse(b,n,a,d,f,h));g.remove=function(){for(var b=0;b<g.length;b++)g[b].remove()};return g}return d(b,c,a,f,h)};var q=/^touch/;l.matches=
function(b,c,a,d,f){f=f&&f.matches?f:k.query;d=!1!==d;1!=b.nodeType&&(b=b.parentNode);for(;!f.matches(b,c,a);)if(b==a||!1===d||!(b=b.parentNode)||1!=b.nodeType)return!1;return b};l.selector=function(b,c,a){return function(d,f){function h(c){return l.matches(c,b,d,a,e)}var e="function"==typeof b?{matches:b}:this,g=c.bubble;return g?l(d,g(h),f):l(d,c,function(b){var c=h(b.target);if(c)return f.call(c,b)})}};var b=[].slice,h=l.emit=function(c,a,d){var f=b.call(arguments,2),h="on"+a;if("parentNode"in
c){var g=f[0]={},n;for(n in d)g[n]=d[n];g.preventDefault=e;g.stopPropagation=r;g.target=c;g.type=a;d=g}do c[h]&&c[h].apply(c,f);while(d&&d.bubbles&&(c=c.parentNode));return d&&d.cancelable&&d},d=g("event-focusin")?{}:{focusin:"focus",focusout:"blur"};if(!g("event-stopimmediatepropagation"))var c=function(){this.modified=this.immediatelyStopped=!0},f=function(b){return function(a){if(!a.immediatelyStopped)return a.stopImmediatePropagation=c,b.apply(this,arguments)}};if(g("dom-addeventlistener"))l.emit=
function(b,c,a){if(b.dispatchEvent&&document.createEvent){var d=(b.ownerDocument||document).createEvent("HTMLEvents");d.initEvent(c,!!a.bubbles,!!a.cancelable);for(var f in a)f in d||(d[f]=a[f]);return b.dispatchEvent(d)&&d}return h.apply(l,arguments)};else{l._fixEvent=function(b,c){b||(b=(c&&(c.ownerDocument||c.document||c).parentWindow||window).event);if(!b)return b;try{t&&b.type==t.type&&b.srcElement==t.target&&(b=t)}catch(a){}if(!b.target)switch(b.target=b.srcElement,b.currentTarget=c||b.srcElement,
"mouseover"==b.type&&(b.relatedTarget=b.fromElement),"mouseout"==b.type&&(b.relatedTarget=b.toElement),b.stopPropagation||(b.stopPropagation=u,b.preventDefault=w),b.type){case "keypress":var d="charCode"in b?b.charCode:b.keyCode;10==d?(d=0,b.keyCode=13):13==d||27==d?d=0:3==d&&(d=99);b.charCode=d;d=b;d.keyChar=d.charCode?String.fromCharCode(d.charCode):"";d.charOrCode=d.keyChar||d.keyCode}return b};var t,n=function(b){this.handle=b};n.prototype.remove=function(){delete _dojoIEListeners_[this.handle]};
var v=function(b){return function(c){c=l._fixEvent(c,this);var a=b.call(this,c);c.modified&&(t||setTimeout(function(){t=null}),t=c);return a}},x=function(b,c,d){d=v(d);if(((b.ownerDocument?b.ownerDocument.parentWindow:b.parentWindow||b.window||window)!=top||5.8>g("jscript"))&&!g("config-_allow_leaks")){"undefined"==typeof _dojoIEListeners_&&(_dojoIEListeners_=[]);var f=b[c];if(!f||!f.listeners){var h=f,f=Function("event","var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
f.listeners=[];b[c]=f;f.global=this;h&&f.listeners.push(_dojoIEListeners_.push(h)-1)}f.listeners.push(b=f.global._dojoIEListeners_.push(d)-1);return new n(b)}return a.after(b,c,d,!0)},u=function(){this.cancelBubble=!0},w=l._preventDefault=function(){this.bubbledKeyCode=this.keyCode;if(this.ctrlKey)try{this.keyCode=0}catch(b){}this.defaultPrevented=!0;this.returnValue=!1;this.modified=!0}}if(g("touch"))var A=function(){},y=window.orientation,z=function(b){return function(c){var a=c.corrected;if(!a){var d=
c.type;try{delete c.type}catch(f){}if(c.type){if(g("touch-can-modify-event-delegate"))A.prototype=c,a=new A;else{var a={},h;for(h in c)a[h]=c[h]}a.preventDefault=function(){c.preventDefault()};a.stopPropagation=function(){c.stopPropagation()}}else a=c,a.type=d;c.corrected=a;if("resize"==d){if(y==window.orientation)return null;y=window.orientation;a.type="orientationchange";return b.call(this,a)}"rotation"in a||(a.rotation=0,a.scale=1);var d=a.changedTouches[0],e;for(e in d)delete a[e],a[e]=d[e]}return b.call(this,
a)}};return l})},"dojo/topic":function(){define(["./Evented"],function(a){var k=new a;return{publish:function(a,p){return k.emit.apply(k,arguments)},subscribe:function(a,p){return k.on.apply(k,arguments)}}})},"dojo/Evented":function(){define(["./aspect","./on"],function(a,k){function g(){}var p=a.after;g.prototype={on:function(a,g){return k.parse(this,a,g,function(a,e){return p(a,"on"+e,g,!0)})},emit:function(a,g){var m=[this];m.push.apply(m,arguments);return k.emit.apply(k,m)}};return g})},"dojo/aspect":function(){define([],
function(){function a(a,e,b,h){var d=a[e],c="around"==e,f;if(c){var g=b(function(){return d.advice(this,arguments)});f={remove:function(){g&&(g=a=b=null)},advice:function(b,c){return g?g.apply(b,c):d.advice(b,c)}}}else f={remove:function(){if(f.advice){var c=f.previous,d=f.next;d||c?(c?c.next=d:a[e]=d,d&&(d.previous=c)):delete a[e];a=b=f.advice=null}},id:p++,advice:b,receiveArguments:h};if(d&&!c)if("after"==e){for(;d.next&&(d=d.next););d.next=f;f.previous=d}else"before"==e&&(a[e]=f,f.next=d,d.previous=
f);else a[e]=f;return f}function k(e){return function(m,b,h,d){var c=m[b],f;c&&c.target==m||(m[b]=f=function(){for(var b=p,c=arguments,a=f.before;a;)c=a.advice.apply(this,c)||c,a=a.next;if(f.around)var d=f.around.advice(this,c);for(a=f.after;a&&a.id<b;){if(a.receiveArguments)var h=a.advice.apply(this,c),d=h===g?d:h;else d=a.advice.call(this,d,c);a=a.next}return d},c&&(f.around={advice:function(b,a){return c.apply(b,a)}}),f.target=m);m=a(f||c,e,h,d);h=null;return m}}var g,p=0,e=k("after"),r=k("before"),
m=k("around");return{before:r,around:m,after:e}})},"dojo/_base/event":function(){define(["./kernel","../on","../has","../dom-geometry"],function(a,k,g,p){if(k._fixEvent){var e=k._fixEvent;k._fixEvent=function(a,g){(a=e(a,g))&&p.normalizeEvent(a);return a}}var r={fix:function(a,e){return k._fixEvent?k._fixEvent(a,e):a},stop:function(a){g("dom-addeventlistener")||a&&a.preventDefault?(a.preventDefault(),a.stopPropagation()):(a=a||window.event,a.cancelBubble=!0,k._preventDefault.call(a))}};a.fixEvent=
r.fix;a.stopEvent=r.stop;return r})},"dojo/dom-geometry":function(){define(["./sniff","./_base/window","./dom","./dom-style"],function(a,k,g,p){function e(b,a,d,c,f,e){e=e||"px";b=b.style;isNaN(a)||(b.left=a+e);isNaN(d)||(b.top=d+e);0<=c&&(b.width=c+e);0<=f&&(b.height=f+e)}function r(b){return"button"==b.tagName.toLowerCase()||"input"==b.tagName.toLowerCase()&&"button"==(b.getAttribute("type")||"").toLowerCase()}function m(b){return"border-box"==l.boxModel||"table"==b.tagName.toLowerCase()||r(b)}
var l={boxModel:"content-box"};a("ie")&&(l.boxModel="BackCompat"==document.compatMode?"border-box":"content-box");l.getPadExtents=function(b,a){b=g.byId(b);var d=a||p.getComputedStyle(b),c=p.toPixelValue,f=c(b,d.paddingLeft),e=c(b,d.paddingTop),n=c(b,d.paddingRight),d=c(b,d.paddingBottom);return{l:f,t:e,r:n,b:d,w:f+n,h:e+d}};l.getBorderExtents=function(b,a){b=g.byId(b);var d=p.toPixelValue,c=a||p.getComputedStyle(b),f="none"!=c.borderLeftStyle?d(b,c.borderLeftWidth):0,e="none"!=c.borderTopStyle?d(b,
c.borderTopWidth):0,n="none"!=c.borderRightStyle?d(b,c.borderRightWidth):0,d="none"!=c.borderBottomStyle?d(b,c.borderBottomWidth):0;return{l:f,t:e,r:n,b:d,w:f+n,h:e+d}};l.getPadBorderExtents=function(b,a){b=g.byId(b);var d=a||p.getComputedStyle(b),c=l.getPadExtents(b,d),d=l.getBorderExtents(b,d);return{l:c.l+d.l,t:c.t+d.t,r:c.r+d.r,b:c.b+d.b,w:c.w+d.w,h:c.h+d.h}};l.getMarginExtents=function(b,a){b=g.byId(b);var d=a||p.getComputedStyle(b),c=p.toPixelValue,f=c(b,d.marginLeft),e=c(b,d.marginTop),n=c(b,
d.marginRight),d=c(b,d.marginBottom);return{l:f,t:e,r:n,b:d,w:f+n,h:e+d}};l.getMarginBox=function(b,h){b=g.byId(b);var d=h||p.getComputedStyle(b),c=l.getMarginExtents(b,d),f=b.offsetLeft-c.l,e=b.offsetTop-c.t,n=b.parentNode,q=p.toPixelValue;if(a("mozilla")){var m=parseFloat(d.left),d=parseFloat(d.top);isNaN(m)||isNaN(d)?n&&n.style&&(n=p.getComputedStyle(n),"visible"!=n.overflow&&(f+="none"!=n.borderLeftStyle?q(b,n.borderLeftWidth):0,e+="none"!=n.borderTopStyle?q(b,n.borderTopWidth):0)):(f=m,e=d)}else(a("opera")||
8==a("ie")&&!a("quirks"))&&n&&(n=p.getComputedStyle(n),f-="none"!=n.borderLeftStyle?q(b,n.borderLeftWidth):0,e-="none"!=n.borderTopStyle?q(b,n.borderTopWidth):0);return{l:f,t:e,w:b.offsetWidth+c.w,h:b.offsetHeight+c.h}};l.getContentBox=function(b,h){b=g.byId(b);var d=h||p.getComputedStyle(b),c=b.clientWidth,f=l.getPadExtents(b,d),e=l.getBorderExtents(b,d);c?(d=b.clientHeight,e.w=e.h=0):(c=b.offsetWidth,d=b.offsetHeight);a("opera")&&(f.l+=e.l,f.t+=e.t);return{l:f.l,t:f.t,w:c-f.w-e.w,h:d-f.h-e.h}};
l.setContentSize=function(b,a,d){b=g.byId(b);var c=a.w;a=a.h;m(b)&&(d=l.getPadBorderExtents(b,d),0<=c&&(c+=d.w),0<=a&&(a+=d.h));e(b,NaN,NaN,c,a)};var q={l:0,t:0,w:0,h:0};l.setMarginBox=function(b,h,d){b=g.byId(b);var c=d||p.getComputedStyle(b);d=h.w;var f=h.h,t=m(b)?q:l.getPadBorderExtents(b,c),c=l.getMarginExtents(b,c);if(a("webkit")&&r(b)){var n=b.style;0<=d&&!n.width&&(n.width="4px");0<=f&&!n.height&&(n.height="4px")}0<=d&&(d=Math.max(d-t.w-c.w,0));0<=f&&(f=Math.max(f-t.h-c.h,0));e(b,h.l,h.t,d,
f)};l.isBodyLtr=function(b){b=b||k.doc;return"ltr"==(k.body(b).dir||b.documentElement.dir||"ltr").toLowerCase()};l.docScroll=function(b){b=b||k.doc;var h=k.doc.parentWindow||k.doc.defaultView;return"pageXOffset"in h?{x:h.pageXOffset,y:h.pageYOffset}:(h=a("quirks")?k.body(b):b.documentElement)&&{x:l.fixIeBiDiScrollLeft(h.scrollLeft||0,b),y:h.scrollTop||0}};a("ie")&&(l.getIeDocumentElementOffset=function(b){b=b||k.doc;b=b.documentElement;if(8>a("ie")){var h=b.getBoundingClientRect(),d=h.left,h=h.top;
7>a("ie")&&(d+=b.clientLeft,h+=b.clientTop);return{x:0>d?0:d,y:0>h?0:h}}return{x:0,y:0}});l.fixIeBiDiScrollLeft=function(b,h){h=h||k.doc;var d=a("ie");if(d&&!l.isBodyLtr(h)){var c=a("quirks"),f=c?k.body(h):h.documentElement,e=k.global;6==d&&!c&&e.frameElement&&f.scrollHeight>f.clientHeight&&(b+=f.clientLeft);return 8>d||c?b+f.clientWidth-f.scrollWidth:-b}return b};l.position=function(b,h){b=g.byId(b);var d=k.body(b.ownerDocument),c=b.getBoundingClientRect(),c={x:c.left,y:c.top,w:c.right-c.left,h:c.bottom-
c.top};if(9>a("ie")){var f=l.getIeDocumentElementOffset(b.ownerDocument);c.x-=f.x+(a("quirks")?d.clientLeft+d.offsetLeft:0);c.y-=f.y+(a("quirks")?d.clientTop+d.offsetTop:0)}h&&(d=l.docScroll(b.ownerDocument),c.x+=d.x,c.y+=d.y);return c};l.getMarginSize=function(b,a){b=g.byId(b);var d=l.getMarginExtents(b,a||p.getComputedStyle(b)),c=b.getBoundingClientRect();return{w:c.right-c.left+d.w,h:c.bottom-c.top+d.h}};l.normalizeEvent=function(b){"layerX"in b||(b.layerX=b.offsetX,b.layerY=b.offsetY);if(!a("dom-addeventlistener")){var h=
b.target,h=h&&h.ownerDocument||document,d=a("quirks")?h.body:h.documentElement,c=l.getIeDocumentElementOffset(h);b.pageX=b.clientX+l.fixIeBiDiScrollLeft(d.scrollLeft||0,h)-c.x;b.pageY=b.clientY+(d.scrollTop||0)-c.y}};return l})},"dojo/_base/window":function(){define(["./kernel","./lang","../sniff"],function(a,k,g){var p={global:a.global,doc:a.global.document||null,body:function(e){e=e||a.doc;return e.body||e.getElementsByTagName("body")[0]},setContext:function(e,g){a.global=p.global=e;a.doc=p.doc=
g},withGlobal:function(e,g,m,l){var q=a.global;try{return a.global=p.global=e,p.withDoc.call(null,e.document,g,m,l)}finally{a.global=p.global=q}},withDoc:function(e,r,m,l){var q=p.doc,b=g("quirks"),h=g("ie"),d,c,f;try{return a.doc=p.doc=e,a.isQuirks=g.add("quirks","BackCompat"==a.doc.compatMode,!0,!0),g("ie")&&(f=e.parentWindow)&&f.navigator&&(d=parseFloat(f.navigator.appVersion.split("MSIE ")[1])||void 0,(c=e.documentMode)&&5!=c&&Math.floor(d)!=c&&(d=c),a.isIE=g.add("ie",d,!0,!0)),m&&"string"==typeof r&&
(r=m[r]),r.apply(m,l||[])}finally{a.doc=p.doc=q,a.isQuirks=g.add("quirks",b,!0,!0),a.isIE=g.add("ie",h,!0,!0)}}};k.mixin(a,p);return p})},"dojo/dom":function(){define(["./sniff","./_base/window"],function(a,k){if(7>=a("ie"))try{document.execCommand("BackgroundImageCache",!1,!0)}catch(e){}var g={};a("ie")?g.byId=function(a,g){if("string"!=typeof a)return a;var m=g||k.doc,l=a&&m.getElementById(a);if(!l||l.attributes.id.value!=a&&l.id!=a){m=m.all[a];if(!m||m.nodeName)m=[m];for(var q=0;l=m[q++];)if(l.attributes&&
l.attributes.id&&l.attributes.id.value==a||l.id==a)return l}else return l}:g.byId=function(a,g){return("string"==typeof a?(g||k.doc).getElementById(a):a)||null};g.isDescendant=function(a,r){try{for(a=g.byId(a),r=g.byId(r);a;){if(a==r)return!0;a=a.parentNode}}catch(m){}return!1};a.add("css-user-select",function(a,g,m){if(!m)return!1;a=m.style;g=["Khtml","O","Moz","Webkit"];m=g.length;var l="userSelect";do if("undefined"!==typeof a[l])return l;while(m--&&(l=g[m]+"UserSelect"));return!1});var p=a("css-user-select");
g.setSelectable=p?function(a,r){g.byId(a).style[p]=r?"":"none"}:function(a,r){a=g.byId(a);var m=a.getElementsByTagName("*"),l=m.length;if(r)for(a.removeAttribute("unselectable");l--;)m[l].removeAttribute("unselectable");else for(a.setAttribute("unselectable","on");l--;)m[l].setAttribute("unselectable","on")};return g})},"dojo/dom-style":function(){define(["./sniff","./dom"],function(a,k){function g(c,d,e){d=d.toLowerCase();if(a("ie")||a("trident")){if("auto"==e){if("height"==d)return c.offsetHeight;
if("width"==d)return c.offsetWidth}if("fontweight"==d)switch(e){case 700:return"bold";default:return"normal"}}d in b||(b[d]=h.test(d));return b[d]?r(c,e):e}var p,e={};p=a("webkit")?function(b){var a;if(1==b.nodeType){var d=b.ownerDocument.defaultView;a=d.getComputedStyle(b,null);!a&&b.style&&(b.style.display="",a=d.getComputedStyle(b,null))}return a||{}}:a("ie")&&(9>a("ie")||a("quirks"))?function(b){return 1==b.nodeType&&b.currentStyle?b.currentStyle:{}}:function(b){return 1==b.nodeType?b.ownerDocument.defaultView.getComputedStyle(b,
null):{}};e.getComputedStyle=p;var r;r=a("ie")?function(b,a){if(!a)return 0;if("medium"==a)return 4;if(a.slice&&"px"==a.slice(-2))return parseFloat(a);var d=b.style,h=b.runtimeStyle,e=d.left,g=h.left;h.left=b.currentStyle.left;try{d.left=a,a=d.pixelLeft}catch(u){a=0}d.left=e;h.left=g;return a}:function(b,a){return parseFloat(a)||0};e.toPixelValue=r;var m=function(b,a){try{return b.filters.item("DXImageTransform.Microsoft.Alpha")}catch(d){return a?{}:null}},l=9>a("ie")||10>a("ie")&&a("quirks")?function(b){try{return m(b).Opacity/
100}catch(a){return 1}}:function(b){return p(b).opacity},q=9>a("ie")||10>a("ie")&&a("quirks")?function(b,a){""===a&&(a=1);var d=100*a;1===a?(b.style.zoom="",m(b)&&(b.style.filter=b.style.filter.replace(/\s*progid:DXImageTransform.Microsoft.Alpha\([^\)]+?\)/i,""))):(b.style.zoom=1,m(b)?m(b,1).Opacity=d:b.style.filter+=" progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d"+d+")",m(b,1).Enabled=!0);if("tr"==b.tagName.toLowerCase())for(d=b.firstChild;d;d=d.nextSibling)"td"==d.tagName.toLowerCase()&&q(d,
a);return a}:function(b,a){return b.style.opacity=a},b={left:!0,top:!0},h=/margin|padding|width|height|max|min|offset/,d={cssFloat:1,styleFloat:1,"float":1};e.get=function(b,a){var h=k.byId(b),n=arguments.length;if(2==n&&"opacity"==a)return l(h);a=d[a]?"cssFloat"in h.style?"cssFloat":"styleFloat":a;var q=e.getComputedStyle(h);return 1==n?q:g(h,a,q[a]||h.style[a])};e.set=function(b,a,h){var g=k.byId(b),m=arguments.length,l="opacity"==a;a=d[a]?"cssFloat"in g.style?"cssFloat":"styleFloat":a;if(3==m)return l?
q(g,h):g.style[a]=h;for(var u in a)e.set(b,u,a[u]);return e.getComputedStyle(g)};return e})},"dojo/mouse":function(){define(["./_base/kernel","./on","./has","./dom","./_base/window"],function(a,k,g,p,e){function r(a,e){var g=function(b,h){return k(b,a,function(a){if(e)return e(a,h);if(!p.isDescendant(a.relatedTarget,b))return h.call(this,a)})};g.bubble=function(b){return r(a,function(a,d){var c=b(a.target),f=a.relatedTarget;if(c&&c!=(f&&1==f.nodeType&&b(f)))return d.call(c,a)})};return g}g.add("dom-quirks",
e.doc&&"BackCompat"==e.doc.compatMode);g.add("events-mouseenter",e.doc&&"onmouseenter"in e.doc.createElement("div"));g.add("events-mousewheel",e.doc&&"onmousewheel"in e.doc);e=g("dom-quirks")&&g("ie")||!g("dom-addeventlistener")?{LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(a,e){return a.button&e},isLeft:function(a){return a.button&1},isMiddle:function(a){return a.button&4},isRight:function(a){return a.button&2}}:{LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(a,e){return a.button==e},isLeft:function(a){return 0==
a.button},isMiddle:function(a){return 1==a.button},isRight:function(a){return 2==a.button}};a.mouseButtons=e;a=g("events-mousewheel")?"mousewheel":function(a,e){return k(a,"DOMMouseScroll",function(a){a.wheelDelta=-a.detail;e.call(this,a)})};return{_eventHandler:r,enter:r("mouseover"),leave:r("mouseout"),wheel:a,isLeft:e.isLeft,isMiddle:e.isMiddle,isRight:e.isRight}})},"dojo/_base/sniff":function(){define(["./kernel","./lang","../sniff"],function(a,k,g){a._name="browser";k.mixin(a,{isBrowser:!0,isFF:g("ff"),
isIE:g("ie"),isKhtml:g("khtml"),isWebKit:g("webkit"),isMozilla:g("mozilla"),isMoz:g("mozilla"),isOpera:g("opera"),isSafari:g("safari"),isChrome:g("chrome"),isMac:g("mac"),isIos:g("ios"),isAndroid:g("android"),isWii:g("wii"),isQuirks:g("quirks"),isAir:g("air")});return g})},"dojo/keys":function(){define(["./_base/kernel","./sniff"],function(a,k){return a.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:k("webkit")?91:224,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,
END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,
UP_DPAD:175,DOWN_DPAD:176,LEFT_DPAD:177,RIGHT_DPAD:178,copyKey:k("mac")&&!k("air")?k("safari")?91:224:17}})},"dojo/_base/Deferred":function(){define("./kernel ../Deferred ../promise/Promise ../errors/CancelError ../has ./lang ../when".split(" "),function(a,k,g,p,e,r,m){var l=function(){},q=Object.freeze||function(){},b=a.Deferred=function(a){function d(b){if(m)throw Error("This deferred has already been resolved");f=b;m=!0;c()}function c(){for(var b;!b&&w;){var a=w;w=w.next;if(b=a.progress==l)m=!1;
var c=x?a.error:a.resolved;e("config-useDeferredInstrumentation")&&x&&k.instrumentRejected&&k.instrumentRejected(f,!!c);if(c)try{var d=c(f);d&&"function"===typeof d.then?d.then(r.hitch(a.deferred,"resolve"),r.hitch(a.deferred,"reject"),r.hitch(a.deferred,"progress")):(c=b&&void 0===d,b&&!c&&(x=d instanceof Error),a.deferred[c&&x?"reject":"resolve"](c?f:d))}catch(h){a.deferred.reject(h)}else x?a.deferred.reject(f):a.deferred.resolve(f)}}var f,m,n,v,x,u,w,A=this.promise=new g;this.isResolved=A.isResolved=
function(){return 0==v};this.isRejected=A.isRejected=function(){return 1==v};this.isFulfilled=A.isFulfilled=function(){return 0<=v};this.isCanceled=A.isCanceled=function(){return n};this.resolve=this.callback=function(b){this.fired=v=0;this.results=[b,null];d(b)};this.reject=this.errback=function(b){x=!0;this.fired=v=1;e("config-useDeferredInstrumentation")&&k.instrumentRejected&&k.instrumentRejected(b,!!w);d(b);this.results=[null,b]};this.progress=function(b){for(var a=w;a;){var c=a.progress;c&&
c(b);a=a.next}};this.addCallbacks=function(b,a){this.then(b,a,l);return this};A.then=this.then=function(a,d,f){var h=f==l?this:new b(A.cancel);a={resolved:a,error:d,progress:f,deferred:h};w?u=u.next=a:w=u=a;m&&c();return h.promise};var y=this;A.cancel=this.cancel=function(){if(!m){var b=a&&a(y);m||(b instanceof Error||(b=new p(b)),b.log=!1,y.reject(b))}n=!0};q(A)};r.extend(b,{addCallback:function(b){return this.addCallbacks(r.hitch.apply(a,arguments))},addErrback:function(b){return this.addCallbacks(null,
r.hitch.apply(a,arguments))},addBoth:function(b){var d=r.hitch.apply(a,arguments);return this.addCallbacks(d,d)},fired:-1});b.when=a.when=m;return b})},"dojo/Deferred":function(){define(["./has","./_base/lang","./errors/CancelError","./promise/Promise","./promise/instrumentation"],function(a,k,g,p,e){var r=Object.freeze||function(){},m=function(b,a,f,e,g){2===a&&h.instrumentRejected&&0===b.length&&h.instrumentRejected(f,!1,e,g);for(g=0;g<b.length;g++)l(b[g],a,f,e)},l=function(a,c,f,e){var g=a[c],
m=a.deferred;if(g)try{var l=g(f);if(0===c)"undefined"!==typeof l&&b(m,c,l);else{if(l&&"function"===typeof l.then){a.cancel=l.cancel;l.then(q(m,1),q(m,2),q(m,0));return}b(m,1,l)}}catch(u){b(m,2,u)}else b(m,c,f);2===c&&h.instrumentRejected&&h.instrumentRejected(f,!!g,e,m.promise)},q=function(a,c){return function(f){b(a,c,f)}},b=function(b,a,f){if(!b.isCanceled())switch(a){case 0:b.progress(f);break;case 1:b.resolve(f);break;case 2:b.reject(f)}},h=function(b){var a=this.promise=new p,f=this,e,n,q,k=
!1,u=[];Error.captureStackTrace&&(Error.captureStackTrace(f,h),Error.captureStackTrace(a,h));this.isResolved=a.isResolved=function(){return 1===e};this.isRejected=a.isRejected=function(){return 2===e};this.isFulfilled=a.isFulfilled=function(){return!!e};this.isCanceled=a.isCanceled=function(){return k};this.progress=function(b,d){if(e){if(!0===d)throw Error("This deferred has already been fulfilled.");return a}m(u,0,b,null,f);return a};this.resolve=function(b,d){if(e){if(!0===d)throw Error("This deferred has already been fulfilled.");
return a}m(u,e=1,n=b,null,f);u=null;return a};var w=this.reject=function(b,d){if(e){if(!0===d)throw Error("This deferred has already been fulfilled.");return a}Error.captureStackTrace&&Error.captureStackTrace(q={},w);m(u,e=2,n=b,q,f);u=null;return a};this.then=a.then=function(b,d,f){var g=[f,b,d];g.cancel=a.cancel;g.deferred=new h(function(b){return g.cancel&&g.cancel(b)});e&&!u?l(g,e,n,q):u.push(g);return g.deferred.promise};this.cancel=a.cancel=function(a,c){if(!e){if(b){var f=b(a);a="undefined"===
typeof f?a:f}k=!0;if(!e)return"undefined"===typeof a&&(a=new g),w(a),a;if(2===e&&n===a)return a}else if(!0===c)throw Error("This deferred has already been fulfilled.");};r(a)};h.prototype.toString=function(){return"[object Deferred]"};e&&e(h);return h})},"dojo/errors/CancelError":function(){define(["./create"],function(a){return a("CancelError",null,null,{dojoType:"cancel"})})},"dojo/errors/create":function(){define(["../_base/lang"],function(a){return function(k,g,p,e){p=p||Error;var r=function(a){if(p===
Error){Error.captureStackTrace&&Error.captureStackTrace(this,r);var e=Error.call(this,a),q;for(q in e)e.hasOwnProperty(q)&&(this[q]=e[q]);this.message=a;this.stack=e.stack}else p.apply(this,arguments);g&&g.apply(this,arguments)};r.prototype=a.delegate(p.prototype,e);r.prototype.name=k;return r.prototype.constructor=r}})},"dojo/promise/Promise":function(){define(["../_base/lang"],function(a){function k(){throw new TypeError("abstract");}return a.extend(function(){},{then:function(a,p,e){k()},cancel:function(a,
p){k()},isResolved:function(){k()},isRejected:function(){k()},isFulfilled:function(){k()},isCanceled:function(){k()},always:function(a){return this.then(a,a)},otherwise:function(a){return this.then(null,a)},trace:function(){return this},traceRejected:function(){return this},toString:function(){return"[object Promise]"}})})},"dojo/promise/instrumentation":function(){define(["./tracer","../has","../_base/lang","../_base/array"],function(a,k,g,p){function e(b,a,f){a&&a.stack&&a.stack.split("\n").slice(1).join("\n").replace(/^\s+/,
" ")}function r(b,a,f,h){a||e(b,f,h)}function m(a,c,f,e){p.some(q,function(b){if(b.error===a)return c&&(b.handled=!0),!0})||q.push({error:a,rejection:f,handled:c,deferred:e,timestamp:(new Date).getTime()});b||(b=setTimeout(l,h))}function l(){var a=(new Date).getTime(),c=a-h;q=p.filter(q,function(b){return b.timestamp<c?(b.handled||e(b.error,b.rejection,b.deferred),!1):!0});b=q.length?setTimeout(l,q[0].timestamp+h-a):!1}k.add("config-useDeferredInstrumentation","report-unhandled-rejections");var q=
[],b=!1,h=1E3;return function(b){var c=k("config-useDeferredInstrumentation");if(c){a.on("resolved",g.hitch(console,"log","resolved"));a.on("rejected",g.hitch(console,"log","rejected"));a.on("progress",g.hitch(console,"log","progress"));var f=[];"string"===typeof c&&(f=c.split(","),c=f.shift());if("report-rejections"===c)b.instrumentRejected=r;else if("report-unhandled-rejections"===c||!0===c||1===c)b.instrumentRejected=m,h=parseInt(f[0],10)||h;else throw Error("Unsupported instrumentation usage \x3c"+
c+"\x3e");}}})},"dojo/promise/tracer":function(){define(["../_base/lang","./Promise","../Evented"],function(a,k,g){function p(a){setTimeout(function(){r.apply(e,a)},0)}var e=new g,r=e.emit;e.emit=null;k.prototype.trace=function(){var e=a._toArray(arguments);this.then(function(a){p(["resolved",a].concat(e))},function(a){p(["rejected",a].concat(e))},function(a){p(["progress",a].concat(e))});return this};k.prototype.traceRejected=function(){var e=a._toArray(arguments);this.otherwise(function(a){p(["rejected",
a].concat(e))});return this};return e})},"dojo/when":function(){define(["./Deferred","./promise/Promise"],function(a,k){return function(g,p,e,r){var m=g&&"function"===typeof g.then,l=m&&g instanceof k;if(!m)return 1<arguments.length?p?p(g):g:(new a).resolve(g);l||(m=new a(g.cancel),g.then(m.resolve,m.reject,m.progress),g=m.promise);return p||e||r?g.then(p,e,r):g}})},"dojo/_base/json":function(){define(["./kernel","../json"],function(a,k){a.fromJson=function(a){return eval("("+a+")")};a._escapeString=
k.stringify;a.toJsonIndentStr="\t";a.toJson=function(g,p){return k.stringify(g,function(a,g){if(g){var m=g.__json__||g.json;if("function"==typeof m)return m.call(g)}return g},p&&a.toJsonIndentStr)};return a})},"dojo/json":function(){define(["./has"],function(a){var k="undefined"!=typeof JSON;a.add("json-parse",k);a.add("json-stringify",k&&'{"a":1}'==JSON.stringify({a:0},function(a,e){return e||1}));if(a("json-stringify"))return JSON;var g=function(a){return('"'+a.replace(/(["\\])/g,"\\$1")+'"').replace(/[\f]/g,
"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")};return{parse:a("json-parse")?JSON.parse:function(a,e){if(e&&!/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(a))throw new SyntaxError("Invalid characters in JSON");return eval("("+a+")")},stringify:function(a,e,r){function m(a,b,h){e&&(a=e(h,a));var d;d=typeof a;if("number"==d)return isFinite(a)?a+"":"null";if("boolean"==d)return a+"";if(null===
a)return"null";if("string"==typeof a)return g(a);if("function"==d||"undefined"==d)return l;if("function"==typeof a.toJSON)return m(a.toJSON(h),b,h);if(a instanceof Date)return'"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g,function(b,c,d){b=a["getUTC"+c]()+(d?1:0);return 10>b?"0"+b:b});if(a.valueOf()!==a)return m(a.valueOf(),b,h);var c=r?b+r:"",f=r?" ":"",k=r?"\n":"";if(a instanceof Array){var f=a.length,n=[];for(h=0;h<f;h++)d=m(a[h],c,h),"string"!=typeof d&&
(d="null"),n.push(k+c+d);return"["+n.join(",")+k+b+"]"}n=[];for(h in a){var p;if(a.hasOwnProperty(h)){if("number"==typeof h)p='"'+h+'"';else if("string"==typeof h)p=g(h);else continue;d=m(a[h],c,h);"string"==typeof d&&n.push(k+c+p+":"+f+d)}}return"{"+n.join(",")+k+b+"}"}var l;"string"==typeof e&&(r=e,e=null);return m(a,"","")}}})},"dojo/_base/Color":function(){define(["./kernel","./lang","./array","./config"],function(a,k,g,p){var e=a.Color=function(a){a&&this.setColor(a)};e.named={black:[0,0,0],
silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:p.transparentColor||[0,0,0,0]};k.extend(e,{r:255,g:255,b:255,a:1,_set:function(a,e,g,q){this.r=a;this.g=e;this.b=g;this.a=q},setColor:function(a){k.isString(a)?e.fromString(a,this):k.isArray(a)?e.fromArray(a,this):(this._set(a.r,
a.g,a.b,a.a),a instanceof e||this.sanitize());return this},sanitize:function(){return this},toRgb:function(){return[this.r,this.g,this.b]},toRgba:function(){return[this.r,this.g,this.b,this.a]},toHex:function(){return"#"+g.map(["r","g","b"],function(a){a=this[a].toString(16);return 2>a.length?"0"+a:a},this).join("")},toCss:function(a){var e=this.r+", "+this.g+", "+this.b;return(a?"rgba("+e+", "+this.a:"rgb("+e)+")"},toString:function(){return this.toCss(!0)}});e.blendColors=a.blendColors=function(a,
m,l,q){var b=q||new e;g.forEach(["r","g","b","a"],function(h){b[h]=a[h]+(m[h]-a[h])*l;"a"!=h&&(b[h]=Math.round(b[h]))});return b.sanitize()};e.fromRgb=a.colorFromRgb=function(a,g){var l=a.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);return l&&e.fromArray(l[1].split(/\s*,\s*/),g)};e.fromHex=a.colorFromHex=function(a,m){var l=m||new e,q=4==a.length?4:8,b=(1<<q)-1;a=Number("0x"+a.substr(1));if(isNaN(a))return null;g.forEach(["b","g","r"],function(h){var d=a&b;a>>=q;l[h]=4==q?17*d:d});l.a=1;return l};
e.fromArray=a.colorFromArray=function(a,g){var l=g||new e;l._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));isNaN(l.a)&&(l.a=1);return l.sanitize()};e.fromString=a.colorFromString=function(a,g){var l=e.named[a];return l&&e.fromArray(l,g)||e.fromRgb(a,g)||e.fromHex(a,g)};return e})},"dojo/_base/browser":function(){require.has&&require.has.add("config-selectorEngine","acme");define("../ready ./kernel ./connect ./unload ./window ./event ./html ./NodeList ../query ./xhr ./fx".split(" "),function(a){return a})},
"dojo/_base/unload":function(){define(["./kernel","./lang","../on"],function(a,k,g){var p=window,e={addOnWindowUnload:function(e,m){a.windowUnloaded||g(p,"unload",a.windowUnloaded=function(){});g(p,"unload",k.hitch(e,m))},addOnUnload:function(a,e){g(p,"beforeunload",k.hitch(a,e))}};a.addOnWindowUnload=e.addOnWindowUnload;a.addOnUnload=e.addOnUnload;return e})},"dojo/_base/html":function(){define("./kernel ../dom ../dom-style ../dom-attr ../dom-prop ../dom-class ../dom-construct ../dom-geometry".split(" "),
function(a,k,g,p,e,r,m,l){a.byId=k.byId;a.isDescendant=k.isDescendant;a.setSelectable=k.setSelectable;a.getAttr=p.get;a.setAttr=p.set;a.hasAttr=p.has;a.removeAttr=p.remove;a.getNodeProp=p.getNodeProp;a.attr=function(a,b,h){return 2==arguments.length?p["string"==typeof b?"get":"set"](a,b):p.set(a,b,h)};a.hasClass=r.contains;a.addClass=r.add;a.removeClass=r.remove;a.toggleClass=r.toggle;a.replaceClass=r.replace;a._toDom=a.toDom=m.toDom;a.place=m.place;a.create=m.create;a.empty=function(a){m.empty(a)};
a._destroyElement=a.destroy=function(a){m.destroy(a)};a._getPadExtents=a.getPadExtents=l.getPadExtents;a._getBorderExtents=a.getBorderExtents=l.getBorderExtents;a._getPadBorderExtents=a.getPadBorderExtents=l.getPadBorderExtents;a._getMarginExtents=a.getMarginExtents=l.getMarginExtents;a._getMarginSize=a.getMarginSize=l.getMarginSize;a._getMarginBox=a.getMarginBox=l.getMarginBox;a.setMarginBox=l.setMarginBox;a._getContentBox=a.getContentBox=l.getContentBox;a.setContentSize=l.setContentSize;a._isBodyLtr=
a.isBodyLtr=l.isBodyLtr;a._docScroll=a.docScroll=l.docScroll;a._getIeDocumentElementOffset=a.getIeDocumentElementOffset=l.getIeDocumentElementOffset;a._fixIeBiDiScrollLeft=a.fixIeBiDiScrollLeft=l.fixIeBiDiScrollLeft;a.position=l.position;a.marginBox=function(a,b){return b?l.setMarginBox(a,b):l.getMarginBox(a)};a.contentBox=function(a,b){return b?l.setContentSize(a,b):l.getContentBox(a)};a.coords=function(e,b){a.deprecated("dojo.coords()","Use dojo.position() or dojo.marginBox().");e=k.byId(e);var h=
g.getComputedStyle(e),h=l.getMarginBox(e,h),d=l.position(e,b);h.x=d.x;h.y=d.y;return h};a.getProp=e.get;a.setProp=e.set;a.prop=function(a,b,h){return 2==arguments.length?e["string"==typeof b?"get":"set"](a,b):e.set(a,b,h)};a.getStyle=g.get;a.setStyle=g.set;a.getComputedStyle=g.getComputedStyle;a.__toPixelValue=a.toPixelValue=g.toPixelValue;a.style=function(a,b,e){switch(arguments.length){case 1:return g.get(a);case 2:return g["string"==typeof b?"get":"set"](a,b)}return g.set(a,b,e)};return a})},"dojo/dom-attr":function(){define("exports ./sniff ./_base/lang ./dom ./dom-style ./dom-prop".split(" "),
function(a,k,g,p,e,r){function m(a,e){var d=a.getAttributeNode&&a.getAttributeNode(e);return!!d&&d.specified}var l={innerHTML:1,textContent:1,className:1,htmlFor:k("ie"),value:1},q={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};a.has=function(a,e){var d=e.toLowerCase();return l[r.names[d]||e]||m(p.byId(a),q[d]||e)};a.get=function(a,e){a=p.byId(a);var d=e.toLowerCase(),c=r.names[d]||e,f=a[c];if(l[c]&&"undefined"!=typeof f)return f;if("textContent"==c)return r.get(a,c);if("href"!=
c&&("boolean"==typeof f||g.isFunction(f)))return f;d=q[d]||e;return m(a,d)?a.getAttribute(d):null};a.set=function(b,h,d){b=p.byId(b);if(2==arguments.length){for(var c in h)a.set(b,c,h[c]);return b}c=h.toLowerCase();var f=r.names[c]||h,m=l[f];if("style"==f&&"string"!=typeof d)return e.set(b,d),b;if(m||"boolean"==typeof d||g.isFunction(d))return r.set(b,h,d);b.setAttribute(q[c]||h,d);return b};a.remove=function(a,e){p.byId(a).removeAttribute(q[e.toLowerCase()]||e)};a.getNodeProp=function(a,e){a=p.byId(a);
var d=e.toLowerCase(),c=r.names[d]||e;if(c in a&&"href"!=c)return a[c];d=q[d]||e;return m(a,d)?a.getAttribute(d):null}})},"dojo/dom-prop":function(){define("exports ./_base/kernel ./sniff ./_base/lang ./dom ./dom-style ./dom-construct ./_base/connect".split(" "),function(a,k,g,p,e,r,m,l){function q(a){var b="";a=a.childNodes;for(var d=0,e;e=a[d];d++)8!=e.nodeType&&(b=1==e.nodeType?b+q(e):b+e.nodeValue);return b}var b={},h=0,d=k._scopeName+"attrid";g.add("dom-textContent",function(a,b,d){return"textContent"in
d});a.names={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",textcontent:"textContent",valuetype:"valueType"};a.get=function(b,d){b=e.byId(b);var h=d.toLowerCase(),h=a.names[h]||d;return"textContent"!=h||g("dom-textContent")?b[h]:q(b)};a.set=function(c,f,k){c=e.byId(c);if(2==arguments.length&&"string"!=typeof f){for(var n in f)a.set(c,n,f[n]);return c}n=f.toLowerCase();n=a.names[n]||f;if("style"==n&&"string"!=
typeof k)return r.set(c,k),c;if("innerHTML"==n)return g("ie")&&c.tagName.toLowerCase()in{col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1}?(m.empty(c),c.appendChild(m.toDom(k,c.ownerDocument))):c[n]=k,c;if("textContent"==n&&!g("dom-textContent"))return m.empty(c),c.appendChild(c.ownerDocument.createTextNode(k)),c;if(p.isFunction(k)){var q=c[d];q||(q=h++,c[d]=q);b[q]||(b[q]={});var x=b[q][n];if(x)l.disconnect(x);else try{delete c[n]}catch(u){}k?b[q][n]=l.connect(c,n,k):c[n]=null;return c}c[n]=
k;return c}})},"dojo/dom-construct":function(){define("exports ./_base/kernel ./sniff ./_base/window ./dom ./dom-attr".split(" "),function(a,k,g,p,e,r){function m(a,b){var c=b.parentNode;c&&c.insertBefore(a,b)}function l(a){if("innerHTML"in a)try{a.innerHTML="";return}catch(b){}for(var c;c=a.lastChild;)a.removeChild(c)}var q={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],
colgroup:["table"],col:["table","colgroup"],li:["ul"]},b=/<\s*([\w\:]+)/,h={},d=0,c="__"+k._scopeName+"ToDomId",f;for(f in q)q.hasOwnProperty(f)&&(k=q[f],k.pre="option"==f?'\x3cselect multiple\x3d"multiple"\x3e':"\x3c"+k.join("\x3e\x3c")+"\x3e",k.post="\x3c/"+k.reverse().join("\x3e\x3c/")+"\x3e");var t;8>=g("ie")&&(t=function(a){a.__dojo_html5_tested="yes";var b=n("div",{innerHTML:"\x3cnav\x3ea\x3c/nav\x3e",style:{visibility:"hidden"}},a.body);1!==b.childNodes.length&&"abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g,
function(b){a.createElement(b)});v(b)});a.toDom=function(a,e){e=e||p.doc;var f=e[c];f||(e[c]=f=++d+"",h[f]=e.createElement("div"));8>=g("ie")&&!e.__dojo_html5_tested&&e.body&&t(e);a+="";var n=a.match(b),l=n?n[1].toLowerCase():"",f=h[f];if(n&&q[l])for(n=q[l],f.innerHTML=n.pre+a+n.post,n=n.length;n;--n)f=f.firstChild;else f.innerHTML=a;if(1==f.childNodes.length)return f.removeChild(f.firstChild);for(l=e.createDocumentFragment();n=f.firstChild;)l.appendChild(n);return l};a.place=function(b,c,d){c=e.byId(c);
"string"==typeof b&&(b=/^\s*</.test(b)?a.toDom(b,c.ownerDocument):e.byId(b));if("number"==typeof d){var f=c.childNodes;!f.length||f.length<=d?c.appendChild(b):m(b,f[0>d?0:d])}else switch(d){case "before":m(b,c);break;case "after":d=b;(f=c.parentNode)&&(f.lastChild==c?f.appendChild(d):f.insertBefore(d,c.nextSibling));break;case "replace":c.parentNode.replaceChild(b,c);break;case "only":a.empty(c);c.appendChild(b);break;case "first":if(c.firstChild){m(b,c.firstChild);break}default:c.appendChild(b)}return b};
var n=a.create=function(b,c,d,f){var h=p.doc;d&&(d=e.byId(d),h=d.ownerDocument);"string"==typeof b&&(b=h.createElement(b));c&&r.set(b,c);d&&a.place(b,d,f);return b};a.empty=function(a){l(e.byId(a))};var v=a.destroy=function(a){if(a=e.byId(a)){var b=a;a=a.parentNode;b.firstChild&&l(b);a&&(g("ie")&&a.canHaveChildren&&"removeNode"in b?b.removeNode(!1):a.removeChild(b))}}})},"dojo/dom-class":function(){define(["./_base/lang","./_base/array","./dom"],function(a,k,g){function p(a){if("string"==typeof a||
a instanceof String){if(a&&!r.test(a))return m[0]=a,m;a=a.split(r);a.length&&!a[0]&&a.shift();a.length&&!a[a.length-1]&&a.pop();return a}return a?k.filter(a,function(a){return a}):[]}var e,r=/\s+/,m=[""],l={};return e={contains:function(a,b){return 0<=(" "+g.byId(a).className+" ").indexOf(" "+b+" ")},add:function(a,b){a=g.byId(a);b=p(b);var e=a.className,d,e=e?" "+e+" ":" ";d=e.length;for(var c=0,f=b.length,l;c<f;++c)(l=b[c])&&0>e.indexOf(" "+l+" ")&&(e+=l+" ");d<e.length&&(a.className=e.substr(1,
e.length-2))},remove:function(e,b){e=g.byId(e);var h;if(void 0!==b){b=p(b);h=" "+e.className+" ";for(var d=0,c=b.length;d<c;++d)h=h.replace(" "+b[d]+" "," ");h=a.trim(h)}else h="";e.className!=h&&(e.className=h)},replace:function(a,b,h){a=g.byId(a);l.className=a.className;e.remove(l,h);e.add(l,b);a.className!==l.className&&(a.className=l.className)},toggle:function(a,b,h){a=g.byId(a);if(void 0===h){b=p(b);for(var d=0,c=b.length,f;d<c;++d)f=b[d],e[e.contains(a,f)?"remove":"add"](a,f)}else e[h?"add":
"remove"](a,b);return h}}})},"dojo/_base/NodeList":function(){define(["./kernel","../query","./array","./html","../NodeList-dom"],function(a,k,g){k=k.NodeList;var p=k.prototype;p.connect=k._adaptAsForEach(function(){return a.connect.apply(this,arguments)});p.coords=k._adaptAsMap(a.coords);k.events="blur focus change click error keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup submit".split(" ");g.forEach(k.events,function(a){var g="on"+a;p[g]=function(a,
e){return this.connect(g,a,e)}});return a.NodeList=k})},"dojo/query":function(){define("./_base/kernel ./has ./dom ./on ./_base/array ./_base/lang ./selector/_loader ./selector/_loader!default".split(" "),function(a,k,g,p,e,r,m,l){function q(a,b){var c=function(c,d){if("string"==typeof d&&(d=g.byId(d),!d))return new b([]);var e="string"==typeof c?a(c,d):c?c.end&&c.on?c:[c]:[];return e.end&&e.on?e:new b(e)};c.matches=a.match||function(a,b,d){return 0<c.filter([a],b,d).length};c.filter=a.filter||function(a,
b,d){return c(b,d).filter(function(b){return-1<e.indexOf(a,b)})};if("function"!=typeof a){var d=a.search;a=function(a,b){return d(b||document,a)}}return c}k.add("array-extensible",function(){return 1==r.delegate([],{length:1}).length&&!k("bug-for-in-skips-shadowed")});var b=Array.prototype,h=b.slice,d=b.concat,c=e.forEach,f=function(b,c,d){c=[0].concat(h.call(c,0));d=d||a.global;return function(a){c[0]=a;return b.apply(d,c)}},t=function(a){var b=this instanceof n&&k("array-extensible");"number"==
typeof a&&(a=Array(a));var c=a&&"length"in a?a:arguments;if(b||!c.sort){for(var d=b?this:[],e=d.length=c.length,f=0;f<e;f++)d[f]=c[f];if(b)return d;c=d}r._mixin(c,v);c._NodeListCtor=function(a){return n(a)};return c},n=t,v=n.prototype=k("array-extensible")?[]:{};n._wrap=v._wrap=function(a,b,c){a=new (c||this._NodeListCtor||n)(a);return b?a._stash(b):a};n._adaptAsMap=function(a,b){return function(){return this.map(f(a,arguments,b))}};n._adaptAsForEach=function(a,b){return function(){this.forEach(f(a,
arguments,b));return this}};n._adaptAsFilter=function(a,b){return function(){return this.filter(f(a,arguments,b))}};n._adaptWithCondition=function(b,c,d){return function(){var e=arguments,h=f(b,e,d);if(c.call(d||a.global,e))return this.map(h);this.forEach(h);return this}};c(["slice","splice"],function(a){var c=b[a];v[a]=function(){return this._wrap(c.apply(this,arguments),"slice"==a?this:null)}});c(["indexOf","lastIndexOf","every","some"],function(b){var c=e[b];v[b]=function(){return c.apply(a,[this].concat(h.call(arguments,
0)))}});r.extend(t,{constructor:n,_NodeListCtor:n,toString:function(){return this.join(",")},_stash:function(a){this._parent=a;return this},on:function(a,b){var c=this.map(function(c){return p(c,a,b)});c.remove=function(){for(var a=0;a<c.length;a++)c[a].remove()};return c},end:function(){return this._parent?this._parent:new this._NodeListCtor(0)},concat:function(a){var b=h.call(this,0),c=e.map(arguments,function(a){return h.call(a,0)});return this._wrap(d.apply(b,c),this)},map:function(a,b){return this._wrap(e.map(this,
a,b),this)},forEach:function(a,b){c(this,a,b);return this},filter:function(a){var b=arguments,c=this,d=0;if("string"==typeof a){c=x._filterResult(this,b[0]);if(1==b.length)return c._stash(this);d=1}return this._wrap(e.filter(c,b[d],b[d+1]),this)},instantiate:function(a,b){var c=r.isFunction(a)?a:r.getObject(a);b=b||{};return this.forEach(function(a){new c(b,a)})},at:function(){var a=new this._NodeListCtor(0);c(arguments,function(b){0>b&&(b=this.length+b);this[b]&&a.push(this[b])},this);return a._stash(this)}});
var x=q(l,t);a.query=q(l,function(a){return t(a)});x.load=function(a,b,c){m.load(a,b,function(a){c(q(a,t))})};a._filterQueryResult=x._filterResult=function(a,b,c){return new t(x.filter(a,b,c))};a.NodeList=x.NodeList=t;return x})},"dojo/selector/_loader":function(){define(["../has","require"],function(a,k){var g=document.createElement("div");a.add("dom-qsa2.1",!!g.querySelectorAll);a.add("dom-qsa3",function(){try{return g.innerHTML="\x3cp class\x3d'TEST'\x3e\x3c/p\x3e",1==g.querySelectorAll(".TEST:empty").length}catch(a){}});
var p;return{load:function(e,g,m,l){l=k;e="default"==e?a("config-selectorEngine")||"css3":e;e="css2"==e||"lite"==e?"./lite":"css2.1"==e?a("dom-qsa2.1")?"./lite":"./acme":"css3"==e?a("dom-qsa3")?"./lite":"./acme":"acme"==e?"./acme":(l=g)&&e;if("?"==e.charAt(e.length-1)){e=e.substring(0,e.length-1);var q=!0}if(q&&(a("dom-compliant-qsa")||p))return m(p);l([e],function(a){"./lite"!=e&&(p=a);m(a)})}}})},"dojo/selector/acme":function(){define(["../dom","../sniff","../_base/array","../_base/lang","../_base/window"],
function(a,k,g,p,e){var r=p.trim,m=g.forEach,l="BackCompat"==e.doc.compatMode,q=!1,b=function(){return!0},h=function(a){a=0<="\x3e~+".indexOf(a.slice(-1))?a+" * ":a+" ";for(var b=function(b,c){return r(a.slice(b,c))},c=[],d=-1,e=-1,f=-1,h=-1,g=-1,n=-1,l=-1,m,k="",p="",u,t=0,v=a.length,z=null,w=null,x=function(){0<=n&&(z.id=b(n,t).replace(/\\/g,""),n=-1);if(0<=l){var a=l==t?null:b(l,t);z[0>"\x3e~+".indexOf(a)?"tag":"oper"]=a;l=-1}0<=g&&(z.classes.push(b(g+1,t).replace(/\\/g,"")),g=-1)};k=p,p=a.charAt(t),
t<v;t++)"\\"!=k&&(z||(u=t,z={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){return q?this.otag:this.tag}},l=t),m?p==m&&(m=null):"'"==p||'"'==p?m=p:0<=d?"]"==p?(w.attr?w.matchFor=b(f||d+1,t):w.attr=b(d+1,t),!(d=w.matchFor)||'"'!=d.charAt(0)&&"'"!=d.charAt(0)||(w.matchFor=d.slice(1,-1)),w.matchFor&&(w.matchFor=w.matchFor.replace(/\\/g,"")),z.attrs.push(w),w=null,d=f=-1):"\x3d"==p&&(f=0<="|~^$*".indexOf(k)?k:"",w.type=f+p,w.attr=b(d+1,t-f.length),f=t+1):0<=e?")"==
p&&(0<=h&&(w.value=b(e+1,t)),h=e=-1):"#"==p?(x(),n=t+1):"."==p?(x(),g=t):":"==p?(x(),h=t):"["==p?(x(),d=t,w={}):"("==p?(0<=h&&(w={name:b(h+1,t),value:null},z.pseudos.push(w)),e=t):" "==p&&k!=p&&(x(),0<=h&&z.pseudos.push({name:b(h+1,t)}),z.loops=z.pseudos.length||z.attrs.length||z.classes.length,z.oquery=z.query=b(u,t),z.otag=z.tag=z.oper?null:z.tag||"*",z.tag&&(z.tag=z.tag.toUpperCase()),c.length&&c[c.length-1].oper&&(z.infixOper=c.pop(),z.query=z.infixOper.query+" "+z.query),c.push(z),z=null));return c},
d=function(a,b){return a?b?function(){return a.apply(window,arguments)&&b.apply(window,arguments)}:a:b},c=function(a,b){var c=b||[];a&&c.push(a);return c},f=function(a){return 1==a.nodeType},t=function(a,b){return a?"class"==b?a.className||"":"for"==b?a.htmlFor||"":"style"==b?a.style.cssText||"":(q?a.getAttribute(b):a.getAttribute(b,2))||"":""},n={"*\x3d":function(a,b){return function(c){return 0<=t(c,a).indexOf(b)}},"^\x3d":function(a,b){return function(c){return 0==t(c,a).indexOf(b)}},"$\x3d":function(a,
b){return function(c){c=" "+t(c,a);var d=c.lastIndexOf(b);return-1<d&&d==c.length-b.length}},"~\x3d":function(a,b){var c=" "+b+" ";return function(b){return 0<=(" "+t(b,a)+" ").indexOf(c)}},"|\x3d":function(a,b){var c=b+"-";return function(d){d=t(d,a);return d==b||0==d.indexOf(c)}},"\x3d":function(a,b){return function(c){return t(c,a)==b}}},v="undefined"==typeof e.doc.firstChild.nextElementSibling,x=v?"nextSibling":"nextElementSibling",u=v?"previousSibling":"previousElementSibling",w=v?f:b,A=function(a){for(;a=
a[u];)if(w(a))return!1;return!0},y=function(a){for(;a=a[x];)if(w(a))return!1;return!0},z=function(a){var b=a.parentNode,b=7!=b.nodeType?b:b.nextSibling,c=0,d=b.children||b.childNodes,e=a._i||a.getAttribute("_i")||-1,f=b._l||("undefined"!==typeof b.getAttribute?b.getAttribute("_l"):-1);if(!d)return-1;d=d.length;if(f==d&&0<=e&&0<=f)return e;k("ie")&&"undefined"!==typeof b.setAttribute?b.setAttribute("_l",d):b._l=d;e=-1;for(b=b.firstElementChild||b.firstChild;b;b=b[x])w(b)&&(k("ie")?b.setAttribute("_i",
++c):b._i=++c,a===b&&(e=c));return e},M=function(a){return!(z(a)%2)},U=function(a){return z(a)%2},P={checked:function(a,b){return function(a){return!("checked"in a?!a.checked:!a.selected)}},disabled:function(a,b){return function(a){return a.disabled}},enabled:function(a,b){return function(a){return!a.disabled}},"first-child":function(){return A},"last-child":function(){return y},"only-child":function(a,b){return function(a){return A(a)&&y(a)}},empty:function(a,b){return function(a){var b=a.childNodes;
for(a=a.childNodes.length-1;0<=a;a--){var c=b[a].nodeType;if(1===c||3==c)return!1}return!0}},contains:function(a,b){var c=b.charAt(0);if('"'==c||"'"==c)b=b.slice(1,-1);return function(a){return 0<=a.innerHTML.indexOf(b)}},not:function(a,b){var c=h(b)[0],d={el:1};"*"!=c.tag&&(d.tag=1);c.classes.length||(d.classes=1);var e=I(c,d);return function(a){return!e(a)}},"nth-child":function(a,b){var c=parseInt;if("odd"==b)return U;if("even"==b)return M;if(-1!=b.indexOf("n")){var d=b.split("n",2),e=d[0]?"-"==
d[0]?-1:c(d[0]):1,f=d[1]?c(d[1]):0,h=0,g=-1;0<e?0>f?f=f%e&&e+f%e:0<f&&(f>=e&&(h=f-f%e),f%=e):0>e&&(e*=-1,0<f&&(g=f,f%=e));if(0<e)return function(a){a=z(a);return a>=h&&(0>g||a<=g)&&a%e==f};b=f}var n=c(b);return function(a){return z(a)==n}}},J=9>k("ie")||9==k("ie")&&k("quirks")?function(a){var b=a.toLowerCase();"class"==b&&(a="className");return function(c){return q?c.getAttribute(a):c[a]||c[b]}}:function(a){return function(b){return b&&b.getAttribute&&b.hasAttribute(a)}},I=function(a,c){if(!a)return b;
c=c||{};var e=null;"el"in c||(e=d(e,f));"tag"in c||"*"!=a.tag&&(e=d(e,function(b){return b&&(q?b.tagName:b.tagName.toUpperCase())==a.getTag()}));"classes"in c||m(a.classes,function(a,b,c){var f=new RegExp("(?:^|\\s)"+a+"(?:\\s|$)");e=d(e,function(a){return f.test(a.className)});e.count=b});"pseudos"in c||m(a.pseudos,function(a){var b=a.name;P[b]&&(e=d(e,P[b](b,a.value)))});"attrs"in c||m(a.attrs,function(a){var b,c=a.attr;a.type&&n[a.type]?b=n[a.type](c,a.matchFor):c.length&&(b=J(c));b&&(e=d(e,b))});
"id"in c||a.id&&(e=d(e,function(b){return!!b&&b.id==a.id}));e||"default"in c||(e=b);return e},Q=function(a){return function(b,c,d){for(;b=b[x];)if(!v||f(b)){d&&!T(b,d)||!a(b)||c.push(b);break}return c}},B=function(a){return function(b,c,d){for(b=b[x];b;){if(w(b)){if(d&&!T(b,d))break;a(b)&&c.push(b)}b=b[x]}return c}},H=function(a){a=a||b;return function(b,c,d){for(var e=0,f=b.children||b.childNodes;b=f[e++];)w(b)&&(!d||T(b,d))&&a(b,e)&&c.push(b);return c}},N={},E=function(d){var f=N[d.query];if(f)return f;
var h=d.infixOper,h=h?h.oper:"",g=I(d,{el:1}),n="*"==d.tag,m=e.doc.getElementsByClassName;if(h)m={el:1},n&&(m.tag=1),g=I(d,m),"+"==h?f=Q(g):"~"==h?f=B(g):"\x3e"==h&&(f=H(g));else if(d.id)g=!d.loops&&n?b:I(d,{el:1,id:1}),f=function(b,e){var f=a.byId(d.id,b.ownerDocument||b);if(f&&g(f)){if(9==b.nodeType)return c(f,e);for(var h=f.parentNode;h&&h!=b;)h=h.parentNode;if(h)return c(f,e)}};else if(m&&/\{\s*\[native code\]\s*\}/.test(String(m))&&d.classes.length&&!l)var g=I(d,{el:1,classes:1,id:1}),k=d.classes.join(" "),
f=function(a,b,d){b=c(0,b);for(var e,f=0,h=a.getElementsByClassName(k);e=h[f++];)g(e,a)&&T(e,d)&&b.push(e);return b};else n||d.loops?(g=I(d,{el:1,tag:1,id:1}),f=function(a,b,e){b=c(0,b);for(var f,h=0,n=(f=d.getTag())?a.getElementsByTagName(f):[];f=n[h++];)g(f,a)&&T(f,e)&&b.push(f);return b}):f=function(a,b,e){b=c(0,b);for(var f=0,h=d.getTag(),h=h?a.getElementsByTagName(h):[];a=h[f++];)T(a,e)&&b.push(a);return b};return N[d.query]=f},D={},K={},W=function(a){var b=h(r(a));if(1==b.length){var d=E(b[0]);
return function(a){if(a=d(a,[]))a.nozip=!0;return a}}return function(a){a=c(a);for(var d,e,f=b.length,h,g,n=0;n<f;n++){g=[];d=b[n];e=a.length-1;0<e&&(h={},g.nozip=!0);e=E(d);for(var l=0;d=a[l];l++)e(d,g,h);if(!g.length)break;a=g}return g}},ca=k("ie")?"commentStrip":"nozip",O=!!e.doc.querySelectorAll,F=/\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g,X=function(a,b,c,d){return c?(b?b+" ":"")+c+(d?" "+d:""):a},G=/([^[]*)([^\]]*])?/g,C=function(a,b,c){return b.replace(F,X)+(c||"")},fa=function(a,b){a=a.replace(G,
C);if(O){var c=K[a];if(c&&!b)return c}if(c=D[a])return c;var c=a.charAt(0),d=-1==a.indexOf(" ");0<=a.indexOf("#")&&d&&(b=!0);if(!O||b||-1!="\x3e~+".indexOf(c)||k("ie")&&-1!=a.indexOf(":")||l&&0<=a.indexOf(".")||-1!=a.indexOf(":contains")||-1!=a.indexOf(":checked")||-1!=a.indexOf("|\x3d")){var e=a.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g);return D[a]=2>e.length?W(a):function(a){for(var b=0,c=[],d;d=e[b++];)c=c.concat(W(d)(a));return c}}var f=0<="\x3e~+".indexOf(a.charAt(a.length-
1))?a+" *":a;return K[a]=function(b){try{if(9!=b.nodeType&&!d)throw"";var c=b.querySelectorAll(f);c[ca]=!0;return c}catch(e){return fa(a,!0)(b)}}},L=0,ga=k("ie")?function(a){return q?a.getAttribute("_uid")||a.setAttribute("_uid",++L)||L:a.uniqueID}:function(a){return a._uid||(a._uid=++L)},T=function(a,b){if(!b)return 1;var c=ga(a);return b[c]?0:b[c]=1},Z=function(a){if(a&&a.nozip)return a;if(!a||!a.length)return[];if(2>a.length)return[a[0]];var b=[];L++;var c,d;if(k("ie")&&q){var e=L+"";for(c=0;c<
a.length;c++)(d=a[c])&&d.getAttribute("_zipIdx")!=e&&(b.push(d),d.setAttribute("_zipIdx",e))}else if(k("ie")&&a.commentStrip)try{for(c=0;c<a.length;c++)(d=a[c])&&f(d)&&b.push(d)}catch(h){}else for(c=0;c<a.length;c++)(d=a[c])&&d._zipIdx!=L&&(b.push(d),d._zipIdx=L);return b},aa=function(a,b){b=b||e.doc;q="div"===(b.ownerDocument||b).createElement("div").tagName;var c=fa(a)(b);return c&&c.nozip?c:Z(c)};aa.filter=function(b,c,d){for(var e=[],f=h(c),f=1!=f.length||/[^\w#\.]/.test(c)?function(b){return-1!=
g.indexOf(aa(c,a.byId(d)),b)}:I(f[0]),n=0,l;l=b[n];n++)f(l)&&e.push(l);return e};return aa})},"dojo/NodeList-dom":function(){define("./_base/kernel ./query ./_base/array ./_base/lang ./dom-class ./dom-construct ./dom-geometry ./dom-attr ./dom-style".split(" "),function(a,k,g,p,e,r,m,l,q){function b(a){return function(b,c,d){return 2==arguments.length?a["string"==typeof c?"get":"set"](b,c):a.set(b,c,d)}}var h=function(a){return 1==a.length&&"string"==typeof a[0]},d=function(a){var b=a.parentNode;b&&
b.removeChild(a)},c=k.NodeList,f=c._adaptWithCondition,t=c._adaptAsForEach,n=c._adaptAsMap;p.extend(c,{_normalize:function(b,c){var d=!0===b.parse;if("string"==typeof b.template){var e=b.templateFunc||a.string&&a.string.substitute;b=e?e(b.template,b):b}e=typeof b;"string"==e||"number"==e?(b=r.toDom(b,c&&c.ownerDocument),b=11==b.nodeType?p._toArray(b.childNodes):[b]):p.isArrayLike(b)?p.isArray(b)||(b=p._toArray(b)):b=[b];d&&(b._runParse=!0);return b},_cloneNode:function(a){return a.cloneNode(!0)},
_place:function(b,c,d,e){if(1==c.nodeType||"only"!=d)for(var f,h=b.length,g=h-1;0<=g;g--){var n=e?this._cloneNode(b[g]):b[g];if(b._runParse&&a.parser&&a.parser.parse)for(f||(f=c.ownerDocument.createElement("div")),f.appendChild(n),a.parser.parse(f),n=f.firstChild;f.firstChild;)f.removeChild(f.firstChild);g==h-1?r.place(n,c,d):c.parentNode.insertBefore(n,c);c=n}},position:n(m.position),attr:f(b(l),h),style:f(b(q),h),addClass:t(e.add),removeClass:t(e.remove),toggleClass:t(e.toggle),replaceClass:t(e.replace),
empty:t(r.empty),removeAttr:t(l.remove),marginBox:n(m.getMarginBox),place:function(a,b){var c=k(a)[0];return this.forEach(function(a){r.place(a,c,b)})},orphan:function(a){return(a?k._filterResult(this,a):this).forEach(d)},adopt:function(a,b){return k(a).place(this[0],b)._stash(this)},query:function(a){if(!a)return this;var b=new c;this.map(function(c){k(a,c).forEach(function(a){void 0!==a&&b.push(a)})});return b._stash(this)},filter:function(a){var b=arguments,c=this,d=0;if("string"==typeof a){c=
k._filterResult(this,b[0]);if(1==b.length)return c._stash(this);d=1}return this._wrap(g.filter(c,b[d],b[d+1]),this)},addContent:function(a,b){a=this._normalize(a,this[0]);for(var c=0,d;d=this[c];c++)a.length?this._place(a,d,b,0<c):r.empty(d);return this}});return c})},"dojo/_base/xhr":function(){define("./kernel ./sniff require ../io-query ../dom ../dom-form ./Deferred ./config ./json ./lang ./array ../on ../aspect ../request/watch ../request/xhr ../request/util".split(" "),function(a,k,g,p,e,r,m,
l,q,b,h,d,c,f,t,n){a._xhrObj=t._create;var v=a.config;a.objectToQuery=p.objectToQuery;a.queryToObject=p.queryToObject;a.fieldToObject=r.fieldToObject;a.formToObject=r.toObject;a.formToQuery=r.toQuery;a.formToJson=r.toJson;a._blockAsync=!1;var x=a._contentHandlers=a.contentHandlers={text:function(a){return a.responseText},json:function(a){return q.fromJson(a.responseText||null)},"json-comment-filtered":function(a){a=a.responseText;var b=a.indexOf("/*"),c=a.lastIndexOf("*/");if(-1==b||-1==c)throw Error("JSON was not comment filtered");
return q.fromJson(a.substring(b+2,c))},javascript:function(b){return a.eval(b.responseText)},xml:function(a){var b=a.responseXML;b&&k("dom-qsa2.1")&&!b.querySelectorAll&&k("dom-parser")&&(b=(new DOMParser).parseFromString(a.responseText,"application/xml"));if(k("ie")&&(!b||!b.documentElement)){var c=function(a){return"MSXML"+a+".DOMDocument"},c=["Microsoft.XMLDOM",c(6),c(4),c(3),c(2)];h.some(c,function(c){try{var d=new ActiveXObject(c);d.async=!1;d.loadXML(a.responseText);b=d}catch(e){return!1}return!0})}return b},
"json-comment-optional":function(a){return a.responseText&&/^[^{\[]*\/\*/.test(a.responseText)?x["json-comment-filtered"](a):x.json(a)}};a._ioSetArgs=function(c,d,f,h){var g={args:c,url:c.url},n=null;if(c.form){var n=e.byId(c.form),l=n.getAttributeNode("action");g.url=g.url||(l?l.value:null);n=r.toObject(n)}l=[{}];n&&l.push(n);c.content&&l.push(c.content);c.preventCache&&l.push({"dojo.preventCache":(new Date).valueOf()});g.query=p.objectToQuery(b.mixin.apply(null,l));g.handleAs=c.handleAs||"text";
var k=new m(function(a){a.canceled=!0;d&&d(a);var b=a.ioArgs.error;b||(b=Error("request cancelled"),b.dojoType="cancel",a.ioArgs.error=b);return b});k.addCallback(f);var q=c.load;q&&b.isFunction(q)&&k.addCallback(function(a){return q.call(c,a,g)});var t=c.error;t&&b.isFunction(t)&&k.addErrback(function(a){return t.call(c,a,g)});var u=c.handle;u&&b.isFunction(u)&&k.addBoth(function(a){return u.call(c,a,g)});k.addErrback(function(a){return h(a,k)});v.ioPublish&&a.publish&&!1!==g.args.ioPublish&&(k.addCallbacks(function(b){a.publish("/dojo/io/load",
[k,b]);return b},function(b){a.publish("/dojo/io/error",[k,b]);return b}),k.addBoth(function(b){a.publish("/dojo/io/done",[k,b]);return b}));k.ioArgs=g;return k};var u=function(a){a=x[a.ioArgs.handleAs](a.ioArgs.xhr);return void 0===a?null:a},w=function(a,b){return a},A=function(b){0>=y&&(y=0,v.ioPublish&&a.publish&&(!b||b&&!1!==b.ioArgs.args.ioPublish)&&a.publish("/dojo/io/stop"))},y=0;c.after(f,"_onAction",function(){--y});c.after(f,"_onInFlight",A);a._ioCancelAll=f.cancelAll;a._ioNotifyStart=function(b){v.ioPublish&&
a.publish&&!1!==b.ioArgs.args.ioPublish&&(y||a.publish("/dojo/io/start"),y+=1,a.publish("/dojo/io/send",[b]))};a._ioWatch=function(a,c,d,e){a.ioArgs.options=a.ioArgs.args;b.mixin(a,{response:a.ioArgs,isValid:function(b){return c(a)},isReady:function(b){return d(a)},handleResponse:function(b){return e(a)}});f(a);A(a)};a._ioAddQueryToUrl=function(a){a.query.length&&(a.url+=(-1==a.url.indexOf("?")?"?":"\x26")+a.query,a.query=null)};a.xhr=function(b,c,d){var e,f=a._ioSetArgs(c,function(a){e&&e.cancel()},
u,w),h=f.ioArgs;"postData"in c?h.query=c.postData:"putData"in c?h.query=c.putData:"rawBody"in c?h.query=c.rawBody:(2<arguments.length&&!d||-1==="POST|PUT".indexOf(b.toUpperCase()))&&a._ioAddQueryToUrl(h);var g={method:b,handleAs:"text",timeout:c.timeout,withCredentials:c.withCredentials,ioArgs:h};"undefined"!==typeof c.headers&&(g.headers=c.headers);"undefined"!==typeof c.contentType&&(g.headers||(g.headers={}),g.headers["Content-Type"]=c.contentType);"undefined"!==typeof h.query&&(g.data=h.query);
"undefined"!==typeof c.sync&&(g.sync=c.sync);a._ioNotifyStart(f);try{e=t(h.url,g,!0)}catch(n){return f.cancel(),f}f.ioArgs.xhr=e.response.xhr;e.then(function(){f.resolve(f)}).otherwise(function(a){h.error=a;a.response&&(a.status=a.response.status,a.responseText=a.response.text,a.xhr=a.response.xhr);f.reject(a)});return f};a.xhrGet=function(b){return a.xhr("GET",b)};a.rawXhrPost=a.xhrPost=function(b){return a.xhr("POST",b,!0)};a.rawXhrPut=a.xhrPut=function(b){return a.xhr("PUT",b,!0)};a.xhrDelete=
function(b){return a.xhr("DELETE",b)};a._isDocumentOk=function(a){return n.checkStatus(a.status)};a._getText=function(b){var c;a.xhrGet({url:b,sync:!0,load:function(a){c=a}});return c};b.mixin(a.xhr,{_xhrObj:a._xhrObj,fieldToObject:r.fieldToObject,formToObject:r.toObject,objectToQuery:p.objectToQuery,formToQuery:r.toQuery,formToJson:r.toJson,queryToObject:p.queryToObject,contentHandlers:x,_ioSetArgs:a._ioSetArgs,_ioCancelAll:a._ioCancelAll,_ioNotifyStart:a._ioNotifyStart,_ioWatch:a._ioWatch,_ioAddQueryToUrl:a._ioAddQueryToUrl,
_isDocumentOk:a._isDocumentOk,_getText:a._getText,get:a.xhrGet,post:a.xhrPost,put:a.xhrPut,del:a.xhrDelete});return a.xhr})},"dojo/io-query":function(){define(["./_base/lang"],function(a){var k={};return{objectToQuery:function(g){var p=encodeURIComponent,e=[],r;for(r in g){var m=g[r];if(m!=k[r]){var l=p(r)+"\x3d";if(a.isArray(m))for(var q=0,b=m.length;q<b;++q)e.push(l+p(m[q]));else e.push(l+p(m))}}return e.join("\x26")},queryToObject:function(g){var k=decodeURIComponent;g=g.split("\x26");for(var e=
{},r,m,l=0,q=g.length;l<q;++l)if(m=g[l],m.length){var b=m.indexOf("\x3d");0>b?(r=k(m),m=""):(r=k(m.slice(0,b)),m=k(m.slice(b+1)));"string"==typeof e[r]&&(e[r]=[e[r]]);a.isArray(e[r])?e[r].push(m):e[r]=m}return e}}})},"dojo/dom-form":function(){define(["./_base/lang","./dom","./io-query","./json"],function(a,k,g,p){var e={fieldToObject:function(a){var e=null;if(a=k.byId(a)){var g=a.name,p=(a.type||"").toLowerCase();if(g&&p&&!a.disabled)if("radio"==p||"checkbox"==p)a.checked&&(e=a.value);else if(a.multiple)for(e=
[],a=[a.firstChild];a.length;)for(g=a.pop();g;g=g.nextSibling)if(1==g.nodeType&&"option"==g.tagName.toLowerCase())g.selected&&e.push(g.value);else{g.nextSibling&&a.push(g.nextSibling);g.firstChild&&a.push(g.firstChild);break}else e=a.value}return e},toObject:function(g){var m={};g=k.byId(g).elements;for(var l=0,p=g.length;l<p;++l){var b=g[l],h=b.name,d=(b.type||"").toLowerCase();if(h&&d&&0>"file|submit|image|reset|button".indexOf(d)&&!b.disabled){var c=m,f=h,b=e.fieldToObject(b);if(null!==b){var t=
c[f];"string"==typeof t?c[f]=[t,b]:a.isArray(t)?t.push(b):c[f]=b}"image"==d&&(m[h+".x"]=m[h+".y"]=m[h].x=m[h].y=0)}}return m},toQuery:function(a){return g.objectToQuery(e.toObject(a))},toJson:function(a,g){return p.stringify(e.toObject(a),null,g?4:0)}};return e})},"dojo/request/watch":function(){define("./util ../errors/RequestTimeoutError ../errors/CancelError ../_base/array ../_base/window ../has!host-browser?dom-addeventlistener?:../on:".split(" "),function(a,k,g,p,e,r){function m(){for(var a=
+new Date,d=0,c;d<b.length&&(c=b[d]);d++){var e=c.response,g=e.options;c.isCanceled&&c.isCanceled()||c.isValid&&!c.isValid(e)?(b.splice(d--,1),l._onAction&&l._onAction()):c.isReady&&c.isReady(e)?(b.splice(d--,1),c.handleResponse(e),l._onAction&&l._onAction()):c.startTime&&c.startTime+(g.timeout||0)<a&&(b.splice(d--,1),c.cancel(new k("Timeout exceeded",e)),l._onAction&&l._onAction())}l._onInFlight&&l._onInFlight(c);b.length||(clearInterval(q),q=null)}function l(a){a.response.options.timeout&&(a.startTime=
+new Date);a.isFulfilled()||(b.push(a),q||(q=setInterval(m,50)),a.response.options.sync&&m())}var q=null,b=[];l.cancelAll=function(){try{p.forEach(b,function(a){try{a.cancel(new g("All requests canceled."))}catch(b){}})}catch(a){}};e&&r&&e.doc.attachEvent&&r(e.global,"unload",function(){l.cancelAll()});return l})},"dojo/request/util":function(){define("exports ../errors/RequestError ../errors/CancelError ../Deferred ../io-query ../_base/array ../_base/lang ../promise/Promise".split(" "),function(a,
k,g,p,e,r,m,l){function q(a){return h(a)}function b(a){return a.data||a.text}a.deepCopy=function(b,c){for(var e in c){var g=b[e],h=c[e];g!==h&&(g&&"object"===typeof g&&h&&"object"===typeof h?a.deepCopy(g,h):b[e]=h)}return b};a.deepCreate=function(b,c){c=c||{};var e=m.delegate(b),g,h;for(g in b)(h=b[g])&&"object"===typeof h&&(e[g]=a.deepCreate(h,c[g]));return a.deepCopy(e,c)};var h=Object.freeze||function(a){return a};a.deferred=function(d,c,e,r,n,v){var x=new p(function(a){c&&c(x,d);return a&&(a instanceof
k||a instanceof g)?a:new g("Request canceled",d)});x.response=d;x.isValid=e;x.isReady=r;x.handleResponse=n;e=x.then(q).otherwise(function(a){a.response=d;throw a;});a.notify&&e.then(m.hitch(a.notify,"emit","load"),m.hitch(a.notify,"emit","error"));r=e.then(b);n=new l;for(var u in r)r.hasOwnProperty(u)&&(n[u]=r[u]);n.response=e;h(n);v&&x.then(function(a){v.call(x,a)},function(a){v.call(x,d,a)});x.promise=n;x.then=n.then;return x};a.addCommonMethods=function(a,b){r.forEach(b||["GET","POST","PUT","DELETE"],
function(b){a[("DELETE"===b?"DEL":b).toLowerCase()]=function(c,e){e=m.delegate(e||{});e.method=b;return a(c,e)}})};a.parseArgs=function(a,b,f){var g=b.data,h=b.query;g&&!f&&"object"===typeof g&&(b.data=e.objectToQuery(g));h?("object"===typeof h&&(h=e.objectToQuery(h)),b.preventCache&&(h+=(h?"\x26":"")+"request.preventCache\x3d"+ +new Date)):b.preventCache&&(h="request.preventCache\x3d"+ +new Date);a&&h&&(a+=(~a.indexOf("?")?"\x26":"?")+h);return{url:a,options:b,getHeader:function(a){return null}}};
a.checkStatus=function(a){a=a||0;return 200<=a&&300>a||304===a||1223===a||!a}})},"dojo/errors/RequestError":function(){define(["./create"],function(a){return a("RequestError",function(a,g){this.response=g})})},"dojo/errors/RequestTimeoutError":function(){define(["./create","./RequestError"],function(a,k){return a("RequestTimeoutError",null,k,{dojoType:"timeout"})})},"dojo/request/xhr":function(){define(["../errors/RequestError","./watch","./handlers","./util","../has"],function(a,k,g,p,e){function r(b,
c){var d=b.xhr;b.status=b.xhr.status;try{b.text=d.responseText}catch(e){}"xml"===b.options.handleAs&&(b.data=d.responseXML);if(!c)try{g(b)}catch(e){c=e}c?this.reject(c):p.checkStatus(d.status)?this.resolve(b):(c=new a("Unable to load "+b.url+" status: "+d.status,b),this.reject(c))}function m(a){return this.xhr.getResponseHeader(a)}function l(g,v,x){var u=e("native-formdata")&&v&&v.data&&v.data instanceof FormData,w=p.parseArgs(g,p.deepCreate(t,v),u);g=w.url;v=w.options;var A,y=p.deferred(w,c,b,h,
r,function(){A&&A()}),z=w.xhr=l._create();if(!z)return y.cancel(new a("XHR was not created")),x?y:y.promise;w.getHeader=m;d&&(A=d(z,y,w));var M=v.data,U=!v.sync,P=v.method;try{z.open(P,g,U,v.user||f,v.password||f);v.withCredentials&&(z.withCredentials=v.withCredentials);e("native-response-type")&&v.handleAs in q&&(z.responseType=q[v.handleAs]);var J=v.headers;g=u?!1:"application/x-www-form-urlencoded";if(J)for(var I in J)"content-type"===I.toLowerCase()?g=J[I]:J[I]&&z.setRequestHeader(I,J[I]);g&&
!1!==g&&z.setRequestHeader("Content-Type",g);J&&"X-Requested-With"in J||z.setRequestHeader("X-Requested-With","XMLHttpRequest");p.notify&&p.notify.emit("send",w,y.promise.cancel);z.send(M)}catch(Q){y.reject(Q)}k(y);z=null;return x?y:y.promise}e.add("native-xhr",function(){return"undefined"!==typeof XMLHttpRequest});e.add("dojo-force-activex-xhr",function(){return e("activex")&&!document.addEventListener&&"file:"===window.location.protocol});e.add("native-xhr2",function(){if(e("native-xhr")){var a=
new XMLHttpRequest;return"undefined"!==typeof a.addEventListener&&("undefined"===typeof opera||"undefined"!==typeof a.upload)}});e.add("native-formdata",function(){return"undefined"!==typeof FormData});e.add("native-response-type",function(){return e("native-xhr")&&"undefined"!==typeof(new XMLHttpRequest).responseType});e.add("native-xhr2-blob",function(){if(e("native-response-type")){var a=new XMLHttpRequest;a.open("GET","/",!0);a.responseType="blob";var b=a.responseType;a.abort();return"blob"===
b}});var q={blob:e("native-xhr2-blob")?"blob":"arraybuffer",document:"document",arraybuffer:"arraybuffer"},b,h,d,c;e("native-xhr2")?(b=function(a){return!this.isFulfilled()},c=function(a,b){b.xhr.abort()},d=function(b,c,d){function e(a){c.handleResponse(d)}function f(b){b=new a("Unable to load "+d.url+" status: "+b.target.status,d);c.handleResponse(d,b)}function g(a){a.lengthComputable?(d.loaded=a.loaded,d.total=a.total,c.progress(d)):3===d.xhr.readyState&&(d.loaded=a.position,c.progress(d))}b.addEventListener("load",
e,!1);b.addEventListener("error",f,!1);b.addEventListener("progress",g,!1);return function(){b.removeEventListener("load",e,!1);b.removeEventListener("error",f,!1);b.removeEventListener("progress",g,!1);b=null}}):(b=function(a){return a.xhr.readyState},h=function(a){return 4===a.xhr.readyState},c=function(a,b){var c=b.xhr,d=typeof c.abort;"function"!==d&&"object"!==d&&"unknown"!==d||c.abort()});var f,t={data:null,query:null,sync:!1,method:"GET"};l._create=function(){throw Error("XMLHTTP not available");
};if(e("native-xhr")&&!e("dojo-force-activex-xhr"))l._create=function(){return new XMLHttpRequest};else if(e("activex"))try{new ActiveXObject("Msxml2.XMLHTTP"),l._create=function(){return new ActiveXObject("Msxml2.XMLHTTP")}}catch(n){try{new ActiveXObject("Microsoft.XMLHTTP"),l._create=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}catch(v){}}p.addCommonMethods(l);return l})},"dojo/request/handlers":function(){define(["../json","../_base/kernel","../_base/array","../has","../selector/_loader"],
function(a,k,g,p){function e(a){var d=b[a.options.handleAs];a.data=d?d(a):a.data||a.text;return a}p.add("activex","undefined"!==typeof ActiveXObject);p.add("dom-parser",function(a){return"DOMParser"in a});var r;if(p("activex")){var m=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML.DOMDocument"],l;r=function(a){function b(a){try{var d=new ActiveXObject(a);d.async=!1;d.loadXML(e);c=d;l=a}catch(g){return!1}return!0}var c=a.data,e=a.text;c&&p("dom-qsa2.1")&&!c.querySelectorAll&&
p("dom-parser")&&(c=(new DOMParser).parseFromString(e,"application/xml"));c&&c.documentElement||l&&b(l)||g.some(m,b);return c}}var q=function(a){return p("native-xhr2-blob")||"blob"!==a.options.handleAs||"undefined"===typeof Blob?a.xhr.response:new Blob([a.xhr.response],{type:a.xhr.getResponseHeader("Content-Type")})},b={javascript:function(a){return k.eval(a.text||"")},json:function(b){return a.parse(b.text||null)},xml:r,blob:q,arraybuffer:q,document:q};e.register=function(a,d){b[a]=d};return e})},
"dojo/_base/fx":function(){define("./kernel ./config ./lang ../Evented ./Color ../aspect ../sniff ../dom ../dom-style".split(" "),function(a,k,g,p,e,r,m,l,q){var b=g.mixin,h={},d=h._Line=function(a,b){this.start=a;this.end=b};d.prototype.getValue=function(a){return(this.end-this.start)*a+this.start};var c=h.Animation=function(a){b(this,a);g.isArray(this.curve)&&(this.curve=new d(this.curve[0],this.curve[1]))};c.prototype=new p;g.extend(c,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,
_getStep:function(){var a=this._percent,b=this.easing;return b?b(a):a},_fire:function(a,b){var c=b||[];if(this[a])if(k.debugAtAllCosts)this[a].apply(this,c);else try{this[a].apply(this,c)}catch(d){}return this},play:function(a,b){this._delayTimer&&this._clearTimer();if(b)this._stopTimer(),this._active=this._paused=!1,this._percent=0;else if(this._active&&!this._paused)return this;this._fire("beforeBegin",[this.node]);var c=a||this.delay,d=g.hitch(this,"_play",b);if(0<c)return this._delayTimer=setTimeout(d,
c),this;d();return this},_play:function(a){this._delayTimer&&this._clearTimer();this._startTime=(new Date).valueOf();this._paused&&(this._startTime-=this.duration*this._percent);this._active=!0;this._paused=!1;a=this.curve.getValue(this._getStep());this._percent||(this._startRepeatCount||(this._startRepeatCount=this.repeat),this._fire("onBegin",[a]));this._fire("onPlay",[a]);this._cycle();return this},pause:function(){this._delayTimer&&this._clearTimer();this._stopTimer();if(!this._active)return this;
this._paused=!0;this._fire("onPause",[this.curve.getValue(this._getStep())]);return this},gotoPercent:function(a,b){this._stopTimer();this._active=this._paused=!0;this._percent=a;b&&this.play();return this},stop:function(a){this._delayTimer&&this._clearTimer();if(!this._timer)return this;this._stopTimer();a&&(this._percent=1);this._fire("onStop",[this.curve.getValue(this._getStep())]);this._active=this._paused=!1;return this},destroy:function(){this.stop()},status:function(){return this._active?this._paused?
"paused":"playing":"stopped"},_cycle:function(){if(this._active){var a=(new Date).valueOf(),a=0===this.duration?1:(a-this._startTime)/this.duration;1<=a&&(a=1);this._percent=a;this.easing&&(a=this.easing(a));this._fire("onAnimate",[this.curve.getValue(a)]);1>this._percent?this._startTimer():(this._active=!1,0<this.repeat?(this.repeat--,this.play(null,!0)):-1==this.repeat?this.play(null,!0):this._startRepeatCount&&(this.repeat=this._startRepeatCount,this._startRepeatCount=0),this._percent=0,this._fire("onEnd",
[this.node]),!this.repeat&&this._stopTimer())}return this},_clearTimer:function(){clearTimeout(this._delayTimer);delete this._delayTimer}});var f=0,t=null,n={run:function(){}};g.extend(c,{_startTimer:function(){this._timer||(this._timer=r.after(n,"run",g.hitch(this,"_cycle"),!0),f++);t||(t=setInterval(g.hitch(n,"run"),this.rate))},_stopTimer:function(){this._timer&&(this._timer.remove(),this._timer=null,f--);0>=f&&(clearInterval(t),t=null,f=0)}});var v=m("ie")?function(a){var b=a.style;b.width.length||
"auto"!=q.get(a,"width")||(b.width="auto")}:function(){};h._fade=function(a){a.node=l.byId(a.node);var c=b({properties:{}},a);a=c.properties.opacity={};a.start="start"in c?c.start:function(){return+q.get(c.node,"opacity")||0};a.end=c.end;a=h.animateProperty(c);r.after(a,"beforeBegin",g.partial(v,c.node),!0);return a};h.fadeIn=function(a){return h._fade(b({end:1},a))};h.fadeOut=function(a){return h._fade(b({end:0},a))};h._defaultEasing=function(a){return.5+Math.sin((a+1.5)*Math.PI)/2};var x=function(a){this._properties=
a;for(var b in a){var c=a[b];c.start instanceof e&&(c.tempColor=new e)}};x.prototype.getValue=function(a){var b={},c;for(c in this._properties){var d=this._properties[c],f=d.start;f instanceof e?b[c]=e.blendColors(f,d.end,a,d.tempColor).toCss():g.isArray(f)||(b[c]=(d.end-f)*a+f+("opacity"!=c?d.units||"px":0))}return b};h.animateProperty=function(d){var f=d.node=l.byId(d.node);d.easing||(d.easing=a._defaultEasing);d=new c(d);r.after(d,"beforeBegin",g.hitch(d,function(){var a={},c;for(c in this.properties){var d=
function(a,b){var c={height:a.offsetHeight,width:a.offsetWidth}[b];if(void 0!==c)return c;c=q.get(a,b);return"opacity"==b?+c:k?c:parseFloat(c)};if("width"==c||"height"==c)this.node.display="block";var h=this.properties[c];g.isFunction(h)&&(h=h(f));h=a[c]=b({},g.isObject(h)?h:{end:h});g.isFunction(h.start)&&(h.start=h.start(f));g.isFunction(h.end)&&(h.end=h.end(f));var k=0<=c.toLowerCase().indexOf("color");"end"in h?"start"in h||(h.start=d(f,c)):h.end=d(f,c);k?(h.start=new e(h.start),h.end=new e(h.end)):
h.start="opacity"==c?+h.start:parseFloat(h.start)}this.curve=new x(a)}),!0);r.after(d,"onAnimate",g.hitch(q,"set",d.node),!0);return d};h.anim=function(a,b,d,e,f,g){return h.animateProperty({node:a,duration:d||c.prototype.duration,properties:b,easing:e,onEnd:f}).play(g||0)};b(a,h);a._Animation=c;return h})},"dojo/_base/loader":function(){define("./kernel ../has require module ../json ./lang ./array".split(" "),function(a,k,g,p,e,r,m){var l=function(a){return a.replace(/\./g,"/")},q=/\/\/>>built/,
b=[],h=[],d=function(a,d,e){b.push(e);m.forEach(a.split(","),function(a){a=Q(a,d.module);h.push(a);B(a)});c()},c=function(){var a,c;for(c in J)if(a=J[c],void 0===a.noReqPluginCheck&&(a.noReqPluginCheck=/loadInit\!/.test(c)||/require\!/.test(c)?1:0),!a.executed&&!a.noReqPluginCheck&&a.injected==A)return;W(function(){var a=b;b=[];m.forEach(a,function(a){a(1)})})},f=function(b,c,d){var e=/\(|\)/g,f=1;for(e.lastIndex=c;(c=e.exec(b))&&(")"==c[0]?--f:f+=1,0!=f););if(0!=f)throw"unmatched paren around character "+
e.lastIndex+" in: "+b;return[a.trim(b.substring(d,e.lastIndex))+";\n",e.lastIndex]},t=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,n=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,v=/(^|\s)(require|define)\s*\(/m,x=function(a,b){var c,d,e,g=[],h=[];c=[];for(b=b||a.replace(t,function(a){n.lastIndex=v.lastIndex=0;return n.test(a)||v.test(a)?"":a});c=n.exec(b);)d=n.lastIndex,e=d-c[0].length,d=f(b,d,e),"loadInit"==c[2]?g.push(d[0]):h.push(d[0]),n.lastIndex=
d[1];c=g.concat(h);return c.length||!v.test(b)?[a.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 \x26\x26 dojo.loadInit("),c.join(""),c]:0},u=g.initSyncLoader(d,c,function(a,b){var c,d,f=[],g=[];if(q.test(b)||!(c=x(b)))return 0;d=a.mid+"-*loadInit";for(var h in Q("dojo",a).result.scopeMap)f.push(h),g.push('"'+h+'"');return"// xdomain rewrite of "+a.mid+"\ndefine('"+d+"',{\n\tnames:"+e.stringify(f)+",\n\tdef:function("+f.join(",")+"){"+c[1]+"}});\n\ndefine("+e.stringify(f.concat(["dojo/loadInit!"+d]))+
", function("+f.join(",")+"){\n"+c[0]+"});"}),w=u.sync,A=u.requested,y=u.arrived,z=u.nonmodule,M=u.executing,U=u.executed,P=u.syncExecStack,J=u.modules,I=u.execQ,Q=u.getModule,B=u.injectModule,H=u.setArrived,N=u.signal,E=u.finishExec,D=u.execModule,K=u.getLegacyMode,W=u.guardCheckComplete,d=u.dojoRequirePlugin;a.provide=function(a){var b=P[0],c=r.mixin(Q(l(a),g.module),{executed:M,result:r.getObject(a,!0)});H(c);b&&(b.provides||(b.provides=[])).push(function(){c.result=r.getObject(a);delete c.provides;
c.executed!==U&&E(c)});return c.result};k.add("config-publishRequireResult",1,0,0);a.require=function(a,b){var c=function(a,b){var c=Q(l(a),g.module);if(P.length&&P[0].finish)P[0].finish.push(a);else{if(c.executed)return c.result;b&&(c.result=z);var d=K();B(c);d=K();c.executed!==U&&c.injected===y&&u.guardCheckComplete(function(){D(c)});if(c.executed)return c.result;d==w?c.cjs?I.unshift(c):P.length&&(P[0].finish=[a]):I.push(c)}}(a,b);k("config-publishRequireResult")&&!r.exists(a)&&void 0!==c&&r.setObject(a,
c);return c};a.loadInit=function(a){a()};a.registerModulePath=function(a,b){var c={};c[a.replace(/\./g,"/")]=b;g({paths:c})};a.platformRequire=function(b){b=(b.common||[]).concat(b[a._name]||b["default"]||[]);for(var c;b.length;)r.isArray(c=b.shift())?a.require.apply(a,c):a.require(c)};a.requireIf=a.requireAfterIf=function(b,c,d){b&&a.require(c,d)};a.requireLocalization=function(a,b,c){g(["../i18n"],function(d){d.getLocalization(a,b,c)})};return{extractLegacyApiApplications:x,require:d,loadInit:function(b,
c,e){c([b],function(b){c(b.names,function(){for(var f="",g=[],h=0;h<arguments.length;h++)f+="var "+b.names[h]+"\x3d arguments["+h+"]; ",g.push(arguments[h]);eval(f);var k=c.module,m=[],n,f={provide:function(a){a=l(a);a=Q(a,k);a!==k&&H(a)},require:function(a,b){a=l(a);b&&(Q(a,k).result=z);m.push(a)},requireLocalization:function(b,c,d){n||(n=["dojo/i18n"]);d=(d||a.locale).toLowerCase();b=l(b)+"/nls/"+(/root/i.test(d)?"":d+"/")+l(c);Q(b,k).isXd&&n.push("dojo/i18n!"+b)},loadInit:function(a){a()}},h={},
q;try{for(q in f)h[q]=a[q],a[q]=f[q];b.def.apply(null,g)}catch(r){N("error",[{src:p.id,id:"failedDojoLoadInit"},r])}finally{for(q in f)a[q]=h[q]}n&&(m=m.concat(n));m.length?d(m.join(","),c,e):e()})})}}})}}});(function(){var a=this.require;a({cache:{}});!a.async&&a(["dojo"]);a.boot&&a.apply(null,a.boot)})();
