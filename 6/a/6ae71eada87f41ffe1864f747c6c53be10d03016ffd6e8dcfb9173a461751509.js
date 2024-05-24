(function(){'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var t="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.valuelobalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ca=ba(this);function x(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&t(c,a,{configurable:!0,writable:!0,value:b})}}
x("Symbol",function(a){function b(l){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(l||"")+"_"+g++,l)}function c(l,m){this.g=l;t(this,"description",{configurable:!0,writable:!0,value:m})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",g=0;return b});
x("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ca[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&t(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});function da(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function ea(a){return a.raw=a}function y(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var ja="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function A(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}function pa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
x("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)B(b,d)&&c.push(b[d]);return c}});x("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});x("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var g=d.length;c=c||0;for(0>c&&(c=Math.max(c+g,0));c<g;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
x("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
x("WeakMap",function(a){function b(h){this.g=(e+=Math.random()+1).toString();if(h){h=y(h);for(var f;!(f=h.next()).done;)f=f.value,this.set(f[0],f[1])}}function c(){}function d(h){var f=typeof h;return"object"===f&&null!==h||"function"===f}function g(h){if(!B(h,m)){var f=new c;t(h,m,{value:f})}}function l(h){var f=Object[h];f&&(Object[h]=function(k){if(k instanceof c)return k;Object.isExtensible(k)&&g(k);return f(k)})}if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),f=Object.seal({}),
k=new a([[h,2],[f,3]]);if(2!=k.get(h)||3!=k.get(f))return!1;k.delete(h);k.set(f,4);return!k.has(h)&&4==k.get(f)}catch(v){return!1}}())return a;var m="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var e=0;b.prototype.set=function(h,f){if(!d(h))throw Error("Invalid WeakMap key");g(h);if(!B(h,m))throw Error("WeakMap key fail: "+h);h[m][this.g]=f;return this};b.prototype.get=function(h){return d(h)&&B(h,m)?h[m][this.g]:void 0};b.prototype.has=function(h){return d(h)&&B(h,
m)&&B(h[m],this.g)};b.prototype.delete=function(h){return d(h)&&B(h,m)&&B(h[m],this.g)?delete h[m][this.g]:!1};return b});
x("Map",function(a){function b(){var e={};return e.j=e.next=e.head=e}function c(e,h){var f=e[1];return da(function(){if(f){for(;f.head!=e[1];)f=f.j;for(;f.next!=f.head;)return f=f.next,{done:!1,value:h(f)};f=null}return{done:!0,value:void 0}})}function d(e,h){var f=h&&typeof h;"object"==f||"function"==f?l.has(h)?f=l.get(h):(f=""+ ++m,l.set(h,f)):f="p_"+h;var k=e[0][f];if(k&&B(e[0],f))for(e=0;e<k.length;e++){var v=k[e];if(h!==h&&v.key!==v.key||h===v.key)return{id:f,list:k,index:e,i:v}}return{id:f,
list:k,index:-1,i:void 0}}function g(e){this[0]={};this[1]=b();this.size=0;if(e){e=y(e);for(var h;!(h=e.next()).done;)h=h.value,this.set(h[0],h[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),h=new a(y([[e,"s"]]));if("s"!=h.get(e)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var f=h.entries(),k=f.next();if(k.done||k.value[0]!=e||"s"!=k.value[1])return!1;k=f.next();return k.done||4!=k.value[0].x||
"t"!=k.value[1]||!f.next().done?!1:!0}catch(v){return!1}}())return a;var l=new WeakMap;g.prototype.set=function(e,h){e=0===e?0:e;var f=d(this,e);f.list||(f.list=this[0][f.id]=[]);f.i?f.i.value=h:(f.i={next:this[1],j:this[1].j,head:this[1],key:e,value:h},f.list.push(f.i),this[1].j.next=f.i,this[1].j=f.i,this.size++);return this};g.prototype.delete=function(e){e=d(this,e);return e.i&&e.list?(e.list.splice(e.index,1),e.list.length||delete this[0][e.id],e.i.j.next=e.i.next,e.i.next.j=e.i.j,e.i.head=null,
this.size--,!0):!1};g.prototype.clear=function(){this[0]={};this[1]=this[1].j=b();this.size=0};g.prototype.has=function(e){return!!d(this,e).i};g.prototype.get=function(e){return(e=d(this,e).i)&&e.value};g.prototype.entries=function(){return c(this,function(e){return[e.key,e.value]})};g.prototype.keys=function(){return c(this,function(e){return e.key})};g.prototype.values=function(){return c(this,function(e){return e.value})};g.prototype.forEach=function(e,h){for(var f=this.entries(),k;!(k=f.next()).done;)k=
k.value,e.call(h,k[1],k[0],this)};g.prototype[Symbol.iterator]=g.prototype.entries;var m=0;return g});x("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});x("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});x("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});x("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
x("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});function qa(a,b){a instanceof String&&(a+="");var c=0,d=!1,g={next:function(){if(!d&&c<a.length){var l=c++;return{value:b(l,a[l]),done:!1}}d=!0;return{done:!0,value:void 0}}};g[Symbol.iterator]=function(){return g};return g}x("Array.prototype.values",function(a){return a?a:function(){return qa(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function ra(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}function sa(a){return a};var ta={F:"loaded",G:"prov"};function ua(a){return"string"===typeof a&&Object.values(ta).includes(a)};function va(a){a=(void 0===a?null:a)||C;return a.googlefc||(a.googlefc={})};var wa,D;a:{for(var xa=["CLOSURE_FLAGS"],ya=C,za=0;za<xa.length;za++)if(ya=ya[xa[za]],null==ya){D=null;break a}D=ya}var Aa=D&&D[610401301];wa=null!=Aa?Aa:!1;var E,Ba=C.navigator;E=Ba?Ba.userAgentData||null:null;function Ca(a){return wa?E?E.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function F(a){var b;a:{if(b=C.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function G(){return wa?!!E&&0<E.brands.length:!1}function Da(){return G()?Ca("Chromium"):(F("Chrome")||F("CriOS"))&&!(G()?0:F("Edge"))||F("Silk")};function Ea(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in d&&b.call(void 0,d[g],g,a))return!0;return!1};var Fa=G()?!1:F("Trident")||F("MSIE");!F("Android")||Da();Da();F("Safari")&&(Da()||(G()?0:F("Coast"))||(G()?0:F("Opera"))||(G()?0:F("Edge"))||(G()?Ca("Microsoft Edge"):F("Edg/"))||G()&&Ca("Opera"));var Ga={},Ha=null;var Ia="undefined"!==typeof Uint8Array,Ja=!Fa&&"function"===typeof btoa;function Ka(){return"function"===typeof BigInt};var H;H="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;var La=H?function(a,b){a[H]|=b}:function(a,b){void 0!==a.g?a.g|=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})},Ma=H?function(a,b){a[H]&=~b}:function(a,b){void 0!==a.g&&(a.g&=~b)};function I(a,b,c){return c?a|b:a&~b}
var J=H?function(a){return a[H]|0}:function(a){return a.g|0},L=H?function(a){return a[H]}:function(a){return a.g},M=H?function(a,b){a[H]=b;return a}:function(a,b){void 0!==a.g?a.g=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a};function Na(a,b){M(b,(a|0)&-14591)}function Oa(a,b){M(b,(a|34)&-14557)}function Pa(a){a=a>>14&1023;return 0===a?536870912:a};var Qa={},Ra={};function Sa(a){return!(!a||"object"!==typeof a||a.g!==Ra)}function Ta(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var Ua;function Va(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=J(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;M(a,d|1);return!0}var Wa,Xa=[];M(Xa,55);Wa=Object.freeze(Xa);Object.freeze(new function(){});Object.freeze(new function(){});var N=0,O=0;function Ya(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=y(Za(c,a)),b=c.next().value,a=c.next().value,c=b);N=c>>>0;O=a>>>0}function $a(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Ka()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+ab(c)+ab(a));return c}
function ab(a){a=String(a);return"0000000".slice(a.length)+a}function bb(){var a=N,b=O;b&2147483648?Ka()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(Za(a,b)),a=b.next().value,b=b.next().value,a="-"+$a(a,b)):a=$a(a,b);return a}function Za(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]};function cb(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a};var db=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function eb(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))};var fb;function gb(a,b){fb=b;a=new a(b);fb=void 0;return a}
function P(a,b,c){null==a&&(a=fb);fb=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=J(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var g=c.length;if(g){var l=g-1;if(Ta(c[l])){d|=256;b=l-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,g-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}M(a,d);return a};function hb(a,b){return ib(b)}
function ib(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Va(a,void 0,0))return}else if(Ia&&null!=a&&a instanceof Uint8Array){if(Ja){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else{void 0===b&&(b=0);if(!Ha){Ha={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");d=["+/=",
"+/","-_=","-_.","-_"];for(var g=0;5>g;g++){var l=c.concat(d[g].split(""));Ga[g]=l;for(var m=0;m<l.length;m++){var e=l[m];void 0===Ha[e]&&(Ha[e]=m)}}}b=Ga[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(g=l=0;l<a.length-2;l+=3){var h=a[l],f=a[l+1];e=a[l+2];m=b[h>>2];h=b[(h&3)<<4|f>>4];f=b[(f&15)<<2|e>>6];e=b[e&63];c[g++]=m+h+f+e}m=0;e=d;switch(a.length-l){case 2:m=a[l+1],e=b[(m&15)<<2]||d;case 1:a=a[l],c[g]=b[a>>2]+b[(a&3)<<4|m>>4]+e+d}a=c.join("")}return a}}return a};function jb(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,g=b&256?a[d-1]:void 0;d+=g?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(g){b=a[b]={};for(var l in g)Object.prototype.hasOwnProperty.call(g,l)&&(b[l]=c(g[l]))}return a}function kb(a,b,c,d,g){if(null!=a){if(Array.isArray(a))a=Va(a,void 0,0)?void 0:g&&J(a)&2?a:lb(a,b,c,void 0!==d,g);else if(Ta(a)){var l={},m;for(m in a)Object.prototype.hasOwnProperty.call(a,m)&&(l[m]=kb(a[m],b,c,d,g));a=l}else a=b(a,d);return a}}
function lb(a,b,c,d,g){var l=d||c?J(a):0;d=d?!!(l&32):void 0;a=Array.prototype.slice.call(a);for(var m=0;m<a.length;m++)a[m]=kb(a[m],b,c,d,g);c&&c(l,a);return a}function mb(a){return a.u===Qa?a.toJSON():ib(a)};function nb(a,b,c){c=void 0===c?Oa:c;if(null!=a){if(Ia&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=J(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?M(a,(d|34)&-12293):lb(a,nb,d&4?Oa:c,!0,!0)}a.u===Qa&&(c=a.h,d=L(c),a=d&2?a:gb(a.constructor,ob(c,d,!0)));return a}}function ob(a,b,c){var d=c||b&2?Oa:Na,g=!!(b&32);a=jb(a,b,function(l){return nb(l,g,d)});La(a,32|(c?2:0));return a};function pb(a,b,c){var d=a.h,g=L(d);if(g&2)throw Error();qb(d,g,b,c);return a}function qb(a,b,c,d){var g=Pa(b);if(c>=g){var l=b;if(b&256)var m=a[a.length-1];else{if(null==d)return l;m=a[g+(+!!(b&512)-1)]={};l|=256}m[c]=d;c<g&&(a[c+(+!!(b&512)-1)]=void 0);l!==b&&M(a,l);return l}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}function rb(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}function sb(a,b,c){null==c&&(c=void 0);return pb(a,b,c)}
function tb(a,b){a=I(a,2,!!(2&b));a=I(a,32,!!(32&b)&&!0);return a=I(a,2048,!1)};function S(a,b,c){this.h=P(a,b,c)}S.prototype.toJSON=function(){return Ua?ub(this,this.h,!1):ub(this,lb(this.h,mb,void 0,void 0,!1),!0)};function T(a){Ua=!0;try{return JSON.stringify(a.toJSON(),hb)}finally{Ua=!1}}S.prototype.u=Qa;S.prototype.toString=function(){return ub(this,this.h,!1).toString()};
function ub(a,b,c){var d=a.constructor.C,g=L(c?a.h:b);a=b.length;if(!a)return b;var l;if(Ta(c=b[a-1])){a:{var m=c;var e={},h=!1,f;for(f in m)if(Object.prototype.hasOwnProperty.call(m,f)){var k=m[f];if(Array.isArray(k)){var v=k;if(Va(k,d,+f)||Sa(k)&&0===k.size)k=null;k!=v&&(h=!0)}null!=k?e[f]=k:h=!0}if(h){for(var n in e){m=e;break a}m=null}}m!=c&&(l=!0);a--}for(f=+!!(g&512)-1;0<a;a--){n=a-1;c=b[n];n-=f;if(!(null==c||Va(c,d,n)||Sa(c)&&0===c.size))break;var p=!0}if(!l&&!p)return b;b=Array.prototype.slice.call(b,
0,a);m&&b.push(m);return b};function U(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);La(b,32);b=gb(a,b)}return b}};function vb(a){this.h=P(a)}A(vb,S);var wb=U(vb);function xb(a){this.h=P(a)}A(xb,S);var yb=U(xb);xb.C=[1,2];function zb(a){this.h=P(a)}A(zb,S);function Ab(a){var b=new zb;if(null!=a){if(!Number.isFinite(a))throw cb("enum");a|=0}return pb(b,1,a)};function V(a){this.h=P(a)}A(V,S);function Bb(a,b){return sb(a,2,b)}V.prototype.setCmpModeObject=function(a){return sb(this,3,a)};V.prototype.setExperimentsObject=function(a){return sb(this,5,a)};var Cb=U(V);function W(){this.m=this.g=null;this.A=!1}W.prototype.setCmpModeObject=function(a){try{this.g=wb(a)}catch(b){}};W.prototype.setExperimentsObject=function(a){try{this.m=yb(a)}catch(b){}};W.prototype.getSerializedReturnMessageForCommand=function(a){if(this.A)return T(Bb(new V,Ab(4)));switch(a){case "loaded":return T(Db(this));case "prov":return T(Db(this));default:return this.getSerializedReturnMessageForInvalidCommand()}};
W.prototype.getSerializedReturnMessageForInvalidCommand=function(){return T(Bb(new V,Ab(2)))};W.prototype.setError=function(){this.A=!0};function Db(a){return Bb((new V).setCmpModeObject(a.g).setExperimentsObject(a.m),Ab(1))}function Eb(a){var b=a.__fcInternalApiManager;if("undefined"!==typeof b)return b;b=new W;return a.__fcInternalApiManager=b};function Y(a){this.h=P(a)}A(Y,S);var Fb=U(Y);function Z(a){this.h=P(a)}A(Z,S);var Gb=U(Z);Z.C=[1];function Hb(a,b){this.o=b;this.v=new Map;this.s=new Map;this.l=0;this.B=Eb(a);this.s.set("prov",!0)}
Hb.prototype.push=function(a,b){b=b&&"object"===typeof b&&"function"===typeof b.cb?b:{cb:b};if(!ua(a)){var c=this.B.getSerializedReturnMessageForInvalidCommand();Ib(this,b.cb,c);return this.l}if(!this.s.get(a))return b=b.cb,c=this.v.get(a)||[],c.push(b),this.v.set(a,c),this.l;c=this.B.getSerializedReturnMessageForCommand(a);switch(a){case "prov":if(b.spsp){a=Fb(b.spsp);var d=new Z;this.o.D.has(18)&&(d=(d=this.o.D.get(18))?Gb(d):new Z);var g=d.h,l=L(g);if(l&2)throw Error();var m,e=!!(2&l),h=e?1:2,
f=1===h;h=2===h;m&&(m=!e);a:{if(1>=Pa(l)){if(l&256){e=g[g.length-1][1];break a}}else if(e=1+(+!!(l&512)-1),e<g.length){e=g[e];break a}e=void 0}e=Array.isArray(e)?e:Wa;var k=J(e),v=!!(4&k);if(!v){var n=k;0===n&&(n=tb(n,l));n=I(n,1,!0);k=e;var p=l,r=!!(2&n);r&&(p=I(p,2,!0));for(var q=!r,z=!0,u=0,X=0;u<k.length;u++){var w=k[u];var Q=Y,ha=p;if(null==w||"object"!==typeof w||w.u!==Qa)if(Array.isArray(w)){var R=J(w),K=R;0===K&&(K|=ha&32);K|=ha&2;K!==R&&M(w,K);w=new Q(w)}else w=void 0;w instanceof Y&&(r||
(Q=!!(J(w.h)&2),q&&(q=!Q),z&&(z=Q)),k[X++]=w)}X<u&&(k.length=X);n=I(n,4,!0);n=I(n,16,z);n=I(n,8,q);M(k,n);r&&Object.freeze(k);k=n}n=!!(8&k)||f&&!e.length;if(m&&!n){rb(k)&&(e=Array.prototype.slice.call(e),k=tb(k,l),l=qb(g,l,1,e));m=e;for(n=0;n<m.length;n++)p=m[n],r=p.h,q=L(r),r=q&2?gb(p.constructor,ob(r,q,!1)):p,p!==r&&(m[n]=r);k=I(k,8,!0);k=I(k,16,!m.length);M(m,k)}rb(k)||(m=k,f&&(k=I(k,!e.length||16&k&&(!v||32&k)?2:2048,!0)),k!==m&&M(e,k),f&&Object.freeze(e));h&&rb(k)&&(e=Array.prototype.slice.call(e),
k=tb(k,l),M(e,k),qb(g,l,1,e));g=e;a=null!=a?a:new Y;g.push(a);J(a.h)&2?Ma(g,8):Ma(g,16);T(d)}Ib(this,b.cb,c);break;case "loaded":Ib(this,b.cb,c)}return this.l};Hb.prototype.executeCommandType=function(a){if(!ua(a))return this.l;this.s.set(a,!0);for(var b=this.v.get(a)||[];0<b.length;){var c=b.shift();"function"===typeof c&&this.push(a,c)}return this.l};
Hb.prototype.executeAllRemainingCommands=function(){for(var a=y(Object.values(ta)),b=a.next();!b.done;b=a.next())this.executeCommandType(b.value);return this.l};function Ib(a,b,c){"function"===typeof b&&(b(c),a.l++)}
function Jb(a,b){var c=va(a).__fci||[];if(!Array.isArray(c))return c;a=new Hb(a,b);if(0===c.length%2)for(b=0;b<c.length-1;b+=2){var d=c[b],g=c[b+1];"string"!==typeof d||"function"!==typeof g&&"object"!==typeof g||a.push(d,g)}c=!0;c=void 0===c?!1:c;b=va(null);if(!b.hasOwnProperty("__fci")||c)b.__fci=a;return a};function Kb(a){this.g=window;this.o=a;this.m=null}Kb.prototype.load=function(){Jb(this.g,this.o);Lb(this)};function Lb(a){a.g.__fcInternalApiPostMessageReady||(a.m=function(b){Mb(a,b)},a.g.addEventListener("message",a.m),a.g.__fcInternalApiPostMessageReady=!0)}
function Mb(a,b){var c=b.data.__fciCall;if(c&&ua(c.command)&&"number"===typeof c.callId&&("undefined"===typeof c.spsp||"string"===typeof c.spsp)){var d={cb:function(g){try{var l=Cb(g),m=c.callId;if(null==m)var e=m;else{var h=!!h;g=typeof m;if(!("number"===g?Number.isFinite(m):"string"!==g?0:db.test(m)))throw cb("int64");if("string"===typeof m){var f=m,k=Math.trunc(Number(f));if(Number.isSafeInteger(k))var v=String(k);else{var n=f.indexOf(".");-1!==n&&(f=f.substring(0,n));if(eb(f))var p=f;else{if(16>
f.length)Ya(Number(f));else if(Ka()){var r=BigInt(f);N=Number(r&BigInt(4294967295))>>>0;O=Number(r>>BigInt(32)&BigInt(4294967295))}else{var q=+("-"===f[0]);O=N=0;var z=f.length,u=q;for(r=(z-q)%6+q;r<=z;u=r,r+=6){var X=Number(f.slice(u,r));O*=1E6;N=1E6*N+X;4294967296<=N&&(O+=Math.trunc(N/4294967296),O>>>=0,N>>>=0)}if(q){var w=y(Za(N,O)),Q=w.next().value,ha=w.next().value;N=Q;O=ha}}p=bb()}v=p}}else{if(h){u=m;u=Math.trunc(u);if(Number.isSafeInteger(u))var R=String(u);else{var K=String(u);eb(K)?R=K:(Ya(u),
R=bb())}f=R}else{p=m;p=Math.trunc(p);if(Number.isSafeInteger(p))u=p;else{Ya(p);q=N;z=O;if(p=z&2147483648)q=~q+1>>>0,z=~z>>>0,0==q&&(z=z+1>>>0);q=4294967296*z+(q>>>0);u=p?-q:q}f=u}v=f}e=v}var ia=pb(l,1,e)}catch(bc){return}ia={__fciReturn:T(ia)};b.source&&"function"===typeof b.source.postMessage&&b.source.postMessage(ia,b.origin);return ia}};c.spsp&&(d.spsp=c.spsp);Jb(a.g,a.o).push(c.command,d)}};var Nb;function Ob(a){this.g=a}Ob.prototype.toString=function(){return this.g+""};function Pb(){var a=Qb;return a instanceof Ob&&a.constructor===Ob?a.g:"type_error:TrustedResourceUrl"}var Rb={};function Sb(a){if(void 0===Nb){var b=null;var c=C.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:sa,createScript:sa,createScriptURL:sa})}catch(d){C.console&&C.console.error(d.message)}Nb=b}else Nb=b}a=(b=Nb)?b.createScriptURL(a):a;return new Ob(a,Rb)};function Tb(){this.g=C.top.document||C.document||document}function Ub(a){a=a.g;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};/*

 SPDX-License-Identifier: Apache-2.0
*/
function Vb(a){var b=pa.apply(1,arguments);if(0===b.length)return Sb(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Sb(c)};var Wb=ea(['javascript:""']),Xb=ea(["about:blank"]),Qb=Fa?Vb(Wb):Vb(Xb);function Yb(){this.g=new Tb}function Zb(a,b){if(!$b(a,b)){var c=Ub(a.g);c.name=b;c.src=Pb().toString();c.style.display="none";c.style.width="0px";c.style.height="0px";c.style.border="none";c.style.zIndex="-1000";c.style.left="-1000px";c.style.top="-1000px";var d=function(){a.g.g.body?a.g.g.body.appendChild(c):C.setTimeout(d,5)};d()}}
function $b(a,b){return Ea(a.g.g.getElementsByTagName("IFRAME"),function(c){return c.name===b})};function ac(){this.D=new Map};(function(a,b){C[a]=function(){var c=pa.apply(0,arguments);C[a]=function(){};b.call.apply(b,[null].concat(c instanceof Array?c:fa(y(c))))}})("__an6na521li18__",function(a){var b=C.btoa(a+"loader_js"),c=C.btoa(Date.now().toString());ra(b,c);a=C.btoa(a+"cached_js");b=C.btoa(Date.now().toString());ra(a,b);a=new ac;(new Kb(a)).load();Eb(window).setError();Jb(window,a).executeAllRemainingCommands();a=new Yb;Zb(a,"googlefcInactive");Zb(a,"googlefcLoaded")});}).call(this);

