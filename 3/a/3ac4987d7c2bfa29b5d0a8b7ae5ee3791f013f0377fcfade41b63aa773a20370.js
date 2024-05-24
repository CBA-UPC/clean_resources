const g=s=>(s&&!s.endsWith(";")&&(s+=";"),s),C=(s,n,d,c,u)=>{var h,y,R,S,a,x;d=g(d);let e=document.querySelector("#add-dynamic-class-custom-styles"),o=[],r;if(e&&(o=Array.from(((h=e.sheet)==null?void 0:h.cssRules)??[]),r=o.find(t=>t instanceof CSSStyleRule&&t.selectorText===`.${n}`)),!(r&&r.style.cssText===d)){if(!e){const t=document.head||document.getElementsByTagName("head")[0];e=document.createElement("style"),e.id="add-dynamic-class-custom-styles",t.appendChild(e)}if(r){const t=o.indexOf(r);t>=0&&((y=e.sheet)==null||y.deleteRule(t),o=Array.from(((R=e.sheet)==null?void 0:R.cssRules)??[]))}return c&&(d+=`animation-name: ${c};`),(S=e.sheet)==null||S.insertRule(`.${n} { ${d} }`),c&&u&&(o.find(f=>f instanceof CSSKeyframesRule&&f.name===c)||(a=e.sheet)==null||a.insertRule(`
        @keyframes ${c} {
          ${u}
        }
      `)),(x=s==null?void 0:s.classList)!=null&&x.contains(n)||s.classList.add(n),{destroy:()=>{var t;if((t=s==null?void 0:s.classList)!=null&&t.contains(n)&&s.classList.remove(n),e!=null&&e.sheet){const f=e.sheet.cssRules;for(let i=0;i<f.length;i++){const l=f[i];if(l instanceof CSSStyleRule&&l.selectorText===`.${n}`){e.sheet.deleteRule(i);break}}if(c)for(let i=0;i<f.length;i++){const l=f[i];if(l instanceof CSSKeyframesRule&&l.name===c){e.sheet.deleteRule(i);break}}}}}}};export{C as a};
