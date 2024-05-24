/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@kr3m/kr3m/html/generator.ts":
/*!***************************************************!*\
  !*** ./node_modules/@kr3m/kr3m/html/generator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.render = exports.encodeHtml = exports.FILE_INTRO = void 0;
const string_1 = __webpack_require__(/*! ../util/string */ "./node_modules/@kr3m/kr3m/util/string.ts");
exports.FILE_INTRO = '<!DOCTYPE html>\n';
function encodeHtml(text) {
    if (text === null || text === undefined)
        return '';
    const html = String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    return html;
}
exports.encodeHtml = encodeHtml;
function renderStyle(style) {
    const encoded = {};
    for (const name in style) {
        const newName = (0, string_1.camelToKebab)(name);
        const value = String(style[name]);
        encoded[newName] = value;
    }
    return (0, string_1.joinAssoc)(encoded, '; ', ':');
}
function render(tag, attributes, ...contents) {
    const myToString = (value) => {
        if (Array.isArray(value))
            return value.map(v => String(v)).join(' ');
        else
            return String(value);
    };
    attributes = attributes || {};
    if (attributes.css) {
        attributes.style = renderStyle(attributes.css) + ' ' + (attributes.style || '');
        delete attributes.css;
    }
    let code = `<${tag} `;
    const attrText = (0, string_1.joinAssoc)(attributes, '" ', '="', myToString);
    if (attrText != '')
        code += attrText + '"';
    if (contents.length == 0)
        code += `/>\n`;
    else
        code += `>${contents.map(content => myToString(content)).join('')}</${tag}>\n`;
    return code;
}
exports.render = render;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/http/device.ts":
/*!************************************************!*\
  !*** ./node_modules/@kr3m/kr3m/http/device.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Device = void 0;
class Device {
    static buildDummyGlobals(userAgent) {
        const globals = {
            document: {
                documentElement: {},
                createElement:             },
            localStorage: {},
            navigator: {
                userAgent
            },
            window: {}
        };
        return globals;
    }
    constructor(globals) {
        const hasGlobals = !!globals;
        globals = globals || {};
        globals.document = globals.document || document;
        globals.navigator = globals.navigator || navigator;
        globals.window = globals.window || window;
        try {
            globals.localStorage = globals.localStorage || localStorage;
        }
        catch (e) {
        }
        this.checkOS(globals);
        this.checkBrowser(globals);
        this.checkDevice(globals);
        if (!hasGlobals) {
            this.checkFeatures(globals);
            this.checkAudio(globals);
        }
        this.checkTablet(globals);
        this.mobile = !this.desktop && !this.tablet;
    }
    static getInstance() {
        const self = Device;
        if (typeof self.instance == "undefined")
            self.instance = new Device();
        return self.instance;
    }
    canPlayAudio(type) {
        switch (type) {
            case "ogg":
                return this.ogg;
            case "opus":
                return this.opus;
            case "mp3":
                return this.mp3;
            case "wav":
                return this.wav;
            case "m4a":
                return this.m4a;
            case "webm":
                return this.webm;
        }
        return false;
    }
    checkOS(globals) {
        const ua = globals.navigator.userAgent;
        this.userAgent = ua;
        if (/Playstation Vita/.test(ua)) {
            this.vita = true;
            this.desktop = false;
        }
        else if (/Kindle/.test(ua) || /\bKF[A-Z][A-Z]+/.test(ua) || /Silk.*Mobile Safari/.test(ua)) {
            this.kindle = true;
            this.desktop = false;
        }
        else if (/Android/.test(ua)) {
            this.android = true;
            this.desktop = false;
            this.checkAndroidVersion(globals);
        }
        else if (/CrOS/.test(ua)) {
            this.chromeOS = true;
        }
        else if (/iP[ao]d|iPhone/i.test(ua)) {
            this.iOS = true;
            this.desktop = false;
            const osVersionMatch = ua.match(/OS (\d+)_/i);
            if (osVersionMatch)
                this.iOSVersion = parseInt(osVersionMatch[1], 10);
            if (/OS 11_/i.test(ua))
                this.iOS11 = true;
            else if (/OS 10_/i.test(ua))
                this.iOS10 = true;
            else if (/OS 9_/i.test(ua))
                this.iOS9 = true;
        }
        else if (/Linux/.test(ua)) {
            this.linux = true;
        }
        else if (/Mac OS/.test(ua)) {
            this.macOS = true;
        }
        else if (/Windows/.test(ua)) {
            this.windows = true;
            if (/Windows Phone/i.test(ua))
                this.windowsPhone = true;
        }
        if (this.windows || this.macOS || (this.linux && !this.silk) || this.chromeOS)
            this.desktop = true;
        if (this.windowsPhone || ((/Windows NT/i.test(ua)) && (/Touch/i.test(ua))))
            this.desktop = false;
    }
    checkFeatures(globals) {
        this.canvas = !!globals.window['CanvasRenderingContext2D'];
        try {
            this.localStorage = !!globals.localStorage.getItem;
        }
        catch (error) {
            this.localStorage = false;
        }
        this.file =
            !!globals.window['File'] &&
                !!globals.window['FileReader'] &&
                !!globals.window['FileList'] &&
                !!globals.window['Blob'];
        this.fileSystem = !!globals.window['requestFileSystem'];
        this.webGL = (function () {
            try {
                const canvas = globals.document.createElement('canvas');
                canvas["screencanvas"] = false;
                const options = { failIfMajorPerformanceCaveat: true };
                return (!!globals.window["WebGLRenderingContext"]) &&
                    (canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options));
            }
            catch (e) {
                return false;
            }
        })();
        this.webGL = !!this.webGL;
        if ('ontouchstart' in globals.document.documentElement ||
            (globals.navigator["maxTouchPoints"] && globals.navigator["maxTouchPoints"] > 1))
            this.touch = true;
        if (globals.navigator.msPointerEnabled || globals.navigator["pointerEnabled"])
            this.mspointer = true;
        this.pointerLock = 'pointerLockElement' in globals.document ||
            'mozPointerLockElement' in globals.document ||
            'webkitPointerLockElement' in globals.document;
        this.quirksMode = (globals.document.compatMode === 'CSS1Compat') ? false : true;
    }
    checkBrowser(globals) {
        const ua = globals.navigator.userAgent;
        if (/Instagram/.test(ua)) {
            this.inApp = true;
            this.instagramApp = true;
        }
        else if (/FBAV/.test(ua)) {
            this.inApp = true;
            this.fbApp = true;
        }
        else if (/\bapp\-(ios|android)\-(smartphone|tablet)\-\d+/.test(ua)) {
            this.inApp = true;
        }
        else if (/Arora/.test(ua)) {
            this.arora = true;
        }
        else if (/Edge\/\d+/.test(ua)) {
            this.edge = true;
        }
        else if (/Chrome/.test(ua)) {
            this.chrome = true;
            this.checkChromeVersion(ua);
        }
        else if (/CriOS/.test(ua)) {
            this.iOSChrome = true;
            this.checkChromeVersion(ua);
        }
        else if (/Epiphany/.test(ua)) {
            this.epiphany = true;
        }
        else if (/Firefox/.test(ua)) {
            this.firefox = true;
            this.checkFirefoxVersion(ua);
        }
        else if (/AppleWebKit/.test(ua) && this.iOS) {
            this.mobileSafari = true;
        }
        else if (/MSIE (\d+\.\d+);/.test(ua)) {
            this.ie = true;
            this.ieVersion = parseInt(RegExp.$1, 10);
        }
        else if (/Midori/.test(ua)) {
            this.midori = true;
        }
        else if (/Opera/.test(ua)) {
            this.opera = true;
        }
        else if (/Safari/.test(ua)) {
            this.safari = true;
        }
        else if (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(ua)) {
            this.ie = true;
            this.trident = true;
            this.tridentVersion = parseInt(RegExp.$1, 10);
            this.ieVersion = parseInt(RegExp.$3, 10);
        }
        this.silk = /Silk/.test(ua);
        if (globals.navigator['standalone'])
            this.webApp = true;
        const matches = globals.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
        this.androidStockBrowser = matches ? parseInt(matches[1], 10) < 537 : false;
    }
    checkDevice(globals) {
        this.pixelRatio = globals.window['devicePixelRatio'] || 1;
        this.iPhone = globals.navigator.userAgent.toLowerCase().indexOf('iphone') != -1;
        this.iPhone4 = (this.pixelRatio == 2 && this.iPhone);
        this.iPhone5 = (this.pixelRatio == 2 && this.iPhone && screen.availHeight == 548);
        this.iPad = globals.navigator.userAgent.toLowerCase().indexOf('ipad') != -1;
    }
    checkAudio(globals) {
        this.audioData = !!(globals.window['Audio']);
        this.webAudio = !!globals.window['AudioContext'];
        const audioElement = globals.document.createElement('audio');
        try {
            if (audioElement.canPlayType) {
                if (audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''))
                    this.ogg = true;
                if (audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') ||
                    audioElement.canPlayType('audio/opus;').replace(/^no$/, ''))
                    this.opus = true;
                if (audioElement.canPlayType('audio/mpeg;').replace(/^no$/, ''))
                    this.mp3 = true;
                if (audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''))
                    this.wav = true;
                if (audioElement.canPlayType('audio/x-m4a;') || audioElement.canPlayType('audio/aac;').replace(/^no$/, ''))
                    this.m4a = true;
                if (audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''))
                    this.webm = true;
            }
        }
        catch (e) {
        }
    }
    checkTablet(globals) {
        if (this.desktop) {
            this.tablet = false;
            return;
        }
        const ua = globals.navigator.userAgent;
        this.tablet = false;
        if (this.iOS && /ipad/i.test(ua))
            this.tablet = true;
        if (this.android && !/mobile/i.test(ua))
            this.tablet = true;
        if ((/blackberry/i.test(ua) || /bb10/i.test(ua) || /rim/i.test(ua)) && /tablet/i.test(ua))
            this.tablet = true;
        if (this.tablet)
            this.desktop = false;
    }
    checkAndroidVersion(globals) {
        const ua = globals.navigator.userAgent.toLowerCase();
        const match = ua.match(/android\s([0-9\.]*)/);
        if (match) {
            try {
                this.androidVersion = match[1];
            }
            catch (e) {
            }
        }
    }
    checkChromeVersion(ua) {
        const matches = ua.match(/Chrome\/(\d+)/i);
        if (matches)
            this.chromeVersion = parseInt(matches[1], 10);
    }
    checkFirefoxVersion(ua) {
        const matches = ua.match(/Firefox\/(\d+)/i);
        if (matches) {
            this.firefoxVersion = parseInt(matches[1], 10);
            this.firefoxQuantum = this.firefoxVersion > 57;
        }
    }
}
exports.Device = Device;
exports["default"] = getDevice;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/js/json.ts":
/*!********************************************!*\
  !*** ./node_modules/@kr3m/kr3m/js/json.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeJson = exports.isJson = exports.escapeSpecialChars = exports.encodeJsonNice = exports.encodeJson = exports.breakCircular = exports.settings = void 0;
const date_1 = __webpack_require__(/*! ../util/date */ "./node_modules/@kr3m/kr3m/util/date.ts");
const object_1 = __webpack_require__(/*! ../util/object */ "./node_modules/@kr3m/kr3m/util/object.ts");
exports.settings = {
    reviveDates: true,
    quiet: false
};
function breakCircular(obj) {
    if (!obj || typeof obj != 'object' || obj instanceof Date)
        return obj;
    const found = [];
    const broken = [];
    const workset1 = [obj];
    while (workset1.length > 0) {
        const current = workset1.shift();
        found.push(current);
        for (const key in current) {
            if (current[key] === undefined
                || current[key] === null
                || typeof current[key] != 'object'
                || current[key] instanceof Date)
                continue;
            if (found.indexOf(current[key]) >= 0)
                broken.push(current[key]);
            else
                workset1.push(current[key]);
        }
    }
    if (broken.length == 0)
        return obj;
    const clone = typeof obj['length'] == 'number' ? [] : {};
    const workset2 = [{ prefix: '', value: obj }];
    while (workset2.length > 0) {
        const current = workset2.shift();
        for (const key in current.value) {
            if (broken.indexOf(current.value[key]) >= 0) {
                (0, object_1.setProperty)(clone, current.prefix + key, '[CYCLICAL]');
                continue;
            }
            if (current.value[key] === undefined
                || current.value[key] === null
                || typeof current.value[key] != 'object'
                || current.value[key] instanceof Date) {
                (0, object_1.setProperty)(clone, current.prefix + key, current.value[key]);
            }
            else {
                workset2.push({ value: current.value[key], prefix: current.prefix + key + '.' });
            }
        }
    }
    return clone;
}
exports.breakCircular = breakCircular;
function encodeJson(value, doBreakCircular = false) {
    if (value === undefined)
        return 'undefined';
    if (doBreakCircular)
        value = breakCircular(value);
    return JSON.stringify(value);
}
exports.encodeJson = encodeJson;
function encodeJsonNice(value, options = {}) {
    const { padding = '', doBreakCircular = false, depth = 100, indentation = '\t' } = options;
    if (doBreakCircular)
        value = breakCircular(value);
    if (depth <= 0)
        return padding + encodeJson(value);
    if (typeof value == 'object' && value !== null && !(value instanceof Date)) {
        let json = '';
        if (typeof value.length == 'number') {
            if (value.length === 0)
                return padding + '[]';
            json += padding + '[';
            for (let i = 0; i < value.length; ++i) {
                json += '\n' + encodeJsonNice(value[i], {
                    ...options,
                    padding: padding + indentation,
                    depth: depth - 1
                }) + ',';
            }
            if (value.length > 0)
                json = json.slice(0, -1);
            json += '\n' + padding + ']';
        }
        else {
            if (Object.keys(value).length > 0) {
                json += padding + '{';
                for (const ind in value) {
                    if (typeof value[ind] == 'object'
                        && value[ind] !== null
                        && !(value[ind] instanceof Date)) {
                        json += '\n' + indentation + padding + '"' + ind + '":';
                        if (Object.keys(value[ind]).length > 0) {
                            json += '\n';
                            json += encodeJsonNice(value[ind], {
                                ...options,
                                padding: padding + indentation,
                                depth: depth - 1
                            }) + ',';
                        }
                        else {
                            json += encodeJsonNice(value[ind], {
                                ...options,
                                padding: ' ',
                                depth: depth - 1
                            }) + ',';
                        }
                    }
                    else {
                        json += '\n' + indentation + padding + '"' + ind + '":'
                            + encodeJson(value[ind]) + ',';
                    }
                }
                if (json.slice(-1) == ',')
                    json = json.slice(0, -1);
                json += '\n' + padding + '}';
            }
            else {
                json += padding + '{}';
            }
        }
        return json;
    }
    else {
        return padding + encodeJson(value);
    }
}
exports.encodeJsonNice = encodeJsonNice;
function escapeSpecialChars(json) {
    return json.replace(/[\u0080-\uffff]/g, ;
}
exports.escapeSpecialChars = escapeSpecialChars;
function reviver(key, computed) {
    if (exports.settings.reviveDates && typeof computed == 'string') {
        const date = (0, date_1.getDateFromString)(computed);
        if (date)
            return date;
    }
    return computed;
}
function isJson(text) {
    if (!text)
        return false;
    try {
        JSON.parse(text);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.isJson = isJson;
function decodeJson(json, options = {}) {
    if (!json || json == 'undefined')
        return undefined;
    try {
        return JSON.parse(json, reviver);
    }
    catch (error) {
        const { quiet = exports.settings.quiet } = options;
        if (quiet)
            return undefined;
        const positionMatch = error.message
            .match(/Unexpected token .+ at position (\d+)/i);
        if (positionMatch) {
            const pos = parseInt(positionMatch[1], 10);
            const start = Math.max(0, pos - 20);
            const end = Math.min(json.length, pos + 20);
            console.error(json.slice(start, end));
        }
        else {
            console.error(json);
        }
        console.error(error);
        return undefined;
    }
}
exports.decodeJson = decodeJson;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/models/dateonly.ts":
/*!****************************************************!*\
  !*** ./node_modules/@kr3m/kr3m/models/dateonly.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateOnly = exports.Period = void 0;
const date_1 = __webpack_require__(/*! ../util/date */ "./node_modules/@kr3m/kr3m/util/date.ts");
Object.defineProperty(exports, "Period", ({ enumerable: true, get: function () { return date_1.Period; } }));
class DateOnly {
    static today() {
        return new DateOnly(new Date());
    }
    static tomorrow() {
        const result = new DateOnly(new Date());
        result.addDays(1);
        return result;
    }
    static yesterday() {
        const result = new DateOnly(new Date());
        result.addDays(-1);
        return result;
    }
    constructor(firstParam, ...params) {
        this.year = 0;
        this.month = 0;
        this.day = 0;
        if (typeof firstParam == 'number') {
            this.year = firstParam;
            this.month = params[0] || this.month;
            this.day = params[1] || this.day;
        }
        else if (typeof firstParam == 'string') {
            const parts = firstParam.split('-').map(p => parseInt(p, 10));
            this.year = parts[0];
            this.month = parts[1];
            this.day = parts[2];
        }
        else if (firstParam instanceof Date) {
            this.setDate(firstParam);
        }
    }
    getWeekDay() {
        return (this.toDate().getDay() + 6) % 7;
    }
    getPeriodStart(period) {
        return new DateOnly((0, date_1.getStartOf)(period, this.toDate()));
    }
    getPeriodEnd(period) {
        return new DateOnly((0, date_1.getEndOf)(period, this.toDate()));
    }
        getPeriodKey(period) {
        switch (period) {
            case date_1.Period.Day:
                return this.toString();
            case date_1.Period.Week:
                return this.year + '/' + this.getWeek().toString().padStart(2, '0');
            case date_1.Period.Month:
                return this.toString().slice(0, 7);
            case date_1.Period.Year:
                return this.year.toString();
            case date_1.Period.Quarter:
                return this.year + '/' + Math.ceil(this.month / 3);
        }
    }
    clone() {
        return new DateOnly(this.year, this.month, this.day);
    }
    setDate(date) {
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.day = date.getDate();
        return this;
    }
    addYears(count) {
        this.year += Math.trunc(count);
        return this;
    }
    addMonths(count) {
        const date = this.toDate();
        date.setMonth(date.getMonth() + Math.trunc(count));
        this.setDate(date);
        return this;
    }
    addDays(count) {
        const date = this.toDate();
        date.setDate(date.getDate() + Math.trunc(count));
        this.setDate(date);
        return this;
    }
    setYear(year) {
        const date = this.toDate();
        date.setFullYear(year);
        this.setDate(date);
        return this;
    }
    getYear() {
        return this.year;
    }
    setMonth(month) {
        const date = this.toDate();
        date.setMonth(month - 1);
        this.setDate(date);
        return this;
    }
    getMonth() {
        return this.month;
    }
    setDay(day) {
        const date = this.toDate();
        date.setDate(day);
        this.setDate(date);
        return this;
    }
    getDay() {
        return this.day;
    }
    compare(other) {
        if (this.year != other.year)
            return this.year - other.year;
        if (this.month != other.month)
            return this.month - other.month;
        return this.day - other.day;
    }
    equals(other) {
        return this.compare(other) == 0;
    }
    toDate    toString() {
        return this.year.toString().padStart(4, '0') + '-'
            + this.month.toString().padStart(2, '0') + '-'
            + this.day.toString().padStart(2, '0');
    }
    toJSON() {
        return this.toString();
    }
}
exports.DateOnly = DateOnly;
DateOnly.validatePattern = /^\d{4}\-\d{2}\-\d{2}$/;
exports["default"] = DateOnly;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/models/eventdispatcher.ts":
/*!***********************************************************!*\
  !*** ./node_modules/@kr3m/kr3m/models/eventdispatcher.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const typings_1 = __webpack_require__(/*! ../util/typings */ "./node_modules/@kr3m/kr3m/util/typings.ts");
const array_1 = __webpack_require__(/*! ../util/array */ "./node_modules/@kr3m/kr3m/util/array.ts");
class EventDispatcher {
        hasListenersFor(eventName) {
        const name = String(eventName).toLowerCase();
        if (this.onListeners[name] && this.onListeners[name].length > 0)
            return true;
        if (this.onceListeners[name] && this.onceListeners[name].length > 0)
            return true;
        return false;
    }
    on(eventName, listener, context) {
        const name = String(eventName).toLowerCase();
        if (!this.onListeners[name])
            this.onListeners[name] = [];
        const meta = (0, array_1.getBy)(this.onListeners[name], 'context', context, 0, true);
        if (meta) {
            meta.listeners.push(listener);
            return;
        }
        this.onListeners[name].push({ context, listeners: [listener] });
    }
    onMulti    once(eventName, listener, context) {
        const name = String(eventName).toLowerCase();
        if (!this.onceListeners[name])
            this.onceListeners[name] = [];
        const meta = (0, array_1.getBy)(this.onceListeners[name], 'context', context, 0, true);
        if (meta) {
            meta.listeners.push(listener);
            return;
        }
        this.onceListeners[name].push({ context, listeners: [listener] });
    }
    off(...params) {
        const first = typings_1.firstOfType.bind(null, params);
        const eventName = first('string');
        const listener = first('function');
        const context = first('object');
        const name = String(eventName).toLowerCase();
        const listenerTypes = [this.onListeners, this.onceListeners];
        const eventNames = name
            ? [name]
            : (0, array_1.getUniques)(Object.keys(this.onListeners), Object.keys(this.onceListeners));
        for (let i = 0; i < listenerTypes.length; ++i) {
            for (let j = 0; j < eventNames.length; ++j) {
                const metas = listenerTypes[i][eventNames[j]];
                if (!metas)
                    continue;
                for (let k = 0; k < metas.length; ++k) {
                    if (context && context !== metas[k].context)
                        continue;
                    if (listener)
                        metas[k].listeners = metas[k].listeners.filter(;
                    else
                        metas[k].listeners = [];
                }
            }
        }
    }
    dispatch(eventName, data, context) {
        const name = String(eventName).toLowerCase();
        if (this.onListeners[name]) {
            for (let i = 0; i < this.onListeners[name].length; ++i) {
                for (let j = 0; j < this.onListeners[name][i].listeners.length; ++j) {
                    this.onListeners[name][i].listeners[j]
                        .call(context || this.onListeners[name][i].context || this, data);
                }
            }
        }
        if (this.onceListeners[name]) {
            for (let i = 0; i < this.onceListeners[name].length; ++i) {
                for (let j = 0; j < this.onceListeners[name][i].listeners.length; ++j) {
                    const callContext = context || this.onceListeners[name][i].context || this;
                    this.onceListeners[name][i].listeners[j].call(callContext, data);
                }
            }
            this.onceListeners[name] = [];
        }
    }
}
exports["default"] = EventDispatcher;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/models/timeonly.ts":
/*!****************************************************!*\
  !*** ./node_modules/@kr3m/kr3m/models/timeonly.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeOnly = void 0;
class TimeOnly {
        constructor(firstParam, ...params) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        if (typeof firstParam == 'number') {
            this.addHours(firstParam);
            this.addMinutes(params[0] || 0);
            this.addSeconds(params[1] || 0);
        }
        else if (typeof firstParam == 'string') {
            const parts = firstParam.split(':').map(;
            this.hours = parts[0] || 0;
            this.minutes = parts[1] || 0;
            this.seconds = parts[2] || 0;
        }
        else if (firstParam instanceof Date) {
            this.setDate(firstParam);
        }
    }
    getValue    setValue(value) {
        this.hours = Math.floor(value / 3600);
        this.minutes = Math.floor(value / 60) % 60;
        this.seconds = value % 60;
        return this;
    }
        addHours(count) {
        count = Math.trunc(count);
        this.hours = (this.hours + (count % 24 + 24)) % 24;
        return this;
    }
    addMinutes(count) {
        count = Math.trunc(count);
        const hourDelta = Math.floor((this.minutes + count) / 60);
        this.addHours(hourDelta);
        this.minutes = (this.minutes + (count % 60 + 60)) % 60;
        return this;
    }
    addSeconds(count) {
        count = Math.trunc(count);
        const minuteDelta = Math.floor((this.seconds + count) / 60);
        this.addMinutes(minuteDelta);
        this.seconds = (this.seconds + (count % 60 + 60)) % 60;
        return this;
    }
    setDate(date) {
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        return this;
    }
    getHours() {
        return this.hours;
    }
    getMinutes() {
        return this.minutes;
    }
        compare(other) {
        if (this.hours != other.hours)
            return this.hours - other.hours;
        if (this.minutes != other.minutes)
            return this.minutes - other.minutes;
        return this.seconds - other.seconds;
    }
    equals    toString() {
        return this.hours.toString().padStart(2, '0') + ':'
            + this.minutes.toString().padStart(2, '0') + ':'
            + this.seconds.toString().padStart(2, '0');
    }
    }
exports.TimeOnly = TimeOnly;
TimeOnly.validatePattern = /^\d{2,}:\d{2}:\d{2}$/;
exports["default"] = TimeOnly;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/util/array.ts":
/*!***********************************************!*\
  !*** ./node_modules/@kr3m/kr3m/util/array.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rearrange = exports.bucketReduce = exports.bucketMap = exports.bucketBy = exports.arrayToPairs = exports.arrayToAssoc = exports.sortBy = exports.getEditingDistance = exports.intersect = exports.difference = exports.findWhere = exports.findIndexWhere = exports.getBy = exports.findBy = exports.mapAssoc = exports.buildArray = exports.removeElement = exports.remove = exports.gatherUnique = exports.getUniques = exports.moveElement = exports.includesAny = exports.includesAll = exports.end = exports.head = exports.reduceAsync = exports.mapAsync = exports.filterAsync = exports.forEachAsync = void 0;
const object_1 = __webpack_require__(/*! ./object */ "./node_modules/@kr3m/kr3m/util/object.ts");
const string_1 = __webpack_require__(/*! ./string */ "./node_modules/@kr3m/kr3m/util/string.ts");
async function forEachAsync(values, func, options = {}) {
    const { parallel = 1 } = options;
    if (parallel < 2) {
        for (let i = 0; i < values.length; ++i)
            await func(values[i], i, values);
    }
    else {
        const promises = [];
        let i = 0;
        for (let j = 0; j < parallel; ++j) {
            promises.push(new Promise((resolve, reject) => {
                (async () => {
                    while (i < values.length) {
                        const myI = i++;
                        await func(values[myI], myI, values);
                    }
                })().then(resolve).catch(reject);
            }));
        }
        await Promise.all(promises);
    }
}
exports.forEachAsync = forEachAsync;
async function filterAsync(values, func) {
    const result = [];
    for (let i = 0; i < values.length; ++i) {
        if (await func(values[i], i, values))
            result.push(values[i]);
    }
    return result;
}
exports.filterAsync = filterAsync;
async function mapAsync(values, func, concurrent = false) {
    if (concurrent) {
        const promises = [];
        for (let i = 0; i < values.length; ++i)
            promises.push(func(values[i], i, values));
        return Promise.all(promises);
    }
    else {
        const result = [];
        for (let i = 0; i < values.length; ++i)
            result.push(await func(values[i], i, values));
        return result;
    }
}
exports.mapAsync = mapAsync;
async function reduceAsync(values, func, initialValue) {
    let result = initialValue;
    for (let i = 0; i < values.length; ++i)
        result = await func(result, values[i], i, values);
    return result;
}
exports.reduceAsync = reduceAsync;
exports.head = head;
function end(values) {
    if (values.length == 0)
        return undefined;
    return values[values.length - 1];
}
exports.end = end;
function includesAll(values, needles) {
    for (let i = 0; i < needles.length; ++i) {
        let found = false;
        for (let j = 0; j < values.length; ++j) {
            if (needles[i] == values[j]) {
                found = true;
                break;
            }
        }
        if (!found)
            return false;
    }
    return true;
}
exports.includesAll = includesAll;
function includesAny(values, needles) {
    for (let i = 0; i < needles.length; ++i) {
        for (let j = 0; j < values.length; ++j) {
            if (needles[i] == values[j])
                return true;
        }
    }
    return false;
}
exports.includesAny = includesAny;
function moveElement(values, fromPos, toPos) {
    if (fromPos < 0)
        fromPos += values.length;
    fromPos = Math.max(fromPos, 0);
    if (toPos < 0)
        toPos += values.length;
    toPos = Math.min(toPos, values.length - 1);
    if (fromPos == toPos)
        return;
    const temp = values[fromPos];
    if (fromPos < toPos)
        values.copyWithin(fromPos, fromPos + 1, toPos + 1);
    else
        values.copyWithin(toPos + 1, toPos, fromPos);
    values[toPos] = temp;
}
exports.moveElement = moveElement;
function getUniques(...arrays) {
    const result = [];
    for (let i = 0; i < arrays.length; ++i) {
        for (const j in arrays[i]) {
            if (!result.includes(arrays[i][j]))
                result.push(arrays[i][j]);
        }
    }
    return result;
}
exports.getUniques = getUniques;
function gatherUnique(values, property) {
    const result = [];
    for (let i = 0; i < values.length; ++i) {
        const value = (0, object_1.getProperty)(values[i], property);
        if (!result.includes(value))
            result.push(value);
    }
    return result;
}
exports.gatherUnique = gatherUnique;
function remove(values, filter) {
    for (let i = 0; i < values.length; ++i) {
        if (filter(values[i]))
            values.splice(i--, 1);
    }
}
exports.remove = remove;
function removeElement(values, value) {
    for (let i = 0; i < values.length; ++i) {
        if (values[i] == value)
            values.splice(i--, 1);
    }
}
exports.removeElement = removeElement;
function buildArray(...params) {
    const result = [];
    if (typeof params[1] == 'function') {
        for (let i = 0; i < params[0]; ++i)
            result.push(params[1](i));
    }
    else {
        for (let i = 0; i < params[0]; ++i)
            result.push(params[1]);
    }
    return result;
}
exports.buildArray = buildArray;
function mapAssoc(values, mapFunc) {
    const assoc = {};
    for (const i in values) {
        const [id, newValue] = mapFunc(values[i], i);
        assoc[(0, string_1.toString)(id)] = newValue;
    }
    return assoc;
}
exports.mapAssoc = mapAssoc;
function findBy(objects, propertyName, propertyValue, offset = 0, strict = false) {
    if (!objects)
        return -1;
    if (strict) {
        for (let i = offset; i < objects.length; ++i) {
            if ((0, object_1.getProperty)(objects[i], propertyName) === propertyValue)
                return i;
        }
    }
    else {
        for (let i = offset; i < objects.length; ++i) {
            if ((0, object_1.getProperty)(objects[i], propertyName) == propertyValue)
                return i;
        }
    }
    return -1;
}
exports.findBy = findBy;
function getBy(objects, propertyName, propertyValue, offset = 0, strict = false) {
    const pos = findBy(objects, propertyName, propertyValue, offset, strict);
    return pos >= 0 ? objects[pos] : undefined;
}
exports.getBy = getBy;
function findIndexWhere(objects, where, offset = 0, strict = false) {
    if (!objects)
        return -1;
    if (strict) {
        for (let i = offset; i < objects.length; ++i) {
            let found = true;
            for (const field in where) {
                if ((0, object_1.getProperty)(objects[i], field) !== where[field]) {
                    found = false;
                    break;
                }
            }
            if (found)
                return i;
        }
    }
    else {
        for (let i = offset; i < objects.length; ++i) {
            let found = true;
            for (const field in where) {
                if ((0, object_1.getProperty)(objects[i], field) != where[field]) {
                    found = false;
                    break;
                }
            }
            if (found)
                return i;
        }
    }
    return -1;
}
exports.findIndexWhere = findIndexWhere;
function findWhere(objects, where, offset = 0, strict = false) {
    const index = findIndexWhere(objects, where, offset, strict);
    return index < 0 ? undefined : objects[index];
}
exports.findWhere = findWhere;
function difference(base, ...operands) {
    const result = base.slice();
    for (let i = 0; i < result.length; ++i) {
        for (let j = 0; j < operands.length; ++j) {
            if (operands[j].includes(result[i])) {
                result.splice(i--, 1);
                break;
            }
        }
    }
    return result;
}
exports.difference = difference;
function intersect(...arrays) {
    const result = getUniques(...arrays);
    for (let i = 0; i < result.length; ++i) {
        for (let j = 0; j < arrays.length; ++j) {
            if (!arrays[j].includes(result[i])) {
                result.splice(i--, 1);
                break;
            }
        }
    }
    return result;
}
exports.intersect = intersect;
function getEditingDistance(s, t, equalFunc =  {
    if (s.length == 0)
        return t.length;
    if (t.length == 0)
        return s.length;
    const v0 = buildArray(t.length + 1, ;
    const v1 = buildArray(t.length + 1, 0);
    for (let i = 0; i < s.length; ++i) {
        v1[0] = i + 1;
        for (let j = 0; j < t.length; ++j) {
            const cost = equalFunc(s[i], t[j]) ? 0 : 1;
            v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
        }
        for (let j = 0; j < v0.length; ++j)
            v0[j] = v1[j];
    }
    return v1[t.length];
}
exports.getEditingDistance = getEditingDistance;
function sortBy(...params) {
    const values = params[0];
    let fields;
    if (typeof params[1] != 'object') {
        fields = {};
        fields[params[1].toString()] = params[2] === undefined ? true : params[2];
    }
    else {
        fields = params[1];
    }
    values.sort((a, b) => {
        for (const name in fields) {
            const aValue = (0, object_1.getProperty)(a, name);
            const bValue = (0, object_1.getProperty)(b, name);
            if (aValue < bValue)
                return fields[name] ? -1 : 1;
            if (aValue > bValue)
                return fields[name] ? 1 : -1;
        }
        return 0;
    });
}
exports.sortBy = sortBy;
function arrayToAssoc(values, indexField) {
    return mapAssoc(values, value => [(0, object_1.getProperty)(value, indexField), value]);
}
exports.arrayToAssoc = arrayToAssoc;
function arrayToPairs(values, indexField, valueField) {
    return mapAssoc(values, value => [(0, object_1.getProperty)(value, indexField), (0, object_1.getProperty)(value, valueField)]);
}
exports.arrayToPairs = arrayToPairs;
function bucketBy(values, key, ...keys) {
    const result = {};
    const func = typeof key == 'function' ? key : 
    for (const i in values) {
        const keyValue = (0, string_1.toString)(func(values[i]));
        if (!result[keyValue])
            result[keyValue] = [];
        result[keyValue].push(values[i]);
    }
    if (keys.length > 0) {
        const key2 = keys.shift();
        for (const keyValue in result)
            result[keyValue] = bucketBy(result[keyValue], key2, ...keys);
    }
    return result;
}
exports.bucketBy = bucketBy;
function bucketMap(values, key, mapFunc) {
    const buckets = bucketBy(values, key);
    const mappedBuckets = {};
    for (const id in buckets)
        mappedBuckets[id] = buckets[id].map(mapFunc);
    return mappedBuckets;
}
exports.bucketMap = bucketMap;
function bucketReduce(values, key, reduceFunc, initialValue) {
    const buckets = bucketBy(values, key);
    const reducedBuckets = {};
    for (const id in buckets)
        reducedBuckets[id] = buckets[id].reduce(reduceFunc, initialValue);
    return reducedBuckets;
}
exports.bucketReduce = bucketReduce;
function rearrange(values, newOffsets) {
    const result = [];
    let i;
    const l = Math.min(values.length, newOffsets.length);
    for (i = 0; i < l; ++i)
        result.push(values[newOffsets[i]]);
    for (i = newOffsets.length; i < values.length; ++i)
        result.push(values[i]);
    return result;
}
exports.rearrange = rearrange;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/util/date.ts":
/*!**********************************************!*\
  !*** ./node_modules/@kr3m/kr3m/util/date.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDateFromString = exports.getIso = exports.getIsoDate = exports.getIsoTime = exports.isWeekend = exports.getDateTokens = exports.getMonthDayCount = exports.getWeek = exports.isLeapYear = exports.getEndOf = exports.getStartOf = exports.getAdjustedDate = exports.isValidDate = exports.isYesterday = exports.isToday = exports.isSameDay = exports.tomorrow = exports.yesterday = exports.today = exports.getDayDifference = exports.Weekday = exports.Period = void 0;
const regex_1 = __webpack_require__(/*! ./regex */ "./node_modules/@kr3m/kr3m/util/regex.ts");
const string_1 = __webpack_require__(/*! ./string */ "./node_modules/@kr3m/kr3m/util/string.ts");
const tokenizer_1 = __webpack_require__(/*! ./tokenizer */ "./node_modules/@kr3m/kr3m/util/tokenizer.ts");
var Period;
((Period = exports.Period || (exports.Period = {}));
var Weekday;
((Weekday = exports.Weekday || (exports.Weekday = {}));
function getDayDifference(a, b) {
    a = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    b = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((b.getTime() - a.getTime()) / (24 * 60 * 60 * 1000));
}
exports.getDayDifference = getDayDifference;
function today(hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
    const date = new Date();
    date.setHours(hours, minutes, seconds, milliseconds);
    return date;
}
exports.today = today;
function yesterday(hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    date.setHours(hours, minutes, seconds, milliseconds);
    return date;
}
exports.yesterday = yesterday;
function tomorrow(hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(hours, minutes, seconds, milliseconds);
    return date;
}
exports.tomorrow = tomorrow;
exports.isSameDay = isSameDay;
function isToday(date) {
    return getDayDifference(date, new Date()) == 0;
}
exports.isToday = isToday;
function isYesterday(date) {
    return getDayDifference(date, new Date()) == 1;
}
exports.isYesterday = isYesterday;
function isValidDate(date) {
    return date && date instanceof Date && !isNaN(date.getTime());
}
exports.isValidDate = isValidDate;
function getAdjustedDate(period, delta, date = new Date()) {
    const result = new Date(date.getTime());
    switch (period) {
        case Period.Day:
            result.setDate(result.getDate() + delta);
            break;
        case Period.Week:
            result.setDate(result.getDate() + delta * 7);
            break;
        case Period.Month:
            result.setMonth(result.getMonth() + delta);
            break;
        case Period.Year:
            result.setFullYear(result.getFullYear() + delta);
            break;
        case Period.Quarter:
            result.setMonth(result.getMonth() + delta * 3);
            break;
    }
    return result;
}
exports.getAdjustedDate = getAdjustedDate;
function getStartOf(period, date = new Date()) {
    const result = new Date(date.getTime());
    switch (period) {
        case Period.Day:
            result.setHours(0, 0, 0, 0);
            break;
        case Period.Week:
            const offset = (result.getDay() + 6) % 7;
            result.setDate(result.getDate() - offset);
            result.setHours(0, 0, 0, 0);
            break;
        case Period.Month:
            result.setDate(1);
            result.setHours(0, 0, 0, 0);
            break;
        case Period.Year:
            result.setMonth(0, 1);
            result.setHours(0, 0, 0, 0);
            break;
        case Period.Quarter:
            const month = 0;
            result.setMonth(month, 1);
            result.setHours(0, 0, 0, 0);
            break;
    }
    return result;
}
exports.getStartOf = getStartOf;
function getEndOf(period, date = new Date()) {
    const result = getAdjustedDate(period, 1, getStartOf(period, date));
    result.setTime(result.getTime() - 1);
    return result;
}
exports.getEndOf = getEndOf;
exports.isLeapYear = isLeapYear;
function getWeek(date = new Date()) {
    const target = new Date(date.getTime());
    const dayNr = (date.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    const jan4 = new Date(target.getFullYear(), 0, 4);
    const dayDiff = (target.getTime() - jan4.getTime()) / 86400000;
    if (new Date(target.getFullYear(), 0, 1).getDay() < 5)
        return 1 + Math.ceil(dayDiff / 7);
    else
        return Math.ceil(dayDiff / 7);
}
exports.getWeek = getWeek;
function getMonthDayCount(date = new Date()) {
    return getEndOf(Period.Month, date).getDate();
}
exports.getMonthDayCount = getMonthDayCount;
function getDateTokens(date = new Date(), useUtc = false) {
    const tokens = {};
    if (useUtc) {
        tokens.D = date.getUTCDate();
        tokens.DD = (0, string_1.pad)(tokens.D, 2);
        tokens.M = date.getUTCMonth() + 1;
        tokens.MM = (0, string_1.pad)(tokens.M, 2);
        tokens.YYYY = (0, string_1.pad)(date.getUTCFullYear(), 4);
        tokens.YY = (0, string_1.pad)(tokens.YYYY % 100, 2);
        tokens.H = date.getUTCHours();
        tokens.HH = (0, string_1.pad)(tokens.H, 2);
        tokens.I = date.getUTCMinutes();
        tokens.II = (0, string_1.pad)(tokens.I, 2);
        tokens.S = date.getUTCSeconds();
        tokens.SS = (0, string_1.pad)(tokens.S, 2);
        tokens.O = 0;
    }
    else {
        tokens.D = date.getDate();
        tokens.DD = (0, string_1.pad)(tokens.D, 2);
        tokens.M = date.getMonth() + 1;
        tokens.MM = (0, string_1.pad)(tokens.M, 2);
        tokens.YYYY = (0, string_1.pad)(date.getFullYear(), 4);
        tokens.YY = (0, string_1.pad)(tokens.YYYY % 100, 2);
        tokens.H = date.getHours();
        tokens.HH = (0, string_1.pad)(tokens.H, 2);
        tokens.I = date.getMinutes();
        tokens.II = (0, string_1.pad)(tokens.I, 2);
        tokens.S = date.getSeconds();
        tokens.SS = (0, string_1.pad)(tokens.S, 2);
        let offset = date.getTimezoneOffset() / -60;
        if (offset >= 0)
            offset = '+' + offset;
        if (offset.length < 3)
            offset = offset.slice(0, 1) + '0' + offset.slice(1);
        tokens.O = offset + ':00';
    }
    return tokens;
}
exports.getDateTokens = getDateTokens;
function isWeekend(date = new Date()) {
    return date.getDay() == 0 || date.getDay() == 6;
}
exports.isWeekend = isWeekend;
function getIsoTime(date = new Date(), useShortForm = false) {
    const tokens = getDateTokens(date, false);
    if (useShortForm)
        return (0, tokenizer_1.tokenize)('##HH##:##II##:##SS##', tokens);
    else
        return (0, tokenizer_1.tokenize)('##HH##:##II##:##SS####O##', tokens);
}
exports.getIsoTime = getIsoTime;
function getIsoDate(date = new Date()) {
    const tokens = getDateTokens(date, false);
    return (0, tokenizer_1.tokenize)('##YYYY##-##MM##-##DD##', tokens);
}
exports.getIsoDate = getIsoDate;
function getIso(date = new Date(), useShortForm = false) {
    const tokens = getDateTokens(date, false);
    if (useShortForm)
        return (0, tokenizer_1.tokenize)('##YYYY##-##MM##-##DD## ##HH##:##II##:##SS##', tokens);
    else
        return (0, tokenizer_1.tokenize)('##YYYY##-##MM##-##DD##T##HH##:##II##:##SS####O##', tokens);
}
exports.getIso = getIso;
function getDateFromString(value) {
    if (!value || typeof value != 'string')
        return undefined;
    const matches = (0, regex_1.captureNamed)(value, regex_1.TIMESTAMP, regex_1.TIMESTAMP_GROUPS);
    if (!matches)
        return undefined;
    matches.seconds = matches.seconds || '0';
    matches.milliseconds = matches.milliseconds || '0';
    const date = new Date();
    if (matches.timezone == 'Z') {
        date.setUTCFullYear(parseInt(matches.year, 10), parseInt(matches.month, 10) - 1, parseInt(matches.day, 10));
        date.setUTCHours(parseInt(matches.hours, 10), parseInt(matches.minutes, 10), parseInt(matches.seconds, 10), parseInt(matches.milliseconds, 10));
    }
    else if (matches.timezone && matches.timezone.length == 6) {
        let hourOffset = parseInt(matches.timezone.slice(1, 3), 10);
        let minuteOffset = parseInt(matches.timezone.slice(4, 5), 10);
        if (matches.timezone.charAt(0) == '-') {
            hourOffset *= -1;
            minuteOffset *= -1;
        }
        date.setUTCFullYear(parseInt(matches.year, 10), parseInt(matches.month, 10) - 1, parseInt(matches.day, 10));
        date.setUTCHours(parseInt(matches.hours, 10) - hourOffset, parseInt(matches.minutes, 10) - minuteOffset, parseInt(matches.seconds, 10), parseInt(matches.milliseconds, 10));
    }
    else {
        date.setFullYear(parseInt(matches.year, 10), parseInt(matches.month, 10) - 1, parseInt(matches.day, 10));
        date.setHours(parseInt(matches.hours, 10), parseInt(matches.minutes, 10), parseInt(matches.seconds, 10), parseInt(matches.milliseconds, 10));
    }
    return date;
}
exports.getDateFromString = getDateFromString;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/util/object.ts":
/*!************************************************!*\
  !*** ./node_modules/@kr3m/kr3m/util/object.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.invert = exports.clone = exports.mergeAssocRecursive = exports.filterAssoc = exports.forEachRecursive = exports.pickOther = exports.pick = exports.getProperty = exports.deleteProperty = exports.setProperty = exports.equals = exports.adjustKeys = exports.firstValue = exports.firstKey = exports.hidePropertyInEnumerations = void 0;
function hidePropertyInEnumerations(obj, propName) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propName);
    descriptor.enumerable = false;
    Object.defineProperty(obj, propName, descriptor);
}
exports.hidePropertyInEnumerations = hidePropertyInEnumerations;
function firstKey(obj) {
    for (const i in obj)
        return i;
    return undefined;
}
exports.firstKey = firstKey;
function firstValue(obj) {
    for (const i in obj)
        return obj[i];
    return undefined;
}
exports.firstValue = firstValue;
exports.adjustKeys = adjustKeys;
function equals(obj1, obj2, maxRecursionDepth = 1000, useStrictCompare = true) {
    if (maxRecursionDepth < 0)
        return true;
    if (obj1 === undefined)
        return obj2 === undefined;
    if (obj1 === null)
        return obj2 === null;
    --maxRecursionDepth;
    if (typeof obj1 != 'object' || typeof obj2 != 'object')
        return useStrictCompare ? (obj1 === obj2) : (obj1 == obj2);
    if (typeof obj1.equals == 'function')
        return obj1.equals(obj2);
    if ((obj1.length || obj2.length) && obj1.length != obj2.length)
        return false;
    if (obj1 instanceof Date && obj2 instanceof Date)
        return obj1.getTime() == obj2.getTime()
            || (isNaN(obj1.getTime()) && isNaN(obj2.getTime()));
    for (const i in obj1) {
        if (!equals(obj1[i], obj2[i], maxRecursionDepth, useStrictCompare))
            return false;
    }
    for (const i in obj2) {
        if (!equals(obj1[i], obj2[i], maxRecursionDepth, useStrictCompare))
            return false;
    }
    return true;
}
exports.equals = equals;
function setProperty(obj, propertyName, value) {
    const parts = propertyName.replace(/\[\s*(\d+)\s*\]/g, '.$1').split('.');
    while (parts.length > 1) {
        const key = parts.shift();
        if (obj[key] === undefined || obj[key] === null) {
            const index = parseInt(parts[0], 10);
            if (isNaN(index) || index > 1000) {
                obj[key] = {};
            }
            else {
                obj[key] = [];
                for (let i = -1; i < index; ++i)
                    obj[key].push(undefined);
            }
        }
        if (obj[key] === Object.prototype)
            obj[key] = {};
        obj = obj[key];
    }
    obj[parts[0]] = value;
}
exports.setProperty = setProperty;
function deleteProperty(obj, propertyName) {
    const parts = propertyName.replace(/\[\s*(\d+)\s*\]/g, '.$1').split('.');
    while (parts.length > 1) {
        const key = parts.shift();
        if (obj[key] === undefined || obj[key] === null) {
            const index = parseInt(parts[0], 10);
            if (isNaN(index)) {
                obj[key] = {};
            }
            else {
                obj[key] = [];
                for (let i = -1; i < index; ++i)
                    obj[key].push(undefined);
            }
        }
        obj = obj[key];
    }
    delete obj[parts[0]];
}
exports.deleteProperty = deleteProperty;
function getProperty(obj, propertyName) {
    const parts = propertyName.replace(/\[\s*(\d+)\s*\]/g, '.$1').split('.');
    while (parts.length > 0) {
        if (!obj)
            return undefined;
        obj = obj[parts.shift()];
    }
    return obj;
}
exports.getProperty = getProperty;
function pick(obj, fields) {
    const result = {};
    for (let i = 0; i < fields.length; ++i)
        setProperty(result, fields[i], getProperty(obj, fields[i]));
    return result;
}
exports.pick = pick;
function pickOther(obj, fields) {
    const result = {};
    for (const field in obj) {
        if (!fields.includes(field))
            result[field] = obj[field];
    }
    return result;
}
exports.pickOther = pickOther;
function forEachRecursive(obj, func) {
    if (!obj || typeof obj != 'object')
        return;
    const workset = Object.keys(obj);
    while (workset.length > 0) {
        const key = workset.shift();
        const value = getProperty(obj, key);
        const type = value ? typeof value : 'null';
        switch (type) {
            case 'object':
                const subKeys = Object.keys(value);
                if (subKeys.length > 0) {
                    for (let i = 0; i < subKeys.length; ++i)
                        workset.push(key + '.' + subKeys[i]);
                    break;
                }
            default:
                func(key, value, obj);
                break;
        }
    }
}
exports.forEachRecursive = forEachRecursive;
function filterAssoc(obj, filterFunc) {
    const result = {};
    for (const key in obj) {
        if (filterFunc(obj[key], key))
            result[key] = obj[key];
    }
    return result;
}
exports.filterAssoc = filterAssoc;
function mergeAssocRecursive(...objects) {
    const result = Array.isArray(objects[0]) ? [] : {};
    for (let i = 0; i < objects.length; ++i)
        forEachRecursive(objects[i], ;
    return result;
}
exports.mergeAssocRecursive = mergeAssocRecursive;
function clone(value) {
    if (typeof value == 'object' && value !== null)
        return mergeAssocRecursive(value);
    return value;
}
exports.clone = clone;
function invert(obj) {
    const result = {};
    for (const key in obj)
        result[String(obj[key])] = key;
    return result;
}
exports.invert = invert;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/util/regex.ts":
/*!***********************************************!*\
  !*** ./node_modules/@kr3m/kr3m/util/regex.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.oneOf = exports.oneOrMore = exports.opt = exports.trim = exports.end = exports.start = exports.concat = exports.replaceAsync = exports.captureNamedGlobal = exports.captureNamed = exports.escape = exports.TIMESTAMP_GROUPS = exports.TIMESTAMP = exports.WORD_SEPERATORS = exports.USERNAME = exports.URL_GROUPS = exports.URL = exports.LOCALE_GROUPS = exports.LOCALE = exports.INTEGER = exports.FLOAT = exports.EMAIL = exports.DEVICE_ID = exports.DATA_URL_GROUPS = exports.DATA_URL = exports.CRON_GROUPS = exports.CRON = void 0;
const array_1 = __webpack_require__(/*! ./array */ "./node_modules/@kr3m/kr3m/util/array.ts");
exports.CRON = /((\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)(?:\s+(\S+))?)\s+(.+)/;
exports.CRON_GROUPS = ['pattern', 'minute', 'hour', 'dayOfMonth', 'month', 'dayOfWeek', 'year', 'command'];
exports.DATA_URL = /^data:([^;]+)(?:;(base64)),(.+)$/;
exports.DATA_URL_GROUPS = ['mimeType', 'encoding', 'payload'];
exports.DEVICE_ID = /^[A-Z]+:/;
exports.EMAIL = /^[^@\s]{1,64}@[^@\s]{1,255}$/;
exports.FLOAT = /^\-?\d+[,\.]?\d*(?:e[\+\-]?\d+)?$/;
exports.INTEGER = /^\-?\d+$/;
exports.LOCALE = /^([a-z][a-z])[_\-]?([A-Z][A-Z])?$/;
exports.LOCALE_GROUPS = ['languageId', 'countryId'];
exports.URL = /^(?:(http|https|ftp)\:)?(?:\/\/(?:(\w+):(\w+)@)?([^\/:#?]+)(?::(\d+))?)?([^\?#"':]*)(?:\?([^#"':]*))?(?:#(.*))?$/;
exports.URL_GROUPS = ['protocol', 'user', 'password', 'domain', 'port', 'resource', 'query', 'hash'];
exports.USERNAME = /^[^<>"'&;\/]+$/;
exports.WORD_SEPERATORS = /[\s!§*@$%\/\(\)\{\}=\#\[\]\\\?´``\"\'+\:;,\.<>|€\u0000]+/;
exports.TIMESTAMP = /^(\d\d\d\d)[\-\:](\d\d)[\-\:](\d\d)[T ](\d\d)\:(\d\d)(?:\:(\d\d)(?:\.(\d\d\d))?)?(Z|[\+\-]\d\d\:\d\d)?$/;
exports.TIMESTAMP_GROUPS = ['year', 'month', 'day', 'hours', 'minutes', 'seconds', 'milliseconds', 'timezone;
}
exports.escape = escape;
function captureNamed(text, regex, groupNames) {
    const matches = text.match(regex);
    if (!matches)
        return undefined;
    const result = {};
    const l = Math.min(groupNames.length, matches.length - 1);
    for (let i = 0; i < l; ++i)
        result[groupNames[i]] = matches[i + 1];
    return result;
}
exports.captureNamed = captureNamed;
function captureNamedGlobal(text, regex, groupNames) {
    const results = [];
    let match = regex.exec(text);
    while (match) {
        const result = {};
        const l = Math.min(groupNames.length, match.length - 1);
        for (let i = 0; i < l; ++i)
            result[groupNames[i]] = match[i + 1];
        results.push(result);
        match = regex.exec(text);
    }
    return results;
}
exports.captureNamedGlobal = captureNamedGlobal;
async function replaceAsync(input, regexp, func) {
    const promises = [];
    input.replace(regexp, (match, ...groups) => {
        const input = groups.pop();
        const offset = groups.pop();
        promises.push(func(match, groups, offset, input));
        return undefined;
    });
    const replacements = await Promise.all(promises);
    return input.replace(reget());
}
exports.replaceAsync = replaceAsync;
function wrap(pattern) {
    return typeof pattern == 'object'
        ? pattern
        : new RegExp(escape(String(pattern)));
}
function joinFlags(res) {
    return (0, array_1.getUniques)(...res.''))).join('');
}
function concat(...patterns) {
    const pats = patterns.map(wrap);
    const source = pats.rce).join('');
    return new RegExp(source, joinFlags(pats));
}
exports.concat = concat;
function start() {
    return /^/;
}
exports.start = sta;
}
exports.end = e;
}
exports.trim = trim;
function opt(pattern) {
    const pat = wrap(pattern);
    return new RegExp('(?:' + pat.source + ')?', pat.flags);
}
exports.opt = opt;
function oneOrMore(pattern) {
    const pat = wrap(pattern);
    return new RegExp('(?:' + pat.source + ')+', pat.flags);
}
exports.oneOrMore = oneOrMore;
function oneOf(...patterns) {
    const pats = patterns.map(wrap);
    const source = '(?:' + pats.')').join('|') + ')';
    return new RegExp(source, joinFlags(pats));
}
exports.oneOf = oneOf;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/util/string.ts":
/*!************************************************!*\
  !*** ./node_modules/@kr3m/kr3m/util/string.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.charCodeCompare = exports.getEditingDistance = exports.format = exports.getFixedDurationString = exports.getDurationStringValue = exports.getDurationString = exports.getSizeString = exports.bigNumber = exports.getUnitString = exports.parseIntSafe = exports.getCliParams = exports.replaceLiteral = exports.splitAssoc = exports.joinAssoc = exports.getAfter = exports.getBefore = exports.splitNoQuoted = exports.splitArguments = exports.camelToSnake = exports.camelToKebab = exports.kebabToCamel = exports.reverse = exports.decodeBinary = exports.decodeHex = exports.decodeUInt = exports.encodeBinary = exports.encodeHex = exports.encodeUInt = exports.pad = exports.getCapital = exports.toString = exports.joinList = exports.splitList = exports.HEX = exports.OCT = exports.BINARY = void 0;
const array_1 = __webpack_require__(/*! ./array */ "./node_modules/@kr3m/kr3m/util/array.ts");
const json_1 = __webpack_require__(/*! ../js/json */ "./node_modules/@kr3m/kr3m/js/json.ts");
exports.BINARY = '01';
exports.OCT = '01234567';
exports.HEX = '0123456789ABCDEF';
function splitList(list, separator = /[,\r\n]/) {
    return list.split(separator).map(i => i.trim()).filter(i => i);
}
exports.splitList = splitList;
function joinList(list, glue = ',') {
    return list.map(i => i.trim()).filter(i => i).join(glue);
}
exports.joinList = joinList;
function toString(value) {
    if (value === null || value === undefined || !value.toString)
        return '';
    return value.toString();
}
exports.toString = toString;
function getCapital(text, restLowerCase = true) {
    return text.slice(0, 1).toUpperCase()
        + (restLowerCase ? text.slice(1).toLowerCase() : text.slice(1));
}
exports.getCapital = getCapital;
function pad(text, padLength, filler = '0', alignment = 'right') {
    let padded = toString(text);
    const fillerString = toString(filler);
    if (fillerString.length == 0)
        throw new Error('filler length for pad() must be greater than 0');
    if (alignment == 'right') {
        while (padded.length < padLength)
            padded = fillerString + padded;
    }
    else if (alignment == 'left') {
        while (padded.length < padLength)
            padded += fillerString;
    }
    else {
        while (padded.length < padLength) {
            padded = fillerString + padded;
            if (padded.length < padLength)
                padded += fillerString;
        }
    }
    return padded;
}
exports.pad = pad;
function encodeUInt(uint, alphabet = exports.HEX, padLength = 0) {
    let result = '';
    while (uint > 0) {
        const digit = uint % alphabet.length;
        result = alphabet.charAt(digit) + result;
        uint = Math.floor(uint / alphabet.length);
    }
    if (!result)
        result = alphabet.charAt(0);
    return pad(result, padLength, alphabet.charAt(0));
}
exports.encodeUInt = encodeUInt;
function encodeHex(uint, padLength = 0) {
    return pad(uint.toString(16), padLength, '0');
}
exports.encodeHex = encodeHex;
function encodeBinary(uint, padLength = 0) {
    return encodeUInt(uint, exports.BINARY, padLength);
}
exports.encodeBinary = encodeBinary;
function decodeUInt(value, alphabet = exports.HEX) {
    let result = 0;
    for (let i = 0; i < value.length; ++i)
        result = result * alphabet.length + alphabet.indexOf(value.charAt(i));
    return result;
}
exports.decodeUInt = decodeUI;
}
exports.decodeHex = decodeH;
}
exports.decodeBinary = decodeBinary;
function reverse(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; --i)
        result += text.charAt(i);
    return result;
}
exports.reverse = reverse;
function kebabToCamel(text, startWithCapital = true, restLowerCase = true) {
    let result = text.split(/[\-_]+/g).se)).join('');
    if (!startWithCapital)
        result = result.slice(0, 1).toLowerCase() + result.slice(1);
    return result;
}
exports.kebabToCamel = kebabToCamel;
function camelToKebab(value, seperator = '-') {
    const parts = value.split(/(?=[A-Z])/);
    return parts.map(p => p.toLowerCase()).join(seperator);
}
exports.camelToKebab = camelToKebab;
function camelToSnake(value, useUpperCase = true) {
    const parts = value.split(/(?=[A-Z])/);
    const result = parts.e()).join('_');
    return useUpperCase ? result.toUpperCase() : result;
}
exports.camelToSnake = camelToSnake;
function splitArguments(text) {
    if (!text)
        return [];
    const parts = text.split(' ');
    for (let i = 0; i < parts.length; ++i) {
        if (parts[i].slice(0, 1) == '"') {
            let found = false;
            for (let j = i; j < parts.length; ++j) {
                if (parts[j].slice(-1) == '"') {
                    found = true;
                    if (i != j) {
                        parts[i] = parts.slice(i, j + 1).join(' ').slice(1, -1);
                        parts.splice(i + 1, j - i);
                    }
                    else {
                        parts[i] = parts[i].slice(1, -1);
                    }
                    break;
                }
            }
            if (!found)
                throw new Error('invalid input into splitArguments: ' + text);
        }
    }
    return parts;
}
exports.splitArguments = splitArguments;
function splitNoQuoted(text, seperator = ',', openingQuotes = ['\'', '"'], closingQuotes) {
    closingQuotes = closingQuotes || openingQuotes;
    if (openingQuotes.length != closingQuotes.length)
        throw new Error('openingQuotes.length doesn\'t match closingQuotes.length');
    let quote = -1;
    const parts = [];
    let offset = 0;
    for (let i = 0; i < text.length; ++i) {
        if (quote < 0) {
            if (text.slice(i, i + seperator.length) == seperator) {
                parts.push(text.slice(offset, i));
                offset = i + seperator.length;
                i = offset - 1;
                continue;
            }
            for (let j = 0; j < openingQuotes.length; ++j) {
                if (text.slice(i, i + openingQuotes[j].length) == openingQuotes[j]) {
                    quote = j;
                    break;
                }
            }
        }
        else {
            if (text.slice(i, i + closingQuotes[quote].length) == closingQuotes[quote])
                quote = -1;
        }
    }
    if (offset < text.length)
        parts.push(text.slice(offset));
    return parts;
}
exports.splitNoQuoted = splitNoQuoted;
function getBefore(text, needle, fromFront = true) {
    const pos = fromFront ? text.indexOf(needle) : text.lastIndexOf(needle);
    return (pos > 0) ? text.substr(0, pos) : text;
}
exports.getBefore = getBefore;
function getAfter(text, needle, fromFront = true) {
    const pos = fromFront ? text.indexOf(needle) : text.lastIndexOf(needle);
    return (pos >= 0) ? text.substr(pos + needle.length) : text;
}
exports.getAfter = getAfter;
function joinAssoc(obj, seperator = '&', assignOperator = '=', valueFormatter) {
    const keys = Object.keys(obj);
    if (valueFormatter)
        return keys.map(key => key + assignOperator + valueFormatter(obj[key])).join(seperator);
    else
        return keys.map(key => key + assignOperator + toString(obj[key])).join(seperator);
}
exports.joinAssoc = joinAssoc;
function splitAssoc(text, seperator = '&', assignOperator = '=', valueFormatter) {
    const result = {};
    const parts = text.split(seperator);
    for (let i = 0; i < parts.length; ++i) {
        const pos = parts[i].indexOf(assignOperator);
        if (pos < 0)
            continue;
        const key = parts[i].substring(0, pos);
        const value = parts[i].substring(pos + assignOperator.length);
        result[key] = valueFormatter ? valueFormatter(value) : value;
    }
    return result;
}
exports.splitAssoc = splitAss;
}
exports.replaceLiteral = replaceLiteral;
function getCliParams(params, mapping = {}) {
    const result = { values: [] };
    for (let i = 0; i < params.length; ++i) {
        const meta = mapping[params[i]];
        if (meta) {
            const name = meta.paramName || params[i];
            const count = meta.argCount || 0;
            if (count == 0) {
                result[name] = [];
            }
            else if (count == 1) {
                result[name] = params[++i];
            }
            else {
                result[name] = [];
                for (let j = 0; j < count; ++j)
                    result[name].push(params[++i]);
            }
        }
        else {
            result.values.push(params[i]);
        }
    }
    for (const cliText in mapping) {
        const map = mapping[cliText];
        if (result[map.paramName] === undefined && map.defaultValue !== undefined)
            result[map.paramName] = map.defaultValue;
    }
    return result;
}
exports.getCliParams = getCliParams;
function parseIntSafe(text, errorResult = 0) {
    if (text === null || typeof text === 'undefined' || !text.toString)
        return errorResult;
    let value = parseInt(text.toString(), 10);
    if (isNaN(value))
        value = errorResult;
    return value;
}
exports.parseIntSafe = parseIntSafe;
function getUnitString(value, units, maxUnits = 0) {
    if (value == 0)
        return '0' + (Object.keys(units)[0] || '');
    let sign = '';
    if (value < 0) {
        sign = '-';
        value *= -1;
    }
    let parts = [];
    for (const unit in units) {
        const amount = value % units[unit];
        if (amount > 0)
            parts.unshift(amount.toFixed(0) + unit);
        value = Math.floor(value / units[unit]);
    }
    if (maxUnits > 0)
        parts = parts.slice(0, maxUnits);
    return sign + parts.join(' ');
}
exports.getUnitString = getUnitString;
function bigNumber(value, maxUnits = 0) {
    const units = {
        '': 1000,
        k: 1000,
        M: 1000,
        G: 1000,
        T: 1000,
        P: 1000,
        E: 1000,
        Z: 1000,
        Y: 1000,
        GOOGOL: 1e+76
    };
    return getUnitString(value, units, maxUnits);
}
exports.bigNumber = bigNumber;
function getSizeString(size, useDual = false, maxUnits = 0) {
    const units = useDual ?
        {
            Bi: 1024,
            kiB: 1024,
            MiB: 1024,
            GiB: 1024,
            TiB: 1024,
            PiB: 1024,
            EiB: 1024,
            ZiB: 1024,
            YiB: 1024,
            GOOGOLi: 1e+76
        } :
        {
            B: 1000,
            kB: 1000,
            MB: 1000,
            GB: 1000,
            TB: 1000,
            PB: 1000,
            EB: 1000,
            ZB: 1000,
            YB: 1000,
            GOOGOL: 1e+76
        };
    return getUnitString(size, units, maxUnits);
}
exports.getSizeString = getSizeString;
function getDurationString(duration, maxUnits = 0) {
    const units = {
        ms: 1000,
        s: 60,
        m: 60,
        h: 24,
        d: 7,
        w: 52,
        y: 100,
        centuries: 10,
        millenia: 1000,
        ages: 100000000
    };
    return getUnitString(duration, units, maxUnits);
}
exports.getDurationString = getDurationString;
function getDurationStringValue(text) {
    const units = {
        ms: 1,
        s: 1000,
        m: 60 * 1000,
        h: 60 * 60 * 1000,
        d: 24 * 60 * 60 * 1000,
        w: 7 * 24 * 60 * 60 * 1000,
        y: 52 * 7 * 24 * 60 * 60 * 1000,
        centuries: 100 * 52 * 7 * 24 * 60 * 60 * 1000,
        millenia: 10 * 100 * 52 * 7 * 24 * 60 * 60 * 1000,
        ages: 1000 * 10 * 100 * 52 * 7 * 24 * 60 * 60 * 1000
    };
    let duration = 0;
    text = text.trim();
    let sign = 1;
    if (text.startsWith('-')) {
        text = text.slice(1).trim();
        sign = -1;
    }
    const parts = text.split(/\s+/).filter(p => p);
    const pattern = /^(\d+)(ms|s|m|h|d|w|y|centuries|millenia|ages)$/;
    for (let i = 0; i < parts.length; ++i) {
        const match = parts[i].match(pattern);
        if (!match)
            throw new Error('invalid duration string: ' + text);
        const value = parseInt(match[1], 10);
        const factor = units[match[2]];
        duration += value * factor;
    }
    return sign * duration;
}
exports.getDurationStringValue = getDurationStringValue;
function getFixedDurationString(duration) {
    duration = Math.floor(duration / 1000);
    const s = duration % 60;
    const m = Math.floor(duration / 60) % 60;
    const h = Math.floor(duration / 3600);
    return pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2);
}
exports.getFixedDurationString = getFixedDurationString;
function format(text, ...values) {
    let result = '';
    let j = 0;
    const specs = { '%': true, 'n': true, 'j': true, 's': true };
    for (let i = 0; i < text.length; ++i) {
        const token = text.charAt(i);
        if (token == '%') {
            let spec;
            let k = i + 1;
            do {
                if (k >= text.length)
                    return result;
                spec = text.charAt(k++);
            } while (!specs[spec]);
            const options = text.slice(i + 1, k - 1);
            const matches = options.match(/^([0\-\+hb]*)(\d*)\.?(\d*)([hb])*$/);
            if (!matches)
                continue;
            const padWith = (matches[1].indexOf('0') >= 0) ? '0' : ' ';
            const alignLeft = matches[1].indexOf('-') >= 0;
            const alignCenter = matches[1].indexOf('+') >= 0;
            const length = parseIntSafe(matches[2]);
            const precision = parseIntSafe(matches[3]);
            let base = 10;
            if ((matches[1] && matches[1].indexOf('h') >= 0) || (matches[4] && matches[4].indexOf('h') >= 0))
                base = 16;
            else if ((matches[1] && matches[1].indexOf('b') >= 0) || (matches[4] && matches[4].indexOf('b') >= 0))
                base = 2;
            let value;
            switch (spec) {
                case '%':
                    if (options == '') {
                        result += '%';
                        ++i;
                        continue;
                    }
                    break;
                case 'n':
                    value = (precision > 0 ? values[j++].toFixed(precision) : values[j++]).toString(base);
                    break;
                case 's':
                    value = values[j++].toString();
                    break;
                case 'j':
                    value = (0, json_1.encodeJson)(values[j++]);
                    break;
            }
            value = value || '';
            if (alignCenter) {
                let odd = false;
                while (value.length < length) {
                    if (odd)
                        value += padWith;
                    else
                        value = padWith + value;
                    odd = !odd;
                }
            }
            else if (alignLeft) {
                while (value.length < length)
                    value += padWith;
            }
            else {
                while (value.length < length)
                    value = padWith + value;
            }
            result += value;
            i = k - 1;
        }
        else {
            result += token;
        }
    }
    return result;
}
exports.format = format;
function getEditingDistance(s, t) {
    if (s == t)
        return 0;
    if (s.length == 0)
        return t.length;
    if (t.length == 0)
        return s.length;
    const v0 = (0, array_1.buildArray)(t.length + 1, i => i);
    const v1 = (0, array_1.buildArray)(t.length + 1, 0);
    for (let i = 0; i < s.length; ++i) {
        v1[0] = i + 1;
        for (let j = 0; j < t.length; ++j) {
            const cost = (s[i] == t[j]) ? 0 : 1;
            v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
        }
        for (let j = 0; j < v0.length; ++j)
            v0[j] = v1[j];
    }
    return v1[t.length];
}
exports.getEditingDistance = getEditingDistance;
function charCodeCompare(a, b) {
    const l = Math.max(a.length, b.length);
    for (let i = 0; i < l; ++i) {
        const a1 = a.charCodeAt(i) || 0;
        const b1 = b.charCodeAt(i) || 0;
        if (a1 != b1)
            return a1 - b1;
    }
    return 0;
}
exports.charCodeCompare = charCodeCompare;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/util/tokenizer.ts":
/*!***************************************************!*\
  !*** ./node_modules/@kr3m/kr3m/util/tokenizer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setToken = exports.tokenize = exports.tokenizer = exports.Tokenizer = void 0;
const generator_1 = __webpack_require__(/*! ../html/generator */ "./node_modules/@kr3m/kr3m/html/generator.ts");
const object_1 = __webpack_require__(/*! ../util/object */ "./node_modules/@kr3m/kr3m/util/object.ts");
const string_1 = __webpack_require__(/*! ./string */ "./node_modules/@kr3m/kr3m/util/string.ts");
class Tokenizer {
    constructor() {
        this.tokens = {};
        this.formatters = {};
        this.seperator = '##';
        this.setFormatter('uc', (value) => (0, string_1.toString)(value).toUpperCase());
        this.setFormatter('le());
        this.setFormatter('camel', (value) => (0, string_1.kebabToCamel)((0, string_1.toString)(value)));
        this.setFormatter('htme)));
    }
  }
    setT  }
    tokenize(text, tokens) {
        tokens = { ...this.tokens, ...tokens };
        const parts = (0, string_1.toString)(text).split(this.seperator);
        for (let i = 1; i < parts.length; i += 2) {
            const tokenParts = parts[i].split(':');
            if (tokenParts.length < 1)
                continue;
            let value = (0, object_1.getProperty)(tokens, tokenParts[0]);
            if (tokenParts.length > 1) {
                const formatter = this.formatters[tokenParts[1]];
                if (formatter) {
                    try {
                        value = formatter(value, tokens, tokenParts[0]);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                else {
                    console.error('unknown token-formatter:', tokenParts[1]);
                }
            }
            parts[i] = (value !== null) ? value : '';
        }
        return parts.join('');
    }
}
exports.Tokenizer = Tokenizer;
exports.tokenizer = new Tokenizer();
function tokenize(text, tokens) {
    return exports.tokenizer.tokenize(text, tokens);
}
exports.tokenize = tokeni;
}
exports.setToken = setToken;
exports["default"] = tokenize;


/***/ }),

