/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(93);
function updateConfig(currentConfig, updates) {
  const updatedConfig = {
    ...currentConfig,
    ...updates
  };
  Object.keys(currentConfig).forEach(key => {
    if (currentConfig[key] && typeof currentConfig[key] === 'object') {
      if ((0, _utils.isObject)(currentConfig[key]) && updates[key]) {
        updatedConfig[key] = updateConfig(currentConfig[key], updates[key]);
      } else if (updates[key] && (updates[key].constructor === String || updates[key].constructor === Array)) {
        updatedConfig[key] = updates[key];
      } else if (currentConfig[key].constructor === String || currentConfig[key].constructor === Array) {
        updatedConfig[key] = currentConfig[key];
      } else {
        updatedConfig[key] = {
          ...currentConfig[key],
          ...updates[key]
        };
      }
    }
  });
  return updatedConfig;
}
class Config {
  constructor() {
    this.validKeys = {};
  }
  update = (updates, isDefaultConfig) => {
    if (updates && typeof updates === 'object') {
      if (isDefaultConfig) {
        this.validKeys = Object.keys(updates);
      }
      const {
        validUpdates
      } = Object.keys(updates).reduce((acc, key) => {
        if (this.validKeys.indexOf(key) > -1) {
          acc.validUpdates = {
            ...acc.validUpdates,
            [key]: updates[key]
          };
        }
        return acc;
      }, {
        validUpdates: {}
      });
      const updatedConfig = updateConfig(this, validUpdates);
      Object.assign(this, updatedConfig);
    }
  };
}
var _default = exports["default"] = new Config();

/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cmpUtils = exports.cmpStorage = void 0;
Object.defineProperty(exports, "config", ({
  enumerable: true,
  get: function () {
    return _config.default;
  }
}));
exports.locationHandler = void 0;
Object.defineProperty(exports, "log", ({
  enumerable: true,
  get: function () {
    return _log.default;
  }
}));
exports.portal = void 0;
var _config = _interopRequireDefault(__webpack_require__(274));
var _log = _interopRequireDefault(__webpack_require__(730));
var portal = _interopRequireWildcard(__webpack_require__(960));
exports.portal = portal;
var cmpStorage = _interopRequireWildcard(__webpack_require__(613));
exports.cmpStorage = cmpStorage;
var cmpUtils = _interopRequireWildcard(__webpack_require__(93));
exports.cmpUtils = cmpUtils;
var locationHandler = _interopRequireWildcard(__webpack_require__(28));
exports.locationHandler = locationHandler;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 28:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.updateGeoTargeting = exports.isLocationUs = exports.isLocationSupported = exports.getLocation = void 0;
var _config = _interopRequireDefault(__webpack_require__(274));
var _log = _interopRequireDefault(__webpack_require__(730));
var _utils = __webpack_require__(93);
var _storage = __webpack_require__(613);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const updateGeoTargeting = configUpdates => {
  const liverampWrapper = document.getElementById('liveramp-cmp-wrapper');
  if (liverampWrapper) {
    const {
      geoTargeting
    } = liverampWrapper.dataset;
    if (geoTargeting) {
      try {
        configUpdates.geoTargeting = JSON.parse(geoTargeting);
        _log.default.debug('Updated geo targeting: ', geoTargeting);
      } catch (err) {
        _log.default.error('Unable to parse geo targeting: ', err);
      }
    }
  }
  return configUpdates;
};
exports.updateGeoTargeting = updateGeoTargeting;
const getLocationFromQueryString = location => {
  const country = (0, _utils.getUrlParam)('lrcountry');
  const region = (0, _utils.getUrlParam)('lrregion');
  if (!location) {
    return {
      country,
      region
    };
  }
  if (country) {
    location.country = country;
  }
  if (region) {
    location.region = region;
  }
  return location;
};
const getLocation = async () => {
  let location = await (0, _storage.readGeoLocation)();
  location = getLocationFromQueryString(location);
  if (location && location.country) {
    return location;
  }
  try {
    const response = await fetch(_config.default.geoTargetingUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    if (response) {
      const currentLocation = await response.json();
      if (currentLocation && currentLocation.country) {
        (0, _storage.writeGeoLocation)(JSON.stringify(currentLocation), true);
        return currentLocation;
      }
    }
  } catch (error) {
    _log.default.warn('Location Data Unavailable. Some features may be limited. Please allow location services for full functionality.', error);
    return null;
  }
};
exports.getLocation = getLocation;
const isLocationUs = country => country === 'US';
exports.isLocationUs = isLocationUs;
const isLocationSupported = (currentLocation, configuredLocation) => {
  let isSupported = false;
  if (configuredLocation.allCountries) {
    isSupported = true;
  } else if (currentLocation) {
    const isCountryIncluded = configuredLocation.countries.includes(currentLocation.country);
    if (isCountryIncluded && isLocationUs(currentLocation.country)) {
      if (configuredLocation.allStates) {
        isSupported = true;
      } else {
        const isStateIncluded = configuredLocation.states && configuredLocation.states.length > 0 ? configuredLocation.states.includes(currentLocation.region) : false;
        isSupported = configuredLocation.includeSelection ? isStateIncluded : !isStateIncluded;
      }
    } else {
      isSupported = configuredLocation.includeSelection ? isCountryIncluded : !isCountryIncluded;
    }
  }
  return isSupported;
};
exports.isLocationSupported = isLocationSupported;

/***/ }),

/***/ 730:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _config = _interopRequireDefault(__webpack_require__(274));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-console */

const logLevels = ['debug', 'info', 'warn', 'error'];
var _default = exports["default"] = logLevels.reduce((logger, funcName, index) => {
  logger[funcName] = (...args) => {
    const consoleFunc = funcName === 'debug' ? 'log' : funcName;
    const {
      logging
    } = _config.default;
    if (Function.prototype.bind && window.console && typeof console.log === 'object') {
      ['log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd'].forEach(method => {
        console[method] = (void 0).bind(console[method], console);
      }, Function.prototype.call);
    }
    if (logging && console && typeof console[consoleFunc] === 'function') {
      const enabledLevelIndex = logLevels.indexOf(logging.toString().toLocaleLowerCase());
      if (logging === true || enabledLevelIndex > -1 && index >= enabledLevelIndex) {
        const [message, ...rest] = [...args];
        console[consoleFunc](`${funcName.toUpperCase()} - (GlobalCmp) ${message}`, ...rest);
      }
    }
  };
  return logger;
}, {});

/***/ }),

/***/ 960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.openGlobalPortal = openGlobalPortal;
exports.openSharedPortal = openSharedPortal;
exports.sendGlobalPortalCommand = sendGlobalPortalCommand;
exports.sendSharedPortalCommand = sendSharedPortalCommand;
var _config = _interopRequireDefault(__webpack_require__(274));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-promise-executor-return */

const PORTAL_LOAD_TIMEOUT_MILLISECONDS = 50000;
const PORTAL_COMMAND_TIMEOUT_MILLISECONDS = 5000;
const PORTAL_DATA_PROPERTY = 'lrcmpData';

// Promise resolved with iframe reference
let sharedPortal;
let globalPortal;

// Number of calls to portal
let globalCallCount = 0;
let sharedCallCount = 0;

// Map of callId to Promise.resolve to execute on completion
const globalCallMap = {};
const sharedCallMap = {};
function initIframe(url) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'display: none;');
  iframe.setAttribute('src', url);
  return iframe;
}
function appendToBodyWhenDefined(child) {
  const appendInterval = setInterval(() => {
    if (document.body) {
      document.body.appendChild(child);
      clearInterval(appendInterval);
    }
  }, 5);
  return appendInterval;
}

/**
 * Open an iframe to a page on the portal domain that supports
 * two way communication via postMessage
 *
 * @returns Promise resolved with the iframe reference
 */
function openPortal(iframeSrc, portalCallMap, dataProperty) {
  return new Promise((resolve, reject) => {
    const iframe = initIframe(iframeSrc);
    const appendInterval = appendToBodyWhenDefined(iframe);
    let portalTimeout = setTimeout(() => {
      clearInterval(appendInterval);
      reject(new Error(`Communication could not be established with the portal domain within ${PORTAL_LOAD_TIMEOUT_MILLISECONDS} milliseconds`));
    }, PORTAL_LOAD_TIMEOUT_MILLISECONDS);

    // Add listener for messages from iframe
    window.addEventListener('message', event => {
      // Only look at messages with the data property
      if (event && event.data) {
        const eventData = event.data;
        const data = eventData[dataProperty || PORTAL_DATA_PROPERTY];
        if (data) {
          // The iframe has loaded
          if (data.command === 'isLoaded' && portalTimeout) {
            clearTimeout(portalTimeout);
            portalTimeout = undefined;
            resolve(iframe);
          } else {
            // Resolve the promise mapped by callId
            const queued = portalCallMap[data.callId];
            if (queued) {
              const {
                timeout
              } = queued;
              const resolveQueued = queued.resolve;
              delete portalCallMap[data.callId];
              clearTimeout(timeout);
              resolveQueued(data.result);
            }
          }
        }
      }
    });
  });
}
function openGlobalPortal(dataProperty) {
  // Only ever create a single iframe
  if (!globalPortal) {
    globalPortal = openPortal(_config.default.globalConsentLocation, globalCallMap, dataProperty);
  }
  return globalPortal;
}
function openSharedPortal(dataProperty) {
  // Only ever create a single iframe
  if (!sharedPortal) {
    sharedPortal = openPortal(_config.default.sharedConsentLocation, sharedCallMap, dataProperty);
  }
  return sharedPortal;
}

/**
 * Send a command via postMessage to our portal on the portal domain.
 *
 * @returns Promise resolved with postMessage response result
 */
function sendPortalCommand(iframe, message, dataProperty, portalCallMap, callId, resolve, reject) {
  const timeout = setTimeout(() => {
    delete portalCallMap[callId];
    reject(new Error(`${message.command} response not received from portal domain within ${PORTAL_COMMAND_TIMEOUT_MILLISECONDS} milliseconds`));
  }, PORTAL_COMMAND_TIMEOUT_MILLISECONDS);

  // Store the resolve function and timeout in the map
  portalCallMap[callId] = {
    resolve,
    timeout
  };
  const data = {};
  data[dataProperty || PORTAL_DATA_PROPERTY] = {
    callId,
    ...message
  };

  // Send the message to the portal
  iframe.contentWindow.postMessage(data, '*');
}
function sendGlobalPortalCommand(message, dataProperty) {
  // Increment counter to use as unique callId
  const callId = `vp:${++globalCallCount}`;
  return new Promise((resolve, reject) =>
  // Make sure iframe is loaded
  openGlobalPortal(dataProperty).then(iframe => {
    sendPortalCommand(iframe, message, dataProperty, globalCallMap, callId, resolve, reject);
  }).catch(reject));
}
function sendSharedPortalCommand(message, dataProperty) {
  // Increment counter to use as unique callId
  const callId = `vp:${++sharedCallCount}`;
  return new Promise((resolve, reject) =>
  // Make sure iframe is loaded
  openSharedPortal(dataProperty).then(iframe => {
    sendPortalCommand(iframe, message, dataProperty, sharedCallMap, callId, resolve, reject);
  }).catch(reject));
}

/***/ }),

/***/ 613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MAX_AGE = void 0;
exports.readCookie = readCookie;
exports.readData = readData;
exports.readFromLocalStorage = readFromLocalStorage;
exports.readFromPortal = readFromPortal;
exports.readGeoLocation = readGeoLocation;
exports.writeCookie = writeCookie;
exports.writeData = writeData;
exports.writeGeoLocation = writeGeoLocation;
exports.writeOnPortal = writeOnPortal;
exports.writeToLocalStorage = writeToLocalStorage;
var _config = _interopRequireDefault(__webpack_require__(274));
var _log = _interopRequireDefault(__webpack_require__(730));
var _utils = __webpack_require__(93);
var _portal = __webpack_require__(960);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-use-before-define */

