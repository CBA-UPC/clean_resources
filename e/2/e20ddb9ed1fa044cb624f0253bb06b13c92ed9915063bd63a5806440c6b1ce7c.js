/0},{at:function(t){var n=o(this),r=i(n),t=u(t),t=0<=t?t:r+t;return t<0||r<=t?C:n[t]}}),r("at")},function(t,n,r){var a=r(3),p=r(4).f,s=r(40),l=r(43),y=r(34),v=r(50),d=r(61);t.exports=function(t,n){var r,e,o,i=t.target,u=t.global,c=t.stat,f=u?a:c?a[i]||y(i,{}):(a[i]||{}).prototype;if(f)for(r in n){if(e=n[r],o=t.noTargetGet?(o=p(f,r))&&o.value:f[r],!d(u?r:i+(c?".":"#")+r,t.forced)&&o!==C){if(typeof e==typeof o)continue;v(e,o)}(t.sham||o&&o.sham)&&s(e,"sham",!0),l(f,r,e,t)}}},function(t,n){function r(t){return t&&t.Math==Math&&t}t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof global&&global)||function(){return this}()||Function("return this")()},function(t,n,r){var e=r(5),o=r(7),i=r(8),u=r(9),c=r(10),f=r(15),a=r(35),p=r(38),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=f(n),p)try{return s(t,n)}catch(t){}if(a(t,n))return u(!o(i.f,t,n),t[n])}},function(t,n,r){r=r(6);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r=Function.prototype.call;t.exports=r.bind?r.bind(r):function(){return r.apply(r,arguments)}},function(t,n,r){var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){t=o(this,t);return!!t&&t.enumerable}:e},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(11),o=r(14);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(3),o=r(12),i=r(6),u=r(13),c=e.Object,f=o("".split);t.exports=i(function(){return!c("z").propertyIsEnumerable(0)})?function(t){return"String"==u(t)?f(t,""):c(t)}:c},function(t,n){var r=Function.prototype,e=r.bind,o=r.call,i=e&&e.bind(o);t.exports=e?function(t){return t&&i(o,t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},function(t,n,r){var r=r(12),e=r({}.toString),o=r("".slice);t.exports=function(t){return o(e(t),8,-1)}},function(t,n,r){var e=r(3).TypeError;t.exports=function(t){if(t==C)throw e("Can't call method on "+t);return t}},function(t,n,r){var e=r(16),o=r(19);t.exports=function(t){t=e(t,"string");return o(t)?t:t+""}},function(t,n,r){var e=r(3),o=r(7),i=r(17),u=r(19),c=r(26),f=r(29),r=r(30),a=e.TypeError,p=r("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var r=c(t,p);if(r){if(r=o(r,t,n=n===C?"default":n),!i(r)||u(r))return r;throw a("Can't convert object to primitive value")}return f(t,n=n===C?"number":n)}},function(t,n,r){var e=r(18);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},function(t,n){t.exports=function(t){return"function"==typeof t}},function(t,n,r){var e=r(3),o=r(20),i=r(18),u=r(21),r=r(22),c=e.Object;t.exports=r?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,c(t))}},function(t,n,r){var e=r(3),o=r(18);t.exports=function(t,n){return arguments.length<2?(r=e[t],o(r)?r:C):e[t]&&e[t][n];var r}},function(t,n,r){r=r(12);t.exports=r({}.isPrototypeOf)},function(t,n,r){r=r(23);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(24),r=r(6);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41})},function(t,n,r){var e,o,i=r(3),u=r(25),r=i.process,i=i.Deno,i=r&&r.versions||i&&i.version,i=i&&i.v8;!(o=i?0<(e=i.split("."))[0]&&e[0]<4?1:+(e[0]+e[1]):o)&&u&&(!(e=u.match(/Edge\/(\d+)/))||74<=e[1])&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},function(t,n,r){r=r(20);t.exports=r("navigator","userAgent")||""},function(t,n,r){var e=r(27);t.exports=function(t,n){n=t[n];return null==n?C:e(n)}},function(t,n,r){var e=r(3),o=r(18),i=r(28),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},function(t,n,r){var e=r(3).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},function(t,n,r){var e=r(3),o=r(7),i=r(18),u=r(17),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!u(e=o(r,t)))return e;if(i(r=t.valueOf)&&!u(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!u(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},function(t,n,r){var e=r(3),o=r(31),i=r(35),u=r(37),c=r(23),f=r(22),a=o("wks"),p=e.Symbol,s=p&&p.for,l=f?p:p&&p.withoutSetter||u;t.exports=function(t){var n;return i(a,t)&&(c||"string"==typeof a[t])||(n="Symbol."+t,c&&i(p,t)?a[t]=p[t]:a[t]=(f&&s?s:l)(n)),a[t]}},function(t,n,r){var e=r(32),o=r(33);(t.exports=function(t,n){return o[t]||(o[t]=n!==C?n:{})})("versions",[]).push({version:"3.19.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n,r){var e=r(3),o=r(34),r="__core-js_shared__",r=e[r]||o(r,{});t.exports=r},function(t,n,r){var e=r(3),o=Object.defineProperty;t.exports=function(n,r){try{o(e,n,{value:r,configurable:!0,writable:!0})}catch(t){e[n]=r}return r}},function(t,n,r){var e=r(12),o=r(36),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},function(t,n,r){var e=r(3),o=r(14),i=e.Object;t.exports=function(t){return i(o(t))}},function(t,n,r){var r=r(12),e=0,o=Math.random(),i=r(1..toString);t.exports=function(t){return"Symbol("+(t===C?"":t)+")_"+i(++e+o,36)}},function(t,n,r){var e=r(5),o=r(6),i=r(39);t.exports=!e&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(3),r=r(17),o=e.document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var e=r(5),o=r(41),i=r(9);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(3),o=r(5),i=r(38),u=r(42),c=r(15),f=e.TypeError,a=Object.defineProperty;n.f=o?a:function(t,n,r){if(u(t),n=c(n),u(r),i)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw f("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(3),o=r(17),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},function(t,n,r){var f=r(3),a=r(18),p=r(35),s=r(40),l=r(34),e=r(44),o=r(45),y=r(49).CONFIGURABLE,i=o.get,v=o.enforce,d=String(String).split("String");(t.exports=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,c=e&&e.name!==C?e.name:n;a(r)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!p(r,"name")||y&&r.name!==c)&&s(r,"name",c),(e=v(r)).source||(e.source=d.join("string"==typeof c?c:""))),t!==f?(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:s(t,n,r)):i?t[n]=r:l(n,r)})(Function.prototype,"toString",function(){return a(this)&&i(this).source||e(this)})},function(t,n,r){var e=r(12),o=r(18),r=r(33),i=e(Function.toString);o(r.inspectSource)||(r.inspectSource=function(t){return i(t)}),t.exports=r.inspectSource},function(t,n,r){var e,o,i,u,c,f,a,p,s=r(46),l=r(3),y=r(12),v=r(17),d=r(40),b=r(35),g=r(33),h=r(47),r=r(48),m="Object already initialized",x=l.TypeError,l=l.WeakMap;a=s||g.state?(e=g.state||(g.state=new l),o=y(e.get),i=y(e.has),u=y(e.set),c=function(t,n){if(i(e,t))throw new x(m);return n.facade=t,u(e,t,n),n},f=function(t){return o(e,t)||{}},function(t){return i(e,t)}):(r[p=h("state")]=!0,c=function(t,n){if(b(t,p))throw new x(m);return n.facade=t,d(t,p,n),n},f=function(t){return b(t,p)?t[p]:{}},function(t){return b(t,p)}),t.exports={set:c,get:f,has:a,enforce:function(t){return a(t)?f(t):c(t,{})},getterFor:function(r){return function(t){var n;if(!v(t)||(n=f(t)).type!==r)throw x("Incompatible receiver, "+r+" required");return n}}}},function(t,n,r){var e=r(3),o=r(18),r=r(44),e=e.WeakMap;t.exports=o(e)&&/native code/.test(r(e))},function(t,n,r){var e=r(31),o=r(37),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,r){var e=r(5),o=r(35),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,r=o(i,"name"),o=r&&"something"===function(){}.name,i=r&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:r,PROPER:o,CONFIGURABLE:i}},function(t,n,r){var c=r(35),f=r(51),a=r(4),p=r(41);t.exports=function(t,n){for(var r=f(n),e=p.f,o=a.f,i=0;i<r.length;i++){var u=r[i];c(t,u)||e(t,u,o(n,u))}}},function(t,n,r){var e=r(20),o=r(12),i=r(52),u=r(60),c=r(42),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?f(n,r(t)):n}},function(t,n,r){var e=r(53),o=r(59).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(12),u=r(35),c=r(10),f=r(54).indexOf,a=r(48),p=e([].push);t.exports=function(t,n){var r,e=c(t),o=0,i=[];for(r in e)!u(a,r)&&u(e,r)&&p(i,r);for(;n.length>o;)u(e,r=n[o++])&&(~f(i,r)||p(i,r));return i}},function(t,n,r){var f=r(10),a=r(55),p=r(57),r=function(c){return function(t,n,r){var e,o=f(t),i=p(o),u=a(r,i);if(c&&n!=n){for(;u<i;)if((e=o[u++])!=e)return!0}else for(;u<i;u++)if((c||u in o)&&o[u]===n)return c||u||0;return!c&&-1}};t.exports={includes:r(!0),indexOf:r(!1)}},function(t,n,r){var e=r(56),o=Math.max,i=Math.min;t.exports=function(t,n){t=e(t);return t<0?o(t+n,0):i(t,n)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){t=+t;return t!=t||0==t?0:(0<t?e:r)(t)}},function(t,n,r){var e=r(58);t.exports=function(t){return e(t.length)}},function(t,n,r){var e=r(56),o=Math.min;t.exports=function(t){return 0<t?o(e(t),9007199254740991):0}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(6),o=r(18),i=/#|\.prototype\./,r=function(t,n){t=c[u(t)];return t==a||t!=f&&(o(n)?e(n):!!n)},u=r.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=r.data={},f=r.NATIVE="N",a=r.POLYFILL="P";t.exports=r},function(t,n,r){var e=r(30),o=r(63),r=r(41),i=e("unscopables"),u=Array.prototype;u[i]==C&&r.f(u,i,{configurable:!0,value:o(null)}),t.exports=function(t){u[i][t]=!0}},function(t,n,r){function e(){}function o(t){return"<script>"+t+"</"+v+">"}function i(t){t.write(o("")),t.close();var n=t.parentWindow.Object;return t=null,n}var u,c=r(42),f=r(64),a=r(59),p=r(48),s=r(66),l=r(39),r=r(47),y="prototype",v="script",d=r("IE_PROTO"),b=function(){try{u=new ActiveXObject("htmlfile")}catch(t){}var t;b="undefined"==typeof document||document.domain&&u?i(u):((t=l("iframe")).style.display="none",s.appendChild(t),t.src=String("javascript:"),(t=t.contentWindow.document).open(),t.write(o("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete b[y][a[n]];return b()};p[d]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(e[y]=c(t),r=new e,e[y]=null,r[d]=t):r=b(),n===C?r:f(r,n)}},function(t,n,r){var e=r(5),c=r(41),f=r(42),a=r(10),p=r(65);t.exports=e?Object.defineProperties:function(t,n){f(t);for(var r,e=a(n),o=p(n),i=o.length,u=0;u<i;)c.f(t,r=o[u++],e[r]);return t}},function(t,n,r){var e=r(53),o=r(59);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){r=r(20);t.exports=r("document","documentElement")},function(t,n,r){r(2)({target:"Object",stat:!0},{hasOwn:r(35)})},function(t,n,r){var e=r(2),o=r(12),i=r(14),u=r(56),c=r(69),r=r(6),f=o("".charAt);e({target:"String",proto:!0,forced:r(function(){return"\ud842"!=="𠮷".at(0)})},{at:function(t){var n=c(i(this)),r=n.length,t=u(t),t=0<=t?t:r+t;return t<0||r<=t?C:f(n,t)}})},function(t,n,r){var e=r(3),o=r(70),i=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},function(t,n,r){var e=r(3),o=r(71),i=r(18),u=r(13),c=r(30)("toStringTag"),f=e.Object,a="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n;return t===C?"Undefined":null===t?"Null":"string"==typeof(t=function(t,n){try{return t[n]}catch(t){}}(n=f(t),c))?t:a?u(n):"Object"==(t=u(n))&&i(n.callee)?"Arguments":t}},function(t,n,r){var e={};e[r(30)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(73),o=r(57),i=r(56),u=e.aTypedArray;(0,e.exportTypedArrayMethod)("at",function(t){var n=u(this),r=o(n),t=i(t),t=0<=t?t:r+t;return t<0||r<=t?C:n[t]})},function(t,n,r){function e(t){return!!s(t)&&(t=y(t),l(M,t)||l(R,t))}var o,i,u,c=r(74),f=r(5),a=r(3),p=r(18),s=r(17),l=r(35),y=r(70),v=r(28),d=r(40),b=r(43),g=r(41).f,h=r(21),m=r(75),x=r(77),O=r(30),S=r(37),w=a.Int8Array,j=w&&w.prototype,r=a.Uint8ClampedArray,r=r&&r.prototype,A=w&&m(w),T=j&&m(j),w=Object.prototype,P=a.TypeError,O=O("toStringTag"),_=S("TYPED_ARRAY_TAG"),E=S("TYPED_ARRAY_CONSTRUCTOR"),I=c&&!!x&&"Opera"!==y(a.opera),c=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},R={BigInt64Array:8,BigUint64Array:8};for(o in M)(u=(i=a[o])&&i.prototype)?d(u,E,i):I=!1;for(o in R)(u=(i=a[o])&&i.prototype)&&d(u,E,i);if((!I||!p(A)||A===Function.prototype)&&(A=function(){throw P("Incorrect invocation")},I))for(o in M)a[o]&&x(a[o],A);if((!I||!T||T===w)&&(T=A.prototype,I))for(o in M)a[o]&&x(a[o].prototype,T);if(I&&m(r)!==T&&x(r,T),f&&!l(T,O))for(o in c=!0,g(T,O,{get:function(){return s(this)?this[_]:C}}),M)a[o]&&d(a[o],_,o);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:I,TYPED_ARRAY_CONSTRUCTOR:E,TYPED_ARRAY_TAG:c&&_,aTypedArray:function(t){if(e(t))return t;throw P("Target is not a typed array")},aTypedArrayConstructor:function(t){if(p(t)&&(!x||h(A,t)))return t;throw P(v(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,n,r){if(f){if(r)for(var e in M){e=a[e];if(e&&l(e.prototype,t))try{delete e.prototype[t]}catch(t){}}T[t]&&!r||b(T,t,!r&&I&&j[t]||n)}},exportTypedArrayStaticMethod:function(t,n,r){var e,o;if(f){if(x){if(r)for(e in M)if((o=a[e])&&l(o,t))try{delete o[t]}catch(t){}if(A[t]&&!r)return;try{return b(A,t,!r&&I&&A[t]||n)}catch(t){}}for(e in M)!(o=a[e])||o[t]&&!r||b(o,t,n)}},isView:function(t){if(!s(t))return!1;t=y(t);return"DataView"===t||l(M,t)||l(R,t)},isTypedArray:e,TypedArray:A,TypedArrayPrototype:T}},function(t,n){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,n,r){var e=r(3),o=r(35),i=r(18),u=r(36),c=r(47),r=r(76),f=c("IE_PROTO"),a=e.Object,p=a.prototype;t.exports=r?a.getPrototypeOf:function(t){var n=u(t);if(o(n,f))return n[f];t=n.constructor;return i(t)&&n instanceof t?t.prototype:n instanceof a?p:null}},function(t,n,r){r=r(6);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},function(t,n,r){var o=r(12),i=r(42),u=r(78);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var r,e=!1,t={};try{(r=o(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(t,[]),e=t instanceof Array}catch(t){}return function(t,n){return i(t),u(n),e?r(t,n):t.__proto__=n,t}}():C)},function(t,n,r){var e=r(3),o=r(18),i=e.String,u=e.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw u("Can't set "+i(t)+" as a prototype")}},function(t,n,r){var e=r(3),o=r(12),i=r(6),u=r(27),c=r(80),f=r(73),a=r(82),p=r(83),s=r(24),l=r(84),y=e.Array,v=f.aTypedArray,f=f.exportTypedArrayMethod,d=e.Uint16Array,b=d&&o(d.prototype.sort),o=!(!b||i(function(){b(new d(2),null)})&&i(function(){b(new d(2),{})})),g=!!b&&!i(function(){if(s)return s<74;if(a)return a<67;if(p)return!0;if(l)return l<602;for(var t,n=new d(516),r=y(516),e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(b(n,function(t,n){return(t/4|0)-(n/4|0)}),e=0;e<516;e++)if(n[e]!==r[e])return!0});f("sort",function(t){return t!==C&&u(t),g?b(this,t):c(v(this),(r=t,function(t,n){return r!==C?+r(t,n)||0:n!=n?-1:t!=t?1:0===t&&0===n?0<1/t&&1/n<0?1:-1:n<t}));var r},!g||o)},function(t,n,r){var o=r(81),i=Math.floor,u=function(t,n){var r=t.length,e=i(r/2);return r<8?c(t,n):f(t,u(o(t,0,e),n),u(o(t,e),n),n)},c=function(t,n){for(var r,e,o=t.length,i=1;i<o;){for(r=t[e=i];e&&0<n(t[e-1],r);)t[e]=t[--e];e!==i++&&(t[e]=r)}return t},f=function(t,n,r,e){for(var o=n.length,i=r.length,u=0,c=0;u<o||c<i;)t[u+c]=u<o&&c<i?e(n[u],r[c])<=0?n[u++]:r[c++]:u<o?n[u++]:r[c++];return t};t.exports=u},function(t,n,r){r=r(12);t.exports=r([].slice)},function(t,n,r){r=r(25).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},function(t,n,r){r=r(25);t.exports=/MSIE|Trident/.test(r)},function(t,n,r){r=r(25).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},function(t,n,r){var e=r(2),o=r(3),r=r(86);e({global:!0,bind:!0,enumerable:!0,forced:!o.setImmediate||!o.clearImmediate},{setImmediate:r.set,clearImmediate:r.clear})},function(t,n,r){var e,o,i=r(3),u=r(87),c=r(88),f=r(18),a=r(35),p=r(6),s=r(66),l=r(81),y=r(39),v=r(89),d=r(90),b=i.setImmediate,g=i.clearImmediate,h=i.process,m=i.Dispatch,x=i.Function,O=i.MessageChannel,S=i.String,w=0,j={},A="onreadystatechange";try{e=i.location}catch(t){}function T(t){var n;a(j,t)&&(n=j[t],delete j[t],n())}function P(t){return function(){T(t)}}function _(t){T(t.data)}r=function(t){i.postMessage(S(t),e.protocol+"//"+e.host)};b&&g||(b=function(t){var n=l(arguments,1);return j[++w]=function(){u(f(t)?t:x(t),C,n)},o(w),w},g=function(t){delete j[t]},d?o=function(t){h.nextTick(P(t))}:m&&m.now?o=function(t){m.now(P(t))}:O&&!v?(O=(v=new O).port2,v.port1.onmessage=_,o=c(O.postMessage,O)):i.addEventListener&&f(i.postMessage)&&!i.importScripts&&e&&"file:"!==e.protocol&&!p(r)?(o=r,i.addEventListener("message",_,!1)):o=A in y("script")?function(t){s.appendChild(y("script"))[A]=function(){s.removeChild(this),T(t)}}:function(t){setTimeout(P(t),0)}),t.exports={set:b,clear:g}},function(t,n){var r=Function.prototype,e=r.apply,o=r.bind,i=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(o?i.bind(e):function(){return i.apply(e,arguments)})},function(t,n,r){var e=r(12),o=r(27),i=e(e.bind);t.exports=function(t,n){return o(t),n===C?t:i?i(t,n):function(){return t.apply(n,arguments)}}},function(t,n,r){r=r(25);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},function(t,n,r){var e=r(13),r=r(3);t.exports="process"==e(r.process)}],o.c=e,o.d=function(t,n,r){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)o.d(r,e,function(t){return n[t]}.bind(null,e));return r},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=0)}();Simple Custom CSS and JS -->
<style type="text/css">
#cookie-law-info-bar {
	min-width: 610px !important;
}
</style>
<!-- end Simple Custom CSS and JS -->
<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
	if(document.getElementById('sROfUCrkFhSV')){
  		console.log('Blocking Ads: No');
	} else {
  		console.log('Blocking Ads: Yes');
	}
});</script>
<!-- end Simple Custom CSS and JS -->
<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
//Browser types scripts

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1 - 71+
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

</script>
<!-- end Simple Custom CSS and JS -->
<style type="text/css">.simple-banner{display:none;}</style><style type="text/css">.simple-banner{position:fixed;}</style><style type="text/css">.simple-banner .simple-banner-text{font-size:16;}</style><style type="text/css">.simple-banner{background:#ffffff;}</style><style type="text/css">.simple-banner .simple-banner-text{color: #ffffff;}</style><style type="text/css">.simple-banner .simple-banner-text a{color:#ffffff;}</style><style type="text/css">.simple-banner{padding: 0 20px !important;}</style><style type="text/css">.simple-banner .simple-banner-text{padding: 0 20px !important;}</style><style type="text/css">.simple-banner .simple-banner-button{margin: 0 65px !important;}</style><style id="simple-banner-site-custom-css-dummy" type="text/css"></style><script id="simple-banner-site-custom-js-dummy" type="text/javascript"></script>        <script type="text/javascript" src="https://www.youronlinechoices.com/se/wp-content/themes/YourOptionsOnline/javascript/jquery-1.7.1.min.js"></script>
        <script src="https://www.youronlinechoices.com/se/wp-content/themes/YourOptionsOnline/javascript/jquery.magnific-popup.min.js" type="text/javascript"></script>

		<script type="text/javascript">
		/** Retrieve URL value as string */
		var $url = window.location.href;
		
		/**Retrieve Cookie Data Info */
		function getCookieValue(name) {
    			var cookieArr = document.cookie.split(";");
    			for(var i = 0; i < cookieArr.length; i++) {
        			var cookiePair = cookieArr[i].split("=");
        			if (name == cookiePair[0].trim()) {
            				return decodeURIComponent(cookiePair[1]);
        			}
    			}
    			return null;
		}

		var today = new Date();
		var currentDate = today.toGMTString();

		/** Set IE Cookie */
		function setIECookie (name, value) {
			document.cookie = name + "=" + value + "; path=/";
		}

 		/** Delete IE Cookie */
		function deleteIECookie (name) {
			document.cookie = name + "=; path=/; expires=Sat, 9-Nov-2017 00:17:10 GMT";
		}

		/**Set Cookie */
		function setCookie(name, value, path) {
    			document.cookie = name + "=" + value + ";path=" + path +"; expires=0";
		}
		/**Delete Cookie */
		function deleteCookie(name, path) { 
			document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + path + ";";
		}

		document.addEventListener("DOMContentLoaded", function(event) {
			var $cookieNoticeLawInfoNecessary = getCookieValue('cookielawinfo-checkbox-necessary');
			var $cookieNoticeLawInfoNonNecessary = getCookieValue('cookielawinfo-checkbox-non-necessary');
			var $cookieNoticeValue = getCookieValue('viewed_cookie_policy');
			if (!isIE) {
				deleteCookie('cookielawinfo-checkbox-necessary', '/');
				setCookie('cookielawinfo-checkbox-necessary', $cookieNoticeLawInfoNecessary, '/');

				deleteCookie('cookielawinfo-checkbox-non-necessary', '/');
				setCookie('cookielawinfo-checkbox-non-necessary', $cookieNoticeLawInfoNonNecessary, '/');

				deleteCookie('viewed_cookie_policy', '/');

				if ($cookieNoticeValue !== null) {
					setCookie('viewed_cookie_policy', $cookieNoticeValue, '/');
				}
			} 

			if (isIE) {
				if (getCookieValue('viewed_cookie_policy') === 'yes' || getCookieValue('viewed_cookie_policy') === 'no') {
					deleteIECookie('cookielawinfo-checkbox-necessary');
					setIECookie('cookielawinfo-checkbox-necessary', $cookieNoticeLawInfoNecessary)
					deleteIECookie('cookielawinfo-checkbox-non-necessary');
					setIECookie('cookielawinfo-checkbox-non-necessary', $cookieNoticeLawInfoNonNecessary); 
					deleteIECookie('viewed_cookie_policy');
					setIECookie('viewed_cookie_policy', $cookieNoticeValue);
				}
			}

		});

		
	</script>
	<!-- Matomo -->
		<script type="text/javascript">
		  var _paq = window._paq || [];
		  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
		  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
		  if (getCookieValue('viewed_cookie_policy') !== 'yes') {
			console.log('no cookies');
			_paq.push(['disableCookies']);
		  }
		  _paq.push(['trackPageView']);
		  _paq.push(['enableLinkTracking']);
		  (function() {
		    var u="https://analytics.youronlinechoices.com/";
		    _paq.push(['setTrackerUrl', u+'matomo.php']);
		    _paq.push(['setSiteId', '2']);
		    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
		  })();
		</script>
	<!-- End Matomo Code -->
	</head>
	<body>
	
		<div class="w960 mauto">
			<a href="https://www.youronlinechoices.com/se" class="logo" title=""></a>
		</div>

		<script type="text/javascript">
		function getCookie(name) {
			var re = new RegExp(name + "=([^;]+)");
			var value = re.exec(document.cookie);
    			return (value != null) ? unescape(value[1]) : null;
  		}
		</script><script>

function cbChange(obj) {
                var cbs = document.getElementsByClassName("cb");
                for (var i = 0; i < cbs.length; i++) {
                    cbs[i].checked = false;
                }
                obj.checked = true;
            }
function cb1Change(obj) {
                var cbs = document.getElementsByClassName("cb1");
                for (var i = 0; i < cbs.length; i++) {
                    cbs[i].checked = false;
                }
                obj.checked = true;
            }

            function cb2Change(obj) {
                var cbs = document.getElementsByClassName("cb2");
                for (var i = 0; i < cbs.length; i++) {
                    cbs[i].checked = false;
                }
                obj.checked = true;
            }

            function cb3Change(obj) {
                var cbs = document.getElementsByClassName("cb3");
                for (var i = 0; i < cbs.length; i++) {
                    cbs[i].checked = false;
                }
                obj.checked = true;
            }
</script>


		<div class="mainContentInside">
			<div class="w960 mauto">
						

                
				<div class="mt10 pb20">
					
					<div class="w250 fleft">
						<div class="mobileMenu">Menu</div>

						<ul id="menu-left-menu" class="leftmenu whitebg p10"><li id="menu-item-322" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-322"><a href="https://www.youronlinechoices.com/se/" aria-current="page">Hem</a></li>
<li id="menu-item-321" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-321"><a href="https://www.youronlinechoices.com/se/om-intressebaserad-annonsering">Om intressebaserad annonsering</a></li>
<li id="menu-item-316" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-316"><a href="https://www.youronlinechoices.com/se/dina-val">Dina val</a></li>
<li id="menu-item-319" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-319"><a href="https://www.youronlinechoices.com/se/fem-tips">Fem tips</a></li>
<li id="menu-item-320" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-320"><a href="https://www.youronlinechoices.com/se/vanliga-fragor-och-svar">Vanliga frågor och svar</a></li>
<li id="menu-item-333" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-333"><a href="https://www.youronlinechoices.com/se/forklarande-filmer">Förklarande filmer</a></li>
<li id="menu-item-318" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-318"><a href="https://www.youronlinechoices.com/se/ordlista">Ordlista</a></li>
<li id="menu-item-327" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-327"><a href="https://www.youronlinechoices.com/se/att-anmala">Att anmäla</a></li>
<li id="menu-item-317" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-317"><a href="https://www.youronlinechoices.com/se/hjalpsida">Hjälpsida</a></li>
</ul>                        
					</div>
					<div class="w660 fright">
			
						
						<h1 class="dosismedium s34 blue normal block">Hem</h1>
						
												<div class="block p10 whitebg s12 bubble top mt15">Välkommen till denna guide om intressebaserad annonsering och skydd av personuppgifter på Internet.

På denna webbplats hittar du information om hur intressebaserad marknadsföring fungerar. Här finns även information om <a href="om-intressebaserad-annonsering">cookies</a> och vad du kan göra för att skydda dina personuppgifter på Internet. Det finns också en enkel guide för intressebaserad annonsering som ger en snabb översikt i ämnet om du inte har tid att läsa all information på den här sidan. Om du inte hittar informationen du söker kan du <a href="mailto:feedback@iabsverige.se">kontakta oss</a>.</div>
												<div class="homeBlocks mb20 whitebg p10 mt10">
							<div class="homeBlocks mb20">
<div class="tacenter mt10">
<div class="iblock cell fleft redbg">
			<a href="https://www.youronlinechoices.com/se/om-intressebaserad-annonsering" title=""><br />
				<span class="icon about"></span><br />
			</a><br />
			<label><a href="https://www.youronlinechoices.com/se/om-intressebaserad-annonsering">Om intressebaserad annonsering</a></label>
		</div>
<div class="iblock cell redbg">
			<a href="https://www.youronlinechoices.com/se/dina-val" title=""><br />
				<span class="icon adchoices"></span><br />
			</a><br />
			<label><a href="https://www.youronlinechoices.com/se/dina-val">Dina val</a></label>
		</div>
<div class="iblock cell fright redbg">
			<a href="https://www.youronlinechoices.com/se/fem-tips" title=""><br />
				<span class="icon toptips"></span><br />
			</a><br />
			<label><a href="https://www.youronlinechoices.com/se/fem-tips">Fem tips</a></label>
		</div>
</p></div>
<div class="tacenter mt10">
<div class="iblock cell fleft">
			<a href="https://www.youronlinechoices.com/se/vanliga-fragor-och-svar" title=""><br />
				<span class="icon faq"></span><br />
			</a><br />
			<label><a href="https://www.youronlinechoices.com/se/vanliga-fragor-och-svar">Vanliga frågor och svar</a></label>
		</div>
<div class="iblock cell">
			<a href="https://www.youronlinechoices.com/se/hjalpsida" title=""><br />
				<span class="icon help"></span><br />
			</a><br />
			<label><a href="https://www.youronlinechoices.com/se/hjalpsida">Hjälpsida</a></label>
		</div>
<div class="iblock cell fright">
			<a href="https://www.youronlinechoices.com/se/ordlista" title=""><br />
				<span class="icon jargon"></span><br />
			</a><br />
			<label><a href="https://www.youronlinechoices.com/se/ordlista">Ordlista</a></label>
		</div>
</p></div>
<div class="tacenter mt10">
<div class="iblock cell fleft">
			<a href="https://www.youronlinechoices.com/se/forklarande-filmer" title="Förklarande filmer"><br />
				<span class="icon videos"></span><br />
			</a><br />
			<label><a href="https://www.youronlinechoices.com/se/forklarande-filmer">Förklarande filmer</a></label>
		</div>
<div class="iblock cell">
			<a href="https://www.youronlinechoices.com/se/att-anmala" title="Att anmäla"><br />
				<span class="icon complaints"></span><br />
			</a><br />
			<label><a href="https://www.youronlinechoices.com/se/att-anmala">Att anmäla</a></label>
		</div>
<div class="iblock cell fright" style="background: none;"></div>
</p></div>
</div>
						</div>
												
					</div>
				
				</div>
			
			
			</div>
		</div>

        <script>


/*Function used to set the old surveyCookie DEPRECATED*/
//        function setCookie(cname,cvalue,exdays) {
//            var d = new Date();
//            d.setTime(d.getTime() + (exdays*24*60*60*1000));
//            var expires = "expires=" + d.toGMTString();
//            document.cookie = cname+"="+cvalue+"; "+expires;
//        }

/*Function used to get the old surveyCookie */
/*Still used to remove any old cookies present on user browsers*/
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        window.onload = function() {

            
            var surveyCookie = getCookie("surveyCookie");

            if (surveyCookie != "") {

                //Inseamna ca avem cookie-ul deja pus
                    //alert('E setat cookie ' + testCookie);
		/*Remove the surveyCookie if it exists*/
		document.cookie = "surveyCookie= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
            }

/*Else used to put in place data for the surveyCookie DEPRECATED */
//         else {
//
//             setTimeout(function () {
//                 if ($("#click_simulator").length)
//                     document.getElementById('click_simulator').click();
//
// //TODO Decomenteaza pentru live
//                 setCookie("surveyCookie", "isSet", 30);
//                 $.ajax({
//                     type: "POST",
//                     url: window.location.origin + "/uk/wp-content/themes/YourOptionsOnline/survey_handler.php",
//                     data: {
//                         action: '10'
//                     },
//
//                     success: function (response) {
//
//
//                         console.log(response);
//
//                     },
//                     error: function () {
//
//                         console.log("Error");
//                     }
//                 });
//
//             }, 1000);
//
//         }

    
        };
        

          jQuery(document).ready(function($){



            $('#close_button').on( "click", function() {
              $.magnificPopup.close();
            });

            $('.first-popup-link, .second-popup-link,.third-popup-link').magnificPopup({
                closeBtnInside:true
            });


            jQuery('.popup-with-zoom-anim').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,
                
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });

            jQuery(function () {
                jQuery('.popup-modal').magnificPopup({
                    type: 'inline',
                    preloader: false,
                    focus: '#username',
                    modal: true
                });

            });

            jQuery(document).on('click', '.popup-modal-dismiss', function (e) {
                    
                    if(confirm('Are you sure you want to close the survey?'))
                        jQuery.magnificPopup.close();

                });

                jQuery(document).on('click', '.popup-modal-dismiss-end', function (e) {
                    
                    
                        jQuery.magnificPopup.close();

                });

    
    });
        </script>

		<div class="w960 mauto mt10 pb50 footer">
		
			<div class="fleft w425 pt15">
				Copyright &copy; 2009 - 2024 EDAA
			</div>
			
			<div class="fleft w535 taright">
                                <ul id="menu-footer-menu" class="footermenu whitebg p10"><li id="menu-item-463" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-463"><a href="https://www.youronlinechoices.com/se/allmannavillkor-och-bestammelser">Villkor och bestämmelser</a></li>
