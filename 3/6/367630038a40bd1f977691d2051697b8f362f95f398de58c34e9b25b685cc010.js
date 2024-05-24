/*!
  * Bootstrap util.js v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Util = factory(global.jQuery));
})(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Private TransitionEnd Helpers
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default["default"](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default["default"](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default["default"].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default["default"].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * Public Util API
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default["default"](element).css('transition-duration');
      var transitionDelay = $__default["default"](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default["default"](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default["default"] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default["default"].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  return Util;

}));
//# sourceMappingURL=util.js.map
ng-exercises-in-tech-firms" />
<meta id="grapeshot" name="grapeshot_tag" content="gb_safe,gb_safe_from_high,gb_safe_from_high_med,gs_busfin,gs_tech_computing,gs_business,gs_busfin_business,gs_shopping,gs_economy,gs_tech_compute,gs_busfin_economy,gs_shopping_misc,gs_busfin_indus,gs_busfin_business_it,gs_busfin_indus_technology,gv_drugs,gs_economy_misc,gs_homegarden_gardening,gs_homegarden,gs_health_exercise,gs_tech_compute_apps_comms,gs_tech_compute_apps,gs_tech_compute_net,gs_tech_compute_net_social,gs_tech_social,gs_busfin_business_mgmt,gs_business_management,custom_mcd_exclusion,gs_business_careers,gs_busfin_economy_currencies,gs_busfin_economy_markets,gs_economy_markets,gs_busfin_business_large,custom_google,gs_shopping_giftscards" />
<script type="text/javascript">googletag.cmd.push(function() { googletag.pubads().setTargeting("gs_channels", ["gb_safe","gb_safe_from_high","gb_safe_from_high_med","gs_busfin","gs_tech_computing","gs_business","gs_busfin_business","gs_shopping","gs_economy","gs_tech_compute","gs_busfin_economy","gs_shopping_misc","gs_busfin_indus","gs_busfin_business_it","gs_busfin_indus_technology","gv_drugs","gs_economy_misc","gs_homegarden_gardening","gs_homegarden","gs_health_exercise","gs_tech_compute_apps_comms","gs_tech_compute_apps","gs_tech_compute_net","gs_tech_compute_net_social","gs_tech_social","gs_busfin_business_mgmt","gs_business_management","custom_mcd_exclusion","gs_business_careers","gs_busfin_economy_currencies","gs_busfin_economy_markets","gs_economy_markets","gs_busfin_business_large","custom_google","gs_shopping_giftscards"]);});</script>
<meta name="Generator" content="Drupal 9 (https://www.drupal.org)" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<script type="application/ld+json">{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "NewsArticle",
            "headline": "Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?",
            "name": "Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?",
            "description": "The worry is if tech retrenchments are driven less by restructuring but become cyclical and tied to earnings.",
            "image": {
                "@type": "ImageObject",
                "representativeOfPage": "True",
                "url": "ailazada310124.jpg"
            },
            "datePublished": "2024-02-01T05:00:00+08:00",
            "dateModified": "2024-02-01T05:43:20+08:00",
            "isAccessibleForFree": "True",
            "mainEntityOfPage": "https://www.straitstimes.com/opinion/economic-restructuring-on-steroids-retrenchments-as-annual-cost-cutting-exercises-in-tech-firms"
        }
    ]
}</script>
<meta http-equiv="x-ua-compatible" content="ie=edge" /><script type="text/javascript">(window.NREUM||(NREUM={})).init={privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]},distributed_tracing:{enabled:true}};(window.NREUM||(NREUM={})).loader_config={agentID:"1103293384",accountID:"225023",trustKey:"225023",xpid:"VgQCUVRQGwIAUFJVBgYFVVc=",licenseKey:"NRBR-70564e4017ab43d3811",applicationID:"1043717233"};;/*! For license information please see nr-loader-spa-1.251.1.min.js.LICENSE.txt */
(()=>{var e,t,r={234:(e,t,r)=>{"use strict";r.d(t,{P_:()=>m,Mt:()=>b,C5:()=>s,DL:()=>w,OP:()=>D,lF:()=>O,Yu:()=>E,Dg:()=>v,CX:()=>c,GE:()=>x,sU:()=>N});var n=r(8632),i=r(9567);const o={beacon:n.ce.beacon,errorBeacon:n.ce.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0},a={};function s(e){if(!e)throw new Error("All info objects require an agent identifier!");if(!a[e])throw new Error("Info for ".concat(e," was never set"));return a[e]}function c(e,t){if(!e)throw new Error("All info objects require an agent identifier!");a[e]=(0,i.D)(t,o);const r=(0,n.ek)(e);r&&(r.info=a[e])}const u=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var d=r(7056),l=r(50);const f="[data-nr-mask]",h=()=>{const e={mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{feature_flags:[],proxy:{assets:void 0,beacon:void 0},privacy:{cookies_enabled:!0},ajax:{deny_list:void 0,block_internal:!0,enabled:!0,harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},session:{domain:void 0,expiresMs:d.oD,inactiveMs:d.Hb},ssl:void 0,obfuscate:void 0,jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},metrics:{enabled:!0,autoStart:!0},page_action:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},session_trace:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},harvest:{tooManyRequestsDelay:60},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,sampling_rate:50,error_sampling_rate:50,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){u(t)?e.mask_selector="".concat(t,",").concat(f):""===t||null===t?e.mask_selector=f:(0,l.Z)("An invalid session_replay.mask_selector was provided. '*' will be used.",t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){u(t)?e.block_selector+=",".concat(t):""!==t&&(0,l.Z)("An invalid session_replay.block_selector was provided and will not be used",t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,l.Z)("An invalid session_replay.mask_input_option was provided and will not be used",t)}},spa:{enabled:!0,harvestTimeSeconds:10,autoStart:!0}}},p={},g="All configuration objects require an agent identifier!";function m(e){if(!e)throw new Error(g);if(!p[e])throw new Error("Configuration for ".concat(e," was never set"));return p[e]}function v(e,t){if(!e)throw new Error(g);p[e]=(0,i.D)(t,h());const r=(0,n.ek)(e);r&&(r.init=p[e])}function b(e,t){if(!e)throw new Error(g);var r=m(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}const y={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},A={};function w(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!A[e])throw new Error("LoaderConfig for ".concat(e," was never set"));return A[e]}function x(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");A[e]=(0,i.D)(t,y);const r=(0,n.ek)(e);r&&(r.loader_config=A[e])}const E=(0,n.mF)().o;var _=r(385),T=r(6818);const S={buildEnv:T.Re,customTransaction:void 0,disabled:!1,distMethod:T.gF,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,offset:Math.floor(_._A?.performance?.timeOrigin||_._A?.performance?.timing?.navigationStart||Date.now()),onerror:void 0,origin:""+_._A.location,ptid:void 0,releaseIds:{},session:void 0,xhrWrappable:"function"==typeof _._A.XMLHttpRequest?.prototype?.addEventListener,version:T.q4,denyList:void 0},R={};function D(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!R[e])throw new Error("Runtime for ".concat(e," was never set"));return R[e]}function N(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");R[e]=(0,i.D)(t,S);const r=(0,n.ek)(e);r&&(r.runtime=R[e])}function O(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},9567:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(50);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.Z)("Setting a Configurable requires an object as input");if(!t||"object"!=typeof t)return(0,n.Z)("Setting a Configurable requires a model to set its initial properties");const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),o=0===Object.keys(r).length?e:r;for(let a in o)if(void 0!==e[a])try{Array.isArray(e[a])&&Array.isArray(t[a])?r[a]=Array.from(new Set([...e[a],...t[a]])):"object"==typeof e[a]&&"object"==typeof t[a]?r[a]=i(e[a],t[a]):r[a]=e[a]}catch(e){(0,n.Z)("An error occurred while setting a property of a Configurable",e)}return r}catch(e){(0,n.Z)("An error occured while setting a Configurable",e)}}},6818:(e,t,r)=>{"use strict";r.d(t,{Re:()=>i,gF:()=>o,lF:()=>a,q4:()=>n});const n="1.251.1",i="PROD",o="CDN",a="2.0.0-alpha.11"},385:(e,t,r)=>{"use strict";r.d(t,{FN:()=>c,IF:()=>l,LW:()=>a,Nk:()=>h,Tt:()=>u,_A:()=>o,cv:()=>p,iS:()=>s,il:()=>n,ux:()=>d,v6:()=>i,w1:()=>f});const n="undefined"!=typeof window&&!!window.document,i="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),o=n?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),a="complete"===o?.document?.readyState,s=Boolean("hidden"===o?.document?.visibilityState),c=""+o?.location,u=/iPad|iPhone|iPod/.test(o.navigator?.userAgent),d=u&&"undefined"==typeof SharedWorker,l=(()=>{const e=o.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),f=Boolean(n&&window.document.documentMode),h=!!o.navigator?.sendBeacon,p=Math.floor(o?.performance?.timeOrigin||o?.performance?.timing?.navigationStart||Date.now())},1117:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var n=r(50);const i={agentIdentifier:"",ee:void 0};class o{constructor(e){try{if("object"!=typeof e)return(0,n.Z)("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.Z)("An error occured while setting SharedContext",e)}}}},8e3:(e,t,r)=>{"use strict";r.d(t,{L:()=>d,R:()=>c});var n=r(8325),i=r(1284),o=r(4322),a=r(3325);const s={};function c(e,t){const r={staged:!1,priority:a.p[t]||0};u(e),s[e].get(t)||s[e].set(t,r)}function u(e){e&&(s[e]||(s[e]=new Map))}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature";if(u(e),!e||!s[e].get(t))return a(t);s[e].get(t).staged=!0;const r=[...s[e]];function a(t){const r=e?n.ee.get(e):n.ee,a=o.X.handlers;if(r.backlog&&a){var s=r.backlog[t],c=a[t];if(c){for(var u=0;s&&u<s.length;++u)l(s[u],c);(0,i.D)(c,(function(e,t){(0,i.D)(t,(function(t,r){r[0].on(e,r[1])}))}))}delete a[t],r.backlog[t]=null,r.emit("drain-"+t,[])}}r.every((e=>{let[t,r]=e;return r.staged}))&&(r.sort(((e,t)=>e[1].priority-t[1].priority)),r.forEach((t=>{let[r]=t;s[e].delete(r),a(r)})))}function l(e,t){var r=e[1];(0,i.D)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var i=r[1],o=e[3],a=e[2];i.apply(o,a)}}))}},8325:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,ee:()=>u});var n=r(8632),i=r(2210),o=r(234);class a{constructor(e){this.contextId=e}}var s=r(3117);const c="nr@context:".concat(s.a),u=function e(t,r){var n={},s={},d={},f=!1;try{f=16===r.length&&(0,o.OP)(r).isolatedBacklog}catch(e){}var h={on:g,addEventListener:g,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,o){!1!==o&&(o=!0);if(u.aborted&&!i)return;t&&o&&t.emit(e,r,n);for(var a=p(n),c=m(e),d=c.length,l=0;l<d;l++)c[l].apply(a,r);var f=b()[s[e]];f&&f.push([h,e,r,a]);return a},get:v,listeners:m,context:p,buffer:function(e,t){const r=b();if(t=t||"feature",h.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:l,aborted:!1,isBuffering:function(e){return!!b()[s[e]]},debugId:r,backlog:f?{}:t&&"object"==typeof t.backlog?t.backlog:{}};return h;function p(e){return e&&e instanceof a?e:e?(0,i.X)(e,c,(()=>new a(c))):new a(c)}function g(e,t){n[e]=m(e).concat(t)}function m(e){return n[e]||[]}function v(t){return d[t]=d[t]||e(h,t)}function b(){return h.backlog}}(void 0,"globalEE"),d=(0,n.fP)();function l(){u.aborted=!0,u.backlog={}}d.ee||(d.ee=u)},5546:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,p:()=>i});var n=r(8325).ee.get("handle");function i(e,t,r,i,o){o?(o.buffer([e],i),o.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},4322:(e,t,r)=>{"use strict";r.d(t,{X:()=>o});var n=r(5546);o.on=a;var i=o.handlers={};function o(e,t,r,o){a(o||n.E,i,e,t,r)}function a(e,t,r,i,o){o||(o="feature"),e||(e=n.E);var a=t[o]=t[o]||{};(a[r]=a[r]||[]).push([e,i])}},3239:(e,t,r)=>{"use strict";r.d(t,{bP:()=>s,iz:()=>c,m$:()=>a});var n=r(385);let i=!1,o=!1;try{const e={get passive(){return i=!0,!1},get signal(){return o=!0,!1}};n._A.addEventListener("test",null,e),n._A.removeEventListener("test",null,e)}catch(e){}function a(e,t){return i||o?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,a(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,a(r,n))}},3117:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});const n=(0,r(4402).Rl)()},4402:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>u,M:()=>c,Rl:()=>a,ky:()=>s});var n=r(385);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function o(e,t){return e?15&e[t]:16*Math.random()|0}function a(){const e=n._A?.crypto||n._A?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map((e=>"x"===e?o(t,r++).toString(16):"y"===e?(3&o()|8).toString(16):e)).join("")}function s(e){const t=n._A?.crypto||n._A?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const a=[];for(var s=0;s<e;s++)a.push(o(r,i++).toString(16));return a.join("")}function c(){return s(16)}function u(){return s(32)}},7056:(e,t,r)=>{"use strict";r.d(t,{Bq:()=>n,Hb:()=>o,IK:()=>c,oD:()=>i,uT:()=>s,wO:()=>a});const n="NRBA",i=144e5,o=18e5,a={PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},s={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},c={OFF:0,FULL:1,ERROR:2}},7894:(e,t,r)=>{"use strict";function n(){return Math.round(performance.now())}r.d(t,{z:()=>n})},7243:(e,t,r)=>{"use strict";r.d(t,{e:()=>i});var n=r(385);function i(e){if(0===(e||"").indexOf("data:"))return{protocol:"data"};try{const t=new URL(e,location.href),r={port:t.port,hostname:t.hostname,pathname:t.pathname,search:t.search,protocol:t.protocol.slice(0,t.protocol.indexOf(":")),sameOrigin:t.protocol===n._A?.location?.protocol&&t.host===n._A?.location?.host};return r.port&&""!==r.port||("http:"===t.protocol&&(r.port="80"),"https:"===t.protocol&&(r.port="443")),r.pathname&&""!==r.pathname?r.pathname.startsWith("/")||(r.pathname="/".concat(r.pathname)):r.pathname="/",r}catch(e){return{}}}},50:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.warn&&(console.warn("New Relic: ".concat(e)),t&&console.warn(t))}r.d(t,{Z:()=>n})},2825:(e,t,r)=>{"use strict";r.d(t,{N:()=>d,T:()=>l});var n=r(8325),i=r(5546),o=r(3325),a=r(385);const s="newrelic";const c={stn:[o.D.sessionTrace],err:[o.D.jserrors,o.D.metrics],ins:[o.D.pageAction],spa:[o.D.spa],sr:[o.D.sessionReplay,o.D.sessionTrace]},u=new Set;function d(e,t){const r=n.ee.get(t);e&&"object"==typeof e&&(u.has(t)||(Object.entries(e).forEach((e=>{let[t,n]=e;c[t]?c[t].forEach((e=>{n?(0,i.p)("feat-"+t,[],void 0,e,r):(0,i.p)("block-"+t,[],void 0,e,r),(0,i.p)("rumresp-"+t,[Boolean(n)],void 0,e,r)})):n&&(0,i.p)("feat-"+t,[],void 0,void 0,r),l[t]=Boolean(n)})),Object.keys(c).forEach((e=>{void 0===l[e]&&(c[e]?.forEach((t=>(0,i.p)("rumresp-"+e,[!1],void 0,t,r))),l[e]=!1)})),u.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{a._A.dispatchEvent(new CustomEvent(s,{detail:e}))}catch(e){}}({loaded:!0})))}const l={}},2210:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},1284:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},4351:(e,t,r)=>{"use strict";r.d(t,{P:()=>o});var n=r(8325);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function o(e){try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},3960:(e,t,r)=>{"use strict";r.d(t,{KB:()=>a,b2:()=>o});var n=r(3239);function i(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(i())return e();(0,n.bP)("load",e,t)}function a(e){if(i())return e();(0,n.iz)("DOMContentLoaded",e)}},8632:(e,t,r)=>{"use strict";r.d(t,{EZ:()=>d,ce:()=>o,ek:()=>u,fP:()=>a,gG:()=>l,h5:()=>c,mF:()=>s});var n=r(7894),i=r(385);const o={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function a(){return i._A.NREUM||(i._A.NREUM={}),void 0===i._A.newrelic&&(i._A.newrelic=i._A.NREUM),i._A.NREUM}function s(){let e=a();return e.o||(e.o={ST:i._A.setTimeout,SI:i._A.setImmediate,CT:i._A.clearTimeout,XHR:i._A.XMLHttpRequest,REQ:i._A.Request,EV:i._A.Event,PR:i._A.Promise,MO:i._A.MutationObserver,FETCH:i._A.fetch}),e}function c(e,t){let r=a();r.initializedAgents??={},t.initializedAt={ms:(0,n.z)(),date:new Date},r.initializedAgents[e]=t}function u(e){let t=a();return t.initializedAgents?.[e]}function d(e,t){a()[e]=t}function l(){return function(){let e=a();const t=e.info||{};e.info={beacon:o.beacon,errorBeacon:o.errorBeacon,...t}}(),function(){let e=a();const t=e.init||{};e.init={...t}}(),s(),function(){let e=a();const t=e.loader_config||{};e.loader_config={...t}}(),a()}},7956:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});var n=r(3239);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.iz)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},1214:(e,t,r)=>{"use strict";r.d(t,{em:()=>b,u5:()=>R,QU:()=>O,_L:()=>C,Gm:()=>M,Lg:()=>L,BV:()=>Z,Kf:()=>Y});var n=r(8325),i=r(3117);const o="nr@original:".concat(i.a);var a=Object.prototype.hasOwnProperty,s=!1;function c(e,t){return e||(e=n.ee),r.inPlace=function(e,t,n,i,o){n||(n="");const a="-"===n.charAt(0);for(let s=0;s<t.length;s++){const c=t[s],u=e[c];d(u)||(e[c]=r(u,a?c+n:n,i,c,o))}},r.flag=o,r;function r(t,r,n,s,c){return d(t)?t:(r||(r=""),nrWrapper[o]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})})),t}catch(e){u([e],r)}for(var n in e)a.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var o,a,d,l;try{a=this,o=[...arguments],d="function"==typeof n?n(o,a):n||{}}catch(t){u([t,"",[o,a,s],d],e)}i(r+"start",[o,a,s],d,c);try{return l=t.apply(a,o)}catch(e){throw i(r+"err",[o,a,e],d,c),e}finally{i(r+"end",[o,a,l],d,c)}}}function i(r,n,i,o){if(!s||t){var a=s;s=!0;try{e.emit(r,n,i,t,o)}catch(t){u([t,r,n,i],e)}s=a}}}function u(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function d(e){return!(e&&"function"==typeof e&&e.apply&&!e[o])}var l=r(2210),f=r(385);const h={},p=f._A.XMLHttpRequest,g="addEventListener",m="removeEventListener",v="nr@wrapped:".concat(n.A);function b(e){var t=function(e){return(e||n.ee).get("events")}(e);if(h[t.debugId]++)return t;h[t.debugId]=1;var r=c(t,!0);function i(e){r.inPlace(e,[g,m],"-",o)}function o(e,t){return e[1]}return"getPrototypeOf"in Object&&(f.il&&y(document,i),y(f._A,i),y(p.prototype,i)),t.on(g+"-start",(function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var i=(0,l.X)(n,v,(function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return e?r(e,"fn-",null,e.name||"anonymous"):n}));this.wrapped=e[1]=i}})),t.on(m+"-start",(function(e){e[1]=this.wrapped||e[1]})),t}function y(e,t){let r=e;for(;"object"==typeof r&&!Object.prototype.hasOwnProperty.call(r,g);)r=Object.getPrototypeOf(r);for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];r&&t(r,...i)}var A="fetch-",w=A+"body-",x=["arrayBuffer","blob","json","text","formData"],E=f._A.Request,_=f._A.Response,T="prototype";const S={};function R(e){const t=function(e){return(e||n.ee).get("fetch")}(e);if(!(E&&_&&f._A.fetch))return t;if(S[t.debugId]++)return t;function r(e,r,i){var o=e[r];"function"==typeof o&&(e[r]=function(){var e,r=[...arguments],a={};t.emit(i+"before-start",[r],a),a[n.A]&&a[n.A].dt&&(e=a[n.A].dt);var s=o.apply(this,r);return t.emit(i+"start",[r,e],s),s.then((function(e){return t.emit(i+"end",[null,e],s),e}),(function(e){throw t.emit(i+"end",[e],s),e}))})}return S[t.debugId]=1,x.forEach((e=>{r(E[T],e,w),r(_[T],e,w)})),r(f._A,"fetch",A),t.on(A+"end",(function(e,r){var n=this;if(r){var i=r.headers.get("content-length");null!==i&&(n.rxSize=i),t.emit(A+"done",[null,r],n)}else t.emit(A+"done",[e],n)})),t}const D={},N=["pushState","replaceState"];function O(e){const t=function(e){return(e||n.ee).get("history")}(e);return!f.il||D[t.debugId]++||(D[t.debugId]=1,c(t).inPlace(window.history,N,"-")),t}var I=r(3239);const j={},P=["appendChild","insertBefore","replaceChild"];function C(e){const t=function(e){return(e||n.ee).get("jsonp")}(e);if(!f.il||j[t.debugId])return t;j[t.debugId]=!0;var r=c(t),i=/[?&](?:callback|cb)=([^&#]+)/,o=/(.*)\.([^.]+)/,a=/^(\w+)(\.|$)(.*)$/;function s(e,t){if(!e)return t;const r=e.match(a),n=r[1];return s(r[3],t[n])}return r.inPlace(Node.prototype,P,"dom-"),t.on("dom-start",(function(e){!function(e){if(!e||"string"!=typeof e.nodeName||"script"!==e.nodeName.toLowerCase())return;if("function"!=typeof e.addEventListener)return;var n=(a=e.src,c=a.match(i),c?c[1]:null);var a,c;if(!n)return;var u=function(e){var t=e.match(o);if(t&&t.length>=3)return{key:t[2],parent:s(t[1],window)};return{key:e,parent:window}}(n);if("function"!=typeof u.parent[u.key])return;var d={};function l(){t.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,I.m$)(!1)),e.removeEventListener("error",f,(0,I.m$)(!1))}function f(){t.emit("jsonp-error",[],d),t.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,I.m$)(!1)),e.removeEventListener("error",f,(0,I.m$)(!1))}r.inPlace(u.parent,[u.key],"cb-",d),e.addEventListener("load",l,(0,I.m$)(!1)),e.addEventListener("error",f,(0,I.m$)(!1)),t.emit("new-jsonp",[e.src],d)}(e[0])})),t}const k={};function M(e){const t=function(e){return(e||n.ee).get("mutation")}(e);if(!f.il||k[t.debugId])return t;k[t.debugId]=!0;var r=c(t),i=f._A.MutationObserver;return i&&(window.MutationObserver=function(e){return this instanceof i?new i(r(e,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype),t}const H={};function L(e){const t=function(e){return(e||n.ee).get("promise")}(e);if(H[t.debugId])return t;H[t.debugId]=!0;var r=t.context,i=c(t),a=f._A.Promise;return a&&function(){function e(r){var n=t.context(),o=i(r,"executor-",n,null,!1);const s=Reflect.construct(a,[o],e);return t.context(s).getCtx=function(){return n},s}f._A.Promise=e,Object.defineProperty(e,"name",{value:"Promise"}),e.toString=function(){return a.toString()},Object.setPrototypeOf(e,a),["all","race"].forEach((function(r){const n=a[r];e[r]=function(e){let i=!1;[...e||[]].forEach((e=>{this.resolve(e).then(a("all"===r),a(!1))}));const o=n.apply(this,arguments);return o;function a(e){return function(){t.emit("propagate",[null,!i],o,!1,!1),i=i||!e}}}})),["resolve","reject"].forEach((function(r){const n=a[r];e[r]=function(e){const r=n.apply(this,arguments);return e!==r&&t.emit("propagate",[e,!0],r,!1,!1),r}})),e.prototype=a.prototype;const n=a.prototype.then;a.prototype.then=function(){var e=this,o=r(e);o.promise=e;for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];s[0]=i(s[0],"cb-",o,null,!1),s[1]=i(s[1],"cb-",o,null,!1);const u=n.apply(this,s);return o.nextPromise=u,t.emit("propagate",[e,!0],u,!1,!1),u},a.prototype.then[o]=n,t.on("executor-start",(function(e){e[0]=i(e[0],"resolve-",this,null,!1),e[1]=i(e[1],"resolve-",this,null,!1)})),t.on("executor-err",(function(e,t,r){e[1](r)})),t.on("cb-end",(function(e,r,n){t.emit("propagate",[n,!0],this.nextPromise,!1,!1)})),t.on("propagate",(function(e,r,n){this.getCtx&&!r||(this.getCtx=function(){if(e instanceof Promise)var r=t.context(e);return r&&r.getCtx?r.getCtx():this})}))}(),t}const z={},F="setTimeout",B="setInterval",U="clearTimeout",V="-start",q="-",G=[F,"setImmediate",B,U,"clearImmediate"];function Z(e){const t=function(e){return(e||n.ee).get("timer")}(e);if(z[t.debugId]++)return t;z[t.debugId]=1;var r=c(t);return r.inPlace(f._A,G.slice(0,2),F+q),r.inPlace(f._A,G.slice(2,3),B+q),r.inPlace(f._A,G.slice(3),U+q),t.on(B+V,(function(e,t,n){e[0]=r(e[0],"fn-",null,n)})),t.on(F+V,(function(e,t,n){this.method=n,this.timerDuration=isNaN(e[1])?0:+e[1],e[0]=r(e[0],"fn-",this,n)})),t}var W=r(50);const X={},K=["open","send"];function Y(e){var t=e||n.ee;const r=function(e){return(e||n.ee).get("xhr")}(t);if(X[r.debugId]++)return r;X[r.debugId]=1,b(t);var i=c(r),o=f._A.XMLHttpRequest,a=f._A.MutationObserver,s=f._A.Promise,u=f._A.setInterval,d="readystatechange",l=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],h=[],p=f._A.XMLHttpRequest=function(e){const t=new o(e),n=r.context(t);try{r.emit("new-xhr",[t],n),t.addEventListener(d,(a=n,function(){var e=this;e.readyState>3&&!a.resolved&&(a.resolved=!0,r.emit("xhr-resolved",[],e)),i.inPlace(e,l,"fn-",w)}),(0,I.m$)(!1))}catch(e){(0,W.Z)("An error occurred while intercepting XHR",e);try{r.emit("internal-error",[e])}catch(e){}}var a;return t};function g(e,t){i.inPlace(t,["onreadystatechange"],"fn-",w)}if(function(e,t){for(var r in e)t[r]=e[r]}(o,p),p.prototype=o.prototype,i.inPlace(p.prototype,K,"-xhr-",w),r.on("send-xhr-start",(function(e,t){g(e,t),function(e){h.push(e),a&&(m?m.then(A):u?u(A):(v=-v,y.data=v))}(t)})),r.on("open-xhr-start",g),a){var m=s&&s.resolve();if(!u&&!s){var v=1,y=document.createTextNode(v);new a(A).observe(y,{characterData:!0})}}else t.on("fn-end",(function(e){e[0]&&e[0].type===d||A()}));function A(){for(var e=0;e<h.length;e++)g(0,h[e]);h.length&&(h=[])}function w(e,t){return t}return r}},7825:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.ajax},6660:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.jserrors},3081:(e,t,r)=>{"use strict";r.d(t,{gF:()=>o,mY:()=>i,t9:()=>n,vz:()=>s,xS:()=>a});const n=r(3325).D.metrics,i="sm",o="cm",a="storeSupportabilityMetrics",s="storeEventMetrics"},4649:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageAction},7633:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},7144:(e,t,r)=>{"use strict";r.d(t,{J0:()=>l,Mi:()=>d,Vb:()=>o,Ye:()=>s,fm:()=>c,i9:()=>a,t9:()=>i,u0:()=>u});var n=r(7056);const i=r(3325).D.sessionReplay,o=.12,a={DomContentLoaded:0,Load:1,FullSnapshot:2,IncrementalSnapshot:3,Meta:4,Custom:5},s=1e6,c=64e3,u={[n.IK.ERROR]:15e3,[n.IK.FULL]:3e5,[n.IK.OFF]:0},d={RESET:{message:"Session was reset",sm:"Reset"},IMPORT:{message:"Recorder failed to import",sm:"Import"},TOO_MANY:{message:"429: Too Many Requests",sm:"Too-Many"},TOO_BIG:{message:"Payload was too large",sm:"Too-Big"},CROSS_TAB:{message:"Session Entity was set to OFF on another tab",sm:"Cross-Tab"},ENTITLEMENTS:{message:"Session Replay is not allowed and will not be started",sm:"Entitlement"}},l=5e3},3614:(e,t,r)=>{"use strict";r.d(t,{BST_RESOURCE:()=>i,END:()=>s,FEATURE_NAME:()=>n,FN_END:()=>u,FN_START:()=>c,PUSH_STATE:()=>d,RESOURCE:()=>o,START:()=>a});const n=r(3325).D.sessionTrace,i="bstResource",o="resource",a="-start",s="-end",c="fn"+a,u="fn"+s,d="pushState"},7836:(e,t,r)=>{"use strict";r.d(t,{BODY:()=>x,CB_END:()=>E,CB_START:()=>u,END:()=>w,FEATURE_NAME:()=>i,FETCH:()=>T,FETCH_BODY:()=>v,FETCH_DONE:()=>m,FETCH_START:()=>g,FN_END:()=>c,FN_START:()=>s,INTERACTION:()=>f,INTERACTION_API:()=>d,INTERACTION_EVENTS:()=>o,JSONP_END:()=>b,JSONP_NODE:()=>p,JS_TIME:()=>_,MAX_TIMER_BUDGET:()=>a,REMAINING:()=>l,SPA_NODE:()=>h,START:()=>A,originalSetTimeout:()=>y});var n=r(234);const i=r(3325).D.spa,o=["click","submit","keypress","keydown","keyup","change"],a=999,s="fn-start",c="fn-end",u="cb-start",d="api-ixn-",l="remaining",f="interaction",h="spaNode",p="jsonpNode",g="fetch-start",m="fetch-done",v="fetch-body-",b="jsonp-end",y=n.Yu.ST,A="-start",w="-end",x="-body",E="cb"+w,_="jsTime",T="fetch"},5938:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(8325);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},7530:(e,t,r)=>{"use strict";r.d(t,{j:()=>b});var n=r(3325),i=r(234),o=r(5546),a=r(8325),s=r(7894),c=r(8e3),u=r(3960),d=r(385),l=r(50),f=r(3081),h=r(8632);function p(){const e=(0,h.gG)();["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start","recordReplay","pauseReplay"].forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let o=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&o.push(e.api[t](...n))})),o.length>1?o:o[0]}(t,...n)}}))}var g=r(2825);const m=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let v=!1;function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0,{init:A,info:w,loader_config:x,runtime:E={loaderType:b},exposed:_=!0}=t;const T=(0,h.gG)();w||(A=T.init,w=T.info,x=T.loader_config),(0,i.Dg)(e.agentIdentifier,A||{}),(0,i.GE)(e.agentIdentifier,x||{}),w.jsAttributes??={},d.v6&&(w.jsAttributes.isWorker=!0),(0,i.CX)(e.agentIdentifier,w);const S=(0,i.P_)(e.agentIdentifier),R=[w.beacon,w.errorBeacon];v||(S.proxy.assets&&(m(S.proxy.assets),R.push(S.proxy.assets)),S.proxy.beacon&&R.push(S.proxy.beacon),p(),(0,h.EZ)("activatedFeatures",g.T)),E.denyList=[...S.ajax.deny_list||[],...S.ajax.block_internal?R:[]],(0,i.sU)(e.agentIdentifier,E),void 0===e.api&&(e.api=function(e,t){t||(0,c.R)(e,"api");const h={};var p=a.ee.get(e),g=p.get("tracer"),m="api-",v=m+"ixn-";function b(t,r,n,o){const a=(0,i.C5)(e);return null===r?delete a.jsAttributes[t]:(0,i.CX)(e,{...a,jsAttributes:{...a.jsAttributes,[t]:r}}),w(m,n,!0,o||null===r?"session":void 0)(t,r)}function y(){}["setErrorHandler","finished","addToTrace","addRelease"].forEach((e=>{h[e]=w(m,e,!0,"api")})),h.addPageAction=w(m,"addPageAction",!0,n.D.pageAction),h.setCurrentRouteName=w(m,"routeName",!0,n.D.spa),h.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.OP)(e).customTransaction=(r||"http://custom.transaction")+t,w(m,"setPageViewName",!0)()},h.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return b(e,t,"setCustomAttribute",r);(0,l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t,"> was provided."))}else(0,l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setUserId=function(e){if("string"==typeof e||null===e)return b("enduser.id",e,"setUserId",!0);(0,l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setApplicationVersion=function(e){if("string"==typeof e||null===e)return b("application.version",e,"setApplicationVersion",!1);(0,l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},h.start=e=>{try{const t=e?"defined":"undefined";(0,o.p)(f.xS,["API/start/".concat(t,"/called")],void 0,n.D.metrics,p);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{p.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},h.recordReplay=function(){(0,o.p)(f.xS,["API/recordReplay/called"],void 0,n.D.metrics,p),(0,o.p)("recordReplay",[],void 0,n.D.sessionReplay,p)},h.pauseReplay=function(){(0,o.p)(f.xS,["API/pauseReplay/called"],void 0,n.D.metrics,p),(0,o.p)("pauseReplay",[],void 0,n.D.sessionReplay,p)},h.interaction=function(){return(new y).get()};var A=y.prototype={createTracer:function(e,t){var r={},i=this,a="function"==typeof t;return(0,o.p)(f.xS,["API/createTracer/called"],void 0,n.D.metrics,p),(0,o.p)(v+"tracer",[(0,s.z)(),e,r],i,n.D.spa,p),function(){if(g.emit((a?"":"no-")+"fn-start",[(0,s.z)(),i,a],r),a)try{return t.apply(this,arguments)}catch(e){throw g.emit("fn-err",[arguments,this,e],r),e}finally{g.emit("fn-end",[(0,s.z)()],r)}}}};function w(e,t,r,i){return function(){return(0,o.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,p),i&&(0,o.p)(e+t,[(0,s.z)(),...arguments],r?null:this,i,p),r?void 0:this}}function x(){r.e(111).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>(0,l.Z)("Downloading runtime APIs failed...")))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{A[e]=w(v,e,void 0,n.D.spa)})),h.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,o.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,p),(0,o.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,p)},d.il?(0,u.b2)((()=>x()),!0):x(),h}(e.agentIdentifier,y)),void 0===e.exposed&&(e.exposed=_),v=!0}},1926:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.sessionReplay]:9}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({111:"nr-spa",164:"nr-spa-compressor",433:"nr-spa-recorder"}[e]+"-1.251.1.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.251.1.PROD:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){s=l;break}}if(!s){c=!0;var f={111:"sha512-lCY4+B0gOT0jVtMbaDU0ri7coukTGr4YSIrFnYCbNcvlKoBWZ5lEMC3pnQbfFRHmqU9ClOHO1zeM7zl3Bpi8lg==",433:"sha512-uSk6ex6Q5btbEC3Fd9ucXsXT/MfYs9nSwrApEySzfsKG5WHfu74lzjBZOw2ou+AfTHUFLXX7zUhG8T18KvZDQQ==",164:"sha512-69slZTW/5YZ/pY5zE0I3TCiV/tXwxGlT/pOzl7BgweR1maJ+C+doWoTbPHgKP1SrTS/0sZHb5fgMScLDwVDkqw=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[a]&&(s.integrity=f[a])}e[r]=[n];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={801:0,92:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,c]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self["webpackChunk:NRBA-1.251.1.PROD"]=self["webpackChunk:NRBA-1.251.1.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(1926);var e=i(50);class t{#e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];if("function"==typeof this.api?.[t])return this.api[t](...n);(0,e.Z)("Call to agent api ".concat(t," failed. The API is not currently initialized."))}addPageAction(e,t){return this.#e("addPageAction",e,t)}setPageViewName(e,t){return this.#e("setPageViewName",e,t)}setCustomAttribute(e,t,r){return this.#e("setCustomAttribute",e,t,r)}noticeError(e,t){return this.#e("noticeError",e,t)}setUserId(e){return this.#e("setUserId",e)}setApplicationVersion(e){return this.#e("setApplicationVersion",e)}setErrorHandler(e){return this.#e("setErrorHandler",e)}finished(e){return this.#e("finished",e)}addRelease(e,t){return this.#e("addRelease",e,t)}start(e){return this.#e("start",e)}recordReplay(){return this.#e("recordReplay")}pauseReplay(){return this.#e("pauseReplay")}addToTrace(e){return this.#e("addToTrace",e)}setCurrentRouteName(e){return this.#e("setCurrentRouteName",e)}interaction(){return this.#e("interaction")}}var r=i(3325),n=i(234);const o=Object.values(r.D);function a(e){const t={};return o.forEach((r=>{t[r]=function(e,t){return!1!==(0,n.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var s=i(7530);var c=i(8e3),u=i(5938),d=i(3960),l=i(385);class f extends u.W{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=i,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,n.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,c.R)(e,r)}importAggregator(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,c.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));const r=l.il&&!0===(0,n.Mt)(this.agentIdentifier,"privacy.cookies_enabled");let o;this.onAggregateImported=new Promise((e=>{o=e}));const a=async()=>{let n;try{if(r){const{setupAgentSession:e}=await i.e(111).then(i.bind(i,1656));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t)}try{if(!this.shouldImportAgg(this.featureName,n))return(0,c.L)(this.agentIdentifier,this.featureName),void o(!1);const{lazyFeatureLoader:e}=await i.e(111).then(i.bind(i,8582)),{Aggregate:r}=await e(this.featureName,"aggregate");this.featAggregate=new r(this.agentIdentifier,this.aggregator,t),o(!0)}catch(t){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),t),this.abortHandler?.(),(0,c.L)(this.agentIdentifier,this.featureName),o(!1)}};l.il?(0,d.b2)((()=>a()),!0):a()}shouldImportAgg(e,t){return e!==r.D.sessionReplay||!!n.Yu.MO&&(!1!==(0,n.Mt)(this.agentIdentifier,"session_trace.enabled")&&(!!t?.isNew||!!t?.state.sessionReplayMode))}}var h=i(7633);class p extends f{static featureName=h.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,h.t,r),this.importAggregator()}}var g=i(1117),m=i(1284);class v extends g.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var o=this.getBucket(e,t,r,i);return o.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,m.D)(e,(function(e,r){t[e]=b(r,t[e])})),t}(n,o.metrics),o}merge(e,t,r,n,i){var o=this.getBucket(e,t,n,i);if(o.metrics){var a=o.metrics;a.count+=r.count,(0,m.D)(r,(function(e,t){if("count"!==e){var n=a[e],i=r[e];i&&!i.c?a[e]=b(i.t,n):a[e]=function(e,t){if(!t)return e;t.c||(t=y(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,a[e])}}))}else o.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=b(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=A(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function A(e){return"object"!=typeof e?[]:(0,m.D)(e,w)}function w(e,t){return t}var x=i(8632),E=i(4402),_=i(4351);var T=i(5546),S=i(7956),R=i(3239),D=i(7894),N=i(9251);class O extends f{static featureName=N.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,N.t,r),l.il&&((0,S.N)((()=>(0,T.p)("docHidden",[(0,D.z)()],void 0,N.t,this.ee)),!0),(0,R.bP)("pagehide",(()=>(0,T.p)("winPagehide",[(0,D.z)()],void 0,N.t,this.ee))),this.importAggregator())}}var I=i(3081);class j extends f{static featureName=I.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,I.t9,r),this.importAggregator()}}var P=i(6660);class C{constructor(e,t,r,n){this.name="UncaughtError",this.message=e,this.sourceURL=t,this.line=r,this.column=n}}class k extends f{static featureName=P.t;#t=new Set;constructor(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,P.t,n);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("fn-err",((e,t,n)=>{this.abortHandler&&!this.#t.has(n)&&(this.#t.add(n),(0,T.p)("err",[this.#r(n),(0,D.z)()],void 0,r.D.jserrors,this.ee))})),this.ee.on("internal-error",(e=>{this.abortHandler&&(0,T.p)("ierr",[this.#r(e),(0,D.z)(),!0],void 0,r.D.jserrors,this.ee)})),l._A.addEventListener("unhandledrejection",(e=>{this.abortHandler&&(0,T.p)("err",[this.#n(e),(0,D.z)(),!1,{unhandledPromiseRejection:1}],void 0,r.D.jserrors,this.ee)}),(0,R.m$)(!1,this.removeOnAbort?.signal)),l._A.addEventListener("error",(e=>{this.abortHandler&&(this.#t.has(e.error)?this.#t.delete(e.error):(0,T.p)("err",[this.#i(e),(0,D.z)()],void 0,r.D.jserrors,this.ee))}),(0,R.m$)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#o,this.importAggregator()}#o(){this.removeOnAbort?.abort(),this.#t.clear(),this.abortHandler=void 0}#r(e){return e instanceof Error?e:void 0!==e?.message?new C(e.message,e.filename||e.sourceURL,e.lineno||e.line,e.colno||e.col):new C("string"==typeof e?e:(0,_.P)(e))}#n(e){let t="Unhandled Promise Rejection: ";if(e?.reason instanceof Error)try{return e.reason.message=t+e.reason.message,e.reason}catch(t){return e.reason}if(void 0===e.reason)return new C(t);const r=this.#r(e.reason);return r.message=t+r.message,r}#i(e){return e.error instanceof Error?e.error:new C(e.message,e.filename,e.lineno,e.colno)}}var M=i(2210);let H=1;const L="nr@id";function z(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===l._A?0:(0,M.X)(e,L,(function(){return H++}))}function F(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,_.P)(e).length}catch(e){return}}}var B=i(1214),U=i(7243);class V{constructor(e){this.agentIdentifier=e}generateTracePayload(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,n.DL)(this.agentIdentifier);if(!t)return null;var r=(t.accountID||"").toString()||null,i=(t.agentID||"").toString()||null,o=(t.trustKey||"").toString()||null;if(!r||!i)return null;var a=(0,E.M)(),s=(0,E.Ht)(),c=Date.now(),u={spanId:a,traceId:s,timestamp:c};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(u.traceContextParentHeader=this.generateTraceContextParentHeader(a,s),u.traceContextStateHeader=this.generateTraceContextStateHeader(a,c,r,i,o)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(u.newrelicHeader=this.generateTraceHeader(a,s,c,r,i,o)),u}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,o){if(!("function"==typeof l._A?.btoa))return null;var a={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return o&&n!==o&&(a.d.tk=o),btoa((0,_.P)(a))}shouldGenerateTrace(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1,r={};if((0,n.Mt)(this.agentIdentifier,"distributed_tracing")&&(r=(0,n.P_)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var i=0;i<r.allowed_origins.length;i++){var o=(0,U.e)(r.allowed_origins[i]);if(e.hostname===o.hostname&&e.protocol===o.protocol&&e.port===o.port){t=!0;break}}return t}isDtEnabled(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled}excludeNewrelicHeader(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers}}var q=i(7825),G=["load","error","abort","timeout"],Z=G.length,W=n.Yu.REQ,X=n.Yu.XHR;class K extends f{static featureName=q.t;constructor(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(super(e,t,q.t,i),(0,n.OP)(e).xhrWrappable){this.dt=new V(e),this.handler=(e,t,r,n)=>(0,T.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};l._A?.performance?.getEntriesByType("resource").forEach((t=>{if(t.initiatorType in e&&0!==t.responseStatus){const n={status:t.responseStatus},i={rxSize:t.transferSize,duration:Math.floor(t.duration),cbTime:0};Y(n,t.name),this.handler("xhr",[n,i,t.startTime,t.responseEnd,e[t.initiatorType]],void 0,r.D.ajax)}}))}catch(e){}(0,B.u5)(this.ee),(0,B.Kf)(this.ee),function(e,t,i,o){function a(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=x,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},e.addEventListener("load",(function(r){E(t,e)}),(0,R.m$)(!1)),l.IF||e.addEventListener("progress",(function(e){t.lastSize=e.loaded}),(0,R.m$)(!1))}function s(e){this.params={method:e[0]},Y(this,e[1]),this.metrics={}}function c(t,r){var i=(0,n.DL)(e);i.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",i.xpid);var a=o.generateTracePayload(this.parsedOrigin);if(a){var s=!1;a.newrelicHeader&&(r.setRequestHeader("newrelic",a.newrelicHeader),s=!0),a.traceContextParentHeader&&(r.setRequestHeader("traceparent",a.traceContextParentHeader),a.traceContextStateHeader&&r.setRequestHeader("tracestate",a.traceContextStateHeader),s=!0),s&&(this.dt=a)}}function u(e,r){var n=this.metrics,i=e[0],o=this;if(n&&i){var a=F(i);a&&(n.txSize=a)}this.startTime=(0,D.z)(),this.body=i,this.listener=function(e){try{"abort"!==e.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==e.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof r.onload)&&"function"==typeof o.end)&&o.end(r)}catch(e){try{t.emit("internal-error",[e])}catch(e){}}};for(var s=0;s<Z;s++)r.addEventListener(G[s],this.listener,(0,R.m$)(!1))}function d(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function f(e,t){var r=""+z(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function h(e,t){var r=""+z(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function p(){this.endTime=(0,D.z)()}function g(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-added",[e[1],e[2]],r)}function m(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-removed",[e[1],e[2]],r)}function v(e,t,r){t instanceof X&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,D.z)()))}function b(e,r){this.xhrCbStart&&t.emit("xhr-cb-time",[(0,D.z)()-this.xhrCbStart,this.onload,r],r)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&l.il&&(t=""+l._A.location.href):e[0]&&e[0].url?t=e[0].url:l._A?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,U.e)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var n=o.generateTracePayload(this.parsedOrigin);if(n&&(n.newrelicHeader||n.traceContextParentHeader))if(e[0]&&e[0].headers)s(e[0].headers,n)&&(this.dt=n);else{var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),s(i.headers,n)&&(this.dt=n),e.length>1?e[1]=i:e.push(i)}}function s(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function A(e,t){this.params={},this.metrics={},this.startTime=(0,D.z)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},i=this.target;"string"==typeof i?r=i:"object"==typeof i&&i instanceof W?r=i.url:l._A?.URL&&"object"==typeof i&&i instanceof URL&&(r=i.href),Y(this,r);var o=(""+(i&&i instanceof W&&i.method||n.method||"GET")).toUpperCase();this.params.method=o,this.body=n.body,this.txSize=F(n.body)||0}function w(e,t){var n;this.endTime=(0,D.z)(),this.params||(this.params={}),this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var o={txSize:this.txSize,rxSize:n,duration:(0,D.z)()-this.startTime};i("xhr",[this.params,o,this.startTime,this.endTime,"fetch"],this,r.D.ajax)}function x(e){var t=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var o=0;o<Z;o++)e.removeEventListener(G[o],this.listener,!1);t.aborted||(n.duration=(0,D.z)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):E(this,e),n.cbTime=this.cbTime,i("xhr",[t,n,this.startTime,this.endTime,"xhr"],this,r.D.ajax))}}function E(e,t){e.params.status=t.status;var r=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?F(e.response):"text"===r||""===r||void 0===r?F(e.responseText):void 0}(t,e.lastSize);if(r&&(e.metrics.rxSize=r),e.sameOrigin){var n=t.getResponseHeader("X-NewRelic-App-Data");n&&(e.params.cat=n.split(", ").pop())}e.loadCaptureCalled=!0}t.on("new-xhr",a),t.on("open-xhr-start",s),t.on("open-xhr-end",c),t.on("send-xhr-start",u),t.on("xhr-cb-time",d),t.on("xhr-load-added",f),t.on("xhr-load-removed",h),t.on("xhr-resolved",p),t.on("addEventListener-end",g),t.on("removeEventListener-end",m),t.on("fn-end",b),t.on("fetch-before-start",y),t.on("fetch-start",A),t.on("fn-start",v),t.on("fetch-done",w)}(e,this.ee,this.handler,this.dt),this.importAggregator()}}}function Y(e,t){var r=(0,U.e)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}var J=i(3614);const{BST_RESOURCE:Q,RESOURCE:ee,START:te,END:re,FEATURE_NAME:ne,FN_END:ie,FN_START:oe,PUSH_STATE:ae}=J;var se=i(7056),ce=i(7144);class ue extends f{static featureName=ce.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,ce.t9,r);try{const e=JSON.parse(localStorage.getItem("NRBA_SESSION"));e.sessionReplayMode!==se.IK.OFF?this.#a(e.sessionReplayMode):this.importAggregator({})}catch(e){this.importAggregator({})}}async#a(e){const{Recorder:t}=await Promise.all([i.e(111),i.e(433)]).then(i.bind(i,4136));this.recorder=new t({mode:e,agentIdentifier:this.agentIdentifier}),this.recorder.startRecording(),this.importAggregator({recorder:this.recorder})}}var de=i(7836);const{FEATURE_NAME:le,START:fe,END:he,BODY:pe,CB_END:ge,JS_TIME:me,FETCH:ve,FN_START:be,CB_START:ye,FN_END:Ae}=de;var we=i(4649);class xe extends f{static featureName=we.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,we.t,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,E.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new v({agentIdentifier:this.agentIdentifier}),this.features={},(0,x.h5)(r,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),(0,s.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){try{const t=a(this.agentIdentifier),n=[...this.desiredFeatures];n.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),n.forEach((n=>{if(t[n.featureName]||n.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(n.featureName);i.every((e=>t[e]))||(0,e.Z)("".concat(n.featureName," is enabled but one or more dependent features has been disabled (").concat((0,_.P)(i),"). This may cause unintended consequences or missing data...")),this.features[n.featureName]=new n(this.agentIdentifier,this.sharedAggregator)}}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,x.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}}({features:[K,p,O,class extends f{static featureName=ne;constructor(e,t){if(super(e,t,ne,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;const n=this.ee;let i;(0,B.QU)(n),this.eventsEE=(0,B.em)(n),this.eventsEE.on(oe,(function(e,t){this.bstStart=(0,D.z)()})),this.eventsEE.on(ie,(function(e,t){(0,T.p)("bst",[e[0],t,this.bstStart,(0,D.z)()],void 0,r.D.sessionTrace,n)})),n.on(ae+te,(function(e){this.time=(0,D.z)(),this.startPath=location.pathname+location.hash})),n.on(ae+re,(function(e){(0,T.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,r.D.sessionTrace,n)}));try{i=new PerformanceObserver((e=>{const t=e.getEntries();(0,T.p)(Q,[t],void 0,r.D.sessionTrace,n)})),i.observe({type:ee,buffered:!0})}catch(e){}this.importAggregator({resourceObserver:i})}},ue,j,xe,k,class extends f{static featureName=le;constructor(e,t){if(super(e,t,le,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;if(!(0,n.OP)(e).xhrWrappable)return;try{this.removeOnAbort=new AbortController}catch(e){}let r,i=0;const o=this.ee.get("tracer"),a=(0,B._L)(this.ee),s=(0,B.Lg)(this.ee),c=(0,B.BV)(this.ee),u=(0,B.Kf)(this.ee),d=this.ee.get("events"),f=(0,B.u5)(this.ee),h=(0,B.QU)(this.ee),p=(0,B.Gm)(this.ee);function g(e,t){h.emit("newURL",[""+window.location,t])}function m(){i++,r=window.location.hash,this[be]=(0,D.z)()}function v(){i--,window.location.hash!==r&&g(0,!0);var e=(0,D.z)();this[me]=~~this[me]+e-this[be],this[Ae]=e}function b(e,t){e.on(t,(function(){this[t]=(0,D.z)()}))}this.ee.on(be,m),s.on(ye,m),a.on(ye,m),this.ee.on(Ae,v),s.on(ge,v),a.on(ge,v),this.ee.buffer([be,Ae,"xhr-resolved"],this.featureName),d.buffer([be],this.featureName),c.buffer(["setTimeout"+he,"clearTimeout"+fe,be],this.featureName),u.buffer([be,"new-xhr","send-xhr"+fe],this.featureName),f.buffer([ve+fe,ve+"-done",ve+pe+fe,ve+pe+he],this.featureName),h.buffer(["newURL"],this.featureName),p.buffer([be],this.featureName),s.buffer(["propagate",ye,ge,"executor-err","resolve"+fe],this.featureName),o.buffer([be,"no-"+be],this.featureName),a.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"],this.featureName),b(f,ve+fe),b(f,ve+"-done"),b(a,"new-jsonp"),b(a,"jsonp-end"),b(a,"cb-start"),h.on("pushState-end",g),h.on("replaceState-end",g),window.addEventListener("hashchange",g,(0,R.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("load",g,(0,R.m$)(!0,this.removeOnAbort?.signal)),window.addEventListener("popstate",(function(){g(0,i>1)}),(0,R.m$)(!0,this.removeOnAbort?.signal)),this.abortHandler=this.#o,this.importAggregator()}#o(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}],loaderType:"spa"})})()})();</script>
<meta property="og:site_name" content="The Straits Times" />
<meta data-rh="true" property="al:web:url" content="https://www.straitstimes.com/opinion/economic-restructuring-on-steroids-retrenchments-as-annual-cost-cutting-exercises-in-tech-firms" />
<meta data-rh="true" property="al:ios:url" content="straitstimes:://www.straitstimes.com/opinion/economic-restructuring-on-steroids-retrenchments-as-annual-cost-cutting-exercises-in-tech-firms" />
<meta data-rh="true" property="al:ios:app_name" content="Straits Times" />
<meta data-rh="true" property="al:ios:app_store_id" content="547465441" />
<meta name="google-play-app" content="app-id=com.buuuk.st" />
<meta property="og:type" content="article" />
<meta property="og:image" content="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2024/02/01/ailazada310124.jpg" />
<meta property="og:image:width" content="720" />
<meta property="og:image:height" content="520" />
<meta property="author" content="Xu Le and Samer Elhajjar" />
<script type="text/javascript">
var show_catfish=0;
if (document.cookie.indexOf("catfishDisplayed=") == -1 || (dfp_preview_ids != "" && dfp_preview_ids!= undefined && dfp_preview_ids.length!=0)) {
  if (screen.width < 767 && catfish_enabled === 1) {
    expiry = new Date();expiry.setTime(expiry.getTime() + (catfish_validity*60*60*1000));
    document.cookie = "catfishDisplayed=yes;path=/; expires=" + expiry.toGMTString();show_catfish=1;
    googletag.slots["catfish"] = googletag.defineSlot("/5908/st/catfish/opinion", [1, 1], "dfp-ad-catfish")
.addService(googletag.pubads())
.setTargeting('pos', ['catfish']).setTargeting('stprint', ['Off']).setTargeting('weight', ['1']);

  }
}
</script>
<script type="text/javascript">
var show_overlay=0;
if ((topOverlayImpressionsServed<topOverlayImpressions &&  document.cookie.indexOf("topoverlayDisplayed=") == -1) || (dfp_preview_ids != "" && dfp_preview_ids!= undefined && dfp_preview_ids.length!=0 )) {
  if (screen.width > 767 && prestitial_enabled === 1) { googletag.slots["prestitial"] = googletag.defineSlot("/5908/st/prestitial/opinion", [1, 1], "dfp-ad-prestitial")
.addService(googletag.pubads())
.setTargeting('pos', ['prestitial']).setTargeting('stprint', ['Off']).setTargeting('weight', ['1']);
 expiry = new Date();expiry.setTime(expiry.getTime() + (overlay_validity*60*60*1000));
    show_overlay=1;
    topOverlayImpressionsServed = topOverlayImpressionsServed+1;
    if(topOverlayImpressionsServed == topOverlayImpressions) {
      document.cookie = "topoverlayDisplayed=yes;path=/; expires=" + expiry.toGMTString();
      document.cookie = "topOverlayImpressionsServed=0;path=/; expires=" + expiry.toGMTString();  
    } else { 
      document.cookie = "topOverlayImpressionsServed="+topOverlayImpressionsServed+";path=/; expires=" + expiry.toGMTString(); 
    }
  }
}
</script>
<script type="text/javascript">
/* Start by defining breakpoints for this ad. */
var mapping = googletag.sizeMapping().addSize([1024, 0], [[970, 250], [970, 90], [728, 90], "fluid"]).addSize([740, 0], [[728, 90], "fluid"]).addSize([320, 0], [[320, 50], [320, 100], [320, 250], "fluid"]).addSize([0, 0], [[320, 50], [320, 100], [320, 250], "fluid"]).build();
 googletag.slots["lb1"] = googletag.defineSlot("/5908/st/lb1/opinion", [[970, 250], [970, 90], [728, 90], [320, 50], [320, 100], [320, 250]], "dfp-ad-lb1")
.addService(googletag.pubads())
.setTargeting('pos', ['1']).setTargeting('stprint', ['Off']).setTargeting('weight', ['1']).defineSizeMapping(mapping);
 </script>
<script type="text/javascript">
/* Start by defining breakpoints for this ad. */
var mapping = googletag.sizeMapping().addSize([1024, 0], [[300, 250], "fluid", [1, 1]]).addSize([740, 0], [[300, 250], "fluid", [1, 1]]).addSize([320, 0], [[320, 50], [320, 100], [300, 250], "fluid", [1, 1]]).addSize([0, 0], [[320, 50], [320, 100], [300, 250], "fluid", [1, 1]]).build();
 googletag.slots["imu1"] = googletag.defineSlot("/5908/st/imu1/opinion", [[320, 50], [320, 100], [300, 250], "fluid", [1, 1]], "dfp-ad-imu1")
.addService(googletag.pubads())
.setTargeting('pos', ['1']).setTargeting('stprint', ['Off']).setTargeting('weight', ['5']).defineSizeMapping(mapping);
 </script>
<script type="text/javascript">
googletag.cmd.push(function() {
      googletag.pubads().enableAsyncRendering();
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
          googletag.pubads().setTargeting('paywall_hit', ['yes']);
      googletag.pubads().setTargeting('starticleid', ['1178241']);
      googletag.pubads().setTargeting('sttags', ['cost-cuttingrestructuring','job-cuts','technology-sector','employment','singapore-economy']);
      googletag.pubads().setTargeting('sph_bs', ['no_category']);
      googletag.pubads().setTargeting('page', ['article']);
  });
</script>
<link rel="icon" href="/themes/custom/straitstimes/favicon.ico" type="image/vnd.microsoft.icon" />
<!-- Apple Touch Icons --><link rel="apple-touch-icon" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="57x57" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="192x192" href="/themes/custom/straitstimes/images/icons/st175/apple-touch-icon-192x192.png" />
<!-- Windows8 Tile Icons --><meta name="msapplication-square70x70logo" content="/themes/custom/straitstimes/images/icons/st175/smalltile.png" />
<meta name="msapplication-square150x150logo" content="/themes/custom/straitstimes/images/icons/st175/mediumtile.png" />
<meta name="msapplication-wide310x150logo" content="/themes/custom/straitstimes/images/icons/st175/widetile.png" />
<meta name="msapplication-square310x310logo" content="/themes/custom/straitstimes/images/icons/st175/largetile.png" />

    <title>Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms? | The Straits Times</title>
    <link rel="stylesheet" media="all" href="/core/modules/system/css/components/ajax-progress.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/align.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/autocomplete-loading.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/fieldgroup.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/container-inline.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/clearfix.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/details.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/hidden.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/item-list.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/js.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/nowrap.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/position-container.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/progress.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/reset-appearance.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/resize.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/sticky-header.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/system-status-counter.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/system-status-report-counters.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/system-status-report-general-info.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/tabledrag.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/tablesort.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/system/css/components/tree-child.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/modules/custom/st_article/css/paywall.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/views/css/views.module.css?s7r62y" />
<link rel="stylesheet" media="all" href="/modules/common/sph_dfp/modules/sph_dfp_betterads/css/sph-dfp-betterads.css?s7r62y" />
<link rel="stylesheet" media="all" href="/modules/custom/st_rewards/css/st_rewards.css?s7r62y" />
<link rel="stylesheet" media="all" href="/modules/custom/st_rewards/css/st_rewards_lb.css?s7r62y" />
<link rel="stylesheet" media="all" href="/core/modules/layout_discovery/layouts/onecol/onecol.css?s7r62y" />
<link rel="stylesheet" media="all" href="/modules/common/sph_subscriber_login/css/sph-mysph.css?s7r62y" />
<link rel="stylesheet" media="all" href="/themes/custom/straitstimes/css/style.css?s7r62y" />
<link rel="stylesheet" media="screen" href="/themes/custom/straitstimes/css/jquery.smartbanner.css?s7r62y" />
<link rel="stylesheet" media="all" href="/themes/contrib/bootstrap_barrio/css/colors/messages/messages-light.css?s7r62y" />

    <script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefix":"","currentPath":"node\/1178241","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en"},"pluralDelimiter":"\u0003","suppressDeprecationErrors":true,"ajaxPageState":{"libraries":"bootstrap_barrio\/global-styling,bootstrap_barrio\/messages_light,core\/drupal.ajax,layout_discovery\/onecol,sph_dfp_betterads\/sph-dfp-betterads,sph_liveramp\/liveramp-lib,sph_subscriber_login\/sph-mysph,st_article\/article-details,st_article\/article-sphwave,st_rewards\/reward_points,st_subshare\/subshare,straitstimes\/global-styling,straitstimes\/permutive-sph,straitstimes\/queryly,straitstimes\/sphwave-activation-prod,system\/base,views\/views.module","theme":"straitstimes","theme_token":null},"ajaxTrustedUrl":[],"ckeditorheight":{"offset":1,"line_height":1.5,"unit":"em","disable_autogrow":false},"sph_liveramp":{"origin":"www.straitstimes.com","pid":"13892"},"captcha":{"sitekey":"6Lctci4UAAAAAO02h63KP9EgVF9KYoEOwdeB3m8b"},"sph_reward_points":{"tag_selector":".story-keywords","eligible_second":"10","share_tag_selector":""},"articleDetails":{"nid":"1178241","created":"1706734800","changed":"1706737400","publish_on":null,"status":"1"},"sphwaveDetails":{"cdp_campaign_id":"4","cdp_newsletter_campaign_id":"10","activation_js":"https:\/\/cdp.sph.com.sg\/activation\/activation.js","cdp_url":"https:\/\/cdp.activation.sph.com.sg","cdp_key":"c9875acb-576c-44bb-9484-aafb59ace74c","cdp_extintvn_campaign_id":"51","cdp_extintvn_exclude_urls":["https:\/\/www.straitstimes.com\/we-the-earth","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-eco-warrior-sustainability-save-environment-protect-earth","https:\/\/www.straitstimes.com\/world\/rolex-national-geographic-society-perpetual-planet-eco-warrior-sustainability-save-environment-protect-earth","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-awards-for-enterprise-laureate-krithi-karanth-tiger-conservationist-india-eco-warrior-sustainability-environment","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-awards-for-enterprise-laureate-kerstin-forsberg-giant-manta-rays-peru-eco-warrior-sustainability-save-environment","https:\/\/www.straitstimes.com\/singapore\/environment\/ted-chen-evercomm-rolex-we-the-earth-singapore-sensors-eco-warrior-sustainability-environment","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-awards-for-enterprise-laureate-joseph-cook-greenland-glacial-microbiologist-eco-warrior-sustainability-environment","https:\/\/www.straitstimes.com\/singapore\/environment\/rolex-perpetual-planet-we-the-earth-andie-ang-monkeys-raffles-banded-langurs-eco-warrior-sustainability","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-awards-for-enterprise-laureate-shaqat-hussain-pakistan-snow-leopard-eco-warrior-sustainability-environment","https:\/\/www.straitstimes.com\/singapore\/environment\/rolex-perpetual-planet-we-the-earth-nature-based-solutions-climate-change-koh-lian-pin-nus","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-we-the-earth-audio-waves-help-nature-michel-andre","https:\/\/www.straitstimes.com\/singapore\/environment\/rolex-perpetual-planet-we-the-earth-sivasothi-toh-tai-chong-sam-shu-qin-marine-litter","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-we-the-earth-vacation-photos-whale-sharks-brad-norman","https:\/\/www.straitstimes.com\/singapore\/environment\/rolex-perpetual-planet-we-the-earth-urban-farmers-bjorn-low-allan-lim-food-security","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-we-the-earth-marine-scientist-luiz-rocha-maldives-indian-ocean","https:\/\/www.straitstimes.com\/singapore\/environment\/rolex-perpetual-planet-we-the-earth-neo-mei-lin-marine-biologist-giant-clam-girl","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-we-the-earth-marine-biologist-emma-camp-super-corals","https:\/\/www.straitstimes.com\/singapore\/environment\/rolex-perpetual-planet-we-the-earth-treedots-lau-jiacai-food-waste-surplus","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-we-the-earth-enriched-flour-felix-brooks-church-tanzania-malnutrition","https:\/\/www.straitstimes.com\/singapore\/environment\/rolex-perpetual-planet-we-the-earth-cpg-consultants-green-buildings","https:\/\/www.straitstimes.com\/world\/rolex-perpetual-planet-we-the-earth-laury-cullen-jr-brazil-atlantic-forest-flora-fauna"]},"field_group":{"html_element":{"mode":"article_blog","context":"view","settings":{"classes":"node-header","id":"","element":"div","show_label":false,"label_element":"h3","label_element_classes":"","attributes":"","effect":"none","speed":"fast"}}},"mysph":{"change_pwd":"Update Password","logout":"Log Out","welcome_text":"Welcome","protected_path":"\/p\/","subscribe_link_for_reg":"https:\/\/subscribe.sph.com.sg\/publications-st\/?utm_campaign=st_subscription\u0026utm_medium=sph-publication\u0026utm_source=st\u0026utm_content=subscribelink-menu","manage_account_link":"https:\/\/subscribe.sph.com.sg\/your-account\/?pub-code=st\u0026utm_campaign=manageaccount\u0026go-back-url=","manage_account_text":"Manage Account"},"newsletter_editions":[11077,11078],"newsletter_signup_url":"\/st_newsletter\/ajax\/subscribe","api_load_script":"https:\/\/neuron.platform.sphdigital.com.sg\/neuron-latest.min.js","api_init_script":"https:\/\/neuron.platform.sphdigital.com.sg\/init\/st-prod-init.js","loadedDfpTags":"var loaded_dfp_tags = \u0027{\u0022catfish\u0022:{\u0022adunit\u0022:\u0022\\\/5908\\\/st\\\/catfish\\\/opinion\u0022,\u0022slotname\u0022:\u0022dfp-ad-catfish\u0022,\u0022size\u0022:\u00221x1\u0022},\u0022prestitial\u0022:{\u0022adunit\u0022:\u0022\\\/5908\\\/st\\\/prestitial\\\/opinion\u0022,\u0022slotname\u0022:\u0022dfp-ad-prestitial\u0022,\u0022size\u0022:\u00221x1\u0022},\u0022lb1\u0022:{\u0022adunit\u0022:\u0022\\\/5908\\\/st\\\/lb1\\\/opinion\u0022,\u0022slotname\u0022:\u0022dfp-ad-lb1\u0022,\u0022size\u0022:\u0022970x250,970x90,728x90,320x50,320x100,320x250\u0022},\u0022imu1\u0022:{\u0022adunit\u0022:\u0022\\\/5908\\\/st\\\/imu1\\\/opinion\u0022,\u0022slotname\u0022:\u0022dfp-ad-imu1\u0022,\u0022size\u0022:\u0022320x50,320x100,300x250,fluid,1x1\u0022}}\u0027;","user":{"uid":0,"permissionsHash":"28d6b69e6f292f5a579a88347d29b70b4e4234fc60f65b9d3676cea852bcd562"}}</script>
<script src="/core/assets/vendor/jquery/jquery.min.js?v=3.6.3"></script>
<script src="/core/misc/polyfills/element.matches.js?v=9.5.11"></script>
<script src="/core/misc/polyfills/object.assign.js?v=9.5.11"></script>
<script src="/core/assets/vendor/once/once.min.js?v=1.0.1"></script>
<script src="/core/assets/vendor/jquery-once/jquery.once.min.js?v=2.2.3"></script>
<script src="/core/misc/drupalSettingsLoader.js?v=9.5.11"></script>
<script src="/core/misc/drupal.js?v=9.5.11"></script>
<script src="/core/misc/drupal.init.js?v=9.5.11"></script>
<script src="/modules/common/sph_liveramp/js/sph_liveramp.js?v=3.0.1"></script>
<script src="/core/misc/jquery.once.bc.js?v=9.5.11"></script>
<script src="/core/assets/vendor/js-cookie/js.cookie.min.js?v=3.0.1"></script>
<script src="/core/misc/jquery.cookie.shim.js?v=9.5.11"></script>
<script src="/modules/common/sph_subscriber_login/js/sph-mysph.js?s7r62y"></script>
<script src="https://cdp.sph.com.sg/activation/activation.js"></script>

    <script type='text/javascript'>
      (function() {
        /** CONFIGURATION START **/
        var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
        _sf_async_config.uid = 52075;
        _sf_async_config.domain = 'straitstimes.com';
        _sf_async_config.useCanonical = true;
        _sf_async_config.useCanonicalDomain = true;
        /** CONFIGURATION END **/
      })();
    </script>
    <script async src="//static.chartbeat.com/js/chartbeat_mab.js"></script>
    <script>
      (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
      h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
      (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
      })(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-KXJKHV2':true});
    </script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-11908285-1', 'auto');
      ga('require', 'GTM-KXJKHV2');
    </script>
    <script>
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-W22QHZ9');
    </script>
    <script>
      !function(){"use strict";window.addEventListener("message",function(a){
      if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){
      var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");
      t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}})}();
    </script>
    <link rel="preconnect" href="https://tags.crwdcntrl.net">
    <link rel="preconnect" href="https://bcp.crwdcntrl.net">
    <link rel="dns-prefetch" href="https://tags.crwdcntrl.net">
    <link rel="dns-prefetch" href="https://bcp.crwdcntrl.net">

      <script>
        !function() {
          // Lotame config
          var lotameClientId = '12374';
          var lotameTagInput = {
            data: {},
            config: {
              clientId: Number(lotameClientId)
            }
          };

          // Lotame initialization
          var lotameConfig = lotameTagInput.config || {};
          var namespace = window['lotame_' + lotameConfig.clientId] = {};
          namespace.config = lotameConfig;
          namespace.data = lotameTagInput.data || {};
          namespace.cmd = namespace.cmd || [];
        } ();
      </script>

    <script async src="https://tags.crwdcntrl.net/lt/c/12374/lt.min.js"></script>
  </head>
  <body class="layout-no-sidebars page-node-1178241 article-type-blog path-node node--type-article">
    <!--a href="#main-content" class="visually-hidden focusable skip-link">
      Skip to main content
    </a-->
    <div id="MyPageOverlay"></div><div id="postitial_holder"></div><script src="/modules/common/sph_dfp/modules/sph_dfp_betterads/js/betterads_head2.js"></script>
<div id="mysph" lan= en svc= st_online ></div><script type="text/javascript">var _mySPHObj;</script><script src="https://static.mysph.sph.com.sg/mysph/js/mySPHIdentityLightbox.js"></script>
<script src="https://static.mysph.sph.com.sg/mysph/js/mysph-googleonetap.js"></script>

    <div id="skinning_reference" class="skinning_reference"></div>
      <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
    <div id="page-wrapper">
  <div id="page">
          <header id="header" class="header" role="banner" aria-label="Site header">
  <nav class="navbar navbar-default navbar-mobile d-block d-sm-none" aria-label="Navbar mobile">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <span>The Straits Times</span>
      </a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse" tabindex="-1" aria-expanded="false" aria-label="Toggle navigation">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
  </nav>

  <div class="navbar-desktop d-none d-sm-block d-print-block">
    <div class="navbar-header">
      <h1 class="site-name">
        <a class="name navbar-brand" href="/" title="Home">
          <span>The Straits Times</span>
        </a>
      </h1>
    </div>
         <h2 class="web-category-name d-none d-md-block">
       <a href="https://www.straitstimes.com/opinion" class="parent-category">Opinion</a>
      </h2>
    
    <div class="main-menu-container">
      <div class="container">
        <div class="navbar-primary">
          <div class="block-menu-edition">
            <h1 class="site-name">
              <a class="name navbar-brand" href="/" title="Home">
                <span>The Straits Times</span>
              </a>
            </h1>
            <div class="navbar-edition-wrap">
              <span class="edition-label" data-toggle="collapse" data-target="#navbar-edition" aria-expanded="false" aria-controls="navbar-edition">
                Edition
                <label>:</label>
              </span>
              <div class="navbar-edition collapse" role="menu" id="navbar-edition">
                <ul class="menu nav navbar-nav menu-edition">
                  <li class="nav-global-edition global-ed">
                    <a id="global-ed" class="globallink-ed" href="/global/">International</a>
                  </li>
                  <li class="nav-singapore-edition global-ed">
                    <a id="sin-ed" class="sinlink-ed" href="/">Singapore</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="block-menu-primary">
            <div class="menu-primary" role="menu">
                                <nav role="navigation" aria-labelledby="block-mainnavigation-menu" id="block-mainnavigation" class="settings-tray-editable block block-menu navigation menu--main" data-drupal-settingstray="editable">
            
  <h2 class="visually-hidden" id="block-mainnavigation-menu">Main navigation</h2>
  

        
              <ul id="block-mainnavigation" class="clearfix nav navbar-nav">
                    <li class="nav-item">
                          <a href="/" class="nav-link nav-link--" data-drupal-link-system-path="&lt;front&gt;">Home</a>
              </li>
                <li class="no-dropdown nav-singapore nav-item menu-item--expanded dropdown">
                          <a href="/singapore" class="nav-link nav-link--singapore" data-drupal-link-system-path="taxonomy/term/14">Singapore</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/singapore/jobs" class="nav-link--singapore-jobs" data-drupal-link-system-path="taxonomy/term/38">Jobs</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/housing" class="nav-link--singapore-housing" data-drupal-link-system-path="taxonomy/term/34">Housing</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/parenting-education" class="nav-link--singapore-parenting-education" data-drupal-link-system-path="taxonomy/term/33">Parenting &amp; Education</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/politics" class="nav-link--singapore-politics" data-drupal-link-system-path="taxonomy/term/28">Politics</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/health" class="nav-link--singapore-health" data-drupal-link-system-path="taxonomy/term/37">Health</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/transport" class="nav-link--singapore-transport" data-drupal-link-system-path="taxonomy/term/35">Transport</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/courts-crime" class="nav-link--singapore-courts-crime" data-drupal-link-system-path="taxonomy/term/32">Courts &amp; Crime</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/consumer" class="nav-link--singapore-consumer" data-drupal-link-system-path="taxonomy/term/86293">Consumer</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/environment" class="nav-link--singapore-environment" data-drupal-link-system-path="taxonomy/term/39">Environment</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/community" class="nav-link--singapore-community" data-drupal-link-system-path="taxonomy/term/86294">Community</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-asia nav-item menu-item--expanded dropdown">
                          <a href="/asia" class="nav-link nav-link--asia" data-drupal-link-system-path="taxonomy/term/29">Asia</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/asia/se-asia" class="nav-link--asia-se-asia" data-drupal-link-system-path="taxonomy/term/42">SE Asia</a>
              </li>
                <li class="dropdown-item">
                          <a href="/asia/east-asia" class="nav-link--asia-east-asia" data-drupal-link-system-path="taxonomy/term/43">East Asia</a>
              </li>
                <li class="dropdown-item">
                          <a href="/asia/south-asia" class="nav-link--asia-south-asia" data-drupal-link-system-path="taxonomy/term/44">South Asia</a>
              </li>
                <li class="dropdown-item">
                          <a href="/asia/australianz" class="nav-link--asia-australianz" data-drupal-link-system-path="taxonomy/term/45">Australia/NZ</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-world nav-item menu-item--expanded dropdown">
                          <a href="/world" class="nav-link nav-link--world" data-drupal-link-system-path="taxonomy/term/1">World</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/world/united-states" class="nav-link--world-united-states" data-drupal-link-system-path="taxonomy/term/46">United States</a>
              </li>
                <li class="dropdown-item">
                          <a href="/world/europe" class="nav-link--world-europe" data-drupal-link-system-path="taxonomy/term/47">Europe</a>
              </li>
                <li class="dropdown-item">
                          <a href="/world/middle-east" class="nav-link--world-middle-east" data-drupal-link-system-path="taxonomy/term/48">Middle East</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-opinion nav-item menu-item--expanded dropdown">
                          <a href="/opinion" class="nav-link nav-link--opinion" data-drupal-link-system-path="taxonomy/term/11">Opinion</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/opinion/st-editorial" class="nav-link--opinion-st-editorial" data-drupal-link-system-path="taxonomy/term/75">ST Editorial</a>
              </li>
                <li class="dropdown-item">
                          <a href="/opinion/cartoons" class="nav-link--opinion-cartoons" data-drupal-link-system-path="taxonomy/term/76">Cartoons</a>
              </li>
                <li class="dropdown-item">
                          <a href="/opinion/forum" class="nav-link--opinion-forum" data-drupal-link-system-path="taxonomy/term/77">Forum</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-lifestyle nav-item menu-item--expanded dropdown">
                          <a href="/life" class="nav-link nav-link--life" data-drupal-link-system-path="taxonomy/term/4">Life</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/life/food" class="nav-link--life-food" data-drupal-link-system-path="taxonomy/term/13">Food</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/entertainment" class="nav-link--life-entertainment" data-drupal-link-system-path="taxonomy/term/5">Entertainment</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/style" class="nav-link--life-style" data-drupal-link-system-path="taxonomy/term/65">Style</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/travel" class="nav-link--life-travel" data-drupal-link-system-path="taxonomy/term/64">Travel</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/arts" class="nav-link--life-arts" data-drupal-link-system-path="taxonomy/term/66">Arts</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/motoring" class="nav-link--life-motoring" data-drupal-link-system-path="taxonomy/term/12">Motoring</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/home-design" class="nav-link--life-home-design" data-drupal-link-system-path="taxonomy/term/67">Home &amp; Design</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-business nav-item menu-item--expanded dropdown">
                          <a href="/business" class="nav-link nav-link--business" data-drupal-link-system-path="taxonomy/term/2">Business</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/business/economy" class="nav-link--business-economy" data-drupal-link-system-path="taxonomy/term/52">Economy</a>
              </li>
                <li class="dropdown-item">
                          <a href="/business/invest" class="nav-link--business-invest" data-drupal-link-system-path="taxonomy/term/56">Invest</a>
              </li>
                <li class="dropdown-item">
                          <a href="/business/banking" class="nav-link--business-banking" data-drupal-link-system-path="taxonomy/term/53">Banking</a>
              </li>
                <li class="dropdown-item">
                          <a href="/business/companies-markets" class="nav-link--business-companies-markets" data-drupal-link-system-path="taxonomy/term/51">Companies &amp; Markets</a>
              </li>
                <li class="dropdown-item">
                          <a href="/business/property" class="nav-link--business-property" data-drupal-link-system-path="taxonomy/term/54">Property</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-tech nav-item menu-item--expanded dropdown">
                          <a href="/tech" class="nav-link nav-link--tech" data-drupal-link-system-path="taxonomy/term/31">Tech</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/tech/tech-news" class="nav-link--tech-tech-news" data-drupal-link-system-path="taxonomy/term/86292">Tech News</a>
              </li>
                <li class="dropdown-item">
                          <a href="/tech/e-sports" class="nav-link--tech-e-sports" data-drupal-link-system-path="taxonomy/term/74">E-sports</a>
              </li>
                <li class="dropdown-item">
                          <a href="/tech/reviews" class="nav-link--tech-reviews" data-drupal-link-system-path="taxonomy/term/86291">Reviews</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-sport nav-item menu-item--expanded dropdown">
                          <a href="/sport" class="nav-link nav-link--sport" data-drupal-link-system-path="taxonomy/term/3">Sport</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/sport/football" class="nav-link--sport-football" data-drupal-link-system-path="taxonomy/term/57">Football</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/schools" class="nav-link--sport-schools" data-drupal-link-system-path="taxonomy/term/62">Schools</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/formula-one" class="nav-link--sport-formula-one" data-drupal-link-system-path="taxonomy/term/59">Formula One</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/combat-sports" class="nav-link--sport-combat-sports" data-drupal-link-system-path="taxonomy/term/86295">Combat Sports</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/basketball" class="nav-link--sport-basketball" data-drupal-link-system-path="taxonomy/term/60">Basketball</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/tennis" class="nav-link--sport-tennis" data-drupal-link-system-path="taxonomy/term/58">Tennis</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/golf" class="nav-link--sport-golf" data-drupal-link-system-path="taxonomy/term/61">Golf</a>
              </li>
        </ul>
  
              </li>
                <li class="nav-more dropdown nav-item menu-item--expanded dropdown">
                          <span class="nav-link nav-link-">More</span>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="nav-opinion dropdown-item">
                          <a href="/opinion" class="nav-link--opinion" data-drupal-link-system-path="taxonomy/term/11">Opinion</a>
              </li>
                <li class="nav-lifestyle dropdown-item">
                          <a href="/life" class="nav-link--life" data-drupal-link-system-path="taxonomy/term/4">Life</a>
              </li>
                <li class="nav-business dropdown-item">
                          <a href="/business" class="nav-link--business" data-drupal-link-system-path="taxonomy/term/2">Business</a>
              </li>
                <li class="nav-tech nav-tech1 dropdown-item">
                          <a href="/tech" class="nav-link--tech" data-drupal-link-system-path="taxonomy/term/31">Tech</a>
              </li>
                <li class="nav-sport dropdown-item">
                          <a href="/sport" class="nav-link--sport" data-drupal-link-system-path="taxonomy/term/3">Sport</a>
              </li>
                <li class="dropdown-item">
                          <a href="/videos" class="nav-link--videos" data-drupal-link-system-path="taxonomy/term/81">Videos</a>
              </li>
                <li class="nav-podcasts dropdown-item">
                          <a href="/st-podcasts" class="nav-link--st-podcasts" data-drupal-link-system-path="node/535632">Podcasts</a>
              </li>
                <li class="dropdown-item">
                          <a href="/multimedia" class="nav-link--multimedia" data-drupal-link-system-path="taxonomy/term/79">Multimedia</a>
              </li>
        </ul>
  
              </li>
        </ul>
  


  </nav>


                          </div>
          </div>

          <div class="block-user-menu d-none d-lg-block">
            <div class="navbar-user" role="menu">
              <button class="d-none btn--user-dropdown" type="button" id="btn--user-dropdown">
                <i class="user-icon"></i>
              </button>
              <ul class="menu nav navbar-nav menu-user">
                <li class="nav-login">
                                                          <section class="row region region-header-form">
    <div id="block-mysphblock" class="settings-tray-editable block block-sph-subscriber-login block-mysph-block" data-drupal-settingstray="editable">
  
    
      <div class="content">
      <span class="user-signup-section w-100 d-block" >
                        <a style="font-weight: bold;" href="javascript:;" onclick="_mySPHObj.openLogin()" id="sph_login" class="mysph_login mysph-ga-event user-login-text">
                        LOG IN</a>
                         </span>
    </div>
  </div>

  </section>

                                  </li>
                <li class="nav-subscribe">
                                      <a href="https://subscribe.sph.com.sg/publications-st/?utm_campaign=st_subscription&amp;utm_medium=sph-publication&amp;utm_source=st&amp;utm_content=subscribelink-header" target="_blank">Subscribe</a>
                                  </li>
              </ul>

            </div>
          </div>

          <div class="block-menu-paper">
            <div class="navbar-paper" role="menu">
              <ul
                class="menu nav navbar-nav menu-paper">
                <!-- <li class="nav-print-edition"><a href="/print-edition">Print Edition</a></li> -->
                <li class="nav-epaper">
                  <a href="https://stepaper.straitstimes.com" target="_blank">E-paper</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="block-nav-search">
            <label type="button" class="queryly_toggle navbar-toggle-search" for="queryly_toggle"></label>
          </div>

          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="navbar-collapse collapse" aria-expanded="false" style="height: 40px;">
    <div class="side-heading">
      <a class="name navbar-brand" href="/" title="Home">
        <span>The Straits Times</span>
      </a>
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <nav role="navigation">
      <div class="block-nav-search">
        <label type="button" class="queryly_toggle navbar-toggle-search" for="queryly_toggle"></label>
      </div>
      <div class="block-user-menu">
        <div class="navbar-user" role="menu">
          <ul class="menu nav navbar-nav menu-user">
            <li class="nav-login">
                                              <section class="row region region-header-form">
    <div id="block-mysphblock" class="settings-tray-editable block block-sph-subscriber-login block-mysph-block" data-drupal-settingstray="editable">
  
    
      <div class="content">
      <span class="user-signup-section w-100 d-block" >
                        <a style="font-weight: bold;" href="javascript:;" onclick="_mySPHObj.openLogin()" id="sph_login" class="mysph_login mysph-ga-event user-login-text">
                        LOG IN</a>
                         </span>
    </div>
  </div>

  </section>

                          </li>
            <li class="nav-subscribe">
                              <a href="https://subscribe.sph.com.sg/publications-st/?utm_campaign=st_subscription&amp;utm_medium=sph-publication&amp;utm_source=st&amp;utm_content=subscribelink-menu" target="_blank">Subscribe</a>
                          </li>
          </ul>

        </div>
      </div>
      <div class="block-menu-edition">
        <button type="button" class="navbar-toggle-edition dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="edition-label">Edition</span>
        </button>
        <div class="navbar-edition dropdown-menu" role="menu">
          <ul class="menu nav navbar-nav menu-edition">
            <li class="nav-global-edition global-ed">
              <a id="global-ed" class="globallink-ed" href="/global/">International</a>
            </li>
            <li class="nav-singapore-edition global-ed">
              <a id="sin-ed" class="sinlink-ed" href="/">Singapore</a>
            </li>
          </ul>
        </div>
        <div class="navbar-edition--separator clearfix"></div>
      </div>

      <div class="block-menu-rewards hidden">
        <div class="navbar-rewards" role="menu">
          <ul class="menu nav navbar-nav menu-rewards">
            <li class="nav-rewards">
              <a href="/rewards">ST Read &amp; Win</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="block-menu-paper">
        <div class="navbar-paper" role="menu">
          <ul
            class="menu nav navbar-nav menu-paper">
            <!-- <li class="nav-print-edition"><a href="/print-edition">Print Edition</a></li> -->
            <li class="nav-epaper">
              <a href="https://stepaper.straitstimes.com" target="_blank">E-paper</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="block-menu-primary">
        <div class="navbar-primary" role="menu">
                        <nav role="navigation" aria-labelledby="block-mainnavigation-menu" id="block-mainnavigation" class="settings-tray-editable block block-menu navigation menu--main" data-drupal-settingstray="editable">
            
  <h2 class="visually-hidden" id="block-mainnavigation-menu">Main navigation</h2>
  

        
              <ul id="block-mainnavigation" class="clearfix nav navbar-nav">
                    <li class="nav-item">
                          <a href="/" class="nav-link nav-link--" data-drupal-link-system-path="&lt;front&gt;">Home</a>
              </li>
                <li class="no-dropdown nav-singapore nav-item menu-item--expanded dropdown">
                          <a href="/singapore" class="nav-link nav-link--singapore" data-drupal-link-system-path="taxonomy/term/14">Singapore</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/singapore/jobs" class="nav-link--singapore-jobs" data-drupal-link-system-path="taxonomy/term/38">Jobs</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/housing" class="nav-link--singapore-housing" data-drupal-link-system-path="taxonomy/term/34">Housing</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/parenting-education" class="nav-link--singapore-parenting-education" data-drupal-link-system-path="taxonomy/term/33">Parenting &amp; Education</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/politics" class="nav-link--singapore-politics" data-drupal-link-system-path="taxonomy/term/28">Politics</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/health" class="nav-link--singapore-health" data-drupal-link-system-path="taxonomy/term/37">Health</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/transport" class="nav-link--singapore-transport" data-drupal-link-system-path="taxonomy/term/35">Transport</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/courts-crime" class="nav-link--singapore-courts-crime" data-drupal-link-system-path="taxonomy/term/32">Courts &amp; Crime</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/consumer" class="nav-link--singapore-consumer" data-drupal-link-system-path="taxonomy/term/86293">Consumer</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/environment" class="nav-link--singapore-environment" data-drupal-link-system-path="taxonomy/term/39">Environment</a>
              </li>
                <li class="dropdown-item">
                          <a href="/singapore/community" class="nav-link--singapore-community" data-drupal-link-system-path="taxonomy/term/86294">Community</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-asia nav-item menu-item--expanded dropdown">
                          <a href="/asia" class="nav-link nav-link--asia" data-drupal-link-system-path="taxonomy/term/29">Asia</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/asia/se-asia" class="nav-link--asia-se-asia" data-drupal-link-system-path="taxonomy/term/42">SE Asia</a>
              </li>
                <li class="dropdown-item">
                          <a href="/asia/east-asia" class="nav-link--asia-east-asia" data-drupal-link-system-path="taxonomy/term/43">East Asia</a>
              </li>
                <li class="dropdown-item">
                          <a href="/asia/south-asia" class="nav-link--asia-south-asia" data-drupal-link-system-path="taxonomy/term/44">South Asia</a>
              </li>
                <li class="dropdown-item">
                          <a href="/asia/australianz" class="nav-link--asia-australianz" data-drupal-link-system-path="taxonomy/term/45">Australia/NZ</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-world nav-item menu-item--expanded dropdown">
                          <a href="/world" class="nav-link nav-link--world" data-drupal-link-system-path="taxonomy/term/1">World</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/world/united-states" class="nav-link--world-united-states" data-drupal-link-system-path="taxonomy/term/46">United States</a>
              </li>
                <li class="dropdown-item">
                          <a href="/world/europe" class="nav-link--world-europe" data-drupal-link-system-path="taxonomy/term/47">Europe</a>
              </li>
                <li class="dropdown-item">
                          <a href="/world/middle-east" class="nav-link--world-middle-east" data-drupal-link-system-path="taxonomy/term/48">Middle East</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-opinion nav-item menu-item--expanded dropdown">
                          <a href="/opinion" class="nav-link nav-link--opinion" data-drupal-link-system-path="taxonomy/term/11">Opinion</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/opinion/st-editorial" class="nav-link--opinion-st-editorial" data-drupal-link-system-path="taxonomy/term/75">ST Editorial</a>
              </li>
                <li class="dropdown-item">
                          <a href="/opinion/cartoons" class="nav-link--opinion-cartoons" data-drupal-link-system-path="taxonomy/term/76">Cartoons</a>
              </li>
                <li class="dropdown-item">
                          <a href="/opinion/forum" class="nav-link--opinion-forum" data-drupal-link-system-path="taxonomy/term/77">Forum</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-lifestyle nav-item menu-item--expanded dropdown">
                          <a href="/life" class="nav-link nav-link--life" data-drupal-link-system-path="taxonomy/term/4">Life</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/life/food" class="nav-link--life-food" data-drupal-link-system-path="taxonomy/term/13">Food</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/entertainment" class="nav-link--life-entertainment" data-drupal-link-system-path="taxonomy/term/5">Entertainment</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/style" class="nav-link--life-style" data-drupal-link-system-path="taxonomy/term/65">Style</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/travel" class="nav-link--life-travel" data-drupal-link-system-path="taxonomy/term/64">Travel</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/arts" class="nav-link--life-arts" data-drupal-link-system-path="taxonomy/term/66">Arts</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/motoring" class="nav-link--life-motoring" data-drupal-link-system-path="taxonomy/term/12">Motoring</a>
              </li>
                <li class="dropdown-item">
                          <a href="/life/home-design" class="nav-link--life-home-design" data-drupal-link-system-path="taxonomy/term/67">Home &amp; Design</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-business nav-item menu-item--expanded dropdown">
                          <a href="/business" class="nav-link nav-link--business" data-drupal-link-system-path="taxonomy/term/2">Business</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/business/economy" class="nav-link--business-economy" data-drupal-link-system-path="taxonomy/term/52">Economy</a>
              </li>
                <li class="dropdown-item">
                          <a href="/business/invest" class="nav-link--business-invest" data-drupal-link-system-path="taxonomy/term/56">Invest</a>
              </li>
                <li class="dropdown-item">
                          <a href="/business/banking" class="nav-link--business-banking" data-drupal-link-system-path="taxonomy/term/53">Banking</a>
              </li>
                <li class="dropdown-item">
                          <a href="/business/companies-markets" class="nav-link--business-companies-markets" data-drupal-link-system-path="taxonomy/term/51">Companies &amp; Markets</a>
              </li>
                <li class="dropdown-item">
                          <a href="/business/property" class="nav-link--business-property" data-drupal-link-system-path="taxonomy/term/54">Property</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-tech nav-item menu-item--expanded dropdown">
                          <a href="/tech" class="nav-link nav-link--tech" data-drupal-link-system-path="taxonomy/term/31">Tech</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/tech/tech-news" class="nav-link--tech-tech-news" data-drupal-link-system-path="taxonomy/term/86292">Tech News</a>
              </li>
                <li class="dropdown-item">
                          <a href="/tech/e-sports" class="nav-link--tech-e-sports" data-drupal-link-system-path="taxonomy/term/74">E-sports</a>
              </li>
                <li class="dropdown-item">
                          <a href="/tech/reviews" class="nav-link--tech-reviews" data-drupal-link-system-path="taxonomy/term/86291">Reviews</a>
              </li>
        </ul>
  
              </li>
                <li class="no-dropdown nav-sport nav-item menu-item--expanded dropdown">
                          <a href="/sport" class="nav-link nav-link--sport" data-drupal-link-system-path="taxonomy/term/3">Sport</a>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="dropdown-item">
                          <a href="/sport/football" class="nav-link--sport-football" data-drupal-link-system-path="taxonomy/term/57">Football</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/schools" class="nav-link--sport-schools" data-drupal-link-system-path="taxonomy/term/62">Schools</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/formula-one" class="nav-link--sport-formula-one" data-drupal-link-system-path="taxonomy/term/59">Formula One</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/combat-sports" class="nav-link--sport-combat-sports" data-drupal-link-system-path="taxonomy/term/86295">Combat Sports</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/basketball" class="nav-link--sport-basketball" data-drupal-link-system-path="taxonomy/term/60">Basketball</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/tennis" class="nav-link--sport-tennis" data-drupal-link-system-path="taxonomy/term/58">Tennis</a>
              </li>
                <li class="dropdown-item">
                          <a href="/sport/golf" class="nav-link--sport-golf" data-drupal-link-system-path="taxonomy/term/61">Golf</a>
              </li>
        </ul>
  
              </li>
                <li class="nav-more dropdown nav-item menu-item--expanded dropdown">
                          <span class="nav-link nav-link-">More</span>
          <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
                        <ul class="dropdown-menu">
                    <li class="nav-opinion dropdown-item">
                          <a href="/opinion" class="nav-link--opinion" data-drupal-link-system-path="taxonomy/term/11">Opinion</a>
              </li>
                <li class="nav-lifestyle dropdown-item">
                          <a href="/life" class="nav-link--life" data-drupal-link-system-path="taxonomy/term/4">Life</a>
              </li>
                <li class="nav-business dropdown-item">
                          <a href="/business" class="nav-link--business" data-drupal-link-system-path="taxonomy/term/2">Business</a>
              </li>
                <li class="nav-tech nav-tech1 dropdown-item">
                          <a href="/tech" class="nav-link--tech" data-drupal-link-system-path="taxonomy/term/31">Tech</a>
              </li>
                <li class="nav-sport dropdown-item">
                          <a href="/sport" class="nav-link--sport" data-drupal-link-system-path="taxonomy/term/3">Sport</a>
              </li>
                <li class="dropdown-item">
                          <a href="/videos" class="nav-link--videos" data-drupal-link-system-path="taxonomy/term/81">Videos</a>
              </li>
                <li class="nav-podcasts dropdown-item">
                          <a href="/st-podcasts" class="nav-link--st-podcasts" data-drupal-link-system-path="node/535632">Podcasts</a>
              </li>
                <li class="dropdown-item">
                          <a href="/multimedia" class="nav-link--multimedia" data-drupal-link-system-path="taxonomy/term/79">Multimedia</a>
              </li>
        </ul>
  
              </li>
        </ul>
  


  </nav>


                  </div>
      </div>
      <div class="block-sph-sites">
        <div class="navbar-sph-sites">
          
              <ul class="clearfix nav">
                    <li class="nav-item menu-item--expanded">
                <a href="https://www.sph.com.sg/our-businesses/online/sph-digital/" class="sph-sites-toggle nav-link sph-sites-togglesph-sites-togglesph-sites-toggle nav-link-https--wwwsphcomsg-our-businesses-online-sph-digital-">SPH Websites</a>
                                <ul class="menu">
                    <li class="nav-item">
                <span class="sph-stplus nolink sph-stplus nolink nav-link sph-stplusnolinksph-stplus nolink nav-link-">news with benefits</span>
              </li>
                <li class="nav-item">
                <a href="https://www.sphrewards.com.sg" class="sph-rewards nav-link sph-rewardssph-rewardssph-rewards nav-link-https--wwwsphrewardscomsg">SPH Rewards</a>
              </li>
                <li class="nav-item">
                <a href="https://www.stjobs.sg/?utm_source=Straits%20Times&amp;utm_medium=banner&amp;utm_campaign=ST_link_20131219" class="sph-jobs nav-link sph-jobssph-jobssph-jobs nav-link-https--wwwstjobssg-utm-sourcestraits20timesutm-mediumbannerutm-campaignst-link-20131219">STJobs</a>
              </li>
                <li class="nav-item">
                <a href="https://www.stclassifieds.sg/?utm_source=Straits%20Times&amp;utm_medium=banner&amp;utm_campaign=ST_link_20131219" class="sph-classifieds nav-link sph-classifiedssph-classifieds nav-link-https--wwwstclassifiedssg-utm-sourcestraits20timesutm-mediumbannerutm-campaignst-link-20131219">STClassifieds</a>
              </li>
                <li class="nav-item">
                <span class="sph-sph nolink sph-sph nolink nav-link sph-sphnolinksph-sph nolink nav-link-">SITES</span>
              </li>
                <li class="nav-item">
                <a href="https://beritaharian.sg/" class="sph-berita nav-link sph-beritasph-beritasph-berita nav-link-https--beritahariansg-">Berita Harian</a>
              </li>
                <li class="nav-item">
                <a href="https://www.hardwarezone.com.sg/" class="sph-hardware nav-link sph-hardwaresph-hardwaresph-hardware nav-link-https--wwwhardwarezonecomsg-">Hardwarezone</a>
              </li>
                <li class="nav-item">
                <a href="https://www.shinmin.sg/" class="sph-wanbao nav-link sph-wanbaosph-wanbaosph-wanbao nav-link-https--wwwshinminsg-">Shin Min Daily News</a>
              </li>
                <li class="nav-item">
                <a href="https://www.stomp.com.sg/" class="sph-stomp nav-link sph-stompsph-stompsph-stomp nav-link-https--wwwstompcomsg-">STOMP</a>
              </li>
                <li class="nav-item">
                <a href="https://www.sgcarmart.com/" class="sph-sgcar nav-link sph-sgcarsph-sgcarsph-sgcar nav-link-https--wwwsgcarmartcom-">SGCarMart</a>
              </li>
                <li class="nav-item">
                <a href="https://www.srx.com.sg/" class="sph-srx nav-link sph-srxsph-srxsph-srx nav-link-https--wwwsrxcomsg-">SRX Property</a>
              </li>
                <li class="nav-item">
                <a href="https://www.tabla.com.sg/" class="sph-tabla nav-link sph-tablasph-tablasph-tabla nav-link-https--wwwtablacomsg-">tabla</a>
              </li>
                <li class="nav-item">
                <a href="https://www.tamilmurasu.com.sg/" class="sph-tamil nav-link sph-tamilsph-tamilsph-tamil nav-link-https--wwwtamilmurasucomsg-">Tamil Murasu</a>
              </li>
                <li class="nav-item">
                <a href="https://www.businesstimes.com.sg/" class="sph-bt nav-link sph-btsph-btsph-bt nav-link-https--wwwbusinesstimescomsg-">The Business Times</a>
              </li>
                <li class="nav-item">
                <a href="https://www.tnp.sg/" class="sph-tnp nav-link sph-tnpsph-tnpsph-tnp nav-link-https--wwwtnpsg-">The New Paper</a>
              </li>
                <li class="nav-item">
                <a href="https://www.zaobao.com/" class="sph-zaobao nav-link sph-zaobaosph-zaobaosph-zaobaosph-zaobao nav-link-https--wwwzaobaocom-">Lianhe Zaobao</a>
              </li>
                <li class="nav-item">
                <a href="https://obits.sg/" class="sph-obitssg nav-link sph-obitssgsph-obitssg nav-link-https--obitssg-">Obits.sg</a>
              </li>
                <li class="nav-item">
                <a href="https://www.straitstimes.com/advertise-with-the-straits-times" class="nav-advertise-with-us nav-link nav-advertise-with-usnav-advertise-with-usnav-advertise-with-us nav-link-https--wwwstraitstimescom-advertise-with-the-straits-times">Advertise with us</a>
              </li>
        </ul>
  
              </li>
        </ul>
  


        </div>
      </div>
    </nav>
  </div>
</header>
                    <div class="highlighted top-leaderboard">
          <div class="ads leaderboard lb-top">
            <aside class="container section clearfix" role="complementary">
                <div id="block-dfptaglb1" class="settings-tray-editable block block-dfp block-dfp-ad7153d181-2150-4fbb-bd29-4b0f7d60e816" data-drupal-settingstray="editable">
  
    
      <div class="content">
      <div id="dfp-ad-lb1">
        <script type="text/javascript">
                      googletag.cmd.push(function() {
        googletag.display('dfp-ad-lb1');
    });

            </script>
</div>
<script type="text/javascript">
    if( window.innerWidth<=740 && document.getElementById("dfp-ad-lb1-mobile") != null) {
     var element = document.getElementById("dfp-ad-lb1");
      element.parentNode.removeChild(element);
      document.getElementById("dfp-ad-lb1-mobile").id = "dfp-ad-lb1";
    }
</script>


    </div>
  </div>
<div data-drupal-messages-fallback class="hidden"></div>


            </aside>
          </div>
        </div>
                
        <div id="main-wrapper" class="main-container layout-main-wrapper clearfix">
              <div id="main" class="container">
          
          <div class="row row-offcanvas row-offcanvas-left clearfix">
              <main class="main-content col" id="content" role="main">
                <section class="section">
                  <a id="main-content" tabindex="-1"></a>
                    <div id="block-dfptagprestitial" class="settings-tray-editable block block-dfp block-dfp-adbefd830e-7ab6-4dfb-a37d-125d8ba0137e" data-drupal-settingstray="editable">
  
    
      <div class="content">
      <div id="dfp-ad-prestitial">
        <script type="text/javascript">
                if (window.canRunAds !== undefined && (show_overlay==1 || (dfp_preview_ids != "" && dfp_preview_ids!= undefined && dfp_preview_ids.length!=0 )) && screen.width>767 && prestitial_enabled == 1) {
                googletag.cmd.push(function() {
        googletag.display('dfp-ad-prestitial');
    });

        }
            </script>
</div>
<script type="text/javascript">
    if( window.innerWidth<=740 && document.getElementById("dfp-ad-prestitial-mobile") != null) {
     var element = document.getElementById("dfp-ad-prestitial");
      element.parentNode.removeChild(element);
      document.getElementById("dfp-ad-prestitial-mobile").id = "dfp-ad-prestitial";
    }
</script>


    </div>
  </div>
<div id="block-dfptagcatfish" class="settings-tray-editable block block-dfp block-dfp-ad510cc989-c0b9-4a30-9915-8153b086d227" data-drupal-settingstray="editable">
  
    
      <div class="content">
      <div id="dfp-ad-catfish">
        <script type="text/javascript">
                if ( window.canRunAds !== undefined && screen.width<=767  && (show_catfish==1 || (dfp_preview_ids != "" && dfp_preview_ids!= undefined && dfp_preview_ids.length!=0)) && catfish_enabled === 1) {
            console.log("inside catfish");
                googletag.cmd.push(function() {
        googletag.display('dfp-ad-catfish');
    });

        }
            </script>
</div>
<script type="text/javascript">
    if( window.innerWidth<=740 && document.getElementById("dfp-ad-catfish-mobile") != null) {
     var element = document.getElementById("dfp-ad-catfish");
      element.parentNode.removeChild(element);
      document.getElementById("dfp-ad-catfish-mobile").id = "dfp-ad-catfish";
    }
</script>


    </div>
  </div>
<div class="views-element-container settings-tray-editable block block-views block-views-blockbreaking-news-allpages-alert-banner" id="block-views-block-breaking-news-allpages-alert-banner" data-drupal-settingstray="editable">
  
    
      <div class="content">
      <div><div class="view view-breaking-news view-id-breaking_news view-display-id-allpages_alert_banner js-view-dom-id-a10e39d8e71beae7565816adc4196f6d8807eb9daa6dd584fed74ff9ffba9c0e">
  
    
      
  
          </div>
</div>

    </div>
  </div>
  <div class="layout layout--onecol">
    <div  class="layout__region layout__region--content">
      
<div  class="node-header">
      <div> <div class="paid-premium st-flag-1">For Subscribers</div> </div>
    
            <h1  class="headline node-title" itemprop="headline">
                          Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?  

      
      </h1>
  


  </div>
    
                          <h1  class="node-subheadline" >
      Preparing for an initial public offering is just one reason why Lazada cut jobs.</h1>
      
  


<div  class="group-byline-info">
          
                          <div  class="field-byline" >
      <p>Xu Le and Samer Elhajjar</p>
</div>
      
  


  </div>
    
            <div  class="media-group" itemprop="image" itemtype="http://schema.org/ImageObject">
                                <div   class="media-entity" >
      <div class="media media--type-image media--view-mode-image-with-caption ds-1col clearfix">

  

  
<figure  itemprop="image" class="group-image-frame">
      
            <div class="field field--name-field-media-image field--type-image field--label-hidden field__item">  <img loading="lazy" src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2024/02/01/ailazada310124.jpg?itok=222BmUbz" class="image-style-large30x20" />


</div>
      
<figcaption  class="group_image_caption full-width-caption">
          
                          <span  class="caption-text" >
      Lazada has axed an estimated 25 to 50 per cent of its Southeast Asian headcount. </span>
      
  

    
                          <span  class="caption-credit" >
      ST PHOTO: ONG WEE JIN</span>
      
  


  </figcaption>

  </figure>


</div>

</div >
      
      </div>
  


<div  class="group_row">
      
<div  class="group-story-timestamp">
            <div  class="group-story-changedate">
            <div  class="field-label-inline">Updated</div>
  
                          <div  class="story-changeddate dropdown-toggle" >
      February 1, 2024 at 5:43 AM</div>
      
  
    </div>

      <div  class="group-story-postdate">
            <div  class="field-label-inline">Published</div>
  
                          <div  class="story-postdate" >
      February 1, 2024 at 5:00 AM</div>
      
  
    </div>


  </div>

            <div class="field field--name-dynamic-twig-fieldnode-social-icons field--type-ds field--label-hidden field__item"><script>
function btnClick() {
  var copyText = document.getElementById("clip_text");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}
function overFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = 1;
  tooltip.style.position = 'relative';
  tooltip.style.top = '-23px';
  tooltip.style.left = '10px';
}
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
  tooltip.style.visibility = 'hidden';
  tooltip.style.opacity = 0;
}
</script>