__an6na521li18__('');sig.info/nl/" lang="nl">Nederlands</a>
                                                               <a class="dropdown-item " href="https://storiesig.info/ro/" lang="ro">Română</a>
                                                               <a class="dropdown-item " href="https://storiesig.info/cs/" lang="cs">Čeština</a>
                                                               <a class="dropdown-item " href="https://storiesig.info/ar/" lang="ar">العربية</a>
                                                               <a class="dropdown-item " href="https://storiesig.info/bn/" lang="bn">বাংলা</a>
                                                    </ul>
                    </li>
                </ul>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" onclick="toggleHamburger()">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="https://storiesig.info/pl/instagram-story-downloader/">Narzędzie do pobierania historii IG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="https://storiesig.info/pl/instagram-profile-downloader/">Przeglądarka awatarów IG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="https://storiesig.info/en/picuki/">Przeglądarka Picuki</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="https://storiesig.info/en/inflact/">Zainfekuj widza</a>
                        </li>
                    </ul>
                </div>
                <ul class="navbar-nav d-none d-lg-block">
                    <li class="nav-item dropdown ml-auto">
                        <a class="nav-link dropdown-toggle" href="#" id="desktopLanguages" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            pl
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="desktopLanguages">
                                                        <a class="dropdown-item " href="https://storiesig.info/en/" lang="en">English</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/de/" lang="de">Deutsch</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/fr/" lang="fr">Français</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/it/" lang="it">Italiano‬</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/id/" lang="id">Bahasa</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/es/" lang="es">Español</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/ru/" lang="ru">Russian</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/tr/" lang="tr">Turkish</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/th/" lang="th">Thai</a>
                                                        <a class="dropdown-item active_lang disabled-link" href="https://storiesig.info/pl/" lang="pl">Polish</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/pt/" lang="pt">Portuguese</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/ko/" lang="ko">한국어</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/ja/" lang="ja">日本語</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/zh/" lang="zh">简体中文</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/el/" lang="el">Eliniˈka</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/sr/" lang="sr">Srpski</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/nl/" lang="nl">Nederlands</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/ro/" lang="ro">Română</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/cs/" lang="cs">Čeština</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/ar/" lang="ar">العربية</a>
                                                        <a class="dropdown-item " href="https://storiesig.info/bn/" lang="bn">বাংলা</a>
                                                </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <h1>StoriesIG - Anonimowa przeglądarka historii na Instagramie</h1>
        <div class="header-bottom">
            <p class="header-text">Oglądaj Instagram Stories i zapisuj je bez ujawniania swojej tożsamości, wszystko za darmo w przeglądarce.</p>
            <form class="search-form" onsubmit="return false">
    <div class="search-form__wrapper">
        <input
            type="text"
            placeholder="@username  or link"
            class="search search-form__input"
            @input="handleInputChange"
        >
        <button
            class="search-form__button"
            :disabled="disabled"
            @click="handleSearchButtonClick"
        >
            <span class="form-button-description">
                Search
            </span>
            <div class="form-button-img">
                <img src="/img/arrow.svg?id=0f92ee2753637f90f668cddad2c082c0" width="24" height="24" alt="">
            </div>
        </button>
        <search-suggestions
            v-if="isSearchSuggestionsEnabled"
            :query="query"
            :abort-controller="abortController"
            @suggestion-click="handleSuggestionClick"
            @too-many-requests="handleTooManyRequests"
            :search-abort-controller="abortController"
        />
    </div>