const EXPIRED = 'Thu, 01 Jan 1970 00:00:01 GMT;';
const MAX_AGE = exports.MAX_AGE = 33696000;
const PORTAL_DATA_PROPERTY = 'lrcmpData';
const GEO_LOCATION_NAME = 'geo-location';
const GEO_LOCATION_MAX_AGE = 86400;
function getDomain() {
  let i;
  let h;
  const cookie = 'lr_get_top_level_domain=cookie';
  const hostname = document.location.hostname.split('.');
  for (i = hostname.length - 1; i >= 0; i--) {
    h = hostname.slice(i).join('.');
    document.cookie = `${cookie};domain=.${h};SameSite=Lax`;
    if (document.cookie.indexOf(cookie) > -1) {
      document.cookie = `${cookie.split('=')[0]}=;domain=.${h};expires==${EXPIRED}SameSite=Lax`;
      return h;
    }
  }
  return null;
}
function readFromLocalStorage(name, preventFallback = false, stringOnly = false) {
  try {
    if (localStorage) {
      if (stringOnly) {
        const data = localStorage.getItem(name);
        if (data) {
          return data;
        }
      } else {
        const object = JSON.parse(localStorage.getItem(name));
        if (object && object.data) {
          if (!object.expire || object.expire > +new Date()) {
            return object.data;
          }
          if (!preventFallback) {
            const data = readCookie(name, true);
            if (data) {
              return data;
            }
            return object.data;
          }
        }
      }
    }
  } catch (error) {
    _log.default.error(`Unable to parse ${name} from localStorage: `, error);
  }
  if (!preventFallback) {
    return readCookie(name, true);
  }
  return null;
}
function readCookie(name, preventFallback = false) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length >= 2) {
    return parts.pop().split(';').shift();
  }
  if (!preventFallback) {
    return readFromLocalStorage(name, true);
  }
  return null;
}
function writeCookie(name, value, maxAgeSeconds, path = '/') {
  const maxAge = maxAgeSeconds === null ? '' : `;max-age=${maxAgeSeconds}`;
  const expires = maxAgeSeconds === null ? '' : `;expires=${new Date(new Date() * 1 + maxAgeSeconds * 1000).toUTCString()}`;
  path = `;path=${path}`;
  let domain = getDomain();
  domain = domain ? `;domain=.${domain}` : '';
  if (value) {
    if (_config.default.useSecondLevelDomain) {
      document.cookie = `${name}=${path};expires=${EXPIRED}SameSite=Lax`;
      document.cookie = `${name}=${value}${path}${domain}${maxAge}${expires};SameSite=Lax`;
    } else {
      document.cookie = `${name}=${domain}${path};expires=${EXPIRED}SameSite=Lax`;
      document.cookie = `${name}=${value}${path}${maxAge}${expires};SameSite=Lax`;
    }
  } else {
    document.cookie = `${name}=${path};expires=${EXPIRED}SameSite=Lax`;
    document.cookie = `${name}=${domain}${path};expires=${EXPIRED}SameSite=Lax`;
  }
  return readCookie(name);
}
function writeToLocalStorage(name, value, maxAgeSeconds = MAX_AGE, preventFallback = false) {
  try {
    if (localStorage) {
      if (value) {
        const object = {
          data: value,
          expire: +new Date(new Date() * 1 + maxAgeSeconds * 1000)
        };
        localStorage.setItem(name, JSON.stringify(object));
      } else {
        localStorage.removeItem(name);
      }
      return value;
    }
  } catch (error) {
    _log.default.error(`Unable to store ${name} to localStorage: `, error);
  }
  if (!preventFallback) {
    return writeCookie(name, value, maxAgeSeconds);
  }
  return null;
}
function readData(name, preventFallback = false, stringOnly = false) {
  if (_config.default.useExternalData) {
    const data = (0, _utils.getUrlParam)(name);
    if (data) {
      _log.default.debug(`Skipping cookies and localStorage for ${name}, read from query string: `, data);
      return data;
    }
  }
  if (_config.default.useCookies) {
    return readCookie(name);
  }
  return readFromLocalStorage(name, preventFallback, stringOnly);
}
function writeData(name, value, maxAgeSeconds, path) {
  if (_config.default.useCookies) {
    return writeCookie(name, value, maxAgeSeconds, path);
  }
  return writeToLocalStorage(name, value, maxAgeSeconds);
}
function readFromPortal(portal, dataProperty, name) {
  _log.default.debug('Request data from portal');
  return portal({
    command: 'read',
    name,
    useCookies: _config.default.useCookies
  }, dataProperty).then(result => {
    _log.default.debug('Read data from portal: ', result);
    return result;
  }).catch(err => {
    _log.default.error('Failed reading from portal: ', err);
  });
}
function writeOnPortal(portal, dataProperty, name, value, maxAgeSeconds) {
  _log.default.debug('Send data to portal: ', value);
  return portal({
    command: 'write',
    name,
    value,
    maxAgeSeconds,
    useCookies: _config.default.useCookies
  }, dataProperty).catch(err => {
    _log.default.error('Failed writing data on portal: ', err);
  });
}
function readLocalGeoLocation() {
  const geoLocation = readData(GEO_LOCATION_NAME);
  _log.default.debug('Read local geoLocation: ', geoLocation);
  if (geoLocation) {
    try {
      return JSON.parse(geoLocation);
    } catch (ex) {
      _log.default.debug('Error while parsing local geoLocation: ', ex);
    }
  }
  return geoLocation;
}
function writeGeoLocation(location, sync) {
  _log.default.debug('Writing geoLocation: ', location);
  if (!_utils.isSafari && _config.default.thirdPartyCookieSync && sync) {
    writeOnPortal(_portal.sendSharedPortalCommand, PORTAL_DATA_PROPERTY, GEO_LOCATION_NAME, location, GEO_LOCATION_MAX_AGE);
  }
  writeData(GEO_LOCATION_NAME, location, GEO_LOCATION_MAX_AGE);
}
function readGeoLocation() {
  if (!_utils.isSafari && _config.default.thirdPartyCookieSync) {
    return readFromPortal(_portal.sendSharedPortalCommand, PORTAL_DATA_PROPERTY, GEO_LOCATION_NAME).then(portalData => {
      _log.default.debug('Read geo location from portal: ', portalData);
      try {
        if (portalData) {
          writeGeoLocation(portalData);
          return JSON.parse(portalData);
        }
      } catch (e) {
        _log.default.debug('Error while parsing geoLocation from portal: ', e);
      }
      return readLocalGeoLocation();
    });
  }
  return Promise.resolve(readLocalGeoLocation());
}

/***/ }),

/***/ 93:
/***/ ((module) => {

"use strict";


/* eslint-disable no-bitwise */
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
function getDecisecond() {
  const date = new Date();
  const utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return Math.round(utc / 100);
}
function isDoNotTrackEnabled() {
  const doNotTrackOption = window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack;
  if (!doNotTrackOption) {
    return false;
  }
  if (doNotTrackOption.charAt(0) === '1' || doNotTrackOption === 'yes') {
    return true;
  }
  return false;
}
function isBoolean(value) {
  return value === false || value === true;
}
function isObject(obj) {
  const type = typeof obj;
  return (type === 'function' || type === 'object' && !!obj) && obj.constructor !== Array;
}
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
function orderObject(object) {
  return Object.keys(object).sort().reduce((obj, key) => {
    obj[key] = object[key];
    if (Array.isArray(obj[key])) {
      obj[key].sort();
    }
    return obj;
  }, {});
}
function hashCode(s) {
  let h = 0;
  const l = s.length;
  let i = 0;
  if (l > 0) {
    while (i < l) {
      h = (h << 5) - h + s.charCodeAt(i++) | 0;
    }
  }
  return h.toString();
}
function getUrlParams() {
  const params = window.location.href.split('?')[1];
  const data = {};
  if (params) {
    const content = params.split('&');
    for (const param of content) {
      const [key, value] = param.split('=');
      data[key] = value;
    }
  }
  return data;
}
function getUrlParam(name) {
  return getUrlParams()[name];
}
function syncEmitter(callback, resolve) {
  this.done = () => {
    callback(resolve);
  };
}
function shouldCcpaBeSuppressed(ccpaConfig) {
  const doNotTrack = isDoNotTrackEnabled() && ccpaConfig.doNotTrack;
  const globalPrivacyControl = !!window.navigator.globalPrivacyControl && ccpaConfig.globalPrivacyControl;
  return ccpaConfig.enabled && (doNotTrack || globalPrivacyControl);
}
module.exports = {
  isSafari,
  getDecisecond,
  isDoNotTrackEnabled,
  isBoolean,
  isObject,
  isObjectEmpty,
  orderObject,
  hashCode,
  getUrlParam,
  syncEmitter,
  shouldCcpaBeSuppressed
};

/***/ }),

/***/ 703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(174);

/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));

var _v = _interopRequireDefault(__webpack_require__(437));

var _v2 = _interopRequireDefault(__webpack_require__(472));

var _v3 = _interopRequireDefault(__webpack_require__(994));

var _v4 = _interopRequireDefault(__webpack_require__(468));

var _nil = _interopRequireDefault(__webpack_require__(570));

var _version = _interopRequireDefault(__webpack_require__(739));

var _validate = _interopRequireDefault(__webpack_require__(753));

var _stringify = _interopRequireDefault(__webpack_require__(163));

var _parse = _interopRequireDefault(__webpack_require__(349));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 184:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ 88:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = {
  randomUUID
};
exports["default"] = _default;

/***/ }),

/***/ 570:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ 349:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(753));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ 261:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 254:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ 163:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(__webpack_require__(753));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ 437:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__webpack_require__(24));

var _stringify = __webpack_require__(163);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.unsafeStringify)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ 472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(722));

var _md = _interopRequireDefault(__webpack_require__(184));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ 722:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;

var _stringify = __webpack_require__(163);

var _parse = _interopRequireDefault(__webpack_require__(349));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _native = _interopRequireDefault(__webpack_require__(88));

var _rng = _interopRequireDefault(__webpack_require__(24));

var _stringify = __webpack_require__(163);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ 468:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(722));

var _sha = _interopRequireDefault(__webpack_require__(254));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ 753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__webpack_require__(261));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ 739:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(753));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),

/***/ 291:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ecstModule", ({
  enumerable: true,
  get: function () {
    return _ecst.ecstModule;
  }
}));
Object.defineProperty(exports, "isEcstSupported", ({
  enumerable: true,
  get: function () {
    return _ecst.isEcstSupported;
  }
}));
Object.defineProperty(exports, "listenForEcstModuleReady", ({
  enumerable: true,
  get: function () {
    return _ecst.listenForEcstModuleReady;
  }
}));
Object.defineProperty(exports, "sendDataToEcst", ({
  enumerable: true,
  get: function () {
    return _ecst.sendDataToEcst;
  }
}));
var _ecst = __webpack_require__(199);

/***/ }),

