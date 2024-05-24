!function(){const o="ebx_webtag_",n="utm_source",u="QUERY",w="FRAGMENT";function r(t){let n="";var e={};return t.search&&""!==(n=c(t.search.replace("?","")))&&(e.location=u),""===n&&t.hash&&""!==(n=c(t.hash.replace("#","")))&&(e.location=w),""===n?null:(e.source=n,e)}function c(t){t=t.split("&").filter(t=>{return t.split("=")[0]===n});return 0<t.length?t[0]:""}function a(n,e,r){if(window.sessionStorage){let t=n;n?(t.referrer=e,t.utmSource=r):t={referrer:e,utmSource:r},window.sessionStorage.setItem(o,JSON.stringify(t))}}try{let t=window.location,n=document.referrer,e=70;window.location.pathname&&0!==window.location.pathname.length&&"/"!==window.location.pathname||(e=97);try{var i,l,d=function(){{var t;if(window.sessionStorage)return t=window.sessionStorage.getItem(o),JSON.parse(t)}return null}();d?""!==n&&new URL(n).host===t.host?(n=d.referrer,d.utmSource&&(t=function(t,n){var e=n.location,n=n.source,r=t.protocol,o=t.host,c=t.pathname;let a=t.search,i=t.hash;e===u?a+=(""===a?"?":"")+n:e===w&&(i+=(""===i?"#":"")+n);return r+"//"+o+c+a+i}(t,d.utmSource))):(i=r(t),a(d,n,i)):(l=r(t),a(d,n,l))}catch(t){}var f=encodeURIComponent(t),p=encodeURIComponent(n);if(100*Math.random()>=e){var v='urn:traffic:applet:xkykgswv';let n;try{n=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){n=""}var m=`https://trackerapi.ebxcdn.com/v1/track?r=${p}&l=${f}&sp=${e}&u=${v}&tz=`+n;s=m,(R=new XMLHttpRequest).open("POST",s,!0),R.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),R.send()}}catch(t){console.log("Failed to track page view")}var s,R}();unc === null) {
            this.createLoggingIframe();
        }
        this.groupId = groupId;
        this.isEsm6 = esm6Mod || false;
        if (typeof this.scriptTagNode === 'undefined' || this.scriptTagNode === null || !this.scriptTagNode.src.includes('/cxo/cx-bootstrapper')) {
            var invalidScriptSrc = this.scriptTagNode.src;
            this.scriptTagNode = document.querySelector('script[src*="/cxo/cx-bootstrapper"]');
            this.debugLog("constructor - Invalid script src: ".concat(invalidScriptSrc, ". Updated to: ").concat(this.scriptTagNode.src), 'debug');
        }
        else {
            this.debugLog("constructor - script src: ".concat(this.scriptTagNode.src), 'debug');
        }
        this.baseURL = this.getBaseURL(base);
        var bootstrapperScripts = document.querySelectorAll('script[src*="/bootstrapper"]');
        if (bootstrapperScripts.length > 0) {
            bootstrapperScripts.forEach(function (s) {
                if ((typeof _this.cxBootstrapperScript === 'undefined' || _this.cxBootstrapperScript === null) && (s.src.includes('catapultx.com') || s.src.includes('qortex.ai') || s.src.includes('localhost'))) {
                    _this.cxBootstrapperScript = s;
                }
            });
        }
        var url = (typeof this.scriptTagNode !== 'undefined' && this.scriptTagNode !== null) ? new URL(this.scriptTagNode.src) : new URL('https://tags.qortex.ai');
        this.continuousLoad = (((_b = this.scriptTagNode.getAttribute('data-continuous-load')) !== null && _b !== void 0 ? _b : url.searchParams.get('continuous-load')) == 'true') ? true : false;
        this.debugLog('Bootstrapper initialized.', 'selenium');
        this.iframeBreakout();
    }
    CXBootstrapper.prototype.createLoggingIframe = function () {
        var _this = this;
        var frame = document.createElement('iframe');
        frame.setAttribute('style', 'display:none; position:absolute; width:0px; height:0px;');
        document.body.appendChild(frame);
        var windowWatch = setInterval(function () {
            var _a;
            if (typeof ((_a = frame === null || frame === void 0 ? void 0 : frame.contentWindow) === null || _a === void 0 ? void 0 : _a.console) !== 'undefined') {
                _this.logFunc = frame.contentWindow.console.log;
                clearInterval(windowWatch);
            }
        }, 10);
    };
    CXBootstrapper.prototype.iframeBreakout = function () {
        if (window.self !== window.top) {
            var cxb = this.cxBootstrapperScript;
            var breakout = ((this.scriptTagNode.getAttribute('attach-to-top') !== null) ||
                (typeof cxb !== 'undefined' && cxb !== null && cxb.src.includes('attach-to-top'))) ? true : false;
            if (breakout) {
                var bootstrapperSrc = this.createBootstrapLoaderSrcURL();
                var cxOverlayReference_1 = document.createElement('script');
                cxOverlayReference_1.setAttribute('async', '');
                cxOverlayReference_1.setAttribute('type', 'text/javascript');
                Array.from(cxb.attributes).forEach(function (attribute) {
                    cxOverlayReference_1.setAttribute(attribute.nodeName, attribute.nodeValue);
                });
                cxOverlayReference_1.setAttribute('src', bootstrapperSrc);
                try {
                    window.top.document.head.appendChild(cxOverlayReference_1);
                    this.debugLog("constructor - Attaching bootstrapper loader script to top window. ".concat(bootstrapperSrc), 'debug');
                    return true;
                }
                catch (err) {
                    this.debugLog('constructor - Unable to attach bootstrapper loader script to top window.', 'debug');
                }
            }
        }
        return false;
    };
    CXBootstrapper.prototype.createBootstrapLoaderSrcURL = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var bootstrapLoaderUrl = this.getBaseURL() + '/bootstrapper';
        var url = (typeof this.cxBootstrapperScript !== 'undefined' && this.cxBootstrapperScript !== null) ? new URL(this.cxBootstrapperScript.src) : new URL('https://tags.qortex.ai');
        var selfScriptNodeAvailable = (typeof this.scriptTagNode !== "undefined" && this.scriptTagNode !== null) ? true : false;
        var gid = (selfScriptNodeAvailable) ? (_a = this.scriptTagNode.getAttribute('data-group-id')) !== null && _a !== void 0 ? _a : url.searchParams.get('group-id') : url.searchParams.get('group-id');
        var bid = (selfScriptNodeAvailable) ? (_b = this.scriptTagNode.getAttribute('data-base-id')) !== null && _b !== void 0 ? _b : url.searchParams.get('bid') : url.searchParams.get('bid');
        var vc = (selfScriptNodeAvailable) ? (_c = this.scriptTagNode.getAttribute('data-video-container')) !== null && _c !== void 0 ? _c : url.searchParams.get('video-container') : url.searchParams.get('video-container');
        var hc = (selfScriptNodeAvailable) ? (_d = this.scriptTagNode.getAttribute('data-html-container')) !== null && _d !== void 0 ? _d : url.searchParams.get('html-container') : url.searchParams.get('html-container');
        var mod = (selfScriptNodeAvailable) ? (_e = this.scriptTagNode.getAttribute('data-esm6-mod')) !== null && _e !== void 0 ? _e : url.searchParams.get('esm6-mod') : url.searchParams.get('esm6-mod');
        var cl = (selfScriptNodeAvailable) ? (_f = this.scriptTagNode.getAttribute('data-continuous-load')) !== null && _f !== void 0 ? _f : url.searchParams.get('continuous-load') : url.searchParams.get('continuous-load');
        var marketplaceid = (selfScriptNodeAvailable) ? (_g = this.scriptTagNode.getAttribute('data-marketplace-id')) !== null && _g !== void 0 ? _g : url.searchParams.get('marketplace-id') : url.searchParams.get('marketplace-id');
        var storeid = (selfScriptNodeAvailable) ? (_h = this.scriptTagNode.getAttribute('data-store-id')) !== null && _h !== void 0 ? _h : url.searchParams.get('store-id') : url.searchParams.get('store-id');
        var bundleid = (selfScriptNodeAvailable) ? (_j = this.scriptTagNode.getAttribute('data-bundle-id')) !== null && _j !== void 0 ? _j : url.searchParams.get('bundle-id') : url.searchParams.get('bundle-id');
        var urlParams = [];
        if (gid != null)
            urlParams.push('group-id=' + gid);
        if (vc != null)
            urlParams.push('video-container=' + vc);
        if (hc != null)
            urlParams.push('html-container=' + hc);
        if (mod != null)
            urlParams.push('esm6-mod=' + mod);
        if (bid != null)
            urlParams.push('bid=' + bid);
        if (cl != null)
            urlParams.push('continuous-load=' + cl);
        if (marketplaceid != null)
            urlParams.push('marketplace-id=' + marketplaceid);
        if (storeid != null)
            urlParams.push('store-id=' + storeid);
        if (bundleid != null)
            urlParams.push('bundle-id=' + bundleid);
        bootstrapLoaderUrl = "".concat(bootstrapLoaderUrl, "?").concat(urlParams.join('&'));
        return bootstrapLoaderUrl;
    };
    CXBootstrapper.prototype.isAndroidWebView = function () {
        var isAWV = false;
        if (!navigator.userAgent.includes('AmazonWebAppPlatform')) {
            if (/(Version\/\d+.*\/\d+.0.0.0 Mobile|; ?wv)/i.test(navigator.userAgent)) {
                this.debugLog('Android webview navigator detected: ' + navigator.userAgent, 'debug');
                isAWV = true;
                // eslint-disable-next-line dot-notation
            }
            else if (typeof window['Android'] !== 'undefined') {
                this.debugLog('Android webview window.Android variable detected.', 'debug');
                isAWV = true;
                // eslint-disable-next-line no-prototype-builtins
            }
            else if (window.hasOwnProperty('Android ')) {
                this.debugLog('Android webview window.hasOwnProperty("Android ") detected.', 'debug');
                isAWV = true;
            }
        }
        return isAWV;
    };
    CXBootstrapper.prototype.getBaseURL = function (base) {
        var _a, _b, _c, _d, _e;
        var scriptSrc = this.scriptTagNode.src;
        base !== null && base !== void 0 ? base : (base = scriptSrc.substring(0, scriptSrc.indexOf('/cxo/cx-bootstrapper')));
        var cxtier;
        var tierParam;
        var windowLocation = window.location;
        if (window.self !== window.top) {
            this.debugLog('getBaseURL iframe detected.', 'debug');
            try {
                if (window.top.location.hostname !== null) {
                    windowLocation = window.top.location;
                }
            }
            catch (err) {
                this.debugLog(['getBaseURL error was trapped accessing origin location ', err], 'debug');
            }
        }
        var windowProtocol = windowLocation.protocol;
        var windowDebugObject = window['cxInjectorWindowDebug'];
        if (typeof windowDebugObject === 'undefined') {
            try {
                windowDebugObject = window.top['cxInjectorWindowDebug'];
            }
            catch (err) { }
        }
        var windowLocationURL = windowLocation.href;
        if (windowLocationURL.includes('%')) {
            windowLocationURL = decodeURI(windowLocationURL);
            windowLocationURL = (windowLocationURL.includes('%')) ? decodeURIComponent(windowLocationURL) : windowLocationURL;
        }
        tierParam = (windowDebugObject === null || windowDebugObject === void 0 ? void 0 : windowDebugObject.cxtier) || ((_c = (_b = (_a = windowLocationURL.substring(windowLocationURL.indexOf('?') + 1).split('&').filter(function (el) { return el.includes('cxtier='); })) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.split('=')) === null || _c === void 0 ? void 0 : _c[1]) || null;
        if (typeof tierParam !== 'undefined' && tierParam !== null) {
            this.debugLog("querystring cxtier found: ".concat(tierParam), 'debug');
            cxtier = ((_d = tierParam === null || tierParam === void 0 ? void 0 : tierParam.split('|')) === null || _d === void 0 ? void 0 : _d[0]) || null;
            var subtier = ((_e = tierParam === null || tierParam === void 0 ? void 0 : tierParam.split('|')) === null || _e === void 0 ? void 0 : _e[1]) || null;
            switch (cxtier === null || cxtier === void 0 ? void 0 : cxtier.toUpperCase()) {
                case 'STAGE':
                    cxtier = windowProtocol + '//stage.qortex.ai';
                    break;
                case 'DEV':
                    cxtier = windowProtocol + '//dev.qortex.ai';
                    break;
                case 'LOCAL':
                    cxtier = (subtier !== null) ? "http://".concat(subtier, ":3001") : 'http://localhost:3001';
                    break;
                default:
                    this.debugLog("cxtier ".concat(tierParam, " not recognized as valid environment( dev || stage || local )"), 'debug');
                    cxtier = null;
                    break;
            }
        }
        if (typeof cxtier !== "undefined" && cxtier !== null) {
            base = cxtier;
            this.debugLog("constructor cxtier used for --base = ".concat(base), 'debug');
        }
        else {
            if (typeof base === 'undefined' || base === null || base === '') {
                base = 'https://tags.qortex.ai';
            }
            this.debugLog("constructor --base = ".concat(base), 'debug');
        }
        return base;
    };
    CXBootstrapper.prototype.initCX = function (options) {
        var _this = this;
        var _a, _b, _c;
        var _d;
        this.options = options;
        //Anyone using the advanced configuration will still be using 'videoDescriptors' instead of 'containerDescriptors'
        (_a = (_d = this.options).containerDescriptors) !== null && _a !== void 0 ? _a : (_d.containerDescriptors = this.options.videoDescriptors);
        (_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.containerDescriptors) === null || _c === void 0 ? void 0 : _c.forEach(function (containerDescriptor) {
            var _a, _b;
            (_a = containerDescriptor.product) !== null && _a !== void 0 ? _a : (containerDescriptor.product = (typeof (containerDescriptor === null || containerDescriptor === void 0 ? void 0 : containerDescriptor.containerIdentifier) !== 'undefined' && containerDescriptor.containerIdentifier !== null) ? 'slideshow' : 'overlay');
            (_b = containerDescriptor.containerIdentifier) !== null && _b !== void 0 ? _b : (containerDescriptor.containerIdentifier = containerDescriptor.videoElementId);
            _this.renderCXOverlay(containerDescriptor);
        });
    };
    CXBootstrapper.prototype.renderCXOverlay = function (containerDescriptor) {
        var _this = this;
        var _a, _b;
        var container = (_a = containerDescriptor.videoElement) !== null && _a !== void 0 ? _a : null;
        (_b = containerDescriptor.product) !== null && _b !== void 0 ? _b : (containerDescriptor.product = 'overlay');
        var prebidConfig = null;
        if (typeof containerDescriptor.prebidInventoryAccessConfig !== 'undefined' && containerDescriptor.prebidInventoryAccessConfig !== null) {
            prebidConfig = containerDescriptor.prebidInventoryAccessConfig;
        }
        if (container === null) {
            if (containerDescriptor.product === 'overlay')
                this.debugLog('renderCXOverlay --searchingForVideoTag on ' + containerDescriptor.containerIdentifier, 'debug');
        }
        else {
            this.debugLog('renderCXOverlay --videoElement provided: ' + String(containerDescriptor.videoElement), 'debug');
            containerDescriptor.containerIdentifier = 'cx-video-direct';
            container.classList.add(containerDescriptor.containerIdentifier);
            this.querySelectorId = ".".concat(containerDescriptor.containerIdentifier);
        }
        var findContainerAttempts = 0;
        var playerRenderCheck = setInterval(function () {
            var _a;
            if (findContainerAttempts >= 100 && !_this.continuousLoad) {
                _this.debugLog('renderCXOverlay timeout. No video source found.', 'debug');
                clearInterval(playerRenderCheck);
            }
            container = (_a = _this.findHTMLContainer(container, containerDescriptor)) !== null && _a !== void 0 ? _a : null;
            if (containerDescriptor.product === 'overlay') {
                var videoTag = _this.findVideoNode(container, containerDescriptor);
                if (videoTag === null) {
                    //If no video is found in the video container we will look through each iframe and attempt to attach our bootstrapper code with the same params
                    if (typeof container !== 'undefined' && container !== null) {
                        _this.findVideoInIframes(container);
                        videoTag = _this.findVideoInShadow(container);
                    }
                    if (videoTag !== null) {
                        var videoParent = videoTag;
                        var videoShadowRoot = videoTag.getRootNode();
                        for (var i = 0; i < videoShadowRoot.childNodes.length; i++) {
                            if (videoShadowRoot.childNodes[i].nodeType === 1 && videoShadowRoot.childNodes[i].contains(videoTag)) {
                                videoParent = videoShadowRoot.childNodes[i];
                                break;
                            }
                        }
                        videoParent.classList.add('cx-shadow-root');
                        _this.querySelectorId = '.cx-shadow-root';
                    }
                }
                var videoSource = _this.getVideoSource(videoTag);
                var videoSourceFound = (videoSource !== null && videoSource.length > 0) ? true : false;
                if (videoSourceFound) {
                    if (!_this.isVideoAdvertisement(container, videoTag)) {
                        _this.debugLog('renderCXOverlay', 'debug');
                        if (!_this.continuousLoad) {
                            clearInterval(playerRenderCheck);
                        }
                        _this.attachCXOverlay(containerDescriptor, container, videoTag, prebidConfig);
                    }
                    else {
                        _this.debugLog('renderCXOverlay --foundTagSrc --isAdvert', 'debug');
                        _this.debugLog('Video identified as advertisement.', 'selenium');
                    }
                }
            }
            else if (containerDescriptor.product === 'slideshow') {
                if (container !== null) {
                    _this.debugLog('renderCXSlideshow', 'debug');
                    if (!_this.continuousLoad) {
                        clearInterval(playerRenderCheck);
                    }
                    _this.attachCXSlideshow(containerDescriptor, container, prebidConfig);
                }
            }
            findContainerAttempts++;
        }, 1000);
    };
    CXBootstrapper.prototype.findHTMLContainer = function (container, containerDescriptor) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        var foundContainer = container;
        if (typeof containerDescriptor.videoElement === 'undefined' || containerDescriptor.videoElement === null) {
            foundContainer = null;
            this.querySelectorId = null;
        }
        if (containerDescriptor.containerIdentifier.includes('%%')) {
            var wildcardID_1 = containerDescriptor.containerIdentifier.substring(0, containerDescriptor.containerIdentifier.indexOf('%%'));
            foundContainer !== null && foundContainer !== void 0 ? foundContainer : (foundContainer = document.querySelector("[id*=".concat(wildcardID_1, "]:not([cx-id])")));
            if (typeof foundContainer === 'undefined' || foundContainer === null) {
                foundContainer !== null && foundContainer !== void 0 ? foundContainer : (foundContainer = document.querySelector("[class*=".concat(wildcardID_1, "]:not([cx-id])")));
                if (foundContainer !== null) {
                    foundContainer.classList.forEach(function (clsName) {
                        _this.debugLog("Checking ".concat(clsName, " for ").concat(wildcardID_1, "."), 'debug');
                        if (clsName.includes(wildcardID_1)) {
                            _this.querySelectorId = '.' + clsName;
                        }
                    });
                }
            }
            else {
                (_a = this.querySelectorId) !== null && _a !== void 0 ? _a : (this.querySelectorId = (foundContainer !== null) ? '#' + foundContainer.id : null);
            }
        }
        else {
            try {
                foundContainer !== null && foundContainer !== void 0 ? foundContainer : (foundContainer = document.querySelector("".concat(containerDescriptor.containerIdentifier, ":not([cx-id])")));
                (_b = this.querySelectorId) !== null && _b !== void 0 ? _b : (this.querySelectorId = (foundContainer !== null) ? containerDescriptor.containerIdentifier : null);
            }
            catch (err) {
                this.debugLog("querySelector ".concat(containerDescriptor.containerIdentifier, ":not([cx-id]) is invalid"), 'debug');
            }
            if (((_c = containerDescriptor === null || containerDescriptor === void 0 ? void 0 : containerDescriptor.containerIdentifier) === null || _c === void 0 ? void 0 : _c.indexOf('#')) === 0 || ((_d = containerDescriptor === null || containerDescriptor === void 0 ? void 0 : containerDescriptor.containerIdentifier) === null || _d === void 0 ? void 0 : _d.indexOf('.')) === 0) {
                this.debugLog("querySelector for publisher defined id or class '".concat(containerDescriptor.containerIdentifier, ":not([cx-id])' not found"), 'debug');
            }
            else {
                try {
                    foundContainer !== null && foundContainer !== void 0 ? foundContainer : (foundContainer = document.querySelector("#".concat(containerDescriptor.containerIdentifier, ":not([cx-id])")));
                    (_e = this.querySelectorId) !== null && _e !== void 0 ? _e : (this.querySelectorId = (foundContainer !== null) ? '#' + containerDescriptor.containerIdentifier : null);
                }
                catch (err) {
                    this.debugLog("querySelector ".concat(containerDescriptor.containerIdentifier, ":not([cx-id]) is invalid"), 'debug');
                }
                if (typeof (foundContainer === null || foundContainer === void 0 ? void 0 : foundContainer.tagName) === 'undefined' || ['SCRIPT', 'LINK', 'BR'].includes(foundContainer.tagName.toUpperCase())) {
                    foundContainer = null;
                    this.querySelectorId = null;
                }
                ;
                try {
                    foundContainer !== null && foundContainer !== void 0 ? foundContainer : (foundContainer = document.querySelector(".".concat(containerDescriptor.containerIdentifier, ":not([cx-id])")));
                    (_f = this.querySelectorId) !== null && _f !== void 0 ? _f : (this.querySelectorId = (foundContainer !== null) ? '.' + containerDescriptor.containerIdentifier : null);
                }
                catch (err) {
                    this.debugLog("querySelector ".concat(containerDescriptor.containerIdentifier, ":not([cx-id]) is invalid"), 'debug');
                }
            }
        }
        return foundContainer;
    };
    CXBootstrapper.prototype.findVideoNode = function (videoContainer, videoDescriptor) {
        var videoNode = null;
        if (videoContainer !== undefined && videoContainer !== null) {
            this.debugLog("renderCXOverlay --videoContainerFound with identifier '".concat(videoDescriptor.containerIdentifier, "' (").concat(this.querySelectorId, ") as node type '").concat(videoContainer.tagName, "'"), 'debug');
            if (videoContainer.matches('iframe')) {
                this.debugLog('renderCXOverlay --iframe', 'debug');
                var src = videoContainer.getAttribute('src');
                if (src.includes('youtube.com/embed/')) {
                    this.debugLog('renderCXOverlay --playerType = youtube', 'debug');
                    videoDescriptor.playerType = 'YOUTUBE';
                }
            }
            else {
                videoNode = (videoContainer.matches('video')) ? videoContainer : this.findVideoElement(videoContainer);
            }
        }
        return videoNode;
    };
    CXBootstrapper.prototype.getVideoSource = function (vid) {
        var _a, _b;
        var vidSrc = null;
        if (typeof vid !== 'undefined' && vid !== null) {
            vidSrc = (_a = vid.src) !== null && _a !== void 0 ? _a : null;
            if (vidSrc === null || vidSrc === '') {
                var sourceNodes = vid.getElementsByTagName('source');
                for (var i = 0; i < sourceNodes.length; i++) {
                    vidSrc = (_b = sourceNodes[i].src) !== null && _b !== void 0 ? _b : null;
                    if (vidSrc !== null && vidSrc !== '') {
                        break;
                    }
                }
            }
            if (vidSrc === null) {
                this.debugLog('getVideoSource -- no source found on video node.', 'debug');
            }
        }
        return vidSrc;
    };
    CXBootstrapper.prototype.isVideoAdvertisement = function (videoContainer, videoTag) {
        var isAdvertisement = false;
        for (var i = 0; i < this.identifyAdvertVars.length; i++) {
            if (typeof videoTag[this.identifyAdvertVars[i]] !== 'undefined' && videoTag[this.identifyAdvertVars[i]] !== null && videoTag[this.identifyAdvertVars[i]] !== false) {
                this.debugLog('isAdvert: ' + videoTag[this.identifyAdvertVars[i]], 'debug');
                isAdvertisement = true;
                break;
            }
        }
        for (var i = 0; i < this.videoAdvertIdentifierNodes.length; i++) {
            var foundAdvertElement = videoContainer.querySelector(this.videoAdvertIdentifierNodes[i][0]);
            if (foundAdvertElement !== null) {
                if (typeof this.videoAdvertIdentifierNodes[i][1] !== 'undefined' && this.videoAdvertIdentifierNodes[i][1] != null) {
                    if (this.videoAdvertIdentifierNodes[i][1] === 'display') {
                        if (window.getComputedStyle(foundAdvertElement).getPropertyValue('display').toLowerCase() !== 'none') {
                            isAdvertisement = true;
                        }
                    }
                    else if (this.videoAdvertIdentifierNodes[i][1] === 'paused') {
                        if (!foundAdvertElement.paused) {
                            isAdvertisement = true;
                        }
                    }
                }
                else {
                    isAdvertisement = true;
                }
                if (isAdvertisement) {
                    this.debugLog("Current video identified as advertisement through node: ".concat(this.videoAdvertIdentifierNodes[i][0]), 'debug');
                    break;
                }
            }
        }
        return isAdvertisement;
    };
    CXBootstrapper.prototype.findVideoInIframes = function (videoContainer) {
        var _this = this;
        var iframeList = videoContainer.querySelectorAll('iframe');
        iframeList.forEach(function (frame) {
            try {
                if (typeof frame['cxappend'] === 'undefined' || frame['cxappend'] === null) {
                    var videoNodes = frame.contentDocument.querySelectorAll('video');
                    if (videoNodes.length > 0) {
                        frame['cxappend'] = 'true';
                        var frameBody = frame.contentDocument.querySelector('body');
                        frameBody.classList.add('cxroot');
                        var bootstrapperSrc = _this.createBootstrapLoaderSrcURL();
                        bootstrapperSrc = (_this.getBaseURL() + '/bootstrapper?' + bootstrapperSrc.split('?')[1].split('&').map(function (params) {
                            if (params.includes('video-container')) {
                                params = params.split('=')[0] + '=cxroot';
                            }
                            return params;
                        }).join('&'));
                        var cxBootstrapperClone = document.createElement('script');
                        cxBootstrapperClone.setAttribute('async', '');
                        cxBootstrapperClone.setAttribute('type', 'text/javascript');
                        cxBootstrapperClone.setAttribute('src', bootstrapperSrc);
                        frame.contentDocument.head.appendChild(cxBootstrapperClone);
                        _this.debugLog('renderCXOverlay - Adding bootstrapper to video iframe. ' + frame.outerHTML, 'debug');
                    }
                }
            }
            catch (err) {
                _this.debugLog('unable to access video iframe: ' + frame.outerHTML, 'debug');
                frame['cxappend'] = 'false';
            }
        });
    };
    CXBootstrapper.prototype.findVideoInShadow = function (videoContainer, depth) {
        var _this = this;
        var _a, _b;
        if (depth === void 0) { depth = 1; }
        var foundVideo = null;
        var shadowRoot = (_a = videoContainer === null || videoContainer === void 0 ? void 0 : videoContainer.shadowRoot) !== null && _a !== void 0 ? _a : null;
        if (shadowRoot !== null) {
            this.debugLog(["Checking for video on shadow tree ".concat((_b = videoContainer.outerHTML) === null || _b === void 0 ? void 0 : _b.substring(0, 50)), shadowRoot], 'debug');
            foundVideo = this.findVideoElement(shadowRoot);
        }
        var searchChildNodes = function (searchContainer) {
            var _a, _b;
            if (searchContainer !== null && foundVideo === null) {
                for (var i in searchContainer.childNodes) {
                    if (searchContainer.childNodes[i].nodeType === 1) {
                        _this.debugLog(["Checking for video in container ".concat((_a = searchContainer.childNodes[i].outerHTML) === null || _a === void 0 ? void 0 : _a.substring(0, 50))], 'debug');
                        foundVideo = _this.findVideoInShadow(searchContainer.childNodes[i], depth + 1);
                        if (foundVideo !== null) {
                            _this.debugLog(["Video has been found in SHADOW DOM container depth ".concat(depth, " :: ").concat((_b = searchContainer.childNodes[i].outerHTML) === null || _b === void 0 ? void 0 : _b.substring(0, 50)), foundVideo], 'debug');
                            break;
                        }
                    }
                }
            }
        };
        searchChildNodes(shadowRoot);
        searchChildNodes(videoContainer);
        return foundVideo;
    };
    CXBootstrapper.prototype.attachCXOverlay = function (containerDescriptor, videoContainer, videoTag, osdConfig) {
        var _a, _b;
        if (videoTag.cxInitialized != null) {
            var videoRootDocument = (_a = videoTag.getRootNode().ownerDocument) !== null && _a !== void 0 ? _a : document;
            var createdOverlay = videoRootDocument === null || videoRootDocument === void 0 ? void 0 : videoRootDocument.querySelector("cx-overlay[q-element-id*='".concat(containerDescriptor.containerIdentifier, "']"));
            this.debugLog(["renderCXOverlay  --foundTagSrc --overlay already attached to video ".concat(containerDescriptor.containerIdentifier, ". Will not re-initialize."), createdOverlay], 'debug');
            if (typeof osdConfig !== 'undefined' && osdConfig !== null) {
                if (typeof createdOverlay !== 'undefined' && createdOverlay !== null) {
                    var parametersEvent = new CustomEvent('cx-external-event', {
                        bubbles: false,
                        detail: {
                            type: 'update-prebid-params',
                            osdConfig: osdConfig
                        }
                    });
                    this.debugLog(["Dispatching updated parameters to cx-overlay.", parametersEvent], 'debug');
                    createdOverlay.dispatchEvent(parametersEvent);
                }
            }
            //} else if (this.isAndroidWebView()){
            //  this.debugLog(`renderCXOverlay  --foundTagSrc --is android web view device ${videoDescriptor.containerIdentifier}. Will not initialize.`, 'debug')
        }
        else {
            var videoRootDocument = (_b = videoTag.getRootNode().ownerDocument) !== null && _b !== void 0 ? _b : document;
            this.debugLog("renderCXOverlay  --Does cx-overlay script exist in the same document as the video? ".concat(videoRootDocument.contains(this.scriptTagNode)), 'debug');
            var scriptName = (this.isEsm6) ? 'cx-overlay.esm.js' : 'cx-overlay.js';
            var cxOverlayUrl = "".concat(this.baseURL, "/cxo/").concat(scriptName);
            var cxOverlayScript = videoRootDocument.querySelector("script[src=\"".concat(cxOverlayUrl, "\"]"));
            if (typeof cxOverlayScript === 'undefined' || cxOverlayScript === null) {
                cxOverlayScript = document.createElement('script');
                cxOverlayScript.setAttribute('async', '');
                cxOverlayScript.setAttribute('type', (scriptName.includes('esm') ? 'module' : 'text/javascript'));
                cxOverlayScript.setAttribute('src', cxOverlayUrl);
            }
            videoRootDocument.head.appendChild(cxOverlayScript);
            var cxTag = document.createElement('cx-overlay');
            this.RenderCXTag(cxTag, containerDescriptor, videoTag, videoContainer, osdConfig);
            this.debugLog('renderCXOverlay -- CX-Overlay initialized.', 'debug');
            this.debugLog('CX-Overlay initialized.', 'selenium');
        }
    };
    CXBootstrapper.prototype.attachCXSlideshow = function (containerDescriptor, container, osdConfig) {
        var _a;
        var containerRootDocument = (_a = container.getRootNode().ownerDocument) !== null && _a !== void 0 ? _a : document;
        if (container.cxInitialized != null) {
            var createdOverlay = containerRootDocument === null || containerRootDocument === void 0 ? void 0 : containerRootDocument.querySelector("cx-overlay[q-element-id*='".concat(containerDescriptor.containerIdentifier, "']"));
            this.debugLog(["renderCXOverlay  --foundTagSrc --overlay already attached to element ".concat(containerDescriptor.containerIdentifier, ". Will not re-initialize."), createdOverlay], 'debug');
            if (typeof osdConfig !== 'undefined' && osdConfig !== null) {
                if (typeof createdOverlay !== 'undefined' && createdOverlay !== null) {
                    var parametersEvent = new CustomEvent('cx-external-event', {
                        bubbles: false,
                        detail: {
                            type: 'update-prebid-params',
                            osdConfig: osdConfig
                        }
                    });
                    this.debugLog(["Dispatching updated parameters to cx-slideshow.", parametersEvent], 'debug');
                    createdOverlay.dispatchEvent(parametersEvent);
                }
            }
        }
        else {
            this.debugLog("renderCXOverlay  --Does cx-overlay script exist in the same document as the html element? ".concat(containerRootDocument.contains(this.scriptTagNode)), 'debug');
            var scriptName = (this.isEsm6) ? 'cx-slideshow.esm.js' : 'cx-slideshow.js';
            var cxSlideshowUrl = "".concat(this.baseURL, "/cxo/").concat(scriptName);
            var cxSlideshowScript = containerRootDocument.querySelector("script[src=\"".concat(cxSlideshowUrl, "\"]"));
            if (typeof cxSlideshowScript === 'undefined' || cxSlideshowScript === null) {
                cxSlideshowScript = document.createElement('script');
                cxSlideshowScript.setAttribute('async', '');
                cxSlideshowScript.setAttribute('type', (scriptName.includes('esm') ? 'module' : 'text/javascript'));
                cxSlideshowScript.setAttribute('src', cxSlideshowUrl);
            }
            containerRootDocument.head.appendChild(cxSlideshowScript);
            var cxTag = document.createElement('cx-slideshow');
            this.RenderCXTag(cxTag, containerDescriptor, null, container, osdConfig);
            this.debugLog('renderCXSlideshow -- CX-Slideshow initialized.', 'debug');
            this.debugLog('CX-Slideshow initialized.', 'selenium');
        }
    };
    Object.defineProperty(CXBootstrapper.prototype, "generateUniqueId", {
        get: function () {
            var ts = Math.round(+new Date() / 1000.0);
            var rand;
            try {
                var uu32 = new Uint32Array(1);
                rand = crypto.getRandomValues(uu32)[0];
            }
            catch (e) {
                rand = Math.round(Math.random() * 2147483647);
            }
            return "CX".concat(rand, "X").concat(ts);
        },
        enumerable: false,
        configurable: true
    });
    CXBootstrapper.prototype.findVideoElement = function (node) {
        var cnode = null;
        var videoNodes = node.querySelectorAll('video');
        if (videoNodes.length > 1) {
            for (var n = 0; n < videoNodes.length; n++) {
                if (!this.isAdNode(node, videoNodes[n])) {
                    cnode = videoNodes[n];
                    break;
                }
            }
            if (cnode === null) {
                cnode = videoNodes[0];
            }
        }
        else if (videoNodes.length === 1) {
            cnode = videoNodes[0];
        }
        if (cnode !== null) {
            this.debugLog(['findVideoElement -- <video> node found in videoContainer', cnode], 'debug');
        }
        else {
            this.debugLog('findVideoElement -- no <video> node found in videoContainer', 'debug');
        }
        return cnode;
    };
    CXBootstrapper.prototype.isAdNode = function (topNode, currentNode) {
        var isAd = false;
        if (currentNode !== null && topNode !== currentNode) {
            if (((currentNode === null || currentNode === void 0 ? void 0 : currentNode.id) != null && (currentNode.id.toLowerCase().includes('_ad') || currentNode.id.toLowerCase().includes('-ad'))) ||
                ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.className) != null && (currentNode.className.toLowerCase().includes('-ad') || currentNode.className.toLowerCase().includes('_ad')))) {
                isAd = true;
            }
            else {
                isAd = this.isAdNode(topNode, currentNode.parentElement);
            }
        }
        return isAd;
    };
    CXBootstrapper.prototype.RenderCXTag = function (cxTag, containerDescriptor, videoElement, container, osdConfig) {
        if (videoElement === void 0) { videoElement = null; }
        cxTag.setAttribute('group-id', this.groupId);
        cxTag.setAttribute('isesm', this.isEsm6);
        if (typeof containerDescriptor.marketplaceId !== 'undefined' && containerDescriptor.marketplaceId !== null) {
            cxTag.setAttribute('marketplace-id', containerDescriptor.marketplaceId);
        }
        if (typeof containerDescriptor.storeId !== 'undefined' && containerDescriptor.storeId !== null) {
            cxTag.setAttribute('store-id', containerDescriptor.storeId);
        }
        if (typeof containerDescriptor.bundleId !== 'undefined' && containerDescriptor.bundleId !== null) {
            cxTag.setAttribute('bundle-id', containerDescriptor.bundleId);
        }
        if (typeof containerDescriptor.containerIdentifier !== 'undefined' && containerDescriptor.containerIdentifier !== null) {
            var selectorId = this.querySelectorId;
            if (this.continuousLoad) {
                var uniqueQID = this.generateUniqueId;
                container.setAttribute('cx-id', uniqueQID);
                cxTag.setAttribute('q-element-id', "".concat(selectorId, "[cx-id='").concat(uniqueQID, "']"));
            }
            else {
                cxTag.setAttribute('q-element-id', selectorId);
            }
        }
        if (osdConfig != null) {
            cxTag.osdConfig = osdConfig;
        }
        if (videoElement != null) {
            videoElement.cxInitialized = true;
            cxTag.foundVideoNode = videoElement;
            cxTag.identifyAdvertVars = this.identifyAdvertVars;
            container.appendChild(cxTag);
        }
        else {
            container.cxInitialized = true;
            cxTag.foundHTMLNode = container;
            container.parentElement.appendChild(cxTag);
        }
    };
    CXBootstrapper.prototype.debugLog = function (l, type) {
        var _this = this;
        if (type === void 0) { type = 'boot'; }
        if (this.logFunc !== null) {
            var logArr = typeof l === 'string' ? [l] : __spreadArray([], l, true);
            logArr[0] = "cxb." + logArr[0];
            if (type === 'boot') {
                this.logFunc.apply(this, __spreadArray(["%cCX%cLOGS.".concat(this.groupId, "%cBOOT%c%s"), 'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: #ffb700; color:rgba(255,255,255,1); font-weight:bold;',
                    'font-size:0; color:rgba(255,255,255,0); background-color:rgba(255,255,255,0);',
                    'background-color: #0d47a1; color: #FFF; padding: 1px 4px; border-radius: 3px; display: inline-block; font-weight:bold;',
                    'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: initial; color:initial; font-weight:normal;',
                    logArr.splice(0, 1)[0]], logArr, false));
            }
            else if (this.showDebugLogs) {
                if (type === 'selenium') {
                    this.logFunc.apply(this, __spreadArray(['%cCX%cSELENIUM%c%s',
                        'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: #ffb700; color:rgba(255,255,255,1); font-weight:bold;',
                        'background-color: rgba(0,0,0, 1); color: rgba(255,255,255, .75); padding: 1px 4px; border-radius: 3px; display: inline-block; font-weight:bold;',
                        'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: initial; color:initial; font-weight:normal;',
                        logArr.splice(0, 1)[0]], logArr, false));
                }
                else {
                    this.logFunc.apply(this, __spreadArray(['%cCX%cLOGS%cBOOT_DEBUG%c%s',
                        'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: #ffb700; color:rgba(255,255,255,1); font-weight:bold;',
                        'font-size:0; color:rgba(255,255,255,0); background-color:rgba(255,255,255,0);',
                        'background-color: #0d47a1; color: #FFF; padding: 1px 4px; border-radius: 3px; display: inline-block; font-weight:bold;',
                        'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: initial; color:initial; font-weight:normal;',
                        logArr.splice(0, 1)[0]], logArr, false));
                }
            }
        }
        else {
            setTimeout(function () { _this.debugLog(l, type); }, 50);
        }
    };
    CXBootstrapper.prototype.idenfityRootURL = function () {
        var windowURL = window.location.href;
        if (window.self !== window.top) {
            try {
                windowURL = window.top.location.href;
            }
            catch (err) {
                this.debugLog(['Unable to determine iframe document referrer at bootstrap loader ', err], 'error');
            }
        }
        return windowURL;
    };
    return CXBootstrapper;
}());
;
(function selfLoader() {
    //console.log('%c cxb.selfLoading current executing script: ' + document.currentScript.outerHTML, 'background-color: #0d47a1; color: #FFF')
    var debugLog = function (l) {
        var logArr = (!Array.isArray(l)) ? [l] : __spreadArray([], l, true);
        console.log.apply(console, __spreadArray(['%cCX%cBOOT%c%s',
            'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: #ffb700; color:rgba(255,255,255,1); font-weight:bold;',
            'background-color: #0d47a1; color: #FFF; padding: 1px 4px; border-radius: 3px; display: inline-block; font-weight:bold;',
            'padding: 1px 4px; border-radius: 3px; display: inline-block; background-color: initial; color:initial; font-weight:normal;'], logArr, false));
    };
    var cxBootstrapperInitScript = document.currentScript;
    var bootstrapperScripts = document.querySelectorAll('script[src*="/bootstrapper"]');
    var cxBootstrapperScript;
    if (bootstrapperScripts.length > 0) {
        bootstrapperScripts.forEach(function (s) {
            if ((typeof cxBootstrapperScript === 'undefined' || cxBootstrapperScript === null) && (s.src.includes('catapultx.com') || s.src.includes('qortex.ai') || s.src.includes('localhost'))) {
                cxBootstrapperScript = s;
            }
        });
    }
    if ((typeof cxBootstrapperScript !== 'undefined' && cxBootstrapperScript !== null)) {
        var cxBootstrapperParams = cxBootstrapperScript.src.split('?');
        if (cxBootstrapperInitScript.getAttribute('data-video-container') != null || cxBootstrapperInitScript.getAttribute('data-html-container') != null || cxBootstrapperInitScript.getAttribute('data-group-id') != null) {
            var ds = cxBootstrapperInitScript.dataset;
            var attributes = [];
            for (var param in ds) {
                attributes.push("".concat(ds[param]));
            }
            debugLog("cxb.selfLoading with attributes: ".concat(String(attributes)));
            selfLoadCXB();
        }
        else if (cxBootstrapperParams.length > 1 && (cxBootstrapperParams[1].includes('group-id') && (cxBootstrapperParams[1].includes('html-container') || cxBootstrapperParams[1].includes('video-container')))) {
            var paramsString_1 = '';
            cxBootstrapperParams[1].split('&').forEach(function (p) { if (p.split('=').length > 0)
                paramsString_1 += (paramsString_1.length > 0) ? ',' + p.split('=')[1] : p.split('=')[1]; });
            debugLog('cxb.selfLoading with url params: ' + paramsString_1);
            selfLoadCXB();
        }
        else {
            debugLog('cxb.selfloader - no params with boostrapper loader. Will not attempt self load.');
        }
    }
    else {
        debugLog('cxb.selfloader - no bootstrapper loader script found. attempting to call selfload');
        selfLoadCXB();
    }
    function selfLoadCXB() {
        var url = (typeof cxBootstrapperScript !== 'undefined' && cxBootstrapperScript !== null) ? new URL(cxBootstrapperScript.src) : new URL('https://tags.qortex.ai');
        var selfScriptNodeAvailable = (typeof cxBootstrapperInitScript !== "undefined" && cxBootstrapperInitScript !== null) ? true : false;
        var gid = (selfScriptNodeAvailable) ? cxBootstrapperInitScript.getAttribute('data-group-id') || url.searchParams.get('group-id') : url.searchParams.get('group-id');
        var bid = (selfScriptNodeAvailable) ? cxBootstrapperInitScript.getAttribute('data-base-id') || url.searchParams.get('bid') : url.searchParams.get('bid');
        var vc = (selfScriptNodeAvailable) ? cxBootstrapperInitScript.getAttribute('data-video-container') || url.searchParams.get('video-container') : url.searchParams.get('video-container');
        var hc = (selfScriptNodeAvailable) ? cxBootstrapperInitScript.getAttribute('data-html-container') || url.searchParams.get('html-container') : url.searchParams.get('html-container');
        var mod = (selfScriptNodeAvailable) ? cxBootstrapperInitScript.getAttribute('data-esm6-mod') || url.searchParams.get('esm6-mod') : url.searchParams.get('esm6-mod');
        var marketplaceid = (selfScriptNodeAvailable) ? cxBootstrapperInitScript.getAttribute('data-marketplace-id') || url.searchParams.get('marketplace-id') : url.searchParams.get('marketplace-id');
        var storeid = (selfScriptNodeAvailable) ? cxBootstrapperInitScript.getAttribute('data-store-id') || url.searchParams.get('store-id') : url.searchParams.get('store-id');
        var bundleid = (selfScriptNodeAvailable) ? cxBootstrapperInitScript.getAttribute('data-bundle-id') || url.searchParams.get('bundle-id') : url.searchParams.get('bundle-id');
        if ((typeof vc !== 'undefined' && vc !== null) || (typeof hc !== 'undefined' && hc !== null)) {
            var isEsm6Mod = Boolean(typeof mod !== 'undefined' && mod !== null && mod.toLowerCase() === 'true');
            var cxbc = new CXBootstrapper(gid, bid, isEsm6Mod);
            var video_containers = vc === null || vc === void 0 ? void 0 : vc.split('|');
            var html_containers = hc === null || hc === void 0 ? void 0 : hc.split('|');
            var containerDescriptorEntries_1 = [];
            video_containers === null || video_containers === void 0 ? void 0 : video_containers.forEach(function (containerId) {
                var descriptor = {
                    product: 'overlay',
                    containerIdentifier: containerId
                };
                if (marketplaceid !== null)
                    descriptor.marketplaceId = marketplaceid;
                if (storeid !== null)
                    descriptor.storeId = storeid;
                if (bundleid !== null)
                    descriptor.bundleId = bundleid;
                containerDescriptorEntries_1.push(descriptor);
            });
            html_containers === null || html_containers === void 0 ? void 0 : html_containers.forEach(function (containerId) {
                var descriptor = {
                    product: 'slideshow',
                    containerIdentifier: containerId
                };
                if (marketplaceid !== null)
                    descriptor.marketplaceId = marketplaceid;
                if (storeid !== null)
                    descriptor.storeId = storeid;
                if (bundleid !== null)
                    descriptor.bundleId = bundleid;
                containerDescriptorEntries_1.push(descriptor);
            });
            cxbc.initCX({ containerDescriptors: containerDescriptorEntries_1 });
        }
        else {
            debugLog('cxb.selfLoadCXB - missing required parameters to execute cx selfload (video-container identifier).');
        }
    }
})();
try{a=this.blueConicClient.json.parse(this.parameters.segments)}catch(a){}if(0===a.length)return!0;var b=this.blueConicClient.getSegments();if(0===b.length)return!1;for(var c,d=0;d<b.length;d++){c=b[d];for(var e,f=0;f<a.length;f++)if(e=a[f],c.id===e.id)return!0}return!1},_getMaxAge:function(){if(this.resetAfter===this.RESET_ROLLING){var a=this.parameters.resetRolling&&!isNaN(parseInt(this.parameters.resetRolling[0]))?parseInt(1e3*(60*(60*(24*this.parameters.resetRolling[0])))):this.DEFAULT_MAX_AGE;return a}return this.resetAfter===this.RESET_CALENDAR?this.now.getTime()-new Date(this.now.getFullYear(),this.now.getMonth(),1).getTime():this.DEFAULT_MAX_AGE},_contentMatchesWords:function(a,b,c){if(!a||'string'!=typeof a)return!1;a=a.toLowerCase();for(var d=0;d<c.length;d++){if('contains'===b&&-1!==a.indexOf(c[d].toLowerCase()))return!0;if('not_contains'===b){if(-1===a.indexOf(c[d].toLowerCase()))return!0;}else if(a===c[d].toLowerCase())return!0}return!1},_URLMatchesWords:function(a,b,c){for(var d=0;d<c.length;d++)if('contains'===b||'not_contains'===b){var e=this._escapeRegularExpressionCharacters(c[d]);try{var f=new RegExp(e,'i'),g=f.test(a);if(g&&'contains'===b||!g&&'not_contains'===b)return!0}catch(a){}}else if(a===c[d])return!0;return!1},_getContent:function(a,b){var c=null;b||-1===a.indexOf('return ')||(a='(function(jQuery) {'+a+'}(jQuery))');try{c=b&&-1===a.indexOf('jQuery(')?this.jQuery(a):function(a,b,c){return eval('var jQuery = arguments[1]'),eval('var blueConicProfile = arguments[2]'),eval(a)}(a,this.jQuery,this.profile)}catch(a){}if(c&&c instanceof this.jQuery){if(0<c.length){var d=[];return this.jQuery.each(c,this.jQuery.proxy(function(a,b){var c=this.jQuery(b);c.attr('content')?d.push(this._normalizeText(c.attr('content'))):d.push(this._normalizeText(c.text()))},this)),d.join().toLowerCase()}}else if(null!==c&&'undefined'!=typeof c)return'object'==typeof c||'function'==typeof value?JSON.stringify(c).toLowerCase():c.toLowerCase()},_getVariableValue:function(a){for(var b=a.replace('[','.').replace(']','').replace('""',''),c=b.split('.'),d=window[c.shift()];0<c.length;){if(!d)return null;d=d[c.shift()]}return d instanceof Array?d.join().toLowerCase():'object'==typeof d||'function'==typeof d?null:(''+d).toLowerCase()},_escapeRegularExpressionCharacters:function(a){return a=a.replace(/[\\?.{}+]/g,function(a){return'\\'+a}),a=a.replace(/\*/g,'.*'),a},_normalizeText:function(a){return a?this.jQuery.trim(a).replace(/\r\n+|\r+|\n+/gi,'').replace(/\s+/gi,' '):a},_getPropertyIdsFromExpression:function(a){for(var b,c=RegExp(/getValues?\(["']([^"']+)["']\)/,'g'),d=[];null!==(b=c.exec(a));)d.push(b[1]);return d},PageView:function(a,b,c){this.url=a,this.timestamp=c.getTime(),this.referrer=b,this.includeValue=0,this.isSkippedView=!1,this.skippedFor=null,this.isFreeView=!1,this.isHistoricallyAllowedView=!1,this.isAddedToHistory=!1},SkippedViewTracker:function(a){this.skipped={};for(var b,c=[],d=0;d<a.history.skipped.length;d++)b=a.history.skipped[d],a.uniqueOnly&&-1!==a.blueConicClient.util.array.indexOfArray(c,b.u)||(this.skipped[b.sf]=this.skipped[b.sf]?this.skipped[b.sf]+1:1),c.push(b.u)},FreeViewTracker:function(a){this.free={},this.consumedFreeCount=0,this.totalFree=0;for(var b,c=[],d=0;d<a.history.free.length;d++)b=a.history.free[d],a.uniqueOnly&&-1!==a.blueConicClient.util.array.indexOfArray(c,b.u)||(this.free[b.ff]=this.free[b.ff]?this.free[b.ff]+1:1,this.consumedFreeCount++),c.push(b.u)},History:function(a,b,c){function d(a){for(var d=a.length;d--;){var e=a[d];c.getTime()-e.ts>b&&a.splice(d,1)}return a}this.included=a.included?d(a.included):[],this.skipped=a.skipped?d(a.skipped):[],this.free=a.free?d(a.free):[]}});var a = [];var i='contentmeter';a.push({url: 'http://code.jquery.com/jquery-1.11.2.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/contentmeter/ts_045cd023ce2a292ad427f942ccdf7ab3/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(e,t){this.blueConicClient=e,this.context=t},onLoad:function(){var e=this.blueConicClient,t=this.context.getParameters(),n=this.jQuery;if(t){var r=(t.clickcandidates||[]).map(JSON.parse).map(_updateSelectorCandidate),a=(t.contentcandidates||[]).map(JSON.parse).map(_updateSelectorCandidate),i={},o={},c={};r.forEach((function(e){candidateChecker(e,registerClickHandlers)})),a.forEach((function(e){candidateChecker(e,checkContentHandler)}))}function candidateChecker(t,n){var handler=function(){n(t);var r=o[t.interactionId],a=c[t.selecterarea];r||a||e.position.subscribe(t.selecterarea,null,handler)};e.position.subscribe(t.selecterarea,null,handler),n(t)}function registerClickHandlers(e){for(var t=getHandler(e),r=n(e.selecterarea),a=0,i=r.length;a<i;a++)r[a].addEventListener("click",t,{once:!0})}function checkContentHandler(e){isContentConversionMomentMet(e)&&getHandler(e)()}function isContentConversionMomentMet(e){if(o[e.interactionId])return!1;for(var t=n(e.selecterarea),r=0,a=t.length;r<a;r++)if(_textContains(t[r].textContent,e.words))return!0;return!1}function getHandler(t){return i[t.interactionId]||(i[t.interactionId]=function(i,l){var s=o[i],u=c[t.selecterarea];if(!s&&!u){var d=[];d=(d=l instanceof MouseEvent?r.filter((function(e){var t=!o[e.interactionId],r=n(e.selecterarea).is(event.target),a=n(e.selecterarea).find(event.target).length>0;return t&&(r||a)})):a.filter((function(e){return isContentConversionMomentMet(e)}))).filter((function(e){return e.interactionId!==t.interactionId})),c[t.selecterarea]=!0,c[t.interactionId]=!0,d.forEach((function(e){c[e.selecterarea]=!0,o[e.interactionId]=!0}));var f=d.map((function(e){return e.interactionId}));e.createEvent("CONVERSION",i,null,(function(){e.util.log("CONVERSION event registered. Interaction: ["+i+"]")}),{losingInteractions:f})}}.bind(null,t.interactionId)),i[t.interactionId]}function _textContains(e,t){if(!e||!Array.isArray(t))return!1;var n=t.filter((function(e){return Boolean(e)&&"pre_any"!==e})).map((function(e){return e.trim().toLowerCase()}));if(0===n.length)return!0;for(var r=e.toLowerCase(),a=0,i=n.length;a<i;a++)if(r.indexOf(n[a])>=0)return!0;return!1}function _updateSelectorCandidate(e){var t=e.selecterarea;return/^pre_any/.test(t)?t="html":/^pre_header/.test(t)?t="h1, h2, h3, h4, h5, h6":/^pre_/.test(t)&&(t=t.replace(/^pre_/,"")),e.selecterarea=t,e}}});var a = [];var i='conversionlistenerinteractiontype';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.10/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.10/'}]);})();(function(){ InteractionTypeImpl = InteractionType.extend({

    // Called every time a new interaction of this type is created.
    init: function (blueConicClient, interactionContext) {
        // Store the parameters for later use.
        this.blueConicClient = blueConicClient;
        this.interactionContext = interactionContext;
    },

    // Called right after the interactions are initialized.
    getContent: function () {
        return '';
    },

    // Called when an interaction based on this type is executed.
    onLoad: function () {
        this.decodeHere();
        this.surfaceNavigaAccountNumber();
    },

    decodeHere: function () {
        const MNGSession = localStorage.getItem('__MNG_Session');
        if (MNGSession) {
            const jwtToDecode = JSON.parse(MNGSession).idToken;
            let decoded = jwt_decode(jwtToDecode);
            if (decoded.email.includes('@example.com') || decoded.sub.includes(',')) {
                decoded.email = "";
                decoded.sub = "";
            }
            if (!window.decodedJWT) {
                window.decodedJWT = decoded;
            }
            blueConicClient.createEvent("jwt_decoded");
        } else {
            //if MNG session token doesn't exist check for cookie
            this.decodeJWTFromCookie();
        }
    },

    decodeJWTFromCookie: function () {
        const mngEntitlements = this.getCookieValue('mng-entitlements');
        if (mngEntitlements) {
            let decoded = jwt_decode(mngEntitlements);
            //don't record the fake emails we generate in entitler, useless for marketing
            if (decoded.email.includes('@example.com') || decoded.sub.includes(',')) {
                decoded.email = "";
                decoded.sub = "";
            }
            window.jwtFromCookie = decoded;
            blueConicClient.createEvent('jwt_decoded');
        }
    },

    //method checks cookies by name and returns the value for that cookie
    getCookieValue: function (cookieName) {
        const cookies = document.cookie.split('; ');

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split('=');
            const name = cookie[0];
            const value = cookie[1];

            if (name === cookieName) {
                return value;
            }
        }
        return null; // Cookie not found
    },

    surfaceNavigaAccountNumber: function () {
        document.addEventListener('onFinish', async () => {
            const userData = Connext.Storage.GetUserData()
            if (userData.OwnedSubscriptions.length > 0) {
                window.navigaAccountNumber = userData.OwnedSubscriptions[0].AccountNumber
            }
            blueConicClient.createEvent("account_received");
        })
    }
});
var a = [];var i='decodeauth';a.push({url: '/plugins/decodeauth/js/jwt-decode.js', sharing: 'none'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/decodeauth/ts_c1602d83fb39eb0c9917d018374c35c4/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(a,b){this.blueConicClient=a,this.context=b?b:null,this.profile=this.context.getProfile(),this.targetingParameters=[]},getPreloadProperties:function(){return this._getProfilePropertiesFromParameters()},onLoad:function(){if(this.targetingParameters&&0<this.targetingParameters.length){this._updateLocalStorage(),this.blueConicClient.event.subscribe(this.blueConicClient.event.onSegmentChange,this,this._updateLocalStorage);var a=0,b=function(){if(!window.bcDFPCallback){if(40<a)return;a++,window.setTimeout(b,250)}else window.bcDFPCallback(this._getTargetingParameters())};b.call(this)}},_updateLocalStorage:function(){if("undefined"!=typeof window.Storage)try{window.localStorage.setItem("bcDFPTargetingParams",this.blueConicClient.json.stringify(this._getTargetingParameters()))}catch(a){}},_getTargetingParameters:function(){for(var a=[],b=0;b<this.targetingParameters.length;b++){var c=this.targetingParameters[b],d=c.key,e=this._getParamValue(c);d&&e&&a.push({key:d,value:e})}return a},_getParamValue:function(a){if((!a.type||"text"===a.type)&&a.text)return a.text;if("property"===a.type&&a.property)return this.profile.getValues(a.property);if("segments"===a.type&&0<this.blueConicClient.getSegments().length){var b=[],c=this.blueConicClient.getSegments();if(a.segments&&0<a.segments.length)for(var d,e=0;e<c.length;e++){d=c[e];for(var f,g=0;g<a.segments.length;g++)f=a.segments[g],(d.id&&d.id===f.segmentId||d.name===f.segmentName)&&b.push(f.aamCode||f.dcmCode||f.smCode||d.name)}else for(var h=0;h<c.length;h++)b.push(c[h].name);return b}},_getProfilePropertiesFromParameters:function(){var a=[],b=this.context.getParameters(),c=b.targeting_parameters?b.targeting_parameters[0]:b.targeting_parameters;if(!c)return a;this.targetingParameters=this.blueConicClient.json.parse(c);for(var d,e=0;e<this.targetingParameters.length;e++)d=this.targetingParameters[e],"property"===d.type&&d.property&&a.push(d.property);return a}});var a = [];var i='dfpconnection_to';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.0.6/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(e,r){this.blueConicClient=e,this.interaction=r,this.parameters=this.interaction.getParameters();var t=this.parameters.propertyRules&&this.parameters.propertyRules[0]?this.parameters.propertyRules[0]:null;if(t){t=e.json.parse(t),this.preLoadProperties=[];for(var i=0,s=0;s<t.length;s++){var p=t[s];p.profileproperty&&p.decay&&(this.preLoadProperties.push(p.profileproperty),p.decay>i&&(i=p.decay,this.property=p.profileproperty))}}else{var a=this.parameters.property?this.parameters.property[0]:this.parameters.property;a&&(this.property=this.blueConicClient.json.parse(a)[0].profileproperty,this.preLoadProperties=[this.property])}},getPreloadProperties:function(){return this.preLoadProperties},onLoad:function(){if(this.preLoadProperties.length>0){var e=this.interaction.getProfile(),r=this.parameters.engagement_rules?this.parameters.engagement_rules[0]:this.parameters.engagement_rules;if(!r)return;if(0===(r=this.blueConicClient.json.parse(r)).length)return;var t=new this.BlueConicEngagement(this.blueConicClient,e,this.property,!1,"",this.jQuery);if(t.applyEngagementRules(r),t.isChanged())t.save();else{for(var i=!1,s=0;s<this.preLoadProperties.length;s++){var p=this.preLoadProperties[s];e.getValue(p)||(e.setValue(p,"0"),i=!0)}i&&this.blueConicClient.profile.updateProfile()}}}});var a = [];var i='engagement_score';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/6.5.1/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js', sharing: 'local'});a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/6.5.1/frontend/src/node_modules/@blueconic/engagement-service/engagementService.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/6.5.1/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(e,r){this.blueConicClient=e,this.context=r},getPreloadProperties:function(){return this.preloadProperties=[],this.context&&(this.preloadProperties=this.getProfilePropertiesFromParameters(this.context.getParameters())),this.preloadProperties},onLoad:function(){var e=this.context.getProfile(),r=this.context.getParameters(),t=this.jQuery,i=r.listener_rules?r.listener_rules[0]:r.listener_rules;if(i){i=this.blueConicClient.json.parse(i);var s=new this.RuleService(this.blueConicClient,e,t);s.applyRules(i),s.save()}},getProfilePropertiesFromParameters:function(e){var r=[],t=e.listener_rules?e.listener_rules[0]:e.listener_rules;if(!t)return r;t=this.blueConicClient.json.parse(t);for(var i=0;i<t.rules.length;i++){var s=t.rules[i];!s.profileproperty||"set_if_empty"!==s.addset&&"merge"!==s.addset||r.push(s.profileproperty[0].profileproperty)}return r}});var a = [];var i='enrichprofilebyvisitorbehavior';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'enrichProfileByVisitorBehavior/5.4.2/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js', sharing: 'local'});a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'enrichProfileByVisitorBehavior/5.4.2/frontend/src/js/ruleService.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'enrichProfileByVisitorBehavior/5.4.2/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(e,r){this.blueConicClient=e,this.context=r,this.parameters=this.context.getParameters(),this.rules=this._migrate(this.parameters.version||1)},getPreloadProperties:function(){return this.preloadProperties=[],this.context&&(this.preloadProperties=this.getProfilePropertiesFromParameters()),this.preloadProperties},onLoad:function(){if(this.rules){var e=this.context.getProfile();new window.FormRuleService(this.blueConicClient,e,this.jQuery).applyRules(this.rules)}},getProfilePropertiesFromParameters:function(){if(this.rules){for(var e=[],r=0;r<this.rules.length;r++){var t=this.rules[r];t.profileProperty&&"set_if_empty"===t.addset&&e.push(t.profileProperty)}return e}},_migrate:function(e){var r=this.parameters.form_listener_rules?this.parameters.form_listener_rules[0]:this.parameters.form_listener_rules;return r=this.blueConicClient.json.parse(r),1===e&&(e=2,r=this._migrateToVersion2(r)),r},_migrateToVersion2:function(e){if(!e)return e;e=e.rules||e;for(var r=0;r<e.length;r++){e[r].id=e[r].id||e[r].identifier,delete e[r].identifier,e[r].profileproperty&&!e[r].profileProperty&&(e[r].profileProperty=e[r].profileproperty[0]&&e[r].profileproperty[0].profileproperty||"",delete e[r].profileproperty);var t=this._migrateConverterMappingsToVersion2(e[r]);t&&(e[r].converter.mappings=t)}return e},_migrateConverterMappingsToVersion2:function(e){if(e&&e.converter&&e.converter.mappings){for(var r=[],t=0;t<e.converter.mappings.length;t++){var i=e.converter.mappings[t];i&&i.original&&i.converted?r.push(i):r.push({id:i.identifier||i.id,original:i.o,converted:i.c})}return r}}});var a = [];var i='enrichprofilewithvisitorinput';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.4.3/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js', sharing: 'local'});a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.4.3/frontend/src/node_modules/@blueconic/frontend-form-rule-service/formRuleService.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.4.3/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(t,n){this.blueConicClient=t,this.rules=[],this.timeouts=[];try{this.rules=this.blueConicClient.json.parse(n.getParameters().rules[0])}catch(i){}this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange,this,(function(){this._unsubscribePositionListeners(),this._resetTimeouts(),this.onLoad()})),this._positionListeners=[]},onLoad:function(){for(var t=0;t<this.rules.length;t++){var n=this.rules[t];"click"===n.type?this._setClickBindings(n,!0):this._createEvent(n)}},_resetTimeouts:function(){this.timeouts.forEach((function(t){clearTimeout(t)})),this.timeouts=[]},_createEvent:function(t){var n=t.area.selectedoption,i=!1;if("selector"===n&&t.area.selector?(t.words&&this._contentMatchesWords(this._getContentForSelector(t),t.containsmatches,t.words)||t.anyWord&&this._getContentForSelector(t))&&(i=!0):"variable"===n&&t.area.variable?(t.words&&this._contentMatchesWords(this._getVariableValue(t.area.variable),t.containsmatches,t.words)||t.anyWord&&this._getVariableValue(t.area.variable))&&(i=!0):"customjs"===n&&t.area.customjs&&(t.words&&this._contentMatchesWords(this._getCustomJsValue(t.area.customjs),t.containsmatches,t.words)||t.anyWord&&this._getCustomJsValue(t.area.customjs))&&(i=!0),i){var s=0;t.delay&&!isNaN(parseInt(t.delay))&&(s=parseInt(t.delay));var r=setTimeout(function(){this.blueConicClient.createEvent(t.event.id)}.bind(this),s);this.timeouts.push(r)}},_setClickBindings:function(t,n){if(t.clickarea.selector){var i=this.jQuery,s=null;try{s=i(t.clickarea.selector)}catch(r){return void this.blueConicClient.util.log("Invalid click selector: "+r)}0===s.length?this.blueConicClient.position.subscribe(t.clickarea.selector,this,(function(){this._setClickBindings(t,!1)})):s.off("click."+t.id).on("click."+t.id,{clickRule:t},function(t){this.lastEvent=t;try{this._createEvent(t.data.clickRule)}catch(r){}}.bind(this)),n&&i(document).on("click",t.clickarea.selector,{clickRule:t},function(t){if(!this.lastEvent||this.lastEvent.originalEvent!==t.originalEvent)try{this._createEvent(t.data.clickRule)}catch(r){}}.bind(this))}},_contentMatchesWords:function(t,n,i){if(!t)return!1;for(var s=0;s<i.length;s++)if("contains"===n){if(-1!==t.indexOf(i[s].toLowerCase()))return!0}else if(t===i[s].toLowerCase())return!0;return!1},_getContentForSelector:function(rule){var selector=rule.area.selector,contentAreas=null;if(-1!==selector.indexOf("jQuery("))contentAreas=function(selector,jQuery){return eval("var jQuery = arguments[1]"),eval(selector)}(selector,this.jQuery);else try{contentAreas=this.jQuery(selector)}catch(e){this.blueConicClient.util.log("Invalid content selector: "+e)}if(contentAreas&&contentAreas instanceof this.jQuery&&contentAreas.length>0){var contentArr=[];return this.jQuery.each(contentAreas,function(t,n){var i=this.jQuery(n);i.attr("content")?contentArr.push(this._normalizeText(i.attr("content"))):i.attr("src")?contentArr.push(this._normalizeText(i.attr("src"))):contentArr.push(this._normalizeText(i.text()))}.bind(this)),contentArr.join().toLowerCase()}if("content"===rule.type){var subscription=this.blueConicClient.position.subscribe(selector,this,(function(){this._createEvent(rule)}));this._positionListeners.push(subscription)}},_unsubscribePositionListeners:function(){this._positionListeners&&this._positionListeners.forEach((function(t){this.blueConicClient.position.unsubscribe(t)})),this._positionListeners=[]},_getVariableValue:function(t){try{for(var n=t.split("."),i=window[n.shift()];n.length>0;)i=i[n.shift()];return i instanceof Array?i.join().toLowerCase():"object"==typeof i||"function"==typeof i?this.blueConicClient.json.stringify(i):i?(""+i).toLowerCase():null}catch(s){return null}},_getCustomJsValue:function(customjs){try{var value=function(customjs,jQuery){return eval("var jQuery = arguments[1]"),eval("var $ = arguments[1]"),eval(customjs)}(customjs,this.jQuery);return value&&value instanceof Object&&(value=this._stringify(value)),value?(""+value).toLowerCase():null}catch(e){return null}},_stringify:function(t){try{return this.blueConicClient.json.stringify(t)}catch(i){var n=[];return JSON.stringify(obj,(function(t,i){if("object"==typeof i&&null!==i){if(-1!==n.indexOf(i))return;n.push(i)}return i}))}},_normalizeText:function(t){return t?t.replace(/^\s+|\s+$/g,"").replace(/\r\n+|\r+|\n+/gi,"").replace(/\s+/gi," "):t}});var a = [];var i='eventtrigger';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.2/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.2/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(a,b){this.blueConicClient=a,this.context=b,this.parameters=this.context.getParameters()},_ouibounce:function(){var a=this,b="sensitivity",c="delay";this.ouibounce({aggressive:!0,timer:0,sensitivity:this.parameters[b]?parseInt(this.parameters[b][0]):20,delay:this.parameters[c]?parseInt(this.parameters[c][0]):0,callback:function(){window.blueConicClient&&window.blueConicClient.exitIntentThrown||a.blueConicClient.createEvent("exitintent"),window.blueConicClient&&(window.blueConicClient.exitIntentThrown=!0)}})},onLoad:function(){this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange,this,function(){window.blueConicClient&&window.blueConicClient.exitIntentThrown&&(window.blueConicClient.exitIntentThrown=!1,this._ouibounce())}),this._ouibounce()}});var a = [];var i='exitintent';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.0.5/js/ouibounce.js', sharing: 'none'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.0.5/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(e,i){if(this.blueConicClient=e,this.context=i||null,this.parameters=this.context.getParameters(),this._initPublishedEvents(),this.parameters){this.blueConicClient.event.subscribe("PAGEVIEW",this,(function(){window._bcp=window._bcp||{},window._bcp.publishedEvents=window._bcp.publishedEvents||{},window._bcp.publishedEvents.viewEvent={}})),"true"!==this.parameters.hasOverlay[0]||this._isViewEventPublished()||this._handleView();var t=this.parameters.positions;if(t)for(var n=0;n<t.length;n++){var s=t[n];this.blueConicClient.position.subscribe(s,this,this._handlePosition)}}},_initPublishedEvents:function(){window._bcp=window._bcp||{},window._bcp.publishedEvents=window._bcp.publishedEvents||{},window._bcp.publishedEvents.viewEvent=window._bcp.publishedEvents.viewEvent||{},window._bcp.publishedEvents.clickEvent=window._bcp.publishedEvents.clickEvent||{}},_handleClick:function(){this._isClickEventPublished()||(this._setClickEventPublished(!0),this.blueConicClient.createEvent("CLICK",this.context.getInteractionId()))},_handleView:function(){this._setViewEventPublished(!0),this.blueConicClient.createEvent("VIEW",this.context.getInteractionId())},_handlePosition:function(e){this._isViewEventPublished()||this.blueConicClient.isInEditMode()||this._handleView();var i=this;try{var t="bcCtrl"+this.context.getInteractionId();if(this.jQuery(e+" a").off("click."+t).on("click."+t,(function(){i._handleClick()})),this.jQuery(document).off("click."+t).on("click."+t,e+" a",(function(){i._handleClick()})),this.jQuery(document).off("submit."+t).on("submit."+t,e+" form",(function(){i._handleClick()})),this.jQuery(e).find("iframe").length>0){window.focus();var n=!1,s=this.jQuery(this.jQuery(e).find("iframe"));s.off("mouseenter."+t).on("mouseenter."+t,(function(){n=!0})),s.off("mouseleave."+t).on("mouseleave."+t,(function(){n=!1})),document.querySelectorAll(window).removeEventListener("blur."+t).addEventListener("blur."+t,function(){n&&this._handleClick()}.bind(this))}}catch(o){}},onLoad:function(){if(this.parameters){var e=this.parameters.positions;if(e)for(var i=0;i<e.length;i++){var t=e[i];this.jQuery(t).length>0&&this._handlePosition(t)}}},_isViewEventPublished:function(){return Boolean(window._bcp.publishedEvents.viewEvent[this.context.getInteractionId()])},_setViewEventPublished:function(e){window._bcp.publishedEvents.viewEvent[this.context.getInteractionId()]=e},_isClickEventPublished:function(){return Boolean(window._bcp.publishedEvents.clickEvent[this.context.getInteractionId()])},_setClickEventPublished:function(e){window._bcp.publishedEvents.clickEvent[this.context.getInteractionId()]=e}});var a = [];var i='globallistener_controlgroup';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.2/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.2/'}]);})();(function(){ var InteractionTypeImpl;(()=>{"use strict";var t,e,i,n,o,s={d:(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},a={};s.d(a,{default:()=>l}),(o=t||(t={})).SEGMENT="segment",o.LIFECYCLE="lifecycle",o.PROPERTY="property",o.TEXT="text",o.STORE="store",o.EMPTY="empty",o.GROUP="group",o.TIMELINE_EVENT="timelineEvent",o.EXPORT_DATA_PROCESSOR="exportDataPreprocessor",o.GROUP_PROPERTY="groupProperty",(n=e||(e={})).FIXED="fixed",n.SEGMENT="segment",n.SEGMENTS="segments",n.LIFECYCLES="lifecycles",n.PROPERTY="property",n.UNIQUE_PROPERTY="uniqueproperty",n.GROUP_PROPERTY="groupProperty",n.PROPERTY_SOURCE_TENANT="propertySourceTenant",n.GROUP_ID="groupId",n.TEXT="text",n.STORE="store",n.PROFILE_ID="profileid",n.PERMISSION="permission",n.ALL_INTERACTIONS="allInteractions",n.PAGEVIEW_INTERACTIONS="pageviewInteractions",n.TIMELINE_EVENT_TYPE="timeline_event_type",n.TIMELINE_EVENT="timelineEvent",n.TIMELINE_EVENT_CLEANROOM="timelineEventCleanroom",n.TIMELINE_DATE_ID="timelineDateId",n.TIMELINE_EVENT_ID="timelineEventId",n.TIMELINE_PROPERTY="timelineProperty",n.PLUGIN="plugin",n.EXPORT_DATA_PROCESSOR="exportDataPreprocessor",function(t){t.SET_OR_CLEAR="setOrClear",t.ADD="add",t.SUM="sum",t.SET_IF_EMPTY="setIfEmpty",t.SET="set"}(i||(i={}));const r=Object.freeze({SETUP:"setup",IMPORT:"import",EXPORT:"export"});e.PROPERTY,e.PROFILE_ID,e.SEGMENTS,e.LIFECYCLES,e.PAGEVIEW_INTERACTIONS,e.PERMISSION,e.TEXT;class l extends InteractionType{init(t,e){this.blueConicClient=t,this.context=e||null,this.profile=this.context.getProfile(),this.parameters=this.context.getParameters(),this.objectName=this.getObjectName(this.parameters.goalParameters),this._goals=[];const i=e.getGoals().reduce((function(t,e){return t[e.getId()]=!0,t}),{});if(this.parameters.goalParameters)for(const t of this.parameters.goalParameters){const e=this.blueConicClient.json.parse(t);e.active&&i[e.id]&&this._goals.push(e)}this.connectionContext={LAST_PUSH_PROPERTY:"gtmpflt"+this.context.getInteractionId(),VARIABLE_STATE_PUSH_PROPERTY:"gtmpfst"+this.context.getInteractionId(),profile:this.profile,variables:[],SENT_TO_SYSTEM_PROPERTY:"sent_to_system",SENT_TO_CONNECTION_PROPERTY:"sent_to_connection",RECEIVED_FROM_SYSTEM_PROPERTY:"received_from_system",RECEIVED_FROM_CONNECTION_PROPERTY:"received_from_connection"}}initDataLayerUtil(){this.bcConnectionUtil.md5Lib=this.md5,this._bcDatalayerUtil=new window.BlueConicDataLayerUtility(this.objectName,this.blueConicClient,this.bcConnectionUtil,this.context,this.connectionContext,this.profile),this._bcDatalayerUtil.LAST_PUSH_PROPERTY="gtmpflt"+this.context.getInteractionId(),this._bcDatalayerUtil.VARIABLE_STATE_PUSH_PROPERTY="gtmpfst"+this.context.getInteractionId()}async onLoad(){return new Promise((t=>{this.initDataLayerUtil();let e=0;const i=async()=>{if(this._bcDatalayerUtil.getDataLayer())await this._handleGoals(),t();else{if(e>20)return void t();e++,window.setTimeout(i,250)}};i.call(this)}))}async loadTimelineEventTypes(){var t;const e=[],i=this.blueConicClient.getRestEndpoint(this.context.getInteractionTypeId())+"/timelineEventTypePropertyTypes";for(const i of this._goals)i.categoryId===r.IMPORT&&(null===(t=i.state.importEventMapping)||void 0===t?void 0:t.length)&&e.push(...i.state.importEventMapping.map((t=>t.eventTypeId)).filter((t=>t.length>0)));await this._bcDatalayerUtil.loadTimelineEventTypeProperties(e,i)}async _handleGoals(){var t;await this.loadTimelineEventTypes();for(const e of this._goals){const i=null===(t=null==e?void 0:e.state)||void 0===t?void 0:t.segment;this._bcDatalayerUtil.visitorInSegment(i)&&(e.categoryId===r.EXPORT&&this._handleExportGoal(e.state,e.id),e.categoryId===r.IMPORT&&this._handleImportGoal(e.state))}}_handleImportGoal(t){let e=this._bcDatalayerUtil.getDataLayer();if(!e)return;this._bcDatalayerUtil.doImport(t),this._publishEvents();let i=e.length;window.setInterval((()=>{e=this._bcDatalayerUtil.getDataLayer(),i!==e.length&&(this._publishEvents(i),i=e.length)}),1e3)}_publishEvents(t){var e;const i=this._bcDatalayerUtil.getDataLayer();if(t=t||0,Array.isArray(i))for(let n=t;n<i.length;n++){const t=null===(e=null==i?void 0:i[n])||void 0===e?void 0:e.event;t&&this.blueConicClient.event.publish("GTM:"+t,[i[n]])}}_handleExportGoal(t,e){this._bcDatalayerUtil.doExport(t,e),!window[this.objectName]||window[this.objectName].push?(t.pushInteractions&&this.blueConicClient.event.subscribe("VIEW",this,this._pushInteractionView),t.passOnEvents&&this._subscribeToPassOnEvents()):console.warn("window."+this.objectName+" does not have a push function: is the correct Object Name entered?")}getPreloadProperties(){var t,e,i,n;const o=[null===(t=this.connectionContext)||void 0===t?void 0:t.SENT_TO_SYSTEM_PROPERTY,null===(e=this.connectionContext)||void 0===e?void 0:e.SENT_TO_CONNECTION_PROPERTY,null===(i=this.connectionContext)||void 0===i?void 0:i.RECEIVED_FROM_SYSTEM_PROPERTY,null===(n=this.connectionContext)||void 0===n?void 0:n.RECEIVED_FROM_CONNECTION_PROPERTY];for(const t of this._goals)t.categoryId===r.EXPORT?o.push(...this._setPreloadPropertiesExport(t)):t.categoryId===r.IMPORT&&o.push(...this._setPreloadPropertiesImport(t));return o}_setPreloadPropertiesExport(e){const i=[];if(i.push("gtmpfst"+this.context.getInteractionId()+"_"+e.id),i.push("gtmpflt"+this.context.getInteractionId()+"_"+e.id),e.state.exportMapping)for(const n of e.state.exportMapping)n.from.dataType===t.PROPERTY&&n.from.values.length>0&&i.push(n.from.values[0].id);return i}_setPreloadPropertiesImport(t){const e=[];if(t.state.importMapping)for(const i of t.state.importMapping)i.to.values.length>0&&e.push(i.to.values[0].id);return e}_pushInteractionView(t,e){const i=this.blueConicClient.getInteractionNamesById(e);if(null===i)return;const n=i.variantName?i.name+" / "+i.variantName:i.name;window[this.objectName].push({event:"bcInteractionView",name:n})}_subscribeToPassOnEvents(){const t=[["inactivity","Inactivity"],["exitintent","Exit Intent"],["cm_firstview","Content Meter View 1"],["cm_exceeded","Content Meter Exceeded"],["cm_lastview","Content Meter Last View"],["cm_excluded","Content Meter Excluded View"],["cm_bottom","Content Meter Bottom Range"],["cm_middle","Content Meter Middle Range"],["cm_top","Content Meter Top Range"],["cm_already_viewed","Content Meter Already Viewed"],["cm_free_view","Content Meter Free View"],["cm_last_free_view","Content Meter Last Free View"]];let e;for(e=2;e<10;e++)t.push(["cm_view_"+e,"Content Meter View "+e]);for(e=1;e<10;e++)t.push(["cm_free_view_"+e,"Content Meter Free View "+e]);t.forEach((t=>{this.blueConicClient.event.subscribe(t[0],this,(()=>{window[this.objectName].push({event:"bcEvent",bcEventName:t[1]})}))}))}getObjectName(t){var e;const i=this.getSetupGoal(t);return(null===(e=null==i?void 0:i.state)||void 0===e?void 0:e.objectName)||"dataLayer"}getSetupGoal(t){var e;return null===(e=t.map((t=>JSON.parse(t))).filter((t=>t.categoryId===r.SETUP)))||void 0===e?void 0:e[0]}}InteractionTypeImpl=a.default})();var a = [];var i='gtmconnection';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.0.2/web/node_modules/@blueconic/connection_lib/connection_lib.js', sharing: 'local'});a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.0.2/web/node_modules/@blueconic/datalayer-library/dist/index.js', sharing: 'local'});a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.0.2/web/src/web/lib/md5.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/4.0.2/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({_timeout:null,_timestamp:null,_interval:200,init:function(t,e){this.blueConicClient=t,this.context=e||null},onLoad:function(){var t=this;this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange,this,(function(e,i){this._setTimestamp(),clearTimeout(t._timeoutID),t._timeoutID=setTimeout((function(){t._checkTimeout()}),t._interval)})),this._setTimestamp();var e,i=this.context.getParameters(),n="true"===i.clicks[0],o="true"===i.inputs[0];if(e=!i.scrolling||"true"===i.scrolling[0],this._timeout=i.timeout[0],this._timeout?isNaN(parseInt(this._timeout))||(this._timeout=1e3*parseInt(this._timeout)):this._timeout=6e4,n||o||e){if(n&&document.addEventListener("click",(function(){t._setTimestamp()})),o){var c=document.querySelectorAll("input"),s=document.querySelectorAll("textarea"),u=document.querySelectorAll("select");Array.prototype.forEach.call(c,(function(e){e.addEventListener("keyup",(function(){t._setTimestamp()}))})),Array.prototype.forEach.call(c,(function(e){e.addEventListener("change",(function(){t._setTimestamp()}))})),Array.prototype.forEach.call(s,(function(e){e.addEventListener("keyup",(function(){t._setTimestamp()}))})),Array.prototype.forEach.call(u,(function(e){e.addEventListener("change",(function(){t._setTimestamp()}))}))}e&&window.addEventListener("scroll",(function(){t._setTimestamp()})),this._timeoutID=setTimeout((function(){t._checkTimeout()}),t._interval)}},_handleInactivity:function(){this.blueConicClient.createEvent("inactivity")},_checkTimeout:function(){var t=(new Date).getTime(),e=this;t-this._timestamp>this._timeout?this._handleInactivity():e._timeoutID=setTimeout((function(){e._checkTimeout()}),e._interval)},_setTimestamp:function(){this._timestamp=(new Date).getTime()}});var a = [];var i='inactivitylistener';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.0/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(t,e){this.blueConicClient=t,this.context=e,this.parameters=this.context.getParameters(),this.isInEditMode=this.blueConicClient.isInEditMode(),this.fancyBoxLib="frontend/src/lib/fancybox/jquery.fancybox.pack.js";var n=this.context.getInteractionTypeId();this.baseURL=this.blueConicClient.getBaseURL(n);var i=this.parameters.content+"";this.htmlFragment=this.createElement(i),this.profile=t.profile.getProfile(),this.inlineCss=null,this._timestamp=null,this._observer=null,this._eventListenerFunction=null,this._lightboxTriggered=!1,this.blueConicClient._renderedInteractions=this.blueConicClient._renderedInteractions||[],this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange,this,(function(){var t=this.blueConicClient.util.array.indexOfArray(this.blueConicClient._renderedInteractions,this.context.getInteractionId());this.blueConicClient._renderedInteractions.splice(t,1)}))},getPreloadProperties:function(){for(var t,e=this.context.getParameters().content+"",n=/data-bc-preload="([^"]*)"/g,i=[];null!==(t=n.exec(e));)for(var o=t[1].split(","),r=0;r<o.length;r++)i.push(o[r]);for(var a=this.htmlFragment?this._getPropertiesFromPlaceholders(this.htmlFragment.innerHTML):[],c=0;c<i.length;c++)a.push(i[c]);return a},onMessageReceived:function(t){this.blueConicClient.event.publish("lightbox.messageReceived",t)},onLoad:function(){window.bc=window.bc||{},window.bc.jQuery=this.jQuery,window.bc.$=this.jQuery,window.bcFancyboxLoading?this.blueConicClient.event.subscribe("bcFancyboxLoaded",this,(function(){this.onLoad()})):this.blueConicClient._lightboxinteractiontypeFancybox?(this.jQuery.fancybox=this.blueConicClient._lightboxinteractiontypeFancybox,this._onLoadWithLibrary()):(window.bcFancyboxLoading=!0,this.blueConicClient.util.loadScript(this.baseURL+this.fancyBoxLib,this,(function(){this.blueConicClient._loadLightboxInteractionTypeFancyBox(window,document,this.jQuery),this.blueConicClient._lightboxinteractiontypeFancybox=this.jQuery.fancybox,delete this.blueConicClient._loadLightboxInteractionTypeFancyBox,this._onLoadWithLibrary(),window.bcFancyboxLoading=!1,this.blueConicClient.event.publish("bcFancyboxLoaded")})))},_onLoadWithLibrary:function(){if(this.isInEditMode)this.showLightbox();else{var t=this.parameters.selected_when||[],e=this.getParameter("click_selector");e&&-1!==this.blueConicClient.util.array.indexOfArray(t,"click_selector")&&this._addClickTriggerBindings(e);var n=this.getParameter("content_condition");n&&-1!==this.blueConicClient.util.array.indexOfArray(t,"content_condition")&&this._addContentPolling(n);var i=this.parameters.scroll_depth&&this.parameters.scroll_depth[0]&&!isNaN(this.parameters.scroll_depth[0])?parseInt(this.parameters.scroll_depth[0]):0;i&&-1!==this.blueConicClient.util.array.indexOfArray(t,"scroll_depth")&&this._addScrollBinding(i),0===t.length&&this.showLightbox(),this._addCloseEventHandler()}},_getScrollPercent:function(){return document.documentElement.scrollTop/(document.documentElement.scrollHeight-window.innerHeight)*100},_checkScrollCondition:function(t){this._getScrollPercent()>=t&&this.showLightbox()},_addScrollBinding:function(t){this._checkScrollCondition(t),document.addEventListener("scroll",function(){this._checkScrollCondition(t)}.bind(this))},_addClickTriggerBindings:function(t){try{var e=this.jQuery(t);e.length>0?e.off("click.lightboxinteractiontype").on("click.lightboxinteractiontype",this.jQuery.proxy((function(){this.showLightbox(!0)}),this)):this.blueConicClient.position.subscribe(t,this,this.jQuery.proxy(this._addClickTriggerBindings,this,t))}catch(n){}},_addContentPolling:function(t){this._checkContentCondition(t);var e=this,n=document.getElementsByTagName("body")[0];if(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)this._observer=new MutationObserver((function(){e._observeContentChanges(t)})),this._observer.observe(n,{childList:!0,subtree:!0});else if(window.addEventListener)this._eventListenerFunction=function(){e._observeContentChanges(t)},n.addEventListener("DOMNodeInserted",this._eventListenerFunction,!1);else var i=setInterval((function(){e._lightboxTriggered?clearInterval(i):e._checkContentCondition(t)}),500)},_observeContentChanges:function(t){if(this._lightboxTriggered){this._observer?this._observer.disconnect():document.getElementsByTagName("body")[0].removeEventListener("DOMNodeInserted",this._eventListenerFunction,!1)}else{var e=this,n=(new Date).getTime();this._timestamp=n,setTimeout((function(){e._timestamp!==n||e._lightboxTriggered||e._checkContentCondition(t)}),250)}},_checkContentCondition:function(t){this.jQuery(t).length>0&&this.jQuery(t).html()&&this.jQuery(t).html().length>0&&this.showLightbox()},closeLightbox:function(){this.isInEditMode||this.jQuery.fancybox.close()},_addCloseEventHandler:function(){this.blueConicClient.event.subscribe("closeoverlay",this,(function(t,e){e instanceof Array&&e[0]===this.context.getInteractionId()&&this.closeLightbox()}))},showLightbox:function(t){if(-1===this.blueConicClient.util.array.indexOfArray(this.blueConicClient._renderedInteractions,this.context.getInteractionId())&&(!this._lightboxTriggered||this.isInEditMode||t)){this.blueConicClient._renderedInteractions.push(this.context.getInteractionId());var e=this.parameters.delay&&this.parameters.delay[0]&&!isNaN(this.parameters.delay[0])?1e3*parseInt(this.parameters.delay[0]):0;!this.isInEditMode&&e>0?window.setTimeout(this._showLightbox.bind(this),e):this._showLightbox()}},getSettings:function(){var t=null,e=this.getParameter("width")||null,n=this.getParameter("height")||null,i="true"===this.getParameter("hide_after_close");this.htmlFragment&&(t=this.htmlFragment.innerHTML);var o=!(e||n),r=this.getParameter("show_close"),a=this.getParameter("alternative_close"),c={parent:"body",autoSize:o,autoCenter:!1,autoWidth:!e,autoHeight:!n,closeBtn:"false"!==r,width:e||"auto",height:n||"auto",keys:{close:"false"===a||this.isInEditMode?null:[27]},helpers:{overlay:{locked:!0,closeClick:"false"!==a&&!this.isInEditMode,speedOut:0}}};this.getParameter("template")&&(c.padding=0),(t||this.isInEditMode)&&(c.content=" ",c.type="inline");var s=this,l=this.jQuery,h=this.getParameter("effect"),d=this.getParameter("effect_slide_direction")||"left";if(this.isInEditMode&&(h="noEffect"),h&&"noEffect"!==h&&("fadeIn"===h?l.fancybox.transitions.openEffect=function(){var t=l.fancybox._getPosition(!0);t.opacity=0,l.fancybox.wrap.css(t).show().animate({opacity:1},{duration:l.fancybox.current.openSpeed,complete:l.fancybox._afterZoomIn})}:"slideIn"===h&&(l.fancybox.transitions.openEffect=function(){var t,e=l.fancybox._getPosition(!0),n=window.innerHeight,i=window.innerWidth,o=l.fancybox.current.wrap[0].getBoundingClientRect(),r="top"===d||"bottom"===d?"top":"left";"top"===d||"bottom"===d?t=n-(n-o.height)/2:"left"!==d&&"right"!==d||(t=i-(i-o.width)/2),e[r]="top"===d||"left"===d?parseInt(e[r])-t+"px":parseInt(e[r])+t+"px";var a={},c="top"===d||"left"===d?"+":"-";a[r]=c+"="+t+"px",l.fancybox.wrap.css(e).show().animate(a,{duration:l.fancybox.current.openSpeed,complete:l.fancybox._afterZoomIn})}),l.fancybox.transitions.openEffect&&(c.openMethod="openEffect",c.openSpeed=600)),t)c.afterLoad=function(t){s.emptyElementsWithAttribute(s.htmlFragment,"div","data-bc-external");try{t.inner.html(s.htmlFragment.innerHTML)}catch(n){console.error("[BC] Error occured when injecting the HTML in the DOM",n)}s.isInEditMode&&s.blueConicClient.event.publish("lightbox.interactionLoaded",{interaction:s}),s.handleComplexElements(t.inner[0]);var e=s.getParameter("javascript");if(e&&!s.blueConicClient.isInEditMode()){e=e.replace(/(^|\W)blueConicVariantId(\W|$)/g,'$1"'+s.context.getInteractionId()+'"$2'),s._inlineJs=s.jQuery("<script>"+e+"<\/script>");try{s._inlineJs.appendTo(s.jQuery("body"))}catch(n){console.error(n)}}};else if(s.isInEditMode){c.afterLoad=function(){s.blueConicClient.event.publish("lightbox.interactionLoaded",{interaction:s})}}return this.isInEditMode?c.afterShow=function(){l(".fancybox-close").off("click.fb")}:i&&(c.afterShow=function(){Array.prototype.forEach.call(document.querySelectorAll(".fancybox-close"),(function(t){t.addEventListener("click",(function(){s.blueConicClient.doNotShowAgain(s.context.getInteractionId())}))}))}),c.afterClose=function(){var t=s.blueConicClient.util.array.indexOfArray(s.blueConicClient._renderedInteractions,s.context.getInteractionId());s.blueConicClient._renderedInteractions.splice(t,1)},c},updateLightbox:function(){this.jQuery.fancybox.update()},getCurrentFancyBox:function(){return this.jQuery.fancybox.current},_showLightbox:function(){this._lightboxTriggered=!0;var t=this.getParameter("close_icon"),e=this.getParameter("close_icon_hover"),n=this,i=this.jQuery;function doLightBox(){if(!this.isInEditMode){this.blueConicClient.createEvent("VIEW",this.context.getInteractionId()),!!this.parameters.forceclick&&("true"===this.parameters.forceclick[0]||!0===this.parameters.forceclick[0])&&this.blueConicClient.createEvent("CLICK",this.context.getInteractionId());var t=this.getParameter("click_event_selector");if(t){this.jQuery("body").one("click",t,function(t){this.lastClickEvent&&this.lastClickEvent.originalEvent===t.originalEvent||this._logClickEvent(t)}.bind(this));try{this.jQuery(t).one("click",function(t){this.lastClickEvent=t,this._logClickEvent(t)}.bind(this))}catch(i){}}}Array.prototype.forEach.call(document.querySelectorAll(".fancybox-wrap"),(function(t){t.parentNode.removeChild(t)})),Array.prototype.forEach.call(document.querySelectorAll(".fancybox-overlay"),(function(t){t.parentNode.removeChild(t)}));var e=function findHighestZIndex(t){var e,n=document.getElementsByTagName(t),i=0,o=0;for(o=0;o<n.length;o++)"auto"!==(e=document.defaultView.getComputedStyle(n[o],null).getPropertyValue("z-index"))&&parseInt(e)>i&&(i=parseInt(e));return i}("*");this.htmlFragment&&(this.emptyElementsWithAttribute(this.htmlFragment,"div","data-bc-external"),this.isInEditMode||this.handlePlaceholders(this.htmlFragment)),this.jQuery.fancybox(this.getSettings());var n=2147483647;e>8e3&&e+1030<n&&(Array.prototype.forEach.call(document.querySelectorAll(".fancybox-opened"),(function(t){t.style.zIndex=e+1030})),Array.prototype.forEach.call(document.querySelectorAll(".fancybox-wrap"),(function(t){t.style.zIndex=e+920})),Array.prototype.forEach.call(document.querySelectorAll(".fancybox-overlay"),(function(t){t.style.zIndex=e+910}))),e+1030>=n&&(Array.prototype.forEach.call(document.querySelectorAll(".fancybox-opened"),(function(t){t.style.zIndex=n})),Array.prototype.forEach.call(document.querySelectorAll(".fancybox-wrap"),(function(t){t.style.zIndex=2147483646})),Array.prototype.forEach.call(document.querySelectorAll(".fancybox-overlay"),(function(t){t.style.zIndex=2147483645}))),this.isInEditMode||this._setupFrontEndBindings()}this.handleStyling(t,e,(function(t){if(!t||(console.error(t),n.isInEditMode))n.handleJavascript().then((function(){doLightBox.call(n,i)}),(function(t){if(console.error("[BC] Loading Javascript urls for the lightbox failed:",t),n.isInEditMode)doLightBox.call(n,i);else{var e=n.blueConicClient.util.array.indexOfArray(n.blueConicClient._renderedInteractions,n.context.getInteractionId());n.blueConicClient._renderedInteractions.splice(e,1)}}));else{var e=n.blueConicClient.util.array.indexOfArray(n.blueConicClient._renderedInteractions,n.context.getInteractionId());n.blueConicClient._renderedInteractions.splice(e,1)}}))},_logClickEvent:function(t){t&&t.originalEvent&&t.originalEvent._blueConicLoggedClickEvent===this.context.getInteractionId()||(t&&t.target&&t.target.pathname&&t.target.hostname&&0===t.target.pathname.indexOf("/s/")&&-1!==t.target.hostname.indexOf("blueconic")||(t.originalEvent&&(t.originalEvent._blueConicLoggedClickEvent=this.context.getInteractionId()),this.blueConicClient.createEvent("CLICK",this.context.getInteractionId())))},_setupFrontEndBindings:function(){var t=this.jQuery(".bcLightboxDontShowAgainLink"),e=this.jQuery(".bcLightboxCloseButton");t.length>0&&t.off("click.dontShowAgainLinks").on("click.dontShowAgainLinks",function(t){t.preventDefault(),this.blueConicClient.doNotShowAgain(this.context.getInteractionId()),this.closeLightbox()}.bind(this)),e.length>0&&e.off("click.closeButtons").on("click.closeButtons",function(){this.closeLightbox()}.bind(this))},handleComplexElements:function(t){for(var e=this.getElementsWithAttribute(t,"div","data-bc-pluginid"),n=0;n<e.length;n++){var i=e[n],o=i.getAttribute("data-bc-pluginid"),r=i.getAttribute("data-bc-config");if(r)try{var a=r.replace(/\n/g,"\\\\n").replace(/\r/g,"\\\\r").replace(/\t/g,"\\\\t");r=this.blueConicClient.json.parse(a)}catch(c){r=null}this.blueConicClient.event.publish("bcComplexObject",{plugin:o,config:r,node:i,interactionId:this.context.getInteractionId()}),this.isInEditMode||(i.removeAttribute("data-bc-pluginid"),i.removeAttribute("data-bc-config"))}},emptyElementsWithAttribute:function(t,e,n){for(var i=this.getElementsWithAttribute(t,e,n),o=0,r=i.length;o<r;o++){i[o].innerHTML=""}},getElementsWithAttribute:function(t,e,n){for(var i=[],o=t.getElementsByTagName(e),r=0,a=o.length;r<a;r++){var c=o[r];c.getAttribute(n)&&i.push(c)}return i},createElement:function(t){var e;if(!t)return null;try{(e=document.createElement("div")).innerHTML=t}catch(n){return null}return e},handlePlaceholders:function(t){for(var e=this._getPropertiesFromPlaceholders(t.innerHTML),n=0;n<e.length;n++){var i=e[n],o=this.profile.getValue(i)||"",r=new RegExp("\\$\\{"+i+"\\}","g");t.innerHTML=t.innerHTML.replace(r,encodeURI(o))}},_getPropertiesFromPlaceholders:function(t){for(var e,n=/\$\{([a-zA-Z\-_0-9]+)\}/g,i=[];e=n.exec(t);)i.push(e[1]);return i},getParameter:function(t){return this.parameters[t]&&this.parameters[t][0]?this.parameters[t][0]:null},getParameters:function(t){return this.parameters[t]||null},handleJavascript:function(){var t=this.jQuery,e=this.getParameters("javascript_urls"),n=[];if(e){this.javascriptUrls=e;for(var i=0;i<e.length;i++)n.push(this._getLoadScriptDeferred(e[i]))}return t.when.apply(t,n)},_getLoadScriptDeferred:function(t){var e=this.jQuery.Deferred(),n=document.createElement("script");return n.setAttribute("src",t),n.onload=function(){e.resolve()},n.onerror=function(){e.reject('Url "'+t+"\" couldn't be loaded")},document.head.appendChild(n),e},handleStyling:function(t,e,n){var i=this.getParameter("content"),o=[this.baseURL+"frontend/src/lib/fancybox/jquery.fancybox.css"];i&&-1!==i.indexOf("bcLightboxTemplate")||o.push(this.baseURL+"frontend/src/css/lightbox.css");var r=this.getParameter("styling_css");r&&(this.stylingUrl=r,o.push(r));var a="";"true"===this.getParameter("custom_close")&&t&&(a+=".fancybox-close {background-image: url('"+t+"');background-repeat: no-repeat;background-position: center center;background-size: contain;}",e&&(a+=".fancybox-close:hover {background-image: url('"+e+"');background-repeat: no-repeat;background-position: center center;background-size: contain;}"));var c=this.getParameter("close_position"),s=this.getParameter("close_padding");a+=this._getClosePositionStyling(c,s);var l=this.getParameter("styling_css_inline");return l&&(a+=l.replace(/&#xd;/gi,"")),a&&(this.inlineCss=this.jQuery("<style>"+a+"</style>"),this.inlineCss.appendTo(this.jQuery("body"))),this._loadCssUrls(o,n)},_loadCssUrls:function(t,e){var n=(t=t||[]).length,i=0,o=[];if(0===n)return e();function urlLoaded(){if(++i>=n)return o.length>0?e(o):e()}t.forEach((function(t){if(document.querySelector('link[href="'+t+'"]'))urlLoaded();else{var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e.onload=urlLoaded,e.onerror=function(t){o.push(t),urlLoaded()},document.head.appendChild(e)}}))},_getClosePositionStyling:function(t,e){if(!t)return"";null!==e&&"NaN"!==e||(e="-18");var n=".fancybox-close {";switch(t){case"TOP_LEFT":n+="top:"+e+"px; right: unset; bottom: unset; left:"+e+"px;";break;case"BOTTOM_RIGHT":n+="top: auto; right: "+e+"px; bottom: "+e+"px; left: unset;";break;default:n+="top: "+e+"px; right: "+e+"px; bottom: unset; left: unset;"}return n+"}"}});var a = [];var i='lightboxinteractiontype';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.4.3/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.4.3/'},{ id : 'html', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'html/1.0.10/'},{ id : 'image', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'image/1.0.3/'},{ id : 'number', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'number/1.0.2/'},{ id : 'string', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'string/1.0.1/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({EVENT_NAME:"adblock_detected",init:function(e,t){this.blueConicClient=e,this.context=t},getPreloadProperties:function(){var e=this.context.getParameters(),t=e.property?e.property[0]:e.property;return t?[t]:[]},onLoad:function(){var e=this,t=this.context.getProfile(),n=this.context.getParameters(),o=n.property?n.property[0]:n.property;o||(o=this.EVENT_NAME);var adBlockNotDetected=function(){"no"!==t.getValue(o)&&(t.setValue(o,"no"),e.blueConicClient.profile.updateProfile())},r=window.navigator.userAgent;/MSIE|Trident/.test(r)?adBlockNotDetected():justDetectAdblock.detectAnyAdblocker().then((function(n){n?("yes"!==t.getValue(o)&&(t.setValue(o,"yes"),e.blueConicClient.profile.updateProfile()),e.blueConicClient.createEvent(e.EVENT_NAME)):adBlockNotDetected()}))}});var a = [];var i='listener_adblock';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.1/frontend/src/lib/just-detect-adblock.min.js', sharing: 'none'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.1/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(e,t){this.blueConicClient=e,this.context=t},getPreloadProperties:function(){var e=this.context.getParameters(),t=e.responseProperty?e.responseProperty[0]:e.responseProperty;return t?(this.campaignIdentifierProperty=t,[t]):(this.campaignIdentifierProperty="responded_to_campaigns",["responded_to_campaigns"])},onLoad:function(){var e=this.context.getProfile(),t=this.context.getParameters(),r=this.blueConicClient,n=!1,i=!1,o=t.config?t.config[0]:t.config;if(o){for(var a=this.blueConicClient.json.parse(o),c=0;c<a.length;c++){var p=a[c],l=this.getParameterByName(p.parameter);l&&p.profileProperty&&(e.addValue(p.profileProperty,l),n=!0,p.isCampaignIdentifier&&!i&&(this._bindHandlers(l),i=!0))}n&&r.profile.updateProfile()}},_bindHandlers:function(e){var t=this,r=this.context.getProfile(),n=this.blueConicClient,i=document.querySelectorAll("a");Array.prototype.forEach.call(i,(function(i){i.addEventListener("click",(function(){r.addValue(t.campaignIdentifierProperty,e),n.profile.updateProfile()}))}));i=document.querySelectorAll("form");Array.prototype.forEach.call(i,(function(i){i.addEventListener("submit",(function(){r.addValue(t.campaignIdentifierProperty,e),n.profile.updateProfile()}))}))},getParameterByName:function(e){if(!e)return"";e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&#]"+e+"=([^&#]*)").exec(this.getLocationHref());return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))},getLocationHref:function(){return window.location.href}});var a = [];var i='listener_campaign_tracker';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.0/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(n,t){this.blueConicClient=n,this.context=t},getPreloadProperties:function(){return[]},onLoad:function(){}});var a = [];var i='listener_geolocation';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.1.1/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(a,b){this.blueConicClient=a,this.context=b},onLoad:function(){this.sendQueue(),this.blueConicClient.event.subscribe('VIEW',this,function(a,b){this.eventReact(b,'VIEW')}),this.blueConicClient.event.subscribe('CLICK',this,function(a,b){this.eventReact(b,'CLICK')}),this.blueConicClient.event.subscribe('CONVERSION',this,function(a,b){this.eventReact(b,'CONVERSION')})},getInteraction:function(a){var b=this.blueConicClient.getInteractionNamesById(a);if(!b)return this.blueConicClient.util.log('No interaction could be loaded'),{variantId:a};var c={};return b.name&&(c.dialogue=b.name),b.dialogueId&&(c.dialogueId=b.dialogueId),b.variantName&&(c.variant=b.variantName),b.id&&(c.variantId=b.id),c},hasLoaded:function(){return window.dataLayer},sendQueue:function(){if(!this.hasLoaded())var a=0,b=this,c=setInterval(function(){if(b.hasLoaded()){b.blueConicClient.util.log('DataLayer available'),0<b.eventQueue.length&&b.blueConicClient.util.log('Flushing Queue');for(var d=0;d<b.eventQueue.length;d++)b.eventSend(b.eventQueue[d]);b.eventQueue=[],clearInterval(c)}else 20<a++&&(b.blueConicClient.util.log('Stop checking dataLayer'),clearInterval(c))},300);else this.blueConicClient.util.log('DataLayer available')},eventQueue:[],eventSend:function(a){this.blueConicClient.util.log('Pushing event: '+a.event),window.dataLayer.push(a)},eventReact:function(a,b){var c={event:'BlueConic.'+b,dialogue:this.getInteraction(a)};this.hasLoaded()?this.eventSend(c):this.eventQueue.push(c)}});var a = [];var i='listener_gtm_actions';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_gtm_actions/ts_2fe36055342cb2d7530f7d7a859b989a/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(a,b){this.blueConicClient=a,this.context=b;var c=new Date(2017,8,1,0,0,0,0),d=this.blueConicClient.getCurrentDate().getTime(),e=d-c.getTime();this.days=Math.floor(e/86400000)},getPreloadProperties:function(){return[]},onLoad:function(){var a=this.context.getProfile(),b=this.context.getParameters(),c=b.property?b.property[0]:b.property;if(c){var d=this.blueConicClient.json.parse(c)[0].profileproperty,e=this.blueConicClient.getCurrentDate(),f=this._getTimeFrame(e.getHours(),b.locale[0]),g={TIME:new Date().getTime(),data:[]};g.data.push({n:f,p:1,d:this.days}),a.addValue("_hl_"+d,this.blueConicClient.json.stringify(g)),this.blueConicClient.profile.updateProfile()}},_getTimeFrame:function(a,b){return this._getHour(a,b)+" - "+this._getHour(a+1,b)},_getHour:function(a,b){if("en-us"===b){var c=12<=a?"PM":"AM";return a%=12,a=0===a?12:a,a+" "+c}return a=10>a?"0"+a:a,a+":00"}});var a = [];var i='listener_preferred_hour';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.2.6/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(a,b){this.blueConicClient=a,this.context=b;var c=new Date(2012,0,1,0,0,0,0),d=new Date,e=d.getTime()-c.getTime();this.days=Math.floor(e/86400000)},getPreloadProperties:function(){return[]},onLoad:function(){var a=this.context.getParameters(),b=a.config?a.config[0]:a.config;if(b){var c=this.blueConicClient.json.parse(b),d=document.location.href;(0<=d.indexOf("#")||0<=d.indexOf("?"))&&(d=d.substring(0,d.indexOf("#"))||d.substring(0,d.indexOf("?")));var e,f=d.split("/"),g=!1;for(e=0;e<c.length;e++){var h=c[e],i=f[e+3];h.checked&&h.profileProperty&&!g&&(this._storeEngagement(h.profileProperty,this._getValue(i)),i&&30<i.length&&h.checked&&(g=!0))}this.blueConicClient.profile.updateProfile()}},_getValue:function(a){return a?30<a.length?null:(0<=a.indexOf(".")&&(a=a.substring(0,a.indexOf("."))),isNaN(a)&&"index"!==a&&0!==a.indexOf("index.")?a:null):null},_storeEngagement:function(a,b){if(b){var c=this.context.getProfile(),d={TIME:new Date().getTime()};d[b]={},d[b]["p"+this.days]=1,c.addValue("_"+a,this.blueConicClient.json.stringify(d))}}});var a = [];var i='listener_url_structure';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.0.20/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({blueConicClient:null,context:null,_profile:null,_userLanguage:null,_systemLanguage:null,_language:null,_referrer:null,_hostName:null,_currentUrl:null,_domain:null,ORIGIN_TYPES:{WEB:"web",MOBILE_WEB:"mobile_web",CONNECTION:"connection",MOBILE:"mobile_app"},CONSTANTS:{THIRTY_MINUTES_IN_MS:18e5,UNKNOWN:""},PROFILE_PROPERTIES:{CLICKCOUNT:"clickcount",VISITS:"visits",VISITCLICKS:"visitclicks",LASTVISITDATE:"lastvisitdate",VISITEDSITES:"visitedsites",VISITEDDOMAIN:"visiteddomain",ENTRYPAGE:"entrypage",REFERRERHOST:"referrerhost",REFERRERHOSTS:"referrerhosts",HOSTENTRYPAGE:"hostentrypage",HOSTAVERAGETIME:"hostaveragetime",LASTREFERRERAVERAGE:"lastreferreraverage",AVERAGETIME:"averagetime",TOTALVISITTIME:"totalvisittime",RESOLUTION:"resolution",CURRENTRESOLUTION:"currentresolution",CURRENTSCREENWIDTH:"currentscreenwidth",CURRENTSCREENHEIGHT:"currentscreenheight",ORIGIN_TYPE:"origin_type",ORIGIN_SOURCE:"origin_source",ORIGIN_DETAIL:"origin_detail",DEVICETYPE:"devicetype",RECEIVED_FROM_SYSTEM:"received_from_system",RECEIVED_FROM_CONNECTION:"received_from_connection",MOBILE_APP_ID:"mobile_app_id",MOBILE_APP_NAMEVERSION:"mobile_app_nameversion",LANGUAGE:"language",KEYWORDS:"keywords",CURRENTKEYWORDS:"currentkeywords",CURRENT_UTM_SOURCE:"current_utm_source",CURRENT_UTM_MEDIUM:"current_utm_medium",CURRENT_UTM_TERM:"current_utm_term",CURRENT_UTM_CONTENT:"current_utm_content",CURRENT_UTM_CAMPAIGN:"current_utm_campaign",UTM_SOURCE:"utm_source",UTM_MEDIUM:"utm_medium",UTM_TERM:"utm_term",UTM_CONTENT:"utm_content",UTM_CAMPAIGN:"utm_campaign"},PROFILE_PROPERTIES_FOR_CHANNEL:{},init:function(e,t){this.blueConicClient=e,this.context=t,this._profile=e.profile.getProfile(),this._channelId=e.getChannelId(),this._referrer=document.referrer,this._hostName=window.location.hostname,this._currentUrl=window.location.href,this._domain=document.domain,this._userLanguage=window.navigator.userLanguage,this._systemLanguage=navigator.systemLanguage,this._language=window.navigator.language,this.PROFILE_PROPERTIES_FOR_CHANNEL={CLICKCOUNT:this.PROFILE_PROPERTIES.CLICKCOUNT+"_"+this._channelId,VISITS:this.PROFILE_PROPERTIES.VISITS+"_"+this._channelId,VISITCLICKS:this.PROFILE_PROPERTIES.VISITCLICKS+"_"+this._channelId,LASTVISITDATE:this.PROFILE_PROPERTIES.LASTVISITDATE+"_"+this._channelId}},onPrepare:function(){this._profile&&(this._setLanguageProperties(),this._setResolutionProperties(),this._setReferrerProperties(),this._setCampaignProperties())},onLoad:function(){this._profile&&(this._setReferrerHostOnLoad(),this._setVisitProperties(),this._setOriginProperties(),this.blueConicClient.profile.updateProfile())},getPreloadProperties:function(){return[this.PROFILE_PROPERTIES.CLICKCOUNT,this.PROFILE_PROPERTIES.VISITS,this.PROFILE_PROPERTIES.VISITCLICKS,this.PROFILE_PROPERTIES.LASTVISITDATE,this.PROFILE_PROPERTIES.VISITEDSITES,this.PROFILE_PROPERTIES.ENTRYPAGE,this.PROFILE_PROPERTIES.HOSTENTRYPAGE,this.PROFILE_PROPERTIES.HOSTAVERAGETIME,this.PROFILE_PROPERTIES.LASTREFERRERAVERAGE,this.PROFILE_PROPERTIES.AVERAGETIME,this.PROFILE_PROPERTIES.TOTALVISITTIME,this.PROFILE_PROPERTIES.RESOLUTION,this.PROFILE_PROPERTIES.DEVICETYPE,this.PROFILE_PROPERTIES.ORIGIN_TYPE,this.PROFILE_PROPERTIES.ORIGIN_SOURCE,this.PROFILE_PROPERTIES.ORIGIN_DETAIL,this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM,this.PROFILE_PROPERTIES.RECEIVED_FROM_CONNECTION,this.PROFILE_PROPERTIES.VISITEDDOMAIN,this.PROFILE_PROPERTIES.MOBILE_APP_ID,this.PROFILE_PROPERTIES.MOBILE_APP_NAMEVERSION,this.PROFILE_PROPERTIES_FOR_CHANNEL.CLICKCOUNT,this.PROFILE_PROPERTIES_FOR_CHANNEL.VISITS,this.PROFILE_PROPERTIES_FOR_CHANNEL.VISITCLICKS,this.PROFILE_PROPERTIES_FOR_CHANNEL.LASTVISITDATE]},_setLanguageProperties:function(){var e=this._userLanguage||this._systemLanguage||this._language,t=this._normalizeLocale(e).split("-")[0];t&&this._profile.setValue(this.PROFILE_PROPERTIES.LANGUAGE,t)},_normalizeLocale:function(e){return e&&e.replace("_","-").toLowerCase()},_setResolutionProperties:function(){var e=screen.width,t=screen.height;this._profile.setValue(this.PROFILE_PROPERTIES.CURRENTSCREENWIDTH,e),this._profile.setValue(this.PROFILE_PROPERTIES.CURRENTSCREENHEIGHT,t);var i=e+"x"+t;this._profile.setValue(this.PROFILE_PROPERTIES.CURRENTRESOLUTION,i),this._profile.addValue(this.PROFILE_PROPERTIES.RESOLUTION,i)},_setReferrerProperties:function(){this._setReferrerKeywords(),this._setReferrerHost()},_setReferrerKeywords:function(){var e=this.HELPER.decodeReferrer(this._referrer)||[];e.length>0&&(this._addProfileValues(this.PROFILE_PROPERTIES.KEYWORDS,e),this._profile.setValues(this.PROFILE_PROPERTIES.CURRENTKEYWORDS,e))},_addProfileValues:function(e,t){(Array.isArray(t)?t:[t]).forEach((function(t){this._profile.addValue(e,t)}),this)},_setReferrerHost:function(){var e=this._getReferrerHost();e!==this._hostName&&(this._profile.setValue(this.PROFILE_PROPERTIES.ENTRYPAGE,this._currentUrl),e&&(this._profile.setValue(this.PROFILE_PROPERTIES.REFERRERHOST,e),this._profile.addValue(this.PROFILE_PROPERTIES.REFERRERHOSTS,e)))},_setReferrerHostOnLoad:function(){var e=this._getReferrerHost();e!==this._hostName&&this._setHostEntryPageProperty(),this._setHostTotalAndAverageTimeProperty(this._hostName,e)},_getReferrerHost:function(){return this._referrer.replace(/http[s]?:\/\/(.*?)(:|\?|\/|$).*/,"$1")},_setCampaignProperties:function(){[this.PROFILE_PROPERTIES.UTM_SOURCE,this.PROFILE_PROPERTIES.UTM_MEDIUM,this.PROFILE_PROPERTIES.UTM_TERM,this.PROFILE_PROPERTIES.UTM_CONTENT,this.PROFILE_PROPERTIES.UTM_CAMPAIGN].forEach((function(e){var t=this._removeHashPart(this.HELPER._getParameterByName(this._currentUrl,e));t&&(this._profile.setValue("current_"+e,t),this._profile.addValue(e,t))}),this)},_setHostEntryPageProperty:function(){this._profile.setValue(this.PROFILE_PROPERTIES.ENTRYPAGE,this._currentUrl);var e=this._getHostEntryPageMapping();e[this._hostName]={entrypage:this._currentUrl},this._profile.setValue(this.PROFILE_PROPERTIES.HOSTENTRYPAGE,JSON.stringify(e))},_getHostEntryPageMapping:function(){return this._safeJSONParse(this._profile.getValue(this.PROFILE_PROPERTIES.HOSTENTRYPAGE))},_safeJSONParse:function(e){try{var t=e.replace(/'/g,'"');return JSON.parse(t)||{}}catch(i){return{}}},_setHostTotalAndAverageTimeProperty:function(e,t){var i=this._safeJSONParse(this._profile.getValue(this.PROFILE_PROPERTIES.HOSTAVERAGETIME));i[e]||(i[e]=this._createNewVisitData());var E=this.blueConicClient.getCurrentDate().getTime(),s=this._profile.getValue(this.PROFILE_PROPERTIES.LASTREFERRERAVERAGE),r=0,R=0,I=0;Object.keys(i).map((function(e){return e.toString()})).forEach((function(n){var _=i[n];this._isSessionExpired(_.enddate)?this._addVisit(_,_.enddate-_.startdate):n===e?_.enddate=E:n===t&&s!==t&&(_.enddate=E,this._profile.setValue(this.PROFILE_PROPERTIES.LASTREFERRERAVERAGE,t)),0!==_.averageTime&&(R++,r+=_.averageTime,I+=_.averageTime*_.visits)}),this),this._profile.setValue(this.PROFILE_PROPERTIES.HOSTAVERAGETIME,JSON.stringify(i)),this._profile.setValue(this.PROFILE_PROPERTIES.TOTALVISITTIME,I);var n=R>0?Math.round(r/R):0;this._profile.setValue(this.PROFILE_PROPERTIES.AVERAGETIME,n)},_addVisit:function(e,t){if(t>0){var i=e.averageTime*e.visits+t/1e3;e.visits++,e.averageTime=Math.round(i/e.visits)}var E=this.blueConicClient.getCurrentDate().getTime();e.startdate=E,e.enddate=E},_createNewVisitData:function(){var e=this.blueConicClient.getCurrentDate().getTime();return{startdate:e,enddate:e,averageTime:0,visits:0}},_setPropertyIfEmpty:function(e,t,i){"undefined"==typeof e[t]&&(e[t]=i)},_setVisitProperties:function(){this._addVisitedDomain(this._domain),this._increaseClickCount(),this._increaseVisits(this.PROFILE_PROPERTIES.VISITS,this.PROFILE_PROPERTIES.VISITCLICKS,this.PROFILE_PROPERTIES.LASTVISITDATE),this._channelId&&this._increaseVisits(this.PROFILE_PROPERTIES_FOR_CHANNEL.VISITS,this.PROFILE_PROPERTIES_FOR_CHANNEL.VISITCLICKS,this.PROFILE_PROPERTIES_FOR_CHANNEL.LASTVISITDATE)},_increaseVisits:function(e,t,i){e=e||this.PROFILE_PROPERTIES.VISITS,t=t||this.PROFILE_PROPERTIES.VISITCLICKS,i=i||this.PROFILE_PROPERTIES.LASTVISITDATE,this._isNewSession(e,i)?(this._resetPageViewsCurrentSession(t),this._increaseSessionCount(e)):this._increasePageViewsCurrentSession(t),this._setLastVisitDate(i,this.blueConicClient.getCurrentDate().getTime())},_setLastVisitDate:function(e,t){e=e||this.PROFILE_PROPERTIES.LASTVISITDATE,this._profile.setValue(e,t)},_addVisitedDomain:function(e){this._hasVisitedDomain(e)||this._profile.addValue(this.PROFILE_PROPERTIES.VISITEDSITES,e)},_hasVisitedDomain:function(e){var t=this._profile.getValues(this.PROFILE_PROPERTIES.VISITEDSITES)||[];return t.length>0&&-1!==t.indexOf(e)},_increaseClickCount:function(){this._profile.incrementValue(this.PROFILE_PROPERTIES.CLICKCOUNT,1),this._channelId&&this._profile.incrementValue(this.PROFILE_PROPERTIES_FOR_CHANNEL.CLICKCOUNT,1)},_isNewSession:function(e,t){e=e||this.PROFILE_PROPERTIES.VISITS,t=t||this.PROFILE_PROPERTIES.LASTVISITDATE;var i=this._getNumberProperty(e),E=this._getNumberProperty(t)||0;return 0===i||this._isSessionExpired(E)},_isSessionExpired:function(e){return this.blueConicClient.getCurrentDate().getTime()>e+this.CONSTANTS.THIRTY_MINUTES_IN_MS},_resetPageViewsCurrentSession:function(e){e=e||this.PROFILE_PROPERTIES.VISITCLICKS,this._profile.setValue(e,1)},_increasePageViewsCurrentSession:function(e){e=e||this.PROFILE_PROPERTIES.VISITCLICKS,this._profile.incrementValue(e,1)},_increaseSessionCount:function(e){e=e||this.PROFILE_PROPERTIES.VISITS,this._profile.incrementValue(e,1)},_setOriginProperties:function(){var e=this._getOriginCount();e>1?this._mergeOriginProperties():0===e&&this._resolveOriginProperties()},_getOriginCount:function(){var e=this._profile.getValues(this.PROFILE_PROPERTIES.ORIGIN_TYPE)||[],t=this._profile.getValues(this.PROFILE_PROPERTIES.ORIGIN_SOURCE)||[],i=this._profile.getValues(this.PROFILE_PROPERTIES.ORIGIN_DETAIL)||[];return Math.max(e.length,t.length,i.length)},_mergeOriginProperties:function(){this._mergePropertyToUnknown(this.PROFILE_PROPERTIES.ORIGIN_TYPE),this._mergePropertyToUnknown(this.PROFILE_PROPERTIES.ORIGIN_SOURCE),this._mergePropertyToUnknown(this.PROFILE_PROPERTIES.ORIGIN_DETAIL)},_mergePropertyToUnknown:function(e){var t=this._profile.getValues(e)||[];this._profile.setValue(e,1===t.length?t[0]:this.CONSTANTS.UNKNOWN)},_resolveOriginProperties:function(){this._isVisitorOriginFromWeb()?this._resolveOriginForWebVisitor():this._isVisitorOriginFromConnection()?this._resolveOriginForProfileComingFromConnection():this._isVisitorOriginFromMobileApp()&&this._resolveOriginForMobileAppVisitor()},_isVisitorOriginFromWeb:function(){var e=this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM)||[],t=this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_ID)||[];return 0===e.length&&0===t.length},_isVisitorOriginFromMobileApp:function(){var e=this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM)||[],t=this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_ID)||[],i=this._getNumberProperty(this.PROFILE_PROPERTIES.VISITS);return t.length>0&&0===e.length&&0===i},_isVisitorOriginFromConnection:function(){var e=this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM),t=this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_ID),i=this._getNumberProperty(this.PROFILE_PROPERTIES.VISITS);return e&&e.length>0&&t&&0===t.length&&i<=0},_resolveOriginForWebVisitor:function(){var e="",t=this._profile.getValues(this.PROFILE_PROPERTIES.VISITEDSITES)||[],i=this._profile.getValue(this.PROFILE_PROPERTIES.DEVICETYPE)||"",E=this._profile.getValues(this.PROFILE_PROPERTIES.ENTRYPAGE)||[];i&&(e="PC"===i?this.ORIGIN_TYPES.WEB:this.ORIGIN_TYPES.MOBILE_WEB);var s=1===t.length?t[0]:this.CONSTANTS.UNKNOWN,r=1===E.length?E[0]:this.CONSTANTS.UNKNOWN;this._setOriginProfileProperties(e,s,r)},_resolveOriginForProfileComingFromConnection:function(){var e=this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_SYSTEM)||[],t=this._profile.getValues(this.PROFILE_PROPERTIES.RECEIVED_FROM_CONNECTION)||[],i=1===e.length?e[0]:this.CONSTANTS.UNKNOWN,E=1===t.length?t[0]:this.CONSTANTS.UNKNOWN;this._setOriginProfileProperties(this.ORIGIN_TYPES.CONNECTION,i,E)},_resolveOriginForMobileAppVisitor:function(){var e=this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_ID)||[],t=this._profile.getValues(this.PROFILE_PROPERTIES.MOBILE_APP_NAMEVERSION)||[],i=1===e.length?e[0]:this.CONSTANTS.UNKNOWN,E=1===t.length?t[0]:this.CONSTANTS.UNKNOWN;this._setOriginProfileProperties(this.ORIGIN_TYPES.MOBILE,i,E)},_setOriginProfileProperties:function(e,t,i){this._profile.setValue(this.PROFILE_PROPERTIES.ORIGIN_TYPE,e),this._profile.setValue(this.PROFILE_PROPERTIES.ORIGIN_SOURCE,t),this._profile.setValue(this.PROFILE_PROPERTIES.ORIGIN_DETAIL,i)},_removeHashPart:function(e){if(e){var t=e.indexOf("#");if(-1!==t)return e.substring(0,t)}return e},HELPER:{search_engines:[["google\\.","q"],["bing\\.","q"],["search\\.yahoo\\.","p"],["search\\.aol\\.","q"],["duckduckgo\\.","q"],["baidu\\.","wd"],["ask\\.com","q"],["search\\.lycos\\.","q"],["dogpile\\.com","q"]],substringToHash:function(e){if(e){var t=e.indexOf("#");if(-1!==t)return e.substring(0,t)}return e},decodeReferrer:function(e){for(var t=new RegExp(""),i=0;i<this.search_engines.length;i++){var E=this.search_engines[i];t.compile("^http(s?)://(www\\.)?"+E[0],"i");var s=e.match(t);if(s){var r;if(r=isNaN(E[1])?this._getParameterByName(e,E[1]):s[E[1]+1])return r=decodeURIComponent(r),E.length>2&&E[2]&&(r=decodeURIComponent(r)),r=(r=(r=r.replace(/'|"/g,"")).split(/[\s,+.]+/)).filter((function(e){return e}));break}}return null},_getParameterByName:function(e,t){if(!t)return"";t=t.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&#]"+t+"=([^&#]*)").exec(e);return null===i?"":decodeURIComponent(i[1].replace(/\+/g," "))}},_getNumberProperty:function(e){var t=this._profile.getValue(e);if(!t)return 0;try{t=parseInt(t),isNaN(t)&&(t=0)}catch(i){t=0}return t}});var a = [];var i='listenerinteractiontype';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.3.2/'}]);})();(function(){ InteractionTypeImpl = InteractionType.extend({

  // Called every time a new interaction of this type is created.
  init: function(blueConicClient, interactionContext) {
    // Store the parameters for later use.
    this.blueConicClient = blueConicClient;
    this.interactionContext = interactionContext;
  },

  // Called right after the interactions are initialized.
  getContent: function() {
    return '';
  },

  // Called when an interaction based on this type is executed.
  onLoad: function() {
    this.decodeHere();
  },

  decodeHere: function(){
    document.addEventListener(
        'onPaywallShown',
        function (e) {
          let connextAction = jQuery('[id*="ConneXt_Action"]').length;
          let regwallAction = jQuery('#registrationWall').length;
          let viewsLeft = Connext.Storage.GetArticlesLeft();
          if (connextAction && regwallAction){
            //do nothing it's a regwall
          } else if (connextAction && viewsLeft === 0 ){
            var bcProfile = blueConicClient.profile.getProfile();
            bcProfile.addValue('paywall_seen_count', Math.floor(Math.random() * 1000));
            bcProfile.setValue('paywall_seen_date', new Date().getTime());
            blueConicClient.profile.updateProfile();
            blueConicClient.createEvent("connext_paywall_shown");
          }
        });
  },


});
var a = [];var i='paywallshown';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/paywallshown/ts_3b1f4c3f1c981035df7250eec10ae824/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({fallbackLabels:{article:{noStore:{nl:{name:"Titel van het artikel (Bron nog niet geselecteerd)",description:"Beschrijving van het artikel (Bron nog niet geselecteerd)"},"default":{name:"Title of the article (source not yet selected)",description:"Description of the article (source not yet selected)"}},noItems:{nl:{name:"Titel van het artikel (aanbevolen artikelen nog niet beschikbaar)",description:"Beschrijving van het artikel (aanbevolen artikelen nog niet beschikbaar)"},"default":{name:"Title of the article (recommended articles not yet available)",description:"Description of the article (recommended articles not yet available)"}}},product:{noStore:{nl:{name:"Titel van het product (Bron nog niet geselecteerd)",description:"Beschrijving van het product (Bron nog niet geselecteerd)"},"default":{name:"Title of the product (source not yet selected)",description:"Description of the product (source not yet selected)"}},noItems:{nl:{name:"Titel van het product (aanbevolen producten nog niet beschikbaar)",description:"Beschrijving van het product (aanbevolen producten nog niet beschikbaar)"},"default":{name:"Title of the product (recommended products not yet available)",description:"Description of the product (recommended products not yet available)"}}}},init:function(e,t){this.blueConicClient=e,this.profile=e.profile.getProfile(),this._templatesLoaded=[],this.baseURL=this.blueConicClient.getBaseURL(t.getInteractionTypeId()),this.context=t,this.locale=t.getLocale(),this.pluginId=t.getInteractionTypeId();var i=this;this.blueConicClient.event.subscribe("bcComplexObject",this,(function(e,t){t&&t.plugin===i.pluginId&&(t.config.interactionId=t.interactionId,this.blueConicClient.isInEditMode()||(t.config.id=(new Date).getTime()+Math.round(1e3*Math.random())),this.type="toolbar_content_recommendations"===t.plugin?"article":"product",i._setUniqueId(t.node,t.config.id),i._applyTemplate(t))})),this.blueConicClient.isInEditMode()&&this._subscribeEditModeEvents()},_subscribeEditModeEvents:function(){this.blueConicClient.event.subscribe("recommendations.updateTemplate",this,(function(e,t){if(t.message.pluginId===this.pluginId){var i=this._createTemplateObject(t.message.template);this._addTemplateToCache(i),this._applyTemplate({update:!0})}})),this.blueConicClient.event.subscribe("recommendations.updateConfig",this,(function(e,t){if(t.message.pluginId===this.pluginId){var i=this._migration(t.message.config);(i=i||{}).settings=i.settings||{};var n=this._getProperties(i);i["data-bc-template-id"]=i.settings.templateId||"";var a='[data-bc-pluginid="'+this.pluginId+'"][data-bc-config*="'+i.id+'"]';if(document.querySelector(a).setAttribute("data-bc-config",JSON.stringify(i)),n.length>0)document.querySelector(a).setAttribute("data-bc-preload",n.join(","));var r=document.querySelector(".bcComplexObject"+i.id);if(this.profile.loadValues(n,this,(function(){this._applyTemplate({config:i,node:r})})),window.CKEDITOR&&window.CKEDITOR.instances&&Object.keys(window.CKEDITOR.instances).length>0)window.CKEDITOR.instances[Object.keys(window.CKEDITOR.instances)[0]].fire("change")}})),this.blueConicClient.event.subscribe("editorClosed",this,(function(){this._sendMessage("recommendations.closeConfigurator")}))},_getProperties:function(e){return e&&e.rules?e.rules.reduce((function(e,t){return t&&t.metaDataFilters&&(e=e.concat(Array.prototype.map.call(Array.prototype.filter.call(t.metaDataFilters,(function(e){return e.property})),(function(e){return e.property})))),e}),[]):[]},_setUniqueId:function(e,t){if(e&&t){var i="bcComplexObject"+t;e.className=[e.className,i].join(" ")}},_applyTemplate:function(e){var t=this._migration(e.config);(t=t||{}).settings=t.settings||{};var i=t.settings.templateId;if(i){var n=".bcComplexObject"+t.id;document.querySelector(n).innerHTML="";var a=this;this._loadTemplate(i,(function(t){e.update||a._loadHTML(e,t)}))}},_getLabelObject:function(e){return"nl"===this.locale?this.fallbackLabels[this.type][e].nl:this.fallbackLabels[this.type][e]["default"]},_getFallbackData:function(e,t){for(var i=this._getLabelObject(e),n=[],a=0;a<t;a++)n.push({name:[i.name],description:[i.description],image:[this.baseURL+"frontend/src/node_modules/@blueconic/frontend-recommendations-rendering/images/fallback600x600.png?"]});return n},_initMetaDataService:function(e){var t=null;if(e){var i=this.context.getConnection(e);if(i){var n=i.getParameters().metadata;t=n?this.blueConicClient.json.parse(n):null}}this._metaDataService=new window.BlueConicMetaDataService(this.jQuery,t,this.type),this._metaDataService.blueConicClient=this.blueConicClient},_getItems:function(e){var t=this.jQuery;this._initMetaDataService(e.settings.connectionId||e["data-bc-connection-id"]);var i=t.Deferred(),n=this._getCount(e),a=this._getQueryStringParametersForRecommendations(e);return a.storeId?this.blueConicClient.recommendation.getRecommendations(a,function(e){var t=e.getItems();(t=t.slice(0,n))&&0!==t.length||!this.blueConicClient.isInEditMode()?i.resolve(t):i.resolve(this._getFallbackData("noItems",n))}.bind(this)):i.resolve(this._getFallbackData("noStore",n)),i},_loadHTML:function(e,t){if(t){var i=e.node,n=this._migration(e.config);this._handleStyling(n,t);var a=this._getWidthClass(i),r=document.createElement("div");return r.className=a,r.setAttribute("data-bc-external","true"),r.setAttribute("data-bc-id",n.id),this._getItems(n).then(function(e){return this._handleItems(e,n,t,r)}.bind(this))}},_handleItems:function(e,t,i,n){if(0!==e.length){var a=this._getDataObject(e,t.interactionId);this._renderTemplate(a,i,n);var r=this._addItemNodes(n,e,t);r&&r.appendChild(n),this.blueConicClient.isInEditMode()||this._bindClicks(n,e[0].recommendationId,t),this._addImageErrorHandler(n,t),this._addJavaScript(i);var s=document.querySelector(".bcComplexObject"+t.id);this._addOnResizeHandler(s,n)}else for(var o=document.querySelector(".bcComplexObject"+t.id);o.firstChild;)o.removeChild(n.firstChild)},_renderTemplate:function(e,t,i){if(e&&t&&window.Mustache){for(var n=t.getHtml().replace(/<img\s+src=(['"]{{image}}['"])/,"<img data-bc-src=$1"),a=window.Mustache.to_html(n,e);i.firstChild;)i.removeChild(i.firstChild);var r=document.createElement("div");r.innerHTML=a,i.appendChild(r),Array.prototype.forEach.call(i.querySelectorAll("img[data-bc-src]"),function(e){var t=e.getAttribute("data-bc-src"),i=e.getAttribute("width");isNaN(i)||null===i||(t+="&width="+i);var n=e.getAttribute("height");isNaN(n)||null===n||(t+="&height="+n),e.setAttribute("src",t),e.removeAttribute("data-bc-src")}.bind(this))}},_addItemNodes:function(e,t,i){var n=document.querySelector(".bcComplexObject"+i.id);if(n&&n.firstChild)for(;n.firstChild;)n.removeChild(n.firstChild);for(var a=0;a<t.length;a++)if(t[a].ID&&t[a].URL)for(var r=e.querySelectorAll('a[href^="'+t[a].URL+'"]'),s=0;s<r.length;s++)r[s].setAttribute("data-bc-item-id",t[a].ID);return n},_addJavaScript:function(e){var t=e.getJavaScript();if(t){var i=document.createElement("script");i.type="text/javascript",i.appendChild(document.createTextNode(t));var n=document.getElementsByTagName("head")[0]||document.documentElement;try{n.insertBefore(i,n.firstChild)}catch(a){console.error(a)}}},_addOnResizeHandler:function(e,t){var i=function(){if(e&&t){for(var i=t.getAttribute("class").split(" "),n=this._getWidthClass(e),a=[n],r="",s=0;s<i.length;s++)-1===i[s].search("^bcp.*Width$")?a.push(i[s]):r=i[s];r!==n&&(t.className=a.join(" "))}}.bind(this);window.addEventListener("resize",(function(){i()}))},_addImageErrorHandler:function(e,t){(t=t||{}).settings=t.settings||{};var i=t.settings.storeId;e.addEventListener("error",function(e){if("IMG"===e.target.tagName){var t=e.target,n=t.getAttribute("src");if(t.style.display="none",!n)return;var a=this.blueConicClient.getHostname();if(-1===n.indexOf(a+"/rest/contentStores/"+i+"/items/"))return;Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null};var r=t.closest("a[data-bc-item-id]");if(0===r.length)return;var s=r.getAttribute("data-bc-item-id"),o=r.getAttribute("href");if(!s||!o)return;var l=encodeURIComponent(encodeURIComponent(s));if(-1===n.indexOf("/items/"+l+"/image"))return;this.blueConicClient.recommendation.createEvent({itemId:s,url:o,storeId:i,lastmodified:(new Date).getTime()})}}.bind(this),!0)},_getWidthClass:function(e){return e?e.clientWidth<=480?"bcpSmallWidth":e.clientWidth>=1024?"bcpMaxWidth":"bcpDefaultWidth":""},_getUrl:function(){var e=document.querySelector('meta[property="og:url"]'),t=document.querySelector('link[rel="canonical"]');return(e.getAttribute("content")||t.getAttribute("href")||window.location.protocol+"//"+window.location.host+window.location.pathname).split("?")[0]},_getQueryStringParametersForRecommendations:function(e){(e=e||{}).settings=e.settings||{};var t={},i=e.settings.storeId;if(!i)return t;t.storeId=i,"No profile present and will not be created."!==this.profile.getId()&&(t.profileId=this.profile.getId());var n=this._getSettings(e);n.debug&&(t.debug=n.debug),n.frequencyCap&&(t.frequencyCap=n.frequencyCap);var a=this._metaDataService.getItemId(document.location.toString());return a&&(t.itemId=a),t.request=this._getRules(e),t},_getSettings:function(e){var t=e.settings||{};return{debug:Boolean(t.debug),frequencyCap:!t.useFrequencyCap||isNaN(t.frequencyCap)||this.blueConicClient.isInEditMode()?null:t.frequencyCap}},_getRules:function(e){return e.rules=e.rules||[],e.rules.map((function(e){return{id:e.isFallback?"default":e.id,filters:this._getRuleFilters(e),boosts:this._getBoostFilters(e),count:e.isFallback?null:e.amount}}),this)},_getCount:function(e){return(e=e||{}).rules=e.rules||[],Array.prototype.filter.call(e.rules,(function(e){return!e.isFallback})).map((function(e){return e.amount||0})).reduce((function(e,t){return e+t}),0)},_getRuleFilters:function(e){var t=[];if(Array.isArray(e.filters)){var i=e.filters.map((function(e){var t="SHOW"===e.filterType&&"IN_STOCK"!==e.id?"_ONLY":"";return e.id+t}));t=t.concat(i)}return Array.isArray(e.metaDataFilters)&&e.metaDataFilters.forEach((function(e){t=t.concat(this._handleFilterRules(e,this._metaDataService)||[])}),this),t},_getBoostFilters:function(e){return e.algorithms.map((function(e){return e.rampUp||delete e.rampUp,e}))},_handleFilterRules:function(e,t){var i=[];switch(e.operatorSetting){case"MUSTNOTBEEMPTY":i.push("hasproperty:"+e.metaDataField);break;case"MUSTBEEMPTY":i.push("!hasproperty:"+e.metaDataField);break;case"CONTAINS":case"DOESNOTCONTAIN":case"CONTAINSALL":case"DOESNOTCONTAINALL":var n=this._handleListRules(e,t);i=i.concat(n);break;case"AFTER":case"BEFORE":case"BETWEEN":var a=this._handleDateRules(e);i=i.concat(a)}return i},_handleListRules:function(e,t){var i=this._getValues(e,t,t.getMetaDataFields());if(0===i.length)return[];var n=[];switch(e.operatorSetting){case"CONTAINS":n=[e.metaDataField+':"'+i.join('","')+'"'];break;case"DOESNOTCONTAINALL":n=["!"+e.metaDataField+':"'+i.join('","')+'"'];break;case"DOESNOTCONTAIN":n=i.map((function(t){return"!"+e.metaDataField+':"'+t+'"'}));break;case"CONTAINSALL":n=i.map((function(t){return e.metaDataField+':"'+t+'"'}))}return n},_handleDateRules:function(e){if(!e.dateValue&&"BETWEEN"!==e.operatorSetting||!e.dateBetweenValue&&"BETWEEN"===e.operatorSetting)return[];var t=[];if("BETWEEN"!==e.operatorSetting){var i=new Date;switch(e.valueType){case"DAYS":"BEFORE"===e.operatorSetting?(i.setDate(i.getDate()-parseInt(e.dateValue)),t.push(e.metaDataField+"<="+i.toISOString())):(i.setDate(i.getDate()-parseInt(e.dateValue)),t.push(e.metaDataField+">="+i.toISOString()));break;case"HOURS":"BEFORE"===e.operatorSetting?(i.setHours(i.getHours()-parseInt(e.dateValue)),t.push(e.metaDataField+"<="+i.toISOString())):(i.setHours(i.getHours()-parseInt(e.dateValue)),t.push(e.metaDataField+">="+i.toISOString()));break;case"DATE":i=new Date(e.dateValue),t.push("BEFORE"===e.operatorSetting?e.metaDataField+"<="+i.toISOString():e.metaDataField+">="+i.toISOString())}}else{var n=e.dateBetweenValue.start,a=e.dateBetweenValue.end;t.push(e.metaDataField+">="+("string"==typeof n?n:n.toISOString())),t.push(e.metaDataField+"<="+("string"==typeof a?a:a.toISOString()))}return t},_getValues:function(e,t,i){if("values"===e.valueType&&e.values.length>0)return e.values;if("property"===e.valueType)return this.profile.getValues(e.property);if(!i)return t.getFieldValues({fieldId:e.metaDataField,type:"default"});for(var n=0;n<i.length;n++)if(i[n].fieldId===e.metaDataField)return t.getFieldValues(i[n]);return[]},_handleEvent:function(e,t,i,n,a,r,s,o,l){if(n){if(!i)return void(document.location.href=t);var c={storeId:n,action:e,itemId:i,url:t};if("No profile present and will not be created."!==this.profile.getId()&&(c.profileId=this.profile.getId()),s&&r&&(c.debug=!0,c.recommendationId=r),"click"===e){if(l&&l.originalEvent&&l.originalEvent._blueConicLoggedClickEvent===a)return;l&&l.originalEvent&&(l.originalEvent._blueConicLoggedClickEvent=a),this.blueConicClient.createEvent("CLICK",a)}this.blueConicClient.recommendation.createEvent(c,(function(){"click"===e&&(o&&"_blank"!==o?window.open(t,o):o&&"_blank"===o||(document.location.href=t))}))}},_bindClicks:function(e,t,i){(i=i||{}).settings=i.settings||{};var n=i.settings.storeId,a=i.settings.debug,r=i.interactionId,s=function(e,i){e.preventDefault();var s=i.getAttribute("href"),o=i.getAttribute("target");o&&"_blank"===o&&window.open(s,o),this._handleEvent("click",s,i.getAttribute("data-bc-item-id"),n,r,t,a,o,e)}.bind(this);Array.prototype.forEach.call(e.querySelectorAll("a[data-bc-item-id]"),function(e){e.addEventListener("click",(function(t){t.currentTarget.dataset.triggered||s(t,e)}))}.bind(this))},_getDataObject:function(e,t){var i=e.length;e=e.map((function(e,t){return e.isFirstItem=0===t,e.isLastItem=t===i-1,e.index=t,e.id&&!e.ID&&(e.ID=e.id),e.url&&!e.URL&&(e.URL=e.url),e.customProperties&&Object.keys(e.customProperties).forEach((function(t){e[t]=e.customProperties[t]})),e}));var n=null;t&&(n=this.blueConicClient.getInteractionNamesById(t)||{id:t});var a={},r=this._metaDataService.getMetaDataFields(),s=this._metaDataService.getItemType(r);return r&&s===this.type&&r.forEach((function(e){var t=e.fieldId;"url"!==t&&"id"!==t||(t=t.toUpperCase()),a[t]=this._metaDataService.getFieldValues(e)}),this),{interaction:n,current:a,recommendations:e}},_sendMessage:function(e,t){this.blueConicClient.fn.postMessage&&this.blueConicClient.fn.postMessage(e,t)},_handleStyling:function(e,t){(e=e||{}).settings=e.settings||{},e.settings.styling=e.settings.styling||{},this._appendTemplateCss(t,e.id),this._setCssUrl(e),this._appendCustomCss(e)},_appendTemplateCss:function(e,t){var i=this.jQuery,n="bcTemplateCss"+t,a=document.querySelector("."+n);a&&a.parentNode.removeChild(a);var r="";if(e&&e.getCss()){var s=i("<style>"+(r+=e.getCss())+"</style>");s.addClass(n),s.appendTo(i("head"))}},_appendCustomCss:function(e){(e=e||{}).settings=e.settings||{},e.settings.styling=e.settings.styling||{};var t=this.jQuery,i="bcCustomCss"+e.id,n=document.querySelector("."+i);if(n&&n.parentNode.removeChild(n),e.settings.styling.customCSS){var a=t("<style>"+e.settings.styling.customCSS+"</style>");a.addClass(i),a.appendTo(t("head"))}},_setCssUrl:function(e){if((e=e||{}).settings=e.settings||{},e.settings.styling=e.settings.styling||{},!this.blueConicClient.isInEditMode&&e.settings.styling.cssURL)this.blueConicClient.util.loadCSS(e.settings.styling.cssURL);else{var t="bcCssUrl"+e.id,i=document.querySelector("#"+t);if(i&&i.parentNode.removeChild(i),e.settings.styling.cssURL){var n=document.createElement("LINK");n.id=t,n.rel="stylesheet",n.type="text/css",n.href=e.settings.styling.cssURL,document.querySelector("head").appendChild(link)}}},_loadTemplate:function(e,t){if(!this.blueConicClient.isInEditMode)return this.blueConicClient.getTemplate(e,t);var i=this._getTemplateFromCache(e);if(i)return t(i);var n=this;this.blueConicClient.getTemplate(e,(function(e){return n._templatesLoaded.push(e),t(e)}))},_getTemplateFromCache:function(e){for(var t=0;t<this._templatesLoaded.length;t++)if(this._templatesLoaded[t].getId()===e)return this._templatesLoaded[t];return null},_addTemplateToCache:function(e){for(var t=e.getId(),i=0;i<this._templatesLoaded.length;i++)if(this._templatesLoaded[i].getId()===t)return void(this._templatesLoaded[i]=e);this._templatesLoaded.push(e)},_createTemplateObject:function(e){return{_css:(e.css||"").replace(/&#xd;/gi,""),_html:(e.html||"").replace(/&#xd;/gi,""),_id:e.id,_javascript:(e.javaScript||"").replace(/&#xd;/gi,""),_precompiledTemplate:e.precompiledTemplate,getHtml:function(){return this._html},getCss:function(){return this._css},getJavaScript:function(){return this._javascript},getId:function(){return this._id}}},_migration:function(e){if(!e||5===e.version)return e;var t=parseInt(e.version||1);return e.strategy&&e.strategy.boostLevels&&!Array.isArray(e.strategy.boostLevels)&&(e=this._migrateV1(e)),t<2&&(e=this._migrationV2(e)),t<3&&(e=this._migrationV3(e)),t<4&&(e=this._migrationV4(e)),t<5&&(e=this._migrationV5(e)),e},_migrateV1:function(e){var t=Object.keys(e.strategy.boostLevels).map((function(t){return{algorithm:t,value:e.strategy.boostLevels[t]}}));return e.strategy.boostLevels=t,e},_migrationV2:function(e){var t={id:(e=this._normalizeMigratedData(e)).id,interactionId:e.interactionId,version:2,settings:{useFrequencyCap:e.exceptions.useFrequencyCap,frequencyCap:e.exceptions.frequencyCap,templateId:e.styling.templateId,storeId:e.sources,connectionId:e["data-bc-connection-id"],debug:e.debug||!1,styling:{cssURL:e.styling.cssURLNode,customCSS:e.styling.customCSS}},rules:[{id:(new Date).getTime(),amount:e.styling.amount||4,algorithms:e.strategy.boostLevels.map((function(e){return e.algorithm=e.algorithm.replace(/_n$/,"").toUpperCase(),e.rampup&&(e.rampUp=e.rampup,delete e.rampup),"string"==typeof e.value&&(e.value=parseFloat(e.value.replace(",","."))),e})),filters:e.exceptions.filters.map((function(e){return{id:e.replace("instock","in_stock").replace("only","").toUpperCase(),filterType:-1!==e.indexOf("only")?"SHOW":"HIDE"}})),metaDataFilters:e.exceptions.filterRules}],"data-bc-connection-id":e["data-bc-connection-id"],"data-bc-template-id":e["data-bc-template-id"]};return e.exceptions.hideReadArticles&&(t.rules[0].filters.some((function(e){return e.id="VIEWED"}))||t.rules[0].filters.push({id:"VIEWED",filterType:"HIDE"}),delete e.exceptions.hideReadArticles),t},_migrationV3:function(e){if(e)return e.settings&&e.settings.storeId&&(e.sources=e.settings.storeId),e.rules&&(e.rules=e.rules.map((function(e){return e&&e.algorithms&&(e.algorithms=e.algorithms.map((function(e){return e&&"CATEGORY"===e.algorithm&&(e.algorithm="SAME_CATEGORY"),e}))),e}))),e},_migrationV4:function(e){if(e)return e.settings&&e.settings.connectionId&&(e["data-bc-connection-id"]=e.settings.connectionId),e},_migrationV5:function(e){return this._migrationV4(e)},_normalizeMigratedData:function(e){return(e=e||{}).styling=e.styling||{},e.strategy=e.strategy||{},e.strategy.boostLevels=e.strategy.boostLevels||[],e.exceptions=e.exceptions||{},e.exceptions.filters=e.exceptions.filters||[],e.exceptions.filterRules=e.exceptions.filterRules||[],e}});var a = [];var i='toolbar_content_recommendations';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.3.6/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js', sharing: 'local'});a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.3.6/frontend/src/node_modules/@blueconic/frontend-recommendations-rendering/lib/mustache-2.2.1.min.js', sharing: 'local'});a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.3.6/frontend/src/node_modules/@blueconic/frontend-metadataservice/metaDataService.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.3.6/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(t,i){this.blueConicClient=t,this.context=i,this.profile=this.context.getProfile(),this.parameters=this.context.getParameters(),this.visitHistoryProperty="_vl_"+this.context.getInteractionId(),this.visitsProperty=this.parameters.visits_property?this.parameters.visits_property[0]:null,this.nrVisits=this.parameters.nr_visits&&!isNaN(this.parameters.nr_visits)?parseInt(this.parameters.nr_visits):100,this.nrVisitsProperty=this.parameters.nr_visits_property?this.parameters.nr_visits_property[0]:null,this.nrDays=this.parameters.nr_days&&!isNaN(this.parameters.nr_days)?parseInt(this.parameters.nr_days):30,this.totalVisitsProperty=this.parameters.total_visits_property?this.parameters.total_visits_property[0]:null,this.startSessionProperty=this.parameters.start_session_property?this.parameters.start_session_property[0]:null,this.nrPageViewsProperty=this.parameters.nr_page_views_property?this.parameters.nr_page_views_property[0]:null,this.sessionPageViewsProperty=this.parameters.session_page_views_property?this.parameters.session_page_views_property[0]:null,this.firstVisitDateProperty=this.parameters.first_visit_date_property?this.parameters.first_visit_date_property[0]:null,this.lastVisitDateProperty=this.parameters.last_visit_date_property?this.parameters.last_visit_date_property[0]:null,this.averageVisitTimeProperty=this.parameters.average_visit_time_property?this.parameters.average_visit_time_property[0]:null,this.totalVisitTimeProperty=this.parameters.total_visit_time_property?this.parameters.total_visit_time_property[0]:null,this.directVisitsOnly=!!this.parameters.directVisitsOnly&&"true"===this.parameters.directVisitsOnly[0]},onLoad:function(){this._handleNewPageView(),this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange,this,this._handleNewPageView)},getPreloadProperties:function(){var t=[this.visitHistoryProperty];return this.visitsProperty&&t.push(this.visitsProperty),t},_handleNewPageView:function(){var t=this.blueConicClient.getCurrentDate(),i=this._getVisitsHistory(),s=!0;if(i.lastVisit){var e=new Date(i.lastVisit);e.setMinutes(e.getMinutes()+30),s=t>e}this.directVisitsOnly&&s&&document.referrer.length>0||(s?this._handleNewVisit(i,t):this._handleExistingVisit(i,t),i.pageViews=i.pageViews+1,this.nrPageViewsProperty&&this.profile.setValue(this.nrPageViewsProperty,i.pageViews),i.firstVisit||(i.firstVisit=t.getTime(),this.firstVisitDateProperty&&this.profile.setValue(this.firstVisitDateProperty,i.firstVisit)),i.lastVisit=t.getTime(),this.lastVisitDateProperty&&this.profile.setValue(this.lastVisitDateProperty,i.lastVisit),this.profile.setValue(this.visitHistoryProperty,JSON.stringify(i)),this.blueConicClient.profile.updateProfile())},_handleNewVisit:function(t,i){if(t.visits=t.visits+1,t.sessionStart=i.getTime(),t.sessionPageViews=1,this.startSessionProperty&&this.profile.setValue(this.startSessionProperty,t.sessionStart),this.sessionPageViewsProperty&&this.profile.setValue(this.sessionPageViewsProperty,t.sessionPageViews),this.totalVisitsProperty&&this.profile.setValue(this.totalVisitsProperty,t.visits),this.visitsProperty){var s=this.profile.getValues(this.visitsProperty).concat();if(s.push(i.getTime()),s.length<=this.nrVisits?this.profile.addValue(this.visitsProperty,i.getTime()+""):(s.sort((function(t,i){return i-t})),s=s.slice(0,this.nrVisits),this.profile.setValues(this.visitsProperty,s)),this.nrVisitsProperty){var e=new Date(i).setDate(i.getDate()-this.nrDays),r=i.getTime()-e,a=s.filter((function(t){return i.getTime()-parseInt(t)<r})).length;this.profile.setValue(this.nrVisitsProperty,a)}}},_handleExistingVisit:function(t,i){t.sessionPageViews=t.sessionPageViews+1,this.sessionPageViewsProperty&&this.profile.setValue(this.sessionPageViewsProperty,t.sessionPageViews);var s=(i.getTime()-t.lastVisit)/1e3/60;t.totalVisitTime=t.totalVisitTime+s,this.totalVisitTimeProperty&&this.profile.setValue(this.totalVisitTimeProperty,Math.round(t.totalVisitTime)),this.averageVisitTimeProperty&&this.profile.setValue(this.averageVisitTimeProperty,Math.round(t.totalVisitTime/t.visits))},_getVisitsHistory:function(){var t=this.profile.getValue(this.visitHistoryProperty);if(t)try{t=JSON.parse(t)}catch(t){}return t||{visits:0,sessionStart:0,firstVisit:0,lastVisit:0,totalVisitTime:0,pageViews:0,sessionPageViews:0}},_getNumberProperty:function(t){var i=this.profile.getValue(t);try{i=parseInt(i)}catch(t){i=0}return isNaN(i)&&(i=0),i}});var a = [];var i='visitlistener';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.0.4/'}]);})();})(blueConicClient);