<div id="subshare-cont-div"></div>
<div class="a2a-buttons a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-title="Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?  ">
  <a class="a2abtn a2a_button_facebook a2a_counter"></a>
  <a class="a2abtn a2a_button_telegram"></a>
  <a class="a2abtn st-icon-gift d-none use-ajax" id="st-icon-gift-btn" href='/subshare/generate_token/1178241/nojs' data-toggle="modal" title="Gift this subscriber-only story to your friends and family"></a> 
<div class="onboarding_text d-none" id="onboarding_text_btn">
  <div class="gift-head"><a class="button-close" data-dismiss="modal"></a></div>
  <div class="gift-subhead"><b>New:</b> Gift this subscriber-only story to your friends and family</div>
</div>


  <span role="presentation" class="a2abtn a2abtn-more dropdown">
  <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" data-display="static" aria-expanded="false"><i>More</i></a>
  <div class="dropdown-menu" role="menu">
    <a class="a2abtn a2a_button_whatsapp"><span>Whatsapp</span></a>
    <a class="a2abtn a2a_button_linkedin"><span>Linkedin</span></a>
    <a class="a2abtn a2a_button_x a2a_counter"><span>Twitter</span></a>
    <a class="a2abtn a2a_button_facebook_messenger"><span>FB Messenger</span></a>
    <a class="a2abtn a2a_button_email"><span>Email</span></a>
    <a class="a2abtn a2a_button_print"><span>Print</span></a>
        <a class="a2abtn button_news_post" href="https://newspost.newslink.sg/?publication=ST&date=02/01/2024&title=Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?  " target="_blank"><span>Purchase Article</span></a>
      <a class="a2abtn stbtn-copy" target="_blank" onclick="btnClick()" onmouseout="outFunc()" onmouseover="overFunc()"><span>Copy permalink</span><span class="tooltiptext" id="myTooltip">Copy to clipboard</span>  </a>
    <div class="permalink">
        <textarea id="clip_text" class="form-control" cols=20 rows=1 readonly>https://str.sg/fFtL</textarea>
     </div>
  </div>