/***/ 199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sendEcstReadySignal = exports.sendDataToEcst = exports.listenForEcstModuleReady = exports.isLocationSupportedByEcst = exports.isEcstSupported = exports.ecstModule = void 0;
var _liverampCmpUtils = __webpack_require__(703);
var _enums = __webpack_require__(109);
const ecstModule = exports.ecstModule = {
  loaded: false
};
const retrieveEnvelopeData = async () => {
  const envelopeData = {};
  const envelopeValue = await window.ats.retrieveEnvelope();
  if (envelopeValue) {
    envelopeData.it = _enums.IDENTIFIER_TYPES.IDENTITY_ENVELOPE;
    const retrievedEnvelopeValue = decodeURIComponent(envelopeValue);
    const {
      envelope
    } = JSON.parse(retrievedEnvelopeValue);
    envelopeData.iv = envelope;
  }
  return envelopeData;
};
const handleEcstParameterData = ecstParameterData => {
  ecstParameterData = ecstParameterData || {};
  if (ecstParameterData) {
    if (ecstParameterData.ct === _enums.CMP_TYPES.CCPA) {
      ecstParameterData.ct = _enums.CONSENT_TYPES.CCPA;
    }
    if (ecstParameterData.ct === _enums.CMP_TYPES.GDPR) {
      ecstParameterData.ct = _enums.CONSENT_TYPES.TCF_V2;
    }
    if (ecstParameterData.ct === _enums.CMP_TYPES.GLOBAL_CMP) {
      if (ecstParameterData.uspString) {
        ecstParameterData.ct = _enums.CONSENT_TYPES.CCPA;
        ecstParameterData.cv = ecstParameterData.uspString;
      }
    }
  }
  if (!ecstParameterData.cv || !ecstParameterData.ct) {
    delete ecstParameterData.ct;
    delete ecstParameterData.cv;
  }
  delete ecstParameterData.uspString;
  return ecstParameterData;
};
const encodeParams = params => {
  if (params) {
    return Object.keys(params).filter(key => params[key]).map(key => [key, params[key]].map(encodeURIComponent).join('=')).join('&');
  }
};
const encodeEcstUrl = (ecstParameterData, envelopeData) => `https://${_enums.ECST_SEGMENTS_URL}?${encodeParams({
  ...ecstParameterData,
  ...envelopeData
})}`;
const fetchEcstEndpoint = async (url, pData) => {
  const options = {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (pData) {
    options.body = JSON.stringify({
      segments: pData
    });
  }
  try {
    const response = await fetch(url, options);
    if (response.status === 200 && response.ok) {
      return 'Data Successfully sent to eCST.';
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
};
const sendDataToEcst = async (ecstParameterData, pData) => {
  if (window.ats) {
    const envelopeData = await retrieveEnvelopeData();
    const consentParams = handleEcstParameterData(ecstParameterData);
    const ecstUrl = encodeEcstUrl(consentParams, envelopeData);
    return fetchEcstEndpoint(ecstUrl, pData);
  }
};
exports.sendDataToEcst = sendDataToEcst;
const isEcstSupported = (isLocationSupported, ecst) => isLocationSupported && ecst && ecst.enabled;
exports.isEcstSupported = isEcstSupported;
const sendEcstReadySignal = (log, dispatchEvent) => {
  if (!ecstModule.loaded) {
    ecstModule.loaded = true;
    log.info('ECST module is Ready.');
    dispatchEvent('ecstModuleReady');
  }
};
exports.sendEcstReadySignal = sendEcstReadySignal;
const isLocationSupportedByEcst = country => [_enums.COUNTRY_CODE.UNITED_STATES, _enums.COUNTRY_CODE.AUSTRALIA, _enums.COUNTRY_CODE.HONG_KONG, _enums.COUNTRY_CODE.INDONESIA, _enums.COUNTRY_CODE.JAPAN, _enums.COUNTRY_CODE.SINGAPORE, _enums.COUNTRY_CODE.TAIWAN].includes(country);
exports.isLocationSupportedByEcst = isLocationSupportedByEcst;
const listenForEcstModuleReady = (geoLocation, log, dispatchEvent, ecst) => {
  if (isEcstSupported(isLocationSupportedByEcst(geoLocation.country), ecst)) {
    if (_liverampCmpUtils.locationHandler.isLocationUs(geoLocation.country)) {
      let librariesChecked = 0;
      const interval = setInterval(() => {
        librariesChecked += 1;
        // eslint-disable-next-line no-underscore-dangle
        if (window.__uspapi || window.__gpp || librariesChecked === 35) {
          sendEcstReadySignal(log, dispatchEvent);
          clearInterval(interval);
        }
      }, 200);
    } else {
      sendEcstReadySignal(log, dispatchEvent);
    }
  }
};
exports.listenForEcstModuleReady = listenForEcstModuleReady;

/***/ }),

/***/ 109:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.IDENTIFIER_TYPES = exports.ECST_SEGMENTS_URL = exports.COUNTRY_CODE = exports.CONSENT_TYPES = exports.CMP_TYPES = void 0;
const CMP_TYPES = exports.CMP_TYPES = {
  GDPR: 'gdpr',
  CCPA: 'ccpa',
  GLOBAL_CMP: 'global',
  GPP: 'gpp'
};
const CONSENT_TYPES = exports.CONSENT_TYPES = {
  TCF_V2: '4',
  CCPA: '3'
};
const IDENTIFIER_TYPES = exports.IDENTIFIER_TYPES = {
  IDENTITY_ENVELOPE: '19'
};
const COUNTRY_CODE = exports.COUNTRY_CODE = {
  UNITED_STATES: 'US',
  AUSTRALIA: 'AU',
  JAPAN: 'JP',
  SINGAPORE: 'SG',
  INDONESIA: 'ID',
  TAIWAN: 'TW',
  HONG_KONG: 'HK'
};
const ECST_SEGMENTS_URL = exports.ECST_SEGMENTS_URL = 'di.rlcdn.com/api/segment';

/***/ }),

/***/ 136:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _gppConsentHandler = _interopRequireDefault(__webpack_require__(305));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var _default = exports["default"] = _gppConsentHandler.default;

/***/ }),

/***/ 252:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkGppCaliforniaConsent = void 0;
var _enums = __webpack_require__(424);
const checkGppCaliforniaConsent = section => {
  const gppConsentObject = {
    sectionId: '',
    consent: false
  };
  if (section) {
    gppConsentObject.consent = section.SaleOptOutNotice === 1 && section.SharingOptOutNotice === 1 && (section.SensitiveDataLimitUseNotice === 0 || section.SensitiveDataLimitUseNotice === 1) && section.SaleOptOut === 2 && section.SharingOptOut === 2 && JSON.stringify(section.SensitiveDataProcessing) === '[0,0,0,0,0,0,0,0,0]' && JSON.stringify(section.KnownChildSensitiveDataConsents) === '[0,0]' && (section.PersonalDataConsents === 0 || section.PersonalDataConsents === 2) && !!section.Gpc === false;
    gppConsentObject.sectionId = _enums.GPP_SECTION_IDS.CALIFORNIA;
  }
  return gppConsentObject;
};
exports.checkGppCaliforniaConsent = checkGppCaliforniaConsent;

/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkGppColoradoConsent = void 0;
var _enums = __webpack_require__(424);
const checkGppColoradoConsent = section => {
  const gppConsentObject = {
    sectionId: '',
    consent: false
  };
  if (section) {
    gppConsentObject.consent = section.SharingNotice === 1 && section.SaleOptOutNotice === 1 && section.TargetedAdvertisingOptOutNotice === 1 && section.SaleOptOut === 2 && section.TargetedAdvertisingOptOut === 2 && JSON.stringify(section.SensitiveDataProcessing) === '[0,0,0,0,0,0,0]' && section.KnownChildSensitiveDataConsents === 0 && !!section.Gpc === false;
    gppConsentObject.sectionId = _enums.GPP_SECTION_IDS.COLORADO;
  }
  return gppConsentObject;
};
exports.checkGppColoradoConsent = checkGppColoradoConsent;

/***/ }),

/***/ 652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkGppConnecticutConsent = void 0;
var _enums = __webpack_require__(424);
const checkGppConnecticutConsent = section => {
  const gppConsentObject = {
    sectionId: '',
    consent: false
  };
  if (section) {
    gppConsentObject.consent = section.SharingNotice === 1 && section.SaleOptOutNotice === 1 && section.TargetedAdvertisingOptOutNotice === 1 && section.SaleOptOut === 2 && section.TargetedAdvertisingOptOut === 2 && JSON.stringify(section.SensitiveDataProcessing) === '[0,0,0,0,0,0,0,0]' && JSON.stringify(section.KnownChildSensitiveDataConsents) === '[0,0,0]' && !!section.Gpc === false;
    gppConsentObject.sectionId = _enums.GPP_SECTION_IDS.CONNECTICUT;
  }
  return gppConsentObject;
};
exports.checkGppConnecticutConsent = checkGppConnecticutConsent;

/***/ }),

/***/ 424:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.US_STATES = exports.GPP_SECTION_IDS = exports.API_PREFIX_STRING = void 0;
const GPP_SECTION_IDS = exports.GPP_SECTION_IDS = {
  US_NATIONAL: '7',
  CALIFORNIA: '8',
  VIRGINIA: '9',
  COLORADO: '10',
  UTAH: '11',
  CONNECTICUT: '12'
};
const US_STATES = exports.US_STATES = {
  CALIFORNIA: 'CA',
  VIRGINIA: 'VA',
  COLORADO: 'CO',
  UTAH: 'UT',
  CONNECTICUT: 'CT'
};
const API_PREFIX_STRING = exports.API_PREFIX_STRING = {
  US_NATIONAL: 'usnat',
  CALIFORNIA: 'usca',
  VIRGINIA: 'usva',
  COLORADO: 'usco',
  UTAH: 'usut',
  CONNECTICUT: 'usct'
};

/***/ }),

/***/ 305:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _californiaConsent = __webpack_require__(252);
var _virginiaConsent = __webpack_require__(345);
var _coloradoConsent = __webpack_require__(706);
var _utahConsent = __webpack_require__(442);
var _connecticutConsent = __webpack_require__(652);
var _usNationalConsent = __webpack_require__(45);
var _enums = __webpack_require__(424);
/* eslint no-underscore-dangle: 0 */

class GppConsentHandler {
  constructor(geoLocation) {
    this.geoLocation = geoLocation;
  }
  getGppSection = apiPrefixString => {
    let gppSection;
    const gppSectionReturn = window.__gpp('getSection', null, apiPrefixString);
    if (gppSectionReturn) {
      // GPP command with return
      return gppSectionReturn;
    }
    // GPP command with callback
    window.__gpp('getSection', result => {
      gppSection = Array.isArray(result) ? {
        ...result[0],
        ...result[1]
      } : result;
    }, apiPrefixString);
    return gppSection;
  };
  checkGppSectionConsent = () => {
    let gppConsentObject = {
      sectionId: '',
      consent: false
    };
    if (this.geoLocation.region) {
      if (this.geoLocation.region === _enums.US_STATES.CALIFORNIA) {
        gppConsentObject = (0, _californiaConsent.checkGppCaliforniaConsent)(this.getGppSection(_enums.API_PREFIX_STRING.CALIFORNIA));
      } else if (this.geoLocation.region === _enums.US_STATES.COLORADO) {
        gppConsentObject = (0, _coloradoConsent.checkGppColoradoConsent)(this.getGppSection(_enums.API_PREFIX_STRING.COLORADO));
      } else if (this.geoLocation.region === _enums.US_STATES.UTAH) {
        gppConsentObject = (0, _utahConsent.checkGppUtahConsent)(this.getGppSection(_enums.API_PREFIX_STRING.UTAH));
      } else if (this.geoLocation.region === _enums.US_STATES.CONNECTICUT) {
        gppConsentObject = (0, _connecticutConsent.checkGppConnecticutConsent)(this.getGppSection(_enums.API_PREFIX_STRING.CONNECTICUT));
      } else if (this.geoLocation.region === _enums.US_STATES.VIRGINIA) {
        gppConsentObject = (0, _virginiaConsent.checkGppVirginiaConsent)(this.getGppSection(_enums.API_PREFIX_STRING.VIRGINIA));
      }
    }
    if (!gppConsentObject.consent && !gppConsentObject.sectionId) {
      gppConsentObject = (0, _usNationalConsent.checkGppNationalConsent)(this.getGppSection(_enums.API_PREFIX_STRING.US_NATIONAL));
    }
    return gppConsentObject;
  };
  checkGppConsentForAts = () => {
    const gppSection = this.getGppSection(_enums.API_PREFIX_STRING.US_NATIONAL);
    return (0, _usNationalConsent.checkGppNationalConsent)(gppSection).consent;
  };
  getGppDataForEcst = () => {
    const gppConsentData = {
      gpp: null,
      sectionId: null
    };
    const pingReturn = window.__gpp('ping');
    if (pingReturn) {
      // GPP command with return
      const gppData = window.__gpp('getGPPData');
      gppConsentData.gpp = gppData.gppString;
    } else {
      // GPP command with callback
      window.__gpp('ping', pingResult => {
        if (pingResult.gppVersion === '1.0') {
          window.__gpp('getGPPData', gppData => {
            gppConsentData.gpp = gppData.gppString;
          });
        } else if (pingResult.gppVersion === '1.1') {
          gppConsentData.gpp = pingResult.gppString;
        }
      });
    }
    const gppConsentObject = this.checkGppSectionConsent();
    gppConsentData.sectionId = gppConsentObject.sectionId;
    return gppConsentData;
  };
}
exports["default"] = GppConsentHandler;

/***/ }),

/***/ 45:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkGppNationalConsent = void 0;
var _enums = __webpack_require__(424);
const checkGppNationalConsent = section => {
  const gppConsentObject = {
    sectionId: '',
    consent: false
  };
  if (section) {
    gppConsentObject.consent = section.SharingNotice === 1 && section.SaleOptOutNotice === 1 && section.SharingOptOutNotice === 1 && section.TargetedAdvertisingOptOutNotice === 1 && (section.SensitiveDataProcessingOptOutNotice === 0 || section.SensitiveDataProcessingOptOutNotice === 1) && (section.SensitiveDataLimitUseNotice === 0 || section.SensitiveDataLimitUseNotice === 1) && section.SaleOptOut === 2 && section.SharingOptOut === 2 && section.TargetedAdvertisingOptOut === 2 && JSON.stringify(section.SensitiveDataProcessing) === '[0,0,0,0,0,0,0,0,0,0,0,0]' && JSON.stringify(section.KnownChildSensitiveDataConsents) === '[0,0]' && (section.PersonalDataConsents === 0 || section.PersonalDataConsents === 2) && !!section.Gpc === false;
    gppConsentObject.sectionId = _enums.GPP_SECTION_IDS.US_NATIONAL;
  }
  return gppConsentObject;
};
exports.checkGppNationalConsent = checkGppNationalConsent;

