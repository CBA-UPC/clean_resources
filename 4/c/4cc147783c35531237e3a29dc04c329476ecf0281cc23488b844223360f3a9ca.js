var CBSVideoPlayerWrapper = (function () {
    function CBSVideoPlayerWrapper(host, utagData, videoPlayerOptions, globalEventHandler) {
        this.host = host;
        this.utagData = utagData;
        this.globalEventHandler = globalEventHandler;
        this.currentVideo = null;
        this.playerReady = new Deferred();
        this.eventToHandlerMapping = {
            onDOMReady: this.onPlayerDomReady,
            onPlayerReady: this.onPlayerReady,
            onUpdateData: this.onUpdateData,
            onPlayVideo: this.onPlayVideo
        };
        var defaultPlayerOptions = CBSVideoPlayerWrapper.defaultVideoPlayerOptions;
        if (CBSVideoPlayerWrapper.getHttpCookieValue("gdpr_consent") === "true") {
            defaultPlayerOptions.uvpc = defaultPlayerOptions.uvpc.replace("uvp_sa", "uvp_sa_nt");
            console.log(defaultPlayerOptions);
        }
        this.playerId = this.generateId();
        this.options = Object.assign({ player_id: this.playerId }, defaultPlayerOptions, videoPlayerOptions || {});
        this.createIframeWithOptions(this.options);
        this.initializePostMessageInterface();
    }
    CBSVideoPlayerWrapper.prototype.destroy = function () {
        this.destroyPostMessageInterface();
        this.iframe.parentElement.removeChild(this.iframe);
        this.playerId = null;
    };
    CBSVideoPlayerWrapper.prototype.playVideos = function (playlist) {
        var _this = this;
        return this.playerReady.then(function () {
            var mappedPlaylist = playlist.map(function (v, i) { return ({
                provider: CBSVideoPlayerWrapper.providerId,
                share_url: v.shareUrl,
                video_id: v.guid,
                title: v.title,
                url: v.url,
                guid: v.guid,
                large_thumbnail: v.thumbnail,
                is_live: false,
                sources: {}
            }); });
            return _this.callPlayerMethod("loadVideoData", mappedPlaylist);
        });
    };
    CBSVideoPlayerWrapper.prototype.play = function () {
        var _this = this;
        return this.playerReady.then(function () {
            return _this.callPlayerMethod("play", {});
        });
    };
    CBSVideoPlayerWrapper.prototype.pause = function () {
        var _this = this;
        return this.playerReady.then(function () {
            return _this.callPlayerMethod("pause", {});
        });
    };
    CBSVideoPlayerWrapper.prototype.mute = function () {
        var _this = this;
        return this.playerReady.then(function () {
            return _this.callPlayerMethod("mute", {});
        });
    };
    CBSVideoPlayerWrapper.prototype.unMute = function () {
        var _this = this;
        return this.playerReady.then(;
    };
    CBSVideoPlayerWrapper.prototype.onPlayerDomReady = function () {
        this.subscribeToPlayerEvents();
        this.log("setUtagData", this.utagData);
        this.callPlayerMethod("setUtagData", this.utagData);
    };
    CBSVideoPlayerWrapper.prototype.onPlayerReady = function () {
        if (this.options.autoplay && this.options.silent) {
            this.mute();
        }
        this.playerReady.resolve();
    };
    CBSVideoPlayerWrapper.prototype.onUpdateData = function (data) {
        this.log("onUpdateData", data);
    };
    CBSVideoPlayerWrapper.prototype.onPlayVideo = function (data) {
        this.log("onPlayVideo", data);
        var currentVideo = data.playerState.currentVideo;
        var shareUrl = data.playerConfig.refererURL;
        this.setShareUrl(shareUrl);
        this.currentVideo = currentVideo;
    };
    CBSVideoPlayerWrapper.prototype.setShareUrl = 
    CBSVideoPlayerWrapper.prototype.generateId = function () {
        return ("player" +
            Date.now() +
            Math.random()
                .toFixed(12)
                .slice(2));
    };
    CBSVideoPlayerWrapper.prototype.createIframeWithOptions = function (options) {
        var argString = Object.keys(options)
            .map(
            .join("&");
        this.iframe = document.createElement("iframe");
        this.iframe.src = CBSVideoPlayerWrapper.iframeOrigin + "/player/embed?args=" + encodeURIComponent(argString);
        this.iframe.name = this.playerId;
        this.iframe.setAttribute("frameborder", "no");
        this.iframe.setAttribute("allowfullscreen", "yes");
        this.iframe.setAttribute("marginheight", "0");
        this.iframe.setAttribute("marginwidth", "0");
        this.iframe.style.width = "100%";
        this.iframe.style.height = "100%";
        this.host.appendChild(this.iframe);
    };
    CBSVideoPlayerWrapper.prototype.initializePostMessageInterface = function () {
        var _this = this;
        this.onPostMessage = function (e) {
            if (!(e.data && e.data.name === _this.playerId))
                return;
            _this.log("onMessage", e.data);
            _this.onPlayerEvent(e);
        };
        window.addEventListener("message", this.onPostMessage, false);
    };
    CBSVideoPlayerWrapper.prototype.destroyPostMessageInterface = 
    CBSVideoPlayerWrapper.prototype.onPlayerEvent = function (e) {
        var event = e.data.event;
        var handler = this.eventToHandlerMapping[event];
        if (handler != null) {
            handler.call(this, e.data);
        }
        this.log("onPlayerEvent", event);
        this.globalEventHandler && this.globalEventHandler(event, e.data);
    };
    CBSVideoPlayerWrapper.prototype.subscribeToPlayerEvents = function () {
        this.callPlayerMethod("subscribe", {
            events: [
                "onPlayerReady",
                "onPlayVideo",
                "onUpdateData",
                "onAdStart",
                "onAdEnd",
                "onVideoDone",
                "onStateChange"
            ]
        });
    };
    CBSVideoPlayerWrapper.prototype.log = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log(name, args);
    };
    CBSVideoPlayerWrapper.prototype.callPlayerMethod = function (fnName, data) {
        this.log("callPlayerMethod", fnName, data);
        this.iframe.contentWindow.postMessage({
            call: fnName,
            params: data
        }, CBSVideoPlayerWrapper.iframeOrigin);
        return this;
    };
    CBSVideoPlayerWrapper.getHttpCookieValue = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            var cookie_value = parts
                .pop()
                .split(";")
                .shift();
            console.log("cookie value:" + cookie_value);
            return cookie_value;
        }
        else {
            return "";
        }
    };
    CBSVideoPlayerWrapper.iframeOrigin = window.cbsVideoPlayerIframeOrigin || "https://embed.cbssports.com";
    CBSVideoPlayerWrapper.isMobile = document.documentElement.clientWidth < 600;
    CBSVideoPlayerWrapper.platformId = "sidearm_site_" + (CBSVideoPlayerWrapper.isMobile ? "mweb" : "desktop");
    CBSVideoPlayerWrapper.providerId = "sidearm";
    CBSVideoPlayerWrapper.defaultVideoPlayerOptions = {
        resizable: true,
        autoplay: false,
        silent: false,
        log_window: true,
        env: "prod",
        js: "js/media/video/player/embed/sidearm.js",
        css: "css/media/video/player/embed/sidearm.css",
        source: "sidearm",
        partner: "sidearm",
        partner_m: "sidearm_m",
        uvpc: "https://www.cbssports.com/data/video/player/getConfig?cfg=uvp_sa&ver=prod",
        uvpc_m: "https://www.cbssports.com/data/video/player/getConfig?cfg=uvp_sa_m&ver=prod",
        utag: "sidearm"
    };
    CBSVideoPlayerWrapper.PLAYBACK_STATES = {
        EMPTY: -2,
        LOADING: -1,
        STOPPED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3
    };
    return CBSVideoPlayerWrapper;
}());
var Deferred = (function () {
    
    Deferred.prototype.then = 
    Deferred.prototype.catch = 
    Deferred.prototype.resolve = function (value) {
        return this.res(value);
    };
    Deferred.prototype.reject = 
    return Deferred;
}());
//# sourceMappingURL=cbs-video-wrapper.js.map
;
define("tsdist/cbs-video-wrapper", function(){});

/**
 * JW Player Source start cap
 * 
 * This will appear at the top of the JW Player source
 * 
 * @version 5.7
 */

 if (typeof jwplayer == "undefined") {/**
 * JW Player namespace definition
 * @version 5.8
 */
var jwplayer = 

var $jw = jwplayer;

jwplayer.version = '5.10.2295';

// "Shiv" method for older IE browsers; required for parsing media tags
jwplayer.vid = document.createElement("video");
jwplayer.audio = document.createElement("audio");
jwplayer.source = document.createElement("source");/**
 * Utility methods for the JW Player.
 * 
 * @author zach, pablo
 * @version 5.9
 */
(function(jwplayer) {

	jwplayer.utils = function() {
	};

	/** Returns the true type of an object * */

	/**
	 * 
	 * @param {Object}
	 *            value
	 */
	jwplayer.utils.typeOf = 

	/** Merges a list of objects * */
	jwplayer.utils.extend = 

	/**
	 * Returns a deep copy of an object.
	 * 
	 * @param {Object}
	 *            obj
	 */
	jwplayer.utils.clone = 

	/** Returns the extension of a file name * */
	jwplayer.utils.extension = 

	/** Updates the contents of an HTML element * */
	jwplayer.utils.html = 

	/** Wraps an HTML element with another element * */
	jwplayer.utils.wrap = 

	/** Loads an XML file into a DOM object * */
	jwplayer.utils.ajax = 

	/** Loads a file * */
	jwplayer.utils.load = 

	/** Finds tags in a DOM, returning a new DOM * */
	jwplayer.utils.find = 

	/** * */

	/** Appends an HTML element to another element HTML element * */
	jwplayer.utils.append = 

	/**
	 * Detects whether the current browser is IE !+"\v1" technique from
	 * http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
	 * Note - this detection no longer works for IE9, hence the detection for
	 * window.ActiveXObject
	 */
	jwplayer.utils.isIE = 

	jwplayer.utils.userAgentMatch = 
	
	/**
	 * Detects whether the current browser is mobile Safari.
	 */
	jwplayer.utils.isIOS = function() {
		return jwplayer.utils.userAgentMatch(/iP(hone|ad|od)/i);
	};
	
	jwplayer.utils.isIPad = function() {
		return jwplayer.utils.userAgentMatch(/iPad/i);
	};

	jwplayer.utils.isIPod = function() {
		return jwplayer.utils.userAgentMatch(/iP(hone|od)/i);
	};
	
	jwplayer.utils.isAndroid = function() {
		return jwplayer.utils.userAgentMatch(/android/i);
	};

	/**
	 * Detects whether the current browser is Android 2.0, 2.1 or 2.2 which do
	 * have some support for HTML5
	 */
	jwplayer.utils.isLegacyAndroid = function() {
		return jwplayer.utils.userAgentMatch(/android 2.[012]/i);
	};

	
	jwplayer.utils.isBlackberry = function() {
		return jwplayer.utils.userAgentMatch(/blackberry/i);
	};
	
	/** Matches iOS and Android devices **/	
	jwplayer.utils.isMobile = 


	jwplayer.utils.getFirstPlaylistItemFromConfig = 

	/**
	 * Replacement for "outerHTML" getter (not available in FireFox)
	 */
	jwplayer.utils.getOuterHTML = 

	/**
	 * Replacement for outerHTML setter (not available in FireFox)
	 */
	jwplayer.utils.setOuterHTML = 

	/**
	 * Detects whether or not the current player has flash capabilities TODO:
	 * Add minimum flash version constraint: 9.0.115
	 */
	jwplayer.utils.hasFlash = 

	/**
	 * Extracts a plugin name from a string
	 */
	jwplayer.utils.getPluginName = 

	/**
	 * Extracts a plugin version from a string
	 */
	jwplayer.utils.getPluginVersion = function(pluginName) {
		if (pluginName.lastIndexOf("-") >= 0) {
			if (pluginName.lastIndexOf(".js") >= 0) {
				return pluginName.substring(pluginName.lastIndexOf("-") + 1,
						pluginName.lastIndexOf(".js"));
			} else if (pluginName.lastIndexOf(".swf") >= 0) {
				return pluginName.substring(pluginName.lastIndexOf("-") + 1,
						pluginName.lastIndexOf(".swf"));
			} else {
				return pluginName.substring(pluginName.lastIndexOf("-") + 1);
			}
		}
		return "";
	};

	/** Gets an absolute file path based on a relative filepath * */
	jwplayer.utils.getAbsolutePath = function(path, base) {
		if (!jwplayer.utils.exists(base)) {
			base = document.location.href;
		}
		if (!jwplayer.utils.exists(path)) {
			return undefined;
		}
		if (isAbsolutePath(path)) {
			return path;
		}
		var protocol = base.substring(0, base.indexOf("://") + 3);
		var domain = base.substring(protocol.length, base.indexOf('/',
				protocol.length + 1));
		var patharray;
		if (path.indexOf("/") === 0) {
			patharray = path.split("/");
		} else {
			var basepath = base.split("?")[0];
			basepath = basepath.substring(protocol.length + domain.length + 1,
					basepath.lastIndexOf('/'));
			patharray = basepath.split("/").concat(path.split("/"));
		}
		var result = [];
		for ( var i = 0; i < patharray.length; i++) {
			if (!patharray[i] || !jwplayer.utils.exists(patharray[i])
					|| patharray[i] == ".") {
				continue;
			} else if (patharray[i] == "..") {
				result.pop();
			} else {
				result.push(patharray[i]);
			}
		}
		return protocol + domain + "/" + result.join("/");
	};

	

	/**
	 * Types of plugin paths
	 */
	jwplayer.utils.pluginPathType = {
		// TODO: enum
		ABSOLUTE : "ABSOLUTE",
		RELATIVE : "RELATIVE",
		CDN : "CDN"
	}

	/*
	 * Test cases getPathType('hd') getPathType('hd-1') getPathType('hd-1.4')
	 * 
	 * getPathType('http://plugins.longtailvideo.com/5/hd/hd.swf')
	 * getPathType('http://plugins.longtailvideo.com/5/hd/hd-1.swf')
	 * getPathType('http://plugins.longtailvideo.com/5/hd/hd-1.4.swf')
	 * 
	 * getPathType('./hd.swf') getPathType('./hd-1.swf')
	 * getPathType('./hd-1.4.swf')
	 */
	jwplayer.utils.getPluginPathType = 

	jwplayer.utils.mapEmpty = 

	jwplayer.utils.mapLength = 

	/** Logger * */
	jwplayer.utils.log = 

	/**
	 * 
	 * @param {Object}
	 *            domelement
	 * @param {Object}
	 *            styles
	 * @param {Object}
	 *            debug
	 */
	jwplayer.utils.css = function(domelement, styles, debug) {
		if (jwplayer.utils.exists(domelement)) {
			for ( var style in styles) {
				try {
					if (typeof styles[style] === "undefined") {
						continue;
					} else if (typeof styles[style] == "number"
							&& !(style == "zIndex" || style == "opacity")) {
						if (isNaN(styles[style])) {
							continue;
						}
						if (style.match(/color/i)) {
							styles[style] = "#"
									+ jwplayer.utils.strings.pad(styles[style]
											.toString(16), 6);
						} else {
							styles[style] = Math.ceil(styles[style]) + "px";
						}
					}
					domelement.style[style] = styles[style];
				} catch (err) {
				}
			}
		}
	};

	jwplayer.utils.isYouTube = 

	/**
	 * 
	 * @param {Object}
	 *            domelement
	 * @param {Object}
	 *            xscale
	 * @param {Object}
	 *            yscale
	 * @param {Object}
	 *            xoffset
	 * @param {Object}
	 *            yoffset
	 */
	jwplayer.utils.transform = function(domelement, xscale, yscale, xoffset, yoffset) {
		// Set defaults
		if (!jwplayer.utils.exists(xscale)) xscale = 1;
		if (!jwplayer.utils.exists(yscale)) yscale = 1;
		if (!jwplayer.utils.exists(xoffset)) xoffset = 0;
		if (!jwplayer.utils.exists(yoffset)) yoffset = 0;
		
		if (xscale == 1 && yscale == 1 && xoffset == 0 && yoffset == 0) {
			domelement.style.webkitTransform = "";
			domelement.style.MozTransform = "";
			domelement.style.OTransform = "";
		} else {
			var value = "scale("+xscale+","+yscale+") translate("+xoffset+"px,"+yoffset+"px)";
			
			domelement.style.webkitTransform = value;
			domelement.style.MozTransform = value;
			domelement.style.OTransform = value;
		}
	};

	/**
	 * Stretches domelement based on stretching. parentWidth, parentHeight,
	 * elementWidth, and elementHeight are required as the elements dimensions
	 * change as a result of the stretching. Hence, the original dimensions must
	 * always be supplied.
	 * 
	 * @param {String}
	 *            stretching
	 * @param {DOMElement}
	 *            domelement
	 * @param {Number}
	 *            parentWidth
	 * @param {Number}
	 *            parentHeight
	 * @param {Number}
	 *            elementWidth
	 * @param {Number}
	 *            elementHeight
	 */
	jwplayer.utils.stretch = 

	// TODO: enum
	jwplayer.utils.stretching = {
		NONE : "NONE",
		FILL : "FILL",
		UNIFORM : "UNIFORM",
		EXACTFIT : "EXACTFIT"
	};

	/**
	 * Recursively traverses nested object, replacing key names containing a
	 * search string with a replacement string.
	 * 
	 * @param searchString
	 *            The string to search for in the object's key names
	 * @param replaceString
	 *            The string to replace in the object's key names
	 * @returns The modified object.
	 */
	jwplayer.utils.deepReplaceKeyName = function(obj, searchString, replaceString) {
		switch (jwplayer.utils.typeOf(obj)) {
		case "array":
			for ( var i = 0; i < obj.length; i++) {
				obj[i] = jwplayer.utils.deepReplaceKeyName(obj[i],
						searchString, replaceString);
			}
			break;
		case "object":
			for ( var key in obj) {
				var searches, replacements;
				if (searchString instanceof Array && replaceString instanceof Array) {
					if (searchString.length != replaceString.length)
						continue;
					else {
						searches = searchString;
						replacements = replaceString;
					}
				} else {
					searches = [searchString];
					replacements = [replaceString];
				}
				var newkey = key;
				for (var i=0; i < searches.length; i++) {
					newkey = newkey.replace(new RegExp(searchString[i], "g"), replaceString[i]);
				}
				obj[newkey] = jwplayer.utils.deepReplaceKeyName(obj[key], searchString, replaceString);
				if (key != newkey) {
					delete obj[key];
				}
			}
			break;
		}
		return obj;
	}

	/**
	 * Returns true if an element is found in a given array
	 * 
	 * @param array
	 *            The array to search
	 * @param search
	 *            The element to search
	 */
	jwplayer.utils.isInArray = 

	/**
	 * Returns true if the value of the object is null, undefined or the empty
	 * string
	 * 
	 * @param a
	 *            The variable to inspect
	 */
	jwplayer.utils.exists = 
	
	/**
	 * Removes all of an HTML container's child nodes
	 **/
	jwplayer.utils.empty = 
	
	/**
	 * Cleans up a css dimension (e.g. '420px') and returns an integer.
	 */
	jwplayer.utils.parseDimension = function(dimension) {
		if (typeof dimension == "string") {
			if (dimension === "") {
				return 0;
			} else if (dimension.lastIndexOf("%") > -1) {
				return dimension;
			} else {
				return parseInt(dimension.replace("px", ""), 10);
			}
		}
		return dimension;
	}
	
	/**
	 * Returns dimensions (x,y,width,height) of a display object
	 */
	jwplayer.utils.getDimensions = 

	/**
	 * Gets the clientWidth of an element, or returns its style.width
	 */
	jwplayer.utils.getElementWidth = function(obj) {
		if (!obj) {
			return null;
		} else if (obj == document.body) {
			return jwplayer.utils.parentNode(obj).clientWidth;
		} else if (obj.clientWidth > 0) {
			return obj.clientWidth;
		} else if (obj.style) {
			return jwplayer.utils.parseDimension(obj.style.width);
		} else {
			return null;
		}
	}

	/**
	 * Gets the clientHeight of an element, or returns its style.height
	 */
	jwplayer.utils.getElementHeight = function(obj) {
		if (!obj) {
			return null;
		} else if (obj == document.body) {
			return jwplayer.utils.parentNode(obj).clientHeight;
		} else if (obj.clientHeight > 0) {
			return obj.clientHeight;
		} else if (obj.style) {
			return jwplayer.utils.parseDimension(obj.style.height);
		} else {
			return null;
		}
	}

	
	
	/** Format the elapsed / remaining text. **/
	jwplayer.utils.timeFormat = 
	

	/** Returns true if the player should use the browser's native fullscreen mode **/
	jwplayer.utils.useNativeFullscreen = 

	/** Returns an element's parent element.  If no parent is available, return the element itself **/
	jwplayer.utils.parentNode = function(element) {
		if (!element) {
			return document.body;
		} else if (element.parentNode) {
			return element.parentNode;
		} else if (element.parentElement) {
			return element.parentElement;
		} else {
			return element;
		}
	}
	
	/** Replacement for getBoundingClientRect, which isn't supported in iOS 3.1.2 **/
	jwplayer.utils.getBoundingClientRect = 
	
	/* Normalizes differences between Flash and HTML5 internal players' event responses. */
	jwplayer.utils.translateEventResponse = function(type, eventProperties) {
		var translated = jwplayer.utils.extend({}, eventProperties);
		if (type == jwplayer.api.events.JWPLAYER_FULLSCREEN && !translated.fullscreen) {
			translated.fullscreen = translated.message == "true" ? true : false;
			delete translated.message;
		} else if (typeof translated.data == "object") {
			// Takes ViewEvent "data" block and moves it up a level
			translated = jwplayer.utils.extend(translated, translated.data);
			delete translated.data;
		} else if (typeof translated.metadata == "object") {
			jwplayer.utils.deepReplaceKeyName(translated.metadata, ["__dot__","__spc__","__dsh__"], ["."," ","-"]);
		}
		
		var rounders = ["position", "duration", "offset"];
		for (var rounder in rounders) {
			if (translated[rounders[rounder]]) {
				translated[rounders[rounder]] = Math.round(translated[rounders[rounder]] * 1000) / 1000;
			}
		}
		
		return translated;
	}
	
	jwplayer.utils.saveCookie = 

	jwplayer.utils.getCookies = 
	
	jwplayer.utils.readCookie = 

})(jwplayer);
/**
 * Event namespace defintion for the JW Player
 *
 * @author zach
 * @version 5.5
 */
((jwplayer);
/**
 * Event dispatcher for the JW Player
 *
 * @author zach
 * @version 5.5
 */
(function(jwplayer) {
	jwplayer.events.eventdispatcher = function(debug) {
		var _debug = debug;
		var _listeners;
		var _globallisteners;
		
		/** Clears all event listeners **/
		this.resetEventListeners = 
		
		this.resetEventListeners();
		
		/** Add an event listener for a specific type of event. **/
		this.addEventListener = 
		
		
		/** Remove an event listener for a specific type of event. **/
		this.removeEventListener = 
		
		/** Add an event listener for all events. **/
		this.addGlobalListener = 
		
		/** Add an event listener for all events. **/
		this.removeGlobalListener = 
		
		
		/** Send an event **/
		this.sendEvent = function(type, data) {
			if (!jwplayer.utils.exists(data)) {
				data = {};
			}
			if (_debug) {
				jwplayer.utils.log(type, data);
			}
			if (typeof _listeners[type] != "undefined") {
				for (var listenerIndex = 0; listenerIndex < _listeners[type].length; listenerIndex++) {
					try {
						_listeners[type][listenerIndex].listener(data);
					} catch (err) {
						jwplayer.utils.log("There was an error while handling a listener: " + err.toString(), _listeners[type][listenerIndex].listener);
					}
					if (_listeners[type][listenerIndex]) {
						if (_listeners[type][listenerIndex].count === 1) {
							delete _listeners[type][listenerIndex];
						} else if (_listeners[type][listenerIndex].count > 0) {
							_listeners[type][listenerIndex].count = _listeners[type][listenerIndex].count - 1;
						}
					}
				}
			}
			for (var globalListenerIndex = 0; globalListenerIndex < _globallisteners.length; globalListenerIndex++) {
				try {
					_globallisteners[globalListenerIndex].listener(data);
				} catch (err) {
					jwplayer.utils.log("There was an error while handling a listener: " + err.toString(), _globallisteners[globalListenerIndex].listener);
				}
				if (_globallisteners[globalListenerIndex]) {
					if (_globallisteners[globalListenerIndex].count === 1) {
						delete _globallisteners[globalListenerIndex];
					} else if (_globallisteners[globalListenerIndex].count > 0) {
						_globallisteners[globalListenerIndex].count = _globallisteners[globalListenerIndex].count - 1;
					}
				}
			}
		};
	};
})(jwplayer);
/**
 * Utility methods for the JW Player.
 *
 * @author zach
 * @version 5.4
 */
(function(jwplayer) {
	var _animations = {};
	
	jwplayer.utils.animations = function() {
	};
	
	jwplayer.utils.animations.transform = function(domelement, value) {
		domelement.style.webkitTransform = value;
		domelement.style.MozTransform = value;
		domelement.style.OTransform = value;
		domelement.style.msTransform = value;
	};
	
	jwplayer.utils.animations.transformOrigin = 
	
	jwplayer.utils.animations.rotate = 
	
	jwplayer.utils.cancelAnimation = 
	
	jwplayer.utils.fadeTo = function(domelement, endAlpha, time, startAlpha, delay, startTime) {
		// Interrupting
		if (_animations[domelement.id] != startTime && jwplayer.utils.exists(startTime)) {
			return;
		}
		// No need to fade if the opacity is already where we're going
		if (domelement.style.opacity == endAlpha) {
			return;
		}
		
		var currentTime = new Date().getTime();
		if (startTime > currentTime) {
			setTimeout(function() {
				jwplayer.utils.fadeTo(domelement, endAlpha, time, startAlpha, 0, startTime);
			}, startTime - currentTime);
		}
		if (domelement.style.display == "none") {
			domelement.style.display = "block";
		}
		if (!jwplayer.utils.exists(startAlpha)) {
			startAlpha = domelement.style.opacity === "" ? 1 : domelement.style.opacity;
		}
		if (domelement.style.opacity == endAlpha && domelement.style.opacity !== "" && jwplayer.utils.exists(startTime)) {
			if (endAlpha === 0) {
				domelement.style.display = "none";
			}
			return;
		}
		if (!jwplayer.utils.exists(startTime)) {
			startTime = currentTime;
			_animations[domelement.id] = startTime;
		}
		if (!jwplayer.utils.exists(delay)) {
			delay = 0;
		}
		var percentTime = (time > 0) ? ((currentTime - startTime) / (time * 1000)) : 0;
		percentTime = percentTime > 1 ? 1 : percentTime;
		var delta = endAlpha - startAlpha;
		var alpha = startAlpha + (percentTime * delta);
		if (alpha > 1) {
			alpha = 1;
		} else if (alpha < 0) {
			alpha = 0;
		}
		domelement.style.opacity = alpha;
		if (delay > 0) {
			_animations[domelement.id] = startTime + delay * 1000;
			jwplayer.utils.fadeTo(domelement, endAlpha, time, startAlpha, 0, _animations[domelement.id]);
			return;
		}
		setTimeout( 10);
	};
})(jwplayer);
/**
 * Arrays utility class
 * 
 * @author zach
 * @version 5.5
 */
((jwplayer);
/**
 * JW Player Media Extension to Mime Type mapping
 *
 * @author zach
 * @version 5.4
 */
(function(jwplayer) {
	jwplayer.utils.extensionmap = {
		"3gp": {
			"html5": "video/3gpp",
			"flash": "video"
		},
		"3gpp": {
			"html5": "video/3gpp"
		},
		"3g2": {
			"html5": "video/3gpp2",
			"flash": "video"
		},
		"3gpp2": {
			"html5": "video/3gpp2"
		},
		"flv": {
			"flash": "video"
		},
		"f4a": {
			"html5": "audio/mp4"
		},
		"f4b": {
			"html5": "audio/mp4",
			"flash": "video"
		},
		"f4v": {
			"html5": "video/mp4",
			"flash": "video"
		},
		"mov": {
			"html5": "video/quicktime",
			"flash": "video"
		},
		"m4a": {
			"html5": "audio/mp4",
			"flash": "video"
		},
		"m4b": {
			"html5": "audio/mp4"
		},
		"m4p": {
			"html5": "audio/mp4"
		},
		"m4v": {
			"html5": "video/mp4",
			"flash": "video"
		},
		"mp4": {
			"html5": "video/mp4",
			"flash": "video"
		},
		"rbs":{
			"flash": "sound"
		},
		"aac": {
			"html5": "audio/aac",
			"flash": "video"
		},
		"mp3": {
			"html5": "audio/mp3",
			"flash": "sound"
		},
		"ogg": {
			"html5": "audio/ogg"
		},
		"oga": {
			"html5": "audio/ogg"
		},
		"ogv": {
			"html5": "video/ogg"
		},
		"webm": {
			"html5": "video/webm"
		},
		"m3u8": {
			"html5": "audio/x-mpegurl"
		},
		"gif": {
			"flash": "image"
		},
		"jpeg": {
			"flash": "image"
		},
		"jpg": {
			"flash": "image"
		},
		"swf":{
			"flash": "image"
		},
		"png":{
			"flash": "image"
		},
		"wav":{
			"html5": "audio/x-wav"
		}
	};
})(jwplayer);
/**
 * Parser for the JW Player.
 *
 * @author zach
 * @version 5.4
 */
(function(jwplayer) {

    jwplayer.utils.mediaparser = function() {};

	var elementAttributes = {
		element: {
			width: 'width',
			height: 'height',
			id: 'id',
			'class': 'className',
			name: 'name'
		},
		media: {
			src: 'file',
			preload: 'preload',
			autoplay: 'autostart',
			loop: 'repeat',
			controls: 'controls'
		},
		source: {
			src: 'file',
			type: 'type',
			media: 'media',
			'data-jw-width': 'width',
			'data-jw-bitrate': 'bitrate'
				
		},
		video: {
			poster: 'image'
		}
	};
	
	var parsers = {};
	
	jwplayer.utils.mediaparser.parseMedia = 
	
	
	
	
	
	function parseMediaElement(domElement, attributes) {
		attributes = getAttributeList('media', attributes);
		var sources = [];
		var sourceTags = jwplayer.utils.selectors("source", domElement);
		for (var i in sourceTags) {
			if (!isNaN(i)){
				sources.push(parseSourceElement(sourceTags[i]));					
			}
		}
		var configuration = parseElement(domElement, attributes);
		if (jwplayer.utils.exists(configuration.file)) {
			sources[0] = {
				'file': configuration.file
			};
		}
		configuration.levels = sources;
		return configuration;
	}
	
	
	
	
	
	parsers.media = parseMediaElement;
	parsers.audio = parseMediaElement;
	parsers.source = parseSourceElement;
	parsers.video = parseVideoElement;
	
	
})(jwplayer);
/**
 * Loads a <script> tag
 * @author zach
 * @version 5.5
 */
((jwplayer);
/**
 * Selectors for the JW Player.
 *
 * @author zach
 * @version 5.4
 */
(function(jwplayer) {
	jwplayer.utils.selectors = function(selector, parent) {
		if (!jwplayer.utils.exists(parent)) {
			parent = document;
		}
		selector = jwplayer.utils.strings.trim(selector);
		var selectType = selector.charAt(0);
		if (selectType == "#") {
			return parent.getElementById(selector.substr(1));
		} else if (selectType == ".") {
			if (parent.getElementsByClassName) {
				return parent.getElementsByClassName(selector.substr(1));
			} else {
				return jwplayer.utils.selectors.getElementsByTagAndClass("*", selector.substr(1));
			}
		} else {
			if (selector.indexOf(".") > 0) {
				var selectors = selector.split(".");
				return jwplayer.utils.selectors.getElementsByTagAndClass(selectors[0], selectors[1]);
			} else {
				return parent.getElementsByTagName(selector);
			}
		}
		return null;
	};
	
	jwplayer.utils.selectors.getElementsByTagAndClass = 
})(jwplayer);
/**
 * String utilities for the JW Player.
 *
 * @author zach
 * @version 5.8
 */
(function(jwplayer) {

	jwplayer.utils.strings = function() {
	};
	
	/** Removes whitespace from the beginning and end of a string **/
	jwplayer.utils.strings.trim = 
	
	/**
	 * Pads a string
	 * @param {String} string
	 * @param {Number} length
	 * @param {String} padder
	 */
	jwplayer.utils.strings.pad = 
	
		/**
	 * Basic serialization: string representations of booleans and numbers are returned typed;
	 * strings are returned urldecoded.
	 *
	 * @param {String} val	String value to serialize.
	 * @return {Object}		The original value in the correct primitive type.
	 */
	jwplayer.utils.strings.serialize = function(val) {
		if (val == null) {
			return null;
		} else if (val == 'true') {
			return true;
		} else if (val == 'false') {
			return false;
		} else if (isNaN(Number(val)) || val.length > 5 || val.length == 0) {
			return val;
		} else {
			return Number(val);
		}
	}
	
	
	/**
	 * Convert a time-representing string to a number.
	 *
	 * @param {String}	The input string. Supported are 00:03:00.1 / 03:00.1 / 180.1s / 3.2m / 3.2h
	 * @return {Number}	The number of seconds.
	 */
	jwplayer.utils.strings.seconds = function(str) {
		str = str.replace(',', '.');
		var arr = str.split(':');
		var sec = 0;
		if (str.substr(-1) == 's') {
			sec = Number(str.substr(0, str.length - 1));
		} else if (str.substr(-1) == 'm') {
			sec = Number(str.substr(0, str.length - 1)) * 60;
		} else if (str.substr(-1) == 'h') {
			sec = Number(str.substr(0, str.length - 1)) * 3600;
		} else if (arr.length > 1) {
			sec = Number(arr[arr.length - 1]);
			sec += Number(arr[arr.length - 2]) * 60;
			if (arr.length == 3) {
				sec += Number(arr[arr.length - 3]) * 3600;
			}
		} else {
			sec = Number(str);
		}
		return sec;
	}
	
	
	/**
	 * Get the value of a case-insensitive attribute in an XML node
	 * @param {XML} xml
	 * @param {String} attribute
	 * @return {String} Value
	 */
	jwplayer.utils.strings.xmlAttribute = function(xml, attribute) {
		for (var attrib = 0; attrib < xml.attributes.length; attrib++) {
			if (xml.attributes[attrib].name && xml.attributes[attrib].name.toLowerCase() == attribute.toLowerCase()) 
				return xml.attributes[attrib].value.toString();
		}
		return "";
	}
	
	/**
	 * Converts a JSON object into its string representation.
	 * @param obj {Object} String, Number, Array or nested Object to serialize
	 * Serialization code borrowed from 
	 */
	jwplayer.utils.strings.jsonToString = 
	
})(jwplayer);
/**
 * Utility methods for the JW Player.
 *
 * @author zach
 * @version 5.4
 */
(function(jwplayer) {
	var _colorPattern = new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);
	
	jwplayer.utils.typechecker = 
	
	function _guessType(value) {
		var bools = ["true", "false", "t", "f"];
		if (bools.toString().indexOf(value.toLowerCase().replace(" ", "")) >= 0) {
			return "boolean";
		} else if (_colorPattern.test(value)) {
			return "color";
		} else if (!isNaN(parseInt(value, 10)) && parseInt(value, 10).toString().length == value.length) {
			return "integer";
		} else if (!isNaN(parseFloat(value)) && parseFloat(value).toString().length == value.length) {
			return "float";
		}
		return "string";
	}
	
	function _typeData(value, type) {
		if (!jwplayer.utils.exists(type)) {
			return value;
		}
		
		switch (type) {
			case "color":
				if (value.length > 0) {
					return _stringToColor(value);
				}
				return null;
			case "integer":
				return parseInt(value, 10);
			case "float":
				return parseFloat(value);
			case "boolean":
				if (value.toLowerCase() == "true") {
					return true;
				} else if (value == "1") {
					return true;
				}
				return false;
		}
		return value;
	}
	
	
	
})(jwplayer);
/**
 * Parser class definition
 *
 * @author zach
 * @version 5.7
 */
(function(jwplayer) {

	jwplayer.utils.parsers = function() {
	};
	
	jwplayer.utils.parsers.localName = function(node) {
		if(!node) {
			return "";
		} else if (node.localName) {
			return node.localName;
		} else if (node.baseName) {
			return node.baseName;
		} else {
			return "";
		}
	}

	jwplayer.utils.parsers.textContent = function(node) {
		if(!node) {
			return "";
		} else if (node.textContent) {
			return node.textContent;
		} else if (node.text) {
			return node.text;
		} else {
			return "";
		}
	}

})(jwplayer);
/**
 * Parse a feed item for JWPlayer content.
 *
 * @author zach
 * @version 5.7
 */
(function(jwplayer) {

	jwplayer.utils.parsers.jwparser = function() {
	};
	
	jwplayer.utils.parsers.jwparser.PREFIX = 'jwplayer';
	
	/**
	 * Parse a feed entry for JWPlayer content.
	 *
	 * @param	{XML}		obj	The XML object to parse.
	 * @param	{Object}	itm	The playlistentry to amend the object to.
	 * @return	{Object}		The playlistentry, amended with the JWPlayer info.
	 * @see			ASXParser
	 * @see			ATOMParser
	 * @see			RSSParser
	 * @see			SMILParser
	 * @see			XSPFParser
	 */
	jwplayer.utils.parsers.jwparser.parseEntry = function(obj, itm) {
		for (var i = 0; i < obj.childNodes.length; i++) {
			if (obj.childNodes[i].prefix == jwplayer.utils.parsers.jwparser.PREFIX) {
				itm[jwplayer.utils.parsers.localName(obj.childNodes[i])] = jwplayer.utils.strings.serialize(jwplayer.utils.parsers.textContent(obj.childNodes[i]));
				if (jwplayer.utils.parsers.localName(obj.childNodes[i]) == "file" && itm.levels) {
					// jwplayer namespace file should override existing level (probably set in MediaParser)
					delete itm.levels;
				}
			}
			if (!itm['file'] && String(itm['link']).toLowerCase().indexOf('youtube') > -1) {
				itm['file'] = itm['link'];
			}
		}
		return itm;
	}
	
	/**
	 * Determine the provider of an item
	 * @param {Object} item
	 * @return {String} provider
	 */
	jwplayer.utils.parsers.jwparser.getProvider = function(item) {
		if (item['type']) {
			return item['type'];
		} else if (item['file'].indexOf('youtube.com/w') > -1 
					|| item['file'].indexOf('youtube.com/v') > -1
					|| item['file'].indexOf('youtu.be/') > -1 ) {
			return "youtube";
		} else if (item['streamer'] && item['streamer'].indexOf('rtmp') == 0) {
			return "rtmp";
		} else if (item['streamer'] && item['streamer'].indexOf('http') == 0) {
			return "http";
		} else {
			var ext = jwplayer.utils.strings.extension(item['file']);
			if (extensions.hasOwnProperty(ext)) {
				return extensions[ext];
			}
		}
		return "";
	}
	
})(jwplayer);
/**
 * Parse a MRSS group into a playlistitem (used in RSS and ATOM).
 *
 * author zach
 * version 5.7
 */
(function(jwplayer) {

	jwplayer.utils.parsers.mediaparser = function() {
	};
	
	/** Prefix for the JW Player namespace. **/
	jwplayer.utils.parsers.mediaparser.PREFIX = 'media';
	
	/**
	 * Parse a feeditem for Yahoo MediaRSS extensions.
	 * The 'content' and 'group' elements can nest other MediaRSS elements.
	 * @param	{XML}		obj		The entire MRSS XML object.
	 * @param	{Object}	itm		The playlistentry to amend the object to.
	 * @return	{Object}			The playlistentry, amended with the MRSS info.
	 * @see ATOMParser
	 * @see RSSParser
	 **/
	jwplayer.utils.parsers.mediaparser.parseGroup = function(obj, itm) {
		var ytp = false;
		
		for (var i = 0; i < obj.childNodes.length; i++) {
			if (obj.childNodes[i].prefix == jwplayer.utils.parsers.mediaparser.PREFIX) {
				if (!jwplayer.utils.parsers.localName(obj.childNodes[i])){
					continue;
				}
				switch (jwplayer.utils.parsers.localName(obj.childNodes[i]).toLowerCase()) {
					case 'content':
						if (!ytp) {
							itm['file'] = jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'url');
						}
						if (jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'duration')) {
							itm['duration'] = jwplayer.utils.strings.seconds(jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'duration'));
						}
						if (jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'start')) {
							itm['start'] = jwplayer.utils.strings.seconds(jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'start'));
						}
						if (obj.childNodes[i].childNodes && obj.childNodes[i].childNodes.length > 0) {
							itm = jwplayer.utils.parsers.mediaparser.parseGroup(obj.childNodes[i], itm);
						}
						if (jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'width')
								|| jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'bitrate')
								|| jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'url')) {
							if (!itm.levels) {
								itm.levels = [];
							}
							itm.levels.push({
								width: jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'width'),
								bitrate: jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'bitrate'),
								file: jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'url')
							});
						}
						break;
					case 'title':
						itm['title'] = jwplayer.utils.parsers.textContent(obj.childNodes[i]);
						break;
					case 'description':
						itm['description'] = jwplayer.utils.parsers.textContent(obj.childNodes[i]);
						break;
					case 'keywords':
						itm['tags'] = jwplayer.utils.parsers.textContent(obj.childNodes[i]);
						break;
					case 'thumbnail':
						itm['image'] = jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'url');
						break;
					case 'credit':
						itm['author'] = jwplayer.utils.parsers.textContent(obj.childNodes[i]);
						break;
					case 'player':
						var url = obj.childNodes[i].url;
						if (url.indexOf('youtube.com') >= 0 || url.indexOf('youtu.be') >= 0) {
							ytp = true;
							itm['file'] = jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'url');
						}
						break;
					case 'group':
						jwplayer.utils.parsers.mediaparser.parseGroup(obj.childNodes[i], itm);
						break;
				}
			}
		}
		return itm;
	}
	
})(jwplayer);
/**
 * Parse an RSS feed and translate it to a playlist.
 *
 * @author zach
 * @version 5.7
 */