</span>
</div>
<style>
#myTooltip {
 visibility: hidden;
opacity: 0;
}

 .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #fff;
  color: #000;
  border: 1px solid rgba(0,0,0,0.15);
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 55px;
  left: 12%;
  opacity: 0;
  transition: opacity 0.3s;
}
@media (min-width: 740px) {
 .tooltiptext {
    left: 50%;
 }
}

 .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0,0,0,0.15) transparent transparent transparent;
}

.tooltiptext:hover, .stbtn-copy:hover{
  visibility: visible;
  opacity: 1;
}
</style></div>
      
  </div>

<div >
            <div  class="ds-wrapper article-content-rawhtml">
        
            <div  class="ds-field-items">
                                <div  class="ds-field-item" >
      <div class="clearfix text-formatted field field--name-field-paragraph-text field--type-text-long field--label-hidden field__item"><p>A tech firm lays off about 100 staff. The announcement catches most investors and observers off guard. </p><p>If this was 2022 or 2023, you might have guessed we were referring to Grab, Google or frankly, any one of the major tech firms. Last year’s cuts were so staggering, Meta chief executive Mark Zuckerberg termed 2023 “the year of efficiency”. </p></div><div id='nocx_paywall_area'>
  <div class='paywall-container'>
    <div class='subscriber-query-container'> <p class='st'>Already a subscriber?&nbsp;<a class='st login mysph_login' onclick="if(typeof(tag) != 'undefined') return tag.click.send({elem:this, name:'click login article', level2:'7', type:'action'});" href='javascript:;'>Log in</a></p> </div>
    <div class='paywall-content-container'>
      <div class='paywall-header'>
        <h1>Read the full story and more at $9.90/month</h1>
        <p class='st'>Get exclusive reports and insights with more than 500 subscriber-only articles every month</p>
      </div>
      <div class='paywall-plan recommended-plan'>
        <div class='recommended'>
          <p class='description'></p>
        </div>
        <div class='paywall-content'>
          <div class='paywall-plan-description'>
            <h3 >ST One Digital</h3>
            <h2><span class='ori-price' style='display:none;'>$9.90</span>&nbsp;<span class='price'>$9.90/month</span></h2>
            <p class='st contract-period'>No contract</p>
            <p class='st'>ST app access on 1 mobile device</p>
          </div>
          <div class='paywall-cta-container'><a class='cta-paywall' data-ga='click' href="https://subscribe.sph.com.sg/express-checkout/?pub_code=st&product_code=THESTRAITSTIMESONEDIGITALMTHLYPREPAID&utm_campaign=st1dfp&utm_source=paywall-st&utm_medium=sph-publication&utm_content=subscribebutton-pay-sg-default-drupal-eco-st1dfp&campaign_code=&utm_term=1178241&go_back_url=https://www.straitstimes.com/opinion/economic-restructuring-on-steroids-retrenchments-as-annual-cost-cutting-exercises-in-tech-firms">
              <p>Subscribe now</p></a></div>
        </div>
      </div>
      <div class='subscription-plan-container'>
        <h4>Unlock these benefits</h4>
        <ul>
          <li><p>All subscriber-only content on ST app and straitstimes.com</p></li>
          <li><p>Easy access any time via ST app on 1 mobile device</p></li>
          <li><p>E-paper with 2-week archive so you won't miss out on content that matters to you</p></li>
        </ul>
      </div>
    </div>
  </div>
          </div>
          <div id='cx_paywall_placeholder'></div>
  <script type='text/javascript'>
  document.addEventListener('ldapLoginDetailsReceived', function(e) {
    var propenmo = window.propenmo1;
    if (typeof propenmo === "undefined") {
      propenmo = -1;
      console.error("propenmo -1");
    }
  }, false);
  </script><div class="ads clearleft"><div id="dfp-ad-imu1-wrapper" class="dfp-tag-wrapper"><div id="dfp-ad-imu1" class="dfp-tag-wrapper greywash">
        <script type="text/javascript">
                      googletag.cmd.push(function() {
        googletag.display('dfp-ad-imu1');
    });

            </script>