/***/ }),

/***/ 442:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkGppUtahConsent = void 0;
var _enums = __webpack_require__(424);
const checkGppUtahConsent = section => {
  const gppConsentObject = {
    sectionId: '',
    consent: false
  };
  if (section) {
    gppConsentObject.consent = section.SharingNotice === 1 && section.SaleOptOutNotice === 1 && section.TargetedAdvertisingOptOutNotice === 1 && (section.SensitiveDataProcessingOptOutNotice === 0 || section.SensitiveDataProcessingOptOutNotice === 1) && section.SaleOptOut === 2 && section.TargetedAdvertisingOptOut === 2 && JSON.stringify(section.SensitiveDataProcessing) === '[0,0,0,0,0,0,0,0]' && section.KnownChildSensitiveDataConsents === 0 && !!section.Gpc === false;
    gppConsentObject.sectionId = _enums.GPP_SECTION_IDS.UTAH;
  }
  return gppConsentObject;
};
exports.checkGppUtahConsent = checkGppUtahConsent;

/***/ }),

/***/ 345:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkGppVirginiaConsent = void 0;
var _enums = __webpack_require__(424);
const checkGppVirginiaConsent = section => {
  const gppConsentObject = {
    sectionId: '',
    consent: false
  };
  if (section) {
    gppConsentObject.consent = section.SharingNotice === 1 && section.SaleOptOutNotice === 1 && section.TargetedAdvertisingOptOutNotice === 1 && section.SaleOptOut === 2 && section.TargetedAdvertisingOptOut === 2 && JSON.stringify(section.SensitiveDataProcessing) === '[0,0,0,0,0,0,0,0]' && section.KnownChildSensitiveDataConsents === 0 && !!section.Gpc === false;
    gppConsentObject.sectionId = _enums.GPP_SECTION_IDS.VIRGINIA;
  }
  return gppConsentObject;
};
exports.checkGppVirginiaConsent = checkGppVirginiaConsent;

/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _liverampCmpUtils = __webpack_require__(703);
var _gppConsentHandler = _interopRequireDefault(__webpack_require__(136));
var _ecst = __webpack_require__(291);
var _enums = __webpack_require__(373);
var _log = _interopRequireDefault(__webpack_require__(618));
var _utils = __webpack_require__(709);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint no-underscore-dangle: 0 */

const LIVERAMP_VENDOR_ID = 97;
const LIVERAMP_PURPOSE_IDS = [1, 4, 5, 6];
class AtsHandler {
  constructor(geoLocation, atsRules, integrations, cmpHandler, notify) {
    this.cmpHandler = cmpHandler;
    this.intervalId = setInterval(this.checkConsent, 100, geoLocation, atsRules, integrations, cmpHandler, notify);
    this.geoLocation = geoLocation;
    this.ecst;
    this.gppConsentHandler = this.cmpHandler && this.cmpHandler.cmp && this.cmpHandler.cmp.type === _enums.CMP_TYPES.GPP || window.__gpp ? new _gppConsentHandler.default(geoLocation) : null;
  }
  checkConsent = (geoLocation, atsRules, integrations, cmpHandler, notify) => {
    if (cmpHandler.activeCmp && cmpHandler.cmpLoaded) {
      cmpHandler.checkConsent({
        data: cmpHandler.activeCmp.type !== _enums.CMP_TYPES.GPP ? [{
          vendorId: LIVERAMP_VENDOR_ID,
          purposeIds: LIVERAMP_PURPOSE_IDS
        }] : null,
        recheckConsentOnChange: true
      }, (data, success) => {
        if (success && data) {
          if (cmpHandler.activeCmp.type === _enums.CMP_TYPES.GPP) {
            this.checkGppConsentForAts(geoLocation, atsRules, integrations, notify);
          } else {
            this.findAndLoadAts(geoLocation, atsRules, integrations, notify);
          }
        } else {
          _log.default.debug(`There's no consent for ATS.`);
        }
      });
    } else {
      this.findAndLoadAts(geoLocation, atsRules, integrations, notify);
    }
    clearInterval(this.intervalId);
  };
  checkGppConsentForAts = (geoLocation, atsRules, integrations, notify) => {
    const consent = this.gppConsentHandler.checkGppConsentForAts();
    if (consent) {
      this.findAndLoadAts(geoLocation, atsRules, integrations, notify);
    } else {
      _log.default.debug(`There's no consent for ATS.`);
    }
  };
  findAndLoadAts = (geoLocation, atsRules, integrations, notify) => {
    if (atsRules && atsRules.length > 0 && !window.ats) {
      const atsRule = atsRules.find(item => item.type === _enums.INTEGRATION_TYPES.ATS && this.isAtsAllowedToLoad(item.triggers, geoLocation));
      if (atsRule) {
        this.loadAts(atsRule.id, atsRule.triggers, atsRule.ecst, notify);
      }
    } else if (integrations && integrations.length > 0 && !window.ats) {
      const atsIntegration = integrations.find(item => item.integrationType === _enums.INTEGRATION_TYPES.ATS && this.isAtsAllowedToLoad(item.integration.conditions, geoLocation));
      if (atsIntegration) {
        this.loadAts(atsIntegration.integration.configId, atsIntegration.integration.conditions, null, notify);
      }
    } else if (!window.ats) {
      _log.default.debug('Config without ATS.');
    }
  };
  isAtsAllowedToLoad = (conditions, geoLocation) => {
    const geoTargeting = this.getGeoTargeting(conditions);
    const domains = this.getDomains(conditions);
    if (_liverampCmpUtils.locationHandler.isLocationSupported(geoLocation, geoTargeting) && this.isDomainFulfilled(domains, window.location.hostname)) {
      return true;
    }
    _log.default.debug(`ATS loading rules aren't fulfilled.`);
    return false;
  };
  loadAts = (id, conditions, ecst, notify) => {
    const loadEvent = this.getLoadEvent(conditions);
    switch (loadEvent) {
      case _enums.LOAD_EVENTS.PAGE_VIEW:
        this.insertAts(id, ecst, notify);
        break;
      case _enums.LOAD_EVENTS.DOM_READY:
        this.loadOnDomReady(id, ecst, notify);
        break;
      case _enums.LOAD_EVENTS.WINDOW_LOADED:
        this.loadOnWindowLoaded(id, ecst, notify);
        break;
      default:
        _log.default.debug(`Unsupported load event.`);
        break;
    }
  };
  getGeoTargeting = conditions => {
    const condition = conditions.find(c => c.type === _enums.CONDITION_TYPES.GEO_TARGETING);
    if (condition) {
      return condition.geoTargeting;
    }
    return null;
  };
  getDomains = conditions => {
    const domains = [];
    const condition = conditions.find(c => c.type === _enums.CONDITION_TYPES.PAGE_VIEW);
    if (condition) {
      condition.rules.forEach(rule => {
        domains.push(rule.value);
      });
    }
    return domains;
  };
  getLoadEvent = conditions => {
    const condition = conditions.find(c => c.type === _enums.CONDITION_TYPES.LOAD_EVENT);
    if (condition) {
      return condition.loadEvent;
    }
    return null;
  };
  isDomainFulfilled = (domains, domain) => {
    const urlParam = _liverampCmpUtils.cmpUtils.getUrlParam('domain');
    if (urlParam) {
      domain = this.extractHostname(urlParam);
    }
    if (domain) {
      domain = this.removeWWW(domain);
      return domains.some(value => {
        if (value) {
          value = this.extractHostname(value);
          value = this.removeWWW(value);
          return domain.indexOf(value) > -1 || value.indexOf(domain) > -1;
        }
        return false;
      });
    }
    return false;
  };
  extractHostname = value => {
    if (value) {
      if (value.indexOf('//') > -1) {
        [,, value] = value.split('/');
      } else {
        [value] = value.split('/');
      }
      [value] = value.split(':');
      [value] = value.split('?');
    }
    return value;
  };
  removeWWW = value => {
    if (value && value.indexOf('www.') === 0) {
      value = value.replace('www.', '');
    }
    return value;
  };
  loadOnDomReady = (id, ecst, notify) => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      this.insertAts(id, ecst, notify);
    } else {
      window.addEventListener('DOMContentLoaded', () => {
        this.insertAts(id, ecst, notify);
      });
    }
  };
  loadOnWindowLoaded = (id, ecst, notify) => {
    if (document.readyState === 'complete') {
      this.insertAts(id, ecst, notify);
    } else {
      window.addEventListener('load', () => {
        this.insertAts(id, ecst, notify);
      });
    }
  };
  insertAts = (id, ecst, notify) => {
    notify = notify || (() => {});
    const wrapperSrc = `${_liverampCmpUtils.config.atsConfigUrl}/ats-modules/${id}/ats.js`;
    _log.default.debug('Insert ATS wrapper with source: ', wrapperSrc);
    const wrapperScript = document.createElement('script');
    wrapperScript.setAttribute('src', wrapperSrc);
    wrapperScript.setAttribute('id', 'liveramp-ats-wrapper');
    document.head.appendChild(wrapperScript);
    wrapperScript.onload = () => {
      this.ecst = ecst;
      _log.default.debug('ATS wrapper loaded');
      notify('atsWrapperLoaded');
      (0, _ecst.listenForEcstModuleReady)(this.geoLocation, _log.default, _utils.dispatchModuleReadyEvent, ecst);
      if (ecst && ecst.enableGoogleTagInteraction) {
        this.setEcstAdsEventListener();
      }
    };
    wrapperScript.onerror = () => {
      _log.default.error('Unable to load ATS wrapper: ', wrapperSrc);
      notify('atsWrapperNotLoaded');
    };
  };
  setEcstAdsEventListener = () => {
    if (window.googletag && window.googletag.cmd) {
      window.googletag.cmd.push(() => {
        window.googletag.pubads().addEventListener('slotRenderEnded', event => {
          const {
            slot
          } = event;
          const googleTagData = {
            slot: slot.getSlotElementId(),
            advertiserId: event.advertiserId,
            campaignId: event.campaignId,
            creativeId: event.creativeId,
            lineItemId: event.lineItemId
          };
          this.handleEcstCall(googleTagData, data => console.log(data));
        });
      });
    }
  };
  setEcstParameterData = ecstParametersData => {
    ecstParametersData = ecstParametersData || {};
    ecstParametersData.pid = this.ecst.id;
    if (window.__gpp) {
      const {
        gpp,
        sectionId
      } = this.gppConsentHandler.getGppDataForEcst();
      ecstParametersData.gpp = gpp;
      ecstParametersData.gpp_sid = sectionId;
    } else if (window.__uspapi) {
      window.__uspapi('getUSPData', null, res => {
        ecstParametersData.uspString = res.uspString;
      });
      ecstParametersData.ct = _enums.CMP_TYPES.CCPA;
    } else if (window.__tcfapi) {
      ecstParametersData.ct = _enums.CMP_TYPES.GDPR;
    }
    return ecstParametersData;
  };
  checkConsentForEcst = ecstParametersData => {
    if (_liverampCmpUtils.locationHandler.isLocationUs(this.geoLocation.country) && (window.__gpp || window.__uspapi)) {
      return ecstParametersData.uspString && (ecstParametersData.uspString[2] !== 'Y' || ecstParametersData.uspString === null) || this.gppConsentHandler && this.gppConsentHandler.checkGppSectionConsent().consent;
    }
    return !(!!window.navigator.globalPrivacyControl || _liverampCmpUtils.cmpUtils.isDoNotTrackEnabled());
  };
  sendDataToEcstModule = async (pData, ecstParametersData, callback) => {
    pData = pData || null;
    ecstParametersData = ecstParametersData || {};
    this.setEcstParameterData(ecstParametersData);
    const consentForEcst = this.checkConsentForEcst(ecstParametersData);
    if (!consentForEcst) {
      callback('Not able to send data to eCST. No consent exists.');
    } else {
      const ecstResponse = await (0, _ecst.sendDataToEcst)(ecstParametersData, pData);
      callback(ecstResponse);
    }
  };
  handleEcstCall = (pData, callback) => {
    if (_ecst.ecstModule.loaded) {
      this.sendDataToEcstModule(pData, null, callback, true);
    } else {
      window.addEventListener('ecstModuleReady', () => {
        this.sendDataToEcstModule(pData, null, callback);
      });
      (0, _ecst.listenForEcstModuleReady)(this.geoLocation, _log.default, _utils.dispatchModuleReadyEvent, this.ecst);
    }
  };
}
exports["default"] = AtsHandler;

