(function(){'use stra.length?{done:!1,value:a[b++]}:{done:!0}}}var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ea=da(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(k||"")+"_"+f++,k)}function c(k,m){this.g=k;ca(this,"description",{configurable:!0,writable:!0,value:m})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ba(this))}})}return a});function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function ha(a){return a.raw=a}function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}function ka(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var la="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function z(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}function ra(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)A(d,f)&&(a[f]=d[f])}return a};v("Object.assign",function(a){return a||sa});v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push(b[d]);return c}});v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var k=d[c];if(k===b||Object.is(k,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
v("WeakMap",function(a){function b(g){this.g=(e+=Math.random()+1).toString();if(g){g=w(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function d(g){var h=typeof g;return"object"===h&&null!==g||"function"===h}function f(g){if(!A(g,m)){var h=new c;ca(g,m,{value:h})}}function k(g){var h=Object[g];h&&(Object[g]=function(l){if(l instanceof c)return l;Object.isExtensible(l)&&f(l);return h(l)})}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),h=Object.seal({}),
l=new a([[g,2],[h,3]]);if(2!=l.get(g)||3!=l.get(h))return!1;l.delete(g);l.set(h,4);return!l.has(g)&&4==l.get(h)}catch(r){return!1}}())return a;var m="$jscomp_hidden_"+Math.random();k("freeze");k("preventExtensions");k("seal");var e=0;b.prototype.set=function(g,h){if(!d(g))throw Error("Invalid WeakMap key");f(g);if(!A(g,m))throw Error("WeakMap key fail: "+g);g[m][this.g]=h;return this};b.prototype.get=function(g){return d(g)&&A(g,m)?g[m][this.g]:void 0};b.prototype.has=function(g){return d(g)&&A(g,
m)&&A(g[m],this.g)};b.prototype.delete=function(g){return d(g)&&A(g,m)&&A(g[m],this.g)?delete g[m][this.g]:!1};return b});
v("Map",function(a){function b(){var e={};return e.j=e.next=e.head=e}function c(e,g){var h=e[1];return fa(function(){if(h){for(;h.head!=e[1];)h=h.j;for(;h.next!=h.head;)return h=h.next,{done:!1,value:g(h)};h=null}return{done:!0,value:void 0}})}function d(e,g){var h=g&&typeof g;"object"==h||"function"==h?k.has(g)?h=k.get(g):(h=""+ ++m,k.set(g,h)):h="p_"+g;var l=e[0][h];if(l&&A(e[0],h))for(e=0;e<l.length;e++){var r=l[e];if(g!==g&&r.key!==r.key||g===r.key)return{id:h,list:l,index:e,i:r}}return{id:h,
list:l,index:-1,i:void 0}}function f(e){this[0]={};this[1]=b();this.size=0;if(e){e=w(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),g=new a(w([[e,"s"]]));if("s"!=g.get(e)||1!=g.size||g.get({x:4})||g.set({x:4},"t")!=g||2!=g.size)return!1;var h=g.entries(),l=h.next();if(l.done||l.value[0]!=e||"s"!=l.value[1])return!1;l=h.next();return l.done||4!=l.value[0].x||
"t"!=l.value[1]||!h.next().done?!1:!0}catch(r){return!1}}())return a;var k=new WeakMap;f.prototype.set=function(e,g){e=0===e?0:e;var h=d(this,e);h.list||(h.list=this[0][h.id]=[]);h.i?h.i.value=g:(h.i={next:this[1],j:this[1].j,head:this[1],key:e,value:g},h.list.push(h.i),this[1].j.next=h.i,this[1].j=h.i,this.size++);return this};f.prototype.delete=function(e){e=d(this,e);return e.i&&e.list?(e.list.splice(e.index,1),e.list.length||delete this[0][e.id],e.i.j.next=e.i.next,e.i.next.j=e.i.j,e.i.head=null,
this.size--,!0):!1};f.prototype.clear=function(){this[0]={};this[1]=this[1].j=b();this.size=0};f.prototype.has=function(e){return!!d(this,e).i};f.prototype.get=function(e){return(e=d(this,e).i)&&e.value};f.prototype.entries=function(){return c(this,function(e){return[e.key,e.value]})};f.prototype.keys=function(){return c(this,function(e){return e.key})};f.prototype.values=function(){return c(this,function(e){return e.value})};f.prototype.forEach=function(e,g){for(var h=this.entries(),l;!(l=h.next()).done;)l=
l.value,e.call(g,l[1],l[0],this)};f.prototype[Symbol.iterator]=f.prototype.entries;var m=0;return f});v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});function ta(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var k=c++;return{value:b(k,a[k]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f}
v("Array.prototype.values",function(a){return a?a:function(){return ta(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var B=this||self;function ua(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}function va(a,b){a:{var c=["CLOSURE_FLAGS"];for(var d=B,f=0;f<c.length;f++)if(d=d[c[f]],null==d){c=null;break a}c=d}a=c&&c[a];return null!=a?a:b}function wa(a){return a};var xa={F:"loaded",G:"prov"};function ya(a){return"string"===typeof a&&Object.values(xa).includes(a)};function za(a){a=(void 0===a?null:a)||B;return a.googlefc||(a.googlefc={})};var Aa=va(610401301,!1),Ba=va(572417392,!0);var C,Ca=B.navigator;C=Ca?Ca.userAgentData||null:null;function Da(a){return Aa?C?C.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function D(a){var b;a:{if(b=B.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function E(){return Aa?!!C&&0<C.brands.length:!1}function Ea(){return E()?Da("Chromium"):(D("Chrome")||D("CriOS"))&&!(E()?0:D("Edge"))||D("Silk")};function Fa(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)if(f in d&&b.call(void 0,d[f],f,a))return!0;return!1};var Ga=E()?!1:D("Trident")||D("MSIE");!D("Android")||Ea();Ea();D("Safari")&&(Ea()||(E()?0:D("Coast"))||(E()?0:D("Opera"))||(E()?0:D("Edge"))||(E()?Da("Microsoft Edge"):D("Edg/"))||E()&&Da("Opera"));var Ha={},Ia=null;var Ja="undefined"!==typeof Uint8Array,Ka=!Ga&&"function"===typeof btoa;function La(){return"function"===typeof BigInt}var Ma=!Ba,Na=!Ba;function F(a){return Array.prototype.slice.call(a)};var G;G="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;var Oa=G?function(a,b){a[G]|=b}:function(a,b){void 0!==a.g?a.g|=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function Pa(a){var b=H(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=F(a)),I(a,b|1))}var Qa=G?function(a,b){a[G]&=~b}:function(a,b){void 0!==a.g&&(a.g&=~b)};function J(a,b,c){return c?a|b:a&~b}
var H=G?function(a){return a[G]|0}:function(a){return a.g|0},L=G?function(a){return a[G]}:function(a){return a.g},I=G?function(a,b){a[G]=b;return a}:function(a,b){void 0!==a.g?a.g=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a};function Ra(){var a=[];Oa(a,1);return a}function Sa(a,b){I(b,(a|0)&-14591)}function Ta(a,b){I(b,(a|34)&-14557)}function Ua(a){a=a>>14&1023;return 0===a?536870912:a};var Va={},Wa={};function Xa(a){return!(!a||"object"!==typeof a||a.g!==Wa)}function M(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var Ya,Za=!Ba;function $a(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=H(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;I(a,d|1);return!0}var N,ab=[];I(ab,55);N=Object.freeze(ab);Object.freeze(new function(){});Object.freeze(new function(){});var O=0,P=0;function bb(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(cb(c,a)),b=c.next().value,a=c.next().value,c=b);O=c>>>0;P=a>>>0}function db(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else La()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+eb(c)+eb(a));return c}
function eb(a){a=String(a);return"0000000".slice(a.length)+a}function fb(){var a=O,b=P;b&2147483648?La()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(cb(a,b)),a=b.next().value,b=b.next().value,a="-"+db(a,b)):a=db(a,b);return a}function cb(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]};function gb(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a};var hb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ib(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))};var jb;function kb(a,b){jb=b;a=new a(b);jb=void 0;return a}
function Q(a,b,c){null==a&&(a=jb);jb=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=H(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var f=c.length;if(f){var k=f-1;if(M(c[k])){d|=256;b=k-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,f-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}I(a,d);return a};function lb(a,b){return mb(b)}
function mb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return Za||!$a(a,void 0,9999)?a:void 0;if(Ja&&null!=a&&a instanceof Uint8Array){if(Ka){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else{void 0===b&&(b=0);if(!Ia){Ia={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");d=
["+/=","+/","-_=","-_.","-_"];for(var f=0;5>f;f++){var k=c.concat(d[f].split(""));Ha[f]=k;for(var m=0;m<k.length;m++){var e=k[m];void 0===Ia[e]&&(Ia[e]=m)}}}b=Ha[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(f=k=0;k<a.length-2;k+=3){var g=a[k],h=a[k+1];e=a[k+2];m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|e>>6];e=b[e&63];c[f++]=m+g+h+e}m=0;e=d;switch(a.length-k){case 2:m=a[k+1],e=b[(m&15)<<2]||d;case 1:a=a[k],c[f]=b[a>>2]+b[(a&3)<<4|m>>4]+e+d}a=c.join("")}return a}}}return a};function nb(a,b,c){a=F(a);var d=a.length,f=b&256?a[d-1]:void 0;d+=f?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(f){b=a[b]={};for(var k in f)Object.prototype.hasOwnProperty.call(f,k)&&(b[k]=c(f[k]))}return a}function ob(a,b,c,d,f,k){if(null!=a){if(Array.isArray(a))a=f&&0==a.length&&H(a)&1?void 0:k&&H(a)&2?a:pb(a,b,c,void 0!==d,f,k);else if(M(a)){var m={},e;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(m[e]=ob(a[e],b,c,d,f,k));a=m}else a=b(a,d);return a}}
function pb(a,b,c,d,f,k){var m=d||c?H(a):0;d=d?!!(m&32):void 0;a=F(a);for(var e=0;e<a.length;e++)a[e]=ob(a[e],b,c,d,f,k);c&&c(m,a);return a}function qb(a){return a.u===Va?a.toJSON():mb(a)};function rb(a,b,c){c=void 0===c?Ta:c;if(null!=a){if(Ja&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=H(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?I(a,(d|34)&-12293):pb(a,rb,d&4?Ta:c,!0,!1,!0)}a.u===Va&&(c=a.h,d=L(c),a=d&2?a:kb(a.constructor,sb(c,d,!0)));return a}}function sb(a,b,c){var d=c||b&2?Ta:Sa,f=!!(b&32);a=nb(a,b,function(k){return rb(k,f,d)});Oa(a,32|(c?2:0));return a};function tb(a,b,c){var d=a.h,f=L(d);if(f&2)throw Error();ub(d,f,b,c);return a}function ub(a,b,c,d){var f=Ua(b);if(c>=f){var k=b;if(b&256)var m=a[a.length-1];else{if(null==d)return k;m=a[f+(+!!(b&512)-1)]={};k|=256}m[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);k!==b&&I(a,k);return k}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}function vb(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}function wb(a,b,c){null==c&&(c=void 0);return tb(a,b,c)}
function xb(a,b){a=J(a,2,!!(2&b));a=J(a,32,!!(32&b)&&!0);return a=J(a,2048,!1)};function R(a,b,c){this.h=Q(a,b,c)}R.prototype.toJSON=function(){if(Ya)var a=yb(this,this.h,!1);else a=pb(this.h,qb,void 0,void 0,!1,!1),a=yb(this,a,!0);return a};function S(a){Ya=!0;try{return JSON.stringify(a.toJSON(),lb)}finally{Ya=!1}}R.prototype.u=Va;R.prototype.toString=function(){return yb(this,this.h,!1).toString()};
function yb(a,b,c){var d=a.constructor.C,f=L(c?a.h:b),k=Ua(f),m=!1;if(d&&Za){if(!c){b=F(b);var e;if(b.length&&M(e=b[b.length-1]))for(m=0;m<d.length;m++)if(d[m]>=k){Object.assign(b[b.length-1]={},e);break}m=!0}k=b;c=!c;e=L(a.h);a=Ua(e);e=+!!(e&512)-1;for(var g,h,l=0;l<d.length;l++)if(h=d[l],h<a){h+=e;var r=k[h];null==r?k[h]=c?N:Ra():c&&r!==N&&Pa(r)}else g||(r=void 0,k.length&&M(r=k[k.length-1])?g=r:k.push(g={})),r=g[h],null==g[h]?g[h]=c?N:Ra():c&&r!==N&&Pa(r)}g=b.length;if(!g)return b;var p;if(M(k=
b[g-1])){a:{var n=k;c={};a=!1;for(var q in n)if(Object.prototype.hasOwnProperty.call(n,q)){e=n[q];if(Array.isArray(e)){l=e;if(!Na&&$a(e,d,+q)||!Ma&&Xa(e)&&0===e.size)e=null;e!=l&&(a=!0)}null!=e?c[q]=e:a=!0}if(a){for(var u in c){n=c;break a}n=null}}n!=k&&(p=!0);g--}for(f=+!!(f&512)-1;0<g;g--){q=g-1;k=b[q];if(!(null==k||!Na&&$a(k,d,q-f)||!Ma&&Xa(k)&&0===k.size))break;var x=!0}if(!p&&!x)return b;var t;m?t=b:t=Array.prototype.slice.call(b,0,g);b=t;m&&(b.length=g);n&&b.push(n);return b};function V(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Oa(b,32);b=kb(a,b)}return b}};function zb(a){this.h=Q(a)}z(zb,R);var Ab=V(zb);function Bb(a){this.h=Q(a)}z(Bb,R);var Cb=V(Bb);Bb.C=[1,2];function Db(a){this.h=Q(a)}z(Db,R);function Eb(a){var b=new Db;if(null!=a){if(!Number.isFinite(a))throw gb("enum");a|=0}return tb(b,1,a)};function W(a){this.h=Q(a)}z(W,R);function Fb(a,b){return wb(a,2,b)}W.prototype.setCmpModeObject=function(a){return wb(this,3,a)};W.prototype.setExperimentsObject=function(a){return wb(this,5,a)};var Gb=V(W);function X(){this.m=this.g=null;this.A=!1}X.prototype.setCmpModeObject=function(a){try{this.g=Ab(a)}catch(b){}};X.prototype.setExperimentsObject=function(a){try{this.m=Cb(a)}catch(b){}};X.prototype.getSerializedReturnMessageForCommand=function(a){if(this.A)return S(Fb(new W,Eb(4)));switch(a){case "loaded":return S(Hb(this));case "prov":return S(Hb(this));default:return this.getSerializedReturnMessageForInvalidCommand()}};
X.prototype.getSerializedReturnMessageForInvalidCommand=function(){return S(Fb(new W,Eb(2)))};X.prototype.setError=function(){this.A=!0};function Hb(a){return Fb((new W).setCmpModeObject(a.g).setExperimentsObject(a.m),Eb(1))}function Ib(a){var b=a.__fcInternalApiManager;if("undefined"!==typeof b)return b;b=new X;return a.__fcInternalApiManager=b};function Y(a){this.h=Q(a)}z(Y,R);var Jb=V(Y);function Z(a){this.h=Q(a)}z(Z,R);var Kb=V(Z);Z.C=[1];function Lb(a,b){this.o=b;this.v=new Map;this.s=new Map;this.l=0;this.B=Ib(a);this.s.set("prov",!0)}
Lb.prototype.push=function(a,b){b=b&&"object"===typeof b&&"function"===typeof b.cb?b:{cb:b};if(!ya(a)){var c=this.B.getSerializedReturnMessageForInvalidCommand();Mb(this,b.cb,c);return this.l}if(!this.s.get(a))return b=b.cb,c=this.v.get(a)||[],c.push(b),this.v.set(a,c),this.l;c=this.B.getSerializedReturnMessageForCommand(a);switch(a){case "prov":if(b.spsp){a=Jb(b.spsp);var d=new Z;this.o.D.has(18)&&(d=(d=this.o.D.get(18))?Kb(d):new Z);var f=d.h,k=L(f);if(k&2)throw Error();var m,e=!!(2&k),g=e?1:2,
h=1===g;g=2===g;m&&(m=!e);a:{if(1>=Ua(k)){if(k&256){e=f[f.length-1][1];break a}}else if(e=1+(+!!(k&512)-1),e<f.length){e=f[e];break a}e=void 0}e=Array.isArray(e)?e:N;var l=H(e),r=!!(4&l);if(!r){var p=l;0===p&&(p=xb(p,k));p=J(p,1,!0);l=e;var n=k,q=!!(2&p);q&&(n=J(n,2,!0));for(var u=!q,x=!0,t=0,aa=0;t<l.length;t++){var y=l[t];var T=Y,ia=n;if(null==y||"object"!==typeof y||y.u!==Va)if(Array.isArray(y)){var U=H(y),K=U;0===K&&(K|=ia&32);K|=ia&2;K!==U&&I(y,K);y=new T(y)}else y=void 0;y instanceof Y&&(q||
(T=!!(H(y.h)&2),u&&(u=!T),x&&(x=T)),l[aa++]=y)}aa<t&&(l.length=aa);p=J(p,4,!0);p=J(p,16,x);p=J(p,8,u);I(l,p);q&&Object.freeze(l);l=p}p=!!(8&l)||h&&!e.length;if(m&&!p){vb(l)&&(e=F(e),l=xb(l,k),k=ub(f,k,1,e));m=e;for(p=0;p<m.length;p++)n=m[p],q=n.h,u=L(q),q=u&2?kb(n.constructor,sb(q,u,!1)):n,n!==q&&(m[p]=q);l=J(l,8,!0);l=J(l,16,!m.length);I(m,l)}vb(l)||(m=l,h&&(l=J(l,!e.length||16&l&&(!r||32&l)?2:2048,!0)),l!==m&&I(e,l),h&&Object.freeze(e));g&&vb(l)&&(e=F(e),l=xb(l,k),I(e,l),ub(f,k,1,e));f=e;a=null!=
a?a:new Y;f.push(a);H(a.h)&2?Qa(f,8):Qa(f,16);S(d)}Mb(this,b.cb,c);break;case "loaded":Mb(this,b.cb,c)}return this.l};Lb.prototype.executeCommandType=function(a){if(!ya(a))return this.l;this.s.set(a,!0);for(var b=this.v.get(a)||[];0<b.length;){var c=b.shift();"function"===typeof c&&this.push(a,c)}return this.l};Lb.prototype.executeAllRemainingCommands=function(){for(var a=w(Object.values(xa)),b=a.next();!b.done;b=a.next())this.executeCommandType(b.value);return this.l};
function Mb(a,b,c){"function"===typeof b&&(b(c),a.l++)}function Nb(a,b){var c=za(a).__fci||[];if(!Array.isArray(c))return c;a=new Lb(a,b);if(0===c.length%2)for(b=0;b<c.length-1;b+=2){var d=c[b],f=c[b+1];"string"!==typeof d||"function"!==typeof f&&"object"!==typeof f||a.push(d,f)}c=!0;c=void 0===c?!1:c;b=za(null);if(!b.hasOwnProperty("__fci")||c)b.__fci=a;return a};function Ob(a){this.g=window;this.o=a;this.m=null}Ob.prototype.load=function(){Nb(this.g,this.o);Pb(this)};function Pb(a){a.g.__fcInternalApiPostMessageReady||(a.m=function(b){Qb(a,b)},a.g.addEventListener("message",a.m),a.g.__fcInternalApiPostMessageReady=!0)}
function Qb(a,b){var c=b.data.__fciCall;if(c&&ya(c.command)&&"number"===typeof c.callId&&("undefined"===typeof c.spsp||"string"===typeof c.spsp)){var d={cb:function(f){try{var k=Gb(f),m=c.callId;if(null==m)var e=m;else{var g=!!g;f=typeof m;if(!("number"===f?Number.isFinite(m):"string"!==f?0:hb.test(m)))throw gb("int64");if("string"===typeof m){var h=m,l=Math.trunc(Number(h));if(Number.isSafeInteger(l))var r=String(l);else{var p=h.indexOf(".");-1!==p&&(h=h.substring(0,p));if(ib(h))var n=h;else{if(16>
h.length)bb(Number(h));else if(La()){var q=BigInt(h);O=Number(q&BigInt(4294967295))>>>0;P=Number(q>>BigInt(32)&BigInt(4294967295))}else{var u=+("-"===h[0]);P=O=0;var x=h.length,t=u;for(q=(x-u)%6+u;q<=x;t=q,q+=6){var aa=Number(h.slice(t,q));P*=1E6;O=1E6*O+aa;4294967296<=O&&(P+=Math.trunc(O/4294967296),P>>>=0,O>>>=0)}if(u){var y=w(cb(O,P)),T=y.next().value,ia=y.next().value;O=T;P=ia}}n=fb()}r=n}}else{if(g){t=m;t=Math.trunc(t);if(Number.isSafeInteger(t))var U=String(t);else{var K=String(t);ib(K)?U=K:
(bb(t),U=fb())}h=U}else{n=m;n=Math.trunc(n);if(Number.isSafeInteger(n))t=n;else{bb(n);u=O;x=P;if(n=x&2147483648)u=~u+1>>>0,x=~x>>>0,0==u&&(x=x+1>>>0);u=4294967296*x+(u>>>0);t=n?-u:u}h=t}r=h}e=r}var ja=tb(k,1,e)}catch(fc){return}ja={__fciReturn:S(ja)};b.source&&"function"===typeof b.source.postMessage&&b.source.postMessage(ja,b.origin);return ja}};c.spsp&&(d.spsp=c.spsp);Nb(a.g,a.o).push(c.command,d)}};var Rb;function Sb(a){this.g=a}Sb.prototype.toString=function(){return this.g+""};function Tb(){var a=Ub;return a instanceof Sb&&a.constructor===Sb?a.g:"type_error:TrustedResourceUrl"}var Vb={};function Wb(a){if(void 0===Rb){var b=null;var c=B.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:wa,createScript:wa,createScriptURL:wa})}catch(d){B.console&&B.console.error(d.message)}Rb=b}else Rb=b}a=(b=Rb)?b.createScriptURL(a):a;return new Sb(a,Vb)};function Xb(){this.g=B.top.document||B.document||document}function Yb(a){a=a.g;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};/*

 SPDX-License-Identifier: Apache-2.0
*/
function Zb(a){var b=ra.apply(1,arguments);if(0===b.length)return Wb(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Wb(c)};var $b=ha(['javascript:""']),ac=ha(["about:blank"]),Ub=Ga?Zb($b):Zb(ac);function bc(){this.g=new Xb}function cc(a,b){if(!dc(a,b)){var c=Yb(a.g);c.name=b;c.src=Tb().toString();c.style.display="none";c.style.width="0px";c.style.height="0px";c.style.border="none";c.style.zIndex="-1000";c.style.left="-1000px";c.style.top="-1000px";var d=function(){a.g.g.body?a.g.g.body.appendChild(c):B.setTimeout(d,5)};d()}}
function dc(a,b){return Fa(a.g.g.getElementsByTagName("IFRAME"),function(c){return c.name===b})};function ec(){this.D=new Map};(function(a,b){B[a]=function(){var c=ra.apply(0,arguments);B[a]=function(){};b.call.apply(b,[null].concat(c instanceof Array?c:ka(w(c))))}})("__an6na521li18__",function(a){var b=B.btoa(a+"loader_js"),c=B.btoa(Date.now().toString());ua(b,c);a=B.btoa(a+"cached_js");b=B.btoa(Date.now().toString());ua(a,b);a=new ec;(new Ob(a)).load();Ib(window).setError();Nb(window,a).executeAllRemainingCommands();a=new bc;cc(a,"googlefcInactive");cc(a,"googlefcLoaded")});}).call(this);

