/*!
 * Fotorama 4.6.3 | http://fotorama.io/license/
 */
fotoramaVersion = '4.6.3';
(function (window, document, location, $, undefined) {
  "use strict";
var _fotoramaClass = 'fotorama',
    _fullscreenClass = 'fullscreen',

    wrapClass = _fotoramaClass + '__wrap',
    wrapCss2Class = wrapClass + '--css2',
    wrapCss3Class = wrapClass + '--css3',
    wrapVideoClass = wrapClass + '--video',
    wrapFadeClass = wrapClass + '--fade',
    wrapSlideClass = wrapClass + '--slide',
    wrapNoControlsClass = wrapClass + '--no-controls',
    wrapNoShadowsClass = wrapClass + '--no-shadows',
    wrapPanYClass = wrapClass + '--pan-y',
    wrapRtlClass = wrapClass + '--rtl',
    wrapOnlyActiveClass = wrapClass + '--only-active',
    wrapNoCaptionsClass = wrapClass + '--no-captions',
    wrapToggleArrowsClass = wrapClass + '--toggle-arrows',

    stageClass = _fotoramaClass + '__stage',
    stageFrameClass = stageClass + '__frame',
    stageFrameVideoClass = stageFrameClass + '--video',
    stageShaftClass = stageClass + '__shaft',

    grabClass = _fotoramaClass + '__grab',
    pointerClass = _fotoramaClass + '__pointer',

    arrClass = _fotoramaClass + '__arr',
    arrDisabledClass = arrClass + '--disabled',
    arrPrevClass = arrClass + '--prev',
    arrNextClass = arrClass + '--next',
    arrArrClass = arrClass + '__arr',

    navClass = _fotoramaClass + '__nav',
    navWrapClass = navClass + '-wrap',
    navShaftClass = navClass + '__shaft',
    navDotsClass = navClass + '--dots',
    navThumbsClass = navClass + '--thumbs',
    navFrameClass = navClass + '__frame',
    navFrameDotClass = navFrameClass + '--dot',
    navFrameThumbClass = navFrameClass + '--thumb',

    fadeClass = _fotoramaClass + '__fade',
    fadeFrontClass = fadeClass + '-front',
    fadeRearClass = fadeClass + '-rear',

    shadowClass = _fotoramaClass + '__shadow',
    shadowsClass = shadowClass + 's',
    shadowsLeftClass = shadowsClass + '--left',
    shadowsRightClass = shadowsClass + '--right',

    activeClass = _fotoramaClass + '__active',
    selectClass = _fotoramaClass + '__select',

    hiddenClass = _fotoramaClass + '--hidden',

    fullscreenClass = _fotoramaClass + '--fullscreen',
    fullscreenIconClass = _fotoramaClass + '__fullscreen-icon',

    errorClass = _fotoramaClass + '__error',
    loadingClass = _fotoramaClass + '__loading',
    loadedClass = _fotoramaClass + '__loaded',
    loadedFullClass = loadedClass + '--full',
    loadedImgClass = loadedClass + '--img',

    grabbingClass = _fotoramaClass + '__grabbing',

    imgClass = _fotoramaClass + '__img',
    imgFullClass = imgClass + '--full',

    dotClass = _fotoramaClass + '__dot',
    thumbClass = _fotoramaClass + '__thumb',
    thumbBorderClass = thumbClass + '-border',

    htmlClass = _fotoramaClass + '__html',

    videoClass = _fotoramaClass + '__video',
    videoPlayClass = videoClass + '-play',
    videoCloseClass = videoClass + '-close',

    captionClass = _fotoramaClass + '__caption',
    captionWrapClass = _fotoramaClass + '__caption__wrap',

    spinnerClass = _fotoramaClass + '__spinner',

    buttonAttributes = '" tabindex="0" role="button';
var JQUERY_VERSION = $ && $.fn.jquery.split('.');

if (!JQUERY_VERSION
    || JQUERY_VERSION[0] < 1
    || (JQUERY_VERSION[0] == 1 && JQUERY_VERSION[1] < 8)) {
  throw 'Fotorama requires jQuery 1.8 or later and will not run without it.';
}
// My Underscore :-)
var _ = {};
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */

var Modernizr = (function (window, document, undefined) {

  var version = '2.6.2',

      Modernizr = {},

      docElement = document.documentElement,

      mod = 'modernizr',
      modElem = document.createElement(mod),
      mStyle = modElem.style,

      inputElem,

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

      injectElementWithStyles = 
      _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

  if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
    hasOwnProp = 
  }
  else {
    hasOwnProp = 
  }


  if (!Function.prototype.bind) {
    Function.prototype.bind = 
  }

  
  
  
  
  
  
  
  tests['csstransforms3d'] = 

  for (var feature in tests) {
    if (hasOwnProp(tests, feature)) {
      featureName = feature.toLowerCase();
      Modernizr[featureName] = tests[feature]();

      classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
    }
  }

  Modernizr.addTest = 


  setCss('');
  modElem = inputElem = null;


  Modernizr._version = version;

  Modernizr._prefixes = prefixes;
  Modernizr._domPrefixes = domPrefixes;
  Modernizr._cssomPrefixes = cssomPrefixes;

  Modernizr.testProp = 

  Modernizr.testAllProps = testPropsAll;

  Modernizr.testStyles = injectElementWithStyles;
  Modernizr.prefixed = 

  return Modernizr;
})(window, document);
var fullScreenApi = {
      ok: false,
      is: 
      request: function () {
      },
      cancel: 
      event: '',
      prefix: ''
    },
    browserPrefixes = 'webkit moz o ms khtml'.split(' ');

// check for native support
if (typeof document.cancelFullScreen != 'undefined') {
  fullScreenApi.ok = true;
} else {
  // check for fullscreen support by vendor prefix
  for (var i = 0, il = browserPrefixes.length; i < il; i++) {
    fullScreenApi.prefix = browserPrefixes[i];
    if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined') {
      fullScreenApi.ok = true;
      break;
    }
  }
}

// update methods to do something useful
if (fullScreenApi.ok) {
  fullScreenApi.event = fullScreenApi.prefix + 'fullscreenchange';
  fullScreenApi.is = 
  fullScreenApi.request = function (el) {
    return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
  };
  fullScreenApi.cancel = 
}
//fgnass.github.com/spin.js#v1.3.2

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

var Spinner,
    spinnerDefaults = {
      lines: 12, // The number of lines to draw
      length: 5, // The length of each line
      width: 2, // The line thickness
      radius: 7, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 15, // The rotation offset
      color: 'rgba(128, 128, 128, .75)',
      hwaccel: true
    },
    spinnerOverride = {
      top: 'auto',
      left: 'auto',
      className: ''
    };

