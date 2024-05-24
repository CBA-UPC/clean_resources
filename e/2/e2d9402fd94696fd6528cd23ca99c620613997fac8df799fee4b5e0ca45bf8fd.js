<html><head><script>var config ={"env":"production","version":"ver-92198e7","idsURL":"https://units.knotch.it/render.json","EU":true,"reporterURL":"https:/;return o}return r})()({1:[function(require,module,exports){
'use strict';

/* eslint-disable */
n Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iteretolsrray.from(arr); } }

var h = {
  isValidUUID: function isValidUUID(value) {
    var uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;
    return value && typeof value === 'string' && value.length > 0 && uuidV4Regex.test(value);
  },
  isValidObjectID: function isValidObjectID(value) {
    return value && typeof value === 'string' && value.length > 0 && value.match(/^[0-9a-fA-F]{24}$/);
  },
  serialize: function serialize(obj, prefix) {
    var str = [],
        p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p,
            v = obj[p];
        str.push(v !== null && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === "object" ? this.serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  },
  isDebug: function isDebug() {
    var queryParams = Object.keys(this.getQueryParams());
    var debugIndex = queryParams.indexOf('debug');
    return debugIndex !== -1;
  },
  log: function log() {
    var args = ['%cGAFrame', 'color: white; background: #fb1359; padding: 4px'].concat(_toConsumableArray(Array.prototype.slice.call(arguments)));
    console.log.apply(console, args);top === window;
  },

  getQueryParams: function getQueryParams(str) {
    return (str || document.location.search).replace(/(^\?)/,= n[1], this;
    }.bind({}))[0];
  },
  get: function get(url, data, success, failure) {
    var r;
    if (window.XMLHttpRequest) {
      r = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari
    } else {
      r = new ActiveXObject('Microsoft.XMLHTTP'); // code for IE6, IE5
    }
    r.onreadystatechange = function () {
      if (r.readyState === XMLHttpRequest.DONE) {
        var res = r.responseText && r.responseText.length > 0 && r.responseText.indexOf('<') === -1 ? JSON.parse(r.responseText) : '';
        if (r.status === 200) {
          success(res);
        } else if (r.status >= 400) {
          failure(r.status, r.statusText);
        } else if (r.stats === 0) {
          failure(r.status, r.statusText);
        }
      }
    };
    r.open('GET', url, true);
    r.setRequestHeader('Accept', 'application/json');
    r.send(JSON.stringify(data));
    return r;
  },
  post: function post(url, data, success, failure) {
    var r;
    if (window.XMLHttpRequest) {
      r = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari
    } else {
      r = new ActiveXObject('Microsoft.XMLHTTP'); // code for IE6, IE5
    }
    r.onreadystatechange = function () {
      if (r.readyState === XMLHttpRequest.DONE) {
        var res = r.responseText && r.responseText.length > 0 && r.responseText.indexOf('<') === -1 ? JSON.parse(r.responseText) : '';
        if (r.status === 200) {
          success(res);
        } else if (r.status >= 400) {
          failure(r.status, r.statusText);
        } else if (r.stats === 0) {
          failure(r.status, r.statusText);
        }
      }
    };
    r.open('POST', url, true);
    r.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    r.send(JSON.stringify(data));
    return r;
  },
  ready: function ready(callback) {
    var ready = false,
        detach,
        completed;
    detach = function detach() {
      if (document.addEventListener) {
        document.removeEventListener('DOMContentLoaded', completed);
        window.removeEventListener('load', completed);
      } else {
        document.detachEvent('onreadystatechange', completed);
        window.detachEvent('onload', completed);
      }
    };
    completed = function completed() {
      if (!ready && (document.addEventListener || event.type === 'load' || document.readyState === 'complete')) {
        ready = true;
        detach();
        callback();
      }
    };
    if (document.readyState === 'complete') {
      callback();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', completed);
      window.addEventListener('load', completed);
    } else {
      document.attachEvent('onreadystatechange', completed);
      window.attachEvent('onload', completed);
      var top = false;
      try {
        top = window.frameElement == null && document.documentElement;
      } catch (e) {}
      if (top && top.doScroll) {
        (function scrollCheck() {
          if (ready) {
            return;
          }
          try {
            top.doScroll('left');
          } catch (e) {
            return setTimeout(scrollCheck, 50);
          }
          ready = true;
          detach();
          callback();
        })();
      }
    }
  },
  extend: function extend(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }
      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
    }
    return out;
  },
  listen: function listen(event, node, callback) {
    if (node.addEventListener) {
      node.addEventListener(event, callback, false);
    } else {
      node.attachEvent(event, callback);
    }
  }
};