</div>
<script type="text/javascript">
    if( window.innerWidth<=740 && document.getElementById("dfp-ad-imu1-mobile") != null) {
     var element = document.getElementById("dfp-ad-imu1");
      element.parentNode.removeChild(element);
      document.getElementById("dfp-ad-imu1-mobile").id = "dfp-ad-imu1";
    }
</script>

</div></div></div>
      
      </div>
  
    </div>


            <div class="field field--name-dynamic-twig-fieldnode-st-boilerplate field--type-ds field--label-hidden field__item">          

<div class="field-name-body" style="border-top:0;padding-top:0px;position:static;"><p class="st_telegram_boilerplate">Join <a href=" https://t.me/TheStraitsTimes" target="_blank" class="st_boilerplate">ST's Telegram channel </a>and get the latest breaking news delivered to you.</p></div>


<style>
p.st_telegram_boilerplate:before {
    display: inline-block;
    content: " ";
    border-radius: 6px;
    height: 6px;
    width: 6px;
    background-color: #12239a;
    margin-left: 0px;
    margin-right: 13px;
}

a.st_boilerplate {
    font-family: "SelaneWebSTForty", Georgia, "Times New Roman", Times, serif;
}
</style>
</div>
            <div  class="story-keywords">
        
            <ul >
                                <li  >
      <a href="/tags/cost-cuttingrestructuring" hreflang="en">Cost-cutting/Restructuring</a></li>
                        <li  >
      <a href="/tags/job-cuts" hreflang="en">Job cuts</a></li>
                        <li  >
      <a href="/tags/technology-sector" hreflang="en">Technology sector</a></li>
                        <li  >
      <a href="/tags/employment" hreflang="en">Employment</a></li>
                        <li  >
      <a href="/tags/singapore-economy" hreflang="en">Singapore economy</a></li>
      
      </ul>
  
    </div>


            <div class="field field--name-dynamic-twig-fieldnode-social-icons-bottom field--type-ds field--label-hidden field__item"><script>