((this, );

/* Bez v1.0.10-g5ae0136
 * http://github.com/rdallasgray/bez
 *
 * A plugin to convert CSS3 cubic-bezier co-ordinates to jQuery-compatible easing functions
 *
 * With thanks to Nikolay Nemshilov for clarification on the cubic-bezier maths
 * See http://st-on-it.blogspot.com/2011/05/calculating-cubic-bezier-function.html
 *
 * Copyright 2011 Robert Dallas Gray. All rights reserved.
 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
 */
function bez (coOrdArray) {
  var encodedFuncName = "bez_" + $.makeArray(arguments).join("_").replace(".", "p");
  if (typeof $['easing'][encodedFuncName] !== "function") {
    var polyBez = function (p1, p2) {
      var A = [null, null],
          B = [null, null],
          C = [null, null],
          bezCoOrd = function (t, ax) {
            C[ax] = 3 * p1[ax];
            B[ax] = 3 * (p2[ax] - p1[ax]) - C[ax];
            A[ax] = 1 - C[ax] - B[ax];
            return t * (C[ax] + t * (B[ax] + t * A[ax]));
          },
          xDeriv = 
          xForT = 
      return     };
    $['easing'][encodedFuncName] =   }
  return encodedFuncName;
}
var $WINDOW = $(window),
    $DOCUMENT = $(document),
    $HTML,
    $BODY,

    QUIRKS_FORCE = location.hash.replace('#', '') === 'quirks',
    TRANSFORMS3D = Modernizr.csstransforms3d,
    CSS3 = TRANSFORMS3D && !QUIRKS_FORCE,
    COMPAT = TRANSFORMS3D || document.compatMode === 'CSS1Compat',
    FULLSCREEN = fullScreenApi.ok,

    MOBILE = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
    SLOW = !CSS3 || MOBILE,

    MS_POINTER = navigator.msPointerEnabled,

    WHEEL = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll",

    TOUCH_TIMEOUT = 250,
    TRANSITION_DURATION = 300,

    SCROLL_LOCK_TIMEOUT = 1400,

    AUTOPLAY_INTERVAL = 5000,
    MARGIN = 2,
    THUMB_SIZE = 64,

    WIDTH = 500,
    HEIGHT = 333,

    STAGE_FRAME_KEY = '$stageFrame',
    NAV_DOT_FRAME_KEY = '$navDotFrame',
    NAV_THUMB_FRAME_KEY = '$navThumbFrame',

    AUTO = 'auto',

    BEZIER = bez([.1, 0, .25, 1]),

    MAX_WIDTH = 99999,

    FIFTYFIFTY = '50%',

    OPTIONS = {
      // dimensions
      width: null, // 500 || '100%'
      minwidth: null,
      maxwidth: '100%', // '100%'
      height: null,
      minheight: null,
      maxheight: null,

      ratio: null, // '16/9' || 500/333 || 1.5

      margin: MARGIN,
      glimpse: 0,

      fit: 'contain', // 'cover' || 'scaledown' || 'none'

      position: FIFTYFIFTY,
      thumbposition: FIFTYFIFTY,

      // navigation, thumbs
      nav: 'dots', // 'thumbs' || false
      navposition: 'bottom', // 'top'
      navwidth: null,
      thumbwidth: THUMB_SIZE,
      thumbheight: THUMB_SIZE,
      thumbmargin: MARGIN,
      thumbborderwidth: MARGIN,
      thumbfit: 'cover', // 'contain' || 'scaledown' || 'none'

      allowfullscreen: false, // true || 'native'

      transition: 'slide', // 'crossfade' || 'dissolve'
      clicktransition: null,
      transitionduration: TRANSITION_DURATION,

      captions: true,

      hash: false,
      startindex: 0,

      loop: false,

      autoplay: false,
      stopautoplayontouch: true,

      keyboard: false,

      arrows: true,
      click: true,
      swipe: true,
      trackpad: false,

      enableifsingleframe: false,

      controlsonstart: true,

      shuffle: false,

      direction: 'ltr', // 'rtl'

      shadows: true,
      spinner: null
    },

    KEYBOARD_OPTIONS = {
      left: true,
      right: true,
      down: false,
      up: false,
      space: false,
      home: false,
      end: false
    };

function minMaxLimit (value, min, max) {
  return Math.max(isNaN(min) ? -Infinity : min, Math.min(isNaN(max) ? Infinity : max, value));
}


function readPosition ($el) {
  if (CSS3) {
    return +readTransform($el.css('transform'));
  } else {
    return +$el.css('left').replace('px', '');
  }
}

function getTranslate (pos/*, _001*/) {
  var obj = {};
  if (CSS3) {
    obj.transform = 'translate3d(' + (pos/* + (_001 ? 0.001 : 0)*/) + 'px,0,0)'; // 0.001 to remove Retina artifacts
  } else {
    obj.left = pos;
  }
  return obj;
}









function bindTransitionEnd ($el) {
  var elData = $el.data();

  if (elData.tEnd) return;

  var el = $el[0],
      transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        msTransition: 'MSTransitionEnd',
        transition: 'transitionend'
      };
  addEvent(el, transitionEndEvent[Modernizr.prefixed('transition')], ;
  elData.tEnd = true;
}

function afterTransition ($el, property, fn, time) {
  var ok,
      elData = $el.data();

  if (elData) {
    elData.onEndFn = function () {
      if (ok) return;
      ok = true;
      clearTimeout(elData.tT);
      fn();
    };
    elData.tProp = property;

    // Passive call, just in case of fail of native transition-end event
    clearTimeout(elData.tT);
    elData.tT = setTimeout( time * 1.5);

    bindTransitionEnd($el);
  }
}


function stop ($el, left/*, _001*/) {
  if ($el.length) {
    var elData = $el.data();
    if (CSS3) {
      $el.css(getDuration(0));
      elData.onEndFn = noop;
      clearTimeout(elData.tT);
    } else {
      $el.stop();
    }
    var lockedLeft = getNumber(left, ;

    $el.css(getTranslate(lockedLeft/*, _001*/));//.width(); // `.width()` for reflow
    return lockedLeft;
  }
}

function getNumber () {
  var number;
  for (var _i = 0, _l = arguments.length; _i < _l; _i++) {
    number = _i ? arguments[_i]() : arguments[_i];
    if (typeof number === 'number') {
      break;
    }
  }

  return number;
}


function getProtocol () {
  getProtocol.p = getProtocol.p || (location.protocol === 'https:' ? 'https://' : 'http://');
  return getProtocol.p;
}


function findVideoId (href, forceVideo) {
  if (typeof href !== 'string') return href;
  href = parseHref(href);

  var id,
      type;

  if (href.host.match(/youtube\.com/) && href.search) {
    //.log();
    id = href.search.split('v=')[1];
    if (id) {
      var ampersandPosition = id.indexOf('&');
      if (ampersandPosition !== -1) {
        id = id.substring(0, ampersandPosition);
      }
      type = 'youtube';
    }
  } else if (href.host.match(/youtube\.com|youtu\.be/)) {
    id = href.pathname.replace(/^\/(embed\/|v\/)?/, '').replace(/\/.*/, '');
    type = 'youtube';
  } else if (href.host.match(/vimeo\.com/)) {
    type = 'vimeo';
    id = href.pathname.replace(/^\/(video\/)?/, '').replace(/\/.*/, '');
  }

  if ((!id || !type) && forceVideo) {
    id = href.href;
    type = 'custom';
  }

  return id ? {id: id, type: type, s: href.search.replace(/^\?/, ''), p: getProtocol()} : false;
}

function getVideoThumbs (dataFrame, data, fotorama) {
  var img, thumb, video = dataFrame.video;
  if (video.type === 'youtube') {
    thumb = getProtocol() + 'img.youtube.com/vi/' + video.id + '/default.jpg';
    img = thumb.replace(/\/default.jpg$/, '/hqdefault.jpg');
    dataFrame.thumbsReady = true;
  } else if (video.type === 'vimeo') {
    $.ajax({
      url: getProtocol() + 'vimeo.com/api/v2/video/' + video.id + '.json',
      dataType: 'jsonp',
      success: function (json) {
        dataFrame.thumbsReady = true;
        updateData(data, {img: json[0].thumbnail_large, thumb: json[0].thumbnail_small}, dataFrame.i, fotorama);
      }
    });
  } else {
    dataFrame.thumbsReady = true;
  }

  return {
    img: img,
    thumb: thumb
  }
}

function updateData (data, _dataFrame, i, fotorama) {
  for (var _i = 0, _l = data.length; _i < _l; _i++) {
    var dataFrame = data[_i];

    if (dataFrame.i === i && dataFrame.thumbsReady) {
      var clear = {videoReady: true};
      clear[STAGE_FRAME_KEY] = clear[NAV_THUMB_FRAME_KEY] = clear[NAV_DOT_FRAME_KEY] = false;

      fotorama.splice(_i, 1, $.extend(
          {},
          dataFrame,
          clear,
          _dataFrame
      ));

      break;
    }
  }
}

function getDataFromHtml ($el) {
  var data = [];

  function getDataFromImg ($img, imgData, checkVideo) {
    var $child = $img.children('img').eq(0),
        _imgHref = $img.attr('href'),
        _imgSrc = $img.attr('src'),
        _thumbSrc = $child.attr('src'),
        _video = imgData.video,
        video = checkVideo ? findVideoId(_imgHref, _video === true) : false;

    if (video) {
      _imgHref = false;
    } else {
      video = _video;
    }

    getDimensions($img, $child, $.extend(imgData, {
      video: video,
      img: imgData.img || _imgHref || _imgSrc || _thumbSrc,
      thumb: imgData.thumb || _thumbSrc || _imgSrc || _imgHref
    }));
  }

  
  $el.children().each(function () {
    var $this = $(this),
        dataFrame = optionsToLowerCase($.extend($this.data(), {id: $this.attr('id')}));
    if ($this.is('a, img')) {
      getDataFromImg($this, dataFrame, true);
    } else if (!$this.is(':empty')) {
      getDimensions($this, null, $.extend(dataFrame, {
        html: this,
        _html: $this.html() // Because of IE
      }));
    } else return;

    data.push(dataFrame);
  });

  return data;
}



function waitFor (test, fn, timeout, i) {
  if (!waitFor.i) {
    waitFor.i = 1;
    waitFor.ii = [true];
  }

  i = i || waitFor.i;

  if (typeof waitFor.ii[i] === 'undefined') {
    waitFor.ii[i] = true;
  }

  if (test()) {
    fn();
  } else {
    waitFor.ii[i] && setTimeout( timeout || 100);
  }

  return waitFor.i++;
}

waitFor.stop = 


function fit ($el, measuresToFit, method, position) {
  var elData = $el.data(),
      measures = elData.measures;

  if (measures && (!elData.l ||
      elData.l.W !== measures.width ||
      elData.l.H !== measures.height ||
      elData.l.r !== measures.ratio ||
      elData.l.w !== measuresToFit.w ||
      elData.l.h !== measuresToFit.h ||
      elData.l.m !== method ||
      elData.l.p !== position)) {

    //console.log('fit');

    var width = measures.width,
        height = measures.height,
        ratio = measuresToFit.w / measuresToFit.h,
        biggerRatioFLAG = measures.ratio >= ratio,
        fitFLAG = method === 'scaledown',
        containFLAG = method === 'contain',
        coverFLAG = method === 'cover',
        pos = parsePosition(position);

    if (biggerRatioFLAG && (fitFLAG || containFLAG) || !biggerRatioFLAG && coverFLAG) {
      width = minMaxLimit(measuresToFit.w, 0, fitFLAG ? width : Infinity);
      height = width / measures.ratio;
    } else if (biggerRatioFLAG && coverFLAG || !biggerRatioFLAG && (fitFLAG || containFLAG)) {
      height = minMaxLimit(measuresToFit.h, 0, fitFLAG ? height : Infinity);
      width = height * measures.ratio;
    }

    $el.css({
      width: width,
      height: height,
      left: numberFromWhatever(pos.x, measuresToFit.w - width),
      top: numberFromWhatever(pos.y, measuresToFit.h- height)
    });

    elData.l = {
      W: measures.width,
      H: measures.height,
      r: measures.ratio,
      w: measuresToFit.w,
      h: measuresToFit.h,
      m: method,
      p: position
    };
  }

  return true;
}

function setStyle ($el, style) {
  var el = $el[0];
  if (el.styleSheet) {
    el.styleSheet.cssText = style;
  } else {
    $el.html(style);
  }
}

function findShadowEdge (pos, min, max) {
  return min === max ? false : pos <= min ? 'left' : pos >= max ? 'right' : 'left right';
}

function getIndexFromHash (hash, data, ok, startindex) {
  if (!ok) return false;
  if (!isNaN(hash)) return hash - (startindex ? 0 : 1);

  var index;

  for (var _i = 0, _l = data.length; _i < _l; _i++) {
    var dataFrame = data[_i];

    if (dataFrame.id === hash) {
      index = _i;
      break;
    }
  }

  return index;
}

function smartClick ($el, fn, _options) {
  _options = _options || {};

  $el.each(function () {
    var $this = $(this),
        thisData = $this.data(),
        startEvent;

    if (thisData.clickOn) return;

    thisData.clickOn = true;

    $.extend(touch($this, {
      onStart: function (e) {
        startEvent = e;
        (_options.onStart || noop).call(this, e);
      },
      onMove: _options.onMove || noop,
      onTouchEnd: _options.onTouchEnd || noop,
      onEnd: function (result) {
        ////console.log('smartClick → result.moved', result.moved);
        if (result.moved) return;
        fn.call(this, startEvent);
      }
    }), {noMove: true});
  });
}}

// Fisher–Yates Shuffle
// http://bost.ocks.org/mike/shuffle/
function shuffle (array) {
  // While there remain elements to shuffle
  var l = array.length;
  while (l) {
    // Pick a remaining element
    var i = Math.floor(Math.random() * l--);

    // And swap it with the current element
    var t = array[l];
    array[l] = array[i];
    array[i] = t;
  }

  return array;
}

function clone (array) {
  return Object.prototype.toString.call(array) == '[object Array]'
      && $.map(arr  });;
}

function optionsToLowerCase (options) {
  if (options) {
    var opts = {};
    $.each(optio  });

    return opts;
  }
}

function getRatio (_ratio) {
  if (!_ratio) return;
  var ratio = +_ratio;
  if (!isNaN(ratio)) {
    return ratio;
  } else {
    ratio = _ratio.split('/');
    return +ratio[0] / +ratio[1] || undefined;
  }
}

function addEvent (el, e, fn, bool) {
  if (!e) return;
  el.addEventListener ? el.addEventListener(e, fn, !!bool) : el.attachEvent('on'+e, fn);;
}

function disableAttr (FLAG) {
  return {tabindex: FLAG * -1 + '', disabled: FLAG};
}

