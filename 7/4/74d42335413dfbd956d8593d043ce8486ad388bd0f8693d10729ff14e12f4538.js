/*
   ReviveAVOC Object
*/

// Chapter 1: Beginning
if (typeof jQuery !== 'function') {
  var warnJQueryUndefinedStr = 'ReviveAVOC needs jQuery 1.1x.x to run properly!';
  console.log(warnJQueryUndefinedStr);
  alert(warnJQueryUndefinedStr);
  throw new Error(warnJQueryUndefinedStr); // this line will stop the script
};



// Chapter 2: Configuration
var ReviveAVOC = {};

ReviveAVOC.version = '2.0.0';

ReviveAVOC.configs = {};
ReviveAVOC.configs.avocCalculateOnScreen = false;
ReviveAVOC.configs.avocVolumeMinimum = 0.10;
ReviveAVOC.configs.adRules = null;
ReviveAVOC.configs.debug = true;
ReviveAVOC.configs.cookieDomain = '.detik.com';
ReviveAVOC.configs.cookiePath   = '/';

ReviveAVOC.vars = {};
ReviveAVOC.vars.avocCalculateOnScreen = false;
ReviveAVOC.vars.avocTwoSecCounter  = 0;
ReviveAVOC.vars.avocTwoSecComplete = false;
ReviveAVOC.vars.avocTwoSecMaxCounter  = 2;
ReviveAVOC.vars.avocTwoSecURL      = null;
ReviveAVOC.vars.avocHalfDurCounter = 0;
ReviveAVOC.vars.avocHalfDurComplete= false;
ReviveAVOC.vars.avocHalfDurMaxCounter = 0;
ReviveAVOC.vars.avocHalfDurURL     = null;
ReviveAVOC.vars.avocFullDurCounter = 0;
ReviveAVOC.vars.avocFullDurComplete= false;
ReviveAVOC.vars.avocFullDurMaxCounter = 0;
ReviveAVOC.vars.avocFullDurURL     = null;
ReviveAVOC.vars.avocTwoSecZBCounter  = 0;
ReviveAVOC.vars.avocTwoSecZBComplete = false;
ReviveAVOC.vars.avocTwoSecZBMaxCounter  = 2;
ReviveAVOC.vars.avocTwoSecZBURL      = null;
ReviveAVOC.vars.avocTwoSecZBFailed   = false;
ReviveAVOC.vars.avocHalfDurZBCounter = 0;
ReviveAVOC.vars.avocHalfDurZBComplete= false;
ReviveAVOC.vars.avocHalfDurZBMaxCounter = 0;
ReviveAVOC.vars.avocHalfDurZBURL     = null;
ReviveAVOC.vars.avocHalfDurZBFailed  = false;
ReviveAVOC.vars.avocAdViewability = true;
ReviveAVOC.vars.avocTrafficking = null;
ReviveAVOC.vars.vastXML = null;
ReviveAVOC.vars.adsManager = null;
ReviveAVOC.vars.divNameForAvoc = null;
ReviveAVOC.vars.currentTimeFloorOld = -1;
ReviveAVOC.vars.imgBullets = [];
ReviveAVOC.vars.headerInfo = '[ReviveAVOC]';
ReviveAVOC.vars.avocCookieNames = [];
ReviveAVOC.vars.avocCookieNamesIdx = 0;

//addByViyancs
ReviveAVOC.vars.avocUrlTemplate = 'https://newrevive.detik.com/delivery/fc.php?script=dtkVideoAds:vastEvent&bannerid=@bannerId&zoneid=@zoneId&event=';
ReviveAVOC.vars.avocEventsList = {};
ReviveAVOC.vars.avocEventsList.avocTwoSec = 'avocTwoSec';
ReviveAVOC.vars.avocEventsList.avocHalf = 'avocHalfDuration';
ReviveAVOC.vars.avocEventsList.avocTwoSecZB = 'avocTwoSecZB';
ReviveAVOC.vars.avocEventsList.avocHalfDurationZB = 'avocHalfDurationZB';
//end