/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _liverampCmpUtils = __webpack_require__(703);
var _enums = __webpack_require__(373);
var _log = _interopRequireDefault(__webpack_require__(618));
var _purposeList = _interopRequireDefault(__webpack_require__(580));
var _storage = __webpack_require__(671);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
class CmpHandler {
  constructor(geoLocation, cmpRules, notify) {
    this.cmp = this.loadCmp(geoLocation, cmpRules, notify);
  }
  loadCmp = (geoLocation, cmpRules, notify) => {
    const cmp = this.findCmpBasedOnGeo(geoLocation, cmpRules);
    if (!cmp) {
      _log.default.debug('Cmp that meets all conditions not found.');
      notify('noCmpApplies');
      return null;
    }
    const appId = this.findAppIdFromCmp(cmp);
    if (!appId) {
      _log.default.debug('No app found inside a cmp.');
      notify('noCmpApplies');
      return null;
    }
    const wrapperSrc = this.getWrapperSrc(appId, cmp.type);
    const trigger = cmp.triggers.find(cmpTrigger => cmpTrigger.type === _enums.TRIGGER_TYPES.GEO);
    this.addConfigWrapper(wrapperSrc, trigger.condition, notify);
    this.preloadCmpBundle(cmp.type);
    return cmp;
  };
  getWrapperSrc = (appId, cmpType) => {
    let wrapperSrc = '';
    if (cmpType === _enums.CMP_TYPES.GDPR) {
      wrapperSrc = `${_liverampCmpUtils.config.gdprConfigUrl}/${appId}/gdpr-liveramp.js`;
    } else if (cmpType === _enums.CMP_TYPES.CCPA) {
      wrapperSrc = `${_liverampCmpUtils.config.ccpaConfigUrl}/${appId}/ccpa-liveramp.js`;
    } else if (cmpType === _enums.CMP_TYPES.GLOBAL_CMP) {
      wrapperSrc = `${_liverampCmpUtils.config.globalCmpConfigUrl}/${appId}/cmp-liveramp.js`;
    } else if (cmpType === _enums.CMP_TYPES.GPP) {
      wrapperSrc = `${_liverampCmpUtils.config.gppConfigUrl}/${appId}/gpp-liveramp.js`;
    }
    return wrapperSrc;
  };
  addConfigWrapper = (wrapperSrc, geoTargeting, notify) => {
    _log.default.debug('Adding wrapper with source: ', wrapperSrc);
    const wrapperScript = document.createElement('script');
    wrapperScript.setAttribute('src', wrapperSrc);
    wrapperScript.setAttribute('id', 'liveramp-cmp-wrapper');
    wrapperScript.dataset.geoTargeting = JSON.stringify(geoTargeting);
    wrapperScript.dataset.auditId = (0, _storage.readAuditId)();
    document.head.appendChild(wrapperScript);
    wrapperScript.onload = () => {
      this.activeCmp = this.cmp;
      this.cmpLoaded = true;
      _log.default.debug('CMP wrapper loaded');
      notify('cmpWrapperLoaded');
    };
    wrapperScript.onerror = () => {
      _log.default.error('Unable to load CMP wrapper: ', wrapperSrc);
      notify('cmpWrapperNotLoaded');
      this.cmpLoaded = true;
    };
  };
  preloadCmpBundle = cmpType => {
    if (_liverampCmpUtils.config.preload) {
      const cmpBundleUrl = this.getCmpBundleUrl(cmpType);
      if (cmpBundleUrl) {
        _log.default.debug(`Preload ${cmpType} bundle`);
        const cmpBundle = document.createElement('link');
        cmpBundle.href = cmpBundleUrl;
        cmpBundle.rel = 'preload';
        cmpBundle.as = 'script';
        document.head.appendChild(cmpBundle);
      }
    } else {
      _log.default.debug(`Preload disabled`);
    }
  };
  getCmpBundleUrl = cmpType => {
    if (cmpType === _enums.CMP_TYPES.GDPR) {
      return _liverampCmpUtils.config.gdprBundleUrl;
    }
    if (cmpType === _enums.CMP_TYPES.CCPA) {
      return _liverampCmpUtils.config.ccpaBundleUrl;
    }
    if (cmpType === _enums.CMP_TYPES.GLOBAL_CMP) {
      return _liverampCmpUtils.config.globalCmpBundleUrl;
    }
    if (cmpType === _enums.CMP_TYPES.GPP) {
      return _liverampCmpUtils.config.gppBundleUrl;
    }
    return null;
  };
  findAppIdFromCmp = cmp => {
    if (!cmp.apps || cmp.apps.length <= 0) {
      return null;
    }
    if (cmp.apps.length === 1) {
      (0, _storage.writeVariantWeightAppId)(cmp.apps[0].id);
      return cmp.apps[0].id;
    }
    return this.findVariantWeightAppId(cmp.apps);
  };
  findVariantWeightAppId = apps => {
    const cookieAppId = (0, _storage.readVariantWeightAppId)();
    if (cookieAppId) {
      const isIncludedInCmpRules = apps.some(app => app.id === cookieAppId);
      if (isIncludedInCmpRules) {
        _log.default.debug('Using appId from variant weight cookie:', cookieAppId);
        return cookieAppId;
      }
    }
    return this.getAppIdByChance(apps);
  };
  getAppIdByChance = apps => {
    let total = 0;
    apps.forEach(app => {
      total += +app.weight;
    });
    let rand = Math.random() * total;
    for (const app of apps) {
      if (rand < +app.weight) {
        const appId = app.id;
        _log.default.debug('Got app from dice roll:', appId);
        (0, _storage.writeVariantWeightAppId)(appId);
        return appId;
      }
      rand -= +app.weight;
    }
    return null;
  };
  findCmpBasedOnGeo = (geoLocation, cmpRules) => {
    if (!cmpRules || cmpRules.length <= 0) {
      return null;
    }
    return cmpRules.find(configCmp => {
      const geoTrigger = configCmp.triggers.find(trigger => trigger.type === _enums.TRIGGER_TYPES.GEO);
      const isGeoTriggerFulfilled = _liverampCmpUtils.locationHandler.isLocationSupported(geoLocation, geoTrigger.condition);
      return isGeoTriggerFulfilled;
    });
  };
  getActiveCmpType = () => this.activeCmp ? this.activeCmp.type : null;
  getCmpApplies = callback => {
    this.executeCmpCommand(_enums.CMP_COMMANDS.APPLIES, null, callback);
  };
  getCmpVendorList = callback => {
    this.executeCmpCommand(_enums.CMP_COMMANDS.GET_VENDOR_LIST, null, callback);
  };
  getConsentString = () => new Promise(resolve => {
    this.getCmpConsent(result => resolve(result && result.tcString ? result.tcString : null));
  });
  getCmpConsent = callback => {
    const params = this.activeCmp && this.activeCmp.type === _enums.CMP_TYPES.CCPA ? {
      includeUspString: true
    } : null;
    this.executeCmpCommand(_enums.CMP_COMMANDS.GET_CONSENT, params, callback);
  };
  checkConsent = (params, callback) => {
    if (params) {
      if (this.activeCmp.type === _enums.CMP_TYPES.GLOBAL_CMP) {
        params.ignoreUnsupported = true;
        this.executeCmpCommand(_enums.CMP_COMMANDS.CHECK_CONSENT, params, callback);
      } else if (this.activeCmp.type === _enums.CMP_TYPES.GPP) {
        this.executeCmpCommand(_enums.CMP_COMMANDS.TRIGGER_ATS_CONSENT_CHECK, params, callback);
      } else {
        _purposeList.default.getPurposeList().then(purposeList => {
          params.data = params.data ? this.remapCheckConsentData(params.data, purposeList) : null;
          params.ignoreUnsupported = true;
          this.executeCmpCommand(_enums.CMP_COMMANDS.CHECK_CONSENT, params, callback);
        }).catch(error => {
          _log.default.error('Unable to check consent: ', error);
          callback(null, false);
        });
      }
    } else {
      this.executeCmpCommand(_enums.CMP_COMMANDS.CHECK_CONSENT, null, callback);
    }
  };
  getGppSection = () => {
    let section;
    this.executeCmpCommand(_enums.CMP_COMMANDS.GET_SECTION, 'usnat', res => {
      section = res;
    });
    return section;
  };
  accept = (params, callback) => {
    this.updateConsent(_enums.CMP_COMMANDS.ACCEPT, params, callback);
  };
  reject = (params, callback) => {
    this.updateConsent(_enums.CMP_COMMANDS.REJECT, params, callback);
  };
  setCmpAuditId = (auditId, callback) => {
    this.executeCmpCommand(_enums.CMP_COMMANDS.SET_AUDIT_ID, auditId, callback);
  };
  showConsentManager = (params, callback) => {
    this.executeCmpCommand(_enums.CMP_COMMANDS.SHOW_CONSENT_MANAGER, params, callback);
  };
  getConsentCriteria = (params, callback) => {
    this.executeCmpCommand(_enums.CMP_COMMANDS.GET_CONSENT_CRITERIA, params, callback);
  };
  executeCmpCommand = (command, params, callback) => {
    if (this.activeCmp) {
      this.handleCmpCommandCall(this.activeCmp.type, command, params, callback);
    } else {
      callback(null, true);
    }
  };
  handleCmpCommandCall = (cmpType, command, params, callback) => {
    if (cmpType === _enums.CMP_TYPES.GDPR) {
      window[_enums.CMP_APIS.GDPR](_enums.GDPR_COMMANDS[command], null, callback, params);
    } else if (cmpType === _enums.CMP_TYPES.CCPA) {
      window[_enums.CMP_APIS.CCPA](_enums.CCPA_COMMANDS[command], params, null, callback);
    } else if (cmpType === _enums.CMP_TYPES.GLOBAL_CMP) {
      if (command === _enums.CMP_COMMANDS.SHOW_CONSENT_MANAGER) {
        params = {
          showManager: true,
          toggle: true
        };
      }
      window[_enums.CMP_APIS.GLOBAL_CMP](_enums.GLOBAL_CMP_COMMANDS[command], null, callback, params);
    } else if (cmpType === _enums.CMP_TYPES.GPP) {
      window[_enums.CMP_APIS.GPP](_enums.GPP_COMMANDS[command], callback, params);
    } else {
      callback(null, false);
    }
  };
  isObject = obj => {
    const type = typeof obj;
    return (type === 'function' || type === 'object' && !!obj) && obj.constructor !== Array;
  };
  remapCheckConsentData = (data, purposeList) => {
    const cmpType = this.activeCmp.type;
    if (this.isObject(data)) {
      return this.remapCheckConsentItem(data, purposeList, cmpType);
    }
    if (data.length) {
      const vendors = [];
      data.forEach(item => {
        const vendor = this.remapCheckConsentItem(item, purposeList, cmpType);
        vendors.push(vendor);
      });
      return vendors;
    }
    return null;
  };
  remapCheckConsentItem = (data, purposeList, cmpType) => {
    if (purposeList.purposes && data.purposeIds && data.purposeIds.length > 0) {
      const purposeIds = [];
      const specialFeatureIds = [];
      data.purposeIds.forEach(purposeId => {
        const purpose = purposeList.purposes[purposeId];
        purposeIds.push(...purpose[cmpType].purposes);
        if (cmpType === _enums.CMP_TYPES.GDPR) {
          specialFeatureIds.push(...purpose[cmpType].specialFeatures);
        }
      });
      const vendor = {
        vendorId: data.vendorId,
        isPublisher: data.isPublisher
      };
      if (purposeIds.length > 0) {
        vendor.purposeIds = purposeIds.filter((item, index) => item && purposeIds.indexOf(item) === index);
      }
      if (specialFeatureIds.length > 0) {
        vendor.specialFeatureIds = specialFeatureIds.filter((item, index) => item && specialFeatureIds.indexOf(item) === index);
      }
      return vendor;
    }
    return data;
  };
  updateConsent = (command, params, callback) => {
    if (params && this.isObject(params)) {
      _purposeList.default.getPurposeList().then(purposeList => {
        params = this.remapUpdateConsent(params, purposeList, command === _enums.CMP_COMMANDS.ACCEPT);
        this.executeCmpCommand(command, params, callback);
      }).catch(() => {
        callback(null, false);
      });
    } else if (params && Array.isArray(params)) {
      this.executeCmpCommand(command, params, callback);
    } else {
      this.executeCmpCommand(command, null, callback);
    }
  };
  remapUpdateConsent = (data, purposeList, isAllowed) => {
    const {
      purposeIds,
      vendorIds,
      consentOnDemand = false,
      publisher = {}
    } = data || {};
    let purposes = [];
    const specialFeatures = [];
    if (purposeList.purposes && purposeIds && purposeIds.length > 0) {
      purposeIds.forEach(purposeId => {
        const purpose = purposeList.purposes[purposeId];
        purposes.push(...purpose[this.activeCmp.type].purposes);
        if (this.activeCmp.type === _enums.CMP_TYPES.GDPR) {
          specialFeatures.push(...purpose[this.activeCmp.type].specialFeatures);
        }
      });
      purposes = purposes.filter((item, index) => item && purposes.indexOf(item) === index);
    }
    if (this.activeCmp.type === _enums.CMP_TYPES.GDPR) {
      const gdprData = {
        consentOnDemand,
        vendorIds,
        legIntVendorIds: vendorIds
      };
      if (purposes.length > 0) {
        gdprData.purposeIds = purposes;
        gdprData.legIntPurposeIds = purposes;
      }
      if (specialFeatures.length > 0) {
        gdprData.specialFeatureIds = specialFeatures.filter((item, index) => item && specialFeatures.indexOf(item) === index);
      }
      if (publisher && publisher.purposeIds && publisher.purposeIds.length > 0) {
        const publisherPurposes = [];
        publisher.purposeIds.forEach(purposeId => {
          const purpose = purposeList.purposes[purposeId];
          publisherPurposes.push(...purpose[_enums.CMP_TYPES.GDPR].purposes);
        });
        gdprData.publisher = {};
        if (publisherPurposes.length > 0) {
          gdprData.publisher.purposeIds = publisherPurposes.filter((item, index) => item && publisherPurposes.indexOf(item) === index);
        }
      }
      return gdprData;
    }
    if (this.activeCmp.type === _enums.CMP_TYPES.GLOBAL_CMP) {
      const globalCmpData = {};
      if (vendorIds && vendorIds.length > 0) {
        globalCmpData.vendors = {};
        vendorIds.forEach(id => {
          globalCmpData.vendors[id] = {
            consent: isAllowed,
            legitimateInterest: isAllowed,
            purposes,
            legIntPurposes: purposes
          };
        });
      }
      if (publisher) {
        let publisherPurposes = [];
        if (publisher.purposeIds && publisher.purposeIds.length > 0) {
          publisher.purposeIds.forEach(purposeId => {
            const purpose = purposeList.purposes[purposeId];
            publisherPurposes.push(...purpose[_enums.CMP_TYPES.GLOBAL_CMP].purposes);
          });
          publisherPurposes = publisherPurposes.filter((item, index) => item && publisherPurposes.indexOf(item) === index);
        }
        globalCmpData.publisher = {
          consent: isAllowed,
          legitimateInterest: isAllowed,
          purposes: publisherPurposes,
          legIntPurposes: publisherPurposes
        };
      }
    } else if (this.activeCmp.type === _enums.CMP_TYPES.CCPA) {
      const ccpaData = [];
      if (vendorIds && vendorIds.length > 0) {
        vendorIds.forEach(vendorId => {
          const vendor = {
            vendorId
          };
          if (purposes.length > 0) {
            vendor.purposeIds = purposes;
          }
          ccpaData.push(vendor);
        });
      }
      return ccpaData;
    }
    return null;
  };
}
exports["default"] = CmpHandler;