function btnClick2() {
  var copyText = document.getElementById("clip_text2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
</script>
<div id="subshare-cont-div"></div>
<div class="a2a-buttons a2a_kit a2a_kit_size_32 a2a_default_style clearfix" data-a2a-title="Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?  ">
  <a class="a2abtn a2a_button_facebook a2a_counter"></a>
  <a class="a2abtn a2a_button_telegram"></a>
  <a class="a2abtn st-icon-gift d-none use-ajax" id="st-icon-gift-btn" href='/subshare/generate_token/1178241/nojs' data-toggle="modal" title="Gift this subscriber-only story to your friends and family"></a> 
<span role="presentation" class="a2abtn a2abtn-more dropdown">
  <a class="dropdown-toggle" data-toggle="dropdown" href="#" data-display="static" role="button" aria-expanded="false"><i>More</i></a>
  <div class="dropdown-menu" role="menu">
   <a class="a2abtn a2a_button_whatsapp"><span>Whatsapp</span></a>
    <a class="a2abtn a2a_button_linkedin"><span>Linkedin</span></a>
    <a class="a2abtn a2a_button_x a2a_counter"><span>Twitter</span></a>
    <a class="a2abtn a2a_button_facebook_messenger"><span>FB Messenger</span></a>
    <a class="a2abtn a2a_button_email"><span>Email</span></a>
    <a class="a2abtn a2a_button_print"><span>Print</span></a>
          <a class="a2abtn button_news_post" href="https://newspost.newslink.sg/?publication=ST&date=02/01/2024&title=Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?  " target="_blank"><span>Purchase Article</span> 
      </a>
       <a class="a2abtn stbtn-copy" target="_blank" onclick="btnClick2()"><span>Copy permalink</span></a>
    <div class="permalink">
        <textarea id="clip_text2" class="form-control" cols=20 rows=1 readonly>https://str.sg/fFtL</textarea>
     </div>
  </div>
</span>
  </div>

 <!--token anoy popup starts-->
<div class="modal fade" id="tokenanoyModal" role="dialog" style="display: none;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="giftContents">
             <a class="giftbox-button-close" data-dismiss="modal"></a>
             <div class="giftbox_placeholder"></div>
             <div class="gift-head">Read this subscriber-only article for free!</div>      
             <div class="gift-subhead"><span class="gift_login">Just<a style="cursor: pointer;" id="mysph_subscription" class="mysph_signup"> sign up</a> for a free account and <a style="cursor: pointer;" id="sph_login" class="mysph_login">log in</a> to continue reading.</span></div>
             <div class="gift-wrapper">
               <div class="story-content">Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?  </div>
             </div>
             <div class="gifbtn_container"><a style="cursor: pointer;" class="bluebtn signup mysph_signup">Sign up</a></div>
              <div class="gift-head"></div>
              <div class="gift-subhead">Already have an account? <a style="cursor: pointer;" id="sph_login" class="mysph_login">Log in.</a></div>
          </div>
        </div>
      </div>
    </div>
</div>

<!--token popup starts-->
<div class="modal fade" id="tokenModal" role="dialog" style="display: none;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="giftContents">
             <a class="giftbox-button-close" data-dismiss="modal"></a>
             <div class="giftbox_placeholder"></div>
             <div class="gift-head">All done! This article is now fully available for you</div>
             <div class="gift-wrapper">
               <div class="story-content">Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?  </div>
             </div>
             <div class="gifbtn_container">
              <div class="bluebtn giftreadbtn">Read now</div>
             </div>

          </div>
        </div>
      </div>
    </div>
</div>


<!--token email-->
<div class="modal fade" id="tokenVerifyModal" role="dialog" style="display: none;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="giftContents">
             <a class="giftbox-button-close" data-dismiss="modal"></a>
             <div class="giftbox_placeholder"></div>
             <div class="gift-head">Please verify your e-mail to read this subscriber-only article in full</div>
             <div class="gift-wrapper">
               <div class="story-content">Economic restructuring on steroids: Retrenchments as annual cost-cutting exercises in tech firms?  </div>
             </div>
             <div class="gifbtn_container">
              <a style="cursor: pointer;" class="bluebtn verifybtn mysph_verify_email" href="javascript:;">Resend verification e-mail</a>
             </div>

          </div>
        </div>
      </div>
    </div>
</div>

<!--expiredModal popup starts-->
<div class="modal fade" id="expiredModal" role="dialog" style="display: none;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="giftContents">
             <a class="giftbox-button-close" data-dismiss="modal"></a>
             <div class="giftbox_placeholder"></div>
             <div class="gift-head">The gift link for this subscriber-only article has expired.</div>      
             <div class="gift-subhead">Get unlimited access to all stories at $0.99/month for the first 3 months.</div>
             <div style="text-align: center;">
              <div class="gift_subscribe"><a href="https://subscribe.sph.com.sg/promotions/st-3-months-99-cents?utm_campaign=stad3099&utm_medium=sph-publication&utm_source=subshare-st&utm_content=subscribebutton-expiredlink-pay">Subscribe now</a></div>
             </div>
          </div>
        </div>
      </div>
    </div>
</div>

<!--gift quota exceed starts-->
<div class="modal fade" id="exceedQuotaModal" role="dialog" style="display: none;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="giftContents">
             <a class="giftbox-button-close" data-dismiss="modal"></a>
             <div class="giftbox_placeholder"></div>
             <div class="gift-head">You have reached your limit of subscriber-only articles this month.</div>
             <div class="gift-subhead">Get unlimited access to all stories at $0.99/month for the first 3 months.</div>
             <div class="gift_subscribe"><a href="https://subscribe.sph.com.sg/promotions/st-3-months-99-cents?utm_campaign=stad3099&utm_medium=sph-publication&utm_source=subshare-st&utm_content=subscribebutton-articlelimit-pay">Subscribe now</a></div>
          </div>
        </div>
      </div>
    </div>
</div>

<!--gamificatnion popup-->
<div class="st-gamification">
 <div class="modal fade" tabindex="-1" role="dialog" id="modal-article" style="display: none;">
      <div class="modal-dialog custom" role="document"> 
        <div class="modal-content">
          <div class="modal-header">
            <div class="prize-imgholder" style="background-image: url(https://static.straitstimes.com.sg/rewards/st_voucher.png);"></div>
            <a class="close" data-dismiss="modal"></a>
          </div>
          <div class="modal-body">
            <div class="modal_h1_text">Read and win!</div>
            <p class="subtext">Read <span class="read_cnt_lightbox">3</span> articles and stand to win rewards</p>
            <button class="btn default rewards-go" data-rewardsgo="nomoe">Let's go!</button>
            <div class="prize-other"> 
              <div class="tnc"><a class="txt" href="javascript:void(0)" onclick="window.open('/rewards-tnc','_blank');">Terms &amp; conditions </a>apply</div>
              <div class="faq"><a class="txt" href="javascript:void(0)" onclick="window.open('/faq-rewards','_blank');">Frequently asked questions</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

<div class="st-gamification">
 <div class="modal fade" tabindex="-1" role="dialog" id="modal-article-read3" style="display: none;">
      <div class="modal-dialog custom" role="document"> 
        <div class="modal-content">
          <div class="modal-header">
            <div class="prize-imgholder" style="background-image: url(https://static.straitstimes.com.sg/rewards/st_voucher.png);"></div>
            <a class="close" data-dismiss="modal"></a>
          </div>
          <div class="modal-body">
            <div class="modal_h1_text">Good job, you've read <span class="read_cnt_lightbox">3</span> articles today!</div>
            <p class="subtext">Spin the wheel now</p>
            <button class="btn default rewards-go-read3" data-rewardsread3="nomoe">Let's go!</button>
            <div class="prize-other"> 
              <div class="tnc"><a class="txt" href="javascript:void(0)" onclick="window.open('/rewards-tnc','_blank');">Terms &amp; conditions </a>apply</div>
              <div class="faq"><a class="txt" href="javascript:void(0)" onclick="window.open('/faq-rewards','_blank');">Frequently asked questions</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div></div>
      
  </div>

            <div class="field field--name-dynamic-twig-fieldnode-outbrain field--type-ds field--label-hidden field__item"><script data-obct type="text/javascript">
  /** DO NOT MODIFY THIS CODE**/
  !function(_window, _document) {
    var OB_ADV_ID='00529a8e9e01c3bfad3c4bd7ec1ab148f6';
    if (_window.obApi) {var toArray = function(object) {return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];};_window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;}
    var api = _window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = '1.1';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = _document.createElement('script');tag.async = true;tag.src = '//amplify.outbrain.com/cp/obtp.js';tag.type = 'text/javascript';var script = _document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag, script);}(window, document);
  
  obApi('track', 'PAGE_VIEW');
