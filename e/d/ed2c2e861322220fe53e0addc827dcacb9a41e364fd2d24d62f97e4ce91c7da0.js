/*
 * Copyright (c) 2011, Yahoo! Inc.  All rights reserved.
 * Copyright (c) 2011-2012, Log-Normal, Inc.  All rights reserved.
 * Copyright (c) 2012-2017, SOASTA, Inc. All rights reserved.
 * Copyright (c) 2017-2022, Akamai Technologies, Inc. All rights reserved.
 * Copyrights licensed under the BSD License. See the accompanying LICENSE.txt file for terms.
 */
/* Boomerang Version: 1.792.80 e2ad31965b3add033aa3d32556a8d4f0cf9b8e56 */

BOOMR_start=(new Date).getTime();OOMR_check_doc_domain();!window);!);!);!);!function(){var p,a,l,O,m,d=["uninitialized","open","responseStart","domInteractive","responseEnd"];if(!BOOMR.plugins.AutoXHR&&(p=BOOMR.window)&&p.XMLHttpRequest&&(new p.XMLHttpRequest).addEventListener){s.stop=s.pause=s.resume=s.start=s.prototype.addEvent=s.prototype.sendEvent=s.prototype.sendResource=s.prototype.calculateSpaTimings=s.prototype.setTimeout=s.prototype.timedout=s.prototype.clearTimeout=s.prototype.load_cb=s.prototype.monitorMO=s.prototype.load_finished=s.prototype.wait_for_node=function(t,n){var r,i,o,e,a,s,u,c,l=this,d=!1,f=!1;if(t&&t.nodeName&&(t.nodeName.toUpperCase().match(/^(IMG|IFRAME|IMAGE)$/)||"LINK"===t.nodeName.toUpperCase()&&t.rel&&t.rel.match(/\bstylesheet\b/i))){t._bmr&&"number"==typeof t._bmr.res&&t._bmr.end[t._bmr.res]&&(f=!0);e=t.src||"function"==typeof t.getAttribute&&t.getAttribute("xlink:href")||p.SVGAnimatedString&&t.href instanceof p.SVGAnimatedString&&t.href.baseVal||t.href;t._bmr&&t._bmr.url!==e&&(f=!0);if(f&&"function"==typeof t._bmr.listener){l.load_cb({target:t,type:"changed"});t.removeEventListener("load",t._bmr.listener);t.removeEventListener("error",t._bmr.listener);delete t._bmr.listener}if(!e||!e.match||e.match(/^(about:|javascript:|data:)/i))return!1;if("IMG"===t.nodeName){if(t.naturalWidth&&!f)return!1;if("function"==typeof t.getAttribute&&""===t.getAttribute("src"))return!1;if("lazy"===t.loading)return!1}if("IFRAME"===t.nodeName&&f)return!1;if("function"==typeof t.getAttribute){s=parseInt(t.getAttribute("height"),10);u=parseInt(t.getAttribute("width"),10)}isNaN(s)&&(s=!t.style||"0"!==t.style.height&&"0px"!==t.style.height&&"1px"!==t.style.height?undefined:0);isNaN(u)&&(u=!t.style||"0"!==t.style.width&&"0px"!==t.style.width&&"1px"!==t.style.width?undefined:0);if(!isNaN(s)&&s<=1&&!isNaN(u)&&u<=1)return!1;if(0===s||0===u)return!1;if(t.style&&("none"===t.style.display||"hidden"===t.style.visibility||"0"===t.style.opacity))return!1;if(m.domExcludeFilter(t))return!1;if(!(u=this.pending_events[n]))return!1;a=u.resources.length;u.urls||(u.urls={});if(u.urls[e])return!1;if(!u.resource.url){O.href=e;if(m.xhrExcludeFilter(O))return!1;u.resource.url=O.href}t._bmr||(t._bmr={end:{}});t._bmr.res=a;t._bmr.idx=n;delete t._bmr.end[a];t._bmr.url=e;c=t._bmr.listener=c;t.addEventListener("load",c);t.addEventListener("error",c);u.nodes_to_wait++;this.clearTimeout(n);u.total_nodes++;u.resources.push(t);u.urls[e]=1;d=!0}else t.nodeType===Node.ELEMENT_NODE&&["IMAGE","IMG"].forEach(this);return d};s.prototype.add_event_resource=s.prototype.mutation_cb=s.prototype.queue_is_empty=s.prototype.nodesWaitingFor=s.prototype.completeEvent=l=new s;m={spaBackEndResources:["xmlhttprequest","script","fetch"],alwaysSendXhr:!1,xhrExcludeFilters:[],domExcludeFilters:[],initialized:!1,captureXhrRequestResponse:!1,singlePageApp:!1,spaStartFromClick:!1,autoXhrEnabled:!1,monitorFetch:!1,fetchBodyUsedWait:200,spaIdleTimeout:1e3,xhrIdleTimeout:50,xhrRequireChanges:!0,xhrExcludeFilter:domExcludeFilter:loadFinished:;BOOMR.plugins.AutoXHR={is_complete:function(){return!0},init:getMutationHandler:function(){return l},getPathname:n,enableAutoXhr:addExcludeFilter:function(e,t,n){m.xhrExcludeFilters.push({cb:e,ctx:t,name:n})},addDomExcludeFilter:setXhrRequestResponseCapturing:}tion c(){if(m.monitorFetch&&"function"==typeof p.fetch&&"function"==typeof p.Request&&"function"==typeof p.Response&&"function"==typeof p.Promise&&"function"==typeof BOOMR.window.fetch&&!p.fetch.polyfill&&!(BOOMR.proxy_fetch&&BOOMR.proxy_fetch===p.fetch||BOOMR.wrapped_fetch))if(BOOMR.proxy_fetch&&BOOMR.orig_fetch&&BOOMR.orig_fetch===p.fetch)p.fetch=BOOMR.proxy_fetch;else{BOOMR.orig_fetch=p.orig_fetch||p.fetch;BOOMR.proxy_fetch=function(e,t){var n,r,i,o={timing:{},initiator:"xhr"};if("object"==typeof e&&e instanceof p.Request){n=e.url;r=t&&t.method||e.method||"GET";m.captureXhrRequestResponse&&(i=t&&t.body||e.body||undefined)}else{n=e;r=t&&t.method||"GET";m.captureXhrRequestResponse&&(i=t&&t.body||undefined)}O.href=n;if(m.xhrExcludeFilter(O))return BOOMR.orig_fetch.apply(p,arguments);BOOMR.fireEvent("xhr_init","fetch");o.url=O.href;o.method=r;o.type="fetch";i&&(o.requestPayload=i);BOOMR.fireEvent("xhr_send",{resource:o});l.addEvent(o);try{o.timing.requestStart||(o.timing.requestStart=BOOMR.now());var a=BOOMR.orig_fetch.apply(this,arguments);unction u(r,i,o){return r._bmrNextP?i:function(e,t){var n=Array.prototype.slice.call(arguments);if(0<n.length){if("function"==typeof n[0]){n[0]=s(r,n[0],o);r._bmrHasOnFulfilled=!0}if(1<n.length&&"function"==typeof n[1]){n[1]=s(r,n[1],o);r._bmrHasOnRejected=!0}}n=i.apply(r,n);(r._bmrNextP=n).then=u(n,n.then,o);return n}}a.then=u(a,a.then,o);return a.then(}catch(c){o.status=-997;m.loadFinished(o);throw c}};BOOMR.utils.overwriteNative(p,"fetch",BOOMR.proxy_fetch);BOOMR.wrapped_fetch=!0}}!function(){var u,n=!1,t=!1,c=!1,l=!1,d=!1,f=!0,p=!1,O=!1,m=!1,h=!1,r=[],g=!1,i=0,o=0;if(!BOOMR.plugins.SPA&&BOOMR.plugins.AutoXHR){var a={useSoftNavStart:!1,spaHardMissedOnComplete:pageReady:onSoftNavObserver:function(e){e=e.getEntries();if(0!==e.length){i=e[e.length-1].startTime;o+=e.length}},onSoftNavObserverBeforeBeacon:function(e){if("spa"===e["http.initiator"]){if(i){e=Math.floor((BOOMR.plugins.RT.navigationStart()||BOOMR.t_lstart||BOOMR.t_start)+i);BOOMR.addVar("spa.snh.s",e,!0);i=0}BOOMR.addVar("spa.snh.n",o,!0);o=0}}};BOOMR.plugins.SPA={is_complete:init:function(e){BOOMR.utils.pluginConfig(a,e,"SPA",["useSoftNavStart"]);if(e&&e.instrument_xhr){d=e.instrument_xhr;c&&d&&BOOMR.plugins.AutoXHR.enableAutoXhr()}if(!t){e=document.createElement("meta");e.httpEquiv="origin-trial";e.content="A6MWCkFp/4goXtWiSJNfo09g03RCQpXkuDZDGnlApjvSPZL4CIhvZx3xGfg6bCT4TRppCXmFXWDEkxA7DO3nZgQAAACGeyJvcmlnaW4iOiJodHRwczovL2dvLW1wdWxzZS5uZXQ6NDQzIiwiZmVhdHVyZSI6IlNvZnROYXZpZ2F0aW9uSGV1cmlzdGljcyIsImV4cGlyeSI6MTcwOTY4MzE5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=";document.head.append(e);BOOMR.subscribe("page_ready",a.pageReady,null,a);if("function"==typeof BOOMR.window.PerformanceObserver&&"function"==typeof BOOMR.window.SoftNavigationEntry){a.observer=new BOOMR.window.PerformanceObserver(a.onSoftNavObserver);a.observer.observe({type:"soft-navigation",buffered:!0});BOOMR.subscribe("before_beacon",a.onSoftNavObserverBeforeBeacon,null,a)}t=!0}},register:supported_frameworks:function(){return r},onLoadSpaHardMissed:hook:route_change:function(t,e){var n=BOOMR.now(),r=!1,i=f&&!h?"spa_hard":"spa";if(!u||!u.wait){if("spa"==i&&p)try{if(!p.apply(null,e))return}catch(s){BOOMR.addError(s,"SPA.route_change.routeFilter")}c=!0;var o=BOOMR.plugins.RT&&BOOMR.plugins.RT.navigationStart(),n=f&&!l?o:n;f&&g&&(n=o);var o=BOOMR.window.document.URL,a={timing:{requestStart:n},initiator:i,url:o};l=!(f=!1);a.onComplete=if(("spa"==i||m)&&O)try{if(O.apply(null,arguments)){a.wait=!0;u=a}}catch(s){BOOMR.addError(s,"SPA.route_change.routeChangeWaitFilter")}a.index=BOOMR.plugins.AutoXHR.getMutationHandler().addEvent(a);BOOMR.fireEvent("spa_init",[BOOMR.plugins.SPA.current_spa_nav(),o,a.timing]);d&&BOOMR.plugins.AutoXHR.enableAutoXhr()}},last_location:current_spa_nav:wait_complete:markNavigationComplete:isSpaNavInProgress:isSinglePageApp:function(e){for(var t=!1,n=this.supported_frameworks(),r=0;r<n.length;r++){var i=n[r];if(e[i]&&e[i].enabled){t=!0;break}}return t}};BOOMR.plugins.SPA.waitComplete=BOOMR.plugins.SPA.wait_complete}}();!function(){var u={monitorHistory:!0,enabled:!0,hooked:!1,routeChangeInProgress:!1,disableHardNav:!1,routeFilter:undefined,routeChangeWaitFilter:undefined,routeChangeWaitFilterHardNavs:!1,monitorReplaceState:!0,a:undefined,browserOnloadBeforeSetup:!1,DEPRECATED_PLUGINS:["Angular","Backbone","Ember"],resetRouteChangeInProgress:function(e){if(!(e&&("undefined"!=typeof e.early||e["http.initiator"]&&0===e["http.initiator"].indexOf("api_custom_"))||e&&"xhr"===e["http.initiator"])){u.routeChangeInProgress&&clearTimeout(u.routeChangeInProgress);u.routeChangeInProgress=!1}},setRouteChangeInProgress:routeChange:;if(!BOOMR.plugins.History&&"undefined"!=typeof BOOMR.plugins.SPA&&"undefined"!=typeof BOOMR.plugins.AutoXHR&&BOOMR.window&&BOOMR.window.document){BOOMR.plugins.SPA.register("History");u.a=BOOMR.window.document.createElement("A");BOOMR.plugins.History={is_complete:function(){return!0},hook:init:disable:function(){u.enabled=!1;return this},enable:;for(var e=0;e<u.DEPRECATED_PLUGINS.length;e++){var t=u.DEPRECATED_PLUGINS[e];BOOMR.plugins[t]=BOOMR.plugins.History;BOOMR.plugins[t]={init:t),enable:BOOMR.plugins.History.enable,hook:BOOMR.plugins.History.hook,is_complete:BOOMR.plugins.History.is_complete};BOOMR.plugins.SPA.register(t)}}}();!window);!);!);!);!);!);!);!);!);!);!);!BOOMR.window);BOOMR.init({primary:!0,log:null,wait:!0,site_domain:null,ResourceTiming:{enabled:!1},Angular:{enabled:!1},Ember:{enabled:!1},Backbone:{enabled:!1},History:{enabled:!1},Errors:{enabled:!1},TPAnalytics:{enabled:!1},UserTiming:{enabled:!1},Continuity:{enabled:!1},IFrameDelay:{enabled:!1},Early:{enabled:!1}});BOOMR.t_end=(new Date).getTime();
