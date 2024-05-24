(this, (function () { 'use strict';

  
  var runningOnBrowser = typeof window !== "undefined";
  var isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
  var supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;
  var supportsClassList = runningOnBrowser && "classList" in document.createElement("p");
  var isHiDpi = runningOnBrowser && window.devicePixelRatio > 1;

  var defaultSettings = {
    elements_selector: ".lazy",
    container: isBot || runningOnBrowser ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_bg_hidpi: "bg-hidpi",
    data_bg_multi: "bg-multi",
    data_bg_multi_hidpi: "bg-multi-hidpi",
    data_bg_set: "bg-set",
    data_poster: "poster",
    class_applied: "applied",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    class_entered: "entered",
    class_exited: "exited",
    unobserve_completed: true,
    unobserve_entered: false,
    cancel_on_exit: true,
    callback_enter: null,
    callback_exit: null,
    callback_applied: null,
    callback_loading: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    callback_cancel: null,
    use_native: false,
    restore_on_error: false
  };
  var getExtendedSettings = 

  /* Creates instance and notifies it through the window element */
  var createInstance = 
  /* Auto initialization of one or more instances of lazyload, depending on the 
      options passed in (plain object or an array) */


  var autoInitialize = function autoInitialize(classObj, options) {
    if (!options) {
      return;
    }

    if (!options.length) {
      // Plain object
      createInstance(classObj, options);
    } else {
      // Array of objects
      for (var i = 0, optionsItem; optionsItem = options[i]; i += 1) {
        createInstance(classObj, optionsItem);
      }
    }
  };

  var SRC = "src";
  var SRCSET = "srcset";
  var SIZES = "sizes";
  var POSTER = "poster";
  var ORIGINALS = "llOriginalAttrs";
  var DATA = "data";

  var statusLoading = "loading";
  var statusLoaded = "loaded";
  var statusApplied = "applied";
  var statusEntered = "entered";
  var statusError = "error";
  var statusNative = "native";

  var dataPrefix = "data-";
  var statusDataName = "ll-status";
  var getData = 
  var setData = 
  var getStatus = 
  var setStatus = 
  var resetStatus = 
  var hasEmptyStatus = 
  var hasStatusLoading = function hasStatusLoading(element) {
    return getStatus(element) === statusLoading;
  };
  var hasStatusError = function hasStatusError(element) {
    return getStatus(element) === statusError;
  };
  var hasStatusNative = 
  var statusesAfterLoading = [statusLoading, statusLoaded, statusApplied, statusError];
  var hadStartedLoading = function hadStartedLoading(element) {
    return statusesAfterLoading.indexOf(getStatus(element)) >= 0;
  };

  var safeCallback = function safeCallback(callback, arg1, arg2, arg3) {
    if (!callback) {
      return;
    }

    if (arg3 !== undefined) {
      callback(arg1, arg2, arg3);
      return;
    }

    if (arg2 !== undefined) {
      callback(arg1, arg2);
      return;
    }

    callback(arg1);
  };

  var addClass = 
  var removeClass = 

  var addTempImage = 
  var deleteTempImage = 
  var getTempImage = function getTempImage(element) {
    return element.llTempImage;
  };

  var unobserve = function unobserve(element, instance) {
    if (!instance) return;
    var observer = instance._observer;
    if (!observer) return;
    observer.unobserve(element);
  };
  var resetObserver = 
  var unobserveEntered = function unobserveEntered(element, settings, instance) {
    if (settings.unobserve_entered) unobserve(element, instance);
  };

  var updateLoadingCount = function updateLoadingCount(instance, delta) {
    if (!instance) return;
    instance.loadingCount += delta;
  };
  var decreaseToLoadCount = function decreaseToLoadCount(instance) {
    if (!instance) return;
    instance.toLoadCount -= 1;
  };
  var setToLoadCount = function setToLoadCount(instance, value) {
    if (!instance) return;
    instance.toLoadCount = value;
  };
  var isSomethingLoading = function isSomethingLoading(instance) {
    return instance.loadingCount > 0;
  };
  var haveElementsToLoad = 

  var getSourceTags = 

  var forEachPictureSource = function forEachPictureSource(element, fn) {
    var parent = element.parentNode;

    if (!parent || parent.tagName !== "PICTURE") {
      return;
    }

    var sourceTags = getSourceTags(parent);
    sourceTags.forEach(fn);
  };
  var forEachVideoSource = function forEachVideoSource(element, fn) {
    var sourceTags = getSourceTags(element);
    sourceTags.forEach(fn);
  };

  var attrsSrc = [SRC];
  var attrsSrcPoster = [SRC, POSTER];
  var attrsSrcSrcsetSizes = [SRC, SRCSET, SIZES];
  var attrsData = [DATA];
  var hasOriginalAttrs = function hasOriginalAttrs(element) {
    return !!element[ORIGINALS];
  };
  var getOriginalAttrs = 
  var deleteOriginalAttrs =  // ## SAVE ##

  var setOriginalsObject = function setOriginalsObject(element, attributes) {
    if (hasOriginalAttrs(element)) {
      return;
    }

    var originals = {};
    attributes.forEach(;
    element[ORIGINALS] = originals;
  };
  var saveOriginalBackgroundStyle = function saveOriginalBackgroundStyle(element) {
    if (hasOriginalAttrs(element)) {
      return;
    }

    element[ORIGINALS] = {
      backgroundImage: element.style.backgroundImage
    };
  }; // ## RESTORE ##

  var setOrResetAttribute = 

  var restoreOriginalAttrs = function restoreOriginalAttrs(element, attributes) {
    if (!hasOriginalAttrs(element)) {
      return;
    }

    var originals = getOriginalAttrs(element);
    attributes.forEach(;
  };
  var restoreOriginalBgImage = function restoreOriginalBgImage(element) {
    if (!hasOriginalAttrs(element)) {
      return;
    }

    var originals = getOriginalAttrs(element);
    element.style.backgroundImage = originals.backgroundImage;
  };

  var manageApplied = function manageApplied(element, settings, instance) {
    addClass(element, settings.class_applied);
    setStatus(element, statusApplied); // Instance is not provided when loading is called from static class

    if (!instance) return;

    if (settings.unobserve_completed) {
      // Unobserve now because we can't do it on load
      unobserve(element, settings);
    }

    safeCallback(settings.callback_applied, element, instance);
  };
  var manageLoading = function manageLoading(element, settings, instance) {
    addClass(element, settings.class_loading);
    setStatus(element, statusLoading); // Instance is not provided when loading is called from static class

    if (!instance) return;
    updateLoadingCount(instance, +1);
    safeCallback(settings.callback_loading, element, instance);
  };
  var setAttributeIfValue = 
  var setImageAttributes = function setImageAttributes(element, settings) {
    setAttributeIfValue(element, SIZES, getData(element, settings.data_sizes));
    setAttributeIfValue(element, SRCSET, getData(element, settings.data_srcset));
    setAttributeIfValue(element, SRC, getData(element, settings.data_src));
  };
  var setSourcesImg = function setSourcesImg(imgEl, settings) {
    forEachPictureSource(imgEl, ;
    setOriginalsObject(imgEl, attrsSrcSrcsetSizes);
    setImageAttributes(imgEl, settings);
  };
  var setSourcesIframe = function setSourcesIframe(iframe, settings) {
    setOriginalsObject(iframe, attrsSrc);
    setAttributeIfValue(iframe, SRC, getData(iframe, settings.data_src));
  };
  var setSourcesVideo = function setSourcesVideo(videoEl, settings) {
    forEachVideoSource(videoEl, function (sourceEl) {
      setOriginalsObject(sourceEl, attrsSrc);
      setAttributeIfValue(sourceEl, SRC, getData(sourceEl, settings.data_src));
    });
    setOriginalsObject(videoEl, attrsSrcPoster);
    setAttributeIfValue(videoEl, POSTER, getData(videoEl, settings.data_poster));
    setAttributeIfValue(videoEl, SRC, getData(videoEl, settings.data_src));
    videoEl.load();
  };
  var setSourcesObject = function setSourcesObject(object, settings) {
    setOriginalsObject(object, attrsData);
    setAttributeIfValue(object, DATA, getData(object, settings.data_src));
  };
  var setBackground = function setBackground(element, settings, instance) {
    var bg1xValue = getData(element, settings.data_bg);
    var bgHiDpiValue = getData(element, settings.data_bg_hidpi);
    var bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;
    if (!bgDataValue) return;
    element.style.backgroundImage = "url(\"".concat(bgDataValue, "\")");
    getTempImage(element).setAttribute(SRC, bgDataValue);
    manageLoading(element, settings, instance);
  }; // NOTE: THE TEMP IMAGE TRICK CANNOT BE DONE WITH data-multi-bg
  // BECAUSE INSIDE ITS VALUES MUST BE WRAPPED WITH URL() AND ONE OF THEM
  // COULD BE A GRADIENT BACKGROUND IMAGE

  var setMultiBackground = function setMultiBackground(element, settings, instance) {
    var bg1xValue = getData(element, settings.data_bg_multi);
    var bgHiDpiValue = getData(element, settings.data_bg_multi_hidpi);
    var bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;

    if (!bgDataValue) {
      return;
    }

    element.style.backgroundImage = bgDataValue;
    manageApplied(element, settings, instance);
  };
  var setImgsetBackground = function setImgsetBackground(element, settings, instance) {
    var bgImgSetDataValue = getData(element, settings.data_bg_set);

    if (!bgImgSetDataValue) {
      return;
    }

    var imgSetValues = bgImgSetDataValue.split("|");
    var bgImageValues = imgSetValues.map(function (value) {
      return "image-set(".concat(value, ")");
    });
    element.style.backgroundImage = bgImageValues.join(); // Temporary fix for Chromeium with the -webkit- prefix

    if (element.style.backgroundImage === '') {
      bgImageValues = imgSetValues.map(;
      element.style.backgroundImage = bgImageValues.join();
    }

    manageApplied(element, settings, instance);
  };
  var setSourcesFunctions = {
    IMG: setSourcesImg,
    IFRAME: setSourcesIframe,
    VIDEO: setSourcesVideo,
    OBJECT: setSourcesObject
  };
  var setSourcesNative = function setSourcesNative(element, settings) {
    var setSourcesFunction = setSourcesFunctions[element.tagName];

    if (!setSourcesFunction) {
      return;
    }

    setSourcesFunction(element, settings);
  };
  var setSources = function setSources(element, settings, instance) {
    var setSourcesFunction = setSourcesFunctions[element.tagName];

    if (!setSourcesFunction) {
      return;
    }

    setSourcesFunction(element, settings);
    manageLoading(element, settings, instance);
  };

  var elementsWithLoadEvent = ["IMG", "IFRAME", "VIDEO", "OBJECT"];
  var hasLoadEvent = 
  var checkFinish = function checkFinish(settings, instance) {
    if (instance && !isSomethingLoading(instance) && !haveElementsToLoad(instance)) {
      safeCallback(settings.callback_finish, instance);
    }
  };
  var addEventListener = function addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler);
    element.llEvLisnrs[eventName] = handler;
  };
  var removeEventListener = 
  var hasEventListeners = 
  var addEventListeners = function addEventListeners(element, loadHandler, errorHandler) {
    if (!hasEventListeners(element)) element.llEvLisnrs = {};
    var loadEventName = element.tagName === "VIDEO" ? "loadeddata" : "load";
    addEventListener(element, loadEventName, loadHandler);
    addEventListener(element, "error", errorHandler);
  };
  var removeEventListeners = function removeEventListeners(element) {
    if (!hasEventListeners(element)) {
      return;
    }

    var eventListeners = element.llEvLisnrs;

    for (var eventName in eventListeners) {
      var handler = eventListeners[eventName];
      removeEventListener(element, eventName, handler);
    }

    delete element.llEvLisnrs;
  };
  var doneHandler = function doneHandler(element, settings, instance) {
    deleteTempImage(element);
    updateLoadingCount(instance, -1);
    decreaseToLoadCount(instance);
    removeClass(element, settings.class_loading);

    if (settings.unobserve_completed) {
      unobserve(element, instance);
    }
  };
  var loadHandler = function loadHandler(event, element, settings, instance) {
    var goingNative = hasStatusNative(element);
    doneHandler(element, settings, instance);
    addClass(element, settings.class_loaded);
    setStatus(element, statusLoaded);
    safeCallback(settings.callback_loaded, element, instance);
    if (!goingNative) checkFinish(settings, instance);
  };
  var errorHandler = function errorHandler(event, element, settings, instance) {
    var goingNative = hasStatusNative(element);
    doneHandler(element, settings, instance);
    addClass(element, settings.class_error);
    setStatus(element, statusError);
    safeCallback(settings.callback_error, element, instance);
    if (settings.restore_on_error) restoreOriginalAttrs(element, attrsSrcSrcsetSizes);
    if (!goingNative) checkFinish(settings, instance);
  };
  var addOneShotEventListeners = function addOneShotEventListeners(element, settings, instance) {
    var elementToListenTo = getTempImage(element) || element;

    if (hasEventListeners(elementToListenTo)) {
      // This happens when loading is retried twice
      return;
    }

    var _loadHandler = function _loadHandler(event) {
      loadHandler(event, element, settings, instance);
      removeEventListeners(elementToListenTo);
    };

    var _errorHandler = function _errorHandler(event) {
      errorHandler(event, element, settings, instance);
      removeEventListeners(elementToListenTo);
    };

    addEventListeners(elementToListenTo, _loadHandler, _errorHandler);
  };

  var loadBackground = function loadBackground(element, settings, instance) {
    addTempImage(element);
    addOneShotEventListeners(element, settings, instance);
    saveOriginalBackgroundStyle(element);
    setBackground(element, settings, instance);
    setMultiBackground(element, settings, instance);
    setImgsetBackground(element, settings, instance);
  };

  var loadRegular = function loadRegular(element, settings, instance) {
    addOneShotEventListeners(element, settings, instance);
    setSources(element, settings, instance);
  };

  var load = function load(element, settings, instance) {
    if (hasLoadEvent(element)) {
      loadRegular(element, settings, instance);
    } else {
      loadBackground(element, settings, instance);
    }
  };
  var loadNative = function loadNative(element, settings, instance) {
    element.setAttribute("loading", "lazy");
    addOneShotEventListeners(element, settings, instance);
    setSourcesNative(element, settings);
    setStatus(element, statusNative);
  };

  var removeImageAttributes = 

  var resetSourcesImg = function resetSourcesImg(element) {
    forEachPictureSource(element, function (sourceTag) {
      removeImageAttributes(sourceTag);
    });
    removeImageAttributes(element);
  };

  var restoreImg = function restoreImg(imgEl) {
    forEachPictureSource(imgEl, function (sourceEl) {
      restoreOriginalAttrs(sourceEl, attrsSrcSrcsetSizes);
    });
    restoreOriginalAttrs(imgEl, attrsSrcSrcsetSizes);
  };
  var restoreVideo = function restoreVideo(videoEl) {
    forEachVideoSource(videoEl, function (sourceEl) {
      restoreOriginalAttrs(sourceEl, attrsSrc);
    });
    restoreOriginalAttrs(videoEl, attrsSrcPoster);
    videoEl.load();
  };
  var restoreIframe = function restoreIframe(iframeEl) {
    restoreOriginalAttrs(iframeEl, attrsSrc);
  };
  var restoreObject = 
  var restoreFunctions = {
    IMG: restoreImg,
    IFRAME: restoreIframe,
    VIDEO: restoreVideo,
    OBJECT: restoreObject
  };

  var restoreAttributes = 

  var resetClasses = function resetClasses(element, settings) {
    if (hasEmptyStatus(element) || hasStatusNative(element)) {
      return;
    }

    removeClass(element, settings.class_entered);
    removeClass(element, settings.class_exited);
    removeClass(element, settings.class_applied);
    removeClass(element, settings.class_loading);
    removeClass(element, settings.class_loaded);
    removeClass(element, settings.class_error);
  };

  var restore = function restore(element, settings) {
    restoreAttributes(element);
    resetClasses(element, settings);
    resetStatus(element);
    deleteOriginalAttrs(element);
  };

  var cancelLoading = function cancelLoading(element, entry, settings, instance) {
    if (!settings.cancel_on_exit) return;
    if (!hasStatusLoading(element)) return;
    if (element.tagName !== "IMG") return; //Works only on images

    removeEventListeners(element);
    resetSourcesImg(element);
    restoreImg(element);
    removeClass(element, settings.class_loading);
    updateLoadingCount(instance, -1);
    resetStatus(element);
    safeCallback(settings.callback_cancel, element, entry, instance);
  };

  var onEnter = function onEnter(element, entry, settings, instance) {
    var dontLoad = hadStartedLoading(element);
    /* Save status 
    before setting it, to prevent loading it again. Fixes #526. */

    setStatus(element, statusEntered);
    addClass(element, settings.class_entered);
    removeClass(element, settings.class_exited);
    unobserveEntered(element, settings, instance);
    safeCallback(settings.callback_enter, element, entry, instance);
    if (dontLoad) return;
    load(element, settings, instance);
  };
  var onExit = function onExit(element, entry, settings, instance) {
    if (hasEmptyStatus(element)) return; //Ignore the first pass, at landing

    addClass(element, settings.class_exited);
    cancelLoading(element, entry, settings, instance);
    safeCallback(settings.callback_exit, element, entry, instance);
  };

  var tagsWithNativeLazy = ["IMG", "IFRAME", "VIDEO"];
  var shouldUseNative = 
  var loadAllNative = function loadAllNative(elements, settings, instance) {
    elements.forEach(function (element) {
      if (tagsWithNativeLazy.indexOf(element.tagName) === -1) {
        return;
      }

      loadNative(element, settings, instance);
    });
    setToLoadCount(instance, 0);
  };

  var isIntersecting = 

  var getObserverSettings = 

  var intersectionHandler = function intersectionHandler(entries, settings, instance) {
    entries.forEach(function (entry) {
      return isIntersecting(entry) ? onEnter(entry.target, entry, settings, instance) : onExit(entry.target, entry, settings, instance);
    });
  };

  var observeElements = 
  var updateObserver = 
  var setObserver = function setObserver(settings, instance) {
    if (!supportsIntersectionObserver || shouldUseNative(settings)) {
      return;
    }

    instance._observer = new IntersectionObserver( getObserverSettings(settings));
  };

  var toArray = 
  var queryElements = 
  var excludeManagedElements = function excludeManagedElements(elements) {
    return toArray(elements).filter(hasEmptyStatus);
  };
  var hasError = 
  var filterErrorElements = 
  var getElementsToLoad = function getElementsToLoad(elements, settings) {
    return excludeManagedElements(elements || queryElements(settings));
  };

  var retryLazyLoad = function retryLazyLoad(settings, instance) {
    var errorElements = filterErrorElements(queryElements(settings));
    errorElements.forEach(;
    instance.update();
  };
  var setOnlineCheck = function setOnlineCheck(settings, instance) {
    if (!runningOnBrowser) {
      return;
    }

    instance._onlineHandler = 

    window.addEventListener("online", instance._onlineHandler);
  };
  var resetOnlineCheck = function resetOnlineCheck(instance) {
    if (!runningOnBrowser) {
      return;
    }

    window.removeEventListener("online", instance._onlineHandler);
  };

  var LazyLoad = function LazyLoad(customSettings, elements) {
    var settings = getExtendedSettings(customSettings);
    this._settings = settings;
    this.loadingCount = 0;
    setObserver(settings, this);
    setOnlineCheck(settings, this);
    this.update(elements);
  };

  LazyLoad.prototype = {
    update: function update(givenNodeset) {
      var settings = this._settings;
      var elementsToLoad = getElementsToLoad(givenNodeset, settings);
      setToLoadCount(this, elementsToLoad.length);

      if (isBot || !supportsIntersectionObserver) {
        this.loadAll(elementsToLoad);
        return;
      }

      if (shouldUseNative(settings)) {
        loadAllNative(elementsToLoad, settings, this);
        return;
      }

      updateObserver(this._observer, elementsToLoad);
    },
    destroy: function destroy() {
      // Observer
      if (this._observer) {
        this._observer.disconnect();
      } // Clean handlers


      resetOnlineCheck(this); // Clean custom attributes on elements

      queryElements(this._settings).forEach(function (element) {
        deleteOriginalAttrs(element);
      }); // Delete all internal props

      delete this._observer;
      delete this._settings;
      delete this._onlineHandler;
      delete this.loadingCount;
      delete this.toLoadCount;
    },
    loadAll: function loadAll(elements) {
      var _this = this;

      var settings = this._settings;
      var elementsToLoad = getElementsToLoad(elements, settings);
      elementsToLoad.forEach(;
    },
    restoreAll:   };

  LazyLoad.load = 

  LazyLoad.resetStatus =  // Automatic instances creation if required (useful for async script loading)


  if (runningOnBrowser) {
    autoInitialize(LazyLoad, window.lazyLoadOptions);
  }

  return LazyLoad;

})));

/*  ********************************************************
 *   Lazy Load images
 *  ********************************************************
 */
(function ($) {
	$(function () {
		// prettier-ignore
		// https://github.com/verlok/vanilla-lazyload
		var lazyLoadInstance = new LazyLoad({
			// elements_selector: ".lazy",
			// container: isBot || runningOnBrowser ? document : null,
			// threshold: 300,
			// thresholds: null,
			// data_src: "src",
			// data_srcset: "srcset",
			// data_sizes: "sizes",
			// data_bg: "bg",
			// data_bg_hidpi: "bg-hidpi",
			// data_bg_multi: "bg-multi",
			// data_bg_multi_hidpi: "bg-multi-hidpi",
			// data_poster: "poster",
			// class_applied: "applied",
			// class_loading: "loading",
			// class_loaded: "loaded",
			// class_error: "error",
			// class_entered: "entered",
			// class_exited: "exited",
			// unobserve_completed: true,
			// unobserve_entered: false,
			// cancel_on_exit: true,
			// callback_enter: null,
			// callback_exit: null,
			// callback_applied: null,
			// callback_loading: null,
			// callback_loaded: null,
			// callback_error: null,
			// callback_finish: null,
			// callback_cancel: null,
			// use_native: false,
		});
	});
})(jQuery);

/*!
 * Scrollspy Plugin
 * Author: r3plica
 * Licensed under the MIT license
 */
; (function ($, window, document, undefined) {

    // Add our plugin to fn
    $.fn.extend({

        // Scrollspy is the name of the plugin
        scrollspy: function (options) {

            // Define our defaults
            var defaults = {
                namespace: 'scrollspy',
                activeClass: 'active',
                animate: false,
                duration: 1000,
                offset: 0,
                container: window,
                replaceState: false
            };

            // Add any overriden options to a new object
            options = $.extend({}, defaults, options);

            // Adds two numbers together
            var add = 
            // Find our elements
            var findElements = function (links) {

                // Declare our array
                var elements = [];

                // Loop through the links
                for (var i = 0; i < links.length; i++) {

                    // Get our current link
                    var link = links[i];

                    // Get our hash
                    var hash = $(link).attr("href");

                    // Store our has as an element
                    var element = $(hash);

                    // If we have an element matching the hash
                    if (element.length > 0) {

                        // Get our offset
                        var top = Math.floor(element.offset().top),
                            bottom = top + Math.floor(element.outerHeight());

                        // Add to our array
                        elements.push({ element: element, hash: hash, top: top, bottom: bottom });
                    }                    
                }

                // Return our elements
                return elements;
            };

            // Find our link from a hash
            var findLink = function (links, hash) {

                // For each link
                for (var i = 0; i < links.length; i++) {

                    // Get our current link
                    var link = $(links[i]);

                    // If our hash matches the link href
                    if (link.attr("href") === hash) {

                        // Return the link
                        return link;
                    }
                }
            };

            // Reset classes on our elements
            var resetClasses = 

            // Store last fired scroll event
            var scrollArea = '';

            // For each scrollspy instance
            return this.each(function () {

                // Declare our global variables
                var element = this,
                    container = $(options.container);

                // Get our objects
                var links = $(element).find('a');

                // Loop through our links
                for (var i = 0; i < links.length; i++) {

                    // Get our current link
                    var link = links[i];

                    // Bind the click event
                    $(link).on("click", function (e) {
                        
                        // Get our target
                        var target = $(this).attr("href"),
                            $target = $(target);

                        // If we have the element
                        if ($target.length > 0) {

                            // Get it's scroll position
                            var top = add($target.offset().top, options.offset);
                            
                            // If animation is on
                            if (options.animate) {

                                // Animate our scroll
                                $('html, body').animate({ scrollTop: top }, options.duration);
                            } else {

                                // Scroll to our position
                                window.scrollTo(0, top);
                            }
                            
                            // Prevent our link
                            e.preventDefault();
                        }
                    });
                }

                // Set links
                resetClasses(links);

                // Get our elements
                var elements = findElements(links);

                var trackChanged = function() {

                    // Get the position and store in an object
                    var position = {
                        top: add($(this).scrollTop(), Math.abs(options.offset)),
                        left: $(this).scrollLeft()
                    };

                    // Create a variable for our link
                    var link;

                    // Loop through our elements
                    for (var i = 0; i < elements.length; i++) {

                        // Get our current item
                        var current = elements[i];

                        // If we are within the boundaries of our element
                        if (position.top >= current.top && position.top < current.bottom) {

                            // get our element
                            var hash = current.hash;

                            // Get the link
                            link = findLink(links, hash);

                            // If we have a link
                            if (link) {
                                // If we have an onChange function
                                if (options.onChange && (scrollArea !== hash)) {

                                    // Fire our onChange function
                                    options.onChange(current.element, $(element), position);

                                    // set scrollArea
                                    scrollArea = hash;

                                }

                                // Update url
                                if (options.replaceState) {
                                    history.replaceState( {}, '', '/' + hash )
                                }

                                // Reset the classes on all other link
                                resetClasses(links);

                                // Add our active link to our parent
                                link.parent().addClass(options.activeClass);

                                // break our loop
                                break;
                            }
                        }
                    }

                    // If we don't have a link and we have a exit function
                    if (!link && (scrollArea !== 'exit') && options.onExit) {

                        // Fire our onChange function
                        options.onExit($(element), position);

                        // Reset the classes on all other link
                        resetClasses(links);

                        // set scrollArea
                        scrollArea = 'exit';

                        // Update url
                        if (options.replaceState) {
                            history.replaceState( {}, '', '/' )
                        }

                    }
                }

                // Add a listener to the window
                container.bind('scroll.' + options.namespace, ;

                $( document ).ready(

            });
        }
    });
})(jQuery, window, document, undefined);
'use strict';

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(typeof window !== 'undefined' ? window : this, );

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/
!0,function(){"use strict";ar e=),i=);window.StickySidebar=i,)});
// ==== FOOTER ==== //

(function ($) {
	$(function () {
		$("#np_nav_aside").stickySidebar({
			topSpacing: 80,
			containerSelector: "#np_main",
			innerWrapperSelector: "#np_nav_aside_",
		});

		$("#np_nav_aside_ul").scrollspy({
			animate: true,
			duration: 800,
			offset: -81,
		});
		$("#np_header_nav_ul").scrollspy({
			animate: true,
			duration: 800,
			offset: -100,
		});
		$("#np_header_nav_init").on("click", function () {
			$("#np_header_nav_ul").slideToggle();
		});
		$("#np_header_nav_ul a").on("click", ;
	});
})(jQuery);