var MAX_BREADCRUMB_SIZE = 20;

/**
 * @desc Custom lightweight Bugsnag integration
 */
function Bugsnag(config) {
  this.url = 'https://notify.bugsnag.com/js?';
  this.config = config;
  this.startTime = new Date().getTime();
  this.debug = h.isDebug();

  // allowed breadcrumbs types:
  // ["manual", "error", "log", "navigation", "process", "request", "state", "user"]
  this.breadcrumbs = [{
    name: 'Bugsnag Loaded',
    timestamp: this.startTime,
    type: 'navigation'
  }];
}

Bugsnag.prototype = {
  /**
   * @desc Adds a breadcrumb to the array. If the breadcrumb array
   * is bigger than the max size, remove the oldest element.
   */
  pushBreadCrumb: function pushBreadCrumb(breadCrumb) {
    this.breadcrumbs.push(breadCrumb);
    if (this.breadcrumbs.length > MAX_BREADCRUMB_SIZE) this.breadcrumbs.shift();

    if (this.debug) {
      h.log(breadCrumb);
    }
  },

  /**
   * @desc sends a pixel to the bugsnag URL with our api key
   */
  reportError: function reportError(error, options) {
    if (this.env === 'development' || this.debug) {
      return h.log(error);
    }

    var data = h.serialize(this.payloadData(error, options));
    var img = new Image();
    img.src = this.url + data;
  },

  /**
   * @desc sets up the payload to send to Bugsnag
   */
  payloadData: function payloadData(error, options) {
    if (!error) {
      return;
    }

    if (!options) {
      options = {};
    }

    return {
      apiKey: '581f50d456b1fa142bae175bdea5d2d8',
      breadcrumbs: this.breadcrumbs,
      context: window.location.href, // Replace page.sourceurl
      ct: 'img',
      cb: new Date().getTime(),
      language: 'en-US',
      message: error.message,
      metaData: {
        device: {
          time: new Date().getTime(0)
        }
      },
      name: options.name || error.message,
      notifierVersion: '3.0.7',
      payloadVersion: '3',
      releaseStage: window.config.version,
      severity: options.severity || 'error',
      stacktrace: error.stack,
      url: window.location.href,
      userAgent: navigator.userAgent
    };
  }
};

/* eslint-disable */

var Cookies = {
  set: function set(name, value, seconds_to_exp, options) {
    var exp;

    if (!name) {
      return null;
    }
    if (!options) {
      options = {};
    }

    if (seconds_to_exp) {
      exp = new Date().getTime() + seconds_to_exp * 1000;
    }

    return window.document.cookie = [encodeURIComponent(name), '=', encodeURIComponent(String(value)), exp ? '; expires=' + new Date(exp).toUTCString() : '', '; path=' + (options.path ? options.path : '/'), options.domain ? '; domain=' + options.domain : '', window.location && window.location.protocol === 'https:' ? '; secure' : ''].join('');
  },
  get: function get(name, result) {
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(window.document.cookie)) ? decodeURIComponent(result[1]) : null;
  },
  delete: function _delete(name, options) {
    Cookies.set(name, null, -1, options);
  }
};

// polyfills
/* eslint-disable */
(function () {
  // developer.mozilla.org polyfill for bind
  if (!Function.prototype.bind) {
    Functieturn fBound;
    };
  }
  window0 / 60    return evt;
  }

  if (typeof window.CustomEvent !== 'function') {
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
})();