/***/ }),

/***/ 373:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TRIGGER_TYPES = exports.LOAD_EVENTS = exports.INTEGRATION_TYPES = exports.GPP_COMMANDS = exports.GLOBAL_CMP_COMMANDS = exports.GDPR_COMMANDS = exports.GA_EVENT_CATEGORY_PREFIX = exports.CONDITION_TYPES = exports.CMP_TYPES = exports.CMP_COMMANDS = exports.CMP_APIS = exports.CCPA_COMMANDS = void 0;
const TRIGGER_TYPES = exports.TRIGGER_TYPES = {
  GEO: 'geo'
};
const CMP_TYPES = exports.CMP_TYPES = {
  GDPR: 'gdpr',
  CCPA: 'ccpa',
  GLOBAL_CMP: 'global',
  GPP: 'gpp'
};
const CMP_APIS = exports.CMP_APIS = {
  GDPR: '__tcfapi',
  CCPA: '__ccpa',
  GLOBAL_CMP: '__lrcmp',
  GPP: '__gpp'
};
const CMP_COMMANDS = exports.CMP_COMMANDS = {
  APPLIES: 'APPLIES',
  GET_VENDOR_LIST: 'GET_VENDOR_LIST',
  GET_CONSENT: 'GET_CONSENT',
  CHECK_CONSENT: 'CHECK_CONSENT',
  SET_AUDIT_ID: 'SET_AUDIT_ID',
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT',
  SHOW_CONSENT_MANAGER: 'SHOW_CONSENT_MANAGER',
  GET_CONSENT_CRITERIA: 'GET_CONSENT_CRITERIA',
  GET_SECTION: 'GET_SECTION',
  TRIGGER_ATS_CONSENT_CHECK: 'TRIGGER_ATS_CONSENT_CHECK'
};
const GDPR_COMMANDS = exports.GDPR_COMMANDS = {
  APPLIES: 'gdprApplies',
  GET_VENDOR_LIST: 'getVendorList',
  GET_CONSENT: 'getFullTCData',
  CHECK_CONSENT: 'checkConsent',
  SET_AUDIT_ID: 'setAuditId',
  ACCEPT: 'accept',
  REJECT: 'reject',
  SHOW_CONSENT_MANAGER: 'showConsentManager',
  GET_CONSENT_CRITERIA: 'getConsentCriteria'
};
const CCPA_COMMANDS = exports.CCPA_COMMANDS = {
  APPLIES: 'ccpaApplies',
  GET_VENDOR_LIST: 'getVendorList',
  GET_CONSENT: 'getConsent',
  CHECK_CONSENT: 'checkConsent',
  SET_AUDIT_ID: 'setAuditId',
  ACCEPT: 'optIn',
  REJECT: 'optOut',
  SHOW_CONSENT_MANAGER: 'showConsentManager'
};
const GLOBAL_CMP_COMMANDS = exports.GLOBAL_CMP_COMMANDS = {
  APPLIES: 'cmpApplies',
  GET_VENDOR_LIST: 'getVendorList',
  GET_CONSENT: 'getConsentData',
  CHECK_CONSENT: 'checkConsent',
  SET_AUDIT_ID: 'setAuditId',
  ACCEPT: 'accept',
  REJECT: 'reject',
  SHOW_CONSENT_MANAGER: 'toggleConsentTool',
  GET_CONSENT_CRITERIA: 'getConsentCriteria'
};
const GPP_COMMANDS = exports.GPP_COMMANDS = {
  APPLIES: 'cmpApplies',
  GET_SECTION: 'getSection',
  GET_CONSENT: 'ping',
  SET_AUDIT_ID: 'setAuditId',
  ACCEPT: 'accept',
  REJECT: 'reject',
  SHOW_CONSENT_MANAGER: 'showConsentManager',
  TRIGGER_ATS_CONSENT_CHECK: 'triggerAtsConsentCheck'
};
const INTEGRATION_TYPES = exports.INTEGRATION_TYPES = {
  ATS: 'ATS',
  GOOGLE_ANALYTICS: 'GOOGLE_ANALYTICS'
};
const LOAD_EVENTS = exports.LOAD_EVENTS = {
  PAGE_VIEW: 'PAGE_VIEW',
  DOM_READY: 'DOM_READY',
  WINDOW_LOADED: 'WINDOW_LOADED'
};
const CONDITION_TYPES = exports.CONDITION_TYPES = {
  LOAD_EVENT: 'LOAD_EVENT',
  GEO_TARGETING: 'GEO_TARGETING',
  PAGE_VIEW: 'PAGE_VIEW'
};
const GA_EVENT_CATEGORY_PREFIX = exports.GA_EVENT_CATEGORY_PREFIX = 'lr';

/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const EVENTS_MAP = {
  isCmpLoaded: {
    gdpr: 'isLoaded',
    ccpa: 'isLoaded',
    global: 'isLoaded'
  },
  isCmpReady: {
    gdpr: 'cmpReady',
    ccpa: 'isReady',
    global: 'isReady'
  },
  commandQueued: {
    gdpr: 'commandQueued',
    ccpa: 'commandQueued',
    global: 'commandQueued'
  },
  dauLogSent: {
    gdpr: 'dauLogSent',
    ccpa: null,
    global: 'dauLogSent'
  },
  auditIdChanged: {
    gdpr: 'auditIdChanged',
    ccpa: null,
    global: 'auditIdChanged'
  },
  consentChanged: {
    gdpr: 'consentChanged',
    ccpa: 'consentChanged',
    global: 'consentChanged'
  },
  disabledCookies: {
    gdpr: 'disabledCookies',
    ccpa: 'disabledCookies',
    global: 'disabledCookies'
  },
  saveAndExit: {
    gdpr: 'saveAndExitButtonClicked',
    ccpa: 'saveAndExitButtonClicked',
    global: 'saveAndExitButtonClicked'
  },
  consentToolShouldBeShown: {
    gdpr: 'consentToolShouldBeShown',
    ccpa: 'consentToolShouldBeShown',
    global: 'consentToolShouldBeShown'
  },
  acceptAllButtonClicked: {
    gdpr: 'acceptAllButtonClicked',
    ccpa: null,
    global: 'acceptAllButtonClicked'
  },
  rejectAllButtonClicked: {
    gdpr: 'denyAllButtonClicked',
    ccpa: 'doNotSellMyDataButtonClicked',
    global: 'rejectAllButtonClicked'
  },
  noticeAlreadyShown: {
    gdpr: 'consentNoticeAlreadyShown',
    ccpa: 'consentNoticeAlreadyShown',
    global: 'consentNoticeAlreadyShown'
  },
  managerAlreadyShown: {
    gdpr: 'consentManagerAlreadyShown',
    ccpa: 'consentManagerAlreadyShown',
    global: 'consentManagerAlreadyShown'
  },
  exitButtonClicked: {
    gdpr: 'exitButtonClicked',
    ccpa: 'exitButtonClicked',
    global: 'exitButtonClicked'
  },
  toggleButtonClicked: {
    gdpr: 'toggleButtonClicked',
    ccpa: 'toggleButtonClicked',
    global: 'toggleButtonClicked'
  },
  vendorListChanged: {
    gdpr: null,
    ccpa: null,
    global: 'vendorListChanged'
  },
  managerDisplayed: {
    gdpr: 'consentManagerDisplayed',
    ccpa: 'consentManagerDisplayed',
    global: 'consentManagerDisplayed'
  },
  managerClosed: {
    gdpr: 'consentManagerClosed',
    ccpa: 'consentManagerClosed',
    global: 'consentManagerClosed'
  },
  noticeDisplayed: {
    gdpr: 'consentNoticeDisplayed',
    ccpa: 'consentNoticeDisplayed',
    global: 'consentNoticeDisplayed'
  },
  noticeClosed: {
    gdpr: 'consentNoticeClosed',
    ccpa: 'consentNoticeClosed',
    global: 'consentNoticeClosed'
  }
};
var _default = exports["default"] = EVENTS_MAP;

/***/ }),

/***/ 538:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = init;
var _liverampCmpUtils = __webpack_require__(703);
var _atsHandler = _interopRequireDefault(__webpack_require__(723));
var _cmpHandler = _interopRequireDefault(__webpack_require__(257));
var _integrationsHandler = _interopRequireDefault(__webpack_require__(338));
var _launchpad = _interopRequireWildcard(__webpack_require__(202));
var _log = _interopRequireDefault(__webpack_require__(618));
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n.default = e, t && t.set(e, n), n;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint-disable no-underscore-dangle */

