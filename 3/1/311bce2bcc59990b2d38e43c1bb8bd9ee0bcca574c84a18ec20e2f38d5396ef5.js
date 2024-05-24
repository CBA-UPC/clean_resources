var __fs_configuration_proxy, __fs_dncs, __fs_dncs_instance;

HTMLElement.prototype.addFSEventListener = function(event, oldEvent, callback) {
    if(this.addEventListener) {
        this.addEventListener(event, callback);
    } else {
        this.attachEvent(oldEvent, callback);
    }
};

__fs_configuration_proxy = function (instance) {
    this._instance = instance;
    this._proxyId = 0x01;

    this.push = function (arrParameter) {
        this._instance.parseConfiguration(arrParameter[0], arrParameter[1])s._advid = {};
    this._allAdvid = {};
    this._stradvid = '';
    this._shard = false;
    this._cookieDomain = false;
    this._parameterString = '';
    this._spans = [];
    this._numbers = [];
    this._classNames = ['fs-dynamic-number'];
    this._loadEventTriggered = false;
    this._formattingFunction = function (s1, s2) {
        return s1;
    };
    this._requestTimeFunction = null;
    this._onScriptReadyFunction = null;
    this._numberReplacedListeners = [];
    this._numberConfigurations = {};
    this._alternativeNumbers = {};
    this._defaultFsButtonOptions = {
        run: false,
        pre: 'Call us',
        post: ['Call us @ {{phone}}'],
        useLocalPhoneNumber: true
    };
    this._parameters = {
        'autoInvoke': true,
        'numberDetection': true,
        'trackEmailLinks': false,
        'returnInputNumber': true,
        'cookieLessMode': false,
        'trackTelLinks': false,
        'trackInputSubmit': false,
        'trackButton': false,
        'trackAll': false,
    };
    this._configurationFrozen = false;
    this._cbwConfiguration = {};
    this.keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789-_" + "=";
    this._defaultCookies = ['__utma', '__utmz', '_ga', 'WT_FPC', 'xtidc', '__fsComscoreCookie', '__troRUID', 'vscr_vid', 'hubspotutk'];
    this._p_s_parameters = ['__sess', '__uid', '__vdf', 'xtsd', 'xtsite', 'xtp', 'eloqua_email', 'eloqua_campaign_id'];
    this._altAnsNums = '';
    this._loadModel = 'onload';
    this._waitFor = false;
    this._getNumberEventTag = '';
    this._spa = {
        referrer: null,
        urlHistory: [],
        overrideUrl: null
    };
    this._crossDomainRequest = false;
    this._dryRun = false;
    this._minNumberLength = 5;
    this._forceSameSiteForGetNumber = false;
    this._sessionCookieLifetime = 30;
    this._startRequestTime = null;
    this._ga4MpId = '';
    this._ga4cid = '';
    this._ga4sid = '';
    this._cspid = '';
    this._csuid = '';
    this._cssn = '';

    this.readConfigurationBundle();

    if (this.getParameter("autoInvoke", true) && this._waitFor === false) {
        this.addLoadEvent(function () {
            __fs_dncs_instance.loadEvent();
        });
    }

    this.resolveGa4Deps();
    this.resolveCsDeps();

    this.runOnScriptReadyFunction();
};

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

__fs_dncs.prototype = {
    base64_encode: function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;
        input = unescape(encodeURIComponent(input));
        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output + this.keyStr.charAt(enc1) + this.keyStr.charAt(enc2) + this.keyStr.charAt(enc3) + this.keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);
        output = output.replace(/=/g, "");
        return output;
    },

    getUrlParameters: function () {
        var params = {};

        if (document.location.search) {
            var parts = document.location.search.substring(1).split('&');
            for (var i = 0; i < parts.length; i++) {
                var nv = parts[i].split('=');
                if (!nv[0]) continue;
                params[nv[0]] = nv[1] || true;
            }
        }

        return params;
    },

    getSessionId: function (advId) {
        var sId = '';

        var strAdv = this._stradvid;

        if (advId) {
            strAdv = advId;
        }

        if (this.getCookie('__fs_dncs_sessionid_' + strAdv)) {
            sId = this.getCookie('__fs_dncs_sessionid_' + strAdv);
        } else if (this.getCookie('__fs_dncs_sessionid')) {
            sId = this.getCookie('__fs_dncs_sessionid');
        }

        // Override session ID and force sameSite if exists in URL parameter (iframe/cross-domain support)
        var parms = this.getUrlParameters();
        if (typeof parms.__fs_dncs_sessionid !== 'undefined' && parms.__fs_dncs_sessionid !== '' && parms.__fs_dncs_sessionid !== true) {
            this._crossDomainRequest = true;
            sId = parms.__fs_dncs_sessionid;
        }

        return sId;
    },

    getTrackingId: function (advId) {
        var tId = '';
        var strAdv = this._stradvid;

        if (advId) {
            strAdv = advId;
        }

        if (this.getCookie('__fs_dncs_trackingid_' + strAdv)) {
            tId = this.getCookie('__fs_dncs_trackingid_' + strAdv);
        } else if (this.getCookie('__fs_dncs_sessionid')) {
            tId = this.getCookie('__fs_dncs_trackingid');
        }

        return tId;
    },

    stringify: function (val) {
        // WARNING: Not a full shim for JSON.stringify. Use with caution.

        var str = '';

        if (typeof val === 'number') {
            return val;
        }

        if (typeof val === 'string' || val instanceof String) {
            return '"' + val + '"';
        }

        if (Object.prototype.toString.call(val) === '[object Array]') {
            str += '[';

            for (var i = 0; i < val.length; i++) {
                str += this.stringify(val[i]);

                if (i < val.length - 1) {
                    str += ',';
                }
            }

            str += ']';
        } else {
            str += '{';

            for (var key in val) {
                if (val.hasOwnProperty(key)) {
                    str += '"' + key + '":' + this.stringify(val[key]) + ',';
                }
            }

            str = str.replace(/,$/, '');

            str += '}';
        }

        return str;
    },

    resolveGa4Deps: function () {
        if (typeof gtag === 'function') {
            this.setGa4MpId(this.getGa4MpId());
            gtag('get', this._ga4MpId, 'client_id', function (clientID) {
                __fs_dncs_instance.setGa4ClientId(clientID);
            });
            gtag('get', this._ga4MpId, 'session_id', function (sessionID) {
                __fs_dncs_instance.setGa4SessionId(sessionID);
            });
        }
    },

    resolveCsDeps: function () {
        window._uxa = window._uxa || [];
        _uxa.push(['afterPageView', function (context) {
            if (typeof context.projectId !== 'undefined' && typeof __fs_dncs_instance !== 'undefined') {
                __fs_dncs_instance.setCsProjectId(context.projectId);
            }
            if (typeof context.sessionKey !== 'undefined' && typeof __fs_dncs_instance !== 'undefined') {
                var cs = context.sessionKey.split(".");
                __fs_dncs_instance.setCsUserId(cs[0]);
                __fs_dncs_instance.setCsSessionNumber(cs[1]);
            }
        }]);
    },

    getGa4MpId: function () {
        if (this._ga4MpId !== '') {
            return this._ga4MpId;
        }

        if (typeof google_tag_manager === 'object') {
            for (key in google_tag_manager) {
                if (key.startsWith('G-')) {
                    return key;
                }
            }
        }

        return '';
    },

    setGa4MpId: function (strMpId) {
        this._ga4MpId = strMpId;
    },

    setGa4ClientId: function (clientId) {
        this._ga4cid = clientId;
    },

    setGa4SessionId: function (sessionId) {
        this._ga4sid = sessionId;
    },

    setCsProjectId: function (projectId) {
        this._cspid = projectId;
    },

    setCsUserId: function (userId) {
        this._csuid = userId;
    },

    setCsSessionNumber: function (sessionNumber) {
        this._cssn = sessionNumber;
    },

    addElementClass: function (strClass) {
        this._classNames.push(strClass);
    },

    setCbwAnsweringNumber: function (strPhonenr) {
        this._cbwConfiguration.answering_number = strPhonenr;
    },

    setCbwCallerId: function (strPhonenr) {
        this._cbwConfiguration.caller_id = strPhonenr;
    },

    setAdv: function (strAdvid) {
        this._advid[strAdvid.id] = strAdvid;
        this._allAdvid[strAdvid.id] = strAdvid;
        this._stradvid = strAdvid.id;
    },

    setTestMode: function (bTestMode) {
        this._dryRun = bTestMode;
    },

    setShard: function (shard) {
        shard = Number(shard);
        this._shard = isNaN(shard) ? false : shard;
    },

    setCookieDomain: function (cookieDomain) {
        this._cookieDomain = cookieDomain;
    },

    setSessionCookieLifetime: function (lifetime) {
        this._sessionCookieLifetime = lifetime;
    },

    setMinimumNumberLength: function(minNumberLength) {
        this._minNumberLength = Number(minNumberLength);
    },

    addAlternativeAnsweringNumbers: function (altNums) {
        this._altAnsNums = altNums;
    },

    prepareData: function (b) {
        if (b && !this.checkSameSite()) {
            this.setCookie('__fs_dncs_prep_u', document.location.href, this._sessionCookieLifetime);
            this.setCookie('__fs_dncs_prep_r', document.referrer ? document.referrer : '', this._sessionCookieLifetime);
        }
    },

    readConfigurationBundle: function () {
        if (typeof __fs_conf == 'object' && !__fs_conf._proxyId) {
            var tmp_fs_conf = __fs_conf;
            __fs_conf = new __fs_configuration_proxy(this);

            for (key in tmp_fs_conf) {
                this.parseConfiguration(tmp_fs_conf[key][0], tmp_fs_conf[key][1]);
            }
        }
    },

    parseConfiguration: function (strParameter, strValue) {
        if (this._configurationFrozen) {

        } else if (typeof this[strParameter] == 'function') {
            this[strParameter](strValue);
        } else {
            this.setParameter(strParameter, strValue);
        }
    },


    setParameter: function (strParameter, strValue) {
        this._parameters[strParameter] = strValue;
    },

    getParameter: function (strParameter, strDefaultValue) {
        if (this._parameters.hasOwnProperty(strParameter)) {
            return (strParameter === 'freespeeHost') ? this._parameters[strParameter].replace(/http:\/\/|^\/\//, 'https://') : this._parameters[strParameter];
        } else if (typeof strDefaultValue != 'undefined') {
            return strDefaultValue;
        } else {
            return null;
        }
    },

    replaceNumber: function (element, replaceWith) {
        var oldNumber = this.cleanNumber(element.innerHTML);
        var formattedNumber = this._formattingFunction(replaceWith.local, replaceWith.e164);
        if (formattedNumber === null) {
            return;
        }
        var newNumber = unescape(formattedNumber);
        var cleanNumber = this.cleanNumber(replaceWith.e164);

        if (element.tagName === "FORM") {
            oldNumber = this.cleanNumber(element.action);
            element.action = (element.action.indexOf("tel:") != -1) ? "tel:" + cleanNumber : newNumber;
        } else if (element.tagName === "A" && this.cleanNumber(element.href) == this.cleanNumber(element.innerHTML)) {
            element.innerHTML = (element.innerHTML.indexOf("tel:") != -1) ? "tel:" + cleanNumber : newNumber;
            element.href = (element.href.indexOf("tel:") != -1) ? "tel:" + cleanNumber : newNumber;
        } else if (element.tagName === "A") {
            element.href = (element.href.indexOf("tel:") != -1) ? "tel:" + cleanNumber : newNumber;
        } else if (element.tagName !== "A") {
            element.innerHTML = newNumber;
        }
        this.notifyNumberReplacedListeners(element, oldNumber, newNumber);
    },

    notifyNumberReplacedListeners: function (element, number, replacedWith) {
        for (var key in this._numberReplacedListeners) {
            var thisObj = this;
            setTimeout(function () {
                thisObj._numberReplacedListeners[key](element, number, replacedWith);
            }, 1);
        }
    },

    addNumberReplacedListener: function (f) {
        if (typeof f === 'function') {
            this._numberReplacedListeners.push(f);
        }
    },

    removeNumberReplacedListener: function (f) {
        for (var i = 0; i < this._numberReplacedListeners.length; i += 1) {
            if (this._numberReplacedListeners[i] == f) {
                this._numberReplacedListeners.splice(i, 1);
                i -= 1;
            }
        }
    },

    removeAllNumberReplacedListeners: function () {
        this._numberReplacedListeners = [];
    },

    addNumberConfiguration: function (configuration) {
        if (typeof configuration[0] === 'string' && typeof configuration[1] === 'object') {
            this._numberConfigurations[this.cleanNumber(configuration[0])] = configuration[1];
        }
    },

    setParameterString: function (s) {
        this._parameterString = s;
    },

    appendCookies: function (s) {
        for (var i = 0; i < s.length; i++) {
            if (!this._defaultCookies[s[i]]) {
                this._defaultCookies.push(s[i]);
            }
        }
    },

    clearFormattingFunction: function () {
        this._formattingFunction = function (s) {
            return s;
        };
    },

    setFormattingFunction: function (f) {
        if (typeof f == 'function') {
            this._formattingFunction = f;
        }
    },

    setOnScriptReadyFunction: function (f) {
        if (typeof f == 'function') {
            this._onScriptReadyFunction = f;
        }
    },

    runOnScriptReadyFunction: function () {
        if (typeof this._onScriptReadyFunction == 'function') {
            this._onScriptReadyFunction();
        }
    },

    setRequestTimerFunction: function (f) {
        if (typeof f == 'function') {
            this._requestTimeFunction = f;
        }
    },

    runRequestTimerFunction: function (start, end) {
        if (typeof this._requestTimeFunction == 'function') {
            this._requestTimeFunction(start, end);
        }
    },

    waitFor: function (c, o, d, t) {
        var tP;
        var iP = setInterval(function () {
            if (typeof __fs_dncs_instance === 'undefined') return;
            if (!c()) return;

            clearInterval(iP);
            if (tP) clearTimeout(tP);
            o();
        }, d);

        if (t) tP = setTimeout(function () {
            clearInterval(iP);
        }, t);
    },

    setWaitForFunction: function (f, d, t) {
        if (typeof f == 'function') {
            if (!d) {
                d = 100;
            }
            if (!t) {
                t = false;
            }
            this._waitFor = true;
            this.waitFor(f, function () {
                __fs_dncs_instance.loadEvent();
            }, d, t);
        }
    },

    setLoadModel: function (s) {
        if (s === 'onDomLoaded') {
            this._loadModel = 'ondom';
        }
    },

    addLoadEvent: function (func) {
        if (this._loadModel === 'onload') {
            if (window.addEventListener) {
                // W3C DOM
                window.addEventListener('load', func, false);
            } else if (window.attachEvent) {
                // IE DOM
                window.attachEvent('onload', func);
            }
        } else if (this._loadModel === 'ondom') {
            if (document.addEventListener) {
                // W3C DOM
                document.addEventListener('DOMContentLoaded', func, false);
            } else if (document.attachEvent) {
                // IE DOM
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        func();
                    }
                });
            }
        }
    },

    setCookie: function (c_name, value, exminutes) {
        if (this.getParameter('cookieLessMode', false) === true) {
            // We shall not write any cookies
            return true;
        }

        var exdate = new Date((new Date()).getTime() + exminutes * 60000).toUTCString();
        var domain = "";
        if (this._cookieDomain) {
            domain = ";domain=" + this._cookieDomain;
        }
        var c_value = escape(value) + ((exminutes == null) ? "" : "; expires=" + exdate + domain + "; path=/");
        document.cookie = c_name + "=" + c_value;
    },

    getCookie: function (c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x === c_name) {
                return unescape(y);
            }
        }

        return '';
    },

    iterate_the_DOM: function (func) {
        var elems = document.getElementsByTagName("*"), i = elems.length;
        do {
            func(elems[i]);
        } while (--i);
    },

    getElementsByClassName: function (className) {

        // IE detection from http://tanalin.com/en/articles/ie-version-js/
        var ieEightOrLower = (document.all && !document.addEventListener);

        if (document.getElementsByClassName && !ieEightOrLower) {
            return document.getElementsByClassName(className);
        }

        var results = [];
        this.iterate_the_DOM(function (elem) {
            if (elem && elem.className.indexOf(className) != -1) {
                results.push(elem);
            }
        });
        return results;
    },

    cleanNumber: function (string) {
        string = string.trim();
        string = String(unescape(string)).replace(/(<([^>]+)>)/ig, "").replace(/\(0\)/gi, "").replace(/tel:/, "").replace(/telprompt:/, "").replace(/[\n\r]+/g, '');
        var prefix = string.replace(/(^\+?).*/, "$1");
        return prefix + string.replace(/[^0-9]/gi, "");
    },

    cleanNumbersSeparated: function (string, separator) {
        var separated = string.split(separator);
        var size = separated.length;
        var clean = [];
        for (var i = 0; i < size; i++) {
            clean[i] = this.cleanNumber(separated[i]);
        }
        var unseparated = clean.join(separator);
        return unseparated;
    },

    cleanNumberInText: function (string) {
        return string.replace(/([0-9])\s*-?\s?(?=\d)/gi,'$1');
    },

    replaceNumberInText: function (node, start, end) {
        var number = this._numbers[this.cleanNumber(node.nodeValue.substring(start, end))];
        var oldNumber = this.cleanNumber(node.nodeValue.substring(start, end));
        var newNumber = null;
        if (number && number.replace_with) {
            var replaceWith = number.replace_with;
            var formattedNumber = this._formattingFunction(replaceWith.local, replaceWith.e164);
            if (formattedNumber === null) {
                return;
            }

            newNumber = unescape(formattedNumber);

            // Handle href="tel:1235" correctly with numberDetection
            if (node.nodeType === 2 && node.nodeValue.indexOf("tel:") !== -1) {
                if (replaceWith.e164.substr(0, 5) !== '+3980') {
                  node.nodeValue = node.nodeValue.substring(0, start) + replaceWith.e164 + node.nodeValue.substring(end);
                } else {
                  node.nodeValue = node.nodeValue.substring(0, start) + replaceWith.local.replace(/\s/g, "") + node.nodeValue.substring(end);
                }
            } else {
                node.nodeValue = node.nodeValue.substring(0, start) + newNumber + node.nodeValue.substring(end);
            }
        }
        // If parentNode exists of the text node, take that, otherwise take the text node itself as in the case of href attributes for example
        this.notifyNumberReplacedListeners(node.parentNode ? node.parentNode : node, oldNumber, newNumber);
    },

    lookForButtonParams: function(node) {
        var returnData = null;
        for (var i = 0; i < 10; i++) {
            if (node.getAttribute('data-fs-parameters') !== null) {
                returnData = node;
                break;
            }
            node = node.parentNode;
        }
        return returnData;
    },

    onClickToReveal: function(event) {
        var self = __fs_dncs_instance;
        if(event.target.getAttribute('data-fs-replaced') === null) {
            event.preventDefault();
            event.stopPropagation();
            var target = __fs_dncs_instance.lookForButtonParams(event.target);

            if (target === null) {
                return;
            }

            var customerParameters = target.getAttribute('data-fs-parameters');

            self.getNumber(
                function (elem, result) {
                    var settings = self.getParameter('fsButton', self._defaultFsButtonOptions);
                    var visiblePhoneNumber = (result !== null ?  (settings.useLocalPhoneNumber === true ? result.local : result.e164) : self._numbers[elem.getAttribute('data-fs-nr')].originalNumber);
                    var hrefNumber = (result !== null ?  (result.e164) : self._numbers[elem.getAttribute('data-fs-nr')].cleanNumber);
                    var templateIndex = (elem.getAttribute('data-fs-index')) ? elem.getAttribute('data-fs-index') : 0;
                    elem.innerHTML = elem.innerHTML.replace(settings.pre,  settings.post[templateIndex].replace('{{phone}}', visiblePhoneNumber));
                    elem.setAttribute('href', 'tel:' + hrefNumber);
                    elem.setAttribute('data-fs-replaced', true);

                    if(result === null && elem.getAttribute('data-fs-original-href') !== null) {
                        elem.setAttribute('href', 'tel:' + elem.getAttribute('data-fs-original-href'));
                    }

                    if (result !== null) {
                        var formattedNumber = __fs_dncs_instance._formattingFunction(result.local, result.e164);
                        if (formattedNumber === null) {
                            return;
                        }
                        var newNumber = unescape(formattedNumber);
                        __fs_dncs_instance.notifyNumberReplacedListeners(elem, elem.getAttribute('data-fs-nr'), newNumber);
                    }
                },
                target,
                target.getAttribute('data-fs-nr'),
                self._stradvid,
                null,
                customerParameters ? customerParameters : null,
                null
            );
        }
    },

    addNumberInText: function (node, start, end) {
        var originalNumber = node.nodeValue.substring(start, end);
        var cleanNumber = this.cleanNumber(originalNumber);
        // Assume cleaned numbers are at least 5 digits long
        if (cleanNumber.length >= this._minNumberLength) {
            if (this._numbers[cleanNumber] === undefined) {
                this._numbers[cleanNumber] = {
                    'cleanNumber': cleanNumber,
                    'originalNumber': originalNumber,
                    'nodes': [node]
                };
            } else if(this._numbers[cleanNumber].hasOwnProperty('nodes')) {
                this._numbers[cleanNumber].nodes.push(node);
            }
        }
    },

    addFsLinkToDOM: function (numbersToReplace) {

        var fsButtonConf = this.getParameter('fsButton', this._defaultFsButtonOptions);

        for (var j=0; j<numbersToReplace.length;j++) {
            var num = this._numbers[numbersToReplace[j].number];

            for(var i = 0; i < num.nodes.length; i++) {
                if (num.nodes[i].nodeName === 'href') {
                    num.nodes[i].ownerElement.setAttribute('data-fs-original-href', num.originalNumber);
                    num.nodes[i].nodeValue = 'javascript:void(0)';
                    if (num.nodes[i].ownerElement.tagName === 'A') {
                        refElement = num.nodes[i].ownerElement;
                        for (var l = fsButtonConf.post.length - 1; l >= 0; l--) {
                            var replacement = fsButtonConf.post[l].replace('{{phone}}', num.originalNumber);
                            if (num.nodes[i].ownerElement.innerHTML.indexOf(replacement) !== -1) {
                                num.nodes[i].ownerElement.innerHTML = num.nodes[i].ownerElement.innerHTML.replace(replacement, fsButtonConf.pre);
                                break;
                            }
                        }
                    }
                } else {
                    if (!num.nodes[i].parentNode) {
                        continue;
                    }
                    var refElement;
                    if (num.nodes[i].parentNode.tagName === 'A') {
                        refElement = num.nodes[i].parentNode;
                        num.nodes[i].nodeValue = num.nodes[i].nodeValue.replace(num.originalNumber, fsButtonConf.pre);
                    } else {
                        var anchorId = 'fs-button-' + new Date().getTime() + '' + Math.floor(Math.random() * 1000);
                        var anchor = document.createElement('a');
                        anchor.setAttribute('id', anchorId);
                        anchor.setAttribute('href', 'javascript:void(0)');
                        anchor.setAttribute('data-fs-original-href', num.originalNumber);
                        anchor.innerHTML = fsButtonConf.pre;
                        for (var l = fsButtonConf.post.length - 1; l >= 0; l--) {
                            var replacement = fsButtonConf.post[l].replace('{{phone}}', num.originalNumber);
                            if (num.nodes[i].parentNode.innerHTML.indexOf(replacement) !== -1) {
                                anchor.setAttribute('data-fs-index', l);
                                num.nodes[i].parentNode.innerHTML = num.nodes[i].parentNode.innerHTML.replace(replacement, anchor.outerHTML);
                                refElement = document.getElementById(anchorId);
                                break;
                            } else if (this.cleanNumberInText(num.nodes[i].parentNode.innerHTML).indexOf(this.cleanNumberInText(replacement)) !== -1) {
                                anchor.setAttribute('data-fs-index', l);
                                num.nodes[i].parentNode.innerHTML = this.cleanNumberInText(num.nodes[i].parentNode.innerHTML).replace(this.cleanNumberInText(replacement), anchor.outerHTML);
                                refElement = document.getElementById(anchorId);
                                break;
                            }
                        }
                    }
                }
                if (refElement) {
                    refElement.addFSEventListener('click', 'onclick', this.onClickToReveal);
                    refElement.setAttribute('data-fs-nr', num.cleanNumber);
                    if(numbersToReplace[j].custnr && numbersToReplace[j].custname) {
                        refElement.setAttribute('data-fs-parameters', '&custnr=' + numbersToReplace[j].custnr  +'&custname=' + encodeURIComponent(numbersToReplace[j].custname));
                    }
                }
            }
        }
    },

    addOrReplaceNumbersInText: function (node, replaceFlag) {
        var inNumber = false;
        var numberStartAt = 0;
        var numberEndAt = 0;
        if (node.nodeValue && node.nodeValue.length < 50000 && /\d.*\d.*\d.*\d.*\d/.test(node.nodeValue)) {
            // At least five digits
            var nodeValue = node.nodeValue.split('');
            for (var i = 0; i < node.nodeValue.length; i++) {
                var c = nodeValue[i];
                if (inNumber) {
                    if (c >= '0' && c <= '9') {
                        numberEndAt = i + 1;
                    } else if (c === '-' || c === ' ' || c === ' ' /* &nbsp; */ || c === '\t' || c === '\r' || c === '\n' || c === '.' || c === '(' || c === ')' || c === '\x0b' || c === '/') {
                        if (c === '(' || c === '/') {
                            if (replaceFlag == false) {
                                // Just search for numbers
                                this.addNumberInText(node, numberStartAt, numberEndAt);
                            } else {
                                this.replaceNumberInText(node, numberStartAt, numberEndAt);
                            }
                        } else {
                            // ok, maybe in a number still, just continue
                        }
                    } else {
                        if (replaceFlag == false) {
                            // Just search for numbers
                            this.addNumberInText(node, numberStartAt, numberEndAt);
                        } else {
                            // Replace number
                            this.replaceNumberInText(node, numberStartAt, numberEndAt);
                        }
                        numberStartAt = 0;
                        numberEndAt = 0;
                        inNumber = false;
                    }
                }

                if (!inNumber && (c === '+' || (c >= '0' && c <= '9'))) {
                    // Start of number
                    inNumber = true;
                    numberStartAt = i;
                }
            }
            if (inNumber) {
                if (replaceFlag == false) {
                    // Just search for numbers
                    this.addNumberInText(node, numberStartAt, numberEndAt);
                } else {
                    // Replace numbers..
                    this.replaceNumberInText(node, numberStartAt, numberEndAt);
                }
                numberStartAt = 0;
                numberEndAt = 0;
                inNumber = false;
            }
        }
    },

    loopTextElementsForNumbers: function (node, replaceFlag) {
        if (node) {
            node = node.firstChild;
            while (node != null) {
                var tagName = node.tagName;
                if (tagName) {
                    tagName = tagName.toLowerCase();
                }
                if (node.nodeType == 3) {
                    // Text node
                    this.addOrReplaceNumbersInText(node, replaceFlag);
                } else if (node.nodeType == 1 && (!tagName || (tagName && tagName !== "script" && tagName !== "style" && tagName !== "noscript"))) {
                    this.loopTextElementsForNumbers(node, replaceFlag);
                    if (tagName && tagName === "a") {
                        var attr = node.getAttributeNode("href");
                        if (attr) {
                            this.addOrReplaceNumbersInText(attr, replaceFlag);
                        }
                    }
                    if (tagName && tagName === "form") {
                        var attr = node.getAttributeNode("action");
                        if (attr) {
                            this.addOrReplaceNumbersInText(attr, replaceFlag);
                        }
                    }
                }
                node = node.nextSibling;
            }
        }
    },

    addEventListenerToElement: function (element, eventFunc) {
        if (element.getAttribute('fs-link') === null) {
            element.addFSEventListener('click', 'onclick', eventFunc);
            element.setAttribute('fs-link', 'true');
        }
    },

    // Get all mailto links and add an event to send an event message when clicked
    addEventsToTelLinks: function () {
        var _fs_i = __fs_dncs_instance;
        var elements = document.getElementsByTagName('a');
        for (var i = 0, len = elements.length; i < len; i++) {
            if (elements[i].getAttribute('href') &&
              elements[i].getAttribute('href').indexOf('tel:') >= 0
            ) {
                this.addEventListenerToElement(elements[i], this.attachTelEvent());
            }
        }
    },

    // Get all mailto links and add an event to send an event message when clicked
    addEventsToMailToLinks: function () {
        var _fs_i = __fs_dncs_instance;
        var elements = document.getElementsByTagName('a');
        for (var i = 0, len = elements.length; i < len; i++) {
            if (elements[i].getAttribute('href') &&
              elements[i].getAttribute('href').indexOf('mailto:') >= 0
            ) {
                this.addEventListenerToElement(elements[i], this.attachEmailEvent());
            }
        }
    },

    // Get all input type submit and send an event when clicked
    addEventsOnInputTypeSubmitClicked: function () {
        var elements = document.getElementsByTagName('input');
        for (var i = 0, len = elements.length; i < len; i++) {
            if (elements[i].getAttribute('type') === 'submit') {
                this.addEventListenerToElement(elements[i], this.attachInputSubmitEvent());
            }
        }
    },

    // Get all buttons and send an event when clicked
    addEventsOnButtonClicked: function () {
        var elements = document.getElementsByTagName('button');
        for (var i = 0, len = elements.length; i < len; i++) {
            this.addEventListenerToElement(elements[i], this.attachButtonEvent());
        }
    },

    attachTelEvent: function () {
        return function () {
            var advId = this.getAttribute('adv-id');
            // Get email address of link and page URL
            var href = this.getAttribute('href');
            // See if there is more than just the email address in the href attribute it should be removed
            var furtherInfo = href.indexOf('?');
            if (furtherInfo >= 0) {
                href = href.substring(0, furtherInfo);
            }
            var tel = href.replace('tel:', '').trim();
            var pageUrl = window.location.href;
            __fs_dncs_instance.sendEvent('tel_link_tracking', tel, {'url': pageUrl}, advId);
        }
    },

    attachEmailEvent: function () {
        return function () {
            var advId = this.getAttribute('adv-id');
            // Get email address of link and page URL
            var href = this.getAttribute('href');
            // See if there is more than just the email address in the href attribute it should be removed
            var furtherInfo = href.indexOf('?');
            if (furtherInfo >= 0) {
                href = href.substring(0, furtherInfo);
            }
            var emailAddress = href.replace('mailto:', '').trim();
            var pageUrl = window.location.href;
            __fs_dncs_instance.sendEvent('email_link_tracking', emailAddress, {'url': pageUrl}, advId);
        }
    },

    attachInputSubmitEvent: function () {
        return function () {
            var advId = this.getAttribute('adv-id');
            var id = this.getAttribute('id');
            var name = this.getAttribute('name');
            var pageUrl = window.location.href;
            __fs_dncs_instance.sendEvent('input_submit_tracking', id, {'url': pageUrl,'name': name}, advId);
        }
    },

    attachButtonEvent: function () {
        return function () {
            var advId = this.getAttribute('adv-id');
            var name = this.getAttribute('name');
            var type = this.getAttribute('type');
            var bClass = this.getAttribute('class');
            var pageUrl = window.location.href;
            __fs_dncs_instance.sendEvent('button_tracking', name, {'url': pageUrl,'type': type,'class': bClass}, advId);
        }
    },

    loadEvent: function () {
        var name, elems, i, len, preFlight = false;

        if (this._loadEventTriggered) {
            return;
        }

        this._loadEventTriggered = true;

        // Numbers to replace?
        for (name in this._classNames) {
            elems = this.getElementsByClassName(this._classNames[name]);
            for (i = 0, len = elems.length; i < len; i += 1) {
                if (elems[i].tagName === "A" && this.cleanNumber(elems[i].innerHTML) == this.cleanNumber(elems[i].href)) {
                    this._spans.push(elems[i]);
                    this._numbers[this.cleanNumber(elems[i].innerHTML)] = {};
                } else if (elems[i].tagName === "A") {
                    this._spans.push(elems[i]);
                    this._numbers[this.cleanNumber(elems[i].href)] = {};
                } else if (elems[i].tagName === "FORM") {
                    this._spans.push(elems[i]);
                    this._numbers[this.cleanNumber(elems[i].action)] = {};
                } else {
                    if (elems[i].children.length == 0 && elems[i].tagName !== "A") {
                        this._spans.push(elems[i]);
                        this._numbers[this.cleanNumber(elems[i].innerHTML)] = {};
                    } else if (elems[i].children.length > 0 && elems[i].firstChild.tagName === "A" && this.cleanNumber(elems[i].firstChild.innerHTML) == this.cleanNumber(elems[i].firstChild.href)) {
                        this._spans.push(elems[i].firstChild);
                        this._numbers[this.cleanNumber(elems[i].firstChild.innerHTML)] = {};
                    } else if (elems[i].children.length > 0 && elems[i].firstChild.tagName === "A") {
                        this._spans.push(elems[i].firstChild);
                        this._numbers[this.cleanNumber(elems[i].firstChild.href)] = {};
                    }
                }
            }
        }
        var fsButtonConf = this.getParameter('fsButton', this._defaultFsButtonOptions);
        if (this.getParameter("numberDetection", false) || fsButtonConf.run) {
            this.loopTextElementsForNumbers(document.body, false);
            if(fsButtonConf.run) {
                preFlight = true;
            }
        }

        if (this.getParameter("trackEmailLinks", false) ||
          this.getParameter("trackAll", false)
        ) {
            this.addEventsToMailToLinks();
        }

        if (this.getParameter("trackTelLinks", false) ||
          this.getParameter("trackAll", false)
        ) {
            this.addEventsToTelLinks();
        }

        if (this.getParameter("trackInputSubmit", false) ||
          this.getParameter("trackAll", false)
        ) {
            this.addEventsOnInputTypeSubmitClicked();
        }

        if (this.getParameter("trackButton", false) ||
          this.getParameter("trackAll", false)
        ) {
            this.addEventsOnButtonClicked();
        }

        for (var key in this._advid) {
            if (this._advid[key].cbw_visible_number) {
                this._advid[key].cbw_visible_number = this.cleanNumber(this._advid[key].cbw_visible_number);
                this._numbers[this._advid[key].cbw_visible_number] = {};
            }
        }

        this.makeBackendRequest(preFlight);
    },

    trackPage: function (opts) {
        opts = opts || {};

        if (this._spa.urlHistory.length > 0) {
            this._spa.referrer = this._spa.urlHistory[this._spa.urlHistory.length - 1];
        }

        this._spa.urlHistory.push(window.location.href);

        if (opts.overrideUrl) {
            this._spa.overrideUrl = opts.overrideUrl;
        }

        if (opts.noRequest) {
            return;
        }

        this._loadEventTriggered = false;
        this.loadEvent();
    },

    checkSameSite: function () {
        if (this._spa.referrer) {
            return 1;
        }

        var refDomain = '', sameSite = 0;
        if (document.referrer) {
            var a = document.createElement('a');
            a.href = document.referrer;
            refDomain = a.hostname;
        }

        // If cookieDomain is set, sameSite should always be 1 when we are crossing subdomains of cookieDomain
        if (this._cookieDomain !== false) {
            if (refDomain.indexOf(this._cookieDomain) !== -1) {
                return 1;
            }
        }

        if (refDomain === window.location.hostname) {
            sameSite = 1;
        }

        return sameSite;
    },

    makeBackendRequest: function (preFlight, overrideNumberToReplace, overrideAdvid, overrideParameters, overrideCallback, overrideShard, overrideSendNotSameSite) {
        var sessionId, url, referrer, numbersToReplace, advid, parameters, trackingId, extTrack, coData = '', altNumData, eventTag, dryRun, cookieLess;
        this._startRequestTime = performance.now();

        if (this._ga4cid !== '') {
            coData = coData + '&_p_gtag_client_id=' + this._ga4cid;
        } else if (typeof gaGlobal !== 'undefined') {
            coData = coData + '&_p_gtag_client_id=' + gaGlobal.vid;
        } else if (this.getCookie('_ga') !== '') {
            coData = coData + '&_p_gtag_client_id=' + this.getCookie('_ga').split('.').slice(-2).join(".");
        }

        if (this._ga4sid !== '') {
            coData = coData + '&_p_gtag_session_id=' + this._ga4sid;
        } else if (this.getGa4MpId() !== '') {
            this.setGa4MpId(this.getGa4MpId());
            var ga4SessionCookie = this.getCookie('_ga_' + this._ga4MpId.split('-')[1]);
            if (ga4SessionCookie !== '') {
                coData = coData + '&_p_gtag_session_id=' + ga4SessionCookie.split('.')[2];
            }
        }

        if (this._cspid !== '') {
            coData = coData + '&_p_cs_pid=' + this._cspid;
        }
        if (this._csuid !== '') {
            coData = coData + '&_p_cs_uid=' + this._csuid;
        }
        if (this._cssn !== '') {
            coData = coData + '&_p_cs_sn=' + this._cssn;
        }

        if (typeof pa !== 'undefined') {
            if (typeof pa.getVisitorId === 'function') {
                coData = coData + '&_p_pa_vid=' + pa.getVisitorId();
            }
            if (typeof pa.getConfiguration === 'function') {
                coData = coData + '&_p_pa_sid=' + pa.getConfiguration('site');
                coData = coData + '&_p_pa_cd=' + pa.getConfiguration('collectDomain');
            }
        }

        for (var i = 0; i < this._p_s_parameters.length; i++) {
            if (typeof window[this._p_s_parameters[i]] === 'string') {
                coData = coData + '&_p_s' + this._p_s_parameters[i] + '=' + window[this._p_s_parameters[i]];
            }
            if (typeof window[this._p_s_parameters[i]] === 'number') {
                coData = coData + '&_p_s' + this._p_s_parameters[i] + '=' + window[this._p_s_parameters[i]];
            }
            if (typeof window[this._p_s_parameters[i]] === 'object') {
                coData = coData + '&_p_s' + this._p_s_parameters[i] + '=' + window[this._p_s_parameters[i]].join('.');
            }
        }

        if (typeof ga != 'undefined' && typeof ga.getAll === 'function') {
            var ga_trackers = ga.getAll();
            var dims = {};
            var trackingIds = [];
            var clientIds = [];
            var cookieNames = [];
            for (var i = 0; i < ga_trackers.length; i++) {
                if (typeof ga_trackers[i] === 'object') {
                    var thisClientId = ga_trackers[i].get('clientId');
                    if (typeof thisClientId !== 'undefined' && thisClientId !== '' && (clientIds.includes(thisClientId) === false)) {
                        clientIds.push(thisClientId);
                    }
                    var thisTracker = ga_trackers[i].get('trackingId');
                    if (typeof thisTracker !== 'undefined' && thisTracker !== '' && (trackingIds.includes(thisTracker) === false)) {
                        trackingIds.push(thisTracker);
                    }
                    var thisCookieName = ga_trackers[i].get('cookieName');
                    if (typeof thisCookieName !== 'undefined' && thisCookieName !== '' && (cookieNames.includes(thisCookieName) === false)) {
                        cookieNames.push(thisCookieName);
                    }
                    for (var d = 1; d <= 20; d++) {
                        var dimension = ga_trackers[i].get('dimension' + d);
                        if (typeof dimension !== 'undefined') {
                            dims[d] = dimension;
                        }
                    }
                }
            }
            trackingIds.sort();
            clientIds.sort();
            cookieNames.sort();
            coData = coData + '&_p_ga_wpi=' + trackingIds.join(',');
            coData = coData + '&_p_sf_gacids=' + clientIds.join(',');
            coData = coData + '&_p_ga_cnames=' + cookieNames.join(',');
            coData = coData + '&_p_ga_dims=' + this.stringify(dims);

        } else if (typeof _gat != 'undefined' && typeof _gat.bb === 'string') {
            coData = coData + '&_p_ga_wpi=' + _gat.bb;
        }

        if (typeof SZCD !== 'undefined' && typeof SZCD.UID !== 'undefined') {
            coData = coData + '&_p_sm__uid=' + SZCD.UID;
            if (typeof SZCD.CID !== 'undefined') {
                coData = coData + '&_p_sm__cid=' + SZCD.CID;
            }
            if (typeof SZCD.VTID !== 'undefined') {
                coData = coData + '&_p_sm__vtid=' + SZCD.VTID;
            }
        }

        if (typeof Adform !== 'undefined' && typeof Adform._uid !== 'undefined' && Adform._uid !== '') {
            coData = coData + '&_p_adform_cookie_id=' + Adform._uid;
        }

        for (var i = 0; i < this._defaultCookies.length; i++) {
            if (this.getCookie(this._defaultCookies[i])) {
                coData = coData + '&' + this._defaultCookies[i] + '=' + encodeURIComponent(this.getCookie(this._defaultCookies[i]));
            }
        }

        if (typeof s === 'object' && s !== null && typeof s.c_r === 'function') {
            coData = coData + '&_p_asc_s_vi' + '=' + s.c_r('s_vi').substring(7, 40);
            if (typeof s.visitor === 'object' && typeof s.visitor.getMarketingCloudVisitorID === 'function') {
                coData = coData + '&_p_asc_mid' + '=' + s.visitor.getMarketingCloudVisitorID();
            }
            if (typeof s.fid === 'string') {
                coData = coData + '&_p_asc_fid' + '=' + s.fid;
            }
            if (typeof s.un === 'string') {
                coData = coData + '&_p_asc_un' + '=' + s.un;
            }
            if (typeof s_account === 'string') {
                coData = coData + '&_p_asc_rsid' + '=' + s_account;
            } else if (typeof s.account === 'string') {
                coData = coData + '&_p_asc_rsid' + '=' + s.account;
            }
            if (typeof s.version === 'string') {
                coData = coData + '&_p_asc_version' + '=' + s.version;
            }
            if (typeof s.visitorNamespace === 'string') {
                coData = coData + '&_p_asc_visitorNamespace' + '=' + s.visitorNamespace;
            }
            if (typeof s.trackingServer === 'string') {
                coData = coData + '&_p_asc_trackingServer' + '=' + s.trackingServer;
            }
            if (typeof s.channel === 'string') {
                coData = coData + '&_p_asc_channel' + '=' + s.channel;
            }
            if (typeof s.campaign === 'string') {
                coData = coData + '&_p_asc_campaign' + '=' + s.campaign;
            }
            if (typeof s.eVar3 === 'string') {
                coData = coData + '&_p_asc_eVar3' + '=' + s.eVar3;
            }
        }

        if (typeof return_ia_js_uid != 'undefined' && typeof return_ia_js_uid === 'function') {
            coData = coData + '&_p_ia_uid' + '=' + return_ia_js_uid();
        }

        if (typeof heap != 'undefined' && typeof heap.appid != 'undefined' && typeof heap.userid != 'undefined') {
            coData = coData + '&_p_heap_aid' + '=' + heap.appid;
            coData = coData + '&_p_heap_uid' + '=' + heap.userid;
        }

        if (typeof _vwo_acc_id != 'undefined' && typeof _vwo_exp_ids != 'undefined') {
            var _vis_data = '', _vis_combination, _vis_id, _vis_l = 0;
            for (; _vis_l < _vwo_exp_ids.length; _vis_l++) {
                _vis_id = _vwo_exp_ids[_vis_l];
                if (_vwo_exp[_vis_id].ready) {
                    _vis_combination = this.getCookie('_vis_opt_exp_' + _vis_id + '_combi');
                    if (typeof _vwo_exp[_vis_id].combination_chosen != "undefined") {
                        _vis_combination = _vwo_exp[_vis_id].combination_chosen;
                    }
                    if (typeof _vwo_exp[_vis_id].comb_n[_vis_combination] != "undefined") {
                        _vis_data = _vis_data + _vis_id + ',' + _vis_combination + ';';
                    }
                }
            }
            if (_vis_data) {
                coData = coData + '&_p_vwo_acc_id' + '=' + _vwo_acc_id;
                coData = coData + '&_p_vwo_t_v' + '=' + _vis_data;
                coData = coData + '&_p_vwo_uuid' + '=' + this.getCookie('_vwo_uuid');
            }
        }

        if (typeof optimizely === 'object' && typeof optimizely.get === 'function') {
            if (typeof optimizely.get('data') === 'object' && typeof optimizely.get('data').accountId === 'string') {
                coData = coData + '&_p_opt_acc_id' + '=' + optimizely.get('data').accountId;
            }
            if (typeof optimizely.get('visitor') === 'object' && typeof optimizely.get('visitor').visitorId === 'string') {
                coData = coData + '&_p_opt_vis_id' + '=' + optimizely.get('visitor').visitorId;
            }
        }

        if (typeof Kameleoon === 'object' && typeof Kameleoon.API === 'object') {
            if (typeof Kameleoon.API.Core === 'object' && typeof Kameleoon.API.Core.getConfiguration === 'function' && typeof Kameleoon.API.Core.getConfiguration().siteCode === 'string') {
                coData = coData + '&_p_kam_site_code' + '=' + Kameleoon.API.Core.getConfiguration().siteCode;
            }
            if (typeof Kameleoon.API.Visitor === 'object' && typeof Kameleoon.API.Visitor.code === 'string') {
                coData = coData + '&_p_kam_vis_code' + '=' + Kameleoon.API.Visitor.code;
            }
        }

        if (typeof ABTasty === 'object') {
            if (typeof ABTasty.getAccountSettings === 'function' && typeof ABTasty.getAccountSettings() === 'object' && typeof ABTasty.getAccountSettings().identifier === 'string') {
                coData += '&_p_abt_chid' + '=' + ABTasty.getAccountSettings().identifier;
                var abTastySessionCount = 1;
                var abTastyCookieParameter = '';
                var abTastyTests = [];
                var abTastyVariations = [];
                //fetch session count from Cookie.
                var abTastyCookie = this.getCookie('ABTasty');
                if (typeof abTastyCookie === 'string' && abTastyCookie.length > 0) {
                    var abTastyCookieValues =  new URLSearchParams(abTastyCookie);
                    if (typeof abTastyCookieValues === 'object' && typeof abTastyCookieValues.get('ns') === 'string' && abTastyCookieValues.get('ns').length > 0) {
                        abTastySessionCount = abTastyCookieValues.get('ns');
                    }
                }
                if (typeof ABTasty.visitor === 'object' && typeof ABTasty.visitor.id === 'string' && ABTasty.visitor.id.length > 0) {
                    abTastyCookieParameter += ABTasty.visitor.id;
                    if (typeof ABTasty.getTestsOnPage === 'function') {
                        var abTastyTestObject = ABTasty.getTestsOnPage();
                        var abTastyTestIDs = Object.keys(abTastyTestObject);
                        for (var abt_key = 0; abt_key < abTastyTestIDs.length; abt_key++) {
                            if (typeof abTastyTestObject[abTastyTestIDs[abt_key]].variationID === 'undefined') {
                                continue;
                            }
                            abTastyCookieParameter += '*' + abTastyTestIDs[abt_key] + '.' + abTastyTestObject[abTastyTestIDs[abt_key]].variationID + '.' + abTastySessionCount;
                            abTastyTests.push(abTastyTestIDs[abt_key]);
                            abTastyVariations.push(abTastyTestObject[abTastyTestIDs[abt_key]].variationID);
                        }
                    }
                }
                coData += '&_p_abt_cookie' + '=' + abTastyCookieParameter;
                coData += '&_p_abt_tests' + '=' + abTastyTests.join(',');
                coData += '&_p_abt_variations' + '=' + abTastyVariations.join(',');
            }
        }


        if (typeof _kTck !== 'undefined'
            && typeof _kTck.pClId !== 'undefined'
        ) {
            var madmetricsCookie = this.getCookie('K_' + _kTck.pClId);

            if (madmetricsCookie) {
                coData += '&_p_mad_client_id=' + _kTck.pClId
                    + '&_p_mad_cookie=' + madmetricsCookie;
            }
        }

        if (typeof vscr !== 'undefined'
            && typeof vscr.state !== 'undefined'
            && typeof vscr.state.accountId !== 'undefined'
        ) {
            coData += '&_p_cubed_aid' + '=' + vscr.state.accountId;
        }

        if (typeof ADMO === 'object' && typeof ADMO.method.getCookieInformation === 'function') {
            var admo = ADMO.method.getCookieInformation('cikneeto_uuid');
            if (typeof admo === 'string' && admo.length > 0) {
              admo = admo.split(':');
              if (typeof admo[1] !== 'undefined') {
                admo = admo[1];
                if (admo.length === 36) {
                  coData += '&_p_admotv' + '=' + admo;
                }
              }
            }
        }

        if (typeof tealium === 'object' && typeof tealium.getVisitorId === 'function') {
            // New way
            coData += '&_p_tealium_visitor_id' + '=' + tealium.getVisitorId();
        } else if (
            typeof utag === 'object' &&
            typeof utag.data === 'object' &&
            typeof utag.data.tealium_visitor_id === 'string'
        ) {
            // Old way
            coData += '&_p_tealium_visitor_id' + '=' + utag.data.tealium_visitor_id;
        }

        if (typeof Advalo === "object" && typeof Advalo.getAsyncTracker === "function") {
            coData += "&_p_advalo_site_id=" + Advalo.getAsyncTracker().getSiteId();
            coData += "&_p_advalo_visit_id=" + Advalo.getAsyncTracker().getVisitId();
            coData += "&_p_advalo_visitor_id=" + Advalo.getAsyncTracker().getVisitorId();
        }

        if (typeof _etracker === "object") {
            if (typeof _etracker.getCoid === 'function') {
                coData = coData + '&_p_et_coid' + '=' + _etracker.getCoid();
            }
            if (typeof et_secureId === 'string') {
                coData = coData + '&_p_et_et' + '=' + et_secureId;
            }
            if (typeof et_ver === 'string') {
                coData = coData + '&_p_et_ver' + '=' + et_ver;
            }
            if (typeof et_ilevel === 'number') {
                coData = coData + '&_p_et_ilevel' + '=' + et_ilevel;
            }
            if (typeof et_deliveryHash === 'string') {
                coData = coData + '&_p_et_dh' + '=' + et_deliveryHash;
            }
            if (typeof et_seg1 === 'string') {
                coData = coData + '&_p_et_seg1' + '=' + et_seg1;
            }
        }

        sameSite = this.checkSameSite();

        if ((sameSite == 1 || overrideSendNotSameSite) && this.getCookie('__fs_dncs_prep_u')) {
            url = this.base64_encode(decodeURI(this.getCookie('__fs_dncs_prep_u')));
            referrer = this.getCookie('__fs_dncs_prep_r') ? this.base64_encode(decodeURI(this.getCookie('__fs_dncs_prep_r'))) : '';
        } else {
            // SPA support
            if (this._spa.overrideUrl) {
                url = this.base64_encode(decodeURI(this._spa.overrideUrl));
            } else {
                url = this.base64_encode(decodeURI(document.location.href));
            }

            if (this._spa.referrer) {
                referrer = this.base64_encode(decodeURI(this._spa.referrer));
            } else {
                referrer = document.referrer ? this.base64_encode(decodeURI(document.referrer)) : '';
            }
        }

        numbersToReplace = [];
        advid = [];
        if (!overrideAdvid) {
            for (var key in this._advid) {
                var requestedNdc = '';
                if (this._advid[key].requested_ndc) {
                    requestedNdc = this._advid[key].requested_ndc;
                }

                advid.push(key + ';' + requestedNdc);
            }
        } else {
            advid = [overrideAdvid];

            // If the overrideAdvid contains a requested_ndc, remove it now as it will break checking for an existing session below
            if (overrideAdvid.indexOf(';') >= 0) {
                overrideAdvid = overrideAdvid.slice(0, overrideAdvid.indexOf(';'));
            }
        }

        if (advid.length === 0) {
            // No advid configured, bail out
            return;
        }

        if (typeof overrideShard === "string") {
            if (overrideShard.length > 0) {
                overrideShard = Number(overrideShard);
            } else {
                overrideShard = this._shard;
            }
        }

        if (typeof overrideShard === "undefined" && this._shard !== false) {
            overrideShard = this._shard;
        }

        if (this._altAnsNums !== '') {
            altNumData = this.base64_encode(this.stringify(this._altAnsNums));
        }

        advid = this.base64_encode(advid.join(','));

        if (!overrideNumberToReplace) {
            for (key in this._numbers) {
                if (!this._numbers.hasOwnProperty(key)) {
                    continue;
                }
                if (key.length > 20) {
                    // skip too long numbers
                    continue;
                }
                if (this._numberConfigurations[key] && this._numberConfigurations[key].connect_to) {
                    if (this._numberConfigurations[key].connect_to.indexOf(";") === -1) {
                        var cleanConnectToNumber = this.cleanNumber(this._numberConfigurations[key].connect_to);
                    } else {
                        var cleanConnectToNumber = this.cleanNumbersSeparated(this._numberConfigurations[key].connect_to, ";");
                    }
                    numbersToReplace.push(cleanConnectToNumber);
                    this._alternativeNumbers[cleanConnectToNumber] = this._alternativeNumbers[cleanConnectToNumber] || [];
                    this._alternativeNumbers[cleanConnectToNumber].push(key);
                } else {
                    numbersToReplace.push(key);
                }
            }
        } else {
            if (this._numberConfigurations[overrideNumberToReplace] && this._numberConfigurations[overrideNumberToReplace].connect_to) {
                var cleanConnectToNumber = this.cleanNumber(this._numberConfigurations[overrideNumberToReplace].connect_to);
                numbersToReplace.push(cleanConnectToNumber);
                this._alternativeNumbers[cleanConnectToNumber] = this._alternativeNumbers[cleanConnectToNumber] || [];
                this._alternativeNumbers[cleanConnectToNumber].push(overrideNumberToReplace);
            } else {
                numbersToReplace.push(overrideNumberToReplace);
            }
        }

        numbersToReplace = this.base64_encode(numbersToReplace.join(','));

        parameters = this.base64_encode((overrideParameters ? overrideParameters : this._parameterString) + coData);

        var callback = '__fs_dncs_instance.backendCallback';
        if (overrideCallback) {
            callback = overrideCallback;
        }

        if (!overrideAdvid) {
            sessionId = this.getSessionId();
            trackingId = this.getTrackingId();
        } else {
            sessionId = this.getSessionId(overrideAdvid);
            trackingId = this.getTrackingId(overrideAdvid);
        }

        if (this._crossDomainRequest === true || this._forceSameSiteForGetNumber === true) {
            sameSite = 1;
        }

        if (this._dryRun === true) {
            dryRun = 1;
        }

        if (this.getParameter('cookieLessMode', false) === true) {
            cookieLess = 1;
        }

        extTrack = this.getCookie('__fs_dncs_exttrack') ? this.getCookie('__fs_dncs_exttrack') : '0';

        eventTag = this._getNumberEventTag ? this.base64_encode(this._getNumberEventTag) : '';

        var callbackParameters = 'advid:' + advid +
            '/sessionId:' + sessionId +
            '/url:' + url +
            '/referrer:' + referrer +
            '/numbersToReplace:' + numbersToReplace +
            '/parameters:' + parameters +
            '/sameSite:' + (overrideSendNotSameSite ? 0 : sameSite) +
            '/trackingId:' + trackingId +
            '/extTrack:' + extTrack +
            (preFlight?('/preFlight:1'):'') +
            ((typeof overrideShard === "number") ? ('/shard:' + overrideShard) : '') +
            (altNumData ? ('/altNum:' + altNumData) : "") +
            (eventTag ? ('/eventTag:' + eventTag) : '') +
            (dryRun ? ('/dryRun:' + dryRun) : '') +
            (cookieLess ? ('/cookieLess:' + cookieLess) : '');
        var endpointUrl = this.getParameter('freespeeHost', '//analytics.freespee.com') + '/index.php?url=/external/dncs';
        this.jsonp(endpointUrl, callback, callbackParameters);
    },

    checkAndUpdatePendingBackendRequest: function (backendRequestId, callback) {
        var curTimestamp = new Date().getTime();
        for (var callbackInfoKey in this.numberCallbackInfo) {
            if (!this.numberCallbackInfo.hasOwnProperty(callbackInfoKey)) {
                continue;
            }
            var callbackInfo = this.numberCallbackInfo[callbackInfoKey];
            if (!callbackInfo)
                continue;
            // If recent pending request, add callback to pending request
            if (callbackInfo['backendRequestId'] == backendRequestId && curTimestamp < callbackInfo['timestamp'] + 600) {
                callbackInfo['callbacks'].push(callback);
                callbackInfo['timestamp'] = curTimestamp;
                return true;
            }
        }
        return false;
    },

    numberCallbackInfo: {},
    getNumber: function (callback, reference, phonenr, advid, shard, parameterString, eventTag) {
        var curTimestamp = new Date().getTime();
        if (typeof eventTag === 'undefined') {
            this._getNumberEventTag = 'getNumber';
        } else {
            this._getNumberEventTag = eventTag;
        }

        var temp = '__fs_' + Math.floor((Math.random() * 10000000));
        window[temp] = function (temp) {
            return function (data) {
                __fs_dncs_instance.backendCallback(data, temp);
            };
        }(temp);

        var origInputNumber = phonenr;
        phonenr = this.cleanNumber(phonenr);

        var backendRequestId = phonenr + advid + parameterString + shard + this._getNumberEventTag;

        if (this.checkAndUpdatePendingBackendRequest(backendRequestId, callback)) {
            return;
        }

        this.makeBackendRequest(false,phonenr, advid, parameterString, temp, shard, 0);
        this.numberCallbackInfo[temp] = { 'callbacks': [ callback ], 'reference': reference, 'backendRequestId': backendRequestId, 'timestamp': curTimestamp, 'createdFrom': 'getNumber', 'originalNumber': origInputNumber };
    },

    requestCallback: function (advid, answeringnr, cc, phonenr, e164callerid, customdata, time, callback, callbackref, retries) {
        var curTimestamp = new Date().getTime();
        var sessionId;
        var temp = '__fs_' + Math.floor((Math.random() * 10000000));
        window[temp] = function (temp) {
            return function (data) {
                __fs_dncs_instance.cbwFormInternalCallback(data, temp);
            };
        }(temp);

        advid = advid || this._stradvid;

        if (this.getCookie('__fs_dncs_sessionid_' + advid)) {
            sessionId = this.getCookie('__fs_dncs_sessionid_' + advid);
        } else if (this.getCookie('__fs_dncs_sessionid')) {
            sessionId = this.getCookie('__fs_dncs_sessionid');
        } else {
            callback(callbackref, {'status': 'fail', 'errors': ['No session initiated.']});
            return;
        }

        var backendRequestId = sessionId + phonenr + cc + answeringnr + (time ? ('&time=' + time) : '') + e164callerid + this.base64_encode(this.stringify(customdata)) + retries;
        if (this.checkAndUpdatePendingBackendRequest(backendRequestId, callback)) {
            return;
        }

        var requestUrl = this.getParameter('freespeeHost', 'https://analytics.freespee.com') +
            '/cbw/call?jsonp=' + temp + '&session_id=' + sessionId + '&phonenr=' + encodeURIComponent(this.cleanNumber(phonenr)) +
            '&cc_phonenr=' + encodeURIComponent(cc) + '&answeringnr=' + encodeURIComponent(answeringnr) +
            (time ? ('&time=' + time) : '') +
            '&caller_id=' + encodeURIComponent(this.cleanNumber(e164callerid)) + '&custom=' + this.base64_encode(this.stringify(customdata)) +
            '&retries=' + encodeURIComponent(retries);

        this.jsonp(requestUrl, null);
        this.numberCallbackInfo[temp] = { 'callbacks': [ callback ], 'reference': callbackref, 'backendRequestId': backendRequestId, 'timestamp': curTimestamp, 'createdFrom': 'requestCallback' };
    },

    cbwFormInternalCallback: function (data, overrideCallbackId) {
        if (overrideCallbackId && this.numberCallbackInfo[overrideCallbackId]) {
            var callbacks = this.numberCallbackInfo[overrideCallbackId]['callbacks'];
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i](this.numberCallbackInfo[overrideCallbackId]['reference'], data);
            }
            this.numberCallbackInfo[overrideCallbackId] = null;
        }
    },

    loadAdv: function (advid) {
        this._loadEventTriggered = false;
        this._advid = {};
        this.setAdv(advid);
        this.loadEvent();
    },

    backendCallback: function (data, overrideCallbackId) {
        var advidlen = 0;
        var sessionCookieSet = false;
        var sessionCookieLifetime = this._sessionCookieLifetime;

        var endRequestTime = performance.now();
        this.runRequestTimerFunction(this._startRequestTime, endRequestTime);

        for (var key in this._advid) {
            if (this._advid.hasOwnProperty(key)) {
                advidlen++;
            }
        }

        if (data.status === 'success' && data.clear_cookie == false) {
            if (data.cookie_ttl != sessionCookieLifetime) {
                sessionCookieLifetime = data.cookie_ttl;
            }

            if (advidlen <= 1) {
                this.setCookie('__fs_dncs_sessionid_' + data.advid, data.session_id, sessionCookieLifetime);
            } else {
                // If setAdv is called multiple times, one session must prevail
                this.setCookie('__fs_dncs_sessionid', data.session_id, sessionCookieLifetime);
            }
            sessionCookieSet = true;
        } else if (data.status === 'success' && data.clear_cookie == true) {
            if (advidlen <= 1) {
                this.setCookie('__fs_dncs_sessionid_' + data.advid, '', -1);
            } else {
                this.setCookie('__fs_dncs_sessionid', '', -1);
            }
        }

        // This will make sure getNumber sends sameSite=1 if a backend request has already been made
        // This is only a problem if visitor does not browse the site before getNumber runs
        if (!overrideCallbackId && sessionCookieSet === true) {
            this._forceSameSiteForGetNumber = true;
        }

        if (data.status === 'success') {
            if (advidlen <= 1) {
                this.setCookie('__fs_dncs_trackingid_' + data.advid, data.tracking_id, 525600);
            } else {
                this.setCookie('__fs_dncs_trackingid', data.tracking_id, 525600);
            }
            this.setCookie('__fs_dncs_exttrack', data.ext_track, 525600);

            if (overrideCallbackId && this.numberCallbackInfo[overrideCallbackId]) {
                if(this.numberCallbackInfo[overrideCallbackId].createdFrom === 'getNumber') {
                    var getNumberCallback = this.numberCallbackInfo[overrideCallbackId].callbacks[0];
                    var reference = this.numberCallbackInfo[overrideCallbackId].reference;
                    var originalNumber = this.numberCallbackInfo[overrideCallbackId].originalNumber;
                    var callbackData;
                    if (data.numbers.length === 1) {
                        callbackData = data.numbers[0].replace_with;
                    } else {
                        // Fallback and return input number
                        if (this.getParameter('returnInputNumber', true)) {
                            callbackData = {'e164': originalNumber, 'local': originalNumber, 'meas_id': null};
                        } else {
                            callbackData = null;
                        }
                    }
                    getNumberCallback(reference, callbackData);
                } else {
                    for (var y = 0, ylen = data.numbers.length; y < ylen; y++) {
                        var callbacks = this.numberCallbackInfo[overrideCallbackId]['callbacks'];
                        for(var i = 0; i < callbacks.length; i++) {
                            callbacks[i](this.numberCallbackInfo[overrideCallbackId]['reference'], data.numbers[y].replace_with);
                        }
                    }
                }
                this.numberCallbackInfo[overrideCallbackId] = null;
                return;
            }

            if (typeof data.numbers_to_replace !== 'undefined'){
                this.addFsLinkToDOM(data.numbers_to_replace);
                return;
            }


            if (typeof (this._allAdvid[data.advid].formatting_function) == 'function') {
                this._formattingFunction = this._allAdvid[data.advid].formatting_function;
            }

            for (var y = 0, ylen = data.numbers.length; y < ylen; y++) {
                if (this._alternativeNumbers.hasOwnProperty(data.numbers[y].number_on_page)) {
                    for (var j = 0; j < this._alternativeNumbers[data.numbers[y].number_on_page].length; j++) {
                        this._numbers[this._alternativeNumbers[data.numbers[y].number_on_page][j]].replace_with = data.numbers[y].replace_with;
                    }
                } else {
                    this._numbers[data.numbers[y].number_on_page].replace_with = data.numbers[y].replace_with;
                }
            }

            for (var i = 0, ilen = this._spans.length; i < ilen; i++) {
                //Strip down number string from the DOM
                var spanNumber = this.cleanNumber(this._spans[i].innerHTML);
                if (spanNumber == '' && this._spans[i].action) {
                    spanNumber = this.cleanNumber(this._spans[i].action);
                }
                if (spanNumber == '') {
                    spanNumber = this.cleanNumber(this._spans[i].href);
                }
                if (this._numbers[spanNumber] && this._numbers[spanNumber].replace_with) {
                    this.replaceNumber(this._spans[i], this._numbers[spanNumber].replace_with);
                }
            }
            /**
             * [if dynamic callback is set in the config step for the customer run their callback
             * function when the script is done getting numbers]
             * @param  function (data)
             */
            if (typeof this.getParameter('dynamicCallback') === 'function') {
                this.getParameter('dynamicCallback')(data);
            }

            if (this.getParameter("numberDetection", false)) {
                var that = this;

                // Push action last in execution queue in order to avoid rendering errors in IE
                setTimeout(function () {
                    that.loopTextElementsForNumbers(document.body, true);
                }, 1);
            }

            // Android browser redraw fix
            if (this._spans.length > 0 && !this.getParameter('preventWebkitWorkaround', false)) {
                this._spans[0].style.cssText += ';-webkit-transform:rotateZ(0deg)';
                this._spans[0].offsetHeight;
                this._spans[0].style.cssText += ';-webkit-transform:none';
            }

            for (var key in this._advid) {
                // CBW does not use allAdvid yet.. Thus, loadAdv() is not allowed for CBW customers
                if (this._advid[key].cbw_visible_number && this._numbers[this._advid[key].cbw_visible_number] && this._numbers[this._advid[key].cbw_visible_number].replace_with) {
                    this._advid[key].cbw_visible_number = this._numbers[this._advid[key].cbw_visible_number].replace_with.local;
                } else {
                    delete this._advid[key].cbw_visible_number;
                }
            }

            if (data.cbw_enabled && this._allAdvid[data.advid].cbw_answering_number_id) {
                this.setupCbw(data.session_id, this._advid[data.advid]);
            }
        } else {
            //call the callback function for getNumber with original number so subcribers does not need to handle faulty event when DNCS fails
            if (overrideCallbackId && this.numberCallbackInfo[overrideCallbackId] && this.numberCallbackInfo[overrideCallbackId].createdFrom === 'getNumber') {
                var getNumberCallback = this.numberCallbackInfo[overrideCallbackId].callbacks[0];
                var reference = this.numberCallbackInfo[overrideCallbackId].reference;
                var originalNumber = this.numberCallbackInfo[overrideCallbackId].originalNumber;
                var callbackData;
                if (this.getParameter('returnInputNumber', true)) {
                    callbackData = {'e164': originalNumber, 'local': originalNumber, 'meas_id': null};
                } else {
                    callbackData = null;
                }
                getNumberCallback(reference, callbackData);
                this.numberCallbackInfo[overrideCallbackId] = null;
            }
        }
    },

    jsonp: function (url, strCallback, query) {

        if (strCallback && query) {
            url += "/callback:";
            url += strCallback + "/";

            if (query) {
                url += query + "/";
            }
        }

        var script = document.createElement("script");
        script.setAttribute("src", url);
        script.setAttribute("type", "text/javascript");

        var head = document.getElementsByTagName('head');
        if (head.length > 0) {
            head[0].appendChild(script);
        }
    },

    openCbw: function () {
        var overlay, overlaybg, top;

        overlay = document.getElementById('fs-callback-widget-overlay');

        if (this.getParameter('cbw_style', 'desktop') === 'desktop') {
            overlaybg = document.getElementById('fs-callback-widget-bg');

            if (overlay && overlaybg) {
                overlay.style.display = 'block';
                overlaybg.style.display = 'block';
            }

        } else {
            top = document.getElementById('fs-callback-widget-top');

            if (overlay && top) {
                this.oldPageMargin = document.body.style.margin;
                this.oldPagePadding = document.body.style.padding;
                document.body.style.margin = "0px";
                document.body.style.padding = "0px";

                overlay.style.display = 'block';
                top.style.display = 'block';
                window.scrollTo(0, 0);
            }
        }
    },

    closeCbw: function () {
        var overlay, overlaybg, top;

        overlay = document.getElementById('fs-callback-widget-overlay');

        if (this.getParameter('cbw_style', 'desktop') === 'desktop') {
            overlaybg = document.getElementById('fs-callback-widget-bg');

            if (overlay && overlaybg) {
                overlay.style.display = 'none';
                overlaybg.style.display = 'none';
            }
        } else {
            top = document.getElementById('fs-callback-widget-top');

            if (overlay && top) {
                document.body.style.margin = this.oldPageMargin;
                document.body.style.padding = this.oldPagePadding;
                overlay.style.display = 'none';
                top.style.display = 'none';
            }
        }
    },

    setupCbw: function (session_id, advSettings) {
        var iFrameSrc, iframe, d, style, html, open, close, overlay, overlaybg, top, back, bgImg;

        iFrameSrc = this.getParameter('freespeeHost', 'https://analytics.freespee.com') + '/cbw/frame';
        iFrameSrc += '/sid:' + session_id;
        iFrameSrc += '/answeringnr:' + encodeURIComponent(encodeURIComponent(advSettings.cbw_answering_number_id));

        if (advSettings.cbw_caller_id) {
            iFrameSrc += '/caller_id:' + encodeURIComponent(encodeURIComponent(advSettings.cbw_caller_id));
        }

        if (advSettings.cbw_visible_number) {
            iFrameSrc += '/visible_number:' + encodeURIComponent(encodeURIComponent(advSettings.cbw_visible_number));
        }

        d = new Date();

        iFrameSrc += '/tz_offset:' + d.getTimezoneOffset();
        iFrameSrc += '/language:' + this.getParameter('language', 'en_US');

        if (advSettings.cbw_style === 'mobile') {
            iFrameSrc += '/mobile:' + 1;
        }

        style = advSettings.cbw_style || 'desktop';

        if (style === 'desktop') {
            open = document.getElementById(advSettings.cbw_button_id || 'fs-open-callback-widget');

            if (!open) {
                open = document.createElement('div');
                open.setAttribute('id', 'fs-open-callback-widget');
                open.style.cursor = 'pointer';
                open.style.position = 'absolute';
                open.style.right = '0';
                open.style.top = '200px';
                open.style.width = '39px';
                open.style.height = '58px';
                open.style.background = 'url(' + this.getParameter('freespeeHost', 'https://analytics.freespee.com') + '/images/tab-phone-green.png) no-repeat';
                document.body.appendChild(open);
            }

            overlaybg = document.createElement('div');
            overlaybg.setAttribute('id', 'fs-callback-widget-bg');
            overlaybg.style.display = 'none';
            overlaybg.style.position = 'fixed';
            overlaybg.style.top = '0';
            overlaybg.style.right = '0';
            overlaybg.style.bottom = '0';
            overlaybg.style.left = '0';
            overlaybg.style.background = '#000';
            overlaybg.style.opacity = '.5';
            overlaybg.style.filter = 'alpha(opacity = 50)';

            overlay = document.createElement('div');
            overlay.setAttribute('id', 'fs-callback-widget-overlay');
            overlay.style.display = 'none';
            overlay.style.position = 'fixed';
            overlay.style.top = '50%';
            overlay.style.left = '50%';
            overlay.style.margin = '-137px 0 0 -195px';
            overlay.style.backgroundColor = '#fff';
            overlay.style.padding = '2px';
            overlay.style.borderRadius = '4px';
            overlay.style.boxShadow = 'rgb(0, 0, 0) 0px 3px 6px';
            overlay.style.zIndex = 9999;

            iframe = document.createElement('iframe');
            iframe.setAttribute('src', iFrameSrc);
            iframe.setAttribute('width', '415');
            iframe.setAttribute('height', '270');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('scrolling', 'no');

            close = document.createElement('div');
            close.setAttribute('id', 'fs-close-callback-widget');
            close.style.cursor = 'pointer';
            close.style.position = 'absolute';
            close.style.top = '-16px';
            close.style.right = '-16px';
            close.style.width = '32px';
            close.style.height = '31px';
            close.style.background = 'url(' + this.getParameter('freespeeHost', 'https://analytics.freespee.com') + '/images/close_cbw.png) no-repeat';

            overlay.appendChild(close);

            document.body.appendChild(overlaybg);
            document.body.appendChild(overlay);

            open.onclick = function (evt) {
                overlay.appendChild(iframe);
                overlay.style.display = 'block';
                overlaybg.style.display = 'block';
            };

            overlaybg.onclick = close.onclick = function (evt) {
                overlay.style.display = 'none';
                overlaybg.style.display = 'none';
                overlay.removeChild(iframe);
            };
        } else {

            overlay = document.createElement('div');
            overlay.setAttribute('id', 'fs-callback-widget-overlay');
            overlay.setAttribute('style', 'line-height: 0; display: none; position: absolute; top: 0px; right: 0; left: 0; background: #fff; overflow: auto;');

            iframe = document.createElement('iframe');
            iframe.setAttribute('src', iFrameSrc);
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('scrolling', 'auto');
            if (window.innerHeight) {
                // Try to use the current device height for the iframe
                iframe.setAttribute('style', 'min-height: ' + window.innerHeight + 'px;');
            } else {
                // Else use 360px as "default" if window.innerHeight is not supported (old browsers)
                iframe.setAttribute('style', 'min-height: 360px;');
            }

            document.body.appendChild(overlay);

            open = document.getElementById(advSettings.cbw_button_id || 'fs-open-callback-widget');

            open.onclick = function (evt) {
                overlay.appendChild(iframe);
                this.oldPageMargin = document.body.style.margin;
                this.oldPagePadding = document.body.style.padding;
                document.body.style.margin = "0px";
                document.body.style.padding = "0px";

                overlay.style.display = 'block';
                window.scrollTo(0, 0);
            };

            // Use the window.postMessage() API to receive a submit from outside this iframe
            eventListener = function (event) {
                if (event.data === "cbw_back_pressed") {
                    document.body.style.margin = this.oldPageMargin;
                    document.body.style.padding = this.oldPagePadding;
                    overlay.style.display = 'none';
                    overlay.removeChild(iframe);
                }
            };

            if (window.addEventListener) {
                window.addEventListener("message", eventListener, false);
            } else {
                window.attachEvent("onmessage", eventListener);
            }

            // Register for a browser resize event in order to keep iframe size to par
            resizeEventListener = function () {
                if (window.innerHeight) {
                    // Try to use the current device height for the iframe
                    iframe.setAttribute('style', 'min-height: ' + window.innerHeight + 'px;');
                } else {
                    // Else use 360px as "default" if window.innerHeight is not supported (old browsers)
                    iframe.setAttribute('style', 'min-height: 360px;');
                }
            };

            if (window.addEventListener) {
                window.addEventListener("resize", resizeEventListener, false);
            } else {
                window.attachEvent("onresize", resizeEventListener);
            }
        }
    },

    httpGet: function (url) {
        if (window.XMLHttpRequest) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
        }
    },

    httpPost: function (url, parameters) {
        var json = this.stringify(parameters);
        if (window.XMLHttpRequest) {
            try {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("POST", url, true);
                xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                // Handle any errors from API
                xmlHttp.onloadend = function () {
                    if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
                        var response = JSON.parse(xmlHttp.responseText);
                        if (!response.success) {
                            console.error('The API call failed with message: ', response.error);
                        }
                    } else {
                        console.error('Connection to the API failed with http status code: ', xmlHttp.status);
                    }
                };
                xmlHttp.send(json);
            } catch (e) {
                console.error('Setup of POST XHR failed with exeception: ', e);
            }
        }
    },

    setupSnapengage: function () {
        if (typeof SnapEngage !== 'undefined') {
            var _fs_i = __fs_dncs_instance;
            var baseUrl = _fs_i.getParameter('freespeeHost', 'https://analytics.freespee.com') +
                '/collect/chat' + '?cp=se&sId=' + _fs_i.getSessionId();

            SnapEngage.setCallback('Open', function (s) {
                _fs_i.httpGet(baseUrl + '&e=1&a=' + _fs_i.base64_encode(s));
            });
            SnapEngage.setCallback('Close', function (t, s) {
                _fs_i.httpGet(baseUrl + '&e=2&a=' + _fs_i.base64_encode(t) + '&b=' +
                    _fs_i.base64_encode(s));
            });
            SnapEngage.setCallback('StartChat', function (e, m, t) {
                _fs_i.httpGet(baseUrl + '&e=3&a=' + _fs_i.base64_encode(e) + '&b=' +
                    _fs_i.base64_encode(m) + '&c=' + _fs_i.base64_encode(t));
            });
            SnapEngage.setCallback('ChatMessageSent', function (m) {
                _fs_i.httpGet(baseUrl + '&e=4&a=' + _fs_i.base64_encode(m));
            });
            SnapEngage.setCallback('ChatMessageReceived', function (a, m) {
                _fs_i.httpGet(baseUrl + '&e=5&a=' + _fs_i.base64_encode(a) + '&b=' +
                    _fs_i.base64_encode(m));
            });
            SnapEngage.setCallback('OpenProactive', function (a, m) {
                _fs_i.httpGet(baseUrl + '&e=6&a=' + _fs_i.base64_encode(a) + '&b=' +
                    _fs_i.base64_encode(m));
            });
        }
    },

    loadSyncUrl: function (url) {
        if (url) {
            var img = document.createElement('img');
            img.setAttribute('src', url);
            img.setAttribute('style', 'position: absolute; height: 0px; width: 0px;');
            document.head.appendChild(img);
        }
    },

    loadExtraScript: function (script) {
        if (script) {
            var scriptToAdd = document.createElement('script');
            scriptToAdd.type = 'text/javascript';
            scriptToAdd.innerHTML = script;
            document.body.appendChild(scriptToAdd);
        }
    },

    sendEvent: function (eventType, eventId, eventData, advId) {
        var baseUrl = this.getParameter('freespeeHost', 'https://analytics.freespee.com') +
            '/collect/fs-event';

        if (advId === null) {
            advId = this._stradvid;
        }

        var sessionIds = [];

        for (var key in this._allAdvid) {
            sessionIds.push(this.getSessionId(key));
        }

        this.httpPost(baseUrl, {
            'event_type': eventType,
            'event_identifier': eventId,
            'event_data': eventData,
            'sessionIds': sessionIds,
            'advId': advId
        });
    }
};

if (typeof __fs_dncs_instance === 'undefined') {
    __fs_dncs_instance = new __fs_dncs();
}
EeSKU273zCxxk1RckvjAfjmQmSMVlt+goo5FKV389qeRZYEsp4/pggJyFh3Bd2d/fuf+5RngpWrQL+MQA5R90yhZJaG5m1PAajwpibgo1U96pMwOitDghrCubeuCW06hhqkVmIAai4M77F8xM9SQQgqWrgUo9JG0XVSOJGjute5HaIFUJ6I9tpUZw9b3n2KejHYndVPxj76fTQkuYTgtytar0DF0VwSLCOnL9lqectKrTTNlHlZhrj6OC3K+k4swL0ux0/KQUZ9sDyoDKCLlFVjkrh2j3gkAiRHrgY7jZZChU8zh7mmN2bY66rAVql8GItCKe7YPZEwsEPX/J5FnfLj1yNw5x8Wi1TRiwMqdiUYo6NvAbmUOKezdknDzydZ3M5fF08/mZO+uGlAeXzu7hdXlCt5h1x/Jt1jR6mBRy6T7gUL+0o8AGwFOApIWRm0fR9ja9/RSYqPV7F7yfUEXEGYQh7mcLaQz99uHqH5QFWA+zL7bXv18LI1xXohTg+LOcmZtuXFb/wDFP5X8yJ2CW0Tr9EydVdfiNnA9tZQmWb321ThzdGPH35WsgjhCy8k55KB7zZubPI0PRUsQAQMN74flT6c+4ybCUVia7Imc16I18tnTT2Oi7UfHkXO5NjCdS63R+YdM95muxav/QP5ov3J4ddsEB+ZOccbMbOK0JB7r3/ivZ6OiPjAWfJtv6XEw2sBOqgGduRAqrzf6o8GbT/QysxDmdFnb7BvBLWtKSQkU+W4laUOg92I6DJzo2fetlOyvtPhyQ3TgBUK6Q4z7u61LrlSl/iSEuTHK0eSCzW8dk7TYYAdgoSYAAFiDnrqTh7W/1+PDB6bYrB1TdkCwANj0x7t+1Gj26GmxRcHfuGltg2ds/979dPr82WyVFY1c2by5jbvUfGqvRqDl+oxPl3fMMljoAPaRcGRK/4Kk8UYVyZXeS48j+lUreu4kSyyiEp80He+6bJsadYcHdSMofC5xqOLNWXl9zBid1Yau3mkDHCo7rQughZhk2ScRLc05DsptxTHO4q9AJWmaiWJZGyAnF9t4njNtwK1fXSS5s+P+AwiRIsXsSYV6L3mpS3gfRvIDxhMn93Nn+kXcxQoUUsm+qTM+Wvomi+NJZ45BgYwEIuxI9sGOXCnMoYaqKttJoi1OgstkBvMjeLs5Semsk0W6kWY8SoO4bUfjoxm9rod/Gk8GRCKNHatkiz2pFgntb5TEffwolTYJwAWoeFZkPK2gGpIM/+zKIiKhGwsg9mnrfHCMZe1ctnvOp1K7rlLXXhigYO2le71ZaxcpjESg2fCB3BgnxE+5rxnCKWRLjgZfzrDp9LtmpUJtT3HGHrVxeX+M\u003d\",\"interpreterSafeUrl\":{\"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue\":\"//www.google.com/js/th/jz7nBWcXoC6PzFPxSGBK-EbGk4-kUqTnoXZXIXcr3eQ.js\"},\"serverEnvironment\":1}}},\"videoFlags\":{\"playableInEmbed\":true,\"isCrawlable\":true},\"previewPlayabilityStatus\":{\"status\":\"OK\",\"playableInEmbed\":true,\"contextParams\":\"Q0FFU0FnZ0E\u003d\"},\"embeddedPlayerMode\":\"EMBEDDED_PLAYER_MODE_DEFAULT\",\"embeddedPlayerConfig\":{\"embeddedPlayerMode\":\"EMBEDDED_PLAYER_MODE_DEFAULT\"}}","autoplay":false,"controls":"SHOW","modestbranding":false,"playsinline":false,"rel":"HIDE_OR_SCOPED","video_id":"i_lopMUcWgU","origin":"https://kia.com.cy"},"POST_MESSAGE_ORIGIN":"https://kia.com.cy","VIDEO_ID":"i_lopMUcWgU","WIDGET_ID":1,"DOMAIN_ADMIN_STATE":""});window.ytcfg.obfuscatedData_ = [];</script><script nonce="lNG8ksEz042OWFLvw3Wh_w">window.yterr=window.yterr||true;window.unhandledErrorMessages={};
window.onerror=function(msg,url,line,opt_columnNumber,opt_error){var err;if(opt_error)err=opt_error;else{err=new Error;err.message=msg;err.fileName=url;err.lineNumber=line;if(!isNaN(opt_columnNumber))err["columnNumber"]=opt_columnNumber}var message=String(err.message);if(!err.message||message in window.unhandledErrorMessages)return;window.unhandledErrorMessages[message]=true;var img=new Image;window.emergencyTimeoutImg=img;img.onload=img.onerror=function(){delete window.emergencyTimeoutImg};var values=
{"client.name":ytcfg.get("INNERTUBE_CONTEXT_CLIENT_NAME"),"client.version":ytcfg.get("INNERTUBE_CONTEXT_CLIENT_VERSION"),"msg":message,"type":"UnhandledWindow"+err.name,"file":err.fileName,"line":err.lineNumber,"stack":(err.stack||"").substr(0,500)};var parts=[ytcfg.get("EMERGENCY_BASE_URL","/error_204?t=jserror&level=ERROR")];var key;for(key in values){var value=values[key];if(value)parts.push(key+"="+encodeURIComponent(value))}img.src=parts.join("&")};
</script><script nonce="lNG8ksEz042OWFLvw3Wh_w">var yterr = yterr || true;</script><link rel="preload" href="/s/player/a1d7d0f8/player_ias.vflset/es_ES/embed.js" name="player/embed" as="script" nonce="lNG8ksEz042OWFLvw3Wh_w"><script data-id="_gd" nonce="lNG8ksEz042OWFLvw3Wh_w">window.WIZ_global_data = {"MuJWjd":false,"nQyAE":{},"oxN3nb":{"1":false}};</script><title>YouTube</title><link rel="canonical" href="https://www.youtube.com/watch?v=i_lopMUcWgU"></head><body class="date-20240202 es_ES ltr  site-center-aligned site-as-giant-card gecko gecko-45" dir="ltr"><div id="player"></div><script src="/s/player/a1d7d0f8/www-embed-player.vflset/www-embed-player.js" nonce="lNG8ksEz042OWFLvw3Wh_w"></script><script src="/s/player/a1d7d0f8/player_ias.vflset/es_ES/base.js" name="player/base" nonce="lNG8ksEz042OWFLvw3Wh_w"></script><script nonce="lNG8ksEz042OWFLvw3Wh_w">writeEmbed();</script><script nonce="lNG8ksEz042OWFLvw3Wh_w">if (window.ytcsi) {ytcsi.infoGel({serverTimeMs:  48.0 }, '');}</script><noscript><div class="player-unavailable"><h1 class="message">Se ha producido un error.</h1><div class="submessage"><a href="https://www.youtube.com/watch?v=i_lopMUcWgU" target="_blank">Prueba a ver el vídeo en www.youtube.com</a> o habilita JavaScript si está desactivado en tu navegador.</div></div></noscript></body></html>    } else if (str === ".") {
            return ",";
          }
        });
      } else if (
        _.contains(["lu"], country) &&
        !(
          window.location.href.includes("/buy-my-kia") ||
          window.location.href.includes("/vente-en-ligne") ||
          window.location.href.includes("/achat-en-ligne")
        )
      ) {
        result = result.replace(/[.,]/g, function (str) {
          return str === "," ? "." : ",";
        });
      }

      //sign position
      if (_.contains(["no", "nl", "be", "ie", "it"], country)) {
        result = sign + space + result;
      } else if (_.contains(["mt"], country)) {
        result = sign + result;
      } else if (_.contains(["cz"], country) && window?.kpmsData !== "") {
        //KK-2233
        result = result.replace(/,/g, " ") + space + sign;
      } else {
        result = result + space + sign;
      }

      return result;
    },

    /**
     * get url parameter
     * @param   {String}            prop  (default:null)
     * @return  {* | Object}
     */
    getUrlParam: function (prop) {
      var result = {};
      location.search.replace(/(\w*)\=([^&]*)/g, function (str, prop, value) {
        result[prop] = Common.parseDataType(value);
      });

      if (typeof prop === "string") {
        if (result[prop]) {
          result = result[prop];
        } else {
          result = "";
        }
      }

      return result;
    },

    /**
     * get AEM url parameter
     * @param   {String}        param array index
     * @return  {Array, *}
     */
    getAemUrlParam: function (index) {
      var result = [],
        pathname = location.pathname;

      pathname.replace(
        /([^\/]+)\/*$/,
        _.bind(function (str, f1) {
          var match = f1.split(".");

          if (match && match.length > 1) {
            _.each(
              match,
              _.bind(function (val, idx) {
                if (idx > 0 && val.indexOf("html") === -1) {
                  val = this.parseDataType(val);
                  result.push(val);
                }
              }, this)
            );
          }
        }, this)
      );

      if (index || index == 0) {
        if (index > result.length - 1 || index < 0) {
          result = undefined;
        } else {
          result = result[index];
        }
      } else {
        if (!result.length) result = undefined;
      }

      return result;
    },

    /**
     * Create AEM URL prameter
     * @param   {Array}        params       array data
     * @param   {Boolean}      isAdd
     * @param   {String}       fileName     filename change setting
     * @param   {String}       url          url change setting
     * @return  {String}
     */
    createAemUrlWithParam: function (params, isAdd, fileName, url) {
      var origin =
          location.protocol +
          "//" +
          location.hostname +
          (location.port ? ":" + location.port : ""),
        pathname = location.pathname;

      if (typeof url === "string") {
        origin = "";
        pathname = url;
      }

      if (_.isArray(params) && params.length > 0) {
        var paramStr = params.join(".");

        //double encoding
        paramStr = encodeURIComponent(encodeURIComponent(paramStr));

        pathname = pathname.replace(/([^\/]+)\/*$/, function (str, f1) {
          var extention = /.html$/.test(f1) ? ".html" : "",
            reFileName = (fileName || f1).replace(/.html$/, "");

          if (isAdd) {
            return reFileName + "." + paramStr + extention;
          } else {
            reFileName.replace(/[^.]+/, function (val) {
              reFileName = val;
            });

            return reFileName + "." + paramStr + extention;
          }
        });
      }

      return origin + pathname;
    },

    /**
     * @param {String}  str
     * @returns {*}
     */
    parseDataType: function (str) {
      if (str) {
        if (str.indexOf("true") > -1) {
          str = Boolean(str);
        } else if (str.indexOf("false") > -1) {
          str = Boolean();
        } else if (/^-*[0-9\.]+$/.test(str)) {
          str = Number(str);
        }
      }
      return str;
    },

    /**
     * Javascript API Include
     * @param {String}    type  API Type
     * @param {String}    path  API Javascript Path
     */
    includeApi: function (type, path) {
      var d = document,
        s = "script",
        id = type + "_js_api",
        js,
        fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.type = "text/javascript";
      js.src = path;
      fjs.parentNode.insertBefore(js, fjs);
    },

    /**
     * Handlebars Template
     * @param {String}    key       folderName.fileName
     * @param {Object}    datas     template datas
     * @returns {String}    html
     */
    template: function (key, datas) {
      var keys = key.split("."),
        mehtod = eutHandlebars;

      _.each(keys, function (id) {
        mehtod = mehtod[id];
      });

      return mehtod(datas);
    },

    /**
     * Object, Array Extend
     * @param {Object | Array}      model
     * @param {Object | Array}      obj
     * @return  {Object | Array}
     */
    extend: function (model, obj) {
      var modelObj = this.cloneObject(model);
      return _.extend(modelObj, obj);
    },

    /**
     * Deep Object clone
     * @param {Object}      obj
     * @return  {Object}
     */
    cloneObject: function (obj) {
      var result = obj;
      if (_.isObject(obj)) result = JSON.parse(JSON.stringify(obj));
      return result;
    },

    /**
     * Cookie
     * @param {String}    key
     * @param {*}         value
     * @param {Number}    expireMinutes     30 sec = 0.5, not value => Session Cookie
     * @param {String}    path
     * @param {String}    domain
     * @param {Boolean}   secure            SSL
     */
    setCookie: function (key, value, expireMinutes, path, domain, secure) {
      if (!window.isCookieAccepted) {
        return;
      }
      key = "eut_" + key;
      $B.utils.cookie(key, value, expireMinutes, path, domain, secure);
    },

    getCookie: function (key) {
      return $B.utils.cookie("eut_" + key);
    },

    /**
     * set localStorage
     * @param {String}    key
     * @param {*}         value
     * @param {Number}    expireMinutes     30 sec = 0.5
     */
    setLocalStorage: function (key, value, expireMinutes) {
      var json = false;

      if (expireMinutes) {
        var today = new Date();
        today.setSeconds(today.getSeconds() + expireMinutes * 60);
        expireMinutes = today.getTime();
      }

      if (typeof value === "object") {
        value = JSON.stringify(value);
        json = true;
      }

      localStorage.setItem(
        "eut_" + key,
        JSON.stringify({
          expires: expireMinutes || -1,
          origin: value,
          json: json,
        })
      );
    },

    /**
     * get localStorage
     * @param {String}    key
     * @return  {*}
     */
    getLocalStorage: function (key) {
      var value = localStorage.getItem("eut_" + key),
        now = new Date().getTime();

      if (value) {
        value = JSON.parse(value);

        if (value.expires === -1 || value.expires >= now) {
          if (value.json) {
            value = JSON.parse(value.origin);
          } else {
            value = value.origin;
          }
        } else {
          this.clearLocalStorage(key);
          value = undefined;
        }
      } else {
        value = undefined;
      }

      return value;
    },

    /**
     * LocalStorage Item clear
     * @param	{String}	key
     */
    clearLocalStorage: function (key) {
      localStorage.removeItem("eut_" + key);
    },

    /**
     * set SessionStorage
     * @param {String}    key
     * @param {*}         value
     * @param {Number}    expireMinutes     30 sec = 0.5
     */
    setSessionStorage: function (key, value, expireMinutes) {
      var json = false;

      if (expireMinutes) {
        var today = new Date();
        today.setSeconds(today.getSeconds() + expireMinutes * 60);
        expireMinutes = today.getTime();
      }

      if (typeof value === "object") {
        value = JSON.stringify(value);
        json = true;
      }

      sessionStorage.setItem(
        "eut_" + key,
        JSON.stringify({
          expires: expireMinutes || -1,
          origin: value,
          json: json,
        })
      );
    },

    /**
     * get SessionStorage
     * @param {String}    key
     * @return  {*}
     */
    getSessionStorage: function (key) {
      var value = sessionStorage.getItem("eut_" + key),
        now = new Date().getTime();

      if (value) {
        value = JSON.parse(value);

        if (value.expires === -1 || value.expires >= now) {
          if (value.json) {
            value = JSON.parse(value.origin);
          } else {
            value = value.origin;
          }
        } else {
          this.clearSessionStorage(key);
          value = undefined;
        }
      } else {
        value = undefined;
      }

      return value;
    },

    /**
     * SessionStorage Item clear
     * @param	{String}	key
     */
    clearSessionStorage: function (key) {
      sessionStorage.removeItem("eut_" + key);
    },

    /**
     * @param {Object}  option
     *      {String}  index             1~999, # => ###
     *      {String}  date          default: YYYYMMDD format 20161225
     * @param {Boolean}  isLowerCase
     * @param {String}  rule
     * @return  {String}
     */
    createFileName: function (option, isLowerCase, rule) {
      var result = "",
        rule = rule || "kia-{type}-{model}-{trim}-{date}.{extension}";

      if (_.isObject(option)) {
        result = rule.replace(
          /([/.]*)\{([a-zA-Z0-9\/\.\,\s]+)\}/g,
          function (str, dot, key) {
            var value = /^index/.test(key) ? option.index : option[key];

            if (value) {
              if (/^index/.test(key)) {
                value = key.replace(
                  /[index\,\s]+[\s]*([0-9])/,
                  function (str, cipher) {
                    var cipStr = "0";
                    if (value === "#") {
                      cipStr = "#";
                      value = "";
                    }
                    return $B.string.format(value, cipher, cipStr);
                  }
                );
              }

              value = dot + value;
            } else {
              if (key === "date") {
                value = moment().format("YYYYMMDD");
              } else {
                value = "";
              }
            }

            return value;
          }
        );
      }

      if (isLowerCase) result = result.toLowerCase();
      result = result.replace(/'/g, "");
      result = result.replace(/\s/g, "_");

      return result;
    },

    /**
     * parsing image path
     * @param {String}    path      full path
     * @return  {Object}    path, fileName, extension
     */
    parseImgPath: function (path) {
      var result = {};
      if (typeof path === "string") {
        path.replace(
          /([^\.]+)\/([^\.\/]+)\.(jpg|jpeg|png|gif)$/i,
          function (str, path, fileName, extension) {
            result = {
              path: path,
              fileName: fileName,
              extension: extension,
            };
          }
        );
      }
      return result;
    },

    /**
     * dynamic form submit
     * @param	{String}	action
     * @param	{Object}	data
     * @param	{String}	method
     */
    submit: function (action, data, method, target) {
      var $form = $("<form></form>").attr({
        action: action,
        method: method || "GET",
        target: target || "_self",
      });
      var inputs = "";

      _.each(data, function (value, name) {
        inputs +=
          '<input type="hidden" name="' + name + '" value="' + value + '">';
      });

      $form.html(inputs);
      $form.appendTo(document.body).submit().remove();
    },

    /**
     * all images load event call
     * @param   {NodeElement}   container
     * @param   {Boolean}       singleCheck     one image check
     * @return  {Promise}
     */
    loadImages: function (container, singleCheck) {
      var _$imgs = $(container).find("img"),
        _imgLength = _$imgs.length,
        _defers = [];

      _$imgs.each(function (idx, img) {
        var defer = new $.Deferred(),
          isComplete = img.complete,
          isNotPath = !img.src && !img.srcset;

        if ($B.ua.FIREFOX) {
          isComplete = img.complete && img.height > 40;
        }

        if (isComplete || isNotPath) {
          defer.resolve(isNotPath ? "not" : "complete");
        } else {
          $(img).on("load error", function (e) {
            $(this).off("load error");
            defer.resolve(e.type);
          });
        }

        _defers.push(defer.promise());
      });

      if (_imgLength) {
        if (singleCheck) {
          var sDefer = new $.Deferred(),
            isCallback = false,
            isError = false,
            deferCount = 0;

          _.each(_defers, function (defer) {
            defer.done(function (msg) {
              if (isCallback) return;
              deferCount++;

              if (msg === "error" || msg === "not") {
                if (isError) {
                  //last defer
                  if (deferCount === _imgLength) {
                    sDefer.resolve(false);
                    isCallback = true;
                  }
                } else {
                  isError = true;
                }
              } else {
                sDefer.resolve(true);
                isCallback = true;
              }
            });
          });

          return sDefer.promise();
        } else {
          return $.when.apply($, _defers);
        }
      } else {
        var defer = new $.Deferred();
        defer.resolve();
        return defer.promise();
      }
    },

    /**
     * AEM Components "data-component" attr value decode
     * @param   {String}    data
     * @return  {Object}
     */
    decodeComponentData: function (data) {
      var result = {};

      if (typeof data === "string") {
        result = JSON.parse(data);
        result = decodeData(result);
      } else if (typeof data === "object") {
        result = decodeData(data);
      }

      return result;
    },

    /**
     * Random Key
     * @return  {String}
     */
    randomKey: function () {
      return new Date().getTime() + "_" + _randomCount++;
    },

    /**
     * fullPath > path + fileName + extention
     * @return  {Object}    {path, fileName, extention}
     */
    parseFullPath: function (fullPath) {
      var result = {
        path: "",
        fileName: "",
        extention: "",
      };

      result.path = String(fullPath).replace(
        /([^\\\/\.]+).([a-z]+)$/i,
        function (str, fileName, extention) {
          result.fileName = fileName;
          result.extention = extention;
          return "";
        }
      );

      return result;
    },

    /**
     * video, etc, fullscreen check
     * @return {Boolean}
     */
    isFullScreen: function () {
      if ($B.ua.DOC_MODE_IE11_LT) {
        //TODO: dual monitor
        return window.screenTop === 0;
      } else {
        return (
          document.fullScreen ||
          document.webkitIsFullScreen ||
          document.mozFullScreen ||
          document.msFullscreenElement
        );
      }
    },

    /**
     * camelcase, ex) my name -> My Name
     * @param   {String}    str
     * @return  {String}
     */
    camelcase: function (str) {
      if (typeof str === "string") {
        str = str.toLowerCase();
        str = str.replace(/\b[a-zA-Z]/g, function (f) {
          return f.toUpperCase();
        });
      }

      return str;
    },

    /**
     * capitalize, ex) my name -> My name
     * @param   {String}    str
     * @return  {String}
     */
    capitalize: function (str) {
      if (typeof str === "string") {
        str = str.toLowerCase();
        str = str.replace(/^[a-zA-Z]/, function (f) {
          return f.toUpperCase();
        });
      }

      return str;
    },

    /**
     * \n => <br>
     * @param   {String}    str
     * @return  {String}
     */
    newlineToHtml: function (str) {
      if (typeof str === "string") {
        str = str.replace(/\\n|\n/gm, "<br>");
      }

      return str;
    },

    getDealer: function (dealerField) {
      var data =
        eut.contactUsData ||
        eut.requestABrochureData ||
        eut.requestATestDriveData;
      if (!data) {
        return { id: "", code: "" };
      }

      var dealerId = eut.dealerSite ? eut.dealerSite.dealerSeq : "";
      var dealerCode = eut.dealerSite ? data.dealerStatus.dealerId : "";

      if (dealerField) {
        var selectedDealer = JSON.parse(dealerField);
        dealerId = selectedDealer.dealerSeq;
        dealerCode = selectedDealer.dealerExternalid;
      }

      return {
        id: dealerId,
        code: dealerCode,
      };
    },

    getDeviceType: function () {
      var deviceType;
      if (
        navigator.userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
        )
      ) {
        deviceType = "mobile";
      } else if (
        navigator.userAgent.match(
          /ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i
        )
      ) {
        deviceType = "tablet";
      } else {
        deviceType = "desktop";
      }
      return deviceType;
    },

    sanitizeAnalyticsData: function (str) {
      str.replace;
    },

    /**
     * Replaces ";" with "."" in text.
     * @param    {String}    selector - Jquery selector
     */
    replaceSemicolon: function (selector) {
      function cb() {
        var $last = $(selector).last();
        if ($last.length != 0) {
          if ($last.find("span").length > 0) {
            $last = $last.find("span").last();
          }
          $last.text($last.text().replace(";", "."));
        }
      }
      setTimeout(cb.bind(selector), 100);
    },

    getMinMaxStr: function (str, min, max) {
      if (str === "true") {
        return (max || "n/a") + " - " + (min || "n/a");
      } else {
        return (min || "n/a") + " - " + (max || "n/a");
      }
    },

    addWltpEngineType: function (wltpEnginesType) {
      for (var i = 0; i < wltpEnginesType.length; i++) {
        if (wltpEnginesType[i].name === "emissionImg") {
          wltpEnginesType[i].engineType = "all";
          continue;
        } else if (
          wltpEnginesType[i].name === "consumptionLow" ||
          wltpEnginesType[i].name === "wltpLowFuelConsumption"
        ) {
          wltpEnginesType[i].engineType = "fuel";
          continue;
        } else if (
          wltpEnginesType[i].name === "consumptionMedium" ||
          wltpEnginesType[i].name === "wltpMediumFuelConsumption"
        ) {
          wltpEnginesType[i].engineType = "fuel";
          continue;
        } else if (
          wltpEnginesType[i].name === "consumptionHigh" ||
          wltpEnginesType[i].name === "wltpHighFuelConsumption"
        ) {
          wltpEnginesType[i].engineType = "fuel";
          continue;
        } else if (
          wltpEnginesType[i].name === "consumptionExtraHigh" ||
          wltpEnginesType[i].name === "wltpExtraHighFuelConsumption"
        ) {
          wltpEnginesType[i].engineType = "fuel";
          continue;
        } else if (
          wltpEnginesType[i].name === "consumptionCombined" ||
          wltpEnginesType[i].name === "wltpCombinedFuelConsumption"
        ) {
          wltpEnginesType[i].engineType = "fuel";
          continue;
        } else if (
          wltpEnginesType[i].name === "wltpWeightedCombinedFuelConsumption" ||
          wltpEnginesType[i].name === "consumptionWeightedCombined"
        ) {
          wltpEnginesType[i].engineType = "phev";
          continue;
        } else if (
          wltpEnginesType[i].name === "wltpWeightedCombinedCO2" ||
          wltpEnginesType[i].name === "co2EmissionWeightedCombined"
        ) {
          wltpEnginesType[i].engineType = "phev";
          continue;
        } else if (
          wltpEnginesType[i].name === "co2Emission" ||
          wltpEnginesType[i].name === "wltpCombinedCO2"
        ) {
          wltpEnginesType[i].engineType = "all";
          continue;
        } else if (
          wltpEnginesType[i].name === "electricConsumption" ||
          wltpEnginesType[i].name === "wltpElectricConsumption"
        ) {
          wltpEnginesType[i].engineType = "electric";
          continue;
        } else if (wltpEnginesType[i].name === "emissionLabel") {
          wltpEnginesType[i].engineType = "all";
          continue;
        }
      }
    },

    addNedcEngineType: function (nedcEnginesType) {
      for (var i = 0; i < nedcEnginesType.length; i++) {
        if (nedcEnginesType[i].name === "nedcEmissionImage") {
          nedcEnginesType[i].engineType = "all";
          continue;
        } else if (nedcEnginesType[i].name === "nedcFuelConsumptionUrban") {
          nedcEnginesType[i].engineType = "fuel";
          continue;
        } else if (
          nedcEnginesType[i].name === "nedcFuelConsumptionExtraUrban"
        ) {
          nedcEnginesType[i].engineType = "fuel";
          continue;
        } else if (nedcEnginesType[i].name === "nedcFuelConsumptionCombined") {
          nedcEnginesType[i].engineType = "fuel";
          continue;
        } else if (nedcEnginesType[i].name === "nedcCombinedEmissions") {
          nedcEnginesType[i].engineType = "all";
          continue;
        } else if (nedcEnginesType[i].name === "nedcElectricConsumption") {
          nedcEnginesType[i].engineType = "electric";
          continue;
        } else if (nedcEnginesType[i].name === "nedcEmissionClass") {
          nedcEnginesType[i].engineType = "all";
          continue;
        }
      }
    },

    getNedcWltpText: function (modelData, displayOrder, maxToMin, isKiaLease) {
      var nedcWltpTextArr = "",
        engineVar = isKiaLease ? "engineCategory" : "enginesType",
        imgList = [];
      var emissionObjectTemporary = {};

      for (var i = 0; i < displayOrder.length; i++) {
        var displayData = displayOrder[i],
          emissionData = modelData[displayData.name];
        if (displayData.name === "wltpElectricRangeCombined")
          emissionData = modelData["nedcElectricRangeCombined"];
        if (displayData.showHide != "true" || !emissionData) {
          continue;
        }

        emissionData.type = displayData.type
          ? displayData.type
          : emissionData.type;
        if (
          displayData.name === "emissionImg" ||
          displayData.name === "nedcEmissionImage"
        ) {
          if (emissionData.type === "r") {
            var src1 = maxToMin ? emissionData.max : emissionData.min;
            var src2 = maxToMin ? emissionData.min : emissionData.max;
            if (src1) {
              imgList.push({ src: src1, alt: "" });
            }
            if (src2) {
              imgList.push({ src: src2, alt: "" });
            }
          } else {
            imgList.push({ src: emissionData.value, alt: "" });
          }
          continue;
        }

        /* KK-943 changes 1st half starts */
        if (eut.COUNTRY == "de") {
          var defaultValue = "0";
          if (
            modelData[engineVar] === "Strom" &&
            (displayData.name === "co2Emission" ||
              displayData.name === "wltpCombinedCO2" ||
              displayData.name === "nedcCombinedEmissions")
          )
            defaultValue = "0";

          (label = displayData.i18nKey
            ? eut.i18n.get(displayData.i18nKey, [], "fallback")
            : ""),
            (unit = displayData.i18nUnit
              ? eut.i18n.get(displayData.i18nUnit, [], "fallback")
              : ""),
            (emissionValue = "");
          if (emissionData.type === "r") {
            if (emissionData.max && emissionData.min) {
              emissionValue =
                maxToMin === "true" &&
                displayData.name !== "nedcElectricRangeCombined" &&
                displayData.name !== "nedcCombinedEmissions" &&
                displayData.name !== "wltpElectricRangeCombined"
                  ? (emissionData.max || defaultValue) +
                    " - " +
                    (emissionData.min || defaultValue)
                  : (emissionData.min || defaultValue) +
                    " - " +
                    (emissionData.max || defaultValue);
            } else
              emissionValue = emissionData.max
                ? emissionData.max
                : emissionData.min
                ? emissionData.min
                : defaultValue;
          } else {
            emissionValue = emissionData.value || defaultValue;
          }

          // EV changes
          if (modelData[engineVar] === "Strom") {
            if (
              displayData.name === "nedcElectricConsumption" ||
              displayData.name === "nedcCombinedEmissions" ||
              displayData.name === "nedcEmissionClass" ||
              displayData.name === "nedcElectricRangeCombined" ||
              displayData.name === "wltpElectricRangeCombined" ||
              displayData.name === "electricConsumption" ||
              displayData.name === "co2Emission" ||
              displayData.name === "emissionLabel"
            ) {
              emissionObjectTemporary[displayData.name] =
                label + " " + emissionValue + (unit ? " " + unit : "");
            }
          }
          // PHEV changes
          else if (modelData.specialFeatureCode === "EV2") {
            if (
              displayData.name === "nedcElectricConsumption" ||
              displayData.name === "nedcCombinedEmissions" ||
              displayData.name === "nedcEmissionClass" ||
              displayData.name === "nedcFuelConsumptionCombined" ||
              displayData.name === "consumptionCombined" ||
              displayData.name === "co2Emission" ||
              displayData.name === "emissionLabel" ||
              displayData.name === "electricConsumption"
            ) {
              emissionObjectTemporary[displayData.name] =
                label + " " + emissionValue + (unit ? " " + unit : "");
            }
          }
          // Other models
          else {
            if (
              displayData.name === "nedcCombinedEmissions" ||
              displayData.name === "nedcEmissionClass" ||
              displayData.name === "nedcFuelConsumptionCombined" ||
              displayData.name === "consumptionCombined" ||
              displayData.name === "co2Emission" ||
              displayData.name === "emissionLabel"
            )
              emissionObjectTemporary[displayData.name] =
                label + " " + emissionValue + (unit ? " " + unit : "");
          }
        } else {
        /* KK-943 changes 1st half ends */
          var defaultValue = "n/a";
          //if(eut.COUNTRY=='de' && displayData.name === "co2Emission"){ defaultValue = '0'; }
          if (
            modelData[engineVar] === "electric" &&
            eut.COUNTRY == "de" &&
            (displayData.name === "co2Emission" ||
              displayData.name === "wltpCombinedCO2" ||
              displayData.name === "nedcCombinedEmissions")
          )
            defaultValue = "0";

          var label = displayData.i18nKey
              ? eut.i18n.get(displayData.i18nKey, [], "fallback")
              : "",
            unit = displayData.i18nUnit
              ? eut.i18n.get(displayData.i18nUnit, [], "fallback")
              : "",
            emissionValue = "";
          if (emissionData.type === "r") {
            emissionValue =
              maxToMin === "true"
                ? (emissionData.max || defaultValue) +
                  " - " +
                  (emissionData.min || defaultValue)
                : (emissionData.min || defaultValue) +
                  " - " +
                  (emissionData.max || defaultValue);
          } else {
            emissionValue = emissionData.value || defaultValue;
          }
          if (
            modelData[engineVar] === "both" ||
            displayData.engineType === "all" ||
            displayData.engineType === modelData[engineVar] ||
            (modelData[engineVar] === "phev" &&
              displayData.engineType === "electric")
          ) {
            if (
              modelData[engineVar] === "phev" &&
              (displayData.name === "wltpCombinedFuelConsumption" ||
                displayData.name === "consumptionCombined" ||
                displayData.name === "co2Emission" ||
                displayData.name === "wltpCombinedCO2")
            )
              continue;
            if (
              modelData[engineVar] === "electric" &&
              (displayData.name === "co2Emission" ||
                displayData.name === "wltpCombinedCO2")
            )
              emissionValue = "0";
            nedcWltpTextArr +=
              label + " " + emissionValue + (unit ? " " + unit : "") + "; ";
          }
        }
      }

      /* KK-943 2nd half starts */
      if (eut.COUNTRY == "de") {
        // EV changes
        if (modelData[engineVar] === "Strom") {
          nedcWltpTextArr =
            (emissionObjectTemporary["nedcElectricConsumption"]
              ? emissionObjectTemporary["nedcElectricConsumption"] + "; "
              : emissionObjectTemporary["electricConsumption"]
              ? emissionObjectTemporary["electricConsumption"] + "; "
              : "") +
            (emissionObjectTemporary["nedcCombinedEmissions"]
              ? emissionObjectTemporary["nedcCombinedEmissions"] + ". "
              : emissionObjectTemporary["co2Emission"]
              ? emissionObjectTemporary["co2Emission"] + ". "
              : "") +
            (emissionObjectTemporary["nedcEmissionClass"]
              ? emissionObjectTemporary["nedcEmissionClass"] + ". "
              : emissionObjectTemporary["emissionLabel"]
              ? emissionObjectTemporary["emissionLabel"] + ". "
              : "") +
            (emissionObjectTemporary["nedcElectricRangeCombined"]
              ? emissionObjectTemporary["nedcElectricRangeCombined"]
              : emissionObjectTemporary["wltpElectricRangeCombined"]
              ? emissionObjectTemporary["wltpElectricRangeCombined"]
              : "");
        }
        // PHEV changes
        else if (modelData.specialFeatureCode === "EV2") {
          nedcWltpTextArr =
            (emissionObjectTemporary["nedcFuelConsumptionCombined"]
              ? emissionObjectTemporary["nedcFuelConsumptionCombined"] + " / "
              : emissionObjectTemporary["consumptionCombined"]
              ? emissionObjectTemporary["consumptionCombined"] + " / "
              : "") +
            (emissionObjectTemporary["nedcElectricConsumption"]
              ? emissionObjectTemporary["nedcElectricConsumption"] + "; "
              : emissionObjectTemporary["electricConsumption"]
              ? emissionObjectTemporary["electricConsumption"] + "; "
              : "") +
            (emissionObjectTemporary["nedcCombinedEmissions"]
              ? emissionObjectTemporary["nedcCombinedEmissions"] + ". "
              : emissionObjectTemporary["co2Emission"]
              ? emissionObjectTemporary["co2Emission"] + ". "
              : "") +
            (emissionObjectTemporary["nedcEmissionClass"]
              ? emissionObjectTemporary["nedcEmissionClass"] + "."
              : emissionObjectTemporary["emissionLabel"]
              ? emissionObjectTemporary["emissionLabel"] + "."
              : "");
        }
        // Other models
        else {
          nedcWltpTextArr =
            (emissionObjectTemporary["nedcFuelConsumptionCombined"]
              ? emissionObjectTemporary["nedcFuelConsumptionCombined"] + "; "
              : emissionObjectTemporary["consumptionCombined"]
              ? emissionObjectTemporary["consumptionCombined"] + "; "
              : "") +
            (emissionObjectTemporary["nedcCombinedEmissions"]
              ? emissionObjectTemporary["nedcCombinedEmissions"] + ". "
              : emissionObjectTemporary["co2Emission"]
              ? emissionObjectTemporary["co2Emission"] + ". "
              : "") +
            (emissionObjectTemporary["nedcEmissionClass"]
              ? emissionObjectTemporary["nedcEmissionClass"] + ". "
              : emissionObjectTemporary["emissionLabel"]
              ? emissionObjectTemporary["emissionLabel"] + ". "
              : "");
        }
      }
      /* KK-943 2nd half ends */

      if (imgList[0] && imgList[0].src && imgList[0].alt === "") {
        var alt1 = imgList[0].src
          .substring(imgList[0].src.lastIndexOf("/") + 1, imgList[0].src.length)
          .split(".")[0];
        imgList[0].alt = alt1;
      }
      if (imgList[1] && imgList[1].src && imgList[1].alt === "") {
        var alt2 = imgList[1].src
          .substring(imgList[1].src.lastIndexOf("/") + 1, imgList[1].src.length)
          .split(".")[0];
        imgList[1].alt = alt2;
      }

      var text = nedcWltpTextArr.trim();

      if (eut.COUNTRY != "de") text = text.replace(/;\s*$/, ".");
      return { text: text, imgList: imgList };
    },
    getCarConfiguratorText: function (
      modelData,
      displayOrder,
      trim,
      maxToMin,
      showEmissionLabel,
      model = null
    ) {
      var wltpText = "";
      if (
        (eut.COUNTRY === "cz" ||
          eut.COUNTRY === "sk" ||
          eut.COUNTRY === "pl") &&
        model
      ) {
        // KK-2706
        var energyLabelText = modelData.energyLabel
          ? `${eut.i18n.get("eu-configurator-energyLabel")} ${
              modelData.energyLabel
            }`
          : "";
        var evEfficiencyCombined1 = modelData.evEfficiencyCombined
          ? modelData.evEfficiencyCombined
          : 0;
        var evEfficiencyCombined = Number(evEfficiencyCombined1).toFixed(1);
        var fuelConsumption = modelData.wltpCombinedFuelConsumption
          ? modelData.wltpCombinedFuelConsumption
          : 0;
        var combinedCO2 = modelData.wltpCombinedCO2
          ? modelData.wltpCombinedCO2
          : 0;

        if (model.enginesType === "Elektro") {
          wltpText = `${eut.i18n.get(
            "eu-configurator-nedcCombinedCO2"
          )} 0 g/km. ${eut.i18n.get(
            "eu-configurator-electricity-consumption"
          )} ${evEfficiencyCombined} Wh/km`;
        } else if (model.specialFeatureCode === "EV2") {
          wltpText = `${eut.i18n.get(
            "eu-configurator-nedcCombinedCO2"
          )}  0 g/km.
          ${eut.i18n.get(
            "eu-configurator-electricity-consumption"
          )} ${evEfficiencyCombined} Wh/km
          ${eut.i18n.get(
            "eu-configurator-nedcCombinedFuelConsumption"
          )} ${fuelConsumption} l/100 km;
          `;
        } else if (model.enginesType !== "Elektro") {
          wltpText = `${eut.i18n.get(
            "eu-configurator-nedcCombinedFuelConsumption"
          )} ${fuelConsumption} l/100 km; ${eut.i18n.get(
            "eu-configurator-nedcCombinedCO2"
          )} ${combinedCO2} g/km. ${energyLabelText}`;
        }
      } // KK-2356 end
      else {
        // check availability
        for (var i = 0; i < displayOrder.length; i++) {
          var displayData = displayOrder[i],
            emissionData = modelData[displayData.name];
          if (
            displayData.showHide != "true" ||
            displayData.name == "emissionImg" ||
            (displayData.name == "emissionLabel" && !showEmissionLabel)
          ) {
            continue;
          }
          //emissionData.type = displayData.type ? displayData.type : emissionData.type;

          if (displayData.name === "emissionLabel" && showEmissionLabel) {
            emissionData = trim[displayData.name];
            var label = displayData.i18nKey
                ? eut.i18n.get(displayData.i18nKey, [], "fallback")
                : "",
              unit = displayData.i18nUnit
                ? eut.i18n.get(displayData.i18nUnit, [], "fallback")
                : "",
              emissionValue = "";
            trim.emissionLabel.type = displayData.type
              ? displayData.type
              : trim.emissionLabel.type;
            if (trim.emissionLabel.type === "r") {
              emissionValue =
                maxToMin === "true"
                  ? (emissionData.max || "n/a") +
                    " - " +
                    (emissionData.min || "n/a")
                  : (emissionData.min || "n/a") +
                    " - " +
                    (emissionData.max || "n/a");
            } else {
              emissionValue = emissionData.value || "n/a";
            }
          } else {
            var label = displayData.i18nKey
                ? eut.i18n.get(displayData.i18nKey, [], "fallback")
                : "",
              unit = displayData.i18nUnit
                ? eut.i18n.get(displayData.i18nUnit, [], "fallback")
                : "",
              emissionValue = "";

            emissionValue = emissionData || "n/a";
          }

          if (
            trim.enginesType === "both" ||
            displayData.engineType === "all" ||
            displayData.engineType === trim.enginesType ||
            (trim.enginesType === "phev" &&
              displayData.engineType === "electric")
          ) {
            if (
              trim.enginesType === "phev" &&
              (displayData.name === "wltpCombinedFuelConsumption" ||
                displayData.name === "consumptionCombined" ||
                displayData.name === "co2Emission" ||
                displayData.name === "wltpCombinedCO2")
            )
              continue;
            if (
              trim.enginesType === "electric" &&
              (displayData.name === "co2Emission" ||
                displayData.name === "wltpCombinedCO2")
            )
              emissionValue = "0";
            wltpText +=
              label + " " + emissionValue + (unit ? " " + unit : "") + "; ";
          }
        }
      }

      var text = wltpText.trim();
      // KK-2356
      if (
        !(
          (eut.COUNTRY === "cz" ||
            eut.COUNTRY === "sk" ||
            eut.COUNTRY === "pl") &&
          model
        )
      )
        text = text.replace(/;\s*$/, ".");
      return { text: text };
    },
    getWltpEmissionTextFromKPMSAPI: function (emissionData, wltpJson) {
      var wltpText = eut.i18n.get(
        "eu-wltp-fuel-consumption-fail-message",
        [],
        "fallback"
      );
      if (emissionData) {
        if (eut.COUNTRY === "cz") {
          var isCo2Emission = null;
          if (wltpJson && wltpJson.length) {
            isCo2Emission = wltpJson.find(
              (item) => item.name === "co2Emission"
            );
          }
          if (isCo2Emission && isCo2Emission.showHide === "true") {
            if (emissionData.modelType === "PHEV") {
              wltpText = `${eut.i18n.get(
                "eu-wltp-fuel-consumption-co2",
                [],
                "fallback"
              )} ${emissionData.weightedCombinedCO2 || 0} g/km.`;
            } else if (emissionData.modelType === "EV") {
              wltpText = `${eut.i18n.get(
                "eu-wltp-fuel-consumption-co2",
                [],
                "fallback"
              )} 0 g/km.`;
            } else {
              wltpText = `${eut.i18n.get(
                "eu-wltp-fuel-consumption-co2",
                [],
                "fallback"
              )} ${emissionData.combinedCO2 || 0} g/km.`;
            }
          } else {
            wltpText = "";
          }
        }
        if (eut.COUNTRY === "se") {
          var consumptionCombined = null;
          var co2Emission = null;
          var electricConsumption = null;
          if (wltpJson && wltpJson.length) {
            consumptionCombined = wltpJson.find(
              (item) =>
                item.name === "consumptionCombined" && item.showHide === "true"
            );
            co2Emission = wltpJson.find(
              (item) => item.name === "co2Emission" && item.showHide === "true"
            );
            electricConsumption = wltpJson.find(
              (item) =>
                item.name === "electricConsumption" && item.showHide === "true"
            );
          }

          wltpText = `${
            consumptionCombined && emissionData.combinedFuelConsumption
              ? eut.i18n.get(
                  "eu-wltp-fuel-consumption-combined",
                  [],
                  "fallback"
                ) +
                " " +
                emissionData.combinedFuelConsumption +
                " l/100km; "
              : ""
          }${
            co2Emission && emissionData.combinedCO2
              ? eut.i18n.get("eu-wltp-fuel-consumption-co2", [], "fallback") +
                " " +
                emissionData.combinedCO2 +
                " g/km; "
              : ""
          }${
            electricConsumption && emissionData.electricEnergyConsumption
              ? eut.i18n.get(
                  "eu-wltp-fuel-consumption-electric",
                  [],
                  "fallback"
                ) +
                " " +
                emissionData.electricEnergyConsumption +
                " kWh/100km;"
              : ""
          }`;
          wltpText = wltpText.replace(/;\s*$/, ".");
        }
      }
      return { text: wltpText };
    },
  };

  function decodeData(data) {
    if (typeof data === "object") {
      for (var key in data) {
        data[key] = decodeData(data[key]);
      }
      return data;
    } else if (typeof data === "function") {
      return data;
    } else {
      try {
        return decodeURIComponent(data);
      } catch (e) {
        return decodeURIComponent(
          data.toString().replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25")
        );
      }
    }
  }

  /** ========== iOS Input Focus Out ========== */
  (function () {
    if ($B.ua.MOBILE_IOS) {
      $(document).on("touchstart", function (e) {
        if (!$(e.target).is("input, textarea, button, a")) {
          $(":focus").blur();
        }
      });
    }
  })();

  var dtmDataLayer = window.dtmDataLayer || {};
  var pageName = $('meta[name="kia_metrics_pagename"]').attr("content"),
    pageContentArr = pageName.split("|");
  if (pageName === "404") {
    dtmDataLayer.error = { error_code: "404" };
  }
  dtmDataLayer.currentPageName = pageName;
  dtmDataLayer.page = {
    page_name: pageName,
    channel: pageContentArr[0],
    category1: pageContentArr[0],
    category2: pageContentArr[1],
    category3: pageContentArr[2],
    category4: pageContentArr[3],
  };

  if (window.eut.dealerInfo) {
    dtmDataLayer.site = {
      country_code: window.eut.COUNTRY,
      language: window.eut.LANGUAGE,
      siteType: "dealer",
    };
  } else {
    dtmDataLayer.site = {
      country_code: window.eut.COUNTRY,
      language: window.eut.LANGUAGE,
      siteType: "corporate",
    };
  }

  dtmDataLayer.currentPagePath = location.href;

  eut.common = eut.common || Common;

  dtmDataLayer.device = {
    device_type: eut.common.getDeviceType(),
  };

  dtmDataLayer.vehicle_name = dtmDataLayer.vehicle_name || undefined;
  dtmDataLayer.term_selected = undefined;
  dtmDataLayer.quantity = undefined;
  dtmDataLayer.insurance_cover_level = undefined;
  dtmDataLayer.user_id = "";
})(jQuery, ixBand, eut);

/**
 * CalendarCore
 * @composition : DateChooser
 */
;(function ( $, eut, common ) {
    /**
     * dispatch events : select-date {date: 'YYYY-MM-DD'}
     * @param   {Object}    options
     *    - {jQuery}      appendTarget      container
     *    - {Date}        targetDate
     *    - {Date}        selectedDate
     *    - {Date}        minDate
     *    - {Date}        maxDate
     *    - {Boolean}     disableSunday     default:true
     *    - {Boolean}     disableSaturday
     *    - {Array}       daysString        default:i18n ['eu-calendar-sunday', 'eu-calendar-monday', 'eu-calendar-tuesday'...]
     * @constructor
     */
    var CalendarCore = eut.Class.extend({

        initialize: function ( options ) {
            this._setOptions( options );
            this._draw();
            this._addEvents();
        },

        /** =============== Public Methods =============== */

        clear: function () {
            this._removeEvents();
            this._remove();
        },

        getHtml: function () {
            return this._html;
        },

        /** =============== Private Methods =============== */
        _setOptions: function ( options ) {
            this._options = options || {};
            this._options.disableSunday = ( typeof this._options.disableSunday === 'boolean' )? this._options.disableSunday : true;

            if ( !this._options.daysString ) {
                this._options.daysString = [
                    eut.i18n.get( 'eu-calendar-sunday' ),
                    eut.i18n.get( 'eu-calendar-monday' ),
                    eut.i18n.get( 'eu-calendar-tuesday' ),
                    eut.i18n.get( 'eu-calendar-wednesday' ),
                    eut.i18n.get( 'eu-calendar-thursday' ),
                    eut.i18n.get( 'eu-calendar-friday' ),
                    eut.i18n.get( 'eu-calendar-saturday' )
                ];
            }
        },

        _draw: function () {
            this._html = common.template( 'common.calendar-core', this._getTemplateData() );

            if ( this._options.appendTarget && this._options.appendTarget.length ) {
                this._$element = $( this._html );
                this._options.appendTarget.append( this._$element );
            }
        },

        _getTemplateData: function () {
            var result = {
                days: this._options.daysString
            };

            var todayYear = moment().format( 'YYYY' ),
                todayMonth = moment().format( 'MM' ),
                todayDate = moment().format( 'DD' ),
                fullDate = moment( this._options.targetDate ),
                selectDate = this._options.selectedDate? moment( this._options.selectedDate ) : moment( '3000-12-12' ),
                targetDate = fullDate.format( 'DD' ),
                targetYear = fullDate.format( 'YYYY' ),
                startDay = moment( targetYear + '-' + targetMonth ).day(),
                endDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                days = this._options.daysString,
                weeks = [], week = [];

            if ( moment([targetYear]).isLeapYear() ) endDates[1] = 29;

            var i, dayIdx = 0,
                endDate = endDates[targetMonth - 1] + startDay,
                dayLength = 7 * 6;

            for ( i = 0; i < dayLength; ++i ) {
                dayIdx++;

                if ( i%7 === 0 ) {
                    week = [];
                    weeks.push( week );
                    dayIdx = 0;
                }

                if ( i >= startDay && i < endDate ) {
                    var printDate = i - startDay + 1;
                    fullDate.date( printDate );

                    var time = moment( fullDate ).format( 'x' ),
                        dateString = fullDate.format( 'YYYY-MM-DD' ),
                        currentYear = fullDate.format( 'YYYY' ),
                        currentMonth = fullDate.format( 'MM' ),
                        currentDate = fullDate.format( 'DD' ),
                        data = {
                            date: printDate,
                            select: fullDate.isSame( selectDate ),
                            today: ( currentYear == todayYear && currentMonth == todayMonth && currentDate == todayDate ),
                            disabled: this._isDisableDate( time, dayIdx ),
                            time: dateString,
                            index: printDate - 1,
                            day: days[dayIdx],
                            sunday: ( dayIdx === 0 )
                        };

                    week.push( data );
                } else {
                    week.push( {} );
                }
            }

            result.weeks = weeks;
            result.year = targetYear;
            result.month = targetMonth;

            return result;
        },

        _isDisableDate: function ( time, day ) {
            if ( this._options.disableSunday && 0 === day ) {
                return true;
            } else if ( this._options.disableSaturday && 6 === day ) {
                return true;
            } else {
                if ( this._options.minDate ) {
                    var min = moment( this._options.minDate ).format( 'x' );
                    return ( time < min );
                }

                if ( this._options.maxDate ) {
                    var max = moment( this._options.maxDate ).format( 'x' );
                    return ( time > max );
                }

                return false;
            }
        },

        _remove: function () {
            if ( this._$element ) {
                this._$element.remove();
                this._$element = null;
            }
        },

        _addEvents: function () {
            if ( this._$element ) {
                this._$element.find( '.date_button' ).on( 'click', _.bind(function (e) {
                    this.dispatch( 'select-date', {date: $(e.currentTarget).data('date')} );
                }, this));
            }
        },

        _removeEvents: function () {
            if ( this._$element ) {
                this._$element.find( '.date_button' ).off( 'click' );
            }
        }

    });

    eut.CalendarCore = eut.CalendarCore || CalendarCore;
})( jQuery, eut, eut.common );
/**
 * Date Chooser
 */
;(function ( $, eut, common, responsive ) {
    /**
     * dispatch events : 'select-date', 'open', 'close' {date: 'YYYY-MM-DD'}
     * @param   {Object}    options
     *    - {jQuery}      appendTarget      container
     *    - {Date}        minDate           default:today
     *    - {Date}        maxDate
     *    - {Boolean}     disableSunday     default:true
     *    - {Boolean}     disableSaturday
     *    - {String}      defaultDate       default:today, ex)2017-01-07
     *    - {jQueryObject}  returnFocusTarget   default:open click element
     * @constructor
     */
    var DateChooser = eut.Class.extend({
        _selectedDate: '',
        _isOpen: false,

        initialize: function ( options ) {
            this._setOptions( options );
        },

        /** =============== Public Methods =============== */

        open: function ( options ) {
            if ( this.isOpen() ) return;
            this._setOptions( options );
            this._$activeElement = this._options.returnFocusTarget || $( document.activeElement );

            this._draw();
            this._addEvents();
            this._isOpen = true;
            this.dispatch( 'open' );
        },

        close: function () {
            this._removeEvents();
            this._remove();
            this._$activeElement.focus();
            this._isOpen = false;
            this.dispatch( 'close' );
        },

        getDate: function ( format ) {
            return moment( this._selectedDate ).format( format || 'YYYY-MM-DD' );
        },

        isOpen: function () {
            return this._isOpen;
        },

        /** =============== Private Methods =============== */
        _setOptions: function ( options ) {
            if ( this._options ) {
                if ( options ) this._options = $.extend( this._options, options );
            } else {
                this._options = options ||  {};
            }

            this._options.minDate = this._options.minDate || moment().format();
            this._options.disableSunday = ( typeof this._options.disableSunday === 'boolean' )? this._options.disableSunday : true;
            this._options.defaultDate = this._options.defaultDate? moment( this._options.defaultDate ) : moment();

            this._currentDate = this._options.defaultDate? moment( this._options.defaultDate ) : moment();
            this._selectedDate = this._currentDate.format( 'YYYY-MM-DD' );
        },

        _draw: function () {
            var html = common.template( 'common.date-chooser', {} );

            if ( this._options.appendTarget && this._options.appendTarget.length ) {
                this._$element = $( html );
                this._options.appendTarget.append( this._$element );
                this._$slide = this._$element.find( '.slide' );
            }
        },

        _remove: function () {
            if ( !this._$element ) return;

            this._removeCalendars();
            this._$element.remove();
            this._$element = null;
        },

        _addEvents: function () {
            if ( !this._$element ) return;

            this._$element.find( 'a.close' ).on( 'click', _.bind(function (e) {
                this.close();
            }, this)).focus();

            this._setCalendar( this._currentDate );
            this._$slide.ixSlideLite().on( 'ixSlideLite:change', _.bind(function (e) {
                var date = '',
                    currentMonth = this._currentDate.month();

                //next
                if ( e.currentIndex === 1 ) {
                    date = this._currentDate.month( currentMonth + 1 );
                } else {
                    date = this._currentDate.month( currentMonth - 1 );
                }

                this._setCalendar( date );
                this._$slide.ixSlideLite( 'clear' ).ixSlideLite();
            }, this));

            this._responseHnadler = _.bind( function (e) {
                //TODO: responsive
                //e.responsiveType
                //responsive.getResponsiveWidthType();
            }, this);

            responsive.addListener( 'response-width', this._responseHnadler );
        },

        _removeEvents: function () {
            if ( !this._$element ) return;

            responsive.removeListener( 'response-width', this._responseHnadler );
            this._$element.find( 'a.close' ).off( 'click' );
            this._$slide.ixSlideLite( 'clear' ).off( 'ixSlideLite:change' );
        },

        _removeCalendars: function () {
            if ( !_.isArray(this._calendars) ) return;

            _.each( this._calendars, function ( calendar ) {
                calendar.clear();
            });
        },
        
        _setCalendar: function ( baseDate ) {
            this._removeCalendars();
            this._calendars = [];

            this._$element.find( '.ix-list-item' ).each( _.bind(function ( idx, el ) {
                var date = moment( baseDate ).date( 1 ),
                    month = date.month();

                if ( idx === 1 ) {
                    date = date.month( month + 1 );
                } else if ( idx === 2 ) {
                    date = date.month( month - 1 );
                }

                var options = common.extend( this._options, {
                        appendTarget: $( el ),
                        targetDate: date,
                        selectedDate: this._options.defaultDate
                    }),
                    calendar = new eut.CalendarCore( options );

                calendar.addListener( 'select-date', _.bind(function (e) {
                    this._selectedDate = e.date;
                    this.close();
                    this.dispatch( e.type, e );
                }, this));

                this._calendars.push( calendar );
            }, this));

            this._$element.find( '.date' ).text( baseDate.format('YYYY-MM') );
            this._currentDate = baseDate;
        }
    });

    eut.DateChooser = eut.DateChooser || DateChooser;
})( jQuery, eut, eut.common, eut.responsive );
/**
 * Html5 Video
 */
;
(function($, eut, common) {

  /**
   * @param   {Object}    options
   *      {Boolean}   ratioSize
   * @constructor
   */
  var Html5Video = eut.Class.extend({
    _isPlaying: false,
    _currentPlayingId: false,
    _currenVideoState: false,
    initialize: function($target, options) {
      this._options = options || {};
      this._$target = $target;
      this._$video = $target.find('video');
      this._$touchArea = $target.find('.eut_video_touch_area');
      this._$playBtn = this._$touchArea.find('.play');
      this._timeout = null;

      //this._$video.addClass('typeInterlake').attr('name', options.title);
      if (!$B.ua.FIREFOX) {
        this._$playBtn.show();
      }

      this.addEvents(options);
      this.btnRePosition();
    },

    addEvents: function(options) {
      this._videoHandler = _.bind(function(e) {
        switch (e.type) {
          case 'play':
            eut.currentVideoObj = this;
            // enabling/disabling sound for video
            setTimeout(_.bind(function() {
              if (options.playType == 'mouse-hover'  || options.playType == 'user-initiated' && options.disableSound) {
                this._$video.prop('muted', 'muted')
              } else{
                this._$video.prop('muted', '')
              }
            }, this), 10)

            //this.autoPlay(options);


            if (this._currentPlayingId != options.randomId) {
              options.eventType = 'video-initiate';
            } else {
              options.eventType = 'video-play';
            }
            this._currentPlayingId = options.randomId;
            this.videoTracking(options);
            break;

          case 'playing':

            if (this._$video.parents('.video-maincontainer').length){
              this._$video.parents('.video-maincontainer').removeClass('in-line');
              this._$video.parents('.ih_slide').addClass('ih-slide-video-container');
            }


            this._isPlaying = true;

            if (this._timeout) clearTimeout(this._timeout);
            this._timeout = setTimeout(_.bind(function() {
              this._$playBtn.hide();
            }, this), 100);
            break;
          case 'ended':
            options.eventType = 'video-Complete';
            this.videoTracking(options);
            if (options.loop) {
              this.play();
            }
            break;
          case 'pause':

            if (this._$video.parents('.video-maincontainer').length){
              this._$video.parents('.video-maincontainer').addClass('in-line')
              this._$video.parents('.ih_slide').removeClass('ih-slide-video-container')
            }


            this._isPlaying = false;

            if (this._timeout) clearTimeout(this._timeout);
            this._timeout = setTimeout(_.bind(function() {
              this._$playBtn.show();
            }, this), 100);

            options.eventType = 'video-pause';
            this.videoTracking(options)

            break;
          case 'error':
            //streaming chrome error
            if (typeof e.originalEvent.networkState !== 'number') {
              this._$video.get(0).load();
            }
            break;
        }
      }, this);


      // mouse enter handler function callback
      this._videoMouseHandler = _.bind(function(e) {
        if (e.type === 'mouseenter') {
          this._$video.attr('controls', 'controls');
          if (options.isHoverPlay) {
            options.playType = 'mouse-hover';
            this.autoPlay(options)
          }
        } else {
          this._$video.removeAttr('controls');
        }
      }, this);





      // binding events on video and its touch area
      this._$video.on('play playing pause ended error', this._videoHandler);
      this._$video.on('mouseenter mouseleave', this._videoMouseHandler);
      this._$touchArea.on('mouseenter mouseleave', this._videoMouseHandler);






      // click event on play button
      this._$playBtn.on('click', _.bind(function(e) {
        if (this.timeoutId) clearTimeout(this.timeoutId);
        options.playType = 'user-initiated';
        this.play();

      }, this));




      // click event on toucharea
      this._$touchArea.on('click', _.bind(function(e) {
        if (this.timeoutId) clearTimeout(this.timeoutId);
        options.playType = 'user-initiated';
        if (this.isPlaying()) {
          this.stop();
        } else {
          this.play();
        }
      }, this));

      // continuously tracking for analytics for percentage of video completion
      this._$video.on('timeupdate', _.bind(function(e) {
        var videoDomObj = this._$video.get(0),
          percentage = parseInt((videoDomObj.currentTime / videoDomObj.duration) * 100);
        if (percentage >= 25 && percentage < 50) {
          options.eventType = 'video-25%Complete';
        } else if (percentage >= 50 && percentage < 75) {
          options.eventType = 'video-50%Complete';
        } else if (percentage >= 75) {
          options.eventType = 'video-75%Complete';
        }

        this.videoTracking(options)


      }, this));




      this.btnRePosition = _.bind(function(e) {
        if (common.isFullScreen()) return;
        if (this._options.ratioSize) this._$video.ixRatioSize();

        var videoH = this._$video.height(),
          posY = (videoH / 2);

        this._$playBtn.css('top', posY + 'px');
      }, this);

      $(window).on('resize load', this.btnRePosition);
    },

    // add hover play and pause after sometime if auto play length specified
    autoPlay: function(options) {
      if (this._isPlaying) {
        return;
      }
      var _thisObj = this;
      //if (this._currentPlayingId != options.randomId) {
        _thisObj.play();

      if (options.autoPlayLen) {
        _thisObj.timeoutId = setTimeout(function() {
          //options.playType =  'mouse-hover';
          _thisObj._$video.get(0).pause();
          _thisObj._$video.get(0).currentTime = 0;

          }, (parseInt(options.autoPlayLen) + 1) * 1000)

        }

      //} else {
      //  this.play();
        //this._$video.prop('muted', '')
      //}

    },

    // pasing info for making dtm layer object
    videoTracking: function(options) {
      this.createDTMObject(options);
    },

    // creating dtm layer object for analytics
    createDTMObject: function(videoObj) {
      if (this._currenVideoState == videoObj.eventType) {
        return;
      }
      var videoDomObj = this._$video.get(0);
      if (!window.dtmDataLayer) {
        window.dtmDataLayer = {};
      }
      window.dtmDataLayer.video = {
        "pageName": $('meta[name="kia_metrics_pagename"]').attr('content'),
        "videoName": videoObj.title,
        "duration": videoDomObj.duration,
        "viewLength": videoDomObj.currentTime,
        "playerName": videoObj.vendor,
        "videoStartType": videoObj.playType,
        "event": videoObj.eventType
      }

      eut.analytics.track("video-tracking");
      this._currenVideoState = videoObj.eventType;
    },

    /** =============== Public Methods =============== */

    play: function() {
      if (!this._$video.length) return;
      this._$video.get(0).play();
    },

    stop: function() {
      if (!this._$video.length) return;
      this._$video.get(0).pause();
    },

    isPlaying: function() {
      return this._isPlaying;
    },

    clear: function() {
      this._$video.off('play playing pause ended error', this._videoHandler);
      this._$video.off('mouseenter mouseleave', this._videoMouseHandler);
      this._$touchArea.off('click mouseenter mouseleave');
      this._$playBtn.off('click');
      $(window).on('resize load', this.btnRePosition);
    }
  });

  eut.Html5Video = eut.Html5Video || Html5Video;
})(jQuery, eut, eut.common);

/**
 * Video  (youtube, flowplayer, interlake)
 */
; (function ($, eut, common) {
  var VideoAPI = (function () {
    var API = {
      _randomId: 0,

      getRandomId: function () {
        return 'eut_video_' + this._randomId++;
      },

      apis: {
        youtube: {
          play: 'playVideo',
          stop: 'stopVideo'
        },
        flowplayer: {
          play: 'play',
          stop: 'stop'
        },
        interlake: {
          play: 'play',
          stop: 'stop'
        }
      }
    };

    return API;
  })();


  /**
   * @param   {Object}    options
   *      {String}    type    Video Type (youtube, flowplayer)
   *      {Boolean}   autoplay
   * @constructor
   */
  var videos,inlineVideoNumber;
  videos = [];
  inlineVideoNumber = 0;
  var Video = eut.Class.extend({
    _isPlay: false,
    _currentPlaying: false,
    _currenVideoState: false,
    initialize: function (options) {
        
        if (window.eut.COUNTRY == 'gr'){
          options.autoplay = false;   //KWCMSLIVE-17953
        }
        else {
          options.autoplayDuration = 10;
        }
        options.disableSound = false;
        options.loop = false;

      if(options.play=='true'){ options.autoplay = true; }
      if(options.sound=='true'){ options.disableSound = true; }
      if(options.autoloop=='true'){ options.loop = true; }
      if(options.duration){ options.autoplayDuration = parseInt(options.duration); }
      
      options.playType='user-initiated';

      if(options.autoplay==true){ options.playType='autoplay-initiated'; }
      if(options.videoLayout == 'in-line' && options.vendor!='youtube'){
          if(options.autoplay){
                options.inlineAutoplay = '2';
          }else{
              options.inlineAutoplay = '1';
          
          }
      }

      if (this['_' + options.vendor]) {

        this._vendor = options.vendor;
        if(options.videoLayout=='in-line')
          {
             if(options.vendor=='interlake'){ options.vendor='flowplayer'; this['_flowplayer'](options); }
              else{ this['_' + options.vendor](options); } 
          }
          else
          {
              if(options.vendor=='youtube'){ options.path[0]['poster_img']=options.path[0]['poster'];options.path[0]['poster']='none'; }
              var that = this;
              if (options.loadmobilehtml5player && options.loadmobilehtml5player == "true" && (Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1 )) {
                that["_htmlplayer"](options);
              }else {
                setTimeout(function () {
                  if (options.vendor == 'interlake') { options.vendor = 'flowplayer'; that['_flowplayer'](options); }
                  else { that['_' + options.vendor](options); }
                }, 1000);
              }
          }

      }

      if (!options.autoplay) options.autoplay = false;
    },

    /** =============== Public Methods =============== */

    play: function () {
      if (this._video) {
        var method = VideoAPI.apis[this._vendor].play;
        if (this._video[method]) {
          this._video[method]();
          this._isPlay = true;
        }
      }
    },

    stop: function () {
      if (this._video) {
        var method = VideoAPI.apis[this._vendor].stop;
        if (this._video[method]) {
          this._video[method]();
          this._isPlay = false;
        }
      }
    },

    remove: function () {

        if (this._$videoEl) {
      this._removeEvents();

      //flowplayer
      if (this._video.shutdown) {
        this._video.stop();
        this._video.unload();
        this._video.shutdown();
      }


        //IE8 afterimage
        var $videoNode = this._$videoEl.find('video');

        if ($videoNode.length) {
          $videoNode.attr('src', '');
          $videoNode.find('source').attr('src', '');
          $videoNode.get(0).load();
        }

        this._$videoEl.remove();


      if (this._video.clear) this._video.clear();
          }
    },

    /** =============== Private Methods =============== */

    _youtube: function (options) {

      if (!window.YT || !options.path.length) return;
      var _thisLocal = this;
      var stopPlayTimer,ytTimer;
	  
	  if(options.path[0].poster && options.autoplay==false && options.preview=="true"){
      var posterHtml;
        if(options.videoLayout=='pop-up'){
         	  posterHtml = '<div style="height:'+$('#' + options.randomId).height()+'px;" onclick="($(\'#'+options.randomId+'\').data(\'ytPlayer\')!= undefined ? $(\'#'+options.randomId+'\').data(\'ytPlayer\').playVideo(): null );this.nextElementSibling.style.display=\'block\'; this.style.display=\'none\'; " class="youtube-poster"><span class="btn_play"><img src="/content/dam/kwcms/kme/global/en/assets/static/common/spr-btn-play.png" alt="play"></span><img style="width: 100%;height: 100%" src="'+options.path[0].poster_img+'" style="cursor:pointer" /></div>';
			      $(posterHtml).insertBefore('#'+options.randomId);
          }else{
			      posterHtml = '<div onclick="($(\'#'+options.randomId+'\').data(\'ytPlayer\')!= undefined ? $(\'#'+options.randomId+'\').data(\'ytPlayer\').playVideo(): null);$(\'#'+options.randomId+'\').show();" class="youtube-inline-poster"><span class="btn_play"><img src="/content/dam/kwcms/kme/global/en/assets/static/common/spr-btn-play.png" alt="play"></span></div>';
			      $('#'+options.randomId).parent().prepend(posterHtml);
          }
          $('#'+options.randomId).hide();
      }

     this._video = new YT.Player(options.randomId, {
        autoplay: options.autoplay,
        width: options.width || 1280,
        height: options.height || 720,
        playerVars: {
          showinfo: 0,
          rel: 0
        },
        videoId: this._getVideoId(options.path[0].video),
        events: {
           onReady:function(event){
            $('#' + options.randomId).parent().find('.eut_video_touch_area').height('0px');
            event.target.mute();

         options.playerName = 'youtube';
         options.duration = event.target.getDuration();
         options.currentTime=0;
            if(options.subject){ options.title=options.subject; }
            $('#'+options.randomId).attr('play-type','user-initiated');

            if(options.videoLayout == 'in-line' && options.autoplay==true){
                inlineVideoNumber++;
                $('#' + options.randomId).attr('data-instanceId',videos.length);
                $('#' + options.randomId).attr('data-playertype','youtube');
            $('#' + options.randomId).data('player',event.target);
                videos.push(event.target);
                _thisLocal._initScrollAutoplay();
            }else{
				$('#' + options.randomId).data('ytPlayer',event.target);
            }

            if(options.autoplay==true){
                if(options.videoLayout == 'in-line' || options.disableSound == true) { event.target.mute();  }
                if(options.videoLayout == 'in-line'){ $('#'+options.randomId).attr('data-autoplay','true'); }else{ event.target.playVideo();  }
            }
            if(options.videoLayout == 'pop-up'){
              if(options.disableSound==true){ event.target.mute(); }else{ event.target.unMute(); }
                if($('#'+options.randomId).closest('.eut_lightbox_item').attr('aria-hidden')=='true')
                {
                    event.target.pauseVideo();
                }
                if(options.autoplay==true){
                    $('#'+options.randomId).attr('autoplay','true');
                    $('#'+options.randomId).attr('play-type','autoplay-initiated');
                }
            }else{
              $('#' + options.randomId).parent().append('<div class="player-center"></div>');
            }
          },
              onStateChange: function(event){

                  if(event.data ==  0){ 
				              options.currentTime = options.duration;
                      options.eventType = 'video-Complete';
                      _thisLocal.videoTracking(options);
                      clearInterval(ytTimer);

                      if(options.loop==true){ event.target.playVideo(); }
                  }
                  if(event.data ==  2){
				   options.currentTime=event.target.getCurrentTime();
                      options.eventType = 'video-pause';
                       _thisLocal.videoTracking(options);
                      $('#'+options.randomId).attr('play-type','user-initiated'); clearTimeout(stopPlayTimer);
                      $('#'+options.randomId).closest('.eut_cmly_section').find('.component_info').show();
                      clearInterval(ytTimer);
                  }
                  if(event.data ==  1)
                  {
				  options.currentTime=event.target.getCurrentTime();
                      options.eventType = _thisLocal._currentPlaying != options.randomId ? 'video-initiate' : 'video-play';
                      _thisLocal._currentPlaying = options.randomId;
                      _thisLocal.videoTracking(options);

                      _thisLocal._pauseOthers(options.randomId);

                      $('#'+options.randomId).closest('.eut_cmly_section').find('.component_info').hide();
                       if (event.data == YT.PlayerState.PLAYING) {  
                  ytTimer = setInterval(function(){
                               if($('#'+options.randomId).length){ 
                                   options.currentTime=event.target.getCurrentTime();

                 var percentage = parseInt((options.currentTime / options.duration) * 100);
                                       if (percentage >= 25 && percentage < 50) {
                                         options.eventType = 'video-25%Complete';
                                       } else if (percentage >= 50 && percentage < 75) {
                                         options.eventType = 'video-50%Complete';
                                       } else if (percentage >= 75) {
                                         options.eventType = 'video-75%Complete';
                                       }
                      if (_thisLocal._currenVideoState != options.eventType) {
                                    _thisLocal.videoTracking(options);
                                   }
                               }
                               else{ clearInterval(ytTimer); }
                           }, 1000);
                       }

                      if($('#'+options.randomId).attr('play-type')=='autoplay-initiated')
                      {
                          var time, rate, remainingTime;
                          var stopPlayAt = options.autoplayDuration;

                          if (event.data == YT.PlayerState.PLAYING) {

                            time = event.target.getCurrentTime();
                            if (time + .4 < stopPlayAt) {
                              rate = event.target.getPlaybackRate();
                              remainingTime = (stopPlayAt - time) / rate;
                                stopPlayTimer = setTimeout(function(){
                                    event.target.pauseVideo();
                                     $('#'+options.randomId).attr('autoplay-timeout','true');

                                }, remainingTime * 1000);
                            }
                          }
                      }
                      else
                      {
                          if(options.videoLayout != 'pop-up'){ if(options.disableSound==true){ event.target.mute(); }else{ event.target.unMute(); } }
                          if(stopPlayTimer){
                              clearTimeout(stopPlayTimer);
                          }
                      }
                  }


              }
        }
      });
      this._$videoEl = $('#' + options.randomId);
      this._addEvents(options);
    },

    //youtube only
    _getVideoId: function (path) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = path.match(regExp);
      return (match && match[2].length === 11) ? match[2] : '';
    },


    _flowplayer: function (options) {
      if (!window.flowplayer || !options.path.length) return;

      var fullPath = options.path[0].video,
        poster = options.path[0].poster,
        videoPath = this._getVideoPath(fullPath),
        scrollY = 0,
        ulTransform = '',
        ulTransition = '',
        _thisObj = this;

      flowplayer.conf = {
        key: '$821869264022039,$966736175306901'
      };

     this._video = flowplayer('#' + options.randomId, {
        autoplay: options.autoplay,
        multiplay:false,
        muted:options.disableSound,
        loop:options.loop,
        poster: poster || '',
        clip: {
          sources: [
            { type: 'video/mp4', src: fullPath },
            { type: 'video/webm', src: videoPath + '.webm' }
          ]
        },play: {
            // relative path to the play button, this can be a JPG, PNG or SWF
            // file. NOTE: the button can only be changed in the commercial
            // versions
            url: 'cccsplay.swf'
        }

      }).on('ready fullscreen fullscreen-exit resume', _.bind(function (e) {
        var $slide = this._$videoEl.closest('.ix-slide-max-apply');
          if (e.type === 'ready') {
            $('#' + options.randomId).attr('data-playertype','flow');
           if(options.inlineAutoplay){ $('#' + options.randomId+' .eut_video_touch_area .play').hide(); }
           if(options.inlineAutoplay==2){ $('#' + options.randomId).hide(); }
           this._addEvents(options);
           $('#' + options.randomId).attr('play-type','user-initiated');
           if(options.videoLayout == 'in-line'){
              inlineVideoNumber++;
              $('#' + options.randomId).append('<div class="player-center"></div>');
              if(options.inlineAutoplay=='1'){ $('#' + options.randomId).attr('data-autoplay','false'); }
              if(options.inlineAutoplay=='2'){ $('#' + options.randomId).attr('data-autoplay','true');  }
              $('#' + options.randomId).attr('data-instanceId',videos.length);
              $('#' + options.randomId).data('player',this._video);
              videos.push(this._video);
              this._initScrollAutoplay();
           }else{
               if(options.autoplay==true){ $('#' + options.randomId).attr('play-type', 'autoplay-initiated'); }
           }

        }

        if (e.type === 'resume') {
            if(window.dtmDataLayer.vehicle)
            {
          window.dtmDataLayer.vehicle.section = $('.discover_nav_opener').text();
          window.dtmDataLayer.link.internal_link = $(this._$videoEl).parent().find('.txt1').text();
          window.dtmDataLayer.page.event = 'video-play';
          eut.analytics.track('model_page');
            }
        }

        if ($B.ua.DOC_MODE_IE11_LT) {
          if (e.type === 'fullscreen') {
            scrollY = $(window).scrollTop();
            this._$videoEl.closest('.ix-list-viewport').css('z-index', 13);
          } else if (e.type === 'fullscreen-exit') {
            $(window).scrollTop(scrollY);
            this._$videoEl.closest('.ix-list-viewport').css('z-index', '');
          }
        } else if ($B.ua.IPAD) {
          var $items = this._$videoEl.closest('.ix-list-items');

          //ipad transform bug fix
          if (e.type === 'fullscreen') {
            ulTransform = $items.css('transform');
            ulTransition = $items.css('transition');
            this._$videoEl.closest('.ix-list-items').css({
              'transition': '',
              'transform': ''
            });
          } else if (e.type === 'fullscreen-exit') {
            if (ulTransform) {
              $items.css({
                'transform': ulTransform,
                'transition': ulTransition
              });
              ulTransform = '';
              ulTransition = '';
            }
          } else if (e.type === 'ready') {

            //ipad safari fullscreen bug fix
            $slide.find('.fp-fullscreen').removeClass('fp-fullscreen').addClass('ipad_fullscreen')
              .on('click', _.bind(function (e) {
                e.preventDefault();
                e.stopPropagation();

                var video = $(e.currentTarget).closest('.eut_lightbox_video').find('video').get(0);

                if (video && video.webkitSupportsFullscreen) {
                  video.webkitEnterFullscreen();
                }
              }, this));


          }
        }

        //slideMax disable
        if (e.type === 'fullscreen') {
          $slide.ixSlideMax('disable');
        } else if (e.type === 'fullscreen-exit') {
          $slide.ixSlideMax('enable');
        }
      }, this));


      _thisObj._$videoEl = $('#' + options.randomId);
      _thisObj._parent = _thisObj._$videoEl.parents('.video-maincontainer');
      _thisObj._options = options;


      // continuously tracking for analytics for percentage of video completion
      this._video.on('progress', function () {
        if(options.inlineAutoplay)
        {
            $('#' + options.randomId).show();
            options.inlineAutoplay = 0;
            
          //KWCMSLIVE-12552 commenting below line to avoid pausing video.
           /* options.autoplay = false;
            _thisObj._video.stop();*/
           
            setTimeout(function(){ $(_thisObj._$videoEl).find('.fp-play').addClass('fp-visible'); },1000);
            if(_thisObj._isElementInViewport(_thisObj._$videoEl.find('.player-center'))==false){ setTimeout(function(){ $(_thisObj._$videoEl).find('.fp-play').addClass('fp-visible'); },1000); }
        }

        if (_thisObj._$videoEl.find('video').get(0).currentTime > options.autoplayDuration && _thisObj._$videoEl.attr('play-type')=='autoplay-initiated') {
            _thisObj._$videoEl.attr('autoplay-timeout','true');
            _thisObj._video.pause();
        }

        var videoDomObj = _thisObj._$videoEl.find('video').get(0),
          percentage = parseInt((videoDomObj.currentTime / videoDomObj.duration) * 100);
        if (percentage >= 25 && percentage < 50) {
          options.eventType = 'video-25%Complete';
        } else if (percentage >= 50 && percentage < 75) {
          options.eventType = 'video-50%Complete';
        } else if (percentage >= 75) {
          options.eventType = 'video-75%Complete';
        }
        if (_thisObj._currenVideoState != options.eventType) {
          _thisObj.videoTracking(options);
        }
      });


      // adding a loop functionality to repeatidely play a particular video

      this._video.on('finish', function () {
        options.eventType = 'video-Complete';
        _thisObj.videoTracking(options);
        if (options.loop) {
          _thisObj._video.play();
        }

      })

      // common entry point when a video is played and analytics functionality
      this._video.on('resume', function () {
        $('#' + options.randomId).find('.fp-player>a').hide();
        $('#' + options.randomId).attr('data-playertype','flow');
        if(options.videoLayout=='pop-up' && $('.lightbox_apply').length==0)
          {
				      _thisObj._video.shutdown();
          }
        
        //KWCMSLIVE-12552 commenting below line to avoid pausing video.
        //_thisObj._pauseOthers(_thisObj._$videoEl.attr('id'));
        
        $(_thisObj._$videoEl).closest('.eut_cmly_section').find('.component_info').show();
        eut.currentVideoObj = _thisObj;
        //_thisLocal._pauseOthers(options.randomId);

        if(options.videoLayout == 'pop-up'){
            if($(_thisObj._$videoEl).closest('.eut_lightbox_item').attr('aria-hidden')=='true'){ _thisObj._video.pause();  }
        }
        if (options.playType == 'user-initiated' && this.timeoutId) {
          clearTimeout(this.timeoutId);
        }


        if (_thisObj._parent.length) {
          _thisObj._parent.removeClass('in-line');
          _thisObj._$videoEl.parents('.ih_slide').addClass('ih-slide-video-container');
        }




      //  options.playType = options.playType ? options.playType : 'user-initiated';
        options.eventType = _thisObj._currentPlaying != options.randomId ? 'video-initiate' : 'video-play';


        _thisObj._currentPlaying = options.randomId;
        _thisObj.videoTracking(options);

       // options.playType = 'user-initiated';
      })


      // event when a video is stopped for analytics functionality
      this._video.on('stop', function () {
        $('#' + options.randomId).find('.fp-player>a').hide();
        $(_thisObj._$videoEl).closest('.eut_cmly_section').find('.component_info').show();
        if (_thisObj._parent.length) {
          _thisObj._parent.addClass('in-line');
          _thisObj._$videoEl.parents('.ih_slide').removeClass('ih-slide-video-container');

        }


        options.eventType = 'video-pause';
        _thisObj.videoTracking(options);
      })


      // event when a video is paused for analytics functionality
      this._video.on('pause', function () {
         $('#' + options.randomId).find('.fp-player>a').hide();
         $(_thisObj._$videoEl).attr('play-type','user-initiated');
         $(_thisObj._$videoEl).closest('.eut_cmly_section').find('.component_info').show();
        if (_thisObj._parent.length) {
          _thisObj._parent.addClass('in-line');
          _thisObj._$videoEl.parents('.ih_slide').removeClass('ih-slide-video-container');
        }

        options.eventType = 'video-pause';
        _thisObj.videoTracking(options);

      })

      //eut.currentVideoObj = this._video;

    },

    //flowplayer only
    _getVideoPath: function (path) {
      if (typeof path === 'string') {
        return String(path).replace(/\.[a-z0-9]+$/i, '');
      } else {
        return '';
      }

    },

    _interlake: function (options) {
      if (!options.path.length) return;
      this._$videoEl = $('#' + options.randomId);
      this._video = new eut.Html5Video(this._$videoEl.parent(), options);
    },
    _htmlplayer: function (options) {
      let html;
      let mysound = options.sound == "true" ? " muted " : " ";
      let myautoplay = options.play == "true" ? " autoplay " : " ";
      let selectedVideo = options.path[0].video;

      if (options.autoloop == "true") {

        html = ('<div class="trailer-content" style="height: inherit">' +
          '<div class="iframe-container" style="height: inherit">' +
          '<video class="eut_video" style="height: inherit; width: 100%" preload="metadata" controls ' + myautoplay + ' loop ' + mysound + ' >' +
          '<source src="' + selectedVideo + '" type="video/mp4">' + '</video>' +
          '</div><div class="trailer-description"><div class="title-text">  </div> <div class="copy-text">' +
          '<p></p> </div></div></div>');

      }
      else {
        html = ('<div class="trailer-content" style="height: inherit">' +
          '<div class="iframe-container" style="height: inherit">' +
          '<video class="eut_video" style="height: inherit; width: 100%" preload="metadata" controls ' + myautoplay + ' ' + mysound + ' >' +
          '<source src="' + selectedVideo + '" type="video/mp4">' + '</video>' +
          '</div><div class="trailer-description "><div class="title-text">  </div> <div class="copy-text">' +
          '<p></p> </div></div></div>');
      }
      var traillerEl = document.querySelector('#'+options.randomId + ' .trailer');
      traillerEl.style.height = "inherit"
      traillerEl.innerHTML += html;
      traillerEl.classList.toggle('active');
      $('body').css('overflow', 'hidden');
    },

    _addEvents: function (options) {

    },
    _pauseOthers:function(currentPlayer){
        $('.player-container').each(function(i, element) {
      if(currentPlayer!=$(element).attr('id') && $(element).data('player'))
              {
                $(element).attr('data-playertype')=='flow' ? $(element).data('player').pause() : $(element).data('player').pauseVideo()
              }
        });
    },
    _isElementInViewport: function(el) {

        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
    
        var rect = el.getBoundingClientRect();
    
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    },
   _initScrollAutoplay: function() {
            // && window.innerWidth > 1000
            if ((inlineVideoNumber == $('.player-container').length) && window.innerWidth > 800) {
                var that = this;
                setTimeout(function(){
                $('.player-container').each(function(i, element) {
                    var element_center = $(element).find('.player-center');
                    if( $(element).attr('data-playertype')=='youtube'){ element_center = $(element).parent().find('.player-center'); }
                    if(that._isElementInViewport(element_center)){
                        var currentElement = $(element); 
                        var instanceId = parseInt(currentElement.attr('data-instanceId'));
						            if (currentElement.attr('autoplay-timeout')!='true'  && currentElement.attr('data-autoplay')!='false' && !$('.eut_common_modal').length) {
                            currentElement.attr('play-type', 'autoplay-initiated');
                            if(currentElement.attr('data-playertype')=='flow') {  
                                if(!currentElement.hasClass('is-playing')){
                                    videos[instanceId].play();
                                    videos[instanceId].mute(true); 
                                }
                            }else{
                                videos[instanceId].playVideo();
                                videos[instanceId].mute();
                            }                                    
                        }
                    }
                    
                    if( $(element).attr('data-playertype')=='youtube'){ element_center = $(element).parent().find('.player-center'); }

                    var topOfElement = element_center.offset().top;
                    var bottomOfElement = element_center.offset().top + element_center.outerHeight(true);
                    var videoPlayedOnce = [];
                    videoPlayedOnce[i] = false;					
                    $(window).bind('scroll', function() {

                        var scrollTopPosition = $(window).scrollTop() + $(window).height();
                        var windowScrollTop = $(window).scrollTop()
                        var currentElement = $(element);
                        var instanceId = parseInt(currentElement.attr('data-instanceId'));

                        if (windowScrollTop > topOfElement && windowScrollTop < bottomOfElement) {

                        } else if (windowScrollTop > bottomOfElement && windowScrollTop > topOfElement) {
                            currentElement.attr('data-playertype')=='flow' ? videos[instanceId].pause() : videos[instanceId].pauseVideo()
                        } else if (scrollTopPosition < topOfElement && scrollTopPosition < bottomOfElement) {
                            currentElement.attr('data-playertype')=='flow' ? videos[instanceId].pause() : videos[instanceId].pauseVideo()
                        } else if (scrollTopPosition < bottomOfElement && scrollTopPosition > topOfElement) {

                        } else {
                            if (!videoPlayedOnce[instanceId] && currentElement.attr('autoplay-timeout')!='true'  && currentElement.attr('data-autoplay')!='false' && !$('.eut_common_modal').length) {
                                currentElement.attr('play-type', 'autoplay-initiated');
                                if(currentElement.attr('data-playertype')=='flow') {  
                                     if(!currentElement.hasClass('is-playing')){
                                     videos[instanceId].play();
                                     videos[instanceId].mute(true); 
                                    }
                                }else{
                                    videos[instanceId].playVideo();
                                    videos[instanceId].mute();
                                }                                    
                                //videoPlayedOnce[instanceId] = true;
                            }
                        }
                    });
                });
                },1000);
            }
        },
    // flowplayer mouse hover and auto play length
    addMouseOverEventFlowPlayer: function (videoElement, options) {
      options.playType = 'mouse-hover';
      options.eventType = this._currentPlaying != options.randomId ? 'video-initiate' : 'video-play';
      if (this._video.playing) {
        return;
      }
      var thisObj = this;
      this._video.play();
      if (options.autoPlayLen) {
        thisObj.timeoutId = setTimeout(function () {
          thisObj._video.stop();
        }, (parseInt(options.autoPlayLen) + 1) * 1000)
      }
    },


    _removeEvents: function () {
          this._$videoEl.siblings('.eut_video_touch_area').off('click');
          if (this._video.off) this._video.off('fullscreen fullscreen-exit');
          this._$videoEl.find('.ipad_fullscreen').off('click');
    },


    // pasing info for making dtm layer object
    videoTracking: function (options) {
      this.createDTMObject(options);
    },


    // creating dtm layer object for analytics
    createDTMObject: function (videoObj) {

      var videoDomObj={};
      if(videoObj.vendor=='youtube')
      {
        videoDomObj.duration=videoObj.duration;
        videoDomObj.currentTime=videoObj.currentTime;
      }
      else
      {
          if (this._currenVideoState == videoObj.eventType) {
            return;
          }
		      videoDomObj = this._$videoEl.find('video').get(0);
          if (!window.dtmDataLayer) {
            window.dtmDataLayer = {};
          }
          if(this._$videoEl.find('video').length==0){ return; }
          if(videoObj.title=='' && videoObj.subject!=''){ videoObj.title = videoObj.subject; }
      }


      window.dtmDataLayer.video = {
        "pageName": $('meta[name="kia_metrics_pagename"]').attr('content'),
        "videoName": videoObj.title,
        "duration": videoDomObj.duration,
        "viewLength": videoDomObj.currentTime,
        "playerName": videoObj.vendor,
        "videoStartType": videoObj.playType,
        "event": videoObj.eventType
      }

      eut.analytics.track("video-tracking");
      this._currenVideoState = videoObj.eventType;
    }
  });

  Video.getRandomId = function () {
    return VideoAPI.getRandomId();
  };

    /*Added KWCMSLIVE-25060*/
/*Setting up event to check if youtube iframe api is loaded*/
window.onYouTubeIframeAPIReady = function(){
  const ytApiLoaded = new CustomEvent("youtubeApiLoaded", {
    detail: {},
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  document.querySelector("body").dispatchEvent(ytApiLoaded);
}
/*=====================*/
  eut.Video = eut.Video || Video;
})(jQuery, eut, eut.common);

/**
 * Modal
 */
;(function ( $, eut, common ) {

    /**
     * Base Modal
     * @constructor
     */
    var ModalManager = eut.Class.extend({
        _rePositionTime: 0,

        initialize: function ( contents, options ) {
            var options = ( $B.object.is(options) )? options : {};

            options.transparent = ( typeof options.transparent === 'boolean' ) ? options.transparent : ( $('.eut_common_modal_container' ).length > 0);
            options.popupSize = options.popupSize || 'M';

            if ( options.top ) options.isAfterShow = false;
            if ( !options.isTitle ) options.isTitle = !!(options.title);
            if ( !options.isContentMargin && options.popupSize === 'SM' ) options.isContentMarginSM = true;

            this._options = options;
            this._deferred = new $.Deferred();
            this._isMiddlePosition = options.isMiddlePosition;
            this._$win = $( window );
            this._$doc = $( document );
            this._$activeElement = options.returnFocusTarget || $( document.activeElement );

            this._drawModal( contents, options );
        },

        /** =============== Public Methods =============== */

        getPromise: function () {
            return this._deferred.promise();
        },

        setOption: function () {
            this._setPosition( this._options.top );
            this._addEvents( this._options );
            this._$iconClose.focus();
            if ( !this._options.isAfterShow ) {
                this._$win.scrollTop( this._scrollTop );
            }

            return this;
        },

        /** =============== Private Methods =============== */

        _drawModal: function ( contents, options ) {
            var isJqueryObject = ( typeof contents !== 'string' && typeof contents.get === 'function' ),
                html = common.template( 'modal.modal', _.extend({
                contents: ( isJqueryObject )? '' : contents
            }, options));

            this._$modal = $( html );
            this._$iconClose = this._$modal.find( 'a.close' );
            this._$btnConfirm = this._$modal.find( '.eut_confirm_btn' );
            this._$btnCancel = this._$modal.find( '.eut_cancel_btn' );
            this._$dim = this._$modal.find( '.eut_common_dim' );
            this._$pop = this._$modal.find( '.eut_modal_window' );
            this._$endFocusEl = this._$modal.find( '.end_point' );

            if ( isJqueryObject ) {
                this._$pop.find( '> .eut_lb_content' ).append( contents );
            }

            if ( options.isAfterShow ) {
                this._$modal.css( 'visibility', 'hidden' );
            }

            $( 'body' ).append( this._$modal );

            //Picturefill a responsive image polyfill
            picturefill();
        },

        _addEvents: function ( options ) {
            this._$iconClose.on( 'click', _.bind(function (e, data) {
                e.preventDefault();
                this._remove();
                this._deferred.reject( 'close', data );
                $('body').trigger('modelClosedStatus');
            }, this));

            this._$btnCancel.on( 'click', _.bind(function (e, data) {
                e.preventDefault();
                this._remove();
                this._deferred.reject( 'cancel', data );
            }, this));

            this._$btnConfirm.on( 'click', _.bind(function (e) {
                e.preventDefault();
                this._remove();
                this._deferred.resolve();
            }, this));

            if ( !options.transparent ) {
                this._$dim.on( 'click', _.bind(function (e) {
                    this._$iconClose.trigger( 'click' );
                }, this));
            }

            if ( options.isAfterShow ) {
                this._$modal.on( 'afterShow', _.bind(function (e) {
                    this._setPosition( options.top );
                    this._$modal.css( 'visibility', 'visible' );
                    if ( this._$modal.find('.close').length === 1 ) this._$iconClose.focus();
                    this._$win.scrollTop( this._scrollTop );
                }, this));
            }

            this._$modal.on( 'resetPosition', _.bind(function (e) {
                this._setPosition( options.top, true );
            }, this));

            this._$endFocusEl.on( 'focusin', _.bind(function (e) {
                e.stopPropagation();
                e.preventDefault();
                this._$iconClose.focus();
            }, this));

            this._onResize = _.bind(this._resizeHandler, this);
            this._$win.on( 'resize', this._onResize );
        },

        _resizeHandler: function (e) {
            var isFullScreen = common.isFullScreen() || this._isYoutubeFullScreen();
            if ( !isFullScreen && !$B.ua.MSIE ) this._setPosition( this._options.top, true );
        },

        _isYoutubeFullScreen: function () {
            var maxWidth = 0, maxHeight = 0;

            this._$modal.find( '.youtube' ).each( function ( idx, el ) {
                maxWidth = Math.max( maxWidth, $(el).width() );
                maxHeight = Math.max( maxHeight, $(el).height() );
            });

            return ( $(window).width() === maxWidth ) && ( $(window).height() === maxHeight );
        },

        _setPosition: function ( top, isRePosition ) {
            this._scrollTop = this._$win.scrollTop();

            if ( this._isMiddlePosition ) {
                var winHeight = this._$win.height(),
                    position = this._$pop.css( 'position' ),
                    posY = 0,
                    positionTime = new Date().getTime();

                if ( position === 'fixed' ) {
                    posY = ( winHeight * 0.5 ) - ( this._$pop.outerHeight() * 0.5 );
                    if ( posY < 0 ) posY = 0;
                } else {
                    posY = ( winHeight * 0.5 ) - ( this._$pop.outerHeight() * 0.5 ) + this._scrollTop;
                    if ( posY < this._scrollTop ) posY = this._scrollTop;
                }

                //Firefox bug (CSS transition)
                if ( isRePosition && (this._rePositionTime && positionTime - this._rePositionTime > 50) ) {
                    this._$pop.addClass( 'transition_top' );
                }

                this._$pop.css( 'top', Math.round(posY) + 'px' );
                this._rePositionTime = positionTime;
            } else if ( top ) {
                this._$pop.css( 'top', top );
            }
        },

        _remove: function () {
            if(this._$endFocusEl.prevObject[0].classList.contains('car-disclaimer-overlay')){
              var urlSplit = window.location.href.split("://");
              var targetOrigin = urlSplit[0] +"://" + urlSplit[1].split("/")[0];
              var contentW = this._$endFocusEl.prevObject[0].contentWindow;
              contentW.postMessage("close-disclaimer-overlay",targetOrigin);
            }
            this._$endFocusEl.off();
            this._$iconClose.off();
            this._$btnCancel.off();
            this._$btnConfirm.off();
            this._$dim.off();
            this._$win.off( 'resize', this._onResize );
            this._$modal.off().remove();
            //focus
            this._$activeElement.focus();
        }
    });

    var modal = {
        /**
         * @param {String, jQueryObject}    contents          text, html, jQueryObject
         * @param {Object}    options
         *      {String}    title
         *      {Boolean}   transparent
         *      {String}    popupSize       "S", "SM", "M", "L" (default:M)
         *      {String}    modalContainerCssClassName       add modal className
         *      {Boolean}   isMiddlePosition     auto top position middle
         *      {String}    top                 top position, ex) 200px
         *      {Boolean}   isContentMargin
         *      {Boolean}   isMobileWidthFull   mobile size width full
         *      {Boolean}   isAfterShow         modal.afterShow() after this show
         *      {jQueryObject}  returnFocusTarget   default:open click element
         * @returns {Promise}
         */
        open: function ( contents, options ) {
            return new ModalManager( contents, options ).setOption().getPromise();
        },

        /**
         * @param   {jQueryObject}    $el   Target modal container
         * @param   {*}               data  callback data
         */
        close: function ( $el, data ) {
            if ( $el ) {
                $el.find( 'a.close' ).trigger( 'click', [data] );
            } else {
                $( '.eut_common_modal_container a.close' ).trigger( 'click', [data] );
            }
        },

        /**
         * open alert
         * @param   {String}    msg
         * @param   {Object}    options
         *      {jQueryObject}  returnFocusTarget
         * @returns {Promise}
         */
        alert: function ( msg, options ) {
            var contents = common.template( 'modal.text-contents', {
                    contents: msg,
                    textAlign: 'center',
                    btnConfirm: true,
                    confirmLabel: eut.i18n.get( 'eu-btn-confirm' )
                }),
                options = options || {};

            options.isMiddlePosition = true;
            return this.open( contents, options );
        },

        /**
         * open info
         * @param   {String}    msg
         * @param   {Object}    options
         *      {jQueryObject}  returnFocusTarget
         * @returns {Promise}
         */
        info: function ( msg, options ) {
            var options = options || {},
                contents = common.template( 'modal.text-contents', {
                    contents: msg,
                    textAlign: 'center',
                    btnConfirm: options.btnConfirm || false,
                    confirmLabel: options.confirmLabel || eut.i18n.get( 'eu-btn-confirm' )
                });

            options.isMiddlePosition = true;
            return this.open( contents, options );
        },

        /**
         * open confirm
         * @param   {String}    msg
         * @param   {Object}    options
         *      {jQueryObject}  returnFocusTarget
         * @returns {Promise}
         */
        confirm: function ( msg, options ) {
            var options = options || {};
            var btnConfirmOption = (options.btnConfirm != undefined)?options.btnConfirm : true;
            var btnCancelOption = (options.btnCancel != undefined)?options.btnCancel : true;
            var contents = common.template( 'modal.text-contents', {
                    contents: msg,
                    textAlign: 'center',
                    btnConfirm: btnConfirmOption,
                    btnCancel: btnCancelOption,
                    confirmLabel: options.confirmLabel || eut.i18n.get( 'eu-btn-confirm' ),
                    cancelLabel: options.cancelLabel || eut.i18n.get( 'eu-btn-cancel' )
                });

            options.isMiddlePosition = true;
            return this.open( contents, options );
        },

        /**
         * @returns {Boolean}
         */
        isOpen: function () {
            return $( '.eut_common_modal_container' ).length > 0;
        },

        /**
         * reset modal top position
         * @param {jQueryObject}    $el   Target modal container
         */
        resetPosition: function ( $el ) {
            if ( this.isOpen() ) {
                if ( $el ) {
                    $el.triggerHandler( 'resetPosition' );
                } else {
                    $( '.eut_common_modal_container' ).triggerHandler( 'resetPosition' );
                }
            }
        },

        /**
         * isAfterShow=true
         * @param {jQueryObject}    $el   Target modal container
         */
        afterShow: function ( $el ) {
            if ( this.isOpen() ) {
                if ( $el ) {
                    $el.triggerHandler( 'afterShow' );
                } else {
                    $( '.eut_common_modal_container' ).triggerHandler( 'afterShow' );
                }
            }
        }
    };

    modal.ModalManager = ModalManager;
    eut.modal = eut.modal || modal;
})( jQuery, eut, eut.common );

/**
 * Loading
 */
;(function ( $, eut ) {
    var loading = {
        /**
         * @returns {Promise}
         */
        open: function () {
            var $win = $( window );

            if ( this.isOpen() ) {
                return $( '.eut_loading_dim' ).get(0).promise;
            } else {
                var $loading = $( eut.common.template('common.loading', {}) ),
                    defer = new $.Deferred();

                $loading.get(0).promise = defer.promise();
                $loading.on( 'loading:close', function (e) {
                    $loading.off();
                    $win.off( 'load resize loading:resize', resize );
                    $loading.removeClass( 'active' ).removeClass( 'layer_top' ).hide();
                    $loading.remove();
                    defer.reject();
                });

                $win.on( 'load resize loading:resize', resize );
                $loading.addClass( 'active' ).show();
                $win.trigger( 'loading:resize' );

                $( 'body' ).append( $loading );
                setPosition( $loading );

                return $loading.get(0).promise;
            }
        },

        close: function () {
            $( '.eut_loading_dim' ).trigger( 'loading:close' );
        },

        isOpen: function () {
            return $( '.eut_loading_dim' ).length > 0;
        },

        resize: function () {
            $( window ).trigger( 'loading:resize' );
        }
    };


    function setPosition ( $loading ) {
        var $img = $loading.find( '.loading' ),
            $win = $( window );

        var docH = $( document ).height(),
            posY = $( '#eut_container' ).offset().top,
            posH = docH - posY,
            imgH = $img.height(),
            scrollY = $win.scrollTop(),
            imgY = ( $win.height() / 2 ) - ( imgH / 2 ) - posY + scrollY;

        $loading.css({
            top: posY + 'px',
            height: posH + 'px'
        });

        $img.css({
            top: imgY + 'px'
        });
    }

    function resize () {
        var $loading = $( '.eut_loading_dim' );

        $loading.css({
            top: '',
            height: ''
        });

        setPosition( $loading );
    }


    eut.loading = eut.loading || loading;
})( jQuery, eut );
/**
 * LightBox
 * ModalManager extend
 */
;(function ( $, eut, modal, common ) {

    /**
     * @constructor
     */
    var OverlayImg = eut.Class.extend({
        DELAY: 2000,//2sec

        initialize: function ( $container, isAni ) {
            this.$container = $container.find( '.picture_area' );
            this.$imgs = $container.find( 'picture' );

            if ( isAni && this.$imgs.length > 1 ) {
                this.$imgs.show();

                this._timer = new $B.utils.Timer( this.DELAY, this.$imgs.length, {
                    onTimer: _.bind(function (e) {
                        this.overlay( e.currentCount - 1 );
                    }, this),
                    onComplete: _.bind(function (e) {
                        this.start();
                    }, this)
                });
            }
        },

        start: function () {
            if ( this._timer ) this._timer.reset().start();
        },

        stop: function () {
            if ( this._timer ) this._timer.stop();
        },

        overlay: function ( idx ) {
            var $img = this.$imgs.eq( idx );
            var timer1 =  (idx != 0)? 300: 0;

            $img.stop().css( 'opacity', 0 );
            this.$container.append( $img );
            $img.animate({
                opacity: 1
            }, timer1);
        }
    });


    /**
     * @constructor
     */
    var LightBox = modal.ModalManager.extend({
        VIDEO_RATIO: [1280, 720],

        _selectIndex: 0,

        initialize: function ( data ) {
            //Random ID
            _.each( data.items, _.bind(function ( item ) {

                if ( item.type === 'image' ) {
					var checkupdate = 0;
                    var path_items = item.path;
                    for(var k=0;k<path_items.length;k++){
                        if(path_items[k].pc){ path_items[k].pc=path_items[k].pc.split(' ').join('%20'); checkupdate=1; }
                        if(path_items[k].tablet){ path_items[k].tablet=path_items[k].tablet.split(' ').join('%20');  checkupdate=1; }
                        if(path_items[k].mobile){ path_items[k].mobile=path_items[k].mobile.split(' ').join('%20');  checkupdate=1; }
                    }
                    if(checkupdate){ item.path = path_items; }
                }

                if ( item.type === 'video' ) {
                    if ( !item.vendor ) item.vendor = 'interlake';
                    item.randomId = eut.Video.getRandomId();
                    item.width = this.VIDEO_RATIO[0];
                    item.height = this.VIDEO_RATIO[1];

                    if ( item.vendor === 'interlake' ) {
                        item.path[0].video = item.path[0].video.replace( /(.[a-z0-9]+)$/i, function ( str, f1 ) {
                            item.path[0].extention = f1;
                            return '';
                        });
                        if(item.path[0].video.includes(item.path[0].extention)==false && item.path[0].extention){ item.path[0].video=item.path[0].video+item.path[0].extention; }
                        item.vendor = 'flowplayer';
                    }
                }

                if ( item.toggle ) item.animate = false;
            }, this));

            data.isMiddlePosition = true;
            data.itemLength = data.items.length;
            data.isTitle = ( data.title || (data.items.length && data.items[0].title) )? true : false;
            data.isIphone = $B.ua.IPHONE;

            var contents = common.template( 'modal.light-box-contents', data );

            modal.ModalManager.prototype.initialize.call( this, contents, data );

            this._options = data;

            this._$slide = this._$modal.find( '.eut_lb_slide .slide' );
            this._$items = this._$slide.find( '.eut_lightbox_item' );
            this._$toggleBtns = this._$modal.find( '.btn_toggle > button' );
            this._$titleAreas = this._$items.find( '.title_area' );
            this._$controllBtns = this._$slide.find( '.controll_btn' );
            this._$pictures = this._$items.find( '.picture_area' );
            this._$touchArea = this._$items.find( '.eut_video_touch_area' );
            this._$playBtn = this._$touchArea.find( '.play' );

            this._setTitleHeight();
            this._setVideo( data.items );

            this._$html5VidEl = this._$items?.find("video");
            _.each(this._$html5VidEl, _.bind(function (item, index) {
              item.pause();
            }));

            data.defaultIndex 
            if (data.items.length > data.defaultIndex && data.defaultIndex > -1) {
              if (data.items[data.defaultIndex].randomId) {

                this._$html5CurVidEl = this._$items?.find("#"+data.items[data.defaultIndex].randomId + " video");
                _.each(this._$html5CurVidEl, _.bind(function (item, index) {
                  if(item.autoplay == true)
                  item.play();
                }));
              }
            }

            //animate image
            this._animateImgs = [];
            this._$items.each( _.bind(function ( idx, el ) {
                this._animateImgs.push( new OverlayImg($(el), data.items[idx].animate) );
            }, this));

            this._addEvents( data );
            this._setImageHeight();
            this._setVideoHeight();
            this._setControllerPosition();
            this._setToggleBtnSize();
            this._setPosition();
            this._$iconClose.focus();
            this._$modal.addClass( 'lightbox_apply' );
            if (data.items[0].hide_share_icon === 'true') {
                this._$modal.addClass( 'video-share-icon-hide' );
            }

            if ( data.autoHeight && !data.visualRatio ) {
                common.loadImages( this._$pictures, data.autoHeight ).done( _.bind(function () {
                    this._setImageHeight();
                    this._setVideoHeight();
                    this._setControllerPosition();
                    modal.resetPosition( this._$modal );
                }, this));
            }
        },

        /** =============== Private Methods =============== */
        /**
         * @override
         */
        _addEvents: function ( options ) {
            //overload
            modal.ModalManager.prototype._addEvents.apply( this, arguments );

            if ( this._$items.length ) {
                if ( options.itemLength > 1 ) {
                    this._$slide.on( 'ixSlideMax:init ixSlideMax:change', _.bind(function (e) {
                        this._selectIndex = e.currentIndex;
                        this._animateImage( 'start' );
                        if(this._videos[e.currentIndex] && e.type == 'ixSlideMax:change')
                        {
                            if(this._videos[e.currentIndex]._vendor=='youtube')
                            {
                                if(this._videos[e.currentIndex]._$videoEl.attr('autoplay')){ this._videos[e.currentIndex]._$videoEl.attr('play-type','autoplay-initiated'); this._videos[e.currentIndex].play(); }
                            }
                            else
                            {
                              if (this._videos[e.currentIndex]._options) {
                                if (this._videos[e.currentIndex]._options.autoplay == true) {
                                  this._videos[e.currentIndex]._$videoEl.attr('play-type', 'autoplay-initiated');
                                  this._videos[e.currentIndex].play();
                                }
                              } 
                              this._$html5VidEl = e.target?.querySelectorAll("video:not(.fp-engine)");
                              _.each(this._$html5VidEl, _.bind(function (item, index) {
                                if (index == e.currentIndex && item.autoplay)
                                  item.play();
                                else
                                  item.pause();
                              }));
                            }
                        }
                    }, this)).ixSlideMax({
                        defaultIndex: options.defaultIndex || 0
                    });
                } else {
                    this._animateImage( 'start' );
                }

                this._response = _.bind( function (e) {
                    this._responseHandler();
                    this._setTitleHeight();
                    this._setImageHeight();
                    this._setVideoHeight();
                    this._setControllerPosition();
                }, this );
                eut.responsive.addListener( 'response-width', this._response );
                eut.responsive.addListener( 'response-height', this._response );
            }

            //toggle button
            this._$toggleBtns.on( 'click', _.bind(function (e) {
                var $btn = $( e.currentTarget );

                $btn.addClass( 'active' ).siblings().removeClass( 'active' );
                this._toggleImage( this._selectIndex, $btn.is('.toggle_open.active') );
            }, this));

            this._onFullscreen = _.bind(function (e) {
                if ( eut.common.isFullScreen() || this._isYoutubeFullScreen() ) {
                    this._$slide.find( '.ix-list-items' ).css({
                        'transition': '',
                        '-webkit-transition': '',
                        '-ms-transition': '',
                        '-moz-transition': '',
                        '-o-transition': ''
                    });
                }
            }, this);

            this._onWinLoad = _.bind(function (e) {
                this._setTitleHeight();
            }, this);

            $( window ).on( 'load', this._onWinLoad );
            $( document ).on( 'webkitfullscreenchange mozfullscreenchange fullscreenchange msfullscreenchange', this._onFullscreen );
        },

        /**
         * @override
         */
        _remove: function () {
            if(eut.currentVideoObj){
                eut.currentVideoObj._currenVideoState = "";
                eut.currentVideoObj._options.playType = "user-initiated";
                eut.currentVideoObj._options.eventType = "video-pause";
                eut.currentVideoObj.createDTMObject(eut.currentVideoObj._options);
            }
            this._stopVideo();
            this._animateImage( 'stop' );
            this._$slide.ixSlideMax( 'clear' );
            this._$slide.off( 'ixSlideMax:slideStart ixSlideMax:init ixSlideMax:change' );
            eut.responsive.removeListener( 'response-width', this._response );
            eut.responsive.removeListener( 'response-height', this._response );
            this._removeVideo();

            this._$modal.removeClass( 'lightbox_apply' );
            this._$toggleBtns.off( 'click' );
            this._$modal.find( 'img' ).off();
            $( window ).off( 'load', this._onWinLoad );
            $( document ).off( 'webkitfullscreenchange mozfullscreenchange fullscreenchange msfullscreenchange', this._onFullscreen );

            //overload
            modal.ModalManager.prototype._remove.apply( this );
        },

        _animateImage: function ( state ) {
            if ( state === 'start' ) {
                this._$items.each( _.bind(function ( idx ) {
                    if ( idx === this._selectIndex ) {
                        this._animateImgs[idx].start();
                    } else {
                        this._animateImgs[idx].stop();
                    }
                }, this));
            } else {
                this._$items.each( _.bind(function ( idx ) {
                    this._animateImgs[idx].stop();
                }, this));
            }
        },

        _setVideo: function ( items ) {
            this._videos = [];

            _.each( items, _.bind(function ( item ) {
                if ( item.type === 'video' ) {
                    $('#'+item.randomId).append('<div class="trailer"></div>');
                    item.videoLayout='pop-up';
                    this._videos.push( new eut.Video(item) );
                }else{
                    this._videos.push( 0 );
                }
            }, this));

            this._$slide.on( 'ixSlideMax:slideStart', _.bind(function (e) {
                this._stopVideo();
                if($('video.fp-engine').length>0){
                  $('video.fp-engine')[0].preload = "Metadata";
                }
            }, this));
        },

        _stopVideo: function () {
            _.each( this._videos, function ( video ) {
                if(video){ video.stop(); }
            });
        },

        _toggleImage: function ( idx, isOpen ) {
            var $pictures = this._$items.eq( idx ).find( 'picture' );

            if ( isOpen ) {
                $pictures.eq( 0 ).show();
                $pictures.eq( 1 ).hide();
            } else {
                $pictures.eq( 0 ).hide();
                $pictures.eq( 1 ).show();
            }
        },

        _updateVideoSize: function () {
            //_.each( this._videos, function ( video ) {
            //
            //});
        },

        _removeVideo: function () {
            _.each( this._videos, function ( video ) {
                if(video){  $(video._$videoEl).parent().remove();  }
            });
        },

        _responseHandler: function () {
            var currentIdx = this._$slide.ixSlideMax( 'getCurrentIndex' );
            this._$slide.ixSlideMax( 'clear' ).ixSlideMax({
                defaultIndex: currentIdx
            });

            this._updateVideoSize();
        },

        _setControllerPosition: function () {
            if ( !this._$controllBtns.length ) return;

            var titleH = this._$titleAreas.height() || 0,
                visualH = this._getVisualMaxHeight(),
                controllH = this._$controllBtns.height() || 0,
                posY = ( visualH / 2 ) - ( controllH / 2 ) + titleH;

            this._$controllBtns.css({top: posY + 'px'});
        },

        _setImageHeight: function () {
            if ( this._$pictures.length && this._options.visualRatio ) {
                this._$pictures.ixRatioSize({
                    ratio: this._options.visualRatio.join( ' ' )
                });
            }
        },

        _setVideoHeight: function () {
            var $video = this._$items.find( '.eut_lightbox_video' );

            if ( $video.length ) {
                $video.css( 'height', '' );
                var picH = 0;

                if ( this._$pictures.length ) {
                    picH = this._getPictureMaxHeight();
                } else {
                    if ( this._options.autoHeight && !this._options.visualRatio ) {
                        picH = this._getVideoRatioHeight( $video );
                    } else {
                        picH = this._getVisualMaxHeight();
                    }
                }

                if ( picH < 100 ) {
                    picH = this._getVideoRatioHeight( $video );
                }

                if ( this._options.autoHeight && this._options.visualRatio ) {
                    $video.ixRatioSize({
                        ratio: this._options.visualRatio.join( ' ' )
                    });
                } else {
                    $video.css({height: picH + 'px'});
                }

                this._$touchArea.css({
                    top: this._$titleAreas.height() + 'px',
                    height: (picH - 40) + 'px'
                });
                this._$playBtn.css( 'top', (picH / 2) + 'px' );
            }
        },

        _getVideoRatioHeight: function ( $el ) {
            var baseW = $el.width(),
                videoRatio = this._options.visualRatio || this.VIDEO_RATIO,
                perH = videoRatio[1] / videoRatio[0];

            return baseW * perH;
        },

        _getPictureMaxHeight: function () {
            var result = 0;

            this._$pictures.each( function ( idx, el ) {
                result = Math.max( $(el).height(), result );
            });

            return result;
        },

        _getVisualMaxHeight: function () {
            var result = 0;

            this._$items.find( '.visual_area' ).each( function ( idx, el ) {
                result = Math.max( $(el).height(), result );
            });

            return result;
        },

        _setToggleBtnSize: function () {
            this._$items.each( function ( idx, el ) {
                var $box = $( el ).find( '.btn_toggle' ),
                    $btnOpen = $box.find( '.toggle_open' ),
                    $btnClose = $box.find( '.toggle_close' );

                $box.css( 'width', '' );
                $btnOpen.css( 'width', '' );
                $btnClose.css( 'width', '' );

                var openW = $btnOpen.outerWidth( true ),
                    closeW = $btnClose.outerWidth( true ),
                    maxW = Math.max( openW, closeW ) + 1;

                $box.css( 'width', (maxW * 2) + 'px' );
                $btnOpen.css( 'width', maxW + 'px' );
                $btnClose.css( 'width', maxW + 'px' );
            });
        },

        _setTitleHeight: function () {
            var maxH = 0;
            this._$titleAreas.css( 'height', '' ).each( function ( idx, el ) {
                maxH = Math.max( $(el).height(), maxH );
            }).css( 'height', maxH + 'px' );
        }

    });


    var lightBox = {
        /**
         * LightBox open
         * @param {Object}    data
         *      {String}    title
         *      {Int}       defaultIndex
         *      {Boolean}   transparent
         *      {Boolean}   autoHeight
         *      {Array}     visualRatio     ex) [470, 320]
         *      {String}    popupSize       "S", "SM", "M", "L" (default:M)
         *      {String}    modalContainerCssClassName       add modal className
         *      {Array}     items           image, video item Object Array
         *          = {Boolean}     animate
         *          = {String}      subject
         *          = {String}      middleTitle
         *          = {String}      desc
         *          = {String}      type            'image', 'video'
         *          = {String}      vendor          'youtube', 'flowplayer', 'interlake'
         *          = {Array}       path            image, video path array
         *          = {Object}      button
         *             - {String}  style     'link',
         *             - {String}  label
         *             - {String}  link
         *             - {String}  target    ex)_blank
         *          = {Array}   path      image, video Object Array
         * @returns {Promise}
         */
        open: function ( data ) {
            return new LightBox( data || {} ).getPromise();
        },

        /**
         * close opened lightBox close
         * @param {jQuery}    $el   Target container, not value = all
         */
        close: function ( $el ) {
            if ( $el && $el.length ) {
                eut.modal.close( $el );
            } else {
                eut.modal.close( $('.eut_common_modal_container.lightbox_apply') );
            }
        }
    };


    eut.lightBox = lightBox;
})( jQuery, eut, eut.modal, eut.common );

/**
 * Common UI Components - Paging
 */
;(function ( $, _, eut ) {

    var defaultViewListItemNum = 10;
    var defaultViewPageItemNum = 5;

    var Paging = eut.Class.extend({

        /**
         * @param {number} viewListItemNum  show list item num to one page
         * @param {number} viewPageItemNum  show page item num  << < 1, 2, 3,... > >>
         */
        initialize: function ( viewListItemNum, viewPageItemNum ) {
            this.viewListItemNum = viewListItemNum || defaultViewListItemNum;
            this.viewPageItemNum = viewPageItemNum || defaultViewPageItemNum;
            this.currentPageData = null;
            this.currentPageGroupData = null;
            this.offset = 0;
        },


        /** =============== Public Methods =============== */
        /**
         * @param {array} data
         */
        setData: function ( data ) {
            if( _.isArray(data) ){
                this.data = data;
                this.dataNum = data.length;
            }else if(_.isNumber(data)){
                this.dataNum = data;
            }else{
                return;
            }
            this.totalPageNum = _getTotalPage( this.dataNum, this.viewListItemNum );

            if( _.isArray(data) ){
                this.pages = _getPages( data, this.totalPageNum, this.viewListItemNum );
            }

            _setOffset.call( this, 0 );
            _setPage.call( this, 0 );
        },

        /**
         * page refresh
         * zero base
         * @param {number} index
         */
        setPage: function ( value ) {
            var index;
            if( this.currentPageGroupData ){
                index = this.currentPageGroupData.indexOf( value );
            }else{
                index = 0
            }
            if( (index+1) == this.viewPageItemNum ){
                if( value+1 < this.totalPageNum ){
                    _shiftLeft.call( this );
                }
            }else if( index == 0 ){
                if( value != 0 ){
                    _shiftRight.call( this );
                }
            }
            _setPage.call( this, value );
        },

        next: function () {
            var tempIndex = this.currentPageIndex+1;
            if( tempIndex < this.totalPageNum ){
                if( tempIndex == this.currentPageGroupData[ this.currentPageGroupData.length-1] && tempIndex !== this.totalPageNum-1){
                    _shiftLeft.call( this );
                }
                _setPage.call( this, tempIndex );
            }
        },

        prev: function () {
            var tempIndex = this.currentPageIndex - 1;
            if( this.currentPageIndex > 0 ){
                if( tempIndex == this.currentPageGroupData[0] && tempIndex != 0 ){
                    _shiftRight.call( this );
                }
                _setPage.call( this, tempIndex );
            }
        },

        first: function () {
            _setOffset.call( this, 0 );
            this.setPage( 0 );
        },

        last: function () {
            _setOffset.call( this, Math.max( 0, this.totalPageNum - this.viewPageItemNum  ) );
            this.setPage( this.totalPageNum-1 );
        },

        setOffset: function( value ){

        }
    });

    Paging.CHANGE = 'paging:page-change';

    /** =============== Private Methods =============== */

    function _shiftLeft(){
        if( this.offset + 1 < this.totalPageNum ){
            this.offset++;
        }else{
            this.offset = 0;
        }
    }

    function _shiftRight(){
        if( this.offset - 1 > 0 ){
            this.offset--;
        }else{
            this.offset = 0;
        }
    }

    function _setOffset( value ){
        this.offset = value;
    }

    function _setPage( value ){
        this.currentPageIndex = value;
        var minDisplayItems = 3;
        var minPagePagination = 5;
        var lastPages = this.totalPageNum - minDisplayItems;
        var temp = [];

        if(this.totalPageNum > minPagePagination) {

            temp.push(0);

            if (this.currentPageIndex < minDisplayItems) {
                temp.push(1);
                temp.push(2);
            } else {
                //temp.push(-1);
            }

            if (this.currentPageIndex >= minDisplayItems && this.currentPageIndex < lastPages) {
                temp.push(this.currentPageIndex);
            }

            if (this.currentPageIndex >= lastPages) {
                temp.push(this.totalPageNum - 3);
                temp.push(this.totalPageNum - 2);
            } else {
                //temp.push(-2);
            }
            temp.push(this.totalPageNum -1);

        } else {
            for( var i=0; i < this.totalPageNum; i+=1 ){
                temp.push( i );
            }
        }

        this.currentPageGroupData = temp;

        if( this.data ){ this.currentPageData = this.pages[ this.currentPageIndex ]; }

        var data = {
            pageData: this.currentPageData,
            pageGroupData: this.currentPageGroupData,
            currentPageIndex: this.currentPageIndex
        };

        this.dispatch( Paging.CHANGE, data );
    }

    function _getTotalPage ( length, viewListItemNum ) {
        return Math.ceil( length/viewListItemNum );
    }

    function _getPages ( data, totalPageNum, viewListItemNum ) {
        var pages = [];
        for( var index= 0 ; index < totalPageNum ; index +=1 ){
            var pageItem = [];
            for( var i=0, count = viewListItemNum ; i<count ; i+=1 ){
                var itemIndex = viewListItemNum * index + i;
                var itemData = data[ itemIndex ];
                if( itemData ){ pageItem.push( itemData ); }
            }
            pages.push( pageItem );
        }
        return pages;
    }

    eut.common = eut.common || {};
    eut.common.Paging = eut.common.Paging || Paging;
}( jQuery, _, eut ));
/**
 * Map Component
 *
 * options
 * option name( type )( default )
 * zoom( number )( 10 ) :  0~18
 * scrollwheel : default false
 * clusterLabelFunction( function )( function )
 * fitBounds( boolean )( true )
 */

;
(function($, _, eut) {
    var host = window.location.protocol + '//' + window.location.host;
    var isTest = host.indexOf('localhost') !== -1;
    var imagePath = isTest ? (host + '/etc.clientlibs/settings/wcm/designs/eut/clientlib/resources/images/common/') : (host + '/etc.clientlibs/settings/wcm/designs/eut/clientlib/resources/images/common/');
    var logoImagePath = isTest ? (host + '/etc.clientlibs/settings/wcm/designs/eut/clientlib/resources/rbr/icons/') : (host + '/etc.clientlibs/settings/wcm/designs/eut/clientlib/resources/rbr/icons/');
    var count = 0;
    var mapInstance = {};
    var icons = null;

    /** =============== Private Variable =============== */
    var DEFAULT_LOCATION = {
        eu: { lat: 51, lng: 10 },
        de: { lat: 51.1657, lng: 10.4515 },
        sk: { lat: 48.677732, lng: 19.451109 },
        nl: { lat: 52.198461078418894, lng:  5.376399947426948 }, 
        it: { lat: 43.19007679544734, lng: 12.238402813238281 },
		fr: {lat : 46.603354 , lng : 1.8883335},
        at: { lat:  47.63020292891043, lng: 14.156561850264884 }, 
        be: { lat: 50.4974444, lng: 3.3557956 },
        es: { lat: 39.52784437493138, lng:  -3.5858508798780266 }, 
        fl: { lat: 64.6570428, lng: 17.1391688 },//
        lu: { lat: 49.8154049, lng: 5.8531442 },
        hu: { lat:  47.034534811413074, lng: 19.436784121852277 }, 
        pl: { lat: 53.03327269153261, lng: 18.24995965557009 },
        se: { lat:63.00822369618614, lng:16.238786824819986 },
        no: { lat: 62.10735746833704, lng: 9.747722095599716 },
        cz : { lat : 49.8167003 , lng: 15.4749544},
		fi: { lat: 62.19572, lng :  25.83591 },
		gr : {lat: 39,lng: 22},
        is : {lat: 64.93831611958329,lng:  -17.830344947504734},
        ie : {lat: 53.23345548280369, lng: -8.442387812982865},
        mt: {lat : 35.876799938612216, lng: 14.442382020824658}
    };

    var DEFAULT_OPTIONS = {
        zoom:  eut.COUNTRY == 'eu' ? 5 : 6 ,
        fitBounds: true,
        scrollwheel: false,
        clusterLabelFunction: function(markers) { return markers.length }
    };


    var MapView = eut.Class.extend({

        /** =============== Public Methods =============== */
        initialize: function(element, options, callback) {
            if (element instanceof $) {
                element = element.get(0);
            }
            this._map = null;
            this._options = $.extend(DEFAULT_OPTIONS, options);
            this._markerCluster = null;
            this._selectedMarker = null;
            this._selectedIndex = -1;
            this.noDataCallback = null;
            var self = this;
            setTimeout(_.bind(function() {
                _cteateMap.call(this, element);
                if (callback) {
                    callback(self._map);
                }
            }, this), 10);
        },

        getMap: function() {
            return this._map;
        },

        dataProvider: function(dataProvider) {
            if (arguments.length === 0) { return this._dataProvider; }
            this._dataProvider = dataProvider;
            if (this._map) {
                if (window.isClusteringDisabled == 'true') {
                    _updateDisplayMarker.call(this)
                } else {
                    _updateDisplay.call(this);
                }
            }
        },

        dataProviderCSF: function(dataProvider) {
            if (arguments.length === 0) { return this._dataProvider; }
            this._dataProvider = dataProvider;
            if (this._map) {
                _updateDisplayMarkerCSF.call(this)
            }
        },

        selectedIndex: function(index) {
            if (arguments.length === 0) { return this._selectedIndex; }
            if (!this._markerCluster) { return; }
            this._selectedIndex = index;

            var awardedDealer_icon
            if (this._selectedMarker) {
                if (this._selectedMarker.isAwarded) {
                    awardedDealer_icon = icons.normal
                    awardedDealer_icon.url = this._selectedMarker.isAwarded;
                    this._selectedMarker.setIcon(awardedDealer_icon);
                } else {
                    icons.normal.url = logoImagePath + 'icon-kia-logo-pointer-1.png'
                    this._selectedMarker.setIcon(icons.normal);
                }
            }
            this._selectedMarker = this._markerCluster.getMarkers()[index];

            if (this._selectedMarker) {
                if (this._selectedMarker.isAwarded) {
                    awardedDealer_icon = icons.selected
                    awardedDealer_icon.url = this._selectedMarker.isAwarded;
                    this._selectedMarker.setIcon(awardedDealer_icon);
                } else {
                    icons.selected.url = logoImagePath + 'icon-kia-logo-pointer-black.png'
                    this._selectedMarker.setIcon(icons.selected);
                }
            }

            this.panToCurrentMarker(13);
        },

        setCenter: function(location) {
            _setCenter.call(this, location);
        },

        getSelectedMarker: function() {
            return this._selectedMarker;
        },

        panToCurrentMarker: function(zoom) {
            if (!this._selectedMarker) { return; }
            if (zoom) { this._map.setZoom(zoom); }
            this._map.panTo(this._selectedMarker.position);
        },

        fitBounds: function() {
            if (!this._markerCluster && window.isClusteringDisabled != 'true') { return; }
            var bounds = new google.maps.LatLngBounds();
            if (window.isClusteringDisabled != 'true') {
                _.forEach(this._markerCluster.getMarkers(), function(item) {
                    bounds.extend(item.getPosition());
                });
            } else {
                _.forEach(this._marker, function(item) {
                    bounds.extend(item.getPosition());
                });
            }

            if ($('.eut_charging_station_finder').length !== 0) {

                this._options.fitBounds = false;
            }

            this._map.fitBounds(bounds);

            if ((this._markerCluster && this._markerCluster.getMarkers().length === 1 && eut.COUNTRY === 'nl') || (window.isClusteringDisabled == 'true' && this._marker && this._marker.length === 0)) {
                this._map.setZoom(13);
            }
            if (eut.COUNTRY == 'sk' && eut.findADealerData.dealerSite) {
                this._map.setZoom(13);
            }

        },

        destroy: function() {
            _removeMarkerCluster.call(this);
            google.maps.event.clearListeners(this._map);
            this._map.getDiv().innerHTML = '';
            delete mapInstance[this._map.id];
            this._map = null;
        }
    });


    /** =============== Static Const =============== */
    MapView.MARKER_CLICK = 'map-view:marker-click';
    MapView.MARKER_OVER = 'map-view:marker-over';
    MapView.MARKER_OUT = 'map-view:marker-out';
    MapView.CLUSTER_CLICK = 'map-view:cluster-click';
    MapView.CHANGE = 'map-view:change';
    MapView.ZOOMIN_CLICK = 'map-view:zoomin-click';
    MapView.ZOOMOUT_CLICK = 'map-view:zoomout-click';


    /** =============== Private Methods =============== */
    function _zoomControl(controlDiv, map, self) {
        // Creating divs & styles for custom zoom control
        controlDiv.style.padding = '5px';

        var zoomInButton = document.getElementById('csfZoomIn'),
            zoomOutButton = document.getElementById('csfZoomOut');

        // Setup the click event listener - zoomIn
        google.maps.event.addDomListener(zoomInButton, 'click', function() {
            map.setZoom(map.getZoom() + 1);
            self.dispatch(MapView.ZOOMIN_CLICK, { map: map });
        });

        // Setup the click event listener - zoomOut
        google.maps.event.addDomListener(zoomOutButton, 'click', function() {
            map.setZoom(map.getZoom() - 1);
            self.dispatch(MapView.ZOOMOUT_CLICK, { map: map });
        });
    }





    function _cteateMap(element) {
        if ($('.eut_charging_station_finder').length == 0) {
            this._map = new google.maps.Map(element, { zoom: this._options.zoom, scrollwheel: this._options.scrollwheel });
        } else {
            var mapStyle = [{
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": [{
                            "color": "#4e4e4e"
                        },
                        {
                            "weight": 0.5
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "stylers": [{
                        "color": "#f7f8f8"
                    }]
                },
                {
                    "featureType": "poi.medical",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f6e8e6"
                    }]
                },
                {
                    "featureType": "poi.medical",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "color": "#ee675c"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c9eec9"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "color": "#34a853"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#5aa370"
                    }]
                },
                {
                    "featureType": "poi.place_of_worship",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "color": "#ef685c"
                    }]
                },
                {
                    "featureType": "poi.sports_complex",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "color": "#34a853"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#b9b7b2"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#6d797d"
                    }]
                },
                {
                    "featureType": "transit.station.airport",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "color": "#1a73e8"
                    }]
                },
                {
                    "featureType": "transit.station.airport",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#4886db"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#7ccbe1"
                    }]
                }
            ]
            this._map = new google.maps.Map(element, { zoom: this._options.zoom, scrollwheel: true, zoomControl: false, streetViewControl: true, disableDefaultUI: false, styles: mapStyle, fullscreenControl: false, mapTypeControl: false ,gestureHandling: "greedy"});


            var zoomControlDiv = document.getElementById('csfZoomSection');
            var zoomControl = new _zoomControl(zoomControlDiv, this._map);
            var infoSection = document.getElementById('eut_info_section');
            var filterSection = document.getElementById('refine-search-section');
            zoomControlDiv.index = 1;
            this._map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);
            this._map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(infoSection);
            this._map.controls[google.maps.ControlPosition.TOP_LEFT].push(filterSection);
        }




        this._map.id = count++;
        mapInstance[this._map.id] = this._map;
        //_setCenter.call(this, DEFAULT_LOCATION['eu']); // use eut.COUNTRY for other options
        _setCenter.call(this, DEFAULT_LOCATION[eut.COUNTRY ]);
        if (this._dataProvider) { _updateDisplay.call(this); }
        if ($('.eut_charging_station_finder').length > 0) {
            MapView.DIRECTIONICON = icons.directionIcon;
            MapView.STARTICON = icons.startIcon;
        }
    }



    function _updateDisplay() {
        if (!this._dataProvider || this._dataProvider.length === 0) {
            _removeMarkerCluster.call(this);
            if (this.noDataCallback) {
                this.noDataCallback();
            } else {
                _setCenter.call(this, DEFAULT_LOCATION[eut.COUNTRY]);
                this._map.setZoom(this._options.zoom);
            }


            return;
        }
        var markers = _createMarker.call(this);
        var markerCluster = _createMarkerCluster.call(this, markers);
        this._markerCluster = markerCluster;
        if (this._options.fitBounds) {
            this.fitBounds();
        }
    }

    function _updateDisplayMarker() {
        var self = this,
            marker,
            markerIconPath,
            isChargingStation;
        if ($('.eut_charging_station_finder').length == 0) {
            isChargingStation = false;
        } else {
            isChargingStation = true;
            _.forEach(this._marker, function(marker) {
                marker.setMap(null);
                google.maps.event.clearInstanceListeners(marker);
                google.maps.event.clearListeners(marker, 'click');
                google.maps.event.clearListeners(marker, 'mouseover');
            });
        }
        this._marker = [];
        if (!this._dataProvider || this._dataProvider.length === 0) {
            //_removeMarkerCluster.call( this );
            if (this.noDataCallback) {
                this.noDataCallback();
            } else {
                _setCenter.call(this, DEFAULT_LOCATION[eut.COUNTRY]);
                this._map.setZoom(this._options.zoom);
            }


            return;
        }
        var markerPosition, markerIconPathHover, markerIconPathActive;
        for (var i = 0; i < this._dataProvider.length; i++) {
            if (isChargingStation) {
                markerPosition = new google.maps.LatLng(this._dataProvider[i].latitude, this._dataProvider[i].longitude),
                    markerIconPathHover, markerIconPathActive;
                    var locationObj = this._dataProvider[i];


                /*if(this._dataProvider[i].chargingFacilities === 'ac'){
                  markerIconPath = icons.normalAC;
                  markerIconPathHover = icons.normalACHover;
                  markerIconPathActive = icons.normalACActive;
                }
                else if(this._dataProvider[i].chargingFacilities === 'dc'){
                  markerIconPath = icons.normalDC;
                  markerIconPathHover = icons.normalDCHover;
                  markerIconPathActive = icons.normalDCActive;
                }
                else{
                  markerIconPath = icons.normalACDC;
                  markerIconPathHover = icons.normalACDCHover;
                  markerIconPathActive = icons.normalACDCActive;
                }*/

                // Draw marker that looks like a cluster with charge count.
                if (locationObj.isCluster) {
                    markerIconPath = icons.clusterCSF;
                    var markerIconPathHover = icons.clusterCSF;
                    var markerIconPathActive = icons.clusterCSF;

                    marker = new google.maps.Marker({
                        position: markerPosition,
                        map: this._map,
                        label: locationObj.chargePointCount.toString(),
                        icon: markerIconPath
                    });
                }
            } else {
                markerPosition = new google.maps.LatLng(this._dataProvider[i].dealerLatitude, this._dataProvider[i].dealerLongitude);
                markerIconPath = icons.normal;
                marker = new google.maps.Marker({
                    position: markerPosition,
                    map: this._map,
                    icon: markerIconPath
                });
            }

            marker.index = i;
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    if (!isChargingStation) {
                        if (self._selectedMarker) {
                            if (isChargingStation) {
                                self._selectedMarker.setIcon(self._selectedMarker.icon);
                            } else {
                                self._selectedMarker.setIcon(icons.normal);
                            }
                        }
                        self._selectedMarker = this;
                        self._selectedMarker.setIcon(icons.selected);
                    } else {

                        _
                        /*.forEach( self._markerCluster.markers_, function ( allmarker ) {
                                      if(allmarker.icon.url === icons.normalACActive.url) {
                                        allmarker.setIcon(icons.normalAC);
                                      }
                                      else if(allmarker.icon.url === icons.normalDCActive.url) {
                                        allmarker.setIcon(icons.normalDC);
                                      }
                                      else if(allmarker.icon.url === icons.normalACDCActive.url) {
                                        allmarker.setIcon(icons.normalACDC);
                                      }
                                      else {
                                        allmarker.setIcon(allmarker.icon);
                                      }
                                    });*/
                        if (this.icon.url === icons.normalAC.url || this.icon.url === icons.normalACHover.url) {
                            this.setIcon(icons.normalACActive);
                        } else if (this.icon.url === icons.normalDC.url || this.icon.url === icons.normalDCHover.url) {
                            this.setIcon(icons.normalDCActive);
                        } else if (this.icon.url === icons.normalACDC.url || this.icon.url === icons.normalACDCHover.url) {
                            this.setIcon(icons.normalACDCActive);
                        } else {
                            this.setIcon(this.icon);
                        }
                    }
                    self.dispatch(MapView.MARKER_CLICK, { index: this.index, marker: this });
                }
            })(marker, i));

            if ($('.eut_charging_station_finder').length > 0) {
                google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                    return function() {
                        if (this.icon.url === icons.normalAC.url) {
                            this.setIcon(icons.normalACHover);
                        } else if (this.icon.url === icons.normalDC.url) {
                            this.setIcon(icons.normalDCHover);
                        } else if (this.icon.url === icons.normalACDC.url) {
                            this.setIcon(icons.normalACDCHover);
                        } else {
                            this.setIcon(this.icon);
                        }
                        self.dispatch(MapView.MARKER_OVER, { index: this.index, marker: this });
                    }
                })(marker, i));

                google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
                    return function() {
                        if (this.icon.url === icons.normalACHover.url) {
                            this.setIcon(icons.normalAC);
                        } else if (this.icon.url === icons.normalDCHover.url) {
                            this.setIcon(icons.normalDC);
                        } else if (this.icon.url === icons.normalACDCHover.url) {
                            this.setIcon(icons.normalACDC);
                        } else {
                            this.setIcon(this.icon);
                        }
                        self.dispatch(MapView.MARKER_OUT, { index: this.index, marker: this });
                    }
                })(marker, i));
            }
            this._marker.push(marker);
        }

        if (this._options.fitBounds) {
            this.fitBounds();
        }
    }

    function _updateDisplayMarkerCSF() {
        var self = this,
            marker,
            markerIconPath,
            isChargingStation = true;
            
        _.forEach(this._marker, function(marker) {
            marker.setMap(null);
            google.maps.event.clearInstanceListeners(marker);
            google.maps.event.clearListeners(marker, 'click');
            google.maps.event.clearListeners(marker, 'mouseover');
        });
        this._marker = [];
        if (!this._dataProvider || this._dataProvider.length === 0) {
            _removeMarkerCluster.call(this);
            if (this.noDataCallback) {
                this.noDataCallback();
            } else {
                _setCenter.call(this, DEFAULT_LOCATION[eut.COUNTRY]);
                this._map.setZoom(this._options.zoom);
            }

            return;
        }

        for (var i = 0; i < this._dataProvider.length; i++) {
            var markerPosition = new google.maps.LatLng(this._dataProvider[i].latitude, this._dataProvider[i].longitude),
                markerIconPathHover,
                markerIconPathActive,
                locationObj = this._dataProvider[i];

            /*if(this._dataProvider[i].chargingFacilities === 'ac'){
              markerIconPath = icons.normalAC;
              markerIconPathHover = icons.normalACHover;
              markerIconPathActive = icons.normalACActive;
            }
            else if(this._dataProvider[i].chargingFacilities === 'dc'){
              markerIconPath = icons.normalDC;
              markerIconPathHover = icons.normalDCHover;
              markerIconPathActive = icons.normalDCActive;
            }
            else{
              markerIconPath = icons.normalACDC;
              markerIconPathHover = icons.normalACDCHover;
              markerIconPathActive = icons.normalACDCActive;
            }*/

            // Draw marker that looks like a cluster with charge count.

            if (locationObj.isCluster) {
                markerIconPath = icons.clusterCSF;
                markerIconPathHover = icons.clusterCSF;
                markerIconPathActive = icons.clusterCSF;

                marker = new google.maps.Marker({
                    position: markerPosition,
                    map: this._map,
                    label: {
                        text: locationObj.chargePointCount.toString(),
                        color: 'white'
                    },
                    icon: markerIconPath
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        self._selectedMarker = marker;
                        self.panToCurrentMarker(self.getMap().getZoom() + 1);
                        //self.dispatch(MapView.CLUSTER_CLICK, {index: this.index, marker: this});
                    }
                })(marker, i))
            }

            if (locationObj.isPool) {
                markerIconPath = icons.poolCSF;
                markerIconPathHover = icons.poolCSFActive;
                markerIconPathActive = icons.poolCSFActive;

                marker = new google.maps.Marker({
                    position: markerPosition,
                    map: this._map,
                    icon: markerIconPath,
                    label: {
                        text: locationObj.chargePointCount.toString(),
                        color: 'white',
                        fontSize: '12',
                        className: 'csf-pool_label'
                    },
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        self._selectedMarker = marker;
                        self.dispatch(MapView.MARKER_CLICK, { index: this.index, marker: this });
                    }
                })(marker, i))

                google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
                    return function() {
                        this.setIcon(markerIconPathHover);
                        self.dispatch(MapView.MARKER_OVER, { index: this.index, marker: this });
                    }
                })(marker, i));

                google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
                    return function() {
                        this.setIcon(this.icon);
                        self.dispatch(MapView.MARKER_OUT, { index: this.index, marker: this });
                    }
                })(marker, i));
            }
            marker.index = i;
            this._marker.push(marker);
        }

        this.fitBounds();
    }

    function _createMarker() {
        var markers = [];
        var marker;
        var self = this;
        var isChargingStation;
        if ($('.eut_charging_station_finder').length == 0) {
            isChargingStation = false;
        } else {
            isChargingStation = true;
        }
        _.forEach(this._dataProvider, function(item, index) {
            var latPosition,longPosition;
            var awardedDealer_icon;
            if (isChargingStation) {
                    latPosition = item.latitude;
                    longPosition = item.longitude;
                    var iconPath;
                if (item.chargingFacilities === 'ac') {
                     iconPath = icons.normalAC.url;
                } else if (item.chargingFacilities === 'dc') {
                     iconPath = icons.normalDC.url;
                } else {
                    iconPath = icons.normalACDC.url;
                }
                    awardedDealer_icon = {
                    url: iconPath,
                    size: new google.maps.Size(32, 32),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(29, 38),
                    scaledSize: new google.maps.Size(32, 32)
                };
            } else {
                    latPosition = item.dealerLatitude,
                    longPosition = item.dealerLongitude;
                    awardedDealer_icon = {
                    url: item.dealerAwardIconMapPath ? item.dealerAwardIconMapPath : icons.normal.url,
                    size: new google.maps.Size(58, 38),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(29, 38),
                    scaledSize: new google.maps.Size(58, 38)
                };
            }

            marker = new google.maps.Marker({
                position: { lat: parseFloat(latPosition), lng: parseFloat(longPosition) },
                icon: awardedDealer_icon,
                isAwarded: item.dealerAwardIconMapPath
            });
            marker.index = index;
            marker.chargePointCount = item.chargePointCount;
            google.maps.event.addListener(marker, 'click', function() {
                if (!isChargingStation) {
                    var awardedDealer_icon1 = awardedDealer_icon;
                    if (self._selectedMarker) {
                        if (self._selectedMarker.isAwarded) {
                            awardedDealer_icon1.url = self._selectedMarker.isAwarded;
                            self._selectedMarker.setIcon(awardedDealer_icon1);
                        } else {
                            if (isChargingStation) {
                                self._selectedMarker.setIcon(self._selectedMarker.icon);
                            } else {
                                self._selectedMarker.setIcon(icons.normal);
                            }
                        }
                    }

                    self._selectedMarker = this;
                    if (self._selectedMarker.isAwarded) {
                        awardedDealer_icon1.url = self._selectedMarker.isAwarded;
                        self._selectedMarker.setIcon(awardedDealer_icon1);
                    } else {
                        self._selectedMarker.setIcon(icons.selected);
                    }
                } else {
                    _.forEach(self._markerCluster.markers_, function(allmarker) {
                        if (allmarker.icon.url === icons.normalACActive.url) {
                            allmarker.setIcon(icons.normalAC);
                        } else if (allmarker.icon.url === icons.normalDCActive.url) {
                            allmarker.setIcon(icons.normalDC);
                        } else if (allmarker.icon.url === icons.normalACDCActive.url) {
                            allmarker.setIcon(icons.normalACDC);
                        } else {
                            allmarker.setIcon(allmarker.icon);
                        }
                    });
                    if (this.icon.url === icons.normalAC.url || this.icon.url === icons.normalACHover.url) {
                        this.setIcon(icons.normalACActive);
                    } else if (this.icon.url === icons.normalDC.url || this.icon.url === icons.normalDCHover.url) {
                        this.setIcon(icons.normalDCActive);
                    } else if (this.icon.url === icons.normalACDC.url || this.icon.url === icons.normalACDCHover.url) {
                        this.setIcon(icons.normalACDCActive);
                    } else {
                        this.setIcon(this.icon);
                    }
                }
                self.dispatch(MapView.MARKER_CLICK, { index: this.index, marker: this });
            });
            if (isChargingStation) {
                google.maps.event.addListener(marker, 'mouseover', function() {
                    if (this.icon.url === icons.normalAC.url) {
                        this.setIcon(icons.normalACHover);
                    } else if (this.icon.url === icons.normalDC.url) {
                        this.setIcon(icons.normalDCHover);
                    } else if (this.icon.url === icons.normalACDC.url) {
                        this.setIcon(icons.normalACDCHover);
                    } else {
                        this.setIcon(this.icon);
                    }
                    self.dispatch(MapView.MARKER_OVER, { index: this.index, marker: this });
                });
                google.maps.event.addListener(marker, 'mouseout', function() {
                    if (this.icon.url === icons.normalACHover.url) {
                        this.setIcon(icons.normalAC);
                    } else if (this.icon.url === icons.normalDCHover.url) {
                        this.setIcon(icons.normalDC);
                    } else if (this.icon.url === icons.normalACDCHover.url) {
                        this.setIcon(icons.normalACDC);
                    } else {
                        this.setIcon(this.icon);
                    }
                    self.dispatch(MapView.MARKER_OUT, { index: this.index, marker: this });
                });
            }
            markers.push(marker);

        });
        return markers;
    }

    function _createMarkerCluster(markers) {
        _removeMarkerCluster.call(this);
        var self = this;
        var markerCluster;
        if ($('.eut_charging_station_finder').length == 0) {
            markerCluster = new MarkerClusterer(this._map, markers, { styles: [icons.cluster] });
            markerCluster.setCalculator(function(markers, index) {
                return {
                    text: '<div class="eut_map_pin_point"><span class="num">' + self._options.clusterLabelFunction(markers) + '</span></div>',
                    index: index
                }
            });
        } else {
            //Markercluster not used for CSF
            markerCluster = {};
        }


        google.maps.event.addListener(markerCluster, 'clusterclick', function(cluster) {

            self.dispatch(MapView.CLUSTER_CLICK, { cluster: cluster });
        });
        this.dispatch(MapView.CHANGE);
        return markerCluster;
    }

    function _removeMarkerCluster() {
        if (!this._markerCluster) { return; }
        _.forEach(this._markerCluster.getMarkers(), function(marker) {
            marker.setMap(null);
            google.maps.event.clearInstanceListeners(marker);
        });
        google.maps.event.clearInstanceListeners(this._markerCluster);
        this._markerCluster.setMap(null);
        this._markerCluster.clearMarkers();
    }

    function _setCenter(location) {
        this._map.setCenter(location);
    }

    eut.MapView = MapView;
    eut.MapView.init = function() {
        icons = {
            normal: {
                url: logoImagePath + 'icon-kia-logo-pointer-1.png',
                size: new google.maps.Size(58, 38),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(58, 38)
            },
            selected: {
                url: logoImagePath + 'icon-kia-logo-pointer-black.png',
                size: new google.maps.Size(58, 38),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(58, 38)
            },
            cluster: {
                width: 58,
                height: 42,
                anchorIcon: [29, 42],
                url: logoImagePath + 'icon-kia-logo-pointer-2.png'
            },
            normalAC: {
                url: imagePath + 'btn_ac_default.svg',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(32, 32)
            },
            normalDC: {
                url: imagePath + 'btn_dc_default.svg',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(32, 32)
            },
            normalACDC: {
                url: imagePath + 'btn_ac-dc_default.svg',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(32, 32)
            },
            normalACHover: {
                url: imagePath + 'btn_ac_hover.svg',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(32, 32)
            },
            normalDCHover: {
                url: imagePath + 'btn_dc_hover.svg',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(32, 32)
            },
            normalACDCHover: {
                url: imagePath + 'btn_ac-dc_hover.svg',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(32, 32)
            },
            normalACActive: {
                url: imagePath + 'btn_ac_active.svg',
                size: new google.maps.Size(32, 42),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(32, 42)
            },
            normalDCActive: {
                url: imagePath + 'btn_dc_active.svg',
                size: new google.maps.Size(32, 42),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(32, 42)
            },
            normalACDCActive: {
                url: imagePath + 'btn_ac-dc_active.svg',
                size: new google.maps.Size(32, 42),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(29, 38),
                scaledSize: new google.maps.Size(32, 42)
            },
            directionIcon: {
                url: imagePath + 'icon-destination.svg',
                size: new google.maps.Size(24, 42),
                origin: new google.maps.Point(0, 0),
                //anchor: new google.maps.Point(10,1 0),
                scaledSize: new google.maps.Size(24, 42)
            },
            startIcon: {
                url: imagePath + 'csf/icon-start.svg',
                size: new google.maps.Size(24, 24),
                origin: new google.maps.Point(0, 0),
                //anchor: new google.maps.Point(10, 10),
                scaledSize: new google.maps.Size(24, 24)
            },
            clusterCSF: {
                width: 48,
                height: 48,
                //anchorIcon: [29, 42],
                scaledSize: new google.maps.Size(60, 60),
                url: imagePath + 'cluster.svg'
            },
            poolCSF: {
                width: 48,
                height: 48,
                scaledSize: new google.maps.Size(60, 60),
                url: imagePath + 'csf/button_pool.svg'
            },
            poolCSFActive: {
                width: 48,
                height: 48,
                scaledSize: new google.maps.Size(60, 60),
                url: imagePath + 'csf/button_pool-active.svg'
            }
        };

        google.maps.event.addDomListener(window, 'resize', function() {
            for (var id in mapInstance) {
                var map = mapInstance[id];
                var center = map.getCenter();
                google.maps.event.trigger(map, 'resize');
                map.setCenter(center);
            }
        });
    }
})(jQuery, _, eut);
/**
 * 360VR
 */
; (function ($, eut) {
  var VR = eut.Class.extend({
    FRAME: 23,//not the total pic number, the last pic number

        /**
         * @param {jQuery}  $container
         * @param {String}  defaultPath     default image path, ex) /aaa/bb-###.jpg
         */
        initialize: function ( $container, defaultPath ) {
            this._$container = $container;
            
            this._$img = $container.find( 'img' );
            this._$reelImg = $container.find( '.reel_img' );
            this._$reelImgBforeDisclaimer = $container.find( '.reel_img img' );
            this._$reelImgPTagBeforeDisclaimer = $container.find( '.reel_img p' );
            this._defaultPath = defaultPath;
            this._reelPreloader = [];//preloader is made after $btnStart Clicked
			this.changePath(defaultPath, true);
            this._addEvents();
        },

    /** =============== Public Methods =============== */
    /**
     * image path change
     * @param {String}      path        ex) /aaa/bb-###.jpg
     * @param {Boolean}     reset       frame reset
     * @return  {VR}
     */
    changePath: function (path, reset) {
      if(path)
      {
          if (this._isVrApply) 
          {
            this._$img.reel('images', path);
            if (reset) this._$img.reel('frame', 1);
            this._reelPreloader.show();
          }
          else 
          {
                  this._defaultPath = path;
                  if(this._$img.hasClass('lazy'))
                  {
                        this._$img.attr('data-src', this._getFirstImgName(path));
                      if(this._$img.hasClass('loaded')){
                        this._$img.attr('src',this._$img.attr('data-src'));
                      }
                  }
                  else{
                      this._$img.attr('src', this._getFirstImgName(path));
                  }
          }
      }
      else
      {
          this._$img.attr('src', 'none');
      }

      return this;
    },

    changeImgAlt: function (altText) {
      this._$img.attr('alt', altText);
    },


        changeTrimDisclaimer: function ( disclaimer ) {
            if(this._$container.find( ".trim-disclaimer" ).length > 0){
                this._$container.find( ".trim-disclaimer" ).remove();
            }
            var disclaimerHTML = "<p class='trim-disclaimer'>"+disclaimer+"</p>";
            if(disclaimer !==""){
                if(this._$reelImgPTagBeforeDisclaimer){
                    $(disclaimerHTML).insertAfter(this._$reelImgPTagBeforeDisclaimer );
                }else{
                    $(disclaimerHTML).insertAfter(this._$reelImgBforeDisclaimer );
                }

            }
            //this._$trimDisclaimer.text( disclaimer);
        },

    /** =============== Private Methods =============== */
    _initializeReel: function () {

        this._$img.addClass('reel').reel({
          cw: true,
          images: this._defaultPath,
          frames: this.FRAME,
          responsive: true,
          downUpArea: '#vr_area'//Area of the down, up event to get x,y position
        });

        this._isVrApply = true;
        this._reelPreloader = this._$container.find('.reel-preloader');
        this._$container.addClass('reel-start');
        $(".reel_img").find('img').height('100%');
    },
_checkvrAreaPresence: function () {

      if ($(".reel_img").find('img').width() != 0 && $(".reel_img").find('img').height() != 0 ) {//if the container is visible on the page

        this._initializeReel();

      } else {

        setTimeout(this._checkvrAreaPresence.bind(this), 50); //wait 50 ms, then try again
      }

    },


    _addEvents: function () {

      $(document).ready(this._checkvrAreaPresence(this));
		$(".reel_img").one('click', _.bind(function (e) {
        if (window.analyticsRecordFlag != true) {
          window.dtmDataLayer.page.event = '360-vr-view';
          window.dtmDataLayer.vehicle.section = $('.discover_nav_opener').text();
          window.dtmDataLayer.link.internal_link = '';
          eut.analytics.track('model_page');
          window.analyticsRecordFlag = true;
          

        }
      }));


    },

    //image name ### => 000
    _getFirstImgName: function (path) {
      return (path || '').replace(/([\#0-9]+)\.(jpg|jpeg|png|gif)$/i, function (str, f1, extension) {
        return $B.string.format(0, f1.length) + '.' + extension;//format( 0, <-- start from 0000.jpg
      });
    }
  });

  eut.common = eut.common || {};
  eut.common.VR = VR;
})(jQuery, eut);

; (function ($, _, eut) {

  $(window).load(function () {
    //var lazyLoadInstance =
    new LazyLoad({
      elements_selector: ".lazy"
      // ... more custom settings?
    });

  })

})(jQuery, _, eut);

/**
 * Form (Checkbox, Radio, placeholder, restrictInput, dateChooser) Cross Browsing jquery Plug-in
 */
(function($){
    $.fn.extend({
        /**
         * CheckBox jquery plug-in (support IE8)
         * @param   {String}  method
         *              "updated"
         *              "clear"
         * @returns {jQuery}
         */
        checkbox: function ( method ) {
            var pluginName = 'plugin-checkbox';

            if ( typeof method === 'string' ) {
                Plugin.callMethod( this, pluginName, method );
            } else {
                this.each( _.bind(function ( idx, el ) {
                    var $el = $( el );
                    if ( !Plugin.has($el, pluginName) ) {
                        Plugin.add( $el, pluginName, new CheckBox($el, pluginName) );
                    }
                }, this));
            }

            return this;
        },

        /**
         * Radio jquery plug-in (support IE8)
         * @param   {String}  method
         *              "updated"
         *              "clear"
         * @returns {jQuery}
         */
        radio: function ( method ) {
            var pluginName = 'plugin-radio';

            if ( typeof method === 'string' ) {
                Plugin.callMethod( this, pluginName, method );
            } else {
                this.each( _.bind(function ( idx, el ) {
                    var $el = $( el );
                    if ( !Plugin.has($el, pluginName) ) {
                        Plugin.add( $el, pluginName, new Radio($el, pluginName) );
                    }
                }, this));
            }

            return this;
        },

        /**
         * Placeholder jquery plug-in (support IE8)
         * @param   {String}  method
         *              "updated"
         *              "clear"
         * @returns {jQuery}
         */
        placeholder: function ( method ) {
            var pluginName = 'plugin-placeholder';

            if ( typeof method === 'string' ) {
                Plugin.callMethod( this, pluginName, method );
            } else {
                this.each( _.bind(function ( idx, el ) {
                    var $el = $( el );
                    if ( !Plugin.has($el, pluginName) ) {
                        Plugin.add( $el, pluginName, new Placeholder($el, pluginName) );
                    }
                }, this));
            }

            return this;
        },

        /**
         * Restrict input key
         * @param   {String | Object}  method | options
         *              "clear"
         *          {Object}  options
         *              {Boolean}    number
         * @returns {jQuery}
         */
        restrictInput: function ( method ) {
            var pluginName = 'plugin-restrict-input';

            if ( typeof method === 'string' ) {
                Plugin.callMethod( this, pluginName, method );
            } else {
                var options = typeof method === 'object'? method : {};
                this.each( _.bind(function ( idx, el ) {
                    var $el = $( el );
                    if ( !Plugin.has($el, pluginName) ) {
                        Plugin.add( $el, pluginName, new RestrictInput($el, pluginName, options) );
                    }
                }, this));
            }

            return this;
        },

        /**
         * DateChooser jquery plug-in
         * events: "change", "open", "close"
         * methods "clear"
         * @param   {Object, String}  options
         *    - {String}      dateFormat        default:'YYYY-MM-DD'
         *    - {String}      minDate           default:today, ex)'2017-11-10'
         *    - {String}      maxDate
         *    - {Boolean}     disableSunday     default:true
         *    - {Boolean}     disableSaturday
         *    - {String}      defaultDate       'today' or date, ex)'2017-01-07'
         * @returns {jQuery}
         */
        dateChooser: function ( options ) {
            var pluginName = 'plugin-datechooser';

            if ( typeof options === 'string' ) {
                Plugin.callMethod( this, pluginName, options );
            } else {
                this.each( _.bind(function ( idx, el ) {
                    var $el = $( el );
                    if ( !Plugin.has($el, pluginName) ) {
                        Plugin.add( $el, pluginName, new DateChooser($el, pluginName, options) );
                    }
                }, this));
            }

            return this;
        }
    });


    var Plugin = {
        pluginId: 1,
        pluginPool: {},

        add: function ( $el, pluginName, plugin ) {
            var id = this.pluginId++;
            $el.prop( pluginName, id );
            this.pluginPool[id] = plugin;
        },

        has: function ( $el, pluginName ) {
            var id = $el.prop( pluginName );
            return ( id )? true : false;
        },

        remove: function ( $el, pluginName ) {
            if ( this.has($el, pluginName) ) {
                var id = $el.prop( pluginName );
                delete this.pluginPool[id];
            }
        },

        callMethod: function ( $els, pluginName, method ) {
            $els.each( _.bind(function ( idx, el ) {
                var $el = $( el );

                if ( this.has($el, pluginName) ) {
                    var id = $el.prop( pluginName ),
                        plugin = this.pluginPool[id];

                    if ( typeof plugin[method] === 'function' ) {
                        plugin[method]();
                    }
                }
            }, this));
        }
    };


    /* ================================================== */
    /* ==================== CheckBox ==================== */
    /* ================================================== */

    var CheckBox = function ( $target, pluginName ) {
        var _$container = $target.parent(),
            _$checkbox = $target,
            _$label = _$container.find( 'label' );

        /* ==================== Public Methods ==================== */
        this.clear = function () {
            _$checkbox.off( 'click', clickHandler );
            Plugin.remove( $target, pluginName );
        };

        this.updated = function () {
            updateCheckbox();
        };

        /* ==================== Initialize ==================== */
        initialize();

        /* ==================== Protected Methods ==================== */

        function initialize () {
            updateCheckbox();
            _$checkbox.on( 'click', clickHandler );
        }

        function clickHandler (e) {
            updateCheckbox( true );
        }

        function updateCheckbox ( isToggle ) {
            if ( isToggle ) {
                if ( isDisabled() ) return;
                if ( !isChecked() ) {
                    _$label.removeClass( 'active' );
                    _$checkbox.attr( 'aria-checked', false );
                } else {
                    _$label.addClass( 'active' );
                    _$checkbox.attr( 'aria-checked', true );
                }
            } else {
                if ( isChecked() ) {
                    _$label.addClass( 'active' );
                    _$checkbox.attr( 'aria-checked', true );
                } else {
                    _$label.removeClass( 'active' );
                    _$checkbox.attr( 'aria-checked', false );
                }
            }

            if ( isDisabled() ) {
                _$label.addClass( 'disabled' );
            } else {
                _$label.removeClass( 'disabled' );
            }
        }

        function isDisabled () {
            return _$checkbox.is( ':disabled' );
        }

        function isChecked () {
            return _$checkbox.is( ':checked' );
        }
    };


    /* ================================================== */
    /* ==================== Radio    ==================== */
    /* ================================================== */

    var Radio = function ( $target, pluginName ) {
        var _$container = $target.parent(),
            _$radio = $target;

        /* ==================== Public Methods ==================== */
        this.clear = function () {
            _$radio.off( 'click', clickHandler );
            _$radio.off( 'focusin', focusHandler );
            Plugin.remove( $target, pluginName );
        };

        this.updated = function () {
            updateRadio();
        };

        /* ==================== Initialize ==================== */
        initialize();

        /* ==================== Protected Methods ==================== */

        function initialize () {
            //updateRadio();
            _$radio.on( 'click', clickHandler );
            _$radio.on( 'focusin', focusHandler );
        }

        function focusHandler (e) {
            $( e.currentTarget ).trigger( 'click' );
        }

        function clickHandler (e) {
            updateRadio( e.currentTarget );
        }

        function updateRadio ( clickEl ) {
            var name = _$radio.attr( 'name' );

            $( '.eut_form_plugin > input[type=radio][name=' + name + ']' ).each( function ( idx, el ) {
                var $radio = $( el ),
                    $label = $radio.siblings( 'label' );

                if ( clickEl ) {
                    if ( clickEl === el ) {
                        $label.addClass( 'active' );
                        $radio.attr( 'aria-checked', true );
                    } else {
                        $label.removeClass( 'active' );
                        $radio.attr( 'aria-checked', false );
                    }
                } else {
                    if ( $radio.is(':checked') ) {
                        $label.addClass( 'active' );
                        $radio.attr( 'aria-checked', true );
                    } else {
                        $label.removeClass( 'active' );
                        $radio.attr( 'aria-checked', false );
                    }
                }

                if ( $radio.is(':disabled') ) {
                    $label.addClass( 'disabled' );
                } else {
                    $label.removeClass( 'disabled' );
                }
            });
        }
    };

    /* ===================================================== */
    /* ==================== RestrictInput ==================== */
    /* ===================================================== */

    var RestrictInput = function ( $target, pluginName, options ) {
        var _$target = $target;
        var _options = options || {};


        /* ==================== Public Methods ==================== */
        this.clear = function () {
            _$target.off( 'keydown', keyHandler );
            Plugin.remove( $target, pluginName );
        };

        /* ==================== Initialize ==================== */
        initialize();

        /* ==================== Protected Methods ==================== */

        function initialize () {
            _$target.on( 'keydown', keyHandler );
        }

        function keyHandler (e) {
            if ( !isPermissionKeyCode(e.which) ) {
                e.preventDefault();
                e.stopPropagation();
            }
        }


        function isPermissionKeyCode ( keyCode ) {
            if ( $B.ua.ANDROID || $B.ua.MOBILE_IOS ) {
                return true;
            } else {
                if ( _options.number ) {
                    //Number, Controll, -, .
                    //-, .(keyCode == 189 || keyCode == 109) || (keyCode == 190 || keyCode == 110)
                    return ( isNumberKey(keyCode) || isControllKey(keyCode)  );
                } else {
                    return true;
                }
            }
        }

        function isNumberKey ( keyCode ) {
            return ( keyCode > 47 && keyCode < 58 ) || ( keyCode > 95 && keyCode < 106 )
        }

        function isArrowKey ( keyCode ) {
            return ( keyCode == 37 || keyCode == 40 || keyCode == 38 || keyCode == 39 );
        }

        function isEnterKey ( keyCode ) {
            return ( keyCode == 13 );
        }

        function isControllKey ( keyCode ) {
            //Backspace, Delete, Tab, Shift, enter, Arrow
            return keyCode == 8 || keyCode == 9 || keyCode == 16 || keyCode == 46 || isEnterKey(keyCode) || isArrowKey(keyCode);
        }
    };


    /* ===================================================== */
    /* ==================== Placeholder ==================== */
    /* ===================================================== */

    var Placeholder = function ( $target, pluginName ) {
        var _$container = $target.parent(),
            _$input = $target,
            _$label = _$container.find( '[for='+ _$input.attr('id') +']' );

        var _placeholder = '';

        /* ==================== Public Methods ==================== */
        this.clear = function () {
            _$label.off( 'click', clickHandler );
            _$input.off( 'focusin focusout change', updateInput );
            Plugin.remove( $target, pluginName );
            _$input.attr( 'placeholder', _placeholder );
            _$label.css( 'cursor', '' );
            _$input.restrictInput( 'clear' );
        };

        this.updated = function () {
            updateInput();
        };

        /* ==================== Initialize ==================== */
        initialize();

        /* ==================== Protected Methods ==================== */

        function initialize () {
            _placeholder = _$input.attr( 'placeholder' );
            _$label.text( _placeholder );
            _$input.removeAttr( 'placeholder' );

            updateInput();

            _$input.on( 'focusin focusout change', updateInput );
            _$label.on( 'click', clickHandler );
            _$label.css( 'cursor', 'text' );

            var inputType = _$input.attr( 'type' );

            //input type="number"
            if ( /^number$/i.test(inputType) ) {
                _$input.restrictInput({number: true});
            }
        }

        function clickHandler (e) {
            _$input.focus();
        }

        function updateInput (e) {
            var value = _$input.val();

            if ( e && e.type === 'focusin' ) {
                _$label.hide();
                _$label.parent().addClass('focused');
            } else {
                if ( value || value === 0 ) {
                    _$label.hide();
                    _$label.parent().addClass('focused');
                } else {
                    _$label.show();
                    _$label.parent().removeClass('focused');
                }
            }
        }
    };

    /* ===================================================== */
    /* ==================== DateChooser ==================== */
    /* ===================================================== */

    var DateChooser = function ( $target, pluginName, options ) {
        var _options = options || {},
            _$target = $target,
            _$input = _$target.find( '.date_chooser_input' ),
            _$btn = _$target.find( '.date_chooser_btn' );

        var _dateChooser,
            _currentDate = '';


        /* ==================== Public Methods ==================== */
        this.clear = function () {
            Plugin.remove( $target, pluginName );
            _$input.val( '' );
            _$btn.off( 'click', clickHandler );
            _$input.off( 'click', clickHandler );

            if ( _dateChooser ) {
                _dateChooser.removeListener();
                _dateChooser = null;
            }
        };

        /* ==================== Initialize ==================== */
        initialize();

        /* ==================== Protected Methods ==================== */

        function initialize () {
            var format = _options.dateFormat || 'YYYY-MM-DD',
                defaultDate = ( _options.defaultDate )? (_options.defaultDate === 'today'? moment().format(format) : moment(_options.defaultDate).format(format)) : '',
                options = eut.common.extend( _options, {
                    appendTarget: _$input.parent(),
                    defaultDate: defaultDate
                });

            _dateChooser = new eut.DateChooser( options );
            _dateChooser.addListener( 'select-date', function (e) {
                var oldDate = _currentDate;
                _currentDate = moment( e.date ).format( format );
                _$input.val( _currentDate );

                if ( oldDate !== _currentDate ) {
                    _$target.triggerHandler( {type: 'change', date: _currentDate} );
                }
            });

            _dateChooser.addListener( 'open', openHandler );
            _dateChooser.addListener( 'close', openHandler );
            _$btn.on( 'click', clickHandler );
            //_$input.on( 'click', clickHandler );

            if ( defaultDate ) {
                _currentDate = defaultDate;
                _$input.val( _currentDate );
            }
        }

        function openHandler (e) {
            _$target.triggerHandler( {type: e.type, date: _currentDate} );
        }

        function clickHandler (e) {
            _dateChooser.open({
                defaultDate: _$input.val()
            });
        }
    };



    $( document ).ready( function (e) {
        $( '.eut_form_plugin > input:checkbox' ).checkbox();
        $( '.eut_form_plugin > input:radio' ).radio();
        $( '.eut_form_plugin > input[placeholder], .eut_form_plugin > textarea[placeholder]' ).placeholder();
    });

})(jQuery);

/**
 * Incompatible device check (URL redirection)
 */
;(function( $B, eut ) {

    var incompatibleAgree = eut.common.getCookie( 'incompatible_agree' );

    if ( !incompatibleAgree && eut.INCOMPATIBLE_PAGE && typeof eut.INCOMPATIBLE_PAGE === 'string' ) {
        var url = ( /^\//.test(eut.INCOMPATIBLE_PAGE) )? location.pathname : location.href;

        if ( url !== eut.INCOMPATIBLE_PAGE ) {
            var ua = navigator.userAgent,
                isSafari = /safari/i.test( ua ) && !/chrome/i.test( ua ) && !/linux/i.test( navigator.platform );

            //Opera(Windows, OSX), Safari for Windows, ~IE9
            if ( ($B.ua.OPERA && ($B.ua.WINDOWS || $B.ua.MAC)) || (isSafari && $B.ua.WINDOWS) || $B.ua.DOC_MODE_IE10_LT ) {
                location.replace( eut.INCOMPATIBLE_PAGE );
            }
        }
    }

})( ixBand, eut );
/**
* Angular Common Service Module
*/
; (function (ng, _, modal, responsive, common) {

  var locresult;
  var getJsonData;
  var isAutocomplete;

  var nFetch = function (url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest;
      xhr.abort()
      xhr.open("GET", url)
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(new JSONResponse(xhr.response));
        } else {
          reject(xhr.statusText);
        }
      }
      xhr.onerror = function () {
        return reject(xhr.statusText)
      }
      xhr.send()
    }
    )
  }

  var JSONResponse = function (response) {
    this.response = response;
  };

  JSONResponse.prototype.json = function () {
    var self = this;
    return new Promise(function (resolve, reject) {
      resolve(JSON.parse(self.response));
    })
  };

  var buildQueryString = function (params) {
    var queryStringParts = [];
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        var value = params[key];
        queryStringParts.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(value))
      }
    }
    return queryStringParts.join("&")
  }

  var Service = {

    validate: function () {
      var rules = eut.Rules;
      rules.validateForm = function (form) {
        var result = true;
        _.each(form, function (item) {
          if (!_.isObject(item)) { return; }
          if (item.isInput || item.isSelect) {
            item.$valid2 = item.$valid;
            item.$invalid2 = item.$invalid;
            if (!item.$invalid2) {
              for (var prop in item.$error) {
                if (item.$error[prop]) {
                  item.$invalid2 = true;
                  break;
                }
              }
            }

            if (item.updateView) { item.updateView(); }
            if (result && item.$invalid2) {
              result = false;
              return false;
            }
          }
        });
        return result;
      };
      return rules;
    },

    formatter: function () {
      return {
        currency: function (value) {
          if (!value) { return; }
          return eut.common.currencyFormat(value);
        },

        number: function (value) {
          if (!value) { return; }
          return $B.string.numberFormat(value);
        },


        currencyToNumber: function (value) {
          /*
          if( !value ){ return; }
          var isEuroFormat = _.contains( ['EUR', 'GBP'], eut.CURRENCY );
          var result;
          if( isEuroFormat ){
              result = value.replace( /[.,]/g, function ( str ) {
                  return ( str === ',' )? '.' : '';
              });
          }else{
              result = value.replace( /[,]/g, '');
          }
          */
          return eut.common.currencyFormat(value);
        }
      }
    },

    templateManager: function ($templateCache) {
      return {
        get: function (compName, tplName, countryCode, extCode) {
          var base = '';
          if (countryCode && !extCode) {
            if (countryCode.indexOf('eutspec/') !== -1) {
              base = countryCode + '/clientlib/template/';
            } else {
              base = 'eutspec/' + countryCode + '/clientlib/template/';
            }
          } else if (extCode) {
            base = 'eutSpec/clientlib/' + countryCode + '/template/';
          }
          else {
            base = 'eut/clientlib/template/';
          }
          return $templateCache.get(base + compName + '/' + tplName + '.tpl.html');
        }
      };
    },

    responsive: function ($rootScope) {
      return {
        addListener: function (type, callback, scope) {
          responsive.addListener(type, function (data) {
            var needApply = callback(data);
            if (!scope) { scope = $rootScope; }
            if (needApply !== false && scope.$$phase === null) { scope.$apply(); }
          });
        },
        removeListener: function (type, callback) { responsive.removeListener(type, callback); },
        hasListener: function (type, callback) { responsive.hasListener(type, callback); },
        dispatch: function (type, datas) { responsive.dispatch(type, datas); },
        getResponsiveWidthType: function () { return responsive.getResponsiveWidthType(); },
        getResponsiveHeightType: function () { return responsive.getResponsiveHeightType(); }
      }
    },

    modal: function ($compile, $interpolate, $rootScope) {
      return {
        open: function (contents, data, option) {
          var scope = ng.extend($rootScope.$new(), data),
            ngContents = $interpolate(contents)(scope),
            ngElement = $compile(ngContents)(scope).one('$destroy', function () {
              scope.$destroy();
            });

          option.isNg = true;
          option.isAfterShow = true;
          return modal.open(ngElement, option);
        }
      }
    },

    stepViewItemCreator: function () {
      return {
        create: function (options, link, template, controller, compile) {
          var instance = { replace: true, restrict: 'AE', scope: false };
          if (arguments.length === 1 && typeof options === 'function') {
            instance.link = options;
          } else {
            if (options.link) { instance.link = options.link; }
            if (options.controller) { instance.controller = options.controller; }
            if (options.compile) { instance.compile = options.compile; }
            if (options.template) { instance.template = options.template; }
            if (options.require) { instance.require = options.require; }
            if (options.controllerAs) { instance.controllerAs = options.controllerAs; }
          }
          return instance;
        }
      }
    },

    dealerService: function (geocoder, $q) {
      return {

        getReevoo: function (id) {
          var defer = $q.defer();
          eut.ServiceApi.dealer({ program: 'reevooInfo', dealerExternalId: id })
            .done(function (data) { defer.resolve(data); })
            .fail(function () { defer.reject(); });
          return defer.promise;
        },

        search: function (options, isAutocompleteDrop) {
          isAutocomplete = isAutocompleteDrop;
          var defer = $q.defer();
          var startLocation = {};
          var dealersCount;
          var searchByKeyword;

          var prependHTTPIfMissing = function prependHTTPIfMissing(url) {
            if (url && url.indexOf('http://') === -1 && url.indexOf('https://')) {
              return 'http://' + url;
            }

            return url;
          };

          var getDealers = function (result) {
            if (!result) {

              return;
            }
            //startLocation = new google.maps.LatLng(result.lat, result.lng);
            startLocation = result.postalCodeDetail;
            if (!options.searchByKeyword && result.searchByKeyword) {
              var defer = $q.defer();
              defer.resolve({ list: [], length: 0 });
              return defer.promise;
            }

            options.locale = eut.LOCATION;
            searchByKeyword = options.searchByKeyword && result.searchByKeyword;

            if (searchByKeyword) {
              delete options.latitude;
              delete options.longitude;
            } else {
              options.latitude = result.lat;
              options.longitude = result.lng;
              delete options.keyword;
            }

            options.program = options.program || 'find';
            options.distanceType = (eut.findADealerData && eut.findADealerData.radiusType) || 'K';


            options.postalCodeDetail = result.postalCodeDetail;

            return eut.ServiceApi.dealer(options);
          };

          var getDistances = function (dealers) {

            if (searchByKeyword) {
              var defer = $q.defer();
              defer.resolve(dealers.list);
              return defer.promise;
            }

            dealersCount = dealers ? dealers.total : 0;
            if (!dealers) {
              dealers = {}
            }

            var promises = [];
            var dealerLocations = [];
            _.each(dealers.list, function (dealer, index) {
              dealer.websiteUrl = prependHTTPIfMissing(dealer.websiteUrl);
              dealer.serviceBookingUrl = prependHTTPIfMissing(dealer.serviceBookingUrl);
              dealer.contactDealerUrl = prependHTTPIfMissing(dealer.contactDealerUrl);

              //dealer.services = dealer.dealerServiceType.split(',');
              if (dealer.dealerServiceType == null) {
                dealer.services = false;
              }
              else {
                dealer.services = dealer.dealerServiceType.split(',');
              }
              var dealerLocation = new google.maps.LatLng(dealer.dealerLatitude, dealer.dealerLongitude);

              dealerLocations.push(dealerLocation);
            });

            var i, j, dealersTempArray, locationsTempArray, chunk = 25;
            if (dealers.list) {
              for (i = 0, j = dealers.list.length; i < j; i += chunk) {
                dealersTempArray = dealers.list.slice(i, i + chunk);
                locationsTempArray = dealerLocations.slice(i, i + chunk);
                promises.push(geocoder.getDistance(startLocation, locationsTempArray, dealersTempArray));
              }
            }

            return $q.all(promises);
          };

          geocoder.location(options, isAutocomplete)
            .then(getDealers)
            .then(getDistances)
            .then(function (dealerArrays) {
              var concatenatedArray = [].concat.apply([], dealerArrays);
              var result = {}
              result.total = dealersCount;
              result.list = _.sortBy(concatenatedArray, 'distanceValue');

              if (options.maxDealers) {
                result.list = result.list.slice(0, options.maxDealers)
              }

              if (!searchByKeyword && options.distance) {
                result.list = _.filter(result.list, function (dealer) {
                  return Math.round(dealer.distanceValue / 100) / 10 <= options.distance;
                });
              }

              defer.resolve(result);
            });

          return defer.promise;
        }
      }
    },

    geocoder: function ($q) {

      var countyMap = {
        SK: 'Slovakia',
        FR: 'France',
        ES: 'spain',
        IT: 'italia',
        DE: 'Germany',
        NL: 'Netherlands',
        AT: 'Austria',
        BE: 'Belgium',
        LU: 'Luxemburg',
        HU: 'Hungary',
        PL: 'Poland',
        SE: 'Sweden',
        FL: 'Finland',
        NO: 'Norway',
        IE: 'Ireland',
        DK: 'Denmark'
      };

      //Added this code for expetional usecase for milano city as it is not working with country restriction filter || KWCMSLIVE-3450
      var exceptionalCity = ['milano'];

      return {

        getCountry: function (code) {
          var result = countyMap[code];
          if (result) { return result; }
          else { return ''; }
        },

        searchLocalitiesData: function (input) {
          var projectKey = "woos-d9a39f27-87af-30e4-bd68-a89b0e6a5d89";
          if (window.location.host.includes("kia.com") || window.location.hostname == "10.122.24.47" || window.location.hostname == "10.122.24.45" || window.location.hostname == "10.122.24.46" || window.location.hostname == "10.122.24.139" || window.location.hostname == "10.122.46.91" || window.location.hostname == "10.122.46.92" || window.location.hostname == "10.122.46.188")
            projectKey = "woos-d9a39f27-87af-30e4-bd68-a89b0e6a5d89";
          else
            projectKey = "woos-738ca483-9411-35c2-9d56-2a636bf3c1c9";
          var args = {
            key: projectKey,
            input: input,
            types: 'postal_code|admin_level|locality',
            data: 'advanced',
            language: window.eut.LANGUAGE,
            components: window.eut.COUNTRY == 'fr' ? 'country:fr|country:mc' : 'country:' + window.eut.COUNTRY
          };
          if (window.eut.reservationDealerSelectionData && window.eut.reservationDealerSelectionData.formList.hideWoosParam) {
            delete args.language;
            delete args.components;
          }
          return nFetch("https://api.woosmap.com/localities/autocomplete/?"
            + buildQueryString(args)).then(function (response) {
              response.json().then(function (data) {
                getJsonData = data;
              })
              return response.json();
            })
        },

        countryFilterRequired: function (keyword) {
          if (keyword) {
            //For numeric postcode and some exceptional cities
            if (isNaN(keyword) && !(exceptionalCity.indexOf(keyword.toLowerCase()) > -1)) {
              return true;
            } else {
              return false;
            }
          }
          return true;
        },

        getDKLocation: function (keyword) {
          var d1 = $q.defer();
          var d2 = $q.defer();
          var d3 = $q.defer();
          var resultDeferred = $q.defer();
          var geocoder = new google.maps.Geocoder();
          var _self = this;
          geocoder.geocode({ address: keyword, componentRestrictions: { 'country': 'DK' } }, function (results) { d1.resolve(results); });
          geocoder.geocode({ address: keyword, componentRestrictions: { 'country': 'GL' } }, function (results) { d2.resolve(results); });
          geocoder.geocode({ address: keyword, componentRestrictions: { 'country': 'FO' } }, function (results) { d3.resolve(results); });

          $q.all([d1.promise, d2.promise, d3.promise]).then(function (data) {
            var results;
            var locations = [];
            var r1 = data[0];
            var r2 = data[1];
            var r3 = data[2];
            if (r1[0] && !_self.isCorectResult(r1[0].address_components)) {
              r1 = [];
            }
            if (r2[0] && !_self.isCorectResult(r2[0].address_components)) {
              r2 = [];
            }
            if (r3[0] && !_self.isCorectResult(r3[0].address_components)) {
              r3 = [];
            }
            //results = r1.concat(r2).concat(r3);
            if (r1 && r1[0] && r1[0].partial_match === true &&
              r2 && r2[0] && r2[0].partial_match === true &&
              r3 && r3[0] && r3[0].partial_match === true) {
              if (r1[0].address_components[0].short_name === 'DK' &&
                r2[0].address_components[0].short_name === 'GL' &&
                r3[0].address_components[0].short_name === 'FO') {
                resultDeferred.resolve({ searchByKeyword: true, lat: 0, lng: 0 });
                return;
              }
              results = r1.concat(r2).concat(r3);
            }
            if (r1 && r1[0] && typeof r1[0].partial_match === 'undefined') {
              if (!results) {
                results = [];
              }
              results = results.concat(r1);
            }
            if (r2 && r2[0] && typeof r2[0].partial_match === 'undefined') {
              if (!results) {
                results = [];
              }
              results = results.concat(r2);
            }
            if (r3 && r3[0] && typeof r3[0].partial_match === 'undefined') {
              if (!results) {
                results = [];
              }
              results = results.concat(r3);
            }
            if (results && results.length > 1) {
              _.each(results, function (locationResult) {
                locations.push(locationResult);
              });
            } else {
              if (results) {
                locations.push(results[0]);
              }/* else if(r1[0] && !r2[0] && !r3[0]){
                            results = r1;
                            locations.push( r1[0] );
                        } else if(!r1[0] && r2[0] && !r3[0]){
                            results = r2;
                            locations.push( r2[0] );
                        } else if(!r1[0] && !r2[0] && r3[0]){
                            results = r3;
                            locations.push( r3[0] );
                        }*/
            }

            if (results) {
              var location = locations.pop().geometry.location;
              locresult = {
                searchByKeyword: false,
                lat: location.lat(),
                lng: location.lng()
              };
            } else {
              locresult = {
                searchByKeyword: true,
                lat: 0,
                lng: 0
              }
            }
          });

          return resultDeferred.promise;
        },

        location:(async function (optionsData, isAutocomplete) {
          var keyword = optionsData.keyword;
          var defer = $q.defer(),
            geocoder = new google.maps.Geocoder(),
            countryCode = window.eut.COUNTRY.toUpperCase(),
            country = this.getCountry(countryCode),
            option = { address: keyword + ' ' + country },
            _self = this;
          if (!optionsData.searchByKeyword && $('.findADealer').length > 0) {
            defer.resolve({
              searchByKeyword: false,
              lat: optionsData.latitude,
              lng: optionsData.longitude
            });
            return defer.promise;
          }
          if (optionsData.isSuggested && $('.findADealer').length > 0) {
            defer.resolve({
              searchByKeyword: true,
              lat: optionsData.latitude,
              lng: optionsData.longitude
            });
            return defer.promise;
          }
          if (countryCode === 'EU') {
            countryCode = 'SK';
          } else if (countryCode === 'FL') {
            countryCode = 'FI'; //Finland
          }

          if (this.countryFilterRequired(keyword)) {
            option.componentRestrictions = { 'country': countryCode };
          }

          if (countryCode === 'DK') {
            _self.getDKLocation(keyword);

            setTimeout(function () {
              defer.resolve(locresult);
            }, 2000);
          } else {
            var queryLocalities = function (input) {
             return _self.searchLocalitiesData(input);
            }
            if (isAutocomplete == false || eut.COUNTRY != "ie") {
              var ql = queryLocalities(keyword);
              var ddresolve = ql.then(async function (data) {
              var detailsRes = [];
              var projectKey = "woos-d9a39f27-87af-30e4-bd68-a89b0e6a5d89";
          if (data.localities && data.localities.length) {
            if (window.location.host.includes("kia.com") || window.location.hostname == "www.kia.com" || window.location.hostname == "10.122.24.47" || window.location.hostname == "10.122.24.45" || window.location.hostname == "10.122.24.46")
              projectKey = "woos-d9a39f27-87af-30e4-bd68-a89b0e6a5d89";
            else
              projectKey = "woos-738ca483-9411-35c2-9d56-2a636bf3c1c9";
            var args = {
              key: projectKey,
              public_id: data.localities[0].public_id,
            };
            var detailQueryParams = buildQueryString(args);
            var detailsData = await fetch("https://api.woosmap.com/localities/details?" + detailQueryParams).then(res => res.json());
            detailsRes = detailsData.result;
          }

          var postCodeDetails;
          if (window.eut.reservationDealerSelectionData && window.eut.reservationDealerSelectionData.formList.hideWoosParam) {
            postCodeDetails = data.localities;
          }
          if (window.eut.COUNTRY == 'gr' || window.eut.COUNTRY == 'ie') {
            postCodeDetails = data.localities;
          }
          else {
            postCodeDetails = data.localities.filter(function (locality) { return (keyword.toLowerCase().indexOf(locality.name.toLowerCase()) > -1) });
          }

          if (postCodeDetails.length) {
            defer.resolve({
              searchByKeyword: !_self.isLocation(postCodeDetails[0]),
              lat: detailsRes.geometry.location.lat,
              lng: detailsRes.geometry.location.lng,
              postalCodeDetail: postCodeDetails[0]
            });

          } else {
            defer.resolve({
              searchByKeyword: true,
              lat: 0,
              lng: 0
            });
          }
              });
            } else {
            var data = getJsonData;
            var detailsRes = [];
            var projectKey = "woos-d9a39f27-87af-30e4-bd68-a89b0e6a5d89";
          if (data.localities && data.localities.length) {
            if (window.location.host.includes("kia.com") || window.location.hostname == "www.kia.com" || window.location.hostname == "10.122.24.47" || window.location.hostname == "10.122.24.45" || window.location.hostname == "10.122.24.46")
              projectKey = "woos-d9a39f27-87af-30e4-bd68-a89b0e6a5d89";
            else
              projectKey = "woos-738ca483-9411-35c2-9d56-2a636bf3c1c9";
            var args = {
              key: projectKey,
              public_id: data.localities[0].public_id,
            };
            var detailQueryParams = buildQueryString(args);
            var detailsData = await fetch("https://api.woosmap.com/localities/details?" + detailQueryParams).then(res => res.json());
            detailsRes = detailsData.result;
          }

          var postCodeDetails;
          if (window.eut.reservationDealerSelectionData && window.eut.reservationDealerSelectionData.formList.hideWoosParam) {
            postCodeDetails = data.localities;
          }
          if (window.eut.COUNTRY == 'gr') {
            postCodeDetails = data.localities;
          }
          else {
            postCodeDetails = data.localities.filter(function (locality) { return (keyword.toLowerCase().indexOf(locality.name.toLowerCase()) > -1) });
          }

          if (postCodeDetails.length) {
            defer.resolve({
              searchByKeyword: !_self.isLocation(postCodeDetails[0]),
              lat: detailsRes.geometry.location.lat,
              lng: detailsRes.geometry.location.lng,
              postalCodeDetail: postCodeDetails[0]
            });

          } else {
            defer.resolve({
              searchByKeyword: true,
              lat: 0,
              lng: 0
            });
          }
            }


          }
          return defer.promise;
        }),

        isLocation: function (types) {
          var countryCode = window.eut.COUNTRY.toLowerCase();
          if (countryCode == 'nl') {
            if ((_.contains(types, 'locality') || _.contains(types, 'sublocality') || _.contains(types, 'postal_code'))) {
              return true;
            }
          }
          else {
            if (_.contains(types, 'locality') || _.contains(types, 'street_address') || _.contains(types, 'sublocality') || _.contains(types, 'country') || _.contains(types, 'postal_code') || _.contains(types, 'establishment') || _.contains(types, 'natural_feature') || _.contains(types, 'admin_level')) {
              return true;
            }
          }
          var locationTypes = types.filter(function (type) {
            return type.match('administrative_area') || type === 'political';
          });
          return locationTypes.length > 1;
        },

        isCorectResult: function (address_components) {
          for (var i in address_components) {
            if (this.isLocation(address_components[i].types)) {
              return true;
            }
          }
        },
        getDistance: function (start, dealerLocations, dealers) {
          var defer = $q.defer();
          var dealerLatLongString = "";
          dealers.forEach(function (dealer, index) {
            if (dealers.length - 1 == index) {
              dealerLatLongString += dealer.dealerLatitude + "," + dealer.dealerLongitude;
            } else {
              dealerLatLongString += dealer.dealerLatitude + "," + dealer.dealerLongitude + "|";
            }
          });
          var origins = start.location.lat + "," + start.location.lng
          var projectKey = "woos-d9a39f27-87af-30e4-bd68-a89b0e6a5d89";
          if (window.location.host.includes("kia.com") || window.location.hostname == "10.122.24.47" || window.location.hostname == "10.122.24.45" || window.location.hostname == "10.122.24.46" || window.location.hostname == "10.122.24.139" || window.location.hostname == "10.122.46.91" || window.location.hostname == "10.122.46.92" || window.location.hostname == "10.122.46.188")
            projectKey = "woos-d9a39f27-87af-30e4-bd68-a89b0e6a5d89";
          else
            projectKey = "woos-738ca483-9411-35c2-9d56-2a636bf3c1c9";
          var args = {
            key: projectKey,
            origins: origins,
            destinations: dealerLatLongString,
            units: 'metric',
            language: window.eut.LANGUAGE,
            mode: 'driving',
            elements: 'duration_distance'
          };
          var distanceAPI = nFetch("https://api.woosmap.com/distance/distancematrix/json?"
            + buildQueryString(args)).then(function (response) {
              return response.json()
            })



          var dresolve = distanceAPI.then(function (data) {
            var calculatedDistances = data.rows[0].elements;
            _.each(calculatedDistances, function (distance, index) {
              if (distance) {
                dealers[index].time = distance.duration.value;
                dealers[index].timeText = distance.duration.text;
                dealers[index].distance = distance.distance.text.split(' ')[0];
                dealers[index].distanceValue = distance.distance.value;
                dealers[index].distanceText = distance.distance.text;
              }
            });
            defer.resolve(dealers);
          })
          /* var options = {
             origins: [start],
             destinations: dealerLocations,
             travelMode: google.maps.TravelMode.DRIVING,
             unitSystem: google.maps.UnitSystem.METRIC,
             avoidHighways: false,
             avoidTolls: false
           };
 
           var bindDistancesCallback = function (dealers) {
 
             return function (response, status) {
               if (status !== google.maps.DistanceMatrixStatus.OK) {
                 if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
                   setTimeout(function () {
                     service.getDistanceMatrix(options, bindDistancesCallback(dealers));
                   }, 500);
                 }
               } else {
                 var calculatedDistances = response.rows[0].elements;
                 _.each(calculatedDistances, function (distance, index) {
                   if(distance && distance.status != "ZERO_RESULTS"){
                     dealers[index].time = distance.duration.value;
                     dealers[index].timeText = distance.duration.text;
                     dealers[index].distance = distance.distance.text.split(' ')[0];
                     dealers[index].distanceValue = distance.distance.value;
                     dealers[index].distanceText = distance.distance.text;
                   }
                 });
 
                 defer.resolve(dealers);
               }
             }
           }
           service.getDistanceMatrix(options, bindDistancesCallback(dealers));*/

          return defer.promise;
        }
      }
    }
  };


  common.angular = common.angular || {};
  common.angular.service = Service;
})(angular, _, eut.modal, eut.responsive, eut.common);

/**
 * Angular Common Directive Module
 */
;
(function(ng, _, $, modal, responsive, common) {

    var Directive = {
        format: function(validate, $timeout, $rootScope) {
            function noRequiredBehavior(model, modelValue, updateFunction) {
                if ($.trim(modelValue).length === 0) {
                    if ($.trim(modelValue).length === 0) {
                        if (model.$pristine) {
                            return true;
                        } else {
                            model.$pristine = true;
                            updateFunction(true);
                            return true;
                        }
                    }
                }
            }

            function updateView(model, element, rightClass, wrongClass) {
                return function(valid, error) {
                    var $error = (error ? error : '');
                    model.$invalidSize = false;
                    model.$invalidType = false;
                    model.$duplicate = false;
                    model.$invalid2 = false;
                    if (model.$pristine) {
                        model.$valid2 = false;
                        model.$invalid2 = false;
                        element.removeClass(rightClass);
                        element.removeClass(wrongClass);
                    } else {
                        if ($error == 'errorSize' && valid == false) {
                            model.$valid2 = true;
                            model.$invalidSize = true;
                            element.addClass(wrongClass);
                            element.removeClass(rightClass);
                        } else if ($error == 'errorType' && valid == false) {
                            model.$valid2 = true;
                            model.$invalidType = true;
                            element.addClass(wrongClass);
                            element.removeClass(rightClass);
                        } else if (valid) {
                            model.$valid2 = true;
                            model.$invalid2 = false;
                            element.addClass(rightClass);
                            element.removeClass(wrongClass);
                        } else {
                            model.$valid2 = false;
                            model.$invalid2 = true;
                            element.removeClass(rightClass);
                            element.addClass(wrongClass);
                        }
                    }
                }
            }

            function updateUntactCurry(valid, model, element, rightClass, wrongClass) {
                model.$invalid2 = false;
                model.$invalidSize = false;
                model.$invalidType = false;
                if (model.$pristine) {
                    model.$valid = false;
                    model.$invalid = false;
                    model.$valid2 = false;
                    model.$duplicate = false;
                    element.removeClass(rightClass);
                    element.removeClass(wrongClass);
                } else {
                    if (valid) {
                        model.$valid2 = true;
                        model.$valid = true;
                        model.$invalid = false;
                        model.$duplicate = false;
                        model.$error = {};
                        model.$$success = { require: true, untact_file: true }
                        element.addClass(rightClass);
                        element.removeClass(wrongClass);
                    } else {
                        model.$valid = false;
                        model.$valid2 = false;
                        model.$invalid = true;
                        model.$duplicate = true;
                        element.removeClass(rightClass);
                        element.addClass(wrongClass);
                    }
                }
            }


            function callFormatHandler(scope, ctrl, handler, value) {
                var target;
                if (ctrl) { target = scope.$parent[ctrl] } else { target = scope.$parent; }
                return target[handler](value);
            }

            function validateFileSize(scope, model, modelValue, viewValue) {
                var $validate = false;
                var fileSizeMB = Number(scope.fileSizeMB);
                var maxFileSize = (scope.fileSizeMB ? Math.round(1024 * fileSizeMB) : scope.defaultFileSize);
                if (modelValue !== 'undefined' && modelValue !== null) {
                    var size;
                    if (model.$name == 'customerId1') {
                        size = scope.$file[0].files[0].size;
                    }
                    if (model.$name == 'customerId2') {
                        size = scope.$file2[0].files[0].size;
                    }
                    if (model.$name == 'customerId3') {
                        size = scope.$file3[0].files[0].size;
                    }
                    var fileSize = Math.round(size / 1024);
                    if (fileSize > scope.minFileSize && fileSize <= maxFileSize) {
                        $validate = true;
                    } else {
                        $validate = false;
                    }
                    return $validate;
                }
            }

            return {
                restrict: 'A',
                require: '^form',

                link: function(scope, element, attrs, ctrl) {

                    var type = element.attr('type');
                    var formatData = $.trim(element.attr('format')).split('|');
                    var format = formatData[0];
                    var formatHandler = formatData[1];
                    if (formatHandler) {
                        var handlerData = formatHandler.split('.');
                        if (handlerData.length === 2) {
                            var controllerName = handlerData[0];
                            formatHandler = handlerData[1];
                        }
                    }
                    var name = element.attr('name');
                    var model = ctrl[name];

                    function isFieldRequired() {
                        return element[0].required;
                    }

                    var isRequired = element.attr('required') || element.attr('ng-required') !== 'false';
                    //var isRequired = element[0].required;

                    model.isInput = true;
                    var updateViewCurry = updateView(model, element, 'eut_data_right', 'eut_data_wrong');
                    if (type === 'text' || type === 'email' || type === 'tel' || type === 'number' || type === 'textarea') {
                        //element.on( 'focusin', function(){
                        //    if( !model.$viewValue ){ model.$setViewValue( '' ); }
                        //});
                        isRequired = isFieldRequired();

                        element.on('focusout', function() {
                            if(eut.COUNTRY == 'be' || eut.COUNTRY == 'lu'){
                                element[0].closest('li').querySelector('label').style.display = 'none';
                            }
                            isRequired = isFieldRequired();

                            if (!model.$viewValue && !model.$modelValue && !!isRequired) {
                                model.$pristine = false;
                                updateViewCurry(false);
                            }

                        });


                        element.on('keydown', function(event) {
                            if (event.keyCode === 13) {
                                element.blur();
                            }
                        });

                        element.on('fail', function() {
                            $timeout(function() { updateViewCurry(false); }, 1);
                        });

                        // checking defualt error messages
                        $rootScope.$on('formvalidation', function(ev, data) {
                            var fieldsArray = data.inValidFields;
                            for (var i = 0; i < fieldsArray.length; i++) {
                                var targetModel = ctrl[fieldsArray[i]];
                                if (!targetModel) { // if any particular field is not htere in any locale
                                    continue;
                                }
                                var targetElement = $('[name="' + fieldsArray[i] + '"]');
                                targetModel.$pristine = false;
                                var update = updateView(targetModel, targetElement, 'eut_data_right', 'eut_data_wrong');
                                update(isValidField(targetModel.$error));
                                $rootScope.$broadcast('resize-item');
                            }

                        });

                        // gives validity if default angular form error is there
                        function isValidField(obj) {
                            var valid = true;
                            for (var i in obj) {
                                valid = false;
                                return valid;
                            }
                            return valid;
                        }

                        function checkTypeSizeError($model) {
                            if ($model.$invalidType == true || $model.$invalidSize == true) { return true; } else { return false; }
                        }

                        function getElementByName(scope, $name) {
                            if ($name == 'customerId1') { return scope.$fileName; }
                            if ($name == 'customerId2') { return scope.$fileName2; }
                            if ($name == 'customerId3') { return scope.$fileName3; }
                        }

                        function getModelByName(scope, $name) {
                            if ($name == 'customerId1') { return scope.attachForm.customerId1; }
                            if ($name == 'customerId2') { return scope.attachForm.customerId2; }
                            if ($name == 'customerId3') { return scope.attachForm.customerId3; }
                        }

                        function refreshDuplicates(scope) {
                            var $updateModelArray = [];
                            var $fileUploadObj = Object.assign({}, scope.fileUpload);
                            var $itemsLength = Object.keys($fileUploadObj).length;
                            if ($itemsLength > 0) {
                                angular.forEach($fileUploadObj, function(key, value) {
                                    if (value !== undefined || value !== "") {
                                        var $checkModel = getModelByName(scope, value);
                                        if ($checkModel.$duplicate == true) {
                                            $updateModelArray.push($checkModel);
                                        }
                                    }
                                });
                            }

                            if ($updateModelArray.length == 1) {
                                var $valid = true;
                                var $model = $updateModelArray[0];
                                var $element = getElementByName(scope, $model.$name);
                                $model.$pristine = false;
                                updateUntactCurry($valid, $model, $element, 'eut_data_right', 'eut_data_wrong');
                                $model.$validate();
                                scope.form.$valid = true;
                                scope.form.$invalid = false;
                                scope.success = true;
                            }
                        }

                        function validateDuplicate(scope, model, modelValue, element) {
                            var $valid = true;
                            var $found = false;
                            var $element = element;
                            var $checkError;
                            $checkError = checkTypeSizeError(model);
                            if ($checkError == true) { scope.fileUpload[model.$name] = "" } else { scope.fileUpload[model.$name] = modelValue }

                            var $fileUploadObj = Object.assign({}, scope.fileUpload);
                            var $itemsLength = Object.keys($fileUploadObj).length;
                            if ($itemsLength > 1) {
                                angular.forEach($fileUploadObj, function(value, key) {
                                    var $targetModel;
                                    if (value == modelValue && key !== model.$name) {
                                        $element = getElementByName(scope, key)
                                        $targetModel = getModelByName(scope, key)
                                        $valid = false;
                                        $found = true;
                                        $targetModel.$pristine = false;
                                        updateUntactCurry($valid, $targetModel, $element, 'eut_data_right', 'eut_data_wrong');
                                    } else {
                                        $valid = true;
                                        model.$pristine = false;
                                        $checkError = checkTypeSizeError(model);
                                        if ($checkError == false) {
                                            $element = getElementByName(scope, model.$name);
                                            updateUntactCurry($valid, model, $element, 'eut_data_right', 'eut_data_wrong');
                                        }
                                    }
                                });
                                if ($found == true) {
                                    $valid = false;
                                    updateUntactCurry($valid, model, element, 'eut_data_right', 'eut_data_wrong');
                                } else {
                                    $valid = true;
                                    updateUntactCurry($valid, model, element, 'eut_data_right', 'eut_data_wrong');
                                }
                            }
                            refreshDuplicates(scope);
                            return $valid;
                        }

                        switch (format) {
                            case 'name':
                                model.$validators.name = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isNAME(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'middle_name':
                                model.$validators.middle_name = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isMIDDLE_NAME(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'address':
                                model.$validators.address = function(modelValue, viewValue) {

                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if (element.attr('validaddress') == 'validateNull') {
                                        if ($.trim(modelValue).length > 0) { valid = validate.isADDRESS(modelValue); }
                                    } else {
                                        valid = validate.isADDRESS(modelValue);
                                    }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'post_code':
                                model.$validators.post_code = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isPOST_CODE(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'city':
                                model.$validators.city = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (!isFieldRequired()) { if ($.trim(modelValue).length === 0) return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isCITY(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'house_num':
                                model.$validators.house_num = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isHOUSE_NUM(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;


                            case 'contact_num':
                                model.$validators.contact_num = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isCONTACT_NUM(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;


                            case 'mobile_num':
                                model.$validators.mobile_num = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = ((validate.isMOBILE_NUM) ? validate.isMOBILE_NUM(modelValue) : validate.isCONTACT_NUM(modelValue)); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'untact_file':
                                model.$validators.untact_file = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) {
                                        scope.fileUpload[model.$name] = modelValue;
                                        refreshDuplicates(scope);
                                        return true;
                                    }
                                    if (modelValue) { model.$pristine = false; }
                                    var $error = '';
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) {
                                        $error = 'errorType';
                                        valid = validate.isUNTACT_FILE(modelValue);
                                        updateViewCurry(valid, $error);
                                        if (valid == false) { scope.fileUpload[model.$name] = "" }
                                        if (valid) {
                                            $error = 'errorSize';
                                            valid = validateFileSize(scope, model, modelValue, viewValue);
                                            updateViewCurry(valid, $error);
                                        }
                                        if (valid == false) { scope.fileUpload[model.$name] = "" }
                                        if (valid) {
                                            $error = 'errorDuplicate';
                                            valid = validateDuplicate(scope, model, modelValue, element);
                                            if (valid == true) {
                                                updateViewCurry(valid);
                                            }
                                        }
                                        if (!valid) { refreshDuplicates(scope); }
                                    } else {
                                        scope.fileUpload[model.$name] = modelValue;
                                        updateViewCurry(valid);
                                        refreshDuplicates(scope);
                                    }
                                    $rootScope.$broadcast('resize-item');

                                    return valid;
                                };
                                break;

                            case 'flat_num':
                                model.$validators.flat_num = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isFLAT_NUM(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'num_of_car':
                                model.$validators.num_of_car = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isNUM_OF_CAR(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'reg_num':
                                model.$validators.reg_num = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isREG_NUM(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'job_title':
                                model.$validators.job_title = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isJOB_TITLE(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'company_name':
                                model.$validators.company_name = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isCOMPANY_NAME(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'driving_licence_num':
                                model.$validators.driving_licence_num = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isDRIVING_LICENCE_NUM(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'vin_num':
                                model.$validators.driving_licence_num = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { 
                                        if (window.eut.COUNTRY == 'fr') {
                                            valid = validate.isFR_VIN_NUM(modelValue); 
                                        } else {
                                            valid = validate.isVIN_NUM(modelValue); 
                                        }
                                    }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'licence_plate':
                                model.$validators.licence_plate = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isLICENCE_PLATE(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'trade_brand':
                                model.$validators.trade_brand = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isTRADE_BRAND(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'trade_year':
                                model.$validators.trade_year = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isTRADE_YEAR(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'en':
                                model.$validators.en = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isEN(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'num':
                                model.$validators.num = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isNM(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'en_num':
                                model.$validators.en_nm = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isEN_NM(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'email':
                                model.$validators.email = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isEmail(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    if (modelValue && window.eut.COUNTRY == 'nl') {
                                        const after_at_the_ret = modelValue.substring(modelValue.indexOf('@') + 1);
                                        if (after_at_the_ret.indexOf('test') !== -1) { valid = false }
                                    }
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                break;

                            case 'price':
                                model.$validators.price = function(modelValue, viewValue) {
                                    if (!isRequired && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue === null) return;
                                    if (modelValue) { model.$pristine = false; }
                                    modelValue = eut.common.currencyFormat(modelValue, 0, false, false);
                                    var valid = validate.isPrice(modelValue);
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    model.$setViewValue(modelValue);
                                    model.$render();
                                    updateViewCurry(valid);
                                    return valid;
                                };

                                element.on('focus', function(event) {
                                    var value = event.target.value.replace(/[., ]/g, '');

                                    isRequired = isFieldRequired();

                                    model.$setViewValue(value);
                                    model.$render();
                                });

                                element.on('keyup', function(event) {
                                    var value = event.target.value.replace(/[^0-9.]/g, '');
                                    model.$setViewValue(value);
                                    model.$render();
                                });
                                break;

                            case 'reservation_number':
                                model.$validators.email = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = false;
                                    if ($.trim(modelValue).length > 0) { valid = validate.isRESERVATION_NUM(modelValue); }
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    $rootScope.$broadcast('resize-item');
                                    return valid;
                                };
                                break;

                            case 'none':
                                model.$validators.default = function(modelValue, viewValue) {
                                    if (!isFieldRequired() && noRequiredBehavior(model, modelValue, updateViewCurry)) { return true; }
                                    if (modelValue) { model.$pristine = false; }
                                    var valid = $.trim(modelValue).length > 0;
                                    if (valid && formatHandler) { valid = callFormatHandler(scope, controllerName, formatHandler, modelValue); }
                                    updateViewCurry(valid);
                                    return valid;
                                };
                                break;
                        }
                    } else {
                        model.$viewChangeListeners.unshift(function() {

                        });
                    }

                    if (element.attr('ng-maxlength')) {
                        model.$validators.maxLength = function(modelValue, viewValue) {
                            if (!isFieldRequired()) { if ($.trim(modelValue).length === 0) return true; }
                            if (!modelValue) return;
                            var valid = modelValue.toString().length <= element.attr('ng-maxlength');
                            if (!valid) { updateViewCurry(false); }
                            return valid;
                        };
                    }

                    if (element.attr('ng-minlength')) {
                        model.$validators.minLength = function(modelValue, viewValue) {
                            if (!isRequired) { if ($.trim(modelValue).length === 0) return true; }
                            if (!modelValue) return;
                            var valid = modelValue.toString().length >= element.attr('ng-minlength');
                            if (!valid) { updateViewCurry(false); }
                            return valid;
                        };
                    }

                    if (!isFieldRequired()) {
                        model.$validate();
                    }
                }
            }
        },

        stepViewItem: function($rootScope) {
            return {
                restrict: 'AE',
                replace: true,
                require: '^form',
                scope: true,
                link: function(scope, element, attrs, ctrl) {

                    scope.stepIndex = Number(attrs.stepViewItem);
                    scope.form = ctrl;
                    scope.$parent.addChildScope(scope);
                    scope.formWatcher = null;
                    scope.textElementList = [];
                    scope.selectElementList = [];
                    scope.checkboxElementList = [];
                    scope.radioElementList = [];
                    scope.textAreaElementList = [];
                    scope.keepData = attrs.keep;
                    scope.success = false;

                    scope.validationFail = function() {
                        //if( !scope.form.$valid && scope.form.$invalid ){ return; }
                        scope.form.$valid = false;
                        scope.form.$invalid = true;
                        scope.success = false;
                        setTimeout(function() {
                            scope.$emit('validation-fail', scope.stepIndex);
                        }, 1);
                    };

                    scope.validationSuccess = function() {
                        //if( scope.form.$valid && !scope.form.$invalid ){ return; }
                        scope.form.$valid = true;
                        scope.form.$invalid = false;
                        scope.success = true;
                        scope.$emit('validation-success', scope.stepIndex);
                    };

                    scope.watchForm = function() {
                        scope.unsetWatchForm();
                        scope.formWatcher = scope.$watch('form.$valid', function(newValue, oldValue) {
                            if (!newValue && oldValue) {
                                scope.success = false;
                                $rootScope.isFormValidated = false; //Store the current validation state of the form
                                scope.$emit('validation-fail', scope.stepIndex);
                            } else if (newValue && !oldValue) {
                                scope.success = true;
                                $rootScope.isFormValidated = true;
                                scope.$emit('validation-success', scope.stepIndex);
                            }
                        });
                    };

                    scope.unsetWatchForm = function() {
                        if (scope.formWatcher) {
                            scope.formWatcher();
                            scope.formWatcher = null;
                        }
                    };

                    scope.registFormElementsAll = function() {
                        scope.registTextElements();
                        scope.registSelectElements();
                        scope.registCheckBoxElements();
                        scope.registRadioElements();
                    };

                    scope.registTextElements = function(el) {
                        if (el === undefined) { el = 'input[type="text"][validate-element], input[type="email"][validate-element], input[type="tel"][validate-element], input[type="number"][validate-element], textarea[type="textarea"][validate-element], input[type="file"][validate-element]'; }
                        if (_.isString(el)) { el = element.find(el); }
                        scope.textElementList.push(el.placeholder());
                    };

                    scope.registSelectElements = function(el) {
                        if (el === undefined) { el = 'select[validate-element]'; }
                        if (_.isString(el)) { el = element.find(el); }
                        scope.selectElementList.push(el.sSelect());
                    };

                    scope.registCheckBoxElements = function(el) {
                        if (el === undefined) { el = 'input[type="checkbox"][validate-element]'; }
                        if (_.isString(el)) { el = element.find(el); }
                        scope.checkboxElementList.push(el.checkbox());
                    };

                    scope.registRadioElements = function(el) {
                        if (el === undefined) { el = 'input[type="radio"][validate-element]'; }
                        if (_.isString(el)) { el = element.find(el); }
                        scope.radioElementList.push(el.radio());
                    };

                    scope.pristine = function() {
                        scope.form.$valid = false;
                        scope.form.$invalid = true;

                        if (scope.textElementList.length > 0) {
                            _.each(scope.textElementList, function(list) { list.trigger('init-status'); });
                        }
                        if (scope.selectElementList.length > 0) {
                            _.each(scope.selectElementList, function(list) { list.trigger('init-status'); });
                        }
                        if (scope.checkboxElementList.length > 0) {
                            _.each(scope.checkboxElementList, function(list) { list.trigger('init-status'); });
                        }
                        if (scope.radioElementList.length > 0) {
                            _.each(scope.radioElementList, function(list) { list.trigger('init-status'); });
                        }
                    };

                    scope.updateForm = function() {
                        if (scope.textElementList.length > 0) {
                            _.each(scope.textElementList, function(list) { list.trigger('update-view'); });
                        }
                        if (scope.selectElementList.length > 0) {
                            _.each(scope.selectElementList, function(list) { list.trigger('update-view'); });
                        }
                        if (scope.checkboxElementList.length > 0) {
                            _.each(scope.checkboxElementList, function(list) { list.trigger('update-view'); });
                        }
                        if (scope.radioElementList.length > 0) {
                            _.each(scope.radioElementList, function(list) { list.trigger('update-view'); });
                        }
                    };
                }
            }
        },

        submitStepViewItem: function(templateManager) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    check: '=',
                    onsubmit: '=',
                    enable: '=',
                    useoptin: '=',
                    ctrl: '=',
                    buttonshow: '='
                },
                template: templateManager.get('spa-form-common', 'submit-step-item-view'),
                link: function(scope, element, attr) {

                    scope.error = attr.error;
                    scope.desc = attr.desc;
                    scope.requiredmsg = attr.requiredmsg;

                    element.find('#check_option').checkbox();
                    element.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', true).attr('tabindex', -1);
                    scope.$watch('enable', function(value) {
                        if (value) {
                            element.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', false).removeAttr('tabindex');
                            element.find('label').removeClass('disabled');
                        } else {
                            element.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', true).attr('tabindex', -1);
                            scope.submitted = false;
                        }
                    });

                    scope.preSubmit = function() {
                        if (scope.useoptin) {
                            scope.submitted = true;
                            if (!scope.check) { return; }
                        }
                        if (scope.ctrl) {
                            scope.onsubmit.call(scope.ctrl);
                        } else {
                            scope.onsubmit();
                        }
                        localStorage.removeItem("userZip");
                    }
                }
            }
        },

        submitStepViewItem2: function(templateManager, $rootScope) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    check: '=',
                    optional: '=',
                    radio: '=',
                    onsubmit: '=',
                    enable: '=',
                    enablecomm: '=',
                    useoptin: '=',
                    optinreq: '=',
                    /*KWCMSII-615*/
                    optinlist: '=',
                    optinlistpermission: '=',
                    optinconsenttext: '=',
                    optinconsenttextpermission: '=',
                    consenttext1: '=',
                    consenttext2: '=',
                    ctrl: '=',
                    buttonshow: '=',
                    preconsenttext: '=', // GDPR implementation
                    postconsenttext: '=',
                    disclaimer: '=',
                    optinconsenttext2: '=',
                    optinconsenttextpermission2: '=',
                    dealersstepbrochure: '=',
                    isbrochure: '=',
                    iscommercialoffer: '='


                },
                template: templateManager.get('spa-form-common', 'submit-step-item-view2'),
                link: function(scope, element, attr) {


                    scope.isCountry = window.eut.COUNTRY;
                    scope.requiredmsg = attr.requiredmsg;
                    scope.phoneCheckbox = true;
                    scope.showMandatorySign = false;
                    scope.loadCounter = 0;
                    var optinCheckIdList = ['#check_option_marketing-phone-consent',
                            '#check_option_marketing-sms-consent',
                            '#check_option_marketing-email-consent',
                            '#check_option_marketing-mail-consent'
                        ],
                        optinCheckPresentItem = [],
                        checkOptinRadioNameOptions = [
                            'check_option_marketing-consent',
                            'check_option_promotion-consent',
                            'check_option_personalized-consent',
                            'check_option_marketing-phone-consent',
                            'check_option_marketing-mail-consent',
                            'check_option_marketing-email-consent'
                        ],
                        optinRadioPresentItem = [],
                        commChannelFieldList = [
                            'postcode',
                            'email',
                            'contact',
                            'additional_contact_number',
                            'mobile_number',
                            'email_email',
                            'email_contact_number',
                            'post_email',
                            'post_contact_number',
                            'confirmationEmail',
                            'contact_number',
                            'post_code',
                            'firstName',
                            'lastName',
                            'address',
                            'city_town',
                            'first_name',
                            'last_name',
                            'address',
                            'houseNumber',
                            'city',
                            'contact_number_work',
                            'contact_number_home',
                            'contactNumber',
                            'mobileNumber',
                            'contact'
                        ];

                    setTimeout(function() {
                        element.find('.check_option').checkbox();
                        element.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', true).attr('tabindex', -1);
                        element.find('.check_submit').addClass('eut_blind');
                        if (window.location.href.indexOf("demande-de-financement-entreprise") > -1) {
                            document.getElementById("cmp-submit-btn-p").disabled = true;
                        }
                    }, 1);

                    scope.$watch('enable', function(value) {
                        if (value) {
                            element.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', false).removeAttr('tabindex');
                            element.find('label').removeClass('disabled');
                            element.find('.check_submit').removeClass('eut_blind');

                            if (window.eut.COUNTRY == 'gr') {
                                scope.phoneCheckbox = false;
                                var check_option_phone = element.find('#check_option_phone');
                                for (var index = 0; index < optinCheckIdList.length; ++index) {
                                    if (element.find(optinCheckIdList[index]).length > 0) {
                                        element.find(optinCheckIdList[index])[0].addEventListener('change', function(event) {
                                            //event.stopPropagation();
                                            setTimeout(function() {
                                                for (var index5 = 0; index5 < commChannelFieldList.length; ++index5) {
                                                    if ($(document).find("#" + commChannelFieldList[index5]).length > 0) {
                                                        if ($(document).find("#" + commChannelFieldList[index5]).hasClass("eut_data_wrong")) {
                                                            element.find('button').attr('disabled', true).attr('tabindex', -1);
                                                            break;
                                                        }
                                                    }
                                                }
                                                if (index5 == commChannelFieldList.length) {
                                                    if (event.target.checked) {
                                                        element.find('button').attr('disabled', false).removeAttr('tabindex');
                                                    } else {
                                                        checkIfAnyCheckBoxIsChecked();
                                                    }
                                                }

                                                if (event.target.id == "check_option_marketing-phone-consent" ||
                                                    event.target.id == "check_option_marketing-mail-consent" ||
                                                    event.target.id == "check_option_post" ||
                                                    event.target.id == "check_option_marketing-sms-consent" ||
                                                    event.target.id == "check_option_marketing-email-consent"
                                                ) {
                                                    scope.phoneCheckbox = false;
                                                }
                                            }, 100);

                                        });
                                        optinCheckPresentItem.push(element.find(optinCheckIdList[index]));
                                    }
                                    // else{
                                    //   element.find('button').attr('disabled', true).attr('tabindex', -1);
                                    // }
                                }



                                function checkIfAnyCheckBoxIsChecked() {
                                    setTimeout(function() {
                                        if (optinCheckPresentItem.length > 0) {
                                            if (!optinCheckPresentItem[0][0].checked &&
                                                !optinCheckPresentItem[1][0].checked &&
                                                !optinCheckPresentItem[2][0].checked) {
                                                element.find('button').attr('disabled', true).attr('tabindex', -1);
                                            } else {
                                                element.find('button').attr('disabled', false).removeAttr('tabindex');
                                            }
                                        }
                                    }, 0);
                                }

                                if (check_option_phone.length > 0) {
                                    check_option_phone[0].addEventListener('change', function() {
                                        if (event.target.checked) {
                                            scope.phoneCheckbox = false;
                                        } else {
                                            scope.phoneCheckbox = true;
                                        }
                                    });
                                }

                                setTimeout(function() {
                                    if (scope.phoneCheckbox || scope.loadCounter == 0) {
                                        for (var index1 = 0; index1 < optinCheckPresentItem.length; ++index1) {
                                            optinCheckPresentItem[index1].attr('disabled', true).attr('tabindex', -1);
                                            element.find('#' + optinCheckPresentItem[index1].attr("id") + '[disabled]+label').addClass("disabled");
                                        }

                                        element.find('button').attr('disabled', true).attr('tabindex', -1);
                                        scope.showMandatorySign = false;
                                        scope.loadCounter = scope.loadCounter + 1;
                                    }
                                }, 200);
                            }
                            scope.checkEnable = true;
                        } else {
                            if (window.eut.COUNTRY != 'gr') {
                                if (scope.checkEnable) {
                                    element.find('button').attr('disabled', true).attr('tabindex', -1);
                                    return;
                                }
                                element.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', true).attr('tabindex', -1);
                            } else {
                                //if($("#request_a_test_drive").length > 0){
                                if (scope.phoneCheckbox) {
                                    if (scope.checkEnable) {
                                        element.find('button').attr('disabled', true).attr('tabindex', -1);
                                        return;
                                    }
                                    element.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', true).attr('tabindex', -1);
                                } else {
                                    element.find('button').attr('disabled', true).attr('tabindex', -1);
                                }
                                //}

                            }
                            scope.phoneCheckbox = true;
                        }
                    });


                    if (!scope.ctrl.isbrochure || scope.ctrl.isbrochure == undefined) {
                        scope.$watch('disclaimer', function(val, old) {
                            scope.requiredmsg = val || scope.requiredmsg
                        });
                    }

                    scope.onOptInCheck = function(param1, param2) {
                        if ((window.location.href.indexOf("demande-de-financement-entreprise") > -1) || (window.location.href.indexOf("demander-de-financement") > -1)) {
                            document.getElementById("cmp-submit-btn-p").disabled = false;
                        }
                        $rootScope.$broadcast('optin-checked', { optinName: param1, optinValue: param2 });
                    }

                    scope.$on('optin-checked', function(event, args) {
                        if (window.eut.COUNTRY == 'gr') {
                            optinRadioPresentItem = [];
                            for (var index2 = 0; index2 < checkOptinRadioNameOptions.length; ++index2) {
                                if (jQuery('input[type=radio][name=' + checkOptinRadioNameOptions[index2] + ']').length > 0) {
                                    optinRadioPresentItem.push(checkOptinRadioNameOptions[index2]);
                                }
                            }

                            if ((scope.displayMarketingRadioValue(optinRadioPresentItem[0]) == 'selected0' ||
                                    scope.displayMarketingRadioValue(optinRadioPresentItem[0]) == 'selected1') &&
                                (scope.displayMarketingRadioValue(optinRadioPresentItem[1]) == 'selected0' ||
                                    scope.displayMarketingRadioValue(optinRadioPresentItem[1]) == 'selected1') &&
                                (scope.displayMarketingRadioValue(optinRadioPresentItem[2]) == 'selected0' ||
                                    scope.displayMarketingRadioValue(optinRadioPresentItem[2]) == 'selected1')
                            ) {
                                if (optinCheckPresentItem.length > 0) {
                                    if (scope.displayMarketingRadioValue(optinRadioPresentItem[0]) == 'selected1' &&
                                        scope.displayMarketingRadioValue(optinRadioPresentItem[1]) == 'selected1' &&
                                        scope.displayMarketingRadioValue(optinRadioPresentItem[2]) == 'selected1'
                                    ) {
                                        // element.find('#check_option_marketing-phone-consent, #check_option_marketing-sms-consent, #check_option_marketing-email-consent')
                                        // .attr('disabled', true).attr('tabindex', -1);
                                        for (var index3 = 0; index3 < optinCheckPresentItem.length; ++index3) {
                                            optinCheckPresentItem[index3].attr('disabled', true).attr('tabindex', -1);
                                            if (element.find('#' + optinCheckPresentItem[index3].attr("id") + '[disabled]+label').hasClass('active')) {
                                                element.find('#' + optinCheckPresentItem[index3].attr("id") + '[disabled]+label').removeClass('active');
                                                optinCheckPresentItem[index3][0].checked = false;
                                            }
                                            element.find('#' + optinCheckPresentItem[index3].attr("id") + '[disabled]+label').addClass("disabled");
                                        }
                                        scope.showMandatorySign = false;

                                        element.find('button').attr('disabled', false).removeAttr('tabindex');
                                    } else {
                                        for (var index4 = 0; index4 < optinCheckPresentItem.length; ++index4) {
                                            element.find('#' + optinCheckPresentItem[index4].attr("id") + '[disabled]+label').removeClass("disabled");
                                            optinCheckPresentItem[index4].attr('disabled', false).attr('tabindex', -1);
                                        }

                                        element.find('button').attr('disabled', true).attr('tabindex', -1);
                                        scope.showMandatorySign = true;
                                    }
                                    //enable submit button
                                } else {
                                    element.find('button').attr('disabled', false).removeAttr('tabindex');
                                }


                            } else {
                                //disable submit button
                                element.find('button').attr('disabled', true).attr('tabindex', -1);
                            }
                        }
                        return;
                    });

                    scope.displayMarketingRadioValue = function(name) {

                        var ele = element.find('input[name ="' + name + '"]');
                        for (var i = 0; i < ele.length; i++) {
                            if (ele[i].checked) {
                                if (i == 0) {
                                    return 'selected0';
                                }

                                if (i == 1) {
                                    return 'selected1';
                                }

                            }

                        }
                    }

                    // changes for nl locale
                    if (window.eut.COUNTRY == 'nl') {

                        // get optypes names from objects array
                        function getArrObj(arr, exclude) {
                            var length = arr.length,
                                returnArr = [];
                            for (var i = 0; i < length; i++) {
                                if (arr[i].optType != exclude) {
                                    returnArr.push(arr[i].optType)
                                }
                            }
                            return returnArr;
                        }


                        // check value if radio type as disapproving gives false values also for second group
                        function isRadioFirstClicked() {
                            var isRadioFirstGroupClicked = false;
                            if (scope.radio['optInsms'] && scope.radio['optInsms'][0]) {
                                isRadioFirstGroupClicked = scope.check['optInsms'] ? true : false
                            }
                            if (scope.radio['optInphone'] && scope.radio['optInphone'][0]) {
                                isRadioFirstGroupClicked = scope.check['optInphone'] ? true : false
                            }
                            if (scope.radio['optInallforms'] && scope.radio['optInallforms'][0]) {
                                isRadioFirstGroupClicked = scope.check['optInallforms'] ? true : false
                            }
                            if (scope.radio['optInemail'] && scope.radio['optInemail'][0]) {
                                isRadioFirstGroupClicked = scope.check['optInemail'] ? true : false
                            }

                            return isRadioFirstGroupClicked;
                        }


                        // check value if radio type as disapproving gives false values also for first group
                        function isRadioSecondClicked() {
                            var isRadioSecondGroupClicked = false;
                            if (scope.radio['optIndealer'][0]) {
                                isRadioSecondGroupClicked = scope.check['optIndealer'] ? true : false
                            }
                            if (scope.radio['optIncorporate'][0]) {
                                isRadioSecondGroupClicked = scope.check['optIncorporate'] ? true : false
                            }
                            return isRadioSecondGroupClicked;
                        }



                        // check if form is valid to submit checking combinations for opt In
                        var isNLSubmit = function() {
                            var isSubmitObj = { valid: true, arrObj: [] },
                                arr1 = getArrObj(scope.optinlistpermission, ''),
                                arr2 = getArrObj(scope.optinlist, '');

                            if (scope.check['optIndealer'] || scope.check['optIncorporate']) {
                                return { valid: scope.check['optInphone'] || scope.check['optInallforms'] || scope.check['optInemail'] || scope.check['optInsms'] || isRadioFirstClicked(), arrObj: arr2 }
                            }

                            if (scope.check['optInphone'] || scope.check['optInallforms'] || scope.check['optInemail'] || scope.check['optInsms']) {
                                return { valid: scope.check['optIndealer'] || scope.check['optIncorporate'] || isRadioSecondClicked(), arrObj: arr1 };
                            }

                            return isSubmitObj;
                        }

                        // set value for All optin on selecion of any other optin
                        function setAllOptinValue(newVal, optType) {

                            if (newVal !== undefined && newVal !== null) {
                                var arr = getArrObj(scope.optinlist),
                                    counter = 0;
                                for (var i = 0; i < arr.length; i++) {
                                    if (arr[i] !== 'allforms') {
                                        if (scope.check['optIn' + arr[i]]) {
                                            counter++;
                                        };
                                    }

                                }
                                if (counter == 3) {
                                    scope.check["optInallforms"] = true;
                                    return;
                                } else if (counter < 3) {
                                    scope.check["optInallforms"] = false;
                                    scope.disagree = true;
                                }

                            }

                        }
                        $(document).on('click', '#check_option_yallforms, #check_option_nallforms', function() {
                            scope.disagree = undefined;
                        });

                        // ng change for email optin
                        scope.$watch('check["optInemail"]', function(newVal, oldVal) {
                            validateForm();
                            if (scope.radio["optInemail"] && scope.radio["optInemail"][0]) {
                                var arr = getArrObj(scope.optinlist, ''),
                                    length = arr.length;
                                for (var i = 0; i < length; i++) {
                                    if (!scope.radio['optIn' + arr[i]][0]) {
                                        scope.optional['optIn' + arr[i]][0] = 'true';
                                    } else {
                                        scope.radio['optIn' + arr[i]][0] = 'true';
                                    }
                                }
                            }
                            if (scope.radio['optInemail'] && scope.radio['optInemail'].length > 0) {
                                setAllOptinValue(newVal); // set all optin's value
                            }

                        })

                        // ng change for phone optin
                        scope.$watch('check["optInphone"]', function(newVal, oldVal) {
                            validateForm();
                            if (scope.radio["optInphone"] && scope.radio["optInphone"][0]) {
                                var arr = getArrObj(scope.optinlist, ''),
                                    length = arr.length;
                                for (var i = 0; i < length; i++) {
                                    if (!scope.radio['optIn' + arr[i]][0]) {
                                        scope.optional['optIn' + arr[i]][0] = 'true';
                                    } else {
                                        scope.radio['optIn' + arr[i]][0] = 'true';
                                    }
                                }
                            }
                            if (scope.radio['optInphone'] && scope.radio['optInphone'].length > 0) {
                                setAllOptinValue(newVal);
                            }

                        })

                        // ng change for sms optin
                        scope.$watch('check["optInsms"]', function(newVal, oldVal) {
                            validateForm();
                            if (scope.radio["optInsms"] && scope.radio["optInsms"][0]) {
                                var arr = getArrObj(scope.optinlist, ''),
                                    length = arr.length;
                                for (var i = 0; i < length; i++) {
                                    if (!scope.radio['optIn' + arr[i]][0]) {
                                        scope.optional['optIn' + arr[i]][0] = 'true';
                                    } else {
                                        scope.radio['optIn' + arr[i]][0] = 'true';
                                    }
                                }
                            }
                            if (scope.radio['optInsms'] && scope.radio['optInsms'].length > 0) {
                                setAllOptinValue(newVal);
                            }

                        })

                        // ng change for all forms optin
                        scope.$watch('check["optInallforms"]', function(newVal, oldVal) {
                            validateForm();
                            if (scope.radio["optInallforms"] && scope.radio["optInallforms"][0]) {
                                var arr = getArrObj(scope.optinlist, ''),
                                    length = arr.length;
                                for (var i = 0; i < length; i++) {
                                    if (!scope.radio['optIn' + arr[i]][0]) {
                                        scope.optional['optIn' + arr[i]][0] = 'true';
                                    } else {
                                        scope.radio['optIn' + arr[i]][0] = 'true';
                                    }
                                }
                            }

                            // Select all other optins on selection of all radio optin
                            var radioButton = scope.radio['optInallforms'] ? scope.radio['optInallforms'].length : '';
                            if (newVal !== undefined && newVal !== null && radioButton > 0 && scope.disagree == undefined) {
                                var arr1 = getArrObj(scope.optinlist, 'allforms'),
                                    length1 = arr1.length;
                                for (var i = 0; i < length1; i++) {
                                    scope.check['optIn' + arr1[i]] = newVal;

                                }
                                return;
                            }
                        })

                        // ng change for dealer optin
                        scope.$watch('check["optIndealer"]', function(newVal, oldVal) {
                            validateForm()
                            if (scope.radio["optIndealer"] && scope.radio["optIndealer"][0]) {
                                var arr2 = getArrObj(scope.optinlistpermission, ''),
                                    length2 = arr2.length;
                                for (var i = 0; i < length2; i++) {
                                    scope.optional['optIn' + arr2[i]][0] = 'true';
                                }
                            }


                        })

                        // ng change for corporate optin
                        scope.$watch('check["optIncorporate"]', function(newVal, oldVal) {
                            validateForm();
                            if (scope.radio["optIncorporate"] && scope.radio["optIncorporate"][0]) {
                                var arr = getArrObj(scope.optinlistpermission, ''),
                                    length = arr.length;
                                for (var i = 0; i < length; i++) {
                                    if (!scope.radio['optIn' + arr[i]][0]) {
                                        scope.optional['optIn' + arr[i]][0] = 'true';
                                    } else {
                                        scope.radio['optIn' + arr[i]][0] = 'true';
                                    }
                                }
                            }


                        })

                        function validateForm() {
                            var isFormValid = isNLSubmit();
                            var arr = getArrObj(scope.optinlistpermission, '');
                            arr = arr.concat(getArrObj(scope.optinlist, ''));
                            for (var i = 0; i < arr.length; i++) {
                                if (scope.optional['optIn' + arr[i]]) {
                                    scope.optional['optIn' + arr[i]][0] = isFormValid.valid === true ? true : "";
                                }
                            }
                        }

                    }



                    function checkShowDealer() {
                        var dealerShown = false;
                        var arr = scope.optinlistpermission;
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i].optType == 'dealer') {
                                dealerShown = arr[i].showDealer;
                            }

                        }

                        return dealerShown
                    }

                 


                    scope.preSubmit = function() {
                        if (scope.ctrl.isbrochure || scope.ctrl.isCommercialOffer) {
                            scope.optinreq = true;
                        }


                        if (scope.useoptin && scope.optinreq) { /*KWCMSII-615*/
                            scope.submitted = true;


                            // check for nl if consent grops for delaer or corporate is checked all lower contact us optins should become required.
                            if (window.eut.COUNTRY == 'nl') {
                                var cansubmit = isNLSubmit();
                                if (!cansubmit.valid) {

                                    var length = cansubmit.arrObj.length;
                                    for (var i = 0; i < length; i++) {
                                        if (!scope.radio['optIn' + cansubmit.arrObj[i]][0]) {
                                            scope.check['optIn' + cansubmit.arrObj[i]] = false; // setting values to show error messages and make them mandatory
                                            scope.optional['optIn' + cansubmit.arrObj[i]][0] = '';
                                        } else {
                                            scope.check['optIn' + cansubmit.arrObj[i]] = null;
                                            scope.radio['optIn' + cansubmit.arrObj[i]][0] = "true";
                                        }

                                    }


                                }


                            }



                            for (var optional in scope.optional) {
                                if (!scope.optional[optional][0]) {
                                    for (var radio in scope.radio) {
                                        if (optional == radio && scope.radio[radio][0]) {
                                            for (var check in scope.check) {
                                                if (check == radio && !scope.check[check]) {
                                                    return;
                                                }
                                            }
                                        } else if (optional == radio && !scope.radio[radio][0]) {
                                            for (var check in scope.check) {
                                                if (check == radio && !scope.check[check]) {
                                                    return;
                                                }
                                            }

                                        }
                                    }

                                } else {
                                    for (var radio in scope.radio) {
                                        if (optional == radio && scope.radio[radio][0]) {
                                            for (var check in scope.check) {

                                                if (check == 'optIndealer' && !checkShowDealer() && window.eut.COUNTRY == 'nl') {
                                                    continue;
                                                }
                                                if (check == radio && scope.check[check] == null) {
                                                    return;
                                                }
                                            }
                                        } else if (optional == radio && !scope.radio[radio][0]) {
                                            for (var check in scope.check) {
                                                if (check == radio && scope.check[check] == null) {
                                                    return;
                                                }
                                            }

                                        }
                                    }
                                }

                            }
                        }
                        if (scope.ctrl) {
                            scope.onsubmit.call(scope.ctrl);
                        } else {
                            scope.onsubmit();
                        }
                        localStorage.removeItem("userZip");
                    }
                }
            }
        },
        submitPageViewItem: function(templateManager, $rootScope) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    check: '=',
                    optional: '=',
                    radio: '=',
                    onsubmit: '=',
                    enable: '=',
                    enablecomm: '=',
                    privacytext: '=',
                    useoptin: '=',
                    optinreq: '=',
                    /*KWCMSII-615*/
                    optinlist: '=',
                    optinlistpermission: '=',
                    optinconsenttext: '=',
                    optinconsenttextpermission: '=',
                    consenttext1: '=',
                    consenttext2: '=',
                    ctrl: '=',
                    buttonshow: '=',
                    preconsenttext: '=', // GDPR implementation
                    postconsenttext: '=',
                    disclaimer: '=',
                    optinconsenttext2: '=',
                    optinconsenttextpermission2: '=',
                    dealersstepbrochure: '=',
                    isbrochure: '=',
                    iscommercialoffer: '='


                },
                template: templateManager.get('spa-form-common', 'submit-page-item-view'),
                link: function(scope, element, attr) {
                    scope.requiredmsg = attr.requiredmsg;
                    scope.phoneCheckbox = true;
                    scope.showMandatorySign = false;
                    scope.loadCounter = 0;
                    var optinCheckIdList = ['#check_option_marketing-phone-consent',
                        '#check_option_marketing-sms-consent',
                        '#check_option_marketing-email-consent',
                        '#check_option_marketing-mail-consent'
                    ]
                    optinRadioPresentItem = [],
                        commChannelFieldList = [
                            'postcode',
                            'email',
                            'firstName',
                            'lastName',
                            'reservationNumber'
                        ];

                    setTimeout(function() {
                        element.find('.check_option').checkbox();
                        element.find('button').attr('disabled', true).attr('tabindex', -1);
                        // element.find('.check_submit').addClass('eut_blind');
                    }, 1);

                    scope.$watch('enable', function(value) {
                        if (value) {
                            element.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', false).removeAttr('tabindex');
                            element.find('label').removeClass('disabled');
                            element.find('.check_submit').removeClass('eut_blind');
                            scope.checkEnable = true;
                        }
                    });


                    $(document).on('click', '#check_option_yallforms, #check_option_nallforms', function() {
                        scope.disagree = undefined;
                    });


                    function checkShowDealer() {
                        var dealerShown = false;
                        var arr = scope.optinlistpermission;
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i].optType == 'dealer') {
                                dealerShown = arr[i].showDealer;
                            }

                        }

                        return dealerShown;
                    }

                    scope.validationFail = function() {
                        //if( !scope.form.$valid && scope.form.$invalid ){ return; }
                        scope.submitted = false;
                        scope.enableSubmit = false;
                    };

                    scope.validationSuccess = function() {
                        //if( scope.form.$valid && !scope.form.$invalid ){ return; }
                        scope.form.$valid = true;
                        scope.form.$invalid = false;
                        scope.success = true;
                        scope.$emit('validation-success', scope.stepIndex);
                    };

                    scope.preSubmit = function() {
                        if (scope.ctrl.isbrochure || scope.ctrl.isCommercialOffer) {
                            scope.optinreq = true;
                        }


                        if (scope.useoptin && scope.optinreq) { /*KWCMSII-615*/
                            scope.submitted = true;
                            for (var optional in scope.optional) {
                                if (!scope.optional[optional][0]) {
                                    for (var radio in scope.radio) {
                                        if (optional == radio && scope.radio[radio][0]) {
                                            for (var check in scope.check) {
                                                if (check == radio && !scope.check[check]) {
                                                    return;
                                                }
                                            }
                                        } else if (optional == radio && !scope.radio[radio][0]) {
                                            for (var check in scope.check) {
                                                if (check == radio && !scope.check[check]) {
                                                    return;
                                                }
                                            }

                                        }
                                    }

                                } else {
                                    for (var radio in scope.radio) {
                                        if (optional == radio && scope.radio[radio][0]) {
                                            for (var check in scope.check) {

                                                if (check == 'optIndealer' && !checkShowDealer() && window.eut.COUNTRY == 'nl') {
                                                    continue;
                                                }
                                                if (check == radio && scope.check[check] == null) {
                                                    return;
                                                }
                                            }
                                        } else if (optional == radio && !scope.radio[radio][0]) {
                                            for (var check in scope.check) {
                                                if (check == radio && scope.check[check] == null) {
                                                    return;
                                                }
                                            }

                                        }
                                    }
                                }

                            }
                        }
                        if (scope.ctrl) {
                            scope.onsubmit.call(scope.ctrl);
                        } else {
                            scope.onsubmit();
                        }
                        localStorage.removeItem("userZip");
                    }
                }
            }
        },

        pageView: function(validate) {
            return {
                restrict: 'A',
                link: function(scope, element) {

                    scope.textElementList = [];
                    scope.selectElementList = [];
                    scope.refresh = function() {
                        scope.validate = validate;
                        scope.$items = element.find('[page-view]');
                        scope.$items.find('button').attr('disabled', true).attr('tabindex', -1);
                        scope.itemNum = scope.$items.length;
                        scope.selectedIndex = -1;
                        scope.$items.attr('aria-hidden', true);
                    };

                    scope.setAriaHidden = function(index, value) {
                        scope.$items.eq(index).attr('aria-hidden', value);
                    };

                    setTimeout(function() { scope.refresh(); }, 1);
                    scope.registFormElementsAll = function() {
                        scope.registTextElements();
                    };

                    scope.registTextElements = function(el) {
                        if (el === undefined) { el = 'input[type="text"][validate-element], input[type="email"][validate-element], input[type="tel"][validate-element], input[type="number"][validate-element], textarea[type="textarea"][validate-element], input[type="file"][validate-element]'; }
                        if (_.isString(el)) { el = element.find(el); }
                        scope.textElementList.push(el.placeholder());
                    };

                    scope.pristine = function() {
                        scope.form.$valid = false;
                        scope.form.$invalid = true;

                        if (scope.textElementList.length > 0) {
                            _.each(scope.textElementList, function(list) { list.trigger('init-status'); });
                        }
                    };

                    scope.updateForm = function() {
                        if (scope.textElementList.length > 0) {
                            _.each(scope.textElementList, function(list) { list.trigger('update-view'); });
                        }
                    };
                },

                controller: function($scope) {
                    $scope.selectedIndex = -1;
                    $scope.deactivateIndex = -1;
                    $scope.itemNum = 0;
                    $scope.childScope = [];

                    $scope.success = function(index) {
                        $scope.selectedIndex = index;
                        if ($scope.hasNext()) { $scope.next(); } else if ($scope.selectedIndex === $scope.itemNum - 1) {
                            $scope.checkAt($scope.selectedIndex);
                            $scope.$broadcast('validation-success-all');
                            $scope.$emit('validation-success-all');
                        }
                    };

                    $scope.fail = function(index) {
                        $scope.selectedIndex = index;
                        $scope.activeAt(index);
                        for (var i = index + 1; i < $scope.itemNum; i += 1) { $scope.deactiveAt(i); }
                    };

                    $scope.getCurrentScope = function() {
                        return $scope.childScope[$scope.selectedIndex];
                    };

                    $scope.addChildScope = function(childScope) {
                        $scope.childScope.push(childScope);
                    };

                    $scope.$on('validation-success', function(event, index) {
                        $scope.success(index);
                    });

                    $scope.$on('validation-fail', function(event, index) {
                        $scope.fail(index);
                    });
                }
            }
        },
        pageViewItem: function($rootScope) {
            return {
                restrict: 'A',
                replace: true,
                require: '^form',
                scope: true,
                link: function(scope, element, attrs, ctrl) {

                    scope.form = ctrl;
                    //  scope.$parent.addChildScope(scope);
                    scope.formWatcher = null;
                    scope.textElementList = [];
                    scope.selectElementList = [];
                    scope.checkboxElementList = [];
                    scope.radioElementList = [];
                    scope.textAreaElementList = [];
                    scope.keepData = attrs.keep;
                    scope.success = false;

                    scope.validationFail = function() {
                        //if( !scope.form.$valid && scope.form.$invalid ){ return; }
                        scope.form.$valid = false;
                        scope.form.$invalid = true;
                        scope.success = false;
                        scope.submitted = false;
                        scope.enableSubmit = false;
                        setTimeout(function() {
                            scope.$emit('validation-fail', scope.stepIndex);
                        }, 1);
                        element.find('.btn_submit button').attr('disabled', true).attr('tabindex', -1);
                    };

                    scope.validationSuccess = function() {
                        scope.form.$valid = true;
                        scope.form.$invalid = false;
                        scope.success = true;
                        scope.submitted = true;
                        scope.enableSubmit = true;
                        scope.$emit('validation-success', scope.stepIndex);
                        element.find('.btn_submit button').attr('disabled', false).removeAttr('tabindex');
                    };

                    scope.watchForm = function() {
                        scope.unsetWatchForm();
                        scope.formWatcher = scope.$watch('form.$valid', function(newValue, oldValue) {
                            if (!newValue && oldValue) {
                                scope.success = false;
                                $rootScope.isFormValidated = false; //Store the current validation state of the form
                                scope.$emit('validation-fail', scope.stepIndex);
                            } else if (newValue && !oldValue) {
                                scope.success = true;
                                $rootScope.isFormValidated = true;
                                scope.$emit('validation-success', scope.stepIndex);
                            }
                        });
                    };

                    scope.unsetWatchForm = function() {
                        if (scope.formWatcher) {
                            scope.formWatcher();
                            scope.formWatcher = null;
                        }
                    };

                    scope.registFormElementsAll = function() {
                        scope.registTextElements();
                        scope.registSelectElements();
                        scope.registCheckBoxElements();
                        scope.registRadioElements();
                    };

                    scope.registTextElements = function(el) {
                        if (el === undefined) { el = 'input[type="text"][validate-element], input[type="email"][validate-element], input[type="tel"][validate-element], input[type="number"][validate-element], textarea[type="textarea"][validate-element], input[type="file"][validate-element]'; }
                        if (_.isString(el)) { el = element.find(el); }
                        scope.textElementList.push(el.placeholder());
                    };
                    //if (scope.optinreq) { /*KWCMSII-615*/
                    scope.submitted = true;

                    scope.registSelectElements = function(el) {
                        if (el === undefined) { el = 'select[validate-element]'; }
                        if (_.isString(el)) { el = element.find(el); }
                        scope.selectElementList.push(el.sSelect());
                    };

                    scope.registCheckBoxElements = function(el) {
                        if (el === undefined) { el = 'input[type="checkbox"][validate-element]'; }
                        if (_.isString(el)) { el = element.find(el); }
                        scope.checkboxElementList.push(el.checkbox());
                    };

                    scope.registRadioElements = function(el) {
                        if (el === undefined) { el = 'input[type="radio"][validate-element]'; }
                        if (_.isString(el)) { el = element.find(el); }
                        scope.radioElementList.push(el.radio());
                    };

                    scope.pristine = function() {
                        scope.form.$valid = false;
                        scope.form.$invalid = true;

                        if (scope.textElementList.length > 0) {
                            _.each(scope.textElementList, function(list) { list.trigger('init-status'); });
                        }
                        if (scope.selectElementList.length > 0) {
                            _.each(scope.selectElementList, function(list) { list.trigger('init-status'); });
                        }
                        if (scope.checkboxElementList.length > 0) {
                            _.each(scope.checkboxElementList, function(list) { list.trigger('init-status'); });
                        }
                        if (scope.radioElementList.length > 0) {
                            _.each(scope.radioElementList, function(list) { list.trigger('init-status'); });
                        }
                    };

                    scope.updateForm = function() {
                        if (scope.textElementList.length > 0) {
                            _.each(scope.textElementList, function(list) { list.trigger('update-view'); });
                        }
                        if (scope.selectElementList.length > 0) {
                            _.each(scope.selectElementList, function(list) { list.trigger('update-view'); });
                        }
                        if (scope.checkboxElementList.length > 0) {
                            _.each(scope.checkboxElementList, function(list) { list.trigger('update-view'); });
                        }
                        if (scope.radioElementList.length > 0) {
                            _.each(scope.radioElementList, function(list) { list.trigger('update-view'); });
                        }
                    };
                }
            }
        },
        stepView: function(validate) {
            return {
                restrict: 'A',
                link: function(scope, element) {

                    scope.refresh = function() {
                        scope.validate = validate;
                        /** Added condition for waiting list component */
                        scope.$activate = element.find('[step-view-item]').hasClass('activateIt');
                        scope.$items = element.find('[step-view-item]').addClass('eut_blind').removeClass('active checked');
                        scope.$items.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', true).attr('tabindex', -1);
                        scope.itemNum = scope.$items.length;
                        scope.selectedIndex = -1;
                        scope.$items.attr('aria-hidden', true);
                        scope.activeAt(0);
                        scope.activeStep = 0;
                        if (scope.$activate == true) {
                            scope.activeAt(1);
                            scope.activeStep = 1;
                        }
                    };

                    scope.setAriaHidden = function(index, value) {
                        scope.$items?.eq(index).attr('aria-hidden', value);
                    };

                    setTimeout(function() { scope.refresh(); }, 1);
                },

                controller: function($scope) {
                    $scope.selectedIndex = -1;
                    $scope.deactivateIndex = -1;
                    $scope.itemNum = 0;
                    $scope.childScope = [];

                    $scope.success = function(index) {
                        $scope.selectedIndex = index;
                        if ($scope.hasNext()) { $scope.next(); } else if ($scope.selectedIndex === $scope.itemNum - 1) {
                            $scope.checkAt($scope.selectedIndex);
                            $scope.$broadcast('validation-success-all');
                            $scope.$emit('validation-success-all');
                            if ((window.location.href.indexOf("demande-de-financement-entreprise") > -1) || (window.location.href.indexOf("demander-de-financement") > -1)) {
                                setTimeout(function() { document.getElementById("cmp-submit-btn-p").disabled = !false; }, 2);
                            }
                        }
                    };

                    $scope.fail = function(index) {
                        $scope.selectedIndex = index;
                        $scope.activeAt(index);
                        for (var i = index + 1; i < $scope.itemNum; i += 1) { $scope.deactiveAt(i); }
                    };

                    $scope.hasNext = function() {
                        return $scope.selectedIndex + 1 < $scope.itemNum;
                    };

                    $scope.hasPrev = function() {
                        return $scope.selectedIndex - 1 > 0;
                    };

                    $scope.next = function() {
                        if ($scope.$items.eq(0).hasClass('information') && (window.eut.COUNTRY != 'be' && window.eut.COUNTRY != 'lu' && window.eut.COUNTRY != 'fr')) {
                            var arr = $scope.$items.length;

                            for (var m = 0; m < arr - 1; m++) {
                                $scope.checkAt(m);
                                $scope.activeAt(m + 1);
                                $scope.childScope[m].success = true;
                                //if( $scope.childScope[ m ].success ){
                                //if( $scope.hasNext() ){ $scope.next(); }

                                //}
                            }
                        } else {
                            $scope.checkAt($scope.selectedIndex);
                            $scope.activeAt($scope.selectedIndex + 1);
                            if ($scope.childScope[$scope.selectedIndex].success) {
                                $scope.success($scope.selectedIndex);
                            }
                        }
                    };

                    $scope.prev = function() {
                        $scope.deactiveAt($scope.selectedIndex);
                        $scope.activeAt($scope.selectedIndex - 1);
                    };

                    $scope.activeAt = function(index) {
                        var $item = $scope.$items.eq(index);
                        var childScope = $scope.childScope[index];
                        $item.addClass('active').removeClass('checked eut_blind');
                        //$('.contactUs .check_submit').removeClass('checked eut_blind');
                        //$item.find( 'input, textarea, a, button, .form_spr, select').attr( 'disabled', false ).removeAttr( 'tabindex' );
                        $item.find('input, textarea, a, button, select').attr('disabled', false).removeAttr('tabindex');
                        $item.find('.form_spr, .select-list-box').attr('tabindex', 0).attr('disabled', false);
                        $item.find('label').removeClass('disabled');
                        var page = window.dtmDataLayer.page
                        if(window.eut.COUNTRY === 'be' || window.eut.COUNTRY === 'lu'){
                            if(page.page_name == "utility|quote-request"){
                                $scope.activeStep = index;
                            }
                        }
                        if ($scope.selectedIndex === index) { return; }
                        $scope.selectedIndex = index;
                        $scope.setAriaHidden(index, false);
                        childScope.watchForm();
                        if (childScope.active) { childScope.active(); }
                        if (childScope.ctrl && childScope.ctrl.active) { childScope.ctrl.active(); }
                        if ($scope.$items.parents('#business_contact_us').length !== 0) {
                            $scope.$items.parents('#business_contact_us').find('.eut_contact_submit button').attr('disabled', false).removeAttr('tabindex');
                        }
                        $scope.activeStep = index;
                    };

                    $scope.checkAt = function(index) {
                        $scope.$items.eq(index).addClass('checked').removeClass('active eut_blind');
                    };

                    $scope.deactiveAt = function(index) {
                        if ($scope.activeStep >= index) {
                            if ($scope.$items.parents('#business_contact_us').length !== 0) {
                                $scope.$items.parents('#business_contact_us').find('.eut_contact_submit button').attr('disabled', true).attr('tabindex', -1);
                            }
                            return;
                        }
                       
                        if ($scope.selectedIndex === index) { return; }
                        var $item = $scope.$items.eq(index);
                        var childScope = $scope.childScope[index];
                        $scope.setAriaHidden(index, true);
                        $item.addClass('eut_blind').removeClass('active checked');
                        $item.find('input, textarea, a, button, .form_spr, .select-list-box, select').attr('disabled', true).attr('tabindex', -1);
                        childScope.unsetWatchForm();
                        if (childScope.deactive) { childScope.deactive(); }
                        if (childScope.ctrl && childScope.ctrl.deactive) { childScope.ctrl.deactive(); }
                        if (!childScope.keepData) { childScope.pristine(); }
                    };

                    $scope.getCurrentScope = function() {
                        return $scope.childScope[$scope.selectedIndex];
                    };

                    $scope.addChildScope = function(childScope) {
                        $scope.childScope.push(childScope);
                    };

                    $scope.$on('validation-success', function(event, index) {
                        $scope.success(index);
                    });

                    $scope.$on('validation-fail', function(event, index) {
                        $scope.fail(index);
                    });
                }
            }
        },

        repeater: function($timeout) {
            return {
                restrict: 'A',
                link: function(scope, elem, attrs) {
                    if (scope.$last) {
                        $timeout(function() {
                            scope.$emit(attrs.repeater + '-repeat-complete');
                        });
                    }
                }
            }
        },

        validateElement: function(validate, $timeout, $rootScope) {

            function initSelectBox(element, model) {
                model.isSelect = true;
                var parent = element.closest('.sel_box');
                var updateViewCurry = updateView(model, parent, 'right', 'wrong');

                element.on('opened-options', function() {
                    element.one('closed-options', function(event, index) {
                        if (element.attr("ng-required") === 'false') {
                            element.parent().addClass('right');
                            return false;
                        };
                        if (index === -1 && element.data('isDirty') && element[0].required) {
                            if (element.data('dataStyle') !== 'manual') {
                                model.$valid2 = false;
                                model.$invalid2 = true;
                                model.$pristine = false;
                                $rootScope.$apply();
                                updateViewCurry(false);
                                element.siblings('.select-list-box').find('.selected-headline').removeClass('required');
                            }
                            element.trigger('wrong-data');
                        } else {
                            element.trigger('right-data');
                        }
                    });
                });

                element.on('change', function() {
                    $timeout(function() { updateViewCurry(true); }, 1);
                });

                element.on('fail', function() {
                    $timeout(function() { updateViewCurry(false); }, 1);
                });

                element.on('init-status', function() {
                    initModel(model);
                    updateViewCurry(false);
                    setTimeout(function() { element.resetSS(); }, 1);
                });

                element.on('update-view', function() {
                    setTimeout(function() {
                        model.$pristine = false;
                        element.data('isDirty', false);
                        element.getSetSSValue(model.$viewValue);
                    }, 1);
                });
            }

            function initInput(element, model) {

            }

            function initModel(model) {
                model.$setPristine();
            }

            function updateView(model, element, rightClass, wrongClass) {
                return function(valid) {
                    if (model.$pristine) {
                        model.$valid = false;
                        model.$invalid = false;
                        model.$valid2 = false;
                        model.$invalid2 = false;
                        element.removeClass(rightClass);
                        element.removeClass(wrongClass);
                    } else {
                        if (valid) {
                            model.$valid = true;
                            model.$invalid = false;
                            model.$valid2 = true;
                            model.$invalid2 = false;
                            element.addClass(rightClass);
                            element.removeClass(wrongClass);
                        } else {
                            model.$valid = false;
                            model.$invalid = true;
                            model.$valid2 = false;
                            model.$invalid2 = true;
                            element.removeClass(rightClass);
                            element.addClass(wrongClass);
                        }
                    }
                }
            }

            return {
                restrict: 'A',
                require: '?ngModel',
                link: function($scope, element, attr, model) {
                    var el = element.get(0);
                    var tagName = el.tagName.toLowerCase();
                    var type = element.attr('type');
                    if (!model) { console.error('no model', element); return; }
                    if (tagName === 'input') { initInput(element, model); } else if (tagName === 'select') { initSelectBox(element, model); }

                    element.on('init-status', function() {
                        initModel(model);
                        setTimeout(function() {
                            switch (type) {
                                case 'text':
                                case 'email':
                                case 'textarea':
                                case 'tel':
                                case 'number':
                                    element.placeholder('updated');
                                    break;
                                case 'radio':
                                    element.radio('updated');
                                    break;
                                case 'checkbox':
                                    element.checkbox('updated');
                                    break;
                            }
                        }, 1);
                    });
                }
            }
        },

        anchor: function() {
            return {
                restrict: 'E',
                link: function($scope, element, attr) {
                    if (attr.ngClick || attr.href === '' || attr.href === '#') {
                        element.on('click', function(event) { event.preventDefault(); });
                    }
                }
            }
        },

        fileBrowse: function() {
            return {
                restrict: 'A',
                link: function($scope, element, attr) {
                    var options = attr.fileBrowse.split('|');
                    if (options.length === 0) { throw new Error('no action'); }
                    var $form = $('<form method="post" enctype="multipart/form-data" style="display: none;"> <input type="file" name="file"></form>');
                    var $file = $form.find('input[type="file"]');
                    var id = options[1] || 'attachment';

                    $form.attr({ action: options[0], id: id });
                    $file.attr('name', id);
                    element.after($form);

                    $file.on('change', function() {
                        var filename = $file.val().split('\\').pop();
                        $scope.$emit(id + '-changed', { fileName: filename, form: $form });
                    });

                    element.on('click', function() {
                        $file.trigger('click');
                    });
                }
            }
        },

        paging: function() {
            return {
                restrict: 'A',
                transclude: true,
                scope: {
                    currentPage: '=',
                    currentItemLength: '=',
                    viewItemLength: '@viewItemLength'
                },

                link: function(scope, element, attr, ctrl, transclude) {
                    transclude(scope, function(clone) {
                        element.append(clone);
                    });


                    scope.goToTop = function(e, selector) {
                        if ($(e.currentTarget).parent().hasClass('disabled')) return;

                        var $target = selector ? $(selector) : $('#contents'),
                            offset = $target.offset();

                        $(window).scrollTop(offset.top || 0);
                    };
                },

                /** ########################   Controller  ########################### */

                controller: function($scope) {
                    var _pagingLength = 4,
                        _paging = new common.Paging($scope.viewItemLength, _pagingLength);

                    _paging.addListener(common.Paging.CHANGE, function(e) {
                        $scope.pagingData = e.pageGroupData;
                        $scope.currentPage = e.currentPageIndex;
                    });

                    $scope.$watch('currentItemLength', updateHandler);

                    $scope.getActiveClass = function(page) { return (page === $scope.currentPage ? 'active' : ''); };

                    $scope.getDisableClass = function(type) {
                        if (!$scope.pagingData) return '';

                        var result = '';

                        switch (type) {
                            case 'first':
                            case 'prev':
                                if ($scope.currentPage === 0) result = 'disabled';
                                break;
                            case 'next':
                            case 'last':
                                if (($scope.currentPage + 1) * $scope.viewItemLength >= $scope.currentItemLength) result = 'disabled';
                                break;
                        }

                        return result;
                    };

                    $scope.goToPage = function(page) {
                        _paging.setPage(page);
                    };

                    $scope.nextPaging = function() {
                        _paging.next();
                    };

                    $scope.prevPaging = function() {
                        _paging.prev();
                    };

                    $scope.firstPaging = function() {
                        _paging.first();
                    };

                    $scope.lastPaging = function() {
                        _paging.last();
                    };

                    /** =============== Methods =============== */

                    function updateHandler() {
                        if (typeof $scope.currentItemLength === 'number') {
                            _paging.setData($scope.currentItemLength);
                        }
                    }
                }
            }
        },

        ngEnter: function() {
            return {
                restrict: 'A',

                link: function(scope, element, attrs) {
                    element.bind('keydown', function(e) {
                        if (e.which === 13) {
                            scope.$apply(function() {
                                scope.$eval(attrs.ngEnter, { 'event': e });
                            });
                        }
                    });
                }
            }
        },

        ngKeypress: function() {
            return {
                restrict: 'A',

                link: function(scope, element, attrs) {
                    var timer = 0;
                    element.bind('keydown', function(e) {
                        if (e.which !== 13) {
                            scope.$apply(function() {
                                scope.$eval(attrs.ngKeypress, { 'event': e });
                            });
                        }
                    });
                }
            }
        }

    };

    common.angular = common.angular || {};
    common.angular.directive = Directive;
})(angular, _, jQuery, eut.modal, eut.responsive, eut.common);
/**
 * Angular Common Filter Module
 */
;(function ( ng, _, modal, responsive, common ) {

    var Filter = {
        /**
         * splice
         * @param   {Array} datas
         * @param   {Int}   startIndex
         * @param   {Int}   deleteCount
         */
        splice: function () {
            return function ( datas, startIndex, deleteCount ) {
                if ( ng.isArray(datas) ) {
                    return datas.slice( startIndex, startIndex + deleteCount );
                } else {
                    return datas;
                }
            };
        },

        /**
         * filtering synonyms
         * @param   {Array}     datas
         * @param   {String}    prop
         * @param   {String}    findStr
         */
        like: function () {
            return function ( datas, prop, findStr ) {
                if ( !findStr ) return datas;
                if ( ng.isArray(datas) && ng.isString(prop) ) {
                    var result = [];
                    ng.forEach( datas, function ( data ) {
                        var val = data[prop],
                            reg = new RegExp( findStr, 'i' );

                        if ( ng.isString(val) && reg.test(val) ) {
                            result.push( data );
                        }
                    });
                    return result;
                }
            };
        },

        /**
         * @param   {Array}     datas
         * @param   {String}    prop
         * @param   {*}         targetValue
         */
        is: function () {
            return function ( datas, prop, targetValue ) {
                if ( ng.isArray(datas) && ng.isString(prop) ) {
                    var result = [];
                    ng.forEach( datas, function ( data ) {
                        if ( data[prop] === targetValue ) result.push( data );
                    });
                    return result;
                }
            };
        },


        /** ==================== String Filters ==================== */

        /**
         * currencyFormat
         * @param   {Number}    price
         * @param   {Int}       fractionSize
         * @return  {String}
         */
        currencyFormat: function () {
            return function ( price, fractionSize, isSignSpace, isSign ) {
                return common.currencyFormat( price, fractionSize, isSignSpace, isSign );
            };
        },

        /**
         * dateFormat
         * @param   {String}    date
         * @return  {String}
         */
        dateFormat: function () {
            return function ( date ) {
                return ( moment && typeof date === 'string' )? moment( date, eut.DATE_TYPE ).format( eut.DATE_TYPE ) : date;
            };
        },

        /**
         * camelcase, ex) my name -> My Name
         * @param   {String}    str
         * @return  {String}
         */
        camelcase: function () {
            return function ( str ) {
                return common.camelcase( str );
            };
        },

        /**
         * capitalize, ex) my name -> My name
         * @param   {String}    str
         * @return  {String}
         */
        capitalize: function () {
            return function ( str ) {
                return common.capitalize( str );
            }
        },

        /**
         * Returns a substring consisting of the characters that start at the specified startIndex and with a length specified by len.
         * @param   {String}    str
         * @param   {Int}       startIdx
         * @param   {Int}       length
         * @return  {String}
         */
        subStr: function () {
            return function ( str, startIdx, length ) {
                if ( typeof str === 'string' ) {
                    str = str.substr( startIdx, length );
                }

                return str;
            };
        },

        /**
         * Text Ellipsis
         * @param   {String}    str
         * @param   {Int}       length
         * @param   {String}    ellipsisText (default:"...")
         * @return  {String}
         */
        textEllipsis: function () {
            return function ( str, length, ellipsisText ) {
                if ( typeof str === 'string' && str.length > length ) {
                    str = str.substr( 0, length ) + ( ellipsisText || '...' );
                }

                return str;
            };
        },

        /**
         * i18n
         * ex) {{ 'test-i18n-code' | i18n }}, {{ 'test-i18n-code-price' | i18n:'price':2000 }}, {{ 'test-i18n-code-price' | i18n:'price:2':2000 }}
         * <tag ng-bind-html="'test-i18n-code' | i18n:'price':2000"><tag>
         * @param   {String}    code    i18n code
         * @return  {String}
         */
        i18n: function () {
            return function ( code ) {
                if ( typeof code === 'string' ) {
                    var args = Array.prototype.slice.call( arguments ).slice( 1, arguments.length );
                    code = eut.i18n.getTemplateData( code, args );
                }

                return code;
            };
        },

        /**
         * Encode Html
         * @param   {String}    str
         * @return  {String}
         */
        encodeHtml: function () {
            return function ( str ) {
                if ( typeof str === 'string' ) {
                    str = $B.html.encode( str );
                }

                return str;
            };
        },

        /**
         * Decode Html
         * @param   {String}    str
         * @return  {String}
         */
        decodeHtml: function () {
            return function ( str ) {
                if ( typeof str === 'string' ) {
                    str = $B.html.decode( str );
                }

                return str;
            };
        },

        /**
         * @param   {String}    str
         * @return  {String}
         */
        decodeURIComponent: function () {
            return function ( str ) {
                if ( typeof str === 'string' ) {
                    str = decodeURIComponent( str );
                }

                return str;
            };
        },

    /**
     * @param   {String}    str
     * @return  {String}
     */
    newlineToHtml: function() {
      return function(str) {
        return common.newlineToHtml(str);
      };
    },

    /**
     * return "min - max" or "max - min" string based on str value.
     * @param   {String}    str
     * @param   {String}    min
     * @param   {String}    max
     * @return  {String}
     */
    getMinMaxStr: function() {
      return function(str, min, max) {
       return common.getMinMaxStr(str, min, max);
      }
    }

  };


    common.angular = common.angular || {};
    common.angular.filter = Filter;
})( angular, _, eut.modal, eut.responsive, eut.common );
















/**
 * Angular Common Module
 */
;(function ( ng, _, modal, responsive, commonNg ) {

  ng.module('eutTemplatesMain', []);
  ng.module('eutCommonModule', ['ngRoute', 'ui.router', 'ngSanitize', 'eutTemplatesMain'])
    .service('validate', commonNg.service.validate)
    .service('templateManager', ['$templateCache', commonNg.service.templateManager])
    .service('responsive', ['$rootScope',commonNg.service.responsive])
    .service('modal', ['$compile', '$interpolate', '$rootScope', commonNg.service.modal])
    .service('stepViewItemCreator', commonNg.service.stepViewItemCreator)
    .service('geocoder', ['$q', commonNg.service.geocoder])
    .service('dealerService', ['geocoder', '$q', commonNg.service.dealerService])
    .directive('stepViewItem', ['$rootScope', commonNg.directive.stepViewItem])
    .directive('pageViewItem', ['$rootScope', commonNg.directive.pageViewItem])
    .directive( 'submitStepViewItem', [ 'templateManager', '$rootScope', commonNg.directive.submitStepViewItem ] )
    .directive('submitStepViewItem2', ['templateManager', '$rootScope', commonNg.directive.submitStepViewItem2])
    .directive( 'submitPageViewItem', [ 'templateManager', '$rootScope', commonNg.directive.submitPageViewItem ] )
    .directive('stepView', ['validate', commonNg.directive.stepView])
    .directive('pageView', ['validate', commonNg.directive.pageView])
    .directive('repeater', ['$timeout', commonNg.directive.repeater])
    .directive('validateElement', ['validate', '$timeout', '$rootScope', commonNg.directive.validateElement])
    .directive('paging', commonNg.directive.paging)
    .directive('ngEnter', commonNg.directive.ngEnter)
    .directive('a', commonNg.directive.anchor)
    .directive('fileBrowse', commonNg.directive.fileBrowse)
    .directive('format', ['validate', '$timeout', '$rootScope', commonNg.directive.format])
    .filter('splice', commonNg.filter.splice)
    .filter('like', commonNg.filter.like)
    .filter('is', commonNg.filter.is)
    .filter('currencyFormat', commonNg.filter.currencyFormat)
    .filter('dateFormat', commonNg.filter.dateFormat)
    .filter('camelcase', commonNg.filter.camelcase)
    .filter('capitalize', commonNg.filter.capitalize)
    .filter('subStr', commonNg.filter.subStr)
    .filter('textEllipsis', commonNg.filter.textEllipsis)
    .filter('i18n', commonNg.filter.i18n)
    .filter('encodeHtml', commonNg.filter.encodeHtml)
    .filter('decodeHtml', commonNg.filter.decodeHtml)
    .filter('decodeURIComponent', commonNg.filter.decodeURIComponent)
    .filter('getMinMaxStr', commonNg.filter.getMinMaxStr)
    .filter('newlineToHtml', commonNg.filter.newlineToHtml);

})(angular, _, eut.modal, eut.responsive, eut.common.angular);

/**
 * Common UI - Video
 */
;(function ( $, eut ) {

    $( window ).load( function () {
        var VIDEO_WIDTH = 1280,
            VIDEO_HEIGHT = 720;

        $( '.eut_video_wrap' ).each( function ( idx, el ) {
            var $target = $( el );

            var vendor = $target.data( 'video-vendor' ),
                path = $target.data( 'video-path' ),
                thumb = $target.data( 'video-thumb' ),
                autoplay = $target.data( 'autoplay' ) || false;

            if ( !vendor || !path ) return;

            var options = {
                vendor: vendor,
                autoplay: autoplay,
                path: getVideoPath( vendor, path ),
                extention: getExtention( path ),
                thumb: thumb,
                width: VIDEO_WIDTH,
                height: VIDEO_HEIGHT,
                isIphone: $B.ua.IPHONE
            };

            if ( vendor === 'flowplayer' ) {
                var scrollY = 0;

                if ( window.flowplayer ) {
                    flowplayer.conf = {
                        key: '$821869264022039,$966736175306901'
                    };

                    flowplayer( $target.get(0), {
                        autoplay: autoplay,
                        poster: thumb || '',
                        clip: {
                            sources: [
                                { type: 'video/mp4', src: path },
                                { type: 'video/webm', src: options.path + '.webm' }
                            ]
                        }
                    }).on( 'fullscreen fullscreen-exit', function (e) {
                        if ( $B.ua.DOC_MODE_IE11_LT ) {
                            if ( e.type === 'fullscreen' ) {
                                scrollY = $( window ).scrollTop();
                            } else if ( e.type === 'fullscreen-exit' ) {
                                $( window ).scrollTop( scrollY );
                            }

                        }
                    });
                }
            } else {
                var html = eut.common.template( 'common.embed-video', options );
                $target.append( html );

                if ( vendor === 'interlake' ) {
                    new eut.Html5Video( $target, {ratioSize: true});
                } else {
                    var $video = $target.find( '.eut_video' );
                    $video.ixRatioSize();

                    $( window ).resize( function (e) {
                        $video.ixRatioSize();
                    });
                }
            }

        });



        /** ========== Methods ========== */

        function getVideoPath ( vendor, path ) {
            if ( typeof path !== 'string' ) return '';

            var videoId = '';

            switch ( vendor ) {
                case 'youtube':
                    if ( /^https:\/\//i.test(path) ) {
                        videoId = path.match( /[\/\=]([a-z0-9_\-]+)$/i );
                        videoId = ( videoId && videoId.length > 1 )? videoId[1] : '';
                    } else if ( /^[a-z0-9_\-]+$/i.test(path) ) {
                        videoId = path;
                    }
                    break;
                case 'flowplayer':
                case 'interlake':
                    videoId = path.replace( /\.[a-z0-9]+$/i, '' );
                    break;
            }

            return videoId;
        }

        function getExtention ( path ) {
            if ( typeof path !== 'string' ) return '';

            var result = '';

            String( path ).replace( /(.[a-z0-9]+)$/i, function ( str, f1 ) {
                result = f1;
            });

            return result;
        }

    });

})( jQuery, eut );
/**
 * Analytics value Converter
 */
;(function ( $, eut ) {

    var DEFAULT_DATA = '';


    var Converter = {
        _converters: {},

        /**
         * analytics value check
         * @param {*}    value
         */
        _isValue: function ( value ) {
            if ( (value || value === 0) && (typeof value === 'string' || typeof value === 'number' || _.isArray(value)) ) {
                return true;
            } else {
                return false;
            }
        },

        _default: function ( value ) {
            if ( this._isValue(value) ) {
                return value
            } else {
                return DEFAULT_DATA;
            }
        },

        _convertValue: function ( value ) {
            var result = DEFAULT_DATA;

            if ( this._isValue(value) ) {
                if ( typeof value === 'string' ) {
                    result = value;
                } else if ( _.isArray(value) ) {
                    result = value.join( '|' );
                } else {
                    result = value;
                }
            }

            return result;
        },

        /** =============== Public Methods =============== */

        /**
         * add prop converter rule
         * @param {String}    name      DTM variable
         * @param {Function}  callback
         */
        add: function ( name, callback ) {
            this._converters[name] = callback;
        },

        /**
         * DTM variable convert
         * @param   {String}    name    DTM variable
         * @param   {String}    value
         * @returns {*}
         */
        convert: function ( name, value ) {
            var converter = this._converters[name],
                val = this._convertValue( value );

            val = this.toLowerCase( val );

            return converter ? converter( val ) : this._default( val );
        },

        toUpperCase: function ( value ) {
            if ( typeof value === 'string' ) {
                return value.toUpperCase();
            } else {
                return value;
            }
        },

        toLowerCase: function ( value ) {
            if ( typeof value === 'string' ) {
                return value.toLowerCase();
            } else {
                return value;
            }
        }
    };



    /** ==================== ==================== ==================== */
    /** ====================    Converter Rules   ==================== */
    /** ==================== ==================== ==================== */

    //Test
    Converter.add( 'test', function ( value ) {
        var result = DEFAULT_DATA;

        return result;
    });


    eut.analytics = eut.analytics || {};
    eut.analytics.converter = Converter;

})( jQuery, eut );

/**
 * Analytics
 */
;(function ( $, eut, converter ) {
    if ( typeof window.dtmDataLayer !== 'object' ) {
        window.dtmDataLayer = {};
    }

    //DTM Value Group
    
      var _satellite = window._satellite || { track: function() {}, setCookie: function () {} };


    var Analytics = {
        //value DTM format convert
        _convert: function ( key, value ) {
            return converter.convert( key, value );
        },

        /** =============== Public Methods =============== */

        /**
         * Enable EU compliance for Adobe Analytics
         * @param {Boolean}    state
         */
        agree: function ( state ) {
           // _satellite.setCookie( 'sat_track', state );
        },

        /**
         * insert data DTM variable
         * @param   {Object}    values
         * @returns {Analytics}
         */
        prop: function ( values ) {
            if(dtmDataLayer.vehicle_name) { 
                    dtmDataLayer.vehicle_name = dtmDataLayer.vehicle_name.replace(/ /g,'').toLowerCase();
            }
            if ( typeof values === 'object' ) {
                for ( var key in values ) {
                    if ( typeof values === 'object' ) {
                        for ( var key in values ) {
                            if(key == 'vehicle_name'){
                                dtmDataLayer[key] = this._convert( key, values[key].toString().replace(/ /g,'').toLowerCase());
                            }
                            else 
                                dtmDataLayer[key] = this._convert( key, values[key]);
                        }
                    }
                }
            }

            return this;
        },

        track: function ( name ) {
            if ( typeof name === 'string' ) {
                _satellite.track( name );
            }

            return this;
        }
    };


    eut.analytics = Analytics;

})( jQuery, eut, eut.analytics.converter );

(function ($) {

  $.fn.customScrollbar = function (options, args) {

    var defaultOptions = {
      skin: undefined,
      hScroll: true,
      vScroll: true,
      updateOnWindowResize: false,
      animationSpeed: 300,
      onCustomScroll: undefined,
      swipeSpeed: 1,
      wheelSpeed: 40,
      fixedThumbWidth: undefined,
      fixedThumbHeight: undefined,
      preventDefaultScroll: false
    }

    var Scrollable = function (element, options) {
      this.$element = $(element);
      this.options = options;
      this.addScrollableClass();
      this.addSkinClass();
      this.addScrollBarComponents();
      if (this.options.vScroll)
        this.vScrollbar = new Scrollbar(this, new VSizing());
      if (this.options.hScroll)
        this.hScrollbar = new Scrollbar(this, new HSizing());
      this.$element.data("scrollable", this);
      this.initKeyboardScrolling();
      this.bindEvents();
    }

    Scrollable.prototype = {

      addScrollableClass: function () {
        if (!this.$element.hasClass("scrollable")) {
          this.scrollableAdded = true;
          this.$element.addClass("scrollable");
        }
      },

      removeScrollableClass: function () {
        if (this.scrollableAdded)
          this.$element.removeClass("scrollable");
      },

      addSkinClass: function () {
        if (typeof(this.options.skin) == "string" && !this.$element.hasClass(this.options.skin)) {
          this.skinClassAdded = true;
          this.$element.addClass(this.options.skin);
        }
      },

      removeSkinClass: function () {
        if (this.skinClassAdded)
          this.$element.removeClass(this.options.skin);
      },

      addScrollBarComponents: function () {
        this.assignViewPort();
        if (this.$viewPort.length == 0) {
          this.$element.wrapInner("<div class=\"viewport\" />");
          this.assignViewPort();
          this.viewPortAdded = true;
        }
        this.assignOverview();
        if (this.$overview.length == 0) {
          this.$viewPort.wrapInner("<div class=\"overview\" />");
          this.assignOverview();
          this.overviewAdded = true;
        }
        this.addScrollBar("vertical", "prepend");
        this.addScrollBar("horizontal", "append");
      },

      removeScrollbarComponents: function () {
        this.removeScrollbar("vertical");
        this.removeScrollbar("horizontal");
        if (this.overviewAdded)
          this.$element.unwrap();
        if (this.viewPortAdded)
          this.$element.unwrap();
      },

      removeScrollbar: function (orientation) {
        if (this[orientation + "ScrollbarAdded"])
          this.$element.find(".scroll-bar." + orientation).remove();
      },

      assignViewPort: function () {
        this.$viewPort = this.$element.find(".viewport");
      },

      assignOverview: function () {
        this.$overview = this.$viewPort.find(".overview");
      },

      addScrollBar: function (orientation, fun) {
        if (this.$element.find(".scroll-bar." + orientation).length == 0) {
          this.$element[fun]("<div class='scroll-bar " + orientation + "'><div class='thumb'></div></div>")
          this[orientation + "ScrollbarAdded"] = true;
        }
      },

      resize: function (keepPosition) {
        if (this.vScrollbar)
          this.vScrollbar.resize(keepPosition);
        if (this.hScrollbar)
          this.hScrollbar.resize(keepPosition);
      },

      scrollTo: function (element) {
        if (this.vScrollbar)
          this.vScrollbar.scrollToElement(element);
        if (this.hScrollbar)
          this.hScrollbar.scrollToElement(element);
      },

      scrollToXY: function (x, y) {
        this.scrollToX(x);
        this.scrollToY(y);
      },

      scrollToX: function (x) {
        if (this.hScrollbar)
          this.hScrollbar.scrollOverviewTo(x, true);
      },

      scrollToY: function (y) {
        if (this.vScrollbar)
          this.vScrollbar.scrollOverviewTo(y, true);
      },

      scrollByX: function (x) {
        if (this.hScrollbar)
          this.scrollToX(this.hScrollbar.overviewPosition() + x);
      },

      scrollByY: function (y) {
        if (this.vScrollbar)
          this.scrollToY(this.vScrollbar.overviewPosition() + y);
      },

      remove: function () {
        this.removeScrollableClass();
        this.removeSkinClass();
        this.removeScrollbarComponents();
        this.$element.data("scrollable", null);
        this.removeKeyboardScrolling();
        if (this.vScrollbar)
          this.vScrollbar.remove();
        if (this.hScrollbar)
          this.hScrollbar.remove();
      },

      setAnimationSpeed: function (speed) {
        this.options.animationSpeed = speed;
      },

      isInside: function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.top >= wrappingElementOffset.top) && (elementOffset.left >= wrappingElementOffset.left) &&
          (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height()) &&
          (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width())
      },

      initKeyboardScrolling: function () {
        var _this = this;

        this.elementKeydown = function (event) {
          if (document.activeElement === _this.$element[0]) {
            if (_this.vScrollbar)
              _this.vScrollbar.keyScroll(event);
            if (_this.hScrollbar)
              _this.hScrollbar.keyScroll(event);
          }
        }

        this.$element
          .attr('tabindex', '-1')
          .keydown(this.elementKeydown);
      },

      removeKeyboardScrolling: function () {
        this.$element
          .removeAttr('tabindex')
          .unbind("keydown", this.elementKeydown);
      },

      bindEvents: function () {
        if (this.options.onCustomScroll)
          this.$element.on("customScroll", this.options.onCustomScroll);
      }

    }

    var Scrollbar = function (scrollable, sizing) {
      this.scrollable = scrollable;
      this.sizing = sizing
      this.$scrollBar = this.sizing.scrollBar(this.scrollable.$element);
      this.$thumb = this.$scrollBar.find(".thumb");
      this.setScrollPosition(0, 0);
      this.resize();
      this.initMouseMoveScrolling();
      this.initMouseWheelScrolling();
      this.initTouchScrolling();
      this.initMouseClickScrolling();
      this.initWindowResize();
    }

    Scrollbar.prototype = {

      resize: function (keepPosition) {
        this.overviewSize = this.sizing.size(this.scrollable.$overview);
        this.calculateViewPortSize();
        this.sizing.size(this.scrollable.$viewPort, this.viewPortSize);
        this.ratio = this.viewPortSize / this.overviewSize;
        this.sizing.size(this.$scrollBar, this.viewPortSize);
        this.thumbSize = this.calculateThumbSize();
        this.sizing.size(this.$thumb, this.thumbSize);
        this.maxThumbPosition = this.calculateMaxThumbPosition();
        this.maxOverviewPosition = this.calculateMaxOverviewPosition();
        this.enabled = (this.overviewSize > this.viewPortSize);
        if (this.scrollPercent === undefined)
          this.scrollPercent = 0.0;
        if (this.enabled)
          this.rescroll(keepPosition);
        else
          this.setScrollPosition(0, 0);
        this.$scrollBar.toggle(this.enabled);
      },

      calculateViewPortSize: function () {
        var elementSize = this.sizing.size(this.scrollable.$element);
        if (elementSize > 0 && !this.maxSizeUsed) {
          this.viewPortSize = elementSize;
          this.maxSizeUsed = false;
        }
        else {
          var maxSize = this.sizing.maxSize(this.scrollable.$element);
          this.viewPortSize = Math.min(maxSize, this.overviewSize);
          this.maxSizeUsed = true;
        }
      },

      calculateThumbSize: function () {
        var fixedSize = this.sizing.fixedThumbSize(this.scrollable.options)
        var size;
        if (fixedSize)
          size = fixedSize;
        else
          size = this.ratio * this.viewPortSize
        return Math.max(size, this.sizing.minSize(this.$thumb));
      },

      initMouseMoveScrolling: function () {
        var _this = this;
        this.$thumb.mousedown(function (event) {
          if (_this.enabled)
            _this.startMouseMoveScrolling(event);
        });
        this.documentMouseup = function (event) {
          _this.stopMouseMoveScrolling(event);
        };
        $(document).mouseup(this.documentMouseup);
        this.documentMousemove = function (event) {
          _this.mouseMoveScroll(event);
        };
        $(document).mousemove(this.documentMousemove);
        this.$thumb.click(function (event) {
          event.stopPropagation();
        });
      },

      removeMouseMoveScrolling: function () {
        this.$thumb.unbind();
        $(document).unbind("mouseup", this.documentMouseup);
        $(document).unbind("mousemove", this.documentMousemove);
      },

      initMouseWheelScrolling: function () {
        var _this = this;
        this.scrollable.$element.mousewheel(function (event, delta, deltaX, deltaY) {
          if (_this.enabled) {
            var scrolled = _this.mouseWheelScroll(deltaX, deltaY);
            _this.stopEventConditionally(event, scrolled);
          }
        });
      },

      removeMouseWheelScrolling: function () {
        this.scrollable.$element.unbind("mousewheel");
      },

      initTouchScrolling: function () {
        if (document.addEventListener) {
          var _this = this;
          this.elementTouchstart = function (event) {
            if (_this.enabled)
              _this.startTouchScrolling(event);
          }
          this.scrollable.$element[0].addEventListener("touchstart", this.elementTouchstart);
          this.documentTouchmove = function (event) {
            _this.touchScroll(event);
          }
          this.scrollable.$element[0].addEventListener("touchmove", this.documentTouchmove);
          this.elementTouchend = function (event) {
            _this.stopTouchScrolling(event);
          }
          this.scrollable.$element[0].addEventListener("touchend", this.elementTouchend);
        }
      },

      removeTouchScrolling: function () {
        if (document.addEventListener) {
          this.scrollable.$element[0].removeEventListener("touchstart", this.elementTouchstart);
          document.removeEventListener("touchmove", this.documentTouchmove);
          this.scrollable.$element[0].removeEventListener("touchend", this.elementTouchend);
        }
      },

      initMouseClickScrolling: function () {
        var _this = this;
        this.scrollBarClick = function (event) {
          _this.mouseClickScroll(event);
        };
        this.$scrollBar.click(this.scrollBarClick);
      },

      removeMouseClickScrolling: function () {
        this.$scrollBar.unbind("click", this.scrollBarClick);
      },

      initWindowResize: function () {
        if (this.scrollable.options.updateOnWindowResize) {
          var _this = this;
          this.windowResize = function () {
            _this.resize();
          };
          $(window).resize(this.windowResize);
        }
      },

      removeWindowResize: function () {
        $(window).unbind("resize", this.windowResize);
      },

      isKeyScrolling: function (key) {
        return this.keyScrollDelta(key) != null;
      },

      keyScrollDelta: function (key) {
        for (var scrollingKey in this.sizing.scrollingKeys)
          if (scrollingKey == key)
            return this.sizing.scrollingKeys[key](this.viewPortSize);
        return null;
      },

      startMouseMoveScrolling: function (event) {
        this.mouseMoveScrolling = true;
        $("body").addClass("not-selectable");
        this.setUnselectable($("body"), "on");
        this.setScrollEvent(event);
        event.preventDefault();
      },

      stopMouseMoveScrolling: function (event) {
        this.mouseMoveScrolling = false;
        $("body").removeClass("not-selectable");
        this.setUnselectable($("body"), null);
      },

      setUnselectable: function (element, value) {
        if (element.attr("unselectable") != value) {
          element.attr("unselectable", value);
          element.find(':not(input)').attr('unselectable', value);
        }
      },

      mouseMoveScroll: function (event) {
        if (this.mouseMoveScrolling) {
          var delta = this.sizing.mouseDelta(this.scrollEvent, event);
          this.scrollThumbBy(delta);
          this.setScrollEvent(event);
        }
      },

      startTouchScrolling: function (event) {
        if (event.touches && event.touches.length == 1) {
          this.setScrollEvent(event.touches[0]);
          this.touchScrolling = true;
          event.stopPropagation();
        }
      },

      touchScroll: function (event) {
        if (this.touchScrolling && event.touches && event.touches.length == 1) {
          var delta = -this.sizing.mouseDelta(this.scrollEvent, event.touches[0]) * this.scrollable.options.swipeSpeed;
          var scrolled = this.scrollOverviewBy(delta);
          if (scrolled)
            this.setScrollEvent(event.touches[0]);
          this.stopEventConditionally(event, scrolled);
        }
      },

      stopTouchScrolling: function (event) {
        this.touchScrolling = false;
        event.stopPropagation();
      },

      mouseWheelScroll: function (deltaX, deltaY) {
        var delta = -this.sizing.wheelDelta(deltaX, deltaY) * this.scrollable.options.wheelSpeed;
        if (delta != 0)
          return this.scrollOverviewBy(delta);
      },

      mouseClickScroll: function (event) {
        var delta = this.viewPortSize - 20;
        if (event["page" + this.sizing.scrollAxis()] < this.$thumb.offset()[this.sizing.offsetComponent()])
        // mouse click over thumb
          delta = -delta;
        this.scrollOverviewBy(delta);
      },

      keyScroll: function (event) {
        var keyDown = event.which;
        if (this.enabled && this.isKeyScrolling(keyDown)) {
          var scrolled = this.scrollOverviewBy(this.keyScrollDelta(keyDown));
          this.stopEventConditionally(event, scrolled);
        }
      },

      scrollThumbBy: function (delta) {
        var thumbPosition = this.thumbPosition();
        thumbPosition += delta;
        thumbPosition = this.positionOrMax(thumbPosition, this.maxThumbPosition);
        var oldScrollPercent = this.scrollPercent;
        this.scrollPercent = thumbPosition / this.maxThumbPosition;
        if (oldScrollPercent != this.scrollPercent) {
          var overviewPosition = (thumbPosition * this.maxOverviewPosition) / this.maxThumbPosition;
          this.setScrollPosition(overviewPosition, thumbPosition);
          this.triggerCustomScroll(oldScrollPercent);
          return true
        }
        else
          return false;
      },

      thumbPosition: function () {
        return this.$thumb.position()[this.sizing.offsetComponent()];
      },

      scrollOverviewBy: function (delta) {
        var overviewPosition = this.overviewPosition() + delta;
        return this.scrollOverviewTo(overviewPosition, false);
      },

      overviewPosition: function () {
        return -this.scrollable.$overview.position()[this.sizing.offsetComponent()];
      },

      scrollOverviewTo: function (overviewPosition, animate) {
        overviewPosition = this.positionOrMax(overviewPosition, this.maxOverviewPosition);
        var oldScrollPercent = this.scrollPercent;
        this.scrollPercent = overviewPosition / this.maxOverviewPosition;
        if (oldScrollPercent != this.scrollPercent) {
          var thumbPosition = this.scrollPercent * this.maxThumbPosition;
          if (animate)
            this.setScrollPositionWithAnimation(overviewPosition, thumbPosition);
          else
            this.setScrollPosition(overviewPosition, thumbPosition);
          this.triggerCustomScroll(oldScrollPercent);
          return true;
        }
        else
          return false;
      },

      positionOrMax: function (p, max) {
        if (p < 0)
          return 0;
        else if (p > max)
          return max;
        else
          return p;
      },

      triggerCustomScroll: function (oldScrollPercent) {
        this.scrollable.$element.trigger("customScroll", {
            scrollAxis: this.sizing.scrollAxis(),
            direction: this.sizing.scrollDirection(oldScrollPercent, this.scrollPercent),
            scrollPercent: this.scrollPercent * 100
          }
        );
      },

      rescroll: function (keepPosition) {
        if (keepPosition) {
          var overviewPosition = this.positionOrMax(this.overviewPosition(), this.maxOverviewPosition);
          this.scrollPercent = overviewPosition / this.maxOverviewPosition;
          var thumbPosition = this.scrollPercent * this.maxThumbPosition;
          this.setScrollPosition(overviewPosition, thumbPosition);
        }
        else {
          var thumbPosition = this.scrollPercent * this.maxThumbPosition;
          var overviewPosition = this.scrollPercent * this.maxOverviewPosition;
          this.setScrollPosition(overviewPosition, thumbPosition);
        }
      },

      setScrollPosition: function (overviewPosition, thumbPosition) {
        this.$thumb.css(this.sizing.offsetComponent(), thumbPosition + "px");
        this.scrollable.$overview.css(this.sizing.offsetComponent(), -overviewPosition + "px");
      },

      setScrollPositionWithAnimation: function (overviewPosition, thumbPosition) {
        var thumbAnimationOpts = {};
        var overviewAnimationOpts = {};
        thumbAnimationOpts[this.sizing.offsetComponent()] = thumbPosition + "px";
        this.$thumb.animate(thumbAnimationOpts, this.scrollable.options.animationSpeed);
        overviewAnimationOpts[this.sizing.offsetComponent()] = -overviewPosition + "px";
        this.scrollable.$overview.animate(overviewAnimationOpts, this.scrollable.options.animationSpeed);
      },

      calculateMaxThumbPosition: function () {
        return Math.max(0, this.sizing.size(this.$scrollBar) - this.thumbSize);
      },

      calculateMaxOverviewPosition: function () {
        return Math.max(0, this.sizing.size(this.scrollable.$overview) - this.sizing.size(this.scrollable.$viewPort));
      },

      setScrollEvent: function (event) {
        var attr = "page" + this.sizing.scrollAxis();
        if (!this.scrollEvent || this.scrollEvent[attr] != event[attr])
          this.scrollEvent = {pageX: event.pageX, pageY: event.pageY};
      },

      scrollToElement: function (element) {
        var $element = $(element);
        if (this.sizing.isInside($element, this.scrollable.$overview) && !this.sizing.isInside($element, this.scrollable.$viewPort)) {
          var elementOffset = $element.offset();
          var overviewOffset = this.scrollable.$overview.offset();
          var viewPortOffset = this.scrollable.$viewPort.offset();
          this.scrollOverviewTo(elementOffset[this.sizing.offsetComponent()] - overviewOffset[this.sizing.offsetComponent()], true);
        }
      },

      remove: function () {
        this.removeMouseMoveScrolling();
        this.removeMouseWheelScrolling();
        this.removeTouchScrolling();
        this.removeMouseClickScrolling();
        this.removeWindowResize();
      },

      stopEventConditionally: function (event, condition) {
        if (condition || this.scrollable.options.preventDefaultScroll) {
          event.preventDefault();
          event.stopPropagation();
        }
      }

    }

    var HSizing = function () {
    }

    HSizing.prototype = {
      size: function ($el, arg) {
        if (arg)
          return $el.width(arg);
        else
          return $el.width();
      },

      minSize: function ($el) {
        return parseInt($el.css("min-width")) || 0;
      },

      maxSize: function ($el) {
        return parseInt($el.css("max-width")) || 0;
      },

      fixedThumbSize: function (options) {
        return options.fixedThumbWidth;
      },

      scrollBar: function ($el) {
        return $el.find(".scroll-bar.horizontal");
      },

      mouseDelta: function (event1, event2) {
        return event2.pageX - event1.pageX;
      },

      offsetComponent: function () {
        return "left";
      },

      wheelDelta: function (deltaX, deltaY) {
        return deltaX;
      },

      scrollAxis: function () {
        return "X";
      },

      scrollDirection: function (oldPercent, newPercent) {
        return oldPercent < newPercent ? "right" : "left";
      },

      scrollingKeys: {
        37: function (viewPortSize) {
          return -10; //arrow left
        },
        39: function (viewPortSize) {
          return 10; //arrow right
        }
      },

      isInside: function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.left >= wrappingElementOffset.left) &&
          (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width());
      }

    }

    var VSizing = function () {
    }

    VSizing.prototype = {

      size: function ($el, arg) {
        if (arg)
          return $el.height(arg);
        else
          return $el.height();
      },

      minSize: function ($el) {
        return parseInt($el.css("min-height")) || 0;
      },

      maxSize: function ($el) {
        return parseInt($el.css("max-height")) || 0;
      },

      fixedThumbSize: function (options) {
        return options.fixedThumbHeight;
      },

      scrollBar: function ($el) {
        return $el.find(".scroll-bar.vertical");
      },

      mouseDelta: function (event1, event2) {
        return event2.pageY - event1.pageY;
      },

      offsetComponent: function () {
        return "top";
      },

      wheelDelta: function (deltaX, deltaY) {
        return deltaY;
      },

      scrollAxis: function () {
        return "Y";
      },

      scrollDirection: function (oldPercent, newPercent) {
        return oldPercent < newPercent ? "down" : "up";
      },

      scrollingKeys: {
        38: function (viewPortSize) {
          return -10; //arrow up
        },
        40: function (viewPortSize) {
          return 10; //arrow down
        },
        33: function (viewPortSize) {
          return -(viewPortSize - 20); //page up
        },
        34: function (viewPortSize) {
          return viewPortSize - 20; //page down
        }
      },

      isInside: function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.top >= wrappingElementOffset.top) &&
          (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height());
      }

    }

    return this.each(function () {
      if (options == undefined)
        options = defaultOptions;
      if (typeof(options) == "string") {
        var scrollable = $(this).data("scrollable");
        if (scrollable)
          scrollable[options](args);
      }
      else if (typeof(options) == "object") {
        options = $.extend(defaultOptions, options);
        new Scrollable($(this), options);
      }
      else
        throw "Invalid type of options";
    });

  }
  ;

})
  (jQuery);

(function ($) {

  var types = ['DOMMouseScroll', 'mousewheel'];

  if ($.event.fixHooks) {
    for (var i = types.length; i;) {
      $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
  }

  $.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener) {
        for (var i = types.length; i;) {
          this.addEventListener(types[--i], handler, false);
        }
      } else {
        this.onmousewheel = handler;
      }
    },

    teardown: function () {
      if (this.removeEventListener) {
        for (var i = types.length; i;) {
          this.removeEventListener(types[--i], handler, false);
        }
      } else {
        this.onmousewheel = null;
      }
    }
  };

  $.fn.extend({
    mousewheel: function (fn) {
      return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },

    unmousewheel: function (fn) {
      return this.unbind("mousewheel", fn);
    }
  });


  function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";

    // Old school scrollwheel delta
    if (orgEvent.wheelDelta) {
      delta = orgEvent.wheelDelta / 120;
    }
    if (orgEvent.detail) {
      delta = -orgEvent.detail / 3;
    }

    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;

    // Gecko
    if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
      deltaY = 0;
      deltaX = delta;
    }

    // Webkit
    if (orgEvent.wheelDeltaY !== undefined) {
      deltaY = orgEvent.wheelDeltaY / 120;
    }
    if (orgEvent.wheelDeltaX !== undefined) {
      deltaX = orgEvent.wheelDeltaX / 120;
    }

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    return ($.event.dispatch || $.event.handle).apply(this, args);
  }

})(jQuery);

