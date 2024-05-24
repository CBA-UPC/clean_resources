window.hjSiteSettings = window.hjSiteSettings || {"site_id":1906529,"r":0.24654797745137222,"rec_value":1.0,"state_change_listen_mode":"automatic","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":false,"session_capture_console_consent":false,"anonymize_digits":true,"anonymize_emails":true,"suppress_all":false,"suppress_all_on_specific_pages":[],"suppress_text":false,"suppress_location":false,"user_attributes_enabled":true,"legal_name":"AdAge","privacy_policy_url":"https://adage.com/privacy-policy","deferred_page_contents":[],"record_targeting_rules":[{"component":"url","match_operation":"contains","pattern":"adage.com/sub","negate":false}],"feedback_widgets":[],"heatmaps":[],"polls":[],"integrations":{"optimizely":{"tag_recordings":false},"abtasty":{"tag_recordings":false},"mixpanel":{"send_events":false},"unbounce":{"tag_recordings":false},"google_optimize":{"tag_recordings":false},"hubspot":{"enabled":false,"send_recordings":false,"send_surveys":false}},"features":["settings.billing_v2","survey.image_question","ask.popover_redesign","feedback.widget_telemetry","feedback.embeddable_widget","feedback.widgetV2","survey.embeddable_widget","client_script.compression.pc","survey.screenshots","error_reporting","survey.type_button"],"tracking_code_verified":true};