const setLoggingFromQueryString = () => {
  const logging = _liverampCmpUtils.cmpUtils.getUrlParam('logging');
  if (logging === 'true' || logging === 'false') {
    _liverampCmpUtils.config.logging = logging === 'true';
  }
};
function init({
  configUpdates
}) {
  _liverampCmpUtils.config.update(configUpdates);
  setLoggingFromQueryString(_liverampCmpUtils.config);
  _log.default.debug('Using configuration: ', JSON.stringify(_liverampCmpUtils.config));
  const startTime = Date.now();

  // Pull queued command from __launchpad stub
  const {
    commandQueue = [],
    VERSION
  } = window[_launchpad.GLOBAL_NAME] || {};
  if (VERSION) {
    _log.default.error('LaunchPad already loaded');
    return;
  }

  // Update launchPadVersion
  const launchPadVersion = parseInt(_liverampCmpUtils.config.libraryVersion, 10);

  // Replace the __launchpad with our implementation
  const launchPad = new _launchpad.default(launchPadVersion);

  // Pass all queued commands to LaunchPad
  launchPad.commandQueue = commandQueue;

  // Expose `processCommand` as the LaunchPad implementation
  window[_launchpad.GLOBAL_NAME] = launchPad.processCommand;

  // Notify listeners that the LaunchPad is loaded
  const loadTime = Date.now();
  _log.default.debug(`Successfully loaded version: ${launchPadVersion} in ${loadTime - startTime}ms`);
  launchPad.isLoaded = true;
  launchPad.status = 'loaded';
  launchPad.notify('isLoaded');
  _liverampCmpUtils.locationHandler.getLocation().then(geoLocation => {
    _log.default.debug('Location: ', geoLocation);

    // Execute any previously queued command
    launchPad.processCommandQueue();
    launchPad.isReady = true;
    launchPad.notify('isReady');
    _log.default.debug(`Ready in: ${Date.now() - loadTime}ms`);
    if (!navigator.cookieEnabled) {
      launchPad.notify('disabledCookies');
    }
    // Load cmp
    launchPad.cmpHandler = new _cmpHandler.default(geoLocation, _liverampCmpUtils.config.cmpRules, launchPad.notify);
    launchPad.atsHandler = new _atsHandler.default(geoLocation, _liverampCmpUtils.config.atsRules, _liverampCmpUtils.config.triggers, launchPad.cmpHandler, launchPad.notify);
    launchPad.integrationsHandler = new _integrationsHandler.default(_liverampCmpUtils.config.triggers, launchPad.cmpHandler);
  }).catch(err => {
    _log.default.error('Failed to load: ', err);
    launchPad.status = 'error';
  });
  return launchPadVersion;
}

/***/ }),

/***/ 338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _enums = __webpack_require__(373);
var _eventsMapping = _interopRequireDefault(__webpack_require__(106));
var _log = _interopRequireDefault(__webpack_require__(618));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
class IntegrationsHandler {
  constructor(integrations, cmpHandler) {
    this.loadIntegrations(integrations, cmpHandler);
  }
  loadIntegrations = (integrations, cmpHandler) => {
    if (integrations && integrations.length > 0) {
      integrations.forEach(item => {
        if (item.integrationType === _enums.INTEGRATION_TYPES.GOOGLE_ANALYTICS) {
          this.intervalId = setInterval(this.loadGoogleAnalytics, 500, cmpHandler, item.conditions);
        }
      });
    } else {
      _log.default.debug('Config without Integrations.');
    }
  };
  loadGoogleAnalytics = (cmpHandler, conditions) => {
    if (conditions && conditions[0] && conditions[0].cmpEvents) {
      if (cmpHandler.cmpLoaded && cmpHandler.activeCmp) {
        conditions[0].cmpEvents.forEach(event => {
          this.addGAEventListener(cmpHandler.activeCmp.type, event);
        });
        clearInterval(this.intervalId);
      }
    } else {
      clearInterval(this.intervalId);
    }
  };
  addGAEventListener = (cmpType, event) => {
    const cmpApi = this.getCmpApiByCmpType(cmpType);
    const cmpEvent = this.getCmpEventByCmpType(cmpType, event);
    if (cmpApi && cmpEvent) {
      window[cmpApi]('addEventListener', null, () => {
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', cmpEvent, {
            event_category: `${_enums.GA_EVENT_CATEGORY_PREFIX}-${cmpType}`,
            event_label: cmpEvent,
            value: cmpEvent
          });
        }
      }, cmpEvent);
    } else {
      _log.default.debug('Invalid cmp type.');
    }
  };
  getCmpEventByCmpType = (cmpType, event) => {
    if (_eventsMapping.default[event]) {
      return _eventsMapping.default[event][cmpType];
    }
  };
  getCmpApiByCmpType = cmpType => {
    if (cmpType === _enums.CMP_TYPES.GDPR) {
      return _enums.CMP_APIS.GDPR;
    }
    if (cmpType === _enums.CMP_TYPES.CCPA) {
      return _enums.CMP_APIS.CCPA;
    }
    if (cmpType === _enums.CMP_TYPES.GLOBAL_CMP) {
      return _enums.CMP_APIS.GLOBAL_CMP;
    }
  };
}
exports["default"] = IntegrationsHandler;

/***/ }),

/***/ 202:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.VERSION = exports.LOCATOR_NAME = exports.GLOBAL_NAME = exports.CALL_NAME = void 0;
var _liverampCmpUtils = __webpack_require__(703);
var _log = _interopRequireDefault(__webpack_require__(618));
var _storage = __webpack_require__(671);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const GLOBAL_NAME = exports.GLOBAL_NAME = '__launchpad';
const CALL_NAME = exports.CALL_NAME = `${GLOBAL_NAME}Call`;
const LOCATOR_NAME = exports.LOCATOR_NAME = `${GLOBAL_NAME}Locator`;
let VERSION = exports.VERSION = parseInt(_liverampCmpUtils.config.libraryVersion, 10) || 1;
const RETURN_NAME = `${GLOBAL_NAME}Return`;
class LaunchPad {
  constructor(version) {
    this.isLoaded = false;
    this.isReady = false;
    this.isCmpLoaded = false;
    this.isAtsLoaded = false;
    this.status = 'stub';
    this.eventListeners = {};
    this.processCommand.receiveMessage = this.receiveMessage;
    if (version) {
      exports.VERSION = VERSION = version;
    }
    this.processCommand.VERSION = VERSION;
    this.commandQueue = [];
  }
  commands = {
    ping: (version, callback) => {
      callback = callback || (() => {});
      if (version && version !== 1 || !this.cmpHandler) {
        callback(null, false);
        return;
      }
      this.cmpHandler.getCmpApplies((data, success) => {
        const result = {
          loaded: this.isLoaded,
          // true if LaunchPad main script is loaded, false if still running stub
          status: this.status,
          // stub | loaded | error
          apiVersion: '1.0',
          // version of the LaunchPad API that is supported, e.g. "1.0"
          libraryVersion: VERSION,
          // LaunchPads own/internal version that is currently running
          cmpType: this.cmpHandler.getActiveCmpType(),
          // GDPR | CCPA | GPP
          cmpApplies: data // true if active CMP applies to visitor
        };

        callback(result, success);
      });
    },
    getVendorList: (version, callback) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      this.cmpHandler.getCmpVendorList(callback);
    },
    getConsentData: (version, callback) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      this.cmpHandler.getCmpConsent(callback);
    },
    checkConsent: (version, callback, params) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      this.cmpHandler.checkConsent(params, callback);
    },
    ecst: async (pData, callback) => {
      callback = callback || (() => {});
      this.atsHandler.handleEcstCall(pData, callback);
    },
    accept: (version, callback, params) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      this.cmpHandler.accept(params, callback);
    },
    reject: (version, callback, params) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      this.cmpHandler.reject(params, callback);
    },
    getAuditId: (version, callback) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      const auditId = (0, _storage.readAuditId)();
      callback(auditId, true);
    },
    resetAuditId: (version, callback) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      const auditId = (0, _storage.writeAuditId)();
      this.cmpHandler.setCmpAuditId(auditId, callback);
    },
    showConsentManager: (version, callback, params) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      this.cmpHandler.showConsentManager(params, callback);
    },
    getConsentCriteria: (version, callback, params) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      this.cmpHandler.getConsentCriteria(params, callback);
    },
    /**
     * Add a callback to be fired on a specific event.
     * @param {string} event Name of the event
     */
    addEventListener: (version, callback, event) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      if (!event) {
        callback({
          error: 'Event not provided'
        }, false);
        return;
      }
      const eventSet = this.eventListeners[event] || new Set();
      eventSet.add(callback);
      this.eventListeners[event] = eventSet;

      // Trigger load events immediately if they have already occurred
      if (event === 'isLoaded' && this.isLoaded) {
        callback({
          event
        }, true);
      }
    },
    /**
     * Remove a callback for an event.
     * @param {string} event Name of the event to remove callback from
     */
    removeEventListener: (version, callback, event) => {
      callback = callback || (() => {});
      if (version && version !== 1) {
        callback(null, false);
        return;
      }
      let eventListenerRemoved = false;

      // If an event is supplied remove the specific listener
      if (event) {
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(event)) {
          const eventSet = this.eventListeners[event] || new Set();
          eventSet.clear();
          this.eventListeners[event] = eventSet;
          eventListenerRemoved = true;
        }
      }
      // If no event is supplied clear ALL listeners
      else {
        this.eventListeners = {};
        eventListenerRemoved = true;
      }
      callback(eventListenerRemoved);
    }
  };
  processCommandQueue = () => {
    const queue = [...this.commandQueue];
    if (queue.length) {
      _log.default.info(`Process ${queue.length} queued commands`);
      this.commandQueue = [];
      queue.forEach(data => {
        if (Array.isArray(data)) {
          const [command, version, callback, parameter] = data;
          this.processCommand(command, version, callback, parameter);
        } else {
          const {
            callId,
            command,
            parameter,
            version,
            callback,
            event
          } = data;

          // If command is queued with an event we will relay its result via postMessage
          if (event) {
            this.processCommand(command, version, (returnValue, success) => {
              const message = {
                [RETURN_NAME]: {
                  callId,
                  command,
                  returnValue,
                  success
                }
              };
              event.source.postMessage(message, event.origin);
            }, parameter);
          } else {
            this.processCommand(command, version, callback, parameter);
          }
        }
      });
    }
  };

  /**
   * Handle a message event sent via postMessage
   */
  receiveMessage = ({
    data,
    origin,
    source
  }) => {
    if (data) {
      const {
        [CALL_NAME]: launchPad
      } = data;
      if (launchPad) {
        const {
          callId,
          command,
          parameter,
          version
        } = launchPad;
        this.processCommand(command, version, (returnValue, success) => {
          const message = {
            [RETURN_NAME]: {
              callId,
              command,
              returnValue,
              success
            }
          };
          source.postMessage(message, origin);
        }, parameter);
      }
    }
  };

  /**
   * Call one of the available commands.
   * @param {string} command Name of the command
   * @param {*} parameter Expected parameter for command
   * @param {*} version Expected launchPad version
   */
  processCommand = (command, version, callback, parameter) => {
    if (typeof this.commands[command] !== 'function') {
      _log.default.error(`Invalid Command "${command}"`);
    }
    // Special case where we have the full launchPad implementation loaded but
    // we still queue these commands until launchPad is ready and CMP is loaded
    else if (command !== 'ecst' && command !== 'ping' && command !== 'addEventListener' && (!this.isReady || !this.isCmpLoaded)) {
      this.pushToCommandQueue(command, version, callback, parameter, 'launchpad');
    } else if (command === 'ecst' && !this.isAtsLoaded) {
      this.pushToCommandQueue(command, version, callback, parameter, 'ATS');
    } else {
      _log.default.info(`Process command: ${command}, parameter: ${parameter}, version: ${version}`);
      this.commands[command](version, callback, parameter);
    }
  };
  pushToCommandQueue = (command, version, callback, parameter, requirement) => {
    _log.default.info(`Queuing command: ${command} until ${requirement} is ready`);
    this.commandQueue.push({
      command,
      version,
      callback,
      parameter
    });
    this.notify('commandQueued', {
      command
    });
  };

  /**
   * Trigger all event listener callbacks to be called.
   * @param {string} event Name of the event being triggered
   * @param {*} data Data that will be passed to each callback
   */
  notify = (event, data) => {
    _log.default.info(`Notify event: ${event}`);
    const eventSet = this.eventListeners[event] || new Set();
    eventSet.forEach(callback => {
      callback({
        event,
        data
      }, true);
    });

    // Process any queued commands that were waiting for CMP to be loaded
    if (event === 'cmpWrapperLoaded') {
      this.isCmpLoaded = true;
      this.processCommandQueue();
    }
    if (event === 'atsWrapperLoaded') {
      this.isAtsLoaded = true;
      this.processCommandQueue();
    }
  };
}
exports["default"] = LaunchPad;