(function(jwplayer) {

	jwplayer.utils.parsers.rssparser = function() {
	};
	
	/**
	 * Parse an RSS playlist for feed items.
	 *
	 * @param {XML} dat
	 * @reuturn {Array} playlistarray
	 */
	jwplayer.utils.parsers.rssparser.parse = 
	
	
	/** 
	 * Translate RSS item to playlist item.
	 *
	 * @param {XML} obj
	 * @return {PlaylistItem} PlaylistItem
	 */
	function _parseItem(obj) {
		var itm = {};
		for (var i = 0; i < obj.childNodes.length; i++) {
			if (!jwplayer.utils.parsers.localName(obj.childNodes[i])){
				continue;
			}
			switch (jwplayer.utils.parsers.localName(obj.childNodes[i]).toLowerCase()) {
				case 'enclosure':
					itm['file'] = jwplayer.utils.strings.xmlAttribute(obj.childNodes[i], 'url');
					break;
				case 'title':
					itm['title'] = jwplayer.utils.parsers.textContent(obj.childNodes[i]);
					break;
				case 'pubdate':
					itm['date'] = jwplayer.utils.parsers.textContent(obj.childNodes[i]);
					break;
				case 'description':
					itm['description'] = jwplayer.utils.parsers.textContent(obj.childNodes[i]);
					break;
				case 'link':
					itm['link'] = jwplayer.utils.parsers.textContent(obj.childNodes[i]);
					break;
				case 'category':
					if (itm['tags']) {
						itm['tags'] += jwplayer.utils.parsers.textContent(obj.childNodes[i]);
					} else {
						itm['tags'] = jwplayer.utils.parsers.textContent(obj.childNodes[i]);
					}
					break;
			}
		}
//		itm = jwplayer.utils.parsers.itunesparser.parseEntry(obj, itm);
		itm = jwplayer.utils.parsers.mediaparser.parseGroup(obj, itm);
		itm = jwplayer.utils.parsers.jwparser.parseEntry(obj, itm);

		return new jwplayer.html5.playlistitem(itm);
	}
	
	
})(jwplayer);
/**
 * Plugin package definition
 * @author zach
 * @version 5.5
 */
((jwplayer);
/**
 * Model that manages all plugins
 * @author zach
 * @version 5.5
 */
((jwplayer);
/**
 * Internal plugin model
 * @author zach
 * @version 5.8
 */
(function(jwplayer) {
	jwplayer.plugins.pluginmodes = {
		FLASH: "FLASH",
		JAVASCRIPT: "JAVASCRIPT",
		HYBRID: "HYBRID"
	}
	
	jwplayer.plugins.plugin = function(url) {
		var _repo = "http://plugins.longtailvideo.com"
		var _status = jwplayer.utils.loaderstatus.NEW;
		var _flashPath;
		var _js;
		var _completeTimeout;
		
		var _eventDispatcher = new jwplayer.events.eventdispatcher();
		jwplayer.utils.extend(this, _eventDispatcher);
		
		
		
		
		
		
		
		this.load = 
		
		this.registerPlugin = function(id, arg1, arg2) {
			if (_completeTimeout){
				clearTimeout(_completeTimeout);
				_completeTimeout = undefined;
			}
			if (arg1 && arg2) {
				_flashPath = arg2;
				_js = arg1;
			} else if (typeof arg1 == "string") {
				_flashPath = arg1;
			} else if (typeof arg1 == "function") {
				_js = arg1;
			} else if (!arg1 && !arg2) {
				_flashPath = id;
			}
			_status = jwplayer.utils.loaderstatus.COMPLETE;
			_eventDispatcher.sendEvent(jwplayer.events.COMPLETE);
		}
		
		this.getStatus = function() {
			return _status;
		}
		
		this.getPluginName = 
		
		this.getFlashPath = 
		
		this.getJS = function() {
			return _js;
		}

		this.getPluginmode = function() {
			if (typeof _flashPath != "undefined"
			 && typeof _js != "undefined") {
			 	return jwplayer.plugins.pluginmodes.HYBRID;
			 } else if (typeof _flashPath != "undefined") {
			 	return jwplayer.plugins.pluginmodes.FLASH;
			 } else if (typeof _js != "undefined") {
			 	return jwplayer.plugins.pluginmodes.JAVASCRIPT;
			 }
		}
		
		this.getNewInstance = 
		
		this.getURL = function() {
			return url;
		}
	}
	
})(jwplayer);
/**
 * Loads plugins for a player
 * @author zach
 * @version 5.6
 */
((jwplayer);
/**
 * API for the JW Player
 * 
 * @author Pablo
 * @version 5.8
 */
(function(jwplayer) {
	var _players = [];
	
	jwplayer.api = function(container) {
		this.container = container;
		this.id = container.id;
		
		var _listeners = {};
		var _stateListeners = {};
		var _componentListeners = {};
		var _readyListeners = [];
		var _player = undefined;
		var _playerReady = false;
		var _queuedCalls = [];
		var _instream = undefined;
		
		var _originalHTML = jwplayer.utils.getOuterHTML(container);
		
		var _itemMeta = {};
		var _callbacks = {};
		
		// Player Getters
		this.getBuffer = function() {
			return this.callInternal('jwGetBuffer');
		};
		this.getContainer = function() {
			return this.container;
		};
		
		function _setButton(ref, plugin) {
			return function(id, handler, outGraphic, overGraphic) {
				if (ref.renderingMode == "flash" || ref.renderingMode == "html5") {
					var handlerString;
					if (handler) {
						_callbacks[id] = handler;
						handlerString = "jwplayer('" + ref.id + "').callback('" + id + "')";
					} else if (!handler && _callbacks[id]) {
						delete _callbacks[id];
					}
					_player.jwDockSetButton(id, handlerString, outGraphic, overGraphic);
				}
				return plugin;
			};
		}
		
		this.getPlugin = function(pluginName) {
			var _this = this;
			var _plugin = {};
			if (pluginName == "dock") {
				return jwplayer.utils.extend(_plugin, {
					setButton: _setButton(_this, _plugin),
					show: function() { _this.callInternal('jwDockShow'); return _plugin; },
					hide: function() { _this.callInternal('jwDockHide'); return _plugin; },
					onShow: function(callback) { 
						_this.componentListener("dock", jwplayer.api.events.JWPLAYER_COMPONENT_SHOW, callback); 
						return _plugin; 
					},
					onHide: function(callback) { 
						_this.componentListener("dock", jwplayer.api.events.JWPLAYER_COMPONENT_HIDE, callback); 
						return _plugin; 
					}
				});
			} else if (pluginName == "controlbar") {
				return jwplayer.utils.extend(_plugin, {
					show: function() { _this.callInternal('jwControlbarShow'); return _plugin; },
					hide: function() { _this.callInternal('jwControlbarHide'); return _plugin; },
					onShow: function(callback) { 
						_this.componentListener("controlbar", jwplayer.api.events.JWPLAYER_COMPONENT_SHOW, callback); 
						return _plugin; 
					},
					onHide: function(callback) { 
						_this.componentListener("controlbar", jwplayer.api.events.JWPLAYER_COMPONENT_HIDE, callback); 
						return _plugin; 
					}
				});
			} else if (pluginName == "display") {
				return jwplayer.utils.extend(_plugin, {
					show: function() { _this.callInternal('jwDisplayShow'); return _plugin; },
					hide: 
					onShow: function(callback) { 
						_this.componentListener("display", jwplayer.api.events.JWPLAYER_COMPONENT_SHOW, callback); 
						return _plugin; 
					},
					onHide: 
				});
			} else {
				return this.plugins[pluginName];
			}
		};
		
		this.callback = 
		this.getDuration = function() {
			return this.callInternal('jwGetDuration');
		};
		this.getFullscreen = function() {
			return this.callInternal('jwGetFullscreen');
		};
		this.getHeight = function() {
			return this.callInternal('jwGetHeight');
		};
		this.getLockState = function() {
			return this.callInternal('jwGetLockState');
		};
		this.getMeta = 
		this.getMute = function() {
			return this.callInternal('jwGetMute');
		};
		this.getPlaylist = 
		this.getPlaylistItem = 
		this.getPosition = function() {
			return this.callInternal('jwGetPosition');
		};
		this.getRenderingMode = function() {
			return this.renderingMode;
		};
		this.getState = function() {
			return this.callInternal('jwGetState');
		};
		this.getVolume = function() {
			return this.callInternal('jwGetVolume');
		};
		this.getWidth = function() {
			return this.callInternal('jwGetWidth');
		};
		// Player Public Methods
		this.setFullscreen = function(fullscreen) {
			if (!jwplayer.utils.exists(fullscreen)) {
				this.callInternal("jwSetFullscreen", !this.callInternal('jwGetFullscreen'));
			} else {
				this.callInternal("jwSetFullscreen", fullscreen);
			}
			return this;
		};
		this.setMute = 
		this.lock = function() {
			return this;
		};
		this.unlock = 
		this.load = function(toLoad) {
			this.callInternal("jwLoad", toLoad);
			return this;
		};
		this.playlistItem = function(item) {
			this.callInternal("jwPlaylistItem", item);
			return this;
		};
		this.playlistPrev = function() {
			this.callInternal("jwPlaylistPrev");
			return this;
		};
		this.playlistNext = function() {
			this.callInternal("jwPlaylistNext");
			return this;
		};
		this.resize = 
		this.play = function(state) {
			if (typeof state == "undefined") {
				state = this.getState();
				if (state == jwplayer.api.events.state.PLAYING || state == jwplayer.api.events.state.BUFFERING) {
					this.callInternal("jwPause");
				} else {
					this.callInternal("jwPlay");
				}
			} else {
				this.callInternal("jwPlay", state);
			}
			return this;
		};
		this.pause = 
		this.stop = 
		this.seek = function(position) {
			this.callInternal("jwSeek", position);
			return this;
		};
		this.setVolume = 
		this.loadInstream = 
		// Player Events
		this.onBufferChange = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_MEDIA_BUFFER, callback);
		};
		this.onBufferFull = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_MEDIA_BUFFER_FULL, callback);
		};
		this.onError = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_ERROR, callback);
		};
		this.onFullscreen = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_FULLSCREEN, callback);
		};
		this.onMeta = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_MEDIA_META, callback);
		};
		this.onMute = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_MEDIA_MUTE, callback);
		};
		this.onPlaylist = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, callback);
		};
		this.onPlaylistItem = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM, callback);
		};
		this.onReady = function(callback) {
			return this.eventListener(jwplayer.api.events.API_READY, callback);
		};
		this.onResize = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_RESIZE, callback);
		};
		this.onComplete = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_MEDIA_COMPLETE, callback);
		};
		this.onSeek = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_MEDIA_SEEK, callback);
		};
		this.onTime = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_MEDIA_TIME, callback);
		};
		this.onVolume = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_MEDIA_VOLUME, callback);
		};
		this.onBeforePlay = function(callback) {
			return this.eventListener(jwplayer.api.events.JWPLAYER_MEDIA_BEFOREPLAY, callback);
		};
		this.onBeforeComplete = 
		// State events
		this.onBuffer = function(callback) {
			return this.stateListener(jwplayer.api.events.state.BUFFERING, callback);
		};
		this.onPause = function(callback) {
			return this.stateListener(jwplayer.api.events.state.PAUSED, callback);
		};
		this.onPlay = function(callback) {
			return this.stateListener(jwplayer.api.events.state.PLAYING, callback);
		};
		this.onIdle = 
		this.remove = 
		
		
		
		this.setup = 
		this.registerPlugin = 
		
		/** Use this function to set the internal low-level player.  This is a javascript object which contains the low-level API calls. **/
		this.setPlayer = 
		
		this.stateListener = 
		
		this.detachMedia = function() {
			if (this.renderingMode == "html5") {
				return this.callInternal("jwDetachMedia");
			}
		}

		this.attachMedia = 

		
		
		this.componentListener = 
		
			
		
		this.addInternalListener = 
		
		this.eventListener = 
		
		this.dispatchEvent = 

		this.dispatchInstreamEvent = 

		this.callInternal = function() {
			if (_playerReady) {
				var funcName = arguments[0],
				args = [];
			
				for (var argument = 1; argument < arguments.length; argument++) {
					args.push(arguments[argument]);
				}
				
				if (typeof _player != "undefined" && typeof _player[funcName] == "function") {
					if (args.length == 2) { 
						return (_player[funcName])(args[0], args[1]);
					} else if (args.length == 1) {
						return (_player[funcName])(args[0]);
					} else {
						return (_player[funcName])();
					}
				}
				return null;
			} else {
				_queuedCalls.push(arguments);
			}
		};
		
		this.playerReady = 
		
		this.getItemMeta = function() {
			return _itemMeta;
		};
		
		this.getCurrentItem = 
		
		/** Using this function instead of array.slice since Arguments are not an array **/
		
		return this;
	};
	
	jwplayer.api.selectPlayer = function(identifier) {
		var _container;
		
		if (!jwplayer.utils.exists(identifier)) {
			identifier = 0;
		}
		
		if (identifier.nodeType) {
			// Handle DOM Element
			_container = identifier;
		} else if (typeof identifier == 'string') {
			// Find container by ID
			_container = document.getElementById(identifier);
		}
		
		if (_container) {
			var foundPlayer = jwplayer.api.playerById(_container.id);
			if (foundPlayer) {
				return foundPlayer;
			} else {
				// Todo: register new object
				return jwplayer.api.addPlayer(new jwplayer.api(_container));
			}
		} else if (typeof identifier == 'number') {
			return jwplayer.getPlayers()[identifier];
		}
		
		return null;
	};
	
	jwplayer.api.events = {
		API_READY: 'jwplayerAPIReady',
		JWPLAYER_READY: 'jwplayerReady',
		JWPLAYER_FULLSCREEN: 'jwplayerFullscreen',
		JWPLAYER_RESIZE: 'jwplayerResize',
		JWPLAYER_ERROR: 'jwplayerError',
		JWPLAYER_MEDIA_BEFOREPLAY: 'jwplayerMediaBeforePlay',
		JWPLAYER_MEDIA_BEFORECOMPLETE: 'jwplayerMediaBeforeComplete',
		JWPLAYER_COMPONENT_SHOW: 'jwplayerComponentShow',
		JWPLAYER_COMPONENT_HIDE: 'jwplayerComponentHide',
		JWPLAYER_MEDIA_BUFFER: 'jwplayerMediaBuffer',
		JWPLAYER_MEDIA_BUFFER_FULL: 'jwplayerMediaBufferFull',
		JWPLAYER_MEDIA_ERROR: 'jwplayerMediaError',
		JWPLAYER_MEDIA_LOADED: 'jwplayerMediaLoaded',
		JWPLAYER_MEDIA_COMPLETE: 'jwplayerMediaComplete',
		JWPLAYER_MEDIA_SEEK: 'jwplayerMediaSeek',
		JWPLAYER_MEDIA_TIME: 'jwplayerMediaTime',
		JWPLAYER_MEDIA_VOLUME: 'jwplayerMediaVolume',
		JWPLAYER_MEDIA_META: 'jwplayerMediaMeta',
		JWPLAYER_MEDIA_MUTE: 'jwplayerMediaMute',
		JWPLAYER_PLAYER_STATE: 'jwplayerPlayerState',
		JWPLAYER_PLAYLIST_LOADED: 'jwplayerPlaylistLoaded',
		JWPLAYER_PLAYLIST_ITEM: 'jwplayerPlaylistItem',
		JWPLAYER_INSTREAM_CLICK: 'jwplayerInstreamClicked',
		JWPLAYER_INSTREAM_DESTROYED: 'jwplayerInstreamDestroyed'
	};
	
	jwplayer.api.events.state = {
		BUFFERING: 'BUFFERING',
		IDLE: 'IDLE',
		PAUSED: 'PAUSED',
		PLAYING: 'PLAYING'
	};
	
	jwplayer.api.playerById = 
	
	jwplayer.api.addPlayer = 
	
	jwplayer.api.destroyPlayer = 
	
	// Can't make this a read-only getter, thanks to IE incompatibility.
	jwplayer.getPlayers = 
	
})(jwplayer);

var _userPlayerReady = (typeof playerReady == 'function') ? playerReady : undefined;

playerReady = 
/**
 * InStream API 
 * 
 * @author Pablo
 * @version 5.9
 */
(function(jwplayer) {
	
	jwplayer.api.instream = function(api, player, item, options) {
		
		var _api = api;
		var _player = player;
		var _item = item;
		var _options = options;
		var _listeners = {};
		var _stateListeners = {};
		
		
		
		

		

		

			
		this.dispatchEvent = 
		
		
		this.onError = function(callback) {
			return _eventListener(jwplayer.api.events.JWPLAYER_ERROR, callback);
		};
		this.onFullscreen = function(callback) {
			return _eventListener(jwplayer.api.events.JWPLAYER_FULLSCREEN, callback);
		};
		this.onMeta = function(callback) {
			return _eventListener(jwplayer.api.events.JWPLAYER_MEDIA_META, callback);
		};
		this.onMute = function(callback) {
			return _eventListener(jwplayer.api.events.JWPLAYER_MEDIA_MUTE, callback);
		};
		this.onComplete = function(callback) {
			return _eventListener(jwplayer.api.events.JWPLAYER_MEDIA_COMPLETE, callback);
		};
		this.onSeek = function(callback) {
			return _eventListener(jwplayer.api.events.JWPLAYER_MEDIA_SEEK, callback);
		};
		this.onTime = function(callback) {
			return _eventListener(jwplayer.api.events.JWPLAYER_MEDIA_TIME, callback);
		};
		this.onVolume = function(callback) {
			return _eventListener(jwplayer.api.events.JWPLAYER_MEDIA_VOLUME, callback);
		};
		// State events
		this.onBuffer = function(callback) {
			return _stateListener(jwplayer.api.events.state.BUFFERING, callback);
		};
		this.onPause = function(callback) {
			return _stateListener(jwplayer.api.events.state.PAUSED, callback);
		};
		this.onPlay = function(callback) {
			return _stateListener(jwplayer.api.events.state.PLAYING, callback);
		};
		this.onIdle = 
		// Instream events
		this.onInstreamClick = function(callback) {
			return _eventListener(jwplayer.api.events.JWPLAYER_INSTREAM_CLICK, callback);
		};
		this.onInstreamDestroyed = 
		
		this.play = function(state) {
			_player.jwInstreamPlay(state);
		};
		this.pause= function(state) {
			_player.jwInstreamPause(state);
		};
		this.seek = function(pos) {
			_player.jwInstreamSeek(pos);
		};
		this.destroy = function() {
			_player.jwInstreamDestroy();
		};
		this.getState = function() {
			return _player.jwInstreamGetState();
		}
		this.getDuration = function() {
			return _player.jwInstreamGetDuration();
		}
		this.getPosition = 

		_init();
		
		
	}
	
})(jwplayer);

/**
 * Embedder for the JW Player
 * @author Zach
 * @version 5.8
 */
(function(jwplayer) {
	var _utils = jwplayer.utils;
	
	jwplayer.embed = function(playerApi) {
		var _defaults = {
			width: 400,
			height: 300,
			components: {
				controlbar: {
					position: 'over'
				}
			}
		};
		var mediaConfig = _utils.mediaparser.parseMedia(playerApi.container);
		var _config = new jwplayer.embed.config(_utils.extend(_defaults, mediaConfig, playerApi.config), this);
		var _pluginloader = jwplayer.plugins.loadPlugins(playerApi.id, _config.plugins);
		
		
		
		
		
		_pluginloader.addEventListener(jwplayer.events.COMPLETE, _embedPlayer);
		_pluginloader.addEventListener(jwplayer.events.ERROR, _embedPlayer);
		_pluginloader.load();
		
		return playerApi;
	};
	
	
	
	noviceEmbed();
	
	
})(jwplayer);
/**
 * Configuration for the JW Player Embedder
 * @author Zach
 * @version 5.9
 */
(function(jwplayer) {
	var _utils = jwplayer.utils;
	
	
	
	var _aliases = {
		'players': 'modes',
		'autoplay': 'autostart'
	};
	
	
	
	
	
	
	
	var components = ["playlist", "dock", "controlbar", "logo", "display"];
	
	
	
	
	
	jwplayer.embed.deserialize = function(config){
		var pluginNames = getPluginNames(config);
		
		for (var pluginId in pluginNames) {
			addConfigParameter(config, "plugins", pluginNames[pluginId]);
		}
		
		for (var parameter in config) {
			if (parameter.indexOf(".") > -1) {
				var path = parameter.split(".");
				var prefix = path[0];
				var parameter = path[1];

				if (_utils.isInArray(components, prefix)) {
					addConfigParameter(config, "components", prefix, parameter);
				} else if (pluginNames[prefix]) {
					addConfigParameter(config, "plugins", pluginNames[prefix], parameter);
				}
			}
		}
		return config;
	}
	
	jwplayer.embed.config = function(config, embedder) {
		var parsedConfig = _utils.extend({}, config);
		
		var _tempPlaylist;
		
		if (_isPlaylist(parsedConfig.playlist)){
			_tempPlaylist = parsedConfig.playlist;
			delete parsedConfig.playlist;
		}
		
		parsedConfig = jwplayer.embed.deserialize(parsedConfig);
		
		parsedConfig.height = getSize(parsedConfig.height);
		parsedConfig.width = getSize(parsedConfig.width);
		
		if (typeof parsedConfig.plugins == "string") {
			var pluginArray = parsedConfig.plugins.split(",");
			if (typeof parsedConfig.plugins != "object") {
				parsedConfig.plugins = {};
			}
			for (var plugin = 0; plugin < pluginArray.length; plugin++) {
				var pluginName = _utils.getPluginName(pluginArray[plugin]);
				if (typeof parsedConfig[pluginName] == "object") {
					parsedConfig.plugins[pluginArray[plugin]] = parsedConfig[pluginName];
					delete parsedConfig[pluginName];
				} else {
					parsedConfig.plugins[pluginArray[plugin]] = {};
				}
			}
		}
						
		for (var component = 0; component < components.length; component++) {
			var comp = components[component];
			if (_utils.exists(parsedConfig[comp])) {
				if (typeof parsedConfig[comp] != "object") {
					if (!parsedConfig.components[comp]) {
						parsedConfig.components[comp] = {};
					}
					if (comp == "logo") {
						parsedConfig.components[comp].file = parsedConfig[comp];
					} else {
						parsedConfig.components[comp].position = parsedConfig[comp];
					}
					delete parsedConfig[comp];
				} else {
					if (!parsedConfig.components[comp]) {
						parsedConfig.components[comp] = {};
					}
					_utils.extend(parsedConfig.components[comp], parsedConfig[comp]);
					delete parsedConfig[comp];
				}
			} 
 
			if (typeof parsedConfig[comp+"size"] != "undefined") {
				if (!parsedConfig.components[comp]) {
					parsedConfig.components[comp] = {};
				}
				parsedConfig.components[comp].size = parsedConfig[comp+"size"];
				delete parsedConfig[comp+"size"];
			}
		}
		
		// Special handler for the display icons setting
		if (typeof parsedConfig.icons != "undefined"){
			if (!parsedConfig.components.display) {
					parsedConfig.components.display = {};
				}
			parsedConfig.components.display.icons = parsedConfig.icons;
			delete parsedConfig.icons;
		}
		
		for (var alias in _aliases)
		if (parsedConfig[alias]) {
			if (!parsedConfig[_aliases[alias]]) {
				parsedConfig[_aliases[alias]] = parsedConfig[alias];
			}
			delete parsedConfig[alias];
		}
		
		var _modes;
		if (parsedConfig.flashplayer && !parsedConfig.modes) {
			_modes = _playerDefaults(parsedConfig.flashplayer);
			delete parsedConfig.flashplayer;
		} else if (parsedConfig.modes) {
			if (typeof parsedConfig.modes == "string") {
				_modes = _playerDefaults(parsedConfig.modes);
			} else if (parsedConfig.modes instanceof Array) {
				_modes = parsedConfig.modes;
			} else if (typeof parsedConfig.modes == "object" && parsedConfig.modes.type) {
				_modes = [parsedConfig.modes];
			}
			delete parsedConfig.modes;
		} else {
			_modes = _playerDefaults();
		}
		parsedConfig.modes = _modes;
		
		if (_tempPlaylist) {
			parsedConfig.playlist = _tempPlaylist;
		}
		
		return parsedConfig;
	};
	
})(jwplayer);
/**
 * Download mode embedder for the JW Player
 * @author Zach
 * @version 5.5
 */
(function(jwplayer) {

	jwplayer.embed.download = function(_container, _player, _options, _loader, _api) {
		this.embed = function() {
			var params = jwplayer.utils.extend({}, _options);
			
			var _display = {};
			var _width = _options.width ? _options.width : 480;
			if (typeof _width != "number") {
				_width = parseInt(_width, 10);
			}
			var _height = _options.height ? _options.height : 320;
			if (typeof _height != "number") {
				_height = parseInt(_height, 10);
			}
			var _file, _image, _cursor;
			
			var item = {};
			if (_options.playlist && _options.playlist.length) {
				item.file = _options.playlist[0].file;
				_image = _options.playlist[0].image;
				item.levels = _options.playlist[0].levels;
			} else {
				item.file = _options.file;
				_image = _options.image;
				item.levels = _options.levels;
			}
			
			if (item.file) {
				_file = item.file;
			} else if (item.levels && item.levels.length) {
				_file = item.levels[0].file;
			}
			
			_cursor = _file ? "pointer" : "auto";
			
			var _elements = {
				display: {
					style: {
						cursor: _cursor,
						width: _width,
						height: _height,
						backgroundColor: "#000",
						position: "relative",
						textDecoration: "none",
						border: "none",
						display: "block"
					}
				},
				display_icon: {
					style: {
						cursor: _cursor,
						position: "absolute",
						display: _file ? "block" : "none",
						top: 0,
						left: 0,
						border: 0,
						margin: 0,
						padding: 0,
						zIndex: 3,
						width: 50,
						height: 50,
						backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"
					}
				},
				display_iconBackground: {
					style: {
						cursor: _cursor,
						position: "absolute",
						display: _file ? "block" : "none",
						top: ((_height - 50) / 2),
						left: ((_width - 50) / 2),
						border: 0,
						width: 50,
						height: 50,
						margin: 0,
						padding: 0,
						zIndex: 2,
						backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"
					}
				},
				display_image: {
					style: {
						width: _width,
						height: _height,
						display: _image ? "block" : "none",
						position: "absolute",
						cursor: _cursor,
						left: 0,
						top: 0,
						margin: 0,
						padding: 0,
						textDecoration: "none",
						zIndex: 1,
						border: "none"
					}
				}
			};
			
			var createElement = 
			
			_display.display = createElement("a", "display", _container.id);
			if (_file) {
				_display.display.setAttribute("href", jwplayer.utils.getAbsolutePath(_file));
			}
			_display.display_image = createElement("img", "display_image");
			_display.display_image.setAttribute("alt", "Click to download...");
			if (_image) {
				_display.display_image.setAttribute("src", jwplayer.utils.getAbsolutePath(_image));
			}
			//TODO: Add test to see if browser supports base64 images?
			if (true) {
				_display.display_icon = createElement("div", "display_icon");
				_display.display_iconBackground = createElement("div", "display_iconBackground");
				_display.display.appendChild(_display.display_image);
				_display.display_iconBackground.appendChild(_display.display_icon);
				_display.display.appendChild(_display.display_iconBackground);
			}
			_css = jwplayer.utils.css;
			
			_hide = function(element) {
				_css(element, {
					display: "none"
				});
			};
			
			
			
			
			
			_display.display_image.onerror = function(evt) {
				_hide(_display.display_image);
			};
			_display.display_image.onload = _onImageLoad;
			
			_container.parentNode.replaceChild(_display.display, _container);
			
			var logoConfig = (_options.plugins && _options.plugins.logo) ? _options.plugins.logo : {};
			
			_display.display.appendChild(new jwplayer.embed.logo(_options.components.logo, "download", _container.id));
			
			_api.container = document.getElementById(_api.id);
			_api.setPlayer(_display.display, "download");
		};
		
		
		
		this.supportsConfig = function() {
			if (_options) {
				var item = jwplayer.utils.getFirstPlaylistItemFromConfig(_options);
				
				if (typeof item.file == "undefined" && typeof item.levels == "undefined") {
					return true;
				} else if (item.file) {
					return canDownload(item.file, item.provider, item.playlistfile);
				} else if (item.levels && item.levels.length) {
					for (var i = 0; i < item.levels.length; i++) {
						if (item.levels[i].file && canDownload(item.levels[i].file, item.provider, item.playlistfile)) {
							return true;
						}
					}
				}
			} else {
				return true;
			}
		};
		
		/**
		 *
		 * @param {Object} file
		 * @param {Object} provider
		 * @param {Object} playlistfile
		 */
		
	};
	
})(jwplayer);
/**
 * Flash mode embedder the JW Player
 * @author Zach
 * @version 5.5
 */
(function(jwplayer) {

	jwplayer.embed.flash = function(_container, _player, _options, _loader, _api) {
		
		
		
		
		
		
		
		
		
		
		
		
		
		this.embed = function() {		
			// Make sure we're passing the correct ID into Flash for Linux API support
			_options.id = _api.id;
			
			var _wrapper;
			
			var params = jwplayer.utils.extend({}, _options);
			
			var width = params.width;	
			var height = params.height;
			
			// Hack for when adding / removing happens too quickly
			if (_container.id + "_wrapper" == _container.parentNode.id) {
				_wrapper = document.getElementById(_container.id + "_wrapper");
			} else {
				_wrapper = document.createElement("div");
				_wrapper.id = _container.id + "_wrapper";
				jwplayer.utils.wrap(_container, _wrapper);
				jwplayer.utils.css(_wrapper, {
					position: "relative",
					width: width,
					height: height
				});
			}
			
			
			var flashPlugins = _loader.setupPlugins(_api, params, _resizePlugin);
			
			if (flashPlugins.length > 0) {
				jwplayer.utils.extend(params, parsePlugins(flashPlugins.plugins));
			} else {
				delete params.plugins;
			}
			
			
			var toDelete = ["height", "width", "modes", "events"];
				
			for (var i = 0; i < toDelete.length; i++) {
				delete params[toDelete[i]];
			}
			
			var wmode = "opaque";
			if (params.wmode) {
				wmode = params.wmode;
			}
			
			parseConfigBlock(params, 'components');
			parseConfigBlock(params, 'providers');
			
			// Hack for the dock
			if (typeof params["dock.position"] != "undefined"){
				if (params["dock.position"].toString().toLowerCase() == "false") {
					params["dock"] = params["dock.position"];
					delete params["dock.position"];					
				}
			}
			
			// If we've set any cookies in HTML5 mode, bring them into flash
			var cookies = jwplayer.utils.getCookies();
			for (var cookie in cookies) {
				if (typeof(params[cookie])=="undefined") {
					params[cookie] = cookies[cookie];
				}
			}
			
			var bgcolor = "#000000";
			
			var flashPlayer;
			if (jwplayer.utils.isIE()) {
				var html = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' +
				'bgcolor="' +
				bgcolor +
				'" width="100%" height="100%" ' +
				'id="' +
				_container.id +
				'" name="' +
				_container.id +
				'" tabindex=0"' +
				'">';
				html += '<param name="movie" value="' + _player.src + '">';
				html += '<param name="allowfullscreen" value="true">';
				html += '<param name="allowscriptaccess" value="always">';
				html += '<param name="seamlesstabbing" value="true">';
				html += '<param name="wmode" value="' + wmode + '">';
				html += '<param name="flashvars" value="' +
				jsonToFlashvars(params) +
				'">';
				html += '</object>';

				jwplayer.utils.setOuterHTML(_container, html);
								
				flashPlayer = document.getElementById(_container.id);
			} else {
				var obj = document.createElement('object');
				obj.setAttribute('type', 'application/x-shockwave-flash');
				obj.setAttribute('data', _player.src);
				obj.setAttribute('width', "100%");
				obj.setAttribute('height', "100%");
				obj.setAttribute('bgcolor', '#000000');
				obj.setAttribute('id', _container.id);
				obj.setAttribute('name', _container.id);
				obj.setAttribute('tabindex', 0);
				appendAttribute(obj, 'allowfullscreen', 'true');
				appendAttribute(obj, 'allowscriptaccess', 'always');
				appendAttribute(obj, 'seamlesstabbing', 'true');
				appendAttribute(obj, 'wmode', wmode);
				appendAttribute(obj, 'flashvars', jsonToFlashvars(params));
				_container.parentNode.replaceChild(obj, _container);
				flashPlayer = obj;
			}
			
			_api.container = flashPlayer;
			_api.setPlayer(flashPlayer, "flash");
		}
		/**
		 * Detects whether Flash supports this configuration
		 */
		this.supportsConfig = function() {
			if (jwplayer.utils.hasFlash()) {
				if (_options) {
					var item = jwplayer.utils.getFirstPlaylistItemFromConfig(_options);
					if (typeof item.file == "undefined" && typeof item.levels == "undefined") {
						return true;
					} else if (item.file) {
						return flashCanPlay(item.file, item.provider);
					} else if (item.levels && item.levels.length) {
						for (var i = 0; i < item.levels.length; i++) {
							if (item.levels[i].file && flashCanPlay(item.levels[i].file, item.provider)) {
								return true;
							}
						}
					}
				} else {
					return true;
				}
			}
			return false;
		}
		
		/**
		 * Determines if a Flash can play a particular file, based on its extension
		 */
		flashCanPlay = 
	};
	
})(jwplayer);
/**
 * HTML5 mode embedder for the JW Player
 * @author Zach
 * @version 5.8
 */