// Chapter 3.a.: jquery.onscreen library
// jquery.onscreen 2018-01-22 https://github.com/adaptlearning/jquery.onscreen
(function() {

    'use strict';

    //ENUMERATION SUPPORT
    function ENUM(e){for(var i=0,l=e.length;i<l;i++){var n=e[i].toLowerCase();this[n]=(new Number(i));this[n].string=n;}}

    //handler id generation
    var expando = {
        index: 0,

        check: function(element) {
            //check that the element has a valid jquery expando property, or make one

            var hasExpando = (element[$.expando]);
            if (hasExpando) return;

            element[$.expando] = ++expando.index;

        },

        make: function(element, data) {
            //make a unique event id from the element's expando property and the event handler guid

            expando.check(element);
            return data.guid + "-" + element[$.expando];

        }
    };

    //handler functions
    var handlers = {
        //types definition
        TYPE: new ENUM(["onscreen", "inview"]),
        INVIEW_STATES: new ENUM(["none", "top", "bottom", "left", "right", "both"]),

        registered: [],
        shouldReProcess: true,

        register: function(element, data, type) {
            var isLocked = locking.isLocked();

            var $element = $(element);
            handlers.registered.push({
                id: expando.make(element, data),
                data: data,
                $element: $element,
                type: type,
                _onscreen: isLocked ? null : measurements.get($element).uniqueMeasurementId,
                _hasTriggered: false
            });
            handlers.shouldReProcess = true;

        },

        unregister: function(element, data, type) {

            var registered = handlers.registered;

            var findId = expando.make(element, data);
            for (var i = registered.length-1, l = -1; i > l; i--) {
                var item = registered[i]
                if (item.id != findId || item.type != type) continue;
                registered.splice(i,1);
                handlers.shouldReProcess = true;
            }

        },

        process: function() {

            var registered = handlers.registered;
            var registeredCount;

            handlers.shouldReProcess = true;
            while (handlers.shouldReProcess) {
                handlers.shouldReProcess = false;

                registeredCount = registered.length;
                if  (registeredCount == 0) return;

                for (var i = 0; i < registeredCount; i++) {
                    var item = registered[i];
                    var measure = measurements.get(item.$element);

                    //check if measure has the same values as last
                    var wasPreviouslyMeasured = (item._onscreen !== undefined);

                    if (wasPreviouslyMeasured && item._hasTriggered) {
                        var hasMeasureChanged = (item._onscreen != measure.uniqueMeasurementId);
                        if (!hasMeasureChanged) {
                            continue;
                        }
                    }

                    item._onscreen = measure.uniqueMeasurementId;
                    item._hasTriggered = true;

                    switch (item.type) {
                    case handlers.TYPE.onscreen:
                        handlers.processOnScreen(item, measure);
                        break;
                    case handlers.TYPE.inview:
                        handlers.processInView(item, measure);
                    }
                    if (handlers.shouldReProcess) {
                        break;
                    }
                }
            }

        },

        processOnScreen: 

        processInView: function(item, measure) {

            var isTopOnScreen = (measure.percentFromTop >= 0 && measure.percentFromTop <= 100);
            var isBottomOnScreen = (measure.percentFromBottom >= 0 && measure.percentFromBottom <= 100);
            var isLeftOnScreen = (measure.percentFromLeft >= 0 && measure.percentFromLeft <= 100);
            var isRightOnScreen = (measure.percentFromRight >= 0 && measure.percentFromRight <= 100);

            var visiblePartY;
            if (isTopOnScreen && isBottomOnScreen) visiblePartY = handlers.INVIEW_STATES.both.string;
            else if (isTopOnScreen) visiblePartY = handlers.INVIEW_STATES.top.string;
            else if (isBottomOnScreen) visiblePartY = handlers.INVIEW_STATES.bottom.string;
            else visiblePartY = handlers.INVIEW_STATES.none.string;

            var visiblePartX;
            if (isLeftOnScreen && isRightOnScreen) visiblePartX = handlers.INVIEW_STATES.both.string;
            else if (isLeftOnScreen) visiblePartX = handlers.INVIEW_STATES.left.string;
            else if (isRightOnScreen) visiblePartX = handlers.INVIEW_STATES.right.string;
            else visiblePartX = handlers.INVIEW_STATES.none.string;

            var inviewState = [
                measure.onscreen, //inview true/false
                visiblePartX, //left, right, both, none
                visiblePartY //top, bottom, both, none
            ];

            item._inviewPreviousState = inviewState;
            item._measurePreviousState = measure;

            item.$element.trigger('inview', inviewState );

        }
    };

    //checking loop management
    var loop = {

        lastStartEvent: 0,
        timeoutHandle: null,
        intervalDuration: 100,
        hasRaf: false,

        start: function() {

            loop.lastStartEvent = (new Date()).getTime();
            loop.repeat();

        },

        repeat: function() {

            loop.stop();

            if (loop.hasRaf) {
                loop.timeoutHandle = requestAnimationFrame(loop.main);
            } else {
                loop.timeoutHandle = setTimeout(loop.main, loop.intervalDuration);
            }

        },

        hasExpired: function() {

            var timeSinceLast = (new Date()).getTime() - loop.lastStartEvent;
            if (timeSinceLast < 1500) return;

            loop.stop()
            return true;
        },

        isThrottled: function() {
            var passedTime = (new Date()).getTime() - loop.lastMain;
            if (passedTime > loop.intervalDuration) return false;
            return true;
        },

        lastMain: (new Date()).getTime(),

        main: function() {

            if (loop.isThrottled()) {
                loop.repeat();
                return;
            }

            loop.lastMain = (new Date()).getTime();

            if (loop.hasExpired()) return;

            if (handlers.registered.length == 0) {
                //nothing to check
                loop.stop();
                //slow down to save cycles
                loop.intervalDuration = 200;
                loop.repeat();
            } else {
                //something to check
                loop.stop();
                //speed up to make more responsive
                loop.intervalDuration = 100;
                loop.repeat();
            }

            if (locking.isLocked()) return;

            handlers.process();

        },

        stop: function() {

            var intervalAttached = (loop.timeoutHandle !== null);
            if (!intervalAttached) return;

            if (loop.hasRaf) {
                cancelAnimationFrame(loop.timeoutHandle);
                loop.timeoutHandle = null;
            } else {
                clearTimeout(loop.timeoutHandle);
                loop.timeoutHandle = null;
            }

        }

    };

    //jQuery element + event handler attachment / removal
    $.extend($.event.special, {

        onscreen: {

            noBubble: true,

            add: function(data) {
                handlers.register(this, data, handlers.TYPE.onscreen);
            },

            remove: function(data) {
                handlers.unregister(this, data, handlers.TYPE.onscreen);
            }

        },

        inview: {

            noBubble: true,

            add: function(data) {
                handlers.register(this, data, handlers.TYPE.inview);
            },

            remove: function(data) {
                handlers.unregister(this, data, handlers.TYPE.inview);
            }

        }

    });

    //jQuery interfaces
    //element functions
    $.extend($.fn, {

        onscreen: function onscreen(callback) {

            if (callback) {
                //standard event attachment jquery api behaviour
                this.on("onscreen", callback);
                return this;
            }

            return measurements.get(this);

        },

        inview: function inview(callback) {

            if (callback) {
                //standard event attachment jquery api behaviour
                this.on("inview", callback);
                return this;
            }

            return measurements.get(this);

        }

    });

    //interface to allow for inview/onscreen to be disabled
    var locking =  {
        locks: [],

        lock: function(name) {

            if (locking.isLocked(name)) return;
            locking.locks.push(name);

        },

        unlock: function(name) {

            if (!locking.isLocked(name)) return;

            for (var i = 0, l = locking.locks.length; i < l; i++) {
                var lock = locking.locks[i];
                if (lock == name) {
                    locking.locks.splice(i,1);
                    break;
                }
            }

            loop.start();

        },

        isLocked: function(name) {

            if (!name) return (locking.locks.length > 0);

            for (var i = 0, l = locking.locks.length; i < l; i++) {
                var lock = locking.locks[i];
                if (lock == name) {
                    return true;
                }
            }
            return false;

        }

    };

    var config = {

        options: {},

        config: function(options) {
            if (typeof options !== "object") return;

            $.extend(config.options, options);

        }

    };


    //force an inview check - standard trigger event jquery api behaviour
    $.inview = $.onscreen = 
    //attach locking interface to $.inview.lock(name); etc
    $.extend($.inview, locking, config);

    //window size handlers
    var wndw = {

        $el: $(window),
        height: null,
        width: null,
        heightRatio: null,
        widthRatio: null,

        resize: function() {
            wndw.height = window.innerHeight || wndw.$el.height();
            wndw.width = window.innerWidth || wndw.$el.width();
            wndw.heightRatio = (100 / wndw.height);
            wndw.widthRatio = (100 / wndw.width);
            loop.start();
        }

    };

    var measurements = {

        featureDetect: function() {

            loop.hasRaf = (window.requestAnimationFrame && window.cancelAnimationFrame);

        },

        get: function get($element) {

            if ($element.length == 0) return;

            var el = $element[0];
            var offset;

            try {
                offset = el.getBoundingClientRect();
            } catch (e) {
                // IE11 throws an error if the element isn't present in the DOM
                offset = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
            }

            var height = offset.height;
            var width = offset.width;

            //topleft from topleft of window
            var top = offset["top"];
            var left = offset["left"];

            //bottomright from bottomright of window
            var bottom = wndw.height - (top + height);
            var right = wndw.width - (left + width)

            //percentages of above
            var percentFromTop = Math.round(wndw.heightRatio * top);
            var percentFromLeft = Math.round(wndw.widthRatio * left);
            var percentFromBottom = Math.round(wndw.heightRatio * bottom);
            var percentFromRight = Math.round(wndw.widthRatio * right);

            //inview
            var inviewHorizontal = null;
            if (left+width > 0 && right < 0 && left < 0) {
                inviewHorizontal = width;
            } else if (left < 0) { //offscreen left
                inviewHorizontal = (width + left);
            } else if (left + width > wndw.width) { //offscreen right
                inviewHorizontal = (wndw.width - left);
            } else { //fully inscreen
                inviewHorizontal = width;
            }

            var inviewVertical = null;
            if (top+height > 0 && bottom < 0 && top < 0) {
                inviewVertical = height;
            } else if (top < 0) { //offscreen top
                inviewVertical = (height + top);
            } else if (top + height > wndw.height) { //offscreen bottom
                inviewVertical = (wndw.height - top);
            } else { //fully inscreen
                inviewVertical = height;
            }

            // cap floor at 0 - cannot have negative inviews.
            if (inviewVertical < 0) inviewVertical = 0;
            if (inviewHorizontal < 0) inviewHorizontal = 0;

            var percentInviewVertical = Math.round((100 / height) * inviewVertical);
            var percentInviewHorizontal = Math.round((100 / width) * inviewHorizontal);

            var elementArea = height * width;
            var inviewArea = inviewVertical * inviewHorizontal;
            var percentInview = Math.round((100 / elementArea) * inviewArea);

            var onscreen = true;
            var offScreenSide = (percentFromRight > 100 || percentFromLeft > 100 || percentFromBottom > 100 || percentFromTop > 100);
            if (offScreenSide) onscreen = false;

            var hasNoSize = (height <= 0 && width <= 0);
            if (hasNoSize) onscreen = false;

            var cssHidden = measurements.isElementHidden(el);
            if (cssHidden) onscreen = false;

            if (onscreen) {

                // perform some extra checks to make sure item is onscreen
                var parents = measurements.getParents(el);

                // go through all the parents except the html tag
                for (var i = 0, l = parents.length-1; i < l; i++) {
                    var parent = parents[i];

                    cssHidden = measurements.isElementHidden(parent);

                    // check if parents are visibility hidden or display none
                    if (cssHidden) {
                        onscreen = false;
                        break;
                    }

                    // check if child is out of bounds inside its parent
                    var isOutOfBounds = measurements.isOutOfBounds(el, parent)
                    if (isOutOfBounds) {
                        onscreen = false;
                        break;
                    }

                }

            }

            var uniqueMeasurementId = ""+top+left+bottom+right+height+width+wndw.height+wndw.width+onscreen;

            return {
                top: top,
                left: left,
                bottom: bottom,
                right: right,
                percentFromTop: percentFromTop,
                percentFromLeft: percentFromLeft,
                percentFromBottom: percentFromBottom,
                percentFromRight: percentFromRight,
                percentInview: percentInview,
                percentInviewHorizontal: percentInviewHorizontal,
                percentInviewVertical: percentInviewVertical,
                onscreen: onscreen,
                uniqueMeasurementId: uniqueMeasurementId,
                timestamp: (new Date()).getTime()
            };

        },

        getParents: function(element) {
            var parents = [];
            var parent;
            while (parent = element.parentElement) {
                parents.push(parent);
                element = parent;
            }
            return parents;
        },

        isElementHidden: function(element) {
            var cssHidden = (element.style.display == "none" || element.style.visibility == "hidden");
            if (cssHidden) return true;

            var style = window.getComputedStyle(element, null);
            cssHidden = (style.display == "none" || style.visibility == "hidden");
            return cssHidden;
        },

        isOutOfBounds: function(element, parent) {

            var isScrollWidthOverflowing = (parent.clientWidth < parent.scrollWidth);
            var isScrollHeightOverflowing = (parent.clientHeight < parent.scrollHeight);
            var isOverflowing = (isScrollWidthOverflowing || isScrollHeightOverflowing);

            var $parent = $(parent);

            if (!isOverflowing || ($parent.css("overflow") === "visible")) {
                return false;
            }

            var $element = $(element);

            var childPos = $element.offset();
            var parentPos = $parent.offset();

            var childOffsetTop = (childPos.top - parentPos.top);
            var childOffsetLeft = (childPos.left - parentPos.left);
            var childOffsetBottom = (childOffsetTop + element.clientHeight);
            var childOffsetRight = (childOffsetLeft + element.clientWidth);

            // check inclusive of bounding rectangle edges
            var isOutOfBounds = (childOffsetTop >= parent.clientHeight
                || childOffsetLeft >= parent.clientWidth
                || childOffsetBottom <= 0
                || childOffsetRight <= 0);

            return isOutOfBounds;

        }

    };

    //attach event handlers
    $(window).on({
        "touchmove scroll mousedown keydown": loop.start,
        "resize": wndw.resize
    });

    $(measurements.featureDetect);
    wndw.resize();

})();