/* eslint-disable quote-props */
var ACCOUNT_IDS_BLACKLIST = ['316efaff-f5f5-403b-8b33-d3d114c0d6c9', 'abcd1234abcd1234abcd1234', '64cb237d-2f9c-4bae-b93c-2c40cad36183'];

/**
 * A GAFrame object
 * @desc First party iframe on the client's page. We pass the survey id in the query,
 * log a render id with it and the cookie/visitor id, then pass both to the tracker through postMessage.
 */

var GAFrame = function () {
  function GAFrame() {
    _classCallCheck(this, GAFrame);

    h.listen('message', window, this.handleEvents.bind(this));
    this.config = window.config;
    this.query = h.getQueryParams(window.location.search);
    this.surveyId = this.query.id;
    this.accountId = this.query.account_id;
    this.productType = this.query.product_type;
    this.canonical = decodeURIComponent(this.query.canonical);
    this.bugsnag = new Bugsnag(this.config);
    this.bugsnag.pushBreadCrumb({ name: 'initializing ga frame' });

    this.getIds();
  }

  /**
   * @desc Disable demographics for
   */


  _createClass(GAFrame, [{
    key: 'demographicsEnabled',
    value: function demographicsEnabled() {
      var GDPR = this.config.EU;
      var enabledAccount = this.accountId && ACCOUNT_IDS_BLACKLIST.indexOf(this.accountId) === -1;
      return !GDPR && enabledAccount && !this.isOptedOut();
    }

    /**
     * @desc Initialize the Google Analytics dimensions
     */

  }, {
    key: 'setupGA',
    value: function setupGA(_ref) {
      var visitorId = _ref.visitorId,
          surveyId = _ref.surveyId;

      if (!this.GA) return;
      var customDimensions = {
        'dimension2': visitorId,
        'dimension3': surveyId
      };
      this.GA('config', 'G-G591CGQ604', customDimensions);
    }

    /**
     * @desc Get visitor id, render id & kmvid cookie from lambda endpoint
     */

  }, {
    key: 'getIds',
    value: function getIds() {
      var _this = this;

      var optoutQuery = typeof this.query.optout !== 'undefined' ? '?optout=' + this.query.optout : '';
      h.get('' + this.config.idsURL(ing ids'));
      });
    }

    /**
     * @desc Handle messages from the Tracker
     */

  }, {
    key: 'handleEvents',
    value: function handleEvents(event) {
      var data = event.data;
      if (!data) return;

      switch (data.eventType) {
        case 'response':
          this.postResponse(data);
          break;
        case 'RBT':
          this.postRBT(data);
          break;
        default:
          break;
      }
    }

    /**
     * @desc Check if renderId & visitorId are valid UUIDs. If the user is opted out,
     * send that information to the reporter frame.
     */

  }, {
    key: 'sendBackIDs',
    value: function sendBackIDs(_ref2) {
      var knotchRenderId = _ref2.knotchRenderId,
          knotchVisitorId = _ref2.knotchVisitorId;

      var validRenderId = h.isValidUUID(knotchRenderId);
      var validVisitorId = h.isValidUUID(knotchVisitorId) || h.isValidObjectID(knotchVisitorId);

      if (!validRenderId || knotchVisitorId && !validVisitorId) {
        return this.bugsnag.reportError(new Error('Invalid id payload'), { knotchRenderId: knotchRenderId, knotchVisitorId: knotchVisitorId });
      }

      // only update Google Analytics with visitor id if demographics are enabled
      if (this.demographicsEnabled()) {
        this.setupGA({ visitorId: knotchVisitorId, surveyId: this.surveyId });
      }

      var data = { render_id: knotchRenderId, survey_id: this.surveyId };

      if (!this.isOptedOut()) {
        data.visitor_id = knotchVisitorId;
      }

      var payload = void 0;
      var reporter = void 0;

      switch (this.productType) {
        case 'measurement':
          reporter = window.parent.frames.measurementKnotchReporter;
          payload = { eventType: 'updateUnitData', data: data, surveyId: this.surveyId, productType: this.productType };
          break;
        case 'infinite':
          reporter = window.parent.frames.infiniteKnotchReporter;
          payload = { eventType: 'updateInfinite', data: data, productType: this.productType };
          break;
        default:
          this.bugsnag.reportError(new Error('Missing proper product type'), {});
          break;
      }

      if (h.isTopFrame()) {
        return this.bugsnag.pushBreadCrumb({
          name: 'gaframe opened in browser',
          metadata: {
            referrer: document.referrer,
            reporterFound: !!reporter
          }
        });
      }

      this.bugsnag.pushBreadCrumb({
        type: 'process',
        name: 'Send cookie to Tracker',
        metaData: payload,
        timestamp: new Date().getTime()
      });

      // Sending data directly to the reporter frame
      if (reporter) {
        var targetOriginReporter = '*';
        var targetOriginTop = '*';
        if (this.config.reporterURL) {
          targetOriginReporter = this.config.reporterURL;
        }
        if (document && document.referrer) {
          targetOriginTop = document.referrer; // Should match the page that loaded JSTag
        }
        reporter.postMessage(payload, targetOriginReporter);
        window.parent.frames.postMessage(payload, targetOriginTop);
      } else {
        return this.bugsnag.reportError(new Error('Missing Reporter Frame'), {});
      }
    }

    /**
     * @desc check for the knotch optout cookie
     */

  }, {
    key: 'isOptedOut',
    value: function isOptedOut() {
      if (this.query.optout === 'true' || !!Cookies.get('optout')) {
        return 1;
      }

      return 0;
    }

    /**
     * @desc Demographics data handling.
     * Sends the sentimentGroup when the user knotches
     */

  }, {
    key: 'postResponse',
    value: function postResponse(data) {
      // no GA on page, and double check that demographics are disabled
      if (!this.GA && !this.demographicsEnabled()) {
        return this.bugsnag.pushBreadCrumb({ name: 'Demographics disabled, not sending a GA hit for Knotch response.' });
      }

      if (!this.GA || !data || isNaN(data.sentiment)) {
        return this.bugsnag.reportError(new Error('Missing Google Analytics Sentiment data'), { data: data });
      }

      var sentimentGroup = 'Neutral';

      if (data.sentiment > 12) {
        sentimentGroup = 'Positive';
      } else if (data.sentiment < 8) {
        sentimentGroup = 'Negative';
      }

      // this.GA('set', { 'dimension4': data.sentiment });
      // this.GA('set', { 'dimension5': sentimentGroup });
      // this.GA('set', { 'dimension6': 'knotched' });
      var customDimensions = {
        'dimension4': data.sentiment,
        'dimension5': sentimentGroup,
        'dimension6': 'knotched'
      };
      this.GA('event', 'page_view', customDimensions);
    }

    /**
     * @desc Demographics data handling.
     * Sends the sentimentGroup when the user clicks on RBT
     */

  }, {
    key: 'postRBT',
    value: function postRBT(data) {
      // no GA on page, and double check that demographics are disabled
      if (!this.GA && !this.demographicsEnabled()) {
        return this.bugsnag.pushBreadCrumb({ name: 'Demographics disabled, not sending a GA hit for RBT.' });
      }

      if (!this.GA || !data.type) {
        return this.bugsnag.reportError(new Error('Missing Google Analytics RBT data'), { data: data });
      }

      this.GA('set', { 'dimension7': data.type });
      this.GA('set', { 'dimension9': 'rbtClicked' });
      var customDimensions = {
        'dimension7': data.type,
        'dimension9': 'rbtClicked'
      };
      this.GA('event', 'page_view', customDimensions);
    }
  }]);

  return GAFrame;
}();

window.GAFrame = new GAFrame();

},{}]},{},[1]);
</script></head><script async src='https://www.googletagmanager.com/gtag/js?id=G-G591CGQ604'></script></html>