(function(jwplayer) {

	jwplayer.embed.html5 = function(_container, _player, _options, _loader, _api) {
		
		
		this.embed = 
		
		/**
		 * Detects whether the html5 player supports this configuration.
		 *
		 * @return {Boolean}
		 */
		this.supportsConfig = function() {
			if (!!jwplayer.vid.canPlayType) {
				if (_options) {
					var item = jwplayer.utils.getFirstPlaylistItemFromConfig(_options);
					if (typeof item.file == "undefined" && typeof item.levels == "undefined") {
						return true;
					} else if (item.file) {
						return html5CanPlay(jwplayer.vid, item.file, item.provider, item.playlistfile);
					} else if (item.levels && item.levels.length) {
						for (var i = 0; i < item.levels.length; i++) {
							if (item.levels[i].file && html5CanPlay(jwplayer.vid, item.levels[i].file, item.provider, item.playlistfile)) {
								return true;
							}
						}
					}
				} else {
					return true;
				}
			}
			
			return false;
		}
		
		/**
		 * Determines if a video element can play a particular file, based on its extension
		 * @param {Object} video
		 * @param {Object} file
		 * @param {Object} provider
		 * @param {Object} playlistfile
		 * @return {Boolean}
		 */
		html5CanPlay = 
		
		/**
		 * 
		 * @param {DOMMediaElement} video
		 * @param {String} mimetype
		 * @return {Boolean}
		 */
		browserCanPlay = function(video, mimetype) {
			// OK to use HTML5 with no extension
			if (!mimetype) {
				return true;
			}
			
			if (video.canPlayType(mimetype)) {
				return true;
			} else if (mimetype == "audio/mp3" && navigator.userAgent.match(/safari/i)) {
				// Work around Mac Safari bug
				return video.canPlayType("audio/mpeg");
			} else {
				return false;
			}
			
		}
	};
	
})(jwplayer);
/**
 * Logo for the JW Player embedder
 * @author Zach
 * @version 5.5
 */
((jwplayer);
/**
 * Core component of the JW Player (initialization, API).
 *
 * @author zach
 * @version 5.4
 */
((jwplayer);

/**
 * JW Player view component
 *
 * @author zach
 * @version 5.8
 */
(function(jwplayer) {

	var _utils = jwplayer.utils;
	var _css = _utils.css;
	var _isIOS = _utils.isIOS();
	
	jwplayer.html5.view = function(api, container, model) {
		var _api = api;
		var _container = container;
		var _model = model;
		var _wrapper;
		var _width;
		var _height;
		var _box;
		var _zIndex;
		var _resizeInterval;
		var _media;
		var _falseFullscreen = false;
		var _fsBeforePlay = false;
		var _normalscreenWidth, _normalscreenHeight;
		var _instremArea, _instreamMode, _instreamVideo;
		
		
		
		

		

		

		
		
		this.setup = 
		
		
		
		
		function _resize(width, height) {
			if (_wrapper.style.display == "none") {
				return;
			}
			
			var plugins = [].concat(_model.plugins.order);
			plugins.reverse();
			_zIndex = plugins.length + 2;
			
			if (_fsBeforePlay && _useNativeFullscreen()) {
				try {
					// Check to see if we're in safari and the user has exited fullscreen (the model is not updated)
					if (_model.fullscreen && !_model.getMedia().getDisplayElement().webkitDisplayingFullscreen) {
						_model.fullscreen = false;
					}
				} catch(e) {}
			}
			
			if (!_model.fullscreen) {
				_width = width;
				_height = height;

				if (typeof width == "string" && width.indexOf("%") > 0) {
					_width = _utils.getElementWidth(_utils.parentNode(_wrapper)) * parseInt(width.replace("%"),"") / 100;
				} else {
					_width = width;
				}
				if (typeof height == "string" && height.indexOf("%") > 0) {
					_height = _utils.getElementHeight(_utils.parentNode(_wrapper)) * parseInt(height.replace("%"),"") / 100;
				} else {
					_height = height;
				}
				var boxStyle = {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					width: _width,
					height: _height,
					position: "absolute"
				}; 
				_css(_box, boxStyle);
				var displayDimensions = {}
				var display;
				try { display = _model.plugins.object['display'].getDisplayElement(); } catch(e) {}
				if(display) {
					displayDimensions.width = _utils.parseDimension(display.style.width);
					displayDimensions.height = _utils.parseDimension(display.style.height);
				}
				
				var instreamStyle = _utils.extend({}, boxStyle, displayDimensions, {
					zIndex: _instreamArea.style.zIndex, 
					display: _instreamArea.style.display
				});
				_css(_instreamArea, instreamStyle);
				_css(_wrapper, {
					height: _height,
					width: _width
				});

				
				var failed = _resizeComponents(_normalscreenComponentResizer, plugins);
				if (failed.length > 0) {
					_zIndex += failed.length;
					var plIndex = failed.indexOf("playlist"),
						cbIndex = failed.indexOf("controlbar");
					if (plIndex >= 0 && cbIndex >= 0) {
						// Reverse order of controlbar and playlist when both are set to "over"
						failed[plIndex] = failed.splice(cbIndex, 1, failed[plIndex])[0];
					}
					_resizeComponents(_overlayComponentResizer, failed, true);
				}
				_normalscreenWidth = _utils.getElementWidth(_box);
				_normalscreenHeight = _utils.getElementHeight(_box);
			} else if ( !_useNativeFullscreen() && !_isIOS) {
				_resizeComponents(_fullscreenComponentResizer, plugins, true);
			}
			_resizeMedia();
		}
		
		var bottomHeight;
		
		
		
		
		
		
		
		
		
		var _resizeMedia = this.resizeMedia = function() {
			_box.style.position = "absolute";
			var media = _model.getMedia() ? _model.getMedia().getDisplayElement() : _instreamVideo;
			if (!media) { return; }
			if (media && media.tagName.toLowerCase() == "video") {
				if (!media.videoWidth || !media.videoHeight) {
					media.style.width = _box.style.width;
					media.style.height = _box.style.height;
					return;
				}
				media.style.position = "absolute";
				_utils.fadeTo(media, 1, 0.25);
				if (media.parentNode) {
					media.parentNode.style.left = _box.style.left;
					media.parentNode.style.top = _box.style.top;
				}
				if (_model.fullscreen && _api.jwGetStretching() == jwplayer.utils.stretching.EXACTFIT && !_utils.isMobile()) {
					var tmp = document.createElement("div");
					_utils.stretch(jwplayer.utils.stretching.UNIFORM, tmp, 
							_utils.getElementWidth(_box), 
							_utils.getElementHeight(_box), 
							_normalscreenWidth, _normalscreenHeight);
					
					_utils.stretch(jwplayer.utils.stretching.EXACTFIT, media, 
							_utils.parseDimension(tmp.style.width), _utils.parseDimension(tmp.style.height),
							media.videoWidth ? media.videoWidth : 400, 
							media.videoHeight ? media.videoHeight : 300);
					
					_css(media, {
						left: tmp.style.left,
						top: tmp.style.top
					});
				} else if (!_isIOS) {
					_utils.stretch(_api.jwGetStretching(), media, 
							_utils.getElementWidth(_box), 
							_utils.getElementHeight(_box), 
						media.videoWidth ? media.videoWidth : 400, 
						media.videoHeight ? media.videoHeight : 300);
				}
				
			} else {
				var display = _model.plugins.object['display'].getDisplayElement();
				if(display) {
					_model.getMedia().resize(_utils.parseDimension(display.style.width), _utils.parseDimension(display.style.height));
				} else {
					_model.getMedia().resize(_utils.parseDimension(_box.style.width), _utils.parseDimension(_box.style.height));
				}
			}
		}
		
		var _getComponentPosition = this.getComponentPosition = 
		
		
		this.resize = _resize;
		
		var _beforeNative, _normalWidth, _normalHeight;
		
		var _fullscreen = this.fullscreen = function(state) {
			if (_isIOS) return;
			
			var videotag;
			try {
				videotag = _model.getMedia().getDisplayElement();
			} catch(e) {}

			if (state) {
				_normalWidth = _model.width;
				_normalHeight = _model.height;
			}
			
			var fsStyle = {
				position: "fixed",
				width: "100%",
				height: "100%",
				top: 0,
				left: 0,
				zIndex: 2147483000
			}, normalStyle = {
				position: "relative",
				height: _normalWidth,
				width: _normalHeight,
				zIndex: 0
			};
			
			if (_useNativeFullscreen() && videotag && videotag.webkitSupportsFullscreen) {
				if (state && !videotag.webkitDisplayingFullscreen) {
					try {
						_css(videotag, fsStyle);
						_utils.transform(videotag);
						_beforeNative = _box.style.display; 
						_box.style.display="none";
						videotag.webkitEnterFullscreen();
					} catch (err) {
					}
				} else if (!state) {
					_css(videotag, normalStyle);
					_resizeMedia();
					if (videotag.webkitDisplayingFullscreen) {
						try {
							videotag.webkitExitFullscreen();
						} catch (err) {
						}
					}
					_box.style.display=_beforeNative;
				}
				_falseFullscreen = false;
			} else {
				if (state) {
					document.onkeydown = _keyHandler;
					clearInterval(_resizeInterval);
					var rect = _utils.getBoundingClientRect(document.body);
					_model.width = Math.abs(rect.left) + Math.abs(rect.right);
					_model.height = window.innerHeight;
					_css(_wrapper, fsStyle);
					fsStyle.zIndex = 1;
					if (_model.getMedia() && _model.getMedia().getDisplayElement()) {
						_css(_model.getMedia().getDisplayElement(), fsStyle);
					}
					fsStyle.zIndex = 2;
					_css(_box, fsStyle);
					_falseFullscreen = true;
				} else {
					document.onkeydown = "";
					_model.width = _width;
					_model.height = _height;
					_css(_wrapper, normalStyle);
					_falseFullscreen = false;
				}
				_resize(_model.width, _model.height);
			}
		};
		
		
		
		
		
		this.setupInstream = 
		
		var _destroyInstream = this.destroyInstream = 
	};
	
	
	jwplayer.html5.view.positions = {
		TOP: "TOP",
		RIGHT: "RIGHT",
		BOTTOM: "BOTTOM",
		LEFT: "LEFT",
		OVER: "OVER",
		NONE: "NONE"
	};
})(jwplayer);
/**
 * jwplayer controlbar component of the JW Player.
 *
 * @author zach
 * @version 5.8
 */
(function(jwplayer) {
	/** Map with config for the jwplayerControlbar plugin. **/
	var _defaults = {
		backgroundcolor: "",
		margin: 10,
		font: "Arial,sans-serif",
		fontsize: 10,
		fontcolor: parseInt("000000", 16),
		fontstyle: "normal",
		fontweight: "bold",
		buttoncolor: parseInt("ffffff", 16),
		position: jwplayer.html5.view.positions.BOTTOM,
		idlehide: false,
		hideplaylistcontrols: false,
		forcenextprev: false,
		layout: {
			"left": {
				"position": "left",
				"elements": [{
					"name": "play",
					"type": "button"
				}, {
					"name": "divider",
					"type": "divider"
				}, {
					"name": "prev",
					"type": "button"
				}, {
					"name": "divider",
					"type": "divider"
				}, {
					"name": "next",
					"type": "button"
				}, {
					"name": "divider",
					"type": "divider"
				}, {
					"name": "elapsed",
					"type": "text"
				}]
			},
			"center": {
				"position": "center",
				"elements": [{
					"name": "time",
					"type": "slider"
				}]
			},
			"right": {
				"position": "right",
				"elements": [{
					"name": "duration",
					"type": "text"
				}, {
					"name": "blank",
					"type": "button"
				}, {
					"name": "divider",
					"type": "divider"
				}, {
					"name": "mute",
					"type": "button"
				}, {
					"name": "volume",
					"type": "slider"
				}, {
					"name": "divider",
					"type": "divider"
				}, {
					"name": "fullscreen",
					"type": "button"
				}]
			}
		}
	};
	
	_utils = jwplayer.utils;
	_css = _utils.css;
	
	_hide = function(element) {
		_css(element, {
			display: "none"
		});
	};
	
	_show = function(element) {
		_css(element, {
			display: "block"
		});
	};
	
	jwplayer.html5.controlbar = function(api, config) {
		window.controlbar = this;
		var _api = api;
		var _settings = _utils.extend({}, _defaults, _api.skin.getComponentSettings("controlbar"), config);
		if (_settings.position == jwplayer.html5.view.positions.NONE
			|| typeof jwplayer.html5.view.positions[_settings.position] == "undefined") {
			return;
		}
		if (_utils.mapLength(_api.skin.getComponentLayout("controlbar")) > 0) {
			_settings.layout = _api.skin.getComponentLayout("controlbar");
		}
		var _wrapper;
		var _dividerid;
		var _marginleft;
		var _marginright;
		var _scrubber = "none";
		var _mousedown;
		var _currentPosition;
		var _currentDuration;
		var _currentBuffer;
		var _width;
		var _height;
		var _elements = {};
		var _ready = false;
		var _positions = {};
		var _positionDigits = -1;
		var _bgElement;
		var _hiding = false;
		var _fadeTimeout;
		var _lastSent;
		var _eventReady = false;
		var _fullscreen = false;
		var _root;
		
		var _eventDispatcher = new jwplayer.html5.eventdispatcher();
		_utils.extend(this, _eventDispatcher);
		
		
		
		
		
		this.getDisplayElement = function() {
			return _wrapper;
		};
		
		this.resize = 
		
		this.show = 

		this.hide = 

		
		
		var _cancelled;
		
		
		
		function _fadeOut() {
			if (!_hiding) {
				_sendHide();
				if (_wrapper.style.opacity == 1) {
					_utils.cancelAnimation(_wrapper);
					_utils.fadeTo(_wrapper, 0, 0.1, 1, 0);
				}
			}
		}
		
		function _fadeIn() {
			if (!_hiding) {
				_sendShow();
				if (_wrapper.style.opacity == 0) {
					_utils.cancelAnimation(_wrapper);
					_utils.fadeTo(_wrapper, 1, 0.1, 0, 0);
				}
			}
		}
		
		

		var _sendShow = _sendVisibilityEvent(jwplayer.api.events.JWPLAYER_COMPONENT_SHOW);
		var _sendHide = _sendVisibilityEvent(jwplayer.api.events.JWPLAYER_COMPONENT_HIDE);
		
		

		
		
		/** Draw the jwplayerControlbar elements. **/
		
		
		/** Layout a group of elements**/
		
		
		
		
		/** Draw a single element into the jwplayerControlbar. **/
		
		
		function _addElement(element, alignment, offset, parent, position, width, skinElement) {
			if (_utils.exists(_api.skin.getSkinElement("controlbar", element)) || element.indexOf("Text") > 0 || element.indexOf("divider") === 0)  {
				var css = {
					height: "100%",
					position: position ? position : "relative",
					display: "block",
					'float': "left",
					styleFloat: "left",
					cssFloat: "left"
				};
				if ((element.indexOf("next") === 0 || element.indexOf("prev") === 0) && (_api.jwGetPlaylist().length < 2 || _settings.hideplaylistcontrols.toString()=="true")) {
					if (_settings.forcenextprev.toString() != "true") {
						offset = false;
						css.display = "none";
					}
				}
				var wid;
				if (element.indexOf("Text") > 0) {
					element.innerhtml = "00:00";
					css.font = _settings.fontsize + "px/" + (_getBack().height + 1) + "px " + _settings.font;
					css.color = _settings.fontcolor;
					css.textAlign = "center";
					css.fontWeight = _settings.fontweight;
					css.fontStyle = _settings.fontstyle;
					css.cursor = "default";
					if (skinElement) {
						css.background = "url(" + skinElement.src + ") no-repeat center";
						css.backgroundSize = "100% " + _getBack().height + "px";
					}
					css.padding = "0 5px";
//					wid = 14 + 3 * _settings.fontsize;
				} else if (element.indexOf("divider") === 0) {
					if (width) {
						if (!isNaN(parseInt(width))) {
							wid = parseInt(width);
						}
					} else if (skinElement) {
						var altDivider = _api.skin.getSkinElement("controlbar", skinElement);
						if (altDivider) {
							css.background = "url(" + altDivider.src + ") repeat-x center left";
							wid = altDivider.width;
						}
					} else {
						css.background = "url(" + _api.skin.getSkinElement("controlbar", "divider").src + ") repeat-x center left";
						wid = _api.skin.getSkinElement("controlbar", "divider").width;	
					}
				} else {
					css.background = "url(" + _api.skin.getSkinElement("controlbar", element).src + ") repeat-x center left";
					wid = _api.skin.getSkinElement("controlbar", element).width;
				}
				if (alignment == "left") {
					if (offset) {
						_marginleft += wid;
					}
				} else if (alignment == "right") {
					if (offset) {
						_marginright += wid;
					}
				}
				
				
				if (_utils.typeOf(parent) == "undefined") {
					parent = _elements.elements;
				}
				
				css.width = wid;
				
				if (_ready) {
					_css(_elements[element], css);
				} else {
					var newelement = _appendNewElement(element, parent, css);
					if (_utils.exists(_api.skin.getSkinElement("controlbar", element + "Over"))) {
						newelement.onmouseover = 
						newelement.onmouseout = 
					}
					if (element.indexOf("divider") == 0) {
						newelement.setAttribute("class", "divider");
					}
					// Required for some browsers to display sized elements.
					newelement.innerHTML = "&nbsp;";
				}
			}
		}
		
		
		
		

		

		/** Add interactivity to the jwplayerControlbar elements. **/
		
		
		
		/** Set a single button handler. **/
		
		
		/** Set the volume drag handler. **/
		function _addSliderListener(name) {
			if (_ready) {
				return;
			}
			var bar = _elements[name + "Slider"];
			_css(_elements.elements, {
				"cursor": "pointer"
			});
			_css(bar, {
				"cursor": "pointer"
			});
			bar.onmousedown = function(evt) {
				_scrubber = name;
			};
			bar.onmouseup = 
			bar.onmousemove = 
		}
		
		
		/** The slider has been moved up. **/
		function _sliderUp(msx) {
			_mousedown = false;
			var xps;
			if (_scrubber == "time") {
				xps = msx - _positions.timeSliderRail.left + window.pageXOffset;
				var pos = xps / _positions.timeSliderRail.width * _currentDuration;
				if (pos < 0) {
					pos = 0;
				} else if (pos > _currentDuration) {
					pos = _currentDuration - 3;
				}
				if (_api.jwGetState() == jwplayer.api.events.state.PAUSED || _api.jwGetState() == jwplayer.api.events.state.IDLE) {
					_api.jwPlay();
				}
				_api.jwSeek(pos);
			} else if (_scrubber == "volume") {
				xps = msx - _positions.volumeSliderRail.left - window.pageXOffset;
				var pct = Math.round(xps / _positions.volumeSliderRail.width * 100);
				if (pct < 10) {
					pct = 0;
				} else if (pct > 100) {
					pct = 100;
				}
				if (_api.jwGetMute()) {
					_api.jwSetMute(false);
				}
				_api.jwSetVolume(pct);
			}
			_scrubber = "none";
		}
		
		
		/** Update the buffer percentage. **/
		
		
		
		/** Update the mute state. **/
		
		
		
		/** Update the playback state. **/
		
		
		
		/** Handles event completion **/
		
		
		
		/** Update the playback time. **/
		
		
		
		function cleanupDividers() {
			var groups =  _elements.elements.childNodes;
			var lastElement, lastVisibleElement;
			
			for (var i = 0; i < groups.length; i++) {
				var childNodes = groups[i].childNodes;
				
				for (var childNode in childNodes) {
					if (isNaN(parseInt(childNode, 10))) {
						continue;
					}
					if (childNodes[childNode].id.indexOf(_wrapper.id + "_divider") === 0 
							&& lastVisibleElement 
							&& lastVisibleElement.id.indexOf(_wrapper.id + "_divider") === 0 
							&& childNodes[childNode].style.backgroundImage == lastVisibleElement.style.backgroundImage) {
						childNodes[childNode].style.display = "none";
					} else if (childNodes[childNode].id.indexOf(_wrapper.id + "_divider") === 0 && lastElement && lastElement.style.display != "none") {
						childNodes[childNode].style.display = "block";
					}
					if (childNodes[childNode].style.display != "none") {
						lastVisibleElement = childNodes[childNode];
					}
					lastElement = childNodes[childNode];
				}
			}
		}
		
		
		
		/** Resize the jwplayerControlbar. **/
		
		
		
		/** Update the volume level. **/
		
		
		
		
		
		
		_setup();
		return this;
	};
})(jwplayer);
/**
 * JW Player controller component
 *
 * @author zach
 * @version 5.9
 */
(function(jwplayer) {

	var _mediainfovariables = ["width", "height", "state", "playlist", "item", "position", "buffer", "duration", "volume", "mute", "fullscreen"];
	var _utils = jwplayer.utils;
	
	jwplayer.html5.controller = function(api, container, model, view) {
		var _api = api,
			_model = model,
			_view = view,
			_container = container,
			_itemUpdated = true,
			_oldstart = -1,
			_preplay = false,
			_interruptPlay = false,
			_actionOnAttach,
			_queuedEvents = [],
			_ready = false;
		
		
		var _debug = (_utils.exists(_model.config.debug) && (_model.config.debug.toString().toLowerCase() == 'console')),
			_eventDispatcher = new jwplayer.html5.eventdispatcher(_container.id, _debug);
			
		_utils.extend(this, _eventDispatcher);
		
		
		
		
		
		_model.addGlobalListener(forward);
		
		/** Set event handlers **/
		_model.addEventListener(jwplayer.api.events.JWPLAYER_MEDIA_BUFFER_FULL, ;
		_model.addEventListener(jwplayer.api.events.JWPLAYER_MEDIA_TIME, ;
		_model.addEventListener(jwplayer.api.events.JWPLAYER_MEDIA_COMPLETE, ;
		_model.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, _playlistLoadHandler);
		_model.addEventListener(jwplayer.api.events.JWPLAYER_FULLSCREEN, _fullscreenHandler);
		
		function _play() {
			try {
				_actionOnAttach = _play;
				if (!_preplay) {
					_preplay = true;
					_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_BEFOREPLAY);
					_preplay = false;
					if (_interruptPlay) {
						_interruptPlay = false;
						_actionOnAttach = null;
						return;
					}
				}
				
				_loadItem(_model.item);
				if (_model.playlist[_model.item].levels[0].file.length > 0) {
					if (_itemUpdated || _model.state == jwplayer.api.events.state.IDLE) {
						_model.getMedia().load(_model.playlist[_model.item]);
						_itemUpdated = false;
					} else if (_model.state == jwplayer.api.events.state.PAUSED) {
						_model.getMedia().play();
					}
				}
				return true;
			} catch (err) {
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_ERROR, err);
				_actionOnAttach = null;
			}
			return false;
		}
		
		
		/** Switch the pause state of the player. **/
		
		
		
		/** Seek to a position in the video. **/
		
		
		
		/** Stop playback and loading of the video. **/
		
		
		/** Stop playback and loading of the video. **/
		function _next() {
			try {
				if (_model.playlist[_model.item].levels[0].file.length > 0) {
					if (_model.config.shuffle) {
						_loadItem(_getShuffleItem());
					} else if (_model.item + 1 == _model.playlist.length) {
						_loadItem(0);
					} else {
						_loadItem(_model.item + 1);
					}
				}
				if (_model.state != jwplayer.api.events.state.IDLE) {
					var oldstate = _model.state;
					_model.state = jwplayer.api.events.state.IDLE;
					_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYER_STATE, {
						oldstate: oldstate,
						newstate: jwplayer.api.events.state.IDLE
					});
				}
				_play();
				return true;
			} catch (err) {
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_ERROR, err);
			}
			return false;
		}
		
		/** Stop playback and loading of the video. **/
		function _prev() {
			try {
				if (_model.playlist[_model.item].levels[0].file.length > 0) {
					if (_model.config.shuffle) {
						_loadItem(_getShuffleItem());
					} else if (_model.item === 0) {
						_loadItem(_model.playlist.length - 1);
					} else {
						_loadItem(_model.item - 1);
					}
				}
				if (_model.state != jwplayer.api.events.state.IDLE) {
					var oldstate = _model.state;
					_model.state = jwplayer.api.events.state.IDLE;
					_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYER_STATE, {
						oldstate: oldstate,
						newstate: jwplayer.api.events.state.IDLE
					});
				}
				_play();
				return true;
			} catch (err) {
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_ERROR, err);
			}
			return false;
		}
		
		
		
		/** Stop playback and loading of the video. **/
		
		
		function _loadItem(item) {
			if (!_model.playlist[item]) {
				return;
			}
			_model.setActiveMediaProvider(_model.playlist[item]);
			if (_model.item != item) {
				_model.item = item;
				_itemUpdated = true;
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM, {
					"index": item
				});
			}
		}
		
		/** Get / set the video's volume level. **/
		
		
		
		/** Get / set the mute state of the player. **/
		
		
		
		/** Resizes the video **/
		function _resize(width, height) {
			try {
				_model.width = width;
				_model.height = height;
				_view.resize(width, height);
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_RESIZE, {
					"width": _model.width,
					"height": _model.height
				});
				return true;
			} catch (err) {
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_ERROR, err);
			}
			return false;
		}
		
		
		/** Jumping the player to/from fullscreen. **/
		function _setFullscreen(state, forwardEvent) {
			try {
				if (typeof state == "undefined") {
					state = !_model.fullscreen;
				} 
				if (typeof forwardEvent == "undefined") {
					forwardEvent = true;
				} 
				
				if (state != _model.fullscreen) {
					_model.fullscreen = (state.toString().toLowerCase() == "true");	
					_view.fullscreen(_model.fullscreen);
					if (forwardEvent) {
						_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_FULLSCREEN, {
							fullscreen: _model.fullscreen
						});
					}
					_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_RESIZE, {
						"width": _model.width,
						"height": _model.height
					});
				}
				return true;
			} catch (err) {
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_ERROR, err);
			}
			return false;
		}
		
		
		/** Loads a new video **/
		
		
		
		
		
		
		
		

		

		jwplayer.html5.controller.repeatoptions = {
			LIST: "LIST",
			ALWAYS: "ALWAYS",
			SINGLE: "SINGLE",
			NONE: "NONE"
		};
		
		
		
		var _queuedCalls = [];
		
		

		
		
		this.play = _waitForReady(_play);
		this.pause = _waitForReady(_pause);
		this.seek = _waitForReady(_seek);
		this.stop = _waitForReady(_stop);
		this.next = _waitForReady(_next);
		this.prev = _waitForReady(_prev);
		this.item = _waitForReady(_item);
		this.setVolume = _waitForReady(_setVolume);
		this.setMute = _waitForReady(_setMute);
		this.resize = _waitForReady(_resize);
		this.setFullscreen = _waitForReady(_setFullscreen);
		this.load = _waitForReady(_load);
		this.playerReady = _playerReady;
		this.detachMedia = _detachMedia; 
		this.attachMedia = _attachMedia;
		this.beforePlay = function() { 
			return _preplay; 
		}
		this.destroy = 
	};
})(jwplayer);
/**
 * JW Player Default skin
 *
 * @author zach
 * @version 5.8
 */
((jwplayer);
/**
 * JW Player display component
 *
 * @author zach
 * @version 5.8
 */
(function(jwplayer) {
	_utils = jwplayer.utils;
	_css = _utils.css;
	
	_hide = function(element) {
		_css(element, {
			display: "none"
		});
	};
	
	_show = function(element) {
		_css(element, {
			display: "block"
		});
	};
	
	jwplayer.html5.display = function(api, config) {
		var _defaults = {
			icons: true,
			showmute: false
		}
		var _config = _utils.extend({}, _defaults, config);
		var _api = api;
		var _display = {};
		var _width;
		var _height;
		var _imageWidth;
		var _imageHeight;
		var _degreesRotated;
		var _rotationInterval;
		var _error;
		var _bufferRotation = !_utils.exists(_api.skin.getComponentSettings("display").bufferrotation) ? 15 : parseInt(_api.skin.getComponentSettings("display").bufferrotation, 10);
		var _bufferInterval = !_utils.exists(_api.skin.getComponentSettings("display").bufferinterval) ? 100 : parseInt(_api.skin.getComponentSettings("display").bufferinterval, 10);
		var _updateTimeout = -1;
		var _lastState = jwplayer.api.events.state.IDLE;
		var _showing = true;
		var _lastSent;
		var _imageLoading = false, _imageShowing = true;
		var _currentImage = "";
		var _hiding = false;
		var _ready = false;
		var _alternateClickHandler;
		var _normalscreenWidth, _normalscreenHeight;
		
		var _eventDispatcher = new jwplayer.html5.eventdispatcher();
		_utils.extend(this, _eventDispatcher);
		
		var _elements = {
			display: {
				style: {
					cursor: "pointer",
					top: 0,
					left: 0,
					overflow: "hidden"
				},
				click: _displayClickHandler
			},
			display_icon: {
				style: {
					cursor: "pointer",
					position: "absolute",
					top: ((_api.skin.getSkinElement("display", "background").height - _api.skin.getSkinElement("display", "playIcon").height) / 2),
					left: ((_api.skin.getSkinElement("display", "background").width - _api.skin.getSkinElement("display", "playIcon").width) / 2),
					border: 0,
					margin: 0,
					padding: 0,
					zIndex: 3,
					display: "none"
				}
			},
			display_iconBackground: {
				style: {
					cursor: "pointer",
					position: "absolute",
					top: ((_height - _api.skin.getSkinElement("display", "background").height) / 2),
					left: ((_width - _api.skin.getSkinElement("display", "background").width) / 2),
					border: 0,
					backgroundImage: (["url(", _api.skin.getSkinElement("display", "background").src, ")"]).join(""),
					width: _api.skin.getSkinElement("display", "background").width,
					height: _api.skin.getSkinElement("display", "background").height,
					margin: 0,
					padding: 0,
					zIndex: 2,
					display: "none"
				}
			},
			display_image: {
				style: {
					display: "none",
					width: _width,
					height: _height,
					position: "absolute",
					cursor: "pointer",
					left: 0,
					top: 0,
					margin: 0,
					padding: 0,
					textDecoration: "none",
					zIndex: 1
				}
			},
			display_text: {
				style: {
					zIndex: 4,
					position: "relative",
					opacity: 0.8,
					backgroundColor: parseInt("000000", 16),
					color: parseInt("ffffff", 16),
					textAlign: "center",
					fontFamily: "Arial,sans-serif",
					padding: "0 5px",
					fontSize: 14
				}
			}
		};
		_api.jwAddEventListener(jwplayer.api.events.JWPLAYER_PLAYER_STATE, _stateHandler);
		_api.jwAddEventListener(jwplayer.api.events.JWPLAYER_MEDIA_MUTE, _stateHandler);
		_api.jwAddEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, _playlistLoadHandler);
		_api.jwAddEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM, _stateHandler);
		_api.jwAddEventListener(jwplayer.api.events.JWPLAYER_ERROR, _errorHandler);
		_setupDisplay();
		
		
		
		
		this.getDisplayElement = function() {
			return _display.display;
		};
		
		this.resize = 
		
		this.show = 

		this.hide = 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

		

		
		
		
		
		
		
		
		
		
		
		
		
		
		function _showImage() {
			if (_api.jwGetPlaylist()[_api.jwGetPlaylistIndex()]) {
				var newsrc = _api.jwGetPlaylist()[_api.jwGetPlaylistIndex()].image;
				if (newsrc) {
					if (newsrc != _currentImage) {
						_currentImage = newsrc;
						_imageLoading = true;
						_display.display_image.src = _utils.getAbsolutePath(newsrc);
					} else if (!(_imageLoading || _imageShowing)) {
						_imageShowing = true;
						_display.display_image.style.opacity = 0;
						_display.display_image.style.display = "block";
						_utils.fadeTo(_display.display_image, 1, 0.1);
					}
					
				}
			}
		}
		
		
		function _sendVisibilityEvent(eventType) {
			return function() {
				if (!_ready) return;
					
				if (!_hiding && _lastSent != eventType) {
					_lastSent = eventType;
					_eventDispatcher.sendEvent(eventType, {
						component: "display",
						boundingRect: _utils.getDimensions(_display.display_iconBackground)
					});
				}
			}
		}

		var _sendShow = _sendVisibilityEvent(jwplayer.api.events.JWPLAYER_COMPONENT_SHOW);
		var _sendHide = _sendVisibilityEvent(jwplayer.api.events.JWPLAYER_COMPONENT_HIDE);

		/** NOT SUPPORTED : Using this for now to hack around instream API **/
		this.setAlternateClickHandler = 
		this.revertAlternateClickHandler = 
		
		return this;
	};
	
	
	
})(jwplayer);
/**
 * JW Player dock component
 */
(function(jwplayer) {
	var _utils = jwplayer.utils;
	var _css = _utils.css; 
	
	jwplayer.html5.dock = function(api, config) {
		
		
		var _config = _utils.extend({}, _defaults(), config);
		
		if (_config.align == "FALSE") {
			return;
		}
		var _buttons = {};
		var _buttonArray = [];
		var _width;
		var _height;
		var _hiding = false;
		var _fullscreen = false;
		var _dimensions = { x: 0, y: 0, width: 0, height: 0 };
		var _lastSent;
		var _root;
		var _fadeTimeout;
		
		var _eventDispatcher = new jwplayer.html5.eventdispatcher();
		_utils.extend(this, _eventDispatcher);
		
		var _dock = document.createElement("div");
		_dock.id = api.id + "_jwplayer_dock";
		_dock.style.opacity = 1;
		
		_setMouseListeners();
		
		api.jwAddEventListener(jwplayer.api.events.JWPLAYER_PLAYER_STATE, _stateHandler);
		
		this.getDisplayElement = function() {
			return _dock;
		};
		
		this.setButton = function(id, handler, outGraphic, overGraphic) {
			if (!handler && _buttons[id]) {
				_utils.arrays.remove(_buttonArray, id);
				_dock.removeChild(_buttons[id].div);
				delete _buttons[id];
			} else if (handler) {
				if (!_buttons[id]) {
					_buttons[id] = {
					}
				}
				_buttons[id].handler = handler;
				_buttons[id].outGraphic = outGraphic;
				_buttons[id].overGraphic = overGraphic;
				if (!_buttons[id].div) {
					_buttonArray.push(id);
					_buttons[id].div = document.createElement("div");
					_buttons[id].div.style.position = "absolute";
					_dock.appendChild(_buttons[id].div);
					
					_buttons[id].div.appendChild(document.createElement("div"));
					_buttons[id].div.childNodes[0].style.position = "relative";
					_buttons[id].div.childNodes[0].style.width = "100%";
					_buttons[id].div.childNodes[0].style.height = "100%";
					_buttons[id].div.childNodes[0].style.zIndex = 10;
					_buttons[id].div.childNodes[0].style.cursor = "pointer";
					
					_buttons[id].div.appendChild(document.createElement("img"));
					_buttons[id].div.childNodes[1].style.position = "absolute";
					_buttons[id].div.childNodes[1].style.left = 0;
					_buttons[id].div.childNodes[1].style.top = 0;
					if (api.skin.getSkinElement("dock", "button")) {
						_buttons[id].div.childNodes[1].src = api.skin.getSkinElement("dock", "button").src;
					}
					_buttons[id].div.childNodes[1].style.zIndex = 9;
					_buttons[id].div.childNodes[1].style.cursor = "pointer";
					
					_buttons[id].div.onmouseover = function() {
						if (_buttons[id].overGraphic) {
							_buttons[id].div.childNodes[0].style.background = _bgStyle(_buttons[id].overGraphic);
						}
						if (api.skin.getSkinElement("dock", "buttonOver")) {
							_buttons[id].div.childNodes[1].src = api.skin.getSkinElement("dock", "buttonOver").src;
						}
					}
					
					_buttons[id].div.onmouseout = 
					// Make sure that this gets loaded and is cached so that rollovers are smooth
					if (api.skin.getSkinElement("dock", "button")) {
						_buttons[id].div.childNodes[1].src = api.skin.getSkinElement("dock", "button").src;
					}
				}


				if (_buttons[id].outGraphic) {
					_buttons[id].div.childNodes[0].style.background = _bgStyle(_buttons[id].outGraphic);
				} else if (_buttons[id].overGraphic) {
					_buttons[id].div.childNodes[0].style.background = _bgStyle(_buttons[id].overGraphic);
				}

				if (handler) {
					_buttons[id].div.onclick = 
				}
			}
			
			_resize(_width, _height);
		}
		
		function _bgStyle(url) {
			return "url("+ url + ") no-repeat center center" 
		}
		
		function _onImageLoad(evt) {
			
		}
		
		function _resize(width, height) {
			_setMouseListeners();
			
			if (_buttonArray.length > 0) {
				var margin = 10;
				var usedHeight = margin;
				var direction = -1;
				var buttonHeight = api.skin.getSkinElement("dock", "button").height;
				var buttonWidth = api.skin.getSkinElement("dock", "button").width;
				var xStart = width - buttonWidth - margin;
				var topLeft, bottomRight;
				if (_config.align == jwplayer.html5.view.positions.LEFT) {
					direction = 1;
					xStart = margin;
				}
				for (var i = 0; i < _buttonArray.length; i++) {
					var row = Math.floor(usedHeight / height);
					if ((usedHeight + buttonHeight + margin) > ((row + 1) * height)) {
						usedHeight = ((row + 1) * height) + margin;
						row = Math.floor(usedHeight / height);
					}
					var button = _buttons[_buttonArray[i]].div;
					button.style.top = (usedHeight % height) + "px";
					button.style.left = (xStart + (api.skin.getSkinElement("dock", "button").width + margin) * row * direction) + "px";
					var buttonDims = {
						x: _utils.parseDimension(button.style.left),
						y: _utils.parseDimension(button.style.top),
						width: buttonWidth,
						height: buttonHeight
					}
					if (!topLeft || (buttonDims.x <= topLeft.x && buttonDims.y <= topLeft.y))
						topLeft = buttonDims;
					if (!bottomRight || (buttonDims.x >= bottomRight.x && buttonDims.y >= bottomRight.y))
						bottomRight = buttonDims;
					
					button.style.width = buttonWidth + "px";
					button.style.height = buttonHeight + "px";
					
					usedHeight += api.skin.getSkinElement("dock", "button").height + margin;
				}
				_dimensions = {
					x: topLeft.x,
					y:  topLeft.y,
					width: bottomRight.x - topLeft.x + bottomRight.width,
					height: topLeft.y - bottomRight.y + bottomRight.height
				};
			}
			
			if (_fullscreen != api.jwGetFullscreen() || _width != width || _height != height) {
				_width = width;
				_height = height;
				_fullscreen = api.jwGetFullscreen();
				_lastSent = undefined;
				// Delay to allow resize event handlers to complete
				setTimeout(_sendShow, 1);
			}
			
		}
		
		
		
		
		
		


		var _sendShow = _sendVisibilityEvent(jwplayer.api.events.JWPLAYER_COMPONENT_SHOW);
		var _sendHide = _sendVisibilityEvent(jwplayer.api.events.JWPLAYER_COMPONENT_HIDE);

		this.resize = _resize;
		
		var _show = 

		var _hide = 
		
		function _fadeOut() {
			if (!_hiding) {
				_sendHide();
				if (_dock.style.opacity == 1) {
					_utils.cancelAnimation(_dock);
					_utils.fadeTo(_dock, 0, 0.1, 1, 0);
				}
			}
		}
		
		
		
		
				
		this.hide = _hide;
		this.show = _show;
		
		return this;
	}
})(jwplayer);
/**
 * Event dispatcher for the JW Player for HTML5
 *
 * @author zach
 * @version 5.5
 */
