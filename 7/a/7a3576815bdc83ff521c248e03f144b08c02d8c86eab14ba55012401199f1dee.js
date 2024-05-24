(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('crypto'), require('buffer')) :
	typeof define === 'function' && define.amd ? define('keycloak', ['crypto', 'buffer'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Keycloak = factory(global.require$$0, global.require$$1));
})(this, (function (require$$0, require$$1) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	
	
	var es6Promise_min = {exports: {}};

	(function (module, exports) {
		!commonjsGlobal,function(){nction n(t){W=t;}){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")} new TypeError("You must pass a resolver function as the first argument to the promise constructor")}r K=void 0;K=Array.isArray?Array.isArray:var L=K,N=0,U=void 0,W=void 0,z=B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof commonjsRequire?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=),nt=);return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt}); 
	} (es6Promise_min));

	var es6Promise_minExports = es6Promise_min.exports;

	var base64Js = {};

	base64Js.byteLength = byteLength;
	base64Js.toByteArray = toByteArray;
	base64Js.fromByteArray = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}

	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;

	
	// base64 is 4/3 + up to two characters of the original data
	
	
	
	
	
	
	var sha256$1 = {exports: {}};

	/**
	 * [js-sha256]{@link https://github.com/emn178/js-sha256}
	 *
	 * @version 0.10.1
	 * @author Chen, Yi-Cyuan [emn178@gmail.com]
	 * @copyright Chen, Yi-Cyuan 2014-2023
	 * @license MIT
	 */

	(function (module) {
		/*jslint bitwise: true */
		(function () {

		  var ERROR = 'input is invalid type';
		  var WINDOW = typeof window === 'object';
		  var root = WINDOW ? window : {};
		  if (root.JS_SHA256_NO_WINDOW) {
		    WINDOW = false;
		  }
		  var WEB_WORKER = !WINDOW && typeof self === 'object';
		  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
		  if (NODE_JS) {
		    root = commonjsGlobal;
		  } else if (WEB_WORKER) {
		    root = self;
		  }
		  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && 'object' === 'object' && module.exports;
		  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
		  var HEX_CHARS = '0123456789abcdef'.split('');
		  var EXTRA = [-2147483648, 8388608, 32768, 128];
		  var SHIFT = [24, 16, 8, 0];
		  var K = [
		    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
		    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
		    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
		    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
		    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
		    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
		    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
		    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
		  ];
		  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

		  var blocks = [];

		  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
		    Array.isArray = 
		  }

		  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
		    ArrayBuffer.isView = 
		  }

		  var createOutputMethod = 

		  var createMethod = 

		  var nodeWrap = function (method, is224) {
		    var crypto = require$$0;
		    var Buffer = require$$1.Buffer;
		    var algorithm = is224 ? 'sha224' : 'sha256';
		    var bufferFrom;
		    if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
		      bufferFrom = Buffer.from;
		    } else {
		      bufferFrom = 
		    }
		    var nodeMethod = function (message) {
		      if (typeof message === 'string') {
		        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
		      } else {
		        if (message === null || message === undefined) {
		          throw new Error(ERROR);
		        } else if (message.constructor === ArrayBuffer) {
		          message = new Uint8Array(message);
		        }
		      }
		      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
		        message.constructor === Buffer) {
		        return crypto.createHash(algorithm).update(bufferFrom(message)).digest('hex');
		      } else {
		        return method(message);
		      }
		    };
		    return nodeMethod;
		  };

		  var createHmacOutputMethod = 

		  var createHmacMethod = 

		  
		  Sha256.prototype.update = 

		  Sha256.prototype.finalize = 

		  Sha256.prototype.hash = function () {
		    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
		      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

		    for (j = 16; j < 64; ++j) {
		      // rightrotate
		      t1 = blocks[j - 15];
		      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
		      t1 = blocks[j - 2];
		      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
		      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
		    }

		    bc = b & c;
		    for (j = 0; j < 64; j += 4) {
		      if (this.first) {
		        if (this.is224) {
		          ab = 300032;
		          t1 = blocks[0] - 1413257819;
		          h = t1 - 150054599 << 0;
		          d = t1 + 24177077 << 0;
		        } else {
		          ab = 704751109;
		          t1 = blocks[0] - 210244248;
		          h = t1 - 1521486534 << 0;
		          d = t1 + 143694565 << 0;
		        }
		        this.first = false;
		      } else {
		        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
		        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
		        ab = a & b;
		        maj = ab ^ (a & c) ^ bc;
		        ch = (e & f) ^ (~e & g);
		        t1 = h + s1 + ch + K[j] + blocks[j];
		        t2 = s0 + maj;
		        h = d + t1 << 0;
		        d = t1 + t2 << 0;
		      }
		      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
		      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
		      da = d & a;
		      maj = da ^ (d & b) ^ ab;
		      ch = (h & e) ^ (~h & f);
		      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
		      t2 = s0 + maj;
		      g = c + t1 << 0;
		      c = t1 + t2 << 0;
		      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
		      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
		      cd = c & d;
		      maj = cd ^ (c & a) ^ da;
		      ch = (g & h) ^ (~g & e);
		      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
		      t2 = s0 + maj;
		      f = b + t1 << 0;
		      b = t1 + t2 << 0;
		      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
		      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
		      bc = b & c;
		      maj = bc ^ (b & d) ^ cd;
		      ch = (f & g) ^ (~f & h);
		      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
		      t2 = s0 + maj;
		      e = a + t1 << 0;
		      a = t1 + t2 << 0;
		      this.chromeBugWorkAround = true;
		    }

		    this.h0 = this.h0 + a << 0;
		    this.h1 = this.h1 + b << 0;
		    this.h2 = this.h2 + c << 0;
		    this.h3 = this.h3 + d << 0;
		    this.h4 = this.h4 + e << 0;
		    this.h5 = this.h5 + f << 0;
		    this.h6 = this.h6 + g << 0;
		    this.h7 = this.h7 + h << 0;
		  };

		  Sha256.prototype.hex = 

		  Sha256.prototype.toString = Sha256.prototype.hex;

		  Sha256.prototype.digest = 

		  Sha256.prototype.array = Sha256.prototype.digest;

		  Sha256.prototype.arrayBuffer = 

		  		  HmacSha256.prototype = new Sha256();

		  HmacSha256.prototype.finalize = 

		  var exports = createMethod();
		  exports.sha256 = exports;
		  exports.sha224 = createMethod(true);
		  exports.sha256.hmac = createHmacMethod();
		  exports.sha224.hmac = createHmacMethod(true);

		  if (COMMON_JS) {
		    module.exports = exports;
		  } else {
		    root.sha256 = exports.sha256;
		    root.sha224 = exports.sha224;
		  }
		})(); 
	} (sha256$1));

	var sha256Exports = sha256$1.exports;
	var sha256 = /*@__PURE__*/getDefaultExportFromCjs(sha256Exports);

		InvalidTokenError.prototype.name = "InvalidTokenError";
	function b64DecodeUnicode(str) {
	    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
	        let code = p.charCodeAt(0).toString(16).toUpperCase();
	        if (code.length < 2) {
	            code = "0" + code;
	        }
	        return "%" + code;
	    }));
	}
	function base64UrlDecode(str) {
	    let output = str.replace(/-/g, "+").replace(/_/g, "/");
	    switch (output.length % 4) {
	        case 0:
	            break;
	        case 2:
	            output += "==";
	            break;
	        case 3:
	            output += "=";
	            break;
	        default:
	            throw new Error("base64 string is not of the correct length");
	    }
	    try {
	        return b64DecodeUnicode(output);
	    }
	    catch (err) {
	        return atob(output);
	    }
	}
	function jwtDecode(token, options) {
	    if (typeof token !== "string") {
	        throw new InvalidTokenError("Invalid token specified: must be a string");
	    }
	    options || (options = {});
	    const pos = options.header === true ? 0 : 1;
	    const part = token.split(".")[pos];
	    if (typeof part !== "string") {
	        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
	    }
	    let decoded;
	    try {
	        decoded = base64UrlDecode(part);
	    }
	    catch (e) {
	        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
	    }
	    try {
	        return JSON.parse(decoded);
	    }
	    catch (e) {
	        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
	    }
	}

	if (typeof es6Promise_minExports.Promise === 'undefined') {
	    throw Error('Keycloak requires an environment that supports Promises. Make sure that you include the appropriate polyfill.');
	}

	function Keycloak (config) {
	    if (!(this instanceof Keycloak)) {
	        throw new Error("The 'Keycloak' constructor must be invoked with 'new'.")
	    }

	    var kc = this;
	    var adapter;
	    var refreshQueue = [];
	    var callbackStorage;

	    var loginIframe = {
	        enable: true,
	        callbackList: [],
	        interval: 5
	    };

	    var scripts = document.getElementsByTagName('script');
	    for (var i = 0; i < scripts.length; i++) {
	        if ((scripts[i].src.indexOf('keycloak.js') !== -1 || scripts[i].src.indexOf('keycloak.min.js') !== -1) && scripts[i].src.indexOf('version=') !== -1) {
	            kc.iframeVersion = scripts[i].src.substring(scripts[i].src.indexOf('version=') + 8).split('&')[0];
	        }
	    }

	    var useNonce = true;
	    var logInfo = createLogger(console.info);
	    var logWarn = createLogger(console.warn);

	    kc.init = function (initOptions) {
	        if (kc.didInitialize) {
	            throw new Error("A 'Keycloak' instance can only be initialized once.");
	        }

	        kc.didInitialize = true;

	        kc.authenticated = false;

	        callbackStorage = createCallbackStorage();
	        var adapters = ['default', 'cordova', 'cordova-native'];

	        if (initOptions && adapters.indexOf(initOptions.adapter) > -1) {
	            adapter = loadAdapter(initOptions.adapter);
	        } else if (initOptions && typeof initOptions.adapter === "object") {
	            adapter = initOptions.adapter;
	        } else {
	            if (window.Cordova || window.cordova) {
	                adapter = loadAdapter('cordova');
	            } else {
	                adapter = loadAdapter();
	            }
	        }

	        if (initOptions) {
	            if (typeof initOptions.useNonce !== 'undefined') {
	                useNonce = initOptions.useNonce;
	            }

	            if (typeof initOptions.checkLoginIframe !== 'undefined') {
	                loginIframe.enable = initOptions.checkLoginIframe;
	            }

	            if (initOptions.checkLoginIframeInterval) {
	                loginIframe.interval = initOptions.checkLoginIframeInterval;
	            }

	            if (initOptions.onLoad === 'login-required') {
	                kc.loginRequired = true;
	            }

	            if (initOptions.responseMode) {
	                if (initOptions.responseMode === 'query' || initOptions.responseMode === 'fragment') {
	                    kc.responseMode = initOptions.responseMode;
	                } else {
	                    throw 'Invalid value for responseMode';
	                }
	            }

	            if (initOptions.flow) {
	                switch (initOptions.flow) {
	                    case 'standard':
	                        kc.responseType = 'code';
	                        break;
	                    case 'implicit':
	                        kc.responseType = 'id_token token';
	                        break;
	                    case 'hybrid':
	                        kc.responseType = 'code id_token token';
	                        break;
	                    default:
	                        throw 'Invalid value for flow';
	                }
	                kc.flow = initOptions.flow;
	            }

	            if (initOptions.timeSkew != null) {
	                kc.timeSkew = initOptions.timeSkew;
	            }

	            if(initOptions.redirectUri) {
	                kc.redirectUri = initOptions.redirectUri;
	            }

	            if (initOptions.silentCheckSsoRedirectUri) {
	                kc.silentCheckSsoRedirectUri = initOptions.silentCheckSsoRedirectUri;
	            }

	            if (typeof initOptions.silentCheckSsoFallback === 'boolean') {
	                kc.silentCheckSsoFallback = initOptions.silentCheckSsoFallback;
	            } else {
	                kc.silentCheckSsoFallback = true;
	            }

	            if (initOptions.pkceMethod) {
	                if (initOptions.pkceMethod !== "S256") {
	                    throw 'Invalid value for pkceMethod';
	                }
	                kc.pkceMethod = initOptions.pkceMethod;
	            }

	            if (typeof initOptions.enableLogging === 'boolean') {
	                kc.enableLogging = initOptions.enableLogging;
	            } else {
	                kc.enableLogging = false;
	            }

	            if (typeof initOptions.scope === 'string') {
	                kc.scope = initOptions.scope;
	            }

	            if (typeof initOptions.acrValues === 'string') {
	                kc.acrValues = initOptions.acrValues;
	            }

	            if (typeof initOptions.messageReceiveTimeout === 'number' && initOptions.messageReceiveTimeout > 0) {
	                kc.messageReceiveTimeout = initOptions.messageReceiveTimeout;
	            } else {
	                kc.messageReceiveTimeout = 10000;
	            }
	        }

	        if (!kc.responseMode) {
	            kc.responseMode = 'fragment';
	        }
	        if (!kc.responseType) {
	            kc.responseType = 'code';
	            kc.flow = 'standard';
	        }

	        var promise = createPromise();

	        var initPromise = createPromise();
	        initPromise.promise.then(function() {
	            kc.onReady && kc.onReady(kc.authenticated);
	            promise.setSuccess(kc.authenticated);
	        }).catch(function(error) {
	            promise.setError(error);
	        });

	        var configPromise = loadConfig();

	        function onLoad() {
	            var doLogin = function(prompt) {
	                if (!prompt) {
	                    options.prompt = 'none';
	                }

	                if (initOptions && initOptions.locale) {
	                    options.locale = initOptions.locale;
	                }
	                kc.login(options).then(.catch(function (error) {
	                    initPromise.setError(error);
	                });
	            };

	            var checkSsoSilently = function() {
	                var ifrm = document.createElement("iframe");
	                var src = kc.createLoginUrl({prompt: 'none', redirectUri: kc.silentCheckSsoRedirectUri});
	                ifrm.setAttribute("src", src);
	                ifrm.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-scripts allow-same-origin");
	                ifrm.setAttribute("title", "keycloak-silent-check-sso");
	                ifrm.style.display = "none";
	                document.body.appendChild(ifrm);

	                var messageCallback = function(event) {
	                    if (event.origin !== window.location.origin || ifrm.contentWindow !== event.source) {
	                        return;
	                    }

	                    var oauth = parseCallback(event.data);
	                    processCallback(oauth, initPromise);

	                    document.body.removeChild(ifrm);
	                    window.removeEventListener("message", messageCallback);
	                };

	                window.addEventListener("message", messageCallback);
	            };

	            var options = {};
	            switch (initOptions.onLoad) {
	                case 'check-sso':
	                    if (loginIframe.enable) {
	                        setupCheckLoginIframe().then(function() {
	                            checkLoginIframe().then(function (unchanged) {
	                                if (!unchanged) {
	                                    kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
	                                } else {
	                                    initPromise.setSuccess();
	                                }
	                            }).catch(function (error) {
	                                initPromise.setError(error);
	                            });
	                        });
	                    } else {
	                        kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
	                    }
	                    break;
	                case 'login-required':
	                    doLogin(true);
	                    break;
	                default:
	                    throw 'Invalid value for onLoad';
	            }
	        }

	        function processInit() {
	            var callback = parseCallback(window.location.href);

	            if (callback) {
	                window.history.replaceState(window.history.state, null, callback.newUrl);
	            }

	            if (callback && callback.valid) {
	                return setupCheckLoginIframe().then(.catch(function (error) {
	                    initPromise.setError(error);
	                });
	            } else if (initOptions) {
	                if (initOptions.token && initOptions.refreshToken) {
	                    setToken(initOptions.token, initOptions.refreshToken, initOptions.idToken);

	                    if (loginIframe.enable) {
	                        setupCheckLoginIframe().then(function() {
	                            checkLoginIframe().then(function (unchanged) {
	                                if (unchanged) {
	                                    kc.onAuthSuccess && kc.onAuthSuccess();
	                                    initPromise.setSuccess();
	                                    scheduleCheckIframe();
	                                } else {
	                                    initPromise.setSuccess();
	                                }
	                            }).catch(function (error) {
	                                initPromise.setError(error);
	                            });
	                        });
	                    } else {
	                        kc.updateToken(-1).then(.catch(function(error) {
	                            kc.onAuthError && kc.onAuthError();
	                            if (initOptions.onLoad) {
	                                onLoad();
	                            } else {
	                                initPromise.setError(error);
	                            }
	                        });
	                    }
	                } else if (initOptions.onLoad) {
	                    onLoad();
	                } else {
	                    initPromise.setSuccess();
	                }
	            } else {
	                initPromise.setSuccess();
	            }
	        }

	        function domReady() {
	            var promise = createPromise();

	            var checkReadyState = function () {
	                if (document.readyState === 'interactive' || document.readyState === 'complete') {
	                    document.removeEventListener('readystatechange', checkReadyState);
	                    promise.setSuccess();
	                }
	            };
	            document.addEventListener('readystatechange', checkReadyState);

	            checkReadyState(); // just in case the event was already fired and we missed it (in case the init is done later than at the load time, i.e. it's done from code)

	            return promise.promise;
	        }

	        configPromise.then(function () {
	            domReady()
	                .then(check3pCookiesSupported)
	                .then(processInit)
	                .catch(function (error) {
	                    promise.setError(error);
	                });
	        });
	        configPromise.catch(function (error) {
	            promise.setError(error);
	        });

	        return promise.promise;
	    };

	    kc.login = function (options) {
	        return adapter.login(options);
	    };

	    function generateRandomData(len) {
	        // use web crypto APIs if possible
	        var array = null;
	        var crypto = window.crypto || window.msCrypto;
	        if (crypto && crypto.getRandomValues && window.Uint8Array) {
	            array = new Uint8Array(len);
	            crypto.getRandomValues(array);
	            return array;
	        }

	        // fallback to Math random
	        array = new Array(len);
	        for (var j = 0; j < array.length; j++) {
	            array[j] = Math.floor(256 * Math.random());
	        }
	        return array;
	    }

	    
	    function generateRandomString(len, alphabet){
	        var randomData = generateRandomData(len);
	        var chars = new Array(len);
	        for (var i = 0; i < len; i++) {
	            chars[i] = alphabet.charCodeAt(randomData[i] % alphabet.length);
	        }
	        return String.fromCharCode.apply(null, chars);
	    }

	    function generatePkceChallenge(pkceMethod, codeVerifier) {
	        switch (pkceMethod) {
	            // The use of the "plain" method is considered insecure and therefore not supported.
	            case "S256":
	                // hash codeVerifier, then encode as url-safe base64 without padding
	                var hashBytes = new Uint8Array(sha256.arrayBuffer(codeVerifier));
	                var encodedHash = base64Js.fromByteArray(hashBytes)
	                    .replace(/\+/g, '-')
	                    .replace(/\//g, '_')
	                    .replace(/\=/g, '');
	                return encodedHash;
	            default:
	                throw 'Invalid value for pkceMethod';
	        }
	    }

	    function buildClaimsParameter(requestedAcr){
	        var claims = {
	            id_token: {
	                acr: requestedAcr
	            }
	        };
	        return JSON.stringify(claims);
	    }

	    kc.createLoginUrl = function(options) {
	        var state = createUUID();
	        var nonce = createUUID();

	        var redirectUri = adapter.redirectUri(options);

	        var callbackState = {
	            state: state,
	            nonce: nonce,
	            redirectUri: encodeURIComponent(redirectUri)
	        };

	        if (options && options.prompt) {
	            callbackState.prompt = options.prompt;
	        }

	        var baseUrl;
	        if (options && options.action == 'register') {
	            baseUrl = kc.endpoints.register();
	        } else {
	            baseUrl = kc.endpoints.authorize();
	        }

	        var scope = options && options.scope || kc.scope;
	        if (!scope) {
	            // if scope is not set, default to "openid"
	            scope = "openid";
	        } else if (scope.indexOf("openid") === -1) {
	            // if openid scope is missing, prefix the given scopes with it
	            scope = "openid " + scope;
	        }

	        var url = baseUrl
	            + '?client_id=' + encodeURIComponent(kc.clientId)
	            + '&redirect_uri=' + encodeURIComponent(redirectUri)
	            + '&state=' + encodeURIComponent(state)
	            + '&response_mode=' + encodeURIComponent(kc.responseMode)
	            + '&response_type=' + encodeURIComponent(kc.responseType)
	            + '&scope=' + encodeURIComponent(scope);
	        if (useNonce) {
	            url = url + '&nonce=' + encodeURIComponent(nonce);
	        }

	        if (options && options.prompt) {
	            url += '&prompt=' + encodeURIComponent(options.prompt);
	        }

	        if (options && options.maxAge) {
	            url += '&max_age=' + encodeURIComponent(options.maxAge);
	        }

	        if (options && options.loginHint) {
	            url += '&login_hint=' + encodeURIComponent(options.loginHint);
	        }

	        if (options && options.idpHint) {
	            url += '&kc_idp_hint=' + encodeURIComponent(options.idpHint);
	        }

	        if (options && options.action && options.action != 'register') {
	            url += '&kc_action=' + encodeURIComponent(options.action);
	        }

	        if (options && options.locale) {
	            url += '&ui_locales=' + encodeURIComponent(options.locale);
	        }

	        if (options && options.acr) {
	            var claimsParameter = buildClaimsParameter(options.acr);
	            url += '&claims=' + encodeURIComponent(claimsParameter);
	        }

	        if ((options && options.acrValues) || kc.acrValues) {
	            url += '&acr_values=' + encodeURIComponent(options.acrValues || kc.acrValues);
	        }

	        if (kc.pkceMethod) {
	            var codeVerifier = generateCodeVerifier(96);
	            callbackState.pkceCodeVerifier = codeVerifier;
	            var pkceChallenge = generatePkceChallenge(kc.pkceMethod, codeVerifier);
	            url += '&code_challenge=' + pkceChallenge;
	            url += '&code_challenge_method=' + kc.pkceMethod;
	        }

	        callbackStorage.add(callbackState);

	        return url;
	    };

	    kc.logout = function(options) {
	        return adapter.logout(options);
	    };

	    kc.createLogoutUrl = function(options) {
	        var url = kc.endpoints.logout()
	            + '?client_id=' + encodeURIComponent(kc.clientId)
	            + '&post_logout_redirect_uri=' + encodeURIComponent(adapter.redirectUri(options, false));

	        if (kc.idToken) {
	            url += '&id_token_hint=' + encodeURIComponent(kc.idToken);
	        }

	        return url;
	    };

	    kc.register = 

	    kc.createRegisterUrl = function(options) {
	        if (!options) {
	            options = {};
	        }
	        options.action = 'register';
	        return kc.createLoginUrl(options);
	    };

	    kc.createAccountUrl = function(options) {
	        var realm = getRealmUrl();
	        var url = undefined;
	        if (typeof realm !== 'undefined') {
	            url = realm
	            + '/account'
	            + '?referrer=' + encodeURIComponent(kc.clientId)
	            + '&referrer_uri=' + encodeURIComponent(adapter.redirectUri(options));
	        }
	        return url;
	    };

	    kc.accountManagement = 

	    kc.hasRealmRole = 

	    kc.hasResourceRole = function(role, resource) {
	        if (!kc.resourceAccess) {
	            return false;
	        }

	        var access = kc.resourceAccess[resource || kc.clientId];
	        return !!access && access.roles.indexOf(role) >= 0;
	    };

	    kc.loadUserProfile = function() {
	        var url = getRealmUrl() + '/account';
	        var req = new XMLHttpRequest();
	        req.open('GET', url, true);
	        req.setRequestHeader('Accept', 'application/json');
	        req.setRequestHeader('Authorization', 'bearer ' + kc.token);

	        var promise = createPromise();

	        req.onreadystatechange = function () {
	            if (req.readyState == 4) {
	                if (req.status == 200) {
	                    kc.profile = JSON.parse(req.responseText);
	                    promise.setSuccess(kc.profile);
	                } else {
	                    promise.setError();
	                }
	            }
	        };

	        req.send();

	        return promise.promise;
	    };

	    kc.loadUserInfo = function() {
	        var url = kc.endpoints.userinfo();
	        var req = new XMLHttpRequest();
	        req.open('GET', url, true);
	        req.setRequestHeader('Accept', 'application/json');
	        req.setRequestHeader('Authorization', 'bearer ' + kc.token);

	        var promise = createPromise();

	        req.onreadystatechange = function () {
	            if (req.readyState == 4) {
	                if (req.status == 200) {
	                    kc.userInfo = JSON.parse(req.responseText);
	                    promise.setSuccess(kc.userInfo);
	                } else {
	                    promise.setError();
	                }
	            }
	        };

	        req.send();

	        return promise.promise;
	    };

	    kc.isTokenExpired = function(minValidity) {
	        if (!kc.tokenParsed || (!kc.refreshToken && kc.flow != 'implicit' )) {
	            throw 'Not authenticated';
	        }

	        if (kc.timeSkew == null) {
	            logInfo('[KEYCLOAK] Unable to determine if token is expired as timeskew is not set');
	            return true;
	        }

	        var expiresIn = kc.tokenParsed['exp'] - Math.ceil(new Date().getTime() / 1000) + kc.timeSkew;
	        if (minValidity) {
	            if (isNaN(minValidity)) {
	                throw 'Invalid minValidity';
	            }
	            expiresIn -= minValidity;
	        }
	        return expiresIn < 0;
	    };

	    kc.updateToken = function(minValidity) {
	        var promise = createPromise();

	        if (!kc.refreshToken) {
	            promise.setError();
	            return promise.promise;
	        }

	        minValidity = minValidity || 5;

	        var exec = function() {
	            var refreshToken = false;
	            if (minValidity == -1) {
	                refreshToken = true;
	                logInfo('[KEYCLOAK] Refreshing token: forced refresh');
	            } else if (!kc.tokenParsed || kc.isTokenExpired(minValidity)) {
	                refreshToken = true;
	                logInfo('[KEYCLOAK] Refreshing token: token expired');
	            }

	            if (!refreshToken) {
	                promise.setSuccess(false);
	            } else {
	                var params = 'grant_type=refresh_token&' + 'refresh_token=' + kc.refreshToken;
	                var url = kc.endpoints.token();

	                refreshQueue.push(promise);

	                if (refreshQueue.length == 1) {
	                    var req = new XMLHttpRequest();
	                    req.open('POST', url, true);
	                    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	                    req.withCredentials = true;

	                    params += '&client_id=' + encodeURIComponent(kc.clientId);

	                    var timeLocal = new Date().getTime();

	                    req.onreadystatechange = function () {
	                        if (req.readyState == 4) {
	                            if (req.status == 200) {
	                                logInfo('[KEYCLOAK] Token refreshed');

	                                timeLocal = (timeLocal + new Date().getTime()) / 2;

	                                var tokenResponse = JSON.parse(req.responseText);

	                                setToken(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], timeLocal);

	                                kc.onAuthRefreshSuccess && kc.onAuthRefreshSuccess();
	                                for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
	                                    p.setSuccess(true);
	                                }
	                            } else {
	                                logWarn('[KEYCLOAK] Failed to refresh token');

	                                if (req.status == 400) {
	                                    kc.clearToken();
	                                }

	                                kc.onAuthRefreshError && kc.onAuthRefreshError();
	                                for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
	                                    p.setError(true);
	                                }
	                            }
	                        }
	                    };

	                    req.send(params);
	                }
	            }
	        };

	        if (loginIframe.enable) {
	            var iframePromise = checkLoginIframe();
	            iframePromise.then(.catch(function(error) {
	                promise.setError(error);
	            });
	        } else {
	            exec();
	        }

	        return promise.promise;
	    };

	    kc.clearToken = function() {
	        if (kc.token) {
	            setToken(null, null, null);
	            kc.onAuthLogout && kc.onAuthLogout();
	            if (kc.loginRequired) {
	                kc.login();
	            }
	        }
	    };

	    function getRealmUrl() {
	        if (typeof kc.authServerUrl !== 'undefined') {
	            if (kc.authServerUrl.charAt(kc.authServerUrl.length - 1) == '/') {
	                return kc.authServerUrl + 'realms/' + encodeURIComponent(kc.realm);
	            } else {
	                return kc.authServerUrl + '/realms/' + encodeURIComponent(kc.realm);
	            }
	        } else {
	            return undefined;
	        }
	    }

	    function getOrigin() {
	        if (!window.location.origin) {
	            return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
	        } else {
	            return window.location.origin;
	        }
	    }

	    function processCallback(oauth, promise) {
	        var code = oauth.code;
	        var error = oauth.error;
	        var prompt = oauth.prompt;

	        var timeLocal = new Date().getTime();

	        if (oauth['kc_action_status']) {
	            kc.onActionUpdate && kc.onActionUpdate(oauth['kc_action_status']);
	        }

	        if (error) {
	            if (prompt != 'none') {
	                var errorData = { error: error, error_description: oauth.error_description };
	                kc.onAuthError && kc.onAuthError(errorData);
	                promise && promise.setError(errorData);
	            } else {
	                promise && promise.setSuccess();
	            }
	            return;
	        } else if ((kc.flow != 'standard') && (oauth.access_token || oauth.id_token)) {
	            authSuccess(oauth.access_token, null, oauth.id_token, true);
	        }

	        if ((kc.flow != 'implicit') && code) {
	            var params = 'code=' + code + '&grant_type=authorization_code';
	            var url = kc.endpoints.token();

	            var req = new XMLHttpRequest();
	            req.open('POST', url, true);
	            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	            params += '&client_id=' + encodeURIComponent(kc.clientId);
	            params += '&redirect_uri=' + oauth.redirectUri;

	            if (oauth.pkceCodeVerifier) {
	                params += '&code_verifier=' + oauth.pkceCodeVerifier;
	            }

	            req.withCredentials = true;

	            req.onreadystatechange = function() {
	                if (req.readyState == 4) {
	                    if (req.status == 200) {

	                        var tokenResponse = JSON.parse(req.responseText);
	                        authSuccess(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], kc.flow === 'standard');
	                        scheduleCheckIframe();
	                    } else {
	                        kc.onAuthError && kc.onAuthError();
	                        promise && promise.setError();
	                    }
	                }
	            };

	            req.send(params);
	        }

	        function authSuccess(accessToken, refreshToken, idToken, fulfillPromise) {
	            timeLocal = (timeLocal + new Date().getTime()) / 2;

	            setToken(accessToken, refreshToken, idToken, timeLocal);

	            if (useNonce && ((kc.tokenParsed && kc.tokenParsed.nonce != oauth.storedNonce) ||
	                (kc.refreshTokenParsed && kc.refreshTokenParsed.nonce != oauth.storedNonce) ||
	                (kc.idTokenParsed && kc.idTokenParsed.nonce != oauth.storedNonce))) {

	                logInfo('[KEYCLOAK] Invalid nonce, clearing token');
	                kc.clearToken();
	                promise && promise.setError();
	            } else {
	                if (fulfillPromise) {
	                    kc.onAuthSuccess && kc.onAuthSuccess();
	                    promise && promise.setSuccess();
	                }
	            }
	        }

	    }

	    function loadConfig(url) {
	        var promise = createPromise();
	        var configUrl;

	        if (!config) {
	            configUrl = 'keycloak.json';
	        } else if (typeof config === 'string') {
	            configUrl = config;
	        }

	        function setupOidcEndoints(oidcConfiguration) {
	            if (! oidcConfiguration) {
	                kc.endpoints = {
	                    authorize: function() {
	                        return getRealmUrl() + '/protocol/openid-connect/auth';
	                    },
	                    token: function() {
	                        return getRealmUrl() + '/protocol/openid-connect/token';
	                    },
	                    logout: function() {
	                        return getRealmUrl() + '/protocol/openid-connect/logout';
	                    },
	                    checkSessionIframe: function() {
	                        var src = getRealmUrl() + '/protocol/openid-connect/login-status-iframe.html';
	                        if (kc.iframeVersion) {
	                            src = src + '?version=' + kc.iframeVersion;
	                        }
	                        return src;
	                    },
	                    thirdPartyCookiesIframe: function() {
	                        var src = getRealmUrl() + '/protocol/openid-connect/3p-cookies/step1.html';
	                        if (kc.iframeVersion) {
	                            src = src + '?version=' + kc.iframeVersion;
	                        }
	                        return src;
	                    },
	                    register: function() {
	                        return getRealmUrl() + '/protocol/openid-connect/registrations';
	                    },
	                    userinfo: 	                };
	            } else {
	                kc.endpoints = {
	                    authorize: function() {
	                        return oidcConfiguration.authorization_endpoint;
	                    },
	                    token: 
	                    logout: function() {
	                        if (!oidcConfiguration.end_session_endpoint) {
	                            throw "Not supported by the OIDC server";
	                        }
	                        return oidcConfiguration.end_session_endpoint;
	                    },
	                    checkSessionIframe: function() {
	                        if (!oidcConfiguration.check_session_iframe) {
	                            throw "Not supported by the OIDC server";
	                        }
	                        return oidcConfiguration.check_session_iframe;
	                    },
	                    register: 
	                    userinfo: 	                };
	            }
	        }

	        if (configUrl) {
	            var req = new XMLHttpRequest();
	            req.open('GET', configUrl, true);
	            req.setRequestHeader('Accept', 'application/json');

	            req.onreadystatechange = function () {
	                if (req.readyState == 4) {
	                    if (req.status == 200 || fileLoaded(req)) {
	                        var config = JSON.parse(req.responseText);

	                        kc.authServerUrl = config['auth-server-url'];
	                        kc.realm = config['realm'];
	                        kc.clientId = config['resource'];
	                        setupOidcEndoints(null);
	                        promise.setSuccess();
	                    } else {
	                        promise.setError();
	                    }
	                }
	            };

	            req.send();
	        } else {
	            if (!config.clientId) {
	                throw 'clientId missing';
	            }

	            kc.clientId = config.clientId;

	            var oidcProvider = config['oidcProvider'];
	            if (!oidcProvider) {
	                if (!config['url']) {
	                    var scripts = document.getElementsByTagName('script');
	                    for (var i = 0; i < scripts.length; i++) {
	                        if (scripts[i].src.match(/.*keycloak\.js/)) {
	                            config.url = scripts[i].src.substr(0, scripts[i].src.indexOf('/js/keycloak.js'));
	                            break;
	                        }
	                    }
	                }
	                if (!config.realm) {
	                    throw 'realm missing';
	                }

	                kc.authServerUrl = config.url;
	                kc.realm = config.realm;
	                setupOidcEndoints(null);
	                promise.setSuccess();
	            } else {
	                if (typeof oidcProvider === 'string') {
	                    var oidcProviderConfigUrl;
	                    if (oidcProvider.charAt(oidcProvider.length - 1) == '/') {
	                        oidcProviderConfigUrl = oidcProvider + '.well-known/openid-configuration';
	                    } else {
	                        oidcProviderConfigUrl = oidcProvider + '/.well-known/openid-configuration';
	                    }
	                    var req = new XMLHttpRequest();
	                    req.open('GET', oidcProviderConfigUrl, true);
	                    req.setRequestHeader('Accept', 'application/json');

	                    req.onreadystatechange = function () {
	                        if (req.readyState == 4) {
	                            if (req.status == 200 || fileLoaded(req)) {
	                                var oidcProviderConfig = JSON.parse(req.responseText);
	                                setupOidcEndoints(oidcProviderConfig);
	                                promise.setSuccess();
	                            } else {
	                                promise.setError();
	                            }
	                        }
	                    };

	                    req.send();
	                } else {
	                    setupOidcEndoints(oidcProvider);
	                    promise.setSuccess();
	                }
	            }
	        }

	        return promise.promise;
	    }

	    function fileLoaded(xhr) {
	        return xhr.status == 0 && xhr.responseText && xhr.responseURL.startsWith('file:');
	    }

	    function setToken(token, refreshToken, idToken, timeLocal) {
	        if (kc.tokenTimeoutHandle) {
	            clearTimeout(kc.tokenTimeoutHandle);
	            kc.tokenTimeoutHandle = null;
	        }

	        if (refreshToken) {
	            kc.refreshToken = refreshToken;
	            kc.refreshTokenParsed = jwtDecode(refreshToken);
	        } else {
	            delete kc.refreshToken;
	            delete kc.refreshTokenParsed;
	        }

	        if (idToken) {
	            kc.idToken = idToken;
	            kc.idTokenParsed = jwtDecode(idToken);
	        } else {
	            delete kc.idToken;
	            delete kc.idTokenParsed;
	        }

	        if (token) {
	            kc.token = token;
	            kc.tokenParsed = jwtDecode(token);
	            kc.sessionId = kc.tokenParsed.session_state;
	            kc.authenticated = true;
	            kc.subject = kc.tokenParsed.sub;
	            kc.realmAccess = kc.tokenParsed.realm_access;
	            kc.resourceAccess = kc.tokenParsed.resource_access;

	            if (timeLocal) {
	                kc.timeSkew = Math.floor(timeLocal / 1000) - kc.tokenParsed.iat;
	            }

	            if (kc.timeSkew != null) {
	                logInfo('[KEYCLOAK] Estimated time difference between browser and server is ' + kc.timeSkew + ' seconds');

	                if (kc.onTokenExpired) {
	                    var expiresIn = (kc.tokenParsed['exp'] - (new Date().getTime() / 1000) + kc.timeSkew) * 1000;
	                    logInfo('[KEYCLOAK] Token expires in ' + Math.round(expiresIn / 1000) + ' s');
	                    if (expiresIn <= 0) {
	                        kc.onTokenExpired();
	                    } else {
	                        kc.tokenTimeoutHandle = setTimeout(kc.onTokenExpired, expiresIn);
	                    }
	                }
	            }
	        } else {
	            delete kc.token;
	            delete kc.tokenParsed;
	            delete kc.subject;
	            delete kc.realmAccess;
	            delete kc.resourceAccess;

	            kc.authenticated = false;
	        }
	    }

	    function createUUID() {
	        var hexDigits = '0123456789abcdef';
	        var s = generateRandomString(36, hexDigits).split("");
	        s[14] = '4';
	        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
	        s[8] = s[13] = s[18] = s[23] = '-';
	        var uuid = s.join('');
	        return uuid;
	    }

	    function parseCallback(url) {
	        var oauth = parseCallbackUrl(url);
	        if (!oauth) {
	            return;
	        }

	        var oauthState = callbackStorage.get(oauth.state);

	        if (oauthState) {
	            oauth.valid = true;
	            oauth.redirectUri = oauthState.redirectUri;
	            oauth.storedNonce = oauthState.nonce;
	            oauth.prompt = oauthState.prompt;
	            oauth.pkceCodeVerifier = oauthState.pkceCodeVerifier;
	        }

	        return oauth;
	    }

	    function parseCallbackUrl(url) {
	        var supportedParams;
	        switch (kc.flow) {
	            case 'standard':
	                supportedParams = ['code', 'state', 'session_state', 'kc_action_status', 'iss'];
	                break;
	            case 'implicit':
	                supportedParams = ['access_token', 'token_type', 'id_token', 'state', 'session_state', 'expires_in', 'kc_action_status', 'iss'];
	                break;
	            case 'hybrid':
	                supportedParams = ['access_token', 'token_type', 'id_token', 'code', 'state', 'session_state', 'expires_in', 'kc_action_status', 'iss'];
	                break;
	        }

	        supportedParams.push('error');
	        supportedParams.push('error_description');
	        supportedParams.push('error_uri');

	        var queryIndex = url.indexOf('?');
	        var fragmentIndex = url.indexOf('#');

	        var newUrl;
	        var parsed;

	        if (kc.responseMode === 'query' && queryIndex !== -1) {
	            newUrl = url.substring(0, queryIndex);
	            parsed = parseCallbackParams(url.substring(queryIndex + 1, fragmentIndex !== -1 ? fragmentIndex : url.length), supportedParams);
	            if (parsed.paramsString !== '') {
	                newUrl += '?' + parsed.paramsString;
	            }
	            if (fragmentIndex !== -1) {
	                newUrl += url.substring(fragmentIndex);
	            }
	        } else if (kc.responseMode === 'fragment' && fragmentIndex !== -1) {
	            newUrl = url.substring(0, fragmentIndex);
	            parsed = parseCallbackParams(url.substring(fragmentIndex + 1), supportedParams);
	            if (parsed.paramsString !== '') {
	                newUrl += '#' + parsed.paramsString;
	            }
	        }

	        if (parsed && parsed.oauthParams) {
	            if (kc.flow === 'standard' || kc.flow === 'hybrid') {
	                if ((parsed.oauthParams.code || parsed.oauthParams.error) && parsed.oauthParams.state) {
	                    parsed.oauthParams.newUrl = newUrl;
	                    return parsed.oauthParams;
	                }
	            } else if (kc.flow === 'implicit') {
	                if ((parsed.oauthParams.access_token || parsed.oauthParams.error) && parsed.oauthParams.state) {
	                    parsed.oauthParams.newUrl = newUrl;
	                    return parsed.oauthParams;
	                }
	            }
	        }
	    }

	    function parseCallbackParams(paramsString, supportedParams) {
	        var p = paramsString.split('&');
	        var result = {
	            paramsString: '',
	            oauthParams: {}
	        };
	        for (var i = 0; i < p.length; i++) {
	            var split = p[i].indexOf("=");
	            var key = p[i].slice(0, split);
	            if (supportedParams.indexOf(key) !== -1) {
	                result.oauthParams[key] = p[i].slice(split + 1);
	            } else {
	                if (result.paramsString !== '') {
	                    result.paramsString += '&';
	                }
	                result.paramsString += p[i];
	            }
	        }
	        return result;
	    }

	    function createPromise() {
	        // Need to create a native Promise which also preserves the
	        // interface of the custom promise type previously used by the API
	        var p = {
	            setSuccess: function(result) {
	                p.resolve(result);
	            },

	            setError: 	        };
	        p.promise = new es6Promise_minExports.Promise(;

	        return p;
	    }

	    // Function to extend existing native Promise with timeout
	    function applyTimeoutToPromise(promise, timeout, errorMessage) {
	        var timeoutHandle = null;
	        var timeoutPromise = new es6Promise_minExports.Promise(function (resolve, reject) {
	            timeoutHandle = setTimeout(function () {
	                reject({ "error": errorMessage || "Promise is not settled within timeout of " + timeout + "ms" });
	            }, timeout);
	        });

	        return es6Promise_minExports.Promise.race([promise, timeoutPromise]).finally(;
	    }

	    function setupCheckLoginIframe() {
	        var promise = createPromise();

	        if (!loginIframe.enable) {
	            promise.setSuccess();
	            return promise.promise;
	        }

	        if (loginIframe.iframe) {
	            promise.setSuccess();
	            return promise.promise;
	        }

	        var iframe = document.createElement('iframe');
	        loginIframe.iframe = iframe;

	        iframe.onload = function() {
	            var authUrl = kc.endpoints.authorize();
	            if (authUrl.charAt(0) === '/') {
	                loginIframe.iframeOrigin = getOrigin();
	            } else {
	                loginIframe.iframeOrigin = authUrl.substring(0, authUrl.indexOf('/', 8));
	            }
	            promise.setSuccess();
	        };

	        var src = kc.endpoints.checkSessionIframe();
	        iframe.setAttribute('src', src );
	        iframe.setAttribute('sandbox', 'allow-storage-access-by-user-activation allow-scripts allow-same-origin');
	        iframe.setAttribute('title', 'keycloak-session-iframe' );
	        iframe.style.display = 'none';
	        document.body.appendChild(iframe);

	        var messageCallback = function(event) {
	            if ((event.origin !== loginIframe.iframeOrigin) || (loginIframe.iframe.contentWindow !== event.source)) {
	                return;
	            }

	            if (!(event.data == 'unchanged' || event.data == 'changed' || event.data == 'error')) {
	                return;
	            }


	            if (event.data != 'unchanged') {
	                kc.clearToken();
	            }

	            var callbacks = loginIframe.callbackList.splice(0, loginIframe.callbackList.length);

	            for (var i = callbacks.length - 1; i >= 0; --i) {
	                var promise = callbacks[i];
	                if (event.data == 'error') {
	                    promise.setError();
	                } else {
	                    promise.setSuccess(event.data == 'unchanged');
	                }
	            }
	        };

	        window.addEventListener('message', messageCallback, false);

	        return promise.promise;
	    }

	    function scheduleCheckIframe() {
	        if (loginIframe.enable) {
	            if (kc.token) {
	                setTimeout(function() {
	                    checkLoginIframe().then(;
	                }, loginIframe.interval * 1000);
	            }
	        }
	    }

	    function checkLoginIframe() {
	        var promise = createPromise();

	        if (loginIframe.iframe && loginIframe.iframeOrigin ) {
	            var msg = kc.clientId + ' ' + (kc.sessionId ? kc.sessionId : '');
	            loginIframe.callbackList.push(promise);
	            var origin = loginIframe.iframeOrigin;
	            if (loginIframe.callbackList.length == 1) {
	                loginIframe.iframe.contentWindow.postMessage(msg, origin);
	            }
	        } else {
	            promise.setSuccess();
	        }

	        return promise.promise;
	    }

	    function check3pCookiesSupported() {
	        var promise = createPromise();

	        if (loginIframe.enable || kc.silentCheckSsoRedirectUri) {
	            var iframe = document.createElement('iframe');
	            iframe.setAttribute('src', kc.endpoints.thirdPartyCookiesIframe());
	            iframe.setAttribute('sandbox', 'allow-storage-access-by-user-activation allow-scripts allow-same-origin');
	            iframe.setAttribute('title', 'keycloak-3p-check-iframe' );
	            iframe.style.display = 'none';
	            document.body.appendChild(iframe);

	            var messageCallback = function(event) {
	                if (iframe.contentWindow !== event.source) {
	                    return;
	                }

	                if (event.data !== "supported" && event.data !== "unsupported") {
	                    return;
	                } else if (event.data === "unsupported") {
	                    logWarn(
	                        "[KEYCLOAK] Your browser is blocking access to 3rd-party cookies, this means:\n\n" +
	                        " - It is not possible to retrieve tokens without redirecting to the Keycloak server (a.k.a. no support for silent authentication).\n" +
	                        " - It is not possible to automatically detect changes to the session status (such as the user logging out in another tab).\n\n" +
	                        "For more information see: https://www.keycloak.org/docs/latest/securing_apps/#_modern_browsers"
	                    );

	                    loginIframe.enable = false;
	                    if (kc.silentCheckSsoFallback) {
	                        kc.silentCheckSsoRedirectUri = false;
	                    }
	                }

	                document.body.removeChild(iframe);
	                window.removeEventListener("message", messageCallback);
	                promise.setSuccess();
	            };

	            window.addEventListener('message', messageCallback, false);
	        } else {
	            promise.setSuccess();
	        }

	        return applyTimeoutToPromise(promise.promise, kc.messageReceiveTimeout, "Timeout when waiting for 3rd party check iframe message.");
	    }

	    function loadAdapter(type) {
	        if (!type || type == 'default') {
	            return {
	                login: function(options) {
	                    window.location.assign(kc.createLoginUrl(options));
	                    return createPromise().promise;
	                },

	                logout: function(options) {
	                    window.location.replace(kc.createLogoutUrl(options));
	                    return createPromise().promise;
	                },

	                register: function(options) {
	                    window.location.assign(kc.createRegisterUrl(options));
	                    return createPromise().promise;
	                },

	                accountManagement : function() {
	                    var accountUrl = kc.createAccountUrl();
	                    if (typeof accountUrl !== 'undefined') {
	                        window.location.href = accountUrl;
	                    } else {
	                        throw "Not supported by the OIDC server";
	                    }
	                    return createPromise().promise;
	                },

	                redirectUri: function(options, encodeHash) {

	                    if (options && options.redirectUri) {
	                        return options.redirectUri;
	                    } else if (kc.redirectUri) {
	                        return kc.redirectUri;
	                    } else {
	                        return location.href;
	                    }
	                }
	            };
	        }

	        if (type == 'cordova') {
	            loginIframe.enable = false;
	            var cordovaOpenWindowWrapper = function(loginUrl, target, options) {
	                if (window.cordova && window.cordova.InAppBrowser) {
	                    // Use inappbrowser for IOS and Android if available
	                    return window.cordova.InAppBrowser.open(loginUrl, target, options);
	                } else {
	                    return window.open(loginUrl, target, options);
	                }
	            };

	            var shallowCloneCordovaOptions = function (userOptions) {
	                if (userOptions && userOptions.cordovaOptions) {
	                    return Object.keys(userOptions.cordovaOptions).reduce( {});
	                } else {
	                    return {};
	                }
	            };

	            var formatCordovaOptions = function (cordovaOptions) {
	                return Object.keys(cordovaOptions).reduce(function (options, optionName) {
	                    options.push(optionName+"="+cordovaOptions[optionName]);
	                    return options;
	                }, []).join(",");
	            };

	            var createCordovaOptions = function (userOptions) {
	                var cordovaOptions = shallowCloneCordovaOptions(userOptions);
	                cordovaOptions.location = 'no';
	                if (userOptions && userOptions.prompt == 'none') {
	                    cordovaOptions.hidden = 'yes';
	                }
	                return formatCordovaOptions(cordovaOptions);
	            };

	            var getCordovaRedirectUri = 
	            
	            return {
	                login: function(options) {
	                    var promise = createPromise();

	                    var cordovaOptions = createCordovaOptions(options);
	                    var loginUrl = kc.createLoginUrl(options);
	                    var ref = cordovaOpenWindowWrapper(loginUrl, '_blank', cordovaOptions);
	                    var completed = false;

	                    var closed = false;
	                    var closeBrowser = 

	                    ref.addEventListener('loadstart', function(event) {
	                        if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
	                            var callback = parseCallback(event.url);
	                            processCallback(callback, promise);
	                            closeBrowser();
	                            completed = true;
	                        }
	                    });

	                    ref.addEventListener('loaderror', function(event) {
	                        if (!completed) {
	                            if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
	                                var callback = parseCallback(event.url);
	                                processCallback(callback, promise);
	                                closeBrowser();
	                                completed = true;
	                            } else {
	                                promise.setError();
	                                closeBrowser();
	                            }
	                        }
	                    });

	                    ref.addEventListener('exit', function(event) {
	                        if (!closed) {
	                            promise.setError({
	                                reason: "closed_by_user"
	                            });
	                        }
	                    });

	                    return promise.promise;
	                },

	                logout: function(options) {
	                    var promise = createPromise();

	                    var logoutUrl = kc.createLogoutUrl(options);
	                    var ref = cordovaOpenWindowWrapper(logoutUrl, '_blank', 'location=no,hidden=yes,clearcache=yes');

	                    var error;

	                    ref.addEventListener('loadstart', function(event) {
	                        if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
	                            ref.close();
	                        }
	                    });

	                    ref.addEventListener('loaderror', function(event) {
	                        if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
	                            ref.close();
	                        } else {
	                            error = true;
	                            ref.close();
	                        }
	                    });

	                    ref.addEventListener('exit', function(event) {
	                        if (error) {
	                            promise.setError();
	                        } else {
	                            kc.clearToken();
	                            promise.setSuccess();
	                        }
	                    });

	                    return promise.promise;
	                },

	                register : function(options) {
	                    var promise = createPromise();
	                    var registerUrl = kc.createRegisterUrl();
	                    var cordovaOptions = createCordovaOptions(options);
	                    var ref = cordovaOpenWindowWrapper(registerUrl, '_blank', cordovaOptions);
	                    ref.addEventListener('loadstart', function(event) {
	                        if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
	                            ref.close();
	                            var oauth = parseCallback(event.url);
	                            processCallback(oauth, promise);
	                        }
	                    });
	                    return promise.promise;
	                },

	                accountManagement : function() {
	                    var accountUrl = kc.createAccountUrl();
	                    if (typeof accountUrl !== 'undefined') {
	                        var ref = cordovaOpenWindowWrapper(accountUrl, '_blank', 'location=no');
	                        ref.addEventListener('loadstart', function(event) {
	                            if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
	                                ref.close();
	                            }
	                        });
	                    } else {
	                        throw "Not supported by the OIDC server";
	                    }
	                },

	                redirectUri: 	            }
	        }

	        if (type == 'cordova-native') {
	            loginIframe.enable = false;

	            return {
	                login: function(options) {
	                    var promise = createPromise();
	                    var loginUrl = kc.createLoginUrl(options);

	                    universalLinks.subscribe('keycloak', function(event) {
	                        universalLinks.unsubscribe('keycloak');
	                        window.cordova.plugins.browsertab.close();
	                        var oauth = parseCallback(event.url);
	                        processCallback(oauth, promise);
	                    });

	                    window.cordova.plugins.browsertab.openUrl(loginUrl);
	                    return promise.promise;
	                },

	                logout: function(options) {
	                    var promise = createPromise();
	                    var logoutUrl = kc.createLogoutUrl(options);

	                    universalLinks.subscribe('keycloak', function(event) {
	                        universalLinks.unsubscribe('keycloak');
	                        window.cordova.plugins.browsertab.close();
	                        kc.clearToken();
	                        promise.setSuccess();
	                    });

	                    window.cordova.plugins.browsertab.openUrl(logoutUrl);
	                    return promise.promise;
	                },

	                register : function(options) {
	                    var promise = createPromise();
	                    var registerUrl = kc.createRegisterUrl(options);
	                    universalLinks.subscribe('keycloak' , function(event) {
	                        universalLinks.unsubscribe('keycloak');
	                        window.cordova.plugins.browsertab.close();
	                        var oauth = parseCallback(event.url);
	                        processCallback(oauth, promise);
	                    });
	                    window.cordova.plugins.browsertab.openUrl(registerUrl);
	                    return promise.promise;

	                },

	                accountManagement : function() {
	                    var accountUrl = kc.createAccountUrl();
	                    if (typeof accountUrl !== 'undefined') {
	                        window.cordova.plugins.browsertab.openUrl(accountUrl);
	                    } else {
	                        throw "Not supported by the OIDC server";
	                    }
	                },

	                redirectUri: function(options) {
	                    if (options && options.redirectUri) {
	                        return options.redirectUri;
	                    } else if (kc.redirectUri) {
	                        return kc.redirectUri;
	                    } else {
	                        return "http://localhost";
	                    }
	                }
	            }
	        }

	        throw 'invalid adapter type: ' + type;
	    }

	    var LocalStorage = function() {
	        if (!(this instanceof LocalStorage)) {
	            return new LocalStorage();
	        }

	        localStorage.setItem('kc-test', 'test');
	        localStorage.removeItem('kc-test');

	        var cs = this;

	        function clearExpired() {
	            var time = new Date().getTime();
	            for (var i = 0; i < localStorage.length; i++)  {
	                var key = localStorage.key(i);
	                if (key && key.indexOf('kc-callback-') == 0) {
	                    var value = localStorage.getItem(key);
	                    if (value) {
	                        try {
	                            var expires = JSON.parse(value).expires;
	                            if (!expires || expires < time) {
	                                localStorage.removeItem(key);
	                            }
	                        } catch (err) {
	                            localStorage.removeItem(key);
	                        }
	                    }
	                }
	            }
	        }

	        cs.get = function(state) {
	            if (!state) {
	                return;
	            }

	            var key = 'kc-callback-' + state;
	            var value = localStorage.getItem(key);
	            if (value) {
	                localStorage.removeItem(key);
	                value = JSON.parse(value);
	            }

	            clearExpired();
	            return value;
	        };

	        cs.add = function(state) {
	            clearExpired();

	            var key = 'kc-callback-' + state.state;
	            state.expires = new Date().getTime() + (60 * 60 * 1000);
	            localStorage.setItem(key, JSON.stringify(state));
	        };
	    };

	    var CookieStorage = function() {
	        if (!(this instanceof CookieStorage)) {
	            return new CookieStorage();
	        }

	        var cs = this;

	        cs.get = function(state) {
	            if (!state) {
	                return;
	            }

	            var value = getCookie('kc-callback-' + state);
	            setCookie('kc-callback-' + state, '', cookieExpiration(-100));
	            if (value) {
	                return JSON.parse(value);
	            }
	        };

	        cs.add = 

	        cs.removeItem = 

	        var cookieExpiration = function (minutes) {
	            var exp = new Date();
	            exp.setTime(exp.getTime() + (minutes*60*1000));
	            return exp;
	        };

	        var getCookie = 

	        var setCookie = function (key, value, expirationDate) {
	            var cookie = key + '=' + value + '; '
	                + 'expires=' + expirationDate.toUTCString() + '; ';
	            document.cookie = cookie;
	        };
	    };

	    function createCallbackStorage() {
	        try {
	            return new LocalStorage();
	        } catch (err) {
	        }

	        return new CookieStorage();
	    }

	    function createLogger(fn) {
	        return function() {
	            if (kc.enableLogging) {
	                fn.apply(console, Array.prototype.slice.call(arguments));
	            }
	        };
	    }
	}

	return Keycloak;

}));
