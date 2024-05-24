
if (window.cdc === undefined) { window.cdc = {}; }
if (cdc.context === undefined) {
    cdc.context = (function (window, undefined) {
        /**
         * Key returned for unknown environments
         * @type {string}
         */
        var UNKNOWN_ENVIRONMENT_KEY = "unknown";

        /**
         * Keys returned for known environments
         * @type {Array} of Strings
         */
        var KNOWN_ENVIRONMENT_KEYS = ["dev", "stage", "prod"];

        /**
         * List of "full-fledged" envs to check against for asset loading (US161000)
         * @type {Array} of Strings
         */
        var FULL_WEM_ENV_LIST = ["fdk-pstage", "fdk-stage", "fdk-devint", "fdk-author-pstage"];

        /**
         * Keys for known and unknown environments (concatenation of KNOWN_ENVIRONMENT_KEYS and UNKNOWN_ENVIRONMENT_KEY)
         * @type {Array}
         */
        var STANDARD_ENVIRONMENT_KEYS = KNOWN_ENVIRONMENT_KEYS.concat([UNKNOWN_ENVIRONMENT_KEY]);

        /**
         * keys => environment description, values => Array holding strings to compare against hostnames
         * @type {Object}
         */
        var PATTERN_FRAGMENTS = {
            "prod": [
                "www[0-9]*"
                , "apps"
                , "cdx"
                , "cepx-active-prod[0-9]*"
                , "wemapp-(author|publish)-(prod[0-9]|nprd)[0-9]*-[0-9]*"
                , "www-(author|test|publish|author3|author4)"
                , "www-(author|test|publish|author3|author4)-nprd"
                , "wwwin-tools"
                , "cisco-apps"
                , "grs"
                , "investor"
                , "newsroom"
                , "origin-software"
                , "software"
                , "sso[0-9]*"
                , "cloudsso[0-9]*"
                , "tools"
                , "webapps"
                , "wwwin"
                , ".*\.cloudapps"
                , ".*\.cisco"
                , "^nic$"
            ],
            "stage": [
                "apps-lt"
                , "apps-stage"
                , "cdx-stage"
                , "(cepx|ecmx)-(active|staging|wip)-(lt|stage)[0-9]*"
                , "fdk-author-lt"
                , "fdk-author3-lt"
                , "fdk-author4-lt"
                , "fdk-(author|publish)*[0-9]*-stage"
                , "fdk-author3-stage"
                , "fdk-author4-stage"
                , "fdk-author-pstage"
                , "fdk-author3-pstage"
                , "fdk-author4-pstage"
                , "fdk-author-pstage3"
                , "(www(in)?-)?fdk-(publish-)?lt[0-9]*"
                , "(www(in)?-)?fdk-(publish-)?.?stage[0-9]*"
                , "wemapp-(author|publish)-.?stage[0-9]*-[0-9]*"
                , "software-lt"
                , "software-stage"
                , "sso-nprd[0-9]*"
                , "cloudsso-test[0-9]*"
                , "tools-lt"
                , "tools-stage"
                , "www-lt[0-9]*"
                , "www-(author-|publish-)*stage[0-9]*"
                , "webapps-lt"
                , "webapps-stage"
                , "wwwin-tools-(dev|stage|lt)"
                , "wwwin-stage"
                , ".*\-stage\.cloudapps"
                , ".*\-lt\.cloudapps"
            ],
            "dev": [
                "apps-dev"
                , "cdx-dev"
                , "cepx-active-dev[0-9]*"
                , "ecmx-active-dev[0-9]*"
                , "fdk-(author-)?dev[0-9]*"
                , "fdk-(author3-)?dev[0-9]*"
                , "fdk-(author4-)?dev[0-9]*"
                , "(www(in)?-)?fdk-(author-)?devint[0-9]*"
                , "(www(in)?-)?fdk-(author3-)?devint[0-9]*"
                , "(www(in)?-)?fdk-(author4-)?devint[0-9]*"
                , "wemapp-(author|publish)-(dev|devint|idev)[0-9]*-[0-9]*"
                , "software-dev"
                , "sso-idev[0-9]*"
                , "fdk-author4-idev[0-9]*"
                , "cloudsso-idev[0-9]*"
                , "tools-dev"
                , "www-(dev|idev)[0-9]*"
                , "localhost"
                , "webapps-dev"
                , "wwwin-dev"
                , ".*\-dev\.cloudapps"
                , ".*\.cisco.com:4502" // add sandboxes to 'dev' classification
            ]
        };

        /**
         * Configuration for public, read-only properties.
         * @type {Object}
         */
        var READ_ONLY = {
            writable: false,
            enumerable: false,
            configurable: false
        };

        /**
         * Determines whether the environment is non-standard (by checking for a valid `cdcext.customEnvironment` property).
         * @return {Boolean} Indicates whether environment is custom or not.
         */
        var isCustomEnvironment = function () {
            let environmentsRegExp = new RegExp("^(" + STANDARD_ENVIRONMENT_KEYS.join("|").slice(0, -1) + ")$");
            return typeof cdcext !== "undefined" && typeof cdcext.customEnvironment !== "undefined" && cdcext.customEnvironment.match(environmentsRegExp);
        };

        /**
         * Determines whether or not the current host matches an env in FULL_WEM_ENV_LIST
         * @return {Boolean} whether or not the current host matches an env in FULL_WEM_ENV_LIST
         */
        var matchesTrueWemEnv = function () {
            let currentHost = window.location.host,
                subdomain = currentHost.split('.')[0];
            return FULL_WEM_ENV_LIST.some(;
        };

        /**
         * Returns a key to represent the current environment based on the hostname or `cdcext.customEnvironment`.
         * @return {String} A key to describe a known, unknown, or custom environment.
         */
        var findEnvironment = function () {
            if (isCustomEnvironment()) {
                return cdcext.customEnvironment;
            } else {
                return matchEnvironment(window.location.host);
            }
        };

        /**
         * ensure that a specified namespace exists in the global scope
         * @param {String} namespaceStr: Namespace to ensure, in dot-notation, ex: "cdc.sso"
         */
        var ensureNamespace = function (namespaceStr) {
            if (!namespaceStr) { return; }
            var parts = namespaceStr.split(".");
            var o = window;
            var i;
            var aPart;
            for (i = 0; i < parts.length; i++) {
                aPart = parts[i];
                if (typeof (o[aPart]) != "object") {
                    o[aPart] = {};
                }
                o = o[aPart];
            }
        };        

        /**
         * Returns a compound regular expression to consolidate the provided fragments.
         * @param  {Array} patternFragments An array of strings to consolidate.
         * @return {RegExp}                 The compound regular expression object.
         */
        var getEnvironmentRegExp = function (patternFragments) {
            return new RegExp( "^(" + patternFragments.join("|") + ")(\\.|:|$)" )
        };

        /**
         * Determines if the provided hostname maps to a known environment (e.g., "dev", "stage", or "prod").
         * @param  {String} envToMatch The hostname to be tested.
         * @return {String}            A key to describe a known or unknown environment.
         */
        var matchEnvironment = function (envToMatch) {
            envToMatch = envToMatch.replace(/\.cisco\.com$|\.cisco$/i, ""); // Remove the top-level domain, if any
            let knownPatterns = {};
            KNOWN_ENVIRONMENT_KEYS.forEach(;
            return (function (location) {
                var result = UNKNOWN_ENVIRONMENT_KEY;
                KNOWN_ENVIRONMENT_KEYS.forEach(function (environmentKey) {
                    if (knownPatterns[environmentKey].test(location)) { result = (result === UNKNOWN_ENVIRONMENT_KEY) ? environmentKey : result; }
                });
                return result;
            }(envToMatch));
        };

        /**
         * Determines whether the user is on login page (by detecting presence of element matching `#login-form`).
         * @return {Boolean} Whether the user is on login page.
         */
        var isLoginPage = 

        /**
         * generate URL with random number value for specified query param
         * @param {String} url URL to which to append the query string
         * @param {String} param the key to which to assign the random number
         * @return {String} generated url
         */
        var cacheBust = function (url, param) {
            if (!param) { param = 'cacheReset'; }
            let delim = "?";
            // if url is ng-prod1(bam) or has ?, set param delimeter to &
            if (url.match(/(ng-prod1|\?)/)) { delim = "&"; }

            return url + delim + param + '=' + cdc.context.randomNumber();
        };

        /**
         * generate string containing current time and random number
         * @param {Number} limit maximum limit for the random number
         * @return {String} current time and randum number, dash-separated
         */
        var randomNumber = function (limit) {
            if (!limit) { limit = 1000; }
            let sNum = Math.floor(Math.random() * limit) + 1,
                sTime = (new Date()).getTime(),
                rNum = sTime + "-" + sNum;
            return rNum;
        };

        var ls = {
            /**
             * ls.getConfigInfo: get specified key from session OR localStorage
             * @param {String} storeName key to get from specified storage
             * @param {Boolean} session true: get from sessionStorage? false: get from localStorage
             * @return {Boolean} success => true, error => false
             */
            getConfigInfo: function (storeName, session) {
                try {
                    if (session === true) {
                        return JSON.parse(sessionStorage[storeName]);
                    } else {
                        return JSON.parse(localStorage[storeName]);
                    }
                } catch (e) {
                    return false;
                }
            },
            /**
             * ls.deleteConfigInfo: delete specified key from session OR localStorage
             * @param {String} storeName key to remove from specified storage
             * @param {Boolean} session true: delete sessionStorage? false: delete localStorage
             * @return {Boolean} success => true, error => false
             */
            deleteConfigInfo: function (storeName, session) {
                try {
                    if (session === true) {
                        sessionStorage.removeItem(storeName);
                    } else {
                        localStorage.removeItem(storeName);
                    }
                    return true;
                } catch (e) {
                    return false;
                }
            }
        }

        /**
         * The public methods and properties to expose.
         * @type {Object}
         */
        let publicAPI = {
            findEnvironment: findEnvironment,
            matchEnvironment: matchEnvironment,
            isLoginPage: isLoginPage,
            randomNumber: randomNumber,
            ensureNamespace: ensureNamespace,
            cacheBust: cacheBust,
            ls: ls,
            UNKNOWN_ENVIRONMENT_KEY: UNKNOWN_ENVIRONMENT_KEY,
            KNOWN_ENVIRONMENT_KEYS: KNOWN_ENVIRONMENT_KEYS,
            STANDARD_ENVIRONMENT_KEYS: STANDARD_ENVIRONMENT_KEYS,
            PATTERN_FRAGMENTS: PATTERN_FRAGMENTS,
            FULL_WEM_ENV_LIST: FULL_WEM_ENV_LIST,
            matchesTrueWemEnv: matchesTrueWemEnv
        };


        /**
         * Updates public properties to be read-only.
         */
        Object.defineProperties(publicAPI, {
            "UNKNOWN_ENVIRONMENT_KEY": READ_ONLY,
            "KNOWN_ENVIRONMENT_KEYS": READ_ONLY,
            "STANDARD_ENVIRONMENT_KEYS": READ_ONLY,
            "PATTERN_FRAGMENTS": READ_ONLY
        })

        return publicAPI;

    })(window); // cdc.context
} // end existence check
; /**
 *  Cookie related functions
 *  cookie.js
 *  $Revision: 1.4 $
 */

if (window.cdc === undefined) { window.cdc = {}; }

/**
cookie manipulation functions
NOTE: deprecated functions have been aliased to these functions in deprecated.js
TODO: update files that call this lib so we can remove support for legacy function signatures
*/
cdc.cookie = cdc.cookie || {
    /**
    sets a cookie. days and msecs are days and milliceconds from now,
    respectively. if neither days or msecs are given, defaults to
    expire at end of browser session.
    @param args {
        cookieName: string
        cookieValue: string
        days: int (optional)
        msecs: int (optional, overrides days)
        path: string (optional) (default=/)
        domain: string (optional)
    }
    */
    setCookie: 

    /**
    gets requested cookie.
    @param args { cookieName: string }
    */
    getCookie: function (args) {
        // LEGACY - if args is a string and not an object
        if (!args.cookieName) { args = { cookieName: args }; }

        var dict = cdc.cookie.unpackParamString(document.cookie, /\s*;\s*/);
        return dict[args.cookieName] || "";
    },

    /**
    deletes requested cookie.
    args are identical to setCookie, except that expiry is forced
    to a negative number, effectively deleting the cookie.
    */
    deleteCookie: function (args) {
        // mutating args obj might mess things up
        // if caller reuses it for other things
        var dArgs = {},
            name;
        for (name in args) {
            if (args.hasOwnProperty(name)) { dArgs[name] = args[name]; }
        }
        dArgs.msecs = dArgs.days = -1;
        dArgs.cookieValue = '';
        return cdc.cookie.setCookie(dArgs);
    },

    /**
    @param days number of days from now to count milliseconds for
    */
    daysFutureToTimeMS: function (days) {
        if (isNaN(parseInt(days))) { return 0; }
        var mydate = new Date();
        mydate.setTime(mydate.getTime() + ((days) * 24 * 60 * 60 * 1000));
        var ms = Date.parse(mydate);
        return ms;
    },

    // ###################################################################################
    // COOKIE CHIPS

    /**
    sets value of given cookie chip.
    to avoid naming collisions, cookie chips allow
    multiple name/value pairs within a single cookie.
    @param args {
        cookieName: string
        chipName: string
        chipValue: string
    }
    */
    addCookieChip: function (args) {
        // LEGACY - support old signature (string, string, string)
        if (!args.cookieName) { args = {cookieName: args, chipName: arguments[1], chipValue: arguments[2]}; }

        var str = cdc.cookie.getCookie(args),
            dict = cdc.cookie.unpackParamString(str);
        dict[args.chipName] = args.chipValue;
        cdc.cookie.setCookie({
            cookieName: args.cookieName,
            cookieValue: cdc.cookie.packParamString(dict),
            days: 366
        });
    },

    /**
    returns value of requested cookie chip
    @see cdc.cookie.addCookieChip
    @param args {
        cookieName: string
        chipName: string
    }
    */
    extractCookieChip: function (args) {
        // LEGACY - support old signature (string, string)
        if (!args.cookieName) { args = {cookieName: args, chipName: arguments[1]}; }

        var str = cdc.cookie.getCookie(args),
            dict = cdc.cookie.unpackParamString(str);
        return dict[args.chipName] || "";
    },

    /**
    deletes value of cookie chip
    @see cdc.cookie.addCookieChip
    @param args {
        cookieName: string
        chipName: string
    }
    */
    crumbleCookieChip: function (args) {
        // LEGACY - support old signature (string, string)
        if (!args.cookieName) { args = {cookieName: args, chipName: arguments[1]}; }

        var str = cdc.cookie.getCookie(args),
            dict = cdc.cookie.unpackParamString(str),
            removed = dict.hasOwnProperty(args.chipName),
            pStr;
        delete dict[args.chipName];
        pStr = cdc.cookie.packParamString(dict);

        // delete the cookie if it's empty
        if (!pStr) {
            cdc.cookie.deleteCookie(args);
        } else {
            cdc.cookie.setCookie({
                cookieName: args.cookieName,
                cookieValue: pStr,
                days: 366
            });
        }
        return removed;
    },

    /**
    takes a dictionary, returns a string
    e.g. {"foo":"bar","foo 2":"bar 2"} => "foo=bar&foo%202=bar%202"
    @param sep optional separator, defaults to "&"
    */
    packParamString: 

    /**
    takes a string, returns a dictionary
    e.g. "foo=bar&foo%202=bar%202" => {"foo":"bar","foo 2":"bar 2"}
    @param sep optional separator, defaults to "&" (can be string or regexp)
    */
    unpackParamString: 
};

/**
 *  New User cookie for Portal Enhancements
 *    -- determines whether new user content will be available to the user
 */
cdc.cookie.newUser = {
    newUserEndTime: 168, // sets expiration in hour increments
    cookieName: 'cdc.cookie.newUser', // sets name of cookie used
    updateUserVal: function () {
        // checks for existing cookie and adjusts value if necessary
        var uVal;
        var newUser = cdc.cookie.getCookie({cookieName: this.cookieName});
        if (!newUser) {
            // no cookie set; initialize new cookie
            uVal = this.setValidCookie();
        } else {
            var today = new Date();
            var now = today.getTime();
            if (newUser == 0) {
                // new user time already set to expired; no cookie mod necessary
                uVal = 0;
            } else if (newUser < now) {
                // new user time has expired since last visit; set cookie to 0
                uVal = this.endNewUser();
            } else {
                // cookie already set and still valid; no cookie mod necessary
                uVal = newUser;
            }
        }
        return uVal;
    },
    setValidCookie: function () {
        // creates new cookie with expiration beginning from now
        var today = new Date();
        var now = today.getTime(); // milliseconds
        var expireDate = now + (1000 * 60 * 60 * this.newUserEndTime); // set remaining hours based on expireTime set above
        var expireInMsecs = 1000 * 60 * 60 * 24 * 365 * 25; // expire actual cookie in 25 years
        cdc.cookie.setCookie({cookieName: this.cookieName, cookieValue: expireDate, msecs: expireInMsecs});
        return expireDate;
    },
    endNewUser: function () {
        // sets existing cookie value to 0, indicating user is no longer new
        var endVal = 0;
        var expireInMsecs = 1000 * 60 * 60 * 24 * 365 * 25; // expire actual cookie in 25 years
        cdc.cookie.setCookie({cookieName: this.cookieName, cookieValue: endVal, msecs: expireInMsecs});
        return endVal;
    }
};

// check for cdc.cookie.newUser and set if necessary
document.addEventListener('DOMContentLoaded', ;

// delete identified problem cookies
// remove this list after parseXML.js and reccomendation.js stop writing a list of links to it.
document.addEventListener('DOMContentLoaded', function() {
    cdc.cookie.setCookie({cookieName: "remainingLinks", cookieValue: "", path: "/", msecs: -1000});
});
;if (window.cdc === undefined) { window.cdc = {}; }

cdc.sso = (function (self) {
  let lib = "sso",
      env = cdc.context.findEnvironment(),
      callbacks = [],
      validateRelativePath = "/web/fw/sso/sync.json?t=" + Math.random(),
      host = ".cisco.com",
      ssoConfig = {
          prod: {
              validateLogin: "//www" + host + validateRelativePath,
              ssoCookieName: "cdcSsoTimer"
          },
          stage: {
              validateLogin: "//www-stage" + host + validateRelativePath,
              ssoCookieName: "cdcSsoTimerStage"
          },
          dev: {
              validateLogin: "//www-stage3" + host + validateRelativePath,
              ssoCookieName: "cdcSsoTimerDev"
          }
      };

  // set fallback environment 
  if (env === "unknown") { env = "prod"; }

  // Start Private Methods
  let checkCookie = (cookieName) => document.cookie.split(";").filter(.length > 0;

  // check for ssoCookie && authorization existence, if it exists login is valid
  let isAuthenticated = () => checkCookie(ssoConfig[env].ssoCookieName) && checkCookie("authorization");

  let setSSOCookie = () => {
      let ex = new Date();
      // expiration of 10 hours
      ex.setTime(ex.getTime() + 10 * 60 * 60 * 1000);
      document.cookie = ssoConfig[env].ssoCookieName + "=" + escape("LoggedIn") + "; expires=" + ex.toUTCString() + "; path=/; domain=.cisco.com; secure";
  };

  let triggerListeners = 
  // End Private Methods

  // Start Public Methods
  let addSSOListener = (callback) => {
      if (typeof callback !== "function") { 
          cdc.debug.log(lib, "expecting a function, the following was sent:" + typeof callback);
          return;
      }
      if (isAuthenticated()) {
          callback();
      } else {
          callbacks.push(callback);
      }
  };

  let init = () => {
      // check is explicitly different from isAuthenticated on purpose
      // we only want to call sync.json when a valid authorization cookie exists and ssoTimer cookie doesnt exist
      if (!checkCookie(ssoConfig[env].ssoCookieName) && checkCookie("authorization")) {
          // sso timer cookie doesnt exist, check for access
          let xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) { 
                  setSSOCookie();
                  triggerListeners();
              }
          };
          xhr.withCredentials = true;
          xhr.open("GET", ssoConfig[env].validateLogin, true);
          xhr.send();
      } else if (isAuthenticated()) {
          triggerListeners();
      }
  };

  // Interfaces
  self.addSSOListener = addSSOListener;
  self.isAuthenticated = isAuthenticated;
  self.init = init;

  return self;
}(cdc.sso || {}));

cdc.sso.init();
/*
*
* userInfoDispatcher.js
*
*   (c) 1992-2011 Cisco Systems, Inc. All rights reserved.
*   Terms and Conditions: http://cisco.com/en/US/swassets/sw293/sitewide_important_notices.html
*
*

Example API Call
//cdc.userInfoDispatcher.clearCache();

cdc.userInfoDispatcher.getUserProfile ({
"listOfDataFields": [
'cps.city_name',
'vps.cisco_interfaces_and_modules',
'locale.country_code'
],
"callback": function (userProfile) {
console.log(userProfile.cps.city_name);
console.log(userProfile.locale.country_code);
}
});
*/

if (window.cdc === undefined) { window.cdc = {}; }
if (cdc.userInfoDispatcher === undefined || JSON.stringify(cdc.userInfoDispatcher) === JSON.stringify({})) {
    /**
     * Provides a unified API for interacting with multiple services for user data and makes cacheing of user data transparent to the consumer.
     * @type {object}
     */
    cdc.userInfoDispatcher = new function () {
        /** Object containing service URLs to retrieve user information for known environments. */
        var SERVICE_URLS = {
            dev: {
                CPS_AUTH_URL: '//mktcs-dev.cloudapps.cisco.com/visitor/profile',
                PPS_AUTH_URL: '//pps-dev.cisco.com/search/contact',
                PPS_GUEST_URL: '//pps-dev.cisco.com/search/guest',
                VPS_AUTH_URL: '//cdcvps-dev.cloudapps.cisco.com/support/cdcvps/psn/virtualprofile',
                VPS_GUEST_URL: '//cdcvps-dev.cloudapps.cisco.com/support/cdcvps/virtualprofile',
                CINF_AUTH_URL: '//cdcvps-dev.cloudapps.cisco.com/support/cdcvps/psn/virtualprofile?groupName=wem',
                CINF_GUEST_URL: '//cdcvps-dev.cloudapps.cisco.com/support/cdcvps/virtualprofile?groupName=wem',
                PHL_AUTH_URL: '//cdcvps-dev.cloudapps.cisco.com/support/cdcvps/psn/virtualprofile?groupName=partnerhelpline',
                PHL_GUEST_URL: '//cdcvps-dev.cloudapps.cisco.com/support/cdcvps/virtualprofile?groupName=partnerhelpline',
                DSC_URL: 'https://dsc-dev.cisco.com/v1/netid?apikey=qywbp58DO3oWMHehM6ozpqIGwqGrgokT&callback=dscCallback',
                LOCALE_GUEST_URL: '//www.cisco.com/web/fw/co/i/s.gif?t=' + Math.random(),
            },
            stage: {
                CPS_AUTH_URL: '//mktcs-stage.cloudapps.cisco.com/visitor/profile',
                PPS_AUTH_URL: '//pps-stg.cisco.com/search/contact',
                PPS_GUEST_URL: '//pps-stg.cisco.com/search/guest',
                VPS_AUTH_URL: '//cdcvps-stage.cloudapps.cisco.com/support/cdcvps/psn/virtualprofile',
                VPS_GUEST_URL: '//cdcvps-stage.cloudapps.cisco.com/support/cdcvps/virtualprofile',
                CINF_AUTH_URL: '//cdcvps-stage.cloudapps.cisco.com/support/cdcvps/psn/virtualprofile?groupName=wem',
                CINF_GUEST_URL: '//cdcvps-stage.cloudapps.cisco.com/support/cdcvps/virtualprofile?groupName=wem',
                PHL_AUTH_URL: '//cdcvps-stage.cloudapps.cisco.com/support/cdcvps/psn/virtualprofile?groupName=partnerhelpline',
                PHL_GUEST_URL: '//cdcvps-stage.cloudapps.cisco.com/support/cdcvps/virtualprofile?groupName=partnerhelpline',
                DSC_URL: 'https://dsc-test.cisco.com/v1/netid?apikey=qywbp58DO3oWMHehM6ozpqIGwqGrgokT&callback=dscCallback',
                LOCALE_GUEST_URL: '//www.cisco.com/web/fw/co/i/s.gif?t=' + Math.random(),
            },
            prod: {
                CPS_AUTH_URL: '//mktcs.cloudapps.cisco.com/visitor/profile',
                PPS_AUTH_URL: '//pps.cisco.com/search/contact',
                PPS_GUEST_URL: '//pps.cisco.com/search/guest',
                VPS_AUTH_URL: '//cdcvps.cloudapps.cisco.com/support/cdcvps/psn/virtualprofile',
                VPS_GUEST_URL: '//cdcvps.cloudapps.cisco.com/support/cdcvps/virtualprofile',
                CINF_AUTH_URL: '//cdcvps.cloudapps.cisco.com/support/cdcvps/psn/virtualprofile?groupName=wem',
                CINF_GUEST_URL: '//cdcvps.cloudapps.cisco.com/support/cdcvps/virtualprofile?groupName=wem',
                PHL_AUTH_URL: '//cdcvps.cloudapps.cisco.com/support/cdcvps/psn/virtualprofile?groupName=partnerhelpline',
                PHL_GUEST_URL: '//cdcvps.cloudapps.cisco.com/support/cdcvps/virtualprofile?groupName=partnerhelpline',
                DSC_URL: 'https://dsc.cisco.com/v1/netid?apikey=qywbp58DO3oWMHehM6ozpqIGwqGrgokT&callback=dscCallback',
                LOCALE_GUEST_URL: '//www.cisco.com/web/fw/co/i/s.gif?t=' + Math.random(),
            }
        };

        /** The current environment. */
        var environ = cdc.context.findEnvironment();
        if (SERVICE_URLS[environ] == null) environ = 'prod'; // Unknown environment, don't cause an error

        /** Number of milliseconds to wait for response to request for data from a known service. */
        var TIMEOUT_MSEC = 3000;

        /**
         * Object mapping country codes to language codes.
         *
         * @constant
         * @type {object}
         */
        var COUNTRY2LANG = {
            AE: 'en',
            AR: 'es',
            AT: 'de',
            AU: 'en',
            BE: 'en',
            BR: 'pt',
            CA: 'en',
            CH: 'de',
            CL: 'es',
            CN: 'zh',
            CO: 'es',
            CR: 'es',
            CU: 'es',
            CZ: 'cs',
            DE: 'de',
            DK: 'da',
            DO: 'es',
            EC: 'es',
            EG: 'ar',
            ES: 'es',
            FI: 'fi',
            FR: 'fr',
            GB: 'en',
            GR: 'en',
            GT: 'es',
            HK: 'en',
            HN: 'es',
            HU: 'hu',
            ID: 'en',
            IL: 'en',
            IN: 'en',
            IT: 'it',
            JP: 'ja',
            KR: 'ko',
            LU: 'fr',
            MX: 'es',
            MY: 'en',
            NI: 'es',
            NL: 'nl',
            NO: 'no',
            NZ: 'en',
            PA: 'es',
            PE: 'es',
            PH: 'en',
            PL: 'pl',
            PR: 'es',
            PT: 'pt',
            PY: 'es',
            RO: 'ro',
            RU: 'ru',
            SA: 'en',
            SE: 'sv',
            SG: 'en',
            SV: 'es',
            TH: 'th',
            TR: 'tr',
            TW: 'zh',
            UA: 'ru',
            US: 'en',
            UY: 'es',
            VE: 'es',
            VN: 'vi',
            ZA: 'en'
        };

        /**
         * Object containing instances of the `Service` or `ServiceResponseHeader` objects, keyed by the names of known services.
         *
         * @constant
         * @type {object}
         */
        var _KNOWN_SERVICES = {
            cps: new Service('cps', SERVICE_URLS[environ].CPS_AUTH_URL, SERVICE_URLS[environ].CPS_AUTH_URL, 'contact'),
            pps: new Service('pps', SERVICE_URLS[environ].PPS_AUTH_URL, SERVICE_URLS[environ].PPS_GUEST_URL, 'contact'),
            vps: new Service('vps', SERVICE_URLS[environ].VPS_AUTH_URL, SERVICE_URLS[environ].VPS_GUEST_URL, 'response/attributes'),
            contactInfo: new Service('contactInfo', SERVICE_URLS[environ].CINF_AUTH_URL, SERVICE_URLS[environ].CINF_GUEST_URL, 'response/attributes'),
            locale: new ServiceResponseHeader('locale', SERVICE_URLS[environ].LOCALE_GUEST_URL, 'X-Akamai-Edgescape'),
            phl: new Service('phl', SERVICE_URLS[environ].PHL_AUTH_URL, SERVICE_URLS[environ].PHL_GUEST_URL, 'response/attributes'),
            eloqua: new CacheUpdate('eloqua'),
            dsc: new JsonpRequest('dsc', SERVICE_URLS[environ].DSC_URL)
        };

        /**
         * Marks performance when supported by browser.
         *
         * @param  {String}  label  The unique key that identifies the performance mark.
         */
        var markPerformance = function (label) {
            if (typeof performance !== 'undefined' && typeof performance.mark !== 'undefined') {
                performance.mark(label);
            }
        };

        /**
         * Persists profile updates that have been passed as arguments to local storage without making any service requests.
         *
         * @param  {String}  namespace  The name/key for the service.
         */
        function CacheUpdate(namespace) {
            this.callService = function (state, callback) {
                if (state.requiresWrappedResponse) {
                    state.params.profileUpdates.forEach(function (profileUpdate) {
                        if (profileUpdate.key === namespace) {
                            var data = {};
                            data[profileUpdate.key] = profileUpdate.value;
                            callback(data);
                        }
                    });
                } else {
                    console.warn('WARNING: `getUserProfile` does not support requests for ', namespace, '.')
                }
            };
        }

        /**
         * Loads BlueKai tag which declares a global `bk_results` variable to deliver data.
         *
         * @param  {String}  namespace  The name/key for the service.
         * @param  {String}  url        The third-party tag URL to call, which we expect to assign data to a global variable.
         */
        function JsonpRequest(namespace, url) {
            this.callService = function (state, callback) {
                if (state.requiresWrappedResponse) {

                    var that = {
                        state: state,
                        callback: callback
                    };
                    var catchAll;

                    var synchronicity = state.params.delayForData ? '' : ' async';

                    var callBackFunction = function (obj) {
                        var response = {};
                        var parserFunction = that.state.params.parserFunctions != undefined ? that.state.params.parserFunctions[namespace] : undefined;
                        var hasParserFunction = typeof parserFunction !== 'undefined';
                        response[namespace] = hasParserFunction ? parserFunction(obj) : obj; // here when required we execute a parser function to shape the service results
                        if(typeof that.state.params.callbackFunctions!='undefined'){
                            that.state.params.callbackFunctions[namespace](response); // calls the callback specified for this service request
                        }
                        that.callback(response); // pass data back in response
                        if (state.params.async) clearTimeout(catchAll);
                    };

                    var injectScript = function () {
                        var scripts = document.getElementsByTagName('script')[0];
                        var s = document.createElement('script');
                        s.classList.add('asyncScript');
                        s.src = url;
                        s.id = namespace;
                        scripts.parentNode.appendChild(s, scripts);
                    };

                    window[namespace + 'Callback'] = callBackFunction;

                    markPerformance(namespace + ' injected');
                    if (!state.params.async) {
                        document.write('<script id="' + namespace + '" type="text/javascript" src="' + url + '"' + synchronicity + '></script>');
                    } else {
                        injectScript();
                        var remaining = state.params.timeoutPoint - Date.now();
                        var timeoutValue = (remaining > 0) ? remaining : 1;
                        catchAll = setTimeout(function () {
                            var obj = {};
                            that.callback(obj);
                            markPerformance('UID timed out for ' + namespace);
                        }, timeoutValue);
                    }
                } else {
                    console.warn('WARNING: `getUserProfile` does not support requests for ', namespace, '.')
                }
            }
        }

        // ----------------------------------------------------------------------

        /**
         * Vanilla JS version to replace `jQuery.extend()`.
         *
         * @returns  {Object}  result of merging of objects
         */
        var _extend = 

        /**
         * The object mapping each service name to its queue of pending requests.
         *
         * @type {Object}
         */
        var _pendingRequests = {};

        // ----------------------------------------------------------------------

        /** Object responsible for handling requests for profile data. */
        var RequestHandler = new function() {
            /**
             * Retrieves persisted profile information and determines what additional data must be requested from services. TODO: FIX JSDOC BLOCK
             *
             * @param  {object}    requestParameters                   Configuration object having four keys: serviceNames, listOfDataFields, callback, delayForData.
             * @param  {object}    requestParameters.serviceNames      The service names necessary to fulfill the request.
             */
            this.process = function (requestParameters) {
                let info = null;

                // USECASE 2 - step 2 and 3 - get local storage and compare with cookie value
                if (localStorage.getItem('userInfoDispatcher') != null) { info = JSON.parse(localStorage.getItem('userInfoDispatcher')); }

                let cookieInfo = (document.cookie.match(/^(?:.*;)? cdcUniqueKey=([^;]+)(?:.*)?$/) || [, null])[1];

                if (info != null) {
                    if (cookieInfo == info.token && cookieInfo != 'none') {
                    } else {
                        _cache.clear();
                    }
                }

                /**
                 * The persisted user data.
                 *
                 * @type {object}
                 */
                let profile = _cache.getProfile();

                /**
                 * The list of service names for which we have no persisted data.
                 *
                 * @type {Array}
                 */
                let requests = (function () {
                    let servicesToCall = [];
                    if (_cache.isStale()) {
                        servicesToCall = requestParameters.serviceNames;
                    } else {
                        requestParameters.serviceNames.forEach(function (serviceName) {
                            if (profile == null || profile[serviceName] == null) {
                                servicesToCall.push(serviceName);
                            }
                        });
                    }
                    return servicesToCall;
                }());

                let state = {
                    params: requestParameters,
                    response: {
                        profileData: {},
                        requests: {
                            queuedServices: requests,
                            completed: []
                        }
                    },
                    requiresWrappedResponse: false
                };
                state.params.async = true;

                if (state.params.serviceNames[0] === 'dsc') { state.requiresWrappedResponse = true; }

                if (requests.length > 0) { // first populate the request queue then respond later because data is missing.
                    _queueRequests(state);
                } else { // respond now with the previously persisted data.
                    _respondWith(profile, requestParameters.listOfDataFields, requestParameters.callback);
                }
            };
        };

        // ----------------------------------------------------------------------
        // Code within this block taken from ResponseHandler

        /**
         * Determines what services must be called to satisfy the given list of field names.
         *
         * @param  {array}  fieldNames  List of field names to retrieve, formatted using dot syntax.
         */
        function _getNeededServiceNames(fieldNames) {
            var result = [];
            fieldNames.forEach(function (fieldName) { // use the namespace as a key
                var parts = fieldName.split('.');
                var serviceKey = parts && parts.length > 0 ? parts[0] : '';
                if (serviceKey in _KNOWN_SERVICES) result.push(serviceKey);
            });
            return result;
        };

        /**
         * Merges newly retrieved service data into existing profile object.
         *
         * @param   {Object}  profileData  The user profile data.
         * @param   {String}  serviceName  The name of the service associated with the new data.
         * @param   {Object}  serviceData  The data object retrieved from the named service.
         * @return  {Object}               The profile object merged with the new data.
         */
        var _extendProfileData = function (profileData, serviceName, serviceData) {
            /**
             * Whether the provided parameters would cause data to be lost (in the case of non-responsive services and/or hitting the safety timeout for service requests).
             *
             * @param   {Object}   profileData  The user profile data.
             * @param   {String}   serviceName  The name of the service associated with the new data.
             * @param   {Object}   serviceData  The data object retrieved from the named service.
             * @return  {Boolean}               Whether the `serviceName` key references a non-empty object for `profileData` and an empty object for `serviceData`.
             */
            var causesDataLoss = function (profileData, serviceName, serviceData) {
                return (
                    !!profileData &&
                    !!profileData[serviceName] &&
                    profileData[serviceName].constructor === Object &&
                    !!serviceData &&
                    !!serviceData[serviceName] &&
                    Object.keys(serviceData[serviceName]).length === 0 &&
                    serviceData[serviceName].constructor === Object
                );
            };

            serviceData = _validateServiceData(serviceName, serviceData);

            if (!causesDataLoss(profileData, serviceName, serviceData)) { // data can't be lost ...
                return _extend(profileData || {}, serviceData); // ... so we extend the profile with service data
            } else { // data can be lost ...
                return profileData; // ... so we return the (guaranteed fresh) profile data
            }
        };

        /**
         * Calls a specified service, updates response object as required, then passes the data received to a callback function.
         *
         * @param  {String}   serviceName                             The name of the service.
         * @param  {Object}   state                                   Object representing internal state with four keys: params, response, and requiresWrappedResponse.
         * @param  {Boolean}  state.requiresWrappedResponse           Whether the response will be wrapped with metadata (required by `cdc.targeter` and calls to `request()` but not legacy calls to `getUserProfile()`).
         * @param  {Object}   state.response                          Response object having four keys: hasData, isComplete, profileData, requests.
         * @param  {Object}   state.response.profileData              The user data to return for the request.
         * @param  {Object}   state.response.hasData                  Whether data was available for the request.
         * @param  {Object}   state.response.isComplete               Whether all data was available for the request.
         * @param  {Object}   state.response.requests                 Object with data about requests that were received and whether/how they have been handled.
         * @param  {Array}    state.response.requests.queuedServices  The list of keys for services that must be called.
         * @param  {Boolean}  isLastCall                              Whether this is the last item to invoke in the list of queued services.
         */
        function _invokeService(serviceName, state, isLastCall) {
            if (_KNOWN_SERVICES[serviceName] !== undefined) {
                _KNOWN_SERVICES[serviceName].callService(state, function (serviceData) {
                    if (state.requiresWrappedResponse) {
                        state.response.profileData = _extendProfileData(state.response.profileData, serviceName, serviceData);
                        state.response.hasData = true;
                        if (isLastCall) state.response.isComplete = true;
                    }
                    _serviceCallComplete(serviceName, serviceData, state);
                });
            }
        }

        /**
         * Ensures that service data object is valid and properly keyed.
         *
         * @param   {String}  serviceName  The name or key of the service.
         * @param   {Object}  serviceData  The data object returned from the service, which may be invalid.
         * @return  {Object}               The valid data object.
         */
        function _validateServiceData(serviceName, serviceData) {
            if (serviceData == null || _isEmptyObject(serviceData)) { // We must initialize the service object.
                serviceData = {};
                serviceData[serviceName] = {};
            };
            return serviceData;
        }


        /**
         * Iterates through a loop until the queue clears before firing a response.
         *
         * @param  {String}  serviceName  The name of the service.
         * @param  {Object}  profile      The user data.
         * @param  {Object}  state        Object representing internal state with four keys: params, response, and requiresWrappedResponse.
         */
        var _respondWhenQueueClears = function (serviceName, profile, state) {
            var requestParameters = _pendingRequests[serviceName] || []; // list of parameter requestParameters that have been queued for a service name/key; reverse the array so that requestParameters added last are handled first

            if (state.response.requests.completed.length > 0) {
                state.response.requests.completed.forEach(function (completedRequest) {
                    var completedServiceKey = _getRootKey(completedRequest);
                    requestParameters.forEach(;
                });
            }

            var _processThis = function (requestParameters) {
                var packet = requestParameters[requestParameters.length - 1]; // get the last packet
                var index = packet.serviceNames.indexOf(serviceName);
                if (index !== -1) { // the specificied service is included in this parameter packet (can appear multiple times in `requestParameters.serviceNames` queue)
                    packet.serviceNames.splice(index, 1); // remove it (there may be others)
                    if (packet.serviceNames.length === 0) { // no more service names remain so remove this parameter packet from
                        requestParameters.pop(); // remove this, the last packet
                        if (state.requiresWrappedResponse) {
                            _respond(state, state.params.listOfDataFields.join(', '));
                        } else {
                            _respondWith(profile, state.params.listOfDataFields, packet.callback);
                        }
                        if (requestParameters.length > 0) _processThis(requestParameters);
                    } else {
                        _processThis(requestParameters);
                    }
                }
            };
            if (requestParameters.length > 0) _processThis(requestParameters);
        }

        /**
         * Extends persisted profile data with newly-fetched data from a service (when possible).
         *
         * @param  {String}  serviceName  The name or key of the service.
         * @param  {Object}  serviceData  The data object retrieved from the named service.
         * @param  {Object}  state        Object representing internal state with four keys: params, response, and requiresWrappedResponse.
         * @param  {Object}  result       Data fetched via call to the named service.
         */
        function _serviceCallComplete(serviceName, serviceData, state) {
            var profile = _cache.getProfile(); // Creates an object of known profile data.
            profile = _extendProfileData(profile, serviceName, serviceData); // Extends profile with new data from the service.
            _cache.saveProfile(profile); // Updates profile in the cache.
            _respondWhenQueueClears(serviceName, profile, state); // We know we have called the service so we wait for all pending service request queues to clear before responding.
        }

        /**
         * Creates or updates the queue of pending requests for known services if necessary, invokes services when they are first queued, and responds immediately if no queueing is required.
         *
         * @param  {Object}  state                                   Object representing internal state with four keys: params, response, and requiresWrappedResponse.
         * @param  {Object}  state.response                          Response object having four keys: hasData, isComplete, profileData, requests.
         * @param  {Object}  state.response.requests                 Object with data about requests that were received and whether/how they have been handled.
         * @param  {Array}   state.response.requests.queuedServices  The list of keys for services that must be called because we have no persisted data.
         * @param  {Object}  state.params                            The parameter packet for this invocation.
         * @param  {Object}  state.params.delayForData               Whether to delay response until service calls have responded with missing data.
         */
        var _queueRequests = function (state) {
            var queuedServices = state.response.requests.queuedServices;
            if (queuedServices.length === 0) { // There is no need to queue requests ...
                _respond(state, 'no queued services'); // ... so respond immediately.
            } else { // There is a need to queue requests.
                queuedServices.forEach(function (serviceName, index) {
                    var isLastCall = (index === queuedServices.length - 1);
                    if (_pendingRequests[serviceName] == null) { // The service has not yet been invoked from this page.
                        _pendingRequests[serviceName] = [state.params]; // Creates a service-specific pending request queue, and add the full request parameter packet to it.
                        if (typeof (state.params.delayForData) !== 'undefined') { // This filters out calls from the `.getUserProfile()` pipeline.
                            if (!state.params.delayForData) { // For calls that use `.request()` pipeline with no delay ...
                                _respond(state, serviceName); // ... we short-circuit here and respond immediately.
                            }
                        }
                        _invokeService(serviceName, state, isLastCall); // Invokes the service.
                    } else { // The service has already been invoked.
                        _pendingRequests[serviceName].push(state.params); // Add the full request parameter packet the service-specific pending request queue, then wait for it to return.
                    }
                });
            }
        };

        /**
         * Returns boolean indicating if provided object is null or empty (lacking custom properties)
         *
         * @param  {object}  o  Any object
         */
        function _isEmptyObject(o) {
            if (o == null) return true;
            for (k in o) {
                if (o.hasOwnProperty(k)) return false;
            }
            return true;
        }

        /**
         * Extracts a subset of requested data fields and passes them to a callback function.
         *
         * @param  {Object}    profile     Available profile data for user.
         * @param  {Array}     fieldNames  List of field selectors using dot-notation syntax.
         * @param  {Function}  callback    Function to handle the shaped response object.
         */
        function _respondWith(profile, fieldNames, callback) {
            var response = {};
            if (profile) {
                if (fieldNames instanceof Array && fieldNames.length > 0) {
                    response = _extractObjectElements(profile, fieldNames);
                }
            }
            callback(response);
        }

        /**
         * Creates and returns a data object with properly nested keys and values.
         *
         * @param  {Object}  profileData  The source data.
         * @param  {Array}   keyStrings   Collection of fully qualified key names for the return object (using dot syntax).
         */
        function _extractObjectElements(profileData, keyStrings) {
            keyStrings = keyStrings || [];
            profileData = profileData || {};
            var result = {};
            keyStrings.forEach(;
            return result;
        }

        // ----------------------------------------------------------------------

        /**
         * Consolidates parameters required to request profile and passes them to `RequestHandler`.
         *
         * @param  {Object}    parameterPacket                   The configuration object.
         * @param  {Array}     parameterPacket.listOfDataFields  Collection of fully qualified names for requested data (using dot syntax).
         * @param  {Function}  parameterPacket.callback          Callback function.
         */
        this.getUserProfile = function (parameterPacket) {
            parameterPacket = parameterPacket || {};
            if (typeof parameterPacket.callback !== 'function') { // Validate the parameter type
                if (console) console.log('cdc.userInfoDispatcher.getUserProfile: second parameter must be a function, but it is a ' + typeof (callback));
                return;
            }
            // Extend the provided parameter packet with additional, derived parameter
            var requestParams = _extend(parameterPacket, {
                serviceNames: _getNeededServiceNames(parameterPacket.listOfDataFields)
            });
            RequestHandler.process(requestParams);
        };

        /** Clears persisted user profile data. */
        this.clearCache = 

        /**
         * Updates response object by walking through cached profile data.
         *
         * @param   {Object}  profileData                        The user data.
         * @param   {Object}  state.params                       Configuration object having four keys: serviceNames, listOfDataFields, callback, delayForData.
         * @param   {Array}   state.params.listOfDataFields      The list of key strings used to select profile data.
         * @param   {Object}  state.response                     Response object having four keys: hasData, isComplete, profileData, requests.
         * @param   {Object}  state.response.profileData         The user data to return for the request.
         * @param   {Object}  state.response.hasData             Whether data was available for the request.
         * @param   {Object}  state.response.isComplete          Whether all data was available for the request.
         * @param   {Object}  state.response.requests            Object with data about requests that were received and whether/how they have been handled.
         * @param   {Object}  state.response.requests.completed  The list of keystrings for completed requests.
         * @param   {Object}  state.response.requests.queued     The list of keystrings for requests whose (root) service key will be added to the request queue.
         */
        function _updateResponseFromCache(profileData, state) { // Constructs response object with available profile data and a flag indicating whether response is complete.
            var result = state.response;
            state.params.listOfDataFields.forEach(function (keyString) { // Iterates through requested keystrings.
                var value = _getValueFromKeyString(profileData, keyString);
                if (typeof value !== 'undefined') { // The key exists **but** the associated data may be partial or complete
                    result.hasData = true; // a resolved key means response will have data
                    _setValueFromKeyString(result.profileData, keyString, value); // if key resolves, add whatever data is available for it to the response
                    //result.requests.completed.push(keyString); // TODO: ideally here we would only push to completed when data data is complete
                    result.requests.queued.push(keyString); // TODO: ideally here we would only push to queued when data is partial
                } else { // The key does not exist.
                    result.isComplete = false; // an unresolved key means response is not complete
                    result.requests.queued.push(keyString);
                }
            });
            return result;
        }

        /**
         * Gets the value of an object property using a keystring.
         *
         * @param   {Object}  sourceObject  The data source.
         * @param   {String}  keyString     The path to data formatted as a string of keys with dot notation.
         * @return  {*}                     The value found using the `keyString` selector.
         */
        var _getValueFromKeyString = function (sourceObject, keyString) {
            var currentNode = sourceObject;
            var result;
            var keyArray = keyString.split('.');
            var finalKey = keyArray[keyArray.length - 1];
            keyArray.forEach(function (key) {
                if (key === finalKey) {
                    result = currentNode[key];
                } else {
                    currentNode = currentNode[key];
                }
            });
            return result;
        };

        /**
         * Sets the value of an object property using a keystring.
         *
         * @param   {Object}  sourceObject  The data source.
         * @param   {String}  keyString     The path to data formatted as a string of keys with dot notation.
         * @param   {*}       newValue      The value to assign using the `keyString` selector.
         * @return  {*}                     The value added using the `keyString` selector.
         */
        function _setValueFromKeyString(sourceObject, keyString, newValue) {
            keyString = keyString.split('.');
            while (keyString.length > 1) {
                sourceObject = sourceObject[keyString.shift()];
            }
            return sourceObject[keyString.shift()] = newValue;
        }

        /**
         * Returns the root key of a keystring.
         *
         * @param   {String}  keyString  The key string formatted with dot notation (e.g., 'root.first.second').
         * @return  {String}             The root key.
         */
        

        /**
         * Updates the response object with services that should be queued to provide missing data.
         *
         * @param  {Object}  response                          Response object containing user profile data and whether this data is complete or partial.
         * @param  {Array}   response.requests.queued          The keystrings that were requested but not available in cache.
         * @param  {Array}   response.requests.queuedServices  The names of services with missing data that must be queued.
         * @return {Object}                                    The provided response with an additional key for `queuedServices`.
         */
        function _updateQueuedServices(response) {
            var result = response;
            result.requests.queued.forEach(function (keyString) {
                var serviceName = _getRootKey(keyString);
                if (result.requests.queuedServices.indexOf(serviceName) === -1) { // service not yet queued so add it
                    result.requests.queuedServices.push(serviceName);
                }
            });
            return result;
        }

        /**
         * Makes request for specific data to be retrieved from the cache and/or service calls, which may be returned with or without delay.
         *
         * @param  {Object}    state                          Object representing internal state with four keys: params, response, and requiresWrappedResponse.
         * @param  {Object}    state.params                   Configuration object having four keys: serviceNames, listOfDataFields, callback, delayForData.
         * @param  {Array}     state.params.listOfDataFields  The list of key strings used to select profile data.
         * @param  {Array}     state.params.serviceNames      The list of service names extracted from `params.listOfDataFields`.
         */
        this.request = function (params) {
            markPerformance('UID request for ' + params.listOfDataFields.join(', '));

            /** Initializes state. **/
            var state = {
                params: params,
                response: {
                    hasData: false,
                    isComplete: true, // defaults to true; later any missing data will set this to false
                    profileData: {},
                    requests: {
                        queuedServices: [],
                        received: params.listOfDataFields,
                        completed: [],
                        queued: []
                    }
                },
                requiresWrappedResponse: true
            };

            state.params.serviceNames = _getNeededServiceNames(state.params.listOfDataFields);

            if (_cache.isStale()) { // Responds differently based on status of cache.
                _respondForStaleCache(state); // Queues all requests and immediately returns the response packet.
            } else {
                _respondForFreshCache(state); // Returns data that was persisted and queues requests for any missing data.
            }
        };


        /**
         * Executes the callback provided in params after adding needed service calls to the queue.
         *
         * @param  {String}    originString             The information to indicate the call's origin.
         * @param  {Object}    state                    Object representing internal state with four keys: params, response, and requiresWrappedResponse.
         * @param  {Object}    state.params             The configuration object having four keys: serviceNames, listOfDataFields, callback, delayForData.
         * @param  {Function}  state.params.callback    The callback function provided in the request parameters.
         * @param  {Object}    state.response           The profile data and related information about the complete-ness of the response.
         */
        var _respond = function (state, originString) {
            markPerformance('UID responded for ' + originString)
            state.params.callback(state.response);
        };

        /**
         * Retrieves available data from a fresh cache, updates the queue of services with missing data, then responds immediately or after missing service data has been retrieved.
         *
         * @param  {Object}  state                      Object representing internal state with four keys: params, response, and requiresWrappedResponse.
         * @param  {Object}  state.response             Response object containing user profile data and whether this data is complete or partial.
         */
        function _respondForFreshCache(state) {
            var profileData = _cache.getProfile(); // Retrieves persisted profile data.
            state.response = _updateResponseFromCache(profileData, state); // Updates the response object with cached data.
            state.response = _updateQueuedServices(state.response); // Updates the response object with services to call.
            _queueRequests(state); // `_respond` will be called downstream with `response.isComplete` set to `true` because `response.profileData` will have been updated with missing data from service calls
        }

        /**
         * Queues all service requests and responds with updated response object.
         *
         * @param  {Object}  state                           Object representing internal state with four keys: params, response, and requiresWrappedResponse.
         * @param  {Object}  state.params                    Configuration object having four keys: serviceNames, listOfDataFields, callback, delayForData.
         * @param  {Array}   state.params.serviceNames       The list of service names extracted from `params.listOfDataFields`.
         * @param  {Object}  state.response                  Response object containing user profile data and whether this data is complete or partial.
         * @param  {Object}  state.response.hasData          Whether data was available for the request.
         * @param  {Object}  state.response.isComplete       Whether all data was available for the request.
         * @param  {Object}  state.response.requests         Object with data about requests that were received and whether/how they have been handled.
         * @param  {Object}  state.response.requests.queued  The list of keystrings for requests whose (root) service key will be added to the request queue.
         */
        function _respondForStaleCache(state) {
            state.response.hasData = false;
            state.response.isComplete = false;
            state.response.requests.queued = state.params.serviceNames.slice(0);
            state.response = _updateQueuedServices(state.response);
            _queueRequests(state);
        }

        // ----------------------------------------------------------------------

        /**
         * Manages persistance of profile data using local storage in the browser.
         */
        var _cache = new function() {
            /**
             * Key used to manage profile data in local storage.
             * @type {String}
             */
            var STORE_KEY = 'userInfoDispatcher';

            /**
             * Number of minutes after which the cache is considered stale.
             * @type {number}
             */
            var MINS_TO_STALENESS = 6 * 60;

            /**
             * Creates a timestamped object from parameters and persists it as a string.
             *
             * @param  {Object}  profile     Object representing known properties for the user.
             */
            this.saveProfile = function (profile) {
                var cookieName = 'cdcUniqueKey';
                var uid_cookie = (document.cookie.match(/^(?:.*;)? cdcUniqueKey=([^;]+)(?:.*)?$/) || [, null])[1];
                if (uid_cookie == null || uid_cookie == 'none') {
                    uid_cookie = Math.random().toString(20).slice(2);
                    document.cookie = cookieName + '=' + uid_cookie + ';domain=.cisco.com;path=/';
                }

                try { // Save the info into the store
                    var obj = JSON.stringify({
                        profile: profile,
                        authState: cdc.sso.isAuthenticated() ? "loggedIn" : "anonymous",
                        created: new Date().getTime(),
                        token: uid_cookie
                    });
                    localStorage.setItem(STORE_KEY, obj);
                } catch (e) { // No session storage available (old browser, perhaps?)
                }
            };

            /**
             * Returns persisted profile information for user when available, and `null` otherwise.
             */
            this.getProfile = function () {
                try {
                    var info = JSON.parse(localStorage.getItem(STORE_KEY));
                    return (info && !_isStale(info)) ? info.profile : null;
                } catch (e) { // No session storage available (old browser, perhaps?)
                    return null;
                }
            };

            /**
             * Returns boolean value indicating whether persisted profile information for user is missing or outdated.
             *
             */
            this.isStale = function () {
                var result = true;
                try {
                    var info = JSON.parse(localStorage.getItem(STORE_KEY));
                    result = info == null || _isStale(info);
                } catch (e) { // No session storage available (old browser, perhaps?)
                }
                return result;
            };


            /** Removes persisted data based on key. */
            this.clear = 


            /**
             * Returns boolean indicating whether the provided profile is absent, expired, or keyed to a different authentication status.
             *
             * @param  {object}  profileInfo       Object representing known properties for the user.
             */
            function _isStale(profileInfo) {
                // It's stale if there's no profile, if the profile is for a different authentication state, OR It's stale if it's too old.
                if (!profileInfo || (profileInfo.authState !== "loggedIn" && cdc.sso.isAuthenticated()) || profileInfo.created < new Date().getTime() - MINS_TO_STALENESS * 60000) {
                    return true;
                }
                return false; // Otherwise, it's not stale.
            }
        };

        // ----------------------------------------------------------------------

        /**
         *
         * Service Object
         * The service object is instatiated for every service defined. It handles calling the service, flattening the returned object, cleaning up the keys, and namespacing the attributes
         * It exposes one public method, callService();
         *
         */
        function Service(namespace, authUrl, anonUrl, attributesObjKey) {
            this.callService = function (state, callback) {
                var result = {};
                var url = (cdc.sso.isAuthenticated()) ? authUrl : anonUrl;
                var remaining;
                var timeoutValue;
                var catchAll;
                var xhr = new XMLHttpRequest();

                if (!state.params.async) {
                    xhr.open('GET', url, false);
                } else {
                    remaining = state.requiresWrappedResponse ? (state.params.timeoutPoint - Date.now()) : TIMEOUT_MSEC;
                    timeoutValue = (remaining > 0) ? remaining : 1;
                    catchAll = setTimeout(moveOn, timeoutValue); // this is a catchall timeout since jquery < 1.5 cannot detect 500 server error codes on jsonp requests
                    xhr.open('GET', url, true);
                    xhr.timeout = timeoutValue;
                };
                xhr.withCredentials = true;

                xhr.onreadystatechange = function () {
                    var DONE = 4; // readyState 4 means the request is done.
                    var OK = 200; // status 200 is a successful return.
                    if (xhr.readyState === DONE) {
                        clearTimeout(catchAll);
                        if (xhr.status === OK) {
                            var responseObj = JSON.parse(xhr.responseText)
                            _addNamespacePrefixes(responseObj, result);
                            callback(result);
                        } else {
                            _addNamespacePrefixes(null, result);
                            callback({});
                        }
                        if (state.requiresWrappedResponse) { // TODO: revisit this
                            state.params.callbackFunctions[namespace]();
                        }
                    };
                };

                try {
                    xhr.send(null); // asynchronous requests from `getUserProfile()` return immediately; synchronous requests from `request()` return when response arrives
                } catch (ex) { // synchronous requests can fail and we need to send a callback with an empty object
                    callback({});
                }

                function moveOn() { // Since we can't detect server errors with jsonp and we haven't heard back in time, we're over it, we're moving on.
                    markPerformance('UID timed out for ' + namespace);
                    xhr.abort();
                    _addNamespacePrefixes(null, result);
                    callback(result);
                }
            };

            function _addNamespacePrefixes(attributesObj, resultObj) {
                if (attributesObj == null) { //  nothing to do if we have returned a null object
                    return true;
                }

                // split the attributesObjKey by / if present, allowing to navigate into the object to find the attributes object
                var parts = attributesObjKey.split('/');
                for (var i = 0, n = parts.length; i < n && attributesObj != null; i++) {
                    attributesObj = attributesObj[parts[i]];
                }
                if (attributesObj == null) return; // Nothing to add to resultsObj

                // ensure that our keyed object is not null
                // If the call returned no attributes, create an empty entry in the attributes object, and return it, so that the service is not called again
                // var atr = attributesObj; // [attributesObjKey];
                _flattenAttributes(namespace, attributesObj, resultObj);
                return true;
            }

            function _flattenAttributes(namespace, attributesObj, resultObj) {
                if (typeof attributesObj === 'object' && attributesObj.hasOwnProperty('name')) {
                    _determineNameValuePair(namespace, attributesObj, resultObj);
                } else if (typeof attributesObj === 'object') {
                    for (var k in attributesObj) {
                        _determineNameValuePair(namespace, attributesObj[k], resultObj);
                    }
                }
            }

            function _determineNameValuePair(namespace, nameAndValueObj, resultObj) {
                // verify that the object exists and set the appropiate depth
                resultObj = _makeAndReturnObject(resultObj, namespace);
                // if the the values are in the expected format
                if (nameAndValueObj.name !== undefined && nameAndValueObj.value !== undefined) {
                    // if the value is a string name and store it
                    if (typeof nameAndValueObj.value === 'string') {
                        // _nameAndStoreAttribute(nameAndValueObj, resultObj);
                        resultObj[_cleanKey(nameAndValueObj.name)] = nameAndValueObj.value;
                    } else if (nameAndValueObj.value.constructor === Array) {
                        // otherwise, if it is an array, check to see what of
                        var array = nameAndValueObj.value;
                        for (var x = 0, l = array.length; x < l; x++) {
                            // if the array has something other than just strings, flatten it
                            if (typeof array[x] != 'string') {
                                _flattenAttributes(_cleanKey(nameAndValueObj.name), nameAndValueObj.value, resultObj);
                            } else {
                                // if the value is a string name and store it
                                // _nameAndStoreAttribute(nameAndValueObj, resultObj);
                                resultObj[_cleanKey(nameAndValueObj.name)] = nameAndValueObj.value;
                            }
                        }
                    } else if (typeof nameAndValueObj.value === 'object') {
                        // if the value is not a a string or an array flatten it
                        _flattenAttributes(_cleanKey(nameAndValueObj.name), nameAndValueObj.value, resultObj);
                    }
                } else {
                    // if the value is not in the expected format, log it.
                }
            }

            // ensure that there is an object were expected in the result object
            function _makeAndReturnObject(object, string) {
                if (typeof object !== 'object') {
                    object = {};
                }
                if (typeof object[string] !== 'object') {
                    object[string] = {};
                }
                return object[string];
            }

            // clean up the attributed key to promote uniformity
            
        }

        // ----------------------------------------------------------------------

        /**
         * Calls the requested service, then structures information from the response header into the userProfile object.
         *
         * @param  {string}  namespace         The namespace of the service.
         * @param  {string}  serviceUrl        The service URL used for anonymous users.
         * @param  {string}  attributesObjKey  The name of the header key that returns the desired value.
         */
        function ServiceResponseHeader(namespace, serviceUrl, attributesObjKey) {
            /**
             * Performs AJAX call to determine locale information.
             *
             * @param  {function}  callback    Function to process the response header object which will be empty for exceptions or have properties with locale data
             * (`locale.country_code`, `locale.language_code`, and [optionally] `locale.lang_unknown`.)
             */
            this.callService = function (state, callback) {
                var req = new XMLHttpRequest();

                // get response headers when ready
                req.onreadystatechange = function () {
                    if (req.readyState === 4 && req.status === 200) {
                        var responseHeaderObject = parseResponseHeader(req, attributesObjKey);
                        // Tack on the language code
                        if (responseHeaderObject && responseHeaderObject.locale) {
                            var countryCode = responseHeaderObject.locale.country_code;
                            var langCode = COUNTRY2LANG[countryCode];
                            if (!langCode) {
                                responseHeaderObject.locale.lang_unknown = true;
                                langCode = 'en';
                            }
                            responseHeaderObject.locale.language_code = langCode;
                        }
                        callback(responseHeaderObject);
                    } else if (req.readyState === 4 && req.status !== 200) {
                        callback({}); // we send an empty object (note: empty objects will never be allowed to overwrite existing data in cache)
                    }
                } // end onreadystatechange

                /**
                 * Converts response header string into a JSON object.
                 *
                 * @param  {object}  req                The XMLHttpRequest object.
                 * @param  {string}  responseHeaderKey  The name of the header key that returns the desired value.
                 */

                function parseResponseHeader(req, responseHeaderKey) {
                    // note: IE9 and below are unable to get response headers across domains.
                    // Several ID projects are looking for a solution for this at this time.
                    try {
                        let responseHeader = req.getResponseHeader(responseHeaderKey);
                        responseHeader = responseHeader.split(',');
                        var responseHeaderObject = {};
                        responseHeaderObject[namespace] = {};
                        for (i in responseHeader) {
                            var currItem = responseHeader[i];
                            var currPair = responseHeader[i].split('=');
                            var currItem = currPair[0].toString();
                            responseHeaderObject[namespace][currItem] = currPair[1];
                        }
                        return responseHeaderObject;
                    } catch (e) {
                        return null;
                    }
                } // end parseResponseHeader()

                // call file
                try {
                    if (!state.params.async) {
                        req.open('GET', serviceUrl + '?t=' + Math.random(), false);
                    } else {
                        var remaining = state.requiresWrappedResponse ? (state.params.timeoutPoint - Date.now()) : TIMEOUT_MSEC;
                        var timeoutValue = (remaining > 0) ? remaining : 1;
                        req.open('GET', serviceUrl + '?t=' + Math.random());
                        req.timeout = timeoutValue;
                    };
                    req.send(null);
                } catch (ex) {
                    callback({});
                }
            }; // end callService()
        } // end ServiceResponseHeader()
    }();
};
var Targeter = (function (window, undefined) {

  var isFullyInstantiated = false;
  var readiness = {
    adobeLibraryLoaded: false,
    visitorLibraryLoaded: false,
    timedOut: false
  };
  var config = {};
  var debugMode;
  var pixelsFired = [];
  var pollingInterval;
  var profile = {};
  var publicMethods = {};
  var regionalMboxQueue = [];
  var safetyTimeout;
  var uidParams = {};


  /**
   * The start time used for time calculations.
   *
   * @constant
   * @type      {Number}
   * @default
   */
  var startTime = Date.now();


  /**
   * The current page's hosting domain.
   *
   * @constant
   * @type      {String}
   * @default
   */
  var currentHost = window.location.host;


  /**
   * The default doman from which to load scripts.
   *
   * @constant
   * @type      {String}
   * @default
   */
  var DEFAULT_DOMAIN = 'www.cisco.com';


  /**
   * The default list of strings used as targetable class names and eventually cleaned up by the Targeter.
   *
   * @constant
   * @type      {Array}
   * @default
   */
  var TARGETABLE_CLASS_NAMES = [
    'hidden',
    'spinner',
    'obscured',
    'targetable'
  ];


  /**
   * The default list of regular expression patterns used to clean up targetable class names.
   *
   * @constant
   * @type      {Array}
   * @default
   */
  var TARGETABLE_CLASS_NAME_PATTERNS = TARGETABLE_CLASS_NAMES.map(;


  /**
   * The various internal statuses to track and return via `Targeter.internals.timeline` items.
   *
   * @constant
   * @type      {Object}
   * @default
   */
  var TIMEOUT = {
    timeoutInitialized: {
      label: 'Targeter initialized the timeout value',
      isTimeout: false
    },
    timeoutPending: {
      label: 'Targeter did not timeout',
      isTimeout: false
    },
    timeoutNotReachedForAdobeRequest: {
      label: 'Targeter made successful Target request',
      isTimeout: false
    },
    timeoutBeforeDomInteractive: {
      label: 'Targeter timed out before domInteractive',
      isTimeout: true,
      forcePageReveal: true,
      ensureRegionalMboxVisibility: true
    },
    timedOutBeforeAdobeLibrary: {
      label: 'Targeter timed out before at.js',
      isTimeout: true,
      forcePageReveal: true,
      ensureRegionalMboxVisibility: true
    },
    timedOutBeforeAdobeRequests: {
      label: 'Targeter timed out before any mbox requests',
      isTimeout: true,
      forcePageReveal: true,
      ensureRegionalMboxVisibility: true
    },
    timeoutReachedForAdobeRequest: {
      label: 'request timed out for {mboxName}',
      isTimeout: true,
      ensureRegionalMboxVisibility: true
    }
  };


  /**
   * The various configuration settings required to support `forcedOffer` logic.
   *
   * @constant
   * @type      {Object}
   * @default
   */
  var FORCED_OFFERS = {
    typeDefaultAndPlugin: [{ plugins: ['foo', 'bar'], type: 'default' }],
    typeDefaultAndPlugin2: [{ plugins: ['foo', 'bar'] }, { type: 'default' }],
    typeDefault: [{ type: 'default' }],
    plugin: [{ plugins: ['foo', 'bar'] }], // no match but plugin enabled globally
    empty: [{}], // default experience from a/b test
    action: [{ // matching experience(s)
      type: 'actions',
      content: [{
        action: 'customCode',
        selector: 'HEAD',
        content: 'foo',
        cssSelector: '$cssSelector'
      }]
    }],
  };


  /**
   * The various configuration settings required to support killSwitch logic.
   *
   * @constant
   * @type      {Object}
   * @default
   */
  var KILL_SWITCHES = {
    none: {
      timeoutBlackList: [],
      preventSafetyTimeout: false
    },
    timeoutBeforeDomInteractive: {
      timeoutBlackList: [],
      preventSafetyTimeout: false
    },
    timeoutBeforeAdobeLibrary: {
      timeoutBlackList: ['timeoutBeforeDomInteractive'],
      preventSafetyTimeout: true
    },
    timeoutBeforeAdobeRequests: {
      timeoutBlackList: ['timeoutBeforeDomInteractive', 'timedOutBeforeAdobeLibrary'],
      preventSafetyTimeout: true
    },
    timeoutReachedForEveryAdobeRequest: {
      timeoutBlackList: ['timeoutBeforeDomInteractive', 'timedOutBeforeAdobeLibrary', 'timedOutBeforeAdobeRequests'],
      preventSafetyTimeout: true,
      targetGlobalSettingsTimeoutOverride: 1,
      timeRemainingOverride: 1
    },
    timeoutReachedForSomeAdobeRequest: {
      timeoutBlackList: ['timeoutBeforeDomInteractive', 'timedOutBeforeAdobeLibrary', 'timedOutBeforeAdobeRequests'],
      preventSafetyTimeout: true,
      timeRemainingOverride: 1,
      overriddenIndex: 0
    }
  };


  /**
   * The map of all default query params to their expected data types.
   *
   * @constant
   * @type      {Object}
   * @default
   */
  var QUERY_PARAMETERS_TYPE_MAP = {
    hideMethod: 'string',
    safetyTimeout: 'number',
    useDomain: 'string',
    accountName: 'string',
    async: 'boolean',
    killSwitch: 'string',
    forcedOffer: 'string',
    delayForData: 'boolean'
  }


  /**
   * The default list of query parameters to override configuration values.
   *
   * @constant
   * @type      {Array}
   * @default
   */
  var QUERY_PARAMETERS = Object.keys(QUERY_PARAMETERS_TYPE_MAP);


  /**
   * The list of strings appearing in subdomains that use the test account (by default).
   *
   * @constant
   * @type      {Array}
   * @default
   */
  var TEST_ACCOUNT_WHITELIST = [
    'jusst',
    'odo',
    'ivan',
    'butternut',
    'stage',
    'dev',
    'azukibean',
    'localhost',
    'cleric'
  ];


  /**
   * The list of strings appearing in subdomains that should reference Cisco-hosted dependencies using absolute URLs.
   *
   * @constant
   * @type      {Array}
   * @default
   */
  var ABSOLUTE_PATH_WHITELIST = [
    'b2me',
    'demand',
    'offers',
    'search',
    'searchx',
    'discover',
    'blogs',
    'communities',
    'local'
  ];


  /**
   * The list of event names made available by Adobe Target.
   *
   * @readonly
   * @type      {Array}
   * @default
   */
  var ADOBE_EVENTS_REQUIRING_CLEANUP = [
    'REQUEST_FAILED',
    'CONTENT_RENDERING_SUCCEEDED',
    'CONTENT_RENDERING_FAILED'
  ];


  /**
   * The list of names of events made available by Adobe Target.
   *
   * @readonly
   * @type      {Array}
   * @default
   */
  var ADOBE_EVENTS = ['REQUEST_SUCCEEDED'].concat(ADOBE_EVENTS_REQUIRING_CLEANUP);


  /**
   * The list of parameters which differ between the production and test accounts in Adobe Target.
   *
   * @readonly
   * @type      {Array}
   * @default
   */
  var ADOBE_ACCOUNT_PARAMS = [
    'serverDomain',
    'clientCode',
    'imsOrgId',
    'crossDomain'
  ];


  /**
   * The enumeration of configuration objects holding values for known Adobe accounts.
   *
   * @readonly
   * @enum      {String}
   * @default
   */
  var ADOBE_ACCOUNTS = {
    PROD: {
      clientCode: 'ciscosystemsinc',
      imsOrgId: 'B8D07FF4520E94C10A490D4C@AdobeOrg',
      serverDomain: 'target.cisco.com',
      crossDomain: 'enabled'
    },
    TEST: {
      clientCode: 'testciscosystemsinc',
      imsOrgId: 'C98E4C4E572079057F000101@AdobeOrg',
      serverDomain: 'target-test.cisco.com',
      crossDomain: 'disabled'
    }
  };


  /**
   * A collection of objects representing every supported passthrough property.
   *
   * @readonly
   * @type      {Array}
   * @default
   */
  var PASSTHROUGH_PROPERTIES = [
    {
      key: 'at_property',
      allowsEmptyStrings: false,
    },
    {
      key: 'entity',
      isSerializedJson: true,
      validate: 
      parseError: {
        message: 'ERROR: `config.entity` is malformed and failed to parse.',
        type: 'targeterEvent',
        parameters: {
          subtype: 'entityConfigParseError',
        },
      },
      validationError: {
        message: 'ERROR: `config.entity` is well-formed but not valid.',
        type: 'targeterEvent',
        parameters: {
          subtype: 'entityConfigValidationError',
        },
      },
    },
  ];


  /**
   * The enumeration of configuration objects holding values for known hiding methods.
   *
   * @readonly
   * @enum      {String}
   */
  var HIDE_METHODS = {
    none: {
      bodyHidingEnabled: false,
      injectsCss: false
    },
    page: {
      bodyHidingEnabled: true,
      injectsCss: false,
      opacity: '0'
    },
    pageOpaque: {
      bodyHidingEnabled: true,
      injectsCss: false,
      opacity: '0.25'
    },
    elements: {
      bodyHidingEnabled: false,
      injectsCss: true
    }
  };


  /**
   * Processes BlueKai data for use by Adobe Target.
   *
   * @param   {Object}  results     The pristine data object provided by BlueKai.
   * @return  {Object}              The formatted object more suitable for use by Adobe Target.
   */
  var formatBKData = function (results) {
    var cats = [];
    var camps = [];
    results.campaigns.forEach(function (campaignObj) {
      var campaign = campaignObj.campaign;
      camps.push(campaign);
      campaignObj.categories.forEach(function (category) {
        var campCat = campaign + '.' + category.categoryID;
        cats.push(campCat);
      })
    });
    return {
      categories: cats.join(','),
      campaigns: camps.join(',')
    };
  };


  /**
   * The object mapping the boolean properties from `config` to corresponding services for which profile data will be requested from userInfoDispatcher.
   *
   * @constant
   * @type      {Object}
   * @default
   */
  var SERVICE_MANIFESTS  = {
   loadVps: {
     isActive: true,
     requiresUidRequest: true,
     services: [{ 
       key: 'vps',
       callback: function () {
         updateTimeline('vps executed', 'uidEvent', {
           subtype: 'targeterCallbackExecuted',
           markPerformance: true
         });
       }
      }]
   },
   loadPps: {
     isActive: true,
     requiresUidRequest: true,
     services: [{ 
       key: 'pps',
       callback: function () {
         updateTimeline('pps executed', 'uidEvent', {
           subtype: 'targeterCallbackExecuted',
           markPerformance: true
         });
       }
      }]
   },
   loadContactInfo: {
     isActive: true,
     requiresUidRequest: true,
     services: [{ 
       key: 'contactInfo',
       callback: function () {
         updateTimeline('contactInfo executed', 'uidEvent', {
           subtype: 'targeterCallbackExecuted',
           markPerformance: true
         });
       } 
      }]
   },
   loadCps: {
     isActive: true,
     requiresUidRequest: true,
     services: [{ 
       key: 'cps',
       callback: function () {
         updateTimeline('cps executed', 'uidEvent', {
           subtype: 'targeterCallbackExecuted',
           markPerformance: true
         });
       } 
      }]
   },
   loadLocale: {
     isActive: true,
     requiresUidRequest: true,
     services: [{ 
       key: 'locale',
       callback: function () {
         updateTimeline('locale executed', 'uidEvent', {
           subtype: 'targeterCallbackExecuted',
           markPerformance: true
         });
       } 
     }]
   },
   loadDsc: {
     isActive: true,
     requiresUidRequest: true,
     services: [{
       key: "dsc",
       callback: 
     }]
   },
   loadEloqua: {
     isActive: true,
     requiresUidRequest: false,
     services: [{
       key: 'eloqua',
       injectedVariables: [
         { key: 'title', value: 'contactTitle' },
         { key: 'industry', value: 'contactIndustry' },
         { key: 'leadScore', value: 'contactLS' },
         { key: 'jobLevel', value: 'contactJL' },
         { key: 'businessStatus', value: 'contactBS' },
         { key: 'topicOfInterest', value: 'contactTOI' }
       ]
     }]
   }
  };


  /**
   * Default configuration object that gets merged with instance configuration during initialization.
   *
   * @constant
   * @type      {Object}
   * @default
   */
  var DEFAULT_CONFIG = {
    async: true,
    delayForData: true,
    hideMethod: 'elements',
    loadDsc: true,
    loadCps: true,
    loadEloqua: false,
    loadLocale: true,
    loadVps: true,
    loadPps: false,
    killSwitch: 'none',
    forcedOffer: 'none',
    safetyTimeout: 4000
  };


// UTILITY functions

  /**
   * Convert the value of a query parameter to it's expected data type.
   *
   * @param   {String}                   key              The qParam's key.
   * @param   {String}                   value            The qParam's value.
   * @return  {(String|Boolean|Number)}                   The qParam's value with the correct data type.
   */
  var convertQueryParam = function (key, value) {
    switch (QUERY_PARAMETERS_TYPE_MAP[key]) {
     case 'boolean':
       return (value === 'false' || value === '0') ? false : true;
     case 'number':
      return Number(value);
     default:
      return value;
    }
  };

  /**
   * Assign values from query parameter (when provided) to corresponding configuration object properties.
   *
   * @param   {Object}  configObject  The configuration object with properties for which new values will be assigned.
   * @param   {String}  paramKey      The string corresponding to a query parameter and configuration object key.
   * @return  {Object}                The madified configuration object
   */
  var assignFromQuery = function(configObject, paramKey) {
    var val = getQueryParam(paramKey);
    if (typeof val !== 'undefined') {
      configObject[paramKey] = convertQueryParam(paramKey, val);
      if (Targeter.isInDebugMode) Targeter.internals.config.queryParams[paramKey] = val;
    }
    return configObject;
  };


  /**
   * Gets a value for the specified query parameter.
   *
   * @param  {String}  param         The key for which a value is retrieved.
   * @param  {String}  defaultValue  The default value to return, which will be `undefined` when the argument has been omitted.
   */
  var getQueryParam = function(param, defaultValue) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] == param) {
        return pair[1];
      }
    }
    return defaultValue;
  };


  /**
    * Returns boolean describing whether currentHost matches any element in given array.
    *
    * @param   {Array}    matchArray  The array against which to check for match.
    * @return  {Boolean}              Whether the current host was found in the provided array.
    */
    var currentHostMatches = function(matchArray) {
      return (matchArray.some();
    };


  /**
   * Constructs a protocol-relative URL.
   *
   * @param   {String}  domain     The host part of the URL.
   * @param   {String}  scriptUrl  The path part of the URL.
   * @return  {String}             The protocol-relative URL.
   */
  var getScriptURL = 


  /**
   * Returns the input string or an empty string (for undefined input).
   *
   * @param   {String}  input  The input value which may be string or undefined.
   * @return  {String}         The input string or an empty string.
   */
  var handleUndefinedString = function(input) {
    if (input === undefined) {
      return ''
    } else {
      return input
    }
  };


  /**
   * Updates the timeline object when Targeter gets executed in debug mode to support automated quality assurance, unit testing, and in-browser analysis.
   *
   * @param  {String}  label   The descriptive text for the timeline entry.
   * @param  {String}  type    The type for the timeline entry.
   * @param  {Object}  params  The packet of optional parameters (and/or any other arbitrary parameters) to be saved as properties of the timeline entry.
   */
  var updateTimeline = function (label, type, params) {
    params = params || {};
    if (Targeter.isInDebugMode) {
      var timingValues = getTimingValues(config.safetyTimeout, startTime);
      var result = {
        label: label,
        type: type,
        timestamp: Date.now(),
        elapsed: timingValues.elapsed,
        remaining: timingValues.remainingActual,
        remainingAdjusted: timingValues.remainingAdjusted,
        remainingForXhrTimeout: timingValues.remainingForXhrTimeout
      };
      mergeConfigObjects(result, params);
      Targeter.internals.timeline.push(result);
    }
    var performanceExistsInBrowser = function() {
      return isDefined(performance) && isDefined(performance.mark);
    };
    var performanceMarkSpecified = 
    if (performanceExistsInBrowser() && performanceMarkSpecified(params)) performance.mark(label);
  };


  /**
   * Marks performance when supported by browser.
   *
   * @param  {String}  label  The unique key that identifies the performance mark.
   */
  var markPerformance = function(label) {
    updateTimeline(label, 'targeterEvent', {
      subtype: 'performanceMark',
      markPerformance: true
    });
  };


  /** Merges configuration objects. */
  var mergeConfigObjects = function() {
    Object.assign = (typeof Object.assign != 'function') // Polyfills `Object.assign` method if native method is unavailable.
      ? polyfillObjectAssign
      : Object.assign;
    Object.assign.apply(null, arguments);
  };


  /**
   * Assigns configuration object properties using array of query parameter keys.
   *
   * @param  {Object}  configObject  The configuration object containing properties to override.
   * @param  {Array}   params        The array of query parameter keys (string).
   */
  var overrideConfigValues = function(config, paramKeys) {
    paramKeys.forEach(;
    if (!Targeter.isInDebugMode) { // only use kill switches and forced offers when in debug mode
      delete config.killSwitch;
      delete config.forcedOffer;
    }
    return config;
  };


  /**
   * Ensures configuration object properties have expected type.
   *
   * @param  {Object}  config  The configuration object containing properties to override.
   * @param  {Object}  rules   The object containing sanitization methods for specific configuration properties.
   */
  var sanitizeConfig = function(config, rules) {
    Object.keys(rules).forEach(function(key) {
      if (typeof config[key] !== 'undefined') {
        var sanitize = rules[key];
        config[key] = sanitize(config[key]);
      }
    });
    return config;
  };


  /**
   * Pollyfills JavaScript's native Object to enable object merging using code from https://mzl.la/1Mo3l21
   *
   * @param  {Object}  target  The target object
   */
  var polyfillObjectAssign = function(target) {
    'use strict';
    if (target == null) { throw new TypeError('Cannot convert undefined or null to object'); };
    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          };
        };
      };
    };
    return target;
  };


// TARGETER SPECIFIC functionality
//
  /**
   * Get ALL regional mboxes on page
   */
  var getAllRegionalMboxes = 

  /**
   * Get the last regional mbox currently rendered in the DOM
   */
  var getLastRegionalMbox = function () {
    var everyMboxDivOnPage = getAllRegionalMboxes();
    var lastMboxDivOnPage = everyMboxDivOnPage[everyMboxDivOnPage.length - 1];
    return lastMboxDivOnPage;
  }

  /**
   * Sets id of specified DOM element to specified string.
   *
   * @param   {HTMLElement}  el  The element to update.
   * @param   {String}       id  The value of the specified elements `id` attribute.
   * @return  {String}           The value of the specified elements `id` attribute.
   */
  var setElementId = 

  /** Intercepts any calls that get made by regional mboxes and queues them to be executed after the Adobe Library becomes available. */
  window.mboxCreate = function() {
    var lastMboxDivOnPage = getLastRegionalMbox();
    var id = setElementId(lastMboxDivOnPage, arguments[0]);
    var data = {
      arguments: [].slice.call(arguments),
      div: lastMboxDivOnPage
    };
    regionalMboxQueue.push(data);
    updateTimeline('pushed regional mbox data into queue', 'regionalMboxQueueEvent', { subtype: 'mboxPushed', data: data });
  }


  /**
   * Does final cleanup of non-targeted elements (with `.targetable` class).
   *
   * @param   {Number}  timeout  The number of milliseconds (after `DOMContentLoaded`) to wait before cleaning up targetable classing.
   */
  var cleanUp = function (params) {
    params.revealRegionalMboxes = true;
    if (isDefined(params.timeout)) { // this branch gets hit from finishUp
      document.addEventListener('DOMContentLoaded', ;
    } else { // this branch gets hit from handleTimeout
      updateElementStyles(params);
    }
  };


  /**
   * Loads the Adobe Target library only if preconditions have been met.
   *
   * @param   {String}  source  The name of the calling function (used for logging `console` output).
   */
  var fireWhenReady = function(source) {
    if (isReady(source)) loadTargetLibrary();
  };


  /**
   * Returns an object with account-related properties.
   *
   * @param  {String}  accountName  The value used for account settings.
   */
  var getTargetAccountConfig = function(accountName) {
    return ADOBE_ACCOUNTS[normalizeAccountName(accountName).toUpperCase()];
  };

  /**
   * normalizes any potentially invalid accountName values
   * @param  {string} accountName accountName value string passed in by configs (page params or query params)
   * @return {string}             [description]
   */
  var normalizeAccountName = 

  /**
   * returns duplicate object to avoid any unwanted downstream mutations by reference
   * @param  {object} obj object to be persisted
   * @return {Object}     duplicate of object with identical key:value pairs
   */
  var persistCurrentObjectState = 

  var getCss = function() {
    var styles = "\n.targetable, .mboxDefault, .targetable.hidden { visibility:hidden; }";
    styles += "\n.targetable { position:relative; }";
    styles += "\n.targetable.spinner > :not(.spinner-box) { opacity: 0 !important; }";
    styles += "\n.targetable.spinner > div.spinner-box { position: absolute; top: 50%; left: 50%;transform: translateX(-50%) translateY(-50%); }";
    styles += "\ndiv.spinner-box > div.spinner-wheel { position:relative; visibility:visible; width:4em; height:4em; border-radius:100%; border:.2em solid #cccccc; border-left-color:#049fd9; -webkit-animation: load 1.1s infinite linear; animation: load 1.1s infinite linear; } @-webkit-keyframes load{ 0%{ -ms-transform: rotate(7deg); -webkit-transform: rotate(7deg); transform: rotate(7deg); } 100%{ -ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); } } @keyframes load{ 0%{ -ms-transform: rotate(7deg); -webkit-transform: rotate(7deg); transform: rotate(7deg); } 100%{ -ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); } }";
    styles += "\n.targetable.obscured { visibility:visible; opacity:.1; transition: opacity 2s ease-in-out; -moz-transition: opacity 2s ease-in-out; -webkit-transition: opacity 2s ease-in-out; filter: blur(5px); -webkit-filter: blur(5px); -moz-filter: blur(5px); -o-filter: blur(5px); -ms-filter: blur(5px); filter: url('data:image/svg+xml;utf9,<svg%20version=\"1.1\"%20xmlns=\"http://www.w3.org/2000/svg\"><filter%20id=\"blur\"><feGaussianBlur%20stdDeviation=\"3\"%20/></filter></svg>#blur'); filter: progid: DXImageTransform.Microsoft.Blur(PixelRadius='5'); -webkit-transition: 2s -webkit-filter linear; -moz-transition: 2s -moz-filter linear; -o-transition: 2s -o-filter linear;}";
    styles += "\n";
    return styles;
  }


  /**  Injects `<style>` tag to define desired CSS style for `.targeted` and/or `.targetable` classes. */
  var injectCss = function() {
    var styles = getCss();
    var css = document.createElement('style');
    css.type = 'text/css';
    css.id = 'targetable-styles';
    if (css.styleSheet) {
      css.styleSheet.cssText = styles;
    } else {
      css.appendChild(document.createTextNode(styles));
    };
    document.getElementsByTagName("head")[0].appendChild(css);
    updateTimeline('injected css', 'targeterEvent');
  };


  /** Loads Adobe's Visitor library. */
  var injectVisitor = function() { // NOTE: Visitor must load *before* `at.js` to avoid skewed results
    updateTimeline('visitorapi.js injected', 'targeterEvent', {
      subtype: 'scriptInjectionStarted',
      markPerformance: true
    });
    injectScript(setDomain('/c/dam/cdc/j/VisitorAPI.js'), function() {
      readiness.visitorLibraryLoaded = true;
      updateTimeline('visitorapi.js executed', 'targeterEvent', {
        subtype: 'scriptInjectionFinished',
        markPerformance: true
      });
    }, 'visitorTag');
  };


  /**
   * Determines if all requirements have been met for loading the Adobe Target Library (`at.js`).
   *
   * @param   {String}  source  The name of the calling function (used for logging `console` output).
   */
  var isReady = function(source) {
    updateTimeline("tested readiness to load Target library", 'targeterEvent', {
      subtype: 'readinessTested',
      source: source
    });
    if (window.adobe === undefined) { adobe = {}; }
    var ready = (typeof(visitor) !== 'undefined' || typeof(Visitor) !=='undefined') // this ensures that the visitor namespace exists
      && readiness.visitorLibraryLoaded // this boolean ensures that visitor's injection method has triggered its callback
      && !readiness.adobeLibraryLoaded // this boolean prevents second load attempt in quick succession
      && typeof(adobe.target) === 'undefined' // this ensures that `at.js` has not been loaded already (it creates this namespace)      
      && !readiness.timedOut; // this boolean prevents load if we previously timed out (e.g., with killSwitch=timeoutBeforeDomInteractive)
    if (ready) { // next, we check that every property required by config must have been defined
      if(localStorage && localStorage.getItem('evrg')!=null && localStorage.getItem('evrg')!='undefined')
      {
        console.log('reading evrg from localstorage');
        profile.evrg=JSON.parse(localStorage.getItem('evrg'));
      } 
      Object.keys(SERVICE_MANIFESTS).forEach(function(key) {
        SERVICE_MANIFESTS[key].services.forEach(function (service) {
          if (config[key]) {
            ready = ready && (profile[service.key] !== undefined);
          }
        });
      });
    };
    return ready;
  };


  /**
   * This function calculates the time remaining and imposes a minimum value of 1
   *  which ensures that XHR requests time out properly as 0 disables the XHR timeout
   *
   * @param   {Number}  timeout  The number of milliseconds beyond which the personalization attempt will be abandoned.
   * @param   {Number}  start    The current date expressed as seconds after the UNIX epoch.
   * @return  {Object}           The calculated timing values for keys: `elapsed`, `remainingActual`, `remainingAdjusted` and `remainingForXhrTimeout`
   */
  var getTimingValues = function(timeout, start) {
    var preventsTimeout = KILL_SWITCHES[config.killSwitch || 'none'].preventSafetyTimeout;
    var elapsed = Date.now() - start;
    var remainingActual = (timeout || DEFAULT_CONFIG.safetyTimeout) - elapsed;
    var remainingForXhrTimeout = remainingActual > 0 ? remainingActual : 1;
    var remainingAdjusted = preventsTimeout ? 10000 : remainingForXhrTimeout;
    return {
      elapsed: elapsed,
      remainingActual: remainingActual,
      remainingAdjusted: remainingAdjusted,
      remainingForXhrTimeout: remainingForXhrTimeout
    };
  };


  /**
   * Determines whether an input parameter is an object.
   *
   * @param   {*}        input  The input value that may or may not be an object.
   * @return  {Boolean}         Whether the input parameter is an object.
   */
  var isEmptyObject = function(input) {
    return Object.keys(input).length === 0 && input.constructor === Object
  };


  /**
   * Determines whether an input value has a type other than "undefined", with the option to return a default value for undefined input.
   *
   * @param   {*}          input         The input value that may or may not be defined.
   * @param   {*}          defaultValue  An optional value that can be returned for undefined input.
   * @return  {Boolean|*}                Whether the input parameter is defined, or a default value if one was provided.
   */
  var isDefined = function(input, defaultValue) {
    var inputIsDefined = typeof input !== 'undefined';
    var hasDefaultValue = typeof defaultValue !== 'undefined';
    return hasDefaultValue ? defaultValue : inputIsDefined;
  };


  /**
   * Determines whether the Adobe offers will trigger content rendering.
   *
   * @param   {Object}   offerArray  The array of offers returned in the Adobe response.
   * @return  {Boolean}              Whether the offers trigger content rendering.
   */
  var offerTriggersRendering = function(offerArray) {
    var result = false;
    offerArray.forEach(function(offer) {
      var offerTriggers = (
        isDefined(offer.type)
        && offer.type === 'actions'
        && isDefined(offer.content)
      );
      result = result || offerTriggers; // if any item triggers, result will be true
    });
    return result;
  };


  /**
   * Assembles a parameter packet to be used when an Adobe Target request succeeds.
   *
   * @param   {Object}   offerArray  The array of offers returned in the Adobe response for this request.
   * @param   {String}   mbox        The name of the mbox for this request.
   * @param   {Number}   timeout     The time remaining (ms) before this personalization atttempt should be abandoned.
   * @return  {Object}               The parameter packet to be used when an Adobe Target request succeeds.
   */
  var getParamsForAdobeTargetOffer = function(offerArray, mbox, timeout) {
    var triggersRendering = offerTriggersRendering(offerArray);
    var isGlobal = mbox === 'target-global-mbox';
    var revealsTargetableElements = isGlobal && !triggersRendering;
    return {
      subtype: 'adobeRequestSucceeded',
      offers: offerArray,
      triggersRendering: triggersRendering,
      isGlobal: isGlobal,
      mbox: mbox,
      timeout: timeout,
      revealsTargetableElements: revealsTargetableElements
    };
  };


  /**
   * Calls the Adobe method for applying an offer.
   *
   * @param   {Object}   offerArray  The array of offers returned in the Adobe response for this request.
   * @param   {String}   mbox        The name of the mbox for this request.
   */
  var applyAdobeTargetOffer = function(offerArray, mbox) {
    adobe.target.applyOffer({
      mbox: mbox,
      selector: '#' + mbox,
      offer: offerArray
    });
  };


  /**
   * Updates the DOM and timeline as required for a successful Adobe request.
   *
   * @param  {Object}  offerArray  The array of offers returned in the Adobe response for this request.
   * @param  {String}  mbox        The name of the mbox for this request.
   * @param  {Number}  timeout     The time remaining (ms) before this personalization atttempt should be abandoned.
   */
  var handleSuccessfulAdobeTargetOffer = function(offerArray, mbox, timeout) {
    var params = getParamsForAdobeTargetOffer(offerArray, mbox, timeout);
    updateTimeline('adobe request succeeded', 'adobeTargetEvent', params);
    applyAdobeTargetOffer(offerArray, mbox);
    if (params.revealsTargetableElements) updateElementStyles({
      source: 'getAdobeTargetOffer (' + mbox + ')',
      timeout: timeout
    });
  };


  /**
   * Overrides the offers array to simulate specific Adobe responses (if required, for testing in debug mode only).
   *
   * @param   {Array}   offerArray  The actual array of offers.
   * @return  {Array}               The array of offers to use (which may have been overridden).
   */
  var applyForcedOffer = function(offerArray) {
    if (Targeter.isInDebugMode) {
      var forcedOfferKey = config.forcedOffer
      offerArray = forcedOfferKey === 'none'
        ? offerArray
        : FORCED_OFFERS[forcedOfferKey];
    }
    return offerArray;
  };


  /**
   * Makes the request for Adobe Target offers which correspond to a specified mbox.
   *
   * @param   {String}  mbox     The identifier for the mbox.
   * @param   {String}  timeout  The time remaining (ms) before this personalization atttempt should be abandoned.
   */
  var getAdobeTargetOffer = function(mbox, timeout) {
    adobe.target.getOffer({
      mbox: mbox,
      timeout: timeout,
      success: function (offerArray) {
        offerArray = applyForcedOffer(offerArray);
        handleSuccessfulAdobeTargetOffer(offerArray, mbox, timeout);
        setPageOpacity('1', 'getAdobeTargetOffer (success callback)');
      },
      error: 
    });
  };


  /**
   * Selectively forces timeout under certain conditions as required for unit testing scenarios.
   *
   * @param   {Number}  timeRemaining  The time remaining (ms) before this personalization atttempt should be abandoned.
   * @param   {Number}  index          The index of a queued regional mbox.
   * @return  {Number}                 The adjusted time remaining (ms) before this personalization atttempt should be abandoned.
   */
  var applyKillSwitch = function(timeRemaining, index) {
    var killSwitch = KILL_SWITCHES[config.killSwitch] || '';

    // override tGS.timeout as required by specified killSwitch
    var timeoutOverride = Number(killSwitch.targetGlobalSettingsTimeoutOverride);
    if (timeoutOverride > 0) targetGlobalSettings.timeout = timeoutOverride;

    // decide whether and how to override timeRemaining based on the current killSwitch object properties
    var timeRemainingOverride = Number(killSwitch.timeRemainingOverride);
    var isOverriddenIndex = typeof killSwitch.overriddenIndex !== 'undefined';
    if (timeRemainingOverride > 0) { // we do override somehow
      if (isOverriddenIndex) { // but may only override particular indexes ...
        return (killSwitch.overriddenIndex === index) ? 1: timeRemaining;
      } else { // ... or we may override all of them
        return 1;
      }
    } else { // we don't override here
      return timeRemaining;
    }
  };


  /**
   * Initializes and updates global Adobe Target variables as required prior to loading the Adobe Target library.
   *
   * @param   {Number}  timeRemaining  The time remaining (ms) before this personalization atttempt should be abandoned.
   */
  var setUpTargetLibraryLoad = function(timeRemaining) {
    window.targetGlobalSettings.enabled = true;
    window.targetGlobalSettings.timeout = timeRemaining;
    handleTimeout('timeoutPending');
    readiness.adobeLibraryLoaded = true; // set to prevent library loading twice in rapid succession
  };


  /**
   * Returns boolean indicating whether an element having the specified id exists.
   *
   * @param   {String}   The identifier used for this existence check.
   * @return  {Boolean}  Whether an element with the specified id exists.
   */
  var tagExistsWithId = 


  /** Reveals every regional mbox that exists and overwrites Adobe's global mbox methods to ensure newly-rendered regional mboxes display immediately. */
  var ensureRegionalMboxVisibility = function () {
    updateTimeline('ensured visibility of present and future regional mboxes', 'targeterEvent', { subtype: 'regionalMboxesRevealed' });
    revealRegionalMboxes();
    window.mboxDefine = function () { }; // NOOP
    window.mboxCreate = function () {
      var lastMboxDivOnPage = getLastRegionalMbox();
      var id = setElementId(lastMboxDivOnPage, arguments[0]);
      var params = {
        source: 'disabledMboxCreate',
        revealRegionalMboxes: true,
        regionalMboxId: id
      };
      updateElementStyles(params);
    };
  };


  /**
   * Fires the Adobe library method to get offers for regional mbox requests that were queued when encountered prior to loading the `at.js` library.
   *
   * @param   {Number}  timeRemainingForXhr  The amount of time remaining before abandoning the personalization attempt, which will be passed as the `timeout` value in a subsequent XHR request.
   */
  var processRegionalMboxQueue = function (timeRemainingForXhr) {
    regionalMboxQueue.forEach(function(data, index) { // iterate over and execute each call to `mboxCreate` that was previously queued
      var mboxId = data.arguments[0];
      var params = {};
      data.arguments.slice(1).forEach(;
      getAdobeTargetOffer(mboxId, applyKillSwitch(timeRemainingForXhr, index));
      updateTimeline('processed regional mbox data from queue', 'regionalMboxQueueEvent', { subtype: 'mboxProcessed', data: data });
    });
  };

// METRICS

  /**
   * Generates a formatted string to serialize the key JSON data which Adobe returns for the activities in successful request events.
   *
   * @param   {Array}   tokens  The response tokens provided in the Adobe Target `REQUEST_SUCCEEDED` event.
   * @return  {String}          The activity data formatted as a delimited string, which will be posted as activity data to metrics.
   */
  var getEventNameFromTokens = function (tokens) {
    var result = '';
    tokens.forEach(function (token) {
      var tokenResult = token['activity.name'] + '|' + token['experience.name'] + '::'; // the final `||` delimiter will be removed from the result
      var tokenResultIsNew = result.indexOf(tokenResult) === -1;
      if (tokenResultIsNew) result += tokenResult;
    });
    return result.slice(0, -2);
  };


  /**
   * Fires a tracking pixel with three parameters -- `event_name`, `event_type`, and `event_category` -- unless an identical pixel was already fired.
   *
   * @param   {Object}  e       The event object provided by the Adobe library.
   * @param   {[type]}  mboxId  The name of the corresponding mbox.
   */
  var postMetrics = function (e, mboxId) {
    var eventName = getEventNameFromTokens(e.detail.responseTokens);
    var dataObj = {
      event_type: 'screen',
      event_category: 'pzn',
    };
    dataObj.event_name = eventName;
    var pixelNotYetFired = pixelsFired.indexOf(eventName) === -1;
    if (pixelNotYetFired) {
      pixelsFired.push(eventName);
      ctm.track(dataObj);
      updateTimeline('fired tracking pixel for ' + mboxId, 'targeterEvent', {
        subtype: 'trackingPixelFired',
        mboxId: mboxId,
        mboxType: mboxId === 'target-global-mbox' ? 'global' : 'regional',
        dataSent: dataObj,
        targetEvent: e,
      });
    }
  };


  /**
   * Determines if an Adobe event includes response tokens and posts metrics if it does.
   *
   * @param   {Object}  e       The event object provided by the Adobe library.
   * @param   {[type]}  mboxId  The name of the corresponding mbox.
   */
  var postMetricsIfResponseTokensExist = function (e, mboxId) {
    var hasResponseTokens = isDefined(e.detail.responseTokens);
    var responseTokens = hasResponseTokens ? e.detail.responseTokens : [];
    var responseTokenCount = responseTokens.length;
    var hasMetricsData = hasResponseTokens && responseTokenCount > 0;
    if (hasMetricsData) postMetrics(e, mboxId); // only post metrics when one or more response tokens is available
  };


// ADOBE EVENTS


  /**
   * Returns a event handler that will be executed for every event that Adobe raises.
   *
   * @param   {Object}  eventKey  The identifier for the Adobe event, which will be `REQUEST_SUCCEEDED`, `REQUEST_FAILED`, `CONTENT_RENDERING_SUCCEEDED`, or `CONTENT_RENDERING_FAILED`.
   */
  var getAdobeEventHandler = function (eventKey) {
    return function (e) {
      var mboxId = e.detail.mbox;
      updateTimeline(eventKey + ' for ' + mboxId, 'adobeTargetEvent', {
        subtype: 'eventFired',
        eventType: eventKey,
        targetEvent: e,
        mboxId: mboxId,
        markPerformance: true
      });
      var hasTimedOut = eventKey === 'REQUEST_FAILED' && e.detail.message === 'timeout';
      if (hasTimedOut) handleTimeout('timeoutReachedForAdobeRequest', mboxId);
      if (eventKey === 'REQUEST_SUCCEEDED') {
        handleTimeout('timeoutNotReachedForAdobeRequest', mboxId);
        postMetricsIfResponseTokensExist(e, mboxId);
        window.ttMETA = typeof(window.ttMETA) != "undefined" ? window.ttMETA : [];
        console.log('clicktale');
        var tokens = e.detail.responseTokens;
        if (isEmpty(tokens)) {
        return;
        }
        var uniqueTokens = distinct(tokens);
        uniqueTokens.forEach(function(token) {
          console.log('before ttmeta push');
        window.ttMETA.push({
        'CampaignName': token["activity.name"],
        'CampaignId': token["activity.id"],
        'RecipeName': token["experience.name"],
        'RecipeId': token["experience.id"],
        'OfferId': token["option.id"],
        'OfferName': token["option.name"],
        'MboxName': e.detail.mbox
        });
        });
      }
    };
  };
  
   
   


  /** Registers handlers for the Adobe events. */
  var handleAdobeEvents = function () {
    ADOBE_EVENTS.forEach(function(eventKey) {
      var label = eventKey.toLowerCase().replace(/_/g, ' ');
      var targetEvent = adobe.target.event[eventKey];
      var eventHandler = getAdobeEventHandler(eventKey);
      document.addEventListener(targetEvent, eventHandler);
      var eventRequiresCleanUp = ADOBE_EVENTS_REQUIRING_CLEANUP.indexOf(eventKey) >= 0;
      if (eventRequiresCleanUp) addCleanUpHandler(targetEvent);
    });
  };
  
  
  /** Adds an event listener to clean up element styles for the global mbox. */
  var addCleanUpHandler = function (targetEvent) {
    document.addEventListener(targetEvent, function (e) {
      if (e.detail.mbox === 'target-global-mbox') updateElementStyles({ source: 'registerCleanUpForTargetEvent' });
    });
  };


  /** Loads Adobe Target library and event listener required for cleanup. */
  var loadTargetLibrary = function () {
    var timeRemaining = getTimingValues(config.safetyTimeout, startTime).remainingAdjusted;
    if (timeRemaining > 1 && config.killSwitch !== 'timeoutBeforeAdobeLibrary') {
      setUpTargetLibraryLoad(timeRemaining);
      updateTimeline('at.js injected', 'targeterEvent', {
        subtype: 'scriptInjectionStarted',
        markPerformance: true,
        message: 'loadTargetLibrary() was called with time remaining'
      });
      injectScript(setDomain('/c/dam/cdc/j/at.js'), function () {
        var timelineParams = {
          subtype: 'scriptInjectionFinished',
          markPerformance: true
        };
        if (Targeter.isInDebugMode) {
          timelineParams.bodyStyleTagExists = tagExistsWithId('at-id-body-style');
          timelineParams.targetableStylesTagExists = tagExistsWithId('targetable-styles');
        }
        updateTimeline('at.js executed', 'targeterEvent', timelineParams);
        var timeRemainingForXhr = getTimingValues(config.safetyTimeout, startTime).remainingForXhrTimeout;
        if (config.killSwitch !== 'timeoutBeforeAdobeRequests' && timeRemaining > 1) {
          handleTimeout('timeoutPending');
          clearInterval(pollingInterval);
          timeRemainingForXhr = applyKillSwitch(timeRemainingForXhr);
          getAdobeTargetOffer(
            'target-global-mbox',
            config.killSwitch === 'timeoutReachedForSomeAdobeRequest'
              ? 1000000
              : timeRemainingForXhr
          ); // force global success for UC5
          processRegionalMboxQueue(timeRemainingForXhr);
        } else {
          handleTimeout('timedOutBeforeAdobeRequests');
        }
        handleAdobeEvents();
      }, 'target');
    } else {
      handleTimeout('timedOutBeforeAdobeLibrary');
    }
  };


  /** Removes the element having ID attribute of "at-id-body-style". */
  var removeBodyHideStyleTag = function() {
    var bhTag = document.getElementById('at-id-body-style');
    if (bhTag !== null) bhTag.parentNode.removeChild(bhTag);
  };


  /**
   * Returns an array of DOM elements matching the selector provided.
   *
   * @param   {String}  selector  The CSS selector that will be used to retrieve a node list.
   * @return  {Array}             The array of nodes returned by the DOM query.
   */
  var getDomElements = 


  /**
   * Removes one or more classes from one or more DOM elements.
   *
   * @param   {Array}  elements    The array of DOM elements to manipulate.
   * @param   {Array}  classNames  The array of class names to remove from each DOM element.
   */
  var stripClassNamesFromElements = function (elements, classNames) {
    elements.forEach(function (el) {
      classNames.forEach(;
    });
  };


  /**
   * Removes one or more elements from the DOM.
   *
   * @param   {Array}  elements    The array of DOM elements to remove.
   */
  var removeElements = 


  /** Removes all Targeter-specific elements and classes from the DOM. */
  var removeTargetableClasses = function () {
    var targetableElements = getDomElements('.targetable'); // Identify targetable elements and generate patterns.
    var spinnerBoxElements = getDomElements('.spinner-box'); // Identify extraneous spinner boxes elements.
    stripClassNamesFromElements(targetableElements, TARGETABLE_CLASS_NAME_PATTERNS);
    removeElements(spinnerBoxElements); // Remove the extraneous spinner box elements from the DOM.
  };


  /**
   * Converts query parameter values from strings into booleans.
   *
   * @param   {String}   val  The string value to be cast into a boolean.
   * @return  {Boolean}       The boolean value derived from the provided string value.
   */
  var castQueryParamValueToBoolean = function (val) {
    return (val.toLowerCase() === 'true' || val === '1') ? true : false;
  };


  /** Uses the debugTargeter query parameter to set Targeter's debug mode and initialize required variables as necessary. */
  var setDebugMode = function () {
    var debugMode = getQueryParam('debugTargeter', false);
    debugMode = (typeof debugMode === 'string') ? castQueryParamValueToBoolean(debugMode) : debugMode;
    Targeter.isInDebugMode = debugMode;
  };


  /**
   * Prepends absolute domain to path based on a match to ABSOLUTE_PATH_WHITELIST.
   *
   * @param   {String}  scriptUrl  The path part of the URL.
   * @return  {String}             The protocol-relative URL.
   */
  var setDomain = function(scriptUrl) {
    if (typeof config.useDomain !== 'undefined' && config.useDomain !== '') {
      updateTimeline('set domain using query parameter value', 'targeterEvent', { subtype: 'setDomain' });
      scriptUrl = getScriptURL(config.useDomain, scriptUrl);
    } else if (currentHostMatches(ABSOLUTE_PATH_WHITELIST)) {
      updateTimeline('set domain using absolute path whitelist', 'targeterEvent', { subtype: 'setDomain' });
      scriptUrl = getScriptURL(DEFAULT_DOMAIN, scriptUrl);
    }
    return scriptUrl;
  }


  /**
   * Sets Adobe account details using `window.targetGlobalSettings` based on current host environment, unless overridden by `config.accountName` property.
   *
   * @param  {Object}  config              the configuration object containing relevant properties.
   * @param  {String}  config.accountName  (optional) value to override account.
   */
  var setTargetAccount = function(config) {
    var accountName = 'prod'; // Default to production.
    if (config && config.accountName && (typeof config.accountName !== 'undefined')) {
      updateTimeline('set target account using configuration', 'targeterEvent', {
        subtype: 'setTargetAccount'
      });
      accountName = config.accountName.toLowerCase(); // Override using provided configuration.
    }
    else {
      var isMatch = TEST_ACCOUNT_WHITELIST.some(;
      if (isMatch) { // Override using test account as required.
        updateTimeline('set target account using whitelist', 'targeterEvent', {
          subtype: 'setTargetAccount'
        });
        accountName = 'test';
      }
    };
    setTargetGlobalSettingsForAccount(getTargetAccountConfig(accountName)); // Uses the calculated value to properly configure Adobe's global settings *before* loading the Adobe Target Library.
    config.accountName = normalizeAccountName(accountName);
  };


  /**
   * Sets values for Adobe Target via `window.targetGlobalSettings`.
   *
   * @param  {Object}  config  The configuration object with properties for account settings.
   */
  var setTargetGlobalSettingsForAccount = function(config) {
    updateTimeline('updated targetGlobalSettings', 'targeterEvent', {
      subtype: 'targetGlobalSettingsUpdated',
      message: 'Here, we set the properties based on the active account (test or prod).'
    });
    ADOBE_ACCOUNT_PARAMS.forEach(;
  };


  /**
   * Sets element visibility to given string value.
   *
   * @param   {HTMLElement}  el     The element to update.
   * @param   {Boolean}      value  The visibility setting.
   */
  var setElementVisibility = 


  /**
   * Force regional mboxes to become visible after a brief timeout.
   *
   * @param   {String}  mboxId  The identifier for the regional mbox element.
   */
  var revealRegionalMboxes = function (mboxId) {
    if (mboxId) {
      setElementVisibility(document.getElementById(mboxId), 'visible');
    } else {
      var regionalMboxElements = getAllRegionalMboxes();
      regionalMboxElements.forEach(;
    }
  };


  /**
   * Updates a matching element with the provided content.
   *
   * @param  {String}  tagId        The identifier of the element to update.
   * @param  {String}  tagContents  The content with which to update the specified element.
   */
  var updateTagContents = function(tagId, tagContents) {
    var tag = document.getElementById(tagId);
    if (!!tag) {
      var tagHtml = tag.innerHTML;
      var originalContent = tagHtml.replace(/\s/g, '').replace(/\\"/g, '"');
      tagHtml = tagContents;
      var updatedContent = tagHtml.replace(/\s/g, '');
      var contentMatches = originalContent === updatedContent;
      var timelineParams = { subtype: 'tagUpdated', tagId: tagId, contentMatches: contentMatches };
      if (!contentMatches) timelineParams.content = {
        original: originalContent,
        updated: updatedContent
      };
      updateTimeline('updated tag', 'targeterEvent', timelineParams);
    };
  };


  /**
   * Sets the page opacity directly.
   *
   * @param   {String}  opacity  The value to use (typically '0' or '1').
   * @param   {String}  source   The identifier for the caller, used to test with instrumentation.
   */
  var setPageOpacity = function (opacity, initiator) {
    document.documentElement.style.opacity = opacity;
    updateTimeline('set page opacity', 'targeterEvent', {
      subtype: 'pageOpacitySet',
      opacity: opacity,
      source: initiator,
    });
  };


  /**
   * Sets page opacity (or does not) based on the properties of the specified hide method.
   *
   * @param   {Object}  hideMethod  The object of settings for the specified hide method.
   */
  var applyOpacityForHideMethod = function (method) {
    var opacity = method.bodyHidingEnabled ? method.opacity : 1;
    setPageOpacity(opacity, 'applyOpacityForHideMethod');
    return opacity;
  };


  /**
   * Determines hide method based on provided key.
   *
   * @param   {String}  key  The key provided for hide method.
   * @return  {Object}       The object representing the hide method..
   */
  var getHideMethod = function (key) {
    var method = HIDE_METHODS[key];
    var defaultMethod = HIDE_METHODS[DEFAULT_CONFIG.hideMethod];
    return isDefined(method) ? method : defaultMethod;
  };


  /**
   * Update page opacity and inject CSS to support targetable classing as required (using the method for the provided key, or falling back to the default).
   *
   * @param   {String}  key  The identifier for the desired hide method.
   */
  var applySynchronousHideMethod = function (key) {
    var method = getHideMethod(key);
    if (method.injectsCss) injectCss(); // Inject CSS for synchronous path as required.
    var opacity = applyOpacityForHideMethod(method);
    updateTimeline('applied synchronous hide method', 'targeterEvent', {
      subtype: 'synchronousHideMethodApplied',
      method: method,
      methodKey: key,
      opacity: opacity || '',
      injectsCss: method.injectsCss,
    });
  };


  /**
   * Determines whether the page is iFramed.
   *
   * @return  {Boolean}  Whether the page is iFramed.
   */
  var isIFramed = 


  /**
   * Updates CSS and global vars as required based on the specified hide method and the implementation's synchronicity (sync or async).
   *
   * @param  {String}   key           The key for the HIDE_METHODS configuration object.
   * @param  {Object}   config        The configuration object containing relevant properties.
   * @param  {Boolean}  config.async  The property which specifies the implementation method (synchronicity).
   */
  var applyHideMethod = function (key) {
    if (!config.async) {
      applySynchronousHideMethod(key);
    } else { // for async, we expect the CSS to have been added to the page: (1) via `personalization.jsp` for on-framework; (2) inline using `<style id="targetable-styles">` tag for off-framework
      updateTagContents('targetable-styles', getCss()); // ... but it may be outdated, so if an element matching the ID exists, we update it with the latest css from this bundle (just in case)
    }
    if (isIFramed()) {
      setTimeout( 3000); // show regional mboxes after a brief delay (this allows VEC authors to see regional mboxes while still preventing a content jump for those pages that have been iFramed outside of the VEC)
    }
  };


  /** Adds a `journeyStep` property to the profile object based on the presence of a query parameter. */
  var setJourneyStep = function () {
    var journeyStep = getQueryParam('journeyStep'); // if found will be a string; otherwise, will be `false`
    if (isDefined(journeyStep)) profile.journeyStep = journeyStep;  // only assign value if string was found
  };


  // UID INTERACTION


  /**
   * Constructs a configuration object for `userInfoDispatcher` derived from `config` settings and the services manifest.
   *
   * @return  {Array}  The object containing key/value pairs that should be persisted to `localStoage` by `userInfoDispatcher`.
   */
  var getProfileUpdates = function() {
    var result = []; // might contain objects resemble `{key: "eloqua", value: {foo: "abc", bar: "xyz"}}`
    Object.keys(SERVICE_MANIFESTS).forEach(function(key) { // iterate through the service manifest to find those which *don't* require uid requests
      if (!SERVICE_MANIFESTS[key].requiresUidRequest && config[key]) { // we don't require UID to request data, we pass properties directly to UID for persistance
        var profileUpdate = {}; // initialize a new item for the `result` array
        SERVICE_MANIFESTS[key].services.forEach(function(service) { // the `config` property may map to multiple services so iterate over them
          profileUpdate.key = service.key; // this will be the name/key of the service
          var injectedVariables = {}; // this will become an object of variables to persist (e.g.: {foo: "abc", bar: "def"})
          service.injectedVariables.forEach(function (injectedVariable) {
            injectedVariables[injectedVariable.key] = handleUndefinedString(window[injectedVariable.value]);
          });
          profileUpdate.value = injectedVariables;
          result.push(profileUpdate);
        });
      };
    });
    return result;
  };


  /**
   * Constructs a configuration object for `userInfoDispatcher` based on `config` settings and the services manifest.
   *
   * @return  {Object}  The data required to make a request to `userInfoDispatcher`, with keys for `listOfDataFields` and `parserFunctions`.
   */
  var getBaseUidParams = function() {
    var result = {
      listOfDataFields: [],
      parserFunctions: {},
      callbackFunctions: {}
    };


    /**
    * Captures a specific type of method from the service manifest.
    *
    * @param   {Object}  service     The object mapped to the specified service in the services manifest.
    * @param   {String}  methodType  The type of method associated with the service request which is dependent on the services manifest object schema (currently supporting "parser" or "callback").
    */
    var getMethodsFor = function (service, methodType) {
      var methodIsRequired = isDefined(service[methodType]);
      if (methodIsRequired) result[methodType + 'Functions'][service.key] = service[methodType];
    };


    /**
     * Updates the userInfoDispatcher parameter object for a specific service.
     *
     * @param   {Object}  service  The object mapped to the specified service in the services manifest.
     */
    var includeUidParams = function (service) {
      result.listOfDataFields.push(service.key); // add service key
      getMethodsFor(service, 'parser');
      getMethodsFor(service, 'callback');
    };


    /**
     * Updates the userInfoDispatcher parameter object for a specific service if and only if (1) Targeter has been configured to load that service and (2) that service is active according to the services manifest.
     *
     * @param   {String}  serviceKey  The key that identifies the service in the manifest and corresponds to a boolean property of `config` (such as `loadBlueKai`).
     */
    var includeUidParamsIfActive = function (serviceKey) {
      var service = SERVICE_MANIFESTS[serviceKey];
      if (service.isActive && config[serviceKey]) service.services.forEach(includeUidParams); // if this `config` property is `true` for the current configuration (and not de-activated in the manifest)
    };

    var serviceKeys = Object.keys(SERVICE_MANIFESTS);
    serviceKeys.forEach(includeUidParamsIfActive);
    return result;
  };


  /** Loads specified personalization parameters as required by Adobe Target. */
  var makeUidRequest = function () {
    var baseUidParams = getBaseUidParams();
    uidParams = { // The packet of parameters required by userInfoDispatcher.
      async: config.async, // Whether to load assets asynchronously.
      timeoutPoint: startTime + Number(config.safetyTimeout), // The cut-off point after which we should bail on Targeter personalization.
      listOfDataFields: baseUidParams.listOfDataFields, // The list of data fields we must retrieve with userInfoDispatcher.
      callback: uidCallback, // The callback to execute when UID has fetched data a service in the `listOfDataFields`.
      delayForData: config.delayForData, // Whether to wait for service call or return only what's persisted to `localStorage`.
      parserFunctions: baseUidParams.parserFunctions, // The object containing functions keyed to services, which are used to parse and shape JSON results before adding them to the profile object returned by `targetPageParams()`.
      callbackFunctions: baseUidParams.callbackFunctions, // The object containing callback functions keyed to services.
      profileUpdates: getProfileUpdates() // The object containing key/value pairs that should be persisted to `localStorage` by `userInfoDispatcher`.
    };
    updateTimeline('made UID request', 'targeterEvent', {
      subtype: 'targeterMadeUidRequest',
      authStatusIsSynced: cdc.sso.authStatusIsSynced,
      uidParams: uidParams,
    });
    cdc.userInfoDispatcher.request(uidParams); // Calls userInfoDispatcher to retrieve necessary profile information.
  };


  /**
   * Initializes and/or appends to the `Targeter.internals` array of `uidCallback` states.
   *
   * @param  {Object}  response  The object passed from `userInfoDispatcher` to the callback.
   */
  var recordUidCallbackStates = function (response) {
    var lsUid = (localStorage && localStorage.userInfoDispatcher) ? localStorage.userInfoDispatcher : "{}";
    Targeter.internals.uidCallbackStates = Targeter.internals.uidCallbackStates || [];
    var currentInternalState = {
      response: JSON.parse(JSON.stringify(response)),
      profile: JSON.parse(JSON.stringify(profile)),
      lsUID: JSON.parse(lsUid)
    };
    Targeter.internals.uidCallbackStates.push(currentInternalState);
  };


  /**
   * Transfers properties from the userInfoDispatcher's response object to the profile object.
   *
   * @param  {Object}  response  Data object returned by userInfoDispatcher.
   */
  var uidCallback = function (response) {
    uidParams.listOfDataFields.forEach(function(serviceKey) {
      profile[serviceKey] = response.profileData[serviceKey] || {};
    });
    if (Targeter.isInDebugMode) recordUidCallbackStates(response);
    fireWhenReady('uidCallback');
  };


// SCRIPT INJECTION


  /**
   * Callback to execute on script load
   *
   * @callback scriptLoadCallback
   */


    /**
     * Injects a script synchronously.
     *
     * @param  {String}    scriptUrl  The script URL to load.
     * @param  {Function}  callback   The function to execute when the script has finished loading.
     * @param  {String}    id         The identifier for the injected script.
     */
    var injectScriptSynchronously = function(scriptUrl, callback, id) {
      var callbackKey = "cbk_" + scriptUrl.replace(/[^-a-zA-Z0-9_]/g,'');
      var cbTag = "<script> Targeter.callbacks." + callbackKey + "()<\/script>"
      publicMethods[callbackKey] = function(callbackKey) {
        updateTimeline(scriptUrl + ' injected', 'targeterEvent', {
          subtype: 'scriptInjectionStarted',
          synchronicity: 'sync'
        });
        callback();
        fireWhenReady('injectScriptSynchronously');
      };
      document.write('<script class="blockingScript" id="' + id + '" src="' + scriptUrl + '"></script>');
      document.write(cbTag);
    };


    /**
     * Injects a script asynchronously.
     *
     * @param  {String}    scriptUrl  The script URL to load.
     * @param  {Function}  callback   The function to execute when the script has finished loading.
     * @param  {String}    id         The identifier for the injected script.
     */
    var injectScriptAsynchronously = function(scriptUrl, callback, id) {
      updateTimeline(scriptUrl + ' injected', 'targeterEvent', {
        subtype: 'scriptInjectionStarted',
        synchronicity: 'async'
      });
      callback = callback || 
      var scripts = document.getElementsByTagName('script')[0];
      var s = document.createElement('script');
      s.async = config.async;
      s.classList.add('asyncScript');
      s.onload = function onInjectedScriptLoad() {
        updateTimeline(scriptUrl + ' executed', 'targeterEvent', {
          subtype: 'scriptInjectionFinished',
          synchronicity: 'async'
        });
        callback();
        fireWhenReady('injectScriptAsynchronously');
      };
      s.src = scriptUrl;
      s.id = id;
      scripts.parentNode.appendChild(s, scripts);
    };


  /**
   * Callback to execute on script load
   *
   * @callback scriptLoadCallback
   */

  /**
  * Injects a script synchronously into the DOM.
  *
  * @param  {String}              scriptUrl  The URL for script.
  * @param  {scriptLoadCallback}  callback   A callback to run.
  * @param  {String}              id         The value of the script tag's "id" attribute.
  */
  var injectScript = function(scriptUrl, callback, id) {
    inject = (config.async) ? injectScriptAsynchronously : injectScriptSynchronously;
    inject(scriptUrl, callback, id);
  };



// LOGGING


  /**
   * Logs a message to console using the specified method such as `log`, `warn`, `time`, and `timeEnd` (for debug mode only).
   *
   * @param  {String}  method     The method to call on `console`.
   * @param  {String}  message    The primary message to display.
   * @param  {String}  secondary  The secondary message to display.
   */
  var log = function (method, message, secondary) {
    secondary = secondary || '';
    if (debugMode) {
      console[method](message, secondary);
      updateTimeline(message, 'targeterEvent', {
        method: method,
        secondary: secondary,
        subtype: 'consoleLog'
      });
    }
  };


// LOAD SEQUENCE


  var updateInternals = function () {
    if (Targeter.isInDebugMode) {
      Targeter.internals.absolutePathWhitelist = ABSOLUTE_PATH_WHITELIST;
      Targeter.internals.classNames = TARGETABLE_CLASS_NAMES;
      Targeter.internals.defaultDomain = DEFAULT_DOMAIN;
      Targeter.internals.forcedOffers = FORCED_OFFERS;
      Targeter.internals.queryParameters = QUERY_PARAMETERS;
      Targeter.internals.regionalMboxQueue = regionalMboxQueue;
      Targeter.internals.serviceManifests = SERVICE_MANIFESTS;
      Targeter.internals.targetAccountConfigs = ADOBE_ACCOUNTS;
      Targeter.internals.testAccountWhitelist = TEST_ACCOUNT_WHITELIST;
      Targeter.internals.timeoutStatuses = TIMEOUT;
      Targeter.internals.params = profile;
      // Targeter.internals.config.final = config;
      Targeter.internals.uidParams = uidParams;
    }
  };


  /** Updates settings and performs necessary cleanup *after* scripts and libraries have been successfully loaded. */
  var finishUp = function () {
    isFullyInstantiated = true; // Ensures that Targeter is singleton so that it can't be instantiated more than once on a page.
    cleanUp({
      timeout: getTimingValues(config.safetyTimeout, startTime).remainingAdjusted,
      source: 'finishUp'
    });
    updateInternals();
    updateTimeline('end time', 'targeterEvent', {
      subtype: 'targeterBoundary'
    });
  };


  /**
   * Initializes required variables.
   *
   * @param  {Object}  instantiationConfig  The configuration for specific instance of Targeter object.
   */
  var initializeInternals = function(instantiationConfig) {
    setDebugMode();
    if (Targeter.isInDebugMode) {
      Targeter.internals = {
        timeline: [],
        config: {
          instantiation: persistCurrentObjectState(instantiationConfig),
          defaults: DEFAULT_CONFIG,
          queryParams: {},
          actual: config,
        }
      };
    }
    updateTimeline('Targeter loads and logs start time', 'targeterEvent', {
      subtype: 'targeterBoundary',
      timestamp: startTime, // we pass this here because it will be slightly more accurate than if generated from within updateTimeline
      markPerformance: true
    });
    handleTimeout('timeoutInitialized');
  };


  /**
   * Determines whether a timeout status point should be skipped for an active kill switch.
   *
   * @return  {Boolean}  Whether this kill switch requires that the timeout status point be skipped.
   */
  var killSwitchSkipsStatus = function(timeoutStatusKey) {
    var killSwitchExists = isDefined(config.killSwitch);
    var killSwitch = killSwitchExists ? KILL_SWITCHES[config.killSwitch] : null;
    return killSwitchExists
      ? killSwitch.timeoutBlackList.indexOf(timeoutStatusKey) > -1
      : false;
  };


  /**
   * Perform all necessary actions when Targeter has timed out.
   *
   * @param   {Object}  status  The timeout status object.
   * @param   {String}  source  The identifier used for timeline updates.
   */
  var doTimeout = function (status, source) {
    Targeter.cleanUp({
      source: source
    });
    readiness.timedOut = true;
    if (status.ensureRegionalMboxVisibility) ensureRegionalMboxVisibility();
  };


  /**
   * Determines whether a timeout status update is required.
   *
   * @param   {String}   statusKey  The timeout status key.
   * @param   {Object}   status     The timeout status object.
   * @return  {Boolean}             Whether a timeout status update is required.
   */
  var getTimeoutStatusUpdateRequired = function (statusKey, status) {
    return isDefined(status) // only set this status if it is valid/defined ...
      && !readiness.timedOut // ... and we haven't already timed out ...
      && !killSwitchSkipsStatus(statusKey); // ... and an active kill switch doesn't require that we skip it
  };


  /**
   * Updates the timeline when the timeout status gets updated and calls cleanup if necessary.
   *
   * @param   {Object}  status  The configuration object for the particular timeout status.
   */
  var handleTimeout = function (statusKey, mboxName) {
    mboxName = mboxName || '';
    var status = TIMEOUT[statusKey];
    var updateRequired = getTimeoutStatusUpdateRequired(statusKey, status);
    if (updateRequired) {
      var label = status.label.replace(/{mboxName}/, mboxName);
      var forcePageReveal = isDefined(status.forcePageReveal) ? status.forcePageReveal : false;
      var source = 'setTimeoutStatus (' + statusKey + ')';
      var timelineParams = {
        subtype: 'timeoutStatusUpdated',
        code: statusKey,
        isTimeout: status.isTimeout,
        triggersCleanUp: status.isTimeout, // we trigger cleanup only for timeouts
        markPerformance: status.isTimeout, // we mark performance only for timeouts
        forcePageReveal: forcePageReveal
      };
      updateTimeline(label, 'targeterEvent', timelineParams);
      if (status.isTimeout) doTimeout(status, source);
      if (forcePageReveal) setPageOpacity('1', source);
    }
  };


  /**
   * Parses input string (serialized JSON) and returns valid JSON when possible.
   *
   * @param   {String}  input  The input string which the method will attempt to parse as JSON.
   * @return  {Object}         The deserialized JSON object returned when the serialized data has been parsed, or undefined if the input is malformed.
   */
  


  /**
  * Defines global variables as required by Adobe Target to (1) configure global settings and (2) deliver profile data as the return value of the `targetPageParams` function.
  *
  * @param   {Object}  targetPageParameters  The object containing required data to support personalization for the current user and page, whose required properties are determined by the `config` object.
  */
  var initializeTargetVariables = function (targetPageParameters) {
    window.targetGlobalSettings = window.targetGlobalSettings || {};
    window.targetGlobalSettings.enabled = false;
    window.targetGlobalSettings.urlSizeLimit=4500;
    window.targetGlobalSettings.globalMboxAutoCreate = false;
    window.targetPageParamsAll = 
  }


  /** Creates the namespaces and methods required to post metrics from Targeter using `ctm.track()`. */
  var initializeTracking = function () {
    var ctmNamespaceExists = isDefined(window.ctm);
    var ctmTrackingMethodHasBeenDefined = ctmNamespaceExists && isDefined(ctm.track);
    if (!ctmTrackingMethodHasBeenDefined) {
      if (!ctmNamespaceExists) window.ctm = {};
      if (!isDefined(ctm.trackQueue)) ctm.trackQueue = [];
      ctm.track = 
    }
  };


  /**
   * Iterates through defined passthrough properties and extends the input parameter object that gets sent to Adobe Target (if and as required).
   *
   * @param   {Object}  targetPageParameters  The object that will be passed to Adobe Target as the return value of `window.targetPageParams`.
   */
  var handlePassthroughProperties = function (targetPageParameters) {
    /**
     * Returns boolean indicating whether data should be omitted from Adobe request based on the property configuration object.
     *
     * @param   {Object}   prop       The object that represents a passthrough property and is a member of the `PASSTHROUGH_PROPERTIES` collection.
     * @param   {*}        propValue  The value for the specified passthrough property.
     * @return  {Boolean}             Whether the parameter object that gets sent to Adobe Target should be updated for the specified property.
     */
    var updateRequired = function (prop, propValue) {
      var allowEmptyStrings = (!isDefined(prop.allowsEmptyStrings) || prop.allowsEmptyStrings);
      if (!allowEmptyStrings) return propValue.length > 0;
      return true;
    };
    PASSTHROUGH_PROPERTIES.forEach(function (prop) {
      if (isDefined(config[prop.key])) {
        var propValue = getPassthroughPropertyValue(prop);
        if (isDefined(propValue)) {
          if (updateRequired(prop, propValue)) targetPageParameters[prop.key] = propValue;
        }
      }
    });
  };


  /**
   * Retrieves the value for a passthrough property and applies any methods required to ensure the value is well-formed and valid.
   *
   * @param  {Object}    prop                  The object representing a pass-through property.
   * @param  {String}    prop.key              The name of the property.
   * @param  {Function}  prop.parseJson        (optional) Whether to ensure the property is well-formed JSON that can be parsed.
   * @param  {Function}  prop.validate         (optional) The method to ensure that the property value is valid.
   * @param  {Object}    prop.validationError  (optional) The object used to update the timeline when validation fails; required when `prop.validate` is set.
   * @param  {Object}    prop.parseError       (optional) The object used to update the timeline when JSON parsing fails; required when `prop.parseJson` is `true`.
   * @return {*}                               The value if it is well-formed and valid; otherwise, `undefined`.
   */
  var getPassthroughPropertyValue = function (prop) {
    var requiresValidation = (isDefined(prop.validate));
    var configValue = config[prop.key]; // method assumes this will be defined; the test is in the caller
    var propValue = prop.isSerializedJson ? deserializeJson(configValue) : configValue; // returns `undefined` when input can't be parsed
    var isNotParseable = prop.isSerializedJson && !isDefined(propValue);
    if (isNotParseable) {
      updateTimeline(prop.parseError.message, prop.parseError.type, prop.parseError.parameters);
      return undefined;
    };
    if (requiresValidation) {
      if (prop.validate(propValue)) {
        return propValue;
      } else {
        updateTimeline(prop.validationError.message, prop.validationError.type, prop.validationError.parameters);
        return undefined;
      }
    } else { // just pass it through when validation not required
      return propValue;
    }
  };


  /**
   * Initializes required variables.
   *
   * @param  {Object}  instantiationConfig  The configuration for specific instance of Targeter object.
   */
  var initializeVariables = function (instantiationConfig) {
    var targetPageParameters = { profile: profile };
    initializeTargetVariables(targetPageParameters);
    initializeTracking();
    setJourneyStep();

    /** Overrides properties with values provided via query parameters (for testing and automation). */
    instantiationConfig = overrideConfigValues(instantiationConfig, QUERY_PARAMETERS);
    instantiationConfig = sanitizeConfig(instantiationConfig, { safetyTimeout: Number });
    mergeConfigObjects(config, DEFAULT_CONFIG, instantiationConfig);
    handlePassthroughProperties(targetPageParameters);
    if (config.async === false) log('warn', 'WARNING: When `async` is false, the safety timeout is ignored and there is a slight risk of an indefinite hang, especially with config `delayFordata` set to `true`.');
    applyHideMethod(config.hideMethod);
    setTargetAccount(config);
  };


  /** Loads the required scripts. */
  var loadScripts = function() {
    injectVisitor();
    updateTimeline('Targeter ready to make UID request', 'targetEvent', {
      authStatusIsSynced: cdc.sso.authStatusIsSynced,
      subtype: 'targeterUIDRequestReady'
    });
    makeUidRequest();
  };


  /**
   * Removes the element having ID attribute of "at-id-body-style" as required.
   *
   * @return  {Boolean}  Whether it was necessary to remove the element.
   */
  var removeBodyHideStyleTag = function() {
    var requiresRemoval = config.async && config.hideMethod.indexOf('page') > -1;
    if (requiresRemoval) {
      setTimeout(function () {
        var bhTag = document.getElementById('at-id-body-style');
        if (bhTag !== null) bhTag.parentNode.removeChild(bhTag);
      }, 350);
    }
    return requiresRemoval;
  };


  /**
  * Updates element styles as required to ensure a good user experience.
  *
  * @param  {Object}  params  The configuration object used for timeline points and performance marks.
  */
  var updateElementStyles = function (params) {
    var timelineParams = {
      subtype: 'elementStylesUpdated',
      initiator: params.source || 'unknown',
      removedTargetableClasses: true,
      revealedRegionalMboxes: false,
      removedBodyHideStyleTag: false,
      domBodyExists: !!document.body,
      timeoutStatusCode: params.timeoutStatusCode || null
    };
    removeTargetableClasses(params.source);
    timelineParams.removedBodyHideStyleTag = removeBodyHideStyleTag(); // only if `async:true` and `hideMethod:(page|pageOpaque)`
    if (Targeter.isInDebugMode) {
      var regionalMboxes = getAllRegionalMboxes();
      timelineParams.regionalMboxCount = regionalMboxes.length;
      timelineParams.visibleRegionalMboxCount = regionalMboxes.filter(.length;
    }
    if (params.revealRegionalMboxes) {
      var regionalMboxId = params.regionalMboxId;
      revealRegionalMboxes(regionalMboxId);
      timelineParams.revealedRegionalMboxes = true;
      if (regionalMboxId) timelineParams.revealedRegionalMboxId = regionalMboxId;
    }
    updateTimeline('updated element styles', 'targeterEvent', timelineParams);
  };


  /** Polls to detect regional mbox existence in order to reveal their content at first opportunity when safety timeout is reached. */
  var pollToCleanUp = function() {
    var timeIncrement = 100;
    pollingInterval = setInterval(function() {
      var mboxCount = getAllRegionalMboxes().length;
      var timeRemaining = getTimingValues(config.safetyTimeout, startTime).remainingAdjusted;
      updateTimeline('polled for elements with class `mboxDefault`', 'targeterEvent', {
      	mboxCount: mboxCount,
      	subtype: 'pollingEvent'
      });
      var conditionsMet = mboxCount > 0 && timeRemaining <= 1
        && config.killSwitch !== 'timeoutBeforeAdobeLibrary';
      if(conditionsMet || config.killSwitch === 'timeoutBeforeDomInteractive') {
        handleTimeout('timeoutBeforeDomInteractive');
        clearInterval(pollingInterval);
      }
      if (document.readyState === 'interactive') clearInterval(pollingInterval);
    }, timeIncrement);
  };


  /**
   * Initializes variables, handles configuration, and loads required style and script assets
   *
   * @param  {Object}  instantiationConfig  The configuration for specific instance of Targeter object.
   */
  var load = function(instantiationConfig) {
    instantiationConfig.loadBlueKai = false;
    if (!isFullyInstantiated) {                                 // Checks property to prevent multiple calls to `Targeter.load` on a page.
      initializeInternals(instantiationConfig);
      initializeVariables(instantiationConfig);
      pollToCleanUp();
      loadScripts();
      finishUp();
    } else { // this is the first call
      log('warn', 'WARNING: Targeter already exists and is a singleton, cannot re-instantiate.');
      return window.Targeter;
    };
  };


  /** Returns public methods when object gets instantiated */
  return {
    load: load,
    cleanUp: cleanUp,
    markPerformance: markPerformance,
    callbacks: publicMethods,
  };

})(window);