((jwplayer);
/** 
 * API to control instream playback without interrupting currently playing video
 *
 * @author pablo
 * @version 5.9
 */
(function(jwplayer) {
	var _utils = jwplayer.utils;
	
	jwplayer.html5.instream = function(api, model, view, controller) {
		var _defaultOptions = {
			controlbarseekable:"always",
			controlbarpausable:true,
			controlbarstoppable:true,
			playlistclickable:true
		};
		
		var _item,
			_options,
			_api=api, _model=model, _view=view, _controller=controller,
			_video, _oldsrc, _oldsources, _oldpos, _oldstate, _olditem,
			_provider, _cbar, _disp, _instreamMode = false,
			_dispatcher, _instreamContainer,
			_self = this;


		/*****************************************
		 *****  Public instream API methods  *****
		 *****************************************/

		/** Load an instream item and initialize playback **/
		this.load = 
			
		/** Stop the instream playback and revert the main player back to its original state **/
		this.jwInstreamDestroy = function(complete) {
			if (!_instreamMode) return;
			// We're not in instream mode anymore.
			_instreamMode = false;
			if (_oldstate != jwplayer.api.events.state.IDLE) {
				// Load the original item into our provider, which sets up the regular player's video tag
				_provider.load(_olditem, false);
				// We don't want the position interval to be running anymore
				_provider.stop(false);
			} else {
				_provider.stop(true);
			}
			// We don't want the instream provider to be attached to the video tag anymore
			_provider.detachMedia();
			// Return the view to its normal state
			_view.destroyInstream();
			// If we added the controlbar anywhere, let's get rid of it
			if (_cbar) try { _cbar.getDisplayElement().parentNode.removeChild(_cbar.getDisplayElement()); } catch(e) {}
			// Let listeners know the instream player has been destroyed, and why
			_sendEvent(jwplayer.api.events.JWPLAYER_INSTREAM_DESTROYED, {reason:(complete ? "complete":"destroyed")}, true);
			// Re-attach the controller
			_controller.attachMedia();
			if (_oldstate == jwplayer.api.events.state.BUFFERING || _oldstate == jwplayer.api.events.state.PLAYING) {
				// Model was already correct; just resume playback
				_video.play();
				if (_model.playlist[_model.item] == _olditem) {
					// We need to seek using the player's real provider, since the seek may have to be delayed
					_model.getMedia().seek(_oldpos);
				}
			}
			return;
		};
		
		/** Forward any calls to add and remove events directly to our event dispatcher **/
		this.jwInstreamAddEventListener = function(type, listener) {
			_dispatcher.addEventListener(type, listener);
		} 
		this.jwInstreamRemoveEventListener = function(type, listener) {
			_dispatcher.removeEventListener(type, listener);
		}

		/** Start instream playback **/
		this.jwInstreamPlay = function() {
			if (!_instreamMode) return;
			_provider.play(true);
		}

		/** Pause instream playback **/
		this.jwInstreamPause = function() {
			if (!_instreamMode) return;
			_provider.pause(true);
		}
		
		/** Seek to a point in instream media **/
		this.jwInstreamSeek = 
		
		/** Get the current instream state **/
		this.jwInstreamGetState = function() {
			if (!_instreamMode) return undefined;
			return _fakemodel.state;
		}

		/** Get the current instream playback position **/
		this.jwInstreamGetPosition = function() {
			if (!_instreamMode) return undefined;
			return _fakemodel.position;
		}

		/** Get the current instream media duration **/
		this.jwInstreamGetDuration = function() {
			if (!_instreamMode) return undefined;
			return _fakemodel.duration;
		}
		
		this.playlistClickable = 
		

		/*****************************
		 ****** Private methods ****** 
		 *****************************/

		

		
		
		
		
		/** Forward provider events to listeners **/		
		
		
		/** Handle the JWPLAYER_MEDIA_BUFFER_FULL event **/		
		

		/** Handle the JWPLAYER_MEDIA_COMPLETE event **/		
		

		/** Handle the JWPLAYER_MEDIA_META event **/		
		
		
		
		
		// Resize handler; resize the components.
		
		
		
		/**************************************
		 *****  Duplicate main html5 api  *****
		 **************************************/
		
		this.jwPlay = function(state) {
			if (_options.controlbarpausable.toString().toLowerCase()=="true") {
				this.jwInstreamPlay();
			}
		};
		
		this.jwPause = 

		this.jwStop = 

		this.jwSeek = 
		
		this.jwGetPosition = function() {};
		this.jwGetDuration = function() {};
		this.jwGetWidth = _api.jwGetWidth;
		this.jwGetHeight = _api.jwGetHeight;
		this.jwGetFullscreen = _api.jwGetFullscreen;
		this.jwSetFullscreen = _api.jwSetFullscreen;
		this.jwGetVolume = function() { return _model.volume; };
		this.jwSetVolume = function(vol) {
			_provider.volume(vol);
			_api.jwSetVolume(vol);
		}
		this.jwGetMute = function() { return _model.mute; };
		this.jwSetMute = 
		this.jwGetState = function() { return _fakemodel.state; };
		this.jwGetPlaylist = 
		this.jwGetPlaylistIndex = function() { return 0; };
		this.jwGetStretching = 
		this.jwAddEventListener = function(type, handler) { _dispatcher.addEventListener(type, handler); };
		this.jwRemoveEventListener = function(type, handler) { _dispatcher.removeEventListener(type, handler); };

		this.skin = _api.skin;
		this.id = _api.id + "_instream";

		_init();
		return this;
	};
})(jwplayer);

/**
 * JW Player logo component
 *
 * @author zach
 * @version 5.8
 */
(function(jwplayer) {

	var _defaults = {
		prefix: "http://l.longtailvideo.com/html5/",
		file: "logo.png",
		link: "http://www.longtailvideo.com/players/jw-flv-player/",
		linktarget: "_top",
		margin: 8,
		out: 0.5,
		over: 1,
		timeout: 5,
		hide: true,
		position: "bottom-left"
	};
	
	_css = jwplayer.utils.css;
	
	jwplayer.html5.logo = function(api, logoConfig) {
		var _api = api;
		var _timeout;
		var _settings;
		var _logo;
		var _showing = false;
		
		_setup();
		
		
		
		
		
		
		
		if (!_settings.file) {
			return;
		}
		
		
		this.resize = function(width, height) {
		};
		
		this.getDisplayElement = function() {
			return _logo;
		};
		
		
		
		
		function _clickHandler(evt) {
			if (typeof evt != "undefined") {
				evt.stopPropagation();
			}
			
			if (!_showing)
				return;
			
			_api.jwPause();
			_api.jwSetFullscreen(false);
			if (_settings.link) {
				window.open(_settings.link, _settings.linktarget);
			}
			return;
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		return this;
	};
	
})(jwplayer);
/**
 * JW Player Video Media component
 *
 * @author zach,pablo
 * 
 * @version 5.8
 */
(function(jwplayer) {

	var _states = {
		"ended": jwplayer.api.events.state.IDLE,
		"playing": jwplayer.api.events.state.PLAYING,
		"pause": jwplayer.api.events.state.PAUSED,
		"buffering": jwplayer.api.events.state.BUFFERING
	};
	
	var _utils = jwplayer.utils;
	var _isMobile = _utils.isMobile();
	var _previousWidth, _previousHeight;
	
	var _allvideos = {};
	
	
	jwplayer.html5.mediavideo = function(model, container) {
		var _events = {
			'abort': _generalHandler,
			'canplay': _stateHandler,
			'canplaythrough': _stateHandler,
			'durationchange': _metaHandler,
			'emptied': _generalHandler,
			'ended': _stateHandler,
			'error': _errorHandler,
			'loadeddata': _metaHandler,
			'loadedmetadata': _metaHandler,
			'loadstart': _stateHandler,
			'pause': _stateHandler,
			'play': _generalHandler,
			'playing': _stateHandler,
			'progress': _progressHandler,
			'ratechange': _generalHandler,
			'seeked': _stateHandler,
			'seeking': _stateHandler,
			'stalled': _stateHandler,
			'suspend': _stateHandler,
			'timeupdate': _positionHandler,
			'volumechange': _volumeHandler,
			'waiting': _stateHandler,
			'canshowcurrentframe': _generalHandler,
			'dataunavailable': _generalHandler,
			'empty': _generalHandler,
			'load': _loadHandler,
			'loadedfirstframe': _generalHandler,
			'webkitfullscreenchange': _fullscreenHandler
		};
		var _handlers = {};
		var _eventDispatcher = new jwplayer.html5.eventdispatcher();
		_utils.extend(this, _eventDispatcher);
		var _model = model,
			_container = container,
			_video, 
			_state, 
			_start,
			_currentItem,
			_interval,
			_delayedSeek, 
			_emptied = false,
			_attached = false,
			_userDuration = false,
			_bufferingComplete, _bufferFull,
			_sourceError;
			
		_init();
		
		
		/************************************
		 *           PUBLIC METHODS         * 
		 ************************************/
		
		/** 
		 * Start loading the video and playing
		 */
		this.load = 
		
		/**
		 * Play the video if paused
		 */
		this.play = function() {
			if (!_attached) return;
			
			_startInterval();
			if (_bufferFull) {
				_setState(jwplayer.api.events.state.PLAYING);
			} else {
				_video.load();
				_setState(jwplayer.api.events.state.BUFFERING);
			}
			_video.play();
		}
		
		/**
		 * Pause the video
		 */
		this.pause = function() {
			if (!_attached) return;
			_video.pause();
			_setState(jwplayer.api.events.state.PAUSED);
		}
		
		/**
		 * Instruct the video to seek to a position
		 * @param position The requested position, in seconds
		 */
		this.seek = function(position) {
			if (!_attached) return;
			if (!_start && _video.readyState > 0) {
				if (!(_model.duration <= 0 || isNaN(_model.duration)) &&
						!(_model.position <= 0 || isNaN(_model.position))) {
						_video.currentTime = position;
						_video.play();
				}
			} else {
				_delayedSeek = position;
			}
		}
		
		/**
		 * Stop the playing video and unload it
		 */
		var _stop = this.stop = function(clear) {
			if (!_attached) return;
			
			if (!_utils.exists(clear)) {
				clear = true;
			}
			_clearInterval();

			if (clear) {
				_bufferFull = false;
				var agent = navigator.userAgent;
				
				if(_video.webkitSupportsFullscreen) {
					try {
						_video.webkitExitFullscreen();
					} catch(err) {}
				}
				_video.style.opacity = 0;
				_hideControls();
				
				/* Some browsers require that the video source be cleared in a different way. */
				if (_utils.isIE()) {
					_video.src = "";
				} else {
					_video.removeAttribute("src");
				}
				
				_utils.empty(_video);
				_video.load();
				_emptied = true;
			}
			
			if (_utils.isIPod()) {
				// Can't just hide the video tag because of a problem with iOS 5.
				_previousWidth = _video.style.width;
				_previousHeight = _video.style.height;
				_video.style.width = 0;
				_video.style.height = 0;
			} else if (_utils.isIPad()) {
				_video.style.display = "none";
				try {
					_video.webkitExitFullscreen();
				} catch(e) {}
			}
			_setState(jwplayer.api.events.state.IDLE);
		}
		
		/** Switch the fullscreen state of the player. **/
		this.fullscreen = function(state) {
			if (state === true) {
				this.resize("100%", "100%");
			} else {
				this.resize(_model.config.width, _model.config.height);
			}
		};

		/** Resize the player. **/
		this.resize = 
		
		/** Change the video's volume level. **/
		this.volume = 
		
		
		/** Switch the mute state of the player. **/
		this.mute = 

		
		/**
		 * Get the visual component
		 */
		this.getDisplayElement = function() {
			return _video;
		}
		
		/**
		 * Whether this media component has its own chrome
		 */
		this.hasChrome = 
		
		/**
		 * Return the video tag and stop listening to events  
		 */
		this.detachMedia = 
		
		/**
		 * Begin listening to events again  
		 */
		this.attachMedia = 
		
		/** Clean out the video tag **/
		this.destroy = 
		

		
		/************************************
		 *           PRIVATE METHODS         * 
		 ************************************/
		
		function _handleMediaEvent(type, handler) {
			if (_handlers[type]) return _handlers[type];
			else {
				_handlers[type] = 
				return _handlers[type];
			}
		}
		
		/** Initializes the HTML5 video and audio media provider **/
		
		
		
		
		/** Set the current player state **/
		
		
		
		/** Handle general <video> tag events **/
		function _generalHandler(event) {
		}

		/** Handle volume change and muting events **/
		

		/** Update the player progress **/
		function _progressHandler(event) {
			if (!_attached) return;

			var bufferPercent;
			if (_utils.exists(event) && event.lengthComputable && event.total) {
				bufferPercent = event.loaded / event.total * 100;
			} else if (_utils.exists(_video.buffered) && (_video.buffered.length > 0)) {
				var maxBufferIndex = _video.buffered.length - 1;
				if (maxBufferIndex >= 0) {
					bufferPercent = _video.buffered.end(maxBufferIndex) / _video.duration * 100;
				}
			}
			
			if (_utils.useNativeFullscreen() && _utils.exists(_video.webkitDisplayingFullscreen)) {
				if (_model.fullscreen != _video.webkitDisplayingFullscreen) {
					//_model.fullscreen = _video.webkitDisplayingFullscreen;
					_sendEvent(jwplayer.api.events.JWPLAYER_FULLSCREEN, {
						fullscreen: _video.webkitDisplayingFullscreen
					},true);
				}
			}

			if (_bufferFull === false && _state == jwplayer.api.events.state.BUFFERING) {
				_sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_BUFFER_FULL);
				_bufferFull = true;
			}
			
			if (!_bufferingComplete) {
				if (bufferPercent == 100) {
					_bufferingComplete = true;
				}
				
				if (_utils.exists(bufferPercent) && (bufferPercent > _model.buffer)) {
					_model.buffer = Math.round(bufferPercent);
					_sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_BUFFER, {
						bufferPercent: Math.round(bufferPercent)
					});
				}
				
			}
		}
		
		/** Update the player's position **/
		function _positionHandler(event) {
			if (!_attached) return;

			if (_utils.exists(event) && _utils.exists(event.target)) {
				if (_userDuration > 0) {
					if (!isNaN(event.target.duration) && (isNaN(_model.duration) || _model.duration < 1)) {
						if (event.target.duration == Infinity) {
							_model.duration = 0;
						} else {
							_model.duration = Math.round(event.target.duration * 10) / 10;
						}
					}
				}
				if (!_start && _video.readyState > 0) {
					_setState(jwplayer.api.events.state.PLAYING);
				}
				
				if (_state == jwplayer.api.events.state.PLAYING) {
					if (_video.readyState > 0 && (_delayedSeek > -1 || !_start)) {
						_start = true;
						try {
							if (_video.currentTime != _delayedSeek && _delayedSeek > -1) {
								_video.currentTime = _delayedSeek;
								_delayedSeek = -1;
							}
						} catch (err) {}
						_video.volume = _model.volume / 100;
						_video.muted = _model.mute;
					}
					_model.position = _model.duration > 0 ? (Math.round(event.target.currentTime * 10) / 10) : 0;
					_sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_TIME, {
						position: _model.position,
						duration: _model.duration
					});
					if (_model.position >= _model.duration && (_model.position > 0 || _model.duration > 0)) {
						_complete();
						return;
					}
				}
			}
			_progressHandler(event);
		}

		/** Load handler **/
		

		function _stateHandler(event) {
			if (!_attached) return;

			if (_previousWidth && _previousHeight) {
				_video.style.width = _previousWidth;
				_video.style.height = _previousHeight;
				_previousWidth = _previousHieght = 0;
			}

			if (_states[event.type]) {
				if (event.type == "ended") {
					_complete();
				} else {
					_setState(_states[event.type]);
				}
			}
		}

		function _metaHandler(event) {
			if (!_attached) return;
			var newDuration = Math.round(_video.duration * 10) / 10;
			var meta = {
					height: _video.videoHeight,
					width: _video.videoWidth,
					duration: newDuration
				};
			if (!_userDuration) {
				if ( (_model.duration < newDuration || isNaN(_model.duration)) && _video.duration != Infinity) {
					_model.duration = newDuration;
				}
			}
			_sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_META, {
				metadata: meta
			});
		}

		function _errorHandler(event) {
			if (!_attached) return;

			if (_state == jwplayer.api.events.state.IDLE) {
				return;
			}
			
			var message = "There was an error: ";
			if ((event.target.error && event.target.tagName.toLowerCase() == "video") ||
					event.target.parentNode.error && event.target.parentNode.tagName.toLowerCase() == "video") {
				var element = !_utils.exists(event.target.error) ? event.target.parentNode.error : event.target.error;
				switch (element.code) {
					case element.MEDIA_ERR_ABORTED:
						// This message doesn't need to be displayed to the user
						_utils.log("User aborted the video playback.");
						// Shouldn't continue error handling
						return;
					case element.MEDIA_ERR_NETWORK:
						message = "A network error caused the video download to fail part-way: ";
						break;
					case element.MEDIA_ERR_DECODE:
						message = "The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";
						break;
					case element.MEDIA_ERR_SRC_NOT_SUPPORTED:
						message = "The video could not be loaded, either because the server or network failed or because the format is not supported: ";
						break;
					default:
						message = "An unknown error occurred: ";
						break;
				}
			} else if (event.target.tagName.toLowerCase() == "source") {
				_sourceError--;
				if (_sourceError > 0) {
					return;
				}
				if (_utils.userAgentMatch(/firefox/i)) {
					// Don't send this as an error event in firefox
					_utils.log("The video could not be loaded, either because the server or network failed or because the format is not supported.");
					_stop(false);
					return;
				} else {
					message = "The video could not be loaded, either because the server or network failed or because the format is not supported: ";
				}
			} else {
				_utils.log("An unknown error occurred.  Continuing...");
				return;
			}
			_stop(false);
			message += _joinFiles();
			_error = true;
			_sendEvent(jwplayer.api.events.JWPLAYER_ERROR, {
				message: message
			});
			return;		
		}
		
		
		
		
		
		
		
		
		
		
		
		
		/** Works around a bug where iOS 3 devices require the mp4 file to be the first source listed in a multi-source <video> tag **/
		function _iOSClean(levels) {
			if (levels.length > 0 && _utils.userAgentMatch(/Safari/i) && !_utils.userAgentMatch(/Chrome/i)) {
				var position = -1;
				for (var i = 0; i < levels.length; i++) {
					switch(_utils.extension(levels[i].file)) {
					case "mp4":
						if (position < 0) position = i;
						break;
					case "webm":
						levels.splice(i, 1);
						break;
					}
				}
				if (position > 0) {
					var mp4 = levels.splice(position, 1)[0];
					levels.unshift(mp4);
				}
			}
		}
		
		
		
		
		
		
		
	};

})(jwplayer);
/**
 * JW Player YouTube Media component
 *
 * @author pablo
 * @version 5.8
 */
(function(jwplayer) {

	var _states = {
		"ended": jwplayer.api.events.state.IDLE,
		"playing": jwplayer.api.events.state.PLAYING,
		"pause": jwplayer.api.events.state.PAUSED,
		"buffering": jwplayer.api.events.state.BUFFERING
	};
	
	var _css = jwplayer.utils.css;
	
	jwplayer.html5.mediayoutube = function(model, container) {
		var _eventDispatcher = new jwplayer.html5.eventdispatcher();
		jwplayer.utils.extend(this, _eventDispatcher);
		var _model = model;
		var _container = document.getElementById(container.id);
		var _state = jwplayer.api.events.state.IDLE;
		var _object, _embed;
		
		
		
		this.getDisplayElement = this.detachMedia = function() {
			return _container;
		};
		
		/** This API is only useful for the mediavideo class **/
		this.attachMedia = function() {};
		
		this.play = function() {
			if (_state == jwplayer.api.events.state.IDLE) {
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_BUFFER, {
					bufferPercent: 100
				});
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_BUFFER_FULL);
				_setState(jwplayer.api.events.state.PLAYING);
			} else if (_state == jwplayer.api.events.state.PAUSED) {
				_setState(jwplayer.api.events.state.PLAYING);
			}
		};
		
		
		/** Switch the pause state of the player. **/
		this.pause = 
		
		
		/** Seek to a position in the video. **/
		this.seek = 
		
		
		/** Stop playback and loading of the video. **/
		this.stop = 
		
		/** Change the video's volume level. **/
		this.volume = 
		
		
		/** Switch the mute state of the player. **/
		this.mute = 
		
		
		/** Resize the player. **/
		this.resize = 
		
		
		/** Switch the fullscreen state of the player. **/
		this.fullscreen = 
		
		
		/** Load a new video into the player. **/
		this.load = 
		
		this.hasChrome = 
		
		
		
		/** Extract the current ID from a youtube URL.  Supported values include:
		 * http://www.youtube.com/watch?v=ylLzyHk54Z0
		 * http://www.youtube.com/watch#!v=ylLzyHk54Z0
		 * http://www.youtube.com/v/ylLzyHk54Z0
		 * http://youtu.be/ylLzyHk54Z0
		 * ylLzyHk54Z0
		 **/
		function _getYouTubeID(url) {
			var arr = url.split(/\?|\#\!/);
			var str = '';
			for (var i=0; i<arr.length; i++) {
				if (arr[i].substr(0, 2) == 'v=') {
					str = arr[i].substr(2);
				}
			}
			if (str == '') {
				if (url.indexOf('/v/') >= 0) {
					str = url.substr(url.indexOf('/v/') + 3);
				} else if (url.indexOf('youtu.be') >= 0) {
					str = url.substr(url.indexOf('youtu.be/') + 9);
				} else {
					str = url;
				}
			}
			if (str.indexOf('?') > -1) {
				str = str.substr(0, str.indexOf('?'));
			}
			if (str.indexOf('&') > -1) {
				str = str.substr(0, str.indexOf('&'));
			}
			
			return str;
		}
		
		this.embed = _embed;
		
		return this;
	};
})(jwplayer);
/**
 * JW Player model component
 *
 * @author zach
 * @version 5.9
 */
(function(jwplayer) {
	var _configurableStateVariables = ["width", "height", "start", "duration", "volume", "mute", "fullscreen", "item", "plugins", "stretching"];
	var _utils = jwplayer.utils;
	
	jwplayer.html5.model = function(api, container, options) {
		var _api = api;
		var _container = container;
		var _cookies = _utils.getCookies();
		var _model = {
			id: _container.id,
			playlist: [],
			state: jwplayer.api.events.state.IDLE,
			position: 0,
			buffer: 0,
			container: _container,
			config: {
				width: 480,
				height: 320,
				item: -1,
				skin: undefined,
				file: undefined,
				image: undefined,
				start: 0,
				duration: 0,
				bufferlength: 5,
				volume: _cookies.volume ? _cookies.volume : 90,
				mute: _cookies.mute && _cookies.mute.toString().toLowerCase() == "true" ? true : false,
				fullscreen: false,
				repeat: "",
				stretching: jwplayer.utils.stretching.UNIFORM,
				autostart: false,
				debug: undefined,
				screencolor: undefined
			}
		};
		var _media;
		var _eventDispatcher = new jwplayer.html5.eventdispatcher();
		var _components = ["display", "logo", "controlbar", "playlist", "dock"];
		
		jwplayer.utils.extend(_model, _eventDispatcher);
		
		for (var option in options) {
			if (typeof options[option] == "string") {
				var type = /color$/.test(option) ? "color" : null;
				options[option] = jwplayer.utils.typechecker(options[option], type);
			}
			var config = _model.config;
			var path = option.split(".");
			for (var edge in path) {
				if (edge == path.length - 1) {
					config[path[edge]] = options[option];
				} else {
					if (!jwplayer.utils.exists(config[path[edge]])) {
						config[path[edge]] = {};
					}
					config = config[path[edge]];
				}
			}
		}
		for (var index in _configurableStateVariables) {
			var configurableStateVariable = _configurableStateVariables[index];
			_model[configurableStateVariable] = _model.config[configurableStateVariable];
		}
		
		var pluginorder = _components.concat([]);
		
		if (jwplayer.utils.exists(_model.plugins)) {
			if (typeof _model.plugins == "string") {
				var userplugins = _model.plugins.split(",");
				for (var userplugin in userplugins) {
					if (typeof userplugins[userplugin] == "string") {
						pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g, ""));
					}
				}
			}
		}
		
		if (jwplayer.utils.isMobile()) {
			pluginorder = ["display","logo","dock","playlist"];
			if (!jwplayer.utils.exists(_model.config.repeat)) {
				_model.config.repeat = "list";
			}
		} else if (_model.config.chromeless) {
			pluginorder = ["logo","dock","playlist"];
			if (!jwplayer.utils.exists(_model.config.repeat)) {
				_model.config.repeat = "list";
			}
		}
		
		_model.plugins = {
			order: pluginorder,
			config: {},
			object: {}
		};
		
		if (typeof _model.config.components != "undefined") {
			for (var component in _model.config.components) {
				_model.plugins.config[component] = _model.config.components[component];
			}
		}
		
		var playlistVisible = false;
		
		for (var pluginIndex in _model.plugins.order) {
			var pluginName = _model.plugins.order[pluginIndex];
			var pluginConfig = !jwplayer.utils.exists(_model.plugins.config[pluginName]) ? {} : _model.plugins.config[pluginName];
			_model.plugins.config[pluginName] = !jwplayer.utils.exists(_model.plugins.config[pluginName]) ? pluginConfig : jwplayer.utils.extend(_model.plugins.config[pluginName], pluginConfig);
			if (!jwplayer.utils.exists(_model.plugins.config[pluginName].position)) {
				if (pluginName == "playlist") {
					_model.plugins.config[pluginName].position = jwplayer.html5.view.positions.NONE;
				} else {
					_model.plugins.config[pluginName].position = jwplayer.html5.view.positions.OVER;
				}
			} else {
				if (pluginName == "playlist") {
					playlistVisible = true;
				}
				_model.plugins.config[pluginName].position = _model.plugins.config[pluginName].position.toString().toUpperCase();
			}
		}
		
		/** Hide the next/prev buttons if the playlist is visible **/
		if (_model.plugins.config.controlbar && playlistVisible) {
			_model.plugins.config.controlbar.hideplaylistcontrols = true;
		}
		
		// Fix the dock
		if (typeof _model.plugins.config.dock != "undefined") {
			if (typeof _model.plugins.config.dock != "object") {
				var position = _model.plugins.config.dock.toString().toUpperCase();
				_model.plugins.config.dock = {
					position: position
				}
			}
			
			if (typeof _model.plugins.config.dock.position != "undefined") {
				_model.plugins.config.dock.align = _model.plugins.config.dock.position;
				_model.plugins.config.dock.position = jwplayer.html5.view.positions.OVER;
			}
			
			if (typeof _model.plugins.config.dock.idlehide == "undefined") {
				try {
					_model.plugins.config.dock.idlehide = _model.plugins.config.controlbar.idlehide;
				} catch (e) {}
			}
		}
		
		
		
		function _loadComplete() {
			if (_model.config.shuffle) {
				_model.item = _getShuffleItem();
			} else {
				if (_model.config.item >= _model.playlist.length) {
					_model.config.item = _model.playlist.length - 1;
				} else if (_model.config.item < 0) {
					_model.config.item = 0;
				}
				_model.item = _model.config.item;
			}
			_model.position = 0;
			_model.duration = _model.playlist.length > 0 ? _model.playlist[_model.item].duration : 0;
			_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, {
				"playlist": _model.playlist
			});
			_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM, {
				"index": _model.item
			});
		}
		
		_model.loadPlaylist = 
		
		
		
		
		
		var _mediaProviders = {};
		
		_model.setActiveMediaProvider = 
		
		_model.getMedia = function() {
			return _media;
		};
		
		_model.seek = function(pos) {
			_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_SEEK, {
				"position": _model.position,
				"offset": pos
			});
			return _media.seek(pos);
		};
		
		_model.setVolume = function(newVol) {
			_utils.saveCookie("volume", newVol);
			_model.volume = newVol;
		}

		_model.setMute = 

		
		
		_model.setupPlugins = 
		
		return _model;
	};
	
	
})(jwplayer);
/**
 * JW Player playlist model
 *
 * @author zach
 * @version 5.4
 */