</form>

        </div>
    </div>
    <div class="ellipse1"></div>
    <div class="ellipse2-cover">
        <div class="ellipse2"></div>
    </div>
</header>
    <div class="search-result">
    <output-component
        v-if="data"
        :query-type="queryType"
        :data="data"
        :is-ig-avatar-page="isIgAvatarPage"
    ></output-component>
    <loader-component
        :is-loading="isLoading"
        :query-type="queryType"
    ></loader-component>
    <captcha-component
        v-if="isShowCaptcha"
        @success-submit="handleSuccessSubmitCaptcha"
        @hide="handleHideCaptcha"
    ></captcha-component>
    <error-component
        v-if="isError"
        :message="errorMessage"
    ></error-component>
</div>
    <hide-content></hide-content>
    <widget-apk></widget-apk>
    <section class="features container hide-on-request">
    <h2>Funkcje przeglądarki historii na Instagramie</h2>
    <div class="features__grid">
                    <div class="feature">
                <img
                    src="/img/features/eye.svg"
                    alt="Przeglądarka relacji na Instagramie"
                    width="312"
                    height="160"
                    style="aspect-ratio: 312 / 160;"
                >
                <h3 class="feature__title">Przeglądarka relacji na Instagramie</h3>
                <p>Funkcja „Przeglądarka” w StoriesIG umożliwia anonimowe przeglądanie profili na Instagramie bez pozostawiania śladów. Użyj tej funkcji, aby swobodnie przeglądać profile na Instagramie, zachowując nienaruszoną prywatność.</p>
            </div>
                    <div class="feature">
                <img
                    src="/img/features/videos.svg"
                    alt="Narzędzie do pobierania filmów i opowiadań"
                    width="312"
                    height="160"
                    style="aspect-ratio: 312 / 160;"
                >
                <h3 class="feature__title">Narzędzie do pobierania filmów i opowiadań</h3>
                <p>StoriesIG ułatwia pobieranie filmów z Instagrama w dowolnym celu. Możesz z łatwością pobierać pojedyncze filmy lub wiele filmów z karuzel na Instagramie.</p>
            </div>
                    <div class="feature">
                <img
                    src="/img/features/igtv.svg"
                    alt="Przeglądarka i narzędzie do pobierania IGTV"
                    width="312"
                    height="160"
                    style="aspect-ratio: 312 / 160;"
                >
                <h3 class="feature__title">Przeglądarka i narzędzie do pobierania IGTV</h3>
                <p>Filmy IGTV na Instagramie są często długie. Dzięki narzędziu do pobierania IGTV firmy StoriesIG możesz pobierać te filmy do późniejszego oglądania, nawet w trybie offline lub po usunięciu oryginalnego filmu.</p>
            </div>
                    <div class="feature">
                <img
                    src="/img/features/reels.svg"
                    alt="Pobieranie bębnów"
                    width="312"
                    height="160"
                    style="aspect-ratio: 312 / 160;"
                >
                <h3 class="feature__title">Pobieranie bębnów</h3>
                <p>Instagram Reels to format wideo podobny do TikTok. StoriesIG pomaga pobierać filmy z Instagram Reels, umożliwiając zapisywanie i oglądanie ulubionych treści Reels.</p>
            </div>
                    <div class="feature">
                <img
                    src="/img/features/album.svg"
                    alt="Pobieranie karuzeli / albumów"
                    width="312"
                    height="160"
                    style="aspect-ratio: 312 / 160;"
                >
                <h3 class="feature__title">Pobieranie karuzeli / albumów</h3>
                <p>Posty w karuzeli lub w albumie zawierają wiele zdjęć, filmów lub treści mieszanych w jednym poście. Dzięki StoriesIG możesz pobierać galerie z Instagrama i zapisywać wiele zdjęć z tych postów.</p>
            </div>
                    <div class="feature">
                <img
                    src="/img/features/photos.svg"
                    alt="Program do pobierania i przeglądania zdjęć"
                    width="312"
                    height="160"
                    style="aspect-ratio: 312 / 160;"
                >
                <h3 class="feature__title">Program do pobierania i przeglądania zdjęć</h3>
                <p>StoriesIG to cenne narzędzie do zapisywania zdjęć z Instagrama. Możesz pobrać pojedyncze obrazy lub wiele zdjęć z karuzeli na Instagramie, zachowując swoje ulubione obrazy z postów na Instagramie.</p>
            </div>
            </div>