<li id="menu-item-462" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-462"><a href="https://www.youronlinechoices.com/se/var-integritetspolicy">Vår integritetspolicy</a></li>
<li id="menu-item-323" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-323"><a href="https://www.youronlinechoices.com/uk/feedback">Kontakta oss</a></li>
</ul>			</div>
			
		</div>
		
		<!--googleoff: all--><div id="cookie-law-info-bar" data-nosnippet="true"><h5 class="cli_messagebar_head">Denna webbplats använder sig av cookies</h5><span>Denna webbplats använder sig av cookies. En del cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte vägras om du vill besöka webbplatsen. Vi använder andra cookies för analysändmål. Du kan neka till detta om du vill<br />
<br><a role='button' data-cli_action="accept" id="cookie_action_close_header" class="medium cli-plugin-button cli-plugin-main-button cookie_action_close_header cli_action_button" style="margin:10px">Godkänn</a> <a role='button' id="cookie_action_close_header_reject" class="medium cli-plugin-button cli-plugin-main-button cookie_action_close_header_reject cli_action_button" data-cli_action="reject" style="margin:10px">Avvisa</a> <a href="https://www.youronlinechoices.com/se/var-integritetspolicy" id="CONSTANT_OPEN_URL" class="medium cli-plugin-button cli-plugin-main-link" style="margin:10px">Läs mer</a></span></div><div id="cookie-law-info-again" data-nosnippet="true"><span id="cookie_hdr_showagain">Privacy &amp; Cookies Policy</span></div><div class="cli-modal" data-nosnippet="true" id="cliSettingsPopup" tabindex="-1" role="dialog" aria-labelledby="cliSettingsPopup" aria-hidden="true">
  <div class="cli-modal-dialog" role="document">
	<div class="cli-modal-content cli-bar-popup">
		  <button type="button" class="cli-modal-close" id="cliModalClose">
			<svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path><path d="M0 0h24v24h-24z" fill="none"></path></svg>
			<span class="wt-cli-sr-only">Close</span>
		  </button>
		  <div class="cli-modal-body">
			<div class="cli-container-fluid cli-tab-container">
	<div class="cli-row">
		<div class="cli-col-12 cli-align-items-stretch cli-px-0">
			<div class="cli-privacy-overview">
				<h4>Privacy Overview</h4>				<div class="cli-privacy-content">
					<div class="cli-privacy-content-text">This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website. We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent. You also have the option to opt-out of these cookies. But opting out of some of these cookies may have an effect on your browsing experience.</div>
				</div>
				<a class="cli-privacy-readmore" aria-label="Show more" role="button" data-readmore-text="Show more" data-readless-text="Show less"></a>			</div>
		</div>
		<div class="cli-col-12 cli-align-items-stretch cli-px-0 cli-tab-section-container">
												<div class="cli-tab-section">
						<div class="cli-tab-header">
							<a role="button" tabindex="0" class="cli-nav-link cli-settings-mobile" data-target="necessary" data-toggle="cli-toggle-tab">
								Necessary							</a>
															<div class="wt-cli-necessary-checkbox">
									<input type="checkbox" class="cli-user-preference-checkbox"  id="wt-cli-checkbox-necessary" data-id="checkbox-necessary" checked="checked"  />
									<label class="form-check-label" for="wt-cli-checkbox-necessary">Necessary</label>
								</div>
								<span class="cli-necessary-caption">Always Enabled</span>
													</div>
						<div class="cli-tab-content">
							<div class="cli-tab-pane cli-fade" data-id="necessary">
								<div class="wt-cli-cookie-description">
									Necessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensures basic functionalities and security features of the website. These cookies do not store any personal information.								</div>
							</div>
						</div>
					</div>
																	<div class="cli-tab-section">
						<div class="cli-tab-header">
							<a role="button" tabindex="0" class="cli-nav-link cli-settings-mobile" data-target="non-necessary" data-toggle="cli-toggle-tab">
								Non-necessary							</a>
															<div class="cli-switch">
									<input type="checkbox" id="wt-cli-checkbox-non-necessary" class="cli-user-preference-checkbox"  data-id="checkbox-non-necessary" checked='checked' />
									<label for="wt-cli-checkbox-non-necessary" class="cli-slider" data-cli-enable="Enabled" data-cli-disable="Disabled"><span class="wt-cli-sr-only">Non-necessary</span></label>
								</div>
													</div>
						<div class="cli-tab-content">
							<div class="cli-tab-pane cli-fade" data-id="non-necessary">
								<div class="wt-cli-cookie-description">
									Any cookies that may not be particularly necessary for the website to function and is used specifically to collect user personal data via analytics, ads, other embedded contents are termed as non-necessary cookies. It is mandatory to procure user consent prior to running these cookies on your website.								</div>
							</div>
						</div>
					</div>
										</div>
	</div>