((jwplayer);
/**
 * jwplayer Playlist component for the JW Player.
 *
 * @author pablo
 * @version 5.8
 */
(function(jwplayer) {
	var _defaults = {
		size: 180,
		position: jwplayer.html5.view.positions.NONE,
		itemheight: 60,
		thumbs: true,
		
		fontcolor: "#000000",
		overcolor: "",
		activecolor: "",
		backgroundcolor: "#f8f8f8",
		font: "_sans",
		fontsize: "",
		fontstyle: "",
		fontweight: ""
	};

	var _fonts = {
		'_sans': "Arial, Helvetica, sans-serif",
		'_serif': "Times, Times New Roman, serif",
		'_typewriter': "Courier New, Courier, monospace"
	}
	
	_utils = jwplayer.utils; 
	_css = _utils.css;
	
	_hide = function(element) {
		_css(element, {
			display: "none"
		});
	};
	
	_show = 
	
	jwplayer.html5.playlistcomponent = function(api, config) {
		var _api = api;
		var _settings = jwplayer.utils.extend({}, _defaults, _api.skin.getComponentSettings("playlist"), config);
		if (_settings.position == jwplayer.html5.view.positions.NONE
			|| typeof jwplayer.html5.view.positions[_settings.position] == "undefined") {
			return;
		}
		var _wrapper;
		var _width;
		var _height;
		var _playlist;
		var _items;
		var _ul;
		var _lastCurrent = -1;

		var _elements = {
			'background': undefined,
			'item': undefined,
			'itemOver': undefined,
			'itemImage': undefined,
			'itemActive': undefined
		};
		
		this.getDisplayElement = function() {
			return _wrapper;
		};
		
		this.resize = 
		
		this.show = function() {
			_show(_wrapper);
		}

		this.hide = 


		
		
		function _createList() {
			var ul = document.createElement("ul");
			_css(ul, {
			    width: _wrapper.style.width,
				minWidth: _wrapper.style.width,
				height: _wrapper.style.height,
		    	backgroundColor: _settings.backgroundcolor,
		    	backgroundImage: _elements.background ? "url("+_elements.background.src+")" : "",
		    			
		    	color: _settings.fontcolor,
		    	listStyle: 'none',
		    	margin: 0,
		    	padding: 0,
		    	fontFamily: _fonts[_settings.font] ? _fonts[_settings.font] : _fonts['_sans'],
		    	fontSize: (_settings.fontsize ? _settings.fontsize : 11) + "px",
		    	fontStyle: _settings.fontstyle,
		    	fontWeight: _settings.fontweight,
		    	
		    	'overflowY': 'auto'
			});
			return ul;
		}
		
		

		

		function _createItem(index) {
			var item = _playlist[index];
			var li = document.createElement("li");
			li.className = "item";
			
			_css(li,{
			    height: _settings.itemheight,
		    	display: 'block',
		    	cursor: 'pointer',
			    backgroundImage: _elements.item ? "url("+_elements.item.src+")" : "",
			    backgroundSize: "100% " + _settings.itemheight + "px"
		    });

			li.onmouseover = _itemOver(index);
			li.onmouseout = _itemOut(index);

			var imageWrapper = document.createElement("div");
			var image = new Image();
        	var imgPos = 0;
        	var imgWidth = 0;
        	var imgHeight = 0;
			if (_showThumbs() && (item.image || item['playlist.image'] || _elements.itemImage) ) {
	        	image.className = 'image';
	        	
	        	if (_elements.itemImage) {
	        		imgPos = (_settings.itemheight - _elements.itemImage.height) / 2;
	        		imgWidth = _elements.itemImage.width;
	        		imgHeight = _elements.itemImage.height;
	        	} else {
	        		imgWidth = _settings.itemheight * 4 / 3;
	        		imgHeight = _settings.itemheight
	        	}
	        			
	        	_css(imageWrapper, {
				    height: imgHeight,
				    width: imgWidth,
				    'float': 'left',
				    styleFloat: 'left',
				    cssFloat: 'left',
				    margin: '0 5px 0 0',
					background: 'black',
					overflow: 'hidden',
					margin: imgPos + "px",
					position: "relative"
	        	});
	        	
				_css(image, {
					position: "relative"
				});
				
				imageWrapper.appendChild(image);

				image.onload = 
				
				if (item['playlist.image']) {
					image.src = item['playlist.image'];	
				} else if (item.image) {
				  	image.src = item.image;
				} else if (_elements.itemImage) {
					image.src = _elements.itemImage.src;
				}
				
				li.appendChild(imageWrapper);
	        }
			
			var _remainingWidth = _width - imgWidth - imgPos * 2;
			if (_height < _settings.itemheight * _playlist.length) {
				_remainingWidth -= 15;
			}
			
	        var textWrapper = document.createElement("div");
	        _css(textWrapper, {
	            position: "relative",
	            height: "100%",
	            overflow: "hidden"
	        });

	        var duration = document.createElement("span");
    		if (item.duration > 0) {
        		duration.className = 'duration';
        		_css(duration, {
    		    	fontSize: (_settings.fontsize ? _settings.fontsize : 11) + "px",
                	fontWeight: (_settings.fontweight ? _settings.fontweight : "bold"),
    		    	width: "40px",
	            	height: _settings.fontsize ? _settings.fontsize + 10 : 20,
               		lineHeight: 24,
	            	'float': 'right',
				    styleFloat: 'right',
				    cssFloat: 'right'
	            });
        		duration.innerHTML = _utils.timeFormat(item.duration);
            	textWrapper.appendChild(duration);
        	}
	        
        	var title = document.createElement("span");
        	title.className = 'title';
        	_css(title, {
        		padding: "5px 5px 0 " + (imgPos ? 0 : "5px"),
        		height: _settings.fontsize ? _settings.fontsize + 10 : 20,
        		lineHeight: _settings.fontsize ? _settings.fontsize + 10 : 20,
            	overflow: 'hidden',
            	'float': 'left',
			    styleFloat: 'left',
			    cssFloat: 'left',
            	width: ((item.duration > 0) ? _remainingWidth - 50 : _remainingWidth)-10 + "px",
		    	fontSize: (_settings.fontsize ? _settings.fontsize : 13) + "px",
            	fontWeight: (_settings.fontweight ? _settings.fontweight : "bold")
        	});
        	title.innerHTML = item ? item.title : "";
        	textWrapper.appendChild(title);

	        if (item.description) {
	        	var desc = document.createElement("span");
	        	desc.className = 'description';
	        	_css(desc,{
	        	    display: 'block',
	        	    'float': 'left',
				    styleFloat: 'left',
				    cssFloat: 'left',
	        		margin: 0,
	        		paddingLeft: title.style.paddingLeft,
	        		paddingRight: title.style.paddingRight,
	            	lineHeight: (_settings.fontsize ? _settings.fontsize + 4 : 16) + "px",
	            	overflow: 'hidden',
	            	position: "relative"
	        	});
	        	desc.innerHTML = item.description;
	        	textWrapper.appendChild(desc);
	        }
	        li.appendChild(textWrapper);
			return li;
		}
		
		
		
		
		
		
		
		

		

		

		
		
		
		
		
		
		
		
		
		_setup();
		return this;
	};
})(jwplayer);
/**
 * JW Player playlist item model
 *
 * @author zach
 * @version 5.6
 */
(function(jwplayer) {
	jwplayer.html5.playlistitem = 
	
	function _getProvider(item) {
		if (jwplayer.utils.isYouTube(item.file)) {
			return "youtube";
		} else {
			var extension = jwplayer.utils.extension(item.file);
			var mimetype;
			if (extension && jwplayer.utils.extensionmap[extension]) {
				if (extension == "m3u8") {
					return "video";
				}
				mimetype = jwplayer.utils.extensionmap[extension].html5;
			} else if (item.type) {
				mimetype = item.type;
			}
			
			if (mimetype) {
				var mimeprefix = mimetype.split("/")[0];
				if (mimeprefix == "audio") {
					return "sound";
				} else if (mimeprefix == "video") {
					return mimeprefix;
				}
			}
		}
		return "";
	}
})(jwplayer);/**
 * JW Player playlist item level model
 *
 * @author zach
 * @version 5.4
 */
((jwplayer);
/**
 * JW Player playlist loader
 *
 * @author pablo
 * @version 5.8
 */
(function(jwplayer) {
	jwplayer.html5.playlistloader = function() {
		var _eventDispatcher = new jwplayer.html5.eventdispatcher();
		jwplayer.utils.extend(this, _eventDispatcher);
		
		this.load = 
		
		function _playlistLoaded(loadedEvent) {
			var playlistObj = [];  //[{file:'/testing/files/bunny.mp4'}];

			try {
				var playlistObj = jwplayer.utils.parsers.rssparser.parse(loadedEvent.responseXML.firstChild);
				_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, {
					"playlist": new jwplayer.html5.playlist({playlist: playlistObj})
				});
			} catch (e) {
				_playlistError("Could not parse the playlist");
			}
		}
		
		
	};
	
})(jwplayer);
/**
 * JW Player component that loads PNG skins.
 *
 * @author zach
 * @version 5.4
 */
((jwplayer);
/**
 * JW Player component that loads PNG skins.
 *
 * @author zach
 * @version 5.7
 */
((jwplayer);
/** 
 * A factory for API calls that either set listeners or return data
 *
 * @author zach
 * @version 5.9
 */
(function(jwplayer) {

	jwplayer.html5.api = function(container, options) {
		var _api = {};
				
		var _container = document.createElement('div');
		container.parentNode.replaceChild(_container, container);
		_container.id = container.id;
		
		_api.version = jwplayer.version;
		_api.id = _container.id;
		
		var _model = new jwplayer.html5.model(_api, _container, options);
		var _view = new jwplayer.html5.view(_api, _container, _model);
		var _controller = new jwplayer.html5.controller(_api, _container, _model, _view);
		
		_api.skin = new jwplayer.html5.skin();
		
		_api.jwPlay = function(state) {
			if (typeof state == "undefined") {
				_togglePlay();
			} else if (state.toString().toLowerCase() == "true") {
				_controller.play();
			} else {
				_controller.pause();
			}
		};
		_api.jwPause = function(state) {
			if (typeof state == "undefined") {
				_togglePlay();
			} else if (state.toString().toLowerCase() == "true") {
				_controller.pause();
			} else {
				_controller.play();
			}
		};
		
		
		_api.jwStop = _controller.stop;
		_api.jwSeek = _controller.seek;
		_api.jwPlaylistItem = 
		_api.jwPlaylistNext = _controller.next;
		_api.jwPlaylistPrev = _controller.prev;
		_api.jwResize = _controller.resize;
		_api.jwLoad = _controller.load;
		_api.jwDetachMedia = _controller.detachMedia;
		_api.jwAttachMedia = _controller.attachMedia;
		
		
		
		
		
		_api.jwGetPlaylistIndex = _statevarFactory('item');
		_api.jwGetPosition = _statevarFactory('position');
		_api.jwGetDuration = _statevarFactory('duration');
		_api.jwGetBuffer = _statevarFactory('buffer');
		_api.jwGetWidth = _statevarFactory('width');
		_api.jwGetHeight = _statevarFactory('height');
		_api.jwGetFullscreen = _statevarFactory('fullscreen');
		_api.jwSetFullscreen = _controller.setFullscreen;
		_api.jwGetVolume = _statevarFactory('volume');
		_api.jwSetVolume = _controller.setVolume;
		_api.jwGetMute = _statevarFactory('mute');
		_api.jwSetMute = _controller.setMute;
		_api.jwGetStretching = 
		
		_api.jwGetState = _statevarFactory('state');
		_api.jwGetVersion = function() {
			return _api.version;
		};
		_api.jwGetPlaylist = 
		
		_api.jwAddEventListener = _controller.addEventListener;
		_api.jwRemoveEventListener = _controller.removeEventListener;
		_api.jwSendEvent = _controller.sendEvent;
		
		_api.jwDockSetButton = function(id, handler, outGraphic, overGraphic) {
			if (_model.plugins.object["dock"] && _model.plugins.object["dock"].setButton) {
				_model.plugins.object["dock"].setButton(id, handler, outGraphic, overGraphic);	
			}
		}
		
		_api.jwControlbarShow = _componentCommandFactory("controlbar", "show");
		_api.jwControlbarHide = _componentCommandFactory("controlbar", "hide");
		_api.jwDockShow = _componentCommandFactory("dock", "show");
		_api.jwDockHide = _componentCommandFactory("dock", "hide");
		_api.jwDisplayShow = _componentCommandFactory("display", "show");
		_api.jwDisplayHide = _componentCommandFactory("display", "hide");
		
		
		var _instreamPlayer;
		
		//InStream API
		_api.jwLoadInstream = 
		_api.jwInstreamDestroy = 
		
		_api.jwInstreamAddEventListener = _callInstream('jwInstreamAddEventListener');
		_api.jwInstreamRemoveEventListener = _callInstream('jwInstreamRemoveEventListener');
		_api.jwInstreamGetState = _callInstream('jwInstreamGetState');
		_api.jwInstreamGetDuration = _callInstream('jwInstreamGetDuration');
		_api.jwInstreamGetPosition = _callInstream('jwInstreamGetPosition');
		_api.jwInstreamPlay = _callInstream('jwInstreamPlay');
		_api.jwInstreamPause = _callInstream('jwInstreamPause');
		_api.jwInstreamSeek = _callInstream('jwInstreamSeek');
		
		
		
		
		_api.jwDestroy = function() {
			_controller.destroy();
		}
		
		//UNIMPLEMENTED
		_api.jwGetLevel = function() {
		};
		_api.jwGetBandwidth = function() {
		};
		_api.jwGetLockState = function() {
		};
		_api.jwLock = function() {
		};
		_api.jwUnlock = function() {
		};
		
		function _skinLoaded() {
			if (_model.config.playlistfile) {
				_model.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, _playlistLoaded);
				_model.loadPlaylist(_model.config.playlistfile);
			} else if (typeof _model.config.playlist == "string") {
				_model.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, _playlistLoaded);
				_model.loadPlaylist(_model.config.playlist);
			} else {
				_model.loadPlaylist(_model.config);
				setTimeout(_playlistLoaded, 25);
			}
		}
		
		
		
		if (_model.config.chromeless && !jwplayer.utils.isIOS()) {
			_skinLoaded();
		} else {
			_api.skin.load(_model.config.skin, _skinLoaded);
		}
		return _api;
	};
	
})(jwplayer);
/**
 * JW Player Source Endcap
 * 
 * This will appear at the end of the JW Player source
 * 
 * @version 5.7
 */

 };
define("jwplayer", function(){});

/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-borderradius-boxshadow-history-audio-video-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.6.1',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  ,


    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),


    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body ? body : document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = "";
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        !body ? fakeBody.parentNode.removeChild(fakeBody) : div.parentNode.removeChild(div);

      return !!ret;

    },
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = 
    }
    else {
      hasOwnProp = 
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = 
    }

    

    

    

    

    

    

       tests['touch'] = 
    tests['history'] =     tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = 
    tests['video'] = 

    tests['audio'] =     for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }



     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;



    Modernizr.testProp      = 

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
;
define("modernizr", function(){});

define('sidearm.widget',['jquery'], function () {
        /*!
     * jQuery UI Widget @VERSION
     *
     * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://jquery.org/license
     *
     * http://docs.jquery.com/UI/Widget
     */
    (( jQuery );


    $.widget("sidearm.widget", {
        options: {},
        _create: function () {
            var widget = this;
            widget._doLayout();
            this.element.on("domChanged", function(e){
                widget._doLayout();

                // bubble if called on this element otherwise stop it here
                if (this !== e.target) {
                    e.stopPropagation();
                }
            });
        },
        _parentWidget: function (widget) {
            var a = widget.split(".")[0],
            b = widget.split(".")[1];

            return this.element.closest(":" + a + "-" + b).data(b);
        },
        _doLayout: $.noop,
        deepLayout: function () {
            var target = this.element,
                _eachTarget = function () {
                    $.each($(this).data() || {}, function (k, data) {
                        if (data instanceof $.sidearm.widget) {
                            data._doLayout();
                        }
                    });
                };

            while (target.length > 0) {
                target.each(_eachTarget);
                target = target.children();
            }
        },
        _showError: function (message) {
            $.shade({ type:"error", text:message});

            this._error(message);
        },
        _error: function (message) {
            Log.addEntry(message);
        },
        _info: 
    });
});
(function () {
    var canvasPrototype = HTMLCanvasElement.prototype;
    
    window.canvasFromSrc = function(src) {
        var deferred = $.Deferred();
        var image = new Image();

        // for images loaded cross origin, they must have the CORS header and crossOrigin Anonymous
        image.crossOrigin = "Anonymous";

        var canvas = document.createElement("canvas");

        canvas.toDataURL = function (type) {
            return $.when(canvas).then(;
        };

        image.onload = function() {
            canvas.width = image.width;
            canvas.height = image.height;
            var context = canvas.getContext('2d');
            context.drawImage(image, 0, 0);
            deferred.resolveWith(canvas);
        };

        image.onerror = function() {
            if (src.indexOf("data:") === 0 || !window.canvasFromSrc.fallbackToProxy) {
                return deferred.rejectWith(canvas);
            }

            image.onerror = 
            var proxySrc = '/services/image_proxy.ashx?src=' + encodeURIComponent(image.src);
            image.src = proxySrc;
        };

        image.src = src;

        deferred.promise(canvas);

        return canvas;
    };

    window.canvasFromSrc.fallbackToProxy = true;

    canvasPrototype.trimTransparentEdges = function() {
        return $.when(this).then(function() {
            var context = this.getContext('2d');
            var width = this.width;
            var height = this.height;
            var imageData = context.getImageData(0, 0, width, height);

            var top,
                left,
                bottom,
                right;

            // top
            (function() {
                for (var y = 0; y < height; y++) {
                    var transparent = true;
                    for (var x = 0; x < width; x++) {
                        var pixel = (x * 4) + (y * width * 4);
                        var alpha = imageData.data[pixel + 3];
                        if (alpha > 0) {
                            transparent = false;
                            break;
                        }
                    }
                    if (!transparent) {
                        break;
                    } else {
                        top = y;
                    }
                }
            }());

            // bottom
            (function() {
                for (var y = height; y >= 0; y--) {
                    var transparent = true;
                    for (var x = 0; x < width; x++) {
                        var pixel = (x * 4) + (y * width * 4);
                        var alpha = imageData.data[pixel + 3];
                        if (alpha > 0) {
                            transparent = false;
                            break;
                        }
                    }
                    if (!transparent) {
                        break;
                    } else {
                        bottom = y;
                    }
                }
            }());

            // left
            (function() {
                for (var x = 0; x < width; x++) {
                    var transparent = true;
                    for (var y = 0; y < height; y++) {
                        var pixel = (x * 4) + (y * width * 4);
                        var alpha = imageData.data[pixel + 3];
                        if (alpha > 0) {
                            transparent = false;
                            break;
                        }
                    }
                    if (!transparent) {
                        break;
                    } else {
                        left = x;
                    }
                }
            }());

            // right
            (function() {
                for (var x = width; x >= 0; x--) {
                    var transparent = true;
                    for (var y = 0; y < height; y++) {
                        var pixel = (x * 4) + (y * width * 4);
                        var alpha = imageData.data[pixel + 3];
                        if (alpha > 0) {
                            transparent = false;
                            break;
                        }
                    }
                    if (!transparent) {
                        break;
                    } else {
                        right = x;
                    }
                }
            }());

            width = right - left;
            height = bottom - top;

            var relevantData = context.getImageData(left, top, width, height);

            this.width = width;
            this.height = height;

            context.clearRect(0, 0, width, height);
            context.putImageData(relevantData, 0, 0);
            
        }).promise(this);
    };
    function lightness(pixel) {
        return (0.2126 * pixel.r + 0.7152 * pixel.g + 0.0722 * pixel.b);
    }
    
    function blend(sourcePixel, blendPixel, options) {
        var blendedPixel;
        if (options.mode === "add") {
            blendedPixel = {
                r: sourcePixel.r + Math.max(0, blendPixel.r),
                g: sourcePixel.g + Math.max(0, blendPixel.g),
                b: sourcePixel.b + Math.max(0, blendPixel.b),
                a: sourcePixel.a
            };
        } else if (options.mode === "subtract") {
            blendedPixel = {
                r: sourcePixel.r - Math.min(255, blendPixel.r),
                g: sourcePixel.g - Math.min(255, blendPixel.g),
                b: sourcePixel.b - Math.min(255, blendPixel.b),
                a: sourcePixel.a
            };
        } else if (options.mode === "lighten") {
            blendedPixel = (lightness(sourcePixel) > lightness(blendPixel)) ? sourcePixel : blendPixel;
        } else if (options.mode === "darken") {
            blendedPixel = (lightness(sourcePixel) < lightness(blendPixel)) ? sourcePixel : blendPixel;
        } else if (options.mode == null) {
            blendedPixel = blendPixel;
        } else {
            throw new Error("Unknown blend mode '" + options.mode + "'");
        }
        if (options.opacity != null) {
            var o = options.opacity;
            blendedPixel = {
                r: (1 - o) * sourcePixel.r + o * blendedPixel.r,
                g: (1 - o) * sourcePixel.g + o * blendedPixel.g,
                b: (1 - o) * sourcePixel.b + o * blendedPixel.b,
                a: sourcePixel.a
            };
        }
        return blendedPixel;
    }

    canvasPrototype.convolute = function(matrix, blendOptions) {
        return $.when(this).then(function () {
            blend = blend == null ? 1 : blend;
            
            if ($.type(matrix) === "string") {
                matrix = canvasPrototype.convolute.matrices[matrix];
            }
            
            var side = Math.round(Math.sqrt(matrix.length));
            var weightSum = matrix.reduce( 0);
            var halfSide = Math.floor(side / 2);
            console.log(matrix);
            
            var context = this.getContext('2d');
            var pixels = context.getImageData(0, 0, this.width, this.height);
            var src = pixels.data;
            var sw = pixels.width;
            var sh = pixels.height;
            console.log(pixels);
            // pad output by the convolution matrix
            var w = sw;
            var h = sh;

            var output = context.getImageData(0, 0, w, h);
            var dst = output.data;
            // go through the destination image pixels
            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    var sy = y;
                    var sx = x;
                    var dstOff = (y * w + x) * 4;
                    // calculate the weighed sum of the source image pixels that
                    // fall under the convolution matrix
                    var r = 0, g = 0, b = 0, a = 0;
                    for (var cy = 0; cy < side; cy++) {
                        for (var cx = 0; cx < side; cx++) {
                            var scy = sy + cy - halfSide;
                            var scx = sx + cx - halfSide;
                            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                                var srcOff = (scy * sw + scx) * 4;
                                var wt = matrix[cy * side + cx];
                                r += src[srcOff] * wt / weightSum;
                                g += src[srcOff + 1] * wt / weightSum;
                                b += src[srcOff + 2] * wt / weightSum;
                                a += src[srcOff + 3] * wt / weightSum;
                            }
                        }
                    }

                    var blendedPixel = blend({
                        r: dst[dstOff + 0],
                        g: dst[dstOff + 1],
                        b: dst[dstOff + 2],
                        a: dst[dstOff + 3],
                    }, { r: r, g: g, b: b, a: a }, blendOptions);

                    dst[dstOff + 0] = blendedPixel.r;
                    dst[dstOff + 1] = blendedPixel.g;
                    dst[dstOff + 2] = blendedPixel.b;
                    dst[dstOff + 3] = blendedPixel.a;
                }
            }
            
            context.putImageData(output, 0, 0);

        }).promise(this);
    };

    canvasPrototype.convolute.matrices = {
        "box-blur": [
            1, 1, 2, 1, 1,
            1, 0, 0, 0, 1,
            2, 0, 8, 0, 2,
            1, 0, 0, 0, 1,
            1, 1, 2, 1, 1],
        "sharpen": [
            -1, -1, -1,
            -1,  9, -1,
            -1, -1, -1]
    };

    // swaps out pixel color
    canvasPrototype.color = function(rgb){
        return $.when(this).then(function(){
            var context = this.getContext('2d');
            var imageData = context.getImageData(0, 0, this.width, this.height);
            $.each(imageData.data, function(i, v) {
                var componentIndex = i % 4;
                if (componentIndex !== 3) {
                     imageData.data[i] = rgb[componentIndex];
                }
            });
            context.clearRect(0, 0, this.width, this.height);
            context.putImageData(imageData, 0, 0);
        }).promise(this);
    };

    (function(ko){
        if (!ko) return;
        var unwrap = ko.utils.unwrapObservable;
        ko.bindingHandlers.canvasPromise = {
            update: function(el, valueAccessor) {
                var canvasPromise = unwrap(valueAccessor());

                $(el).children("canvas").remove();

                $.when(canvasPromise).then(;
            }
        };
    }(window.ko));
    
}());
define("canvas", function(){});

