(function(){'use strict';/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var m=this||self;function aa(a,b){a:{var c=["CLOSURE_FLAGS"];for(var d=m,e=0;e<c.length;e++)if(d=d[c[e]],null==d){c=null;break a}c=d}a=c&&c[a];return null!=a?a:b};function ba(a){a=a.o;const b=encodeURIComponent;let c="";a.platform&&(c+="&uap="+b(a.platform));a.platformVersion&&(c+="&uapv="+b(a.platformVersion));a.uaFullVersion&&(c+="&uafv="+b(a.uaFullVersion));a.architecture&&(c+="&uaa="+b(a.architecture));a.model&&(c+="&uam="+b(a.model));a.bitness&&(c+="&uab="+b(a.bitness));a.fullVersionList&&(c+="&uafvl="+b(a.fullVersionList.map(d=>b(d.brand)+";"+b(d.version)).join("|")));"undefined"!==typeof a.wow64&&(c+="&uaw="+Number(a.wow64));return c} 
function ca(a,b){return a.g?a.l.slice(0,a.g.index)+b+a.l.slice(a.g.index):a.l+b}function da(a){let b="&act=1&ri=1";a.h&&a.o&&(b+=ba(a));return ca(a,b)}function ea(a,b){return a.h&&a.i||a.m?1==b?a.h?a.i:ca(a,"&dct=1"):2==b?ca(a,"&ri=2"):ca(a,"&ri=16"):a.l} 
var fa=class{constructor({url:a,X:b}){this.l=a;this.o=b&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.i=c}}};function ha(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};function ia(a){let b=0;for(const c in a)b++};var q=class{constructor(a){this.g=a}toString(){return this.g.toString()}},ka={},la=new q("about:invalid#zClosurez",ka);var ma=aa(610401301,!1),na=aa(572417392,!0);var oa;const pa=m.navigator;oa=pa?pa.userAgentData||null:null;function ra(a){return ma?oa?oa.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function r(a){var b;a:{if(b=m.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function t(){return ma?!!oa&&0<oa.brands.length:!1}function sa(){return t()?ra("Chromium"):(r("Chrome")||r("CriOS"))&&!(t()?0:r("Edge"))||r("Silk")};/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
class ta{constructor(a){this.ga=a}}function v(a){return new ta(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const ua=new ta(a=>/^[^:]*([/?#]|$)/.test(a));var va=v("http"),wa=v("https"),xa=v("ftp"),ya=v("mailto"),za=v("intent"),Aa=v("market"),Ba=v("itms"),Ca=v("itms-appss");const Da=[v("data"),va,wa,ya,xa,ua];function Ea(a,b=Da){if(a instanceof q)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof ta&&d.ga(a))return new q(a,ka)}}function Fa(a,b=Da){return Ea(a,b)||la};function Ga(){return r("iPhone")&&!r("iPod")&&!r("iPad")};function Ha(a){Ha[" "](a);return a}Ha[" "]=function(){};var Ja=Ga(),Ka=r("iPad");var La=Ga()||r("iPod"),Ma=r("iPad");!r("Android")||sa();sa();r("Safari")&&(sa()||(t()?0:r("Coast"))||(t()?0:r("Opera"))||(t()?0:r("Edge"))||(t()?ra("Microsoft Edge"):r("Edg/"))||t()&&ra("Opera"));var Na={},Oa=null;var Pa=!na;let Qa=!na;function w(a){return Array.prototype.slice.call(a)};var x=Symbol(),Ra=Symbol();function Sa(a){const b=a[x]|0;1!==(b&1)&&(Object.isFrozen(a)&&(a=w(a)),A(a,b|1))}function C(a,b,c){return c?a|b:a&~b}var A=(a,b)=>{a[x]=b;return a};function Ta(){var a=[];a[x]|=1;return a}function E(a){a[x]|=34;return a}function Ua(a,b){A(b,(a|0)&-14591)}function Va(a,b){A(b,(a|34)&-14557)}function Wa(a){a=a>>14&1023;return 0===a?536870912:a};var Xa={},Ya={};function Za(a){return!(!a||"object"!==typeof a||a.ia!==Ya)}function $a(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let ab,bb=!na;function cb(a,b,c){if(!Array.isArray(a)||a.length)return!1;const d=a[x]|0;if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;A(a,d|1);return!0}var F;const db=[];A(db,55);F=Object.freeze(db);function eb(a){if(a&2)throw Error();} 
class fb{constructor(a,b,c){this.i=0;this.g=a;this.h=b;this.l=c}next(){if(this.i<this.g.length){const a=this.g[this.i++];return{done:!1,value:this.h?this.h.call(this.l,a):a}}return{done:!0,value:void 0}}[Symbol.iterator](){return new fb(this.g,this.h,this.l)}}class gb{}class ib{}Object.freeze(new gb);Object.freeze(new ib);function jb(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a};function kb(a){if(!Number.isFinite(a))throw jb("enum");return a|0}function lb(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}function G(a){return null==a||"string"===typeof a?a:void 0}function nb(a,b,c,d){if(null!=a&&"object"===typeof a&&a.C===Xa)return a;if(!Array.isArray(a))return c?d&2?(a=b[Ra])?b=a:(a=new b,E(a.j),b=b[Ra]=a):b=new b:b=void 0,b;let e=c=a[x]|0;0===e&&(e|=d&32);e|=d&2;e!==c&&A(a,e);return new b(a)} 
function ob(a,b,c){if(b){if("string"!==typeof a)throw Error();}else a=G(a)??(c?"":void 0);return a};let pb;const qb={},rb=(()=>class extends Map{constructor(){super()}})();function ub(a){return a}function vb(a){if(a.s&2)throw Error("Cannot mutate an immutable Map");} 
var H=class extends rb{constructor(a,b,c=ub,d=ub){super();let e=a[x]|0;e|=64;A(a,e);this.s=e;this.B=b;this.u=c;this.J=this.B?wb:d;for(let f=0;f<a.length;f++){const h=a[f],g=c(h[0],!1,!0);let k=h[1];b?void 0===k&&(k=null):k=d(h[1],!1,!0,void 0,void 0,e);super.set(g,k)}}W(a=xb){return this.G(a)}G(a=xb){const b=[],c=super.entries();for(var d;!(d=c.next()).done;)d=d.value,d[0]=a(d[0]),d[1]=a(d[1]),b.push(d);return b}clear(){vb(this);super.clear()}delete(a){vb(this);return super.delete(this.u(a,!0,!1))}entries(){var a= 
this.U();return new fb(a,yb,this)}keys(){return this.ha()}values(){var a=this.U();return new fb(a,H.prototype.get,this)}forEach(a,b){super.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){vb(this);a=this.u(a,!0,!1);return null==a?this:null==b?(super.delete(a),this):super.set(a,this.J(b,!0,!0,this.B,!1,this.s))}has(a){return super.has(this.u(a,!1,!1))}get(a){a=this.u(a,!1,!1);const b=super.get(a);if(void 0!==b){var c=this.B;return c?(c=this.J(b,!1,!0,c,this.fa,this.s),c!==b&&super.set(a,c), 
c):b}}U(){return Array.from(super.keys())}ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};H.prototype.toJSON=void 0;H.prototype.ia=Ya;function wb(a,b,c,d,e,f){a=nb(a,d,c,f);e&&(a=zb(a));return a}function xb(a){return a}function yb(a){return[a,this.get(a)]}let Ab;function Bb(){return Ab||(Ab=new H(E([]),void 0,void 0,void 0,qb))};function Cb(a,b){return Db(b)}function Db(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return bb||!cb(a,void 0,9999)?a:void 0;if(null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}if(a instanceof H)return a=a.W(),Pa||0!==a.length?a:void 0}}return a};function Eb(a,b,c){a=w(a);var d=a.length;const e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(const f in e)b[f]=c(e[f])}return a}function Fb(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&(a[x]|0)&1?void 0:f&&(a[x]|0)&2?a:Gb(a,b,c,void 0!==d,e,f);else if($a(a)){const h={};for(let g in a)h[g]=Fb(a[g],b,c,d,e,f);a=h}else a=b(a,d);return a}} 
function Gb(a,b,c,d,e,f){const h=d||c?a[x]|0:0;d=d?!!(h&32):void 0;a=w(a);for(let g=0;g<a.length;g++)a[g]=Fb(a[g],b,c,d,e,f);c&&c(h,a);return a}function Hb(a){return Fb(a,Ib,void 0,void 0,!1,!1)}function Ib(a){return a.C===Xa?a.toJSON():a instanceof H?a.W(Hb):Db(a)};function Jb(a,b,c=Va){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[x]|0;if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?A(a,(d|34)&-12293):Gb(a,Jb,d&4?Va:c,!0,!1,!0)}a.C===Xa?(c=a.j,d=c[x],a=d&2?a:Kb(a,c,d,!0)):a instanceof H&&!(a.s&2)&&(c=E(a.G(Jb)),a=new H(c,a.B,a.u,a.J));return a}}function Lb(a){const b=a.j;return Kb(a,b,b[x],!1)}function Kb(a,b,c,d){a=a.constructor;pb=b=Mb(b,c,d);b=new a(b);pb=void 0;return b} 
function Mb(a,b,c){const d=c||b&2?Va:Ua,e=!!(b&32);a=Eb(a,b,f=>Jb(f,e,d));a[x]=a[x]|32|(c?2:0);return a}function zb(a){const b=a.j,c=b[x];return c&2?Kb(a,b,c,!1):a};function I(a,b){a=a.j;return J(a,a[x],b)}function J(a,b,c,d){if(-1===c)return null;if(c>=Wa(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}function Nb(a,b,c){const d=a.j;let e=d[x];eb(e);L(d,e,b,c);return a} 
function L(a,b,c,d,e){const f=Wa(b);if(c>=f||e){let h=b;if(b&256)e=a[a.length-1];else{if(null==d)return h;e=a[f+(+!!(b&512)-1)]={};h|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);h!==b&&A(a,h);return h}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}function Ob(a,b,c){a=J(a,b,c);return Array.isArray(a)?a:F}function Pb(a,b){0===a&&(a=M(a,b,!1));return a=C(a,1,!0)}function Qb(a){return!!(2&a)&&!!(4&a)||!!(2048&a)} 
function Rb(a,b,c,d,e,f){const h=b&2;a:{var g=c,k=b&2;c=!1;if(null==g){if(k){a=Bb();break a}g=[]}else if(g.constructor===H){if(0==(g.s&2)||k){a=g;break a}g=g.G()}else Array.isArray(g)?c=!!((g[x]|0)&2):g=[];if(k){if(!g.length){a=Bb();break a}c||(c=!0,E(g))}else if(c){c=!1;k=w(g);for(g=0;g<k.length;g++){const l=k[g]=w(k[g]);Array.isArray(l[1])&&(l[1]=E(l[1]))}g=k}c||((g[x]|0)&64?g[x]&=-33:32&b&&(g[x]|=32));f=new H(g,e,ob,f);L(a,b,d,f,!1);a=f}if(null==a)return a;!h&&e&&(a.fa=!0);return a} 
function Sb(a,b){a=a.j;const c=a[x];return Rb(a,c,J(a,c,b),b,void 0,ob)}function N(a,b,c){a=a.j;let d=a[x];const e=J(a,d,c,!1);b=nb(e,b,!1,d);b!==e&&null!=b&&L(a,d,c,b,!1);return b}function O(a,b,c){b=N(a,b,c);if(null==b)return b;a=a.j;let d=a[x];if(!(d&2)){const e=zb(b);e!==b&&(b=e,L(a,d,c,b,!1))}return b}function M(a,b,c){a=C(a,2,!!(2&b));a=C(a,32,!!(32&b)&&c);return a=C(a,2048,!1)} 
function Tb(a,b){a=a.j;let c=a[x];const d=2&c?1:2;let e=Ob(a,c,b);var f=e[x]|0;if(!(4&f)){if(4&f||Object.isFrozen(e))e=w(e),f=M(f,c,!1),c=L(a,c,b,e);for(var h=0,g=0;h<e.length;h++){const k=G(e[h]);null!=k&&(e[g++]=k)}g<h&&(e.length=g);f=Pb(f,c);f=C(f,20,!0);f=C(f,4096,!1);f=C(f,8192,!1);A(e,f);2&f&&Object.freeze(e)}Qb(f)||(h=f,(g=1===d)?f=C(f,2,!0):f=C(f,32,!1),f!==h&&A(e,f),g&&Object.freeze(e));2===d&&Qb(f)&&(e=w(e),f=M(f,c,!1),A(e,f),L(a,c,b,e));return e} 
function Ub(a,b){a=I(a,b);return null==a?a:Number.isFinite(a)?a|0:void 0}function R(a,b,c=!1){a=I(a,b);return(null==a||"boolean"===typeof a?a:"number"===typeof a?!!a:void 0)??c}function S(a,b){return G(I(a,b))??""}function T(a,b,c=0){return Ub(a,b)??c}function Vb(a,b,c){if(null!=c&&"boolean"!==typeof c)throw a=typeof c,Error(`Expected boolean but got ${"object"!=a?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);return Nb(a,b,c)} 
function Wb(a,b,c){if(null!=c){if("number"!==typeof c)throw jb("int32");if(!Number.isFinite(c))throw jb("int32");c|=0}Nb(a,b,c)}function U(a,b,c){if(null!=c&&"string"!==typeof c)throw Error();return Nb(a,b,c)}function Xb(a,b,c){Nb(a,b,null==c?c:kb(c))};function Yb(a){ab=!0;try{return JSON.stringify(a.toJSON(),Cb)}finally{ab=!1}}var V=class{constructor(a){a:{null==a&&(a=pb);pb=void 0;if(null==a){var b=96;a=[]}else{if(!Array.isArray(a))throw Error();b=a[x]|0;if(b&64)break a;var c=a;b|=64;var d=c.length;if(d&&(--d,$a(c[d]))){b|=256;c=d-(+!!(b&512)-1);if(1024<=c)throw Error();b=b&-16760833|(c&1023)<<14}}A(a,b)}this.j=a}toJSON(){if(ab)var a=Zb(this,this.j,!1);else a=Gb(this.j,Ib,void 0,void 0,!1,!1),a=Zb(this,a,!0);return a}};V.prototype.C=Xa; 
V.prototype.toString=function(){return Zb(this,this.j,!1).toString()}; 
function Zb(a,b,c){const d=a.constructor.A;var e=(c?a.j:b)[x],f=Wa(e),h=!1;if(d&&bb){if(!c){b=w(b);var g;if(b.length&&$a(g=b[b.length-1]))for(h=0;h<d.length;h++)if(d[h]>=f){Object.assign(b[b.length-1]={},g);break}h=!0}f=b;c=!c;g=a.j[x];a=Wa(g);g=+!!(g&512)-1;var k;for(let P=0;P<d.length;P++){var l=d[P];if(l<a){l+=g;var n=f[l];null==n?f[l]=c?F:Ta():c&&n!==F&&Sa(n)}else{if(!k){var p=void 0;f.length&&$a(p=f[f.length-1])?k=p:f.push(k={})}n=k[l];null==k[l]?k[l]=c?F:Ta():c&&n!==F&&Sa(n)}}}k=b.length;if(!k)return b; 
let y,B;if($a(p=b[k-1])){a:{var u=p;f={};c=!1;for(var z in u){a=u[z];if(Array.isArray(a)){g=a;if(!Qa&&cb(a,d,+z)||!Pa&&Za(a)&&0===a.size)a=null;a!=g&&(c=!0)}null!=a?f[z]=a:c=!0}if(c){for(let P in f){u=f;break a}u=null}}u!=p&&(y=!0);k--}for(e=+!!(e&512)-1;0<k;k--){z=k-1;p=b[z];if(!(null==p||!Qa&&cb(p,d,z-e)||!Pa&&Za(p)&&0===p.size))break;B=!0}if(!y&&!B)return b;var K;h?K=b:K=Array.prototype.slice.call(b,0,k);b=K;h&&(b.length=k);u&&b.push(u);return b};var $b=class extends V{constructor(){super()}};var ac=class extends V{};var bc=class extends V{};var cc=class extends V{v(){return S(this,3)}V(a){Vb(this,5,a)}};var W=class extends V{v(){return S(this,1)}V(a){Vb(this,2,a)}};var dc=class extends V{};function ec(a){a=a.j;var b=a[x],c=b,d=!(2&b),e=!!(2&c),f=e?1:2;b=1===f;f=2===f;d&&(d=!e);e=Ob(a,c,7);var h=e[x]|0;const g=!!(4&h);if(!g){h=Pb(h,c);var k=e,l=c,n=!!(2&h);n&&(l=C(l,2,!0));let p=!n,y=!0,B=0,u=0;for(;B<k.length;B++){const z=nb(k[B],cc,!1,l);if(z instanceof cc){if(!n){const K=!!((z.j[x]|0)&2);p&&(p=!K);y&&(y=K)}k[u++]=z}}u<B&&(k.length=u);h=C(h,4,!0);h=C(h,16,y);h=C(h,8,p);A(k,h);n&&Object.freeze(k)}k=!!(8&h)||b&&!e.length;if(d&&!k){Qb(h)&&(e=w(e),h=M(h,c,!1),c=L(a,c,7,e));d=e;k=h;for(h= 
0;h<d.length;h++)l=d[h],n=zb(l),l!==n&&(d[h]=n);k=C(k,8,!0);k=C(k,16,!d.length);A(d,k);h=k}Qb(h)||(d=h,b?h=C(h,!e.length||16&h&&(!g||32&h)?2:2048,!0):h=C(h,32,!1),h!==d&&A(e,h),b&&Object.freeze(e));f&&Qb(h)&&(e=w(e),h=M(h,c,!1),A(e,h),L(a,c,7,e));return e}var fc=class extends V{h(){return null!=G(I(this,19))}g(){return R(this,21,!1)}};fc.A=[6,7];function gc(a){a=a.j;const b=a[x];return Rb(a,b,J(a,b,1),1,fc)}var hc=class extends V{};hc.A=[17];var ic=class extends V{g(){return R(this,1)}h(){return R(this,2)}};var jc=class extends V{constructor(){super()}};function kc(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var lc={capture:!0},mc={passive:!0},nc=kc(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function oc(a){return a?a.passive&&nc()?a:a.capture||!1:!1}function pc(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,oc(d))};function qc(a,b){if(!(b instanceof q||b instanceof q)){b=String(b);b:{try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}"javascript:"===c&&(b="about:invalid#zClosurez");b=new q(b,ka)}a.href=b instanceof q&&b.constructor===q?b.g:"type_error:SafeUrl"};var rc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function tc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var uc=/#|$/; 
function vc(a,b){var c=a.search(uc),d=tc(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}var wc=/[?&]($|#)/;function xc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var yc=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let zc=[];const Ac=()=>{const a=zc;zc=[];for(const b of a)try{b()}catch{}}; 
var Bc=a=>{zc.push(a);1==zc.length&&(window.Promise?Promise.resolve().then(Ac):window.setImmediate?setImmediate(Ac):setTimeout(Ac,0))},Cc=a=>{var b=X;"complete"===b.readyState||"interactive"===b.readyState?Bc(a):b.addEventListener("DOMContentLoaded",a)},Dc=a=>{var b=window;"complete"===b.document.readyState?Bc(a):b.addEventListener("load",a)};function Ec(a=document){return a.createElement("img")};function Fc(a,b,c=null,d=!1){Gc(a,b,c,d)}function Gc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=Ec(a.document);if(c||d){const f=h=>{c&&c(h);if(d){h=a.google_image_requests;const g=Array.prototype.indexOf.call(h,e,void 0);0<=g&&Array.prototype.splice.call(h,g,1)}e.removeEventListener&&e.removeEventListener("load",f,oc());e.removeEventListener&&e.removeEventListener("error",f,oc())};pc(e,"load",f);pc(e,"error",f)}e.src=b;a.google_image_requests.push(e)} 
function Lc(a,b){var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):Fc(a,b,void 0,!1)};let Mc=0;function Nc(a){return(a=Oc(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Oc(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)} 
function Pc(a){if(!(.01<Math.random())){const b=Oc(a,document.currentScript);a=`https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Nc(a)}&sample=${.01}`;Lc(window,a)}};var X=document,Qc=window;const Rc=[va,wa,ya,xa,ua,Aa,Ba,za,Ca];function Sc(a,b){if(a instanceof q)return a;const c=Fa(a,Rc);c===la&&b(a);return c} 
var Tc=a=>{var b=`${"http:"===Qc.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)sc(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");0>c&&(c=b.length);d=b.indexOf("?");if(0>d||d>c){d=c;var f=""}else f=b.substring(d+1,c);c=[b.slice(0,d),f,b.slice(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};var Uc=a=>{var b=X;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class Vc{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Wc=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Xc=class{constructor(a,b){this.g=a;this.h=b}},Yc=class{constructor(a,b){this.url=a;this.T=!!b;this.depth=null}};let Zc=null;function $c(){const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function ad(){const a=m.performance;return a&&a.now?a.now():null};var bd=class{constructor(a,b){var c=ad()||$c();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const Y=m.performance,cd=!!(Y&&Y.mark&&Y.measure&&Y.clearMarks),dd=kc(()=>{var a;if(a=cd){var b;if(null===Zc){Zc="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(Zc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Zc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function ed(a){a&&Y&&dd()&&(Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class fd{constructor(){var a=window;this.h=[];this.i=a||m;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=dd()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new bd(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;Y&&dd()&&Y.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(ad()||$c())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;Y&&dd()&&Y.mark(b);!this.g|| 
2048<this.h.length||this.h.push(a)}}};function gd(a,b){const c={};c[a]=b;return[c]}function hd(a,b,c,d,e){const f=[];xc(a,function(h,g){(h=id(h,b,c,d,e))&&f.push(g+"="+h)});return f.join(b)} 
function id(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let h=0;h<a.length;h++)f.push(id(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(hd(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function jd(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function kd(a,b){let c="https://pagead2.googlesyndication.com"+b,d=jd(a)-b.length;if(0>d)return"";a.g.sort(function(f,h){return f-h});b=null;let e="";for(let f=0;f<a.g.length;f++){const h=a.g[f],g=a.h[h];for(let k=0;k<g.length;k++){if(!d){b=null==b?h:b;break}let l=hd(g[k],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.i;break}b=null==b?h:b}}}a="";null!=b&&(a=e+"trn="+b);return c+a}class ld{constructor(){this.i="&";this.h={};this.l=0;this.g=[]}};function md(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b} 
function nd(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{ed(e),c=a.m(b,new Vc(f,{message:md(f)}),void 0,void 0)}catch(h){a.l(217,h)}if(c)window.console?.error?.(f);else throw f;}return d}function od(a,b){var c=pd;return(...d)=>nd(c,a,()=>b.apply(void 0,d))} 
var sd=class{constructor(a=null){this.pinger=qd;this.g=a;this.h=null;this.i=!1;this.m=this.l}l(a,b,c,d,e){e=e||"jserror";let f;try{const Q=new ld;var h=Q;h.g.push(1);h.h[1]=gd("context",a);b.error&&b.meta&&b.id||(b=new Vc(b,{message:md(b)}));if(b.msg){let D=b.msg;null==D.substring&&(D=`b/320546888 ${typeof D} ${D}`);h=Q;var g=D.substring(0,512);h.g.push(2);h.h[2]=gd("msg",g)}var k=b.meta||{};b=k;if(this.h)try{this.h(b)}catch(D){}if(d)try{d(b)}catch(D){}d=Q;k=[k];d.g.push(3);d.h[3]=k;d=m;k=[];let Ia; 
b=null;do{var l=d;try{var n;if(n=!!l&&null!=l.location.href)b:{try{Ha(l.foo);n=!0;break b}catch(D){}n=!1}var p=n}catch{p=!1}p?(Ia=l.location.href,b=l.document&&l.document.referrer||null):(Ia=b,b=null);k.push(new Yc(Ia||""));try{d=l.parent}catch(D){d=null}}while(d&&l!=d);for(let D=0,Hc=k.length-1;D<=Hc;++D)k[D].depth=Hc-D;l=m;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==k.length-1)for(p=1;p<k.length;++p){var y=k[p];y.url||(y.url=l.location.ancestorOrigins[p-1]||"", 
y.T=!0)}var B=k;let sb=new Yc(m.location.href,!1);l=null;const tb=B.length-1;for(y=tb;0<=y;--y){var u=B[y];!l&&Wc.test(u.url)&&(l=u);if(u.url&&!u.T){sb=u;break}}u=null;const Rd=B.length&&B[tb].url;0!=sb.depth&&Rd&&(u=B[tb]);f=new Xc(sb,u);if(f.h){B=Q;var z=f.h.url||"";B.g.push(4);B.h[4]=gd("top",z)}var K={url:f.g.url||""};if(f.g.url){var P=f.g.url.match(rc),qa=P[1],Ic=P[3],Jc=P[4];z="";qa&&(z+=qa+":");Ic&&(z+="//",z+=Ic,Jc&&(z+=":"+Jc));var Kc=z}else Kc="";qa=Q;K=[K,{url:Kc}];qa.g.push(5);qa.h[5]= 
K;rd(this.pinger,e,Q,this.i,c)}catch(Q){try{rd(this.pinger,e,{context:"ecmserr",rctx:a,msg:md(Q),url:f&&f.g.url},this.i,c)}catch(Ia){}}return!0}};class td{};function rd(a,b,c,d=!1,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof ld?f=c:(f=new ld,xc(c,(g,k)=>{var l=f;const n=l.l++;g=gd(k,g);l.g.push(n);l.h[n]=g}));const h=kd(f,"/pagead/gen_204?id="+b+"&");h&&Fc(m,h)}catch(f){}}function ud(){var a=qd,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}class vd{constructor(){this.g=Math.random()}};let qd,pd;const Z=new fd;var wd=()=>{window.google_measure_js_timing||(Z.g=!1,Z.h!=Z.i.google_js_reporting_queue&&(dd()&&Array.prototype.forEach.call(Z.h,ed,void 0),Z.h.length=0))};(a=>{qd=a??new vd;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());ud();pd=new sd(Z);pd.h=b=>{const c=Mc;0!==c&&(b.jc=String(c),b.shv=Nc(c))};pd.i=!0;"complete"==window.document.readyState?wd():Z.g&&pc(window,"load",()=>{wd()})})(); 
var xd=(a,b)=>od(a,b),yd=a=>{var b=td;var c="S";b.S&&b.hasOwnProperty(c)||(c=new b,b.S=c);b=[];!a.eid&&b.length&&(a.eid=b.toString());rd(qd,"gdn-asoch",a,!0)};function zd(a=window){return a};ia({ua:0,ta:1,qa:2,la:3,ra:4,ma:5,sa:6,oa:7,pa:8,ka:9,na:10,va:11});ia({xa:0,ya:1,wa:2});function Ad(a){var b=new Bd,c=b.j;const d=c[x]|0;eb(b.j[x]);var e=d&2;b=J(c,d,1,!1);Array.isArray(b)||(b=F);const f=!!(d&32);let h=b[x]|0;0===h&&f&&!e?(h|=33,A(b,h)):h&1||(h|=1,A(b,h));if(e)h&2||E(b),Object.freeze(b);else if(2&h||2048&h)b=w(b),e=1,f&&(e|=32),A(b,e),L(c,d,1,b,!1);c=b;if(Array.isArray(a))for(var g=0;g<a.length;g++)c.push(kb(a[g]));else for(g of a)c.push(kb(g))}var Bd=class extends V{constructor(){super()}};Bd.A=[1];[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);Ad([1,8,10,11,12,2,3,4,5,15,16]);Ad([1,6,7,9,10,11,12,2,3,4,5,13,14]);Ad([1,6,7,9,10,11,12,2,3,4,5,13,14]);new Bd;var Cd=(a,b)=>{b=S(a,2)||b;if(!b)return"";if(R(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];Sb(a,4).forEach((e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Dd=(a,b=[])=>{b=0<b.length?b:Uc("data-asoch-targets");a=gc(a);const c=[];for(let g=0;g<b.length;++g){var d=b[g].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let k of e)if(!a.has(k)){f=!1;break}if(f){f=a.get(e[0]); 
for(d=1;d<e.length;++d){var h=a.get(e[d]);f=Lb(f).toJSON();h=h.toJSON();const k=Math.max(f.length,h.length);for(let l=0;l<k;++l)null==f[l]&&(f[l]=h[l]);f=new fc(f)}e=Sb(f,4);null!=Ub(f,5)&&e.set("nb",T(f,5,0).toString());c.push({element:b[g],data:f})}else yd({type:1,data:d})}return c},Gd=(a,b,c,d)=>{c=Cd(b,c);if(0!==c.length){if("2"===vc(c,"ase")&&1087!==d){const e=609===d;let f;const h=!!X.featurePolicy?.allowedFeatures().includes("attribution-reporting");f=e?4:h?6:5;let g="";e||h&&!Ed(c)?(c=Fd(c, 
"nis",f.toString()),a.setAttribute("attributionsrc",g)):h&&Ed(c)&&(g=Fd(da(new fa({url:c})),"nis",f.toString()),a.setAttribute("attributionsrc",g))}qc(a,Sc(c,Tc(d)));a.target||(a.target=null!=G(I(b,11))?S(b,11):"_top")}},Hd=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!R(a,1)){const c=b.element;Gd(c,a,c.href,609)}},Id=(a,b,c)=>{b=encodeURIComponent(b);const d=encodeURIComponent(c);c=new RegExp("[?&]"+b+"=([^&]+)");const e=c.exec(a);b=b+"="+d;return e?a.replace(c,e[0].charAt(0)+b):a.replace("?", 
"?"+b+"&")},Ed=a=>!/[?&]dsh=1(&|$)/.test(a)&&/[?&]ae=1(&|$)/.test(a),Jd=a=>{const b=m.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&void 0!==N(a,dc,8)){const d=S(O(a,dc,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,S(O(a,dc,8),6));break}}},Kd=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&void 0!==N(a,W,12)&&(d.push(O(a,W,12)),c.push(O(a,W,12).v()));e=(f,h)=>{if(h)for(const g of d)h[g.v()]&&g.V(!0)};a=m.oneAfmaInstance;for(const f of c)a?.canOpenAndroidApp(f,e,()=>{},b)},Md=(a,b,c,d, 
e)=>{if(!b||void 0===N(b,dc,8))return!1;const f=O(b,dc,8);let h=S(f,2);Sb(b,10).forEach((l,n)=>{h=Id(h,n,l)});Ld(b)&&R(b,15)&&!/[?&]label=/.test(c)&&(c=Fd(c,"label","deep_link_fallback"));const g=l=>d.openStoreOverlay(l,void 0,S(f,6)),k=l=>Lc(Qc,l);return d.redirectForStoreU2({clickUrl:c,trackingUrl:S(f,3),finalUrl:h,pingFunc:R(b,13)?d.httpTrack:e?k:d.click,openFunc:a?.g()?g:d.openIntentOrNativeApp,isExternalClickUrl:R(b,13)})},Nd=(a,b,c,d)=>{c&&c.startsWith("intent:")?d.openIntentOrNativeApp(c): 
a?b?d.openBrowser(c):d.openChromeCustomTab(c):d.openSystemBrowser(c,{useFirstPackage:!0,useRunningProcess:!0})},Pd=(a,b,c,d,e,f,h,g=!1,k=!1)=>{const l=R(e,15);if(l&&null!=G(I(e,22)))Nd(c,d,S(e,22),h);else{var n=Ed(f);if(a&&b&&(!l||!n)&&(f=g?Od(f):Od(f,h.click),k&&e?.g()))return;Nd(c,d,f,h)}},Od=(a,b=null)=>{if(null!==b){const c=new fa({url:a});if(c.h&&c.i||c.m)return b(da(c)),ea(c,1)}else return{X:b}={},b=new fa({url:a,X:b}),b.h&&b.i||b.m?navigator.sendBeacon?navigator.sendBeacon(da(b),"")?ea(b,1): 
ea(b,2):ea(b,0):a;return a},Qd=(a,b=!0)=>{b&&Qc.fetch?Qc.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||Fc(Qc,a)}):Fc(Qc,a)},Fd=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Ld=a=>{for(const b of ec(a))if(3===T(b,1,0)&&S(b,2))return!0;return!1};var Sd=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&2==a.length?a[1]:"";var Td=class extends V{constructor(){super()}};function Ud(a,b){return U(a,2,b)}function Vd(a,b){return U(a,3,b)}function Wd(a,b){return U(a,4,b)}function Xd(a,b){return U(a,5,b)}function Yd(a,b){return U(a,9,b)} 
function Zd(a,b){{const n=a.j;let p=n[x];eb(p);if(null==b)L(n,p,10);else{var c=b[x]|0,d=c,e=!!(2&c)||!!(2048&c),f=e||Object.isFrozen(b),h;if(h=!f)h=!1;var g=!0,k=!0;for(let y=0;y<b.length;y++){var l=b[y];e||(l=!!((l.j[x]|0)&2),g&&(g=!l),k&&(k=l))}e||(c=C(c,5,!0),c=C(c,8,g),c=C(c,16,k));if(h||f&&c!==d)b=w(b),d=0,c=M(c,p,!0);c!==d&&A(b,c);L(n,p,10,b)}}return a}function $d(a,b){return Vb(a,11,b)}function ae(a,b){return U(a,1,b)}function be(a,b){return Vb(a,7,b)}var ce=class extends V{constructor(){super()}}; 
ce.A=[10,6];const de="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function ee(){var a=window;if("function"!==typeof a.navigator?.userAgentData?.getHighEntropyValues)return null;const b=a.google_tag_data??(a.google_tag_data={});if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(de).then(c=>{b.uach??(b.uach=c);return c});return b.uach_promise=a} 
function fe(a){return $d(Zd(Xd(Ud(ae(Wd(be(Yd(Vd(new ce,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),a.fullVersionList?.map(b=>{var c=new Td;c=U(c,1,b.brand);return U(c,2,b.version)})||[]),a.wow64||!1)}function ge(){return ee()?.then(a=>fe(a))??null};function he(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==G(I(c,2))&&U(c,2,a.href)}}function ie(a,b){return ha(a,c=>c.element===b)}function je(a){Cc(xd(556,()=>{new ke(a||{})}))} 
function le(a,b){if(!b.defaultPrevented||a.F===b){for(var c,d,e=b.target;(!c||!d)&&e;){d||"A"!=e.tagName||(d=e);var f=e.hasAttribute("data-asoch-targets"),h=e.hasAttribute("data-asoch-fixed-value");if(!c)if(h)c=new fc(JSON.parse(e.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==e.tagName||f)if(f=f&&"true"===e.getAttribute("data-asoch-is-dynamic")?Dd(a.h,[e]):a.g,f=ie(f,e))c=f.data;e=e.parentElement}e=c&&!R(c,1);if(a.I&&a.l&&b.defaultPrevented)me(a,b,d,e?c:a.l);else{if(e){if(!a.I&&b.defaultPrevented){me(a, 
b,d,c);return}f=c;for(var g of Tb(f,6))Qd(g)}a.K&&e&&c.g()&&(yc(b),(g=c)&&S(g,2)&&(f=Id(S(g,2),"ae","1"),U(g,2,f)));if(d&&e){c=e?c:null;(g=ie(a.g,d))?g=g.data:(g=new fc,U(g,2,d.href),U(g,11,d.target||"_top"),a.g.push({element:d,data:g}));Gd(d,c||g,S(g,2),557);ne(a,b,d,c);for(var k of Tb(a.h,17))g=X.body,e={},"function"===typeof window.CustomEvent?f=new CustomEvent(k,e):(f=document.createEvent("CustomEvent"),f.initCustomEvent(k,!!e.bubbles,!!e.cancelable,e.detail)),g.dispatchEvent(f);if(c?.h()){g= 
k=new $b;e=T(c,5,0);Xb(g,1,e);g=Sd(d.href,"nx");""!=g&&Wb(k,2,+g);g=Sd(d.href,"ny");""!=g&&Wb(k,3,+g);g=Sd(d.href,"bg");""!=g&&U(k,4,g);g=Sd(d.href,"nm");""!=g&&Wb(k,5,+g);g=Sd(d.href,"mb");""!=g&&Wb(k,6,+g);g=d.href;e=g.search(uc);f=0;for(var l=[];0<=(h=tc(g,f,"bg",e));)l.push(g.substring(f,h)),f=Math.min(g.indexOf("&",h)+1||e,e);l.push(g.slice(f));g=l.join("").replace(wc,"$1");qc(d,Sc(g,Tc(1211)));f=S(c,19);g=null!=lb(I(c,20))?lb(I(c,20))??0:null;h=Yb(k);k=a.o;e=zd(m);l=new jc;f=U(l,1,f);f=U(f, 
4,h);f=U(f,10,Date.now().toString());null!==g&&Wb(f,2,g);null!==k&&U(f,3,k);Xb(f,9,4);e?.fence?.reportEvent({eventType:"click",eventData:JSON.stringify(f),destination:["buyer"]});e?.fence?.reportEvent({eventType:"click",destination:["component-seller"]});Xb(f,9,5);e?.fence?.setReportEventDataForAutomaticBeacons({eventType:"reserved.top_navigation",eventData:JSON.stringify(f),destination:["buyer"],once:!0});Xb(f,9,7);e?.fence?.setReportEventDataForAutomaticBeacons({eventType:"reserved.top_navigation_start", 
eventData:JSON.stringify(f),destination:["buyer"],once:!0})}R(a.h,16)||a.M?oe(a,b,d,c):(k="",(g=m.oneAfmaInstance)&&(k=g.appendClickSignals(d.href)),pe(a,b,d,c,k))}}}} 
function me(a,b,c,d){if(a.F===b&&a.H){const f=new bc(a.H),h=S(d,9);var e="";switch(T(f,4,1)){case 2:if(lb(I(f,2))??0)e="blocked_fast_click";else if(S(f,1)||S(f,7))e="blocked_border_click";break;case 3:e=X;e=e.getElementById?e.getElementById("common_15click_anchor"):null;const g=window;if("function"===typeof g.copfcChm&&e){d=Lb(d);Xb(d,5,12);Sb(d,4).set("nb",(12).toString());const k=ie(a.g,e);k?k.data=d:a.g.push({element:e,data:d});!a.R&&c&&(ne(a,b,c,d),U(d,2,c.href));g.copfcChm(b,Cd(d,e.href),null, 
void 0!==N(f,ac,10)?Yb(O(f,ac,10)):null);a.R&&ne(a,b,e,d)}e="onepointfiveclick_first_click"}h&&e&&Qd(h+"&label="+e,!1);Pc(a.N)}} 
function ne(a,b,c,d){if(!R(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(qc(c,Sc(e[0],Tc(557)));!c.id;)if(f="asoch-id-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),!X.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,X.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"=== 
typeof window.ja&&window.ja(f,d?T(d,5,0):0);"function"===typeof window.vti&&window.vti(c);a.i&&"function"===typeof window.ss&&(a.P?window.ss(f,1,a.i):window.ss(a.i,1));0<e.length&&(a=0<a.o.length&&!d?.h()?c.href+"&uach="+encodeURIComponent(a.o)+e[1]:c.href+e[1],qc(c,Sc(a,Tc(557))))}} 
async function oe(a,b,c,d){let e="";var f=m.oneAfmaInstance;if(f&&(b.preventDefault(),e=await f.appendClickSignalsAsync(c.href)||"",a.M)){if(a.aa)return;if(f=await f.getNativeClickMeta()){if(f.customClickGestureEligible)return;e=Fd(e,"nas",f.encodedNas)}}pe(a,b,c,d,e)} 
function pe(a,b,c,d,e){const f=R(a.h,2),h=f&&300<Date.now()-a.O,g=m.oneAfmaInstance;g?(yc(b),(()=>{let k=R(d,13)?e:g.logScionEventAndAddParam(e);if(!a.D&&d&&void 0!==N(d,W,12)){var l=O(d,W,12).v();if(0<ec(d).length)for(const n of ec(d));R(O(d,W,12),2)?(g.click(k),g.openAndroidApp(l),l=!0):l=!1}else l=!1;l||Md(a.m,d,k,g,a.ba)||Pd(f,h,a.da,a.D,d,k,g,a.ca,a.K)})()):(b=window,a.Z&&b.pawsig&&"function"===typeof b.pawsig.clk?b.pawsig.clk(c):h&&(b=null!=c.getAttribute("attributionsrc")&&"6"===vc(c.getAttribute("attributionsrc"), 
"nis")?Od(c.href,()=>{}):Od(c.href),b!==c.href&&qc(c,Sc(b,Tc(599)))));h&&(a.O=Date.now());Pc(a.N)} 
var ke=class{constructor(a){this.D=La||Ja||Ma||Ka;var b=Uc("data-asoch-meta");if(1!==b.length)yd({type:2,data:b.length});else{this.N=70;this.h=new hc(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.L=a["extra-meta"]?new hc(JSON.parse(a["extra-meta"])):null;this.M="true"===a["is-fsn"];this.aa="true"===a["is-tap-disabled-for-fsn"];this.m=a["ios-store-overlay-config"]?new ic(JSON.parse(a["ios-store-overlay-config"])):null;this.da="true"===a["use-cct-over-browser"];this.ba="true"===a["send-ac-click-ping-by-js"]; 
this.R="true"===a["correct-redirect-url-for-och-15-click"];this.ca="true"===a["send-click-ping-by-js-in-och"];this.Y="true"===a["middle-clicks-in-och"];this.I="true"===a["default-msg-in-och"];this.Z="true"===a["enable-paw"];this.K="true"===a["allow-redirection-muted-in-och"];this.o="";b=ge();null!=b&&b.then(c=>{var d=Yb(c);c=[];for(var e=0,f=0;f<d.length;f++){var h=d.charCodeAt(f);255<h&&(c[e++]=h&255,h>>=8);c[e++]=h}d=3;void 0===d&&(d=0);if(!Oa)for(Oa={},e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), 
f=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var g=e.concat(f[h].split(""));Na[h]=g;for(var k=0;k<g.length;k++){var l=g[k];void 0===Oa[l]&&(Oa[l]=k)}}d=Na[d];e=Array(Math.floor(c.length/3));f=d[64]||"";for(h=g=0;g<c.length-2;g+=3){var n=c[g],p=c[g+1];l=c[g+2];k=d[n>>2];n=d[(n&3)<<4|p>>4];p=d[(p&15)<<2|l>>6];l=d[l&63];e[h++]=k+n+p+l}k=0;l=f;switch(c.length-g){case 2:k=c[g+1],l=d[(k&15)<<2]||f;case 1:c=c[g],e[h]=d[c>>2]+d[(c&3)<<4|k>>4]+l+f}this.o=e.join("")});this.g=Dd(this.h);this.I&&(this.l=null, 
gc(this.h).forEach(c=>{null!=this.l||null==G(I(c,2))||null==G(I(c,9))||R(c,13)||(this.l=c)}));this.ea=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.O=-Infinity;this.i=S(this.h,5)||"";this.P=R(this.h,11);this.L&&(this.P=R(this.L,11));this.H=this.F=null;R(this.h,3)||(Hd(this.g),Vb(this.h,3,!0));he(this.g);a=m.oneAfmaInstance;!this.D&&a&&Kd(this.g,this.ea);if(a&&this.m?.h())switch(b=()=>{const c=lb(I(this.m,4))??0;0<c?m.setTimeout(()=>{Jd(this.g)},c):Jd(this.g)},T(this.m,3,0)){case 1:a.runOnOnShowEvent(b); 
break;case 2:Dc(b);break;default:Jd(this.g)}pc(X,"click",xd(557,c=>{le(this,c)}),lc);this.Y&&pc(X,"auxclick",xd(557,c=>{1===c.button&&le(this,c)}),lc);this.i&&"function"===typeof window.ss&&pc(X.body,"mouseover",xd(626,()=>{window.ss(this.i,0)}),mc);"function"===typeof window.ivti&&window.ivti(X.body);a=window;a.googqscp&&"function"===typeof a.googqscp.registerCallback&&a.googqscp.registerCallback((c,d)=>{this.F=c;this.H=d})}}};var qe=xd(555,a=>je(a));Mc=70;const re=Oc(70,document.currentScript);if(null==re)throw Error("JSC not found 70");const se={},te=re.attributes;for(let a=te.length-1;0<=a;a--){const b=te[a].name;0===b.indexOf("data-jcp-")&&(se[b.substring(9)]=te[a].value)}qe(se);}).call(this);
ims4/default/3c5f81f/2147483647/strip/false/crop/4176x2784+0+0/resize/1200x800!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ff4%2F25%2F40b784c547c7be65816e5ddf0c4a%2Fffl-4419.JPG","width":"4176","height":"2784"},"description":"Este viernes y sábado, la calle Isla de Flores recibe a un nuevo Desfile de Llamadas. ¿Quiénes participan y qué hay detrás de los gramilleros, las mamas viejas y el vestuario de los tamborileros?","articleBody":"Desfile de Llamadas 2024: las 45 comparsas y cuándo desfilan, el recorrido y qué significa cada figura","articleSection":"TvShow, Teatro","url":"https://www.elpais.com.uy/tvshow/teatro/desfile-de-llamadas-2024-las-45-comparsas-y-cuando-desfilan-el-recorrido-y-que-significa-cada-figura","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.elpais.com.uy/tvshow/teatro/desfile-de-llamadas-2024-las-45-comparsas-y-cuando-desfilan-el-recorrido-y-que-significa-cada-figura"},"keywords":"Carnaval 2024"}</script>
<link rel="amphtml" href="https://www.elpais.com.uy/tvshow/teatro/desfile-de-llamadas-2024-las-45-comparsas-y-cuando-desfilan-el-recorrido-y-que-significa-cada-figura?_amp=true">
<meta name="brightspot.cached" content="false">
<meta name="robots" content="max-image-preview:large">

<script>
        (function () {
        'use strict';

        (()=>{'use strict';if(!window.customElements)return;const a=window.HTMLElement,b=window.customElements.define,c=window.customElements.get,d=new Map,e=new Map;let f=!1,g=!1;window.HTMLElement=function(){if(!f){const a=d.get(this.constructor),b=c.call(window.customElements,a);g=!0;const e=new b;return e}f=!1;},window.HTMLElement.prototype=a.prototype;Object.defineProperty(window,'customElements',{value:window.customElements,configurable:!0,writable:!0}),Object.defineProperty(window.customElements,'define',{value:(c,h)=>{const i=h.prototype,j=class extends a{constructor(){super(),Object.setPrototypeOf(this,i),g||(f=!0,h.call(this)),g=!1;}},k=j.prototype;j.observedAttributes=h.observedAttributes,k.connectedCallback=i.connectedCallback,k.disconnectedCallback=i.disconnectedCallback,k.attributeChangedCallback=i.attributeChangedCallback,k.adoptedCallback=i.adoptedCallback,d.set(h,c),e.set(c,h),b.call(window.customElements,c,j);},configurable:!0,writable:!0}),Object.defineProperty(window.customElements,'get',{value:(a)=>e.get(a),configurable:!0,writable:!0});})();

        /**
        @license
        Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
        This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
        The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
        The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
        Code distributed by Google as part of the polymer project is also
        subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
        */
        }());
    </script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/styleguide/webcomponents-loader/webcomponents-loader.266c0bb4f707570dca3c59bb04633dc0.gz.js"></script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/static/global/jquery.min.383ee773180ea7b22076e884314caa71.gz.js"></script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/static/global/jstorage.min.b59c5e84298859b95219818826f8be60.gz.js"></script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/static/global/epd_tools.8ae536fd7bd5a37bca8e15cb8b9d5078.gz.js"></script>
<script>
    var utms = "article";
    const hasLoguedOut = (Site.gls("loguedout",true)==1 || sessionStorage.getItem("loguedout")!==null);
    const isFirstLogin = sessionStorage.getItem("firstlogin");
    const epdDomains =  [document.location.hostname];
    const isPremiumArticle = false;
    let tagSlugs = "carnaval-2024";
    window.tagSlugs = tagSlugs;
</script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/static/global/epd_paywall.8b583a0d058c300555e0603ba5aecf58.gz.js"></script>

<script src="/user/authStatus?render=js"></script>
<script>
Site.notaId = ("0000018d-89ac-d57c-a7dd-89be81120000");
Site.config = {"profileHost":"registro.elpais.com.uy","returnParam":"redirectUrl","wsHost":"ws.elpais.com.uy","ssoUrl":"https://sso.elpais.com.uy/cas/login?service=https%3A%2F%2Fwww.elpais.com.uy%2Fcas-check&showAs=","ssoLogoutPath":"/cas/logout","ssoLoginPath":"/cas/login","ssoParamService":"?service=%s&showAs=%s","ssoHost":"sso.elpais.com.uy"};
const evolokConfig = {"ev":{"core":{"recaptchaSiteKey":"6LdBbQsTAAAAAEKM-vjwJ7dAyNTfWqu_fw4Id_wI","icDomain":"https://elp.evolok.net/ic/2.0","realmName":"default_realm","serviceName":"default"},"product":{"digital":"5b7c1cbcfe286653beabb295","promo_movistar3":"5ebeeb0bfe2866040c64fbe2","fullgratis":"5b7c1dcefe286653beabb297","promo_390":"5cb71a1ffe286603dc64a53f","digitaltarjeta":"5b7c1d790bb7fc5639f282e6","fullbonificado":"5b7c1e160bb7fc5639f282e8"},"em":{"meterHD":"false","sidCookieDomain":"www.elpais.com.uy","url":"https://elp.evolok.net/acd/api/3.0"},"pm":{"stripeKey":"pk_test_51JZJgyHPFpTNe7UssPPwv0PSv9C2YnqGU6CWw0dbz3qO9PapWA9UfeUozhMCr7L8693vfMVMtdO3XWNld6HT8h3x00pMZNlb5M","pmDomain":"https://elp.evolok.net/pm/api/v2","paywallMercadoPagoKey":"APP_USR-69506d5e-49fa-49f9-b32e-35f17c0c7c9b"}},"dab":"1.3.1","ev_url":"https://elp.evolok.net/ic/api","metering":"3.4.5","sso_url":"https://sso.elpais.com.uy/cas/login?service=https%3A%2F%2F%25s%2Fcas-check&showAs=","version":"3.22.2"};
(function asciiTech(){
    console.log("\x3c!--\n\n\n  @@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@.              \n     (@@@@@@@        @@@@        %@@@@@@@     @@@@@@@@,\n     (@@@@@@@   @@@, %@@@        %@@@@@@@    .@@@@@@@@.\n     (@@@@@@@@@@@@@,             %@@@@@@@@@@@@@@@@@@@\n     (@@@@@@@   @@@, /@@@*       %@@@@@@@                           \n     (@@@@@@@       .@@@@*       %@@@@@@@\n  @@@@@@@@@@@@@@@@@@@@@@@*    @@@@@@@@@@@@@@@.                      \n\n\n      ElPais.com.uy: Bienvenidos a nuestro código!\n      Comentarios técnicos en: https://data.elpais.com.uy/Tech\n --\x3e");
})();
statusUserEx.user = Object.freeze(statusUserEx.user);const statusUser = Object.freeze(statusUserEx);const evc = statusUser.user.epss;const exc = statusUser.user.exss;const isSuscriber = (statusUser.user.is_suscriber &&  statusUser.loggedIn);
window.datageo  =  {code:statusUser.geo};
</script>
<script>Site.rls("evmauth");var ttlChecked = false;</script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/static/global/login.d18b61f3edbeace8323fad70ee827735.gz.js"></script>
<script async="async" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script type="text/javascript">
    window.SSO_URL = "https://" + Site.config.ssoHost + Site.config.ssoLoginPath;
    window.showEPDSw = true;
    window.showEPDSwOnPM = false;
    window.showEPDSwOnAB = false;
    window.incognito = false;
    window.blocker = false;
    // window.BROWSI_ACTIVE = false;
    window.marfeel = window.marfeel || { cmd: []};
    // window.browsitag = window.browsitag || {};
    // window.browsitag.cmd = window.browsitag.cmd || [];
    
    window.NOADS = window.NOADS || [].includes("noads");
    
    window.returnPathUri = "https://" + window.location.host + window.location.pathname;
    window.FB_LOGIN_URL = "https://" + Site.config.ssoHost + "/cas/clientredirect?client_name=facebook&service=https://" + window.location.host + '/cas-check' + encodeURIComponent(("?"+ Site.config.returnParam+"="+window.returnPathUri));
    window.GG_LOGIN_URL = "https://" + Site.config.ssoHost + "/cas/clientredirect?client_name=Google&service=https://" + window.location.host + '/cas-check' + encodeURIComponent(("?"+ Site.config.returnParam+"="+window.returnPathUri));
    window.LOGIN_IFRAME_URL = window.SSO_URL +"?service=https://" + window.location.host + "/cas-check&showAs=embedFull";
    window.REGISTER_IFRAME_URL = "https://" + Site.config.profileHost + "/crearRegistro.asp?service=https://" + window.location.host + "/cas-check" + encodeURIComponent(("?"+ Site.config.returnParam+"="+window.returnPathUri));
    window.EMAIL_VALIDATION_URL = "https://" + Site.config.wsHost + "/usuarios/getvalidaccount.asp";
</script>
<script type="text/javascript">
    const extensionImage = ".svg";
    const URL_IMAGE = "https://static.elpais.com.uy/images/weather/svg/";
    $(document).ready(function() {
        let jsonWeather = null;
        try {
            jsonWeather = {"idCountry":"227","idCity":"8","cityName":"Montevideo","nombreImagen":"nt_clear","temperaturaActual":"26","humedad":"69","condicionDia":false,"pronosticos":[{"nombreDia":"Jueves","temperaturaMaxima":"31","temperatraMinima":"24","descripcion":"cielo claro","direccionViento":"ESE","velocidadViento":"33","imagen":"nt_clear","moon":{"moonPhaseId":1,"moonPhaseStr":"Luna Nueva"}},{"nombreDia":"Viernes","temperaturaMaxima":"33","temperatraMinima":"24","descripcion":"lluvia ligera","direccionViento":"ENE","velocidadViento":"32","imagen":"nt_rain","moon":{"moonPhaseId":1,"moonPhaseStr":"Luna Nueva"}},{"nombreDia":"Sábado","temperaturaMaxima":"30","temperatraMinima":"24","descripcion":"lluvia ligera","direccionViento":"NE","velocidadViento":"30","imagen":"nt_rain","moon":{"moonPhaseId":1,"moonPhaseStr":"Luna Nueva"}},{"nombreDia":"Domingo","temperaturaMaxima":"31","temperatraMinima":"23","descripcion":"lluvia moderada","direccionViento":"NO","velocidadViento":"16","imagen":"nt_rain","moon":{"moonPhaseId":2,"moonPhaseStr":"Creciente"}},{"nombreDia":"Lunes","temperaturaMaxima":"28","temperatraMinima":"22","descripcion":"lluvia moderada","direccionViento":"SE","velocidadViento":"36","imagen":"nt_rain","moon":{"moonPhaseId":2,"moonPhaseStr":"Creciente"}}]};
        } catch (err){
            console.error(err.message);
        }
        if (jsonWeather != null) {
            let tempHumidity = jsonWeather.cityName  + ", T " + jsonWeather.temperaturaActual + "° H " + jsonWeather.humedad + "%"; //  Montevideo, T 9° H 53%
            weatherCabezal.innerHTML = tempHumidity;
            document.getElementById("imageWeatherHamburguer").setAttribute("src", URL_IMAGE + jsonWeather.nombreImagen + extensionImage);
            document.getElementById("tempHumidityHamburguer").innerHTML = tempHumidity; // hamburguer
        }
    });
</script>
<script>
        /**
            This allows us to load the IE polyfills via feature detection so that they do not load
            needlessly in the browsers that do not need them. It also ensures they are loaded
            non async so that they load before the rest of our JS.
        */
        var head = document.getElementsByTagName('head')[0];
        if (!window.CSS || !window.CSS.supports || !window.CSS.supports('--fake-var', 0)) {
            var script = document.createElement('script');
            script.setAttribute('src', "https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/styleguide/util/IEPolyfills.ef9cdbf52f654e6e41327475cb86d6b6.gz.js");
            script.setAttribute('type', 'text/javascript');
            script.async = false;
            head.appendChild(script);
        }
    </script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/styleguide/All.min.377f3d1354d17e85cc73a9618a82918d.gz.js" async></script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/static/evolok/dab/1.3.1/ev-dab.min.ff8d44e5bdc299ac894125bdc221c7d5.gz.js" type="text/javascript"></script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/static/evolok/em/3.4.5/ev-em.min.53a7d89b21d2b5ea81302929356c2196.gz.js" type="text/javascript"></script>
<script src="https://el-pais.brightspotcdn.com/resource/00000180-433a-db93-a7d1-57fbfaa50000/static/evolok/widget/3.22.2/ev-widgets.min.603e06f931bacc58c5705020fba1668b.gz.js" type="text/javascript"></script>
<script type="text/javascript">
    try{
        EV.Em.init({
            url: evolokConfig.ev.em.url,
            sidCookieDomain: evolokConfig.ev.em.sidCookieDomain,
            meterHD: evolokConfig.ev.em.meterHD,
            brand: "ELP"
        });

        EV.Core.init({
            serviceName: evolokConfig.ev.core.serviceName,
            realmName: evolokConfig.ev.core.realmName,
            icDomain: evolokConfig.ev.core.icDomain,
            recaptchaSiteKey: evolokConfig.ev.core.recaptchaSiteKey,
            brand: "ELP"
        });

    }catch(e){
        console.log(e);
    }

        
    try{
        EV.Dab.init();
        EV.Dab.detectPrivateMode(function(result) {
            window.incognito = result;
            if (window.incognito) {
                ga('send', 'event', 'incognito', 'Yes', {nonInteraction: true});
                gtag('send', 'event', 'incognito', 'Yes', {nonInteraction: true});
                cX.callQueue.push(['setEventAttributes', {origin: 'eps-elpais', persistedQueryId: '20f41ee5ea9c07d55518740a90dd42af22e488ba'}]);
                cX.callQueue.push(['sendEvent', 'parameters', {modo_navegacion: 'incognito'}]);
            }
        });
        window.blocker = EV.Dab.isAdblockDetected();
        if(window.blocker){
            ga('send', 'event', 'blocker', 'Yes', {nonInteraction: true});
            gtag('send', 'event', 'blocker', 'Yes', {nonInteraction: true});
            cX.callQueue.push(['setEventAttributes', { origin: 'eps-elpais', persistedQueryId: '3635c41cbec2f7002bbd9ce2375dd4f4ed9cad7b'}]);
            cX.callQueue.push(['sendEvent', 'parameters', { modo_navegacion: 'blocker'}]);
        }

    }catch(e){}
</script><script>

  window.fbAsyncInit = function() {
      FB.init({
          
              appId : '808710783748256',
          
          xfbml : true,
          version : 'v2.9'
      });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<script async="async" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>



<script type="text/javascript">
    window.googletag = window.googletag || {cmd: []};
    //var adzone = adzone||{};

    // setup of ad slots
    var dfpAdSlotsObject = {}
    var dfpAdSlots = []
    var dfpAdIds = []
    var staticAdSlots = []
    var dfpDynamicTargeting = [];

    //let urlSitio = location.pathname;
    //let section = Site.getSection(); //urlSitio == "/" ? "home" : urlSitio.lastIndexOf("/") > 0 ? urlSitio.replace(/[^/]*$/, '').substr(0, urlSitio.replace(/[^/]*$/, '').length - 1) : urlSitio.replace(/[/]*$/, '');
    
    //dfpDynamicTargeting.push({key: "seccion", value: section});
    //dfpDynamicTargeting.push({key: "referrer", value: document.referrer});
    //dfpDynamicTargeting.push({key: "site", value: window.location.hostname});

</script>
<script type="text/javascript">
    // DFP Enable services
    var dfpEnableLazyLoad;

    googletag.cmd.push(function () {
            window.Site.log('enableLazyLoad is false', 'epd_ads')
            dfpEnableLazyLoad = false;
            googletag.pubads().enableSingleRequest();
            googletag.pubads().disableInitialLoad();

        //set global targeting dynamic keys
        if (dfpDynamicTargeting.length) {
            for (let i in dfpDynamicTargeting) {
                googletag.pubads().setTargeting(dfpDynamicTargeting[i].key, (dfpDynamicTargeting[i].value || ""));
            }
        }

        googletag.enableServices();
    });
</script>
<script type="text/javascript">
        // DFP refresh integration
        var enableRefresh = true;
        googletag.cmd.push(function() {
            var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 30;
            var REFRESH_KEY = "refresh";
            var REFRESH_VALUE = "true";
            googletag.pubads().addEventListener('impressionViewable', function (event) {                
                let refreshSlotTime = 0;
                let refreshSlot = document.getElementById(event.slot.getSlotElementId());
                if (refreshSlot != null) {
                    try {
                        let attrValue = refreshSlot.parentNode.getAttribute("data-time-refresh") || 0;
                        refreshSlotTime = parseInt(attrValue, 10);
                        Site.log('Auto refresh: ' + event.slot.getSlotElementId() + ' ' + attrValue + ' segundos', 'epd_ads')                   
                    } catch (error) {
                        //console.error(error);
                    }
                    SECONDS_TO_WAIT_AFTER_VIEWABILITY = (refreshSlotTime == 0) ? 30 : refreshSlotTime;
                }

                const slot = event.slot
                if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
                    setTimeout(function () {
                        if (slot.getTargeting('refreshed_slot')) {
                            slot.setTargeting('refreshed_slot', 'true');
                        }
                        googletag.pubads().refresh([slot]);
                    }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
                }
            });
        });
    </script>
<script type="text/javascript">
        var interstitialSlot;
        
        if (!window.location.href.includes('/noticias/inncontent')) {
            googletag.cmd.push(function() {
                let userIsSubscriber = (window.elpais && window.elpais.profile().loggedIn && window.elpais.profile().user.is_suscriber) || window.Site.gls('hmss', true) === 'true' || false;
                window.Site.log('processAd() cmd out of page: interstitial isDisabled: ' + !userIsSubscriber, 'epd_ads');
                if (!userIsSubscriber) {

                    interstitialSlot = googletag.defineOutOfPageSlot(
                        '/50548021/epd_home/interstitial',
                        googletag.enums.OutOfPageFormat.INTERSTITIAL);
                    // Slot returns null if the page or device does not support interstitials.
                    if (interstitialSlot) {
                        interstitialSlot.addService(googletag.pubads());
                        window.marfeel.cmd.push(['compass', function (compass) {
                            window.Site.log('Marfeel Interstitial', 'epd_ads')
                            compass.setInterstitialSlot(interstitialSlot);
                        }]);
                        if(window.enableLazyLoad !== 'undefined' && window.enableLazyLoad === true) {
                            googletag.display(interstitialSlot);
                        } else {
                            window.googletag.pubads().refresh([interstitialSlot])
                        }
                        googletag.pubads().addEventListener('slotOnload', function (event) {
                            if (interstitialSlot === event.slot) {
                                console.log('Interstitial is loaded.');
                            }
                        });
                    }
                }
            });
        }
    </script>
<script>function e(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=document.createElement("script");c.src=e,t?c.type="module":(c.async=!0,c.type="text/javascript",c.setAttribute("nomodule",""));var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(c,n)}function t(t,c,n){var a,o,r;null!==(a=t.marfeel)&&void 0!==a||(t.marfeel={}),null!==(o=(r=t.marfeel).cmd)&&void 0!==o||(r.cmd=[]),t.marfeel.config=n,t.marfeel.config.accountId=c;var i="https://sdk.mrf.io/statics";e("".concat(i,"/marfeel-sdk.js?id=").concat(c),!0),e("".concat(i,"/marfeel-sdk.es5.js?id=").concat(c),!1)}!function(e,c){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t(e,c,n)}(window,228,{});</script>
<script></script>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-C3K9LY9JC6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C3K9LY9JC6');
</script>
<script></script>
<script></script>

<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1975946609143501');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1975946609143501&ev=PageView&noscript=1"
/></noscript>

<script></script>
<script src="https://www.elpais.com.uy/utms.js" async defer></script>
<script></script><script async id="ebx" src="//applets.ebxcdn.com/ebx.js"></script><script></script>
<script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async></script>
<script></script>

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5H99ZWD');</script>

<script></script>
<script src="https://www.elpais.com.uy/google-analytics-3.js"></script>
<script>function removeElementsByClass(){
let host = window.location.pathname;    
substr = host.substring(0, 19);

if(substr == "/opinion/editorial/"){     
    var elements = document.getElementsByClassName("viafoura vf-wrapper");
    elements[0].parentNode.removeChild(elements[1]);
 }
    
}
$( document ).ready(function() {
removeElementsByClass();
    
});</script>
<script>function removeElementsByClassEditorial(){
let hostEditorial = window.location.pathname;    
let substrEd = hostEditorial.substring(0, 11);

if(substrEd == "/editorial/"){     
    var elements = document.getElementsByClassName("viafoura vf-wrapper");
    elements[0].parentNode.removeChild(elements[1]);
 }
    
}
$( document ).ready(function() {
removeElementsByClassEditorial();
    
});</script>
<script>/*
$( document ).ready(function() {
    if(isSuscriber){
        $("#overlay").remove()
    }
})

function removeElementsByClassEditorial(){
let hostColumnistas = window.location.pathname;    
let substrCol = hostColumnistas.substring(0, 13);

if(substrCol == "/columnistas/"){     
    var elements = document.getElementsByClassName("viafoura vf-wrapper");
    elements[0].parentNode.removeChild(elements[1]);
 }
    
}
$( document ).ready(function() {
removeElementsByClassEditorial();
    
});
*/</script>
<script>let defaultScrollCount = 0;
let dfpTop = document.querySelector(".Page-above .GoogleDfpAd-Content");

function setAdTopBehavior(dfpTop) {
    if (defaultScrollCount === 0) {
    	defaultScrollCount++;
       	dfpTop.style.position = 'static';
    } else {
        if ((document.scrollTop > 150 ||
            document.documentElement.scrollTop > 150) && dfpTop.clientHeight <= 160) {
            dfpTop.style.position = 'fixed';
            dfpTop.style.top = 'var(--adTopLeap)';
        } else {
            dfpTop.style.position = 'static';
        }
    }
}

setTimeout(() => {
	jQuery("html body .Page-above").addClass("loaded");
    
    dfpTop = document.querySelector(".Page-above .GoogleDfpAd-Content");
    
    if(dfpTop != null){
        window.addEventListener('scroll', function(){ setAdTopBehavior(dfpTop) });
    } 
}, "5000");</script>
<script>$(document).ready(function(){
	$(".Page-breadcrumbs-badge .viafoura:eq(0)").hide();
});</script>
<script>
$(document).ready(function(){
	$(document).on('click', '.ArticlePage-lede-content .viafoura .vf-comments-count', function(e){ 
        	$([document.documentElement, document.body]).animate({
            	scrollTop: $(".viafoura.vf-wrapper").offset().top
            }, 2000);
        }
	);
});
</script>
<script>$(document).ready(function() {
    const wClimaBox = document.getElementById("weatherCabezal");
	if (wClimaBox) {
        wClimaBox.style.cursor="pointer";
        wClimaBox.addEventListener("click", function(){
            window.location.href="/clima";
        });
    }
});</script>
<script>//load adsense conditionally
  function loadScript(src, callback) {
    const head = document.getElementsByTagName('head')[0]
    const scriptElement = document.createElement('script')
    scriptElement.type = 'text/javascript'
    scriptElement.async
    scriptElement.src = src
    scriptElement.onload = callback
    scriptElement.crossOrigin = 'anonymous'
    head.appendChild(scriptElement);
  }

document.addEventListener("DOMContentLoaded", function(event) {
	let userIsSubscriber =  (window.elpais &&
            window.elpais.profile().loggedIn &&
            window.elpais.profile().user.is_suscriber) ||
          window.Site.gls('hmss', true) === 'true' ||
          false;

    // Condicionar la carga del script en función de la variable `window.isSuscriber`
    let negocios = window.location.href.includes("/negocios")
    let pageSpeed = window.location.href.includes("pagespeed=true")
    let noAds = window.location.href.includes("noads=true1")
    if (!userIsSubscriber && !negocios && !pageSpeed && !noAds) {
      window.Site.log("adsense loading", "epd_ads");
      loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2728517032854978');
    }
});</script>
<script>let userIsSubscriber =
          (window.elpais &&
            window.elpais.profile().loggedIn &&
            window.elpais.profile().user.is_suscriber) ||
          window.Site.gls('hmss', true) === 'true' ||
          false

if(!userIsSubscriber){
	$(window).on("load",function(){
    var script = document.createElement("script")
    script.setAttribute("type", "text/javascript")
    script.setAttribute("src", "https://ads.vidoomy.com/elpais_944.js")
    script.setAttribute("async", "")
    $(".Page-body").append(script)
	})
}</script>
<script>window.onload = function() {
var element = document.querySelector(".usuario_ayuda a");
element.removeAttribute("href");
element.setAttribute("href", "https://api.whatsapp.com/send/?phone=59891396884");
};</script>
<script src="/reportar-error.js" async defer></script>
<script>function resizeAd(adId, intervalID) {
    let elemento = document.querySelector(adId);
	
    if (elemento) {
        let w = elemento.clientWidth;
        let h = elemento.clientHeight;

        console.log('elemento', elemento, w, h);
        
        if (w != 0 && h != 0) {
            let wOff = w >= window.innerWidth ? window.innerWidth /  w : 1;
            let hOff = h >= window.innerHeight ? window.innerHeight /  h : 1;
            let offset = wOff <= hOff ? wOff : hOff;

            console.log('woff', wOff, 'hoff', hOff);
            console.log('offset', offset);

            if (offset < 1) {
                let r = offset.toFixed(1);
                elemento.style.transformOrigin = 'top left';
                elemento.style.transform = `scale(${r}) translate(-50%, -50%)`;
            }
    
            if (intervalID) {
                clearInterval(intervalID);
            }
        }
    }
}

let resizeAttempt = setInterval(() => resizeAd('#ad-home-rm.center', resizeAttempt), 1000);

setTimeout(function () {
    clearInterval(resizeAttempt);
}, 10000);</script>
<script>
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.setAttribute('href', '//fonts.googleapis.com/css?family=Roboto:300,400,700|Bitter:300,400,700|Work+Sans:400,600');
        var relList = link.relList;

        if (relList && relList.supports('preload')) {
            link.setAttribute('as', 'style');
            link.setAttribute('rel', 'preload');
            link.setAttribute('onload', 'this.rel="stylesheet"');
            link.setAttribute('crossorigin', 'anonymous');
        } else {
            link.setAttribute('rel', 'stylesheet');
        }

        head.appendChild(link);
    </script>
<script type="text/javascript" src="https://scdn.cxense.com/cx.js" async="async"></script>
<script>
         try{
            Site.fixCx();
            cX.callQueue.push(['setSiteId', '9222346832295755875']);
            cX.callQueue.push(['sendPageViewEvent']);
            cX.setEventAttributes({origin: 'eps-elpais', persistedQueryId: '8d04adaf34eeb5b2d0950286b57defadfd73b72d'});
        }catch(e){}
    </script>
</head>
<body class="Page-body section-teatro section-tvshow  article_type_none ">

<svg xmlns="http://www.w3.org/2000/svg" style="display:none" id="iconsMap">
<symbol id="mono-icon-facebook" viewBox="0 0 10 19">
<path fill-rule="evenodd" d="M2.707 18.25V10.2H0V7h2.707V4.469c0-1.336.375-2.373 1.125-3.112C4.582.62 5.578.25 6.82.25c1.008 0 1.828.047 2.461.14v2.848H7.594c-.633 0-1.067.14-1.301.422-.188.235-.281.61-.281 1.125V7H9l-.422 3.2H6.012v8.05H2.707z">
</path>
</symbol>
<symbol id="mono-icon-tiktok" viewBox="0 0 10 19">
<path fill-rule="evenodd" d="m11.645129.17110208c.307864 2.64762712 1.78561 4.22612792 4.354871 4.39405352v2.9778808c-1.48894.1455356-2.793162-.3414487-4.31009-1.259442v5.5695326c0 7.075266-7.7133838 9.286286-10.81441009 4.214933-1.99271721-3.263354-.77245784-8.9896177 5.61991039-9.2191161v3.140209c-.4869842.0783651-1.0075536.2015101-1.4833429.3638391-1.4217701.481386-2.2278131 1.382587-2.0039123 2.972283.4310091 3.045051 6.0173345 3.946252 5.5527403-2.003912v-11.1446634h3.0842336z">
</path>
</symbol>
<symbol id="mono-icon-instagram" viewBox="0 0 17 17">
<g>
<path fill-rule="evenodd" d="M8.281 4.207c.727 0 1.4.182 2.022.545a4.055 4.055 0 0 1 1.476 1.477c.364.62.545 1.294.545 2.021 0 .727-.181 1.4-.545 2.021a4.055 4.055 0 0 1-1.476 1.477 3.934 3.934 0 0 1-2.022.545c-.726 0-1.4-.182-2.021-.545a4.055 4.055 0 0 1-1.477-1.477 3.934 3.934 0 0 1-.545-2.021c0-.727.182-1.4.545-2.021A4.055 4.055 0 0 1 6.26 4.752a3.934 3.934 0 0 1 2.021-.545zm0 6.68a2.54 2.54 0 0 0 1.864-.774 2.54 2.54 0 0 0 .773-1.863 2.54 2.54 0 0 0-.773-1.863 2.54 2.54 0 0 0-1.864-.774 2.54 2.54 0 0 0-1.863.774 2.54 2.54 0 0 0-.773 1.863c0 .727.257 1.348.773 1.863a2.54 2.54 0 0 0 1.863.774zM13.45 4.03c-.023.258-.123.48-.299.668a.856.856 0 0 1-.65.281.913.913 0 0 1-.668-.28.913.913 0 0 1-.281-.669c0-.258.094-.48.281-.668a.913.913 0 0 1 .668-.28c.258 0 .48.093.668.28.187.188.281.41.281.668zm2.672.95c.023.656.035 1.746.035 3.269 0 1.523-.017 2.62-.053 3.287-.035.668-.134 1.248-.298 1.74a4.098 4.098 0 0 1-.967 1.53 4.098 4.098 0 0 1-1.53.966c-.492.164-1.072.264-1.74.3-.668.034-1.763.052-3.287.052-1.523 0-2.619-.018-3.287-.053-.668-.035-1.248-.146-1.74-.334a3.747 3.747 0 0 1-1.53-.931 4.098 4.098 0 0 1-.966-1.53c-.164-.492-.264-1.072-.299-1.74C.424 10.87.406 9.773.406 8.25S.424 5.63.46 4.963c.035-.668.135-1.248.299-1.74.21-.586.533-1.096.967-1.53A4.098 4.098 0 0 1 3.254.727c.492-.164 1.072-.264 1.74-.3C5.662.394 6.758.376 8.281.376c1.524 0 2.62.018 3.287.053.668.035 1.248.135 1.74.299a4.098 4.098 0 0 1 2.496 2.496c.165.492.27 1.078.317 1.757zm-1.687 7.91c.14-.399.234-1.032.28-1.899.024-.515.036-1.242.036-2.18V7.689c0-.961-.012-1.688-.035-2.18-.047-.89-.14-1.524-.281-1.899a2.537 2.537 0 0 0-1.512-1.511c-.375-.14-1.008-.235-1.899-.282a51.292 51.292 0 0 0-2.18-.035H7.72c-.938 0-1.664.012-2.18.035-.867.047-1.5.141-1.898.282a2.537 2.537 0 0 0-1.512 1.511c-.14.375-.234 1.008-.281 1.899a51.292 51.292 0 0 0-.036 2.18v1.125c0 .937.012 1.664.036 2.18.047.866.14 1.5.28 1.898.306.726.81 1.23 1.513 1.511.398.141 1.03.235 1.898.282.516.023 1.242.035 2.18.035h1.125c.96 0 1.687-.012 2.18-.035.89-.047 1.523-.141 1.898-.282.726-.304 1.23-.808 1.512-1.511z">
</path>
</g>
</symbol>
<symbol id="mono-icon-mailto" viewBox="0 0 512 512">
<g>
<path d="M67,148.7c11,5.8,163.8,89.1,169.5,92.1c5.7,3,11.5,4.4,20.5,4.4c9,0,14.8-1.4,20.5-4.4c5.7-3,158.5-86.3,169.5-92.1
                c4.1-2.1,11-5.9,12.5-10.2c2.6-7.6-0.2-10.5-11.3-10.5H257H65.8c-11.1,0-13.9,3-11.3,10.5C56,142.9,62.9,146.6,67,148.7z">
</path>
<path d="M455.7,153.2c-8.2,4.2-81.8,56.6-130.5,88.1l82.2,92.5c2,2,2.9,4.4,1.8,5.6c-1.2,1.1-3.8,0.5-5.9-1.4l-98.6-83.2
                c-14.9,9.6-25.4,16.2-27.2,17.2c-7.7,3.9-13.1,4.4-20.5,4.4c-7.4,0-12.8-0.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2l-98.6,83.2
                c-2,2-4.7,2.6-5.9,1.4c-1.2-1.1-0.3-3.6,1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1c-8.8-4.5-9.3,0.8-9.3,4.9
                c0,4.1,0,205,0,205c0,9.3,13.7,20.9,23.5,20.9H257h185.5c9.8,0,21.5-11.7,21.5-20.9c0,0,0-201,0-205
                C464,153.9,464.6,148.7,455.7,153.2z"></path>
</g>
</symbol>
<symbol id="mono-icon-print" viewBox="0 0 12 12">
<g fill-rule="evenodd">
<path fill-rule="nonzero" d="M9 10V7H3v3H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3.132A2.868 2.868 0 0 1 9.132 10H9zm.5-4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM3 0h6v2H3z">
</path>
<path d="M4 8h4v4H4z"></path>
</g>
</symbol>
<symbol id="mono-icon-copylink" viewBox="0 0 12 12">
<g fill-rule="evenodd">
<path d="M10.199 2.378c.222.205.4.548.465.897.062.332.016.614-.132.774L8.627 6.106c-.187.203-.512.232-.75-.014a.498.498 0 0 0-.706.028.499.499 0 0 0 .026.706 1.509 1.509 0 0 0 2.165-.04l1.903-2.06c.37-.398.506-.98.382-1.636-.105-.557-.392-1.097-.77-1.445L9.968.8C9.591.452 9.03.208 8.467.145 7.803.072 7.233.252 6.864.653L4.958 2.709a1.509 1.509 0 0 0 .126 2.161.5.5 0 1 0 .68-.734c-.264-.218-.26-.545-.071-.747L7.597 1.33c.147-.16.425-.228.76-.19.353.038.71.188.931.394l.91.843.001.001zM1.8 9.623c-.222-.205-.4-.549-.465-.897-.062-.332-.016-.614.132-.774l1.905-2.057c.187-.203.512-.232.75.014a.498.498 0 0 0 .706-.028.499.499 0 0 0-.026-.706 1.508 1.508 0 0 0-2.165.04L.734 7.275c-.37.399-.506.98-.382 1.637.105.557.392 1.097.77 1.445l.91.843c.376.35.937.594 1.5.656.664.073 1.234-.106 1.603-.507L7.04 9.291a1.508 1.508 0 0 0-.126-2.16.5.5 0 0 0-.68.734c.264.218.26.545.071.747l-1.904 2.057c-.147.16-.425.228-.76.191-.353-.038-.71-.188-.931-.394l-.91-.843z">
</path>
<path d="M8.208 3.614a.5.5 0 0 0-.707.028L3.764 7.677a.5.5 0 0 0 .734.68L8.235 4.32a.5.5 0 0 0-.027-.707">
</path>
</g>
</symbol>
<symbol id="mono-icon-linkedin" viewBox="0 0 14 14" id=".9923718607351608" xmlns="http://www.w3.org/2000/svg">
<path d="M9.245 7.318c-.704 0-1.273.57-1.273 1.273v4.454H4.79s.038-7.636 0-8.272h3.182v.945s.985-.919 2.507-.919c1.884 0 3.22 1.364 3.22 4.012v4.234h-3.182V8.591c0-.703-.57-1.273-1.272-1.273zM1.92 3.5h-.018C.94 3.5.318 2.748.318 1.921.318 1.075.96.386 1.94.386s1.583.712 1.603 1.557c0 .828-.622 1.557-1.622 1.557zm1.597 9.545H.336V4.773h3.181v8.272z" fill-rule="evenodd" />
</symbol>
<symbol id="mono-icon-pinterest" viewBox="0 0 512 512">
<g>
<path d="M256,32C132.3,32,32,132.3,32,256c0,91.7,55.2,170.5,134.1,205.2c-0.6-15.6-0.1-34.4,3.9-51.4
                c4.3-18.2,28.8-122.1,28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2,19.2-58,43.2-58c20.4,0,30.2,15.3,30.2,33.6
                c0,20.5-13.1,51.1-19.8,79.5c-5.6,23.8,11.9,43.1,35.4,43.1c42.4,0,71-54.5,71-119.1c0-49.1-33.1-85.8-93.2-85.8
                c-67.9,0-110.3,50.7-110.3,107.3c0,19.5,5.8,33.3,14.8,43.9c4.1,4.9,4.7,6.9,3.2,12.5c-1.1,4.1-3.5,14-4.6,18
                c-1.5,5.7-6.1,7.7-11.2,5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6,53.7-139.9,160.1-139.9c85.5,0,141.8,61.9,141.8,128.3
                c0,87.9-48.9,153.5-120.9,153.5c-24.2,0-46.9-13.1-54.7-27.9c0,0-13,51.6-15.8,61.6c-4.7,17.3-14,34.5-22.5,48
                c20.1,5.9,41.4,9.2,63.5,9.2c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z"></path>
</g>
</symbol>
<symbol id="mono-icon-tumblr" viewBox="0 0 512 512">
<g>
<path d="M321.2,396.3c-11.8,0-22.4-2.8-31.5-8.3c-6.9-4.1-11.5-9.6-14-16.4c-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9
                c-2.7,21.5-7.5,44.7-14.5,58.6c-7,13.9-14,25.8-25.6,35.7c-11.6,9.9-25.6,17.9-41.9,23.3V224h48v140.4c0,19,2,33.5,5.9,43.5
                c4,10,11.1,19.5,21.4,28.4c10.3,8.9,22.8,15.7,37.3,20.5c14.6,4.8,31.4,7.2,50.4,7.2c16.7,0,30.3-1.7,44.7-5.1
                c14.4-3.4,30.5-9.3,48.2-17.6v-65.6C363.2,389.4,342.3,396.3,321.2,396.3z"></path>
</g>
</symbol>
<symbol id="mono-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.9 557.7">
<path d="m1.49.041 230.1 307.6-231.6 250.1h52.1l202.7-219 163.8 219h177.3l-243-324.9L568.39.041h-52.1l-186.7 201.6L178.79.041H1.49zm76.6 38.3h81.5l359.7 481h-81.5l-359.7-481z"></path>
</symbol>
<symbol id="mono-icon-youtube" viewBox="0 0 512 512">
<g>
<path fill-rule="evenodd" d="M508.6,148.8c0-45-33.1-81.2-74-81.2C379.2,65,322.7,64,265,64c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,1-169.6,3.6
                c-40.8,0-73.9,36.4-73.9,81.4C1,184.6-0.1,220.2,0,255.8C-0.1,291.4,1,327,3.4,362.7c0,45,33.1,81.5,73.9,81.5
                c58.2,2.7,117.9,3.9,178.6,3.8c60.8,0.2,120.3-1,178.6-3.8c40.9,0,74-36.5,74-81.5c2.4-35.7,3.5-71.3,3.4-107
                C512.1,220.1,511,184.5,508.6,148.8z M207,353.9V157.4l145,98.2L207,353.9z"></path>
</g>
</symbol>
<symbol id="mono-icon-googlenews" viewBox="0 0 24 24">
<g>
<path fill-rule="evenodd" d="M21.2666 21.2a.6141.6141 0 0 1-.6128.6128H3.3446a.614.614 0 0 1-.6128-.6128V8.1153a.6141.6141 0 0 1 .6128-.6128h17.3091a.6141.6141 0 0 1 .6128.6128V21.2zm-3.0315-3.4196v-1.1957a.0803.0803 0 0 
                0-.0803-.0803h-5.3725v1.3619h5.3725a.0817.0817 0 0 0 .0804-.083l-.0001-.0029zm.8171-2.5875v-1.2012a.0803.0803 0 0 0-.079-.0817h-6.191v1.3619h6.1896a.079.079 0 0 0 .0804-.0776v-.0041.0027zm-.8171-2.5875v-1.2066a.0803.0803 
                0 0 0-.0803-.0803h-5.3725v1.3619h5.3725a.0816.0816 0 0 0 .0803-.079v.004zM8.1492 14.0448v1.2257h1.7704c-.1457.749-.8049 1.2924-1.7704 1.2924-1.0906-.0405-1.9418-.9574-1.9013-2.048.0384-1.0338.8676-1.8629 1.9013-1.9013a1.77 1.77 
                0 0 1 1.2529.4903l.9342-.9329a3.1405 3.1405 0 0 0-2.1871-.8525c-1.8051 0-3.2684 1.4633-3.2684 3.2684 0 1.8051 1.4633 3.2684 3.2684 3.2684 1.8889 0 3.1323-1.3278 3.1323-3.1976a3.941 3.941 0 0 0-.0518-.6183l-3.0805.0054zM2.2701 
                7.6537a.6156.6156 0 0 1 .6128-.6128h12.1545l-1.2692-3.4904a.5952.5952 0 0 0-.7436-.3827L.3676 7.7749a.5938.5938 0 0 0-.3228.7749l2.2253 6.112V7.6537za.6156.6156 0 0 1 .6128-.6128h12.1545l-1.2692-3.4904a.5952.5952 0 0 
                0-.7436-.3827L.3676 7.7749a.5938.5938 0 0 0-.3228.7749l2.2253 6.112V7.6537zm21.3116-.3105l-8.803-2.3683.7517 2.0659h5.5836a.6141.6141 0 0 1 .6128.6128v8.7948l2.2471-8.3659a.5923.5923 0 0 0-.3922-.7393zm-4.4955-1.6738V2.7946a.6101.6101 
                0 0 0-.6115-.6074H5.5236a.6101.6101 0 0 0-.6156.6046v2.8368l8.3904-3.0519a.5937.5937 0 0 1 .7422.3895l.5447 1.498 4.5009 1.2052z">
</path>
</g>
</symbol>
<symbol id="mono-icon-telegram" viewBox="0 0 24 24">
<g>
<path fill-rule="evenodd" d="M 20.302734 2.984375 C 20.013769 2.996945 19.748583 3.080055 19.515625 3.171875 C 19.300407 3.256634 18.52754 3.5814726 17.296875 4.0976562 C 16.06621 4.61384 14.435476 5.2982348 
                 12.697266 6.0292969 C 9.2208449 7.4914211 5.314238 9.1361259 3.3125 9.9785156 C 3.243759 10.007156 2.9645852 10.092621 2.65625 10.328125 C 2.3471996 10.564176 2.0039062 11.076462 2.0039062 
                 11.636719 C 2.0039062 12.088671 2.2295201 12.548966 2.5019531 12.8125 C 2.7743861 13.076034 3.0504903 13.199244 3.28125 13.291016 C 3.9563403 13.559857 6.0424892 14.392968 6.9492188 14.755859 C 
                 7.2668647 15.707799 8.0129251 17.950071 8.1875 18.501953 L 8.1855469 18.501953 C 8.3275588 18.951162 8.4659791 19.243913 8.6582031 19.488281 C 8.7543151 19.610465 8.8690398 19.721184 9.0097656 19.808594 C 
                 9.0637596 19.842134 9.1235454 19.868148 9.1835938 19.892578 C 9.191962 19.896131 9.2005867 19.897012 9.2089844 19.900391 L 9.1855469 19.894531 C 9.2029579 19.901531 9.2185841 19.911859 9.2363281 19.917969 C 
                 9.2652427 19.927926 9.2852873 19.927599 9.3242188 19.935547 C 9.4612233 19.977694 9.5979794 20.005859 9.7246094 20.005859 C 10.26822 20.005859 10.601562 19.710938 10.601562 19.710938 L 10.623047 19.695312 L 
                 12.970703 17.708984 L 15.845703 20.367188 C 15.897113 20.439837 16.308174 20.998047 17.261719 20.998047 C 17.829844 20.998047 18.280978 20.718791 18.568359 20.423828 C 18.855741 20.128866 19.034757 19.82706 
                 19.115234 19.417969 L 19.115234 19.414062 L 19.115234 19.412109 C 19.171124 19.121728 21.931641 5.265625 21.931641 5.265625 L 21.925781 5.2890625 C 22.01148 4.9067181 22.036735 4.5369631 21.935547 4.1601562 C 
                 21.834358 3.7833495 21.561271 3.4156252 21.232422 3.2226562 C 20.903572 3.0296874 20.591699 2.9718046 20.302734 2.984375 z M 19.908203 5.1738281 C 19.799749 5.7182284 17.343164 18.059965 17.183594 18.878906 L 
                 14.328125 16.240234 C 13.59209 15.559749 12.44438 15.535812 11.679688 16.181641 L 10.222656 17.414062 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 
                 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.267511 8.8918132 10.350132 11.694224 7.96875 13.048828 C 7.8792978 12.995267 7.7913128 12.939666 7.6933594 12.900391 
                 C 6.9119785 12.587666 5.4101276 11.985551 4.53125 11.634766 C 6.6055146 10.76177 10.161156 9.2658083 13.472656 7.8730469 C 15.210571 7.142109 16.840822 6.4570977 18.070312 5.9414062 C 19.108158 5.5060977 19.649538 
                 5.2807035 19.908203 5.1738281 z M 17.152344 19.023438 C 17.152344 19.023438 17.154297 19.023438 17.154297 19.023438 C 17.154234 19.023761 17.152444 19.03095 17.152344 19.03125 C 17.154024 19.022709 17.151187 
                 19.029588 17.152344 19.023438 z">
</path>
</g>
</symbol>
<symbol id="mono-icon-whatsapp" viewBox="0 0 24 24">
<g>
<path fill-rule="evenodd" d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 
                    21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 
                    12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 
                    9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 
                    4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 
                    7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 
                    C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 
                    13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 
                    10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 
                    10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 
                    7.3748594 8.6425625 7.375 8.4765625 7.375 z">
</path>
</g>
</symbol>
<symbol id="icon-magnify" viewBox="0 0 30 30" id=".02232631230241955" xmlns="http://www.w3.org/2000/svg">
<path d="m29.3 26-7-7c1.6-2.4 2.4-5.3 2-8.5C23.6 5.1 19.2.8 13.8.1 5.8-.9-.9 5.8.1 13.8c.7 5.4 5 9.8 10.4 10.5 3.2.4 6.1-.4 8.5-2l7 7c.9.9 2.4.9 3.3 0 .9-.9.9-2.4 0-3.3zM4.6 12.2c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5z">
</path>
</symbol>
<symbol id="auth-icon" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.82561 3.60042L6.79409 2.54042C8.04911 1.28804 9.64016 0.451162 11.362 0.137726C13.0839 -0.175711 14.8575 0.0486728 16.4542 0.781934C18.0509 1.5152 19.3973 2.7237 20.3199 4.25156C21.2425 5.77942 21.6988 7.55655 21.6301 9.35373C21.5614 11.1509 20.9707 12.8857 19.9343 14.3343C18.898 15.7829 17.4634 16.8789 15.8156 17.4809C14.1679 18.0829 12.3826 18.1633 10.69 17.7117C8.99739 17.2601 7.47516 16.2973 6.31964 14.9474L7.35311 13.8834C8.30387 15.0233 9.56546 15.8433 10.9745 16.2373C12.3835 16.6313 13.8751 16.5811 15.2561 16.0932C16.6371 15.6052 17.8438 14.7021 18.7201 13.5007C19.5963 12.2993 20.1017 10.855 20.1708 9.35477C20.2398 7.85456 19.8694 6.36757 19.1075 5.08636C18.3455 3.80516 17.2272 2.78876 15.8972 2.16879C14.5673 1.54881 13.087 1.35383 11.648 1.60907C10.2091 1.86432 8.87782 2.55805 7.82659 3.60042H7.82561Z">
</path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.72992 7.794V4.5L8.75006 8.5L4.72992 12.5V9.294H6.10352e-05V7.794H4.72992ZM13.1251 15C14.1024 15.0022 15.0624 14.7353 15.9056 14.227C16.7458 13.7546 17.4603 13.0771 17.9862 12.254C17.9735 11.739 17.6683 11.264 17.0723 10.83C16.5541 10.464 15.893 10.166 15.089 9.935C14.3627 9.732 13.7055 9.63 13.1153 9.63C12.5252 9.63 11.868 9.732 11.1417 9.935C10.3377 10.165 9.6834 10.464 9.17784 10.83C8.58187 11.264 8.27659 11.739 8.26395 12.254C8.78982 13.0771 9.50429 13.7546 10.3445 14.227C11.2263 14.742 12.1528 15 13.1251 15ZM13.1251 4C12.6973 4 12.2958 4.115 11.9195 4.346C11.5433 4.576 11.2458 4.888 11.0251 5.281C10.8044 5.675 10.6945 6.095 10.6945 6.543C10.6945 6.99 10.8044 7.41 11.0251 7.803C11.2458 8.197 11.5433 8.509 11.9195 8.739C12.2828 8.96619 12.6999 9.08635 13.1251 9.08635C13.5503 9.08635 13.9673 8.96619 14.3306 8.739C14.7069 8.509 15.0044 8.197 15.2251 7.804C15.4458 7.41 15.5556 6.99 15.5556 6.543C15.5556 6.095 15.4458 5.675 15.2251 5.281C15.011 4.89467 14.7027 4.5724 14.3306 4.346C13.9544 4.116 13.5528 4 13.1251 4Z">
</path>
</symbol>
<symbol id="burger-menu" viewBox="0 0 35 30" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M2.6 0h29.8c1.2 0 2.3.7 2.5 1.9.4 1.6-.8 3.1-2.4 3.1h-30C.9 5-.3 3.5.1 1.9.3.7 1.4 0 2.6 0zm0 12h29.8c1.2 0 2.3.7 2.5 1.9.4 1.7-.8 3.1-2.4 3.1h-30C.9 17-.3 15.5.1 13.9.3 12.7 1.4 12 2.6 12zm29.9 18H2.6c-1.2 0-2.3-.7-2.5-1.9-.4-1.6.8-3.1 2.4-3.1h29.9c1.2 0 2.3.7 2.5 1.9.4 1.6-.8 3.1-2.4 3.1z">
</path>
</g>
</symbol>
<symbol id="camera-icon" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
<path d="M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 46.7C13 46.7 3.3 37 3.3 25S13 3.3 25 3.3 46.7 13 46.7 25 37 46.7 25 46.7z" />
<path d="M35.2 15.4h-4l-.6-1.7c-.3-1-1.3-1.7-2.4-1.7h-6.5c-1.1 0-2.1.7-2.4 1.7l-.6 1.7h-4c-1.9 0-3.4 1.5-3.4 3.4v13.5c0 1.9 1.5 3.4 3.4 3.4H35c1.9 0 3.4-1.5 3.4-3.4V18.8c.1-1.9-1.4-3.4-3.2-3.4zM25 32.8c-4 0-7.2-3.2-7.2-7.2s3.2-7.2 7.2-7.2 7.2 3.2 7.2 7.2-3.2 7.2-7.2 7.2z" />
<circle cx="25" cy="25.6" r="2.6" />
</symbol>
<symbol id="close-x" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M29.1 24.9c1.2 1.2 1.2 3.1 0 4.2-.6.6-1.3.9-2.1.9s-1.5-.3-2.1-.9L15 19.2l-9.9 9.9c-.6.6-1.3.9-2.1.9s-1.5-.3-2.1-.9c-1.2-1.2-1.2-3.1 0-4.2l9.9-9.9L.9 5.1C-.3 3.9-.3 2 .9.9S4-.3 5.1.9l9.9 9.9L24.9.9C26.1-.3 28-.3 29.1.9s1.2 3.1 0 4.2L19.2 15l9.9 9.9z">
</path>
</g>
</symbol>
<symbol id="share-more-arrow" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
<g>
<g>
<path d="M512,241.7L273.643,3.343v156.152c-71.41,3.744-138.015,33.337-188.958,84.28C30.075,298.384,0,370.991,0,448.222v60.436
                    l29.069-52.985c45.354-82.671,132.173-134.027,226.573-134.027c5.986,0,12.004,0.212,18.001,0.632v157.779L512,241.7z
                    M255.642,290.666c-84.543,0-163.661,36.792-217.939,98.885c26.634-114.177,129.256-199.483,251.429-199.483h15.489V78.131
                    l163.568,163.568L304.621,405.267V294.531l-13.585-1.683C279.347,291.401,267.439,290.666,255.642,290.666z">
</path>
</g>
</g>
</symbol>
<symbol id="chevron" viewBox="0 0 100 100">
<g>
<path d="M22.4566257,37.2056786 L-21.4456527,71.9511488 C-22.9248661,72.9681457 -24.9073712,72.5311671 -25.8758148,70.9765924 L-26.9788683,69.2027424 C-27.9450684,67.6481676 -27.5292733,65.5646602 -26.0500598,64.5484493 L20.154796,28.2208967 C21.5532435,27.2597011 23.3600078,27.2597011 24.759951,28.2208967 L71.0500598,64.4659264 C72.5292733,65.4829232 72.9450684,67.5672166 71.9788683,69.1217913 L70.8750669,70.8956413 C69.9073712,72.4502161 67.9241183,72.8848368 66.4449048,71.8694118 L22.4566257,37.2056786 Z" id="Transparent-Chevron" transform="translate(22.500000, 50.000000) rotate(90.000000) translate(-22.500000, -50.000000) "></path>
</g>
</symbol>
<symbol id="chevron-down" viewBox="0 0 10 6" id=".6176193135071357" xmlns="http://www.w3.org/2000/svg">
<path d="M5.108 4.088L.965.158a.587.587 0 0 0-.8 0 .518.518 0 0 0 0 .758L5.13 5.625 9.845.905a.517.517 0 0 0-.021-.758.588.588 0 0 0-.8.02l-3.916 3.92z" fill="#000" fill-rule="evenodd" />
</symbol>
<symbol id="chevron-up" viewBox="0 0 284.929 284.929" id=".23966926540656042" xmlns="http://www.w3.org/2000/svg">
<path d="M282.082 195.285L149.028 62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665.953-6.567 2.856L2.856 195.285C.95 197.191 0 199.378 0 201.853c0 2.474.953 4.664 2.856 6.566l14.272 14.271c1.903 1.903 4.093 2.854 6.567 2.854s4.664-.951 6.567-2.854l112.204-112.202 112.208 112.209c1.902 1.903 4.093 2.848 6.563 2.848 2.478 0 4.668-.951 6.57-2.848l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.566.001-2.476-.944-4.666-2.846-6.569z" />
</symbol>
<symbol id="icon-arrow-down" viewBox="0 0 10 6" id=".6525395694941032" xmlns="http://www.w3.org/2000/svg">
<path d="M5.108 4.088L.965.158a.587.587 0 0 0-.8 0 .518.518 0 0 0 0 .758L5.13 5.625 9.845.905a.517.517 0 0 0-.021-.758.588.588 0 0 0-.8.02l-3.916 3.92z" fill="inherit" fill-rule="evenodd" />
</symbol>
<symbol id="icon-arrow-left" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 16C8.14844 16 7.83594 15.8828 7.60156 15.6484L1.35156 9.39844C0.84375 8.92969 0.84375 8.10938 1.35156 7.64062L7.60156 1.39062C8.07031 0.882812 8.89062 0.882812 9.35938 1.39062C9.86719 1.85938 9.86719 2.67969 9.35938 3.14844L4.00781 8.5L9.35938 13.8906C9.86719 14.3594 9.86719 15.1797 9.35938 15.6484C9.125 15.8828 8.8125 16 8.5 16Z">
</path>
</symbol>
<symbol id="icon-arrow-right" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 16C1.14844 16 0.835938 15.8828 0.601562 15.6484C0.09375 15.1797 0.09375 14.3594 0.601562 13.8906L5.95312 8.5L0.601562 3.14844C0.09375 2.67969 0.09375 1.85938 0.601562 1.39062C1.07031 0.882812 1.89062 0.882812 2.35938 1.39062L8.60938 7.64062C9.11719 8.10938 9.11719 8.92969 8.60938 9.39844L2.35938 15.6484C2.125 15.8828 1.8125 16 1.5 16Z">
</path>
</symbol>
<symbol id="play-arrow" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
<path d="M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 46.7C13 46.7 3.3 37 3.3 25S13 3.3 25 3.3 46.7 13 46.7 25 37 46.7 25 46.7z" />
<path d="m38.4 25-10.6 6.1-10.5 6.1V12.8l10.5 6.1z" />
</symbol>
<symbol id="grid" viewBox="0 0 32 32">
<g>
<path d="M6.4,5.7 C6.4,6.166669 6.166669,6.4 5.7,6.4 L0.7,6.4 C0.233331,6.4 0,6.166669 0,5.7 L0,0.7 C0,0.233331 0.233331,0 0.7,0 L5.7,0 C6.166669,0 6.4,0.233331 6.4,0.7 L6.4,5.7 Z M19.2,5.7 C19.2,6.166669 18.966669,6.4 18.5,6.4 L13.5,6.4 C13.033331,6.4 12.8,6.166669 12.8,5.7 L12.8,0.7 C12.8,0.233331 13.033331,0 13.5,0 L18.5,0 C18.966669,0 19.2,0.233331 19.2,0.7 L19.2,5.7 Z M32,5.7 C32,6.166669 31.766669,6.4 31.3,6.4 L26.3,6.4 C25.833331,6.4 25.6,6.166669 25.6,5.7 L25.6,0.7 C25.6,0.233331 25.833331,0 26.3,0 L31.3,0 C31.766669,0 32,0.233331 32,0.7 L32,5.7 Z M6.4,18.5 C6.4,18.966669 6.166669,19.2 5.7,19.2 L0.7,19.2 C0.233331,19.2 0,18.966669 0,18.5 L0,13.5 C0,13.033331 0.233331,12.8 0.7,12.8 L5.7,12.8 C6.166669,12.8 6.4,13.033331 6.4,13.5 L6.4,18.5 Z M19.2,18.5 C19.2,18.966669 18.966669,19.2 18.5,19.2 L13.5,19.2 C13.033331,19.2 12.8,18.966669 12.8,18.5 L12.8,13.5 C12.8,13.033331 13.033331,12.8 13.5,12.8 L18.5,12.8 C18.966669,12.8 19.2,13.033331 19.2,13.5 L19.2,18.5 Z M32,18.5 C32,18.966669 31.766669,19.2 31.3,19.2 L26.3,19.2 C25.833331,19.2 25.6,18.966669 25.6,18.5 L25.6,13.5 C25.6,13.033331 25.833331,12.8 26.3,12.8 L31.3,12.8 C31.766669,12.8 32,13.033331 32,13.5 L32,18.5 Z M6.4,31.3 C6.4,31.766669 6.166669,32 5.7,32 L0.7,32 C0.233331,32 0,31.766669 0,31.3 L0,26.3 C0,25.833331 0.233331,25.6 0.7,25.6 L5.7,25.6 C6.166669,25.6 6.4,25.833331 6.4,26.3 L6.4,31.3 Z M19.2,31.3 C19.2,31.766669 18.966669,32 18.5,32 L13.5,32 C13.033331,32 12.8,31.766669 12.8,31.3 L12.8,26.3 C12.8,25.833331 13.033331,25.6 13.5,25.6 L18.5,25.6 C18.966669,25.6 19.2,25.833331 19.2,26.3 L19.2,31.3 Z M32,31.3 C32,31.766669 31.766669,32 31.3,32 L26.3,32 C25.833331,32 25.6,31.766669 25.6,31.3 L25.6,26.3 C25.6,25.833331 25.833331,25.6 26.3,25.6 L31.3,25.6 C31.766669,25.6 32,25.833331 32,26.3 L32,31.3 Z" id=""></path>
</g>
</symbol>
<symbol id="filter" viewBox="0 0 16 12">
<path d="M0 2V0h16v2H0zm2.4 5V5h11.2v2H2.4zm2.4 5v-2h6.4v2H4.8z"></path>
</symbol>
<symbol id="icon-filter" viewBox="0 0 512 512">
<path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z">
</path>
</symbol>
<symbol id="icon-radio-on" viewBox="0 0 24 24">
<path fill="currentColor" fill-rule="nonzero" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
</symbol>
<symbol id="icon-radio-off" viewBox="0 0 24 24">
<path fill="currentColor" fill-rule="nonzero" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
</symbol>
<symbol id="epd+-icon" viewBox="0 0 27 30">
<path fill="url(#premiumGrad)" d="M14.2 12.2h3.3c.4 0 .4.1.4.4v1.3c0 .3-.1.5-.5.5h-2.9c-.4 0-.3 0-.3.3v3c0 .2-.1.4-.3.4h-1.6c-.2 0-.3-.1-.3-.3v-3.1c0-.2 0-.2-.2-.2h-3c-.4 0-.5-.1-.5-.5v-1.4c0-.3.1-.4.4-.4h3.1c.1 0 .2 0 .2-.2V8.9c0-.3.1-.4.4-.4h1.4c.3 0 .4.1.4.3v3.4z" />
<g>
<path fill="url(#premiumGrad)" d="M13.1 3.8a9.39 9.39 0 0 1 6.7 16l-1.1 1.1V23l-.4-.3-1.4-.9-1.6.4c-.8.2-1.5.3-2.2.3-5.2 0-9.4-4.2-9.4-9.4s4.2-9.3 9.4-9.3m0-3.8C5.9 0 0 5.9 0 13.1s5.9 13.1 13.1 13.1c1.1 0 2.1-.2 3.1-.4l6.3 4.1v-7.6c2.3-2.4 3.8-5.6 3.8-9.2C26.3 5.9 20.4 0 13.1 0z" />
</g>
</symbol>
<symbol id="ecos-icon" viewBox="0 0 268.5 307">
<path d="M268.3 148.2c-1.3 27.3-8 48.8-20.1 64.5-12.1 15.8-28.5 23.6-49.2 23.6-19.7 0-32.9-8.4-39.6-25.2-5.6 8.3-12 14.5-19.4 18.6-7.4 4.1-15.1 6.2-23.1 6.2-15.9 0-28-6.5-36.2-19.6-8.2-13.1-11.4-30.6-9.4-52.5 1.7-17.8 6.1-33.8 13-48.1 6.9-14.3 15.7-25.3 26.3-33.1 10.6-7.8 21.9-11.7 33.9-11.7 9.2 0 17.3 1.1 24.3 3.4s15.3 7 24.8 14.2l-8.5 92.1c-2.1 21.6 4.1 32.4 18.6 32.4 11.1 0 20.3-6 27.4-17.9 7.1-11.9 11-27.4 11.7-46.4 1.9-40.2-5.9-71-23.3-92.4C202 35.1 175.9 24.4 141 24.4c-21.4 0-40.3 5.3-56.8 16S54.5 66.5 44.8 86.8c-9.7 20.2-15 43.3-16 69.1-1.3 26.3 1.8 48.9 9.4 68 7.6 19 19.2 33.5 34.8 43.4 15.6 9.9 34.8 14.9 57.3 14.9 9.2 0 18.7-1.1 28.7-3.3 10-2.2 18.5-5.1 25.4-8.8l6.2 22.4c-6.7 4.4-15.6 7.9-26.9 10.5-11.3 2.7-22.7 4-34.1 4-27.7 0-51.5-5.9-71.3-17.6-19.8-11.7-34.7-28.7-44.7-50.9C3.5 215.5-1 187.9.2 155.9c1.3-29.9 8-56.7 20.1-80.6C32.4 51.5 49 33 69.9 19.8 90.9 6.6 114.8 0 141.7 0c27.2 0 50.5 6 70.1 17.9C231.3 29.8 246 47 255.7 69.4c9.7 22.4 13.9 48.7 12.6 78.8zm-165.1 15.7c-1.4 14.8-.1 26.1 3.9 33.8 4 7.7 10.5 11.5 19.3 11.5 5.9 0 11.4-2.6 16.7-7.8 5.2-5.2 9.5-12.3 12.8-21.3l7.4-80.6c-5.5-2.1-10.7-3.1-15.9-3.1-12.1 0-22 5.7-29.6 17.1-7.6 11.3-12.5 28.1-14.6 50.4z" />
</symbol>
<symbol id="editorial-icon" viewBox="0 0 276 307">
<path d="M151.7 306c-45.1 0-81.6-13.5-109.5-40.4C14.3 238.7.3 203.7.3 160.6V153c0-30.1 5.6-56.6 16.7-79.6 11.1-23 27.4-40.8 48.8-53.4C87.2 7.3 112.6 1 141.9 1c41.3 0 73.9 12.8 97.8 38.5 23.9 25.6 35.9 61.4 35.9 107.2v35.6h-182c3.3 16.5 10.4 29.4 21.5 38.9 11.1 9.4 25.4 14.1 42.9 14.1 29 0 51.6-10.1 67.9-30.4l41.9 49.5c-11.4 15.8-27.6 28.3-48.5 37.6-21 9.3-43.5 14-67.6 14zM141.4 71.7c-26.8 0-42.8 17.8-47.8 53.3H186v-7.1c.4-14.7-3.4-26-11.1-34.1-7.9-8.1-19-12.1-33.5-12.1z" />
</symbol>
<symbol id="talentos-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path fill="#E7B82B" d="M32.2,0.1H8C3.6,0.1,0.1,3.7,0.1,8v24.3c0,4.3,3.5,7.9,7.9,7.9h24.3c4.3,0,7.9-3.5,7.9-7.9V8
	C40.1,3.7,36.6,0.1,32.2,0.1z M9.7,28.2c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5v-1.1c0-0.3,0.3-0.5,0.5-0.5
	c0.3,0,0.5,0.3,0.5,0.5V28.2z M9.7,24.9c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5v-1.1c0-0.3,0.3-0.5,0.5-0.5
	c0.3,0,0.5,0.3,0.5,0.5V24.9z M12,29.8c0,0.3-0.3,0.5-0.5,0.5s-0.5-0.3-0.5-0.5v-6.4c0-0.3,0.3-0.5,0.5-0.5s0.5,0.3,0.5,0.5V29.8z
	 M12,21.2c0,0.3-0.3,0.5-0.5,0.5s-0.5-0.3-0.5-0.5v-9.1c0-0.3,0.3-0.5,0.5-0.5s0.5,0.1,0.5,0.5V21.2z M14.1,29.8
	c0,0.3-0.3,0.5-0.5,0.5S13,30.1,13,29.8v-3.5c0-0.3,0.3-0.5,0.5-0.5s0.5,0.3,0.5,0.5V29.8z M14.1,24.1c0,0.3-0.3,0.5-0.5,0.5
	S13,24.4,13,24.1v-16c0-0.3,0.3-0.5,0.5-0.5s0.5,0.3,0.5,0.5V24.1z M16.2,30.5c0,0.3-0.3,0.5-0.5,0.5s-0.5-0.3-0.5-0.5V19.2
	c0-0.3,0.3-0.5,0.5-0.5s0.5,0.3,0.5,0.5V30.5z M16.2,17c0,0.3-0.3,0.5-0.5,0.5s-0.5-0.3-0.5-0.5V7.2c0-0.3,0.3-0.5,0.5-0.5
	s0.5,0.3,0.5,0.5V17z M18.5,31.6c0,0.3-0.3,0.5-0.5,0.5s-0.5-0.3-0.5-0.5v-3.3c0-0.3,0.3-0.5,0.5-0.5s0.5,0.3,0.5,0.5V31.6z
	 M18.5,26c0,0.3-0.3,0.5-0.5,0.5s-0.5-0.3-0.5-0.5V9.4c0-0.3,0.3-0.5,0.5-0.5s0.5,0.3,0.5,0.5V26z M20.6,32c0,0.3-0.3,0.5-0.5,0.5
	s-0.5-0.3-0.5-0.5V12.5c0-0.3,0.3-0.5,0.5-0.5s0.5,0.3,0.5,0.5V32z M22.9,31.6c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5V19.2
	c0-0.3,0.3-0.5,0.5-0.5c0.3,0,0.5,0.3,0.5,0.5V31.6z M22.9,17c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5v-4.8
	c0-0.3,0.3-0.5,0.5-0.5c0.3,0,0.5,0.3,0.5,0.5V17z M25,32.2c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5V14.1
	c0-0.3,0.3-0.5,0.5-0.5c0.3,0,0.5,0.3,0.5,0.5V32.2z M27.3,30.5c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5V15.8
	c0-0.3,0.3-0.5,0.5-0.5c0.3,0,0.5,0.3,0.5,0.5V30.5z M29.4,30.5c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5v-5.1
	c0-0.3,0.3-0.5,0.5-0.5s0.5,0.3,0.5,0.5V30.5z M29.4,23.2c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5v-5.6c0-0.3,0.3-0.5,0.5-0.5
	s0.5,0.3,0.5,0.5V23.2z M31.6,28.1c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5V27c0-0.3,0.3-0.5,0.5-0.5c0.3,0,0.5,0.3,0.5,0.5
	V28.1z M31.6,24.9c0,0.3-0.3,0.5-0.5,0.5c-0.3,0-0.5-0.3-0.5-0.5v-4.1c0-0.3,0.3-0.5,0.5-0.5c0.3,0,0.5,0.3,0.5,0.5V24.9z" />
</symbol>
<symbol id="quote-left-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 30">
<path d="M0,11.3C0,5,5,0,11.3,0H12c1.7,0,3,1.3,3,3s-1.3,3-3,3h-0.8C8.4,6,6,8.4,6,11.3V12h6c3.3,0,6,2.7,6,6v6c0,3.3-2.7,6-6,6H6
	    c-3.3,0-6-2.7-6-6v-3v-3V11.3z M24,11.3C24,5,29,0,35.3,0H36c1.7,0,3,1.3,3,3s-1.3,3-3,3h-0.8C32.4,6,30,8.4,30,11.3V12h6
	    c3.3,0,6,2.7,6,6v6c0,3.3-2.7,6-6,6h-6c-3.3,0-6-2.7-6-6v-3v-3V11.3z" />
</symbol>
<symbol id="mono-icon-whatsapp" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path d="M8.083 0c1.054 0 2.062.207 3.023.62.961.414 1.79.968 2.486 1.664a7.871 7.871 0 0 1 1.664 2.486c.413.961.62 1.969.62 3.023a7.573 7.573 0 0 1-.62 3.024 7.871 7.871 0 0 1-1.664 2.485 7.871 7.871 0 0 1-2.486 1.664 7.573 7.573 0 0 1-3.023.62 7.674 7.674 0 0 1-3.773-.971L0 16l1.406-4.186-.165-.285a7.603 7.603 0 0 1-.952-3.736c0-1.054.207-2.062.62-3.023a7.871 7.871 0 0 1 1.665-2.486A7.886 7.886 0 0 1 5.054.62 7.61 7.61 0 0 1 8.083 0zM5.488 3.98a.782.782 0 0 0-.537.227c-.435.41-.685.886-.75 1.427l-.015.206v.082c-.007.6.238 1.268.734 2.006.524.771 1.033 1.409 1.53 1.912.496.503 1.081.91 1.757 1.22.916.427 1.57.64 1.964.64.323 0 .675-.091 1.054-.274.379-.182.623-.408.734-.677.117-.296.175-.558.175-.785a.44.44 0 0 0-.02-.155c-.035-.062-.343-.245-.925-.548-.583-.303-.919-.455-1.008-.455-.09 0-.269.169-.538.507-.268.33-.454.496-.558.496a.459.459 0 0 1-.227-.073c-.655-.33-1.175-.678-1.56-1.043-.47-.441-.82-.913-1.055-1.417a.296.296 0 0 1-.052-.155c0-.068.12-.229.357-.48.238-.252.356-.45.356-.594 0-.049-.086-.307-.258-.776a45.177 45.177 0 0 0-.341-.91c-.055-.144-.109-.239-.16-.283-.052-.045-.143-.068-.274-.068-.048 0-.114-.005-.197-.015a1.645 1.645 0 0 0-.186-.016z" fill-rule="nonzero" />
</symbol>
<symbol id="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path d="M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z" />
</symbol>
<symbol id="layered-bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></symbol>
<symbol id="icon-error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 88">
<path d="M48 27.8H24c-2.4 0-4.3 1.9-4.3 4.3v28.2l6.4-6.5H48c2.4 0 4.3-1.9 4.3-4.3V32.1c0-2.4-1.9-4.3-4.3-4.3zm-5.9 17.5L40 47.4l-4-4-4 4-2.1-2.1 4-4-4-4 2.1-2.1 4 4 4-4 2.1 2.1-4 4 4 4z" />
</symbol>
</svg>
<script>
function loadViafoura(src) {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('async', 'true');
  head.appendChild(script);
}

const hasIntersectionObserver = 'IntersectionObserver' in window;

if(hasIntersectionObserver) {
  loadViafoura('https://cdn.viafoura.net/entry/index.js');
} else {
  loadViafoura('https://cdn.viafoura.net/vf-v2.js');
}
</script>
<bsp-header class="Page-header" data-nav-alignment="right" data-inside-section>
<div class="Page-header-hamburger-menu">
<div class="widget-weather">
<div class="weather">
<img class="icon" id="imageWeatherHamburguer" src="https://static.elpais.com.uy/images/weather/svg/partlycloudy.svg" loading="lazy">
<a href="/clima" id="weatherURL" style="color:#000000; text-decoration:none;"> 
<span id="tempHumidityHamburguer">Montevideo, T 24° H 58%</span>
</a>
</div>
<div class="publicidad">
<picture>
<img class="Image" alt="AirEuropa" src="https://el-pais.brightspotcdn.com/71/5f/7e59f9f341028211081547421c79/logo-aireuropa-color-v3.svg" loading="lazy">
</picture>
</div>
</div>
<div class="Page-header-hamburger-menu-wrapper">
<div class="Page-header-hamburger-menu-content">
<a href="/user/suscripcion" class="Page-header-subscribe">
<span class="Page-header-subscribe-cost">Obtener acceso ilimitado desde $187/mes</span>
<span class="Page-header-subscribe-title">Suscribite al 50% OFF</span>
</a>
<bsp-search-overlay class="SearchMobile">
<form class action="/search/#nt=navsearch" novalidate autocomplete="off">
<label>
<button type="submit" class="SearchMobile-search-submit"><svg><use xlink:href="#icon-magnify"></use></svg><span class="sr-only">Enviar búsqueda</span></button>
<input placeholder="Buscar" type="text" class="SearchMobile-search-input" name="q" required="true"><span class="sr-only">Search Query</span>
</label>
</form>
</bsp-search-overlay>
<nav class="Navigation">
<ul class="Navigation-items">
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/ultimas-noticias">Últimas Noticias</a>
</div>
</div>
</li>
<li class="Navigation-items-item section"><div class="NavigationItem  has-menu" style="--ColorSection:#489052">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/ovacion">Ovación</a>
<div class="NavigationItem-more">
<button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
</div>
</div>
<ul class="NavigationItem-items">
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/ovacion/mundial">Mundial</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/ovacion/seleccion">Selección</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/ovacion/futbol">Fútbol</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/noticias/agenda-deportiva">Agenda Deportiva</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/ovacion/basquetbol">Básquetbol</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/ovacion/tenis">Tenis</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/ovacion/rugby">Rugby</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://motorsports.com.uy" target="_blank">MotorSports</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/ovacion/multideportivo">Multideportivo</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/ovacion/turf">Turf</a>
</li>
</ul>
</div>
</li>
<li class="Navigation-items-item section"><div class="NavigationItem  has-menu" style="--ColorSection:#a753a0">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/tvshow">TV Show</a>
<div class="NavigationItem-more">
<button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
</div>
</div>
<ul class="NavigationItem-items">
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/tvshow/personajes">Personajes</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/tvshow/tv">Tv</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/tvshow/cine">Cine</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/tvshow/musica">Musica</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/tvshow/teatro">Teatro</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/tvshow/libros">Libros</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/tvshow/sociales">Sociales</a>
</li>
</ul>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://rurales.elpais.com.uy/" target="_blank">Rurales</a>
</div>
</div>
</li>
<li class="Navigation-items-item section"><div class="NavigationItem  has-menu" style="--ColorSection:#4c86b8">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/bienestar">Bienestar</a>
<div class="NavigationItem-more">
<button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
</div>
</div>
<ul class="NavigationItem-items">
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/bienestar/vida-sana">Vida Sana</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/bienestar/nutricion">Nutrición</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/bienestar/fitness">Fitness</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/bienestar/mente">Mente</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/bienestar/descanso">Descanso</a>
</li>
</ul>
</div>
</li>
<li class="Navigation-items-item section"><div class="NavigationItem  has-menu" style="--ColorSection:#ceb8a2">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/negocios">Negocios</a>
<div class="NavigationItem-more">
<button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
</div>
</div>
<ul class="NavigationItem-items">
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/negocios">Negocios</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/negocios/finanzas">Finanzas</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/negocios/rurales">Rurales</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/negocios/empresas">Empresas</a>
</li>
</ul>
</div>
</li>
<li class="Navigation-items-item section"><div class="NavigationItem  has-menu" style="--ColorSection:#512972">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/eme">Eme</a>
<div class="NavigationItem-more">
<button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
</div>
</div>
<ul class="NavigationItem-items">
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/eme/mujeres">Mujeres</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/eme/lifestyle">Lifestyle</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/noticias/horoscopo">Astros</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/eme/moda">Moda y belleza</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/eme/con-los-hijos">Con los hijos</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/eme/salud">Salud</a>
</li>
</ul>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/noticias/premium">El País +</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/mundo">Mundo</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/informacion">Información</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/vida-actual">Vida actual</a>
</div>
</div>
</li>
<li class="Navigation-items-item section"><div class="NavigationItem  has-menu" style="--ColorSection:#004f88">
<div class="NavigationItem-text">
<span>Suplementos</span>
<div class="NavigationItem-more">
<button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
</div>
</div>
<ul class="NavigationItem-items">
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/el-empresario">El Empresario</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/domingo">Domingo</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/economia-y-mercado">Economía y mercado</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/que-pasa">Qué pasa</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/sabado-show">Sábado Show</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/cultural">El Cultural</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/tu-casa-aqui" target="_blank">Tu casa aquí</a>
</li>
</ul>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/podcast" target="_blank">Podcast</a>
</div>
</div>
</li>
<li class="Navigation-items-item section"><div class="NavigationItem  has-menu" style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/opinion">Opinión</a>
<div class="NavigationItem-more">
<button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
</div>
</div>
<ul class="NavigationItem-items">
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/opinion/editorial">Editorial</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/opinion/columnistas">Columnistas</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/opinion/ecos">Ecos</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/opinion/la-clave">La Clave</a>
</li>
</ul>
</div>
</li>
<li class="Navigation-items-item section"><div class="NavigationItem  has-menu" style="--ColorSection:#004f88">
<div class="NavigationItem-text">
<span>Servicios</span>
<div class="NavigationItem-more">
<button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
</div>
</div>
<ul class="NavigationItem-items">
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/clima?p=227&amp;c=8" target="_blank">Clima</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/eme/astros">Horóscopo</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/crucigrama">Crucigrama</a>
</li>
<li class="NavigationItem-items-item"><a class="NavigationLink" href="https://www.elpais.com.uy/sudoku">Sudoku</a>
</li>
</ul>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/narrativasvisuales">Narrativas visuales</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://web.elpais.com.uy/newsletters/" target="_blank">Newsletter</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://epaper.elpais.com.uy/el-pais-uruguay?utm_source=recirculation&amp;utm_medium=hamburguesa&amp;utm_campaign=interna" target="_blank">Epaper</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://funebres.elpais.com.uy/?utm_source=recirculation&amp;utm_medium=hamburguesa&amp;utm_campaign=interna" target="_blank">Avisos Fúnebres</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.gallito.com.uy/?utm_source=recirculation&amp;utm_medium=hamburguesa&amp;utm_campaign=interna" target="_blank">Gallito Inmuebles</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://1122.com.uy/?utm_source=recirculation&amp;utm_medium=hamburguesa&amp;utm_campaign=interna" target="_blank">Guía 1122</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.clubelpais.com.uy/coleccionables/?utm_source=recirculation&amp;utm_medium=hamburguesa&amp;utm_campaign=interna" target="_blank">Coleccionables</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.elpais.com.uy/suplementos-especiales">Suplementos Especiales</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://remates.elpais.com.uy/?utm_source=recirculation&amp;utm_medium=hamburguesa&amp;utm_campaign=interna" target="_blank">Remates</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.clubelpais.com.uy/?utm_source=recirculation&amp;utm_medium=hamburguesa&amp;utm_campaign=interna" target="_blank">Club El País</a>
</div>
</div>
</li>
<li class="Navigation-items-item "><div class="NavigationItem " style="--ColorSection:">
<div class="NavigationItem-text">
<a href="https://www.newstore.com.uy/?utm_source=menuep&amp;utm_medium=link " target="_blank">Newstore</a>
</div>
</div>
</li>
</ul>
</nav>
</div>
</div>
</div>
<div class="Page-header-hamburger-userlogin">
<div class="Page-header-hamburger-userlogin-wrapper">
<div class="Page-header-hamburger-userlogin-content">
<div class="user-menu">
<div class="logo"><a href="https://www.elpais.com.uy/noticias/premium?utm_source=recirculation&utm_medium=hamburguesa&utm_campaign=interna"><img src="https://static.diarioelpais.com/images/21/logo_ep+_blanco.svg" alt="El Pais +" loading="lazy"></a></div>
<div class="usuario_nombre"></div>
<div class="usuario_email"></div>
<div class="usuario_tipo"><span></span></div>
<div class="usuario_alerta"><span></span></div>
<div class="btn_suscribirme"><a href="https://www.elpais.com.uy/user/suscripcion">SUSCRIBIRME AHORA</a></div>
<div class="usuario_ayuda"><a href="https://api.whatsapp.com/send/?phone=59891396884" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg><p>¿Necesitás ayuda con tu suscripción?</p></a></div>
<div class="usuario_items">
<ul>
<li><a href="https://registro.elpais.com.uy/RegMod1.asp">Mis Datos</a></li>
<li><a href="https://autogestion.clubelpais.com.uy">Mis Facturas</a></li>
<li><a href="https://registro.elpais.com.uy/RegMailing.asp">Mis Newsletters</a></li>
<li><a href="https://registro.elpais.com.uy/RegFaq.asp">Ayuda</a></li>
<li><a href="/logout" class="has_logout">Cerrar Sesión</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="Page-header-bar">
<button class="Page-header-menu-trigger" aria-expanded="false"><svg class="burger-menu"><use xlink:href="#burger-menu"></use></svg><svg class="close-x"><use xlink:href="#close-x"></use></svg><span class="label">Menu</span></button>
<div class="Page-header-weather">
<a href="/clima" id="weatherURL" style="color:#FFFFFF; text-decoration:none;"><span id="weatherCabezal"></span></a>
</div>
<div class="Page-header-bar-logo"><h1 title="El País Uruguay"><a aria-label="home page" href="/">
<img class="PageLogo-image" src="https://el-pais.brightspotcdn.com/82/f5/381dbc27419991738f822e44ad5b/el-pais.svg" alt="Logo El Pais" />
</a>
</h1></div>
<div class="Page-header-second-navigation" data-inside-bar>
<div class="SectionPage-sectionNavigation" data-align-center style="
     --color-background: #a753a0;
     --color-text: var(--color-primary-text-inverse);
     --color-text-hover: var(--color-primary-text-inverse);">
<bsp-section-nav class="SectionNavigation-navContainer">
<a class="SectionNavigation-logo" href="https://elpais.com.uy/tvshow">
<picture>
<img class="Image" alt="Logo TVSHOW" src="https://el-pais.brightspotcdn.com/2a/37/66d9afd8495a9c0ca0a4c940556c/r-logo-tvshow.svg" loading="lazy">
</picture>
</a>
<nav class="SectionNavigation">
<button class="Navigation-arrow-left">
<svg class="icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg>
</button>
<ul class="SectionNavigation-items second-navigation-list">
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/personajes">Personajes</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/libros">Libros</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/arte">Arte</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/tv">Tv</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/musica">Música</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/cine">Cine</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/series">Series</a>
</div>
</div>
</li>
</ul>
<button class="Navigation-arrow-right">
<svg class="icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg>
</button>
</nav>
</bsp-section-nav>
</div>
<script>
        document.querySelector(":root").style.setProperty("--second-navigation-color", "#a753a0");
        document.querySelector(":root").style.setProperty("--second-navigation-text-color", "");
    </script>
<div class="Page-header-search">
<bsp-search-overlay class="SearchOverlay">
<button class="SearchOverlay-search-button"><svg class="icon-magnify"><use xlink:href="#icon-magnify"></use></svg><span class="sr-only">Mostrar búsqueda</span><svg class="close-x"><use xlink:href="#close-x"></use></svg></button>
<div class="SearchOverlay-search-overlay">
<form class="SearchOverlay-search-form" action="https://www.elpais.com.uy/search#nt=navsearch" novalidate autocomplete="off">
<label>
<button type="submit" class="SearchOverlay-search-submit"><svg><use xlink:href="#icon-magnify"></use></svg><span class="sr-only">Enviar búsqueda</span></button>
<input placeholder="Buscar" type="text" class="SearchOverlay-search-input" name="q" required="true"><span class="sr-only">Search Query</span>
</label>
</form>
</div>
</bsp-search-overlay>
</div>
</div>
<div class="Page-header-authentication">
<a href="/user/suscripcion" class="Page-header-subscribe">
<span class="Page-header-subscribe-title">Suscribite al 50% OFF</span>
</a>
<div class="AuthenticationNavigation">
<ul class="AuthenticationNavigation-items">
<li class="AuthenticationNavigation-items-item"><svg class="auth-icon"><use xlink:href="#auth-icon"></use></svg><a class="NavigationLink" href="https://sso.elpais.com.uy/cas/login?service=https%3A%2F%2Fwww.elpais.com.uy%2Fcas-check&amp;showAs=">Ingresar</a>
</li>
</ul>
</div>
</div>
</div>
<div class="Page-header-second-navigation-wrapper">
<div class="Page-header-second-navigation">
<div class="SectionPage-sectionNavigation" data-align-center style="
     --color-background: #a753a0;
     --color-text: var(--color-primary-text-inverse);
     --color-text-hover: var(--color-primary-text-inverse);">
<bsp-section-nav class="SectionNavigation-navContainer">
<a class="SectionNavigation-logo" href="https://elpais.com.uy/tvshow">
<picture>
<img class="Image" alt="Logo TVSHOW" src="https://el-pais.brightspotcdn.com/2a/37/66d9afd8495a9c0ca0a4c940556c/r-logo-tvshow.svg" loading="lazy">
</picture>
</a>
<nav class="SectionNavigation">
<button class="Navigation-arrow-left">
<svg class="icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg>
</button>
<ul class="SectionNavigation-items second-navigation-list">
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/personajes">Personajes</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/libros">Libros</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/arte">Arte</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/tv">Tv</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/musica">Música</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/cine">Cine</a>
</div>
</div>
</li>
<li class="SectionNavigation-items-item">
<div class="SectionNavigationItem">
<div class="SectionNavigationItem-text">
<a class="SectionNavigationItem-text-link" href="https://www.elpais.com.uy/tvshow/series">Series</a>
</div>
</div>
</li>
</ul>
<button class="Navigation-arrow-right">
<svg class="icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg>
</button>
</nav>
</bsp-section-nav>
</div>
<script>
        document.querySelector(":root").style.setProperty("--second-navigation-color", "#a753a0");
        document.querySelector(":root").style.setProperty("--second-navigation-text-color", "");
    </script>
<div class="Page-header-search">
<bsp-search-overlay class="SearchOverlay">
<button class="SearchOverlay-search-button"><svg class="icon-magnify"><use xlink:href="#icon-magnify"></use></svg><span class="sr-only">Mostrar búsqueda</span><svg class="close-x"><use xlink:href="#close-x"></use></svg></button>
<div class="SearchOverlay-search-overlay">
<form class="SearchOverlay-search-form" action="https://www.elpais.com.uy/search#nt=navsearch" novalidate autocomplete="off">
<label>
<button type="submit" class="SearchOverlay-search-submit"><svg><use xlink:href="#icon-magnify"></use></svg><span class="sr-only">Enviar búsqueda</span></button>
<input placeholder="Buscar" type="text" class="SearchOverlay-search-input" name="q" required="true"><span class="sr-only">Search Query</span>
</label>
</form>
</div>
</bsp-search-overlay>
</div>
</div>
</div>
<div class="viafoura">
<vf-tray-trigger floating="true">
</vf-tray-trigger>
</div>
</bsp-header>
<div class="BlankArticle-content">
<iframe class="BlankArticle-embed" src="https://content.elpais.com.uy/llamadas_2024/" frameborder="0"></iframe>
</div>
<script>
    </script>
<div>
<ev-paywall modal-backdrop="true" modal-keyboard="true" redirect="false"></ev-paywall>
<ev-paywall-notifier modal-backdrop="true" modal-keyboard="true"></ev-paywall-notifier>
</div>
<script type="text/javascript">
        utms = ("none" == "premium")?"exclusive_content":"article";
        // tagSlugs+= ((tagSlugs!="")?",":"") + "none,"
        window.tagSlugs+= ((window.tagSlugs!="")?",":"") + "none,"
        var cx_sgements = "";
        try {
            cx_sgements = cX.getUserSegmentIds({persistedQueryId:"98f4b2ea12ce71e9b0ca8c0e4ce283f780ba6777"}).map(function(item){return 'csx-'+item;}).join(",");
        } catch (e) {
            console.log("CX Segments Error" + (e.message || e.toString()) , e);
        }

        const params = '{"adblock": '+ window.blocker +',"incognito": '+ window.incognito +',"articleId": "'+Site.notaId+'", "section": "", "authors": "", "tags": "' + (window.tagSlugs||"")+"," +cx_sgements+ '", "referer": "'+ document.referrer +'", "geo": "'+ (window.datageo&&window.datageo.code||"uy") +'"}';
        window.ARTICLE_ACCESS_TYPE = "1";
        switch("none"){
            case "premium":
                isPremiumArticleHandler(params);
                window.ARTICLE_ACCESS_TYPE = "3";
                break;
            case "free":
                window.ARTICLE_ACCESS_TYPE = "4";
                break;
            case "login":
                isPremiumArticleHandler(params, 2);
                window.ARTICLE_ACCESS_TYPE = "2";
                break;
            default:
                tiggerPaywallAuthorize(params,1);

        }
        const ARTICLE_ACCESS_TYPE = Object.freeze(window.ARTICLE_ACCESS_TYPE);
        Site.rls("evmauth",true);
    </script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"8529e4fd6cef1940","b":1,"version":"2024.2.0","token":"fdb17a67a5d340fb950bf8ed520e0fa3"}' crossorigin="anonymous"></script>
</body>
</html>