__an6na521li18__('');ef="https://www.facebook.com/slashdot" target="_blank" rel="nofollow"><i class="icon-facebook-squared"></i><span class="sr-only">Facebook</span></a></li>
		<li><a href="https://www.linkedin.com/company/slashdot" target="_blank" rel="nofollow"><i class="icon-linkedin-squared"></i><span class="sr-only">LinkedIn</span></a></li>
		<li><a href="https://twitter.com/slashdot" target="_blank" rel="nofollow"><i class="icon-twitter-squared"></i><span class="sr-only">Twitter</span></a></li>
		<li><a href="https://www.youtube.com/channel/UCsW36751Gy-EAbHQwe9WBNw" target="_blank" rel="nofollow"><i class="icon-youtube-squared">
                    <!-- width="1792" height="1792" -->
                    <svg viewBox="0 260 1792 1260" xmlns="http://www.w3.org/2000/svg"><path d="M711 1128l484-250-484-253v503zm185-862q168 0 324.5 4.5t229.5 9.5l73 4q1 0 17 1.5t23 3 23.5 4.5 28.5 8 28 13 31 19.5 29 26.5q6 6 15.5 18.5t29 58.5 26.5 101q8 64 12.5 136.5t5.5 113.5v176q1 145-18 290-7 55-25 99.5t-32 61.5l-14 17q-14 15-29 26.5t-31 19-28 12.5-28.5 8-24 4.5-23 3-16.5 1.5q-251 19-627 19-207-2-359.5-6.5t-200.5-7.5l-49-4-36-4q-36-5-54.5-10t-51-21-56.5-41q-6-6-15.5-18.5t-29-58.5-26.5-101q-8-64-12.5-136.5t-5.5-113.5v-176q-1-145 18-290 7-55 25-99.5t32-61.5l14-17q14-15 29-26.5t31-19.5 28-13 28.5-8 23.5-4.5 23-3 17-1.5q251-18 627-18z"/></svg>
                </i><span class="sr-only">Youtube</span></a></li>
		<li><a href="https://mastodon.cloud/@slashdot" target="_blank" rel="me nofollow"><i class="icon-mastodon-squared">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"/></svg>
				</i><span class="sr-only">Mastodon</span></a></li>
		<li><a href="//slashdot.org/newsletter" target="_blank" rel="nofollow"><i class="icon-mail-squared"></i><span class="sr-only">Newsletter</span></a></li>
	</ul>
