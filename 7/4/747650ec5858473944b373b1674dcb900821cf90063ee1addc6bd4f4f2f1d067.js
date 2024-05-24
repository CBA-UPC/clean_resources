/*
   detikLiveUserCo(typeof jQuery !== 'function') {
  var warnJQueryUndefinedStr = 'detikLiveUserCounter.js needs jQuery 1.1x.x to run properly!';
  console.log(warnJQueryUndefinedStr);
  throw new Error(warnJQueryUndefinedStr); // this line will stop the script
};

// Chapter 2: Load External Libraries
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

// Chapter 3: detikLiveUserCounter Context as ctx
var detikLiveUserCounter = {};

(function(ctx) {

  ctx.headerInfo = '[detikLiveUserCounter]';
  ctx.version    = 'v1.11';

  ctx.baseDomain = function() {
    result = '';
    var hostname = window.location.hostname;
    var perdots = hostname.split('.');
    if (perdots.length >= 3) {
      result = '.' + perdots[1] + '.' + perdots[2];
    } else {
      result = '.' + hostname;
   }
    return result;
  }

  ctx.config = {
    enableConsoleLog: false,
    timeInterval: 30000,
    channel: 'counterview',
    domain: window.location.hostname,
    user: '',
    trackerid: '',
    enableGetCounter: true,
    getCounterUrl: 'https://parsley.detik.com/dtnct',
    getCounterReadOnlyUrl: 'https://parsley.detik.com/dtnctv',
    successCallback: null,
    errorCallback: null,
    enableTheTracker: false,
    theTrackerUrl: 'https://cdn.detik.net.id/loganalysistracker/thetracker-detik-v3.min.js',
    persistentMode: true,
    userPrefix: 'gen_',
    dtmaCookieName: '__dtma',
    dtklucCookieName: 'dtklucx',
    dtklucCookieAttribute: { domain: ctx.baseDomain(), path: '/', expires: 365 }, // satuan expires adalah Hari
    dtklucCookieAttributeRead: { domain: ctx.baseDomain(), path: '/' },
    dtklucDbgCookieName: 'dtklucdbg',
    dtklucDbgCookieAttributeRead: { domain: ctx.baseDomain(), path: '/' }, 
    startDelay: 6000,
    startDelayForResponse: 1000, // parent
    startDelayForRequest: 2000, // embed
    readOnly: false,
    requestWinPostMsg: false,
    responseWinPostMsg: false,
    requestWinPostData: { dtklucreq: 1 },
    responseWinPostData: { dtklucuser: null, dtkluctrackerid: null, dtklucdomain: null, dtklucchannel: null },
    requestWinPostTargetWindow: '*',
    responseWinPostTargetWindow: '*',
    winPostDataRewriteUserId: true,
    winPostDataRewriteTrackerId: true,
    winPostDataRewriteDomain: true,
    winPostDataRewriteChannel: false,
    waitingResponseWinPostMsg: 6000,
    ajaxSetupCache: false,
    ajaxSetupASync: true,
    noHit: false,
    sendJsUrl: false
  };

  ctx.inputConfig = {};

  ctx.vars = {
    timeIntervalHandler: null,
    getCounterData: null,
    isTheTrackerHasBeenLoaded: false,
    startDelayNow: false,
    messageAddListenerLock: false,
    dataWinPostMsgIsOK: false,
    haltedRequestWinPostMsg: false,
    firstStart: false,
    playIsSent: false,
    playIsOccur: false
  };

  ctx.log = function(txtLog, txtVal) {
    if (ctx.config.enableConsoleLog === true) {
      if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
        console.log(ctx.headerInfo + ' ' + txtLog);
      } else {
        console.log(ctx.headerInfo + ' ' + txtLog, txtVal);
      }
    }
  };

  ctx.logx = function(txtLog, txtVal) {
    if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
      console.log(ctx.headerInfo + ' ' + txtLog);
    } else {
      console.log(ctx.headerInfo + ' ' + txtLog, txtVal);
    }
  };

  ctx.uniqueId = function (prefix) {
    // https://gist.github.com/gordonbrander/2230317
    // NOTE: This format of 8 chars, followed by 3 groups of 4 chars, followed by 12 chars
    //       is known as a UUID and is defined in RFC4122 and is a standard for generating unique IDs.
    //       This function DOES NOT implement this standard. It simply outputs a string
    //       that looks similar. The standard is found here: https://www.ietf.org/rfc/rfc4122.txt
    if (prefix === null) {
      prefix = '_';
    }
    function chr4(){
      return Math.random().toString(16).slice(-4);
    }
    return prefix + chr4() + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() + chr4() + chr4();
  };

  ctx.configProcess = function() {
    $.each(ctx.config, function (idx, val) {
      if (((typeof ctx.inputConfig) !== 'undefined') && (ctx.inputConfig !== null)) {
        if ((typeof ctx.inputConfig[idx]) !== 'undefined') {
          ctx.config[idx] = ctx.inputConfig[idx];
        }
      }
    });
    //ctx.log('configProcess config is', ctx.config);
  };

  ctx.setConfig = function(config) {
    if ($.type(config) === 'object') {
      ctx.log('setConfig is working', null);
      ctx.inputConfig = config;
      ctx.configProcess();
      ctx.config.user = ctx.uniqueId(ctx.config.userPrefix);
      if (ctx.config.requestWinPostMsg === true) {
        ctx.config.startDelay = ctx.config.startDelayForRequest;
      }
      if (ctx.config.responseWinPostMsg === true) {
        ctx.config.startDelay = ctx.config.startDelayForResponse;
      }
    }
  };

  ctx.getScriptTemplate = function(gsUrl, gsNextFunction, gsStatusOK) {
    $.ajaxSetup( { async: true , cache: true } );
    $.getScript(gsUrl, function() {
      if ((typeof gsStatusOK) === 'function') {
        gsStatusOK();
      }
      if ((typeof gsNextFunction) === 'function') {
        gsNextFunction();
      }
      $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
    }).fail(function() {
      ctx.log('calls failed', gsUrl);
      if ((typeof gsStatusOK) === 'function') {
        gsStatusOK();
      }
      $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
      if ((typeof gsNextFunction) === 'function') {
        gsNextFunction();
      }
    });
  };

  ctx.gsTheTracker = function() {
    if ((ctx.config.enableTheTracker === true) && (ctx.vars.isTheTrackerHasBeenLoaded === false)) {
      ctx.log('gsTheTracker lib caller', null);
      ctx.getScriptTemplate(ctx.config.theTrackerUrl, ctx.start2, null);
    }
  };

  ctx.start2 = function() {
    if ((ctx.config.enableTheTracker === true) && (ctx.vars.isTheTrackerHasBeenLoaded === false)) {
      ctx.vars.isTheTrackerHasBeenLoaded = true;
      ctx.log('start2 is working', null);
      var metas = document.getElementsByTagName("meta");
      try {
        detikTracker.call(null, metas);
        ctx.log('start2 detikTracker call is running', null);
        var dtma = Cookies.get(ctx.config.dtmaCookieName, ctx.config.dtklucCookieAttributeRead);
        if ((typeof dtma === 'string') && (dtma !== '')) {
          ctx.config.trackerid = dtma;
          ctx.log('start2 got __dtma', ctx.config.trackerid);
          ctx.start1();
        } else {
          if (ctx.config.persistentMode === true) {
            ctx.start1();
          } else {
            ctx.log('start2 didnt get __dtma, halted', null);
          }
        }
      } catch (error) {
        ctx.log('start2 detikTracker call got an error', null);
        if (ctx.config.persistentMode === true) {
          ctx.start1();
        } else {
          ctx.log('start2 didnt get __dtma, halted', null);
        }
      }
    }
  };

  ctx.start1 = function() {
    if (ctx.config.noHit === false) {
      if (ctx.vars.timeIntervalHandler === null) {
        ctx.log('start1 is working', null);
        var domain2 = '';
        try {
          if ((document.referrer !== null) && (document.referrer !== undefined)) {
            var referrer = document.referrer;
            domain2 = (new URL(referrer)).hostname;
          }
        } catch (ex) {
        }
        var embedUrl = '';
        if (ctx.config.sendJsUrl === true) {
          embedUrl = '&url=' + encodeURIComponent(window.location);
        }
        ctx.vars.getCounterData = 
          'chanel=' + encodeURIComponent(ctx.config.channel) + 
          '&user=' + encodeURIComponent(ctx.config.user) +
          '&trackerid=' + encodeURIComponent(ctx.config.trackerid) +
          '&domain=' + encodeURIComponent(ctx.config.domain) +
          '&domain2=' + encodeURIComponent(domain2) + 
          embedUrl;
        //ctx.log('getCounterData', ctx.vars.getCounterData);
        ctx.getCounter(); // first encounter !
        if ((ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
          ctx.getCounter(); // sent immediately play event
        }
        ctx.vars.timeIntervalHandler = setInterval(function() {
          ctx.getCounter();
          if ((ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
            ctx.getCounter(); // sent immediately play event
          }
        }, ctx.config.timeInterval);
      }
    } else {
      ctx.log('start1 uses noHit, only responseWinPostMsg (if it is true) will run in message listener', null);
    }
  };

  ctx.start0 = function() {
    // get dtkluc if failed then use generated userid
    if ((ctx.config.enableTheTracker === true) && (ctx.vars.isTheTrackerHasBeenLoaded === false)) {
      ctx.log('start0 load theTracker to create __dtma', null);
      ctx.gsTheTracker();
    } else {
      ctx.log('start0 read __dtma as trackerid', null);
      var dtma = Cookies.get(ctx.config.dtmaCookieName, ctx.config.dtklucCookieAttributeRead);
      if ((typeof dtma === 'string') && (dtma !== '')) {
        ctx.config.trackerid = dtma;
        ctx.log('start0 got __dtma, trackerid value is', ctx.config.trackerid);
      }
      ctx.log('start0 read dtkluc', null);
      var dtkluc = Cookies.get(ctx.config.dtklucCookieName, ctx.config.dtklucCookieAttributeRead);
      if ((typeof dtkluc === 'string') && (dtkluc !== '')) {
        ctx.config.user = dtkluc;
        ctx.log('start0 got dtkluc, user value is', ctx.config.user);
        if (ctx.config.requestWinPostMsg === true) {
          // get ctx.config.user and ctx.config.domain from parent iframe
          ctx.requestWinPostMsg();
        } else {
          ctx.start1();
        }
      } else {
        ctx.log('start0 unable to read dtkluc, user value is', ctx.config.user);
        Cookies.set(ctx.config.dtklucCookieName, ctx.config.user, ctx.config.dtklucCookieAttribute);
        if (ctx.config.requestWinPostMsg === true) {
          // get ctx.config.user and ctx.config.domain from parent iframe
          ctx.requestWinPostMsg();
        } else {
          ctx.start1();
        }
      }
    }
  };

  ctx.start = function() {
    ctx.logx('start is working, version is', ctx.version);
    // read dbg sign
    var dbgSign = Cookies.get(ctx.config.dtklucDbgCookieName, ctx.config.dtklucDbgCookieAttributeRead);
    if (dbgSign === '1') {
      ctx.config.enableConsoleLog = true;
    }
    // end read dbg sign
    if (ctx.vars.startDelayNow === false) {
      ctx.vars.startDelayNow = true;
      ctx.log('start uses startDelay', ctx.config.startDelay);
      setTimeout(function() {
        ctx.vars.startDelayNow = false;
        ctx.log('start uses startDelay is over', null);
        ctx.log('start config is', ctx.config);
        ctx.messageAddListenerInit();
        ctx.start0();
      }, ctx.config.startDelay);
    } else {
      ctx.log('start said that startDelay is busy!', null);
    }
  };

  ctx.messageAddListenerInit = function() {
    if (ctx.vars.messageAddListenerLock === false) {
      ctx.log('messageAddListenerInit is working', null);
      ctx.vars.messageAddListenerLock = true;
      if (ctx.config.requestWinPostMsg === true) {
        window.addEventListener('message', function(event) {
          if (ctx.vars.haltedRequestWinPostMsg === false) {
            ctx.log('messageAddListenerInit requestWinPostMsg window listener is working', null);
            var responseData = event.data;
            if ((ctx.config.winPostDataRewriteUserId === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucuser')) ) {
              ctx.config.user = responseData.dtklucuser;
              ctx.vars.dataWinPostMsgIsOK = true;
              ctx.vars.haltedRequestWinPostMsg = true;
            }
            if ((ctx.config.winPostDataRewriteTrackerId === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtkluctrackerid')) ) {
              ctx.config.trackerid = responseData.dtkluctrackerid;
            }
            if ((ctx.config.winPostDataRewriteDomain === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucdomain')) ) {
              ctx.config.domain = responseData.dtklucdomain;
            }
            if ((ctx.config.winPostDataRewriteChannel === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucchannel')) ) {
              ctx.config.channel = responseData.dtklucchannel;
            }
            if (ctx.vars.dataWinPostMsgIsOK === true) {
              ctx.log('messageAddListenerInit requestWinPostMsg got responseData',  responseData);
              setTimeout(function() {
                ctx.start1();
              }, 0);
            }
          }
        });
      }
      if (ctx.config.responseWinPostMsg === true) {
        window.addEventListener('message', function(event) {
          //ctx.log('messageAddListenerInit responseWinPostMsg window listener is working', null);
          var requestData = event.data;
          if ((typeof requestData === 'object') && (requestData !== null) && (requestData.hasOwnProperty('dtklucreq') === true) && (requestData.dtklucreq === 1)) {
            var responseData = ctx.config.responseWinPostData;
            responseData.dtklucuser = ctx.config.user;
            responseData.dtkluctrackerid = ctx.config.trackerid;
            responseData.dtklucdomain = ctx.config.domain;
            responseData.dtklucchannel = ctx.config.channel;
            var iframes = document.getElementsByTagName('iframe');
            ctx.log('messageAddListenerInit responseWinPostMsg iframes', iframes);
            $.each(iframes, function(idx, val) {
              try { 
                val.contentWindow.postMessage(responseData, ctx.config.responseWinPostTargetWindow);
                ctx.log('messageAddListenerInit responseWinPostMsg already sent', null);
              } catch (ex) {
                ctx.log('messageAddListenerInit responseWinPostMsg is failed!', null);
              }
            });
          }
        });
      }
    }
  };

  ctx.requestWinPostMsg = function() {
    if (ctx.config.requestWinPostMsg === true) {
      try {
        ctx.log('requestWinPostMsg is working', null);
        window.parent.postMessage(ctx.config.requestWinPostData, ctx.config.requestWinPostTargetWindow);
      } catch (ex) {
        ctx.log('requestWinPostMsg is failed!', null);
      }
      setTimeout(function() {
        if (ctx.vars.dataWinPostMsgIsOK === false) {
          ctx.log('requestWinPostMsg no-more waiting window.postMessage, get cookie now!', null);
          ctx.vars.haltedRequestWinPostMsg = true;
          ctx.start1();
        }
      }, ctx.config.waitingResponseWinPostMsg);
    }
  };

  ctx.getCounter = function() {
    if (ctx.config.enableGetCounter === true) {
      var getCounterUrl = null;
      var ajaxType = null;
      var ajaxContentType = null;
      var ajaxData = null;
      var playingData = '';
      if (ctx.vars.playIsSent === true) {
        playingData = '&event=playing';
      }
      var firstPlayData = '';
      if ((ctx.vars.firstStart === true) && (ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
        ctx.vars.playIsSent = true;
        firstPlayData = '&event=play';
      }
      var firstStartData = '';
      if (ctx.vars.firstStart === false) {
        ctx.vars.firstStart = true;
        firstStartData = '&event=start';
      }
      if (ctx.config.readOnly === true) {
        ajaxType = 'GET';
        ajaxContentType = 'application/x-www-form-urlencoded';
        ajaxData = ctx.vars.getCounterData + firstStartData + firstPlayData + playingData;
        getCounterUrl = ctx.config.getCounterReadOnlyUrl;
      } else {
        ajaxType = 'POST';
        ajaxContentType = 'application/x-www-form-urlencoded';
        ajaxData = ctx.vars.getCounterData + firstStartData + firstPlayData + playingData;
        getCounterUrl = ctx.config.getCounterUrl;
      }
      ctx.log('getCounter is working', getCounterUrl);
      ctx.log('getCounter ajaxData', ajaxData);
      $.ajaxSetup( { async: ctx.config.ajaxSetupASync , cache: ctx.config.ajaxSetupCache } );
      $.ajax({
        type: ajaxType,
        url: getCounterUrl,
        data: ajaxData,
        contentType: ajaxContentType,
        success: function(successMsg) {
          ctx.log('getCounter success-event', successMsg);
          if (typeof ctx.config.successCallback === 'function') {
            ctx.config.successCallback(successMsg);
          }
        },
        error: function(errorMsg) {
          ctx.log('getCounter error-event', errorMsg);
          if (typeof ctx.config.errorCallback === 'function') {
            ctx.config.errorCallback(errorMsg);
          }
        }
      });
    }
  };
  
  ctx.stop = function() {
    if (ctx.vars.timeIntervalHandler !== null) {
      ctx.log('stop is working', null);
      clearInterval(ctx.vars.timeIntervalHandler);
      ctx.vars.timeIntervalHandler = null;
    }
  };

  ctx.pause = function() {
    ctx.log('pause is working', null);
    ctx.config.enableGetCounter = false;
  };

  ctx.resume = function() {
    ctx.log('resume is working', null);
    ctx.config.enableGetCounter = true;
  };

  ctx.play = function() {
    ctx.log('play is working', null);
    ctx.vars.playIsOccur = true;
  };

})(detikLiveUserCounter);

// for using it, please call these lines :
// detikLiveUserCounter.setConfig({ .. });
// detikLiveUserCounter.start();

    height: 18px;
    border: 2px solid #ccc;
    border-radius: 4px;
    flex-grow: 0;
    flex-shrink: 0;
    display: block;
    position: relative;
}
.payment-form__checkbox .icon-check {
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--main-color);
    opacity: 0;
    transition: all 0.2s ease;
}
.payment-form__radiobox {
    width: 18px;
    height: 18px;
    border: 2px solid #ccc;
    border-radius: 10px;
    flex-grow: 0;
    flex-shrink: 0;
    display: block;
    position: relative;
}
.payment-form__radiobox .checkbox-tick {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--main-color);
    opacity: 0;
    transition: all 0.2s ease;
    width: 8px;
    height: 8px;
    border-radius: 30px;
}
.payment-form__info {
    background-color: #f7f7f7;
    border-radius: 4px;
    padding: 10px 12px;
    color: #333;
    display: flex;
    align-items: center;
    font-family: "Montserrat",sans-serif;
}
.payment-form__info--accent {
    color: var(--main-color);
    font-weight: bold;
}
.payment-form__info--accent:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 6px;
    background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.613 10.901a.617.617 0 0 1-.592.616c-.338 0-.592-.264-.592-.616V9.32c0-.352.254-.616.592-.616.339 0 .592.264.592.616V10.9ZM8.275 0c-.973 0-1.903.396-2.58 1.143a3.828 3.828 0 0 0-1.1 2.725v.352h-.042c-.93 0-1.819.351-2.496 1.055A3.842 3.842 0 0 0 1 7.912v4.352c0 .967.38 1.934 1.057 2.637C2.734 15.604 3.622 16 4.553 16h6.894c.93 0 1.861-.396 2.496-1.099A3.842 3.842 0 0 0 15 12.264V7.912c0-.967-.38-1.934-1.057-2.637a4.06 4.06 0 0 0-1.946-1.055v-.352c0-1.055-.423-1.978-1.1-2.725C10.22.44 9.29 0 8.275 0Zm3.172 14.77H4.595c-.634 0-1.226-.264-1.734-.704a2.784 2.784 0 0 1-.677-1.802V7.912c0-.66.212-1.275.677-1.758a2.421 2.421 0 0 1 1.734-.747h6.894c.635 0 1.227.263 1.692.747.508.483.72 1.099.72 1.758v4.352c0 .66-.255 1.275-.72 1.802-.423.483-1.1.703-1.734.703Zm-.592-10.55H5.737v-.352c0-.703.296-1.406.804-1.89a2.445 2.445 0 0 1 1.776-.747c.677 0 1.311.264 1.819.747a2.68 2.68 0 0 1 .761 1.89v.352h-.042Z' fill='%23257AE4'/%3E%3C/svg%3E");
}
.input {
    position: relative;
    font-weight: 400;
    font-style: normal;
    display: flex;
    flex-wrap: wrap;
    color: rgba(0,0,0,.87);
}
.input input[type=date] {
    height: 37px;
    font-size: 14px;
}
.input input[type=date]::-webkit-calendar-picker-indicator {
    padding-left: 0;
}
.input--disabled .label {
    background: #e5e5e5 !important;
}
.input--disabled .label span {
    color: #999;
    font-weight: normal;
    font-size: 14px;
}
.input--disabled input[disabled] {
    background: #e5e5e5 !important;
    color: #999;
}
.input label {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
}
.input > input,
.input select {
    margin: 0;
    max-width: 100%;
    flex: 1 0 auto;
    outline: 0;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    text-align: left;
    line-height: 1.21428571em;
    padding: 0.4em 1em;
    background-color: var(--alt-grey);
    border: 1px solid var(--alt-grey);
    color: rgba(0,0,0,.87);
    font-size: 18px;
    font-weight: 500;
    border-radius: 0.28571429rem;
    -webkit-transition: border-color 0.1s ease,-webkit-box-shadow 0.1s ease;
    transition: border-color 0.1s ease,-webkit-box-shadow 0.1s ease;
    transition: box-shadow 0.1s ease,border-color 0.1s ease;
    transition: box-shadow 0.1s ease,border-color 0.1s ease,-webkit-box-shadow 0.1s ease;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.input > input::placeholder,
.input select::placeholder {
    font-size: 12px;
    color: #999;
}
.input > input.alt-placeholder::placeholder,
.input select.alt-placeholder::placeholder {
    font-size: 12px;
    line-height: 20px;
    color: #ccc;
    font-style: italic;
}
.input > input {
    font-size: 14px;
}
.input textarea {
    padding: 8px 12px;
    border: 1px solid #e5e5e5;
    border-radius: 0.28571429rem;
}
.input .label {
    display: inline-flex;
    background-color: var(--alt-grey);
    background-image: none;
    border: 1px solid var(--alt-grey);
    padding: 0 0.833em;
    color: #000;
    text-transform: none;
    font-weight: 700;
    border: 0 solid rgba(0,0,0,0);
    border-radius: 0.28571429rem;
    -webkit-transition: background 0.1s ease;
    transition: background 0.1s ease;
    align-items: center;
}
.input .label > i {
    font-size: 1.2em;
}
.input.labeled input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
}
.input.labeled .label {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex: 0 0 auto;
    margin: 0;
    font-size: 1em;
    padding-right: 0;
    border-right: 0;
}
.input--bgwhite .label,
.input--bgwhite input,
.input--bgwhite select {
    background: #fff;
    border: 1px solid #e5e5e5;
}
.input select {
    webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    font-size: 16px;
}
.faq .input select {
    font-size: 14px;
    color: #666;
    font-weight: normal;
}
.input select option:hover {
    background-color: #999;
}
.input select.select-zakat {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
    font-size: 14px;
    color: #666;
}
.error .label,
.error .upload-file__preview,
.error input,
.error select,
.error textarea {
    border-color: var(--alertDanger);
}
.error .checklist-form {
    border: 1px solid var(--alertDanger);
}
.error.newsletter__form input {
    box-shadow: 0 0 2px 2px var(--alertDanger);
}
.error--validate {
    color: var(--alertDanger);
    padding-top: 10px;
    font-size: 14px;
}
.add {
    background: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,.25);
    border-radius: 4px;
    color: var(--main-color);
    border: 0;
    font-family: var(--alt-font);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    padding: 8px 0;
}
.add:focus {
    background: var(--main-color);
    color: #fff;
    outline: 0;
}
.slider-checkbox {
    position: relative;
}
.slider-checkbox input {
    margin: 1px 0 0;
    cursor: pointer;
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)""
    filter:alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    background: red;
    width: 40px;
    height: 20px;
}
.slider-checkbox input:checked+.label:before {
    background-color: #e5e5e5;
    content: "";
    padding-left: 6px;
}
.slider-checkbox input:checked+.label:after {
    right: 0;
    background: var(--main-color);
}
.slider-checkbox .label {
    position: relative;
    padding-left: 0;
    background-color: rgba(0,0,0,0);
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 131%;
    color: #666;
    width: 100%;
}
.slider-checkbox .label:after,
.slider-checkbox .label:before {
    position: absolute;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    transition: background-color 0.3s,right 0.2s;
}
.slider-checkbox .label:before {
    content: "";
    color: #fff;
    box-sizing: border-box;
    padding-left: 23px;
    background-color: var(--grey);
    right: 0;
    top: 0;
    height: 15px;
    width: 34px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
}
.slider-checkbox .label:after {
    content: "";
    letter-spacing: 20px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.14),0px 2px 1px rgba(0,0,0,.12),0px 1px 3px rgba(0,0,0,.2);
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
}
.payment-type {
    font-family: var(--alt-font);
}
.payment-type__header {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #666;
    background: #e6f5f8;
}
.payment-type a {
    text-decoration: none;
    color: inherit;
}
.payment-type__item {
    border-bottom: 1px solid #f0f0f0;
}
.payment-type__item i {
    font-size: 10px;
    margin-left: auto;
}
.payment-type__image {
    width: 50px;
    height: 20px;
    object-fit: contain;
}
.payment-type__text {
    font-weight: 600;
    font-size: 14px;
    color: #000;
}
.payment-type__text span {
    display: block;
    font-size: 9px;
    color: #bcbcbc;
}
.radio {
    box-shadow: 0 0 4px rgba(0,0,0,.08);
    border-radius: 4px;
}
.radio__header {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
}
.radio input[type=radio] {
    display: none;
}
.radio input[type=radio]:checked+label {
    background: var(--alt-grey);
    border: 1px solid var(--alt-grey);
    color: #000;
}
.radio label {
    border: 1px solid rgba(0,0,0,0);
    color: var(--grey);
    font-size: 14px;
    line-height: 22px;
    font-weight: normal;
    padding: 5px 28px;
}
.radio.radio--scroll {
    height: 138px;
    overflow-y: auto;
}
.volunteer__CTA-back {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
}
.checklist-form {
    font-family: var(--alt-font);
}
.checklist-form label {
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: var(--grey);
    display: inline-flex;
    align-items: center;
}
.checklist-form label:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2px solid #ccc;
    border-radius: 2px;
    margin-right: 8px;
}
.checklist-form input {
    display: none;
}
.checklist-form input:checked+label:before {
    background: url("../images/icon-close.svg") center center no-repeat;
    background-size: 80%;
}
.step-progress {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: var(--alt-font);
    --circle: 30px;
    --active: #7cafef;
    display: flex;
}
.step-progress:before {
    width: 15%;
    height: 3px;
    content: "";
    position: absolute;
    background-color: var(--active);
    top: calc(var(--circle)/2 - 1px);
    left: 0;
    z-index: 1;
}
.step-progress:after {
    width: 15%;
    height: 2px;
    content: "";
    position: absolute;
    background-color: #e6e6e6;
    top: calc(var(--circle)/2 - 1px);
    right: 0;
    z-index: 1;
}
.step-progress.active:after {
    background-color: var(--active);
    height: 3px;
}
.step-progress[data-steps="2"] li {
    width: 49%;
}
.step-progress[data-steps="3"] li {
    width: 33%;
}
.step-progress[data-steps="4"] li {
    width: 24%;
}
.step-progress[data-steps="5"] li {
    width: 19%;
}
.step-progress[data-steps="6"] li {
    width: 16%;
}
.step-progress[data-steps="7"] li {
    width: 14%;
}
.step-progress[data-steps="8"] li {
    width: 12%;
}
.step-progress[data-steps="9"] li {
    width: 11%;
}
.step-progress li {
    list-style-type: none;
    font-size: 11px;
    position: relative;
    text-align: center;
    color: var(--grey);
}
.step-progress li:before {
    width: var(--circle);
    height: var(--circle);
    content: attr(data);
    line-height: var(--circle);
    display: block;
    text-align: center;
    margin: 0 auto 10px;
    border-radius: 50%;
    position: relative;
    z-index: 3;
    background-color: #ccc;
    color: #fff;
    font-size: 14px;
}
.step-progress li:after {
    width: 100%;
    height: 2px;
    content: "";
    position: absolute;
    background-color: #e6e6e6;
    top: calc(var(--circle)/2);
    transform: translateY(-50%);
    left: -50%;
    z-index: 2;
}
.step-progress li:first-child:after {
    content: none;
}
.step-progress li.active {
    color: var(--active);
    font-weight: bold;
}
.step-progress li.active:after {
    background-color: var(--active);
    height: 3px;
}
.step-progress li.active:before {
    background: var(--active);
}
.step-progress li a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
}
.upload-file__preview {
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 11px;
    height: 184px;
}
.upload-file__preview img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.upload-file__terms {
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: var(--grey);
}
.verification {
    min-height: 100vh;
    font-family: var(--alt-font);
}
.verification__header {
    padding: 16px 0;
}
.verification__logo {
    width: 195px;
    height: 33px;
    object-fit: contain;
}
.verification__title {
    font-size: 18px;
    font-weight: bold;
}
.verification__greet {
    font-size: 16px;
    font-weight: bold;
}
.verification__body {
    color: var(--grey);
    font-size: 14px;
}
.verification__footer {
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #b9b9b9;
    margin-top: auto;
}
.form-group {
    margin-top: 2px;
}
.form-group__header {
    font-family: var(--alt-font);
    font-weight: 600;
    font-size: 14px;
    background: var(--main-color);
    color: var(--white);
    padding: 6px 13px;
    border-radius: 4px 4px 0 0;
    display: block;
}
.form-group__header .icon-chevron-thin-down {
    transition: transform 0.35s ease;
}
.form-group__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
}
.form-group__input {
    display: none;
}
.form-group__input:checked+.form-group__header .icon-chevron-thin-down {
    transform: rotate(-180deg);
}
.form-group__input:checked~.form-group__content {
    max-height: 100vh;
}
.border-top-separation {
    border-top: 1px solid var(--main-color);
}
.donation {
    font-family: "Montserrat",sans-serif;
    color: #333;
}
.donation__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
}
.donation__box {
    background: #f7f7f7;
    border-radius: 4px;
    padding: 14px;
}
.donation__row {
    padding-block: 10px;
    color: #666;
    font-weight: 500;
}
.donation__row:last-child {
    padding-bottom: 0;
}
.donation__line {
    border-bottom: 1px solid #e6e6e6;
}
.donation__sum {
    color: #000;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
}
.donation__note {
    color: #333;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: 6px 0;
}
.donation__note a {
    font-weight: bold;
    color: var(--main-color);
    text-decoration: none;
}
.donation__info {
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
}
.donation__tooltip {
    position: relative;
}
.donation__tooltip #donation__tooltip {
    display: none;
}
.donation__tooltip #donation__tooltip:checked~.donation__tooltip__box {
    opacity: 1;
    pointer-events: auto;
}
.donation__tooltip__box {
    margin: 0;
    padding: 15px 17px;
    background: #fff;
    filter:drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.2));
    border-radius: 4px;
    position:                                 dtr-ttl="CERITA BUNDA"
                                > 
                                    Cerita Bunda 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/trending" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="16" 
                                    dtr-ttl="TRENDING"
                                > 
                                    Trending 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/video" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="17" 
                                    dtr-ttl="VIDEO"
                                > 
                                    Video 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/komik" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="18" 
                                    dtr-ttl="KOMIK BUNDA"
                                > 
                                    Komik Bunda 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/infografis" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="19" 
                                    dtr-ttl="INFOGRAFIS"
                                > 
                                    Infografis 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/foto" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="20" 
                                    dtr-ttl="FOTO"
                                > 
                                    Foto 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/review-produk" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="21" 
                                    dtr-ttl="NAMA BAYI"
                                > 
                                    Review Produk 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/nama-bayi" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="22" 
                                    dtr-ttl="NAMA BAYI"
                                > 
                                    Nama Bayi 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/rekomendasi-produk" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="23" 
                                    dtr-ttl="REKOMENDASI PRODUK"
                                > 
                                    Rekomendasi Produk 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/bundapedia" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="24" 
                                    dtr-ttl="BUNDAPEDIA"
                                > 
                                    Bundapedia 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haibunda.com/haibunda-squad" class="text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white"
                                    dtr-evt="header" 
                                    dtr-sec="first navbar" 
                                    dtr-act="first navbar" 
                                    onclick="_pt(this)" 
                                    dtr-idx="25" 
                                    dtr-ttl="HAIBUNDA SQUAD"
                                > 
                                    HaiBunda Squad 
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="flex items-center gap-2" role="navigation" aria-label="User Login and Search">
                    <a href="https://www.haibunda.com/video" class="text-hb-blacklighter1 text-xs leading-3 tracking-wider mx-1 transition-colors hover:text-black">
                        <svg viewBox="0 0 32 32" class="w-7 text-hb-blacklighter2 transition-colors hover:text-black" astro-icon="la:play-circle-solid">
                            <path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm-4 3.125v13.75L13.5 22l9-5.125L24 16l-1.5-.875-9-5.125zm2 3.438L19.969 16 14 19.438z"></path>
                        </svg>
                    </a>
                    <div class="text-hb-blacklighter1 text-xs leading-3 tracking-wider mx-1 transition-colors hover:text-black hover:cursor-pointer" id="search-icon" onclick="searchPopup();_pt(this)"
                        dtr-evt="header" 
                        dtr-sec="button search" 
                        dtr-act="button search"
                    >
                        <svg viewBox="0 0 24 24" class="w-7 text-hb-blacklighter2 transition-colors hover:text-black hover:cursor-pointer" astro-icon="ic:baseline-search">
                            <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                    </div>
                    <div class="user-menu relative mx-1">
                        <a href="#" id="connectDetikAvatarContainer" class="text-hb-blacklighter1 text-xs leading-3 tracking-wider transition-colors hover:text-black">
                            <img src="https://cdn.haibunda.com/images/user.png?v=4.6.1" class="w-[24px] rounded-full" id="connectDetikAvatar" alt="">
                        </a>
                        <ul class="dropdown-user bg-hb-bgmain absolute z-[124] top-full -left-[120px] min-w-[150px] max-w-fit hidden whitespace-nowrap rounded-md shadow hover:pointer-events-auto">
                            <li>
                                <a href="https://connect.detik.com/accounts/register?clientId=10166&redirectUrl=https%3A%2F%2Fwww.haibunda.com%2Fauthorize&backURL=https%3A%2F%2Fwww.haibunda.com%2F" class="to_reg NotLogin text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white" dtr-evt="header" dtr-sec="button daftar" dtr-act="button daftar" onclick="_pt(this)">
                                    DAFTAR
                                </a>
                            </li>
                            <li>
                                <a href="https://connect.detik.com/oauth/authorize?clientId=10166&redirectUrl=https%3A%2F%2Fwww.haibunda.com%2Fauthorize%3Fu%3Dhttps%3A%2F%2Fwww.haibunda.com%2F&backURL=https%3A%2F%2Fwww.haibunda.com%2F" class="to_login NotLogin text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white" dtr-evt="header" dtr-sec="button masuk" dtr-act="button masuk" onclick="_pt(this)">
                                    MASUK
                                </a>
                            </li>
                            <li>
                                <a href="" id="UsernameInfo" class="HasLogin text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white" style="display: none;" dtr-evt="header" dtr-sec="button akun" dtr-act="button akun" onclick="_pt(this)">
                                </a>
                            </li>
                            <li>
                                <a href="https://connect.detik.com/oauth/signout?redirectUrl=https%3A%2F%2Fwww.haibunda.com%2F" class="HasLogin text-hb-blacklighter1 hover:bg-hb-bondi flex rounded-md px-5 py-2.5 font-bold tracking-wider transition-all hover:text-white" style="display: none;" dtr-evt="header" dtr-sec="button keluar" dtr-act="button keluar" onclick="_pt(this)">
                                    KELUAR
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            </nav>

    <ul class="flex items-center justify-center gap-5 py-4 text-sm" role="navigation" aria-label="Menu Secondary">
        <li class="flex relative">
            <a href="https://www.haibunda.com/review-produk" class="group transition-colors flex items-center tracking-wider font-bold hover:text-hb-bondi text-hb-blacklighter1" dtr-evt="header" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="1" dtr-ttl="REVIEW PRODUK"> Review Produk <div class="bg-hb-pink text-white rounded-full text-[8px] leading-[15px] px-1.5 font-light absolute -right-4 -top-3">NEW</div>
            </a>
        </li>
        <li class="flex">
            <a href="https://www.haibunda.com/rekomendasi-produk" class="group transition-colors flex items-center tracking-wider font-bold hover:text-hb-bondi text-hb-blacklighter1" dtr-evt="header" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="2" dtr-ttl="REKOMENDASI PRODUK"> Rekomendasi Produk </a>
        </li>
        <li class="flex">
            <a href="https://www.haibunda.com/bundapedia" class="group transition-colors flex items-center tracking-wider font-bold hover:text-hb-bondi text-hb-blacklighter1" dtr-evt="header" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="3" dtr-ttl="BUNDAPEDIA"> Bundapedia </a>
        </li>
        <li class="flex">
            <a href="https://www.haibunda.com/haibunda-squad" class="group transition-colors flex items-center tracking-wider font-bold hover:text-hb-bondi text-hb-blacklighter1" dtr-evt="header" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="4" dtr-ttl="HAIBUNDA SQUAD"> HaiBunda Squad </a>
        </li>
        <li class="flex">
            <a href="https://www.haibunda.com/nama-bayi" class="group transition-colors flex items-center tracking-wider font-bold hover:text-hb-bondi text-hb-blacklighter1" dtr-evt="header" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="5" dtr-ttl="NAMA BAYI"> Nama Bayi </a>
        </li>

        <li class="flex">
            <!-- s:banner navbar -->
            <ins data-labelname="navbar" data-revive-zoneid="3778" data-revive-id="0cceecb9cae9f51a31123c541910d59b"></ins>            <!-- e:banner navbar -->
        </li>
        <li class="flex">
            <!-- s:banner navbar2 -->
            <!-- /4905536/HaiBunda_desktop/newstag -->
<div id='div-gpt-ad-1635408778861-0'>
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1635408778861-0'); });
</script>
</div>            <!-- e:banner navbar2 -->
        </li>
        <li class="flex">
            <!-- s:banner navbar3 -->
                         <!-- e:banner navbar3 -->
        </li>
    </ul>

    <!-- s:script detikconnect -->
            <script defer type="text/javascript" src="https://cdn.detik.net.id/libs/dc/v1/detikconnect_auto_login.js"></script>
        <script type='text/javascript'>
            $(document).ready(function() {
                detikConnectAutoLogin('10166', false, onLoginClient);
            });
        </script>
    
    <script type='text/javascript'>
        function onLoginClient(data) {
            if (data.is_login) {
                if (!data.is_verify_adult) {
                                    }

                var fullname = (`${data.first_name} ${data.last_name}`).toUpperCase();
                $('#connectDetikAvatar').attr('src', data.avatar);
                $('#connectDetikAvatarContainer').css('background-image', `url(${data.avatar})`);
                $('#connectDetikAvatar').attr('alt', fullname);
                $('#UsernameInfo').html("HALLO, <span class='max-w-[121px] block overflow-hidden px-[3px] line-clamp-1'>"+fullname+"</span>!");
                $('#UsernameInfo').attr('href', `https://connect.detik.com/dashboard/`);

                $('.NotLogin').hide();
                $('.HasLogin').show();
            } else {
                
                $('.NotLogin span').show();
                $('.NotLogin img').hide();
            }
        }
    </script>
    <!-- e:script detikconnect -->

    <script lang="js">
    //SEARCH
    function searchPopup() {
        const search = document.getElementById("search-icon");
        const popup = document.getElementById("search-popup");
        const body = document.getElementsByTagName("body")[0];
        const text = "test animation";
        const array = text.split("");
        var timer;
        if(search.click) {
            popup.classList.remove("hidden");
            body.classList.add("truncate");
        }
        // if (array.length > 1) {
        //   document.getElementById("demo").innerHTML += array.shift();
        // } else {
        //   clearTimeout(timer);
        // }
        // loopTimer = setTimeout('searchPopup()', 20); /* change 70 for speed */
    }

    function closePopup() {
        const close = document.getElementById("icon-close");
        const popup = document.getElementById("search-popup");
        const body = document.getElementsByTagName("body")[0];
        if(close.click) {
            popup.classList.add("hidden");
            body.classList.remove("truncate")
        }
    }

    //MOVE 2ND NAVBAR INSIDE "LAINNYA"
    let scrollpos = window.scrollY
    const scrollmedsos = document.querySelector(".scroll-menu");
    const realmenu = document.querySelector(".realmenu");
    const scrollChange = 1
    const add_class_on_scroll = () => scrollmedsos.classList.remove("hidden");
    const add_class_on_scroll2 = () => realmenu.classList.add("hidden");
    const remove_class_on_scroll = () => scrollmedsos.classList.add("hidden")
    const remove_class_on_scroll2 = () => realmenu.classList.remove("hidden")
    window.addEventListener('scroll', function() {
        scrollpos = window.scrollY;
        if(scrollpos >= scrollChange) {
            add_class_on_scroll()
        } else {
            remove_class_on_scroll()
        }
        if(scrollpos >= scrollChange) {
            add_class_on_scroll2()
        } else {
            remove_class_on_scroll2()
        }
    })
    </script>


        <main class="container mt-5 flex flex-grow flex-col gap-7 relative">
            
            <div class="pushnotif w-[330px] h-auto m-auto bg-white text-hb-black p-2 rounded-md shadow-lg fixed top-0 -mt-[170px] z-[123] left-0 right-0 ease-in duration-700" id="push-notif">
    <div class="pushnotif__inner flex justify-center items-start h-full">
        <div class="logo-hb w-[50px]">
            <img alt="Terpopuler" class="object-cover aspect-square w-[50px]" width="100" height="100" src="https://cdn.haibunda.com/images/logo-hb.webp?v=4.6.1" loading="lazy" decoding="async">
        </div>
        <div class="text-push h-full flex items-center pl-4 text-[13px] w-[75%]">
            <div class="text-push-inner">
                <div class="font-semibold mb-2">Aktifkan notifikasi untuk dapat info terkini, Bun!</div>
                <div class="font-thin">Bunda dapat menonaktifkan kapanpun melalui pengaturan browser.</div>
                <div class="button-submit flex items-center justify-end mt-3">
                    <div class="bg-[#ededed] text-hb-pink py-2 px-4 rounded-sm mx-1 hover:cursor-pointer" id="no-notif" onclick="pushNotif()">Nanti saja</div>
                    <div class="text-white bg-hb-bondilight2 py-2 px-4 rounded-sm mx-1 hover:cursor-pointer" id="yes-notif" onclick="pushNotif()">Aktifkan</div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="https://cdn.haibunda.com/js/pushnotif.js?v=4.6.1"></script>

            <!-- s:content -->