</div>
		  </div>
		  <div class="cli-modal-footer">
			<div class="wt-cli-element cli-container-fluid cli-tab-container">
				<div class="cli-row">
					<div class="cli-col-12 cli-align-items-stretch cli-px-0">
						<div class="cli-tab-footer wt-cli-privacy-overview-actions">
						
															<a id="wt-cli-privacy-save-btn" role="button" tabindex="0" data-cli-action="accept" class="wt-cli-privacy-btn cli_setting_save_button wt-cli-privacy-accept-btn cli-btn">SAVE &amp; ACCEPT</a>
													</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</div>
<div class="cli-modal-backdrop cli-fade cli-settings-overlay"></div>
<div class="cli-modal-backdrop cli-fade cli-popupbar-overlay"></div>
<!--googleon: all--><div class="simple-banner simple-banner-text" style="display:none !important"></div><!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function(event) {		
		// get the current URL
    	var currentUrl = window.location.href;

    	// regex pattern for detecting privacy policy in URL
    	var pp_en = new RegExp('protecting-your-privacy');
		var pp_fr = new RegExp('protection-de-votre-vie-privee');
		var pp_nl = new RegExp('beschermingvan-jouw-privacy');
		var pp_de = new RegExp('ihr-datenschutz');
		var pp_it = new RegExp('proteggere-la-vostra-privacy');
		var pp_ro = new RegExp('protejarea-confidentialitatii-dumneavoastra');
		var pp_lv = new RegExp('aizsargajot-jusukonfidencialitati');
		var pp_gr = new RegExp('protecting-your-privacy');
		var pp_at = new RegExp('ihr-datenschutz');
		var pp_bg = new RegExp('%d0%9f%d0%be%d0%bb%d0%b8%d1%82%d0%b8%d0%ba%d0%b0-%d0%b7%d0%b0-%d0%bf%d0%be%d0%b2%d0%b5%d1%80%d0%b8%d1%82%d0%b5%d0%bb%d0%bd%d0%be%d1%81%d1%82');
        var pp_den = new RegExp('vi-beskytter-dine-personlige-oplysninger');
  		var pp_ee = new RegExp('teie-privaatsuse-kaitse');
  		var pp_fi = new RegExp('suojelemme-yksityisyyttasi');
        var pp_hu = new RegExp('adatvedelem');
        var pp_lt = new RegExp('privatumo-politika');
  		var pp_ma = new RegExp('privacy-policy');
        var pp_nor = new RegExp('sikring-av-personvern');
  		var pp_pt = new RegExp('politica-de-privacidade');
  		var pp_sk = new RegExp('ochrana-vasho-sukromia');
  		var pp_es = new RegExp('politica-de-privacidad-y-cookies');
        var pp_se = new RegExp('var-integritetspolicy');


		if (pp_en.test(currentUrl) || pp_fr.test(currentUrl) || pp_nl.test(currentUrl) || pp_de.test(currentUrl) || pp_it.test(currentUrl) || pp_ro.test(currentUrl) || pp_lv.test(currentUrl)
		    || pp_gr.test(currentUrl) || pp_at.test(currentUrl) || pp_bg.test(currentUrl) || pp_den.test(currentUrl) || pp_ee.test(currentUrl) || pp_fi.test(currentUrl) || pp_hu.test(currentUrl)
            || pp_lt.test(currentUrl) || pp_ma.test(currentUrl) || pp_nor.test(currentUrl) || pp_pt.test(currentUrl) || pp_sk.test(currentUrl) || pp_es.test(currentUrl) || pp_se.test(currentUrl)) 				 
                {
			if (document.body.className.match('cli-barmodal-open')) {
				  document.body.className = 'cli-barmodal-closed';
				  var overlay = document.getElementsByClassName('cli-popupbar-overlay')[0];
				  overlay.parentNode.removeChild(overlay);
				  var modal = document.getElementById('cookie-law-info-bar');
				  modal.parentNode.removeChild(modal);
			}
		}

	});</script>
<!-- end Simple Custom CSS and JS -->
				
	<!-- Matomo Opt-Out Script-->
		<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function(event) {
		if (getCookieValue('viewed_cookie_policy') !== 'yes' && getCookieValue('viewed_cookie_policy') !== null) {
		    // require user consent before processing data
		    console.log('no tracking');
		    _paq.push(['optUserOut']);
		}
		if (getCookieValue('viewed_cookie_policy') === 'yes') {
  			// user has given consent to process their data
	    	console.log('tracking');
	    	_paq.push(['forgetUserOptOut']);
		}
	});
	</script>
	<!-- End of Matomo Opt-Out Script -->


	<script type="text/javascript">
		document.addEventListener("DOMContentLoaded", function(event) {
			if (getCookie('third_party_c_t') === 'hey+there%21'){

				if (!isIE) {
					deleteCookie('third_party_c_t', '/');
				}

				if (isIE) {
					deleteIECookie('third_party_c_t');
				}
			}

		});
	</script>	
	</body>
</html>