function addEnterUp (el, fn) {
  addEvent(el, 'keyup', function (e) {
    elIsDisabled(el) || e.keyCode == 13 && fn.call(el, e);
  });
}

function addFocus (el, fn) {
  addEvent(el, 'focus', el.onfocusi  }, true);
}

function stopEvent (e, stopPropagation) {
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  stopPropagation && e.stopPropagation && e.stopPropagation();;
}

function parsePosition (rule) {
  rule = (rule + '').split(/\s+/);
  return {
    x: measureIsValid(rule[0]) || FIFTYFIFTY,
    y: measureIsValid(rule[1]) || FIFTYFIFTY
  }
}
function slide ($el, options) {
  var elData = $el.data(),
      elPos = Math.round(options.pos),
      onEndFn = function () {
        elData.sliding = false;
        (options.onEnd || noop)();
      };

  if (typeof options.overPos !== 'undefined' && options.overPos !== options.pos) {
    elPos = options.overPos;
    onEndF  };
  }

  ////////console.time('var translate = $.extend');
  var translate = $.extend(getTranslate(elPos/*, options._001*/), options.width && {width: options.width});
  ////////console.timeEnd('var translate = $.extend');

  elData.sliding = true;

  if (CSS3) {
    $el.css($.extend(getDuration(options.time), translate));
    if (options.time > 10) {
      ////////console.time('afterTransition');
      afterTransition($el, 'transform', onEndFn, options.time);
      ////////console.timeEnd('afterTransition');
    } else {
      onEndFn();
    }
  } else {
    $el.stop().animate(translate, options.time, BEZIER, onEndFn);
  }
}

function fade ($el1, $el2, $frames, options, fadeStack, chain) {
  var chainedFLAG = typeof chain !== 'undefined';
  if (!chainedFLAG) {
    fadeStack.push(arguments);
    Array.prototype.push.call(arguments, fadeStack.length);
    if (fadeStack.length > 1) return;
  }

  $el1 = $el1 || $($el1);
  $el2 = $el2 || $($el2);

  var _$el1 = $el1[0],
      _$el2 = $el2[0],
      crossfadeFLAG = options.method === 'crossfade',
      onEndFn = function () {
        if (!onEndFn.done) {
          onEndFn.done = true;
          var args = (chainedFLAG || fadeStack.shift()) && fadeStack.shift();
          args && fade.apply(this, args);
          (options.onEnd || noop)(!!args);
        }
      },
      time = options.time / (chain || 1);

  $frames.removeClass(fadeRearClass + ' ' + fadeFrontClass);

  $el1
      .stop()
      .addClass(fadeRearClass);
  $el2
      .stop()
      .addClass(fadeFrontClass);

  crossfadeFLAG && _$el2 && $el1.fadeTo(0, 0);

  $el1.fadeTo(crossfadeFLAG ? time : 0, 1, crossfadeFLAG && onEndFn);
  $el2.fadeTo(time, 0, onEndFn);

  (_$el1 && crossfadeFLAG) || _$el2 || onEndFn();
}
var lastEvent,
    moveEventType,
    preventEvent,
    preventEventTimeout;

function extendEvent (e) {
  var touch = (e.touches || [])[0] || e;
  e._x = touch.pageX;
  e._y = touch.clientY;
  e._now = $.now();
}

function touch ($el, options) {
  var el = $el[0],
      tail = {},
      touchEnabledFLAG,
      startEvent,
      $target,
      controlTouch,
      touchFLAG,
      targetIsSelectFLAG,
      targetIsLinkFlag,
      tolerance,
      moved;

  function onStart (e) {
    $target = $(e.target);
    tail.checked = targetIsSelectFLAG = targetIsLinkFlag = moved = false;

    if (touchEnabledFLAG
        || tail.flow
        || (e.touches && e.touches.length > 1)
        || e.which > 1
        || (lastEvent && lastEvent.type !== e.type && preventEvent)
        || (targetIsSelectFLAG = options.select && $target.is(options.select, el))) return targetIsSelectFLAG;

    touchFLAG = e.type === 'touchstart';
    targetIsLinkFlag = $target.is('a, a *', el);
    controlTouch = tail.control;

    tolerance = (tail.noMove || tail.noSwipe || controlTouch) ? 16 : !tail.snap ? 4 : 0;

    extendEvent(e);

    startEvent = lastEvent = e;
    moveEventType = e.type.replace(/down|start/, 'move').replace(/Down/, 'Move');

    (options.onStart || noop).call(el, e, {control: controlTouch, $target: $target});

    touchEnabledFLAG = tail.flow = true;

    if (!touchFLAG || tail.go) stopEvent(e);
  }

  function onMove (e) {
    if ((e.touches && e.touches.length > 1)
        || (MS_POINTER && !e.isPrimary)
        || moveEventType !== e.type
        || !touchEnabledFLAG) {
      touchEnabledFLAG && onEnd();
      (options.onTouchEnd || noop)();
      return;
    }

    extendEvent(e);

    var xDiff = Math.abs(e._x - startEvent._x), // opt _x → _pageX
        yDiff = Math.abs(e._y - startEvent._y),
        xyDiff = xDiff - yDiff,
        xWin = (tail.go || tail.x || xyDiff >= 0) && !tail.noSwipe,
        yWin = xyDiff < 0;

    if (touchFLAG && !tail.checked) {
      if (touchEnabledFLAG = xWin) {
        stopEvent(e);
      }
    } else {
      ////console.log('onMove e.preventDefault');
      stopEvent(e);
      (options.onMove || noop).call(el, e, {touch: touchFLAG});
    }

    if (!moved && Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)) > tolerance) {
      moved = true;
    }

    tail.checked = tail.checked || xWin || yWin;
  }

  function onEnd (e) {
    //////console.time('touch.js onEnd');

    (options.onTouchEnd || noop)();

    var _touchEnabledFLAG = touchEnabledFLAG;
    tail.control = touchEnabledFLAG = false;

    if (_touchEnabledFLAG) {
      tail.flow = false;
    }

    if (!_touchEnabledFLAG || (targetIsLinkFlag && !tail.checked)) return;

    e && stopEvent(e);

    preventEvent = true;
    clearTimeout(preventEventTimeout);
    preventEventTimeout = setTimeout(function () {
      preventEvent = false;
    }, 1000);

    (options.onEnd || noop).call(el, {moved: moved, $target: $target, control: controlTouch, touch: touchFLAG, startEvent: startEvent, aborted: !e || e.type === 'MSPointerCancel'});
    //////console.timeEnd('touch.js onEnd');
  }

  function onOtherStart () {
    if (tail.flow) return;
    setTimeout(function () {
      tail.flow = true;
    }, 10);
  }

  function onOtherEnd () {
    if (!tail.flow) return;
    setTi    }, TOUCH_TIMEOUT);
  }

  if (MS_POINTER) {
    addEvent(el, 'MSPointerDown', onStart);
    addEvent(document, 'MSPointerMove', onMove);
    addEvent(document,'MSPointerCancel', onEnd);
    addEvent(document, 'MSPointerUp', onEnd);
  } else {
    addEvent(el, 'touchstart', onStart);
    addEvent(el, 'touchmove', onMove);
    addEvent(el, 'touchend', onEnd);

    addEvent(document, 'touchstart', onOtherStart);
    addEvent(document, 'touchend', onOtherEnd);
    addEvent(document, 'touchcancel', onOtherEnd);

    $WINDOW.on('scroll', onOtherEnd);

    $el.on('mousedown', onStart);
    $DOCUMENT
        .on('mousemove', onMove)
        .on('mouseup', onEnd);
  }

  $el.on('click',;
  });

  return tail;
}