</nav>
			</div>
		</div>

		<section>
		
			<div class="message-bar" id="firehose-message-tray">
				<span class="icon-quote-left"></span>
				<p>
					
						
						Did you know <strong><a href="//slashdot.org/subscribe.pl">subscribers</a></strong> can see articles in the future?
					
				</p>
			</div>
		
		
		
			<div class="banner-wrapper">
				<div class="adwrap adwrap-unviewed banner-contain">
					
					<div id='div-gpt-ad-728x90_a'><script type='text/javascript'>
googletag.cmd.push(function(){
googletag.display('div-gpt-ad-728x90_a');});</script></div>
					<div id='div-gpt-ad-hubicon_200x90_a'><script type='text/javascript'>
googletag.cmd.push(function(){
googletag.display('div-gpt-ad-hubicon_200x90_a');});</script></div>
				</div>
			</div>
		
		<a name="main-articles"></a>
	
	<!-- header type=current end --><div id="wide">
<h1>
		404 File Not Found
		
	</h1>
<div class="generalbody">
The requested URL (/slashdot.org/index2.pl?fhfilter=bitcoin) was not found.<p>



<p>If you feel like it, mail the url, and where ya came from to <a href="mailto:help@slashdot.org">help@slashdot.org.</a>
</div>
</div><!-- footer type=current begin -->

	
	</section>
	
	


	<footer id="fhft" class="grid_24 nf">
		<div id="logo_nf" class="fleft">
			<a href="//slashdot.org"><span>Slashdot</span></a>
		</div>
		<nav role="firehose footer">
			

			
			<ul class="fright submitstory">
					<li class="fright">
						<a href="/submit">Submit<span class="opt"> Story</span></a>
					</li>
			</ul>
		</nav>
		


	</footer>
	<section class="bq">
		<blockquote class="msg grid_24" cite="https://slashdot.org">
			<p>The best defense against logic is ignorance.</p>
			<span class="slant"></span>
		</blockquote>
	</section>
	<footer id="ft" class="grid_24">
		<nav class="grid_10" role="footer">
			<ul>
				<li><a href="//slashdot.org/faq">FAQ</a></li>
				<li><a href="//slashdot.org/archive.pl">Story Archive</a></li>
				<li><a href="//slashdot.org/hof.shtml">Hall of Fame</a></li>
				<li><a href="https://slashdotmedia.com/advertising-and-marketing-services/" rel="nofollow">Advertising</a></li>
				<li><a href="https://slashdotmedia.com/terms-of-use/" rel="nofollow">Terms</a></li>
				<li><a href="https://slashdotmedia.com/privacy-statement/" rel="nofollow">Privacy Statement</a></li>
				<li><a href="//slashdot.org/faq/slashmeta.shtml">About</a></li>
				<li><a href="mailto:feedback@slashdot.org">Feedback</a></li>
				<li><a href="#" onclick="set_mobile_pref('mobile',1);return false;">Mobile View</a></li>
				<li><a href="//slashdot.org/blog">Blog</a></li>
				<li><a href="#" id="opt-out-link"></a></li>
				<li><button class="btn opt-out" id="opt-out-button" style="display:none">
					<img src="//a.fsdn.com/sd/ccpa-optout.png" alt="Icon">
					Do Not Sell My Personal Information</button></li>

			</ul>
		</nav>
		<br>
		
		<div class="grid_14 tright tm"><span class="nobr">Copyright &copy; 2024 Slashdot Media. All Rights Reserved.</span></div>

	<div class="modal-custom overlay-custom" id="ccpa-modal" style="max-width:100%">
		<div class="modal-content modal-content-ccpa">
	    	<span class="close" id="modal-close">&times;</span>
			<div class="modal-header" id="ccpa-modal-content-destination"></div>
		</div>
	</div>

	</footer>
	
	<div class="overlay"></div>