<!-- s:banner billboard -->
<div class="billboard__banner" style="position: relative;width:970px;height:250px;background: #f8f8f8;margin:auto">
  <style>
    @import url('https://cdnstatic.detik.com/live/_rmbassets/bill-scrollpage/billdesktop-scrollpage.css');
  </style>
  <div class="box-ads text-center scrollpage" style="height: 250px;">
    <div class="ads-scrollpage-container">
      <div class="ads-scrollpage-height">
        <div class="ads-scrollpage-box" style="height: 250px;">
          <div class="ads-scrollpage-top">
            <div class="ads-scrollpage-banner">
              <ins data-labelname="billboard" data-revive-zoneid="1513"
                data-revive-id="0cceecb9cae9f51a31123c541910d59b"></ins>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div><!-- e:banner billboard -->

<!-- s:beritautama -->

<section class="grid grid-cols-3 gap-10 font-dmsans">
                            <a href="https://www.haibunda.com/kehamilan/20240117133319-49-326595/kiky-saputri-hamil-7-minggu-jadi-lebih-suka-bawa-rujak-ke-mana-mana" class="flex relative " dtr-evt="box berita utama" dtr-sec="berita utama" dtr-act="berita utama" onclick="_pt(this)" dtr-idx="1" dtr-id="326595" dtr-ttl="Kiky Saputri Hamil 7 Minggu, Jadi Lebih Suka Bawa Rujak ke Mana-mana">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                <div class="image-artikel">
                    <img alt="Logo Haibunda" class="object-cover aspect-[340/409] animated_img" width="750" height="561" src="https://akcdn.detik.net.id/visual/2024/01/11/sebelum-umumkan-kehamilan-kiky-saputri-asyik-kulineran-di-luar-negeri-3_34.png?w=750&q=90" loading="lazy" decoding="async" >
                </div>
                                <div class="py-6 px-8 flex flex-col gap-4 flex-grow">
                    <h3 class="uppercase text-xs font-bold tracking-widest text-hb-bondi"> Kehamilan </h3>
                    <h2 class="font-medium title-headline text-2xl line-clamp-4 hover:text-hb-bondi"> Kiky Saputri Hamil 7 Minggu, Jadi Lebih Suka Bawa Rujak ke Mana-mana </h2>
                    <span class="text-hb-greylight1 tracking-widest items-center mt-auto text-sm uppercase"> Nurul Jasmine Fathia </span>
                </div>
            </article>
        </a>
                            <a href="https://www.haibunda.com/parenting/20240116213109-62-326466/12-cara-mendidik-anak-laki-laki-agar-tumbuh-jadi-pribadi-yang-baik-dan-mandiri" class="flex relative " dtr-evt="box berita utama" dtr-sec="berita utama" dtr-act="berita utama" onclick="_pt(this)" dtr-idx="2" dtr-id="326466" dtr-ttl="12 Cara Mendidik Anak Laki-laki agar Tumbuh jadi Pribadi yang Baik dan Mandiri">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                <div class="image-artikel">
                    <img alt="Logo Haibunda" class="object-cover aspect-[340/409] animated_img" width="750" height="561" src="https://akcdn.detik.net.id/visual/2024/01/17/12-cara-mendidik-anak-laki-laki-dengan-benar-tumbuh-jadi-pribadi-yang-baik-dan-mandiri_34.jpeg?w=750&q=90" loading="lazy" decoding="async" >
                </div>
                                <div class="py-6 px-8 flex flex-col gap-4 flex-grow">
                    <h3 class="uppercase text-xs font-bold tracking-widest text-hb-bondi"> Parenting </h3>
                    <h2 class="font-medium title-headline text-2xl line-clamp-4 hover:text-hb-bondi"> 12 Cara Mendidik Anak Laki-laki agar Tumbuh jadi Pribadi yang Baik dan Mandiri </h2>
                    <span class="text-hb-greylight1 tracking-widest items-center mt-auto text-sm uppercase"> Kinan </span>
                </div>
            </article>
        </a>
                            <a href="https://www.haibunda.com/moms-life/20240118103903-76-326604/kate-middleton-jalani-operasi-di-rumah-sakit-dirawat-lebih-dari-dua-pekan" class="flex relative " dtr-evt="box berita utama" dtr-sec="berita utama" dtr-act="berita utama" onclick="_pt(this)" dtr-idx="3" dtr-id="326604" dtr-ttl="Kate Middleton Jalani Operasi di Rumah Sakit, Dirawat Lebih dari Dua Pekan">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                <div class="image-artikel">
                    <img alt="Logo Haibunda" class="object-cover aspect-[340/409] animated_img" width="750" height="561" src="https://akcdn.detik.net.id/visual/2023/12/17/kate-middleton-1_34.jpeg?w=750&q=90" loading="lazy" decoding="async" >
                </div>
                                <div class="py-6 px-8 flex flex-col gap-4 flex-grow">
                    <h3 class="uppercase text-xs font-bold tracking-widest text-hb-bondi"> Mom's Life </h3>
                    <h2 class="font-medium title-headline text-2xl line-clamp-4 hover:text-hb-bondi"> Kate Middleton Jalani Operasi di Rumah Sakit, Dirawat Lebih dari Dua Pekan </h2>
                    <span class="text-hb-greylight1 tracking-widest items-center mt-auto text-sm uppercase"> Annisa A </span>
                </div>
            </article>
        </a>
    </section><!-- e:beritautama -->