ar launchVaClass = "egain-launch-va";
    var launchHoverClass = "egain-launch-hover";
    var maximizedDockWindowPositionClass = "eg-maximized-right-bottom";
    var minimizedButtonPositionClass = "eg-minimized-right-bottom";
    var launchButtonPositionClass = "eg-launch-right-bottom";
    var animationClass = "eg-animate";
    var hoverClass = "eg-hover";
    
    function StorageUtil(storageType) {
        this.storageType = storageType ? storageType : 'localStorage';
    }
    StorageUtil.prototype._getStorageType = function (requiredStorageType, IsConfidential) {
        return (true === MultiSubDomainSupport.IsRequired && true !== IsConfidential) ? MultiSubDomainSupport.StorageType
                : this._getRequiredStorageType(requiredStorageType);
    };
    StorageUtil.prototype._getRequiredStorageType = function (requiredStorageType) {
        return requiredStorageType ? requiredStorageType : this.storageType;
    };
    StorageUtil.prototype.getValue = function (key, storageType, IsConfidential) {
        var storage = this._getStorageType(storageType, IsConfidential);
        try {
            switch (storage) {
                case "localStorage" :
                    return window.localStorage.getItem(key);
                    break;
                case "sessionStorage":
                    return window.sessionStorage.getItem(key);
                    break;
                case "cookie":
                    return getCookie(key);
                    break;
                default:
                    return null;
                    break;
            }
        } catch (e) {
            console.log('Storage is not supported.');
            return null;
        }
    };
    StorageUtil.prototype.getValues = function (keyArr, storageType, IsConfidential) {
        var storage = this._getStorageType(storageType, IsConfidential);
        var result = {};
        try {
            for (var i in keyArr) {
                var key = keyArr[i];
                if (key) {
                    switch (storage) {
                        case "localStorage" :
                            result[key] = window.localStorage.getItem(key);
                            break;
                        case "sessionStorage":
                            result[key] = window.sessionStorage.getItem(key);
                            break;
                        case "cookie":
                            result[key] = getCookie(key);
                            break;
                        default:
                            break;
                    }
                }
            }
        } catch (e) {
            console.log('Storage is not supported.');
        }
        return result;
    };
    StorageUtil.prototype.setValue = function (key, value, storageType, IsConfidential) {
        var storage = this._getStorageType(storageType, IsConfidential);
        try {
            switch (storage) {
                case "localStorage":
                    window.localStorage.setItem(key, value);
                    MultiSubDomainSupport.settingInStorage(key, value, storage);
                    break;
                case "sessionStorage":
                    window.sessionStorage.setItem(key, value);
                    MultiSubDomainSupport.settingInStorage(key, value, storage);
                    break;
                case "cookie":
                    setCookie(key, value, this._getRequiredStorageType(storageType), IsConfidential);
                    break;
                default:
                    break;
            }
        } catch (e) {
            console.log('Storage is not supported.');
        }
    };
    StorageUtil.prototype.setValues = function (keyValuePairs, storageType, IsConfidential) {
        var storage = this._getStorageType(storageType, IsConfidential);
        var keys = Object.keys(keyValuePairs);
        for (var i in keys) {
            var key = keys[i];
            if (key) {
                switch (storage) {
                    case "localStorage" :
                        window.localStorage[key] = keyValuePairs[key];
                        MultiSubDomainSupport.settingInStorage(key, keyValuePairs[key], storage);
                        break;
                    case "sessionStorage":
                        window.sessionStorage[key] = keyValuePairs[key];
                        MultiSubDomainSupport.settingInStorage(key, keyValuePairs[key], storage);
                        break;
                    case "cookie":
                        setCookie(key, keyValuePairs[key], this._getRequiredStorageType(storageType), IsConfidential);
                        break;
                    default:
                        break;
                }
            }
        }
    };
    StorageUtil.prototype.deleteValue = function (key, storageType, IsConfidential) {
        var storage = this._getStorageType(storageType, IsConfidential);
        if (key) {
            switch (storage) {
                case "localStorage" :
                    window.localStorage.removeItem(key);
                    MultiSubDomainSupport.removingFromStorage(key, storage);
                    break;
                case "sessionStorage":
                    window.sessionStorage.removeItem(key);
                    MultiSubDomainSupport.removingFromStorage(key, storage);
                    break;
                case "cookie":
                    deleteCookie(key);
                    break;
                default:
                    break;
            }
        }
    };
    StorageUtil.prototype.deleteValues = function (keyArr, storageType, IsConfidential) {
        var storage = this._getStorageType(storageType, IsConfidential);
        for (var i in keyArr) {
            var key = keyArr[i];
            if (key) {
                switch (storage) {
                    case "localStorage" :
                        window.localStorage.removeItem(key);
                        MultiSubDomainSupport.removingFromStorage(key, storage);
                        break;
                    case "sessionStorage":
                        window.sessionStorage.removeItem(key);
                        MultiSubDomainSupport.removingFromStorage(key, storage);
                        break;
                    case "cookie":
                        deleteCookie(key);
                        break;
                    default:
                        break;
                }
            }
        }
    };
    /*
     * Function to get value for a cookie.
     * It is an enhanced version of the function on https://stackoverflow.com/questions/10730362/get-cookie-by-name
     * It resolves three issues: multiple cookies set with same name
     * and get the value of the first cookie if two or more cookies are set with the same name
     * and it can handle regex reserved characters that otherwise create issue if regular expression is being used.
     * @param {type} name. Non-empty String. Name of the cookie
     * @returns {unresolved} String. Value of the first cookie with the same name if found else null.
     */
    var getCookie = function (name) {
        var cookieVal = null;
        if (name && "string" === typeof name) {
            var allCookiesString = document.cookie;
            var cookiesString = "; " + allCookiesString;
            var parts = cookiesString.split("; " + name + "=");
            //Remove the first element as it is empty
            parts.shift();
            if (1 <= parts.length) {
                cookieVal = parts.shift().split(";").shift();
            }
        }
        return cookieVal;
    };
    /*
     * Function to set a cookie depending upon the storage type as required
     * @param {type} name. String, name of the cookie. If invalid then the cookie will not be created.
     * @param {type} value. String, value of the cookie. If not string then the cookie will not be created.
     * @param {type} storageType. String, storage type required.
     * @returns {Boolean} true if cookie is created else false.
     */
    var setCookie = function (name, value, storageType, IsConfidential) {
        /*
         * If the storageType is localStorage
         * then set the expiry period to 1 hour to create the persitent cookie
         * else create the session cookie
         * 3600000 milli seconds = 1 * 60 * 60 * 1000 (1 hour)
         */
        var expiryPeriod = ("localStorage" === storageType) ? 3600000 : null;
        return setCookieWithExpiryPeriod(name, value, expiryPeriod, IsConfidential);
    };
    /*
     * Function to set a cookie.
     * It is an enhanced version of the function on https://www.w3schools.com/js/js_cookies.asp
     * @param {type} name. String, name of the cookie. If invalid then the cookie will not be created.
     * @param {type} value. String, value of the cookie. If not string then the cookie will not be created.
     * @param {type} expiryPeriod. Number, cookie expiry period in milliseconds. If invalid then it will be created as a session cookie.
     * @returns {Boolean} true if cookie is created else false.
     */
    var setCookieWithExpiryPeriod = function (name, value, expiryPeriod, IsConfidential) {
        var cookieSet = false;
        var isSecure = (true === MultiSubDomainSupport.isRequiredForCookie()) ? MultiSubDomainSupport.IsCookieSecured : false;
        var canCookieBeCreated = (true !== IsConfidential || true === isSecure);
        if (true === canCookieBeCreated && name && "string" === typeof name && "string" === typeof value) {
            var domainString = "";
            var domain = (true === MultiSubDomainSupport.isRequiredForCookie()) ? MultiSubDomainSupport.CookieParentDomain : null;
            if (domain && "string" === typeof domain) {
                domainString = "; domain=" + domain;
            }
            var pathString = "";
            var path = (true === MultiSubDomainSupport.isRequiredForCookie()) ? MultiSubDomainSupport.CookiePath : null;
            if (path && "string" === typeof path) {
                pathString = "; path=" + path;
            }
            var expires = "";
            if ("number" === typeof expiryPeriod) {
                var date = new Date();
                date.setTime(date.getTime() + (expiryPeriod));
                expires = "; expires=" + date.toUTCString();
            }
            var secureString = "";
            if (true === isSecure) {
                secureString = "; secure";
            }
            document.cookie = name + "=" + value + domainString + pathString + expires + secureString;
            cookieSet = true;
        }
        return cookieSet;
    };
    /*
     * Function to delete a cookie.
     * It is an enhanced version of the function on https://www.w3schools.com/js/js_cookies.asp
     * @param {type} name. String, name of the cookie. If invalid then the cookie will not be created.
     * @returns {Boolean} true if cookie is deleted else false.
     */
    var deleteCookie = function (name) {
        var deleted = false;
        if (name && "string" === typeof name) {
            /*
             * Setting the expiry period to one week in past to delete it
             * 604800000 milli seconds = 1 * 7 * 24 * 60 * 60 * 1000 (1 week)
             */
            var expiryPeriod = -604800000;
            setCookieWithExpiryPeriod(name, "", expiryPeriod);
            deleted = true;
        }
        return deleted;
    };
    /* This is the domain of egain instance chat would be deployed to*/

    var egainDockChat = window.egainDockChat || {};
    // created clone of egainDockChat object for using it in _resetExistingParams(), as egainDockChat gets override in _setParamsForExistingChat method.
    var existingEgainDockParams = JSON.parse(JSON.stringify(egainDockChat));

    egainDockChat.egainDockChatParameters = {};
    egainDockChat.eglvchathandle = null;

    egainDockChat.isChatClosed = true;
    egainDockChat.isChatInitPage = false;

    var storageUtil = new StorageUtil();
    var domainRegex = /^((?:https?:\/\/)?(?:www\.)?([^\/]+))/i;
    var egainDockChatDomain;
    var ENTRY_POINT_PARAM = "entryPointId";
    var LOCALE_PARAM = "locale";
    var POST_ATTRIBUTES_PARAM = "postChatAttributes";
    var DEBUG_PARAM = "debug";
    var INTEGRATION_TYPE_PARAM = "integrationType";

    var MultiSubDomainSupport = {
        "StorageType": "cookie",
        "IsRequired": false,
        "CookieParentDomain": null,
        "CookiePath": "/",
        "IsCookieSecured": true,
        "IsCookieCompressionRequired": true,
        "setInStorage": {},
        /*
         * This method save the key, value and storage type in an object
         * so that the key-value pairs can be moved from the storage to cookie if sub-domain support is required
         * @param {type} key
         * @param {type} value
         * @param {type} storage
         * @returns {undefined}
         */
        "settingInStorage": function (key, value, storage) {
            if (key && "string" === typeof key
                    && storage && "string" === typeof storage) {
                this.setInStorage[storage] = this.setInStorage[storage] || {};
                this.setInStorage[storage][key] = value;
            }
        },
        "removingFromStorage": function (key, storage) {
            if (key && "string" === typeof key
                    && storage && "string" === typeof storage
                    && this.setInStorage[storage]) {
                delete this.setInStorage[storage][key];
            }
        },
        "resetSetInStorage": function () {
            this.setInStorage = {};
        },
        "moveStorageToCookie": function () {
            if (true === MultiSubDomainSupport.isRequiredForCookie()) {
                var thisSetInStorage = this.setInStorage;
                Object.keys(thisSetInStorage).forEach(function (storage) {
                    if (storage && window[storage]) {
                        var keyValuePairs = thisSetInStorage[storage];
                        if (keyValuePairs) {
                            Object.keys(keyValuePairs).forEach(function (key) {
                                //set it again, but this time it will be set to cookie
                                storageUtil.setValue(key, keyValuePairs[key], storage);
                                /*
                                 * explicitly delete it from the storage
                                 * since storageUtil.deleteValue won't work (will try to delete it from cookie)
                                 */
                                if ("function" === typeof window[storage].removeItem) {
                                    window[storage].removeItem(key);
                                }
                            });
                        }
                    }
                });
            }
        },
        /*
         * This function set the sub domain related configurations
         * @param {type} Config object as key-value pairs
         * @returns {undefined}
         */
        "setConfig": function (config) {
            /*
             * Read the values from the config parameter
             * ONLY IF the sub domain support is required
             * AND the parent domain is set
             * ELSE use the default values and fallback to web storage
             */
            if (config
                    && config.IsRequired && "boolean" === typeof config.IsRequired
                    && config.CookieParentDomain && "string" === typeof config.CookieParentDomain) {
                this.IsRequired = config.IsRequired;
                this.CookieParentDomain = config.CookieParentDomain;
                this.CookiePath = (config.CookiePath && "string" === typeof config.CookiePath)
                        ? config.CookiePath : this.CookiePath;
                this.IsCookieSecured = ("boolean" === typeof config.IsCookieSecured)
                        ? config.IsCookieSecured : this.IsCookieSecured;
                this.IsCookieCompressionRequired = ("boolean" === typeof config.IsCookieCompressionRequired)
                        ? config.IsCookieCompressionRequired : this.IsCookieCompressionRequired;
            }
        },
        /*
         * This function get the sub domain related configurations
         * @returns {Object} Config object as key-value pairs
         */
        "getConfig": function () {
            var config = {};
            config.IsRequired = this.IsRequired;
            config.CookieParentDomain = this.CookieParentDomain;
            config.CookiePath = this.CookiePath;
            config.IsCookieSecured = this.IsCookieSecured;
            config.IsCookieCompressionRequired = this.IsCookieCompressionRequired;
            return config;
        },
        /*
         * This method saves the sub domain related config on the client cache
         * @returns {undefined}
         */
        "saveConfig": function () {
            if ((true === MultiSubDomainSupport.isRequiredForCookie())) {
                storageUtil.setValue("egSubDomainSupportConfig", JSON.stringify(this.getConfig()), "cookie");
            }
        },
        /*
         * This method reads the sub domain related config from the client cache
         * @returns {Object} Config object as key-value pairs OR null if not set
         */
        "readConfig": function () {
            var config = storageUtil.getValue("egSubDomainSupportConfig", "cookie");
            if (config) {
                config = JSON.parse(config);
            }
            return config;
        },
        /*
         * This function set the sub domain related configurations
         * @param {type} config MultiSubDomainSupport configuration object received from the chat template
         * @returns {undefined}
         */
        "setConfigReceivedFromChat": function (config) {
            //override config with admin script config if available
            var adminConfig;
            if (!egainDockChat.multiSubDomainSupport) {
                adminConfig = storageUtil.getValue("MultiSubDomainSupportConfig","sessionStorage") ? JSON.parse(storageUtil.getValue("MultiSubDomainSupportConfig","sessionStorage")) : "";
            } else {
                adminConfig = egainDockChat.multiSubDomainSupport;
                storageUtil.setValue("MultiSubDomainSupportConfig", JSON.stringify(adminConfig), "sessionStorage");
            }
            config = adminConfig || config;
            //check, set and move the variables if required
            this.setAndMoveVariables(config);
            //Save the config
            this.saveConfig();
        },
        "setAndMoveVariables": function (config) {
            var isMoveRequired = (config && false === this.IsRequired && true === config.IsRequired);
            //Set the config
            this.setConfig(config);
            if (true === isMoveRequired) {
                //move the variables
                this.moveStorageToCookie();
            } else {
                //reset the object
                this.resetSetInStorage();
            }
        },
        /*
         * This method reads the sub domain related config from the client cache and set it
         * @returns {undefined}
         */
        "readAndSetConfig": function () {
            this.setConfig(this.readConfig());
        },
        "isRequiredForCookie": function () {
            return (true === this.IsRequired && "cookie" === this.StorageType);
        }
    };
    /*
     * Immediately read and load the saved sub domain config
     */
    MultiSubDomainSupport.readAndSetConfig();

    var _isPopoutOpen = function () {
        return storageUtil.getValue("egPopoutWindow", "sessionStorage") === "true";
    };
    var _isChatInProgress = function () {
        return storageUtil.getValue("egChatInProgress") === "true";
    };
    var _isChatInProgressInSession = function () {
        return storageUtil.getValue("egChatInProgress", "sessionStorage") === "true";
    };
    var _getChatIframe = function () {
        return document.getElementById("egain-chat-wrapper");
    };
    var _getChatSessionId = function () {
        return storageUtil.getValue("egSessionId");
    };

    var _getTemplateName = function() {
        return egainDockChat.Template ? egainDockChat.Template.toLowerCase() : 'aqua';
    };

    var _isStorageSupported = function () {
        var test = "eg-chat-test";
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            console.log("Localstorage is not supported");
            return false;
        }
    };

    var _isCookieSupported = function () {
        if (navigator.cookieEnabled) {
            return true;
        } else {
            console.log("Cookies are disabled");
            return false;
        }
    };


    var _validateApplicationState = function () {
        return _isStorageSupported() && _isCookieSupported();
    };

    var _setParamsForExistingChat = function () {
        var egainChatInitiateData = storageUtil.getValue("egChatInitiateData");

        egainChatInitiateData = egainChatInitiateData ? JSON.parse(egainChatInitiateData) : null;
        /* VA data */
        var egainVAInitiateData = storageUtil.getValue("egVAInitiateData", "sessionStorage");

        if (egainChatInitiateData !== null) {
            egainDockChat.serverURL = egainChatInitiateData.serverURL;
            /*eGain Chat Entry Point*/
            egainDockChat.EntryPointId = egainChatInitiateData.EntryPointId;
            /*eGain Chat Locale*/
            egainDockChat.Locale = egainChatInitiateData.Locale ? egainChatInitiateData.Locale : 'en-US';
            /*eGain template name*/
            egainDockChat.Template = egainChatInitiateData.Template ? egainChatInitiateData.Template : 'aqua';
            /*Set to true to enable posting attributes to templates*/
            egainDockChat.PostChatAttributes = egainChatInitiateData.PostChatAttributes ? egainChatInitiateData.PostChatAttributes : false;
            /*Set to true to enable Strophe debugging*/
            egainDockChat.Debug = egainChatInitiateData.debug ? egainChatInitiateData.debug : false;
            /*eGain AV Chat Params*/
            /*eGain integration type*/
            if (egainChatInitiateData.IntegrationType) {
                egainDockChat.IntegrationType = egainChatInitiateData.IntegrationType;
            }
            egainDockChat.VChatParams = egainChatInitiateData.VChatParams;
        }
        var vaSessionId = storageUtil.getValue("vaSessionId", "sessionStorage");

        egainVAInitiateData !== null && (egainVAInitiateData = JSON.parse(egainVAInitiateData));
        if (egainVAInitiateData && egainVAInitiateData.VAName) {
            egainDockChat.VAEnabled = true;
            egainDockChat.VATenantToken = egainVAInitiateData.TenantToken ? egainVAInitiateData.TenantToken : "";
            egainDockChat.VAName = egainVAInitiateData.VAName ? egainVAInitiateData.VAName : "";
            egainDockChat.eGainVAApiPath = egainVAInitiateData.eGainVAApiPath ? egainVAInitiateData.eGainVAApiPath : "";
            egainDockChat.VALaunchImagePath = egainVAInitiateData.VALaunchImagePath ? egainVAInitiateData.VALaunchImagePath : "";
            egainDockChat.ShowPreChatOnEscalation = typeof egainVAInitiateData.ShowPreChatOnEscalation !== 'undefined' ? egainVAInitiateData.ShowPreChatOnEscalation : "";
            egainDockChat.VASessionId = (vaSessionId !== null) ? vaSessionId : egainVAInitiateData.VASessionId;
        }
    };
    
    var _isStorageSupported = function () {
        var test = "eg-chat-test";
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            console.log('Storage not supported.');
            return false;
        }
    };

    var _isCookieSupported = function () {
        try {
            document.cookie = 'cookietest=1';
            var cookiesEnabled = document.cookie.indexOf('cookietest=') !== -1;
            document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
            return cookiesEnabled;
        } catch (e) {
            console.log('Cookie not supported.');
            return false;
        }
    };

    var _validateStorage = function () {
        if (!_isStorageSupported() || !_isCookieSupported()) {
            return false;
        } else {
            return true;
        }
    };

    var _resetExistingParams = function () {
        egainDockChat.serverURL = existingEgainDockParams.serverURL;
        /*eGain Chat Entry Point*/
        egainDockChat.EntryPointId = existingEgainDockParams.EntryPointId;
        /*eGain Chat Locale*/
        egainDockChat.Locale = existingEgainDockParams.Locale ? existingEgainDockParams.Locale : 'en-US';
        /*eGain template name*/
        egainDockChat.Template = existingEgainDockParams.Template ? existingEgainDockParams.Template : 'aqua';
        /*Set to true to enable posting attributes to templates*/
        egainDockChat.PostChatAttributes = existingEgainDockParams.PostChatAttributes ? existingEgainDockParams.PostChatAttributes : false;
        /*Set to true to enable Strophe debugging*/
        egainDockChat.Debug = existingEgainDockParams.debug ? existingEgainDockParams.debug : false;
        /*eGain AV Chat Params*/
        /*eGain integration type*/
        if (existingEgainDockParams.IntegrationType) {
            egainDockChat.IntegrationType = existingEgainDockParams.IntegrationType;
        }
        egainDockChat.VChatParams = existingEgainDockParams.VChatParams;
        var vaSessionId = storageUtil.getValue("vaSessionId", "sessionStorage");

        egainDockChat.VAEnabled = existingEgainDockParams.VAEnabled;
        egainDockChat.VATenantToken = existingEgainDockParams.VATenantToken || "";
        egainDockChat.VAName = existingEgainDockParams.VAName ? existingEgainDockParams.VAName : "";
        egainDockChat.eGainVAApiPath = existingEgainDockParams.eGainVAApiPath ? existingEgainDockParams.eGainVAApiPath : "";
        egainDockChat.VALaunchImagePath = existingEgainDockParams.VALaunchImagePath ? existingEgainDockParams.VALaunchImagePath : "";
        egainDockChat.ShowPreChatOnEscalation = typeof existingEgainDockParams.ShowPreChatOnEscalation !== 'undefined' ? existingEgainDockParams.ShowPreChatOnEscalation : "";
        egainDockChat.VASessionId = (vaSessionId !== null) ? vaSessionId : existingEgainDockParams.VASessionId;
        if (existingEgainDockParams && Object.keys(existingEgainDockParams).length) {
            storageUtil.setValue("egChatInitiateData", JSON.stringify({"EntryPointId": egainDockChat.EntryPointId, "Locale": egainDockChat.Locale, "Template": _getTemplateName(), "PostChatAttributes": egainDockChat.PostChatAttributes, "serverURL": egainDockChat.serverURL, "debug": egainDockChat.Debug, "VChatParams": egainDockChat.VChatParams, "IntegrationType": egainDockChat.IntegrationType}));
            storageUtil.setValue("egVAInitiateData", JSON.stringify({"VAName": egainDockChat.VAName, "VAEnabled": egainDockChat.VAEnabled, "Template": _getTemplateName(), "TenantToken": egainDockChat.VATenantToken, "eGainVAApiPath": egainDockChat.eGainVAApiPath, "VALaunchImagePath": egainDockChat.VALaunchImagePath, "ShowPreChatOnEscalation": egainDockChat.ShowPreChatOnEscalation, "serverURL": egainDockChat.serverURL, "VASessionId": ""}), "sessionStorage");
        }
    };

    var _getChatUrl = function () {
        /*eGain Chat Entry Point*/
        egainDockChat.EntryPointId = egainDockChat.EntryPointId;
        /*eGain Chat Locale*/
        egainDockChat.Locale = egainDockChat.Locale ? egainDockChat.Locale : 'en-US';
        /*eGain template name*/
        egainDockChat.Template = _getTemplateName();
        /*Set to true to enable posting attributes to templates*/
        egainDockChat.PostChatAttributes = egainDockChat.PostChatAttributes ? egainDockChat.PostChatAttributes : false;
        /*Set to true to enable Strophe debugging*/
        egainDockChat.Debug = egainDockChat.Debug ? egainDockChat.Debug : false;
        /*eGain AV Chat Params*/
        egainDockChat.VChatParams = ("string" === typeof egainDockChat.VChatParams) ? egainDockChat.VChatParams : "";
        egainDockChat.IntegratedEntryPoint = egainDockChat.IntegratedEntryPoint;
        var egSessionId = _getChatSessionId();
        var vaSessionId = storageUtil.getValue("vaSessionId", "sessionStorage");

        if (egSessionId !== null || vaSessionId !== null) {
            _setParamsForExistingChat();
        }

        var vaChatEntryPointId = storageUtil.getValue("vaChatEntryPointId", "sessionStorage");
        if (vaChatEntryPointId === null || isNaN(vaChatEntryPointId)) {
            vaChatEntryPointId = '';
        }

        var vaChatServerURL = storageUtil.getValue("vaChatServerURL", "sessionStorage");
        if (vaChatServerURL === null) {
            vaChatServerURL = '';
        }

        var vaLastAvatar = storageUtil.getValue("vaLastAvatar", "sessionStorage");
        if (vaLastAvatar === null) {
            vaLastAvatar = '';
        }

        egainDockChat.url = egainDockChat.serverURL + "/templates/chat/" + egainDockChat.Template + "/" + HTML_FILE_NAME + "?entryPointId=" + egainDockChat.EntryPointId;
        egainDockChat.url += "&locale=" + egainDockChat.Locale;
        egainDockChat.url += "&postChatAttributes=" + egainDockChat.PostChatAttributes;
        egainDockChat.url += '&templateName=' + egainDockChat.Template + '&ver=v11';
        egainDockChat.url += egainDockChat.VChatParams;
        if (egainDockChat.PreferredAgentId) {
            egainDockChat.url += '&eglvpreferredagent=' + egainDockChat.PreferredAgentId;
        }
        if (egainDockChat.PreferredAgentName) {
            egainDockChat.url += '&eglvpreferredusername=' + egainDockChat.PreferredAgentName;
        }
        if (isEgXsMode) {
            var xsParamsForTemplate = getUrlParameter("xsParamsForTemplate");
            if (xsParamsForTemplate && "string" === typeof xsParamsForTemplate) {
                xsParamsForTemplate = xsParamsForTemplate.split(",");
                xsParamsForTemplate.forEach(function (param) {
                    if (param && "string" === typeof param) {
                        param = param.trim();
                        var value = getUrlParameter(param);
                        if ("string" === typeof value) {
                            egainDockChat.url += "&" + param + "=" + encodeURIComponent(value);
                        }
                    }
                });
            }
        }

        if (egainDockChat.VHDetails && egainDockChat.VHDetails.refererName) {
            egainDockChat.url += '&eglvrefname=' + egainDockChat.VHDetails.refererName;
        }
        if (egainDockChat.VHDetails && egainDockChat.VHDetails.eglvcaseid) {
            egainDockChat.url += '&' + egainDockChat.VHDetails.eglvcaseid;
        }
        if (egainDockChat.VHDetails && egainDockChat.VHDetails.vhtIds) {
            egainDockChat.url += '&' + egainDockChat.VHDetails.vhtIds;
        }

        if (egainDockChat.VAEnabled === true) {
            egainDockChat.url += '&VAEnabled=true' + '&vaChatEntryPointId=' + vaChatEntryPointId + '&vaChatServerURL=' + vaChatServerURL + "&VATenantAccId=" + egainDockChat.VATenantToken;
            egainDockChat.url += "&VAName=" + egainDockChat.VAName;
            if (egainDockChat.eGainVAApiPath) {
                egainDockChat.url += "&eGainVAApiPath=" + encodeURIComponent(egainDockChat.eGainVAApiPath);
            }
            if (egainDockChat.VALaunchImagePath) {
                egainDockChat.url += "&VALaunchImagePath=" + egainDockChat.VALaunchImagePath;
            }
            if (typeof egainDockChat.ShowPreChatOnEscalation !== 'undefined') {
                egainDockChat.url += "&ShowPreChatOnEscalation=" + egainDockChat.ShowPreChatOnEscalation;
            }
            egainDockChat.url += "&serverURL=" + egainDockChat.serverURL + "&vaLastAvatar=" + vaLastAvatar.trim();
        }

        if (egainDockChat.Debug) {
            egainDockChat.url += '&debug=true';
        }
        if (egainDockChat.providerId) {
            egainDockChat.url += '&providerId=' + egainDockChat.providerId;
        }

        /* EGS-40432: Adding hostname information to URL which will be used for IIS url rewrite */
        var urlString = window.location.protocol + "//" + window.location.host;
        egainDockChat.url += "&wsname="+ (isValidURL(urlString) ? urlString : "");

        if (egSessionId !== null || vaSessionId !== null) {
            egainDockChat.url += _addChatSessionDataToUrl(egainDockChat.url);
        }
        /*
         * AV chat data
         */
        egainDockChat.url = _deleteAVChatData(egainDockChat.url);
        egainDockChat.url = _deleteKeyValuePairFromURL(egainDockChat.url, "parentLost");
        /*
         * X-egain-session
         */
        egainDockChat.url = _deleteXEgainSessionID(egainDockChat.url);
        egainDockChat.url += _addXEgainSessionID();
        egainDockChat.url += _addAVChatData();
        egainDockChat.url += "&parentLost=" + _parentLostWhileChatInProgressInPopout();
        if (egainDockChat.IntegratedEntryPoint == "true")
            egainDockChat.url += "&subActivity=Chat";
        if (typeof egainDockChat.IsChatLaunched !== 'undefined' && true === egainDockChat.IsChatLaunched) {
            egainDockChat.url += "&chatLaunched=true";
            delete egainDockChat.IsChatLaunched;
        }

        if (egainDockChat.VHDetails && egainDockChat.VHDetails.refererurl && (egainDockChat.url + egainDockChat.VHDetails.refererurl).length <= 2000) {
            egainDockChat.url += '&referer=' + egainDockChat.VHDetails.refererurl;
        }
        if (egainDockChat.IntegrationType) {
            egainDockChat.url += "&" + INTEGRATION_TYPE_PARAM + "=" + egainDockChat.IntegrationType.toLocaleLowerCase('en-US');
        }
        egainDockChat.url = egainDockChat.url + '&useCustomButton='+egainDockChat.UseCustomButton;
        egainDockChat.url = egainDockChat.url + '&storage='+ _validateStorage();
        return egainDockChat.url;

    };

    var _updateSessionDataInUrl = function (url, message) {
        if (url.indexOf("VAEnabled=true") !== -1) {
            url = _addVASessionDataToUrl(url);
            if (message.Value === "REMOVE_VA_PARAMS") {
                var vaParamArray = ["vaChatEntryPointId", "vaChatServerURL", "VATenantAccId", 
                    "VAName", "eGainVAApiPath", "ShowPreChatOnEscalation", "vaLastAvatar", 
                    "VASessionId", "VAActive"];
                for(var i=0; i<vaParamArray.length; i++) {
                    url = _deleteKeyValuePairFromURL(url, vaParamArray[i]);
                }
                url = _deleteKeyValuePairFromURL(url, "VASessionId");
                url = _deleteKeyValuePairFromURL(url, "VAActive");
            }
        }
        if (_getChatSessionId() === null) {
            return url;
        } else {
            /* Chat has started but window is not navigated so chat session id and last request id are not present in URL */
            if (url.indexOf("&egSessionId") < 0 && url.indexOf("&egLastRequestId") < 0) {
                url += _addChatSessionDataToUrl(url, message);
            } else {
                /* If chat ids are present in URL, we need to update last request ID */
                var lastRequestIdStr = url.substring(url.indexOf("&egLastRequestId=") + 17, url.indexOf("&", url.indexOf("&egLastRequestId=") + 16));
                url = url.replace("&egLastRequestId=" + lastRequestIdStr, "&egLastRequestId=" + storageUtil.getValue("EgainLastRequestId"));
                /*
                 * EGS-38135:
                 * Update the session Id as it may be expired when the launch button was launched
                 */
                var egSessionId = _getChatSessionId();
                /* EGS-44262 : egSessionId will not be passed in iframe URL and would be read from localstorage instead */
                var egFetchFromStorage = "true" === storageUtil.getValue("egFetchFromStorage");
                if (egSessionId && !egFetchFromStorage) {
                    url = _deleteKeyValuePairFromURL(url, "egSessionId");
                    url += "&egSessionId=" + encodeURIComponent(egSessionId);
                }
            }
            return url;
        }
    };

    var _deleteKeyValuePairFromURL = function (url, name) {
        if (url && name) {
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            url = url.replace(regex, "");
        }
        return url;
    };

    var _deleteAVChatData = function (url) {
        return _deleteKeyValuePairFromURL(url, "EGAIN_AV_CHAT_STATE_DATA");
    };

    var _addAVChatData = function () {
        var urlParam = "";
        var avChatDataKey = "EGAIN_AV_CHAT_STATE_DATA";
        var avChatData = storageUtil.getValue(avChatDataKey, "localStorage");
        avChatData = encodeURIComponent(avChatData);
        if (avChatData) {
            urlParam += "&" + avChatDataKey + "=" + avChatData;
        }
        return urlParam;
    };

    var _deleteXEgainSessionID = function (url) {
        return _deleteKeyValuePairFromURL(url, "egXEgainSession");
    };

    var _addXEgainSessionID = function () {
        var urlParam = "";
        var XEgainSessionIDKey = "egXEgainSession";
        var XEgainSessionID = storageUtil.getValue(XEgainSessionIDKey, "sessionStorage");
        /* EGS-44262 : egXEgainSession will not be passed in iframe URL and would be read from sessionstorage instead */
        var egFetchFromStorage = "true" === storageUtil.getValue("egFetchFromStorage");
        if (XEgainSessionID && !egFetchFromStorage) {
            urlParam += "&" + XEgainSessionIDKey + "=" + encodeURIComponent(XEgainSessionID);
        }
        return urlParam;
    };

    var _addUpdatePopoutOpenedBy = function (url, value) {
        storageUtil.setValue("egPopoutOpenedBy", value, "sessionStorage");
        return _updateQueryStringParameter(url, "popoutOpenedBy", value);
    };

    var _updateQueryStringParameter = function (url, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = url.indexOf('?') !== -1 ? "&" : "?";
        if (url.match(re)) {
            return url.replace(re, '$1' + key + "=" + value + '$2');
        } else {
            return url + separator + key + "=" + value;
        }
    };
    var _addVASessionDataToUrl = function (url) {
        var vaSessionId = storageUtil.getValue("vaSessionId", "sessionStorage");
        if (vaSessionId) {
            url = _updateQueryStringParameter(url, "VASessionId", vaSessionId);
        }
        var vaActive = storageUtil.getValue("vaActive", "sessionStorage");
        url = _updateQueryStringParameter(url, "VAActive", vaActive);
        var vaEscalated = storageUtil.getValue("vaEscalated", "sessionStorage");
        url = _updateQueryStringParameter(url, "VAEscalated", vaEscalated);
        var vaChatEntryPointId = storageUtil.getValue("vaChatEntryPointId", "sessionStorage");
        if (vaChatEntryPointId !== null) {
            url = _updateQueryStringParameter(url, "vaChatEntryPointId", vaChatEntryPointId);
        }
        var vaChatServerURL = storageUtil.getValue("vaChatServerURL", "sessionStorage");
        if (vaChatServerURL !== null) {
            url = _updateQueryStringParameter(url, "vaChatServerURL", vaChatServerURL);
        }
        var vaLastAvatar = storageUtil.getValue("vaLastAvatar", "sessionStorage");
        if (vaLastAvatar !== null) {
            url = _updateQueryStringParameter(url, "vaLastAvatar", vaLastAvatar);
        }
        return url;
    };
    var _addChatSessionDataToUrl = function (chaturl, message) {
        var url = "";
        var egLastRequestId = storageUtil.getValue("EgainLastRequestId");
        if (egLastRequestId) {
            url += "&egLastRequestId=" + egLastRequestId;
        }
        var egSessionId = _getChatSessionId();
        /* EGS-44262 : egSessionId will not be passed in iframe URL and would be read from localstorage instead */
        var egFetchFromStorage = "true" === storageUtil.getValue("egFetchFromStorage");
        if (egSessionId && !egFetchFromStorage) {
            url += "&egSessionId=" + encodeURIComponent(egSessionId);
        }
        var egChatWindowState = storageUtil.getValue("egChatWindowState");
        if (egChatWindowState) {
            url += "&egChatWindowState=" + egChatWindowState;
        }
        var egBadgeCount = storageUtil.getValue("egBadgeCount");
        if (egBadgeCount) {
            url += "&egBadgeCount=" + egBadgeCount;
        }
        var egOffRecordBtnState = storageUtil.getValue("egOffRecordBtnState");
        if (egOffRecordBtnState) {
            url += "&egOffRecordBtnState=" + egOffRecordBtnState;
        }

        var isChatAttachmentEnabled = storageUtil.getValue("isChatAttachmentEnabled");
        if (isChatAttachmentEnabled) {
            url += "&isChatAttachmentEnabled=" + isChatAttachmentEnabled;
        }

        var egAgentMsg = storageUtil.getValue("egAgentMsg");
        if (egAgentMsg) {
            url += "&egAgentMsg=" + egAgentMsg;
        }
        var egSystemMsg = storageUtil.getValue("egSystemMsg");
        if (egSystemMsg) {
            url += "&egSystemMsg=" + egSystemMsg;
        }

        var egAwaitingEvtDone = storageUtil.getValue("egAwaitingEvtDone", "sessionStorage");
        if (egAwaitingEvtDone) {
            url += "&egAwaitingEvtDone=" + egAwaitingEvtDone;
        }
        var egVAVideoChatReduceURLSize = storageUtil.getValue("egVAVideoChatReduceURLSize", "sessionStorage") === "true";
        if (!egVAVideoChatReduceURLSize || (egVAVideoChatReduceURLSize && ((message && message.Value !== "REMOVE_VA_PARAMS") || !message))) {
            var vaSessionId = storageUtil.getValue("vaSessionId", "sessionStorage");
            if (vaSessionId) {
                url += "&VASessionId=" + vaSessionId;
            }
            var vaActive = storageUtil.getValue("vaActive", "sessionStorage");
            url += "&VAActive=" + vaActive;

            var vaEscalated = storageUtil.getValue("vaEscalated", "sessionStorage");
            url += "&VAEscalated=" + vaEscalated;
        }

        return url;

    };

    var _getIframeClass = function () {
        var egChatWindowState = storageUtil.getValue("egChatWindowState");
        if ("true" === egChatWindowState) {
            return minimizedChatClass;
        } else {
            if (true === egainDockChat.UseCustomButton) {
                var chatWindowClass = egainDockChat.maximizeWindowPosition 
                                    ? maximizedClass +" eg-maximized-"+ egainDockChat.maximizeWindowPosition 
                                    : maximizedClass +" eg-maximized-right-bottom";;
                return chatWindowClass;
            } else {
                return "";
            }
        }
    };

    var _createIframe = function (url) {
        var chatIframe = _getChatIframe();
        if (chatIframe === null) {
            egainDockChat.iframe = document.createElement('iframe');
            egainDockChat.iframe.id = 'egain-chat-iframe';
            //Default title is needed for backward compatibility.
            egainDockChat.iframe.title = "Chat";
            /* Create Wrapper for egainDockChatIframe */
            egainDockChat.iframeWrapper = document.createElement('div');
            egainDockChat.iframeWrapper.id = 'egain-chat-wrapper';

            var className = _getIframeClass();
            egainDockChat.iframeWrapper.setAttribute('class', className);
            egainDockChat.iframeWrapper.style.position = "fixed";
            if (maximizedClass === className) {
                addStylesForMaximized();
            }

            egainDockChat.iframeWrapper.appendChild(egainDockChat.iframe);


            document.body.appendChild(egainDockChat.iframeWrapper);

            if (2000 < url.length) {
                console.error("The URL length is more than 2000 characters. The browser may throw 404 error for URL greater than 2083.");
            }

            /*
             * The source of the iFrame should be added after the iFrame element is appended to the document
             * Else it will create an issue in the IE browser.
             */
            egainDockChat.iframe.src = url;

            /*
             * Following fix (mouseover and mouseout eventListeners) instead of :hover state was done
             * since :hover states do not work on IE/Edge browser for iFrames
             * The hover class should be applied immediately and hence there should be no timeout
             */
            var chatWrapper = document.getElementById("egain-chat-wrapper"), isPointerInsideWrapper = false, launchBtnTimeout = null;
            chatWrapper.addEventListener('mouseover', function () {
                isPointerInsideWrapper = true;
                document.getElementById("egain-chat-wrapper").classList.add(hoverClass);
            });

            /*
             * The timeout set (1000 ms) should be more than the total of duration and delay used in launch and maximise buttons
             * at present it is set to .5s
             */
            chatWrapper.addEventListener('mouseout', function () {
                isPointerInsideWrapper = false;
                launchBtnTimeout = setTimeout(function () {
                    if (!isPointerInsideWrapper) {
                        document.getElementById("egain-chat-wrapper").classList.remove(hoverClass);
                    }
                }, 1000);
            });
        }
    };

    var _loadIframeForChat = function () {
        var chatIframe = _getChatIframe();
        if (chatIframe === null) {
            /* EGS-39950: Enable tracker calls for Onetag on click of custom button  */
            if (typeof egainDockChat.IsChatLaunched !== 'undefined' && true === egainDockChat.IsChatLaunched) {
                _enableTrackerCalls();
            }

            egainDockChat.url = _getChatUrl() + "&docked=true";
            _addIframeCSS();
            _addEventListeners();
            egainDockChatDomain = _getDomain(egainDockChat.serverURL);
            _createIframe(egainDockChat.url);
        }
    };

    var _addIframeCSS = function ()
    {
        var isCSSAdded = false;
        try
        {
            /* Check if CSS is already added */
            var templateName = _getTemplateName();
            templateName = templateName ? templateName.toLowerCase() : templateName;
            var cssLink = egainDockChat.serverURL + "/templates/chat/" + templateName + "/css/iframe-style.css";
            var ss = document.styleSheets;
            for (var i = 0; i < ss.length; i++) {
                if (ss[i].href === cssLink)
                    return;
            }
            var headRef = document.getElementsByTagName("head")[0];
            el = document.createElement('link');
            el.type = "text/css";
            el.rel = "stylesheet";
            el.href = cssLink;
            headRef.appendChild(el);
            isCSSAdded = true;
            if (isCSSAdded) {
            }
        } catch (e)
        {

        }
    };

    var _getDomain = function (serverURL)
    {
        var domainResult = domainRegex.exec(serverURL);
        return (domainResult !== null) ? domainResult[0] : window.location.origin;
    };

    var _getRootFromBannerUrl = function (url) {
        var root = "";
        try
        {
            if (typeof url === 'undefined')
                root = "";
            else
            {
                var startIndex = url.indexOf(':');
                if (startIndex < 0)
                    startIndex = 0;

                var endIndex = url.indexOf('/', startIndex + 3);

                /* getting context path*/
                root = url.substring(0, url.indexOf("/", endIndex + 1));

            }
        } catch (e)
        {
            console.log("Error in getting root path");
        }
        return root;
    };

    var _getTemplateNameFromBannerUrl = function (url) {
        var templateName = "";
        try {
            if (typeof url === 'undefined') {
                templateName = "";
            } else {
                if (url.indexOf(HTML_FILE_NAME) > 0) {
                    var templateUrl = url.substring(0, url.indexOf("/" + HTML_FILE_NAME));
                    templateName = templateUrl.substring(templateUrl.lastIndexOf('/') + 1);
                }
            }
        } catch (e) {
            console.log("Error in getting Template name");
        }
        return templateName.toLowerCase();
    };

    var _getParameterFromURL = function (url, paramname) {
        paramname = paramname.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
        var results = new RegExp('[\\?&]' + paramname + '=([^&#]*)')
                .exec(url);
        return results ? results[1] : null;
    };

    var _mapStorageType = function (storage) {
        var mappedStorage = "localStorage";
        switch (storage) {
            case "session":
            {
                mappedStorage = "sessionStorage";
                break;
            }
            case "cookie":
            {
                mappedStorage = "cookie";
                break;
            }
        }
        return mappedStorage;
    };

    var _setDataInBrowserStorage = function (data) {
        /* If multiple data need to be set, they should be sent as key,value pair */
        var mappedStorage = _mapStorageType(data.StorageType);
        if (typeof data.Value === 'object') {
            storageUtil.setValues(data.Value, mappedStorage, data.IsConfidential);
        } else {
            /* For single data */
            var tempData = (typeof data.Value !== 'string') ? JSON.stringify(data.Value) : data.Value;
            storageUtil.setValue(data.Key, tempData, mappedStorage, data.IsConfidential);
        }
    };

    var _removeDataFromBrowserStorage = function (data) {
        /* If multiple data need to be removed, they should be sent as array */
        var mappedStorage = _mapStorageType(data.StorageType);
        if (Array.isArray(data.Key)) {
            storageUtil.deleteValues(data.Key, mappedStorage, data.IsConfidential);
        } else {
            /* For single data */
            storageUtil.deleteValue(data.Key, mappedStorage, data.IsConfidential);
        }
    };

    var checkMobile = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    /* EGS-39950: Enable tracker calls for Onetag */
    var _enableTrackerCalls = function () {
        var EG_CALL_Q = window.EG_CALL_Q || [];
        EG_CALL_Q.push(["enableTracker", true]);
    };

    var popoutWindow;
    var _eventListenerForPopout = function (event) {
        if (event && event.data && "string" === typeof event.data) {
            if (typeof egainDockChatDomain === "undefined") {
                var egainChatInitiateData = storageUtil.getValue("egChatInitiateData");
                egainChatInitiateData = JSON.parse(egainChatInitiateData);
                egainDockChat.serverURL = egainChatInitiateData.serverURL;
                egainDockChatDomain = _getDomain(egainDockChat.serverURL);
            }
            try {
                var message = JSON.parse(event.data);
                storageUtil.deleteValue("egIsChatLaunched", "sessionStorage");
                if (event.origin.toLowerCase() === egainDockChatDomain.toLowerCase() && message.Caller.indexOf("EGLV_DOCK") !== -1) {
                    if (!popoutWindow && event.source && message.Key !== 'dockedChatLoaded') {
                        popoutWindow = event.source;
                    }
                    switch (message.Method) {
                        case 'SET':
                            var timer;
                            _setDataInBrowserStorage(message);
                            if (message.Key === "egPopoutWindow" && message.Value === "true") {
                                clearInterval(timer);
                                deleteChatIframe();
                            }
                            if ((message.Key === "egPopoutWindow" || message.Key === "egPopoutWindowFeatures") && message.Value === "false") {
                                var loadDockChatWhenPoppedOutClosed = function () {
                                    popoutWindow = null;
                                    window.removeEventListener("message", _eventListenerForPopout);
                                    if (egainDockChat.isChatInitPage && !egainDockChat.UseCustomButton) {
                                        var chatWrapper = _getChatIframe();
                                        var chatWrapperStyle = chatWrapper ? window.getComputedStyle(chatWrapper) : null;
                                        if ((chatWrapper && chatWrapperStyle && chatWrapperStyle.display === 'none') || !chatWrapper) {
                                            egainDockChat.IsChatLaunched = false;
                                            deleteChatIframe();
                                            _loadIframeForChat();
                                        }
                                    }
                                };
                                if (message.relayInfo) {
                                    if (true === message.relayInfo.popoutClosed) {
                                        loadDockChatWhenPoppedOutClosed();
                                    }
                                } else {
                                    var popoutOpenedBy = storageUtil.getValue("egPopoutOpenedBy", "sessionStorage");
                                    if ("egainiframe" !== popoutOpenedBy || true !== _sendPostMessageToRelayFrame(message)) {
                                        var timer = null;
                                        function _checkIfPopoutOpen() {
                                            if (!popoutWindow || popoutWindow.closed) {
                                                loadDockChatWhenPoppedOutClosed();
                                                clearInterval(timer);
                                            }
                                        }
                                        if (isChatRelayIframeEnabled()) {
                                            timer = setInterval(_checkIfPopoutOpen, 500)
                                        }
                                    }
                                }
                                if (egainDockChat.UseCustomButton === true) {
                                    popoutWindow = null;
                                }
                            }
                            if (message.Key === "cbData" && message.Value && message.Value.cbLocale && window.eGain && window.eGain.cobrowse && window.eGain.cobrowse.setLocale) {
                                window.eGain.cobrowse.setLocale(message.Value.cbLocale);
                                if (MultiSubDomainSupport.IsRequired) {
                                    sessionStorage.setItem("cbAutoSessionId", message.Value.cbAutoSessionId);
                                    sessionStorage.setItem("cbAutostart", message.Value.cbAutostart);
                                    sessionStorage.setItem("egActId", message.Value.egActId);
                                    sessionStorage.setItem("cbLocale", message.Value.cbLocale);
                                }  
                            }
                            if (message.Key === "egPopoutWindowTimestamp") {
                                if(!storageUtil.getValue("egPopoutWindow", "sessionStorage")) {
                                    storageUtil.setValue("egPopoutWindow", "true", "sessionStorage");
                                }
                            }
                            break;
                        case 'GET':
                            var response = {};
                            if (message.Key === "EgainChatParameter") {
                                response = {
                                    value: egainDockChat.CustomerContextParameters,
                                    caller: message.Caller,
                                    key: message.Key
                                };
                            } else if (message.Key === "VhtIDs") {
                                if (typeof window.EGAINCLOUD !== "undefined" && window.EGAINCLOUD.Account.getAllIds) {
                                    var ids = window.EGAINCLOUD.Account.getAllIds();
                                    var vhtIds = {aId: ids.a, sId: ids.s, uId: ids.u};
                                    if (!egainDockChat.VHDetails) {// This is undefined in case of offers
                                        egainDockChat.VHDetails = {};
                                    }
                                    egainDockChat.VHDetails.vhtIds = '&aId=' + ids.a + '&sId=' + ids.s + '&uId=' + ids.u;
                                    response = {
                                        value: vhtIds,
                                        caller: message.Caller,
                                        key: message.Key
                                    };
                                }
                            } else if(message.Key === "VA_PARAMETERS") {
                                var vaData = storageUtil.getValue("egVAInitiateData", "sessionStorage");
                                var vaDataParsed = null;
                                if (vaData !== null) {
                                    try {
                                        var vaDataParsed = JSON.parse(vaData);
                                        vaDataParsed['VASessionId'] = storageUtil.getValue("vaSessionId", "sessionStorage");
                                        vaDataParsed['vaLastAvatar'] = storageUtil.getValue("vaLastAvatar", "sessionStorage");
                                        vaDataParsed['VAActive'] = storageUtil.getValue("vaActive", "sessionStorage");
                                        vaDataParsed['vaChatEntryPointId'] = storageUtil.getValue("vaChatEntryPointId", "sessionStorage");
                                        vaDataParsed['vaChatServerURL'] = storageUtil.getValue("vaChatServerURL", "sessionStorage");
                                        vaDataParsed['VATenantAccId'] = egainDockChat.VATenantToken;
                                    } catch(exc) {
                                        vaData = null;
                                    }                                    
                                }
                                response = {
                                    value: vaDataParsed,
                                    caller: message.Caller,
                                    key: message.Key
                                };
                            } else {
                                response = {
                                    value: storageUtil.getValue(message.Key, _mapStorageType(message.StorageType), message.IsConfidential),
                                    caller: message.Caller,
                                    key: message.Key
                                };
                            }
                            // EGS-47211: key property is added to response object
                            event.source.postMessage(JSON.stringify(response), event.origin);
                            break;
                        case 'REMOVE':
                            _removeDataFromBrowserStorage(message);
                            break;
                        case 'GET_COOKIE':
                            var cookieVal = storageUtil.getValue(message.Key, 'cookie', message.IsConfidential);
                            response = {
                                value: cookieVal,
                                caller: message.Caller
                            };
                            event.source.postMessage(JSON.stringify(response), egainDockChatDomain);
                            break;
                        case 'NOTIFY':
                            if ("COBROWSE_REQUEST" === message.Key) {
                                /* Handler for cobrowse event */
                                var cbUrl = message.Value;
                                if (cbUrl && "string" === typeof cbUrl) {
                                    window.location.href = cbUrl;
                                } else {
                                    window.eGain.cobrowse.startCobrowse();
                                }
                            } else if ("COBROWSE_END_REQUEST" === message.Key) {
                                if ("endsession" === message.Value) {
                                    window.eGainCB.validateAndTerminateCobrowse('endsession');
                                }
                            }
                            break;
                        case "PAGEPUSH":
                            if (message.Key === 'UrlToPush' && message.Value !== null && 0 < message.Value.length) {
                                window.location.href = message.Value;
                            }
                            break;
                        case "CONTENTLINK":
                            if (message.Key === 'UrlToOpen' && message.Value !== null && 0 < message.Value.length) {
                                window.location.href = message.Value;
                            }
                            break;
                        case "SUB_DOMAIN_SUPPORT":
                        /*
                         * Block for handling sub-domain support config
                         */
                        {
                            if ("MultiSubDomainSupportConfig" === message.Key && message.Value) {
                                MultiSubDomainSupport.setConfigReceivedFromChat(JSON.parse(message.Value));
                            }
                            break;
                        }
                        default:
                            break;
                    }
                }
            } catch (e) {
            }
        }
    };

    /*
     * The function will return true if the chat relay frame approach is enabled
     * At present it is only enabled for IE browser
     * @returns {Boolean}
     */
    var isChatRelayIframeEnabled = function () {
        var enabled = false;
        if (navigator) {
            enabled = 0 <= navigator.userAgent.indexOf("Trident") || 0 <= navigator.userAgent.indexOf("Edge");
        }
        return enabled;
    };

    var _sendPostMessageToRelayFrame = function (message) {
        var sent = false;
        var relayFrame = document.getElementById('egain-chat-relay-frame');
        if (message && true === isChatRelayIframeEnabled()
                && relayFrame && relayFrame.contentWindow && relayFrame.contentWindow.postMessage) {
            relayFrame.contentWindow.postMessage(JSON.stringify(message), egainDockChatDomain);
            sent = true;
        }
        return sent;
    };

    var isEdgeChromium = function () {
        var userAgent = navigator.userAgent;
        return (userAgent.indexOf("Edg") > -1) && (userAgent.indexOf("Edge") === -1);
    };
    var popupWindowWidth = isEdgeChromium() ? "550px" : "450px";

    var windowName = "EG_CHAT_POPOUT";
    var windowFeatures = "top=0,left=0,height=650,width=" + popupWindowWidth + ",resizable=yes,scrollbars=yes,toolbar=no";
    
    //EGS-69422
    if (storageUtil.getValue("egIsChatLaunched", "sessionStorage") === "true") {
        setTimeout(function () {
            storageUtil.deleteValue("egIsChatLaunched", "sessionStorage");
        }, 10000);
    }
    
    var _convertDockedToPopup = function (message) {
        message = message || {};
        /*
         * If the relayInfo is Truthy then
         * the eGain Iframe has just replied back to the original message sent to open the popup
         * If required we may use the message.relayInfo.popoutOpened property
         */
        if (!message.relayInfo) {
            var chatIframe = document.getElementById('egain-chat-iframe');
            if (chatIframe) {
                var url = _updateSessionDataInUrl(chatIframe.src, message);
                /*
                 * EGS-38135:
                 * No need to pass the parent killed to the poppedout window
                 */
                url = _deleteKeyValuePairFromURL(url, "parentLost");
                egainDockChat.url += "&parentLost=" + _parentLostWhileChatInProgressInPopout();
                /*
                 * AV chat data
                 */
                url = _deleteAVChatData(url);
                url += _addAVChatData();
                /*
                 * X-egain-session
                 */
                url = _deleteXEgainSessionID(url);
                url += _addXEgainSessionID();

                url = _deleteKeyValuePairFromURL(url, "chatLaunched");
                url = _deleteKeyValuePairFromURL(url, "egChatWindowState");

                url = url.replace("&docked=true", "");
                url += "&popout=true";
                removeStylesForMaximized();
                /*
                 * EGS-39021:
                 * The egChatInProgress flag should be set to false before popping out
                 * it will make it consistent to the navigation/refresh scenario
                 * when the flag is set to false when the page is getting unloaded
                 */
                storageUtil.setValue("egChatInProgress", "false", "sessionStorage");
                storageUtil.setValue("egChatInProgress", "false");
                message.relayInfo = {
                    "url": _addUpdatePopoutOpenedBy(url, "egainiframe"),
                    "windowName": windowName,
                    "windowFeatures": windowFeatures
                };
                var messageSent = (message.compatible && true === message.compatible.isRelayImplementedInTemplate) ?
                        _sendPostMessageToRelayFrame(message) : false;
                if (true !== messageSent) {
                    /*
                     * TODO: If the message is not sent to the chat relay frame then parent has to open the child window
                     * Or we may decide to throw an error back to the user that the popout did not work
                     */
                    popoutWindow = window.open(_addUpdatePopoutOpenedBy(url, "customerpage"), windowName, windowFeatures);
                    var egPopoutWindowAttachCloseHandler = storageUtil.getValue("egPopoutWindowAttachCloseHandler", "sessionStorage");
                    if (egainDockChat.UseCustomButton === true) {
                        storageUtil.setValue("egPopoutWindowOpenTimestamp", Date.now(), "sessionStorage");
                    }
                    
                    //EGS-69422
                    storageUtil.setValue("egIsChatLaunched", "true", "sessionStorage");
                    
                    //EGS-52831
                    if (egPopoutWindowAttachCloseHandler === "true") {
                        setTimeout(function () {
                            popoutCloseHandler(popoutWindow);
                        }, 2000);
                    }
                }
                window.addEventListener("message", _eventListenerForPopout);
                if (popoutWindow) {
                    deleteChatIframe();
                }
            }
        } else if (true === message.relayInfo.popoutOpened) {
            deleteChatIframe();
        }
    };

    /*
     * EGS-52831
     * 1. For Desktops and MAC PCs: The timestamp updated from template is monitored. If the stored timestamp is older than 2 seconds then
     *    popout window will be considered closed.
     * 2. For mobile devices: This function monitors popout window status. If it is closed then launch button will be loaded.
     *    This approach is implemented for small devices because the approach explained in 1st point will not work on these devices as scripts are 
     *    stopped if window is out of focus for some time.
     */
    var popoutCloseHandler = function (popoutWindow) {
        var timer = null;
        var loadDockChatWhenPoppedOutClosed = function () {
            popoutWindow = null;
            window.removeEventListener("message", _eventListenerForPopout);
            storageUtil.setValue("egChatInProgress", "false", "sessionStorage");
            storageUtil.setValue("egPopoutWindow", "false", "sessionStorage");
            if (egainDockChat.isChatInitPage && !egainDockChat.UseCustomButton) {
                var chatWrapper = _getChatIframe();
                var chatWrapperStyle = chatWrapper ? window.getComputedStyle(chatWrapper) : null;
                if ((chatWrapper && chatWrapperStyle && chatWrapperStyle.display === 'none') || !chatWrapper) {
                    egainDockChat.IsChatLaunched = false;
                    deleteChatIframe();
                    _loadIframeForChat();
                }
            }
        };
        function _checkIfPopoutOpen() {
            isSmallDevice = isSmallDevice ? isSmallDevice : checkMobile();
            var egPopoutWindowTimestamp = storageUtil.getValue("egPopoutWindowTimestamp");
            if (!isSmallDevice && egPopoutWindowTimestamp && ((Date.now() - egPopoutWindowTimestamp) >= 2000) && (popoutWindow && popoutWindow.closed)) {
                loadDockChatWhenPoppedOutClosed();
                clearInterval(timer);
            } else if (isSmallDevice && popoutWindow && popoutWindow.closed) {
                loadDockChatWhenPoppedOutClosed();
                clearInterval(timer);
            }
        }
        timer = setInterval(_checkIfPopoutOpen, 2000)
    };

    if (
        storageUtil.getValue("egPopoutWindowOpenTimestamp", "sessionStorage") ||
        storageUtil.getValue("egPopoutWindow", "sessionStorage") === "true" ||
        storageUtil.getValue("egIsChatLaunched", "sessionStorage") === "true"
    ) {
        window.addEventListener("message", _eventListenerForPopout);
        isSmallDevice = isSmallDevice ? isSmallDevice : checkMobile();
        /*
         * EGS-52831
         * When page is refreshed, the popoutCloseHandler needs to be attached again.
         */
        var egPopoutWindowAttachCloseHandler = storageUtil.getValue("egPopoutWindowAttachCloseHandler", "sessionStorage");
        if (egPopoutWindowAttachCloseHandler === "true") {
            if (isSmallDevice) {
                var popoutWindow = window.open("", windowName, windowFeatures);
                popoutCloseHandler(popoutWindow);
                try {
                    if (popoutWindow && popoutWindow.location && popoutWindow.location.href === "about:blank") {
                        popoutWindow.close();
                    }
                } catch (ex) {
                    console.log(ex);
                }
            } else {
                /* EGS-52831
                 * For IE and Edge, popoutCloseHandler is implemented in chat-relay-frame.js. Hence, we need to  send a message to
                 * relay frame to attach the handler again.
                 */
                if (isChatRelayIframeEnabled()) {
                    var message = {
                        windowName: windowName,
                        windowFeatures: windowFeatures,
                        Key: "egPopoutWindowFeatures",
                        Method: "SET",
                        Value: "true",
                        Caller: "EGLV_DOCK"
                    };
                    if (!egainDockChatDomain) {
                        egainDockChatDomain = _getDomain(egainDockChat.serverURL);
                    }
                    setTimeout(function () {
                        _sendPostMessageToRelayFrame(message);
                    }, 2000);
                } else {
                    setTimeout(function () {
                        popoutCloseHandler(popoutWindow);
                    }, 2000);
                }
            }
        }
    }

    egainDockChat.CustomerContextParameters = egainDockChat.CustomerContextParameters || {};
    /*Method to set customer Parameters*/
    egainDockChat.SetParameter = function (egainAttributeName, attributeValue) {
        egainDockChat.CustomerContextParameters[egainAttributeName] = attributeValue;
    };
    
    egainDockChat.CustomerAttributes = egainDockChat.CustomerAttributes || {};
    /*Method to set customer Parameters*/
    egainDockChat.SetAttribute = function (attributeName, attributeValue) {
        egainDockChat.CustomerAttributes[attributeName] = attributeValue;
    };
    
    
    /*Method to to called when custom chat button is clicked */
    egainDockChat.SetChatLaunched = function () {
        egainDockChat.IsChatLaunched = true;
    };

    egainDockChat.sendCustomMessage = function (message) {
        var sent = false;
        if (_isChatInProgressInSession()) {
            var iFrame = document.getElementById("egain-chat-iframe") ? document.getElementById("egain-chat-iframe").contentWindow : '';
            if (!egainDockChatDomain) {
                egainDockChatDomain = _getDomain(egainDockChat.serverURL);
            }
            if (iFrame && iFrame.postMessage) {
                iFrame.postMessage(JSON.stringify(message), egainDockChatDomain);
                sent = true;
            }
        }
        return sent;
    };
    
    var receiveCustomMessageHandlers = [];
    egainDockChat.notifyForCustomMessage = function (customMessage) {
        for (var item = 0; item < receiveCustomMessageHandlers.length; item++) {
            receiveCustomMessageHandlers[item].call(this, customMessage);
        }
    };
    
    egainDockChat.subscribeToReceiveCustomMessage = function (fn) {
        receiveCustomMessageHandlers.push(fn);
    }
    
    egainDockChat.unsubscribeToReceiveCustomMessage = function (fn) {
        receiveCustomMessageHandlers = receiveCustomMessageHandlers.filter(
                    function (item) {
                        if (item !== fn) {
                            return item;
                        }
                    }
            );
    }
    

    /*
     * The function determines whether docked chat is already launched or not 
     * if already launched then based on chat window state,it takes the action
     * if not launched or closed then it takes necessary steps so that new chat iframe can be created     * 
     * @returns {Boolean} true if the chat was not launched or closed so that new chat iframe can be created
     * else returns false to indicate chat is already launched     * 
     */

    var checkBeforeCreatingNewChatIframe = function () {
        var egChatWindowState = storageUtil.getValue("egChatWindowState");
        var chatIframe = _getChatIframe();
        var createNewChatIframe = false;
        var iFrame = document.getElementById("egain-chat-iframe") ? document.getElementById("egain-chat-iframe").contentWindow : '';

        if (chatIframe !== null && (!egChatWindowState)) {
            //launch chat button is not clicked  so we can create new chat safely
            deleteChatIframe();
            createNewChatIframe = true;
        } else if (chatIframe !== null && (egChatWindowState === "true") && iFrame) {
            //chat is not started and in minimized so we need to send message to maximize
            var message = {
                value: '',
                caller: 'DOCKED_CHAT_LAUNCH',
                key: 'maximize'
            };
            iFrame.postMessage(JSON.stringify(message), egainDockChatDomain);
        } else if (true === _isPopoutOpen() && popoutWindow) {
            if (popoutWindow.closed) {
                createNewChatIframe = true;
                //reset pop out open flag
                storageUtil.setValue("egPopoutWindow", "false", "sessionStorage");
            } else {
                window.open('', 'EG_CHAT_POPOUT').focus();
            }
        }
        return createNewChatIframe;
    };
    var createChatWindowIfPopoutClosed = function() {
        var egPopoutWindowOpenTimestamp = storageUtil.getValue("egPopoutWindowOpenTimestamp", "sessionStorage");
        var egPopoutWindowTimestamp = storageUtil.getValue("egPopoutWindowTimestamp");
        var isRelayFrameEnabled = isChatRelayIframeEnabled();
        var egChatWindowState = storageUtil.getValue("egChatWindowState") === "true";
        if (egChatWindowState === true) {
            createChatWindow();
        } else if (popoutWindow && !popoutWindow.closed) {
            if (!isRelayFrameEnabled || (isRelayFrameEnabled && _isPopoutOpen())){
                window.open('', 'EG_CHAT_POPOUT').focus();          
            } else if (isRelayFrameEnabled) {
                createChatWindow();
            }            
        } else if (egPopoutWindowOpenTimestamp !== null) {
            var timeDiff = Date.now() - egPopoutWindowOpenTimestamp;
            if (timeDiff > 5000) {
                storageUtil.deleteValue("egPopoutWindowOpenTimestamp", "sessionStorage");
                var egPopoutWindowTimestamp = storageUtil.getValue("egPopoutWindowTimestamp");
                if (
                    (egPopoutWindowTimestamp && ((Date.now() - egPopoutWindowTimestamp) > 2000))
                ){
                    createChatWindow();
                }
            } else {                
                if (egainDockChat.ShowPopoutInProgressMsg && typeof egainDockChat.ShowPopoutInProgressMsg === 'function'){
                    egainDockChat.ShowPopoutInProgressMsg();
                } else {
                    console.log("egainDockChat.showPopoutInprogressMsg is undefined");
                }
            }
        } else {
            var egPopoutWindowTimestamp = storageUtil.getValue("egPopoutWindowTimestamp");
            if ((Date.now() - egPopoutWindowTimestamp) > 2000){
                createChatWindow();
            } 
        }
    };
    var createChatWindow = function() {
        isSmallDevice = isSmallDevice ? isSmallDevice : checkMobile();
        egainDockChat.isChatInitPage = true;
        var createNewChatIframe = checkBeforeCreatingNewChatIframe();
        if (!_isPopoutOpen() && (isSmallDevice || !_isChatInProgress()) && !_isChatInProgressInSession()&& storageUtil.getValue("egIsChatLaunched", "sessionStorage") === null) {
            if (!egainDockChat.EntryPointId) {
                /* check for VA enabled */
                if (!egainDockChat.VAName) {
                    console.log();
                    return;
                }
            }
            egainDockChat.VHDetails = {};
            var refererName = egainDockChat.refererName || "";
            refererName = encodeURIComponent(refererName);
            egainDockChat.VHDetails.refererName = refererName;

            var refererurl = encodeURIComponent(document.location.href);
            var hashIndex = refererurl.lastIndexOf('#');
            if (hashIndex !== -1) {
                refererurl = refererurl.substring(0, hashIndex);
            }
            egainDockChat.VHDetails.refererurl = refererurl;

            var eglvcaseid = (/eglvcaseid=[0-9]*/gi).exec(window.location.search);
            if (eglvcaseid && eglvcaseid.length && eglvcaseid.length > 0) {
                egainDockChat.VHDetails.eglvcaseid = eglvcaseid[0];
            }

            var vhtIds = "";
            if (typeof window.EGAINCLOUD !== "undefined" && window.EGAINCLOUD.Account.getAllIds) {
                var ids = window.EGAINCLOUD.Account.getAllIds();
                vhtIds = "&aId=" + ids.a + "&sId=" + ids.s + "&uId=" + ids.u;
                egainDockChat.VHDetails.vhtIds = vhtIds;
            }

            if (!egainDockChat.serverURL) {
                var src = egainDockChat.getEgainChatUrl();
                if (src !== "") {
                    egainDockChat.serverURL = src.substring(0, src.indexOf("templates") - 1);
                    //set serverURL in existingEgainDockParams object also from onetag script.
                    existingEgainDockParams.serverURL = egainDockChat.serverURL;
                }
            }
            if (storageUtil.getValue("egChatInitiateData") === null) {
                storageUtil.setValue("egChatInitiateData", JSON.stringify({"EntryPointId": egainDockChat.EntryPointId, "Locale": egainDockChat.Locale, "Template": _getTemplateName(), "PostChatAttributes": egainDockChat.PostChatAttributes, "serverURL": egainDockChat.serverURL, "debug": egainDockChat.Debug, "VChatParams": egainDockChat.VChatParams, "IntegrationType": egainDockChat.IntegrationType}));
            }
            /* VA data */

            if (egainDockChat.VAName) {
                if (!egainDockChat.VAEnabled) {
                    egainDockChat.VAEnabled = true;
                    //set VAEnabled flag for existingEgainDockParams, as this object is created when VAEnabled is not set in egainDockChat.
                    existingEgainDockParams.VAEnabled = true;
                }
                if (!egainDockChat.VATenantToken) {
                    egainDockChat.VATenantToken = window.EG_ACT_ID;
                    //set VATenantToken in existingEgainDockParams object also from onetag script.
                    existingEgainDockParams.VATenantToken = egainDockChat.VATenantToken;
                }
                if (!egainDockChat.eGainVAApiPath) {
                    egainDockChat.eGainVAApiPath = "";
                }
                if (!egainDockChat.VALaunchImagePath) {
                    egainDockChat.VALaunchImagePath = "";
                }

                if (typeof egainDockChat.ShowPreChatOnEscalation === 'undefined') {
                    egainDockChat.ShowPreChatOnEscalation = "";
                }
                if (storageUtil.getValue("egVAInitiateData", "sessionStorage") === null) {
                    storageUtil.setValue("egVAInitiateData", JSON.stringify({"VAName": egainDockChat.VAName, "VAEnabled": egainDockChat.VAEnabled, "Template": _getTemplateName(),
                        "TenantToken": egainDockChat.VATenantToken, "eGainVAApiPath": egainDockChat.eGainVAApiPath, "VALaunchImagePath": egainDockChat.VALaunchImagePath, "ShowPreChatOnEscalation": egainDockChat.ShowPreChatOnEscalation, "serverURL": egainDockChat.serverURL, "VASessionId": ""}), "sessionStorage");
                }
            }
            try {
                if (egainDockChat.IntegratedEntryPoint == "true")
                    sessionStorage.setItem('isIntegratedDockedChat', "true");
                else
                    sessionStorage.setItem('isIntegratedDockedChat', "false");
            } catch (e) {
                console.log('Storage is not supported.');
            }

            _loadIframeForChat();
        } else if (_parentLostWhileChatInProgressInPopout() && createNewChatIframe) {
            _loadIframeForChat();
        }
    }
    /*
     * EGS-38265:
     * Since the function is being called ONLY from the admin script on the OneTagged page,
     * hence it has been updated to load the chat iFrame when _parentLostWhileChatInProgressInPopout() returns true.
     * @returns {undefined}
     */
    egainDockChat.launchChat = function () {
        if (egainDockChat.UseCustomButton === true) {
            createChatWindowIfPopoutClosed();
        } else {
            createChatWindow();
        }
    };

    egainDockChat.getEgainChatUrl = function () {
        var src = "";
        var addOn = document.getElementById("_egainallowdockchat");
        if (addOn && addOn.src) {
            src = addOn.src;
        }
        if (src === "") {
            var scripts = document.getElementsByTagName('SCRIPT');
            for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].src.replace(/\\/, "/").indexOf("/egain-chat.") !== -1) {
                    src = scripts[i].src;
                }
            }

        }
        return src;
    };
    egainDockChat.launchProactiveChat = function (bannerUrl, acceptEventData, isBannerOffer) {
        if (typeof egainDockChat !== 'undefined') {
            egainDockChat.serverURL = _getRootFromBannerUrl(bannerUrl);
            /* Setting attributes of egainDockChat object required for chat */
            egainDockChatDomain = _getDomain(egainDockChat.serverURL);
            /*eGain Chat Entry Point*/
            egainDockChat.EntryPointId = _getParameterFromURL(bannerUrl, ENTRY_POINT_PARAM);
            /*eGain Chat Locale*/
            egainDockChat.Locale = _getParameterFromURL(bannerUrl, LOCALE_PARAM);
            /*eGain template name*/
            egainDockChat.Template = _getTemplateNameFromBannerUrl(bannerUrl);
            /*Set to true to enable posting attributes to templates*/
            egainDockChat.PostChatAttributes = _getParameterFromURL(bannerUrl, POST_ATTRIBUTES_PARAM);
            /*Set to true to enable Strophe debugging*/
            egainDockChat.Debug = _getParameterFromURL(bannerUrl, DEBUG_PARAM);
            /*eGain AV Chat Params*/
            egainDockChat.VChatParams = _getParameterFromURL(bannerUrl, "VChatParams");
            egainDockChat.VChatParams = ("string" === typeof egainDockChat.VChatParams) ? egainDockChat.VChatParams : "";

            egainDockChat.VAName = _getParameterFromURL(bannerUrl, 'VAName');
            if (egainDockChat.VAName) {
                if (!egainDockChat.VAEnabled) {
                    egainDockChat.VAEnabled = true;
                    //set VAEnabled flag for existingEgainDockParams, as this object is created when VAEnabled is not set in egainDockChat.
                    existingEgainDockParams.VAEnabled = true;
                }
                egainDockChat.eGainVAApiPath = _getParameterFromURL(bannerUrl, 'eGainVAApiPath');
                egainDockChat.VALaunchImagePath = _getParameterFromURL(bannerUrl, 'VALaunchImagePath');
                egainDockChat.ShowPreChatOnEscalation = _getParameterFromURL(bannerUrl, 'ShowPreChatOnEscalation');
                egainDockChat.VATenantToken = _getParameterFromURL(bannerUrl, 'VATenantToken');
                if (!egainDockChat.VATenantToken) {
                    egainDockChat.VATenantToken = window.EG_ACT_ID;
                }
                //set VATenantToken in existingEgainDockParams object also from onetag script.
                existingEgainDockParams.VATenantToken = egainDockChat.VATenantToken;
                if (!egainDockChat.eGainVAApiPath) {
                    egainDockChat.eGainVAApiPath = "";
                }
                if (!egainDockChat.VALaunchImagePath) {
                    egainDockChat.VALaunchImagePath = "";
                }
                if (typeof egainDockChat.ShowPreChatOnEscalation === 'undefined') {
                    egainDockChat.ShowPreChatOnEscalation = "";
                }
                if (storageUtil.getValue("egVAInitiateData", "sessionStorage") === null) {
                    storageUtil.setValue("egVAInitiateData", JSON.stringify({"VAName": egainDockChat.VAName, "VAEnabled": egainDockChat.VAEnabled, "Template": _getTemplateName(),
                        "TenantToken": egainDockChat.VATenantToken, "eGainVAApiPath": egainDockChat.eGainVAApiPath, "VALaunchImagePath": egainDockChat.VALaunchImagePath, "ShowPreChatOnEscalation": egainDockChat.ShowPreChatOnEscalation, "serverURL": egainDockChat.serverURL, "VASessionId": ""}), "sessionStorage");
                }
            }
            var chatIframe = _getChatIframe();
            var createNewChatIframe = checkBeforeCreatingNewChatIframe();
            if ((chatIframe === null) || createNewChatIframe) {
                egainDockChat.url = bannerUrl + "&docked=true";
                _addIframeCSS();
                _addEventListeners();

                var acceptEventDataStr = "";
                if (acceptEventData) {
                    var eventData = JSON.parse(acceptEventData);
                    acceptEventDataStr += "&reason=" + eventData.reason;
                    acceptEventDataStr += "&actionid=" + eventData.bannerid;
                    bannerIdTemp = eventData.bannerid;
                    acceptEventDataStr += "&ruleId=" + eventData.ruleId;
                    acceptEventDataStr += "&interactionId=" + eventData.interactionId;
                    if (true !== isBannerOffer) {
                        acceptEventDataStr += "&proactiveDockedOffer=" + eventData.proactiveDocked;
                    }

                }
                egainDockChat.url += acceptEventDataStr;
                if (storageUtil.getValue("egChatInitiateData") === null) {
                    storageUtil.setValue("egChatInitiateData", JSON.stringify({"EntryPointId": egainDockChat.EntryPointId, "Locale": egainDockChat.Locale, "Template": _getTemplateName(), "PostChatAttributes": egainDockChat.PostChatAttributes, "serverURL": egainDockChat.serverURL, "debug": egainDockChat.Debug, "VChatParams": egainDockChat.VChatParams, "IntegrationType": egainDockChat.IntegrationType}));
                }
                if (egainDockChat.VAEnabled) {
                    egainDockChat.url = egainDockChat.url + "&VAEnabled=true&VATenantAccId=" + egainDockChat.VATenantToken;
                    _addVASessionDataToUrl(egainDockChat.url);
                }
                if (isBannerOffer) {
                    egainDockChat.url += "&chatLaunched=true";
                }

                /* EGS-43872: Adding hostname information to URL which will be used for IIS url rewrite */
                var urlString = window.location.protocol + "//" + window.location.host;
                egainDockChat.url += "&wsname="+ (isValidURL(urlString) ? urlString : "");
                egainDockChat.url = egainDockChat.url + '&storage='+ _validateStorage();

                _createIframe(egainDockChat.url);
                egainDockChat.isChatClosed = false;
            }
        }
    };

    var isValidURL = function (urlString) {
        try {
          var url = new URL(urlString);
          return true;
        } catch (error) {
          return false;
        }
    };

    var resetVAEnabledFlag = function (useInitValue) {
        var isVAEnabled = storageUtil.getValue("VAEnabled", "sessionStorage");
        if (!useInitValue && isVAEnabled !== null) {
            // If page is refreshed, read value from store and VA might have been disabled after esalation
            egainDockChat.VAEnabled = isVAEnabled === 'true' ? true : false;
        } else {
            // if session is removed then use value from original data
            var vaData = storageUtil.getValue("egVAInitiateData", "sessionStorage");
            if (vaData !== null) {
                vaData = JSON.parse(vaData);
                if (vaData.VAEnabled)
                    egainDockChat.VAEnabled = vaData.VAEnabled;
            }
        }
    };
    var _readChatStateAfterLoad = function () {
        var loaded = false;
        var dataAfterLoad = _readChatStateFromStorage();
        if (dataAfterLoad
                && "boolean" === typeof dataAfterLoad.isChatInProgress
                && "boolean" === typeof dataAfterLoad.isPoppedOut
                && "boolean" === typeof dataAfterLoad.isChatIframeExist) {
            egChatStateDataBeforeUnloading.sid = dataAfterLoad.sid;
            egChatStateDataBeforeUnloading.isChatInProgress = dataAfterLoad.isChatInProgress;
            egChatStateDataBeforeUnloading.isPoppedOut = dataAfterLoad.isPoppedOut;
            egChatStateDataBeforeUnloading.isChatIframeExist = dataAfterLoad.isChatIframeExist;
            loaded = true;
        }
        return loaded;
    };
    /*
     * EGS-38265:
     * The function determines whether the chat was popped out for the same chat session Id
     * @returns {Boolean} true if the chat was popped out in the previous window
     * and at present the chat frame doesn't exist
     * and the last and present chat session Ids are same
     */
    var _parentLostWhileChatInProgressInPopout = function () {
        var parentLostWhileChatInProgressInPopout = false;
        if (_readChatStateAfterLoad()) {
            /*
             * EGS-38265:
             * Do NOT check any session variables
             * since the launch chat button has to be shown if the chat was in progress and popped out
             */
            var currentSid = _getChatSessionId();
            var isSidSame = (egChatStateDataBeforeUnloading.sid && egChatStateDataBeforeUnloading.sid === currentSid);
            var chatFrameExist = (null !== _getChatIframe());
            if (true === egChatStateDataBeforeUnloading.isPoppedOut
                    && false === chatFrameExist
                    && true === isSidSame) {
                parentLostWhileChatInProgressInPopout = true;
                // retain the flag so that it can be used later in building the iFrame/popped out URLs
                egChatStateDataBeforeUnloading.parentLostWhileChatInProgressInPopout = parentLostWhileChatInProgressInPopout;
            }
        }
        return parentLostWhileChatInProgressInPopout;
    };
    var loadDockChat = function () {
        var egSessionId = _getChatSessionId();
        var vaSessionId = storageUtil.getValue("vaSessionId", "sessionStorage");
        isSmallDevice = isSmallDevice ? isSmallDevice : checkMobile();
        var egPopoutWindowOpenTimestamp = storageUtil.getValue("egPopoutWindowOpenTimestamp", "sessionStorage");
        if (egSessionId === null && vaSessionId === null) {
            return;
        } else {
            if (!_isPopoutOpen() && (isSmallDevice || !_isChatInProgress()) && !_isChatInProgressInSession() && egPopoutWindowOpenTimestamp === null) {

                //removeEventListeners();
                /* VA parameters */
                //resetVAEnabledFlag(false);
                
                var egIsChatLaunched = storageUtil.getValue("egIsChatLaunched", "sessionStorage");
                if(egIsChatLaunched === null){
                    _loadIframeForChat();
                }
            }
        }
    };

    egainDockChat.stopCobrowseCallback = function (sessionId) {
        var iFrame = null;
        /*
         * EGS-38457:
         * Using popped out window reference to post the message if the chat is popped out.
         */
        if (true === _isPopoutOpen() && popoutWindow) {
            iFrame = popoutWindow;
        } else {
            iFrame = document.getElementById('egain-chat-iframe').contentWindow;
        }
        if (iFrame) {
            var message = {
                value: sessionId,
                caller: "EGLV_DOCK_CALLER_COBROWSE_STOP"
            };
            iFrame.postMessage(JSON.stringify(message), egainDockChatDomain);
        }
    };
    var isSmallDevice;

    var removeAllChatWrapperClasses = function (chatWrapper) {
        chatWrapper = chatWrapper || _getChatIframe();
        if (chatWrapper && chatWrapper.classList && "function" === typeof chatWrapper.classList.remove) {
            chatWrapper.classList.remove(minimizedChatClass);
            chatWrapper.classList.remove(minimizedVaClass);
            chatWrapper.classList.remove(maximizedClass);
            chatWrapper.classList.remove(launchChatClass);
            chatWrapper.classList.remove(launchVaClass);
            chatWrapper.classList.remove(launchHoverClass);
            chatWrapper.classList.remove(minimizedButtonPositionClass);
            chatWrapper.classList.remove(maximizedDockWindowPositionClass);
            chatWrapper.classList.remove(launchButtonPositionClass);
            chatWrapper.classList.remove(animationClass);
        }
    };

    var windowMessageListener = function (event) {
        if (event && event.data && "string" === typeof event.data) {
            try {
                var message = JSON.parse(event.data);
                isSmallDevice = isSmallDevice ? isSmallDevice : checkMobile();
                //EGS-60179 backward compatibility changes
                if (message.proactiveDocked === '1' && message.bannerid == undefined) {
                    message.bannerid = bannerIdTemp;
                    window.postMessage(JSON.stringify(message), window.location.origin);
                }
                if (event.origin.toLowerCase() === egainDockChatDomain.toLowerCase() && message.Caller && message.Caller.indexOf("EGLV_DOCK") !== -1) {
                    switch (message.Method) {
                        case 'SET':
                            _setDataInBrowserStorage(message);
                            if (message.Key == "cbData" && message.Value && message.Value.cbLocale && window.eGain && window.eGain.cobrowse && window.eGain.cobrowse.setLocale) {
                                window.eGain.cobrowse.setLocale(message.Value.cbLocale);
                                if (MultiSubDomainSupport.IsRequired) {
                                    sessionStorage.setItem("cbAutoSessionId", message.Value.cbAutoSessionId);
                                    sessionStorage.setItem("cbAutostart", message.Value.cbAutostart);
                                    sessionStorage.setItem("egActId", message.Value.egActId);
                                    sessionStorage.setItem("cbLocale", message.Value.cbLocale);
                                }    
                            }
                            break;
                        case 'SET_COBROWSE_DATA':
                            storageUtil.setValue(message.Key, message.Value, "sessionStorage");
                            break;
                        case 'GET':
                            var iFrame = document.getElementById('egain-chat-iframe').contentWindow;
                            var response = {};
                            if (message.Key === "EgainChatParameter") {
                                response = {
                                    value: egainDockChat.CustomerContextParameters,
                                    caller: message.Caller,
                                    key: message.Key
                                };
                            } else if (message.Key === "VhtIDs") {
                                if (typeof window.EGAINCLOUD !== "undefined" && window.EGAINCLOUD.Account.getAllIds) {
                                    var ids = window.EGAINCLOUD.Account.getAllIds();
                                    var vhtIds = {aId: ids.a, sId: ids.s, uId: ids.u};//'&aId=' + ids.a + '&sId=' + ids.s + '&uId=' + ids.u;
                                    if (!egainDockChat.VHDetails) {// This is undefined in case of docked chat offers
                                        egainDockChat.VHDetails = {};
                                    }
                                    egainDockChat.VHDetails.vhtIds = '&aId=' + ids.a + '&sId=' + ids.s + '&uId=' + ids.u;
                                    response = {
                                        value: vhtIds,
                                        caller: message.Caller,
                                        key: message.Key
                                    };
                                }
                            }else if (message.Key === "EgainChatAttribute") {
                                response = {
                                    value: egainDockChat.CustomerAttributes,
                                    caller: message.Caller,
                                    key: message.Key
                                };
                            } else {
                                response = {
                                    value: storageUtil.getValue(message.Key, _mapStorageType(message.StorageType), message.IsConfidential),
                                    caller: message.Caller,
                                    key: message.Key
                                };
                            }
                            // EGS-47211: key property is added to response object
                            iFrame.postMessage(JSON.stringify(response), egainDockChatDomain);
                            break;
                        case 'GET_COOKIE':
                            var iFrame = document.getElementById('egain-chat-iframe').contentWindow;
                            var cookieVal = storageUtil.getValue(message.Key, 'cookie', message.IsConfidential);
                            response = {
                                value: cookieVal,
                                caller: message.Caller
                            };
                            iFrame.postMessage(JSON.stringify(response), egainDockChatDomain);
                            break;
                        case 'REMOVE':
                            _removeDataFromBrowserStorage(message);
                            break;
                        case 'RESET_CHAT':
                            egainDockChat.isChatClosed = true;
                            //resets egainDockChat params to existingEgainDockParams, as egainDockChat gets override in _setParamsForExistingChat().
                            _resetExistingParams();
                            removeStylesForMaximized();
                            removeAllChatWrapperClasses();
                            if (egainDockChat.isChatInitPage && !egainDockChat.UseCustomButton && !(storageUtil.getValue("egDuplicateSession", "sessionStorage") === "true")) {
                                egainDockChat.IsChatLaunched = false;
                                document.getElementById('egain-chat-iframe').src = _getChatUrl() + "&docked=true";
                            } else {
                                deleteChatIframe();
                            }
                            storageUtil.setValue("egIsChatReset", "true", "sessionStorage");   //EGS-73996
                            egainDockChat.UseCustomButton && message.Key === "useCustomButton" && storageUtil.deleteValue("egSessionId");
                            break;
                        case 'RESIZE_WINDOW':
                            var chatWrapper = _getChatIframe();
                            if (chatWrapper) {
                                /*chatWrapper.style.height = message.Value + 'px';*/
                                switch (message.Key) {
                                    case "EG_MINIMIZE":
                                    {
                                        if (chatWrapper.classList) {
                                            removeAllChatWrapperClasses(chatWrapper);

                                            chatWrapper.classList.add(minimizedChatClass);
                                            if (message.Value) {
                                                if (message.Value.position) {
                                                    minimizedButtonPositionClass = "eg-minimized-" + message.Value.position;
                                                    chatWrapper.classList.add(minimizedButtonPositionClass);
                                                }
                                                if (true === message.Value.showAnimation) {
                                                    chatWrapper.classList.add(animationClass);
                                                }
                                            }
                                        }
                                        removeStylesForMaximized();
                                        break;
                                    }
                                    case "EG_MINIMIZE_VA":
                                    {
                                        if (chatWrapper.classList) {
                                            removeAllChatWrapperClasses(chatWrapper);

                                            chatWrapper.classList.add(minimizedVaClass);
                                            chatWrapper.classList.remove("egain-gh-active");
                                            chatWrapper.classList.remove("egain-gh-collapsed");
                                            if (message.Value) {
                                                if (message.Value.position) {
                                                    minimizedButtonPositionClass = "eg-minimized-" + message.Value.position;
                                                    chatWrapper.classList.add(minimizedButtonPositionClass);
                                                }
                                                if (true === message.Value.showAnimation) {
                                                    chatWrapper.classList.add(animationClass);
                                                }
                                            }
                                        }
                                        removeStylesForMaximized();
                                        break;
                                    }
                                    case "EG_MAXIMIZE":
                                    {
                                        if (chatWrapper.classList) {
                                            removeAllChatWrapperClasses(chatWrapper);

                                            chatWrapper.classList.add(maximizedClass);
                                            chatWrapper.classList.remove("egain-gh-active");
                                            chatWrapper.classList.remove("egain-gh-collapsed");
                                            var maximizeWindowPos = (egainDockChat.UseCustomButton && egainDockChat.maximizeWindowPosition);
                                            if (maximizeWindowPos || message.Value) {
                                                if (maximizeWindowPos || message.Value.position) {
                                                    maximizedDockWindowPositionClass = maximizeWindowPos 
                                                    ?  "eg-maximized-" +  egainDockChat.maximizeWindowPosition
                                                    : "eg-maximized-" +  message.Value.position;
                                                    chatWrapper.classList.add(maximizedDockWindowPositionClass);
                                                }
                                                if (true === message.Value.showAnimation) {
                                                    chatWrapper.classList.add(animationClass);
                                                }
                                            }
                                        }
                                        addStylesForMaximized();
                                        break;
                                    }
                                    case "EG_LAUNCH_CHAT":
                                    {
                                        if (chatWrapper.classList) {
                                            removeAllChatWrapperClasses(chatWrapper);

                                            chatWrapper.classList.add(launchChatClass);
                                            if (message.Value) {
                                                if (message.Value.position) {
                                                    launchButtonPositionClass = "eg-launch-" + message.Value.position;
                                                    chatWrapper.classList.add(launchButtonPositionClass);
                                                }
                                                if (true === message.Value.showAnimation) {
                                                    chatWrapper.classList.add(animationClass);
                                                }
                                            }
                                        }
                                        break;
                                    }
                                    case "EG_LAUNCH_VA":
                                    {
                                        if (chatWrapper.classList) {
                                            removeAllChatWrapperClasses(chatWrapper);

                                            chatWrapper.classList.add(launchVaClass);
                                            if (message.Value) {
                                                if (message.Value.position) {
                                                    launchButtonPositionClass = "eg-launch-" + message.Value.position;
                                                    chatWrapper.classList.add(launchButtonPositionClass);
                                                }
                                                if (true === message.Value.showAnimation) {
                                                    chatWrapper.classList.add(animationClass);
                                                }
                                            }
                                        }
                                        break;
                                    }
                                    /*
                                     * Following cases are kept for backwards compatibility
                                     */
                                    case "EG_LAUNCH_HOVER":
                                    {
                                        if (chatWrapper.classList) {
                                            chatWrapper.classList.add(launchHoverClass);
                                        }
                                        break;
                                    }
                                    case "EG_LAUNCH_HOVER_OUT":
                                    {
                                        if (chatWrapper.classList) {
                                            chatWrapper.classList.remove(launchHoverClass);
                                        }
                                        break;
                                    }
                                    case "EG_REMOVE_ALL":
                                    {
                                        removeAllChatWrapperClasses(chatWrapper);
                                        break;
                                    }
                                    case "EG_GH_COLLAPSED": {
                                        if (chatWrapper.classList) {
                                            chatWrapper.classList.add("egain-gh-collapsed");
                                            chatWrapper.classList.remove("egain-gh-active");
                                        }
                                        break;
                                    }
                                    case "EG_GH_ACTIVE": {
                                        if (chatWrapper.classList) {
                                            chatWrapper.classList.add("egain-gh-active");
                                            chatWrapper.classList.remove("egain-gh-collapsed");
                                        }
                                        break;
                                    }
                                    case "EG_GH_CLOSED": {
                                        if (chatWrapper.classList) {
                                            chatWrapper.classList.remove("egain-gh-active");
                                            chatWrapper.classList.remove("egain-gh-collapsed");
                                        }
                                        break;
                                    }
                                }
                            }
                            break;
                        case 'NOTIFY':
                            if ("COBROWSE_REQUEST" === message.Key) {
                                /* Handler for cobrowse event */
                                var cbUrl = message.Value;
                                if (cbUrl && "string" === typeof cbUrl) {
                                    window.location.href = cbUrl;
                                } else {
                                    window.eGain.cobrowse.startCobrowse();
                                }
                            } else if ("COBROWSE_END_REQUEST" === message.Key) {
                                if ("endsession" === message.Value) {
                                    window.eGainCB.validateAndTerminateCobrowse('endsession');
                                }
                            } else if ("EG_ENABLE_TRACKER" === message.Key) {
                                /* EGS-39950: Enable tracker calls for Onetag on click of chat launch button  */
                                _enableTrackerCalls();
                            }
                            break;
                        case "PAGEPUSH":
                            if (message.Key === 'UrlToPush' && message.Value !== null && 0 < message.Value.length) {
                                window.location.href = message.Value;
                            }
                            break;
                        case "CONTENTLINK":
                            if (message.Key === 'UrlToOpen' && message.Value !== null && 0 < message.Value.length) {
                                window.location.href = message.Value;
                            }
                            break;
                        case "POPOUT" :
                            if (message.Key === "POPOUT_START") {
                                _convertDockedToPopup(message);
                            }
                            break;
                        case "SUB_DOMAIN_SUPPORT":
                        /*
                         * Block for handling sub-domain support config
                         */
                        {
                            if ("MultiSubDomainSupportConfig" === message.Key && message.Value) {
                                MultiSubDomainSupport.setConfigReceivedFromChat(JSON.parse(message.Value));
                            }
                            break;
                        }
                        case "SET_IFRAME_TITLE":
                            var chatIframe = document.getElementById('egain-chat-iframe');
                            if (chatIframe) {
                                chatIframe.setAttribute('title', message.Value);
                            }
                        break;
                        default:
                            break;
                    }
                }else if(event.origin.toLowerCase() === egainDockChatDomain.toLowerCase() && message.caller && message.caller.indexOf("CUSTOM_BOT") !== -1){
                    egainDockChat.notifyForCustomMessage(message);
                }
            } catch (e) {
            }
        }
    };
    var egChatStateDataBeforeUnloading = {
        "isChatInProgress": false,
        "isPoppedOut": false,
        "isChatIframeExist": false,
        "parentLostWhileChatInProgressInPopout": false,
        "sid": ""
    };
    var _saveChatStateInStorage = function () {
        storageUtil.setValue("egChatStateBeforeUnload", JSON.stringify(egChatStateDataBeforeUnloading));
    };
    var _readChatStateFromStorage = function () {
        var savedChatState = storageUtil.getValue("egChatStateBeforeUnload");
        savedChatState = (savedChatState) ? JSON.parse(savedChatState) : null;
        return savedChatState;
    };
    /*
     * EGS-38265:
     * This function saves the chat state in to the local storage
     * to be used in scenarios when the parent page was disconnected when the chat was in progress in a popped out window
     * @returns {Boolean} true if the state was saved successfully
     */
    var _saveChatStateBeforeUnload = function () {
        var saved = false;
        var savedChatState = _readChatStateFromStorage();
        var save = "NEW";
        var currentSid = _getChatSessionId();
        if (savedChatState && savedChatState.sid) {
            if (currentSid) {
                if (savedChatState.sid === currentSid) {
                    save = "UPDATE";
                } else {
                    save = "RESET";
                }
            } else {
                save = "OLD";
            }
        }
        switch (save) {
            case "OLD":
            {
                egChatStateDataBeforeUnloading.sid = savedChatState.sid;
                egChatStateDataBeforeUnloading.isChatInProgress = savedChatState.isChatInProgress;
                egChatStateDataBeforeUnloading.isPoppedOut = savedChatState.isPoppedOut;
                egChatStateDataBeforeUnloading.isChatIframeExist = savedChatState.isChatIframeExist;
                break;
            }
            case "UPDATE":
            {
                egChatStateDataBeforeUnloading.sid = savedChatState.sid;
                egChatStateDataBeforeUnloading.isChatInProgress = _isChatInProgress();
                egChatStateDataBeforeUnloading.isPoppedOut = _isPopoutOpen() || savedChatState.isPoppedOut;
                egChatStateDataBeforeUnloading.isChatIframeExist = (null !== _getChatIframe());
                break;
            }
            case "RESET":
            case "NEW":
            default:
            {
                egChatStateDataBeforeUnloading.sid = currentSid;
                egChatStateDataBeforeUnloading.isChatInProgress = _isChatInProgress();
                egChatStateDataBeforeUnloading.isPoppedOut = _isPopoutOpen();
                egChatStateDataBeforeUnloading.isChatIframeExist = (null !== _getChatIframe());
                break;
            }
        }
        currentSid && _saveChatStateInStorage();
        saved = true;
        if (!(isSafari || iOS))
            return saved;
    };
    /*
     * EGS-38265:
     * Following should be invoked on window unload everytime
     * and not only when the chat frame exists
     */
    window.addEventListener((iOS || isSafari) ? "pagehide" : "unload", _saveChatStateBeforeUnload);
    // EGS-69815 - unload event is not getting triggered in android chrome , so using beforeunload event instead.
    if (isSafari || (android && isChrome))    
        window.addEventListener("beforeunload", _saveChatStateBeforeUnload);

    // EGS-48039 fix
    if (iOS) {
        window.addEventListener('pageshow', function (event) {
            if (event.persisted) {
                deleteChatIframe();
                loadDockChat();
            }
        });
    }

    var windowUnloadListener = function () {
        var chatIframe = _getChatIframe();
        var isDockedChatInProgress = _isChatInProgress();
        var isDockedChatInProgressInSession = storageUtil.getValue("egChatInProgress", "sessionStorage") === "true";
        // identify and save the state (into local storage) of the chat before unloading
        if (true === isDockedChatInProgressInSession && chatIframe !== null) {
            var isDuplicateSession = ("true" === storageUtil.getValue("egDuplicateSession", "sessionStorage")) ? true : false;
            if (!isDuplicateSession) {
                storageUtil.setValue("egChatInProgress", "false", "sessionStorage");
                if (true === isDockedChatInProgress) {
                    storageUtil.setValue("egChatInProgress", "false");
                }
            } else {
                storageUtil.deleteValue("egDuplicateSession", "sessionStorage");
            }
        }
    };

    var _addEventListeners = function () {
        /* Listener for Getting and Setting localstorage values */
        window.addEventListener('message', windowMessageListener);
        window.addEventListener((iOS || isSafari) ? "pagehide" : "unload", windowUnloadListener);
        // EGS-69815 - unload event is not getting triggered in android chrome , so using beforeunload event instead.
        if (isSafari || (android && isChrome))    
            window.addEventListener("beforeunload", windowUnloadListener);
    };
    var removeEventListeners = function () {
        /* Listener for Getting and Setting localstorage values */
        window.removeEventListener('message', windowMessageListener);
        window.removeEventListener((iOS || isSafari) ? "pagehide" : "unload", windowUnloadListener);
        // EGS-69815 - unload event is not getting triggered in android chrome , so using beforeunload event instead.
        if (isSafari || (android && isChrome))    
            window.removeEventListener("beforeunload", windowUnloadListener);
    };

    var deleteChatIframe = function () {
        var chatIframe = _getChatIframe();
        removeAllChatWrapperClasses(chatIframe);
        if (chatIframe !== null) {
            chatIframe.parentNode.removeChild(chatIframe);
        }
        removeEventListeners();
    };

    var checkIOSTablet = function () {
        var ua = navigator.userAgent;
        return ua.match(/iPad/);
    };
    var isVisitorIOSTablet = checkIOSTablet() ? true : false;

    var removeStylesForMaximized = function () {
        isSmallDevice = isSmallDevice ? isSmallDevice : checkMobile();
        if (isSmallDevice || isVisitorIOSTablet) {
            document.body.classList.remove("eg-chat-maximized");
        }
    };

    var addStylesForMaximized = function () {
        isSmallDevice = isSmallDevice ? isSmallDevice : checkMobile();
        if (isSmallDevice || isVisitorIOSTablet) {
            document.body.classList.add("eg-chat-maximized");
        }
    };

    if (egainDockChat.CallQueue) {
        while (fn = egainDockChat.CallQueue.shift()) {
            if (egainDockChat[fn.name]) {
                egainDockChat[fn.name].apply(null, fn.args);
            }
        }
    }

    var loadDC = function () {
        if (typeof document.body !== 'undefined' && document.body !== null)
            loadDockChat();
        else
            setTimeout(loadDC, 100);
    };
    window.egainDockChat = egainDockChat;
    loadDC();
    var obj = {
        Value: true,
        Caller: "EGLV_DOCK",
        Key: "dockedChatLoaded"
    };    
    window.postMessage(JSON.stringify(obj), window.location.origin);
}(parent.window));