/***/ "./node_modules/@kr3m/kr3m/util/typings.ts":
/*!*************************************************!*\
  !*** ./node_modules/@kr3m/kr3m/util/typings.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateParams = exports.cast = exports.firstOfType = exports.isType = exports.getType = exports.settings = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
const dateonly_1 = tslib_1.__importDefault(__webpack_require__(/*! ../models/dateonly */ "./node_modules/@kr3m/kr3m/models/dateonly.ts"));
const timeonly_1 = tslib_1.__importDefault(__webpack_require__(/*! ../models/timeonly */ "./node_modules/@kr3m/kr3m/models/timeonly.ts"));
const date_1 = __webpack_require__(/*! ./date */ "./node_modules/@kr3m/kr3m/util/date.ts");
const object_1 = __webpack_require__(/*! ./object */ "./node_modules/@kr3m/kr3m/util/object.ts");
const array_1 = __webpack_require__(/*! ./array */ "./node_modules/@kr3m/kr3m/util/array.ts");
exports.settings = {
    logInvalidFields: true
};
const baseTypes = {
    'uint->number': true,
    'uint->int': true,
    'int->number': true
};
function isBase(a, b) {
    while (a.slice(-2) == '[]' && b.slice(-2) == '[]') {
        a = a.slice(0, -2);
        b = b.slice(0, -2);
    }
    const base = a + '->' + b;
    if (baseTypes[base])
        return true;
    return false;
}
function getType(value) {
    const valueType = typeof value;
    switch (valueType) {
        case 'number':
            if (value % 1 == 0)
                return value < 0 ? 'int' : 'uint';
            return valueType;
        case 'object':
            if (value === null)
                return 'null';
            if (value instanceof RegExp)
                return 'regexp';
            if (value instanceof Date)
                return 'date';
            if (value instanceof dateonly_1.default)
                return 'dateonly';
            if (value instanceof timeonly_1.default)
                return 'timeonly';
            if (Array.isArray(value)) {
                const allTypes = (0, array_1.getUniques)(value.(v)));
                for (let i = 0; i < allTypes.length; ++i) {
                    for (let j = 0; j < allTypes.length; ++j) {
                        if (isBase(allTypes[i], allTypes[j])) {
                            allTypes.splice(i--, 1);
                            break;
                        }
                    }
                }
                if (allTypes.length == 0)
                    return 'undefined[]';
                if (allTypes.length == 1)
                    return allTypes[0] + '[]';
                return 'any[]';
            }
            return valueType;
        default:
            return valueType;
    }
}
exports.getType = getType;
function isType(value, typeEx) {
    const valueType = getType(value);
    if (valueType == typeEx)
        return true;
    if (isBase(valueType, typeEx))
        return true;
    if (Array.isArray(value) && value.length == 0 && typeEx.slice(-2) == '[]')
        return true;
    return false;
}
exports.isType = isType;
function firstOfType(values, typeEx, skip = 0) {
    for (let i = 0; i < values.length; ++i) {
        if (isType(values[i], typeEx)) {
            if (skip <= 0)
                return values[i];
            --skip;
        }
    }
    return undefined;
}
exports.firstOfType = firstOfType;
function cast(value, toTypeEx) {
    const fromTypeEx = getType(value);
    if (fromTypeEx == toTypeEx)
        return value;
    if (fromTypeEx.slice(-2) == '[]' && toTypeEx.slice(-2) == '[]') {
        const subType = toTypeEx.slice(0, -2);
        value = value.slice();
        for (let i = 0; i < value.length; ++i) {
            value[i] = cast(value[i], subType);
            if (value[i] === undefined)
                return undefined;
        }
        return value;
    }
    switch (toTypeEx) {
        case 'date':
            if (fromTypeEx == 'string')
                return (0, date_1.getDateFromString)(value);
            if (fromTypeEx == 'number')
                return new Date(value);
            return undefined;
        case 'dateonly':
            if (fromTypeEx == 'string' && dateonly_1.default.validatePattern.test(value))
                return new dateonly_1.default(value);
            return undefined;
        case 'timeonly':
            if (fromTypeEx == 'string' && timeonly_1.default.validatePattern.test(value))
                return new timeonly_1.default(value);
            return undefined;
        case 'number':
            switch (fromTypeEx) {
                case 'uint':
                case 'int':
                    return value;
                case 'string':
                    return cast(parseFloat(value), toTypeEx);
            }
            return undefined;
        case 'uint':
            switch (fromTypeEx) {
                case 'number':
                    return value >= 0 ? Math.floor(value) : undefined;
                case 'string':
                    return cast(parseFloat(value), toTypeEx);
            }
            return undefined;
        case 'int':
            switch (fromTypeEx) {
                case 'uint':
                case 'number':
                    return Math.floor(value);
                case 'string':
                    return cast(parseFloat(value), toTypeEx);
            }
            return undefined;
        case 'string':
            return (value && value.toString) ? value.toString() : undefined;
        case 'object':
            return undefined;
    }
    return undefined;
}
exports.cast = cast;
function hasPropperType(value, desired) {
    const metaType = getType(desired);
    switch (metaType) {
        case 'string':
            return getType(value) == desired;
        case 'regexp':
            return desired.test(value);
        case 'function':
            return desired(value);
    }
    if (Array.isArray(desired))
        return desired.includes(value);
    throw new Error('invalid desired parameter type: ' + metaType);
}
function validateParams(params, desired, fallbacks, optionalFields) {
    optionalFields = optionalFields || [];
    if (!params)
        return undefined;
    fallbacks = fallbacks || {};
    let isInvalid = false;
    const result = Array.isArray(params) ? [] : {};
    for (const field in desired) {
        const value = (0, object_1.getProperty)(params, field);
        if (hasPropperType(value, desired[field])) {
            (0, object_1.setProperty)(result, field, value);
            continue;
        }
        if (typeof desired[field] == 'string') {
            const newValue = cast(value, desired[field]);
            if (newValue !== undefined) {
                (0, object_1.setProperty)(result, field, newValue);
                continue;
            }
        }
        if (fallbacks[field] !== undefined) {
            (0, object_1.setProperty)(result, field, fallbacks[field]);
        }
        else if (!optionalFields.includes(field)) {
            if (exports.settings.logInvalidFields)
                console.log(`field ${field} is invalid: desired ${desired[field]} but got ${params[field]}`);
            isInvalid = true;
        }
    }
    return isInvalid ? undefined : result;
}
exports.validateParams = validateParams;


