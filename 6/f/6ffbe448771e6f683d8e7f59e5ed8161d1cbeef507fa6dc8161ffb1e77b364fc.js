/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;if(typeof _paq!=="object"){_paq=[]}if(typeof window.Matomo!=="object"){window.Matomo=window.Piwik=())}
/*!!! pluginTrackerHook */

/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(();
/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(();
/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(function(){var U=false;var D=false;var t=null;var m=50;var o=true;var j=[];var s=100;var v="";var d=null;var r=null;var O=true;var P=true;var E=false;var C={};var J={};var w=false;var l=null;var N=null;var K={};var L=0;var A=/([@(]|(?:\s+at\s+)(?:\S+[\s@]+)?)([^\s@(]+?\S*?)((?::\d+)*\)?\s*)$/;var i=/([@(]|(?:\s+at\s+)(?:\S+[\s@]+)?)([^\s@(]+?\S*?)((?::\d+)*\)?\s*)$/g;var g=["chrome-extension","safari-extension","moz-extension","webkit-masked-url","safari-web-extension"];function f(){if(U&&"undefined"!==typeof console&&console&&console.debug){console.debug.apply(console,arguments)}}unction B(){
Piwik.CrashAnalytics.ignored.assign({"12":["504cb008515e530d172ab138728521cd"]});

;if(typeof window==="object"&&"function"===typeof window.piwikCrashAnalyticsAsyncInit){window.piwikCrashAnalyticsAsyncInit()
}if(typeof window==="object"&&"function"===typeof window.matomoCrashAnalyticsAsyncInit){window.matomoCrashAnalyticsAsyncInit()}D=true}ar h=document.createElement("a");unction M(W,V){return W===V||W.substring(W.length-V.length-1,W.length)==="."+V}nction u(V){var W=V.constructor&&V.constructor.name;if(W==="Object"){return""}return W}function I(W){if(!W){return null}var X=W.split("\n");var Y,V;for(Y=0;Y<X.length;++Y){V=X[Y].match(A);if(V){var Z=V[3].split(":").slice(1).map(;return{uri:V[2],line:Z[0],column:Z[1]}}}return null}function G(W,aa,Z){if(!Z){var ab=I(W);if(!ab){return null}Z=ab.uri
}h.href=Z;var V=h.href;h.href=V;var X=h.host;if(!X){return null}var Y;for(Y=0;Y<aa.length;++Y){if(M(X,aa[Y])){return true}}return false}function a(X){if(!X){return null}var W=X.toLowerCase().replace(/^\s+|\s+$/g,"");for(var V=0;V<g.length;++V){if(W.indexOf(g[V]+"://")===0){return true}}return false}function q(W,Y){if(!d){return true}var V=G(W,[d],Y);var X=V===null;return X?true:V}function T(W,Y){if(!r){return false}var V=G(W,r,Y);var X=V===null;return X?false:V}function e(W,aa){var Z=aa||window.location.href;var ab=Z.split("#")[0];var Y=ab.split("/").pop();var X=[Z,ab,Y];var V=W;X.forEach(function(ac){if(ac.length&&V===ac){V="inline"}});return V}function S(V){var W=y(V);var X=C[W]||V;return X}function H(V,Z,Y){var W=V.split("\n");var X;for(X=0;X<W.length;++X){W[X]=W[X].replace(i,function(aa,ae,ad,ab){var ac=S(ad);ac=e(ac,Y);return ae+ac+ab})}return W.join("\n")}function F(aa,V){var Z=c(V,"cra_st");var ad=c(V,"cra");ad=ad.replace(/\s+/g," ");ad=ad.toLowerCase();ad=ad.replace(/^\s+|\s+$/g,"");
ad=ad.substring(0,255);var W=(Z?I(Z):null)||{uri:""};W.uri=W.uri.substring(0,255);var Y=W.uri.replace(/^[a-zA-Z0-9]+:\/\//,"");var ab=Matomo.CrashAnalytics.utils.md5&&Matomo.CrashAnalytics.utils.md5(ad+"."+Y);var ac=aa.getSiteId();if(ab&&(J[ac]||[]).indexOf(ab)!==-1){if(U){f("crash was ignored in site",ac,":",ad,W,"hash was:",ab)}return}aa.queueRequest(V,true);aa.noOfCrashRequestsSent++;if(U){try{f("sent crash tracking request",Matomo.JSON.stringify(error))}catch(X){}}}function p(){Object.keys(K).forEach(function(X){var V=K[X].url;var W=K[X].tracker;F(W,V);delete K[X]})}function x(X){if(!X.querySelectorAll){return}var aa=X.querySelectorAll("script[src][data-matomo-resource]");var Z,Y,V;for(var W=0;W<aa.length;++W){Z=aa[W];Y=Z.getAttribute("src");Y=y(Y);V=Z.getAttribute("data-matomo-resource");C[Y]=V}}function b(V){N=V}unction Q(){if("object"===typeof window&&"object"===typeof window.Matomo&&"object"===typeof window.Matomo.CrashAnalytics){f("wont initialize, CrashAnalytics already loaded");
return}if("object"===typeof window&&"object"!==typeof window.Matomo){f("wont initialize, Matomo is not yet loaded");return}Matomo.CrashAnalytics={utils:{isCrashDomainIncluded:q,isCrashDomainExcluded:T,replacePageUrlWithInlineIdentifier:e,cleanStack:H,getRandomInt:flushWaitingForStackTraceCallbackToCompleteRequests:p},ignored:{assign:function(Y){J=Y}},getSampleRate:function(){return s},setSampleRate:function(Y){s=Y;s=Math.max(0,s);s=Math.min(100,s)},setMaxNoOfCrashRequestsAllowed:function(Y){m=Y},getMatomoTrackers:R,setMatomoTrackers:function(Y){if(Y===null){t=null;return}if(!z(Y)){Y=[Y]}t=Y},enable:function(){o=true},disable:function(){o=false},enableStackTraceLogging:function(){O=true},disableStackTraceLogging:function(){O=false},doNotTrackUncaughtErrors:function(){P=false},trackUncaughtErrors:function(){P=true},trackAnonymousSource:function(){w=true},doNotTrackAnonymousSource:function(){w=false},isCrashAnalyticsEnabled:function(){return o
},getTrackedCrashesInPageview:function(){return j},hasTrackedCrashAlready:function(ab,Y,aa){if(!j||!j.length){return false}var Z,ac;for(Z=0;Z<j.length;++Z){ac=j[Z];if(ac&&ac.message===ab&&(ac.stack===Y||(ac.resource_uri==="inline"&&aa==="inline"))){return true}}return false},clearTrackedCrashes:function(){j=[];var Y=R();(Y||[]).forEach(},setCrashCategory:function(Y){v=Y},onlyTrackSourcesWithDomain:doNotTrackSourcesWithDomain:function(Y){if(Y===null){r=null;return}if(!z(Y)){Y=[Y]}r=Y},doNotTrackBrowserExtensions:function(){E=false},trackBrowserExtensionCrashes:function(){E=true},customiseStackTraces:n,customiseResourceUri:b,customizeStackTraces:n,customizeResourceUri:b,trackJsError:function(Y,aa){if(!Y.message||typeof Y.message!=="string"){return}var ab=u(Y);var Z=Y.type||ab;this.trackCrash(Y.message,Z,aa||Y.category,Y.stack)},trackCrash:function(an,ah,ac,aj,al,ao,ad){if(!an||typeof an!=="string"){if(U){f("crash has no message, cannot track")
}return}if(d&&!q(aj,al)){if(U){f("error source file domain not included, skipping")}return}if(r&&T(aj,al)){if(U){f("error source file domain excluded, skipping")}return}var am=this;function aa(){if(s>=100){return true}if(s<=0){return false}if(s>=1){return s>=am.utils.getRandomInt(1,100)}return(s*10)>=am.utils.getRandomInt(1,100*10)}if(!aa()){if(U){f("crash ignored because of sampling: "+an+", "+aj)}return}var ae=R();x(document);aj=aj&&H(aj);var Z="ca=1&cra="+encodeURIComponent(an);if(aj&&O){Z+="&cra_st="+encodeURIComponent(aj)}if(ac){Z+="&cra_ct="+encodeURIComponent(ac)}if(ah){Z+="&cra_tp="+encodeURIComponent(ah)}var Y=I(aj)||{};if(al){al=S(al);al=e(al)}var ag=al||Y.uri;if(!E&&a(ag)){if(U){f("error from browser extension ignored: "+an+", "+aj)}return}if(!w&&ag&&ag.replace(/^\s+|\s+$/g,"")==="<anonymous>"){if(U){f("error with <anonymous> source ignored: "+an+", "+aj)}return}if(N){ag=N(ag)}if(ag){Z+="&cra_ru="+encodeURIComponent(ag)}ao=typeof ao!=="undefined"&&ao!==null?ao:Y.line;if(typeof ao!=="undefined"&&ao!==null){Z+="&cra_rl="+encodeURIComponent(ao)
}ad=typeof ad!=="undefined"&&ad!==null?ad:Y.column;if(typeof ad!=="undefined"&&ad!==null){Z+="&cra_rc="+encodeURIComponent(ad)}if(this.hasTrackedCrashAlready(an,aj,ag)){if(U){f("error already crashed: "+an+", "+aj)}return}j.push({message:an,stack:aj,resource_uri:ag});if(ae&&ae.length){var af=0,ak,ai;for(af;af<ae.length;af++){ak=ae[af];if(!ak){continue}if(ak.CrashAnalytics&&!ak.CrashAnalytics.isEnabled()){if(U){f("crash analytics tracking is disabled")}continue}if(!ak.noOfCrashRequestsSent){ak.noOfCrashRequestsSent=0}if(ak.noOfCrashRequestsSent>=m){if(U){f("maximum number of crash request allowed for a tracker reached")}continue}ai=ak.getRequest(Z);if(l){++L;var ab=L;K[ab]={url:ai,tracker:ak};l(aj,(function(aq,ar,at,ap){if(!K[ar]){return}delete K[ar];if(typeof ap!=="undefined"&&ap!==null){at=at.replace(/&cra_st=.*?(&|$)/,"&cra_st="+encodeURIComponent(ap)+"$1")}F(aq,at)}).bind(null,ak,ab,ai))}else{F(ak,ai)}}}},enableDebugMode:function(){U=true}};Matomo.addPlugin("CrashAnalytics",{log:unload:function(){p()}});Matomo.DOM.addEventListener(window,"error",function W(ad,ae,ab){if(!P){return}var Z,ac;if(ad.error){Z=ad.error.stack;ac={message:ad.error.message,stack:Z,category:v,type:u(ad.error)}}else{if(typeof ad==="string"){ac={message:ad,stack:ae+":"+ab,category:v,type:"Unknown"}}}if(!Z&&ad.filename){Z=ad.filename;if(typeof ad.lineno==="number"){Z+=":"+ad.lineno;if(typeof ad.colno==="number"){Z+=":"+ad.colno}}}if(!ac){ac={message:ad.message,stack:Z,category:v}}if(U){f("uncaught error: "+ac.message+", "+ac.stack)}var Y=R();var aa=Y&&Y.length&&typeof Matomo==="object"&&!!Matomo.CrashAnalytics;if(!aa||typeof _paq==="undefined"||!_paq.push){_paq.push(["CrashAnalytics::trackCrash",ac.message,ac.type,ac.category,ac.stack,ad.filename,ad.lineno,ad.colno])}else{Matomo.CrashAnalytics.trackCrash(ac.message,ac.type,ac.category,ac.stack,ad.filename,ad.lineno,ad.colno)}});Matomo.DOM.addEventListener(window,"unhandledrejection",function V(ad){if(!P){return}var ac="unknown reason";
var Z=null;if(ad.reason){ac=ad.reason.message||ad.reason.toString();Z=ad.reason.stack}if(U){f("unhandled rejection: "+ac+", "+Z)}var ab={message:ac,stack:Z,category:v,type:u(ad.reason)};var Y=R();var aa=Y&&Y.length;if(!aa&&_paq.length&&_paq.length<500){_paq.push(["CrashAnalytics::trackCrash",ab.message,ab.type,ab.category,ab.stack,ad.filename,ad.lineno,ad.colno])}else{Matomo.CrashAnalytics.trackCrash(ab.message,ab.type,ab.category,ab.stack,ad.filename,ad.lineno,ad.colno)}});f(window.Matomo.initialized){Matomo.on("TrackerSetup",X);Matomo.retryMissedPluginCalls();B()}else{Matomo.on("TrackerSetup",X);Matomo.on("MatomoInitialized",}}if("object"===typeof window.Matomo){f("matomo was already loaded, initializing CrashAnalytics now");Q()}else{if("object"!==typeof window.matomoPluginAsyncInit){window.matomoPluginAsyncInit=[]
}window.matomoPluginAsyncInit.push(Q);f("matomo not loaded yet, waiting for it to be loaded")}})();(function(f){{return unescape(encodeURIComponent(u))}function d(u){return h(k(u))}ypeof define==="function"&&define.amd){define(function(){return e})}else{if(typeof module==="object"&&module.exports){module.exports=e
}else{f.md5=e}}})(window.Matomo.CrashAnalytics.utils);
/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(();

/* END GENERATED: tracker.min.js */

());());if(typeof window.piwik_log!=="function"){window.piwik_log=
/*!! @license-end */;