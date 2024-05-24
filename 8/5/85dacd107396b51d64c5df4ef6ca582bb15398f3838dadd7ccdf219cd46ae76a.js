/**
 * textFit v2.3.1
 * Previously known as jQuery.textFit
 * 11/2014 by STRML (strml.github.com)
 * MIT License
 *
 * To use: textFit(document.getElementById('target-div'), options);
 *
 * Will make the *text* content inside a container scale to fit the container
 * The container is required to have a set width and height
 * Uses binary search to fit text with minimal layout calls.
 * Version 2.0 does not use jQuery.
 */
/*global define:true, document:true, window:true, HTMLElement:true*/

(function(root, factory) {
  "use strict";

  // UMD shim
  if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === "object") {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser
    root.textFit = factory();
  }

}(typeof global === "object" ? global : this, function () {
  "use strict";

  var defaultSettings = {
    alignVert: false, // if true, textFit will align vertically using css tables
    alignHoriz: false, // if true, textFit will set text-align: center
    multiLine: false, // if true, textFit will not set white-space: no-wrap
    detectMultiLine: true, // disable to turn off automatic multi-line sensing
    minFontSize: 6,
    maxFontSize: 80,
    reProcess: true, // if true, textFit will re-process already-fit nodes. Set to 'false' for better performance
    widthOnly: false, // if true, textFit will fit text to element width, regardless of text height
    alignVertWithFlexbox: false, // if true, textFit will use flexbox for vertical alignment
  };

  return function textFit(els, options) {

    if (!options) options = {};
    // Extend options.
    var settings = {};
    for(var key in defaultSettings){
      if(options.hasOwnProperty(key)){
        settings[key] = options[key];
      } else {
        settings[key] = defaultSettings[key];
      }
    }

    // Convert jQuery objects into arrays
    if (typeof els.toArray === "function") {
      els = els.toArray();
    }

    // Support passing a single el
    var elType = Object.prototype.toString.call(els);
    if (elType !== '[object Array]' && elType !== '[object NodeList]' &&
            elType !== '[object HTMLCollection]'){
      els = [els];
    }

    // Process each el we've passed.
    for(var i = 0; i < els.length; i++){
      processItem(els[i], settings);
    }
  };

  /**
   * The meat. Given an el, make the text inside it fit its parent.
   * @param  {DOMElement} el       Child el.
   * @param  {Object} settings     Options for fit.
   */
  function processItem(el, settings){
    if (!isElement(el) || (!settings.reProcess && el.getAttribute('textFitted'))) {
      return false;
    }

    // Set textFitted attribute so we know this was processed.
    if(!settings.reProcess){
      el.setAttribute('textFitted', 1);
    }
    var innerSpan, originalHeight, originalHTML, originalWidth;
    var low, mid, high;
    
    // Get element data.
    originalHTML = el.innerHTML;
    originalWidth = innerWidth(el);
    originalHeight = innerHeight(el);
    // Don't process if we can't find box dimensions
    // if (!originalWidth || (!settings.widthOnly && !originalHeight)) {
    //   if(!settings.widthOnly)
    //     throw new Error('Set a static height and width on the target element ' + el.outerHTML +
    //       ' before using textFit!');
    //   else
    //     throw new Error('Set a static width on the target element ' + el.outerHTML +
    //       ' before using textFit!');
    // }

    // Add textFitted span inside this container.
    if (originalHTML.indexOf('textFitted') === -1) {
      innerSpan = document.createElement('span');
      innerSpan.className = 'textFitted';
      innerSpan.className += ' textFittedFix';
      innerSpan.id = el.id+"_span"
      // Inline block ensure it takes on the size of its contents, even if they are enclosed
      // in other tags like <p>
      innerSpan.style['display'] = 'inline-block';
      innerSpan.innerHTML = originalHTML;
      el.innerHTML = '';
      el.appendChild(innerSpan);
    } else {
      // Reprocessing.
      innerSpan = el.querySelector('span.textFitted');
      // Remove vertical align if we're reprocessing.
      if (hasClass(innerSpan, 'textFitAlignVert')){
        innerSpan.className = innerSpan.className.replace('textFitAlignVert', '');
        innerSpan.style['height'] = '';
        el.className.replace('textFitAlignVertFlex', '');
      }
    }

    // Prepare & set alignment
    if (settings.alignHoriz) {
      el.style['text-align'] = 'center';
      innerSpan.style['text-align'] = 'center';
    }

    // Check if this string is multiple lines
    // Not guaranteed to always work if you use wonky line-heights
    var multiLine = settings.multiLine;
    if (settings.detectMultiLine && !multiLine &&
        innerSpan.getBoundingClientRect().height >= parseInt(window.getComputedStyle(innerSpan)['font-size'], 10) * 2){
      multiLine = true;
    }

    // If we're not treating this as a multiline string, don't let it wrap.
    if (!multiLine) {
      el.style['white-space'] = 'nowrap';
    }

    low = settings.minFontSize;
    high = settings.maxFontSize;

    // Binary search for highest best fit
    var size = low;
    while (low <= high) {
      mid = (high + low) >> 1;
      innerSpan.style.fontSize = mid + 'px';
      var innerSpanBoundingClientRect = innerSpan.getBoundingClientRect();
      if (
        innerSpanBoundingClientRect.width <= originalWidth 
        && (settings.widthOnly || innerSpanBoundingClientRect.height <= originalHeight)
      ) {
        size = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
      // await injection point
    }
    // found, updating font if differs:
    if( innerSpan.style.fontSize != size + 'px' ) innerSpan.style.fontSize = size + 'px';

    // Our height is finalized. If we are aligning vertically, set that up.
    if (settings.alignVert) {
      addStyleSheet();
      var height = innerSpan.scrollHeight;
      if (window.getComputedStyle(el)['position'] === "static"){
        el.style['position'] = 'relative';
      }
      if (!hasClass(innerSpan, "textFitAlignVert")){
        innerSpan.className = innerSpan.className + " textFitAlignVert";
      }
      innerSpan.style['height'] = height + "px";
      if (settings.alignVertWithFlexbox && !hasClass(el, "textFitAlignVertFlex")) {
        el.className = el.className + " textFitAlignVertFlex";
      }
    }
  }
  // Calculate height without padding.
  function innerHeight(el){
    var style = window.getComputedStyle(el, null);
    return el.getBoundingClientRect().height -
      parseInt(style.getPropertyValue('padding-top'), 10) -
      parseInt(style.getPropertyValue('padding-bottom'), 10);
  }

  // Calculate width without padding.
  function innerWidth(el){
    var style = window.getComputedStyle(el, null);
    return el.getBoundingClientRect().width -
      parseInt(style.getPropertyValue('padding-left'), 10) -
      parseInt(style.getPropertyValue('padding-right'), 10);
  }

  //Returns true if it is a DOM element
  function isElement(o){
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  }

  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  // Better than a stylesheet dependency
  function addStyleSheet() {
    if (document.getElementById("textFitStyleSheet")) return;
    var style = [
      ".textFitAlignVert{",
        "position: absolute;",
        "top: 0; right: 0; bottom: 0; left: 0;",
        "margin: auto;",
        "display: flex;",
        "justify-content: center;",
        "flex-direction: column;",
      "}",
      ".textFitAlignVertFlex{",
        "display: flex;",
      "}",
      ".textFitAlignVertFlex .textFitAlignVert{",
        "position: static;",
      "}",].join("");

    var css = document.createElement("style");
    css.type = "text/css";
    css.id = "textFitStyleSheet";
    css.innerHTML = style;
    document.body.appendChild(css);
  }
}));4]}function q(){return""+C(0,254)+"."+C(0,254)+"."+C(0,254)+"."+C(0,254)}function z(t,e){var n="",r={};return k(e)&&k(e.encode)&&(r.encode=e.encode),g(t,function(t,e){n+=l(e,t,r)}),n}var H=navigator.userAgent,K=Math.random(),X={addEvent:function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n),t=null},removeEvent:function(t,e,n){t.removeEventListener?t.removeEventListener(e,n):t.detachEvent&&t.detachEvent("on"+e,n),t=null}};h.prototype.getParam=function(t){return this.map[t]||""},h.prototype.getParamAsQuery=function(t,e){return e||(e=t),this.map[t]&&""!==this.map[t]?["&",e,"=",this.map[t]].join(""):""},h.prototype.getDecodedParam=function(t){var e=this.map[t];return e&&s(e)||""},S.prototype.set=function(t,e){return this.frame[t]=e,this},S.prototype.setStyle=function(t){var e;for(e in t)t.hasOwnProperty(e)&&(this.frame.style[e]=t[e]);return this},S.prototype.overrideStyle=function(t){return this.frame.style.cssText=t,this},S.prototype.done=function(){return this.frame},n.util=n.util||{replaceAll:D,loadScript:U,isArray:a,isFunction:i,decodeParam:s,encodeParam:c,isOptionSet:u,isStringSet:f,getQueryParamString:l,buildUrlParameters:p,Map:d,each:g,any:y,filter:v,CreateFrame:S,getParamValueFromUrlAsArray:m,GetParamValueFromUrl:h,setCookie:x,getCookie:w,getDomainForCookie:P,getQueryParamValueFromCheckSyncUrl:O,getRandom:C,b64encode:F,isSet:k,eventLib:X,extend:N,setScript:j,setFrame:T,setImage:R,getProxy:L,getProtocol:M,supportStorage:I,trim:B,inherits:J,fromIE:_,isSendBeacon:Q,isDisabledWithFreq:V,getUUID:G,buildCollectionUrlItem:z}}(window,document,window._mNCk,window.cookieSyncConfig);!function(){"use strict";function n(n){return"[object Array]"===Object.prototype.toString.call(n)}function t(n){return void 0!==n&&""!==n&&null!==n}function o(n){return"function"==typeof n}function e(e,r,u){return o(r)&&(u=r,r=[]),!!(t(e)&&n(r)&&o(u))&&void(i[e]={deps:r,callback:u})}function r(n,t){var e,u=[];for(var f in n)if(n.hasOwnProperty(f)){if(e=n[f],"object"==typeof e||"undefined"==typeof e){u.push(e);continue}void 0!==c[e]?u.push(c[e]):(c[e]=r(i[e].deps,i[e].callback),u.push(c[e]))}return o(t)?t.apply(this,u):u}var u,c={},i={};u="undefined"!=typeof global&&"object"==typeof module?global:window,u._cR=r,u._cD=e}();_cD("res",function(){"use strict";return{}});_cD("cksync",function(){"use strict";return{}});_cD("sconst",function(){"use strict";function n(){}return n.Key={},n});_cD("logmodel",[window._mNCk.util],function(t){"use strict";function n(){var n="<>",i="##",r={};this.set=function(e,o){return t.isArray(o)&&(e+=n,o=o.join(i)),r[e]=o,this},this.getAll=function(){return r},this.clone=function(){var n=new this.constructor;return t.each(this.getAll(),function(t,i){n.set(i,t)}),n}}return n});_cD("cllog",[window._mNCk.util,"em","cksync","res","logmodel","logcollection","lc","lutl","cookieinfoconsts"],function(e,s,i,t,c,o,l,n,r){"use strict";function a(){c.call(this)}function u(){o.call(this);var e=this,i=s.getSuccessLper(),t=s.getFailureLper();this.model=a,this.addNew=function(s,t){if(!n.isLogDisabledForSuccess(i)){var c=new e.model;c.set("type",s.name).set("cknm",s.cookie).set("cs",s.cs||-1).set("cocs",s.cocs||0).set("bn",s.bi||0).set("iblc",s.isBl||0).set("icp",s.icp||3).set("g",s.g||0).set("rs",s.rs||0).set("nef",s.nef||0),e.append(c,t)}},this.fireFailover=function(){n.isLogDisabledForFailure(t)||e.fire({failover:!0})}}return e.inherits(a,c),e.inherits(u,o),u});_cD("logcollection",[window._mNCk.util,"logdispatcher"],function(i,t){"use strict";function n(){var n=this;n.dispatcher=n.dispatcher||new t,this.model=function(){},this.fire=function(i){n.dispatcher.fire(i)},this.addNew=function(i,t,n){},this.addArray=function(t){return i.each(t,this.addNew)},this.append=function(i){n.dispatcher.append(i)}}return n});_cD("logdispatcher",[window._mNCk.util,"lc","em","res","pxfrutl"],function(e,t,n,r,i){"use strict";function o(){return n.hasMnetOptout()?1:0===n.getVisitorId().length?2:0}function a(){var t=new e.GetParamValueFromUrl(window.location.href);return e.encodeParam(t.getParam("gdprstring"))}function c(){return e.isSet(s)?s:(s={},s.reqId=e.getUUID(),s.fs=o(),s.pid=n.getPartnerId(),s.cid=n.getCustomerID(),s.itype=n.getIntegrationType(),s.bs=n.getBatchSize(),s.bi=n.getBatchInterval(),s.ccs=n.getCookieSource(),s.svr=n.getSourceCodeVersion(),s.gdpr=n.getGDPRFlag()?1:0,s.csex=n.getGDPRConsent()||0,s.csstr=a(),s.usp_status=n.getCcpaFlag()?1:0,s.usc=n.getCcpaConsent()||0,s.vsid=n.getVisitorId()||"",s.lper=n.shouldFailover()?n.getFailureLper():n.getSuccessLper(),s.tr=1e3*Math.random(),s)}function u(t){function r(e){var t=s(e);return t.length>d}function o(e){var t=m.slice(),n=e.clone();return t.push(n),u(t),r(t)}function a(t){var n="";return e.each(t,function(t){n+=e.buildCollectionUrlItem(t.getAll(),I)}),n}function c(t){e.each(t.getAll(),function(e,t){v[t]=!0})}function u(t){e.each(t,function(t){var n=t.getAll();e.each(v,function(r,i){e.isSet(n[i])||""===n[i]||t.set(i,"")})})}function s(e,t){var n=a(e);return 0!==n.length||t?p.addDefaultParams(n,h):""}function g(e,t){"sb"===t.type?i.sendBeacon(e):i.setImage(e)}function l(t){return t?("sb"!==t.type||e.isSendBeacon()||(t.type="img"),t):t}function f(){m=[],v={}}var d=e.fromIE()?1600:7e3,p=this,h=n.getLogUrl(t)||"",m=[],v={},I={encode:!0};p.logType=t,this.append=function(e,t){o(e)&&p.fire(t),c(e),m.push(e),u(m)},this.fire=function(t){t||(t={}),t.type=t.type||"img";var n=s(m,t.failover||!1);if(e.isSet(n)){var r=l(t);g(n,r),f()}}}var s;return u.prototype.addDefaultParams=function(t,n){var r=e.buildUrlParameters(c());return n+r+t},u});_cD("logfailover",[window._mNCk.util,"logcollection"],function(i,t){"use strict";function n(){t.call(this),this.addNew=function(){},this.fireFailover=function(){}}return i.inherits(n,t),n});_cD("lm",[window._mNCk.util,"em","logfailover","cookieinfostore"],function(e,o,i,n){"use strict";function t(){return n.isRequestFetchedForAll()||s>f?(clearTimeout(l),void u()):void(l=setTimeout(function(){s++,n.markCookiesSet(!1),t()},d))}function u(o){var i=n.getAllConfig();e.each(i,function(e){v.addNew(e,o)}),v.fire(o)}function r(){clearTimeout(l),u({sb:!0})}function c(){o.shouldFailover()||(t(),e.eventLib.addEvent(window,"unload",r))}var l,a=o.require("cllog")||i,d=2e3,f=600,s=0,v=new a;return{cookieLog:v,init:c}});_cD("lutl",[window._mNCk.util,"em"],function(e,r){"use strict";function i(r){return 0===r||e.isDisabledWithFreq(r)}function t(){var e=r.getSuccessLper();return 0===e||i(e)}function u(){var e=r.getFailureLper();return 0===e||i(e)}return{isLogDisabledForSuccess:t,isLogDisabledForFailure:u}});_cD("cookieinfostore",[window._mNCk.util,"em","cookieinfoconsts","cksync","res"],function(t,i,e,n,o){"use strict";function s(){var e={},n=[],o=this,s=i.getVsyncConfig(),c=s.sepCs,f=0;this.add=function(i){var n=i.name;return t.isSet(e[n])?this:(e[n]={},e[n].name=n,e[n].isBl=i.isBl,e[n].g=i.g,e[n].cocs=i.cocs,e[n].cookie=i.cookie,void(e[n].nef=i.nef||0))},this.getConfig=function(t){return e[t]},this.getAllConfig=function(){return e},this.setConfig=function(i,n,o){return t.isSet(n)&&t.isSet(o)?(t.isSet(e[i])||(e[i]={}),e[i][n]=o,this):this},this.setBatchId=function(i,e){var n=i&&o.getConfig(i);t.isSet(n)&&this.setConfig(i,"bi",e)},this.markCookiesSet=function(i){var e=o.getAllConfig();t.each(e,function(e,s){var f=e.cookie;if(n.indexOf(f)===-1){var u=t.getCookie(f);if(0!==u.length){var r=u.split(c);0!==r[0].length&&(n.push(f),o.setConfig(s,"icp",i?1:2)),2===r.length&&t.isSet(r[1])&&o.setConfig(s,"cs",r[1])}}})},this.isRequestFetchedForAll=function(){return f===i.getLookupTableLength()},this.markRequestSent=function(i){t.isArray(i)||o.countRequest(i),t.each(i,function(t){o.countRequest(t)})},this.countRequest=function(i){f++;var e=o.getConfig(i);t.isSet(e)&&o.setConfig(i,"rs",1)}}function c(){var e=i.getLookUpTable();t.each(e,function(t){f.add(t)})}var f=new s;return c(),f});_cD("lc",function(){"use strict";return{}});_cD("cookieinfoconsts",function(){"use strict";return{}});_cD("pxfrutl",[window._mNCk.util],function(e){"use strict";function n(n){e.setFrame(n)}function t(n,t,i){e.setScript(n,t,i)}function i(n){e.setImage(n)}function c(n){e.isSendBeacon()?window.navigator.sendBeacon(n):e.setImage(n)}return{setFrame:n,setScript:t,setImage:i,sendBeacon:c}});_cD("config",[window,document,cookieSyncConfig],function(c,n,t){"use strict";var i,o=t||{};try{i=c._cR(["cm"])[0]}catch(e){i=null}return i&&(o=i.getConfigSettings()||{}),o});_cD("em",[window._mNCk.util,"config","cksync","res"],function(n,t,e,r){"use strict";function o(n){if(void 0!==nn[n])return nn[n];try{nn[n]=window._cR([n])[0]}catch(t){nn[n]=null}return nn[n]}function i(){var n=x();return n.cc}function u(){return t.lookup}function c(){return t.cookieDeletionList}function a(){return t.gdpr}function g(){return t.gdprconsent}function f(){var t=new n.GetParamValueFromUrl(window.location.href);return t.getParam("gdprstring")}function l(){return t.cmode}function s(){return t.ccpa}function d(){return t.ccpaconsent}function p(){var t=new n.GetParamValueFromUrl(window.location.href);return t.getParam("uspstring")}function m(){var t=new n.GetParamValueFromUrl(window.location.href);return t.getParam("gpp")}function C(){var t=new n.GetParamValueFromUrl(window.location.href);return t.getParam("gpp_sid")}function h(){var t=new n.GetParamValueFromUrl(window.location.href);return t.getParam("axid_e")}function v(){return t.info&&t.info.aacxc||""}function k(){return t.info&&t.info.mnCheckSyncUrl||""}function w(){return t.info&&t.info.cid||""}function P(){return t.info&&t.info.itype||""}function S(){return t.info&&t.info.pid||""}function U(){return t.optout}function b(){return t.ck_del_sld_tld}function G(){return t.info&&t.info.domain}function F(){return t.cslogger_host+"/log?logid=kfk&evtid=cs&origin=1"}function L(){return t.info&&t.info.svr||""}function D(){return t.info&&t.info.ll||0}function V(){var t=x(),e=n.getCookie(t.vsCk);return e}function y(){var t=n.getCookie(U());return n.isStringSet(t)}function _(){var t=new n.GetParamValueFromUrl(window.location.href);if("1"===t.getParam("force")||t.getParam("html"))return!1;const e="1"===t.getParam("hck");return y()||!e&&!n.isStringSet(V())}function A(){return t.cs}function x(){return t.visitor}function R(){return t.log&&t.log.logUrl&&t.log.logUrl.cl||""}function E(){return B(!0)}function O(){return B(!1)}function B(e){var r=n.getQueryParamValueFromCheckSyncUrl("force");if("1"===r)return 1;if(!n.isSet(t.log))return 0;var o=t.log;return e?o.failLper||0:o.successLper||0}function I(){return t.sovBeaconProperties}function N(){return t.datalen}function T(){return t.aax||!1}function M(){return t.batch||null}function z(){return t.batch&&t.batch.time||3e5}function q(){return t.batch&&t.batch.gGroups||[]}function Q(){return t.batch&&t.batch.ngGroups||[]}function X(){return t.batch&&t.batch.bSize||2}function j(){return t.csloggerUrl}function H(){return t.visitor&&t.visitor.vsCk}function J(){return t.rtus||{}}function K(){return t.info&&t.info.obpurge||!1}function W(){var t=new n.GetParamValueFromUrl(window.location.href);return t.getParam("refUrl")}function Y(e){var r=t.ussyncmap||{};if(!n.isSet(r))return!1;var o=i(),u=r.enable,c=r.disable;if(!n.isSet(u)&&!n.isSet(c))return!1;var a;return n.isSet(c)?(a=c[e],!(!a||a.indexOf(o)===-1)):(a=u[e],!(a&&a.indexOf(o)!==-1))}function Z(){var n=x();return n.coc}function $(){return"EU"===Z()}var nn={};return{require:o,getLookUpTable:u,getListOfCookiesForDeletion:c,getGDPRFlag:a,getGDPRConsent:g,getGDPRConsentString:f,isCouplingMode:l,getAAXCookieSyncUrl:v,getMnetCheckSyncUrl:k,getCustomerID:w,getPartnerId:S,getIntegrationType:P,getSourceCodeVersion:L,getLookupTableLength:D,getVisitorId:V,hasMnetOptout:y,shouldFailover:_,getSuccessLper:E,getFailureLper:O,getCookieSource:A,getVsyncConfig:x,getLogUrl:R,getDataCookieLength:N,getSovrnBeaconProperties:I,isAccetableAdsExchange:T,getGuaranteedGroups:q,getNonGuaranteedGroups:Q,getBatchSize:X,getBatchInterval:z,isBatchingEnabled:M,getCsloggerUrl:j,getVsCookieName:H,getCcpaFlag:s,getCcpaConsent:d,getCCPAConsentString:p,getRtusConfig:J,shouldPurgeCookieForSource:K,getReferrerUrl:W,isRtusDisabled:Y,isEuropeanContinent:$,getCsLoggerAddUrl:F,getCookieOptoutName:U,isCookieDelEnabledOnSLDTLD:b,getCookieDomain:G,getGppConsentString:m,getGppApplicableSections:C,getAxidE:h}});_cD("cookiedeleteservice",[window,document,window._mNCk.util,window.cookieSyncConfig,"res","cksync","sconst","em"],function(e,o,i,t,n,r,a,c){"use strict";function s(){v(),l()}function l(){try{var e=o.cookie.split(";"),t=[c.getCookieOptoutName()],n=c.getGDPRFlag();n||t.push("usp_status"),i.each(e,function(e){var o=f(e),n=!1;i.each(t,function(e){o===e&&(n=!0)}),n||k(o)})}catch(r){}}function u(e){d(e),g(e)}function g(e){try{var t=o.cookie.split(";");i.each(t,function(o){var i=f(o);e.indexOf(i)>-1&&k(i)})}catch(n){}}function k(e){return c.isCookieDelEnabledOnSLDTLD()?(i.setCookie(e,"","","/",p,!1,"","-1",!0),i.setCookie(e,"","","/","",!1,"","-1",!0),void(i.isStringSet(h)&&i.setCookie(e,"","","/",h,!1,"","-1",!0))):void i.setCookie(e,"","","/",c.getCookieDomain(),!1,"","-1",!0)}function f(e){var o=e.indexOf("="),t=o>-1?e.substr(0,o):e;return i.trim(t)}function d(e){var o=1,t=c.getCsloggerUrl();i.isSet(e)&&i.isArray(e)&&i.isSet(t)&&(t+=i.getQueryParamString("pvgid",e),C(t,o))}function v(){var e=2,o=c.getCsloggerUrl();i.isSet(o)&&C(o,e)}function C(e,o){var t=i.getCookie(c.getVsCookieName());i.isSet(t)&&(e=i.replaceAll(e,i.encodeParam("<del>"),o),e=i.replaceAll(e,i.encodeParam("<vsid>"),t),i.setImage(e))}function m(){try{e.localStorage.clear(),e.sessionStorage.clear()}catch(o){}}function S(){var e=c.require("cookieinfostore");i.isSet(e)&&e.markCookiesSet(!0);var o=c.require("lm");i.isSet(o)&&(o.init(),c.shouldFailover()&&o.cookieLog.fireFailover())}var p=i.getDomainForCookie(),h=e.location.hostname||"";return{deleteStorage:m,deleteAllCookies:s,deleteCookiesFromList:u,populateLogs:S}});window._cR(["cookiedeleteservice"],function(e){"use strict";e.populateLogs(),e.deleteAllCookies(),e.deleteStorage()});} catch (err) {
    window.cookieSyncConfig.error = err;
    window.cookieSyncConfig.catchConstants = {"name":"checksync","type":"CHECKSYNC","svr":"270","servname":"c8-web-20","message":"checksync encountered an error","path":"\/nerrping.php","customerId":"8CU3VM41V","hostName":"https:\/\/hblg.media.net","get":{"userAgent":"userAgent","requrl":"requrl","cid":"cid","img":"img","d":"d"}};!function(e,r){"use strict";r=r||{},r.get=r.get||{},e=e||{};var o={},a="",t=encodeURIComponent(window.navigator.userAgent);a=e.stack?e.stack:e.s?e.s:e.stacktrace?e.stacktrace:"No StackTrace";var n="";for(var s in e)e.hasOwnProperty&&e.hasOwnProperty(s)&&(n+=s+" : '"+e[s]+"',");o.logLevel=3,o.errorVal={},o.errorVal.name=r.name,o.errorVal.type=r.type,o.errorVal.svr=r.svr,o.errorVal.servname=r.servname,o.errorVal.message=r.message,o.errorVal.stack=a,o.errorVal.objTrace=n;var c="";c="object"==typeof JSON&&"undefined"!=typeof JSON.stringify?JSON.stringify(o):o.errorVal.name+"@#@"+o.errorVal.type+"@#@"+a+"@#@"+n,c=encodeURIComponent("["+c+"]");var g=r.hostName+r.path+"?"+r.get.userAgent+"="+t+"&"+r.get.requrl+"="+encodeURIComponent(window.location.href)+"&"+r.get.cid+"="+r.customerId+"&"+r.get.img+"=logo.gif&"+r.get.d+"="+c,i=new Image;i.src=g}(window.cookieSyncConfig.error,window.cookieSyncConfig.catchConstants);};</script></body></html>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\x3d\x3d','_ifr_': 'false','_isfl_': 'false'});var gsodar = document.createElement('script');gsodar.type = 'text/javascript';gsodar.async = true;gsodar.src = '//tpc.googlesyndication.com/sodar/Q12zgMmT.js';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(gsodar, s);})();re(gsodar, s);})();