<div class="modal-box">
    <a href="#" id="close-modal">Close</a>
    <article class="modal-content">
    </article>
    <footer>
</div>




<div id="modal_cover" class="hide" onclick="hide_modal_box(); return false;"></div>
<div id="modal_box" class="hide">
      <div id="modal_box_content"></div>
      <header class="n">
                  <span class="fadeout"></span>
                  <span class="fadeoutfade"></span>
		  <span class="pf"><a class="ico close" onclick="hide_modal_box(); return false;" href="#"><span>Close</span></a></span>
		  <h3 class="pf"><div id="logo"><a href="//slashdot.org">Slashdot</a></div><span id="preference_title"></span></h3>
      </header>
</div>
	
	<!-- CCM Tag -->
<script type="text/javascript">
bizx.cmp.ifConsent('', ['all','bombora'], function() {
        /*global _ml:true, window */
        _ml = window._ml || {};
        _ml.eid = '771';

        var s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');
        mltag.type = 'text/javascript'; mltag.async = true;
        mltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();
        s.parentNode.insertBefore(mltag, s);
});
</script>
<!-- End CCM Tag -->

<script type="text/javascript">
window.google_analytics_uacct = "UA-199823890-2";

var _gaq = _gaq || [];





  _gaq.push(['_setAccount', 'UA-199823890-2']);
  _gaq.push(['_setDomainName', '.slashdot.org']);

	
		_gaq.push(['_addIgnoredRef', 'slashdot.org']);
	


  _gaq.push(['_setCustomVar', 1, 'User Type',  'User', 3]);
	
	_gaq.push(['_setCustomVar', 2, 'Page','', 3]);

	