/***/ }),

/***/ 618:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _liverampCmpUtils = __webpack_require__(703);
/* eslint-disable no-console */

const logLevels = ['debug', 'info', 'warn', 'error'];
var _default = exports["default"] = logLevels.reduce((logger, funcName, index) => {
  logger[funcName] = (...args) => {
    const consoleFunc = funcName === 'debug' ? 'log' : funcName;
    const {
      logging
    } = _liverampCmpUtils.config;
    if (Function.prototype.bind && window.console && typeof console.log === 'object') {
      ['log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd'].forEach(method => {
        console[method] = (void 0).bind(console[method], console);
      }, Function.prototype.call);
    }
    if (logging && console && typeof console[consoleFunc] === 'function') {
      const enabledLevelIndex = logLevels.indexOf(logging.toString().toLocaleLowerCase());
      if (logging === true || enabledLevelIndex > -1 && index >= enabledLevelIndex) {
        const [message, ...rest] = [...args];
        console[consoleFunc](`${funcName.toUpperCase()} - (LaunchPad) ${message}`, ...rest);
      }
    }
  };
  return logger;
}, {});

/***/ }),

/***/ 580:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _liverampCmpUtils = __webpack_require__(703);
var _log = _interopRequireDefault(__webpack_require__(618));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const purposeListName = 'cmpPurposeList';
class PurposeList {
  constructor() {
    this.purposeList = null;
  }
  getPurposeList = () => {
    if (!this.purposeList) {
      return this.retrieveCachedData(purposeListName, this.fetchPurposeList).then(purposeList => {
        this.purposeList = purposeList;
        return this.purposeList;
      }).catch(err => {
        _log.default.error('Failed to retrieve purpose list', err);
        return this.purposeList;
      });
    }
    return Promise.resolve(this.purposeList);
  };
  fetchPurposeList = () => {
    const purposeListUrl = _liverampCmpUtils.config.purposeListLocation;
    return fetch(purposeListUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(purposeList => purposeList.json()).then(purposeList => {
      this.cacheData(purposeListName, purposeList);
      return purposeList;
    }).catch(err => {
      _log.default.error(`Failed to load purpose list from ${purposeListUrl}`, err);
    });
  };
  retrieveCachedData = (objectName, fallback) => {
    try {
      if (localStorage) {
        const object = JSON.parse(localStorage.getItem(objectName));
        if (object && object.data && object.expire > +new Date()) {
          return Promise.resolve(object.data);
        }
      }
      return fallback();
    } catch (error) {
      _log.default.error(`Unable to parse ${objectName} from localStorage`, error);
      return fallback();
    }
  };
  cacheData = (objectName, data) => {
    try {
      if (localStorage && data && data.purposes) {
        const object = {
          data,
          expire: +this.generateExpirationDate()
        };
        localStorage.setItem(objectName, JSON.stringify(object));
      }
    } catch (error) {
      _log.default.error(`Unable cache ${objectName} to localStorage`, error);
    }
  };
  generateExpirationDate = () => {
    const date = new Date();
    if (date.getDay() === 4 && date.getHours() > 18) {
      date.setDate(date.getDate() + 7);
    } else {
      date.setDate(date.getDate() + ((7 - date.getDay()) % 7 + 4) % 7);
    }
    date.setHours(18);
    date.setMinutes(0);
    return date;
  };
}
var _default = exports["default"] = new PurposeList();

/***/ }),

/***/ 671:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.readAuditId = readAuditId;
exports.readFromLocalStorage = readFromLocalStorage;
exports.readVariantWeightAppId = readVariantWeightAppId;
exports.writeAuditId = writeAuditId;
exports.writeCookie = writeCookie;
exports.writeVariantWeightAppId = writeVariantWeightAppId;
var _uuid = __webpack_require__(851);
var _log = _interopRequireDefault(__webpack_require__(618));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const MAX_AGE = 33696000;
const VARIANT_WEIGHT_APPID = 'variant-weight-appId';
const AUDIT_ID_NAME = 'auditId';
function readCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length >= 2) {
    return parts.pop().split(';').shift();
  }
  return null;
}
function writeCookie(name, value, maxAgeSeconds, path = '/') {
  const maxAge = maxAgeSeconds === null ? '' : `;max-age=${maxAgeSeconds}`;
  const expires = maxAgeSeconds === null ? '' : `;expires=${new Date(new Date() * 1 + maxAgeSeconds * 1000).toUTCString()}`;
  path = `;path=${path}`;
  document.cookie = `${name}=${value}${path}${maxAge}${expires};SameSite=Lax`;
  return readCookie(name);
}
function readFromLocalStorage(name) {
  try {
    if (localStorage) {
      const object = JSON.parse(localStorage.getItem(name));
      if (object && object.data) {
        if (!object.expire || object.expire > +new Date()) {
          return object.data;
        }
        const data = readCookie(name);
        if (data) {
          return data;
        }
        return object.data;
      }
    }
  } catch (error) {
    _log.default.error(`Unable to parse ${name} from localStorage: `, error);
  }
  return readCookie(name);
}
function writeToLocalStorage(name, value, maxAgeSeconds = MAX_AGE) {
  try {
    if (localStorage) {
      if (value) {
        const object = {
          data: value,
          expire: +new Date(new Date() * 1 + maxAgeSeconds * 1000)
        };
        localStorage.setItem(name, JSON.stringify(object));
      } else {
        localStorage.removeItem(name);
      }
      return value;
    }
  } catch (error) {
    _log.default.error(`Unable to store ${name} to localStorage: `, error);
  }
  return writeCookie(name, value, maxAgeSeconds);
}
function writeVariantWeightAppId(appId) {
  _log.default.debug('Writing variant weight appId:', appId);
  writeToLocalStorage(VARIANT_WEIGHT_APPID, appId);
}
function readVariantWeightAppId() {
  const appId = readFromLocalStorage(VARIANT_WEIGHT_APPID);
  _log.default.debug('Read variant weight appId:', appId);
  if (appId) {
    return appId;
  }
  return null;
}
function writeAuditId(auditId) {
  let id = auditId || (0, _uuid.v4)();
  id = id.replace(/[^\w\s]/gi, '');
  return writeToLocalStorage(AUDIT_ID_NAME, id, MAX_AGE);
}
function readAuditId() {
  const auditId = readFromLocalStorage(AUDIT_ID_NAME);
  if (auditId) {
    return auditId;
  }
  return writeAuditId();
}

/***/ }),

/***/ 858:
/***/ (() => {

"use strict";


/* eslint-disable */
(function () {
  if (typeof window.__launchpad !== 'function') {
    var queue = [];
    var win = window;
    var doc = win.document;
    var launchPadStart = win.__launchpad ? win.__launchpad.start : function () {};
    function addFrame() {
      /**
       * check for launchPadLocator
       */
      var launchPadLocator = !!win.frames['__launchpadLocator'];
      if (!launchPadLocator) {
        /**
         * There can be only one
         */
        if (doc.body) {
          /**
           * check for body tag – otherwise we'll be
           * be having a hard time appending a child
           * to it if it doesn't exist
           */
          var iframe = doc.createElement('iframe');
          iframe.style.cssText = 'display:none';
          iframe.name = '__launchpadLocator';
          doc.body.appendChild(iframe);
        } else {
          /**
           * Wait for the body tag to exist.
           *
           * Since this API "stub" is located in the <head>,
           * setTimeout allows us to inject the iframe more
           * quickly than relying on DOMContentLoaded or
           * other events.
           */
          setTimeout(addFrame, 5);
        }
      }

      /**
       * if there was no launchPadLocator then we have succeeded
       */
      return !launchPadLocator;
    }
    function __launchpad(command, version, callback, parameter) {
      var args = [command, version, callback, parameter];
      if (!args.length) {
        /**
         * shortcut to get the queue when the full launchPad
         * implementation loads; it can call __launchpad()
         * with no arguments to get the queued arguments
         */
        return queue;
      } else if (args[0] === 'ping') {
        /**
         * Only supported method;
         * give PingReturn object as response
         */
        if (typeof args[2] === 'function') {
          args[2]({
            loaded: false,
            apiVersion: '1.0'
          }, true);
        }
      } else {
        /**
         * some other method
         * just queue it for the full launchPad implementation to deal with
         */
        queue.push(args);
      }
    }
    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};
      try {
        /**
         * Try to parse the data from the event. This is important
         * to have in a try/catch because often messages may come
         * through that are not JSON
         */
        json = msgIsString ? JSON.parse(event.data) : event.data;
      } catch (ignore) {}
      var payload = json.__launchpadCall;
      if (payload) {
        /**
         * the message we care about will have a payload
         */
        win.__launchpad(payload.command, payload.version, function (retValue, success) {
          if (event.source) {
            var returnMsg = {
              __launchpadReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId,
                command: payload.command
              }
            };
            if (msgIsString) {
              /**
               * If we were given a string, we'll respond in kind
               */
              returnMsg = JSON.stringify(returnMsg);
            }
            event.source.postMessage(returnMsg, '*');
          }
        }, payload.parameter);
      }
    }
    if (!win.__launchpad && addFrame()) {
      win.__launchpad = __launchpad;
      win.__launchpad.commandQueue = queue;
      win.__launchpad.start = launchPadStart;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  }
})();

/***/ }),

/***/ 709:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dispatchModuleReadyEvent = void 0;
const dispatchModuleReadyEvent = async eventName => {
  const event = new CustomEvent(eventName);
  window.dispatchEvent(event);
};
exports.dispatchModuleReadyEvent = dispatchModuleReadyEvent;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";


var _liverampCmpUtils = __webpack_require__(703);
var _init = _interopRequireDefault(__webpack_require__(538));
var _launchpad = __webpack_require__(202);
var _log = _interopRequireDefault(__webpack_require__(618));
__webpack_require__(858);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
function fetchConfigUpdates(path) {
  fetch(path, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(data => {
    (0, _init.default)({
      configUpdates: data.config
    });
  }).catch(err => {
    _log.default.error('Failed to load config: ', err);
    (0, _init.default)();
  });
}
function launchPadStart(configUpdates) {
  if (/MSIE/.test(navigator.userAgent)) {
    _log.default.info('Your browser is not supported by the LaunchPad. Please update to a more recent one.');
    return;
  }
  const defaultConfig = {"env":"production","configVersion":null,"logging":false,"cmpRules":[],"atsRules":[],"triggers":[],"preload":true,"libraryVersion":"1.6.3","geoTargetingUrl":"https://geo.privacymanager.io","ccpaConfigUrl":"https://ccpa-wrapper.privacymanager.io/ccpa","gdprConfigUrl":"https://gdpr-wrapper.privacymanager.io/gdpr","globalCmpConfigUrl":"https://cmp-wrapper.privacymanager.io","gppConfigUrl":"https://gpp-wrapper.privacymanager.io","purposeListLocation":"https://cmp-vendors.privacymanager.io/purpose-list.json","atsConfigUrl":"https://ats-wrapper.privacymanager.io","gdprBundleUrl":"https://gdpr.privacymanager.io/latest/gdpr.bundle.js","ccpaBundleUrl":"https://ccpa.privacymanager.io/latest/ccpa.bundle.js","globalCmpBundleUrl":"https://cmp.privacymanager.io/latest/cmp.bundle.js","gppBundleUrl":"https://gpp.privacymanager.io/latest/gpp.bundle.js"} || _liverampCmpUtils.config.generate();
  _liverampCmpUtils.config.update(defaultConfig, true);
  if (!configUpdates || configUpdates === Object(configUpdates)) {
    (0, _init.default)({
      configUpdates
    });
  } else {
    fetchConfigUpdates(configUpdates);
  }
}
const launchPad = window[_launchpad.GLOBAL_NAME] || {};
if (isObjectEmpty(launchPad)) {
  window[_launchpad.GLOBAL_NAME] = launchPad;
}
launchPad.start = launchPadStart;
})();

/******/ })()
;
//# sourceMappingURL=launchpad.bundle.js.map