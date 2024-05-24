/******/ (
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (,
/* 8 */
/***/ (,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*Copyright (c) 2019 Jason Zissman
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function () {
	(function (root, factory) {
		if ( true && module.exports) {
			// CommonJS
			return module.exports = factory();
		} else if (true) {
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {}
	})(this, function () {

		var TimeMe = {

			startStopTimes: {},
			idleTimeoutMs: 30 * 1000,
			currentIdleTimeMs: 0,
			checkStateRateMs: 250,
			active: false, // state if we are actively recording time
			idle: false, // state if user on page but not interacting
			currentPageName: "default-page-name",
			timeElapsedCallbacks: [],
			userLeftCallbacks: [],
			userReturnCallbacks: [],

			trackTimeOnElement: function (elementId) {
				var element = document.getElementById(elementId);
				if (element) {
					element.addEventListener("mouseover", function () {
						TimeMe.startTimer(elementId);
					});
					element.addEventListener("mousemove", function () {
						TimeMe.startTimer(elementId);
					});					
					element.addEventListener("mouseleave", function () {
						TimeMe.stopTimer(elementId);
					});
					element.addEventListener("keypress", function () {
						TimeMe.startTimer(elementId);
					});
					element.addEventListener("focus", ;
				}
			},

			getTimeOnElementInSeconds: 

			// startTime is optional. If provided, must be of type Date(). By providing
			// startTime, you are overriding the internal timing mechanism and manually
			// indicating the start time.
			startTimer: function (pageName, startTime) {
				if (!pageName) {
					pageName = TimeMe.currentPageName;
				}

				if (TimeMe.startStopTimes[pageName] === undefined) {
					TimeMe.startStopTimes[pageName] = [];
				} else {
					var arrayOfTimes = TimeMe.startStopTimes[pageName];
					var latestStartStopEntry = arrayOfTimes[arrayOfTimes.length - 1];
					if (latestStartStopEntry !== undefined && latestStartStopEntry.stopTime === undefined) {
						// Can't start new timer until previous finishes.
						return;
					}
				}
				TimeMe.startStopTimes[pageName].push({
					"startTime": startTime || new Date(),
					"stopTime": undefined
				});
				TimeMe.active = true;
				TimeMe.idle = false;
			},

			stopAllTimers: function () {
				var pageNames = Object.keys(TimeMe.startStopTimes);
				for (var i = 0; i < pageNames.length; i++) {
					TimeMe.stopTimer(pageNames[i]);
				}
			},

			// stopTime is optional. If provided, must be of type Date(). By providing
			// stopTime, you are overriding the internal timing mechanism and manually
			// indicating the stop time.
			stopTimer: function (pageName, stopTime) {
				if (!pageName) {
					pageName = TimeMe.currentPageName;
				}
				var arrayOfTimes = TimeMe.startStopTimes[pageName];
				if (arrayOfTimes === undefined || arrayOfTimes.length === 0) {
					// Can't stop timer before you've started it.
					return;
				}
				if (arrayOfTimes[arrayOfTimes.length - 1].stopTime === undefined) {
					arrayOfTimes[arrayOfTimes.length - 1].stopTime = stopTime || new Date();
				}
				TimeMe.active = false;
			},

			getTimeOnCurrentPageInSeconds: function () {
				return TimeMe.getTimeOnPageInSeconds(TimeMe.currentPageName);
			},

			getTimeOnPageInSeconds: function (pageName) {
				var timeInMs = TimeMe.getTimeOnPageInMilliseconds(pageName);
				if (timeInMs === undefined) {
					return undefined;
				} else {
					return timeInMs / 1000;
				}
			},

			getTimeOnCurrentPageInMilliseconds: 

			getTimeOnPageInMilliseconds: function (pageName) {

				var totalTimeOnPage = 0;

				var arrayOfTimes = TimeMe.startStopTimes[pageName];
				if (arrayOfTimes === undefined) {
					// Can't get time on page before you've started the timer.
					return;
				}

				var timeSpentOnPageInSeconds = 0;
				for (var i = 0; i < arrayOfTimes.length; i++) {
					var startTime = arrayOfTimes[i].startTime;
					var stopTime = arrayOfTimes[i].stopTime;
					if (stopTime === undefined) {
						stopTime = new Date();
					}
					var difference = stopTime - startTime;
					timeSpentOnPageInSeconds += (difference);
				}

				totalTimeOnPage = Number(timeSpentOnPageInSeconds);
				return totalTimeOnPage;
			},

			getTimeOnAllPagesInSeconds: function () {
				var allTimes = [];
				var pageNames = Object.keys(TimeMe.startStopTimes);
				for (var i = 0; i < pageNames.length; i++) {
					var pageName = pageNames[i];
					var timeOnPage = TimeMe.getTimeOnPageInSeconds(pageName);
					allTimes.push({
						"pageName": pageName,
						"timeOnPage": timeOnPage
					});
				}
				return allTimes;
			},

			setIdleDurationInSeconds: function (duration) {
				var durationFloat = parseFloat(duration);
				if (isNaN(durationFloat) === false) {
					TimeMe.idleTimeoutMs = duration * 1000;
				} else {
					throw {
						name: "InvalidDurationException",
						message: "An invalid duration time (" + duration + ") was provided."
					};
				}
				return this;
			},

			setCurrentPageName: 

			resetRecordedPageTime: 

			resetAllRecordedPageTimes: function () {
				var pageNames = Object.keys(TimeMe.startStopTimes);
				for (var i = 0; i < pageNames.length; i++) {
					TimeMe.resetRecordedPageTime(pageNames[i]);
				}
			},

			resetIdleCountdown: function () {
				if (TimeMe.idle) {
					TimeMe.triggerUserHasReturned();
				}
				TimeMe.idle = false;
				TimeMe.currentIdleTimeMs = 0;
			},

			callWhenUserLeaves: function (callback, numberOfTimesToInvoke) {
				this.userLeftCallbacks.push({
					callback: callback,
					numberOfTimesToInvoke: numberOfTimesToInvoke
				})
			},

			callWhenUserReturns: 

			triggerUserHasReturned: function () {
				if (!TimeMe.active) {
					for (var i = 0; i < this.userReturnCallbacks.length; i++) {
						var userReturnedCallback = this.userReturnCallbacks[i];
						var numberTimes = userReturnedCallback.numberOfTimesToInvoke;
						if (isNaN(numberTimes) || (numberTimes === undefined) || numberTimes > 0) {
							userReturnedCallback.numberOfTimesToInvoke -= 1;
							userReturnedCallback.callback();
						}
					}
				}
				TimeMe.startTimer();
			},

			triggerUserHasLeftPage: function () {
				if (TimeMe.active) {
					for (var i = 0; i < this.userLeftCallbacks.length; i++) {
						var userHasLeftCallback = this.userLeftCallbacks[i];
						var numberTimes = userHasLeftCallback.numberOfTimesToInvoke;
						if (isNaN(numberTimes) || (numberTimes === undefined) || numberTimes > 0) {
							userHasLeftCallback.numberOfTimesToInvoke -= 1;
							userHasLeftCallback.callback();
						}
					}
				}
				TimeMe.stopAllTimers();
			},

			callAfterTimeElapsedInSeconds: function (timeInSeconds, callback) {
				TimeMe.timeElapsedCallbacks.push({
					timeInSeconds: timeInSeconds,
					callback: callback,
					pending: true
				});
			},

			checkState: function () {
				for (var i = 0; i < TimeMe.timeElapsedCallbacks.length; i++) {
					if (TimeMe.timeElapsedCallbacks[i].pending && TimeMe.getTimeOnCurrentPageInSeconds() > TimeMe.timeElapsedCallbacks[i].timeInSeconds) {
						TimeMe.timeElapsedCallbacks[i].callback();
						TimeMe.timeElapsedCallbacks[i].pending = false;
					}
				}
				if (TimeMe.idle === false && TimeMe.currentIdleTimeMs > TimeMe.idleTimeoutMs) {
					TimeMe.idle = true;
					TimeMe.triggerUserHasLeftPage();
				} else {
					TimeMe.currentIdleTimeMs += TimeMe.checkStateRateMs;
				}
			},

			visibilityChangeEventName: undefined,
			hiddenPropName: undefined,

			listenForVisibilityEvents: function () {

				if (typeof document.hidden !== "undefined") {
					TimeMe.hiddenPropName = "hidden";
					TimeMe.visibilityChangeEventName = "visibilitychange";
				} else if (typeof document.mozHidden !== "undefined") {
					TimeMe.hiddenPropName = "mozHidden";
					TimeMe.visibilityChangeEventName = "mozvisibilitychange";
				} else if (typeof document.msHidden !== "undefined") {
					TimeMe.hiddenPropName = "msHidden";
					TimeMe.visibilityChangeEventName = "msvisibilitychange";
				} else if (typeof document.webkitHidden !== "undefined") {
					TimeMe.hiddenPropName = "webkitHidden";
					TimeMe.visibilityChangeEventName = "webkitvisibilitychange";
				}

				document.addEventListener(TimeMe.visibilityChangeEventName, function () {
					if (document[TimeMe.hiddenPropName]) {
						TimeMe.triggerUserHasLeftPage();
					} else {
						TimeMe.triggerUserHasReturned();						
					}
				}, false);

				window.addEventListener('blur', function () {
					TimeMe.triggerUserHasLeftPage();
				});

				window.addEventListener('focus', function () {
					TimeMe.triggerUserHasReturned();
				});

				document.addEventListener("mousemove", function () { TimeMe.resetIdleCountdown(); });
				document.addEventListener("keyup", function () { TimeMe.resetIdleCountdown(); });
				document.addEventListener("touchstart", function () { TimeMe.resetIdleCountdown(); });
				window.addEventListener("scroll", function () { TimeMe.resetIdleCountdown(); });

				setInterval( TimeMe.checkStateRateMs);
			},

			websocket: undefined,

			websocketHost: undefined,

			setUpWebsocket: function (websocketOptions) {
				if (window.WebSocket && websocketOptions) {
					var websocketHost = websocketOptions.websocketHost; // "ws://hostname:port"
					try {
						TimeMe.websocket = new WebSocket(websocketHost);
						window.onbeforeunload = 
						TimeMe.websocket.onopen = 
						TimeMe.websocket.onerror = 
						TimeMe.websocket.onmessage = 
					} catch (error) {
						if (console) {
							console.error("Failed to connect to websocket host.  Error:" + error);
						}
					}
				}
				return this;
			},

			websocketSend: 

			sendCurrentTime: function (appId) {
				var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInMilliseconds();
				var data = {
					type: "INSERT_TIME",
					appId: appId,
					timeOnPageMs: timeSpentOnPage,
					pageName: TimeMe.currentPageName
				};
				TimeMe.websocketSend(data);
			},
			sendInitWsRequest: 

			initialize: function (options) {

				var idleTimeoutInSeconds = TimeMe.idleTimeoutMs || 30;
				var currentPageName = TimeMe.currentPageName || "default-page-name";
				var websocketOptions = undefined;
				var initialStartTime = undefined;

				if (options) {
					idleTimeoutInSeconds = options.idleTimeoutInSeconds || idleTimeoutInSeconds;
					currentPageName = options.currentPageName || currentPageName;
					websocketOptions = options.websocketOptions;
					initialStartTime = options.initialStartTime;
				}

				TimeMe.setIdleDurationInSeconds(idleTimeoutInSeconds)
					.setCurrentPageName(currentPageName)
					.setUpWebsocket(websocketOptions)
					.listenForVisibilityEvents();

				// TODO - only do this if page currently visible.

				TimeMe.startTimer(undefined, initialStartTime);
			}
		};
		return TimeMe;
	});
}).call(this);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", ;
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var timeme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var timeme_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(timeme_js__WEBPACK_IMPORTED_MODULE_4__);








var url = '/_track';
var TRACKING_PARAM = {
  CHANNEL: 'ch',
  PAGE_VIEW: 'pv',
  REFFERER: 'r',
  TIME_ON_PAGE: 't',
  UNIQUE_VISIT: 'uv',
  VISIT: 'v'
};

var getNow = 

var setItem = 

var Tracking = /*#__PURE__*/function () {
  
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Tracking, null, [{
    key: "clearTimeout",
    value: function () {
      var TIMEOUT_ID_KEY = "bsp.analytics.timeout.id".concat(this.siteSuffix);
      var timeoutId = localStorage.getItem(TIMEOUT_ID_KEY);

      if (timeoutId) {
        clearTimeout(timeoutId);
        localStorage.removeItem(TIMEOUT_ID_KEY);
      }
    })
  }, {
    key: "post",
    value: function post(data, callback) {
      var commonData = _objectSpread({
        s: this.siteId,
        p: this.pageViewIds,
        u: window.location.href
      }, this.extraData);

      var req = new XMLHttpRequest();
      var body = JSON.stringify(_objectSpread(_objectSpread({}, commonData), data));

      if (callback) {
        req.open('POST', url, false);

        req.onreadystatechange = function () {
          if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
            callback();
          }
        };
      } else {
        req.open('POST', url, true);
      }

      req.send(body);
    }
  }, {
    key: "trackVisits",
    value: function trackVisits() {
      var uniqueVisit = false;
      var visit = false;
      var UNIQUE_VISIT_KEY = "bsp.analytics.uniqueVisit".concat(this.siteSuffix);
      var VISIT_STARTED_KEY = "bsp.analytics.visitStarted".concat(this.siteSuffix);
      var LAST_ACTIVITY_KEY = "bsp.analytics.lastActivity".concat(this.siteSuffix);

      if (!localStorage.getItem(UNIQUE_VISIT_KEY)) {
        setItem(UNIQUE_VISIT_KEY, true);
        uniqueVisit = true;
      }

      var visitStarted = localStorage.getItem(VISIT_STARTED_KEY);
      var lastActivity = localStorage.getItem(LAST_ACTIVITY_KEY);
      var now = getNow();
      setItem(LAST_ACTIVITY_KEY, now);

      if (!visitStarted || parseInt(visitStarted) + 12 * 60 * 60 * 1000 < now) {
        setItem(VISIT_STARTED_KEY, now);
        visit = true;
      } else if (!lastActivity || parseInt(lastActivity) + 30 * 60 * 1000 < now) {
        visit = true;
      }

      var event = [];

      if (uniqueVisit) {
        event.push(TRACKING_PARAM.UNIQUE_VISIT);
      }

      if (visit) {
        event.push(TRACKING_PARAM.VISIT);
      }

      if (this.pageViewIds) {
        event.push(TRACKING_PARAM.PAGE_VIEW);
      }

      if (this.referrer) {
        event.push(TRACKING_PARAM.CHANNEL);
      }

      this.post({
        r: this.referrer,
        ci: this.contentId,
        e: event
      });
    }
  }, {
    key: "trackTimeOnPage",
    value: function trackTimeOnPage() {
      var _this = this;

      // Track time on page.
      timeme_js__WEBPACK_IMPORTED_MODULE_4__["resetAllRecordedPageTimes"]();
      timeme_js__WEBPACK_IMPORTED_MODULE_4__["initialize"]({
        idleTimeoutInSeconds: 30
      });
      var timeOnPage = 0;
      var interval = 10000;
      var maxInterval = interval * 32;
      var TIMEOUT_ID_KEY = "bsp.analytics.timeout.id".concat(this.siteSuffix);

      var postTimeOnPage = function postTimeOnPage() {
        if (interval < maxInterval) {
          interval = interval * 2;
        }

        _this.clearTimeout();

        setItem(TIMEOUT_ID_KEY, setTimeout(postTimeOnPage, interval));
        var newTimeOnPage = timeme_js__WEBPACK_IMPORTED_MODULE_4__["getTimeOnCurrentPageInSeconds"]();
        var diff = newTimeOnPage - timeOnPage;

        if (diff > 0) {
          timeOnPage = newTimeOnPage; // Guard against abnormal time, typically caused by the machine
          // sleeping.

          var event = [];
          event.push(TRACKING_PARAM.TIME_ON_PAGE);

          _this.post({
            e: event,
            t: diff > maxInterval ? maxInterval : diff
          });
        }
      };

      this.clearTimeout();
      setItem(TIMEOUT_ID_KEY, setTimeout(postTimeOnPage, interval));
      window.addEventListener('beforeunload', function () {
        var diff = timeme_js__WEBPACK_IMPORTED_MODULE_4__["getTimeOnCurrentPageInSeconds"]() - timeOnPage;

        if (diff <= 0) {
          return;
        }

        var event = [];
        event.push(TRACKING_PARAM.TIME_ON_PAGE);
        var data = {
          e: event,
          t: diff
        };

        if (navigator.sendBeacon) {
          navigator.sendBeacon(url, JSON.stringify(data));
        } else {
          var complete;
          var end = getNow() + 200;

          _this.post(data, ; // eslint-disable-next-line no-unmodified-loop-condition


          while (!complete) {
            if (getNow() > end) {
              break;
            }
          }
        }
      });
    }
  }, {
    key: "bspTrackingScript",
    get: function get() {
      return document.querySelector('[data-bsp-site]');
    }
  }, {
    key: "contentId",
    get: function get() {
      var contentElement = document.querySelector('[data-bsp-contentid]');

      if (contentElement) {
        return contentElement.getAttribute('data-bsp-contentid');
      }
    }
  }, {
    key: "extraData",
    get: function get() {
      var extraDataElement = document.querySelector('[data-bsp-analytics-data]');

      if (extraDataElement) {
        return JSON.parse(extraDataElement.dataset.bspAnalyticsData);
      }
    },
    set: function set(data) {
      var extraDataElement = document.querySelector('[data-bsp-analytics-data]');

      if (extraDataElement) {
        extraDataElement.dataset.bspAnalyticsData = data;
      }
    }
  }, {
    key: "pageViewIds",
    get: function get() {
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll('[data-bsp-pv]')).map(;
    }
  }, {
    key: "referrer",
    get:   }, {
    key: "siteId",
    get: function get() {
      if (this.bspTrackingScript) {
        return this.bspTrackingScript.getAttribute('data-bsp-site');
      }
    }
  }, {
    key: "siteSuffix",
    get: function get() {
      return this.siteId ? ".".concat(this.siteId) : '';
    }
  }, {
    key: "trackingEnabled",
    get:   }]);

  return Tracking;
}();

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (,
/* 21 */
/***/ (,
/* 22 */
/***/ (,
/* 23 */
/***/ (,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tracking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


var init = function init() {
  if (!_Tracking__WEBPACK_IMPORTED_MODULE_0__[/* Tracking */ "a"].trackingEnabled) return;
  _Tracking__WEBPACK_IMPORTED_MODULE_0__[/* Tracking */ "a"].trackVisits();
  _Tracking__WEBPACK_IMPORTED_MODULE_0__[/* Tracking */ "a"].trackTimeOnPage();
  window.addEventListener('Bsp:PageView', function () {
    _Tracking__WEBPACK_IMPORTED_MODULE_0__[/* Tracking */ "a"].trackVisits();
    _Tracking__WEBPACK_IMPORTED_MODULE_0__[/* Tracking */ "a"].trackTimeOnPage();
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/***/ })
/******/ ]);