function moveOnTouch ($el, options) {
  var el = $el[0],
      elData = $el.data(),
      tail = {},
      startCoo,
      coo,
      startElPos,
      moveElPos,
      edge,
      moveTrack,
      startTime,
      endTime,
      min,
      max,
      snap,
      slowFLAG,
      controlFLAG,
      moved,
      tracked;

  function startTracking (e, noStop) {
    tracked = true;
    startCoo = coo = e._x;
    startTime = e._now;

    moveTrack = [
      [startTime, startCoo]
    ];

    startElPos = moveElPos = tail.noMove || noStop ? 0 : stop($el, (options.getPos || noop)()/*, options._001*/);

    (options.onStart || noop).call(el, e);
  }

  function onStart (e, result) {
    min = tail.min;
    max = tail.max;
    snap = tail.snap;

    slowFLAG = e.altKey;
    tracked = moved = false;

    controlFLAG = result.control;

    if (!controlFLAG && !elData.sliding) {
      startTracking(e);
    }
  }

  function onMove (e, result) {
    if (!tail.noSwipe) {
      if (!tracked) {
        startTracking(e);
      }

      coo = e._x;

      moveTrack.push([e._now, coo]);

      moveElPos = startElPos - (startCoo - coo);

      edge = findShadowEdge(moveElPos, min, max);

      if (moveElPos <= min) {
        moveElPos = edgeResistance(moveElPos, min);
      } else if (moveElPos >= max) {
        moveElPos = edgeResistance(moveElPos, max);
      }

      if (!tail.noMove) {
        $el.css(getTranslate(moveElPos/*, options._001*/));
        if (!moved) {
          moved = true;
          // only for mouse
          result.touch || MS_POINTER || $el.addClass(grabbingClass);
        }

        (options.onMove || noop).call(el, e, {pos: moveElPos, edge: edge});
      }
    }
  }

  function onEnd (result) {
    //////console.time('moveontouch.js onEnd');
    if (tail.noSwipe && result.moved) return;

    if (!tracked) {
      startTracking(result.startEvent, true);
    }

    ////console.log('onEnd');

    result.touch || MS_POINTER || $el.removeClass(grabbingClass);

    endTime = $.now();

    var _backTimeIdeal = endTime - TOUCH_TIMEOUT,
        _backTime,
        _timeDiff,
        _timeDiffLast,
        backTime = null,
        backCoo,
        virtualPos,
        limitPos,
        newPos,
        overPos,
        time = TRANSITION_DURATION,
        speed,
        friction = options.friction;

    for (var _i = moveTrack.length - 1; _i >= 0; _i--) {
      _backTime = moveTrack[_i][0];
      _timeDiff = Math.abs(_backTime - _backTimeIdeal);
      if (backTime === null || _timeDiff < _timeDiffLast) {
        backTime = _backTime;
        backCoo = moveTrack[_i][1];
      } else if (backTime === _backTimeIdeal || _timeDiff > _timeDiffLast) {
        break;
      }
      _timeDiffLast = _timeDiff;
    }

    newPos = minMaxLimit(moveElPos, min, max);

    var cooDiff = backCoo - coo,
        forwardFLAG = cooDiff >= 0,
        timeDiff = endTime - backTime,
        longTouchFLAG = timeDiff > TOUCH_TIMEOUT,
        swipeFLAG = !longTouchFLAG && moveElPos !== startElPos && newPos === moveElPos;

    if (snap) {
      newPos = minMaxLimit(Math[swipeFLAG ? (forwardFLAG ? 'floor' : 'ceil') : 'round'](moveElPos / snap) * snap, min, max);
      min = max = newPos;
    }

    if (swipeFLAG && (snap || newPos === moveElPos)) {
      speed = -(cooDiff / timeDiff);
      time *= minMaxLimit(Math.abs(speed), options.timeLow, options.timeHigh);
      virtualPos = Math.round(moveElPos + speed * time / friction);

      if (!snap) {
        newPos = virtualPos;
      }

      if (!forwardFLAG && virtualPos > max || forwardFLAG && virtualPos < min) {
        limitPos = forwardFLAG ? min : max;
        overPos = virtualPos - limitPos;
        if (!snap) {
          newPos = limitPos;
        }
        overPos = minMaxLimit(newPos + overPos * .03, limitPos - 50, limitPos + 50);
        time = Math.abs((moveElPos - overPos) / (speed / friction));
      }
    }

    time *= slowFLAG ? 10 : 1;

    (options.onEnd || noop).call(el, $.extend(result, {moved: result.moved || longTouchFLAG && snap, pos: moveElPos, newPos: newPos, overPos: overPos, time: time}));
  }

  tail = $.extend(touch(options.$wrap, $.extend({}, options, {
    onStart: onStart,
    onMove: onMove,
    onEnd: onEnd
  })), tail);

  return tail;
}
function wheel ($el, options) {
  var el = $el[0],
      lockFLAG,
      lastDirection,
      lastNow,
      tail = {
        prevent: {}
      };

  addEvent(el, WHEEL, function (e) {
    var yDelta = e.wheelDeltaY || -1 * e.deltaY || 0,
        xDelta = e.wheelDeltaX || -1 * e.deltaX || 0,
        xWin = Math.abs(xDelta) && !Math.abs(yDelta),
        direction = getDirectionSign(xDelta < 0),
        sameDirection = lastDirection === direction,
        now = $.now(),
        tooFast = now - lastNow < TOUCH_TIMEOUT;

    lastDirection = direction;
    lastNow = now;

    if (!xWin || !tail.ok || tail.prevent[direction] && !lockFLAG) {
      return;
    } else {
      stopEvent(e, true);
      if (lockFLAG && sameDirection && tooFast) {
        return;
      }
    }

    if (options.shift) {
      lockFLAG = true;
      clearTimeout(tail.t);
      tail.t = setTimeout(function () {
        lockFLAG = false;
      }, SCROLL_LOCK_TIMEOUT);
    }

    (options.onEnd || noop)(e, options.shift ? direction : xDelta);

  });

  return tail;
}
jQuery.Fotorama = function ($fotorama, opts) {
  $HTML = $('html');
  $BODY = $('body');

  var that = this,
      stamp = $.now(),
      stampClass = _fotoramaClass + stamp,
      fotorama = $fotorama[0],
      data,
      dataFrameCount = 1,
      fotoramaData = $fotorama.data(),
      size,

      $style = $('<style></style>'),

      $anchor = $(div(hiddenClass)),
      $wrap = $(div(wrapClass)),
      $stage = $(div(stageClass)).appendTo($wrap),
      stage = $stage[0],

      $stageShaft = $(div(stageShaftClass)).appendTo($stage),
      $stageFrame = $(),
      $arrPrev = $(div(arrClass + ' ' + arrPrevClass + buttonAttributes)),
      $arrNext = $(div(arrClass + ' ' + arrNextClass + buttonAttributes)),
      $arrs = $arrPrev.add($arrNext).appendTo($stage),
      $navWrap = $(div(navWrapClass)),
      $nav = $(div(navClass)).appendTo($navWrap),
      $navShaft = $(div(navShaftClass)).appendTo($nav),
      $navFrame,
      $navDotFrame = $(),
      $navThumbFrame = $(),

      stageShaftData = $stageShaft.data(),
      navShaftData = $navShaft.data(),

      $thumbBorder = $(div(thumbBorderClass)).appendTo($navShaft),

      $fullscreenIcon = $(div(fullscreenIconClass + buttonAttributes)),
      fullscreenIcon = $fullscreenIcon[0],
      $videoPlay = $(div(videoPlayClass)),
      $videoClose = $(div(videoCloseClass)).appendTo($stage),
      videoClose = $videoClose[0],

      spinner,
      $spinner = $(div(spinnerClass)),

      $videoPlaying,

      activeIndex = false,
      activeFrame,
      activeIndexes,
      repositionIndex,
      dirtyIndex,
      lastActiveIndex,
      prevIndex,
      nextIndex,
      nextAutoplayIndex,
      startIndex,

      o_loop,
      o_nav,
      o_navThumbs,
      o_navTop,
      o_allowFullScreen,
      o_nativeFullScreen,
      o_fade,
      o_thumbSide,
      o_thumbSide2,
      o_transitionDuration,
      o_transition,
      o_shadows,
      o_rtl,
      o_keyboard,
      lastOptions = {},

      measures = {},
      measuresSetFLAG,

      stageShaftTouchTail = {},
      stageWheelTail = {},
      navShaftTouchTail = {},
      navWheelTail = {},

      scrollTop,
      scrollLeft,

      showedFLAG,
      pausedAutoplayFLAG,
      stoppedAutoplayFLAG,

      toDeactivate = {},
      toDetach = {},

      measuresStash,

      touchedFLAG,

      hoverFLAG,

      navFrameKey,
      stageLeft = 0,

      fadeStack = [];

  $wrap[STAGE_FRAME_KEY] = $(div(stageFrameClass));
  $wrap[NAV_THUMB_FRAME_KEY] = $(div(navFrameClass + ' ' + navFrameThumbClass + buttonAttributes, div(thumbClass)));
  $wrap[NAV_DOT_FRAME_KEY] = $(div(navFrameClass + ' ' + navFrameDotClass + buttonAttributes, div(dotClass)));

  toDeactivate[STAGE_FRAME_KEY] = [];
  toDeactivate[NAV_THUMB_FRAME_KEY] = [];
  toDeactivate[NAV_DOT_FRAME_KEY] = [];
  toDetach[STAGE_FRAME_KEY] = {};

  $wrap
      .addClass(CSS3 ? wrapCss3Class : wrapCss2Class)
      .toggleClass(wrapNoControlsClass, !opts.controlsonstart);

  fotoramaData.fotorama = this;

  function checkForVideo () {
    $.each(data, function (i, dataFrame) {
      if (!dataFrame.i) {
        dataFrame.i = dataFrameCount++;
        var video = findVideoId(dataFrame.video, true);
        if (video) {
          var thumbs = {};
          dataFrame.video = video;
          if (!dataFrame.img && !dataFrame.thumb) {
            thumbs = getVideoThumbs(dataFrame, data, that);
          } else {
            dataFrame.thumbsReady = true;
          }
          updateData(data, {img: thumbs.img, thumb: thumbs.thumb}, dataFrame.i, that);
        }
      }
    });
 ;
  }

  function bindGlobalEvents (FLAG) {
    var keydownCommon = 'keydown.' + _fotoramaClass,
        localStamp = _fotoramaClass + stamp,
        keydownLocal = 'keydown.' + localStamp,
        resizeLocal = 'resize.' + localStamp + ' ' + 'orientationchange.' + localStamp;

    if (FLAG) {
      $DOCUMENT
          .on(keydownLocal, function (e) {
            var catched,
                index;

            if ($videoPlaying && e.keyCode === 27) {
              catched = true;
              unloadVideo($videoPlaying, true, true);
            } else if (that.fullScreen || (opts.keyboard && !that.index)) {
              if (e.keyCode === 27) {
                catched = true;
                that.cancelFullScreen();
              } else if ((e.shiftKey && e.keyCode === 32 && allowKey('space')) || (e.keyCode === 37 && allowKey('left')) || (e.keyCode === 38 && allowKey('up'))) {
                index = '<';
              } else if ((e.keyCode === 32 && allowKey('space')) || (e.keyCode === 39 && allowKey('right')) || (e.keyCode === 40 && allowKey('down'))) {
                index = '>';
              } else if (e.keyCode === 36 && allowKey('home')) {
                index = '<<';
              } else if (e.keyCode === 35 && allowKey('end')) {
                index = '>>';
              }
            }

            (catched || index) && stopEvent(e);
            index && that.show({index: index, slow: e.altKey, user: true});
          });

      if (!that.index) {
        $DOCUMENT
            .off(keydownCommon)
            .on(keydownCommon, 'textarea, input, sel    });
      }

      $WINDOW.on(resizeLocal, that.resize);
    } else {
      $DOCUMENT.off(keydownLocal);
      $WINDOW.off(resizeLocal);
    }
  }

  function appendElements (FLAG) {
    if (FLAG === appendElements.f) return;

    if (FLAG) {
      $fotorama
          .html('')
          .addClass(_fotoramaClass + ' ' + stampClass)
          .append($wrap)
          .before($style)
          .before($anchor);

      addInstance(that);
    } else {
      $wrap.detach();
      $style.detach();
      $anchor.detach();
      $fotorama
          .html(fotoramaData.urtext)
          .removeClass(stampClass);

      hideInstance(that);
    }

    bindGlobalEvents(FLAG);
    appendElements.f = FLAG;
  }

  function setData () {
    data = that.data = data || clone(opts.data) || getDataFromHtml($fotorama);
    size = that.size = data.length;

    !ready.ok && opts.shuffle && shuffle(data);

    checkForVideo();

    activeIndex = limitIndex(activeIndex);

    size && appendElements(true);
  }

  function stageNoMove () {
    var _noMove = (size < 2 && !opts.enableifsingleframe) || $videoPlaying;
    stageShaftTouchTail.noMove = _noMove || o_fade;
    stageShaftTouchTail.noSwipe = _noMove || !opts.swipe;

    !o_transition && $stageShaft.toggleClass(grabClass, !opts.click && !stageShaftTouchTail.noMove && !stageShaftTouchTail.noSwipe);
    MS_POINTER && $wrap.toggleClass(wrapPanYClass, !stageShaftTouchTail.noSwipe);
  }

  function setAutoplayInterval (interval) {
    if (interval === true) interval = '';
    opts.autoplay = Math.max(+interval || AUTOPLAY_INTERVAL, o_transitionDuration * 1.5);
  }

  /**
   * Options on the fly
   * */
  function setOptions () {
    that.options = opts = optionsToLowerCase(opts);

    o_fade = (opts.transition === 'crossfade' || opts.transition === 'dissolve');

    o_loop = opts.loop && (size > 2 || (o_fade && (!o_transition || o_transition !== 'slide')));

    o_transitionDuration = +opts.transitionduration || TRANSITION_DURATION;

    o_rtl = opts.direction === 'rtl';

    o_keyboard = $.extend({}, opts.keyboard && KEYBOARD_OPTIONS, opts.keyboard);

    var classes = {add: [], remove: []};    }

    if (size > 1 || opts.enableifsingleframe) {
      o_nav = opts.nav;
      o_navTop = opts.navposition === 'top';
      classes.remove.push(selectClass);

      $arrs.toggle(!!opts.arrows);
    } else {
      o_nav = false;
      $arrs.hide();
    }

    spinnerStop();
    spinner = new Spinner($.extend(spinnerDefaults, opts.spinner, spinnerOverride, {direction: o_rtl ? -1 : 1}));

    arrsUpdate();
    stageWheelUpdate();

    if (opts.autoplay) setAutoplayInterval(opts.autoplay);

    o_thumbSide = numberFromMeasure(opts.thumbwidth) || THUMB_SIZE;
    o_thumbSide2 = numberFromMeasure(opts.thumbheight) || THUMB_SIZE;

    stageWheelTail.ok = navWheelTail.ok = opts.trackpad && !SLOW;

    stageNoMove();

    extendMeasures(opts, [measures]);

    o_navThumbs = o_nav === 'thumbs';

    if (o_navThumbs) {
      frameDraw(size, 'navThumb');

      $navFrame = $navThumbFrame;
      navFrameKey = NAV_THUMB_FRAME_KEY;

      setStyle($style, $.Fotorama.jst.style({w: o_thumbSide, h: o_thumbSide2, b: opts.thumbborderwidth, m: opts.thumbmargin, s: stamp, q: !COMPAT}));

      $nav
          .addClass(navThumbsClass)
          .removeClass(navDotsClass);
    } else if (o_nav === 'dots') {
      frameDraw(size, 'navDot');

      $navFrame = $navDotFrame;
      navFrameKey = NAV_DOT_FRAME_KEY;

      $nav
          .addClass(navDotsClass)
          .removeClass(navThumbsClass);
    } else {
      o_nav = false;
      $nav.removeClass(navThumbsClass + ' ' + navDotsClass);
    }

    if (o_nav) {
      if (o_navTop) {
        $navWrap.insertBefore($stage);
      } else {
        $navWrap.insertAfter($stage);
      }
      frameAppend.nav = false;
      frameAppend($navFrame, $navShaft, 'nav');
    }

    o_allowFullScreen = opts.allowfullscreen;

    if (o_allowFullScreen) {
      $fullscreenIcon.prependTo($stage);
      o_nativeFullScreen = FULLSCREEN && o_allowFullScreen === 'native';
    } else {
      $fullscreenIcon.detach();
      o_nativeFullScreen = false;
    }

    addOrRemoveClass(o_fade, wrapFadeClass);
    addOrRemoveClass(!o_fade, wrapSlideClass);
    addOrRemoveClass(!opts.captions, wrapNoCaptionsClass);
    addOrRemoveClass(o_rtl, wrapRtlClass);
    addOrRemoveClass(opts.arrows !== 'always', wrapToggleArrowsClass);

    o_shadows = opts.shadows && !SLOW;
    addOrRemoveClass(!o_shadows, wrapNoShadowsClass);

    $wrap
        .addClass(classes.add.join(' '))
        .removeClass(classes.remove.join(' '));

    lastOptions = $.extend({}, opts);
 ;
 ;
 ;
  }

  function getPrevIndex (index) {
    return index > 0 || o_loop ? index - 1 : false;
  }

  function getNextIndex (index) {
    return index < size - 1 || o_loop ? index + 1 : false;
  }

  function setStageShaftMinmaxAndSnap () {
    stageShaftTouchTail.min = o_loop ? -Infinity : -getPosByIndex(size - 1, measures.w, opts.margin, repositionIndex);
    stageShaftTouchTail.max = o_loop ? Infinity : -getPosByIndex(0, measures.w, opts.margin, repositionIndex);
    stageShaftTouchTail.snap = measures.w + opts.margin;
  }

  function setNavShaftMinMax () {
    ////////console.log('setNavShaftMinMax', measures.nw);
    navShaftTouchTail.min = Math.min(0, measures.nw - $navShaft.width());
    navShaftTouchTail.max = 0;
    $navShaft.toggleClass(grabClass, !(navShaftTouchTail.noMove = navShaftTouchTail.min === navShaftTouchTail.max));
  }

  function eachIndex (indexes, type, fn) {
    if (typeof indexes === 'number') {
      indexes = new Array(indexes);
      var rangeFLAG = true;
    }
    return $.each(indexes, function (i, index) {
      if (rangeFLAG) index = i;
      if (typeof index === 'number') {
        var dataFrame = data[normalizeIndex(index)];

        if (dataFrame) {
          var key = '$' + type + 'Frame',
              $frame = dataFrame[key];

          fn.call(this, i, index, dataFrame, $frame, key, $frame && $frame.data());
        }
      }
    });
  }

  function setMeasures (width, height, ratio, index) {
    if (!measuresSetFLAG || (measuresSetFLAG === '*' && index === startIndex)) {

      //////console.log('setMeasures', index, opts.width, opts.height);

      width = measureIsValid(opts.width) || measureIsValid(width) || WIDTH;
      height = measureIsValid(opts.height) || measureIsValid(height) || HEIGHT;
      that.resize({
        width: width,
        ratio: opts.ratio || ratio || width / height
      }, 0, index !== startIndex && '*');
    }
  }

  function loadImg (indexes, type, specialMeasures, method, position, again) {
    eachIndex(indexes, type, function (i, index, dataFrame, $frame, key, frameData) {

      if (!$frame) return;

      var fullFLAG = that.fullScreen && dataFrame.full && dataFrame.full !== dataFrame.img && !frameData.$full && type === 'stage';

      if (frameData.$img && !again && !fullFLAG) return;

      var img = new Image(),
          $img = $(img),
          imgData = $img.data();

      frameData[fullFLAG ? '$full' : '$img'] = $img;

      var srcKey = type === 'stage' ? (fullFLAG ? 'full' : 'img') : 'thumb',
          src = dataFrame[srcKey],
          dummy = fullFLAG ? null : dataFrame[type === 'stage' ? 'thumb' : 'img'];

      if (type === 'navThumb') $frame = frameData.$wrap;

    }

      function error () {
        $img.remove();

        $.Fotorama.cache[src] = 'error';

        if ((!dataFrame.html || type !== 'stage') && dummy && dummy !== src) {
          dataFrame[srcKey] = src = dummy;
          loadImg([index], type, specialMeasures, method, position, true);
        } else {
          if (src && !dataFrame.html && !fullFLAG) {
            $frame
                .trigger('f:error')
                .removeClass(loadingClass)
                .addClass(errorClass);

            triggerTriggerEvent('error');
          } else if (type === 'stage') {
            $frame
                .trigger('f:load')
                .removeClass(loadingClass + ' ' + errorClass)
                .addClass(loadedClass);

            triggerTriggerEvent('load');
            setMeasures();
          }

          frameData.state = 'error';

          if (size > 1 && data[index] === dataFrame && !dataFrame.html && !dataFrame.deleted && !dataFrame.video && !fullFLAG) {
            dataFrame.deleted = true;
            that.splice(index, 1);
          }
        }
      }

      function loaded () {
        //////console.log('loaded: ' + src);

        ////console.log('$.Fotorama.measures[src]', $.Fotorama.measures[src]);

        $.Fotorama.measures[src] = imgData.measures = $.Fotorama.measures[src] || {
          width: img.width,
          height: img.height,
          ratio: img.width / img.height
        };

        setMeasures(imgData.measures.width, imgData.measures.height, imgData.measures.ratio, index);

        $img
            .off('load error')
            .addClass(imgClass + (fullFLAG ? ' ' + imgFullClass : ''))
            .prependTo($frame);

        fit($img, ($.isFunction(specialMeasures) ? specialMeasures() : specialMeasures) || measures, method || dataFrame.fit || opts.fit, position || dataFrame.position || opts.position);

        $.Fotorama.cache[src] = frameData.state = 'loaded';

        setTimeout(function () {
          $frame
              .trigger('f:load')
              .removeClass(loadingClass + ' ' + errorClass)
              .addClass(loadedClass + ' ' + (fullFLAG ? loadedFullClass : loadedImgClass));

          if (type === 'stage') {
            triggerTriggerEvent('load');
          } else if (dataFrame.thumbratio === AUTO || !dataFrame.thumbratio && opts.thumbratio === AUTO) {
            // danger! reflow for all thumbnails
            dataFrame.thumbratio = imgData.measures.ratio;
            reset();
          }
        }, 0);
      }

      if (!src) {
        error();
        return;
      }

    }

      if (!$.Fotorama.cache[src]) {
        $.Fotorama.cache[src] = '*';

        $img
            .on('load', waitAndLoad)
            .on('error', error);
      } else {
        (function justWait () {
          if ($.Fotorama.cache[src] === 'error') {
            error();
          } else if ($.Fotorama.cache[src] === 'loaded') {
            ////console.log('take from cache: ' + src);
            setTimeout(waitAndLoad, 0);
          } else {
            setTimeout(justWait, 100);
          }
        })();
      }

      frameData.state = '';
      img.src = src;
    });
 ;
  }

  function spinnerStop () {
    $spinner.detach();
    spinner && spinner.stop();
  }

  function updateFotoramaState () {
    var $frame = activeFrame[STAGE_FRAME_KEY];

    if ($frame && !$frame.data().state) {
      spinnerSpin($frame);
      $frame.on('f:load f:er    });
    }
  }

  function addNavFrameEvents (frame) {
    addEnterUp(frame, onNavFrameClick);
    addFocus(frame, function () {

      setTimeout(function () {
        lockScroll($nav);
      }, 0);
      slideNavShaft({time: o_transitionDuration, guessIndex: $(this).data().eq, minMax: navShaftTouchTail});
    });
  }

  function frameDraw (indexes, type) {
    eachIndex(indexes, type, function (i, index, dataFrame, $frame, key, frameData) {
      if ($frame) return;

      $frame = dataFrame[key] = $wrap[key].clone();
      frameData = $frame.data();
      frameData.data = dataFrame;
      var frame = $frame[0];

      if (type === 'stage') {

        if (dataFrame.html) {
          $('<div class="' + htmlClass + '"></div>')
              .append(
                  dataFrame._html ? $(dataFrame.html)
                      .removeAttr('id')
                      .html(dataFrame._html) // Because of IE
                  : dataFrame.html
              )
              .appendTo($frame);
        }

        dataFrame.caption && $(div(captionClass, div(captionWrapClass, dataFrame.caption))).appendTo($frame);

        dataFrame.video && $frame
          .addClass(stageFrameVideoClass)
          .append($videoPlay.clone());

        // This solves tabbing problems
        addFocus(frame, function () {
          setTimeout(function () {
            lockScroll($stage);
          }, 0);
          clickToShow({index: frameData.eq, user: true});
        });

        $stageFrame = $stageFrame.add($frame);
      } else if (type === 'navDot') {
        addNavFrameEvents(frame);
        $navDotFrame = $navDotFrame.add($frame);
      } else if (type === 'navThumb') {
        addNavFrameEvents(frame);
        frameData.$wrap = $frame.children(':first');
        $navThumbFrame = $navThumbFrame.add($frame);
        if (dataFrame.video) {
          frameData.$wrap.append($videoPlay.clone());
        }
      }
    });
 ;
  }

  function stageFramePosition (indexes) {
    eachIndex(indexes, 'stage', function (i, index, dataFrame, $frame, key, frameData) {
      if (!$frame) return;

      var normalizedIndex = normalizeIndex(index),
          method = dataFrame.fit || opts.fit,
          position = dataFrame.position || opts.position;
      frameData.eq = normalizedIndex;

      toDetach[STAGE_FRAME_KEY][normalizedIndex] = $frame.css($.extend({left: o_fade ? 0 : getPosByIndex(index, measures.w, opts.margin, repositionIndex)}, o_fade && getDuration(0)));

      if (isDetached($frame[0])) {
        $frame.appendTo($stageShaft);
        unloadVideo(dataFrame.$video);
      }

      callFit(frameData.$img, measures, method, position);
      callFit(frameData.$full, measures, method, position);
    });
  }

  function thumbsDraw (pos, loadFLAG) {
    if (o_nav !== 'thumbs' || isNaN(pos)) return;

    var leftLimit = -pos,
        rightLimit = -pos + measures.nw;

    $navThumbFrame.each(function () {
      var $this = $(this),
          thisData = $this.data(),
          eq = thisData.eq,
          getSpecialMeasu    },
          specialMeasures = getSpecialMeasures(),
          dataFrame = data[eq] || {},
          method = dataFrame.thumbfit || opts.thumbfit,
          position = dataFrame.thumbposition || opts.thumbposition;

      specialMeasures.w = thisData.w;

      if (thisData.l + thisData.w < leftLimit
          || thisData.l > rightLimit
          || callFit(thisData.$img, specialMeasures, method, position)) return;

      loadFLAG && loadImg([eq], 'navThumb', getSpecialMeasures, method, position);
    });
  }

  function frameAppend ($frames, $shaft, type) {
    if (!frameAppend[type]) {

      var thumbsFLAG = type === 'nav' && o_navThumbs,
          left = 0;

      $shaft.append(
        $frames
            .filter(function () {
              var actual,
                  $this = $(this),
                  frameData = $this.data();
              for (var _i = 0, _l = data.length; _i < _l; _i++) {
                if (frameData.data === data[_i]) {
                  actual = true;
                  frameData.eq = _i;
                  break;
                }
              }
              return actual || $this.remove() && false;
            })
                })
            .each(function () {

              if (!thumbsFLAG) return;

              var $this = $(this),
                  frameData = $this.data(),
                  thumbwidth = Math.round(o_thumbSide2 * frameData.data.thumbratio) || o_thumbSide;

              frameData.l = left;
              frameData.w = thumbwidth;

              $this.css({width: thumbwidth});

              left += thumbwidth + opts.thumbmargin;
            })
      );

      frameAppend[type] = true;
    }
 ;
  }

  function disableDirrection (i) {
    return !o_loop && (!(activeIndex + i) || !(activeIndex - size + i)) && !$videoPlaying;
  }

  function arrsUpdate () {
    var disablePrev = disableDirrection(0),
        disableNext = disableDirrection(1);
    $arrPrev
        .toggleClass(arrDisabledClass, disablePrev)
        .attr(disableAttr(disablePrev));
    $arrNext
        .toggleClass(arrDisabledClass, disableNext)
        .attr(disableAttr(disableNext));
  }

  function stageWheelUpdate () {
    if (stageWheelTail.ok) {
      stageWheelTail.prevent = {'<': disableDirrection(0), '>': disableDirrection(1)};
    }
  }

  function getNavFrameBounds ($navFrame) {
    var navFrameData = $navFrame.data(),
        left,
        width;

    if (o_navThumbs) {
      left = navFrameData.l;
      width = navFrameData.w;
    } else {
      left = $navFrame.position().left;
      width = $navFrame.width();
    }

    return {
      c: left + width / 2,
      min: -left + opts.thumbmargin * 10,
      max: -left + measures.w - width - opts.thumbmargin * 10
    };
  }

  function slideThumbBorder (time) {
    var navFrameData = activeFrame[navFrameKey].data();
    slide($thumbBorder, {
      time: time * 1.2,
      pos: navFrameData.l,
      width: navFrameData.w - opts.thumbborderwidth * 2
    });
  }

  function slideNavShaft (options) {
    ////console.log('slideNavShaft', options.guessIndex, options.keep, slideNavShaft.l);
    var $guessNavFrame = data[options.guessIndex][navFrameKey];
    if ($guessNavFrame) {
      var overflowFLAG = navShaftTouchTail.min !== navShaftTouchTail.max,
          minMax = options.minMax || overflowFLAG && getNavFrameBounds(activeFrame[navFrameKey]),
          l = overflowFLAG && (options.keep && slideNavShaft.l ? slideNavShaft.l : minMaxLimit((options.coo || measures.nw / 2) - getNavFrameBounds($guessNavFrame).c, minMax.min, minMax.max)),
          pos = overflowFLAG && minMaxLimit(l, navShaftTouchTail.min, navShaftTouchTail.max),
          time = options.time * 1.1;

      slide($navShaft, {
        time: time,
        pos: pos || 0,
        o    }
      });

      //if (time) thumbsDraw(pos);

      setShadow($nav, findShadowEdge(pos, navShaftTouchTail.min, navShaftTouchTail.max));
      slideNavShaft.l = l;
    }
  }

  function navUpdate () {
    deactivateFrames(navFrameKey);
    toDeactivate[navFrameKey].push(activeFrame[navFrameKey].addClass(activeClass));
  }

  function deactivateFrames (key) {
    var _toDeactivate = toDeactivate[key];

    while (_toDeactivate.length) {
      _toDeactivate.shift().removeClass(activeClass);
    }
  }

  function detachFrames (key) {
    var _toDetach = toDetach[key];

    //////console.log('_toDetach', _toDetach);
    //////console.log('activeIndexes', activeIndexes);

    $.each(activeInd    });

    $.each(_toDe    });
  }

  function stageShaftReposition (skipOnEnd) {

    repositionIndex = dirtyIndex = activeIndex;

    var $frame = activeFrame[STAGE_FRAME_KEY];

    if ($frame) {
      deactivateFrames(STAGE_FRAME_KEY);
      toDeactivate[STAGE_FRAME_KEY].push($frame.addClass(activeClass));

      skipOnEnd || that.show.onEnd(true);
      stop($stageShaft, 0, true);

      detachFrames(STAGE_FRAME_KEY);
      stageFramePosition(activeIndexes);
      setStageShaftMinmaxAndSnap();
      setNavShaftMinMax();
    }
  }

  function extendMeasures (options, measuresArray) {
    if (!options) return;

    $.each(measuresArray, function (i, measures) {
      if (!measures) return;

      $.extend(measures, {
        width: options.width || measures.width,
        height: options.height,
        minwidth: options.minwidth,
        maxwidth: options.maxwidth,
        minheight: options.minheight,
        maxheight: options.maxheight,
        ratio: getRatio(options.ratio)
      })
    });
 ;
  }

  function onTouchStart () {
    clearTimeout(onTouchEnd.t);
    touchedFLAG = 1;

    if (opts.stopautoplayontouch) {
      that.stopAutoplay();
    } else {
      pausedAutoplayFLAG = true;
    }
  }

  function onTouchEnd () {
    if (!touchedFLAG) return;
    if (!opts.stopautoplayontouch) {
      releaseAutoplay();
      changeAutoplay();
    }

    onTouchEnd.t = setTi    }, TRANSITION_DURATION + TOUCH_TIMEOUT);
    //////console.timeEnd('onTouchEnd');
  }

  function releaseAutoplay () {
    ////console.log('releaseAutoplay');
    pausedAutoplayFLAG = !!($videoPlaying || stoppedAutoplayFLAG);
  }

  function changeAutoplay () {
    ////console.log('changeAutoplay');

    clearTimeout(changeAutoplay.t);
    waitFor.stop(changeAutoplay.w);

    if (!opts.autoplay || pausedAutoplayFLAG) {
      if (that.autoplay) {
        that.autoplay = false;
        triggerEvent('stopautoplay');
      }

      return;
    }

    ////console.log('changeAutoplay continue');

    if (!that.autoplay) {
      that.autoplay = true;
      triggerEvent('startautoplay');
    }

    var _activeIndex = activeIndex;


    var frameData = activeFrame[STAGE_FRAME_KEY].data();
    changeAutoplay.w = waitFor(function () {
      ////console.log('wait for the state of the current frame');
      return frameData.state || _activeIndex !== activeIndex;
    }, function () {
      ////console.log('the current frame is ready');
      changeAutoplay.t = setTimeout(function () {
        ////console.log('changeAutoplay.t setTimeout', pausedAutoplayFLAG, _activeIndex !== activeIndex);
        if (pausedAutoplayFLAG || _activeIndex !== activeIndex) return;

        var _nextAutoplayIndex = nextAutoplayIndex,
            nextFrameData = data[_nextAutoplayIndex][STAGE_FRAME_KEY].data();

        changeAutoplay.w = wa    }, function () {
          if (pausedAutoplayFLAG || _nextAutoplayIndex !== nextAutoplayIndex) return;
          that.show(o_loop ? getDirectionSign(!o_rtl) : nextAutoplayIndex);
        });
      }, opts.autoplay);
    });

  }

  that.startAutoplay = function (interval) {
    if (that.autoplay) return this;
    pausedAutoplayFLAG = stoppedAutoplayFLAG = false;
    setAutoplayInterval(interval || opts.autoplay);
    changeAutoplay();

    return this;
  };

  that.stopAutoplay = function () {
    if (that.autoplay) {
      pausedAutoplayFLAG = stoppedAutoplayFLAG = true;
      changeAutoplay();
    }
    return this;
  };

  that.show = function (options) {
    ////console.log('that.show');
    //////console.time('that.show prepare');
    var index;

    if (typeof options !== 'object') {
      index = options;
      options = {};
    } else {
      index = options.index;
    }

    index = index === '>' ? dirtyIndex + 1 : index === '<' ? dirtyIndex - 1 : index === '<<' ? 0 : index === '>>' ? size - 1 : index;
    index = isNaN(index) ? getIndexFromHash(index, data, true) : index;
    index = typeof index === 'undefined' ? activeIndex || 0 : index;

    that.activeIndex = activeIndex = edgeIndex(index);
    prevIndex = getPrevIndex(activeIndex);
    nextIndex = getNextIndex(activeIndex);
    nextAutoplayIndex = normalizeIndex(activeIndex + (o_rtl ? -1 : 1));
    activeIndexes = [activeIndex, prevIndex, nextIndex];

    dirtyIndex = o_loop ? index : activeIndex;

    var diffIndex = Math.abs(lastActiveIndex - dirtyIndex),
        time = getNumber(options.time, function () {
          return Math.min(o_transitionDuration * (1 + (diffIndex - 1) / 12), o_transitionDuration * 2);
        }),
        overPos = options.overPos;

    if (options.slow) time *= 10;

    var _activeFrame = activeFrame;
    that.activeFrame = activeFrame = data[activeIndex];
    //////console.timeEnd('that.show prepare');

    var silent = _activeFrame === activeFrame && !options.user;

    //setTimeout(function () {
    //////console.time('unloadVideo');
    unloadVideo($videoPlaying, activeFrame.i !== data[normalizeIndex(repositionIndex)].i);
    //////console.timeEnd('unloadVideo');
    //////console.time('frameDraw');
    frameDraw(activeIndexes, 'stage');
    //////console.timeEnd('frameDraw');
    //////console.time('stageFramePosition');
    stageFramePosition(SLOW ? [dirtyIndex] : [dirtyIndex, getPrevIndex(dirtyIndex), getNextIndex(dirtyIndex)]);
    //////console.timeEnd('stageFramePosition');
    //////console.time('updateTouchTails');
    updateTouchTails('go', true);
    //////console.timeEnd('updateTouchTails');
    //////console.time('triggerEvent');

    silent || triggerEvent('show', {
      user: options.user,
      time: time
    });
    //////console.timeEnd('triggerEvent');
    //}, 0);

    //////console.time('bind onEnd');

    pausedAutoplayFLAG = true;

    var onEnd = that.show.onEnd = function (skipReposition) {
      if (onEnd.ok) return;
      onEnd.ok = true;

      skipReposition || stageShaftReposition(true);

      if (!silent) {
        triggerEvent('showend', {
          user: options.user
        });
      }

      ////console.log('o_transition', o_transition);

      if (!skipReposition && o_transition && o_transition !== opts.transition) {
        ////console.log('set transition back to: ' + o_transition);
        that.setOptions({transition: o_transition});
        o_transition = false;
        return;
      }

      updateFotoramaState();
      loadImg(activeIndexes, 'stage');

      updateTouchTails('go', false);
      stageWheelUpdate();

      stageCursor();
      releaseAutoplay();
      changeAutoplay();
    };
    //////console.timeEnd('bind onEnd');

    if (!o_fade) {
      //////console.time('slide');
      slide($stageShaft, {
        pos: -getPosByIndex(dirtyIndex, measures.w, opts.margin, repositionIndex),
        overPos: overPos,
        time: time,
        onEnd: onEnd/*,
        _001: true*/
      });
      //////console.timeEnd('slide');
    } else {
      var $activeFrame = activeFrame[STAGE_FRAME_KEY],
          $prevActiveFrame = activeIndex !== lastActiveIndex ? data[lastActiveIndex][STAGE_FRAME_KEY] : null;

      fade($activeFrame, $prevActiveFrame, $stageFrame, {
        time: time,
        method: opts.transition,
        onEnd: onEnd
      }, fadeStack);
    }

    //////console.time('arrsUpdate');
    arrsUpdate();
    //////console.timeEnd('arrsUpdate');

    if (o_nav) {
      //////console.time('navUpdate');
      navUpdate();
      //////console.timeEnd('navUpdate');

      //////console.time('slideNavShaft');
      var guessIndex = limitIndex(activeIndex + minMaxLimit(dirtyIndex - lastActiveIndex, -1, 1));
      slideNavShaft({time: time, coo: guessIndex !== activeIndex && options.coo, guessIndex: typeof options.coo !== 'undefined' ? guessIndex : activeIndex, keep: silent});
      //////console.timeEnd('slideNavShaft');

      //////console.time('slideThumbBorder');
      if (o_navThumbs) slideThumbBorder(time);
      //////console.timeEnd('slideThumbBorder');
    }

    //////console.time('that.show end');
    showedFLAG = typeof lastActiveIndex !== 'undefined' && lastActiveIndex !== activeIndex;
    lastActiveIndex = activeIndex;
    opts.hash && showedFLAG && !that.eq && setHash(activeFrame.id || activeIndex + 1);
    //////console.timeEnd('that.show end');

    //////console.timeEnd('that.show');

    return this;
  };

  that.requestFullScreen = function () {
    if (o_allowFullScreen && !that.fullScreen) {
      scrollTop = $WINDOW.scrollTop();
      scrollLeft = $WINDOW.scrollLeft();

      lockScroll($WINDOW);

      updateTouchTails('x', true);

      measuresStash = $.extend({}, measures);

      $fotorama
          .addClass(fullscreenClass)
          .appendTo($BODY.addClass(_fullscreenClass));

      $HTML.addClass(_fullscreenClass);

      unloadVideo($videoPlaying, true, true);

      that.fullScreen = true;

      if (o_nativeFullScreen) {
        fullScreenApi.request(fotorama);
      }

      that.resize();
      loadImg(activeIndexes, 'stage');
      updateFotoramaState();

      triggerEvent('fullscreenenter');
    }

    return this;
  };

  function cancelFullScreen () {
    if (that.fullScreen) {
      that.fullScreen = false;

      if (FULLSCREEN) {
        fullScreenApi.cancel(fotorama);
      }

      $BODY.removeClass(_fullscreenClass);
      $HTML.removeClass(_fullscreenClass);

      $fotorama
          .removeClass(fullscreenClass)
          .insertAfter($anchor);

      measures = $.extend({}, measuresStash);

      unloadVideo($videoPlaying, true, true);

      updateTouchTails('x', false);

      that.resize();
      loadImg(activeIndexes, 'stage');

      lockScroll($WINDOW, scrollLeft, scrollTop);

      triggerEvent('fullscreenexit');
    }
  }

  that.cancelFullScreen = function () {
    if (o_nativeFullScreen && fullScreenApi.is()) {
      fullScreenApi.cancel(document);
    } else {
      cancelFullScreen();
    }

    return this;
  };

  that.toggleFullScr;
  };

  addEvent(document, fullScreenApi.event, function () {
    if (data && !fullScreenApi.is() && !$videoPlaying) {
      cancelFullScreen();
    }
  });

  that.resize = function (options) {
    if (!data) return this;

    var time = arguments[1] || 0,
        setFLAG = arguments[2];

    extendMeasures(!that.fullScreen ? optionsToLowerCase(options) : {width: '100%', maxwidth: null, minwidth: null, height: '100%', maxheight: null, minheight: null}, [measures, setFLAG || that.fullScreen || opts]);

    var width = measures.width,
        height = measures.height,
        ratio = measures.ratio,
        windowHeight = $WINDOW.height() - (o_nav ? $nav.height() : 0);

    if (measureIsValid(width)) {
      $wrap
          .addClass(wrapOnlyActiveClass)
          .css({width: width, minWidth: measures.minwidth || 0, maxWidth: measures.maxwidth || MAX_WIDTH});

      width = measures.W = measures.w = $wrap.width();
      measures.nw = o_nav && numberFromWhatever(opts.navwidth, width) || width;

      if (opts.glimpse) {
        // Glimpse
        measures.w -= Math.round((numberFromWhatever(opts.glimpse, width) || 0) * 2);
      }

      $stageShaft.css({width: measures.w, marginLeft: (measures.W - measures.w) / 2});

      //////console.log('measures.W', measures.W);
      //////console.log('measures.w', measures.w);

      height = numberFromWhatever(height, windowHeight);

      height = height || (ratio && width / ratio);

      if (height) {
        width = Math.round(width);
        height = measures.h = Math.round(minMaxLimit(height, numberFromWhatever(measures.minheight, windowHeight), numberFromWhatever(measures.maxheight, windowHeight)));

        $stage
            .stop()
            .animate({width: width, height: height}, time, function () {
              $wrap.removeClass(wrapOnlyActiveClass);
            });

        stageShaftReposition();

        if (o_nav) {
          $nav
              .stop()
              .animate({width: measures.nw}, time);

          slideNavShaft({guessIndex: activeIndex, time: time, keep: true});
          if (o_navThumbs && frameAppend.nav) slideThumbBorder(time);
        }

        measuresSetFLAG = setFLAG || true;

        ready();
      }
    }

    stageLeft = $stage.offset().left;

    return this;
  };

  that.setOptions = function (options) {
    $.extend(opts, options);
    reset();
    return this;
  };

  that.shuffle = function () {
    data && shuffle(data) && reset();
    return this;
  };

  function setShadow ($el, edge) {
    //////console.time('setShadow');
    if (o_shadows) {
      $el.removeClass(shadowsLeftClass + ' ' + shadowsRightClass);
      edge && !$videoPlaying && $el.addClass(edge.replace(/^|\s/g, ' ' + shadowsClass + '--'));
    }
    //////console.timeEnd('setShadow');
  }

  that.destroy = function () {
    that.cancelFullScreen();
    that.stopAutoplay();

    data = that.data = null;

    appendElements();

    activeIndexes = [];
    detachFrames(STAGE_FRAME_KEY);

    reset.ok = false;

    return this;
  };

  that.playVideo = function () {
    var dataFrame = activeFrame,
        video = dataFrame.video,
        _activeIndex = activeIndex;

    if (typeof video === 'object' && dataFrame.videoReady) {
      o_nativeFullScreen && that.fullScreen && that.cancelFullScreen();

      wa    }, function () {
        if (_activeIndex === activeIndex) {
          dataFrame.$video = dataFrame.$video || $($.Fotorama.jst.video(video));
          dataFrame.$video.appendTo(dataFrame[STAGE_FRAME_KEY]);

          $wrap.addClass(wrapVideoClass);
          $videoPlaying = dataFrame.$video;

          stageNoMove();

          $arrs.blur();
          $fullscreenIcon.blur();

          triggerEvent('loadvideo');
        }
      });
    }

    return this;
  };

  that.stopVideo = function () {
    unloadVideo($videoPlaying, true, true);
    return this;
  };

  function unloadVideo ($video, unloadActiveFLAG, releaseAutoplayFLAG) {
    if (unloadActiveFLAG) {
      $wrap.removeClass(wrapVideoClass);
      $videoPlaying = false;

      stageNoMove();
    }

    if ($video && $video !== $videoPlaying) {
      $video.remove();
      triggerEvent('unloadvideo');
    }

    if (releaseAutoplayFLAG) {
      releaseAutoplay();
      changeAutoplay();
    }
 ;
  }

  function stageCursor (e) {
    if (stageShaftTouchTail.flow) return;

    var x = e ? e.pageX : stageCursor.x,
        pointerFLAG = x && !disableDirrection(getDirection(x)) && opts.click;

    if (stageCursor.p !== pointerFLAG
        && $stage.toggleClass(pointerClass, pointerFLAG)) {
      stageCursor.p = pointerFLAG;
      stageCursor.x = x;
    }
  }

  $stage.on('mousemove', stageCursor);

  function clickToShow (showOptions) {
    clearTimeout(clickToShow.t);

    if (opts.clicktransition && opts.clicktransition !== opts.transition) {
      ////console.log('change transition to: ' + opts.clicktransition);

      // this timeout is for yield events flow
      setTimeout(function () {
        // save original transition for later
        var _o_transition = opts.transition;

        that.setOptions({transition: opts.clicktransition});

        // now safe to pass base transition to o_transition, so that.show will restor it
        o_transition = _o_transition;
        // this timeout is here to prevent jerking in some browsers
        clickToShow.t = setTi    }, 10);
      }, 0);
    } else {
      that.show(showOptions);
    }
  }

  function onStageTap (e, toggleControlsFLAG) {
    //////console.time('onStageTap');
    var target = e.target,
        $target = $(target);

    if ($target.hasClass(videoPlayClass)) {
      that.playVideo();
    } else if (target === fullscreenIcon) {
      that.toggleFullScreen();
    } else if ($videoPlaying) {
      target === videoClose && unloadVideo($videoPlaying, true, true);
    } else {
      if (toggleControlsFLAG) {
        toggleControlsClass();
      } else if (opts.click) {

        clickToShow({index: e.shiftKey || getDirectionSign(getDirection(e._x)), slow: e.altKey, user: true});
      }
    }
    //////console.timeEnd('onStageTap');
 ;
  }

  stageShaftTouchTail = moveOnTouch($stageShaft, {
    onStart: onTouchStart,
    onMove: function (e, result) {
      setShadow($stage, result.edge);
    },
    onTouchEnd: onTouchEnd,
    onEnd: function (result) {
      //////console.time('stageShaftTouchTail.onEnd');
      setShadow($stage);

      //////console.log('result', result);

      var toggleControlsFLAG = (MS_POINTER && !hoverFLAG || result.touch) && opts.arrows && opts.arrows !== 'always';

      if (result.moved || (toggleControlsFLAG && result.pos !== result.newPos && !result.control)) {
        var index = getIndexByPos(result.newPos, measures.w, opts.margin, repositionIndex);
        that.show({
          index: index,
          time: o_fade ? o_transitionDuration : result.time,
          overPos: result.overPos,
          user: true
        });
      } else if (!result.aborted && !result.control) {
        onStageTap(result.startEvent, toggleControlsFLAG);
      }
      //////console.timeEnd('stageShaftTouchTail.onEnd');
    },
//    getPos: function () {
//      return -getPosByIndex(dirtyIndex, measures.w, opts.margin, repositionIndex);
//    },
    //_001: true,
    timeLow: 1,
    timeHigh: 1,
    friction: 2,
    select: '.' + selectClass + ', .' + selectClass + ' *',
    $wrap: $stage
  });

  navShaftTouchTail = moveOnTouch($navShaft, {
    onStart: onTouchStart,
    on    },
    onTouchEnd: onTouchEnd,
    onEnd: function (result) {

      function onEnd () {
        slideNavShaft.l = result.newPos;
        releaseAutoplay();
        changeAutoplay();
        thumbsDraw(result.newPos, true);
      }

      if (!result.moved) {
        var target = result.$target.closest('.' + navFrameClass, $navShaft)[0];
        target && onNavFrameClick.call(target, result.startEvent);
      } else if (result.pos !== result.newPos) {
        pausedAutoplayFLAG = true;
        slide($navShaft, {
          time: result.time,
          pos: result.newPos,
          overPos: result.overPos,
          onEnd: onEnd
        });
        thumbsDraw(result.newPos);
        o_shadows && setShadow($nav, findShadowEdge(result.newPos, navShaftTouchTail.min, navShaftTouchTail.max));
      } else {
        onEnd();
      }
    },
    timeLow: .5,
    timeHigh: 2,
    friction: 5,
    $wrap: $nav
  });

  stageWheelTail = wheel($stage, {
    shift: true,
    onEnd: function (e, direction) {
      //////console.log('wheel $stage onEnd', direction);
      onTouchStart();
      onTouchEnd();
      that.show({index: direction, slow: e.altKey})
    }
  });

  navWheelTail = wheel($nav, {
    onEnd: function (e, direction) {
      //////console.log('wheel $nav onEnd', direction);
      onTouchStart();
      onTouchEnd();
      var newPos = stop($navShaft) + direction * .25;
      $navShaft.css(getTranslate(minMaxLimit(newPos, navShaftTouchTail.min, navShaftTouchTail.max)));
      o_shadows && setShadow($nav, findShadowEdge(newPos, navShaftTouchTail.min, navShaftTouchTail.max));
      navWheelTail.prevent = {'<': newPos >= navShaftTouchTail.max, '>': newPos <= navShaftTouchTail.min};
      clearTimeout(navWheelTail.t);
      navWheelTail.t = setTi    }, TOUCH_TIMEOUT);
      thumbsDraw(newPos);
    }
  });

  $wrap.hover(
      function () {
        setTimeout(function () {
          if (touchedFLAG) return;
          toggleControlsClass(!(hoverFLAG = true));
        }, 0);
      }, function () {
        if (!hoverFLAG) return;
        toggleControlsClass(!(hoverFLAG = false));
      }
  );

  function onNavFrameClick (e) {
    var index = $(this).data().eq;
    clickToShow({index: index, slow: e.altKey, user: true, coo: e._x - $nav.offset().left});
  }

  function onArrClick (e) {
    clickToShow({index: $arrs.index(this) ? '>' : '<', slow: e.altKey, user: true});
  }

  smartClick($arrs, function (e) {
    stopEvent(e);
    onArrClick.call(this, e);
  }, {
    onS    },
    onTouchEnd: onTouchEnd
  });

  function addFocusOnControls (el) {
    addFocus(el, function () {
      setTi    }, 0);
      toggleControlsClass(false);
    });
  }

  $arrs.each(function () {
    addEnterUp(    });
    addFocusOnControls(this);
  });

  addEnterUp(fullscreenIcon, that.toggleFullScreen);
  addFocusOnControls(fullscreenIcon);

  function reset () {
    setData();
    setOptions();

    if (!reset.i) {
      reset.i = true;
      // Only once
      var _startindex = opts.startindex;
      if (_startindex || opts.hash && location.hash) {
        startIndex = getIndexFromHash(_startindex || location.hash.replace(/^#/, ''), data, that.index === 0 || _startindex, _startindex);
      }
      activeIndex = repositionIndex = dirtyIndex = lastActiveIndex = startIndex = edgeIndex(startIndex) || 0;/*(o_rtl ? size - 1 : 0)*///;
    }

    if (size) {
      if (changeToRtl()) return;

      if ($videoPlaying) {
        unloadVideo($videoPlaying, true);
      }

      activeIndexes = [];
      detachFrames(STAGE_FRAME_KEY);

      reset.ok = true;

      that.show({index: activeIndex, time: 0});
      that.resize();
    } else {
      that.destroy();
    }
  }

  function changeToRtl () {
    //////console.log('changeToRtl');
    if (!changeToRtl.f === o_rtl) {
      changeToRtl.f = o_rtl;
      activeIndex = size - 1 - activeIndex;
      //////console.log('changeToRtl execute, activeIndex is', activeIndex);
      that.reverse();

      return true;
    }
  }

  $.each('load push pop shift unshift reverse sort splice'.split(' '), function (i, method) {
    that[method] = function () {
      data = data || [];
      if (method !== 'load') {
        Array.prototype[method].apply(data, arguments);
      } else if (arguments[0] && typeof arguments[0] === 'object' && arguments[0].length) {
        data = clone(arguments[0]);
      }
      reset();
      return that;
    }
  });

  function ready () {
    if (!ready.ok) {
      ready.ok = true;
      triggerEvent('ready');
    }
  }

  reset();
};


$.fn.fotorama = function (opts) {
  return this.each(function () {
    var that = this,
        $fotorama = $(this),
        fotoramaData = $fotorama.data(),
        fotorama = fotoramaData.fotorama;

    if (!fotorama) {
      wa    }, function () {
        fotoramaData.urtext = $fotorama.html();
        new $.Fotorama($fotorama,
            /* Priority for options:
             * 1. <div data-loop="true"></div>
             * 2. $('div').fotorama({loop: false})
             * 3. Defaults */
            $.extend(
                {},
                OPTIONS,
                window.fotoramaDefaults,
                opts,
                fotoramaData
            )
        );
      });
    } else {
      fotorama.setOptions(opts, true);
    }
  });
};
$.Fotorama.instances =});
}