<!-- s:trending tag -->
<span data-name="detik-vertical" data-target="block/trendingtag">
    <section class="flex items-center tracking-wider text-white font-dmsans gap-2">
        <div class="bg-hb-bondi rounded-lg py-1 px-4 flex-shrink-0 tracking-wider"> TAG POPULER </div>
        <ul class="flex flex-wrap gap-y-3 py-1" aria-label="list Trending Topics">
                        <li class=" list-populer flex border-r-[1px] border-hb-bondi leading-4 last-of-type:border-r-0 hover:text-hb-bondi h-[32px] flex items-center">
                <a href="#" class="text-hb-black px-4 tracking-wider hover:text-hb-bondi">
                    <span class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2"></span>
                </a>
            </li>
                        <li class=" list-populer flex border-r-[1px] border-hb-bondi leading-4 last-of-type:border-r-0 hover:text-hb-bondi h-[32px] flex items-center">
                <a href="#" class="text-hb-black px-4 tracking-wider hover:text-hb-bondi">
                    <span class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2"></span>
                </a>
            </li>
                        <li class=" list-populer flex border-r-[1px] border-hb-bondi leading-4 last-of-type:border-r-0 hover:text-hb-bondi h-[32px] flex items-center">
                <a href="#" class="text-hb-black px-4 tracking-wider hover:text-hb-bondi">
                    <span class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2"></span>
                </a>
            </li>
                        <li class=" list-populer flex border-r-[1px] border-hb-bondi leading-4 last-of-type:border-r-0 hover:text-hb-bondi h-[32px] flex items-center">
                <a href="#" class="text-hb-black px-4 tracking-wider hover:text-hb-bondi">
                    <span class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2"></span>
                </a>
            </li>
                        <li class=" list-populer flex border-r-[1px] border-hb-bondi leading-4 last-of-type:border-r-0 hover:text-hb-bondi h-[32px] flex items-center">
                <a href="#" class="text-hb-black px-4 tracking-wider hover:text-hb-bondi">
                    <span class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2"></span>
                </a>
            </li>
                    </ul>
    </section>
</span><!-- e:trending tag -->

<!-- s:highlight -->
<section class="rounded-md bg-white py-7 px-9">
    <div class="flex items-start w-full">
        <h3 class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi"> HIGHLIGHT </h3>
    </div>
    <div class="highlight pt-7">
        <div class="highlight__list grid grid-cols-8 gap-2">
            <article>
                <a href="https://www.haibunda.com/program-hamil" class="highlight__kategori text-center" dtr-evt="highlight" dtr-sec="highlight" dtr-act="Program Hamil" onclick="_pt(this)">
                    <div class="image-artikel border-hb-bluelagoon w-[100px] rounded-full border-[3px]">
                        <img alt="Highglight" class=" m-auto aspect-square w-[100px] rounded-full object-cover" width="200" height="200" src="https://cdn.haibunda.com/images/highlight11.webp?v=4.6.1" loading="lazy" decoding="async">
                    </div>
                    <div class="highlight__kategori px-2 pt-2 text-lg font-normal leading-6"> Program Hamil </div>
                </a>
            </article>
            <article>
                <a href="https://www.haibunda.com/perkembangan-janin" class="highlight__kategori text-center" dtr-evt="highlight" dtr-sec="highlight" dtr-act="Fase Kehamilan" onclick="_pt(this)">
                    <div class="image-artikel border-hb-bluelagoon w-[100px] rounded-full border-[3px]">
                        <img alt="Highglight" class=" m-auto aspect-square w-[100px] rounded-full object-cover" width="200" height="200" src="https://cdn.haibunda.com/images/highlight22.webp?v=4.6.1" loading="lazy" decoding="async">
                    </div>
                    <div class="highlight__kategori px-2 pt-2 text-lg font-normal leading-6"> Fase Kehamilan </div>
                </a>
            </article>
            <article>
                <a href="https://www.haibunda.com/tumbuh-kembang-anak" class="highlight__kategori text-center" dtr-evt="highlight" dtr-sec="highlight" dtr-act="Fase Anak" onclick="_pt(this)">
                    <div class="image-artikel border-hb-bluelagoon w-[100px] rounded-full border-[3px]">
                        <img alt="Highglight" class=" m-auto aspect-square w-[100px] rounded-full object-cover" width="200" height="200" src="https://cdn.haibunda.com/images/highlight33.webp?v=4.6.1" loading="lazy" decoding="async">
                    </div>
                    <div class="highlight__kategori px-2 pt-2 text-lg font-normal leading-6"> Fase Anak </div>
                </a>
            </article>
            <article>
                <a href="https://www.haibunda.com/bundapedia" class="highlight__kategori text-center" dtr-evt="highlight" dtr-sec="highlight" dtr-act="Bundapedia" onclick="_pt(this)">
                    <div class="image-artikel border-hb-bluelagoon w-[100px] rounded-full border-[3px]">
                        <img alt="Highglight" class=" m-auto aspect-square w-[100px] rounded-full object-cover" width="200" height="200" src="https://cdn.haibunda.com/images/highlight44.webp?v=4.6.1" loading="lazy" decoding="async">
                    </div>
                    <div class="highlight__kategori px-2 pt-2 text-lg font-normal leading-6"> Bundapedia </div>
                </a>
            </article>
            <article>
                <a href="https://www.haibunda.com/tag/dongeng" class="highlight__kategori text-center" dtr-evt="highlight" dtr-sec="highlight" dtr-act="Dongeng Anak" onclick="_pt(this)">
                    <div class="image-artikel border-hb-bluelagoon w-[100px] rounded-full border-[3px]">
                        <img alt="Highglight" class=" m-auto aspect-square w-[100px] rounded-full object-cover" width="200" height="200" src="https://cdn.haibunda.com/images/highlight55.webp?v=4.6.1" loading="lazy" decoding="async">
                    </div>
                    <div class="highlight__kategori px-2 pt-2 text-lg font-normal leading-6"> Dongeng Anak </div>
                </a>
            </article>
            <article>
                <a href="https://www.haibunda.com/rekomendasi-produk" class="highlight__kategori text-center" dtr-evt="highlight" dtr-sec="highlight" dtr-act="Fokus" onclick="_pt(this)">
                    <div class="image-artikel border-hb-bluelagoon w-[100px] rounded-full border-[3px]">
                        <img alt="Highglight" class=" m-auto aspect-square w-[100px] rounded-full object-cover" width="200" height="200" src="https://cdn.haibunda.com/images/highlight66.webp?v=4.6.1" loading="lazy" decoding="async">
                    </div>
                    <div class="highlight__kategori px-2 pt-2 text-lg font-normal leading-6"> Rekomendasi Produk </div>
                </a>
            </article>
            <article>
                <a href="https://www.haibunda.com/nama-bayi" class="highlight__kategori text-center" dtr-evt="highlight" dtr-sec="highlight" dtr-act="Nama Bayi" onclick="_pt(this)">
                    <div class="image-artikel border-hb-bluelagoon w-[100px] rounded-full border-[3px]">
                        <img alt="Highglight" class=" m-auto aspect-square w-[100px] rounded-full object-cover" width="200" height="200" src="https://cdn.haibunda.com/images/highlight77.webp?v=4.6.1" loading="lazy" decoding="async">
                    </div>
                    <div class="highlight__kategori px-2 pt-2 text-lg font-normal leading-6"> Nama Bayi </div>
                </a>
            </article>
            <article>
                <a href="https://www.haibunda.com/tag/resep" class="highlight__kategori text-center" dtr-evt="highlight" dtr-sec="highlight" dtr-act="Resep" onclick="_pt(this)">
                    <div class="image-artikel border-hb-bluelagoon w-[100px] rounded-full border-[3px]">
                        <img alt="Highglight" class=" m-auto aspect-square w-[100px] rounded-full object-cover" width="200" height="200" src="https://cdn.haibunda.com/images/highlight88.webp?v=4.6.1" loading="lazy" decoding="async">
                    </div>
                    <div class="highlight__kategori px-2 pt-2 text-lg font-normal leading-6"> Resep </div>
                </a>
            </article>
        </div>
    </div>