// track beta behavior for user
var betamatches = document.cookie.match(/betagroup=(-?\d+)/);

if(betamatches && betamatches[1]) {
  if(betamatches[1] == -1) {
    _gaq.push(['_setCustomVar', 3, 'Beta-Usage','opt-out', 3]);
  } else {
    _gaq.push(['_setCustomVar', 3, 'Beta-Usage','unredirected', 3]);
  }
}



  _gaq.push(['_trackPageview']);
  _gaq.push(['_trackPageLoadTime']);


if (window.is_euro_union === 0) {
bizx.cmp.ifConsent('', ['all'], function () {
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
});
}
</script>

<!-- CCM GA Push -->
<script>
    if (typeof _ml !== 'undefined' && _ml.us) {
        if (_ml.us.tp && _ml.us.tp.length > 0) {
            ga('set', 'dimension2', _ml.us.tp[0]);
        }
        if (_ml.us.pc && _ml.us.pc.length > 0) {
            ga('set', 'dimension7', _ml.us.pc[0]);
        }
        ga('set', 'dimension3', _ml.us.ind);
        ga('set', 'dimension4', _ml.us.cr);
        ga('set', 'dimension5', _ml.us.cs);
        ga('set', 'dimension6', _ml.us.dm);
        ga('set', 'dimension8', _ml.us.sn);
    }
