/*! 20240118-6-RELEASE */

(e=>{const t=/^(\/react)((\.|-)(.)+)*\.js/;class r{constructor(e){this.trcManager=e}static getInstance(e){return r.instance||(r.instance=new r(e)),r.instance}static detectSpa(){const e=r.detectAngular(),t=r.detectAngularJs(),n=r.detectReact(),a=r.detectVue();return{isSpa:t||e||n||a,isAngularJs:t,isAngular:e,isReact:n,isVue:a}}sendSpaData(){if(!TRC.SpaDetector.dataSent){const e=r.detectSpa();this.sendGenericEvent(e)}}sendGenericEvent(e){if(!this.checkSessionAndUser())return;const t={data:JSON.stringify(e),type:"spa-measurements"};this.trcManager.sendEvent("pubs-generic",{d:JSON.stringify(t)},{}),TRC.SpaDetector.dataSent=!0}checkSessionAndUser(){const e=this.trcManager.response&&this.trcManager.response.trc?this.trcManager.response.trc["session-data"]:null;return TRC.pageManager.getUserId()&&this.trcManager.getSessionData(e)}static detectReact(){return!!(e.React||document.querySelector("[data-react], [data-reactroot], [data-reactid]")||r());function r(){const e=document.querySelectorAll('script[src*="/react"]');if(!e)return!1;const r=Array.prototype.slice.call(e).map(e=>e.src).map(e=>e.substring(e.indexOf("/react"))).filter(e=>t.test(e));return r.length>0}}static detectVue(){return!!(e.Vue||document.querySelector("[v-for], [v-bind], [v-once], [v-on]")||document.querySelector('script[src*="vue.js"]'))}static detectAngularJs(){return!!(e.angular||document.querySelector(".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]")||document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]'))}static detectAngular(){return!!(e.getAllAngularRootElements||document.querySelector("[ng-version]")&&document.querySelector("[ng-version]").getAttribute("ng-version")[0]>=2)}}TRC.SpaDetector=r})(window);   _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
/**
 * Swiper 9.0.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 14, 2023
 */


!function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function t(s, i) {
    void 0 === s && (s = {}), void 0 === i && (i = {}), Object.keys(i).forEach(function (r) {
      void 0 === s[r] ? s[r] = i[r] : e(i[r]) && e(s[r]) && Object.keys(i[r]).length > 0 && t(s[r], i[r]);
    });
  }

  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function i() {
    var e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }

  var r = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function n() {
    var e = "undefined" != typeof window ? window : {};
    return t(e, r), e;
  }

  function a(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function o() {
    return Date.now();
  }

  function l(e, t) {
    void 0 === t && (t = "x");
    var s = n();
    var i, r, a;

    var o = function (e) {
      var t = n();
      var s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);

    return s.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), a = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0;
  }

  function d(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function c(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }

  function p() {
    var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];

    for (var _s = 1; _s < arguments.length; _s += 1) {
      var _i = _s < 0 || arguments.length <= _s ? void 0 : arguments[_s];

      if (null != _i && !c(_i)) {
        var _s2 = Object.keys(Object(_i)).filter(function (e) {
          return t.indexOf(e) < 0;
        });

        for (var _t = 0, _r = _s2.length; _t < _r; _t += 1) {
          var _r2 = _s2[_t],
              _n = Object.getOwnPropertyDescriptor(_i, _r2);

          void 0 !== _n && _n.enumerable && (d(e[_r2]) && d(_i[_r2]) ? _i[_r2].__swiper__ ? e[_r2] = _i[_r2] : p(e[_r2], _i[_r2]) : !d(e[_r2]) && d(_i[_r2]) ? (e[_r2] = {}, _i[_r2].__swiper__ ? e[_r2] = _i[_r2] : p(e[_r2], _i[_r2])) : e[_r2] = _i[_r2]);
        }
      }
    }

    return e;
  }

  function u(e, t, s) {
    e.style.setProperty(t, s);
  }

  function m(e) {
    var t = e.swiper,
        s = e.targetPosition,
        i = e.side;
    var r = n(),
        a = -t.translate;
    var o,
        l = null;
    var d = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);

    var c = s > a ? "next" : "prev",
        p = function p(e, t) {
      return "next" === c && e >= t || "prev" === c && e <= t;
    },
        u = function u() {
      o = new Date().getTime(), null === l && (l = o);
      var e = Math.max(Math.min((o - l) / d, 1), 0),
          n = .5 - Math.cos(e * Math.PI) / 2;
      var c = a + n * (s - a);
      if (p(c, s) && (c = s), t.wrapperEl.scrollTo(_defineProperty({}, i, c)), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(_defineProperty({}, i, c));
      }), void r.cancelAnimationFrame(t.cssModeFrameID);
      t.cssModeFrameID = r.requestAnimationFrame(u);
    };

    u();
  }

  function f(e, t) {
    return void 0 === t && (t = ""), _toConsumableArray(e.children).filter(function (e) {
      return e.matches(t);
    });
  }

  function h(e, t) {
    var _s$classList;

    void 0 === t && (t = []);
    var s = document.createElement(e);
    return (_s$classList = s.classList).add.apply(_s$classList, _toConsumableArray(Array.isArray(t) ? t : [t])), s;
  }

  function v(e, t) {
    return n().getComputedStyle(e, null).getPropertyValue(t);
  }

  function g(e) {
    var t,
        s = e;

    if (s) {
      for (t = 0; null !== (s = s.previousSibling);) {
        1 === s.nodeType && (t += 1);
      }

      return t;
    }
  }

  function w(e, t, s) {
    var i = n();
    return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
  }

  var T, S, b;

  function y() {
    return T || (T = function () {
      var e = n(),
          t = i();
      return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
      };
    }()), T;
  }

  function E(e) {
    return void 0 === e && (e = {}), S || (S = function (e) {
      var _ref = void 0 === e ? {} : e,
          t = _ref.userAgent;

      var s = y(),
          i = n(),
          r = i.navigator.platform,
          a = t || i.navigator.userAgent,
          o = {
        ios: !1,
        android: !1
      },
          l = i.screen.width,
          d = i.screen.height,
          c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
      var p = a.match(/(iPad).*OS\s([\d_]+)/);
      var u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
          m = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          f = "Win32" === r;
      var h = "MacIntel" === r;
      return !p && h && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(d)) >= 0 && (p = a.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), h = !1), c && !f && (o.os = "android", o.android = !0), (p || m || u) && (o.os = "ios", o.ios = !0), o;
    }(e)), S;
  }

  function x() {
    return b || (b = function () {
      var e = n();
      var t = !1;

      function s() {
        var t = e.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
      }

      if (s()) {
        var _s3 = String(e.navigator.userAgent);

        if (_s3.includes("Version/")) {
          var _s3$split$1$split$0$s = _s3.split("Version/")[1].split(" ")[0].split(".").map(function (e) {
            return Number(e);
          }),
              _s3$split$1$split$0$s2 = _slicedToArray(_s3$split$1$split$0$s, 2),
              _e = _s3$split$1$split$0$s2[0],
              _i2 = _s3$split$1$split$0$s2[1];

          t = _e < 16 || 16 === _e && _i2 < 2;
        }
      }

      return {
        isSafari: t || s(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      };
    }()), b;
  }

  var C = {
    on: function on(e, t, s) {
      var i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      var r = s ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
      }), i;
    },
    once: function once(e, t, s) {
      var i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;

      function r() {
        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;

        for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) {
          n[a] = arguments[a];
        }

        t.apply(i, n);
      }

      return r.__emitterProxy = t, i.on(e, r, s);
    },
    onAny: function onAny(e, t) {
      var s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      var i = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      var s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function off(e, t) {
      var s = this;
      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (i, r) {
          (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1);
        });
      }), s) : s;
    },
    emit: function emit() {
      var e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      var t, s, i;

      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) {
        n[a] = arguments[a];
      }

      "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i);
      return (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(function (e) {
          e.apply(i, [t].concat(_toConsumableArray(s)));
        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(function (e) {
          e.apply(i, s);
        });
      }), e;
    }
  };
  var M = {
    updateSize: function updateSize() {
      var e = this;
      var t, s;
      var i = e.el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(v(i, "padding-left") || 0, 10) - parseInt(v(i, "padding-right") || 0, 10), s = s - parseInt(v(i, "padding-top") || 0, 10) - parseInt(v(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function updateSlides() {
      var e = this;

      function t(t) {
        return e.isHorizontal() ? t : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[t];
      }

      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }

      var i = e.params,
          r = e.wrapperEl,
          n = e.slidesEl,
          a = e.size,
          o = e.rtlTranslate,
          l = e.wrongRTL,
          d = e.virtual && i.virtual.enabled,
          c = d ? e.virtual.slides.length : e.slides.length,
          p = f(n, ".".concat(e.params.slideClass, ", swiper-slide")),
          m = d ? e.virtual.slides.length : p.length;
      var h = [];
      var g = [],
          T = [];
      var S = i.slidesOffsetBefore;
      "function" == typeof S && (S = i.slidesOffsetBefore.call(e));
      var b = i.slidesOffsetAfter;
      "function" == typeof b && (b = i.slidesOffsetAfter.call(e));
      var y = e.snapGrid.length,
          E = e.slidesGrid.length;
      var x = i.spaceBetween,
          C = -S,
          M = 0,
          P = 0;
      if (void 0 === a) return;
      "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * a), e.virtualSize = -x, p.forEach(function (e) {
        o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
      }), i.centeredSlides && i.cssMode && (u(r, "--swiper-centered-offset-before", ""), u(r, "--swiper-centered-offset-after", ""));
      var L = i.grid && i.grid.rows > 1 && e.grid;
      var k;
      L && e.grid.initSlides(m);
      var O = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(function (e) {
        return void 0 !== i.breakpoints[e].slidesPerView;
      }).length > 0;

      for (var _r3 = 0; _r3 < m; _r3 += 1) {
        var _n2 = void 0;

        if (k = 0, p[_r3] && (_n2 = p[_r3]), L && e.grid.updateSlide(_r3, _n2, m, t), !p[_r3] || "none" !== v(_n2, "display")) {
          if ("auto" === i.slidesPerView) {
            O && (p[_r3].style[t("width")] = "");

            var _a = getComputedStyle(_n2),
                _o = _n2.style.transform,
                _l = _n2.style.webkitTransform;

            if (_o && (_n2.style.transform = "none"), _l && (_n2.style.webkitTransform = "none"), i.roundLengths) k = e.isHorizontal() ? w(_n2, "width", !0) : w(_n2, "height", !0);else {
              var _e2 = s(_a, "width"),
                  _t2 = s(_a, "padding-left"),
                  _i3 = s(_a, "padding-right"),
                  _r4 = s(_a, "margin-left"),
                  _o2 = s(_a, "margin-right"),
                  _l2 = _a.getPropertyValue("box-sizing");

              if (_l2 && "border-box" === _l2) k = _e2 + _r4 + _o2;else {
                var _n3 = _n2,
                    _s4 = _n3.clientWidth,
                    _a2 = _n3.offsetWidth;
                k = _e2 + _t2 + _i3 + _r4 + _o2 + (_a2 - _s4);
              }
            }
            _o && (_n2.style.transform = _o), _l && (_n2.style.webkitTransform = _l), i.roundLengths && (k = Math.floor(k));
          } else k = (a - (i.slidesPerView - 1) * x) / i.slidesPerView, i.roundLengths && (k = Math.floor(k)), p[_r3] && (p[_r3].style[t("width")] = "".concat(k, "px"));

          p[_r3] && (p[_r3].swiperSlideSize = k), T.push(k), i.centeredSlides ? (C = C + k / 2 + M / 2 + x, 0 === M && 0 !== _r3 && (C = C - a / 2 - x), 0 === _r3 && (C = C - a / 2 - x), Math.abs(C) < .001 && (C = 0), i.roundLengths && (C = Math.floor(C)), P % i.slidesPerGroup == 0 && h.push(C), g.push(C)) : (i.roundLengths && (C = Math.floor(C)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup == 0 && h.push(C), g.push(C), C = C + k + x), e.virtualSize += k + x, M = k, P += 1;
        }
      }

      if (e.virtualSize = Math.max(e.virtualSize, a) + b, o && l && ("slide" === i.effect || "coverflow" === i.effect) && (r.style.width = "".concat(e.virtualSize + i.spaceBetween, "px")), i.setWrapperSize && (r.style[t("width")] = "".concat(e.virtualSize + i.spaceBetween, "px")), L && e.grid.updateWrapperSize(k, h, t), !i.centeredSlides) {
        var _t3 = [];

        for (var _s5 = 0; _s5 < h.length; _s5 += 1) {
          var _r5 = h[_s5];
          i.roundLengths && (_r5 = Math.floor(_r5)), h[_s5] <= e.virtualSize - a && _t3.push(_r5);
        }

        h = _t3, Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - a);
      }

      if (d && i.loop) {
        var _t4 = T[0] + x;

        if (i.slidesPerGroup > 1) {
          var _s6 = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup),
              _r6 = _t4 * i.slidesPerGroup;

          for (var _e3 = 0; _e3 < _s6; _e3 += 1) {
            h.push(h[h.length - 1] + _r6);
          }
        }

        for (var _s7 = 0; _s7 < e.virtual.slidesBefore + e.virtual.slidesAfter; _s7 += 1) {
          1 === i.slidesPerGroup && h.push(h[h.length - 1] + _t4), g.push(g[g.length - 1] + _t4), e.virtualSize += _t4;
        }
      }

      if (0 === h.length && (h = [0]), 0 !== i.spaceBetween) {
        var _s8 = e.isHorizontal() && o ? "marginLeft" : t("marginRight");

        p.filter(function (e, t) {
          return !(i.cssMode && !i.loop) || t !== p.length - 1;
        }).forEach(function (e) {
          e.style[_s8] = "".concat(x, "px");
        });
      }

      if (i.centeredSlides && i.centeredSlidesBounds) {
        var _e4 = 0;
        T.forEach(function (t) {
          _e4 += t + (i.spaceBetween ? i.spaceBetween : 0);
        }), _e4 -= i.spaceBetween;

        var _t5 = _e4 - a;

        h = h.map(function (e) {
          return e < 0 ? -S : e > _t5 ? _t5 + b : e;
        });
      }

      if (i.centerInsufficientSlides) {
        var _e5 = 0;

        if (T.forEach(function (t) {
          _e5 += t + (i.spaceBetween ? i.spaceBetween : 0);
        }), _e5 -= i.spaceBetween, _e5 < a) {
          var _t6 = (a - _e5) / 2;

          h.forEach(function (e, s) {
            h[s] = e - _t6;
          }), g.forEach(function (e, s) {
            g[s] = e + _t6;
          });
        }
      }

      if (Object.assign(e, {
        slides: p,
        snapGrid: h,
        slidesGrid: g,
        slidesSizesGrid: T
      }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        u(r, "--swiper-centered-offset-before", -h[0] + "px"), u(r, "--swiper-centered-offset-after", e.size / 2 - T[T.length - 1] / 2 + "px");

        var _t7 = -e.snapGrid[0],
            _s9 = -e.slidesGrid[0];

        e.snapGrid = e.snapGrid.map(function (e) {
          return e + _t7;
        }), e.slidesGrid = e.slidesGrid.map(function (e) {
          return e + _s9;
        });
      }

      if (m !== c && e.emit("slidesLengthChange"), h.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== E && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(d || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
        var _t8 = "".concat(i.containerModifierClass, "backface-hidden"),
            _s10 = e.el.classList.contains(_t8);

        m <= i.maxBackfaceHiddenSlides ? _s10 || e.el.classList.add(_t8) : _s10 && e.el.classList.remove(_t8);
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
      var r,
          n = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

      var a = function a(e) {
        return i ? t.slides.filter(function (t) {
          return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
        })[0] : t.slides[e];
      };

      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || []).forEach(function (e) {
          s.push(e);
        });else for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
          var _e6 = t.activeIndex + r;

          if (_e6 > t.slides.length && !i) break;
          s.push(a(_e6));
        }
      } else s.push(a(t.activeIndex));

      for (r = 0; r < s.length; r += 1) {
        if (void 0 !== s[r]) {
          var _e7 = s[r].offsetHeight;
          n = _e7 > n ? _e7 : n;
        }
      }

      (n || 0 === n) && (t.wrapperEl.style.height = "".concat(n, "px"));
    },
    updateSlidesOffset: function updateSlidesOffset() {
      var e = this,
          t = e.slides,
          s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;

      for (var _i4 = 0; _i4 < t.length; _i4 += 1) {
        t[_i4].swiperSlideOffset = (e.isHorizontal() ? t[_i4].offsetLeft : t[_i4].offsetTop) - s;
      }
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
          s = t.params,
          i = t.slides,
          r = t.rtlTranslate,
          n = t.snapGrid;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      var a = -e;
      r && (a = e), i.forEach(function (e) {
        e.classList.remove(s.slideVisibleClass);
      }), t.visibleSlidesIndexes = [], t.visibleSlides = [];

      for (var _e8 = 0; _e8 < i.length; _e8 += 1) {
        var _o3 = i[_e8];
        var _l3 = _o3.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (_l3 -= i[0].swiperSlideOffset);

        var _d2 = (a + (s.centeredSlides ? t.minTranslate() : 0) - _l3) / (_o3.swiperSlideSize + s.spaceBetween),
            _c = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - _l3) / (_o3.swiperSlideSize + s.spaceBetween),
            _p = -(a - _l3),
            _u = _p + t.slidesSizesGrid[_e8];

        (_p >= 0 && _p < t.size - 1 || _u > 1 && _u <= t.size || _p <= 0 && _u >= t.size) && (t.visibleSlides.push(_o3), t.visibleSlidesIndexes.push(_e8), i[_e8].classList.add(s.slideVisibleClass)), _o3.progress = r ? -_d2 : _d2, _o3.originalProgress = r ? -_c : _c;
      }
    },
    updateProgress: function updateProgress(e) {
      var t = this;

      if (void 0 === e) {
        var _s11 = t.rtlTranslate ? -1 : 1;

        e = t && t.translate && t.translate * _s11 || 0;
      }

      var s = t.params,
          i = t.maxTranslate() - t.minTranslate();
      var r = t.progress,
          n = t.isBeginning,
          a = t.isEnd,
          o = t.progressLoop;
      var l = n,
          d = a;
      if (0 === i) r = 0, n = !0, a = !0;else {
        r = (e - t.minTranslate()) / i;

        var _s12 = Math.abs(e - t.minTranslate()) < 1,
            _o4 = Math.abs(e - t.maxTranslate()) < 1;

        n = _s12 || r <= 0, a = _o4 || r >= 1, _s12 && (r = 0), _o4 && (r = 1);
      }

      if (s.loop) {
        var _s13 = g(t.slides.filter(function (e) {
          return "0" === e.getAttribute("data-swiper-slide-index");
        })[0]),
            _i5 = g(t.slides.filter(function (e) {
          return 1 * e.getAttribute("data-swiper-slide-index") == t.slides.length - 1;
        })[0]),
            _r7 = t.slidesGrid[_s13],
            _n4 = t.slidesGrid[_i5],
            _a3 = t.slidesGrid[t.slidesGrid.length - 1],
            _l4 = Math.abs(e);

        o = _l4 >= _r7 ? (_l4 - _r7) / _a3 : (_l4 + _a3 - _n4) / _a3, o > 1 && (o -= 1);
      }

      Object.assign(t, {
        progress: r,
        progressLoop: o,
        isBeginning: n,
        isEnd: a
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
          t = e.slides,
          s = e.params,
          i = e.slidesEl,
          r = e.activeIndex,
          n = e.virtual && s.virtual.enabled,
          a = function a(e) {
        return f(i, ".".concat(s.slideClass).concat(e, ", swiper-slide").concat(e))[0];
      };

      var o;

      if (t.forEach(function (e) {
        e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
      }), n) {
        if (s.loop) {
          var _t9 = r - e.virtual.slidesBefore;

          _t9 < 0 && (_t9 = e.virtual.slides.length + _t9), _t9 >= e.virtual.slides.length && (_t9 -= e.virtual.slides.length), o = a("[data-swiper-slide-index=\"".concat(_t9, "\"]"));
        } else o = a("[data-swiper-slide-index=\"".concat(r, "\"]"));
      } else o = t[r];

      if (o) {
        o.classList.add(s.slideActiveClass);

        var _e9 = function (e, t) {
          var s = [];

          for (; e.nextElementSibling;) {
            var _i7 = e.nextElementSibling;
            t ? _i7.matches(t) && s.push(_i7) : s.push(_i7), e = _i7;
          }

          return s;
        }(o, ".".concat(s.slideClass, ", swiper-slide"))[0];

        s.loop && !_e9 && (_e9 = t[0]), _e9 && _e9.classList.add(s.slideNextClass);

        var _i6 = function (e, t) {
          var s = [];

          for (; e.previousElementSibling;) {
            var _i8 = e.previousElementSibling;
            t ? _i8.matches(t) && s.push(_i8) : s.push(_i8), e = _i8;
          }

          return s;
        }(o, ".".concat(s.slideClass, ", swiper-slide"))[0];

        s.loop && 0 === !_i6 && (_i6 = t[t.length - 1]), _i6 && _i6.classList.add(s.slidePrevClass);
      }

      e.emitSlidesClasses();
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          i = t.snapGrid,
          r = t.params,
          n = t.activeIndex,
          a = t.realIndex,
          o = t.snapIndex;
      var l,
          d = e;

      var c = function c(e) {
        var s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
      };

      if (void 0 === d && (d = function (e) {
        var t = e.slidesGrid,
            s = e.params,
            i = e.rtlTranslate ? e.translate : -e.translate;
        var r;

        for (var _e10 = 0; _e10 < t.length; _e10 += 1) {
          void 0 !== t[_e10 + 1] ? i >= t[_e10] && i < t[_e10 + 1] - (t[_e10 + 1] - t[_e10]) / 2 ? r = _e10 : i >= t[_e10] && i < t[_e10 + 1] && (r = _e10 + 1) : i >= t[_e10] && (r = _e10);
        }

        return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r;
      }(t)), i.indexOf(s) >= 0) l = i.indexOf(s);else {
        var _e11 = Math.min(r.slidesPerGroupSkip, d);

        l = _e11 + Math.floor((d - _e11) / r.slidesPerGroup);
      }
      if (l >= i.length && (l = i.length - 1), d === n) return l !== o && (t.snapIndex = l, t.emit("snapIndexChange")), void (t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(d)));
      var p;
      p = t.virtual && r.virtual.enabled && r.loop ? c(d) : t.slides[d] ? parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : d, Object.assign(t, {
        snapIndex: l,
        realIndex: p,
        previousIndex: n,
        activeIndex: d
      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          s = t.params,
          i = e.closest(".".concat(s.slideClass, ", swiper-slide"));
      var r,
          n = !1;
      if (i) for (var _e12 = 0; _e12 < t.slides.length; _e12 += 1) {
        if (t.slides[_e12] === i) {
          n = !0, r = _e12;
          break;
        }
      }
      if (!i || !n) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = r, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var P = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
          s = this.rtlTranslate,
          i = this.translate,
          r = this.wrapperEl;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      var n = l(r, e);
      return s && (n = -n), n || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var s = this,
          i = s.rtlTranslate,
          r = s.params,
          n = s.wrapperEl,
          a = s.progress;
      var o,
          l = 0,
          d = 0;
      s.isHorizontal() ? l = i ? -e : e : d = e, r.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d : r.virtualTranslate || (n.style.transform = "translate3d(".concat(l, "px, ").concat(d, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d;
      var c = s.maxTranslate() - s.minTranslate();
      o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function translateTo(e, t, s, i, r) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
      var n = this,
          a = n.params,
          o = n.wrapperEl;
      if (n.animating && a.preventInteractionOnTransition) return !1;
      var l = n.minTranslate(),
          d = n.maxTranslate();
      var c;

      if (c = i && e > l ? l : i && e < d ? d : e, n.updateProgress(c), a.cssMode) {
        var _e13 = n.isHorizontal();

        if (0 === t) o[_e13 ? "scrollLeft" : "scrollTop"] = -c;else {
          var _o$scrollTo;

          if (!n.support.smoothScroll) return m({
            swiper: n,
            targetPosition: -c,
            side: _e13 ? "left" : "top"
          }), !0;
          o.scrollTo((_o$scrollTo = {}, _defineProperty(_o$scrollTo, _e13 ? "left" : "top", -c), _defineProperty(_o$scrollTo, "behavior", "smooth"), _o$scrollTo));
        }
        return !0;
      }

      return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"));
      }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
    }
  };

  function L(e) {
    var t = e.swiper,
        s = e.runCallbacks,
        i = e.direction,
        r = e.step;
    var n = t.activeIndex,
        a = t.previousIndex;
    var o = i;

    if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit("transition".concat(r)), s && n !== a) {
      if ("reset" === o) return void t.emit("slideResetTransition".concat(r));
      t.emit("slideChangeTransition".concat(r)), "next" === o ? t.emit("slideNextTransition".concat(r)) : t.emit("slidePrevTransition".concat(r));
    }
  }

  var k = {
    slideTo: function slideTo(e, t, s, i, r) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
      var n = this;
      var a = e;
      a < 0 && (a = 0);
      var o = n.params,
          l = n.snapGrid,
          d = n.slidesGrid,
          c = n.previousIndex,
          p = n.activeIndex,
          u = n.rtlTranslate,
          f = n.wrapperEl,
          h = n.enabled;
      if (n.animating && o.preventInteractionOnTransition || !h && !i && !r) return !1;
      var v = Math.min(n.params.slidesPerGroupSkip, a);
      var g = v + Math.floor((a - v) / n.params.slidesPerGroup);
      g >= l.length && (g = l.length - 1);
      var w = -l[g];
      if (o.normalizeSlideIndex) for (var _e14 = 0; _e14 < d.length; _e14 += 1) {
        var _t10 = -Math.floor(100 * w),
            _s14 = Math.floor(100 * d[_e14]),
            _i9 = Math.floor(100 * d[_e14 + 1]);

        void 0 !== d[_e14 + 1] ? _t10 >= _s14 && _t10 < _i9 - (_i9 - _s14) / 2 ? a = _e14 : _t10 >= _s14 && _t10 < _i9 && (a = _e14 + 1) : _t10 >= _s14 && (a = _e14);
      }

      if (n.initialized && a !== p) {
        if (!n.allowSlideNext && w < n.translate && w < n.minTranslate()) return !1;
        if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (p || 0) !== a) return !1;
      }

      var T;
      if (a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(w), T = a > p ? "next" : a < p ? "prev" : "reset", u && -w === n.translate || !u && w === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== T && (n.transitionStart(s, T), n.transitionEnd(s, T)), !1;

      if (o.cssMode) {
        var _e15 = n.isHorizontal(),
            _s15 = u ? w : -w;

        if (0 === t) {
          var _t11 = n.virtual && n.params.virtual.enabled;

          _t11 && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), _t11 && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(function () {
            f[_e15 ? "scrollLeft" : "scrollTop"] = _s15;
          })) : f[_e15 ? "scrollLeft" : "scrollTop"] = _s15, _t11 && requestAnimationFrame(function () {
            n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
          });
        } else {
          var _f$scrollTo;

          if (!n.support.smoothScroll) return m({
            swiper: n,
            targetPosition: _s15,
            side: _e15 ? "left" : "top"
          }), !0;
          f.scrollTo((_f$scrollTo = {}, _defineProperty(_f$scrollTo, _e15 ? "left" : "top", _s15), _defineProperty(_f$scrollTo, "behavior", "smooth"), _f$scrollTo));
        }

        return !0;
      }

      return n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, T), 0 === t ? n.transitionEnd(s, T) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, T));
      }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
    },
    slideToLoop: function slideToLoop(e, t, s, i) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
        e = parseInt(e, 10);
      }

      var r = this;
      var n = e;
      return r.params.loop && (r.virtual && r.params.virtual.enabled ? n += r.virtual.slidesBefore : n = g(r.slides.filter(function (e) {
        return 1 * e.getAttribute("data-swiper-slide-index") === n;
      })[0])), r.slideTo(n, t, s, i);
    },
    slideNext: function slideNext(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
          r = i.enabled,
          n = i.params,
          a = i.animating;
      if (!r) return i;
      var o = n.slidesPerGroup;
      "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      var l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
          d = i.virtual && n.virtual.enabled;

      if (n.loop) {
        if (a && !d && n.loopPreventsSliding) return !1;
        i.loopFix({
          direction: "next"
        }), i._clientLeft = i.wrapperEl.clientLeft;
      }

      return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s);
    },
    slidePrev: function slidePrev(e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
          r = i.params,
          n = i.snapGrid,
          a = i.slidesGrid,
          o = i.rtlTranslate,
          l = i.enabled,
          d = i.animating;
      if (!l) return i;
      var c = i.virtual && r.virtual.enabled;

      if (r.loop) {
        if (d && !c && r.loopPreventsSliding) return !1;
        i.loopFix({
          direction: "prev"
        }), i._clientLeft = i.wrapperEl.clientLeft;
      }

      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var u = p(o ? i.translate : -i.translate),
          m = n.map(function (e) {
        return p(e);
      });
      var f = n[m.indexOf(u) - 1];

      if (void 0 === f && r.cssMode) {
        var _e16;

        n.forEach(function (t, s) {
          u >= t && (_e16 = s);
        }), void 0 !== _e16 && (f = n[_e16 > 0 ? _e16 - 1 : _e16]);
      }

      var h = 0;

      if (void 0 !== f && (h = a.indexOf(f), h < 0 && (h = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), r.rewind && i.isBeginning) {
        var _r8 = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;

        return i.slideTo(_r8, e, t, s);
      }

      return i.slideTo(h, e, t, s);
    },
    slideReset: function slideReset(e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function slideToClosest(e, t, s, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
      var r = this;
      var n = r.activeIndex;
      var a = Math.min(r.params.slidesPerGroupSkip, n),
          o = a + Math.floor((n - a) / r.params.slidesPerGroup),
          l = r.rtlTranslate ? r.translate : -r.translate;

      if (l >= r.snapGrid[o]) {
        var _e17 = r.snapGrid[o];
        l - _e17 > (r.snapGrid[o + 1] - _e17) * i && (n += r.params.slidesPerGroup);
      } else {
        var _e18 = r.snapGrid[o - 1];
        l - _e18 <= (r.snapGrid[o] - _e18) * i && (n -= r.params.slidesPerGroup);
      }

      return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this,
          t = e.params,
          s = e.slidesEl,
          i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var r,
          n = e.clickedIndex;
      var o = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);

      if (t.loop) {
        if (e.animating) return;
        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = g(f(s, "".concat(o, "[data-swiper-slide-index=\"").concat(r, "\"]"))[0]), a(function () {
          e.slideTo(n);
        })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = g(f(s, "".concat(o, "[data-swiper-slide-index=\"").concat(r, "\"]"))[0]), a(function () {
          e.slideTo(n);
        })) : e.slideTo(n);
      } else e.slideTo(n);
    }
  };
  var O = {
    loopCreate: function loopCreate(e) {
      var t = this,
          s = t.params,
          i = t.slidesEl;
      if (!s.loop || t.virtual && t.params.virtual.enabled) return;
      f(i, ".".concat(s.slideClass, ", swiper-slide")).forEach(function (e, t) {
        e.setAttribute("data-swiper-slide-index", t);
      }), t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next"
      });
    },
    loopFix: function loopFix(e) {
      var _ref2 = void 0 === e ? {} : e,
          t = _ref2.slideRealIndex,
          _ref2$slideTo = _ref2.slideTo,
          s = _ref2$slideTo === void 0 ? !0 : _ref2$slideTo,
          i = _ref2.direction,
          r = _ref2.setTranslate,
          n = _ref2.activeSlideIndex,
          a = _ref2.byController;

      var o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      var l = o.slides,
          d = o.allowSlidePrev,
          c = o.allowSlideNext,
          p = o.slidesEl,
          u = o.params;
      if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && u.virtual.enabled) return s && (u.centeredSlides || 0 !== o.snapIndex ? u.centeredSlides && o.snapIndex < u.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = d, o.allowSlideNext = c, void o.emit("loopFix");
      var m = "auto" === u.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(u.slidesPerView, 10));
      var f = u.loopedSlides || m;
      f % u.slidesPerGroup != 0 && (f += u.slidesPerGroup - f % u.slidesPerGroup), o.loopedSlides = f;
      var h = [],
          v = [];
      var w = o.activeIndex;
      void 0 === n ? n = g(o.slides.filter(function (e) {
        return e.classList.contains("swiper-slide-active");
      })[0]) : w = n;
      var T = "next" === i || !i,
          S = "prev" === i || !i;
      var b = 0,
          y = 0;

      if (n < f) {
        b = f - n;

        for (var _e19 = 0; _e19 < f - n; _e19 += 1) {
          var _t12 = _e19 - Math.floor(_e19 / l.length) * l.length;

          h.push(l.length - _t12 - 1);
        }
      } else if (n > o.slides.length - 2 * f) {
        y = n - (o.slides.length - 2 * f);

        for (var _e20 = 0; _e20 < y; _e20 += 1) {
          var _t13 = _e20 - Math.floor(_e20 / l.length) * l.length;

          v.push(_t13);
        }
      }

      if (S && h.forEach(function (e) {
        p.prepend(o.slides[e]);
      }), T && v.forEach(function (e) {
        p.append(o.slides[e]);
      }), o.recalcSlides(), u.watchSlidesProgress && o.updateSlidesOffset(), s) if (h.length > 0 && S) {
        if (void 0 === t) {
          var _e21 = o.slidesGrid[w],
              _t14 = o.slidesGrid[w + b] - _e21;

          o.slideTo(w + b, 0, !1, !0), r && (o.touches[o.isHorizontal() ? "startX" : "startY"] += _t14);
        } else r && o.slideToLoop(t, 0, !1, !0);
      } else if (v.length > 0 && T) if (void 0 === t) {
        var _e22 = o.slidesGrid[w],
            _t15 = o.slidesGrid[w - y] - _e22;

        o.slideTo(w - y, 0, !1, !0), r && (o.touches[o.isHorizontal() ? "startX" : "startY"] += _t15);
      } else o.slideToLoop(t, 0, !1, !0);

      if (o.allowSlidePrev = d, o.allowSlideNext = c, o.controller && o.controller.control && !a) {
        var _e23 = {
          slideRealIndex: t,
          slideTo: !1,
          direction: i,
          setTranslate: r,
          activeSlideIndex: n,
          byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(function (t) {
          t.params.loop && t.loopFix(_e23);
        }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(_e23);
      }

      o.emit("loopFix");
    },
    loopDestroy: function loopDestroy() {
      var e = this,
          t = e.slides,
          s = e.params,
          i = e.slidesEl;
      if (!s.loop || e.virtual && e.params.virtual.enabled) return;
      e.recalcSlides();
      var r = [];
      t.forEach(function (e) {
        var t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        r[t] = e;
      }), t.forEach(function (e) {
        e.removeAttribute("data-swiper-slide-index");
      }), r.forEach(function (e) {
        i.append(e);
      }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
    }
  };

  function I(e) {
    var t = this,
        s = i(),
        r = n(),
        a = t.touchEventsData;
    a.evCache.push(e);
    var l = t.params,
        d = t.touches,
        c = t.enabled;
    if (!c) return;
    if (!l.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    var p = e;
    p.originalEvent && (p = p.originalEvent);
    var u = p.target;
    if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(u)) return;
    if ("which" in p && 3 === p.which) return;
    if ("button" in p && p.button > 0) return;
    if (a.isTouched && a.isMoved) return;
    var m = !!l.noSwipingClass && "" !== l.noSwipingClass,
        f = e.composedPath ? e.composedPath() : e.path;
    m && p.target && p.target.shadowRoot && f && (u = f[0]);
    var h = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
        v = !(!p.target || !p.target.shadowRoot);
    if (l.noSwiping && (v ? function (e, t) {
      return void 0 === t && (t = this), function t(s) {
        if (!s || s === i() || s === n()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        var r = s.closest(e);
        return r || s.getRootNode ? r || t(s.getRootNode().host) : null;
      }(t);
    }(h, u) : u.closest(h))) return void (t.allowClick = !0);
    if (l.swipeHandler && !u.closest(l.swipeHandler)) return;
    d.currentX = p.pageX, d.currentY = p.pageY;
    var g = d.currentX,
        w = d.currentY,
        T = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        S = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;

    if (T && (g <= S || g >= r.innerWidth - S)) {
      if ("prevent" !== T) return;
      e.preventDefault();
    }

    Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), d.startX = g, d.startY = w, a.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (a.allowThresholdMove = !1);
    var b = !0;
    u.matches(a.focusableElements) && (b = !1, "SELECT" === u.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== u && s.activeElement.blur();
    var y = b && t.allowTouchMove && l.touchStartPreventDefault;
    !l.touchStartForcePreventDefault && !y || u.isContentEditable || p.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
  }

  function z(e) {
    var t = i(),
        s = this,
        r = s.touchEventsData,
        n = s.params,
        a = s.touches,
        l = s.rtlTranslate,
        d = s.enabled;
    if (!d) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    var c = e;
    if (c.originalEvent && (c = c.originalEvent), !r.isTouched) return void (r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", c));
    var p = r.evCache.findIndex(function (e) {
      return e.pointerId === c.pointerId;
    });
    p >= 0 && (r.evCache[p] = c);
    var u = r.evCache.length > 1 ? r.evCache[0] : c,
        m = u.pageX,
        f = u.pageY;
    if (c.preventedByNestedSwiper) return a.startX = m, void (a.startY = f);
    if (!s.allowTouchMove) return c.target.matches(r.focusableElements) || (s.allowClick = !1), void (r.isTouched && (Object.assign(a, {
      startX: m,
      startY: f,
      prevX: s.touches.currentX,
      prevY: s.touches.currentY,
      currentX: m,
      currentY: f
    }), r.touchStartTime = o()));
    if (n.touchReleaseOnEdges && !n.loop) if (s.isVertical()) {
      if (f < a.startY && s.translate <= s.maxTranslate() || f > a.startY && s.translate >= s.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1);
    } else if (m < a.startX && s.translate <= s.maxTranslate() || m > a.startX && s.translate >= s.minTranslate()) return;
    if (t.activeElement && c.target === t.activeElement && c.target.matches(r.focusableElements)) return r.isMoved = !0, void (s.allowClick = !1);
    if (r.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    a.currentX = m, a.currentY = f;
    var h = a.currentX - a.startX,
        v = a.currentY - a.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(v, 2)) < s.params.threshold) return;

    if (void 0 === r.isScrolling) {
      var _e24;

      s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? r.isScrolling = !1 : h * h + v * v >= 25 && (_e24 = 180 * Math.atan2(Math.abs(v), Math.abs(h)) / Math.PI, r.isScrolling = s.isHorizontal() ? _e24 > n.touchAngle : 90 - _e24 > n.touchAngle);
    }

    if (r.isScrolling && s.emit("touchMoveOpposite", c), void 0 === r.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (r.startMoving = !0)), r.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && r.evCache.length > 1) return void (r.isTouched = !1);
    if (!r.startMoving) return;
    s.allowClick = !1, !n.cssMode && c.cancelable && c.preventDefault(), n.touchMoveStopPropagation && !n.nested && c.stopPropagation();
    var g = s.isHorizontal() ? h : v,
        w = s.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
    n.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), w = Math.abs(w) * (l ? 1 : -1)), a.diff = g, g *= n.touchRatio, l && (g = -g, w = -w);
    var T = s.touchesDirection;
    s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = w > 0 ? "prev" : "next";
    var S = s.params.loop && !(s.virtual && s.params.virtual.enabled) && !n.cssMode;

    if (!r.isMoved) {
      if (S && s.loopFix({
        direction: s.swipeDirection
      }), r.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
        var _e25 = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });

        s.wrapperEl.dispatchEvent(_e25);
      }

      r.allowMomentumBounce = !1, !n.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c);
    }

    var b;
    r.isMoved && T !== s.touchesDirection && S && Math.abs(g) >= 1 && (s.loopFix({
      direction: s.swipeDirection,
      setTranslate: !0
    }), b = !0), s.emit("sliderMove", c), r.isMoved = !0, r.currentTranslate = g + r.startTranslate;
    var y = !0,
        E = n.resistanceRatio;

    if (n.touchReleaseOnEdges && (E = 0), g > 0 ? (S && !b && r.currentTranslate > (n.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), r.currentTranslate > s.minTranslate() && (y = !1, n.resistance && (r.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + r.startTranslate + g, E)))) : g < 0 && (S && !b && r.currentTranslate < (n.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: s.slides.length - ("auto" === n.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }), r.currentTranslate < s.maxTranslate() && (y = !1, n.resistance && (r.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - r.startTranslate - g, E)))), y && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), n.threshold > 0) {
      if (!(Math.abs(g) > n.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
      if (!r.allowThresholdMove) return r.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, r.currentTranslate = r.startTranslate, void (a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
    }

    n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate));
  }

  function A(e) {
    var t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex(function (t) {
      return t.pointerId === e.pointerId;
    });
    if (i >= 0 && s.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) return;
    var r = t.params,
        n = t.touches,
        l = t.rtlTranslate,
        d = t.slidesGrid,
        c = t.enabled;
    if (!c) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    var p = e;
    if (p.originalEvent && (p = p.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", p), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var u = o(),
        m = u - s.touchStartTime;

    if (t.allowClick) {
      var _e26 = p.path || p.composedPath && p.composedPath();

      t.updateClickedSlide(_e26 && _e26[0] || p.target), t.emit("tap click", p), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", p);
    }

    if (s.lastClickTime = o(), a(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var f;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, f = r.followFinger ? l ? t.translate : -t.translate : -s.currentTranslate, r.cssMode) return;
    if (t.params.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: f
    });
    var h = 0,
        v = t.slidesSizesGrid[0];

    for (var _e27 = 0; _e27 < d.length; _e27 += _e27 < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
      var _t16 = _e27 < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;

      void 0 !== d[_e27 + _t16] ? f >= d[_e27] && f < d[_e27 + _t16] && (h = _e27, v = d[_e27 + _t16] - d[_e27]) : f >= d[_e27] && (h = _e27, v = d[d.length - 1] - d[d.length - 2]);
    }

    var g = null,
        w = null;
    r.rewind && (t.isBeginning ? w = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
    var T = (f - d[h]) / v,
        S = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;

    if (m > r.longSwipesMs) {
      if (!r.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (T >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? g : h + S) : t.slideTo(h)), "prev" === t.swipeDirection && (T > 1 - r.longSwipesRatio ? t.slideTo(h + S) : null !== w && T < 0 && Math.abs(T) > r.longSwipesRatio ? t.slideTo(w) : t.slideTo(h));
    } else {
      if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl) ? p.target === t.navigation.nextEl ? t.slideTo(h + S) : t.slideTo(h) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + S), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h));
    }
  }

  var G;

  function D() {
    var e = this,
        t = e.params,
        s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var i = e.allowSlideNext,
        r = e.allowSlidePrev,
        n = e.snapGrid,
        a = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    var o = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(G), G = setTimeout(function () {
      e.autoplay.resume();
    }, 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
  }

  function B(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function _() {
    var e = this,
        t = e.wrapperEl,
        s = e.rtlTranslate,
        i = e.enabled;
    if (!i) return;
    var r;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var n = e.maxTranslate() - e.minTranslate();
    r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }

  var N = function N(e, t) {
    var s = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));

    if (s) {
      var _t17 = s.querySelector(".".concat(e.params.lazyPreloaderClass));

      _t17 && _t17.remove();
    }
  };

  function F(e) {
    N(this, e.target), this.update();
  }

  var V = !1;

  function $() {}

  var H = function H(e, t) {
    var s = i(),
        r = e.params,
        n = e.el,
        a = e.wrapperEl,
        o = e.device,
        l = !!r.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
    n[d]("pointerdown", e.onTouchStart, {
      passive: !1
    }), s[d]("pointermove", e.onTouchMove, {
      passive: !1,
      capture: l
    }), s[d]("pointerup", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointercancel", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerout", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerleave", e.onTouchEnd, {
      passive: !0
    }), (r.preventClicks || r.preventClicksPropagation) && n[d]("click", e.onClick, !0), r.cssMode && a[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", D, !0) : e[c]("observerUpdate", D, !0), n[d]("load", e.onLoad, {
      capture: !0
    });
  };

  var j = function j(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  };

  var R = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function W(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      var i = Object.keys(s)[0],
          r = s[i];
      "object" == _typeof(r) && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
        auto: !0
      }), i in e && "enabled" in r ? (!0 === e[i] && (e[i] = {
        enabled: !0
      }), "object" != _typeof(e[i]) || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
        enabled: !1
      }), p(t, s)) : p(t, s)) : p(t, s);
    };
  }

  var X = {
    eventsEmitter: C,
    update: M,
    translate: P,
    transition: {
      setTransition: function setTransition(e, t) {
        var s = this;
        s.params.cssMode || (s.wrapperEl.style.transitionDuration = "".concat(e, "ms")), s.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var s = this,
            i = s.params;
        i.cssMode || (i.autoHeight && s.updateAutoHeight(), L({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }));
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var s = this,
            i = s.params;
        s.animating = !1, i.cssMode || (s.setTransition(0), L({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "End"
        }));
      }
    },
    slide: k,
    loop: O,
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;
        if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
        var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab";
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = i(),
            s = e.params;
        e.onTouchStart = I.bind(e), e.onTouchMove = z.bind(e), e.onTouchEnd = A.bind(e), s.cssMode && (e.onScroll = _.bind(e)), e.onClick = B.bind(e), e.onLoad = F.bind(e), V || (t.addEventListener("touchstart", $), V = !0), H(e, "on");
      },
      detachEvents: function detachEvents() {
        H(this, "off");
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.realIndex,
            s = e.initialized,
            i = e.params,
            r = e.el,
            n = i.breakpoints;
        if (!n || n && 0 === Object.keys(n).length) return;
        var a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        var o = (a in n ? n[a] : void 0) || e.originalParams,
            l = j(e, i),
            d = j(e, o),
            c = i.enabled;
        l && !d ? (r.classList.remove("".concat(i.containerModifierClass, "grid"), "".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !l && d && (r.classList.add("".concat(i.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.classList.add("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(function (t) {
          var s = i[t] && i[t].enabled,
              r = o[t] && o[t].enabled;
          s && !r && e[t].disable(), !s && r && e[t].enable();
        });
        var u = o.direction && o.direction !== i.direction,
            m = i.loop && (o.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), p(e.params, o);
        var f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), c && !f ? e.disable() : !c && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", o), m && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o);
      },
      getBreakpoint: function getBreakpoint(e, t, s) {
        if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
        var i = !1;
        var r = n(),
            a = "window" === t ? r.innerHeight : s.clientHeight,
            o = Object.keys(e).map(function (e) {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            var _t18 = parseFloat(e.substr(1));

            return {
              value: a * _t18,
              point: e
            };
          }

          return {
            value: e,
            point: e
          };
        });
        o.sort(function (e, t) {
          return parseInt(e.value, 10) - parseInt(t.value, 10);
        });

        for (var _e28 = 0; _e28 < o.length; _e28 += 1) {
          var _o$_e = o[_e28],
              _n5 = _o$_e.point,
              _a4 = _o$_e.value;
          "window" === t ? r.matchMedia("(min-width: ".concat(_a4, "px)")).matches && (i = _n5) : _a4 <= s.clientWidth && (i = _n5);
        }

        return i || "max";
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked,
            s = e.params,
            i = s.slidesOffsetBefore;

        if (i) {
          var _t19 = e.slides.length - 1,
              _s16 = e.slidesGrid[_t19] + e.slidesSizesGrid[_t19] + 2 * i;

          e.isLocked = e.size > _s16;
        } else e.isLocked = 1 === e.snapGrid.length;

        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      }
    },
    classes: {
      addClasses: function addClasses() {
        var _r$classList;

        var e = this,
            t = e.classNames,
            s = e.params,
            i = e.rtl,
            r = e.el,
            n = e.device,
            a = function (e, t) {
          var s = [];
          return e.forEach(function (e) {
            "object" == _typeof(e) ? Object.keys(e).forEach(function (i) {
              e[i] && s.push(t + i);
            }) : "string" == typeof e && s.push(t + e);
          }), s;
        }(["initialized", s.direction, {
          "free-mode": e.params.freeMode && s.freeMode.enabled
        }, {
          autoheight: s.autoHeight
        }, {
          rtl: i
        }, {
          grid: s.grid && s.grid.rows > 1
        }, {
          "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
        }, {
          android: n.android
        }, {
          ios: n.ios
        }, {
          "css-mode": s.cssMode
        }, {
          centered: s.cssMode && s.centeredSlides
        }, {
          "watch-progress": s.watchSlidesProgress
        }], s.containerModifierClass);

        t.push.apply(t, _toConsumableArray(a)), (_r$classList = r.classList).add.apply(_r$classList, _toConsumableArray(t)), e.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var _e$classList;

        var e = this.el,
            t = this.classNames;
        (_e$classList = e.classList).remove.apply(_e$classList, _toConsumableArray(t)), this.emitContainerClasses();
      }
    }
  },
      Y = {};

  var q = /*#__PURE__*/function () {
    function q() {
      var _r9, _r10, _l$modules;

      _classCallCheck(this, q);

      var e, t;

      for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
        r[n] = arguments[n];
      }

      1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : (_r9 = r, _r10 = _slicedToArray(_r9, 2), e = _r10[0], t = _r10[1], _r9), t || (t = {}), t = p({}, t), e && !t.el && (t.el = e);
      var a = i();

      if (t.el && "string" == typeof t.el && a.querySelectorAll(t.el).length > 1) {
        var _e29 = [];
        return a.querySelectorAll(t.el).forEach(function (s) {
          var i = p({}, t, {
            el: s
          });

          _e29.push(new q(i));
        }), _e29;
      }

      var l = this;
      l.__swiper__ = !0, l.support = y(), l.device = E({
        userAgent: t.userAgent
      }), l.browser = x(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = _toConsumableArray(l.__modules__), t.modules && Array.isArray(t.modules) && (_l$modules = l.modules).push.apply(_l$modules, _toConsumableArray(t.modules));
      var d = {};
      l.modules.forEach(function (e) {
        e({
          params: t,
          swiper: l,
          extendParams: W(t, d),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l)
        });
      });
      var c = p({}, R, d);
      return l.params = p({}, c, Y, t), l.originalParams = p({}, l.params), l.passedParams = p({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(function (e) {
        l.on(e, l.params.on[e]);
      }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === l.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === l.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: o(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: []
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), l.emit("_swiper"), l.params.init && l.init(), l;
    }

    _createClass(q, [{
      key: "recalcSlides",
      value: function recalcSlides() {
        var e = this.slidesEl,
            t = this.params;
        this.slides = f(e, ".".concat(t.slideClass, ", swiper-slide"));
      }
    }, {
      key: "enable",
      value: function enable() {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        var s = this;
        e = Math.min(Math.max(e, 0), 1);
        var i = s.minTranslate(),
            r = (s.maxTranslate() - i) * e + i;
        s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.forEach(function (s) {
          var i = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: i
          }), e.emit("_slideClass", s, i);
        }), e.emit("_slideClasses", t);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        var s = this.params,
            i = this.slides,
            r = this.slidesGrid,
            n = this.slidesSizesGrid,
            a = this.size,
            o = this.activeIndex;
        var l = 1;

        if (s.centeredSlides) {
          var _e30,
              _t20 = i[o].swiperSlideSize;

          for (var _s17 = o + 1; _s17 < i.length; _s17 += 1) {
            i[_s17] && !_e30 && (_t20 += i[_s17].swiperSlideSize, l += 1, _t20 > a && (_e30 = !0));
          }

          for (var _s18 = o - 1; _s18 >= 0; _s18 -= 1) {
            i[_s18] && !_e30 && (_t20 += i[_s18].swiperSlideSize, l += 1, _t20 > a && (_e30 = !0));
          }
        } else if ("current" === e) for (var _e31 = o + 1; _e31 < i.length; _e31 += 1) {
          (t ? r[_e31] + n[_e31] - r[o] < a : r[_e31] - r[o] < a) && (l += 1);
        } else for (var _e32 = o - 1; _e32 >= 0; _e32 -= 1) {
          r[o] - r[_e32] < a && (l += 1);
        }

        return l;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
            s = e.params;

        function i() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        var r;
        s.breakpoints && e.setBreakpoint(), _toConsumableArray(e.el.querySelectorAll('[loading="lazy"]')).forEach(function (t) {
          t.complete && N(e, t);
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (r = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), r || i()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e, t) {
        void 0 === t && (t = !0);
        var s = this,
            i = s.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove("".concat(s.params.containerModifierClass).concat(i)), s.el.classList.add("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }
    }, {
      key: "changeLanguageDirection",
      value: function changeLanguageDirection(e) {
        var t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update());
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var s = e || t.params.el;
        if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
        s.swiper = t, s.shadowEl && (t.isElement = !0);

        var i = function i() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };

        var r = function () {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }

          return f(s, i())[0];
        }();

        return !r && t.params.createElements && (r = h("div", t.params.wrapperClass), s.append(r), f(s, ".".concat(t.params.slideClass)).forEach(function (e) {
          r.append(e);
        })), Object.assign(t, {
          el: s,
          wrapperEl: r,
          slidesEl: t.isElement ? s : r,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")),
          wrongRTL: "-webkit-box" === v(r, "display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        if (t.initialized) return t;
        return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), _toConsumableArray(t.el.querySelectorAll('[loading="lazy"]')).forEach(function (e) {
          e.complete ? N(t, e) : e.addEventListener("load", function (e) {
            N(t, e.target);
          });
        }), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }
    }, {
      key: "destroy",
      value: function destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var s = this,
            i = s.params,
            r = s.el,
            n = s.wrapperEl,
            a = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttribute("style"), n.removeAttribute("style"), a && a.length && a.forEach(function (e) {
          e.classList.remove(i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.el.swiper = null, function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}

            try {
              delete t[e];
            } catch (e) {}
          });
        }(s)), s.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        p(Y, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return Y;
      }
    }, {
      key: "defaults",
      get: function get() {
        return R;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        q.prototype.__modules__ || (q.prototype.__modules__ = []);
        var t = q.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return q.installModule(e);
        }), q) : (q.installModule(e), q);
      }
    }]);

    return q;
  }();

  Object.keys(X).forEach(function (e) {
    Object.keys(X[e]).forEach(function (t) {
      q.prototype[t] = X[e][t];
    });
  }), q.use([function (e) {
    var t = e.swiper,
        s = e.on,
        i = e.emit;
    var r = n();
    var a = null,
        o = null;

    var l = function l() {
      t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
    },
        d = function d() {
      t && !t.destroyed && t.initialized && i("orientationchange");
    };

    s("init", function () {
      t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver(function (e) {
        o = r.requestAnimationFrame(function () {
          var s = t.width,
              i = t.height;
          var r = s,
              n = i;
          e.forEach(function (e) {
            var s = e.contentBoxSize,
                i = e.contentRect,
                a = e.target;
            a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize);
          }), r === s && n === i || l();
        });
      }), a.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", d));
    }), s("destroy", function () {
      o && r.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", d);
    });
  }, function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.on,
        r = e.emit;

    var a = [],
        o = n(),
        l = function l(e, t) {
      void 0 === t && (t = {});
      var s = new (o.MutationObserver || o.WebkitMutationObserver)(function (e) {
        if (1 === e.length) return void r("observerUpdate", e[0]);

        var t = function t() {
          r("observerUpdate", e[0]);
        };

        o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), a.push(s);
    };

    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), i("init", function () {
      if (t.params.observer) {
        if (t.params.observeParents) {
          var _e33 = function (e, t) {
            var s = [];
            var i = e.parentElement;

            for (; i;) {
              t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
            }

            return s;
          }(t.el);

          for (var _t21 = 0; _t21 < _e33.length; _t21 += 1) {
            l(_e33[_t21]);
          }
        }

        l(t.el, {
          childList: t.params.observeSlideChildren
        }), l(t.wrapperEl, {
          attributes: !1
        });
      }
    }), i("destroy", function () {
      a.forEach(function (e) {
        e.disconnect();
      }), a.splice(0, a.length);
    });
  }]);
  var U = [function (e) {
    var t = e.swiper,
        s = e.extendParams,
        i = e.on,
        r = e.emit;
    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), t.navigation = {
      nextEl: null,
      prevEl: null
    };

    var n = function n(e) {
      return Array.isArray(e) || (e = [e].filter(function (e) {
        return !!e;
      })), e;
    };

    function a(e) {
      var s;
      return e && "string" == typeof e && t.isElement && (s = t.el.shadowRoot.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = _toConsumableArray(document.querySelectorAll(e))), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s);
    }

    function o(e, s) {
      var i = t.params.navigation;
      (e = n(e)).forEach(function (e) {
        e && (e.classList[s ? "add" : "remove"](i.disabledClass), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
      });
    }

    function l() {
      var _t$navigation = t.navigation,
          e = _t$navigation.nextEl,
          s = _t$navigation.prevEl;
      if (t.params.loop) return o(s, !1), void o(e, !1);
      o(s, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind);
    }

    function d(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r("navigationPrev"));
    }

    function c(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r("navigationNext"));
    }

    function p() {
      var e = t.params.navigation;
      if (t.params.navigation = function (e, t, s, i) {
        return e.params.createElements && Object.keys(i).forEach(function (r) {
          if (!s[r] && !0 === s.auto) {
            var _n6 = f(e.el, ".".concat(i[r]))[0];
            _n6 || (_n6 = h("div", i[r]), _n6.className = i[r], e.el.append(_n6)), s[r] = _n6, t[r] = _n6;
          }
        }), s;
      }(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !e.nextEl && !e.prevEl) return;
      var s = a(e.nextEl),
          i = a(e.prevEl);
      Object.assign(t.navigation, {
        nextEl: s,
        prevEl: i
      }), s = n(s), i = n(i);

      var r = function r(s, i) {
        s && s.addEventListener("click", "next" === i ? c : d), !t.enabled && s && s.classList.add(e.lockClass);
      };

      s.forEach(function (e) {
        return r(e, "next");
      }), i.forEach(function (e) {
        return r(e, "prev");
      });
    }

    function u() {
      var _t$navigation2 = t.navigation,
          e = _t$navigation2.nextEl,
          s = _t$navigation2.prevEl;
      e = n(e), s = n(s);

      var i = function i(e, s) {
        e.removeEventListener("click", "next" === s ? c : d), e.classList.remove(t.params.navigation.disabledClass);
      };

      e.forEach(function (e) {
        return i(e, "next");
      }), s.forEach(function (e) {
        return i(e, "prev");
      });
    }

    i("init", function () {
      !1 === t.params.navigation.enabled ? m() : (p(), l());
    }), i("toEdge fromEdge lock unlock", function () {
      l();
    }), i("destroy", function () {
      u();
    }), i("enable disable", function () {
      var _t$navigation3 = t.navigation,
          e = _t$navigation3.nextEl,
          s = _t$navigation3.prevEl;
      e = n(e), s = n(s), [].concat(_toConsumableArray(e), _toConsumableArray(s)).filter(function (e) {
        return !!e;
      }).forEach(function (e) {
        return e.classList[t.enabled ? "remove" : "add"](t.params.navigation.lockClass);
      });
    }), i("click", function (e, s) {
      var _t$navigation4 = t.navigation,
          i = _t$navigation4.nextEl,
          a = _t$navigation4.prevEl;
      i = n(i), a = n(a);
      var o = s.target;

      if (t.params.navigation.hideOnClick && !a.includes(o) && !i.includes(o)) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;

        var _e34;

        i.length ? _e34 = i[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (_e34 = a[0].classList.contains(t.params.navigation.hiddenClass)), r(!0 === _e34 ? "navigationShow" : "navigationHide"), [].concat(_toConsumableArray(i), _toConsumableArray(a)).filter(function (e) {
          return !!e;
        }).forEach(function (e) {
          return e.classList.toggle(t.params.navigation.hiddenClass);
        });
      }
    });

    var m = function m() {
      t.el.classList.add(t.params.navigation.navigationDisabledClass), u();
    };

    Object.assign(t.navigation, {
      enable: function enable() {
        t.el.classList.remove(t.params.navigation.navigationDisabledClass), p(), l();
      },
      disable: m,
      update: l,
      init: p,
      destroy: u
    });
  }, function (e) {
    var t,
        s,
        r = e.swiper,
        n = e.extendParams,
        a = e.on,
        o = e.emit,
        l = e.params;
    r.autoplay = {
      running: !1,
      paused: !1,
      timeLeft: 0
    }, n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
    var d,
        c,
        p,
        u,
        m,
        f,
        h,
        v = l && l.autoplay ? l.autoplay.delay : 3e3,
        g = l && l.autoplay ? l.autoplay.delay : 3e3,
        w = new Date().getTime;

    function T(e) {
      r && !r.destroyed && r.wrapperEl && e.target === r.wrapperEl && (r.wrapperEl.removeEventListener("transitionend", T), C());
    }

    var S = function S() {
      if (r.destroyed || !r.autoplay.running) return;
      r.autoplay.paused ? c = !0 : c && (g = d, c = !1);
      var e = r.autoplay.paused ? d : w + g - new Date().getTime();
      r.autoplay.timeLeft = e, o("autoplayTimeLeft", e, e / v), s = requestAnimationFrame(function () {
        S();
      });
    },
        b = function b(e) {
      if (r.destroyed || !r.autoplay.running) return;
      cancelAnimationFrame(s), S();
      var i = void 0 === e ? r.params.autoplay.delay : e;
      v = r.params.autoplay.delay, g = r.params.autoplay.delay;

      var n = function () {
        var e;
        if (e = r.virtual && r.params.virtual.enabled ? r.slides.filter(function (e) {
          return e.classList.contains("swiper-slide-active");
        })[0] : r.slides[r.activeIndex], !e) return;
        return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
      }();

      !Number.isNaN(n) && n > 0 && void 0 === e && (i = n, v = n, g = n), d = i;

      var a = r.params.speed,
          l = function l() {
        r.params.autoplay.reverseDirection ? !r.isBeginning || r.params.loop || r.params.rewind ? (r.slidePrev(a, !0, !0), o("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(r.slides.length - 1, a, !0, !0), o("autoplay")) : !r.isEnd || r.params.loop || r.params.rewind ? (r.slideNext(a, !0, !0), o("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(0, a, !0, !0), o("autoplay")), r.params.cssMode && (w = new Date().getTime(), requestAnimationFrame(function () {
          b();
        }));
      };

      return i > 0 ? (clearTimeout(t), t = setTimeout(function () {
        l();
      }, i)) : requestAnimationFrame(function () {
        l();
      }), i;
    },
        y = function y() {
      r.autoplay.running = !0, b(), o("autoplayStart");
    },
        E = function E() {
      r.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), o("autoplayStop");
    },
        x = function x(e, s) {
      if (r.destroyed || !r.autoplay.running) return;
      clearTimeout(t), e || (h = !0);

      var i = function i() {
        o("autoplayPause"), r.params.autoplay.waitForTransition ? r.wrapperEl.addEventListener("transitionend", T) : C();
      };

      if (r.autoplay.paused = !0, s) return f && (d = r.params.autoplay.delay), f = !1, void i();
      var n = d || r.params.autoplay.delay;
      d = n - (new Date().getTime() - w), r.isEnd && d < 0 && !r.params.loop || (d < 0 && (d = 0), i());
    },
        C = function C() {
      r.isEnd && d < 0 && !r.params.loop || r.destroyed || !r.autoplay.running || (w = new Date().getTime(), h ? (h = !1, b(d)) : b(), r.autoplay.paused = !1, o("autoplayResume"));
    },
        M = function M() {
      if (r.destroyed || !r.autoplay.running) return;
      var e = i();
      "hidden" === e.visibilityState && (h = !0, x(!0)), "visible" === e.visibilityState && C();
    },
        P = function P(e) {
      "mouse" === e.pointerType && (h = !0, x(!0));
    },
        L = function L(e) {
      "mouse" === e.pointerType && r.autoplay.paused && C();
    };

    a("init", function () {
      r.params.autoplay.enabled && (r.params.autoplay.pauseOnMouseEnter && (r.el.addEventListener("pointerenter", P), r.el.addEventListener("pointerleave", L)), i().addEventListener("visibilitychange", M), w = new Date().getTime(), y());
    }), a("destroy", function () {
      r.el.removeEventListener("pointerenter", P), r.el.removeEventListener("pointerleave", L), i().removeEventListener("visibilitychange", M), r.autoplay.running && E();
    }), a("beforeTransitionStart", function (e, t, s) {
      !r.destroyed && r.autoplay.running && (s || !r.params.autoplay.disableOnInteraction ? x(!0, !0) : E());
    }), a("sliderFirstMove", function () {
      !r.destroyed && r.autoplay.running && (r.params.autoplay.disableOnInteraction ? E() : (p = !0, u = !1, h = !1, m = setTimeout(function () {
        h = !0, u = !0, x(!0);
      }, 200)));
    }), a("touchEnd", function () {
      if (!r.destroyed && r.autoplay.running && p) {
        if (clearTimeout(m), clearTimeout(t), r.params.autoplay.disableOnInteraction) return u = !1, void (p = !1);
        u && r.params.cssMode && C(), u = !1, p = !1;
      }
    }), a("slideChange", function () {
      !r.destroyed && r.autoplay.running && (f = !0);
    }), Object.assign(r.autoplay, {
      start: y,
      stop: E,
      pause: x,
      resume: C
    });
  }];
  return q.use(U), q;
});

