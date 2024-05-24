/**
 * FingerprintJS v3.4.2 - Copyright (c) FingerprintJS, Inc, 2023 (https://fingerprint.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */

var FingerprintJS = (function (exports) {
    'use strict';

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

    var __assign = 

    

    

    
    var version = "3.4.2";

        function requestIdleCallbackIfAvailable(fallbackTimeout, deadlineTimeout) {
        if (deadlineTimeout === void 0) { deadlineTimeout = Infinity; }
        var requestIdleCallback = window.requestIdleCallback;
        if (requestIdleCallback) {
            // The function `requestIdleCallback` loses the binding to `window` here.
            // `globalThis` isn't always equal `window` (see https://github.com/fingerprintjs/fingerprintjs/issues/683).
            // Therefore, an error can occur. `call(window,` prevents the error.
            return new Promise(;
        }
        else {
            return wait(Math.min(fallbackTimeout, deadlineTimeout));
        }
    }
        /**
     * Calls a maybe asynchronous function without creating microtasks when the function is synchronous.
     * Catches errors in both cases.
     *
     * If just you run a code like this:
     * ```
     * console.time('Action duration')
     * await action()
     * console.timeEnd('Action duration')
     * ```
     * The synchronous function time can be measured incorrectly because another microtask may run before the `await`
     * returns the control back to the code.
     */
    function awaitIfAsync(action, callback) {
        try {
            var returnedValue = action();
            if (isPromise(returnedValue)) {
                returnedValue.then(function (result) { return callback(true, result); }, ;
            }
            else {
                callback(true, returnedValue);
            }
        }
        catch (error) {
            callback(false, error);
        }
    }
    /**
     * If you run many synchronous tasks without using this function, the JS main loop will be busy and asynchronous tasks
     * (e.g. completing a network request, rendering the page) won't be able to happen.
     * This function allows running many synchronous tasks such way that asynchronous tasks can run too in background.
     */
    function mapWithBreaks(items, callback, loopReleaseInterval) {
        if (loopReleaseInterval === void 0) { loopReleaseInterval = 16; }
        return __awaiter(this, void 0, void 0, function () {
            var results, lastLoopReleaseTime, i, now;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        results = Array(items.length);
                        lastLoopReleaseTime = Date.now();
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < items.length)) return [3 /*break*/, 4];
                        results[i] = callback(items[i], i);
                        now = Date.now();
                        if (!(now >= lastLoopReleaseTime + loopReleaseInterval)) return [3 /*break*/, 3];
                        lastLoopReleaseTime = now;
                        // Allows asynchronous actions and microtasks to happen
                        return [4 /*yield*/, wait(0)];
                    case 2:
                        // Allows asynchronous actions and microtasks to happen
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        ++i;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, results];
                }
            });
        });
    }
    /**
     * Makes the given promise never emit an unhandled promise rejection console warning.
     * The promise will still pass errors to the next promises.
     *
     * Otherwise, promise emits a console warning unless it has a `catch` listener.
     */
    function suppressUnhandledRejectionWarning(promise) {
        promise.then(undefined, function () { return undefined; });
    }

    /*
     * Taken from https://github.com/karanlyons/murmurHash3.js/blob/a33d0723127e2e5415056c455f8aed2451ace208/murmurHash3.js
     */
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
        //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
        //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
        //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
        //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
        //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
        //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
    //
    
    /**
     * Converts an error object to a plain object that can be used with `JSON.stringify`.
     * If you just run `JSON.stringify(error)`, you'll get `'{}'`.
     */
    
    /*
     * This file contains functions to work with pure data only (no browser features, DOM, side effects, etc).
     */
    /**
     * Does the same as Array.prototype.includes but has better typing
     */
        /**
     * Like `!includes()` but with proper typing
     */
        /**
     * Be careful, NaN can return
     */
    function toInt(value) {
        return parseInt(value);
    }
    /**
     * Be careful, NaN can return
     */
                    /**
     * Parses a CSS selector into tag name with HTML attributes.
     * Only single element selector are supported (without operators like space, +, >, etc).
     *
     * Multiple values can be returned for each attribute. You decide how to handle them.
     */
    function parseSimpleCssSelector(selector) {
        var _a, _b;
        var errorMessage = "Unexpected syntax '".concat(selector, "'");
        var tagMatch = /^\s*([a-z-]*)(.*)$/i.exec(selector);
        var tag = tagMatch[1] || undefined;
        var attributes = {};
        var partsRegex = /([.:#][\w-]+|\[.+?\])/gi;
        var addAttribute = 
        for (;;) {
            var match = partsRegex.exec(tagMatch[2]);
            if (!match) {
                break;
            }
            var part = match[0];
            switch (part[0]) {
                case '.':
                    addAttribute('class', part.slice(1));
                    break;
                case '#':
                    addAttribute('id', part.slice(1));
                    break;
                case '[': {
                    var attributeMatch = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(part);
                    if (attributeMatch) {
                        addAttribute(attributeMatch[1], (_b = (_a = attributeMatch[4]) !== null && _a !== void 0 ? _a : attributeMatch[5]) !== null && _b !== void 0 ? _b : '');
                    }
                    else {
                        throw new Error(errorMessage);
                    }
                    break;
                }
                default:
                    throw new Error(errorMessage);
            }
        }
        return [tag, attributes];
    }

            /**
     * Loads the given entropy source. Returns a function that gets an entropy component from the source.
     *
     * The result is returned synchronously to prevent `loadSources` from
     * waiting for one source to load before getting the components from the other sources.
     */
    function loadSource(source, sourceOptions) {
        var sourceLoadPromise = new Promise(function (resolveLoad) {
            var loadStartTime = Date.now();
            // `awaitIfAsync` is used instead of just `await` in order to measure the duration of synchronous sources
            // correctly (other microtasks won't affect the duration).
            awaitIfAsync(source.bind(null, sourceOptions), function () {
                var loadArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    loadArgs[_i] = arguments[_i];
                }
                var loadDuration = Date.now() - loadStartTime;
                // Source loading failed
                if (!loadArgs[0]) {
                    return resolveLoad(;
                }
                var loadResult = loadArgs[1];
                // Source loaded with the final result
                if (isFinalResultLoaded(loadResult)) {
                    return resolveLoad(;
                }
                // Source loaded with "get" stage
                resolveLoad(function () {
                    return new Promise(function (resolveGet) {
                        var getStartTime = Date.now();
                        awaitIfAsync(loadResult, function () {
                            var getArgs = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                getArgs[_i] = arguments[_i];
                            }
                            var duration = loadDuration + Date.now() - getStartTime;
                            // Source getting failed
                            if (!getArgs[0]) {
                                return resolveGet({ error: ensureErrorWithMessage(getArgs[1]), duration: duration });
                            }
                            // Source getting succeeded
                            resolveGet({ value: getArgs[1], duration: duration });
                        });
                    });
                });
            });
        });
        suppressUnhandledRejectionWarning(sourceLoadPromise);
        return 
    }
    /**
     * Loads the given entropy sources. Returns a function that collects the entropy components.
     *
     * The result is returned synchronously in order to allow start getting the components
     * before the sources are loaded completely.
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
    function loadSources(sources, sourceOptions, excludeSources) {
        var includedSources = Object.keys(sources).filter(function (sourceKey) { return excludes(excludeSources, sourceKey); });
        // Using `mapWithBreaks` allows asynchronous sources to complete between synchronous sources
        // and measure the duration correctly
        var sourceGettersPromise = mapWithBreaks(includedSources, ;
        suppressUnhandledRejectionWarning(sourceGettersPromise);
        return function getComponents() {
            return __awaiter(this, void 0, void 0, function () {
                var sourceGetters, componentPromises, componentArray, components, index;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sourceGettersPromise];
                        case 1:
                            sourceGetters = _a.sent();
                            return [4 /*yield*/, mapWithBreaks(sourceGetters, ];
                        case 2:
                            componentPromises = _a.sent();
                            return [4 /*yield*/, Promise.all(componentPromises)
                                // Keeping the component keys order the same as the source keys order
                            ];
                        case 3:
                            componentArray = _a.sent();
                            components = {};
                            for (index = 0; index < includedSources.length; ++index) {
                                components[includedSources[index]] = componentArray[index];
                            }
                            return [2 /*return*/, components];
                    }
                });
            });
        };
    }
    /**
     * Modifies an entropy source by transforming its returned value with the given function.
     * Keeps the source properties: sync/async, 1/2 stages.
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
    function transformSource(source, transformValue) {
        var transformLoadResult = function (loadResult) {
            if (isFinalResultLoaded(loadResult)) {
                return transformValue(loadResult);
            }
            return function () {
                var getResult = loadResult();
                if (isPromise(getResult)) {
                    return getResult.then(transformValue);
                }
                return transformValue(getResult);
            };
        };
        return function (options) {
            var loadResult = source(options);
            if (isPromise(loadResult)) {
                return loadResult.then(transformLoadResult);
            }
            return transformLoadResult(loadResult);
        };
    }

    /*
     * Functions to help with features that vary through browsers
     */
    /**
     * Checks whether the browser is based on Trident (the Internet Explorer engine) without using user-agent.
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
        /**
     * Checks whether the browser is based on EdgeHTML (the pre-Chromium Edge engine) without using user-agent.
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
        /**
     * Checks whether the browser is based on Chromium without using user-agent.
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
        /**
     * Checks whether the browser is based on mobile or desktop Safari without using user-agent.
     * All iOS browsers use WebKit (the Safari engine).
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
        /**
     * Checks whether the WebKit browser is a desktop Safari.
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
        /**
     * Checks whether the browser is based on Gecko (Firefox engine) without using user-agent.
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
        /**
     * Checks whether the browser is based on Chromium version ≥86 without using user-agent.
     * It doesn't check that the browser is based on Chromium, there is a separate function for this.
     */
  }
    /**
     * Checks whether the browser is based on WebKit version ≥606 (Safari ≥12) without using user-agent.
     * It doesn't check that the browser is based on WebKit, there is a separate function for this.
     *
     * @link https://en.wikipedia.org/wiki/Safari_version_history#Release_history Safari-WebKit versions map
     *;
    }
    /**
     * Checks whether the device is an iPad.
     * It doesn't check that the engine is WebKit and that the WebKit isn't desktop.
     */
    function isIPad() {
        // Checked on:
        // Safari on iPadOS (both mobile and desktop modes): 8, 11, 12, 13, 14
        // Chrome on iPadOS (both mobile and desktop modes): 11, 12, 13, 14
        // Safari on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
        // Chrome on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
        // Before iOS 13. Safari tampers the value in "request desktop site" mode since iOS 13.
        if (navigator.platform === 'iPad') {
            return true;
        }
        var s = screen;
        var screenRatio = s.width / s.height;
        return (countTruthy([
            'MediaSource' in window,
            !!Element.prototype.webkitRequestFullscreen,
            // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
            screenRatio > 0.65 && screenRatio < 1.53,
        ]) >= 2);
    }
    /**
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
    ;
  ;
    }
    /**
     * Checks whether the device runs on Android without using user-agent.
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
    function isAndroid() {
        var isItChromium = isChromium();
        var isItGecko = isGecko();
        // Only 2 browser engines are presented on Android.
        // Actually, there is also Android 4.1 browser, but it's not worth detecting it at the moment.
        if (!isItChromium && !isItGecko) {
            return false;
        }
        var w = window;
        // Chrome removes all words "Android" from `navigator` when desktop version is requested
        // Firefox keeps "Android" in `navigator.appVersion` when desktop version is requested
        return (countTruthy([
            'onorientationchange' in w,
            'orientation' in w,
            isItChromium && !('SharedWorker' in w),
            isItGecko && /android/i.test(navigator.appVersion),
        ]) >= 2);
    }

    /**
     * A deep description: https://fingerprint.com/blog/audio-fingerprinting/
     * Inspired by and based on https://github.com/cozylife/audio-fingerprint
     */
    function getAudioFingerprint() {
        var w = window;
        var AudioContext = w.OfflineAudioContext || w.webkitOfflineAudioContext;
        if (!AudioContext) {
            return -2 /* SpecialFingerprint.NotSupported */;
        }
        // In some browsers, audio context always stays suspended unless the context is started in response to a user action
        // (e.g. a click or a tap). It prevents audio fingerprint from being taken at an arbitrary moment of time.
        // Such browsers are old and unpopular, so the audio fingerprinting is just skipped in them.
        // See a similar case explanation at https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
        if (doesCurrentBrowserSuspendAudioContext()) {
            return -1 /* SpecialFingerprint.KnownToSuspend */;
        }
        var hashFromIndex = 4500;
        var hashToIndex = 5000;
        var context = new AudioContext(1, hashToIndex, 44100);
        var oscillator = context.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.value = 10000;
        var compressor = context.createDynamicsCompressor();
        compressor.threshold.value = -50;
        compressor.knee.value = 40;
        compressor.ratio.value = 12;
        compressor.attack.value = 0;
        compressor.release.value = 0.25;
        oscillator.connect(compressor);
        compressor.connect(context.destination);
        oscillator.start(0);
        var _a = startRenderingAudio(context), renderPromise = _a[0], finishRendering = _a[1];
        var fingerprintPromise = renderPromiex)); }, function (error) {
            if (error.name === "timeout" /* InnerErrorName.Timeout */ || error.name === "suspended" /* InnerErrorName.Suspended */) {
                return -3 /* SpecialFingerprint.Timeout */;
            }
            throw error;
        });
        // Suppresses the console error message in case when the fingerprint fails before requested
        suppressUnhandledRejectionWarning(fingerprintPromise);
             };
    }
    /**
     * Checks if the current browser is known to always suspend audio context
    ;
    }
    /**
     * Starts rendering the audio context.
     * When the returned function is called, the render process starts finishing.
     */
    function startRenderingAudio(context) {
        var renderTryMaxCount = 3;
        var renderRetryDelay = 500;
        var runningMaxAwaitTime = 500;
        var runningSufficientTime = 5000;
        var finined; };
        var resultPromise = new Promise(function (resolve, reject) {
            var isFinalized = false;
            var renderTryCount = 0;
            var startedRunningAt = 0;
            context.oncomplete = function (event) { return resolve(event.renderedBuffer); };
            var startRunningTi      };
            var tryRender = function () {
                try {
                    var renderingPromise = context.startRendering();
                    // `context.startRendering` has two APIs: Promise and callback, we check that it's really a promise just in case
                    if (isPromise(renderingPromise)) {
                        // Suppresses all unhadled rejections in case of scheduled redundant retries after successful rendering
                        suppressUnhandledRejectionWarning(renderingPromise);
                    }
                    switch (context.state) {
                        case 'running':
                            startedRunningAt = Date.now();
                            if (isFinalized) {
                                startRunningTimeout();
                            }
                            break;
                        // Sometimes the audio context doesn't start after calling `startRendering` (in addition to the cases where
                        // audio context doesn't start at all). A known case is starting an audio context when the browser tab is in
                        // background on iPhone. Retries usually help in this case.
                        case 'suspended':
                            // The audio context can reject starting until the tab is in foreground. Long fingerprint duration
                            // in background isn't a problem, therefore the retry attempts don't count in background. It can lead to
                            // a situation when a fingerprint takes very long time and finishes successfully. FYI, the audio context
                            // can be suspended when `document.hidden === false` and start running after a retry.
                            if (!document.hidden) {
                                renderTryCount++;
                            }
                            if (isFinalized && renderTryCount >= renderTryMaxCount) {
                                reject(makeInnerError("suspended" /* InnerErrorName.Suspended */));
                            }
                            else {
                                setTimeout(tryRender, renderRetryDelay);
                            }
                            break;
                    }
                }
                catch (error) {
                    reject(error);
                }
            };
            tryRender();
            finalize = function () {
                if (!isFinalized) {
                    isFinalized = true;
                    if (startedRunningAt > 0) {
                        startRunningTimeout();
                    }
                }
            };
        });
        return [resultPromise, finalize];
  ;
  ;
    }

    /**
     * Creates and keeps an invisible iframe while the given function runs.
     * The given function is called when the iframe is loaded and has a body.
     * The iframe allows to measure DOM sizes inside itself.
     *
     * Notice: passing an initial HTML code doesn't work in IE.
     *
     * Warning for package users:
     * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
     */
    function withIframe(action, initialHtml, domPollInterval) {
        var _a, _b, _c;
        if (domPollInterval === void 0) { domPollInterval = 50; }
        return __awaiter(this, void 0, void 0, function () {
            var d, iframe;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        d = document;
                        _d.label = 1;
                    case 1:
                        if (!!d.body) return [3 /*break*/, 3];
                        return [4 /*yield*/, wait(domPollInterval)];
                    case 2:
                        _d.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        iframe = d.createElement('iframe');
                        _d.label = 4;
                    case 4:
                        _d.trys.push([4, , 10, 11]);
                        return [4 /*yield*/, new Promise(function (_resolve, _reject) {
                                var isComplete = false;
                                var re      };
                                var r      };
                                iframe.onload = resolve;
                                iframe.onerror = reject;
                                var style = iframe.style;
                                style.setProperty('display', 'block', 'important'); // Required for browsers to calculate the layout
                                style.position = 'absolute';
                                style.top = '0';
                                style.left = '0';
                                style.visibility = 'hidden';
                                if (initialHtml && 'srcdoc' in iframe) {
                                    iframe.srcdoc = initialHtml;
                                }
                                else {
                                    iframe.src = 'about:blank';
                                }
                                d.body.appendChild(iframe);
                                // WebKit in WeChat doesn't fire the iframe's `onload` for some reason.
                                // This code checks for the loading state manually.
                                // See https://github.com/fingerprintjs/fingerprintjs/issues/645
                                var checkReadyState = function () {
                                    var _a, _b;
                                    // The ready state may never become 'complete' in Firefox despite the 'load' event being fired.
                                    // So an infinite setTimeout loop can happen without this check.
                                    // See https://github.com/fingerprintjs/fingerprintjs/pull/716#issuecomment-986898796
                                    if (isComplete) {
                                        return;
                                    }
                                    // Make sure iframe.contentWindow and iframe.contentWindow.document are both loaded
                                    // The contentWindow.document can miss in JSDOM (https://github.com/jsdom/jsdom).
                                    if (((_b = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.readyState) === 'complete') {
                                        resolve();
                                    }
                                    else {
                                        setTimeout(checkReadyState, 10);
                                    }
                                };
                                checkReadyState();
                            })];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6:
                        if (!!((_b = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body)) return [3 /*break*/, 8];
                        return [4 /*yield*/, wait(domPollInterval)];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 6];
                    case 8: return [4 /*yield*/, action(iframe, iframe.contentWindow)];
                    case 9: return [2 /*return*/, _d.sent()];
                    case 10:
                        (_c = iframe.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(iframe);
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Creates a DOM element that matches the given selector.
     * Only single element selector are supported (without operators like space, +, >, etc).
     */
    function selectorToElement(selector) {
        var _a = parseSimpleCssSelector(selector), tag = _a[0], attributes = _a[1];
        var element = document.createElement(tag !== null && tag !== void 0 ? tag : 'div');
        for (var _i = 0, _b = Object.keys(attributes); _i < _b.length; _i++) {
            var name_1 = _b[_i];
            var value = attributes[name_1].join(' ');
            // Changing the `style` attribute can cause a CSP error, therefore we change the `style.cssText` property.
            // https://github.com/fingerprintjs/fingerprintjs/issues/733
            if (name_1 === 'style') {
                addStyleString(element.style, value);
            }
            else {
                element.setAttribute(name_1, value);
            }
        }
        return element;
    }
    /**
     * Adds CSS styles from a string in such a way that doesn't trigger a CSP warning (unsafe-inline or unsafe-eval)
     */
    function addStyleString(style, source) {
        // We don't use `style.cssText` because browsers must block it when no `unsafe-eval` CSP is presented: https://csplite.com/csp145/#w3c_note
        // Even though the browsers ignore this standard, we don't use `cssText` just in case.
        for (var _i = 0, _a = source.split(';'); _i < _a.length; _i++) {
            var property = _a[_i];
            var match = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(property);
            if (match) {
                var name_2 = match[1], value = match[2], priority = match[4];
                style.setProperty(name_2, value, priority || ''); // The last argument can't be undefined in IE11
            }
        }
    }

    // We use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated.
    var testString = 'mmMwWLliI0O&1';
    // We test using 48px font size, we may use any size. I guess larger the better.
    var textSize = '48px';
    // A font will be compared against all the three default fonts.
    // And if for any default fonts it doesn't match, then that font is available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];
    var fontList = [
        // This is android-specific font from "Roboto" family
        'sans-serif-thin',
        'ARNO PRO',
        'Agency FB',
        'Arabic Typesetting',
        'Arial Unicode MS',
        'AvantGarde Bk BT',
        'BankGothic Md BT',
        'Batang',
        'Bitstream Vera Sans Mono',
        'Calibri',
        'Century',
        'Century Gothic',
        'Clarendon',
        'EUROSTILE',
        'Franklin Gothic',
        'Futura Bk BT',
        'Futura Md BT',
        'GOTHAM',
        'Gill Sans',
        'HELV',
        'Haettenschweiler',
        'Helvetica Neue',
        'Humanst521 BT',
        'Leelawadee',
        'Letter Gothic',
        'Levenim MT',
        'Lucida Bright',
        'Lucida Sans',
        'Menlo',
        'MS Mincho',
        'MS Outlook',
        'MS Reference Specialty',
        'MS UI Gothic',
        'MT Extra',
        'MYRIAD PRO',
        'Marlett',
        'Meiryo UI',
        'Microsoft Uighur',
        'Minion Pro',
        'Monotype Corsiva',
        'PMingLiU',
        'Pristina',
        'SCRIPTINA',
        'Segoe UI Light',
        'Serifa',
        'SimHei',
        'Small Fonts',
        'Staccato222 BT',
        'TRAJAN PRO',
        'Univers CE 55 Medium',
        'Vrinda',
        'ZWAdobeF',
    ];
    // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
    function getFonts() {
        // Running the script in an iframe makes it not affect the page look and not be affected by the page CSS. See:
        // https://github.com/fingerprintjs/fingerprintjs/issues/592
        // https://github.com/fingerprintjs/fingerprintjs/issues/628
        return withIframe(function (_, _a) {
            var document = _a.document;
            var holder = document.body;
            holder.style.fontSize = textSize;
            // div to load spans for the default fonts and the fonts to detect
            var spansContainer = document.createElement('div');
            var defaultWidth = {};
            var defaultHeight = {};
            // creates a span where the fonts will be loaded
            var creat      };
            // creates a span and load the font to detect and a base font for fallback
            var createSpanWith      };
            // creates spans for the base fonts and adds them to baseFontsDiv
            var initializeBaseFonts      };
            // creates spans for the fonts to detect and adds them to fontsDiv
            var initializeFonts      };
            // checks if a font is available
            var isFontAvai      };
            // create spans for base fonts
            var baseFontsSpans = initializeBaseFontsSpans();
            // create spans for fonts to detect
            var fontsSpans = initializeFontsSpans();
            // add all the spans to the DOM
            holder.appendChild(spansContainer);
            // get the default width for the three base fonts
            for (var index = 0; index < baseFonts.length; index++) {
                defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
                defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
            }
            // check available fonts
            return fontListnt]); });
        });
   ;
    }

    // https://www.browserleaks.com/canvas#how-does-it-work
    function getCanvasFingerprint() {
        var winding = false;
        var geometry;
        var text;
        var _a = makeCanvasContext(), canvas = _a[0], context = _a[1];
        if (!isSupported(canvas, context)) {
            geometry = text = ''; // The value will be 'unsupported' in v3.4
        }
        else {
            winding = doesSupportWinding(context);
            renderTextImage(canvas, context);
            var textImage1 = canvasToString(canvas);
            var textImage2 = canvasToString(canvas); // It's slightly faster to double-encode the text image
            // Some browsers add a noise to the canvas: https://github.com/fingerprintjs/fingerprintjs/issues/791
            // The canvas is excluded from the fingerprint in this case
            if (textImage1 !== textImage2) {
                geometry = text = 'unstable';
            }
            else {
                text = textImage1;
                // Text is unstable:
                // https://github.com/fingerprintjs/fingerprintjs/issues/583
                // https://github.com/fingerprintjs/fingerprintjs/issues/103
                // Therefore it's extracted into a separate image.
                renderGeometryImage(canvas, context);
                geometry = canvasToString(canvas);
            }
        }
        return { winding: winding, geometry: geometry, text: text };
  ;
  ;
  ;
    }
    function renderTextImage(canvas, context) {
        // Resizing the canvas cleans it
        canvas.width = 240;
        canvas.height = 60;
        context.textBaseline = 'alphabetic';
        context.fillStyle = '#f60';
        context.fillRect(100, 1, 62, 20);
        context.fillStyle = '#069';
        // It's important to use explicit built-in fonts in order to exclude the affect of font preferences
        // (there is a separate entropy source for them).
        context.font = '11pt "Times New Roman"';
        // The choice of emojis has a gigantic impact on rendering performance (especially in FF).
        // Some newer emojis cause it to slow down 50-200 times.
        // There must be no text to the right of the emoji, see https://github.com/fingerprintjs/fingerprintjs/issues/574
        // A bare emoji shouldn't be used because the canvas will change depending on the script encoding:
        // https://github.com/fingerprintjs/fingerprintjs/issues/66
        // Escape sequence shouldn't be used too because Terser will turn it into a bare unicode.
        var printedText = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835) /* 😃 */);
        context.fillText(printedText, 2, 15);
        context.fillStyle = 'rgba(102, 204, 0, 0.2)';
        context.font = '18pt Arial';
        context.fillText(printedText, 4, 45);
    }
    function renderGeometryImage(canvas, context) {
        // Resizing the canvas cleans it
        canvas.width = 122;
        canvas.height = 110;
        // Canvas blending
        // https://web.archive.org/web/20170826194121/http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
        // http://jsfiddle.net/NDYV8/16/
        context.globalCompositeOperation = 'multiply';
        for (var _i = 0, _a = [
            ['#f2f', 40, 40],
            ['#2ff', 80, 40],
            ['#ff2', 60, 80],
        ]; _i < _a.length; _i++) {
            var _b = _a[_i], color = _b[0], x = _b[1], y = _b[2];
            context.fillStyle = color;
            context.beginPath();
            context.arc(x, y, 40, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }
        // Canvas winding
        // https://web.archive.org/web/20130913061632/http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
        // http://jsfiddle.net/NDYV8/19/
        context.fillStyle = '#f9c';
        context.arc(60, 60, 60, 0, Math.PI * 2, true);
        context.arc(60, 60, 20, 0, Math.PI * 2, true);
        context.fill('evenodd');L();
    }

    /**
     * This is a crude and primitive touch screen detection. It's not possible to currently reliably detect the availability
     * of a touch screen with a JS, without actually subscribing to a touch event.
     *
     * @see http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
     * @see https://github.com/Modernizr/Modernizr/issues/548
   };
    }

    function getOsCpu() {
        return navigator.oscpu;
ult;
pth;
    }

    function getDeviceMemory() {
        // `navigator.deviceMemory` is a string containing a number in some unidentified cases
        return replaceNaN(toFloat(navigator.deviceMemory), undefined);
    }

    function getScreenResolution() {
        var s = screen;
        // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
        // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
        // Some browsers even return  screen resolution as not numbers.
        var parseD, null); };
        var dimensions = [parseDimension(s.width), parseDimension(s.height)];
        dimensions.sort().reverse();
        return dimensions;
    }

    var screenFrameCheckInterval = 2500;
    var roundingPrecision = 10;
    // The type is readonly to protect from unwanted mutations
    var screenFrameBackup;
    var screenFrameSizeTimeoutId;
    /**
     * Starts watching the screen frame size. When a non-zero size appears, the size is saved and the watch is stopped.
     * Later, when `getScreenFrame` runs, it will return the saved non-zero size if the current size is null.
     *
     * This trick is required to mitigate the fact that the screen frame turns null in some cases.
     * See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
 e();
    }
    function getScreenFrame() {
        var _this = this;
        watchScreenFrame();
        return function () { return __awaiter(_this, void 0, void 0, function () {
            var frameSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frameSize = getCurrentScreenFrame();
                        if (!isFrameSizeNull(frameSize)) return [3 /*break*/, 2];
                        if (screenFrameBackup) {
                            return [2 /*return*/, __spreadArray([], screenFrameBackup, true)];
                        }
                        if (!getFullscreenElement()) return [3 /*break*/, 2];
                        // Some browsers set the screen frame to zero when programmatic fullscreen is on.
                        // There is a chance of getting a non-zero frame after exiting the fullscreen.
                        // See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
                        return [4 /*yield*/, exitFullscreen()];
                    case 1:
                        // Some browsers set the screen frame to zero when programmatic fullscreen is on.
                        // There is a chance of getting a non-zero frame after exiting the fullscreen.
                        // See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
                        _a.sent();
                        frameSize = getCurrentScreenFrame();
                        _a.label = 2;
                    case 2:
                        if (!isFrameSizeNull(frameSize)) {
                            screenFrameBackup = frameSize;
                        }
                        return [2 /*return*/, frameSize];
                }
            });
        }); };
    }
    /**
     * Sometimes the available screen resolution changes a bit, e.g. 1900x1440 → 1900x1439. A possible reason: macOS Dock
     * shrinks to fit more icons when there is too little space. The rounding is used to mitigate the difference.
     */
    function getRoundedScreenFrame() {
        var _this = this;
        var screenFrameGetter = getScreenFrame();
        return function () { return __awaiter(_this, void 0, void 0, function () {
            var frameSize, processSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, screenFrameGetter()];
                    case 1:
                        frameSize = _a.sent();
                        pecision)); };
                        // It might look like I don't know about `for` and `map`.
                        // In fact, such code is used to avoid TypeScript issues without using `as`.
                        return [2 /*return*/, [processSize(frameSize[0]), processSize(frameSize[1]), processSize(frameSize[2]), processSize(frameSize[3])]];
                }
            });
        });     rn trefined);
    }

    function getTimezone() {
        var _a;
        var DateTimeFormat = (_a = window.Intl) === null || _a === void 0 ? void 0 : _a.DateTimeFormat;
        if (DateTimeFormat) {
            var timezone = new DateTimeFormat().resolvedOptions().timeZone;
            if (timezone) {
                return timezone;
            }
        }
        // For browsers that don't support timezone names
        // The minus is intentional because the JS offset is opposite to the real offset
        var offset = -getTimezoneOffset();
        return "UTC".concat(offset >= 0 ? '+' : '').concat(Math.abs(offseset()));
    }

    function getSessionStorage() {
        try {
            return !!window.sessionStorage;
        }
        catch (error) {
            /* SecurityError when referencing it means it exists */
            return true;
        }
    }

    // https://bugzilla.mozilla.org/show_bug.cgi          atabase;
    }

    function getCpuClass() {
        return navigator.cpuClalatfor || '';
    }

    /**
     * Checks for browser-specific (not engine specific) global variables to tell browsers with the same engine apart.
     * Only somewhat popular browsers are considere.sort();
    }

    /**
     * navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking
     * cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past with
     * site-specific exceptions. Don't rely on it.
     *
     * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js Taken from he       }
    }

    /**
     * Only single element selector are supported (no operators like space, +, >, etc).
     * `embed` and `position: fixed;` will be considered as blocked anyway because it always has no offsetParent.
     * Avoid `iframe` and anything with `[src=]` because they produce excess HTTP requests.
     *
     * The "inappropriate" selectors are obfuscated. See https://github.com/fingerprintjs/fingerprintjs/issues/734.
     * A function is used instead of a plain object to help tree-shaking.
     *
     * The function code is generated automatically. See docs/content_blockers.md to learn how to make the list.
     */
    function getFilters() {
        var fromB64 = atob; // Just for better minification
        return {
            abpIndo: [
                '#Iklan-Melayang',
                '#Kolom-Iklan-728',
                '#SidebarIklan-wrapper',
                '[title="ALIENBOLA" i]',
                fromB64('I0JveC1CYW5uZXItYWRz'),
            ],
            abpvn: ['.quangcao', '#mobileCatfish', fromB64('LmNsb3NlLWFkcw=='), '[id^="bn_bottom_fixed_"]', '#pmadv'],
            adBlockFinland: [
                '.mainostila',
                fromB64('LnNwb25zb3JpdA=='),
                '.ylamainos',
                fromB64('YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd'),
                fromB64('YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd'),
            ],
            adBlockPersian: [
                '#navbar_notice_50',
                '.kadr',
                'TABLE[width="140px"]',
                '#divAgahi',
                fromB64('YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd'),
            ],
            adBlockWarningRemoval: [
                '#adblock-honeypot',
                '.adblocker-root',
                '.wp_adblock_detect',
                fromB64('LmhlYWRlci1ibG9ja2VkLWFk'),
                fromB64('I2FkX2Jsb2NrZXI='),
            ],
            adGuardAnnoyances: [
                '.hs-sosyal',
                '#cookieconsentdiv',
                'div[class^="app_gdpr"]',
                '.as-oil',
                '[data-cypress="soft-push-notification-modal"]',
            ],
            adGuardBase: [
                '.BetterJsPopOverlay',
                fromB64('I2FkXzMwMFgyNTA='),
                fromB64('I2Jhbm5lcmZsb2F0MjI='),
                fromB64('I2NhbXBhaWduLWJhbm5lcg=='),
                fromB64('I0FkLUNvbnRlbnQ='),
            ],
            adGuardChinese: [
                fromB64('LlppX2FkX2FfSA=='),
                fromB64('YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd'),
                '#widget-quan',
                fromB64('YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd'),
                fromB64('YVtocmVmKj0iLjE5NTZobC5jb20vIl0='),
            ],
            adGuardFrench: [
                '#pavePub',
                fromB64('LmFkLWRlc2t0b3AtcmVjdGFuZ2xl'),
                '.mobile_adhesion',
                '.widgetadv',
                fromB64('LmFkc19iYW4='),
            ],
            adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
            adGuardJapanese: [
                '#kauli_yad_1',
                fromB64('YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0='),
                fromB64('Ll9wb3BJbl9pbmZpbml0ZV9hZA=='),
                fromB64('LmFkZ29vZ2xl'),
                fromB64('Ll9faXNib29zdFJldHVybkFk'),
            ],
            adGuardMobile: [
                fromB64('YW1wLWF1dG8tYWRz'),
                fromB64('LmFtcF9hZA=='),
                'amp-embed[type="24smi"]',
                '#mgid_iframe1',
                fromB64('I2FkX2ludmlld19hcmVh'),
            ],
            adGuardRussian: [
                fromB64('YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0='),
                fromB64('LnJlY2xhbWE='),
                'div[id^="smi2adblock"]',
                fromB64('ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd'),
                '#psyduckpockeball',
            ],
            adGuardSocial: [
                fromB64('YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0='),
                fromB64('YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0='),
                '.etsy-tweet',
                '#inlineShare',
                '.popup-social',
            ],
            adGuardSpanishPortuguese: ['#barraPublicidade', '#Publicidade', '#publiEspecial', '#queTooltip', '.cnt-publi'],
            adGuardTrackingProtection: [
                '#qoo-counter',
                fromB64('YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=='),
                fromB64('YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0='),
                fromB64('YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=='),
                '#top100counter',
            ],
            adGuardTurkish: [
                '#backkapat',
                fromB64('I3Jla2xhbWk='),
                fromB64('YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0='),
                fromB64('YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd'),
                fromB64('YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ=='),
            ],
            bulgarian: [fromB64('dGQjZnJlZW5ldF90YWJsZV9hZHM='), '#ea_intext_div', '.lapni-pop-over', '#xenium_hot_offers'],
            easyList: [
                '.yb-floorad',
                fromB64('LndpZGdldF9wb19hZHNfd2lkZ2V0'),
                fromB64('LnRyYWZmaWNqdW5reS1hZA=='),
                '.textad_headline',
                fromB64('LnNwb25zb3JlZC10ZXh0LWxpbmtz'),
            ],
            easyListChina: [
                fromB64('LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=='),
                fromB64('LmZyb250cGFnZUFkdk0='),
                '#taotaole',
                '#aafoot.top_box',
                '.cfa_popup',
            ],
            easyListCookie: [
                '.ezmob-footer',
                '.cc-CookieWarning',
                '[data-cookie-number]',
                fromB64('LmF3LWNvb2tpZS1iYW5uZXI='),
                '.sygnal24-gdpr-modal-wrap',
            ],
            easyListCzechSlovak: [
                '#onlajny-stickers',
                fromB64('I3Jla2xhbW5pLWJveA=='),
                fromB64('LnJla2xhbWEtbWVnYWJvYXJk'),
                '.sklik',
                fromB64('W2lkXj0ic2tsaWtSZWtsYW1hIl0='),
            ],
            easyListDutch: [
                fromB64('I2FkdmVydGVudGll'),
                fromB64('I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=='),
                '.adstekst',
                fromB64('YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0='),
                '#semilo-lrectangle',
            ],
            easyListGermany: [
                '#SSpotIMPopSlider',
                fromB64('LnNwb25zb3JsaW5rZ3J1ZW4='),
                fromB64('I3dlcmJ1bmdza3k='),
                fromB64('I3Jla2xhbWUtcmVjaHRzLW1pdHRl'),
                fromB64('YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0='),
            ],
            easyListItaly: [
                fromB64('LmJveF9hZHZfYW5udW5jaQ=='),
                '.sb-box-pubbliredazionale',
                fromB64('YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd'),
                fromB64('YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd'),
                fromB64('YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ=='),
            ],
            easyListLithuania: [
                fromB64('LnJla2xhbW9zX3RhcnBhcw=='),
                fromB64('LnJla2xhbW9zX251b3JvZG9z'),
                fromB64('aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd'),
                fromB64('aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd'),
                fromB64('aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd'),
            ],
            estonian: [fromB64('QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==')],
            fanboyAnnoyances: ['#ac-lre-player', '.navigate-to-top', '#subscribe_popup', '.newsletter_holder', '#back-top'],
            fanboyAntiFacebook: ['.util-bar-module-firefly-visible'],
            fanboyEnhancedTrackers: [
                '.open.pushModal',
                '#issuem-leaky-paywall-articles-zero-remaining-nag',
                '#sovrn_container',
                'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
                '.BlockNag__Card',
            ],
            fanboySocial: ['#FollowUs', '#meteored_share', '#social_follow', '.article-sharer', '.community__social-desc'],
            frellwitSwedish: [
                fromB64('YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=='),
                fromB64('YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=='),
                'article.category-samarbete',
                fromB64('ZGl2LmhvbGlkQWRz'),
                'ul.adsmodern',
            ],
            greekAdBlock: [
                fromB64('QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd'),
                fromB64('QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=='),
                fromB64('QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd'),
                'DIV.agores300',
                'TABLE.advright',
            ],
            hungarian: [
                '#cemp_doboz',
                '.optimonk-iframe-container',
                fromB64('LmFkX19tYWlu'),
                fromB64('W2NsYXNzKj0iR29vZ2xlQWRzIl0='),
                '#hirdetesek_box',
            ],
            iDontCareAboutCookies: [
                '.alert-info[data-block-track*="CookieNotice"]',
                '.ModuleTemplateCookieIndicator',
                '.o--cookies--container',
                '#cookies-policy-sticky',
                '#stickyCookieBar',
            ],
            icelandicAbp: [fromB64('QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==')],
            latvian: [
                fromB64('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0O' +
                    'iA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0='),
                fromB64('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6I' +
                    'DMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ=='),
            ],
            listKr: [
                fromB64('YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0='),
                fromB64('I2xpdmVyZUFkV3JhcHBlcg=='),
                fromB64('YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=='),
                fromB64('aW5zLmZhc3R2aWV3LWFk'),
                '.revenue_unit_item.dable',
            ],
            listeAr: [
                fromB64('LmdlbWluaUxCMUFk'),
                '.right-and-left-sponsers',
                fromB64('YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=='),
                fromB64('YVtocmVmKj0iYm9vcmFxLm9yZyJd'),
                fromB64('YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd'),
            ],
            listeFr: [
                fromB64('YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=='),
                fromB64('I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=='),
                fromB64('YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0='),
                '.site-pub-interstitiel',
                'div[id^="crt-"][data-criteo-id]',
            ],
            officialPolish: [
                '#ceneo-placeholder-ceneo-12',
                fromB64('W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd'),
                fromB64('YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=='),
                fromB64('YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=='),
                fromB64('ZGl2I3NrYXBpZWNfYWQ='),
            ],
            ro: [
                fromB64('YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd'),
                fromB64('YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd'),
                fromB64('YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0='),
                fromB64('YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd'),
                'a[href^="/url/"]',
            ],
            ruAd: [
                fromB64('YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd'),
                fromB64('YVtocmVmKj0iLy91dGltZy5ydS8iXQ=='),
                fromB64('YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0='),
                '#pgeldiz',
                '.yandex-rtb-block',
            ],
            thaiAds: [
                'a[href*=macau-uta-popup]',
                fromB64('I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=='),
                fromB64('LmFkczMwMHM='),
                '.bumq',
                '.img-kosana',
            ],
            webAnnoyancesUltralist: [
                '#mod-social-share-2',
                '#social-tools',
                fromB64('LmN0cGwtZnVsbGJhbm5lcg=='),
                '.zergnet-recommend',
                '.yt.btn-link.btn-md.btn',
            ],
        };
    }
    /**
     * The order of the returned array means nothing (it's always sorted alphabetically).
     *
     * Notice that the source is slightly unstable.
     * Safari provides a 2-taps way to disable all content blockers on a page temporarily.
     * Also content blockers can be disabled permanently for a domain, but it requires 4 taps.
     * So empty array shouldn't be treated as "no blockers", it should be treated as "no signal".
     * If you are a website owner, don't make your visitors want to disable content blockers.
     */
    function getDomBlockers(_a) {
        var _b = _a === void 0 ? {} : _a, debug = _b.debug;
        return __awaiter(this, void 0, void 0, function () {
            var filters, filterNames, allSelectors, blockedSelectors, activeBlockers;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!isApplicable()) {
                            return [2 /*return*/, undefined];
                        }
                        filters = getFilters();
                        filterNames = Object.keys(filters);
                        allSelectors = (_c = []).concat.apply(_c, filterNames.map(function (filterName) { return filters[filterName]; }));
                        return [4 /*yield*/, getBlockedSelectors(allSelectors)];
                    case 1:
                        blockedSelectors = _d.sent();
                        if (debug) {
                            printDebug(filters, blockedSelectors);
                        }
                        activeBlockers = filt             });
                        activeBlockers.sort();
                        return [2 /*return*/, activeBlockers];
                }
            });
       droid();
    }
    function getBlockedSelectors(selectors) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var d, root, elements, blockedSelectors, i, element, holder, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        d = document;
                        root = d.createElement('div');
                        elements = new Array(selectors.length);
                        blockedSelectors = {} // Set() isn't used just in case somebody need older browser support
                        ;
                        forceShow(root);
                        // First create all elements that can be blocked. If the DOM steps below are done in a single cycle,
                        // browser will alternate tree modification and layout reading, that is very slow.
                        for (i = 0; i < selectors.length; ++i) {
                            element = selectorToElement(selectors[i]);
                            if (element.tagName === 'DIALOG') {
                                element.show();
                            }
                            holder = d.createElement('div') // Protects from unwanted effects of `+` and `~` selectors of filters
                            ;
                            forceShow(holder);
                            holder.appendChild(element);
                            root.appendChild(holder);
                            elements[i] = element;
                        }
                        _b.label = 1;
                    case 1:
                        if (!!d.body) return [3 /*break*/, 3];
                        return [4 /*yield*/, wait(50)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        d.body.appendChild(root);
                        try {
                            // Then check which of the elements are blocked
                            for (i = 0; i < selectors.length; ++i) {
                                if (!elements[i].offsetParent) {
                                    blockedSelectors[selectors[i]] = true;
                                }
                            }
                        }
                        finally {
                            // Then remove the elements
                            (_a = root.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(root);
                        }
                        return [2 /*return*/, blockedSelectors];
                }
            });
       rtant');
    }
    function printDebug(filters, blockedSelectors) {
        var message = 'DOM blockers debug:\n```';
        for (var _i = 0, _a = Object.keys(filters); _i < _a.length; _i++) {
            var filterName = _a[_i];
            message += "\n".concat(filterName, ":");
            for (var _b = 0, _c = filters[filterName]; _b < _c.length; _b++) {
                var selector = _c[_b];
                message += "\n  ".concat(blockedSelectors[selector] ? '🚫' : '➡️', " ").concat(selector);
            }
        }
        // console.log is ok here because it's under a debug clause
        // eslint-disable-next-line no-console
        console.log("".concat(message, "\n```"));
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut
     */
    function getColorGamut() {
        // rec2020 includes p3 and p3 includes srgb
        for (var _i = 0, _a = ['rec2020', 'p3', 'srgb']; _i < _a.length; _i++) {
            var gamut = _a[_i];
            if (matchMedia("(color-gamut: ".concat(gamut, ")")).matches) {
                return gamut;
            }
        }
        return undefined;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors
     */
    function areColorsInverted() {
        if (doesMatch$4('inverted')) {
            return true;
        }
        if (doesMatch$4('none')) {
            return false;
        }
        return undefined;
    }
    function doesMatch$4(value) {
        return matchMedia("(inverted-colors: ".concat(value, ")")).matches;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors
     */
    function areColorsForced() {
        if (doesMatch$3('active')) {
            return true;
        }
        if (doesMatch$3('none')) {
            return false;
        }
        return undefined;
    }
    function doesMatch$3(value) {
        return matchMedia("(forced-colors: ".concat(value, ")")).matches;
    }

    var maxValueToCheck = 100;
    /**
     * If the display is monochrome (e.g. black&white), the value will be ≥0 and will mean the number of bits per pixel.
     * If the display is not monochrome, the returned value will be 0.
     * If the browser doesn't support this feature, the returned value will be undefined.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome
     */
    function getMonochromeDepth() {
        if (!matchMedia('(min-monochrome: 0)').matches) {
            // The media feature isn't supported by the browser
            return undefined;
        }
        // A variation of binary search algorithm can be used here.
        // But since expected values are very small (≤10), there is no sense in adding the complexity.
        for (var i = 0; i <= maxValueToCheck; ++i) {
            if (matchMedia("(max-monochrome: ".concat(i, ")")).matches) {
                return i;
            }
        }
        throw new Error('Too high value');
    }

    /**
     * @see https://www.w3.org/TR/mediaqueries-5/#prefers-contrast
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pre  return undefined;
    }
    function doesMatch$2(value) {
        return matchMedia("(prefers-contrast: ".concat(value, ")")).matches;
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
     */
    function isMotionReduced() {
        if (doesMatch$1('reduce')) {
            return true;
        }
        if (doesMatch$1('no-preference')) {
            return false;
        }
        return undefined;
    }
    function doesMatch$1(value) {
        return matchMedia("(prefers-reduced-motion: ".concat(value, ")")).matches;
    }

    /**
     * @see https://www.w3.org/TR/mediaqueries-5/#  relue, ")")).matches;
    }

    var M = Math; // To reduce the minified code size
    var fallbackFn = function () { return 0; };
    /**
     * @see https://gitlab.torproject.org/legacy/trac/-/issues/13018
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=531915
     */
    function getMathFingerprint() {
        // Native operations
        var acos = M.acos || fallbackFn;
        var acosh = M.acosh || fallbackFn;
        var asin = M.asin || fallbackFn;
        var asinh = M.asinh || fallbackFn;
        var atanh = M.atanh || fallbackFn;
        var atan = M.atan || fallbackFn;
        var sin = M.sin || fallbackFn;
        var sinh = M.sinh || fallbackFn;
        var cos = M.cos || fallbackFn;
        var cosh = M.cosh || fallbackFn;
        var tan = M.tan || fallbackFn;
        var tanh = M.tanh || fallbackFn;
        var exp = M.exp || fallbackFn;
        var expm1 = M.expm1 || fallbackFn;
        var log1p = M.log1p || fallbackFn;
        // Operation polyurn M.pow(M.PI, value);rt(value * value - 1));rt(value * value + 1));ue) / (1 - value)) / 2- 1 / M.exp(value) / 2 1 / M.exp(value)) / 2;eturn M.exp(value) - 1(M.exp(2 * value) + 1);eturn M.log(1 + value); };
        // Note: constant values are empirical
        return {
            acos: acos(0.123124234234234242),
            acosh: acosh(1e308),
            acoshPf: acoshPf(1e154),
            asin: asin(0.123124234234234242),
            asinh: asinh(1),
            asinhPf: asinhPf(1),
            atanh: atanh(0.5),
            atanhPf: atanhPf(0.5),
            atan: atan(0.5),
            sin: sin(-1e300),
            sinh: sinh(1),
            sinhPf: sinhPf(1),
            cos: cos(10.000000000123),
            cosh: cosh(1),
            coshPf: coshPf(1),
            tan: tan(-1e300),
            tanh: tanh(1),
            tanhPf: tanhPf(1),
            exp: exp(1),
            expm1: expm1(1),
            expm1Pf: expm1Pf(1),
            log1p: log1p(10),
            log1pPf: log1pPf(10),
            powPI: powPI(-100),
        };
    }

    /**
     * We use m or w because these two characters take up the maximum width.
     * Also there are a couple of ligatures.
     */
    var defaultText = 'mmMwWLliI0fiflO&1';
    /**
     * Settings of text blocks to measure. The keys are random but persistent words.
     */
    var presets = {
        /**
         * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
         * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
         */
        default: [],
        /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
        apple: [{ font: '-apple-system-body' }],
        /** User can change it in desktop Chrome and desktop Firefox. */
        serif: [{ fontFamily: 'serif' }],
        /** User can change it in desktop Chrome and desktop Firefox. */
        sans: [{ fontFamily: 'sans-serif' }],
        /** User can change it in desktop Chrome and desktop Firefox. */
        mono: [{ fontFamily: 'monospace' }],
        /**
         * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
         * The height can be 0 in Chrome on a retina display.
         */
        min: [{ fontSize: '1px' }],
        /** Tells one OS from another in desktop Chrome. */
        system: [{ fontFamily: 'system-ui' }],
    };
    /**
     * The result is a dictionary of the width of the text samples.
     * Heights aren't included because they give no extra entropy and are unstable.
     *
     * The result is very stable in IE 11, Edge 18 and Safari 14.
     * The result changes when the OS pixel density changes in Chromium 87. The real pixel density is required to solve,
     * but seems like it's impossible: https://stackoverflow.com/q/1713771/1118709.
     * The "min" and the "mono" (only on Windows) value may change when the page is zoomedrn sizes;
        });
    }
    /**
     * Creates a DOM environment that provides the most natural font available, including Android OS font.
     * Measurements of the elements are zoom-independent.
     * Don't put a content to measure inside an absolutely positioned element.
     */
    function withNaturalFonts(action, containerWidthPx) {
        if (containerWidthPx === void 0) { containerWidthPx = 4000; }
        /*
         * Requirements for Android Chrome to apply the system font size to a text inside an iframe:
         * - The iframe mustn't have a `display: none;` style;
         * - The text mustn't be positioned absolutely;
         * - The text block must be wide enough.
         *   2560px on some devices in portrait orientation for the biggest font size option (32px);
         * - There must be much enough text to form a few lines (I don't know the exact numbers);
         * - The text must have the `text-size-adjust: none` style. Otherwise the text will scale in "Desktop site" mode;
         *
         * Requirements for Android Firefox to apply the system font size to a text inside an iframe:
         * - The iframe document must have a header: `<meta name="viewport" content="width=device-width, initial-scale=1" />`.
         *   The only way to set it is to use the `srcdoc` attribute of the iframe;
         * - The iframe content must get loaded before adding extra content with JavaScript;
         *
         * https://example.com as the iframe target always inherits Android font settings so it can be used as a reference.
         *
         * Observations on how page zoom affects the measurements:
         * - macOS Safari 11.1, 12.1, 13.1, 14.0: zoom reset + offsetWidth = 100% reliable;
         * - macOS Safari 11.1, 12.1, 13.1, 14.0: zoom reset + getBoundingClientRect = 100% reliable;
         * - macOS Safari 14.0: offsetWidth = 5% fluctuation;
         * - macOS Safari 14.0: getBoundingClientRect = 5% fluctuation;
         * - iOS Safari 9, 10, 11.0, 12.0: haven't found a way to zoom a page (pinch doesn't change layout);
         * - iOS Safari 13.1, 14.0: zoom reset + offsetWidth = 100% reliable;
         * - iOS Safari 13.1, 14.0: zoom reset + getBoundingClientRect = 100% reliable;
         * - iOS Safari 14.0: offsetWidth = 100% reliable;
         * - iOS Safari 14.0: getBoundingClientRect = 100% reliable;
         * - Chrome 42, 65, 80, 87: zoom 1/devicePixelRatio + offsetWidth = 1px fluctuation;
         * - Chrome 42, 65, 80, 87: zoom 1/devicePixelRatio + getBoundingClientRect = 100% reliable;
         * - Chrome 87: offsetWidth = 1px fluctuation;
         * - Chrome 87: getBoundingClientRect = 0.7px fluctuation;
         * - Firefox 48, 51: offsetWidth = 10% fluctuation;
         * - Firefox 48, 51: getBoundingClientRect = 10% fluctuation;
         * - Firefox 52, 53, 57, 62, 66, 67, 68, 71, 75, 80, 84: offsetWidth = width 100% reliable, height 10% fluctuation;
         * - Firefox 52, 53, 57, 62, 66, 67, 68, 71, 75, 80, 84: getBoundingClientRect = width 100% reliable, height 10%
         *   fluctuation;
         * - Android Chrome 86: haven't found a way to zoom a page (pinch doesn't change layout);
         * - Android Firefox 84: font size in accessibility settings changes all the CSS sizes, but offsetWidth and
         *   getBoundingClientRect keep measuring with regular units, so the size reflects the font size setting and doesn't
         *   fluctuate;
         * - IE 11, Edge 18: zoom 1/devicePixelRatio + offsetWidth = 100% reliable;
         * - IE 11, Edge 18: zoom 1/devicePixelRatio + getBoundingClientRect = reflects the zoom level;
         * - IE 11, Edge 18: offsetWidth = 100% reliable;
         * - IE 11, Edge 18: getBoundingClientRect = 100% reliable;
         */
        return withIframe(function (_, iframeWindow) {
            var iframeDocument = iframeWindow.document;
            var iframeBody = iframeDocument.body;
            var bodyStyle = iframeBody.style;
            bodyStyle.width = "".concat(containerWidthPx, "px");
            bodyStyle.webkitTextSizeAdjust = bodyStyle.textSizeAdjust = 'none';
            // See the big comment above
            if (isChromium()) {
                iframeBody.style.zoom = "".concat(1 / iframeWindow.devicePixelRatio);
            }
            else if (isWebKit()) {
                iframeBody.style.zoom = 'reset';
            }
            // See the big comment above
            var linesOfText = iframeDocument.createElement('div');
            linesOfText.textContent = __spreadArray([], Array((containerWidction () { return 'word'; }).join(' ');
            iframeBody.appendChild(linesOfText);
            return action(iframeDocument, iframeBody);
        }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
    }

    /**
     * @see Credits: https://stackoverflow.com/a/49267844
     */
    function getVideoCard() {
        var _a;
        var canvas = document.createElement('canvas');
        var gl = (_a = canvas.getContext('webgl')) !== null && _a !== void 0 ? _a : canvas.getContext('experimental-webgl');
        if (gl && 'getExtension' in gl) {
            var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                return {
                    vendor: (gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || '').toString(),
                    renderer: (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '').toString(),
                };
            }
        }
        rtor.pdfViewerEnabled;
    }

    /**
     * Unlike most other architectures, on x86/x86-64 when floating-point instructions
     * have no NaN arguments, but produce NaN output, the output NaN has sign bit set.
     * We use it to distinguish x86/x86-64 from other architectures, by doing subtraction
     * of two infinities (must produce NaN per IEEE 754 standard).
     *
     * See https://codebrowser.bddppq.com/pytorch/pytorch/third_party/XNNPACK/src/init.c.html#79
     */
    function getArchitecture() {
        var f = new Float32Array(1);
        var u8 = new Uint8Array(f.buffer);
        f[0] = Infinity;
        f[0] = f[0] - f[0];
        return u8[3];
    }

    /**
     * The list of entropy sources used to make visitor identifiers.
     *
     * This value isn't restricted by Semantic Versioning, i.e. it may be changed without bumping minor or major version of
     * this package.
     *
     * Note: Rollup and Webpack are smart enough to remove unused properties of this object during tree-shaking, so there is
     * no need to export the sources individually.
     */
    var sources = {
        // READ FIRST:
        // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
        // to learn how entropy source works and how to make your own.
        // The sources run in this exact order.
        // The asynchronous sources are at the start to run in parallel with other sources.
        fonts: getFonts,
        domBlockers: getDomBlockers,
        fontPreferences: getFontPreferences,
        audio: getAudioFingerprint,
        screenFrame: getRoundedScreenFrame,
        osCpu: getOsCpu,
        languages: getLanguages,
        colorDepth: getColorDepth,
        deviceMemory: getDeviceMemory,
        screenResolution: getScreenResolution,
        hardwareConcurrency: getHardwareConcurrency,
        timezone: getTimezone,
        sessionStorage: getSessionStorage,
        localStorage: getLocalStorage,
        indexedDB: getIndexedDB,
        openDatabase: getOpenDatabase,
        cpuClass: getCpuClass,
        platform: getPlatform,
        plugins: getPlugins,
        canvas: getCanvasFingerprint,
        touchSupport: getTouchSupport,
        vendor: getVendor,
        vendorFlavors: getVendorFlavors,
        cookiesEnabled: areCookiesEnabled,
        colorGamut: getColorGamut,
        invertedColors: areColorsInverted,
        forcedColors: areColorsForced,
        monochrome: getMonochromeDepth,
        contrast: getContrastPreference,
        reducedMotion: isMotionReduced,
        hdr: isHDR,
        math: getMathFingerprint,
        videoCard: getVideoCard,
        pdfViewerEnabled: isPdfViewerEnabled,
        architecture: getArchitecture,
    };
    /**
     * Loads the built-in entropy sources.
     * Returns a function that collects the entropy components to make the visiources, options, []);
    }

    var commentTemplate = '$ if upgrade to Pro: https://fpjs.dev/pro';
    function getConfidence(components) {
        var openConfidenceScore = getOpenConfidenceScore(components);
        var proConfidenceScore = deriveProConfidenceScore(openConfidenceScore);
        return { score: openConfidenceScore, comment: commentTemplate.replace(/\$/g, "".concat(proConfidenceScore)) };
    }
    function getOpenConfidenceScore(components) {
        // In order to calculate the true probability of the visitor identifier being correct, we need to know the number of
        // website visitors (the higher the number, the less the probability because the fingerprint entropy is limited).
        // JS agent doesn't know the number of visitors, so we can only do an approximate assessment.
        if (isAndroid()) {
            return 0.4;
        }
        // Safari (mobile and desktop)
        if (isWebKit()) {
            return isDesktopSafari() ? 0.5 : 0.3;
        }
        var platform = components.platform.value || '';
        // Windows
        if (/^Win/.test(platform)) {
            // The score is greater than on macOS because of the higher variety of devices running Windows.
            // Chrome provides more entropy than Firefox according too
            // https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22platform%22%3A%7B%22%24in%22%3A%5B%22Windows%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-11%22%2C%22dateEnd%22%3A%222020-10%22%2C%22segments%22%3A%22-1000%22%7D
            // So we assign the same score to them.
            return 0.6;
        }
        // macOS
        if (/^Mac/.test(platform)) {
            // Chrome provides more entropy than Safari and Safari provides more entropy than Firefox.
            // Chrome is more popular than Safari and Safari is more popular than Firefox according to
            // https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22platform%22%3A%7B%22%24in%22%3A%5B%22Mac%20OS%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-11%22%2C%22dateEnd%22%3A%222020-10%22%2C%22segments%22%3A%22-1000%22%7D
            // So we assign the same score to them.
            return 0.5;
        }
        // Another platform, e.g. a desktop Linux. It's rare, so it should be pretty unique.
  idenceScore, 0.0001);
    }

    function componentsToCanonicalString(components) {
        var result = '';
        for (var _i = 0, _a = Object.keys(components).sort(); _i < _a.length; _i++) {
            var componentKey = _a[_i];
            var component = components[componentKey];
            var value = component.error ? 'error' : JSON.stringify(component.value);
            result += "".concat(result ? '|' : '').concat(componentKey.replace(/([:|\\])/g, '\\$1'), ":").concat(value);
        }
     valulString(components));
    }
    /**
     * Makes a GetResult implementation that calculates the visitor id hash on demand.
     * Designed for optimisation.
     */
    function makeLazyGetResult(components) {
        var visitorIdCache;
        // This function runs very fast, so there is no need to make it lazy
        var confidence = getConfidence(components);
        // A plain class isn't used because its getters and setters aren't enumerable.
        returnsitorIdCache;
             = visitorId;
            },
            confidence: confidence,
            components: components,
            version: version,
        };
    }
    /**
     * A delay is required to ensure consistent entropy components.
     * See https://github.com/fingerprintjs/fingerprintjs/issues/254
     * and https://github.com/fingerprintjs/fingerprintjs/issues/307
     * and https://github.com/fingerprintjs/fingerprintjs/commit/945633e7c5f67ae38eb0fea37349712f0e669b18
     */
    function prepareForSources(delayFallback) {
        if (delayFallback === void 0) { delayFallback = 50; }
        // A proper deadline is unknown. Let it be twice the fallback timeout so that both cases have the same average time.
        return requestIdleCallbackIfAvailable(delayFallback, delayFallback * 2);
    }
    /**
     * The function isn't exported from the index file to not allow to call it without `load()`.
     * The hiding gives more freedom for future non-breaking updates.
     *
     * A factory function is used instead of a class to shorten the attribute names in the minified code.
     * Native private class fields could've been used, but TypeScript doesn't allow them with `"target": "es5"`.
     */
    function makeAgent(getComponents, debug) {
        var creationTime = Date.now();
        return {
            get: function (options) {
                return __awaiter(this, void 0, void 0, function () {
                    var startTime, components, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                startTime = Date.now();
                                return [4 /*yield*/, getComponents()];
                            case 1:
                                components = _a.sent();
                                result = makeLazyGetResult(components);
                                if (debug || (options === null || options === void 0 ? void 0 : options.debug)) {
                                    // console.log is ok here because it's under a debug clause
                                    // eslint-disable-next-line no-console
                                    console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(result.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(startTime - creationTime, "\nvisitorId: ").concat(result.visitorId, "\ncomponents: ").concat(componentsToDebugString(components), "\n```"));
                                }
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
    }
    /**
     * Sends an unpersonalized AJAX request to collect installation statistics
     */
    function monitor() {
        // The FingerprintJS CDN (https://github.com/fingerprintjs/cdn) replaces `window.__fpjs_d_m` with `true`
        if (window.__fpjs_d_m || Math.random() >= 0.001) {
            return;
        }
        try {
            var request = new XMLHttpRequest();
            request.open('get', "https://m1.openfpcdn.io/fingerprintjs/v".concat(version, "/npm-monitoring"), true);
            request.send();
        }
        catch (error) {
            // console.error is ok here because it's an unexpected error handler
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }
    /**
     * Builds an instance of Agent and waits a delay required for a proper operation.
     */
    function load(_a) {
        var _b = _a === void 0 ? {} : _a, delayFallback = _b.delayFallback, debug = _b.debug, _c = _b.monitoring, monitoring = _c === void 0 ? true : _c;
        return __awaiter(this, void 0, void 0, function () {
            var getComponents;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (monitoring) {
                            monitor();
                        }
                        return [4 /*yield*/, prepareForSources(delayFallback)];
                    case 1:
                        _d.sent();
                        getComponents = loadBuiltinSources({ debug: debug });
                        return [2 /*return*/, makeAgent(getComponents, debug)];
                }
            });
        });
    }

    // The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).
    // It should contain all the public exported values.
    var index = { load: load, hashComponents: hashComponents, componentsToDebugString: componentsToDebugString };
    // The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
    /** Not documented, out of Semantic Versioning, usage is at your own risk */
    var murmurX64Hash128 = x64hash128;

    exports.componentsToDebugString = componentsToDebugString;
    exports.default = index;
    exports.getFullscreenElement = getFullscreenElement;
    exports.getScreenFrame = getScreenFrame;
    exports.hashComponents = hashComponents;
    exports.isAndroid = isAndroid;
    exports.isChromium = isChromium;
    exports.isDesktopSafari = isDesktopSafari;
    exports.isEdgeHTML = isEdgeHTML;
    exports.isGecko = isGecko;
    exports.isTrident = isTrident;
    exports.isWebKit = isWebKit;
    exports.load = load;
    exports.loadSources = loadSources;
    exports.murmurX64Hash128 = murmurX64Hash128;
    exports.prepareForSources = prepareForSources;
    exports.sources = sources;
    exports.transformSource = transformSource;
    exports.withIframe = withIframe;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