</script>

<!-- Sticky Ads -->
<script type="text/javascript">
var topBannerViewed = false;
function initSticky(){
	if (SD.Ads.acceptable_ads_active) {
		return;
	}
		
	if($('#div-gpt-ad-728x90_a').length > 0 && $('#div-gpt-ad-300x250_a').length > 0 && window.outerWidth >= 1070 && !sdAdBlockActive){
	    $(window).scroll(function(){
		var y = $(document).scrollTop();
		var z =  y + window.outerHeight;
		var navOffset = 0;
		var offset = [
		    $('.nav-wrap').outerHeight(true),
		    $('.nav-secondary-wrap').outerHeight(true)
		];
		for(row in offset){
		    if(offset[row]) navOffset = navOffset + parseInt(offset[row]);
		}
		$('.adwrap-unviewed').each(function(){
		    var cls = 'adwrap-sticky';
		    var toggleCls = 'adwrap';
				//$('.banner-wrapper').css('height', $('.banner-contain').outerHeight());
		    if($(this).hasClass('railad')) {
			if(topBannerViewed){
			    var topPixels = $(this).offset().top;
			    navOffset += $('.adwrap').outerHeight();
			    if(y >= topPixels && y >= navOffset){
				$('#slashboxes').css('top', 0).css('position','sticky').css('right',13);
			    } else {
				$('#slashboxes').removeAttr('style');
			    }
			}
			return;
		    }
		    var topPixels = $(this).offset().top;
		if(y >= topPixels && y >= navOffset){
			$(this).addClass(cls);
			$(this).removeClass('adwrap');
					if(cls == 'adwrap-sticky') { //top banner
			    topBannerViewed = false;
						$('#slashboxes').css('top',$(this).outerHeight() || 0).css('position','sticky').css('right',13);
					}
		if(topBannerViewed) {
			    //console.log('hereeee');
						$('#slashboxes').css('top', 0).css('position','sticky').css('right',13);
					}
		    }else{
									//console.log('topBannerViewed', topBannerViewed);
			$(this).removeClass(cls);
			$(this).addClass(toggleCls);
			$('#slashboxes').removeAttr('style');
		    }
		});
			if($('.adwrap-viewed-banner').length > 0){
			  //console.log('ads topBanner displayed');
				topBannerViewed = true;
				$('.adwrap-viewed-banner').removeClass('adwrap-unviewed').removeClass('adwrap-sticky').addClass('adwrap');
			}
	    if($('.adwrap-viewed-railad').length > 0){
							//console.log('ads sidebar displayed');
		    $('.adwrap-viewed-railad').removeClass('adwrap-unviewed').removeClass('adwrap-railad-sticky');
				$('#slashboxes').removeAttr('style');
			}
	    });
	}
}
bizx.cmp.ifConsent('', ['all', 'google-ads'], function () {
	if (!sdAdBlockActive) {
		initSticky();
	}
	if (SD.Ads.acceptable_ads_active) {
		// similar to remove* code above in initSticky
		$('.adwrap-unviewed').removeClass('adwrap-unviewed').removeClass('adwrap-sticky').addClass('adwrap').removeClass('adwrap-railad-sticky');
		$('#slashboxes').removeAttr('style');
	}
});
</script>

