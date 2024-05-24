((window, function() {
return /******/ (
/************************************************************************/
/******/ ([
/* 0 */
/***/ (,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // requires CustomEvent polyfill for IE
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent


var CustomEvent = __webpack_require__(14);

var util = __webpack_require__(13); // the main landmark


var mainEl; // the element that will be trapped

var trappedEl; // collection of elements that get 'dirtied' with aria-hidden attr or hidden prop

var dirtyObjects; // filter function for svg elements

var filterSvg = function filterSvg(item) {
  return item.tagName.toLowerCase() !== 'svg';
};

function showElementPrep(el, useHiddenProperty) {
  var preparedElement;

  if (useHiddenProperty === false) {
    preparedElement = prepareElement(el, 'aria-hidden', 'false');
  } else {
    preparedElement = prepareElement(el, 'hidden', false);
  }

  return preparedElement;
}

function hideElementPrep(el, useHiddenProperty) {
  var preparedElement;

  if (useHiddenProperty === false) {
    preparedElement = prepareElement(el, 'aria-hidden', 'true');
  } else {
    preparedElement = prepareElement(el, 'hidden', true);
  }

  return preparedElement;
}

function prepareElement(el, attributeName, dirtyValue) {
  var isProperty = typeof dirtyValue === 'boolean';
  return {
    el: el,
    attributeName: attributeName,
    cleanValue: isProperty ? el[attributeName] : el.getAttribute(attributeName),
    dirtyValue: dirtyValue,
    isProperty: isProperty
  };
}

function dirtyElement(preparedObj) {
  if (preparedObj.isProperty === true) {
    preparedObj.el[preparedObj.attributeName] = preparedObj.dirtyValue;
  } else {
    preparedObj.el.setAttribute(preparedObj.attributeName, preparedObj.dirtyValue);
  }
}

function cleanElement(preparedObj) {
  if (preparedObj.cleanValue) {
    if (preparedObj.isProperty === true) {
      preparedObj.el[preparedObj.attributeName] = preparedObj.cleanValue;
    } else {
      preparedObj.el.setAttribute(preparedObj.attributeName, preparedObj.cleanValue);
    }
  } else {
    preparedObj.el.removeAttribute(preparedObj.attributeName);
  }
}

function untrap() {
  if (trappedEl) {
    // restore 'dirtied' elements to their original state
    dirtyObjects.forEach(function (item) {
      return cleanElement(item);
    });
    dirtyObjects = []; // 're-enable' the main landmark

    if (mainEl) {
      mainEl.setAttribute('role', 'main');
    } // let observers know the screenreader is now untrapped


    trappedEl.dispatchEvent(new CustomEvent('screenreaderUntrap', {
      bubbles: true
    }));
    trappedEl = null;
  }
}

var defaultOptions = {
  useHiddenProperty: false
};

function trap(el, selectedOptions) {
  // ensure current trap is deactivated
  untrap();

  var options = _extends({}, defaultOptions, selectedOptions); // update the trapped el reference


  trappedEl = el; // update the main landmark reference

  mainEl = document.querySelector('main, [role="main"]'); // we must remove the main landmark to avoid issues on voiceover iOS

  if (mainEl) {
    mainEl.setAttribute('role', 'presentation');
  } // cache all ancestors, siblings & siblings of ancestors for trappedEl


  var ancestors = util.getAncestors(trappedEl);
  var siblings = util.getSiblings(trappedEl);
  var siblingsOfAncestors = util.getSiblingsOfAncestors(trappedEl); // if using hidden property, filter out SVG elements as they do not support this property

  if (options.useHiddenProperty === true) {
    siblings = siblings.filter(filterSvg);
    siblingsOfAncestors = siblingsOfAncestors.filter(filterSvg);
  } // prepare elements


  dirtyObjects = [showElementPrep(trappedEl, options.useHiddenProperty)].concat(ancestors.map(function (item) {
    return showElementPrep(item, options.useHiddenProperty);
  })).concat(siblings.map(function (item) {
    return hideElementPrep(item, options.useHiddenProperty);
  })).concat(siblingsOfAncestors.map(); // update DOM

  dirtyObjects.forEach(function (item) {
    return dirtyElement(item);
  }); // let observers know the screenreader is now trapped

  trappedEl.dispatchEvent(new CustomEvent('screenreaderTrap', {
    bubbles: true
  }));
}

module.exports = {
  trap: trap,
  untrap: untrap
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: 

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: 

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = error.stack.split('\n').filter( this);

            return filtered.map(function(line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame({
                    functionName: functionName,
                    fileName: fileName,
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        },

        parseFFOrSafari: 

        parseOpera: 

        parseOpera9: 

        parseOpera10: 

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11:     };
}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Shylog = (function () {
    function Shylog(_a) {
        var _b = _a === void 0 ? { emit: false, logger: console.log } : _a, emit = _b.emit, logger = _b.logger;
        this.emit = emit;
        this.externalLogger = logger;
        this.buffer = [];
        this.customLevel = {};
        this.error = this.setLevel(1);
        this.warn = this.setLevel(2);
        this.info = this.setLevel(3);
        this.log = this.setLevel(4);
    }
    Shylog.prototype.getLogs = function (level) {
        if (typeof level === 'function') {
            return this.buffer.filter(function (log) { return log.level === level.level; });
        }
        else {
            return level ? this.buffer.filter(function (log) { return log.level === level; }) : this.buffer;
        }
    };
    Shylog.prototype.setLevel = function (level) {
        var _this = this;
        var logFn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var message = { level: level, time: Date.now(), msg: args.join(' ') };
            _this.buffer.push(message);
            _this.emit && _this.externalLogger(message);
        };
        logFn.level = level;
        this.customLevel[level] = logFn;
        return logFn;
    };
    return Shylog;
}());
exports.default = Shylog;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind







/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */

Promise.prototype['catch'] = 

Promise.prototype.then = 

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = 

Promise.reject = 

Promise.race = 

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
     ||
  

Promise._unhandledRejectionFn = 

/* harmony default export */ __webpack_exports__["a"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18).setImmediate))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /vidyard/vidyard-player-sdk/node_modules/promise-polyfill/src/index.js
var src = __webpack_require__(5);

// CONCATENATED MODULE: ./src/utils/promise.ts

var isFn = 
var checkNativePromise = function (_a) {
    var Promise = (_a === void 0 ? window : _a).Promise;
    return Promise &&
        Promise.all &&
        Promise.race &&
        Promise.resolve &&
        Promise.reject &&
        isFn(Promise) &&
        isFn(Promise.all) &&
        isFn(Promise.race) &&
        isFn(Promise.resolve) &&
        isFn(Promise.reject);
};
var promiseFn = checkNativePromise() ? window.Promise : src["a" /* default */];
/* harmony default export */ var promise = (promiseFn);

// CONCATENATED MODULE: ./src/utils/embed-helpers.ts
/*
* File contains the minimum amount of helper functions to allow embed to work in IE9+
* Has no access to jQuery / Underscore etc
*/

var addListener = function (eventName, oldIeEventName, handler, element) {
    if (element === void 0) { element = window; }
    if (window.addEventListener) {
        element.addEventListener(eventName, handler, false);
    }
    else if (window.attachEvent) {
        element.attachEvent(oldIeEventName, handler);
    }
    return { eventName: eventName, handler: handler, element: element };
};
var removeListener = function (eventName, handler, element) {
    if (element === void 0) { element = window; }
    if (element.removeEventListener) {
        element.removeEventListener(eventName, handler, false);
    }
    else if (element.detachEvent) {
        element.detachEvent('on' + eventName, handler);
    }
    else {
        element['on' + eventName] = null;
    }
};
var createEvent = function (eventName, payload) {
    if (typeof window.CustomEvent === 'function') {
        return new window.CustomEvent(eventName, { detail: payload });
    }
    else if (typeof document.createEvent === 'function') {
        var legacyCustomEvent = document.createEvent('CustomEvent');
        legacyCustomEvent.initCustomEvent(eventName, false, false, payload);
        return legacyCustomEvent;
    }
};
var isObjectEmpty = function (obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
};
var indexOfArray = function (item, arr) {
    if (arr.indexOf) {
        return arr.indexOf(item);
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};
var shallowMerge = 
// TODO: change to getElementsByClass
var getElementByClass = function (className, tagName, topLevelNode) {
    if (tagName === void 0) { tagName = '*'; }
    if (topLevelNode === void 0) { topLevelNode = document; }
    if (typeof document.getElementsByClassName === 'function') {
        return topLevelNode.getElementsByClassName(className);
    }
    var results = [];
    var re = new RegExp('(^| )' + className + '( |$)');
    var nodes = toArray(topLevelNode.getElementsByTagName(tagName));
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        if (re.test(node.className)) {
            results.push(node);
        }
    }
    return results;
};
var calcAspectRatio = function (imageEl, additionalWidth) {
    if (additionalWidth === void 0) { additionalWidth = 0; }
    var size = getNaturalDimensions(imageEl);
    // fallback to landscape aspect ratio if the image does not have proper size
    return size.height !== 0 || size.width !== 0
        ? ((size.height / (size.width + additionalWidth)) * 100).toFixed(2)
        : ((9 / 16) * 100).toFixed(2); // landscape 16:9 aspect ratio, equals to 56.25%
};
var embed_helpers_log = function (message, logType) {
    if (logType === void 0) { logType = 'log'; }
    if (window.console && typeof window.console[logType] === 'function') {
        console[logType](message);
    }
};
var find = function (array, test) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        var res = test(item);
        if (res === true) {
            return item;
        }
    }
};
var includes = 
var once = function (callback) {
    var expired = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (expired) {
            return;
        }
        if (callback) {
            callback.apply(void 0, args);
        }
        expired = true;
    };
};
var spaceOrEnterKeyPressEvent = function (callback) { return  };
var escKeyPressEvent = function (callback) { return  };
var getCurrentScript = function () {
    // need to check for currentScript because it does not exist in IE
    return document.currentScript
        ? document.currentScript
        : find(toArray(document.getElementsByTagName('script')), function (script) {
            return script.src &&
                (script.src.match('vidyard-embed-code.js') !== null ||
                    script.src.match(/v4(\.umd)?\.js/) !== null);
        });
};
var getNaturalDimensions = function (ele) {
    if (ele.naturalWidth) {
        return { width: ele.naturalWidth, height: ele.naturalHeight };
    }
    var img = new Image();
    img.src = ele.src;
    return { width: img.width, height: img.height };
};
var isArray = 
var toArray = 
var checkJSONParse = 
var xhrRequest = function (_a) {
    var endpoint = _a.endpoint, _b = _a.payload, payload = _b === void 0 ? {} : _b, _c = _a.method, method = _c === void 0 ? 'GET' : _c;
    return new promise(function (res, rej) {
        // IE 8/9 needs to send CORS requests over XDomainRequest
        var isXDomain = new XMLHttpRequest().withCredentials === undefined && XDomainRequest;
        var xhr = isXDomain ? new XDomainRequest() : new XMLHttpRequest();
        xhr.open(method, endpoint);
        if (xhr instanceof XMLHttpRequest) {
            xhr.setRequestHeader('Content-Type', 'text/plain');
        }
        xhr.onerror = function (e) { return rej(e); };
        xhr.onload = function () {
            if (xhr instanceof XMLHttpRequest) {
                if (Math.floor(xhr.status / 100) === 2) {
                    // 200 range
                    res(xhr.responseText);
                }
                else {
                    rej();
                }
            }
            else {
                // XDomainRequest does not have status
                res(xhr.responseText);
            }
        };
        xhr.send(JSON.stringify(payload));
    });
};
var getFullscreenAPI = function () {
    var apiMap = [
        // Spec: https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html
        ['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenchange'],
        // WebKit
        [
            'webkitRequestFullscreen',
            'webkitExitFullscreen',
            'webkitFullscreenElement',
            'webkitfullscreenchange',
        ],
        // Mozilla
        ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozfullscreenchange'],
        // Microsoft
        ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'MSFullscreenChange'],
    ];
    var browserAPI = [];
    var fullscreenAPI = {};
    for (var _i = 0, apiMap_1 = apiMap; _i < apiMap_1.length; _i++) {
        var browserMethods = apiMap_1[_i];
        // check for exitFullscreen function
        if (browserMethods[1] in document) {
            browserAPI = browserMethods;
            break;
        }
    }
    // map the browser API names to the spec API names
    if (browserAPI && browserAPI.length) {
        for (var i = 0; i < browserAPI.length; i++) {
            fullscreenAPI[apiMap[0][i]] = browserAPI[i];
        }
        return fullscreenAPI;
    }
    else {
        return null;
    }
};
var dataSet = function (el) {
    var collection = {};
    var parseAttributeName = 
    // can't do for-of here as el.attributes is not an array
    // tslint:disable-next-line
    for (var i = 0; i < el.attributes.length; i += 1) {
        var attr = el.attributes[i];
        if (attr.name.indexOf('data-') < 0) {
            continue;
        }
        collection[parseAttributeName(attr)] = attr.value;
    }
    return collection;
};
var getQueryParam = function (name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regexString = '[\\?&]' + name + '=([^&#]*)';
    var regex = new RegExp(regexString);
    var results = regex.exec(window.location.search);
    if (results !== null) {
        return results[1];
    }
};
var parseNestedData = function (encodedData, type) {
    try {
        var nestedData_1 = JSON.parse(decodeURIComponent(encodedData));
        return Object.keys(nestedData_1).reduce(function (acc, key) {
            acc[type + "[" + key + "]"] = nestedData_1[key];
            return acc;
        }, {});
    }
    catch (e) {
        embed_helpers_log("Invalid " + type + " payload", 'warn');
        return {};
    }
};
var parseVyData = function (data) {
    return Object.keys(data).reduce(function (acc, key) {
        if (key === 'vydata') {
            var parsedData_1 = parseNestedData(data[key], 'vydata');
            Object.keys(parsedData_1).forEach(function (parsedKey) {
                acc[parsedKey] = parsedData_1[parsedKey];
            });
        }
        else {
            acc[key] = data[key];
        }
        return acc;
    }, {});
};
// https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
var toggleClass = function (element, classToToggle, forceBoolean) {
    var hasClass = 
    var addClass = function (ele, targetClass) {
        if (!hasClass(ele, targetClass)) {
            ele.className = ele.className.trim() + " " + targetClass;
        }
    };
    var removeClass = function (ele, targetClass) {
        if (hasClass(ele, targetClass)) {
            ele.className = ele.className.replace(targetClass, ' ').trim();
        }
    };
    if (forceBoolean === true) {
        addClass(element, classToToggle);
    }
    else if (forceBoolean === false) {
        removeClass(element, classToToggle);
    }
    else if (hasClass(element, classToToggle)) {
        removeClass(element, classToToggle);
    }
    else {
        addClass(element, classToToggle);
    }
};

// CONCATENATED MODULE: ./src/utils/constants.ts
var VERSION = "4.3.14";
var ERROR_ORIGIN_RE = /vidyard\.com\/embed\/v4/;
var INTEGRATIONS_URL = '/integrations.js';
var OVERLAY_FADE_TIME = 0.5;
var PLAYLIST_WIDTH = 319;
var SEO_DETAILS_URL = '/details.js';
var STYLE_PATH = '/style.js';

// CONCATENATED MODULE: ./src/utils/config.ts

var dynamicPlaybackURL = (function playbackURL() {
    var playbackURLOverride;
    return {
        setPlaybackURL: 
        getPlaybackURL: function () {
            // override the `PLAYBACK_URL` if data-playbackurl exists on the script tag
            var currentScript = getCurrentScript();
            var stagingPlaybackUrl = currentScript
                ? currentScript.getAttribute('data-playbackurl')
                : null;
            return (playbackURLOverride ||
                window.VIDYARD_PLAYBACK_URL ||
                stagingPlaybackUrl ||
                'play.vidyard.com');
        },
    };
})();

var setPlaybackURL = dynamicPlaybackURL.setPlaybackURL;
var getPlaybackURL = dynamicPlaybackURL.getPlaybackURL;
var getBaseURL = function () { return "https://" + getPlaybackURL() + "/v4/"; };
var getErrorURL = 

// CONCATENATED MODULE: ./src/utils/frame-messenger.ts
/*
* Provides an ie7 compatable way of sending messages to iframes
* If in a modern browser, will just use postmessage
*/

// --- Public Functions ---
var send = function (message, targetOrigin, target) {
    if (!targetOrigin || !target) {
        return;
    }
    if (window.postMessage && target.contentWindow) {
        // The browser supports window.postMessage, so call it with a targetOrigin
        // set appropriately, based on the target_url parameter.
        target.contentWindow.postMessage(JSON.stringify(message), targetOrigin);
    }
    else {
        // If the window does not support postmessaging, only 'associateVisitor' events are supported
        // Internally the player will have specific handling for these cases
        if (message.event !== 'associateVisitor') {
            return;
        }
        var stringMessage = message.event + "," + message.data.type + "," + message.data.value + "|";
        var targetSrc = target.src;
        if (targetSrc.indexOf('#') === -1) {
            targetSrc += '#';
        }
        // The browser does not support window.postMessage, so set the location
        // of the target to target_url#message. A bit ugly, but it works!
        targetSrc += stringMessage;
        target.src = targetSrc;
    }
};
var receive = function (callback) { return function (postMessage) {
    var data = parse(postMessage);
    if (!data) {
        return;
    }
    callback(data);
}; };
// --- Private Functions ---
function parse(event) {
    if (typeof event.data !== 'string' || event.data === '') {
        return;
    }
    try {
        var data = JSON.parse(event.data);
        var iframe = getElementByClass('vidyard-iframe-' + data.uuid, 'iframe')[0];
        // event validation
        var contentWindow = iframe ? iframe.contentWindow : null;
        var sameSource = contentWindow === event.source;
        var validEvent = typeof data.event === 'string';
        if (!sameSource || !validEvent) {
            return;
        }
        return data;
    }
    catch (e) {
        embed_helpers_log('Invalid postMessage received', 'warn');
        return;
    }
}

// CONCATENATED MODULE: ./src/models/integrations-watcher.ts



// All possible cookie names we would look for, the message names are different from the cookie keys
var cookieNames = [
    'pardot',
    'hubspotutk',
    '_mkto_trk',
    'vy_dreamforce',
    'eloqua',
];
var messageNames = [
    'pardot',
    'hubspot',
    'marketo',
    'dreamforce',
    'eloqua',
];
function IntegrationsWatcher() {
    var _this = this;
    var cookieCheckInterval = null;
    var loadedEloquaScript = false;
    var organizations = {};
    // --- Public Functions ---
    this.updatePlayer = function (player) {
        // Don't continue if we don't have an iframe and integration information
        if (!player._tmpOrg || !player.iframe) {
            return;
        }
        var orgId = player._tmpOrg.orgId;
        if (!organizations[orgId]) {
            organizations[orgId] = {
                foundIntegrations: {},
                id: orgId,
                // All integrations supported by this organization
                integrations: player._tmpOrg,
                // Store of cookie data found keyed by integration name
                // Each integration has an externalIdentifier set with the tracking cookie/uuid if found
                // as well as an object with which players have been sent the associateVisitor event
                // e.g. {integration: {externalIdentifier: 'cookie_value', sentPlayers: ['player1.uuid']}}
                // In DOM players associated with this organization
                players: [],
            };
        }
        player.org = organizations[orgId];
        // Check if this player has already been added to the organizations list
        // if so, do nothing
        for (var _i = 0, _a = organizations[orgId].players; _i < _a.length; _i++) {
            var currentPlayer = _a[_i];
            if (currentPlayer.iframe === player.iframe) {
                return;
            }
        }
        organizations[orgId].players.push(player);
        var _b = player.org.integrations, eloqua = _b.eloqua, eloquaFirstPartyDomain = _b.eloquaFirstPartyDomain;
        if (eloqua) { // Only load the eloqua script if the player needs it
            // Only load the tracking script if the user has given GDPR consent
            if (player.status !== null && player.status.consent) {
                // Note: This function only does something the first time it is called
                loadEloquaTrackingScript(eloqua, eloquaFirstPartyDomain);
            }
            else {
                player.on('status', function handleStatus() {
                    if (player.status.consent) {
                        loadEloquaTrackingScript(eloqua, eloquaFirstPartyDomain);
                        player.off('status', handleStatus);
                    }
                });
            }
        }
        // Loop over all integrations setup with this org & communicate them to the player
        // making sure to only send the event once per player & integration
        checkForIntegrations();
    };
    // Use function chaining to ensure a Player is only messaged about an integration once
    // It is expected that `updatePlayer` is called on a player before this
    this.safelyCommunicateIntegration = function (player, integration, externalIdentifier) {
        if (player.org !== undefined &&
            externalIdentifier !== undefined &&
            externalIdentifier !== null &&
            !haveSentIntegrationToPlayer(player, integration) &&
            communicateIntegration(player, integration, externalIdentifier)) {
            player.org = setIntegrationSent(player.org, integration, player.uuid);
        }
    };
    this.addKnownVisitor = function (integrationName, visitorData, org) {
        if (!org) {
            return;
        }
        // Go through and message all active players
        for (var _i = 0, _a = org.players; _i < _a.length; _i++) {
            var player = _a[_i];
            communicateKnownVisitor(player, integrationName, visitorData);
        }
    };
    // @TODO: switch the return type form any to unknown once we upgrade TS
    // Loop through all available cookies and return the value for cookieName if found
    this.getCookie = function (integration, organization) {
        var cookies = document.cookie.split(';');
        if (integration === 'eloqua' && typeof window.GetElqCustomerGUID === 'function') {
            // GetElqCustomerGUID is put on the DOM by Eloqua tracking scripts
            return window.GetElqCustomerGUID();
        }
        var cookieName = alterDynamicCookieName(cookieNames[messageNames.indexOf(integration)], organization);
        // Loop through all cookies looking for supplied cookie name
        for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
            var currentCookie = cookies_1[_i];
            var equalIndex = currentCookie.indexOf('=');
            var foundName = currentCookie.substr(0, equalIndex).replace(/^\s+|\s+$/g, '');
            var foundId = currentCookie.substr(equalIndex + 1);
            if (foundName === cookieName) {
                return decodeURIComponent(foundId);
            }
        }
    };
    // --- Private Functions ---
    // Return true if the integration cookie event has already been sent to this Player
    var haveSentIntegrationToPlayer = function (player, integration) {
        return (player.org &&
            player.org.foundIntegrations &&
            player.org.foundIntegrations[integration] &&
            player.org.foundIntegrations[integration].sentPlayers &&
            indexOfArray(player.uuid, player.org.foundIntegrations[integration].sentPlayers) !== -1);
    };
    // Initialize object to track integration cookies and
    // players which have been sent the cookie already
    var setupFoundIntegration = function (org, integration) {
        if (!org.foundIntegrations[integration]) {
            org.foundIntegrations[integration] = {
                externalIdentifier: null,
                sentPlayers: [],
            };
        }
        return org;
    };
    var setIntegrationSent = function (org, integration, playerUuid) {
        org = setupFoundIntegration(org, integration);
        org.foundIntegrations[integration].sentPlayers.push(playerUuid);
        return org;
    };
    var setIntegrationIdentifier = function (org, integration, externalIdentifier) {
        org = setupFoundIntegration(org, integration);
        org.foundIntegrations[integration].externalIdentifier = externalIdentifier;
        return org;
    };
    // Send event to Player with integration external identifier
    var communicateIntegration = function (player, integration, externalIdentifier) {
        if (!player.ready()) {
            return false;
        }
        // Player iframe already exists, message it about the integration
        var message = {
            data: { type: integration, value: externalIdentifier },
            event: 'associateVisitor',
            uuid: player.uuid,
        };
        embed_helpers_log('IntegrationsWatcher.communicateIntegration ' + message, 'debug');
        send(message, "https://" + getPlaybackURL(), player.iframe);
        return true;
    };
    // Go through and message all active players on DOM which haven't already been sent
    var messagePlayersFoundIntegration = function (players, integration, externalIdentifier) {
        if (players === undefined || externalIdentifier === undefined || externalIdentifier === null) {
            return;
        }
        for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
            var player = players_1[_i];
            _this.safelyCommunicateIntegration(player, integration, externalIdentifier);
        }
    };
    var sendKnownVisitor = 
    var communicateKnownVisitor = function (player, leadType, leadData) {
        if (!player.ready()) {
            // Setup callback if Player not ready yet
            player.on('ready', ;
        }
        else {
            // Player iframe already exists, message it about the lead
            sendKnownVisitor(player, leadType, leadData);
        }
    };
    // Find any integration trackers on the page and send to each player that hasn't received yet
    var checkForIntegrations = function () {
        // Go through all possible integration
        for (var _i = 0, messageNames_1 = messageNames; _i < messageNames_1.length; _i++) {
            var integration = messageNames_1[_i];
            // Loop through all orgs and see if they care about this integration
            for (var orgKey in organizations) {
                if (organizations.hasOwnProperty(orgKey)) {
                    var currentOrganization = organizations[orgKey];
                    // Do nothing if the org doesn't have this integration
                    if (!currentOrganization.integrations[integration]) {
                        continue;
                    }
                    // Check if integration tracker is present on the page
                    var cookieValue = _this.getCookie(integration, currentOrganization);
                    if (!cookieValue) {
                        continue;
                    }
                    cookieValue = parseCookieValue(integration, cookieValue, currentOrganization);
                    // parseCookieValue can return null if Marketo cookie doesn't match Munchkin ID
                    if (!cookieValue) {
                        continue;
                    }
                    currentOrganization = setIntegrationIdentifier(currentOrganization, integration, cookieValue);
                    messagePlayersFoundIntegration(currentOrganization.players, integration, cookieValue);
                }
            }
        }
    };
    // Pardot uses a dynamic cookie name, set it up here
    var alterDynamicCookieName = function (cookieName, organization) {
        if (cookieName === 'pardot' && organization && organization.integrations.pardot) {
            return 'visitor_id' + organization.integrations.pardot;
        }
        return cookieName;
    };
    var parseCookieValue = function (msgName, cookieValue, org) {
        if (msgName === 'marketo') {
            // Make sure this cookie is actually for this players organization
            if (!org.integrations.marketo ||
                cookieValue.toLowerCase().indexOf(org.integrations.marketo.toLowerCase()) === -1) {
                return null;
            }
            cookieValue = encodeURIComponent(cookieValue);
        }
        return cookieValue;
    };
    var loadEloquaTrackingScript = function (siteId, firstPartyDomain) {
        if (loadedEloquaScript) {
            return;
        }
        loadedEloquaScript = true;
        var createEloquaScriptNode = function () {
            // Only set up Eloqua tracking script once (including v3 & hubs)
            if (document.getElementById('vidyard-eloqua-include')) {
                return;
            }
            window._elqQ = window._elqQ || [];
            window._elqQ.push(['elqSetSiteId', siteId]);
            if (firstPartyDomain) {
                window._elqQ.push(['elqUseFirstPartyCookie', firstPartyDomain]);
            }
            window._elqQ.push(['elqTrackPageView']);
            window._elqQ.push(['elqGetCustomerGUID']);
            var eloquaScript = document.createElement('script');
            eloquaScript.id = 'vidyard-eloqua-include';
            eloquaScript.type = 'text/javascript';
            eloquaScript.async = true;
            eloquaScript.src = 'https://img.en25.com/i/elqCfg.min.js';
            var firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(eloquaScript, firstScript);
        };
        if (document.readyState === 'complete') {
            createEloquaScriptNode();
        }
        else {
            addListener('DOMContentLoaded', 'onload', createEloquaScriptNode);
        }
    };
    cookieCheckInterval = setInterval(function () {
        // We check for new cookies every second in case the player is on a page with
        // tracking scripts that will be dynamically adding new cookies at some point
        checkForIntegrations();
    }, 1000);
}

// CONCATENATED MODULE: ./src/api/dispatch-ready.ts

// Allows the client to listen for the Vidyard API to become available
// Example:
// window.VidyardV4
//   ? initApp(window.VidyardV4)
//   : (window.onVidyardAPI = (vyApi) => initApp(vyApi));
//
// Or with promises:
// new Promise(res => window.VidyardV4
//   ? res(window.VidyardV4)
//   : (window['onVidyardAPI'] = (vyApi) => res(vyApi))
// ).then((vyApi) => {
//   console.log('api is ready ', vyApi);
// });
var readyCallback = function () {
    if (window.onVidyardAPI && typeof window.onVidyardAPI === 'function') {
        window.onVidyardAPI(window.VidyardV4);
    }
};
// We also dispatch a custom event on document indicating that the API is ready
// Example:
// window.VidyardV4
//   ? initApp(window.VidyardV4)
//   : document.addEventListener('onVidyardAPI', ({ detail: vyApi }) => initApp(vyApi));
var readyEvent = function () {
    document.dispatchEvent(createEvent('onVidyardAPI', window.VidyardV4));
};
var dispatchReady = once(;
/* harmony default export */ var dispatch_ready = (dispatchReady);

// EXTERNAL MODULE: /vidyard/vidyard-player-sdk/node_modules/shylog/build/index.js
var build = __webpack_require__(3);
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// CONCATENATED MODULE: ./src/api/debug.ts



var logger = new build_default.a({
    emit: !!window.location.search.match('vydebug=1'),
    logger: 
});
var debug_currentScript = getCurrentScript();
if (debug_currentScript) {
    logger.info("vidyardEmbed V" + VERSION + " loaded from " + debug_currentScript.src);
    logger.info("data-playbackurl=" + debug_currentScript.getAttribute('data-playbackurl'));
}
logger.info("userAgent " + window.navigator.userAgent);
logger.info("cookies " + navigator.cookieEnabled);
if (window.performance && window.performance.timing && window.performance.timing.navigationStart) {
    logger.info("Script load time " + (Date.now() - window.performance.timing.navigationStart));
}
var debug = { logger: logger, getPlaybackURL: getPlaybackURL, setPlaybackURL: setPlaybackURL, version: VERSION };
/* harmony default export */ var api_debug = (debug);

// CONCATENATED MODULE: ./src/api/add-ready-listener.ts

// cb: callback when a player is ready, uuid: optional filter to only listen for individual player uuids
function addReadyListener(cb, uuid) {
    var playerReadyListeners = window.VidyardV4.playerReadyListeners;
    // Store all callbacks for any yet to be created players
    playerReadyListeners[uuid] = playerReadyListeners[uuid] || [];
    playerReadyListeners[uuid].push(cb);
    // Add ready listeners to all currently available players
    for (var _i = 0, _a = window.VidyardV4.players; _i < _a.length; _i++) {
        var currentPlayer = _a[_i];
        // Is this the correct player OR are they setting up listeners for every player
        if (uuid !== undefined && currentPlayer.uuid !== uuid) {
            continue;
        }
        currentPlayer.on('ready', cb);
    }
}
function processReadyListeners(player) {
    var playerReadyListeners = window.VidyardV4.playerReadyListeners;
    var uuid = player.uuid;
    var log = logger.setLevel(player.uuid);
    // Ensure the cb set for this uuid is defined
    playerReadyListeners[uuid] = playerReadyListeners[uuid] || [];
    // Get the total set of callbacks for this uuid && all uuids
    var callbacks = playerReadyListeners[uuid].concat(playerReadyListeners[undefined]);
    // Loop through all cbs and add them to the players listeners
    Object.keys(callbacks).forEach(function (k) {
        var callback = callbacks[k];
        player.on('ready', callback);
        log("attaching ready callbacks");
    });
}

// CONCATENATED MODULE: ./src/models/markup-injector.ts
/*
* Injection of the base html / CSS for the player iframe
* Does not handle showing/hiding lightboxes, see LightboxHelper for that madness
*/

var allowFeaturePolicy = function () {
    var features = [
        'autoplay',
        'fullscreen',
        'picture-in-picture',
        'camera',
        'microphone',
        'display-capture',
        'clipboard-write'
    ];
    return features.join('; ');
};
var createIframe = function (dataParams, sizing) {
    // We only want to limit the max-height and max-width for inline embeds
    // Can't apply this directly to the iframe element because it affects fullscreen in IE11
    var maxSizeDiv = function (children) { return (dataParams.type === 'inline' ? ('<div ' +
        'class="vidyard-inner-container-' + dataParams.uuid + '" ' +
        'style="' +
        'position: absolute;' +
        'height: 100%; ' +
        'width: 100%; ' +
        (sizing.maxWidth ? 'max-width: ' + sizing.maxWidth + 'px; ' : '') +
        (sizing.maxHeight ? 'max-height: ' + sizing.maxHeight + 'px; ' : '') +
        '"' +
        '> ' +
        children +
        '</div> ') : children); };
    return ('<div ' +
        'class="vidyard-div-' + dataParams.uuid + '" ' +
        'role="region" ' +
        'aria-label="Vidyard media player" ' +
        'style="' +
        // This would change to relative once the iframe is loaded
        'position: absolute; ' +
        'padding-bottom: ' + sizing.ratio + '%; ' +
        'height: 0; ' +
        'overflow: hidden; ' +
        'max-width: 100%; ' +
        '"' +
        '>' +
        maxSizeDiv('<iframe ' +
            'allow="' + allowFeaturePolicy() + '"' +
            'allowfullscreen ' +
            'allowtransparency="true" ' +
            'referrerpolicy="no-referrer-when-downgrade" ' +
            'class="vidyard-iframe-' + dataParams.uuid + '" ' +
            'frameborder=0 ' +
            'height="100%" ' +
            'width="100%" ' +
            'scrolling=no ' +
            'src="https://' + getPlaybackURL() + '/' + dataParams.uuid + dataParams.toQueryString() + '" ' +
            'title="Vidyard video player" ' +
            'style="' +
            'opacity: 0; ' +
            'background-color: transparent; ' +
            'position: absolute; ' +
            'top: 0; ' +
            'left: 0;' +
            '"' +
            '>' +
            '</iframe>') +
        '</div>');
};
// @TODO: better data type
var createJsonLD = function (data) {
    var playerDetailsScriptTag = document.createElement('script');
    playerDetailsScriptTag.type = 'application/ld+json';
    playerDetailsScriptTag.text = JSON.stringify(data);
    return playerDetailsScriptTag;
};

// CONCATENATED MODULE: ./src/utils/jsonp.ts
/*
* Provides functions which perform JSONP requests to the server.
* All URLs etc are stored within this file.
*/



var getStyle = function (uuid) {
    return new promise(function (res, rej) {
        return request({
            error: rej,
            success: res,
            url: "" + getBaseURL() + uuid + STYLE_PATH,
            uuid: "style_" + uuid,
        });
    });
};
var getIntegrations = function (uuid) {
    return new promise(function (res, rej) {
        return request({
            error: rej,
            success: res,
            url: "" + getBaseURL() + uuid + INTEGRATIONS_URL,
            uuid: "integrations_" + uuid,
        });
    });
};
var getSEO = function (uuid) {
    return new promise(function (res, rej) {
        return request({
            error: rej,
            success: res,
            url: "" + getBaseURL() + uuid + SEO_DETAILS_URL,
            uuid: "details_" + uuid,
        });
    });
};
var getMarketoLead = function (uuid, marketoCookie) {
    return new promise(function (res, rej) {
        var cookie = encodeURIComponent(marketoCookie);
        var contactUrl = "" + getBaseURL() + uuid + "/contact/" + cookie + "/marketoContact.js";
        request({
            error: rej,
            success: res,
            url: contactUrl,
            uuid: "marketoContact_" + uuid,
        });
    });
};
var createJSONPTag = function (_a) {
    var error = _a.error, url = _a.url, requestUuid = _a.requestUuid;
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.onerror = error;
    script.src = url + "?callback=window.VidyardV4.jsonp." + requestUuid + ".done";
    // Anticipating a potential error when getPlaybackURL() is called when the JSONP script is current:
    // Setting data-playbackurl here makes it safe to use getPlaybackURL during all stages of load.
    script.setAttribute('data-playbackurl', getPlaybackURL());
    document.body.appendChild(script);
    return script;
};
// track all jsonp requests
var jsonpRequests = {};
var request = function (_a) {
    var url = _a.url, uuid = _a.uuid, success = _a.success, error = _a.error;
    // Function names can't include "-" because it's interpreted as a subtract operator
    // Strip them out here and in the player backend to prevent errors
    var requestUuid = uuid.replace(/-/g, '');
    var script = createJSONPTag({ error: error, url: url, requestUuid: requestUuid });
    // each response callback will only be called once
    var onRes = once(;
    // store all jsonp requests in a closure
    jsonpRequests[requestUuid] = jsonpRequests[requestUuid] || [];
    jsonpRequests[requestUuid].push(onRes);
    window.VidyardV4.jsonp[requestUuid] = {
        done: 
    };
};

// CONCATENATED MODULE: ./src/utils/messages.ts
/* harmony default export */ var messages = ({
    errors: {
        placeholder: 'Cannot render the player, check the placeholder Image',
    }
});

// CONCATENATED MODULE: ./src/models/placeholder.ts
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





var loadPlaceholder = function (img) {
    if (!img) {
        return promise.reject(new Error(messages.errors.placeholder));
    }
    var _a = getNaturalDimensions(img), width = _a.width, height = _a.height;
    var uuid = img.getAttribute('data-uuid');
    // reject images without source or uuid
    if (img.src === '' || !uuid) {
        return promise.reject(new Error(messages.errors.placeholder));
    }
    // reject images that are loaded and have no size
    if (img.complete && (width === 0 || height === 0)) {
        return promise.reject(new Error(messages.errors.placeholder));
    }
    if (img.complete) {
        // image is already loaded
        return promise.resolve(img);
    }
    else {
        // load the image
        return new promise(function (res, rej) {
            img.onload = function () { return res(img); };
            img.onerror = function () { return rej(img); };
        });
    }
};
var createPlaceholder = function (_a) {
    if (_a === void 0) { _a = {}; }
    var uuid = _a.uuid, container = _a.container, _b = _a.type, type = _b === void 0 ? 'inline' : _b, _c = _a.aspect, aspect = _c === void 0 ? 'landscape' : _c, other = __rest(_a, ["uuid", "container", "type", "aspect"]);
    if (!uuid || !container) {
        return;
    }
    logger.setLevel('placeholder')('creating placeholder image');
    var image = document.createElement('img');
    var width = other.width ? other.width + "px" : '100%';
    var height = other.height ? other.height + "px" : '100%';
    var style = "\n    display: block;\n    margin: 0 auto;\n    max-height: " + height + ";\n    max-width: " + width + ";\n    opacity: 0;\n  ";
    image.src = "https://" + getPlaybackURL() + "/" + uuid + ".jpg";
    image.className = 'vidyard-player-embed';
    image.setAttribute('style', style);
    image.setAttribute('data-uuid', uuid);
    image.setAttribute('data-type', type);
    // assign all of the other keys as data params on the image
    Object.keys(other).forEach(;
    return container.appendChild(image);
};
var loadServerThumbnail = function (uuid) {
    var image = document.createElement('img');
    image.setAttribute('data-uuid', uuid);
    image.src = "//" + getPlaybackURL() + "/" + uuid + ".jpg";
    return loadPlaceholder(image);
};

// CONCATENATED MODULE: ./src/controllers/inline-player.ts







var injectInlineElements = function (_a) {
    var dataParams = _a.dataParams, player = _a.player;
    var log = logger.setLevel(dataParams.uuid);
    log("injecting inline embed");
    var updateAspectRatio = function () {
        // Get thumbnail from server and calculate aspect ratio if the placeholder is different (edge case)
        if (player.placeholder.src !== "//" + getPlaybackURL() + "/" + player.uuid + ".jpg") {
            return loadServerThumbnail(player.uuid)
                .then(calcAspectRatio)
                .catch(function () { return false; });
        }
        return promise.resolve(false);
    };
    var sizing = {
        maxHeight: dataParams.height ? parseInt(dataParams.height, 10).toString() : null,
        maxWidth: dataParams.width ? parseInt(dataParams.width, 10).toString() : null,
        ratio: calcAspectRatio(player.placeholder),
    };
    // Create and attach the players iframe & containing <div>
    player.container.innerHTML = createIframe(dataParams, sizing);
    var iframe = player.container.getElementsByTagName('iframe')[0];
    player.iframe = iframe;
    var iframeLoadedPromise = new promise(;
    var playerReadyPromise = new promise(function (res) {
        player.on('ready', res);
    });
    player.on('sidePlaylistOpen', ;
    // The iframe will finish first, usually.
    promise.race([iframeLoadedPromise, playerReadyPromise]).then(function () {
        log("player or iFrame is ready");
        // If the placeholder image is different than the server thumbnail, update the aspect ratio
        // to be consistent with the server thumbnail (edge case)
        updateAspectRatio().then(function (newAspectRatio) {
            if (newAspectRatio) {
                iframe.parentElement.parentElement.style.paddingBottom = newAspectRatio + "%";
            }
        });
        var innerContainer = player.container.getElementsByClassName("vidyard-inner-container-" + player.uuid)[0];
        // Copy the place holder image to the iframe's parent element
        player.placeholder.parentElement.removeChild(player.placeholder);
        toggleClass(player.placeholder, 'inserted', true);
        innerContainer.appendChild(player.placeholder);
        // This inserts the iframe into the document flow
        iframe.parentElement.parentElement.style.position = 'relative';
        // Be sure that the iframe is fully visible
        iframe.style.opacity = '1';
    });
    iframeLoadedPromise.then(function () {
        // Hide the placeholder image only after the iframe has loaded
        player.placeholder.style.display = 'none';
        iframe.parentElement.parentElement.style.backgroundColor = 'transparent';
    });
    // Set the iframe title to match the video title after player metadata is ready
    player.on('metadata', function updateInlineIframeTitle(args) {
        var metadata = args[0];
        iframe.title = metadata.name;
        player.off('metadata', updateInlineIframeTitle);
    });
    function handleResize() {
        // The breakpoint is the side playlist width, doubled. If the available space is less, we need to hide the side playlist.
        var aboveBreakpoint = player.container.clientWidth >= PLAYLIST_WIDTH * 2;
        toggleClass(player.container, 'playlist-open', aboveBreakpoint);
    }
    log("getStyle sent");
    getStyle(player.uuid).then(
    // pl is the "playlist always open" setting from the Dashboard.
    function (data) {
        log("getStyle received: " + JSON.stringify(data));
        var playlistAlwaysOpen = (data.pl === 1 && dataParams.playlist_always_open !== '0') ||
            dataParams.playlist_always_open === '1';
        if (playlistAlwaysOpen) {
            player.iframe.parentElement.setAttribute('data-pl', 'true');
            addListener('resize', 'onresize', handleResize);
            handleResize();
        }
        else {
            player.iframe.parentElement.setAttribute('data-pl', 'false');
        }
    }).catch(function (e) {
        log('getStyle failed, likely a network error');
    });
};
/* harmony default export */ var inline_player = (injectInlineElements);

// CONCATENATED MODULE: ./src/utils/accessibility-helpers.ts
/*
* The following helpers are needed for an iOS modal accessibility workaround
* https://www.tpgi.com/the-current-state-of-modal-dialog-accessibility/
*/
/*
* Apply aria-hidden="true" for all children of element, and if necessary
* storing the current aria-hidden value as data-vy-keep-hidden
*/
var ariaHideChildElements = function (element) {
    if (element === void 0) { element = document.body; }
    for (var _i = 0, _a = Array.from(element.children); _i < _a.length; _i++) {
        var el = _a[_i];
        if (el.hasAttribute('aria-hidden')) {
            el.setAttribute('data-vy-keep-hidden', el.getAttribute('aria-hidden'));
        }
        el.setAttribute('aria-hidden', 'true');
    }
};
/*
* Restore the previous aria-hidden value for all children of element
* data-vy-keep-hidden indicates the previous value was "true"
*/
var undoAriaHideChildElements = function (element) {
    if (element === void 0) { element = document.body; }
    for (var _i = 0, _a = Array.from(element.children); _i < _a.length; _i++) {
        var el = _a[_i];
        if (el.getAttribute('data-vy-keep-hidden')) {
            el.setAttribute('aria-hidden', el.getAttribute('data-vy-keep-hidden'));
        }
        else {
            el.removeAttribute('aria-hidden');
        }
        el.removeAttribute('data-vy-keep-hidden');
    }
};

// CONCATENATED MODULE: ./src/utils/user-agent-checker.ts
/* harmony default export */ var user_agent_checker = ({
    ios: 
});

// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/utils/array.js
var array_toArray = function toArray(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};

var arrayFind = function arrayFind(array, search) {
  return array.filter(function (a) {
    return a === search;
  })[0];
};

var asArray = 
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/constants.js
var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/focusIsHidden.js



var focusIsHidden_focusIsHidden = function focusIsHidden() {
  return document && array_toArray(document.querySelectorAll('[' + FOCUS_ALLOW + ']')).some(;
};

/* harmony default export */ var es2015_focusIsHidden = (focusIsHidden_focusIsHidden);
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/utils/all-affected.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? : 




var filterNested = function filterNested(nodes) {
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    var _loop = function _loop(j) {
      if (i !== j) {
        if (nodes[i].contains(nodes[j])) {
          return {
            v: filterNested(nodes.filter()
          };
        }
      }
    };

    for (var j = 0; j < l; j += 1) {
      var _ret = _loop(j);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }
  return nodes;
};

var getTopParent = 

var all_affected_getAllAffectedNodes = function getAllAffectedNodes(node) {
  var nodes = asArray(node);
  return nodes.filter(Boolean).reduce(function (acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(array_toArray(getTopParent(currentNode).querySelectorAll('[' + FOCUS_GROUP + '="' + group + '"]:not([' + FOCUS_DISABLED + '="disabled"])'))) : [currentNode]);
    return acc;
  }, []);
};

/* harmony default export */ var all_affected = (all_affected_getAllAffectedNodes);
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/focusInside.js



var focusInFrame = 

var focusInside_focusInsideIframe = function focusInsideIframe(topNode) {
  return !!arrayFind(array_toArray(topNode.querySelectorAll('iframe')), focusInFrame);
};

var focusInside_focusInside = function focusInside(topNode) {
  var activeElement = document && document.activeElement;

  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return all_affected(topNode).reduce( false);
};

/* harmony default export */ var es2015_focusInside = (focusInside_focusInside);
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/utils/tabOrder.js


var tabSort = function tabSort(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;

  if (tabDiff) {
    if (!a.tabIndex) return 1;
    if (!b.tabIndex) return -1;
  }

  return tabDiff || indexDiff;
};

var tabOrder_orderByTabIndex = function orderByTabIndex(nodes, filterNegative, keepGuards) {
  return array_toArray(nodes).map(.filter(.sort(tabSort);
};
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/utils/tabbables.js
/* harmony default export */ var tabbables = (['button:enabled:not([readonly])', 'select:enabled:not([readonly])', 'textarea:enabled:not([readonly])', 'input:enabled:not([readonly])', 'a[href]', 'area[href]', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]', '[autofocus]']);
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/utils/tabUtils.js




var queryTabbables = tabbables.join(',');
var queryGuardTabbables = queryTabbables + ', [data-focus-guard]';

var tabUtils_getFocusables = function getFocusables(parents, withGuards) {
  return parents.reduce( []);
};

var tabUtils_getParentAutofocusables = function getParentAutofocusables(parent) {
  var parentFocus = parent.querySelectorAll('[' + FOCUS_AUTO + ']');
  return array_toArray(parentFocus).map(.reduce( []);
};
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/utils/DOMutils.js




var isElementHidden = function isElementHidden(computedStyle) {
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
};

var isVisible = function isVisible(node) {
  return !node || node === document || node.nodeType === Node.DOCUMENT_NODE || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode);
};

var notHiddenInput = function notHiddenInput(node) {
  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};

var getParents = function getParents(node) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode, parents);
  }
  return parents;
};

var getCommonParent = function getCommonParent(nodea, nodeb) {
  var parentsA = getParents(nodea);
  var parentsB = getParents(nodeb);

  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};

var DOMutils_filterFocusable = function filterFocusable(nodes) {
  return array_toArray(nodes).filter(function (node) {
    return isVisible(node);
  }).filter(function (node) {
    return notHiddenInput(node);
  });
};

var DOMutils_getTabbableNodes = function getTabbableNodes(topNodes, withGuards) {
  return tabOrder_orderByTabIndex(DOMutils_filterFocusable(tabUtils_getFocusables(topNodes, withGuards)), true, withGuards);
};

var DOMutils_getAllTabbableNodes = 

var DOMutils_parentAutofocusables = 
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/utils/firstFocus.js
var isRadio = function isRadio(node) {
  return node.tagName === 'INPUT' && node.type === 'radio';
};

var findSelectedRadio = function findSelectedRadio(node, nodes) {
  return nodes.filter(isRadio).filter(.filter([0] || node;
};

var pickFirstFocus = function pickFirstFocus(nodes) {
  if (nodes[0] && nodes.length > 1) {
    if (isRadio(nodes[0]) && nodes[0].name) {
      return findSelectedRadio(nodes[0], nodes);
    }
  }
  return nodes[0];
};

var pickFocusable = function pickFocusable(nodes, index) {
  if (nodes.length > 1) {
    if (isRadio(nodes[index]) && nodes[index].name) {
      return nodes.indexOf(findSelectedRadio(nodes[index], nodes));
    }
  }
  return index;
};

/* harmony default export */ var utils_firstFocus = (pickFirstFocus);
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/focusMerge.js





var findAutoFocused = function findAutoFocused(autoFocusables) {
  return 
};

var isGuard = 
var notAGuard = 

var focusMerge_newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode, autoFocused) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);

  // focus is inside
  if (innerNodes.indexOf(activeElement) >= 0) {
    return undefined;
  }

  var activeIndex = outerNodes.indexOf(activeElement);
  var lastIndex = outerNodes.indexOf(lastNode || activeIndex);
  var lastNodeInside = innerNodes.indexOf(lastNode);
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);

  var returnFirstNode = pickFocusable(innerNodes, 0);
  var returnLastNode = pickFocusable(innerNodes, cnt - 1);

  // new focus
  if (activeIndex === -1 || lastNodeInside === -1) {
    return innerNodes.indexOf(autoFocused && autoFocused.length ? utils_firstFocus(autoFocused) : utils_firstFocus(innerNodes));
  }
  // old focus
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  // first element
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  // last element
  if (activeIndex >= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  // jump out, but not on the guard
  if (indexDiff && Math.abs(indexDiff) > 1) {
    return lastNodeInside;
  }
  // focus above lock
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  // focus below lock
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  // index is inside tab order, but outside Lock
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  // do nothing
  return undefined;
};

var focusMerge_getTopCommonParent = function getTopCommonParent(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = null;
  leftEntries.filter(Boolean).forEach(function (entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function (subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || common.contains(topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};

var focusMerge_allParentAutofocusables = 

var reorderNodes = function reorderNodes(srcNodes, dstNodes) {
  var remap = new Map();
  // no Set(dstNodes) for IE11 :(
  dstNodes.forEach(;
  // remap to dstNodes
  return srcNodes.map(function (node) {
    return remap.get(node);
  }).filter(Boolean);
};

var focusMerge_getFocusabledIn = function getFocusabledIn(topNode) {
  var entries = all_affected(topNode).filter(notAGuard);
  var commonParent = focusMerge_getTopCommonParent(topNode, topNode, entries);
  var outerNodes = DOMutils_getTabbableNodes([commonParent], true);
  var innerElements = DOMutils_getTabbableNodes(entries).filter(function (_ref) {
    var node = _ref.node;
    return notAGuard(node);
  }).map(function (_ref2) {
    var node = _ref2.node;
    return node;
  });

  return outerNodes.map(function (_ref3) {
    var node = _ref3.node,
        index = _ref3.index;
    return {
      node: node,
      index: index,
      lockItem: innerElements.indexOf(node) >= 0,
      guard: isGuard(node)
    };
  });
};

var focusMerge_getFocusMerge = function getFocusMerge(topNode, lastNode) {
  var activeElement = document && document.activeElement;
  var entries = all_affected(topNode).filter(notAGuard);

  var commonParent = focusMerge_getTopCommonParent(activeElement || topNode, topNode, entries);

  var innerElements = DOMutils_getTabbableNodes(entries).filter(function (_ref4) {
    var node = _ref4.node;
    return notAGuard(node);
  });

  if (!innerElements[0]) {
    innerElements = DOMutils_getAllTabbableNodes(entries).filter(;
    if (!innerElements[0]) {
      return undefined;
    }
  }

  var outerNodes = DOMutils_getTabbableNodes([commonParent]).map(function (_ref6) {
    var node = _ref6.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(;

  var newId = focusMerge_newFocus(innerNodes, outerNodes, activeElement, lastNode, innerNodes.filter(findAutoFocused(focusMerge_allParentAutofocusables(entries))));

  if (newId === undefined) {
    return newId;
  }
  return orderedInnerElements[newId];
};

/* harmony default export */ var focusMerge = (focusMerge_getFocusMerge);
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/setFocus.js


var focusOn = function focusOn(target) {
  target.focus();
  if (target.contentWindow) {
    target.contentWindow.focus();
  }
};

var guardCount = 0;
var lockDisabled = false;

/* harmony default export */ var setFocus = (function (topNode, lastNode) {
  var focusable = focusMerge(topNode, lastNode);

  if (lockDisabled) {
    return;
  }

  if (focusable) {
    if (guardCount > 2) {
      // eslint-disable-next-line no-console
      console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
      lockDisabled = true;
      setTimeout(function () {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node);
    guardCount--;
  }
});
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/focus-lock/dist/es2015/index.js










/* harmony default export */ var es2015 = (setFocus);
// CONCATENATED MODULE: /vidyard/vidyard-player-sdk/node_modules/dom-focus-lock/dist/index.esm.js


var lastActiveTrap = 0;
var lastActiveFocus = null;

var focusOnBody = 

var index_esm_isFreeFocus = 

var index_esm_activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var observed = lastActiveTrap;

    if (!index_esm_isFreeFocus()) {
      if (observed && !es2015_focusInside(observed)) {
        result = es2015(observed, lastActiveFocus);
      }

      lastActiveFocus = document.activeElement;
    }
  }

  return result;
};

var reducePropsToState = function reducePropsToState(propsList) {
  return propsList.filter(.slice(-1)[0];
};

var handleStateChangeOnClient = function handleStateChangeOnClient(trap) {
  lastActiveTrap = trap;

  if (trap) {
    index_esm_activateTrap();
  }
};

var instances = [];

var emitChange = function emitChange(event) {
  if (handleStateChangeOnClient(reducePropsToState(instances))) {
    event && event.preventDefault();
    return true;
  }

  return false;
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', emitChange);
};

var detachHandler = 

var focusLock = {
  on: function on(domNode) {
    if (instances.length === 0) {
      attachHandler();
    }

    if (instances.indexOf(domNode) < 0) {
      instances.push(domNode);
      emitChange();
    }
  },
  off: function off(domNode) {
    instances = instances.filter(;
    emitChange();

    if (instances.length === 0) {
      detachHandler();
    }
  }
};

/* harmony default export */ var index_esm = (focusLock);

// EXTERNAL MODULE: /vidyard/vidyard-player-sdk/node_modules/makeup-screenreader-trap/index.js
var makeup_screenreader_trap = __webpack_require__(1);
var makeup_screenreader_trap_default = /*#__PURE__*/__webpack_require__.n(makeup_screenreader_trap);

// CONCATENATED MODULE: ./src/views/lightbox.ts
/*
* Applies and controls styles relating to centering the lightbox within the parent window
*/






function show(iframeString, thumbnailContainer, overlayZindex) {
    var container = generateLightboxContainer(iframeString);
    var lightbox = generateLightboxHTML(overlayZindex);
    var lightboxConstraint = generateConstraintImage(thumbnailContainer);
    // Needed so that the lightbox isn't the last element in the <body> to
    // allow focusLock to listen for a focus event when focus leaves the
    // last element in the lightbox
    var focusableElement = document.createElement('div');
    focusableElement.id = 'vidyard-focusable-element';
    focusableElement.tabIndex = 0;
    lightbox.popbox.appendChild(container.backerElement);
    lightbox.popbox.appendChild(container.containingDiv);
    lightbox.popbox.appendChild(lightboxConstraint);
    if (user_agent_checker.ios()) {
        ariaHideChildElements();
    }
    // Add them to the DOM
    document.body.appendChild(lightbox.overlayWrapper);
    document.body.appendChild(focusableElement);
    lightbox.closeContainer.focus();
    index_esm.on(lightbox.overlayWrapper);
    makeup_screenreader_trap_default.a.trap(lightbox.overlayWrapper);
    // Have to use a timeout so css will actually transition the opacity
    setTimeout( 0);
    return {
        container: container,
        lightbox: lightbox,
    };
}
function remove(callbacks) {
    var fixedElement = document.getElementById('vidyard-content-fixed');
    var focusableElement = document.getElementById('vidyard-focusable-element');
    var overlay = document.getElementById('vidyard-overlay');
    var overlayWrapper = document.getElementById('vidyard-overlay-wrapper');
    var popbox = document.getElementById('vidyard-popbox');
    if (!fixedElement || !overlay || !overlayWrapper || !popbox) {
        return;
    }
    if (callbacks) {
        Object.keys(callbacks).forEach(;
    }
    if (focusableElement) {
        focusableElement.parentNode.removeChild(focusableElement);
    }
    index_esm.off(overlayWrapper);
    makeup_screenreader_trap_default.a.untrap(overlayWrapper);
    overlayWrapper.style.opacity = '0';
    overlayWrapper.style.filter = 'alpha(opacity=0)';
    var cleanup = 
    if (user_agent_checker.ios()) {
        undoAriaHideChildElements();
    }
    // Clean up the added DOM elements once fade out is complete
    setTimeout(cleanup, OVERLAY_FADE_TIME * 1000);
}
// --- Private Functions ---
function generateLightboxHTML(overlayZindex) {
    // Create all the elements for the overlay
    var overlay = document.createElement('div');
    var contentFixed = document.createElement('div');
    var popbox = document.createElement('div');
    var overlayWrapper = document.createElement('div');
    var closeContainer = generateCloseButton().closeContainer;
    overlay.id = 'vidyard-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.style.display = 'block';
    contentFixed.id = 'vidyard-content-fixed';
    contentFixed.setAttribute('aria-label', 'media player lightbox');
    contentFixed.setAttribute('role', 'dialog');
    contentFixed.style.display = 'block';
    popbox.id = 'vidyard-popbox';
    overlayWrapper.id = 'vidyard-overlay-wrapper';
    overlayWrapper.style.display = 'block';
    contentFixed.appendChild(popbox);
    overlayWrapper.appendChild(overlay);
    overlayWrapper.appendChild(closeContainer);
    overlayWrapper.appendChild(contentFixed);
    if (overlayZindex) {
        overlay.style.zIndex = '' + overlayZindex;
        contentFixed.style.zIndex = '' + (overlayZindex + 2);
        closeContainer.style.zIndex = '' + (overlayZindex + 1);
    }
    return {
        closeContainer: closeContainer,
        contentFixed: contentFixed,
        overlay: overlay,
        overlayWrapper: overlayWrapper,
        popbox: popbox,
    };
}
function generateCloseButton() {
    var closeContainer = document.createElement('div');
    var closeButton = document.createElement('div');
    closeContainer.className = 'vidyard-close-container';
    closeContainer.setAttribute('aria-label', 'Close Player');
    closeContainer.setAttribute('role', 'button');
    closeContainer.setAttribute('tabindex', '0');
    closeButton.className = 'vidyard-close-x';
    // Fix for ie7 not supporting :before pseudo elements
    // Fix for ie8 not supporting transform rotate
    if (document.documentMode < 9) {
        closeButton.className += ' simple-close';
        closeButton.innerHTML = '&times;';
    }
    closeContainer.appendChild(closeButton);
    return { closeButton: closeButton, closeContainer: closeContainer };
}
function generateLightboxContainer(playerIframeDOMString) {
    var backerElement = document.createElement('div');
    backerElement.className = 'vidyard-lightbox-content-backer';
    var containerElement = document.createElement('div');
    // hydrate the markup string into actual DOM
    containerElement.innerHTML = playerIframeDOMString;
    var containingDiv = containerElement.getElementsByTagName('div')[0];
    containingDiv.style.position = 'absolute';
    containingDiv.style.height = '100%';
    containingDiv.style.width = '100%';
    containingDiv.style.zIndex = '2';
    var iframe = containerElement.getElementsByTagName('iframe')[0];
    var iframeParent = iframe.parentNode;
    // Lightbox specific styling for the iframe
    iframeParent.style.position = 'static';
    // This overwrites the padding bottom set by createIframe
    iframeParent.style.paddingBottom = '0';
    iframe.style.opacity = '1';
    // This is to ensure the background actually animates
    setTimeout( 0);
    return {
        backerElement: backerElement,
        containerElement: containerElement,
        containingDiv: containingDiv,
        iframe: iframe,
    };
}
function generateConstraintImage(container) {
    var image = getElementByClass('vidyard-lightbox-image', 'img', container)[0].cloneNode();
    image.className = '';
    image.id = 'vidyard-popbox-constraint';
    image.alt = '';
    image.setAttribute('aria-hidden', 'true');
    return image;
}

// CONCATENATED MODULE: ./src/models/lightbox-animator.ts
/*
* Controls showing & hiding of the lightbox
*/





// --- Private Vars ---
var ACTIVE_ELEMENT;
// need to cleanup these after the lightbox is removed
var LIGHTBOX_EVENTS = {};
function setupAnimations(options) {
    var thumbnailContainer = getElementByClass('vidyard-lightbox-centering', 'div', options.container)[0];
    // expose the show and hide functions to the player API
    options.player.showLightbox = function showLightboxHandler() {
        logger.setLevel(options.player.uuid)('show lightbox');
        showLightbox({
            container: options.container,
            iframe: options.iframe,
            overlayZindex: options.overlayZindex,
            player: options.player,
        });
    };
    options.player.hideLightbox = function () { return removeLightbox(options.player); };
    // event listeners on the thumbnail
    addListener('click', 'onclick', options.player.showLightbox, thumbnailContainer);
    addListener('keydown', 'onkeydown', spaceOrEnterKeyPressEvent(, thumbnailContainer);
}
// --- Private Functions ---
function showLightbox(options) {
    // The lightbox cannot be shown if no iframe HTML was provided
    // or if there is already a lightbox showing
    if (!options.iframe || document.getElementById('vidyard-overlay')) {
        return;
    }
    ACTIVE_ELEMENT = document.activeElement;
    var lightboxDOM = show(options.iframe, options.container, options.overlayZindex);
    // Set the vidyardPlayers iframe to the newly injected one
    options.player.iframe = lightboxDOM.container.iframe;
    // update iframe title to video title once player metadata ready
    options.player.on('metadata', function updateLightboxIframeTitle(args) {
        var metadata = args[0];
        options.player.iframe.title = metadata.name;
        options.player.off('metadata', updateLightboxIframeTitle);
    });
    // callback to run when the iframe has loaded, only once
    var uuid = options.player.uuid;
    var iframe = lightboxDOM.container.iframe;
    var iframeLoaded = onIframeLoad(iframe, uuid, options.player);
    var listenForKeyPress = iframeListenForKeyPress(iframe, uuid);
    // iframe load listener
    LIGHTBOX_EVENTS.iframeLoaded = addListener('load', 'onload', iframeLoaded, lightboxDOM.container.iframe);
    // postMessage receipt from the player listener
    LIGHTBOX_EVENTS.messageHandler = addListener('message', 'onmessage', 
    // @TODO add better types for data
    receive(function (data) {
        iframeLoaded();
        listenForKeyPress();
        onEscInIframe(data, options.player);
    }), window);
    // click on lightbox overlay listener
    LIGHTBOX_EVENTS.overlayClick = addListener('click', 'onclick', function () { return removeLightbox(options.player); }, lightboxDOM.lightbox.overlayWrapper);
    // click on lightbox fixed content wrapper listener
    LIGHTBOX_EVENTS.fixedClick = addListener('click', 'onclick', function () { return removeLightbox(options.player); }, lightboxDOM.lightbox.contentFixed);
    // space or enter on the X button listener
    LIGHTBOX_EVENTS.closeKeyPress = addListener('keydown', 'onkeydown', spaceOrEnterKeyPressEvent(, lightboxDOM.lightbox.closeContainer);
    LIGHTBOX_EVENTS.responsivePlayerSize = addListener('resize', 'onresize', lightbox_animator_handleResize, window);
}
function lightbox_animator_handleResize() {
    var constraintImage = document.getElementById('vidyard-popbox-constraint');
    var windowRatio = parseFloat(((window.innerHeight / window.innerWidth) * 100).toFixed(2));
    var imageRatio = parseFloat(calcAspectRatio(constraintImage));
    var orientation = windowRatio < imageRatio ? 'landscape' : 'portrait';
    if (constraintImage.className !== orientation) {
        constraintImage.className = orientation;
    }
}
function removeLightbox(player) {
    remove();
    if (ACTIVE_ELEMENT) {
        ACTIVE_ELEMENT.focus();
    }
    Object.keys(LIGHTBOX_EVENTS).forEach(;
    // Trigger all registered lightboxClose callbacks
    if (player) {
        player.trigger('lightboxClose');
    }
}
// @TODO: add better type for postMessageData
function onEscInIframe(postMessageData, player) {
    // if esc was pressed in the iframe
    if (postMessageData.event === 'keyPressed' && postMessageData.params === 27) {
        removeLightbox(player);
    }
}
function onIframeLoad(iframe, uuid, player) {
    return once(function () {
        makeIframeVisible(iframe);
        lightbox_animator_handleResize();
        // start listening for esc key presses in parent
        LIGHTBOX_EVENTS.parentEsc = addListener('keydown', 'onkeydown', escKeyPressEvent(function () { return removeLightbox(player); }), document);
    });
}
// Send message to start listening for esc key presses in iframe
function iframeListenForKeyPress(iframe, uuid) {
    return once(;
}

// CONCATENATED MODULE: ./src/api/get-player-metadata.ts
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function getPlayerMetadata(uuid) {
    if (!uuid || typeof uuid !== 'string' || uuid.length < 20) {
        throw new Error('Invalid UUID given');
        return;
    }
    var log = logger.setLevel(uuid);
    // @TODO: add proper API to fetch metadata as this endpoint is private and not stable
    var metadataEndpoint = "https://" + getPlaybackURL() + "/player/" + uuid + ".json?pomo=0&pomo_reason=fetchMetaData";
    log('fetching metadata');
    return xhrRequest({ endpoint: metadataEndpoint })
        .then(JSON.parse)
        .then(function (data) {
        log('metadata successfully fetched');
        return __assign({ uuid: uuid }, data.payload.vyContext.metadata);
    })
        .catch(function (e) {
        log("failed to fetch metadata, " + e);
        throw new Error('Error parsing player metadata, make sure the UUID is correct');
    });
}

// CONCATENATED MODULE: ./src/models/lightbox-page-thumbnail.ts
/*
* Handles injecting html & css related specfically to lightbox embeds
*/



// This code sets up the css and listeners for the on page splash screen & play button
function init(embedScriptElement, queryParams, sizing) {
    var lightboxThumbnailUrl = "https://" + getPlaybackURL() + "/" + queryParams.uuid + ".jpg";
    var lightboxString = composeLightboxString(lightboxThumbnailUrl, queryParams, sizing);
    embedScriptElement.insertAdjacentHTML('afterbegin', lightboxString);
    getPlayerMetadata(queryParams.uuid)
        .then(function (metadata) {
        var playButton = getElementByClass('play-button', 'button', embedScriptElement);
        if (playButton.length !== 1) {
            return;
        }
        playButton[0].setAttribute('aria-label', 'Play video ' + metadata.name + '. Opens in a modal');
    }, function () {
        // Ignore errors fetching metadata
    });
}
function applyLightboxPlayButton(pbData, embedScriptElement) {
    if (pbData.pb !== 1) {
        return;
    }
    var playButton = getElementByClass('play-button', 'button', embedScriptElement);
    if (playButton.length !== 1) {
        return;
    }
    playButton[0].style.display = 'block';
    playButton[0].style.backgroundColor = '#' + pbData.pbc;
}
// --- Private Functions ---
function composeLightboxString(lightboxThumbnailUrl, queryParams, sizing) {
    return ('<div class="vidyard-lightbox-thumbnail vidyard-lightbox-' + queryParams.uuid + '"' +
        (sizing.maxWidth ? ' style="max-width: ' + sizing.maxWidth + 'px;"' : '') +
        '>' +
        '<div class="vidyard-lightbox-centering" ' +
        'style="padding-bottom: ' + sizing.ratio + '%;">' +
        '<img class="vidyard-lightbox-image" src="' + lightboxThumbnailUrl + '" alt="video thumbnail" />' +
        '<div type="button" role="button" class="play-button" title="Play video" data-version="1" tabindex="0">' +
        '<div class="play-button-size"></div>' +
        '<div class="arrow-size">' +
        '<div class="arrow-size-ratio"></div>' +
        '<div class="arrow"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');
}

// CONCATENATED MODULE: ./src/controllers/lightbox-player.ts






var injectLightboxElements = function (_a) {
    var dataParams = _a.dataParams, player = _a.player;
    var log = logger.setLevel(dataParams.uuid);
    log("injecting lighbox embed");
    // hide the placeholder image right away if lightbox
    player.placeholder.style.display = 'none';
    var iframeSizing = { ratio: calcAspectRatio(player.placeholder) };
    var playerIframe = createIframe(dataParams, iframeSizing);
    var thumbnailSizing = {
        maxHeight: dataParams.height ? parseInt(dataParams.height, 10) : null,
        maxWidth: dataParams.width ? parseInt(dataParams.width, 10) : null,
        ratio: calcAspectRatio(player.placeholder),
    };
    // Inject lightbox thumbnail
    init(player.container, dataParams, thumbnailSizing);
    setupAnimations({
        container: player.container,
        iframe: playerIframe,
        overlayZindex: dataParams.overlayZindex,
        player: player,
    });
    log("getStyle sent");
    getStyle(player.uuid).then(function (data) {
        log("getStyle received: " + JSON.stringify(data));
        // Update the play button of the lightbox thumbnail to match the colours on the model
        applyLightboxPlayButton(data, player.container);
    }).catch(function (e) {
        log('getStyle failed, likely a network error');
    });
};
/* harmony default export */ var lightbox_player = (injectLightboxElements);

// CONCATENATED MODULE: ./src/controllers/backlink.ts



var SKIP_BACKLINK_HOSTNAMES_RE = /(vidyard|vystaging|hubspot)\.com$/;
var injectBacklink = function (player, data, force) {
    if (force === void 0) { force = false; }
    if (!force && (!data || !data.hasBacklink || SKIP_BACKLINK_HOSTNAMES_RE.test(document.location.host))) {
        return;
    }
    var linkEl = document.createElement('a');
    var linkTextEl = document.createElement('span');
    var imgEl = document.createElement('img');
    imgEl.src = 'https://cdn.vidyard.com/client-logos/vidyard.png';
    imgEl.id = 'backlink-icon';
    imgEl.alt = 'Vidyard Logo';
    linkTextEl.id = 'backlink-text';
    linkTextEl.textContent = 'Powered by Vidyard';
    linkEl.id = 'backlink';
    linkEl.appendChild(imgEl);
    linkEl.appendChild(linkTextEl);
    linkEl.href = data.backlinkURL;
    linkEl.rel = 'nofollow';
    linkEl.target = '_blank';
    linkEl.setAttribute('aria-label', 'Link to Vidyard');
    linkEl.dataset.testid = 'backlink';
    addListener('click', 'onclick',  linkEl);
    player.container.appendChild(linkEl);
};
/* harmony default export */ var backlink = (injectBacklink);

// CONCATENATED MODULE: ./src/controllers/integrations.ts



function integrationsControler(player) {
    var integrations = window.VidyardV4.integrations;
    var log = logger.setLevel(player.uuid);
    var marketoCookie = integrations.getCookie('marketo');
    if (marketoCookie) {
        log("getMarketoLead sent");
        getMarketoLead(player.uuid, marketoCookie)
            .then(checkJSONParse)
            // @TODO: add better types here
            .then(function (leadData) {
            log("getMarketoLead received: " + leadData);
            player.on('ready', ;
        })
            .catch(;
    }
    // Get info on what our integrations are by hitting /v4/:uuid/integrations.js
    log("getIntegrations");
    // @TODO: add better types here
    getIntegrations(player.uuid).then(function (data) {
        log("getIntegrations received: " + JSON.stringify(data));
        player.on('ready', ;
    }).catch(function (e) {
        log('getIntegrations failed, likely a network error');
    });
}

// CONCATENATED MODULE: ./src/controllers/seo.ts




function seoController(uuid) {
    var log = logger.setLevel(uuid);
    log("getSEO sent");
    return getSEO(uuid)
        .then(function (data) {
        log("getSEO: " + JSON.stringify(data));
        if (!isObjectEmpty(data)) {
            var jsonLD = createJsonLD(data);
            document.getElementsByTagName('head')[0].appendChild(jsonLD);
        }
        return data;
    })
        .catch(;
}

// CONCATENATED MODULE: ./src/views/container.ts
var createContainer = function (uuid, dataParams) {
    var container = document.createElement('div');
    container.className = 'vidyard-player-container';
    container.setAttribute('uuid', uuid);
    var styles = container.style;
    styles.margin = 'auto';
    styles.width = '100%';
    styles.height = 'auto';
    styles.overflow = 'hidden';
    styles.display = 'block';
    if (dataParams.type === 'inline') {
        styles.maxWidth = dataParams.width ? dataParams.width + 'px' : '';
        styles.maxHeight = dataParams.height ? dataParams.height + 'px' : '';
    }
    return container;
};
/* harmony default export */ var views_container = (createContainer);

// CONCATENATED MODULE: ./src/models/data-params.ts
/* tslint:disable variable-name */


var data_params_DataParams = /** @class */ (function () {
    function DataParams(placeHolderImage) {
        var _this = this;
        this.disable_popouts = 1;
        var data = parseVyData(dataSet(placeHolderImage));
        Object.keys(data).forEach(;
        // Default to inline embed
        if (this.type !== 'inline' && this.type !== 'lightbox') {
            embed_helpers_log('Invalid Vidyard player embed type, defaulting to inline.', 'warn');
            this.type = 'inline';
        }
        // Report the embed script version
        this.v = VERSION;
        // This embed code no longer supports popout CTAs
        this.disable_popouts = 1;
        // Gets the vycustomid query string param, used to identify personalized videos
        this.custom_id = this.custom_id || getQueryParam('vycustom_id');
        // Gets the vyemail query string param, which connects views to an email entered
        this.vyemail = this.vyemail || getQueryParam('vyemail');
        // Sets a fixed Vidyard Salesforce ID for every view
        this.vysfid = this.vysfid || getQueryParam('vysfid');
        // Sets a fixed Vidyard Salesforce ID for every view
        this.vyetoken = this.vyetoken || getQueryParam('vyetoken');
        // Gets & sets the access code parameter which will bypass having the user enter it manually
        var vyac = getQueryParam('vyac');
        var vyplayer = getQueryParam('vyplayer');
        if (vyac && vyplayer && vyplayer === this.uuid) {
            this.access_code = vyac;
        }
        else if (vyac && vyplayer) {
            embed_helpers_log('Invalid Vidyard player access code.', 'warn');
        }
    }
    DataParams.prototype.toQueryString = function () {
        var queryParamsString = '?';
        var key;
        for (key in this) {
            if (!this.hasOwnProperty(key)) {
                continue;
            }
            // don't include these in the query string
            if (key === 'height' || key === 'uuid' || key === 'width') {
                continue;
            }
            // don't include undefined keys
            if (this[key] === undefined) {
                continue;
            }
            // Add '&' here so we don't end up with one trailing
            queryParamsString += queryParamsString !== '?' ? '&' : '';
            queryParamsString += encodeURIComponent(key) + '=' + encodeURIComponent(this[key]);
        }
        // Just return an empty string if no params were found
        return queryParamsString === '?' ? '' : queryParamsString;
    };
    return DataParams;
}());
/* harmony default export */ var data_params = (data_params_DataParams);

// CONCATENATED MODULE: ./src/models/preload-frames.ts
/*
* Adds link rel prefetch for the iframes
*/



function preloadFrames(embeds) {
    if (embeds === void 0) { embeds = getElementByClass('vidyard-player-embed', 'img'); }
    for (var _i = 0, embeds_1 = embeds; _i < embeds_1.length; _i++) {
        var ele = embeds_1[_i];
        var dataParams = new data_params(ele);
        var uuid = dataParams.uuid;
        var preloadHref = "https://" + getPlaybackURL() + "/" + uuid + dataParams.toQueryString();
        if (!uuid) {
            continue;
        }
        if (indexOfArray(preloadHref, window.VidyardV4.preloadLinks) === -1) {
            addPrefetchLink(uuid, preloadHref);
            window.VidyardV4.preloadLinks.push(preloadHref);
        }
    }
}
// --- Private Functions ---
function addPrefetchLink(uuid, href) {
    var preloadLink = document.createElement('link');
    preloadLink.rel = 'prefetch';
    preloadLink.crossOrigin = 'anonymous';
    preloadLink.href = href;
    document.body.appendChild(preloadLink);
    return href;
}

// CONCATENATED MODULE: ./src/models/vidyard-player.ts
var vidyard_player_assign = (undefined && undefined.__assign) || Object.assign || 



var vidyard_player_Player = /** @class */ (function () {
    function Player(element, uuid, callbackStore) {
        var _this = this;
        this._ready = false;
        this._previousTime = null;
        this._onMessageEventHandler = function (event) {
            if (event.origin !== "https://" + getPlaybackURL()) {
                return;
            }
            var data;
            try {
                data = JSON.parse(event.data);
            }
            catch (e) {
                return;
            }
            // Event origin iframe is not the iframe owned by this player
            if (_this.iframe && event.source && _this.iframe.contentWindow !== event.source) {
                return;
            }
            // For a different player
            if (_this.uuid && data.uuid !== _this.uuid) {
                return;
            }
            // All vy events will have a string event name
            if (typeof data.event !== 'string') {
                return;
            }
            _this._updateStatus(data);
            if (data.event === 'ready') {
                _this._ready = true;
                window.VidyardV4.integrations.updatePlayer(_this);
            }
            var eventCallbacks = _this._callbackStore[data.event];
            if (eventCallbacks) {
                for (var _i = 0, eventCallbacks_1 = eventCallbacks; _i < eventCallbacks_1.length; _i++) {
                    var callback = eventCallbacks_1[_i];
                    callback.call(_this, data.params, _this);
                }
            }
        };
        this._callbackStore = callbackStore || {
            beforeSeek: [],
            chapterComplete: [],
            createCta: [],
            fullScreenChange: [],
            lightboxClose: [],
            metadata: [],
            pause: [],
            play: [],
            playerComplete: [],
            ready: [],
            seek: [],
            sidePlaylistOpen: [],
            status: [],
            timeupdate: [],
            videoComplete: [],
            volumeChange: [],
        };
        this.element = element;
        this.uuid = uuid;
        this.status = null;
        this.metadata = null;
        this.progressEventsUnsubscribe = [];
        addListener('message', 'onmessage', this._onMessageEventHandler);
    }
    Player.prototype.on = function (eventName, callback) {
        var _this = this;
        if (eventName === 'ready' && this.ready()) {
            setTimeout(function () { return callback.call(_this, undefined, _this); }, 0);
            return;
        }
        if (this._callbackStore[eventName] === undefined) {
            this._callbackStore[eventName] = [callback];
            embed_helpers_log("The event name: " + eventName + " is not supported, your handler was setup regardless", 'warn');
            return;
        }
        this._callbackStore[eventName].push(callback);
    };
    Player.prototype.trigger = function (eventName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _loop_1 = function (callback) {
            if (eventName === 'ready' && this_1.ready()) {
                setTimeout( 0);
            }
            else {
                callback.call(this_1, args, this_1);
            }
        };
        var this_1 = this;
        for (var _a = 0, _b = this._callbackStore[eventName]; _a < _b.length; _a++) {
            var callback = _b[_a];
            _loop_1(callback);
        }
    };
    Player.prototype.off = function (eventName, callback) {
        if (eventName === undefined) {
            // No event name given, clear out all event handlers
            for (var evt in this._callbackStore) {
                if (this._callbackStore.hasOwnProperty(evt)) {
                    this._callbackStore[evt] = [];
                }
            }
            return;
        }
        // If no handlers have been created with this eventName, do nothing
        if (!this._callbackStore[eventName]) {
            return;
        }
        if (callback) {
            // Only remove the callback associated with the correct function
            var index = indexOfArray(callback, this._callbackStore[eventName]);
            if (index > -1) {
                this._callbackStore[eventName].splice(index, 1);
            }
        }
        else {
            // Remove all callbacks associated with this eventName
            this._callbackStore[eventName] = [];
        }
    };
    Player.prototype.ready = function () {
        return this._ready;
    };
    // API METHODS
    Player.prototype.play = function () {
        this._message({ event: 'play' });
    };
    Player.prototype.pause = function () {
        this._message({ event: 'pause' });
    };
    Player.prototype.resume = function () {
        this._message({ event: 'resume' });
    };
    Player.prototype.seek = function (position) {
        this._message({ event: 'seek', position: position });
    };
    Player.prototype.setVolume = function (newVolume) {
        this._message({ event: 'setVolume', newVolume: newVolume });
    };
    Player.prototype.setPlaybackSpeed = function (speed) {
        this._message({ event: 'setPlaybackSpeed', speed: speed });
    };
    Player.prototype.playChapter = function (chapterIndex) {
        embed_helpers_log('playChapter() is deprecated. We recommend to use playVideoAtIndex() instead.');
        this.playVideoAtIndex(chapterIndex);
    };
    Player.prototype.playVideoAtIndex = function (index) {
        this._message({ chapter_index: index, event: 'playChapter' });
    };
    Player.prototype.setAudioTrack = function (audioTrackId) {
        this._message({ audioTrackId: audioTrackId, event: 'setAudioTrack' });
    };
    Player.prototype.enableCaption = function (label, language) {
        this._message({ event: 'enableCaption', label: label, language: language });
    };
    Player.prototype.disableCaption = function (label, language) {
        this._message({ event: 'disableCaption', label: label, language: language });
    };
    Player.prototype.consentToGDPR = 
    Player.prototype.createCta = function (attributes) {
        this._message({
            attributes: shallowMerge({
                display_once: false,
                duration: 10,
                fullscreen: false,
                html: '',
                opacity: 1.0,
                start: 0,
                width: 300,
            }, attributes),
            event: 'createCta',
        });
    };
    Player.prototype.updateCta = 
    Player.prototype.createVideoSection = 
    Player.prototype.updateVideoSection = 
    Player.prototype.deleteVideoSection = 
    Player.prototype.addEvent = function (_a) {
        var _b = _a.start, start = _b === void 0 ? 0 : _b, _c = _a.duration, duration = _c === void 0 ? 1 : _c, videoIndex = _a.videoIndex, chapterIndex = _a.chapterIndex, eventId = _a.eventId;
        if (!eventId) {
            embed_helpers_log('Missing arguments. Need eventId');
            return;
        }
        if (chapterIndex >= 0) {
            embed_helpers_log('Parameter chapterIndex is deprecated. We recommend to use videoIndex instead.');
        }
        // We need to default chapterIndex to 0 because that's what we did previously, and we need to ensure all changes are backwards compatible
        var index = 0;
        index = chapterIndex ? chapterIndex : index;
        index = videoIndex ? videoIndex : index;
        this._message({
            chapterIndex: index,
            duration: duration,
            event: 'addEvent',
            id: eventId,
            start: start,
        });
    };
    Player.prototype.getCurrentChapter = 
    Player.prototype.getCurrentVideoIndex = function () {
        return this.status === null ? null : this.status.chapterIndex;
    };
    Player.prototype.currentTime = function () {
        return this.status === null ? null : this.status.currentTime;
    };
    Player.prototype.scrubbing = 
    Player.prototype.toggleFullscreen = function () {
        var _this = this;
        // Request iframe to go fullscreen if possible, to get around user gesture requirements
        var fullscreenAPI = getFullscreenAPI();
        if (fullscreenAPI) {
            var fullscreenPromise = this.iframe[fullscreenAPI.requestFullscreen]();
            if (fullscreenPromise) {
                fullscreenPromise.then(;
            }
            else {
                this._message({ event: 'toggleFullscreen' });
            }
            // Listens to when the window exits fullscreen via the 'Esc' key
            addListener(fullscreenAPI.fullscreenchange, 'MSFullscreenChange', function () {
                if (!document[fullscreenAPI.fullscreenElement]) {
                    _this._message({ event: 'exitFullscreen' });
                }
            });
            addListener('message', 'onmessage', receive(function (data) {
                if (data.event === 'fullScreenChange' && data.params === false) {
                    if (document[fullscreenAPI.fullscreenElement]) {
                        document[fullscreenAPI.exitFullscreen]();
                    }
                }
            }));
        }
        else {
            // Simply send message for iOS
            this._message({ event: 'toggleFullscreen' });
        }
    };
    Player.prototype.resetPlayer = 
    Player.prototype._message = function (options) {
        if (this.ready() !== true) {
            embed_helpers_log('Player is not ready yet! No messages can be recieved.', 'error');
            return;
        }
        send(vidyard_player_assign({}, options, { uuid: this.uuid }), "https://" + getPlaybackURL(), this.iframe);
    };
    Player.prototype._updateStatus = function (data) {
        if (typeof data.status === 'object') {
            this.status = data.status;
        }
        if (typeof data.metadata === 'object') {
            this.metadata = data.metadata;
            this.trigger('metadata', data.metadata);
        }
        if (this.status) {
            if (this.status.currentTime !== this._previousTime && this._callbackStore.timeupdate) {
                for (var _i = 0, _a = this._callbackStore.timeupdate; _i < _a.length; _i++) {
                    var callback = _a[_i];
                    callback.call(this, this.status.currentTime, this);
                }
            }
            this._previousTime = this.status.currentTime;
        }
    };
    return Player;
}());
/* harmony default export */ var vidyard_player = (vidyard_player_Player);

// CONCATENATED MODULE: ./src/models/renderer.ts
/*
* Handles sweeping over the DOM and injecting all types of players
* Effectively is the puppet master for all the embed code stuff
*/













var sweepDocument = function (container) {
    if (container === void 0) { container = document; }
    // Find all divs that belong to vy
    var embedLocations = getElementByClass('vidyard-player-embed', 'img', container);
    preloadFrames(embedLocations);
    toArray(embedLocations).forEach(renderPlayer);
    dispatch_ready();
};
var renderPlayer = function (placeholderImg) {
    var _a = window.VidyardV4, integrations = _a.integrations, api = _a.api, players = _a.players, playerReadyListeners = _a.playerReadyListeners;
    var dataParams = new data_params(placeholderImg);
    var uuid = dataParams.uuid;
    var log = logger.setLevel(uuid);
    log("rendering");
    // Cant do anything without a uuid, just skip it
    if (uuid === undefined) {
        embed_helpers_log('Embed without a UUID detected, it is impossible to insert a player without a UUID. Add "data-uuid=some_uuid" to the offending element.' +
            placeholderImg);
        return;
    }
    if (dataParams.rendered === 'true') {
        log("Already rendered");
        return find(players, function (player) { return player.placeholder === placeholderImg; });
    }
    var container = views_container(uuid, dataParams);
    var newPlayer = new vidyard_player(container, uuid);
    placeholderImg.setAttribute('data-rendered', 'true');
    placeholderImg.parentNode.insertBefore(container, placeholderImg);
    newPlayer.placeholder = placeholderImg;
    newPlayer.container = container;
    players.push(newPlayer);
    processReadyListeners(newPlayer);
    // Inject player HTML into the dom
    if (dataParams.type === 'inline') {
        inline_player({ dataParams: dataParams, player: newPlayer });
    }
    else if (dataParams.type === 'lightbox') {
        lightbox_player({ dataParams: dataParams, player: newPlayer });
    }
    integrationsControler(newPlayer);
    seoController(newPlayer.uuid).then(function (jsonpData) {
        if (dataParams.type === 'inline') {
            backlink(newPlayer, jsonpData, dataParams.backlink && dataParams.backlink === 1);
        }
    });
    // add the player to the window.Vidyard global
    // used for progress events and some integrations
    window.Vidyard._players[newPlayer.uuid] = newPlayer;
    return newPlayer;
};

// CONCATENATED MODULE: ./src/api/destroy-player.ts

function unsubscribeProgressEvents(player) {
    player.progressEventsUnsubscribe.forEach(;
    player.progressEventsUnsubscribe = [];
}
function destroyPlayer(player) {
    var players = window.VidyardV4.players;
    if (includes(players, player)) {
        unsubscribeProgressEvents(player);
        player.off();
        player.container.parentNode.removeChild(player.container);
        player.placeholder.parentNode.removeChild(player.placeholder);
        players.splice(indexOfArray(player, players));
    }
    else {
        embed_helpers_log("Cannot destroy an unknown player", 'warn');
    }
}

// CONCATENATED MODULE: ./src/api/gdpr.ts
function consent(userConsent) {
    if (userConsent === undefined) {
        return;
    }
    var players = window.VidyardV4.players;
    var _loop_1 = 
    for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
        var player = players_1[_i];
        _loop_1(player);
    }
}
// Used to determine whether or not to ask for GDPR consent on page load
// _readyConsent does not change based on calls to the consent function to limit usage
// to the expected use case at page load
function hasConsentOnReady(callback) {
    var playersReady = 0;
    var gdpr = window.VidyardV4.api.GDPR;
    var players = window.VidyardV4.players;
    if (players.length === 0) {
        return callback(false);
    }
    if (gdpr._readyConsent !== undefined) {
        return callback(gdpr._readyConsent);
    }
    // Make sure all the players are ready before returning the consent
    for (var _i = 0, players_2 = players; _i < players_2.length; _i++) {
        var player = players_2[_i];
        player.on('ready', function () {
            if (playersReady !== players.length) {
                playersReady += 1;
            }
            if (playersReady === players.length) {
                // TODO: can't use reduce in old IE, add helper
                gdpr._readyConsent = players.reduce( true);
                return callback(gdpr._readyConsent);
            }
        });
    }
}

// CONCATENATED MODULE: ./src/api/get-players-by-uuid.ts
/* harmony default export */ var get_players_by_uuid = (getPlayersByUUID);

// CONCATENATED MODULE: ./src/api/progress-events/remove-duplicates.ts
var removeDuplicates = function (targetArray) {
    targetArray.sort(;
    var i = 0;
    while (i < targetArray.length) {
        if (targetArray[i] === targetArray[i + 1]) {
            targetArray.splice(i + 1, 1);
        }
        else {
            i += 1;
        }
    }
    return targetArray;
};

// CONCATENATED MODULE: ./src/api/progress-events/setup-event-listeners.ts
var templates = {};
var listeners = {};
function addTemplate(player, callback, thresholds) {
    // Prepare the listeners object when the template gets registered
    if (typeof listeners[player.uuid] !== 'object') {
        listeners[player.uuid] = {};
    }
    templates[player.uuid] = {
        callback: callback,
        thresholds: thresholds.slice().sort(,
    };
}
function copyTemplate(player, videoIndex) {
    setup_event_listeners_addListener(player, videoIndex, templates[player.uuid].callback, templates[player.uuid].thresholds.slice());
}
function getListener(player, videoIndex) {
    // If there's no template, then there's no listeners
    if (typeof templates[player.uuid] !== 'object') {
        return undefined;
    }
    // If necessary, create the listener using the matching template
    if (typeof listeners[player.uuid][videoIndex] !== 'object') {
        copyTemplate(player, videoIndex);
    }
    return listeners[player.uuid][videoIndex];
}
// Adds a new listeners entry based on player/videoIndex
function setup_event_listeners_addListener(player, videoIndex, callback, thresholds) {
    listeners[player.uuid][videoIndex] = {
        callback: callback,
        lastTimeUpdate: player.currentTime(),
        partOfVideoWatched: {},
        player: player,
        thresholds: thresholds,
        timeWatched: 0,
    };
}
function removeTemplateAndListeners(player) {
    templates[player.uuid] = undefined;
    listeners[player.uuid] = undefined;
}
// Updates the new listeners entry based on player/videoIndex.
// Trigger the callback for any thresholds passed in the process.
function updateTimeWatched(player, time) {
    var videoIndex = player.getCurrentVideoIndex();
    var listener = getListener(player, videoIndex);
    if (typeof listener === 'undefined'
        || typeof listener.player.metadata !== 'object'
        || listener.thresholds.length === 0) {
        return;
    }
    var deltaTime = time - listener.lastTimeUpdate;
    listener.lastTimeUpdate = time;
    // If the time change moved backwards or was > 1 second,
    // then assume the player was seeking and ignore this timeupdate
    if (deltaTime <= 0 || deltaTime > 1) {
        return;
    }
    if (time >= 1) {
        listener.partOfVideoWatched[Math.floor(time)] = 1;
    }
    // Trigger the callback for any thresholds that have been passed since the last timeupdate.
    // Progress events can only be triggered once, so remove the threshold when it's hit.
    listener.timeWatched = Object.keys(listener.partOfVideoWatched).length;
    var duration = listener.player.metadata.chapters_attributes[videoIndex].video_attributes.length_in_seconds;
    var percentWatched = listener.timeWatched / duration * 100;
    while (percentWatched >= listener.thresholds[listener.thresholds.length - 1]) {
        listener.callback({
            // Deprecated. Only included for backwards compatibility
            chapter: videoIndex,
            event: listener.thresholds.pop(),
            player: player,
            videoIndex: videoIndex,
        });
    }
}
function setupEventListeners(player, callback, thresholds) {
    // Instead of creating a listener for each chapter,
    // store a template that will create the listener when needed.
    // Doing so allows progressEvents() to be registered before the player ready event is fired
    addTemplate(player, callback, thresholds);
    var onTimeUpdate = 
    player.on('timeupdate', onTimeUpdate);
    return {
        player: player,
        removeEventListeners: 
    };
}

// CONCATENATED MODULE: ./src/api/progress-events-wrapper.ts



// Initialize analytics for each player when called
function progressEvents(callback, thresholds, singlePlayerScope) {
    var _a;
    if (thresholds === void 0) { thresholds = [1, 25, 50, 75, 90]; }
    var removeEventListeners = [];
    var players = singlePlayerScope
        ? (_a = {}, _a[singlePlayerScope.uuid] = singlePlayerScope, _a) : getPlayers();
    // Sort and unique the array in case we are passed an unusual array of thresholds
    var dedupedThresholds = removeDuplicates(thresholds);
    var _loop_1 = function (uuid) {
        if (players.hasOwnProperty(uuid) && uuid.length > 0 && players[uuid] !== '') {
            // set the listener
            var removeCb = setupEventListeners(players[uuid], callback, dedupedThresholds);
            removeEventListeners.push(removeCb);
        }
        else {
            embed_helpers_log(;
        }
    };
    for (var uuid in players) {
        _loop_1(uuid);
    }
    if (removeEventListeners.length === 0) {
        embed_helpers_log(function () {
            return console.warn('No Vidyard Players found. (include this script below player embed codes)');
        });
    }
    return removeEventListeners;
}
function getPlayers() {
    try {
        return window.Vidyard.players();
    }
    catch (e) {
        embed_helpers_log(;
        return {};
    }
}
function progressEventsWrapper() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var subscriptions = progressEvents.apply(void 0, args);
    Object.keys(subscriptions).forEach(function (k) {
        var _a = subscriptions[k], player = _a.player, removeEventListeners = _a.removeEventListeners;
        if (player.progressEventsUnsubscribe) {
            player.progressEventsUnsubscribe.push(removeEventListeners);
        }
    });
}

// CONCATENATED MODULE: ./src/api/render-player.ts






// TODO: change Promise<any> to Promise<Player> once we have a proper type for it
var renderPlayerFromPlaceholder = function (image) {
    logger.setLevel('placeholder')('rendering player from placeholder image');
    var player = renderPlayer(image);
    // resolve when the player is ready, unless the player is a lightbox
    return new promise(function (res) {
        if (player.showLightbox) {
            res(player);
        }
        else {
            player.on('ready', ;
        }
    });
};
function render_player_renderPlayer(options) {
    // TODO: instead of creating an image make render.renderPlayer work with an options objects
    var placeholder = options instanceof HTMLImageElement ? options : createPlaceholder(options);
    return loadPlaceholder(placeholder)
        .then(renderPlayerFromPlaceholder)
        .catch(;
}

// CONCATENATED MODULE: ./src/api/vidyard-v4-global.ts










var vidyardV4Global = {
    _debug: api_debug,
    api: {
        GDPR: { consent: consent, hasConsentOnReady: hasConsentOnReady },
        addReadyListener: addReadyListener,
        destroyPlayer: destroyPlayer,
        getPlayerMetadata: getPlayerMetadata,
        getPlayersByUUID: get_players_by_uuid,
        progressEvents: progressEventsWrapper,
        renderDOMPlayers: sweepDocument,
        renderPlayer: render_player_renderPlayer,
    },
    integrations: new IntegrationsWatcher(),
    jsonp: {},
    // Just ensure that the undefined uuid option is always present
    playerReadyListeners: { undefined: [] },
    players: [],
    preloadLinks: [],
};
/* harmony default export */ var vidyard_v4_global = (vidyardV4Global);

// CONCATENATED MODULE: ./src/api/vidyard-global.ts
var vidyardGlobal = {
    _players: {},
    players: function () {
        return window.VidyardV4.players.reduce( {});
    },
};
/* harmony default export */ var vidyard_global = (vidyardGlobal);

// EXTERNAL MODULE: ./src/css/style.css
var css_style = __webpack_require__(12);

// EXTERNAL MODULE: /vidyard/vidyard-player-sdk/node_modules/error-stack-parser/error-stack-parser.js
var error_stack_parser = __webpack_require__(2);

// CONCATENATED MODULE: ./src/utils/error-report.ts


// based on the Rollbar API
// https://docs.rollbar.com/v1.0.0/reference#section-data-format<Paste>
function createErrorReport(_a) {
    var error = _a.error, location = _a.location, message = _a.message, navigator = _a.navigator, timeStamp = _a.timeStamp, type = _a.type, vyGlobal = _a.vyGlobal;
    return {
        data: {
            // Required: body
            // The main data being sent. It can either be a message, an exception, or a crash report.
            body: {
                // If this payload is a single exception, use "trace"
                // A list of stack frames, ordered such that the most recent call is last in the list.
                trace: {
                    // Required: exception
                    // An object describing the exception instance.
                    exception: {
                        // Required: class
                        // The exception class name.
                        class: error.name,
                        // Optional: message
                        // The exception message, as a string
                        message: message,
                    },
                    // Each frame is an object.
                    frames: error_stack_parser["parse"](error).map(,
                },
            },
            // Optional: client
            // Data about the client device this event occurred on.
            // As there can be multiple client environments for a given event (i.e. Flash running inside
            // an HTML page), data should be namespaced by platform.
            client: {
                // Can contain any arbitrary keys. Rollbar understands the following:
                // Optional: cpu
                // A string up to 255 characters
                cpu: navigator.platform,
                javascript: {
                    // Optional: browser
                    // The user agent string
                    browser: navigator.userAgent,
                    // Optional: guess_uncaught_frames
                    // Set to true to enable frame guessing
                    // See the "Source Maps" guide for more details.
                    guess_uncaught_frames: true,
                    // Optional: source_map_enabled
                    // Set to true to enable source map deobfuscation
                    // See the "Source Maps" guide for more details.
                    source_map_enabled: true,
                },
            },
            // Optional: code_version
            // A string, up to 40 characters, describing the version of the application code
            // Rollbar understands these formats:
            // - semantic version (i.e. "2.1.12")
            // - integer (i.e. "45")
            // - git SHA (i.e. "3da541559918a808c2402bba5012f6c60b27661c")
            code_version: VERSION,
            // Optional: custom
            // Any arbitrary metadata you want to send. "custom" itself should be an object.
            custom: {
                jsonpRequests: Object.keys(vyGlobal.jsonp),
                playbackUrlOverride: window.VIDYARD_PLAYBACK_URL,
                players: vyGlobal.players.map(,
                preloadLinks: vyGlobal.preloadLinks,
            },
            // Required: environment
            // The name of the environment in which this occurrence was seen.
            // A string up to 255 characters. For best results, use "production" or "prod" for your
            // production environment.
            // You don't need to configure anything in the Rollbar UI for new environment names;
            // we'll detect them automatically.
            environment: getPlaybackURL(),
            // Optional: fingerprint
            // A string controlling how this occurrence should be grouped. Occurrences with the same
            // fingerprint are grouped together. See the "Grouping" guide for more information.
            // Should be a string up to 40 characters long; if longer than 40 characters, we'll use its SHA1 hash.
            // If omitted, we'll determine this on the backend.
            fingerprint: error.name,
            // Optional: language
            // The name of the language your code is written in.
            // This can affect the order of the frames in the stack trace. The following languages set the most
            // recent call first - 'ruby', 'javascript', 'php', 'java', 'objective-c', 'lua'
            // It will also change the way the individual frames are displayed, with what is most consistent with
            // users of the language.
            language: 'javascript',
            // Optional: level
            // The severity level. One of: "critical", "error", "warning", "info", "debug"
            // Defaults to "error" for exceptions and "info" for messages.
            // The level of the *first* occurrence of an item is used as the item's level.
            level: type,
            // Optional: platform
            // The platform on which this occurred. Meaningful platform names:
            // "browser", "android", "ios", "flash", "client", "heroku", "google-app-engine"
            // If this is a client-side event, be sure to specify the platform and use a post_client_item access token.
            platform: 'browser',
            // Optional: request
            // Data about the request this event occurred in.
            // Can contain any arbitrary keys. Rollbar understands the following:
            // query_string: the raw query string
            // url: full URL where this event occurred
            request: { query_string: location.search, url: location.href },
            // Optional: timestamp
            // When this occurred, as a unix timestamp.
            timestamp: timeStamp,
        },
    };
}

// CONCATENATED MODULE: ./src/utils/error-logger.ts



var vyError = function (source) {
    if (source === void 0) { source = ''; }
    return source.match(ERROR_ORIGIN_RE);
};
var errorHandler = function (_a) {
    var error = _a.error, filename = _a.filename, message = _a.message, timeStamp = _a.timeStamp, type = _a.type;
    if (vyError(filename)) {
        var location_1 = window.location, navigator_1 = window.navigator, vyGlobal = window.VidyardV4;
        var payload = createErrorReport({
            error: error,
            location: location_1,
            message: message,
            navigator: navigator_1,
            timeStamp: timeStamp,
            type: type,
            vyGlobal: vyGlobal,
        });
        xhrRequest({ endpoint: getErrorURL(), method: 'POST', payload: payload }).then(function (res) { return embed_helpers_log("Error logged " + res); }, ;
    }
};
function logErrors() {
    addListener('error', 'onerror', errorHandler, window);
    addListener('unhandledrejection', '', function (e) {
        var error = e.reason, timeStamp = e.timeStamp, type = e.type;
        if (e.reason instanceof Error && vyError(error.stack)) {
            // prevent errors in the console
            e.preventDefault();
            errorHandler({
                error: error,
                // PromiseRejectionEvents do not have a filename field
                // the workaround is to look for the v4.js script in the stack trace
                filename: error.stack,
                message: error.message,
                timeStamp: timeStamp,
                type: type,
            });
        }
    });
}

// CONCATENATED MODULE: ./src/index.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_debug", function() { return _debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return index_module_api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "players", ;





// --- Runs on script execution ---
logErrors();
// Bind legacy globals
window.VidyardV4 = window.VidyardV4 || vidyard_v4_global;
window.Vidyard = window.Vidyard || vidyard_global;
dispatch_ready();
var _debug = vidyard_v4_global._debug, index_module_api = vidyard_v4_global.api, index_module_players = vidyard_v4_global.players;
// Export the public API

/* harmony default export */ var index_module = __webpack_exports__["default"] = (vidyard_v4_global);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, );


/***/ }),
/* 8 */
/***/ (,
/* 9 */
/***/ (,
/* 10 */
/***/ (,
/* 11 */
/***/ (,
/* 12 */
/***/ (,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // filter function for ancestor elements

var filterAncestor = function filterAncestor(item) {
  return item.nodeType === 1 && item.tagName.toLowerCase() !== 'body' && item.tagName.toLowerCase() !== 'html';
}; // filter function for sibling elements


var filterSibling = function filterSibling(item) {
  return item.nodeType === 1 && item.tagName.toLowerCase() !== 'script';
}; // reducer to flatten arrays


var flattenArrays =  // recursive function to get previous sibling nodes of given element


function getPreviousSiblings(el) {
  var siblings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var previousSibling = el.previousSibling;

  if (!previousSibling) {
    return siblings;
  }

  siblings.push(previousSibling);
  return getPreviousSiblings(previousSibling, siblings);
} // recursive function to get next sibling nodes of given element


function getNextSiblings(el) {
  var siblings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var nextSibling = el.nextSibling;

  if (!nextSibling) {
    return siblings;
  }

  siblings.push(nextSibling);
  return getNextSiblings(nextSibling, siblings);
} // returns all sibling element nodes of given element


function getSiblings(el) {
  var allSiblings = getPreviousSiblings(el).concat(getNextSiblings(el));
  return allSiblings.filter(filterSibling);
} // recursive function to get all ancestor nodes of given element


function getAllAncestors(el) {
  var ancestors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var nextAncestor = el.parentNode;

  if (!nextAncestor) {
    return ancestors;
  }

  ancestors.push(nextAncestor);
  return getAllAncestors(nextAncestor, ancestors);
} // get ancestor nodes of given element


// get siblings of ancestors (i.e. aunts and uncles) of given el


function getSiblingsOfAncestors(el) {
  return getAncestors(el).map(.reduce(flattenArrays, []);
}

module.exports = {
  getSiblings: getSiblings,
  getAncestors: getAncestors,
  getSiblingsOfAncestors: getSiblingsOfAncestors
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 15 */,
/* 16 */
/***/ (,
/* 17 */
/***/ (}),
/* 18 */
/***/})
/******/ ]);
});