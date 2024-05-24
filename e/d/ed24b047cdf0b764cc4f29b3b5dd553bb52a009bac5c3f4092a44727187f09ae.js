/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	/******/
/******/ 	// The require function
/******/ 	/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = 
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = 
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = 
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = 
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = 
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = 
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = 
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (,
/* 1 */
/***/ (,
/* 2 */
/***/ (,
/* 3 */
/***/ (,
/* 4 */
/***/ (,
/* 5 */
/***/ (,
/* 6 */
/***/ (,
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

				setInterval(function () {
					TimeMe.checkState();
				}, TimeMe.checkStateRateMs);
			},

			websocket: undefined,

			websocketHost: undefined,

			setUpWebsocket: function (websocketOptions) {
				if (window.WebSocket && websocketOptions) {
					var websocketHost = websocketOptions.websocketHost; // "ws://hostname:port"
					try {
						TimeMe.websocket = new WebSocket(websocketHost);
						window.onbeforeunload = function (event) {
							TimeMe.sendCurrentTime(websocketOptions.appId);
						};
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tracking; });
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





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(2);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(0);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(5);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./styleguide/core/form/input/Input.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Input_Input = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(Input, _HTMLElement);

  var _super = _createSuper(Input);

  function Input() {
    classCallCheck_default()(this, Input);

    return _super.apply(this, arguments);
  }

  createClass_default()(Input, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.addEventListener('focusout', this);
      this.addEventListener('change', this);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.bindEvents();
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (['focusout', 'change'].includes(event.type)) {
        this.validate();
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      var validity = this.input.validity;

      if (validity.valid) {
        this.errorMessage = '';
        this.error = false;
        return;
      }

      for (var key in validity) {
        if (validity[key]) {
          this.errorMessage = this.dataset[key];
          this.error = true;
          return;
        }
      }
    }
  }, {
    key: "error",
    set: function set(bool) {
      bool ? this.setAttribute('has-error', '') : this.removeAttribute('has-error');
    }
  }, {
    key: "errorMessage",
    set:   }, {
    key: "input",
    get: function get() {
      return this.querySelector('input');
    }
  }]);

  return Input;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/form/input/CaptchaInput.js






function CaptchaInput_createSuper(Derived) { var hasNativeReflectConstruct = CaptchaInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function CaptchaInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var CaptchaInput_CaptchaInput = /*#__PURE__*/function (_Input) {
  inherits_default()(CaptchaInput, _Input);

  var _super = CaptchaInput_createSuper(CaptchaInput);

  function CaptchaInput() {
    classCallCheck_default()(this, CaptchaInput);

    return _super.apply(this, arguments);
  }

  createClass_default()(CaptchaInput, [{
    key: "validate",
    value:   }, {
    key: "input",
    get: function get() {}
  }, {
    key: "captcha",
    get: function get() {
      return this.querySelector('ps-google-captcha');
    }
  }, {
    key: "valid",
    get: function get() {
      return this.captcha.valid;
    }
  }]);

  return CaptchaInput;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/input/EmailInput.js





function EmailInput_createSuper(Derived) { var hasNativeReflectConstruct = EmailInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function EmailInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var EmailInput_EmailInput = /*#__PURE__*/function (_Input) {
  inherits_default()(EmailInput, _Input);

  var _super = EmailInput_createSuper(EmailInput);

  function EmailInput() {
    classCallCheck_default()(this, EmailInput);

    return _super.apply(this, arguments);
  }

  return EmailInput;
}(Input_Input);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(12);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./styleguide/core/form/input/FileInput.js







function FileInput_createSuper(Derived) { var hasNativeReflectConstruct = FileInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function FileInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var FileInput_FileInput = /*#__PURE__*/function (_Input) {
  inherits_default()(FileInput, _Input);

  var _super = FileInput_createSuper(FileInput);

  function FileInput() {
    classCallCheck_default()(this, FileInput);

    return _super.apply(this, arguments);
  }

  createClass_default()(FileInput, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      get_default()(getPrototypeOf_default()(FileInput.prototype), "connectedCallback", this).call(this);

      this.button.addEventListener('click', function () {
        _this.input.click();
      });
      this.addEventListener('change', function () {
        _this.files = _this.input.files;

        var fileList = _this.files.map(.join(', ');

        var fileListEl = _this.querySelector('.FileInput-fileList');

        if (fileList) {
          fileListEl.innerText = fileList;
        } else {
          fileListEl.innerText = _this.dataset['noFileChosen'];
        }
      });
    }
  }, {
    key: "files",
    set: function set(fileList) {
      this._files = Array.from(fileList);
      this.hasFiles = !!this._files;
    },
    get:   }, {
    key: "hasFiles",
    set: function set(bool) {
      bool ? this.setAttribute('has-files', '') : this.removeAttribute('has-files');
    }
  }, {
    key: "button",
    get: function get() {
      return this.querySelector('button');
    }
  }]);

  return FileInput;
}(Input_Input);
// EXTERNAL MODULE: ./styleguide/core/form/Form.js
var Form = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./styleguide/core/form/input/GoogleCaptcha.js








function GoogleCaptcha_createSuper(Derived) { var hasNativeReflectConstruct = GoogleCaptcha_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function GoogleCaptcha_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RECAPTCHA_LIBRARY = 'https://www.google.com/recaptcha/api.js?onload=onGrecaptchaLoadCallback&render=explicit';
var READY_EVENT = 'grecaptcha:ready';

window.onGrecaptchaLoadCallback = 

var GoogleCaptcha_GoogleCaptcha = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(GoogleCaptcha, _HTMLElement);

  var _super = GoogleCaptcha_createSuper(GoogleCaptcha);

  function GoogleCaptcha() {
    classCallCheck_default()(this, GoogleCaptcha);

    return _super.apply(this, arguments);
  }

  createClass_default()(GoogleCaptcha, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.load();
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;

      var script = toConsumableArray_default()(document.querySelectorAll('script')).find(;

      if (!script) {
        var scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', RECAPTCHA_LIBRARY);
        document.querySelector('head').appendChild(scriptTag);
      }

      if (window.grecaptcha) {
        this.render();
      } else {
        document.body.addEventListener(READY_EVENT, function () {
          return _this.render();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var container = document.createElement('div');
      this.appendChild(container);
      window.grecaptcha.render(container, {
        sitekey: this.sitekey
      });
    }
  }, {
    key: "sitekey",
    get: function get() {
      return this.dataset.sitekey;
    }
  }, {
    key: "valid",
    get: function get() {
      if (window.grecaptcha) {
        return !!window.grecaptcha.getResponse();
      }

      return false;
    }
  }]);

  return GoogleCaptcha;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/form/input/PasswordInput.js





function PasswordInput_createSuper(Derived) { var hasNativeReflectConstruct = PasswordInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function PasswordInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var PasswordInput_PasswordInput = /*#__PURE__*/function (_Input) {
  inherits_default()(PasswordInput, _Input);

  var _super = PasswordInput_createSuper(PasswordInput);

  function PasswordInput() {
    classCallCheck_default()(this, PasswordInput);

    return _super.apply(this, arguments);
  }

  return PasswordInput;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/input/PhoneNumberInput.js





function PhoneNumberInput_createSuper(Derived) { var hasNativeReflectConstruct = PhoneNumberInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function PhoneNumberInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var PhoneNumberInput_PhoneNumberInput = /*#__PURE__*/function (_Input) {
  inherits_default()(PhoneNumberInput, _Input);

  var _super = PhoneNumberInput_createSuper(PhoneNumberInput);

  function PhoneNumberInput() {
    classCallCheck_default()(this, PhoneNumberInput);

    return _super.apply(this, arguments);
  }

  return PhoneNumberInput;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/select/Select.js






function Select_createSuper(Derived) { var hasNativeReflectConstruct = Select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var Select_Select = /*#__PURE__*/function (_Input) {
  inherits_default()(Select, _Input);

  var _super = Select_createSuper(Select);

  function Select() {
    classCallCheck_default()(this, Select);

    return _super.apply(this, arguments);
  }

  createClass_default()(Select, [{
    key: "input",
    get: function get() {
      return this.querySelector('select');
    }
  }]);

  return Select;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/input/TextInput.js





function TextInput_createSuper(Derived) { var hasNativeReflectConstruct = TextInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function TextInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var TextInput_TextInput = /*#__PURE__*/function (_Input) {
  inherits_default()(TextInput, _Input);

  var _super = TextInput_createSuper(TextInput);

  function TextInput() {
    classCallCheck_default()(this, TextInput);

    return _super.apply(this, arguments);
  }

  return TextInput;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/input/TextArea.js






function TextArea_createSuper(Derived) { var hasNativeReflectConstruct = TextArea_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function TextArea_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var TextArea_TextArea = /*#__PURE__*/function (_Input) {
  inherits_default()(TextArea, _Input);

  var _super = TextArea_createSuper(TextArea);

  function TextArea() {
    classCallCheck_default()(this, TextArea);

    return _super.apply(this, arguments);
  }

  createClass_default()(TextArea, [{
    key: "input",
    get: function get() {
      return this.querySelector('textarea');
    }
  }]);

  return TextArea;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/All.js
/* concated harmony reexport CaptchaInput */__webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaInput_CaptchaInput; });
/* concated harmony reexport EmailInput */__webpack_require__.d(__webpack_exports__, "b", function() { return EmailInput_EmailInput; });
/* concated harmony reexport FileInput */__webpack_require__.d(__webpack_exports__, "c", function() { return FileInput_FileInput; });
/* concated harmony reexport Form */__webpack_require__.d(__webpack_exports__, "d", ;
/* concated harmony reexport GoogleCaptcha */__webpack_require__.d(__webpack_exports__, "e", function() { return GoogleCaptcha_GoogleCaptcha; });
/* concated harmony reexport PasswordInput */__webpack_require__.d(__webpack_exports__, "f", function() { return PasswordInput_PasswordInput; });
/* concated harmony reexport PhoneNumberInput */__webpack_require__.d(__webpack_exports__, "g", function() { return PhoneNumberInput_PhoneNumberInput; });
/* concated harmony reexport Select */__webpack_require__.d(__webpack_exports__, "h", function() { return Select_Select; });
/* concated harmony reexport TextArea */__webpack_require__.d(__webpack_exports__, "i", function() { return TextArea_TextArea; });
/* concated harmony reexport TextInput */__webpack_require__.d(__webpack_exports__, "j", function() { return TextInput_TextInput; });












/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(36);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = 
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(47)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Form = /*#__PURE__*/function (_HTMLElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Form, _HTMLElement);

  var _super = _createSuper(Form);

  function Form() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Form);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Form, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.addEventListener('submit', this);
      this.form.setAttribute('novalidate', '');
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'submit') {
        event.preventDefault();

        if (this.submitting) {
          return;
        }

        if (!this.isValid()) {
          return;
        }

        this.submitForm();
      }
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var invalidInput = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.form.elements).find(;

      if (invalidInput) {
        return false;
      }

      if (this.captcha && !this.captcha.valid) {
        return false;
      }

      return true;
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      this.submitting = true;

      if (this.submitsInline) {
        this.submitInline();
      } else {
        this.form.submit();
      }
    }
  }, {
    key: "submitInline",
    value: function submitInline() {
      var _this = this;

      var apiUrl = this.form.getAttribute('action') || '';
      var method = this.form.getAttribute('method') || 'POST';
      var data = new FormData(this.form);
      fetch(apiUrl, {
        credentials: 'include',
        method: method,
        body: data
      }).then(.then(function (response) {
        return _this.handleSubmitResponse(response);
      }).catch(.finally(function () {
        _this.submitting = false;
      });
    }
  }, {
    key: "handleSubmitResponse",
    value: function handleSubmitResponse(text) {
      var parser = new DOMParser();
      var newDocument = parser.parseFromString(text, 'text/html');
      var responseForm = newDocument.documentElement.querySelector("[data-form-id=\"".concat(this.formId, "\"]"));
      this.parentElement.replaceChild(responseForm, this);
    }
  }, {
    key: "formId",
    get: function get() {
      return this.getAttribute('data-form-id');
    }
  }, {
    key: "form",
    get: function get() {
      return this.querySelector('form');
    }
  }, {
    key: "captcha",
    get: function get() {
      return this.querySelector('ps-captcha-input');
    }
  }, {
    key: "submitsInline",
    get: function get() {
      return this.hasAttribute('submits-inline');
    }
  }, {
    key: "submitting",
    set: function set(bool) {
      bool ? this.setAttribute('submitting', '') : this.removeAttribute('submitting');
    },
    get: function get() {
      return this.hasAttribute('submitting');
    }
  }]);

  return Form;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(HTMLElement));

/***/ }),
/* 15 */
/***/ (,
/* 16 */
/***/ (,
/* 17 */
/***/ (,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(24),
      __webpack_require__(25),
      __webpack_require__(13),
      __webpack_require__(48),
      __webpack_require__(49),
      __webpack_require__(50)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var _Flickity; }

}( window, );


/***/ }),
/* 19 */
/***/ (,
/* 20 */
/***/ (,
/* 21 */
/***/ (,
/* 22 */
/***/ (,
/* 23 */
/***/ (,
/* 24 */
/***/ (,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( ( window, ;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Banner; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Banner = /*#__PURE__*/function (_HTMLElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Banner, _HTMLElement);

  var _super = _createSuper(Banner);

  function Banner() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Banner);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Banner, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.closeButton = this.querySelector('[data-toggle-trigger]');
      this.checkSessionStorage();
    }
  }, {
    key: "checkSessionStorage",
    value: function checkSessionStorage() {
      var _this = this;

      if (sessionStorage.getItem('bannerStatus') !== 'noShow') {
        this.setAttribute('data-show', '');
        this.closeButton.addEventListener('click', ;
      }
    }
  }]);

  return Banner;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(HTMLElement));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyLoadImages; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Whenever we AJAX something, we should call an event on document.body that this class picks up
 *
 * let customEvent = new CustomEvent('Ajax:Rendered', {
 *   bubbles: true
 * })
 *
 * document.body.dispatchEvent(customEvent)
 */
var LazyLoadImages = /*#__PURE__*/function () {
  // with our All.js instantiation, this does not get called until DOM ready, so no check
  function LazyLoadImages() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LazyLoadImages);

    if ('IntersectionObserver' in window) {
      this.modernBrowsers();
      document.body.addEventListener('Ajax:Rendered', function () {
        _this.modernBrowsers();
      });
      return;
    }

    this.oldskool();
    document.body.addEventListener('Ajax:Rendered', ;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LazyLoadImages, [{
    key: "applySrc",
    value: function applySrc(element) {
      if (element.dataset.src) {
        element.src = element.dataset.src;
        element.removeAttribute('data-src');
      }

      if (element.dataset.srcset) {
        element.srcset = element.dataset.srcset;
        element.removeAttribute('data-srcset');
      }

      element.removeAttribute('data-lazy-load');
    }
  }, {
    key: "loadImage",
    value: function loadImage(image) {
      var _this2 = this;

      var picture = image.closest('picture');

      if (picture) {
        var lazyElements = picture.querySelectorAll('[data-src], [data-srcset]');
        lazyElements.forEach(;
      }

      if (!picture) {
        this.applySrc(image);
      }
    }
  }, {
    key: "modernBrowsers",
    value: function modernBrowsers() {
      var _this3 = this;

      var lazyImages = [].slice.call(document.querySelectorAll('img[data-lazy-load]'));
      var intersectionObserverOptions = {
        rootMargin: "".concat(window.innerWidth, "px ").concat(window.innerHeight, "px")
      };
      var lazyImageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;

            _this3.loadImage(lazyImage);

            lazyImageObserver.unobserve(lazyImage);
          }
        });
      }, intersectionObserverOptions);
      lazyImages.forEach(;
    }
  }, {
    key: "oldskool",
    value: function oldskool() {
      var _this4 = this;

      var active = false;
      var lazyImages = [].slice.call(document.querySelectorAll('img[data-lazy-load]'));

      var lazyLoad = function lazyLoad() {
        if (active === false) {
          active = true;
          setTimeout(function () {
            lazyImages.forEach(function (lazyImage) {
              var imageBounds = lazyImage.getBoundingClientRect();

              if (imageBounds.top <= window.innerHeight * 2 && imageBounds.bottom >= -window.innerHeight && window.getComputedStyle(lazyImage).display !== 'none') {
                _this4.loadImage(lazyImage);

                lazyImages = lazyImages.filter(;

                if (lazyImages.length === 0) {
                  document.removeEventListener('scroll', lazyLoad);
                  window.removeEventListener('resize', lazyLoad);
                  window.removeEventListener('orientationchange', lazyLoad);
                }
              }
            });
            active = false;
          }, 200);
        }
      };

      document.addEventListener('scroll', lazyLoad, true);
      window.addEventListener('resize', lazyLoad);
      window.addEventListener('orientationchange', lazyLoad);
      lazyLoad();
    }
  }]);

  return LazyLoadImages;
}();

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PsToggler; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Element that handles toggling state for another element on the page.
 * Note: Styling can be handled on an individual need basis by adding a class
 * to the element.
 */
var PsToggler = /*#__PURE__*/function (_HTMLElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PsToggler, _HTMLElement);

  var _super = _createSuper(PsToggler);

  function PsToggler() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PsToggler);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PsToggler, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      var myToggleName = this.getAttribute('data-toggle');
      var allMyToggles = this.querySelectorAll('[data-toggle-trigger="' + myToggleName + '"]');
      var self = this;
      /**
       * Handles toggling behavior. This is here so we can use a closure to pass self in
       *
       * Note: We set a data attribute on ourselves as well as the body.
       * It has the name of the toggle in it, so we can have multiple toggles at once on the page,
       * as well as toggles within toggles.
       */

      this.handleToggle = function (event) {
        event.preventDefault();
        var toggleName = this.getAttribute('data-toggle-trigger');
        var toggleDataAttribute = 'data-toggle-in';

        if (toggleName) {
          if (self.getAttribute(toggleDataAttribute) === toggleName) {
            document.body.removeAttribute(toggleDataAttribute);
            self.removeAttribute(toggleDataAttribute, toggleName);
          } else {
            document.body.setAttribute(toggleDataAttribute, toggleName);
            self.setAttribute(toggleDataAttribute, toggleName);
          }
        }
      };

      allMyToggles.forEach(function (item) {
        return item.addEventListener('click', _this.handleToggle, true);
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      var allToggles = this.querySelectorAll('[data-toggle-trigger]');
      allToggles.forEach(;
    }
  }]);

  return PsToggler;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(HTMLElement));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", ;
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);








function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var VerticalBookSearchModule = /*#__PURE__*/function (_Form) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(VerticalBookSearchModule, _Form);

  var _super = _createSuper(VerticalBookSearchModule);

  
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VerticalBookSearchModule, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.dateFrom = this.querySelector('[name=yrl]');
      this.dateTo = this.querySelector('[name=yrh]');
      this.validationErrors = this.querySelector(".".concat(this.dateFrom.parentElement.dataset.errorsElement));
      this.testRangeValidity = this.isValid.bind(this);
      this.dateFrom.addEventListener('focusout', this.testRangeValidity);
      this.dateTo.addEventListener('focusout', this.testRangeValidity);

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(VerticalBookSearchModule.prototype), "connectedCallback", this).call(this);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'submit') {
        this.hideDateRangeValidationError();
        event.preventDefault();

        if (!this.isValid()) {
          return;
        }

        this.form.submit();
      }
    }
  }, {
    key: "isValid",
    value: function isValid() {
      // test against pattern first
      var datesValidType = this.dateFrom.validity.valid && this.dateTo.validity.valid;
      var numFrom = Number(this.dateFrom.value);
      var numTo = Number(this.dateTo.value);
      var datesValidRange = numTo > numFrom || numTo === numFrom;

      if (!datesValidType || !datesValidRange) {
        this.showDateRangeValidationError();
        return false;
      }

      this.hideDateRangeValidationError();
      return true;
    }
  }, {
    key: "showDateRangeValidationError",
    value: function showDateRangeValidationError() {
      if (this.validationErrors.classList.contains('hidden')) {
        this.validationErrors.classList.remove('hidden');
      }
    }
  }, {
    key: "hideDateRangeValidationError",
    value: function hideDateRangeValidationError() {
      if (!this.validationErrors.classList.contains('hidden')) {
        this.validationErrors.classList.add('hidden');
      }
    }
  }]);

  return VerticalBookSearchModule;
}(_form_Form__WEBPACK_IMPORTED_MODULE_6__[/* Form */ "a"]);

