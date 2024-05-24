/*
 Copyright (c) 2017 Jed Watson.
   Licensed under the MIT License (MIT), see
   http://jedwatson.github.io/classnames
*/
Liferay.Loader.define("frontend-taglib-clay$classnames@2.2.6/index",["module","exports","require"],function(module,exports,require){var define=undefined;(()});
Liferay.Loader.define("frontend-js-react-web$object-assign@4.1.1/index",["module","exports","require"],function(module,exports,require){var define=undefined;var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;odule.exports=shouldUseNative()?Object.assign:);
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
Liferay.Loader.define("frontend-js-react-web$react@16.12.0/cjs/react.production.min", ['module', 'exports', 'require', 'frontend-js-react-web$object-assign'], function (module, exports, require) {
  var define = undefined;
  var h = require("frontend-js-react-web$object-assign"),
      n = "function" === typeof Symbol && Symbol.for,
      p = n ? Symbol.for("react.element") : 60103,
      q = n ? Symbol.for("react.portal") : 60106,
      r = n ? Symbol.for("react.fragment") : 60107,
      t = n ? Symbol.for("react.strict_mode") : 60108,
      u = n ? Symbol.for("react.profiler") : 60114,
      v = n ? Symbol.for("react.provider") : 60109,
      w = n ? Symbol.for("react.context") : 60110,
      x = n ? Symbol.for("react.forward_ref") : 60112,
      y = n ? Symbol.for("react.suspense") : 60113;n && Symbol.for("react.suspense_list");
  var z = n ? Symbol.for("react.memo") : 60115,
      aa = n ? Symbol.for("react.lazy") : 60116;n && Symbol.for("react.fundamental");n && Symbol.for("react.responder");n && Symbol.for("react.scope");var A = "function" === typeof Symbol && Symbol.iterator;
  function B(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }var C = { isMounted: function () {
      return !1;
    }, enqueueForceUpdate: function () {}, enqueueReplaceState: function () {}, enqueueSetState: function () {} },
      D = {};
  function E(a, b, c) {
    this.props = a;this.context = b;this.refs = D;this.updater = c || C;
  }E.prototype.isReactComponent = {};E.prototype.setState = E.prototype.forceUpdate = function F() {}F.prototype = E.prototype;ar H = G.prototype = new F();
  H.constructor = G;h(H, E.prototype);H.isPureReactComponent = !0;var I = { current: null },
      J = { current: null },
      K = Object.prototype.hasOwnProperty,
      L = { key: !0, ref: !0, __self: !0, __source: !0 };
     O = /\/+/g,
      P = [];    ar X = { Children: { map:  forEach:  count:  toArray:  only: }, createRef:  Component: E, PureComponent: G, createContext:  forwardRef:  lazy:  memo:  useCallback: function (a, b) {
      return W().useCallback(a, b);
    }, useContext: function (a, b) {
      return W().useContext(a, b);
    }, useEffect: function (a, b) {
      return W().useEffect(a, b);
    }, useImperativeHandle: function (a, b, c) {
      return W().useImperativeHandle(a, b, c);
    }, useDebugValue: function () {}, useLayoutEffect: function (a, b) {
      return W().useLayoutEffect(a, b);
    }, useMemo:  useReducer:  useRef: function (a) {
      return W().useRef(a);
    }, useState:  Fragment: r, Profiler: u, StrictMode: t, Suspense: y, createElement: M, cloneElement:  createFactory:  isValidElement: N, version: "16.12.0",
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentDispatcher: I, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: J, IsSomeRendererActing: { current: !1 }, assign: h } },
      Y = { default: X },
      Z = Y && X || Y;module.exports = Z.default || Z;
});
//# sourceMappingURL=react.production.min.js.map
Liferay.Loader.define("frontend-js-react-web$react@16.12.0/index",["module","exports","require","./cjs/react.production.min"],function(module,exports,require){var define=undefined;module.exports=require("./cjs/react.production.min")});
Liferay.Loader.define("@frontend-taglib-clay$clayui/tooltip@3.1.0/lib/Tooltip",["module","exports","require","frontend-taglib-clay$classnames","frontend-js-react-web$react"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.ALIGN_POSITIONS=void 0;var _classnames=_interopRequireDefault(require("frontend-taglib-clay$classnames"));var _react=_interopRequireDefault(require("frontend-js-react-web$react"));function _interopRequireDefault(obj){return obj&&
obj.__esModule?obj:{default:obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=
Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}
var ALIGN_POSITIONS=["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"];exports.ALIGN_POSITIONS=ALIGN_POSITIONS;var ClayTooltip=_react.default.forwardRef(;var _default=ClayTooltip;exports.default=_default});
/** @license React v0.18.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
Liferay.Loader.define("frontend-js-react-web$scheduler@0.18.0/cjs/scheduler.production.min", ['module', 'exports', 'require'], function (module, exports, require) {
  var define = undefined;
  Object.defineProperty(exports, "__esModule", { value: !0 });var f, g, h, k, l;
  if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
    var p = null,
        q = null,
        t = 
        u = Date.now();exports.unstable_now = function () {
      return Date.now() - u;
    };f = g = h = function () {
      clearTimeout(q);
    };k = l = exports.unstable_forceFrameRate = function () {};
  } else {
    var w = window.performance,
        x = window.Date,
        y = window.setTimeout,
        z = window.clearTimeout;if ("undefined" !== typeof console) {
      var A = window.cancelAnimationFrame;"function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function" !== typeof A && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
    }if ("object" === typeof w && "function" === typeof w.now) exports.unstable_now = else {
      var B = x.now();exports.unstable_now = 
    }var C = !1,
        D = null,
        E = -1,
        F = 5,
        G = 0;k = l = function () {};exports.unstable_forceFrameRate = var H = new MessageChannel(),
        I = H.port2;H.port1.onmessage = f = g = h = 
  } r N = [],
      O = [],
      P = 1,
      Q = null,
      R = 3,
      S = !1,
      T = !1,
      U = !1;
     ar Z = l;exports.unstable_ImmediatePriority = 1;exports.unstable_UserBlockingPriority = 2;exports.unstable_NormalPriority = 3;exports.unstable_IdlePriority = 5;exports.unstable_LowPriority = 4;exports.unstable_runWithPriority = 
  exports.unstable_next = 
  exports.unstable_scheduleCallback = exports.unstable_cancelCallback = 
  exports.unstable_wrapCallback = exports.unstable_getCurrentPriorityLevel = function () {
    return R;
  };exports.unstable_shouldYield = exports.unstable_requestPaint = Z;exports.unstable_continueExecution = 
  exports.unstable_pauseExecution = function () {};exports.unstable_getFirstCallbackNode = exports.unstable_Profiling = null;
});
//# sourceMappingURL=scheduler.production.min.js.map
Liferay.Loader.define("frontend-js-react-web$scheduler@0.18.0/index",["module","exports","require","./cjs/scheduler.production.min"],function(module,exports,require){var define=undefined;module.exports=require("./cjs/scheduler.production.min")});
/** @license React v16.12.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';
Liferay.Loader.define("frontend-js-react-web$react-dom@16.12.0/cjs/react-dom.production.min", ['module', 'exports', 'require', 'frontend-js-react-web$react', 'frontend-js-react-web$object-assign', 'frontend-js-react-web$scheduler'], function (module, exports, require) {
  var define = undefined;
  var aa = require("frontend-js-react-web$react"),
      n = require("frontend-js-react-web$object-assign"),
      q = require("frontend-js-react-web$scheduler");f (!aa) throw Error(u(227));var ba = null,
      ca = {};
    ar ea = [],
      fa = {},
      ia = {},
      ja = {};ar la = !1,
      ma = null,
      na = !1,
      oa = null,
      pa = { onError: };  ar sa = null,
      ua = null,
      va = null; ar za = null; var Ca = { injectEventPluginOrder:  injectEventPluginsByName: };
  ar Ea = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ea.hasOwnProperty("ReactCurrentDispatcher") || (Ea.ReactCurrentDispatcher = { current: null });Ea.hasOwnProperty("ReactCurrentBatchConfig") || (Ea.ReactCurrentBatchConfig = { suspense: null });
  var Fa = /^(.*)[\\\/]/,
      w = "function" === typeof Symbol && Symbol.for,
      Ga = w ? Symbol.for("react.element") : 60103,
      Ha = w ? Symbol.for("react.portal") : 60106,
      Ia = w ? Symbol.for("react.fragment") : 60107,
      Ja = w ? Symbol.for("react.strict_mode") : 60108,
      Ka = w ? Symbol.for("react.profiler") : 60114,
      La = w ? Symbol.for("react.provider") : 60109,
      Ma = w ? Symbol.for("react.context") : 60110,
      Na = w ? Symbol.for("react.concurrent_mode") : 60111,
      Oa = w ? Symbol.for("react.forward_ref") : 60112,
      Pa = w ? Symbol.for("react.suspense") : 60113,
      Qa = w ? Symbol.for("react.suspense_list") : 60120,
      Ra = w ? Symbol.for("react.memo") : 60115,
      Sa = w ? Symbol.for("react.lazy") : 60116;w && Symbol.for("react.fundamental");w && Symbol.for("react.responder");w && Symbol.for("react.scope");var Ta = "function" === typeof Symbol && Symbol.iterator;     var Ya = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
      Za = null,
      $a = null,
      ab = null;ion gb() {}
  var hb = eb,
      ib = !1,
      jb = !1;ew Map();var lb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      mb = Object.prototype.hasOwnProperty,
      nb = {},
      ob = {};
   r D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
    D[a] = new B(a, 0, !1, a, null, !1);
  });[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(;["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
    D[a] = new B(a, 2, !1, a.toLowerCase(), null, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
    D[a] = new B(a, 2, !1, a, null, !1);
  });"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
    D[a] = new B(a, 3, !1, a.toLowerCase(), null, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function (a) {
    D[a] = new B(a, 3, !0, a, null, !1);
  });["capture", "download"].forEach(function (a) {
    D[a] = new B(a, 4, !1, a, null, !1);
  });["cols", "rows", "size", "span"].forEach(;["rowSpan", "start"].forEach(function (a) {
    D[a] = new B(a, 5, !1, a.toLowerCase(), null, !1);
  });var sb = /[\-:]([a-z])/g;  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
    var b = a.replace(sb, tb);D[b] = new B(b, 1, !1, a, null, !1);
  });"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
    var b = a.replace(sb, tb);D[b] = new B(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
  });["xml:base", "xml:lang", "xml:space"].forEach(;["tabIndex", "crossOrigin"].forEach(function (a) {
    D[a] = new B(a, 1, !1, a.toLowerCase(), null, !1);
  });
  D.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);["src", "href", "action", "formAction"].forEach(;             r Ob = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
   var Rb,
      Sb = ;
  r Vb = { animationend: Ub("Animation", "AnimationEnd"), animationiteration: Ub("Animation", "AnimationIteration"), animationstart: Ub("Animation", "AnimationStart"), transitionend: Ub("Transition", "TransitionEnd") },
      Wb = {},
      Xb = {};
  Ya && (Xb = document.createElement("div").style, "AnimationEvent" in window || (delete Vb.animationend.animation, delete Vb.animationiteration.animation, delete Vb.animationstart.animation), "TransitionEvent" in window || delete Vb.transitionend.transition);ar Zb = Yb("animationend"),
      $b = Yb("animationiteration"),
      ac = Yb("animationstart"),
      bc = Yb("transitionend"),
      cc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
   var jc,
      kc,
      lc,
      mc = !1,
      nc = [],
      oc = null,
      pc = null,
      qc = null,
      rc = new Map(),
      sc = new Map(),
      tc = [],
      uc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
      vc = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
      unction Tc() {
    return !0;
  } n(E.prototype, { preventDefault:  stopPropagation:  persist:  isPersistent: Uc, destructor: });E.Interface = { type: null, target: null, currentTarget:  eventPhase: null, bubbles: null, cancelable: null, timeStamp:  defaultPrevented: null, isTrusted: null };
  E.extend = Vc(E);  r Yc = E.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
      Zc = E.extend({ clipboardData: }),
      $c = E.extend({ view: null, detail: null }),
      ad = $c.extend({ relatedTarget: null });
    var cd = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
      dd = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4",
    116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
      ed = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; var id = $c.extend({ key:  location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: hd, charCode:  keyCode:  which: }),
      jd = 0,
      kd = 0,
      ld = !1,
      md = !1,
      nd = $c.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: hd, button: null, buttons: null, relatedTarget:  movementX: function (a) {
      if ("movementX" in a) return a.movementX;var b = jd;jd = a.screenX;return ld ? "mousemove" === a.type ? a.screenX - b : 0 : (ld = !0, 0);
    }, movementY: }),
      od = nd.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }),
      pd = nd.extend({ dataTransfer: null }),
      qd = $c.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: hd }),
      rd = E.extend({ propertyName: null,
    elapsedTime: null, pseudoElement: null }),
      sd = nd.extend({ deltaX:  deltaY:  deltaZ: null, deltaMode: null }),
      td = [["blur", "blur", 0], ["cancel", "cancel", 0], ["click", "click", 0], ["close", "close", 0], ["contextmenu", "contextMenu", 0], ["copy", "copy", 0], ["cut", "cut", 0], ["auxclick", "auxClick", 0], ["dblclick", "doubleClick", 0], ["dragend", "dragEnd", 0], ["dragstart", "dragStart", 0], ["drop", "drop", 0], ["focus", "focus", 0], ["input", "input", 0], ["invalid", "invalid", 0], ["keydown", "keyDown", 0], ["keypress", "keyPress", 0], ["keyup", "keyUp", 0], ["mousedown", "mouseDown", 0], ["mouseup", "mouseUp", 0], ["paste", "paste", 0], ["pause", "pause", 0], ["play", "play", 0], ["pointercancel", "pointerCancel", 0], ["pointerdown", "pointerDown", 0], ["pointerup", "pointerUp", 0], ["ratechange", "rateChange", 0], ["reset", "reset", 0], ["seeked", "seeked", 0], ["submit", "submit", 0], ["touchcancel", "touchCancel", 0], ["touchend", "touchEnd", 0], ["touchstart", "touchStart", 0], ["volumechange", "volumeChange", 0], ["drag", "drag", 1], ["dragenter", "dragEnter", 1], ["dragexit", "dragExit", 1], ["dragleave", "dragLeave", 1], ["dragover", "dragOver", 1], ["mousemove", "mouseMove", 1], ["mouseout", "mouseOut", 1], ["mouseover", "mouseOver", 1], ["pointermove", "pointerMove", 1], ["pointerout", "pointerOut", 1], ["pointerover", "pointerOver", 1], ["scroll", "scroll", 1], ["toggle", "toggle", 1], ["touchmove", "touchMove", 1], ["wheel", "wheel", 1], ["abort", "abort", 2], [Zb, "animationEnd", 2], [$b, "animationIteration", 2], [ac, "animationStart", 2], ["canplay", "canPlay", 2], ["canplaythrough", "canPlayThrough", 2], ["durationchange", "durationChange", 2], ["emptied", "emptied", 2], ["encrypted", "encrypted", 2], ["ended", "ended", 2], ["error", "error", 2], ["gotpointercapture", "gotPointerCapture", 2], ["load", "load", 2], ["loadeddata", "loadedData", 2], ["loadedmetadata", "loadedMetadata", 2], ["loadstart", "loadStart", 2], ["lostpointercapture", "lostPointerCapture", 2], ["playing", "playing", 2], ["progress", "progress", 2], ["seeking", "seeking", 2], ["stalled", "stalled", 2], ["suspend", "suspend", 2], ["timeupdate", "timeUpdate", 2], [bc, "transitionEnd", 2], ["waiting", "waiting", 2]],
      ud = {},
      vd = {},
      wd = 0;for (; wd < td.length; wd++) {
    var yd = td[wd],
        zd = yd[0],
        Ad = yd[1],
        Bd = yd[2],
        Cd = "on" + (Ad[0].toUpperCase() + Ad.slice(1)),
        Dd = { phasedRegistrationNames: { bubbled: Cd, captured: Cd + "Capture" }, dependencies: [zd], eventPriority: Bd };ud[Ad] = Dd;vd[zd] = Dd;
  }
  var Ed = { eventTypes: ud, getEventPriority:  extractEvents: },
      Fd = q.unstable_UserBlockingPriority,
      Gd = q.unstable_runWithPriority,
      Hd = Ed.getEventPriority,
      Id = 10,
      Jd = [];
    var Ld = !0;nction Nd(a, b, c) {
    ib || gb();var e = ib;ib = !0;try {
      fb(Pd, a, b, c);
    } finally {
      (ib = e) || kb();
    }
  }     ar Sd = new ("function" === typeof WeakMap ? WeakMap : Map)();    var Td = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0,
    floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
      Ud = ["Webkit", "ms", "Moz", "O"];Object.keys(Td).forEach(;  ar Xd = n({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
    nction ae() {}
   ar he = "$",
      ie = "/$",
      je = "$?",
      ke = "$!",
      le = null,
      me = null;  ar pe = "function" === typeof setTimeout ? setTimeout : void 0,
      qe = "function" === typeof clearTimeout ? clearTimeout : void 0;  ar te = Math.random().toString(36).slice(2),
      ue = "__reactInternalInstance$" + te,
      ve = "__reactEventHandlers$" + te,
      we = "__reactContainere$" + te;
  ze = null,
      Ae = null,
      Be = null;
  ar De = E.extend({ data: null }),
      Ee = E.extend({ data: null }),
      Fe = [9, 13, 27, 32],
      Ge = Ya && "CompositionEvent" in window,
      He = null;Ya && "documentMode" in document && (He = document.documentMode);
  var Ie = Ya && "TextEvent" in window && !He,
      Je = Ya && (!Ge || He && 8 < He && 11 >= He),
      Ke = String.fromCharCode(32),
      Le = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart",
        captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } },
      Me = !1;
  r Pe = !1;    var Se = { eventTypes: Le, extractEvents: },
      Te = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };  var Ve = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };ar Xe = null,
      Ye = null; bf = !1;Ya && (bf = Rd("input") && (!document.documentMode || 9 < document.documentMode));
   jf = { eventTypes: Ve, _isInputEventSupported: bf, extractEvents: function (a, b, c, d) {
      var e = b ? xe(b) : window,
          f = e.nodeName && e.nodeName.toLowerCase();if ("select" === f || "input" === f && "file" === e.type) var g = af;else if (Ue(e)) {
        if (bf) g = hf;else {
          g = ff;var h = ef;
        }
      } else (f = e.nodeName) && "input" === f.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (g = gf);if (g && (g = g(a, b))) return We(g, c, d);h && h(a, e, b);"blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Fb(e, "number", e.value);
    } },
      kf = { mouseEnter: { registrationName: "onMouseEnter",
      dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] } },
      lf,
      mf = { eventTypes: kf, extractEvents: };ar of = "function" === typeof Object.is ? Object.is : nf,
      pf = Object.prototype.hasOwnProperty;  var rf = Ya && "documentMode" in document && 11 >= document.documentMode,
      sf = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
      tf = null,
      uf = null,
      vf = null,
      wf = !1;
    var yf = { eventTypes: sf, extractEvents: };Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));var zf = Cc;sa = ye;ua = zf;va = xe;Ca.injectEventPluginsByName({ SimpleEventPlugin: Ed, EnterLeaveEventPlugin: mf, ChangeEventPlugin: jf, SelectEventPlugin: yf, BeforeInputEventPlugin: Se });new Set();var Af = [],
      Bf = -1;  ar Cf = {},
      J = { current: Cf },
      K = { current: !1 },
      Df = Cf; function Ff(a) {
    G(K, a);G(J, a);
  } var Lf = q.unstable_runWithPriority,
      Mf = q.unstable_scheduleCallback,
      Nf = q.unstable_cancelCallback,
      Of = q.unstable_shouldYield,
      Pf = q.unstable_requestPaint,
      Qf = q.unstable_now,
      Rf = q.unstable_getCurrentPriorityLevel,
      Sf = q.unstable_ImmediatePriority,
      Tf = q.unstable_UserBlockingPriority,
      Uf = q.unstable_NormalPriority,
      Vf = q.unstable_LowPriority,
      Wf = q.unstable_IdlePriority,
      Xf = {},
      Yf = void 0 !== Pf ? Pf : function () {},
      Zf = null,
      $f = null,
      ag = !1,
      bg = Qf(),
      cg = 1E4 > bg ? Qf : 
  kg = 3;r ng = { current: null },
      og = null,
      pg = null,
      qg = null;  r yg = !1;
           unction Lg(a, b) {
    for (; null !== a;) {
      var c = a.callback;if (null !== c) {
        a.callback = null;if ("function" !== typeof c) throw Error(u(191, c));c.call(b);
      }a = a.nextEffect;
    }
  }
  var Mg = Ea.ReactCurrentBatchConfig,
      Ng = new aa.Component().refs;  var Sg = { isMounted:  enqueueSetState:  enqueueReplaceState:  enqueueForceUpdate: };      ar Xg = Array.isArray;
      function $g(a) {
     (a, d, f, h) {
      var k = "object" === typeof f && null !== f && f.type === Ia && null === f.key;k && (f = f.props.children);var l = "object" === typeof f && null !== f;if (l) switch (f.$$typeof) {case Ga:
          a: {
            l = f.key;for (k = d; null !== k;) {
              if (k.key === l) {
                if (7 === k.tag ? f.type === Ia : k.elementType === f.type) {
                  c(a, k.sibling);d = e(k, f.type === Ia ? f.props.children : f.props, h);d.ref = Yg(a, k, f);d.return = a;a = d;break a;
                } else {
                  c(a, k);break;
                }
              } else b(a, k);k = k.sibling;
            }f.type === Ia ? (d = eh(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = ch(f.type, f.key, f.props, null, a.mode, h), h.ref = Yg(a, d, f), h.return = a, a = h);
          }return g(a);case Ha:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);d = e(d, f.children || [], h);d.return = a;a = d;break a;
                } else {
                  c(a, d);break;
                }
              } else b(a, d);d = d.sibling;
            }d = dh(f, a.mode, h);d.return = a;a = d;
          }return g(a);}if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h), d.return = a, a = d) : (c(a, d), d = bh(f, a.mode, h), d.return = a, a = d), g(a);if (Xg(f)) return z(a, d, f, h);if (Ua(f)) return ta(a, d, f, h);l && Zg(a, f);if ("undefined" === typeof f && !k) switch (a.tag) {case 1:case 0:
          throw a = a.type, Error(u(152, a.displayName || a.name || "Component"));}return c(a, d);
    };
  }var fh = $g(!0),
      gh = $g(!1),
      hh = {},
      ih = { current: hh },
      jh = { current: hh },
      kh = { current: hh };  M = { current: 0 };
   var sh = Ea.ReactCurrentDispatcher,
      N = Ea.ReactCurrentBatchConfig,
      th = 0,
      uh = null,
      O = null,
      vh = null,
      wh = null,
      P = null,
      xh = null,
      yh = 0,
      zh = null,
      Ah = 0,
      Bh = !1,
      Ch = null,
      Gh = 0;     function Qh(a) {
    var b = Oh(),
        c = b.queue;if (null === c) throw Error(u(311));c.lastRenderedReducer = a;if (0 < Gh) {
      var d = c.dispatch;if (null !== Ch) {
        var e = Ch.get(c);if (void 0 !== e) {
          Ch.delete(c);var f = b.memoizedState;do f = a(f, e.action), e = e.next; while (null !== e);of(f, b.memoizedState) || (wg = !0);b.memoizedState = f;b.baseUpdate === c.last && (b.baseState = f);c.lastRenderedState = f;return [f, d];
        }
      }return [b.memoizedState, d];
    }d = c.last;var g = b.baseUpdate;f = b.baseState;null !== g ? (null !== d && (d.next = null), d = g.next) : d = null !== d ? d.next : null;if (null !== d) {
      var h = e = null,
          k = d,
          l = !1;do {
        var m = k.expirationTime;m < th ? (l || (l = !0, h = g, e = f), m > yh && (yh = m, Jg(yh))) : (Ig(m, k.suspenseConfig), f = k.eagerReducer === a ? k.eagerState : a(f, k.action));g = k;k = k.next;
      } while (null !== k && k !== d);l || (h = g, e = f);of(f, b.memoizedState) || (wg = !0);b.memoizedState = f;b.baseUpdate = h;b.baseState = e;c.lastRenderedState = f;
    }return [b.memoizedState, c.dispatch];
  }
  nction Xh(a, b) {
    return Vh(516, 192, a, b);
  }  unction Sh(a, b, c) {
    if (!(25 > Gh)) throw Error(u(301));var d = a.alternate;if (a === uh || null !== d && d === uh) {
      if (Bh = !0, a = { expirationTime: th, suspenseConfig: null, action: c, eagerReducer: null, eagerState: null, next: null }, null === Ch && (Ch = new Map()), c = Ch.get(b), void 0 === c) Ch.set(b, a);else {
        for (b = c; null !== b.next;) b = b.next;b.next = a;
      }
    } else {
      var e = Pg(),
          f = Mg.suspense;e = Qg(e, a, f);f = { expirationTime: e, suspenseConfig: f, action: c, eagerReducer: null, eagerState: null, next: null };var g = b.last;if (null === g) f.next = f;else {
        var h = g.next;null !== h && (f.next = h);g.next = f;
      }b.last = f;if (0 === a.expirationTime && (null === d || 0 === d.expirationTime) && (d = b.lastRenderedReducer, null !== d)) try {
        var k = b.lastRenderedState,
            l = d(k, c);f.eagerReducer = d;f.eagerState = l;if (of(l, k)) return;
      } catch (m) {} finally {}Rg(a, e);
    }
  }
  var Lh = { readContext: xg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useResponder: Q, useDeferredValue: Q, useTransition: Q },
      Jh = { readContext: xg, useCallback: ai, useContext: xg, useEffect: Xh, useImperativeHandle: function (a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;return Vh(4, 36, Zh.bind(null, b, a), c);
    }, useLayoutEffect: function (a, b) {
      return Vh(4, 36, a, b);
    }, useMemo:  useReducer:  useRef:  useState: Rh, useDebugValue: $h, useResponder: rh, useDeferredValue: function (a, b) {
      var c = Rh(a),
          d = c[0],
          e = c[1];Xh(function () {
        q.unstable_next(function () {
          var c = N.suspense;N.suspense = void 0 === b ? null : b;try {
            e(a);
          } finally {
            N.suspense = c;
          }
        });
      }, [a, b]);return d;
    }, useTransition: function (a) {
      var b = Rh(!1),
          c = b[0],
          d = b[1];return [ai(function (b) {
        d(!0);q.unstable_next(function () {
          var c = N.suspense;N.suspense = void 0 === a ? null : a;try {
            d(!1), b();
          } finally {
            N.suspense = c;
          }
        });
      }, [a, c]), c];
    } },
      Kh = { readContext: xg, useCallback: bi, useContext: xg, useEffect: Yh, useImperativeHandle:  useLayoutEffect:  useMemo:  useReducer: Qh, useRef:  useState: Th, useDebugValue: $h, useResponder: rh, useDeferredValue: function (a, b) {
      var c = Th(a),
          d = c[0],
          e = c[1];Yh( [a, b]);return d;
    }, useTransition: },
      ci = null,
      di = null,
      ei = !1;       ar mi = Ea.ReactCurrentOwner,
      wg = !1;      var xi = { dehydrated: null, retryTime: 0 };
       r Hi, Ii, Ji, Ki;
  Hi = Ii = function () {};
  Ji = function (a, b, c, d, e) {
    var f = a.memoizedProps;if (f !== d) {
      var g = b.stateNode;lh(ih.current);a = null;switch (c) {case "input":
          f = Ab(g, f);d = Ab(g, d);a = [];break;case "option":
          f = Ib(g, f);d = Ib(g, d);a = [];break;case "select":
          f = n({}, f, { value: void 0 });d = n({}, d, { value: void 0 });a = [];break;case "textarea":
          f = Kb(g, f);d = Kb(g, d);a = [];break;default:
          "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = ae);}Yd(c, d);var h, k;c = null;for (h in f) if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h]) if ("style" === h) for (k in g = f[h], g) g.hasOwnProperty(k) && (c || (c = {}), c[k] = "");else "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (ia.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));for (h in d) {
        var l = d[h];g = null != f ? f[h] : void 0;if (d.hasOwnProperty(h) && l !== g && (null != l || null != g)) if ("style" === h) {
          if (g) {
            for (k in g) !g.hasOwnProperty(k) || l && l.hasOwnProperty(k) || (c || (c = {}), c[k] = "");for (k in l) l.hasOwnProperty(k) && g[k] !== l[k] && (c || (c = {}), c[k] = l[k]);
          } else c || (a || (a = []), a.push(h, c)), c = l;
        } else "dangerouslySetInnerHTML" === h ? (l = l ? l.__html : void 0, g = g ? g.__html : void 0, null != l && g !== l && (a = a || []).push(h, "" + l)) : "children" === h ? g === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(h, "" + l) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (ia.hasOwnProperty(h) ? (null != l && $d(e, h), a || g === l || (a = [])) : (a = a || []).push(h, l));
      }c && (a = a || []).push("style", c);e = a;(b.updateQueue = e) && Ci(b);
    }
  };Ki = 
     var Oi = "function" === typeof WeakSet ? WeakSet : Set;    function Vi(a, b, c) {
    "function" === typeof Wi && Wi(b);switch (b.tag) {case 0:case 11:case 14:case 15:
        a = b.updateQueue;if (null !== a && (a = a.lastEffect, null !== a)) {
          var d = a.next;fg(97 < c ? 97 : c, ;
        }break;case 1:
        Si(b);c = b.stateNode;"function" === typeof c.componentWillUnmount && Qi(b, c);break;case 5:
        Si(b);break;case 4:
        Xi(a, b, c);}
  }
   function $i(a) {
    a: {
      for (var b = a.return; null !== b;) {
        if (Zi(b)) {
          var c = b;break a;
        }b = b.return;
      }throw Error(u(160));
    }b = c.stateNode;switch (c.tag) {case 5:
        var d = !1;break;case 3:
        b = b.containerInfo;d = !0;break;case 4:
        b = b.containerInfo;d = !0;break;default:
        throw Error(u(161));}c.effectTag & 16 && (Tb(b, ""), c.effectTag &= -17);a: b: for (c = a;;) {
      for (; null === c.sibling;) {
        if (null === c.return || Zi(c.return)) {
          c = null;break a;
        }c = c.return;
      }c.sibling.return = c.return;for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
        if (c.effectTag & 2) continue b;
        if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
      }if (!(c.effectTag & 2)) {
        c = c.stateNode;break a;
      }
    }for (var e = a;;) {
      var f = 5 === e.tag || 6 === e.tag;if (f) {
        var g = f ? e.stateNode : e.stateNode.instance;if (c) {
          if (d) {
            f = b;var h = g;g = c;8 === f.nodeType ? f.parentNode.insertBefore(h, g) : f.insertBefore(h, g);
          } else b.insertBefore(g, c);
        } else d ? (h = b, 8 === h.nodeType ? (f = h.parentNode, f.insertBefore(g, h)) : (f = h, f.appendChild(g)), h = h._reactRootContainer, null !== h && void 0 !== h || null !== f.onclick || (f.onclick = ae)) : b.appendChild(g);
      } else if (4 !== e.tag && null !== e.child) {
        e.child.return = e;e = e.child;continue;
      }if (e === a) break;for (; null === e.sibling;) {
        if (null === e.return || e.return === a) return;e = e.return;
      }e.sibling.return = e.return;e = e.sibling;
    }
  }
  function Xi(a, b, c) {
    for (var d = b, e = !1, f, g;;) {
      if (!e) {
        e = d.return;a: for (;;) {
          if (null === e) throw Error(u(160));f = e.stateNode;switch (e.tag) {case 5:
              g = !1;break a;case 3:
              f = f.containerInfo;g = !0;break a;case 4:
              f = f.containerInfo;g = !0;break a;}e = e.return;
        }e = !0;
      }if (5 === d.tag || 6 === d.tag) {
        a: for (var h = a, k = d, m = k;;) if (Vi(h, m, c), null !== m.child && 4 !== m.tag) m.child.return = m, m = m.child;else {
          if (m === k) break;for (; null === m.sibling;) {
            if (null === m.return || m.return === k) break a;m = m.return;
          }m.sibling.return = m.return;m = m.sibling;
        }g ? (h = f, k = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
      } else if (4 === d.tag) {
        if (null !== d.child) {
          f = d.stateNode.containerInfo;g = !0;d.child.return = d;d = d.child;continue;
        }
      } else if (Vi(a, d, c), null !== d.child) {
        d.child.return = d;d = d.child;continue;
      }if (d === b) break;for (; null === d.sibling;) {
        if (null === d.return || d.return === b) return;d = d.return;4 === d.tag && (e = !1);
      }d.sibling.return = d.return;d = d.sibling;
    }
  }
  r ej = "function" === typeof WeakMap ? WeakMap : Map;
      var kj = Math.ceil,
      lj = Ea.ReactCurrentDispatcher,
      mj = Ea.ReactCurrentOwner,
      S = 0,
      nj = 8,
      oj = 16,
      pj = 32,
      qj = 0,
      rj = 1,
      sj = 2,
      tj = 3,
      uj = 4,
      vj = 5,
      T = S,
      U = null,
      V = null,
      W = 0,
      X = qj,
      wj = null,
      xj = 1073741823,
      yj = 1073741823,
      zj = null,
      Aj = 0,
      Bj = !1,
      bj = 0,
      Cj = 500,
      Y = null,
      gj = !1,
      hj = null,
      jj = null,
      Dj = !1,
      Ej = null,
      Fj = 90,
      Gj = null,
      Hj = 0,
      Ij = null,
      Jj = 0;                  function Wj(a, b) {
    do {
      try {
        rg();Mh();if (null === V || null === V.return) return X = rj, wj = b, null;a: {
          var c = a,
              d = V.return,
              e = V,
              f = b;b = W;e.effectTag |= 2048;e.firstEffect = e.lastEffect = null;if (null !== f && "object" === typeof f && "function" === typeof f.then) {
            var g = f,
                h = 0 !== (M.current & 1),
                k = d;do {
              var l;if (l = 13 === k.tag) {
                var m = k.memoizedState;if (null !== m) l = null !== m.dehydrated ? !0 : !1;else {
                  var C = k.memoizedProps;l = void 0 === C.fallback ? !1 : !0 !== C.unstable_avoidThisFallback ? !0 : h ? !1 : !0;
                }
              }if (l) {
                var y = k.updateQueue;if (null === y) {
                  var H = new Set();
                  H.add(g);k.updateQueue = H;
                } else y.add(g);if (0 === (k.mode & 2)) {
                  k.effectTag |= 64;e.effectTag &= -2981;if (1 === e.tag) if (null === e.alternate) e.tag = 17;else {
                    var z = Bg(1073741823, null);z.tag = 2;Dg(e, z);
                  }e.expirationTime = 1073741823;break a;
                }f = void 0;e = b;var ta = c.pingCache;null === ta ? (ta = c.pingCache = new ej(), f = new Set(), ta.set(g, f)) : (f = ta.get(g), void 0 === f && (f = new Set(), ta.set(g, f)));if (!f.has(e)) {
                  f.add(e);var r = dk.bind(null, c, g, e);g.then(r, r);
                }k.effectTag |= 4096;k.expirationTime = b;break a;
              }k = k.return;
            } while (null !== k);f = Error((Wa(e.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Xa(e));
          }X !== vj && (X = sj);f = Ni(f, e);k = d;do {
            switch (k.tag) {case 3:
                g = f;k.effectTag |= 4096;k.expirationTime = b;var x = fj(k, g, b);Eg(k, x);break a;case 1:
                g = f;var A = k.type,
                    p = k.stateNode;if (0 === (k.effectTag & 64) && ("function" === typeof A.getDerivedStateFromError || null !== p && "function" === typeof p.componentDidCatch && (null === jj || !jj.has(p)))) {
                  k.effectTag |= 4096;k.expirationTime = b;var t = ij(k, g, b);Eg(k, t);break a;
                }}k = k.return;
          } while (null !== k);
        }V = ek(V);
      } catch (v) {
        b = v;continue;
      }break;
    } while (1);
  }function ek(a) {
    V = a;do {
      var b = V.alternate;a = V.return;if (0 === (V.effectTag & 2048)) {
        a: {
          var c = b;b = V;var d = W;var e = b.pendingProps;switch (b.tag) {case 2:
              break;case 16:
              break;case 15:case 0:
              break;case 1:
              L(b.type) && Ff(b);break;case 3:
              nh(b);Gf(b);e = b.stateNode;e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null);(null === c || null === c.child) && ki(b) && Ci(b);Ii(b);break;case 5:
              ph(b);d = lh(kh.current);var f = b.type;if (null !== c && null != b.stateNode) Ji(c, b, f, e, d), c.ref !== b.ref && (b.effectTag |= 128);else if (e) {
                var g = lh(ih.current);if (ki(b)) {
                  e = b;var h = e.stateNode;c = e.type;var k = e.memoizedProps,
                      l = d;h[ue] = e;h[ve] = k;f = void 0;d = h;switch (c) {case "iframe":case "object":case "embed":
                      F("load", d);break;case "video":case "audio":
                      for (h = 0; h < cc.length; h++) F(cc[h], d);break;case "source":
                      F("error", d);break;case "img":case "image":case "link":
                      F("error", d);F("load", d);break;case "form":
                      F("reset", d);F("submit", d);break;case "details":
                      F("toggle", d);break;case "input":
                      Bb(d, k);F("invalid", d);$d(l, "onChange");break;case "select":
                      d._wrapperState = { wasMultiple: !!k.multiple };F("invalid", d);$d(l, "onChange");break;case "textarea":
                      Lb(d, k), F("invalid", d), $d(l, "onChange");}Yd(c, k);h = null;for (f in k) k.hasOwnProperty(f) && (g = k[f], "children" === f ? "string" === typeof g ? d.textContent !== g && (h = ["children", g]) : "number" === typeof g && d.textContent !== "" + g && (h = ["children", "" + g]) : ia.hasOwnProperty(f) && null != g && $d(l, f));switch (c) {case "input":
                      yb(d);Gb(d, k, !0);break;case "textarea":
                      yb(d);Nb(d, k);break;case "select":case "option":
                      break;default:
                      "function" === typeof k.onClick && (d.onclick = ae);}f = h;e.updateQueue = f;e = null !== f ? !0 : !1;e && Ci(b);
                } else {
                  c = b;l = f;k = e;h = 9 === d.nodeType ? d : d.ownerDocument;g === Ob.html && (g = Pb(l));g === Ob.html ? "script" === l ? (k = h.createElement("div"), k.innerHTML = "<script>\x3c/script>", h = k.removeChild(k.firstChild)) : "string" === typeof k.is ? h = h.createElement(l, { is: k.is }) : (h = h.createElement(l), "select" === l && (l = h, k.multiple ? l.multiple = !0 : k.size && (l.size = k.size))) : h = h.createElementNS(g, l);k = h;k[ue] = c;k[ve] = e;Hi(k, b, !1, !1);b.stateNode = k;l = f;c = e;var m = d,
                      C = Zd(l, c);switch (l) {case "iframe":case "object":case "embed":
                      F("load", k);d = c;break;case "video":case "audio":
                      for (d = 0; d < cc.length; d++) F(cc[d], k);d = c;break;case "source":
                      F("error", k);d = c;break;case "img":case "image":case "link":
                      F("error", k);F("load", k);d = c;break;case "form":
                      F("reset", k);F("submit", k);d = c;break;case "details":
                      F("toggle", k);d = c;break;case "input":
                      Bb(k, c);d = Ab(k, c);F("invalid", k);$d(m, "onChange");break;case "option":
                      d = Ib(k, c);break;case "select":
                      k._wrapperState = { wasMultiple: !!c.multiple };d = n({}, c, { value: void 0 });F("invalid", k);$d(m, "onChange");break;case "textarea":
                      Lb(k, c);d = Kb(k, c);F("invalid", k);$d(m, "onChange");break;default:
                      d = c;}Yd(l, d);h = void 0;g = l;var y = k,
                      H = d;for (h in H) if (H.hasOwnProperty(h)) {
                    var z = H[h];"style" === h ? Wd(y, z) : "dangerouslySetInnerHTML" === h ? (z = z ? z.__html : void 0, null != z && Sb(y, z)) : "children" === h ? "string" === typeof z ? ("textarea" !== g || "" !== z) && Tb(y, z) : "number" === typeof z && Tb(y, "" + z) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (ia.hasOwnProperty(h) ? null != z && $d(m, h) : null != z && vb(y, h, z, C));
                  }switch (l) {case "input":
                      yb(k);
                      Gb(k, c, !1);break;case "textarea":
                      yb(k);Nb(k, c);break;case "option":
                      null != c.value && k.setAttribute("value", "" + ub(c.value));break;case "select":
                      d = k;d.multiple = !!c.multiple;k = c.value;null != k ? Jb(d, !!c.multiple, k, !1) : null != c.defaultValue && Jb(d, !!c.multiple, c.defaultValue, !0);break;default:
                      "function" === typeof d.onClick && (k.onclick = ae);}(e = ne(f, e)) && Ci(b);
                }null !== b.ref && (b.effectTag |= 128);
              } else if (null === b.stateNode) throw Error(u(166));break;case 6:
              if (c && null != b.stateNode) Ki(c, b, c.memoizedProps, e);else {
                if ("string" !== typeof e && null === b.stateNode) throw Error(u(166));d = lh(kh.current);lh(ih.current);ki(b) ? (e = b, f = e.stateNode, d = e.memoizedProps, f[ue] = e, (e = f.nodeValue !== d) && Ci(b)) : (f = b, e = (9 === d.nodeType ? d : d.ownerDocument).createTextNode(e), e[ue] = f, b.stateNode = e);
              }break;case 11:
              break;case 13:
              G(M, b);e = b.memoizedState;if (0 !== (b.effectTag & 64)) {
                b.expirationTime = d;break a;
              }e = null !== e;f = !1;null === c ? void 0 !== b.memoizedProps.fallback && ki(b) : (d = c.memoizedState, f = null !== d, e || null === d || (d = c.child.sibling, null !== d && (k = b.firstEffect, null !== k ? (b.firstEffect = d, d.nextEffect = k) : (b.firstEffect = b.lastEffect = d, d.nextEffect = null), d.effectTag = 8)));if (e && !f && 0 !== (b.mode & 2)) if (null === c && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) X === qj && (X = tj);else {
                if (X === qj || X === tj) X = uj;0 !== Aj && null !== U && (Mj(U, W), Nj(U, Aj));
              }if (e || f) b.effectTag |= 4;break;case 7:
              break;case 8:
              break;case 12:
              break;case 4:
              nh(b);Ii(b);break;case 10:
              tg(b);break;case 9:
              break;case 14:
              break;case 17:
              L(b.type) && Ff(b);break;case 19:
              G(M, b);e = b.memoizedState;if (null === e) break;f = 0 !== (b.effectTag & 64);k = e.rendering;if (null === k) {
                if (f) Li(e, !1);else {
                  if (X !== qj || null !== c && 0 !== (c.effectTag & 64)) for (c = b.child; null !== c;) {
                    k = qh(c);if (null !== k) {
                      b.effectTag |= 64;Li(e, !1);f = k.updateQueue;null !== f && (b.updateQueue = f, b.effectTag |= 4);null === e.lastEffect && (b.firstEffect = null);b.lastEffect = e.lastEffect;e = d;for (f = b.child; null !== f;) d = f, c = e, d.effectTag &= 2, d.nextEffect = null, d.firstEffect = null, d.lastEffect = null, k = d.alternate, null === k ? (d.childExpirationTime = 0, d.expirationTime = c, d.child = null, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null) : (d.childExpirationTime = k.childExpirationTime, d.expirationTime = k.expirationTime, d.child = k.child, d.memoizedProps = k.memoizedProps, d.memoizedState = k.memoizedState, d.updateQueue = k.updateQueue, c = k.dependencies, d.dependencies = null === c ? null : { expirationTime: c.expirationTime, firstContext: c.firstContext, responders: c.responders }), f = f.sibling;I(M, M.current & 1 | 2, b);b = b.child;break a;
                    }c = c.sibling;
                  }
                }
              } else {
                if (!f) if (c = qh(k), null !== c) {
                  if (b.effectTag |= 64, f = !0, d = c.updateQueue, null !== d && (b.updateQueue = d, b.effectTag |= 4), Li(e, !0), null === e.tail && "hidden" === e.tailMode && !k.alternate) {
                    b = b.lastEffect = e.lastEffect;null !== b && (b.nextEffect = null);break;
                  }
                } else cg() > e.tailExpiration && 1 < d && (b.effectTag |= 64, f = !0, Li(e, !1), b.expirationTime = b.childExpirationTime = d - 1);e.isBackwards ? (k.sibling = b.child, b.child = k) : (d = e.last, null !== d ? d.sibling = k : b.child = k, e.last = k);
              }if (null !== e.tail) {
                0 === e.tailExpiration && (e.tailExpiration = cg() + 500);d = e.tail;e.rendering = d;e.tail = d.sibling;
                e.lastEffect = b.lastEffect;d.sibling = null;e = M.current;e = f ? e & 1 | 2 : e & 1;I(M, e, b);b = d;break a;
              }break;case 20:
              break;case 21:
              break;default:
              throw Error(u(156, b.tag));}b = null;
        }e = V;if (1 === W || 1 !== e.childExpirationTime) {
          f = 0;for (d = e.child; null !== d;) c = d.expirationTime, k = d.childExpirationTime, c > f && (f = c), k > f && (f = k), d = d.sibling;e.childExpirationTime = f;
        }if (null !== b) return b;null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = V.firstEffect), null !== V.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = V.firstEffect), a.lastEffect = V.lastEffect), 1 < V.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = V : a.firstEffect = V, a.lastEffect = V));
      } else {
        b = Mi(V, W);if (null !== b) return b.effectTag &= 2047, b;null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
      }b = V.sibling;if (null !== b) return b;V = a;
    } while (null !== V);X === qj && (X = vj);return null;
  }    r gk = function (a, b, c) {
    var d = b.expirationTime;if (null !== a) {
      var e = b.pendingProps;if (a.memoizedProps !== e || K.current) wg = !0;else {
        if (d < c) {
          wg = !1;switch (b.tag) {case 3:
              wi(b);li();break;case 5:
              oh(b);if (b.mode & 4 && 1 !== c && e.hidden) return b.expirationTime = b.childExpirationTime = 1, null;break;case 1:
              L(b.type) && Jf(b);break;case 4:
              mh(b, b.stateNode.containerInfo);break;case 10:
              sg(b, b.memoizedProps.value);break;case 13:
              if (null !== b.memoizedState) {
                d = b.child.childExpirationTime;if (0 !== d && d >= c) return yi(a, b, c);I(M, M.current & 1, b);b = oi(a, b, c);return null !== b ? b.sibling : null;
              }I(M, M.current & 1, b);break;case 19:
              d = b.childExpirationTime >= c;if (0 !== (a.effectTag & 64)) {
                if (d) return Bi(a, b, c);b.effectTag |= 64;
              }e = b.memoizedState;null !== e && (e.rendering = null, e.tail = null);I(M, M.current, b);if (!d) return null;}return oi(a, b, c);
        }wg = !1;
      }
    } else wg = !1;b.expirationTime = 0;switch (b.tag) {case 2:
        d = b.type;null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);a = b.pendingProps;e = Ef(b, J.current);vg(b, c);e = Ih(null, b, d, a, e, c);b.effectTag |= 1;if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          b.tag = 1;Mh();if (L(d)) {
            var f = !0;Jf(b);
          } else f = !1;b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;var g = d.getDerivedStateFromProps;"function" === typeof g && Og(b, d, g, a);e.updater = Sg;b.stateNode = e;e._reactInternalFiber = b;Wg(b, d, a, c);b = vi(null, b, d, !0, f, c);
        } else b.tag = 0, R(null, b, e, c), b = b.child;return b;case 16:
        e = b.elementType;null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);a = b.pendingProps;Va(e);if (1 !== e._status) throw e._result;
        e = e._result;b.type = e;f = b.tag = nk(e);a = mg(e, a);switch (f) {case 0:
            b = si(null, b, e, a, c);break;case 1:
            b = ui(null, b, e, a, c);break;case 11:
            b = ni(null, b, e, a, c);break;case 14:
            b = pi(null, b, e, mg(e.type, a), d, c);break;default:
            throw Error(u(306, e, ""));}return b;case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : mg(d, e), si(a, b, d, e, c);case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : mg(d, e), ui(a, b, d, e, c);case 3:
        wi(b);d = b.updateQueue;if (null === d) throw Error(u(282));e = b.memoizedState;e = null !== e ? e.element : null;Hg(b, d, b.pendingProps, null, c);d = b.memoizedState.element;if (d === e) li(), b = oi(a, b, c);else {
          if (e = b.stateNode.hydrate) di = re(b.stateNode.containerInfo.firstChild), ci = b, e = ei = !0;if (e) for (c = gh(b, null, d, c), b.child = c; c;) c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;else R(a, b, d, c), li();b = b.child;
        }return b;case 5:
        return oh(b), null === a && ii(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, oe(d, e) ? g = null : null !== f && oe(d, f) && (b.effectTag |= 16), ti(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b;case 6:
        return null === a && ii(b), null;case 13:
        return yi(a, b, c);case 4:
        return mh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = fh(b, null, d, c) : R(a, b, d, c), b.child;case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : mg(d, e), ni(a, b, d, e, c);case 7:
        return R(a, b, b.pendingProps, c), b.child;case 8:
        return R(a, b, b.pendingProps.children, c), b.child;case 12:
        return R(a, b, b.pendingProps.children, c), b.child;case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;g = b.memoizedProps;f = e.value;sg(b, f);if (null !== g) {
            var h = g.value;f = of(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;if (0 === f) {
              if (g.children === e.children && !K.current) {
                b = oi(a, b, c);break a;
              }
            } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
              var k = h.dependencies;if (null !== k) {
                g = h.child;for (var l = k.firstContext; null !== l;) {
                  if (l.context === d && 0 !== (l.observedBits & f)) {
                    1 === h.tag && (l = Bg(c, null), l.tag = 2, Dg(h, l));h.expirationTime < c && (h.expirationTime = c);l = h.alternate;null !== l && l.expirationTime < c && (l.expirationTime = c);ug(h.return, c);k.expirationTime < c && (k.expirationTime = c);break;
                  }l = l.next;
                }
              } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;if (null !== g) g.return = h;else for (g = h; null !== g;) {
                if (g === b) {
                  g = null;break;
                }h = g.sibling;if (null !== h) {
                  h.return = g.return;g = h;break;
                }g = g.return;
              }h = g;
            }
          }R(a, b, e.children, c);b = b.child;
        }return b;case 9:
        return e = b.type, f = b.pendingProps, d = f.children, vg(b, c), e = xg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child;
      case 14:
        return e = b.type, f = mg(e, b.pendingProps), f = mg(e.type, f), pi(a, b, e, f, d, c);case 15:
        return ri(a, b, b.type, b.pendingProps, d, c);case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : mg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = !0, Jf(b)) : a = !1, vg(b, c), Ug(b, d, e, c), Wg(b, d, e, c), vi(null, b, d, !0, a, c);case 19:
        return Bi(a, b, c);}throw Error(u(156, b.tag));
  };
  var kk = null,
      Wi = null;
              .prototype.render = vk.prototype.unmount = 
    jc = kc = lc = 
  Za = eb = bk;
  fb = gb = hb =   var Ck = { createPortal: Bk, findDOMNode:  hydrate: function (a, b, c) {
      if (!wk(b)) throw Error(u(200));return zk(null, a, b, !0, c);
    }, render:  unstable_renderSubtreeIntoContainer:  unmountComponentAtNode:  unstable_createPortal:  unstable_batchedUpdates: bk, flushSync:  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { Events: [Cc, xe, ye, Ca.injectEventPluginsByName, fa, Sc,  cb, db, Pd, Ba, Sj, { current: !1 }] } };
  (({ findFiberByHostInstance: Fc, bundleType: 0, version: "16.12.0",
    rendererPackageName: "react-dom" });var Dk = { default: Ck },
      Ek = Dk && Ck || Dk;module.exports = Ek.default || Ek;
});
//# sourceMappingURL=react-dom.production.min.js.map
Liferay.Loader.define("frontend-js-react-web$react-dom@16.12.0/index",["module","exports","require","./cjs/react-dom.production.min"],function(module,exports,require){var define=undefined;function checkDCE(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}checkDCE();module.exports=require("./cjs/react-dom.production.min")});
Liferay.Loader.define("@frontend-taglib-clay$clayui/shared@3.1.0/lib/Portal",["module","exports","require","frontend-js-react-web$react","frontend-js-react-web$react-dom"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.ClayPortal=void 0;var _react=_interopRequireDefault(require("frontend-js-react-web$react"));var _reactDom=require("frontend-js-react-web$react-dom");function _interopRequireDefault(obj){return obj&&obj.__esModule?
obj:{default:obj}}var ClayPortalContext=_react.default.createContext(null);ClayPortalContext.displayName="ClayPortalContext";var ClayPortal=function ClayPortal(_ref){var children=_ref.children,containerRef=_ref.containerRef,subPortalRef=_ref.subPortalRef;var parentPortalRef=_react.default.useContext(ClayPortalContext);var portalRef=_react.default.useRef(typeof document!=="undefined"?document.createElement("div"):null);_react.default.useEffect(function(){var closestParent=parentPortalRef&&parentPortalRef.current?
parentPortalRef.current:document.body;var elToMountTo=containerRef&&containerRef.current?containerRef.current:closestParent;if(elToMountTo&&portalRef.current)elToMountTo.appendChild(portalRef.current);return function(){if(elToMountTo&&portalRef.current)elToMountTo.removeChild(portalRef.current)}},[containerRef,parentPortalRef]);var content=_react.default.createElement(ClayPortalContext.Provider,{value:subPortalRef?subPortalRef:portalRef},children);return portalRef.current?(0,_reactDom.createPortal)(content,
portalRef.current):content};exports.ClayPortal=ClayPortal});
Liferay.Loader.define("@frontend-taglib-clay$clayui/shared@3.1.0/lib/useFocusManagement",["module","exports","require","frontend-js-react-web$react"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.useFocusManagement=useFocusManagement;var _react=_interopRequireDefault(require("frontend-js-react-web$react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var TAB_KEY_CODE=9;var HostComponent=5;
function useFocusManagement(scope){var nextElementOutsideScopeRef=_react.default.useRef(null);var isFiberHostComponentFocusable=function isFiberHostComponentFocusable(fiber){if(fiber.tag!==HostComponent)return false;var memoizedProps=fiber.memoizedProps,stateNode=fiber.stateNode,type=fiber.type;if(!stateNode.offsetParent)return false;if(memoizedProps.disabled)return false;if(memoizedProps.tabIndex!=null&&memoizedProps.tabIndex>=-1||memoizedProps.contentEditable===true)return true;if(type==="a"||type===
"area")return!!memoizedProps.href&&memoizedProps.rel!=="ignore";if(type==="input")return memoizedProps.type!=="hidden"&&memoizedProps.type!=="file";return type==="button"||type==="textarea"||type==="object"||type==="select"||type==="iframe"||type==="embed"};var collectFocusableElements=var getFiber=function getFiber(scope){if(!scope.current)return null;var internalKey=Object.keys(scope.current).find(;if(internalKey)return scope.current[internalKey];return null};var getFocusableElementsInScope=var handleNextElementOutsideScope=function handleNextElementOutsideScope(event){if(nextElementOutsideScopeRef.current!==event.target)return;if(nextElementOutsideScopeRef.current!==event.currentTarget){event.currentTarget.removeEventListener("keydown",handleNextElementOutsideScope);return}if(event.keyCode===TAB_KEY_CODE&&event.shiftKey){var elements=getFocusableElementsInScope(getFiber(scope));if(elements.length===0){if(event.currentTarget)event.currentTarget.removeEventListener("keydown",
handleNextElementOutsideScope);return}event.preventDefault();elements[elements.length-1].focus()}};var setInteractionObserver=function setInteractionObserver(element){if(nextElementOutsideScopeRef.current!==null)nextElementOutsideScopeRef.current.removeEventListener("keydown",handleNextElementOutsideScope);nextElementOutsideScopeRef.current=element;nextElementOutsideScopeRef.current.addEventListener("keydown",handleNextElementOutsideScope)};var getElementEdge=function getElementEdge(fiberNode,backwards){var focusableElementsEdge=
[];var fiberNodeReturn=fiberNode.return;if(fiberNodeReturn!==null)collectFocusableElements(fiberNodeReturn,focusableElementsEdge);if(!focusableElementsEdge.length)return null;var nodePosition=focusableElementsEdge.findIndex(;var nextElement=null;if(backwards)nextElement=focusableElementsEdge[nodePosition-1];else nextElement=focusableElementsEdge[nodePosition+1];if(!nextElement&&fiberNodeReturn.return)return getElementEdge(fiberNodeReturn.return,backwards);
return nextElement};var moveFocusInScope=function moveFocusInScope(scope){var backwards=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var elements=getFocusableElementsInScope(scope);if(elements.length===0)return null;var node=document.activeElement;if(!node)return;var position=elements.indexOf(node);var lastPosition=elements.length-1;var nextElement=null;if(backwards)if(position===0)nextElement=getElementEdge(scope,backwards);else nextElement=elements[position-1];else if(position===
lastPosition){nextElement=getElementEdge(scope,backwards);if(nextElement)setInteractionObserver(nextElement)}else nextElement=elements[position+1];if(nextElement){nextElement.focus();return nextElement}return null};_react.default.useEffect(function(){if(nextElementOutsideScopeRef.current){nextElementOutsideScopeRef.current.removeEventListener("keydown",handleNextElementOutsideScope);nextElementOutsideScopeRef.current=null}},[scope]);return{focusNext:
focusPrevious:}});
Liferay.Loader.define("@frontend-taglib-clay$clayui/shared@3.1.0/lib/FocusScope",["module","exports","require","frontend-js-react-web$react","./useFocusManagement"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.FocusScope=void 0;var _react=_interopRequireDefault(require("frontend-js-react-web$react"));var _useFocusManagement=require("./useFocusManagement");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol")_typeof=function _typeof(obj){return typeof obj};else _typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};return _typeof(obj)}var ARROW_DOWN_KEY_CODE=40;var ARROW_UP_KEY_CODE=38;var ARROW_RIGHT_KEY_CODE=39;var ARROW_LEFT_KEY_CODE=37;var TAB_KEY_CODE=9;var FocusScope=function FocusScope(_ref){var _ref$arrowKeysLeftRig=
_ref.arrowKeysLeftRight,arrowKeysLeftRight=_ref$arrowKeysLeftRig===void 0?false:_ref$arrowKeysLeftRig,_ref$arrowKeysUpDown=_ref.arrowKeysUpDown,arrowKeysUpDown=_ref$arrowKeysUpDown===void 0?true:_ref$arrowKeysUpDown,children=_ref.children;var elRef=_react.default.useRef(null);var focusManager=(0,_useFocusManagement.useFocusManagement)(elRef);var _onKeyDown=function onKeyDown(event){var keyCode=event.keyCode,shiftKey=event.shiftKey;if(arrowKeysUpDown&&keyCode===ARROW_DOWN_KEY_CODE||arrowKeysLeftRight&&
keyCode===ARROW_RIGHT_KEY_CODE||keyCode===TAB_KEY_CODE&&!shiftKey){event.preventDefault();focusManager.focusNext()}else if(arrowKeysUpDown&&keyCode===ARROW_UP_KEY_CODE||arrowKeysLeftRight&&keyCode===ARROW_LEFT_KEY_CODE||keyCode===TAB_KEY_CODE&&shiftKey){event.preventDefault();focusManager.focusPrevious()}};return _react.default.cloneElement(children,{onKeyDown:function onKeyDown(event){_onKeyDown(event);if(children.props.onKeyDown)children.props.onKeyDown(event)},ref:)};exports.FocusScope=FocusScope});
Liferay.Loader.define("@frontend-taglib-clay$clayui/shared@3.1.0/lib/getEllipsisItems",["module","exports","require","frontend-js-react-web$react"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.getEllipsisItems=void 0;var _react=_interopRequireDefault(require("frontend-js-react-web$react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||
_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}function _extends(){_extends=Object.assign||function(target){for(var i=
1;i<arguments.length;i++){var source=arguments[i];for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}return target};return _extends.apply(this,arguments)}var getBufferList=var getEllipsisItems=exports.getEllipsisItems=getEllipsisItems});
Liferay.Loader.define("@frontend-taglib-clay$clayui/button@3.3.0/lib/Group",["module","exports","require","frontend-taglib-clay$classnames","frontend-js-react-web$react"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classnames=_interopRequireDefault(require("frontend-taglib-clay$classnames"));var _react=_interopRequireDefault(require("frontend-js-react-web$react"));function _interopRequireDefault(obj){return obj&&
obj.__esModule?obj:{default:obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=
Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}
var ClayButtonGroup=function ClayButtonGroup(_ref){var children=_ref.children,className=_ref.className,_ref$role=_ref.role,role=_ref$role===void 0?"group":_ref$role,spaced=_ref.spaced,otherProps=_objectWithoutProperties(_ref,["children","className","role","spaced"]);return _react.default.createElement("div",_extends({},otherProps,{className:(0,_classnames.default)(className,"btn-group"),role:role}),spaced?_react.default.Children.map(children,:children)};var _default=ClayButtonGroup;exports.default=_default});
Liferay.Loader.define("@frontend-taglib-clay$clayui/button@3.3.0/lib/Button",["module","exports","require","frontend-taglib-clay$classnames","frontend-js-react-web$react","./Group"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classnames=_interopRequireDefault(require("frontend-taglib-clay$classnames"));var _react=_interopRequireDefault(require("frontend-js-react-web$react"));var _Group=_interopRequireDefault(require("./Group"));
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}return target};return _extends.apply(this,arguments)}function _defineProperty(obj,key,value){if(key in obj)Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});
else obj[key]=value;return obj}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,
excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var ClayButton=_react.default.forwardRef(function(_ref,ref){var _classNames;var alert=_ref.alert,block=_ref.block,borderless=_ref.borderless,children=_ref.children,className=_ref.className,_ref$displayType=_ref.displayType,displayType=_ref$displayType===void 0?"primary":_ref$displayType,
monospaced=_ref.monospaced,outline=_ref.outline,small=_ref.small,_ref$type=_ref.type,type=_ref$type===void 0?"button":_ref$type,otherProps=_objectWithoutProperties(_ref,["alert","block","borderless","children","className","displayType","monospaced","outline","small","type"]);return _react.default.createElement("button",_extends({className:(0,_classnames.default)(className,"btn",(_classNames={"alert-btn":alert,"btn-block":block,"btn-monospaced":monospaced,"btn-outline-borderless":borderless,"btn-sm":small},
_defineProperty(_classNames,"btn-".concat(displayType),displayType&&!outline&&!borderless),_defineProperty(_classNames,"btn-outline-".concat(displayType),displayType&&(outline||borderless)),_classNames)),ref:ref,type:type},otherProps),children)});var _default=Object.assign(ClayButton,{Group:_Group.default});exports.default=_default});
Liferay.Loader.define("frontend-taglib-clay$warning@4.0.3/warning",["module","exports","require"],function(module,exports,require){var define=undefined;var __DEV__=false;var warning=var printWarning;module.exports=warning});
Liferay.Loader.define("@frontend-taglib-clay$clayui/icon@3.0.4/lib/index",["module","exports","require","frontend-taglib-clay$classnames","frontend-js-react-web$react","frontend-taglib-clay$warning"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.ClayIconSpriteContext=void 0;var _classnames=_interopRequireDefault(require("frontend-taglib-clay$classnames"));var _react=_interopRequireDefault(require("frontend-js-react-web$react"));
var _warning=_interopRequireDefault(require("frontend-taglib-clay$warning"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};
var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,
i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var ClayIconSpriteContext=_react.default.createContext("");exports.ClayIconSpriteContext=ClayIconSpriteContext;var ClayIcon=_react.default.forwardRef(function(_ref,ref){var className=_ref.className,spritemap=_ref.spritemap,symbol=_ref.symbol,otherProps=_objectWithoutProperties(_ref,["className","spritemap","symbol"]);var spriteMapVal=_react.default.useContext(ClayIconSpriteContext);
if(spritemap)spriteMapVal=spritemap;void 0;return _react.default.createElement("svg",_extends({},otherProps,{className:(0,_classnames.default)("lexicon-icon lexicon-icon-".concat(symbol),className),key:symbol,ref:ref,role:"presentation"}),_react.default.createElement("use",{xlinkHref:"".concat(spriteMapVal,"#").concat(symbol)}))});var _default=ClayIcon;exports.default=_default});
Liferay.Loader.define("@frontend-taglib-clay$clayui/button@3.3.0/lib/ButtonWithIcon",["module","exports","require","@frontend-taglib-clay$clayui/icon","frontend-js-react-web$react","./Button"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _icon=_interopRequireDefault(require("@frontend-taglib-clay$clayui/icon"));var _react=_interopRequireDefault(require("frontend-js-react-web$react"));var _Button=_interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=
Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}
var ClayButtonWithIcon=_react.default.forwardRef(function(_ref,ref){var spritemap=_ref.spritemap,symbol=_ref.symbol,otherProps=_objectWithoutProperties(_ref,["spritemap","symbol"]);return _react.default.createElement(_Button.default,_extends({},otherProps,{monospaced:true,ref:ref}),_react.default.createElement(_icon.default,{spritemap:spritemap,symbol:symbol}))});var _default=ClayButtonWithIcon;exports.default=_default});
Liferay.Loader.define("@frontend-taglib-clay$clayui/button@3.3.0/lib/index",["module","exports","require","./Button","./ButtonWithIcon"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"ClayButtonWithIcon",{enumerable:true,get:function get(){return _ButtonWithIcon.default}});exports.default=void 0;var _Button=_interopRequireDefault(require("./Button"));var _ButtonWithIcon=_interopRequireDefault(require("./ButtonWithIcon"));
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=_Button.default;exports.default=_default});
Liferay.Loader.define("@frontend-taglib-clay$clayui/link@3.1.0/lib/Context",["module","exports","require","frontend-js-react-web$react"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("frontend-js-react-web$react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var context=_react.default.createContext("a");context.displayName="ClayLinkContext";
var _default=context;exports.default=_default});
Liferay.Loader.define("@frontend-taglib-clay$clayui/link@3.1.0/lib/index",["module","exports","require","frontend-taglib-clay$classnames","frontend-js-react-web$react","./Context"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"ClayLinkContext",{enumerable:true,get:);exports.default=void 0;var _classnames=_interopRequireDefault(require("frontend-taglib-clay$classnames"));
var _react=_interopRequireDefault(require("frontend-js-react-web$react"));var _Context=_interopRequireDefault(require("./Context"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key))target[key]=source[key]}return target};return _extends.apply(this,arguments)}unction _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,
key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var ClayLink=_react.default.forwardRef(function(_ref,ref){var _classNames;var borderless=_ref.borderless,children=_ref.children,className=_ref.className,displayType=_ref.displayType,
monospaced=_ref.monospaced,outline=_ref.outline,otherProps=_objectWithoutProperties(_ref,["borderless","children","className","displayType","monospaced","outline"]);var TagOrComponent=_react.default.useContext(_Context.default);return _react.default.createElement(TagOrComponent,_extends({className:(0,_classnames.default)(className,(_classNames={"link-monospaced":monospaced,"link-outline":outline,"link-outline-borderless":borderless},_defineProperty(_classNames,"link-".concat(displayType),displayType&&
!outline),_defineProperty(_classNames,"link-outline-".concat(displayType),displayType&&outline),_classNames)),ref:ref},otherProps),children)});var _default=ClayLink;exports.default=_default});
Liferay.Loader.define("@frontend-taglib-clay$clayui/shared@3.1.0/lib/LinkOrButton",["module","exports","require","@frontend-taglib-clay$clayui/button","@frontend-taglib-clay$clayui/link","frontend-js-react-web$react"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.LinkOrButton=void 0;var _button=_interopRequireDefault(require("@frontend-taglib-clay$clayui/button"));var _link=_interopRequireDefault(require("@frontend-taglib-clay$clayui/link"));
var _react=_interopRequireDefault(require("frontend-js-react-web$react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}} LinkOrButton=_react.default.forwardRef(function(_ref,ref){var buttonDisplayType=_ref.buttonDisplayType,buttonType=_ref.buttonType,href=_ref.href,linkDisplayType=_ref.linkDisplayType,onClick=_ref.onClick,otherProps=_objectWithoutProperties(_ref,["buttonDisplayType","buttonType","href","linkDisplayType","onClick"]);if(href)return _react.default.createElement(_link.default,
_extends({},otherProps,{displayType:linkDisplayType,href:href,ref:ref}));return _react.default.createElement(_button.default,_extends({},otherProps,{displayType:buttonDisplayType,onClick:onClick,ref:ref,type:buttonType}))});exports.LinkOrButton=LinkOrButton});
Liferay.Loader.define("@frontend-taglib-clay$clayui/shared@3.1.0/lib/sub",["module","exports","require"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.sub=void 0;var SPLIT_REGEX=/({\d+})/g;var sub=exports.sub=sub});
Liferay.Loader.define("@frontend-taglib-clay$clayui/shared@3.1.0/lib/useDebounce",["module","exports","require","frontend-js-react-web$react"],function(module,exports,require){var define=undefined;Object.defineProperty(exports,"__esModule",{value:true});exports.useDebounce=useDebounce;var _react=_interopRequireDefault(require("frontend-js-react-web$react"));nction _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}