(function(vjs) {

	// plugin initializer
	var imageColorToSliderBackground = function(selectors) {
	    var player = this,
	    	playerEl = player.el(),
	    	$playerEl = $(playerEl);

	    var color = $playerEl.find(".vjs-play-progress").css("background-color") || "rgb(255,255,255)",
	    	colorComponents = $.map(color.replace(/rgb\(|\)/g, "").split(","), ;

	    $.each(selectors, function(i, selector) {
	    	var element = $playerEl.find(selector),
	    		src = element.css("background-image");

    		if (src == null) return;

    		src = src.replace(/^url\(['"]?|['"]?\)$/gi, "");

    		canvasFromSrc.fallbackToProxy = false;
	    	canvasFromSrc(src)
	    		.color(colorComponents)
	    		.toDataURL()
	    		.done(;
	    });

		return this;
	};	
	// register the plugin with video.js
	vjs.plugin('imageColorToSliderBackground', imageColorToSliderBackground);

}(window.videojs));

define("videojs.imageColorToSliderBackground", function(){});

(function(vjs) {

	// plugin initializer
	var dimTheLights = function(clickHandler) {
	    var player = this,
	    	playerEl = player.el(),
	    	$playerEl = $(playerEl),
	    	$controlBar = $playerEl.find(".vjs-control-bar");

	    	$("<div>")
	    		.addClass("vjs-dim-the-lights")
	    		.attr("tabindex", "0")
	    		.on("click", 
	    		.append("<div class='vjs-control-text'>Dim the lights</div>")
	    		.insertBefore($controlBar.find(".vjs-fullscreen-control"));

		return this;
	};	
	// register the plugin with video.js
	vjs.plugin('dimTheLights', dimTheLights);

}(window.videojs));

define("videojs.dimTheLights", function(){});

(function(vjs) {

	// shim layer with setTimeout fallback
	var requestAnimFrame = (();

	// plugin initializer
	var countdown = function(options) {

	    var player = this,
	    	playerEl = player.el(),
	    	$playerEl = $(playerEl),
	    	$countdown = $("<div>").addClass("vjs-countdown").appendTo($playerEl).hide(),
	    	$poster = $("<img />").addClass("vjs-countdown-poster").attr("src", player.poster_).appendTo($countdown),
	    	$count = $("<span />").addClass("vjs-countdown-time").appendTo($countdown),
	    	$text = $("<span />").addClass("vjs-countdown-text").text("This event has not started yet").appendTo($countdown),
	    	$day = $(formatPart("day")).appendTo($count).children().eq(0),
	    	$hrs = $(formatPart("hrs")).appendTo($count).children().eq(0),
	    	$min = $(formatPart("min")).appendTo($count).children().eq(0),
	    	$sec = $(formatPart("sec")).appendTo($count).children().eq(0);
    	var $day_label = $day.parent().children().eq(1);

    	

    	function updatePart($el, value){
    		if ($el.text() !== value.toString()) {
    			$el.text(value.toString());
    		}
    	}
    	function updateDaysLabel($el,value){
    		if(value === 1){
    			$el.text("day");
    		}
    		else{
    			$el.text("days");
    		}
    	}

    	function doCountdown(){
    		if (options.to <= $.now()){
    			if (Modernizr && Modernizr.touch){
    				$text.text("Tap to start the event...");
    				$countdown.one('click', function(){
    					player.play();
    				});
    			} else {
	    			$text.text("The event is starting...");
	    		}
    			
    			player.one("playing", ;
    			player.play();
    		} else {
	    		var duration = moment.duration(moment(options.to).diff(moment()));
	    		var days = Math.floor(duration.asDays());
	    		if(days === 0){
	    			$day.remove();
	    			$day_label.remove();
	    		}
	    		updatePart($day, days);
	    		updateDaysLabel($day_label, days);
	    		updatePart($hrs, duration.hours());
	    		updatePart($min, duration.minutes());
	    		updatePart($sec, duration.seconds());

	    		requestAnimFrame(doCountdown);
	    	}
    	}

    	if (options.to > $.now()){
    		$countdown.show();
	    	doCountdown();
	    	player.options({
	    		autoplay:false
	    	});

	    	// set one for right when the time should expire
	    	setTimeout(doCountdown, options.to - $.now());	    	
	    }

		return this;
	};	
	// register the plugin with video.js
	vjs.plugin('countdown', countdown);

}(window.videojs));

define("videojs.countdown", ;

// moment.js
// version : 1.6.2
// author : Tim Wood
// license : MIT
// momentjs.com
(function(a,b){nction C(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,g=a.hours||a.h||0,h=a.minutes||a.m||0,i=a.seconds||a.s||0,j=a.milliseconds||a.ms||0;this._milliseconds=j+i*1e3+h*6e4+g*36e5,this._days=f+e*7,this._months=d+c*12,b.milliseconds=j%1e3,i+=B(j/1e3),b.seconds=i%60,h+=B(i/60),b.minutes=h%60,g+=B(h/60),b.hours=g%24,f+=B(g/24),f+=e*7,b.days=f%30,d+=B(f/30),b.months=d%12,c+=B(d/12),b.years=c}ction G(b){return new a(b[0],b[1]||0,b[2]||1,b[3]||0,b[4]||0,b[5]||0,b[6]||0)}function H(b,d){function q(d){var l,r;switch(d){case"M":return e+1;case"Mo":return e+1+o(e+1);case"MM":return D(e+1,2);case"MMM":return c.monthsShort[e];case"MMMM":return c.months[e];case"D":return f;case"Do":return f+o(f);case"DD":return D(f,2);case"DDD":return l=new a(g,e,f),r=new a(g,0,1),~~((l-r)/864e5+1.5);case"DDDo":return l=q("DDD"),l+o(l);case"DDDD":return D(q("DDD"),3);case"d":return h;case"do":return h+o(h);case"ddd":return c.weekdaysShort[h];case"dddd":return c.weekdays[h];case"w":return l=new a(g,e,f-h+5),r=new a(l.getFullYear(),0,4),~~((l-r)/864e5/7+1.5);case"wo":return l=q("w"),l+o(l);case"ww":return D(q("w"),2);case"YY":return D(g%100,2);case"YYYY":return g;case"a":return p?p(i,j,!1):i>11?"pm":"am";case"A":return p?p(i,j,!0):i>11?"PM":"AM";case"H":return i;case"HH":return D(i,2);case"h":return i%12||12;case"hh":return D(i%12||12,2);case"m":return j;case"mm":return D(j,2);case"s":return k;case"ss":return D(k,2);case"S":return~~(m/100);case"SS":return D(~~(m/10),2);case"SSS":return D(m,3);case"Z":return(n<0?"-":"+")+D(~~(Math.abs(n)/60),2)+":"+D(~~(Math.abs(n)%60),2);case"ZZ":return(n<0?"-":"+")+D(~~(10*Math.abs(n)/6),4);case"L":case"LL":case"LLL":case"LLLL":case"LT":return H(b,c.longDateFormat[d]);default:return d.replace(/(^\[)|(\\)|\]$/g,"")}}var e=b.month(),f=b.date(),g=b.year(),h=b.day(),i=b.hours(),j=b.minutes(),k=b.seconds(),m=b.milliseconds(),n=-b.zone(),o=c.ordinal,p=c.meridiem;return d.replace(l,q)}function I(a){switch(a){case"DDDD":return p;case"YYYY":return q;case"S":case"SS":case"SSS":case"DDD":return o;case"MMM":case"MMMM":case"ddd":case"dddd":case"a":case"A":return r;case"Z":case"ZZ":return s;case"T":return t;case"MM":case"DD":case"dd":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return n;default:return new RegExp(a.replace("\\",""))}}function J(a,b,d,e){var f;switch(a){case"M":case"MM":d[1]=b==null?0:~~b-1;break;case"MMM":case"MMMM":for(f=0;f<12;f++)if(c.monthsParse[f].test(b)){d[1]=f;break}break;case"D":case"DD":case"DDD":case"DDDD":d[2]=~~b;break;case"YY":b=~~b,d[0]=b+(b>70?1900:2e3);break;case"YYYY":d[0]=~~Math.abs(b);break;case"a":case"A":e.isPm=(b+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":d[3]=~~b;break;case"m":case"mm":d[4]=~~b;break;case"s":case"ss":d[5]=~~b;break;case"S":case"SS":case"SSS":d[6]=~~(("0."+b)*1e3);break;case"Z":case"ZZ":e.isUTC=!0,f=(b+"").match(x),f&&f[1]&&(e.tzh=~~f[1]),f&&f[2]&&(e.tzm=~~f[2]),f&&f[0]==="+"&&(e.tzh=-e.tzh,e.tzm=-e.tzm)}}function K(b,c){var d=[0,0,1,0,0,0,0],e={tzh:0,tzm:0},f=c.match(l),g,h;for(g=0;g<f.length;g++)h=(I(f[g]).exec(b)||[])[0],b=b.replace(I(f[g]),""),J(f[g],h,d,e);return e.isPm&&d[3]<12&&(d[3]+=12),e.isPm===!1&&d[3]===12&&(d[3]=0),d[3]+=e.tzh,d[4]+=e.tzm,e.isUTC?new a(a.UTC.apply({},d)):G(d)}ction O(a,b,d,e){var f=c.relativeTime[a];return typeof f=="function"?f(b||1,!!d,a,e):f.replace(/%d/i,b||1)}function P(a,b){var c=e(Math.abs(a)/1e3),d=e(c/60),f=e(d/60),g=e(f/24),h=e(g/365),i=c<45&&["s",c]||d===1&&["m"]||d<45&&["mm",d]||f===1&&["h"]||f<22&&["hh",f]||g===1&&["d"]||g<=25&&["dd",g]||g<=45&&["M"]||g<345&&["MM",e(g/30)]||h===1&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,O.apply({},i)} c,d="1.6.2",e=Math.round,f,g={},h="en",i=typeof module!="undefined",j="months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),k=/^\/?Date\((\-?\d+)/i,l=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|LT|LL?L?L?)/g,m=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,n=/\d\d?/,o=/\d{1,3}/,p=/\d{3}/,q=/\d{4}/,r=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,s=/Z|[\+\-]\d\d:?\d\d/i,t=/T/i,u=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,v="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],x=/([\+\-]|\d\d)/gi,y="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),z={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6};c=function(d,e){if(d===null||d==="")return null;var f,g,h;return c.isMoment(d)?(f=new a(+d._d),h=d._isUTC):e?F(e)?f=M(d,e):f=K(d,e):(g=k.exec(d),f=d===b?new a:g?new a(+g[1]):d instanceof a?d:F(d)?G(d):typeof d=="string"?N(d):new a(d)),new A(f,h)},c.utc=function(b,d){return F(b)?new A(new a(a.UTC.apply({},b)),!0):d&&b?c(b+" +0000",d+" Z").utc():c(b&&!s.exec(b)?b+"+0000":b).utc()},c.unix=c.duration=function(a,b){var d=c.isDuration(a),e=typeof a=="number",f=d?a._data:e?{}:a;return e&&(b?f[b]=a:f.milliseconds=a),new C(f)},c.humanizeDuration=c.version=d,c.defaultFormat=v,c.lang=function(a,b){var d,e,f=[];if(!a)return h;if(b){for(d=0;d<12;d++)f[d]=new RegExp("^"+b.months[d]+"|^"+b.monthsShort[d].replace(".",""),"i");b.monthsParse=b.monthsParse||f,g[a]=b}if(g[a]){for(d=0;d<j.length;d++)c[j[d]]=g[a][j[d]]||g.en[j[d]];h=a}else i&&(e=require("./lang/"+a),c.lang(a,e))},c.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:!1,calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:),c.isMoment=function(a){return a instanceof A},c.isDuration=c.fn=A.prototype={clone:valueOf:unix:toString:toDate:utc:function(){return this._isUTC=!0,this},local:format:add:subtract:diff:from:function(a,b){return c.duration(this.diff(a)).humanize(!b)},fromNow:calendar:function(){var a=this.diff(c().sod(),"days",!0),b=c.calendar,d=b.sameElse,e=a<-6?d:a<-1?b.lastWeek:a<0?b.lastDay:a<1?b.sameDay:a<2?b.nextDay:a<7?b.nextWeek:d;return this.format(typeof e=="function"?e.apply(this):e)},isLeapYear:isDST:day:sod:function(){return c(this).hours(0).minutes(0).seconds(0).milliseconds(0)},eod:function(){return this.sod().add({d:1,ms:-1})},zone:daysInMonth:function(){return c(this).month(this.month()+1).date(0).date()}};for(f=0;f<y.length;f++)Q(y[f].toLowerCase(),y[f]);Q("year","FullYear"),c.duration.fn=C.prototype={weeks:valueOf:humanize:function(a){var b=+this,d=c.relativeTime,e=P(b,!a);return a&&(e=(b<=0?d.past:d.future).replace(/%s/i,e)),e}};for(f in z)z.hasOwnProperty(f)&&(S(f,z[f]),R(f.toLowerCase()));S("Weeks",6048e5),i&&(module.exports=c),typeof window!="undefined"&&typeof ender=="undefined"&&(window.moment=c),typeof define=="function"&&define.amd&&define("moment",[],})(Date);
define('videojs.endcard',['moment'], function(moment){
    (function(vjs) {

    	var defaults = {
    		sport : "",
    		count : 12,
    		type : "all",
            displayType: "related"
    	};
    	// plugin initializer
    	var endcard = function(options) {
    	    var player = this,
    	    	playerEl = player.el(),
    	    	$playerEl = $(playerEl),
    	    	$endcard = $("<div>").addClass("vjs-endcard").appendTo($playerEl).hide();

    		var settings = $.extend({}, defaults, options);

            options.displayType = options.displayType || defaults.displayType;

        	function loadRelated(){
                $.get('/services/allaccess.ashx/media/get', settings)
                    .done(function(media){
                        $.each(media, function(i, item){                    
                            $endcard.append(
                                $("<a>")
                                    .addClass("item")
                                    .addClass("item-" + item.type.toLowerCase())
                                    .css("background-image", "url(" + item.poster + ")")
                                    .attr("href", location.href.split('?')[0] + "?" + item.type + "=" + item.id)
                                    .append(
                                        $("<span>")
                                            .addClass("item-label")
                                            .text(item.title)
                                    )
                                    .append(
                                        $("<span>")
                                            .addClass("item-date")
                                            .text(moment(item.date_utc).format("MMM Do"))
                                    ));
                        });
                    });

            player.on('ended', function(){
                $endcard.addClass("animate-out").show();
                setTimeout(function(){
                    $endcard.removeClass("animate-out");
                }, 0);
            });

            player.on('play', function(){
                $endcard.addClass("animate-out");;
                setTimeout( 1000);
            });
            }

            function loadRepeat(){
                player.on('ended', ;

                player.on('play', ;
            }

            switch (settings.displayType) {
                case "related":
                    loadRelated();
                    break;
                case "repeat":
                    loadRepeat();
                    break;
            }

    		return this;
    	};	
    	// register the plugin with video.js
    	vjs.plugin('endcard', endcard);

    }(window.videojs));
});
/**
 * Basic Ad support plugin for video.js.
 *
 * Common code to support ad integrations.
 */
(function(window, videojs, undefined) {


var

  VIDEO_EVENTS = videojs.getComponent('Html5').Events,

  /**
   * Pause the player so that ads can play, then play again when ads are done.
   * This makes sure the player is paused during ad loading.
   *
   * The timeout is necessary because pausing a video element while processing a `play`
   * event on iOS can cause the video element to continuously toggle between playing and
   * paused states.
   *
   * @param {object} player The video player
   */
  cancelContentPlay = function(player) {
    if (player.ads.cancelPlayTimeout) {
      // another cancellation is already in flight, so do nothing
      return;
    }

    // Avoid content flash on non-iPad iOS
    if (videojs.browser.IS_IOS) {

      var width = player.currentWidth ? player.currentWidth() : player.width();
      var height = player.currentHeight ? player.currentHeight() : player.height();

      // A placeholder black box will be shown in the document while the player is hidden.
      var placeholder = document.createElement('div');
      placeholder.style.width = width + 'px';
      placeholder.style.height = height + 'px';
      placeholder.style.background = 'black';
      player.el_.parentNode.insertBefore(placeholder, player.el_);

      // Hide the player. While in full-screen video playback mode on iOS, this
      // makes the player show a black screen instead of content flash.
      player.el_.style.display = 'none';

      // Unhide the player and remove the placeholder once we're ready to move on.
      player.one(['adplaying', 'adtimeout', 'adserror', 'adscanceled', 'adskip',
                  'contentplayback'], ;
    }
    
    player.ads.cancelPlayTimeout = window.setTimeout(function() {
      // deregister the cancel timeout so subsequent cancels are scheduled
      player.ads.cancelPlayTimeout = null;

      // pause playback so ads can be handled.
      if (!player.paused()) {
        player.pause();
      }

      // add a contentplayback handler to resume playback when ads finish.
      player.one('contentplayback', ;
    }, 1);
  },

  /**
   * Returns an object that captures the portions of player state relevant to
   * video playback. The result of this function can be passed to
   * restorePlayerSnapshot with a player to return the player to the state it
   * was in when this function was invoked.
   * @param {object} player The videojs player object
   */
  getPlayerSnapshot = function(player) {

    var currentTime;

    if (videojs.browser.IS_IOS && player.ads.isLive(player)) {
      // Record how far behind live we are
      if (player.seekable().length > 0) {
        currentTime = player.currentTime() - player.seekable().end(0);
      } else {
        currentTime = player.currentTime();
      }
    } else {
      currentTime = player.currentTime();
    }

    var
      tech = player.$('.vjs-tech'),
      tracks = player.remoteTextTracks ? player.remoteTextTracks() : [],
      track,
      i,
      suppressedTracks = [],
      snapshot = {
        ended: player.ended(),
        currentSrc: player.currentSrc(),
        src: player.src(),
        currentTime: currentTime,
        type: player.currentType()
      };

    if (tech) {
      snapshot.nativePoster = tech.poster;
      snapshot.style = tech.getAttribute('style');
    }

    i = tracks.length;
    while (i--) {
      track = tracks[i];
      suppressedTracks.push({
        track: track,
        mode: track.mode
      });
      track.mode = 'disabled';
    }
    snapshot.suppressedTracks = suppressedTracks;

    return snapshot;
  },

  /**
   * Attempts to modify the specified player so that its state is equivalent to
   * the state of the snapshot.
   * @param {object} snapshot - the player state to apply
   */
  restorePlayerSnapshot = function(player, snapshot) {
    if (player.ads.disableNextSnapshotRestore === true) {
      player.ads.disableNextSnapshotRestore = false;
      return;
    }
    var
      // the playback tech
      tech = player.$('.vjs-tech'),

      // the number of remaining attempts to restore the snapshot
      attempts = 20,

      suppressedTracks = snapshot.suppressedTracks,
      trackSnapshot,
      restoreTracks =  function() {
        var i = suppressedTracks.length;
        while (i--) {
          trackSnapshot = suppressedTracks[i];
          trackSnapshot.track.mode = trackSnapshot.mode;
        }
      },

      // finish restoring the playback state
      resume = function() {
        var currentTime;

        if (videojs.browser.IS_IOS && player.ads.isLive(player)) {
          if (snapshot.currentTime < 0) {
            // Playback was behind real time, so seek backwards to match
            if (player.seekable().length > 0) {
              currentTime = player.seekable().end(0) + snapshot.currentTime;
            } else {
              currentTime = player.currentTime();
            }
            player.currentTime(currentTime);
          }
        } else {
          player.currentTime(snapshot.ended ? player.duration() : snapshot.currentTime);
        }

        // Resume playback if this wasn't a postroll
        if (!snapshot.ended) {
          player.play();
        }
      },

      // determine if the video element has loaded enough of the snapshot source
      // to be ready to apply the rest of the state
      tryToResume = function() {

        // tryToResume can either have been called through the `contentcanplay`
        // event or fired through setTimeout.
        // When tryToResume is called, we should make sure to clear out the other
        // way it could've been called by removing the listener and clearing out
        // the timeout.
        player.off('contentcanplay', tryToResume);
        if (player.ads.tryToResumeTimeout_) {
          player.clearTimeout(player.ads.tryToResumeTimeout_);
          player.ads.tryToResumeTimeout_ = null;
        }

        // Tech may have changed depending on the differences in sources of the
        // original video and that of the ad
        tech = player.el().querySelector('.vjs-tech');

        if (tech.readyState > 1) {
          // some browsers and media aren't "seekable".
          // readyState greater than 1 allows for seeking without exceptions
          return resume();
        }

        if (tech.seekable === undefined) {
          // if the tech doesn't expose the seekable time ranges, try to
          // resume playback immediately
          return resume();
        }

        if (tech.seekable.length > 0) {
          // if some period of the video is seekable, resume playback
          return resume();
        }

        // delay a bit and then check again unless we're out of attempts
        if (attempts--) {
          window.setTimeout(tryToResume, 50);
        } else {
          (();
        }
      };

    if (snapshot.nativePoster) {
      tech.poster = snapshot.nativePoster;
    }

    if ('style' in snapshot) {
      // overwrite all css style properties to restore state precisely
      tech.setAttribute('style', snapshot.style || '');
    }

    // Determine whether the player needs to be restored to its state
    // before ad playback began. With a custom ad display or burned-in
    // ads, the content player state hasn't been modified and so no
    // restoration is required

    if (player.ads.videoElementRecycled()) {
      // on ios7, fiddling with textTracks too early will cause safari to crash
      player.one('contentloadedmetadata', restoreTracks);

      // if the src changed for ad playback, reset it
      player.src({ src: snapshot.currentSrc, type: snapshot.type });
      // safari requires a call to `load` to pick up a changed source
      player.load();
      // and then resume from the snapshots time once the original src has loaded
      // in some browsers (firefox) `canplay` may not fire correctly.
      // Reace the `canplay` event with a timeout.
      player.one('contentcanplay', tryToResume);
      player.ads.tryToResumeTimeout_ = player.setTimeout(tryToResume, 2000);
    } else if (!player.ended() || !snapshot.ended) {
      // if we didn't change the src, just restore the tracks
      restoreTracks();
      // the src didn't change and this wasn't a postroll
      // just resume playback at the current time.
      player.play();
    }
  },

  /**
   * Remove the poster attribute from the video element tech, if present. When
   * reusing a video element for multiple videos, the poster image will briefly
   * reappear while the new source loads. Removing the attribute ahead of time
   * prevents the poster from showing up between videos.
   * @param {object} player The videojs player object
   */
  removeNativePoster = 

  // ---------------------------------------------------------------------------
  // Ad Framework
  // ---------------------------------------------------------------------------

  // default framework settings
  defaults = {
    // maximum amount of time in ms to wait to receive `adsready` from the ad
    // implementation after play has been requested. Ad implementations are
    // expected to load any dynamic libraries and make any requests to determine
    // ad policies for a video during this time.
    timeout: 5000,

    // maximum amount of time in ms to wait for the ad implementation to start
    // linear ad mode after `readyforpreroll` has fired. This is in addition to
    // the standard timeout.
    prerollTimeout: 100,

    // maximum amount of time in ms to wait for the ad implementation to start
    // linear ad mode after `contentended` has fired.
    postrollTimeout: 100,

    // when truthy, instructs the plugin to output additional information about
    // plugin state to the video.js log. On most devices, the video.js log is
    // the same as the developer console.
    debug: false,

    // set this to true when using ads that are part of the content video
    stitchedAds: false
  },

  adFramework = function(options) {
    var player = this;
    var settings = videojs.mergeOptions(defaults, options);
    var fsmHandler;

    // prefix all video element events during ad playback
    // if the video element emits ad-related events directly,
    // plugins that aren't ad-aware will break. prefixing allows
    // plugins that wish to handle ad events to do so while
    // avoiding the complexity for common usage
    (function() {
      var videoEvents = VIDEO_EVENTS.concat([
        'firstplay',
        'loadedalldata'
      ]);

      var returnTrue = 

      var triggerEvent = function(type, event) {
        // pretend we called stopImmediatePropagation because we want the native
        // element events to continue propagating
        event.isImmediatePropagationStopped = returnTrue;
        event.cancelBubble = true;
        event.isPropagationStopped = returnTrue;
        player.trigger({
          type: type + event.type,
          state: player.ads.state,
          originalEvent: event
        });
      };

      player.on(videoEvents, function redispatch(event) {
        if (player.ads.state === 'ad-playback') {
          if (player.ads.videoElementRecycled() || player.ads.stitchedAds()) {
            triggerEvent('ad', event);
          }
        } else if (player.ads.state === 'content-playback' && event.type === 'ended') {
          triggerEvent('content', event);
        } else if (player.ads.state === 'content-resuming') {
          if (player.ads.snapshot) {
            // the video element was recycled for ad playback
            if (player.currentSrc() !== player.ads.snapshot.currentSrc) {
              if (event.type === 'loadstart') {
                return;
              }
              return triggerEvent('content', event);

            // we ended playing postrolls and the video itself
            // the content src is back in place
            } else if (player.ads.snapshot.ended) {
              if ((event.type === 'pause' ||
                  event.type === 'ended')) {
                // after loading a video, the natural state is to not be started
                // in this case, it actually has, so, we do it manually
                player.addClass('vjs-has-started');
                // let `pause` and `ended` events through, naturally
                return;
              }
              // prefix all other events in content-resuming with `content`
              return triggerEvent('content', event);
            }
          }
          if (event.type !== 'playing') {
            triggerEvent('content', event);
          }
        }
      });
    })();

    // We now auto-play when an ad gets loaded if we're playing ads in the same video element as the content.
    // The problem is that in IE11, we cannot play in addurationchange but in iOS8, we cannot play from adcanplay.
    // This will allow ad-integrations from needing to do this themselves.
    player.on(['addurationchange', 'adcanplay'], function() {
      if (player.currentSrc() === player.ads.snapshot.currentSrc) {
        return;
      }

      player.play();
    });

    player.on('nopreroll', function() {
      player.ads.nopreroll_ = true;
    });

    player.on('nopostroll', ;

    // replace the ad initializer with the ad namespace
    player.ads = {
      state: 'content-set',
      disableNextSnapshotRestore: false,

      // Call this when an ad response has been received and there are
      // linear ads ready to be played.
      startLinearAdMode: function() {
        if (player.ads.state === 'preroll?' ||
            player.ads.state === 'content-playback' ||
            player.ads.state === 'postroll?') {
          player.trigger('adstart');
        }
      },

      // Call this when a linear ad pod has finished playing.
      endLinearAdMode: function() {
        if (player.ads.state === 'ad-playback') {
          player.trigger('adend');
          // In the case of an empty ad response, we want to make sure that
          // the vjs-ad-loading class is always removed. We could probably check for
          // duration on adPlayer for an empty ad but we remove it here just to make sure
          player.removeClass('vjs-ad-loading');
        }
      },

      // Call this when an ad response has been received but there are no
      // linear ads to be played (i.e. no ads available, or overlays).
      // This has no effect if we are already in a linear ad mode.  Always
      // use endLinearAdMode() to exit from linear ad-playback state.
      skipLinearAdMode: function() {
        if (player.ads.state !== 'ad-playback') {
          player.trigger('adskip');
        }
      },

      stitchedAds: function(arg) {
        if (arg !== undefined) {
          this._stitchedAds = !!arg;
        }
        return this._stitchedAds;
      },

      // Returns whether the video element has been modified since the
      // snapshot was taken.
      // We test both src and currentSrc because changing the src attribute to a URL that
      // AdBlocker is intercepting doesn't update currentSrc.
      videoElementRecycled: function() {
        var srcChanged;
        var currentSrcChanged;

        if (!this.snapshot) {
          return false;
        }

        srcChanged = player.src() !== this.snapshot.src;
        currentSrcChanged = player.currentSrc() !== this.snapshot.currentSrc;

        return srcChanged || currentSrcChanged;
      },

      // Returns a boolean indicating if given player is in live mode.
      // Can be replaced when this is fixed: https://github.com/videojs/video.js/issues/3262
      isLive: function(player) {
        if (player.duration() === Infinity) {
          return true;
        } else if (videojs.browser.IOS_VERSION === "8" && player.duration() === 0) {
          return true;
        }
        return false;
      },

      // Return true if content playback should mute and continue during ad breaks.
      // This is only done during live streams on platforms where it's supported.
      // This improves speed and accuracy when returning from an ad break.
      shouldPlayContentBehindAd: 

    };

    player.ads.stitchedAds(settings.stitchedAds);

    fsmHandler = function(event) {
      // Ad Playback State Machine
      var fsm = {
        'content-set': {
          events: {
            'adscanceled': function() {
              this.state = 'content-playback';
            },
            'adsready': function() {
              this.state = 'ads-ready';
            },
            'play': function() {
              this.state = 'ads-ready?';
              cancelContentPlay(player);
              // remove the poster so it doesn't flash between videos
              removeNativePoster(player);
            },
            'adserror': function() {
              this.state = 'content-playback';
            },
            'adskip': 
          }
        },
        'ads-ready': {
          events: {
            'play': 
            'adskip': function() {
              this.state = 'content-playback';
            },
            'adserror': function() {
              this.state = 'content-playback';
            }
          }
        },
        'preroll?': {
          enter: function() {
            if (player.ads.nopreroll_) {
              // This will start the ads manager in case there are later ads
              player.trigger('readyforpreroll');

              // If we don't wait a tick, entering content-playback will cancel
              // cancelPlayTimeout, causing the video to not pause for the ad
              window.setTimeout(function() {
                // Don't wait for a preroll
                player.trigger('nopreroll');
              }, 1);
            } else {
              // change class to show that we're waiting on ads
              player.addClass('vjs-ad-loading');
              // schedule an adtimeout event to fire if we waited too long
              player.ads.adTimeoutTimeout = window.setTimeout(function() {
                player.trigger('adtimeout');
              }, settings.prerollTimeout);
              // signal to ad plugin that it's their opportunity to play a preroll
              player.trigger('readyforpreroll');
            }
          },
          leave: function() {
            window.clearTimeout(player.ads.adTimeoutTimeout);
            player.removeClass('vjs-ad-loading');
          },
          events: {
            'play': function() {
              cancelContentPlay(player);
            },
            'adstart': function() {
              this.state = 'ad-playback';
            },
            'adskip': function() {
              this.state = 'content-playback';
            },
            'adtimeout': function() {
              this.state = 'content-playback';
            },
            'adserror': function() {
              this.state = 'content-playback';
            },
            'nopreroll': function() {
              this.state = 'content-playback';
            }
          }
        },
        'ads-ready?': {
          enter: function() {
            player.addClass('vjs-ad-loading');
            player.ads.adTimeoutTimeout = window.setTimeout(function() {
              player.trigger('adtimeout');
            }, settings.timeout);
          },
          leave: function() {
            window.clearTimeout(player.ads.adTimeoutTimeout);
            player.removeClass('vjs-ad-loading');
          },
          events: {
            'play': function() {
              cancelContentPlay(player);
            },
            'adscanceled': function() {
              this.state = 'content-playback';
            },
            'adsready': function() {
              this.state = 'preroll?';
            },
            'adskip': function() {
              this.state = 'content-playback';
            },
            'adtimeout': function() {
              this.state = 'content-playback';
            },
            'adserror': function() {
              this.state = 'content-playback';
            }
          }
        },
        'ad-playback': {
          enter: function() {
            // capture current player state snapshot (playing, currentTime, src)
            if (!player.ads.shouldPlayContentBehindAd(player)) {
              this.snapshot = getPlayerSnapshot(player);
            }

            // Mute the player behind the ad
            if (player.ads.shouldPlayContentBehindAd(player)) {
              this.preAdVolume_ = player.volume();
              player.volume(0);
            }

            // add css to the element to indicate and ad is playing.
            player.addClass('vjs-ad-playing');

            // remove the poster so it doesn't flash between ads
            removeNativePoster(player);

            // We no longer need to supress play events once an ad is playing.
            // Clear it if we were.
            if (player.ads.cancelPlayTimeout) {
              // If we don't wait a tick, we could cancel the pause for cancelContentPlay,
              // resulting in content playback behind the ad
              window.setTimeout( 1);
            }
          },
          leave: function() {
            player.removeClass('vjs-ad-playing');
            if (!player.ads.shouldPlayContentBehindAd(player)) {
              restorePlayerSnapshot(player, this.snapshot);
            }

            // Reset the volume to pre-ad levels
            if (player.ads.shouldPlayContentBehindAd(player)) {
              player.volume(this.preAdVolume_);
            }
            
          },
          events: {
            'adend': function() {
              this.state = 'content-resuming';
            },
            'adserror': 
          }
        },
        'content-resuming': {
          enter: function() {
            if (this.snapshot && this.snapshot.ended) {
              window.clearTimeout(player.ads._fireEndedTimeout);
              // in some cases, ads are played in a swf or another video element
              // so we do not get an ended event in this state automatically.
              // If we don't get an ended event we can use, we need to trigger
              // one ourselves or else we won't actually ever end the current video.
              player.ads._fireEndedTimeout = window.setTimeout(function() {
                player.trigger('ended');
              }, 1000);
            }
          },
          leave: 
          events: {
            'contentupdate': function() {
              this.state = 'content-set';
            },
            contentresumed: function() {
              this.state = 'content-playback';
            },
            'playing': function() {
              this.state = 'content-playback';
            },
            'ended': function() {
              this.state = 'content-playback';
            }
          }
        },
        'postroll?': {
          enter: function() {
            this.snapshot = getPlayerSnapshot(player);
            if (player.ads.nopostroll_) {
              window.setTimeout( 1);
            } else {
              player.addClass('vjs-ad-loading');

              player.ads.adTimeoutTimeout = window.setTimeout(function() {
                player.trigger('adtimeout');
              }, settings.postrollTimeout);
            }
          },
          leave: 
          events: {
            'adstart': function() {
              this.state = 'ad-playback';
            },
            'adskip': function() {
              this.state = 'content-resuming';
              window.setTimeout(function() {
                player.trigger('ended');
              }, 1);
            },
            'adtimeout': function() {
              this.state = 'content-resuming';
              window.setTimeout(function() {
                player.trigger('ended');
              }, 1);
            },
            'adserror': function() {
              this.state = 'content-resuming';
              window.setTimeout(function() {
                player.trigger('ended');
              }, 1);
            },
            'contentupdate': function() {
              this.state = 'ads-ready?';
            }
          }
        },
        'content-playback': {
          enter: function() {
            // make sure that any cancelPlayTimeout is cleared
            if (player.ads.cancelPlayTimeout) {
              window.clearTimeout(player.ads.cancelPlayTimeout);
              player.ads.cancelPlayTimeout = null;
            }
            // this will cause content to start if a user initiated
            // 'play' event was canceled earlier.
            player.trigger({
              type: 'contentplayback',
              triggerevent: player.ads.triggerevent
            });
          },
          events: {
            // in the case of a timeout, adsready might come in late.
            'adsready': function() {
              player.trigger('readyforpreroll');
            },
            'adstart': function() {
              this.state = 'ad-playback';
            },
            'contentupdate': function() {
              if (player.paused()) {
                this.state = 'content-set';
              } else {
                this.state = 'ads-ready?';
              }
              // When a new source is loaded into the player, we should remove the snapshot
              // to avoid confusing player state with the new content's state
              // i.e When new content is set, the player should fire the ended event
              if (this.snapshot && this.snapshot.ended) {
                this.snapshot = null;
              }
            },
            'contentended': function() {
              if (player.ads.snapshot && player.ads.snapshot.ended) {
                // player has already been here. content has really ended. good-bye
                return;
              }
              this.state = 'postroll?';
            },
            'play': function() {
              if (player.currentSrc() !== player.ads.contentSrc) {
                cancelContentPlay(player);
              }
            }
          }
        }
      };

      (function(state) {
        var noop = function() {};

        // process the current event with a noop default handler
        ((fsm[state].events || {})[event.type] || noop).apply(player.ads);

        // check whether the state has changed
        if (state !== player.ads.state) {

          // record the event that caused the state transition
          player.ads.triggerevent = event.type;

          // execute leave/enter callbacks if present
          (fsm[state].leave || noop).apply(player.ads);
          (fsm[player.ads.state].enter || noop).apply(player.ads);

          // output debug logging
          if (settings.debug) {
            videojs.log('ads', player.ads.triggerevent + ' triggered: ' + state + ' -> ' + player.ads.state);
          }
        }

      })(player.ads.state);

    };

    // register for the events we're interested in
    player.on(VIDEO_EVENTS.concat([
      // events emitted by ad plugin
      'adtimeout',
      'contentupdate',
      'contentplaying',
      'contentended',
      'contentresumed',

      // events emitted by third party ad implementors
      'adsready',
      'adserror',
      'adscanceled',
      'adstart',  // startLinearAdMode()
      'adend',    // endLinearAdMode()
      'adskip',   // skipLinearAdMode()
      'nopreroll'
    ]), fsmHandler);

    // keep track of the current content source
    // if you want to change the src of the video without triggering
    // the ad workflow to restart, you can update this variable before
    // modifying the player's source
    player.ads.contentSrc = player.currentSrc();

    // implement 'contentupdate' event.
    (function(){
      var
        // check if a new src has been set, if so, trigger contentupdate
        checkSrc = function() {
          var src;
          if (player.ads.state !== 'ad-playback') {
            src = player.currentSrc();
            if (src !== player.ads.contentSrc) {
              player.trigger({
                type: 'contentupdate',
                oldValue: player.ads.contentSrc,
                newValue: src
              });
              player.ads.contentSrc = src;
            }
          }
        };
      // loadstart reliably indicates a new src has been set
      player.on('loadstart', checkSrc);
      // check immediately in case we missed the loadstart
      window.setTimeout(checkSrc, 1);
    })();

    // kick off the fsm
    if (!player.paused()) {
      // simulate a play event if we're autoplaying
      fsmHandler({type:'play'});
    }

  };

  // register the ad plugin framework
  videojs.plugin('ads', adFramework);

})(window, videojs);

define("videojs.ads", function(){});

/**
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * IMA SDK integration plugin for Video.js. For more information see
 * https://www.github.com/googleads/videojs-ima
 */

(function(factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    var vjs = require('video.js');
    require('videojs-contrib-ads');
    factory(window, document, vjs);
  } else {
    factory(window, document, videojs);
  }
})(function(window, document, videojs) {
  "use strict";

  // support es6 style import
  videojs = videojs.default || videojs;

  var extend = function(obj) {
    var arg;
    var index;
    var key;
    for (index = 1; index < arguments.length; index++) {
      arg = arguments[index];
      for (key in arg) {
        if (arg.hasOwnProperty(key)) {
          obj[key] = arg[key];
        }
      }
    }
    return obj;
  };

  var ima_defaults = {
    debug: false,
    timeout: 5000,
    prerollTimeout: 100,
    adLabel: 'Advertisement',
    showControlsForJSAds: true
  };

  var init = 

  var ImaPlugin = function(player, options, readyCallback) {
    this.player = player;

    /**
     * Assigns the unique id and class names to the given element as well as the style class
     * @param element
     * @param controlName
     * @private
     */
    var assignControlAttributes_ = bind(this);

    /**
     * Returns a regular expression to test a string for the given className
     * @param className
     * @returns {RegExp}
     * @private
     */
    var getClassRegexp_ = 

    /**
     * Adds a class to the given element if it doesn't already have the class
     * @param element
     * @param classToAdd
     * @private
     */
    var addClass_ = function(element, classToAdd){
      if(getClassRegexp_(classToAdd).test(element.className)){
        return element;
      }

      return element.className = element.className.trim() + ' ' + classToAdd;
    };

    /**
     * Removes a class from the given element if it has the given class
     * @param element
     * @param classToRemove
     * @private
     */
    var removeClass_ = function(element, classToRemove){
      var classRegexp = getClassRegexp_(classToRemove);

      if(!classRegexp.test(element.className)){
        return element;
      }

      return element.className = element.className.trim().replace(classRegexp, '');
    };

    /**
     * Creates the ad container passed to the IMA SDK.
     * @private
     */
    var createAdContainer_ = function() {
      // The adContainerDiv is the DOM of the element that will house
      // the ads and ad controls.
      this.vjsControls = this.player.getChild('controlBar');
      this.adContainerDiv =
          this.vjsControls.el().parentNode.appendChild(
              document.createElement('div'));
      assignControlAttributes_(this.adContainerDiv, 'ima-ad-container');
      this.adContainerDiv.style.position = "absolute";
      this.adContainerDiv.style.zIndex = 1111;
      this.adContainerDiv.addEventListener(
          'mouseenter',
          showAdControls_,
          false);
      this.adContainerDiv.addEventListener(
          'mouseleave',
          hideAdControls_,
          false);
      createControls_();
      this.adDisplayContainer =
          new google.ima.AdDisplayContainer(this.adContainerDiv, this.contentPlayer);
    }.bind(this);

    /**
     * Creates the controls for the ad.
     * @private
     */
    var createControls_ = function() {
      this.controlsDiv = document.createElement('div');
      assignControlAttributes_(this.controlsDiv, 'ima-controls-div');
      this.controlsDiv.style.width = '100%';
      this.countdownDiv = document.createElement('div');
      assignControlAttributes_(this.countdownDiv, 'ima-countdown-div');
      this.countdownDiv.innerHTML = this.settings.adLabel;
      this.countdownDiv.style.display = this.showCountdown ? 'block' : 'none';
      this.seekBarDiv = document.createElement('div');
      assignControlAttributes_(this.seekBarDiv, 'ima-seek-bar-div');
      this.seekBarDiv.style.width = '100%';
      this.progressDiv = document.createElement('div');
      assignControlAttributes_(this.progressDiv, 'ima-progress-div');
      this.playPauseDiv = document.createElement('div');
      assignControlAttributes_(this.playPauseDiv, 'ima-play-pause-div');
      addClass_(this.playPauseDiv, 'ima-playing');
      this.playPauseDiv.addEventListener(
          'click',
          onAdPlayPauseClick_,
          false);
      this.muteDiv = document.createElement('div');
      assignControlAttributes_(this.muteDiv, 'ima-mute-div');
      addClass_(this.muteDiv, 'ima-non-muted');
      this.muteDiv.addEventListener(
          'click',
          onAdMuteClick_,
          false);
      this.sliderDiv = document.createElement('div');
      assignControlAttributes_(this.sliderDiv, 'ima-slider-div');
      this.sliderDiv.addEventListener(
          'mousedown',
          onAdVolumeSliderMouseDown_,
          false);
      this.sliderLevelDiv = document.createElement('div');
      assignControlAttributes_(this.sliderLevelDiv, 'ima-slider-level-div');
      this.fullscreenDiv = document.createElement('div');
      assignControlAttributes_(this.fullscreenDiv, 'ima-fullscreen-div');
      addClass_(this.fullscreenDiv, 'ima-non-fullscreen');
      this.fullscreenDiv.addEventListener(
          'click',
          onAdFullscreenClick_,
          false);
      this.adContainerDiv.appendChild(this.controlsDiv);
      this.controlsDiv.appendChild(this.countdownDiv);
      this.controlsDiv.appendChild(this.seekBarDiv);
      this.controlsDiv.appendChild(this.playPauseDiv);
      this.controlsDiv.appendChild(this.muteDiv);
      this.controlsDiv.appendChild(this.sliderDiv);
      this.controlsDiv.appendChild(this.fullscreenDiv);
      this.seekBarDiv.appendChild(this.progressDiv);
      this.sliderDiv.appendChild(this.sliderLevelDiv);
    }.bind(this);

    /**
     * Initializes the AdDisplayContainer. On mobile, this must be done as a
     * result of user action.
     */
    this.initializeAdDisplayContainer = bind(this);

    /**
     * Creates the AdsRequest and request ads through the AdsLoader.
     */
    this.requestAds = function() {
      if (!this.adDisplayContainerInitialized) {
        this.adDisplayContainer.initialize();
      }
      var adsRequest = new google.ima.AdsRequest();
      if (this.settings.adTagUrl) {
        adsRequest.adTagUrl = this.settings.adTagUrl;
      } else {
        adsRequest.adsResponse = this.settings.adsResponse;
      }
      if (this.settings.forceNonLinearFullSlot) {
        adsRequest.forceNonLinearFullSlot = true;
      }

      adsRequest.linearAdSlotWidth = this.getPlayerWidth();
      adsRequest.linearAdSlotHeight = this.getPlayerHeight();
      adsRequest.nonLinearAdSlotWidth =
          this.settings.nonLinearWidth || this.getPlayerWidth();
      adsRequest.nonLinearAdSlotHeight =
          this.settings.nonLinearHeight || (this.getPlayerHeight() / 3);

      adsRequest.setAdWillAutoPlay(this.settings.adWillAutoPlay);

      this.adsLoader.requestAds(adsRequest);
    }.bind(this);

    /**
     * Listener for the ADS_MANAGER_LOADED event. Creates the AdsManager,
     * sets up event listeners, and triggers the 'adsready' event for
     * videojs-ads-contrib.
     * @private
     */
    var onAdsManagerLoaded_ = function(adsManagerLoadedEvent) {
      this.adsManager = adsManagerLoadedEvent.getAdsManager(
          this.contentPlayheadTracker, this.adsRenderingSettings);

      this.adsManager.addEventListener(
          google.ima.AdErrorEvent.Type.AD_ERROR,
          onAdError_);
      this.adsManager.addEventListener(
          google.ima.AdEvent.Type.AD_BREAK_READY,
          onAdBreakReady_);
      this.adsManager.addEventListener(
          google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
          this.onContentPauseRequested_);
      this.adsManager.addEventListener(
          google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
          this.onContentResumeRequested_);
      this.adsManager.addEventListener(
          google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
          onAllAdsCompleted_);

      this.adsManager.addEventListener(
          google.ima.AdEvent.Type.LOADED,
          onAdLoaded_);
      this.adsManager.addEventListener(
          google.ima.AdEvent.Type.STARTED,
          onAdStarted_);
      this.adsManager.addEventListener(
          google.ima.AdEvent.Type.CLICK,
          onAdPlayPauseClick_);
      this.adsManager.addEventListener(
          google.ima.AdEvent.Type.COMPLETE,
          this.onAdComplete_);
      this.adsManager.addEventListener(
          google.ima.AdEvent.Type.SKIPPED,
          this.onAdComplete_);

      if (this.isMobile) {
        // Show/hide controls on pause and resume (triggered by tap).
        this.adsManager.addEventListener(
            google.ima.AdEvent.Type.PAUSED,
            onAdPaused_);
        this.adsManager.addEventListener(
            google.ima.AdEvent.Type.RESUMED,
            onAdResumed_);
      }

      if (!this.autoPlayAdBreaks) {
        try {
          var initWidth = this.getPlayerWidth();
          var initHeight = this.getPlayerHeight();
          this.adsManagerDimensions.width = initWidth;
          this.adsManagerDimensions.height = initHeight;
          this.adsManager.init(
              initWidth,
              initHeight,
              google.ima.ViewMode.NORMAL);
          this.adsManager.setVolume(this.player.muted() ? 0 : this.player.volume());
        } catch (adError) {
          onAdError_(adError);
        }
      }

      this.player.trigger('adsready');
    }.bind(this);

    /**
     * DEPRECATED: Use startFromReadyCallback
     * Start ad playback, or content video playback in the absence of a
     * pre-roll.
     */
    this.start = function() {
      window.console.log(
          'WARNING: player.ima.start is deprecated. Use ' +
              'player.ima.startFromReadyCallback instead.');
    };

    /**
     * Start ad playback, or content video playback in the absence of a
     * pre-roll. **NOTE**: This method only needs to be called if you provide
     * your own readyCallback as the second parameter to player.ima(). If you
     * only provide options and do not provide your own readyCallback,
     * **DO NOT** call this method. If you do provide your own readyCallback,
     * you should call this method in the last line of that callback. For more
     * info, see this method's usage in our advanced and playlist examples.
     */
    this.startFromReadyCallback = function() {
      if (this.autoPlayAdBreaks) {
        try {
          this.adsManager.init(
              this.getPlayerWidth(),
              this.getPlayerHeight(),
              google.ima.ViewMode.NORMAL);
          this.adsManager.setVolume(this.player.muted() ? 0 : this.player.volume());
          this.adsManager.start();
        } catch (adError) {
          onAdError_(adError);
        }
      }
    }.bind(this);

    /**
     * Listener for errors fired by the AdsLoader.
     * @param {google.ima.AdErrorEvent} event The error event thrown by the
     *     AdsLoader. See
     *     https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdError.Type
     * @private
     */
    var onAdsLoaderError_ = function(event) {
      window.console.log('AdsLoader error: ' + event.getError());
      this.adContainerDiv.style.display = 'none';
      if (this.adsManager) {
        this.adsManager.destroy();
      }
      this.player.trigger({type: 'adserror', data: { AdError: event.getError(), AdErrorEvent: event }});
    }.bind(this);

    /**
     * Listener for errors thrown by the AdsManager.
     * @param {google.ima.AdErrorEvent} adErrorEvent The error event thrown by
     *     the AdsManager.
     * @private
     */
    var onAdError_ = function(adErrorEvent) {
      var errorMessage = adErrorEvent.getError !== undefined ? adErrorEvent.getError() : adErrorEvent.stack;
      window.console.log('Ad error: ' + errorMessage);
      this.vjsControls.show();
      this.adsManager.destroy();
      this.adContainerDiv.style.display = 'none';
      this.player.trigger({ type: 'adserror', data: { AdError: errorMessage, AdErrorEvent: adErrorEvent }});
    }.bind(this);

    /**
     * Listener for AD_BREAK_READY. Passes event on to publisher's listener.
     * @param {google.ima.AdEvent} adEvent AdEvent thrown by the AdsManager.
     * @private
     */
    var onAdBreakReady_ = bind(this);

    /**
     * Called by publishers in manual ad break playback mode to start an ad
     * break.
     */
    this.playAdBreak = bind(this);

    /**
     * Pauses the content video and displays the ad container so ads can play.
     * @param {google.ima.AdEvent} adEvent The AdEvent thrown by the AdsManager.
     * @private
     */
    this.onContentPauseRequested_ = function(adEvent) {
      this.adsActive = true;
      this.adPlaying = true;
      this.contentSource = this.player.currentSrc();
      this.contentSourceType = this.player.currentType();
      this.player.off('ended', this.localContentEndedListener);
      if (adEvent.getAd().getAdPodInfo().getPodIndex() != -1) {
        // Skip this call for post-roll ads
        this.player.ads.startLinearAdMode();
      }
      this.adContainerDiv.style.display = 'block';

      var contentType = adEvent.getAd().getContentType();
      if ((contentType === 'application/javascript') && !this.settings.showControlsForJSAds) {
        this.controlsDiv.style.display = 'none';
      } else {
        this.controlsDiv.style.display = 'block';
      }

      this.vjsControls.hide();
      showPlayButton();
      this.player.pause();
      hideAdControls_();
    }.bind(this);

    /**
     * Resumes content video and hides the ad container.
     * @param {google.ima.AdEvent} adEvent The AdEvent thrown by the AdsManager.
     * @private
     */
    this.onContentResumeRequested_ = function(adEvent) {
      this.adsActive = false;
      this.adPlaying = false;
      this.player.on('ended', this.localContentEndedListener);
      if (this.currentAd == null || // hide for post-roll only playlist
          this.currentAd.isLinear()) { // don't hide for non-linear ads
        this.adContainerDiv.style.display = 'none';
      }
      this.vjsControls.show();
      if (!this.currentAd) {
        // Something went wrong playing the ad
        this.player.ads.endLinearAdMode();
      } else if (!this.contentComplete &&
          // Don't exit linear mode after post-roll or content will auto-replay
          this.currentAd.getAdPodInfo().getPodIndex() != -1 ) {
        this.player.ads.endLinearAdMode();
      }
      // Hide controls in case of future non-linear ads. They'll be unhidden in
      // content_pause_requested.
      this.controlsDiv.style.display = 'none';
      this.countdownDiv.innerHTML = '';
    }.bind(this);

    /**
     * Records that ads have completed and calls contentAndAdsEndedListeners
     * if content is also complete.
     * @param {google.ima.AdEvent} adEvent The AdEvent thrown by the AdsManager.
     * @private
     */
    var onAllAdsCompleted_ = function(adEvent) {
      this.allAdsCompleted = true;
      this.adContainerDiv.style.display = 'none';
      if (this.contentComplete == true) {
        if (this.contentPlayer.src != this.contentSource) {
          // Avoid setted autoplay after the post-roll
          this.player.autoplay(false);
          this.player.src({
            src: this.contentSource,
            type: this.contentSourceType
          });
        }
        for (var index in this.contentAndAdsEndedListeners) {
          this.contentAndAdsEndedListeners[index]();
        }
      }
    }.bind(this);

    /**
     * Starts the content video when a non-linear ad is loaded.
     * @param {google.ima.AdEvent} adEvent The AdEvent thrown by the AdsManager.
     * @private
     */
   var onAdLoaded_ = function(adEvent) {
      if (!adEvent.getAd().isLinear()) {
        this.player.play();
      }
    }.bind(this);

    /**
     * Starts the interval timer to check the current ad time when an ad starts
     * playing.
     * @param {google.ima.AdEvent} adEvent The AdEvent thrown by the AdsManager.
     * @private
     */
    var onAdStarted_ = function(adEvent) {
      this.currentAd = adEvent.getAd();
      if (this.currentAd.isLinear()) {
        this.adTrackingTimer = setInterval(
            onAdPlayheadTrackerInterval_, 250);
        // Don't bump container when controls are shown
        removeClass_(this.adContainerDiv, 'bumpable-ima-ad-container');
      } else {
        // Bump container when controls are shown
       addClass_(this.adContainerDiv, 'bumpable-ima-ad-container');
      }
      // For non-linear ads that show after a linear ad.
      this.adContainerDiv.style.display = 'block';
      this.player.trigger('ads-ad-started');
    }.bind(this);

    /**
     * Syncs controls when an ad pauses.
     * @param {google.ima.AdEvent} adEvent The AdEvent thrown by the AdsManager.
     * @private
     */
    var onAdPaused_ = function(adEvent) {
      showPauseButton();
      showAdControls_();
      this.adPlaying = false;
    }.bind(this);

    /**
     * Syncs controls when an ad resumes.
     * @param {google.ima.AdEvent} adEvent The AdEvent thrown by the AdsManager.
     * @private
     */
    var onAdResumed_ = function(adEvent) {
      showPlayButton();
      hideAdControls_();
      this.adPlaying = true;
    }.bind(this);

    /**
     * Clears the interval timer for current ad time when an ad completes.
     * @param {google.ima.AdEvent} adEvent The AdEvent thrown by the AdsManager.
     * @private
     */
    this.onAdComplete_ = function(adEvent) {
      if (this.currentAd.isLinear()) {
        clearInterval(this.adTrackingTimer);
      }
    }.bind(this);

    /**
     * Gets the current time and duration of the ad and calls the method to
     * update the ad UI.
     * @private
     */
    var onAdPlayheadTrackerInterval_ = function() {
      var remainingTime = this.adsManager.getRemainingTime();
      var duration =  this.currentAd.getDuration();
      var currentTime = duration - remainingTime;
      currentTime = currentTime > 0 ? currentTime : 0;
      var isPod = false;
      var totalAds = 0;
      var adPosition;
      if (this.currentAd.getAdPodInfo()) {
        isPod = true;
        adPosition = this.currentAd.getAdPodInfo().getAdPosition();
        totalAds = this.currentAd.getAdPodInfo().getTotalAds();
      }

      // Update countdown timer data
      var remainingMinutes = Math.floor(remainingTime / 60);
      var remainingSeconds = Math.floor(remainingTime % 60);
      if (remainingSeconds.toString().length < 2) {
        remainingSeconds = '0' + remainingSeconds;
      }
      var podCount = ': ';
      if (isPod && (totalAds > 1)) {
        podCount = ' (' + adPosition + ' of ' + totalAds + '): ';
      }
      this.countdownDiv.innerHTML =
          this.settings.adLabel + podCount +
          remainingMinutes + ':' + remainingSeconds;

      // Update UI
      var playProgressRatio = currentTime / duration;
      var playProgressPercent = playProgressRatio * 100;
      this.progressDiv.style.width = playProgressPercent + '%';
    }.bind(this);

    this.getPlayerWidth = function() {
      var boundingRect = this.player.el().getBoundingClientRect() || {};

      return parseInt(boundingRect.width, 10) || this.player.width();
    }.bind(this);

    this.getPlayerHeight = function() {
      var boundingRect = this.player.el().getBoundingClientRect() || {};

      return parseInt(boundingRect.height, 10) || this.player.height();
    }.bind(this);

    /**
     * Hide the ad controls.
     * @private
     */
    var hideAdControls_ = function() {
      this.controlsDiv.style.height = '14px';
      this.playPauseDiv.style.display = 'none';
      this.muteDiv.style.display = 'none';
      this.sliderDiv.style.display = 'none';
      this.fullscreenDiv.style.display = 'none';
    }.bind(this);

    /**
     * Shows ad controls on mouseover.
     * @private
     */
    var showAdControls_ = bind(this);

    /**
     * Show pause and hide play button
     */
    var showPauseButton = function() {
      addClass_(this.playPauseDiv, 'ima-paused');
      removeClass_(this.playPauseDiv, 'ima-playing');
    }.bind(this);

    /**
     * Show play and hide pause button
     */
    var showPlayButton = bind(this);

    /**
     * Listener for clicks on the play/pause button during ad playback.
     * @private
     */
    var onAdPlayPauseClick_ = function() {
      if (this.adPlaying) {
        showPauseButton();
        this.adsManager.pause();
        this.adPlaying = false;
      } else {
        showPlayButton();
        this.adsManager.resume();
        this.adPlaying = true;
      }
    }.bind(this);

    /**
     * Listener for clicks on the mute button during ad playback.
     * @private
     */
    var onAdMuteClick_ = function() {
      if (this.adMuted) {
        addClass_(this.muteDiv, 'ima-non-muted');
        removeClass_(this.muteDiv, 'ima-muted');
        this.adsManager.setVolume(1);
        // Bubble down to content player
        this.player.muted(false);
        this.adMuted = false;
        this.sliderLevelDiv.style.width = this.player.volume() * 100 + "%";
      } else {
        addClass_(this.muteDiv, 'ima-muted');
        removeClass_(this.muteDiv, 'ima-non-muted');
        this.adsManager.setVolume(0);
        // Bubble down to content player
        this.player.muted(true);
        this.adMuted = true;
        this.sliderLevelDiv.style.width = "0%";
      }
    }.bind(this);

    /* Listener for mouse down events during ad playback. Used for volume.
     * @private
     */
    var onAdVolumeSliderMouseDown_ = 

    /* Mouse movement listener used for volume slider.
     * @private
     */
    var onMouseMove_ = 

    /* Mouse release listener used for volume slider.
     * @private
     */
    var onMouseUp_ = 

    /* Utility function to set volume and associated UI
     * @private
     */
    var setVolumeSlider_ = function(event) {
      var percent =
          (event.clientX - this.sliderDiv.getBoundingClientRect().left) /
              this.sliderDiv.offsetWidth;
      percent *= 100;
      //Bounds value 0-100 if mouse is outside slider region.
      percent = Math.min(Math.max(percent, 0), 100);
      this.sliderLevelDiv.style.width = percent + "%";
      this.player.volume(percent / 100); //0-1
      this.adsManager.setVolume(percent / 100);
      if (this.player.volume() == 0) {
        addClass_(this.muteDiv, 'ima-muted');
        removeClass_(this.muteDiv, 'ima-non-muted');
        this.player.muted(true);
        this.adMuted = true;
      }
      else
      {
        addClass_(this.muteDiv, 'ima-non-muted');
        removeClass_(this.muteDiv, 'ima-muted');
        this.player.muted(false);
        this.adMuted = false;
      }
    }.bind(this);

    /**
     * Listener for clicks on the fullscreen button during ad playback.
     * @private
     */
    var onAdFullscreenClick_ = bind(this);

    /**
     * Listens for the video.js player to change its fullscreen status. This
     * keeps the fullscreen-ness of the AdContainer in sync with the player.
     * @private
     */
    var onFullscreenChange_ = function() {
      if (this.player.isFullscreen()) {
        addClass_(this.fullscreenDiv, 'ima-fullscreen');
        removeClass_(this.fullscreenDiv, 'ima-non-fullscreen');
        if (this.adsManager) {
          this.adsManager.resize(
              window.screen.width,
              window.screen.height,
              google.ima.ViewMode.FULLSCREEN);
        }
      } else {
        addClass_(this.fullscreenDiv, 'ima-non-fullscreen');
        removeClass_(this.fullscreenDiv, 'ima-fullscreen');
        if (this.adsManager) {
          this.adsManager.resize(
              this.getPlayerWidth(),
              this.getPlayerHeight(),
              google.ima.ViewMode.NORMAL);
        }
      }
    }.bind(this);

    /**
     * Listens for the video.js player to change its volume. This keeps the ad
     * volume in sync with the content volume if the volume of the player is
     * changed while content is playing
     * @private
     */
    var onVolumeChange_ = function() {
      var newVolume = this.player.muted() ? 0 : this.player.volume();
      if (this.adsManager) {
        this.adsManager.setVolume(newVolume);
      }
      // Update UI
      if (newVolume == 0) {
        this.adMuted = true;
        addClass_(this.muteDiv, 'ima-muted');
        removeClass_(this.muteDiv, 'ima-non-muted');
        this.sliderLevelDiv.style.width = '0%';
      } else {
        this.adMuted = false;
        addClass_(this.muteDiv, 'ima-non-muted');
        removeClass_(this.muteDiv, 'ima-muted');
        this.sliderLevelDiv.style.width = newVolume * 100 + '%';
      }
    }.bind(this);

    /**
     * Seeks content to 00:00:00. This is used as an event handler for the
     * loadedmetadata event, since seeking is not possible until that event has
     * fired.
     * @private
     */
    var seekContentToZero_ = function() {
      this.player.off('loadedmetadata', seekContentToZero_);
      this.player.currentTime(0);
    }.bind(this);

    /**
     * Seeks content to 00:00:00 and starts playback. This is used as an event
     * handler for the loadedmetadata event, since seeking is not possible until
     * that event has fired.
     * @private
     */
    var playContentFromZero_ = function() {
      this.player.off('loadedmetadata', playContentFromZero_);
      this.player.currentTime(0);
      this.player.play();
    }.bind(this);

    /**
     * Destroys the AdsManager, sets it to null, and calls contentComplete to
     * reset correlators. Once this is done it requests ads again to keep the
     * inventory available.
     * @private
     */
    var resetIMA_ = function() {
      this.adsActive = false;
      this.adPlaying = false;
      this.player.on('ended', this.localContentEndedListener);
      this.vjsControls.show();
      this.player.ads.endLinearAdMode();
      if (this.adTrackingTimer) {
        // If this is called while an ad is playing, stop trying to get that
        // ad's current time.
        clearInterval(this.adTrackingTimer);
      }
      // Reset the content time we give the SDK. Fixes an issue where requesting
      // VMAP followed by VMAP would play the second mid-rolls as pre-rolls if
      // the first playthrough of the video passed the second response's
      // mid-roll time.
      this.contentPlayheadTracker.currentTime = 0;
      if (this.adsManager) {
        this.adsManager.destroy();
        this.adsManager = null;
      }
      if (this.adsLoader && !this.contentComplete) {
        this.adsLoader.contentComplete();
      }
      this.contentComplete = false;
      this.allAdsCompleted = false;
    }.bind(this);

    /**
     * Ads an EventListener to the AdsManager. For a list of available events,
     * see
     * https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdEvent.Type
     * @param {google.ima.AdEvent.Type} event The AdEvent.Type for which to listen.
     * @param {function} callback The method to call when the event is fired.
     */
    this.addEventListener = bind(this);

    /**
     * Returns the instance of the AdsManager.
     * @return {google.ima.AdsManager} The AdsManager being used by the plugin.
     */
    this.getAdsManager = function() {
      return this.adsManager;
    }.bind(this);

    /**
     * DEPRECATED: Use setContentWithAdTag.
     * Sets the content of the video player. You should use this method instead
     * of setting the content src directly to ensure the proper ad tag is
     * requested when the video content is loaded.
     * @param {?string} contentSrc The URI for the content to be played. Leave
     *     blank to use the existing content.
     * @param {?string} adTag The ad tag to be requested when the content loads.
     *     Leave blank to use the existing ad tag.
     * @param {?boolean} playOnLoad True to play the content once it has loaded,
     *     false to only load the content but not start playback.
     */
    this.setContent = function(contentSrc, adTag, playOnLoad) {
      window.console.log(
          'WARNING: player.ima.setContent is deprecated. Use ' +
              'player.ima.setContentWithAdTag instead.');
      this.setContentWithAdTag(contentSrc, adTag, playOnLoad);
    }.bind(this);

    /**
     * Sets the content of the video player. You should use this method instead
     * of setting the content src directly to ensure the proper ad tag is
     * requested when the video content is loaded.
     * @param {?string} contentSrc The URI for the content to be played. Leave
     *     blank to use the existing content.
     * @param {?string} adTag The ad tag to be requested when the content loads.
     *     Leave blank to use the existing ad tag.
     * @param {?boolean} playOnLoad True to play the content once it has loaded,
     *     false to only load the content but not start playback.
     */
    this.setContentWithAdTag = function(contentSrc, adTag, playOnLoad) {
      resetIMA_();
      this.settings.adTagUrl = adTag ? adTag : this.settings.adTagUrl;
      changeSource_(contentSrc, playOnLoad);
    }.bind(this);

    /**
     * Sets the content of the video player. You should use this method instead
     * of setting the content src directly to ensure the proper ads response is
     * used when the video content is loaded.
     * @param {?string} contentSrc The URI for the content to be played. Leave
     *     blank to use the existing content.
     * @param {?string} adsResponse The ads response to be requested when the
     *     content loads. Leave blank to use the existing ads response.
     * @param {?boolean} playOnLoad True to play the content once it has loaded,
     *     false to only load the content but not start playback.
     */
    this.setContentWithAdsResponse = function(contentSrc, adsResponse, playOnLoad) {
      resetIMA_();
      this.settings.adsResponse = adsResponse ? adsResponse : this.settings.adsResponse;
      changeSource_(contentSrc, playOnLoad);
    }.bind(this);

    /**
     * Changes the ad tag. You will need to call requestAds after this method
     * for the new ads to be requested.
     * @param {?string} adTag The ad tag to be requested the next time requestAds
     *     is called.
     */
    this.changeAdTag = bind(this);

    /**
     * Changes the player source.
     * @param {?string} contentSrc The URI for the content to be played. Leave
     *     blank to use the existing content.
     * @param {?boolean} playOnLoad True to play the content once it has loaded,
     *     false to only load the content but not start playback.
     * @private
     */
    var changeSource_ = function(contentSrc, playOnLoad) {
      // Only try to pause the player when initialised with a source already
      if (!!this.player.currentSrc()) {
        this.player.currentTime(0);
        this.player.pause();
      }
      if (contentSrc) {
        this.player.src(contentSrc);
      }
      if (playOnLoad) {
        this.player.on('loadedmetadata', playContentFromZero_);
      } else {
        this.player.on('loadedmetadata', seekContentToZero_);
      }
    }.bind(this);

    /**
     * Adds a listener for the 'ended' event of the video player. This should be
     * used instead of setting an 'ended' listener directly to ensure that the
     * ima can do proper cleanup of the SDK before other event listeners
     * are called.
     * @param {function} listener The listener to be called when content completes.
     */
    this.addContentEndedListener = function(listener) {
      this.contentEndedListeners.push(listener);
    }.bind(this);

    /**
     * Adds a listener that will be called when content and all ads have
     * finished playing.
     * @param {function} listener The listener to be called when content and ads complete.
     */
    this.addContentAndAdsEndedListener = bind(this);

    /**
     * Sets the listener to be called to trigger manual ad break playback.
     * @param {function} listener The listener to be called to trigger manual ad break playback.
     */
    this.setAdBreakReadyListener = bind(this);

    /**
     * Pauses the ad.
     */
    this.pauseAd = function() {
      if (this.adsActive && this.adPlaying) {
        showPauseButton();
        this.adsManager.pause();
        this.adPlaying = false;
      }
    }.bind(this);

    /**
     * Resumes the ad.
     */
    this.resumeAd = function() {
      if (this.adsActive && !this.adPlaying) {
        showPlayButton();
        this.adsManager.resume();
        this.adPlaying = true;
      }
    }.bind(this);

    /**
     * Set up intervals to check for seeking and update current video time.
     * @private
     */
    var setUpPlayerIntervals_ = function() {
      this.updateTimeIntervalHandle =
          setInterval(updateCurrentTime_, this.seekCheckInterval);
      this.seekCheckIntervalHandle =
          setInterval(checkForSeeking_, this.seekCheckInterval);
      this.resizeCheckIntervalHandle =
          setInterval(checkForResize_, this.resizeCheckInterval);
    }.bind(this);

    /**
     * Updates the current time of the video
     * @private
     */
    var updateCurrentTime_ = bind(this);

    /**
     * Detects when the user is seeking through a video.
     * This is used to prevent mid-rolls from playing while a user is seeking.
     *
     * There *is* a seeking property of the HTML5 video element, but it's not
     * properly implemented on all platforms (e.g. mobile safari), so we have to
     * check ourselves to be sure.
     *
     * @private
     */
    var checkForSeeking_ = bind(this);

    /**
     * Detects when the player is resized (for fluid support) and resizes the
     * ads manager to match.
     *
     * @private
     */
    var checkForResize_ = function() {
      var currentWidth = this.getPlayerWidth();
      var currentHeight = this.getPlayerHeight();

      if (this.adsManager && (currentWidth != this.adsManagerDimensions.width ||
          currentHeight != this.adsManagerDimensions.height)) {
        this.adsManagerDimensions.width = currentWidth;
        this.adsManagerDimensions.height = currentHeight;
        this.adsManager.resize(currentWidth, currentHeight, google.ima.ViewMode.NORMAL);
      }
    }.bind(this);

    /**
     * Changes the flag to show or hide the ad countdown timer.
     *
     * @param {boolean} showCountdownIn Show or hide the countdown timer.
     */
    this.setShowCountdown = bind(this);

    /**
     * Current plugin version.
     */
    this.VERSION = '0.7.0';

    /**
     * Stores user-provided settings.
     */
    this.settings;

    /**
     * Used to prefix videojs ima
     */
    this.controlPrefix;

    /**
     * Video element playing content.
     */
    this.contentPlayer;

    /**
     * Boolean flag to show or hide the ad countdown timer.
     */
    this.showCountdown;

    /**
     * Boolena flag to enable manual ad break playback.
     */
    this.autoPlayAdBreaks;

    /**
     * Video.js control bar.
     */
    this.vjsControls;

    /**
     * Div used as an ad container.
     */
    this.adContainerDiv;

    /**
     * Div used to display ad controls.
     */
    this.controlsDiv;

    /**
     * Div used to display ad countdown timer.
     */
    this.countdownDiv;

    /**
     * Div used to display add seek bar.
     */
    this.seekBarDiv;

    /**
     * Div used to display ad progress (in seek bar).
     */
    this.progressDiv;

    /**
     * Div used to display ad play/pause button.
     */
    this.playPauseDiv;

    /**
     * Div used to display ad mute button.
     */
    this.muteDiv;

    /**
     * Div used by the volume slider.
     */
    this.sliderDiv;

    /**
     * Volume slider level visuals
     */
    this.sliderLevelDiv;

    /**
     * Div used to display ad fullscreen button.
     */
    this.fullscreenDiv;

    /**
     * IMA SDK AdDisplayContainer.
     */
    this.adDisplayContainer;

    /**
     * True if the AdDisplayContainer has been initialized. False otherwise.
     */
    this.adDisplayContainerInitialized = false;

    /**
     * IMA SDK AdsLoader
     */
    this.adsLoader;

    /**
     * IMA SDK AdsManager
     */
    this.adsManager;

    /**
     * IMA SDK AdsRenderingSettings.
     */
    this.adsRenderingSettings = null;

    /**
     * Ad tag URL. Should return VAST, VMAP, or ad rules.
     */
    this.adTagUrl;

    /**
     * VAST, VMAP, or ad rules response. Used in lieu of fetching a response
     * from an ad tag URL.
     */
    this.adsResponse;

    /**
     * Current IMA SDK Ad.
     */
    this.currentAd;

    /**
     * Timer used to track content progress.
     */
    this.contentTrackingTimer;

    /**
     * Timer used to track ad progress.
     */
    this.adTrackingTimer;

    /**
     * True if ads are currently displayed, false otherwise.
     * True regardless of ad pause state if an ad is currently being displayed.
     */
    this.adsActive = false;

    /**
     * True if ad is currently playing, false if ad is paused or ads are not
     * currently displayed.
     */
    this.adPlaying = false;

    /**
     * True if the ad is muted, false otherwise.
     */
    this.adMuted = false;

    /**
     * True if our content video has completed, false otherwise.
     */
    this.contentComplete = false;

    /**
     * True if ALL_ADS_COMPLETED has fired, false until then.
     */
     this.allAdsCompleted = false;

    /**
     * Handle to interval that repeatedly updates current time.
     */
    this.updateTimeIntervalHandle;

    /**
     * Handle to interval that repeatedly checks for seeking.
     */
    this.seekCheckIntervalHandle;

    /**
     * Interval (ms) on which to check if the user is seeking through the
     * content.
     */
    this.seekCheckInterval = 1000;

    /**
     * Handle to interval that repeatedly checks for player resize.
     */
    this.resizeCheckIntervalHandle;

    /**
     * Interval (ms) to check for player resize for fluid support.
     */
    this.resizeCheckInterval = 250;

    /**
     * Threshold by which to judge user seeking. We check every 1000 ms to see
     * if the user is seeking. In order for us to decide that they are *not*
     * seeking, the content video playhead must only change by 900-1100 ms
     * between checks. Any greater change and we assume the user is seeking
     * through the video.
     */
    this.seekThreshold = 100;

    /**
     * Whether or not we are running on a mobile platform.
     */
    this.isMobile = (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i));

    /**
     * Stores data for the content playhead tracker.
     */
    this.contentPlayheadTracker = {
      currentTime: 0,
      previousTime: 0,
      seeking: false,
      duration: 0
    };

    /**
     * Stores data for the ad playhead tracker.
     */
    this.adPlayheadTracker = {
      currentTime: 0,
      duration: 0,
      isPod: false,
      adPosition: 0,
      totalAds: 0
    };

    /**
     * Stores the dimensions for the ads manager.
     */
    this.adsManagerDimensions = {
      width: 0,
      height: 0
    };

    /**
     * Content ended listeners passed by the publisher to the plugin. Publishers
     * should allow the plugin to handle content ended to ensure proper support
     * of custom ad playback.
     */
    this.contentEndedListeners = [];

    /**
     * Content and ads ended listeners passed by the publisher to the plugin.
     * These will be called when the plugin detects that content *and all
     * ads* have completed. This differs from the contentEndedListeners in that
     * contentEndedListeners will fire between content ending and a post-roll
     * playing, whereas the contentAndAdsEndedListeners will fire after the
     * post-roll completes.
     */
    this.contentAndAdsEndedListeners = [];

     /**
      * Listener to be called to trigger manual ad break playback.
      */
    this.adBreakReadyListener = undefined;

    /**
     * Stores the content source so we can re-populate it manually after a
     * post-roll on iOS.
     */
    this.contentSource = '';

    /**
     * Stores the content source type so we can re-populate it manually after a
     * post-roll.
     */
    this.contentSourceType = '';

    /**
     * Local content ended listener for contentComplete.
     */
    this.localContentEndedListener = function() {
      if (this.adsLoader && !this.contentComplete) {
        this.adsLoader.contentComplete();
        this.contentComplete = true;
      }
      for (var index in this.contentEndedListeners) {
        this.contentEndedListeners[index]();
      }
      if (this.allAdsCompleted) {
        for (var index in this.contentAndAdsEndedListeners) {
          this.contentAndAdsEndedListeners[index]();
        }
      }
      clearInterval(this.updateTimeIntervalHandle);
      clearInterval(this.seekCheckIntervalHandle);
      clearInterval(this.resizeCheckIntervalHandle);
      if(this.player.el()) {
        this.player.one('play', setUpPlayerIntervals_);
      }
    }.bind(this);

    this.playerDisposedListener = function(){
      this.contentEndedListeners = [];
      this.contentAndAdsEndedListeners = [];
      this.contentComplete = true;
      this.player.off('ended', this.localContentEndedListener);

      // Bug fix: https://github.com/googleads/videojs-ima/issues/306
      if (this.player.ads.adTimeoutTimeout) {
        clearTimeout(this.player.ads.adTimeoutTimeout);
      }

      var intervalsToClear = [this.updateTimeIntervalHandle, this.seekCheckIntervalHandle,
        this.adTrackingTimer, this.resizeCheckIntervalHandle];
      for (var index in intervalsToClear) {
        var interval = intervalsToClear[index];
        if (interval) {
          clearInterval(interval);
        }
      }
      if (this.adsManager) {
        this.adsManager.destroy();
        this.adsManager = null;
      }
    }.bind(this);

    this.settings = extend({}, ima_defaults, options || {});

    // Currently this isn't used but I can see it being needed in the future, so
    // to avoid implementation problems with later updates I'm requiring it.
    if (!this.settings['id']) {
      window.console.log('Error: must provide id of video.js div');
      return;
    }

    this.controlPrefix = (this.settings.id + '_') || '';

    // Get contentPlayer (tech agnostic)
    this.contentPlayer = document.getElementById(this.settings.id).getElementsByClassName('vjs-tech')[0];

    // Detect inline options
    if(this.contentPlayer.hasAttribute('autoplay')){
      this.settings['adWillAutoPlay'] = this.settings['adWillAutoPlay'] || true;
    }

    // Default showing countdown timer to true.
    this.showCountdown = true;
    if (this.settings['showCountdown'] == false) {
      this.showCountdown = false;
    }

    this.autoPlayAdBreaks = true;
    if (this.settings['autoPlayAdBreaks'] == false) {
      this.autoPlayAdBreaks = false;
    }

    player.one('play', setUpPlayerIntervals_);

    player.on('ended', this.localContentEndedListener);
    player.on('dispose', this.playerDisposedListener);

    var contrib_ads_defaults = {
      debug: this.settings.debug,
      timeout: this.settings.timeout,
      prerollTimeout: this.settings.prerollTimeout
    };

    var ads_plugin_settings =
        extend({}, contrib_ads_defaults, options['contribAdsSettings'] || {});

    player.ads(ads_plugin_settings);

    this.adsRenderingSettings = new google.ima.AdsRenderingSettings();
    this.adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
    if (this.settings['adsRenderingSettings']) {
      for (var setting in this.settings['adsRenderingSettings']) {
        this.adsRenderingSettings[setting] =
            this.settings['adsRenderingSettings'][setting];
      }
    }

    if (this.settings['locale']) {
      google.ima.settings.setLocale(this.settings['locale']);
    }

    if (this.settings['disableFlashAds']) {
      google.ima.settings.setDisableFlashAds(this.settings['disableFlashAds']);
    }

    if (this.settings['disableCustomPlaybackForIOS10Plus']) {
      google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.settings['disableCustomPlaybackForIOS10Plus']);
    }

    createAdContainer_();
    this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);

    this.adsLoader.getSettings().setVpaidMode(
        google.ima.ImaSdkSettings.VpaidMode.ENABLED);
    if (this.settings.vpaidAllowed == false) {
      this.adsLoader.getSettings().setVpaidMode(
          google.ima.ImaSdkSettings.VpaidMode.DISABLED);
    }
    if (this.settings.vpaidMode) {
      this.adsLoader.getSettings().setVpaidMode(this.settings.vpaidMode);
    }

    if (this.settings.locale) {
      this.adsLoader.getSettings().setLocale(this.settings.locale);
    }

    if (this.settings.numRedirects) {
      this.adsLoader.getSettings().setNumRedirects(this.settings.numRedirects);
    }

    this.adsLoader.getSettings().setPlayerType('videojs-ima');
    this.adsLoader.getSettings().setPlayerVersion(this.VERSION);
    this.adsLoader.getSettings().setAutoPlayAdBreaks(this.autoPlayAdBreaks);

    this.adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      onAdsManagerLoaded_,
      false);
    this.adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      onAdsLoaderError_,
      false);

    if (!readyCallback) {
      readyCallback = this.startFromReadyCallback;
    }
    player.on('readyforpreroll', readyCallback);
    player.ready(;
  };

  // Cross-compatibility for Video.js 5 and 6.
  var registerPlugin = videojs.registerPlugin || videojs.plugin;
  registerPlugin('ima', init);
});

define("videojs.ima", function(){});

/*
* videojs-ga - v0.4.2 - 2015-02-06
* Copyright (c) 2015 Michael Bensoussan
* Licensed MIT
*/
(function() {
  var __indexOf = [].indexOf || 

  videojs.plugin('ga', function(options) {
    var dataSetupOptions, defaultsEventsToTrack, end, error, trackerName, eventCategory, eventLabel, eventsToTrack, fullscreen, loaded, parsedOptions, pause, percentsAlreadyTracked, percentsPlayedInterval, play, resize, seekEnd, seekStart, seeking, sendbeacon, timeupdate, volumeChange;
    if (options == null) {
      options = {};
    }
    dataSetupOptions = {};
    if (this.options()["data-setup"]) {
      parsedOptions = JSON.parse(this.options()["data-setup"]);
      if (parsedOptions.ga) {
        dataSetupOptions = parsedOptions.ga;
      }
    }
    defaultsEventsToTrack = ['loaded', 'percentsPlayed', 'start', 'end', 'seek', 'play', 'pause', 'resize', 'volumeChange', 'error', 'fullscreen'];
    eventsToTrack = options.eventsToTrack || dataSetupOptions.eventsToTrack || defaultsEventsToTrack;
    percentsPlayedInterval = options.percentsPlayedInterval || dataSetupOptions.percentsPlayedInterval || 10;
    eventCategory = options.eventCategory || dataSetupOptions.eventCategory || 'Video';
    eventLabel = options.eventLabel || dataSetupOptions.eventLabel;
    trackerName = options.trackerName || dataSetupOptions.trackerName;
    options.debug = options.debug || false;
    percentsAlreadyTracked = [];
    seekStart = seekEnd = 0;
    seeking = false;
    loaded = 
    timeupdate = function() {
      var currentTime, duration, percent, percentPlayed, _i;
      currentTime = Math.round(this.currentTime());
      duration = Math.round(this.duration());
      percentPlayed = Math.round(currentTime / duration * 100);
      for (percent = _i = 0; _i <= 99; percent = _i += percentsPlayedInterval) {
        if (percentPlayed >= percent && __indexOf.call(percentsAlreadyTracked, percent) < 0) {
          if (__indexOf.call(eventsToTrack, "start") >= 0 && percent === 0 && percentPlayed > 0) {
            sendbeacon('start', true);
          } else if (__indexOf.call(eventsToTrack, "percentsPlayed") >= 0 && percentPlayed !== 0) {
            sendbeacon('percent played ' + percent, true);
          }
          if (percentPlayed > 0) {
            percentsAlreadyTracked.push(percent);
          }
        }
      }
      if (__indexOf.call(eventsToTrack, "seek") >= 0) {
        seekStart = seekEnd;
        seekEnd = currentTime;
        if (Math.abs(seekStart - seekEnd) > 1) {
          seeking = true;
          sendbeacon('seek start', false, seekStart);
          sendbeacon('seek end', false, seekEnd);
        }
      }
    };
    end = 
    play = 
    pause = 
    volumeChange = 
    resize = 
    error = 
    fullscreen = 
    sendbeacon = function(action, nonInteraction, value) {
      if (window.ga) {
        var send = (trackerName ? trackerName + "." : "") + "send";

        ga(send, 'event', {
          'eventCategory': eventCategory,
          'eventAction': action,
          'eventLabel': eventLabel,
          'eventValue': value,
          'nonInteraction': nonInteraction
        });
      } else if (window._gaq) {
        _gaq.push(['_trackEvent', eventCategory, action, eventLabel, value, nonInteraction]);
      } else if (options.debug) {
        console.log("Google Analytics not detected");
      }
    };
    this.ready(;
    return {
      'sendbeacon': sendbeacon
    };
  });

}).call(this);

define("videojs.ga", function(){});

/*! URI.js v1.14.0 http://medialize.github.io/URI.js/ */
/* build contains: URI.js */
((this, function (q, w, v, p) {
    var C = p && p.URI; e.version = "1.14.0"; var d = e.prototype, t = Object.prototype.hasOwnProperty; e._parts =  e.duplicateQueryParameters = !1; e.escapeQuerySpace = !0; e.protocol_expression =
    /^[a-z][a-z0-9.+-]*$/i; e.idn_expression = /[^a-z0-9\.-]/i; e.punycode_expression = /(xn--)/i; e.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/; e.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    e.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig; e.findUri = { start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi, end: /[\s\r\n]|$/, trim: /[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/ }; e.defaultPorts = { http: "80", https: "443", ftp: "21", gopher: "70", ws: "80", wss: "443" }; e.invalid_hostname_characters =
    /[^a-zA-Z0-9\.-]/; e.domAttributes = { a: "href", blockquote: "cite", link: "href", base: "href", script: "src", form: "action", img: "src", area: "href", iframe: "src", embed: "src", source: "src", track: "src", input: "src", audio: "src", video: "src" }; e.getDomAttribute =  e.encode = z; e.decode = decodeURIComponent; e.iso8859 = function () { e.encode = escape; e.decode = unescape }; e.unicode =  e.characters = {
        pathname: { encode: { expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig, map: { "%24": "$", "%26": "&", "%2B": "+", "%2C": ",", "%3B": ";", "%3D": "=", "%3A": ":", "%40": "@" } }, decode: { expression: /[\/\?#]/g, map: { "/": "%2F", "?": "%3F", "#": "%23" } } }, reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig, map: {
                    "%3A": ":", "%2F": "/", "%3F": "?", "%23": "#", "%5B": "[", "%5D": "]", "%40": "@", "%21": "!", "%24": "$", "%26": "&", "%27": "'", "%28": "(", "%29": ")", "%2A": "*", "%2B": "+", "%2C": ",",
                    "%3B": ";", "%3D": "="
                }
            }
        }
    }; e.encodeQuery =  e.decodeQuery =  e.recodePath =  e.decodePath =  var r = { encode: "encode", decode: "decode" }, m, u =  for (m in r) e[m + "PathSegment"] = u("pathname", r[m]); e.encodeReserved = u("reserved", "encode"); e.parse =  e.parseHost = function (a, b) {
        var c = a.indexOf("/"), e; -1 === c && (c = a.length); "[" === a.charAt(0) ? (e = a.indexOf("]"), b.hostname = a.substring(1, e) || null, b.port = a.substring(e +
        2, c) || null, "/" === b.port && (b.port = null)) : a.indexOf(":") !== a.lastIndexOf(":") ? (b.hostname = a.substring(0, c) || null, b.port = null) : (e = a.substring(0, c).split(":"), b.hostname = e[0] || null, b.port = e[1] || null); b.hostname && "/" !== a.substring(c).charAt(0) && (c++, a = "/" + a); return a.substring(c) || "/"
    }; e.parseAuthority =  e.parseUserinfo =  e.parseQuery = function (a, b) { if (!a) return {}; a = a.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""); if (!a) return {}; for (var c = {}, f = a.split("&"), g = f.length, d, h, n = 0; n < g; n++) d = f[n].split("="), h = e.decodeQuery(d.shift(), b), d = d.length ? e.decodeQuery(d.join("="), b) : null, c[h] ? ("string" === typeof c[h] && (c[h] = [c[h]]), c[h].push(d)) : c[h] = d; return c }; e.build =  e.buildHost =  e.buildAuthority =
     e.buildUserinfo =  e.buildQuery = 
    e.buildQueryParameter =  e.addQuery = function (a, b, c) { if ("object" === typeof b) for (var f in b) t.call(b, f) && e.addQuery(a, f, b[f]); else if ("string" === typeof b) void 0 === a[b] ? a[b] = c : ("string" === typeof a[b] && (a[b] = [a[b]]), l(c) || (c = [c]), a[b] = a[b].concat(c)); else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter"); }; e.removeQuery = function (a, b, c) {
        var f; if (l(b)) for (c = 0, f = b.length; c < f; c++) a[b[c]] = void 0;
        else if ("object" === typeof b) for (f in b) t.call(b, f) && e.removeQuery(a, f, b[f]); else if ("string" === typeof b) if (void 0 !== c) if (a[b] === c) a[b] = void 0; else { if (l(a[b])) { f = a[b]; var g = {}, d, h; if (l(c)) for (d = 0, h = c.length; d < h; d++) g[c[d]] = !0; else g[c] = !0; d = 0; for (h = f.length; d < h; d++) void 0 !== g[f[d]] && (f.splice(d, 1), h--, d--); a[b] = f } } else a[b] = void 0; else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
    }; e.hasQuery = function (a, b, c, f) {
        if ("object" === typeof b) {
            for (var d in b) if (t.call(b,
            d) && !e.hasQuery(a, d, b[d])) return !1; return !0
        } if ("string" !== typeof b) throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter"); switch (y(c)) {
            case "Undefined": return b in a; case "Boolean": return a = Boolean(l(a[b]) ? a[b].length : a[b]), c === a; case "Function": return !!c(a[b], b, a); case "Array": return l(a[b]) ? (f ? x : A)(a[b], c) : !1; case "RegExp": return l(a[b]) ? f ? x(a[b], c) : !1 : Boolean(a[b] && a[b].match(c)); case "Number": c = String(c); case "String": return l(a[b]) ? f ? x(a[b], c) : !1 : a[b] === c; default: throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");
        }
    }; e.commonPath =  e.withinString =  e.ensureValidHostname =  e.noConflict =  d.build =  d.clone =  d.valueOf = d.toString =  r = { protocol: "protocol", username: "username", password: "password", hostname: "hostname", port: "port" }; u = function (a) { return }; for (m in r) d[m] = u(r[m]); r = { query: "?", fragment: "#" }; u = function (a,
    b) { return }; for (m in r) d[m] = u(m, r[m]); r = { search: ["?", "query"], hash: ["#", "fragment"] }; u = function (a, b) { return function (c, e) { var d = this[a](c, e); return "string" === typeof d && d.length ? b + d : d } }; for (m in r) d[m] = u(r[m][1], r[m][0]); d.pathname = function (a, b) {
        if (void 0 === a || !0 === a) { var c = this._parts.path || (this._parts.hostname ? "/" : ""); return a ? e.decodePath(c) : c } this._parts.path =
        a ? e.recodePath(a) : "/"; this.build(!b); return this
    }; d.path = d.pathname; d.href = function (a, b) {
        var c; if (void 0 === a) return this.toString(); this._string = ""; this._parts = e._parts(); var f = a instanceof e, d = "object" === typeof a && (a.hostname || a.path || a.pathname); a.nodeName && (d = e.getDomAttribute(a), a = a[d] || "", d = !1); !f && d && void 0 !== a.pathname && (a = a.toString()); if ("string" === typeof a) this._parts = e.parse(a, this._parts); else if (f || d) for (c in f = f ? a._parts : a, f) t.call(this._parts, c) && (this._parts[c] = f[c]); else throw new TypeError("invalid input");
        this.build(!b); return this
    }; d.is =  var D = d.protocol, E = d.port, F = d.hostname; d.protocol =  d.scheme = d.protocol; d.port =  d.hostname =  d.host = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this;
        if (void 0 === a) return this._parts.hostname ? e.buildHost(this._parts) : ""; e.parseHost(a, this._parts); this.build(!b); return this
    }; d.authority =  d.userinfo = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a) {
            if (!this._parts.username) return ""; var c = e.buildUserinfo(this._parts); return c.substring(0,
            c.length - 1)
        } "@" !== a[a.length - 1] && (a += "@"); e.parseUserinfo(a, this._parts); this.build(!b); return this
    }; d.resource =  d.subdomain =  d.domain =  d.tld =  d.directory =  d.filename =  d.suffix =  d.segment = function (a, b, c) {
        var e = this._parts.urn ? ":" : "/", d = this.path(), k = "/" === d.substring(0, 1), d = d.split(e); void 0 !==
        a && "number" !== typeof a && (c = b, b = a, a = void 0); if (void 0 !== a && "number" !== typeof a) throw Error('Bad segment "' + a + '", must be 0-based integer'); k && d.shift(); 0 > a && (a = Math.max(d.length + a, 0)); if (void 0 === b) return void 0 === a ? d : d[a]; if (null === a || void 0 === d[a]) if (l(b)) { d = []; a = 0; for (var h = b.length; a < h; a++) if (b[a].length || d.length && d[d.length - 1].length) d.length && !d[d.length - 1].length && d.pop(), d.push(b[a]) } else { if (b || "string" === typeof b) "" === d[d.length - 1] ? d[d.length - 1] = b : d.push(b) } else b || "string" === typeof b && b.length ?
        d[a] = b : d.splice(a, 1); k && d.unshift(""); return this.path(d.join(e), c)
    }; d.segmentCoded = function (a, b, c) { var d, g; "number" !== typeof a && (c = b, b = a, a = void 0); if (void 0 === b) { a = this.segment(a, b, c); if (l(a)) for (d = 0, g = a.length; d < g; d++) a[d] = e.decode(a[d]); else a = void 0 !== a ? e.decode(a) : void 0; return a } if (l(b)) for (d = 0, g = b.length; d < g; d++) b[d] = e.decode(b[d]); else b = "string" === typeof b ? e.encode(b) : b; return this.segment(a, b, c) }; var G = d.query; d.query =  d.setQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("object" === typeof a) for (var g in a) t.call(a, g) && (d[g] = a[g]); else if ("string" === typeof a) d[a] = void 0 !== b ? b : null; else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter"); this._parts.query = e.buildQuery(d, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace); "string" !== typeof a && (c = b); this.build(!c); return this
    }; d.addQuery =  d.removeQuery =  d.hasQuery =  d.setSearch = d.setQuery; d.addSearch = d.addQuery; d.removeSearch = d.removeQuery; d.hasSearch = d.hasQuery; d.normalize =  d.normalizeProtocol =  d.normalizeHostname =  d.normalizePort =  d.normalizePath =
    function (a) {
        if (this._parts.urn || !this._parts.path || "/" === this._parts.path) return this; var b, c = this._parts.path, d = "", g, k; "/" !== c.charAt(0) && (b = !0, c = "/" + c); c = c.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"); b && (d = c.substring(1).match(/^(\.\.\/)+/) || "") && (d = d[0]); for (; ;) { g = c.indexOf("/.."); if (-1 === g) break; else if (0 === g) { c = c.substring(3); continue } k = c.substring(0, g).lastIndexOf("/"); -1 === k && (k = g); c = c.substring(0, k) + c.substring(g + 3) } b && this.is("relative") && (c = d + c.substring(1)); c = e.recodePath(c);
        this._parts.path = c; this.build(!a); return this
    }; d.normalizePathname = d.normalizePath; d.normalizeQuery =  d.normalizeFragment =  d.normalizeSearch = d.normalizeQuery; d.normalizeHash = d.normalizeFragment; d.iso8859 = function () {
        var a =
        e.encode, b = e.decode; e.encode = escape; e.decode = decodeURIComponent; this.normalize(); e.encode = a; e.decode = b; return this
    }; d.unicode =  d.readable =  d.absoluteTo =  d.relativeTo = function (a) {
        var b = this.clone().normalize(), c, d, g, k; if (b._parts.urn) throw Error("URNs do not have any generally defined hierarchical components"); a = (new e(a)).normalize(); c = b._parts; d = a._parts; g = b.path(); k = a.path(); if ("/" !== g.charAt(0)) throw Error("URI is already relative"); if ("/" !== k.charAt(0)) throw Error("Cannot calculate a URI relative to another relative URI"); c.protocol === d.protocol && (c.protocol = null); if (c.username ===
        d.username && c.password === d.password && null === c.protocol && null === c.username && null === c.password && c.hostname === d.hostname && c.port === d.port) c.hostname = null, c.port = null; else return b.build(); if (g === k) return c.path = "", b.build(); a = e.commonPath(b.path(), a.path()); if (!a) return b.build(); d = d.path.substring(a.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../"); c.path = d + c.path.substring(a.length); return b.build()
    }; d.equals =  d.duplicateQueryParameters = function (a) { this._parts.duplicateQueryParameters = !!a; return this }; d.escapeQuerySpace =
     return e
});

define("URI", function(){});

define('sidearm.showcasePlayer',[
  "tsdist/cbs-video-wrapper",
  "jquery",
  "swfobject",
  "jwplayer",
  "modernizr",
  "sidearm.widget",
  "canvas",
  "videojs.imageColorToSliderBackground",
  "videojs.dimTheLights",
  "videojs.countdown",
  "videojs.endcard",
  "videojs.ads",
  "google-ima",
  "videojs.ima",
  "videojs.ga",
  "URI"
], function() {
  function SecondsToClock(seconds) {
    if (seconds < 0) return "";

    var minutesPart = Math.floor(seconds / 60).toString(),
      secondsPart = Math.floor(seconds % 60).toString();

    if (secondsPart.length < 2) {
      secondsPart = "0" + secondsPart;
    }

    return minutesPart + ":" + secondsPart;
  }

  $.widget("sidearm.showcasePlayer", $.sidearm.widget, {
    options: {
      controls: false
    },
    _create: 
    canPlay: $.noop,
    canFunction: $.noop,
    play: $.noop,
    stop: $.noop,
    hide: $.noop,
    pause: $.noop,
    seek: $.noop,
    hasOwnControls: false
  });

  $.widget("sidearm.showcaseIframePlayer", $.sidearm.showcasePlayer, {
    options: {},
    canPlay: 
    canFunction: function() {
      return true;
    },
    _createAndPlay: function(video) {
      this.iframe = $(video.formats.iframe)
        .width("100%")
        .height("100%")
        .hide()
        .on("load", 
        .appendTo(this.element);
    },
    play: function(video) {
      if (video) {
        this.hide();
        this._createAndPlay(video);
      }
    },
    stop: 
    hide: function() {
      if (this.iframe) this.iframe.remove();
    },
    hasOwnControls: true
  });

  $.widget("sidearm.showcaseCBSPlayer", $.sidearm.showcasePlayer, {
    options: {},
    _create: function() {
      var widget = this;

      if (!widget.canFunction()) {
        return;
      }

      $.sidearm.showcasePlayer.prototype._create.apply(this, arguments);
    },
    canPlay: function(video) {
      if (video.formats.youtube) return false;
      return (
        video.formats.MobileH264 || video.formats.prismId || !video.authorized
      );
    },
    canFunction: function() {
      return true;
    },
    hide: 
    unMute: 
    _createAndPlay: function(video, options) {
      options = options || {};
      
      var autoplay = options && options.autoplay === true && options.allowAutoplayMuted === true;
      var muted = autoplay;

      var widget = this;

      var poster = video.poster;

      var src = [];

      if (video.authorized === false) {
        allAccess.sessionDeferred.done(function(sessionObservable) {
          var resp = sessionObservable();
          var $unauthorized = $("<div>")
            .addClass(
              "sidearm-showcasePlayer-player video-js vjs-error vjs-sublime-skin vjs-paused vjs-controls-enabled vjs-user-inactive"
            )
            .append(
              $("<div class='vjs-poster' tabindex='-1'></div>").css(
                "background-image",
                "url(" + poster + ")"
              )
            )
            .append(
              $("<div class='vjs-error-display'></div>").append(
                resp == null
                  ? $(
                      "<div class='vjs-error-premium'><img src='/services/allaccess.ashx/logo'><br>This is premium content.<br><br></div>"
                    )
                      .append(
                        $(
                          "<button class='redcontrol inline-block'>Sign Up</button>"
                        ).on("click", function() {
                          if (window.useCBSAuth) {
                            window.top.location.href =  "https://secure.cbssports.com/sportslive/payment/?subscriptionClient=sidearm&subscriptionSiteId=" + window.utagData.schoolCode + "&masterProductId=25802&tokenRedirectUrl=" + location.protocol + "//" + location.hostname + "/api/allaccess/users/returnFromExternalAuthWithJWT";
                            return;
                          }
                          window.top.location.href = "/watch/purchase.aspx#register";
                        })
                      )
                      .append(
                        $(
                          "<button class='graycontrol inline-block'>Log In</button>"
                        ).on("click", function() {
                          if (window.useCBSAuth) {
                            window.top.location.href = "https://secure.cbssports.com/user/login/?subscriptionClient=sidearm&subscriptionSiteId=" + window.utagData.schoolCode + "&masterProductId=25802&tokenRedirectUrl=" + location.protocol + "//" + location.hostname + "/api/allaccess/users/returnFromExternalAuthWithJWT";
                            return;
                          }
                          
                          try {
                            if (window.top.beginAuthenticateUser != null) {
                              window.top.beginAuthenticateUser();
                              return;
                            }
                          } catch (err) {}
                          
                          window.top.location.href = location.protocol + "//" + location.host + "/services/allaccess.ashx/users/beginAuthenticationFlow";
                        })
                      )
                      .append("<br><h4>" + video.title + "</h4>")
                  : $(
                      "<div class='vjs-error-premium'><img src='/services/allaccess.ashx/logo'><br>This is premium content.<br><br></div>"
                    )
                      .append(
                        $(
                          "<button class='redcontrol inline-block'>Purchase Subscription</button>"
                        ).on("click", function() {
                          window.top.location =
                            "http://" +
                            location.host +
                            "/watch/purchase.aspx?" +
                            video.type +
                            "=" +
                            video.id;
                        })
                      )
                      .append("<br><h4>" + video.title + "</h4>")
              )
            );

          if (!autoplay) {
            $unauthorized.append(
              $(
                '<button class="vjs-big-play-button" aria-live="polite" tabindex="0" aria-label="play video"><span aria-hidden="true"></span></button>'
              ).on("click", function() {
                $unauthorized
                  .find(".vjs-big-play-button, .vjs-poster")
                  .attr("style", "");
                $unauthorized.find(".vjs-error-premium").addClass("show");
              })
            );
            $unauthorized
              .find(".vjs-poster")
              .css({ display: "block", zIndex: 202 });
            $unauthorized
              .find(".vjs-big-play-button")
              .attr({ style: "display:block !important;z-index:203;" });
          } else {
            setTimeout(function() {
              widget.element.find(".vjs-error-premium").addClass("show");
            }, 250);
          }

          $unauthorized.appendTo(widget.element);
        });
        return;
      }

      var userAgent = navigator.userAgent;
      var isIPhone = userAgent.match(/iPhone/i);
      var isIPad = userAgent.match(/iPad/i);

      var useDvr = !isIPhone;

      var videoPlayerOptions = {
        scode: window.cbsSchoolCode || "",
        autoplay: autoplay,
        silent: muted
      };

      if (video.formats.prismId) {
        videoPlayerOptions.ids = video.formats.prismId;
      } else if (video.formats.HLSDVR && useDvr) {
        src.push({
          src: video.formats.HLSDVR,
          type: "application/vnd.apple.mpegurl"
        });
      } else if (video.formats.MobileH264) {
        src.push({
          src: video.formats.MobileH264,
          type: "application/vnd.apple.mpegurl"
        });
      }
      if (video.formats.ttml) {
        videoPlayerOptions.closed_caption_path = video.formats.ttml;
      }

      var parentUtagData = {};
      try {
        parentUtagData = window.parent.utagData && window.parent.utagData() || {};
      } catch (err) {
        console.log(err);
        // ignore cross-origin errors
      }
      var embedUtagData = window.utagData || {};
      var utagData = Object.assign({}, parentUtagData, embedUtagData);

      if (!widget.player) {
        
        var sentEvents = {};
        var sendOnce = function(video, eventName, data) {
          if (sentEvents[eventName]) return;
          sendEvent(video, eventName);
          console.log(
            "sidearm.showcaseplayer globalHandler sendOnce",
            eventName
          );
          sentEvents[eventName] = true;
        };

        var cbsToSidearmEvents = {
          onStateChange: function(eventData) {
            if (
              eventData &&
              eventData.playbackState &&
              eventData.playbackState.playbackState ===
                CBSVideoPlayerWrapper.PLAYBACK_STATES.PLAYING
            ) {
              return "start";
            }
          },
          onAdStart: "adstart",
          onAdEnd: "adend",
          onVideoDone: "ended"
        };

        player = widget.player = new CBSVideoPlayerWrapper(
          widget.element[0],
          utagData,
          videoPlayerOptions,
          function(eventName, eventData) {
            var sidearmEvent =
              typeof cbsToSidearmEvents[eventName] === "function"
                ? cbsToSidearmEvents[eventName](eventData)
                : cbsToSidearmEvents[eventName];

            if (sidearmEvent == null) return;
            console.log("sidearm.showcaseplayer globalHandler", eventName);
            sendOnce(video, sidearmEvent, eventData);
            widget.element.trigger(sidearmEvent);
          }
        );
        sendOnce(video, "impression", {});
      }

      if (src.length > 0) {
        player.playVideos([
          {
            shareUrl: sharableUrl(video),
            title: video.title,
            guid: "dd02a373-dd97-457c-bde8-9c12d42143a5",
            thumbnail: video.poster,
            url: src[0].src,
            adTag: video.adTagUrl || window.adTagUrl ? window.adTagUrl() : null
          }
        ]);
      }
    },
    play: function(video, options) {
      if (video) {
        if (this.player) this.player.destroy();
        this._createAndPlay(video, options);
      } else if (this.player) {
        this.player.play();
      }
    },
    stop: function() {
      if (this.player) this.player.pause();
    },
    pause: function() {
      if (this.player) this.player.pause();
    },
    seek: function(seconds) {
      this.player.currentTime = seconds;
    },
    hasOwnControls: true
  });

  

  videojs.options.techOrder.push("youtube");

  $.widget("sidearm.showcaseVideoJSPlayer", $.sidearm.showcasePlayer, {
    options: {},
    _create: function() {
      var widget = this;

      if (!widget.canFunction()) {
        return;
      }

      widget.playState = {
        playing: false,
        position: 0,
        duration: 0
      };

      $.sidearm.showcasePlayer.prototype._create.apply(this, arguments);
    },
    canPlay: function(video) {
      return video.formats.MobileH264 || video.formats.f4m || !video.authorized;
    },
    canFunction: function() {
      return true;
    },
    hide: function() {
      if (this.player) {
        if (this.player.tech) {
          try {
            this.player.tech.destroy();
          } catch (err) {
            console.error(err);
          }
        }

        try {
          this.player.destroy();
        } catch (err) {
          console.error(err);
        }

        this.player = null;

        $(this.element).empty();
      }
    },
    _createAndPlay: function(video, options) {
      options = options || {};
      var live = video.type === "Live";
      var autoplay = options && options.autoplay === true;
      var controls = !(options && options.controls === false);
      var ytControls = false;
      var endCard = options.endCard;
      var widget = this;
      var poster = options.poster || video.poster;
      var player;
      var blockPreroll = options.blockPreroll === true;

      var src = [];

      if (video.authorized === false) {
        allAccess.sessionDeferred.done(function(sessionObservable) {
          var resp = sessionObservable();
          var $unauthorized = $("<div>")
            .addClass(
              "sidearm-showcasePlayer-player video-js vjs-error vjs-sublime-skin vjs-paused vjs-controls-enabled vjs-user-inactive"
            )
            .append(
              $("<div class='vjs-poster' tabindex='-1'></div>").css(
                "background-image",
                "url(" + poster + ")"
              )
            )
            .append(
              $("<div class='vjs-error-display'></div>").append(
                resp == null
                  ? $(
                      "<div class='vjs-error-premium'><img src='/services/allaccess.ashx/logo'><br>This is premium content.<br><br></div>"
                    )
                      .append(
                        $(
                          "<button class='redcontrol inline-block'>Sign Up</button>"
                        ).on("click", function() {
                          window.top.location =
                            "http://" +
                            location.host +
                            "/watch/purchase.aspx?" +
                            video.type +
                            "=" +
                            video.id;
                        })
                      )
                      .append(
                        $(
                          "<button class='graycontrol inline-block'>Log In</button>"
                        ).on("click", 
                      )
                      .append("<br><h4>" + video.title + "</h4>")
                  : $(
                      "<div class='vjs-error-premium'><img src='/services/allaccess.ashx/logo'><br>This is premium content.<br><br></div>"
                    )
                      .append(
                        $(
                          "<button class='redcontrol inline-block'>Purchase Subscription</button>"
                        ).on("click", function() {
                          window.top.location =
                            "http://" +
                            location.host +
                            "/watch/purchase.aspx?" +
                            video.type +
                            "=" +
                            video.id;
                        })
                      )
                      .append("<br><h4>" + video.title + "</h4>")
              )
            );

          if (!autoplay) {
            $unauthorized.append(
              $(
                '<button class="vjs-big-play-button" aria-live="polite" tabindex="0" aria-label="play video"><span aria-hidden="true"></span></button>'
              ).on("click", 
            );
            $unauthorized
              .find(".vjs-poster")
              .css({ display: "block", zIndex: 202 });
            $unauthorized
              .find(".vjs-big-play-button")
              .attr({ style: "display:block !important;z-index:203;" });
          } else {
            setTimeout( 250);
          }

          $unauthorized.appendTo(widget.element);
        });
        return;
      }

      if (video.formats.youtube) {
        controls = false;
        ytControls = true;
        src.push({
          src: video.formats.youtube,
          type: "video/youtube"
        });
      }

      var userAgent = navigator.userAgent;
      var isIPhone = userAgent.match(/iPhone/i);
      var isIPad = userAgent.match(/iPad/i);

      var useDvr = !isIPhone;

      if (video.formats.HLSDVR && useDvr) {
        src.push({
          src: video.formats.HLSDVR,
          type: "application/vnd.apple.mpegurl"
        });
      } else if (video.formats.MobileH264) {
        src.push({
          src: video.formats.MobileH264,
          type: "application/vnd.apple.mpegurl"
        });
      }

      if (src.length === 0 && video.formats.httpDownload) {
        src.push({
          src: video.formats.httpDownload,
          type: "video/mp4"
        });
      }

      var id = "videojs" + $.now();

      //Use native youtube interface.
      if (
        !widget.player &&
        video.formats.youtube &&
        window.accessibility_enabled
      ) {
        var ytMatch = video.formats.youtube.match(
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
        );
        var ytSrc = "https://www.youtube.com/embed/" + ytMatch[2];

        console.log("video.formats.youtube", video.formats.youtube);
        console.log("ytMatch", ytMatch);
        console.log("ytSrc", ytSrc);

        if (autoplay) {
          ytSrc += "?autoplay=1";
        }

        $("<iframe/>")
          .attr("id", id)
          .attr("type", "text/html")
          .attr("width", "100%")
          .attr("height", "100%")
          .attr("frameborder", "0")
          .attr("src", ytSrc)
          .attr("title", video.title)
          .appendTo(widget.element);

        widget.player = true;

        //Use showcase player
      } else if (!widget.player) {
        $("<video />")
          .addClass("sidearm-showcasePlayer-player video-js vjs-sublime-skin")
          .attr("id", id)
          .attr("controls", true)
          .attr("playsinline", true)
          .attr("width", "100%")
          .attr("height", "100%")
          .appendTo(widget.element);

        var videojsOptions = {
          autoplay: autoplay,
          muted: autoplay,
          controls: controls,
          poster: poster,
          nativeControlsForTouch: isIPad || isIPhone,
          plugins: {
            dimTheLights: 
            imageColorToSliderBackground: [".vjs-volume-level"],
            endcard: {
              sport: video.sport_id,
              displayType: endCard
            },
            ga: {
              trackerName: "tracker0",
              eventCategory: "All Access",
              eventLabel: video.type + " " + video.id + ": " + video.title
            }
          },
          youtube: {
            ytControls: ytControls,
            playsinline: 1,
            mute: autoplay ? 1 : 0
          }
        };

        if (!URI().query(true).dimTheLights) {
          delete videojsOptions.plugins.dimTheLights;
        }

        if (live && moment(video.date_utc).valueOf() > $.now()) {
          videojsOptions.plugins.countdown = {
            to: moment(video.date_utc).valueOf()
          };
        }

        player = widget.player = videojs(id, videojsOptions);

        (function() {
          var counter;
          var counted = 0;
          var countFrom;

          function sendCount() {
            var url =
              video.type === "Live"
                ? "events/viewed"
                : video.type === "Archive"
                  ? "clips/viewed"
                  : null;

            if (url == null) return;

            var counted2 = counted;

            /*$.post("/services/allaccess.ashx/" + url, { id: video.id, seconds: counted })
                          .fail(function(){
                              counted += counted2;

                          });*/

            counted = 0;
            countFrom = $.now();
          }

          function takeSample() {
            var now = $.now();
            counted += (now - countFrom) / 1000;
            countFrom = now;
          }

          player.on("playing", function() {
            console.log("playing");
            countFrom = $.now();
            clearInterval(counter);
            counter = setInterval(function() {
              takeSample();
              if (counted > 60) {
                sendCount();
              }
            }, 250);
          });
          player.on("pause", function() {
            console.log("paused");
            takeSample();
            if (counted > 2) {
              sendCount();
            }
            clearInterval(counter);
          });
        })();

        var prerollFreeUntil;
        if (
          !window.sessionStorage ||
          !window.sessionStorage["preroll-free-until"]
        ) {
          prerollFreeUntil = 0;
        } else {
          prerollFreeUntil = parseInt(
            window.sessionStorage["preroll-free-until"],
            10
          );
        }

        if (window.adTagUrl) {
          var rollAd = function() {
            if (video.formats.youtube && window.youtube_preroll_disabled) {
              return;
            }
            var imaOptions = {
              id: id,
              debug: true,
              adTagUrl: window.adTagUrl(),
              nonLinearWidth: 1000,
              nonLinearHeight: 300,
              adWillAutoPlay: true,
              disableCustomPlaybackForIOS10Plus: true,
              adsRenderingSettings: {
                restoreCustomPlaybackStateOnAdBreakComplete: false
              }
            };

            player.ima(imaOptions);
            player.ima.requestAds();
          };

          var disablePreroll =
            (window.targetting_criteria.site === "ttu" &&
              (isIPhone || isIPad)) ||
            blockPreroll;

          if ($.now() > prerollFreeUntil && !disablePreroll) {
            rollAd();

            player.on("adend", function(e) {
              console.log("viewed preroll");
              if (window.sessionStorage) {
                //window.sessionStorage["preroll-free-until"] = $.now() + (5 * 60 * 1000);
              }
            });
          }

          window.rollAd = rollAd;
        }

        var imaOnIframeApiReady = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          if (imaOnIframeApiReady) {
            imaOnIframeApiReady.apply(window, arguments);
          }
          if (videojs.Youtube.onYouTubeIframeAPIReady) {
            videojs.Youtube.onYouTubeIframeAPIReady.apply(window, arguments);
          }
        };

        player.src(src);

        // will only be defined if an ad should roll
        if (window.adTagUrl && player.ima.initializeAdDisplayContainer) {
          player.autoplay(false);
          widget.element
            .find(".vjs-big-play-button")
            .one("click touchstart", ;
        }

        var debounce = function(fn, interval) {
          var timeout;
          return function() {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(fn, interval);
          };
        };

        var sendAdEnd = debounce( 250);

        var hasStarted = false;
        player.on("play", function(e) {
          if (!hasStarted) {
            sendEvent(video, "start");
            hasStarted = true;
          }
          sendEvent(video, "play");
        });

        player.on("ended", function(e) {
          sendEvent(video, "ended");
        });

        var isInAdState = false;

        player.on("adstart", ;

        player.on("adend", ;

        var wasPlaying = false,
          time = 0;

        var lastLoopTime;
        setInterval(function() {
          var wholeSeconds;
          var isPlaying =
            !isInAdState &&
            $(player.el()).is(".vjs-playing") &&
            !$(player.el()).is(".vjs-waiting");

          if (isPlaying) {
            var newLoopTime = new Date().getTime();

            if (!wasPlaying) {
              lastLoopTime = new Date().getTime();
              newLoopTime = lastLoopTime;
            } else {
              time += newLoopTime - lastLoopTime;
            }

            wholeSeconds = Math.floor(time / 1000);

            if (wholeSeconds >= 120) {
              sendEvent(video, "play-seconds", wholeSeconds);
              time = 0;
            }

            wasPlaying = true;
            lastLoopTime = newLoopTime;
          } else {
            if (wasPlaying) {
              wholeSeconds = Math.floor(time / 1000);

              if (wholeSeconds > 5) {
                sendEvent(video, "play-seconds", wholeSeconds);
                time = 0;
              }

              wasPlaying = false;
            }
          }
        }, 250);

        player.on("play", function(e) {
          widget.element.trigger("play");
        });
        player.on("pause", function(e) {
          widget.element.trigger("pause");
        });
        player.on("adstart", function(e) {
          widget.element.trigger("adstart");
        });
        player.on("adend", ;
        player.on("timeupdate", function(e) {
          widget.playState.position = e.target.currentTime;
          widget.playState.duration = e.target.duration;
          widget.element.trigger("playstatechanged", e, widget.playState);
          widget.element.trigger("timeupdate", e, widget.playState);
        });
        player.on("ended", function(e) {
          console.log("ended");
          widget.playState.playing = false;
          widget.element.trigger("stopped", e);
          widget.element.trigger("ended", e);
        });
      } else {
        player = widget.player;
        player.poster(poster);
        player.autoplay(autoplay);
        player.src(src);
      }
    },
    play: function(video, options) {
      if (video) {
        this._createAndPlay(video, options);
      } else if (this.player) {
        this.player.play();
      }
    },
    stop: function() {
      if (this.player) this.player.pause();
    },
    pause: 
    seek: 
    hasOwnControls: true
  });

  var players = ["showcaseVideoJSPlayer", "showcaseIframePlayer"];
  if (window.cbsPlayerEnabled || window.location.search.indexOf("force_cbs_player") > -1) {
    players.unshift("showcaseCBSPlayer");
  }

  $.widget("sidearm.showcaseSmartPlayer", $.sidearm.showcasePlayer, {
    options: {
      players: players
    },
    _create: function() {
      var widget = this;

      widget.players = [];
      $.each(widget.options.players, function(i, player) {
        if ($.sidearm[player].prototype.canFunction()) {
          var options = {};
          widget.players.push(widget.element[player](options).data(player));
        }
      });

      $.sidearm.showcasePlayer.prototype._create.apply(this, arguments);
    },
    play: function(video, options) {
      var widget = this;

      // resume playing current video
      if (!video && widget.active_player) {
        return widget.active_player.play();
      }

      if (widget.active_player) {
        widget.active_player.hide();
        widget.active_player = null;
      }

      // play a new video
      $.each(widget.players, function(i, player) {
        // find first player that can play video
        if (player.canPlay(video) && !widget.active_player) {
          widget.active_player = player;
        }

        // stop all players
        player.stop();
      });

      // if there's a player that can play the video
      if (widget.active_player) {
        widget.active_player.play(video, options);
        var deferred = $.Deferred();
        widget.element.on("stopped", function() {
          deferred.resolve();
        });
        return deferred;
      } else {
        alert(
          "This video can not be played because your browser or device does not support any of the formats it is available in."
        );
      }
    },
    quality: function() {
      var widget = this;
      if (widget.active_player) {
        widget.active_player.quality.apply(widget.active_player, arguments);
      }
    },
    volume: function() {
      var widget = this;
      if (widget.active_player) {
        widget.active_player.volume.apply(widget.active_player, arguments);
      }
    },
    pause: function() {
      var widget = this;
      if (widget.active_player) {
        widget.active_player.pause();
      }
    },
    stop: 
    seek: function(seconds) {
      var widget = this;
      if (widget.active_player) {
        widget.active_player.seek(seconds);
      }
    }
  });
});

function makeLabel(video) {
  if (video.formats && video.formats.youtube) {
    var regId = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = regId.exec(video.formats.youtube);
    var ytId = match && match[2].length === 11 ? match[2] : null;
    return "YouTube:" + ytId;
  } else if (video.type) {
    return video.type + ":" + video.id;
  } else {
    return "Unknown";
  }
}

function sendEvent(video, eventName, value) {
  var label = makeLabel(video);

  window.sEvent.push({
    category: "All Access",
    name: eventName,
    label: label,
    value: value || "1"
  });
};
var SIDEARM = SIDEARM || {};
define('sidearm.allaccess',['jquery', 'ko'], function ($, ko) {
    var debugMode = /debug=true/.test(location.href);

    if (!window.__config) throw new Error("Couldn't find config");

    var config = window.__config;

    function localStorageObservable(key, initialValue){
        if (!key) throw new Error("A unique key is required");

        var ignore = true;
        var target = ko.observable(initialValue);

        if (localStorage.hasOwnProperty(key)) {
            target(localStorage[key]);
        }

        target.subscribe(function(newValue){
            if (ignore) return;
            localStorage[key] = newValue;
        });

        return target;
    }

    SIDEARM.AllAccess = function () {
        var api = this;

        if (!(this instanceof SIDEARM.AllAccess)) {
            throw Error("SIDEARM.AllAccess is a constructor");
        }

        this._jQ = $(this);

        this.sessionId = localStorageObservable('AllAccess-sessionId', null);
        this.session = ko.observable(null);
        this.sessionDeferred = $.Deferred();

        this.session.subscribe(function(newValue){
            if (newValue) {
                api.sessionId(newValue.SessionId);
            } else {
                api.sessionId(null);
            }
        });

        try {
            if (location.protocol === "https:" && config.requestGeoLocation && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    api.location = position.coords.latitude + "," + position.coords.longitude;
                });
            }
        } catch(err) { }

        if (api.sessionId()) {
            api.UsersRestoreSession({ SessionId: api.sessionId() }).done(;
        } else {
            api.sessionDeferred.resolve(api.session);
        }
    };

    SIDEARM.AllAccess.prototype.getPreroll = function () {
        var allaccess = this,
            prerolls = config.preRolls || [];

        var prerollFreeUntil;

        if (!window.localStorage || !window.localStorage["preroll-free-until"]) {
            prerollFreeUntil = 0;
        } else {
            prerollFreeUntil = parseInt(window.localStorage["preroll-free-until"], 10);
        }

        var hasPrerolls = prerolls.length > 0,
            needsPreroll = ($.now() > prerollFreeUntil);

        if (!hasPrerolls || !needsPreroll) {
            return null;
        }
        
        var ad = prerolls[Math.floor(Math.random() * prerolls.length)];
        allaccess.AdsViewed({ id: ad.id });

        ga('send', 'pageview', '/showcase/ads/' + ad.title);
        return ad;
    };

    SIDEARM.AllAccess.prototype._apiCall = function (path, data, method, options) {
        var api = this,
            ajax,
            dfrd = $.Deferred();

        data = data || {};

        if (this.sessionId()) {
            data.sessionId = this.sessionId();
        }
        
        if (this.location) {
            data.geo = this.location;
        }

        var url = "/services/allaccess.ashx/2" + path,
            dataType = "json";

        if (!debugMode && (options.secure || config.sslEverything)) {
            url = "https://payments.sidearmsports.com/allaccess.ashx/" + config.clientId + "/2" + path;
            dataType = "jsonp";
            data.httpMethod = method;
        }

        ajax = $.extend({
            url: url,
            data: data,
            type: method,
            dataType: dataType
        }, options);

        return $.ajax(ajax)
            .pipe(function (r) {
                if (!r || r.error) {
                    api.trigger("error", r.error);
                    if (r.error.Type === "NO_SESSION") {
                        api.trigger("noSession", [api]);
                    }
                    return dfrd.rejectWith(api, [r.error]);
                } else {

                    if (!api.hasSession() && r.session) {
                        api.session(r.session);
                    }
                    
                    return dfrd.resolveWith(api, [r.data]);
                }
            }, ;
    };

    $.extend(SIDEARM.AllAccess.prototype, {
        on: function () {
            return this._jQ.on.apply(this._jQ, arguments);
        },
        one: function () {
            return this._jQ.one.apply(this._jQ, arguments);
        },
        off: function () {
            return this._jQ.off.apply(this._jQ, arguments);
        },
        trigger: 
    }, {
        hasSession: 
    });

    //AllAccessInstance.[methodname](data);
    SIDEARM.AllAccess._addAPIMethod = function (method, apipath, httpMethod, options, staticSuccess, staticError) {
        var proto = SIDEARM.AllAccess.prototype;
        options = options || {};
        proto[method] = function (data, success, error) {
            var api = this;
            var dfrd = this._apiCall(apipath, data, httpMethod, options, success, error);

            if (staticSuccess) dfrd.done(staticSuccess);
            if (staticError) dfrd.fail(staticError);
            if (success) dfrd.done(success);
            if (error) dfrd.fail(error);

            return dfrd;
        };
    };


    SIDEARM.AllAccess._addAPIMethod("UsersRestoreSession", "/users/restoreSession", "GET", {}, function (session) {
        var api = this;

        if (session && session.SessionId) {
            api.session(session);
        } else {
            api.session(null);
        }
    });

    SIDEARM.AllAccess._addAPIMethod("AdsViewed", "/ads/viewed", "POST");

    SIDEARM.AllAccess._addAPIMethod("ClipsGet", "/clips/get", "GET", { global: false });
    SIDEARM.AllAccess._addAPIMethod("ClipsClip", "/clips/clip", "GET", { global: false });
    SIDEARM.AllAccess._addAPIMethod("ClipsViewed", "/clips/viewed", "POST");

    SIDEARM.AllAccess._addAPIMethod("EventsGet", "/events/get", "GET", { global: false });
    SIDEARM.AllAccess._addAPIMethod("EventsEvent", "/events/event", "GET", { global: false });
    SIDEARM.AllAccess._addAPIMethod("EventsViewed", "/events/viewed", "POST");

    SIDEARM.AllAccess._addAPIMethod("MediaGet", "/media/get", "GET", { global: false });

    return SIDEARM.AllAccess;
});
require(['sidearm.showcasePlayer', 'sidearm.allaccess'], function () {
    var poster;
    var played = false;

    $.fn.postMessage = function (data, url) {
        return this.each(;
    };

    var allAccess = window.allAccess = new SIDEARM.AllAccess();

    var player = $("#player")
        .showcaseSmartPlayer({
            controls: true
        });

    window.playDirect = 

    $(window).on("message", function (e) {
        var method;
        var args;
        var data;
        
        try {
            data = JSON.parse(e.originalEvent.data);
        } catch (err) {
            data = e.originalEvent.data;
        }
        
        if (data.videoDelayTime) {
            window.parent.postMessage(JSON.stringify(data), "*");
            return;
        }

        if (typeof data === "string") {
            method = data;
            args = [];
        } else if (data.slice) {
            method = data[0];
            args = data.slice(1);
        } else {
            return;
        }

        if (method === "play") {
            if (!played) {
                if (video.id && video.type){
                    return loadAndPlayMedia(video.type, video.id);
                }
                return playVideo();
            }
        }

        if (method === "playClip") {
            location.href = location.href.split("?")[0] + "?Archive=" + args[0] + "&autoplay=true";
        }

        if (method === "playEvent") {
            var clipId = args[0];
            return allAccess.EventsEvent({ id: clipId })
                .then(;
        }

        var widgetReference = player.data('showcaseSmartPlayer');
        if (widgetReference[method]) {
            widgetReference[method]();
        } else if (widgetReference.active_player[method]) {
            widgetReference.active_player[method]();
        }
    });
    
    var playingSIDEARMPreroll = false;
    var playingPreroll = false;
    player.on({
        play: function () {
            try {
                if (window.parent === window) return;
                parent.postMessage("play", "*");
                console.log("SIDEARM embed play")
            } catch(err){}
        },
        start: function () {
            try {
                if (window.parent === window) return;
                parent.postMessage("start", "*");
                console.log("SIDEARM embed start")
            } catch(err){}
        },
        pause: function () {
            try {
                if (window.parent === window) return;
                if (playingPreroll) return;
                if (playingSIDEARMPreroll) return;
                parent.postMessage("pause", "*");
                console.log("SIDEARM embed pause")
            } catch(err){}
        },
        adstart: function () {
            try {
                if (window.parent === window) return;
                playingPreroll = true;
                parent.postMessage("adstart", "*");
                console.log("SIDEARM embed adstart")
            } catch(err){}
        },
        adend: function () {
            try {
                if (window.parent === window) return;
                playingPreroll = false;
                parent.postMessage("adend", "*");
                console.log("SIDEARM embed adend")
            } catch(err){}
        },
        ended: function () {
            try {
                if (window.parent === window) return;
                if (playingSIDEARMPreroll) return;
                parent.postMessage("ended", "*");
                console.log("SIDEARM embed ended")
            } catch(err){}
        }
    });

    function countView(video){
        if (!window.ga) return;            
        if (!video.id) return;        
        if (video.type === "Live"){
            //allAccess.EventsViewed({ id: video.id });
            ga('send', 'pageview', '/showcase/events/' + video.title);
        } else if (video.type === "Archive"){
            //allAccess.ClipsViewed({ id: video.id });
            ga('send', 'pageview', '/showcase/archive/' + video.title);
        }
    }
    function loadAndPlayMedia(type, id) {
        return allAccess.MediaGet({ type: type, id: id })
                .then(;
    }

    function playVideo(autoplay) {
        played = true;

        var config = window.__config;

        var ad = allAccess.getPreroll();

        var allowAutoplayMuted = location.search.indexOf("allowAutoplayMuted=1") > -1;

        if (ad) {
            playingSIDEARMPreroll = true;
            player.show().showcaseSmartPlayer("play", ad, {
                autoplay: autoplay,
                allowAutoplayMuted: allowAutoplayMuted,
                controls: controls,
                endCard: endCard,
                poster: video.poster
            })
                .then(function () {
                    window.localStorage["preroll-free-until"] = $.now() + (10 * 60 * 1000);
                    player.find(".video-js").removeClass("vjs-ad-playing");
                    location.href = "/showcase/embed.aspx" + location.search.replace(/autoplay=(true|false)/, "") + "&autoplay=true";
                    setTimeout(function(){
                        playingSIDEARMPreroll = false;
                    }, 0);
                });
            player.find(".video-js").addClass("vjs-ad-playing");
        } else {
            player.show().showcaseSmartPlayer("play", video, { 
                autoplay: autoplay,
                allowAutoplayMuted: allowAutoplayMuted,
                controls: controls,
                endCard: endCard,
                blockPreroll: blockPreroll
            });
            countView(video);
        }
    }

    if (video.id && video.type){
        loadAndPlayMedia(video.type, video.id);
    } else {
        playVideo(autoplay);
    }
});
define("embed", function(){});