</section>
    <section class="how-to-download container hide-on-request">
    <h2 class="how-to-download__heading">Jak oglądać i pobierać relacje z Instagrama za pomocą StoriesIG?</h2>
        <div class="row how-to-download__item">
        <h3 class="how-to-download__title">Uruchom Instagrama</h3>
        <img loading="lazy" class="how-to-download__image" width="228" height="232" src="/img/howto/1.svg" alt="Uruchom Instagrama">
        <p class="how-to-download__text">Otwórz Instagram z dowolnej przeglądarki lub aplikacji.</p>
    </div>
        <div class="row how-to-download__item">
        <h3 class="how-to-download__title">Skopiuj adres URL</h3>
        <img loading="lazy" class="how-to-download__image" width="228" height="232" src="/img/howto/2.svg" alt="Skopiuj adres URL">
        <p class="how-to-download__text">Skopiuj nazwę użytkownika konta z historią.</p>
    </div>
        <div class="row how-to-download__item">
        <h3 class="how-to-download__title">Wklej link</h3>
        <img loading="lazy" class="how-to-download__image" width="228" height="232" src="/img/howto/3.svg" alt="Wklej link">
        <p class="how-to-download__text">Wklej nazwę użytkownika w polu wprowadzania w narzędziu do pobierania wyróżnień i relacji z Instagrama.</p>
    </div>
        <div class="row how-to-download__item">
        <h3 class="how-to-download__title">Zdobądź historie</h3>
        <img loading="lazy" class="how-to-download__image" width="228" height="232" src="/img/howto/9.svg" alt="Zdobądź historie">
        <p class="how-to-download__text">Kliknij przycisk „Pobierz historie”.</p>
    </div>
        <div class="row how-to-download__item">
        <h3 class="how-to-download__title">Pobierz lub obejrzyj</h3>
        <img loading="lazy" class="how-to-download__image" width="228" height="232" src="/img/howto/5-2.svg" alt="Pobierz lub obejrzyj">
        <p class="how-to-download__text">Możesz zapisać historie na swoim urządzeniu lub po prostu przeglądać je anonimowo.</p>
    </div>
    </section>
    <section class="info-block mt-5 hide-on-request">
    <div class="container">
        <div class="row">
            <div class="col-md-6 info-text">
                <h2>Przeglądaj historie na Instagramie anonimowo dzięki StoriesIG</h2>
                                    <p>StoriesIG to bezpłatna usługa, która umożliwia anonimowe przeglądanie historii na Instagramie z kont publicznych bez konieczności autoryzacji. Platforma zapewnia całkowicie darmową funkcjonalność, pozwalającą na anonimowe oglądanie relacji bez żadnych dodatkowych czynności, wystarczy wpisać nazwę użytkownika Instagrama.</p>
                                    <p>Usługa informuje Cię na bieżąco o fascynujących wiadomościach, a także umożliwia pobieranie odpowiednich treści.</p>
                            </div>
            <div class="col-md-6 d-none d-md-flex info-img justify-content-end">
                <picture>
                    <source type='image/webp' srcset="/img/info-block-img.webp">
                    <source media="(min-width: 768px)" srcset="/img/info-block-img.png">
                    <source
                        media="(max-width: 767px)"
                        srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                        sizes="100%"
                    >
                    <img
                        src="/img/info-block-img.png"
                        alt="info block"
                        width="386"
                        height="378"
                        loading="lazy"
                        style="aspect-ratio: 386 / 378;"
                    >
                </picture>
            </div>
        </div>
    </div>
    <div class="ellipse1"></div>
    <div class="ellipse2"></div>