<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  _paq.push(["setCookieDomain", "*.slashdot.org"]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
function initPiwikAndNels() {
  (function() {
    var u="//analytics.slashdotmedia.com/";
    _paq.push(['setTrackerUrl', u+'sd.php']);
    _paq.push(['setSiteId', 40]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'sd.js'; s.parentNode.insertBefore(g,s);
  })();

    if(window.location.pathname == '/'){
        var nelId = (location.search.split('nel_id=')[1] || '').split('&')[0];
        var url = '/ajax.pl?op=nel';
        if(nelId){
            url += '&nel_id='+nelId;
        }
        $.ajax({
            url: url,
            type: 'POST',
            success: function(html){
                $('#firehoselist article').eq(1).after(html);
            }
        });
    }
    //announcement NEL
    if(document.getElementById('announcementText')){
      $('#announcementText').hide();
      var hlUrl = '/ajax.pl?op=hl_nel';
      if(nelId){
        hlUrl += '&nel_id='+nelId;
      }
      $.ajax({
        url: hlUrl,
        type: 'POST',
        success: function(html){
          if(html.length < 10){
            $('#announcementText').show();
            return;
          }
          $('#announcementText').html(html).show();
        },
        error: function () {
          $('#announcementText').show();
        }
      });
    }
}
bizx.cmp.ifConsent('', ['storage', 'measurement'], initPiwikAndNels);
</script>


<script type="text/javascript">
_linkedin_data_partner_id = "113712";
</script><script type="text/javascript">
if (window.is_euro_union === 0) {
bizx.cmp.ifConsent('', ['all'], function (){
    (function(){var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})();
    });
}
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=113712&fmt=gif" />
</noscript>

<!-- Datonics -->
<script type="text/javascript">
if (window.is_euro_union === 0) {
    bizx.cmp.ifConsent('', ['all'], function () {
        bizx.cmp.embedScript("//ads.pro-market.net/ads/scripts/site-143573.js", true);
    });
}
</script>
	<script id="after-content" type="text/javascript">
(function( $, fn, console ){
	$ && fn && $(function(){ fn($, console); });
})(window.jQuery, window.pageload_done, window.console);
</script>
	
	<script type='text/javascript'>
	if(!document.location.href.match(/source=autorefresh/)) {
		document.write('<img src="//slashdot.org/images/js.gif?207">');
	}
</script>
<noscript>
	<img src="//slashdot.org/images/njs.gif?913">
</noscript>
	<div class="busy genericspinner hide"><span>Working...</span></div>

	    <script>
            var regular_opt_out_link = true;

            if (bizx.cmp.show_do_not_sell()) {
                regular_opt_out_link = false;
                 document.getElementById('opt-out-button').setAttribute('style', 'display:inline');
            }

            if (window.is_euro_union === 1) {
                regular_opt_out_link = false;
                var elem = '<a href="#" title="Privacy Choices" onclick="bizx.cmp.promptConsent(); return false;">Privacy Choices</a>';
                document.getElementById('opt-out-link').innerHTML = elem;
            }

            if (regular_opt_out_link == true) {
                var elem = '<a href="https://slashdotmedia.com/opt-out-choices" title="Opt Out" rel="nofollow">Opt Out</a>';
                document.getElementById('opt-out-link').innerHTML = elem;
            }
            var cmp_modal = document.getElementById('ccpa-modal');
            var btn = document.getElementById('opt-out-button');
            var span = document.getElementById('modal-close');

            btn.onclick = function() {
            	cmp_modal.style.display = 'block';
            };

            span.onclick = function() {
            	cmp_modal.style.display = 'none';
            };

         </script>

	<script>
		if(typeof(Storage)!=="undefined"){
			window.scrollTo(0,sessionStorage.scrollPos);
				$(window).scroll(function () {
				//You've scrolled this much:
				sessionStorage.scrollPos = $(window).scrollTop();
			});
		}
		$(function(){
			$('a').click(function(){
				delete sessionStorage.scrollPos;
			})
		});
		// window.onbeforeunload = function () {
		// 	console.log('bakc button clicked');
		// 	delete sessionStorage.scrollPos;
		// }
		window.onpopstate=function() {
			delete sessionStorage.scrollPos;
		}
	</script>
	

	

	</body>
	</html>


	<!-- footer type=current end -->