</section><!-- e:highlight -->

<!-- s:programdokter -->
<section class="bg-[#CAEBF0] grid grid-cols-6 rounded-md overflow-hidden" data-name="detik-vertical"
    data-target="block/programdokter">
    <div class="bg-hb-bondi  col-span-2 py-8 px-11 flex flex-col gap-5 flex-shrink-0 rounded-md">
        <div class="flex items-center w-full boxtitle-link">
            <h3
                class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi text-white after:bg-white">
                BERSAMA DOKTER & AHLI </h3>
        </div>
        <p class="text-white font-medium animate-pulse">
            <span
                class="text-hb-bondidark line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[10px] bg-hb-whitedark2 mb-3"></span>
            <span
                class="text-hb-bondidark line-clamp-1 text-xs uppercase tracking-wider w-[80%] h-[10px] bg-hb-whitedark2 mb-3"></span>
            <span
                class="text-hb-bondi darkline-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></span>
        </p>
        <hr>
        <p class="text-white font-medium animate-pulse">
            <span
                class="text-hb-bondidark line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[10px] bg-hb-whitedark2 mb-3"></span>
            <span
                class="text-hb-bondidark line-clamp-1 text-xs uppercase tracking-wider w-[80%] h-[10px] bg-hb-whitedark2 mb-3"></span>
            <span
                class="text-hb-bondidark line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></span>
        </p>
    </div>
    <div class="col-span-4 px-10 pt-6 pb-5">
        <div class="relative min-h-[40px]">
            <div class="swiper dokter-swiper mb-8">
                <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                        <article>
                            <a href="#"
                                class="bg-white hover:bg-white rounded-lg overflow-hidden flex isolate flex-col items-center text-center px-3 pt-3 pb-3.5 justify-between h-52 relative before:absolute before:left-0 before:right-0 before:-z-10 before:bottom-0 before:h-1/2 before:bg-[#FAF8F9] before:pointer-events-none">
                                <h2 class="text-sm h-[60px] line-clamp-3 hover:text-hb-bondi animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></span>
                                </h2>
                                <div class="w-16 h-16 rounded-full overflow-hidden border">
                                    <div class="image-artikel h-[64px] w-[64px] bg-hb-whitedark2 animate-pulse"></div>
                                </div>
                                <p class="text-hb-bondi text-xs line-clamp-3 h-12 after:hidden animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[10px] bg-hb-whitedark2 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[10px] bg-hb-whitedark2 mt-1 mx-auto"></span>
                                </p>
                            </a>
                        </article>
                    </div>
                                        <div class="swiper-slide">
                        <article>
                            <a href="#"
                                class="bg-white hover:bg-white rounded-lg overflow-hidden flex isolate flex-col items-center text-center px-3 pt-3 pb-3.5 justify-between h-52 relative before:absolute before:left-0 before:right-0 before:-z-10 before:bottom-0 before:h-1/2 before:bg-[#FAF8F9] before:pointer-events-none">
                                <h2 class="text-sm h-[60px] line-clamp-3 hover:text-hb-bondi animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></span>
                                </h2>
                                <div class="w-16 h-16 rounded-full overflow-hidden border">
                                    <div class="image-artikel h-[64px] w-[64px] bg-hb-whitedark2 animate-pulse"></div>
                                </div>
                                <p class="text-hb-bondi text-xs line-clamp-3 h-12 after:hidden animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[10px] bg-hb-whitedark2 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[10px] bg-hb-whitedark2 mt-1 mx-auto"></span>
                                </p>
                            </a>
                        </article>
                    </div>
                                        <div class="swiper-slide">
                        <article>
                            <a href="#"
                                class="bg-white hover:bg-white rounded-lg overflow-hidden flex isolate flex-col items-center text-center px-3 pt-3 pb-3.5 justify-between h-52 relative before:absolute before:left-0 before:right-0 before:-z-10 before:bottom-0 before:h-1/2 before:bg-[#FAF8F9] before:pointer-events-none">
                                <h2 class="text-sm h-[60px] line-clamp-3 hover:text-hb-bondi animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></span>
                                </h2>
                                <div class="w-16 h-16 rounded-full overflow-hidden border">
                                    <div class="image-artikel h-[64px] w-[64px] bg-hb-whitedark2 animate-pulse"></div>
                                </div>
                                <p class="text-hb-bondi text-xs line-clamp-3 h-12 after:hidden animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[10px] bg-hb-whitedark2 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[10px] bg-hb-whitedark2 mt-1 mx-auto"></span>
                                </p>
                            </a>
                        </article>
                    </div>
                                        <div class="swiper-slide">
                        <article>
                            <a href="#"
                                class="bg-white hover:bg-white rounded-lg overflow-hidden flex isolate flex-col items-center text-center px-3 pt-3 pb-3.5 justify-between h-52 relative before:absolute before:left-0 before:right-0 before:-z-10 before:bottom-0 before:h-1/2 before:bg-[#FAF8F9] before:pointer-events-none">
                                <h2 class="text-sm h-[60px] line-clamp-3 hover:text-hb-bondi animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></span>
                                </h2>
                                <div class="w-16 h-16 rounded-full overflow-hidden border">
                                    <div class="image-artikel h-[64px] w-[64px] bg-hb-whitedark2 animate-pulse"></div>
                                </div>
                                <p class="text-hb-bondi text-xs line-clamp-3 h-12 after:hidden animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[10px] bg-hb-whitedark2 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[10px] bg-hb-whitedark2 mt-1 mx-auto"></span>
                                </p>
                            </a>
                        </article>
                    </div>
                                        <div class="swiper-slide">
                        <article>
                            <a href="#"
                                class="bg-white hover:bg-white rounded-lg overflow-hidden flex isolate flex-col items-center text-center px-3 pt-3 pb-3.5 justify-between h-52 relative before:absolute before:left-0 before:right-0 before:-z-10 before:bottom-0 before:h-1/2 before:bg-[#FAF8F9] before:pointer-events-none">
                                <h2 class="text-sm h-[60px] line-clamp-3 hover:text-hb-bondi animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></span>
                                </h2>
                                <div class="w-16 h-16 rounded-full overflow-hidden border">
                                    <div class="image-artikel h-[64px] w-[64px] bg-hb-whitedark2 animate-pulse"></div>
                                </div>
                                <p class="text-hb-bondi text-xs line-clamp-3 h-12 after:hidden animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[10px] bg-hb-whitedark2 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[10px] bg-hb-whitedark2 mt-1 mx-auto"></span>
                                </p>
                            </a>
                        </article>
                    </div>
                                        <div class="swiper-slide">
                        <article>
                            <a href="#"
                                class="bg-white hover:bg-white rounded-lg overflow-hidden flex isolate flex-col items-center text-center px-3 pt-3 pb-3.5 justify-between h-52 relative before:absolute before:left-0 before:right-0 before:-z-10 before:bottom-0 before:h-1/2 before:bg-[#FAF8F9] before:pointer-events-none">
                                <h2 class="text-sm h-[60px] line-clamp-3 hover:text-hb-bondi animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[15px] bg-hb-whitedark2 mb-1 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></span>
                                </h2>
                                <div class="w-16 h-16 rounded-full overflow-hidden border">
                                    <div class="image-artikel h-[64px] w-[64px] bg-hb-whitedark2 animate-pulse"></div>
                                </div>
                                <p class="text-hb-bondi text-xs line-clamp-3 h-12 after:hidden animate-pulse">
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[120px] h-[10px] bg-hb-whitedark2 mx-auto"></span>
                                    <span
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80px] h-[10px] bg-hb-whitedark2 mt-1 mx-auto"></span>
                                </p>
                            </a>
                        </article>
                    </div>
                                    </div>
            </div>
            <div
                class="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-full flex justify-between items-center pointer-events-none">
                <div
                    class="dokter-swiper-prev swiper-button-prev bg-white rounded-full w-9 h-9 grid place-content-center shadow-lg pointer-events-auto -translate-x-1/2">
                    <svg viewBox="0 0 24 24" class="h-8 text-hb-pink" astro-icon="ic:outline-chevron-left">
                        <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                    </svg>
                </div>
                <div
                    class="dokter-swiper-next swiper-button-next customSwiper-button-next bg-white rounded-full w-9 h-9 grid place-content-center shadow-lg pointer-events-auto translate-x-1/2">
                    <svg viewBox="0 0 24 24" class="h-8 text-hb-pink" astro-icon="ic:outline-chevron-right">
                        <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                </div>
            </div>
        </div>
        <script type="module">
            const swiperId = "dokter-swiper";
            const swiperPagination = "dokter-swiper-pagination";
            const swiperPrev = "dokter-swiper-prev";
            const swiperNext = "dokter-swiper-next";
            const slidesPerView = 4;
            const spaceBetween = 13;
            import Swiper from "https://cdn.haibunda.com/js/swiper-bundle.min.js?v=4.6.1";
            // import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
            // import Swiper from "swiper/bundle";
            const swiper = new Swiper(`.${swiperId}`, {
                slidesPerView: slidesPerView,
                spaceBetween: spaceBetween,
                pagination: {
                    el: `.${swiperPagination}`,
                    clickable: true,
                },
                navigation: {
                    prevEl: `.${swiperPrev}`,
                    nextEl: `.${swiperNext}`,
                },
            });
        </script>
        <div class="flex justify-center mt-10">
            <a href="#"
                class="inline-flex w-fit items-center font-raleway text-sm tracking-widest font-bold text-hb-bondi rounded-lg py-2.5 px-4 bg-hb-bondi text-white hover:bg-hb-bondi hover:text-white">
                KE HALAMAN BERSAMA DOKTER & AHLI <svg viewBox="0 0 16 16"
                    class="h-6 text-hb-bondi hover:text-white text-white" astro-icon="bi:chevron-right">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </a>
        </div>
    </div>
</section><!-- e:programdokter -->

<!-- s:terpopuler -->
<section class="bg-hb-greylight4 pt-7 pb-8 bleed-bg bleed-hb-greylight4">
    <div class="flex items-start w-full">
        <h3 class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi"> TERPOPULER </h3>
    </div>
    <div class="terpopuler grid grid-cols-5 pt-7 [&_*:nth-child(n+6)]:hidden" data-name="detik-vertical" data-target="block/terpopuler" kanal="47">
                <a href="#" class="flex terpopuler__link mr-5 ">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                <div class="image-artikel h-[200px] w-[200px] bg-hb-whitedark2 rounded-tl-lg rounded-tr-lg animate-pulse"></div>
                <div class="py-2 px-3 flex flex-col gap-1 flex-grow animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </article>
        </a>
                <a href="#" class="flex terpopuler__link mr-5 ">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                <div class="image-artikel h-[200px] w-[200px] bg-hb-whitedark2 rounded-tl-lg rounded-tr-lg animate-pulse"></div>
                <div class="py-2 px-3 flex flex-col gap-1 flex-grow animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </article>
        </a>
                <a href="#" class="flex terpopuler__link mr-5 ">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                <div class="image-artikel h-[200px] w-[200px] bg-hb-whitedark2 rounded-tl-lg rounded-tr-lg animate-pulse"></div>
                <div class="py-2 px-3 flex flex-col gap-1 flex-grow animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </article>
        </a>
                <a href="#" class="flex terpopuler__link mr-5 ">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                <div class="image-artikel h-[200px] w-[200px] bg-hb-whitedark2 rounded-tl-lg rounded-tr-lg animate-pulse"></div>
                <div class="py-2 px-3 flex flex-col gap-1 flex-grow animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </article>
        </a>
                <a href="#" class="flex terpopuler__link mr-5 ">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                <div class="image-artikel h-[200px] w-[200px] bg-hb-whitedark2 rounded-tl-lg rounded-tr-lg animate-pulse"></div>
                <div class="py-2 px-3 flex flex-col gap-1 flex-grow animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[80%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </article>
        </a>
            </div>
    <div class="clearfix"></div>
</section>
<!-- e:terpopuler -->

<!-- s:banner horizontal -->
<div class="billboard__banner" style="position: relative;width:970px;height:250px;background: #f8f8f8;margin:auto">
  <style>
    @import url('https://cdnstatic.detik.com/live/_rmbassets/bill-scrollpage/billdesktop-scrollpage.css');
  </style>
  <div class="box-ads text-center scrollpage" style="height: 250px;">
    <div class="ads-scrollpage-container">
      <div class="ads-scrollpage-height">
        <div class="ads-scrollpage-box" style="height: 250px;">
          <div class="ads-scrollpage-top">
            <div class="ads-scrollpage-banner">

<ins data-labelname="horizontal" data-revive-zoneid="1514" data-revive-id="0cceecb9cae9f51a31123c541910d59b"></ins>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div><!-- e:banner horizontal -->

<div class="grid grid-cols-default gap-[30px] mb-9">
    <!-- s:left content -->
    <div class="flex flex-col justify-start gap-9">
        <!-- s:nonheadline -->
                <section class="flex flex-col gap-7 artikel-terbaru">
        <div class="flex items-start w-full">
            <h3 class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi"> ARTIKEL TERBARU </h3>
        </div>
        <div class="flex flex-col gap-7 mt-7 artikel-terbaru">
    
            <article >
    <a 
        href="https://www.haibunda.com/trending/20240116203945-93-326600/15-rekomendasi-drama-china-episode-pendek-terbaik-rating-tertinggi" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="15 Rekomendasi Drama China Episode Pendek Terbaik Rating Tertinggi" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326600" 
        dtr-idx="1"
    >
        <div class="image-artikel w-52">
            <img 
                alt="15 Rekomendasi Drama China Episode Pendek Terbaik Rating Tertinggi" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2024/01/18/drama-china-taking-love-as-a-contract_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Trending </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> 15 Rekomendasi Drama China Episode Pendek Terbaik Rating Tertinggi </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Ousama El Fatha Kusnandar</span>
        </div>
    </a>
</article>
        <!-- s:banner newsfeed2 -->
        <div data-name="detik-vertical" data-target="block/banner" name="newsfeed2"></div>
        <!-- e:banner newsfeed2 -->
        <article >
    <a 
        href="https://www.haibunda.com/kehamilan/20240117105100-49-326512/10-makanan-yang-perlu-dihindari-setelah-bunda-melahirkan" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="10 Makanan yang Perlu Dihindari setelah Bunda Melahirkan" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326512" 
        dtr-idx="2"
    >
        <div class="image-artikel w-52">
            <img 
                alt="10 Makanan yang Perlu Dihindari setelah Bunda Melahirkan" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2024/01/17/perineum-usai-melahirkan_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Kehamilan </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> 10 Makanan yang Perlu Dihindari setelah Bunda Melahirkan </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Melly Febrida</span>
        </div>
    </a>
</article>
        <!-- s:banner parallax1 -->
        <div data-name="detik-vertical" data-target="block/banner" name="parallax1"></div>
        <!-- e:banner parallax1 -->
    
            </div>
    </section>
        
        <div class="flex flex-col gap-7 artikel-terbaru">
    
            <section class="bg-white w-full rounded-lg">
    <div class="foto-wide">
        <a 
            href="https://www.haibunda.com/parenting/20240117141718-63-326541/7-potret-ulang-tahun-putra-bungsu-donita-unik-bertema-tni-ad-bun" 
            class="infografis__link relative"
            onclick="_pt(this)" 
            dtr-ttl="7 Potret Ulang Tahun Putra Bungsu Donita, Unik Bertema TNI AD Bun" 
            dtr-evt="newsfeed" 
            dtr-sec="artikel newsfeed" 
            dtr-act="artikel" 
            dtr-id="326541" 
            dtr-idx="3"
        >
            <article class="overflow-hidden bg-white rounded-lg">
                <div class="image-artikel">
                    <img alt="Foto" class="object-cover w-full" width="1490" height="844" src="https://akcdn.detik.net.id/visual/2024/01/17/potret-parva-anak-donita-3_169.jpeg?w=1490&q=90" loading="lazy" decoding="async">
                </div>
                <div class="count-foto absolute flex top-3 right-3">
                    <div class="count-foto__content-count flex items-center z-[1] p-1 rounded-md">
                        <div class="count-foto__icon pr-1">
                            <img alt="Count foto" class="object-cover aspect-square w-[16px]" width="32" height="32" src="https://cdn.haibunda.com/images/icon-foto.webp?v=4.6.1" loading="lazy" decoding="async">
                        </div>
                        <div class="count-foto__number text-white">
                            <p class="text-xs">7 Foto</p>
                        </div>
                    </div>
                </div>
                <div class="py-2 px-3 flex flex-col gap-1 py-5 px-10 flex-grow">
                    <h3 class="font-light tracking-widest text-lg leading-[22px] line-clamp-2">7 Potret Ulang Tahun Putra Bungsu Donita, Unik Bertema TNI AD Bun</h3>
                </div>
            </article>
        </a>
    </div>
</section>
        <article >
    <a 
        href="https://www.haibunda.com/moms-life/20240117104059-90-326486/7-resep-kue-tanpa-mixer-dan-oven-yang-anti-mahal-dan-ribet-disukai-anak-anak-bun" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="7 Resep Kue Tanpa Mixer dan Oven yang Anti Mahal dan Ribet, Disukai Anak-anak Bun!" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326486" 
        dtr-idx="4"
    >
        <div class="image-artikel w-52">
            <img 
                alt="7 Resep Kue Tanpa Mixer dan Oven yang Anti Mahal dan Ribet, Disukai Anak-anak Bun!" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2024/01/17/ilustrasi-lava-cake_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Mom's Life </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> 7 Resep Kue Tanpa Mixer dan Oven yang Anti Mahal dan Ribet, Disukai Anak-anak Bun! </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Amira Salsabila</span>
        </div>
    </a>