</section>
    <section class="container faq-container">
    <h2 class="text-center">Często Zadawane Pytania</h2>
    <div class="accordion" id="faq" itemscope itemtype="https://schema.org/FAQPage">
                    <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="heading0" itemprop="name">
                    Do czego służy Instagram Story Viewer StoriesIG.info?
                </h3>
                <div id="collapse0" class="accordion-collapse" aria-labelledby="heading0" data-bs-parent="#faq" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="accordion-body" itemprop="text">
                        Storiesig.info to strona internetowa, która umożliwia przeglądanie i pobieranie historii z Instagrama bez wykrycia. Pozwala przeglądać i zapisywać historie na Instagramie z kont publicznych, nawet po upływie 24-godzinnego limitu czasu.
                    </div>
                </div>
            </div>
                    <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="heading1" itemprop="name">
                    Czy warunki anonimowości dotyczą również pobranych zdjęć i filmów?
                </h3>
                <div id="collapse1" class="accordion-collapse" aria-labelledby="heading1" data-bs-parent="#faq" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="accordion-body" itemprop="text">
                        Absolutnie! Możesz swobodnie pobierać dowolne treści, nie martwiąc się o powiadomienie właściciela profilu. Upewnij się jednak, że konto, z którego chcesz pobierać, jest publiczne, ponieważ nie można pobierać kont prywatnych.
                    </div>
                </div>
            </div>
                    <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="heading2" itemprop="name">
                    Czy konto na Instagramie jest niezbędne do oglądania czyjegoś profilu?
                </h3>
                <div id="collapse2" class="accordion-collapse" aria-labelledby="heading2" data-bs-parent="#faq" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="accordion-body" itemprop="text">
                        Nie, nie potrzebujesz konta na Instagramie, aby śledzić czyjś profil. Możesz przeglądać profile innych osób, wpisując ich nazwę użytkownika w polu wyszukiwania na stronie głównej naszego serwisu. Po kliknięciu przycisku „Szukaj” zostaniesz przekierowany do żądanej treści, jeśli jest ona dostępna.
                    </div>
                </div>
            </div>
                    <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="heading3" itemprop="name">
                    Za pomocą jakich urządzeń można uzyskać dostęp do usługi? Czy są jakieś ograniczenia w oglądaniu?
                </h3>
                <div id="collapse3" class="accordion-collapse" aria-labelledby="heading3" data-bs-parent="#faq" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="accordion-body" itemprop="text">
                        StoriesIG może być używany na dowolnym urządzeniu bez ograniczeń. Tak długo, jak masz przeglądarkę internetową i dostęp do Internetu, możesz korzystać z naszego serwisu. Możesz przeglądać i pobierać treści z laptopa, tabletu lub telefonu, niezależnie od używanego urządzenia.
                    </div>
                </div>
            </div>
                    <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="heading4" itemprop="name">
                    Czy możesz anonimowo przeglądać historie na Instagramie?
                </h3>
                <div id="collapse4" class="accordion-collapse" aria-labelledby="heading4" data-bs-parent="#faq" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="accordion-body" itemprop="text">
                        Tak, możesz anonimowo przeglądać historie na Instagramie za pomocą StoriesIG. Nasza platforma nie wymaga od Ciebie logowania ani podawania żadnych danych osobowych.
                    </div>
                </div>
            </div>
                    <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="heading5" itemprop="name">
                    Czy używanie Storiesig do anonimowego przeglądania Instagrama jest legalne? Jaki jest koszt?
                </h3>
                <div id="collapse5" class="accordion-collapse" aria-labelledby="heading5" data-bs-parent="#faq" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="accordion-body" itemprop="text">
                        Tak, przeglądanie informacji publicznych jest legalne. Pamiętaj, że prawa do zdjęć i filmów należą do ich właścicieli. Korzystanie z usługi StoriesIG jest całkowicie bezpłatne.
                    </div>
                </div>
            </div>
                    <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="heading6" itemprop="name">
                    Jaki jest koszt korzystania z funkcji przeglądarki Instagram Stories?
                </h3>
                <div id="collapse6" class="accordion-collapse" aria-labelledby="heading6" data-bs-parent="#faq" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="accordion-body" itemprop="text">
                        Nie ma żadnych kosztów! Wszystkie funkcje serwisu są całkowicie bezpłatne i nie wymagają rejestracji. Możesz uzyskać dostęp do wszystkich podanych informacji bez konieczności podawania jakichkolwiek danych osobowych.
                    </div>
                </div>
            </div>
                    <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="heading7" itemprop="name">
                    Czy aplikacja StoriesIG jest bezpieczna?
                </h3>
                <div id="collapse7" class="accordion-collapse" aria-labelledby="heading7" data-bs-parent="#faq" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="accordion-body" itemprop="text">
                        Tak, jest całkowicie bezpieczny! StoriesIG zapewnia prywatność przeglądania, używając szyfrowania SSL w celu ochrony twoich informacji. Co więcej, nie ma potrzeby tworzenia konta ani udostępniania jakichkolwiek danych osobowych podczas korzystania z narzędzia.
                    </div>
                </div>
            </div>
                    <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="heading8" itemprop="name">
                    Jak mogę potajemnie oglądać historie?
                </h3>
                <div id="collapse8" class="accordion-collapse" aria-labelledby="heading8" data-bs-parent="#faq" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="accordion-body" itemprop="text">
                        Anonimowe oglądanie historii jest łatwe dzięki aplikacji. Nie musisz się logować ani podawać żadnych informacji o koncie na Instagramie. Po prostu uzyskaj dostęp do historii użytkownika, które chcesz wyświetlić, bez udostępniania żadnych dodatkowych danych. Jest całkowicie bezpłatny, priorytetem jest poufność i nie musisz udostępniać swojego hasła.
                    </div>
                </div>
            </div>
            </div>
