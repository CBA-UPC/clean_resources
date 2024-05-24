(function(sttc){'use strict';var p,aa={};/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var u=this||self;function ba(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}function ca(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}function da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function w(a){return Object.prototype.hasOwnProperty.call(a,ea)&&a[ea]||(a[ea]=++fa)}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0;function ha(a,b,c){return a.call.apply(a.bind,arguments)} 
function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function y(a,b,c){y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return y.apply(null,arguments)} 
function ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function ka(a){return a};var la;function ma(a){u.setTimeout(()=>{throw a;},0)};var na,qa;a:{for(var ra=["CLOSURE_FLAGS"],sa=u,ta=0;ta<ra.length;ta++)if(sa=sa[ra[ta]],null==sa){qa=null;break a}qa=sa}var ua=qa&&qa[610401301];na=null!=ua?ua:!1;function va(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}var wa;const xa=u.navigator;wa=xa?xa.userAgentData||null:null;function ya(a){return na?wa?wa.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function z(a){return-1!=va().indexOf(a)};function za(){return na?!!wa&&0<wa.brands.length:!1}function Aa(){return za()?!1:z("Trident")||z("MSIE")}function Ba(){!z("Safari")||Ca()||(za()?0:z("Coast"))||(za()?0:z("Opera"))||(za()?0:z("Edge"))||(za()?ya("Microsoft Edge"):z("Edg/"))||za()&&ya("Opera")}function Ca(){return za()?ya("Chromium"):(z("Chrome")||z("CriOS"))&&!(za()?0:z("Edge"))||z("Silk")};function Da(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(let c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1}function Ea(a,b){const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)}function Fa(a,b){const c=a.length,d=[];let e=0;const f="string"===typeof a?a.split(""):a;for(let g=0;g<c;g++)if(g in f){const h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d} 
function Ga(a,b){const c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a;for(let f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d}function Ha(a,b){const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1}function Ia(a,b){return 0<=Da(a,b)}function Ja(a){const b=a.length;if(0<b){const c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return[]} 
function Ka(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ca(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}function La(a,b){b=b||Math.random;for(let c=a.length-1;0<c;c--){const d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}};function Ma(a){Ma[" "](a);return a}Ma[" "]=function(){};var Na=za()?!1:z("Opera"),Oa=Aa(),Pa=z("Edge"),Qa=z("Gecko")&&!(-1!=va().toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),Ra=-1!=va().toLowerCase().indexOf("webkit")&&!z("Edge");function Sa(){var a=u.document;return a?a.documentMode:void 0}var Ta; 
a:{var Ua="",Va=function(){var a=va();if(Qa)return/rv:([^\);]+)(\)|;)/.exec(a);if(Pa)return/Edge\/([\d\.]+)/.exec(a);if(Oa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ra)return/WebKit\/(\S+)/.exec(a);if(Na)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Va&&(Ua=Va?Va[1]:"");if(Oa){var Wa=Sa();if(null!=Wa&&Wa>parseFloat(Ua)){Ta=String(Wa);break a}}Ta=Ua}var Xa=Ta,Ya;if(u.document&&Oa){var Za=Sa();Ya=Za?Za:parseInt(Xa,10)||void 0}else Ya=void 0;var $a=Ya;!z("Android")||Ca();Ca();Ba();let ab=0,bb=0;function cb(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);if(b){b=c;c=~a;b?b=~b+1:c+=1;const [d,e]=[b,c];a=e;c=d}ab=c>>>0;bb=a>>>0}function db(){var a=ab,b=bb;if(b&2147483648)var c=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0));else b>>>=0,a>>>=0,2097151>=b?c=""+(4294967296*b+a):c=""+(BigInt(b)<<BigInt(32)|BigInt(a));return c};function eb(a){return Array.prototype.slice.call(a)};var B=Symbol();function C(a,b,c){return c?a|b:a&~b}var fb=(a,b)=>{a[B]=b;return a};function gb(a,b){fb(b,(a|0)&-14591)}function hb(a,b){fb(b,(a|34)&-14557)}function ib(a){a=a>>14&1023;return 0===a?536870912:a};var kb={},lb={};function mb(a){return!(!a||"object"!==typeof a||a.g!==lb)}function nb(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let ob;function pb(a,b,c){if(!Array.isArray(a)||a.length)return!1;const d=a[B]|0;if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;fb(a,d|1);return!0}var qb;const rb=[];fb(rb,55);qb=Object.freeze(rb);function sb(a){if(a&2)throw Error();}class tb{}class ub{}Object.freeze(new tb);Object.freeze(new ub);let vb;function wb(a){if(vb)throw Error("");vb=a}function xb(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";if(vb)try{vb(a)}catch(b){throw b.cause=a,b;}return a};const yb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function zb(a){const b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:yb.test(a)}function Ab(a){if(null!=a){if(!Number.isFinite(a))throw xb("enum");a|=0}return a}function Bb(a){return null==a?a:Number.isFinite(a)?a|0:void 0}function Cb(a){if("number"!==typeof a)throw xb("int32");if(!Number.isFinite(a))throw xb("int32");return a|0} 
function Db(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}function Eb(a){if(null!=a){var b=!!b;if(!zb(a))throw xb("int64");"string"===typeof a?a=Fb(a):b?(a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Gb(b)?a=b:(cb(a),a=db()))):a=Hb(a)}return a}function Gb(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))} 
function Hb(a){a=Math.trunc(a);if(!Number.isSafeInteger(a)){cb(a);var b=ab,c=bb;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}function Fb(a){var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));Gb(a)||(16>a.length?cb(Number(a)):(a=BigInt(a),ab=Number(a&BigInt(4294967295))>>>0,bb=Number(a>>BigInt(32)&BigInt(4294967295))),a=db());return a} 
function Ib(a){if("string"!==typeof a)throw Error();return a}function Jb(a){if(null!=a&&"string"!==typeof a)throw Error();return a}function Kb(a){return null==a||"string"===typeof a?a:void 0}function Lb(a,b,c){if(null!=a&&"object"===typeof a&&a.Ib===kb)return a;if(Array.isArray(a)){var d=a[B]|0,e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&fb(a,e);return new b(a)}};let Mb;function Nb(a,b){Mb=b;a=new a(b);Mb=void 0;return a};function Ob(a,b){return Pb(b)}function Pb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(pb(a,void 0,0))return}else if(null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}}return a};function Qb(a,b,c){a=eb(a);var d=a.length;const e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(const f in e)Object.prototype.hasOwnProperty.call(e,f)&&(b[f]=c(e[f]))}return a}function Rb(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=pb(a,void 0,0)?void 0:e&&(a[B]|0)&2?a:Sb(a,b,c,void 0!==d,e);else if(nb(a)){const f={};for(let g in a)Object.prototype.hasOwnProperty.call(a,g)&&(f[g]=Rb(a[g],b,c,d,e));a=f}else a=b(a,d);return a}} 
function Sb(a,b,c,d,e){const f=d||c?a[B]|0:0;d=d?!!(f&32):void 0;a=eb(a);for(let g=0;g<a.length;g++)a[g]=Rb(a[g],b,c,d,e);c&&c(f,a);return a}function Tb(a){return a.Ib===kb?a.toJSON():Pb(a)};function Ub(a,b,c=hb){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[B]|0;if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?fb(a,(d|34)&-12293):Sb(a,Ub,d&4?hb:c,!0,!0)}a.Ib===kb&&(c=a.aa,d=c[B],a=d&2?a:Nb(a.constructor,Vb(c,d,!0)));return a}}function Vb(a,b,c){const d=c||b&2?hb:gb,e=!!(b&32);a=Qb(a,b,f=>Ub(f,e,d));a[B]=a[B]|32|(c?2:0);return a}function Wb(a){const b=a.aa,c=b[B];return c&2?Nb(a.constructor,Vb(b,c,!1)):a};function Xb(a,b){a=a.aa;return Yb(a,a[B],b)}function Yb(a,b,c,d){if(-1===c)return null;if(c>=ib(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}function Zb(a,b,c){const d=a.aa;let e=d[B];sb(e);$b(d,e,b,c);return a} 
function $b(a,b,c,d,e){const f=ib(b);if(c>=f||e){let g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&fb(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}function ac(a,b){a=Xb(a,b);return null==a||"boolean"===typeof a?a:"number"===typeof a?!!a:void 0} 
function bc(a,b,c){a=a.aa;let d=a[B];const e=2&d?1:2;let f=cc(a,d,b);var g=f[B]|0;if(!(4&g)){if(4&g||Object.isFrozen(f))f=eb(f),g=dc(g,d,!1),d=$b(a,d,b,f);var h=0;let k=0;for(;h<f.length;h++){const l=c(f[h]);null!=l&&(f[k++]=l)}k<h&&(f.length=k);g=ec(g,d);g=C(g,20,!0);g=C(g,4096,!1);g=C(g,8192,!1);fb(f,g);2&g&&Object.freeze(f)}fc(g)||(c=g,(h=1===e)?g=C(g,2,!0):g=C(g,32,!1),g!==c&&fb(f,g),h&&Object.freeze(f));2===e&&fc(g)&&(f=eb(f),g=dc(g,d,!1),fb(f,g),$b(a,d,b,f));return f} 
function cc(a,b,c){a=Yb(a,b,c);return Array.isArray(a)?a:qb}function ec(a,b){var c=!1;0===a&&(a=dc(a,b,c));return a=C(a,1,!0)}function fc(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}function gc(a,b,c,d){const e=a.aa;let f=e[B];sb(f);if(null==c)return $b(e,f,b),a;let g=c[B]|0,h=g;var k=!!(2&g)||Object.isFrozen(c);const l=!k&&!1;if(!(4&g))for(g=21,k&&(c=eb(c),h=0,g=dc(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(c=eb(c),h=0,g=dc(g,f,!0));g!==h&&fb(c,g);$b(e,f,b,c);return a} 
function hc(a,b,c,d){const e=a.aa;let f=e[B];sb(f);$b(e,f,b,("0"===d?0===Number(c):c===d)?void 0:c);return a}function ic(a,b,c,d){const e=a.aa;let f=e[B];sb(f);(c=jc(e,f,c))&&c!==b&&null!=d&&(f=$b(e,f,c));$b(e,f,b,d);return a}function jc(a,b,c){let d=0;for(let e=0;e<c.length;e++){const f=c[e];null!=Yb(a,b,f)&&(0!==d&&(b=$b(a,b,d)),d=f)}return d}function kc(a,b,c){a=a.aa;let d=a[B];const e=Yb(a,d,c,!1);b=Lb(e,b,d);b!==e&&null!=b&&$b(a,d,c,b,!1);return b} 
function lc(a,b,c){b=kc(a,b,c);if(null==b)return b;a=a.aa;let d=a[B];if(!(d&2)){const e=Wb(b);e!==b&&(b=e,$b(a,d,c,b,!1))}return b} 
function mc(a,b,c){a=a.aa;var d=a[B],e=d,f=!(2&d),g=!!(2&e),h=g?1:2;d=1===h;h=2===h;f&&(f=!g);g=cc(a,e,c);var k=g[B]|0;const l=!!(4&k);if(!l){k=ec(k,e);var m=g,n=e;const q=!!(2&k);q&&(n=C(n,2,!0));let r=!q,t=!0,v=0,A=0;for(;v<m.length;v++){const D=Lb(m[v],b,n);if(D instanceof b){if(!q){const J=!!((D.aa[B]|0)&2);r&&(r=!J);t&&(t=J)}m[A++]=D}}A<v&&(m.length=A);k=C(k,4,!0);k=C(k,16,t);k=C(k,8,r);fb(m,k);q&&Object.freeze(m)}b=!!(8&k)||d&&!g.length;if(f&&!b){fc(k)&&(g=eb(g),k=dc(k,e,!1),e=$b(a,e,c,g)); 
b=g;f=k;for(m=0;m<b.length;m++)k=b[m],n=Wb(k),k!==n&&(b[m]=n);f=C(f,8,!0);f=C(f,16,!b.length);fb(b,f);k=f}fc(k)||(b=k,d?k=C(k,!g.length||16&k&&(!l||32&k)?2:2048,!0):k=C(k,32,!1),k!==b&&fb(g,k),d&&Object.freeze(g));h&&fc(k)&&(g=eb(g),k=dc(k,e,!1),fb(g,k),$b(a,e,c,g));return g}function nc(a,b,c){null==c&&(c=void 0);return Zb(a,b,c)}function oc(a,b,c,d){null==d&&(d=void 0);return ic(a,b,c,d)}function dc(a,b,c){a=C(a,2,!!(2&b));a=C(a,32,!!(32&b)&&c);return a=C(a,2048,!1)} 
function pc(a,b){return Db(Xb(a,b))}function qc(a,b){return Kb(Xb(a,b))}function rc(a,b,c=!1){return ac(a,b)??c}function sc(a,b){a=Xb(a,b);var c;null==a?c=a:zb(a)?"number"===typeof a?c=Hb(a):c=Fb(a):c=void 0;return c??0};var F=class{constructor(a){a:{null==a&&(a=Mb);Mb=void 0;if(null==a){var b=96;a=[]}else{if(!Array.isArray(a))throw Error();b=a[B]|0;if(b&64)break a;var c=a;b|=64;var d=c.length;if(d&&(--d,nb(c[d]))){b|=256;c=d-(+!!(b&512)-1);if(1024<=c)throw Error();b=b&-16760833|(c&1023)<<14}}fb(a,b)}this.aa=a}toJSON(){return ob?tc(this,this.aa,!1):tc(this,Sb(this.aa,Tb,void 0,void 0,!1),!0)}};F.prototype.Ib=kb; 
function tc(a,b,c){const d=a.constructor.Ha,e=(c?a.aa:b)[B];a=b.length;if(!a)return b;let f,g;if(nb(c=b[a-1])){a:{var h=c;let m={},n=!1;for(var k in h){if(!Object.prototype.hasOwnProperty.call(h,k))continue;let q=h[k];if(Array.isArray(q)){let r=q;if(pb(q,d,+k)||mb(q)&&0===q.size)q=null;q!=r&&(n=!0)}null!=q?m[k]=q:n=!0}if(n){for(var l in m){h=m;break a}h=null}}h!=c&&(f=!0);a--}for(k=+!!(e&512)-1;0<a;a--){l=a-1;c=b[l];l-=k;if(!(null==c||pb(c,d,l)||mb(c)&&0===c.size))break;g=!0}if(!f&&!g)return b;b= 
Array.prototype.slice.call(b,0,a);h&&b.push(h);return b};function uc(a,b){const c=vc;vc=void 0;if(!b(a))throw b=c?c()+"\n":"",Error(b+String(a));}function wc(a){uc(a,xc);return a}let vc=void 0;function yc(a){return b=>{if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);b[B]|=32;b=Nb(a,b)}return b}};var zc=class{constructor(a,b=!1){this.g=a;this.defaultValue=b}},Ac=class{constructor(){this.defaultValue=250}};var Bc=new zc(590317302),Cc=new zc(597667424);function Dc(){return!1}function Ec(){return!0}function Fc(a){return function(){return!a.apply(this,arguments)}}function Gc(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}function Hc(a){let b=a;return function(){if(b){const c=b;b=null;c()}}}function Ic(a){function b(){d=u.setTimeout(c,100);let g=f;f=[];a.apply(void 0,g)}function c(){d=0;e&&(e=!1,b())}let d=0,e=!1,f=[];return function(g){f=arguments;d?e=!0:b()}};var Jc={capture:!0},Kc={passive:!0},Lc=Gc(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});u.addEventListener("test",null,b)}catch(b){}return a});function Mc(a){return a?a.passive&&Lc()?a:a.capture||!1:!1}function G(a,b,c,d){return a.addEventListener?(a.addEventListener(b,c,Mc(d)),!0):!1}function H(a,b,c,d){return a.removeEventListener?(a.removeEventListener(b,c,Mc(d)),!0):!1};var I=a=>{var b="Gb";if(a.Gb&&a.hasOwnProperty(b))return a.Gb;b=new a;return a.Gb=b};var Oc=class{constructor(){const a={};this.j=(b,c)=>null!=a[b]?a[b]:c;this.l=(b,c)=>null!=a[b]?a[b]:c;this.A=(b,c)=>null!=a[b]?a[b]:c;this.B=(b,c)=>null!=a[b]?a[b]:c;this.g=()=>{}}};function K(a){return I(Oc).j(a.g,a.defaultValue)};var Pc=Oa||Ra;var Qc;function Rc(){if(void 0===Qc){var a=null,b=u.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ka,createScript:ka,createScriptURL:ka})}catch(c){u.console&&u.console.error(c.message)}Qc=a}else Qc=a}return Qc};var Sc=class{constructor(a){this.g=a}toString(){return this.g+""}},Tc={};function Uc(a){const b=Rc();a=b?b.createScriptURL(a):a;return new Sc(a,Tc)};var Vc=class{constructor(a){this.g=a}toString(){return this.g.toString()}},Wc={},Xc=new Vc("about:invalid#zClosurez",Wc);const Yc={};function Zc(){var a=$c`* { pointer-events: none; }`;return a instanceof ad&&a.constructor===ad?a.g:"type_error:SafeStyleSheet"}class ad{constructor(a){this.g=a}toString(){return this.g.toString()}};const bd={};function cd(a){return a instanceof dd&&a.constructor===dd?a.g:"type_error:SafeHtml"}class dd{constructor(a){this.g=a}toString(){return this.g.toString()}}var ed=new dd(u.trustedTypes&&u.trustedTypes.emptyHTML||"",bd);var fd=Gc(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=cd(ed);return!b.parentElement});function gd(a){return Array.prototype.reduce.call(arguments,function(b,c){return b+c},0)}function hd(a){return gd.apply(null,arguments)/arguments.length};function M(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}function id(a,b){return new M(a.x-b.x,a.y-b.y)}M.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};M.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};M.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function jd(a,b){this.width=a;this.height=b}p=jd.prototype;p.aspectRatio=function(){return this.width/this.height};p.isEmpty=function(){return!(this.width*this.height)};p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function kd(a,b){const c={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};let d;d=b?b.createElement("div"):u.document.createElement("div");return a.replace(ld,function(e,f){var g=c[e];if(g)return g;"#"==f.charAt(0)&&(f=Number("0"+f.slice(1)),isNaN(f)||(g=String.fromCharCode(f)));if(!g){g=e+" ";g=(f=Rc())?f.createHTML(g):g;g=new dd(g,bd);if(fd())for(;d.lastChild;)d.removeChild(d.lastChild);d.innerHTML=cd(g);g=d.firstChild.nodeValue.slice(0,-1)}return c[e]=g})}var ld=/&([^;\s<&]+);?/g; 
function md(a){let b=0;for(let c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}function nd(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}function od(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})};function pd(a){return a?new qd(rd(a)):la||(la=new qd)}function sd(a){a=a.document;a=td(a)?a.documentElement:a.body;return new jd(a.clientWidth,a.clientHeight)}function ud(a){var b=a.document,c=0;if(b){c=b.body;var d=b.documentElement;if(!d||!c)return 0;a=sd(a).height;if(td(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}}return c} 
function vd(a){return a?a.parentWindow||a.defaultView:window}function wd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function td(a){return"CSS1Compat"==a.compatMode}function xd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a} 
function rd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function yd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}function qd(a){this.g=a||u.document||document}function zd(a,b){return wd(a.g,b)}qd.prototype.contains=xd;function Ad(){return na&&wa?wa.mobile:!Bd()&&(z("iPod")||z("iPhone")||z("Android")||z("IEMobile"))}function Bd(){return na&&wa?!wa.mobile&&(z("iPad")||z("Android")||z("Silk")):z("iPad")||z("Android")&&!z("Mobile")||z("Silk")};var Cd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
class Dd{constructor(a){this.Vc=a}}function Ed(a){return new Dd(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Fd=[Ed("data"),Ed("http"),Ed("https"),Ed("mailto"),Ed("ftp"),new Dd(a=>/^[^:]*([/?#]|$)/.test(a))];function Gd(a,b=Fd){if(a instanceof Vc)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Dd&&d.Vc(a))return new Vc(a,Wc)}};function Hd(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ma(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch{return!1}}function Id(a){return Hd(a.top)?a.top:null} 
function Jd(a,b){const c=Kd("SCRIPT",a);c.src=b instanceof Sc&&b.constructor===Sc?b.g:"type_error:TrustedResourceUrl";(void 0)?.ae||(b=(b=(c.ownerDocument&&c.ownerDocument.defaultView||window).document.querySelector?.("script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&c.setAttribute("nonce",b);(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(c,a)}function Ld(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle} 
function Md(){if(!globalThis.crypto)return Math.random();try{const a=new Uint32Array(1);globalThis.crypto.getRandomValues(a);return a[0]/65536/65536}catch{return Math.random()}}function Nd(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}function Od(a){const b=[];Nd(a,function(c){b.push(c)});return b}var Pd=/^([0-9.]+)px$/,Qd=/^(-?[0-9.]{1,30})$/;function Rd(a){if(!Qd.test(a))return null;a=Number(a);return isNaN(a)?null:a} 
function Sd(a){return(a=Pd.exec(a))?+a[1]:null} 
var Td=Gc(()=>Ad()?2:Bd()?1:0),N=(a,b)=>{Nd(b,(c,d)=>{a.style.setProperty(d,c,"important")})},Ud=(a,b)=>{for(a=[a];a.length;){var c=a.shift();!1!==b(c)&&(c=Fa(c.children||c.childNodes||[],d=>1===d.nodeType),c.length&&a.unshift(...c))}},Wd=(a,b)=>{if("length"in a.style){a=a.style;const c=a.length;for(let d=0;d<c;d++){const e=a[d];b(a[e],e,a)}}else a=Vd(a.style.cssText),Nd(a,b)},Vd=a=>{const b={};if(a){const c=/\s*:\s*/;Ea((a||"").split(/\s*;\s*/),d=>{if(d){var e=d.split(c);d=e[0];e=e[1];d&&e&&(b[d.toLowerCase()]= 
e)}})}return b},Xd=(a,b=()=>!0)=>{const c=/!\s*important/i;Wd(a,(d,e)=>{!c.test(d)&&b(e,d)?a.style.setProperty(e,d,"important"):c.test(d)&&!b(e,d)&&a.style.setProperty(e,d,"")})};const Yd={["http://googleads.g.doubleclick.net"]:!0,["http://pagead2.googlesyndication.com"]:!0,["https://googleads.g.doubleclick.net"]:!0,["https://pagead2.googlesyndication.com"]:!0},Zd=/\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,$d=/.*domain\.test$/,ae=/\.prod\.google\.com(:\d+)?$/; 
var be=a=>Yd[a]||Zd.test(a)||$d.test(a)||ae.test(a),ce=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};function Kd(a,b=document){return b.createElement(String(a).toLowerCase())} 
var de=a=>{if(K(Bc)||Ca()&&Ad()){var b=Id(a);if(b){a=0===Td();var c=!!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),d=b.innerWidth;b=b.outerWidth;if(0===d)a=1;else{var e=Math.round(100*(b/d+Number.EPSILON))/100;a=1===e?1:a||c?e:Math.round(100*(b/d/.4+Number.EPSILON))/100}}else a=1}else a=1;return a};function ee(a,b,c=null,d=!1,e=!1){fe(a,b,c,d,e)}function fe(a,b,c,d,e=!1){a.google_image_requests||(a.google_image_requests=[]);const f=Kd("IMG",a.document);if(c||d){const g=h=>{c&&c(h);if(d){h=a.google_image_requests;const k=Da(h,f);0<=k&&Array.prototype.splice.call(h,k,1)}H(f,"load",g);H(f,"error",g)};G(f,"load",g);G(f,"error",g)}e&&(f.attributionSrc="");f.src=b;a.google_image_requests.push(f)} 
var he=a=>{let b="https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";Nd(a,(c,d)=>{if(c||0===c)b+=`&${d}=${encodeURIComponent(""+c)}`});ge(b)},ge=a=>{var b=window;b.fetch?b.fetch(a,{keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"}):ee(b,a,void 0,!1,!1)};function ie(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}p=ie.prototype;p.getWidth=function(){return this.right-this.left};p.getHeight=function(){return this.bottom-this.top};function je(a){return new ie(a.top,a.right,a.bottom,a.left)}p.contains=function(a){return this&&a?a instanceof ie?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1}; 
p.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};p.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};p.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function $c(a){return new ad(a[0],Yc)};function ke(a,...b){if(0===b.length)return Uc(a[0]);let c=a[0];for(let d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Uc(c)};function O(a,b,c){if("string"===typeof b)(b=le(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=le(c,d);f&&(c.style[f]=e)}}var me={};function le(a,b){var c=me[b];if(!c){var d=nd(b);c=d;void 0===a.style[d]&&(d=(Ra?"Webkit":Qa?"Moz":Oa?"ms":null)+od(d),void 0!==a.style[d]&&(c=d));me[b]=c}return c}function ne(a,b){var c=rd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""} 
function oe(a,b){return ne(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function pe(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}} 
function qe(a){var b=rd(a),c=new M(0,0);var d=b?rd(b):document;d=!Oa||9<=Number($a)||td(pd(d).g)?d.documentElement:d.body;if(a==d)return c;a=pe(a);d=pd(b).g;b=d.scrollingElement?d.scrollingElement:!Ra&&td(d)?d.documentElement:d.body||d.documentElement;d=d.parentWindow||d.defaultView;b=Oa&&d.pageYOffset!=b.scrollTop?new M(b.scrollLeft,b.scrollTop):new M(d.pageXOffset||b.scrollLeft,d.pageYOffset||b.scrollTop);c.x=a.left+b.x;c.y=a.top+b.y;return c} 
function re(a){if(1==a.nodeType)return a=pe(a),new M(a.left,a.top);a=a.changedTouches?a.changedTouches[0]:a;return new M(a.clientX,a.clientY)}function se(a,b){if(b instanceof jd){var c=b.height;b=b.width}else throw Error("missing height argument");a.style.width=te(b,!0);a.style.height=te(c,!0)}function te(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a} 
function ue(a){var b=ve;if("none"!=oe(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}function ve(a){var b=a.offsetWidth,c=a.offsetHeight,d=Ra&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=pe(a),new jd(a.right-a.left,a.bottom-a.top)):new jd(b,c)} 
function we(a,b){var c=a.currentStyle?a.currentStyle[b]:null;if(c)if(/^\d+px?$/.test(c))a=parseInt(c,10);else{b=a.style.left;var d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=b;a.runtimeStyle.left=d;a=+c}else a=0;return a} 
function xe(a,b){if(Oa){var c=we(a,b+"Left"),d=we(a,b+"Right"),e=we(a,b+"Top");a=we(a,b+"Bottom");return new ie(e,d,a,c)}c=ne(a,b+"Left");d=ne(a,b+"Right");e=ne(a,b+"Top");a=ne(a,b+"Bottom");return new ie(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))};var ye=a=>"number"===typeof a&&0<a;class ze{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Ae=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Be=class{constructor(a,b){this.g=a;this.j=b}},Ce=class{constructor(a,b){this.url=a;this.Wb=!!b;this.depth=null}};let De=null;function Ee(){const a=u.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Fe(a=u){return(a=a.performance)&&a.now?a.now():null}function Ge(a,b=u){return b.performance?.timing?.[a]||0}function He(a=u){const b=Math.min(Ge("domLoading",a)||Infinity,Ge("domInteractive",a)||Infinity);return Infinity===b?Math.max(Ge("responseEnd",a),Ge("navigationStart",a)):b};var Ie=class{constructor(a,b){var c=Fe()||Ee();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const Je=u.performance,Ke=!!(Je&&Je.mark&&Je.measure&&Je.clearMarks),Le=Gc(()=>{var a;if(a=Ke){var b;if(null===De){De="";try{a="";try{a=u.top.location.hash}catch(c){a=u.location.hash}a&&(De=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=De;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Me(a){a&&Je&&Le()&&(Je.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),Je.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
function Ne(a){a.g=!1;a.j!=a.l.google_js_reporting_queue&&(Le()&&Ea(a.j,Me),a.j.length=0)} 
class Oe{constructor(a){this.j=[];this.l=a||u;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.j=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=Le()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new Ie(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;Je&&Le()&&Je.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(Fe()||Ee())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;Je&&Le()&&Je.mark(b);!this.g||2048<this.j.length|| 
this.j.push(a)}}};function Pe(a,b){const c={};c[a]=b;return[c]}function Qe(a,b,c,d,e){const f=[];Nd(a,function(g,h){(g=Re(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)} 
function Re(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Re(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Qe(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function Se(a){let b=1;for(const c in a.j)b=c.length>b?c.length:b;return 3997-b-a.l.length-1} 
function Te(a,b){let c="https://pagead2.googlesyndication.com"+b,d=Se(a)-b.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});b=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.j[g];for(let k=0;k<h.length;k++){if(!d){b=null==b?g:b;break}let l=Qe(h[k],a.l,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.l;break}b=null==b?g:b}}}a="";null!=b&&(a=e+"trn="+b);return c+a}class Ue{constructor(){this.l="&";this.j={};this.A=0;this.g=[]}};function Ve(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b} 
var Xe=class{constructor(a,b,c=null){this.B=a;this.I=b;this.g=c;this.j=null;this.l=!1;this.C=this.Ta}Lb(a){this.j=a}A(a){this.l=a}xa(a,b,c){let d,e;try{this.g&&this.g.g?(e=this.g.start(a.toString(),3),d=b(),this.g.end(e)):d=b()}catch(f){b=this.I;try{Me(e),b=this.C(a,new ze(f,{message:Ve(f)}),void 0,c)}catch(g){this.Ta(217,g)}if(b)window.console?.error?.(f);else throw f;}return d}U(a,b){return(...c)=>this.xa(a,()=>b.apply(void 0,c))}Ta(a,b,c,d,e){e=e||"jserror";let f;try{const L=new Ue;var g=L;g.g.push(1); 
g.j[1]=Pe("context",a);b.error&&b.meta&&b.id||(b=new ze(b,{message:Ve(b)}));if(b.msg){let P=b.msg;null==P.substring&&(P=`b/320546888 ${typeof P} ${P}`);g=L;var h=P.substring(0,512);g.g.push(2);g.j[2]=Pe("msg",h)}var k=b.meta||{};b=k;if(this.j)try{this.j(b)}catch(P){}if(d)try{d(b)}catch(P){}d=L;k=[k];d.g.push(3);d.j[3]=k;d=u;k=[];b=null;do{var l=d;if(Hd(l)){var m=l.location.href;b=l.document&&l.document.referrer||null}else m=b,b=null;k.push(new Ce(m||""));try{d=l.parent}catch(P){d=null}}while(d&&l!= 
d);for(let P=0,jb=k.length-1;P<=jb;++P)k[P].depth=jb-P;l=u;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==k.length-1)for(m=1;m<k.length;++m){var n=k[m];n.url||(n.url=l.location.ancestorOrigins[m-1]||"",n.Wb=!0)}var q=k;let oa=new Ce(u.location.href,!1);l=null;const pa=q.length-1;for(n=pa;0<=n;--n){var r=q[n];!l&&Ae.test(r.url)&&(l=r);if(r.url&&!r.Wb){oa=r;break}}r=null;const Nc=q.length&&q[pa].url;0!=oa.depth&&Nc&&(r=q[pa]);f=new Be(oa,r);if(f.j){q=L;var t=f.j.url|| 
"";q.g.push(4);q.j[4]=Pe("top",t)}var v={url:f.g.url||""};if(f.g.url){var A=f.g.url.match(Cd),D=A[1],J=A[3],x=A[4];t="";D&&(t+=D+":");J&&(t+="//",t+=J,x&&(t+=":"+x));var E=t}else E="";D=L;v=[v,{url:E}];D.g.push(5);D.j[5]=v;We(this.B,e,L,this.l,c)}catch(L){try{We(this.B,e,{context:"ecmserr",rctx:a,msg:Ve(L),url:f&&f.g.url},this.l,c)}catch(oa){}}return this.I}};var Ye=a=>"string"===typeof a,Ze=a=>void 0===a,xc=a=>"function"===typeof a;var $e=class extends F{constructor(){super()}};function af(a,b){try{const c=d=>[{[d.vd]:d.Xc}];return JSON.stringify([a.filter(d=>d.ac).map(c),b.toJSON(),a.filter(d=>!d.ac).map(c)])}catch(c){return bf(c,b),""}}function bf(a,b){try{var c=Ve(a instanceof Error?a:Error(String(a)));var d=Bb(Xb(b,1))??0;he({m:c,b:d||null,v:(qc(b,2)??"")||null})}catch(e){}}var cf=class{constructor(a,b){var c=new $e;a=hc(c,1,Ab(a),0);b=hc(a,2,Jb(b),"");a=b.aa;c=a[B];this.l=c&2?b:Nb(b.constructor,Vb(a,c,!0))}};var ef=class extends F{constructor(){super()}getNoShowReasons(){var a=this.aa;a=4===jc(a,a[B],df)?4:-1;return sc(this,a)}},df=[3,4];var ff=class extends F{constructor(){super()}},gf=[1,2,3,4,5];var hf=class extends F{constructor(){super()}getTagSessionCorrelator(){return sc(this,2)}};hf.Ha=[4];var jf=class extends F{constructor(){super()}};var kf=class extends F{constructor(){super()}};kf.Ha=[4,5];var lf=class extends F{constructor(){super()}getTagSessionCorrelator(){return sc(this,1)}};lf.Ha=[2];var mf=class extends F{constructor(){super()}},nf=[4,6];class of extends cf{constructor(){super(...arguments)}}function pf(a,...b){qf(a,...b.map(c=>({ac:!0,vd:3,Xc:c.toJSON()})))}var rf=class extends of{};var sf=(a,b)=>{globalThis.fetch(a,{method:"POST",body:b,keepalive:65536>b.length,credentials:"omit",mode:"no-cors",redirect:"follow"}).catch(()=>{})};function qf(a,...b){try{a.g.push(...b),100<=a.g.length&&tf(a),a.g.length&&null===a.j&&(a.j=setTimeout(()=>{tf(a)},1E3))}catch(c){bf(c,a.l)}}function tf(a){null!==a.j&&(clearTimeout(a.j),a.j=null);if(a.g.length){var b=af(a.g,a.l);a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1",b);a.g=[]}}var uf=class extends rf{constructor(){super(2,"m202402080301");this.A=sf;this.g=[];this.j=null}},vf=class extends uf{};function wf(a,b,c){return b[a]||c};function xf(a,b){a.g=()=>wf(3,b,()=>[])(1)}class yf{g(){return[]}};function We(a,b,c,d=!1,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof Ue?f=c:(f=new Ue,Nd(c,(h,k)=>{var l=f;const m=l.A++;h=Pe(k,h);l.g.push(m);l.j[m]=h}));const g=Te(f,"/pagead/gen_204?id="+b+"&");g&&ee(u,g)}catch(f){}}function zf(a,b){0<=b&&1>=b&&(a.g=b)}class Af{constructor(){this.g=Math.random()}};let Bf,Cf;const Df=new Oe(window);(a=>{Bf=a??new Af;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());zf(Bf,window.google_srt);Cf=new Xe(Bf,!0,Df);Cf.Lb(()=>{});Cf.A(!0);"complete"==window.document.readyState?window.google_measure_js_timing||Ne(Df):Df.g&&G(window,"load",()=>{window.google_measure_js_timing||Ne(Df)})})();function Ef(a,b){return void 0!==a.g[Ff(b)]}function Gf(a){const b=[];for(const c in a.g)void 0!==a.g[c]&&a.g.hasOwnProperty(c)&&b.push(a.j[c]);return b}const Hf=class{constructor(){this.g={};this.j={}}set(a,b){const c=Ff(a);this.g[c]=b;this.j[c]=a}get(a,b){a=Ff(a);return void 0!==this.g[a]?this.g[a]:b}Eb(){return Gf(this).length}clear(){this.g={};this.j={}}};function Ff(a){return a instanceof Object?String(w(a)):a+""};var If=class{constructor(a){this.I=null!=a.g?a.g:!0;this.B=null!=a.D?a.D:0;this.A=null!=a.B?a.B:.9;this.j=null!=a.j?a.j:1.05;this.minWidth=null!=a.C?a.C:0;this.C=null!=a.A?a.A:25;this.l=null!=a.l?a.l:0;this.G=null!=a.I?a.I:!1;this.D=a.G||null;this.g=a.R||null}},Jf=class{build(){return new If(this)}};function Kf(a,b){return a.left<b.right&&b.left<a.right&&a.top<b.bottom&&b.top<a.bottom};var Lf=728*1.38;function Mf(a){return a.innerHeight>=a.innerWidth}function Nf(a){a=a.document;let b={};a&&(b="CSS1Compat"==a.compatMode?a.documentElement:a.body);return b||{}}function Q(a){return Nf(a).clientWidth}function Of(a,b){const c=Nf(a);return b?c.scrollHeight===Nf(a).clientHeight?c.offsetHeight:c.scrollHeight:c.offsetHeight}function Pf(a,b){return a&&a.source?a.source===b||a.source.parent===b:!1}function Qf(a){const b=Q(a);a=a.innerWidth;return.05>Math.abs((b&&a?b/a:0)-1)} 
function R(a){return void 0===a.pageYOffset?(a.document.documentElement||a.document.body.parentNode||a.document.body).scrollTop:a.pageYOffset}function Rf(a){return void 0===a.pageXOffset?(a.document.documentElement||a.document.body.parentNode||a.document.body).scrollLeft:a.pageXOffset}function Sf(a){const b={};let c;Array.isArray(a)?c=a:a&&a.key_value&&(c=a.key_value);if(c)for(a=0;a<c.length;a++){const d=c[a];if("key"in d&&"value"in d){const e=d.value;b[d.key]=null==e?null:String(e)}}return b} 
function Tf(a){const b={bottom:"auto",clear:"none",display:"inline","float":"none",height:"auto",left:"auto",margin:0,"margin-bottom":0,"margin-left":0,"margin-right":"0","margin-top":0,"max-height":"none","max-width":"none",opacity:1,overflow:"visible",padding:0,"padding-bottom":0,"padding-left":0,"padding-right":0,"padding-top":0,position:"static",right:"auto",top:"auto","vertical-align":"baseline",visibility:"visible",width:"auto","z-index":"auto"};Ea(Object.keys(b),c=>{var d=a.style[nd(c)];("undefined"!== 
typeof d?d:a.style[le(a,c)])||O(a,c,b[c])});Xd(a)};function Uf(a,b){var c=Q(a);var d=Nf(a).clientHeight;if("number"!==typeof c||"number"!==typeof d)throw Error("No VP width and/or height.");c=new jd(c,d);d=Rf(a);a=R(a);a=Vf(a,c.width+d,c.height+a,d);return(Kf(b,a)?new ie(Math.max(b.top,a.top),Math.min(b.right,a.right),Math.min(b.bottom,a.bottom),Math.max(b.left,a.left)):null)||Vf(0,0,0,0)} 
function Wf(a,b){const c=Rf(b),d=R(b);if(a.getBoundingClientRect)return a=a.getBoundingClientRect(),Xf(a)?Vf(a.top+d,a.right+c,a.bottom+d,a.left+c):Vf(0,0,0,0);b=b.document.createRange();b.selectNodeContents(a);return b.collapsed?Vf(0,0,0,0):b.getBoundingClientRect?(a=b.getBoundingClientRect(),Xf(a)?Vf(a.top+d,a.right+c,a.bottom+d,a.left+c):Vf(0,0,0,0)):Vf(0,0,0,0)} 
function Xf(a){return!!a&&"number"===typeof a.top&&!isNaN(a.top)&&"number"===typeof a.right&&!isNaN(a.right)&&"number"===typeof a.bottom&&!isNaN(a.bottom)&&"number"===typeof a.left&&!isNaN(a.left)}const Vf=(a,b,c,d)=>new ie(Math.ceil(a),Math.floor(b),Math.floor(c),Math.ceil(d));function Yf(a,b){Zf(a).forEach(b,void 0)}function Zf(a){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b};const $f=class{constructor(a){this.g=new Hf;if(a)for(var b=0;b<a.length;++b)this.add(a[b])}add(a){this.g.set(a,!0)}contains(a){return Ef(this.g,a)}};class ag{constructor(a,b){this.g=a[u.Symbol.iterator]();this.j=b}[Symbol.iterator](){return this}next(){const a=this.g.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}}}function bg(a,b){return new ag(a,b)};function cg(){}cg.prototype.next=function(){return dg};var dg={done:!0,value:void 0};cg.prototype.Ba=function(){return this};function eg(a){if(a instanceof cg)return a;if("function"==typeof a.Ba)return a.Ba(!1);if(ca(a)){let b=0;const c=new cg;c.next=function(){for(;;){if(b>=a.length)return dg;if(b in a)return{value:a[b++],done:!1};b++}};return c}throw Error("Not implemented");}function fg(a){a=eg(a);const {done:b,value:c}=a.next();return b?null:c};function gg(a){if(a instanceof hg||a instanceof ig||a instanceof jg)return a;if("function"==typeof a.next)return new hg(()=>a);if("function"==typeof a[Symbol.iterator])return new hg(()=>a[Symbol.iterator]());if("function"==typeof a.Ba)return new hg(()=>a.Ba());throw Error("Not an iterator or iterable.");}class hg{constructor(a){this.g=a}Ba(){return new ig(this.g())}[Symbol.iterator](){return new jg(this.g())}j(){return new jg(this.g())}} 
class ig extends cg{constructor(a){super();this.g=a}next(){return this.g.next()}[Symbol.iterator](){return new jg(this.g)}j(){return new jg(this.g)}}class jg extends hg{constructor(a){super(()=>a);this.l=a}next(){return this.l.next()}};function kg(a,b){this.j={};this.g=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof kg)for(c=lg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}p=kg.prototype;p.Eb=function(){return this.size};function lg(a){mg(a);return a.g.concat()}p.has=function(a){return ng(this.j,a)};p.isEmpty=function(){return 0==this.size}; 
p.clear=function(){this.j={};this.l=this.size=this.g.length=0};p.delete=function(a){return ng(this.j,a)?(delete this.j[a],--this.size,this.l++,this.g.length>2*this.size&&mg(this),!0):!1};function mg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];ng(a.j,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],ng(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}p.get=function(a,b){return ng(this.j,a)?this.j[a]:b}; 
p.set=function(a,b){ng(this.j,a)||(this.size+=1,this.g.push(a),this.l++);this.j[a]=b};p.forEach=function(a,b){for(var c=lg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};p.keys=function(){return gg(this.Ba(!0)).j()};p.values=function(){return gg(this.Ba(!1)).j()};p.entries=function(){const a=this;return bg(this.keys(),function(b){return[b,a.get(b)]})}; 
p.Ba=function(a){mg(this);var b=0,c=this.l,d=this,e=new cg;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return dg;var f=d.g[b++];return{value:a?f:d.j[f],done:!1}};return e};function ng(a,b){return Object.prototype.hasOwnProperty.call(a,b)};function og(a){return"transparent"==a||"rgba"==a.substring(0,4)&&(a=a.split(","),4==a.length&&.5>parseFloat(a[3]))?!0:!1}function pg(){Ea(qg,a=>{a.R=null;a.C=null})}function rg(a){if(!a.F.ownerDocument)throw Error("Wrapped node should have an owner document.");return a.F.ownerDocument}function sg(a){a=rg(a);return a.defaultView||a.parentWindow}function tg(a){const b=a.l.g(a.l.j);return b==a||b!=a&&xd(b.F,a.F)}function ug(a){return Zf(a.F.childNodes).map(b=>a.l.g(b)).filter(Fc(b=>null===b))} 
function vg(a){if(!a.g())return null;const b=ug(a.g());a=Da(b,a);if(-1==a)return null;for(a+=1;a<b.length;++a)if(b[a].A()||b[a].L())return b[a];return null}function wg(a){const b=vg(a);return b?b:a.g()?wg(a.g()):null}function xg(a,b){b.push(a);a=ug(a);for(let c=0;c<a.length;++c)xg(a[c],b)} 
function yg(a){var b=a.j();if(0!=b.top||0!=b.right||0!=b.bottom||0!=b.left){var c=Rf(sg(a));a=R(sg(a));c=-c;a=-a;c instanceof M?(b.left+=c.x,b.right+=c.x,b.top+=c.y,b.bottom+=c.y):(b.left+=c,b.right+=c,"number"===typeof a&&(b.top+=a,b.bottom+=a))}return b}function S(a,b){if(1!=a.F.nodeType)return null;a.B=a.B||sg(a).getComputedStyle(a.F);return a.B?a.B[b]||a.B.getPropertyValue(b)||"":""}function zg(a,b,c){if(void 0!==a.D[b])return a.D[b];a.D[b]=Ag(a,b,c);return a.D[b]} 
function Bg(a){if(void 0!==a.K)return a.K;var b=S(a,"position");if("fixed"==b||"sticky"==b)b=a;else{var c=a.g();b=c&&"BODY"!=a.F.tagName?(c=Bg(c))||"absolute"!=b&&"relative"!=b?c:a:null}a.K=b;return a.K}function Cg(a,b){const c=Bg(a);if(c&&"relative"!=S(c,"position"))if(null!=b)a:{do{const d=a.j();if((d.right-d.left)*(d.bottom-d.top)>b){b=!1;break a}if(a==c)break;a=a.g()}while(null!==a);b=!0}else b=!0;else b=!1;return b} 
function Ag(a,b,c){const d=S(a,"position");a:switch(b){case 0:var e="hidden"==S(a,"overflow")||"scroll"==S(a,"overflow")||"hidden"==S(a,"overflow-x")||"scroll"==S(a,"overflow-x");break a;case 1:e="hidden"==S(a,"overflow")||"scroll"==S(a,"overflow")||"hidden"==S(a,"overflow-y")||"scroll"==S(a,"overflow-y");break a;default:throw Error("Unknown pageAxis: "+b);}switch(d){case "fixed":if(e)return a;break;case "static":case "":case null:if(e&&!c)return a;if(a.g())return zg(a.g(),b,c);break;case "absolute":case "relative":if(e)return a; 
if(a.g())return zg(a.g(),b,"absolute"==d);break;default:u.console.error("Unknown position value: "+d)}return null}function Dg(a){var b=a.F.scrollHeight;const c=a.F.clientHeight,d=rg(a).createElement("div");d.style.width="100%";d.style.height=Math.max(b,c)+100+"px";d.style.clear="both";a.F.appendChild(d);b=a.F.scrollHeight>a.F.clientHeight&&a.F.scrollHeight-b>a.F.clientHeight-c;a.F.removeChild(d);return b}function Eg(a){return null!==a.G?a.G:"1"!=S(a,"opacity")||a.g()&&!Eg(a.g())?a.G=!1:a.G=!0} 
function Fg(a){a=a.j();a=new ie(Math.max(a.top,0),Math.max(a.right,0),Math.max(a.bottom,0),Math.max(a.left,0));return a.left<a.right&&a.top<a.bottom}function Gg(a){return null!==a.I?a.I:a.g()&&Gg(a.g())||"0"==S(a,"opacity")||"none"==S(a,"display")||"hidden"==S(a,"visibility")||a.F.tagName&&"input"==a.F.tagName.toLowerCase()&&a.F.type&&"hidden"==a.F.type?a.I=!0:a.I=!1}function Hg(a,b){return b(a)?!0:a.g()?Hg(a.g(),b):!1}function Ig(a){return!Hg(a,b=>"hidden"==S(b,"overflow-y"))} 
function Jg(a){a=S(a,"position");return"absolute"==a||"relative"==a}function Kg(a){return a.A()&&(a=parseInt(S(a,"z-index"),10),!isNaN(a))?a:0}function Lg(a,b){return Hg(a,c=>!!c.F.tagName&&c.F.tagName==b)}function Mg(a,b){return Hg(a,c=>{c=c.F;return!!c.id&&!!c.id.match&&!!c.id.match(b)})}function Ng(a,b){return Hg(a,c=>{a:{c=Og(c);for(let d=0;d<c.length;++d)if(c[d].match(b)){c=!0;break a}c=!1}return c})} 
function Og(a){return(a=a.F.className)&&"function"===typeof a.split?/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/):[]}function Pg(a){return"A"==a.F.tagName?a.F.getAttribute("href"):(a=a.g())?Pg(a):null}function Qg(a){if(1!=a.F.nodeType){var b=a.g();return b?Qg(b):0}const c=rg(a).createTextNode("A");a.F.appendChild(c);b=a.l.g(c);if(!b)throw a.F.removeChild(c),Error("Unable to insert textnode");a=b.j();b.F.parentNode&&b.F.parentNode.removeChild(b.F);return a.bottom-a.top} 
function Rg(a,b){if(b||null==a.J){if(b&&!b(a))return 0;let c=0;if(a.L())c=a.F.textContent.trim().length;else{const d=ug(a);for(let e=0;e<d.length;e++)c+=Rg(d[e],b)}b||(a.J=c);return c}return a.J} 
class Sg{constructor(a,b){this.F=a;this.l=b;this.I=this.G=this.ta=this.W=null;this.D={};this.B=this.C=this.J=null;new kg}g(){return this.F!=this.l.j&&this.F.parentNode?this.l.g(this.F.parentNode):null}A(){return 1==this.F.nodeType}L(){return 3==this.F.nodeType}j(){if(!this.R){this.C||(this.C=Wf(this.F,sg(this)));var a=je(this.C);var b=S(this,"position");if("fixed"==b)b=Uf(sg(this),a);else if(this.g()){var c=zg(this.g(),0,"absolute"==b);if(c){var d=c.j();c=d.left;d=d.right;a=a.left>=d||a.right<=c? 
null:Vf(a.top,Math.min(a.right,d),a.bottom,Math.max(a.left,c))}a&&(b=zg(this.g(),1,"absolute"==b))&&(c=b.j(),b=a,a=c.top,c=c.bottom,a=b.top>=c||b.bottom<=a?null:Vf(Math.max(b.top,a),b.right,Math.min(b.bottom,c),b.left));b=a&&Bg(this)&&"fixed"==S(Bg(this),"position")?Uf(sg(this),a):a||new ie(0,0,0,0)}else b=a;this.R=b}return je(this.R)}Na(){return!Fg(this)||Gg(this)}Hb(){var a=S(this,"background-color");if(a=a?og(a):!0)a=S(this,"background-image"),a=!(a&&"none"!=a);return a}toString(){switch(this.F.nodeType){case 1:const a= 
this.F;let b=a.tagName;a.id&&(b+="#"+a.id);a.className&&"function"===typeof a.className.split&&(b+="."+a.className.split(/\s+/).join("."));return b;case 3:return"TEXT#"+this.F.textContent.substr(0,10);default:return"HtmlNode"}}} 
function Tg(a,b){const c=w(b);var d=a.A.get(c);if("boolean"===typeof d)return d;d=a.B&&3==b.nodeType?!/\S/.test(b.data):1!=b.nodeType&&3!=b.nodeType&&9!=b.nodeType||b.tagName&&("SCRIPT"==b.tagName||"STYLE"==b.tagName)?!0:!1;!d&&b.parentNode&&b!=a.j&&(d=Tg(a,b.parentNode));a.A.set(c,d);return d}var Ug=class{constructor(a,b){this.j=a;this.B=b;this.A=new Hf;this.l=new Hf}g(a){const b=w(a),c=this.l.get(b);if(c)return c;if(Tg(this,a))return null;a=new Sg(a,this);this.l.set(b,a);return a}},qg=[];class Vg{constructor(a,b){this.l=a;this.j=b}g(a){return Wg(this.l,a).contains(this.j)}};function Wg(a,b){const c=w(b),d=a.j.get(c);if(d)return d;b=a.g(b);a.j.set(c,b);return b}class Xg{constructor(){this.j=new Hf}};function Yg(a,b){let c=Pg(b);if(a.l.g(b)&&null!==c)return c;b=ug(b);if(1>b.length)return null;c=Yg(a,b[0]);for(let d=1;d<b.length;++d)if(Yg(a,b[d])!=c)return null;return c}class Zg extends Xg{constructor(a){super();this.l=a}g(a){return new $f(null!==Yg(this,a)?[1]:[])}};class $g extends Xg{constructor(a){super();this.l=a}g(a){a:if(3==a.F.nodeType)var b=this.l.g(a);else{b=!1;a=ug(a);for(let c of a){if((a=S(c,"display"))&&"inline"!=a){b=!1;break a}Wg(this,c).contains(0)&&(b=!0)}}return new $f(b?[0]:[])}};function ah(a,b){return Rg(b,c=>!a.l.g(c))}class bh extends Xg{constructor(a,b,c){super();this.A=a;this.l=b;this.B=c}g(a){if(this.A.g(a)&&!this.l.g(a)&&!this.B.g(a)&&50<=ah(this,a)){var b=Qg(a);a=a.j();b=a.bottom-a.top>=2*b||!1}else b=!1;return new $f(b?[3]:[])}};function ch(a){return a.classList?a.classList.contains("adsbygoogle"):Ia(a.classList?a.classList:("string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||"").match(/\S+/g)||[],"adsbygoogle")};function dh(a,b){return a.l.g(b)?Hg(b,function(c){switch(c.F.tagName){case "H1":case "H2":case "H3":case "H4":case "H5":case "H6":return!0}return!1})||eh(b)&&5<=Rg(b)?!0:(b=b.g())?Wg(a,b).contains(2):!1:!1}function eh(a){a=Og(a);for(let b of a)if(b.match(/title|titulo|hdg|heading|header|^h[1-6]$/)&&!b.match(/subtitle/))return!0;return!1}class fh extends Xg{constructor(a){super();this.l=a}g(a){return new $f(dh(this,a)?[2]:[])}};function gh(a){const b=[];Ea(a,c=>{1==c.F.nodeType&&(hh(c,":before",b),hh(c,":after",b))});return b}function ih(a){a=S(a,"content");if(!a||"none"==a||/\(.*\)/.test(a))return!1;/^['"].*['"]$/.test(a)&&(a=a.substring(1,a.length-1));return 0<a.trim().length} 
class jh extends Sg{constructor(a,b){super(a.F,a.l);this.T=a;this.V=b;this.B=sg(a).getComputedStyle(a.F,this.V)}A(){return!1}L(){return!1}Na(){if(!ih(this)&&this.Hb())var a=!0;else if(!(a=this.g().Na()||Gg(this)||!Fg(this))){a=ih(this);const c=S(this,"width");var b=S(this,"height");b=a&&"auto"==b||0<parseFloat(b);a=!((a&&"auto"==c||0<parseFloat(c))&&b)}return a}g(){return this.T}Hb(){const a=oe(this.g().F,"backgroundColor"),b=S(this,"background-color");return null==b||b==a||og(b)||"fixed"!=S(this, 
"position")}j(){switch(S(this,"position")){case "absolute":var a=this.g().j();const b=a.top+parseInt(S(this,"top"),10);a=a.left+parseInt(S(this,"left"),10);let c=parseInt(S(this,"width"),10),d=parseInt(S(this,"height"),10);return new ie(b,a+c,b+d,a);case "fixed":return new ie(0,parseInt(S(this,"width"),10),parseInt(S(this,"height"),10),0);default:return this.g().j()}}} 
const hh=(a,b,c)=>{if(":before"==b||":after"==b){var d=new jh(a,b);if(!d.Na())switch(c.push(d),b){case ":before":a.W=d;break;case ":after":a.ta=d;break;default:throw Error("Unsupported pseudo type "+b);}}};const kh=new $f("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));class lh extends Xg{g(a){var b=a.F,c=rg(a);if(3==b.nodeType){var d=b.data;c=-1!=d.indexOf("&")?kd(d,c):d;c=/\S/.test(c)}else c=!1;(c=c||(a instanceof jh?ih(a):!1))||(c=(b=b.tagName)&&kh.contains(b.toUpperCase()));a=c&&!a.Na();return new $f(a?[6]:[])}};function mh(a){a.B||(a.B=new lh);return a.B}function nh(a){a.j||(a.j=new $g(new Vg(mh(a),6)));return a.j}function oh(a){a.l||(a.l=new fh(new Vg(nh(a),0)));return a.l}class ph{constructor(){this.A=this.l=this.g=this.j=this.B=null}};const qh=class{constructor(){this.g=new ph}};function rh(a){const b=[];for(const c of a.g)b.push(c);return b}class sh{constructor(){this.g=[];this.l=new $f}contains(a){return this.l.contains(w(a))}};class th{constructor(a,b,c){this.g=a;this.j=b;this.l=c}fa(){return this.l}}const vh=(a,b,c)=>{b=uh(a.W,b,c);const d=new th(a,0,b++);c.ra.push(d);for(var e of ug(a))b=vh(e,b,c);e=new th(a,1,b++);c.ra.push(e);c.map.set(w(a),{start:d,end:e});return b=uh(a.ta,b,c)},uh=(a,b,c)=>{if(!a)return b;const d=new th(a,0,b++),e=new th(a,1,b++);c.ra.push(d);c.ra.push(e);c.map.set(w(a),{start:d,end:e});return b};function wh(a){if(a instanceof jh)return!0;if(!a.A())return!1;const b=a.F,c=S(a,"position");if("HTML"==b.tagName||"fixed"==c||"auto"!=S(a,"z-index")&&("absolute"==c||"relative"==c))return!0;a=S(a,"opacity");return"1"!=a&&""!=a?!0:!1}function xh(a){const b=a.g.g();return b?yh(a.j,b):null}class zh{constructor(a,b){this.g=a;this.j=b}} 
function Ah(a,b,c){var d=yh(a.g,b);a=yh(a.g,c);d=Bh(d,a);if(!d)return 0;switch(d.zb){case 0:return Kg(b)-Kg(d.wb.g);case 1:return Kg(d.vb.g)-Kg(c);case 2:return Kg(d.vb.g)-Kg(d.wb.g);default:throw Error("Unhandled adjacency.");}}var Dh=class{constructor(){this.g=new Ch}};function yh(a,b){const c=w(b);var d=a.g.get(c);if(d)return d;d=b.g();b=!d||wh(b)?new zh(b,a):yh(a,d);a.g.set(c,b);return b}var Ch=class{constructor(){this.g=new Hf}}; 
function Bh(a,b){if(a==b)return null;const c=new Hf;var d=b;let e;for(;e=xh(d);){if(a==e)return{vb:a,zb:0,wb:d};c.set(w(e),d);d=e}for(;e=xh(a);){if(e==b)return{vb:a,zb:1,wb:b};if(d=c.get(w(e)))return{vb:a,zb:2,wb:d};a=e}throw Error("Contexts not in same DOM.");};function Eh(a,b,c,d=[]){a=[].concat(a,d);b=new Fh(b,c);for(let e of a)e.Hb()||e.Na()||(c=b,a=e,c.g.push(a),c.l.add(w(a)));return b} 
class Fh extends sh{constructor(a,b){super();this.j=a;this.B=b}A(a,b=!1){const c=a.j();b=b?rh(this):this.g.slice(0);for(let f=0;f<b.length;++f){var d=b[f];if(!tg(d))continue;var e=d.j();if(!Kf(e,c))continue;const g=Ah(this.B,d,a);!(e=0<g)&&(e=0==g&&!(d!=a&&xd(d.F,a.F)))&&(e=a,Jg(d)&&!Jg(e)?e=!0:!Jg(d)&&Jg(e)?e=!1:(e=this.j.map.get(w(e)),d=this.j.map.get(w(d)),e=e&&d&&e.end.fa()<d.start.fa()?!0:!1));if(e)return!0}return!1}};class Gh{constructor(a,b){this.Wc=a;this.dd=b}};function Hh(a,b){let c=0,d=null;const e=a.g.slice(0);for(let f=0;f<e.length;++f){const g=a.j.map.get(w(e[f]));g.end.fa()<b&&g.end.fa()>c&&(d=g,c=g.end.fa())}return d}class Ih extends sh{constructor(a){super();this.j=a}};const Jh=class extends Ih{constructor(a,b){super(a);this.B=b}A(a,b=!1){const c=a.j(),d=Cg(a);b=b?rh(this):this.g.slice(0);for(let e=0;e<b.length;++e){const f=b[e];if(tg(f)&&(d||!(0<Ah(this.B,a,f)))&&Kf(b[e].j(),c))return!0}return!1}};const Kh=class{constructor(a,b,c){this.j=a;this.l=b;this.g=c}};const Lh=class{constructor(a,b,c,d,e,f,g,h){this.j=a;this.B=b;this.O=c;this.N=d;this.A=e;this.l=f;this.g=g;this.I=h}};const Mh=class{constructor(a,b,c,d){this.j=a;this.A=b;this.l=c;this.g=d}};class Nh{constructor(a,b){this.j=a;this.l=b}g(a){if(!a)return[9];a=a.j();a=a.right-a.left;return this.j<=a&&a<=this.l?[]:[4]}};const Oh=class{constructor(a,b){this.g=a;this.j=b||null}};function Ph(a){if(0!=a.l)throw Error("Already resolved/rejected.");}var Sh=class{constructor(){this.g=new Qh(this);this.l=0}resolve(a){Ph(this);this.l=1;this.B=a;Rh(this.g)}j(a){Ph(this);this.l=2;this.A=a;Rh(this.g)}};function Rh(a){switch(a.g.l){case 0:break;case 1:a.j&&a.j(a.g.B);break;case 2:a.l&&a.l(a.g.A);break;default:throw Error("Unhandled deferred state.");}}var Qh=class{constructor(a){this.g=a}then(a,b){if(this.j)throw Error("Then functions already set.");this.j=a;this.l=b;Rh(this)}};function Th(a,b,c){var d=new Sh;a.g(new Oh(function(){d.resolve(b())},c));return d.g}function Uh(a,b,c,d){a.g(new Oh(function(){b.resolve(c)},d))}function Vh(a,b){a.g(new Oh(function(){b.j("n")},"rrej"))}var Wh=class{};class Xh{constructor(a){this.g=a}};function Yh(a,b){var c=new Sh;a.g.g(new Oh(function(){Zh(a,b,c)},"idom"));return c.g}function $h(a){return Th(a.g,function(){return new qh},"icla")}function ai(a,b,c){var d=new Sh;bi(a,b,new Xh(c.g)).then(function(e){ci(a,b).then(function(f){di(a,b,e).then(function(g){d.resolve(new Kh(f,g,e))})})});return d.g}function ei(a,b,c){var d=new Sh;Yh(a,b).then(function(e){$h(a).then(function(f){ai(a,e,f).then(function(g){Uh(a.g,d,new Mh(e,g,f,c))},y(d.j,d))},y(d.j,d))},y(d.j,d));return d.g} 
function Zh(a,b,c){var d=b.document.body;if(d){var e=b.document.body.getBoundingClientRect().width;if(null==e)c.j("bw");else{var f=Q(b),g=Nf(b).clientHeight;if(null==f||null==g)c.j("vp");else{var h=(new Ug(d,!0)).g(d);if(h){var k=new Dh;fi(a,h).then(function(l){qg=l;gi(a,h).then(function(m){c.resolve(new Lh(b,e,f,g,h,l,m,k))})})}else c.j("nt")}}}else c.j("b")}function fi(a,b){return Th(a.g,function(){const c=[];xg(b,c);return c},"iflt")} 
function gi(a,b){return Th(a.g,function(){const c={map:new Hf,ra:[]};vh(b,0,c);return c},"intm")}function bi(a,b,c){return Th(a.g,function(){var d=b.l;const e=new Jh(b.g,b.I),f=new Vg(mh(c.g),6);for(let h of d)if(f.g(h)){d=e;var g=h;d.g.push(g);d.l.add(w(g))}return e},"ivis")}function ci(a,b){return Th(a.g,function(){var c=gh(b.l);return Eh(b.l,b.g,b.I,c)},"ibck")} 
function di(a,b,c){return Th(a.g,function(){var d=b.g;const e=new Hf;var f=0;for(var g=0;g<d.ra.length;++g){var h=d.ra[g],k=h.g,l;if(l=1==h.j)l=S(k,"float"),l="left"==l||"right"==l;l&&(k=k.j().bottom,k>f&&(f=k));e.set(w(h),f)}f=new Hf;g=Number.MAX_VALUE;for(h=d.ra.length-1;0<=h;--h)k=d.ra[h],l=k.g,0==k.j&&c.contains(l)&&(l=l.j().top,l<g&&(g=l)),f.set(w(k),g);d=new Hf;g=Gf(e);for(h=0;h<g.length;++h){k=e.get(g[h]);l=f.get(g[h]);if("number"!==typeof l)throw Error("No entry in minSubsequentTopBounds for terminal UID!"); 
d.set(g[h],new Gh(k,l))}return d},"irel")}var hi=class{constructor(a){this.g=a}};function ii(a){var b=[];Yf(a.getElementsByTagName("p"),function(c){100<=ji(c)&&b.push(c)});return b}function ji(a){if(3==a.nodeType)return a.length;if(1!=a.nodeType||"SCRIPT"==a.tagName)return 0;var b=0;Yf(a.childNodes,function(c){b+=ji(c)});return b}function ki(a){return 0==a.length||isNaN(a[0])?a:"\\"+(30+parseInt(a[0],10))+" "+a.substring(1)} 
function li(a,b){if(null==a.g)return b;switch(a.g){case 1:return b.slice(1);case 2:return b.slice(0,b.length-1);case 3:return b.slice(1,b.length-1);case 0:return b;default:throw Error("Unknown ignore mode: "+a.g);}} 
const mi=class{constructor(a,b,c,d){this.A=a;this.j=b;this.l=c;this.g=d}query(a){var b=[];try{b=a.querySelectorAll(this.A)}catch(f){}if(!b.length)return[];a=Ja(b);a=li(this,a);"number"===typeof this.j&&(b=this.j,0>b&&(b+=a.length),a=0<=b&&b<a.length?[a[b]]:[]);if("number"===typeof this.l){b=[];for(var c=0;c<a.length;c++){var d=ii(a[c]),e=this.l;0>e&&(e+=d.length);0<=e&&e<d.length&&b.push(d[e])}a=b}return a}toString(){return JSON.stringify({nativeQuery:this.A,occurrenceIndex:this.j,paragraphIndex:this.l, 
ignoreMode:this.g})}};function ni(a){if(1!=a.nodeType)var b=!1;else if(b="INS"==a.tagName)a:{b=["adsbygoogle-placeholder"];a=a.className?a.className.split(/\s+/):[];for(var c={},d=0;d<a.length;++d)c[a[d]]=!0;for(d=0;d<b.length;++d)if(!c[b[d]]){b=!1;break a}b=!0}return b};class oi{constructor(a=1){this.g=a}next(){var a=48271*this.g%2147483647;this.g=0>2147483647*a?a+2147483647:a;return this.g/2147483647}};function pi(a,b,c){const d=[];for(const e of a.g)b(e)?d.push(e):c(e);return new qi(d)}function ri(a,b){return new qi(a.g.slice(0).sort(b))}function si(a,b=1){a=a.g.slice(0);const c=new oi(b);La(a,()=>c.next());return new qi(a)}const qi=class{constructor(a){this.g=a.slice(0)}forEach(a){this.g.forEach((b,c)=>void a(b,c,this))}filter(a){return new qi(Fa(this.g,a))}apply(a){return new qi(a(this.g.slice(0)))}get(a){return this.g[a]}add(a){const b=this.g.slice(0);b.push(a);return new qi(b)}};var ti=class extends F{getId(){return qc(this,3)}};ti.Ha=[4];class ui{constructor(a,{Cc:b,Nd:c,Yd:d,ld:e}){this.B=a;this.j=c;this.A=new qi(b||[]);this.g=e;this.l=d}};var vi=a=>{var b=a.split("~").filter(c=>0<c.length);a=new Hf;for(const c of b)b=c.indexOf("."),-1==b?a.set(c,""):a.set(c.substring(0,b),c.substring(b+1));return a},xi=a=>{var b=wi(a);a=[];for(let c of b)b=String(c.Za),a.push(c.Qa+"."+(20>=b.length?b:b.slice(0,19)+"_"));return a.join("~")}; 
const wi=a=>{const b=[],c=a.A;c&&c.g.length&&b.push({Qa:"a",Za:yi(c)});null!=a.j&&b.push({Qa:"as",Za:a.j});null!=a.l&&b.push({Qa:"i",Za:String(a.l)});null!=a.g&&b.push({Qa:"rp",Za:String(a.g)});b.sort(function(d,e){return d.Qa.localeCompare(e.Qa)});b.unshift({Qa:"t",Za:zi(a.B)});return b},zi=a=>{switch(a){case 0:return"aa";case 1:return"ma";default:throw Error("Invalid slot type"+a);}},yi=a=>{a=a.g.slice(0).map(Ai);a=JSON.stringify(a);{const c=a.length;if(0==c)a=0;else{var b=305419896;for(let d=0;d< 
c;d++)b^=(b<<5)+(b>>2)+a.charCodeAt(d)&4294967295;a=0<b?b:4294967296+b}}return a},Ai=a=>{const b={};null!=qc(a,7)&&(b.q=qc(a,7));null!=pc(a,2)&&(b.o=pc(a,2));null!=pc(a,5)&&(b.p=pc(a,5));return b};var Bi=class extends F{setLocation(a){return Zb(this,1,Ab(a))}};var Ci=new zc(1196),Di=new zc(313),Ei=new zc(573506525,!0),Fi=new zc(573506524,!0),Gi=new zc(595827158),Hi=new Ac,Ii=new zc(45459826),Ji=new zc(531007060),Ki=new zc(45545724),Li=new zc(45430975),Mi=new zc(531582260);function Ni(a,b,c){switch(c){case 0:b.parentNode&&b.parentNode.insertBefore(a,b);break;case 3:if(c=b.parentNode){var d=b.nextSibling;if(d&&d.parentNode!=c)for(;d&&8==d.nodeType;)d=d.nextSibling;c.insertBefore(a,d)}break;case 1:b.insertBefore(a,b.firstChild);break;case 2:b.appendChild(a)}ni(b)&&(b.setAttribute("data-init-display",b.style.display),b.style.display="block")} 
function Oi(a){if(a&&a.parentNode){const b=a.parentNode;b.removeChild(a);ni(b)&&(b.style.display=b.getAttribute("data-init-display")||"none")}};var Qi=(a,b,c)=>{if(K(Di)){var d=Pi(b,c);if(d.ua){for(c=b=d.ua;c=d.Z(c);)b=c;d={anchor:b,position:d.tb}}else d={anchor:b,position:c};a["google-ama-order-assurance"]=0;Ni(a,d.anchor,d.position)}else Ni(a,b,c)}; 
function Pi(a,b){const c=e=>{e=Ri(e);return null==e?!1:0<e},d=e=>{e=Ri(e);return null==e?!1:0>e};switch(b){case 0:return{ua:Si(a.previousSibling,c),Z:e=>Si(e.previousSibling,c),tb:0};case 2:return{ua:Si(a.lastChild,c),Z:e=>Si(e.previousSibling,c),tb:0};case 3:return{ua:Si(a.nextSibling,d),Z:e=>Si(e.nextSibling,d),tb:3};case 1:return{ua:Si(a.firstChild,d),Z:e=>Si(e.nextSibling,d),tb:3}}throw Error("Un-handled RelativePosition: "+b);} 
function Ri(a){return a.hasOwnProperty("google-ama-order-assurance")?a["google-ama-order-assurance"]:null}function Si(a,b){return a&&b(a)?a:null};var Ti={0:0,1:1,2:2,3:3};var Ui={BODY:{ga:[1,2],oa:!1,pa:2,na:4},HEADER:{ga:[0,3,1,2],oa:!1,pa:1,na:3},NAV:{ga:[0,3],oa:!1,pa:1,na:3},H1:{ga:[0],oa:!1,pa:1,na:2},IMG:{ga:[0,3],oa:!0,pa:0,na:1},DIV:{ga:[0,3,1,2],oa:!0,pa:0,na:1},TABLE:{ga:[0,3],oa:!0,pa:0,na:1},TD:{ga:[1,2],oa:!0,pa:0,na:1},ASIDE:{ga:[0,3,1,2],oa:!0,pa:0,na:1},LI:{ga:[1,2],oa:!0,pa:0,na:1},SECTION:{ga:[0,3,1,2],oa:!0,pa:0,na:1}},Vi=a=>({ga:a.ga.slice(0),oa:a.oa,pa:a.pa,na:a.na}),Wi=(a,b)=>{const c=Vi(a);c.ga=Fa(a.ga,d=>b[d]);return c};function Xi(a){var b=a.length-1,c=new cg;c.next=function(){return 0>b?dg:{value:a[b--],done:!1}};return c};var Yi={0:!0,1:!0},Zi={2:!0,3:!0},$i={3:!0},aj=class{constructor(a,b,c){this.l=a;this.j=b;this.g=c}Z(){for(var a=fg(this.j);null!==a;a=fg(this.j)){var b=a.g;if(1!=b.F.nodeType)b=null;else{var c=Ui[b.F.tagName];c?(a=Wi(c,0==a.j?Yi:0<ug(a.g).length?Zi:$i),b={node:b,Ab:a,identifier:{}}):b=null}if(b&&(a=b.node.j().getWidth(),c=this.l,null==a||null==c?0:a>=c*this.g.A&&a<=c*this.g.j))return a=new Sh,a.resolve(b),a.g}b=new Sh;b.j("na");return b.g}};var bj={rectangle:1,horizontal:2,vertical:4};function cj(a,b){do{const c=Ld(a,b);if(c&&"fixed"==c.position)return!1}while(a=a.parentElement);return!0};function dj(a,b){try{const c=b.document.documentElement.getBoundingClientRect(),d=a.getBoundingClientRect();return{x:d.left-c.left,y:d.top-c.top}}catch(c){return null}} 
function ej(a,b,c,d,e){if(a!==a.top)return Id(a)?3:16;if(!(488>Q(a)))return 4;if(!Mf(a))return 5;const f=Q(a);if(!f||(f-c)/f>d)a=6;else{if(c="true"!==e.google_full_width_responsive)a:{c=b.parentElement;for(b=Q(a);c;c=c.parentElement)if((d=Ld(c,a))&&(e=Sd(d.width))&&!(e>=b)&&"visible"!==d.overflow){c=!0;break a}c=!1}a=c?7:!0}return a}function fj(a,b,c){a=a.style;"rtl"===b?a.marginRight=c:a.marginLeft=c} 
function gj(a,b){if(3==b.nodeType)return/\S/.test(b.data);if(1==b.nodeType){if(/^(script|style)$/i.test(b.nodeName))return!1;let c;try{c=Ld(b,a)}catch(d){}return!c||"none"!==c.display&&!("absolute"===c.position&&("hidden"===c.visibility||"collapse"===c.visibility))}return!1}function hj(a,b,c){a=dj(b,a);return"rtl"===c?-a.x:a.x} 
function ij(a,b){var c;c=(c=b.parentElement)?(c=Ld(c,a))?c.direction:"":"";if(c){var d=b.style;d.border=d.borderStyle=d.outline=d.outlineStyle=d.transition="none";d.borderSpacing=d.padding="0";fj(b,c,"0px");d.width=`${Q(a)}px`;if(0!==hj(a,b,c)){fj(b,c,"0px");var e=hj(a,b,c);fj(b,c,`${-1*e}px`);a=hj(a,b,c);0!==a&&a!==e&&fj(b,c,`${e/(a-e)*e}px`)}d.zIndex="30"}};var jj=class{constructor(a,b){this.Oa=a;this.l=b}height(){return this.l}g(a){return 300<a&&300<this.l?this.Oa:Math.min(1200,Math.round(a))}j(){}};var kj=(a,b,c,d=e=>e)=>{let e;return a.style&&a.style[c]&&d(a.style[c])||(e=Ld(a,b))&&e[c]&&d(e[c])||null},lj=a=>b=>b.Oa<=a,qj=(a,b,c,d)=>{const e=a&&mj(c,b),f=pj(b,d);return g=>!(e&&g.height()>=f)},rj=a=>b=>b.height()<=a,mj=(a,b)=>{a=dj(a,b);return(a?a.y:0)<Nf(b).clientHeight-100},sj=(a,b)=>{var c=kj(b,a,"height",Sd);if(c)return c;var d=b.style.height;b.style.height="inherit";c=kj(b,a,"height",Sd);b.style.height=d;if(c)return c;c=Infinity;do(d=b.style&&Sd(b.style.height))&&(c=Math.min(c,d)),(d=kj(b, 
a,"maxHeight",Sd))&&(c=Math.min(c,d));while((b=b.parentElement)&&"HTML"!=b.tagName);return c};const pj=(a,b)=>{const c=a.google_unique_id;return b&&0==("number"===typeof c?c:0)?Math.max(250,2*Nf(a).clientHeight/3):250};function tj(a,b){for(let c=0;c<b.length;c++){const d=b[c],e=nd(d.property);a[e]=d.value}}function uj(a,b,c){var d=[];if(c=c&&c.g())a.bb.className=c.join(" ");a=a.Ia;a.className="adsbygoogle";a.setAttribute("data-ad-client",b);d.length&&a.setAttribute("data-ad-channel",d.join("+"))} 
function vj(a,b){var c=b.Cb||!1;const d=zd(new qd(a),"DIV"),e=d.style;e.width="100%";e.height="auto";e.clear=c?"both":"none";c=d.style;c.textAlign="center";b.sb&&tj(c,b.sb);a=zd(new qd(a),"INS");c=a.style;c.display="block";c.margin="auto";c.backgroundColor="transparent";b.Mb&&(c.marginTop=b.Mb);b.Bb&&(c.marginBottom=b.Bb);b.kb&&tj(c,b.kb);d.appendChild(a);return{bb:d,Ia:a}};function wj(a,b=!1){if(a.qa)return a.qa;if(b=a.C(b))pg(),!a.g&&b&&(a.g=b.j());return b}function xj(a){return a.G.node||null}function yj(a){return(a=xj(a))&&a.A()?ni(a.F):!1}function zj(a){return Gf(a.R.g).map(b=>{switch(b){case 1:return"IN ARTICLE";case 2:return"ABOVE FOOTER";case 3:return"ABOVE COMMENT";case 4:return"PEDESTAL";case 5:return"BELOW CONTENT";default:return null}}).filter(b=>null!=b).join(", ")} 
class Aj{constructor(a){this.G=a.j;this.j=a.A;this.g=this.qa=null;this.A=!1;this.R=new $f(Gf(a.g.g))}I(){}C(){}D(){}l(){}}var Bj=class{constructor(a,b){this.j=a;this.A=b;this.g=new $f;this.l=[]}build(){}};function Cj(a,b){Ka(a.l,b);return a}class Dj{constructor(){this.j=[];this.l=[];this.A=[]}g(a){if(a=xj(a)){for(var b=0;b<this.A.length;++b)if(Lg(a,this.A[b]))return[6];for(b=0;b<this.j.length;++b)if(Mg(a,this.j[b]))return[6];for(b=0;b<this.l.length;++b)if(Ng(a,this.l[b]))return[6]}return[]}} 
var Ej=[/cookie/,/(^|(-|_))sticky((-|_)|$)/],Fj=[/(^|(-|_))tab((-|_)|$)/,/(^|(-|_))tabs((-|_)|$)/],Gj=[/(^|(-|_))slider((-|_)|$)/,/(^|(-|_))swiper((-|_)|$)/],Hj=[/(^|(-|_))taboola((-|_)|$)/,/(^|(-|_))OUTBRAIN((-|_)|$)/,/(^|(-|_))revcontent((-|_)|$)/],Ij=["A","FORM","BUTTON"];function Jj(a){return b=>!!(b.ib&a)}class T extends jj{constructor(a,b,c,d=!1){super(a,b);this.ib=c;this.Tc=d}xb(){return this.ib}j(a,b,c){c.style.height=this.height()+"px";b.rpe=!0}};const Kj={image_stacked:1/1.91,image_sidebyside:1/3.82,mobile_banner_image_sidebyside:1/3.82,pub_control_image_stacked:1/1.91,pub_control_image_sidebyside:1/3.82,pub_control_image_card_stacked:1/1.91,pub_control_image_card_sidebyside:1/3.74,pub_control_text:0,pub_control_text_card:0},Lj={image_stacked:80,image_sidebyside:0,mobile_banner_image_sidebyside:0,pub_control_image_stacked:80,pub_control_image_sidebyside:0,pub_control_image_card_stacked:85,pub_control_image_card_sidebyside:0,pub_control_text:80, 
pub_control_text_card:80},Mj={pub_control_image_stacked:100,pub_control_image_sidebyside:200,pub_control_image_card_stacked:150,pub_control_image_card_sidebyside:250,pub_control_text:100,pub_control_text_card:150}; 
function Nj(a){var b=0;a.Ga&&b++;a.va&&b++;a.wa&&b++;if(3>b)return{Aa:"Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."};b=a.Ga.split(",");const c=a.wa.split(",");a=a.va.split(",");if(b.length!==c.length||b.length!==a.length)return{Aa:'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}; 
if(2<b.length)return{Aa:"The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while "+`you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`};const d=[],e=[];for(let g=0;g< 
b.length;g++){var f=Number(c[g]);if(Number.isNaN(f)||0===f)return{Aa:`Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`};d.push(f);f=Number(a[g]);if(Number.isNaN(f)||0===f)return{Aa:`Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`};e.push(f)}return{wa:d,va:e,Yb:b}} 
function Oj(a){return 1200<=a?{width:1200,height:600}:850<=a?{width:a,height:Math.floor(.5*a)}:550<=a?{width:a,height:Math.floor(.6*a)}:468<=a?{width:a,height:Math.floor(.7*a)}:{width:a,height:Math.floor(3.44*a)}};function Pj(a,b){if(!a)return!1;a=a.hash;if(!a||!a.indexOf)return!1;if(-1!=a.indexOf(b))return!0;b=Qj(b);return"go"!=b&&-1!=a.indexOf(b)?!0:!1}function Qj(a){let b="";Nd(a.split("_"),c=>{b+=c.substr(0,2)});return b};const Rj=Ma("script");class Sj{constructor(a,b,c=null,d=null,e=null,f=null,g=null,h=null,k=null,l=null,m=null,n=null){this.I=a;this.J=b;this.ib=c;this.g=d;this.R=e;this.j=f;this.l=g;this.C=h;this.D=k;this.A=l;this.B=m;this.G=n}size(){return this.J}};class Tj extends Error{constructor(a=""){super();this.name="TagError";this.message=a?"adsbygoogle.push() error: "+a:"";Error.captureStackTrace?Error.captureStackTrace(this,Tj):this.stack=Error().stack||""}};var Uj=class extends jj{g(a){return Math.min(1200,Math.max(this.Oa,Math.round(a)))}}; 
function Vj(a,b){Wj(a,b);if("pedestal"===b.google_content_recommendation_ui_type)return new Sj(9,new Uj(a,Math.floor(a*b.google_phwr)));var c=Ad();468>a?c?(c=a-8-8,c=Math.floor(c/1.91+70)+Math.floor(11*(c*Kj.mobile_banner_image_sidebyside+Lj.mobile_banner_image_sidebyside)+96),a={Ya:a,Xa:c,va:1,wa:12,Ga:"mobile_banner_image_sidebyside"}):(a=Oj(a),a={Ya:a.width,Xa:a.height,va:1,wa:13,Ga:"image_sidebyside"}):(a=Oj(a),a={Ya:a.width,Xa:a.height,va:4,wa:2,Ga:"image_stacked"});Xj(b,a);return new Sj(9,new Uj(a.Ya, 
a.Xa))} 
function Yj(a,b){Wj(a,b);var c=Nj({wa:b.google_content_recommendation_rows_num,va:b.google_content_recommendation_columns_num,Ga:b.google_content_recommendation_ui_type});if(c.Aa)a={Ya:0,Xa:0,va:0,wa:0,Ga:"image_stacked",Aa:c.Aa};else{var d=2===c.Yb.length&&468<=a?1:0;var e=c.Yb[d];e=0===e.indexOf("pub_control_")?e:"pub_control_"+e;var f=Mj[e];let g=c.va[d];for(;a/g<f&&1<g;)g--;f=g;d=c.wa[d];c=Math.floor(((a-8*f-8)/f*Kj[e]+Lj[e])*d+8*d+8);a=1500<a?{width:0,height:0,rd:`Calculated slot width is too large: ${a}`}:1500< 
c?{width:0,height:0,rd:`Calculated slot height is too large: ${c}`}:{width:a,height:c};a={Ya:a.width,Xa:a.height,va:f,wa:d,Ga:e}}if(a.Aa)throw new Tj(a.Aa);Xj(b,a);return new Sj(9,new Uj(a.Ya,a.Xa))}function Wj(a,b){if(0>=a)throw new Tj(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);} 
function Xj(a,b){a.google_content_recommendation_ui_type=b.Ga;a.google_content_recommendation_columns_num=b.va;a.google_content_recommendation_rows_num=b.wa};class Zj extends jj{g(){return this.Oa}j(a,b,c){ij(a,c);c.style.height=this.height()+"px";b.rpe=!0}};const ak={"image-top":a=>600>=a?284+.414*(a-250):429,"image-middle":a=>500>=a?196-.13*(a-250):164+.2*(a-500),"image-side":a=>500>=a?205-.28*(a-250):134+.21*(a-500),"text-only":a=>500>=a?187-.228*(a-250):130,"in-article":a=>420>=a?a/1.2:460>=a?a/1.91+130:800>=a?a/4:200}; 
var bk=class extends jj{g(){return Math.min(1200,this.Oa)}},ck=(a,b,c,d,e)=>{var f=e.google_ad_layout||"image-top";if("in-article"==f){var g=a;if("false"==e.google_full_width_responsive)a=g;else if(a=ej(b,c,g,.2,e),!0!==a)e.gfwrnwer=a,a=g;else if(a=Q(b))if(e.google_full_width_responsive_allowed=!0,c.parentElement){b:{g=c;for(let h=0;100>h&&g.parentElement;++h){const k=g.parentElement.childNodes;for(let l=0;l<k.length;++l){const m=k[l];if(m!==g&&gj(b,m))break b}g=g.parentElement;g.style.width="100%"; 
g.style.height="auto"}}ij(b,c)}else a=g;else a=g}if(250>a)throw new Tj("Fluid responsive ads must be at least 250px wide: availableWidth="+a);a=Math.min(1200,Math.floor(a));if(d&&"in-article"!=f){f=Math.ceil(d);if(50>f)throw new Tj("Fluid responsive ads must be at least 50px tall: height="+f);return new Sj(11,new jj(a,f))}if("in-article"!=f&&(d=e.google_ad_layout_key)){f=""+d;c=Math.pow(10,3);if(e=(d=f.match(/([+-][0-9a-z]+)/g))&&d.length)for(b=[],g=0;g<e;g++)b.push(parseInt(d[g],36)/c);else b=null; 
if(!b)throw new Tj("Invalid data-ad-layout-key value: "+f);f=(a+-725)/1E3;c=0;d=1;e=b.length;for(g=0;g<e;g++)c+=b[g]*d,d*=f;f=Math.ceil(1E3*c- -725+10);if(isNaN(f))throw new Tj("Invalid height: height="+f);if(50>f)throw new Tj("Fluid responsive ads must be at least 50px tall: height="+f);if(1200<f)throw new Tj("Fluid responsive ads must be at most 1200px tall: height="+f);return new Sj(11,new jj(a,f))}d=ak[f];if(!d)throw new Tj("Invalid data-ad-layout value: "+f);c=mj(c,b);b=Q(b);b="in-article"!== 
f||c||a!==b?Math.ceil(d(a)):Math.ceil(1.25*d(a));return new Sj(11,"in-article"==f?new bk(a,b):new jj(a,b))};function dk(a){return b=>{for(let c=a.length-1;0<=c;--c)if(!a[c](b))return!1;return!0}}function ek(a,b){var c=fk.slice(0);const d=c.length;let e=null;for(let f=0;f<d;++f){const g=c[f];if(a(g)){if(null==b||b(g))return g;null===e&&(e=g)}}return e};var U=[new T(970,90,2),new T(728,90,2),new T(468,60,2),new T(336,280,1),new T(320,100,2),new T(320,50,2),new T(300,600,4),new T(300,250,1),new T(250,250,1),new T(234,60,2),new T(200,200,1),new T(180,150,1),new T(160,600,4),new T(125,125,1),new T(120,600,4),new T(120,240,4),new T(120,120,1,!0)],fk=[U[6],U[12],U[3],U[0],U[7],U[14],U[1],U[8],U[10],U[4],U[15],U[2],U[11],U[5],U[13],U[9],U[16]];let gk,hk;const ik=new Oe(u);((a,b=!0)=>{gk=a||new Af;"number"!==typeof u.google_srt&&(u.google_srt=Math.random());zf(gk,u.google_srt);hk=new Xe(gk,b,ik);hk.A(!0);"complete"==u.document.readyState?u.google_measure_js_timing||Ne(ik):ik.g&&G(u,"load",()=>{u.google_measure_js_timing||Ne(ik)})})();var jk=(a,b,c)=>hk.xa(a,b,c),kk=(a,b)=>hk.U(a,b),lk=(a,b,c)=>{const d=I(yf).g();!b.eid&&d.length&&(b.eid=d.toString());We(gk,a,b,!0,c)};var mk=(a,b,c,d,e)=>{"false"==e.google_full_width_responsive?c={ja:a,ka:1}:"autorelaxed"===b&&e.google_full_width_responsive||"auto"==b||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b)||e.google_ad_resize?(b=ej(c,d,a,.3,e),!0!==b?e=b:"true"===e.google_full_width_responsive||cj(d,c)?(e=Q(c),b=e-a,e=e&&0<=b?!0:e?-10>b?11:0>b?14:12:10):e=9,c=!0!==e?{ja:a,ka:e}:{ja:Q(c)||a,ka:!0}):c={ja:a,ka:2};const {ja:f,ka:g}=c;return!0!==g?{ja:a,ka:g}:d.parentElement?{ja:f,ka:g}:{ja:a,ka:g}},pk=(a,b,c,d,e)=> 
{const {ja:f,ka:g}=jk(247,()=>mk(a,b,c,d,e));var h=!0===g;const k=Sd(d.style.width),l=Sd(d.style.height),{Ra:m,Ma:n,xb:q,Xb:r}=nk(f,b,c,d,e,h);h=ok(b,q);var t;const v=(t=kj(d,c,"marginLeft",Sd))?t+"px":"",A=(t=kj(d,c,"marginRight",Sd))?t+"px":"";t=kj(d,c,"zIndex")||"";return new Sj(h,m,q,null,r,g,n,v,A,l,k,t)},nk=(a,b,c,d,e,f)=>{b=qk(c,a,b);let g;var h=!1;let k=!1;var l=488>Q(c);if(l){g=cj(d,c);var m=mj(d,c);h=!m&&g;k=m&&g}m=[lj(a),Jj(b)];m.push(qj(l,c,d,k));null!=e.google_max_responsive_height&& 
m.push(rj(e.google_max_responsive_height));l=[t=>!t.Tc];if(h||k)h=sj(c,d),l.push(rj(h));let n=ek(dk(m),dk(l));if(!n)throw new Tj("No slot size for availableWidth="+a);const {Ra:q,Ma:r}=jk(248,()=>{var t;a:if(f){if(e.gfwrnh&&(t=Sd(e.gfwrnh))){t={Ra:new Zj(a,t),Ma:!0};break a}t=a/1.2;var v=Math;var A=v.min;if(e.google_resizing_allowed||"true"==e.google_full_width_responsive)var D=Infinity;else{D=d;let x=Infinity;do{var J=kj(D,c,"height",Sd);J&&(x=Math.min(x,J));(J=kj(D,c,"maxHeight",Sd))&&(x=Math.min(x, 
J))}while((D=D.parentElement)&&"HTML"!=D.tagName);D=x}v=A.call(v,t,D);if(v<.5*t||100>v)v=t;t={Ra:new Zj(a,Math.floor(v)),Ma:v<t?102:!0}}else t={Ra:n,Ma:100};return t});return"in-article"===e.google_ad_layout&&c.location&&"#hffwroe2etoq"==c.location.hash?{Ra:rk(a,c,d,q,e),Ma:!1,xb:b,Xb:g}:{Ra:q,Ma:r,xb:b,Xb:g}}; 
const ok=(a,b)=>{if("auto"==a)return 1;switch(b){case 2:return 2;case 1:return 3;case 4:return 4;case 3:return 5;case 6:return 6;case 5:return 7;case 7:return 8}throw Error("bad mask");},qk=(a,b,c)=>{if("auto"==c)c=Math.min(1200,Q(a)),b=.25>=b/c?4:3;else{b=0;for(const d in bj)-1!==c.indexOf(d)&&(b|=bj[d])}return b},rk=(a,b,c,d,e)=>{const f=e.google_ad_height||kj(c,b,"height",Sd);b=ck(a,b,c,f,e).size();return b.Oa*b.height()>a*d.height()?new T(b.Oa,b.height(),1):d};var sk=(a,b,c,d,e)=>{var f;(f=Q(b))?488>Q(b)?Mf(b)?(e.google_full_width_responsive_allowed=!0,ij(b,c),f={ja:f,ka:!0}):f={ja:a,ka:5}:f={ja:a,ka:4}:f={ja:a,ka:10};const {ja:g,ka:h}=f;if(!0!==h||a==g)return new Sj(12,new jj(a,d),null,null,!0,h,100);const {Ra:k,Ma:l,xb:m}=nk(g,"auto",b,c,e,!0);return new Sj(1,k,m,2,!0,h,l)};const tk=(a,b,c,d,e)=>{const f=d.google_ad_height||kj(c,e,"height",Sd);switch(a){case 5:const {ja:g,ka:h}=jk(247,()=>mk(b,d.google_ad_format,e,c,d));!0===h&&b!=g&&ij(e,c);!0===h?d.google_full_width_responsive_allowed=!0:(d.google_full_width_responsive_allowed=!1,d.gfwrnwer=h);return Vj(g,d);case 9:return Yj(b,d);case 8:return ck(b,e,c,f,d);case 10:return sk(b,e,c,f,d)}};class uk extends Aj{constructor(a){super(a);this.B=""}I(){return 1}C(a=!1){const b=xj(this);if(!b)return null;yj(this)&&(this.B=b.F.style.display);var c=zj(this),d=rg(b),e=vj(d,{Mb:"10px",Bb:"10px",Cb:this.A});e.bb.className="google-auto-placed";const f=e.Ia;var g=f.style;g.display="inline-block";g.boxSizing="border-box";g.width="100%";g.height=a?"auto":"100px";g.backgroundColor="#f60";g.border="#000 solid 1px";c&&(g=d.createElement("span"),g.style.fontSize="small",g.appendChild(d.createTextNode(c)), 
f.appendChild(g));c=e.bb;e=e.Ia;Qi(c,b.F,Ti[this.j]);if(a)try{this.D(e,vd())}catch(h){e.style.height="100px"}this.qa=b.l.g(c);this.qa||(c.parentNode.removeChild(c),yj(this)&&(b.F.style.display=this.B));return this.qa}D(a,b){var c={google_ad_format:"auto"},d=1,e=a.offsetWidth||(c.google_ad_resize||!1)&&kj(a,b,"width",Sd)||c.google_ad_width||0;4===d&&(c.google_ad_format="auto",d=1);var f=(f=tk(d,e,a,c,b))?f:pk(e,c.google_ad_format,b,a,c);f.size().j(b,c,a);null!=f.ib&&(c.google_responsive_formats=f.ib); 
null!=f.R&&(c.google_safe_for_responsive_override=f.R);null!=f.j&&(!0===f.j?c.google_full_width_responsive_allowed=!0:(c.google_full_width_responsive_allowed=!1,c.gfwrnwer=f.j));null!=f.l&&!0!==f.l&&(c.gfwrnher=f.l);b=f.B||c.google_ad_width;null!=b&&(c.google_resizing_width=b);b=f.A||c.google_ad_height;null!=b&&(c.google_resizing_height=b);b=f.size().g(e);const g=f.size().height();c.google_ad_width=b;c.google_ad_height=g;var h=f.size();e=h.g(e)+"x"+h.height();c.google_ad_format=e;c.google_responsive_auto_format= 
f.I;null!=f.g&&(c.armr=f.g);c.google_ad_resizable=!0;c.google_override_format=1;c.google_loader_features_used=128;!0===f.j&&(c.gfwrnh=f.size().height()+"px");null!=f.C&&(c.gfwroml=f.C);null!=f.D&&(c.gfwromr=f.D);null!=f.A&&(c.gfwroh=f.A);null!=f.B&&(c.gfwrow=f.B);null!=f.G&&(c.gfwroz=f.G);e=Id(window)||window;Pj(e.location,"google_responsive_dummy_ad")&&(Ia([1,2,3,4,5,6,7,8],f.I)||1===f.g)&&2!==f.g&&(e=JSON.stringify({googMsgType:"adpnt",key_value:[{key:"qid",value:"DUMMY_AD"}]}),c.dash=`<${Rj}>window.top.postMessage('${e}', '*'); 
          </${Rj}> 
          <div id="dummyAd" style="width:${b}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${b}x${g}</p> 
            <p>Rendered size:${b}x${g}</p> 
          </div>`);1!=d&&(c=f.size().height(),a.style.height=c+"px")}l(){if(this.qa){var a=this.qa;a.F.parentNode&&a.F.parentNode.removeChild(a.F);this.qa=null;yj(this)&&(xj(this).F.style.display=this.B);pg()}}}var vk=class extends Bj{build(){return new uk(this)}};new $f(["comments"]);new $f(["allcomments"]);new $f(["post-container","post","type-post"]);var xk=(a,b,c)=>{const d=[];a.map(e=>wk(e,b,c)).forEach(e=>Ka(d,e));return d},wk=(a,b,c)=>{const d=a.Ab.ga,e=a.node;if(!e)return[];const f=[];e.g()&&Ia(d,0)&&f.push(0);Ia(d,1)&&f.push(1);Ia(d,2)&&(!Ia(d,1)||0<ug(e).length)&&f.push(2);e.g()&&Ia(d,3)&&f.push(3);return f.map(g=>{g=new vk(a,g);b.forEach(g.g.add,g.g);g.l.push(...c);return g.build()})},yk=(a,b)=>{a=xj(b)?a.map.get(w(xj(b))):void 0;if(!a)return-1;switch(b.j){case 0:return a.start.fa();case 1:return a.start.fa()+1;case 2:return a.end.fa(); 
case 3:return a.end.fa()+1}return-1},zk=(a,b)=>{a=xj(b)?a.map.get(w(xj(b))):void 0;if(!a)return-1;switch(b.j){case 0:return a.start.fa()-.1;case 3:return a.end.fa()+.1;case 1:return a.start.fa()+.1;case 2:return a.end.fa()-.1}return-1};function Ak(a,b){b&&a.g.push(b);return a}function Bk(a,b){a.j.push(b);return a}function Ck(a,b){return Th(a.A,()=>{const c=[];for(let d=0;d<a.j.length;++d){const e=a.j[d].g(b);Ka(c,e);if(0<e.length)break}return c},"flap")} 
function Dk(a,b){return Th(a.A,()=>{if(0==a.g.length)var c=[];else{var d=Math.floor(zk(a.B,b));if((d=-1!=d?d+b.I()+"|"+b.A+"|10px|10px":null)&&Ef(a.l,d))c=a.l.get(d);else{var e=[],f=wj(b);try{for(let g=0;g<a.g.length;++g)if(c=a.g[g].g(f),Ka(e,c),0<c.length){b.l();break}}finally{b.l()}null!=d&&a.l.set(d,e);c=e}}return c},"flfa")}function Ek(a,b){const c=new Sh;Ck(a,b).then(d=>{0<d.length?c.resolve(d):Dk(a,b).then(e=>{c.resolve(d.concat(e))})});return c.g} 
class Fk{constructor(a,b){this.A=a;this.g=[];this.j=[];this.B=b;this.l=new Hf}};class Gk{constructor(a){this.j=a}g(a){if(!a)return[];for(let b=0;b<this.j.length;++b)if(this.j[b].A(a,!1))return[2];return[]}};class Hk{constructor(a,b){this.j=a;this.l=b}g(a){if(!a)return[9];const b=Of(this.j,!0);return null==b?[16]:b-a.j().bottom<this.l?[17]:[]}};class Ik{constructor(a,b){this.j=a;this.l=b}g(a){for(a=Math.floor(zk(this.j,a));0<a;a--){const b=this.j.ra[a];if(!b.g.Na()){if((0==b.j?yg(b.g).top:yg(b.g).bottom)<=this.l)break;return[]}}return[10]}};class Jk{constructor(a,b,c){this.j=a;this.g=b;this.l=c}};class Kk{constructor(a){const b=[];a=a.g.slice(0);for(let c=0;c<a.length;++c)b.push(a[c].j());this.l=b;this.j=new Hf}g(a){const b=w(a);if(Ef(this.j,b))return this.j.get(b);a:{var c=a.j();c=new Jk(c.left,c.top+a.F.scrollHeight,a.F.scrollWidth);for(e of this.l){b:{if(c.g>=Math.floor(e.bottom)){var d=!1;break b}d=Math.ceil(e.left);const f=c.j+c.l;d=!(Math.floor(e.right)<=c.j||f<=d)}if(d){var e=!0;break a}}e=!1}e=!e&&a.F.scrollHeight>a.F.clientHeight&&Ig(a);c=a.g();c=!c||this.g(c);a=e&&c?!0:e?Dg(a):c&& 
!Dg(a);this.j.set(b,a);return a}};class Lk{constructor(a,b){this.l=a;this.j=b}g(a){const b=xj(a);if(!b)return[];switch(a.j){case 0:case 3:return a=b.g(),b!=this.l&&a&&this.j.g(a)?[]:[14];case 1:case 2:return this.j.g(b)?[]:[14];default:throw Error("Unhandled position.");}}};class Mk{constructor(a){this.j=a}g(a){return(a=xj(a))&&Cg(a,this.j)?[11]:[]}};class Nk{};function Ok(a=null){({googletag:a}=a??window);return a?.apiReady?a:void 0};var Rk=(a,b)=>{var c=Ja(b.document.querySelectorAll(".google-auto-placed"));const d=Ja(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),e=Ja(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));var f;(f=Pk(b))||(f=Ja(b.document.querySelectorAll("div[id^=div-gpt-ad]")));f=f.concat(Ja(b.document.querySelectorAll("iframe[id^=google_ads_iframe]")));const g=Ja(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")), 
h=Ja(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),k=Ja(b.document.querySelectorAll("div.googlepublisherpluginad")),l=Ja(b.document.querySelectorAll("html > ins.adsbygoogle"));let m=[].concat(Ja(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")),Ja(b.document.querySelectorAll("body ins.adsbygoogle")));b=[];for(const [n,q]of[[a.Sd,c],[a.Ub,d],[a.Vd,e],[a.Td,f],[a.Wd,g],[a.Rd,h],[a.Ud,k],[a.Xd,l]])!1===n?b=b.concat(q):m=m.concat(q);a=Qk(m);c=Qk(b);a=a.slice(0); 
for(const n of c)for(c=0;c<a.length;c++)(n.contains(a[c])||a[c].contains(n))&&a.splice(c,1);return a},Tk=a=>{const b=Pk(vd(rd(a)))||[];return!!yd(a,c=>{if(!da(c)||1!=c.nodeType)return!1;const d=c.matches||c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector;return!d||Ia(b,c)||Ha(Od(Sk),e=>d.call(c,e))},!1,20)}; 
const Pk=a=>{const b=Ok(a);return b?Fa(Ga(b.pubads().getSlots(),c=>a.document.getElementById(c.getSlotElementId())),c=>null!=c):null},Sk={Ad:"ins.adsbygoogle-ablated-ad-slot",Cd:"body ins.adsbygoogle",Bd:"iframe[id^=aswift_],iframe[id^=google_ads_frame]",Dd:".google-auto-placed",Ed:"ins.adsbygoogle[data-anchor-status]",Gd:"iframe[id^=google_ads_iframe]",Jd:"div[id^=div-gpt-ad]",Kd:"ins.adsbygoogle[data-ad-format=autorelaxed]",Ld:"div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]", 
Id:"div.googlepublisherpluginad",Md:"html > ins.adsbygoogle"};var Qk=a=>{const b=[];for(const c of a){a=!0;for(let d=0;d<b.length;d++){const e=b[d];if(e.contains(c)){a=!1;break}if(c.contains(e)){a=!1;b[d]=c;break}}a&&b.push(c)}return b};var Uk=hk.U(453,Rk);function Vk(a){a=Wk(a);Xk(a);return new Yk(a)}function Zk(a){return a.g.map(b=>b.box)}class Yk{constructor(a){this.g=a.slice(0)}}function Wk(a){const b=Uk({Ub:!1},a),c=Rf(a),d=R(a);return b.map(e=>{const f=e.getBoundingClientRect();return(e=!!e.className&&-1!=e.className.indexOf("google-auto-placed"))||1<(f.bottom-f.top)*(f.right-f.left)?{box:{top:f.top+d,right:f.right+c,bottom:f.bottom+d,left:f.left+c},Od:e?1:0}:null}).filter(Fc(e=>null===e))}function Xk(a){Ga(a,()=>new Nk)};class $k{constructor(a,b,c){this.j=Uk({},c).map(y(a.g,a)).filter(Fc(d=>null===d));this.l=b}g(a){if(!a)return[9];a=a.j();for(let d=0;d<this.j.length;d++){const e=this.j[d].j();var b;if(b=1<(e.bottom-e.top)*(e.right-e.left)){b=a.top;var c=this.l;(b=e.top-c<b&&b<e.bottom+c)||(b=a.bottom,c=this.l,b=e.top-c<b&&b<e.bottom+c)}if(b)return[8]}return[]}};class al{constructor(a,b){this.j=a;this.l=b}g(a){if(yj(a))return[];a=zk(this.j.j,a);var b=Hh(this.j,a);if(!b)return[];const c=this.l.g(b.start.g);b=b.end.fa();return c&&10>=a-b?[5]:[]}};const bl="ASIDE DIV IMG LI SECTION TABLE TD".split(" ");class cl{g(a){a=xj(a);if(!a)return[12];if(!bl.includes(a.F.tagName)||a.F.id)return[];const b=Og(a),c=rg(a);for(const d of b)if(1==c.getElementsByClassName(d).length)return[];return 150>=a.j().getHeight()?[13]:[]}};class dl{g(a){return a&&!a.Na()&&Eg(a)?[]:[3]}};function el(a,b){return 0<a.g.length?(b.resolve(a.g.shift()),!0):!1}class fl{constructor(a,b){this.j=a;this.B=b;this.C=[];this.A=[];this.g=[]}Z(){const a=new Sh;this.j.g(new Oh(y(this.l,this,a),"p"));return a.g}l(a){el(this,a)||this.B.Z().then(y(this.I,this,a),y(a.j,a))}I(a,b){b=xk([b],this.C,this.A);Ka(this.g,b);el(this,a)||this.j.g(new Oh(y(this.l,this,a),"p"))}};class gl{constructor(a){this.g=a.filter(b=>yj(b));this.j=a.filter(b=>!yj(b))}Z(){return this.g.shift()||this.j.shift()||null}};class hl{};function il(a,b){a.j.g(new Oh(()=>{const c=a.g?a.g.Z():null;c?jl(a,b,c):a.B.Z().then(y(a.I,a,b),y(a.D,a,b))},"r"))}function jl(a,b,c){a.A&&a.A.apply(c);a.l?Ek(a.l,c).then(function(d){0==d.length?(0<a.g.g.length||(a.g=null),Uh(a.j,b,c,"rres")):(a.C.push(new hl),il(a,b))}):Uh(a.j,b,c,"rres")}class kl{constructor(a,b,c,d){this.j=a;this.B=b;this.A=c;this.l=d;this.g=null;this.C=[]}Z(){const a=new Sh;il(this,a);return a.g}I(a,b){this.g=b;il(this,a)}D(a){Vh(this.j,a)}};class ll{constructor(a){this.g=a}Z(){const a=new Sh;this.g.Z().then(b=>{a.resolve(new gl([b]))},y(a.j,a));return a.g}};class ml{constructor(a,b){this.g=a;this.j=b}apply(a){var b=yk(this.g,a);b=this.j.get(w(this.g.ra[b]));a.A=b.Wc<=b.dd}};class nl{constructor(a){this.j=a}g(a){a:{const b=xj(a);if(b){switch(a.j){case 0:case 3:if(a=b.g())break a;throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");case 1:case 2:a=b;break a}throw Error("Un-handled ad placement position.");}a=null}return a&&Ia(this.j,a.F)?[18]:[]}};var ol=[{hostname:/^([a-z]+.)?m.wikihow.com$/,Oc:"mw-mf-viewport"}];const pl=a=>{if(!a.location||!a.location.hostname)return[];var b=a.location.hostname,c=[];Ea(ol,function(d){b.match(d.hostname)&&(d=a.document.getElementById(d.Oc))&&c.push(d)});return c};function ql(a,b){a.j.g(new Oh(function(){if(a.g)if(a.l.g(a.g)){var c=a.g;a.g=wg(a.g);b.resolve(c)}else{a:{c=a.g;const d=ug(c);for(let e=0;e<d.length;++e)if(d[e].A()){c=d[e];break a}c=wg(c)}a.g=c;ql(a,b)}else b.j(null)},"fpar"))}const rl=class{constructor(a,b,c){this.j=a;this.g=b;this.l=c}Z(){var a=new Sh;ql(this,a);return a.g}};class sl{constructor(a){this.j=a;this.g=[]}reset(){const a=this.g;this.g=[];return a}};var tl={ga:[3],oa:!1,pa:0,na:1},ul=new $f(["LI","TR","TD","TH"]);function vl(a,b){a.j.g(new Oh(function(){a.B.Z().then(y(a.A,a,b),y(a.l,a,b))},"para"))} 
const wl=class{constructor(a,b,c){this.j=a;this.B=b;this.g=new sl(c)}Z(){var a=new Sh;vl(this,a);return a.g}A(a,b){var c=this.g;if(c.g.length){var d=c.g[c.g.length-1];var e=c.j;const f=e.j.map.get(w(b));(e=f?Hh(e,f.start.fa()):null)?(e=e.start.g,d=d==e||d!=e&&xd(d.F,e.F)):d=!0}else d=!0;d?c.g.push(b):c.g=[b];b=this.g;(b=3<=b.g.length?b.g[b.g.length-3+1]:null)&&!ul.contains(b.F.tagName)?a.resolve({node:b,Ab:Vi(tl),identifier:{}}):vl(this,a)}l(a){a.j("na")}};const xl=class extends Wh{constructor(){super();this.j=[];this.l=!1}g(a){this.j.push(a);if(!this.l){this.l=!0;try{for(;0<this.j.length;)this.j.shift().g()}finally{this.l=!1}}}};const yl=class{constructor(){this.g=Date.now();this.j=Date.now()}};var zl; 
function Al(){var a=u.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var e=wd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this); 
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!Aa()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cb;c.cb=null;e()}};return function(e){d.next={cb:e};d=d.next;b.port2.postMessage(0)}}return function(e){u.setTimeout(e,0)}};class Bl{constructor(a,b){this.l=a;this.A=b;this.j=0;this.g=null}get(){let a;0<this.j?(this.j--,a=this.g,this.g=a.next,a.next=null):a=this.l();return a}};function Cl(){var a=Dl;let b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.j=null),b.next=null);return b}class El{constructor(){this.j=this.g=null}add(a,b){const c=Fl.get();c.set(a,b);this.j?this.j.next=c:this.g=c;this.j=c}}var Fl=new Bl(()=>new Gl,a=>a.reset());class Gl{constructor(){this.next=this.g=this.j=null}set(a,b){this.j=a;this.g=b;this.next=null}reset(){this.next=this.g=this.j=null}};let Hl,Il=!1,Dl=new El,Kl=()=>{if(u.Promise&&u.Promise.resolve){const a=u.Promise.resolve(void 0);Hl=()=>{a.then(Jl)}}else Hl=()=>{var a=Jl;"function"!==typeof u.setImmediate||u.Window&&u.Window.prototype&&(za()||!z("Edge"))&&u.Window.prototype.setImmediate==u.setImmediate?(zl||(zl=Al()),zl(a)):u.setImmediate(a)}};var Jl=()=>{for(var a;a=Cl();){try{a.j.call(a.g)}catch(c){ma(c)}var b=Fl;b.A(a);100>b.j&&(b.j++,a.next=b.g,b.g=a)}Il=!1};var Ll=class extends Wh{constructor(a,b,c){var d=new yl;super();this.G=a;this.j=d;this.I=b||null;this.A=c||null;this.l=[];this.B=!1}g(a){this.l.push(a);this.B||(a=this.D,Hl||Kl(),Il||(Hl(),Il=!0),Dl.add(a,this))}D(){this.I?this.I(y(this.C,this)):this.C()}C(){if(!this.B){this.B=!0;try{for(this.j.g=Date.now();0<this.l.length;){var a=this.l.shift();this.j.j=Date.now();a.g();this.A&&this.A.j(Date.now()-this.j.j,a.j);if(50<Date.now()-this.j.g+10)break}0<this.l.length&&this.G.setTimeout(y(this.D,this), 
0)}finally{this.B=!1,this.A&&this.A.g(Date.now()-this.j.g)}}}};function Ml(a,b){var c=new Sh,d=b.G?new Ll(a,ja(jk,b.g?"lr:apf:"+b.g:"lr:apf"),b.D):new xl;d.g(new Oh(function(){ei(new hi(d),a,b).then(function(e){var f=e.j,g=e.A,h=e.l;a:{var k=e.j,l=e.g.B;switch(l){case 2:var m=k.A;l=e.l.g;l.A||(k=new Vg(nh(l),0),l.g||(l.g=new Zg(new Vg(nh(l),0))),l.A=new bh(k,new Vg(l.g,1),new Vg(oh(l),2)));m=new wl(d,new rl(d,m,new Vg(l.A,3)),e.A.g);break a;default:m=k.B;var n=k.g.ra;k=e.g;l=1==l?Xi(n):eg(n);m=new aj(m,l,k)}}m=new ll(new fl(d,m));l=new ml(f.g,g.l);k=new Fk(d, 
f.g);e.g.I&&Bk(k,new Ik(f.g,f.N));n=pl(f.j);h=Bk(Bk(Bk(Bk(k,new nl(n)),new al(g.g,new Vg(oh(h.g),2))),new cl),new Lk(f.A,new Kk(g.g)));n=new Dj;Ka(n.j,Ej);n=Cj(Cj(n,Fj),Gj);Ka(n.A,Ij);Ka(n.j,Hj);h=Ak(Bk(Bk(h,Cj(n,Hj)),new Mk(f.O*f.N)),new dl);var q=e.g,r=e.j.B;n=Math.max(r*q.A,q.minWidth);q=r*q.j;n=void 0!==n?n:0;q=void 0!==q?q:Infinity;if(0>n||0>q)throw Error("apf::wf");Ak(Ak(Ak(h,0>=n&&Infinity===q?null:new Nh(n,q)),new $k(f.A.l,e.g.C,f.j)),new Gk([g.g,g.j]));0<e.g.l&&Ak(k,new Hk(f.j,e.g.l));Uh(d, 
c,new kl(d,m,l,k),"itres")},y(c.j,c))},"i"));return c.g};class Nl{constructor(a){this.g=new $f(a)}contains(a){return this.g.contains(a)}};class Ol{constructor(a){this.g=a}getValue(){return this.g.value}map(a){return null!=this.g?(a=a(this.getValue()),a instanceof Ol?a:new Ol({value:a})):this}};function Pl(a){return b=>{for(const c of a)c(b)}};var Ql=class extends F{getValue(){return qc(this,2)}};var Rl=class extends F{};Rl.Ha=[3,4];var Sl=class extends F{};var Tl=class extends F{};Tl.Ha=[6,7,9,10,11];var Ul=class extends F{},Vl=yc(Ul);Ul.Ha=[1,2,5,7];xi(new ui(0,{}));xi(new ui(1,{}));class Wl{constructor(){var a=ke`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;this.g=null;this.j=!1;this.B=Math.random();this.l=this.Ta;this.I=a}Lb(a){this.g=a}A(a){this.j=a}Ta(a,b,c=.01,d,e="jserror"){if((this.j?this.B:Math.random())>c)return!1;b.error&&b.meta&&b.id||(b=new ze(b,{context:a,id:e}));if(d||this.g)b.meta={},this.g&&this.g(b.meta),d&&d(b.meta);u.google_js_errors=u.google_js_errors||[];u.google_js_errors.push(b);u.error_rep_loaded||(Jd(u.document,this.I),u.error_rep_loaded= 
!0);return!1}xa(a,b,c){try{return b()}catch(d){if(!this.l(a,d,.01,c,"jserror"))throw d;}}U(a,b){return(...c)=>this.xa(a,()=>b.apply(void 0,c))}};const Xl=(a,b)=>{b=b.google_js_reporting_queue=b.google_js_reporting_queue||[];2048>b.length&&b.push(a)}; 
var Yl=(a,b,c)=>{const d=c||window,e="undefined"!==typeof queueMicrotask;return function(){e&&queueMicrotask(()=>{d.google_rum_task_id_counter=d.google_rum_task_id_counter||1;d.google_rum_task_id_counter+=1});const f=Fe();let g,h=3;try{g=a.apply(this,arguments)}catch(k){h=13;if(!b)throw k;b(754,k)}finally{d.google_measure_js_timing&&f&&Xl({label:(754).toString(),value:f,duration:(Fe()||0)-f,type:h,...(e&&{taskId:d.google_rum_task_id_counter=d.google_rum_task_id_counter||1})},d)}return g}},Zl=(a,b)=> 
Yl(a,(c,d)=>{(new Wl).Ta(c,d)},b);function $l(a,b){return Zl(a,b).apply()}var am={1:1,2:2,3:3,0:0};function bm(a){return null==a?a:am[a]}function cm(a){for(var b=[],c=0;c<a.length;c++){var d=qc(a[c],1),e=qc(a[c],2);if(d&&null!=e){var f={};f.property=d;f.value=e;b.push(f)}}return b}function dm(a,b){var c={};a&&(c.Mb=qc(a,1),c.Bb=qc(a,2),c.Cb=!!ac(a,3));b&&(a=mc(b,Ql,3),c.sb=cm(a),b=mc(b,Ql,4),c.kb=cm(b));return c}var em={1:0,2:1,3:2,4:3};const fm=class{constructor(a){this.g=a}j(a,b,c,d){c=vj(d.document,this.g);c.Ia.setAttribute("data-ad-format","auto");uj(c,a,b);return c}};const gm=class{constructor(a){this.g=a}j(a,b,c,d){var e=0<mc(this.g,Rl,9).length?mc(this.g,Rl,9)[0]:null,f=dm(lc(this.g,Sl,3),e);if(!e)return null;if(e=qc(e,1)){d=d.document;var g=c.tagName;c=zd(new qd(d),g);c.style.clear=f.Cb?"both":"none";"A"==g&&(c.style.display="block");c.style.padding="0px";c.style.margin="0px";f.sb&&tj(c.style,f.sb);d=zd(new qd(d),"INS");f.kb&&tj(d.style,f.kb);c.appendChild(d);f={bb:c,Ia:d};f.Ia.setAttribute("data-ad-type","text");f.Ia.setAttribute("data-native-settings-key", 
e);uj(f,a,b);a=f}else a=null;return a}};function hm(a,b){a=a.j.query(b.document);return 0<a.length?a[0]:null}const im=class{constructor(a,b){this.j=a;this.g=b}};function jm(a){return a.A}function km(a){return K(Ci)?(a.B||(a.B=hm(a.g,a.l)),a.B):hm(a.g,a.l)}function lm(a){var b=a.J;a=a.l.document.createElement("div");K(Ci)?a.className="google-auto-placed-ad-placeholder":a.className="google-auto-placed";var c=a.style;c.textAlign="center";c.width="100%";c.height="0px";c.clear=b?"both":"none";return a}function mm(a,b){Ef(a.I,0)||a.I.set(0,[]);a.I.get(0).push(b)} 
class nm{constructor(a,b,c,d,e,f,g,h=null,k=null){this.g=a;this.R=b;this.J=c;this.Zb=d;e||new Bi;this.l=f;this.D=g;this.C=h;(this.G=k)&&lc(k,ti,1)&&pc(lc(k,ti,1),5);this.K=[];this.A=!1;this.I=new Hf;this.B=this.j=null}fa(){return this.D}};var om=a=>{switch(a.Zb){case 0:case 1:var b=a.G;null==b?a=null:(a=lc(b,ti,1),null==a?a=null:(b=Bb(Xb(b,2)),a=null==b?null:new ui(0,{Cc:[a],ld:b})));return null!=a?new Ol({value:a}):new Ol(null);case 2:return new Ol(null);default:return new Ol(null)}};function pm(a){a&&"function"==typeof a.Ja&&a.Ja()};function V(){this.I=this.I;this.R=this.R}V.prototype.I=!1;V.prototype.Ja=function(){this.I||(this.I=!0,this.ta())};function W(a,b){X(a,ja(pm,b))}function X(a,b){a.I?b():(a.R||(a.R=[]),a.R.push(b))}V.prototype.ta=function(){if(this.R)for(;this.R.length;)this.R.shift()()};function qm(a){return om(a.sa).map(b=>xi(b))}function rm(a){a.j=a.j||qm(a);return a.j}const sm=class{constructor(a,b,c){this.sa=a;this.g=b;this.Pa=c;this.j=null}fill(a,b){var c=this.sa;if(a=c.R.j(a,b,this.g,c.l)){b=a.bb;if(this.sa.A)throw Error("AMA:AP:AP");Qi(b,this.g,this.sa.g.g);c=this.sa;c.A=!0;K(Ci)&&(c.j&&Oi(c.j),c.j=null);null!=b&&c.K.push(b)}return a}};function tm(a){switch(a){case 0:return 0;case 1:return 1;case 2:return 2;case 3:return 3;default:return null}};function um(a,b){return $l(()=>{if(K(Ci)){var c=[],d=[];for(var e=0;e<a.length;e++){var f=a[e],g=km(f);if(g){if(!f.j&&!f.A){var h=null;try{var k=km(f);if(k){h=lm(f);Qi(h,k,f.g.g);var l=h}else l=null}catch(r){throw Oi(h),r;}f.j=l}(h=f.j)&&d.push({hd:f,lb:g,qa:h})}}if(0<d.length)for(l=R(b),k=Rf(b),e=0;e<d.length;e++){const {hd:r,lb:t,qa:v}=d[e];f=vm(v,k,l);c.push(new sm(r,t,f))}l=c}else{l=[];k=[];try{const r=[];for(let t=0;t<a.length;t++){var m=a[t],n=km(m);n&&r.push({ub:m,lb:n})}for(n=0;n<r.length;n++){m= 
k;g=m.push;{var q=r[n];const t=q.lb,v=q.ub,A=lm(v);try{Qi(A,t,v.g.g),h=A}catch(D){throw Oi(A),D;}}g.call(m,h)}c=R(b);d=Rf(b);for(g=0;g<k.length;g++)e=vm(k[g],d,c),f=r[g],l.push(new sm(f.ub,f.lb,e))}finally{for(c=0;c<k.length;c++)Oi(k[c])}}return l},b)}function vm(a,b,c){a=a.getBoundingClientRect();return new Jk(a.left+b,a.top+c,a.right-a.left)};function wm(a,b){const c={top:b.g-25,right:b.j+b.l,bottom:b.g+25,left:b.j};return!Ha(a,d=>Kf(d,c))};function xm(a){return function(b){return um(b,a)}}function ym(a){const b=Zk(Vk(a));return c=>wm(b,c.Pa)}function zm(a){if(!a.length)return Dc;const b=new Nl(a);return c=>b.contains(c.Zb)}function Am(a,b){if(0>=a)return Ec;const c=Nf(b).scrollHeight-a;return function(d){return d.Pa.g<=c}}const Bm=(a,b)=>b.Pa.g>=a,Cm=(a,b,c)=>{c=c.Pa.l;return a<=c&&c<=b};var Dm=class{La(a){return ym(a)}Fa(){return 9}};var Em=class{constructor(a){this.g=a}La(a){return Am(this.g,a)}Fa(){return 13}};var Fm=class{La(a){const b=Nf(a).clientHeight;return b?ja(Bm,b+R(a)):Dc}Fa(){return 12}};var Gm=class{constructor(a){this.g=a}La(){return zm(this.g)}Fa(){return 1}};var Hm=class{La(){return Fc(jm)}Fa(){return 7}};var Im=class{constructor(a,b){this.minWidth=a;this.g=b}La(){return ja(Cm,this.minWidth,this.g)}Fa(){return 10}};var Jm=class{constructor(a){this.A=a.j.slice(0);this.j=a.g.slice(0);this.l=a.l;this.B=a.B;this.g=a.A}};function Km(a=0,b=Infinity){var c=new Lm,d=[0];c.A=d;c.j.push(new Gm(d));c.j.push(new Hm);c.g.push(new Dm);c.g.push(new Im(a,b));return c}function Mm(a,b=0){a.g.push(new Em(b));return a}var Lm=class{constructor(){this.l=0;this.B=!1;this.j=[].slice(0);this.g=[].slice(0)}build(){return new Jm(this)}};function Nm(a,b,c){Ef(a.g,b)||a.g.set(b,[]);a.g.get(b).push(c)}class Om{constructor(){this.g=new Hf}};function Pm(a,b,c){const d=b.sa;if(!Ef(a.g,d)){var e=a.g,f=e.set;b=rm(b);null!=b.g&&b.getValue();f.call(e,d,new Qm)}c(a.g.get(d))}function Rm(a,b){Pm(a,b,c=>{c.g=!0})}function Sm(a,b){Pm(a,b,c=>{c.j=!0})}var Tm=class{constructor(){this.g=new Hf}};class Qm{constructor(){this.j=this.g=!1}};class Um{constructor(a){this.j=a;this.g=-1}};function Vm(a){let b=0;for(;a;)(!b||a.previousElementSibling||a.nextElementSibling)&&b++,a=a.parentElement;return b};function Wm(a){const b=null.Hd.filter(c=>Gf(c.Db).every(d=>c.Db.get(d)===a.get(d)));return 0===b.length?(null.Ac.push(19),null):b.reduce((c,d)=>c.Db.Eb()>d.Db.Eb()?c:d,b[0])}function Xm(a){a=rm(a);if(null==a.g)return null.Ac.push(18),null;a=a.getValue();if(Ef(null.bc,a))return null.bc.get(a);var b=vi(a);b=Wm(b);null.bc.set(a,b);return b};function Ym(a){return 0==a.g.length?a:ri(a,(b,c)=>(Xm(b)?.kd??Number.MAX_VALUE)-(Xm(c)?.kd??Number.MAX_VALUE))}function Zm(a,b){var c=b.g;const d=b.sa.g.g;c=b.Pa.g+200*Math.min(20,0==d||3==d?Vm(c.parentElement):Vm(c));a=a.g;0>a.g&&(a.g=Nf(a.j).scrollHeight||0);b=a.g-b.Pa.g;return c+(1E3<b?0:2*(1E3-b))}function $m(a,b){return 0==b.g.length?b:ri(b,(c,d)=>Zm(a,c)-Zm(a,d))} 
function an(a,b){return ri(b,(c,d)=>{const e=c.sa.C,f=d.sa.C;var g;null==e||null==f?g=null==e&&null==f?Zm(a,c)-Zm(a,d):null==e?1:-1:g=e-f;return g})}class bn{constructor(a){this.g=new Um(a)}};function cn(a,b){var c=a.l;for(var d of b.A)c=pi(c,d.La(a.g),dn(d.Fa()));d=c=c.apply(xm(a.g));for(const e of b.j)d=pi(d,e.La(a.g),Pl([en(e.Fa()),f=>{(void 0)?.Zd(f,e.Fa())}]));switch(b.l){case 1:d=$m(a.j,d);break;case 2:d=an(a.j,d);break;case 3:const e=I(Tm);d=Ym(d);c.forEach(f=>{Rm(e,f);null?.Fd(f)});d.forEach(f=>Sm(e,f))}b.B&&(d=si(d,md(a.g.location.href+a.g.localStorage.google_experiment_mod)));1===b.g?.length&&Nm(a.A,b.g[0],{Pd:c.g.length,ee:d.g.length});return d.g.slice(0)} 
class fn{constructor(a,b){this.l=new qi(a);this.j=new bn(b);this.g=b;this.A=new Om}}const dn=a=>b=>mm(b,a),en=a=>b=>mm(b.sa,a);var gn=(a,b,c,d=null)=>{const e=g=>{let h;try{h=JSON.parse(g.data)}catch(k){return}!h||h.googMsgType!==b||d&&/[:|%3A]javascript\(/i.test(g.data)&&!d(h,g)||c(h,g)};G(a,"message",e);let f=!1;return()=>{let g=!1;f||(f=!0,g=H(a,"message",e));return g}},hn=(a,b,c,d,e)=>{if(!(0>=e)&&(c.googMsgType=b,a.postMessage(JSON.stringify(c),d),a=a.frames))for(let f=0;f<a.length;++f)1<e&&hn(a[f],b,c,d,--e)};function jn(a,b,c,d){return gn(a,"fullscreen",d.U(952,(e,f)=>{if(f.source===b){if(!("eventType"in e))throw Error(`bad message ${JSON.stringify(e)}`);delete e.googMsgType;c(e)}}))};class kn{constructor(){this.promise=new Promise(a=>{this.resolve=a})}};async function ln(a){return a.A.promise}async function mn(a){return a.j.promise}async function nn(a){return a.l.promise}function on(a,b){b.type="err_st";b.slot=a.slotType;b.freq=.25;a.qem&&(b.qem=a.qem);b.tag_type=a.yb.td;b.version=a.yb.version;We(a.B,"fullscreen_tag",b,!1,.25)} 
class pn extends V{constructor(a,b,c,d,e){super();this.slotType=1;this.pubWin=a;this.Pb=b;this.M=c;this.B=d;this.yb=e;this.g=1;this.qem=null;this.A=new kn;this.j=new kn;this.l=new kn}ua(){const a=jn(this.pubWin,this.Pb,b=>{if("adError"===b.eventType)this.l.resolve(),this.g=4;else if("adReady"===b.eventType&&1===this.g)this.qem=b.qem,b.slotType!==this.slotType&&(on(this,{cur_st:this.g,evt:b.eventType,adp_tp:b.slotType}),this.g=4),this.A.resolve(),this.g=2;else if("adClosed"===b.eventType&&2===this.g)this.j.resolve(b.result), 
this.g=3;else if("adClosed"!==b.eventType||3!==this.g)on(this,{cur_st:this.g,evt:b.eventType}),this.g=4},this.M);X(this,a)}}function qn(a,b,c,d,e){a=new pn(a,b,c,d,e);a.ua();return a};var rn=class extends F{};rn.Ha=[19];function sn(a){a.google_reactive_ads_global_state?(null==a.google_reactive_ads_global_state.sideRailProcessedFixedElements&&(a.google_reactive_ads_global_state.sideRailProcessedFixedElements=new Set),null==a.google_reactive_ads_global_state.sideRailAvailableSpace&&(a.google_reactive_ads_global_state.sideRailAvailableSpace=new Map),null==a.google_reactive_ads_global_state.sideRailPlasParam&&(a.google_reactive_ads_global_state.sideRailPlasParam=new Map)):a.google_reactive_ads_global_state=new tn;return a.google_reactive_ads_global_state} 
class tn{constructor(){this.wasPlaTagProcessed=!1;this.wasReactiveAdConfigReceived={};this.adCount={};this.wasReactiveAdVisible={};this.stateForType={};this.reactiveTypeEnabledInAsfe={};this.wasReactiveTagRequestSent=!1;this.reactiveTypeDisabledByPublisher={};this.tagSpecificState={};this.messageValidationEnabled=!1;this.floatingAdsStacking=new un;this.sideRailProcessedFixedElements=new Set;this.sideRailAvailableSpace=new Map;this.sideRailPlasParam=new Map}} 
var un=class{constructor(){this.maxZIndexRestrictions={};this.nextRestrictionId=0;this.maxZIndexListeners=[]}};function vn(a,b){a=sn(a)?.tagSpecificState[1];return null==a?null:a.debugCard?.getAdType()===b?a.debugCard:null};let wn=void 0;function xn(a){uc(wn,Ze);wn=a};function yn(a,b){var c=b.adClient;if("string"===typeof c&&c){a.j=c;a.A=!!b.adTest;c=b.pubVars;da(c)&&(a.I=c);if(Array.isArray(b.fillMessage)&&0<b.fillMessage.length){a.g={};for(d of b.fillMessage)a.g[d.key]=d.value}a.B=b.adWidth;a.l=b.adHeight;a.G=!!b.delayVisibleUntilCreativeReadyMessage;ye(a.B)&&ye(a.l)||lk("rctnosize",b);var d=!0}else d=!1;return d&&a.C(b)}var zn=class{constructor(){this.g=this.I=this.A=this.j=null;this.l=this.B=0;this.G=!1}C(){return!0}};var An=class extends zn{constructor(){super();this.g=null}C(a){a.hasFillMessage||(this.g=null);return!0}};function Bn({oc:a,Qb:b,fc:c,qc:d,Rb:e,hc:f}){const g=[];for(let n=0;n<f;n++)for(let q=0;q<c;q++){var h=q,k=c-1,l=n,m=f-1;g.push({x:a+(0===k?0:h/k)*(b-a),y:d+(0===m?0:l/m)*(e-d)})}return g}function Cn(a,b){a.hasOwnProperty("_goog_efp_called_")||(a._goog_efp_called_=a.elementFromPoint(b.x,b.y));return a.elementFromPoint(b.x,b.y)};function Dn(a,b){for(const e of b){var c;b=a;var d=Cn(b.P.document,e);if(d){if(!(c=En(b,d,e)))a:{c=b.P.document;for(d=d.offsetParent;d&&d!==c.body;d=d.offsetParent){const f=En(b,d,e);if(f){c=f;break a}}c=null}b=c||null}else b=null;if(b)return b}return null}function En(a,b,c){if("fixed"!==oe(b,"position"))return null;var d="GoogleActiveViewInnerContainer"===b.getAttribute("class")||1>=ue(b).width&&1>=ue(b).height||a.g.Nc&&!a.g.Nc(b)?!0:!1;a.g.Tb&&a.g.Tb(b,c,d);return d?null:b} 
var Fn=class{constructor(a){this.P=a;this.g={Tb:void 0}}};var Gn=a=>{const b=812===a.screen.height&&375===a.screen.width||812===a.screen.width&&375===a.screen.height||414===a.screen.width&&896===a.screen.height||896===a.screen.width&&414===a.screen.height;return null!=(a.navigator&&a.navigator.userAgent&&a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/))&&b};const Hn=90*1.38;Oa||Ba();function In(){var a=new Jn;{u.google_llp||(u.google_llp={});var b=u.google_llp;let c=b[1];if(!c){const {promise:d,resolve:e}=new kn;c={promise:d,resolve:e};b[1]=c}b=c}b.resolve(a)};function Kn(a){return a.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};function Ln(a){const b=d=>{d.isTrusted&&(a.A=!0,a.l(d.timeStamp))},c=d=>{d.isTrusted&&(a.A=!1,a.l(d.timeStamp))};G(a.g,"focus",b);G(a.g,"blur",c);X(a,()=>void a.g.removeEventListener("focus",b));X(a,()=>void a.g.removeEventListener("blur",c));a.A=a.g.document.hasFocus()}function Mn(a){const b=c=>{c.isTrusted&&(a.j=1===Kn(a.g.document)?!0:!1,a.l(c.timeStamp))};G(a.g.document,"visibilitychange",b);X(a,()=>void a.g.document.removeEventListener("visibilitychange",b));a.j=1===Kn(a.g.document)} 
function Nn(a){const b=a.g.document.body.getBoundingClientRect().top+10,c=d=>{d.isTrusted&&(a.B=d.clientY<b?!0:!1,a.l(d.timeStamp))};G(a.g.document.body,"mouseleave",c);G(a.g.document.body,"mouseenter",c);X(a,()=>void a.g.document.body.removeEventListener("mouseleave",c));X(a,()=>void a.g.document.body.removeEventListener("mouseenter",c));a.B=!1} 
var On=class extends V{constructor(a,b){super();this.g=a;this.B=this.A=this.j=!1;if(Fe(a)&&b.length)for(const c of b)switch(c){case 0:Ln(this);break;case 1:Mn(this);break;case 2:Nn(this)}else this.Ja()}ua(){this.I||this.l(Fe(this.g))}};var Pn=class extends On{constructor(){super(...arguments);this.G=new kn;this.D=this.G.promise}};var Qn=class extends Pn{constructor(a){super(a,[0,1,2]);this.C=0;this.ua()}l(a){switch(this.C){case 0:this.A&&!this.B&&(this.C=1);break;case 1:if(!this.A&&this.j&&this.B){this.C=2;const b=setTimeout(()=>{this.l(a)},200);X(this,()=>void clearTimeout(b))}break;case 2:!this.A&&this.j&&this.B?(this.G.resolve(a),this.Ja()):this.C=1}}};var Rn=class extends Pn{constructor(a){super(a,[1]);this.ua()}l(a){this.C??(this.C=0);switch(this.C){case 0:this.j&&(this.C=1);break;case 1:this.j||(this.C=2,this.K=a);break;case 2:this.j&&(this.J=a-this.K,this.G.resolve(a),this.Ja())}}};var Sn=class extends V{constructor(a,b,c){super();c.promise.then(()=>void this.Ja());for(const d of b)switch(d){case 2:b=new Rn(a);W(this,b);b.D.then(()=>void c.resolve(d));break;case 3:0===Td()&&(b=new Qn(a),W(this,b),b.D.then(()=>void c.resolve(d)))}}};function Tn(a,b=[]){const c=Date.now();return Fa(b,d=>c-d<1E3*a)}function Un(a,b){try{const c=a.getItem("__lsv__");if(!c)return[];let d;try{d=JSON.parse(c)}catch(e){}if(!Array.isArray(d)||Ha(d,e=>!Number.isInteger(e)))return a.removeItem("__lsv__"),[];d=Tn(b,d);d.length||a?.removeItem("__lsv__");return d}catch(c){return null}};const Vn={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1,NOSCRIPT:1},Wn={IMG:" ",BR:"\n"};var Xn=(a,b,c,d)=>{if(!(a.nodeName in Vn))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Wn)d&&"IMG"==a.nodeName&&a.hasAttribute("alt")&&b.push(" "+a.getAttribute("alt")),b.push(Wn[a.nodeName]);else for(a=a.firstChild;a;)Xn(a,b,c,d),a=a.nextSibling},Yn=/ \xAD /g,Zn=/\xAD/g,$n=/\u200B/g,ao=/ +/g,bo=/^\s*/;function co(a,b){return null!==yd(a,c=>c.nodeType===Node.ELEMENT_NODE&&b.has(c),!0)}function eo(a,b){return yd(a,c=>c.nodeType===Node.ELEMENT_NODE&&"fixed"===b.getComputedStyle(c,null).position,!0)}function fo(a){const b=[];for(const c of a.document.querySelectorAll("*")){const d=a.getComputedStyle(c,null);"fixed"===d.position&&"none"!==d.display&&"hidden"!==d.visibility&&b.push(c)}return b}function go(a){return Math.round(10*Math.round(a/10))} 
function ho(a){return`${a.position}-${go(a.O)}x${go(a.N)}-${go(a.scrollY+a.Ua)}Y`}function io(a){return`f-${ho({position:a.position,Ua:a.Ua,scrollY:0,O:a.O,N:a.N})}`}function jo(a,b){a=Math.min(a??Infinity,b??Infinity);return Infinity!==a?a:0} 
function ko(a,b,c){const d=sn(c.P).sideRailProcessedFixedElements;if(!d.has(a)){var e=a.getBoundingClientRect();if(e){var f=Math.max(e.top-10,0),g=Math.min(e.bottom+10,c.N),h=Math.max(e.left-10,0);e=Math.min(e.right+10,c.O);for(var k=.3*c.O;f<=g;f+=10){if(0<e&&h<k){var l=io({position:"left",Ua:f,O:c.O,N:c.N});b.set(l,jo(b.get(l),h))}if(h<c.O&&e>c.O-k){l=io({position:"right",Ua:f,O:c.O,N:c.N});const m=c.O-e;b.set(l,jo(b.get(l),m))}}d.add(a)}}} 
function lo(a){if(1200>a.O||650>a.N)return null;var b=sn(a.P).sideRailAvailableSpace;if(!a.Uc){var c={P:a.P,O:a.O,N:a.N,Sa:a.Sa},d=`f-${go(c.O)}x${go(c.N)}`;if(!b.has(d)){b.set(d,0);sn(c.P).sideRailProcessedFixedElements.clear();d=new Set([...Array.from(c.P.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")),...c.Sa]);for(var e of fo(c.P))co(e,d)||ko(e,b,c)}}c=[];d=.9*a.N;var f=R(a.P),g=e=(a.N-d)/2,h=d/7;for(var k=0;8>k;k++){var l=c,m=l.push;a:{var n=g;var q=a.position,r=b, 
t={P:a.P,O:a.O,N:a.N,Sa:a.Sa};const J=io({position:q,Ua:n,O:t.O,N:t.N}),x=ho({position:q,Ua:n,scrollY:f,O:t.O,N:t.N});if(r.has(x)){n=jo(r.get(J),r.get(x));break a}const E="left"===q?20:t.O-20;let L=E;q=.3*t.O/5*("left"===q?1:-1);for(let oa=0;6>oa;oa++){var v=Cn(t.P.document,{x:Math.round(L),y:Math.round(n)}),A=co(v,t.Sa),D=eo(v,t.P);if(!A&&null!==D){ko(D,r,t);r.delete(x);break}A||(A=t,"true"===v.getAttribute("google-side-rail-overlap")?A=!0:"false"===v.getAttribute("google-side-rail-overlap")?A=!1: 
(D=v.offsetHeight>=.25*A.N,A=v.offsetWidth>=.9*A.O&&D));if(A)r.set(x,Math.round(Math.abs(L-E)+20));else if(L!==E)L-=q,q/=2;else{r.set(x,0);break}L+=q}n=jo(r.get(J),r.get(x))}m.call(l,n);g+=h}b=a.nd;f=a.position;d=Math.round(d/8);e=Math.round(e);g=a.minWidth;a=a.minHeight;m=[];h=Array(c.length).fill(0);for(l=0;l<c.length;l++){for(;0!==m.length&&c[m[m.length-1]]>=c[l];)m.pop();h[l]=0===m.length?0:m[m.length-1]+1;m.push(l)}m=[];k=c.length-1;l=Array(c.length).fill(0);for(n=k;0<=n;n--){for(;0!==m.length&& 
c[m[m.length-1]]>=c[n];)m.pop();l[n]=0===m.length?k:m[m.length-1]-1;m.push(n)}m=null;for(k=0;k<c.length;k++)if(n={position:f,width:Math.round(c[k]),height:Math.round((l[k]-h[k]+1)*d),offsetY:e+h[k]*d},r=n.width>=g&&n.height>=a,0===b&&r){m=n;break}else 1===b&&r&&(!m||n.width*n.height>m.width*m.height)&&(m=n);return m}function mo(a){if(a.M)return a.M.xa(1228,()=>lo(a))||null;try{return lo(a)}catch{}return null};var no=(a,b,c)=>{a.dataset.adsbygoogleStatus="reserved";a.className+=" adsbygoogle-noablate";c.adsbygoogle||(c.adsbygoogle=[],Jd(c.document,ke`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));c.adsbygoogle.push({element:a,params:b})};const oo=[1,2];function po(a,b,c){const d=wd(document,"INS");d.className="adsbygoogle";b.document.body.appendChild(d);const e=c.I||{};e.google_ad_client=c.j;e.google_ad_width=c.B;e.google_ad_height=c.l;e.google_reactive_ad_format=a.g;c.g&&(e.google_reactive_fill_message=c.g);c.A&&(e.google_adtest="on");c.G&&(e.gdvucrm=c.G);no(d,e,b)} 
var qo=class{constructor(a){this.g=a}verifyAndProcessConfig(a,b){const c=sn(a);if(c.wasReactiveAdConfigReceived[this.g])return!1;const d=new An;if(!yn(d,b))return!1;oo.forEach(e=>{c.wasReactiveAdConfigReceived[e]=!0});po(this,a,d);return!0}};function ro(a,b,c){try{if(!be(c.origin)||!Pf(c,a.J.contentWindow))return}catch(f){return}const d=b.msg_type;let e;"string"===typeof d&&(e=a.Ca[d])&&a.M.xa(168,()=>{e.call(a,b,c)})} 
class so extends V{constructor(a,b,c,d,e={}){super();this.l=a;this.J=b;this.M=c;this.ab=d;this.Ca={};this.ob=this.M.U(168,(f,g)=>void ro(this,f,g));this.rb=this.M.U(169,(f,g)=>{We(this.ab,"ras::xsf",{c:g.data.substring(0,500),u:this.l.location.href.substring(0,500)},!0,.1);return!0});this.ba=[];this.W(this.Ca,e);this.ba.push(gn(this.l,"sth",this.ob,this.rb))}ta(){for(const a of this.ba)a();this.ba.length=0;super.ta()}};class to extends so{constructor(a,b){super(a,b,hk,gk)}};function uo(a){const b=c=>{try{const e=JSON.parse(c.data);if("floating"===e.type&&"loaded"===e.message){var d=a.g;d.gb=!0;const f=d.j;d.ia&&d.gb&&f?.setAttribute("data-anchor-status","ready-to-display");vo(a.g);a.l.removeEventListener("message",b)}}catch{}};a.l.addEventListener("message",b);X(a,()=>{a.l.removeEventListener("message",b)})} 
var Co=class extends to{constructor(a,b,c,d=!1){super(a,b.l);a=this.g=b;if((b=a.j)&&!a.A){for(var e in wo)!wo.hasOwnProperty(e)||e in c||(c[e]=wo[e]);a.yc="true"===c.use_manual_view||"top"===a.B||!!sn(a.g).wasReactiveAdConfigReceived[2];a.xc="true"===c.use_important;if(e=c.af_l)a.za="true"===e;a.Y="true"===c.wait_for_scroll||"top"==a.B;a.rb=a.Y&&("true"===c.tsec||"top"==a.B);xo(a,c);a.A=yo(a,c);c=a.C.height+5;"bottom"==a.B&&Gn(a.g)&&(c+=20);a.da=new jd(a.C.width,c);a.eb=a.pb>=a.ic;c=a.j;e=a.A&&zo(a.A); 
c&&e&&("top"==a.B?c.appendChild(e):c.insertBefore(e,c.firstChild));Ao(a);a.ca=!0;b.setAttribute("data-anchor-status","ready-to-display")}d?(d=this.g,d.ia=!0,d.j?.removeAttribute("data-anchor-status"),uo(this)):vo(this.g)}W(a){a.dismiss=Hc(()=>{var b=this.g;b.A&&Bo(b.A,!0)})}};class Do{constructor(a,b){this.l=a;this.g=!1;this.A=b;this.j=this.A.U(264,c=>{this.g&&(Eo||(c=Date.now()),this.l(c),Eo?Fo.call(u,this.j):u.setTimeout(this.j,17))})}start(){this.g||(this.g=!0,Eo?Fo.call(u,this.j):this.j(0))}}var Fo=u.requestAnimationFrame||u.webkitRequestAnimationFrame,Eo=!!Fo&&!/'iPhone'/.test(u.navigator.userAgent);function Go(a){return a*a*a}function Ho(a){a=1-a;return 1-a*a*a}function Io(a){a.R=!1;a.B.start()} 
class Jo{constructor(a,b,c,d){this.j=a;this.I=b;this.J=c;this.progress=0;this.g=null;this.R=!1;this.l=[];this.A=null;this.B=new Do(y(this.K,this),d)}K(a){if(this.R)this.B.g=!1;else{null===this.g&&(this.g=a);this.progress=(a-this.g)/this.J;1<=this.progress&&(this.progress=1);a=this.A?this.A(this.progress):this.progress;this.l=[];for(let b=0;b<this.j.length;b++)this.l.push((this.I[b]-this.j[b])*a+this.j[b]);this.G();1==this.progress&&(this.B.g=!1,this.C())}}C(){}G(){}reset(a,b,c){this.g=null;this.j= 
a;this.I=b;this.J=c;this.progress=0}};class Ko extends Jo{constructor(a,b,c,d,e,f,g,h){super([b],[c],d,f);this.L=a;this.ta=e;this.D=g?g:null;this.A=h||null}G(){const a={};a[this.ta]=this.l[0]+"px";O(this.L,a)}C(){this.D&&this.D()}};function Lo(a){a.g&&H(a.g,a.j,a.l,Jc)}class Mo extends V{constructor(a,b,c){super();this.g=a;this.j=b;this.l=c;G(this.g,this.j,this.l,Jc);X(this,()=>void Lo(this))}}class No{constructor(){this.reset()}add(a){const b=Date.now();this.g.push({time:b,coords:a});for(a=this.j;a<this.g.length;++a)if(100<=b-this.g[a].time)delete this.g[a];else break;this.j=a;a>=this.g.length&&this.reset()}reset(){this.g=[];this.j=0}} 
function Oo(a,b){a.C&&Po(a);a.C=!0;a.l=a.W();a.j=Qo(b);a.g=a.j;a.B=new No;a.B.add(a.j);a.J=new Mo(a.A,"mousemove",y(a.da,a));W(a,a.J);a.L=new Mo(a.A,"touchmove",y(a.da,a));W(a,a.L);a.G=new Mo(a.A,"mouseup",y(a.ea,a));W(a,a.G);a.K=new Mo(a.A,"touchend",y(a.ea,a));W(a,a.K)}function Qo(a){a=a.touches&&a.touches[0]||a;return new M(a.clientX,a.clientY)}function Po(a){a.C=!1;a.D=!1;a.l=null;a.j=null;a.g=null;a.B=null;a.J&&Lo(a.J);a.L&&Lo(a.L);a.G&&Lo(a.G);a.K&&Lo(a.K)} 
class Ro extends V{constructor(a,b,c){super();this.A=a;this.target=b;this.handle=c||b;this.D=this.C=this.T=!1;this.B=this.g=this.j=this.l=this.K=this.G=this.L=this.J=null;this.ma=new Mo(this.handle,"mousedown",d=>{0==d.button&&Oo(this,d)});W(this,this.ma);this.Ca=new Mo(this.handle,"touchstart",d=>Oo(this,d));W(this,this.Ca);this.la=new Mo(this.handle,"click",d=>{this.T?this.T=!1:d.stopPropagation()});W(this,this.la)}ba(){if(this.l&&this.j&&this.g){var a=this.l,b=id(this.g,this.j);var c=new M(a.x+ 
b.x,a.y+b.y);a=this.target;c instanceof M?(b=c.x,c=c.y):(b=c,c=void 0);a.style.left=te(b,!1);a.style.top=te(c,!1)}}X(){}W(){var a=this.target,b;a:{if(Pc&&(b=a.parentElement))break a;b=a.parentNode;b=da(b)&&1==b.nodeType?b:null}var c=b;b=re(a);c=re(c);b=new M(b.x-c.x,b.y-c.y);a=xe(a,"margin");return id(b,new M(a.left,a.top))}da(a){if(this.C)if(a.preventDefault(),this.g=Qo(a),this.B.add(this.g),this.D)this.ba();else{var b=this.j,c=this.g;a=b.x-c.x;b=b.y-c.y;10<=Math.sqrt(a*a+b*b)&&(this.ba(),this.D= 
!0)}}ea(a){this.D?(a.preventDefault(),this.g=Qo(a),this.X()):this.T=!0;Po(this)}};function So(a){const b=To(a);Ea(a.g.maxZIndexListeners,c=>c(b))}function To(a){a=Od(a.g.maxZIndexRestrictions);return a.length?Math.min.apply(null,a):null}function Uo(a,b){a.g.maxZIndexListeners.push(b);b(To(a))}class Vo{constructor(a){this.g=sn(a).floatingAdsStacking}}class Wo{constructor(a){this.j=a;this.g=null}};function Xo(a){var b=a.ownerDocument;const c=b.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("x1","22");c.setAttribute("y1","18");c.setAttribute("x2","28");c.setAttribute("y2","12");a.appendChild(c);b=b.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1","28");b.setAttribute("y1","12");b.setAttribute("x2","34");b.setAttribute("y2","18");a.appendChild(b)} 
function Yo(a){var b=a.ownerDocument;const c=b.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("x1","22");c.setAttribute("y1","12");c.setAttribute("x2","28");c.setAttribute("y2","18");a.appendChild(c);b=b.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1","28");b.setAttribute("y1","18");b.setAttribute("x2","34");b.setAttribute("y2","12");a.appendChild(b)} 
function Bo(a,b){if(!a.A&&a.j){var c=parseInt(a.j.style[a.g],10),d=-(4===a.l?null.maxHeight:a.D.height)-(b?30:0),e=(c-d)/.1;"bottom"==a.g&&Gn(a.P)&&a.M.xa(405,()=>Zo(a,"21px",e,"ease-in"));b||$o(a,!0);c===d?b||(a.l=0):(a.A=!0,c=new Ko(a.j,c,d,e,a.g,a.M,()=>{a.A=!1;b||(a.l=0);b||$o(a,!0);b&&a.da();a.j.setAttribute("data-anchor-status","dismissed")},Go),a.Y(),Io(c))}} 
function ap(a,b){Tf(b);N(b,{"background-color":"#FAFAFA",display:"block",position:"relative","z-index":1,height:"5px","box-shadow":"top"==a.g?"rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px":"rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"});"top"==a.g&&N(a.B??b,{position:"absolute",top:a.D.height+"px",width:"100%"});const c=Kd("SPAN",a.P.document);c.appendChild(bp(a));const d=e=>{e.target===c&&(e.preventDefault&&e.preventDefault(),e.stopImmediatePropagation&& 
e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation())};G(c,"click",d);X(a,()=>H(c,"click",d));cp(a,c);b.className="ee";b.appendChild(c)} 
function bp(a){let b;let c,d;switch(a.g){case "top":var e="dropShadowBottom";b="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";var f="0";c="up";d=Xo;break;case "bottom":e="dropShadowTop",b="M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z",f="25",c="down",d=Yo}const g=a.P.document,h=g.createElementNS("http://www.w3.org/2000/svg","svg");h.style.setProperty("margin","0 0 0 0px","important");h.style.setProperty("position","absolute","important"); 
h.style.setProperty(a.g,"0","important");h.style.setProperty("left","0%","important");h.style.setProperty("display","block","important");h.style.setProperty("width","80px","important");h.style.setProperty("height","30px","important");h.style.setProperty("transform","none","important");h.style.setProperty("pointer-events","initial","important");a=g.createElementNS("http://www.w3.org/2000/svg","defs");const k=g.createElementNS("http://www.w3.org/2000/svg","filter");k.setAttribute("id",e);k.setAttribute("filterUnits", 
"userSpaceOnUse");k.setAttribute("color-interpolation-filters","sRGB");var l=g.createElementNS("http://www.w3.org/2000/svg","feComponentTransfer");l.setAttribute("in","SourceAlpha");l.setAttribute("result","TransferredAlpha");var m=g.createElementNS("http://www.w3.org/2000/svg","feFuncR");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);m=g.createElementNS("http://www.w3.org/2000/svg","feFuncG");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5"); 
l.appendChild(m);m=g.createElementNS("http://www.w3.org/2000/svg","feFuncB");m.setAttribute("type","discrete");m.setAttribute("tableValues","0.5");l.appendChild(m);k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");l.setAttribute("in","TransferredAlpha");l.setAttribute("stdDeviation","2");k.appendChild(l);l=g.createElementNS("http://www.w3.org/2000/svg","feOffset");l.setAttribute("dx","0");l.setAttribute("dy","0");l.setAttribute("result","offsetblur");k.appendChild(l); 
l=g.createElementNS("http://www.w3.org/2000/svg","feMerge");l.appendChild(g.createElementNS("http://www.w3.org/2000/svg","feMergeNode"));m=g.createElementNS("http://www.w3.org/2000/svg","feMergeNode");m.setAttribute("in","SourceGraphic");l.appendChild(m);k.appendChild(l);a.appendChild(k);h.appendChild(a);a=g.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",b);a.setAttribute("stroke","#FAFAFA");a.setAttribute("stroke-width","1");a.setAttribute("fill","#FAFAFA");a.style.setProperty("filter", 
`url(#${e})`);h.appendChild(a);e=g.createElementNS("http://www.w3.org/2000/svg","rect");e.setAttribute("x","0");e.setAttribute("y",f);e.setAttribute("width","80");e.setAttribute("height","5");e.style.setProperty("fill","#FAFAFA");h.appendChild(e);f=g.createElementNS("http://www.w3.org/2000/svg","g");f.setAttribute("class",c);f.setAttribute("stroke","#616161");f.setAttribute("stroke-width","2px");f.setAttribute("stroke-linecap","square");d(f);h.appendChild(f);return h} 
function cp(a,b){const c=b.getElementsByTagName("svg")[0];N(b,{display:"block",width:"80px",height:"45px",[a.g]:"0",left:"0%",marginLeft:"0px","pointer-events":"none"});Xd(c)}function dp(a,b=a.K){switch(a.l){case 1:ep(a);break;case 2:fp(a);break;case 0:ep(a);break;case 3:Bo(a,b);break;case 4:ep(a)}}function zo(a){return a.B??a.C} 
function $o(a,b){const c=a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0];for(var d;d=c.firstChild;)c.removeChild(d);switch(a.g){case "top":(b?Yo:Xo)(c);break;case "bottom":(b?Xo:Yo)(c)}}function gp(a,b,c,d){b={i:b,dc:0===a.l?"1":"0",fdc:c?"1":"0",ds:a.K?"1":"0",expId:a.ia,sc:a.V?"1":"0",off:d,vw:Q(a.P),req:a.G.src,tp:a.g,h:a.D.height,w:a.D.width,qemId:a.ea};We(a.ca,"flgr",b,!0,1)} 
function ep(a){if(!a.A){var b=parseInt(a.j.style[a.g],10);if(b){var c=()=>{a.A=!1;a.l=3;hp(a);a.j.setAttribute("data-anchor-status","displayed");a.j.setAttribute("data-anchor-shown",!0);$o(a,!1)};a.A=!0;if(b){const d=-b/.1;ip(a,d);$o(a,!1);b=new Ko(a.j,b,0,d,a.g,a.M,c,Ho);a.T();Io(b)}}}} 
function fp(a){if(!a.A){jp(a);var b=parseInt(a.j.style[a.g],10),c=()=>{a.A=!1;a.l=4;hp(a);a.j.setAttribute("data-anchor-status","displayed");a.j.setAttribute("data-anchor-shown",!0);$o(a,!1)};if(b){a.A=!0;const d=-b/.1;ip(a,d);$o(a,!1);b=new Ko(a.j,b,0,d,a.g,a.M,c,Ho);a.T();Io(b)}else c()}} 
function jp(a){const b=null.maxHeight;4!==a.l&&(a.j.style[a.g]=`-${b-(parseInt(a.j.style.height,10)+parseInt(a.j.style[a.g],10))}px`);a.j.style.height=`${b}px`;a.G.style["max-height"]="none";a.G.height="100%";a.L.V=b}function Zo(a,b,c,d){O(a.G,{transition:c/1E3+"s","transition-timing-function":d,"margin-top":b})}function ip(a,b){"bottom"==a.g&&Gn(a.P)&&a.M.xa(404,()=>Zo(a,"0px",b,"ease-out"))}function hp(a){a.ba();a.ba=()=>{}} 
function kp(a,b){if("bottom"!==a.g&&"top"!==a.g)throw Error("unsupported reactive type");const c=g=>{g.preventDefault();a.A||(a.W=!0,dp(a),gp(a,"c",0!==a.l,0))},d=a.C;G(d,"click",c);X(a,()=>H(d,"click",c));a.B&&(G(a.B,"click",c),X(a,()=>a.B&&H(a.B,"click",c)));O(b,{opacity:1});var e=a.P.document;if(e){a.j=b;var f=null?.maxHeight??a.D.height;a.ma&&(a.L=new ("top"==a.g?lp:mp)(a,e,f,b,a.C),W(a,a.L));e={position:"fixed",left:"0px"};e[a.g]=-f-30+"px";O(b,e);N(b,{overflow:"visible",background:"#FAFAFA"}); 
Uo(a.la,g=>{const h=null==a.X?2147483647:a.X;O(b,{zIndex:null==g?h:Math.min(g,h)})});dp(a)}} 
class np extends V{constructor(a,b,c,d,e,f,g,h,k,l,m){super();this.config=a;this.P=b;this.G=c;this.D=d;this.da=f||(()=>{});this.ba=g||(()=>{});this.M=h;this.ca=k;this.Y=l;this.T=m;this.l=1;X(this,()=>Bo(this,!0));this.C=Kd("INS",b.document);X(this,()=>this.C=null);this.B=null;HTMLElement.prototype.attachShadow&&!this.M.xa(1013,()=>{this.B=Kd("DIV",b.document);this.B.className="grippy-host";this.B.attachShadow({mode:"closed"}).appendChild(this.C);X(this,()=>this.B=null);return!0})&&(this.B=null);this.A= 
!1;this.J=0;this.g=e;this.W=!1;this.j=this.L=null;this.N=b.innerHeight;this.V="true"===this.config.scroll_detached;this.K="true"===this.config.dismissable;this.ma="true"===this.config.draggable||"top"!=this.g;this.ia=this.config.expId||"";this.ea=this.config.qemId||"";a=parseInt(this.config.z_index_override,10);this.X=isNaN(a)?null:a;this.la=new Vo(b);!this.K&&u.navigator.userAgent.match(/iPhone OS 7/)&&b.setInterval(()=>{const n=this.P.innerHeight;if(2>Math.abs(n-460)||2>Math.abs(n-529))n<this.N&& 
2>Math.abs(R(this.P)-this.J-68)&&(this.W=!0,0===this.l&&dp(this)),this.N=n},300);ap(this,this.C)}} 
class op extends Ro{constructor(a,b,c,d,e){super(b,d,e);this.ia=a;this.V=c}X(){var a=this.ia;if(!a.A){const b=parseInt(a.j.style[a.g],10),c=b+parseInt(a.j.style.height,10),d=a.D.height/2;c>=Number.MAX_SAFE_INTEGER?(fp(a),gp(a,"d",!1,b)):c>=d?(ep(a),gp(a,"d",!1,b)):(Bo(a,a.K),gp(a,"d",!0,b))}}ba(){if(null!==this.l&&null!==this.j&&null!==this.g){var a=this.ca(this.l.y,id(this.g,this.j).y);0<a&&(a=0);a<-this.V&&(a=-this.V);var b={};b[this.Y()]=a+"px";O(this.target,b)}}} 
class lp extends op{W(){return new M(0,parseInt(this.target.style.top,10))}ca(a,b){return b-a}Y(){return"top"}}class mp extends op{W(){return new M(0,parseInt(this.target.style.bottom,10))}ca(a,b){return a-b}Y(){return"bottom"}};function pp(a,b,c,d){if(!a.W){a.W=[];for(var e=a.l.parentElement;e;){a.W.push(e);if(a.ea(e))break;e=e.parentNode&&1===e.parentNode.nodeType?e.parentNode:null}}e=a.W.slice();!c&&a.ea(e[e.length-1])&&e.pop();let f;if(d)for(c=e.length-1;0<=c;--c)(f=e[c])&&b.call(a,f,c,e);else for(c=0;c<e.length;++c)(f=e[c])&&b.call(a,f,c,e)}var qp=class extends V{constructor(a,b,c){super();this.l=a;this.g=b;this.j=c;this.W=null;X(this,()=>this.W=null)}ea(a){return this.j===a}};function rp(a,b,c){null!==b&&null!==Rd(a.getAttribute("width"))&&a.setAttribute("width",String(b));null!==c&&null!==Rd(a.getAttribute("height"))&&a.setAttribute("height",String(c));null!==b&&(a.style.width=b+"px");null!==c&&(a.style.height=c+"px")};function vo(a){a.lc=!0;if(!a.J&&sp(a)&&(a.ma||!a.za)){var b=a.j;b&&(tp(a),pp(a,c=>{Tf(c)},!0),kp(a.A,b),up(a),a.J=!0,(a=a.l.contentWindow)&&hn(a,"ig",{rr:"vis-aa"},"*",2))}}function vp(a){wp(a);const b=a.g.innerWidth;a=ue(a.l).height||+a.l.height||0;return new jd(b,a)}function xp(a){if(a.ba){var b=a.j;b&&(b.style.display="none");yp(a,a.X,!0,!0);a.ba=!1}}function zp(a){a.K="touchcancel";u.setTimeout(a.M.U(274,()=>{"touchcancel"===a.K&&(a.L=0,a.T=!1,Ap(a))}),1E3)} 
function Bp(a,b){if(b&&b.touches){a.K="touchend";var c=b.touches.length;2>c?u.setTimeout(a.M.U(256,()=>{"touchend"===a.K&&(a.L=c,a.T=!1,Ap(a))}),1E3):(a.L=c,Ap(a));!a.J||a.la||Qf(a.g)||Bo(a.A,!0)}}function Cp(a){const b=a.g;H(b,"orientationchange",a.nb);H(b,"resize",a.ob);H(b,"scroll",a.mc);H(b,"touchcancel",a.nc);H(b,"touchend",a.rc);H(b,"touchmove",a.tc);H(b,"touchstart",a.vc)} 
function Ao(a){const b=a.g;G(b,"orientationchange",a.nb);G(b,"resize",a.ob);G(b,"scroll",a.mc);G(b,"touchcancel",a.nc);G(b,"touchend",a.rc);G(b,"touchmove",a.tc);G(b,"touchstart",a.vc);X(a,()=>Cp(a))}function xo(a,b){const c=parseInt(b.ht,10),d=0<c?c:null;b=parseInt(b.wd,10);const e=0<b?b:null;null!=d&&(a.C.height=d);null!=e&&(a.C.width=e);pp(a,f=>{rp(f,e,d)},!1,!0);rp(a.l,e,d)} 
function yo(a,b){b=new np(b,a.g,a.l,a.C,a.B,()=>{if(!a.Da){a.Da=!0;Cp(a);var c=a.j;c&&c.parentNode&&c.parentNode.removeChild(c);yp(a,a.X,!0,!0);c&&(c.style.display="none")}},()=>void Dp(a),a.M,a.zd,()=>{a.V||(a.V=!0,Ep(a,null))},()=>{a.V&&(a.V=!1,Ep(a,null))});W(a,b);return b}function Dp(a){a.yc&&!a.jc&&(a.jc=!0,a.M.xa(257,()=>{const b={msg_type:"manual-send-view"},c=a.l.contentWindow;c&&c.postMessage(a.g.JSON.stringify(b),"*")}))} 
function sp(a){if(!a.Ea()||a.ia&&!a.gb)return!1;const b=a.g;if(!a.J&&a.Y)switch(a.rb&&(a.G+=Math.max(R(a.g)-a.ab,0)),a.B){case "bottom":return a.G>=a.zc||a.eb;case "top":return a.G>Fp(a)}return a.la||Qf(b)}function tp(a){const b=a.j;if(b&&a.l.parentElement){se(b,a.da);var c=a.g.innerWidth;Nf(a.g).scrollWidth>c?b.style.width=c:b.style.width=Gp(a);Hp(a)}} 
function up(a){const b=a.j;if(b){var c=a.A,d=c.P,e=R(d);if(!(10>Math.abs(e-c.J))){var f=10>e;d=e+10+Nf(d).clientHeight>Of(d);f=f||d;c.V||c.W||c.A||(0===c.l||f?0===c.l&&f&&dp(c):dp(c,!1));c.J=e}a.ba||(c=yp,wp(a),e=xe(a.g.document.body,"padding"),"bottom"==a.B&&(e.bottom+=a.da.height+25),c(a,e),b.style.display="block",a.ba=!0)}} 
function yp(a,b,c=!0,d=!1){const e=a.D.top-b.top,f=R(a.g);f<e&&!d||(d=a.g.document.body,d.style.paddingTop=b.top+"px",d.style.paddingRight=b.right+"px",d.style.paddingBottom=b.bottom+"px",d.style.paddingLeft=b.left+"px",a.D=b,c&&a.g.scrollTo(0,f-e))}function Gp(a){if(K(Cc))return"100%";const b=de(a.g);return`${a.la?100*(1>b?1:b):100}%`} 
function Hp(a){pp(a,b=>{se(b,a.C);b.style.width=Gp(a)},!1,!0);a.l.style.display="block";a.l.style.margin="0 auto";if(a.xc){const b=a.j;Ud(b,c=>{Xd(c,d=>c===b&&/display|bottom/i.test(d)?!1:!0);if("svg"===c.nodeName)return!1})}}function wp(a){if("bottom"!==a.B&&"top"!==a.B)throw Error("Unexpected position: "+a.B);}function Ap(a){!a.ca||a.Da||2<=a.L&&a.T||!sp(a)?xp(a):(vo(a),up(a))} 
function Ep(a,b){const c=a.ba?Fp(a,a.V):a.X.top;if("top"===a.B&&a.g.document.body&&a.ca&&a.A&&a.J&&a.D.top!==c&&0!==b){var d=je(a.D);null===b?(d.top=c,yp(a,d)):(0<b&&a.D.top>c&&(d.top=Math.max(c,a.D.top-b),yp(a,d,!1)),0>b&&a.D.top<c&&(d.top=Math.min(c,a.D.top-b),yp(a,d,!1)))}}function Fp(a,b=!1){return b?a.X.top+30:a.X.top+30+a.da.height-5} 
class Ip extends qp{constructor(a,b,c,d,e,f,g=!1){super(a,b,f);this.M=d;this.zd=e;this.G=this.Ka=this.ab=0;this.Da=this.wc=!1;this.A=null;this.T=this.ca=!1;this.K=null;this.X=xe(b.document.body,"padding");this.D=xe(b.document.body,"padding");this.L=0;this.lc=this.J=!1;this.ba=!0;this.B=c;this.C=vp(this);this.da=null;this.gb=this.ia=this.Y=this.za=this.ma=this.jc=this.xc=this.yc=!1;this.zc=sd(b||window).height/2;this.pb=sd(b||window).height;this.ic=ud(b);this.rb=this.V=this.eb=!1;this.la=g;xp(this); 
this.nb=this.M.U(266,()=>{Ap(this)});this.ob=this.M.U(267,()=>{Ap(this)});this.mc=this.M.U(268,()=>{if(this.J&&this.j&&this.A){var h=this.A;h.J=R(h.P)}h=R(this.g);const k=h-this.ab;Ep(this,k);this.Y&&(0<k&&(this.G+=k),this.eb=this.ic-h<=this.pb,this.ab=h);Ap(this)});this.nc=this.M.U(269,()=>{zp(this)});this.rc=this.M.U(270,h=>{Bp(this,h)});this.tc=this.M.U(271,h=>{if(h&&h.touches){this.K="touchmove";this.L=h.touches.length;this.T=!0;Ap(this);if(!this.wc&&h.touches&&0!=h.touches.length&&h.touches[0]){h= 
h.touches[0].pageY;var k=h-this.Ka;this.Ka=h;h=k}else h=0;0<h&&(this.G+=h);Ep(this,h)}});this.vc=this.M.U(272,h=>{h&&h.touches&&h.touches[0]&&(this.K="touchstart",this.L=h.touches.length,this.T=!1,Ap(this),this.Ka=h.touches[0].pageY,this.wc=(h=h.target)&&"top"==this.B&&this.ca&&this.A&&zo(this.A)&&1===h.nodeType?xd(zo(this.A),h):!1)});this.fb=this.M.U(273,()=>{this.Ca()});G(a,"load",this.fb);X(this,()=>H(a,"load",this.fb))}Ca(){if(this.ma)return!1;this.ma=!0;H(this.l,"load",this.fb);if(this.za&&!this.lc)return!1; 
Ap(this);return!0}Ea(){return Mf(this.g)}}var wo={ui:"gr",gvar:"ar",scroll_detached:"true",dismissable:"false"};var Jp=class extends Ip{constructor(a,b,c,d){super(a,b,c,hk,gk,d,K(Ei))}ea(a){return ch(a)}Ca(){if(!super.Ca())return!1;const a=vn(this.g,"top"===this.B?3:2);a&&a.displayAdLoadedContent(!this.Y&&!this.ia);return!0}Ea(){if(this.C.width>Lf){var a=this.g;var b=this.C.width;const c=K(Ei)?de(a):1;a=a.innerWidth*c>=b&&a.innerHeight*c>=(b>Lf?650:0)}else a=super.Ea();return a}};var Kp=class extends F{},Lp=yc(Kp);function Mp(a){Np(a,!1);const b=a.j;pp(a,c=>{N(c,Op);Tf(c)},!0);a.l.setAttribute("width","");a.l.setAttribute("height","");O(a.l,Op);O(a.l,Pp);O(b,Qp);Tf(b);Tf(a.l)}function Np(a,b){const c=a.j;b?Rp(a,c):(N(c,{display:"none"}),a.A&&N(a.A,{display:"none"}),a.C&&(u.clearInterval(a.C),a.C=0),Sp(a))} 
function Tp(a,b){const c=a.j;if(!b)return!1;var d=xj(b);if(!d||!d.A())return!1;d=d.F;if(!d)return!1;a.A=a.g.document.createElement("ins");N(a.A,{display:"inline-block",width:"100%"});Qi(a.A,d,Ti[b.j]);a.D();N(c,{position:"absolute"});Np(a,!0);return!0}function Rp(a,b){N(b,{display:"block"});a.C=u.setInterval(()=>a.D,250)}function Sp(a){null!=a.G&&(a.B.body.style.overflow=a.G);null!=a.J&&(a.B.documentElement.style.overflow=a.J)} 
function Up(a){const b=a.j,c=a.g.innerHeight;N(b,{height:c+"px"});a.g.scrollTo(0,qe(a.A).y);b&&(N(b,{top:"0"}),a.A&&N(a.A,{height:c+"px"}),N(b,{position:"fixed"}),a.B.body&&"hidden"!=a.B.body.style.overflow&&(a.G=a.B.body.style.overflow,a.J=a.B.documentElement.style.overflow,a.B.body.style.overflow="hidden",a.B.documentElement.style.overflow="hidden"))} 
class Vp extends qp{constructor(a,b,c){super(a,b,c);this.G=null;this.C=0;this.J=null;this.K=0;this.B=b.document;this.A=null;this.L=0;Mp(this)}D(){if("hidden"!=this.B.body.style.overflow&&"fixed"!=this.B.body.style.position){var a=this.j;const b=this.g.innerHeight;if(this.L<b){const c={height:b+"px"};N(a,c);this.A&&N(this.A,c);this.L=b}(a=this.j)&&this.A&&(this.K=qe(this.A).y,a.style.top!=this.K+"px"&&N(a,{top:this.K+"px"}))}}} 
var Qp={backgroundColor:"white",opacity:"1",position:"fixed",left:"0px",top:"0px",display:"none !important",zIndex:"2147483646"},Op={width:"100%",height:"100%",zIndex:"2147483646"},Pp={left:"0",position:"absolute",top:"0"};var Wp=(a,b)=>{var c=a.document.body;if(!c||!b)return lk("sci_evt",{amacerr:1},.1),null;b=mc(b,Tl,1);var d=[];for(let v=0;v<b.length;v++){var e=b[v];var f=v,g=a,h=lc(e,ti,1);if(h){var k=h;if(k){var l=qc(k,7);if(qc(k,1)||k.getId()||0<bc(k,4,Kb).length){var m=qc(k,3),n=qc(k,1),q=bc(k,4,Kb);l=pc(k,2);var r=pc(k,5);k=bm(Bb(Xb(k,6)));var t="";n&&(t+=n);m&&(t+="#"+ki(m));if(q)for(m=0;m<q.length;m++)t+="."+ki(q[m]);l=(q=t)?new mi(q,l,r,k):null}else l=l?new mi(l,pc(k,2),pc(k,5),bm(Bb(Xb(k,6)))):null}else l= 
null;(r=l)?(l=Bb(Xb(e,2)),l=em[l],q=void 0===l?null:l,null===q?e=null:(l=(l=lc(e,Sl,3))?ac(l,3):null,r=new im(r,q),q=bc(e,10,Bb).slice(0),null!=pc(h,5)&&q.push(1),h=pc(e,12),q=void 0!==kc(e,Bi,4)?lc(e,Bi,4):null,e=1==Bb(Xb(e,8))?new nm(r,new fm(dm(lc(e,Sl,3),null)),l,0,q,g,f,h,e):2==Bb(Xb(e,8))?new nm(r,new gm(e),l,1,q,g,f,h,e):null)):e=null}else e=null;null!==e&&d.push(e)}b=new fn(d,a);d=a.innerHeight;a=a.innerWidth;a=Mm(Km(.85*a,a),d);a.g.push(new Fm);a.l=1;a=a.build();a=cn(b,a)[0]||null;if(!a)return null; 
c={node:(new Ug(c,!1)).g(a.g)||void 0,Ab:void 0,identifier:{}};if(!c.node)throw Error("amac:n");b=tm(a.sa.g.g);if(null===b)throw Error("amac:p");return(c=(new vk(c,b)).build())?{ub:c,yd:a.Pa.g}:null},Xp=a=>{var b=new Jf;b.g=!0;b.B=.85;b.j=1;b.A=25;b.l=a.innerHeight;b.I=!0;b=b.build();return Ml(a,b)};function Yp(a){const b=Of(a,!0),c=Nf(a).scrollWidth,d=Nf(a).scrollHeight;let e="unknown";a&&a.document&&a.document.readyState&&(e=a.document.readyState);var f=R(a);const g=[];var h=[];const k=[],l=[];var m=[],n=[],q=[];let r=0,t=0,v=Infinity,A=Infinity,D=null;var J=Rk({Ub:!1},a);for(const pa of J){J=pa.getBoundingClientRect();const Nc=b-(J.bottom+f);var x=void 0,E=void 0;if(pa.className&&-1!=pa.className.indexOf("adsbygoogle-ablated-ad-slot")){x=pa.getAttribute("google_element_uid");E=a.google_sv_map; 
if(!x||!E||!E[x])continue;a:{var L=E[x];x=Number(L.google_ad_width);E=Number(L.google_ad_height);if(!(0<x&&0<E)){b:{try{const P=String(L.google_ad_format);if(P&&P.match){const jb=P.match(/(\d+)x(\d+)/i);if(jb){const nj=parseInt(jb[1],10),oj=parseInt(jb[2],10);if(0<nj&&0<oj){var oa={width:nj,height:oj};break b}}}}catch(P){}oa=null}L=oa;if(!L){x=null;break a}x=0<x?x:L.width;E=0<E?E:L.height}x={width:x,height:E}}x=(E=x)?E.height:0;E=E?E.width:0}else if(x=J.bottom-J.top,E=J.right-J.left,1>=x||1>=E)continue; 
g.push(x);k.push(E);l.push(x*E);pa.className&&-1!=pa.className.indexOf("google-auto-placed")?(t+=1,pa.className&&-1!=pa.className.indexOf("pedestal_container")&&(D=x)):(v=Math.min(v,Nc),n.push(J),r+=1,h.push(x),m.push(x*E));A=Math.min(A,Nc);q.push(J)}v=Infinity===v?null:v;A=Infinity===A?null:A;f=Zp(n);q=Zp(q);h=$p(b,h);n=$p(b,g);m=$p(b*c,m);oa=$p(b*c,l);return new aq(a,{Lc:e,kc:b,fd:c,ed:d,ec:r,Nb:t,Ob:bq(g),Gc:bq(k),Fc:bq(l),cd:f,bd:q,Zc:v,Yc:A,Jc:h,Ic:n,Ec:m,Dc:oa,gd:D})} 
function cq(a,b=0){a=Yp(a);return((a.g.Ob||0)*(a.g.ec+a.g.Nb)+b)/(a.g.kc+b)}function dq(a,b){const c=Ad()&&!(900<=Q(a.j)),d=Fa([],e=>Ia(a.l,e)).join(",");return{wpc:"",su:b,eid:d,doc:a.g.Lc,pg_h:Y(a.g.kc),pg_w:Y(a.g.fd),pg_hs:Y(a.g.ed),c:Y(a.g.ec),aa_c:Y(a.g.Nb),av_h:Y(a.g.Ob),av_w:Y(a.g.Gc),av_a:Y(a.g.Fc),s:Y(a.g.cd),all_s:Y(a.g.bd),b:Y(a.g.Zc),all_b:Y(a.g.Yc),d:Y(a.g.Jc),all_d:Y(a.g.Ic),ard:Y(a.g.Ec),all_ard:Y(a.g.Dc),pd_h:Y(a.g.gd),dt:c?"m":"d"}} 
class aq{constructor(a,b){this.j=a;this.g=b;this.l="633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")}}function bq(a){return hd.apply(null,Fa(a,b=>0<b))||null}function $p(a,b){return 0>=a?null:gd.apply(null,b)/a} 
function Zp(a){let b=Infinity;for(let e=0;e<a.length-1;e++)for(let f=e+1;f<a.length;f++){var c=a[e],d=a[f];c=Math.max(Math.max(0,c.left-d.right,d.left-c.right),Math.max(0,c.top-d.bottom,d.top-c.bottom));0<c&&(b=Math.min(c,b))}return Infinity!==b?b:null}function Y(a){return null==a?null:Number.isInteger(a)?a.toString():a.toFixed(3)};function eq(a,b,c){var d;if(!(d=0>=c)&&!(d=null==b)){try{b.setItem("__storage_test__","__storage_test__");const f=b.getItem("__storage_test__");b.removeItem("__storage_test__");var e="__storage_test__"===f}catch(f){e=!1}d=!e}b=d?null:Un(b,c);a.g=b;if(b=!!a.g)a=a.g,b=!!a&&1>a.length;return b}function fq(a,b,c){try{if(!b||!eq(a,b,c))return!1;a.g.push(Date.now());const d=JSON.stringify(a.g);b.setItem("__lsv__",d);return b.getItem("__lsv__")==d}catch(d){return!1}}class gq{constructor(){this.g=null}};function hq(a,b){if(a.la)Promise.resolve(!1);else{a.la=!0;b=Sf(b);a.ea="true"===b["i-fvs"];var c=b.i_expid;c&&(a.T=c);b.qid&&(a.ca=b.qid);a.D=parseFloat(b.den_lim)||0;b=parseInt(b.sti_lt,10);isNaN(b)||(a.X=b);a.K=!0;if(iq(a))Promise.resolve(!1);else{var d=new kn,e=()=>{const g=Of(a.l,!0);jq(a,{nip:1,ph:g,vh:a.l.innerHeight,iplt:Date.now()-a.V,ama:a.L,url:a.l.location?a.l.location.href:void 0},.1);d.resolve(!1)},f=(g,h)=>{jq(a,{iplt:Date.now()-a.V,ama:a.L,y:h},.01);d.resolve(kq(a,g))};a.V=Date.now(); 
a.L?(b=Wp(a.l,a.Ka))&&a.K&&!iq(a)?f(b.ub,b.yd):(jq(a,{amacerr:1},.1),e()):Xp(a.l).then(g=>{if(a.K&&!iq(a))return g.Z().then(h=>{if(h.g)var k=h.g;else h.qa||(wj(h,!1),h.l()),k=h.qa,!h.g&&k&&(h.g=k.j()),k=h.g;f(h,k?k.top:-1)},e);d.resolve(!1)})}}}function iq(a){return a.ea?!1:sn(a.l).wasReactiveAdVisible[8]?(jq(a,{vigs:1},.1),!0):!1} 
function jq(a,b,c){b=b||{};a.ca&&(b.qid=a.ca);a.T&&(b.eid=a.T);a.g&&(b.tsl=Date.now()-a.g);a.Y&&(b.tslo=Date.now()-a.Y,b.tl=a.Da);a.J.src&&(b.req=a.J.src);lk("sci_evt",b,c)}function kq(a,b){lq(a)&&mq(a)&&Tp(a.j,b)&&(a.g=Date.now(),nq(a),a.ea?oq(a):a.da.call(a.l,()=>pq(a)));return!!a.g}function qq(a){a.G=!0;a.A=!1;Np(a.j,!1);a.B&&(H(a.l,"orientationchange",a.B),a.B=null);a.C&&(H(a.l,"resize",a.C),a.C=null)} 
function lq(a){const b=a.l.innerHeight;if(!b)return!1;const c=!Mf(a.l);var d=a.l;const e=Q(d);d=Nf(d).scrollWidth<=e;let f;if(c)return jq(a,{lnd:1},.1),!1;if(a.D&&(f=cq(a.l,b))>a.D)return jq(a,Object.assign({den:f,lim:a.D},dq(Yp(a.l),a.l.location.hostname)),1),!1;d||jq(a,{be:1},.1);return!0}function mq(a){return a.ia?!0:eq(I(gq),a.ma,3600)} 
function nq(a){a.B=kk(519,()=>{!a.G&&a.A&&jq(a,{tto:Date.now()-a.g,por:Mf(a.l)?1:0},.1)});G(a.l,"orientationchange",a.B);a.C=kk(520,()=>{a.G||(a.j.D(),a.A&&jq(a,{ttre:Date.now()-a.g},.1))});G(a.l,"resize",a.C)}function oq(a){a.za||(a.J.contentWindow.postMessage(JSON.stringify({msg_type:"i-view"}),"https://googleads.g.doubleclick.net"),a.za=!0)} 
function pq(a){if(!a.G)if(iq(a))qq(a);else{var b=a.j.j.getBoundingClientRect().top,c=a.l.innerHeight;a.j.D();.5<=(c-b)/c&&oq(a);b<c&&(sn(a.l).wasReactiveAdVisible[9]=!0,a.ia||fq(I(gq),a.ma,3600),a.Ea=!0);0>=b?(0<=a.X&&rq(a),jq(a,{sice:!0,vh:c,gvto:b},.1)):a.da&&a.da.call(a.l,()=>pq(a))}}function rq(a){a.Y=Date.now();a.A=!0;a.Da++;Up(a.j);u.setTimeout(()=>{if(a.A){a.A=!1;var b=a.j;const c=b.j;N(c,{top:qe(b.A).y+"px"});N(c,{position:"absolute"});Sp(b)}},Math.max(0,a.X))} 
class sq extends to{constructor(a,b,c,d,e,f){super(a,b);this.ma=f;this.ia=d;this.G=!1;this.T=null;this.A=this.ea=this.K=this.la=!1;this.Da=this.Y=this.g=0;this.C=this.B=this.ca=null;this.da=u.requestAnimationFrame||u.webkitRequestAnimationFrame||u.mozRequestAnimationFrame||u.oRequestAnimationFrame||u.msRequestAnimationFrame;this.za=!1;this.j=new Vp(b,a,e);this.Ea=!1;this.V=this.X=0;this.L=rc(c,1,!1);this.Ka=lc(c,Ul,2);this.D=0}W(a){a["sti-fill"]=b=>{hq(this,b)};a["i-no"]=()=>{this.K=!1;!this.Ea&& 
this.g&&qq(this)}}};var tq=class extends zn{constructor(){super(...arguments);this.R=!1;this.D=null}C(a){this.R=!!a.enableAma;if(a=a.amaConfig)try{var b=Vl(a)}catch(c){b=null}else b=null;this.D=b;return!0}};class uq{verifyAndProcessConfig(a,b,c){var d=sn(a);if(d.wasReactiveAdConfigReceived[9])return!1;const e=new tq;if(!yn(e,b))return!1;d.wasReactiveAdConfigReceived[9]=!0;if(!e.A&&!eq(I(gq),c,3600))return!1;b=wd(document,"INS");b.className="adsbygoogle";N(b,{display:"none"});a.document.documentElement.appendChild(b);c=e.I||{};c.google_ad_client=e.j;c.google_ad_height=Nf(a).clientHeight||0;c.google_ad_width=Q(a)||0;c.google_reactive_ad_format=9;d=new Kp;var f=e.R;if(null!=f&&"boolean"!==typeof f)throw Error(`Expected boolean but got ${ba(f)}: ${f}`); 
d=Zb(d,1,f);e.D&&nc(d,2,e.D);a:{ob=!0;try{var g=JSON.stringify(d.toJSON(),Ob);break a}finally{ob=!1}g=void 0}c.google_rasc=g;e.A&&(c.google_adtest="on");no(b,c,a);return!0}};var xq=class extends to{constructor(a,b){super(a,b.l);this.g=b}W(a){a.dismiss=()=>{var b=this.g;vq(b,-30);wq(b,"dismissed")}}};const yq=(a,b)=>{const c=Kd("STYLE",a);c.textContent=Zc();a?.head.appendChild(c);setTimeout(()=>{a?.head.removeChild(c)},b)};var Aq=(a,b,c)=>{if(!a.body)return null;const d=new zq;d.apply(a,b);return()=>{var e=c||0;0<e&&yq(b.document,e);O(a.body,{filter:d.g,webkitFilter:d.g,overflow:d.l,position:d.A,top:d.B});b.scrollTo(0,d.j)}}; 
class zq{constructor(){this.g=this.B=this.A=this.l=null;this.j=0}apply(a,b){this.l=a.body.style.overflow;this.A=a.body.style.position;this.B=a.body.style.top;this.g=a.body.style.filter?a.body.style.filter:a.body.style.webkitFilter;this.j=R(b);O(a.body,"top",-this.j+"px")}};function Bq(a,b){const c=a.j;if(c)if(b){b=a.C;if(null==b.g){var d=b.j;const e=d.g.nextRestrictionId++;d.g.maxZIndexRestrictions[e]=2147483646;So(d);b.g=e}N(c,{display:"block"});a.B.body&&!a.A&&(a.A=Aq(a.B,a.g,a.J));c.setAttribute("tabindex","0");c.setAttribute("aria-hidden","false");a.B.body.setAttribute("aria-hidden","true")}else b=a.C,null!=b.g&&(d=b.j,delete d.g.maxZIndexRestrictions[b.g],So(d),b.g=null),N(c,{display:"none"}),a.A&&(a.A(),a.A=null),a.B.body.setAttribute("aria-hidden","false"),c.setAttribute("aria-hidden", 
"true")}function Cq(a){Bq(a,!1);const b=a.j;if(b){var c=Dq(a.D,a.G);pp(a,d=>{N(d,c);Tf(d)},!0);a.l.setAttribute("width","");a.l.setAttribute("height","");O(a.l,c);O(a.l,Eq);O(b,Fq);O(b,{background:"transparent"});N(b,{display:"none",position:"fixed"});Tf(b);Tf(a.l);1>=de(a.D)||(O(b,{overflow:"scroll","max-width":"100vw"}),Xd(b))}}class Gq extends qp{constructor(a,b,c,d,e=!1){super(a,b,c);this.A=null;this.B=b.document;this.J=d;a=new Vo(b);this.C=new Wo(a);this.G=e;this.D=b}} 
function Dq(a,b){a=de(a);b=b?100*(1>a?1:a):100;return{width:`${b}vw`,height:`${b}vh`}}var Fq={backgroundColor:"white",opacity:"1",position:"fixed",left:"0px",top:"0px",margin:"0px",padding:"0px",display:"none",zIndex:"2147483647"},Eq={left:"0",position:"absolute",top:"0"};var Hq=class extends Gq{constructor(a,b,c){var d=I(Oc).l(550718588,Hi.defaultValue);super(b,a,c,d,K(Fi));Cq(this)}ea(a){return ch(a)}};var Iq=class{log(){}};function Jq(){const {promise:a,resolve:b}=new kn;return{qd:(c,d)=>{d?.ports.length&&b(new Kq(d.ports[0]))},pd:a}}var Kq=class extends V{constructor(a){super();const {promise:b,resolve:c}=new kn;this.promise=b;a.onmessage=()=>c();X(this,()=>{a.close()})}};const Lq=["mousemove","mousedown","scroll","keydown"]; 
function Mq(a){let b=null,c=null;const d=f=>{if(b&&3E4<f.timeStamp-b){var g={jb:f.timeStamp,Sc:f.timeStamp-b,xd:c};for(const h of a.j)try{h(g)}catch(k){}}b=f.timeStamp};for(const f of Lq)a.g.addEventListener(f,d);let e=null;a.g.navigator?.userActivation&&a.g.performance?.now&&(e=a.g.setInterval(()=>{a.g.navigator.userActivation.isActive&&(c=a.g.performance.now())},1E3));X(a,()=>{for(const f of Lq)a.g.removeEventListener(f,d);e&&a.g.clearInterval(e)})} 
var Nq=class extends V{constructor(a){super();this.g=a;this.j=[];this.l=Hc(()=>{Mq(this)})}listen(a){this.l();this.j.push(a)}};function Oq(a){let b=!1;const c=({isTrusted:e})=>{e&&(b=!0)},d=({timeStamp:e,isTrusted:f})=>{if(f=f&&!b)f=(f=a.g.document.referrer)&&"function"===typeof URL?(new URL(f)).origin===a.g.location.origin:!1;if(f){e={jb:e};for(const g of a.j)try{g(e)}catch(h){}}};a.g.addEventListener("focus",d);a.g.addEventListener("blur",c);X(a,()=>{a.g.removeEventListener("focus",d);a.g.removeEventListener("blur",c)})} 
var Pq=class extends V{constructor(a){super();this.g=a;this.j=[];this.l=Hc(()=>{Oq(this)})}listen(a){this.l();this.j.push(a)}};function Qq(a){let b=null;const c=({timeStamp:e,isTrusted:f})=>{f&&(b=e)},d=({timeStamp:e,isTrusted:f})=>{if(f){e={jb:e,...(b?{ud:e-b}:null)};for(const g of a.j)try{g(e)}catch(h){}}};a.g.addEventListener("focus",d);a.g.addEventListener("blur",c);X(a,()=>{a.g.removeEventListener("focus",d);a.g.removeEventListener("blur",c)})}var Rq=class extends V{constructor(a){super();this.g=a;this.j=[];this.l=Hc(()=>{Qq(this)})}listen(a){this.l();this.j.push(a)}};var Sq=class extends V{constructor(a,b,c,d,e){super();this.j=c;this.A=d;this.l=Math.floor(2147483647*Md());this.g=(f,g,h={})=>{f=Object.assign({etc:this.l,e:f,t:Math.round(g),qqid:this.A,ptt:9},h);We(this.j,"eit",f,!0,1)};this.g(1,b);for(const f of e)switch(f){case 101:b=new Qn(a);b.D.then(h=>void this.g(f,h));W(this,b);break;case 102:const g=new Rn(a);g.D.then(h=>void this.g(f,h,{tbd:Math.round(g.J||-1)}));W(this,g);break;case 103:b=new Rq(a);b.listen(h=>{this.g(f,h.jb,{tsb:h.ud??-1})});W(this,b); 
break;case 104:b=new Nq(a);b.listen(h=>{this.g(f,h.jb,{it:h.Sc,ualta:h.xd??-1})});W(this,b);break;case 105:b=new Pq(a),b.listen(h=>{this.g(f,h.jb)}),W(this,b)}}};function Tq(a){var b=new hf;b=hc(b,2,Eb(a.jd),"0");b=hc(b,3,Jb(a.Pc),"");b=hc(b,6,Jb(a.Mc),"");b=hc(b,1,Eb(a.Qd??Ee()),"0");var c=I(yf).g();b=gc(b,4,c,Cb);a.payload&&(c=a.payload(),nc(b,7,c));a.md&&hc(b,5,Eb(a.md),"0");return b};function Z(a){return Tq({...a,payload:()=>{var b=new ff;var c=new ef;c=ic(c,3,df,Ab(a.H));return oc(b,4,gf,c)}})};function Uq(a){a=a.match(Cd);const b=a[6];return(a[5]||"")+(b?"?"+b:"")||"/"}function Vq(a,b){b?a.g=new RegExp("\\b("+b.join("|").toLowerCase()+")\\b","ig"):a.g=null}function Wq(a,b,c,d,e){if(!c)return!1;switch(b.target){case "_top":case "_parent":break;case "":case "_self":if(e)return!1;break;default:return!1}return!d||Xq(a,d)&&Uq(c)==a.A?!1:!0}function Xq(a,b){return b.replace(Yq,"")==a.l.replace(Yq,"")} 
function Zq(a,b,c){if(Ha(["data-google-vignette","data-google-interstitial"],f=>"false"===b.getAttribute(f)||!1))return!1;const d=b.href,e=d&&(d.match(Cd)[3]||null);if(!Wq(a,b,d,e,c))return!1;a.j=!!e&&Xq(a,e);return a.j||!c&&!Tk(b)&&/^https?:\/\//i.test(d)&&!/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)} 
function $q(a,b){if(!b||!a.g)return[];var c=[];Xn(b,c,!0,!0);b=c.join("");b=b.replace(Yn," ").replace(Zn,"");b=b.replace($n,"");b=b.replace(ao," ");" "!=b&&(b=b.replace(bo,""));if(!b)return[];a=b.match(a.g);b=[];for(c=0;a&&c<a.length;c++){const d=a[c].toLowerCase();0<=Da(b,d)||b.push(d)}return b}class ar{constructor(a){this.g=null;this.l=a.match(Cd)[3]||"";this.A=Uq(a);this.j=!1}}var Yq=/^(www\.|m\.|mobile\.)*/i;function br(a){a.j?.setAttribute("data-vignette-loaded","true")}function cr(a){a.G&&(ln(a.G).then(()=>{br(a.T);a.C.qb||(a.C.qb=Ee())}),mn(a.G).then(()=>void dr(a)),nn(a.G).then(()=>void er(a)))} 
function fr(a){a.g.log(578856259,Z,{...a.j,H:41});if(a.B.ya)a.g.log(578856259,Z,{...a.j,H:42});else{a.B.ya=a.M.U(527,c=>{gr(a,c)});if(null!==a.B.ya){const c=a.B.ya;G(a.l.document,"click",d=>{c(d)},Jc)}var b=a.l.frames;for(let c=0;c<b.length;c++)try{a.la(b[c].frameElement)||G(b[c].document,"click",a.B.ya,Jc)}catch(d){}a.g.log(578856259,Z,{...a.j,H:43})}} 
function hr(a,b){a.g.log(578856259,Z,{...a.j,H:28});if(ir(a)){b=1===b;if(a.L.Kc){let c;(c=a.A).mb||(c.mb=!b)}a.za()?(a.A.hb=Date.now(),sn(a.l).wasReactiveAdVisible[8]=!0,b&&a.B.ha&&(a.A.Jb=a.B.ha.href),jr(a),a.B.ha&&kr(a,a.B.ha.href),lr(a),G(a.l,"pagehide",a.M.U(528,()=>{mr(a)})),b&&a.nb?.(a.A.hb),Bq(a.T,!0),a.ma?.Ja(),a.g.log(578856259,Z,{...a.j,H:32})):(a.g.log(578856259,Z,{...a.j,H:30}),b&&a.B.ha&&(a.g.log(578856259,Z,{...a.j,H:31}),nr(a,a.B.ha.href)))}else a.g.log(578856259,Z,{...a.j,H:29})} 
function dr(a){a.g.log(578856259,Z,{...a.j,H:33});a.A.mb?(or(a)?(a.g.log(578856259,Z,{...a.j,H:34}),a.l.history.back()):(a.g.log(578856259,Z,{...a.j,H:35}),mr(a)),a.g.log(578856259,Z,{...a.j,H:36})):(u.setTimeout(()=>{mr(a)},1E3),a.A.Jb?(a.A.Kb&&(a.A.Fb=!1),nr(a,a.A.Jb)):a.g.log(578856259,Z,{...a.j,H:37}))}function er(a){a.g.log(578856259,Z,{...a.j,H:23});a.C.Vb=!0}function or(a){return-1!==a.l.location.hash.indexOf("google_vignette")} 
function mr(a){a.g.log(578856259,Z,{...a.j,H:38});a.A.hb?(a.A.Bc=!0,a.B.ya&&(H(a.l.document,"click",a.B.ya),a.B.ya=void 0),a.A.Wa&&a.A.Wa.parentNode&&(a.A.Wa.parentNode.removeChild(a.A.Wa),a.A.Wa=void 0),a.A.Va&&a.A.Va.parentNode&&(a.A.Va.parentNode.removeChild(a.A.Va),a.A.Va=void 0),Bq(a.T,!1),a.ia(),a.g.log(578856259,Z,{...a.j,H:40})):a.g.log(578856259,Z,{...a.j,H:39})} 
function nr(a,b){a=a.l.location;b=Gd(b,Fd)||Xc;if(b instanceof Vc)var c=b instanceof Vc&&b.constructor===Vc?b.g:"type_error:SafeUrl";else{b:{try{c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}c="javascript:"!==c?b:void 0}void 0!==c&&a.replace(c)} 
function lr(a){or(a)||(a.l.location.hash="google_vignette");a.A.Kb=a.M.U(526,()=>{a.g.log(578856259,Z,{...a.j,H:62});a.A.Fb?(or(a)?(a.g.log(578856259,Z,{...a.j,H:64}),nr(a,a.B.ha.href)):mr(a),a.g.log(578856259,Z,{...a.j,H:65})):a.g.log(578856259,Z,{...a.j,H:63})});u.setTimeout(ja(G,a.l,"hashchange",a.A.Kb),0)} 
function ir(a,b){a.g.log(578856259,Z,{...a.j,H:10});var c=Ee();const d=sn(a.l).wasReactiveAdVisible[9];b=b?$q(a.D,b):[];const e=a.L.Rc||Qf(a.l),f=a.ea.width<a.ea.height===Mf(a.l);if(864E5<=c-a.Ka)return a.g.log(578856259,Z,{...a.j,H:11}),!1;a:switch(a.Y.tag){case 0:c=!0;break a;case 1:c=!1;break a;default:c=!1}if(!c)return a.g.log(578856259,Z,{...a.j,H:12}),!1;if(a.C.Vb)return a.g.log(578856259,Z,{...a.j,H:13}),!1;if(or(a))return a.g.log(578856259,Z,{...a.j,H:14}),!1;if(!a.C.qb)return a.g.log(578856259, 
Z,{...a.j,H:15}),!1;if(!a.ca&&d)return a.g.log(578856259,Z,{...a.j,H:16}),!1;a.ca&&a.g.log(578856259,Z,{...a.j,H:17});d&&a.g.log(578856259,Z,{...a.j,H:18});if(b.length)return a.g.log(578856259,Z,{...a.j,H:19}),!1;if(!e)return a.g.log(578856259,Z,{...a.j,H:20}),!1;if(!f)return a.g.log(578856259,Z,{...a.j,H:21}),!1;a.g.log(578856259,Z,{...a.j,H:22});return!0}function pr(a,b,c){a=Kd("LINK",a.l.document);a.setAttribute("rel",c);a.setAttribute("href",b);return a} 
function kr(a,b){a.A.Wa=pr(a,b,"prerender");a.A.Va=pr(a,b,"prefetch");a.l.document.body.appendChild(a.A.Wa);a.l.document.body.appendChild(a.A.Va)}function qr(a,b){for(b=b.target;b;){if("nodeName"in b&&"A"===b.nodeName){if(Zq(a.D,b,b.ownerDocument!==a.l.document))return b;break}b="parentElement"in b?b.parentElement:null}return null} 
function gr(a,b){a.g.log(578856259,Z,{...a.j,H:44});if(b)if(b.defaultPrevented)a.g.log(578856259,Z,{...a.j,H:46});else if(a.A.hb)a.g.log(578856259,Z,{...a.j,H:50});else if(a.A.Jb)a.g.log(578856259,Z,{...a.j,H:51});else if(a.I)a.g.log(578856259,Z,{...a.j,H:47});else if(a.B.ha)a.g.log(578856259,Z,{...a.j,H:52});else{var c=qr(a,b);c?ir(a,c)?(a.B.ha=c,ce(b),b.preventDefault=()=>b&&(b.preventDefaultTriggered=!0),u.setTimeout(y(a.gb,a,b),0),a.g.log(578856259,Z,{...a.j,H:53})):a.g.log(578856259,Z,{...a.j, 
H:49}):a.g.log(578856259,Z,{...a.j,H:48})}else a.g.log(578856259,Z,{...a.j,H:45})}function jr(a){a.fb||(a.G?u.IntersectionObserver||a.G.Pb.postMessage(JSON.stringify({eventType:"visible",googMsgType:"fullscreen"}),"*"):(a.J?.contentWindow).postMessage(JSON.stringify({msg_type:"i-view"}),"*"))} 
var rr=class extends so{constructor(a,b,c,d,e,f,g,h,k){var l=new Iq,m={Mc:window.location.href,Pc:"adsense",jd:0};super(a,b,c,e,{fullscreenApi:h.uc,heavyAdInterventionResponse:h.Qc});this.T=d;this.ea=f;this.L=h;this.g=l;this.j=m;this.Ka=Ee();this.ca="true"===g["i-fvs"];this.pb=g.qid;this.D=new ar(a.location.href);this.fb="true"===g.iobs&&"IntersectionObserver"in this.l;Vq(this.D,g.stop_word?.split(";")??null);this.G=this.L.uc?qn(a,b.contentWindow,c,e,this.L.yb):null;this.C={Vb:!1};this.B={};this.Y= 
{tag:0};this.A={ce:!0,Bc:!1,mb:!1,Fb:!0};cr(this);fr(this);k.size&&(b=new kn,b.promise.then(n=>{this.A.hb||this.I||hr(this,n)}),this.ma=new Sn(a,k,b),W(this,this.ma));if(h.Sb?.length&&(k=Fe(a))){const n=new Sq(a,k,e,this.pb,h.Sb);W(this,n);this.nb=q=>{n.g(2,q-He(a))}}}W(a,b){a["i-blur"]=()=>{this.g.log(578856259,Z,{...this.j,H:27});this.A.mb=!0;this.A.Kb&&(this.A.Fb=!0)};a["i-no"]=c=>{this.g.log(578856259,Z,{...this.j,H:26});this.Y={tag:1,de:c.i_tslv?c.i_tslv:void 0}};if(b.heavyAdInterventionResponse){const c= 
wc(b.heavyAdInterventionResponse);if(c){const {qd:d,pd:e}=Jq();a["i-hai-aux"]=d;e.then(f=>{W(this,f);f.promise.then(()=>c())})}}b.fullscreenApi||(a["i-adframe-load"]=()=>{br(this.T);this.C.qb||(this.C.qb=Ee())},a["i-dismiss"]=()=>{dr(this)},a.i_iif=()=>{er(this)})}ta(){this.g.log(578856259,Z,{...this.j,H:24});super.ta();or(this)&&nr(this,this.B.ha.href);this.B.ya&&(H(this.l.document,"click",this.B.ya),this.B.ya=void 0);this.g.log(578856259,Z,{...this.j,H:25})}ia(){}la(){return!1}gb(a){this.g.log(578856259, 
Z,{...this.j,H:54});this.A.hb?this.g.log(578856259,Z,{...this.j,H:56}):this.I?this.g.log(578856259,Z,{...this.j,H:57}):this.B.ha?a.preventDefaultTriggered?(this.g.log(578856259,Z,{...this.j,H:59}),this.B.ha=void 0):Zq(this.D,this.B.ha,this.B.ha.ownerDocument!==this.l.document)?ir(this)?(hr(this,1),this.g.log(578856259,Z,{...this.j,H:61})):(this.g.log(578856259,Z,{...this.j,H:60}),nr(this,this.B.ha.href)):(this.g.log(578856259,Z,{...this.j,H:55}),nr(this,this.B.ha.href)):this.g.log(578856259,Z,{...this.j, 
H:58})}za(){return!0}};function sr(a,b){b=b||a.l.document;if(!b.getElementById("vignette-style-id")){var c=zd(pd(b),"STYLE");c.id="vignette-style-id";c.textContent="a.google_vignette_inst {border:1px solid #000;color:#6c12b9}";b.head.appendChild(c);a.K.push(c)}}function tr(a,b,c){let d=0;for(let e=b.links.length;0<=e;e--){const f=b.links[e];f&&(f.classList.remove("google_vignette_inst"),Zq(a.D,f,c)&&!$q(a.D,f).length&&(d++,f.classList.add("google_vignette_inst")))}return d} 
var ur=class extends rr{constructor(a,b,c,d,e,f,g,h){var k=hk;const l=[];K(Ji)&&0===Td()&&l.push(101);K(Mi)&&l.push(102);K(Li)&&l.push(103);K(Ii)&&l.push(104);K(Ki)&&l.push(105);const m=new Set([2]);K(Gi)&&m.add(3);super(a,b,k,new Hq(a,b,e),gk,d,h,{uc:!0,Sb:l,Kc:!0,yb:{td:1,version:"m202402080301"},Rc:K(Fi),Qc:null},m);this.K=[];this.V=0;this.Da=f;this.da=Pj(this.l.location,"google_ia_debug");this.Ea=c;this.eb=g;this.da&&(this.X(),this.V=u.setInterval(y(this.X,this),5E3))}ia(){if(this.da){for(let b= 
0;b<this.K.length;++b){var a=this.K[b];(a=a.ownerNode||a.owningElement||a)&&a.parentNode&&a.parentNode.removeChild(a)}this.K=[];this.V&&u.clearInterval(this.V)}}X(){let a=tr(this,this.l.document,!1);sr(this);var b=this.l.frames;for(let c=0;c<b.length;c++)try{a+=tr(this,b[c].document,!0),sr(this,b[c].document)}catch(d){}b=vn(this.l,1);null!=b&&b.setLinksInstrumented(a)}za(){return this.Ea||fq(I(gq),this.Da,this.eb)}la(a){return/aswift_[0-9]+/.test(a.id)}};function vr(a){const b=a.j.document.createElement("span"),c=Math.round((wr(a)-50)/2);N(b,{background:"#FAFAFA",position:"absolute",left:c+"px",right:c+"px",top:xr(a)+5+"px","box-shadow":"rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"});b.className=`${a.l}-side-rail-dismiss-btn`;b.appendChild(yr(a));const d=()=>{a.D()};G(b,"click",d);X(a,()=>H(b,"click",d));return b}function xr(a){return Number(ue(a.g).height||a.g.height)} 
function wr(a){return Number(ue(a.g).width||a.g.width)} 
function yr(a){var b=a.j.document;const c=b.createElementNS("http://www.w3.org/2000/svg","svg");N(c,{position:"absolute",top:"0px",display:"block",width:"50px",height:"30px","margin-top":"-5px",transform:"none","pointer-events":"initial"});var d=b.createElementNS("http://www.w3.org/2000/svg","defs"),e=b.createElementNS("http://www.w3.org/2000/svg","filter");a=`${a.l}-side-rail-drop-shadow`;e.setAttribute("id",a);e.setAttribute("filterUnits","userSpaceOnUse");e.setAttribute("color-interpolation-filters", 
"sRGB");var f=b.createElementNS("http://www.w3.org/2000/svg","feComponentTransfer");f.setAttribute("in","SourceAlpha");f.setAttribute("result","TransferredAlpha");var g=b.createElementNS("http://www.w3.org/2000/svg","feFuncR");g.setAttribute("type","discrete");g.setAttribute("tableValues","0.5");f.appendChild(g);g=b.createElementNS("http://www.w3.org/2000/svg","feFuncG");g.setAttribute("type","discrete");g.setAttribute("tableValues","0.5");f.appendChild(g);g=b.createElementNS("http://www.w3.org/2000/svg", 
"feFuncB");g.setAttribute("type","discrete");g.setAttribute("tableValues","0.5");f.appendChild(g);e.appendChild(f);f=b.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");f.setAttribute("in","TransferredAlpha");f.setAttribute("stdDeviation","2");e.appendChild(f);f=b.createElementNS("http://www.w3.org/2000/svg","feOffset");f.setAttribute("dx","0");f.setAttribute("dy","0");f.setAttribute("result","offsetblur");e.appendChild(f);f=b.createElementNS("http://www.w3.org/2000/svg","feMerge");f.appendChild(b.createElementNS("http://www.w3.org/2000/svg", 
"feMergeNode"));g=b.createElementNS("http://www.w3.org/2000/svg","feMergeNode");g.setAttribute("in","SourceGraphic");f.appendChild(g);e.appendChild(f);d.appendChild(e);c.appendChild(d);d=b.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d","M5,5 L5,17 A8,8 0 0,0 13,25 L37,25 A8,8 0 0,0 45,17 L45,5 Z");d.setAttribute("stroke","#FAFAFA");d.setAttribute("stroke-width","1");d.setAttribute("fill","#FAFAFA");d.style.setProperty("filter",`url(#${a})`);c.appendChild(d);d=b.createElementNS("http://www.w3.org/2000/svg", 
"rect");d.setAttribute("x","0");d.setAttribute("y","0");d.setAttribute("width","50");d.setAttribute("height","5");d.style.setProperty("fill","#FAFAFA");c.appendChild(d);d=b.createElementNS("http://www.w3.org/2000/svg","g");d.setAttribute("stroke","#616161");d.setAttribute("stroke-width","2px");d.setAttribute("stroke-linecap","square");e=b.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1","18");e.setAttribute("y1","18");e.setAttribute("x2","25");e.setAttribute("y2","12");d.appendChild(e); 
b=b.createElementNS("http://www.w3.org/2000/svg","line");b.setAttribute("x1","25");b.setAttribute("y1","12");b.setAttribute("x2","32");b.setAttribute("y2","18");d.appendChild(b);c.appendChild(d);return c} 
var zr=class extends V{constructor(a,b,c,d,e){super();this.g=a;this.j=b;this.A=c;this.l=d;this.D=e;a=this.j.document.createElement("span");a.className=`${this.l}-side-rail-edge`;N(a,{background:"#FAFAFA",position:"absolute",left:"0px",top:xr(this)+"px",width:wr(this)+"px",height:"5px","box-shadow":"rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"});this.B=a;this.C=vr(this);this.A.appendChild(this.B);this.A.appendChild(this.C)}};function wq(a,b){"dismissed"!==a.A&&(a.A=b,a.j.setAttribute("data-side-rail-status",a.A))} 
function Ar(a,b){if("dismissed"===a.A)var c=!1;else{c=a.j;var d=mo({P:a.g,Uc:!1,nd:0,position:a.position,O:a.g.innerWidth,N:a.g.innerHeight,Sa:new Set([c]),minWidth:a.C.width+15,minHeight:a.C.height+35,M:a.M});if(d){var e=Math.round(d.width-a.C.width-15);a.B=Math.min(a.B??e,e);a.offsetY=Math.round(d.offsetY);N(c,{margin:"0px",padding:"0px",position:"fixed",[a.position]:a.B+"px",top:a.offsetY+"px",transition:"all 500ms ease-in",overflow:"visible"});a.G||N(c,{"z-index":"2147483647"});c=!0}else c=!1}c? 
Br(a,b):vq(a,b)}function vq(a,b=0){"displayed"===a.A&&(N(a.j,{transition:"all 500ms ease-in",opacity:"0",top:a.offsetY+b+"px"}),clearTimeout(a.D),a.D=setTimeout(()=>{wq(a,"idle");N(a.j,{display:"none"})},500))}function Br(a,b=0){"idle"===a.A&&(N(a.j,{transition:"",display:"block",opacity:"0",top:a.offsetY-b+"px"}),clearTimeout(a.D),a.D=setTimeout(()=>{wq(a,"displayed");N(a.j,{transition:"all 500ms ease-in",opacity:"1",top:a.offsetY+"px"})},10))} 
var Cr=class extends qp{constructor(a,b,c,d,e,f,g){super(a,b,c);this.C=e;this.M=f;this.G=g;this.A="idle";this.offsetY=this.D=0;this.B=null;this.J=0;this.position=3===d?"left":"right";new zr(a,b,c,this.position,()=>{vq(this,-30);wq(this,"dismissed")});wq(this,"idle");N(c,{display:"none"});const h=f.U(273,()=>{Ar(this)});G(a,"load",h);X(this,()=>H(a,"load",h));const k=f.U(267,()=>{this.B=null;Ar(this)});G(b,"resize",k);X(this,()=>H(b,"resize",k));const l=f.U(268,Ic(()=>{const m=R(this.g);Ar(this,this.C.height/ 
3*Math.sign(this.J-m));this.J=m}));G(b,"scroll",l,Kc);X(this,()=>H(b,"scroll",l));this.G&&Uo(this.G,m=>{N(c,{"z-index":String(m||2147483647)})})}};var Dr=class{constructor(a){this.g=a}verifyAndProcessConfig(a,b){if(3!==this.g&&4!==this.g)return!1;const c=new zn;if(!yn(c,b))return!1;b=a.document.createElement("ins");b.className="adsbygoogle";a.document.body.appendChild(b);const d=c.I||{};d.google_ad_client=c.j;d.google_ad_width=c.B;d.google_ad_height=c.l;d.google_reactive_ad_format=this.g;no(b,d,a);return!0}};var Er=class extends zn{constructor(){super(...arguments);this.D=86400}C(a){a.capIntervalMinutes&&(this.D=60*a.capIntervalMinutes);return!0}};var Fr=class{verifyAndProcessConfig(a,b){var c=sn(a);if(c.wasReactiveAdConfigReceived[8])return!1;const d=new Er;if(!yn(d,b))return!1;c.wasReactiveAdConfigReceived[8]=!0;b=Kd("INS");b.className="adsbygoogle";N(b,{display:"none"});a.document.documentElement.appendChild(b);c=d.I||{};c.google_ad_client=d.j;c.google_ad_width=d.B;c.google_ad_height=d.l;c.google_reactive_ad_format=8;c.vfcs=d.D;d.g&&(c.google_reactive_fill_message=d.g);d.A&&(c.google_adtest="on");no(b,c,a);return!0}};class Jn{configProcessorForAdFormat(a){switch(a){case 1:case 2:return new qo(a);case 3:case 4:return new Dr(a);case 8:return I(Fr);case 9:return I(uq);default:return null}}createAdSlot(a,b,c,d,e){a:{var f=b.google_reactive_ad_format;switch(f){case 1:case 2:e=a&&Pj(a.location,"google_anchor_debug");if(2===f||e)e=Bn({oc:0,Qb:a.innerWidth,fc:3,qc:0,Rb:Math.min(Math.round(a.innerWidth/320*50),Hn)+15,hc:3}),e=null!=Dn(new Fn(a),e)?"bottom":"top";else{e=a.innerWidth;var g=a.innerHeight;f=Math.min(Math.round(a.innerWidth/ 
320*50),Hn)+15;const h=Bn({oc:0,Qb:e,fc:3,qc:g-f,Rb:g,hc:3});25<f&&h.push({x:e-25,y:g-25});e=null!=Dn(new Fn(a),h)?"top":"bottom"}c=new Jp(c,a,e,d);new Co(a,c,b.google_reactive_fill_message,b.gdvucrm);break a;case 3:case 4:new xq(a,new Cr(c,a,d,f,new jd(b.google_ad_width,b.google_ad_height),hk,new Vo(a)));break a;case 8:new ur(a,c,"on"===b.google_adtest,new jd(b.google_ad_width,b.google_ad_height),d,e,b.vfcs,b.google_reactive_fill_message);break a;case 9:f=b.google_rasc;if(void 0===f||null===f)g= 
null;else try{g=Lp(f)}catch(h){lk("rasf_fsi_ama",{},.1),g=null}g=g||new Kp;new sq(a,c,g,"on"===b.google_adtest,d,e)}}}};function Gr(){var a=window;return"on"===u.google_adtest||"on"===u.google_adbreak_test||a.location.host.endsWith("h5games.usercontent.goog")?a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b=>Math.floor(Number(b))).filter(b=>!isNaN(b)&&0<b)||[]:[]};class Hr{};function Ir(){var a=u.ggeac||(u.ggeac={});xf(I(yf),a);Jr(a);I(Hr);I(Oc).g()}function Jr(a){const b=I(Oc);b.j=(c,d)=>wf(5,a,()=>!1)(c,d,1);b.l=(c,d)=>wf(6,a,()=>0)(c,d,1);b.A=(c,d)=>wf(7,a,()=>"")(c,d,1);b.B=(c,d)=>wf(8,a,()=>[])(c,d,1);b.g=()=>{wf(15,a,()=>{})(1)}};function Kr({Hc:a,od:b}){return a||("dev"===b?"dev":"")};function Lr(a){hk.Lb(b=>{b.shv=String(a);b.mjsv=Kr({Hc:"m202402080301",od:a});const c=I(yf).g(),d=Gr();b.eid=c.concat(d).join(",")})};var Mr="undefined"===typeof sttc?void 0:sttc;function Nr(){var a=hk;try{return uc(Mr,Ye),new rn(JSON.parse(Mr))}catch(b){a.Ta(838,b instanceof Error?b:Error(String(b)),void 0,c=>{c.jspb=String(Mr)})}return new rn};jk(210,()=>{const a=new vf;try{wb(c=>{var d=new mf;var e=new lf;try{var f=window;if("number"!==typeof f.goog_pvsid)try{var g=Object,h=g.defineProperty,k=Math.random;var l=Math.floor(k()*2**52);h.call(g,f,"goog_pvsid",{value:l,configurable:!1})}catch(r){}hc(e,1,Eb(Number(f.goog_pvsid)||-1),"0")}catch(r){}try{var m=I(yf).g();gc(e,2,m,Cb)}catch(r){}try{hc(e,3,Jb(window.document.URL),"")}catch(r){}d=nc(d,2,e);e=new kf;e=hc(e,1,Ab(1195),0);try{var n=Ye(c?.name)?c.name:"Unknown error";hc(e,2,Jb(n),"")}catch(r){}try{var q= 
Ye(c?.message)?c.message:`Caught ${c}`;hc(e,3,Jb(q),"")}catch(r){}try{const r=Ye(c?.stack)?c.stack:Error().stack;r&&gc(e,4,r.split(/\n\s*/),Ib)}catch(r){}c=nc(d,1,e);n=new jf;try{hc(n,1,Jb("m202402080301"),"")}catch{}oc(c,6,nf,n);hc(c,5,Eb(1),"0");pf(a,c)})}catch(c){}const b=Nr();Lr(qc(b,2)??"");xn(rc(b,6));Ir();In()}); 
}).call(this,"[2012,\"r20240207\",\"r20110914\",1,null,1,null,\".google.es\",null,null,null,null,null,null,null,null,null,-1,[44759875,44759926,44808398]]");
8 \\x22+typeof g+\\x22 \\x22+g);var k\\x3dg.substring(0,512);f.g.push(2);f.h[2]\\x3dQ(\\x22msg\\x22,k)}var p\\x3db.meta||{};if(this.h)try{this.h(p)}catch(H){}if(d)try{d(p)}catch(H){}b\\x3d[p];f.g.push(3);f.h[3]\\x3db;d\\x3dl;b\\x3d[];g\\x3dnull;do{var h\\x3dd;if(fa(h)){var m\\x3dh.location.href;g\\x3dh.document\\x26\\x26h.document.referrer||null}else m\\x3dg,g\\x3dnull;b.push(new ta(m|| \\x22\\x22));try{d\\x3dh.parent}catch(H){d\\x3dnull}}while(d\\x26\\x26h!\\x3dd);m\\x3d0;for(var r\\x3db.length-1;m\\x3c\\x3dr;++m)b[m].depth\\x3dr-m;h\\x3dl;if(h.location\\x26\\x26h.location.ancestorOrigins\\x26\\x26h.location.ancestorOrigins.length\\x3d\\x3db.length-1)for(r\\x3d1;r\\x3cb.length;++r){var w\\x3db[r];w.url||(w.url\\x3dh.location.ancestorOrigins[r-1]||\\x22\\x22,w.m\\x3d!0)}var t\\x3dnew ta(l.location.href,!1);h\\x3dnull;var U\\x3db.length-1;for(w\\x3dU;0\\x3c\\x3dw;--w){var u\\x3db[w];!h\\x26\\x26na.test(u.url)\\x26\\x26(h\\x3du);if(u.url\\x26\\x26!u.m){t\\x3du;break}}u\\x3dnull;var Na\\x3db.length\\x26\\x26b[U].url;0!\\x3dt.depth\\x26\\x26Na\\x26\\x26(u\\x3db[U]);var x\\x3dnew oa(t,u); if(x.h){var Oa\\x3dx.h.url||\\x22\\x22;f.g.push(4);f.h[4]\\x3dQ(\\x22top\\x22,Oa)}var V\\x3d{url:x.g.url||\\x22\\x22};if(x.g.url){var W\\x3dx.g.url.match(ea),pa\\x3dW[1],qa\\x3dW[3],ra\\x3dW[4];t\\x3d\\x22\\x22;pa\\x26\\x26(t+\\x3dpa+\\x22:\\x22);qa\\x26\\x26(t+\\x3d\\x22//\\x22,t+\\x3dqa,ra\\x26\\x26(t+\\x3d\\x22:\\x22+ra));var sa\\x3dt}else sa\\x3d\\x22\\x22;V\\x3d[V,{url:sa}];f.g.push(5);f.h[5]\\x3dV;Ga(this.j,e,f,this.i,c)}catch(H){try{Ga(this.j,e,{context:\\x22ecmserr\\x22,rctx:a,msg:X(H),url:x\\x26\\x26x.g.url},this.i,c)}catch(Sa){}}return!0}; function X(a){var b\\x3da.toString();a.name\\x26\\x26-1\\x3d\\x3db.indexOf(a.name)\\x26\\x26(b+\\x3d\\x22: \\x22+a.name);a.message\\x26\\x26-1\\x3d\\x3db.indexOf(a.message)\\x26\\x26(b+\\x3d\\x22: \\x22+a.message);if(a.stack){a\\x3da.stack;var c\\x3db;try{-1\\x3d\\x3da.indexOf(c)\\x26\\x26(a\\x3dc+\\x22\\\\n\\x22+a);for(var d;a!\\x3dd;)d\\x3da,a\\x3da.replace(RegExp(\\x22((https?:/..*/)[^/:]*:\\\\\\\\d+(?:.|\\\\n)*)\\\\\\\\2\\x22),\\x22$1\\x22);b\\x3da.replace(RegExp(\\x22\\\\n *\\x22,\\x22g\\x22),\\x22\\\\n\\x22)}catch(e){b\\x3dc}}return b};function Ha(){this.g\\x3dMath.random()}function Ia(){var a\\x3dS,b\\x3dwindow.google_srt;0\\x3c\\x3db\\x26\\x261\\x3e\\x3db\\x26\\x26(a.g\\x3db)}function Ga(a,b,c,d,e){if(((void 0\\x3d\\x3d\\x3dd?0:d)?a.g:Math.random())\\x3c(e||.01))try{if(c instanceof P)var f\\x3dc;else f\\x3dnew P,ha(c,function(k,p){var h\\x3df,m\\x3dh.j++;k\\x3dQ(p,k);h.g.push(m);h.h[m]\\x3dk});var g\\x3dBa(f,\\x22/pagead/gen_204?id\\x3d\\x22+b+\\x22\\x26\\x22);g\\x26\\x26ja(l,g,!1)}catch(k){}};var S,T,R\\x3dnew O;function Ja(){if(!window.google_measure_js_timing){var a\\x3dR;a.g\\x3d!1;a.h!\\x3da.i.google_js_reporting_queue\\x26\\x26(N()\\x26\\x26da(a.h,ya),a.h.length\\x3d0)}}(function(a){S\\x3dnull!\\x3da?a:new Ha;\\x22number\\x22!\\x3d\\x3dtypeof window.google_srt\\x26\\x26(window.google_srt\\x3dMath.random());Ia();T\\x3dnew Da;T.h\\x3dfunction(b){var c\\x3dka;0!\\x3d\\x3dc\\x26\\x26(b.jc\\x3dString(c),b.shv\\x3dla(c))};T.i\\x3d!0;\\x22complete\\x22\\x3d\\x3dwindow.document.readyState?Ja():R.g\\x26\\x26I(window,\\x22load\\x22,function(){Ja()})})();function Ka(a,b){b\\x26\\x26a.g.IntersectionObserver?(new a.g.IntersectionObserver(function(c,d){c.forEach(function(e){0\\x3e\\x3de.intersectionRatio||(La(a),d.disconnect())})},{threshold:b})).observe(a.g.document.documentElement):(a.h\\x3dFa(function(c){if(c\\x26\\x26(c.target.parent\\x3d\\x3dc.source||c.target.parent.parent\\x3d\\x3dc.source))try{var d\\x3dJSON.parse(c.data);d\\x26\\x26\\x22manual-send-view\\x22\\x3d\\x3dd.msg_type\\x26\\x26(J(a.g,\\x22message\\x22,a.h),Ma(a)\\x26\\x26J(a.g.parent,\\x22message\\x22,a.h),La(a))}catch(e){}}),I(a.g,\\x22message\\x22,a.h),Ma(a)\\x26\\x26I(a.g.parent,\\x22message\\x22,a.h))} function Ma(a){return fa(a.g.parent)\\x26\\x26a.g.parent!\\x3d\\x3da.g} function La(a){try{var b\\x3da.g;b\\x3dvoid 0\\x3d\\x3d\\x3db?window:b;b.vv();var c\\x3dvoid 0\\x3d\\x3d\\x3dc?.01:c;if(!(Math.random()\\x3ec)){var d\\x3dK(62),e\\x3d\\x22https://\\x22+(d\\x26\\x26\\x22true\\x22\\x3d\\x3d\\x3dd.getAttribute(\\x22data-jc-rcd\\x22)?\\x22pagead2.googlesyndication-cn.com\\x22:\\x22pagead2.googlesyndication.com\\x22)+\\x22/pagead/gen_204?id\\x3djca\\x26jc\\x3d62\\x26version\\x3d\\x22+la(62)+\\x22\\x26sample\\x3d\\x22+c;a\\x3dwindow;var f\\x3dvoid 0\\x3d\\x3d\\x3df?!1:f;var g;if(g\\x3da.navigator){var k\\x3da.navigator.userAgent;g\\x3d/Chrome/.test(k)\\x26\\x26!/Edge/.test(k)?!0:!1}g\\x26\\x26a.navigator.sendBeacon?a.navigator.sendBeacon(e):ja(a,e,void 0\\x3d\\x3d\\x3df?!1:f)}}catch(p){T.l(532, p,void 0,void 0)}};ka\\x3d62;var Pa\\x3dK(62);if(null\\x3d\\x3dPa)throw Error(\\x22JSC not found 62\\x22);for(var Qa\\x3d{},Y\\x3dPa.attributes,Z\\x3dY.length-1;0\\x3c\\x3dZ;Z--){var Ra\\x3dY[Z].name;0\\x3d\\x3d\\x3dRa.indexOf(\\x22data-jcp-\\x22)\\x26\\x26(Qa[Ra.substring(9)]\\x3dY[Z].value)}new function(a){this.g\\x3dwindow;this.h\\x3dnull;Ka(this,a)}(parseFloat(Qa.iobs_threshold));}).call(this);\\x3c/script\\x3e\\x3cdiv style\\x3d\\x22display:none\\x22 data-google-query-id\\x3d\\x22CITcmpLToYQDFU4NBgAdIFcJrA\\x22\\x3e\\x3c/div\\x3e\\x3cdiv style\\x3d\\x22bottom:0;right:0;width:140px;height:196px;background:initial !important;position:absolute !important;max-width:100% !important;max-height:100% !important;pointer-events:none !important;image-rendering:-moz-crisp-edges !important;z-index:2147483647;background-image:url(\\x27data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAWBAMAAACrl3iAAAAABlBMVEUAAAD+AciWmZzWAAAAAnRSTlMAApidrBQAAAB6SURBVBjTbZABDsAwCALxB/z/tV0V1Cw1i8b0ZCjwjqj46u4A5iuV3F0uEFMz3xeSmaHKTafipp/admJ9Oekgf77RLEY7owdYU1aFpgBLF12paevJgEaWkdqvrLfT8CRmv6Q47VxBm0p/XZD+x6JV24i1i6K+dcEY9gAaGAV+6hrhzwAAAABJRU5ErkJggg\\x3d\\x3d\\x27) !important;\\x22\\x3e\\x3c/div\\x3e\\x3cscript data-jc\\x3d\\x2258\\x22 data-jc-version\\x3d\\x22r20240207\\x22\\x3e(function(){function g(a){var b\\x3d0;return function(){return b\\x3ca.length?{done:!1,value:a[b++]}:{done:!0}}};/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var h\\x3dArray.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(\\x22string\\x22\\x3d\\x3d\\x3dtypeof a)return\\x22string\\x22!\\x3d\\x3dtypeof b||1!\\x3db.length?-1:a.indexOf(b,0);for(var c\\x3d0;c\\x3ca.length;c++)if(c in a\\x26\\x26a[c]\\x3d\\x3d\\x3db)return c;return-1};function l(a){l[\\x22 \\x22](a);return a}l[\\x22 \\x22]\\x3dfunction(){};function m(a){try{var b;if(b\\x3d!!a\\x26\\x26null!\\x3da.location.href)a:{try{l(a.foo);b\\x3d!0;break a}catch(c){}b\\x3d!1}return b}catch(c){return!1}}function n(a){a\\x3dvoid 0\\x3d\\x3d\\x3da?document:a;return a.createElement(\\x22img\\x22)};function q(a,b,c){var d\\x3d!1;d\\x3dvoid 0\\x3d\\x3d\\x3dd?!1:d;a.google_image_requests||(a.google_image_requests\\x3d[]);var e\\x3dn(a.document);if(c){var f\\x3dfunction(){if(c){var k\\x3da.google_image_requests,p\\x3dh(k,e);0\\x3c\\x3dp\\x26\\x26Array.prototype.splice.call(k,p,1)}e.removeEventListener\\x26\\x26e.removeEventListener(\\x22load\\x22,f,!1);e.removeEventListener\\x26\\x26e.removeEventListener(\\x22error\\x22,f,!1)};e.addEventListener\\x26\\x26e.addEventListener(\\x22load\\x22,f,!1);e.addEventListener\\x26\\x26e.addEventListener(\\x22error\\x22,f,!1)}d\\x26\\x26(e.attributionSrc\\x3d\\x22\\x22);e.src\\x3db;a.google_image_requests.push(e)} ;function r(){var a\\x3ddocument.currentScript;return(a\\x3dvoid 0\\x3d\\x3d\\x3da?null:a)\\x26\\x26\\x2258\\x22\\x3d\\x3d\\x3da.getAttribute(\\x22data-jc\\x22)?a:document.querySelector(\\x27[data-jc\\x3d\\x2258\\x22]\\x27)} function t(){var a\\x3dvoid 0\\x3d\\x3d\\x3da?.01:a;if(!(Math.random()\\x3ea)){var b\\x3dr();b\\x3d\\x22https://\\x22+(b\\x26\\x26\\x22true\\x22\\x3d\\x3d\\x3db.getAttribute(\\x22data-jc-rcd\\x22)?\\x22pagead2.googlesyndication-cn.com\\x22:\\x22pagead2.googlesyndication.com\\x22)+\\x22/pagead/gen_204?id\\x3djca\\x26jc\\x3d58\\x26version\\x3d\\x22;var c\\x3d(c\\x3dr())\\x26\\x26c.getAttribute(\\x22data-jc-version\\x22)||\\x22unknown\\x22;a\\x3db+c+\\x22\\x26sample\\x3d\\x22+a;b\\x3dwindow;var d\\x3dvoid 0\\x3d\\x3d\\x3dd?!1:d;if(c\\x3db.navigator)c\\x3db.navigator.userAgent,c\\x3d/Chrome/.test(c)\\x26\\x26!/Edge/.test(c)?!0:!1;c\\x26\\x26b.navigator.sendBeacon?b.navigator.sendBeacon(a):q(b,a,void 0\\x3d\\x3d\\x3dd?!1:d)}} ;function u(a,b){(new a.g.IntersectionObserver(function(c,d){c.forEach(function(e){0\\x3e\\x3de.intersectionRatio||(v(a),t(),d.disconnect())})},{threshold:b})).observe(a.g.document.documentElement)}function w(a){function b(c){try{var d\\x3dJSON.parse(c.data),e\\x3d\\x22rewarded\\x22\\x3d\\x3d\\x3dd.type\\x26\\x26\\x22visible\\x22\\x3d\\x3d\\x3dd.message,f\\x3dd.msg_type;if(\\x22i-view\\x22\\x3d\\x3d\\x3df||\\x22manual-send-view\\x22\\x3d\\x3d\\x3df||e)v(a),t()}catch(k){}}a.g.addEventListener(\\x22message\\x22,b);m(a.g.parent)\\x26\\x26a.g.parent!\\x3d\\x3da.g\\x26\\x26a.g.parent.addEventListener(\\x22message\\x22,b)} function v(a){function b(){var d\\x3ddocument.getElementsByClassName(\\x22GoogleActiveViewElement\\x22);var e\\x3d\\x22undefined\\x22!\\x3dtypeof Symbol\\x26\\x26Symbol.iterator\\x26\\x26d[Symbol.iterator];if(e)d\\x3de.call(d);else if(\\x22number\\x22\\x3d\\x3dtypeof d.length)d\\x3d{next:g(d)};else throw Error(String(d)+\\x22 is not an iterable or ArrayLike\\x22);for(e\\x3dd.next();!e.done;e\\x3dd.next())e.value.removeAttribute(\\x22data-google-av-dm\\x22)}b();if(0\\x3ca.h)var c\\x3dsetInterval(function(){0\\x3e\\x3da.h--\\x26\\x26clearInterval(c);b()},100)};var x\\x3dr();if(null\\x3d\\x3dx)throw Error(\\x22JSC not found 58\\x22);for(var y\\x3d{},z\\x3dx.attributes,A\\x3dz.length-1;0\\x3c\\x3dA;A--){var B\\x3dz[A].name;0\\x3d\\x3d\\x3dB.indexOf(\\x22data-jcp-\\x22)\\x26\\x26(y[B.substring(9)]\\x3dz[A].value)}new function(a,b){this.g\\x3dwindow;this.h\\x3db;a\\x26\\x26this.g.IntersectionObserver?u(this,a):w(this)}(parseFloat(y.iobs_threshold),parseInt(y.retry_times,10));}).call(this);\\x3c/script\\x3e\\x3cscript id\\x3d\\x22googleActiveViewDisplayScript\\x22 src\\x3d\\x22https://pagead2.googlesyndication.com/pagead/managed/js/activeview/current/ufs_web_display.js\\x22\\x3e\\x3c/script\\x3e\\x3cscript type\\x3d\\x22text/javascript\\x22\\x3eosdlfm();\\x3c/script\\x3e\\x3cscript data-jc\\x3d\\x2270\\x22 src\\x3d\\x22https://www.gstatic.com/mysidia/c153c37a1a65a3dc794c72874a968e6a.js?tag\\x3dmysidia_one_click_handler_one_afma\\x22 async data-jc-version\\x3d\\x22r20240207\\x22 data-jcp-expt-ids\\x3d\\x22\\x22 data-jcp-extra-meta\\x3d\\x22[]\\x22 data-jcp-correct-redirect-url-for-och-15-click\\x3d\\x22false\\x22 data-jcp-middle-clicks-in-och\\x3d\\x22true\\x22\\x3e\\x3c/script\\x3e\\x3c/body\\x3e\\x3c/html\\x3e\x27);doc.close();\x3c/script\x3e\x3c/div\x3e\x3cstyle\x3e.pull-icon {float: right;}[dir\x3d\x22rtl\x22] .pull-icon {float: left;}.interstitial-survey-wrapper {background-color: rgba(0,0,0,0.8);bottom: 0px;opacity: 1.0;overflow-y: auto;position: absolute;left: 0px;top: 0px;width: 100%;z-index:10000;}.interstitial-survey {display: block;font-size: 16px;margin: 96px auto;width: 320px;max-width: 92%;}.interstitial-survey span,.interstitial-menu span {display: inline-block;}.interstitial-survey img {height: 24px;margin-top: 12px;width: 24px;}.interstitial-survey div {display: block;width: 100%;}.survey-header {background-color: #4285f4;color: #FFFFFF;display: block;height: 64px;line-height: 64px;width: 100%;border-top-left-radius: 3px;-moz-border-top-left-radius: 3px;-webkit-border-top-left-radius: 3px;border-top-right-radius: 3px;-moz-border-top-right-radius: 3px;-webkit-border-top-right-radius: 3px;}.survey-header span {font-size: 1.25em;font-family: \x27Roboto-Light\x27, arial, sans-serif;padding: 0 24px;white-space: nowrap;}.btn-section-container {border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;background-color: #FFFFFF;margin-bottom: 8px;}.btn-section {padding: 0.8em 0px;}.btn-section a {cursor: pointer;}.btn-section a,.survey-confirmation-header,.survey-confirmation-closing {box-sizing: border-box;display: block;padding: 0 24px;width: 100%;}.btn-section a span,.survey-confirmation-header span,.survey-confirmation-closing span {color: rgba(0, 0, 0, 0.54);font-family: \x27Roboto-Medium\x27, arial, sans-serif;font-size: 1em;margin: 14px 0;max-width: 224px;}.menu-container {position: absolute;z-index:10000;}.menu-left {left: 15px;}.menu-right {right: 15px;}[dir\x3d\x22rtl\x22] .menu-left {left: initial;right: 15px;}[dir\x3d\x22rtl\x22] .menu-right {left: 15px;right: initial;}.menu-upper {top: 15px;}.menu-lower {bottom: 15px;}.menu-btn-section {padding: 5px 0;margin: 0;box-shadow: 0 0 3px 3px rgba(0,0,0,0.2);}.menu-btn-section img {height: 21px;margin: 3px 14px 0 0;}[dir\x3d\x22rtl\x22] .menu-btn-section img {margin: 3px 0 0 14px;}.menu-btn-section a {box-sizing: border-box;display: table;padding: 0 14px;width: 100%;}.menu-btn-section a div {display: table-cell;vertical-align: middle;}div.img-container {width: 35px;}.menu-btn-section a span {display: inline-block;color: #212121;font-family: \x27Roboto-Regular\x27, arial, sans-serif;font-size: 14px;margin: 11px 0;max-width: 224px;}.survey-confirmation-header span {opacity: 0.7;}.interstitial-menu {position: absolute;top: 12px;left: 12px;}\x3c/style\x3e\x3cdiv id\x3d\x22feedback\x22\x3e\x3cdiv id\x3d\x22survey-bg\x22class\x3d\x22interstitial-survey-wrapper\x22\x3e\x3cdiv class\x3d\x22interstitial-survey\x22\x3e\x3cdiv id\x3d\x22survey-view\x22\x3e\x3cdiv class\x3d\x22btn-section-container\x22\x3e\x3cdiv class\x3d\x22survey-header\x22\x3e\x3cspan\x3eFeedback on this ad\x3c/span\x3e\x3c/div\x3e\x3cdiv id\x3d\x22feedback-btns\x22class\x3d\x22btn-section\x22\x3e\x3ca data-label\x3d\x22mute_survey_option\x22data-label-instance\x3d\x228\x22\x3e\x3cspan\x3eInappropriate content\x3c/span\x3e\x3c/a\x3e\x3ca data-label\x3d\x22mute_survey_option\x22data-label-instance\x3d\x222\x22\x3e\x3cspan\x3eSeen this multiple times\x3c/span\x3e\x3c/a\x3e\x3ca data-label\x3d\x22mute_survey_option\x22data-label-instance\x3d\x227\x22\x3e\x3cspan\x3eNot interested in this\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22confirmation-view\x22\x3e\x3cdiv class\x3d\x22btn-section-container\x22\x3e\x3cdiv class\x3d\x22survey-confirmation-header\x22\x3e\x3cspan\x3eWe\x26#39;ll try not to show that ad again\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d\x22survey-confirmation-closing\x22\x3e\x3cspan\x3eClosing ad...\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22interstitial-menu\x22class\x3d\x22menu-container\x22\x3e\x3cdiv class\x3d\x22btn-section-container menu-btn-section\x22\x3e\x3ca id\x3d\x22open-survey\x22href\x3d\x22#\x22\x3e\x3cdiv class\x3d\x22img-container\x22\x3e\x3cimg src\x3d\x22https://www.gstatic.com/images/icons/material/system/2x/feedback_grey600_24dp.png\x22 alt\x3d\x22\x22\x3e\x3c/div\x3e\x3cdiv\x3e\x3cspan\x3eFeedback on this ad\x3c/span\x3e\x3c/div\x3e\x3c/a\x3e\x3ca target\x3d\x22_blank\x22href\x3d\x22//support.google.com/adsense/troubleshooter/1631343\x22nav\x3d\x221\x22\x3e\x3cdiv class\x3d\x22img-container\x22\x3e\x3cimg src\x3d\x22https://www.gstatic.com/images/icons/material/system/2x/settings_grey600_24dp.png\x22 alt\x3d\x22\x22\x3e\x3c/div\x3e\x3cdiv\x3e\x3cspan\x3eSee my Google ad settings\x3c/span\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2265\x22 data-jc-version\x3d\x22r20240207\x22 data-jcp-cnv-url\x3d\x22https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dC4tPLnOHHZYQezpqYsA-grqXgCtuPr4B1zK773IMSsJAfEAEg0YyCJGDVBaAB64iQngPIAQGoAwHIA8sEqgSKAk_QYsS5225Nj1KOeyoBqT7UQwyV51IdWoAwLehW0l1dX1yPGXetDBd9wwWlynC58DZGLE87Az8YrrB5R5A3Pj7iu1YtPTh0q-9eA6DDVCq6u7dY0zE_M8v8ywRbfLX5cI1DYfJQ5mDBm23oW-I8-NF_C7BB5oBdKVVFIW3EiWqzzBpKFismQ2CSzrHoHB6jkUBgAmlVQwTYZ8l55BsVQZc5_j3dBk3v_RT0kKgIUNp1RZbfMT0PnEwIGSPdoA5gHCf7poYKq6yQKnn5PogJUJphbiIoWNKON-ylGq8_xFqar69h2KpVQmvzOLUuRnDIaQIWDYZQPOxkwWE9bsAp5FS-rSUTFGSR7JGBwAT37omeyQSIBZrF7NhNgAf99u9hqAfZtrECqAeOzhuoB5PYG6gH7paxAqgH_p6xAqgH1ckbqAemvhuoB5oGqAfz0RuoB5bYG6gHqpuxAqgHg62xAqgH_56xAqgH35-xAtgHAdIIJgiA4YAQEAEYHzICqgI6CYBAgICEgICECEi9_cE6WKi7mpLToYQDsQkVjATCw10kvYAKAZgLAcgLAaoNAkVTyA0B2BMK0BUB-BYBgBcBshgEEgKHVA\x26amp;sigh\x3d9MiI4PjiRiM\x26amp;cid\x3dCAQSTwAvHhf_PnjCW96An6sQsK3WKWXyRbE8A1-mMHy__0lSzzYyGQTtiNedw-1tlzZR9XnU260IR3rSQY0-8McrcuRvipnijmW8yNsSeMKSRAU\x22 data-jcp-cls-btn-tkn\x3d\x22YLCqadNNoCUIzK773IMSEJrF7NhNGI6njmIiD3NvdXJjZWdyYXBoLmNvbTIHCAUTGKAYFEIXY2EtcHViLTg3MzQ1OTczMDkxNDUyOTdIDFgBcAF6BggEEgIHJA\x22 data-jcp-fdb-id\x3d\x22feedback\x22 data-jcp-srv-id\x3d\x22survey-view\x22 data-jcp-cnf-id\x3d\x22confirmation-view\x22 data-jcp-btns-id\x3d\x22feedback-btns\x22 data-jcp-bckg-id\x3d\x22survey-bg\x22 data-jcp-adset-id\x3d\x22goog-ad-settings\x22 data-jcp-menu-id\x3d\x22interstitial-menu\x22 data-jcp-mn-intr-cnv\x3d\x22{\x26quot;label\x26quot;:\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;label_instance\x26quot;:\x26quot;\x26quot;,\x26quot;include_close_button_token\x26quot;:false}\x22 data-jcp-mn-opt-cnv\x3d\x22{\x26quot;label\x26quot;:\x26quot;user_feedback_menu_option\x26quot;,\x26quot;label_instance\x26quot;:\x26quot;1\x26quot;,\x26quot;include_close_button_token\x26quot;:true}\x22 data-jcp-undo-cnv\x3d\x22{\x26quot;label\x26quot;:\x26quot;user_feedback_undo\x26quot;,\x26quot;label_instance\x26quot;:\x26quot;1\x26quot;,\x26quot;include_close_button_token\x26quot;:true}\x22\x3e(function(){var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dc.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var c\x3da[b];if(c\x26\x26c.Math\x3d\x3dMath)return c}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function m(a,b){if(b)a:{var c\x3dca;a\x3da.split(\x22.\x22);for(var d\x3d0;d\x3ca.length-1;d++){var e\x3da[d];if(!(e in c))break a;c\x3dc[e]}a\x3da[a.length-1];d\x3dc[a];b\x3db(d);b!\x3dd\x26\x26null!\x3db\x26\x26aa(c,a,{configurable:!0,writable:!0,value:b})}}var da\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},ea; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)ea\x3dObject.setPrototypeOf;else{var fa;a:{var ha\x3d{a:!0},ia\x3d{};try{ia.__proto__\x3dha;fa\x3dia.a;break a}catch(a){}fa\x3d!1}ea\x3dfa?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var ja\x3dea; function ka(a,b){a.prototype\x3dda(b.prototype);a.prototype.constructor\x3da;if(ja)ja(a,b);else for(var c in b)if(\x22prototype\x22!\x3dc)if(Object.defineProperties){var d\x3dObject.getOwnPropertyDescriptor(b,c);d\x26\x26Object.defineProperty(a,c,d)}else a[c]\x3db[c];a.V\x3db.prototype}function la(){for(var a\x3dNumber(this),b\x3d[],c\x3da;c\x3carguments.length;c++)b[c-a]\x3darguments[c];return b} var ma\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var c\x3d1;c\x3carguments.length;c++){var d\x3darguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)\x26\x26(a[e]\x3dd[e])}return a};m(\x22Object.assign\x22,function(a){return a||ma});m(\x22Object.is\x22,function(a){return a?a:function(b,c){return b\x3d\x3d\x3dc?0!\x3d\x3db||1/b\x3d\x3d\x3d1/c:b!\x3d\x3db\x26\x26c!\x3d\x3dc}}); m(\x22Array.prototype.includes\x22,function(a){return a?a:function(b,c){var d\x3dthis;d instanceof String\x26\x26(d\x3dString(d));var e\x3dd.length;c\x3dc||0;for(0\x3ec\x26\x26(c\x3dMath.max(c+e,0));c\x3ce;c++){var f\x3dd[c];if(f\x3d\x3d\x3db||Object.is(f,b))return!0}return!1}}); m(\x22String.prototype.includes\x22,function(a){return a?a:function(b,c){if(null\x3d\x3dthis)throw new TypeError(\x22The \x27this\x27 value for String.prototype.includes must not be null or undefined\x22);if(b instanceof RegExp)throw new TypeError(\x22First argument to String.prototype.includes must not be a regular expression\x22);return-1!\x3d\x3dthis.indexOf(b,c||0)}});/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var q\x3dthis||self;function na(a,b){a:{var c\x3d[\x22CLOSURE_FLAGS\x22];for(var d\x3dq,e\x3d0;e\x3cc.length;e++)if(d\x3dd[c[e]],null\x3d\x3dd){c\x3dnull;break a}c\x3dd}a\x3dc\x26\x26c[a];return null!\x3da?a:b}function oa(a,b,c){return a.call.apply(a.bind,arguments)}function pa(a,b,c){if(!a)throw Error();if(2\x3carguments.length){var d\x3dArray.prototype.slice.call(arguments,2);return function(){var e\x3dArray.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}} function u(a,b,c){u\x3dFunction.prototype.bind\x26\x26-1!\x3dFunction.prototype.bind.toString().indexOf(\x22native code\x22)?oa:pa;return u.apply(null,arguments)};var qa\x3dna(610401301,!1),ra\x3dna(572417392,!0);var v,sa\x3dq.navigator;v\x3dsa?sa.userAgentData||null:null;function va(a){return qa?v?v.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function x(a){var b;a:{if(b\x3dq.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function A(){return qa?!!v\x26\x260\x3cv.brands.length:!1}function wa(){return A()?va(\x22Chromium\x22):(x(\x22Chrome\x22)||x(\x22CriOS\x22))\x26\x26!(A()?0:x(\x22Edge\x22))||x(\x22Silk\x22)};var xa\x3dArray.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c\x3da.length,d\x3d\x22string\x22\x3d\x3d\x3dtypeof a?a.split(\x22\x22):a,e\x3d0;e\x3cc;e++)e in d\x26\x26b.call(void 0,d[e],e,a)};function ya(a){ya[\x22 \x22](a);return a}ya[\x22 \x22]\x3dfunction(){};var za\x3dA()?!1:x(\x22Trident\x22)||x(\x22MSIE\x22);!x(\x22Android\x22)||wa();wa();x(\x22Safari\x22)\x26\x26(wa()||(A()?0:x(\x22Coast\x22))||(A()?0:x(\x22Opera\x22))||(A()?0:x(\x22Edge\x22))||(A()?va(\x22Microsoft Edge\x22):x(\x22Edg/\x22))||A()\x26\x26va(\x22Opera\x22));var Aa\x3d{},B\x3dnull;var Ba\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,Ca\x3d!za\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var Da\x3d!ra,Ea\x3d!ra;var C\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0;var Fa\x3dC?function(a,b){a[C]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function Ga(a){var b\x3dD(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),E(a,b|1))}var D\x3dC?function(a){return a[C]|0}:function(a){return a.g|0},F\x3dC?function(a){return a[C]}:function(a){return a.g},E\x3dC?function(a,b){a[C]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})}; function Ha(){var a\x3d[];Fa(a,1);return a}function H(a){a\x3da\x3e\x3e14\x261023;return 0\x3d\x3d\x3da?536870912:a};var Ia\x3d{},Ja\x3d{};function Ka(a){return!(!a||\x22object\x22!\x3d\x3dtypeof a||a.g!\x3d\x3dJa)}function I(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var La,Ma\x3d!ra;function Na(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d\x3dD(a);if(d\x261)return!0;if(!(b\x26\x26(Array.isArray(b)?b.includes(c):b.has(c))))return!1;E(a,d|1);return!0}var K,Oa\x3d[];E(Oa,55);K\x3dObject.freeze(Oa);Object.freeze(new function(){});Object.freeze(new function(){});function Pa(a){return null\x3d\x3da||\x22string\x22\x3d\x3d\x3dtypeof a?a:void 0};var Qa;function Ra(a,b,c){null\x3d\x3da\x26\x26(a\x3dQa);Qa\x3dvoid 0;if(null\x3d\x3da){var d\x3d96;c?(a\x3d[c],d|\x3d512):a\x3d[];b\x26\x26(d\x3dd\x26-16760833|(b\x261023)\x3c\x3c14)}else{if(!Array.isArray(a))throw Error();d\x3dD(a);if(d\x2664)return a;d|\x3d64;if(c\x26\x26(d|\x3d512,c!\x3d\x3da[0]))throw Error();a:{c\x3da;var e\x3dc.length;if(e){var f\x3de-1;if(I(c[f])){d|\x3d256;b\x3df-(+!!(d\x26512)-1);if(1024\x3c\x3db)throw Error();d\x3dd\x26-16760833|(b\x261023)\x3c\x3c14;break a}}if(b){b\x3dMath.max(b,e-(+!!(d\x26512)-1));if(1024\x3cb)throw Error();d\x3dd\x26-16760833|(b\x261023)\x3c\x3c14}}}E(a,d);return a};function Sa(a,b){return Ta(b)} function Ta(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a){if(Array.isArray(a))return Ma||!Na(a,void 0,9999)?a:void 0;if(Ba\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(Ca){for(var b\x3d\x22\x22,c\x3d0,d\x3da.length-10240;c\x3cd;)b+\x3dString.fromCharCode.apply(null,a.subarray(c,c+\x3d10240));b+\x3dString.fromCharCode.apply(null,c?a.subarray(c):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!B){B\x3d{};c\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);d\x3d [\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d0;5\x3ee;e++){var f\x3dc.concat(d[e].split(\x22\x22));Aa[e]\x3df;for(var g\x3d0;g\x3cf.length;g++){var h\x3df[g];void 0\x3d\x3d\x3dB[h]\x26\x26(B[h]\x3dg)}}}b\x3dAa[b];c\x3dArray(Math.floor(a.length/3));d\x3db[64]||\x22\x22;for(e\x3df\x3d0;f\x3ca.length-2;f+\x3d3){var l\x3da[f],k\x3da[f+1];h\x3da[f+2];g\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];c[e++]\x3dg+l+k+h}g\x3d0;h\x3dd;switch(a.length-f){case 2:g\x3da[f+1],h\x3db[(g\x2615)\x3c\x3c2]||d;case 1:a\x3da[f],c[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|g\x3e\x3e4]+h+d}a\x3dc.join(\x22\x22)}return a}}}return a};function Ua(a,b,c,d,e,f){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26D(a)\x261?void 0:f\x26\x26D(a)\x262?a:Va(a,b,c,void 0!\x3d\x3dd,e,f);else if(I(a)){var g\x3d{},h;for(h in a)g[h]\x3dUa(a[h],b,c,d,e,f);a\x3dg}else a\x3db(a,d);return a}}function Va(a,b,c,d,e,f){var g\x3dd||c?D(a):0;d\x3dd?!!(g\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dUa(a[h],b,c,d,e,f);c\x26\x26c(g,a);return a}function Wa(a){return a.S\x3d\x3d\x3dIa?a.toJSON():Ta(a)};function Xa(a,b){a\x3da.l;a:{var c\x3dF(a);if(-1\x3d\x3d\x3db)b\x3dnull;else{if(b\x3e\x3dH(c)){if(c\x26256){b\x3da[a.length-1][b];break a}}else if(b+\x3d+!!(c\x26512)-1,b\x3ca.length){b\x3da[b];break a}b\x3dvoid 0}}return b}function Ya(a,b,c){var d\x3da.l,e\x3dF(d);if(e\x262)throw Error();a:{var f\x3dH(e);if(b\x3e\x3df){var g\x3de;if(e\x26256)var h\x3dd[d.length-1];else{if(null\x3d\x3dc)break a;h\x3dd[f+(+!!(e\x26512)-1)]\x3d{};g|\x3d256}h[b]\x3dc;b\x3cf\x26\x26(d[b+(+!!(e\x26512)-1)]\x3dvoid 0);g!\x3d\x3de\x26\x26E(d,g)}else d[b+(+!!(e\x26512)-1)]\x3dc,e\x26256\x26\x26(c\x3dd[d.length-1],b in c\x26\x26delete c[b])}return a} function L(a,b,c){if(null!\x3dc\x26\x26\x22string\x22!\x3d\x3dtypeof c)throw Error();return Ya(a,b,c)};function M(a,b,c){this.l\x3dRa(a,b,c)}M.prototype.toJSON\x3dfunction(){if(La)var a\x3dZa(this,this.l,!1);else a\x3dVa(this.l,Wa,void 0,void 0,!1,!1),a\x3dZa(this,a,!0);return a};M.prototype.S\x3dIa;M.prototype.toString\x3dfunction(){return Za(this,this.l,!1).toString()}; function Za(a,b,c){var d\x3da.constructor.U,e\x3dF(c?a.l:b),f\x3dH(e),g\x3d!1;if(d\x26\x26Ma){if(!c){b\x3dArray.prototype.slice.call(b);var h;if(b.length\x26\x26I(h\x3db[b.length-1]))for(g\x3d0;g\x3cd.length;g++)if(d[g]\x3e\x3df){Object.assign(b[b.length-1]\x3d{},h);break}g\x3d!0}f\x3db;c\x3d!c;h\x3dF(a.l);a\x3dH(h);h\x3d+!!(h\x26512)-1;for(var l,k,n\x3d0;n\x3cd.length;n++)if(k\x3dd[n],k\x3ca){k+\x3dh;var r\x3df[k];null\x3d\x3dr?f[k]\x3dc?K:Ha():c\x26\x26r!\x3d\x3dK\x26\x26Ga(r)}else l||(r\x3dvoid 0,f.length\x26\x26I(r\x3df[f.length-1])?l\x3dr:f.push(l\x3d{})),r\x3dl[k],null\x3d\x3dl[k]?l[k]\x3dc?K:Ha():c\x26\x26r!\x3d\x3dK\x26\x26Ga(r)}l\x3db.length;if(!l)return b; var y;if(I(f\x3db[l-1])){a:{var p\x3df;c\x3d{};a\x3d!1;for(var t in p){h\x3dp[t];if(Array.isArray(h)){n\x3dh;if(!Ea\x26\x26Na(h,d,+t)||!Da\x26\x26Ka(h)\x26\x260\x3d\x3d\x3dh.size)h\x3dnull;h!\x3dn\x26\x26(a\x3d!0)}null!\x3dh?c[t]\x3dh:a\x3d!0}if(a){for(var z in c){p\x3dc;break a}p\x3dnull}}p!\x3df\x26\x26(y\x3d!0);l--}for(e\x3d+!!(e\x26512)-1;0\x3cl;l--){t\x3dl-1;f\x3db[t];if(!(null\x3d\x3df||!Ea\x26\x26Na(f,d,t-e)||!Da\x26\x26Ka(f)\x26\x260\x3d\x3d\x3df.size))break;var P\x3d!0}if(!y\x26\x26!P)return b;var w;g?w\x3db:w\x3dArray.prototype.slice.call(b,0,l);b\x3dw;g\x26\x26(b.length\x3dl);p\x26\x26b.push(p);return b};function $a(a){this.l\x3dRa(a)}ka($a,M);function ab(a){this.l\x3dRa(a)}ka(ab,M);var bb\x3d\x22undefined\x22!\x3dtypeof DOMTokenList;function N(a,b){if(bb)a\x3da.classList,0\x3d\x3da.contains(b)\x26\x26a.toggle(b);else{var c\x3da.className;if(c){c\x3dc.split(/\\s+/);for(var d\x3d!1,e\x3d0;e\x3cc.length\x26\x26!d;++e)d\x3dc[e]\x3d\x3db;d||(c.push(b),a.className\x3dc.join(\x22 \x22))}else a.className\x3db}};function O(a,b,c){a.addEventListener\x26\x26a.addEventListener(b,c,!1)};var cb\x3dRegExp(\x22^(?:([^:/?#.]+):)?(?://(?:([^\\\\\\\\/?#]*)@)?([^\\\\\\\\/?#]*?)(?::([0-9]+))?(?\x3d[\\\\\\\\/?#]|$))?([^?#]+)?(?:\\\\?([^#]*))?(?:#([\\\\s\\\\S]*))?$\x22),db\x3d/#|$/;function eb(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)\x26\x26b(a[c],c,a)};function fb(a,b){a.google_image_requests||(a.google_image_requests\x3d[]);var c\x3da.document;c\x3dvoid 0\x3d\x3d\x3dc?document:c;c\x3dc.createElement(\x22img\x22);c.src\x3db;a.google_image_requests.push(c)};var gb\x3d0;function hb(a){var b\x3ddocument.currentScript;return(b\x3dvoid 0\x3d\x3d\x3db?null:b)\x26\x26b.getAttribute(\x22data-jc\x22)\x3d\x3d\x3dString(a)?b:document.querySelector(\x27[data-jc\x3d\x22\x27+a+\x27\x22]\x27)};function ib(a,b){if(!a)throw Error(\x22bad conv util ctor args\x22);this.i\x3da;this.h\x3db} ib.prototype.g\x3dfunction(a){var b\x3dPa(Xa(a,1));b\x3dnull!\x3db?b:\x22\x22;var c\x3dPa(Xa(a,2));c\x3dnull!\x3dc?c:\x22\x22;a\x3dXa(a,3);a\x3dnull\x3d\x3da||\x22boolean\x22\x3d\x3d\x3dtypeof a?a:\x22number\x22\x3d\x3d\x3dtypeof a?!!a:void 0;a\x3dnull!\x3da?a:!0;var d\x3dthis.i;var e\x3dd.search(db),f;b:{for(f\x3d0;0\x3c\x3d(f\x3dd.indexOf(\x22ad_signals\x22,f))\x26\x26f\x3ce;){var g\x3dd.charCodeAt(f-1);if(38\x3d\x3dg||63\x3d\x3dg)if(g\x3dd.charCodeAt(f+10),!g||61\x3d\x3dg||38\x3d\x3dg||35\x3d\x3dg)break b;f+\x3d11}f\x3d-1}if(0\x3ef)d\x3dnull;else{g\x3dd.indexOf(\x22\x26\x22,f);if(0\x3eg||g\x3ee)g\x3de;d\x3ddecodeURIComponent(d.slice(f+11,-1!\x3d\x3dg?g:0).replace(/\\+/g,\x22 \x22))}if(d){c\x3d {H:d,label:b,L:c,I:a?\x22\x22+this.h:\x22\x22};var h\x3dvoid 0\x3d\x3d\x3dh?q:h;b\x3dnew ab;null!\x3dc\x26\x26(null!\x3dc.H\x26\x26L(b,1,c.H),null!\x3dc.T\x26\x26L(b,3,c.T),null!\x3dc.label\x26\x26L(b,6,c.label),null!\x3dc.L\x26\x26L(b,7,c.L),null!\x3dc.I\x26\x26L(b,8,c.I));h\x3dvoid 0\x3d\x3d\x3dh?window:h;if(null!\x3d(h\x3dh.fence)){c\x3dh.reportEvent;a:{La\x3d!0;try{var l\x3dJSON.stringify(b.toJSON(),Sa);break a}finally{La\x3d!1}l\x3dvoid 0}c.call(h,{eventType:\x22interaction\x22,eventData:l,destination:[\x22buyer\x22]})}}else{l\x3dthis.i+\x22\x26label\x3d\x22+b;c\x26\x26(l+\x3d\x22\x26label_instance\x3d\x22+c);if(a){if(!this.h)throw Error(\x22missing cbt\x22); l+\x3d\x22\x26cbt\x3d\x22+this.h}fb(window,l)}};function jb(a,b,c){var d\x3dnew $a;a\x3dL(d,1,a);b\x3dL(a,2,b);if(null!\x3dc\x26\x26\x22boolean\x22!\x3d\x3dtypeof c)throw b\x3dtypeof c,Error(\x22Expected boolean but got \x22+(\x22object\x22!\x3db?b:c?Array.isArray(c)?\x22array\x22:b:\x22null\x22)+\x22: \x22+c);return Ya(b,3,c)}function kb(a){a\x3dJSON.parse(a);return jb(a.label,a.label_instance,a.include_close_button_token)};var Q\x3ddocument;function R(a,b){a.style.display\x3db?\x22\x22:\x22none\x22};function pb(a,b){var c\x3dvoid 0\x3d\x3d\x3dc?{}:c;this.error\x3da;this.context\x3db.context;this.msg\x3db.message||\x22\x22;this.id\x3db.id||\x22jserror\x22;this.meta\x3dc};var qb\x3dRegExp(\x22^https?://(\\\\w|-)+\\\\.cdn\\\\.ampproject\\\\.(net|org)(\\\\?|/|$)\x22);function rb(a,b){this.g\x3da;this.h\x3db}function sb(a,b){this.url\x3da;this.K\x3d!!b;this.depth\x3dnull};var S\x3dnull;function tb(){var a\x3dvoid 0\x3d\x3d\x3da?q:a;return(a\x3da.performance)\x26\x26a.now\x26\x26a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function ub(){var a\x3dvoid 0\x3d\x3d\x3da?q:a;return(a\x3da.performance)\x26\x26a.now?a.now():null};function vb(a,b){var c\x3dub()||tb();this.label\x3da;this.type\x3db;this.value\x3dc;this.duration\x3d0;this.taskId\x3dthis.slotId\x3dvoid 0;this.uniqueId\x3dMath.random()};var T\x3dq.performance,wb\x3d!!(T\x26\x26T.mark\x26\x26T.measure\x26\x26T.clearMarks),U\x3dfunction(a){var b\x3d!1,c;return function(){b||(c\x3da(),b\x3d!0);return c}}(function(){var a;if(a\x3dwb){var b;if(null\x3d\x3d\x3dS){S\x3d\x22\x22;try{a\x3d\x22\x22;try{a\x3dq.top.location.hash}catch(c){a\x3dq.location.hash}a\x26\x26(S\x3d(b\x3da.match(/\\bdeid\x3d([\\d,]+)/))?b[1]:\x22\x22)}catch(c){}}b\x3dS;a\x3d!!b.indexOf\x26\x260\x3c\x3db.indexOf(\x221337\x22)}return a}); function xb(){var a\x3dwindow;this.h\x3d[];this.i\x3da||q;var b\x3dnull;a\x26\x26(a.google_js_reporting_queue\x3da.google_js_reporting_queue||[],this.h\x3da.google_js_reporting_queue,b\x3da.google_measure_js_timing);this.g\x3dU()||(null!\x3db?b:1\x3eMath.random())}function yb(a){a\x26\x26T\x26\x26U()\x26\x26(T.clearMarks(\x22goog_\x22+a.label+\x22_\x22+a.uniqueId+\x22_start\x22),T.clearMarks(\x22goog_\x22+a.label+\x22_\x22+a.uniqueId+\x22_end\x22))}xb.prototype.start\x3dfunction(a,b){if(!this.g)return null;a\x3dnew vb(a,b);b\x3d\x22goog_\x22+a.label+\x22_\x22+a.uniqueId+\x22_start\x22;T\x26\x26U()\x26\x26T.mark(b);return a}; xb.prototype.end\x3dfunction(a){if(this.g\x26\x26\x22number\x22\x3d\x3d\x3dtypeof a.value){a.duration\x3d(ub()||tb())-a.value;var b\x3d\x22goog_\x22+a.label+\x22_\x22+a.uniqueId+\x22_end\x22;T\x26\x26U()\x26\x26T.mark(b);!this.g||2048\x3cthis.h.length||this.h.push(a)}};function zb(){this.i\x3d\x22\x26\x22;this.h\x3d{};this.j\x3d0;this.g\x3d[]}function V(a,b){var c\x3d{};c[a]\x3db;return[c]}function Ab(a,b,c,d,e){var f\x3d[];eb(a,function(g,h){(g\x3dBb(g,b,c,d,e))\x26\x26f.push(h+\x22\x3d\x22+g)});return f.join(b)} function Bb(a,b,c,d,e){if(null\x3d\x3da)return\x22\x22;b\x3db||\x22\x26\x22;c\x3dc||\x22,$\x22;\x22string\x22\x3d\x3dtypeof c\x26\x26(c\x3dc.split(\x22\x22));if(a instanceof Array){if(d\x3dd||0,d\x3cc.length){for(var f\x3d[],g\x3d0;g\x3ca.length;g++)f.push(Bb(a[g],b,c,d+1,e));return f.join(c[d])}}else if(\x22object\x22\x3d\x3dtypeof a)return e\x3de||0,2\x3ee?encodeURIComponent(Ab(a,b,c,d,e+1)):\x22...\x22;return encodeURIComponent(String(a))} function Cb(a,b){var c\x3d\x22https://pagead2.googlesyndication.com\x22+b,d\x3dDb(a)-b.length;if(0\x3ed)return\x22\x22;a.g.sort(function(n,r){return n-r});b\x3dnull;for(var e\x3d\x22\x22,f\x3d0;f\x3ca.g.length;f++)for(var g\x3da.g[f],h\x3da.h[g],l\x3d0;l\x3ch.length;l++){if(!d){b\x3dnull\x3d\x3db?g:b;break}var k\x3dAb(h[l],a.i,\x22,$\x22);if(k){k\x3de+k;if(d\x3e\x3dk.length){d-\x3dk.length;c+\x3dk;e\x3da.i;break}b\x3dnull\x3d\x3db?g:b}}a\x3d\x22\x22;null!\x3db\x26\x26(a\x3de+\x22trn\x3d\x22+b);return c+a}function Db(a){var b\x3d1,c;for(c in a.h)b\x3dc.length\x3eb?c.length:b;return 3997-b-a.i.length-1};function Eb(){var a\x3dFb;this.pinger\x3dW;this.g\x3dvoid 0\x3d\x3d\x3da?null:a;this.h\x3dnull;this.i\x3d!1;this.m\x3dthis.j}function Gb(a,b){var c\x3dX;try{if(c.g\x26\x26c.g.g){var d\x3dc.g.start(a.toString(),3);var e\x3db();c.g.end(d)}else e\x3db()}catch(h){b\x3d!0;try{yb(d),b\x3dc.m(a,new pb(h,{message:Hb(h)}),void 0,void 0)}catch(l){c.j(217,l)}if(b){var f,g;null\x3d\x3d(f\x3dwindow.console)||null\x3d\x3d(g\x3df.error)||g.call(f,h)}else throw h;}return e} function Ib(a,b){return function(){var c\x3dla.apply(0,arguments);return Gb(a,function(){return b.apply(void 0,c)})}} Eb.prototype.j\x3dfunction(a,b,c,d,e){e\x3de||\x22jserror\x22;try{var f\x3dnew zb;f.g.push(1);f.h[1]\x3dV(\x22context\x22,a);b.error\x26\x26b.meta\x26\x26b.id||(b\x3dnew pb(b,{message:Hb(b)}));if(b.msg){var g\x3db.msg;null\x3d\x3dg.substring\x26\x26(g\x3d\x22b/320546888 \x22+typeof g+\x22 \x22+g);var h\x3dg.substring(0,512);f.g.push(2);f.h[2]\x3dV(\x22msg\x22,h)}var l\x3db.meta||{};if(this.h)try{this.h(l)}catch(J){}if(d)try{d(l)}catch(J){}b\x3d[l];f.g.push(3);f.h[3]\x3db;d\x3dq;b\x3d[];g\x3dnull;do{var k\x3dd;try{var n;if(n\x3d!!k\x26\x26null!\x3dk.location.href)b:{try{ya(k.foo);n\x3d!0;break b}catch(J){}n\x3d!1}var r\x3d n}catch(J){r\x3d!1}if(r){var y\x3dk.location.href;g\x3dk.document\x26\x26k.document.referrer||null}else y\x3dg,g\x3dnull;b.push(new sb(y||\x22\x22));try{d\x3dk.parent}catch(J){d\x3dnull}}while(d\x26\x26k!\x3dd);y\x3d0;for(var p\x3db.length-1;y\x3c\x3dp;++y)b[y].depth\x3dp-y;k\x3dq;if(k.location\x26\x26k.location.ancestorOrigins\x26\x26k.location.ancestorOrigins.length\x3d\x3db.length-1)for(p\x3d1;p\x3cb.length;++p){var t\x3db[p];t.url||(t.url\x3dk.location.ancestorOrigins[p-1]||\x22\x22,t.K\x3d!0)}var z\x3dnew sb(q.location.href,!1);k\x3dnull;var P\x3db.length-1;for(t\x3dP;0\x3c\x3dt;--t){var w\x3db[t];!k\x26\x26qb.test(w.url)\x26\x26 (k\x3dw);if(w.url\x26\x26!w.K){z\x3dw;break}}w\x3dnull;var Yb\x3db.length\x26\x26b[P].url;0!\x3dz.depth\x26\x26Yb\x26\x26(w\x3db[P]);var G\x3dnew rb(z,w);if(G.h){var Zb\x3dG.h.url||\x22\x22;f.g.push(4);f.h[4]\x3dV(\x22top\x22,Zb)}var ta\x3d{url:G.g.url||\x22\x22};if(G.g.url){var ua\x3dG.g.url.match(cb),lb\x3dua[1],mb\x3dua[3],nb\x3dua[4];z\x3d\x22\x22;lb\x26\x26(z+\x3dlb+\x22:\x22);mb\x26\x26(z+\x3d\x22//\x22,z+\x3dmb,nb\x26\x26(z+\x3d\x22:\x22+nb));var ob\x3dz}else ob\x3d\x22\x22;ta\x3d[ta,{url:ob}];f.g.push(5);f.h[5]\x3dta;Jb(this.pinger,e,f,this.i,c)}catch(J){try{Jb(this.pinger,e,{context:\x22ecmserr\x22,rctx:a,msg:Hb(J),url:G\x26\x26G.g.url},this.i,c)}catch(fc){}}return!0}; function Hb(a){var b\x3da.toString();a.name\x26\x26-1\x3d\x3db.indexOf(a.name)\x26\x26(b+\x3d\x22: \x22+a.name);a.message\x26\x26-1\x3d\x3db.indexOf(a.message)\x26\x26(b+\x3d\x22: \x22+a.message);if(a.stack){a\x3da.stack;var c\x3db;try{-1\x3d\x3da.indexOf(c)\x26\x26(a\x3dc+\x22\\n\x22+a);for(var d;a!\x3dd;)d\x3da,a\x3da.replace(RegExp(\x22((https?:/..*/)[^/:]*:\\\\d+(?:.|\\n)*)\\\\2\x22),\x22$1\x22);b\x3da.replace(RegExp(\x22\\n *\x22,\x22g\x22),\x22\\n\x22)}catch(e){b\x3dc}}return b};function Kb(){};function Lb(){this.g\x3dMath.random()}function Mb(){var a\x3dW,b\x3dwindow.google_srt;0\x3c\x3db\x26\x261\x3e\x3db\x26\x26(a.g\x3db)}function Jb(a,b,c,d,e){if(((void 0\x3d\x3d\x3dd?0:d)?a.g:Math.random())\x3c(e||.01))try{if(c instanceof zb)var f\x3dc;else f\x3dnew zb,eb(c,function(h,l){var k\x3df,n\x3dk.j++;h\x3dV(l,h);k.g.push(n);k.h[n]\x3dh});var g\x3dCb(f,\x22/pagead/gen_204?id\x3d\x22+b+\x22\x26\x22);g\x26\x26fb(q,g)}catch(h){}};var W,X,Fb\x3dnew xb;function Nb(){if(!window.google_measure_js_timing){var a\x3dFb;a.g\x3d!1;a.h!\x3da.i.google_js_reporting_queue\x26\x26(U()\x26\x26xa(a.h,yb),a.h.length\x3d0)}}(function(a){W\x3dnull!\x3da?a:new Lb;\x22number\x22!\x3d\x3dtypeof window.google_srt\x26\x26(window.google_srt\x3dMath.random());Mb();X\x3dnew Eb;X.h\x3dfunction(b){var c\x3dgb;0!\x3d\x3dc\x26\x26(b.jc\x3dString(c),c\x3d(c\x3dhb(c))\x26\x26c.getAttribute(\x22data-jc-version\x22)||\x22unknown\x22,b.shv\x3dc)};X.i\x3d!0;\x22complete\x22\x3d\x3dwindow.document.readyState?Nb():Fb.g\x26\x26O(window,\x22load\x22,function(){Nb()})})();function Y(){var a\x3dZ[\x22cnv-url\x22],b\x3dZ[\x22cls-btn-tkn\x22],c\x3dZ[\x22mn-intr-cnv\x22],d\x3dZ[\x22mn-opt-cnv\x22],e\x3dZ[\x22undo-cnv\x22],f\x3dOb,g\x3dPb,h\x3dQb,l\x3dRb,k\x3dSb,n\x3dTb;this.s\x3dthis.u\x3dnull;this.A\x3df;this.m\x3dg;this.o\x3dh;this.N\x3dl;this.j\x3dk;this.g\x3dn;this.h\x3dnull;this.v\x3d!1;this.i\x3dnew ib(a,b);this.O\x3dkb(c);this.D\x3d!1;this.P\x3dkb(d);this.F\x3d!1;this.R\x3dkb(e);this.G\x3d!1;R(this.A,!1);R(this.m,!1);R(this.o,!1);R(this.j,!1);this.g\x26\x26R(this.g,!1);a\x3dthis.m.getElementsByTagName(\x22a\x22);for(b\x3d0;b\x3ca.length;++b)O(a[b],\x22click\x22,u(this.C,this));if(this.g){a\x3dthis.g.getElementsByTagName(\x22a\x22); for(b\x3d0;b\x3ca.length;++b)O(a[b],\x22click\x22,u(this.C,this));(a\x3dQ.getElementById(\x22open-survey\x22))\x26\x26O(a,\x22click\x22,u(this.B,this))}a\x3dthis.N.getElementsByTagName(\x22a\x22);for(b\x3d0;b\x3ca.length;++b)c\x3da[b],c.getAttribute(\x22data-label\x22)\x26\x26c.getAttribute(\x22data-label-instance\x22)\x26\x26O(c,\x22click\x22,Ub(this,c));O(this.j,\x22click\x22,u(this.M,this))} Y.prototype.C\x3dfunction(a){a\x26\x26(a.currentTarget\x26\x26\x221\x22!\x3da.currentTarget.getAttribute(\x22nav\x22)\x26\x26(a.preventDefault?a.preventDefault():a.returnValue\x3d!1),a.stopPropagation?a.stopPropagation():a.cancelBubble\x3d!0)};Y.prototype.M\x3dfunction(a){this.s\x26\x26(this.s(),this.h\x26\x26R(this.h,!0));Vb(this,!1);a.preventDefault?a.preventDefault():a.returnValue\x3d!1;a.stopPropagation?a.stopPropagation():a.cancelBubble\x3d!0}; function Ub(a,b){function c(){Vb(a,!0)}var d\x3du(a.i.g,a.i,jb(b.getAttribute(\x22data-label\x22),b.getAttribute(\x22data-label-instance\x22),!0)),e\x3du(R,null,a.m,!1),f\x3du(R,null,a.o,!0);return function(){d();e();f();setTimeout(c,1500)}} Y.prototype.display\x3dfunction(a,b,c,d){var e\x3dthis;Gb(463,function(){!e.D\x26\x26e.i.g(e.O);e.D\x3d!0;e.h\x3da;e.u\x3dIb(476,b);e.s\x3dIb(477,c);R(e.A,!0);var f\x3dQ.getElementById(\x22ad_position_box\x22);f\x26\x26(f.style.backgroundColor\x3d\x22rgba(0,0,0,0.8)\x22);if(e.g){switch(d){case 1:N(e.g,\x22menu-upper\x22);N(e.g,\x22menu-left\x22);break;case 2:N(e.g,\x22menu-upper\x22);N(e.g,\x22menu-right\x22);break;case 3:N(e.g,\x22menu-lower\x22);N(e.g,\x22menu-left\x22);break;case 4:N(e.g,\x22menu-lower\x22);N(e.g,\x22menu-right\x22);break;default:N(e.g,\x22menu-upper\x22),N(e.g,\x22menu-left\x22)}R(e.g, !0);R(e.j,!0)}else e.B()})};Y.prototype.B\x3dfunction(){this.v\x3d!0;!this.F\x26\x26this.i.g(this.P);this.F\x3d!0;R(this.m,!0);R(this.j,!0);this.g\x26\x26R(this.g,!1);this.h\x26\x26(this.h.style.visibility\x3d\x22hidden\x22)};function Vb(a,b){if(b\x26\x26a.u)a.u();else if(!a.G\x26\x26a.v\x26\x26(a.i.g(a.R),a.G\x3d!0),a.v\x3d!1,R(a.m,!1),R(a.A,!1),R(a.o,!1),R(a.j,!1),a.g\x26\x26R(a.g,!1),a.h){a.h.style.visibility\x3d\x22visible\x22;if(b\x3dQ.getElementById(\x22ad_position_box\x22))b.style.backgroundColor\x3d\x22\x22;R(a.h,!0)}};gb\x3d65;var Wb\x3dhb(65);if(null\x3d\x3dWb)throw Error(\x22JSC not found 65\x22);for(var Z\x3d{},Xb\x3dWb.attributes,$b\x3dXb.length-1;0\x3c\x3d$b;$b--){var ac\x3dXb[$b].name;0\x3d\x3d\x3dac.indexOf(\x22data-jcp-\x22)\x26\x26(Z[ac.substring(9)]\x3dXb[$b].value)}var Ob\x3dQ.getElementById(Z[\x22fdb-id\x22]),Pb\x3dQ.getElementById(Z[\x22srv-id\x22]),Qb\x3dQ.getElementById(Z[\x22cnf-id\x22]),Rb\x3dQ.getElementById(Z[\x22btns-id\x22]),Sb\x3dQ.getElementById(Z[\x22bckg-id\x22]);Q.getElementById(Z[\x22adset-id\x22]);var Tb\x3dQ.getElementById(Z[\x22menu-id\x22]); if(Ob\x26\x26Pb\x26\x26Qb\x26\x26Rb\x26\x26Sb)window.goog_vignette_survey\x3dnew Y;else{var bc\x3d{context:\x22mta_missingels\x22},cc,dc\x3d\x22J\x22;if(!Kb.J||!Kb.hasOwnProperty(dc)){var ec\x3dnew Kb;Kb.J\x3dec}cc\x3d[];!bc.eid\x26\x26cc.length\x26\x26(bc.eid\x3dcc.toString());Jb(W,\x22iaf::mta::init\x22,bc,!0)};}).call(this);\x3c/script\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x22105\x22 src\x3d\x22https://tpc.googlesyndication.com/pagead/js/r20240207/r20110914/elements/html/fullscreen_api_adapter.js\x22 data-jc-version\x3d\x22r20240207\x22 data-jcp-config\x3d\x22[2,\x26quot;ad_iframe\x26quot;,1,null,2,null,\x26quot;CITcmpLToYQDFU4NBgAdIFcJrA\x26quot;]\x22\x3e\x3c/script\x3e\x3cscript data-jc\x3d\x2224\x22 src\x3d\x22https://tpc.googlesyndication.com/pagead/js/r20240207/r20110914/elements/html/interstitial_ad_frame.js\x22 data-jc-version\x3d\x22r20240207\x22 data-jcp-config\x3d\x22[null,null,\x26quot;CITcmpLToYQDFU4NBgAdIFcJrA\x26quot;,null,2,\x26quot;dismiss-button\x26quot;,\x26quot;Close ad\x26quot;,\x26quot;report-button\x26quot;,null,null,1,8,0.1000000014901161,null,null,null,null,null,null,null,null,null,null,null,1]\x22\x3e\x3c/script\x3e\x3c/body\x3e\x3c/html\x3e',reactiveConfig:{"adClient":"ca-pub-8734597309145297","adFormat":8,"adKey":1812271808,"adWidth":1280,"adHeight":887,"fillMessage":[{"key":"stop_word","value":"ad choices;adchoices;advertise;cart;checkout;conditions;contact;copyright;desktop;disclaimer;faq;help;log in;log off;log on;log out;login;logoff;logon;logout;member;menu;policy;privacy;register;registration;setting;sign in;sign out;sign up;signin;signout;signup;site map;terms;top;install"},{"key":"qid","value":"CITcmpLToYQDFU4NBgAdIFcJrA"},{"key":"numMessages","value":"2"}],"capIntervalMinutes":10,"triggers":[]},trafficSource:2});</script><script>window.sra_later_blocks.push({creative:'\x3c!DOCTYPE html\x3e\x3chtml lang\x3den\x3e\x3chead\x3e\x3cmeta charset\x3d\x22UTF-8\x22\x3e\x3cscript\x3evar jscVersion \x3d \x27r20240207\x27;\x3c/script\x3e\x3cscript\x3evar google_casm\x3d[];\x3c/script\x3e\x3cstyle\x3eHTML,BODY{height:100%;width:100%;margin:0;padding:0;overflow:hidden;}#mys-wrapper{height:100%;width:100%;overflow:hidden;position:absolute;top:0;left:0;align-items:center;display:flex;justify-content:center;line-height:normal;}#mys-overlay{height:100%;width:100%;overflow:hidden;position:absolute;top:0;left:0;box-sizing:border-box;pointer-events:none;z-index:1;border:1px solid #E5E5E5;}.mys-wrapper A,.mys-wrapper A:visited,.mys-wrapper A:hover,.mys-wrapper A:active{color:inherit;cursor:pointer;text-decoration:inherit;}[dir\x3drtl] .flip-on-rtl{transform:scale(-1,1);transform-origin:center;}#mys-content{flex-shrink:0;position:relative;overflow:hidden;z-index:0;}\x3c/style\x3e\x3cstyle data-nl\x3d\x22bannerAThrone\x22 data-ns\x3d\x22ns-1akrk\x22 x-phase\x3d\x22assemble\x22\x3e.ns-1akrk-l-bannerAThrone{opacity:.01;position:absolute;top:0;left:0;display:block;width:1005px;height:124px;}.ns-1akrk-e-0{flex-shrink:0;box-sizing:border-box;width:100%;height:100%;font-family:Roboto,Arial,sans-serif;align-items:center;display:flex;flex-direction:row;overflow:hidden;border:none;}.ns-1akrk-e-1{box-sizing:border-box;flex-shrink:0;width:1005px;height:124px;}.ns-1akrk-e-2{box-sizing:border-box;flex-shrink:0;position:relative;left:-1005px;top:0;width:100%;height:100%;overflow:hidden;}.ns-1akrk-e-3{box-sizing:border-box;flex-shrink:0;position:absolute;left:0;top:0;width:100%;height:100%;}.ns-1akrk-e-4{box-sizing:border-box;flex-shrink:0;flex-direction:row;overflow-y:hidden;position:relative;top:0;left:-200%;width:100%;height:100%;display:flex;align-items:center;}.ns-1akrk-e-5{display:block;max-height:100%;max-width:100%;height:100%;}.ns-1akrk-e-6{flex-shrink:0;flex-grow:0;height:100%;}.ns-1akrk-e-7{box-sizing:border-box;flex-shrink:0;display:flex;align-items:center;flex-direction:row;width:30%;flex-grow:1;height:80%;}.ns-1akrk-e-8,.ns-1akrk-e-11,.ns-1akrk-e-17{box-sizing:border-box;flex-shrink:0;min-width:14.88px;}.ns-1akrk-e-9,.ns-1akrk-e-19{display:block;max-height:100%;max-width:100%;}.ns-1akrk-e-10{display:block;flex-shrink:0;flex-grow:0;height:66.96px;max-height:330px;max-width:80.6px;}.ns-1akrk-e-12{box-sizing:border-box;flex-shrink:0;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:50%;height:100%;flex-grow:1;}.ns-1akrk-e-13,.ns-1akrk-e-16{box-sizing:border-box;flex-shrink:0;width:1px;height:7.44px;}.ns-1akrk-e-14{box-sizing:border-box;flex-shrink:0;font-family:;font-weight:700;margin:2.48px 20.1px 2.48px 0;line-height:1.2em;}.ns-1akrk-e-18{box-sizing:border-box;display:flex;flex-direction:row;height:100%;align-items:center;flex-shrink:0;}.ns-1akrk-e-20{box-sizing:border-box;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 2px;height:49.6px;width:180.9px;}.ns-1akrk-e-21{box-sizing:border-box;flex-shrink:0;line-height:2;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize;white-space:nowrap;max-width:100%;}.ns-1akrk-e-22{display:inline;}.ns-1akrk-e-23{box-sizing:border-box;flex-shrink:0;min-width:27.28px;}.ns-1akrk-e-24{box-sizing:border-box;width:15.08px;height:1px;flex-shrink:0;}.ns-1akrk-v-0 .ns-1akrk-e-0{font-size:21px;}.ns-1akrk-v-0 .ns-1akrk-e-14{font-size:32px;}\x3c/style\x3e\x3cstyle data-nl\x3d\x22bannerAThrone\x22 data-ns\x3d\x22ns-1akrk\x22 x-phase\x3d\x22decorate\x22\x3e.ns-1akrk-l-bannerAThrone{opacity:1;position:relative;} @keyframes slide-down{from{transform:translateY(-100%);filter:opacity(0%);}to{transform:translateY(0%);filter:opacity(100%);}} @keyframes bounce{from{transform:translateY(-100%);filter:opacity(0%);}to{transform:translateY(0%);filter:opacity(100%);}} @keyframes slide-in{from{transform:translateX(-100%);filter:opacity(0%);}to{transform:translateX(0%);filter:opacity(100%);}} @keyframes slide-in-right{from{transform:translateX(100%);filter:opacity(0%);}to{transform:translateX(0%);filter:opacity(100%);}} @keyframes fadein{from{filter:opacity(0%) blur(10px);}to{filter:opacity(100%) blur(0px);}} @keyframes flash{from{transform-origin:\x2250% 50%\x22;transform:scale(2);filter:opacity(0%);}to{transform:scale(1);filter:opacity(100%);}}@keyframes fadein_keyframes{0%{opacity:0;}100%{opacity:1;}}.ns-1akrk-e-0{background-color:white;}.ns-1akrk-e-1{background-image:url(https://tpc.googlesyndication.com/simgad/17189850759526815264/6592766407814317453);background-repeat:no-repeat;background-size:contain;background-position:1px center;}.ns-1akrk-e-2{pointer-events:none;}.ns-1akrk-e-3{background-image:linear-gradient(to right,\n                rgba(248,248,247,0) 28.57%,\n                rgba(248,248,247,1) 37.48%,\n                rgba(248,248,247,1));}.ns-1akrk-e-7{background-color:#fff;border-radius:4px;opacity:0.9;}.ns-1akrk-e-10{background-image:url(https://tpc.googlesyndication.com/simgad/7316726170646600449/14763004658117789537?w\x3d100\x26h\x3d100\x26tw\x3d1\x26q\x3d75);background-repeat:no-repeat;animation:fadein_keyframes .9s both;background-size:cover;background-color:#fff;background-position:center;}.ns-1akrk-e-14{font-family:\x22Roboto\x22,Roboto,Arial,sans-serif;}.ns-1akrk-e-15{background-image:linear-gradient(0deg,#fff 0%,transparent 0%);white-space:nowrap;}.ns-1akrk-e-20{background-color:rgba(202,160,69,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.25);border-radius:1005px;}.ns-1akrk-e-21{color:rgba(255,255,255,1);overflow:visible;font-family:\x22Roboto\x22,Roboto,Arial,sans-serif;}.ns-1akrk-e-22{white-space:nowrap;}\x3c/style\x3e\x3clink as\x3d\x22style\x22 data-reload-stylesheet\x3d\x22true\x22 href\x3d\x22https://fonts.googleapis.com/css?family\x3dRoboto%3A400%2C700\x22 rel\x3d\x22preload\x22\x3e\x3cscript\x3e\x3c/script\x3e\x3cscript data-jc\x3d\x2255\x22 data-jc-version\x3d\x22r20240207\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var g\x3dthis||self;var h,k;a:{for(var l\x3d[\x22CLOSURE_FLAGS\x22],m\x3dg,p\x3d0;p\x3cl.length;p++)if(m\x3dm[l[p]],null\x3d\x3dm){k\x3dnull;break a}k\x3dm}var q\x3dk\x26\x26k[610401301];h\x3dnull!\x3dq?q:!1;var r,t\x3dg.navigator;r\x3dt?t.userAgentData||null:null;function u(a){return h?r?r.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function v(a){var b;a:{if(b\x3dg.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function w(){return h?!!r\x26\x260\x3cr.brands.length:!1}function x(){return w()?u(\x22Chromium\x22):(v(\x22Chrome\x22)||v(\x22CriOS\x22))\x26\x26!(w()?0:v(\x22Edge\x22))||v(\x22Silk\x22)};var y\x3dArray.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c\x3da.length,d\x3d\x22string\x22\x3d\x3d\x3dtypeof a?a.split(\x22\x22):a,f\x3d0;f\x3cc;f++)f in d\x26\x26b.call(void 0,d[f],f,a)};!v(\x22Android\x22)||x();x();v(\x22Safari\x22)\x26\x26(x()||(w()?0:v(\x22Coast\x22))||(w()?0:v(\x22Opera\x22))||(w()?0:v(\x22Edge\x22))||(w()?u(\x22Microsoft Edge\x22):v(\x22Edg/\x22))||w()\x26\x26u(\x22Opera\x22));Object.freeze(new function(){});Object.freeze(new function(){});function z(a){this.g\x3da}z.prototype.toString\x3dfunction(){return this.g.toString()};var A;try{new URL(\x22s://g\x22),A\x3d!0}catch(a){A\x3d!1}var B\x3dA,C\x3d{},D\x3dnew z(\x22about:invalid#zClosurez\x22,C);function E(a,b,c){if(Array.isArray(b))for(var d\x3d0;d\x3cb.length;d++)E(a,String(b[d]),c);else null!\x3db\x26\x26c.push(a+(\x22\x22\x3d\x3d\x3db?\x22\x22:\x22\x3d\x22+encodeURIComponent(String(b))))};/*  SPDX-License-Identifier: Apache-2.0 */ function F(a){this.j\x3da}function G(a){return new F(function(b){return b.substr(0,a.length+1).toLowerCase()\x3d\x3d\x3da+\x22:\x22})}var H\x3dnew F(function(a){return/^[^:]*([/?#]|$)/.test(a)}),I\x3dG(\x22http\x22),J\x3dG(\x22https\x22),K\x3dG(\x22ftp\x22),L\x3dG(\x22mailto\x22),M\x3d[G(\x22data\x22),I,J,L,K,H];function N(a,b,c,d,f){if(f)c\x3da+(\x22\x26\x22+b+\x22\x3d\x22+c);else{var n\x3d\x22\x26\x22+b+\x22\x3d\x22,e\x3da.indexOf(n);0\x3ee?c\x3da+n+c:(e+\x3dn.length,n\x3da.indexOf(\x22\x26\x22,e),c\x3d0\x3c\x3dn?a.substring(0,e)+c+a.substring(n):a.substring(0,e)+c)}return 6E4\x3cc.length?void 0!\x3d\x3dd?N(a,b,d,void 0,f):a:c};var O\x3dwindow;var P\x3d[I,J,L,K,H,G(\x22market\x22),G(\x22itms\x22),G(\x22intent\x22),G(\x22itms-appss\x22)]; function Q(){var a\x3d(aa()?\x22http:\x22:\x22https:\x22)+\x22//pagead2.googlesyndication.com/pagead/gen_204\x22;return function(b){b\x3d{id:\x22unsafeurl\x22,ctx:600,url:b};var c\x3d[];for(d in b)E(d,b[d],c);var d\x3dc.join(\x22\x26\x22);if(d){b\x3da.indexOf(\x22#\x22);0\x3eb\x26\x26(b\x3da.length);c\x3da.indexOf(\x22?\x22);if(0\x3ec||c\x3eb){c\x3db;var f\x3d\x22\x22}else f\x3da.substring(c+1,b);b\x3d[a.slice(0,c),f,a.slice(b)];c\x3db[1];b[1]\x3dd?c?c+\x22\x26\x22+d:d:c;d\x3db[0]+(b[1]?\x22?\x22+b[1]:\x22\x22)+b[2]}else d\x3da;navigator.sendBeacon\x26\x26navigator.sendBeacon(d,\x22\x22)}};function aa(){var a\x3dvoid 0\x3d\x3d\x3da?O:a;return\x22http:\x22\x3d\x3d\x3da.location.protocol};var R\x3dnull;function S(){var a\x3dvoid 0\x3d\x3d\x3da?g:a;return(a\x3da.performance)\x26\x26a.now\x26\x26a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function T(){var a\x3dvoid 0\x3d\x3d\x3da?g:a;return(a\x3da.performance)\x26\x26a.now?a.now():null};function ba(a,b){var c\x3dT()||S();this.label\x3da;this.type\x3db;this.value\x3dc;this.duration\x3d0;this.taskId\x3dthis.slotId\x3dvoid 0;this.uniqueId\x3dMath.random()};var U\x3dg.performance,ca\x3d!!(U\x26\x26U.mark\x26\x26U.measure\x26\x26U.clearMarks),V\x3dfunction(a){var b\x3d!1,c;return function(){b||(c\x3da(),b\x3d!0);return c}}(function(){var a;if(a\x3dca){var b;if(null\x3d\x3d\x3dR){R\x3d\x22\x22;try{a\x3d\x22\x22;try{a\x3dg.top.location.hash}catch(c){a\x3dg.location.hash}a\x26\x26(R\x3d(b\x3da.match(/\\bdeid\x3d([\\d,]+)/))?b[1]:\x22\x22)}catch(c){}}b\x3dR;a\x3d!!b.indexOf\x26\x260\x3c\x3db.indexOf(\x221337\x22)}return a}); function W(){var a\x3dwindow;this.g\x3d[];this.i\x3da||g;var b\x3dnull;a\x26\x26(a.google_js_reporting_queue\x3da.google_js_reporting_queue||[],this.g\x3da.google_js_reporting_queue,b\x3da.google_measure_js_timing);this.h\x3dV()||(null!\x3db?b:1\x3eMath.random())}function da(a){a\x26\x26U\x26\x26V()\x26\x26(U.clearMarks(\x22goog_\x22+a.label+\x22_\x22+a.uniqueId+\x22_start\x22),U.clearMarks(\x22goog_\x22+a.label+\x22_\x22+a.uniqueId+\x22_end\x22))}W.prototype.start\x3dfunction(a,b){if(!this.h)return null;a\x3dnew ba(a,b);b\x3d\x22goog_\x22+a.label+\x22_\x22+a.uniqueId+\x22_start\x22;U\x26\x26V()\x26\x26U.mark(b);return a}; W.prototype.end\x3dfunction(a){if(this.h\x26\x26\x22number\x22\x3d\x3d\x3dtypeof a.value){a.duration\x3d(T()||S())-a.value;var b\x3d\x22goog_\x22+a.label+\x22_\x22+a.uniqueId+\x22_end\x22;U\x26\x26V()\x26\x26U.mark(b);!this.h||2048\x3cthis.g.length||this.g.push(a)}};var X\x3dnew W;function Y(){window.google_measure_js_timing||(X.h\x3d!1,X.g!\x3dX.i.google_js_reporting_queue\x26\x26(V()\x26\x26y(X.g,da),X.g.length\x3d0))}\x22number\x22!\x3d\x3dtypeof window.google_srt\x26\x26(window.google_srt\x3dMath.random());if(\x22complete\x22\x3d\x3dwindow.document.readyState)Y();else if(X.h){var ea\x3dfunction(){Y()},Z\x3dwindow;Z.addEventListener\x26\x26Z.addEventListener.call(Z,\x22load\x22,ea,!1)};window.bgz\x3dfunction(a){if(a\x3ddocument.getElementById(a)){var b\x3dN(a.href,\x22bg\x22,\x2210\x22);var c\x3dQ();if(!(b instanceof z)){var d\x3dP;d\x3dvoid 0\x3d\x3d\x3dd?M:d;b:if(d\x3dvoid 0\x3d\x3d\x3dd?M:d,b instanceof z)d\x3db;else{for(var f\x3d0;f\x3cd.length;++f){var n\x3dd[f];if(n instanceof F\x26\x26n.j(b)){d\x3dnew z(b,C);break b}}d\x3dvoid 0}d\x3dd||D;d\x3d\x3d\x3dD\x26\x26c(b);b\x3dd}if(b instanceof z)var e\x3db;else if(b instanceof z)e\x3db;else{b\x3dString(b);b:if(c\x3db,B){try{e\x3dnew URL(c)}catch(fa){e\x3d\x22https:\x22;break b}e\x3de.protocol}else c:{e\x3ddocument.createElement(\x22a\x22);try{e.href\x3dc}catch(fa){e\x3d void 0;break c}e\x3de.protocol;e\x3d\x22:\x22\x3d\x3d\x3de||\x22\x22\x3d\x3d\x3de?\x22https:\x22:e}\x22javascript:\x22\x3d\x3d\x3de\x26\x26(b\x3d\x22about:invalid#zClosurez\x22);e\x3dnew z(b,C)}a.href\x3de instanceof z\x26\x26e.constructor\x3d\x3d\x3dz?e.g:\x22type_error:SafeUrl\x22}};}).call(this);\x3c/script\x3e\x3cscript data-jc\x3d\x2253\x22 data-jc-version\x3d\x22r20240207\x22\x3e(function(){function aa(a){var b\x3d0;return function(){return b\x3ca.length?{done:!1,value:a[b++]}:{done:!0}}}var ba\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dc.value;return a}; function ca(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var c\x3da[b];if(c\x26\x26c.Math\x3d\x3dMath)return c}throw Error(\x22Cannot find global object\x22);}var da\x3dca(this);function l(a,b){if(b)a:{var c\x3dda;a\x3da.split(\x22.\x22);for(var d\x3d0;d\x3ca.length-1;d++){var e\x3da[d];if(!(e in c))break a;c\x3dc[e]}a\x3da[a.length-1];d\x3dc[a];b\x3db(d);b!\x3dd\x26\x26null!\x3db\x26\x26ba(c,a,{configurable:!0,writable:!0,value:b})}} function ea(a){var b\x3d\x22undefined\x22!\x3dtypeof Symbol\x26\x26Symbol.iterator\x26\x26a[Symbol.iterator];if(b)return b.call(a);if(\x22number\x22\x3d\x3dtypeof a.length)return{next:aa(a)};throw Error(String(a)+\x22 is not an iterable or ArrayLike\x22);}var fa\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},p; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)p\x3dObject.setPrototypeOf;else{var u;a:{var ha\x3d{a:!0},ia\x3d{};try{ia.__proto__\x3dha;u\x3dia.a;break a}catch(a){}u\x3d!1}p\x3du?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var ja\x3dp; function w(a,b){a.prototype\x3dfa(b.prototype);a.prototype.constructor\x3da;if(ja)ja(a,b);else for(var c in b)if(\x22prototype\x22!\x3dc)if(Object.defineProperties){var d\x3dObject.getOwnPropertyDescriptor(b,c);d\x26\x26Object.defineProperty(a,c,d)}else a[c]\x3db[c];a.S\x3db.prototype}var ka\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var c\x3d1;c\x3carguments.length;c++){var d\x3darguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)\x26\x26(a[e]\x3dd[e])}return a}; l(\x22Object.assign\x22,function(a){return a||ka});l(\x22Number.isFinite\x22,function(a){return a?a:function(b){return\x22number\x22!\x3d\x3dtypeof b?!1:!isNaN(b)\x26\x26Infinity!\x3d\x3db\x26\x26-Infinity!\x3d\x3db}});l(\x22Object.is\x22,function(a){return a?a:function(b,c){return b\x3d\x3d\x3dc?0!\x3d\x3db||1/b\x3d\x3d\x3d1/c:b!\x3d\x3db\x26\x26c!\x3d\x3dc}});l(\x22Array.prototype.includes\x22,function(a){return a?a:function(b,c){var d\x3dthis;d instanceof String\x26\x26(d\x3dString(d));var e\x3dd.length;c\x3dc||0;for(0\x3ec\x26\x26(c\x3dMath.max(c+e,0));c\x3ce;c++){var f\x3dd[c];if(f\x3d\x3d\x3db||Object.is(f,b))return!0}return!1}}); l(\x22String.prototype.includes\x22,function(a){return a?a:function(b,c){if(null\x3d\x3dthis)throw new TypeError(\x22The \x27this\x27 value for String.prototype.includes must not be null or undefined\x22);if(b instanceof RegExp)throw new TypeError(\x22First argument to String.prototype.includes must not be a regular expression\x22);return-1!\x3d\x3dthis.indexOf(b,c||0)}});/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var x\x3dthis||self;function la(a,b){a:{var c\x3d[\x22CLOSURE_FLAGS\x22];for(var d\x3dx,e\x3d0;e\x3cc.length;e++)if(d\x3dd[c[e]],null\x3d\x3dd){c\x3dnull;break a}c\x3dd}a\x3dc\x26\x26c[a];return null!\x3da?a:b}function ma(a,b){function c(){}c.prototype\x3db.prototype;a.S\x3db.prototype;a.prototype\x3dnew c;a.prototype.constructor\x3da;a.Xa\x3dfunction(d,e,f){for(var h\x3dArray(arguments.length-2),g\x3d2;g\x3carguments.length;g++)h[g-2]\x3darguments[g];return b.prototype[e].apply(d,h)}};function na(){};function y(a,b){this.type\x3da;this.g\x3dthis.target\x3db;this.defaultPrevented\x3d!1};var z\x3dArray.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(\x22string\x22\x3d\x3d\x3dtypeof a)return\x22string\x22!\x3d\x3dtypeof b||1!\x3db.length?-1:a.indexOf(b,0);for(var c\x3d0;c\x3ca.length;c++)if(c in a\x26\x26a[c]\x3d\x3d\x3db)return c;return-1},pa\x3dArray.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c\x3da.length,d\x3d\x22string\x22\x3d\x3d\x3dtypeof a?a.split(\x22\x22):a,e\x3d0;e\x3cc;e++)e in d\x26\x26b.call(void 0,d[e],e,a)};var qa\x3dla(610401301,!1),A\x3dla(572417392,!0);var B,ra\x3dx.navigator;B\x3dra?ra.userAgentData||null:null;function sa(a){return qa?B?B.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function C(a){var b;a:{if(b\x3dx.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function D(){return qa?!!B\x26\x260\x3cB.brands.length:!1}function ta(){return D()?sa(\x22Chromium\x22):(C(\x22Chrome\x22)||C(\x22CriOS\x22))\x26\x26!(D()?0:C(\x22Edge\x22))||C(\x22Silk\x22)};var ua\x3dD()?!1:C(\x22Trident\x22)||C(\x22MSIE\x22);var va\x3d\x22closure_listenable_\x22+(1E6*Math.random()|0);var wa\x3d0;function xa(a,b,c,d,e){this.listener\x3da;this.proxy\x3dnull;this.src\x3db;this.type\x3dc;this.capture\x3d!!d;this.s\x3de;this.key\x3d++wa;this.m\x3dthis.o\x3d!1}function ya(a){a.m\x3d!0;a.listener\x3dnull;a.proxy\x3dnull;a.src\x3dnull;a.s\x3dnull};var za\x3d\x22constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf\x22.split(\x22 \x22);function Aa(a,b){for(var c,d,e\x3d1;e\x3carguments.length;e++){d\x3darguments[e];for(c in d)a[c]\x3dd[c];for(var f\x3d0;f\x3cza.length;f++)c\x3dza[f],Object.prototype.hasOwnProperty.call(d,c)\x26\x26(a[c]\x3dd[c])}};function Ba(a){this.src\x3da;this.g\x3d{};this.h\x3d0}Ba.prototype.add\x3dfunction(a,b,c,d,e){var f\x3da.toString();a\x3dthis.g[f];a||(a\x3dthis.g[f]\x3d[],this.h++);var h\x3dCa(a,b,d,e);-1\x3ch?(b\x3da[h],c||(b.o\x3d!1)):(b\x3dnew xa(b,this.src,f,!!d,e),b.o\x3dc,a.push(b));return b};function Da(a,b){var c\x3db.type;if(c in a.g){var d\x3da.g[c],e\x3dz(d,b),f;(f\x3d0\x3c\x3de)\x26\x26Array.prototype.splice.call(d,e,1);f\x26\x26(ya(b),0\x3d\x3da.g[c].length\x26\x26(delete a.g[c],a.h--))}} function Ca(a,b,c,d){for(var e\x3d0;e\x3ca.length;++e){var f\x3da[e];if(!f.m\x26\x26f.listener\x3d\x3db\x26\x26f.capture\x3d\x3d!!c\x26\x26f.s\x3d\x3dd)return e}return-1};var Ea\x3d\x22closure_lm_\x22+(1E6*Math.random()|0),Fa\x3d{},Ga\x3d0; function Ha(a,b,c,d,e){if(Array.isArray(b))for(var f\x3d0;f\x3cb.length;f++)Ha(a,b[f],c,d,e);else(f\x3dtypeof d,d\x3d\x22object\x22\x3d\x3df\x26\x26null!\x3dd||\x22function\x22\x3d\x3df?!!d.capture:!!d,c\x3dIa(c),a\x26\x26a[va])?(a\x3da.g,b\x3dString(b).toString(),b in a.g\x26\x26(f\x3da.g[b],c\x3dCa(f,c,d,e),-1\x3cc\x26\x26(ya(f[c]),Array.prototype.splice.call(f,c,1),0\x3d\x3df.length\x26\x26(delete a.g[b],a.h--)))):a\x26\x26(a\x3dJa(a))\x26\x26(b\x3da.g[b.toString()],a\x3d-1,b\x26\x26(a\x3dCa(b,c,d,e)),(c\x3d-1\x3ca?b[a]:null)\x26\x26\x22number\x22!\x3d\x3dtypeof c\x26\x26c\x26\x26!c.m\x26\x26((e\x3dc.src)\x26\x26e[va]?Da(e.g,c):(d\x3dc.type,b\x3dc.proxy,e.removeEventListener? e.removeEventListener(d,b,c.capture):e.detachEvent?e.detachEvent(d in Fa?Fa[d]:Fa[d]\x3d\x22on\x22+d,b):e.addListener\x26\x26e.removeListener\x26\x26e.removeListener(b),Ga--,(d\x3dJa(e))?(Da(d,c),0\x3d\x3dd.h\x26\x26(d.src\x3dnull,e[Ea]\x3dnull)):ya(c))))}function Ja(a){a\x3da[Ea];return a instanceof Ba?a:null}var Ka\x3d\x22__closure_events_fn_\x22+(1E9*Math.random()\x3e\x3e\x3e0);function Ia(a){if(\x22function\x22\x3d\x3d\x3dtypeof a)return a;a[Ka]||(a[Ka]\x3dfunction(b){return a.handleEvent(b)});return a[Ka]};function E(){this.g\x3dnew Ba(this);this.R\x3dthis}ma(E,na);E.prototype[va]\x3d!0;E.prototype.removeEventListener\x3dfunction(a,b,c,d){Ha(this,a,b,c,d)};function F(a,b){a\x3da.R;var c\x3db.type||b;if(\x22string\x22\x3d\x3d\x3dtypeof b)b\x3dnew y(b,a);else if(b instanceof y)b.target\x3db.target||a;else{var d\x3db;b\x3dnew y(c,a);Aa(b,d)}a\x3db.g\x3da;La(a,c,!0,b);La(a,c,!1,b)}function Ma(a,b){a.g.add(\x22became-visible\x22,b,!1,void 0,void 0)}function Na(a,b){a.g.add(\x22monitoring-failed\x22,b,!0,void 0,void 0)} function La(a,b,c,d){if(b\x3da.g.g[String(b)]){b\x3db.concat();for(var e\x3d!0,f\x3d0;f\x3cb.length;++f){var h\x3db[f];if(h\x26\x26!h.m\x26\x26h.capture\x3d\x3dc){var g\x3dh.listener,k\x3dh.s||h.src;h.o\x26\x26Da(a.g,h);e\x3d!1!\x3d\x3dg.call(k,d)\x26\x26e}}}};function Oa(){E.call(this);this.B\x3d!1}w(Oa,E);function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-inter-de-queretaro-1949373" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">1 - 1</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>03/09</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/cds-tampico-madero">CDS Tampico Madero</a></div><a href="/en/predictions-tips-cds-tampico-madero-inter-de-queretaro-1949356" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">2 - 0</span>
<span class="st_htscr">(6 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>27/08</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/montaneses">Montaneses</a></div><a href="/en/predictions-tips-montaneses-inter-de-queretaro-1949342" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">2 - 1</span>
<span class="st_htscr">(1 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>20/08</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-escorpiones-1949321" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">1 - 1</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/escorpiones">Escorpiones</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>13/08</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/cafetaleros-tapachula">Cafetaleros Tapachula</a></div><a href="/en/predictions-tips-cafetaleros-tapachula-inter-de-queretaro-1949301" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">3 - 1</span>
<span class="st_htscr">(2 - 1)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div>
<div class="st_ltag">Mx3</div>
</div></div></div>
<div class="st_dstc"><div class="st_perc_dist">
<div class="winres" style="width:0%"></div>
<div class="drawres" style="width:0%"></div>
<div class="loseres" style="width:100%"></div>
</div></div>
<div class="st_row_perc">
<div class="st_perc_stat winres"><div><span>Win</span> <span>0</span></div><div>0%</div><div></div></div>
<div class="st_perc_stat drawres"><div><span>Draw</span> <span>0</span></div><div>0%</div><div></div></div>
<div class="st_perc_stat loseres"><div><span>Lost</span> <span>6</span></div><div>100%</div><div></div></div>
</div><div class="st_rowmore st_0"><span class="exp_blc st_exp st_opn" onclick="slToggle(&quot;.hidd_stat&quot;,0,675,0,this,1)">View all</span></div><div class="st_arrdt" style="display:none;">{"lg_-1":[1,2,18,21],"lg_-1_6":[0,0,6,6],"lg_375":[1,2,18,21],"lg_375_6":[null,null,6,6]}</div> </div>
</td>
<td class="floatLeft statWidth" style="padding-left:4px;">
<div class="moduletable">
<div class="st_scrblock"><div class="tbl_head st_lgs">
<div>
<ul class="tabs-ul">
<li class="ov_tablinks lg_-1 ov_active" onclick="ov_tab(this,-1)"><button>All</button></li></ul></div></div><div class="st_rmain"><div class="st_row st_0 stlg_375">
<div class="st_date"><div>04/02</div><div>2024</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-aguacateros-de-peribán-1949661" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">0 - 2</span>
<span class="st_htscr">(0 - 1)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/aguacateros-de-periban">Aguacateros de Peribán</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>27/01</div><div>2024</div></div>
<div class="st_hteam"><a href="/en/teams/petroleros-de-salamanca,Petroleros%20Salamanca">Petroleros de Salamanca</a></div><a href="/en/predictions-tips-petroleros-de-salamanca-lobos-ulmx-1949636" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">1 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>21/01</div><div>2024</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-cd-irapuato-1949625" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">0 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/cd-irapuato">CD Irapuato</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>13/01</div><div>2024</div></div>
<div class="st_hteam"><a href="/en/teams/deportiva-venados">Deportiva Venados</a></div><a href="/en/predictions-tips-deportiva-venados-lobos-ulmx-1949603" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">0 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>26/11</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/sporting-canamy">Sporting Canamy</a></div><a href="/en/predictions-tips-sporting-canamy-lobos-ulmx-1949591" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">3 - 0</span>
<span class="st_htscr">(2 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>21/11</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-inter-playa-del-carmen-1949577" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">3 - 3</span>
<span class="st_htscr">(0 - 3)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/inter-playa-del-carmen">Inter Playa del Carmen</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="hidd_stat"><div class="st_row st_0 stlg_375">
<div class="st_date"><div>11/11</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/pioneros-de-cancun">Pioneros de Cancún</a></div><a href="/en/predictions-tips-pioneros-de-cancún-lobos-ulmx-1949549" class="stat_link"><div class="st_rescnt winres">
<span class="st_res lscrsp">1 - 2</span>
<span class="st_htscr">(0 - 1)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>05/11</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-yalmakan-1949538" class="stat_link"><div class="st_rescnt winres">
<span class="st_res lscrsp">4 - 1</span>
<span class="st_htscr">(2 - 0)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/Yalmakan">Yalmakan</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>29/10</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/cd-zap">CD Zap</a></div><a href="/en/predictions-tips-cd-zap-lobos-ulmx-1949517" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">3 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>22/10</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-san-juan-de-aragón-1949502" class="stat_link"><div class="st_rescnt winres">
<span class="st_res lscrsp">2 - 0</span>
<span class="st_htscr">(1 - 0)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/san-juan-de-aragon">San Juan de Aragón</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>15/10</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/la-piedad">La Piedad</a></div><a href="/en/predictions-tips-la-piedad-lobos-ulmx-1949483" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">1 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>09/10</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/cds-tampico-madero">CDS Tampico Madero</a></div><a href="/en/predictions-tips-cds-tampico-madero-lobos-ulmx-1949464" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">5 - 1</span>
<span class="st_htscr">(3 - 1)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>06/10</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-montaneses-1949451" class="stat_link"><div class="st_rescnt winres">
<span class="st_res lscrsp">2 - 1</span>
<span class="st_htscr">(1 - 1)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/montaneses">Montaneses</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>01/10</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/escorpiones">Escorpiones</a></div><a href="/en/predictions-tips-escorpiones-lobos-ulmx-1949429" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">2 - 0</span>
<span class="st_htscr">(1 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>24/09</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-cafetaleros-tapachula-1949410" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">0 - 1</span>
<span class="st_htscr">(0 - 1)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/cafetaleros-tapachula">Cafetaleros Tapachula</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>17/09</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/racing-porto-palmeiras">Racing Porto Palmeiras</a></div><a href="/en/predictions-tips-racing-porto-palmeiras-lobos-ulmx-1949395" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">1 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>10/09</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-inter-de-queretaro-1949373" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">1 - 1</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>03/09</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/aguacateros-de-periban">Aguacateros de Peribán</a></div><a href="/en/predictions-tips-aguacateros-de-peribán-lobos-ulmx-1949355" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">4 - 0</span>
<span class="st_htscr">(2 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>27/08</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-petroleros-de-salamanca-1949337" class="stat_link"><div class="st_rescnt winres">
<span class="st_res lscrsp">1 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/petroleros-de-salamanca,Petroleros%20Salamanca">Petroleros de Salamanca</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>20/08</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/cd-irapuato">CD Irapuato</a></div><a href="/en/predictions-tips-cd-irapuato-lobos-ulmx-1949319" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">1 - 1</span>
<span class="st_htscr">(1 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>12/08</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><a href="/en/predictions-tips-lobos-ulmx-deportiva-venados-1949302" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">1 - 1</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/deportiva-venados">Deportiva Venados</a></div>
<div class="st_ltag">Mx3</div>
</div></div></div>
<div class="st_dstc"><div class="st_perc_dist">
<div class="winres" style="width:0%"></div>
<div class="drawres" style="width:50%"></div>
<div class="loseres" style="width:50%"></div>
</div></div>
<div class="st_row_perc">
<div class="st_perc_stat winres"><div><span>Win</span> <span>0</span></div><div>0%</div><div></div></div>
<div class="st_perc_stat drawres"><div><span>Draw</span> <span>3</span></div><div>50%</div><div></div></div>
<div class="st_perc_stat loseres"><div><span>Lost</span> <span>3</span></div><div>50%</div><div></div></div>
</div><div class="st_rowmore st_0"><span class="exp_blc st_exp st_opn" onclick="slToggle(&quot;.hidd_stat&quot;,0,675,0,this,1)">View all</span></div><div class="st_arrdt" style="display:none;">{"lg_-1":[5,6,10,21],"lg_-1_6":[0,3,3,6],"lg_375":[5,6,10,21],"lg_375_6":[null,3,3,6]}</div> </div>
</td>
</tr>
<tr>
<td class="floatLeft statWidth" style="padding-right:4px;">
<div class="moduletable">
<div class="mptlt with_logo">
<div class="st_logo_box">
<div>IDQ</div>
<div class="st_logo_box_img_container"><img src="https://www.forebet.com/images/icons/18175.png"></div>
</div>
<div>home matches</div>
</div> <div class="st_scrblock"><div class="tbl_head st_lgs">
<div>
<ul class="tabs-ul">
<li class="ov_tablinks lg_-1 ov_active" onclick="ov_tab(this,-1)"><button>All</button></li></ul></div></div><div class="st_rmain"><div class="st_row st_0 stlg_375">
<div class="st_date"><div>04/02</div><div>2024</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-cds-tampico-madero-1949664" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">0 - 3</span>
<span class="st_htscr">(0 - 2)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/cds-tampico-madero">CDS Tampico Madero</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>28/01</div><div>2024</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-montaneses-1949644" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">0 - 2</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/montaneses">Montaneses</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>13/01</div><div>2024</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-cafetaleros-tapachula-1949609" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">1 - 4</span>
<span class="st_htscr">(0 - 1)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/cafetaleros-tapachula">Cafetaleros Tapachula</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>25/11</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-racing-porto-palmeiras-1949588" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">0 - 3</span>
<span class="st_htscr">(0 - 1)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/racing-porto-palmeiras">Racing Porto Palmeiras</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>05/11</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-petroleros-de-salamanca-1949534" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">0 - 2</span>
<span class="st_htscr">(0 - 1)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/petroleros-de-salamanca,Petroleros%20Salamanca">Petroleros de Salamanca</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>22/10</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-deportiva-venados-1949498" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">0 - 2</span>
<span class="st_htscr">(0 - 1)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/deportiva-venados">Deportiva Venados</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="hidd_stat"><div class="st_row st_0 stlg_375">
<div class="st_date"><div>08/10</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-inter-playa-del-carmen-1949458" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">0 - 2</span>
<span class="st_htscr">(0 - 1)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/inter-playa-del-carmen">Inter Playa del Carmen</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>17/09</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-san-juan-de-aragón-1949391" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">2 - 4</span>
<span class="st_htscr">(1 - 2)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/san-juan-de-aragon">San Juan de Aragón</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>20/08</div><div>2023</div></div>
<div class="st_hteam active-team"><a href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><a href="/en/predictions-tips-inter-de-queretaro-escorpiones-1949321" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">1 - 1</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam"><a href="/en/teams/escorpiones">Escorpiones</a></div>
<div class="st_ltag">Mx3</div>
</div></div></div>
<div class="st_dstc"><div class="st_perc_dist">
<div class="winres" style="width:0%"></div>
<div class="drawres" style="width:0%"></div>
<div class="loseres" style="width:100%"></div>
</div></div>
<div class="st_row_perc">
<div class="st_perc_stat winres"><div><span>Win</span> <span>0</span></div><div>0%</div><div></div></div>
<div class="st_perc_stat drawres"><div><span>Draw</span> <span>0</span></div><div>0%</div><div></div></div>
<div class="st_perc_stat loseres"><div><span>Lost</span> <span>6</span></div><div>100%</div><div></div></div>
</div><div class="st_rowmore st_0"><span class="exp_blc st_exp st_opn" onclick="slToggle(&quot;.hidd_stat&quot;,0,135,0,this,1)">View all</span></div><div class="st_arrdt" style="display:none;">{"lg_-1":[0,1,8,9],"lg_-1_6":[0,0,6,6],"lg_375":[null,1,8,9],"lg_375_6":[null,null,6,6]}</div> </div>
</td>
<td class="floatLeft statWidth" style="padding-left:4px;">
<div class="moduletable">
<div class="mptlt with_logo--away">
<div>away matches</div>
<div class="st_logo_box st_logo_box--away">
<div class="st_logo_box_img_container"><img src="https://www.forebet.com/images/icons/18177.png"></div>
<div>LOB</div>
</div>
</div>
<div class="st_scrblock"><div class="tbl_head st_lgs">
<div>
<ul class="tabs-ul">
<li class="ov_tablinks lg_-1 ov_active" onclick="ov_tab(this,-1)"><button>All</button></li></ul></div></div><div class="st_rmain"><div class="st_row st_0 stlg_375">
<div class="st_date"><div>27/01</div><div>2024</div></div>
<div class="st_hteam"><a href="/en/teams/petroleros-de-salamanca,Petroleros%20Salamanca">Petroleros de Salamanca</a></div><a href="/en/predictions-tips-petroleros-de-salamanca-lobos-ulmx-1949636" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">1 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>13/01</div><div>2024</div></div>
<div class="st_hteam"><a href="/en/teams/deportiva-venados">Deportiva Venados</a></div><a href="/en/predictions-tips-deportiva-venados-lobos-ulmx-1949603" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">0 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>26/11</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/sporting-canamy">Sporting Canamy</a></div><a href="/en/predictions-tips-sporting-canamy-lobos-ulmx-1949591" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">3 - 0</span>
<span class="st_htscr">(2 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>11/11</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/pioneros-de-cancun">Pioneros de Cancún</a></div><a href="/en/predictions-tips-pioneros-de-cancún-lobos-ulmx-1949549" class="stat_link"><div class="st_rescnt winres">
<span class="st_res lscrsp">1 - 2</span>
<span class="st_htscr">(0 - 1)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>29/10</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/cd-zap">CD Zap</a></div><a href="/en/predictions-tips-cd-zap-lobos-ulmx-1949517" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">3 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>15/10</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/la-piedad">La Piedad</a></div><a href="/en/predictions-tips-la-piedad-lobos-ulmx-1949483" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">1 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="hidd_stat"><div class="st_row st_0 stlg_375">
<div class="st_date"><div>09/10</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/cds-tampico-madero">CDS Tampico Madero</a></div><a href="/en/predictions-tips-cds-tampico-madero-lobos-ulmx-1949464" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">5 - 1</span>
<span class="st_htscr">(3 - 1)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>01/10</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/escorpiones">Escorpiones</a></div><a href="/en/predictions-tips-escorpiones-lobos-ulmx-1949429" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">2 - 0</span>
<span class="st_htscr">(1 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>17/09</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/racing-porto-palmeiras">Racing Porto Palmeiras</a></div><a href="/en/predictions-tips-racing-porto-palmeiras-lobos-ulmx-1949395" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">1 - 0</span>
<span class="st_htscr">(0 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_1 stlg_375">
<div class="st_date"><div>03/09</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/aguacateros-de-periban">Aguacateros de Peribán</a></div><a href="/en/predictions-tips-aguacateros-de-peribán-lobos-ulmx-1949355" class="stat_link"><div class="st_rescnt loseres">
<span class="st_res lscrsp">4 - 0</span>
<span class="st_htscr">(2 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div><div class="st_row st_0 stlg_375">
<div class="st_date"><div>20/08</div><div>2023</div></div>
<div class="st_hteam"><a href="/en/teams/cd-irapuato">CD Irapuato</a></div><a href="/en/predictions-tips-cd-irapuato-lobos-ulmx-1949319" class="stat_link"><div class="st_rescnt drawres">
<span class="st_res lscrsp">1 - 1</span>
<span class="st_htscr">(1 - 0)</span></a>
</div>
<div class="st_ateam active-team"><a href="/en/teams/lobos-ulmx">Lobos ULMX</a></div>
<div class="st_ltag">Mx3</div>
</div></div></div>
<div class="st_dstc"><div class="st_perc_dist">
<div class="winres" style="width:17%"></div>
<div class="drawres" style="width:17%"></div>
<div class="loseres" style="width:67%"></div>
</div></div>
<div class="st_row_perc">
<div class="st_perc_stat winres"><div><span>Win</span> <span>1</span></div><div>17%</div><div></div></div>
<div class="st_perc_stat drawres"><div><span>Draw</span> <span>1</span></div><div>17%</div><div></div></div>
<div class="st_perc_stat loseres"><div><span>Lost</span> <span>4</span></div><div>67%</div><div></div></div>
</div><div class="st_rowmore st_0"><span class="exp_blc st_exp st_opn" onclick="slToggle(&quot;.hidd_stat&quot;,0,225,0,this,1)">View all</span></div><div class="st_arrdt" style="display:none;">{"lg_-1":[1,2,8,11],"lg_-1_6":[1,1,4,6],"lg_375":[1,2,8,11],"lg_375_6":[1,1,4,6]}</div> </div>
</td>
</tr>
<tr>
<td class="floatLeft statWidth" style="padding-right:4px;">
<div class="moduletable"><div class="mptlt">Overall statistics</div></div>
<div class="ov_tab st_lgs ovhidd">
<div class="tbl_head">
<ul class="tabs-ul">
<li class="ov_tablinks ov_active" onclick="ov_tab(this,'ft','h2h','all')"><button>Overall</button></li>
<li class="ov_tablinks" onclick="ov_tab(this,'ha','h2h','all')"><button>Home/Away</button></li>
<li class="ov_tablinks" onclick="ov_tab(this,'ht1','h2h','all')"><button>First half</button></li>
<li class="ov_tablinks" onclick="ov_tab(this,'ht2','h2h','all')"><button>Second half</button></li>
</ul>
</div>
</div>
<div class="ov_tab ov_tcnt">
<div class="ov_team_1">
<div class="ov_centred">
<div>
<img class="ov_logo" src="https://www.forebet.com/images/icons/18175.png" alt />
</div>
<span>Inter de Queretaro</span>
<div class="ov_matches">
<span>Played games: <span class="ov_pl_h">21</span></span>
</div>
</div>
</div>
<div class="ov_team_2">
<div class="ov_centred">
<div>
<img class="ov_logo" src="https://www.forebet.com/images/icons/18177.png" alt />
</div>
<span>Lobos ULMX</span>
<div class="ov_matches">
<span>Played games: <span class="ov_pl_a">21</span></span>
</div>
</div>
</div>
</div>
<section class="ov_main">
<div class="ov_group">
<div class="ov_title">Goals (Scored/Conceded)</div>
<div class="ov_col_1" style="text-align:center;">
<div class="ov_scr_h ov_values">12</div>
<div class="ov_square">
<div class="ov_bar">
<div class="ov_half ov_half-left ov_sq">
<div class="ov_value">0.57</div>
</div>
<div class="ov_half ov_half-right ov_sq">
<div class="ov_value">2.67</div>
</div>
</div>
</div>
<div class="ov_cnd_h ov_values">56</div>
</div>
<div class="ov_col_2" style="text-align:center;">
<div class="ov_scr_a ov_values">18</div>
<div class="ov_square">
<div class="ov_bar">
<div class="ov_half ov_half-left ov_sq">
<div class="ov_value">0.86</div>
</div>
<div class="ov_half ov_half-right ov_sq">
<div class="ov_value">1.52</div>
</div>
</div>
</div>
<div class="ov_cnd_a ov_values">32</div>
</div>
</div>
<div class="ov_subtitle">Under/Over</div>
<div class="ov_group">
<div class="ov_title ov_sub">1.5</div>
<div class="ov_col_1">
<div class="ov_content">
<div class="ov_un1.5_h"></div>
<div class="ov_num">
<span class="ov_left">2</span>
<span class="ov_right">19</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 10%;z-index:2;">
</div>
<div class="ov_half ov_half-right" style="width: 90%;z-index:1;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left">10% </span>
<span class="ov_right"> 90% </span>
</div>
<div class="ov_un1.5_hop"></div>
</div>
</div>
<div class="ov_col_2">
<div class="ov_un1.5_a"></div>
<div class="ov_content">
<div class="ov_num">
<span class="ov_left">7</span>
<span class="ov_right"> 14</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 33%;">
</div>
<div class="ov_half ov_half-right" style="width: 67%;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left"> 33% </span>
<span class="ov_right"> 67% </span>
</div>
<div class="ov_un1.5_aop"></div>
</div>
</div>
</div>
<div class="ov_group">
<div class="ov_title ov_sub">2.5</div>
<div class="ov_col_1">
<div class="ov_content">
<div class="ov_un2.5_h"></div>
<div class="ov_num">
<span class="ov_left">10</span>
<span class="ov_right">11</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 48%;">
</div>
<div class="ov_half ov_half-right" style="width: 52%;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left">48% </span>
<span class="ov_right"> 52% </span>
</div>
<div class="ov_un2.5_hop"></div>
</div>
</div>
<div class="ov_col_2">
<div class="ov_un2.5_a"></div>
<div class="ov_content">
<div class="ov_num">
<span class="ov_left">13</span>
<span class="ov_right"> 8</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 62%;">
</div>
<div class="ov_half ov_half-right" style="width: 38%;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left"> 62% </span>
<span class="ov_right"> 38% </span>
</div>
<div class="ov_un2.5_aop"></div>
</div>
</div>
</div>
<div class="ov_group">
<div class="ov_title ov_sub">3.5</div>
<div class="ov_col_1">
<div class="ov_content">
<div class="ov_un3.5_h"></div>
<div class="ov_num">
<span class="ov_left">15</span>
<span class="ov_right">6</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 71%;">
</div>
<div class="ov_half ov_half-right" style="width: 29%;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left">71% </span>
<span class="ov_right"> 29% </span>
</div>
<div class="ov_un3.5_hop"></div>
</div>
</div>
<div class="ov_col_2">
<div class="ov_un3.5_a"></div>
<div class="ov_content">
<div class="ov_num">
<span class="ov_left">17</span>
<span class="ov_right"> 4</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 81%;">
</div>
<div class="ov_half ov_half-right" style="width: 19%;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left"> 81% </span>
<span class="ov_right"> 19% </span>
</div>
<div class="ov_un3.5_aop"></div>
</div>
</div>
</div>
<div class="ov_group">
<div class="ov_title">Both teams scored games (Yes/No)</div>
<div class="ov_col_1">
<div class="ov_content">
<div class="ov_bts_h"></div>
<div class="ov_num">
<span class="ov_left">9</span>
<span class="ov_right">12</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 43%;">
</div>
<div class="ov_half ov_half-right" style="width: 57%;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left">43% </span>
<span class="ov_right"> 57% </span>
</div>
<div class="ov_bts_hop"></div>
</div>
</div>
<div class="ov_col_2">
<div class="ov_bts_a"></div>
<div class="ov_content">
<div class="ov_num">
<span class="ov_left">8</span>
<span class="ov_right"> 13</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 38%;">
</div>
<div class="ov_half ov_half-right" style="width: 62%;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left"> 38% </span>
<span class="ov_right"> 62% </span>
</div>
<div class="ov_bts_aop"></div>
</div>
</div>
</div>
<div class="ov_group">
<div class="ov_title">Clean sheets (Yes/No)</div>
<div class="ov_col_1">
<div class="ov_content">
<div class="ov_ch_h"></div>
<div class="ov_num">
<span class="ov_left">1</span>
<span class="ov_right">20</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 5%;z-index:2;">
</div>
<div class="ov_half ov_half-right" style="width: 95%;z-index:1;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left">5% </span>
<span class="ov_right"> 95% </span>
</div>
<div class="ov_ch_hop"></div>
</div>
</div>
<div class="ov_col_2">
<div class="ov_ch_a"></div>
<div class="ov_content">
<div class="ov_num">
<span class="ov_left">4</span>
<span class="ov_right"> 17</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 19%;z-index:2;">
</div>
<div class="ov_half ov_half-right" style="width: 81%;z-index:1;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left"> 19% </span>
<span class="ov_right"> 81% </span>
</div>
<div class="ov_ch_aop"></div>
</div>
</div>
</div>
<div class="ov_group">
<div class="ov_title">Scored a goal (Yes/No)</div>
<div class="ov_col_1">
<div class="ov_content">
<div class="ov_sn_h"></div>
<div class="ov_num">
<span class="ov_left">10</span>
<span class="ov_right">11</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 48%;">
</div>
<div class="ov_half ov_half-right" style="width: 52%;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left">48% </span>
<span class="ov_right"> 52% </span>
</div>
<div class="ov_sn_hop"></div>
</div>
</div>
<div class="ov_col_2">
<div class="ov_sn_a"></div>
<div class="ov_content">
<div class="ov_num">
<span class="ov_left">10</span>
<span class="ov_right"> 11</span>
</div>
<div class="ov_bar">
<div class="ov_half ov_half-left" style="width: 48%;">
</div>
<div class="ov_half ov_half-right" style="width: 52%;">
</div>
</div>
<div class="ov_perc">
<span class="ov_left"> 48% </span>
<span class="ov_right"> 52% </span>
</div>
<div class="ov_sn_aop"></div>
</div>
</div>
</div>
</section>
</div>
<script>
function get_ovd(type){
	if(type=="h"){
		return {"ft":{"scr":[12,4,8],"un1.5":[2,0,2],"un2.5":[10,5,5],"un3.5":[15,7,8],"bts":[9,3,6],"cnd":[56,23,33],"ch":[1,0,1],"sn":[10,3,7],"pl":[21,9,12]},"ht1":{"scr":[3,1,2],"un1.5":[12,7,5],"un2.5":[15,8,7],"un3.5":[18,9,9],"bts":[3,1,2],"cnd":[35,9,26],"ch":[4,2,2],"sn":[3,1,2],"pl":[21,9,12]},"ht2":{"scr":[9,3,6],"un1.5":[11,4,7],"un2.5":[18,7,11],"un3.5":[19,8,11],"bts":[7,3,4],"cnd":[21,14,7],"ch":[2,0,2],"sn":[8,3,5],"pl":[21,9,12]}};
	}else{
    	return {"ft":{"scr":[18,14,4],"un1.5":[7,3,4],"un2.5":[13,7,6],"un3.5":[17,8,9],"bts":[8,5,3],"cnd":[32,10,22],"ch":[4,3,1],"sn":[10,7,3],"pl":[21,10,11]},"ht1":{"scr":[6,4,2],"un1.5":[15,7,8],"un2.5":[19,9,10],"un3.5":[20,10,10],"bts":[2,1,1],"cnd":[15,6,9],"ch":[12,6,6],"sn":[5,3,2],"pl":[21,10,11]},"ht2":{"scr":[12,10,2],"un1.5":[13,6,7],"un2.5":[18,8,10],"un3.5":[21,10,11],"bts":[4,3,1],"cnd":[17,4,13],"ch":[8,6,2],"sn":[9,7,2],"pl":[21,10,11]}};
    }
}
</script>
</td>
<td class="floatLeft statWidth" style="padding-left:4px;vertical-align:middle;">
<div id="in-pred-banner" style="padding-top:9px;" align="center">

<div id="div-gpt-ad-1542373542514-0" style="height:600px; width:300px;">
<script>
								googletag.cmd.push(function() { googletag.display('div-gpt-ad-1542373542514-0'); });
								</script>
</div>
</div>
</td>
</tr>
<tr class="prRemoved"><td colspan="2"><div class="mptlt"><span>Inter de Queretaro</span><span>Trends</span><span>Lobos ULMX</span></div></td>
<tr>
<td class="floatLeft statWidth" style="padding-right:10px;">
<div class="moduletable">
<div class="mptlt dskhide">Inter de Queretaro Trends</div>
<div class="short_trends"><div class="trend trend_n"><div class="trends_info">
<div class="trend_type fw-bold">
<span class="trend_n">Lost</span>
</div>
<div class="trend_recent_m fw-bold"><span>14/14</span></div>
<div class="trend_perc fw-bold">
<span class="trend_n">100%</span>
</div>
<div class="trend_league">
<img class="trends_img" src="https://www.forebet.com/images/fc/mx.png">
<span>Mx3</span>
</div>
</div><p>Inter de Queretaro have <b>lost</b> their last <span class="trendnum">14</span> league games</div><div class="trend trend_n"><div class="trends_info">
<div class="trend_type fw-bold">
<span class="trend_n">Winless</span>
</div>
<div class="trend_recent_m fw-bold"><span>19/20</span></div>
<div class="trend_perc fw-bold">
<span class="trend_n">95%</span>
</div>
<div class="trend_league">
<img class="trends_img" src="https://www.forebet.com/images/fc/mx.png">
<span>Mx3</span>
</div>
</div><p>Inter de Queretaro are on a poor run of just <span class="trendnum">1</span> <b>wins</b> in <span class="trendnum">20</span> matches (Liga Premier Serie A)</div><div class="trend trend_n"><div class="trends_info">
<div class="trend_type fw-bold">
<span class="trend_n">Lost by 2+ goals</span>
</div>
<div class="trend_recent_m fw-bold"><span>8/8</span></div>
<div class="trend_perc fw-bold">
<span class="trend_n">100%</span>
</div>
<div class="trend_league">
<img class="trends_img" src="https://www.forebet.com/images/fc/mx.png">
<span>Mx3</span>
</div>
</div><p>Inter de Queretaro have <b>lost</b> all of their last <span class="trendnum">8</span> <b>home</b> league matches <b>by margin of 2+ goals</b></div></div><div class="hid_trends"><div class="trend trend_n"><div class="trends_info">
<div class="trend_type fw-bold">
<span class="trend_n">Scored None</span>
</div>
<div class="trend_recent_m fw-bold"><span>3/3</span></div>
<div class="trend_perc fw-bold">
<span class="trend_n">100%</span>
</div>
<div class="trend_league">
<img class="trends_img" src="https://www.forebet.com/images/fc/mx.png">
<span>Mx3</span>
</div>
</div><p><b>No goals have been scored</b> by Inter de Queretaro in their last <span class="trendnum">3</span> games in Liga Premier Serie A</div><div class="trend trend_n"><div class="trends_info">
<div class="trend_type fw-bold">
<span class="trend_n">Scored average</span>
</div>
<div class="trend_recent_m fw-bold"><span>0.44</span></div>
<div class="trend_perc fw-bold">
<span class="trend_n">-</span>
</div>
<div class="trend_league">
<img class="trends_img" src="https://www.forebet.com/images/fc/mx.png">
<span>Mx3</span>
</div>
</div><p><b>On average</b>, Inter de Queretaro have been scoring <span class="trendnum">0.44</span> goals in their most recent <b>home</b> matches in Liga Premier Serie A</div></div><div class="st_rowmore"><span class="exp_blc st_opn" onclick="slToggle(&quot;.hid_trends&quot;,0,330,0,this)">View all</span></div></div></td>
<td class="floatLeft statWidth" style="padding-right:4px;">
<div class="moduletable">
<div class="mptlt dskhide">Lobos ULMX Trends</div>
<div class="short_trends"><div class="trend trend_n"><div class="trends_info">
<div class="trend_type fw-bold">
<span class="trend_n">Scored None</span>
</div>
<div class="trend_recent_m fw-bold"><span>5/5</span></div>
<div class="trend_perc fw-bold">
<span class="trend_n">100%</span>
</div>
<div class="trend_league">
<img class="trends_img" src="https://www.forebet.com/images/fc/mx.png">
<span>Mx3</span>
</div>
</div><p>Lobos ULMX <b>haven't succeeded in scoring a goal</b> in their <span class="trendnum">5</span> latest games in Liga Premier Serie A</div><div class="trend trend_n"><div class="trends_info">
<div class="trend_type fw-bold">
<span class="trend_n">Winless</span>
</div>
<div class="trend_recent_m fw-bold"><span>19/21</span></div>
<div class="trend_perc fw-bold">
<span class="trend_n">90%</span>
</div>
<div class="trend_league">
<img class="trends_img" src="https://www.forebet.com/images/fc/mx.png">
<span>Mx3</span>
</div>
</div><p>Lobos ULMX are in an unfortunate period, having <b>won</b> just <span class="trendnum">2</span> of their last <span class="trendnum">21</span> <b>away</b> matches in Liga Premier Serie A</div><div class="trend trend_c"><div class="trends_info">
<div class="trend_type fw-bold">
<span class="trend_c">Under 2.5 goals</span>
</div>
<div class="trend_recent_m fw-bold"><span>5/5</span></div>
<div class="trend_perc fw-bold">
<span class="trend_c">100%</span>
</div>
<div class="trend_league">
<img class="trends_img" src="https://www.forebet.com/images/fc/mx.png">
<span>Mx3</span>
</div>
</div><p>Lobos ULMX's latest clashes with Inter de Queretaro have been low-scoring with <b>under 2.5 goals</b> in each of their last <span class="trendnum">5</span> encounters in Liga Premier Serie A</div></div><div class="hid_trends"><div class="trend trend_n"><div class="trends_info">
<div class="trend_type fw-bold">
<span class="trend_n">Scored average</span>
</div>
<div class="trend_recent_m fw-bold"><span>0.36</span></div>
<div class="trend_perc fw-bold">
<span class="trend_n">-</span>
</div>
<div class="trend_league">
<img class="trends_img" src="https://www.forebet.com/images/fc/mx.png">
<span>Mx3</span>
</div>
</div><p>The <b>average number of goals</b> scored by Lobos ULMX is <span class="trendnum">0.36</span> for their <b>away</b> matches in Liga Premier Serie A</div></div><div class="st_rowmore"><span class="exp_blc st_opn" onclick="slToggle(&quot;.hid_trends&quot;,0,220,0,this)">View all</span></div></div>
</td>
</tr>
<tr class="prRemoved"><td colspan="2" class="tdifftd difftl"><span>next matches</span></td></tr>
<tr class="prRemoved"><td colspan="2" class="tdifftd"><span class="flleft">Inter de Queretaro</span><div class="tdiffcol"><div>Easy 1</div><div></div><div></div><div></div><div></div><div></div><div>5 Severe</div></div><span class="flrght">Lobos ULMX</span></td></tr>
<tr>
<td class="floatLeft statWidth" style="padding-right:4px;">
<div class="moduletable">
<div class="mptlt dskhide">Inter de Queretaro next matches</div>
<div class="fixt_short" border="0" width="100%" align="center" cellpadding="0" cellspacing="0" border="1" style="padding-left:0px;"><div class="fx_0"><div class="fx_date"><div>11/02</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></span> - <a class="active-team-no" href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><div class="hintanchor team_diff diff_2" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>37</b> of 100<br/>Level 2: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">2</div></div><div class="fx_1"><div class="fx_date"><div>17/02</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/san-juan-de-aragon">San Juan de Aragón</a></span> - <a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><div class="hintanchor team_diff diff_2" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>37</b> of 100<br/>Level 2: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">2</div></div><div class="fx_0"><div class="fx_date"><div>25/02</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></span> - <a class="active-team-no" href="/en/teams/cd-zap">CD Zap</a></div><div class="hintanchor team_diff diff_2" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>33</b> of 100<br/>Level 2: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">2</div></div><div class="fx_1"><div class="fx_date"><div>03/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/Yalmakan">Yalmakan</a></span> - <a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><div class="hintanchor team_diff diff_2" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>30</b> of 100<br/>Level 2: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">2</div></div><div class="fx_0"><div class="fx_date"><div>07/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></span> - <a class="active-team-no" href="/en/teams/pioneros-de-cancun">Pioneros de Cancún</a></div><div class="hintanchor team_diff diff_1" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>22</b> of 100<br/>Level 1: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">1</div></div><div class="fx_1"><div class="fx_date"><div>10/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/inter-playa-del-carmen">Inter Playa del Carmen</a></span> - <a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><div class="hintanchor team_diff diff_4" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>64</b> of 100<br/>Level 4: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">4</div></div></div><div class="fixt_more" border="0" width="100%" align="center" cellpadding="0" cellspacing="0" border="1" style="padding-left:0px;"><div class="fx_0"><div class="fx_date"><div>17/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></span> - <a class="active-team-no" href="/en/teams/sporting-canamy">Sporting Canamy</a></div><div class="hintanchor team_diff diff_2" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>33</b> of 100<br/>Level 2: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">2</div></div><div class="fx_1"><div class="fx_date"><div>23/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/deportiva-venados">Deportiva Venados</a></span> - <a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><div class="hintanchor team_diff diff_5" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>75</b> of 100<br/>Level 5: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">5</div></div><div class="fx_0"><div class="fx_date"><div>31/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></span> - <a class="active-team-no" href="/en/teams/cd-irapuato">CD Irapuato</a></div><div class="hintanchor team_diff diff_4" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>72</b> of 100<br/>Level 4: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">4</div></div><div class="fx_1"><div class="fx_date"><div>06/04</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/petroleros-de-salamanca,Petroleros%20Salamanca">Petroleros de Salamanca</a></span> - <a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><div class="hintanchor team_diff diff_4" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>61</b> of 100<br/>Level 4: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">4</div></div><div class="fx_0"><div class="fx_date"><div>14/04</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></span> - <a class="active-team-no" href="/en/teams/aguacateros-de-periban">Aguacateros de Peribán</a></div><div class="hintanchor team_diff diff_4" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>60</b> of 100<br/>Level 4: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">4</div></div><div class="fx_1"><div class="fx_date"><div>23/04</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></span> - <a class="active-team-no" href="/en/teams/la-piedad">La Piedad</a></div><div class="hintanchor team_diff diff_3" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>46</b> of 100<br/>Level 3: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">3</div></div><div class="fx_0"><div class="fx_date"><div>28/04</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/racing-porto-palmeiras">Racing Porto Palmeiras</a></span> - <a class="active-team" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></div><div class="hintanchor team_diff diff_5" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>84</b> of 100<br/>Level 5: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">5</div></div></div><div class="st_rowmore st_0"><span class="exp_blc st_exp st_opn" onclick="slToggle(&quot;.fixt_more&quot;,0,280,0,this,0)">View all</span></div> </div>
</td>
<td class="floatLeft statWidth" style="padding-left:4px;">
<div class="moduletable">
<div class="mptlt dskhide">Lobos ULMX next matches</div>
<div class="fixt_short" border="0" width="100%" align="center" cellpadding="0" cellspacing="0" border="1" style="padding-left:0px;"><div class="fx_0"><div class="fx_date"><div>11/02</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/inter-de-queretaro">Inter de Queretaro</a></span> - <a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><div class="hintanchor team_diff diff_1" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>8</b> of 100<br/>Level 1: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">1</div></div><div class="fx_1"><div class="fx_date"><div>18/02</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></span> - <a class="active-team-no" href="/en/teams/racing-porto-palmeiras">Racing Porto Palmeiras</a></div><div class="hintanchor team_diff diff_5" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>84</b> of 100<br/>Level 5: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">5</div></div><div class="fx_0"><div class="fx_date"><div>25/02</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/cafetaleros-tapachula">Cafetaleros Tapachula</a></span> - <a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><div class="hintanchor team_diff diff_3" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>55</b> of 100<br/>Level 3: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">3</div></div><div class="fx_1"><div class="fx_date"><div>03/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></span> - <a class="active-team-no" href="/en/teams/escorpiones">Escorpiones</a></div><div class="hintanchor team_diff diff_3" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>49</b> of 100<br/>Level 3: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">3</div></div><div class="fx_0"><div class="fx_date"><div>07/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/montaneses">Montaneses</a></span> - <a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><div class="hintanchor team_diff diff_4" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>63</b> of 100<br/>Level 4: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">4</div></div><div class="fx_1"><div class="fx_date"><div>10/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></span> - <a class="active-team-no" href="/en/teams/cds-tampico-madero">CDS Tampico Madero</a></div><div class="hintanchor team_diff diff_5" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>76</b> of 100<br/>Level 5: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">5</div></div></div><div class="fixt_more" border="0" width="100%" align="center" cellpadding="0" cellspacing="0" border="1" style="padding-left:0px;"><div class="fx_0"><div class="fx_date"><div>17/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></span> - <a class="active-team-no" href="/en/teams/la-piedad">La Piedad</a></div><div class="hintanchor team_diff diff_3" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>46</b> of 100<br/>Level 3: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">3</div></div><div class="fx_1"><div class="fx_date"><div>23/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/san-juan-de-aragon">San Juan de Aragón</a></span> - <a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><div class="hintanchor team_diff diff_2" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>37</b> of 100<br/>Level 2: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">2</div></div><div class="fx_0"><div class="fx_date"><div>31/03</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></span> - <a class="active-team-no" href="/en/teams/cd-zap">CD Zap</a></div><div class="hintanchor team_diff diff_2" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>33</b> of 100<br/>Level 2: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">2</div></div><div class="fx_1"><div class="fx_date"><div>07/04</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/Yalmakan">Yalmakan</a></span> - <a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><div class="hintanchor team_diff diff_2" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>30</b> of 100<br/>Level 2: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">2</div></div><div class="fx_0"><div class="fx_date"><div>14/04</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></span> - <a class="active-team-no" href="/en/teams/pioneros-de-cancun">Pioneros de Cancún</a></div><div class="hintanchor team_diff diff_1" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>22</b> of 100<br/>Level 1: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">1</div></div><div class="fx_1"><div class="fx_date"><div>20/04</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team-no" href="/en/teams/inter-playa-del-carmen">Inter Playa del Carmen</a></span> - <a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></div><div class="hintanchor team_diff diff_4" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>64</b> of 100<br/>Level 4: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">4</div></div><div class="fx_0"><div class="fx_date"><div>28/04</div><div>2024</div></div>
<div class="fx_tag">Mx3</div>
<div class="fx_teams"> <span><a class="active-team" href="/en/teams/lobos-ulmx">Lobos ULMX</a></span> - <a class="active-team-no" href="/en/teams/sporting-canamy">Sporting Canamy</a></div><div class="hintanchor team_diff diff_2" onmouseover="showhint(&quot;Team difficulty<br/>Score: <b>33</b> of 100<br/>Level 2: <b></b> opponent&quot;,this, event, &quot;200px&quot;)">2</div></div></div><div class="st_rowmore st_0"><span class="exp_blc st_exp st_opn" onclick="slToggle(&quot;.fixt_more&quot;,0,280,0,this,0)">View all</span></div> </div>
</td>
</tr>
</div></td></tr>
</table>
<br/>
<table style="margin-left:17px;margin-top:20px;">
<tr>
<td class="nextgames"><a href="https://www.forebet.com/en/predictions-tips-gavilanes-fc-matamoros-tritones-vallarta-1949676"><div>
<img class="inextgame" src="https://www.forebet.com/images/icons/13023.png" />
<img class="inextgame" src="https://www.forebet.com/images/icons/18174.png" />
<div class="nprsnames">Gavilanes FC Matamoros - Tritones Vallarta<br/>
<span class="date_bah" style="font-size:10px;font-weight:bold;">10/02/2024 23:00</span>
<div><span class="forepr"><span>1</span></span></div>
</div></div></a>
</td>
<td class="nextgames"><a href="https://www.forebet.com/en/predictions-tips-atlético-saltillo-cimarrones-de-sonora-ii-1949671"><div>
<img class="inextgame" src="https://www.forebet.com/images/icons/13042.png" />
<img class="inextgame" src="https://www.forebet.com/images/icons/13041.png" />
<div class="nprsnames">Atlético Saltillo - Cimarrones de Sonora II<br/>
<span class="date_bah" style="font-size:10px;font-weight:bold;">11/02/2024 19:00</span>
<div><span class="forepr"><span>1</span></span></div>
</div></div></a>
</td>
<td class="nextgames"><a href="https://www.forebet.com/en/predictions-tips-real-apodaca-los-cabos-united-1949684"><div>
<img class="inextgame" src="https://www.forebet.com/images/icons/23772.png" />
<img class="inextgame" src="https://www.forebet.com/images/icons/21660.png" />
<div class="nprsnames">Real Apodaca - Los Cabos United<br/>
<span class="date_bah" style="font-size:10px;font-weight:bold;">11/02/2024 22:30</span>
<div><span class="forepr"><span>2</span></span></div>
</div></div></a>
</td>
<td class="nextgames"><a href="https://www.forebet.com/en/predictions-tips-coras-de-nayarit-mexicali-fc-1949683"><div>
<img class="inextgame" src="https://www.forebet.com/images/icons/13026.png" />
<img class="inextgame" src="https://www.forebet.com/images/icons/21662.png" />
<div class="nprsnames">Coras de Nayarit - Mexicali FC<br/>
<span class="date_bah" style="font-size:10px;font-weight:bold;">11/02/2024 23:00</span>
<div><span class="forepr"><span>1</span></span></div>
</div></div></a>
</td>
<td class="nextgames"><a href="https://www.forebet.com/en/predictions-tips-aguacateros-de-peribán-san-juan-de-aragón-1949679"><div>
<img class="inextgame" src="https://www.forebet.com/images/icons/23773.png" />
<img class="inextgame" src="https://www.forebet.com/images/icons/23771.png" />
<div class="nprsnames">Aguacateros de Peribán - San Juan de Aragón<br/>
<span class="date_bah" style="font-size:10px;font-weight:bold;">10/02/2024 22:30</span>
<div><span class="forepr"><span>1</span></span></div>
</div></div></a>
</td>
</tr>
</table>
<center>

<div id="div-gpt-ad-1666339262264-0" style="min-width: 336px; min-height: 200px;">
<script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1666339262264-0'); });
                          </script>
</div>
</center>
<script id="ev_data" type="application/json">
		  []		</script>
<div id="hidFavgames">
</div>
<br>
<script>
function st_build_block(e,t){for(var r=[],a=0;a<e.length;a++)if(-1==t){var n=e[a].cloneNode(!0);r.push(n)}else{var l=e[a].className.split(/\s+/);if(l[2]&&parseInt(l[2].split("_")[1])==t){var n=e[a].cloneNode(!0);r.push(n)}}return r}function set_st_stats(e,t,r){var a=JSON.parse(e.parentNode.parentNode.parentNode.parentNode.querySelector(".st_arrdt").innerHTML),n="lg_"+t+"_6";r||(n="lg_"+t);var l=parseInt(a[n][0])||0,o=parseInt(a[n][1])||0,s=parseInt(a[n][2])||0,d=parseInt(a[n][3])||0,c=e.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".st_perc_stat"),p=e.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".st_perc_dist");p[0].children[0].style.width=Math.round(l/d*100)+"%",p[0].children[1].style.width=Math.round(o/d*100)+"%",p[0].children[2].style.width=Math.round(s/d*100)+"%",c[0].children[0].children[1].innerHTML=l,c[1].children[0].children[1].innerHTML=o,c[2].children[0].children[1].innerHTML=s,c[0].children[1].innerHTML=Math.round(l/d*100)+"%",c[1].children[1].innerHTML=Math.round(o/d*100)+"%",c[2].children[1].innerHTML=Math.round(s/d*100)+"%"}function st_switch_lgs(e,t){var r=parseInt(t),a=e.parentNode.parentNode.parentNode.parentNode.querySelector(".st_mainrows_hd"),n=e.parentNode.parentNode.parentNode.parentNode.querySelector(".st_rmain");if(a)var l=a.querySelectorAll(".st_row");else{var l=n.querySelectorAll(".st_row"),o=document.createElement("div");o.setAttribute("class","st_mainrows_hd"),l.forEach(function(e){var t=e.cloneNode(!0);o.appendChild(t)}),e.parentNode.parentNode.parentNode.parentNode.appendChild(o)}n.innerHTML="";var s=st_build_block(l,r),d=!0,c=e.parentNode.parentNode.parentNode.parentNode.querySelector(".st_exp");for(c?(s.length<=6?c.style.display="none":c.style.display="inline-block",-1==c.className.indexOf("st_opn")&&(d=!1)):d=!1,i=0;i<s.length;i++){var p,h="st_row st_"+i%2+" "+s[i].className.split(/\s+/)[2];if(s[i].className=h,6==i){var u=document.createElement("div");if(u.setAttribute("class","hidd_stat"),!d){var N=(s.length-6)*36;u.style.maxHeight=N+"px"}n.appendChild(u)}i<6?n.appendChild(s[i]):u.appendChild(s[i])}set_st_stats(e,r,d)}function ov_tab(e,t,r,a){if(-1==e.className.indexOf("active")){var n=e.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".ov_tablinks");for(i=0;i<n.length;i++)n[i].className=n[i].className.replace(" ov_active","");if(e.className+=" ov_active",parseInt(t))st_switch_lgs(e,t);else{var l=e.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector("section.ov_main");l.style.opacity=.1;var o=get_ovd("h");if("h2h"==r)var s=get_ovd("a");"ft"==t||"ha"==t?(set_ov_data(e,o.ft,"h",t,a),"h2h"==r&&set_ov_data(e,s.ft,"a",t,a)):"ht1"==t?(set_ov_data(e,o.ht1,"h",t,a),"h2h"==r&&set_ov_data(e,s.ht1,"a",t,a)):"ht2"==t&&(set_ov_data(e,o.ht2,"h",t,a),"h2h"==r&&set_ov_data(e,s.ht2,"a",t,a)),unfade(l)}}}function set_ov_data(e,t,r,a,n){for(var l in t)if(t.hasOwnProperty(l)){var o="ov_"+l+"_"+r,s="ov_"+l+"_"+r+"op",d=e.parentNode.parentNode.parentNode.parentNode.querySelector("[class^='"+o+"']"),c=e.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector("[class^='"+s+"']");if(d){var p=0;if("h"==r&&"ha"==a||"h"==n?p=1:("a"==r&&"ha"==a||"a"==n)&&(p=2),("scr"==l||"cnd"==l||"pl"==l)&&(d.innerHTML=t[l][p]),"cnd"!=l&&c){var h=parseInt(t.pl[p])-parseInt(t[l][p]);("scr"==l||"cnd"==l||"pl"==l)&&(c.innerHTML=h)}var u=d.parentElement;if(u&&"pl"!=l){var N=u.querySelectorAll("div.ov_half");if("scr"!=l&&"cnd"!=l){var f=Math.round(parseInt(t[l][p])/parseInt(t.pl[p])*100),v=Math.round(parseInt(h)/parseInt(t.pl[p])*100);N[0].style.width=f+"%",N[1].style.width=v+"%";var $=u.querySelector("div.ov_num"),_=u.querySelector("div.ov_perc");$.firstElementChild.innerHTML=parseInt(t[l][p]),$.lastElementChild.innerHTML=parseInt(h),_.firstElementChild.innerHTML=f+"%",_.lastElementChild.innerHTML=v+"%"}else{var f=Math.round(parseInt(t[l][p])/parseInt(t.pl[p])*100)/100;"scr"==l?N[0].firstElementChild.innerHTML=f:N[1].firstElementChild.innerHTML=f}}}}}function unfade(e){var t=.1,r=setInterval(function(){t>=1&&clearInterval(r),e.style.opacity=t,t+=.1*t},15)}function translateButton(){let e=document.getElementsByTagName("html")[0].getAttribute("lang"),t=[];switch(e){case"en-gb":t=["View all","View less"];break;case"de-de":t=["Alle anzeigen","Weniger anzeigen"];break;case"es-es":t=["Ver todos","Ver menos"];break;case"it-it":t=["Vedi tutti","Vedi meno"];break;case"fr-fr":t=["Voir tout","Voir moins"];break;case"ru-ru":t=["Показать все","Показать меньше"];break;case"el-gr":t=["Προβολή όλων","Προβολή λιγότερων"];break;case"bg-bg":t=["Вижте всички","Затвори"];break;case"ro-ro":t=["Vizualizare toate","Vizualizare mai puține"];break;case"pl-pl":t=["Zobacz wszystkie","Zobacz mniej"];break;default:t=["View All","View Less"]}return t}function toggleTableVisibility(e){let t=Array.from(e.parentElement.parentElement.querySelectorAll(".hidd_stat")),[r,a]=translateButton();function n(t){if(0===t.offsetHeight){let n=Array.from(t.children),l=0;n.forEach(e=>{let t=e.offsetHeight;l+=t}),t.style.maxHeight=l+"px",e.textContent=a}else t.style.maxHeight=0,e.textContent=r}t.length>1?t.forEach(e=>{n(e)}):n(t[0])}</script> <script type="text/javascript" src="/includes/js/stsrt.js?v=5"></script>
</div>
<center>
</center>
</div>
</td>
<td class="contentright" style="padding-top:0px;" valign="top">
<div style="padding-left:5px;padding-right:2px;">
<div class="moduletable">

<div class="moduletable"><h3 style="background-color:#505050;border-radius:5px;">Featured match</h3></div>
<div class="schema ftrd">
<div class="rcnt tr_0">
<div class="stcn"><div class="shortagDiv tghov"><img onclick="getstag(this,1920350,'England','Premier League','football-tips-and-predictions-for-england/premier-league','gb-en')" class="flsc" src="https://www.forebet.com/images/fc/gb-en.png" />
<span class="shortTag">EPL</span>
</div><div id="1920350" class="nofav fav_icon" onclick="favgames(this);" onmouseover="hoverf(this)" onmouseleave="unhoverf(this)"></div></div>
<div class="tnms">
<div itemscope itemtype="http://schema.org/SportsEvent">
<meta itemprop="name" content="Fulham vs Bournemouth" />
<meta itemprop="description" content="Football predictions and statistics for the match Fulham vs Bournemouth" />
<a class="tnmscn" itemprop="url" href="/en/predictions-tips-fulham-bournemouth-1920350">
<span class="homeTeam" itemprop="homeTeam" itemscope itemtype="http://schema.org/SportsTeam"><span itemprop="name">Fulham</span></span>
<span class="awayTeam" itemprop="awayTeam" itemscope itemtype="http://schema.org/SportsTeam"><span itemprop="name">Bournemouth</span></span>
<time itemprop="startDate" datetime="2024-02-10"><span class="date_bah">10/02/2024 16:00</span></time></a>
<span itemprop="location" itemscope itemtype="http://schema.org/Place"><meta itemprop="name address" content="Craven Cottage" /></span><div class="sbbtncn"></div></div></div><div class="predict_no"><span class="forepr"><span>X</span></span></div></div> </div><br/>
</div>
<div class="moduletable">
<div class="rbannerDiv">

<div id="div-gpt-ad-1462781688317-0" style="height:600px; width:300px;">
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1462781688317-0'); });
</script>
</div>
</div> </div>
<div class="moduletable">
 <div class="moduletable" style="padding-top:10px">
<h3 style="background-color:#505050;border-radius:5px;">Pick of the day</h3></div>
<div class="schema ftrd">
<div class="rcnt tr_0">
<div class="stcn"><div class="shortagDiv tghov"><img onclick="getstag(this,2010315,'','','','45')" class="flsc" src="https://www.forebet.com/images/fc/45.png" />
<span class="shortTag">Acn</span>
</div><div id="2010315" class="nofav fav_icon" onclick="favgames(this);" onmouseover="hoverf(this)" onmouseleave="unhoverf(this)"></div></div>
<div class="tnms">
<div itemscope itemtype="http://schema.org/SportsEvent">
<meta itemprop="name" content="South Africa vs DR Congo" />
<meta itemprop="description" content="Football predictions and statistics for the match South Africa vs DR Congo" />
<a class="tnmscn" itemprop="url" href="/en/predictions-tips-south-africa-dr-congo-2010315">
<span class="homeTeam" itemprop="homeTeam" itemscope itemtype="http://schema.org/SportsTeam"><span itemprop="name">South Africa</span></span>
<span class="awayTeam" itemprop="awayTeam" itemscope itemtype="http://schema.org/SportsTeam"><span itemprop="name">DR Congo</span></span>
<time itemprop="startDate" datetime="2024-02-10"><span class="date_bah">10/02/2024 21:00</span></time></a>
<span itemprop="location" itemscope itemtype="http://schema.org/Place"><meta itemprop="name address" content="Stade F&eacute;lix Houphou&euml;t-Boigny" /></span><div class="sbbtncn"></div></div></div><div class="predict"><span class="forepr"><span>X</span></span></div></div> </div><br/>
</div>
<div class="moduletable">

<h3>Top trends</h3>
<div class="tabsCont tabsUp trendsTabsCont trTabsCont">
<div id="navmenuc">
<div>
<ul class="toptrmod tabs-ul">
<li class="Today" id="current"><span>Today</span></li>
<li class="Tomorrow"><span>Tomorrow</span></li>
<li class="Weekend"><span>Weekend</span></li>
</ul>
</div>
</div>
</div>
<div class="top_short_trends top_all_trm" style="margin-top:10px;"><div id="Today_trends"><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/113.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Unbeaten 79 of 90</div></div><div class="ttr_cont"><p>Wrexham FC are <b>unbeaten</b> in <span class="trendnum">79</span> of their last <span class="trendnum">90</span> matches in all competitions<div class="top_trend_teams">
<a href="/en/predictions-tips-wrexham-fc-bradford-city-1938630">Wrexham FC - Bradford City</a>
<span class="date_bah">10/02/2024 16:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Wrexham FC @ <span class="lscrsp" onclick="return getHodd(this,47936514,'trt');">1.85</span>
<div class="haodd" style="display:none;">
<span>1.85</span>
<span>3.60</span>
<span>4.20</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/432.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Undefeated 30</div></div><div class="ttr_cont"><p>Bayer Leverkusen are <b>unbeaten</b> in all of their last <span class="trendnum">30</span> matches in all competitions<div class="top_trend_teams">
<a href="/en/predictions-tips-bayer-leverkusen-bayern-münchen-1927758">Bayer Leverkusen - Bayern München</a>
<span class="date_bah">10/02/2024 18:30</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Bayern München @ <span class="lscrsp" onclick="return getHodd(this,47937415,'trt');">2.55</span>
<div class="haodd" style="display:none;">
<span>2.63</span>
<span>3.50</span>
<span>2.55</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/421.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Winless 2 of 20</div></div><div class="ttr_cont"><p>Fermana Calcio have <b>won</b> only <span class="trendnum">2</span> of their last <span class="trendnum">20</span> Lega Pro matches<div class="top_trend_teams">
<a href="/en/predictions-tips-fermana-calcio-pesaro-1972901">Fermana Calcio - Pesaro</a>
<span class="date_bah">10/02/2024 20:45</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Draw @ <span class="lscrsp" onclick="return getHodd(this,47944960,'trt');">2.80</span>
<div class="haodd" style="display:none;">
<span>2.63</span>
<span>2.80</span>
<span>2.63</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/22118.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Lost 16</div></div><div class="ttr_cont"><p>Inter Manacor have <b>lost</b> their last <span class="trendnum">16</span> league games<div class="top_trend_teams">
<a href="/en/predictions-tips-cd-binissalem-inter-manacor-1973989">CD Binissalem - Inter Manacor</a>
<span class="date_bah">10/02/2024 16:30</span>
<div style="display:block;padding-top:8px;font-size:14px;"> CD Binissalem @ <span class="lscrsp" onclick="return getHodd(this,47954254,'trt');">1.13</span>
<div class="haodd" style="display:none;">
<span>1.13</span>
<span>7.00</span>
<span>12.00</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/19479.png" /></div><div class="trtyp trt_right" style="background-color:#84C4FF">Over 2.5 goals 16</div></div><div class="ttr_cont"><p>In Vatan Sport's last <span class="trendnum">16</span> Oberliga Bremen games have been scored <b>over 2.5 goals</b><div class="top_trend_teams">
<a href="/en/predictions-tips-tura-bremen-vatan-sport-1956971">TuRa Bremen - Vatan Sport</a>
<span class="date_bah">10/02/2024 14:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Over 2.5 goals @ <span class="lscrsp" onclick="return getHodd(this,47956830,'trtuo');">1.22</span>
<div class="haodd" style="display:none;">
<span>4.00</span>
<span>1.22</span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/21159.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Won 16</div></div><div class="ttr_cont"><p>Barcelona (W) have <b>won</b> their last <span class="trendnum">16</span> Primera Division Women games in a row<div class="top_trend_teams">
<a href="/en/predictions-tips-sevilla-w-barcelona-(w)-1976759">Sevilla W - Barcelona (W)</a>
<span class="date_bah">10/02/2024 18:30</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Barcelona (W) @ <span class="lscrsp" onclick="return getHodd(this,47959482,'trt');">1.03</span>
<div class="haodd" style="display:none;">
<span>67.00</span>
<span>17.00</span>
<span>1.03</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/103.png" /></div><div class="trtyp trt_right" style="background-color:#84C4FF">Clean sheets 7</div></div><div class="ttr_cont"><p>Tamworth are on a good streak of <span class="trendnum">7</span> National League North matches where they have managed to <b>keep a clean sheet</b><div class="top_trend_teams">
<a href="/en/predictions-tips-tamworth-farsley-celtic-1939745">Tamworth - Farsley Celtic</a>
<span class="date_bah">10/02/2024 16:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Tamworth @ <span class="lscrsp" onclick="return getHodd(this,47940783,'trt');">1.53</span>
<div class="haodd" style="display:none;">
<span>1.53</span>
<span>3.75</span>
<span>5.00</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/190.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Won by 2+ goals 5</div></div><div class="ttr_cont"><p>Hyde FC have <b>won by a margin of 2+ goals</b> in <span class="trendnum">5</span> of their most recent matches of NPL Premier Division <div class="top_trend_teams">
<a href="/en/predictions-tips-basford-utd-hyde-fc-1953150">Basford Utd - Hyde FC</a>
<span class="date_bah">10/02/2024 16:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Hyde FC @ <span class="lscrsp" onclick="return getHodd(this,47947889,'trt');">1.36</span>
<div class="haodd" style="display:none;">
<span>6.50</span>
<span>4.33</span>
<span>1.36</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/2884.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Scored None 5</div></div><div class="ttr_cont"><p>Central Córdoba SdE have <b>failed to score a single goal</b> in their last <span class="trendnum">5</span> Copa de la Liga Profesional games<div class="top_trend_teams">
<a href="/en/predictions-tips-central-córdoba-sde-sarmiento-junín-2006312">Central Córdoba SdE - Sarmiento Junín</a>
<span class="date_bah">11/02/2024 01:30</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Draw @ <span class="lscrsp" onclick="return getHodd(this,47955222,'trt');">2.88</span>
<div class="haodd" style="display:none;">
<span>2.75</span>
<span>2.88</span>
<span>2.88</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/1388.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Lost by 2+ goals 4</div></div><div class="ttr_cont"><p>PAS Giannina have <b>lost by 2+ goals</b> their last <span class="trendnum">4</span> Super League games<div class="top_trend_teams">
<a href="/en/predictions-tips-pas-giannina-aris-salonica-1956483">PAS Giannina - Aris Salonica</a>
<span class="date_bah">10/02/2024 18:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Aris Salonica @ <span class="lscrsp" onclick="return getHodd(this,47939436,'trt');">1.91</span>
<div class="haodd" style="display:none;">
<span>4.00</span>
<span>3.50</span>
<span>1.91</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div></div><div id="Tomorrow_trends" style="display:none;"><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/5.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Unbeaten 46 of 55</div></div><div class="ttr_cont"><p>Arsenal are <b>unbeaten</b> in <span class="trendnum">46</span> of their last <span class="trendnum">55</span> matches in Premier League<div class="top_trend_teams">
<a href="/en/predictions-tips-west-ham-arsenal-1920356">West Ham - Arsenal</a>
<span class="date_bah">11/02/2024 15:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Arsenal @ <span class="lscrsp" onclick="return getHodd(this,47935699,'trt');">1.53</span>
<div class="haodd" style="display:none;">
<span>6.00</span>
<span>4.20</span>
<span>1.53</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/t-icons/t_872.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Undefeated 36</div></div><div class="ttr_cont"><p>PSV Eindhoven have <b>not suffered any defeats</b> in their <span class="trendnum">36</span> most recent Eredivisie matches<div class="top_trend_teams">
<a href="/en/predictions-tips-fc-volendam-psv-eindhoven-1940637">FC Volendam - PSV Eindhoven</a>
<span class="date_bah">11/02/2024 16:45</span>
<div style="display:block;padding-top:8px;font-size:14px;"> PSV Eindhoven @ <span class="lscrsp" onclick="return getHodd(this,47937933,'trt');">1.04</span>
<div class="haodd" style="display:none;">
<span>26.00</span>
<span>15.00</span>
<span>1.04</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/21847.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Won 25</div></div><div class="ttr_cont"><p>The team of Lyon (W) have managed to <b>win</b> their last <span class="trendnum">25</span> games in Division 1 Women<div class="top_trend_teams">
<a href="/en/predictions-tips-lyon-(w)-paris-sg-(w)-1981446">Lyon (W) - Paris SG (W)</a>
<span class="date_bah">11/02/2024 21:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Lyon (W) @ <span class="lscrsp" onclick="return getHodd(this,47957758,'trt');">1.50</span>
<div class="haodd" style="display:none;">
<span>1.50</span>
<span>3.75</span>
<span>5.25</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/468.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Winless 1 of 20</div></div><div class="ttr_cont"><p>In their last <span class="trendnum">20</span> games in 2. Bundesliga, VfL Osnabruck have recorded only <span class="trendnum">1</span> <b>wins</b><div class="top_trend_teams">
<a href="/en/predictions-tips-vfl-osnabruck-hansa-rostock-1923169">VfL Osnabruck - Hansa Rostock</a>
<span class="date_bah">11/02/2024 13:30</span>
<div style="display:block;padding-top:8px;font-size:14px;"> VfL Osnabruck @ <span class="lscrsp" onclick="return getHodd(this,47937729,'trt');">2.20</span>
<div class="haodd" style="display:none;">
<span>2.20</span>
<span>3.60</span>
<span>2.90</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/18175.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Lost 14</div></div><div class="ttr_cont"><p>Inter de Queretaro have <b>lost</b> their last <span class="trendnum">14</span> league games<div class="top_trend_teams">
<a href="/en/predictions-tips-inter-de-queretaro-lobos-ulmx-1949680">Inter de Queretaro - Lobos ULMX</a>
<span class="date_bah">11/02/2024 00:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Draw @ <span class="lscrsp" onclick="return getHodd(this,47950345,'trt');">3.25</span>
<div class="haodd" style="display:none;">
<span>3.25</span>
<span>3.25</span>
<span>2.00</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/5944.png" /></div><div class="trtyp trt_right" style="background-color:#84C4FF">Under 2.5 goals 12</div></div><div class="ttr_cont"><p>AE Prat's most recent games have been low-scoring, with <b>under 2.5 goals</b> in their last <span class="trendnum">12</span> matches in Tercera Division Group 5 - Cataluna<div class="top_trend_teams">
<a href="/en/predictions-tips-pobla-de-mafumet-ae-prat-1979551">Pobla de Mafumet - AE Prat</a>
<span class="date_bah">11/02/2024 12:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Under 2.5 goals @ <span class="lscrsp" onclick="return getHodd(this,47953639,'trtuo');">1.57</span>
<div class="haodd" style="display:none;">
<span>1.57</span>
<span>2.35</span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/4384.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Scored None 6</div></div><div class="ttr_cont"><p>Mezokovesdi SE <b>haven't scored a single goal</b> in all of their last <span class="trendnum">6</span> NB I games<div class="top_trend_teams">
<a href="/en/predictions-tips-zalaegerszegi-te-mezokovesdi-se-1925939">Zalaegerszegi TE - Mezokovesdi SE</a>
<span class="date_bah">11/02/2024 19:45</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Zalaegerszegi TE @ <span class="lscrsp" onclick="return getHodd(this,47939492,'trt');">1.95</span>
<div class="haodd" style="display:none;">
<span>1.95</span>
<span>3.40</span>
<span>3.60</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/1061.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">HT/FT wins 6</div></div><div class="ttr_cont"><p>Celtic FC have been <b>winning at HT/FT</b> their last <span class="trendnum">6</span> FA Cup matches<div class="top_trend_teams">
<a href="/en/predictions-tips-st-mirren-celtic-fc-2010032">St. Mirren - Celtic FC</a>
<span class="date_bah">11/02/2024 15:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Celtic FC @ <span class="lscrsp" onclick="return getHodd(this,47948442,'trt');">1.25</span>
<div class="haodd" style="display:none;">
<span>10.00</span>
<span>6.00</span>
<span>1.25</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/4391.png" /></div><div class="trtyp trt_right" style="background-color:#84C4FF">Clean sheets 6</div></div><div class="ttr_cont"><p>Szegedi AK are on a good streak of <span class="trendnum">6</span> NB II matches where they have managed to <b>keep a clean sheet</b><div class="top_trend_teams">
<a href="/en/predictions-tips-szegedi-ak-fc-ajka-1929798">Szegedi AK - FC Ajka</a>
<span class="date_bah">11/02/2024 17:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Szegedi AK @ <span class="lscrsp" onclick="return getHodd(this,47944260,'trt');">1.60</span>
<div class="haodd" style="display:none;">
<span>1.60</span>
<span>3.60</span>
<span>4.80</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/1656.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Lost by 2+ goals 3</div></div><div class="ttr_cont"><p>We have seen <span class="trendnum">3</span> consecutive <b>defeats by a margin of 2+ goals</b> in the most recent First Division run of Nea Salamina<div class="top_trend_teams">
<a href="/en/predictions-tips-doxa-katokopia-nea-salamina-1959631">Doxa Katokopia - Nea Salamina</a>
<span class="date_bah">11/02/2024 16:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Nea Salamina @ <span class="lscrsp" onclick="return getHodd(this,47939939,'trt');">1.85</span>
<div class="haodd" style="display:none;">
<span>4.33</span>
<span>3.60</span>
<span>1.85</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div></div><div id="Weekend_trends" style="display:none;"><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/113.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Unbeaten 79 of 90</div></div><div class="ttr_cont"><p>Wrexham FC are <b>unbeaten</b> in <span class="trendnum">79</span> of their last <span class="trendnum">90</span> matches in all competitions<div class="top_trend_teams">
<a href="/en/predictions-tips-wrexham-fc-bradford-city-1938630">Wrexham FC - Bradford City</a>
<span class="date_bah">10/02/2024 16:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Wrexham FC @ <span class="lscrsp" onclick="return getHodd(this,47936514,'trt');">1.85</span>
<div class="haodd" style="display:none;">
<span>1.85</span>
<span>3.60</span>
<span>4.20</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/t-icons/t_872.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Undefeated 36</div></div><div class="ttr_cont"><p>PSV Eindhoven have <b>not suffered any defeats</b> in their <span class="trendnum">36</span> most recent Eredivisie matches<div class="top_trend_teams">
<a href="/en/predictions-tips-fc-volendam-psv-eindhoven-1940637">FC Volendam - PSV Eindhoven</a>
<span class="date_bah">11/02/2024 16:45</span>
<div style="display:block;padding-top:8px;font-size:14px;"> PSV Eindhoven @ <span class="lscrsp" onclick="return getHodd(this,47937933,'trt');">1.04</span>
<div class="haodd" style="display:none;">
<span>26.00</span>
<span>15.00</span>
<span>1.04</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/21847.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Won 25</div></div><div class="ttr_cont"><p>The team of Lyon (W) have managed to <b>win</b> their last <span class="trendnum">25</span> games in Division 1 Women<div class="top_trend_teams">
<a href="/en/predictions-tips-lyon-(w)-paris-sg-(w)-1981446">Lyon (W) - Paris SG (W)</a>
<span class="date_bah">11/02/2024 21:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Lyon (W) @ <span class="lscrsp" onclick="return getHodd(this,47957758,'trt');">1.50</span>
<div class="haodd" style="display:none;">
<span>1.50</span>
<span>3.75</span>
<span>5.25</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/421.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Winless 2 of 20</div></div><div class="ttr_cont"><p>Fermana Calcio have <b>won</b> only <span class="trendnum">2</span> of their last <span class="trendnum">20</span> Lega Pro matches<div class="top_trend_teams">
<a href="/en/predictions-tips-fermana-calcio-pesaro-1972901">Fermana Calcio - Pesaro</a>
<span class="date_bah">10/02/2024 20:45</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Draw @ <span class="lscrsp" onclick="return getHodd(this,47944960,'trt');">2.80</span>
<div class="haodd" style="display:none;">
<span>2.63</span>
<span>2.80</span>
<span>2.63</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/19479.png" /></div><div class="trtyp trt_right" style="background-color:#84C4FF">Over 2.5 goals 16</div></div><div class="ttr_cont"><p>In Vatan Sport's last <span class="trendnum">16</span> Oberliga Bremen games have been scored <b>over 2.5 goals</b><div class="top_trend_teams">
<a href="/en/predictions-tips-tura-bremen-vatan-sport-1956971">TuRa Bremen - Vatan Sport</a>
<span class="date_bah">10/02/2024 14:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Over 2.5 goals @ <span class="lscrsp" onclick="return getHodd(this,47956830,'trtuo');">1.22</span>
<div class="haodd" style="display:none;">
<span>4.00</span>
<span>1.22</span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/22118.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Lost 16</div></div><div class="ttr_cont"><p>Inter Manacor have <b>lost</b> their last <span class="trendnum">16</span> league games<div class="top_trend_teams">
<a href="/en/predictions-tips-cd-binissalem-inter-manacor-1973989">CD Binissalem - Inter Manacor</a>
<span class="date_bah">10/02/2024 16:30</span>
<div style="display:block;padding-top:8px;font-size:14px;"> CD Binissalem @ <span class="lscrsp" onclick="return getHodd(this,47954254,'trt');">1.13</span>
<div class="haodd" style="display:none;">
<span>1.13</span>
<span>7.00</span>
<span>12.00</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/103.png" /></div><div class="trtyp trt_right" style="background-color:#84C4FF">Clean sheets 7</div></div><div class="ttr_cont"><p>Tamworth are on a good streak of <span class="trendnum">7</span> National League North matches where they have managed to <b>keep a clean sheet</b><div class="top_trend_teams">
<a href="/en/predictions-tips-tamworth-farsley-celtic-1939745">Tamworth - Farsley Celtic</a>
<span class="date_bah">10/02/2024 16:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Tamworth @ <span class="lscrsp" onclick="return getHodd(this,47940783,'trt');">1.53</span>
<div class="haodd" style="display:none;">
<span>1.53</span>
<span>3.75</span>
<span>5.00</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/1061.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">HT/FT wins 6</div></div><div class="ttr_cont"><p>Celtic FC have been <b>winning at HT/FT</b> their last <span class="trendnum">6</span> FA Cup matches<div class="top_trend_teams">
<a href="/en/predictions-tips-st-mirren-celtic-fc-2010032">St. Mirren - Celtic FC</a>
<span class="date_bah">11/02/2024 15:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Celtic FC @ <span class="lscrsp" onclick="return getHodd(this,47948442,'trt');">1.25</span>
<div class="haodd" style="display:none;">
<span>10.00</span>
<span>6.00</span>
<span>1.25</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/4384.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Scored None 6</div></div><div class="ttr_cont"><p>Mezokovesdi SE <b>haven't scored a single goal</b> in all of their last <span class="trendnum">6</span> NB I games<div class="top_trend_teams">
<a href="/en/predictions-tips-zalaegerszegi-te-mezokovesdi-se-1925939">Zalaegerszegi TE - Mezokovesdi SE</a>
<span class="date_bah">11/02/2024 19:45</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Zalaegerszegi TE @ <span class="lscrsp" onclick="return getHodd(this,47939492,'trt');">1.95</span>
<div class="haodd" style="display:none;">
<span>1.95</span>
<span>3.40</span>
<span>3.60</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/1388.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Lost by 2+ goals 4</div></div><div class="ttr_cont"><p>PAS Giannina have <b>lost by 2+ goals</b> their last <span class="trendnum">4</span> Super League games<div class="top_trend_teams">
<a href="/en/predictions-tips-pas-giannina-aris-salonica-1956483">PAS Giannina - Aris Salonica</a>
<span class="date_bah">10/02/2024 18:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Aris Salonica @ <span class="lscrsp" onclick="return getHodd(this,47939436,'trt');">1.91</span>
<div class="haodd" style="display:none;">
<span>4.00</span>
<span>3.50</span>
<span>1.91</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div></div><div id="All_trends" style="display:none;"><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/113.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Unbeaten 79 of 90</div></div><div class="ttr_cont"><p>Wrexham FC are <b>unbeaten</b> in <span class="trendnum">79</span> of their last <span class="trendnum">90</span> matches in all competitions<div class="top_trend_teams">
<a href="/en/predictions-tips-wrexham-fc-bradford-city-1938630">Wrexham FC - Bradford City</a>
<span class="date_bah">10/02/2024 16:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Wrexham FC @ <span class="lscrsp" onclick="return getHodd(this,47936514,'trt');">1.85</span>
<div class="haodd" style="display:none;">
<span>1.85</span>
<span>3.60</span>
<span>4.20</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/t-icons/t_872.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Undefeated 36</div></div><div class="ttr_cont"><p>PSV Eindhoven have <b>not suffered any defeats</b> in their <span class="trendnum">36</span> most recent Eredivisie matches<div class="top_trend_teams">
<a href="/en/predictions-tips-fc-volendam-psv-eindhoven-1940637">FC Volendam - PSV Eindhoven</a>
<span class="date_bah">11/02/2024 16:45</span>
<div style="display:block;padding-top:8px;font-size:14px;"> PSV Eindhoven @ <span class="lscrsp" onclick="return getHodd(this,47937933,'trt');">1.04</span>
<div class="haodd" style="display:none;">
<span>26.00</span>
<span>15.00</span>
<span>1.04</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/21847.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">Won 25</div></div><div class="ttr_cont"><p>The team of Lyon (W) have managed to <b>win</b> their last <span class="trendnum">25</span> games in Division 1 Women<div class="top_trend_teams">
<a href="/en/predictions-tips-lyon-(w)-paris-sg-(w)-1981446">Lyon (W) - Paris SG (W)</a>
<span class="date_bah">11/02/2024 21:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Lyon (W) @ <span class="lscrsp" onclick="return getHodd(this,47957758,'trt');">1.50</span>
<div class="haodd" style="display:none;">
<span>1.50</span>
<span>3.75</span>
<span>5.25</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/231.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Winless 1 of 20</div></div><div class="ttr_cont"><p>UD Almería have <b>won</b> just <span class="trendnum">1</span> of their last <span class="trendnum">20</span> matches in all competitions<div class="top_trend_teams">
<a href="/en/predictions-tips-ud-almería-athletic-bilbao-1920956">UD Almería - Athletic Bilbao</a>
<span class="date_bah">12/02/2024 21:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Athletic Bilbao @ <span class="lscrsp" onclick="return getHodd(this,47936717,'trt');">1.75</span>
<div class="haodd" style="display:none;">
<span>4.50</span>
<span>3.75</span>
<span>1.75</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/19479.png" /></div><div class="trtyp trt_right" style="background-color:#84C4FF">Over 2.5 goals 16</div></div><div class="ttr_cont"><p>In Vatan Sport's last <span class="trendnum">16</span> Oberliga Bremen games have been scored <b>over 2.5 goals</b><div class="top_trend_teams">
<a href="/en/predictions-tips-tura-bremen-vatan-sport-1956971">TuRa Bremen - Vatan Sport</a>
<span class="date_bah">10/02/2024 14:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Over 2.5 goals @ <span class="lscrsp" onclick="return getHodd(this,47956830,'trtuo');">1.22</span>
<div class="haodd" style="display:none;">
<span>4.00</span>
<span>1.22</span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/22118.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Lost 16</div></div><div class="ttr_cont"><p>Inter Manacor have <b>lost</b> their last <span class="trendnum">16</span> league games<div class="top_trend_teams">
<a href="/en/predictions-tips-cd-binissalem-inter-manacor-1973989">CD Binissalem - Inter Manacor</a>
<span class="date_bah">10/02/2024 16:30</span>
<div style="display:block;padding-top:8px;font-size:14px;"> CD Binissalem @ <span class="lscrsp" onclick="return getHodd(this,47954254,'trt');">1.13</span>
<div class="haodd" style="display:none;">
<span>1.13</span>
<span>7.00</span>
<span>12.00</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/103.png" /></div><div class="trtyp trt_right" style="background-color:#84C4FF">Clean sheets 7</div></div><div class="ttr_cont"><p>Tamworth are on a good streak of <span class="trendnum">7</span> National League North matches where they have managed to <b>keep a clean sheet</b><div class="top_trend_teams">
<a href="/en/predictions-tips-tamworth-farsley-celtic-1939745">Tamworth - Farsley Celtic</a>
<span class="date_bah">10/02/2024 16:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Tamworth @ <span class="lscrsp" onclick="return getHodd(this,47940783,'trt');">1.53</span>
<div class="haodd" style="display:none;">
<span>1.53</span>
<span>3.75</span>
<span>5.00</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/1061.png" /></div><div class="trtyp trt_right" style="background-color:#84C441">HT/FT wins 6</div></div><div class="ttr_cont"><p>Celtic FC have been <b>winning at HT/FT</b> their last <span class="trendnum">6</span> FA Cup matches<div class="top_trend_teams">
<a href="/en/predictions-tips-st-mirren-celtic-fc-2010032">St. Mirren - Celtic FC</a>
<span class="date_bah">11/02/2024 15:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Celtic FC @ <span class="lscrsp" onclick="return getHodd(this,47948442,'trt');">1.25</span>
<div class="haodd" style="display:none;">
<span>10.00</span>
<span>6.00</span>
<span>1.25</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_0"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/4384.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Scored None 6</div></div><div class="ttr_cont"><p>Mezokovesdi SE <b>haven't scored a single goal</b> in all of their last <span class="trendnum">6</span> NB I games<div class="top_trend_teams">
<a href="/en/predictions-tips-zalaegerszegi-te-mezokovesdi-se-1925939">Zalaegerszegi TE - Mezokovesdi SE</a>
<span class="date_bah">11/02/2024 19:45</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Zalaegerszegi TE @ <span class="lscrsp" onclick="return getHodd(this,47939492,'trt');">1.95</span>
<div class="haodd" style="display:none;">
<span>1.95</span>
<span>3.40</span>
<span>3.60</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div><div class="mod_trend mt_1"><div class="tr_txt lay_right"><div><img class="tr_logo trl_right" src="https://www.forebet.com/images/icons/1388.png" /></div><div class="trtyp trt_right" style="background-color:#FF9441">Lost by 2+ goals 4</div></div><div class="ttr_cont"><p>PAS Giannina have <b>lost by 2+ goals</b> their last <span class="trendnum">4</span> Super League games<div class="top_trend_teams">
<a href="/en/predictions-tips-pas-giannina-aris-salonica-1956483">PAS Giannina - Aris Salonica</a>
<span class="date_bah">10/02/2024 18:00</span>
<div style="display:block;padding-top:8px;font-size:14px;"> Aris Salonica @ <span class="lscrsp" onclick="return getHodd(this,47939436,'trt');">1.91</span>
<div class="haodd" style="display:none;">
<span>4.00</span>
<span>3.50</span>
<span>1.91</span>
<span></span>
<span></span>
<span></span>
</div></div>
</div></div></div></div></div><center> <div class="viewd frontbutt">
<span class="viewb"><a style="font-size: 14px;" href="/en/trends">All trends</a></span></div></center>
</div>
<div class="moduletable">
<h3>Video Highlight</h3>
<div style="margin-bottom:10px;">
<iframe width="300" height="170" src="https://www.youtube.com/embed/H30ZUfJWQu0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
</div>
</td>
</tr>
</table>
</td>
<td class="tbright"></td>
</tr>
<tr>
<td class="tbdownleft"></td>
<td class="tbdown"></td>
<td class="tbdownright"></td>
</tr>
</table>
</td>
</tr>
</table>
<div id="bottom-container">
</div>
</div>
<div id="body-footer">
<div id="f-logo-cont">
<div id="f-logo">
<a href="/"><img class="sp-f-logo" src="/images/spacer.png"></img></a>
</div>
<div id="f-slog">
Football is mathematics </div>
</div>
<div id="f-middle">
<div id="f-middle-cont">
<div class="f-sided" style="padding-top:70px;">
<div>
<div class="f-sided">
<div style="width:250px;">
<h6>ABOUT</h6>
<span>Forebet presents mathematical football predictions generated by computer algorithm on the basis of statistics. Predictions, statistics, live-score, match previews and detailed analysis for more than 700 football leagues</span>
</div>
<div style="width:150px;padding-left:30px;">
<div class="moduletable_footer">
<h6>GETTING STARTED</h6>
<ul id="mainlevel_footer">
<li><a href="/en/what-is-forebet" class="mainlevel_footer">What is Forebet?</a></li>
<li><a href="/en/faq" class="mainlevel_footer">FAQ</a></li>
<li><a href="/en/news-about-the-site/17463-main-features-of-forebet" class="mainlevel_footer">Main features</a></li>
<li><a href="/en/mobile-app" class="mainlevel_footer">Mobile App</a></li>
</ul>
</div>
</div>
<div style="width:150px;padding-left:30px;">
<div class="moduletable_footer">
<h6>IMPORTANT</h6>
<ul id="mainlevel_footer">
<li><a href="/en/terms-of-use" class="mainlevel_footer">Terms of use</a></li>
<li><a href="/en/privacy-policy" class="mainlevel_footer">Privacy policy</a></li>
<li><a href="/en/avoid-scam" class="mainlevel_footer">Avoid scam</a></li>
<li><a href="/en/contact-us" class="mainlevel_footer">Contact us</a></li>
</ul>
</div> </div>
</div>
<div id="f-search">
</div>
</div>
<div style="width:360px;">
<h6>QUICK LINKS</h6>
<ul>
<li><a href="https://www.forebet.com/en/football-tips-and-predictions-for-today">Predictions for Today</a></li>
<li><a href="https://www.forebet.com/en/football-tips-and-predictions-for-tomorrow">Predictions for Tomorrow</a></li>
<li><a href="https://www.forebet.com/en/football-tips-and-predictions-for-the-weekend">Predictions for the Weekend</a></li>
<li><a href="https://www.forebet.com/en/football-tips-and-predictions-for-england/premier-league">Predictions for England Premier League</a></li>
<li><a href="https://www.forebet.com/en/football-tips-and-predictions-for-spain/primera-division">Predictions for Spain La Liga</a></li>
<li><a href="https://www.forebet.com/en/football-tips-and-predictions-for-germany/Bundesliga">Predictions for Germany Bundesliga</a></li>
<li><a href="https://www.forebet.com/en/football-tips-and-predictions-for-italy/serie-a">Predictions for Italy Serie A</a></li>
<li><a href="https://www.forebet.com/en/football-tips-and-predictions-for-france/ligue1">Predictions for France Ligue 1</a></li>
</ul>
</div>
<div style="width:320px;padding-top:33px;">
<ul>
<li><a href="https://www.forebet.com/en/predictions-europe/uefa-champions-league">Predictions for Champions League</a></li>
<li><a href="https://www.forebet.com/en/predictions-europe/uefa-europa-league">Predictions for Europa League</a></li>
<li><a href="https://www.forebet.com/en/football-match-previews">Football match previews</a></li>
<li><a href="https://www.forebet.com/en/livescore">Live-score</a></li>
<li><a href="https://www.forebet.com/en/trends">Trends</a></li>
<li><a href="https://www.forebet.com/en/basketball/predictions-today">Basketball predictions</a></li>
<li><a href="https://www.forebet.com/en/hockey/predictions-today">Hockey predictions</a></li>
<li><a href="https://www.forebet.com/en/esoccer">Esoccer predictions</a></li>
</ul>
</div>
</div>
<div class="f-sided" style="padding-top:50px;">
<div>
<a href="https://play.google.com/store/apps/details?id=com.devclev.forebet" target="_blank"><img class src="/images/app/gplay.png" border="0" alt="Get the App on Google Play Button" /></a>
<a href="https://apps.apple.com/us/app/forebet-football-predictions/id6443482854" target="_blank"><img class src="/images/app/ios.png" border="0" style="padding-left:10px;" alt="Download the App on the App Store Button" /></a>
</div>
<div class="f-sided f-social">
<div><a href="https://www.facebook.com/ForebetPredictions" target="_blank"><img class="sp-f-fb" src="/images/spacer.png" /></a></div>
<div><a href="https://www.instagram.com/forebet.predictions" target="_blank"><img class="sp-f-ins" src="/images/spacer.png" /></a></img></div>
<div><a href="https://twitter.com/Forebet" target="_blank"><img class="sp-f-tw" src="/images/spacer.png" /></a></div>
<div><a href="https://www.youtube.com/channel/UCvFtXcieLvPXTE8kaflW44Q" target="_blank"><img class="sp-f-you" src="/images/spacer.png" /></a></div>
<div><a href="https://www.tiktok.com/@forebetpredictions" target="_blank"><img class="sp-f-tik" src="/images/spacer.png" /></a></div>
<div><a href="https://discord.gg/YN7YqaD78C" target="_blank"><img class="sp-f-dis" src="/images/spacer.png" /></a></div>
</div>
</div>
</div>
</div>
<div id="f-bottom">
<div>Copyright &#169; 2009-2024 Forebet.com All rights reserved.</div>
</div>
</div>
<script type="text/javascript" src="/includes/js/all.js?v=243"></script>
<script type="text/javascript">
function changeLangIcon() {
  document.addEventListener("DOMContentLoaded", () => {
    const langIcon = document.querySelector(".h_lang");
    const html = document.documentElement;
    const langAttribute = html.getAttribute("lang");
    let currentLang = "";
    if (langAttribute === "el-gr") {
      currentLang = langAttribute.split("-")[1];
    } else {
      currentLang = langAttribute.split("-")[0];
    }

    langIcon.textContent = currentLang;
  });
}
changeLangIcon();
</script>
<span id="sch_setev" style="display:none"></span>
<span id="sch_errmn" style="display: none;">Type minimum 3 characters</span>
<span id="sch_tall" style="display: none;">Show all results for</span>
<span id="sch_team" style="display: none;">Team</span>
<span id="sch_league" style="display: none;">League</span>
<span id="sch_matches" style="display: none;">Match</span>
<span id="sch_fixture" style="display: none;">Fixtures</span>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"853739ad8f7269ee","version":"2024.2.0","token":"436d8efd40a149a8ae8221bf45f24051"}' crossorigin="anonymous"></script>
</body>
</html>