!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r(i.key),i)}}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:String(r)}var n,i=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.send=e,this.batchSize=r,this.flushInterval=n,this.buffer=[],this.flushTimer=null}var r,n;return r=t,(n=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(t){var e=this;this.buffer.push(t),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){e.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}var o,s=function(){try{return"performance"in window&&"now"in window.performance}catch(t){return!1}},c={version:6,metricsUrl:(null===(n=window._hjSettings)||void 0===n?void 0:n.metricsUrl)||"https://metrics.hotjar.io",sampling:{metrics:.1,fieldMetrics:.01,debug:.5,universalDebug:.05*.1},browser:{hasPerformance:!1,shouldLogMetrics:!1,inLab:!1},buffer:{bufferSize:40,flushInterval:3e3}},u={isDebugEnabled:!1,isMetricsEnabled:!1,isFieldMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},l=function(t,e,r){var n;u.loggedMetrics[t]=a(a({},u.loggedMetrics[t]),{},((n={})[e]=r||{},n))},f=function(t){if(!t)return"value";var e=Object.keys(t)[0];return e&&t[e]||"value"},d=function(t){var e,r=null!==(e=t.tag)&&void 0!==e?e:void 0;return u.isDebugEnabled?a(a(a({},r),t.extraTags),u.genericTags):r},h=function(t,e){if(!o)return!1;var r=u.isMetricsEnabled||u.isDebugEnabled;return"lab"===t&&(r=c.browser.inLab),"field"===t&&(r=u.isFieldMetricsEnabled),e?r&&e.flush:r},g=function(t){var e=!1,r="v=".concat(c.version),n=u.isDebugEnabled?"".concat(c.metricsUrl,"?").concat(r,"&debug=true"):"".concat(c.metricsUrl,"?").concat(r),i=JSON.stringify(t);if("sendBeacon"in navigator)try{e=navigator.sendBeacon.bind(navigator)(n,i)}catch(t){}if(!1===e)try{var a=new XMLHttpRequest;a.open("POST",n),a.timeout=1e4,a.send(i)}catch(t){}c.browser.shouldLogMetrics&&console.debug("New Metrics: ",t)},b={getConfig:function(t){return c[t]},getState:function(t){return u[t]},start:function(){try{c.browser={hasPerformance:s(),shouldLogMetrics:/hjMetrics=1/.test(location.search),inLab:/hjLab=true/.test(location.search)};var t=b.time(),e=window.hjSiteSettings||{},r=e.features,n=e.site_id,a=new Set(r),l=c.sampling;return u.genericTags={site_id:n},u.isDebugEnabled=Math.random()<=l.universalDebug||a.has("client_script.metrics.debug")&&Math.random()<=l.debug,u.isMetricsEnabled=Math.random()<=l.metrics,u.isFieldMetricsEnabled=u.isMetricsEnabled&&Math.random()<=l.fieldMetrics,o=new i(g,c.buffer.bufferSize,c.buffer.flushInterval),t}catch(t){console.debug("Error in metrics.start",{error:t})}},reset:function(){u.loggedMetrics={}},stop:function(){u.isDebugEnabled=!1,u.isMetricsEnabled=!1,u.genericTags={}},count:function(t,e){var r=e.incr,n=e.tag,i=e.extraTags,s=e.type;try{var c,l=f(n),g=u.loggedMetrics[t],b=0;if(r?(b=(g&&g[l]||0)+(r.value||1),u.loggedMetrics[t]=a(a({},g),{},((c={})[l]=null!=r&&r.flush?0:b,c))):b=1,h(s,r)){var v={name:t,type:"count",value:b,tags:d({tag:n,extraTags:i})};o.add(v)}}catch(t){}},distr:function(t,e){var r=e.task,n=e.value,i=e.extraTags;h()&&o.add({name:t,type:"distribution",value:n,tags:d({tag:{task:r},extraTags:i})})},time:function(){try{if(!c.browser.hasPerformance)return;return performance.now()}catch(t){}},timeEnd:function(t,e){var r=e.tag,n=e.start,i=e.total,a=e.extraTags,s=e.type;try{var c=b.time();if(!i&&!c)return;var u=f(r),g=i||(n&&c?c-n:void 0);if(l(t,u,{}),g&&g>0&&h(s)){var v={name:t,type:"distribution",value:Math.round(g),tags:d({tag:r,extraTags:a})};o.add(v)}return c}catch(e){console.debug("Failed to send timer metric: ",{name:t,tag:r,error:e})}},timeIncr:function(t,e){var r,n,i,a,o=e.tag,s=e.start,c=e.flush,d=e.extraTags,h=e.type,g=hj.metrics.time(),v=s&&g?g-s:void 0,m=(r=t,{tagName:n=f(o),start:(a=(i=u.loggedMetrics[r])&&i[n]||{}).start,total:a.total}),w=v?v+(m.total||0):m.total;return l(t,m.tagName,{total:w}),c&&b.timeEnd(t,{tag:o,total:w,extraTags:d,type:h}),w},timeWatcher:function(){var t,e=0,r=!1,n=function(){var r,n=b.time();return e+=null!==(r=t&&n&&n-t)&&void 0!==r?r:0,t=b.time(),e};return{start:function(){if(!r)return r=!0,t=b.time()},incr:n,end:function(){var r=n();return e=0,t=void 0,r}}},getErrorMessage:function(t){return t instanceof Error?t.message:"string"==typeof t?t:""}};window.hj=window.hj||function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(e)},window.hj.metrics=b;var v=hj.metrics.start();window.hjBootstrap=window.hjBootstrap||function(t,e,r){var n,i=new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot","i"),a=(null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||"unknown";if(i.test(a))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",a);var o="http:"===window.location.protocol,s=Boolean(window._hjSettings.preview);if(o&&!s)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(t,e,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var u=window.document,l=u.head||u.getElementsByTagName("head")[0];hj.scriptDomain=t;var f=u.createElement("script");f.async=1,f.src=hj.scriptDomain+e,f.charset="utf-8",l.appendChild(f),c.revision="4cce220",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.bab19612e24942353c1e.js","1906529"),hj.metrics.timeEnd("resource-blocking-time",{tag:{resource:"hotjar-js"},start:v,type:"lab"}),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.c3b62eb2c8979375c4d6.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.0656b4af4d0e458171c1.js"},SURVEY_ISOLATED:{js:"survey-isolated.ec0131e1400a11867d18.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.f79c0c7bb13d8a14bddc.js"},SURVEY_INVITATION:{js:"survey-invitation.0c3413ba323a3b80de21.js"},NOTIFICATION:{js:"notification.dcf8412c061e7fe8234d.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.7b5a9e5c07a2f5e4fc0c.js"},SENTRY:{js:"sentry.58c81e3e25532810f6fd.js"},BROWSER_PERF:{js:"browser-perf.8417c6bba72228fa2e29.js"}}}();for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x16, _x17, _x18) { var _again = true; _function: while (_again) { var object = _x16, property = _x17, receiver = _x18; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x16 = parent; _x17 = property; _x18 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = require('events').EventEmitter;

/**
 * HayScrollTracking simply keep tracks of steps' positions inside a viewport.
 * Apart from the static helper functions and the `scroll` function, a roll instance doesn't depend on DOM manipulation.
 * That means you can use a HayScrollTracking instance in contexts other than DOM.
 */

var HayScrollTracking = (function (_EventEmitter) {
  _inherits(HayScrollTracking, _EventEmitter);

  /**
   * Create a new HayScrollTracking.
   * @param viewSize viewport size (single dimension)
   */

  function HayScrollTracking(viewSize) {
    _classCallCheck(this, HayScrollTracking);

    _get(Object.getPrototypeOf(HayScrollTracking.prototype), "constructor", this).call(this);

    this.viewportSize = viewSize;
    this.paneSize = 0;

    // store the steps object {y1, y2, size, pad}, See HayScrollTracking.chunk
    this.steps = [];

    this.pos = 0; // current position
    this.current = 0; // current step
    this.last = -1; // last step

    this.movingInterval = -1;
  }

  /**
   * Add a step object. You can also use HayScrollTracking.chunk() static helper function to create a step object easily.
   * @param s an object with {p1, p2, size, pad} properties, or an array of steps object
   * @returns {HayScrollTracking}
   */

  _createClass(HayScrollTracking, [{
    key: "addStep",
    value: function addStep(s) {

      if (!Array.isArray(s)) {
        s = [s];
      }

      // get last recorded step
      var d = s[0].p1;
      if (this.steps.length > 0) {
        var last = this.steps[this.steps.length - 1];
        d = last.p2 + last.pad;
      }

      // append new steps
      for (var i = 0; i < s.length; i++) {
        s[i].p1 = d;
        s[i].p2 = s[i].p1 + s[i].size;
        d = s[i].p2 + s[i].pad;
        this.steps.push(s[i]);
      }

      // recalculate pane size
      this.getHeight(true);

      return this;
    }

    /**
     * Get step by index
     * @param index 
     */
  }, {
    key: "getStepAt",
    value: function getStepAt(index) {
      return this.steps[Math.max(0, Math.min(this.steps.length - 1, index))];
    }

    /**
     * Calculate and return current step. When padding > 0, step will be -1 when current progress is on the padding area. This allows you to check progress against padding.
     * @returns {number}
     */
  }, {
    key: "getStep",
    value: function getStep() {
      for (var i = 0; i < this.steps.length; i++) {
        var st = this.steps[i];
        if (st.p1 >= -this.viewportSize && st.p2 <= st.size) {
          this.current = i;
          return i;
        }
      }
      return -1;
    }

    /**
     * Get current progress within the current step
     * @returns 0-1 if step.pad is 0. Otherwise it will range from negative to positive.
     */
  }, {
    key: "getStepProgress",
    value: function getStepProgress() {
      var curr = this.steps[this.current];
      return 1 - curr.p2 / curr.size;
    }

    /**
     * Get current position
     * @returns {number|*}
     */
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.pos;
    }

    /**
     * Get total height of the pane (including padding)
     * @returns {*}
     */
  }, {
    key: "getHeight",
    value: function getHeight() {
      var recalc = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      if (recalc) this.paneSize = this.steps.reduce(function (a, b) {
        return a + b.size + b.pad;
      }, 0);
      return this.paneSize;
    }

    /**
     * Get viewport's height (same as this.viewportSize)
     * @returns {*}
     */
  }, {
    key: "getViewportHeight",
    value: function getViewportHeight() {
      return this.viewportSize;
    }

    /**
     * Get Div Data
     * @returns {*}
     */
  }, {
    key: "getCurrentDivContext",
    value: function getCurrentDivContext() {}
  }, {
    key: "throttle",
    value: function throttle(func, wait) {
      var context, args, result;
      var timeout = null;
      var previous = 0;
      var later = function later() {
        previous = new Date();
        timeout = null;
        result = func.apply(context, args);
      };
      return function () {
        var now = new Date();
        if (!previous) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
          clearTimeout(timeout);
          timeout = null;
          previous = now;
          result = func.apply(context, args);
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    }
  }, {
    key: "move",

    /**
     * Move the roll. This will emit two events `roll(step, currProgress, currPosition, totalProgress)` and `step(curr, last)`
     * @param pos new position
     * @returns {HayScrollTracking}
     */
    value: function move(pos) {
      var last = this.pos;
      this.pos = -pos;
      var diff = this.pos - last;

      for (var i = 0; i < this.steps.length; i++) {
        var s = this.steps[i];
        s.p1 += diff;
        s.p2 = s.p1 + s.size;
      }

      var curr = this.getStep();
      var progress = this.getStepProgress();
      this.emit("roll", curr, progress, pos, pos / (this.paneSize - this.viewportSize));

      if (curr != this.last && curr >= 0) {
        this.emit("step", curr, this.last, this.viewportSize);
        this.last = curr;
      }

      return this;
    }
  }, {
    key: "track",
    value: function track(progress, element) {
      this.emit("track", progress, element);
    }

    /**
     * Animated scrolling a DOM element
     * @param index step index
     * @param scrollPane a DOM element with scrolling (overflow-y).
     * @param speed optional speed of animated scroll. Defaults to 0.1. Larger is faster
     * @param isVertical optional boolean to indicate horizontal or vertical scroll
     */
  }, {
    key: "scroll",
    value: function scroll(index, scrollPane) {
      var _this = this;

      var speed = arguments.length <= 2 || arguments[2] === undefined ? 0.1 : arguments[2];
      var isVertical = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

      if (!scrollPane || scrollPane.scrollTop == null) throw "scrollPane parameter requires a DOM element with scrollTop property";
      clearInterval(this.movingInterval);
      var _temp = Number.NEGATIVE_INFINITY;
      var dir = isVertical ? "scrollTop" : "scrollLeft";

      this.movingInterval = setInterval(function () {
        var target = _this.getStepAt(index);
        var d = (target.p1 + target.size / 4) * speed;
        scrollPane[dir] += d;
        if (Math.abs(d) < 1 || _temp === scrollPane[dir]) clearInterval(_this.movingInterval);
        _temp = scrollPane[dir];
      }, 17);
    }

    /**
     * A convenient static function to create a step object
     * @param size chunk size
     * @param pad optional padding (default to 0)
     * @returns {{p1: number, p2: *, size: *, pad: number}}
     */
  }], [{
    key: "chunk",
    value: function chunk(size) {
      var pad = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      return {
        p1: 0,
        p2: size,
        size: size,
        pad: pad
      };
    }

    /**
     * A convenient static function to compare a step with current step, and transform it to a name
     * @param step the step to check
     * @param currStep current step
     * @param prev optional class name for step is < currStep. Defaults to "prev"
     * @param next optional class name for step is > currStep. Defaults to "next"
     * @param match optional class name for step = currStep. Defaults to "curr"
     * @returns {string}
     */
  }, {
    key: "stepName",
    value: function stepName(step, currStep) {
      var prev = arguments.length <= 2 || arguments[2] === undefined ? "prev" : arguments[2];
      var next = arguments.length <= 3 || arguments[3] === undefined ? "next" : arguments[3];
      var match = arguments.length <= 4 || arguments[4] === undefined ? "curr" : arguments[4];

      return step === currStep ? match : step < currStep ? prev : next;
    }

    /**
     * Static helper to get a handle function for HayScrollTracking's "step" event. The handler function will add class names to each step element based on current step value.
     * @param roll a HayScrollTracking instance
     * @param views a list of DOM elements which are the steps
     * @param prev optional class name for step is < currStep. Defaults to "prev"
     * @param next optional class name for step is > currStep. Defaults to "next"
     * @param match optional class name for step = currStep. Defaults to "curr"
     * @returns {Function}
     */
  }, {
    key: "stepHandler",
    value: function stepHandler(roll, views) {
      var prev = arguments.length <= 2 || arguments[2] === undefined ? "prev" : arguments[2];
      var next = arguments.length <= 3 || arguments[3] === undefined ? "next" : arguments[3];
      var match = arguments.length <= 4 || arguments[4] === undefined ? "curr" : arguments[4];
      var trackTopPos = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];

      return function (curr, last, viewportHeight) {
        for (var i = 0; i < roll.steps.length; i++) {
          var cls = HayScrollTracking.stepName(i, curr, prev, next, match);
          views[i].className = "step " + cls;

          // if steps have different sizes, recalc top position and set style
          if (trackTopPos) {
            var p = cls === prev ? roll.steps[i].size * -1 : cls === next ? viewportHeight : 0;
            views[i].style.top = p + "px";
          }
        }
      };
    }

    /**
     * Static method to create a HayScrollTracking instance with DOM elements
     * @param viewPortID id of viewport element, which is the parent of the viewPane. eg, "#viewport"
     * @param viewPaneID id of view pane element, eg, "#pane"
     * @param viewBox id of view box element, which is the parent the viewClass elements. eg, "#steps"
     * @param viewClass id of each step or slide element, eg, ".step"
     * @param pad optional padding between steps. Defaults to 0.
     * @returns the roll instance which you can listen for "step" and "roll" event via `roll.on(...)`
     */
  }, {
    key: "DOM",
    value: function DOM(viewPortID, viewPaneID, viewBoxID, viewClass) {
      var pad = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
      var throttleTimeout = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];

      var viewport;
      if (typeof viewPortID === 'string') {
        viewport = document.querySelector(viewPortID);
      } else {
        viewport = window;
      }
      var viewpane;
      if (viewPaneID == 'body' || viewport == window) {
        viewpane = document.querySelector(viewPaneID);
      } else {
        viewpane = viewport.querySelector(viewPaneID);
      }

      var viewbox = document.querySelector(viewBoxID);
      var views = viewbox.querySelectorAll(viewClass);
      if (!viewport || !viewpane) throw "Cannot find " + viewPortID + " or " + viewPaneID + " element id.";
      if (!viewClass) throw "Cannot find " + viewClass + " element class name";

      // create roll instance based on viewport element height
      var roll;
      if (viewport == window) {
        roll = new HayScrollTracking(viewport.innerHeight);
      } else {
        roll = new HayScrollTracking(viewport.getBoundingClientRect().height);
      }

      // add each viewClass element as a step
      for (var i = 0; i < views.length; i++) {
        var rect = views[i].getBoundingClientRect();
        roll.addStep(HayScrollTracking.chunk(rect.height, pad));
      }

      // update viewpane height based on steps
      viewpane.style.height = roll.getHeight() + "px";
      console.log(roll.getHeight());
      // update viewbox width to account for scrollbar
      viewbox.style.width = viewpane.getBoundingClientRect().width + "px";
      console.log(viewpane.getBoundingClientRect().width);
      // track scroll
      if (viewport == window) {
        viewport.addEventListener("scroll", roll.throttle(function () {
          return roll.move(viewport.scrollY);
        }, throttleTimeout));
      } else {
        viewport.addEventListener("scroll", roll.throttle(function () {
          return roll.move(viewport.scrollTop);
        }, throttleTimeout));
      }
      return roll;
    }
  }, {
    key: "TrackDOM",
    value: function TrackDOM(viewPortID, element) {
      var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
      var throttleTimeout = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

      var viewport;
      if (typeof viewPortID === 'string') {
        viewport = document.querySelector(viewPortID);
      } else {
        viewport = window;
      }

      // create roll instance based on viewport element height
      var roll;
      if (viewport == window) {
        roll = new HayScrollTracking(viewport.innerHeight);
      } else {
        roll = new HayScrollTracking(viewport.getBoundingClientRect().height);
      }

      // add each viewClass element as a step

      var offsetTop = element.offsetTop;
      var offsetHeight = element.offsetHeight;

      viewport.addEventListener("scroll", roll.throttle(function () {

        if ($(window).scrollTop() + offset > offsetTop && $(window).scrollTop() + offset < offsetHeight + offsetTop) {
          var progress = ($(window).scrollTop() + offset - offsetTop) / offsetHeight;

          roll.track(progress, element);
        }
      }, throttleTimeout));

      return roll;
    }
  }, {
    key: "init",
    value: function init(trackable, func) {
      var elements = document.querySelectorAll(trackable);
      var trackableObjects = [];
      elements.forEach(function (element) {
        var haha = HayScrollTracking.TrackDOM(null, element, window.innerHeight, 500);
        haha.on("track", func);
        trackableObjects.push(haha);
      });
      return trackableObjects;
    }
  }, {
    key: "destroy",
    value: function destroy(trackableObjects) {
      trackableObjects.forEach(function (e) {
        e.removeAllListeners();
      });
    }
  }]);

  return HayScrollTracking;
})(EventEmitter);

exports["default"] = HayScrollTracking;
module.exports = exports["default"];

},{"events":1}],3:[function(require,module,exports){
"use strict";

var HayScrollTracking = require("./hayscrolltracking.js");

if (window) window.HayScrollTracking = HayScrollTracking;

},{"./hayscrolltracking.js":2}]},{},[3])

//# sourceMappingURL=hayscrolltracking.js.map
