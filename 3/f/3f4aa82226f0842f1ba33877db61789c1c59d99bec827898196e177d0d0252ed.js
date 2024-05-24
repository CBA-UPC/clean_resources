(function() {/*
 Copyright 2022 Glance Networks, Inc.
*/
function k(a,...c){!window.console||!window.console[a]||window.GLANCE_COBROWSE&&window.GLANCE_COBROWSE.disableLogging||(c=c.map(b=>{if("object"===typeof b)try{b=JSON.stringify(b)}catch(f){console.error(f),b="unable to convert object to string"}return"string"===typeof b?b.replace(/[\r\n]/g," ").replace("<","&lt;"):b}),window.console[a](...c))}function n(...a){k("log",...a)}function v(...a){n("DEBUG:",...a)};/*
 Copyright (c) 2022 Glance Networks, Inc.
*/
window.GLANCE=window.GLANCE||{};window.GLANCE.VERSION="6.4.0.45";window.GLANCE.PATCH="";window.GLANCE.Lib=window.GLANCE.Lib||{};
var w=function(){var a=navigator.userAgent.toLowerCase(),c=navigator.platform.toLowerCase(),b=a.match(/(edge|edg)[\s\/:]([\w\d\.]+)?/)||a.match(/(opera|ie|firefox|chrome|crios|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||a.match(/(rv):([\w\d\.]+)/)||[null,"unknown",0];"edg"===b[1]&&(b[1]="edge");"crios"===b[1]?b[1]="chrome":"rv"===b[1]&&(b[1]="ie");a={extend:Function.prototype.extend,name:"version"==b[1]?b[3]:b[1],version:"ie"==b[1]&&document.documentMode||parseFloat("opera"==
b[1]&&b[4]?b[4]:b[2]),l:{name:a.match(/ip(?:ad|od|hone)/)||c.match(/mac/)&&"undefined"!==typeof navigator.g?"ios":(a.match(/(?:webos|android)/)||c.match(/mac|win|linux/)||["other"])[0]},H:{M:!!document.evaluate,J:!!window.L,query:!!document.querySelector,json:!!window.JSON},I:{},K:function(){return"ios"==this.l.name||"android"==this.l.name}};document.documentMode&&window.XDomainRequest?(a.name="ie",a.version=document.documentMode):window.navigator&&navigator.appVersion&&-1!=navigator.appVersion.indexOf("MSIE 7.")&&
(a.name="ie",a.version="7");a[a.name]=!0;a[a.name+parseInt(a.version,10)]=!0;a.l[a.l.name]=!0;return a}();function y(a,c){if(Array.isArray(a))return(new c.Array(...a)).map(b=>y(b,c));if(null!==a&&"object"===typeof a){const b={};Object.entries(a).forEach(([f,g])=>b[f]=y(g,c));return b}return a}if(void 0===ca)var ca=function(a){return z.h&&z.g?(Array.prototype.toJSON&&(a=y(a,z.g.window)),z.g.window.JSON.stringify(a)):JSON.stringify(a)};function E(a,c,b){F(window,"addEventListener",a,c,b)}
function G(a,c,b){var f={};f[c]=b;a.postMessage(f,"*")}function H(a,c){F(window,"addEventListener","message",function(b){if("string"===typeof b.data)try{var f=JSON.parse(b.data)}catch(g){return!1}else f=b.data;void 0!==f[a]&&c(b.source,f[a])})}function J(){this.name="glance_ssn_info";var a=new K,c=a.h.location.hostname;for(a=a.h;""===c&&a.parent!==a;)c=a.parent.location.hostname,a=a.parent;this.domain=da(c)}
J.prototype.get=function(){return this.i()?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(this.name).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null};J.prototype.j=function(){var a=new Date;a.setDate(a.getDate()-1);document.cookie=escape(this.name)+"=; expires="+a.toGMTString()+"; domain="+this.domain+"; path=/"};J.prototype.i=function(){return(new RegExp("(?:^|;\\s*)"+escape(this.name).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)};
function M(){this.name="glance_ssn_info"}M.prototype.get=function(){return this.i()?localStorage.getItem(this.name):null};M.prototype.j=function(){localStorage.removeItem(this.name);localStorage.removeItem(this.name+"_exp")};M.prototype.i=function(){var a=localStorage.getItem(this.name+"_exp");if(!a)return!1;a=new Date(a);return a<new Date?(this.j(),!1):!0};function P(){this.g=[new J,new M]}P.prototype.get=function(){return this.g[0].get()||this.g[1].get()};
P.prototype.j=function(){this.g[0].j();this.g[1].j()};P.prototype.i=function(){return this.g[0].i()||this.g[1].i()};function K(){var a=window;this.g=a.document;this.h=a;var c=[["hidden","visibilitychange"],["mozHidden","mozvisibilitychange"],["webkitHidden","webkitvisibilitychange"],["msHidden","msvisibilitychange"],["oHidden","ovisibilitychange"]];for(a=0;a<c.length&&!(c[a][0]in document);a++);}
function da(a){var c=new RegExp(/^(?:[a-z]{1,5}:\/\/|)([^:\?\/]*)/),b=a.match(/^\d+\.\d+.\d+.\d+$/);c=c.exec(a);if(b)return a;if(null===c||2!==c.length)return"about:"!==a&&n("ERR_DOMAINPARSE: "+a),null;b=c[1].split(".");return 1===b.length?(n("ERR_DOMAINPARSE: "+a),null):2===b.length?b.join("."):3===b.length?b.slice(1).join("."):4>=b[b.length-2].length?b.slice(b.length-3).join("."):b.slice(b.length-2).join(".")}K.prototype.getElementsByTagName=function(a){return F(this.g,"getElementsByTagName",a)};
function Q(a,c,b,f){var g=a.g.createElement("script");b&&g.addEventListener("load",b);f&&g.addEventListener("error",f);g.setAttribute("type","text/javascript");g.setAttribute("charset","UTF-8");for(b=0;b<c.length;b++)g.setAttribute(c[b][0],c[b][1]);a.g.head.appendChild(g)}K.prototype.head=function(){return void 0!==this.g.head?this.g.head:this.getElementsByTagName("head")[0]};
function R(a,c){a.h.addEventListener&&(document.readyState.match(/complete/)?c():(a.h.addEventListener("load",c),a.g.addEventListener("DOMContentLoaded",c,!1)))}
function S(a){if(void 0!==window.pageXOffset)return{x:Math.round(a.h.pageXOffset),y:Math.round(a.h.pageYOffset)};if(void 0!==document.documentElement.scrollTop)return{x:a.g.documentElement.scrollLeft,y:a.g.documentElement.scrollTop};if(void 0!==document.body.scrollLeft)return{x:a.g.body.scrollLeft,y:a.g.body.scrollTop};throw Error("Can't get page scroll");}
K.prototype.scrollTo=function(a,c,b){var f=S(this);f[a]=c;a={left:f.x,top:f.y,behavior:b?"smooth":"auto"};w.ie11||w.edge?window.scrollTo(f.x,f.y):window.scrollTo(a);S(this)};K.prototype.addEventListener=function(a,c,b){F(this.g,"addEventListener",a,c,b)};K.prototype.removeEventListener=function(a,c,b){F(this.g,"removeEventListener",a,c,b)};function z(a){this.g=a}z.prototype.addEventListener=function(a,c,b){F(this.g,"addEventListener",c,b)};
z.prototype.removeEventListener=function(a,c,b){F(this.g,"removeEventListener",c,b)};function F(a,c,...b){return z.h&&z.g&&a.nodeType?"#document"===a.nodeName?z.g.document[c].apply(a,b):"#document-fragment"===a.nodeName?z.g.DocumentFragment.prototype[c].apply(a,b):z.g.document.body[c].apply(a,b):z.h&&z.g&&"[object Window]"===a.toString()?z.g.window[c].apply(a,b):a[c].apply(a,b)}function T(a,c,b){a.g.style.left=c+"px";a.g.style.top=b+"px"}
z.prototype.moveTo=function(a,c){function b(){10>u++?(g+=p,l+=A,T(f,Math.floor(g),Math.floor(l)),f.h=F(window,"setTimeout",b,20)):T(f,a,c)}void 0!==this.h&&F(window,"clearTimeout",this.h);var f=this,g=parseInt(this.g.style.left),l=parseInt(this.g.style.top);isNaN(g)&&(g=-999);isNaN(l)&&(l=-999);var u=0,p=(a-g)/10,A=(c-l)/10;0===p&&0===A||b()};function U(){this.listeners=this.g={}}U.prototype.add=function(a,c){this.g[a]=this.g[a]||[];this.g[a].push(c)};
function V(a,c){c&&JSON.stringify(c);var b=a.g.error;if(void 0!==b)for(a=0;a<b.length;a++)b[a](c)};function W(a,c){if(void 0!==a){var b=b||Object.keys(a);b.forEach(function(f){void 0!==a[f]&&(c[f]=a[f])})}}function X(a){var c={};if(!a)return c;var b=0;for(a=a.attributes;b<a.length;b++){var f=a[b].nodeName.match(/data-(.*)/);f&&2===f.length&&(c[f[1]]=a[b].nodeValue)}return c}function ea(){var a=window.GLANCE_COBROWSE?window.GLANCE_COBROWSE:{},c=document.getElementById("cobrowsescript"),b=document.getElementById("glance-cobrowse");c=X(c);b=X(b);W(c,a);W(b,a);return a};var fa=["6","4","0","45"].slice(0,3).join(".")+"M";
function ha(){this.h=document.getElementById("cobrowsescript")||document.getElementById("glance-cobrowse");document.getElementById("glance-cobrowse");if(null!==this.h){var a=ea();W(a,this);var c=RegExp("//(.*)/").exec("string"===typeof this.h.src?this.h.src:a.scriptserver+"/");this.g=c&&2===c.length?c[1]:"www.glancecdn.net/cobrowse";this.g=this.g.replace("/js","");a.cbexperiment&&(this.g=this.g.replace("cobrowse","cbexperiment"));this.m=a.groupid||this.h.getAttribute("groupid");this.G=a.ws||this.h.getAttribute("ws")||
"www.glance.net";this.G.match("\\.glance\\.net$");this.F=a.ui;this.uri=a.uri;this.C=a.site||this.h.getAttribute("site")||"production";this.v=JSON.parse(a.inputevents||"{}");this.A=a.presence;if(!this.m)throw Error("data-groupid missing");a=a.additionalgroupids||"";this.o=[this.m].concat(a?a.split(","):[]);this.o=this.o.map(function(b){if(!parseInt(b))throw Error("data-groupid invalid: "+b);return parseInt(b)});if(!/staging|production/i.test(this.C))throw Error("data-site invalid");}};function Y(){return 0<window.location.href.indexOf("GlanceSession=1")};window.GLANCE=window.GLANCE||{};window.GLANCE.Cobrowse=window.GLANCE.Cobrowse||{};
function Z(){function a(d){function e(r,B,I){return function(C){C.keyCode===B&&C[r+"Key"]&&(C=I.match(/showButton|toggleButton|showTerms/)?"VisitorUI":"Visitor",g(C,I)||(v("inputevent:",I),window.GLANCE.Cobrowse[C][I]()))}}for(var h in d)if(d.hasOwnProperty(h)){var m=h.match(/(ctrl|alt|shift)-(\d*)/);!m||3>m.length||E("keydown",e(m[1],parseInt(m[2]),d[h]),!0)}}function c(d){function e(h){return function(m){var r=h.match(/showButton|toggleButton|showTerms/)?"VisitorUI":"Visitor";m.stopPropagation();
m.preventDefault();g(r,h)||(v("button click",r,h),t[r][h]())}}["glance_button","data-glancebutton"].forEach(function(h){for(var m=d.querySelectorAll("["+h+"]"),r=0;m&&r<m.length;r++){var B=m[r].getAttribute(h);"start"===B&&(B="startSession");m[r].addEventListener("click",e(B))}})}function b(){return t.Visitor}function f(d,e){t[e][d]=function(h){d.match(/showButton|toggleButton|showTerms/)&&"Visitor"==e&&(e="VisitorUI");h&&h.groupid&&(t.Loader.groupid=h.groupid);l(function(){t[e][d](h)},e)}}function g(d,
e){if(!u)return!1;v("forward event:",d,e);G(window.top,"forwardevent",{namespace:d,funcname:e});return!0}function l(d,e){e=e||"Visitor";if(F(p.g,"getElementById",("glance_"+e).toLowerCase()))t[e].loaded?d&&d():d&&(n("SCRIPT_NOT_LOADED:"+e),V(D,{B:"SCRIPT_NOT_LOADED:"+e,code:"scriptloadfailed",D:{script:e}}));else if(d&&(aa._onload[e]=d),u||"Visitor"!==e||x.F||l(null,"VisitorUI"),Q(p,[["id",("glance_"+e).toLowerCase()],["src",N+"/GlanceCobrowse"+e+"_"+O+".js"]]),"Visitor"===e)for(e=document.getElementsByTagName("iframe"),
d=0;d<e.length;d++)e[d].contentWindow&&G(e[d].contentWindow,"glance_load",{s:!0})}window.GLANCE.runTroubleshooter=function(){Q(p,[["src","https://"+x.g+"/js/Troubleshooter.js"]])};window.GLANCE.checkHTML=function(){Q(p,[["src","https://"+x.g+"/js/HTMLChecker.js"]])};if(window.localStorage&&window.XMLHttpRequest&&window.atob){var u=window.parent!==window,p=new K,A=!1,x=new ha,O=fa,t=window.GLANCE.Cobrowse,N="//"+x.g+"/js";if(!x.g)if(window.console&&window.console.error)k("error",...["ASSERT"]);else throw Error("ASSERT");
var D=new U,q=x.h;if(t.Loader&&q&&q.getAttribute("data-loaded"))n("ERR_DUP_SCRIPTS");else{q&&q.setAttribute("data-loaded",!0);var ba=null;q=new Promise(d=>{ba=()=>{d()}});var aa={load:function(d){l(d)},loadScript:function(d,e){Q(p,[["src",N+"/"+d+"_"+O+".js"]],e,()=>{V(D,{B:"SCRIPT_NOT_LOADED:"+d,code:"scriptloadfailed",D:{script:d}})})},setUIReady:ba,_uiready:q,_eventListeners:D,_onload:{},_origpath:window.location.pathname,groupid:function(){var d=(new P).get();if(!d)return null;let e;return null==
(e=JSON.parse(d).ssnid)?void 0:e.split(".")[0]}()};H("glance_load",function(d,e){d&&(d!==window.parent&&d.parent!==window?n("UNTRUSTED_LOAD_MSG"):(e.s&&l(),e.u&&null!==F(p.g,"getElementById","glance_visitor")&&G(d,"glance_load",{s:!0})))});u&&G(window.parent,"glance_load",{u:!0});window.addEventListener("message",function(d){if("string"!==typeof d.data){if(b().loaded)return!0;d.data.glance_invoke&&(d.data.origin=d.origin,l(function(){window.postMessage(d.data,window.location.href)}))}});E("focus",
function(){if(b().loaded)return!0;b().inSession()&&l()});t.Visitor={loaded:!1,inSession:function(){return(new P).i()},addEventListener:function(d,e){D.add(d,e)},removeEventListener:function(d,e){d=D.g[d];void 0!==d&&(e=d.indexOf(e),0<=e&&d.splice(e,1))}};q=["showButton","toggleButton","showTerms","setStyle"];u||(t.VisitorUI={},q.forEach(function(d){f(d,"VisitorUI")}));q=q.concat(["startSession","setStartParams"]);q.forEach(function(d){f(d,"Visitor")});t.Loader=aa;u||Y()||!b().inSession()||l();!u&&
Y()&&l(null,"XDOM");R(p,function(){document.body&&!A&&(A=!0,c(document.body),a(x.v),x.A&&!u&&Q(p,[["src",N+"/GlancePresenceVisitor_"+O+".js"]]))});H("forwardevent",function(d,e){v("received forwarded event:",e);if(d.top!==window)n("UNTRUSTED_KEYEVT");else window.GLANCE.Cobrowse[e.namespace][e.funcname]()})}}else k("error",...["ERR_COBROWSE_NOT_SUPP"])}document.getElementById("cobrowsescript")||document.getElementById("glance-cobrowse")?Z():(n("LOADER_PAGE_NOT_READY"),R(new K,Z));}).call(window);
//# sourceMappingURL=map.js.map

      .misc-media--audio .video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-active .vjs-progress-control,
      .misc-media--audio .video-js.not-hover.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-progress-control,
      .misc-media--audio .video-js.video-js .vjs-progress-control,
      .misc-media--audio .video-js.vjs-has-started.vjs-playing.vjs-user-inactive .vjs-progress-control {
        height: 0.5em;
        transition: none;
        top: -0.5em; }

.transcript-data,
.vjs-disclaimer-data {
  display: none; }

@media screen and (max-width: 540px){
    .misc-media--audio {
        width: 100% !important;
    }
}
.misc-info-image__wrapper {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active) {
    .misc-info-image__content {
        width: auto;
    }
}

.misc-info-image__picture {
    display: inline-block;
}

@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active) {
    .misc-info-image__picture {
        max-width: 100%;
    }
}

.misc-info-image__img {
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

@media (min-width: 48rem) {
    .misc-info-image__img {
        width:auto;
        max-width: 100%;
    }
}

.misc-info-image__bg {
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 12.5rem;
}
/*
.misc-info-image__caption {
    font-size: .875rem;
    padding: 0 .625rem;
}

.misc-info-image__caption p {
    font-size: .875rem;
    padding-bottom: .9375rem;
}
*/
.misc-info-image__block {
    background-color: #fff;
    padding: 1.875rem 3.125rem;
}

@media (min-width: 48rem) {
    .misc-info-image__block {
        padding:1.875rem 4.375rem;
    }
}

@media (min-width: 64rem) {
    .misc-info-image__block {
        margin:1.25rem;
        padding: 1.875rem 1.875rem 1.25rem;
        position: absolute;
        top: 0;
        left: 0;
        max-width: 17.8125rem;
    }

    .misc-info-image__block--upper-right {
        left: auto;
        right: 0;
    }

    .misc-info-image__block--lower-left {
        top: auto;
        bottom: 0;
    }

    .misc-info-image__block--lower-right {
        top: auto;
        left: auto;
        bottom: 0;
        right: 0;
    }
}

.misc-info-image__headline {
    margin: 0;
}

.misc-info-image__text-version {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.misc-info-image__text-version .misc-collapse-text {
    width: 100%;
}

.misc-info-image__text-version .misc-collapse-text__button {
    padding: 10px 30px 0 0;
}

.misc-info-image__text-version .misc-collapse-text__head {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    /*justify-content: space-between;
    padding: 1.25rem 1.25rem 0 1.875rem;*/
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 30px;
}

.misc-info-image__text-version .misc-collapse-text__close {
    line-height: 0;
    height: .875rem;
    z-index: 1;
}

.misc-info-image__text-version .misc-collapse-text__close img {
    width: 1pc;
}

.misc-info-image__text-version .misc-collapse-text__pick {
    width: 1.875rem;
    height: 1.875rem;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: #f5f5f5;
    display: inline-block;
    position: relative;
    top: -2.1875rem;
}

.misc-info-image__text-version .misc-collapse-text__description {
    padding: 0;
}

.misc-info-image__text-version .misc-collapse-text__body {
    background-color: #f5f5f5;
    margin-top: 1.5625rem;
}

.misc-info-image__text-version .misc-collapse-text__text {
    /*padding: 0 2.5rem 0 1.25rem;
    position: relative;
    top: -1.5625rem;*/
	font-size: 16px;
    line-height: 27px;
    font-family: "connections regular", Arial, sans-serif;
    padding: 0 60px 0 20px;
    position: relative;
    top: -25px;
}

.misc-info-image__text-version .misc-collapse-text__text ul {
    margin-left: 1.25rem;
}


@media (min-width: 768px){
	.misc-info-image__text-version .misc-collapse-text__text {
		font-size: 18px;
	}
}

.misc-info-image--full-width {
    width: 100%;
}

.misc-info-image--center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.misc-info-image--center.misc-info-image__text-version {
    margin: 0 auto;
}

.misc-info-image--right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.misc-info-image--right.misc-info-image__text-version {
    margin: 0 0 0 auto;
}

.misc-info-image--block .misc-info-image__picture {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.misc-info-image--block .misc-info-image__wrapper,.misc-info-image--single .misc-info-image__img,.misc-info-image--single .misc-info-image__picture {
    display: block;
}

.misc-collapse-text__description .icon {
    background-color: transparent;
    border: none;
}
.js-misc-collapse-text-description {
    display: none;    
}
/*
.misc-collapse-text__description [class*=" icon-"], [class^=icon-] {
    font-family: icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
*/
.js-misc-collapse-text-close-btn {
	position: relative;
    padding:10px;
    /*right: 42px;*/
    z-index: 2;
}
.misc-collapse-text__description .sr-only {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}


.misc-collapse-text .icon--close:before {
    transform: rotate(-45deg);
}
.misc-collapse-text .icon--close:after {
    transform: rotate(45deg);
}

.misc-collapse-text .icon--close:before, .misc-collapse-text .icon--close:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 25px;
    height: 1px;
    background-color: #012169;
    transform-origin: center;
}

.js-misc-collapse-text-button {
    font-size: 16px;
    font-family: "connections regular", Arial, sans-serif;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    color: #0052c2;
    text-decoration: none;
}
@media (min-width:768px) {
    .js-misc-collapse-text-button {
        font-size: 18px;
    }
}    

.misc-info-image__content div.misc-info-image__caption {
  clear: both;
  padding-top: 10px;
  margin: 0 0 16px;
  line-height: 1.3;
  text-align: left;
}
.misc-info-image__content div.misc-info-image__caption p{
	margin: 0 0 4px !important;
	font-size: 12px;
	line-height: 1.3;
	color: #646464;
}

@media (min-width: 640px) {
	.misc-info-image__content div.misc-info-image__caption {
		width: auto;
		right: 15px;
		text-align: inherit;
	}
}
@media (min-width: 769px) {
	.misc-info-image__content div.misc-info-image__caption {
		right: 30px;
		font-size: 13px;
	}
	.misc-info-image__content div.misc-info-image__caption p {
		font-size: 13px;
	}
}
/* ----- Search results component styles ----- */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; } 
}
 
.custom-search-results {
  display: flex;
  justify-content: center; 
}
.custom-search-results__notfound {
    font-family: "connections", Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-family: "connections serif bold", Georgia, serif;
    line-height: 1.7;
    font-size: 22px; 
}
.custom-search-results__container {
    margin-top: 25px;
    /*width: 100%;*/
    /*max-width: 845px;*/
    padding: 0 20px;
    color: #333; 
}
.custom-search-results__total {
    margin-bottom: 1rem; 
}
@media (min-width: 640px) {
    .custom-search-results__total {
    	margin-bottom: 0; 
    } 
} 
    .custom-search-results__total-of {
      font-family: "connections", Arial, Helvetica, sans-serif;
      font-weight: normal;
      font-family: "connections serif italic", Georgia, serif; }
  .custom-search-results__pager {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    flex-direction: column;
    text-align: center; }
    @media (min-width: 640px) {
      .custom-search-results__pager {
        flex-direction: row;
        text-align: left; } }
    .custom-search-results__pager--bottom {
      margin-top: 42px; }
  .custom-search-results__page {
    font-family: "connections", Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-family: "connections serif", Georgia, serif;
    color: #333;
    font-size: 1.125rem; }
    .custom-search-results__page--current {
      font-family: "connections", Arial, Helvetica, sans-serif;
      font-weight: normal;
      font-family: "connections serif bold", Georgia, serif;
      color: #C41230 !important; }
  .custom-search-results__page:hover, .custom-search-results__previous:hover, .custom-search-results__next:hover {
    color: #333; }
  .custom-search-results__next {
    padding-left: 10px;
    font-family: "connections", Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-family: "connections serif", Georgia, serif;
    color: #333; }
    .custom-search-results__next:after {
      transition: all 250ms ease-in-out;
      border: 0.325em solid transparent;
      content: "";
      display: inline-block;
      line-height: 1em;
      position: relative;
      margin-left: 0.1625em;
      border-left: 0.325em solid #333;
      border-right: none; }
    .custom-search-results__next:hover:after, .custom-search-results__next:focus:after {
      border-left-color: inherit;
      transform: translateX(0.1625em); }
  .custom-search-results__previous {
    padding-right: 10px;
    font-family: "connections", Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-family: "connections serif", Georgia, serif;
    color: #333; }
    .custom-search-results__previous:before {
      transition: all 250ms ease-in-out;
      border: 0.325em solid transparent;
      content: "";
      display: inline-block;
      line-height: 1em;
      position: relative;
      margin-right: 0.1625em;
      border-right: 0.325em solid #333;
      border-left: none;
      margin-right: 0.1625em;
      margin-left: 0; }
    .custom-search-results__previous:hover:before, .custom-search-results__previous:focus:before {
      border-right-color: inherit;
      transform: translateX(-0.1625em); }
  .custom-search-results__list {
    margin: 0; }
    @media (min-width: 640px) {
      .custom-search-results__list {
        margin: 42px 0; } }
  .custom-search-results__item {
    margin-top: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e7e7e7; }
  .custom-search-results__link {
    display: block; }
    .custom-search-results__link:hover {
      cursor: pointer; }
      .custom-search-results__link:hover .custom-search-results__description {
        color: #454545; }
  .custom-search-results__title {
    font-family: "connections", Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-family: "connections bold", Arial, Helvetica, sans-serif;
    color: #dc1431;
    margin: 0; }
  .custom-search-results__description {
    margin: 5px 0 25px 0;
    color: #454545; }

/*********************Custom CSS for all 3 sites *************/
.custom-search-results .results-summary{
    margin-top: 25px;
    /*width: 200px;*/
    padding-left: 18px;
    border-left: 1px solid #e7e7e7;
}

.custom-search-results .search-tr-valign{
    border-bottom: 1px solid #e7e7e7;
}

.custom-search-results .results-summary a{
    margin-left: 10px;
    line-height: 17px;
    margin-bottom: 10px;
    font-size: 15px;
}

.custom-search-results .results-summary .view-more-results{
    color: #fff;
    background: #C41230;
    width: 115px;
    text-align: center;
    font-size: 12px;
    padding: 1px 10px;
    margin-top: 17px;
    margin-bottom: 17px;

}

.cq-container .custom-search-results .search-tr-valign{
    font-size: 15px;
    margin-top: 19px;
}
.cq-container .custom-search-results .view-more-results{
    background: #012169;
}

.cq-container .custom-search-results .custom-search-results__title
{
    text-align: left;
    text-transform: none;
    letter-spacing: 0;
    padding-bottom: 12px;
    font-family: "connections", Arial, Helvetica, sans-serif;
    color: #012169;
}

.cq-container . custom-search-results__total,  .cq-container .custom-search-results__total  span {
    font-family: Arial !important;
    font-size: 15px;
}

.cq-container .custom-search-results__nav, .cq-container .custom-search-results__total  a {
    font-family: Arial !important;
    font-size: 15px;
}

.ml-content .custom-search-results .search-tr-valign{
    font-size: 15px;
    margin-top: 19px;
    margin-bottom:15px;
}
.ml-content .custom-search-results .view-more-results{
    background:#454545;
}

.ml-content .custom-search-results .custom-search-results__title
{
    text-align: left;
    text-transform: none;
    letter-spacing: 0;
    padding-bottom: 12px;
    font-family: "connections", Arial, Helvetica, sans-serif;
    color: #012169;
}

.ml-content .custom-search-results__total, .ml-content .custom-search-results__total span {
    font-family: Arial !important;
    font-size: 15px;
}

.ml-content .custom-search-results__nav, .ml-content .custom-search-results__total  a {
    font-family: Arial !important;
    font-size: 15px;
}

.ml-content .custom-search-results a {
    text-decoration: none; 
}
.custom-search-results__container, .results-summary {
	border-top:1px solid #e7e7e7;
}

@media (min-width:320px) and (max-width:767px) {
	.custom-search-results{display: block;}
	.custom-search-results__container { width: 100% !important;}
	.custom-search-results .results-summary{width:96% !important;}
}

.ml-content .custom-search-results__item{/*width: 671px;*/display: block;}
.ml-content .custom-search-results__page {font-family: arial;font-size:0.96rem;}
.ml-content .custom-search-results__next, 
.ml-content .custom-search-results__previous{font-family: arial;}

.body--ready .custom-search-results__title{color: #0052C2;}
.body--ready .custom-search-results .results-summary a{color: #0052C2}
.body--ready .custom-search-results__page--current{font-family: "connections", Arial, Helvetica, sans-serif;}
.body--ready .custom-search-results__page{font-family: "connections", Arial, Helvetica, sans-serif;}
.body--ready .custom-search-results .results-summary .view-more-results{background: #e31836;color: #fff;}
.body--ready .custom-search-results__container{width: 649px;}
.body--ready .custom-search-results .results-summary{width: 293px;} 

.body--ready .custom-search-results__next {font-family: "connections", Arial, Helvetica, sans-serif;}
.body--ready .custom-search-results__previous {font-family: "connections", Arial, Helvetica, sans-serif;}
.custom-search-results__pager--bottom {margin-bottom: 30px;}

.ml-content .custom-search-results__container,.wrapper .custom-search-results__container{ width: 664px;}
.ml-content .custom-search-results .results-summary,.wrapper .custom-search-results .results-summary {width: 305px;}

/* ----- Search results controls component styles ----- */
.custom-search-filters {
  margin: 0 auto;
  overflow: visible;
}
@media (min-width: 795px) {
  .custom-search-filters {
    margin-top: 10px;
  }
}
.custom-search-filters span {
  display: inline;
  margin: 0;
}
@media (min-width: 795px) {
  .custom-search-filters span {
    display: inline-block;
  }
}
.custom-search-filters input {
  border: 1px solid #e7e7e7;
  border-radius: 0;
  display: inline;
  padding: 10px;
}
.custom-search-filters input[type='text'] {
  /* Remove IOS shadow */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: calc(100% - 105px);
}
@media (min-width: 795px) {
  .custom-search-filters input[type='text'] {
    width: calc(60% - 105px);
  }
}
@media (min-width: 795px) {
  .custom-search-filters input {
    display: inline-block;
    width: 20%;
  }
}
.custom-search-filters__customselect {
  border: 1px solid #e7e7e7;
  display: inline-block;
  padding: 5px;
  height: 34px;
  position: relative;
  width: 65%;
  top: 13px;
}
@media (min-width: 795px) {
  .custom-search-filters__customselect {
    width: 75%;
  }
}
#searchresultsform .custom-search-filters__customselect {
  top: 0;
}
.custom-search-filters__customselect select {
  opacity: 0;
  position: relative;
  width: 100%;
  z-index: 2;
}
.custom-search-filters__customselect div {
  height: 34px;
  left: 5px;
  position: absolute;
  top: 0;
  width: 100%;
}
.custom-search-filters__customselect div:after {
  content: "";
  background-color: #e7e7e7;
  border-left: 1px solid #e7e7e7;
  height: calc(100% - 2px);
  left: calc(100% - 35px);
  position: absolute;
  top: 0;
  width: 30px;
}
.custom-search-filters__customselect div span {
  display: inline-block;
  position: relative;
  width: 100%;
  font-size: 16px;
  text-align: left;
}
.custom-search-filters__customselect div span:after {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #012169;
  position: absolute;
  left: calc(100% - 24px);
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
}
@media (min-width: 795px) {
  .custom-search-filters__customselect {
    width: 25%;
    margin-left: 15px;
  }
}
.custom-search-filters input.custom-search-filters__searchbutton {
  background-image: url('../../../etc.clientlibs/ml-misc-app/clientlibs/images/resources/global/search-icon-1.png');
  background-repeat: no-repeat;
  background-color: #012169;
  background-position: center center;
  display: inline-block;
  margin-left: 20px;
  margin-top: 5px;
  height: 34px;
  width: calc(100% - 75% - 45px);
}
@media (min-width: 795px) {
  .custom-search-filters input.custom-search-filters__searchbutton {
    background-position: center center;
    background-size: 40%;
    float: right;
    height: 35px;
    margin-left: 10px;
    margin-top: 0;
    position: relative;
    top: 0px;
    width: 35px;
  }
}
.custom-search-filters__pagination {
  display: none;
  border-top: 1px solid #e7e7e7;
  overflow: auto;
  margin-top: 10px;
  padding-top: 20px;
}
@media (min-width: 795px) {
  .custom-search-filters__pagination {
    padding-top: 10px;
  }
}
.custom-search-filters__pagination span {
  float: left;
}
.custom-search-filters__pagination div {
  float: right;
  margin-right: 1px;
}
@media (min-width: 795px) {
  .custom-search-filters__pagination div {
    margin-left: 30px;
  }
}
.custom-search-filters__pagination div a {
  border-right: 2px solid #e7e7e7;
  color: #454545;
  font-family: "connections light", "connections regular", Arial, sans-serif;
  font-size: 18px;
  float: left;
  padding: 0 5px;
  position: relative;
  top: 4px;
}
.custom-search-filters__pagination div a.active {
  color: #012169;
}
.custom-search-filters__pagination div a.is-active {
  font-family: "connections bold";
}
.custom-search-filters__pagination div a.hide {
  display: none;
}
.custom-search-filters__pagination div a:nth-of-type(3) {
  border-right: 0;
}
.custom-search-filters__pagination div a.last {
  border-right: 0;
}
@media (min-width: 795px) {
  .custom-search-filters__pagination div a.last {
    padding-right: 0;
  }
}
.custom-search-filters__pagination div a.last:after {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #454545;
  margin-left: 10px;
}
.custom-search-filters__pagination div a:last-of-type {
  border-right: 0;
}


@supports (-webkit-text-size-adjust:none) and (not (-ms-accelerator:true)) {
  .custom-search-filters__searchbutton {
    top: 10px;
  }
}

/*********************Custom CSS for all 3 sites *************/
.custom-search-filters {
    display:block;
	width:910px;
    margin:0 auto;
    height:50px;
    margin-top:25px;
}

.cq-container .custom-search-filters input, .custom-search-filters__searchbutton {top:0;}
.ml-content .custom-search-filters input, .custom-search-filters__searchbutton {top:0;}


.content__wrapper .custom-search-filters input {vertical-align: top; height:35px;float:none;}

.content__wrapper .custom-search-filters .display{ margin-top:5px;}
.content__wrapper .custom-search-filters__customselect select{height:30px;}
.content__wrapper .custom-search-filters span {vertical-align:middle;margin-top:-24px;}

@media (max-width:1023px) {
    .custom-search-filters{ width:93%;}
    
    /*.custom-search-filters input{width:42% !important; margin-right:10px;}*/
    .custom-search-filters input{width:40% !important;}

    .custom-search-filters__customselect{width:27% !important; margin-left:10px;}

    .custom-search-filters input.custom-search-filters__searchbutton{
        width:34px !important;
        margin-left:10px;
        margin-top:0px;
        height:34px;
    }
}

@media (min-width: 768px) and (max-width: 867px) {
	.custom-search-filters input.custom-search-filters__searchbutton{
    	float: right; 
    }
    .content__wrapper .custom-search-filters span {
        vertical-align: 40%;
        margin-top: -24px;
    }
}

@media (min-width: 320px) and (max-width: 767px) {

    .results-summary{margin-bottom: 30px; width: 100% !important; border-left:none !important; padding-left:0;}
    
    .custom-search-filters{ width: 90%; min-height: 186px;}
    
    .custom-search-filters span{text-align: center; display:block;}
    
    .custom-search-filters input{width: 100% !important;}

    .custom-search-filters__customselect{width: 100% !important; margin-left:0px;}    

    .custom-search-filters input.custom-search-filters__searchbutton{
        width: 45px !important;
        height: 45px;
        margin: 20px auto;
        text-align: center;
        display: block;
    }
	.content__wrapper .custom-search-filters span{margin-top:10px;}
}

.content__wrapper .custom-search-filters input.custom-search-filters__searchbutton{background-color: #dc1431;}

.ml-content .custom-search-filters input{height:35px;} 

_:-ms-lang(x), .content__wrapper .custom-search-filters span {
    vertical-align:middle;margin-top:-10px;
}
.custom-search-filters__customselect{margin-left:0;}
.custom-search-filters span{padding:0 12px;}

.ml-content .custom-search-filters .display{margin-top: 4px;}

.body--ready .content__wrapper .custom-search-filters input.custom-search-filters__searchbutton { background-color: #e31836;}


@media all and (-ms-high-contrast:none){
    *::-ms-backdrop, .cq-container .custom-search-filters input, .custom-search-filters__searchbutton { top:3px; } /* IE11 */
    *::-ms-backdrop, .ml-content .custom-search-filters input, .custom-search-filters__searchbutton { top:2px; } /* IE11 */
}

/* ----- Collapsible component styles ----- */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; } 
}

.misc-collapsible {
	margin: 10px 0; 
}
.misc-collapsible a:focus{
	outline:thin dotted #009cde;
}
.misc-collapsible .misc-collapsible__header * {
    margin: 0;
    font-family: "connections", Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-family: "connections serif", Georgia, serif;
    font-size: 22px;
    line-height: 1.1;
    color: #333; 
}
@media (min-width: 768px) {
	.misc-collapsible .misc-collapsible__header * {
		font-size: 1.875rem;
	} 
}
.misc-collapsible__controls, .misc-collapsible__control {
    font-family: "connections", Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-family: "connections light", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
    text-transform: uppercase; 
}
@media (min-width: 768px) {
	.misc-collapsible__controls, .misc-collapsible__control {
		font-size: 1.125rem; 
	}
}
.misc-collapsible__controls {
    margin: 20px 0 10px;
    color: #333; 
}
.misc-collapsible__control {
    color: #C41230; 
}
.misc-collapsible__control[disabled] {
	color: #ccc; 
}
.misc-collapsible__section {
    margin: 12px 0; 
}
.misc-collapsible__section-title {
    position: relative;
    display: block;
    padding: 20px 40px 20px 20px;
    font-family: "connections", Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.15;
    letter-spacing: 0.025em;
    color: #333;
    background-color: #efeeea;
    cursor: pointer; 
}

.misc-collapsible__section-title-span {
    position: relative;
    display: block;
    padding: 20px 40px 20px 20px;
    color: #333;
    background-color: #efeeea;
    cursor: pointer; 
}
@media (min-width: 768px) {
	.misc-collapsible__section-title {
		padding-right: 60px;
		padding-left: 32px;
		font-size: 1.25rem; 
	} 
}
.misc-collapsible__section-title .icon {
	position: absolute;
	top: 50%;
	right: 23px;
	display: block;
	width: 0;
	height: 0; 
}
@media (min-width: 768px) {
	.misc-collapsible__section-title .icon {
		right: 35px; 
	} 
}
.misc-collapsible__section-title .icon:before, .misc-collapsible__section-title .icon:after {
	position: absolute;
	top: 50%;
	left: 50%;
	display: block;
	content: "";
	width: 14px;
	height: 3px;
	background-color: #012169;
	transition: all 250ms ease-in-out; 
}
@media (min-width: 768px) {
	.misc-collapsible__section-title .icon:before, .misc-collapsible__section-title .icon:after {
		width: 20px;
		height: 5px; 
	} 
}
.misc-collapsible__section-title .icon:before {
	transform: translate3d(-50%, -50%, 0); 
}
.misc-collapsible__section-title .icon:after {
	transform: translate3d(-50%, -50%, 0) rotate(90deg); 
}
.misc-collapsible__section-title[aria-expanded="true"] .icon:before, .misc-collapsible__section-title[aria-expanded="true"] .icon:after {
	transform: translate3d(-50%, -50%, 0); 
}
.misc-collapsible__section-content {
	display: none; 
}
.misc-collapsible .image {
	margin: 0; 
}
.misc-collapsible--edit .misc-collapsible__section-content {
	display: block !important; 
}

.misc-collapsible__section-title .icon:before, .misc-collapsible__section-title .icon:after{background-color: #ffffff;}
/*************START: Nilay: Change for Leisure***************************/
@charset "utf-8";
/* CSS Document */

.article-wrapper-new {  width: 100%; max-width: 1000px; background:#fff;   margin: 0 auto;  padding: 0; z-index: 1;}
.article-wrapper-new .content-slider {
    max-width: none !important;
}
/*common classes*/
.bluetxt{color:#012169;}
.greentxt{color:#00ae58;}
.whitetxt{color:#fff; text-decoration:none;}
.graytxt{color:#4a4a4a;}
.linktxt{color:#009cde;}
.bt-wrapper{clear: both; min-height:125px; padding-top:35px;}
.bt-wrapper .flbt{float:left; width:75%; text-align:right; padding-right:5%;}
.bt-wrapper .flbt h3{font-size: 1.9em;  margin-bottom: 27px; font-weight: bold !important;}
.bt-wrapper .flbt2{float:left; width:21%;}
.bt-wrapper .flbt .scrollbt{background:url(../../../content/dam/ML/Articles/images/leisure/ico_arrow_bluebg.png) right no-repeat #002268; text-align:center;border:none; padding:16px 70px 16px 25px; font-size:1.7em; text-decoration:none; }
.bt-wrapper .flbt2 .signupbt{ text-align:left; padding:0 0 0 60px; background:url(../../../content/dam/ML/Articles/images/leisure/ico_signup.jpg) left no-repeat; border:none; margin-top:1px; margin-left:16px;display:block;line-height:1;}
.bt-wrapper .flbt2 .signupbt a{text-decoration:none;}
.bt-wrapper .flbt .bluebt{background:#002268; text-align:left;border:none; padding:12px 15px 12px 60px; font-size:1.3em; }
.bt-wrapper a{text-decoration:none;}
.section4 .bluetxt a{color:#012169;}
.graysept{ background:#f5f1ec; height:60px; display:block;}
.fl50{ float:left; width:46%;}
.headbanner img{width:100%; height:auto;}
.footerbanner img{width:100%; height:auto;}
/*section head classes*/
.section_head_wrapper{min-height:150px; padding-top:51px;}
.article-banner-wrapper .bt-wrapper{padding: 19px 38px; min-height:76px;}
.section_head{ float:left; width:65%; background:url(../../../content/dam/ML/Articles/images/leisure/bluebg_r.jpg) no-repeat right #0073cf; font-size:2em; color:#fff; padding:16px 37px;}
/*Banner Classes*/
.article-banner-wrapper{min-height:242px; padding:19px 38px 0 38px; }
.article-banner-wrapper h2{ font-size:2.4em; margin-bottom:0;}
.article-banner-wrapper h1{ font-size:3.4em; margin-top:-10px; margin-bottom:10px;}
.article-banner-wrapper .bt-wrapper .flbt2{ width:25%;}
/*Section Classes*/
.section1 .content-slider.border-top{border-top:none !important;}
.section1 .carousel-container{margin: 0 46px;}
.section1_subttl{text-align:center; font-size:1.5em; min-height:105px; width:94%; margin:0 auto 29px auto;}
.section1_subttl .numberbold{font-size:3.5em; float:left;padding-left:49px;  }
.section1_subttl .subcontent {font-size:1.2em; margin-top:35px; float:left; padding-left:15px;  }
.section1 .bt-wrapper .flbt{width:73%;}
.section_head_wrapper .section_head2{ padding:8px 20px !important; line-height:30px;}
/*.section2 {border-top:59px solid #f5f1ec;}*/
.section2_subwrapper .fl50{ width:48%;}
.section2_subwrapper{ padding:40px 15px 80px 20px;} 
.section2_subwrapper .quoteblock{ background:#f5f1ec; padding:25px; margin-left:25px;}
.section2_subwrapper .quoteblock h2{font-size: 6.7em; margin: 0;  padding: 0;  line-height: 1;}
.section2_subwrapper .quoteblock h3{font-size: 1.6em; margin: 9px 0 23px 0; padding: 0}
/*.section3 {border-top:59px solid #f5f1ec;} */
.section2 .bt-wrapper{padding-top: 149px;  padding-bottom: 30px; min-height: 230px;}
.section2 .bt-wrapper .flbt{width:70%;}
.section3 .content-slider.border-top{border-top:none !important;}
.section3 .carousel-container{margin: 0 46px;}
.section3 .bt-wrapper .flbt{width:71%;}
.section4_subttl{float:left; margin-top:37px;}
.section4_subttl h2 {float:left; width:25%; padding-right:2%; font-size:7em; text-align:right;}
.section4_subttl .contentblock h3{font-weight: normal;  padding-top: 14px;}
.section4_subttl .contentblock {float:left; width:50%; font-size:1.6em;}
.section4_subttl .imgblock {float:left; min-width:25%;}
.defineico{background:url(../../../content/dam/ML/Articles/images/leisure/ico_goal.jpg) 7px no-repeat #002268; text-align: left;  border: 0;  padding: 12px 30px 12px 67px;   font-size: 1.3em;    display: inline-table;line-height: 26px; margin-right: 4px; width: 195px;}
.defineico .arrow{    border-color: transparent transparent transparent white; border-style: solid;  border-width: 4px 0 4px 4px!important;  content: "";  display: inline-block; font-size: 0;  height: 0;  left: 5px;   position: relative;  bottom: auto!important; } 
.findico{background:url(../../../content/dam/ML/Articles/images/leisure/ico_find.jpg) 7px no-repeat #002268;text-align: left; border: 0;  padding: 12px 30px 12px 67px; font-size: 1.3em;  display: inline-table; line-height: 26px; width:224px;}
.findico .arrow{    border-color: transparent transparent transparent white; border-style: solid;  border-width: 4px 0 4px 4px!important;  content: "";  display: inline-block; font-size: 0;  height: 0;  left: 5px;   position: relative;  bottom: auto!important;} 
.graysept{ background:#f5f1ec; height:60px;}
.footerbanner img{width:100%;}
.section4{ padding-bottom:100px;}
.section4 .bt-wrapper .flbt2 .signupbt{margin-top:88px;}
.section1 .content-slider .slick-slider .slick-dots li button { background: 0; border: 0;  color: #f1f1f1;  outline: 0;  font-size:0;  line-height: 0; padding-top:22px;}
.section3 .content-slider .slick-slider .slick-dots li button { background: 0; border: 0;  color: #f1f1f1;  outline: 0;  font-size:0;  line-height: 0; padding-top:22px;}
.footerbanner img{margin-bottom: -10px;}
/*Footer blocks*/
.footer-bot-quote{ float:left; width:100%; padding-top:40px; padding-bottom:100px; background:#fff;}
.footer-bot-quote a { color:#009cde; text-decoration:none; font-size:0.9em;}
.footer-bot-quote a:hover { color:#009cde; text-decoration:underline; }
.footer-quote-ttl{ padding:0 0 10px 0; color:#b3a896; font-size:1em; text-transform: uppercase;}
.footer-quote-ttl h3{margin:0 0 10px 0; padding:0;}
.footer-bot-quotel{float:left; width:32%; padding:10px 10px 10px 21px; border-right:1px solid #ccc; min-height:350px; line-height:19px;}
.footer-bot-quotem{float:left; width:32%; padding:6px 10px 10px 21px; border-right:1px solid #ccc;}
.footer-bot-quoter{float:left; width:26%; padding:6px 10px 10px 21px; }
.footer-bot-quotel ul{list-style:none; color:#009cde; font-size:18px; margin:0; padding:0}
.footer-bot-quotel ul li{padding:3px 7px 3px 40px; list-style:none;margin:0;}
.ico-health{background:url(../../../content/dam/ML/Articles/images/leisure/ico_health.jpg) left 10px no-repeat;}
.ico-work{background:url(../../../content/dam/ML/Articles/images/leisure/ico_work.jpg) left 10px no-repeat;}
.ico-giving{background:url(../../../content/dam/ML/Articles/images/leisure/ico_giving.jpg) left 10px no-repeat;}
.ico-leisure{background:url(../../../content/dam/ML/Articles/images/leisure/ico_leisure.jpg) left 10px no-repeat;}
.ico-home{background:url(../../../content/dam/ML/Articles/images/leisure/ico_home.jpg) left 10px no-repeat;}
.ico-family{background:url(../../../content/dam/ML/Articles/images/leisure/ico_family.jpg) left 10px no-repeat;}
.footer-bot-quotem ul{list-style:none; color:#009cde; font-size:18px; margin:0; padding:0}
.footer-bot-quotem ul li{padding:0 40px 10px 0; list-style:none; margin:0; clear:both;}
.footer-bot-quotem ul li span{float:left; padding:0 16px 0 0;}
/*media css*/
.article-wrapper-new .article-share li {float: left; margin: 0 3px; list-style-type: none;}
.article-wrapper-new .article-share li a {color: #fff; background-color: #454545; background-repeat: no-repeat; background-position: 50% 50%;text-decoration: none; text-align: center; vertical-align: middle; display: block; padding: 3px; height: 2em; width: 2em; line-height: 2em;}
.article-wrapper-new .article-share li a>span {display: none;}
.article-wrapper-new .article-share{ float:right;margin-top:52px; margin-right:4px;}
.article-wrapper-new .article-share>ul { margin: 0 .5em 0 0;}
.article-wrapper-new .article-share li a{curser:pointer !important;}


@media screen and (max-width: 768px) {
    body{margin:0; padding:0}
    .footer-bot-quotel, .footer-bot-quoter, .flbt2, .flbt {width:97%; float:none; border:none; padding:10px; }
.bt-wrapper .flbt2{width: 100%;text-align: center;}
.bt-wrapper .flbt{width: 100%;text-align: center; padding-right:0;}
.article-banner-wrapper{padding:19px 16px; text-align: center;}
.article-banner-wrapper h1 { font-size:2.9em; margin-top: 4px; margin-bottom: 10px; line-height: 1;}
.article-banner-wrapper h2{font-size:2em;}
.article-banner-wrapper .bt-wrapper{padding:15px;}
.section1_subttl{clear:both;}
.section_head{line-height:1; float:none; width:auto; background:#0073cf; font-size:1.7em; color:#fff; padding:10px; margin:auto;}
.bt-wrapper .flbt2 .signupbt br{display:none;}
.bt-wrapper .flbt2 .signupbt {margin-top: 11px; padding: 10px 0 10px 60px;display: inline-block; }
.bt-wrapper .flbt2 .signupbt a{color: #012169;}	
.article-share{margin-top:21px;}
.section1 .bt-wrapper{min-height: 170px;}
.section1 .bt-wrapper .flbt{width:100%;}
.section2 .bt-wrapper{padding-top:0; min-height:153px;}
.section2 .bt-wrapper .flbt{width:100%;}
.section3 .bt-wrapper{min-height: 170px;}
.section3 .bt-wrapper .flbt{width:100%;}
.section1_subttl{ margin: 0 11px; clear: both; min-height: 182px;}
.section1_subttl .subcontent{margin-top:2px; text-align:left; padding-left:0; line-height:1;}
.section1_subttl .numberbold{padding: 10px 0 0 0; margin: 0; line-height: 1;}
.section1 .carousel-container{margin:0 15px;}
.section3 .carousel-container{margin: 0 15px; clear: both;  padding-top: 20px;}
.section4_subttl{margin:30px 18px 0 18px;}
.section4_subttl .contentblock{width:100%;}
.section4_subttl h2{padding: 34px 0 35px 0; text-align: left; line-height: 0;}
.section4_subttl .imgblock{padding: 10px 0 0 20px;}
.section4 .bt-wrapper .flbt2 .signupbt{margin-top:0;}
.bt-wrapper .flbt h3{font-size:1.3em; margin-bottom: 14px;}
.defineico{width: 294px; margin-bottom: 10px; margin-right:0;text-decoration:none;line-height: 40px;}
.findico{line-height:43px; width:296px;}
/*.defineico span, .findico span {top: 15px;}*/
.section4 .whitetxt{text-decoration:none;}
.footer-bot-quotem{border-right:none; padding: 23px 10px;}
.footer-quote-ttl{padding:0 0 0 10px;}
.footer-bot-quotel ul{margin:0 0 0 10px;}
.footer-bot-quoter p{ padding-left:10px;}	
.footer-bot-quotel ul ,.footer-bot-quoter ul{font-size:16px;}
.footer-bot-quoter{margin-top:22px;}
.footer-texthead{ width:90%;font-size:2.3em; padding:10px;}
.footer-texthead a{float:left;}	
.section_head_wrapper{margin: 0 auto;}
.section2_subwrapper .quoteblock{margin:0 auto; width:92%;}
.fl50 {float:none; width:95%;}
.fl50 img{width:100%; height:auto;}
.footer-bot-quotel, .footer-bot-quotem, .footer-bot-quoter{width:90%; float:none; min-height:auto;}
.section4_subttl h2{width:18%;}	
.footer-bot-quotem ul li{padding:0 40px 10px 10px;}
.section1 .content-slider .slick-slider .slick-prev, .section1 .content-slider .slick-slider .slick-next{top:38%;}
.article-banner-wrapper .bt-wrapper .flbt2{width:100%;}
.article-wrapper-new .article-share{margin-top: 32px;}
.bt-wrapper .flbt .scrollbt {font-size: 1.3em;}
}

@media screen and (max-width: 440px) {
    .bt-wrapper .flbt .scrollbt{font-size:1em;} 
    .defineico{font-size:1em;}
    .findico{font-size:1em;}
}
/*************END: Nilay: Change for Leisure***************************/
/*************START: Nilay: Change for Family-Retirement***************************/

/* Family & Retirement common */ 
.fr_content_common{ clear:both;}
.fr_content_dtl h3{	color: white;	font-size: 19px; margin-bottom: -9px;}
.fr_content_dtl h2{	color: #ffcc00;	font-size: 34px;font-weight: bold;line-height: 37px; margin: 10px 0;}
.fr_content_dtl p{	color: white; font-size: 17px; line-height: 23px;}
.fr_content_icon{width:11%; float:left;}
.fr_content_dtl{width:88%;  float:left;}
.fr_content_dtl h4{ padding:34px 34px 50px 34px; text-align:center; color:#fff;}
.fr_scrolldown_btn_common{clear:both;}
.fr_scrolldown_btn_common h3{color: #002268;font-size: 16px; text-align:center;}
.fr_scrolldown_btn_common a{ background:url(../../../content/dam/ML/family-retirement/fr_scroll_icon.jpg) no-repeat; text-align:center; height:38px; width:115px; display:block;  margin:auto 0;}
.fr_scrolldown_btn_common div{width:115px; margin-left: 44%; margin-top: 10px;}
.fr_signup_block{background-color: #ebe7dd; float:left; padding:20px; width:100%;}
.fr_signup_block div{float:left; font-size: 14px; padding-left:36px;}
.fr_signup_block div a{color: #002268;font-size: 14px;font-weight: bold; padding:0 0 0 73px; display:block; text-decoration:none;}
.fr_signup_blockL{width: 25%;   border-right: 1px solid #ccc; padding-right:24px;  text-align: right; font-weight: bold;text-transform: uppercase;}
.banner_fr_social_media{ margin-top:0 !important;}
.fr_signup_blockM{width:41%;  padding-right:63px;}
.fr_signup_blockR{width:31%;}
.fr_signup_blockM a{ background:url(../../../content/dam/ML/family-retirement/ico_watchtalkingmoney.jpg) no-repeat;}
.fr_signup_blockR a{ background:url(../../../content/dam/ML/family-retirement/ico_report_fr.jpg) no-repeat;}
.fr_signup_block div a span{width: 29px; height: 20px; background: url(../../../content/dam/ML/family-retirement/fr_arrow.png) 10px no-repeat;  position: absolute;}
.fr_blue_carousel{padding: 14px 10px 25px 20px;  margin-top: 4px;  float: left;   width: 100%;}
.fr_providing_security_img{    margin-right: -25px;  float: right;}
.fr_blue_social_media .article-share li a{background-color: #012169 !important;}
.fr_blue_social_media .article-share li{margin:0 1px  !important;}
.fr_darkblue_social_media .article-share li a{background-color: #fff !important; color:#012169 !important;}
.fr_darkblue_social_media .article-share li{margin:0 1px  !important;}
.fr_white_social_media .article-share li a{background-color: #a39382 !important; }
.fr_white_social_media .article-share li{margin:0 1px  !important;}
.banner_scroll{margin-top: -31px; height: 92px;}
.fr_quote h3{color:#012169 !important;}
.fr_quote a{color:#012169 !important;}
.fr_quote p{color:#012169 !important;}
.fr_quote{ padding-bottom:30px !important;}
.fr_quote .footer-bot-quotem{width:38% !important;}
.fr_script{padding:60px 20px 20px 20px; float:left;width:100%;}
.fr_script p{ font-size:11px;}
/****/

/* page title section */
.fr_pagettl{ width:100%;background:url(../../../content/dam/ML/family-retirement/ico_page_family.jpg) no-repeat center; height:50px;  margin:auto 0; }

/* Banner Section */
.banner_fr_content{position: absolute; margin-top: -381px;width: 419px; margin-left: 512px;}
.banner_fr_block{background-color: white;}
.banner_fr_content h3{color: #0073cf;font-size: 22px;line-height: 20px;}
.banner_fr_content h1{color: #002268;font-size:35px;font-weight: bold;line-height:41px;}
.banner_fr_content p{color:#454545;font-size:18px;line-height:27px; margin-top:20px;}
.banner_fr_block .banner_fr_social_media li a{background-color: #a39588 !important;}
.banner_fr_block .banner_fr_social_media li{margin:0 1px  !important;}
.banner_fr_block .banner_fr_social_media{margin-right:31px !important;}
.fr_quote .footer-bot-quotel{    min-height: 336px !important;}

/****/

/* Blue Section*/
.fr_blue_block{	background-color: #0052c2; float:left; width:100%; padding:25px 25px 45px 25px;}
/****/

/* Dark Blue Section */
.fr_darkblue_block{background-color: #002268; float: left; width: 100%; padding:25px 25px 45px 25px;}
/****/

/* White background section */
.fr_whitebg_content{padding-left: 30px;}
.fr_whitebg_block .fr_content_common h3{color: #0052c2;	font-size: 21px;}
.fr_whitebg_block .fr_content_common h2{color: #012169;font-size: 34px;font-weight: bold;}
.fr_whitebg_block .fr_content_common p{color: #454545;font-size:19px;}
.fr_whitebg_block{background-color: white; float: left; width: 100%; padding:25px 25px 45px 25px;}
/****/

/* Blue end Section */
.fr_blue_end_block{	background-color: #0073cf;}
.fr_bluebt_block div{float:left;}
.fr_bluebt_block a{color: #fff;font-size: 14px;font-weight: bold;display:block; text-decoration:none;  }
.fr_bluebt_block  .fr_signup_blockM {border:none; width:50%; position:relative;}
.fr_bluebt_block  .fr_signup_blockR {border:none; width:42%; padding-left:23px;position:relative;}
.fr_bluebt_block  .fr_signup_blockM a{ background:url(../../../content/dam/ML/family-retirement/fr_ico_watchwebcast.png) no-repeat; padding:9px 33px 9px 83px; background-color:#012169; font-size: 18px; font-weight:normal;   line-height: 23px; }
.fr_bluebt_block  .fr_signup_blockR a{ background:url(../../../content/dam/ML/family-retirement/fr_ico_report_white.png) 10px no-repeat; padding:9px 15px 9px 102px; background-color:#012169; font-size: 18px; font-weight:normal;   line-height: 23px;}
.fr_bluebt_block  .fr_signup_blockM a span{background: url(../../../content/dam/ML/family-retirement/fr_arrow_arrow.png) right no-repeat; width:20px; height:20px;position: absolute;top: 18px; right: 82px;}
.fr_bluebt_block  .fr_signup_blockR a span{background: url(../../../content/dam/ML/family-retirement/fr_arrow_arrow.png) right no-repeat; width:20px; height:20px; position:absolute;top: 18px; right:16px;}

/****/
/* fr slick carousel classes */
.fr_blue_carousel .content-slider .border-top{ border-top:none;}
.ico-center{width: 366px !important; margin: 0 auto !important; float: none !important;}
.ico-center a{padding: 10px 0 10px 73px !important;} 
.fr_blue_carousel .content-slider{height:auto !important;}
.fr_bluebt_mrg{margin: 0 auto; float: none !important;}

@media only screen and (max-width:960px){
	.banner_fr_content{width: 304px; margin-left: 468px;}
	.banner_fr_content h1 {font-size: 27px;  line-height: 30px;}
	.banner_fr_content h3 {font-size: 19px;line-height: 34px;}
	.banner_fr_content p {font-size: 16px; line-height: 20px; margin-top: 13px;}
}

@media only screen and (max-width:768px){
	.fr_scrolldown_btn_common{display:none; }
	.fr_signup_blockL ,.fr_signup_blockM ,.fr_signup_blockR{float:none; width:100%;}
	.fr_signup_block div a{padding: 0 0 17px 80px;}
	.fr_signup_blockL{border-right:none; border-bottom:1px solid #ccc; padding-bottom:20px; text-align:center; margin-bottom:20px;}
	.fr_signup_block div{padding-left:0; padding-bottom:10px;}
	.fr_bluebt_block  .fr_signup_blockM{width:100%; padding-right:0;}
	.fr_bluebt_block  .fr_signup_blockR{width:100%; padding-left:0;}
	.fr_bluebt_block  .fr_signup_blockM a { font-size: 16px;  margin-bottom: 20px;  padding: 10px 29px 25px 86px;}
	.fr_bluebt_block .fr_signup_blockR a { background-position:2px; padding: 20px 29px 15px 86px; font-size: 16px;}
	.fr_bluebt_block{width:100%; margin: auto;}
	.fr_bluebt_block  .fr_signup_blockR a span, .fr_bluebt_block  .fr_signup_blockM a span{right:12px;}
	.fr_quote .footer-bot-quotem{width:100% !important;}
	.banner_fr_content{position:relative;  margin-top: 10px; width:100%;   margin-left: 0; padding:25px 25px 45px 25px;}
}

@media only screen and (max-width:480px){
	.fr_content_icon{width:60%; margin:auto 0;}
	.fr_content_dtl{float:left; width:100%;}	
	.fr_blue_carousel{padding:10px 0;}
	.banner_fr_content h3{margin-bottom:10px;}
	
	.fr_whitebg_block .fr_content_common p, .fr_content_dtl p, .banner_fr_content p {font-size: 16px;  line-height: 20px;}
	.fr_whitebg_block .fr_content_common h2, .fr_content_dtl h2, .banner_fr_content h1{line-height:30px; font-size: 29px; margin-bottom: 15px;}
	.fr_whitebg_block .fr_content_common h3, .fr_content_dtl h3{margin-bottom:0;}
	.fr_bluebt_block  .fr_signup_blockM a { font-size: 16px;  margin-bottom: 20px;  padding: 10px 29px 15px 86px;} 	

    .fr_blue_carousel .content-slider .slick-slider .slick-prev, .fr_blue_carousel .content-slider .slick-slider .slick-next{top: 41% !important;   height: 25px !important;    width: 25px !important;}                 
    .fr_blue_carousel .content-slider .slick-slider .slick-prev:before{left: 7px !important;}
    .fr_blue_carousel .content-slider .slick-slider .slick-next:before{right: 9px !important;}


}
@media only screen and (max-width:340px){
    .ico-center a {padding: 0 0 0 73px !important;}
	.ico-center {width: 323px !important;}
}


/*************END: Nilay: Change for Family-Retirement***************************/


/* wwwv style */
/* common style*/

.wwu-top-banner {
    background: url(../../../content/dam/ML/working-with-us/wwu_banner.jpg) no-repeat;
}
.wwu-top-banner h1 {
    width: 53%;
    padding:6% 0 6% 0;
    color: #fff;
    font-size: 3.4rem;
    margin: 0 auto;
    text-align: center;
	line-height: 65px;
    /*font-style: italic;*/
}
.wwu-banner-subhead {
    background: #001f62;
}
.wwu-banner-subhead h2 {
    text-align: center;
    width:63%;
    font-size: 1.3rem;
    color: #fff;
    margin: 0 auto;
    padding: 29px;
	line-height: 26px;
}
.wwu-banner-subhead .headtextm{
	display:none;
	}
.wwu-article-wrapper {
    background: url(../../../content/dam/ML/working-with-us/wwu_arrowdown.jpg) top center no-repeat #fff;
    padding: 30px 120px 30px 120px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0;
    z-index: 1;
	margin-top:-24px;
}
.wwu-article-wrapper {
    padding: 0 100px;
}
.wwu-tab-block {
    padding: 50px 0 0 0;
}
.wwu-tab-block-content {
    padding: 0 90px;
}
.wwu-tab-block-content h2 {
    font-size: 1.7rem;
    text-align: center;
    line-height: 1.8rem;
    color: #111c68;
    font-family:"connections light",arial,sans-serif;
}
.wwu-bot-block {
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
}
.wwu-bot-block div {
    margin: 0 auto;
    width: 239px;
}
.wwu-bot-block h2 {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.8rem;
    color: #111c68;
    font-style: italic;
    padding: 0 30px 30px 30px;
    margin-top: 30px;
}
.wwu-bot-block a {
    text-align: center;
    text-decoration: none;
}
.wwu-tab-block-content h3 {
    color: #111c68;
    font-size: 1rem;
    font-weight: bold;
    padding-top: 2.4rem;
}
.wwu-tab-block .wwu-qaset {
    padding: 34px 0;
}
.wwu-tab-block .wwu-qaset h2 {
    background: url(../../../content/dam/ML/working-with-us/ico_qa.jpg) no-repeat;
    padding: 10px 0 10px 90px;
    font-size: 1.6rem;
    color: #111c68;
    border-bottom: 1px solid #b8b8b8;
    font-family:"connections light",arial,sans-serif;
}
.wwu-article-wrapper .wwu-tab {
    /*border-bottom: 1px solid #ccc;*/
    float: left;
    padding: 45px 0 0 0;
    margin-bottom: 44px;
}
.wwu-tab li {
    float: left;
    width: 25%;
    text-align: center;
    margin: 0;
    list-style: none;
	padding:0;
	border-bottom: 1px solid #ccc;
}
.wwu-tab li a:hover {
    border-bottom: 2px solid #ccc;
	    padding: 10px 26px 15px 26px;
}
.wwu-tab li img {
    width: auto !important;
    clear: both;
    display: block;
    min-height: auto !important;
    /* text-align: center; */
    
    margin: 0 auto;
}
.wwu-tab li a {
    display: block;
    text-decoration: none;
    line-height: 21px;
    padding:10px 26px 17px 26px;
}
.wwu-videor span {
    color: #012169;
    font-weight: bold;
    font-size: 1.2rem;
}
.wwu-videor h2 {
    font-size: 2rem;
    font-weight: normal;
    color: #012169;
}
.wwu-videor a span {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    width: 200px;
    margin-top: 20px;
}
.wwu-videor a {
    text-decoration: none;
}
.wwu-videor{width:70%;}
.wwu-hr {
    border-bottom: 1px solid #ccc;
}
.wwu-honor {
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    margin: 30px 0 15px 0;
    padding: 30px 0;
}
.wwu-honor h2 {
    font-size: 1.5rem;
    font-weight: normal;
    font-style: italic;
    color: #012169;
    text-align: center;
    line-height: 31px;
    padding: 0 21px;
}
.wwu-honor div {
    background: url(../../../content/dam/ML/working-with-us/award.jpg) 13% top no-repeat;
    padding-left: 26%;
    min-height: 148px;
    width: 88%;
}
.wwu-honor div h3 {
    font-size: 1.4rem;
    font-weight: normal;
    color: #012169;
    padding-top: 22px;
    padding-bottom: 11px;
}
.wwu-honor .wwu-honor-bt {
    width: 259px;
    display: block;
    margin: 16px auto 0 auto
}
.wwu-honor .wwu-honor-bt a {
    text-decoration: none;
}
.wwu-connect h2 {
    font-size: 1.5rem;
    font-weight: normal;
    font-style: italic;
    color: #012169;
    text-align: center;
    line-height: 31px;
    padding: 20px 21px;
}
.wwu-connect .divl {
    float: left;
    width:30%;
    text-align: right;
    height: 161px;
	padding-top:16px;
}
.wwu-connect .divr {
    text-align: center;
	width: 52%;
    float: left;
}
.wwu-connect .divr h3 {
    font-size: 2.2rem;
    font-weight: bold;
}
.wwu-text-center {
    text-align: center;
}
.wwu-text-center p {
    font-style: italic;
    padding: 20px 0;
}
.marginauto {
    width: 140px;
    margin: 0 auto;
}
.marginauto a {
    text-decoration: none;
}
.nobg {
    background-image: none !important;
    background-color: #fff! !important;
}
.wwu-faq-block .faq {
    padding: 0 70px 20px 70px;
    width: 100%;
}
.wwu-faq-block .faq li {
    list-style: none;
}
.wwu-faq-block .faq li.q {
    font-weight: bold;
    cursor: pointer;
    padding-bottom:15px;
    color: #012169;
}
.wwu-faq-block .faq li.a {
    padding: 5px 5px 55px 5px;
    color: #404040;
    display: none;
}
.wwu-faq-block .q_icon_expand {
    width: 16px;
    height: 16px;
    background-image: url(../../../content/dam/ML/working-with-us/q_collapsed.png);
    background-repeat: no-repeat;
    outline: none;
    border: none;
    margin-right: 20px;
}
.wwu-faq-block .q_icon_collapse {
    width: 16px;
    height: 16px;
    background-image: url(../../../content/dam/ML/working-with-us/q_expanded.png);
    background-repeat: no-repeat;
    outline: none;
    border: none;
    margin-right: 20px;
}

.digi-wrapper .colctrl-layout-2{
	width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    float: none;
    border: none;
}

.wwu-qaset p{padding-left:15px;}

.digi-wrapper .colctrl-layout-2:after {
    border-color: #fff !important;
 	border-bottom: 0 solid #fff !important;
}

	
@media only screen and (max-width: 1024px) {
    .wwu-article-wrapper {
        padding: 0 15px;
    }
    .wwu-bot-block div {
        width: 70%;
    }
    .marginauto {
        width: 200px;
    }
    .wwu-honor .wwu-honor-bt {
        width: 60%;
    }
    .wwu-top-banner {
        background-size: cover
    }
    .wwu-tab li:hover {
        border: 0px;
    }
	.wwu-videor{width:80%;}
}
@media only screen and (max-width: 768px) {
    .wwu-bot-block div {
        width: 90%;
    }
    .marginauto {
        width: 200px;
    }
    .wwu-honor .wwu-honor-bt {
        width: 80%;
    }
}
@media only screen and (max-width: 650px) {
	.wwu-tab-block{
		padding: 21px 0 0 0;
	}
    .wwu-tab-block-content {
        padding: 0 13px;
    }
    .wwu-tab li span {
        display: none;
    }
    .wwu-article-wrapper {
        background-image: none;
        padding: 0;
    }
    .wwu-article-wrapper .wwu-tab {
        padding: 0;
    }
    .wwu-tab li:hover {
        border: 0px;
    }
    .wwu-faq-block .faq {
        padding: 0 0 20px 0;
    }
    .wwu-honor div {
        background: url(../../../content/dam/ML/working-with-us/award.jpg) 0% top no-repeat;
        width: 100%;
    }
    .wwu-top-banner h1 {
        width: 98%;
        font-size: 1.9rem;
    }
    .wwu-banner-subhead h2 {
        padding: 15px;
        width: 95%;
    }
	.wwu-videor{
		padding-left: 20px;
	}
	.wwu-tab-block .wwu-qaset h2{
		font-size: 1.2rem;
	    padding: 10px 0 10px 77px;	
	}
	.wwu-videor h2{
		line-height: 32px;
    	padding: 10px 0;
	}
	.wwu-honor div{
		padding-left: 33%;
	}
	.wwu-article-wrapper .cta--btn{
		padding: 5px;
	} 
	.wwu-top-banner h1{
		display:none;
	}
	.wwu-banner-subhead .headtextm{
		display:block;
		padding: 20px 0 20px 0;
		color: #fff;
		font-size: 1.8rem;
		margin: 0 auto;
		text-align: center;
		line-height:30px;
		font-style: italic;
		width:80%;
	}
	.wwu-top-banner{
		padding:70px;
	}
}
/* FOR OUTLOOK 2018 PAGE*/

@charset "utf-8"; 
.outlook_float_img
{
	float: right; 
	padding-left: 2rem; 
	padding-top: 2rem;
}

.outer_width
{
	text-align: center;
}
.outer_width p{
	font-size: 17px;
    padding: 0;
    margin-bottom: 5px;
}

.inner_width
{
	display: inline-block; 
	text-align: left; 
	width:819px;
    

}

.outlook_style
{
	font-size: 45px;
    margin-bottom: 2px;
    letter-spacing: -2px;
    color: black;
     margin-bottom:-10px;
}

/* Mobile First */
.visible_desktop{display:none;}
.visible_phone{display:block;}

/* Desktop */
@media(min-width:768px){
     .visible_desktop{display:block;}
     .visible_phone{display:none;}
}


/* advisor-recruiting*/

.fadesktopTbl
{  
    display: block;
    margin: 20px 10px;												
}
.famobTbl
{
    display: none;
}
.fadesktopTbl td, .famobTbl td
{
    text-align: center;
    padding: 15px;
}
.fa-tableTitle
{
    background-color: #012169;
    color: #fff;           
    padding: 5px;
}
.fa-tableHd
{
   background-color: #0052c2;                                                         
   color: #fff;                                             
}
.fa-tableHed
{
   background-color: #f9f7f4;
}                                
.fa-tableTxt
{
	background-color: #ece6dd;
}
.fa-brdRt
{
    border-right : 1px solid #d1c9c0;
}
.fa-award-txt
{
	width:70%;
}
.fa-overview-box
{
    width: 95%;
    padding: 27px 20px 97px 20px;
    margin-top: 40px;
}

.fa-overview-grey-box
{
    background-color: rgb(255,255,255);
    padding: 20px;
    border-left: 1px dashed black;

}
.fa-box-txt-right
{
    border-left: 1px dotted black;
    float: right; 
    padding: 12.0px 12.0px 12.0px 30px;
}
.fa-box-txt-left
{
    float: left;
    padding: 15px 12px 15px 12px; 
}

.fa-bottom-box-1{
                border-right: 1px dashed black;
                border-bottom: 1px dashed black;
                padding: 25px 145px 29px 40px;
}

.fa-bottom-box-2{
                border-bottom: 1px dashed black;
                padding: 25px 145px 29px 40px;
}

.fa-bottom-box-3{
                border-right: 1px dashed black;
                padding: 25.0px 120px 29.0px 40.0px;
}
.fa-bottom-box-4{
                padding: 25.0px 110px 29.0px 40.0px;
}

.fa-box-txt{
font-size: 2.5em; 
color: #0052c2;
}
a.fa-txt:link {
    text-decoration: none;
}
a.fa-txt:hover {
    text-decoration: underline;
}
a.fa-txt:link{color:#000;}  
a.fa-txt:visited{color:#000;}
a.fa-txt:hover{color:blue;}
a.fa-txt:active{color:blue;}
.fa-ov-span-3{position: absolute; padding: 14px 10px 10px 10px;}
.fa-ov-span-2{position: absolute; padding: 33px 10px 10px 10px;}
.fa-ov-span-1{position: absolute; padding: 10px;}

.au-overview-white-box{margin-bottom:25px;font-weight:normal;width: 474px;padding:34px 90px 28px 28px; min-height: 130px;background: url("../../../content/dam/ML/ml-career-bundle/ML_Bull_lt_grey.jpg") right bottom no-repeat #ece6dd;}
.au-overview-white-box h2{color: #0073cf; border-bottom: 1px soild #d1c9c0;border-bottom: 1px solid #d1c9c0; font-weight: bold; padding: 0 0 5px 0; line-height: 1;  margin-bottom: 7px;}
.au-overview-white-box h3{padding: 0 0 5px 0;  font-family: "connections regular",arial,sans-serif!important;  line-height:1.4;font-size:1.3em; color:#1775cb;}
.au-overview-white-box p {color: #012169!important;}

.au-overview-blue-box{margin-bottom:25px;font-weight:normal;width: 474px;padding: 34px 90px 28px 28px;min-height: 130px;background: url("../../../content/dam/ML/advisor/bull-blue.jpg") right bottom no-repeat #012169;}
.au-overview-blue-box h2{color: rgb(255,255,255);margin: 0 0 2.0% 0;display: block;border-bottom: 1px solid #fff;font-family:"connections regular",arial,sans-serif!important;/* line-height: 1; */}
.au-overview-blue-box h3{padding: 0 0 5px 0;  font-family: "connections regular",arial,sans-serif!important;  line-height:1.4;font-size:1.3em; color:#ffffff;}
.au-overview-blue-box p {color: #fff;}
.fa-overview-bottom-box-1 {padding: 20.0px; text-align: center; background-color: #fff; width: 102%;}
.fa-overview-bottom-box-2 {padding: 20px; text-align: center; background-color: #fff; width: 102%;}
.fa-overview-bottom-box-3 {padding: 20.0px; text-align: center; background-color: #fff; width: 102%;}
.fa-ep-bottom-box-1{padding: 20.0px  20.0px 39px 20.0px; text-align: center; background-color: #fff; width: 102%;} 
.fa-ep-bottom-box-2{padding: 20px; text-align: center; background-color: #fff; width: 102%;} 
.fa-ep-bottom-box-3{padding: 20.0px 20.0px 26px 20.0px; text-align: center; background-color: #fff; width: 102%;} 
.fa-travis-pull-qt{margin-top:-25px;}
.fa-3-box-1 {padding: 20px 20px 20px 146px; text-align: center; background-color: #fff; width: 100%;}
.fa-3-box-2 {padding: 20.0px 146.0px 25px 20.0px; text-align: center; background-color: #fff; width: 102%; }
.fa-quote-box{background-color: #ece6dd; padding: 10px 10px 10px 0px;}

.ai-box-1{
	width:40%;
	margin-left:60px;
	margin-bottom:0px;
}
.ai-box-3{
	width:40%;
	margin-left:60px;
	margin-bottom: 10px;
} 
.ai-box-2{
     width:40%;
     padding: 15px 12px 3px 12px;
}
.ai-box-4{
     width:40%;
     padding: 19px 12px 3px 12px;
}
.ai-box-img-1{margin-bottom:-5px;}
.ai-box-img-3{margin-bottom:-5px;}
.ai-box-img-4{margin-bottom:-5px;}


@media only screen and (max-width : 480px)
{
    .fadesktopTbl{display:none;}
    .famobTbl{display: block;width: 95%;margin: 10px 10px;}
    .fa-award-txt{width:100%;!important}
	.fa-award-img{padding: 5.0px 20.0px 20px 48px; !important}
	.fa-overview-grey-box{background-color: rgb(249,247,244);margin-bottom: 40px;border: unset;}
	.fa-overview-box{width: 100%;padding: 27.0px 20.0px 25px 20.0px;}
	.fa-box-txt-right{border: unset;padding: 20px 12.0px 12.0px 30.0px;text-align: center;float:none;}
	.fa-box-txt-left{border-bottom: 1px dotted black;padding: 25px 12.0px 15.0px 12.0px;text-align: center;float:none;}
.fa-bottom-box-1{
                border-right: unset;
                border-bottom: 1px dashed black;
                padding:25.0px 40px 29.0px 40.0px;
}

.fa-bottom-box-3{
                border-right: unset;
                border-bottom: 1px dashed black;
                padding:25.0px 41px 29.0px 40.0px;
}
.fa-bottom-box-2{
                padding: 25.0px 40px 29.0px 40.0px;
}
.fa-bottom-box-4{
                padding: 25.0px 58px 29.0px 40.0px;
}
.ai-box-1{
	width:80%;
	margin-left:30px;
	margin-bottom:10px;
}
.ai-box-3{
	width:80%;
	margin-left:30px;
	margin-bottom:0px;
} 
.ai-box-2{
    width:80%
}
.ai-box-4{
    width:80%
}
.fa-overview-bottom-box-1 {
    padding: 20.0px;
    text-align: center;
    background-color: #fff;
    width: 105%;
    margin-left: -5px;
}
.fa-overview-bottom-box-2 {
    padding: 20.0px;
    text-align: center;
    background-color: #fff;
    width: 105%;
    margin-left: -5px;
}
.fa-overview-bottom-box-3 {
    padding: 20.0px;
    text-align: center;
    background-color: #fff;
    width: 105%;
    margin-left: -5px;
}
.au-overview-white-box {width:97%;padding:34px 90px 28px 28px; min-height: 130px;background: url("../../../content/dam/ML/ml-career-bundle/ML_Bull_lt_grey.jpg") right bottom no-repeat #ece6dd;margin-bottom:25px;font-weight:normal;}
.au-overview-blue-box {width:97%;padding: 34px 90px 28px 28px;min-height: 130px;background: url("../../../content/dam/ML/advisor/bull-blue.jpg") right bottom no-repeat #012169;margin-bottom:25px;font-weight:normal;}
.fa-ep-bottom-box-1{padding: 20.0px  20.0px 39px 20.0px; text-align: center; background-color: #fff; width: 105%; margin-left: -5px;} 
.fa-ep-bottom-box-2{padding: 20px; text-align: center; background-color: #fff; width: 105%; margin-left:-5px;} 
.fa-ep-bottom-box-3{padding: 20.0px 20.0px 50px 20.0px; text-align: center; background-color: #fff; width: 105%; margin-left: -5px;}
.fa-3-box-1 {padding: 20px 20px 20px 40px; text-align: center; background-color: #fff; width: 100%;}
.fa-3-box-2 {padding: 20.0px 40px 25px 40px;text-align: center; background-color: #fff; width: 102%;}
.fa-travis-pull-qt{margin-top:-15px;} 
}


@media only screen and (max-width: 768px) and (min-width: 737px)  {
                .ai-box-2{
                     padding: 0px 12px 3px 12px;
                }
                .ai-box-4{
                     padding: 19px 12px 15px 12px;
                }
}
@media only screen and (max-width: 850px) and (min-width: 768px)  {
                .ai-box-2{
                    margin-right:20px;
            		padding: 0px 12px 3px 12px;
                }
                .ai-box-4{
        		    margin-right:20px;
                	padding: 19px 12px 18px 12px;
                }
				.fa-box-txt{
					font-size: 1.5em; 
					color: #0052c2;
				}
                .fa-overview-box {
                width: 95%;
                padding: 27px 20px 111px 20px;
    			}
                .fa-box-txt-left {
                float: left;
                padding: 15px 12px 15px 12px;
                width: 40%;
				}
                .fa-box-txt-right {
                border-left: 1px dotted black;
                float: right;
                padding: 12.0px 12.0px  12.0px  23px;
                width: 52%;
				}
				.fa-overview-grey-box {
				 background-color: rgb(255,255,255);
				 padding: 55px 20px 57px 20px;
            	    border-left: 1px dashed black;
				}
				.fa-award-txt {
    			width: 63%;
				}

.au-overview-white-box {width:97%;padding:34px 90px 28px 28px; min-height: 130px;background: url("../../../content/dam/ML/ml-career-bundle/ML_Bull_lt_grey.jpg") right bottom no-repeat #ece6dd;margin-bottom:25px;font-weight:normal;}
.au-overview-blue-box {width:97%;padding: 34px 90px 28px 28px;min-height: 130px;background: url("../../../content/dam/ML/advisor/bull-blue.jpg") right bottom no-repeat #012169;margin-bottom:25px;font-weight:normal;}
.fa-overview-bottom-box-1 {padding:6px 20px 6px 20px; text-align: center; background-color: #fff; width: 102%;}
.fa-ep-bottom-box-3{padding: 20.0px 20.0px 50px 20.0px; text-align: center; background-color: #fff; width: 105%; margin-left: -5px;} 
.fa-3-box-2 {padding:20.0px 145px 49px 20px;text-align:center;background-color:#fff;width:124%;}
.fa-bottom-box-4{padding:25.0px 110px 54px 40.0px;}
.fa-3-box-1{padding:20px 20px 44px 56px;text-align:center; background-color:#fff; width:100%;}
.fa-quote-box{background-color: #ece6dd; padding:11px 10.0px 10.0px 5px;}
.fa-overview-grey-box {
    background-color: rgb(255,255,255);
    padding: 67px 20px 69px 20px;
    border-left: 1px dashed black;
} 
}

@media only screen and (max-width: 767px) and (min-width: 667px)  {
				.fa-box-txt{
					font-size: 1.5em; 
					color: #0052c2;
				}
                .fa-overview-box {
                width: 95%;
                padding: 27px 20px 123px 20px;
    			}
                .fa-box-txt-left {
                float: left;
                padding: 15px 12px 15px 12px;
                width: 40%;
				}
                .fa-box-txt-right {
                border-left: 1px dotted black;
                float: right;
                padding: 12.0px 12.0px  12.0px  23px;
                width: 55%;
				}
				.fa-overview-grey-box {
				 background-color: rgb(255,255,255);
				 padding: 55px 20px 57px 20px;
            	    border-left: 1px dashed black;
				}
				.fa-award-txt {
    			width: 63%;
				}

			.fa-quote-box{background-color: #ece6dd; padding: 10.0px 10.0px 40px 15px;}
            .fa-overview-grey-box {
                background-color: rgb(255,255,255);
                padding: 67px 20px 69px 20px;
                border-left: 1px dashed black;
            }
}

@media only screen and (max-width: 767px) and (min-width: 731px)  {
    			.ai-box-2{
                    margin-right:20px;
            		padding: 0px 12px 3px 12px;
                }
                .ai-box-4{
        		    margin-right:20px;
                	padding: 19px 12px 3px 12px;
                }

}
@media only screen and (width: 736px)  {
    			.ai-box-2{
                    margin-right:20px;
            		padding: 0px 12px 3px 12px;
                }
              .ai-box-4{
        		    margin-right:20px;
                	padding: 19px 12px 0px 12px;
                }

}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
   .masthead-title .masthead-title-markets h3, .masthead-title .masthead-title-markets h2 { font-family: connections!important; } } 

@media (max-width: 768px) {
     .preferred-masthead-text{width: auto;margin: -300px 30px 0;font-size: 1.5rem;}
      }

@media only screen and (max-width: 767px) {
       .reg_form__btn{
		text-align: center;
	    margin: 1.3rem 0rem;
		width: 100%;
    }

        .reg_btn--section{
		background-color: #F5F5F5;
		padding: .5rem;
	    display: block;
   		width: 100%;
	    justify-content: space-around;
	    box-sizing: border-box;
    }    
}

@media screen and (min-width: 768px) {
.reg_form__btn{
		text-align: center;
	    margin: 1.3rem 0rem;
		width: 33%;
    }

.reg_btn--section{
		background-color: #F5F5F5;
		padding: .5rem;
	    display: inline-flex;
   		width: 100%;
	    justify-content: space-around;
	    box-sizing: border-box;
        padding: 0rem 6rem;
}
}	
.reg_form__title{
		background-color: #F5F5F5;
		color: #000;
		margin: 0;
		padding: 1.5rem 0rem .5rem 0rem;
		font-size: 22px;
	    text-align: center;
	    box-sizing: border-box;
}

.reg_form__title--subtitle{
		background-color: #F5F5F5;
		color: #000;
		margin: 0;
		padding: .5rem;
		font-size: 16px;
	    text-align: center;
	    box-sizing: border-box;
}

.reg_btn--section a{
		margin-bottom: .5rem;
		box-sizing:border-box;
		padding: 5px 10px;
        text-decoration: none;
}

.reg_form__btn--color{
		background-color: #f5f5f5;
        color: #E31837;
        border: 1px solid #E31837;
		padding: 2% 4%;
}
@media only screen and (max-width: 1024px) and (min-width:770px){
    .reg_btn--section{
		background-color: #F5F5F5;
		padding: .5rem;
	    display: inline-flex;
   		width: 100%;
	    justify-content: space-around;
	    box-sizing: border-box;
    }    
}

.wealthfooter{display: inline-block};
@charset "utf-8";@media print{*{-webkit-print-color-adjust:exact}body{padding-top:0!important}}@media only screen and (max-width:767px){.hide--m-down{display:none!important}}@media only screen and (min-width:768px){.hide--m-up,.hide-for-desktop{display:none!important}.hide-for-mobile{display:block!important}}*,:after,:before{-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box}blockquote,caption,dd,dl,fieldset,form,h1,h2,h3,h4,h5,h6,hr,legend,ol,p,pre,table,td,th,ul{margin:0;padding:0}abbr[title],dfn[title]{cursor:help}ins{border-bottom:1px solid;text-decoration:none}img{font-style:italic}button,input,label,option,select,textarea{cursor:pointer}.text-input:active,.text-input:focus,textarea:active,textarea:focus{cursor:text;outline:none}.cf:after{clear:both;content:"";display:table}html{font:1em/1.5 sans-serif;min-height:100%;overflow-y:scroll}.lead,.lede{font-size:18px;font-size:1.125rem;line-height:1.3333333333}li>ol,li>ul{margin-bottom:0}.numbered-list{list-style-type:decimal}@font-face{font-display:swap;font-family:connections;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_regular-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_regular-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_regular-web.ttf") format("truetype")}@font-face{font-display:swap;font-family:connections regular;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_regular-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_regular-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_regular-web.ttf") format("truetype")}@font-face{font-display:swap;font-family:connections italic;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_italic-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_italic-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_italic-web.ttf") format("truetype")}@font-face{font-display:swap;font-family:connections bold;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_bold-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_bold-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_bold-web.ttf") format("truetype")}@font-face{font-display:swap;font-family:connections bold italic;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_bolditalic-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_bolditalic-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_bolditalic-web.ttf") format("truetype")}@font-face{font-display:swap;font-family:connections light;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_light-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_light-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_light-web.ttf") format("truetype")}@font-face{font-display:swap;font-family:connections light italic;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_lightitalic-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_lightitalic-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_lightitalic-web.ttf") format("truetype")}@font-face{font-display:swap;font-family:connections medium;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_medium-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_medium-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_medium-web.ttf") format("truetype")}@font-face{font-display:swap;font-family:connections medium italic;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_mediumitalic-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_mediumitalic-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connections_mediumitalic-web.ttf") format("truetype")}@font-face{font-display:swap;font-family:connections condensed;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_regular-web.woff2") format("woff2"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_regular-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_regular-web.ttf") format("truetype")}@font-face{font-family:connections condensed bold;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_bold-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_bold-web.ttf") format("truetype")}@font-face{font-family:connections condensed bold italic;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_bolditalic-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_bolditalic-web.ttf") format("truetype")}@font-face{font-family:connections condensed light;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_light-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_light-web.ttf") format("truetype")}@font-face{font-family:connections condensed light italic;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_lightitalic-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionscond_lightitalic-web.ttf") format("truetype")}@font-face{font-family:"connections serif";src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_regular-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_regular-web.ttf") format("truetype")}@font-face{font-family:"connections serif reg";src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_regular-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_regular-web.ttf") format("truetype")}@font-face{font-family:"connections serif italic";src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_italic-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_italic-web.ttf") format("truetype")}@font-face{font-family:"connections serif bold";src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_bold-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_bold-web.ttf") format("truetype")}@font-face{font-family:"connections serif bold italic";src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_bolditalic-web.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/connectionsserif_bolditalic-web.ttf") format("truetype")}@font-face{font-family:icons;font-style:normal;font-weight:400;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/icons-1008.eot");src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/icons-1008.eot?#iefix") format("embedded-opentype"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/icons-1008.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/icons-1008.ttf") format("truetype"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/icons-1008.svg#icon") format("svg")}@font-face{font-family:VideoJS;font-style:normal;font-weight:400;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/vjs.eot");src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/vjs.eot?#iefix") format("embedded-opentype"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/vjs.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/vjs.ttf") format("truetype"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/vjs.svg#icomoon") format("svg")}[class*=" icon-"]:after,[class*=" icon-"]:before,[class^=icon-]:after,[class^=icon-]:before{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:icons,connections regular;font-style:normal;font-variant:normal;font-weight:400;line-height:1;text-transform:none}[class*=" icon--"]:after,[class*=" icon--"]:before,[class^=icon--]:after,[class^=icon--]:before{font-family:inherit;font-size:inherit;font-style:inherit;font-variant:inherit;font-weight:inherit;line-height:inherit;text-transform:inherit}.icon-video.icon-after:after,.icon-video.icon-before:before{content:""}.icon-paper.icon-after:after,.icon-paper.icon-before:before{content:""}.icon-search2.icon-after:after,.icon-search2.icon-before:before{content:""}.icon-menu.icon-after:after,.icon-menu.icon-before:before{content:""}.icon-close.icon-after:after,.icon-close.icon-before:before{content:""}.icon-search.icon-after:after,.icon-search.icon-before:before{content:""}.icon-twitter.icon-after:after,.icon-twitter.icon-before:before{content:""}.icon-play.icon-after:after,.icon-play.icon-before:before{content:""}.icon-linked-in.icon-after:after,.icon-linked-in.icon-before:before{content:""}.icon-speach-bubble.icon-after:after,.icon-speach-bubble.icon-before:before,.icon-speech-bubble.icon-after:after,.icon-speech-bubble.icon-before:before{content:""}.icon-speech-bubbles.icon-after:after,.icon-speech-bubbles.icon-before:before{content:""}.icon-youtube.icon-before:before{content:""}.icon-facebook.icon-after:after,.icon-facebook.icon-before:before{content:""}.icon-facebook-square.icon-after:after,.icon-facebook-square.icon-before:before{content:""}.icon-email.icon-after:after,.icon-email.icon-before:before{content:""}.icon-email-alt.icon-after:after,.icon-email-alt.icon-before:before{content:""}.icon-phone.icon-after:after,.icon-phone.icon-before:before{content:"";position:relative;top:4px}.dual-color-icon{top:5px}.dual-color-icon,.single-color-icon{display:inline-block;font-size:1em;height:2.5em;position:relative;width:2.5em}.single-color-icon{top:0}.icon-work-with-us.icon-after:after,.icon-work-with-us.icon-before:before{content:""}.icon-work-with-us{left:0;top:0}.icon-work-with-us.icon-dual-color.icon-before:before{color:#a39382;content:""}.icon-work-with-us.icon-dual-color.icon-after:after{color:#0053c2;content:"";position:relative;right:3px;top:3px}.icon-all.icon-after:after,.icon-all.icon-before:before{content:""}.icon-market,.icon-markets,.icon-the-market,.icon-the-markets{left:0;top:0}.icon-market.icon-before:before,.icon-markets.icon-before:before,.icon-the-market.icon-before:before,.icon-the-markets.icon-before:before{color:#a39382;content:""}.icon-market.icon-after:after,.icon-markets.icon-after:after,.icon-the-market.icon-after:after,.icon-the-markets.icon-after:after{color:#0053c2;content:""}.icon-earth.icon-before:before,.icon-the-earth.icon-before:before{color:#a39382;content:""}.icon-earth.icon-after:after,.icon-the-earth.icon-after:after{color:#0053c2;content:""}.icon-people.icon-after:after,.icon-people.icon-before:before{content:""}.icon-people{left:0;top:0}.icon-people.icon-before:before{color:#a39382;content:""}.icon-people.icon-after:after{color:#0053c2;content:""}.icon-our-solutions.icon-after:after,.icon-our-solutions.icon-before:before{content:""}.icon-our-solutions{left:0;top:0}.icon-our-solutions.icon-before:before{color:#a39382;content:""}.icon-our-solutions.icon-after:after{color:#0053c2;content:""}.icon-bull.icon-before:before{color:#0053c2;content:""}.icon-bull.icon-after:after{content:""}.icon-ipa-tool.icon-before:before{content:""}.icon-ipa-tool.icon-after:after{content:""}.icon-ipa-tool{left:0;top:0}.icon-ipa-tool.icon-before:before{color:#a39382;content:""}.icon-ipa-tool.icon-after:after{color:#0053c2;content:""}.icon-search-by-location.icon-before:before{content:""}.icon-search-by-location.icon-after:after{content:""}.icon-search-by-location{left:0;top:0}.icon-search-by-location.icon-before:before{color:#a39382;content:""}.icon-search-by-location.icon-after:after{color:#0053c2;content:""}.icon-search-by-name{left:0;top:0}.icon-search-by-name.icon-before:before{color:#a39382;content:""}.icon-search-by-name.icon-after:after{color:#0053c2;content:""}.icon-search-by-contact{left:0;top:0}.icon-search-by-contact.icon-before:before{color:#a39382;content:""}.icon-search-by-contact.icon-after:after{color:#0053c2;content:""}.icon-innovation.icon-after:after,.icon-innovation.icon-before:before{content:""}.icon-innovation{left:0;top:0}.icon-innovation.icon-before:before{color:#a39382;content:""}.icon-innovation.icon-after:after{color:#0053c2;content:""}.icon-government,.icon-policy{left:0;top:0}.icon-government.icon-before:before,.icon-policy.icon-before:before{color:#0053c2;content:""}.icon-government.icon-after:after,.icon-policy.icon-after:after{color:#a39382;content:""}.icon-ipa-mindset{left:0;top:0}.icon-ipa-mindset.icon-before:before{color:#0053c2;content:"";position:absolute}.icon-ipa-mindset.icon-after:after{color:#a39382;content:"";position:absolute}.icon-ipa-purpose{left:0;top:0}.icon-ipa-purpose.icon-before:before{color:#0053c2;content:"";position:absolute}.icon-ipa-purpose.icon-after:after{color:#a39382;content:"";position:absolute}.icon-ipa-approach{left:0;top:0}.icon-ipa-approach.icon-before:before{color:#0053c2;content:"";position:absolute}.icon-ipa-approach.icon-after:after{color:#a39382;content:"";position:absolute}.icon-calendar{left:0;top:0}.icon-calendar.icon-before:before{color:#a39382;content:"";position:absolute}.icon-calendar.icon-after:after{color:#0053c2;content:"";position:absolute}.icon-laptop.icon-after:after,.icon-laptop.icon-before:before{content:""}.icon-filter-my-priorities.icon-after:after,.icon-filter-my-priorities.icon-before:before{content:""}.icon-filter-work.icon-after:after,.icon-filter-work.icon-before:before{content:""}.icon-filter-work.icon-color,.icon-filter-work.icon-color--hover:hover{color:#ea7600}.icon-filter-work.icon-background-color{background-color:#ea7600}.icon-filter-world.icon-after:after,.icon-filter-world.icon-before:before{content:""}.icon-filter-world.icon-color,.icon-filter-world.icon-color--hover:hover{color:#c9b23e!important}.icon-filter-world.icon-background-color{background-color:#c9b23e!important}.icon-filter-usa.icon-after:after,.icon-filter-usa.icon-before:before{content:""}.icon-filter-usa.icon-color,.icon-filter-usa.icon-color--hover:hover{color:#c9b23e!important}.icon-filter-usa.icon-background-color{background-color:#c9b23e!important}.icon-filter-markets.icon-after:after,.icon-filter-markets.icon-before:before{content:""}.icon-filter-markets.icon-color,.icon-filter-markets.icon-color--hover:hover{color:#c9b23e!important}.icon-filter-markets.icon-background-color{background-color:#c9b23e!important}.icon-filter-leisure.icon-after:after,.icon-filter-leisure.icon-before:before{content:""}.icon-filter-leisure.icon-color,.icon-filter-leisure.icon-color--hover:hover{color:#00ad50}.icon-filter-leisure.icon-background-color{background-color:#00ad50}.icon-filter-home.icon-after:after,.icon-filter-home.icon-before:before{content:""}.icon-filter-home.icon-color,.icon-filter-home.icon-color--hover:hover{color:#c41230}.icon-filter-home.icon-background-color{background-color:#c41230}.icon-filter-health.icon-after:after,.icon-filter-health.icon-before:before{content:""}.icon-filter-health.icon-color,.icon-filter-health.icon-color--hover:hover{color:#5c068c}.icon-filter-health.icon-background-color{background-color:#5c068c}.icon-filter-giving.icon-after:after,.icon-filter-giving.icon-before:before{content:""}.icon-filter-giving.icon-color,.icon-filter-giving.icon-color--hover:hover{color:#00a9e0}.icon-filter-giving.icon-background-color{background-color:#00a9e0}.icon-filter-finance.icon-after:after,.icon-filter-finance.icon-before:before,.icon-filter-finances.icon-after:after,.icon-filter-finances.icon-before:before{content:""}.icon-filter-finance.icon-color,.icon-filter-finance.icon-color--hover:hover,.icon-filter-finances.icon-color,.icon-filter-finances.icon-color--hover:hover{color:#0053c2}.icon-filter-finance.icon-background-color,.icon-filter-finances.icon-background-color{background-color:#0053c2}.icon-filter-family.icon-after:after,.icon-filter-family.icon-before:before{content:""}.icon-filter-family.icon-color{background-color:transparent;color:#fc0}.icon-filter-family.icon-color--hover:hover{color:#fc0}.icon-filter-family.icon-background-color{background-color:#fc0}.icon-filter-all.icon-after:after,.icon-filter-all.icon-before:before{content:""}.icon-filter-innovation.icon-before:before{content:""}.icon-filter-innovation.icon-after:after{content:""}.icon-filter-government.icon-after:after,.icon-filter-government.icon-before:before{content:""}.icon-filter-earth.icon-after:after,.icon-filter-earth.icon-before:before{content:""}.icon-filter-people.icon-after:after,.icon-filter-people.icon-before:before{content:""}.font-italic,.font-regular{font-family:connections regular,Arial,Helvetica,sans-serif;font-weight:400}.font-italic{font-family:connections italic,Arial,Helvetica,sans-serif}.font-bold{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections bold,Georgia,serif;font-weight:400}.font-bold-italic{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections bold italic,Arial,Helvetica,sans-serif;font-weight:400}.font-light{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-weight:400}.font-light-italic{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light italic,Arial,Helvetica,sans-serif;font-weight:400}.font-medium{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections medium,Georgia,serif;font-weight:400}.font-medium-italic{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections medium italic,Georgia,serif;font-weight:400;font-weight:500}.copy-size-xl{font-size:1.25rem}@media only screen and (min-width:769px){.copy-size-xl{font-size:1.5rem}}.copy-size-l{font-size:1.25rem}@media only screen and (min-width:769px){.copy-size-m{font-size:1.125rem}}.copy-size-s{font-size:1rem}.copy-size-xs{font-size:.875rem}.heading-size-l{font-size:2.625rem}.heading-size-s{font-size:1.5rem}@media only screen and (min-width:769px){.heading-size-s{font-size:2rem}}.color-red{color:#e31837}.color-blue{color:#012169}.color-royal-blue{color:#0053c2}.color-black{color:#000}.color-white{color:#fff}ol,ol li{list-style-position:inside}#tooltip{display:none;margin:25px auto;max-width:350px;position:absolute;width:85%;z-index:999999}.tooltip-content{background:#f5f4f2;padding:15px 20px 10px}.tooltip-content:after{border:20px solid hsla(40,13%,95%,0);border-bottom-color:#f5f4f2;bottom:100%;content:" ";height:0;left:50%;margin-left:-20px;pointer-events:none;position:absolute;width:0}.tooltip-content .close{color:#454545;font-size:9pt;position:absolute;right:5px;top:5px}.tooltip-content h2,.tooltip-content p{margin:0;padding:0}.tooltip-content h2{border-bottom:1px solid #212c68;color:#212c68;font-size:14px;font-weight:400;margin-bottom:10px;padding-bottom:2px}.tooltip-content p{font-size:9pt}.tooltip-content a{text-decoration:none}.tooltip-content .cta--btn{background:#299ce5;color:#fff;display:inline-block;font-size:9pt;margin-top:18px;padding:0 5%}.tooltip-content .cta--btn .arrow{border-color:transparent transparent transparent #fff;border-style:solid;border-width:4px 0 4px 8px;float:right;height:0;margin:2px 0 0 10px;width:0}@media only screen and (min-width:640px){#tooltip{width:90%}}@media only screen and (min-width:885px){.tooltip-content:after{left:12%}}body.js-no-scroll,html.js-no-scroll{overflow:hidden}html{overflow-x:hidden;overflow-y:visible}html.desktop-only body,html.lt-ie9 body{min-width:750pt;overflow:auto}html.no-touch .touch-only{cursor:text!important;pointer-events:none}html .bottom-banner{display:none}html .visibilityHidden{visibility:hidden}html.isDesign .visibilityHidden,html.isEdit .visibilityHidden{visibility:visible}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga";background-color:#fff;background-image:none;color:#454545;font-family:connections regular,Arial,Helvetica,sans-serif;height:auto;min-width:150px;overflow-x:hidden;overflow-y:visible;padding:0;position:relative;text-rendering:optimizeLegibility}body.watermark{background-attachment:fixed;background-image:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/images/article-tiles/default/bg-merrill-lynch-trans.svg");background-position:0 100%;background-repeat:no-repeat;background-size:auto}body.full-white{background:#fff}body.full-white2{background:#f5f5f5}body.ipa-page{background:#f9f9f9}@media(min-width:768px){body.ipa-page{background:#f5f5f5}}body .seo-heading{position:absolute!important;top:-750pt!important}body img{max-width:100%}body .cta--btn,body .font--normal,body .font--regular{font-family:connections regular,Arial,Helvetica,sans-serif;font-weight:400}.logo body .bac,.teasers body h3,body .font--light,body .logo .bac,body .teasers h3{font-family:connections light,arial,sans-serif;font-weight:400}body .font--light-italic{font-family:connections light italic,arial,sans-serif;font-weight:400}.legacy .ml-content .bodyContent .glossary-terms body dt,.legacy .ml-content .bodyContent body p.highlight-box,.legacy .ml-content body .sidebar>ul>li>a,body .font--bold,body .legacy .ml-content .bodyContent .glossary-terms dt,body .legacy .ml-content .bodyContent p.highlight-box,body .legacy .ml-content .sidebar>ul>li>a{font-family:connections bold,arial,sans-serif;font-weight:400}.logo body .ml,body .font--condensed-bold,body .font--condensed-light,body .logo .ml{font-family:connections condensed light,arial,sans-serif;font-weight:400}body h1,body h2{font-family:connections light,arial,sans-serif;font-weight:400}body .icon-play{color:hsla(0,0%,100%,.8);font-size:1.4em;left:3px;line-height:45px;position:relative}body .play-btn{background-color:rgba(0,0,0,.3);border:5px solid hsla(0,0%,100%,.8);border-radius:50px;cursor:pointer;height:50px;left:50%;margin-left:-25px;margin-top:-25px;position:absolute;text-align:center;top:50%;width:50px}body .call{color:#454545;font-family:connections regular,Arial,Helvetica,sans-serif}@media(min-width:768px){body.watermark{background-size:cover}body .call{color:inherit;color:#454545;cursor:default;pointer-events:none;text-decoration:none}}.wireframe{background-color:#eee;display:block;margin:0;position:relative;text-align:center;width:100%}.wireframe--add-margin{margin:8px 0}.wireframe--xsm{height:40px;line-height:40px;padding:0 20px;width:200px}.wireframe--sm{height:150px;line-height:150px}.wireframe--med{height:250px;line-height:250px}.wireframe--lg{height:350px;line-height:350px}.wireframe--xlg{height:500px;line-height:500px}.skip-to-content{left:-9999px;padding:4px 0 0 4px;position:absolute;top:0;z-index:1001}.skip-to-content:focus,.skip-to-content:hover{left:0}.skip-to-content:focus~.wrapper,a.skip-to-content:hover~.wrapper{top:30px}.cta--btn:focus,.cta:focus,.footer-wrapper a:focus,.nav--link.deep-nav:focus,a:focus,input:focus{outline:1px dotted #012169}.blue-bar .cta--btn:focus,.blue-bar a:focus,.blue-box .cta--btn:focus,.blue-box a:focus,.lifeprioritiesselector a:focus{outline:1px dotted #fff}.cta--btn{background:#e31837;color:#fff;display:inline-block;font-size:1pc;line-height:1;padding:10px 26px;text-align:center;text-decoration:none;width:auto}@media(min-width:1024px){.cta--btn{font-size:18px}}.cta--btn .arrow{border-color:transparent transparent transparent #fff;border-style:solid;border-width:4px 0 4px 4px;content:"";display:inline;display:none;font-size:0;position:relative;right:-10px;top:-4px}.cta--btn:hover{background:#b5132c!important}.isDesign .ctabutton,.isEdit .ctabutton{padding:30px 0}.error-404 .cta--btn,.error-500 .cta--btn{min-width:225px}ul li{list-style:disc outside;margin-left:20px}ol li{list-style:decimal}.wrapper{height:auto;margin:0 auto;overflow:hidden;position:relative}@media (-ms-high-contrast:none){.wrapper{margin-bottom:-24px}}.wrapper.overrideLegacy .page{margin:0;max-width:100%;padding:0}.wrapper .page{height:auto;margin:0 auto;padding-bottom:30px;position:relative;width:100%}.full-white .wrapper .page{padding:0}.wrapper .page.linkedin{padding-bottom:0}.wrapper .annotation{cursor:pointer}.wrapper .content--leadership,.wrapper .content--life-priorities,.wrapper .content--retirement,.wrapper .tooltip-content{display:none}.wrapper .go-to-top{bottom:110px;cursor:pointer;display:none;height:50px;position:fixed;right:30px;width:40px;z-index:1000000}.wrapper .go-to-top .go-to-top-background{background-color:#e31837;height:100%;opacity:.8;position:absolute;width:100%}.wrapper .go-to-top .go-to-top-arrow{border-bottom:5px solid #fff;border-left:5px solid transparent;border-right:5px solid transparent;height:0;margin:9px 15px;opacity:1;position:absolute;top:0;width:0}.wrapper .go-to-top .go-to-top-text{color:#fff;font-family:connections regular,Arial,Helvetica,sans-serif;font-size:1rem;height:auto;line-height:40px;margin:0 auto;opacity:1;position:absolute;text-align:center;top:10px;width:100%}@media(min-width:640px){.wrapper{background-image:none}.wrapper .page{max-width:750pt}.full-page .wrapper .page,.full-white .wrapper .page{max-width:100%}.wrapper .page.wideish{max-width:64pc;overflow:visible}.wrapper .page.wide{max-width:100pc;overflow:visible}.wrapper .page.verywide{margin:0 auto;max-width:1900px;overflow:visible}.wrapper .cta--btn{display:inline-block;font-size:18px}.wrapper .icon-play{font-size:2.5em;left:4px;line-height:70px;position:relative}.wrapper .play-btn{border-radius:70px;height:70px;left:50%;margin-left:-35px;margin-top:-35px;position:absolute;text-align:center;top:50%;width:70px}}@media(min-width:885px){.wrapper .page{margin:0 auto;overflow:hidden}.full-white .wrapper .page{margin:0}.wrapper .medium-show{display:block}}.lt-ie9 .watermark{background-attachment:fixed;background-color:#d1c9c0;background-image:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/images/article-tiles/default/bg-merrill-lynch-trans.png");background-position:left 0;background-repeat:no-repeat}.dark-blue-color{color:#012169!important}.white-color{color:#fff!important}.red-color{color:#e31837!important}.royal-blue-color{color:#0053c2!important}.black-color{color:#000!important}.cool-grey-color{color:#646464!important}.cool-gray-70-color{color:#919191!important}.cool-gray-20-color{color:#d5d5d5!important}.cool-gray-10-color{color:#ededed!important}.cool-gray-5-color{color:#f5f5f5!important}.dark-blue-bg{background-color:#012169!important}.white-bg{background-color:#fff!important}.red-bg{background-color:#e31837!important}.cool-gray-20-bg{background-color:#d5d5d5!important}.cool-gray-10-bg{background-color:#ededed!important}.cool-gray-5-bg{background-color:#f5f5f5!important}@media(min-width:769px){.dark-blue-bg--desktop{background-color:#012169!important}.white-bg--desktop{background-color:#fff!important}.red-bg--desktop{background-color:#e31837!important}.cool-gray-20-bg--desktop{background-color:#d5d5d5!important}.cool-gray-10-bg--desktop{background-color:#ededed!important}.cool-gray-5-bg--desktop{background-color:#f5f5f5!important}}.headline-display--xlg{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:4pc;font-weight:400;font-weight:100;line-height:1.125}@media(min-width:1024px){.headline-display--xlg{font-size:88px}}.headline-display--lg{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:3.5rem;font-weight:400;font-weight:100;line-height:1.125}@media(min-width:1024px){.headline-display--lg{font-size:72px}}.headline-display--md{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:3rem;font-weight:400;font-weight:100;line-height:1.25}@media(min-width:1024px){.headline-display--md{font-size:3.5rem;line-height:1.125}}.headline-display--sm{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:2.5rem;font-weight:400;font-weight:100;line-height:1.25}@media(min-width:1024px){.headline-display--sm{font-size:3rem}}.headline--lg{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:2rem;font-weight:400;font-weight:100;line-height:1.25}@media(min-width:1024px){.headline--lg{font-size:2.5rem}}.headline--md{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.5rem;font-weight:400;font-weight:100;line-height:1.25}@media(min-width:1024px){.headline--md{font-size:2rem}}.headline--sm{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.25rem;font-weight:400;font-weight:100;line-height:1.25}@media(min-width:1024px){.headline--sm{font-size:1.5rem}}.headline--xsm{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections medium,Georgia,serif;font-size:1rem;font-weight:400;font-weight:500;line-height:1.5}@media(min-width:1024px){.headline--xsm{font-size:1.125rem}}.copy--lead-in{font-family:connections regular,Arial,Helvetica,sans-serif;font-size:1rem;font-variant:small-caps;font-weight:400;letter-spacing:.075em;line-height:1.5}@media(min-width:1024px){.copy--lead-in{font-size:1.125rem}}.copy--body{font-family:connections regular,Arial,Helvetica,sans-serif;font-size:1rem;font-weight:400;line-height:1.5}@media(min-width:1024px){.copy--body{font-size:1.125rem}}.copy--fine{font-size:.875rem}.copy--data-vis,.copy--fine{font-family:connections regular,Arial,Helvetica,sans-serif;font-weight:400;line-height:1.5}.copy--data-vis{font-size:1rem}.copy--data-vis--sm{font-size:.875rem}.copy--data-vis--sm,.copy--figure-caption{font-family:connections regular,Arial,Helvetica,sans-serif;font-weight:400;line-height:1.5}.copy--figure-caption{font-family:connections italic,Arial,Helvetica,sans-serif;font-size:1rem;font-style:italic}@media(min-width:1024px){.copy--figure-caption{font-size:1.125rem}}.copy--pull-quotes{font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light italic,Arial,Helvetica,sans-serif;font-size:1.5rem;font-style:italic;font-weight:400;font-weight:100;line-height:1.25}@media(min-width:1024px){.copy--pull-quotes{font-size:2rem}}.ui-link{color:#0053c2;font-family:connections regular,Arial,Helvetica,sans-serif;font-size:1rem;font-weight:400;line-height:1.5}@media(min-width:1024px){.ui-link{font-size:1.125rem}}.ui-link:focus,.ui-link:hover{color:#012169}.inline-link--black,.inline-link--white{font-size:inherit;line-height:inherit;transition:all .2s cubic-bezier(.02,.01,.47,1) .05s}.inline-link--black{border-bottom:1px solid #0053c2;color:#000}.inline-link--black:focus,.inline-link--black:hover{background:#0053c2;color:#fff}.inline-link--white{border-bottom:1px solid #fff;color:#fff}.inline-link--white:focus,.inline-link--white:hover{border-bottom:transparent;color:#fff}.native-article .list li>a{color:#0053c2}.native-article .heading--1{color:#000;font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:2rem;font-weight:400;font-weight:100;line-height:1.25}@media(min-width:1024px){.native-article .heading--1{font-size:2.5rem}}.native-article .heading--2{color:#000;font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.5rem;font-weight:400;font-weight:100;line-height:1.25}@media(min-width:1024px){.native-article .heading--2{font-size:2rem}}.native-article .heading--3{color:#000;font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.25rem;font-weight:400;font-weight:100;line-height:1.25}@media(min-width:1024px){.native-article .heading--3{font-size:1.5rem}}.native-article .heading--4{color:#000;font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections medium,Georgia,serif;font-size:1rem;font-weight:400;font-weight:500;line-height:1.5}@media(min-width:1024px){.native-article .heading--4{font-size:1.125rem}}@font-face{font-family:icomoon;font-style:normal;font-weight:400;src:url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/icomoon.woff") format("woff"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/icomoon.ttf") format("truetype"),url("../../../etc.clientlibs/ml/clientlibs/clientlib-site/resources/fonts/icomoon.svg#icomoon") format("svg")}.unity-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:icomoon!important;font-style:normal;font-variant:normal;font-weight:400;line-height:1;text-transform:none}.unity-icon--bold{font-weight:700}.unity-icon-account-management:before{content:""}.unity-icon-action-advanced-search:before{content:""}.unity-icon-action-alert:before{content:""}.unity-icon-action-back:before{content:""}.unity-icon-action-bookmark:before{content:""}.unity-icon-action-card-view:before{content:""}.unity-icon-action-carousel:before{content:""}.unity-icon-action-chart-view:before{content:""}.unity-icon-action-checkmark:before{content:""}.unity-icon-action-clearing:before{content:""}.unity-icon-action-close:before{content:""}.unity-icon-action-collapse:before{content:""}.unity-icon-action-copy:before{content:""}.unity-icon-action-customization:before{content:""}.unity-icon-action-download:before{content:""}.unity-icon-action-dropdown:before{content:""}.unity-icon-action-expand:before{content:""}.unity-icon-action-filter:before{content:""}.unity-icon-action-flash-off:before{content:""}.unity-icon-action-flash-on:before{content:""}.unity-icon-action-help:before{content:""}.unity-icon-action-hide:before{content:""}.unity-icon-action-homepage:before{content:""}.unity-icon-action-info:before{content:""}.unity-icon-action-launch:before{content:""}.unity-icon-action-left:before{content:""}.unity-icon-action-like:before{content:""}.unity-icon-action-link:before{content:""}.unity-icon-action-list-view:before{content:""}.unity-icon-action-lock:before{content:""}.unity-icon-action-login:before{content:""}.unity-icon-action-logout:before{content:""}.unity-icon-action-menu:before{content:""}.unity-icon-action-plus:before{content:""}.unity-icon-action-minus:before{content:""}.unity-icon-action-rating-star:before{content:""}.unity-icon-action-refresh:before{content:""}.unity-icon-action-right:before{content:""}.unity-icon-action-save:before{content:""}.unity-icon-action-scroll:before{content:""}.unity-icon-action-search:before{content:""}.unity-icon-action-settings:before{content:""}.unity-icon-action-share:before{content:""}.unity-icon-action-stop:before{content:""}.unity-icon-action-success:before{content:""}.unity-icon-action-sympathy:before{content:""}.unity-icon-action-table-sort-ascending:before{content:""}.unity-icon-action-table-sort-descending:before{content:""}.unity-icon-action-trash:before{content:""}.unity-icon-action-uncategorized:before{content:""}.unity-icon-action-unlock:before{content:""}.unity-icon-action-upload:before{content:""}.unity-icon-action-views:before{content:""}.unity-icon-apple:before{content:""}.unity-icon-archive:before{content:""}.unity-icon-arrow-choice:before{content:""}.unity-icon-arrow-click:before{content:""}.unity-icon-arrow-consolidate:before{content:""}.unity-icon-arrow-decrease-risk:before{content:""}.unity-icon-arrow-down:before{content:""}.unity-icon-arrow-increase:before{content:""}.unity-icon-arrow-left:before{content:""}.unity-icon-arrow-send:before{content:""}.unity-icon-arrow-trade:before{content:""}.unity-icon-arrow-transfer:before{content:""}.unity-icon-arrow-up-down:before{content:""}.unity-icon-arrow-up:before{content:""}.unity-icon-arts-culture:before{content:""}.unity-icon-attachment:before{content:""}.unity-icon-auto:before{content:""}.unity-icon-awards:before{content:""}.unity-icon-awareness:before{content:""}.unity-icon-baby-carriage:before{content:""}.unity-icon-bag:before{content:""}.unity-icon-bed:before{content:""}.unity-icon-benefits:before{content:""}.unity-icon-briefcase:before{content:""}.unity-icon-buildings:before{content:""}.unity-icon-calculator:before{content:""}.unity-icon-calendar:before{content:""}.unity-icon-camera:before{content:""}.unity-icon-candle:before{content:""}.unity-icon-cashpro-assistant:before{content:""}.unity-icon-cashpro-connect:before{content:""}.unity-icon-cashpro-credit:before{content:""}.unity-icon-cashpro-foreign-exchange-rmb:before{content:""}.unity-icon-cashpro-foreign-exchange:before{content:""}.unity-icon-cashpro-invest:before{content:""}.unity-icon-cashpro-mobile:before{content:""}.unity-icon-cashpro-online:before{content:""}.unity-icon-cashpro-payments:before{content:""}.unity-icon-cashpro-receivables:before{content:""}.unity-icon-cashpro-research:before{content:""}.unity-icon-cashpro-trade:before{content:""}.unity-icon-celebrate:before{content:""}.unity-icon-climate-heat:before{content:""}.unity-icon-climate-hurricane:before{content:""}.unity-icon-climate-snow:before{content:""}.unity-icon-climate-storm:before{content:""}.unity-icon-climate-thunder:before{content:""}.unity-icon-climate-tropical-storm:before{content:""}.unity-icon-commercial-real-estate:before{content:""}.unity-icon-communication-announcement:before{content:""}.unity-icon-communication-book:before{content:""}.unity-icon-communication-call:before{content:""}.unity-icon-communication-communication-service:before{content:""}.unity-icon-communication-data-transmission:before{content:""}.unity-icon-communication-excel:before{content:""}.unity-icon-communication-inbox:before{content:""}.unity-icon-communication-mail:before{content:""}.unity-icon-communication-overnight-shipping:before{content:""}.unity-icon-communication-pdf:before{content:""}.unity-icon-communication-powerpoint:before{content:""}.unity-icon-communication-print:before{content:""}.unity-icon-communication-sign-and-edit:before{content:""}.unity-icon-communication-speech:before{content:""}.unity-icon-communication-text:before{content:""}.unity-icon-communication-thought:before{content:""}.unity-icon-communication-word-doc:before{content:""}.unity-icon-communication-zip-folder:before{content:""}.unity-icon-compare:before{content:""}.unity-icon-dashboard-micro:before{content:""}.unity-icon-dashboard:before{content:""}.unity-icon-dental:before{content:""}.unity-icon-digital-cloud-computing:before{content:""}.unity-icon-digital-disbursements:before{content:""}.unity-icon-digital-ebam:before{content:""}.unity-icon-digital-mobile-banking:before{content:""}.unity-icon-digital-mobile-invest:before{content:""}.unity-icon-digital-mobile:before{content:""}.unity-icon-digital-mortgage-experience:before{content:""}.unity-icon-digital-online-investing:before{content:""}.unity-icon-digital-online:before{content:""}.unity-icon-digital-video-teller:before{content:""}.unity-icon-digital-wifi:before{content:""}.unity-icon-disability:before{content:""}.unity-icon-document:before{content:""}.unity-icon-energy:before{content:""}.unity-icon-exercise:before{content:""}.unity-icon-family-security:before{content:""}.unity-icon-fast:before{content:""}.unity-icon-finance-accounts:before{content:""}.unity-icon-finance-ach-same-day:before{content:""}.unity-icon-finance-ach:before{content:""}.unity-icon-finance-arch-positive-pay:before{content:""}.unity-icon-finance-atm:before{content:""}.unity-icon-finance-ba360:before{content:""}.unity-icon-finance-bank:before{content:""}.unity-icon-finance-bankamerideals:before{content:""}.unity-icon-finance-bonds:before{content:""}.unity-icon-finance-business-expenses:before{content:""}.unity-icon-finance-card:before{content:""}.unity-icon-finance-cash-vault:before{content:""}.unity-icon-finance-cash:before{content:""}.unity-icon-finance-cashflow:before{content:""}.unity-icon-finance-check:before{content:""}.unity-icon-finance-deposit-micro:before{content:""}.unity-icon-finance-deposit:before{content:""}.unity-icon-finance-etfs:before{content:""}.unity-icon-finance-full-service-payroll:before{content:""}.unity-icon-finance-funds:before{content:""}.unity-icon-finance-gift-card:before{content:""}.unity-icon-finance-global-custody:before{content:""}.unity-icon-finance-goal:before{content:""}.unity-icon-finance-home-equity:before{content:""}.unity-icon-finance-interest:before{content:""}.unity-icon-finance-investing:before{content:""}.unity-icon-finance-keep-the-change:before{content:""}.unity-icon-finance-loans:before{content:""}.unity-icon-finance-merchant:before{content:""}.unity-icon-finance-offer:before{content:""}.unity-icon-finance-payment-micro:before{content:""}.unity-icon-finance-payment:before{content:""}.unity-icon-finance-portfolio-snapshot:before{content:""}.unity-icon-finance-remote-deposit:before{content:""}.unity-icon-finance-retirement:before{content:""}.unity-icon-finance-rewards:before{content:""}.unity-icon-finance-savings:before{content:""}.unity-icon-finance-spending:before{content:""}.unity-icon-finance-stock-certificate:before{content:""}.unity-icon-finance-taxes:before{content:""}.unity-icon-finance-withdraw-micro:before{content:""}.unity-icon-finance-withdraw:before{content:""}.unity-icon-finance-zelle-request:before{content:""}.unity-icon-finance-zelle-send:before{content:""}.unity-icon-finance-zelle-split:before{content:""}.unity-icon-finance-zelle:before{content:""}.unity-icon-fingerprint:before{content:""}.unity-icon-flag:before{content:""}.unity-icon-folder:before{content:""}.unity-icon-food:before{content:""}.unity-icon-gas:before{content:""}.unity-icon-geography-asia:before{content:""}.unity-icon-geography-brazil:before{content:""}.unity-icon-geography-eemea:before{content:""}.unity-icon-geography-europe:before{content:""}.unity-icon-geography-location:before{content:""}.unity-icon-geography-market-region-global:before{content:""}.unity-icon-geography-usa:before{content:""}.unity-icon-gift:before{content:""}.unity-icon-giving:before{content:""}.unity-icon-government:before{content:""}.unity-icon-grocery:before{content:""}.unity-icon-guidelines:before{content:""}.unity-icon-health-drug-store:before{content:""}.unity-icon-health-health:before{content:""}.unity-icon-health-medical:before{content:""}.unity-icon-home:before{content:""}.unity-icon-hotel:before{content:""}.unity-icon-image:before{content:""}.unity-icon-innovation:before{content:""}.unity-icon-insurance-protection-security:before{content:""}.unity-icon-key:before{content:""}.unity-icon-lawyer:before{content:""}.unity-icon-leisure:before{content:""}.unity-icon-life-plan-and-navigation:before{content:""}.unity-icon-lockbox:before{content:""}.unity-icon-materials:before{content:""}.unity-icon-media-fast-forward:before{content:""}.unity-icon-media-pause:before{content:""}.unity-icon-media-play-video:before{content:""}.unity-icon-media-play:before{content:""}.unity-icon-media-podcast:before{content:""}.unity-icon-media-rewind:before{content:""}.unity-icon-media-volume-high:before{content:""}.unity-icon-media-volume-low:before{content:""}.unity-icon-media-volume-mute:before{content:""}.unity-icon-media-volume-medium:before{content:""}.unity-icon-metals:before{content:""}.unity-icon-military:before{content:""}.unity-icon-mitigation:before{content:""}.unity-icon-navigation:before{content:""}.unity-icon-new-feature:before{content:""}.unity-icon-paperless-leaf:before{content:""}.unity-icon-partnership-and-networking:before{content:""}.unity-icon-people-boy:before{content:""}.unity-icon-people-family:before{content:""}.unity-icon-people-girl:before{content:""}.unity-icon-people-group:before{content:""}.unity-icon-people-man:before{content:""}.unity-icon-people-profile:before{content:""}.unity-icon-people-team:before{content:""}.unity-icon-people-woman:before{content:""}.unity-icon-pet:before{content:""}.unity-icon-phishing:before{content:""}.unity-icon-plan-tools:before{content:""}.unity-icon-preferred-rewards:before{content:""}.unity-icon-recycle:before{content:""}.unity-icon-reminder:before{content:""}.unity-icon-research-service:before{content:""}.unity-icon-restaurant-dining:before{content:""}.unity-icon-scale:before{content:""}.unity-icon-shopping-and-entertainment:before{content:""}.unity-icon-silverware:before{content:""}.unity-icon-small-business:before{content:""}.unity-icon-solar:before{content:""}.unity-icon-student:before{content:""}.unity-icon-sweeps:before{content:""}.unity-icon-thumbtack:before{content:""}.unity-icon-time:before{content:""}.unity-icon-tools:before{content:""}.unity-icon-travel:before{content:""}.unity-icon-work:before{content:""}.unity-icon--link i{margin-right:.5rem}.ipa{background-color:#f9f9f9}.ipa-container{padding:0 24px}.ipa .icon-bull.icon-before:before{color:#0052c2;color:rgba(0,82,194,.3);font-size:6em;overflow:hidden;position:absolute;right:-4%;top:20%;z-index:50}.ipa h3{background:#012169;color:#fff;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.25rem;font-weight:400;letter-spacing:.17px;line-height:1.5;padding:21px 24px}@media only screen and (min-width:768px){.ipa h3{font-size:1.5rem}}.ipa h3.related-article-title{background:none;color:#3c3c3c;font-size:1em;line-height:1.5em;padding:5px}.ipa h4{color:#000;font-family:connections condensed bold,sans-serif;font-size:1.25rem;margin-bottom:4px}@media only screen and (min-width:768px){.ipa h4{font-size:1.5rem}}.ipa h3.ipa-module{color:#fff;font-family:connections light,Arial,Helvetica,sans-serif}.ipa .ipa-module{padding:24px}.ipa .ipa-module a,.ipa .ipa-module li,.ipa .ipa-module p{color:#000;font-family:connections regular,Arial,Helvetica,sans-serif;font-size:1rem}@media only screen and (min-width:768px){.ipa .ipa-module a,.ipa .ipa-module li,.ipa .ipa-module p{font-size:1.125rem}}.ipa .ipa-module h4{font-family:connections regular,Arial,Helvetica,sans-serif;font-weight:400}.ipa .cta{background:#e31837;color:#fff;display:inline-block;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1pc;line-height:1;padding:10px 26px;text-align:center;text-decoration:none;width:auto}.ipa .cta.hover,.ipa .cta.selected{background:#b5132c}@media only screen and (min-width:768px){.ipa{background-color:#f5f5f5;margin-top:24px}.ipa .ipa-module{padding:24px 40px}.ipa .cta,.ipa .cta-back{font-size:18px}}.article-tiles{color:#fff}.article-tiles .ml-tooltip .cta--btn{color:#fff;display:inline-block}.article-tiles .cta--btn a{color:#fff;text-decoration:none}.article-tiles .aggregateheader{width:100%}.article-tiles .page-header{position:relative}.article-tiles .page-header .category{display:block;font-size:1.5em}.article-tiles .page-header .category.icon-before{font-size:3em;line-height:.8em}.article-tiles .page-header h3{color:#012169;font-family:connections condensed light,arial,sans-serif!important;font-size:1.6em;line-height:normal}.article-tiles .page-header .text--capital{text-transform:capitalize}.article-tiles .page-header .masthead-fade-right{display:block;padding:10px}.article-tiles .page-header .masthead-content{clear:both;display:block;min-height:81pt;position:relative;z-index:1}.article-tiles .page-header .masthead-content>*{float:left}.article-tiles .page-header .masthead-content h2{color:#012169;font-family:connections light;font-size:24px}@media(min-width:768px){.article-tiles .page-header .masthead-content h2{font-size:2pc}}.article-tiles .page-header .masthead-content .category-type{border-right:1px solid #fff;display:table-cell;float:none;font-size:.75em;left:1px;position:relative;text-align:center;vertical-align:middle;width:35%}.article-tiles .page-header .masthead-content .category-title{float:none;line-height:normal;margin:0 auto;max-width:750pt;padding:15px 10px;text-align:center;width:100%}.article-tiles .page-header .masthead-content .category-title .lead{color:#000;font-family:connections light;font-size:1rem;line-height:normal}@media(min-width:768px){.article-tiles .page-header .masthead-content .category-title .lead{font-size:24px}}.article-tiles .page-header .masthead-content .category-cta{background-color:#ebe7dd;color:#454545;display:none;overflow:hidden}.article-tiles .page-header .masthead-content .category-cta .category-cta-image{float:left;margin-right:4%}.article-tiles .page-header .masthead-content .category-cta .category-cta-image img{display:block}.article-tiles .page-header .masthead-content .category-cta .category-cta-copy{margin:2%}.article-tiles .page-header .masthead-content .category-cta .category-cta-copy p{font-size:.8em;line-height:normal;margin:.3em 0}.article-tiles .selected{display:block}.article-tiles #article-blocks-container{margin:30px auto;max-width:90pc;overflow:hidden;padding:0 10px}.article-tiles #articlelistcontainer{position:relative}.article-tiles #articlelistcontainer>div{overflow:hidden}.article-tiles .article-tile{display:block;list-style-type:none;margin:0 auto;max-width:25pc;overflow:hidden;padding:15px;position:relative}@media(min-width:1024px){.article-tiles .article-tile{margin:0;width:25%}}.article-tiles .article-tile.category-cta-tile{background-color:none}@media(min-width:1024px){.article-tiles .article-tile.category-cta-tile{max-width:670px;width:50%}}.article-tiles .article-tile a{text-decoration:none}.article-tiles .article-tile a:focus{outline:1px dotted #000}.article-tiles .article-tile .article-type{border-color:#fff #fff transparent transparent;border-style:solid;border-width:1.65em;color:#012169;display:none;font-size:1em;height:0;padding:0;position:absolute;right:0;top:0;width:0;z-index:1}.article-tiles .article-tile .article-type:after{position:relative;right:-.2em;top:-1.1em}.article-tiles .article-tile .article-type.icon-video{display:block}.article-tiles .related-article-link{background-color:#f5f5f5;display:block;height:100%;margin:0 auto;max-width:25pc;min-height:330px}.article-tiles .type-stamp{display:none}.article-tiles .article-image{background-color:#ccc;height:190px;overflow:hidden;width:100%}.article-tiles .article-image__image{background-position:top;background-repeat:no-repeat;background-size:cover;display:block;height:100%;width:100%}.article-tiles .article-image img.mobile{display:inline}.article-tiles .article-image img+img{display:none}.article-tiles .article-type{background-size:15%}.article-tiles .article-copy{color:#0053c2;padding:24px}.article-tiles .article-copy .article-cat{color:#646464;font-family:connections regular,Arial,Helvetica,sans-serif;font-size:14px;text-transform:capitalize}@media(min-width:768px){.article-tiles .article-copy .article-cat{font-size:1rem}}.article-tiles .article-copy .article-cat .icon-before:before{font-size:1.2em;margin-right:.4em;position:relative;top:.1em}.article-tiles .article-copy .article-cat .article-cat-name{display:block;white-space:nowrap}.article-tiles .article-copy .article-title{font-size:20px;line-height:1.25}@media(min-width:768px){.article-tiles .article-copy .article-title{font-size:24px}}.article-tiles .article-copy .article-title:after{display:none}.article-tiles .article-copy .article-subtitle{bottom:0;display:none;left:0;position:absolute;right:0}.article-tiles .article-tile--promo{overflow:hidden;position:relative}.article-tiles .article-tile--promo .article-cat{display:none}.article-tiles .article-tile--promo .article-callout{background:#dc1431;color:#fff;left:0;letter-spacing:1px;padding:5px 9pt;position:absolute;text-transform:uppercase;top:0;z-index:10}.article-tiles .article-tile--promo .article-copy{color:#0053c2;padding:24px}.article-tiles .article-tile--promo .article-copy .article-cat{color:#646464;font-family:connections regular,Arial,Helvetica,sans-serif;font-size:14px;text-transform:capitalize}@media(min-width:768px){.article-tiles .article-tile--promo .article-copy .article-cat{font-size:1rem}}.article-tiles .article-tile--promo .article-copy .article-cat .icon-before:before{font-size:1.2em;margin-right:.4em;position:relative;top:.1em}.article-tiles .article-tile--promo .article-copy .article-cat .article-cat-name{display:block;white-space:nowrap}.article-tiles .article-tile--promo .article-copy .article-title{font-size:20px;line-height:1.25}@media(min-width:768px){.article-tiles .article-tile--promo .article-copy .article-title{font-size:24px}}.article-tiles .article-tile--promo .article-copy .article-title:after{display:none}.article-tiles .article-tile--promo .article-copy .article-subtitle{bottom:0;display:none;left:0;position:absolute;right:0}.article-tiles .article-tile--promo .article-subtitle{word-wrap:break-word;max-height:50px;overflow:hidden}@media(min-width:768px){.article-tiles{margin:0 auto;padding:0}.article-tiles .page-header{margin-bottom:30px}.article-tiles .page-header .masthead-content,.article-tiles .page-header .masthead-fade-left,.article-tiles .page-header .masthead-fade-right{display:block}.article-tiles .page-header .masthead-content .category-type{display:block;float:left;font-size:1em;padding-top:.25em;width:20%}.article-tiles .page-header .masthead-content .category-title{display:block;padding:15px 25px;width:100%}.article-tiles .article-image{height:172px}.article-tiles .article-image img{background-position:50%;background-repeat:no-repeat;background-size:cover;display:block;width:100%}.article-tiles .article-image img.mobile{display:none}.article-tiles .article-new{background-repeat:no-repeat;height:68px;left:0;position:absolute;top:0;visibility:hidden;width:111px}.article-tiles .type-stamp{display:block;visibility:hidden}.article-tiles .article-copy .article-cat{margin-bottom:.5em}.article-tiles .article-copy .article-title{padding:0}.article-tiles .article-copy .article-subtitle{position:static}}@media(min-width:900px){.article-tiles .page-header{margin:0 auto;max-width:90pc}.article-tiles .masthead-filter-all .masthead-title{top:14px;width:350px}}@media(min-width:1024px){.article-tiles #article-blocks-container{display:flex;flex-wrap:wrap;padding:0 50px;width:100%}.article-tiles .article-tile--promo .article-subtitle{display:block}}@media(min-width:770px){.article{background-color:transparent;margin:auto 0}.article .article-head-inner{margin:0 auto;max-width:750pt;width:100%}.article .blue-bar{background-color:#012169;min-height:280px;overflow:hidden;top:0;width:100%}.article .blue-bar .image-wrapper{height:100%;left:0;margin:auto;max-width:1310px;right:0;top:0;width:100%;z-index:0}.article .blue-bar .image-wrapper .image-background{height:100%;max-width:33pc;position:absolute;right:0;top:0;width:40%}.article .blue-bar .article-head-inner{min-height:280px}.article .blue-bar .blue-bar-wrapper .blue-bar-spacer{float:left;width:40%}.article .blue-bar .blue-bar-wrapper .blue-bar-spacer:before{content:attr(data-title);display:inline-block;font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.5rem;font-weight:400;font-weight:100;line-height:1.28;padding:1em 0;vertical-align:middle;visibility:hidden}.article .blue-bar .article-head-inner{padding:0}.article .article-head{width:100%;z-index:1}.article .article-head h1{font-size:3.5rem;line-height:1.12;padding:1em 20px;text-align:left;top:2pc;width:60%;z-index:10}.article .article-head h2{font-size:1.5rem;margin:0 auto;padding:1em 0}.article .article-sidebar-inner{float:none}.article .h1-spacer{float:left;height:auto;min-height:280px;overflow:hidden}.article .h1-spacer:before{content:attr(data-title);display:inline-block;font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:3.5rem;font-weight:400;font-weight:100;line-height:1.12;padding:1em 20px;vertical-align:middle;visibility:hidden}.article .h2-spacer{float:left;height:auto;overflow:hidden;padding:0 20px;position:relative;width:100%}.article .h2-spacer:before{content:attr(data-title);display:inline-block;font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.5rem;font-weight:100;font-weight:400;line-height:normal;padding:1em 0;vertical-align:middle;visibility:hidden}.article .h1-wrapper{max-width:750pt;padding:0;width:100%}.article .inner{padding:28% 0 0;position:relative}.article .article-content-wrapper{display:block;float:left}.article ol.relatedcontent li,.article ul.relatedcontent li{float:left;width:100%}.article .image-wrapper{height:340px;margin:0;max-width:600px;overflow:hidden;padding:0;position:absolute;top:-2pc;width:60%}.article .image-wrapper img{display:none;max-width:600px}.article .image-wrapper .image-background{background-position:50%;background-repeat:no-repeat;background-size:cover;height:100%;width:100%}.article .article-wrapper{background-color:#fff;display:table}.article .article-content{border:none;display:block;float:left;overflow:hidden;padding:0 0 2pc;width:100%}.article .article-content li:not(.vjs-menu-item){font-size:1.125rem}.article .article-content-inner{height:100%;margin:0 auto;padding:0 3% 0 20px;width:100%}.article .article-content-inner .h2-wrapper h2{font-size:1.5rem;margin:0 auto;padding:1em 0}.article .article-content-inner h2{font-size:2rem;line-height:1.12}.article .article-content-inner h4{color:#000;font-size:24px;line-height:1.25}.article .article-content .footnote{font-size:.875rem;line-height:1.14}.article .article-head h1,.article .article-head h2,.article .h1-spacer,.article .h2-spacer,.article .h2-wrapper{width:100%}.article .text-wrap{width:0}.article .wrapper{width:70%}.article .inner{border-right:1px solid #857363;float:left;overflow:hidden;width:70%}.article .image-spacer-wrapper{display:none;float:right;height:auto;overflow:hidden;width:30%}.article .image-spacer-wrapper .image-spacer:before{content:attr(data-title);display:inline-block;font-family:connections regular,Arial,Helvetica,sans-serif;font-family:connections light,Arial,Helvetica,sans-serif;font-size:3.5rem;font-weight:400;font-weight:100;line-height:1.12;min-height:280px;padding:1em 20px;vertical-align:middle;visibility:hidden;width:200%}.article .article-sidebar{background-color:#fff;display:block;float:left;margin:0 0 0 -20px;min-width:270px;padding-top:0;width:103%}.article .article-sidebar .article-sidebar-inner{margin:0 1em 1em}}.goals{position:relative}@media(min-width:768px){.goals{margin-top:20px;max-height:125pc;padding-bottom:75pt;transition:max-height 1s}.goals.intro{max-height:500px}.goals.preselected{transition:max-height 0s}.goals .goals__title{display:none;margin-bottom:20px;-webkit-transform:translateX(10%);width:80%}.goals .goals__title.subtopic{margin-left:170px;-webkit-transform:translateX(0);width:75%}.goals .selectors-container{position:relative;transform:translateY(0);transition:transform 1s}.goals .selectors-container.intro{transform:translateY(-200%)}.goals .selectors-container.preselected{transition:transform 0s}.goals .button--next{background-color:#bbb;color:#fff;display:block;font-size:1rem;margin-top:10px;padding:10px 20px;position:absolute;right:5%;text-decoration:none}.goals .button--next.active{background-color:#00b9dd}.goals .button--next.js-back{display:none;left:170px;right:inherit}.goals .button--next.js-skip-to-summary{background:none;color:#666;display:none;right:15%;text-decoration:underline}.goals-summary{background:none;background:#fff;left:5%;margin:20px auto;transition:transform 1.5s;width:90%}.goals-summary.active{position:relative}.goals-summary .screen__title{font-family:connections bold;margin-left:15px;text-align:center}.goals-summary .column--left{float:left;padding:10px 10px 10px 0;width:33.33%}.goals-summary .column--right{float:right;max-height:767px;overflow:scroll;padding:10px;width:66.6666666667%}.goals-summary .cta__container{background:#ddd}.goals-summary .section--about-GE .section__title,.goals-summary .section--your-answers .section__title{margin-bottom:10px}.goals-summary .section--about-GE .section__copy,.goals-summary .section--your-answers .section__copy{padding:20px}.goals-summary .section--about-GE{background:#aaa;color:#fff;margin-bottom:0;padding:23px}.goals-summary .section--your-answers{background:#aaa;border:1px solid #aaa;padding:3px}.goals-summary .inner-section{background:#fff;border-radius:10px;padding:20px}.goals-summary .percentages__container{background:#e6e6e6;border:none;padding:23px 20px 20px}.goals-summary .percentages__title{margin-bottom:30px}.goals-summary .chart{display:block;margin:0 auto;width:80%}.goals-summary .key{margin-bottom:10px}.goals-summary .key span{vertical-align:super}.goals-summary .key__img{margin-right:25px;vertical-align:bottom}.goals-summary .button--large{background:#00b9dd;color:#fff;display:block;font-size:1.25rem;margin:0 auto;padding:10px 0;text-align:center;text-decoration:none;width:100%}.goals-summary .cta__container{border:0;margin-top:20px;padding:10px;position:relative}.goals-summary .cta__list .cta__description{margin-bottom:40px}.goals-summary .cta{background:#00b9dd;bottom:0;color:#fff;padding:5px;position:absolute;right:0;text-align:center;text-decoration:none;width:125px}.goals-summary .cta__title{font-family:connections bold}.goals-summary .cta__description{margin-bottom:40px;padding:10px}.goals-summary .priority{display:none}.goals-summary .priority__header{padding:30px 10px 10px}.goals-summary .priority__title{font-family:connections bold}.goals-summary .priority__description{padding:10px 10px 0}.goals-summary .priority__content{font-size:0}.goals-summary .priority__content-tile{background-color:#ddd;border:0;display:inline-block;font-size:1rem;height:150px;margin:1.5%;padding:10px;position:relative;vertical-align:top;width:47%}.goals-summary .priority__content-tile .cta{bottom:0;position:absolute;right:0}.goals-summary .priority--giving .article,.goals-summary .priority--giving .video,.goals-summary .priority--health .article,.goals-summary .priority--health .video,.goals-summary .priority--work .article,.goals-summary .priority--work .video{background-repeat:no-repeat;background-size:cover}.goals-summary .section--next-steps{margin-top:30px}.goals-summary .section--next-steps .section__title{background:#aaa;border-radius:10px;color:#fff;font-size:1.25rem;padding:10px;text-align:center}.goals-summary .section--next-steps .cta__list{font-size:0}.goals-summary .section--next-steps .cta__container{display:inline-block;font-size:1rem;margin:1.5%;min-height:265px;vertical-align:top;width:30.33333%}.goals-summary .section--next-steps .cta__container .cta__title{display:inline}.goals-summary .section--next-steps .cta__description{line-height:1.25rem;margin-bottom:10px}.goals-summary .section--next-steps .cta{bottom:10px;display:block;margin:0 auto;position:relative;position:absolute;right:5%;text-align:center;width:90%}.goals-summary .next-steps-arrow{border-color:#aaa transparent transparent;border-style:solid;border-width:15px 30px 0;height:0;margin:0 auto;width:0}.goals-summary .arrow--down{border-color:#aaa transparent transparent;border-style:solid;border-width:70px 75pt 0;height:0;margin-bottom:10px;margin-left:20px;width:0}}@media(min-width:320px){.goalsIntroQuestions{margin:75pt auto 0;overflow:hidden;padding-bottom:270px;position:relative;width:50%}.goalsIntroQuestions .intro__title{margin-bottom:35px}.goalsIntroQuestions .intro__copy{margin-bottom:20px}.goalsIntroQuestions .intro__button{background:#00b9dd;color:#fff;display:block;margin:0 auto;padding:15px;text-align:center;text-decoration:none;width:175px}.goalsIntroQuestions .question-set1,.goalsIntroQuestions .question-set2{background:#fff;font-size:0;position:absolute;top:0;transform:translateX(100%);transition:transform 1s}.goalsIntroQuestions .question-set1.active,.goalsIntroQuestions .question-set2.active{transform:translateX(0)}.goalsIntroQuestions .question-set1.complete,.goalsIntroQuestions .question-set2.complete{transform:translateX(-100%)}.goalsIntroQuestions .question__category{font-size:1.25rem;margin-bottom:20px}.goalsIntroQuestions .question{background:#ddd;display:inline-block;font-size:1rem;margin:1%;min-height:180px;padding-bottom:10px;padding-top:10px;vertical-align:top;width:48%}.goalsIntroQuestions .question:hover{background:rgba(0,185,221,.5)}.goalsIntroQuestions .question.active{background:#00b9dd;color:#fff}.goalsIntroQuestions .question__graphic{background:#bbb;background-position:0 0;background-repeat:no-repeat;background-size:contain;border:3px solid #fff;height:75pt;margin:0 auto 10px;width:75pt}.goalsIntroQuestions .question__text{padding:0 10px;text-align:center}.goalsIntroQuestions .button--next{background:#00b9dd;color:#fff;display:block;font-size:1rem;margin-top:10px;padding:10px 20px;position:absolute;right:1%;text-decoration:none}}@media(min-width:768px){.goals-intro-ipa{left:25%;margin:75pt auto 0;padding-bottom:75pt;width:50%}.goals-intro-ipa .intro__title{margin-bottom:35px}.goals-intro-ipa .intro__copy{margin-bottom:20px}.goals-intro-ipa .intro__button{background:#00b9dd;color:#fff;display:block;margin:0 auto;padding:15px;text-align:center;text-decoration:none;width:175px}}.your-life-priorities .category{display:block}.your-life-priorities .ylp ul{margin:0}.your-life-priorities .ylp>li{background-color:#a39382;box-shadow:inset 50px 0 75pt 0 #857363;display:block;float:none;line-height:normal;list-style:none;margin-left:0!important;margin-right:0;width:auto}.your-life-priorities .ylp>li .icon,.your-life-priorities .ylp>li a{color:#fff}.your-life-priorities .ylp>li a{overflow:hidden;padding:.75em 3%;width:auto}.your-life-priorities .ylp>li a .icon-bg,.your-life-priorities .ylp>li a.icon{display:block;font-size:1em;height:auto;line-height:normal;width:auto}.your-life-priorities .ylp>li a .icon-bg:after,.your-life-priorities .ylp>li a .icon-bg:before,.your-life-priorities .ylp>li a.icon:after,.your-life-priorities .ylp>li a.icon:before{font-size:5em;opacity:.1;position:absolute;right:5%;top:0}.your-life-priorities .ylp>li a>*{display:block}.your-life-priorities .ylp>li a .category,.your-life-priorities .ylp>li a .icon{display:block;margin:0 auto;text-align:center}.your-life-priorities .ylp>li a .icon{background-color:transparent;font-size:1.6em;line-height:2em;text-align:center}.your-life-priorities .ylp>li a .category{font-size:.6em;text-transform:uppercase}.your-life-priorities .ylp>li a .arrow{border-color:transparent transparent transparent #012169;border-style:solid;border-width:5px 0 5px 5px;display:none;height:0;left:10px;margin-top:0;position:absolute;top:auto;width:0}.your-life-priorities .ylp>li a .category-title{border-right:1px solid #fff;float:left;padding-right:5%;width:29%}.your-life-priorities .ylp>li a .category-description{border-left:1px solid #fff;display:block;float:left;font-family:connections regular,Arial,Helvetica,sans-serif;font-size:.75em;left:-1px;line-height:normal;padding-left:5%;position:relative;text-align:left;width:63%}.your-life-priorities .ylp>li a .category-description p{display:inline;margin:0;padding:0}.your-life-priorities .ylp>li a .category-description p:empty{display:none}.your-life-priorities .ylp>li a .category-description .category-cta{display:inline;font-family:connections bold,arial,sans-serif}.your-life-priorities .ylp>li a:hover .category-cta{text-decoration:underline}.your-life-priorities .container{margin:3% auto}.your-life-priorities .ylp-infographic .ylp-infographic-copy h2{color:#012169;padding-left:0}.your-life-priorities .ylp-infographic .ylp-infographic-copy p{margin:.5em 0}.your-life-priorities .ylp-infographic .cta--btn{display:inline-block;margin:1em 0;padding:0 5%}.your-life-priorities .ylp-infographic .cta--btn:after{border-color:transparent transparent transparent #fff;border-style:solid;border-width:5px 0 5px 5px;content:"";display:inline-block;font-size:0;height:0;left:5px;position:relative}.your-life-priorities .cta-box .title{left:0;max-width:50%;z-index:1}.your-life-priorities .cta-box .block-overlay{display:block}.your-life-priorities .ml-header{background-position:75% 0;background-repeat:no-repeat;background-size:cover;color:#fff;display:block;min-height:180px}.your-life-priorities .ml-header .ml-header--content-left{font-size:.8em;margin:6%;width:66%}.your-life-priorities .ml-header .ml-header-inner{background:none}.your-life-priorities .lifeprioritiesselector{color:#fff}.your-life-priorities .lifeprioritiesselector h2{padding:2% 3%}.your-life-priorities .lifeprioritiesselector .container--left{background-color:#a39382;box-shadow:inset 50px 0 75pt 0 #857363}.your-life-priorities .colctrl-layout-2>div{margin-bottom:3%}.your-life-priorities .colctrl-layout-2>div p{margin-bottom:1em}.your-life-priorities .colctrl-layout-2>div small{display:block;font-size:.7em;line-height:normal}.your-life-priorities .container--left{font-size:.75em;padding:10px;width:auto}.your-life-priorities .container--boxed{position:relative}.your-life-priorities .container--boxed .quote{color:#012169;margin-top:0;padding-bottom:0}.your-life-priorities .container--boxed .quote p{margin:0;margin-bottom:1em!important;padding:0 15% .5em}.your-life-priorities .container--boxed .quote p:after,.your-life-priorities .container--boxed .quote p:before{font-size:8em;font-size:12rem;line-height:normal;z-index:-1}.your-life-priorities .container--boxed .quote p:before{content:"“";left:-.05em;margin-left:0;top:-36px}.your-life-priorities .container--boxed .quote p:after{bottom:-150px;right:auto;top:auto}.your-life-priorities .container--boxed .block-color{background-color:#fff;position:relative}.your-life-priorities .container--boxed .block-overlay{background-color:#fff;background-color:hsla(0,0%,100%,.88)}.your-life-priorities .container--boxed .block-overlay p{border-top:4px solid #d1c9c0;color:#012169;padding:3% 5% 3% 0}.your-life-priorities .container--boxed .title{font-size:1.5em;line-height:1em;padding:3% 5%;position:absolute;top:16%;width:70%}.your-life-priorities .container--boxed .media{display:block;position:relative;width:100%}.your-life-priorities .container--boxed .media img{display:block;margin:auto}.your-life-priorities .container--boxed .media .play-btn{left:85%}.your-life-priorities .container--boxed p{margin:0 3%;padding:0 0 .5em;position:relative}.your-life-priorities .testimonial{margin-bottom:3%;padding-top:3%}.your-life-priorities .video-content{position:relative}.your-life-priorities .video-content .teaser{bottom:10%;left:15%;position:absolute;right:-5%;top:10%;z-index:7000}.your-life-priorities .video-content .teaser p{background-color:rgba(1,33,105,.9);color:#fff;display:block;font-family:connections light,arial,sans-serif;font-size:1em;line-height:normal;margin:0;overflow:hidden;padding:1em;position:absolute;right:0;text-align:left;top:inherit;width:70%;z-index:250}.your-life-priorities .video-content .teaser p:after{bottom:auto;color:#0053c2;color:rgba(0,82,194,.7);content:"";font-family:icons;font-size:10em;opacity:.5;position:absolute;right:-15%;top:.05em;z-index:-1}.your-life-priorities .teasers{margin:0;overflow:hidden}.your-life-priorities .teasers h3{background-color:transparent;color:inherit;font-size:1.75em;line-height:normal;margin-bottom:.25em;padding:0;text-transform:none}.your-life-priorities .teasers .teaser{background-color:transparent;font-size:.9em;margin-bottom:2em;position:relative}.your-life-priorities .teasers .teaser img{float:left;margin-bottom:5px}.your-life-priorities .teasers .teaser .container{margin:0 auto}.your-life-priorities .teasers .teaser .cta,.your-life-priorities .teasers .teaser .cta--btn{clear:both;color:#fff;display:block;line-height:2em;padding:0 5%;position:static!important;text-align:center;text-decoration:none}@media only screen and (min-width:768px){.your-life-priorities .ml-header{background-position:100% 0}.your-life-priorities .ml-header .ml-header--content-left{font-size:1em;margin:3%;width:52%}.your-life-priorities .container--boxed .description,.your-life-priorities .container--left,.your-life-priorities .description{display:inline-block;float:left}.your-life-priorities .lifeprioritiesselector h2{padding:1% 2%}.your-life-priorities .lifeprioritiesselector .container--left{background-color:transparent;box-shadow:none}.your-life-priorities .colctrl-layout-2>div{float:right;margin-right:2%;width:33%}.your-life-priorities .colctrl-layout-2>div:first-child{float:left;margin-right:0;width:62%}.your-life-priorities .container--left{font-size:.9em;line-height:normal;margin-top:1%;width:100%}.your-life-priorities .container--left h2{border-right:1px solid #fff;margin-right:2%}.your-life-priorities .video-content .teaser{bottom:15%;left:auto;max-height:90pt;right:0;top:65%;width:58%}.your-life-priorities .video-content .teaser p{font-size:1.25em;min-height:10px;padding:1.25em 30% 1.25em 10%;top:0;width:100%}.your-life-priorities .ylp-infographic .ylp-infographic-copy{float:left;margin-right:5%;width:60%}.your-life-priorities .ylp-infographic .ylp-infographic-item{float:left;width:35%}.your-life-priorities .description{margin-top:0;width:68%}.your-life-priorities .container{margin:3% auto}.your-life-priorities .container .teaser .cta--btn{bottom:0;display:inline-block;position:absolute}.your-life-priorities .lifeprioritiesselector .container--boxed{background-color:#a39382;box-shadow:inset 0 0 75pt 50px #857363}.your-life-priorities .container--boxed h2{float:left}.your-life-priorities .container--boxed .quote p:before{left:.15em}.your-life-priorities .cta-box{width:65%}.your-life-priorities .quote{background-color:transparent;box-shadow:none;color:inherit;float:right;padding-bottom:34px}.your-life-priorities .quote p{padding-top:1em;width:auto}.your-life-priorities .quote div{float:right;left:0;margin:0;width:75%}.your-life-priorities .ylp{margin:0 1em;padding:0 1%}.your-life-priorities .ylp>li{background-color:transparent;box-shadow:none;display:inline-block;float:none;margin-right:0;margin-top:0;padding:0;vertical-align:top;width:24%}.your-life-priorities .ylp>li:first-child{margin-left:12.5%!important}.your-life-priorities .ylp>li a.icon:after,.your-life-priorities .ylp>li a.icon:before{font-size:7em;right:0}.your-life-priorities .ylp>li a>*{margin-bottom:.75em;margin-top:.75em}.your-life-priorities .ylp>li a .category-description{margin-top:1.5em}.your-life-priorities .ylp>li .category{line-height:2em}.your-life-priorities .ylp>li .arrow{margin:0}.your-life-priorities .teasers h3{background-color:transparent;color:inherit;font-size:1.7em;text-transform:none}.your-life-priorities .teasers .teaser{float:left;margin-left:1%;width:32%}.your-life-priorities .teasers .teaser:first-child{margin-left:0}.your-life-priorities .teasers .teaser p{padding-bottom:40px}.your-life-priorities .teasers .teaser .cta--btn{bottom:0;float:left;margin-left:109px;margin-top:-41px;position:relative;top:-29px}}@media only screen and (min-width:1024px){.your-life-priorities .container--boxed .quote p:before{left:-.05em}}.lt-ie9 .your-life-priorities .ylp>li a .icon-bg{color:#b6a99a}.thought-leadership{background-color:#000;background-position:top;background-repeat:no-repeat;background-size:200% auto;height:auto;margin:0 auto;max-width:750pt;min-height:860px;overflow:hidden;position:relative;width:100%}.thought-leadership .thought-leadership--foreground{background-position:29% bottom;background-repeat:no-repeat;background-size:100% auto;height:25pc;left:-75pt;min-width:425px;position:absolute;top:-75pt;width:60%;z-index:100}.thought-leadership .blue-box{background-color:#002268;background-color:rgba(0,34,104,.7);color:#fff;font-size:.9em;height:200px;left:13%;padding:7% 0 0;position:absolute;top:8%;width:87%}.thought-leadership .blue-box .blue-box-inner{float:right;margin-right:3%;width:66%}.thought-leadership .blue-box h2{font-size:1.1em;line-height:1.3em}.thought-leadership .blue-box p{line-height:1.4em;padding:3% 0}.thought-leadership .blue-box .cta{background-color:#009cde;color:#fff;display:inline-block;font-size:.9em;padding:3px 9pt;position:relative;text-decoration:none;z-index:110}.thought-leadership ul{bottom:0;font-size:1em;left:10%;margin:0 auto;position:absolute;width:80%;z-index:200}.thought-leadership ul li{background-color:#fff;list-style-type:none;margin-bottom:.8rem;position:relative;width:100%}.thought-leadership ul li p{font-size:.8em;width:auto}.thought-leadership ul li a{bottom:0;display:block;position:relative}.thought-leadership .container{padding:5px}.thought-leadership h3{background-color:#012169;color:#fff;font-size:1em;font-weight:400;line-height:1.3em;padding:0 2%}.thought-leadership img{display:inline-block;float:left;margin-right:10px}.thought-leadership p{font-size:.9em;width:auto}@media only screen and (min-width:600px){.thought-leadership{min-height:660px}.thought-leadership .thought-leadership--foreground{max-width:490px;width:80%}.thought-leadership .blue-box{padding:3% 0 0}.thought-leadership .blue-box .blue-box-inner{width:70%}.thought-leadership ul{bottom:auto;left:0;margin:0 auto;top:50%;width:100%}.thought-leadership ul li{display:inline-block;float:left;margin:1%;min-height:113px;vertical-align:top;width:48%}}@media only screen and (min-width:768px){.thought-leadership{min-height:550px}.thought-leadership .thought-leadership--foreground{height:450px;max-width:35pc;top:-150px}.thought-leadership .blue-box{top:20%}.thought-leadership ul{font-size:.8em;line-height:1em;top:70%}.thought-leadership ul li{margin:0 0 0 1%;width:24%}}.working-with-us{display:block;font-size:9pt;margin:0 auto 2em;position:relative}.working-with-us .section-block.last{height:0!important}.working-with-us .video-content{background-color:transparent}.working-with-us .blue-dots{display:none;position:fixed;right:1%;top:50%;z-index:99999}.working-with-us .blue-dots .blue-dot{border:1px solid #012169;border-radius:7.5px;cursor:pointer;height:15px;margin:10px 0;width:15px}.working-with-us .blue-dots .blue-dot.active{background-color:#012169}.working-with-us .scroll-button{bottom:5px;color:#012169;cursor:pointer;display:none;font-size:1.3em;left:50%;margin-left:-75px;position:fixed;text-align:center;width:150px;z-index:5000}.working-with-us .scroll-button .continue,.working-with-us .scroll-button.up .continue{display:none}.working-with-us .scroll-button.up .up{display:block}.working-with-us .scroll-button.up:before{border-color:transparent transparent #012169;border-style:solid;border-width:0 10px 10px;content:"";height:0;position:relative;top:-15px}.working-with-us .scroll-button.down:after{border-color:#012169 transparent transparent;border-style:solid;border-width:10px 10px 0;bottom:-15px;content:"";height:0;position:relative}.working-with-us .scroll-button.down .continue{display:block}.working-with-us .scroll-button.down .up{display:none}.working-with-us.scrollable{overflow-x:hidden;overflow-y:scroll;width:102%}.working-with-us.not-scollable{overflow-x:hidden;overflow-y:hidden;width:102%}.working-with-us .main-headline{background-color:#000c3b;color:#fff;margin:35px 0 20px;overflow:hidden;position:relative;width:100%;z-index:100}.working-with-us .main-headline .main-headline--inner{background:transparent;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMGMzYiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwMjA2NCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDBjM2IiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);background:linear-gradient(90deg,#000c3b 0,#002064 50%,#000c3b);margin:0 auto;max-width:750pt}.working-with-us .main-headline .main-headline--inner h2{font-family:connections light,Arial,Helvetica,sans-serif;font-size:2em;line-height:normal;margin:0 auto .5em;padding:.5em 0;width:90%}.working-with-us .main-headline .main-headline--inner .description{display:inline-block;font-size:1.2em;margin:0 5%;padding:0 0 20px;z-index:5}.working-with-us .main-headline.icon-after:after{display:none;z-index:1}.working-with-us .wwu-slide{margin:0 2%}.working-with-us .wwu-slide .video-player-block{position:relative}.working-with-us .wwu-slide .video-player-block .image-block img{max-width:100%;width:100%}.working-with-us .wwu-slide .sidebar{color:#012169;margin:1em auto 0}.working-with-us .wwu-slide h3{border-bottom:1px solid #012169;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.8em;line-height:normal;margin:0;padding-bottom:5px}.working-with-us .wwu-slide .takeaway{font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.1em;line-height:1.2em;margin:15px 0}.working-with-us .wwu-slide .takeaway strong{display:block;line-height:1.1em;margin-right:5%}.working-with-us .wwu-slide .cta--btn{margin:0}.working-with-us .wwu-slide .video-player{background-size:100% auto;width:100%}.working-with-us .wwu-slide .boxed-content{position:relative;width:100%}.working-with-us .wwu-slide .teaser,.working-with-us .wwu-slide .video-caption{background-color:#fff;background-color:hsla(0,0%,100%,.88);color:#012169;font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.2em;line-height:1.2em;padding:4% 3%;position:relative}.working-with-us .wwu-slide .blue-box{display:none;z-index:5}.working-with-us .wwu-slide .quote,.working-with-us .wwu-slide .quote-author{position:relative;z-index:50}.working-with-us .wwu-slide .quote{font-family:connections light,Arial,Helvetica,sans-serif;font-size:1.8em;line-height:1.2em;padding:0}.working-with-us .wwu-slide .quote:before{color:#00429f;content:"“";font-size:5em;left:-9pt;opacity:.9;position:absolute;top:25px;z-index:-1}.working-with-us .wwu-slide .quote:after{bottom:-40px;color:#00429f;content:"”";font-size:5em;margin-left:-1pc;opacity:.9;position:absolute;z-index:-1}.working-with-us .wwu-slide .quote-author{display:block;font-family:connections bold,Georgia,serif;font-size:1em;font-weight:400;line-height:2em;min-height:20px;text-align:right}.working-with-us .wwu-slide .fa-quote{margin-bottom:10px}.working-with-us .wwu-slide .fa-quote .quote{font-size:1.2em;margin:0 3%;padding:8px 8px 9pt}.working-with-us .wwu-slide .fa-quote .quote:after,.working-with-us .wwu-slide .fa-quote .quote:before{color:#bfb3a7}.working-with-us .wwu-slide .fa-quote .quote:before{left:-9pt;top:30px}.working-with-us .wwu-slide .fa-quote .quote:after{bottom:-20px;margin-left:-10px}.working-with-us .wwu-slide .fa-quote .cta--btn{margin:3px 0}.working-with-us .wwu-slide .cta-box{background-color:#ebe7dd;margin-top:20px;width:auto}.working-with-us .wwu-slide .cta-box h3{border:none;color:#012169;font-family:connections condensed bold,Arial,Helvetica,sans-serif;font-size:1em;font-weight:400;line-height:1em;margin:0 0 5px}.working-with-us .wwu-slide .cta-box img{height:auto;width:100%}.working-with-us .wwu-slide .cta-box .cta--btn{line-height:25px;margin:0 10px 10px;padding:0 20px 0 10px}.working-with-us .wwu-slide .cta-box .copy{color:#454545;font-size:1.1em;margin:10px;width:auto}.working-with-us .wwu-slide .cta-box .copy p{height:auto;line-height:1.2em;min-height:1px}@media only screen and (min-width:768px){.working-with-us .section-block{min-height:600px}.working-with-us .section-block.last{height:0!important;min-height:0}.working-with-us .