</script>
<div class="OUTBRAIN" data-widget-id="AR_6" ></div>
<div class="OUTBRAIN" data-widget-id="AR_4" ></div>
<script  type="text/javascript">
  if(outbrain_enable==undefined) { var outbrain_enable = 1; }
  if( outbrain_enable == 0 ) { var outbrain_elements = document. getElementsByClassName("OUTBRAIN"); while (outbrain_elements.length > 0) outbrain_elements[0].remove(); }
</script>
</div>
      
    </div>
  </div>



                </section>
              </main>
                                  </div>
        </div>
          </div>
        <footer class="site-footer">
              <div class="container">
                      <div class="site-footer__top clearfix">
                <section class="row region region-footer-first">
    <div id="block-stfooter" class="settings-tray-editable block block-block-content block-block-contentf12af1e4-dfcb-40fc-8266-f184a089f2cc" data-drupal-settingstray="editable">
  
    
      <div class="content">
      
            <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><style type="text/css">
<!--/*--><![CDATA[/* ><!--*/
.page-view-container-pages .subscribers-b-1-8 .b-1-8::before, .node--type-container-page .subscribers-b-1-8 .b-1-8::before {

 border-bottom:none;
}


.page-view-container-pages .subscribers-b-1-8 .content, .node--type-container-page .subscribers-b-1-8 .content {
 background-color: #FFF;
}


 .page-view-container-pages .subscribers-b-1-8, .node--type-container-page .subscribers-b-1-8 {
background-color: #FFF;
box-shadow:  none; 

 }





