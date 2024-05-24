(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g,k="function"==typeof Object.create?Object.create:l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var n={a:!0},p={};try{p.__proto__=n;m=p.a;break a}catch(a){}m=!1}l=m?null}var q=l,r=this||self;
.prototype.add=function(a,b){a="string"===typeof a?a:a.getString();this.g[a]||(this.g[a]=[]);this.g[a].push(b)};function v(a){var b=[],c="object"==typeof gwd&&"GwdId"in gwd,d;for(d in a.g)b.push(c?new gwd.GwdId(d):d);return b}function w(a,b){return b?a.g["string"===typeof b?b:b.getString()]||[]:[]};function x(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function y(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")}function z(a){if(y(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&y(a))return a;return null};.prototype.i=function C(a){return"string"===typeof a?document.getElementById(a):a.getElement(document)};function D(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d);return d};/*

 SPDX-License-Identifier: Apache-2.0
*/
function E(a,b){var c=void 0===c?r:c;c=c.performance;a={label:a,type:9,value:c&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):Date.now()};b=b.google_js_reporting_queue=b.google_js_reporting_queue||[];2048>b.length&&b.push(a)};var F={},G=!1,H=!1;F.aa=function(a){G||(G=!0,E("11",a))};F.pa=F.qa=function(a,b,c){var d=b;d=void 0===d?r:d;if(d=(d=d.performance)&&d.now?d.now():null)a={label:a,type:void 0===c?0:c,value:d},b=b.google_js_reporting_queue=b.google_js_reporting_queue||[],2048>b.length&&b.push(a)};F.reset=function(a){H=G=!1;(a.google_js_reporting_queue=a.google_js_reporting_queue||[]).length=0};t("gwd.rumUtil",F);t("gwd.rumUtil.logContentLoading",F.aa);
t("gwd.rumUtil.logContentRendered",F.pa);t("gwd.rumUtil.logTimingEvent",F.qa);t("gwd.rumUtil.reset",F.reset);function I(){var a=HTMLElement.call(this)||this;a.U=a.ka.bind(a);a.M=a.ma.bind(a);a.V=a.la.bind(a);a.H=a.ja.bind(a);a.G=a.ha.bind(a);a.I=D.bind(null,"expandfinish",a);a.F=D.bind(null,"collapsefinish",a);a.T=a.ia.bind(a);a.s=a.oa.bind(a);a.ea=a.ca.bind(a);a.Y=a.na.bind(a);a.Z=a.da.bind(a);a.m=null;a.i=null;a.D=!1;a.C=!1;a.N=[];a.u=!1;a.L=!1;a.B=null;a.v=!1;a.J=!1;a.K=window.innerHeight>=window.innerWidth?1:2;a.h=null;a.l=null;a.o=null;a.W=!1;a.S=!1;return a}var J=HTMLElement;I.prototype=k(J.prototype);
I.prototype.constructor=I;if(q)q(I,J);else for(var K in J)if("prototype"!=K)if(Object.defineProperties){var L=Object.getOwnPropertyDescriptor(J,K);L&&Object.defineProperty(I,K,L)}else I[K]=J[K];g=I.prototype;
g.connectedCallback=function(){var a=this;this.W||(this.L=this.hasAttribute("fullscreen"),document.body.style.opacity="0",this.W=!0);Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,this.H);Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,this.G);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,this.H);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,this.G);Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH,
this.I);Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,this.F);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,this.I);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.F);Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,this.T);window.addEventListener("resize",this.Z,!1);(0,F.aa)(window);setTimeout(function(){a.g=a.querySelector("gwd-pagedeck");a.g.addEventListener("pagetransitionend",a.Y,!1);
a.h=document.getElementById(a.getAttribute("data-provider"));a.l=document.querySelector("gwd-data-binder");a.o=document.querySelector("gwd-responsive-attributes-helper");a.o&&a.o.applyOverrides();var b=a.querySelector("gwd-metric-configuration"),c=new u;if(b){b=Array.prototype.slice.call(b.getElementsByTagName("gwd-metric-event"));for(var d=0;d<b.length;d++){var e=b[d],f=e.getAttribute("source");if(f){var h=e.getAttribute("exit");e={event:e.getAttribute("event"),ra:e.getAttribute("metric")||h,fa:e.hasAttribute("cumulative"),
exit:h};c.add(M(f),e)}}}a.R=c;a.X=new B(a.R,a.ea)},1)};
g.disconnectedCallback=function(){Enabler.removeEventListener(studio.events.StudioEvent.INIT,this.U);Enabler.removeEventListener(studio.events.StudioEvent.VISIBLE,this.M);Enabler.removeEventListener(studio.events.StudioEvent.PAGE_LOADED,this.V);Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_START,this.H);Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_START,this.G);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,this.H);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,
this.G);Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_FINISH,this.I);Enabler.removeEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,this.F);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,this.I);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.F);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,this.T);this.g.removeEventListener("pagetransitionend",this.Y,!1);window.removeEventListener("resize",
this.Z,!1);this.h&&this.m&&this.h.removeEventListener("ready",this.m);this.l&&this.i&&this.l.removeEventListener("bindingfinished",this.i);Enabler.removeEventListener(studio.events.StudioEvent.HOSTPAGE_SCROLL,this.s,!1);window.removeEventListener("message",this.s,!1)};g.initAd=function(){this.u=!1;var a=this.U;Enabler.removeEventListener(studio.events.StudioEvent.INIT,a);Enabler.addEventListener(studio.events.StudioEvent.INIT,a);Enabler.isInitialized()&&a()};
g.exit=function(a,b,c,d,e){c=void 0===c?!1:c;d=void 0===d?!0:d;Enabler.exit(a,b);d&&N(this);c&&this.goToPage(e)};g.exitOverride=function(a,b,c,d,e){c=void 0===c?!1:c;d=void 0===d?!0:d;Enabler.exitOverride(a,b);d&&N(this);c&&this.goToPage(e)};g.incrementCounter=g.startTimer=function(a){Enabler.startTimer(a)};g.stopTimer=g.reportManualClose=
g.ca=function(a){var b=a.target,c=M(b),d=c+": "+a.type;a:{var e=w(this.R,c);for(var f=0;f<e.length;f++)if(e[f].event==a.type){e=e[f];break a}e=void 0}e.exit&&a.detail&&a.detail.url?(d=c+": "+e.exit,a.detail["exit-id"]&&(d=a.detail["exit-id"]),b="",null!=a.detail["product-index"]&&(b=a.detail["product-index"]),this.h&&0==(this.h.getAttribute("gwd-schema-id")||"").indexOf("dynamic_remarketing")?(c=a.detail["action-event"],e={},c&&(e.clickX=c.clientX||c.changedTouches[0].clientX,e.clickY=c.clientY||
c.changedTouches[0].clientY),Enabler.dynamicExit(d,a.detail.url,b,void 0,e)):Enabler.exitOverride(d,a.detail.url),a.detail.handled=!0,a.detail.collapse&&this.goToPage()):(a=z(b))&&a.gwdIsActive()&&this.incrementCounter(e.ra||d,e.fa)};
g.ka=function(){function a(){if(b.hasAttribute("polite-load")){var d=b.V;Enabler.isPageLoaded()?d():Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,d)}else d=b.M,Enabler.isVisible()?d():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,d)}var b=this;Enabler.removeEventListener(studio.events.StudioEvent.HOSTPAGE_SCROLL,this.s,!1);window.removeEventListener("message",this.s,!1);Enabler.isServingInLiveEnvironment()?Enabler.addEventListener(studio.events.StudioEvent.HOSTPAGE_SCROLL,
this.s,!1):window.addEventListener("message",this.s,!1);if(this.L){var c=function(d){b.B=!!d.supported;b.B&&D("fullscreensupport",b);Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT,c);a()};Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT,c);Enabler.queryFullscreenSupport()}else a()};
g.ma=function(a){var b=this;if(this.u)this.h&&O(this,null);else{var c;a&&(c=a.detail);var d=this.ta.bind(this,c);this.h&&(d=this.ga.bind(this,d));if(this.L){Enabler.setResponsiveExpanding(!0);var e=Enabler.loadModule(studio.module.ModuleId.GDN,function(){var f=studio.sdk.gdn.getConfig();f.isInCreativeToolsetContext()?f.isInterstitial(e):d()})}else d()}};g.la=function(){var a=this.M;Enabler.isVisible()?a():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,a)};
g.ga=function(a){var b=this;this.h?(this.m&&this.h.removeEventListener("ready",this.m),this.m=function(){b.o&&b.S&&b.o.applyOverrides();O(b,a)},this.h.isDataLoaded()&&this.m(),this.h.addEventListener("ready",this.m)):a()};
function O(a,b){var c=!!b;if(a.l){a.i&&(a.l.removeEventListener("bindingfinished",a.i),a.i=null);var d=a.h.getData();d&&(c=a.g.getElementsBySelector("*"),c=c.concat(a.g.getPages()),a.l.bindData(d,c)?a.ba(b):(a.i=a.ba.bind(a,b),a.l.addEventListener("bindingfinished",a.i)),c=!1)}c&&b()}
g.ba=function(a){this.S=!0;this.i&&(this.l.removeEventListener("bindingfinished",this.i),this.i=null);if(this.u){var b=document.getElementsByTagName("gwd-text-helper");0<b.length&&b[0].refitAll()}D("dynamicelementsready",this);a&&a()};g.ta=function(a){this.u||(this.u=!0,document.body.style.opacity="",D("adinitialized",this,a),this.J?(a=this.g.getPage(this.g.findPageIndexByAttributeValue("expanded",!0)),this.goToPage(a.id)):this.goToPage())};
g.goToPage=function(a,b,c,d,e){var f=this.g.getPage(this.g.currentIndex);if(a=a?this.g.getPage(a):this.g.getDefaultPage()){var h=!!f&&!!a&&!this.D&&!this.J&&!f.hasAttribute("expanded")&&a.hasAttribute("expanded");f=!!f&&!!a&&!this.C&&!this.J&&f.hasAttribute("expanded")&&!a.hasAttribute("expanded");h&&this.C||f&&this.D||((this.j=a.id,b&&(this.A={transition:b,duration:c,easing:d,direction:e}),h)?this.L&&!1!==this.B?this.B&&(this.v=!0,Enabler.requestFullscreenExpand()):Enabler.requestExpand():f?this.v?
Enabler.requestFullscreenCollapse():Enabler.requestCollapse():(this.C=this.D=!1,this.P()))}};g.ja=function(){D("expandstart",this);this.B?(this.v=!0,Enabler.finishFullscreenExpand()):Enabler.finishExpand();if(!this.j){var a=this.g.getPage(this.g.findPageIndexByAttributeValue("expanded",!0));a&&(this.j=a.id)}a=this.g.getPage(this.g.currentIndex);this.D=!!a&&this.j!=a.id;window.setTimeout(this.P.bind(this),30)};
g.ha=function(){D("collapsestart",this);this.v?(Enabler.finishFullscreenCollapse(),this.v=!1):Enabler.finishCollapse();this.j||(this.reportManualClose(),this.j=this.g.getDefaultPage().id);var a=this.g.getPage(this.g.currentIndex);this.C=!!a&&this.j!=a.id;window.setTimeout(this.P.bind(this),30)};
g.oa=function(a){if(Enabler.isServingInLiveEnvironment())var b=a;else{if(!a.data||"string"!==typeof a.data)return;try{b=JSON.parse(a.data)}catch(c){return}if(b.eventType!==studio.events.StudioEvent.HOSTPAGE_SCROLL)return}D("hostpagescroll",this,b)};g.da=function(){this.u&&this.o&&(this.o.applyOverrides(),O(this,null));if(!this.j){var a=window.innerHeight>=window.innerWidth?1:2;this.K!=a&&(this.K=a,(a=this.g.getPage(this.g.currentIndex))&&window.setTimeout(this.goToPage.bind(this,a.id),1))}};
g.ia=g.P=function(){if(this.j){this.K=window.innerHeight>=window.innerWidth?1:2;var a=this.g.getOrientationSpecificPage(this.K,this.j);this.A?this.g.goToPage(a.id,this.A.transition,this.A.duration,this.A.easing,this.A.direction):this.g.goToPage(a.id);this.v&&a.classList.add("fs")}this.A=this.j=void 0};
g.na=function(a){this.C=this.D=!1;if(a.target==this.g){a=a.detail;var b=a.outgoingPage;a=a.incomingPage;if(b){var c=this.X;if(b.nodeType==Node.ELEMENT_NODE)for(var d=v(c.g),e=0;e<d.length;e++){var f=C(d[e]);if(f&&x(b,f))for(var h=w(c.g,d[e]),A=0;A<h.length;A++)f.removeEventListener(h[A].event,c.h,!1)}if((b=b.querySelectorAll("video, gwd-video"))&&0<b.length)for(this.O=[];this.N.length;)studio.video.Reporter.detach(this.N.shift())}b=this.X;if(a.nodeType==Node.ELEMENT_NODE)for(c=v(b.g),d=0;d<c.length;d++)if((e=
C(c[d]))&&x(a,e)&&(f=w(b.g,c[d])))for(h=0;h<f.length;h++)e.addEventListener(f[h].event,b.h,!1);(a=a.querySelectorAll("video, gwd-video"))&&0<a.length&&(b=studio.video&&studio.video.Reporter,c=this.sa.bind(this),this.O=Array.prototype.slice.call(a),b?c():Enabler.loadModule(studio.module.ModuleId.VIDEO,c))}};g.sa=function(){for(var a,b;this.O.length;)if(b=this.O.shift(),a=M(b))studio.video.Reporter.attach(a,"gwd-video"==b.tagName.toLowerCase()?b.nativeElement:b,b.autoplay),this.N.push(a)};
function M(a){return"object"==typeof gwd&&"GwdId"in gwd?(new gwd.GwdId(a)).getString():"string"==typeof a?a:a.id}function N(a){a=Array.prototype.slice.call(a.g.querySelectorAll("audio, video, gwd-video, gwd-youtube, gwd-youtube-livestream, gwd-audio"));for(var b=0;b<a.length;b++)a[b].pause()}customElements.define("gwd-google-ad",I);}).call(this);
