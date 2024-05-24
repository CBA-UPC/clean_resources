(function(){var n,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ca=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},p=ca(this),q=function(a,b){if(b)a:{var c=p;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}};
q("Symbol",function(a){if(a)return a;var b=function(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})};b.prototype.toString=function(){return this.g};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,e=function(f){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(f||"")+"_"+d++,f)};return e});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=p[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});
var da=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},ea=function(a){return a.raw=a},t=function(a,b){a.raw=b;return a},v=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");},fa=function(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},w=function(a,b){return Object.prototype.hasOwnProperty.call(a,
b)},ha="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ia,na=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.I=b.prototype},oa=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b};
q("Promise",function(a){function b(){this.g=null}function c(g){return g instanceof e?g:new e(function(h){h(g)})}if(a)return a;b.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(g)};var d=p.setTimeout;b.prototype.i=function(g){d(g,0)};b.prototype.l=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};b.prototype.j=function(g){this.i(function(){throw g;
})};var e=function(g){this.g=0;this.i=void 0;this.h=[];this.s=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}};e.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:g(this.v),reject:g(this.l)}};e.prototype.v=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof e)this.F(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?
this.D(g):this.m(g)}};e.prototype.D=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.H(h,g):this.m(g)};e.prototype.l=function(g){this.o(2,g)};e.prototype.m=function(g){this.o(1,g)};e.prototype.o=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.C();this.B()};e.prototype.C=function(){var g=this;d(function(){if(g.u()){var h=p.console;"undefined"!==typeof h&&h.error(g.i)}},
1)};e.prototype.u=function(){if(this.s)return!1;var g=p.CustomEvent,h=p.Event,k=p.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=p.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};e.prototype.B=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new b;e.prototype.F=function(g){var h=this.j();g.V(h.resolve,h.reject)};e.prototype.H=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};e.prototype.then=function(g,h){function k(u,B){return"function"==typeof u?function(Ra){try{l(u(Ra))}catch(Sa){m(Sa)}}:B}var l,m,r=new e(function(u,B){l=u;m=B});this.V(k(g,l),k(h,m));return r};e.prototype.catch=function(g){return this.then(void 0,g)};e.prototype.V=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);
break;default:throw Error("Unexpected state: "+l.g);}}var l=this;null==this.h?f.h(k):this.h.push(k);this.s=!0};e.resolve=c;e.reject=function(g){return new e(function(h,k){k(g)})};e.race=function(g){return new e(function(h,k){for(var l=v(g),m=l.next();!m.done;m=l.next())c(m.value).V(h,k)})};e.all=function(g){var h=v(g),k=h.next();return k.done?c([]):new e(function(l,m){function r(Ra){return function(Sa){u[Ra]=Sa;B--;0==B&&l(u)}}var u=[],B=0;do u.push(void 0),B++,c(k.value).V(r(u.length-1),m),k=h.next();
while(!k.done)})};return e});
q("WeakMap",function(a){function b(){}function c(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}function d(k){if(!w(k,f)){var l=new b;ba(k,f,{value:l})}}function e(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof b)return m;Object.isExtensible(m)&&d(m);return l(m)})}if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(r){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0,h=function(k){this.g=(g+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}};h.prototype.set=function(k,l){if(!c(k))throw Error("Invalid WeakMap key");d(k);if(!w(k,f))throw Error("WeakMap key fail: "+k);k[f][this.g]=l;return this};h.prototype.get=function(k){return c(k)&&w(k,f)?k[f][this.g]:void 0};h.prototype.has=function(k){return c(k)&&w(k,f)&&w(k[f],this.g)};
h.prototype.delete=function(k){return c(k)&&w(k,f)&&w(k[f],this.g)?delete k[f][this.g]:!1};return h});
q("Map",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;var b=new WeakMap,c=function(h){this[0]={};this[1]=
f();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}};c.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.A?l.A.value=k:(l.A={next:this[1],G:this[1].G,head:this[1],key:h,value:k},l.list.push(l.A),this[1].G.next=l.A,this[1].G=l.A,this.size++);return this};c.prototype.delete=function(h){h=d(this,h);return h.A&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.A.G.next=h.A.next,h.A.next.G=h.A.G,h.A.head=
null,this.size--,!0):!1};c.prototype.clear=function(){this[0]={};this[1]=this[1].G=f();this.size=0};c.prototype.has=function(h){return!!d(this,h).A};c.prototype.get=function(h){return(h=d(this,h).A)&&h.value};c.prototype.entries=function(){return e(this,function(h){return[h.key,h.value]})};c.prototype.keys=function(){return e(this,function(h){return h.key})};c.prototype.values=function(){return e(this,function(h){return h.value})};c.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=
m.value,h.call(k,m[1],m[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(h,k){var l=k&&typeof k;"object"==l||"function"==l?b.has(k)?l=b.get(k):(l=""+ ++g,b.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&w(h[0],l))for(h=0;h<m.length;h++){var r=m[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:h,A:r}}return{id:l,list:m,index:-1,A:void 0}},e=function(h,k){var l=h[1];return da(function(){if(l){for(;l.head!=h[1];)l=l.G;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};
l=null}return{done:!0,value:void 0}})},f=function(){var h={};return h.G=h.next=h.head=h},g=0;return c});q("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});q("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push(b[d]);return c}});q("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
q("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
q("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(b,c||0)}});
q("Set",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;var b=function(c){this.g=new Map;if(c){c=
v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size};b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};b.prototype.clear=function(){this.g.clear();this.size=0};b.prototype.has=function(c){return this.g.has(c)};b.prototype.entries=function(){return this.g.entries()};b.prototype.values=function(){return this.g.values()};b.prototype.keys=b.prototype.values;
b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};return b});q("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
var pa=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e};q("Array.prototype.entries",function(a){return a?a:function(){return pa(this,function(b,c){return[b,c]})}});q("Array.prototype.keys",function(a){return a?a:function(){return pa(this,function(b){return b})}});
q("Array.prototype.values",function(a){return a?a:function(){return pa(this,function(b,c){return c})}});q("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
q("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var x=this||self,y=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},qa=function(a){var b=y(a);return"array"==b||"object"==b&&"number"==typeof a.length},z=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ra=function(a,b,c){return a.call.apply(a.bind,arguments)},sa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,
d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}},ta=function(a,b,c){ta=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ra:sa;return ta.apply(null,arguments)},ua=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}},A=function(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.eb=function(d,e,f){for(var g=
Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},va=function(a){return a};function C(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}A(C,Error);C.prototype.name="CustomError";function wa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");C.call(this,c+a[d])}A(wa,C);wa.prototype.name="AssertionError";function xa(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new wa(""+e,f||[]);}
var D=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2))},ya=function(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){"number"!==typeof a&&xa("Expected number but got %s: %s.",[y(a),a],b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b,c){Array.isArray(a)||xa("Expected array but got %s: %s.",[y(a),a],b,Array.prototype.slice.call(arguments,2))};var Ba,Ca;a:{for(var Da=["CLOSURE_FLAGS"],Ea=x,Fa=0;Fa<Da.length;Fa++)if(Ea=Ea[Da[Fa]],null==Ea){Ca=null;break a}Ca=Ea}var Ga=Ca&&Ca[610401301];Ba=null!=Ga?Ga:!1;function Ha(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}var Ia,Ja=x.navigator;Ia=Ja?Ja.userAgentData||null:null;function Ka(a){return Ba?Ia?Ia.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function E(a){return-1!=Ha().indexOf(a)};function F(){return Ba?!!Ia&&0<Ia.brands.length:!1}function La(){return F()?Ka("Chromium"):(E("Chrome")||E("CriOS"))&&!(F()?0:E("Edge"))||E("Silk")};var Ma=Array.prototype.indexOf?function(a,b){D(null!=a.length);return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Na=Array.prototype.forEach?function(a,b){D(null!=a.length);Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};
function Oa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Pa=function(a){Pa[" "](a);return a};Pa[" "]=function(){};var Qa=function(a,b){try{return Pa(a[b]),!0}catch(c){}return!1};var Ta=F()?!1:E("Trident")||E("MSIE"),Ua=E("Gecko")&&!(-1!=Ha().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge");!E("Android")||La();La();E("Safari")&&(La()||(F()?0:E("Coast"))||(F()?0:E("Opera"))||(F()?0:E("Edge"))||(F()?Ka("Microsoft Edge"):E("Edg/"))||F()&&Ka("Opera"));D(!0);var Va="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol("INTERNAL_ARRAY_STATE"):void 0;D(13===Math.round(Math.log2(Math.max.apply(Math,fa(Object.values({Oa:1,Ma:2,La:4,Ra:8,Qa:16,Pa:32,ua:64,bb:128,Ka:256,Ja:512,Na:1024,wa:2048,Za:4096,xa:8192}))))));var Wa=Object.getOwnPropertyDescriptor(Array.prototype,"ra");
Object.defineProperties(Array.prototype,{ra:{get:function(){function a(e,f){e&b&&c.push(f)}var b=Xa(this),c=[];a(1,"IS_REPEATED_FIELD");a(2,"IS_IMMUTABLE_ARRAY");a(4,"IS_API_FORMATTED");a(4096,"STRING_FORMATTED");a(8192,"GBIGINT_FORMATTED");a(8,"ONLY_MUTABLE_VALUES");a(32,"MUTABLE_REFERENCES_ARE_OWNED");a(64,"CONSTRUCTED");a(128,"TRANSFERRED");a(256,"HAS_SPARSE_OBJECT");a(512,"HAS_MESSAGE_ID");a(2048,"FROZEN_ARRAY");var d=Ya(b);536870912!==d&&c.push("pivot: "+d);d=c.join(",");return Wa?Wa.get.call(this)+
"|"+d:d},configurable:!0,enumerable:!1}});var Xa=Va?function(a){Aa(a,"state is only maintained on arrays.");return a[Va]|0}:function(a){Aa(a,"state is only maintained on arrays.");return a.aa|0};function Ya(a){a=a>>14&1023;return 0===a?536870912:a};var Za=[];(Va?function(a,b){Aa(a,"state is only maintained on arrays.");D((b&16777215)==b);a[Va]=b}:function(a,b){Aa(a,"state is only maintained on arrays.");D((b&16777215)==b);void 0!==a.aa?a.aa=b:Object.defineProperties(a,{aa:{value:b,configurable:!0,writable:!0,enumerable:!1}})})(Za,55);Object.freeze(Za);var $a="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;Object.freeze(new function(){});Object.freeze(new function(){});var ab=function(){throw Error("please construct maps as mutable then call toImmutable");};if($a){var bb=function(){throw Error("Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information");},cb={};Object.defineProperties(ab,(cb[Symbol.hasInstance]={value:bb,configurable:!1,writable:!1,enumerable:!1},cb));D(ab[Symbol.hasInstance]===bb,"defineProperties did not work: was it monkey-patched?")};if("undefined"!==typeof Proxy){var G=db;new Proxy({},{getPrototypeOf:G,setPrototypeOf:G,isExtensible:G,preventExtensions:G,getOwnPropertyDescriptor:G,defineProperty:G,has:G,get:G,set:G,deleteProperty:G,apply:G,construct:G})}function db(){throw Error("this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array");throw Error();};function eb(){};function fb(a,b){b=void 0===b?new Set:b;if(b.has(a))return"(Recursive reference)";switch(typeof a){case "object":if(a){var c=Object.getPrototypeOf(a);switch(c){case Map.prototype:case Set.prototype:case Array.prototype:b.add(a);var d="["+Array.from(a,function(e){return fb(e,b)}).join(", ")+"]";b.delete(a);c!==Array.prototype&&(d=gb(c.constructor)+"("+d+")");return d;case Object.prototype:return b.add(a),c="{"+Object.entries(a).map(function(e){var f=v(e);e=f.next().value;f=f.next().value;return e+
": "+fb(f,b)}).join(", ")+"}",b.delete(a),c;default:return d="Object",c&&c.constructor&&(d=gb(c.constructor)),"function"===typeof a.toString&&a.toString!==Object.prototype.toString?d+"("+String(a)+")":"(object "+d+")"}}break;case "function":return"function "+gb(a);case "number":if(!Number.isFinite(a))return String(a);break;case "bigint":return a.toString(10)+"n";case "symbol":return a.toString()}return JSON.stringify(a)}
function gb(a){var b=a.name;b||(b=(a=/function\s+([^\(]+)/m.exec(String(a)))?a[1]:"(Anonymous)");return b};function hb(a){var b=ib();a||jb("Guard truthy failed:",b||"Expected truthy, got "+fb(a))}function kb(a,b){a.Y="function"===typeof b?b:function(){return b};return a}function lb(a,b,c,d){var e=a(b,c);if(!e&&c){var f="";d&&(f=("function"===typeof d?d():d).trim(),f.length&&(f+=": "));f+="Expected "+a.Y()+", got "+fb(b);c.push(f)}return e}var mb=void 0;function ib(){var a=mb;mb=void 0;return a}
function jb(){throw Error(oa.apply(0,arguments).map(function(a){return"function"===typeof a?a():a}).filter(function(a){return a}).join("\n").trim().replace(/:$/,""));};(function(){var a=x.jspbGetTypeName;x.jspbGetTypeName=a?function(b){return a(b)||void 0}:eb})();/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ea([""]),ob=t(["\x00"],["\\0"]),pb=t(["\n"],["\\n"]),qb=t(["\x00"],["\\u0000"]),rb=ea([""]),sb=t(["\x00"],["\\0"]),tb=t(["\n"],["\\n"]),ub=t(["\x00"],["\\u0000"]);function vb(a){return Object.isFrozen(a)&&Object.isFrozen(a.raw)}function wb(a){return-1===a.toString().indexOf("`")}var xb=wb(function(a){return a(nb)})||wb(function(a){return a(ob)})||wb(function(a){return a(pb)})||wb(function(a){return a(qb)}),yb=vb(rb)&&vb(sb)&&vb(tb)&&vb(ub);function zb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function Ab(a){for(var b in a)delete a[b]}var Bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Bb.length;f++)c=Bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Db;var Fb=function(a,b){if(b!==Eb)throw Error("TrustedResourceUrl is not meant to be built directly");this.g=a};Fb.prototype.toString=function(){return this.g+""};var Eb={},Gb=function(a){if(void 0===Db){var b=null;var c=x.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:va,createScript:va,createScriptURL:va})}catch(d){x.console&&x.console.error(d.message)}Db=b}else Db=b}a=(b=Db)?b.createScriptURL(a):a;return new Fb(a,Eb)};var H=function(a,b){if(b!==Hb)throw Error("SafeUrl is not meant to be built directly");this.g=a};H.prototype.toString=function(){return this.g.toString()};var Hb={},Ib=new H("about:invalid#zClosurez",Hb);new H("about:blank",Hb);var Jb={},Kb=function(){if(Jb!==Jb)throw Error("SafeStyle is not meant to be built directly");};Kb.prototype.toString=function(){return"".toString()};new Kb;var Lb={},Mb=function(){if(Lb!==Lb)throw Error("SafeStyleSheet is not meant to be built directly");};Mb.prototype.toString=function(){return"".toString()};new Mb;var Nb={},Ob=function(){var a=x.trustedTypes&&x.trustedTypes.emptyHTML||"";if(Nb!==Nb)throw Error("SafeHtml is not meant to be built directly");this.g=a};Ob.prototype.toString=function(){return this.g.toString()};new Ob;var Pb=Object.freeze||function(a){return a};var Qb=function(a,b){this.name=a;this.value=b};Qb.prototype.toString=function(){return this.name};var Rb=new Qb("OFF",Infinity),Sb=new Qb("WARNING",900),Tb=new Qb("CONFIG",700),Ub=function(){this.clear()},Vb;Ub.prototype.clear=function(){};var Wb=function(a,b,c){this.reset(a||Rb,b,c,void 0,void 0)};Wb.prototype.reset=function(){};
var Xb=function(a,b){this.g=null;this.j=[];this.h=(void 0===b?null:b)||null;this.i=[];this.l={g:function(){return a}}},Yb=function(a){if(a.g)return a.g;if(a.h)return Yb(a.h);ya("Root logger has no level set.");return Rb},Zb=function(a,b){for(;a;)a.j.forEach(function(c){c(b)}),a=a.h},$b=function(){this.entries={};var a=new Xb("");a.g=Tb;this.entries[""]=a},ac,bc=function(a,b){var c=a.entries[b];if(c)return c;c=bc(a,b.slice(0,Math.max(b.lastIndexOf("."),0)));var d=new Xb(b,c);a.entries[b]=d;c.i.push(d);
return d},cc=function(){ac||(ac=new $b);return ac};var dc=function(a){this.qa=a};function ec(a){return new dc(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}var fc=[ec("data"),ec("http"),ec("https"),ec("mailto"),ec("ftp"),new dc(function(a){return/^[^:]*([/?#]|$)/.test(a)})],gc="function"===typeof URL,hc=[],ic=function(){};
jc(function(a){var b=bc(cc(),"safevalues").l;if(b){a="A URL with content '"+a+"' was sanitized away.";var c=Sb,d;if(d=b)if(d=b&&c){d=c.value;var e=b?Yb(bc(cc(),b.g())):Rb;d=d>=e.value}d&&(c=c||Rb,d=bc(cc(),b.g()),"function"===typeof a&&(a=a()),Vb||(Vb=new Ub),b=new Wb(c,a,b.g()),Zb(d,b))}});function jc(a){-1===hc.indexOf(a)&&hc.push(a);ic=function(b){hc.forEach(function(c){c(b)})}};function kc(a){var b=oa.apply(1,arguments);if(!Array.isArray(a)||!Array.isArray(a.raw)||a.length!==a.raw.length||!xb&&a===a.raw||!(xb&&!yb||vb(a))||b.length+1!==a.length)throw new TypeError("\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################");
if(0===b.length)return Gb(a[0]);var c=a[0].toLowerCase();if(/^data:/.test(c))throw Error("Data URLs cannot have expressions in the template literal input.");if(/^https:\/\//.test(c)||/^\/\//.test(c)){var d=c.indexOf("//")+2;var e=c.indexOf("/",d);if(e<=d)throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");d=c.substring(d,e);if(!/^[0-9a-z.:-]+$/i.test(d))throw Error("The origin contains unsupported characters.");if(!/^[^:]*(:[0-9]+)?$/i.test(d))throw Error("Invalid port number.");
if(!/(^|\.)[a-z][^.]*$/i.test(d))throw Error("The top-level domain must start with a letter.");d=!0}else d=!1;if(!d)if(/^\//.test(c))if("/"===c||1<c.length&&"/"!==c[1]&&"\\"!==c[1])d=!0;else throw Error("The path start in the url is invalid.");else d=!1;if(!(d=d||RegExp("^[^:\\s\\\\/]+/").test(c)))if(/^about:blank/.test(c)){if("about:blank"!==c&&!/^about:blank#/.test(c))throw Error("The about url is invalid.");d=!0}else d=!1;if(!d)throw Error("Trying to interpolate expressions in an unsupported url format.");
c=a[0];for(d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Gb(c)};var lc=/^((market|itms|intent|itms-appss):\/\/)/i;var mc=function(a){var b=0,c=!1,d=[],e=function(){b=0;c&&(c=!1,f())},f=function(){b=x.setTimeout(e,1E3);var g=d;d=[];a.apply(void 0,g)};return function(g){d=arguments;b?c=!0:f()}};var nc=function(a){return null==a?"":String(a)};function oc(a,b){b instanceof Fb&&b.constructor===Fb?b=b.g:(ya("expected object of type TrustedResourceUrl, got '%s' of type %s",b,y(b)),b="type_error:TrustedResourceUrl");a.src=b;var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var pc=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};var qc=[];var sc=function(a,b){zb(b,function(c,d){"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:rc.hasOwnProperty(d)?a.setAttribute(rc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})},rc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},uc=function(a,
b,c){var d=arguments,e=document,f=d[1];var g=String(d[0]);g=String(g);"application/xhtml+xml"===e.contentType&&(g=g.toLowerCase());g=e.createElement(g);f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):sc(g,f));2<d.length&&tc(e,g,d);return g},tc=function(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(var e=2;e<c.length;e++){var f=c[e];if(!qa(f)||z(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(z(f)){var g="function"==
typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}Na(g?Oa(f):f,d)}}};var vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),wc=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var xc=function(a){try{return!!a&&null!=a.location.href&&Qa(a,"foo")}catch(b){return!1}},yc=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)},zc=function(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function Ac(a){a=void 0===a?x:a;var b=a.context||a.AMP_CONTEXT_DATA;if(!b)try{b=a.parent.context||a.parent.AMP_CONTEXT_DATA}catch(e){}var c,d;return(null==(c=b)?0:c.pageViewId)&&(null==(d=b)?0:d.canonicalUrl)?b:null};var Bc=function(){this.S={}},Cc=function(){var a=Ac(window);if(a){if(a){var b=a.pageViewId;a=a.clientId;"string"===typeof a&&(b+=a.replace(/\D/g,"").substr(0,6))}else b=null;return+b}for(a=b=window;b&&b!=b.parent;)b=b.parent,xc(b)&&(a=b);b=a;a=b.google_global_correlator;a||(b.google_global_correlator=a=1+Math.floor(Math.random()*Math.pow(2,43)));return a},Ec=function(a,b){var c=Dc[7]||"google_ps_7";a=a.S;var d=a[c];return void 0===d?(a[c]=b(),a[c]):d},Fc=function(a){var b=Cc();return Ec(a,function(){return b})},
Gc=null,Hc={},Dc=(Hc[8]="google_prev_ad_formats_by_region",Hc[9]="google_prev_ad_slotnames_by_region",Hc);var Ic=kb(function(a){return"string"===typeof a},"string"),Jc=kb(function(a){return Array.isArray(a)},"Array<unknown>");function Kc(){return kb(function(a,b){return lb(Jc,a,b)?a.every(function(c,d){return lb(Ic,c,b,"At index "+d)}):!1},function(){return"Array<"+Ic.Y()+">"})};var Lc=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var Mc=ea(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),Nc=function(){var a=void 0===a?"jserror":a;var b=void 0===b?.01:b;var c=void 0===c?kc(Mc):c;this.i=a;this.h=b;this.g=c};var Oc=function(a){var b;a.visibilityState?b="visibilitychange":a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState&&(b="webkitvisibilitychange");return b};var Pc=null;function Qc(){var a=void 0===a?x:a;return(a=a.performance)&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Rc(){var a=void 0===a?x:a;return(a=a.performance)&&a.now?a.now():null};var Sc=function(a,b,c,d){this.label=a;this.type=b;this.value=c;this.duration=void 0===d?0:d;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()};var I=x.performance,Tc=!!(I&&I.mark&&I.measure&&I.clearMarks),Uc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=Tc){var b;if(null===Pc){Pc="";try{a="";try{a=x.top.location.hash}catch(c){a=x.location.hash}a&&(Pc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Pc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}),J=function(a,b){this.l=[];this.g=b||x;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.l=b.google_js_reporting_queue,
c=b.google_measure_js_timing);this.m=Uc()||(null!=c?c:Math.random()<a)};J.prototype.D=function(){this.m=!1;this.l!=this.g.google_js_reporting_queue&&(Uc()&&Na(this.l,Vc),this.l.length=0)};J.prototype.B=function(a){!this.m||2048<this.l.length||this.l.push(a)};var Vc=function(a){a&&I&&Uc()&&(I.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),I.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))};
J.prototype.start=function(a,b){if(!this.m)return null;a=new Sc(a,b,Rc()||Qc());b="goog_"+a.label+"_"+a.uniqueId+"_start";I&&Uc()&&I.mark(b);return a};J.prototype.end=function(a){if(this.m&&(D(a),"number"===typeof a.value)){a.duration=(Rc()||Qc())-a.value;var b="goog_"+a.label+"_"+a.uniqueId+"_end";I&&Uc()&&I.mark(b);this.B(a)}};var Wc=function(a){a=a._google_rum_ns_=a._google_rum_ns_||{};return a.pq=a.pq||[]};function Xc(a){a=null===a?"null":void 0===a?"undefined":a;if("string"!==typeof a)throw Error("Expected a string");return Gb(a)};function Yc(a,b,c){yc(b,function(d,e){var f=c&&c[e];!d&&0!==d||f||(a+="&"+encodeURIComponent(e)+"="+encodeURIComponent(String(d)),c&&(c[e]=!0))});return a}
var ad=function(a,b,c,d,e,f,g,h){f=void 0===f?Infinity:f;g=void 0===g?!1:g;J.call(this,a,h);var k=this;this.H=b;this.v=c;this.s=d;this.M=e;this.o=0;this.j={};this.F={};this.P=[];this.report={};this.h=0;this.C=[];this.J=f;this.H=b;this.v=c;this.s=d;this.M=e;a=this.g.navigator;this.N=!("csi.gstatic.com"!==this.v||!a||!a.sendBeacon);this.g.performance&&this.g.performance.now||K(this,"dat",1);a&&a.deviceMemory&&K(this,"dmc",a.deviceMemory);this.g===this.g.top&&K(this,"top",1);this.R=!g;this.K=function(){k.g.setTimeout(function(){L(k)},
1100)};this.L=function(){K(k,"uet",2);for(var m=v(k.P),r=m.next();!r.done;r=m.next()){r=r.value;try{r()}catch(B){}}m=k.g;var u=void 0===u?{}:u;"function"===typeof window.CustomEvent?r=new CustomEvent("rum_blp",u):(r=document.createEvent("CustomEvent"),r.initCustomEvent("rum_blp",!!u.bubbles,!!u.cancelable,u.detail));m.dispatchEvent(r);L(k);null!=k.j.uet&&(k.i-=3+k.j.uet.length+2,delete k.j.uet)};this.T=mc(function(){L(k)});this.X=function(){var m=k.g.document;(null!=m.hidden?m.hidden:null!=m.mozHidden?
m.mozHidden:null!=m.webkitHidden&&m.webkitHidden)&&k.T()};this.u=this.g.setTimeout(function(){L(k)},5E3);this.i=b.length+c.length+d.length+e.length+3;Na(this.l,function(m){Zc(k,m)});b=Wc(this.g);var l=function(){var m=oa.apply(0,arguments)[0],r=Kc(),u=ib(),B=[];lb(r,m,B)||jb.apply(null,[void 0,u,"Guard "+r.Y()+" failed:"].concat(fa(B.reverse())));hb(2===m.length);r=m[0];m=m[1];u=r.length+m.length+2;8E3<k.i+k.h+u&&L(k);k.C.push([r,m]);k.h+=u;6E3<=k.i+k.h&&L(k);return 0};Na(b,function(m){return l(m)});
b.length=0;b.push=l;K(this,"puid",(this.o+1).toString(36)+"~"+Date.now().toString(36));$c(this)};na(ad,J);
var $c=function(a){"complete"===a.g.document.readyState?a.g.setTimeout(function(){L(a)},0):pc(a.g,"load",a.K);var b=Oc(a.g.document);"undefined"!==typeof b&&pc(a.g,b,a.X);pc(a.g,"pagehide",a.L)},K=function(a,b,c){c=String(c);a.i=null!=a.j[b]?a.i+(c.length-a.j[b].length):a.i+(b.length+c.length+2);a.j[b]=c},cd=function(a,b,c){var d=b+"="+c;a.F[d]||(bd(a,b,c,!1),1E3>d.length&&(a.F[d]=!0))},bd=function(a,b,c,d,e){e=void 0===e?"":e;var f=null==a.report[b]?b.length+c.length+2:d?c.length+(void 0===e?"":
e).length:c.length-a.report[b].length;8E3<a.i+a.h+f&&(L(a),f=b.length+c.length+2);a.report[b]=d&&null!=a.report[b]?a.report[b]+(""+(void 0===e?"":e)+c):c;a.h+=f;6E3<=a.i+a.h&&L(a)},L=function(a){if(a.m&&a.R){try{a.h&&(a.sendBeacon(a.report),a.o===a.J&&a.D())}catch(f){var b=new Nc,c=f;var d=void 0===d?b.h:d;var e=void 0===e?b.i:e;Math.random()>d||(c.error&&c.meta&&c.id||(c=new Lc(c,{context:358,id:e})),x.google_js_errors=x.google_js_errors||[],x.google_js_errors.push(c),x.error_rep_loaded||(d=x.document,
c=zc("SCRIPT",d),oc(c,b.g),(b=d.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(c,b),x.error_rep_loaded=!0))}a.report={};a.h=0;a.l.length=0;a.g.clearTimeout(a.u);a.u=0}},dd=function(a,b){hb(2===a.s.split("?").length);hb("="===a.s[a.s.length-1]);var c=a.H+"//"+a.v+a.s+a.M,d={};c=Yc(c,a.j,d);c=Yc(c,b,d);b=a.g;b.google_timing_params&&(c=Yc(c,b.google_timing_params,d),b.google_timing_params=void 0);Na(a.C,function(e){hb(2===e.length);var f=v(e);e=f.next().value;f=f.next().value;
var g={};c=Yc(c,(g[e]=f,g))});a.C.length=0;return c};ad.prototype.sendBeacon=function(a){this.o++;a=dd(this,a);var b=!1;try{b=!!(this.N&&this.g.navigator&&this.g.navigator.sendBeacon(a,null))}catch(d){this.N=!1}if(!b){b=this.g;b.google_image_requests||(b.google_image_requests=[]);var c=zc("IMG",b.document);c.src=a;b.google_image_requests.push(c)}K(this,"puid",(this.o+1).toString(36)+"~"+Date.now().toString(36))};
var Zc=function(a,b){var c="met."+b.type,d="number"===typeof b.value?Math.round(b.value).toString(36):b.value,e=Math.round(b.duration);b=""+b.label+(null!=b.slotId?"_"+b.slotId:"")+("."+d)+(0<e?"_"+e.toString(36):"")+(null!=b.taskId?"__"+Math.round(b.taskId).toString(36):"");bd(a,c,b,!0,"~")};ad.prototype.B=function(a){this.m&&this.o<this.J&&(J.prototype.B.call(this,a),Zc(this,a))};
ad.prototype.D=function(){J.prototype.D.call(this);this.g.clearTimeout(this.u);this.h=this.u=0;this.report={};Ab(this.F);Ab(this.j);var a=this.g;a.removeEventListener&&a.removeEventListener("load",this.K,!1);a=this.g;a.removeEventListener&&a.removeEventListener("pagehide",this.L,!1)};var M=function(){this.g=new ad(1,"https:","csi.gstatic.com","/csi?v=2&s=","ima",void 0,!0);if(Gc)var a=Gc;else{a=((a=void 0===a?Ac():a)?xc(a.master)?a.master:null:null)||window;var b=a.google_persistent_state_async;a=null!=b&&"object"==typeof b&&null!=b.S&&"object"==typeof b.S?Gc=b:a.google_persistent_state_async=Gc=new Bc}a=Fc(a);null!=a&&K(this.g,"c",a);a=parseInt(this.g.j.c,10)/2;null!=a&&K(this.g,"slotId",a);bc(cc(),"google3.javascript.ads.imalib.instrumentation.instrumentation")};
M.prototype.recordClick=function(a,b,c,d){for(var e=!1,f="notag";void 0!=d&&d!=document.documentElement;){var g=void 0,h=void 0;if((null==(g=d)?0:g.getAttribute("data-ck-navigates"))||(null==(h=d)?0:h.getAttribute("data-ck-tag"))){g=f=void 0;e=null!=(g=null==(f=d)?void 0:f.getAttribute("data-ck-navigates"))?g:!1;h=g=void 0;f=null!=(h=null==(g=d)?void 0:g.getAttribute("data-ck-tag"))?h:"notag";break}g=void 0;d=null!=(g=d.parentElement)?g:void 0}d=this.g;g=Qc();d.m&&d.B(new Sc(a+"_"+b+"x"+c+"|"+e+"|"+
f,4,g,0))};var ed=function(){D(!Object.isSealed(M),"Cannot use getInstance() with a sealed constructor.");var a="Z";if(M.Z&&M.hasOwnProperty(a))a=M.Z;else{qc.push(M);var b=new M;M.Z=b;D(M.hasOwnProperty(a),"Could not instantiate singleton.");a=b}return a};var fd=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{var c=function(){};x.addEventListener("test",c,b);x.removeEventListener("test",c,b)}catch(d){}return a}();function gd(a,b){if("undefined"!==typeof ReportingObserver){var c=function(e){e=v(e);for(var f=e.next();!f.done;f=e.next())f=f.value,a(f)&&b(f)},d=new ReportingObserver(c,{buffered:!0});x.addEventListener("pagehide",function(){c(d.takeRecords(),d);d.disconnect()});d.observe()}}function hd(a){gd(function(b){return b.body&&"HeavyAdIntervention"===b.body.id},a)}
function id(a){hd(function(b){b=b.body.message;b.includes("CPU")?a("heavy_ad_intervention_cpu"):b.includes("network")&&a("heavy_ad_intervention_network")})}function jd(a){a=void 0===a?null:a;gd(function(b){return b.body&&"HeavyAdIntervention"===b.body.id},function(b){var c=b.body.message,d=ed();null!=c&&cd(d.g,"ham",c);c.includes("CPU")?cd(d.g,"hacpu","true"):c.includes("network")&&cd(d.g,"habytes","true");a&&a(b)})};var kd={ta:"collapseAd",va:"expandAd",ya:"getAdIcons",za:"getAdCompanions",Aa:"getAdDuration",Ba:"getAdExpanded",Ca:"getAdHeight",Da:"getAdLinear",Ea:"getAdRemainingTime",Fa:"getAdSkippableState",Ga:"getAdVolume",Ha:"getAdWidth",Ia:"handshakeVersion",INIT:"initAd",Sa:"pauseAd",Ta:"resizeAd",Ua:"resumeAd",Wa:"skipAd",Xa:"startAd",Va:"setAdVolume",Ya:"stopAd",ab:"subscribe",cb:"unsubscribe"};var ld=function(a,b,c,d){this.m=a;this.g=b;this.j=c;this.l=d;this.h=new Map;this.i=!1},md=function(a){N(a,a.fa,"AdClickThru");N(a,a.ga,"AdDurationChange");N(a,a.ha,"AdError");N(a,a.ia,"AdExpandedChange");N(a,function(){return O(a,"AdImpression")},"AdImpression");N(a,a.ja,"AdInteraction");N(a,a.ka,"AdLinearChange");N(a,a.la,"AdLoaded");N(a,a.ma,"AdLog");N(a,function(){return O(a,"AdPaused")},"AdPaused");N(a,function(){return O(a,"AdPlaying")},"AdPlaying");N(a,a.na,"AdRemainingTimeChange");N(a,function(){return O(a,
"AdSizeChange")},"AdSizeChange");N(a,function(){return O(a,"AdSkipped")},"AdSkipped");N(a,function(){return O(a,"AdStarted")},"AdStarted");N(a,a.oa,"AdStopped");N(a,function(){return O(a,"AdSkippableStateChange")},"AdSkippableStateChange");N(a,function(){return O(a,"AdUserAcceptInvitation")},"AdUserAcceptInvitation");N(a,function(){return O(a,"AdUserClose")},"AdUserClose");N(a,function(){return O(a,"AdUserMinimize")},"AdUserMinimize");N(a,function(){return O(a,"AdVideoComplete")},"AdVideoComplete");
N(a,function(){return O(a,"AdVideoFirstQuartile")},"AdVideoFirstQuartile");N(a,function(){return O(a,"AdVideoMidpoint")},"AdVideoMidpoint");N(a,function(){return O(a,"AdVideoStart")},"AdVideoStart");N(a,function(){return O(a,"AdVideoThirdQuartile")},"AdVideoThirdQuartile");N(a,a.pa,"AdVolumeChange");N(a,a.sa,"Ping")};n=ld.prototype;
n.fa=function(a,b,c){var d=null;/^[\s\xa0]*$/.test(nc(a))?/^[\s\xa0]*$/.test(nc(this.j))||(d=this.j):d=a;if(c&&null!=d&&(a=d,c=this.l,c=null!=c?c:"",Ta&&(c=""),!/^[\s\xa0]*$/.test(nc(a)))){var e;a instanceof H||!lc.test(a)?e=a:e=new H(a,Hb);if(e instanceof H)var f=e;else{f=void 0===f?fc:f;a:if(f=void 0===f?fc:f,a instanceof H)f=a;else{for(e=0;e<f.length;++e){var g=f[e];if(g instanceof dc&&g.qa(a)){f=new H(a,Hb);break a}}f=void 0}void 0===f&&ic(a.toString());f=f||Ib}a=c;c=window;if(f instanceof H)if(f instanceof
H&&f.constructor===H)var h=f.g;else ya("expected object of type SafeUrl, got '"+f+"' of type "+y(f)),h="type_error:SafeUrl";else{b:if(gc){try{h=new URL(f)}catch(k){h="https:";break b}h=h.protocol}else c:{h=document.createElement("a");try{h.href=f}catch(k){h=void 0;break c}h=h.protocol;h=":"===h||""===h?"https:":h}"javascript:"===h?(ic(f),h=void 0):h=f}void 0!==h&&c.open(h,"_blank",a)}O(this,"AdClickThru",{url:d,id:b})};
n.ga=function(){var a=this.g.getAdDuration(),b=this.g.getAdRemainingTime();O(this,"AdDurationChange",{duration:a,remainingTime:b})};n.ha=function(a){O(this,"AdError",{message:a})};n.ia=function(){var a={};a.expanded=this.g.getAdExpanded();O(this,"AdExpandedChange",a)};n.ja=function(a){O(this,"AdInteraction",{id:a})};n.ka=function(){var a={};a.isLinear=this.g.getAdLinear();O(this,"AdLinearChange",a)};
n.la=function(){var a={companions:"function"===typeof this.g.getAdCompanions?this.g.getAdCompanions():""};O(this,"AdLoaded",a)};n.ma=function(a){O(this,"AdLog",{message:a})};n.na=function(){var a={remainingTime:this.g.getAdRemainingTime()};O(this,"AdRemainingTimeChange",a)};
n.oa=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next()){var c=v(b.value);b=c.next().value;c=c.next().value;if(this.g){try{this.g.unsubscribe(c,b)}catch(d){}try{this.g.unsubscribe(b,c)}catch(d){}}}this.h.clear();O(this,"AdStopped");this.i=!0};n.pa=function(){var a={volume:this.g.getAdVolume()};O(this,"AdVolumeChange",a)};n.sa=function(a){O(this,"Ping",{url:a})};
var N=function(a,b,c){a.h.set(c,b.bind(a));a.g.subscribe(b.bind(a),c)},O=function(a,b,c){c=void 0===c?{}:c;a.i||(a={type:b,session:a.m},Cb(a,c),window.parent!=window&&window.parent.postMessage(JSON.stringify(a),"*"))};function nd(a){a&&"function"==typeof a.ba&&a.ba()};var P=function(){this.D=this.D;this.B=this.B};P.prototype.D=!1;P.prototype.ba=function(){this.D||(this.D=!0,this.s())};P.prototype.s=function(){if(this.B)for(;this.B.length;)this.B.shift()()};var Q=function(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=!1};Q.prototype.h=function(){this.defaultPrevented=!0};var pd=function(a,b){Q.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;(b=a.relatedTarget)?Ua&&(Qa(b,"nodeName")||(b=null)):"mouseover"==c?b=a.fromElement:
"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=
a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:od[a.pointerType]||"";this.state=a.state;this.i=a;a.defaultPrevented&&pd.I.h.call(this)}};A(pd,Q);var od=Pb({2:"touch",3:"pen",4:"mouse"});pd.prototype.h=function(){pd.I.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var qd="closure_listenable_"+(1E6*Math.random()|0);var rd=0;var sd=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.W=e;this.key=++rd;this.O=this.U=!1},td=function(a){a.O=!0;a.listener=null;a.proxy=null;a.src=null;a.W=null};var ud=function(a){this.src=a;this.g={};this.h=0};ud.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.h++);var g=vd(a,b,d,e);-1<g?(b=a[g],c||(b.U=!1)):(b=new sd(b,this.src,f,!!d,e),b.U=c,a.push(b));return b};
var wd=function(a,b){var c=b.type;if(c in a.g){var d=a.g[c],e=Ma(d,b),f;if(f=0<=e)D(null!=d.length),Array.prototype.splice.call(d,e,1);f&&(td(b),0==a.g[c].length&&(delete a.g[c],a.h--))}},vd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.O&&f.listener==b&&f.capture==!!c&&f.W==d)return e}return-1};var xd="closure_lm_"+(1E6*Math.random()|0),yd={},zd=0,Bd=function(a,b,c,d,e){if(d&&d.once)return Ad(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)Bd(a,b[f],c,d,e);return null}c=Cd(c);a&&a[qd]?(d=z(d)?!!d.capture:!!d,Dd(a),a=a.h.add(String(b),c,!1,d,e)):a=Ed(a,b,c,!1,d,e);return a},Ed=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=z(e)?!!e.capture:!!e,h=Fd(a);h||(a[xd]=h=new ud(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=Gd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)fd||
(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Hd(b.toString()),d);else if(a.addListener&&a.removeListener)D("change"===b,"MediaQueryList only has a change event"),a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");zd++;return c},Gd=function(){var a=Id,b=function(c){return a.call(b.src,b.listener,c)};return b},Ad=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Ad(a,b[f],c,d,e);return null}c=
Cd(c);return a&&a[qd]?a.h.add(String(b),c,!0,z(d)?!!d.capture:!!d,e):Ed(a,b,c,!0,d,e)},Jd=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Jd(a,b[f],c,d,e);else(d=z(d)?!!d.capture:!!d,c=Cd(c),a&&a[qd])?(a=a.h,b=String(b).toString(),b in a.g&&(f=a.g[b],c=vd(f,c,d,e),-1<c&&(td(f[c]),D(null!=f.length),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.g[b],a.h--)))):a&&(a=Fd(a))&&(b=a.g[b.toString()],a=-1,b&&(a=vd(b,c,d,e)),(c=-1<a?b[a]:null)&&Kd(c))},Kd=function(a){if("number"!==
typeof a&&a&&!a.O){var b=a.src;if(b&&b[qd])wd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Hd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);zd--;(c=Fd(b))?(wd(c,a),0==c.h&&(c.src=null,b[xd]=null)):td(a)}}},Hd=function(a){return a in yd?yd[a]:yd[a]="on"+a},Id=function(a,b){if(a.O)a=!0;else{b=new pd(b,this);var c=a.listener,d=a.W||a.src;a.U&&Kd(a);a=c.call(d,b)}return a},Fd=function(a){a=a[xd];return a instanceof
ud?a:null},Ld="__closure_events_fn_"+(1E9*Math.random()>>>0),Cd=function(a){D(a,"Listener can not be null.");if("function"===typeof a)return a;D(a.handleEvent,"An object listener must have handleEvent method.");a[Ld]||(a[Ld]=function(b){return a.handleEvent(b)});return a[Ld]};var R=function(){P.call(this);this.h=new ud(this);this.F=this;this.m=null};A(R,P);R.prototype[qd]=!0;R.prototype.addEventListener=function(a,b,c,d){Bd(this,a,b,c,d)};R.prototype.removeEventListener=function(a,b,c,d){Jd(this,a,b,c,d)};
var Nd=function(a,b){Dd(a);var c=a.m;if(c){var d=[];for(var e=1;c;c=c.m)d.push(c),D(1E3>++e,"infinite loop")}a=a.F;c=b.type||b;"string"===typeof b?b=new Q(b,a):b instanceof Q?b.target=b.target||a:(e=b,b=new Q(c,a),Cb(b,e));e=!0;if(d)for(var f=d.length-1;0<=f;f--){var g=b.g=d[f];e=Md(g,c,!0,b)&&e}g=b.g=a;e=Md(g,c,!0,b)&&e;e=Md(g,c,!1,b)&&e;if(d)for(f=0;f<d.length;f++)g=b.g=d[f],e=Md(g,c,!1,b)&&e};
R.prototype.s=function(){R.I.s.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.g){for(var d=a.g[c],e=0;e<d.length;e++)++b,td(d[e]);delete a.g[c];a.h--}}this.m=null};var Md=function(a,b,c,d){b=a.h.g[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.O&&g.capture==c){var h=g.listener,k=g.W||g.src;g.U&&wd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented},Dd=function(a){D(a.h,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var S=function(){R.call(this);this.duration=this.currentTime=0;this.type=this.src="";this.playbackRate=1;this.ended=!1;this.paused=!0;this.l=[];this.g="";this.i=this.j=null};na(S,R);S.prototype.load=function(){Od({type:"videoCall",func:"load",src:this.src,mimetype:this.type,session:this.g})};S.prototype.v=function(){var a=this;this.paused=!1;Od({type:"videoCall",func:"play",src:this.src,mimetype:this.type,session:this.g});return new Promise(function(b,c){a.j=b;a.i=c})};
S.prototype.u=function(){this.paused=!0;Od({type:"videoCall",func:"pause",session:this.g})};var Od=function(a){window.parent!=window&&window.parent.postMessage(JSON.stringify(a),"*")};S.prototype.o=function(a){return this.l.includes(a)?"maybe":""};S.prototype.C=function(a,b){switch(a){case "currentTime":if("number"!==typeof b)break;this.currentTime=b;Od({type:"videoCall",func:"currentTime",currentTime:b,session:this.g});break;case "src":this.src=b;break;case "type":this.type=b}};
S.prototype.removeEventListener=function(a,b,c,d){null!=b&&Jd(this,a,b,c,d)};S.prototype.removeEventListener=S.prototype.removeEventListener;S.prototype.addEventListener=S.prototype.addEventListener;S.prototype.canPlayType=S.prototype.o;S.prototype.load=S.prototype.load;S.prototype.pause=S.prototype.u;S.prototype.play=S.prototype.v;S.prototype.setAttribute=S.prototype.C;var T=function(a){P.call(this);this.ca=a;this.C={}};A(T,P);var Pd=[],Qd=function(a,b,c,d){Array.isArray(c)||(c&&(Pd[0]=c.toString()),c=Pd);for(var e=0;e<c.length;e++){var f=Bd(b,c[e],d||a.handleEvent,!1,a.ca||a);if(!f)break;a.C[f.key]=f}},Rd=function(a){zb(a.C,function(b,c){this.C.hasOwnProperty(c)&&Kd(b)},a);a.C={}};T.prototype.s=function(){T.I.s.call(this);Rd(this)};T.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var U=function(a,b){R.call(this);this.l=a||1;this.i=b||x;this.o=ta(this.v,this);this.u=Date.now()};A(U,R);U.prototype.j=!1;U.prototype.g=null;U.prototype.v=function(){if(this.j){var a=Date.now()-this.u;0<a&&a<.8*this.l?this.g=this.i.setTimeout(this.o,this.l-a):(this.g&&(this.i.clearTimeout(this.g),this.g=null),Nd(this,"tick"),this.j&&(Sd(this),this.start()))}};U.prototype.start=function(){this.j=!0;this.g||(this.g=this.i.setTimeout(this.o,this.l),this.u=Date.now())};
var Sd=function(a){a.j=!1;a.g&&(a.i.clearTimeout(a.g),a.g=null)};U.prototype.s=function(){U.I.s.call(this);Sd(this);delete this.i};var Td=function(a){this.h=this.s=this.j="";this.o=null;this.m=this.g="";this.l=!1;var b;a instanceof Td?(this.l=a.l,Ud(this,a.j),this.s=a.s,this.h=a.h,Vd(this,a.o),this.g=a.g,Wd(this,Xd(a.i)),this.m=a.m):a&&(b=String(a).match(vc))?(this.l=!1,Ud(this,b[1]||"",!0),this.s=V(b[2]||""),this.h=V(b[3]||"",!0),Vd(this,b[4]),this.g=V(b[5]||"",!0),Wd(this,b[6]||"",!0),this.m=V(b[7]||"")):(this.l=!1,this.i=new W(null,this.l))};
Td.prototype.toString=function(){var a=[],b=this.j;b&&a.push(Yd(b,Zd,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.s)&&a.push(Yd(b,Zd,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.o,null!=c&&a.push(":",String(c));if(c=this.g)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(Yd(c,"/"==c.charAt(0)?$d:ae,!0));(c=this.i.toString())&&a.push("?",c);(c=this.m)&&a.push("#",Yd(c,be));return a.join("")};
Td.prototype.resolve=function(a){var b=new Td(this),c=!!a.j;c?Ud(b,a.j):c=!!a.s;c?b.s=a.s:c=!!a.h;c?b.h=a.h:c=null!=a.o;var d=a.g;if(c)Vd(b,a.o);else if(c=!!a.g){if("/"!=d.charAt(0))if(this.h&&!this.g)d="/"+d;else{var e=b.g.lastIndexOf("/");-1!=e&&(d=b.g.slice(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.g=d:c=""!==a.i.toString();c?Wd(b,Xd(a.i)):c=!!a.m;c&&(b.m=a.m);return b};
var Ud=function(a,b,c){a.j=c?V(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))},Vd=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.o=b}else a.o=null},Wd=function(a,b,c){b instanceof W?(a.i=b,ce(a.i,a.l)):(c||(b=Yd(b,de)),a.i=new W(b,a.l))},ee=function(){var a=new Td(window.location.href);return V(a.i.toString())},V=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Yd=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,
fe),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},fe=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Zd=/[#\/\?@]/g,ae=/[#\?:]/g,$d=/[#\?]/g,de=/[#\?@]/g,be=/#/g,W=function(a,b){this.h=this.g=null;this.i=a||null;this.j=!!b},X=function(a){a.g||(a.g=new Map,a.h=0,a.i&&wc(a.i,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))};
W.prototype.add=function(a,b){X(this);this.i=null;a=Y(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.h=za(this.h)+1;return this};var ge=function(a,b){X(a);b=Y(a,b);a.g.has(b)&&(a.i=null,a.h=za(a.h)-a.g.get(b).length,a.g.delete(b))};W.prototype.clear=function(){this.g=this.i=null;this.h=0};var he=function(a,b){X(a);b=Y(a,b);return a.g.has(b)};W.prototype.forEach=function(a,b){X(this);this.g.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
var ie=function(a,b){X(a);var c=[];if("string"===typeof b)he(a,b)&&(c=c.concat(a.g.get(Y(a,b))));else for(a=Array.from(a.g.values()),b=0;b<a.length;b++)c=c.concat(a[b]);return c};W.prototype.set=function(a,b){X(this);this.i=null;a=Y(this,a);he(this,a)&&(this.h=za(this.h)-this.g.get(a).length);this.g.set(a,[b]);this.h=za(this.h)+1;return this};W.prototype.get=function(a,b){if(!a)return b;a=ie(this,a);return 0<a.length?String(a[0]):b};
W.prototype.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var a=[],b=Array.from(this.g.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=ie(this,d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.i=a.join("&")};
var Xd=function(a){var b=new W;b.i=a.i;a.g&&(b.g=new Map(a.g),b.h=a.h);return b},Y=function(a,b){b=String(b);a.j&&(b=b.toLowerCase());return b},ce=function(a,b){b&&!a.j&&(X(a),a.i=null,a.g.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(ge(this,d),ge(this,e),0<c.length&&(this.i=null,this.g.set(Y(this,e),Oa(c)),this.h=za(this.h)+c.length))},a));a.j=b};var Z=function(a,b){a=void 0===a?!1:a;b=void 0===b?null:b;T.call(this);this.X=a;this.g=null;this.H="";this.N=-2;this.u=this.K="";this.T=null;this.F=new S;this.h=this.m=null;this.R=[];this.J=this.L="";this.j=this.i=0;this.l=null!=b;this.v=null;this.l?Qd(this,window.parent,"message",this.P):Qd(this,window,"message",this.P);null!=b&&(this.l=!0,this.u=b,je(this,"friendlyReady"))};na(Z,T);Z.prototype.da=function(a,b){this.m=a;this.h=b};
var ke=function(a,b){id(function(d){var e={};d=(e.heavyAdInterventionEventType=d,e);je(a,"heavyAdIntervention",d)});jd(function(d){a.o(Error(d.body.message));d=ed();cd(d.g,"havl","1")});a.L=b.clickThroughUrl;a.J=b.attributionParams;a.H=b.viewMode;a.N=b.desiredBitrate;a.K=b.creativeData;if(a.X)a.M();else{var c=a.l?b.adUrl:ee();a.l&&a.m&&(a.m.volume=b.volume);b=uc("SCRIPT",{type:"text/javascript"});oc(b,Xc(c));Qd(a,b,"load",a.M);Qd(a,b,"error",a.o);window.document.body.appendChild(b)}},je=function(a,
b,c){c=void 0===c?{}:c;window.parent!=window&&(c.type=b,c.session=a.u,a=JSON.stringify(c),window.parent.postMessage(a,"*"))};
Z.prototype.P=function(a){try{var b=JSON.parse(a.i.data)}catch(d){return}a=b.type;var c=b.session;if(!this.l&&"initAd"==a)this.u=c,this.F.g=this.u;else if(this.u!=c)return;switch(a){case "wrapperCall":a:{a=this.F;c=b.messageType;switch(c){case "ended":a.ended=!0;break;case "pause":a.paused=!0;break;case "play":a.paused=!1;a.ended=!1;break;case "playing":null!=a.j&&(a.j(),a.i=null,a.j=null);a.paused=!1;a.ended=!1;break;case "supportedMimeTypes":a.l=b.supportedMimeTypes;break a;case "timeupdate":a.duration=
b.duration;a.currentTime=b.currentTime;break;case "loadedmetadata":a.duration=b.duration;break;case "autoplayDisallowed":null!=a.i&&(a.i(),a.i=null,a.j=null)}Nd(a,{type:c})}break;case "initAd":ke(this,b);break;case "getAdDuration":le(this,"getAdDuration","returnDuration","duration");break;case "getAdRemainingTime":le(this,"getAdRemainingTime","returnRemainingTime","remainingTime");break;case "setAdVolume":null!=this.g&&this.g.setAdVolume(b.value);break;case "resizeAd":a=b.width;c=b.height;b=b.viewMode;
this.m&&this.m.style&&(this.m.style.width=a+"px",this.m.style.height=c+"px");this.h&&this.h.style&&(this.i=c,this.j=a,this.h.style.height=c+"px",this.h.style.width=a+"px");if(null!=this.g)try{this.g.resizeAd(a,c,b)}catch(d){this.o(d)}break;case "friendlyReady":break;default:if(this.g){if("function"===typeof this.g[a])this.g[a]()}else this.R.push(a)}};
Z.prototype.ea=function(){this.j=this.l?this.h.clientWidth||this.j:window.innerWidth;this.i=this.l?this.h.clientHeight||this.i:window.innerHeight;if(0!=this.j&&0!=this.i){this.h.style.height=this.i+"px";this.h.style.width=this.j+"px";try{this.g.resizeAd(this.j,this.i,this.H)}catch(a){this.o(a)}Sd(this.v)}};Z.prototype.o=function(a){a=void 0===a?null:a;je(this,"AdError",{message:null!=a?a.message:""})};
var me=function(a){zb(kd,function(b){if("getAdCompanions"!=b&&!(b in this.g&&"function"===typeof this.g[b]))throw Error("missing functions "+b);},a);if("2.0"!=a.g.handshakeVersion("2.0"))throw Error("version");},ne=function(a){a.R.forEach(function(b){if("function"===typeof a.g[b])a.g[b]()})};
Z.prototype.M=function(){var a=window.getVPAIDAd;try{this.g=a(),me(this),ne(this)}catch(d){this.o(d);return}if(null==this.g)this.o();else{this.T=new ld(this.u,this.g,this.L,this.J);md(this.T);this.l?a={slot:this.h,videoSlot:this.m,videoSlotCanAutoPlay:!0}:(this.h=document.getElementById("slot"),null==this.h?a=window.document.body:(this.h.style.height=0!=window.innerHeight?window.innerHeight+"px":0!=this.i?this.i+"px":"100%",this.h.style.width=0!=window.innerWidth?window.innerWidth+"px":0!=this.j?
this.j+"px":"100%",a=this.h),a={slot:a,videoSlot:this.F,videoSlotCanAutoPlay:!0});var b={AdParameters:this.K};try{this.i=this.l?this.h.clientHeight||this.i:window.innerHeight;this.j=this.l?this.h.clientWidth||this.j:window.innerWidth;if(0==this.i||0==this.j){this.v=new U(200);var c=ua(nd,this.v);this.D?c():(this.B||(this.B=[]),this.B.push(c));Qd(this,this.v,"tick",this.ea);this.v.start()}this.g.initAd(this.j,this.i,this.H,this.N,b,a)}catch(d){this.o(d)}}};
var le=function(a,b,c,d){var e=-1;try{e=a.g[b]()}catch(f){}"number"!==typeof e&&(e=-1);b={};b[d]=e;je(a,c,b)};Z.prototype.initFriendly=Z.prototype.da;window.VPAIDLoader=Z;}).call(this);
ూపల్లి </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/its-time-for-world-to-stand-by-farmers--revanth-cet-conference-in-davos/1/48513" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48513-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> CM Revanth: రైతులకు కార్పొరేట్ తరహా లాభాలు రావాలనేదే నా కల: సీఎం రేవంత్&zwnj; </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/governor-quota-mlc-seats--tamilisai/1/48512" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48512-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> Ts News: గవర్నర్&zwnj; కోటా ఎమ్మెల్సీ ఎన్నికపై వీడని పీటముడి..! </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/janasena-chief-pawan-kalyan-launched-ayodhya-ram-mandir-special-invitation-song/1/48510" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48510-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> Ayodhya Ram Mandir: అయోధ్యపై ఆధ్యాత్మిక గీతాన్ని ఆవిష్కరించిన పవన్ కల్యాణ్&zwnj; </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/actor-shivaji-key-comments-on-ap-polititcs/1/48509" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48509-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> డబ్బుల కోసం ఓట్లు అమ్ముకోవద్దు.. ఏపీ రాజకీయాలపై శివాజీ వ్యాఖ్యలు </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/over-18000-illegal-votes-in-chandragiri--ycp-govt-jagan/1/48508" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48508-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> AP News: చంద్రగిరిలో 18 వేల అక్రమ ఓట్లు </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/earthquake-wont-affect-ayodhya-ram-temple-for-2500-years/1/48507" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48507-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> Ayodhya Ram Mandir: 2500 ఏళ్లు నిలిచేలా.. అయోధ్య రామమందిర నిర్మాణం </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/agan-not-fulfilled-his-promise-to-lanka-village/1/48506" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48506-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> Ap News: మా ఆశల్ని జగన్ సర్కార్&zwnj; గోదాట్లో కలిపింది: లంక గ్రామాల ప్రజలు </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/haryana-artist-made-ayodhya-ram-image-on-peacock-feather/1/48505" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48505-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> Ayodhya: నెమలీకపై శ్రీరాముని చిత్రం </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/a-warm-welcome-to-cm-revanth-in-london/1/48504" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48504-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> Revanth Reddy: లండన్&zwnj;లో సీఎం రేవంత్&zwnj;కు ఘనస్వాగతం </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/chandrababu-ra-kadalira-meeting-at-venkatagiri/1/48503" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48503-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> Chandrababu: తుగ్లక్&zwnj; సీఎం వెయ్యి తప్పులు చేశారు: చంద్రబాబు </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/contractors-in-ap-taking-charges-illegally-from-vehicle-owners-who-are-coming-to-loading-sand/1/48501" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48501-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> AP news: బాట ఛార్జీల పేరిట.. మరో దందాకు తెరతీసిన ఇసుక గుత్తేదారులు </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/cm-jagan-did-not-follow-ambedkar-idiology/1/48500" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48500-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> CM Jagan: అంబేడ్కర్&zwnj; విగ్రహాన్ని తాకే అర్హత.. మీకెక్కడిది జగన్&zwnj;? </div>
                        </a>
                    </figure>
                </li>

                            <li class="box-shadow">
                    <figure class="frame">
                        <a href="https://www.eenadu.net/videos/playVideo/kishan-reddy-appointed-bjp-new-chiefs-for-12-districs-in-telangana/1/48499" aria-label="Eenadu Video Icon">
                            <div class="playbutton"></div><img src="https://assets.eenadu.net/video_images/48499-365X255.jpg" alt="" width="205" height="143">
                            <div class="telugu_uni_body offset-t"> TS News: కొత్త జట్టుతో లోక్&zwnj;సభ ఎన్నికల బరిలోకి భాజపా.. 12 జిల్లాలకు నూతన సారథులు </div>
                        </a>
                    </figure>
                </li>

            
        </ul>
    </div>
    <div class="clearfix"></div>
    <!-- video block end-->

</div>

<!-- Left Panel ends &amp; Right panel starts -->

<div class="col-right offset-t">
    <!--   Left Panel ends &amp; Right panel starts -->

    <!-- Districts Banners -->
    <a href="https://www.eenadu.net/andhra-pradesh/districts">
        <div style="margin-bottom: 10px;">
            <img loading="lazy" src="https://assets.eenadu.net/_assets/_images/ap-districts.jpg" width="300" height="40" alt="ap-districts">
        </div>
    </a>
    <a href="https://www.eenadu.net/telangana/districts">
        <div style="margin-bottom: 10px;">
            <img loading="lazy" src="https://assets.eenadu.net/_assets/_images/ts-districts.jpg" width="300" height="40" alt="ts-districts">
        </div>
    </a>
    <!-- Districts Banners -->

<!-- ad block start -->
<div class="ad-block-300-nt addiv" tag="3"> </div><!-- ad block end -->

<!-- Latest News section start -->
<div id="mc-latestnews">
    <div class="two-col-right-block offset-t offset-b">
        <h2 class="telugu_uni_headings sub-head"><a href="https://www.eenadu.net/latest-news">తాజా వార్తలు <span class="eng-body"><strong> (Latest News)</strong></span></a></h2>
        <div class="box-shadow">
            <ul>
                                    <li class="tumb-ct">
                        <a href="https://www.eenadu.net/telugu-news/india/ed-issues-summons-to-lalu-prasad-son-tejashwi-yadav/0700/124012118">
                            <figure class="tumb-im"><img loading="lazy" src="https://assets.eenadu.net/featureimages/365X255/124012118-365X255.jpg" alt="Lalu: లాలూ, తేజస్వీ యాదవ్‌లకు మరోసారి ఈడీ సమన్లు" width="100" height="70"></figure>
                            <div class="tumb-dis">
                                                                <h3 class="ft-tt">Lalu: లాలూ, తేజస్వీ యాదవ్‌లకు మరోసారి ఈడీ సమన్లు</h3>                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </li>
                                    <li class="tumb-ct">
                        <a href="https://www.eenadu.net/telugu-news/sports/pakistan-great-slams-disbanding-of-babar-azam-and-mohammad-rizwan-pair/0400/124012113">
                            <figure class="tumb-im"><img loading="lazy" src="https://assets.eenadu.net/featureimages/365X255/124012113-365X255.jpg" alt="NZ vs PAK: టాప్‌ ఓపెనింగ్‌ జోడీని విడదీసి మీరేం సాధించారు?: రమీజ్‌ రజా" width="100" height="70"></figure>
                            <div class="tumb-dis">
                                                                <h3 class="ft-tt">NZ vs PAK: టాప్‌ ఓపెనింగ్‌ జోడీని విడదీసి మీరేం సాధించారు?: రమీజ్‌ రజా</h3>                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </li>
                                    <li class="tumb-ct">
                        <a href="https://www.eenadu.net/telugu-news/movies/tollywood-kollywood-bollywood-actors-social-media-updates/0210/124012138">
                            <figure class="tumb-im"><img loading="lazy" src="https://assets.eenadu.net/featureimages/365X255/124012138-365X255.jpg" alt="Social Look: వరుణ్‌కు లావణ్య స్వీట్‌ విషెస్‌.. కృతి ట్రెండీ లుక్‌" width="100" height="70"></figure>
                            <div class="tumb-dis">
                                                                <h3 class="ft-tt">Social Look: వరుణ్‌కు లావణ్య స్వీట్‌ విషెస్‌.. కృతి ట్రెండీ లుక్‌</h3><span class="nvid"></span>                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </li>
                                    <li class="tumb-ct">
                        <a href="https://www.eenadu.net/telugu-news/general/cm-revanth-reddy-team-in-london/0600/124012139">
                            <figure class="tumb-im"><img loading="lazy" src="https://assets.eenadu.net/featureimages/365X255/124012139-365X255.jpg" alt="Revanth Reddy: మూసీకి పునర్‌వైభవం వస్తే మరింత శక్తిమంతంగా హైదరాబాద్‌: రేవంత్‌రెడ్డి" width="100" height="70"></figure>
                            <div class="tumb-dis">
                                                                <h3 class="ft-tt">Revanth Reddy: మూసీకి పునర్‌వైభవం వస్తే మరింత శక్తిమంతంగా హైదరాబాద్‌: రేవంత్‌రెడ్డి</h3>                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </li>
                                    <li class="tumb-ct">
                        <a href="https://www.eenadu.net/telugu-news/world/luxury-properties-of-al-nahyan-royal-family-of-dubai/0800/124012108">
                            <figure class="tumb-im"><img loading="lazy" src="https://assets.eenadu.net/featureimages/365X255/124012108-365X255.jpg" alt="Royal family: వందల కార్లు.. రూ.4వేల కోట్ల ప్యాలెస్‌: ఈ రాజ కుటుంబం హవానే వేరయా..!" width="100" height="70"></figure>
                            <div class="tumb-dis">
                                                                <h3 class="ft-tt">Royal family: వందల కార్లు.. రూ.4వేల కోట్ల ప్యాలెస్‌: ఈ రాజ కుటుంబం హవానే వేరయా..!</h3><span class="nvid"></span>                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </li>
                                    <li class="tumb-ct">
                        <a href="https://www.eenadu.net/telugu-news/politics/bhatti-vikramarka-and-uttam-kumar-reddy-review-on-irrigation-projects/0500/124012136">
                            <figure class="tumb-im"><img loading="lazy" src="https://assets.eenadu.net/featureimages/365X255/124012136-365X255.jpg" alt="Uttam Kumar Reddy: సీతారామ ప్రాజెక్టుపై కేసీఆర్‌ అబద్ధాలు చెప్పారు: మంత్రి ఉత్తమ్‌" width="100" height="70"></figure>
                            <div class="tumb-dis">
                                                                <h3 class="ft-tt">Uttam Kumar Reddy: సీతారామ ప్రాజెక్టుపై కేసీఆర్‌ అబద్ధాలు చెప్పారు: మంత్రి ఉత్తమ్‌</h3>                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </li>
                            </ul>
            <a href="https://www.eenadu.net/latest-news" class="more2">మరిన్ని </a>
        </div>
    </div>
</div>
<div class="clearfix"></div>
<!-- Latest News section end -->

<!-- Local Ads -->
    <div class='ad-block offset-b'>            <a class="" href="https://www.oakridge.in/campaigns/relocation-why-choose-oakridge-international-school/?utm_source=e-paper&utm_medium=display&utm_campaign=_display " target="_blank" aria-label="advt-Oakridge_International_School_20231226" onclick="gtagEvent('advertisement', 'advt-Oakridge_International_School_20231226', 'click');">
                <img src="https://assets.eenadu.net/_assets/dynamicads/Oakridge_International_School_202312261703589113site.gif" width="300" height="100" alt="Oakridge_International_School_20231226" />
            </a>
            </div><div class='ad-block offset-b'>            <a class="" href="https://myhomeconstructions.com/my-home-99/?utm_source=Eenadu_net&utm_medium=banner&utm_campaign=Eenadu_myhome99_banner" target="_blank" aria-label="advt-MyHomeConstructions_20230713" onclick="gtagEvent('advertisement', 'advt-MyHomeConstructions_20230713', 'click');">
                <img src="https://assets.eenadu.net/_assets/dynamicads/MyHomeConstructions_20230713_202309211695294180site.gif" width="300" height="100" alt="MyHomeConstructions_20230713" />
            </a>
            </div><div class='ad-block offset-b'>            <a class="" href="https://greenmarkdevelopers.com/mayfair-sunrise/?utm_source=Eenadu&utm_medium=Display&utm_campaign=Referral" target="_blank" aria-label="advt-Greenmark_Mayfair_20231009" onclick="gtagEvent('advertisement', 'advt-Greenmark_Mayfair_20231009', 'click');">
                <img src="https://assets.eenadu.net/_assets/dynamicads/Greenmark_Mayfair_20231009_202310111697010251site.gif" width="300" height="100" alt="Greenmark_Mayfair_20231009" />
            </a>
            </div><div class='ad-block offset-b'>            <a class="" href="https://www.shooraeb5.com/?utm_source=Eenadu&utm_medium=Display&utm_campaign=Referral" target="_blank" aria-label="advt-ShooraEB5_20230125" onclick="gtagEvent('advertisement', 'advt-ShooraEB5_20230125', 'click');">
                <img src="https://assets.eenadu.net/_assets/dynamicads/ShooraEB5_20230125_202401071704635718site.gif" width="300" height="100" alt="ShooraEB5_20230125" />
            </a>
            </div><!-- Local Ads -->

<!-- Right Col health section start -->
<h2 class="telugu_uni_headings sub-head offset-t"><a href="https://www.eenadu.net/health">సుఖీభవ</a></h2>
<div class="box-shadow offset-b">
            <aside class="fst-section">
            <a href="https://www.eenadu.net/telugu-article/health/general/0811/124005229">
                <figure class="mid-thumb"><img loading="lazy" src="https://assets.eenadu.net/featureimages/365X255/124005229-365X255.jpg" alt="మధుమేహులకు ఉపవాస మేలు" width="288" height="201"></figure>
                <div class="mid-thumb-description">
                    <h3 class="fnt20 article-title">మధుమేహులకు ఉపవాస మేలు</h3>
                </div>
            </a>
        </aside>
        <a href="https://www.eenadu.net/health" class="more2">మరిన్ని </a>
</div>
<div class="clearfix"></div>
<!-- Right Col health section End -->

<!-- ad block start -->
<div class="ad-block-300-nt addiv" tag="4"> </div><!-- ad block end -->

<!-- Right Col education section start -->
<h2 class="telugu_uni_headings sub-head offset-t"><a href="https://www.eenadu.net/education">చదువు</a></h2>
<div class="box-shadow offset-b">
            <aside class="fst-section">
            <a href="https://www.eenadu.net/telugu-article/education/general/0303/124010709">
                <figure class="mid-thumb"><img loading="lazy" src="https://assets.eenadu.net/featureimages/365X255/124010709-365X255.jpg" alt="అద్భుత కెరియర్&zwnj;..అందిపుచ్చుకుంటారా?" width="288" height="201"></figure>
                <div class="mid-thumb-description">
                    <h3 class="fnt20 article-title">అద్భుత కెరియర్&zwnj;..అందిపుచ్చుకుంటారా?</h3>
                </div>
            </a>
        </aside>
        <a href="https://www.eenadu.net/education" class="more2">మరిన్ని </a>
</div>
<div class="clearfix"></div>
<!-- Right Col education section end -->


<!-- ad block start -->
<div class="ad-block-300-nt addiv" tag="5"> </div><!-- ad block end -->

<!-- Right Col Special Pages Section Start -->
<div class="two-col-right-block box-shadow">
    <div class="feature1">
                    <!-- <a href="https://www.eenadu.net/education" class="btn1" style="background-color: #cbffc1; color:">చదువు</a> -->
            <a href="https://www.eenadu.net/education" class="btn1" style="background-color: #cbffc1;">చదువు</a>
                    <!-- <a href="https://www.eenadu.net/health" class="btn1" style="background-color: #ffd9ed;; color:">సుఖీభవ</a> -->
            <a href="https://www.eenadu.net/health" class="btn1" style="background-color: #ffd9ed;;">సుఖీభవ</a>
                    <!-- <a href="https://www.eenadu.net/devotional" class="btn1" style="background-color: #fdeec4; color:">మకరందం</a> -->
            <a href="https://www.eenadu.net/devotional" class="btn1" style="background-color: #fdeec4;">మకరందం</a>
                    <!-- <a href="https://www.eenadu.net/youth" class="btn1" style="background-color: #ffd9ed;; color:">ఈతరం</a> -->
            <a href="https://www.eenadu.net/youth" class="btn1" style="background-color: #ffd9ed;;">ఈతరం</a>
                    <!-- <a href="https://www.eenadu.net/recipes" class="btn1" style="background-color: #fdeec4; color:">ఆహా</a> -->
            <a href="https://www.eenadu.net/recipes" class="btn1" style="background-color: #fdeec4;">ఆహా</a>
                    <!-- <a href="https://www.eenadu.net/kids-stories" class="btn1" style="background-color: #cbffc1; color:">హాయ్ బుజ్జీ </a> -->
            <a href="https://www.eenadu.net/kids-stories" class="btn1" style="background-color: #cbffc1;">హాయ్ బుజ్జీ </a>
                    <!-- <a href="https://www.eenadu.net/real-estate" class="btn1" style="background-color: #fdeec4; color:">స్థిరాస్తి</a> -->
            <a href="https://www.eenadu.net/real-estate" class="btn1" style="background-color: #fdeec4;">స్థిరాస్తి</a>
                    <!-- <a href="https://www.eenadu.net/kathalu" class="btn1" style="background-color: #cbffc1; color:">కథామృతం</a> -->
            <a href="https://www.eenadu.net/kathalu" class="btn1" style="background-color: #cbffc1;">కథామృతం</a>
                    <!-- <a href="https://www.eenadu.net/temples" class="btn1" style="background-color: #ffd9ed;; color:">దేవతార్చన</a> -->
            <a href="https://www.eenadu.net/temples" class="btn1" style="background-color: #ffd9ed;;">దేవతార్చన</a>
            </div>
</div>
<div class="clearfix"></div>
<!-- Right Col Special Pages Section End -->

<!-- ad block start -->
<div class="ad-block-300-nt addiv" tag="6"> </div><!-- ad block end -->

</div>
<!-- Right Panel end -->
<div class="clearfix"></div>
<div class="footer-bg1 offset-t5" data-nosnippet>
    <div class="fbody">
    <div class="fpanel">
    <div class="footer-bg1">
        <div class="footer-top">
            <div class="footercal">
              <div class="col-left-footer">
                <div class="col3-mid">
                    <!--NEWS SECTION -->
                    <span class="footer-title">News</span>
                    <ul class="footer-list1 fnews ftr-mid">
                                                    <li><a href="https://www.eenadu.net/" title="తెలుగు వార్తలు">Telugu News</a></li>
                                                <li><a href="https://www.eenadu.net/latest-news" title="తాజా వార్తలు">Latest News in Telugu</a></li>
                        <li><a href="https://www.eenadu.net/sports" title="క్రీడలు">Sports News</a></li>
                        <li><a href="https://www.eenadu.net/andhra-pradesh" title="ఆంధ్రప్రదేశ్ ">Ap News Telugu</a></li>
                        <li><a href="https://www.eenadu.net/telangana" title="తెలంగాణ">Telangana News</a></li>
                        <li><a href="https://www.eenadu.net/india" title="జాతీయం">National News</a></li>
                        <li><a href="https://www.eenadu.net/world" title="అంతర్జాతీయం">International News</a></li>
                        <li><a href="https://www.eenadu.net/movies" title="సినిమా">Cinema News in Telugu</a></li>
                        <li><a href="https://www.eenadu.net/business" title="బిజినెస్‌">Business News</a></li>
                        <li><a href="https://www.eenadu.net/crime" title="క్రైమ్">Crime News</a></li>
                        <li><a href="https://www.eenadu.net/politics" title="రాజకీయం">Political News in Telugu</a></li>
                        <li><a href="https://www.eenadu.net/photos" title="ఫొటోలు">Photo Gallery</a></li>
                        <li><a href="https://www.eenadu.net/videos" title="వీడియోలు">Videos</a></li>
                        <li><a href="https://www.eenadu.net/telangana/districts/hyderabad" title="హైదరాబాద్">Hyderabad News Today</a></li>
                        <li><a href="https://www.eenadu.net/andhra-pradesh/districts/amaravati-krishna" title="అమరావతి">Amaravati News</a></li>
                        <li><a href="https://www.eenadu.net/andhra-pradesh/districts/visakhapatnam" title="విశాఖపట్నం">Visakhapatnam News</a></li>
                        <li><a href="https://www.eenadu.net/explained" title="వెబ్‌ప్రత్యేకం">Exclusive Stories</a></li>
                        <li><a href="https://www.eenadu.net/editorial" title="సంపాదకీయం">Editorial</a></li>
                        <li><a href="https://www.eenadu.net/nri" title="ఎన్‌ఆర్‌ఐ">NRI News</a></li>
                        <li><a href="https://www.eenadu.net/archives" title="ఆర్కీవ్స్‌">Archives</a></li>
                    </ul>
                    <div class="clearfix"></div>
                    <!-- articles blocks ends here -->
                </div>
                <div class="col3-left">
                    <!--FEATURE SECTION -->
                    <span class="footer-title">Feature Pages</span>
                    <ul class="footer-list1 fnews">
                        <li><a href="https://www.eenadu.net/women" title="వసుంధర">Women</a></li>
                        <li><a href="https://www.eenadu.net/youth" title="ఈతరం">Youth News</a></li>
                        <li><a href="https://www.eenadu.net/health" title="సుఖీభవ">Health News</a></li>
                        <li><a href="https://www.eenadu.net/kids-stories" title="హాయ్ బుజ్జీ">Kids Telugu Stories</a></li>
                        <li><a href="https://www.eenadu.net/real-estate" title="స్థిరాస్తి‌">Real Estate News</a></li>
                        <li><a href="https://www.eenadu.net/devotional" title="మకరందం">Devotional News</a></li>
                        <li><a href="https://www.eenadu.net/recipes" title="ఆహా">Food & Recipes News</a></li>
                        <li><a href="https://www.eenadu.net/temples" title="దేవతార్చన">Temples News</a></li>
                        <li><a href="https://www.eenadu.net/education" title="చదువు">Educational News</a></li>
                        <li><a href="https://www.eenadu.net/technology" title="ఈ-నాడు‌">Technology News</a></li>
                        <li><a href="https://www.eenadu.net/sunday-magazine" title="సండే మ్యాగజైన్‌">Sunday Magazine</a></li>
                        <li><a href="https://www.eenadu.net/rashi-phalalu" title="రాశి ఫలాలు">Rasi Phalalu in Telugu</a></li>
                        <li><a href="https://stories.eenadu.net" title="వెబ్ స్టోరీస్">Web Stories</a></li>
                    </ul>
                    <!--OTHERS SECTION -->
                </div>
                <div class="col3-fullblc">
                    <span class="footer-title">Other Websites</span>
                    <ul class="footer-list other">
                        <li><a href="https://www.etvbharat.com/" target="_blank" title="ఈటీవీ భారత్‌">ETV Bharat</a></li>
			<li><a href="https://www.epratibha.net/" target="_blank" title="ఈ-ప్రతిభ">ePratibha</a></li>
                        <li><a href="https://www.eenadupellipandiri.net/" target="_blank" title="పెళ్లిపందిరి">Pellipandiri</a></li>
                        <li><a href="https://www.eenaduclassifieds.com/" target="_blank" title="క్లాసిఫైడ్స్‌">Classifieds</a></li>
                        <li><a href="https://epaper.eenadu.net/" target="_blank" title="ఈ-పేపర్‌">Eenadu Epaper</a></li>
                    </ul>
                </div>
                </div>
                <div class="col-right-footer">
                <div class="col3-right">
                    <!--NEWS SECTION -->
                    <span class="footer-title1">Follow Us</span>
                    <ul class="footer-list follow desk">
                        <li><a href="https://www.facebook.com/eenaduonline/" target="_blank" aria-label="Eenadu facebook"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/social-icons-facebook.png" alt="Eenadu Facebook" width="27" height="27"></a></li>
                        <li><a href="https://twitter.com/eenadulivenews/" target="_blank" aria-label="Eenadu twitter"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/social-icons-twitter.png" alt="Eenadu Twitter" width="27" height="27"></a></li>
                        <li><a href="https://www.instagram.com/eenadulivenews/?hl=en" target="_blank" aria-label="Eenadu instagram"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/social-icons-instagram.png" alt="Eenadu Instagram" width="27" height="27"></a></li>
                        <!-- <li><a href="https://telegram.me/eenaduofficial" target="_blank" aria-label="Eenadu telegram"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/social-icons-telegram.png" alt="Eenadu Telegram" width="27" height="27"></a></li> -->
                        <li><a href="https://news.google.com/s/CBIwsNmunUE?r=7&oc=1" target="_blank" aria-label="Eenadu google news"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/social-icons-google-news.png" alt="Eenadu Google News" width="27" height="27"></a></li>
                        <li><a href="https://www.youtube.com/c/EENADUvideos?sub_confirmation=1" target="_blank" aria-label="Eenadu Youtube"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/social-icons-youtube.png" alt="Eenadu Google News" width="27" height="27"></a></li>
                        <!-- <li><a href="https://sharechat.com/profile/eenadulivenews" target="_blank" aria-label="Eenadu sharechat"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/social-icons-sharechat.png" alt="Eenadu Sharechat" width="27" height="27"></a></li>
                        <li><a href="https://www.kooapp.com/profile/eenadulivenews" target="_blank" aria-label="Eenadu kooapp"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/social-icons-kooapp.png" alt="Eenadu Koo" width="27" height="27"></a></li> -->
                    </ul>
                    <div class="footer-mail offset-t3">
                        <p>For Editorial Feedback eMail:</p>
                        <p><a href="mailto:infonet@eenadu.net" target="_blank">infonet@eenadu.net</a></p>
                    </div>
                    <div class="footer-contact offset-t3">
                        <p>For Marketing enquiries Contact : <br> 040 - 23318181<br> eMail: <a href="mailto:marketing@eenadu.in" target="_blank">marketing@eenadu.in</a></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- footer top end's -->
        <div class="clearfix"></div>
            </div>
        </div>
        <span class="footpm"></span>
        <!-- footer middle start -->
        <div class="footer-middle">
            <div class="f-logo"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/f-logo.png" alt="Eenadu Logo" width="183" height="51"></div>
            <div class="f-terms">
                <ul class="footer-list rightsp">
                    <li><a href="https://www.eenadu.net/terms-conditions" target="_blank">TERMS & CONDITIONS</a></li>
                    <li><a href="https://www.eenadu.net/privacy-policy" target="_blank">PRIVACY POLICY</a></li>
                    <li><a href="https://info.eenadu.net/csr_policy.htm" target="_blank">CSR POLICY</a></li>
                    <li><a href="https://info.eenadu.net/eenadu-digital.htm" target="_blank">TARIFF</a></li>
                    <li><a href="https://www.eenadu.net/feedback" target="_blank">FEEDBACK</a></li>
                    <li><a href="https://www.eenadu.net/contact_us/home" target="_blank">CONTACT US</a></li>
                    <li><a href="https://info.eenadu.net">ABOUT US</a></li>
                </ul>
                <!--Copy Rights-->
                <p class="footer-copy">© 1999 - 2024 Ushodaya Enterprises Pvt.Ltd,All rights reserved.</p>
                <p class="center1">Powered By Margadarsi Computers</p>
            </div>
            <div class="f-app">
                <span>App</span>
                <a href="http://bit.ly/eenadu_android_app" target="_blank" aria-label="Eenadu andrioid app"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/and-mob.png" alt="Android App" width="39" height="39"></a>
                <a href="http://bit.ly/eenadu_ios_app" target="_blank" aria-label="Eenadu ios app"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/app-mob.png" alt="Ios App" width="39" height="39"></a>
            </div>
        </div>
        <!-- footer middle end's -->
        <!-- footer bottom start -->
        <div class="footer-bottom offset-t5 offset-b3">
            <p class="fbtm-1"> Contents of eenadu.net are copyright protected.Copy and/or reproduction and/or re-use of contents
                <br> or any part thereof, without consent of UEPL is illegal.Such persons will be prosecuted.
            </p>
            <p class="fbtm-2">This website follows the <a href="https://assets.eenadu.net/_assets/_pdf/CODE_OF_ETHICS_FOR_DIGITAL_NEWS_WEBSITES.pdf" target="_blank" rel="noopener noreferrer"><strong>DNPA Code of Ethics</strong></a>.</p>
            <p class="abc-f"><a href="https://info.eenadu.net" aria-label="Eenadu ABC"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/ABC_Digital_2.jpg" alt="" width="24" height="12"></a></p>
            <p id="geo-location" style="float: right;font-size: 10px;"></p>
        </div>
        <!-- footer bottom end's -->
        <div class="clearfix"></div>
    </div>
</div>
<!-- common footer End -->
</main>

<!-- wrapper -->
<div class="scrollup"><img loading="lazy" src="https://assets.eenadu.net/_assets/_images/scrll-top.png" alt="Scroll Page To Top"></div>
</div>
<!-- gridContainer -->

<!-- All Scripts follows -->
<script defer type="text/javascript" src="https://assets.eenadu.net/_assets/desktop/css/slick/slick.js"></script>
<script defer type="text/javascript" src="https://assets.eenadu.net/_assets/desktop/js/dsk-inner.js"></script>
<script async defer type="text/javascript" src="https://assets.eenadu.net/_assets/_js/min/mcscan.min.js"></script>
<script async defer type="text/javascript" src="https://assets.eenadu.net/_assets/_js/min/mcads.min.js"></script>

</body>
</html>
<!-- Generated at 19/01/2024 19:49:42 /videos/playVideo/ayodhya-ram-mandir-model-made-with-gold-by-a-man-from-nagar-kurnool/1/48527#desktop - 86400 -->