</article>
        <!-- TODO: Promobox Katalog Bunda -->
        <!-- s: cb video -->
        <div class="video-slider bg-hb-greylight4 mt-5 rounded-md p-6" data-name="detik-vertical" data-target="block/video">
    <div class="header-box relative h-[30px] w-[30%] bg-hb-whitedark2">
    </div>
    <div class="video-slider__coloumn mt-5">
        <div class="relative min-h-[40px]">
            <div class="swiper video-slider-swiper mb-8">
                <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                        <a href="#" class="video__link relative flex">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                <div class="video__image relative">
                                    <div class="image-artikel">
                                        <div class="h-[198px] w-full bg-hb-whitedark2 rounded-lg"></div>
                                    </div>
                                    <div
                                        class="video__textimage absolute bottom-[10px] left-[10px] right-0 mr-auto w-[60%] rounded-[6px] p-3 text-center text-sm font-semibold text-[#C31F47] h-[30px] bg-hb-whitedark2">
                                    </div>
                                </div>
                                <div class="flex flex-grow flex-col gap-1 p-4">
                                    <h2 class="line-clamp-2 text-xl font-normal ">
                                    </h2>
                                    <div class="video__count-video">
                                    </div>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="video__link relative flex">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                <div class="video__image relative">
                                    <div class="image-artikel">
                                        <div class="h-[198px] w-full bg-hb-whitedark2 rounded-lg"></div>
                                    </div>
                                    <div
                                        class="video__textimage absolute bottom-[10px] left-[10px] right-0 mr-auto w-[60%] rounded-[6px] p-3 text-center text-sm font-semibold text-[#C31F47] h-[30px] bg-hb-whitedark2">
                                    </div>
                                </div>
                                <div class="flex flex-grow flex-col gap-1 p-4">
                                    <h2 class="line-clamp-2 text-xl font-normal ">
                                    </h2>
                                    <div class="video__count-video">
                                    </div>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="video__link relative flex">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                <div class="video__image relative">
                                    <div class="image-artikel">
                                        <div class="h-[198px] w-full bg-hb-whitedark2 rounded-lg"></div>
                                    </div>
                                    <div
                                        class="video__textimage absolute bottom-[10px] left-[10px] right-0 mr-auto w-[60%] rounded-[6px] p-3 text-center text-sm font-semibold text-[#C31F47] h-[30px] bg-hb-whitedark2">
                                    </div>
                                </div>
                                <div class="flex flex-grow flex-col gap-1 p-4">
                                    <h2 class="line-clamp-2 text-xl font-normal ">
                                    </h2>
                                    <div class="video__count-video">
                                    </div>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="video__link relative flex">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                <div class="video__image relative">
                                    <div class="image-artikel">
                                        <div class="h-[198px] w-full bg-hb-whitedark2 rounded-lg"></div>
                                    </div>
                                    <div
                                        class="video__textimage absolute bottom-[10px] left-[10px] right-0 mr-auto w-[60%] rounded-[6px] p-3 text-center text-sm font-semibold text-[#C31F47] h-[30px] bg-hb-whitedark2">
                                    </div>
                                </div>
                                <div class="flex flex-grow flex-col gap-1 p-4">
                                    <h2 class="line-clamp-2 text-xl font-normal ">
                                    </h2>
                                    <div class="video__count-video">
                                    </div>
                                </div>
                            </article>
                        </a>
                    </div>
                                    </div>
            </div>
            <div class="swiper-pagination swiper-pagination-custom video-slider-swiper-pagination"></div>
        </div>
        <script type="module">
            const swiperId = "video-slider-swiper";
            const swiperPagination = "video-slider-swiper-pagination";
            const swiperPrev = "video-slider-swiper-prev";
            const swiperNext = "video-slider-swiper-next";
            const slidesPerView = 2;
            const spaceBetween = 13;
            import Swiper from "https://cdn.haibunda.com/js/swiper-bundle.min.js?v=4.6.1";
            const swiper = new Swiper(`.${swiperId}`, {
                slidesPerView: slidesPerView,
                spaceBetween: spaceBetween,
                pagination: {
                    el: `.${swiperPagination}`,
                    clickable: true,
                },
                autoplay: true,
                navigation: {
                    prevEl: `.${swiperPrev}`,
                    nextEl: `.${swiperNext}`,
                },
            });
        </script>
    </div>
</div>        <!-- e: cb video -->
    
        </div>
        
        <div class="flex flex-col gap-7 artikel-terbaru">
    
            <!-- s: bundapedia -->
        <section class="bg-hb-bondilight1 rounded-md px-6 py-7" data-name="detik-vertical"
    data-target="block/bundapedia/bundapedia-cb" kanal=209 name="general">
    <div class="h-[30px] w-[30%] bg-hb-whitedark2"></div>
    <div class="cb-bundapedia">
        <div class="cb-bundapedia__title text-lg text-white h-[20px] w-[80%] mt-4 bg-hb-whitedark2">
        </div>
        <div class="cb-bundapedia__coloumn-content grid grid-cols-[35%_64%] items-center gap-[1%]">
            <div class="cb-bundapedia__left">
                <div class="h-[30px] w-30% bg-hb-whitedark2 mt-4"></div>
                <div class="h-[30px] w-30% bg-hb-whitedark2 mt-4"></div>
                <div class="h-[30px] w-30% bg-hb-whitedark2 mt-4"></div>
            </div>
            <div class="cb-bundapedia__right mt-4 px-7 grid grid-cols-3">
                <div class="h-[130px] mr-2 bg-hb-whitedark2"></div>
                <div class="h-[130px] mr-2 bg-hb-whitedark2"></div>
                <div class="h-[130px] mr-2 bg-hb-whitedark2"></div>
            </div>
        </div>
    </div>
    <div class="button-lainnya mt-4 text-center w-[50%] h-[30px] bg-hb-whitedark2 m-auto ">
    </div>
</section>        <!-- e: bundapedia -->
        <article >
    <a 
        href="https://www.haibunda.com/moms-life/20240118163353-76-326641/akibat-ditabrak-tronton-anak-pekerja-serabutan-tabah-berjuang-sembuh" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="Akibat Ditabrak Tronton, Anak Pekerja Serabutan Tabah Berjuang Sembuh" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326641" 
        dtr-idx="5"
    >
        <div class="image-artikel w-52">
            <img 
                alt="Akibat Ditabrak Tronton, Anak Pekerja Serabutan Tabah Berjuang Sembuh" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2024/01/17/devi-1_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Mom's Life </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> Akibat Ditabrak Tronton, Anak Pekerja Serabutan Tabah Berjuang Sembuh </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: tim berbuatbaik.id</span>
        </div>
    </a>
</article>
        <!-- s: cb rekomendasi -->
        <div data-name="detik-vertical" data-target="block/rekomendasi_bytedance" >
<section class="bg-hb-greylight4 w-full rounded-md px-4 py-7" >
    <div class="header-box relative h-[30px] bg-hb-whitedark2 w-[30%]">
    </div>
    <div class="rek-slider pt-7">
        <div class="relative min-h-[40px]">
            <div class="swiper rek_slider-swiper mb-8">
                <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                        <a href="#" class="rekomendasi-slider__link flex">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                <div class="image-artikel relative h-[125px] w-full bg-hb-whitedark2 rounded-lg"></div>
                                <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                    <h3
                                        class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] bg-hb-whitedark2">
                                    </h3>
                                    <h2 class="line-clamp-3 text-sm font-medium  h-[50px] bg-hb-whitedark2">
                                    </h2>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="rekomendasi-slider__link flex">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                <div class="image-artikel relative h-[125px] w-full bg-hb-whitedark2 rounded-lg"></div>
                                <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                    <h3
                                        class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] bg-hb-whitedark2">
                                    </h3>
                                    <h2 class="line-clamp-3 text-sm font-medium  h-[50px] bg-hb-whitedark2">
                                    </h2>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="rekomendasi-slider__link flex">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                <div class="image-artikel relative h-[125px] w-full bg-hb-whitedark2 rounded-lg"></div>
                                <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                    <h3
                                        class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] bg-hb-whitedark2">
                                    </h3>
                                    <h2 class="line-clamp-3 text-sm font-medium  h-[50px] bg-hb-whitedark2">
                                    </h2>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="rekomendasi-slider__link flex">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                <div class="image-artikel relative h-[125px] w-full bg-hb-whitedark2 rounded-lg"></div>
                                <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                    <h3
                                        class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] bg-hb-whitedark2">
                                    </h3>
                                    <h2 class="line-clamp-3 text-sm font-medium  h-[50px] bg-hb-whitedark2">
                                    </h2>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="rekomendasi-slider__link flex">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                <div class="image-artikel relative h-[125px] w-full bg-hb-whitedark2 rounded-lg"></div>
                                <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                    <h3
                                        class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] bg-hb-whitedark2">
                                    </h3>
                                    <h2 class="line-clamp-3 text-sm font-medium  h-[50px] bg-hb-whitedark2">
                                    </h2>
                                </div>
                            </article>
                        </a>
                    </div>
                                    </div>
            </div>
            <div
                class="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-full flex justify-between items-center pointer-events-none">
                <div
                    class="rek_slider-swiper-prev swiper-button-prev bg-white rounded-full w-9 h-9 grid place-content-center shadow-lg pointer-events-auto -translate-x-1/2">
                    <svg viewBox="0 0 24 24" class="h-8 text-hb-pink" astro-icon="ic:outline-chevron-left">
                        <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                    </svg>
                </div>
                <div
                    class="rek_slider-swiper-next swiper-button-next customSwiper-button-next bg-white rounded-full w-9 h-9 grid place-content-center shadow-lg pointer-events-auto translate-x-1/2">
                    <svg viewBox="0 0 24 24" class="h-8 text-hb-pink" astro-icon="ic:outline-chevron-right">
                        <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                </div>
            </div>
        </div>
        <script type="module">
            const swiperId = "rek_slider-swiper";
            const swiperPagination = "rek_slider-swiper-pagination";
            const swiperPrev = "rek_slider-swiper-prev";
            const swiperNext = "rek_slider-swiper-next";
            const slidesPerView = 3;
            const spaceBetween = 13;
            import Swiper from "https://cdn.haibunda.com/js/swiper-bundle.min.js?v=4.6.1";
            const swiper = new Swiper(`.${swiperId}`, {
                slidesPerView: slidesPerView,
                spaceBetween: spaceBetween,
                pagination: {
                    el: `.${swiperPagination}`,
                    clickable: true,
                },
                navigation: {
                    prevEl: `.${swiperPrev}`,
                    nextEl: `.${swiperNext}`,
                },
            });
        </script>
    </div>
</section>
</div>        <!-- e: cb rekomendasi -->
        <section class="bg-white w-full rounded-lg">
    <div class="foto-wide">
        <a 
            href="https://www.haibunda.com/moms-life/20240117160938-77-326566/5-potret-laudya-cynthia-bella-dengan-gamis-syari-dipuji-semakin-cantik-istiqomah" 
            class="infografis__link relative"
            onclick="_pt(this)" 
            dtr-ttl="5 Potret Laudya Cynthia Bella dengan Gamis Syar'i, Dipuji Semakin Cantik & Istiqomah" 
            dtr-evt="newsfeed" 
            dtr-sec="artikel newsfeed" 
            dtr-act="artikel" 
            dtr-id="326566" 
            dtr-idx="6"
        >
            <article class="overflow-hidden bg-white rounded-lg">
                <div class="image-artikel">
                    <img alt="Foto" class="object-cover w-full" width="1490" height="844" src="https://akcdn.detik.net.id/visual/2024/01/17/laudya-cynthia-bella-1_169.jpeg?w=1490&q=90" loading="lazy" decoding="async">
                </div>
                <div class="count-foto absolute flex top-3 right-3">
                    <div class="count-foto__content-count flex items-center z-[1] p-1 rounded-md">
                        <div class="count-foto__icon pr-1">
                            <img alt="Count foto" class="object-cover aspect-square w-[16px]" width="32" height="32" src="https://cdn.haibunda.com/images/icon-foto.webp?v=4.6.1" loading="lazy" decoding="async">
                        </div>
                        <div class="count-foto__number text-white">
                            <p class="text-xs">5 Foto</p>
                        </div>
                    </div>
                </div>
                <div class="py-2 px-3 flex flex-col gap-1 py-5 px-10 flex-grow">
                    <h3 class="font-light tracking-widest text-lg leading-[22px] line-clamp-2">5 Potret Laudya Cynthia Bella dengan Gamis Syar'i, Dipuji Semakin Cantik & Istiqomah</h3>
                </div>
            </article>
        </a>
    </div>
</section>
    
        </div>
        
        <div class="flex flex-col gap-7 artikel-terbaru">
    
            <article >
    <a 
        href="https://www.haibunda.com/moms-life/20240111111920-76-326481/7-buah-yang-sebaiknya-dihindari-saat-flu-dan-batuk-jeruk-termasuk-bun" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="7 Buah yang Sebaiknya Dihindari Saat Flu dan Batuk, Jeruk Termasuk Bun!" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326481" 
        dtr-idx="7"
    >
        <div class="image-artikel w-52">
            <img 
                alt="7 Buah yang Sebaiknya Dihindari Saat Flu dan Batuk, Jeruk Termasuk Bun!" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2023/12/28/ilustrasi-jeruk_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Mom's Life </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> 7 Buah yang Sebaiknya Dihindari Saat Flu dan Batuk, Jeruk Termasuk Bun! </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Arina Yulistara</span>
        </div>
    </a>
</article>
        <!-- s:banner newsfeed3 -->
        <div data-name="detik-vertical" data-target="block/banner" name="newsfeed3"></div>
        <!-- e:banner newsfeed3 -->
        <article >
    <a 
        href="https://www.haibunda.com/kehamilan/20240112141006-49-326304/sperma-dikeluarkan-di-dalam-saat-hamil-berbahayakah" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="Sperma Dikeluarkan di Dalam saat Hamil, Berbahayakah?" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326304" 
        dtr-idx="8"
    >
        <div class="image-artikel w-52">
            <img 
                alt="Sperma Dikeluarkan di Dalam saat Hamil, Berbahayakah?" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2022/09/12/seks-saat-hamil-1_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Kehamilan </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> Sperma Dikeluarkan di Dalam saat Hamil, Berbahayakah? </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Nanie Wardhani</span>
        </div>
    </a>
</article>
        <article >
    <a 
        href="https://www.haibunda.com/parenting/20240115205139-62-326387/anak-usia-2-tahun-sering-menangis-tengah-malam-tanpa-sebab-begini-penanganannya" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="Anak Usia 2 Tahun Sering Menangis Tengah Malam Tanpa Sebab? Begini Penanganannya" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326387" 
        dtr-idx="9"
    >
        <div class="image-artikel w-52">
            <img 
                alt="Anak Usia 2 Tahun Sering Menangis Tengah Malam Tanpa Sebab? Begini Penanganannya" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2024/01/16/anak-menangis-malam-hari-tanpa-sebab_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Parenting </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> Anak Usia 2 Tahun Sering Menangis Tengah Malam Tanpa Sebab? Begini Penanganannya </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Kinan</span>
        </div>
    </a>