/***/ })

}]);
//# sourceMappingURL=5551.78a30b99d6880b1c0bbe.chunk.js.mapEje.attr("transform","translate(0,"+i+")")):(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oRango.range([i,0]),n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oEje.scale(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oRango),n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.oEjeHorizontal.scale(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oRango),n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje.call(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oEje),u=Responsive.fGetAnchoEjeUnidad1(n)));r.bAlMenosUnaMetricaDelEje2&&(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oRango.range([i,0]),n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oEje.scale(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oRango),r.bAlMenosUnaMetricaDelEje1||n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.oEjeHorizontal.scale(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oRango),n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.domEje.transition().call(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oEje),n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.domEje.attr("transform","translate("+t+",0)"));n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.oRango.rangePoints([0,t]);n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.oEjeHorizontal.tickSize(t);n.iDuracionAnimacion>0?n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.domEjeHorizontal.transition().duration(n.iDuracionAnimacion).call(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.oEjeHorizontal):n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.domEjeHorizontal.call(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.oEjeHorizontal);n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.oEjeVertical.tickSize(-i);n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.domEjeVertical.attr("transform","translate(0,"+i+")");n.iDuracionAnimacion>0?n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.domEjeVertical.transition().duration(n.iDuracionAnimacion).call(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.oEjeVertical):n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.domEjeVertical.call(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeCuadricula.oEjeVertical);n.oGrafica.oSvg.oPuntoDeMira.domPuntoDeMira.attr("width",t).attr("height",i);n.oGrafica.oSvg.oPuntoDeMira.domContenedorPuntoDeMira.attr("width",t).attr("height",i);v&&(f=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oRango(0),n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.bEstaEjeUnidadVisible===!1&&(f=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oRango(0)),e=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEje[0][0].cloneNode(!0),n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeCero=e,$(n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEje[0][0]).parent().append(e),n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeCero.setAttribute("transform","translate(0,"+f+")"));n.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.BarrasHorizontales?(h=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeVisible.node().getBoundingClientRect().width,n.oGrafica.oSvg.oCanvas.domCanvas.attr("transform","translate("+h+", "+Responsive.fGetSobresaleTextoEjeUnidadPorEncimaDeContenidoGrafica(n)+")")):n.oGrafica.oSvg.oCanvas.domCanvas.attr("transform","translate("+u+", "+Responsive.fGetSobresaleTextoEjeUnidadPorEncimaDeContenidoGrafica(n)+")")}Responsive.fDibujarMetricas(n,n.iDuracionAnimacion>0)},fGetAnchoContenidoGrafica:function(n){var u=Helper.fGetAlMenosUnaMetrica(n),t=0,i,r;return u.bAlMenosUnaMetricaDelEje1&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje!==null&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje!==undefined&&(t+=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje.node().getBBox().width),i=0,n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeVisible!==null&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeVisible!==undefined&&(r=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeVisible.selectAll("g.tick")[0],i=r[r.length-1].getBoundingClientRect().width),u.bAlMenosUnaMetricaDelEje2&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.domEje!==null&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.domEje!==undefined?t+=Math.max(i,n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.domEje.node().getBBox().width):n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeVisible!==null&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeVisible!==undefined&&(t+=i),n.oGrafica.oSvg.iAncho-t},fGetAltoContenidoGrafica:function(n){var t=0;return n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeVisible!==null&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeVisible!==undefined&&(t+=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.domEjeVisible.node().getBoundingClientRect().height),t+=Responsive.fGetSobresaleTextoEjeUnidadPorEncimaDeContenidoGrafica(n),n.oGrafica.oSvg.iAlto-t},fSetDimensionesSvg:function(n){var t=n.oGrafica.oSvg.oTitulo.domContenedorTitulo.node().getBoundingClientRect().height,i=n.oGrafica.oSvg.oNombresEscalas.domContenedor.node().getBoundingClientRect().height,r=n.oGrafica.oSvg.oLeyenda.domContenedorLeyendas.node().getBoundingClientRect().height;n.oGrafica.oSvg.iAncho=n.iAncho-n.oMargen.left-n.oMargen.right-2;n.oGrafica.oSvg.iAlto=n.iAlto-t-i-r-n.oMargen.top-n.oMargen.bottom-2;n.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.Tabla?n.oGrafica.oSvg.domContenedor.select("#table_"+n.iNumeroInstanciaGestionGrafica+" .container-table-sticky").attr("style","width: "+n.oGrafica.oSvg.iAncho+"px; height: "+n.oGrafica.oSvg.iAlto+"px;"):n.oGrafica.oSvg.domSvg.attr("width",n.oGrafica.oSvg.iAncho).attr("height",n.oGrafica.oSvg.iAlto)},fEliminarNoNumerico:function(n){var r,t,i;if(!n.oGrafica.aMetricas[sId].SonDatosNumericos&&n.oGrafica.oNoNumericos[sId]!==undefined&&n.oGrafica.oNoNumericos[sId]!==null){for(i=0;i<n.oGrafica.aMetricas[sId].oMetrica.Datos.length;i++)r=n.oGrafica.aMetricas[sId].oMetrica.Datos[i],t=r.ValorEjeComunInicio+"-"+r.ValorEjeComunFin,n.oGrafica.oNoNumericos[sId]!==undefined&&n.oGrafica.oNoNumericos[sId]!==null&&n.oGrafica.oNoNumericos[sId][t]!==undefined&&n.oGrafica.oNoNumericos[sId][t]!==null&&n.oGrafica.oNoNumericos[sId][t].domRectangulo!==undefined&&n.oGrafica.oNoNumericos[sId][t].domRectangulo!==null&&n.oGrafica.oNoNumericos[sId][t].domRectangulo.remove(),n.oGrafica.aGradientes[sId]!==undefined&&n.oGrafica.aGradientes[sId]!==null&&n.oGrafica.aGradientes[sId][t]!==undefined&&n.oGrafica.aGradientes[sId][t]!==null&&n.oGrafica.aGradientes[sId][t].domGradiente!==undefined&&n.oGrafica.aGradientes[sId][t].domGradiente!==null&&n.oGrafica.aGradientes[sId][t].domGradiente.remove(),n.oGrafica.oNoNumericos[sId][t]=null;n.oGrafica.oNoNumericos[sId]=null}},fCargarDatosNoNumericos:function(n){var i,p,u,o,s,f,h,r,t,e,c,a,v,l,y,w;for(i in n.oGrafica.aMetricas)if(!n.oGrafica.aMetricas[i].bOculta&&!n.oGrafica.aMetricas[i].SonDatosNumericos)for(Responsive.fEliminarNoNumerico(n,i),p=Responsive.fGetAltoContenidoGrafica(n),n.oGrafica.oNoNumericos[i]={},r=null,n.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.Barras&&(r=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango.domain()),l=0,n.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.Barras&&(l=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango.rangeBand()/2),y=0;y<n.oGrafica.aMetricas[i].oMetrica.Datos.length;y++){if(u=n.oGrafica.aMetricas[i].oMetrica.Datos[y],o=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango(u.ValorEjeComunInicio),s=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango(u.ValorEjeComunFin),h=!0,o===undefined)if(isNaN(u.ValorEjeComunInicio))h=!1;else{for(t=0,e=!1;t<r.length&&!e;)r[t]>parseFloat(u.ValorEjeComunInicio)&&(t===0?o=0:(c=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango(r[t-1])+l,a=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango(r[t])+l,v=(a-c)*(parseFloat(u.ValorEjeComunInicio)-r[t-1])/(r[t]-r[t-1]),o=c+v),e=!0),t++;e||(h=!1)}else o<0&&(o=0);if(s===undefined)if(isNaN(u.ValorEjeComunFin))h=!1;else{for(t=0,e=!1;t<r.length&&!e;)r[t]>parseFloat(u.ValorEjeComunFin)&&(t===0?(e=!0,h=!1):(c=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango(r[t-1])+l,a=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango(r[t])+l,v=(a-c)*(parseFloat(u.ValorEjeComunFin)-r[t-1])/(r[t]-r[t-1]),s=c+v),e=!0),t++;e||(s=Responsive.fGetAnchoContenidoGrafica(n))}else w=Responsive.fGetAnchoContenidoGrafica(n),s>w&&(s=w);h&&(f=u.ValorEjeComunInicio+"-"+u.ValorEjeComunFin,n.oGrafica.oNoNumericos[i][f]={},n.oGrafica.oNoNumericos[i][f].sColor=n.oGrafica.aMetricas[i].sColor,Lineas.fCrearGradienteDeNoNumerico(n,i,f),n.oGrafica.oNoNumericos[i][f].domRectangulo=n.oGrafica.oSvg.oCanvas.oMetricas.domMetricas.append("rect").attr("x",o).attr("id",String(n.iNumeroInstanciaGestionGrafica)+"_metrica_"+i+"_rango_"+f).attr("width",s-o).attr("y",0).attr("height",0).attr("fill","url(#"+Helper.fGetIdDomGradienteNoNumerico(n,i,f)+")").attr("fill-opacity",0),n.iDuracionAnimacion>0?n.oGrafica.oNoNumericos[i][f].domRectangulo.transition().duration(n.iDuracionAnimacion).attr("height",p).attr("fill-opacity",1):n.oGrafica.oNoNumericos[i][f].domRectangulo.attr("height",p).attr("fill-opacity",1))}},fDibujarMetricas:function(n,t){var v,r,y,p,o,l,g,ft,f,nt;Responsive.fCargarDatosNoNumericos(n);v=0;y={};n.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.Tabla&&(y=Tablas.fDibujarCabeceraTabla(n));for(r in n.oGrafica.aMetricas)if(!n.oGrafica.aMetricas[r].bOculta&&n.oGrafica.aMetricas[r].SonDatosNumericos){switch(n.oGrafica.iTipoRepresentacion){case Helper.oTipoRepresentacion.Barras:Barras.fCargarBarras(n,n.iDuracionAnimacion>0);break;case Helper.oTipoRepresentacion.BarrasHorizontales:Barras.fCargarBarras(n,n.iDuracionAnimacion>0);break;case Helper.oTipoRepresentacion.Burbujas:n.oGrafica.aMetricas[r].oCirculos!==undefined&&n.oGrafica.aMetricas[r].oCirculos!==null&&n.oGrafica.aMetricas[r].oCirculos.remove();Lineas.fPintarCirculos(n,r,n.oParametros.iRadioCirculosBurbujas);break;case Helper.oTipoRepresentacion.Tabla:Tablas.fDibujarCuerpoTablaMetrica(n,y,r,v);break;default:n.oGrafica.aMetricas[r].oCirculos!==undefined&&n.oGrafica.aMetricas[r].oCirculos!==null&&n.oGrafica.aMetricas[r].oCirculos.remove();n.oGrafica.aMetricas[r].oArea!==undefined&&n.oGrafica.aMetricas[r].oArea!==null&&n.oGrafica.aMetricas[r].oArea.remove();n.oGrafica.aMetricas[r].oLinea!==undefined&&n.oGrafica.aMetricas[r].oLinea!==null&&n.oGrafica.aMetricas[r].oLinea.remove();n.oGrafica.aMetricas[r].iNumeroEjeY===1?p=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.fEscala(n.oGrafica.aMetricas[r].oMetrica.Datos):n.oGrafica.aMetricas[r].iNumeroEjeY===2&&(p=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.fEscala(n.oGrafica.aMetricas[r].oMetrica.Datos));o=n.oGrafica.oSvg.oCanvas.oMetricas.domMetricas.append("path").attr("id",String(n.iNumeroInstanciaGestionGrafica)+"_metrica_"+r).attr("d",p).attr("stroke",n.oGrafica.aMetricas[r].sColor).attr("stroke-width","2").attr("fill","none");l=o.node().getTotalLength();o.attr("stroke-dasharray",l+" "+l).attr("stroke-dashoffset",l);t?o.transition().duration(n.iDuracionAnimacion).ease("linear").attr("stroke-dashoffset",0):o.attr("stroke-dashoffset",0);Responsive.fAddPuntoDeMiraMetrica(n,r);n.oGrafica.aMetricas[r].oLinea=o;Lineas.fPintarCirculos(n,r);Lineas.fCrearGradienteDeArea(n,r);Lineas.fPintarArea(n,r)}v++}var w=n.oGrafica.d3Contenedor.select(".table-sticky thead tr.encabezado-col-1"),b=n.oGrafica.d3Contenedor.select(".table-sticky thead tr.encabezado-col-2"),k=n.oGrafica.d3Contenedor.select(".table-sticky thead tr.encabezado-col-3"),d;if(n.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.Tabla&&b.node()!==null){for(var tt=!0,s,it=(n.oGrafica.oSvg.domContenedor.node().clientWidth-n.oGrafica.d3Contenedor.select(".container-table-sticky").node().clientWidth)/2,h,rt=0,c=0,a=0,ut=0,u=w.node().getElementsByTagName("th"),e=$(n.oGrafica.d3Contenedor.select(".container-table-sticky").node()),i=0;i<u.length;i++)if(u[i].className.split(" ").indexOf("celdavaciaparastickyporjavascript")===-1&&(a+=parseInt(u[i].clientWidth),i===0?c=a:u[i].style.left=String(c)+"px",tt))if(h="scroll.gestiongrafica_tabla_1_"+String(i),i===u.length-1){d=e.find(".table-sticky")[0].clientWidth;s=e[0].scrollWidth-parseInt(u[i].clientWidth)-it;u[i].style.position="absolute";ut=u[i].clientHeight;u[i].style.height=String(ut)+"px";u[i].style.zIndex="5";w.append("th").attr("data-index",i).attr("colspan",u[i].getAttribute("colspan")).attr("class","celdavaciaparastickyporjavascript").append("span").html("x");u[i].querySelector("span").style.whiteSpace="nowrap";u[i].style.left=Math.max(c,s)+"px";e.on(h,function(n){var t=n.target.scrollLeft+this.iAnchoCeldaVacia,r=n.target.scrollTop,i;t>=this.iDesde?(i=this.iTamTabla-this.domUltimaCelda.clientWidth,this.domUltimaCelda.style.left=String(Math.min(i,t-this.iAnchoBorde))+"px"):this.domUltimaCelda.style.left=String(this.iDesde-this.iAnchoBorde)+"px";this.domUltimaCelda.style.top=String(r)+"px"}.bind({domUltimaCelda:u[i],iDesde:s,iAnchoBorde:rt,iAnchoCeldaVacia:c,iTamTabla:d}))}else e.off(h);for(g=parseInt(w.node().clientHeight),ft=parseInt(b.node().clientHeight),a=c,f=b.node().getElementsByTagName("th"),i=0;i<f.length;i++)if(f[i].className.split(" ").indexOf("celdavaciaparastickyporjavascript")===-1&&(f[i].style.top=String(g)+"px",k.node()!==null&&(f[i].style.left=String(a)+"px",tt)))if(h="scroll.gestiongrafica_tabla_2_"+String(i),i===f.length-1){s=e[0].scrollWidth-parseInt(f[i].clientWidth)-it;f[i].style.position="absolute";f[i].children[0].style.display="block";f[i].querySelector("span").style.whiteSpace="nowrap";f[i].style.left=s+"px";f[i].style.zIndex="5";e.on(h,function(n){var t=n.target.scrollLeft+this.iAnchoCeldaVacia,r=n.target.scrollTop,i;t>=this.iDesde?(i=this.iTamTabla-this.domUltimaCelda.clientWidth,this.domUltimaCelda.style.left=String(Math.min(i,t-this.iAnchoBorde))+"px"):this.domUltimaCelda.style.left=String(this.iDesde-this.iAnchoBorde)+"px";this.domUltimaCelda.style.top=String(r+this.iAltoFila1)+"px"}.bind({domUltimaCelda:f[i],iDesde:s,iAnchoBorde:rt,iAnchoCeldaVacia:c,iTamTabla:d,iAltoFila1:u[1].clientHeight}))}else e.off(h);if(k.node()!==null)for(nt=k.node().getElementsByTagName("th"),i=0;i<nt.length;i++)nt[i].style.top=String(g+ft)+"px"}},fAddPuntoDeMiraMetrica:function(n){var r=[],t,i;for(t in n.oGrafica.aMetricas)!n.oGrafica.aMetricas[t].bOculta&&n.oGrafica.aMetricas[t].SonDatosNumericos&&r.push({sId:t,oDatos:n.oGrafica.aMetricas[t].oMetrica.Datos});i=n.oGrafica.oSvg.oPuntoDeMira.domPuntoDeMira.selectAll(".gestiongrafica-metrica-puntodemira").data(r).enter().insert("g","rect").attr("class","gestiongrafica-metrica-puntodemira");i.append("circle").attr("r",7).style("fill","#fff").style("stroke-width","2px").style("opacity","0");i.append("text").attr("transform","translate(0,3)")}},Tooltip={fGetHtmlTooltipDato:function(n,t,i,r,u,f,e,o,s,h,c,l,a=""){var w,y,p,d,g;a===""&&(a=r);w=n.oGrafica.bRepresentacionEnFuncionTiempo?r==="Año"?u:`${u} - ${r}`:`${u} (${l}) - ${a}`;y="";i!==null&&i!==undefined&&i.length>0&&(y=`
                <tr>
                    <td class="gestiongrafica-tooltip-label"><span style="color:${t}">Notas</span></td>
                    <td class="gestiongrafica-tooltip-texto"><span>${i}</span></td>
                </tr>
            `);var b="",v="",k=0;h===1?(v=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oUnidad.sEscalaNombre,k=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oUnidad.iEscalaFactor):h===2&&(v=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oUnidad.sEscalaNombre,k=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oUnidad.iEscalaFactor);v.length>0&&s!==1&&(b=`<br /><span class="gestiongrafica-tooltip-label" style="color:${t}">(${v})</span>`);p="";o!=null&&(p=`<tr>
                <td class="gestiongrafica-tooltip-label"><span style="color:${t}">Dato</span></td>
                <td class="gestiongrafica-tooltip-texto"><span>${o}</span></td>
            </tr>`);d="";g="";switch(c){case"abajo":case"arriba":d=`style="border-color: ${t} transparent;"`;break;default:g=`style="border-color: transparent ${t};"`}return`
            <table class="gestiongrafica-tooltip-info">
                <tr>
                    <td class="gestiongrafica-tooltip-label"><span style="color:${t}">Fecha</span></td>
                    <td class="gestiongrafica-tooltip-texto"><span>${w}</span></td>
                </tr>
                <tr>
                    <td class="gestiongrafica-tooltip-label"><span style="color:${t}">${f}</span>${b}</td>
                    <td class="gestiongrafica-tooltip-texto"><span>${n.oFormato(e)}</span></td>
                </tr>
                ${p}
                ${y}
            </table>
        `},fMostrarTooltipDato:function(n,t,i){var o,c,r,v,l,f,u,y,a,e;if(!n.oGrafica.aMetricas[i].bOculta){o=15;n.iDuracionAnimacion>0?n.oGrafica.oSvg.oTooltip.domTooltip.style("width","auto").style("height","auto").transition().duration(n.iDuracionAnimacion).style("opacity",.9):n.oGrafica.oSvg.oTooltip.domTooltip.style("width","auto").style("height","auto").style("opacity",.9);var s=n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0].getBoundingClientRect().width,p=s*.5,w=d3.mouse(n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0]),b=w[0],h="derecha";b>=p&&(h="izquierda");t&&(t.MetricaId=i,c="",n.oGrafica.bRepresentacionEnFuncionTiempo||(c=t.ValorTick),n.oGrafica.oSvg.oTooltip.domTooltip.html(Tooltip.fGetHtmlTooltipDato(n,n.oGrafica.aMetricas[i].sColor,t.Notas,t.Periodo,t.Agno,n.oGrafica.aMetricas[t.MetricaId].oMetrica.Nombre,parseFloat(t.ValorEjeUnidad),t.Estado,parseInt(Math.pow(10,n.oGrafica.aMetricas[i].oMetrica.EscalaEje.EscalaFactorEje)),n.oGrafica.aMetricas[i].iNumeroEjeY,h,t.PeriodoNombre,c)),n.oGrafica.oSvg.oTooltip.domTooltip.attr("style","top: 0; right: 0; background-color: #fff; border-color: trasparent "+n.oGrafica.aMetricas[i].sColor),r=n.oGrafica.oSvg.oTooltip.domTooltip.node().getBoundingClientRect(),n.oGrafica.oSvg.oTooltip.domTooltip.style("width",r.width+"px").style("height",r.height+"px").style("right","auto"),v=r.width+n.oGrafica.oSvg.oTooltip.domTooltip.select("span")[0][0].getBoundingClientRect().width,l=n.oGrafica.oSvg.oTitulo.domContenedorTitulo.node().getBoundingClientRect(),n.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.Tabla?(s=n.oGrafica.oSvg.domContenedor.node().getBoundingClientRect().width,y=n.oGrafica.oSvg.domContenedor.node().getBoundingClientRect().height,f=s/2-r.width/2,u=y/2-r.height/2,n.oGrafica.oSvg.oTooltip.domTooltip.style("left",f+"px").style("top",u+"px")):(a=Tooltip.fGetAnchoEjeUnidad1ParaTooltips(n),f=h==="derecha"?n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango(parseFloat(t.ValorEjeComun))+a+n.oMargen.left+o+"px":n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango(parseFloat(t.ValorEjeComun))+a+n.oMargen.left-v-o+"px",e=0,n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje.select(".tick").node()!==undefined&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje.select(".tick").node()!==null&&(e=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje.select(".tick").node().getBoundingClientRect().height/2),n.oGrafica.aMetricas[i].iNumeroEjeY===1?(u=l.height+n.oMargen.top+e+n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oRango(parseFloat(t.ValorEjeUnidad))-r.height/2+"px",n.oGrafica.oSvg.oTooltip.domTooltip.style("left",f).style("top",u)):n.oGrafica.aMetricas[i].iNumeroEjeY===2&&(u=l.height+n.oMargen.top+e+n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oRango(parseFloat(t.ValorEjeUnidad))-r.height/2+"px",n.oGrafica.oSvg.oTooltip.domTooltip.style("left",f).style("top",u))))}},fOcultarTooltipDato:function(n){n.iDuracionAnimacion>0?n.oGrafica.oSvg.oTooltip.domTooltip.transition().duration(n.iDuracionAnimacion).style("opacity",0):n.oGrafica.oSvg.oTooltip.domTooltip.style("opacity",0)},fGetHtmlTooltipSoloHeader:function(n,t,i,r,u,f,e,o,s,h,c,l,a=""){var y,p,b,k;y=n.oGrafica.bRepresentacionEnFuncionTiempo?r==="Año"?u:`${u} - ${r}`:`${u} (${l}) - ${a}`;p="";i!==null&&i!==undefined&&i.length>0&&(p=`
                <tr>
                    <td class="gestiongrafica-tooltip-label"><span style="color:${t}">Notas</span></td>
                    <td class="gestiongrafica-tooltip-texto"><span>${i}</span></td>
                </tr>
            `);var d="",v="",w=0;h===1?(v=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oUnidad.sEscalaNombre,w=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oUnidad.iEscalaFactor):h===2&&(v=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oUnidad.sEscalaNombre,w=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oUnidad.iEscalaFactor);v.length>0&&s!==1&&(d=`<br /><span class="gestiongrafica-tooltip-label" style="color:${t}">(${v})</span>`);b="";k="";switch(c){case"abajo":case"arriba":b=`style="border-color: ${t} transparent;"`;break;default:k=`style="border-color: transparent ${t};"`}return`
            <table class="gestiongrafica-tooltip-info">
                <tr>
                    <td class="gestiongrafica-tooltip-label"><span style="color:#000}">Fecha</span></td>
                    <td class="gestiongrafica-tooltip-texto"><span>${y}</span></td>
                </tr>
            `},fGetHtmlTooltipSoloDato:function(n,t,i,r,u,f,e,o,s,h){var l="",c="",a=0;return h===1?(c=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oUnidad.sEscalaNombre,a=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oUnidad.iEscalaFactor):h===2&&(c=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oUnidad.sEscalaNombre,a=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oUnidad.iEscalaFactor),c.length>0&&s!==1&&(l=`<br /><span class="gestiongrafica-tooltip-label" style="color:${t}">(${c})</span>`),`
            <tr>
                <td class="gestiongrafica-tooltip-label"><span style="color:${t}">${f}</span>${l}</td>
                <td class="gestiongrafica-tooltip-texto"><span>${n.oFormato(e)}</span></td>
            </tr>
        `},fGetHtmlTooltipSoloFooter:function(n,t,i,r,u,f,e,o,s,h,c,l){var b,v,p,w;b=n.oGrafica.bRepresentacionEnFuncionTiempo?r==="Año"?u:`${u} - ${r}`:`${u} (${l}) - ${r}`;v="";i!==null&&i!==undefined&&i.length>0&&(v=`
                <tr>
                    <td class="gestiongrafica-tooltip-label"><span style="color:${t}">Notas</span></td>
                    <td class="gestiongrafica-tooltip-texto"><span>${i}</span></td>
                </tr>
            `);var k="",a="",y=0;h===1?(a=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oUnidad.sEscalaNombre,y=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.oUnidad.iEscalaFactor):h===2&&(a=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oUnidad.sEscalaNombre,y=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.oUnidad.iEscalaFactor);a.length>0&&s!==1&&(k=`<br /><span class="gestiongrafica-tooltip-label" style="color:${t}">(${a})</span>`);p="";w="";switch(c){case"abajo":case"arriba":p=`style="border-color: ${t} transparent;"`;break;default:w=`style="border-color: transparent ${t};"`}return`
                <tr>
                    <td class="gestiongrafica-tooltip-label"><span style="color:#000}">Dato</span></td>
                    <td class="gestiongrafica-tooltip-texto"><span>${o}</span></td>
                </tr>
                ${v}
            </table>
        `},fGetAnchoEjeUnidad1ParaTooltips:function(n){return Responsive.fGetAnchoEjeUnidad1(n)},fMostrarTooltipDatos:function(n,t,i){var d=d3.mouse(i),g=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeComun.oRango.invert(d[0]),v,y,c,o,nt,w,r,a,f;n.iDuracionAnimacion>0?n.oGrafica.oSvg.oTooltip.domTooltip.style("width","auto").style("height","auto").transition().duration(n.iDuracionAnimacion).style("opacity",.9):n.oGrafica.oSvg.oTooltip.domTooltip.style("width","auto").style("height","auto").style("opacity",.9);var et=n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0].getBoundingClientRect().width,ot=n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0].getBoundingClientRect().height,s=et*.5,h=ot*.5,d=d3.mouse(n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0]),st=d[0],e="derecha";st>=s&&(e="izquierda");n.oGrafica.oSvg.oTooltip.domTooltip.attr("style","top: 0px; right: 0px; background-color: #fff; border-color: trasparent #000");v="";y=[];for(c in t)if(!n.oGrafica.aMetricas[c].bOculta){var u=n.oGrafica.aMetricas[c].oMetrica.Datos.sort((n,t)=>n.ValorEjeComun>t.ValorEjeComun?1:t.ValorEjeComun>n.ValorEjeComun?-1:0),ht=d3.bisector(function(n){return parseFloat(n.ValorEjeComun)}).right,l=ht(u,g);l>0&&(l=l-1);r=u[l];r&&(r.MetricaId=c,y.push(r))}o=y.groupBy("Periodo");o["1"]&&o["1"].sort((n,t)=>n.Agno>t.Agno?1:t.Agno>n.Agno?-1:0);for(nt in o){var tt=0,u=o[nt],p="",it="",rt="",ut=!1;p=Tooltip.fGetHtmlTooltipSoloHeader(n,n.oGrafica.aMetricas[u[0].MetricaId].sColor,u[0].Notas,u[0].Periodo,u[0].Agno,n.oGrafica.aMetricas[u[0].MetricaId].oMetrica.Unidad,parseFloat(u[0].ValorEjeUnidad),u[0].Estado,parseInt(Math.pow(10,n.oGrafica.aMetricas[u[0].MetricaId].oMetrica.EscalaEje.EscalaFactorEje)),n.oGrafica.aMetricas[u[0].MetricaId].iNumeroEjeY,e,u[0].PeriodoNombre,u[0].ValorTick);for(w in u)Number.isInteger(parseInt(w))&&(r=u[w],a=parseFloat(r.ValorEjeComun),g>=a&&(ut=!0,a>tt&&(tt=a,p=Tooltip.fGetHtmlTooltipSoloHeader(n,n.oGrafica.aMetricas[r.MetricaId].sColor,r.Notas,r.Periodo,r.Agno,n.oGrafica.aMetricas[r.MetricaId].oMetrica.Unidad,parseFloat(r.ValorEjeUnidad),r.Estado,parseInt(Math.pow(10,n.oGrafica.aMetricas[r.MetricaId].oMetrica.EscalaEje.EscalaFactorEje)),n.oGrafica.aMetricas[r.MetricaId].iNumeroEjeY,e,r.PeriodoNombre,r.ValorTick)),it+=Tooltip.fGetHtmlTooltipSoloDato(n,n.oGrafica.aMetricas[r.MetricaId].sColor,r.Notas,r.Periodo,r.Agno,n.oGrafica.aMetricas[r.MetricaId].oMetrica.Nombre,parseFloat(r.ValorEjeUnidad),r.Estado,parseInt(Math.pow(10,n.oGrafica.aMetricas[r.MetricaId].oMetrica.EscalaEje.EscalaFactorEje)),n.oGrafica.aMetricas[r.MetricaId].iNumeroEjeY,e,r.PeriodoNombre)));u[0].Estado!=null&&(rt=Tooltip.fGetHtmlTooltipSoloFooter(n,n.oGrafica.aMetricas[u[0].MetricaId].sColor,u[0].Notas,u[0].Periodo,u[0].Agno,n.oGrafica.aMetricas[u[0].MetricaId].oMetrica.Unidad,parseFloat(u[0].ValorEjeUnidad),u[0].Estado,parseInt(Math.pow(10,n.oGrafica.aMetricas[u[0].MetricaId].oMetrica.EscalaEje.EscalaFactorEje)),n.oGrafica.aMetricas[u[0].MetricaId].iNumeroEjeY,e,u[0].PeriodoNombre));ut&&(v+=p+it+rt)}n.oGrafica.oSvg.oTooltip.domTooltip.html(v);f=n.oGrafica.oSvg.oTooltip.domTooltip.node().getBoundingClientRect();n.oGrafica.oSvg.oTooltip.domTooltip.style("width",f.width+"px").style("height",f.height+"px").style("right","auto");var b=0,k=0,ft=Tooltip.fGetAnchoEjeUnidad1ParaTooltips(n);e==="izquierda"?(b=n.oMargen.left+ft+s*.5-f.width*.5+20+"px",k=h+n.oMargen.top+h*.5-f.height*.5+"px"):(b=n.oMargen.left+ft+s+s*.5-f.width*.5+"px",k=h+n.oMargen.top+h*.5-f.height*.5+"px");n.oGrafica.oSvg.oTooltip.domTooltip.style("left",b).style("top",k)},fOcultarTooltipLeyenda:function(n){n.iDuracionAnimacion>0?n.oGrafica.oSvg.oTooltip.domTooltip.transition().duration(n.iDuracionAnimacion).style("opacity",0):n.oGrafica.oSvg.oTooltip.domTooltip.style("opacity",0)},fMostrarTooltipLeyenda:function(n,t){var c,o,s,i,b,h,u,r,a,v,f;if(!n.oGrafica.aMetricas[t].bOculta){c=20;n.iDuracionAnimacion>0?n.oGrafica.oSvg.oTooltip.domTooltip.style("width","auto").style("height","auto").transition().duration(n.iDuracionAnimacion).style("opacity",.9):n.oGrafica.oSvg.oTooltip.domTooltip.style("width","auto").style("height","auto").style("opacity",.9);var e=n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0].getBoundingClientRect().width,l=e*.5,y=d3.mouse(n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0]),p=y[0],w="derecha";p>=l&&(w="izquierda");o="";n.oGrafica.aMetricas[t].oMetrica.Clasificacion!==null&&n.oGrafica.aMetricas[t].oMetrica.Clasificacion!==undefined&&n.oGrafica.aMetricas[t].oMetrica.Clasificacion.length>0&&(o=`
                    <tr>
                        <td class="gestiongrafica-tooltip-label"><span style="color:${n.oGrafica.aMetricas[t].sColor}">Año base</span></td>
                        <td class="gestiongrafica-tooltip-texto"><span>${n.oGrafica.aMetricas[t].oMetrica.Clasificacion}</span></td>
                    </tr>
                `);s="";n.oGrafica.aMetricas[t].oMetrica.Notas!==null&&n.oGrafica.aMetricas[t].oMetrica.Notas!==undefined&&n.oGrafica.aMetricas[t].oMetrica.Notas.length>0&&(s=`
                    <tr>
                        <td class="gestiongrafica-tooltip-label"><span style="color:${n.oGrafica.aMetricas[t].sColor}">Notas</span></td>
                        <td class="gestiongrafica-tooltip-texto"><span>${n.oGrafica.aMetricas[t].oMetrica.Notas}</span></td>
                    </tr>
                `);n.oGrafica.oSvg.oTooltip.domTooltip.html(`
                <table class="gestiongrafica-tooltip-info">
                    <tr>
                        <td colspan="2" class="gestiongrafica-tooltip-textofilacompleta"><span>${n.oGrafica.aMetricas[t].oMetrica.NombreCompleto}</span></td>
                    </tr>
                    <tr>
                        <td class="gestiongrafica-tooltip-label"><span style="color:${n.oGrafica.aMetricas[t].sColor}">Fuente</span></td>
                        <td class="gestiongrafica-tooltip-texto"><span>${n.oGrafica.aMetricas[t].oMetrica.Fuente}, <a href="https://www.epdata.es" target="_blank">www.epdata.es</a></span></td>
                    </tr>
                    ${o}
                    ${s}
                </table>
            `);n.oGrafica.oSvg.oTooltip.domTooltip.attr("style","top: 0; right: 0; background-color: #fff; border-color: "+n.oGrafica.aMetricas[t].sColor);i=n.oGrafica.oSvg.oTooltip.domTooltip.node().getBoundingClientRect();n.oGrafica.oSvg.oTooltip.domTooltip.style("width",i.width+"px").style("height",i.height+"px").style("right","auto");b=i.width+n.oGrafica.oSvg.oTooltip.domTooltip.select("span")[0][0].getBoundingClientRect().width;h=n.oGrafica.oSvg.oTitulo.domContenedorTitulo.node().getBoundingClientRect();n.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.Tabla?(e=n.oGrafica.oSvg.domContenedor.node().getBoundingClientRect().width,a=n.oGrafica.oSvg.domContenedor.node().getBoundingClientRect().height,u=e/2-i.width/2,r=a/2-i.height/2,n.oGrafica.oSvg.oTooltip.domTooltip.style("left",u+"px").style("top",r+"px")):(v=Tooltip.fGetAnchoEjeUnidad1ParaTooltips(n),u=v+l+c+n.oMargen.left-i.width/2+"px",f=0,n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje.select(".tick").node()!==undefined&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje.select(".tick").node()!==null&&(f=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.domEje.select(".tick").node().getBoundingClientRect().height/2),n.oGrafica.aMetricas[t].iNumeroEjeY===1?(r=h.height+n.oMargen.top+f-i.height/2+"px",n.oGrafica.oSvg.oTooltip.domTooltip.style("left",u).style("top",r)):n.oGrafica.aMetricas[t].iNumeroEjeY===2&&(r=h.height+n.oMargen.top+f-i.height/2+"px",n.oGrafica.oSvg.oTooltip.domTooltip.style("left",u).style("top",r)))}},fMostrarTooltipBarra:function(n,t,i,r){var l,u;if(!n.oGrafica.aMetricas[r].bOculta){l=18;n.iDuracionAnimacion>0?n.oGrafica.oSvg.oTooltip.domTooltip.style("width","auto").style("height","auto").transition().duration(n.iDuracionAnimacion).style("opacity",.9):n.oGrafica.oSvg.oTooltip.domTooltip.style("width","auto").style("height","auto").style("opacity",.9);var w=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.bEstaEjeUnidadVisible!==null&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.bEstaEjeUnidadVisible,b=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.bEstaEjeUnidadVisible!==null&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.bEstaEjeUnidadVisible,k=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.iMinimoValorEje!==NaN&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.iMinimoValorEje<0&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.iMaximoValorEje!==NaN&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad1.iMaximoValorEje<=0,d=n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.iMinimoValorEje!==NaN&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.iMinimoValorEje<0&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.iMaximoValorEje!==NaN&&n.oGrafica.oSvg.oCanvas.oMetricas.oEjes.oEjeUnidad2.iMaximoValorEje<=0,a=n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0].getBoundingClientRect().width,v=n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0].getBoundingClientRect().height,f=a*.5,e=v*.5,y=d3.mouse(n.oGrafica.oSvg.oCanvas.oRaton.domRaton[0][0]),p=y[0],h="derecha";p>=f&&(h="izquierda");n.oGrafica.oSvg.oTooltip.domTooltip.html(Tooltip.fGetHtmlTooltipDato(n,n.oGrafica.aMetricas[r].sColor,n.oGrafica.oBarras[t][r].sNotas,n.oGrafica.oBarras[t][r].sPeriodo,n.oGrafica.oBarras[t][r].iAgno,n.oGrafica.aMetricas[r].oMetrica.Unidad,parseFloat(n.oGrafica.oBarras[t][r].dValorEjeUnidad),n.oGrafica.oBarras[t][r].sEstado,parseInt(Math.pow(10,n.oGrafica.aMetricas[r].oMetrica.EscalaEje.EscalaFactorEje)),n.oGrafica.aMetricas[r].iNumeroEjeY,"arriba",n.oGrafica.oBarras[t][r].sPeriodoNombre,n.oGrafica.oBarras[t][r].sValor));n.oGrafica.oSvg.oTooltip.domTooltip.attr("style","top: 0; left: 0; background-color: #fff; border-color: "+n.oGrafica.aMetricas[r].sColor);u=n.oGrafica.oSvg.oTooltip.domTooltip.node().getBoundingClientRect();n.oGrafica.oSvg.oTooltip.domTooltip.style("width",u.width+"px").style("height",u.height+"px");var g=n.oGrafica.oSvg.oTitulo.domContenedorTitulo.node().getBoundingClientRect(),nt=u.height+n.oGrafica.oSvg.oTooltip.domTooltip.select("span")[0][0].getBoundingClientRect().height,tt=n.oGrafica.oBarras[t][r].domBarra.node().getBoundingClientRect().width,c=Tooltip.fGetAnchoEjeUnidad1ParaTooltips(n),o,s;h==="izquierda"?(o=n.oMargen.left+c+f*.5-u.width*.5+20+"px",s=e+n.oMargen.top+e*.5-u.height*.5+"px"):(o=n.oMargen.left+c+f+f*.5-u.width*.5+"px",s=e+n.oMargen.top+e*.5-u.height*.5+"px");n.oGrafica.oSvg.oTooltip.domTooltip.style("left",o).style("top",s)}},fOcultarTooltipBarra:function(n){n.iDuracionAnimacion>0?n.oGrafica.oSvg.oTooltip.domTooltip.transition().duration(n.iDuracionAnimacion).style("opacity",0):n.oGrafica.oSvg.oTooltip.domTooltip.style("opacity",0)}},GestionMapa=function(){function n(n,t,i,r,u,f,e){var s=this;document.fonts.ready.then(function(){t.dataset.cargainicialfinalizada="false";s.d3Contenedor=d3.select(t);s.iAltoOriginalSolicitado=i;s.iAnchoOriginalSolicitado=r;s.iFK_MetricaActiva=u===null||u===undefined?n.metricas[0].fkmetrica:u;s.fNavegacion=f;s.iFK_RegionValor=n.fkregionvalor;s.bConAnimaciones=e===null||e===undefined?!0:e;s.d3ContenidoMapa=null;s.fResize=null;o++;s.iNumeroInstancia=o;s.oMapa=n})}function s(n){var f=n.oMapaNiveles[String(n.iFK_RegionTipoActual)][String(n.iFK_RegionValorActivo)].metricas.find(t=>t.fkmetrica===n.iFK_MetricaActiva),t,r,u;for(n.domEscala.innerHTML="",i=0;i<f.analisis.length;i++)t=document.createElement("div"),t.classList.add("analisis"),r=document.createElement("span"),r.setAttribute("style","background-color: "+f.analisis[i].color+";"),r.classList.add("icono"),u=document.createElement("span"),u.classList.add("nombre"),u.innerHTML=f.analisis[i].nombre,t.appendChild(r),t.appendChild(u),n.domEscala.appendChild(t)}function r(n){var t,a,h,b=Object.keys(n.oMapaNiveles),i,r,f,c,k,d,e,v,y,p,o,l,g,u,w;if(n.bSoyMapaDeCalor){for(i=null,r=null,t=0;t<n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aRangoValores.length;t++)f=n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aRangoValores[t],(i===null||i<f.iValorMaximo)&&(i=f.iValorMaximo),(r===null||r>f.iValorMinimo)&&(r=f.iValorMinimo);for(n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].iEscalaDesde!=null&&n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].iEscalaHasta!=null&&(r=Math.min(n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].iEscalaDesde,r),i=Math.max(n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].iEscalaHasta,i)),n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aEscalaColor.length>1?r<0&&i>0?(n.oEscalaColores=null,n.oEscalaColoresPositivo=chroma.scale(n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aEscalaColor.slice(parseInt(n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aEscalaColor.length/2),n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aEscalaColor.length)).domain([0,i],n.iSaltosDeColorEscala,"log"),n.oEscalaColoresNegativo=chroma.scale(n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aEscalaColor.slice(0,parseInt(n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aEscalaColor.length/2)+1)).domain([r,0],n.iSaltosDeColorEscala,"log")):(n.oEscalaColores=chroma.scale(n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aEscalaColor).domain([r,i],n.iSaltosDeColorEscala,"log"),n.oEscalaColoresPositivo=null,n.oEscalaColoresNegativo=null):(c=n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aEscalaColor.length===1?n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].aEscalaColor[0]:n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].sColor,r<0&&i>0?(k=c,d=hexToComplimentary(c),n.oEscalaColores=null,n.oEscalaColoresNegativo=chroma.scale([d,"#FFFFFF"]).domain([r,0],n.iSaltosDeColorEscala,"log"),n.oEscalaColoresPositivo=chroma.scale(["#FFFFFF",k]).domain([0,i],n.iSaltosDeColorEscala,"log")):n.oEscalaColores=chroma.scale(["lightyellow",c]).domain([r,i],n.iSaltosDeColorEscala,"log")),e=null,t=0;t<b.length&&e===null;){for(v=n.oMapaNiveles[b[t]],y=Object.keys(v),a=0;a<y.length&&e===null;)p=v[y[t]].metricas.find(t=>t.fkmetrica===n.iFK_MetricaActiva),p!==undefined&&(e=p.unidad),a++;t++}for(o=!1,Math.pow(10,-6)*(i-r)>=10&&(o=!0),n.domEscalaYUnidad.innerHTML=e+(o?" (millones)":""),l=Array.prototype.slice.call(n.domEscala.children).filter(n=>n.className==="escala"),g=(i-r)/n.iSaltosDeColorEscala,t=0;t<l.length;t++)u=r+g*t,l[t].style.backgroundColor=n.oEscalaColores===null?u<0?n.oEscalaColoresNegativo(u).hex():n.oEscalaColoresPositivo(u).hex():n.oEscalaColores(u).hex(),l[t].children[0].innerHTML=i<10?n.fFormato(parseInt(100*u/(o?1e6:1))/100):n.fFormato(parseInt(u/(o?1e6:1)));h=n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].sColor}else s(n),h=n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].sColor;for(n.d3MapLayer.selectAll("path").style("fill",function(t){var i,u,r;return t.properties.id<0?"transparent":(i=null,i=t.properties.datos!==null?t.properties.datos.find(n=>n.fkmetrica===this.oMe.iFK_MetricaActiva):undefined,i===undefined?this.oMe.sColorRegionSinDatos:this.oMe.bSoyMapaDeCalor?(u=Math.pow(10,this.oMe.oInfoLugarActivoPorRegionTipoYMetrica[String(this.oMe.iFK_MetricaActiva)][String(t.properties.fkregiontipo)].iEscalaFactor),r=i.valor*u,n.oEscalaColores===null?r<0?this.oMe.oEscalaColoresNegativo(r).hex():this.oMe.oEscalaColoresPositivo(r).hex():this.oMe.oEscalaColores(r).hex()):i.color)}.bind({oMe:n})),w=n.domTooltip.querySelectorAll("button"),t=0;t<w.length;t++)w[t].style.backgroundColor=h;n.domTooltip.style.borderColor=h}function h(n,t,i,r,u){var f=n.oInfoEscalaPorMetrica[String(t)].aRangoValores.find(n=>n.iFK_RegionTipo===i);f===undefined?n.oInfoEscalaPorMetrica[String(t)].aRangoValores.push({iFK_RegionTipo:i,iValorMinimo:r,iValorMaximo:u}):(f.iValorMinimo=r,f.iValorMaximo=u)}function g(n){n.domContenedorTitulo=document.createElement("div");n.domContenedorTitulo.classList.add("gestiongrafica-titulo-contenedor");var t='<a href="{0}" target="_blank"><h1 class="gestiongrafica-titulo-titulo">{1}<\/h1><\/a>'.format(n.oMapa.url,n.oMapa.titulo),i=n.oMapa.subtitulo.length===0?"":'<span class="gestiongrafica-titulo-subtitulo">{0}<\/span>'.format(n.oMapa.subtitulo);n.domContenedorTitulo.innerHTML=t+i;n.d3Contenedor.node().appendChild(n.domContenedorTitulo);n.d3ContenidoMapa=n.d3Contenedor.append("div");n.d3ContenidoMapa.classed("contenido",!0);n.d3Svg=n.d3ContenidoMapa.append("svg").style("touch-action","none")}function nt(n){n.domCargando=document.createElement("div");n.domCargando.classList.add("cargando");n.domCargando.innerHTML='<div class="cargando-contenido"><div class="cssload-contain"><div class="cssload-dot"><\/div><div class="cssload-dot"><\/div><div class="cssload-dot"><\/div><div class="cssload-dot"><\/div><div class="cssload-dot"><\/div><\/div><\/div>';n.d3Contenedor.node().appendChild(n.domCargando)}function tt(n){n.domTooltip=document.createElement("div");n.domTooltip.classList.add("tooltip-region");n.domTooltip.classList.add("oculto");n.domTooltip.style.borderColor=n.oMapa.metricas[0].color;n.domTooltip.style.borderRightColor=n.oMapa.metricas[0].color;n.d3Contenedor.node().appendChild(n.domTooltip);n.d3Label=n.d3ContenidoMapa.append("span");n.d3Label.classed("label-region",!0);n.d3Label.classed("oculto",!0)}function it(n){var r,i,u,t,f;if(n.domEscala=document.createElement("div"),n.domEscala.classList.add("escala-contenedor"),n.bSoyMapaDeCalor)for(n.domEscalaYUnidad=document.createElement("span"),n.domEscalaYUnidad.classList.add("escalayunidad"),n.domEscala.appendChild(n.domEscalaYUnidad),r=1;r<=n.iSaltosDeColorEscala;r++)i=document.createElement("div"),i.classList.add("escala"),i.dataset.id=String(r),u=document.createElement("span"),u.classList.add("texto"),i.appendChild(u),n.domEscala.appendChild(i);else n.domEscala.classList.add("mapa-tipo-categorias");for(n.d3Contenedor.node().appendChild(n.domEscala),n.oInfoLugarActivoPorRegionTipoYMetrica={},n.oMapaNiveles={},n.oMapaNiveles[String(n.oMapa.fkregiontipomapa)]={},n.oMapaNiveles[String(n.oMapa.fkregiontipomapa)][String(n.oMapa.fkregionvalormapa)]=n.oMapa,n.oInfoEscalaPorMetrica={},t=0;t<n.oMapa.metricas.length;t++)n.oInfoLugarActivoPorRegionTipoYMetrica[String(n.oMapa.metricas[t].fkmetrica)]={},n.oInfoLugarActivoPorRegionTipoYMetrica[String(n.oMapa.metricas[t].fkmetrica)][String(n.oMapa.fkregiontipomapa)]={iFK_RegionValorMapa:n.oMapa.fkregionvalormapa,iEscalaFactor:n.oMapa.metricas[t].escalafactor},n.oInfoEscalaPorMetrica[String(n.oMapa.metricas[t].fkmetrica)]={sColor:n.oMapa.metricas[t].color,aEscalaColor:n.oMapa.metricas[t].escalacolor.slice(0).reverse(),aRangoValores:[],iEscalaDesde:n.oMapa.metricas[t].escalamapadesde,iEscalaHasta:n.oMapa.metricas[t].escalamapahasta},f=Math.pow(10,n.oMapa.metricas[t].escalafactor),h(n,n.oMapa.metricas[t].fkmetrica,n.oMapa.fkregiontipomapa,n.oMapa.metricas[t].valorminimo*f,n.oMapa.metricas[t].valormaximo*f)}function rt(n){var u,t,f;if(n.oMapa.metricas.length>1){for(u=document.createElement("div"),u.classList.add("metrica-contenedor"),i=0;i<n.oMapa.metricas.length;i++)t=document.createElement("label"),t.classList.add("metrica"),n.oMapa.metricas[i].fkmetrica===n.iFK_MetricaActiva&&t.classList.add("activa"),t.onclick=function(){var t,n;if(this.oMe.iFK_MetricaActiva!==this.iFK_Metrica){for(this.oMe.d3Contenedor.select(".metrica.activa").classed("activa",!1),this.dom.classList.add("activa"),this.oMe.iFK_MetricaActiva=this.iFK_Metrica,t=u.querySelectorAll(".slider"),n=0;n<t.length;n++)t[n].style.backgroundColor=parseInt(t[n].dataset.fkmetrica)===this.oMe.iFK_MetricaActiva?this.oMe.oInfoEscalaPorMetrica[String(t[n].dataset.fkmetrica)].sColor:this.oMe.sColorMetricaInactiva;r(this.oMe)}}.bind({oMe:n,iFK_Metrica:n.oMapa.metricas[i].fkmetrica,dom:t}),t.innerHTML='<span class="interruptor"><input type="radio" {2} name="metrica"><span class="slider" data-fkmetrica="{3}"><\/span><\/span><span class="nombre" style="color: {0};">{1}<\/span>'.format(n.oInfoEscalaPorMetrica[String(n.oMapa.metricas[i].fkmetrica)].sColor,n.oMapa.metricas[i].nombre,n.oMapa.metricas[i].fkmetrica===n.iFK_MetricaActiva?'checked="checked"':"",n.oMapa.metricas[i].fkmetrica),u.appendChild(t);for(f=u.querySelectorAll(".slider"),i=0;i<f.length;i++)f[i].style.backgroundColor=parseInt(f[i].dataset.fkmetrica)===n.iFK_MetricaActiva?n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].sColor:n.sColorMetricaInactiva;n.d3ContenidoMapa.node().appendChild(u)}}function ut(n){var o=document.createElement("div"),t,i,r,f,e,s,h,u;for(o.classList.add("botones-contenedor"),t=document.createElement("div"),t.classList.add("boton-contenedor"),i=document.createElement("button"),i.classList.add("boton"),i.innerHTML="+",i.onclick=function(){k(this.oMe,!0)}.bind({oMe:n}),r=document.createElement("button"),r.innerHTML="-",r.classList.add("boton"),r.onclick=function(){k(this.oMe,!1)}.bind({oMe:n}),t.appendChild(i),t.appendChild(r),o.appendChild(t),f=document.createElement("div"),f.classList.add("reiniciarzoom-contenedor"),n.domBotonReiniciarZoom=document.createElement("div"),n.domBotonReiniciarZoom.classList.add("reiniciarzoom-contenido"),n.domBotonReiniciarZoom.onclick=function(){d(this.oMe)}.bind({oMe:n}),e=document.createElement("div"),e.classList.add("reiniciarzoom"),s=document.createElement("div"),s.classList.add("icono"),e.appendChild(s),n.domBotonReiniciarZoom.appendChild(e),f.appendChild(n.domBotonReiniciarZoom),n.d3ContenidoMapa.node().appendChild(o),n.d3ContenidoMapa.node().appendChild(f),u=0;u<n.oMapa.capas.length;u++)h=topojson.feature(n.oMapa.capas[u].topology,n.oMapa.capas[u].topology.objects.regionvalores).features,n.oDatosMapa.aCapa.push(h),n.oDatosMapa.oFeatures.features=n.oDatosMapa.oFeatures.features.concat(h);n.iMilisegundosAnimacion=n.bConAnimaciones?350:0;n.iVelocidadZoom=.4;n.oZoom=d3.behavior.zoom().scaleExtent([.05,50]).on("zoom",function(){c(this.oMe)}.bind({oMe:n})).on("zoomstart",function(){this.oMe.oCoordenadasArrastre=this.oMe.oZoom.translate()}.bind({oMe:n})).on("zoomend",function(){var n=this.oMe.oZoom.translate(),t=Math.max(Math.abs(n[0]-this.oMe.oCoordenadasArrastre[0]),Math.abs(n[1]-this.oMe.oCoordenadasArrastre[1]));this.oMe.bEstamosArrastrando=20<t?!0:!1}.bind({oMe:n}));n.d3G=n.d3Svg.call(n.oZoom).append("g");n.d3MapLayer=n.d3G.classed("map-layer",!0);n.oProyeccion=d3.geo.mercator().scale(1);n.oPath=d3.geo.path().projection(n.oProyeccion);n.oViewport=null}function ft(n){n.iFK_RegionTipoActual=n.oMapa.fkregiontipomapa;n.iFK_RegionTipoMapaOriginal=n.oMapa.fkregiontipomapa;n.iFK_RegionValorMapaOriginal=n.oMapa.fkregionvalormapa;n.iFK_RegionValorActivo=n.oMapa.fkregionvalormapa;n.bSoyMovil=!0;n.bSoyMapaDeCalor=n.oMapa.soymapadecalor;n.sColorRegionSinDatos="#ccc";n.sColorMetricaInactiva="#ccc";n.iSaltosDeColorEscala=7;d3.formatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:[""," €"]});n.fFormato=d3.format(",");n.oDatosMapa={sGuid:n.oMapa.guid,aCapa:[],oFeatures:{type:"FeatureCollection",features:[]}};n.d3Contenedor.classed("mapa",!0)}function et(n){var t=n.oViewport;return n.oViewport={iAncho:Math.max(document.documentElement.clientWidth,window.innerWidth||0),iAlto:Math.max(document.documentElement.clientHeight,window.innerHeight||0)},t=t===null?n.oViewport:t,t.iAncho!==n.oViewport.iAncho}function c(n){n.d3G.attr("transform","translate("+n.oZoom.translate()+")scale("+n.oZoom.scale()+")");l(n,!0)}function l(n,t){n.bHemosHechoZoom=t;t?n.domBotonReiniciarZoom.classList.remove("oculto"):n.domBotonReiniciarZoom.classList.add("oculto")}function a(n,i){var f,o,h,c,e,u;for(i&&(n.fResize===null||n.fResize===undefined)&&(n.fResize=function(){et(this.oMe)&&a(this.oMe,!1)}.bind({oMe:n}),window.addEventListener("resize",n.fResize)),n.iAncho=n.iAnchoOriginalSolicitado===null||n.iAnchoOriginalSolicitado===undefined||isNaN(n.iAnchoOriginalSolicitado||n.iAnchoOriginalSolicitado===0)?Math.max(n.d3Contenedor.node().offsetWidth,n.iAnchoMinimo):Math.max(n.iAnchoOriginalSolicitado,n.iAnchoMinimo),n.iAncho<500?(n.d3Contenedor.classed("xs",!0),n.d3Contenedor.classed("sm",!1),n.d3Contenedor.classed("md",!1),n.d3Contenedor.classed("lg",!1)):n.iAncho<680?(n.d3Contenedor.classed("xs",!1),n.d3Contenedor.classed("sm",!0),n.d3Contenedor.classed("md",!1),n.d3Contenedor.classed("lg",!1)):n.iAncho<780?(n.d3Contenedor.classed("xs",!1),n.d3Contenedor.classed("sm",!1),n.d3Contenedor.classed("md",!0),n.d3Contenedor.classed("lg",!1)):(n.d3Contenedor.classed("xs",!1),n.d3Contenedor.classed("sm",!1),n.d3Contenedor.classed("md",!1),n.d3Contenedor.classed("lg",!0)),n.bSoyMapaDeCalor||s(n),n.iAltoOriginalSolicitado!==undefined&&n.iAltoOriginalSolicitado!==null&&!isNaN(n.iAnchoOriginalSolicitado)&&n.iAltoOriginalSolicitado>0?(f=n.domContenedorTitulo.offsetHeight,window.getComputedStyle(n.domEscala,null).getPropertyValue("position")!=="absolute"&&(f+=n.domEscala.offsetHeight),f+=1,n.iAlto=Math.max(n.iAltoOriginalSolicitado,n.iAltoMinimo)-f):n.iAlto=HelperBootstrap.EsXs()?Math.min(500,Helper.fGetAltoViewport()*.7):Math.min(700,Helper.fGetAltoViewport()*.7),n.d3Svg.attr("width",n.iAncho),n.d3Svg.attr("height",n.iAlto),o=d3.geo.bounds(n.oDatosMapa.oFeatures),n.iCentro=[d3.sum(o,function(n){return n[0]})/2,d3.sum(o,function(n){return n[1]})/2],n.oProyeccion.scale(3e3).center(n.iCentro).rotate([0,0]).translate([n.iAncho/2,n.iAlto/2]),n.aD3Paths=n.d3MapLayer.selectAll("path"),n.aD3Paths!=null&&n.aD3Paths[0].length>0&&(n.aD3Paths.remove(),n.aD3Paths=n.d3MapLayer.selectAll("path")),h=.2,c=.2,e=0;e<n.oDatosMapa.aCapa.length;e++)n.aD3Paths.data(n.oDatosMapa.aCapa[e]).enter().append("path").attr("d",n.oPath).attr("data-id",function(n){return n.properties.id}).attr("id",function(n){return String(this.oMe.iNumeroInstancia)+"_region_"+n.properties.id}.bind({oMe:n})).attr("vector-effect","non-scaling-stroke").style("pointer-events",function(n){return n.properties.id<0?"none":"auto"}).on("click",function(i){t(n,this,i)}).on("mouseover",function(t){w(n,this,t)}).on("mouseout",function(t){b(n,this,t)}).on("mousemove",function(){p(n)});d(n);r(n);i&&n.iFK_RegionValor!==undefined&&n.iFK_RegionValor!==null&&(u=n.d3MapLayer.select('path[data-id="'+String(n.iFK_RegionValor)+'"]').node(),u!==null&&(u.classList.add("ClickEnRegion"),u.parentNode.insertBefore(u,null)))}function v(n,t,i){var h='<li><span class="columnaizquierda {0}" {1}>{2}<\/span> <span class="columnaderecha">{3}<\/span><\/li>',tt="No disponible",et=y(i.properties.fkregiontipo,!0),it='<div class="encabezado">{0} {1}<\/div>'.format('<span class="titulo">{0} <span class="regiontipo">{1}<\/span><\/span>'.format(i.properties.nombre,"("+et+")"),'<div class="boton-contenedor"><\/div>'),o,k,f,p,w,d,g,nt,e,rt,ut,r,v,ft,b;it+='<div class="boton-navegar-contenedor"><\/div>';for(k in n.oInfoLugarActivoPorRegionTipoYMetrica){var c=null,l=null,a=null,s=null,r=n.oMapaNiveles[String(i.properties.fkregiontipo)][String(i.properties.padre)];if(r===undefined&&(r=n.oMapaNiveles[String(i.properties.fkregiontipo)][String(i.properties.abuelo)],r===undefined&&(r=n.oMapaNiveles[String(i.properties.fkregiontipo)][String(i.properties.bisabuelo)])),i.properties.datos!==null&&(f=i.properties.datos.find(n=>n.fkmetrica===parseInt(k))),r===undefined||r.metricas===null)for(p=0,w=Object.keys(n.oMapaNiveles);p<w.length&&c===null&&l===null&&a===null&&s===null;)for(d=0,g=Object.keys(n.oMapaNiveles[w[p]]);d<g.length&&c===null&&l===null&&a===null&&s===null;)n.oMapaNiveles[w[p]][g[d]].metricas!==null&&(nt=n.oMapaNiveles[w[p]][g[d]].metricas.find(n=>n.fkmetrica===parseInt(k)),c=nt.color,l=nt.nombre,a="",s=nt.unidad);else e=r.metricas.find(n=>n.fkmetrica===parseInt(k)),e!==undefined&&(n.bSoyMapaDeCalor?(c=e.color,l=e.nombre,a="",s=e.unidad):(c=e.color,l=e.categoria,f===undefined?a="":(rt=e.analisis.find(n=>n.id===f.fkanalisis),a=rt.nombre+" ("+rt.descripcion+")"),s=e.unidad));c===null||l===null||s===null||(o=h.format("nombre",'style="color: '+c+';"',l,a),f===undefined?(o+=h.format("","",s+":",tt),o+=h.format("","","Fecha:",tt),o+=h.format("","","Dato:",tt)):(ut=Math.pow(10,n.oInfoLugarActivoPorRegionTipoYMetrica[String(f.fkmetrica)][String(i.properties.fkregiontipo)].iEscalaFactor),o+=h.format("","",s+":",n.fFormato(f.valor*ut)),o+=h.format("","","Fecha:",f.agno+" - "+f.periodo),o+=h.format("","","Dato:",f.estado)),it+='<div class="metrica"><ul>{0}<\/ul><\/div>'.format(o))}n.domTooltip.innerHTML=it;n.bSoyMovil&&i.properties.fkregiontipo+1<=5&&(r=n.oMapaNiveles[String(i.properties.fkregiontipo)][String(i.properties.padre)],r===undefined&&(r=n.oMapaNiveles[String(i.properties.fkregiontipo)][String(i.properties.abuelo)],r===undefined&&(r=n.oMapaNiveles[String(i.properties.fkregiontipo)][String(i.properties.bisabuelo)])),r!==undefined&&r.puedoAbrirEnNivelInferior===!0&&(v=document.createElement("button"),v.classList.add("navegar"),v.style.backgroundColor=n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].sColor,ft=y(i.properties.fkregiontipo+1,!1),v.innerHTML="Ver "+ft,v.onclick=function(){u(this.oMe,this.oPath,this.oFeature)}.bind({oMe:n,oPath:t,oFeature:i}),n.domTooltip.querySelector(".boton-navegar-contenedor").appendChild(v)));b=document.createElement("button");b.onclick=function(){this.oMe.domTooltip.classList.add("oculto");var n=this.oMe.d3MapLayer.selectAll("path");n.classed("ClickEnRegion",!1)}.bind({oMe:n});n.domTooltip.classList.remove("oculto");b.style.backgroundColor=n.oInfoEscalaPorMetrica[String(n.iFK_MetricaActiva)].sColor;b.classList.add("cerrar");n.domTooltip.querySelector(".boton-contenedor").appendChild(b)}function y(n,t){var i;switch(n){case 1:i=t?"grupo de país":"grupos de países";break;case 2:i=t?"país":"países";break;case 3:i=t?"comunidad autónoma":"comunidades autónomas";break;case 4:i=t?"provincia":"provincias";break;case 5:i=t?"municipio":"municipios"}return i}function u(n,t,i){var r=i.properties.fkregiontipo+1,u=i.properties.id,l;if(r<=5){l=n.oMapaNiveles[String(r)]===undefined||n.oMapaNiveles[String(r)][String(u)]===undefined;l?n.fNavegacion===undefined||n.fNavegacion===null?(n.domCargando.classList.add("activo"),$.ajax({type:"GET",async:!0,contentType:"application/json; charset=utf-8",url:"/representacion/getrepresentacion/"+n.oDatosMapa.sGuid+"/"+String(u)+"/"+String(r)}).done(function(n){this.oMe.domCargando.classList.remove("activo");var t=typeof n=="string"?$.parseJSON(n):n;t.Correcto&&(this.oMe.oMapaNiveles[String(this.iFK_RegionTipo)]===undefined&&(this.oMe.oMapaNiveles[String(this.iFK_RegionTipo)]={}),this.oMe.oMapaNiveles[String(this.iFK_RegionTipo)][String(this.iFK_RegionValor)]=t.Mapa,f(this.oMe,this.iFK_RegionTipo,this.iFK_RegionValor,t.Mapa))}.bind({oMe:n,iFK_RegionTipo:r,iFK_RegionValor:u})).fail(function(){})):n.fNavegacion(r,u,function(n){this.oMe.oMapaNiveles[String(this.iFK_RegionTipo)]===undefined&&(this.oMe.oMapaNiveles[String(this.iFK_RegionTipo)]={});this.oMe.oMapaNiveles[String(this.iFK_RegionTipo)][String(this.iFK_RegionValor)]=n}.bind({oMe:n,iFK_RegionTipo:r,iFK_RegionValor:u})):f(n,r,u,n.oMapaNiveles[String(r)][String(u)]);var o=n.oPath.bounds(i),c=.95/Math.max((o[1][0]-o[0][0])/n.iAncho,(o[1][1]-o[0][1])/n.iAlto),s=t.getBoundingClientRect(),a={iLeft:(n.iAncho-s.width)/2,iTop:(n.iAlto-s.height)/2},v={x:s.width/2,y:s.height/2},h=t.getBBox(),y=[(-h.x-h.width/2)*c+v.x+a.iLeft,(-h.y-h.height/2)*c+v.y+a.iTop];e(n,y,c)}}function p(n){var t=n.d3Svg.node().getBoundingClientRect();n.d3Label.style("left",d3.event.clientX-t.left+15+"px");n.d3Label.style("top",d3.event.clientY-t.top-15+"px")}function w(n,t,i){var e,u,r,f;n.bSoyMovil||v(n,t,i);e=n.d3MapLayer.selectAll("path");e.classed("HoverEnRegion",!1);i.properties.fkregiontipo===n.iFK_RegionTipoActual&&(n.d3MapLayer.selectAll("path.ClickEnRegion")[0].length,r=n.d3MapLayer.selectAll("path.ClickEnRegion"),r[0].length===0?(u=null,f=!0):(u=parseInt(r[0][0].dataset.fkregiontipo)===n.iFK_RegionTipoActual?r[0][0]:null,f=t.getAttribute("id")===r[0][0].getAttribute("id")?!1:!0),f&&t.classList.add("HoverEnRegion"),t.parentNode.insertBefore(t,u));n.d3Label.html(i.properties.nombre);n.d3Label.classed("oculto",!1)}function b(n,t){t.classList.remove("HoverEnRegion");n.d3Label.classed("oculto",!0)}function t(n,t,i){if(!n.bEstamosArrastrando)if(n.iFK_RegionValorActivo=i.properties.id,n.bSoyMovil){var r=n.d3MapLayer.selectAll("path");r.classed("ClickEnRegion",!1);t.classList.add("ClickEnRegion");t.parentNode.insertBefore(t,null);v(n,t,i)}else u(n,t,i)}function f(n,i,f,e){for(var s,l,c,a,o=i;o<=5;o++)n.d3MapLayer.selectAll('path[data-fkregiontipo="'+String(o)+'"]').remove();for(s=[],o=0;o<e.capas.length;o++)s=s.concat(topojson.feature(e.capas[o].topology,e.capas[o].topology.objects.regionvalores).features);if(n.iFK_RegionValorActivo=f,n.iFK_RegionTipoActual=i,l=n.aD3Paths.data(s).enter().append("path").attr("id",function(n){return String(this.oMe.iNumeroInstancia)+"_region_"+n.properties.id}.bind({oMe:n})).attr("data-fkregiontipo",String(i)).attr("data-fkregionvalor",String(f)).attr("d",n.oPath).attr("vector-effect","non-scaling-stroke").style("fill",n.sColorRegionSinDatos).on("click",function(i){t(n,this,i)}).on("mouseover",function(t){w(n,this,t)}).on("mouseout",function(t){b(n,this,t)}).on("mousemove",function(){p(n)}),e.metricas===null)t(n,l.node(),s[0]);else{for(o=0;o<e.metricas.length;o++)n.oInfoLugarActivoPorRegionTipoYMetrica[String(e.metricas[o].fkmetrica)][String(e.fkregiontipomapa)]={iFK_RegionValorMapa:e.fkregionvalormapa,iEscalaFactor:e.metricas[o].escalafactor};c=e.metricas.find(t=>t.fkmetrica===n.iFK_MetricaActiva);c===undefined?t(n,l.node(),s[0]):s.length===1?u(n,l.node(),s[0]):(a=Math.pow(10,n.oInfoLugarActivoPorRegionTipoYMetrica[String(c.fkmetrica)][String(i)].iEscalaFactor),h(n,n.iFK_MetricaActiva,i,a*c.valorminimo,a*c.valormaximo),r(n))}}function k(n,t){var f;d3.event!==undefined&&d3.event!==null&&d3.event.preventDefault();var r=[n.iAncho/2,n.iAlto/2],o=n.oZoom.scaleExtent(),s=n.oZoom.translate(),i={x:s[0],y:s[1],k:n.oZoom.scale()},h=[(r[0]-i.x)/i.k,(r[1]-i.y)/i.k],u=n.oZoom.scale()*(1+n.iVelocidadZoom*(t?1:-1));return u=Math.min(Math.max(u,o[0]),o[1]),i.k=u,f=[h[0]*i.k+i.x,h[1]*i.k+i.y],i.x+=r[0]-f[0],i.y+=r[1]-f[1],e(n,[i.x,i.y],i.k)}function e(n,t,i){return d3.transition().duration(n.iMilisegundosAnimacion).tween("zoom",function(){return function(n){var t=d3.interpolate(this.oMe.oZoom.translate(),this.iTrasladar),i=d3.interpolate(this.oMe.oZoom.scale(),this.iAmpliar);this.oMe.oZoom.scale(i(n)).translate(t(n));c(this.oMe)}.bind({oMe:this.oMe,iTrasladar:this.iTrasladar,iAmpliar:this.iAmpliar})}.bind({oMe:n,iTrasladar:t,iAmpliar:i}))}function d(n){var u;n.domTooltip.classList.add("oculto");n.iFK_RegionTipoActual=n.iFK_RegionTipoMapaOriginal;n.iFK_RegionValorActivo=n.iFK_RegionValorMapaOriginal;var r={},i={},o=null,s=null,h=null,c=null,v=n.d3MapLayer.selectAll("path")[0];for(u=0;u<n.oDatosMapa.aCapa[0].length;u++){var t=String(n.oDatosMapa.aCapa[0][u].properties.id),y=v.find(n=>n.dataset.id===t),p=y.getBoundingClientRect();r[t]=n.oPath.bounds(n.oDatosMapa.aCapa[0][u]);i[t]=p;(o===null||i[o].top>i[t].top)&&(o=t);(s===null||i[s].bottom<i[t].bottom)&&(s=t);(h===null||i[h].left>i[t].left)&&(h=t);(c===null||i[c].right<i[t].right)&&(c=t)}var w=r[c][1][0]-r[h][0][0],b=r[s][1][1]-r[o][0][1],a=.95/Math.max(w/n.iAncho,b/n.iAlto),k=[n.iAncho/2*(1-a),n.iAlto/2*(1-a)];e(n,k,a);setTimeout(function(){l(this.oMe,!1)}.bind({oMe:n}),n.iMilisegundosAnimacion+20);f(n,n.iFK_RegionTipoMapaOriginal,n.iFK_RegionValorMapaOriginal,n.oMapaNiveles[String(n.iFK_RegionTipoMapaOriginal)][String(n.iFK_RegionValorMapaOriginal)])}var o=0;return n.prototype.iNumeroInstancia=null,n.prototype.iAnchoMinimo=350,n.prototype.iAltoMinimo=350,n.prototype.bSoyMovil,n.prototype.iFK_MetricaActiva,n.prototype.iFK_RegionTipoActual,n.prototype.iFK_RegionValorActivo,n.prototype.fNavegacion,n.prototype.sColorRegionSinDatos,n.prototype.sColorMetricaInactiva,n.prototype.fFormato,n.prototype.iSaltosDeColorEscala,n.prototype.iFK_RegionTipoMapaOriginal,n.prototype.iFK_RegionValorMapaOriginal,n.prototype.oMapa,n.prototype.oDatosMapa,n.prototype.oEscalaColores,n.prototype.dEscalaMapaDesde,n.prototype.dEscalaMapaHasta,n.prototype.oEscalaColoresPositivo,n.prototype.oEscalaColoresNegativo,n.prototype.bSoyMapaDeCalor,n.prototype.oMapaNiveles,n.prototype.oInfoEscalaPorMetrica,n.prototype.oInfoLugarActivoPorRegionTipoYMetrica,n.prototype.iMilisegundosAnimacion,n.prototype.fResize,n.prototype.oViewport,n.prototype.oCoordenadasArrastre,n.prototype.bEstamosArrastrando,n.prototype.d3Contenedor,n.prototype.domContenedorTitulo,n.prototype.domTooltip,n.prototype.domEscala,n.prototype.domEscalaYUnidad,n.prototype.domBotonReiniciarZoom,n.prototype.domCargando,n.prototype.d3Label,n.prototype.d3ContenidoMapa,n.prototype.d3Svg,n.prototype.d3G,n.prototype.d3MapLayer,n.prototype.bHemosHechoZoom,n.prototype.iVelocidadZoom,n.prototype.iCentro,n.prototype.iAncho,n.prototype.iAlto,n.prototype.iAnchoOriginalSolicitado,n.prototype.iAltoOriginalSolicitado,n.prototype.bConAnimaciones,n.prototype.oProyeccion,n.prototype.oPath,n.prototype.aD3Paths,n.prototype.oZoom,n.prototype.fRun=function(){var n=this;document.fonts.ready.then(function(){for(var t=0;t<n.iTotalTareas;t++)n.fEjecutarTarea(t)})},n.prototype.iTotalTareas=9,n.prototype.fEjecutarTarea=function(n){var t=this;document.fonts.ready.then(function(){switch(n){case 0:ft(t);break;case 1:g(t);break;case 2:nt(t);break;case 3:tt(t);break;case 4:it(t);break;case 5:rt(t);break;case 6:ut(t);break;case 7:a(t,!0);break;case 8:t.domBotonReiniciarZoom.click();requestAnimationFrame(function(){t.d3Contenedor.node().dataset.cargainicialfinalizada="true"});break;default:throw"Tarea no implementada";}}.bind({oMe:t}))},n.prototype.fDestruir=function(){var n=this;window.removeEventListener("resize",n.fResize);n.d3Contenedor.html("")},n}(),GestionGrafica=function(){function n(n,i,r,u,f,e,o,s,h,c,l,a,v,y){var p=this;n.dataset.cargainicialfinalizada="false";document.fonts.ready.then(function(){var b,w,k;if(p.sTitulo=e,p.sTituloUrl=o,p.sSubtitulo=s,p.oMetricas=h,p.oGestionColores=new GestionColores,p.oGrafica={bRepresentacionEnFuncionTiempo:c,iTipoRepresentacion:i,d3Contenedor:d3.select(n),bOrdenarPorFechaDescendente:v,bComparativaEnFilasEnLugarDeEnColumnas:y,aGradientes:{},oBarras:{},aMetricas:{},oEscalasEjeUnidad:l,oEscalasEjeUnidadFinal:{},oSvg:{domContenedor:null,domSvg:null,oTitulo:{domContenedorTitulo:null,domTitulo:null,domSubtitulo:null},oNombresEscalas:{domContenedor:null},iAncho:null,iAlto:null,oCanvas:{domCanvas:null,oMetricas:{domMetricas:null,oDefiniciones:null,oEjes:{oEjeComun:{oEje:null,domEje:null,domEjeVisible:null,oRango:null},oEjeCuadricula:{oEjeVertical:null,oEjeHorizontal:null,oRango:null,domEjeVertical:null,domEjeHorizontal:null},oEjeUnidad1:{oEje:null,domEje:null,oRango:null,oRangoBarrasNegativas:null,oRangoBarrasPositivas:null,iMinimoValorEje:null,iMaximoValorEje:null,fEscala:null,bEstaEjeUnidadVisible:null,oUnidad:{sUnidadTipoId:null,sUnidadTipoNombre:null,sUnidadTipoAbreviatura:null,iEscalaFactor:null,sEscalaNombre:null,domNombreEscala:null,domTooltipEscala:null}},oEjeUnidad2:{oEje:null,domEje:null,oRango:null,oRangoBarrasNegativas:null,oRangoBarrasPositivas:null,iMinimoValorEje:null,iMaximoValorEje:null,fEscala:null,bEstaEjeUnidadVisible:null,oUnidad:{sUnidadTipoId:null,sUnidadTipoNombre:null,sUnidadTipoAbreviatura:null,iEscalaFactor:null,sEscalaNombre:null,domNombreEscala:null,domTooltipEscala:null}}}},oPilaZIndex:{domPila:null},oRaton:{domRaton:null}},oPuntoDeMira:{domPuntoDeMira:null,domContenedorPuntoDeMira:null},oLeyenda:{domContenedorLeyendas:null,domUlLeyendas:null,aMetricas:{}},oFuente:{sFuenteRepresentacion:null,aFuentesMetricas:[],domFuente:null},oTooltip:{domTooltip:null}}},p.oCalculosInternos={iAntiguoMaxEjeComun:null,iAntiguoMinEjeComun:null,iAntiguoMaxEjeUnidad1:null,iAntiguoMinEjeUnidad1:null,iAntiguoMaxEjeUnidad2:null,iAntiguoMinEjeUnidad2:null},p.iAnchoOriginalSolicitado=u,p.iAltoOriginalSolicitado=r,Responsive.fSetNuevoAltoYAnchoContenedor(p),p.iDuracionAnimacion=a===null||a===undefined||a===!1?0:400,p.iId=f,d3.formatDefaultLocale({decimal:",",thousands:".",grouping:[3],currency:[""," €"]}),p.oFormato=d3.format(","),t++,p.iNumeroInstanciaGestionGrafica=t,p.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.Barras&&p.oGrafica.bRepresentacionEnFuncionTiempo){for(b=0,w=0;w<p.oMetricas.Metricas.length;w++)b<p.oMetricas.Metricas[w].Datos.length&&(b=p.oMetricas.Metricas[w].Datos.length);1.5875*b>p.iAncho&&(p.oGrafica.iTipoRepresentacion=Helper.oTipoRepresentacion.Lineas)}k=function(){Responsive.fPintamosPorRedimensionado(this.oMe)}.bind({oMe:p});window.addEventListener("resize",k);p.fDestruir=function(){var n=this;window.removeEventListener("resize",k);n.oGrafica.d3Contenedor.html("")}})}var t=0;return n.prototype.iNumeroInstanciaGestionGrafica=null,n.prototype.iAnchoMinimo=350,n.prototype.iAltoMinimo=350,n.prototype.iAnchoOriginalSolicitado=350,n.prototype.iAltoOriginalSolicitado=350,n.prototype.oFormato=null,n.prototype.oMargen=null,n.prototype.iAlto=null,n.prototype.iAncho=null,n.prototype.iDuracionAnimacion=null,n.prototype.iPaddingGruposBarras=.2,n.prototype.sTitulo=null,n.prototype.sTituloUrl=null,n.prototype.sSubtitulo=null,n.prototype.oMetricas=null,n.prototype.oCalculosInternos={iAntiguoMaxEjeComun:null,iAntiguoMinEjeComun:null,iAntiguoMaxEjeUnidad1:null,iAntiguoMinEjeUnidad1:null,iAntiguoMaxEjeUnidad2:null,iAntiguoMinEjeUnidad2:null},n.prototype.iId=null,n.prototype.oGestionColores=null,n.prototype.oGrafica={bRepresentacionEnFuncionTiempo:null,iTipoRepresentacion:null,d3Contenedor:null,bOrdenarPorFechaDescendente:null,bComparativaEnFilasEnLugarDeEnColumnas:null,aGradientes:{},oBarras:{},aMetricas:{},oEscalasEjeUnidad:null,oEscalasEjeUnidadFinal:null,oSvg:{domContenedor:null,domSvg:null,oTitulo:{domContenedorTitulo:null,domTitulo:null,domSubtitulo:null},oNombresEscalas:{domContenedor:null},iAncho:null,iAlto:null,oCanvas:{domCanvas:null,oMetricas:{domMetricas:null,oDefiniciones:null,oEjes:{oEjeComun:{oEje:null,domEje:null,domEjeVisible:null,oRango:null},oEjeCuadricula:{oEjeVertical:null,oEjeHorizontal:null,oRango:null,domEjeVertical:null,domEjeHorizontal:null},oEjeUnidad1:{oEje:null,domEje:null,oRango:null,oRangoBarrasNegativas:null,oRangoBarrasPositivas:null,iMinimoValorEje:null,iMaximoValorEje:null,fEscala:null,bEstaEjeUnidadVisible:null,oUnidad:{sUnidadTipoId:null,sUnidadTipoNombre:null,sUnidadTipoAbreviatura:null,iEscalaFactor:null,sEscalaNombre:null,domNombreEscala:null,domTooltipEscala:null}},oEjeUnidad2:{oEje:null,domEje:null,oRango:null,oRangoBarrasNegativas:null,oRangoBarrasPositivas:null,iMinimoValorEje:null,iMaximoValorEje:null,fEscala:null,bEstaEjeUnidadVisible:null,oUnidad:{sUnidadTipoId:null,sUnidadTipoNombre:null,sUnidadTipoAbreviatura:null,iEscalaFactor:null,sEscalaNombre:null,domNombreEscala:null,domTooltipEscala:null}}}},oPilaZIndex:{domPila:null},oRaton:{domRaton:null}},oPuntoDeMira:{domPuntoDeMira:null,domContenedorPuntoDeMira:null},oLeyenda:{domContenedorLeyendas:null,domUlLeyendas:null,aMetricas:{}},oTooltip:{domTooltip:null},oFuente:{sFuenteRepresentacion:null,aFuentesMetricas:[],domFuente:null}}},n.prototype.fRun=function(){var n=this;document.fonts.ready.then(function(){for(var t=0;t<n.iTotalTareas;t++)n.fEjecutarTarea(t)})},n.prototype.iTotalTareas=11,n.prototype.fEjecutarTarea=function(n){var t=this;document.fonts.ready.then(function(){switch(n){case 0:Inicializar.fCrearContenedores(t);break;case 1:Inicializar.fCrearTituloYSubtitulo(t);break;case 2:Inicializar.fCrearEventosDeRatonYPuntoDeMira(t);break;case 3:Inicializar.fCargarMetricas(t);break;case 4:Inicializar.fSetLeyenda(t);break;case 5:EjesYEscalas.fSetNombreEjes(t);break;case 6:Responsive.fSetDimensionesSvg(t);break;case 7:Inicializar.fDibujarEjesYPilaParaZIndex(t);break;case 8:Inicializar.fDibujarCuadricula(t);break;case 9:EjesYEscalas.fSetEscalas(t);break;case 10:Responsive.fPintamosPorRedimensionado(t);t.oGrafica.iTipoRepresentacion===Helper.oTipoRepresentacion.Lineas?(Responsive.fPintamosPorRedimensionado(t),requestAnimationFrame(function(){t.oGrafica.d3Contenedor.node().dataset.cargainicialfinalizada="true"})):requestAnimationFrame(function(){t.oGrafica.d3Contenedor.node().dataset.cargainicialfinalizada="true"});break;default:throw"Tarea no implementada";}})},n}();typeof __EPOEMBED__=="undefined"&&(__EPOEMBED__=!1),function(){__EPOEMBED__||(__EPOEMBED__=!0,loadOembed())}();