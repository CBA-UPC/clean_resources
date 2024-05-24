(function(){'use strict';var p="function"==typeof Object.defineProperties?Object.defineProperty:
var r=q(this);t("Symbol",;
t("Symbol.iterator",;
t("WeakMap",;
t("Map",;
t("Object.values",;
t("Set",;
t("Array.prototype.values",;
t("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var e=this+"";b+="";void 0===c&&(c=e.length);c=Math.max(0,Math.min(c|0,e.length));for(var h=b.length;0<h&&0<c;)if(e[--c]!=b[--h])return!1;return 0>=h}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var A=this||self;;var C,D;a:{for(var E=["CLOSURE_FLAGS"],F=A,G=0;G<E.length;G++)if(F=F[E[G]],null==F){D=null;break a}D=F}var H=D&&D[610401301];C=null!=H?H:!1;var I,J=A.navigator;I=J?J.userAgentData||null:null;;;!L("Android")||N();N();L("Safari")&&(N()||(M()?0:L("Coast"))||(M()?0:L("Opera"))||(M()?0:L("Edge"))||(M()?K("Microsoft Edge"):L("Edg/"))||M()&&K("Opera"));Math.max.apply(Math,x(Object.values({A:1,u:2,s:4,D:8,C:16,B:32,i:64,G:128,o:256,m:512,v:1024,j:2048,F:4096,l:8192})));Object.freeze(new function(){});
Object.freeze(new ;var O=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");;var Q=A.window,R,S,T=(null==Q?void 0:null==(R=Q.yt)?void 0:R.config_)||(null==Q?void 0:null==(S=Q.ytcfg)?void 0:S.data_)||{};B("yt.config_",T);var U=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),V=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),W=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),X=
Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),aa=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function ba(){return U.map(.filter(}
function ca(a){var b=a.split(".");a=b[b.length-1];b=b.reduce(window);
if(!b)return a+" is missing";b=Function.prototype.toString.call(b).replace(/\n/g," ").replace(/  +/g," ");return b!="function "+a+"() { [native code] }"?a+" is not native, prologue: "+b.slice(0,50):null}
function Y(a){var b=a.match(O)[1]||null;return aa.some(function(c){return b==c})}
function Z(a){var b=P(a.match(O)[3]||null);return!b||Y(a)?!0:V.some(function(c){return b==c})||X.some(}
function da(a){if(!Y(a))return null;var b=P(a.match(O)[3]||null);return b?W.some(?null:b:null}
function ea(){var a=new Set;[].concat(x(document.querySelectorAll("script"))).forEach(function(b){b.src&&!Z(b.src)&&a.add(b.src)});
[].concat(x(document.querySelectorAll("link[href]"))).forEach(function(b){"alternate"==b.rel||Z(b.href)||a.add(b.href)});
return[].concat(x(a)).sort()}
function fa(){var a=new Set;[].concat(x(document.querySelectorAll("script"))).forEach(function(b){b.src&&(b=da(b.src))&&a.add(b)});
return[].concat(x(a)).sort()}
;B("ytbin.polymer.shared.lib.tampering.info",function(){var a=ea(),b=ba(),c=fa(),e=[];c.length&&e.push("extensions",c);a.length&&e.push("suspiciousIncludes",a);b.length&&e.push("suspiciousApis",b);return e.length?e:null});}).call(this);