/***/ }),

/***/ "./src/client/clientproxy.ts":
/*!***********************************!*\
  !*** ./src/client/clientproxy.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientProxy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
const eventdispatcher_1 = tslib_1.__importDefault(__webpack_require__(/*! @kr3m/kr3m/models/eventdispatcher */ "./node_modules/@kr3m/kr3m/models/eventdispatcher.ts"));
const device_1 = tslib_1.__importDefault(__webpack_require__(/*! @kr3m/kr3m/http/device */ "./node_modules/@kr3m/kr3m/http/device.ts"));
const version_1 = __webpack_require__(/*! ../version */ "./src/version.ts");
class ClientProxy extends eventdispatcher_1.default {
    constructor() {
        super();
        this.partnerAdsDirty = false;
        this.userActionCount = 0;
        this.listen();
        console.log('PG Version', version_1.VERSION);
    }
    reloadAds() {
        console.log('ClientProxy.reloadAds()');
        this.dispatch('adreload');
        this.partnerAdsDirty = true;
        if (window['kr3mAdClient'])
            window['kr3mAdClient'].reloadAds();
    }
    countUserAction() {
        if (window['properties']['adReloadClicksDeactivate'] == true)
            return;
        ++this.userActionCount;
        let device = '';
        if ((0, device_1.default)().tablet)
            device = 'Tablet';
        else if ((0, device_1.default)().mobile)
            device = 'Mobile';
        else
            device = 'Desktop';
        const reloadCount = parseInt(window['properties']['adReloadClicks' + device] || '10', 10);
        if (this.userActionCount >= reloadCount) {
            this.userActionCount = 0;
            this.reloadAds();
        }
    }
    pollListener(event) {
        const request = event.data;
        if (!request || request.type != 'KR3M_PG3_POLL')
            return;
        const response = {
            height: document.documentElement.getBoundingClientRect().height,
            adsReloaded: this.partnerAdsDirty,
            frameUrl: location.href,
            hash: ''
        };
        this.partnerAdsDirty = false;
        event.source.postMessage(response, '*');
    }
    listen() {
        if (window['attachEvent'])
            window['attachEvent']('onmessage', this.pollListener.bind(this));
        else if (window.addEventListener)
            window.addEventListener('message', this.pollListener.bind(this), false);
        else
            console.error('window object doesn\'t support neither attachEvent nor addEventListener', window);
    }
}
exports.ClientProxy = ClientProxy;
exports["default"] = ClientProxy;


/***/ }),

/***/ "./src/version.ts":
/*!************************!*\
  !*** ./src/version.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DB_VERSION = exports.VERSION = void 0;
exports.VERSION = '3.76.2.0';
exports.DB_VERSION = '3.75.5.0';


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "defaul__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatic;
;
}

var __assig;;;};
;
;
;
;;}
}

var __createBinding = Object.create;
});
};;;
}

/** @deprecated;
}

/** @deprecated;;;}}};
};

var __setModuleDefault = Object.create;
};
;;;;;;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedErro;
;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/***** 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/****** 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/****** 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/****** 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************!*\
  !*** ./src/clientproxy.ts ***!
  \****************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
const clientproxy_1 = tslib_1.__importDefault(__webpack_require__(/*! ./client/clientproxy */ "./src/client/clientproxy.ts"));
window['pg3Proxy'] = new clientproxy_1.default();

})();

/******/ })()
;