</article>
    
        </div>
        
        <div class="flex flex-col gap-7 artikel-terbaru">
    
            <!-- s: Editorial Rating -->
        <div data-name="detik-vertical" data-target="block/cb-reviewproduk" category_id="2,3,1" category_name="">
    <section class="bg-hb-whitedark2 w-full rounded-md px-4 py-7 animate-pulse placeholder-review">
        <div class="w-[30%] h-[30px] bg-white"></div>
        <div class="rek-rating mt-7">
            <div class="relative min-h-[40px]">
                <div class="swiper rek-review-cb-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                    <div class="swiper-wrapper" id="swiper-wrapper-82beecdf5914b2e5" aria-live="polite" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                                                <div class="swiper-slide" role="group" aria-label="1 / 5" style="width: 229.667px; margin-right: 13px;">
                            <a href="#" class="terpopuler__link flex">
                                <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                    <div class="image-artikel relative">
                                        <div class="w-full h-[230px] bg-hb-whitedark1 rounded-lg"></div>
                                    </div>
                                    <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                        <div class="flex items-center gap-8">
                                            <h3 class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] w-[75%] bg-hb-whitedark2">
                                            </h3>
                                            <h3 class="h-[20px] bg-hb-whitedark2 w-[25%]">
                                            </h3>
                                        </div>
                                        <div class="rek-rating__rating-list flex items-center h-[20px] bg-hb-whitedark2 w-[50%]">
                                        </div>
                                        <h4 class="text-hb-blacklighter2 text-sm h-[20px] bg-hb-whitedark2 mb-2">
                                        </h4>
                                        <h2 class="line-clamp-4  text-sm font-medium h-[60px] bg-hb-whitedark2">
                                        </h2>
                                    </div>
                                </article>
                            </a>
                        </div>
                                                <div class="swiper-slide" role="group" aria-label="2 / 5" style="width: 229.667px; margin-right: 13px;">
                            <a href="#" class="terpopuler__link flex">
                                <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                    <div class="image-artikel relative">
                                        <div class="w-full h-[230px] bg-hb-whitedark1 rounded-lg"></div>
                                    </div>
                                    <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                        <div class="flex items-center gap-8">
                                            <h3 class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] w-[75%] bg-hb-whitedark2">
                                            </h3>
                                            <h3 class="h-[20px] bg-hb-whitedark2 w-[25%]">
                                            </h3>
                                        </div>
                                        <div class="rek-rating__rating-list flex items-center h-[20px] bg-hb-whitedark2 w-[50%]">
                                        </div>
                                        <h4 class="text-hb-blacklighter2 text-sm h-[20px] bg-hb-whitedark2 mb-2">
                                        </h4>
                                        <h2 class="line-clamp-4  text-sm font-medium h-[60px] bg-hb-whitedark2">
                                        </h2>
                                    </div>
                                </article>
                            </a>
                        </div>
                                                <div class="swiper-slide" role="group" aria-label="3 / 5" style="width: 229.667px; margin-right: 13px;">
                            <a href="#" class="terpopuler__link flex">
                                <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                    <div class="image-artikel relative">
                                        <div class="w-full h-[230px] bg-hb-whitedark1 rounded-lg"></div>
                                    </div>
                                    <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                        <div class="flex items-center gap-8">
                                            <h3 class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] w-[75%] bg-hb-whitedark2">
                                            </h3>
                                            <h3 class="h-[20px] bg-hb-whitedark2 w-[25%]">
                                            </h3>
                                        </div>
                                        <div class="rek-rating__rating-list flex items-center h-[20px] bg-hb-whitedark2 w-[50%]">
                                        </div>
                                        <h4 class="text-hb-blacklighter2 text-sm h-[20px] bg-hb-whitedark2 mb-2">
                                        </h4>
                                        <h2 class="line-clamp-4  text-sm font-medium h-[60px] bg-hb-whitedark2">
                                        </h2>
                                    </div>
                                </article>
                            </a>
                        </div>
                                                <div class="swiper-slide" role="group" aria-label="4 / 5" style="width: 229.667px; margin-right: 13px;">
                            <a href="#" class="terpopuler__link flex">
                                <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                    <div class="image-artikel relative">
                                        <div class="w-full h-[230px] bg-hb-whitedark1 rounded-lg"></div>
                                    </div>
                                    <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                        <div class="flex items-center gap-8">
                                            <h3 class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] w-[75%] bg-hb-whitedark2">
                                            </h3>
                                            <h3 class="h-[20px] bg-hb-whitedark2 w-[25%]">
                                            </h3>
                                        </div>
                                        <div class="rek-rating__rating-list flex items-center h-[20px] bg-hb-whitedark2 w-[50%]">
                                        </div>
                                        <h4 class="text-hb-blacklighter2 text-sm h-[20px] bg-hb-whitedark2 mb-2">
                                        </h4>
                                        <h2 class="line-clamp-4  text-sm font-medium h-[60px] bg-hb-whitedark2">
                                        </h2>
                                    </div>
                                </article>
                            </a>
                        </div>
                                                <div class="swiper-slide" role="group" aria-label="5 / 5" style="width: 229.667px; margin-right: 13px;">
                            <a href="#" class="terpopuler__link flex">
                                <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white">
                                    <div class="image-artikel relative">
                                        <div class="w-full h-[230px] bg-hb-whitedark1 rounded-lg"></div>
                                    </div>
                                    <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                        <div class="flex items-center gap-8">
                                            <h3 class="text-hb-bondi text-xs font-normal uppercase tracking-widest h-[20px] w-[75%] bg-hb-whitedark2">
                                            </h3>
                                            <h3 class="h-[20px] bg-hb-whitedark2 w-[25%]">
                                            </h3>
                                        </div>
                                        <div class="rek-rating__rating-list flex items-center h-[20px] bg-hb-whitedark2 w-[50%]">
                                        </div>
                                        <h4 class="text-hb-blacklighter2 text-sm h-[20px] bg-hb-whitedark2 mb-2">
                                        </h4>
                                        <h2 class="line-clamp-4  text-sm font-medium h-[60px] bg-hb-whitedark2">
                                        </h2>
                                    </div>
                                </article>
                            </a>
                        </div>
                                            </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                <div class="absolute top-[42%] left-0 -translate-y-1/2 z-10 w-full flex justify-between items-center h-14">
                    <div class="rek-review-cb-swiper-prev swiper-button-prev customSwiper-button-prev bg-white rounded-full w-9 h-9 grid place-content-center shadow-lg pointer-events-auto -translate-x-1/2 swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-82beecdf5914b2e5" aria-disabled="true">
                        <svg viewBox="0 0 24 24" class="h-8 text-hb-pink" astro-icon="ic:baseline-keyboard-arrow-left">
                            <path fill="currentColor" d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                        </svg>
                    </div>
                    <div class="rek-review-cb-swiper-next swiper-button-next customSwiper-button-next bg-white rounded-full w-9 h-9 grid place-content-center shadow-lg pointer-events-auto translate-x-1/2" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-82beecdf5914b2e5" aria-disabled="false">
                        <svg viewBox="0 0 24 24" class="h-8 text-hb-pink" astro-icon="ic:baseline-keyboard-arrow-right">
                            <path fill="currentColor" d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>        <!-- e: Editorial Rating -->
                    <section class="bg-white w-full rounded-lg">
    <div class="foto-wide">
        <a 
            href="https://www.haibunda.com/parenting/20240116173150-63-326448/7-potret-gemas-bayi-laki-laki-artis-saat-photoshoot-newborn-ada-yang-jadi-aladdin" 
            class="infografis__link relative"
            onclick="_pt(this)" 
            dtr-ttl="7 Potret Gemas Bayi Laki-Laki Artis saat Photoshoot Newborn, Ada yang Jadi Aladdin" 
            dtr-evt="newsfeed" 
            dtr-sec="artikel newsfeed" 
            dtr-act="artikel" 
            dtr-id="326448" 
            dtr-idx="10"
        >
            <article class="overflow-hidden bg-white rounded-lg">
                <div class="image-artikel">
                    <img alt="Foto" class="object-cover w-full" width="1490" height="844" src="https://akcdn.detik.net.id/visual/2024/01/16/potret-bayi-laki-laki-artis-photoshoot-newborn-1_169.jpeg?w=1490&q=90" loading="lazy" decoding="async">
                </div>
                <div class="count-foto absolute flex top-3 right-3">
                    <div class="count-foto__content-count flex items-center z-[1] p-1 rounded-md">
                        <div class="count-foto__icon pr-1">
                            <img alt="Count foto" class="object-cover aspect-square w-[16px]" width="32" height="32" src="https://cdn.haibunda.com/images/icon-foto.webp?v=4.6.1" loading="lazy" decoding="async">
                        </div>
                        <div class="count-foto__number text-white">
                            <p class="text-xs">7 Foto</p>
                        </div>
                    </div>
                </div>
                <div class="py-2 px-3 flex flex-col gap-1 py-5 px-10 flex-grow">
                    <h3 class="font-light tracking-widest text-lg leading-[22px] line-clamp-2">7 Potret Gemas Bayi Laki-Laki Artis saat Photoshoot Newborn, Ada yang Jadi Aladdin</h3>
                </div>
            </article>
        </a>
    </div>
</section>
                    <article >
    <a 
        href="https://www.haibunda.com/trending/20240117104218-93-326599/iu-gelar-konser-her-di-jakarta-simak-jadwal-perkiraan-harga-tiket" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="IU Gelar Konser H.E.R di Jakarta, Simak Jadwal & Perkiraan Harga Tiket" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326599" 
        dtr-idx="11"
    >
        <div class="image-artikel w-52">
            <img 
                alt="IU Gelar Konser H.E.R di Jakarta, Simak Jadwal & Perkiraan Harga Tiket" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2023/04/11/iu-1_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Trending </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> IU Gelar Konser H.E.R di Jakarta, Simak Jadwal & Perkiraan Harga Tiket </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Ousama El Fatha Kusnandar</span>
        </div>
    </a>
</article>
                    <section class="bg-white w-full rounded-lg">
    <div class="foto-wide">
        <a 
            href="https://www.haibunda.com/moms-life/20240117112314-77-326506/5-potret-adiba-anak-ustaz-jefri-usai-dinikahi-pesepakbola-egy-maulana-susul-sang-suami-ke-qatar" 
            class="infografis__link relative"
            onclick="_pt(this)" 
            dtr-ttl="5 Potret Adiba Anak Ustaz Jefri Usai Dinikahi Pesepakbola Egy Maulana, Susul Sang Suami ke Qatar" 
            dtr-evt="newsfeed" 
            dtr-sec="artikel newsfeed" 
            dtr-act="artikel" 
            dtr-id="326506" 
            dtr-idx="12"
        >
            <article class="overflow-hidden bg-white rounded-lg">
                <div class="image-artikel">
                    <img alt="Foto" class="object-cover w-full" width="1490" height="844" src="https://akcdn.detik.net.id/visual/2024/01/17/abida-khanza-4_169.jpeg?w=1490&q=90" loading="lazy" decoding="async">
                </div>
                <div class="count-foto absolute flex top-3 right-3">
                    <div class="count-foto__content-count flex items-center z-[1] p-1 rounded-md">
                        <div class="count-foto__icon pr-1">
                            <img alt="Count foto" class="object-cover aspect-square w-[16px]" width="32" height="32" src="https://cdn.haibunda.com/images/icon-foto.webp?v=4.6.1" loading="lazy" decoding="async">
                        </div>
                        <div class="count-foto__number text-white">
                            <p class="text-xs">5 Foto</p>
                        </div>
                    </div>
                </div>
                <div class="py-2 px-3 flex flex-col gap-1 py-5 px-10 flex-grow">
                    <h3 class="font-light tracking-widest text-lg leading-[22px] line-clamp-2">5 Potret Adiba Anak Ustaz Jefri Usai Dinikahi Pesepakbola Egy Maulana, Susul Sang Suami ke Qatar</h3>
                </div>
            </article>
        </a>
    </div>
</section>
            
        </div>
        
        <div class="flex flex-col gap-7 artikel-terbaru">
    
                <article class="animated_hover">
    <a 
        href="https://www.haibunda.com/parenting/20240117130202-64-326529/4-tips-mengajarkan-konsep-kepemilikan-dan-cara-berbagi-pada-anak-sejak-dini" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="4 Tips Mengajarkan Konsep Kepemilikan dan Cara Berbagi pada Anak Sejak Dini" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326529" 
        dtr-idx="13"
    >
        <div class="image-artikel w-52">
            <img 
                alt="4 Tips Mengajarkan Konsep Kepemilikan dan Cara Berbagi pada Anak Sejak Dini" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 animated_img" 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2024/01/17/4-tips-mengajarkan-konsep-kepemilikan-dan-cara-berbagi-pada-anak-sejak-dini_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                data-thumbnail='https://cdnv.detiknetwork.com/videoservice/Haibunda/2024/01/17/143df99ebe974083bd670d0d90996997-20240117130430-0s.webp?a=1' data-src='https://akcdn.detik.net.id/visual/2024/01/17/4-tips-mengajarkan-konsep-kepemilikan-dan-cara-berbagi-pada-anak-sejak-dini_43.jpeg?w=430&q=90'            >
        </div>
                <div class="count-video absolute left-[115px] w-[100px]">
            <div class="count-foto absolute flex top-3 right-3">
                <div class="count-foto__content-count flex items-center z-[1] p-1 rounded-md">
                    <div class="count-foto__icon pr-1">
                        <img alt="Count foto" class="object-cover aspect-square w-[16px]" width="32" height="32" src="https://cdn.haibunda.com/images/icon-video.webp?v=4.6.1" loading="lazy" decoding="async">
                    </div>
                    <div class="count-foto__number text-white">
                        <p class="text-xs">02:14</p>
                    </div>
                </div>
            </div>
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Parenting </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> 4 Tips Mengajarkan Konsep Kepemilikan dan Cara Berbagi pada Anak Sejak Dini </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Atika Riyanda & M. Diego Tristan Firdaus</span>
        </div>
    </a>
</article>
        <!-- s: DETIK NETWORK -->
        <div class="detiknetwork-index" data-name="detik-vertical" data-target="block/detiknetwork">
        <section class="bg-hb-whitedark2 w-full rounded-md px-4 py-7 placeholder-detiknetwork animate-pulse">
        <div class="h-[30px] w-[30%] bg-white"></div>
        <div class="detiknetwork grid grid-cols-3 gap-6 pt-7">
                        <a href="#" class="flex terpopuler__link relative">
                <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                    <div class="image-artikel">
                        <img alt="Detik Network" class="object-cover aspect-[214/125] w-full" width="428" height="250"
                            src="" loading="lazy" decoding="async">
                    </div>
                    <div class="py-4 px-4 flex flex-col gap-1 flex-grow pb-6">
                        <h2 class="font-medium text-sm line-clamp-3 "></h2>
                    </div>
                    <div class="logo-media absolute right-1 top-2">
                        <img src="https://cdn.haibunda.com/images/logo/logo_Insertlive.png?v=4.6.1" alt="Rekomendasi" class=" max-w-[75px] max-h-[26px]">
                    </div>
                </article>
            </a>
                        <a href="#" class="flex terpopuler__link relative">
                <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                    <div class="image-artikel">
                        <img alt="Detik Network" class="object-cover aspect-[214/125] w-full" width="428" height="250"
                            src="" loading="lazy" decoding="async">
                    </div>
                    <div class="py-4 px-4 flex flex-col gap-1 flex-grow pb-6">
                        <h2 class="font-medium text-sm line-clamp-3 "></h2>
                    </div>
                    <div class="logo-media absolute right-1 top-2">
                        <img src="https://cdn.haibunda.com/images/logo/logo_Beautynesia.png?v=4.6.1" alt="Rekomendasi" class=" max-w-[75px] max-h-[26px]">
                    </div>
                </article>
            </a>
                        <a href="#" class="flex terpopuler__link relative">
                <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                    <div class="image-artikel">
                        <img alt="Detik Network" class="object-cover aspect-[214/125] w-full" width="428" height="250"
                            src="" loading="lazy" decoding="async">
                    </div>
                    <div class="py-4 px-4 flex flex-col gap-1 flex-grow pb-6">
                        <h2 class="font-medium text-sm line-clamp-3 "></h2>
                    </div>
                    <div class="logo-media absolute right-1 top-2">
                        <img src="https://cdn.haibunda.com/images/logo/logo_FemaleDaily.png?v=4.6.1" alt="Rekomendasi" class=" max-w-[75px] max-h-[26px]">
                    </div>
                </article>
            </a>
                        <a href="#" class="flex terpopuler__link relative">
                <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                    <div class="image-artikel">
                        <img alt="Detik Network" class="object-cover aspect-[214/125] w-full" width="428" height="250"
                            src="" loading="lazy" decoding="async">
                    </div>
                    <div class="py-4 px-4 flex flex-col gap-1 flex-grow pb-6">
                        <h2 class="font-medium text-sm line-clamp-3 "></h2>
                    </div>
                    <div class="logo-media absolute right-1 top-2">
                        <img src="https://cdn.haibunda.com/images/logo/logo-cxo.png?v=4.6.1" alt="Rekomendasi" class=" max-w-[75px] max-h-[26px]">
                    </div>
                </article>
            </a>
                        <a href="#" class="flex terpopuler__link relative">
                <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                    <div class="image-artikel">
                        <img alt="Detik Network" class="object-cover aspect-[214/125] w-full" width="428" height="250"
                            src="" loading="lazy" decoding="async">
                    </div>
                    <div class="py-4 px-4 flex flex-col gap-1 flex-grow pb-6">
                        <h2 class="font-medium text-sm line-clamp-3 "></h2>
                    </div>
                    <div class="logo-media absolute right-1 top-2">
                        <img src="https://cdn.haibunda.com/images/logo/logo_Wolipop.png?v=4.6.1" alt="Rekomendasi" class=" max-w-[75px] max-h-[26px]">
                    </div>
                </article>
            </a>
                        <a href="#" class="flex terpopuler__link relative">
                <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white">
                    <div class="image-artikel">
                        <img alt="Detik Network" class="object-cover aspect-[214/125] w-full" width="428" height="250"
                            src="" loading="lazy" decoding="async">
                    </div>
                    <div class="py-4 px-4 flex flex-col gap-1 flex-grow pb-6">
                        <h2 class="font-medium text-sm line-clamp-3 "></h2>
                    </div>
                    <div class="logo-media absolute right-1 top-2">
                        <img src="https://cdn.haibunda.com/images/logo/logo_MommiesDaily.png?v=4.6.1" alt="Rekomendasi" class=" max-w-[75px] max-h-[26px]">
                    </div>
                </article>
            </a>
                    </div>
    </section>
</div>        <!-- e: DETIK NETWORK -->
        <article >
    <a 
        href="https://www.haibunda.com/rekomendasi-produk/20240116110859-218-326395/review-hit-elektrik-goodknight-xpress-basmi-nyamuk-tanpa-gangguan-asap" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="Review HIT Elektrik GoodKnight Xpress, Basmi Nyamuk Tanpa Gangguan Asap" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326395" 
        dtr-idx="14"
    >
        <div class="image-artikel w-52">
            <img 
                alt="Review HIT Elektrik GoodKnight Xpress, Basmi Nyamuk Tanpa Gangguan Asap" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2024/01/16/hit-elektrik-goodknight-xpress-refill-fresh-45h-1_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Rekomendasi Produk </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> Review HIT Elektrik GoodKnight Xpress, Basmi Nyamuk Tanpa Gangguan Asap </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Tim HaiBunda</span>
        </div>
    </a>
</article>
        <article >
    <a 
        href="https://www.haibunda.com/moms-life/20240118145512-76-326629/muhammadiyah-tetapkan-awal-puasa-ramadan-11-maret-2024-bagaimana-dengan-pemerintah" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="Muhammadiyah Tetapkan Awal Puasa Ramadan 11 Maret 2024, Bagaimana dengan Pemerintah?" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326629" 
        dtr-idx="15"
    >
        <div class="image-artikel w-52">
            <img 
                alt="Muhammadiyah Tetapkan Awal Puasa Ramadan 11 Maret 2024, Bagaimana dengan Pemerintah?" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2023/04/12/ilustrasi-malam-lailatul-qadar_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Mom's Life </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> Muhammadiyah Tetapkan Awal Puasa Ramadan 11 Maret 2024, Bagaimana dengan Pemerintah? </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Annisa A</span>
        </div>
    </a>
</article>
    
        </div>
        
        <div class="flex flex-col gap-7 artikel-terbaru">
    
            <article >
    <a 
        href="https://www.haibunda.com/parenting/20240116104753-62-326394/anak-1-tahun-sudah-bisa-apa-saja-ketahui-perkembangan-normal-sesuai-usianya" 
        class="relative flex items-start overflow-hidden rounded-lg"
        onclick="_pt(this)" 
        dtr-ttl="Anak 1 Tahun Sudah Bisa Apa Saja? Ketahui Perkembangan Normal Sesuai Usianya" 
        dtr-evt="newsfeed" 
        dtr-sec="artikel newsfeed" 
        dtr-act="artikel" 
        dtr-id="326394" 
        dtr-idx="16"
    >
        <div class="image-artikel w-52">
            <img 
                alt="Anak 1 Tahun Sudah Bisa Apa Saja? Ketahui Perkembangan Normal Sesuai Usianya" 
                class="object-cover aspect-[4/3] w-52 flex-shrink-0 " 
                width="430" 
                height="322" 
                src="https://akcdn.detik.net.id/visual/2023/11/15/ilustrasi-keluarga-banyak-anak-1_43.jpeg?w=430&q=90" 
                loading="lazy" 
                decoding="async"
                            >
        </div>
                <div class="flex flex-1 flex-col justify-center gap-1 self-stretch bg-white p-6">
            <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider"> Parenting </h3>
            <h2 class="line-clamp-2 text-xl font-medium"> Anak 1 Tahun Sudah Bisa Apa Saja? Ketahui Perkembangan Normal Sesuai Usianya </h2>
            <span class="text-hb-blacklighter2 line-clamp-1 text-sm">By: Mutiara Putri</span>
        </div>
    </a>
</article>
    
        </div>
        