</section>
    <footer>
    <div class="container footer-container">
        <div class="footer-container__menu">
            <div class="footer-group footer-group_size_two-columns">
                <a
                    href="https://storiesig.info/pl/instagram-video/">Narzędzie do pobierania wideo IG</a>
                <a
                    href="https://storiesig.info/pl/instagram-photo/">Narzędzie do pobierania zdjęć IG</a>
                <a
                    href="https://storiesig.info/pl/instagram-story-downloader/">Narzędzie do pobierania historii IG</a>
                <a
                    href="https://storiesig.info/pl/instagram-profile-downloader/">Przeglądarka awatarów IG</a>
                <a
                    href="https://storiesig.info/pl/instagram-reels-downloader/">IG Reels Downloader</a>
                <a
                    href="https://storiesig.info/pl/threads-video-downloader/">Narzędzie do pobierania wideo wątków</a>
                <a href="https://storiesig.info/en/smihub/">Przeglądarka Smihub</a>
                <a href="https://storiesig.info/en/picuki/">Przeglądarka Picuki</a>
                <a href="https://storiesig.info/en/inflact/">Zainfekuj widza</a>
                <a href="https://storiesig.info/en/story-saver/">Oszczędzanie historii na Instagramie</a>
                <a href="https://storiesig.info/en/igram/">iGram</a>
            </div>
            <div class="footer-group">
                <a
                    href="https://storiesig.info/en/privacy-policy/">Polityka prywatności</a>
                <a
                    href="https://storiesig.info/en/terms-of-use/">Warunki korzystania</a>
                <a href="https://storiesig.info/en/contact/">Kontakt</a>
                <a href="https://storiesig.info/en/api-faq/">API</a>
            </div>
            <div class="footer-group">
                <a href="https://onlinevideoconverter.pro/" target="_blank">
                    Internetowy konwerter wideo
                </a>
                <a href="https://savefrom.net/" target="_blank">
                    SaveFrom.net
                </a>
                <a href="https://ssyoutube.com/" target="_blank">
                    ssYouTube.com
                </a>
                <a href="https://save-from.net/" target="_blank">
                    Save-From.net
                </a>
                <a href="https://anonyig.com/" target="_blank">
                    IGanonia
                </a>
                <a href=" https://ssstik.live/" target="_blank">
                    sssTikTok
                </a>
            </div>
        </div>
        <div>
            <p class="copyright">© Instagram Story Viewer and Downloader. 2021-2024. Wszelkie prawa zastrzeżone. Przeglądarka Instagram nie jest powiązana z Instagram™. Nie hostujemy żadnych treści na Instagramie. Wszelkie prawa należą do ich odpowiednich właścicieli.</p>
        </div>
    </div>
</footer>
</div>


<!-- light footer -->

<script async src="/js/app.js?id=b3cc81ba0034ffe389a3e2b2f70d1621"></script>
<script async src="/js/vendor/bootstrap.min.js?id=86c66103329d2d376c5ec84117058497"></script>

<!-- Yandex.Metrika counter -->
<noscript id="ymw"></noscript>
<script type="text/javascript" >
    const percent = 0.05;
    if (Math.random() < percent) {
        document.querySelector('#ymw').innerHTML = '<div><img src="https://mc.yandex.ru/watch/88089387" style="position:absolute; left:-9999px;" alt="" /></div>';
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(88089387, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
    }
</script>
<!-- /Yandex.Metrika counter -->

<script>
    const toggleHamburger = () => {
        const header = document.querySelector('#header');
        header.classList.toggle("collapsed-header-nav");
    }
</script>
</body>
</html>