#block-mysphblock .content .user-signup-section .dropdown.show .mysph-dropdown-menu {
 min-width:190px;
}

@media (max-width: 1200px) { .skinning_reference { width: 100% !important; } }
    .page-view-container-pages.scrolled .header {
        z-index:101 !important;
    }
@media (max-width: 739.98px) {
    body:not(.path-frontpage) .top-stories-area .row-1 .card .card-media,
    body:not(.path-global) .top-stories-area .row-1 .card .card-media {
        border-bottom: 1px solid rgba(114, 127, 142, 0.5);
        padding-bottom: 10px;
    }

    body.path-frontpage .top-stories-area .row-1 .card .card-media,
    body.path-global .top-stories-area .row-1 .card .card-media {
        border-bottom: 0 !important;
        padding-bottom: 0 !important;
    }

    .page-view-container-pages .top-stories-area .row-5 .card .card-media,
    .node--type-container-page .top-stories-area .row-5 .card .card-media {
        padding-top: 10px;
    }

    body.node--type-container-page .node__content .card .card-body {
        padding: 3px 15px 10px 15px;
    }

    .page-view-container-pages .card .card-body,
    .node--type-container-page .card .card-body {
        padding: 3px 15px 10px 15px;
    }

    .page-view-container-pages .block-layout .row div:not(.col-sm:first-child) .row-5 .card .card-media, 
    .node--type-container-page .block-layout .row div:not(.col-sm:first-child) .row-5 .card .card-media {
        padding-top: 10px;
    }
}