// Chapter 3.b.: Cookies library
// https://github.com/js-cookie/js-cookie
// already loaded by detikVideo
/*;(function (factory) {
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

				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};

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
			return get(key, false);
		};
		api.getJSON = function (key) {
			return get(key, true);
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
*/


// Chapter 4: ReviveAVOC Context as ctx
(function(ctx) {

  //add by viyancs
  ctx.avocBuildEventUrl = function(eventName,tmplUrl,zoneId,bannerId) {
      var url = tmplUrl.replace("@zoneId",zoneId );
          url = url.replace("@bannerId",bannerId);
          url = url + eventName;
      return url;
          
  }
  //end
  ctx.log = function(header, txtLog, txtVal, forceConsoleLog) {
    if (forceConsoleLog || (ctx.configs.debug === true)) {
      if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
        console.log(header + ' ' + txtLog);
      } else {
        console.log(header + ' ' + txtLog, txtVal);
      };
    };
  }

  ctx.rlog = function(txtLog, txtVal) {
    ctx.log(ctx.vars.headerInfo, txtLog, txtVal, false);
  }

  ctx.rlogx = function(txtLog, txtVal) {
    ctx.log(ctx.vars.headerInfo, txtLog, txtVal, true);
  }

  ctx.imaAllAdsCompleted = 
  ctx.imaClick = function(e) {
    ctx.rlog('imaClick', e);
  }

  ctx.imaComplete = function(e) {
    ctx.rlog('imaComplete', e);
  }

  ctx.imaFirstQuartile = function(e) {
    ctx.rlog('imaFirstQuartile', e);
  }

  ctx.imaLoaded = function(e) {
    ctx.rlog('imaLoaded', e);
  }

  ctx.imaMidPoint = function(e) {
    ctx.rlog('imaMidPoint', e);
  }

  ctx.imaPaused = function(e) {
    ctx.rlog('imaPaused', e);
  }

  ctx.imaResumed = function(e) {
    ctx.rlog('imaResumed', e);
  }

  ctx.imaStarted = function(e) {
    ctx.rlog('imaStarted', e);
    ctx.resetAvocChecker();
    var ad = e.getAd();
    ctx.rlog('imaStarted ad', ad);
    var adInfoHdr = 'Ad';
    ctx.vars.avocHalfDurMaxCounter = Math.floor(ad.getDuration()/2);
    ctx.vars.avocFullDurMaxCounter = ad.getDuration();
    ctx.vars.avocHalfDurZBMaxCounter = ctx.vars.avocHalfDurMaxCounter;

    // add by viyancs
    ctx.rlog('Vyn Debug - Objective  AD',ad);
    var bannerId = null;
    var zoneId = null;
    var creativeId = ad.getWrapperCreativeIds();
    var adSystem = null;
    var urlAvocTwoSec = [];
    var urlAvocHalfDuration = [];
    var urlAvocTwoSecZB = [];
    var urlAvocHalfDurationZB = [];
    //set from nowraper if empty
    if (creativeId == '') { 
	creativeId = ad.getCreativeId();
        var split = creativeId.split("_");bannerId = split[1];zoneId = split[0];
        adSystem = ad.getAdSystem();
        urlAvocTwoSec[0] = ctx.avocBuildEventUrl(ReviveAVOC.vars.avocEventsList.avocTwoSec,ReviveAVOC.vars.avocUrlTemplate,zoneId,bannerId);
	urlAvocHalfDuration[0] = ctx.avocBuildEventUrl(ReviveAVOC.vars.avocEventsList.avocHalf,ReviveAVOC.vars.avocUrlTemplate,zoneId,bannerId);
	urlAvocTwoSecZB[0] = ctx.avocBuildEventUrl(ReviveAVOC.vars.avocEventsList.avocTwoSecZB,ReviveAVOC.vars.avocUrlTemplate,zoneId,bannerId);
	urlAvocHalfDurationZB[0] = ctx.avocBuildEventUrl(ReviveAVOC.vars.avocEventsList.avocHalfDurationZB,ReviveAVOC.vars.avocUrlTemplate,zoneId,bannerId);

    } else {
        adSystem = ad.getWrapperAdSystems();
	for(var i = 0; i<adSystem.length; i++){
    		if(adSystem[i] === 'Detikcom Adserver') {
			var split = creativeId[i].split("_");bannerId = split[1];zoneId = split[0];
			urlAvocTwoSec[i] = ctx.avocBuildEventUrl(ReviveAVOC.vars.avocEventsList.avocTwoSec,ReviveAVOC.vars.avocUrlTemplate,zoneId,bannerId);
			urlAvocHalfDuration[i] = ctx.avocBuildEventUrl(ReviveAVOC.vars.avocEventsList.avocHalf,ReviveAVOC.vars.avocUrlTemplate,zoneId,bannerId);
			urlAvocTwoSecZB[i] = ctx.avocBuildEventUrl(ReviveAVOC.vars.avocEventsList.avocTwoSecZB,ReviveAVOC.vars.avocUrlTemplate,zoneId,bannerId);	
			urlAvocHalfDurationZB[i] = ctx.avocBuildEventUrl(ReviveAVOC.vars.avocEventsList.avocHalfDurationZB,ReviveAVOC.vars.avocUrlTemplate,zoneId,bannerId);
    		}
  	}
    }
    ctx.vars.avocTwoSecURL = urlAvocTwoSec;
    ctx.vars.avocHalfDurURL = urlAvocHalfDuration;
    ctx.vars.avocTwoSecZBURL = urlAvocTwoSecZB;
    ctx.vars.avocHalfDurZBURL = urlAvocHalfDurationZB;
    ctx.rlog('Vyn Debug - Get Creative Id = ',ad.getCreativeId());
    ctx.rlog('Vyn Debug - Get Wrapper Creative Id = ',ad.getWrapperCreativeIds());
    ctx.rlog('Vyn Debug - Final Creative Id = ',creativeId);
    ctx.rlog('Vyn Debug - Final Zone Id = ',zoneId);
    ctx.rlog('Vyn Debug - Final Banner Id = ',bannerId);
    ctx.rlog('Vyn Debug - Adsystem  = ',adSystem);
    //ctx.rlog('Vyn Debug - Url Template  = ',ReviveAVOC.vars.avocUrlTemplate);
    ctx.rlog('Vyn Debug - Event List  = ',ReviveAVOC.vars.avocEventsList);
    ctx.rlog('Vyn Debug - AvocTwoSecUrl = ',urlAvocTwoSec);
    ctx.rlog('Vyn Debug - AvocHalfDurationUrl = ',urlAvocHalfDuration);
    ctx.rlog('Vyn Debug - AvocTwoSecZBUrl = ',urlAvocTwoSecZB);
    ctx.rlog('Vyn Debug - AvocHalfDurationZBUrl = ',urlAvocHalfDurationZB);
    //end
    
    ctx.vars.avocTrafficking = null;

    ctx.rlog('================================Ad=Begin===', null);
    ctx.rlog(adInfoHdr+' adId',                ad.getAdId());
    ctx.rlog(adInfoHdr+' adSystem',            ad.getAdSystem());
    ctx.rlog(adInfoHdr+' title',               ad.getTitle());
    ctx.rlog(adInfoHdr+' description',         ad.getDescription());
    ctx.rlog(adInfoHdr+' advertiserName',      ad.getAdvertiserName());
    ctx.rlog(adInfoHdr+' creativeId',          ad.getCreativeId());
    ctx.rlog(adInfoHdr+' creativeAdId',        ad.getCreativeAdId());
    ctx.rlog(adInfoHdr+' universalAdIdValue',  ad.getUniversalAdIdValue());
    ctx.rlog(adInfoHdr+' universalAdIdRegistry', ad.getUniversalAdIdRegistry());
    ctx.rlog(adInfoHdr+' contentType',         ad.getContentType());
    ctx.rlog(adInfoHdr+' duration',            ad.getDuration());
    ctx.rlog(adInfoHdr+' width',               ad.getWidth());
    ctx.rlog(adInfoHdr+' height',              ad.getHeight());
    ctx.rlog(adInfoHdr+' vastMediaWidth',      ad.getVastMediaWidth());
    ctx.rlog(adInfoHdr+' vastMediaHeight',     ad.getVastMediaHeight());
    ctx.rlog(adInfoHdr+' vastMediaBitrate',    ad.getVastMediaBitrate());
    ctx.rlog(adInfoHdr+' mediaUrl',            ad.getMediaUrl());
    ctx.rlog(adInfoHdr+' isSkippable',         ad.isSkippable());
    ctx.rlog(adInfoHdr+' skipTimeOffset',      ad.getSkipTimeOffset());
    ctx.rlog(adInfoHdr+' apiFramework',        ad.getApiFramework());
    ctx.rlog(adInfoHdr+' dealId',              ad.getDealId());
    ctx.rlog(adInfoHdr+' minSuggestedDuration',ad.getMinSuggestedDuration());
    ctx.rlog(adInfoHdr+' surveyUrl',           ad.getSurveyUrl());
    ctx.rlog(adInfoHdr+' isLinear',            ad.isLinear());
    ctx.rlog(adInfoHdr+' vastMediaBitrate',    ad.getVastMediaBitrate());
    ctx.rlog(adInfoHdr+' traffickingParametersString', ad.getTraffickingParametersString());
    ctx.rlog('================================Ad=End=====', null);
    var rlogInfo = {
      avocHalfDurMaxCounter: ctx.vars.avocHalfDurMaxCounter,
      avocHalfDurZBMaxCounter: ctx.vars.avocHalfDurZBMaxCounter,
      avocFullDurMaxCounter: ctx.vars.avocFullDurMaxCounter,
      avocTwoSecURL: ctx.vars.avocTwoSecURL,
      avocHalfDurURL: ctx.vars.avocHalfDurURL,
      avocFullDurURL: ctx.vars.avocFullDurURL,
      avocTwoSecZBURL: ctx.vars.avocTwoSecZBURL,
      avocHalfDurZBURL: ctx.vars.avocHalfDurZBURL
    }
    ctx.rlogx('imaStarted params info', rlogInfo);
  }

  ctx.imaThirdQuartile = function(e) {
    ctx.rlog('imaThirdQuartile', e);
  }

  ctx.imaVolumeChanged = function(e) {
    ctx.rlog('imaVolumeChanged', e);
  }

  ctx.imaAdBreakReady = function(e) {
    ctx.rlog('imaAdBreakReady', e);
  }

  ctx.imaAdBuffering = function(e) {
    ctx.rlog('imaAdBuffering', e);
  }

  ctx.imaAdMetadata = function(e) {
    ctx.rlog('imaAdMetadata', e);
  }

  ctx.resetAvocChecker = function() {
    ctx.vars.currentTimeFloorOld= -1;
    ctx.vars.avocTwoSecCounter  = 0;
    ctx.vars.avocTwoSecComplete = false;
    ctx.vars.avocHalfDurCounter = 0;
    ctx.vars.avocHalfDurComplete= false;
    ctx.vars.avocFullDurCounter = 0;
    ctx.vars.avocFullDurComplete= false;
    ctx.vars.avocTwoSecZBCounter  = 0;
    ctx.vars.avocTwoSecZBComplete = false;
    ctx.vars.avocHalfDurZBCounter = 0;
    ctx.vars.avocHalfDurZBComplete= false;

    ctx.vars.avocTwoSecURL      = null;
    ctx.vars.avocHalfDurURL     = null;
    ctx.vars.avocFullDurURL     = null;
    ctx.vars.avocTwoSecZBURL    = null;
    ctx.vars.avocHalfDurZBURL   = null;
    ctx.vars.avocTwoSecZBFailed = false;
    ctx.vars.avocHalfDurZBFailed= false;

    ctx.vars.avocAdViewability  = true;
  }

  ctx.imaAdProgress = function(e) {
    var adProgressData = e.getAdData();
    var currentTime = adProgressData.currentTime;
    var duration = adProgressData.duration;
    var currentTimeFloor = Math.floor(currentTime);
    if (currentTimeFloor !== ctx.vars.currentTimeFloorOld) {
      ctx.vars.currentTimeFloorOld = currentTimeFloor;
      //ctx.rlog('imaAdProgress', currentTimeFloor);
      // bulatkan adProgress yg terjadi setiap sepertiga detik, menjadi hanya setiap 1 detik
      ctx.avocChecker(currentTimeFloor, duration);
    }
  }

  ctx.imgShooter = function(url) {
    if(url !== null) {	
	for (var i=0;i<url.length;i++) {
      		if (url[i].indexOf('?') > -1) {
       			url[i] = url[i] + '&noCacheTS=' + $.now().toString();
      		} else {
        		url[i] = url[i] + '&noCacheTS=' + $.now().toString();
      		}
      		var imgTag = $("<img />").attr('src', url[i]).on('load', function() {
        		ctx.rlogx('imgShooter AVOC report', url[i]);
      		});
      		ctx.vars.imgBullets.push(imgTag);
	}
    }
  }

  ctx.avocChecker = function(current, duration) {
    ctx.rlog('avocChecker current time', current);
    //ctx.rlog('avocChecker duration', duration);
    var volume = ctx.vars.adsManager.getVolume();
    if (volume < ctx.configs.avocVolumeMinimum) {
      // jika audio lebih kecil dari volumeMinimum maka reset masing-masing avoc counter
      if (ctx.vars.avocTwoSecComplete === false) {
        ctx.vars.avocTwoSecCounter = 0;
      }
      if (ctx.vars.avocHalfDurComplete === false) {
        ctx.vars.avocHalfDurCounter = 0;
      }
      if (ctx.vars.avocFullDurComplete === false) {
        ctx.vars.avocFullDurCounter = 0;
      }
      if (ctx.vars.avocTwoSecZBComplete === false) {
        ctx.vars.avocTwoSecZBFailed = true;
      }
      if (ctx.vars.avocHalfDurZBComplete === false) {
        ctx.vars.avocHalfDurZBFailed = true;
      }
    } else {
      // audio ok sekarang hitung viewability
      // jika avocAdViewability false maka reset masing-masing avoc counter
      if (ctx.vars.avocAdViewability === false) {
        if (ctx.vars.avocTwoSecComplete === false) {
          ctx.vars.avocTwoSecCounter = 0;
        }
        if (ctx.vars.avocHalfDurComplete === false) {
          ctx.vars.avocHalfDurCounter = 0;
        }
        if (ctx.vars.avocFullDurComplete === false) {
          ctx.vars.avocFullDurCounter = 0;
        }
        if (ctx.vars.avocTwoSecZBComplete === false) {
          ctx.vars.avocTwoSecZBFailed = true;
        }
        if (ctx.vars.avocHalfDurZBComplete === false) {
          ctx.vars.avocHalfDurZBFailed = true;
        }
      } else {
        // audio ok , viewability ok , sekarang hitung durasi
        // lalu check apakah durasi sesuai syarat kirim event?
        if (ctx.vars.avocTwoSecComplete === false) {
          if (ctx.vars.avocTwoSecCounter === ctx.vars.avocTwoSecMaxCounter) {
            ctx.vars.avocTwoSecComplete = true;
            ctx.rlogx('avocChecker avocTwoSecComplete', null);
            setTimeout(function() {
              ctx.imgShooter(ctx.vars.avocTwoSecURL);
            }, 1);
          }
        }
        if (ctx.vars.avocHalfDurComplete === false) {
          if (ctx.vars.avocHalfDurCounter === ctx.vars.avocHalfDurMaxCounter) {
            ctx.vars.avocHalfDurComplete = true;
            ctx.rlogx('avocChecker avocHalfDurComplete', null);
            setTimeout(function() {
              ctx.imgShooter(ctx.vars.avocHalfDurURL);
            }, 1);
          }
        }
        if (ctx.vars.avocFullDurComplete === false) {
          if (ctx.vars.avocFullDurCounter === ctx.vars.avocFullDurMaxCounter) {
            ctx.vars.avocFullDurComplete = true;
            ctx.rlogx('avocChecker avocFullDurComplete', null);
            setTimeout(function() {
              ctx.imgShooter(ctx.vars.avocFullDurURL);
            }, 1);
          }
        }
        if (ctx.vars.avocTwoSecZBComplete === false) {
          if (ctx.vars.avocTwoSecZBCounter === ctx.vars.avocTwoSecZBMaxCounter) {
            ctx.vars.avocTwoSecZBComplete = true;
            ctx.rlogx('avocChecker avocTwoSecZBComplete', null);
            setTimeout(function() {
              ctx.imgShooter(ctx.vars.avocTwoSecZBURL);
            }, 1);
          }
        }
        if (ctx.vars.avocHalfDurZBComplete === false) {
          if (ctx.vars.avocHalfDurZBCounter === ctx.vars.avocHalfDurZBMaxCounter) {
            ctx.vars.avocHalfDurZBComplete = true;
            ctx.rlogx('avocChecker avocHalfDurZBComplete', null);
            setTimeout( 1);
          }
        }
        // naikkan counter per detik
        if (ctx.vars.avocTwoSecComplete === false) {
          ctx.vars.avocTwoSecCounter++;
        }
        if (ctx.vars.avocHalfDurComplete === false) {
          ctx.vars.avocHalfDurCounter++;
        }
        if (ctx.vars.avocFullDurComplete === false) {
          ctx.vars.avocFullDurCounter++;
        }
        if ((ctx.vars.avocTwoSecZBComplete === false) && (ctx.vars.avocTwoSecZBFailed === false)) {
          ctx.vars.avocTwoSecZBCounter++;
        }
        if ((ctx.vars.avocHalfDurZBComplete === false) && (ctx.vars.avocHalfDurZBFailed === false)) {
          ctx.vars.avocHalfDurZBCounter++;
        }
      }
    }
    if (ctx.configs.avocCalculateOnScreen === true) {
      $.onscreen();
    }
  }

  ctx.getQueryVariable = function(query, variable) {
    var result = null;
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      //ctx.rlog('getQueryVariable pair', pair);
      if (pair.length >= 2) {
        var n = pair[0];
        var v = pair[1];
        if (decodeURIComponent(n.trim()) === variable) {
          result = decodeURIComponent(v.trim());
        }
      }
    }
    return result;
  }

  ctx.imaContentPauseRequested = function(e) {
    ctx.rlog('imaContentPauseRequested', e);
  }

  ctx.imaContentResumeRequested = function(e) {
    ctx.rlog('imaContentResumeRequested', e);
  }

  ctx.imaDurationChange = function(e) {
    ctx.rlog('imaDurationChange', e);
  }

  ctx.imaImpression = function(e) {
    ctx.rlog('imaImpression', e);
  }

  ctx.imaInteraction = function(e) {
    ctx.rlog('imaInteraction', e);
  }

  ctx.imaLinearChanged = function(e) {
    ctx.rlog('imaLinearChanged', e);
  }

  ctx.imaLog = function(e) {
    ctx.rlog('imaLog', e);
  }

  ctx.imaSkippableStateChanged = function(e) {
    ctx.rlog('imaSkippableStateChanged', e);
  }

  ctx.imaSkipped = function(e) {
    ctx.rlog('imaSkipped', e);
  }

  ctx.imaUserClose = function(e) {
    ctx.rlog('imaUserClose', e);
  }

  ctx.imaVolumeMuted = 
  // fungsi ini dipanggil oleh detikVideo setelah plugin ima menyala
  ctx.adsManagerLoaded = function(imaPlugin) {
    if (imaPlugin !== null) {
      ctx.rlog('adsManagerLoaded imaPlugin', imaPlugin);
      ctx.vars.adsManager = imaPlugin.controller.sdkImpl.adsManager;
      ctx.vars.divNameForAvoc = imaPlugin.controller.adUi.controlPrefix + 'ima-ad-container';
      ctx.rlog('adsManagerLoaded divName for AVOC', ctx.vars.divNameForAvoc);
      ctx.rlog('adsManagerLoaded Volume of IMA3'  , ctx.vars.adsManager.getVolume());
      imaPlugin.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, ctx.imaAllAdsCompleted.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.CLICK,             ctx.imaClick.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.COMPLETE,          ctx.imaComplete.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE,    ctx.imaFirstQuartile.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.LOADED,            ctx.imaLoaded.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.MIDPOINT,          ctx.imaMidPoint.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.PAUSED,            ctx.imaPaused.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.RESUMED,           ctx.imaResumed.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.STARTED,           ctx.imaStarted.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE,    ctx.imaThirdQuartile.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED,    ctx.imaVolumeChanged.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY,    ctx.imaAdBreakReady.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.AD_BUFFERING,      ctx.imaAdBuffering.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.AD_METADATA,       ctx.imaAdMetadata.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS,       ctx.imaAdProgress.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,  ctx.imaContentPauseRequested.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, ctx.imaContentResumeRequested.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE,   ctx.imaDurationChange.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.IMPRESSION,        ctx.imaImpression.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.INTERACTION,       ctx.imaInteraction.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED,    ctx.imaLinearChanged.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.LOG,               ctx.imaLog.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,  ctx.imaSkippableStateChanged.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.SKIPPED,           ctx.imaSkipped.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.USER_CLOSE,        ctx.imaUserClose.bind(ctx));
      imaPlugin.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED,      ctx.imaVolumeMuted.bind(ctx));
      if (ctx.configs.avocCalculateOnScreen === true) {
        $('#'+ctx.vars.divNameForAvoc).on('onscreen', function(event, measurement) {
          if (measurement.onscreen === true) {
            if (measurement.percentInview >= 50) {
              ctx.vars.avocAdViewability = true;
              ctx.rlog('adsManagerLoaded avocAdViewability is true, onscreen is true', null);
            } else {
              ctx.vars.avocAdViewability = false;
              ctx.rlog('adsManagerLoaded avocAdViewability is false, onscreen is true', null);
            }
          } else {
            ctx.vars.avocAdViewability = false;
            ctx.rlog('adsManagerLoaded avocAdViewability is false, onscreen is false', null);
          }
        });
      }
    }
  }

  // add little plugin for jquery for finding node with namespace
  $.fn.filterNode = function(name) {
    return this.find('*').filter(;
  };

  // fungsi ini dipanggil oleh detikVideo sebelum plugin ima menyala
  ctx.getAdRules = function() {
    //if (ctx.configs.adRules !== null) {
    if ((ctx.configs.adRules !== null) && (typeof ctx.configs.adRules === 'string') && (ctx.configs.adRules !== '')) {
      ctx.rlog('getAdRules url', ctx.configs.adRules);
      try {
      $.ajax({
        type: 'GET',
        async: false,
        url: ctx.configs.adRules,
        dataType: 'text',
        success: function(text) {
          ctx.vars.vastXML = text;
          ctx.rlog('getAdRules vastXML is', ctx.vars.vastXML);
          var xmlDoc = $.parseXML(text);
          var xml = $(xmlDoc);
          // ambil AdParameters dari vast atau vast-wrapper, jika ada, masukkan ke ctx.vars.avocTrafficking
          var avocTrafficking = xml.find('AdParameters').text().trim();
          if ((avocTrafficking !== null) && (typeof avocTrafficking === 'string') && (avocTrafficking !== '')) {
            ctx.vars.avocTrafficking = avocTrafficking;
            ctx.rlog('getAdRules success to find avocTrafficking !', ctx.vars.avocTrafficking);
          } else {
            ctx.rlog('getAdRules fail to find avocTrafficking !', null);
          }
          // ambil nama cookie yang ditempel di setiap akhir AdTagURI dari vmap, jika ada
          xml.filterNode('vmap:AdTagURI').each(function() {
            var vmapAdTagURI = $(this).text().trim();
            ctx.rlog('getAdRules vmap:AdTagURI', vmapAdTagURI);
            if ((typeof vmapAdTagURI === 'string') && (vmapAdTagURI !== '')) {
              var splitURI = vmapAdTagURI.split('?');
              if (splitURI.length>1) {
                var queryURI = splitURI[1];
                var avocCookieName = {
                  avocTwoSecCN  : ctx.getQueryVariable(queryURI, 'avoc2SecCookie'),
                  avocHalfDurCN : ctx.getQueryVariable(queryURI, 'avocHalfCookie'),
                  avocFullDurCN : ctx.getQueryVariable(queryURI, 'avocFullCookie'),
                  avocTwoSecZBCN  : ctx.getQueryVariable(queryURI, 'avoc2SecZBCookie'),
                  avocHalfDurZBCN : ctx.getQueryVariable(queryURI, 'avocHalfZBCookie')
                };
                ctx.vars.avocCookieNames.push(avocCookieName);
                ctx.rlog('getAdRules avocCookieName', avocCookieName);
              };
            }
          });
          ctx.rlog('getAdRules avocCookieNames', ctx.vars.avocCookieNames);
        }
      });
      } catch (error) {
        ctx.rlogx('getAdRules catches exception', null);
      }
    }
  }

  ctx.init = 
})(ReviveAVOC);

ReviveAVOC.init();