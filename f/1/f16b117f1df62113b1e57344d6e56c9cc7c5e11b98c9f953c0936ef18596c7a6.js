var __spreadArray = (this && this.__spreadArray) || 
var CXBootstrapLoader = /** @class */ (function () {
    function CXBootstrapLoader(debugLog, urls) {
        var _a;
        this.scriptTagNode = (_a = document.currentScript) !== null && _a !== void 0 ? _a : document.querySelector('script[src*="/bootstrapper"]');
        this.debugLog = debugLog;
        this.urls = urls;
    }
    CXBootstrapLoader.prototype.load = function (options) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var _k = this.urls, eventHost = _k.eventHost, scriptSrc = _k.scriptSrc, pageUrl = _k.pageUrl;
        var cxBootInitUrl = "".concat(scriptSrc, "/cxo/cx-bootstrapper-init");
        var configParams = this.getBootstrapperSrcParams();
        if (typeof options !== 'undefined' && options !== null) {
            this.debugLog(['Loading from Brightcove options: ', options], 'debug');
            configParams.groupId = (_a = options.gid) !== null && _a !== void 0 ? _a : configParams.groupId;
            configParams.videoContainer = (_b = options.vc) !== null && _b !== void 0 ? _b : configParams.videoContainer;
            configParams.baseId = (_c = options.bid) !== null && _c !== void 0 ? _c : configParams.baseId;
            configParams.esm6Mod = (_d = options.esm6Mod) !== null && _d !== void 0 ? _d : configParams.esm6Mod;
            configParams.storeId = (_e = options.storeId) !== null && _e !== void 0 ? _e : configParams.storeId;
            configParams.marketplaceId = (_f = options.marketplaceId) !== null && _f !== void 0 ? _f : configParams.marketplaceId;
            configParams.bundleId = (_g = options.bundleId) !== null && _g !== void 0 ? _g : configParams.bundleId;
            if (typeof options.prebidInventoryAccessConfig !== 'undefined' && options.prebidInventoryAccessConfig !== null) {
                window['cxBidderParams'] = options.prebidInventoryAccessConfig;
            }
        }
        var loadEvent = {
            playerMode: 'BOOTSTRAP',
            groupId: (configParams === null || configParams === void 0 ? void 0 : configParams.groupId) || 'none',
            hasAdkId: false,
            eventType: 'BOOTSTRAP',
            subType: 'LOADED',
            eventOriginSource: 'PLATFORM',
            componentSource: (configParams.videoContainer) ? 'OVERLAY' : (configParams.htmlContainer) ? 'SLIDESHOW' : 'none',
            data: configParams,
            domain: new URL(pageUrl).hostname,
            pageUrl: pageUrl,
            sessionId: null,
            userAgent: window.navigator.userAgent,
            regionInfo: null,
            deviceInfo: null,
            eventOrder: -1,
            activeWindow: !document.hidden
        };
        var loadEventString = JSON.stringify(loadEvent);
        this.debugLog(["Sending bootstrap load event to: ".concat(eventHost), loadEventString], 'debug');
        fetch("".concat(eventHost, "/api/v1/player-event"), {
            method: 'POST',
            body: loadEventString
        }).catch(function (e) {
            if (!e.response) {
                _this.debugLog("Error contacting server: ".concat(eventHost, "/api/v1/player-event"), 'debug');
            }
            else {
                _this.debugLog("Error sending PlayerEvent: ".concat(e), 'debug');
            }
        });
        if (document.querySelectorAll("script[src=\"".concat(cxBootInitUrl, "\"]")).length === 0) {
            var cxBootReference = document.createElement('script');
            cxBootReference.setAttribute('async', '');
            cxBootReference.setAttribute('type', 'text/javascript');
            cxBootReference.setAttribute('src', cxBootInitUrl);
            cxBootReference.setAttribute('id', 'cx-bootstrapper');
            if (typeof configParams.groupId !== 'undefined' && configParams.groupId !== null) {
                cxBootReference.setAttribute('data-group-id', configParams.groupId);
            }
            if (typeof configParams.videoContainer !== 'undefined' && configParams.videoContainer !== null) {
                cxBootReference.setAttribute('data-video-container', configParams.videoContainer);
            }
            if (typeof configParams.htmlContainer !== 'undefined' && configParams.htmlContainer !== null) {
                cxBootReference.setAttribute('data-html-container', configParams.htmlContainer);
            }
            if (typeof configParams.attachToTop !== 'undefined' && configParams.attachToTop !== null) {
                cxBootReference.setAttribute('data-attach-to-top', configParams.attachToTop);
            }
            if (typeof configParams.baseId !== 'undefined' && configParams.baseId !== null) {
                cxBootReference.setAttribute('data-base-id', configParams.baseId);
            }
            if (typeof configParams.esm6Mod !== 'undefined' && configParams.esm6Mod !== null) {
                cxBootReference.setAttribute('data-esm6-mod', configParams.esm6Mod);
            }
            if (typeof configParams.continuousLoad !== 'undefined' && configParams.continuousLoad !== null) {
                cxBootReference.setAttribute('data-continuous-load', configParams.continuousLoad);
            }
            document.head.appendChild(cxBootReference);
        }
        else if (typeof configParams.groupId !== 'undefined' && configParams.groupId !== null
            && ((typeof configParams.videoContainer !== 'undefined' && configParams.videoContainer !== null) || (typeof configParams.htmlContainer !== 'undefined' && configParams.htmlContainer !== null))) {
            var gid_1 = configParams.groupId;
            var bid_1 = configParams.baseId || null;
            var esm6Mod_1 = (typeof configParams.esm6Mod === 'string' && configParams.esm6Mod === 'false') ? false : Boolean(configParams.esm6Mod);
            var video_containers_1 = (_h = configParams.videoContainer) === null || _h === void 0 ? void 0 : _h.split('|');
            var html_containers_1 = (_j = configParams.htmlContainer) === null || _j === void 0 ? void 0 : _j.split('|');
            var containerDescriptorEntries_1 = [];
            video_containers_1 === null || video_containers_1 === void 0 ? void 0 : video_containers_1.forEach(function (containerId) {
                containerDescriptorEntries_1.push({
                    product: 'overlay',
                    containerIdentifier: containerId
                });
            });
            html_containers_1 === null || html_containers_1 === void 0 ? void 0 : html_containers_1.forEach(;
            var initCount_1 = 0;
            var initializeCXBoot_1 = setInterval(function () {
                _this.debugLog("Bootstrapper Init script already loaded. Attempting to create new Bootstrapper object: ".concat(gid_1, ", ").concat(bid_1, ", ").concat(esm6Mod_1, ", ").concat(video_containers_1, ", ").concat(html_containers_1));
                if (typeof window['CXBootstrapper'] !== 'undefined' && window['CXBootstrapper'] !== null) {
                    var cxbc = new CXBootstrapper(gid_1, bid_1, esm6Mod_1);
                    cxbc.initCX({ containerDescriptors: containerDescriptorEntries_1 });
                    clearInterval(initializeCXBoot_1);
                    _this.debugLog("CXBootstrapper object found on page and initialized with configuration: ".concat(gid_1, ", ").concat(bid_1, ", ").concat(esm6Mod_1, ", ").concat(video_containers_1, ", ").concat(html_containers_1));
                }
                else if (++initCount_1 < 5) {
                    _this.debugLog("CXBootstrapper object NOT found on page - Will try again.");
                }
                else {
                    _this.debugLog("CXBootstrapper object NOT found on page - Will not try again.");
                }
            }, 1000);
        }
        else {
            this.debugLog("Bootstrapper Init script already loaded. No Group-Id or Video-Container available on new script load.");
        }
        //Used to load IVT protection scripts (fouanalytics) - No longer needed
        //this.loadIVTScripts();
    };
    CXBootstrapLoader.prototype.loadIVTScripts = function () {
        var fouanalyticsScript = document.createElement('script');
        fouanalyticsScript.setAttribute('async', '');
        fouanalyticsScript.setAttribute('data-cfasync', 'false');
        fouanalyticsScript.setAttribute('src', 'https://api.fouanalytics.com/api/init-3392tkd9ir9ggbv3f0mu.js');
        document.head.appendChild(fouanalyticsScript);
        var fouanalyticsNoScript = document.createElement('noscript');
        var fouanalyticsPixel = document.createElement('img');
        fouanalyticsPixel.setAttribute('src', 'https://api.fouanalytics.com/api/noscript-3392tkd9ir9ggbv3f0mu.gif');
        fouanalyticsNoScript.appendChild(fouanalyticsPixel);
        document.head.appendChild(fouanalyticsNoScript);
    };
    CXBootstrapLoader.prototype.getBootstrapperSrcParams = function () {
        var returnParams = {
            groupId: null,
            videoContainer: null,
            htmlContainer: null,
            attachToTop: null,
            baseId: null,
            esm6Mod: null,
            continuousLoad: null,
            marketplaceId: null,
            storeId: null,
            bundleId: null
        };
        var cxBootstrapperScript = this.scriptTagNode;
        if ((typeof cxBootstrapperScript !== 'undefined' && cxBootstrapperScript !== null)) {
            var cxBootstrapperParams = cxBootstrapperScript.src.split('?');
            var cxBootstrapperDefinedProperties = (cxBootstrapperParams.length > 1) ? cxBootstrapperParams[1].split('&') : [];
            var findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('group-id=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.groupId = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('data-group-id') != null) {
                returnParams.groupId = cxBootstrapperScript.getAttribute('data-group-id');
            }
            findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('video-container=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.videoContainer = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('data-video-container') != null) {
                returnParams.videoContainer = cxBootstrapperScript.getAttribute('data-video-container');
            }
            findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('html-container=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.htmlContainer = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('data-html-container') != null) {
                returnParams.htmlContainer = cxBootstrapperScript.getAttribute('data-html-container');
            }
            findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('attach-to-top=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.attachToTop = findProp.substring(findProp.indexOf('=') + 1);
            }
            findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('base-id=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.baseId = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('data-base-id') != null) {
                returnParams.baseId = cxBootstrapperScript.getAttribute('data-base-id');
            }
            findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('bid=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.baseId = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('data-bid') != null) {
                returnParams.baseId = cxBootstrapperScript.getAttribute('data-bid');
            }
            findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('esm6-mod=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.esm6Mod = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('data-esm6-mod') != null) {
                returnParams.esm6Mod = cxBootstrapperScript.getAttribute('data-esm6-mod');
            }
            findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('continuous-load=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.continuousLoad = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('continuous-load') != null) {
                returnParams.continuousLoad = cxBootstrapperScript.getAttribute('continuous-load');
            }
            findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('marketplace-id=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.marketplaceId = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('marketplace-id') != null) {
                returnParams.marketplaceId = cxBootstrapperScript.getAttribute('marketplace-id');
            }
            findProp = cxBootstrapperDefinedProperties.find(function (prop) { return prop.indexOf('store-id=') !== -1; });
            if (typeof findProp !== 'undefined') {
                returnParams.storeId = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('store-id') != null) {
                returnParams.storeId = cxBootstrapperScript.getAttribute('store-id');
            }
            findProp = cxBootstrapperDefinedProperties.find(;
            if (typeof findProp !== 'undefined') {
                returnParams.bundleId = findProp.substring(findProp.indexOf('=') + 1);
            }
            else if (cxBootstrapperScript.getAttribute('bundle-id') != null) {
                returnParams.bundleId = cxBootstrapperScript.getAttribute('bundle-id');
            }
        }
        return returnParams;
    };
    return CXBootstrapLoader;
}());
function identifyRootURL() {
    var windowLocationURL = window.location.href, windowProtocol = window.top.location.protocol;
    if (window.self !== window.top) {
        try {
            windowLocationURL = window.top.location.href;
            windowProtocol = window.top.location.protocol;
        }
        catch (err) {
        }
    }
    if (windowLocationURL.includes('%')) {
        windowLocationURL = decodeURI(windowLocationURL);
        windowLocationURL = (windowLocationURL.includes('%')) ? decodeURIComponent(windowLocationURL) : windowLocationURL;
    }
    return { windowLocationURL: windowLocationURL, windowProtocol: windowProtocol };
}
function generateDebugLog(shouldDebug) {
    var debugLog = function (l, type) {
        if (type === void 0) { type = 'boot'; }
        var logArr = typeof l === 'string' ? [l] : __spreadArray([], l, true);
        logArr[0] = "cxbl." + logArr[0];
        if (type === 'boot') {
            console.log.apply(console, __spreadArray(['%cCX%cLOGS%cBOOTL%c%s',
                'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: #ffb700; color:rgba(255,255,255,1); font-weight:bold;',
                'font-size:0; color:rgba(255,255,255,0); background-color:rgba(255,255,255,0);',
                'background-color: #0952c5; color: #FFF; padding: 1px 4px; border-radius: 3px; display: inline-block; font-weight:bold;',
                'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: initial; color:initial; font-weight:normal;',
                logArr.splice(0, 1)[0]], logArr, false));
        }
        else if (shouldDebug) {
            if (type === 'selenium') {
                console.log.apply(console, __spreadArray(['%cCX%cSELENIUM%c%s',
                    'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: #ffb700; color:rgba(255,255,255,1); font-weight:bold;',
                    'background-color: rgba(0,0,0, 1); color: rgba(255,255,255, .75); padding: 1px 4px; border-radius: 3px; display: inline-block; font-weight:bold;',
                    'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: initial; color:initial; font-weight:normal;',
                    logArr.splice(0, 1)[0]], logArr, false));
            }
            else {
                console.log.apply(console, __spreadArray(['%cCX%cLOGS%cBOOTL_DEBUG%c%s',
                    'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: #ffb700; color:rgba(255,255,255,1); font-weight:bold;',
                    'font-size:0; color:rgba(255,255,255,0); background-color:rgba(255,255,255,0);',
                    'background-color: #0952c5; color: #FFF; padding: 1px 4px; border-radius: 3px; display: inline-block; font-weight:bold;',
                    'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: initial; color:initial; font-weight:normal;',
                    logArr.splice(0, 1)[0]], logArr, false));
            }
        }
    };
    return debugLog;
}
(function selfLoader() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var defaultUrls = {
        local: {
            scriptSrc: "http://localhost:3001",
            eventHost: "https://dev-events.qortex.ai"
        },
        dev: {
            scriptSrc: "//dev.qortex.ai",
            eventHost: "https://dev-events.qortex.ai"
        },
        stage: {
            scriptSrc: "//stage.qortex.ai",
            eventHost: "https://stg-events.qortex.ai"
        },
        demand: {
            scriptSrc: "https://tags.qortex.ai",
            eventHost: "https://events.qortex.ai"
        }
    };
    var continueBootLoad = true;
    var _k = identifyRootURL(), windowLocationURL = _k.windowLocationURL, windowProtocol = _k.windowProtocol;
    var shouldDebugLog = (windowLocationURL.indexOf('cxtier') !== -1 || windowLocationURL.indexOf('cxLogMode') !== -1) ? true : false;
    var debugLog = generateDebugLog(shouldDebugLog);
    debugLog(['Found window url: \n', windowLocationURL]);
    var windowDebugObject = window['cxInjectorWindowDebug'];
    if (typeof windowDebugObject === 'undefined') {
        try {
            windowDebugObject = window.top['cxInjectorWindowDebug'];
        }
        catch (err) { }
    }
    var tierParam = (windowDebugObject === null || windowDebugObject === void 0 ? void 0 : windowDebugObject.cxtier) || ((_c = (_b = (_a = windowLocationURL.substring(windowLocationURL.indexOf('?') + 1).split('&').filter() === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.split('=')) === null || _c === void 0 ? void 0 : _c[1]) || null;
    var envTier = (_e = (_d = tierParam === null || tierParam === void 0 ? void 0 : tierParam.split('|')) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.toLowerCase();
    var subtier = (_f = tierParam === null || tierParam === void 0 ? void 0 : tierParam.split('|')) === null || _f === void 0 ? void 0 : _f[1];
    var envUrlObject = defaultUrls[envTier];
    if (envUrlObject) {
        debugLog("cxbl.selfLoading querystring cxtier found: ".concat(tierParam), 'debug');
        var base = (subtier) ? "http://".concat(subtier, ":3001") : envUrlObject.scriptSrc;
        envUrlObject.scriptSrc = base.indexOf('http') > -1 ? base : windowProtocol + base;
        var cxtier = envUrlObject.scriptSrc;
        //Find CX bootstrapper
        var cxBootstrapperScript_1 = (_g = document.currentScript) !== null && _g !== void 0 ? _g : null;
        if (cxBootstrapperScript_1 === null) {
            var bootstrapperScripts = document.querySelectorAll('script[src*="/bootstrapper"]');
            if (bootstrapperScripts.length > 0) {
                bootstrapperScripts.forEach(function (s) {
                    if ((typeof cxBootstrapperScript_1 === 'undefined' || cxBootstrapperScript_1 === null) && (s.src.indexOf('catapultx.com') !== -1 || s.src.indexOf('qortex.ai') !== -1 || s.src.indexOf('localhost') !== -1)) {
                        cxBootstrapperScript_1 = s;
                    }
                });
            }
        }
        debugLog(['cxbl.selfLoading bootstrapper script', cxBootstrapperScript_1], 'debug');
        if (typeof cxBootstrapperScript_1 !== 'undefined' && cxBootstrapperScript_1 !== null && cxBootstrapperScript_1.src.indexOf(cxtier) !== 0) {
            var bootstrapperSrc = cxtier + cxBootstrapperScript_1.src.substring(cxBootstrapperScript_1.src.indexOf('/bootstrapper'));
            var cxBootstrapLoadClone_1 = document.createElement('script');
            Array.from(cxBootstrapperScript_1.attributes).forEach(;
            cxBootstrapLoadClone_1.setAttribute('async', '');
            cxBootstrapLoadClone_1.setAttribute('type', 'text/javascript');
            cxBootstrapLoadClone_1.setAttribute('src', bootstrapperSrc);
            var bootstrapLoaderParent = cxBootstrapperScript_1.parentElement;
            bootstrapLoaderParent.removeChild(cxBootstrapperScript_1);
            bootstrapLoaderParent.appendChild(cxBootstrapLoadClone_1);
            continueBootLoad = false;
            debugLog(['cxbl.selfLoading Bootstrap loader removed from page and replaced with bootstrap loader with src: ', bootstrapperSrc, cxBootstrapLoadClone_1], 'debug');
        }
    }
    else {
        envUrlObject = defaultUrls.demand;
        var bootScript = (_j = ((_h = document.currentScript) !== null && _h !== void 0 ? _h : document.querySelector('script[src*="/bootstrapper"]'))) !== null && _j !== void 0 ? _j : null;
        if (bootScript !== null) {
            var bootScriptSrc = (bootScript.src.substring(0, bootScript.src.indexOf('/bootstrapper')));
            if (bootScriptSrc.includes('localhost') || bootScriptSrc.includes('192.168')) {
                envUrlObject = defaultUrls.local;
            }
            else if (bootScriptSrc.includes('dev')) {
                envUrlObject = defaultUrls.dev;
            }
            else if (bootScriptSrc.includes('stage')) {
                envUrlObject = defaultUrls.stage;
            }
            envUrlObject.scriptSrc = bootScriptSrc;
        }
        debugLog(["cxbl.selfLoading using bootloader script urls:", envUrlObject], 'debug');
    }
    if (continueBootLoad) {
        debugLog("cxbl.selfLoading CX bootstrap loader....");
        envUrlObject.pageUrl = windowLocationURL;
        var cxBootLoader_1 = new CXBootstrapLoader(debugLog, envUrlObject);
        cxBootLoader_1.load(null);
        if (typeof tierParam !== 'undefined' && tierParam !== null) {
            debugLog("cxbl.selfLoading typeof videojs !== 'undefined'? ".concat(typeof videojs !== 'undefined'), 'debug');
        }
        if (typeof videojs !== 'undefined' &&
            videojs !== null &&
            typeof videojs.getPlugin === 'function' &&
            videojs.getPlugin('QortexAI') === undefined) {
            // This check will only register a videojs plugin for a Brightcove player.  
            // Since the loader is directly in the Brightcove code, there are no players loaded at the time of this function call.
            // Brightcove with call the function once the player is loaded
            // all other videojs players will run through our normal implementation
            debugLog('cxbl.selfLoading CX bootstrap registering videojs QortexAI plugin....', 'debug');
            videojs.registerPlugin('QortexAI', function (options) {
                debugLog('cxbl.selfLoading CX bootstrap loading via videojs QortexAI plugin....', 'debug');
                var bootstrapInitScripts = document.querySelectorAll("script[src*='/cxo/cx-bootstrapper-init']");
                bootstrapInitScripts.forEach(;
                cxBootLoader_1.load(options);
            });
        }
    }
})();