function addInstance (instance) {
  $.Fotorama.instances.push(instance);
  calculateIndexes();
}

function hideInstance (instance) {
  $.Fotorama.instances.splice(instance.index, 1);
  calculateIndexes();
}
$.Fotorama.cache = {};
$.Fotorama.measures = {};
$ = $ || {};
$.Fotorama = $.Fotorama || {};
$.Fotorama.jst = $.Fotorama.jst || {};

$.Fotorama.jst.style = function(v) {
var __t, __p = '', __e = _.escape;
__p += '.fotorama' +
((__t = ( v.s )) == null ? '' : __t) +
' .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:' +
((__t = ( v.m )) == null ? '' : __t) +
'px;\nheight:' +
((__t = ( v.h )) == null ? '' : __t) +
'px}\n.fotorama' +
((__t = ( v.s )) == null ? '' : __t) +
' .fotorama__thumb-border{\nheight:' +
((__t = ( v.h - v.b * (v.q ? 0 : 2) )) == null ? '' : __t) +
'px;\nborder-width:' +
((__t = ( v.b )) == null ? '' : __t) +
'px;\nmargin-top:' +
((__t = ( v.m )) == null ? '' : __t) +
'px}';
return __p
};

$.Fotorama.jst.video = function(v) {
var __t, __p = '', __e = _.escape, __j = Array.prototype.'') }
__p += '<div class="fotorama__video"><iframe src="';
 print((v.type == 'youtube' ? v.p + 'youtube.com/embed/' + v.id +'?autoplay=1' : v.type == 'vimeo' ? v.p + 'player.vimeo.com/video/' + v.id + '?autoplay=1&badge=0' : v.id)  + (v.s && v.type != 'custom' ? '&' + v.s : '')) ;
__p += '" frameborder="0" allowfullscreen></iframe></div>\n';
return __p();
});
})(window, document, location, typeof jQuery !== 'undefined' && jQuery);