<div class="flex justify-center">
    <a 
        href="https://www.haibunda.com/indeks/2" 
        onclick="_pt(this)" 
        dtr-evt="newsfeed" 
        dtr-sec="lihat selengkapnya" 
        dtr-act="lihat selengkapnya" 
        class="inline-flex w-fit items-center font-raleway tracking-widest font-bold text-hb-bondi rounded-lg py-2.5 px-4 bg-white hover:bg-hb-bondi hover:text-white"
    > 
        ARTIKEL LAINNYA 
        <svg viewBox="0 0 16 16" class="h-6 text-hb-bondi hover:text-white" astro-icon="bi:chevron-right">
            <path fill="currentColor" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
    </a>
</div>
        <!-- e:nonheadline -->
    </div>
    <!-- e:left content -->

    <!-- s:right content -->
    <div class="flex flex-col justify-start gap-9">

        <!-- s:banner mediumrectangle1 -->
        <div class="m-r1 mb35">
    <div class="m-r1 mb35">
<div class="m-r1 mb35">
<div class="m-r1 mb35" style="height: 625px">
<style>
@import url("https://cdnstatic.detik.com/live/_rmbassets/mr1-scrollpage/scrollpage.css");

.mr1-scrollpage-top {
top: 70px;
}
</style>
<div class="mr mr1"
style="width: 300px; height: 600px;background-color:#fff;margin-top: 25px;">

<div class="mr1-scrollpage-container">
<div class="mr1-scrollpage-height"
style="height: 600px; width: 100%; margin: auto;">
<div class="mr1-scrollpage-box">
<div class="mr1-scrollpage-top">
<div class="mr1-scrollpage-banner">

<div id='div-gpt-ad-1514521146832-0' >
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1514521146832-0'); });
</script>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
if ($('.menu-detail').length) {
$('.mr1-scrollpage-top').css('top', '118px');
}
</script>
</div></div>
        <!-- s:banner mediumrectangle1 -->

        <!-- s:banner mediumrectangle2 -->
        <div class="m-r2 mb35">
    <div class="m-r2 mb35">
<style>
@import url("https://cdnstatic.detik.com/live/_rmbassets/mr2-scrollpage/scrollpage.css");

.m-r2 {
height: 360px !important;
}
</style>
<div class="mr mr2" id="mr2" style="width: 300px;height: 350px;background-color:#fff">

<div class="mr2-scrollpage-container">
<div class="mr2-scrollpage-height" style="height: 350px;margin: auto">
<div class="mr2-scrollpage-box">
<div class="mr2-scrollpage-top" style="top:70px;">
<div class="mr2-scrollpage-banner">

<!-- /4905536/detik_desktop/wp/medium_rectangle2 -->
<div id='div-gpt-ad-1593668860576-0' style='width: 300px; height: 250px;'>
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1593668860576-0'); });
</script>
</div>

</div>
</div>
</div>
</div>
</div>

</div>
<script>
if ($('.menu-detail').length) {
$('.mr2-scrollpage-top').css('top', '118px');
}
</script>
</div></div>
        <!-- s:banner mediumrectangle2 -->

        <!-- s:rekomendasi produk -->
        <section class="bg-white px-4 py-7 w-full rounded-md  z-[12] top-[150px]" data-name="detik-vertical" data-target="block/rekomendasi-produk" kanal="214" urlpartner="https://c.lazada.co.id/t/c.bTZtxQ?ulink=false&deeplink=false&intent=false&url=https%3A%2F%2Fpages.lazada.co.id%2Fwow%2Fgcp%2Froute%2Flazada%2Fid%2Fupr_1000345_lazada%2Fchannel%2Fid%2Fupr-router%2Fid_upr%3Fpha%3Dtrue%26hybrid%3D1%26data_prefetch%3Dtrue%26prefetch_replace%3D1%26at_iframe%3D1%26wh_pid%3D%2Flazada%2Fchannel%2Fid%2Fall-promo%2Fmcp-ush%26lzd_navbar_hidden%3Dtrue%26hide_h5_title%3Dtrue%26wx_navbar_transparent%3Dtrue%26pha%3Dtrue%26disable_deeplink%3Dtrue">
    <div class="flex items-center w-full boxtitle-link justify-between">
        <h3 class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi"> REKOMENDASI PRODUK </h3>
        <div class="flex-shrink-0">
            <svg viewBox="0 0 24 24" class="h-8 hover:text-hb-bondi text-hb-bondi" astro-icon="ic:baseline-chevron-right">
                <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </div>
    </div>
    <div class="pilihan-bunda mt-5">
                <article>
            <a href="#" class="flex items-start py-1">
                <div class="image-artikel rounded-l-md h-[68px] w-[68px] bg-hb-whitedark2 animate-pulse"></div>
                <div class="px-2 bg-white self-stretch flex flex-col justify-center gap-1 flex-1 animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </a>
        </article>
                <article>
            <a href="#" class="flex items-start py-1">
                <div class="image-artikel rounded-l-md h-[68px] w-[68px] bg-hb-whitedark2 animate-pulse"></div>
                <div class="px-2 bg-white self-stretch flex flex-col justify-center gap-1 flex-1 animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </a>
        </article>
                <article>
            <a href="#" class="flex items-start py-1">
                <div class="image-artikel rounded-l-md h-[68px] w-[68px] bg-hb-whitedark2 animate-pulse"></div>
                <div class="px-2 bg-white self-stretch flex flex-col justify-center gap-1 flex-1 animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </a>
        </article>
            </div>
</section>        <!-- e:rekomendasi produk -->

        <!-- s:haibunda squad -->
        <section class="w-full rounded-md" data-name="detik-vertical" data-target="block/haibundasquad" kanal="81">
    <div class="boxtitle px-4 py-4">
        <div class="flex items-center w-full boxtitle-link justify-between">
            <h3 class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi"> HAIBUNDA SQUAD </h3>
            <div class="flex-shrink-0">
                <svg viewBox="0 0 24 24" class="h-8 hover:text-hb-bondi text-hb-bondi" astro-icon="ic:baseline-chevron-right">
                    <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </div>
        </div>
    </div>
    <article>
        <a href="#" class="hb-squad pt-5 ">
            <div class="hb-squad__content rounded-t-md">
                <div class="image-artikel rounded-t-md w-full h-[167px] bg-hb-whitedark2 animate-pulse"></div>
                <div class="text-lg text-center p-6 line-clamp-3 rounded-b-md leading-[26px] bg-hb-greylight4 hover:text-hb-bondi">
                    <div class="flex flex-col gap-1 flex-grow hb-squad__sub-text">
                        <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2"></h3>
                        <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></h3>
                    </div>
                </div>
            </div>
        </a>
    </article>
</section>        <!-- e:haibunda squad -->

        <section class="w-full">
<iframe id="autoresize-4"  width="90%" height="auto" class="bb-iframe responsive-iframe p_iframe_r" src="https://cdn.detik.net.id/berbuatbaik-id/channel-box-embed-13.html" frameborder="0" scrolling="no"></iframe>
<script src="https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.6/js/iframeResizer.min.js" charset="utf-8"></script>
<script>
iFrameResize({}, '#autoresize-4')
</script>
</section>
        <!-- s:bunda harus tahu / Infografis -->
        <section class="bg-white px-4 py-7 w-full rounded-md" data-name="detik-vertical" data-target="block/bundaharustahu">
    <div class="flex items-center w-full boxtitle-link justify-between">
        <h3 class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi"> INFOGRAFIS </h3>
        <div class="flex-shrink-0">
            <svg viewBox="0 0 24 24" class="h-8 hover:text-hb-bondi text-hb-bondi" astro-icon="ic:baseline-chevron-right">
                <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </div>
    </div>
    <div class="infografis">
                <a href="#" class="infografis__link">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-3">
                <div class="image-artikel rounded-lg w-[268] h-[242px] bg-hb-whitedark2 animate-pulse"></div>
                <div class="py-2 px-3 flex flex-col gap-1 flex-grow">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2"></h3>
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></h3>
                </div>
            </article>
        </a>
                <a href="#" class="infografis__link">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-3">
                <div class="image-artikel rounded-lg w-[268] h-[242px] bg-hb-whitedark2 animate-pulse"></div>
                <div class="py-2 px-3 flex flex-col gap-1 flex-grow">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2"></h3>
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></h3>
                </div>
            </article>
        </a>
            </div>
</section>
        <!-- e:bunda harus tahu -->

        <!-- s:Komik Bunda -->
        <section class="bg-white px-4 py-7 w-full rounded-md" data-name="detik-vertical" data-target="block/komikbunda">
    <div class="flex items-center w-full boxtitle-link justify-between">
        <h3 class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi"> KOMIK BUNDA </h3>
        <div class="flex-shrink-0">
            <svg viewBox="0 0 24 24" class="h-8 hover:text-hb-bondi text-hb-bondi" astro-icon="ic:baseline-chevron-right">
                <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </div>
    </div>
    <div class="infografis">
                <a href="#" class="infografis__link">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-5">
                <div class="image-artikel rounded-lg w-[268] h-[262px] bg-hb-whitedark2 animate-pulse"></div>
            </article>
        </a>
                <a href="#" class="infografis__link">
            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-5">
                <div class="image-artikel rounded-lg w-[268] h-[262px] bg-hb-whitedark2 animate-pulse"></div>
            </article>
        </a>
            </div>
</section>        <!-- e:Komik Bunda -->

        <!-- s:foto -->
        <section class="w-full rounded-md bg-white px-4 py-7" data-name="detik-vertical" data-target="block/foto">
    <div class="flex items-center w-full boxtitle-link justify-between">
        <h3 class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi"> FOTO </h3>
        <div class="flex-shrink-0">
            <svg viewBox="0 0 24 24" class="h-8 hover:text-hb-bondi text-hb-bondi" astro-icon="ic:baseline-chevron-right">
                <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </div>
    </div>
    <div class="foto-slider pt-2">
        <div class="relative min-h-[40px]">
            <div class="swiper foto-slider-swiper mb-8">
                <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                        <a href="#" class="foto-slider__link">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white pb-3">
                                <div class="image-artikel rounded-lg w-[268] h-[268px] bg-hb-whitedark2 animate-pulse"></div>
                                <div class="count-foto absolute flex top-3 right-3">
                                    <div class="count-foto__content-count flex items-center z-[1] p-1 rounded-md">
                                        <div class="count-foto__icon pr-1">
                                            <img alt="Count foto" class="object-cover aspect-square w-[16px]" width="32" height="32" src="https://cdn.haibunda.com/images/icon-foto.webp?v=4.6.1" loading="lazy" decoding="async">
                                        </div>
                                        <div class="count-foto__number text-white">
                                            <p class="text-xs">0 Foto</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2"></h3>
                                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></h3>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="foto-slider__link">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white pb-3">
                                <div class="image-artikel rounded-lg w-[268] h-[268px] bg-hb-whitedark2 animate-pulse"></div>
                                <div class="count-foto absolute flex top-3 right-3">
                                    <div class="count-foto__content-count flex items-center z-[1] p-1 rounded-md">
                                        <div class="count-foto__icon pr-1">
                                            <img alt="Count foto" class="object-cover aspect-square w-[16px]" width="32" height="32" src="https://cdn.haibunda.com/images/icon-foto.webp?v=4.6.1" loading="lazy" decoding="async">
                                        </div>
                                        <div class="count-foto__number text-white">
                                            <p class="text-xs">0 Foto</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2"></h3>
                                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></h3>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="foto-slider__link">
                            <article class="flex flex-1 flex-col overflow-hidden rounded-lg bg-white pb-3">
                                <div class="image-artikel rounded-lg w-[268] h-[268px] bg-hb-whitedark2 animate-pulse"></div>
                                <div class="count-foto absolute flex top-3 right-3">
                                    <div class="count-foto__content-count flex items-center z-[1] p-1 rounded-md">
                                        <div class="count-foto__icon pr-1">
                                            <img alt="Count foto" class="object-cover aspect-square w-[16px]" width="32" height="32" src="https://cdn.haibunda.com/images/icon-foto.webp?v=4.6.1" loading="lazy" decoding="async">
                                        </div>
                                        <div class="count-foto__number text-white">
                                            <p class="text-xs">0 Foto</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-grow flex-col gap-1 py-2 px-3">
                                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2"></h3>
                                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto"></h3>
                                </div>
                            </article>
                        </a>
                    </div>
                                    </div>
            </div>
            <div class="swiper-pagination swiper-pagination-custom foto-slider-swiper-pagination"></div>
            <div class="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-full flex justify-between items-center pointer-events-none">
                <div class="foto-slider-swiper-prev swiper-button-prev bg-white rounded-full w-9 h-9 grid place-content-center shadow-lg pointer-events-auto -translate-x-1/2">
                    <svg viewBox="0 0 24 24" class="h-8 text-hb-pink" astro-icon="ic:outline-chevron-left">
                        <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                    </svg>
                </div>
                <div class="foto-slider-swiper-next swiper-button-next customSwiper-button-next bg-white rounded-full w-9 h-9 grid place-content-center shadow-lg pointer-events-auto translate-x-1/2">
                    <svg viewBox="0 0 24 24" class="h-8 text-hb-pink" astro-icon="ic:outline-chevron-right">
                        <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                </div>
            </div>
        </div>
        <script type="module">
        const swiperId = "foto-slider-swiper";
        const swiperPagination = "foto-slider-swiper-pagination";
        const swiperPrev = "foto-slider-swiper-prev";
        const swiperNext = "foto-slider-swiper-next";
        const slidesPerView = 1;
        const spaceBetween = 13;
        import Swiper from "https://cdn.haibunda.com/js/swiper-bundle.min.js?v=4.6.1";
        const swiper = new Swiper(`.${swiperId}`, {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
            pagination: {
                el: `.${swiperPagination}`,
                clickable: true,
            },
            navigation: {
                prevEl: `.${swiperPrev}`,
                nextEl: `.${swiperNext}`,
            },
        });
        </script>
    </div>
</section>
        <!-- e:foto -->
        
        <!-- s:kehamilan -->
        <section class="bg-white px-4 py-7 w-full rounded-md" data-name="detik-vertical" data-target="block/channelbox"
    kanal="48" title="KEHAMILAN" indeks_url="/kehamilan">
    <div class="flex items-center w-full boxtitle-link justify-between">
        <h3
            class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi">
            KEHAMILAN </h3>
        <div class="flex-shrink-0">
            <svg viewBox="0 0 24 24" class="h-8 hover:text-hb-bondi text-hb-bondi"
                astro-icon="ic:baseline-chevron-right">
                <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </div>
    </div>
    <div class="kehamilan pt-2">
        <div class="relative min-h-[40px]">
            <div class="swiper kehamilan-slider-swiper mb-8">
                <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                        <a href="#" class="infografis__link">
                            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-3">
                                <div class="image-artikel rounded-lg w-[268] h-[201px] bg-hb-whitedark2 animate-pulse">
                                </div>
                                <div class="py-2 px-3 flex flex-col gap-1 flex-grow">
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2">
                                    </h3>
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto">
                                    </h3>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="infografis__link">
                            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-3">
                                <div class="image-artikel rounded-lg w-[268] h-[201px] bg-hb-whitedark2 animate-pulse">
                                </div>
                                <div class="py-2 px-3 flex flex-col gap-1 flex-grow">
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2">
                                    </h3>
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto">
                                    </h3>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="infografis__link">
                            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-3">
                                <div class="image-artikel rounded-lg w-[268] h-[201px] bg-hb-whitedark2 animate-pulse">
                                </div>
                                <div class="py-2 px-3 flex flex-col gap-1 flex-grow">
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2">
                                    </h3>
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto">
                                    </h3>
                                </div>
                            </article>
                        </a>
                    </div>
                                    </div>
            </div>
            <div class="swiper-pagination swiper-pagination-custom kehamilan-slider-swiper-pagination"></div>
        </div>
        <script type="module">
            const swiperId = "kehamilan-slider-swiper";
            const swiperPagination = "kehamilan-slider-swiper-pagination";
            const swiperPrev = "kehamilan-slider-swiper-prev";
            const swiperNext = "kehamilan-slider-swiper-next";
            const slidesPerView = 1;
            const spaceBetween = 13;
            import Swiper from "https://cdn.haibunda.com/js/swiper-bundle.min.js?v=4.6.1";
            const swiper = new Swiper(`.${swiperId}`, {
                slidesPerView: slidesPerView,
                spaceBetween: spaceBetween,
                pagination: {
                    el: `.${swiperPagination}`,
                    clickable: true,
                },
                navigation: {
                    prevEl: `.${swiperPrev}`,
                    nextEl: `.${swiperNext}`,
                },
            });
        </script>
    </div>
</section>        <!-- e:kehamilan -->

        <!-- s:parenting -->
        <section class="bg-white px-4 py-7 w-full rounded-md" data-name="detik-vertical" data-target="block/channelbox"
    kanal="58" title="PARENTING" indeks_url="/parenting">
    <div class="flex items-center w-full boxtitle-link justify-between">
        <h3
            class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi">
            PARENTING </h3>
        <div class="flex-shrink-0">
            <svg viewBox="0 0 24 24" class="h-8 hover:text-hb-bondi text-hb-bondi"
                astro-icon="ic:baseline-chevron-right">
                <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </div>
    </div>
    <div class="kehamilan pt-2">
        <div class="relative min-h-[40px]">
            <div class="swiper kehamilan-slider-swiper mb-8">
                <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                        <a href="#" class="infografis__link">
                            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-3">
                                <div class="image-artikel rounded-lg w-[268] h-[201px] bg-hb-whitedark2 animate-pulse">
                                </div>
                                <div class="py-2 px-3 flex flex-col gap-1 flex-grow">
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2">
                                    </h3>
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto">
                                    </h3>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="infografis__link">
                            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-3">
                                <div class="image-artikel rounded-lg w-[268] h-[201px] bg-hb-whitedark2 animate-pulse">
                                </div>
                                <div class="py-2 px-3 flex flex-col gap-1 flex-grow">
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2">
                                    </h3>
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto">
                                    </h3>
                                </div>
                            </article>
                        </a>
                    </div>
                                        <div class="swiper-slide">
                        <a href="#" class="infografis__link">
                            <article class="rounded-lg overflow-hidden flex flex-col flex-1 bg-white py-3">
                                <div class="image-artikel rounded-lg w-[268] h-[201px] bg-hb-whitedark2 animate-pulse">
                                </div>
                                <div class="py-2 px-3 flex flex-col gap-1 flex-grow">
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider h-[15px] bg-hb-whitedark2 mb-2">
                                    </h3>
                                    <h3
                                        class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100px] h-[15px] bg-hb-whitedark2 mx-auto">
                                    </h3>
                                </div>
                            </article>
                        </a>
                    </div>
                                    </div>
            </div>
            <div class="swiper-pagination swiper-pagination-custom kehamilan-slider-swiper-pagination"></div>
        </div>
        <script type="module">
            const swiperId = "kehamilan-slider-swiper";
            const swiperPagination = "kehamilan-slider-swiper-pagination";
            const swiperPrev = "kehamilan-slider-swiper-prev";
            const swiperNext = "kehamilan-slider-swiper-next";
            const slidesPerView = 1;
            const spaceBetween = 13;
            import Swiper from "https://cdn.haibunda.com/js/swiper-bundle.min.js?v=4.6.1";
            const swiper = new Swiper(`.${swiperId}`, {
                slidesPerView: slidesPerView,
                spaceBetween: spaceBetween,
                pagination: {
                    el: `.${swiperPagination}`,
                    clickable: true,
                },
                navigation: {
                    prevEl: `.${swiperPrev}`,
                    nextEl: `.${swiperNext}`,
                },
            });
        </script>
    </div>