/***/ }),
/* 30 */
/***/ (,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

;(function(global) {
'use strict';

var extend = __webpack_require__(46);

var hoverintent = function(el, over, out) {
  var x, y, pX, pY;
  var h = {},
    state = 0,
    timer = 0;

  var options = {
    sensitivity: 7,
    interval: 100,
    timeout: 0
  };

  function delay(el, outEvent, e) {
    if (timer) timer = clearTimeout(timer);
    state = 0;
    return outEvent.call(el, e);
  }

  function dispatch(e, event, over) {
    var tracker = 

    if (timer) timer = clearTimeout(timer);
    if (over) {
      pX = e.clientX;
      pY = e.clientY;
      el.addEventListener('mousemove', tracker, false);

      if (state !== 1) {
        timer = setTimeout(function() {
          compare(el, event, e);
        }, options.interval);
      }
    } else {
      el.removeEventListener('mousemove', tracker, false);

      if (state === 1) {
        timer = setTimeout(function() {
          delay(el, event, e);
        }, options.timeout);
      }
    }
    return this;
  }

  function compare(el, overEvent, e) {
    if (timer) timer = clearTimeout(timer);
    if ((Math.abs(pX - x) + Math.abs(pY - y)) < options.sensitivity) {
      state = 1;
      return overEvent.call(el, e);
    } else {
      pX = x;
      pY = y;
      timer = setTimeout( options.interval);
    }
  }

  // Public methods
  h.options = 

  
  
  h.remove = 

  if (el) {
    el.addEventListener('mouseover', dispatchOver, false);
    el.addEventListener('mouseout', dispatchOut, false);
  }

  return h;
};

global.hoverintent = hoverintent;
if ( true && module.exports) module.exports = hoverintent;
})(this);


/***/ }),
/* 32 */
/***/ (,
/* 33 */
/***/ (,
/* 34 */
/***/ (,
/* 35 */
/***/ (function(module, exports) {


module.exports = _isNativeReflectConstruct;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);


module.exports = _superPropBase;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(18),
      __webpack_require__(51),
      __webpack_require__(53),
      __webpack_require__(54),
      __webpack_require__(55),
      __webpack_require__(56),
      __webpack_require__(57)
    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, ;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(  window, );


/***/ }),
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity hash v1.0.3
 * Enable hash navigation for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

(  window, function factory( Flickity ) {

'use strict';

Flickity.createMethods.push('_createHash');

var proto = Flickity.prototype;

proto._createHash = function() {
  if ( !this.options.hash ) {
    return;
  }
  this.connectedHashLinks = [];
  // hash link listener
  // use HTML5 history pushState to prevent page scroll jump
  this.onHashLinkClick = function( event ) {
    event.preventDefault();
    this.selectCell( event.currentTarget.hash );
    history.replaceState( null, '', event.currentTarget.hash );
  }.bind( this );

  // events
  this.on( 'activate', this.activateHash );
  this.on( 'deactivate', this.deactivateHash );
};

proto.activateHash = function() {
  this.on( 'change', this.onChangeHash );

  // overwrite initialIndex
  if ( this.options.initialIndex === undefined && location.hash ) {
    var cell = this.queryCell( location.hash );
    if ( cell ) {
      this.options.initialIndex = this.getCellSlideIndex( cell );
    }
  }

  this.connectHashLinks();
};


proto.deactivateHash = 

proto.onChangeHash = 


proto.connectHashLinks = 

// used to test if link is on same page
var proxyLink = document.createElement('a');

proto.connectHashLink = function( link ) {
  if ( !link.hash ) {
    return;
  }
  // check that link is for the same page
  proxyLink.href = link.href;
  if ( proxyLink.pathname != location.pathname ) {
    return;
  }
  var cell = this.queryCell( link.hash );
  if ( !cell ) {
    return;
  }
  link.addEventListener( 'click', this.onHashLinkClick );
  this.connectedHashLinks.push( link );
};

proto.disconnectHashLinks = function() {
  this.connectedHashLinks.forEach( function( link ) {
    link.removeEventListener( 'click', this.onHashLinkClick );
  }, this );
  this.connectedHashLinks = [];
};

// -----  ----- //

return Flickity;

}));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {"object"==typeof navigator&&this,();
//# sourceMappingURL=plyr.min.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(58),
        __webpack_require__(25)
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 44 */
/***/ (,
/* 45 */
/***/ (,
/* 46 */
/***/ (,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

(  window, );


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(25)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( getSize ) {
      return factory( window, getSize );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(13)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( utils ) {
      return factory( window, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(18),
      __webpack_require__(52),
      __webpack_require__(13)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, Unidragger, utils ) {
      return factory( window, Flickity, Unidragger, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(38)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Unipointer ) {
      return factory( window, Unipointer );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, Unipointer ) {

'use strict';

// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
proto._bindHandles = 

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = 

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  SELECT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

// dismiss inputs with text fields. flickity#403, flickity#404
proto.okayPointerDown = 

// kludge to blur previously focused input
proto.pointerDownBlur = 

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = 

// base pointer move logic
proto._dragPointerMove = 

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = 

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = 

proto._dragPointerUp = 

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = 

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = 

proto.dragMove = 

// dragEnd
proto._dragEnd = 

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = 

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = 

proto.staticClick = 

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(18),
      __webpack_require__(38),
      __webpack_require__(13)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, Unipointer, utils ) {
      return factory( window, Flickity, Unipointer, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(18),
      __webpack_require__(38),
      __webpack_require__(13)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(24),
      __webpack_require__(13),
      __webpack_require__(18)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(18),
      __webpack_require__(13)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(18),
      __webpack_require__(13)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(24),
        __webpack_require__(25),
        __webpack_require__(13),
        __webpack_require__(59)
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, );


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

(  window, );


/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./styleguide/All.less
var All = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(2);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(0);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(5);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./styleguide/util/formatSeconds.js
var formatSeconds = function formatSeconds(time) {
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor(time % 3600 / 60);
  var seconds = Math.floor(time % 60);
  var output = '';

  if (hours > 0) {
    output += "".concat(hours, ":").concat(minutes < 10 ? '0' : '');
  }

  output += "".concat(minutes, ":").concat(seconds < 10 ? '0' : '');
  output += "".concat(seconds);
  return output;
};
// CONCATENATED MODULE: ./styleguide/core/audio/AudioPlayer.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var updateEvents = ['timeupdate', 'loadedmetadata', 'ended', 'seeked', 'play', 'pause', 'volumechange'];
var skipInterval = 30;
var AudioPlayer_AudioPlayer = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(AudioPlayer, _HTMLElement);

  var _super = _createSuper(AudioPlayer);

  function AudioPlayer() {
    classCallCheck_default()(this, AudioPlayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(AudioPlayer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.player = this.querySelector('audio');
      this.timeEl = this.querySelector('.HTML5AudioPlayer-time');
      this.seekInput = this.querySelector('[data-change="seek"]');
      this.progressEl = this.querySelector('.HTML5AudioPlayer-seekTrackProgress');
      this.addEventListener('click', this);
      this.addEventListener('input', this);
      this.addEventListener('change', this);
      this.player.addEventListener('play', this);
      this.player.addEventListener('pause', this);
      this.player.addEventListener('loadedmetadata', this);
      this.player.addEventListener('timeupdate', this);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.target.matches('[data-click="togglePlayback"]')) {
        this.player.paused ? this.player.play() : this.player.pause();
      }

      if (event.target.matches('[data-click="toggleMute"]')) {
        this.player.muted = !this.player.muted;
      }

      if (event.target.matches('[data-click="rewind"]')) {
        this.player.currentTime = this.player.currentTime - skipInterval;
      }

      if (event.target.matches('[data-click="forward"]')) {
        this.player.currentTime = this.player.currentTime + skipInterval;
      }

      if (event.type === 'input' && event.target.matches('[data-change="seek"]')) {
        this.seeking = true;
      }

      if (event.type === 'change' && event.target.matches('[data-change="seek"]')) {
        this.seeking = false;
        this.player.currentTime = this.player.duration * event.target.value / 100;
      }

      if (updateEvents.indexOf(event.type) >= 0) {
        this.render();
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.timeEl.innerHTML = "".concat(formatSeconds(this.player.currentTime), " / ").concat(formatSeconds(this.player.duration));
      this.muted = this.player.muted;
      this.playing = !this.player.paused;
      this.progressEl.style.width = "".concat(this.player.currentTime / this.player.duration * 100, "%");

      if (!this.seeking) {
        this.seekInput.value = this.player.currentTime / this.player.duration * 100;
      }
    }
  }, {
    key: "playing",
    set: function set(bool) {
      bool ? this.setAttribute('playing', '') : this.removeAttribute('playing');
    }
  }, {
    key: "muted",
    set: function set(bool) {
      bool ? this.setAttribute('muted', '') : this.removeAttribute('muted');
    }
  }]);

  return AudioPlayer;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// EXTERNAL MODULE: ./styleguide/core/banner/Banner.js
var Banner = __webpack_require__(26);

// CONCATENATED MODULE: ./styleguide/global/CustomDropdown.js







function CustomDropdown_createSuper(Derived) { var hasNativeReflectConstruct = CustomDropdown_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function CustomDropdown_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable no-undef, camelcase */
var CustomDropdown_CustomDropdown = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(CustomDropdown, _HTMLElement);

  var _super = CustomDropdown_createSuper(CustomDropdown);

  function CustomDropdown() {
    classCallCheck_default()(this, CustomDropdown);

    return _super.apply(this, arguments);
  }

  createClass_default()(CustomDropdown, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.el = this;
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.el.addEventListener('click', function (e) {
        if (!_this.el.getAttribute('dropdown-open') || _this.el.getAttribute('dropdown-open').toString() === 'false') {
          _this.hideAllDropdowns();

          _this.toggleDropdownItems('show');
        } else {
          _this.hideAllDropdowns();
        }
      });
      this.el.setAttribute('listener-active', true);
      document.addEventListener('click', function (e) {
        var path = e.path || e.composedPath && e.composedPath();
        var dropdownClicked = false;
        var i;

        for (i = 0; i < path.length; i++) {
          var element = path[i];

          if (element.classList && element.classList.toString().indexOf('CustomDropdown') !== -1) {
            dropdownClicked = true;
          }
        }

        if (!dropdownClicked) {
          _this.hideAllDropdowns();
        }
      });
    }
  }, {
    key: "toggleDropdownItems",
    value: function toggleDropdownItems(method) {
      var isDropdownOpen = method === 'show';
      this.el.setAttribute('dropdown-open', isDropdownOpen);
    }
  }, {
    key: "hideAllDropdowns",
    value:   }]);

  return CustomDropdown;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(19);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(30);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(8);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./styleguide/util/Throttle.js
function throttle(interval, throttledFunction) {
  if (interval <= 0) {
    return throttledFunction;
  }

  var lastTrigger = 0;
  var timeout;
  var lastArguments;
  return function () {
    lastArguments = arguments; // Already scheduled to run.

    if (timeout) {
      return;
    }

    var context = this;
    var now = +Date.now();
    var delay = interval - now + lastTrigger; // Waited long enough so execute.

    if (delay <= 0) {
      lastTrigger = now;
      throttledFunction.apply(context, lastArguments); // Schedule for later.
    } else {
      timeout = setTimeout(function () {
        lastTrigger = now;
        timeout = null;
        throttledFunction.apply(context, lastArguments);
      }, delay);
    }
  };
}
// CONCATENATED MODULE: ./styleguide/core/carousel/CarouselScrollingIOSHack.js
function carouselScrollingIOSHack() {
  var iOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;

  if (this.flickity && iOS && !this.carouselScrollingIOSHackSet) {
    // TVAZ-747, MFRM-338 ios bug
    this.carouselScrollingIOSHackSet = true;
    var startX = 0;

    this.el.ontouchstart = 

    this.el.ontouchmove = function (e) {
      if (Math.abs(e.touches[0].clientX - startX) > 5 && e.cancelable) {
        e.preventDefault();
      }
    };
  }
}
// CONCATENATED MODULE: ./styleguide/core/carousel/CarouselAbstract.js









 // import Flickity from 'flickity'


var DEFAULT_FLICKITY_OPTIONS = {
  adaptiveHeight: false,
  imagesLoaded: true,
  cellAlign: 'left',
  selectedAttraction: 0.15,
  friction: 0.9,
  dragThreshold: 10
};
var DEFAULT_BREAKPOINT_OPTIONS = {
  mobile: ['mq-xs', 'mq-sm', 'mq-md'],
  desktop: ['mq-lg', 'mq-hk', 'mq-xl']
};
var CarouselAbstract_Carousel = /*#__PURE__*/function () {
  function Carousel(el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      flickity: {},
      breakpoints: {}
    };

    classCallCheck_default()(this, Carousel);

    this.el = el;

    var defaultFlickityOptions = _objectSpread(_objectSpread({}, DEFAULT_FLICKITY_OPTIONS), options.flickity.default);

    this.options = {
      flickity: {
        default: defaultFlickityOptions,
        mobile: _objectSpread(_objectSpread({}, defaultFlickityOptions), options.flickity.mobile),
        desktop: _objectSpread(_objectSpread({}, defaultFlickityOptions), options.flickity.desktop)
      },
      breakpoints: _objectSpread(_objectSpread({}, DEFAULT_BREAKPOINT_OPTIONS), options.breakpoints)
    };
    this.init();
  }

  createClass_default()(Carousel, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.carousel = this.el.querySelector(Carousel.selectors.slides);
      this.mobileDisable = this.carousel.getAttribute(Carousel.selectors.mobileDisabled);

      try {
        this.desktopDisable = this.carousel.getAttribute(Carousel.selectors.desktopDisabled);
      } catch (e) {
        return;
      }

      this.carouselItems.forEach(; // waiting until window load to trigger carousels. They still look good before
      // window load, and we have run into race condition and image issues sometimes
      // when we kick it off too fast

      if (document.readyState === 'complete') {
        this.handleWindowLoad();
      } else {
        window.addEventListener('load', function () {
          return _this.handleWindowLoad();
        });
      } // on resize, we recheck our options against media queries and rebuild the entire
      // carousel if we changed options


      window.addEventListener('resize', throttle(250, function () {
        _this.handleOptions();

        _this.rebuildCarouselIfChanged();
      }));
      this.el.addEventListener('click', function (_ref) {
        var target = _ref.target;

        if (_this.flickity && target.matches('[data-click="next"]')) {
          _this.flickity.next();
        }

        if (_this.flickity && target.matches('[data-click="previous"]')) {
          _this.flickity.previous();
        }
      });
    } // for accessibility, since flickity does not do this for us. We want anything hidden
    // to be tabindex -1 along with aria-hidden, as tab navigation can jump into hidden
    // carousel slides if there are links there

  }, {
    key: "setTabIndexing",
    value: function setTabIndexing() {
      this.flickity.cells.forEach(function (item) {
        if (item.element) {
          if (item.element.getAttribute('aria-hidden') === 'true') {
            item.element.setAttribute('tabindex', '-1');
          } else {
            item.element.setAttribute('tabindex', '0');
          }
        }
      });
    }
  }, {
    key: "handleCellSelect",
    value: function handleCellSelect() {
      var _this2 = this;

      this.setTabIndexing();
      this.updateCounter();
      this.el.querySelectorAll('[data-click="previous"]').forEach(function (previousButton) {
        if (_this2.flickityOptions.wrapAround) return;
        var index = _this2.flickity.selectedIndex - 1;
        previousButton.disabled = !_this2.flickity.cells[index];
      });
      this.el.querySelectorAll('[data-click="next"]').forEach(function (nextButton) {
        if (_this2.flickityOptions.wrapAround) return;
        var index = _this2.flickity.selectedIndex + 1;
        nextButton.disabled = !_this2.flickity.cells[index];
      });
    }
  }, {
    key: "handleWindowLoad",
    value: function handleWindowLoad() {
      this.handleOptions();
      this.initCarousel();
    }
  }, {
    key: "updateCounter",
    value: function updateCounter() {
      var _this3 = this;

      this.el.querySelectorAll('[class$="-currentIndex"]').forEach(;
    }
  }, {
    key: "getMediaQuery",
    value: function getMediaQuery() {
      var mqValue = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content') || false;

      if (mqValue) {
        return mqValue.replace(/["']/g, '');
      } else {
        return false;
      }
    } // we set or reset options here based on the current media query
    // if a conditional has mq specific options, we check to see if the mq
    // changed, and if it did, we set a global changed var so that we
    // can rebuild the carousel

  }, {
    key: "handleOptions",
    value: function handleOptions() {
      this.didMQChange() ? this.optionsChanged = true : this.optionsChanged = false;
    }
  }, {
    key: "didMQChange",
    value: function didMQChange() {
      this.changedBreakpoints = false;

      if (this.getMediaQuery() === 'mq-xs') {
        if (this.breakpoint !== 'xs') {
          this.changedBreakpoints = true;
          this.breakpoint = 'xs';
          this.flickityOptions = this.options.flickity.mobile || this.options.flickity.default;
        }
      }

      if (this.getMediaQuery() === 'mq-sm') {
        if (this.breakpoint !== 'sm') {
          this.changedBreakpoints = true;
          this.breakpoint = 'sm';
          this.flickityOptions = this.options.flickity.mobile || this.options.flickity.default;
        }
      }

      if (this.getMediaQuery() === 'mq-md') {
        if (this.breakpoint !== 'md') {
          this.changedBreakpoints = true;
          this.breakpoint = 'md';
          this.flickityOptions = this.options.flickity.mobile || this.options.flickity.default;
        }
      }

      if (this.getMediaQuery() === 'mq-lg') {
        if (this.breakpoint !== 'lg') {
          this.changedBreakpoints = true;
          this.breakpoint = 'lg';
          this.flickityOptions = this.options.flickity.desktop || this.options.flickity.default;
        }
      }

      if (this.getMediaQuery() === 'mq-hk') {
        if (this.breakpoint !== 'hk') {
          this.changedBreakpoints = true;
          this.breakpoint = 'hk';
          this.flickityOptions = this.options.flickity.desktop || this.options.flickity.default;
        }
      }

      if (this.getMediaQuery() === 'mq-xl') {
        if (this.breakpoint !== 'xl') {
          this.changedBreakpoints = true;
          this.breakpoint = 'xl';
          this.flickityOptions = this.options.flickity.desktop || this.options.flickity.default;
        }
      }

      return this.changedBreakpoints;
    }
  }, {
    key: "rebuildCarouselIfChanged",
    value:   }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.flickity) {
        this.flickity.destroy();
        this.el.removeAttribute('data-flickity-enabled');
      }
    }
  }, {
    key: "resizeCarousel",
    value: function resizeCarousel() {
      this.flickity.resize();
    }
  }, {
    key: "initCarousel",
    value: function () {
      var _initCarousel = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this4 = this;

        var _yield$import, Flickity;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 37, 7));

              case 2:
                _yield$import = _context.sent;
                Flickity = _yield$import.default;

                if (!(this.el.scrollWidth <= this.el.clientWidth)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                this.flickity = new Flickity(this.carousel, this.flickityOptions);
                this.el.setAttribute(Carousel.selectors.carouselEnabled, '');
                this.flickity.on('cellSelect', function () {
                  _this4.handleCellSelect();
                });
                this.resizeCarousel();
                carouselScrollingIOSHack.call(this);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initCarousel() {
        return _initCarousel.apply(this, arguments);
      }

      return initCarousel;
    }()
  }, {
    key: "carouselItems",
    get: function get() {
      return toConsumableArray_default()(this.el.querySelectorAll(Carousel.selectors.slide) || []);
    }
  }]);

  return Carousel;
}();

defineProperty_default()(CarouselAbstract_Carousel, "selectors", {
  slide: '[data-slide]',
  slides: '[data-slides]',
  flickityEnabled: '.flickity-enabled',
  desktopDisabled: 'data-disable-desktop',
  mobileDisabled: 'data-disable-mobile',
  enhancement: 'CarouselEnhancement',
  carouselEnabled: 'data-flickity-enabled'
});
// CONCATENATED MODULE: ./styleguide/core/carousel/EnhancementCarousel.js







function EnhancementCarousel_createSuper(Derived) { var hasNativeReflectConstruct = EnhancementCarousel_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function EnhancementCarousel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var EnhancementCarousel_EnhancementCarousel = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(EnhancementCarousel, _HTMLElement);

  var _super = EnhancementCarousel_createSuper(EnhancementCarousel);

  function EnhancementCarousel() {
    classCallCheck_default()(this, EnhancementCarousel);

    return _super.apply(this, arguments);
  }

  createClass_default()(EnhancementCarousel, [{
    key: "connectedCallback",
    value:   }, {
    key: "createCarousel",
    value: function createCarousel() {
      var _this = this;

      this.carousel = new CarouselAbstract_Carousel(this, {
        flickity: {
          default: {
            lazyLoad: true,
            pageDots: false,
            wrapAround: false,
            groupCells: false,
            autoPlay: false,
            prevNextButtons: false,
            contain: true,
            on: {
              staticClick: function staticClick() {
                _this.onStaticClick();
              },
              change:             }
          },
          desktop: {
            prevNextButtons: false,
            pageDots: false
          }
        }
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.carousel.destroyCarousel();
    }
  }, {
    key: "enterFullscreen",
    value: function enterFullscreen() {
      document.documentElement.style.setProperty('overflow', 'hidden');
      this._placeholder = document.createElement('div');
      this._placeholder.style.height = "".concat(this.clientHeight, "px");
      this.parentNode.insertBefore(this._placeholder, this);
      this.fullscreen = true;
      this.carousel.destroyCarousel();
      this.carousel.initCarousel();
    }
  }, {
    key: "exitFullscreen",
    value: function exitFullscreen() {
      document.documentElement.style.removeProperty('overflow');

      if (this._placeholder) {
        this.parentNode.removeChild(this._placeholder);
        delete this._placeholder;
      }

      this.fullscreen = false;
      this.carousel.destroyCarousel();
      this.carousel.initCarousel();
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'keydown' && event.key === 'Escape' && this.fullscreen) {
        this.exitFullscreen();
      }

      if (event.type === 'click' && this.fullscreen && event.target.matches("[data-click='exit-fullscreen']") || event.target.closest("[data-click='exit-fullscreen']")) {
        this.exitFullscreen();
        event.preventDefault();
      }
    }
  }, {
    key: "onStaticClick",
    value:   }, {
    key: "onSlideChange",
    value: function onSlideChange(index) {
      var slideInfo = this.carousel.flickity.selectedSlide.cells[0].element.querySelector('.CarouselSlide-info').cloneNode(true);
      var carouselInfo = this.querySelector('.EnhancementCarousel-info');
      carouselInfo.innerHTML = '';
      carouselInfo.appendChild(slideInfo);
      this.preloadImage(index + 1);
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      window.addEventListener('keydown', this);
      this.addEventListener('click', this);
    }
  }, {
    key: "preloadImage",
    value: function preloadImage(slideIndex) {
      var slideElement;

      try {
        slideElement = this.carousel.flickity.cells[slideIndex].element;
      } catch (error) {}

      if (slideElement) {
        var lazyImages = slideElement.querySelectorAll('[data-lazy-load="true"]');
        lazyImages.forEach(function (image) {
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }

          if (image.dataset.srcset) {
            image.srcset = image.dataset.srcset;
            image.removeAttribute('data-srcset');
          }

          image.removeAttribute('data-lazy-load');
        });
      }
    }
  }, {
    key: "fullscreen",
    get: function get() {
      return this.hasAttribute('fullscreen');
    },
    set: function set(bool) {
      bool ? this.setAttribute('fullscreen', '') : this.removeAttribute('fullscreen');
    }
  }]);

  return EnhancementCarousel;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/directory/EcommerceList.js






function EcommerceList_createSuper(Derived) { var hasNativeReflectConstruct = EcommerceList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function EcommerceList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EcommerceList_EcommerceList = /*#__PURE__*/function (_window$HTMLElement) {
  inherits_default()(EcommerceList, _window$HTMLElement);

  var _super = EcommerceList_createSuper(EcommerceList);

  function EcommerceList() {
    classCallCheck_default()(this, EcommerceList);

    return _super.apply(this, arguments);
  }

  createClass_default()(EcommerceList, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.URI = this.getAttribute('data-cart-uri') || '/servlet/ShopBasketPL';
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      var quantityEls = this.querySelectorAll('.Select-select');
      this.querySelector('.EcommerceList-button').addEventListener('click', function () {
        var url = _this.buildBasketUrl(quantityEls);

        if (url) {
          window.location.href = url;
        }
      });
      quantityEls.forEach(function (item) {
        _this.updateTotal(item);

        item.addEventListener('change', ;
      });
    }
  }, {
    key: "updateTotal",
    value: function updateTotal(selectBox) {
      var select = selectBox;
      var price = select.options[select.selectedIndex].getAttribute('data-price');
      var targetEl = select.closest('[data-quantity]').querySelector('.price');

      if (targetEl) {
        targetEl.textContent = price;
      }
    }
  }, {
    key: "buildBasketUrl",
    value: function buildBasketUrl(quantityEls) {
      var items = [];
      quantityEls.forEach(function (element) {
        var id = element.getAttribute('id');
        var quantity = element.value;
        var i;

        for (i = 0; i < quantity; i++) {
          items.push(id);
        }
      });

      if (items.length > 0) {
        return this.URI += '?ac=a&ik=' + items.join('&ik=');
      }

      return this.URI;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      this.querySelector('.EcommerceList-button').removeEventListener('click', this);
      this.querySelectorAll('.Select-select').forEach(;
    }
  }]);

  return EcommerceList;
}(window.HTMLElement);
// EXTERNAL MODULE: ./styleguide/core/form/All.js + 10 modules
var form_All = __webpack_require__(11);

// CONCATENATED MODULE: ./styleguide/util/MediaQuery.js
var MediaQuery_DEFAULT_BREAKPOINT_OPTIONS = {
  mobile: ['mq-xs', 'mq-sm', 'mq-md'],
  desktop: ['mq-lg', 'mq-hk', 'mq-xl']
};
function getMediaQuery() {
  var mqValue = window.getComputedStyle(document.body, '::before').getPropertyValue('content') || false;

  if (mqValue) {
    return mqValue.replace(/["']/g, '');
  } else {
    return 'false';
  }
}
function didMQChange() {
  var changedBreakpoints = false;
  var breakpoint = '';

  if (getMediaQuery() === 'mq-xs') {
    if (breakpoint !== 'xs') {
      changedBreakpoints = true;
      breakpoint = 'xs';
    }
  }

  if (getMediaQuery() === 'mq-sm') {
    if (breakpoint !== 'sm') {
      changedBreakpoints = true;
      breakpoint = 'sm';
    }
  }

  if (getMediaQuery() === 'mq-md') {
    if (breakpoint !== 'md') {
      changedBreakpoints = true;
      breakpoint = 'md';
    }
  }

  if (getMediaQuery() === 'mq-lg') {
    if (breakpoint !== 'lg') {
      changedBreakpoints = true;
      breakpoint = 'lg';
    }
  }

  if (getMediaQuery() === 'mq-hk') {
    if (breakpoint !== 'hk') {
      changedBreakpoints = true;
      breakpoint = 'hk';
    }
  }

  if (getMediaQuery() === 'mq-xl') {
    if (breakpoint !== 'xl') {
      changedBreakpoints = true;
      breakpoint = 'xl';
    }
  }

  return changedBreakpoints;
}
// CONCATENATED MODULE: ./styleguide/core/list/ListCarouselG.js









function ListCarouselG_createSuper(Derived) { var hasNativeReflectConstruct = ListCarouselG_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ListCarouselG_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* global HTMLElement */
// import Flickity from 'flickity-as-nav-for'

var ListCarouselG_ListCarouselG = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(ListCarouselG, _HTMLElement);

  var _super = ListCarouselG_createSuper(ListCarouselG);

  function ListCarouselG() {
    classCallCheck_default()(this, ListCarouselG);

    return _super.apply(this, arguments);
  }

  createClass_default()(ListCarouselG, [{
    key: "connectedCallback",
    value:   }, {
    key: "initCarousel",
    value: function () {
      var _initCarousel = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _yield$import, Flickity;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.t.bind(null, 86, 7));

              case 2:
                _yield$import = _context.sent;
                Flickity = _yield$import.default;
                this.handleOptions();
                this.flickity = new Flickity(this.carouselText, this.textOptions);
                this.flickityNav = new Flickity(this.carouselGallery, this.galleryOptions);
                this.setAttribute('data-flickity-enabled', 'true');
                this.setTabIndexing();
                this.handleSlideChange(); // this.resizeCarousel()

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      
      return initCarousel;
    }()
  }, {
    key: "handleOptions",
    value: function handleOptions() {
      var _this2 = this;

      this.galleryOptions = {
        adaptiveHeight: true,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: this.carouselGalleryItems.length > 1,
        cellAlign: this.mediaAlignment,
        autoPlay: this.hasAttribute('data-enable-carousel-autoplay') ? 6000 : false
      };

      if (MediaQuery_DEFAULT_BREAKPOINT_OPTIONS.mobile.includes(getMediaQuery())) {
        this.galleryOptions.cellAlign = 'center';
      }

      this.textOptions = {
        pageDots: false,
        draggable: false,
        groupCells: false,
        adaptiveHeight: true,
        prevNextButtons: false,
        asNavFor: this.carouselGallery,
        wrapAround: true,
        on: {
          ready:         }
      };
    }
  }, {
    key: "handleSlideChange",
    value: function handleSlideChange() {
      var _this3 = this;

      this.flickity.on('change', ;
    }
  }, {
    key: "addDataTags",
    value: function addDataTags() {
      var btnPrevNext = this.carouselGallery.querySelectorAll('.flickity-prev-next-button');
      btnPrevNext.forEach(function (button) {
        var action = button.classList.contains('previous') ? 'previous' : 'next';
        button.setAttribute('data-csa-c-type', 'action');
        button.setAttribute('data-csa-c-action', "".concat(action, "-carousel-card"));
      });
      this.updatePrevCardDataTag(this.flickity.selectedIndex);
    }
  }, {
    key: "updatePrevCardDataTag",
    value: function updatePrevCardDataTag(prevIndex) {
      var btnPrevious = this.carouselGallery.querySelector('.flickity-prev-next-button.previous');
      btnPrevious.setAttribute('data-csa-c-previous-carousel-card', prevIndex > 0 ? prevIndex : this.flickity.slides.length);
    }
  }, {
    key: "setTabIndexing",
    value: function setTabIndexing() {
      this.flickity.cells.forEach(function (item) {
        if (item.element) {
          if (item.element.getAttribute('aria-hidden') === 'true') {
            item.element.setAttribute('tabindex', '-1');
          } else {
            item.element.setAttribute('tabindex', '0');
          }
        }
      });
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.flickity) {
        this.flickity.destroy();
        this.removeAttribute('data-flickity-enabled');
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.flickity.destroyCarousel();
    }
  }, {
    key: "mediaAlignment",
    get: function get() {
      if (this.getAttribute('data-media-horizontal') === 'left') {
        return 'right';
      } else {
        return 'left';
      }
    }
  }, {
    key: "rootSelector",
    get: function get() {
      if (this.getAttribute('data-selector')) {
        return this.getAttribute('data-selector');
      } else {
        return this.className;
      }
    }
  }, {
    key: "carouselText",
    get: function get() {
      return this.querySelector(".".concat(this.rootSelector, "-text"));
    }
  }, {
    key: "carouselGallery",
    get: function get() {
      return this.querySelector(".".concat(this.rootSelector, "-gallery"));
    }
  }, {
    key: "carouselGalleryItems",
    get: function get() {
      return this.carouselGallery.querySelectorAll(".".concat(this.rootSelector, "-gallery-item"));
    }
  }]);

  return ListCarouselG;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/list/ListLoadMore.js








function ListLoadMore_createSuper(Derived) { var hasNativeReflectConstruct = ListLoadMore_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ListLoadMore_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULTS = {
  selItems: '[data-list-loadmore-items]',
  selPagination: '[data-list-loadmore-pagination]',
  pageCacheRegex: /(page|p)=([0-9]*)$/ // regex where first item looksup key holding page number, and second item is the page number. This caches those items to ensure not recalling em

};
var PLUGIN_DATA_SEL = 'data-list-loadmore';
var ListLoadMore_ListLoadMore = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(ListLoadMore, _HTMLElement);

  var _super = ListLoadMore_createSuper(ListLoadMore);

  function ListLoadMore() {
    classCallCheck_default()(this, ListLoadMore);

    return _super.apply(this, arguments);
  }

  createClass_default()(ListLoadMore, [{
    key: "connectedCallback",
    value: function connectedCallback(settings) {
      this.el = this;
      this.settings = Object.assign({}, DEFAULTS, settings);
      this.el.setAttribute(PLUGIN_DATA_SEL, ''); // flag for interaction use

      this.pageHrefCache = [1];
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      this.elItems = this.el.querySelector(this.settings.selItems);
      this.setBinds();
    }
    /**
     * @param {string} url - url which to fetch to
     * @param {function} customRender - custom rendering function, to bypass plugins default render, which is to append items to this.elItems
     * customRender call sends the following
     * - elItems - List items container
     * - elPagination - List Paginatin container
     * - elTempDiv - Full ajax response as a DOM node
     * - elIndex - Unique identifier for THIS list... Tells you that this is the nth list in document
     */

  }, {
    key: "loadMore",
    value: function loadMore(url, customRender) {
      var _this = this;

      var self = this;
      var className = this.el.className;
      var elsClassMatches = ListLoadMore.findClassNameMatches(document, className);
      var elIndex = Array.from(elsClassMatches).indexOf(this.el);
      this.pageHrefCache.push(this.getPageNum(url));
      this.el.setAttribute(PLUGIN_DATA_SEL, 'loading');
      window.fetch(url, {
        credentials: 'include'
      }).then(function (response) {
        _this.el.setAttribute(PLUGIN_DATA_SEL, '');

        return response.text();
      }).then(function (text) {
        var elTempDiv = document.createElement('div');
        elTempDiv.innerHTML = text;
        var elsClassMatches = ListLoadMore.findClassNameMatches(elTempDiv, className);
        var elItems = elsClassMatches[elIndex].querySelector(self.settings.selItems);
        var elPagination = elsClassMatches[elIndex].querySelector(self.settings.selPagination);

        if (typeof customRender === 'function') {
          customRender(elItems, elPagination, elsClassMatches[elIndex]);
        } else {
          _this.render(elItems, elPagination, self.elItems, self.elPagination);
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "next",
    value: function next(customRender) {
      if (this.elPagination) {
        var elItem = this.elPagination.querySelector('a');

        if (elItem) {
          this.loadMore(elItem.href, customRender);
        }
      }
    }
  }, {
    key: "setBinds",
    value: function setBinds() {
      var _this2 = this;

      if (this.elPagination) {
        this.elPagination.addEventListener('click', function (e) {
          var elTarget = e.target;

          if (elTarget.nodeName.toUpperCase() === 'A') {
            e.preventDefault();

            _this2.loadMore(elTarget.href);
          }
        });
      }
    }
  }, {
    key: "getPageNum",
    value: function getPageNum(url) {
      try {
        var regexResult = this.settings.pageCacheRegex.exec(url);
        return parseInt(regexResult[2]);
      } catch (e) {
        console.info('ListLoadMore', "".concat(url, " not a new page number"));
        return 0;
      }
    }
  }, {
    key: "updatePaginationDOM",
    value: function updatePaginationDOM(ajaxPagination) {
      var _this3 = this;

      var elPaginationLinks = toConsumableArray_default()(ajaxPagination.querySelectorAll(':scope > a'));

      elPaginationLinks.forEach(function (elLink) {
        if (_this3.pageHrefCache.indexOf(_this3.getPageNum(elLink.href)) >= 0) {
          // remove link if already used | in pageHrefCache
          elLink.parentNode.removeChild(elLink);
        }
      });
      this.elPagination.innerHTML = ajaxPagination.innerHTML;
    }
  }, {
    key: "render",
    value: function render(ajaxItems, ajaxPagination) {
      if (ajaxItems) {
        this.elItems.insertAdjacentHTML('beforeend', ajaxItems.innerHTML);
      }

      if (ajaxPagination) {
        this.updatePaginationDOM(ajaxPagination);
      } else {
        this.elPagination.parentNode.removeChild(this.elPagination);
      }

      this.dispatchRendered();
    }
  }, {
    key: "dispatchRendered",
    value: function dispatchRendered() {
      var customEvent = new CustomEvent('Ajax:Rendered', {
        bubbles: true
      });
      document.body.dispatchEvent(customEvent);
    }
  }, {
    key: "elPagination",
    get:   }], [{
    key: "findClassNameMatches",
    value:   }]);

  return ListLoadMore;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// EXTERNAL MODULE: ./node_modules/hoverintent/index.js
var hoverintent = __webpack_require__(31);
var hoverintent_default = /*#__PURE__*/__webpack_require__.n(hoverintent);

// EXTERNAL MODULE: ./node_modules/flickity-hash/hash.js
var hash = __webpack_require__(41);
var hash_default = /*#__PURE__*/__webpack_require__.n(hash);

// CONCATENATED MODULE: ./styleguide/core/gallery/GalleryPage.js







function GalleryPage_createSuper(Derived) { var hasNativeReflectConstruct = GalleryPage_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function GalleryPage_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable no-unused-vars */


var GalleryPage_GalleryPage = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(GalleryPage, _HTMLElement);

  var _super = GalleryPage_createSuper(GalleryPage);

  function GalleryPage() {
    classCallCheck_default()(this, GalleryPage);

    return _super.apply(this, arguments);
  }

  createClass_default()(GalleryPage, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      window.addEventListener('load', function () {
        _this.cacheElements();

        _this.dealWithSlideHover();

        _this.slideClickEvent(); // if hash in URL, launch carousel


        var startSlideFromHash = parseInt(window.location.hash.slice(7));

        if (startSlideFromHash > -1) {
          var startSlide = startSlideFromHash - 1;

          _this.buildCarousel(startSlide);

          _this.flickity.on('change', function (index) {
            _this.handleSlideChange(index);
          });
        }
      });
    }
  }, {
    key: "cacheElements",
    value: function cacheElements() {
      this.galleryMainWrapper = this.querySelector('.GalleryPage-main');
      this.galleryActions = this.querySelector('.GalleryPage-actions');
      this.galleryCounter = this.querySelector('[class$="-numbers"]');
      this.galleryMainSlide = this.querySelectorAll('.GallerySlide');
      this.slide = '.GalleryPage-items-item';
      this.carouselCount = this.querySelector('[class$="-currentIndex"]');
      this.carouselNavigation = this.querySelector('#carouselNavigation').content.cloneNode(true).querySelector('*');
      this.slides = this.querySelectorAll(this.slide);
    }
  }, {
    key: "buildGalleryAside",
    value: function buildGalleryAside() {
      this.galleryCarouselAside = document.createElement("aside");
      this.galleryCarouselPagination = document.createElement("div");
      this.galleryCarouselAside.setAttribute('class', 'GalleryPageCarousel-aside');
      this.galleryCarouselPagination.setAttribute('class', 'GalleryPageCarousel-pagination');
      this.galleryCarouselWrapper.appendChild(this.galleryCarouselAside);
      this.galleryCarouselAside.appendChild(this.galleryCarouselPagination);
    }
  }, {
    key: "buildCarousel",
    value: function buildCarousel(index) {
      var _this2 = this;

      this.galleryCarouselWrapper = document.createElement("div");
      this.gallerySlidesClone = document.createElement("div");
      Array.from(this.querySelectorAll(this.slide)).forEach(function (slide, i) {
        var temp = document.createElement("div");
        temp.setAttribute('class', 'GalleryPageCarousel-slide');
        temp.setAttribute('id', 'slide-' + (i + 1));

        _this2.gallerySlidesClone.setAttribute('class', 'GalleryPageCarousel-slides');

        temp.appendChild(slide.querySelector('.GallerySlide').cloneNode(true));

        _this2.gallerySlidesClone.appendChild(temp);
      });
      this.galleryCarouselWrapper.insertAdjacentHTML("afterbegin", "<a href=\"#\" class=\"GalleryPageCarousel-closeButton\"><svg><use xlink:href=\"#bsp-close-x\"></use></svg></a>");
      this.galleryCarouselWrapper.className = "GalleryPageCarousel";
      this.galleryCarouselWrapper.appendChild(this.gallerySlidesClone);
      document.body.appendChild(this.galleryCarouselWrapper);
      document.body.classList.add("GalleryPageCarousel-enabled");
      var carouselSlides = this.galleryCarouselWrapper.querySelector('.GalleryPageCarousel-slides');
      var startSlide;

      if (index > 0) {
        startSlide = index;
      } else {
        startSlide = 0;
      }

      this.buildGalleryAside();
      var carouselOptions = {
        arrowShape: {
          x0: 25,
          x1: 60,
          y1: 35,
          x2: 65,
          y2: 30,
          x3: 35
        },
        adaptiveHeight: false,
        hash: true,
        imagesLoaded: true,
        initialIndex: startSlide,
        pageDots: false,
        lazyLoad: 2,
        prevNextButtons: false
      };

      if (startSlide > 0) {
        this.setState('gallery');
      }

      this.flickity = new hash_default.a(carouselSlides, carouselOptions); // make sure images are all loaded

      window.addEventListener('load', ;
      this.galleryCarouselWrapper.querySelector(".GalleryPageCarousel-closeButton").addEventListener("click", ;
      this.galleryCarouselWrapper.addEventListener('click', this); // Accessibility: escape key hides dropdown

      document.addEventListener('keydown', function (e) {
        var isEscape = false;

        if ('key' in e) {
          isEscape = e.key === 'Escape' || e.key === 'Esc';
        } else {
          isEscape = e.keyCode === 27;
        }

        if (isEscape) {
          _this2.destroyCarousel();
        }
      });
      this.handleSlideChange(startSlide);
      this.dispatchRendered();
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      var _this3 = this;

      setTimeout(function () {
        _this3.flickity.destroy(); // eslint-disable-next-line no-undef


        history.pushState('', document.title, window.location.pathname + window.location.search);
        var carousel = document.querySelector(".GalleryPageCarousel");
        carousel.parentNode.removeChild(carousel);
        document.body.classList.remove("GalleryPageCarousel-enabled");
      }, 0);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'click' && event.target.matches("[data-click=\"previous\"") || event.target.closest("[data-click=\"previous\"")) {
        this.flickity.previous();
      }

      if (event.type === 'click' && event.target.matches("[data-click=\"next\"") || event.target.closest("[data-click=\"next\"")) {
        this.flickity.next();
      }
    }
  }, {
    key: "handleSlideChange",
    value: function handleSlideChange(index) {
      var slideActions = this.galleryActions;
      var slidePagination = this.galleryCounter;
      var actionLinks = this.querySelectorAll('.ActionLink');
      var galleryCurrentSlide = this.querySelector('.GalleryPage-currentSlide');
      var slideTitle = this.flickity.selectedElement.querySelector('.GallerySlide-title');
      var slideDescription = this.flickity.selectedElement.querySelector('.GallerySlide-infoDescription');
      var slideCredit = this.flickity.selectedElement.querySelector('.GallerySlide-infoAttribution');
      var slideMedia = this.flickity.selectedElement.querySelector('.GallerySlide-media');
      var galleryAsideContent = this.galleryCarouselWrapper.querySelector('.GalleryPageCarousel-aside');
      galleryAsideContent.innerHTML = '';

      if (galleryCurrentSlide) {
        galleryCurrentSlide.innerHTML = index + 1;
      }

      if (slidePagination && galleryAsideContent) {
        galleryAsideContent.innerHTML += slidePagination.outerHTML;
      }

      if (slideTitle && galleryAsideContent) {
        galleryAsideContent.innerHTML += slideTitle.outerHTML;
      }

      if (slideDescription && galleryAsideContent) {
        galleryAsideContent.innerHTML += slideDescription.outerHTML;
      }

      if (slideCredit && galleryAsideContent) {
        galleryAsideContent.innerHTML += slideCredit.outerHTML;
      }

      galleryAsideContent.innerHTML += this.carouselNavigation.outerHTML;

      if (slideActions && galleryAsideContent) {
        galleryAsideContent.innerHTML += slideActions.outerHTML;
      }

      if (actionLinks) {
        actionLinks.forEach(function (item) {
          var link = item.getAttribute('href');

          if (link) {
            link = link.split('?')[1];
          }

          if (link) {
            if (link.indexOf('#slide') > -1) {
              item.setAttribute('href', item.getAttribute('href').replace(/#slide-\d+/, window.location.hash));
            } else {
              item.setAttribute('href', item.getAttribute('href').replace(window.location.pathname, window.location.pathname + window.location.hash));
            }
          }
        });
      }

      document.body.dispatchEvent(new CustomEvent('Gallery:onSlideUpdate', {
        detail: {
          activeSlide: {
            index: index,
            title: slideTitle ? slideTitle.getAttribute('data-info-title') : '',
            attribution: slideTitle ? slideTitle.getAttribute('data-info-attribution') : '',
            bspId: slideMedia.getAttribute('data-image-bsp-id')
          }
        }
      }));
      this.preloadNextImage(index);
      this.setState('gallery');
    }
  }, {
    key: "preloadNextImage",
    value: function preloadNextImage(index) {
      var nextSlide = index;
      var slideElement = null;
      var imageToPreload = null;

      if (nextSlide <= this.flickity.cells.length) {
        slideElement = this.flickity.cells[nextSlide].element;
      } else {
        return;
      }

      if (slideElement) {
        imageToPreload = slideElement.querySelector('[data-lazy-load="true"]');

        if (imageToPreload) {
          if (imageToPreload.dataset.src) {
            imageToPreload.src = imageToPreload.dataset.src;
            imageToPreload.removeAttribute('data-src');
            imageToPreload.removeAttribute('data-lazy-load');
          }

          if (imageToPreload.dataset.srcset) {
            imageToPreload.srcset = imageToPreload.dataset.srcset;
            imageToPreload.removeAttribute('data-srcset');
            imageToPreload.removeAttribute('data-lazy-load');
          }
        }
      }
    }
  }, {
    key: "dealWithSlideHover",
    value: function dealWithSlideHover() {
      var _this4 = this;

      this.galleryMainSlide.forEach(;
    }
  }, {
    key: "dispatchRendered",
    value: function dispatchRendered() {
      var customEvent = new CustomEvent('Ajax:Rendered', {
        bubbles: true
      });
      document.body.dispatchEvent(customEvent);
    }
  }, {
    key: "slideClickEvent",
    value: function slideClickEvent() {
      var _this5 = this;

      Array.from(this.slides).forEach(function (slide, index) {
        slide.addEventListener("click", function (evt) {
          evt.preventDefault();

          _this5.buildCarousel(index);

          _this5.handleSlideChange(index);

          _this5.flickity.on('change', function (index) {
            _this5.handleSlideChange(index);
          });
        });
      });
    }
  }, {
    key: "showGalleryIcon",
    value: function showGalleryIcon(item, action) {
      if (item) {
        if (item.getAttribute('data-item-' + action)) {
          item.removeAttribute('data-item-' + action);
        } else {
          this.galleryMainSlide.forEach(function (navItem) {
            navItem.removeAttribute('data-item-' + action);
          });
          item.setAttribute('data-item-' + action, true);
        }
      }
    }
  }, {
    key: "hideGalleryIcon",
    value:   }, {
    key: "setState",
    value: function setState(state) {
      this.setAttribute('data-state', state);

      if (this.getAttribute('data-state') === 'start') {
        this.removeAttribute('data-showing-aside');
      }
    }
  }]);

  return GalleryPage;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var helpers_get = __webpack_require__(12);
var get_default = /*#__PURE__*/__webpack_require__.n(helpers_get);

// EXTERNAL MODULE: ./node_modules/plyr/dist/plyr.min.js
var plyr_min = __webpack_require__(42);
var plyr_min_default = /*#__PURE__*/__webpack_require__.n(plyr_min);

// CONCATENATED MODULE: ./styleguide/core/video/VideoPlayer.js









function VideoPlayer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function VideoPlayer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { VideoPlayer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { VideoPlayer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function VideoPlayer_createSuper(Derived) { var hasNativeReflectConstruct = VideoPlayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function VideoPlayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * This class gets extended by all the child players. The child players have their own Listeners
 * to the video actions depending on what the video technology is used and call the super functions to actually
 * dispatch these events so things like the video page or analytics can capture them
 */
var events = {
  ready: 'VideoPlayer:ready',
  timeUpdate: 'VideoPlayer:timeUpdate',
  valoumeChange: 'VideoPlayer:volumeChange',
  play: 'VideoPlayer:play',
  playing: 'VideoPlayer:playing',
  pause: 'VideoPlayer:paused',
  volumeChange: 'VideoPlayer:volumeChange',
  enterFullscreen: 'VideoPlayer:enterFullscreen',
  exitFullscreen: 'VideoPlayer:exitFullscreen',
  ended: 'VideoPlayer:ended',
  error: 'VideoPlayer:error',
  quartileCompleted: 'VideoPlayer:quartileCompleted'
};
var intervals = {
  playingInterval: 5,
  playbackPosition: 0,
  quartilePosition: -1
};
var VideoPlayer_VideoPlayer = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(VideoPlayer, _HTMLElement);

  var _super = VideoPlayer_createSuper(VideoPlayer);

  function VideoPlayer() {
    classCallCheck_default()(this, VideoPlayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(VideoPlayer, [{
    key: "connectedCallback",
    value:   }, {
    key: "init",
    value:     /**
     * The following functions dispatches events when certain video events happen.
     * The child classes call these super functions
     */

  }, {
    key: "onReady",
    value: function onReady() {
      this.emit(events.ready);
    }
  }, {
    key: "onPlay",
    value: function onPlay() {
      this.emit(events.playing);
    }
  }, {
    key: "onTimeUpdate",
    value:   }, {
    key: "onMute",
    value: function onMute() {
      this.emit(events.volumeChange);
    }
  }, {
    key: "onPause",
    value: function onPause() {
      this.emit(events.pause);
    }
  }, {
    key: "onEnded",
    value: function onEnded() {
      this.intervals = VideoPlayer_objectSpread({}, intervals);
      this.emit(events.ended);
    }
  }, {
    key: "onError",
    value: function onError() {
      this.emit(events.error);
    }
  }, {
    key: "onVolumneChange",
    value: function onVolumneChange() {
      this.emit(events.volumeChange);
    }
    /**
     * API to play and pause video, these are going to actually be implemented in the child classes
     */

  }, {
    key: "play",
    value: function play() {// abstract: implement in child class
    }
  }, {
    key: "pause",
    value: function pause() {// abstract: implement in child class
    }
  }, {
    key: "playPause",
    value: function playPause() {
      if (this.getAttribute('data-playback-paused')) {
        this.play();
      } else {
        this.pause();
      }
    }
    /**
     * Interval functions. This happens on the time update and sends events every
     * "playingInterval" and does all the math for percentile events as well
     */

  }, {
    key: "sendVideoPlaybackIntervalEvents",
    value: function sendVideoPlaybackIntervalEvents() {
      if (!this.duration || this.duration === 0) {
        return;
      }

      var percentComplete = this.currentTime / this.duration * 100; // don't send extra events if the video didn't naturally pass the interval

      while (this.currentTime > this.intervals.playbackPosition + this.intervals.playingInterval * 2) {
        this.intervals.playbackPosition += this.intervals.playingInterval;
      }

      if (this.currentTime >= this.intervals.playbackPosition + this.intervals.playingInterval) {
        this.intervals.playbackPosition += this.intervals.playingInterval;
        var customEvent = new CustomEvent('Video:onVideoTimeIntervalUpdate', {
          bubbles: true,
          detail: {
            playerId: this.playerId,
            videoPlatform: this.platform,
            video: this.video,
            secondsElapsed: this.currentTime
          }
        });
        this.dispatchEvent(customEvent);
      }

      var quartileEvent = null;

      if (percentComplete >= this.intervals.quartilePosition) {
        // when resuming, make sure we don't repeat quartile events
        // once percentile updates correctly after seek, figure out next valid event position
        if (this.intervals.quartilePosition === -1) {
          if (percentComplete >= this.intervals.quartilePosition + 25) {
            this.intervals.quartilePosition = 0;

            while (percentComplete >= this.intervals.quartilePosition) {
              this.intervals.quartilePosition += 25;
            }
          }
        } else {
          quartileEvent = this.intervals.quartilePosition;
          this.intervals.quartilePosition += 25;

          if (this.intervals.quartilePosition === 100) {
            this.intervals.quartilePosition = 95;
          }
        }
      }

      if (quartileEvent !== null) {
        // to ensure 100% is always reached, call at 95% instead
        if (quartileEvent === 95) {
          quartileEvent = 100;
        }

        this.emit(events.quartileCompleted, {
          quartile: quartileEvent
        });
      }
    } // Map internal quartilePosition so that crossing 25% done --> 25, etc

  }, {
    key: "getDisplayQuartile",
    value: function getDisplayQuartile(quartilePos) {
      if (quartilePos === -1) {
        return 0;
      }

      if (quartilePos === 50) {
        return 25;
      }

      if (quartilePos === 75) {
        return 50;
      }

      if (quartilePos === 95) {
        return 75;
      }

      return 100;
    }
    /**
     * The following functions are used by the analytics dataLayer
     */

  }, {
    key: "getCategory",
    value: function getCategory() {// abstract: implement in child class
    }
  }, {
    key: "getCredit",
    value: function getCredit() {// abstract: implement in child class
    } // Used for the "Location" element

  }, {
    key: "getDateline",
    value: function getDateline() {// abstract: implement in child class
    }
  }, {
    key: "getIsAutoPlay",
    value: function getIsAutoPlay() {// abstract: implement in child class
    }
  }, {
    key: "getOwnerSite",
    value: function getOwnerSite() {// abstract: implement in child class
    }
  }, {
    key: "getPlatformName",
    value: function getPlatformName() {// abstract: implement in child class
    }
  }, {
    key: "getPlayerHeight",
    value: function getPlayerHeight() {// abstract: implement in child class
    }
  }, {
    key: "getPlayerWidth",
    value: function getPlayerWidth() {// abstract: implement in child class
    }
  }, {
    key: "getPlayerResolution",
    value: function getPlayerResolution() {
      var width = this.getPlayerWidth();
      var height = this.getPlayerHeight();
      return width + ' x ' + height;
    }
  }, {
    key: "getPlayListTagsosition",
    value: function getPlayListTagsosition(id) {
      var playlist = document.querySelector('[data-playlist]');
      var PlaylistItems = playlist.querySelectorAll('.PlaylistItem');
      var activeVid = playlist.querySelector("[data-video-id='".concat(id, "']"));

      for (var i = 0; i < PlaylistItems.length; i++) {
        if (activeVid === PlaylistItems[i]) {
          return i;
        }
      }
    }
  }, {
    key: "getSource",
    value: function getSource() {// abstract: implement in child class
    }
  }, {
    key: "getVideoFileType",
    value: function getVideoFileType() {// abstract: implement in child class
    }
  }, {
    key: "getVideoStatus",
    value: function getVideoStatus() {
      if (this.getAttribute('data-playback-playing')) {
        return 'Playing';
      } else if (this.getAttribute('data-playback-paused')) {
        return 'Paused';
      } else if (this.getAttribute('data-playback-ended')) {
        return 'Ended';
      } else return null;
    }
  }, {
    key: "getVideoUuid",
    value: function getVideoUuid() {// abstract: implement in child class
    }
  }, {
    key: "getVolume",
    value: function getVolume() {// abstract: implement in child class
    }
  }, {
    key: "getStartVolume",
    value: function getStartVolume() {// abstract: implement in child class
    }
  }, {
    key: "onVideoFullscreen",
    value: function onVideoFullscreen() {// abstract: implement in child class
    }
  }, {
    key: "onEnterFullScreen",
    value: function onEnterFullScreen() {
      this.emit(events.enterFullscreen);
    }
  }, {
    key: "onExitFullscreen",
    value:   }, {
    key: "emit",
    value: function emit(event) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var customEvent = new CustomEvent(event, {
        bubbles: true,
        detail: detail
      });
      this.dispatchEvent(customEvent);
    }
  }, {
    key: "videoId",
    get: function get() {
      return this.getAttribute('video-id');
    }
  }, {
    key: "videoTitle",
    get: function get() {
      return this.getAttribute('video-title');
    }
  }, {
    key: "playerId",
    get: function get() {
      return this.getAttribute('player-id');
    }
  }, {
    key: "autoplay",
    get: function get() {
      return this.hasAttribute('autoplay');
    }
  }, {
    key: "disableClickToPlay",
    get: function get() {
      return this.hasAttribute('disable-click-to-play');
    }
  }, {
    key: "muted",
    get: function get() {
      return this.hasAttribute('muted');
    }
  }, {
    key: "loop",
    get: function get() {
      return this.hasAttribute('loop');
    }
  }, {
    key: "poster",
    get: function get() {
      return this.getAttribute('poster');
    }
    /** returns JSON data for current video  **/

  }, {
    key: "video",
    get: function get() {
      return {
        id: this.videoId,
        videoPlatform: this.platform,
        seekSeconds: this.seekSeconds,
        title: this.videoTitle,
        inPlaylist: document.querySelector('ps-playlist'),
        playListTagsosition: toConsumableArray_default()(document.querySelectorAll('ps-playlist-item')).findIndex(function (el) {
          return el.isCurrent;
        }),
        duration: this.duration,
        playerWidth: this.getPlayerWidth(),
        playerHeight: this.getPlayerHeight(),
        playerResolution: this.getPlayerResolution(),
        isAutoPlay: this.getIsAutoPlay(),
        startVolume: this.getStartVolume(),
        volume: this.getVolume(),
        isFullscreen: this.onVideoFullscreen(),
        videoUuid: this.getVideoUuid(),
        videoFileType: this.getVideoFileType(),
        videoInitiation: this.getAttribute('data-playback-started') || false,
        credit: this.getCredit(),
        ownerSite: this.getOwnerSite(),
        videoClassification: this.getCategory(),
        source: this.getSource(),
        location: this.getDateline(),
        videoStatus: this.getVideoStatus(),
        quartile: this.getDisplayQuartile(this.intervals.quartilePosition)
      };
    }
  }]);

  return VideoPlayer;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/video/CompanionTooltip.js







function CompanionTooltip_createSuper(Derived) { var hasNativeReflectConstruct = CompanionTooltip_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function CompanionTooltip_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var tooltipWidth = 240;
var CompanionTooltip_CompanionTooltip = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(CompanionTooltip, _HTMLElement);

  var _super = CompanionTooltip_createSuper(CompanionTooltip);

  function CompanionTooltip(companionNode) {
    var _this;

    classCallCheck_default()(this, CompanionTooltip);

    _this = _super.call(this, companionNode);
    _this.node = companionNode;
    return _this;
  }

  createClass_default()(CompanionTooltip, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.classList.add('CompanionTooltip');
      this.appendChild(this.node.companionItem.cloneNode(true));
      this.updatePosition();
      this.node.player.addEventListener(events.enterFullscreen, this);
      this.node.player.addEventListener(events.exitFullscreen, this);
      this.node.player.addEventListener(events.ready, this);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var _this2 = this;

      if ([events.enterFullscreen, events.exitFullscreen, events.ready].indexOf(event.type) >= 0) {
        requestAnimationFrame(function () {
          _this2.updatePosition();
        });
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      var containerWidth = this.node.parentElement.clientWidth;
      var nodePosition = this.node.position;
      var tooltipWidthPercent = tooltipWidth / containerWidth * 100;
      var overflowLeft = nodePosition - tooltipWidthPercent / 2 < 0;
      var overflowRight = nodePosition + tooltipWidthPercent / 2 > 100;
      this.style.removeProperty('right');
      this.style.removeProperty('left');
      var tail = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttributeNS(null, 'stroke', 'var(--borderColor)');
      tail.classList.add('CompanionTooltip-tail');
      tail.appendChild(path);
      this.appendChild(tail);

      if (overflowLeft) {
        this.style.left = "7px";
        tail.setAttribute('width', 12);
        tail.setAttribute('viewBox', '0 0 12 12');
        path.setAttributeNS(null, 'd', 'M 0 0 L 0 12 L 12 0');
        this.alignment = 'left';
      } else if (overflowRight) {
        this.style.right = "7px";
        tail.setAttribute('width', 12);
        tail.setAttribute('viewBox', '0 0 12 12');
        path.setAttributeNS(null, 'd', 'M 0 0 L 12 12 L 12 0');
        this.alignment = 'right';
      } else {
        this.style.left = "-112px";
        tail.setAttribute('width', 24);
        tail.setAttribute('viewBox', '0 0 24 12');
        path.setAttributeNS(null, 'd', 'M 0 0 L 12 12 L 24 0');
        this.alignment = 'center';
      }
    }
  }, {
    key: "alignment",
    set:   }]);

  return CompanionTooltip;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
customElements.define('companion-tooltip', CompanionTooltip_CompanionTooltip);
// CONCATENATED MODULE: ./styleguide/core/video/CompanionNode.js







function CompanionNode_createSuper(Derived) { var hasNativeReflectConstruct = CompanionNode_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function CompanionNode_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var CompanionNode_CompanionNode = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(CompanionNode, _HTMLElement);

  var _super = CompanionNode_createSuper(CompanionNode);

  function CompanionNode(companionItem, player) {
    var _this;

    classCallCheck_default()(this, CompanionNode);

    _this = _super.call(this, companionItem, player);
    _this.companionItem = companionItem;
    _this.player = player;
    var durationMiliseconds = _this.player.duration * 1000;
    _this.position = _this.companionItem.timestamp / durationMiliseconds * 100;
    return _this;
  }

  createClass_default()(CompanionNode, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.companionTooltip = new CompanionTooltip_CompanionTooltip(this);
      this.appendChild(this.companionTooltip);
      this.style.left = "".concat(this.position, "%");
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      svg.appendChild(circle);
      svg.setAttribute('viewBox', '0 0 16 16');
      circle.setAttributeNS(null, 'cx', 8);
      circle.setAttributeNS(null, 'cy', 8);
      circle.setAttributeNS(null, 'r', 6);
      circle.setAttributeNS(null, 'stroke', 'white');
      circle.setAttributeNS(null, 'stroke-width', '4');
      this.appendChild(svg);
    }
  }, {
    key: "active",
    set: function set(bool) {
      bool ? this.setAttribute('active', '') : this.removeAttribute('active');
    }
  }]);

  return CompanionNode;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
customElements.define('companion-node', CompanionNode_CompanionNode);
// CONCATENATED MODULE: ./styleguide/core/video/VideoPlayerControls.js







function VideoPlayerControls_createSuper(Derived) { var hasNativeReflectConstruct = VideoPlayerControls_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function VideoPlayerControls_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var VideoPlayerControlsEvents = {
  play: 'VideoPlayerControls:play',
  rewind: 'VideoPlayerControls:rewind',
  forward: 'VideoPlayerControls:forward',
  seek: 'VideoPlayerControls:seek',
  togglePlayback: 'VideoPlayerControls:togglePlayback',
  toggleMute: 'VideoPlayerControls:toggleMute',
  toggleFullscreen: 'VideoPlayerControls:toggleFullscreen'
};
var VideoPlayerControls_VideoPlayerControls = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(VideoPlayerControls, _HTMLElement);

  var _super = VideoPlayerControls_createSuper(VideoPlayerControls);

  function VideoPlayerControls() {
    classCallCheck_default()(this, VideoPlayerControls);

    return _super.apply(this, arguments);
  }

  createClass_default()(VideoPlayerControls, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      this.addEventListener('click', this.clickHandler);
      this.addEventListener('input', this.inputkHandler);
      this.addEventListener('change', this.changeHandler);
      this.player.addEventListener(events.timeUpdate, function () {
        _this.update();
      });
      this.player.addEventListener(events.ready, function () {
        _this.ready = true;

        _this.update();
      });
      this.player.addEventListener(events.playing, ;
      this.player.addEventListener(events.pause, function () {
        _this.update();
      });
      this.player.addEventListener(events.volumeChange, function () {
        _this.update();
      });
      this.player.addEventListener(events.enterFullscreen, function () {
        _this.update();
      });
      this.player.addEventListener(events.exitFullscreen, function () {
        _this.update();
      });
      this.player.addEventListener('mousemove', ;
    }
  }, {
    key: "createCompanionNodes",
    value: function createCompanionNodes() {
      var _this2 = this;

      if (!this.player.duration || this.companionNodes) {
        return;
      }

      this.companionNodes = [];
      this.showCompanionNodes = this.querySelector('[name="companion-toggle"]').checked;
      var seekControls = this.querySelector('.VideoPlayerControls-seekControls');
      document.querySelectorAll('ps-playlist-item[is-current] ps-companion-content-item').forEach(function (item) {
        var companionNode = new CompanionNode_CompanionNode(item, _this2.player);
        seekControls.appendChild(companionNode);

        _this2.companionNodes.push(companionNode);
      });

      if (this.companionNodes.length > 0) {
        this.withCompanion = true;
      }
    }
  }, {
    key: "setCompanionNodesState",
    value: function setCompanionNodesState() {
      var _this3 = this;

      if (!this.companionNodes) {
        return;
      }

      this.companionNodes.forEach(;
      var viewdNodes = this.companionNodes.filter(function (node) {
        return _this3.player.currentTime * 1000 > node.companionItem.timestamp;
      });
      viewdNodes.forEach(;

      if (viewdNodes.length > 0) {
        var activeNode = viewdNodes.reduce(;

        if (activeNode) {
          activeNode.companionItem.active = true;
          activeNode.active = true;
        }
      }
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      this.hideControls = false;
      this.resetControlsTimeout();

      if (event.target.matches('[data-click]')) {
        event.stopImmediatePropagation();
        this.emit(VideoPlayerControlsEvents[event.target.dataset.click]);
      }
    }
  }, {
    key: "inputkHandler",
    value: function inputkHandler(_ref) {
      var target = _ref.target;

      if (target.matches('[data-change="seek"]')) {
        this.disableSeekUpdates = true;
      }
    }
  }, {
    key: "changeHandler",
    value: function changeHandler(_ref2) {
      var target = _ref2.target;

      if (target.matches('[data-change="seek"]')) {
        this.disableSeekUpdates = false;
        this.emit(VideoPlayerControlsEvents.seek, {
          currentTime: this.player.duration / 100 * event.target.value
        });
      }

      if (target.matches('[name="companion-toggle"]')) {
        this.showCompanionNodes = target.checked;
      }
    }
  }, {
    key: "resetControlsTimeout",
    value: function resetControlsTimeout() {
      var _this4 = this;

      if (this.controlsTimeout) {
        clearTimeout(this.controlsTimeout);
      }

      this.controlsTimeout = setTimeout( 2000);
    }
  }, {
    key: "disconnectedCallback",
    value:   }, {
    key: "emit",
    value: function emit(event) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var customEvent = new CustomEvent(event, {
        bubbles: true,
        detail: detail
      });
      this.dispatchEvent(customEvent);
    }
  }, {
    key: "update",
    value: function update() {
      this.createCompanionNodes();
      this.setCompanionNodesState();
      this.playing = this.player.playing;
      this.muted = this.player.muted;
      this.fullscreen = this.player.fullscreen;
      this.querySelector('.VideoPlayerControls-seekTrackProgress').style.width = "".concat(this.progress, "%");
      this.querySelector('.VideoPlayerControls-time').innerText = "".concat(formatSeconds(this.player.currentTime), " / ").concat(formatSeconds(this.player.duration));

      if (!this.disableSeekUpdates) {
        this.querySelector('.VideoPlayerControls-seekControls input[type=range').value = this.progress;
      }

      if (this.player.playing || this.player.currentTime > 0) {
        this.interactive = true;
      }
    }
  }, {
    key: "player",
    get: function get() {
      return this.closest('[data-video-player]');
    }
  }, {
    key: "progress",
    get: function get() {
      return this.player.currentTime / this.player.duration * 100 || 0;
    }
  }, {
    key: "playing",
    set: function set(bool) {
      bool ? this.setAttribute('playing', '') : this.removeAttribute('playing');
    }
  }, {
    key: "hideControls",
    set: function set(bool) {
      bool ? this.setAttribute('hide-controls', '') : this.removeAttribute('hide-controls');
    }
  }, {
    key: "muted",
    set: function set(bool) {
      bool ? this.setAttribute('muted', '') : this.removeAttribute('muted');
    }
  }, {
    key: "showCompanionNodes",
    set: function set(bool) {
      bool ? this.setAttribute('show-companion-nodes', '') : this.removeAttribute('show-companion-nodes');
    }
  }, {
    key: "interactive",
    set: function set(bool) {
      bool ? this.setAttribute('interactive', '') : this.removeAttribute('interactive');
    }
  }, {
    key: "fullscreen",
    set: function set(bool) {
      bool ? this.setAttribute('fullscreen', '') : this.removeAttribute('fullscreen');
    }
  }, {
    key: "ready",
    set: function set(bool) {
      bool ? this.setAttribute('ready', '') : this.removeAttribute('ready');
    }
  }, {
    key: "withCompanion",
    set:   }]);

  return VideoPlayerControls;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/video/PlyrVideoPlayer.js







function PlyrVideoPlayer_createSuper(Derived) { var hasNativeReflectConstruct = PlyrVideoPlayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function PlyrVideoPlayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var PlyrVideoPlayer_PlyrVideoPlayer = /*#__PURE__*/function (_VideoPlayer) {
  inherits_default()(PlyrVideoPlayer, _VideoPlayer);

  var _super = PlyrVideoPlayer_createSuper(PlyrVideoPlayer);

  function PlyrVideoPlayer() {
    classCallCheck_default()(this, PlyrVideoPlayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(PlyrVideoPlayer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      if (this.plyr) {
        return;
      }

      get_default()(getPrototypeOf_default()(PlyrVideoPlayer.prototype), "connectedCallback", this).call(this);

      this.plyr = new plyr_min_default.a(this.plyrContainerElement, {
        muted: this.muted,
        autoplay: this.autoplay,
        controls: this.querySelector('video-player-controls'),
        poster: this.poster,
        loop: {
          active: this.loop
        },
        clickToPlay: !this.disableClickToPlay
      });
      setTimeout(;
      this.addEventListener(VideoPlayerControlsEvents.togglePlayback, function () {
        _this.plyr.togglePlay();
      });
      this.addEventListener(VideoPlayerControlsEvents.toggleMute, ;
      this.addEventListener(VideoPlayerControlsEvents.rewind, function () {
        _this.plyr.rewind(5);
      });
      this.addEventListener(VideoPlayerControlsEvents.forward, ;
      this.addEventListener(VideoPlayerControlsEvents.toggleFullscreen, ;
      this.addEventListener(VideoPlayerControlsEvents.seek, ;
      this.addEventListener(VideoPlayerControlsEvents.play, ;
      this.plyr.once('ready', function () {
        return _this.onReady();
      });
      this.plyr.on('timeupdate', function () {
        return _this.onTimeUpdate();
      });
      this.plyr.on('volumechange', function () {
        return _this.onVolumneChange();
      });
      this.plyr.on('enterfullscreen', function () {
        return _this.onEnterFullScreen();
      });
      this.plyr.on('exitfullscreen', function () {
        return _this.onExitFullscreen();
      });
      this.plyr.on('playing', function () {
        return _this.onPlay();
      });
      this.plyr.on('pause', function () {
        return _this.onPause();
      });
      this.plyr.on('ended', function () {
        return _this.onEnded();
      });
      this.plyr.on('error', ;
      this.init();
    }
  }, {
    key: "init",
    value:   }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.state = {
        currentTime: this.currentTime,
        muted: this.muted,
        playing: this.playing
      };
    }
  }, {
    key: "play",
    value:   }, {
    key: "plyrContainerElement",
    get: function get() {
      return this.querySelector('video');
    }
  }, {
    key: "currentTime",
    get: function get() {
      return this.plyr.currentTime;
    }
  }, {
    key: "duration",
    get: function get() {
      return this.plyr.duration;
    }
  }, {
    key: "playing",
    get:   }, {
    key: "fullscreen",
    get:   }, {
    key: "muted",
    get: function get() {
      if (this.plyr) {
        return this.plyr.muted;
      }

      return this.hasAttribute('muted');
    }
  }]);

  return PlyrVideoPlayer;
}(VideoPlayer_VideoPlayer);
// CONCATENATED MODULE: ./styleguide/core/video/HTML5VideoPlayer.js





function HTML5VideoPlayer_createSuper(Derived) { var hasNativeReflectConstruct = HTML5VideoPlayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function HTML5VideoPlayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var HTML5VideoPlayer_HTML5VideoPlayer = /*#__PURE__*/function (_PlyrVideoPlayer) {
  inherits_default()(HTML5VideoPlayer, _PlyrVideoPlayer);

  var _super = HTML5VideoPlayer_createSuper(HTML5VideoPlayer);

  function HTML5VideoPlayer() {
    classCallCheck_default()(this, HTML5VideoPlayer);

    return _super.apply(this, arguments);
  }

  return HTML5VideoPlayer;
}(PlyrVideoPlayer_PlyrVideoPlayer);
// EXTERNAL MODULE: ./styleguide/core/image/LazyLoadImages.js
var LazyLoadImages = __webpack_require__(27);

// CONCATENATED MODULE: ./styleguide/global/Message.js







function Message_createSuper(Derived) { var hasNativeReflectConstruct = Message_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Message_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Message_Message = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(Message, _HTMLElement);

  var _super = Message_createSuper(Message);

  function Message() {
    classCallCheck_default()(this, Message);

    return _super.apply(this, arguments);
  }

  createClass_default()(Message, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.dismissible) {
        var svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#close-x');
        svgElem.appendChild(useElem);
        this.dismissButton = document.createElement('button');
        this.dismissButton.appendChild(svgElem);
        this.appendChild(this.dismissButton);
      }

      this.addEventListener('click', this);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'click' && event.target.matches('button')) {
        this.parentNode.removeChild(this);
      }
    }
  }, {
    key: "dismissible",
    get:   }]);

  return Message;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/navigation/Navigation.js









function Navigation_createSuper(Derived) { var hasNativeReflectConstruct = Navigation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Navigation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Navigation_Navigation = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(Navigation, _HTMLElement);

  var _super = Navigation_createSuper(Navigation);

  function Navigation() {
    classCallCheck_default()(this, Navigation);

    return _super.apply(this, arguments);
  }

  createClass_default()(Navigation, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      this.dealWithMenuHover();
      this.handleEventListeners();
      var alowNavOverflow = this.getAttribute('data-allow-nav-overflow');
      var allowTrimNav;

      if (alowNavOverflow === 'true') {
        allowTrimNav = true;
      } else {
        allowTrimNav = false;
      }

      if (MediaQuery_DEFAULT_BREAKPOINT_OPTIONS.desktop.includes(getMediaQuery())) {
        this.checkClickTarget();
      }

      if (document.readyState !== 'complete') {
        window.addEventListener('load', function () {
          if (allowTrimNav) {
            _this.trimNav();
          }
        });
      } else {
        if (allowTrimNav) {
          this.trimNav();
        }
      }

      window.addEventListener('resize', ;
    }
  }, {
    key: "trimNav",
    value: function trimNav() {
      var clipping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var wrapper = this.querySelector(':scope > .Navigation-items');

      var items = toConsumableArray_default()(this.querySelectorAll(':scope > .Navigation-items > .Navigation-items-item:not([data-overflow-trigger]):not([data-nav-buton="true"])'));

      var itemStack = this.querySelector(':scope [data-overflow-menu] > .NavigationItem-items-container');
      var lastItem = items[items.length - 1];

      if (wrapper.scrollWidth > wrapper.clientWidth) {
        itemStack.prepend(lastItem);
        this.querySelector('[data-overflow-trigger]').style.display = 'block';
        this.trimNav(true);
        return;
      }

      if (!clipping) {
        if (itemStack.childNodes.length > 0) {
          var firstChild = itemStack.childNodes[0];
          lastItem.parentNode.insertBefore(firstChild, lastItem.nextSibling);

          if (itemStack.childNodes.length < 1) {
            this.querySelector('[data-overflow-trigger]').style.display = 'none';
          }

          this.trimNav();
          return;
        }
      }
    }
  }, {
    key: "dealWithMenuHover",
    value: function dealWithMenuHover() {
      var _this2 = this;

      var options = {
        timeout: 100,
        interval: 0
      };
      this.navigationItems.forEach(;
    } // Using this here instead of the generic toggle plugin as we do not want these search buttons
    // interacting with the generic plugin toggles, and we also want to have them toggle each other
    // off when the other is toggled in

  }, {
    key: "handleEventListeners",
    value: function handleEventListeners() {
      var _this3 = this;

      addEventListener('resize', throttle(250, function (e) {
        if (MediaQuery_DEFAULT_BREAKPOINT_OPTIONS.desktop.includes(getMediaQuery())) {
          _this3.checkClickTarget();

          if (_this3.navigationItems) {
            _this3.navigationItems.forEach(function (item) {
              if (item.querySelector(Navigation.selectors.moreSelector)) {
                _this3.closeNavItem(item, 'click');

                _this3.closeNavItem(item, 'hover');
              }
            });
          }
        } else {
          _this3.removeClickTarget();
        }
      }));

      if (this.navigationItems) {
        this.navigationItems.forEach(function (item) {
          if (item.querySelector(Navigation.selectors.moreSelector)) {
            item.querySelector(Navigation.selectors.moreSelector).addEventListener('click', ;
          }
        });
      }

      if (this.navigationButton) {
        this.navigationButton.forEach(;
      }
    }
  }, {
    key: "getContentWidth",
    value: function getContentWidth() {
      var element = this.querySelector('.Navigation-items-container');
      var styles = getComputedStyle(element);
      return element.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
    }
  }, {
    key: "openNavItem",
    value: function openNavItem(item, action) {
      if (item) {
        if (item.parentNode.closest(Navigation.selectors.navigationItem)) return;

        if (item.getAttribute('data-item-' + action)) {
          item.removeAttribute('data-item-' + action);
        } else {
          this.navigationItems.forEach(function (navItem) {
            navItem.removeAttribute('data-item-' + action);
          });
          item.setAttribute('data-item-' + action, true);
          this.adjustSubNavPosition(item);
        }
      }
    }
  }, {
    key: "closeNavItem",
    value: function closeNavItem(item, action) {
      item.removeAttribute('data-item-' + action);
      var navItems = item.querySelector('.NavigationItem-items-container');

      if (navItems) {
        navItems.style.left = 0;
      }
    }
  }, {
    key: "checkClickTarget",
    value:   }, {
    key: "removeClickTarget",
    value: function removeClickTarget() {
      if (this.event && document.removeEventListener('click', this.event)) {
        document.removeEventListener('click', this.event);
      }
    }
  }, {
    key: "adjustSubNavPosition",
    value: function adjustSubNavPosition(item) {
      var tailWidth = 34;
      var gutterWidth = 40;
      var navItems = item.querySelector('.NavigationItem-items-container');
      if (!navItems) return;
      var itemWidth = item.getBoundingClientRect().width;
      var navItemsWidth = navItems.getBoundingClientRect().width;
      var translateX = (navItemsWidth / 2 - itemWidth / 2) * -1;
      var overflowRight = navItems.getBoundingClientRect().right - document.body.getBoundingClientRect().right + translateX + gutterWidth;
      var overflowLeft = document.body.getBoundingClientRect().left - navItems.getBoundingClientRect().left - translateX + gutterWidth;

      if (overflowRight > 0) {
        translateX = translateX + overflowRight * -1;
      }

      if (overflowLeft > 0) {
        translateX = translateX + overflowLeft;
      }

      navItems.style.left = "".concat(translateX, "px");
      navItems.style.setProperty('--tail-offset-left', "".concat(itemWidth / 2 - translateX - tailWidth / 2, "px"));
    }
  }, {
    key: "navigationButton",
    get: function get() {
      return this.querySelectorAll(Navigation.selectors.buttonSelector);
    }
  }, {
    key: "navigationItems",
    get:   }]);

  return Navigation;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));

defineProperty_default()(Navigation_Navigation, "selectors", {
  navigationItem: '.NavigationItem',
  moreSelector: '.NavigationItem-more',
  buttonSelector: '.NavigationItem-button'
});
// EXTERNAL MODULE: ./node_modules/masonry-layout/masonry.js
var masonry = __webpack_require__(43);
var masonry_default = /*#__PURE__*/__webpack_require__.n(masonry);

// CONCATENATED MODULE: ./styleguide/core/list/ListMasonry.js








function ListMasonry_createSuper(Derived) { var hasNativeReflectConstruct = ListMasonry_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ListMasonry_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var ListMasonry_MasonryList = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(MasonryList, _HTMLElement);

  var _super = ListMasonry_createSuper(MasonryList);

  function MasonryList() {
    classCallCheck_default()(this, MasonryList);

    return _super.apply(this, arguments);
  }

  createClass_default()(MasonryList, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.gridItems = this.querySelector(MasonryList.selectors.gridItems);
      this.gridImages = this.gridItems.querySelectorAll('img');
      this.gridItem = MasonryList.selectors.gridItem;
      this.gridGutter = MasonryList.attributes.gutter;
      this.gridSizer = MasonryList.selectors.gridSizer;
      this.gridEnabled = MasonryList.selectors.gridEnabled;
      this.buildMasonryList();
    }
  }, {
    key: "buildMasonryList",
    value: function buildMasonryList() {
      var _this = this;

      var masonryGrid = new masonry_default.a(this.gridItems, {
        horizontalOrder: true,
        itemSelector: this.gridItem,
        columnWidth: this.gridSizer,
        gutter: this.gridGutter,
        percentPosition: true
      });
      this.gridImages.forEach(; // bind event listener

      masonryGrid.once('layoutComplete', ;
      window.addEventListener('resize', throttle(250, function () {
        masonryGrid.layout();
      }));
    }
  }]);

  return MasonryList;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));

defineProperty_default()(ListMasonry_MasonryList, "attributes", {
  item: '[data-item]',
  items: '[data-items]',
  sizer: '[data-masonry-sizer]',
  gutter: '[data-masonry-gutter]',
  enabled: 'data-masonry-enabled'
});

defineProperty_default()(ListMasonry_MasonryList, "selectors", {
  gridItem: ListMasonry_MasonryList.attributes.item,
  gridItems: ListMasonry_MasonryList.attributes.items,
  gridSizer: ListMasonry_MasonryList.attributes.sizer,
  gridGutter: ListMasonry_MasonryList.attributes.gutter,
  gridEnabled: ListMasonry_MasonryList.attributes.enabled
});
// CONCATENATED MODULE: ./styleguide/core/promo/PromoAccordion.js







function PromoAccordion_createSuper(Derived) { var hasNativeReflectConstruct = PromoAccordion_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function PromoAccordion_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PromoAccordion_PromoAccordion = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(PromoAccordion, _HTMLElement);

  var _super = PromoAccordion_createSuper(PromoAccordion);

  function PromoAccordion() {
    classCallCheck_default()(this, PromoAccordion);

    return _super.apply(this, arguments);
  }

  createClass_default()(PromoAccordion, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name) {
      if (name === 'expanded') {
        this.toggle();
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      this.headerEl.addEventListener('click', ;
      this.contentEl.addEventListener('transitionend', function () {
        return _this.onTransitionEnd();
      });
      window.addEventListener('load', function () {
        if (_this.expanded) {
          _this.contentEl.style.height = 'auto';

          _this.contentEl.classList.add('test');
        }
      });
    }
  }, {
    key: "transition",
    value: function transition(startHeight, endHeight) {
      var _this2 = this;

      this.contentEl.style.height = "".concat(startHeight, "px");
      window.requestAnimationFrame(;
    }
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      if (this.expanded) {
        this.contentEl.style.height = 'auto';
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var contentHeight = this.contentEl.scrollHeight;

      if (this.expanded) {
        this.transition(0, contentHeight);
      } else {
        this.transition(contentHeight, 0);
      }
    }
  }, {
    key: "headerEl",
    get: function get() {
      return this.querySelector('[data-header]');
    }
  }, {
    key: "contentEl",
    get: function get() {
      return this.querySelector('[data-content]');
    }
  }, {
    key: "expanded",
    get: function get() {
      return this.hasAttribute('expanded');
    },
    set: function set(bool) {
      if (bool) {
        this.setAttribute('expanded', '');
      } else {
        this.removeAttribute('expanded');
      }
    }
  }], [{
    key: "observedAttributes",
    get:   }]);

  return PromoAccordion;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// EXTERNAL MODULE: ./styleguide/util/ps-toggler.js
var ps_toggler = __webpack_require__(28);

// CONCATENATED MODULE: ./styleguide/global/ReadMore.js







function ReadMore_createSuper(Derived) { var hasNativeReflectConstruct = ReadMore_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ReadMore_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ReadMore_ReadMore = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(ReadMore, _HTMLElement);

  var _super = ReadMore_createSuper(ReadMore);

  function ReadMore() {
    classCallCheck_default()(this, ReadMore);

    return _super.apply(this, arguments);
  }

  createClass_default()(ReadMore, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.style.setProperty('--lineClamp', this.lineClamp);

      if (document.readyState === 'complete') {
        this.update();
      } else {
        window.addEventListener('load', this);
      }

      window.addEventListener('resize', this);
      this.addEventListener('click', this);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (event.target.matches('[data-click="expand"]')) {
        event.preventDefault();
        this.expanded = true;
      }

      if (event.target.matches('[data-click="collapse"]')) {
        event.preventDefault();
        this.expanded = false;
      }
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'load' || event.type === 'resize') {
        this.update();
      }

      if (event.type === 'click') {
        this.handleClick(event);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.clipping = this.contentElement.scrollHeight > this.contentElement.clientHeight;
    }
  }, {
    key: "contentElement",
    get: function get() {
      return this.querySelector('.ReadMore-content');
    }
  }, {
    key: "lineClamp",
    get: function get() {
      return this.getAttribute('line-clamp');
    }
  }, {
    key: "clipping",
    get: function get() {
      return this.hasAttribute('clipping');
    },
    set: function set(bool) {
      bool ? this.setAttribute('clipping', true) : this.removeAttribute('clipping');
    }
  }, {
    key: "expanded",
    set: function set(bool) {
      bool ? this.setAttribute('expanded', true) : this.removeAttribute('expanded');
    }
  }]);

  return ReadMore;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/search/SearchFilter.js







function SearchFilter_createSuper(Derived) { var hasNativeReflectConstruct = SearchFilter_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SearchFilter_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var SearchFilter_SearchFilter = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(SearchFilter, _HTMLElement);

  var _super = SearchFilter_createSuper(SearchFilter);

  function SearchFilter() {
    classCallCheck_default()(this, SearchFilter);

    return _super.apply(this, arguments);
  }

  createClass_default()(SearchFilter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.addEventListener('click', this);
      this.expandFirstFilterOnDesktop();
    }
  }, {
    key: "expandFirstFilterOnDesktop",
    value: function expandFirstFilterOnDesktop() {
      if (document.querySelector('ps-search-filter') === this && MediaQuery_DEFAULT_BREAKPOINT_OPTIONS.desktop.includes(getMediaQuery())) {
        this.expanded = true;
      }
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'click') {
        if (event.target.closest('.SearchFilter-heading') || event.target.matches('.SearchFilter-heading')) {
          this.expanded = !this.expanded;
          return;
        }
      }
    }
  }, {
    key: "disconnectedCallback",
    value:   }, {
    key: "expanded",
    get: function get() {
      return this.hasAttribute('expanded');
    },
    set: function set(bool) {
      bool ? this.setAttribute('expanded', '') : this.removeAttribute('expanded');
    }
  }, {
    key: "isCurrent",
    get: function get() {
      return this.hasAttribute('is-current');
    },
    set: function set(bool) {
      bool ? this.setAttribute('is-current', '') : this.removeAttribute('is-current');
    }
  }]);

  return SearchFilter;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/search/SearchFilters.js







function SearchFilters_createSuper(Derived) { var hasNativeReflectConstruct = SearchFilters_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SearchFilters_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var SearchFilters_SearchFilters = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(SearchFilters, _HTMLElement);

  var _super = SearchFilters_createSuper(SearchFilters);

  function SearchFilters() {
    classCallCheck_default()(this, SearchFilters);

    return _super.apply(this, arguments);
  }

  createClass_default()(SearchFilters, [{
    key: "connectedCallback",
    value:   }, {
    key: "cacheElements",
    value: function cacheElements() {
      this.searchResultsModule = document.querySelector('.SearchResultsModule');
      this.searchForm = document.querySelector('.SearchResultsModule-form');
      this.searchSort = this.querySelector('.SearchResultsModule-sorts select');
      this.filtersOpenButton = this.querySelectorAll('.SearchResultsModule-filters-open');
      this.filtersCloseButton = this.querySelector('.SearchResultsModule-filters-close');
      this.filtersOverlay = this.querySelector('.SearchResultsModule-filters-overlay');
      this.filtersApply = this.querySelector('.SearchResultsModule-filters-apply');
      this.filtersApplyButton = this.filtersApply.querySelector('button');
      this.filtersSeeAll = this.querySelectorAll('.SearchFilter-seeAll');
      this.filters = this.querySelectorAll('.SearchFilterInput input');
      this.selectedFiltersArray = [];
      this.selectedFilters = this.querySelector('.SearchResultsModule-filters-selected');
      this.selectedFiltersReset = this.querySelector('.SearchResultsModule-filters-selected-reset');
      this.selectedFiltersContent = this.querySelector('.SearchResultsModule-filters-selected-content');
    }
  }, {
    key: "handleSortSelect",
    value: function handleSortSelect() {
      var _this = this;

      if (this.searchSort) {
        this.searchSort.addEventListener('change', ;
      }
    } // If we are on a bigger media query, autosubmit the form when we change filters

  }, {
    key: "handleFiltersSelect",
    value: function handleFiltersSelect() {
      var _this2 = this;

      this.filters.forEach(function (item) {
        item.addEventListener('click', function () {
          if (MediaQuery_DEFAULT_BREAKPOINT_OPTIONS.desktop.includes(getMediaQuery())) {
            _this2.gatherSelectedFilters(); // Using API of search results module


            _this2.searchResultsModule.submitSearch();
          }
        });
      });
    } // Submit the form on apply button, AJAX is handled by the form itself

  }, {
    key: "handleFiltersApply",
    value: function handleFiltersApply() {
      var _this3 = this;

      this.filtersApply.addEventListener('change', ;
      this.filtersApplyButton.addEventListener('click', function (e) {
        console.log('click');
        e.preventDefault();

        _this3.gatherSelectedFilters();

        _this3.closeOverlay(); // Using API of search results module


        _this3.searchResultsModule.submitSearch();
      });
    } // open and close the filters overlay using our own API

  }, {
    key: "handleFiltersOverlay",
    value: function handleFiltersOverlay() {
      var _this4 = this;

      this.filtersOpenButton.forEach(;
      this.filtersCloseButton.addEventListener('click', function (e) {
        e.preventDefault();

        _this4.closeOverlay();
      });
    }
  }, {
    key: "handleSelectedFiltersRemove",
    value: function handleSelectedFiltersRemove() {
      var _this5 = this;

      var selectedFilters = this.querySelectorAll('.SearchResultsModule-filters-selected-filter');
      selectedFilters.forEach(function (selectedFilter) {
        selectedFilter.querySelector('a').addEventListener('click', function (e) {
          e.preventDefault();

          _this5.removeSelectedFilter(selectedFilter);
        });
      });
    }
  }, {
    key: "removeSelectedFilter",
    value: function removeSelectedFilter(selectedFilter) {
      var value = selectedFilter.getAttribute('data-value');
      var filter = this.querySelectorAll("[value=\"".concat(value, "\"]")); // just in case we have some weird setup with multiple same values

      filter.forEach(;
      this.gatherSelectedFilters(); // Using API of search results module

      this.searchResultsModule.submitSearch();
    }
  }, {
    key: "gatherSelectedFilters",
    value: function gatherSelectedFilters() {
      var _this6 = this;

      this.selectedFiltersArray = [];
      this.filters = this.querySelectorAll('.SearchFilterInput input');
      this.filters.forEach(function (filter) {
        if (filter.checked) {
          var label = filter.parentElement.querySelector('span').innerHTML;
          var value = filter.getAttribute('value');

          _this6.selectedFiltersArray.push({
            label: label,
            value: value
          });
        }
      });
    }
  }, {
    key: "openOverlay",
    value: function openOverlay() {
      this.filtersOverlay.setAttribute('data-filters-open', true);
      document.body.setAttribute('data-filters-open', true);
    }
  }, {
    key: "closeOverlay",
    value: function closeOverlay() {
      console.log('overlay closed');
      this.filtersOverlay.removeAttribute('data-filters-open');
      document.body.removeAttribute('data-filters-open');
    }
  }]);

  return SearchFilters;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// EXTERNAL MODULE: ./styleguide/analytics/Tracking.js
var Tracking = __webpack_require__(10);

// CONCATENATED MODULE: ./styleguide/core/search/SearchResultsModule.js







function SearchResultsModule_createSuper(Derived) { var hasNativeReflectConstruct = SearchResultsModule_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SearchResultsModule_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var SearchResultsModule_SearchResultsModule = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(SearchResultsModule, _HTMLElement);

  var _super = SearchResultsModule_createSuper(SearchResultsModule);

  function SearchResultsModule() {
    classCallCheck_default()(this, SearchResultsModule);

    return _super.apply(this, arguments);
  }

  createClass_default()(SearchResultsModule, [{
    key: "connectedCallback",
    value:   }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit() {
      var _this = this;

      this.searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        _this.searchInput && _this.searchInput.blur();
        var formUrl = new URLSearchParams(new FormData(_this.searchForm)).toString();
        var ajaxUrl = window.location.pathname + '?' + formUrl;
        window.history.replaceState({}, document.title, ajaxUrl);
        _this.loadingTimeout = setTimeout(function () {
          _this.clearSearchForm();
        }, 1000);

        _this.getNewSearch(ajaxUrl).then(function (response) {
          clearTimeout(_this.loadingTimeout);

          _this.clearSearchForm();

          _this.renderSearchResults(response);

          document.body.dispatchEvent(new CustomEvent('Search:onSearchUpdate', {
            detail: {
              responseMarkup: response
            }
          }));
        });
      });
    }
    /* External API to submit the search, which just triggers this event, which kicks
       off the Ajax stuffs */

  }, {
    key: "submitSearch",
    value: function submitSearch() {
      var submitEvent;

      if (typeof Event === 'function') {
        submitEvent = new Event('submit');
      } else {
        submitEvent = document.createEvent('Event');
        submitEvent.initEvent('submit', true, true);
      }

      this.searchForm.dispatchEvent(submitEvent);
    }
  }, {
    key: "getNewSearch",
    value: function getNewSearch(apiUrl) {
      return new Promise(;
    }
  }, {
    key: "clearSearchForm",
    value:   }, {
    key: "checkInputValue",
    value: function checkInputValue() {
      if (!this.searchInput) return;

      if (this.searchInput.value.length === 0) {
        this.searchForm.setAttribute('data-has-value', false);
      } else {
        this.searchForm.setAttribute('data-has-value', true);
      }
    }
  }, {
    key: "handleSearchInput",
    value: function handleSearchInput() {
      var _this2 = this;

      this.searchInput && this.searchInput.addEventListener('keyup', throttle(250, function () {
        _this2.checkInputValue();
      }));
      this.clearButton && this.clearButton.addEventListener('click', ;
    }
  }, {
    key: "renderSearchResults",
    value: function renderSearchResults(response) {
      // filter HTML response
      var filterDiv = document.createElement('div');
      filterDiv.innerHTML = response;
      var searchResultsFromResponse = filterDiv.querySelector('.SearchResultsModule-ajax').innerHTML;

      if (searchResultsFromResponse) {
        this.searchResults.innerHTML = searchResultsFromResponse;
      }

      var extraDataElement = filterDiv.querySelector('[data-bsp-analytics-data]');

      if (extraDataElement) {
        Tracking["a" /* Tracking */].extraData = extraDataElement.dataset.bspAnalyticsData;
      }

      this.dispatchRendered();
    }
  }, {
    key: "dispatchRendered",
    value: function dispatchRendered() {
      var pageViewEvent = new CustomEvent('Bsp:PageView', {
        bubbles: true
      });
      this.dispatchEvent(pageViewEvent);
      var customEvent = new CustomEvent('Ajax:Rendered', {
        bubbles: true
      });
      document.body.dispatchEvent(customEvent);
    }
  }, {
    key: "cacheElements",
    value: function cacheElements() {
      this.searchForm = this.querySelector('.SearchResultsModule-form');
      this.searchInput = this.searchForm.querySelector('.SearchResultsModule-formInput');
      this.searchResults = this.querySelector('.SearchResultsModule-ajax');
      this.clearButton = this.searchForm.querySelector('.SearchResultsModule-clearInputButton');
    }
  }]);

  return SearchResultsModule;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// EXTERNAL MODULE: ./node_modules/flickity/js/index.js
var js = __webpack_require__(37);
var js_default = /*#__PURE__*/__webpack_require__.n(js);

// CONCATENATED MODULE: ./styleguide/core/navigation/SectionNavigation.js







function SectionNavigation_createSuper(Derived) { var hasNativeReflectConstruct = SectionNavigation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SectionNavigation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // widths determined by designs

var carouselViewport = 767;
var SectionNavigation_SectionNavigation = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(SectionNavigation, _HTMLElement);

  var _super = SectionNavigation_createSuper(SectionNavigation);

  function SectionNavigation() {
    classCallCheck_default()(this, SectionNavigation);

    return _super.apply(this, arguments);
  }

  createClass_default()(SectionNavigation, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.init();
      this.setEventListeners(); // this.setBinds()
    }
  }, {
    key: "init",
    value: function init() {
      this.childEls = this.querySelectorAll('.SectionNavigation-items-item');
      this.items = this.querySelector('.SectionNavigation-items');
      this.navItem = this.querySelectorAll('.SectionNavigationItem-text-link');
    } // initializing event Listeners

  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      window.addEventListener('load', function () {
        if (window.innerWidth < carouselViewport) {
          _this.setCarousel();
        }
      });
      window.addEventListener('resize', throttle(250, function () {
        if (window.innerWidth < carouselViewport) {
          _this.setCarousel();
        } else {
          _this.destroyCarousel();
        }
      }));
    } // creates carousel if enough items

  }, {
    key: "setCarousel",
    value: function setCarousel() {
      if (this.flickity === undefined) {
        this.flickity = new js_default.a(this.items, {
          contain: true,
          cellAlign: 'left',
          adaptiveHeight: true,
          prevNextButtons: false,
          pageDots: false,
          wrapAround: true
        });
        this.flickity.resize();
      }
    } // destroys carousel

  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.flickity) {
        this.flickity.destroy();
        this.flickity = undefined;
      }
    }
  }]);

  return SectionNavigation;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/form/input/ToggleInput.js







function ToggleInput_createSuper(Derived) { var hasNativeReflectConstruct = ToggleInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ToggleInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ToggleInput_ToggleInput = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(ToggleInput, _HTMLElement);

  var _super = ToggleInput_createSuper(ToggleInput);

  function ToggleInput() {
    classCallCheck_default()(this, ToggleInput);

    return _super.apply(this, arguments);
  }

  createClass_default()(ToggleInput, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      this.checked = this.input.checked;
      this.addEventListener('change', function (_ref) {
        var target = _ref.target;

        if (target === _this.input) {
          _this.checked = _this.input.checked;
        }
      });
    }
  }, {
    key: "input",
    get: function get() {
      return this.querySelector('input');
    }
  }, {
    key: "checked",
    set: function set(bool) {
      bool ? this.setAttribute('checked', '') : this.removeAttribute('checked');
    }
  }]);

  return ToggleInput;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/youtube/YouTubeVideoPlayer.js






function YouTubeVideoPlayer_createSuper(Derived) { var hasNativeReflectConstruct = YouTubeVideoPlayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function YouTubeVideoPlayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var YouTubeVideoPlayer_YouTubeVideoPlayer = /*#__PURE__*/function (_PlyrVideoPlayer) {
  inherits_default()(YouTubeVideoPlayer, _PlyrVideoPlayer);

  var _super = YouTubeVideoPlayer_createSuper(YouTubeVideoPlayer);

  function YouTubeVideoPlayer() {
    classCallCheck_default()(this, YouTubeVideoPlayer);

    return _super.apply(this, arguments);
  }

  createClass_default()(YouTubeVideoPlayer, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (this.plyr) {
        this.plyr.source = {
          type: 'video',
          sources: [{
            src: this.videoId,
            provider: 'youtube'
          }]
        };
      }

      if (this.plyr && this.state) {
        this.plyr.autoplay = this.state.playing;
        this.plyr.once('ready', ;
      }
    }
  }, {
    key: "plyrContainerElement",
    get: function get() {
      return this.querySelector('div');
    }
  }]);

  return YouTubeVideoPlayer;
}(PlyrVideoPlayer_PlyrVideoPlayer);
// CONCATENATED MODULE: ./styleguide/util/CSSVarOutput.js







function CSSVarOutput_createSuper(Derived) { var hasNativeReflectConstruct = CSSVarOutput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function CSSVarOutput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* global HTMLElement Promise setTimeout getComputedStyle */

var CSSVarOutput_CSSVarOutput = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(CSSVarOutput, _HTMLElement);

  var _super = CSSVarOutput_createSuper(CSSVarOutput);

  function CSSVarOutput() {
    classCallCheck_default()(this, CSSVarOutput);

    return _super.apply(this, arguments);
  }

  createClass_default()(CSSVarOutput, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      this.cssvar = this.getAttribute('var');
      window.addEventListener('load', function () {
        _this.innerHTML = _this.getVarValue();
      });
      window.addEventListener('resize', throttle(250, );
    }
  }, {
    key: "getVarValue",
    value: function getVarValue() {
      var val = getComputedStyle(document.documentElement).getPropertyValue(this.cssvar);
      val = val.endsWith('rem') ? "".concat(Number(val.slice(0, -3)) * 10, "px") : val;
      return val;
    }
  }]);

  return CSSVarOutput;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// EXTERNAL MODULE: ./styleguide/core/search/VerticalBookSearchModule.js
var VerticalBookSearchModule = __webpack_require__(29);

// CONCATENATED MODULE: ./styleguide/All.js
/* global customElements */

/* eslint-disable no-new */

/* eslint-disable no-unused-vars */

/* eslint-disable no-undef */

/* eslint-disable camelcase */
__webpack_require__.p = window.resourceBaseUrl;




























function registerCustomElements() {
  customElements.define('ps-audio-player', AudioPlayer_AudioPlayer);
  customElements.define('ps-banner', Banner["a" /* Banner */]);
  customElements.define('ps-accordion-promo', PromoAccordion_PromoAccordion);
  customElements.define('ps-custom-dropdown', CustomDropdown_CustomDropdown);
  customElements.define('ps-enhancement-carousel', EnhancementCarousel_EnhancementCarousel);
  customElements.define('ps-form', form_All["d" /* Form */]);
  customElements.define('ps-captcha-input', form_All["a" /* CaptchaInput */]);
  customElements.define('ps-file-input', form_All["c" /* FileInput */]);
  customElements.define('ps-ecommerce-list', EcommerceList_EcommerceList);
  customElements.define('ps-email-input', form_All["b" /* EmailInput */]);
  customElements.define('ps-google-captcha', form_All["e" /* GoogleCaptcha */]);
  customElements.define('ps-text-input', form_All["j" /* TextInput */]);
  customElements.define('ps-password-input', form_All["f" /* PasswordInput */]);
  customElements.define('ps-phone-number-input', form_All["g" /* PhoneNumberInput */]);
  customElements.define('ps-text-area', form_All["i" /* TextArea */]);
  customElements.define('ps-select', form_All["h" /* Select */]);
  customElements.define('ps-gallery-page', GalleryPage_GalleryPage);
  customElements.define('ps-html5player', HTML5VideoPlayer_HTML5VideoPlayer);
  customElements.define('ps-list-carousel-g', ListCarouselG_ListCarouselG);
  customElements.define('ps-list-loadmore', ListLoadMore_ListLoadMore);
  customElements.define('ps-nav', Navigation_Navigation);
  customElements.define('ps-masonry-list', ListMasonry_MasonryList);
  customElements.define('ps-message', Message_Message);
  customElements.define('ps-read-more', ReadMore_ReadMore);
  customElements.define('ps-search-filter', SearchFilter_SearchFilter);
  customElements.define('ps-search-filters', SearchFilters_SearchFilters);
  customElements.define('ps-search-results-module', SearchResultsModule_SearchResultsModule);
  customElements.define('ps-section-nav', SectionNavigation_SectionNavigation);
  customElements.define('ps-toggle-input', ToggleInput_ToggleInput);
  customElements.define('ps-toggler', ps_toggler["a" /* PsToggler */]);
  customElements.define('ps-youtubeplayer', YouTubeVideoPlayer_YouTubeVideoPlayer);
  customElements.define('video-player-controls', VideoPlayerControls_VideoPlayerControls);
  customElements.define('bsp-cssvaroutput', CSSVarOutput_CSSVarOutput);
  customElements.define('abe-vertical-book-search', VerticalBookSearchModule["a" /* VerticalBookSearchModule */]);
  new LazyLoadImages["a" /* LazyLoadImages */]();
}

var onDomContentLoaded = function onDomContentLoaded() {
  registerCustomElements(); // ABEEXT-54

  var customModules = document.querySelectorAll('.Abemodule');
  var abemodulesContent = '.homepage-recommendations-widget-mount';
  customModules.forEach(function (module) {
    var content = module.querySelector(abemodulesContent) || module.querySelector('.amw-mount');

    if (!content || content.innerHTML.trim().length === 0) {
      module.setAttribute('data-has-content', false);
    } else {
      module.setAttribute('data-has-content', true);
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onDomContentLoaded);
} else {
  onDomContentLoaded();
}

/* harmony default export */ var styleguide_All = __webpack_exports__["default"] = ({});

/***/ })
/******/ ]);