.path-global .highlighted {
    margin: 0;
    border: 0;
}

@media (min-width: 1440px) {
    .page-view-container-pages .layout__region--content .block-st-layouts>h2, 
    .node--type-container-page .layout__region--content .block-st-layouts>h2 {
        background-image: none;
    }
}

@media (min-width: 1440px) {
    .page-view-container-pages .layout__region--content .block-st-layouts, .node--type-container-page .layout__region--content .block-st-layouts { 
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' stroke='%23727f8e' stroke-linecap='butt' stroke-linejoin='round' fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 .5h10m-10 5h10' stroke-opacity='0.5'/%3E%3C/svg%3E");
    }
}

@media (min-width: 1440px) {
    .a-1-8 .row-4 .card .card-body {
        padding-bottom:0;
    }
    .a-1-8 .row-4 .card .card-body .card-title {
        margin-bottom: 0;
    }
}

.node--type-article #dfp-ad-imu1.greywash {
   display: block;
}

@media (min-width: 1440px) {
    .page-view-container-pages .no-top-border.block-st-layouts, .node--type-container-page .no-top-border.block-st-layouts {
        background-image: none !important;
    }
}
@media (min-width: 1440px) {
    .b-2-8 .row-1 .card .card-body .card-title,
    .b-2-8 .row-1 .card .card-body .card-title a {
        font-size: 30px;
        line-height: 34px;
    }
}

@media (min-width: 1440px) {
.page-view-container-pages .articles-latest-term-by-url.block-st-layouts, 
.node--type-container-page .articles-latest-term-by-url.block-st-layouts {
    background-image: none;
}
}
@media (min-width: 740px){
    .block-block-interactives-articles .view-content.row .card-story-with-time .card-body {
        width: 100%;
    }
    .stlayouts_container_b_2_8 .row-1 .card,
    .stlayouts_container_b_2_8 .row-2 .card{
	  border-top: 0px;
    }
}
.stlayouts_container_a_4_8 .row-1 .card-title {
    position:relative;
}
.stlayouts_container_a_4_8 .card-story-with-live-video>.card .card-title::before {
    top: 9px;
}
@media (min-width: 740px) {
    .stlayouts_container_a_4_8 .row-6 .card-title a,
    .stlayouts_container_a_4_8 .row-7 .card-title a,
    .stlayouts_container_a_4_8 .row-8 .card-title a {
        line-height: 23px;
    }
}

@media (max-width: 740px) {
.stlayouts_container_a_5_8 .row-3 .card .card-body,
.stlayouts_container_a_6_8 .row-3 .card .card-body {
    border-top: 1px solid rgba(114, 127, 142, 0.5);
}
#twenty_four_liveblog_widget_block .group-liveblog-heading {
    padding-left: 8px; 
}
#twenty_four_liveblog_widget_block .liveblog-block {
    padding: 0 5px;
}
#twenty_four_liveblog_widget_block .group-liveblog-heading .liveblog-link {
    right: 14px;
}
.path-frontpage .top-special-area h2, .path-global .top-special-area h2 {
    display: block !important;
}

 .path-taxonomy .mobile-menu--section { height:auto; }
 .path-taxonomy .mobile-menu--section .web-category-name { line-height: normal; }


}

@media (max-width: 740px) {

.live-coverage-page .block-inline-blocklive-coverage .st-blog-article-container-wrapper .video-wrapper iframe {
 height: 53vw;
}
.live-coverage-page .block-inline-blocklive-coverage .st-blog-article-container-wrapper .sticky .video-wrapper iframe {
   height: 100%;
   position: absolute;
}

.live-coverage-page .block-inline-blocklive-coverage .st-blog-article-container-wrapper .row .col-md-4 #sticky-video .video-wrapper {
    padding-bottom: 56.25%;
   height: 0;
   margin-bottom: 20px;
}
}

@media (min-width: 740px) and (max-width: 1200px) {

.live-coverage-page .block-inline-blocklive-coverage .st-blog-article-container-wrapper .video-wrapper iframe {
	height: 220px;
}

}


@media (max-width: 479px) {
    .st_liveblog .oembed-provider-youtube iframe {
        width: 100% !important;
        height: 100% !important;
    }
    .live-coverage-page .block-inline-blocklive-coverage .live-blog-container p+div {
        margin-bottom: 20px;
    }
    .live-coverage-page .block-inline-blocklive-coverage .live-blog-container p+*:not(p) {
        margin-top: 20px;
    }
}
.node--type-container-page .card .fadecount1 ul li,
.node--type-container-page .card .fadecount2 ul li,
.node--type-container-page .card .fadecount3 ul li,
.node--type-container-page .card .fadecount4 ul li,
.node--type-container-page .card .fadecount5 ul li,
.node--type-container-page .card .fadecount6 ul li,
.node--type-container-page .card .fadecount7 ul li,
.node--type-container-page .card .fadecount8 ul li{
    width: 100%;
}

@media (min-width: 1200px){
   #block-mysphblock .content .user-signup-section>a::before {
    top: 0px !important;
   }
}


@media (max-width: 740px) {
   .mobile-menu--section .web-category-name a {
     display: inline-block;
     text-align: center;
     width: 100%;
   }
}

/*--><!]]>*/
</style><div class="footer-apps-info row">
<div class="col-md-6 site-logo">
<h4><span>The Straits Times</span></h4>
</div>

<div class="col-md-3 col apps-ios"><a class="app-btn ios" href="https://itunes.apple.com/sg/app/the-straits-times-for-iphone/id547465441?mt=8">Available for<br />
iPhones and iPads </a></div>

<div class="col-md-3 col apps-android"><a class="app-btn android" href="https://play.google.com/store/apps/details?id=com.buuuk.st&amp;hl=en">Available in<br />
Google Play </a></div>
</div>

<div class="footer-site-info clearfix">
<div class="footer-item subscription">
<div class="block-subscribe"><a href="https://subscribe.sph.com.sg/publications-st/?utm_campaign=st_subscription&amp;utm_medium=sph-publication&amp;utm_source=st&amp;utm_content=subscribebutton-footer"><img alt="" src="https://www.straitstimes.com/themes/custom/straitstimes/images/st-subscribe-placeholder.jpg" /></a></div>

<div class="subscribe-img"> </div>
</div>

<div class="footer-item social-buttons">
<div class="block-social-buttons">
<ul class="list-group list-footer"><li class="list-group-item"><a class="fa fa-pdf" href="https://stepaper.straitstimes.com/" target="_blank">E-paper</a></li>
	<li class="list-group-item"><a class="fa fa-facebook" href="https://www.facebook.com/TheStraitsTimes" target="_blank">Facebook</a></li>
	<li class="list-group-item"><a class="fa fa-instagram" href="https://instagram.com/straits_times" target="_blank">Instagram</a></li>
	<li class="list-group-item"><a class="fa fa-twitter" href="https://twitter.com/straits_times" target="_blank">Twitter</a></li>
	<li class="list-group-item"><a class="fa fa-linkedin" href="https://sg.linkedin.com/company/the-straits-times" target="_blank">LinkedIn</a></li>
	<li class="list-group-item"><a class="fa fa-podcast" href="/st-podcasts" target="_blank">Podcasts</a></li>
	<li class="list-group-item"><a class="fa fa-rss" href="/RSS-Feeds" target="_blank">RSS Feed</a></li>
	<li class="list-group-item"><a class="fa fa-telegram" href="https://t.me/TheStraitsTimes" target="_blank">Telegram</a></li>
	<li class="list-group-item"><a class="fa fa-youtube" href="https://www.youtube.com/user/StraitsTimesOnline" target="_blank">Youtube</a></li>
	<li class="list-group-item"><a class="fa fa-tiktok" href="https://www.tiktok.com/@straitstimes" target="_blank">TikTok</a></li>
</ul></div>
</div>

<div class="footer-item">
<div class="block-footer-menu-links row">
<ul class="col list-group list-footer"><li class="item-874 list-group-item"><a href="/singapore">Singapore</a></li>
	<li class="item-19759 list-group-item"><a href="/asia">Asia</a></li>
	<li class="item-873 list-group-item"><a href="/world">World</a></li>
	<li class="item-875 list-group-item"><a href="/opinion">Opinion</a></li>
	<li class="item-877 list-group-item"><a href="/life">Life</a></li>
	<li class="item-19741 list-group-item"><a href="/business">Business</a></li>
</ul><ul class="col list-group list-footer"><li class="item-19782 list-group-item"><a href="/tech">Tech</a></li>
	<li class="item-878 list-group-item"><a href="/sport">Sport</a></li>
	<li class="item-19776 list-group-item"><a href="/videos">Videos</a></li>
	<li class="item-490943 list-group-item"><a href="/st-podcasts">Podcasts</a></li>
	<li class="item-189686 list-group-item"><a href="/multimedia">Multimedia</a></li>
</ul></div>
</div>

<div class="footer-item">
<div class="block-selfhelp-newsletter">
<ul class="list-unstyled list-footer"><li><a href="https://www.straitstimes.com/singapore/about-the-straits-times-leadership">About Us</a></li>
	<li><a href="https://www.sph.com.sg/legal/website_tnc/">Terms &amp; Conditions</a></li>
	<li><a href="https://www.sph.com.sg/legal/sph_privacy/">Privacy Policy</a></li>
	<li><a class="use-ajax" href="/helpform/form/nojs">Need help? Reach us here.</a></li>
	<li><a href="https://www.sph.com.sg/advertising-solutions">Advertise with us</a></li>
</ul><div class="signup-newsletter">
<div><span class="fa fa-newsletter">Sign up for our daily newsletter</span></div>

<div class="stsph-cta-inputarea" id="stsph-cta-inputarea-footer">
<div class="stsph-cta-messagearea hidden1">Thank you!</div>
<input name="stsph-cta-email" placeholder="Enter your e-mail" type="text" /><a class="stsph-cta-submit">Sign up</a></div>

<div class="subbertext">More <a href="/newsletter-signup">newsletters</a></div>

<div class="subbertext">By registering, you agree to our T&amp;C and Privacy Policy.</div>
</div>
</div>
</div>
</div>

<div class="footer-copyright clearfix">
<p class="text-center">MCI (P) 066/10/2023. Published by SPH Media Limited, Co. Regn. No. 202120748H. Copyright © 2024 SPH Media Limited. All rights reserved.</p>
</div>
<script>
<!--//--><![CDATA[// ><!--

document.addEventListener('ldapLoginDetailsReceived', function(e) {
  if((token_data.usertype == 'sub' || token_data.usertype == 'reg') && token_data.loginid != "") {
    jQuery(".my-rewards").removeClass("d-none");
    jQuery(".my-rewards-login").addClass("d-none");

    jQuery('.st-icon-gift').css("display","block");
  }
 });
if(document.getElementById("block-mysphblock--2")) {
    document.getElementById("block-mysphblock--2").id = "block-mysphblock";
}


jQuery(".date-weather-st-index-widget .psi-widget > div").css("display", "none");


if(location.hostname == "staff.straitstimes.com"){
  postitial_enabled = 0;
    prestitial_enabled = 0;
    catfish_enabled = 0;
    canRunAds = 0;
}


//--><!]]>
</script><script>
<!--//--><![CDATA[// ><!--

jQuery('.group-story-timestamp').ready(function () {
      jQuery('.group-story-timestamp').hide();
        var today = new Date();
        var tweleveHoursAgo = new Date(today.getTime() - (1000*60*60*12));
        var tweleveHoursAgoTimeStamp = Math.round((tweleveHoursAgo).getTime() / 1000);
        var articleStatus = articleData.status;
        var articlePublishOn = articleData.publish_on;
        var dateFormat = {
            timeZone: 'Asia/Singapore',
            day:   'numeric',
            month: 'short',
            year:  'numeric',
            hour:   'numeric',
            minute: '2-digit',
            hour12: true,
        };
        if(typeof articleData.changed !== "undefined" && jQuery('.story-changeddate').length > 0) {
            var changed = articleData.changed;
            var changeDate = new Date((changed * 1000));
            if(changed > tweleveHoursAgoTimeStamp) {
                var microSecondsDiff = Math.abs(changeDate.getTime() - today.getTime());
                var hoursDiff = Math.floor(microSecondsDiff / (1000 * 60 * 60));
                var minsDiff = Math.floor(microSecondsDiff / (1000 * 60));
                var secsDiff = Math.floor(microSecondsDiff / 1000);
                if(hoursDiff == 1) {
                    jQuery('.story-changeddate').html(hoursDiff + ' Hour Ago');
                } else if(hoursDiff > 1) {
                    jQuery('.story-changeddate').html(hoursDiff + ' Hours Ago');
                } else if(minsDiff == 1) {
                    jQuery('.story-changeddate').html(minsDiff + ' Min Ago');
                } else if(minsDiff > 1) {
                    jQuery('.story-changeddate').html(minsDiff + ' Mins Ago');
                } else {
                    jQuery('.story-changeddate').html(secsDiff + ' Secs Ago');
                }
            } else {
                jQuery('.story-changeddate').html(changeDate.toLocaleString(undefined, dateFormat) + ' SGT');
            }
        }
        if(typeof articleData.created !== "undefined" && jQuery('.story-postdate').length > 0) {
            if(articleStatus == 0 && articlePublishOn != '' && articlePublishOn != null) {
                var created = articlePublishOn;
                jQuery('.group-story-postdate .field-label-inline').html('Scheduled Published On');
                var createdDate = new Date((created * 1000));
                jQuery('.story-postdate').html(createdDate.toLocaleString(undefined, dateFormat) + ' SGT');
            } else {
                var created = articleData.created;
                var createdDate = new Date((created * 1000));
                if(created > tweleveHoursAgoTimeStamp) {
                    var microSecondsDiff = Math.abs(createdDate.getTime() - today.getTime());
                    var hoursDiff = Math.floor(microSecondsDiff / (1000 * 60 * 60));
                    var minsDiff = Math.floor(microSecondsDiff / (1000 * 60));
                    var secsDiff = Math.floor(microSecondsDiff / 1000);
                    if(hoursDiff == 1) {
                        jQuery('.story-postdate').html(hoursDiff + ' Hour Ago');
                    } else if(hoursDiff > 1) {
                        jQuery('.story-postdate').html(hoursDiff + ' Hours Ago');
                    } else if(minsDiff == 1) {
                        jQuery('.story-postdate').html(minsDiff + ' Min Ago');
                    } else if(minsDiff > 1) {
                        jQuery('.story-postdate').html(minsDiff + ' Mins Ago');
                    } else {
                        jQuery('.story-postdate').html(secsDiff + ' Secs Ago');
                    }
                } else {
                    jQuery('.story-postdate').html(createdDate.toLocaleString(undefined, dateFormat) + ' SGT');
                }
            }
        }
        jQuery('.group-story-timestamp').show();

    });

 

//--><!]]>
</script></div>
      
    </div>
  </div>

  </section>

              
              
              
            </div>
                            </div>
          </footer>
    <div class="back-to-top hidden-print">
      <a href="#main-content" class="d-none d-sm-block">Back to the top <img src="https://www.straitstimes.com/themes/custom/straitstimes/images/arrow-up.svg"/></a>
      <a href="#main-content" class="d-block d-sm-none"><img src="https://www.straitstimes.com/themes/custom/straitstimes/images/arrow-up.svg"/></a>
    </div>
  </div>
</div>

  </div>

    
    <script src="/core/misc/polyfills/nodelist.foreach.js?v=9.5.11"></script>
<script src="/core/assets/vendor/css-escape/css.escape.js?v=1.5.1"></script>
<script src="/core/assets/vendor/es6-promise/es6-promise.auto.min.js?v=4.2.8"></script>
<script src="/themes/custom/straitstimes/js/popper.min.js?v=9.5.11"></script>
<script src="/themes/custom/straitstimes/js/bootstrap.min.js?v=9.5.11"></script>
<script src="/core/assets/vendor/tabbable/index.umd.min.js?v=5.3.3"></script>
<script src="/core/misc/progress.js?v=9.5.11"></script>
<script src="/core/assets/vendor/loadjs/loadjs.min.js?v=4.2.0"></script>
<script src="/core/modules/responsive_image/js/responsive_image.ajax.js?v=9.5.11"></script>
<script src="/core/misc/ajax.js?v=9.5.11"></script>
<script src="/themes/custom/straitstimes/js/global.js?v=9.5.11"></script>
<script src="/themes/custom/straitstimes/js/neuron_tagging.js?v=9.5.11" async></script>
<script src="/themes/custom/straitstimes/js/jquery.cycle.all.js?v=9.5.11"></script>
<script src="/themes/custom/straitstimes/js/iframeResizer.min.js?v=9.5.11"></script>
<script src="/themes/custom/straitstimes/js/sidebar-textbox.js?v=9.5.11"></script>
<script src="//static.addtoany.com/menu/page.js" defer async></script>
<script src="/themes/custom/straitstimes/js/jquery.smartbanner.js?v=9.5.11"></script>
<script src="//www.queryly.com/js/queryly.v4.js"></script>
<script src="//www.queryly.com/js/straitstimes-advanced-search.js"></script>
<script src="/themes/custom/straitstimes/js/queryly-search.js?v=9.5.11"></script>
<script src="/modules/custom/st_rewards/js/appear.js?s7r62y"></script>
<script src="/modules/custom/st_rewards/js/reward_points.js?s7r62y"></script>
<script src="/modules/custom/st_subshare/js/subshare.js?v=1.x"></script>
<script src="/modules/custom/st_article/js/article-details.js?v=1.x"></script>
<script src="/modules/custom/st_article/js/article-sphwave.js?v=1.x"></script>

  <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"NRBR-70564e4017ab43d3811","applicationID":"1043717233","transactionName":"bwEDZUdYDBBVAUdeV1ZLIFJBUA0NGyZBQkhZCD1fWl0HP3cNXUNKVwgNVEdlLAxQB2VeXU8nDl9BSw0PWAdBGgZODQRG","queueTime":0,"applicationTime":361,"atts":"Q0YAEw9CHx4=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