</section>        <!-- e:parenting -->

        <!-- s:rekomendasi produk -->
        <section class="bg-white px-4 py-7 w-full rounded-md sticky top-[190px] z-[12] top-[150px]" data-name="detik-vertical" data-target="block/rekomendasi-produk" kanal="214" urlpartner="https://c.lazada.co.id/t/c.bTZtxQ?ulink=false&deeplink=false&intent=false&url=https%3A%2F%2Fpages.lazada.co.id%2Fwow%2Fgcp%2Froute%2Flazada%2Fid%2Fupr_1000345_lazada%2Fchannel%2Fid%2Fupr-router%2Fid_upr%3Fpha%3Dtrue%26hybrid%3D1%26data_prefetch%3Dtrue%26prefetch_replace%3D1%26at_iframe%3D1%26wh_pid%3D%2Flazada%2Fchannel%2Fid%2Fall-promo%2Fmcp-ush%26lzd_navbar_hidden%3Dtrue%26hide_h5_title%3Dtrue%26wx_navbar_transparent%3Dtrue%26pha%3Dtrue%26disable_deeplink%3Dtrue">
    <div class="flex items-center w-full boxtitle-link justify-between">
        <h3 class="text-xl font-bold font-raleway tracking-wider relative after:w-12 after:h-0.5 after:absolute after:top-full after:left-0 text-hb-blacklighter1 after:bg-hb-bondi"> REKOMENDASI PRODUK </h3>
        <div class="flex-shrink-0">
            <svg viewBox="0 0 24 24" class="h-8 hover:text-hb-bondi text-hb-bondi" astro-icon="ic:baseline-chevron-right">
                <path fill="currentColor" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </div>
    </div>
    <div class="pilihan-bunda mt-5">
                <article>
            <a href="#" class="flex items-start py-1">
                <div class="image-artikel rounded-l-md h-[68px] w-[68px] bg-hb-whitedark2 animate-pulse"></div>
                <div class="px-2 bg-white self-stretch flex flex-col justify-center gap-1 flex-1 animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </a>
        </article>
                <article>
            <a href="#" class="flex items-start py-1">
                <div class="image-artikel rounded-l-md h-[68px] w-[68px] bg-hb-whitedark2 animate-pulse"></div>
                <div class="px-2 bg-white self-stretch flex flex-col justify-center gap-1 flex-1 animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </a>
        </article>
                <article>
            <a href="#" class="flex items-start py-1">
                <div class="image-artikel rounded-l-md h-[68px] w-[68px] bg-hb-whitedark2 animate-pulse"></div>
                <div class="px-2 bg-white self-stretch flex flex-col justify-center gap-1 flex-1 animate-pulse">
                    <h3 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[60%] h-[10px] bg-hb-whitedark2"></h3>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                    <h2 class="text-hb-bondi line-clamp-1 text-xs uppercase tracking-wider w-[100%] h-[20px] bg-hb-whitedark2"></h2>
                </div>
            </a>
        </article>
            </div>
</section>        <!-- e:rekomendasi produk -->

    </div>
    <!-- e:right content -->
</div>
<!-- e:content -->
    
            <footer class="font-montserrat relative footer-gradient before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:w-screen before:h-1 mt-auto astro-5IMXISNY">
    <div class="flex justify-center bleed-bg py-10 bleed-zinc-100 lg:justify-start lg:gap-14 lg:px-[23px] astro-5IMXISNY">
        <div class="flex flex-col items-center gap-3 lg:w-48 astro-5IMXISNY">
            <a 
                href="https://www.haibunda.com" 
                class="block w-48 h-7 astro-5IMXISNY"
                dtr-evt="footer" 
                dtr-sec="logo haibunda footer" 
                dtr-act="logo haibunda" 
                onclick="_pt(this)"
            >
                <img class="w-full h-full object-contain astro-5IMXISNY" src="https://cdn.haibunda.com/images/footer_logo_haibunda2.png?v=4.6.1" alt="Logo HaiBunda" loading="lazy">
            </a>
            <div class="flex items-center text-xs gap-1 mt-1 astro-5IMXISNY"> part Of <img class="w-24 object-contain bottom-[2px] relative astro-5IMXISNY" src="https://cdn.haibunda.com/images/footer_logo2.png?v=4.6.1" alt="Logo detikNetwork" loading="lazy">
            </div>
            <div class="flex gap-2 mt-6 flex-wrap justify-center astro-5IMXISNY">
                <h3 class="text-center w-full hidden text-xs lg:block astro-5IMXISNY"> Connect With Us </h3>
                <a href="https://www.facebook.com/HaiBundacom/" class="astro-5IMXISNY" dtr-evt="footer" dtr-sec="socmed haibunda footer" dtr-act="socmed haibunda" onclick="_pt(this)" dtr-ttl="facebook">
                    <img class="w-8 astro-5IMXISNY" src="https://cdn.haibunda.com/images/foot_fb.png?v=4.6.1" alt="Facebook HaiBunda" loading="lazy">
                </a>
                <a href="https://twitter.com/haibundacom" class="astro-5IMXISNY" dtr-evt="footer" dtr-sec="socmed haibunda footer" dtr-act="socmed haibunda" onclick="_pt(this)" dtr-ttl="twitter">
                    <img class="w-8 astro-5IMXISNY" src="https://cdn.haibunda.com/images/twitter-new.png?v=4.6.1" alt="Twitter HaiBunda" loading="lazy">
                </a>
                <a href="https://www.instagram.com/haibundacom/" class="astro-5IMXISNY" dtr-evt="footer" dtr-sec="socmed haibunda footer" dtr-act="socmed haibunda" onclick="_pt(this)" dtr-ttl="instagram">
                    <img class="w-8 astro-5IMXISNY" src="https://cdn.haibunda.com/images/foot_ig.png?v=4.6.1" alt="instagram HaiBunda" loading="lazy">
                </a>
                <a href="https://www.youtube.com/c/HaiBundacom" class="astro-5IMXISNY" dtr-evt="footer" dtr-sec="socmed haibunda footer" dtr-act="socmed haibunda" onclick="_pt(this)" dtr-ttl="youtube">
                    <img class="w-8 astro-5IMXISNY" src="https://cdn.haibunda.com/images/foot_yt.png?v=4.6.1" alt="YouTube HaiBunda" loading="lazy">
                </a>
                <a href="https://www.tiktok.com/@haibunda" class="astro-5IMXISNY" dtr-evt="footer" dtr-sec="socmed haibunda footer" dtr-act="socmed haibunda" onclick="_pt(this)" dtr-ttl="tiktok">
                    <img class="w-8 astro-5IMXISNY" src="https://cdn.haibunda.com/images/tiktok.png?v=4.6.1" alt="Tiktok HaiBunda" loading="lazy">
                </a>
            </div>
            <p class="text-center text-xs mt-6 astro-5IMXISNY"> Copyrights @ 2024 | HaiBunda. All Rights Reserved </p>
        </div>
        <div class="justify-between flex-1 hidden lg:flex astro-5IMXISNY">
            <div class="flex flex-col gap-3 astro-5IMXISNY">
                <h5 class="font-semibold astro-5IMXISNY">Kategori</h5>
                <ul class="space-y-3 columns-2 gap-12 astro-5IMXISNY">
                                        <li class="flex astro-5IMXISNY">
                        <a 
                            class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" 
                            href="https://www.haibunda.com/kehamilan" 
                            dtr-evt="footer" 
                            dtr-sec="menu footer" 
                            dtr-act="menu footer" 
                            onclick="_pt(this)" 
                            dtr-ttl="Kehamilan"
                        > 
                            Kehamilan 
                        </a>
                    </li>
                                        <li class="flex astro-5IMXISNY">
                        <a 
                            class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" 
                            href="https://www.haibunda.com/menyusui" 
                            dtr-evt="footer" 
                            dtr-sec="menu footer" 
                            dtr-act="menu footer" 
                            onclick="_pt(this)" 
                            dtr-ttl="Menyusui"
                        > 
                            Menyusui 
                        </a>
                    </li>
                                        <li class="flex astro-5IMXISNY">
                        <a 
                            class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" 
                            href="https://www.haibunda.com/parenting" 
                            dtr-evt="footer" 
                            dtr-sec="menu footer" 
                            dtr-act="menu footer" 
                            onclick="_pt(this)" 
                            dtr-ttl="Parenting"
                        > 
                            Parenting 
                        </a>
                    </li>
                                        <li class="flex astro-5IMXISNY">
                        <a 
                            class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" 
                            href="https://www.haibunda.com/moms-life" 
                            dtr-evt="footer" 
                            dtr-sec="menu footer" 
                            dtr-act="menu footer" 
                            onclick="_pt(this)" 
                            dtr-ttl="Mom's Life"
                        > 
                            Mom's Life 
                        </a>
                    </li>
                                        <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.haibunda.com/trending" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Trending"> 
                            Trending 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.haibunda.com/komik" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Komik"> 
                            Komik 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.haibunda.com/foto" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Foto"> 
                            Foto 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.haibunda.com/video" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Video"> 
                            Video 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.haibunda.com/infografis" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Infografis"> 
                            Infografis 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.haibunda.com/rekomendasi-produk" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Rekomendasi Produk"> 
                            Rekomendasi Produk 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.haibunda.com/review-produk" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Review Produk"> 
                            Review Produk 
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-3 astro-5IMXISNY">
                <h5 class="font-semibold astro-5IMXISNY">Layanan</h5>
                <ul class="space-y-3 gap-9 astro-5IMXISNY">
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.berbuatbaik.id/?utm_source=haibunda&utm_medium=footer&utm_campaign=berbuatbaikid" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="berbuatbaik"> 
                            berbuatbaik.id 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://pasangmata.detik.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Pasang Mata"> 
                            Pasang Mata 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://adsmart.detik.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Adsmart"> 
                            Adsmart 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://forum.detik.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Forum"> 
                            Forum 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://event.detik.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="detikEvent"> 
                            detikEvent 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://poin.detikshop.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="detikPoint"> 
                            detikPoint 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.transsnowworld.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Trans Snow World"> 
                            Trans Snow World 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.transstudiobandung.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Trans Studio"> 
                            Trans Studio 
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-3 astro-5IMXISNY">
                <h5 class="font-semibold astro-5IMXISNY">Informasi</h5>
                <ul class="space-y-3 gap-9 astro-5IMXISNY">
                    <li class="flex astro-5IMXISNY">
                        <a 
                            class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" 
                            href="https://www.haibunda.com/tentang-kami"
                            dtr-evt="footer" 
                            dtr-sec="menu footer" 
                            dtr-act="menu footer" 
                            onclick="_pt(this)" 
                            dtr-ttl="Tenteng Kami"
                        > 
                            Tentang Kami 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a 
                            class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" 
                            href="https://www.haibunda.com/pedoman-media-siber"
                            dtr-evt="footer" 
                            dtr-sec="menu footer" 
                            dtr-act="menu footer" 
                            onclick="_pt(this)" 
                            dtr-ttl="Pedoman Siber"
                        > 
                            Pedoman Siber 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a 
                            class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" 
                            href="https://www.haibunda.com/disclaimer"
                            dtr-evt="footer" 
                            dtr-sec="menu footer" 
                            dtr-act="menu footer" 
                            onclick="_pt(this)" 
                            dtr-ttl="Disclaimer"
                        > 
                            Disclaimer 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a 
                            class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" 
                            href="https://www.haibunda.com/privacy-policy"
                            dtr-evt="footer" 
                            dtr-sec="menu footer" 
                            dtr-act="menu footer" 
                            onclick="_pt(this)" 
                            dtr-ttl="Privacy Policy"
                        > 
                            Privacy Policy 
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-3 astro-5IMXISNY">
                <h5 class="font-semibold astro-5IMXISNY">Media</h5>
                <ul class="space-y-3 gap-9 astro-5IMXISNY">
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.detik.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="detikcom"> 
                            detikcom 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.cnnindonesia.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="CNN Indonesia"> 
                            CNN Indonesia 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.cnbcindonesia.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="CNBC Indonesia"> 
                            CNBC Indonesia 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.insertLive.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="InsertLive"> 
                            InsertLive 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.beautynesia.id/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Beautynesia"> 
                            Beautynesia 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.femaledaily.com/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="Female Daily"> 
                            Female Daily 
                        </a>
                    </li>
                    <li class="flex astro-5IMXISNY">
                        <a class="text-xs hover:text-[#55C1D2] transition-colors astro-5IMXISNY" href="https://www.cxomedia.id/" target="_blank" dtr-evt="footer" dtr-sec="menu footer" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="CXO Media"> 
                            CXO Media 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>        </main>

        
            <script type="text/javascript" src="https://cdn.haibunda.com/js/haibunda-wp-js.min.js?v=4.6.1"></script>
    
<script type="text/javascript" src="https://cdn.haibunda.com/js/imgLiquid-min.js?v=4.6.1"></script>
<script type="text/javascript" src="https://cdn.haibunda.com/js/custom.js?v=4.6.1"></script>

<script type="text/javascript" src="https://www.gstatic.com/firebasejs/3.6.6/firebase.js"></script>
<script defer type="text/javascript" src="https://cdn.haibunda.com/js/firebase.js?v=4.6.1"></script>
<script type="text/javascript" src="https://cdn.haibunda.com/js/detik-vertical.js?v=4.6.1"></script>
<!-- S: Auto Refresh -->
<script type="text/javascript" src="https://cdn.detik.net.id/libs/detik-vertical/js/refresh.js?v=haibunda.4.6.1"></script>
<!-- E: Auto Refresh -->


<script src="https://cdn.detik.net.id/libs/livecounter/detikLiveUserCounterResponse.js?v=2024011905"></script>



<script type="text/javascript" src="https://cdn.haibunda.com/js/slick.min.js?v=4.6.1"></script>


    <script type="text/javascript">
        $('#pd-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        });
        $('.slick-prev').addClass('hidden');
        $('#pd-slider').on('afterChange', function (event, slick, currentSlide) {
            if(currentSlide >= slick.slideCount - slick.options.slidesToShow ) {
                $('.slick-next').addClass('hidden');
            }
            else {
                $('.slick-next').removeClass('hidden');
            }

            if(currentSlide === 0) {
                $('.slick-prev').addClass('hidden');
            }
            else {
                $('.slick-prev').removeClass('hidden');
            }
        })
    </script>

<script type="text/javascript">
    $(function() {
        var numItems = $('#carousel img').length;
        $('#carousel').carouFredSel({
            width: '100%',
            scroll: {
                items: 1,
                duration: 750,
                timeoutDuration: 3000,
                onAfter: function(data){
                    //alert(numItems);
                    $(this).trigger("currentPosition", function( pos ) {
                        var txt = (pos+1);
                        //$(".logbox").html( txt );
                        if(txt == numItems){
                            //alert(txt);
                            $('#komik_wrapper #komik_next').hide();
                            $('#komik_wrapper #link_next').show();
                        }
                        else{
                            $('#komik_wrapper #komik_next').show();
                            $('#komik_wrapper #link_next').hide();
                        }

                    });
                }
            },
            prev: '#komik_prev',
            next: '#komik_next',
            pagination: {
                container: '#pager'
            },
            circular: false,         // Determines whether the carousel should be circular.
            infinite: false,
            auto:false
        });
    });
</script>
<script>
  $(document).ready(function(){
    $('#slider-produk').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
    });
    $('.slick-prev').addClass('hidden');
    $('#slider-produk').on('afterChange', function (event, slick, currentSlide) {
      if(currentSlide >= slick.slideCount - slick.options.slidesToShow ) {
        $('.slick-next').addClass('hidden');
      }
      else {
        $('.slick-next').removeClass('hidden');
      }

      if(currentSlide === 0) {
        $('.slick-prev').addClass('hidden');
      }
      else {
        $('.slick-prev').removeClass('hidden');
      }
    })
  });
</script>
<script>
  $(document).ready(function(){
    if ($('.rek-produk__tags-list-inner').height() > 45) {
      $('.text-more').addClass('block');
    }
  })
</script>
        <!--s:banner tagfoot-->
        <script type="text/javascript" src="https://cdnstatic.detik.com/live/_rmbassets/callback-revive.js"></script>


<script>
var loadScriptAsync = function(uri){
return new Promise((resolve, reject) => {
var tag = document.createElement('script');
tag.src = uri;
tag.async = true;
tag.onload = () => {
resolve();
};
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
}
var scriptLoaded = loadScriptAsync('https://newrevive.detik.com/delivery/asyncjs.php');

scriptLoaded.then(function(){
window.reviveAsync["0cceecb9cae9f51a31123c541910d59b"].addEventListener('afterRenderBanner',rvCallbackBanner);

function rvCallbackBanner(data){

for(i=0;i<data.detail.length;i++){
//checkBannerAvailable(data.detail[i], 211, nullLB);
checkBannerAvailable(data.detail[i], 1832, nullTB);
checkBannerAvailable(data.detail[i], 1830, nullBB);
}

}
});

function checkBannerAvailable(dataDetail, checkZone, callFunc, available = false){
try {
var show = available ? 1 : 0;
if(show == 0){
if (dataDetail.zoneid == checkZone && dataDetail.bannerid == show) {
callFunc();
console.log('zone id adjustment : ' + checkZone);
}
}
if(show == 1){
if (dataDetail.zoneid == checkZone && dataDetail.bannerid >= show) {
callFunc();
console.log('zone id adjustment : ' + checkZone);
}
}
} catch(e) {
console.log(e);
}
}

</script>

<!-- alf -->        <!--e:banner tagfoot-->

    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"847a3c831d530787","b":1,"version":"2024.1.0","token":"ffc6ed7605ac4db49a4d5ffa655b5e00"}' crossorigin="anonymous"></script>
</body>

</html>
