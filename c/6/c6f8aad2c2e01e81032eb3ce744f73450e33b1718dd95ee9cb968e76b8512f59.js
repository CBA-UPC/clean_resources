(function(){'use strict';/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var p=this||self;function aa(a,b){a:{var c=["CLOSURE_FLAGS"];for(var d=p,e=0;e<c.length;e++)if(d=d[c[e]],null==d){c=null;break a}c=d}a=c&&c[a];return null!=a?a:b}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}} 
function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return q.apply(null,arguments)};var ea=aa(610401301,!1),fa=aa(572417392,!0);var u;const ha=p.navigator;u=ha?ha.userAgentData||null:null;function ia(a){return ea?u?u.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function x(a){var b;a:{if(b=p.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function y(){return ea?!!u&&0<u.brands.length:!1}function ja(){return y()?ia("Chromium"):(x("Chrome")||x("CriOS"))&&!(y()?0:x("Edge"))||x("Silk")};function ka(a){ka[" "](a);return a}ka[" "]=function(){};!x("Android")||ja();ja();x("Safari")&&(ja()||(y()?0:x("Coast"))||(y()?0:x("Opera"))||(y()?0:x("Edge"))||(y()?ia("Microsoft Edge"):x("Edg/"))||y()&&ia("Opera"));var la=!fa;let ma=!fa;let z=0,C=0;function na(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);if(b){b=c;c=~a;b?b=~b+1:c+=1;const [d,e]=[b,c];a=e;c=d}z=c>>>0;C=a>>>0};var D=Symbol();function oa(a){const b=a[D]|0;1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),a[D]=b|1)}function pa(){var a=[];a[D]|=1;return a}function E(a){a=a>>14&1023;return 0===a?536870912:a};var qa={},ra={};function ua(a){return!(!a||"object"!==typeof a||a.g!==ra)}function G(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let va=!fa;function wa(a,b,c){if(!Array.isArray(a)||a.length)return!1;const d=a[D]|0;if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;a[D]=d|1;return!0}var H;const xa=[];xa[D]=55;H=Object.freeze(xa);class ya{}class za{}Object.freeze(new ya);Object.freeze(new za);const Aa=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function J(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0} 
function Ba(a){if(null==a)return a;var b=typeof a;if("number"===b?Number.isFinite(a):"string"!==b?0:Aa.test(a)){if("number"===typeof a){var c=Math.trunc(a);if(!Number.isSafeInteger(c)){na(c);a=z;b=C;if(c=b&2147483648)a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0);a=4294967296*b+(a>>>0);c=c?-a:a}}else b=Math.trunc(Number(a)),Number.isSafeInteger(b)?c=String(b):(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),("-"===a[0]?20>a.length||20===a.length&&-922337<Number(a.substring(0,7)):19>a.length||19===a.length&& 
922337>Number(a.substring(0,6)))?c=a:(16>a.length?na(Number(a)):(a=BigInt(a),z=Number(a&BigInt(4294967295))>>>0,C=Number(a>>BigInt(32)&BigInt(4294967295))),a=z,b=C,b&2147483648?c=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b>>>=0,a>>>=0,2097151>=b?c=""+(4294967296*b+a):c=""+(BigInt(b)<<BigInt(32)|BigInt(a)))));return c}};let K;function Ca(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return va||!wa(a,void 0,9999)?a:void 0;if(null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}}}return a};function Da(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&(a[D]|0)&1?void 0:f&&(a[D]|0)&2?a:Ea(a,b,c,void 0!==d,e,f);else if(G(a)){const g={};for(let h in a)g[h]=Da(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}function Ea(a,b,c,d,e,f){const g=d||c?a[D]|0:0;d=d?!!(g&32):void 0;a=Array.prototype.slice.call(a);for(let h=0;h<a.length;h++)a[h]=Da(a[h],b,c,d,e,f);c&&c(g,a);return a}function Fa(a){return a.Z===qa?a.toJSON():Ca(a)};function L(a,b){a=a.g;return Ga(a,a[D],b)}function Ga(a,b,c){if(-1===c)return null;if(c>=E(b)){if(b&256)return a[a.length-1][c]}else if(b=c+(+!!(b&512)-1),b<a.length)return a[b]} 
function Ha(a){var b=a.g;let c=b[D];var d=Ga(b,c,13);a=null==d||"number"===typeof d?d:"NaN"===d||"Infinity"===d||"-Infinity"===d?Number(d):void 0;if(null!=a&&a!==d)a:if(d=E(c),13>=d){let e,f=c;if(c&256)e=b[b.length-1];else{if(null==a)break a;e=b[d+(+!!(c&512)-1)]={};f|=256}e[13]=a;13<d&&(b[13+(+!!(c&512)-1)]=void 0);f!==c&&(b[D]=f)}else b[13+(+!!(c&512)-1)]=a,c&256&&(b=b[b.length-1],13 in b&&delete b[13]);return a}function M(a){return a??0} 
function N(a,b){a=L(a,b);return(null==a||"boolean"===typeof a?a:"number"===typeof a?!!a:void 0)??!1}function O(a,b){a=L(a,b);return(null==a||"string"===typeof a?a:void 0)??""};var Ja=class{constructor(a){a:{null==a&&(a=K);K=void 0;if(null==a){var b=96;a=[]}else{if(!Array.isArray(a))throw Error();b=a[D]|0;if(b&64)break a;var c=a;b|=64;var d=c.length;if(d&&(--d,G(c[d]))){b|=256;c=d-(+!!(b&512)-1);if(1024<=c)throw Error();b=b&-16760833|(c&1023)<<14}}a[D]=b}this.g=a}toJSON(){var a=Ea(this.g,Fa,void 0,void 0,!1,!1);return Ia(this,a,!0)}};Ja.prototype.Z=qa;Ja.prototype.toString=function(){return Ia(this,this.g,!1).toString()}; 
function Ia(a,b,c){const d=a.constructor.aa;var e=(c?a.g:b)[D],f=E(e),g=!1;if(d&&va){if(!c){b=Array.prototype.slice.call(b);var h;if(b.length&&G(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=a.g[D];a=E(h);h=+!!(h&512)-1;var k;for(let A=0;A<d.length;A++){var l=d[A];if(l<a){l+=h;var m=f[l];null==m?f[l]=c?H:pa():c&&m!==H&&oa(m)}else{if(!k){var n=void 0;f.length&&G(n=f[f.length-1])?k=n:f.push(k={})}m=k[l];null==k[l]?k[l]=c?H:pa():c&&m!==H&& 
oa(m)}}}k=b.length;if(!k)return b;let v,w;if(G(n=b[k-1])){a:{var r=n;f={};c=!1;for(var B in r){a=r[B];if(Array.isArray(a)){h=a;if(!ma&&wa(a,d,+B)||!la&&ua(a)&&0===a.size)a=null;a!=h&&(c=!0)}null!=a?f[B]=a:c=!0}if(c){for(let A in f){r=f;break a}r=null}}r!=n&&(v=!0);k--}for(e=+!!(e&512)-1;0<k;k--){B=k-1;n=b[B];if(!(null==n||!ma&&wa(n,d,B-e)||!la&&ua(n)&&0===n.size))break;w=!0}if(!v&&!w)return b;var I;g?I=b:I=Array.prototype.slice.call(b,0,k);b=I;g&&(b.length=k);r&&b.push(r);return b};var Ka=function(a){return b=>{if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);b[D]|=32;K=b;b=new a(b);K=void 0}return b}}(class extends Ja{});function La(a=window){return a};function P(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function Q(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)};var Ma=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Na(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}let R=[];const Oa=()=>{const a=R;R=[];for(const b of a)try{b()}catch{}};var Pa=(a,b)=>{"complete"===a.readyState||"interactive"===a.readyState?(R.push(b),1==R.length&&(window.Promise?Promise.resolve().then(Oa):window.setImmediate?setImmediate(Oa):setTimeout(Oa,0))):a.addEventListener("DOMContentLoaded",b)};function Qa(a=document){return a.createElement("img")};function Ra(a,b,c=null,d=!1){Sa(a,b,c,d)}function Sa(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=Qa(a.document);if(c||d){const f=g=>{c&&c(g);if(d){g=a.google_image_requests;const h=Array.prototype.indexOf.call(g,e,void 0);0<=h&&Array.prototype.splice.call(g,h,1)}Q(e,"load",f);Q(e,"error",f)};P(e,"load",f);P(e,"error",f)}e.src=b;a.google_image_requests.push(e)} 
function Ta(a,b){var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):Ra(a,b,void 0,!1)};let Ua=0;function Va(a){return(a=Wa(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Wa(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)};var ab=window;class bb{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const cb=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var db=class{constructor(a,b){this.g=a;this.i=b}},eb=class{constructor(a,b){this.url=a;this.W=!!b;this.depth=null}};let S=null;function fb(){const a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function gb(){const a=p.performance;return a&&a.now?a.now():null};var hb=class{constructor(a,b){var c=gb()||fb();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const T=p.performance,ib=!!(T&&T.mark&&T.measure&&T.clearMarks),U=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=ib){var b;if(null===S){S="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(S=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=S;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function jb(a){a&&T&&U()&&(T.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),T.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class kb{constructor(){var a=window;this.i=[];this.j=a||p;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.i=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=U()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new hb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;T&&U()&&T.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(gb()||fb())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;T&&U()&&T.mark(b);!this.g||2048< 
this.i.length||this.i.push(a)}}};function lb(a,b){const c={};c[a]=b;return[c]}function mb(a,b,c,d,e){const f=[];Na(a,function(g,h){(g=nb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)} 
function nb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(nb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(mb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function ob(a){let b=1;for(const c in a.i)b=c.length>b?c.length:b;return 3997-b-a.j.length-1} 
function pb(a,b){let c="https://pagead2.googlesyndication.com"+b,d=ob(a)-b.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});b=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.i[g];for(let k=0;k<h.length;k++){if(!d){b=null==b?g:b;break}let l=mb(h[k],a.j,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.j;break}b=null==b?g:b}}}a="";null!=b&&(a=e+"trn="+b);return c+a}class qb{constructor(){this.j="&";this.i={};this.l=0;this.g=[]}};function rb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b} 
function sb(a,b,c){let d,e;try{a.i&&a.i.g?(e=a.i.start(b.toString(),3),d=c(),a.i.end(e)):d=c()}catch(f){c=!0;try{jb(e),c=a.l(b,new bb(f,{message:rb(f)}),void 0,void 0)}catch(g){a.A(217,g)}if(c)window.console?.error?.(f);else throw f;}return d}function tb(a,b){var c=V;return(...d)=>sb(c,a,()=>b.apply(void 0,d))}function ub(a){var b=V;a.catch(c=>{c=c?c:"unknown rejection";b.A(967,c instanceof Error?c:Error(c),void 0,b.g||void 0)})} 
var xb=class{constructor(a=null){this.pinger=vb;this.i=a;this.g=null;this.j=!1;this.l=this.A}A(a,b,c,d,e){e=e||"jserror";let f;try{const F=new qb;var g=F;g.g.push(1);g.i[1]=lb("context",a);b.error&&b.meta&&b.id||(b=new bb(b,{message:rb(b)}));if(b.msg){let t=b.msg;null==t.substring&&(t=`b/320546888 ${typeof t} ${t}`);g=F;var h=t.substring(0,512);g.g.push(2);g.i[2]=lb("msg",h)}var k=b.meta||{};b=k;if(this.g)try{this.g(b)}catch(t){}if(d)try{d(b)}catch(t){}d=F;k=[k];d.g.push(3);d.i[3]=k;b=p;k=[];let da; 
h=null;do{var l=b;d=void 0;try{if(d=!!l&&null!=l.location.href)b:{try{ka(l.foo);d=!0;break b}catch(t){}d=!1}var m=d}catch{m=!1}m?(da=l.location.href,h=l.document&&l.document.referrer||null):(da=h,h=null);k.push(new eb(da||""));try{b=l.parent}catch(t){b=null}}while(b&&l!=b);for(let t=0,Xa=k.length-1;t<=Xa;++t)k[t].depth=Xa-t;l=p;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==k.length-1)for(m=1;m<k.length;++m){var n=k[m];n.url||(n.url=l.location.ancestorOrigins[m-1]|| 
"",n.W=!0)}var v=k;let sa=new eb(p.location.href,!1);l=null;const ta=v.length-1;for(n=ta;0<=n;--n){var w=v[n];!l&&cb.test(w.url)&&(l=w);if(w.url&&!w.W){sa=w;break}}w=null;const Pb=v.length&&v[ta].url;0!=sa.depth&&Pb&&(w=v[ta]);f=new db(sa,w);if(f.i){v=F;var r=f.i.url||"";v.g.push(4);v.i[4]=lb("top",r)}var B={url:f.g.url||""};if(f.g.url){var I=f.g.url.match(Ma),A=I[1],Ya=I[3],Za=I[4];r="";A&&(r+=A+":");Ya&&(r+="//",r+=Ya,Za&&(r+=":"+Za));var $a=r}else $a="";A=F;B=[B,{url:$a}];A.g.push(5);A.i[5]=B; 
wb(this.pinger,e,F,this.j,c)}catch(F){try{wb(this.pinger,e,{context:"ecmserr",rctx:a,msg:rb(F),url:f&&f.g.url},this.j,c)}catch(da){}}return!0}};class yb{};function wb(a,b,c,d=!1,e,f){if((d?a.g:Math.random())<(e||.01))try{let g;c instanceof qb?g=c:(g=new qb,Na(c,(k,l)=>{var m=g;const n=m.l++;k=lb(l,k);m.g.push(n);m.i[n]=k}));const h=pb(g,"/pagead/gen_204?id="+b+"&");h&&("undefined"!==typeof f?Ra(p,h,f):a.i?Ta(p,h):Ra(p,h))}catch(g){}}function zb(){var a=vb,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}class Ab{constructor(a=!1){this.i=a;this.g=Math.random()}};let vb,V;const W=new kb;var Bb=()=>{window.google_measure_js_timing||(W.g=!1,W.i!=W.j.google_js_reporting_queue&&(U()&&Array.prototype.forEach.call(W.i,jb,void 0),W.i.length=0))};(a=>{vb=a??new Ab;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());zb();V=new xb(W);V.g=b=>{const c=Ua;0!==c&&(b.jc=String(c),b.shv=Va(c))};V.j=!0;"complete"==window.document.readyState?Bb():W.g&&P(window,"load",()=>{Bb()})})(); 
var X=(a,b)=>tb(a,b),Cb=(a,b,c)=>{var d=yb;var e="V";d.V&&d.hasOwnProperty(e)||(e=new d,d.V=e);d=[];!b.eid&&d.length&&(b.eid=d.toString());wb(vb,a,b,!0,c,void 0)};class Db{constructor(){this.promise=new Promise(a=>{this.resolve=a})}};function Eb(a,b){b.google_llp||(b.google_llp={});b=b.google_llp;let c=b[a];if(c)return c;const {promise:d,resolve:e}=new Db;c={promise:d,resolve:e};return b[a]=c};async function Fb(){return Eb(10,p).promise};function Gb(){this.i=this.i;this.g=this.g}Gb.prototype.i=!1;function Hb(a,b){a.i?b():(a.g||(a.g=[]),a.g.push(b))};var Ib=class extends Gb{constructor(a){super();this.j=a;Hb(this,()=>{this.j.close()})}l(){this.j.postMessage([])}};function Y(a,b,c={}){c.msg_type=b;c.googMsgType="sth";b=JSON.stringify(c);a.parent.postMessage(b,"*")}function Jb(a){if(a.D||N(a.config,2))return!0;let b=!0;const c=Kb(a);c&&(b=36E5<=c);if(b)try{a.g.localStorage.removeItem("LAST_INTERSTITIAL_TIME")}catch(d){}return b} 
function Z(a,b,c){O(a.config,3)&&(b.qid=O(a.config,3));O(a.config,10)&&(b.eid=O(a.config,10));b.rtype=M(J(L(a.config,12)));b.req=a.g.location.href;if(N(a.config,28)){var d=wb;a.K||(a.K=new Ab(!0));d(a.K,a.F(),b,!0,c??.01)}else Cb(a.F(),b,c)}function Kb(a){try{const b=+a.g.localStorage.getItem("LAST_INTERSTITIAL_TIME"),c=Date.now();if(b&&b<c)return c-b}catch(b){}return null} 
function Lb(a){if(!N(a.config,27)){var b=M(Ba(L(a.config,26))),c=()=>{for(const d of a.l.document.getElementsByClassName("GoogleActiveViewElement"))d.removeAttribute("data-google-av-dm")};0<b?setTimeout(()=>c(),b):c();Z(a,{isfsapi:!!a.i,avp:fb()-a.X},.01)}} 
var Mb=class{constructor(a,b,c,d){this.g=a;this.l=b;this.s=!1;this.B=null;this.m=0;this.config=c;this.X=fb();this.K=null;N(c,29)?(a=a.parent,b=new MessageChannel,a.postMessage(JSON.stringify({googMsgType:"sth",msg_type:"i-hai-aux"}),"*",[b.port2]),a=new Ib(b.port1)):a=null;this.Y=a;this.D=N(this.config,11)||10===M(J(L(this.config,12)))||11===M(J(L(this.config,12)));this.i=d;d?.enableCustomCloseButton()}F(){}I(){(this.s=Jb(this))?(this.J(),O(this.config,1)&&this.g.parent.postMessage(O(this.config, 
1),"*")):this.i?.notifyError("freq_cap")}u(){if(!this.m){this.B&&Q(this.g,"storage",this.B);this.m=Date.now();if(!N(this.config,2)&&!this.D)try{this.g.localStorage.setItem("LAST_INTERSTITIAL_TIME",""+this.m)}catch(b){}this.U();if(this.l){var a=this.g.document.createEvent("Event");a.initEvent("i-creative-view",!0,!1);this.l.dispatchEvent(a);a=this.g.document.createEvent("Event");a.initEvent("onshow",!0,!1);this.g.dispatchEvent(a)}}}G(){}J(){let a=!1;if(this.i){const b=this.i.waitForOnShow().then(()=> 
{this.u();Lb(this)});ub(b);this.i.listenToBackButton(()=>{this.G()})}else this.g.IntersectionObserver&&.01<M(Ha(this.config))&&(a=!0,(new this.g.IntersectionObserver((b,c)=>{b.forEach(d=>{0>=d.intersectionRatio||(this.u(),Lb(this),c.disconnect())})},{threshold:M(Ha(this.config))})).observe(this.g.document.documentElement));P(this.g,"message",X(262,b=>{a:{var c=a;if(b&&(this.g.parent==b.source||this.g.parent.parent==b.source)){var d={};try{d=this.g.JSON.parse(b.data)}catch(e){b=void 0;break a}switch(d?.msg_type){case "i-view":this.s&& 
!c&&this.u();Z(this,{type:"viewmsg",has_iobs:!!this.g.IntersectionObserver});break;case "r-back-button":null==this.i&&this.G()}}b=void 0}return b}));this.D||(this.B=X(263,()=>{this.s=Jb(this);if(!this.s){var b={i_tslv:Kb(this)};Y(this.g,"i-no",b)}}),P(this.g,"storage",this.B));this.i||Y(this.g,"i-adframe-load")}U(a){let b;try{const c=La(this.l);c.vv?c.vv():b=!0}catch(c){V.A(533,c,void 0,void 0);return}a=a||1;b?(Z(this,{vf:a}),3<=a||this.g.setTimeout(q(Mb.prototype.U,this,a+1),3E3)):1<a&&Z(this,{vs:a})}};function Nb(a){window.parent.postMessage(JSON.stringify({type:"rewarded",message:a}),"*")};function Ob(a){a=a.document;let b={};a&&(b="CSS1Compat"==a.compatMode?a.documentElement:a.body);return b||{}};function Qb(a,b,c){a={context:"iaf::itf",req:ab.location.href,db:a?1:0,ls:b?1:0,eid:O(c,10),qid:O(c,3),rtype:M(J(L(c,12)))};Cb("jserror",a)}function Rb(a,b){Sb(a,b)&&(a.j.style.background="rgba(192,192,192, .3)",p.setTimeout(()=>{a.j.style.background="transparent";a.dismiss(2)},750))}function Tb(a,b){b.some(c=>"intervention"===c.type&&"HeavyAdIntervention"===c.body?.id)&&(Z(a,{hai:"1"},1),a.Y?.l(),a.m?a.dismiss(8):a.i?a.i.notifyError("heavy_ads"):Y(a.g,"i_iif"))} 
function Ub(a){const b=X(259,q(function(){Y(this.g,"i-blur");Q(this.g,"blur",b)},a));P(a.g,"blur",b)}function Vb(a){a.o||0===a.m||(a.j.setAttribute("aria-label",O(a.config,7)),a.j.setAttribute("role","button"),a.j.setAttribute("tabindex","0"),a.j.focus())}function Wb(a,b){N(a.config,15)?(Nb("canceled"),Nb("closed")):a.i?a.i.closeAd():Y(a.g,b)} 
function Xb(a,b){const c=a.g.document.getElementById("creative");a.g.goog_vignette_survey&&(a.g.goog_vignette_survey.display(c,()=>{a.dismiss(3)},()=>{},1),b&&b.stopPropagation())}function Yb(a){!1===a.o&&a.enableDismissListeners();a.T&&P(a.T,"click",X(261,c=>Xb(a,c)));const b=a.g.document.getElementById("card");b&&b.addEventListener("click",X(909,c=>{c?.stopPropagation()}))} 
function Zb(a){P(a.g,"resize",()=>{var b=a.g;b=b.innerHeight>=b.innerWidth?1:2;a.H?(a.H=!1,a.M=2===b):(a.M?1===b:2===b)&&a.dismiss(4)})}function $b(a){a.g.addEventListener("message",b=>{if(b.source===a.l)try{const c=JSON.parse(b.data);"rewarded"===c.type&&"closed"===c.message&&a.dismiss(11===M(J(L(a.config,12)))?6:1)}catch(c){}})} 
function Sb(a,b){if(!b)return!0;if((b.preventDefault?b.defaultPrevented:!1===b.returnValue)||b.target&&b.target.ownerDocument==a.l.document)return!1;for(a=b.target;a;){if("creative"==a.id)return!1;a=a.parentElement}return!0} 
var ac=class extends Mb{constructor(a,b,c,d,e,f){super(a,b,e,f);this.j=c;this.T=d;this.N=0;this.R=X(260,g=>{this.dismiss(1);g&&g.stopPropagation()});this.P=g=>Rb(this,g);this.L=[];this.C=[];this.o=!1;this.O=()=>{};this.H=this.M=!1;this.v=null}I(){super.I();(this.v=this.g.ReportingObserver?new this.g.ReportingObserver((a,b)=>{Tb(this,a)&&b.disconnect()},{buffered:!0}):null)&&P(this.g,"pagehide",()=>{Tb(this,this.v.takeRecords());this.v.disconnect()})}F(){return"ia_evt"}G(){this.o?this.O():this.dismiss(9)}addViewListener(a){a= 
tb(483,a);this.m?a():this.L.push(a)}addDismissListener(a){this.C.push(tb(484,a))}disableDismissListeners(a){this.o=!0;this.O=a;Q(this.j,"click",this.R);Q(this.g.document,"click",this.P)}enableDismissListeners(){this.o=!1;P(this.j,"click",this.R);P(this.g.document,"click",this.P);Vb(this)}dismiss(a){document.body.setAttribute("aria-hidden","true");Z(this,{ttd:Date.now()-this.m,req:ab.location.href,pda:this.N,ds:a,idrw:N(this.config,15)?1:0});this.N++||Ub(this);let b=0;for(let d=0;d<this.C.length;d++)b= 
Math.max(b,this.C[d]());b=Math.min(b,1E3);let c="i-dismiss";6===a?c="r-dismiss-before-reward":7===a&&(c="r-dismiss-after-reward");0===b?Wb(this,c):p.setTimeout(()=>Wb(this,c),b)}J(){super.J();Yb(this)}u(){super.u();var a=this.g;this.M=2===(a.innerHeight>=a.innerWidth?1:2);this.H=0===this.g.innerWidth&&0===this.g.innerHeight;Zb(this);Vb(this);var b=this.j.getBoundingClientRect(),c=b.bottom,d=b.right;a=Ob(this.g).clientHeight;var e=Ob(this.g).clientWidth;const f=Math.floor(c-a),g=Math.floor(d-e);if(0<= 
f||5<g)c-=b.top,d-=b.left,b=this.g,Z(this,{dhb:f>=c?1:0,dhr:g>=d?1:0,h:a,w:e,bh:c,bw:d,opb:f,opr:g,pt:b.innerHeight>=b.innerWidth?1:0,req:this.g.location.href});this.l.postMessage(JSON.stringify({type:"rewarded",message:"visible"}),"*");for(a=0;a<this.L.length;a++)this.L[a]();$b(this);.01<Math.random()||(a=Wa(24,document.currentScript),a=`https://${a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${24}&version=${Va(24)}&sample=${.01}`, 
Ta(window,a));a=this.g.navigator?!0===this.g.navigator.standalone:!1;e=window.matchMedia("(display-mode: standalone)").matches;Z(this,{wapp:a||e})}};Ua=24;const bc=Wa(24,document.currentScript);if(null==bc)throw Error("JSC not found 24");const cc={},dc=bc.attributes;for(let a=dc.length-1;0<=a;a--){const b=dc[a].name;0===b.indexOf("data-jcp-")&&(cc[b.substring(9)]=dc[a].value)} 
(async function(a){var b=window;const c=Ka(a.config),d=X(258,async()=>{var e=null;N(c,25)&&(e=await Fb());{var f=b.document.getElementById("ad_iframe").contentWindow;var g=b.document;const k=f.document;var h=L(c,5);const l=(null==h?h:Number.isFinite(h)?h|0:void 0)??0;h=0===l||2===l?k.getElementById(O(c,6)):g.getElementById(O(c,6));g=0===l?k.getElementById(O(c,8)):g.getElementById(O(c,8));let m;try{m=!!b.localStorage}catch(n){}h?(m||Qb(h,m,c),f=new ac(b,f,h,g,c,e),f.I()):(Qb(h,m,c),e?e.notifyError("no_dismiss_button"): 
Y(b,"i_iif"),f=null)}b.interstitialAdFrame=f;Eb(9,b).resolve(f)});a=b.document.getElementById("ad_iframe");null!=a.contentDocument&&Pa(a.contentDocument,()=>void d())})(cc);}).call(this);