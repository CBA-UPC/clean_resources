var QuoraPixel_RS=function(t){"use strict";const 1,method:console.info},DEBUG:{value:2,method:console.debug},WARN:{value:3,method:console.warn},ERROR:{value:4,method:console.error}};var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var o={exports:{}};!function(t,e){var n=9007199254740991,o="[object Arguments]",u="[object Function]",i="[object GeneratorFunction]",a="[object Map]",c="[object Promise]",f="[object Set]",l="[object WeakMap]",s="[object DataView]",p=/^\[object .+?Constructor\]$/,v="object"==typeof r&&r&&r.Object===Object&&r,h="object"==typeof self&&self&&self.Object===Object&&self,y=v||h||Function("return this")(),d=e&&!e.nodeType&&e,b=d&&t&&!t.nodeType&&t,_=b&&b.exports===d;var g,j,w,O=Function.prototype,m=Object.prototype,A=y["__core-js_shared__"],S=(g=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+g:"",E=O.toString,x=m.hasOwnProperty,P=m.toString,k=RegExp("^"+E.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=_?y.Buffer:void 0,$=m.propertyIsEnumerable,L=R?R.isBuffer:void 0,I=(j=Object.keys,w=Object,function(t){return j(w(t))}),T=z(y,"DataView"),B=z(y,"Map"),F=z(y,"Promise"),q=z(y,"Set"),D=z(y,"WeakMap"),M=!$.call({valueOf:1},"valueOf"),C=K(T),U=K(B),G=K(F),N=K(q),Q=K(D);function W(t){if(!tt(t)||function(t){return!!S&&S in t}(t))return!1;var e=Z(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?k:p;return e.test(K(t))}function z(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return W(r)?r:void 0}var V=function(t){return P.call(t)};function K(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function J(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&H(t)}(t)&&x.call(t,"callee")&&(!$.call(t,"callee")||P.call(t)==o)}(T&&V(new T(new ArrayBuffer(1)))!=s||B&&V(new B)!=a||F&&V(F.resolve())!=c||q&&V(new q)!=f||D&&V(new D)!=l)&&(V=function(t){var e=P.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?K(r):void 0;if(n)switch(n){case C:return s;case U:return a;case G:return c;case N:return f;case Q:return l}return e});var X=Array.isArray;function H(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Z(t)}var Y=L||function(){return!1};function Z(t){var e=tt(t)?P.call(t):"";return e==u||e==i}function tt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=function(t){if(H(t)&&(X(t)||"string"==typeof t||"function"==typeof t.splice||Y(t)||J(t)))return!t.length;var e=V(t);if(e==a||e==f)return!t.size;if(M||function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||m)}(t))return!I(t).length;for(var r in t)if(x.call(t,r))return!1;return!0}}(o,o.exports);const u=n(o.exports);var i={exports:{}};!function(t,e){var n="__lodash_hash_undefined__",o=1,u=2,i=1/0,a=9007199254740991,c="[object Arguments]",f="[object Array]",l="[object Boolean]",s="[object Date]",p="[object Error]",v="[object Function]",h="[object GeneratorFunction]",y="[object Map]",d="[object Number]",b="[object Object]",_="[object Promise]",g="[object RegExp]",j="[object Set]",w="[object String]",O="[object Symbol]",m="[object WeakMap]",A="[object ArrayBuffer]",S="[object DataView]",E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/,P=/^\./,k=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,R=/\\(\\)?/g,$=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,I={};I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I[c]=I[f]=I[A]=I[l]=I[S]=I[s]=I[p]=I[v]=I[y]=I[d]=I[b]=I[g]=I[j]=I[w]=I[m]=!1;var T="object"==typeof r&&r&&r.Object===Object&&r,B="object"==typeof self&&self&&self.Object===Object&&self,F=T||B||Function("return this")(),q=e&&!e.nodeType&&e,D=q&&t&&!t.nodeType&&t,M=D&&D.exports===q&&T.process,C=function(){try{return M&&M.binding("util")}catch(t){}}(),U=C&&C.isTypedArray;function G(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}function N(t,e){for(var r=-1,n=t?t.length:0;++r<n;)if(e(t[r],r,t))return!0;return!1}function Q(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function W(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function z(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var K,J=Array.prototype,X=Function.prototype,H=Object.prototype,Y=F["__core-js_shared__"],Z=(K=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",tt=X.toString,et=H.hasOwnProperty,rt=H.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=F.Symbol,ut=F.Uint8Array,it=z(Object.getPrototypeOf,Object),at=H.propertyIsEnumerable,ct=J.splice,ft=Object.getOwnPropertySymbols,lt=z(Object.keys,Object),st=Gt(F,"DataView"),pt=Gt(F,"Map"),vt=Gt(F,"Promise"),ht=Gt(F,"Set"),yt=Gt(F,"WeakMap"),dt=Gt(Object,"create"),bt=Zt(st),_t=Zt(pt),gt=Zt(vt),jt=Zt(ht),wt=Zt(yt),Ot=ot?ot.prototype:void 0,mt=Ot?Ot.valueOf:void 0,At=Ot?Ot.toString:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){var e=-1,r=t?t.length:0;for(this.__data__=new xt;++e<r;)this.add(t[e])}function kt(t){this.__data__=new Et(t)}function Rt(t,e){var r=ne(t)||re(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!et.call(t,u)||o&&("length"==u||zt(u,n))||r.push(u);return r}function $t(t,e){for(var r=t.length;r--;)if(ee(t[r][0],e))return r;return-1}function Lt(t,e){for(var r=0,n=(e=Vt(e,t)?[e]:Dt(e)).length;null!=t&&r<n;)t=t[Yt(e[r++])];return r&&r==n?t:void 0}function It(t,e){return null!=t&&e in Object(t)}function Tt(t,e,r,n,i){return t===e||(null==t||null==e||!ae(t)&&!ce(e)?t!=t&&e!=e:function(t,e,r,n,i,a){var v=ne(t),h=ne(e),_=f,m=f;v||(_=(_=Wt(t))==c?b:_);h||(m=(m=Wt(e))==c?b:m);var E=_==b&&!Q(t),x=m==b&&!Q(e),P=_==m;if(P&&!E)return a||(a=new kt),v||se(t)?Mt(t,e,r,n,i,a):function(t,e,r,n,i,a,c){switch(r){case S:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case A:return!(t.byteLength!=e.byteLength||!n(new ut(t),new ut(e)));case l:case s:case d:return ee(+t,+e);case p:return t.name==e.name&&t.message==e.message;case g:case w:return t==e+"";case y:var f=W;case j:var v=a&u;if(f||(f=V),t.size!=e.size&&!v)return!1;var h=c.get(t);if(h)return h==e;a|=o,c.set(t,e);var b=Mt(f(t),f(e),n,i,a,c);return c.delete(t),b;case O:if(mt)return mt.call(t)==mt.call(e)}return!1}(t,e,_,r,n,i,a);if(!(i&u)){var k=E&&et.call(t,"__wrapped__"),R=x&&et.call(e,"__wrapped__");if(k||R){var $=k?t.value():t,L=R?e.value():e;return a||(a=new kt),r($,L,n,i,a)}}if(!P)return!1;return a||(a=new kt),function(t,e,r,n,o,i){var a=o&u,c=pe(t),f=c.length,l=pe(e),s=l.length;if(f!=s&&!a)return!1;var p=f;for(;p--;){var v=c[p];if(!(a?v in e:et.call(e,v)))return!1}var h=i.get(t);if(h&&i.get(e))return h==e;var y=!0;i.set(t,e),i.set(e,t);var d=a;for(;++p<f;){var b=t[v=c[p]],_=e[v];if(n)var g=a?n(_,b,v,e,t,i):n(b,_,v,t,e,i);if(!(void 0===g?b===_||r(b,_,n,o,i):g)){y=!1;break}d||(d="constructor"==v)}if(y&&!d){var j=t.constructor,w=e.constructor;j==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof j&&j instanceof j&&"function"==typeof w&&w instanceof w||(y=!1)}return i.delete(t),i.delete(e),y}(t,e,r,n,i,a)}(t,e,Tt,r,n,i))}function Bt(t){return!(!ae(t)||(e=t,Z&&Z in e))&&(ue(t)||Q(t)?nt:$).test(Zt(t));var e}function Ft(t){return"function"==typeof t?t:null==t?he:"object"==typeof t?ne(t)?function(t,e){if(Vt(t)&&Jt(e))return Xt(Yt(t),e);return function(r){var n=function(t,e,r){var n=null==t?void 0:Lt(t,e);return void 0===n?r:n}(r,t);return void 0===n&&n===e?function(t,e){return null!=t&&function(t,e,r){e=Vt(e,t)?[e]:Dt(e);var n,o=-1,u=e.length;for(;++o<u;){var i=Yt(e[o]);if(!(n=null!=t&&r(t,i)))break;t=t[i]}if(n)return n;u=t?t.length:0;return!!u&&ie(u)&&zt(i,u)&&(ne(t)||re(t))}(t,e,It)}(r,t):Tt(e,n,void 0,o|u)}}(t[0],t[1]):function(t){var e=function(t){var e=pe(t),r=e.length;for(;r--;){var n=e[r],o=t[n];e[r]=[n,o,Jt(o)]}return e}(t);if(1==e.length&&e[0][2])return Xt(e[0][0],e[0][1]);return function(r){return r===t||function(t,e,r,n){var i=r.length,a=i,c=!n;if(null==t)return!a;for(t=Object(t);i--;){var f=r[i];if(c&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1}for(;++i<a;){var l=(f=r[i])[0],s=t[l],p=f[1];if(c&&f[2]){if(void 0===s&&!(l in t))return!1}else{var v=new kt;if(n)var h=n(s,p,l,t,e,v);if(!(void 0===h?Tt(p,s,n,o|u,v):h))return!1}}return!0}(r,t,e)}}(t):Vt(e=t)?(r=Yt(e),function(t){return null==t?void 0:t[r]}):function(t){return function(e){return Lt(e,t)}}(e);var e,r}function qt(t){if(!ae(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=Kt(t),r=[];for(var n in t)("constructor"!=n||!e&&et.call(t,n))&&r.push(n);return r}function Dt(t){return ne(t)?t:Ht(t)}function Mt(t,e,r,n,i,a){var c=i&u,f=t.length,l=e.length;if(f!=l&&!(c&&l>f))return!1;var s=a.get(t);if(s&&a.get(e))return s==e;var p=-1,v=!0,h=i&o?new Pt:void 0;for(a.set(t,e),a.set(e,t);++p<f;){var y=t[p],d=e[p];if(n)var b=c?n(d,y,p,e,t,a):n(y,d,p,t,e,a);if(void 0!==b){if(b)continue;v=!1;break}if(h){if(!N(e,(function(t,e){if(!h.has(e)&&(y===t||r(y,t,n,i,a)))return h.add(e)}))){v=!1;break}}else if(y!==d&&!r(y,d,n,i,a)){v=!1;break}}return a.delete(t),a.delete(e),v}function Ct(t){return function(t,e,r){var n=e(t);return ne(t)?n:G(n,r(t))}(t,ve,Qt)}function Ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Gt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Bt(r)?r:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===n?void 0:r}return et.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:et.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?n:e,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var e=this.__data__,r=$t(e,t);return!(r<0)&&(r==e.length-1?e.pop():ct.call(e,r,1),!0)},Et.prototype.get=function(t){var e=this.__data__,r=$t(e,t);return r<0?void 0:e[r][1]},Et.prototype.has=function(t){return $t(this.__data__,t)>-1},Et.prototype.set=function(t,e){var r=this.__data__,n=$t(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},xt.prototype.clear=function(){this.__data__={hash:new St,map:new(pt||Et),string:new St}},xt.prototype.delete=function(t){return Ut(this,t).delete(t)},xt.prototype.get=function(t){return Ut(this,t).get(t)},xt.prototype.has=function(t){return Ut(this,t).has(t)},xt.prototype.set=function(t,e){return Ut(this,t).set(t,e),this},Pt.prototype.add=Pt.prototype.push=function(t){return this.__data__.set(t,n),this},Pt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.clear=function(){this.__data__=new Et},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Et){var n=r.__data__;if(!pt||n.length<199)return n.push([t,e]),this;r=this.__data__=new xt(n)}return r.set(t,e),this};var Nt=ft?z(ft,Object):ye,Qt=ft?function(t){for(var e=[];t;)G(e,Nt(t)),t=it(t);return e}:ye,Wt=function(t){return rt.call(t)};function zt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||L.test(t))&&t>-1&&t%1==0&&t<e}function Vt(t,e){if(ne(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!fe(t))||(x.test(t)||!E.test(t)||null!=e&&t in Object(e))}function Kt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||H)}function Jt(t){return t==t&&!ae(t)}function Xt(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}(st&&Wt(new st(new ArrayBuffer(1)))!=S||pt&&Wt(new pt)!=y||vt&&Wt(vt.resolve())!=_||ht&&Wt(new ht)!=j||yt&&Wt(new yt)!=m)&&(Wt=function(t){var e=rt.call(t),r=e==b?t.constructor:void 0,n=r?Zt(r):void 0;if(n)switch(n){case bt:return S;case _t:return y;case gt:return _;case jt:return j;case wt:return m}return e});var Ht=te((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(fe(t))return At?At.call(t):"";var e=t+"";return"0"==e&&1/t==-i?"-0":e}(e);var r=[];return P.test(t)&&r.push(""),t.replace(k,(function(t,e,n,o){r.push(n?o.replace(R,"$1"):e||t)})),r}));function Yt(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}function Zt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function te(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],u=r.cache;if(u.has(o))return u.get(o);var i=t.apply(this,n);return r.cache=u.set(o,i),i};return r.cache=new(te.Cache||xt),r}function ee(t,e){return t===e||t!=t&&e!=e}function re(t){return function(t){return ce(t)&&oe(t)}(t)&&et.call(t,"callee")&&(!at.call(t,"callee")||rt.call(t)==c)}te.Cache=xt;var ne=Array.isArray;function oe(t){return null!=t&&ie(t.length)&&!ue(t)}function ue(t){var e=ae(t)?rt.call(t):"";return e==v||e==h}function ie(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function ae(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ce(t){return!!t&&"object"==typeof t}function fe(t){return"symbol"==typeof t||ce(t)&&rt.call(t)==O}var le,se=U?(le=U,function(t){return le(t)}):function(t){return ce(t)&&ie(t.length)&&!!I[rt.call(t)]};function pe(t){return oe(t)?Rt(t):function(t){if(!Kt(t))return lt(t);var e=[];for(var r in Object(t))et.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}function ve(t){return oe(t)?Rt(t,!0):qt(t)}function he(t){return t}function ye(){return[]}t.exports=function(t,e){return null==t?{}:function(t,e,r){for(var n=-1,o=e.length,u={};++n<o;){var i=e[n],a=t[i];r(a,i)&&(u[i]=a)}return u}(t,Ct(t),Ft(e))}}(i,i.exports);var a=9007199254740991,c="[object Arguments]",f="[object Function]",l="[object GeneratorFunction]",s="[object Symbol]",p="object"==typeof r&&r&&r.Object===Object&&r,v="object"==typeof self&&self&&self.Object===Object&&self,h=p||v||Function("return this")();function y(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}var d=Object.prototype,b=d.hasOwnProperty,_=d.toString,g=h.Symbol,j=d.propertyIsEnumerable,w=g?g.isConcatSpreadable:void 0,O=Math.max;function m(t,e,r,n,o){var u=-1,i=t.length;for(r||(r=A),o||(o=[]);++u<i;){var a=t[u];e>0&&r(a)?e>1?m(a,e-1,r,n,o):y(o,a):n||(o[o.length]=a)}return o}function A(t){return P(t)||function(t){return function(t){return k(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!function(t){var e=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}(t)?_.call(t):"";return e==f||e==l}(t)}(t)}(t)&&b.call(t,"callee")&&(!j.call(t,"callee")||_.call(t)==c)}(t)||!!(w&&t&&t[w])}function S(t){if("string"==typeof t||function(t){return"symbol"==typeof t||k(t)&&_.call(t)==s}(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}var E,x,P=Array.isArray;function k(t){return!!t&&"object"==typeof t}E=function(t,e){return null==t?{}:function(t,e){return function(t,e,r){for(var n=-1,o=e.length,u={};++n<o;){var i=e[n],a=t[i];r(a,i)&&(u[i]=a)}return u}(t=Object(t),e,(function(e,r){return r in t}))}(t,function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(m(e,1),S))},x=O(void 0===x?E.length-1:x,0);var R="object"==typeof r&&r&&r.Object===Object&&r,$="object"==typeof self&&self&&self.Object===Object&&self,L=(R||$||Function("return this")()).Symbol,I=L?L.prototype:void 0;I&&I.toString;const T=(t,e="from",r="to",n=!0)=>{const o={};return Array.isArray(t)&&t.forEach((t=>{if(i=t[e],u(i))return;var i;const a=n?t[e].toLowerCase().trim():t[e].trim();if(o[a]){o[a].includes(t[r])||o[a].push(t[r])}else o[a]=[t[r]]})),o};const B=new class{constructor(t,r){this.level=+r||e.ERROR.value,this.scope=t||""}setLogLevel(t){if(t&&"string"==typeof t){const r=t.toUpperCase();this.level=e[r]?e[r].value:this.level}}setScope(t){this.scope=t||this.scope}log(...t){this.logBase(t,e.LOG.value)}info(...t){this.logBase(t,e.INFO.value)}debug(...t){this.logBase(t,e.DEBUG.value)}warn(...t){this.logBase(t,e.WARN.value)}error(...t){this.logBase(t,e.ERROR.value)}logBase(t,r){if(this.level<=r){Object.values(e).find((t=>t.value===r)).method(...this.getLogData(t))}}getLogData(t){if(Array.isArray(t)&&t.length>0){let e="%c RS SDK";this.scope&&(e=`${e} - ${this.scope}`);e=`${e} %c ${t[0].trim()}`;const r=[];return r.push(e),r.push("font-weight: bold; background: black; color: white;"),r.push("font-weight: normal;"),r.push(...t.slice(1)),r}return t}}("Quora Pixel");return t.QuoraPixel=class{constructor(t,e,r){e.logLevel&&B.setLogLevel(e.logLevel),this.analytics=e,this.name="QUORA_PIXEL",this.pixelId=t.pixelId,this.eventsToQPEvents=t.eventsToQPEvents,({shouldApplyDeviceModeTransformation:this.shouldApplyDeviceModeTransformation,propagateEventsUntransformedOnError:this.propagateEventsUntransformedOnError,destinationId:this.destinationId}=null!=r?r:{})}loadScript(){var t,e,r,n,o,u;t=this.pixelId,e=window,r="script",e.qp||(n=e.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments)},n.queue=[],(o=document.createElement(r)).async=!0,o.src="https://a.quora.com/qevents.js",o.setAttribute("data-loader","RS_JS_SDK"),(u=document.getElementsByTagName(r)[0]).parentNode.insertBefore(o,u)),window.qp("init",t),window.qp("track","ViewContent")}init(){this.loadScript()}isLoaded(){return!(!window.qp||window.qp.push===Array.prototype.push)}isReady(){return this.isLoaded()}track(t){const{event:e}=t.message,r=T(this.eventsToQPEvents)[e.toLowerCase().trim()]||[];0===r.length&&(B.warn("No Quora Pixel mapped event found. Sending Generic as the default event"),window.qp("track","Generic")),r.forEach((t=>{t?"Custom"!==t&&window.qp("track",t):window.qp("track","Generic")}))}},Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({});
//# sourceMappingURL=QuoraPixel.min.js.map
-content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='ct_public_css-css' href='https://www.innovid.com/wp-content/plugins/cleantalk-spam-protect/css/cleantalk-public.min.css?ver=6.24' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css' href='https://use.fontawesome.com/releases/v5.0.13/css/all.css?ver=6.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='app-css' href='https://www.innovid.com/wp-content/themes/innovid/public/css/app.css?ver=1704846851' type='text/css' media='all' />
<link rel='stylesheet' id='main.css-css' href='https://www.innovid.com/wp-content/themes/innovid-2019/assets/dist/main.7a9e8fc471dd93ac20ae.css' type='text/css' media='all' />
<script type="text/javascript" src="https://www.innovid.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="text/javascript" src="https://www.innovid.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script type="text/javascript" data-pagespeed-no-defer src="https://www.innovid.com/wp-content/plugins/cleantalk-spam-protect/js/apbct-public-bundle.min.js?ver=6.24" id="ct_public_functions-js"></script>
<script type="text/javascript" src="https://moderate.cleantalk.org/ct-bot-detector-wrapper.js" id="ct_bot_detector-js"></script>
<script type="text/javascript" src="https://www.innovid.com/wp-content/themes/innovid/node_modules/feather-icons/dist/feather.min.js?ver=6.4.2" id="feather-icons-js"></script>
<link rel="https://api.w.org/" href="https://www.innovid.com/wp-json/" /><link rel="alternate" type="application/json" href="https://www.innovid.com/wp-json/wp/v2/iresource_category/506" />		<script type="text/javascript">
				(function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;
					t.src="https://www.clarity.ms/tag/"+i+"?ref=wordpress";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "i1w6mpv3da");
		</script>
		
<!-- Google Tag Manager for WordPress by gtm4wp.com -->
<!-- GTM Container placement set to manual -->
<script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">
	var dataLayer_content = {"pagePostType":"iresource","pagePostType2":"tax-iresource","pageCategory":[]};
	dataLayer.push( dataLayer_content );
</script>
<script data-cfasync="false">
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N33ZLD6');
</script>
<!-- End Google Tag Manager -->
<!-- End Google Tag Manager for WordPress by gtm4wp.com -->        <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="4c628707-4068-4552-b519-d993fccd9f7a"
            data-blockingmode="auto"
            data-georegions="{'region':'US','cbid':'5254632b-80ff-477e-a432-1b36406572d2'}"
            type="text/javascript"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Marketo Munchkin -->
        <script type="text/javascript">
            (function() {
                var didInit = false;
                function initMunchkin() {
                    if(didInit === false) {
                        didInit = true;
                        Munchkin.init('597-QOT-387');
                    }
                }
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//munchkin.marketo.net/munchkin.js';
                s.onreadystatechange = function() {
                        if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        initMunchkin();
                    }
                };
                s.onload = initMunchkin;
                document.getElementsByTagName('head')[0].appendChild(s);
            })();
        </script>
        <!-- End Marketo Munchkin -->
    
    <meta name="ahrefs-site-verification" content="d17925568061195e82c861db0077013381f9c2197cb277def4628a58f1b0399b">
</head>

<body class="archive tax-iresource_category term-blog term-506">
    
<!-- GTM Container placement set to manual -->
<!-- Google Tag Manager (noscript) -->
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N33ZLD6" height="0" width="0" style="display:none;visibility:hidden" aria-hidden="true"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->    <div class="js-window c-window">
        <div class="c-window__container">
            <div class="c-window__container__inner">
                <div class="c-window__content"></div>
                <div class="js-window-close c-window__close-btn">
                    <img class="mr-2 inline-block" src="https://www.innovid.com/wp-content/themes/innovid/public/images/icon-close-grey.svg" alt="X">
                    <span class="c-window__close-btn__label">Close Window</span>
                </div>
            </div>
        </div>
    </div>

    <main class="main">
        <div class="c-header" data-js-behavior="menu" data-language-selector-el=".menu-item-wpml-globe">
            <div class="l-container">
                <nav class="c-header__nav">
                    <a href="https://www.innovid.com"><img src="https://www.innovid.com/wp-content/themes/innovid/public/images/logo-innovid.svg" alt="INNOVID" width="109" height="20"></a>
                    <div class="menu-primary-container"><ul id="menu-primary" class="menu"><li id="menu-item-1854" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1854"><a href="https://www.innovid.com/solutions/">Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-1758" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1758"><a href="https://www.innovid.com/solutions/primary-ad-serving/">Ad Serving</a></li>
	<li id="menu-item-1831" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1831"><a href="https://www.innovid.com/solutions/creative-management/">Creative Management</a></li>
	<li id="menu-item-1765" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1765"><a href="https://www.innovid.com/solutions/advertising-measurement/">Advertising Measurement</a></li>
	<li id="menu-item-2809" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2809"><a href="https://www.innovid.com/solutions/identity-resolution/">Identity Resolution</a></li>
	<li id="menu-item-1759" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759"><a href="https://www.innovid.com/solutions/sell-side-solutions/">Sell-Side Solutions</a></li>
</ul>
</li>
<li id="menu-item-3622" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor menu-item-has-children menu-item-3622"><a href="/resources">Resources</a>
<ul class="sub-menu">
	<li id="menu-item-1120" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1120"><a href="#">Newsroom</a>
	<ul class="sub-menu">
		<li id="menu-item-3590" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3590"><a href="/resources/category/news/">News</a></li>
		<li id="menu-item-1121" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1121"><a href="/resources/category/reports/">Reports</a></li>
		<li id="menu-item-1122" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1122"><a href="/resources/category/case-studies/">Case Studies</a></li>
		<li id="menu-item-1123" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1123"><a href="/resources/category/blog/" aria-current="page">Blog</a></li>
		<li id="menu-item-3591" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3591"><a href="/resources/category/videos/">Videos</a></li>
	</ul>
</li>
	<li id="menu-item-3592" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3592"><a href="#">Fundamentals</a>
	<ul class="sub-menu">
		<li id="menu-item-3639" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3639"><a href="/resources/fundamentals-of-ctv-advertising/">Fundamentals of CTV</a></li>
		<li id="menu-item-3659" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3659"><a href="/resources/reimagine-tv-advertising/">Reimagine TV Advertising</a></li>
		<li id="menu-item-4388" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4388"><a href="https://www.innovid.com/resources/the-fundamentals-of-converged-tv-measurement/">Converged TV Measurement</a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-1833" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1833"><a href="https://www.innovid.com/about/">About</a>
<ul class="sub-menu">
	<li id="menu-item-1835" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1835"><a href="/about/#leadership">Leadership</a></li>
	<li id="menu-item-1836" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1836"><a href="/about/#partners">Partners</a></li>
	<li id="menu-item-1837" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1837"><a href="/about/#awards">Awards</a></li>
	<li id="menu-item-1838" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1838"><a href="/about/#careers">Careers</a></li>
	<li id="menu-item-2043" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2043"><a href="https://www.innovid.com/diversity-equity-inclusion/">Diversity</a></li>
	<li id="menu-item-3453" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3453"><a href="https://investors.innovid.com/">Investors</a></li>
</ul>
</li>
</ul></div>
                    <div class="c-header-primary-side-wrapper flex flex-row flex-wrap">
                                                <div class="menu-primary-side-container"><ul id="menu-primary-side" class="menu"><li id="menu-item-181" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-181"><a target="_blank" rel="noopener" href="https://studio.innovid.com/analytics">Log In</a></li>
<li id="menu-item-1839" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1839"><a href="https://www.innovid.com/contact/">Contact Us</a></li>
</ul></div>                    </div>
                </nav>
            </div>
        </div>

        <div class="c-m-header">
            <div class="l-container">
                <div class="c-m-header__top">
                    <a href="https://www.innovid.com"><img src="https://www.innovid.com/wp-content/themes/innovid/public/images/logo-innovid.svg" alt="INNOVID" width="109" height="20"></a>
                    <div class="c-m-header__toggle js-toggle">
                        <div class="c-toggle">
                            <span class="c-toggle__bar1"></span>
                            <span class="c-toggle__bar2"></span>
                            <span class="c-toggle__bar3"></span>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="menu-primary-mobile-container"><ul id="menu-primary-mobile" class="menu"><li id="menu-item-1157" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1157"><a href="https://www.innovid.com/contact/">Contact Us</a></li>
<li id="menu-item-1855" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1855"><a href="https://www.innovid.com/solutions/">Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-1766" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1766"><a href="https://www.innovid.com/solutions/primary-ad-serving/">Ad Serving</a></li>
	<li id="menu-item-1832" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1832"><a href="https://www.innovid.com/solutions/creative-management/">Creative Management</a></li>
	<li id="menu-item-1767" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767"><a href="https://www.innovid.com/solutions/advertising-measurement/">Advertising Measurement</a></li>
	<li id="menu-item-2810" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2810"><a href="https://www.innovid.com/solutions/identity-resolution/">Identity Resolution</a></li>
	<li id="menu-item-1768" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1768"><a href="https://www.innovid.com/solutions/sell-side-solutions/">Sell-Side Solutions</a></li>
</ul>
</li>
<li id="menu-item-3636" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor menu-item-has-children menu-item-3636"><a href="/resources">Resources</a>
<ul class="sub-menu">
	<li id="menu-item-3602" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-3602"><a href="#">Newsroom</a>
	<ul class="sub-menu">
		<li id="menu-item-1175" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1175"><a href="/resources/category/news">News</a></li>
		<li id="menu-item-1508" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1508"><a href="/resources/category/reports">Reports</a></li>
		<li id="menu-item-1510" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1510"><a href="/resources/category/case-studies">Case Studies</a></li>
		<li id="menu-item-1176" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1176"><a href="/resources/category/blog" aria-current="page">Blog</a></li>
		<li id="menu-item-3648" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3648"><a href="/resources/category/videos/">Videos</a></li>
	</ul>
</li>
	<li id="menu-item-3603" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3603"><a href="#">Fundamentals</a>
	<ul class="sub-menu">
		<li id="menu-item-2736" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2736"><a href="https://www.innovid.com/resources/fundamentals-of-ctv-advertising/">Fundamentals of CTV</a></li>
		<li id="menu-item-3660" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3660"><a href="/resources/reimagine-tv-advertising/">Reimagine TV Advertising</a></li>
		<li id="menu-item-4389" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4389"><a href="https://www.innovid.com/resources/the-fundamentals-of-converged-tv-measurement/">Converged TV Measurement</a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-1789" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1789"><a href="https://www.innovid.com/about/">About</a>
<ul class="sub-menu">
	<li id="menu-item-1851" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1851"><a href="/about/#leadership">Leadership</a></li>
	<li id="menu-item-1852" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1852"><a href="/about/#partners">Partners</a></li>
	<li id="menu-item-1853" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1853"><a href="/about/#awards">Awards</a></li>
	<li id="menu-item-1790" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1790"><a href="/about/#careers">Careers</a></li>
	<li id="menu-item-2044" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2044"><a href="https://www.innovid.com/diversity-equity-inclusion/">Diversity</a></li>
	<li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455"><a href="https://investors.innovid.com/">Investors</a></li>
</ul>
</li>
<li id="menu-item-1158" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1158"><a href="https://www.innovid.com/privacy-policy/">Privacy Policy</a></li>
<li id="menu-item-1159" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1159"><a href="https://www.innovid.com/terms-of-use/">Terms of Use</a></li>
</ul></div>        </div>

<div class="pt-12 md:pt-20">
    
<div class="term-archive">
    <div class="resource-search-bar hidden xxmd:block">
    <div class="max-w-7xl mx-auto px-6 py-6 flex justify-between">
        <div class="font-sans font-semibold text-gray text-3xl lg:text-4xl">
            <a href="https://www.innovid.com/resources/">                Resources            </a>        </div>
        <form id="searchform" action="/" class="relative border border-gray rounded-full text-gray w-64">
            <input type="text" name="s" value="" class="w-full h-full rounded-full pl-4 pr-8 focus:outline-none" placeholder="Search"></input>
            <button type="submit" form="searchform">
                <svg class="search-icon absolute" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M6.041 0A6.051 6.051 0 0 0 0 6.041a6.051 6.051 0 0 0 6.041 6.042c1.44 0 2.762-.509 3.802-1.354l4.089 4.088a.627.627 0 0 0 .885 0 .619.619 0 0 0 0-.879L10.729 9.85a6.013 6.013 0 0 0 1.354-3.809A6.051 6.051 0 0 0 6.04 0ZM6 1c2.77 0 5 2.23 5 5s-2.23 5-5 5-5-2.23-5-5 2.23-5 5-5Z" fill="#404040" fill-rule="evenodd"/></svg>
            </button>
            <input type="hidden" name="post_type" value="iresource" />
        </form>
    </div>
    <div class="h-1 bg-gradient-rainbow relative"></div>
</div>
    <div
    data-js-behavior="simpleShowHide"
    data-el-to-toggle=".topic__nav"
    data-show-button-el=".browse__button"
    data-show-button-active-classes="browse__button--active"
    data-hide-button-el=".close__button"
    class="resource-browse py-6 shadow-md text-center">
    <div class="max-w-7xl mx-auto px-10 lg:px-6">
        <button class="browse__button btn-transition inline-block rounded-full px-8 py-4 text-white text-base font-sans font-bold leading-tighter">Browse By Topic</button>
        <div class="topic__nav mt-6 hidden">
            <div class="topic__button-group sm:flex flex-wrap justify-center">
                                    <a
                        href="https://www.innovid.com/resources/topic/ctv-advertising/"
                        class="topic__button block w-full sm:w-1/3 xxmd:w-1/4 xxmd:mb-2 mb-4 mx-2 font-sans font-bold rounded-full p-3 lg:p-2 border-2 text-gray-medium-dark border-gray-medium-dark hover:text-orange-medium hover:border-orange-medium">
                        CTV Advertising                    </a>
                                    <a
                        href="https://www.innovid.com/resources/topic/ad-serving/"
                        class="topic__button block w-full sm:w-1/3 xxmd:w-1/4 xxmd:mb-2 mb-4 mx-2 font-sans font-bold rounded-full p-3 lg:p-2 border-2 text-gray-medium-dark border-gray-medium-dark hover:text-orange-medium hover:border-orange-medium">
                        Ad Serving                    </a>
                                    <a
                        href="https://www.innovid.com/resources/topic/advertising-measurement/"
                        class="topic__button block w-full sm:w-1/3 xxmd:w-1/4 xxmd:mb-2 mb-4 mx-2 font-sans font-bold rounded-full p-3 lg:p-2 border-2 text-gray-medium-dark border-gray-medium-dark hover:text-orange-medium hover:border-orange-medium">
                        Advertising Measurement                    </a>
                                    <a
                        href="https://www.innovid.com/resources/topic/identity-resolution/"
                        class="topic__button block w-full sm:w-1/3 xxmd:w-1/4 xxmd:mb-2 mb-4 mx-2 font-sans font-bold rounded-full p-3 lg:p-2 border-2 text-gray-medium-dark border-gray-medium-dark hover:text-orange-medium hover:border-orange-medium">
                        Identity Resolution                    </a>
                                    <a
                        href="https://www.innovid.com/resources/topic/personalization/"
                        class="topic__button block w-full sm:w-1/3 xxmd:w-1/4 xxmd:mb-2 mb-4 mx-2 font-sans font-bold rounded-full p-3 lg:p-2 border-2 text-gray-medium-dark border-gray-medium-dark hover:text-orange-medium hover:border-orange-medium">
                        Personalization                    </a>
                                    <a
                        href="https://www.innovid.com/resources/topic/creative-management/"
                        class="topic__button block w-full sm:w-1/3 xxmd:w-1/4 xxmd:mb-2 mb-4 mx-2 font-sans font-bold rounded-full p-3 lg:p-2 border-2 text-gray-medium-dark border-gray-medium-dark hover:text-orange-medium hover:border-orange-medium">
                        Creative Management                    </a>
                                    <a
                        href="https://www.innovid.com/resources/topic/company-culture/"
                        class="topic__button block w-full sm:w-1/3 xxmd:w-1/4 xxmd:mb-2 mb-4 mx-2 font-sans font-bold rounded-full p-3 lg:p-2 border-2 text-gray-medium-dark border-gray-medium-dark hover:text-orange-medium hover:border-orange-medium">
                        Company &amp; Culture                    </a>
                                    <a
                        href="https://www.innovid.com/resources/topic/omni-channel-advertising/"
                        class="topic__button block w-full sm:w-1/3 xxmd:w-1/4 xxmd:mb-2 mb-4 mx-2 font-sans font-bold rounded-full p-3 lg:p-2 border-2 text-gray-medium-dark border-gray-medium-dark hover:text-orange-medium hover:border-orange-medium">
                        Omni-Channel Advertising                    </a>
                            </div>
            <button class="close__button font-sans font-bold text-orange-medium text-base mt-6 flex items-center mx-auto">
                <svg class="inline-block" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.3 12 2.93 2.929a.921.921 0 0 1-1.302 1.302L12 13.3l-2.929 2.93a.921.921 0 0 1-1.302-1.302L10.7 12 7.77 9.071A.921.921 0 0 1 9.072 7.77L12 10.7l2.929-2.93a.921.921 0 0 1 1.302 1.302L13.3 12ZM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12Zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#F26504" fill-rule="evenodd"/></svg>
                <span class="pl-2">Close Menu</span>
            </button>
        </div>
    </div>
</div>
                    <div class="flex xxmd:hidden justify-center bg-gray-lightest px-6 py-4">
            <a class="font-sans font-bold text-orange-medium inline-flex items-center text-xl" href="https://www.innovid.com/resources/">
            <span class="text-orange-medium pr-2 flex items-center"><svg class="inline-block" width="15" height="23" viewBox="0 0 15 23" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21 3 11.5 12.5 2" stroke="#F26504" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round"/></svg></span>
            Back to Resources            </a>
        </div>
                <div class="term-archive__page-heading max-w-7xl mx-auto px-6 mt-6 xxmd:mt-12 mb-12">
            <div class="w-full xxmd:grid xxmd:grid-cols-3">
                                <div class="hidden xxmd:block mt-1">
                    <a class="font-sans font-bold text-orange-medium inline-flex items-center text-xl" href="https://www.innovid.com/resources/">
                    <span class="text-orange-medium pr-2 flex items-center"><svg class="inline-block" width="15" height="23" viewBox="0 0 15 23" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 21 3 11.5 12.5 2" stroke="#F26504" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round"/></svg></span>
                    Back to Resources                    </a>
                </div>
                                <div>
                                        <h1 class="font-sans font-normal text-gray text-center text-3xl lg:text-4xl">
                        Blogs                    </h1>
                                                            <div class="font-sans font-normal text-center text-gray text-xl mt-4">Read the latest Blogs.</div>
                                    </div>
                <div></div>
            </div>
        </div>
            <div class="term-archive__featured pb-10">
        <div class="content-feed-large mt-10 mb-16 last:mb-0">
        <div class="max-w-7xl px-6 mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
        
<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/disney-innovid-real-time-creative-optimization" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/disney-innovid-real-time-creative-optimization" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Disney & Innovid Are Closing the Measurement/Action Gap with Real-Time Creative Optimization                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">At CES, Disney introduced a beta dashboard that uses Innovid technology to enable real-time creative optimization to help advertisers maximize ROI. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/media-mavens-innovid-interview-walter-t.-geer-iii" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-1024x576.jpg" class="max-h-full max-w-full w-full" alt="" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/media-mavens-innovid-interview-walter-t.-geer-iii" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Media Mavens: The Innovid Interview with Walter T. Geer III                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">In the latest Innovid Interview, Walter T. Geer III, Chief Experience Design Officer at VMYLY&R Health, discusses the powerful potential of AI, CTV, and DCO. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/10-trends-that-will-transform-tv-advertising-in-2024" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Couple on a couch with a remote control" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/blog/10-trends-that-will-transform-tv-advertising-in-2024" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    10 Trends That Will Transform TV Advertising in 2024                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">The 10 key trends shaping TV advertising in 2024 include the cookie's crumbling, AI, the ad server as a data-generating juggernaut, and more. Check out all 10 trends. </div>
            </div>
</div>
    </div>
    </div>
    </div>
        <div class="term-archive__main-feed bg-gray-lightest pt-10 lg:pt-16 pb-10 lg:pb-24">
                <div class="max-w-7xl mx-auto px-6 flex flex-col xxmd:flex-row justify-center xxmd:justify-between xxmd:items-center">
            <h2 class="font-sans font-normal text-gray text-3xl lg:text-4xl leading-tight text-center xxmd:text-left">
                Explore all Blogs            </h2>
            <form action="https://www.innovid.com/resources/category/blog/" class="taxonomy-filter cursor-pointer font-sans flex items-center justify-center xxmd:justify-end my-2" data-js-behavior="submitOnChange" data-el-to-watch="select">
    <select  name='topic_filter' id='topic_filter' class='bg-transparent appearance-none cursor-pointer bg-filter-trigger-bg bg-left bg-no-repeat pl-10 py-2'>
	<option value='0'>Filter by Topics</option>
	<option class="level-0" value="ctv-advertising">CTV Advertising</option>
	<option class="level-0" value="ad-serving">Ad Serving</option>
	<option class="level-0" value="advertising-measurement">Advertising Measurement</option>
	<option class="level-0" value="identity-resolution">Identity Resolution</option>
	<option class="level-0" value="personalization">Personalization</option>
	<option class="level-0" value="creative-management">Creative Management</option>
	<option class="level-0" value="company-culture">Company &amp; Culture</option>
	<option class="level-0" value="omni-channel-advertising">Omni-Channel Advertising</option>
</select>
</form>
        </div>
                <div class="content-feed-large mt-10 mb-16 last:mb-0">
        <div class="max-w-7xl px-6 mx-auto grid grid-cols-1 gap-6 xxmd:grid-cols-2 lg:grid-cols-4 gap-6">
        
<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/disney-innovid-real-time-creative-optimization" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2024/01/Disney-Press-Release_Tile-Image_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/disney-innovid-real-time-creative-optimization" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Disney & Innovid Are Closing the Measurement/Action Gap with Real-Time Creative Optimization                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">At CES, Disney introduced a beta dashboard that uses Innovid technology to enable real-time creative optimization to help advertisers maximize ROI. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/media-mavens-innovid-interview-walter-t.-geer-iii" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-1024x576.jpg" class="max-h-full max-w-full w-full" alt="" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/12/WalterT.Geer_III_MediaMavens_Tile_1200x675-1.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/media-mavens-innovid-interview-walter-t.-geer-iii" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Media Mavens: The Innovid Interview with Walter T. Geer III                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">In the latest Innovid Interview, Walter T. Geer III, Chief Experience Design Officer at VMYLY&R Health, discusses the powerful potential of AI, CTV, and DCO. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/10-trends-that-will-transform-tv-advertising-in-2024" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Couple on a couch with a remote control" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2024/01/Blog-post_2024-Trends_tile-image_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/blog/10-trends-that-will-transform-tv-advertising-in-2024" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    10 Trends That Will Transform TV Advertising in 2024                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">The 10 key trends shaping TV advertising in 2024 include the cookie's crumbling, AI, the ad server as a data-generating juggernaut, and more. Check out all 10 trends. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/media-mavens-the-innovid-interview-with-sam-karow" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/12/SamKarow_MediaMavens_Tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/12/SamKarow_MediaMavens_Tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/12/SamKarow_MediaMavens_Tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/12/SamKarow_MediaMavens_Tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/12/SamKarow_MediaMavens_Tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/12/SamKarow_MediaMavens_Tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/media-mavens-the-innovid-interview-with-sam-karow" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Media Mavens: The Innovid Interview with Sam Karow                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Sam Karow, President of Effective Marketing Communication, discusses the power of data and optimization, the potential of CTV, and why he misses “spill."  </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/why-the-converged-tv-disconnect-is-amplified-for-larger-advertisers" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/12/LargerAdvertisers_Blog_Tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Woman holding a laptop" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/12/LargerAdvertisers_Blog_Tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/12/LargerAdvertisers_Blog_Tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/12/LargerAdvertisers_Blog_Tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/12/LargerAdvertisers_Blog_Tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/12/LargerAdvertisers_Blog_Tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/why-the-converged-tv-disconnect-is-amplified-for-larger-advertisers" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Why the “Converged TV Disconnect” Is Amplified for Larger Advertisers                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Advertisers are measuring their campaigns far more often than they're optimizing them. That's the converged TV disconnect, and this gap is even more challenging for larger advertisers.  </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/squadron-taps-innovidxp" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/12/Squadron_Case_study_Blog_Tile_1200x675_V2-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Squadron Venture Media" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/12/Squadron_Case_study_Blog_Tile_1200x675_V2-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/12/Squadron_Case_study_Blog_Tile_1200x675_V2-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/12/Squadron_Case_study_Blog_Tile_1200x675_V2-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/12/Squadron_Case_study_Blog_Tile_1200x675_V2-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/12/Squadron_Case_study_Blog_Tile_1200x675_V2.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/squadron-taps-innovidxp" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Squadron Taps InnovidXP to Measure & Optimize TV Investments for High-Growth Startups                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">With InnovidXP, a global measurement platform built for converged TV, Squadron supplies its clients with real-time proof of TV advertising’s impact. InnovidXP provides analytics to Squadron’s clients </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/top-10-innovid-blog-posts-of-2023" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/12/Top10_Blog_Tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Woman at laptop" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/12/Top10_Blog_Tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/12/Top10_Blog_Tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/12/Top10_Blog_Tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/12/Top10_Blog_Tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/12/Top10_Blog_Tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ad-serving/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Ad Serving            </a>
                            <a href="https://info.innovid.com/blog/top-10-innovid-blog-posts-of-2023" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Top 10 Innovid Blog Posts of 2023                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Innovid's most popular blog posts shine a spotlight on what the world of converged TV advertising cares about most. Here’s a list of Innovid's 10 most-viewed blog posts since the start of 2023.</div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/ctv-x-commerce-roundel-innovid" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/11/Roundel_blog_TILE_1200x675-1-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Innovid Roundel CTV" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/11/Roundel_blog_TILE_1200x675-1-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/11/Roundel_blog_TILE_1200x675-1-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/11/Roundel_blog_TILE_1200x675-1-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/11/Roundel_blog_TILE_1200x675-1-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/11/Roundel_blog_TILE_1200x675-1.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/ctv-x-commerce-roundel-innovid" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    CTV x Commerce: Roundel & Innovid Look at Shopper Behavior & Ad Trends                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Roundel and Innovid teamed up to create this report which examines market changes and provides useful advice for the world of CTV where there are more ways to reach and engage audiences than ever.</div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/how-the-converged-tv-disconnect-hits-the-entertainment-and-financial-industries" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/11/Vertical_Industries_Blog_Tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="woman holding a laptop" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/11/Vertical_Industries_Blog_Tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/11/Vertical_Industries_Blog_Tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/11/Vertical_Industries_Blog_Tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/11/Vertical_Industries_Blog_Tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/11/Vertical_Industries_Blog_Tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/how-the-converged-tv-disconnect-hits-the-entertainment-and-financial-industries" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    How the Converged TV Disconnect Hits the Entertainment and Financial Services Industries Hardest                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Advertisers spend significantly more time measuring their campaigns than optimizing them. This gap is the converged TV disconnect, and it hits harder in the entertainment and finance verticals. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/the-converged-tv-disconnect-is-magnified" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/11/Media-Creative_Blog_Tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Man holding a laptop" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/11/Media-Creative_Blog_Tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/11/Media-Creative_Blog_Tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/11/Media-Creative_Blog_Tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/11/Media-Creative_Blog_Tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/11/Media-Creative_Blog_Tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/the-converged-tv-disconnect-is-magnified" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    The Converged TV Disconnect is Magnified for Media Buyers and Creatives                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">The converged TV disconnect, which is the gap between measurement and optimization of converged TV ad campaigns, tends to be larger for media buyers than for creatives. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/media-rating-council" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/11/MRC_Blog_Tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Media Rating Council" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/11/MRC_Blog_Tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/11/MRC_Blog_Tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/11/MRC_Blog_Tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/11/MRC_Blog_Tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/11/MRC_Blog_Tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/media-rating-council" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Why the Media Rating Council is Poised to Become Even More Crucial                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">New Innovid research shows 86.8% of advertisers place a high value on Media Rating Council accreditation, and the MRC may become even more important as the 100% digital future of TV approaches.   </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/blog/media-mavens-innovid-interview-katie-driggs" >
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/10/Katie_MediaMavens_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Media Mavens: Katie Driggs" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/10/Katie_MediaMavens_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/10/Katie_MediaMavens_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/10/Katie_MediaMavens_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/10/Katie_MediaMavens_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/10/Katie_MediaMavens_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/blog/media-mavens-innovid-interview-katie-driggs" >
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Media Mavens: The Innovid Interview with Katie Driggs                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">"An ad server allows us to look at reporting in near real time, without having to manually calculate it all. It is critical; it allows us to react in real time," Katie Driggs says.  </div>
            </div>
</div>
    </div>
    </div>
                <div class="my-4 lg:my-8">
            <nav class="pagination flex items-center justify-center" aria-label="pagination navigation">
    <span aria-current="page" class="page-numbers current"><span>1</span></span>
<a class="page-numbers" href="https://www.innovid.com/resources/category/blog/page/2/"><span>2</span></a>
<a class="page-numbers" href="https://www.innovid.com/resources/category/blog/page/3/"><span>3</span></a>
<span class="page-numbers dots">&hellip;</span>
<a class="page-numbers" href="https://www.innovid.com/resources/category/blog/page/18/"><span>18</span></a>
<a class="next page-numbers" href="https://www.innovid.com/resources/category/blog/page/2/"><div class="next_posts text-orange-medium ml-4"><svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="10.95" height="18" viewBox="0 0 10.95 18"><title>caret</title><path class="a" d="M2.56,18.5a2,2,0,0,1-1.41-.58,2,2,0,0,1,0-2.83L6.69,9.5,1.14,3.91A2,2,0,0,1,4,1.09l7,7a2,2,0,0,1,0,2.82L4,17.91A2,2,0,0,1,2.56,18.5Z" transform="translate(-0.56 -0.5)"/></svg></div></a></nav>        </div>
    </div>
    </div>
</div>

<div class="bg-blue">
    <div class="max-w-6xl mx-auto px-8 xxl:px-0 block xxmd:flex items-center justify-between">
        <p class="font-sans font-normal text-2xl sm:text-3xl text-white text-center xxmd:text-left leading-tight pt-12 sm:py-12 pr-0 xxmd:pr-6">
            Want to Learn How We Can Make Your Advertising Easier?        </p>
        <div class="mt-6 sm:mt-0 pb-12 xxmd:pb-0 flex justify-center flex-shrink-0">
                <a href="/contact" target="" class="btn bg-transparent btn--outline-white bg-transparent btn-transition">
        Let's Talk    </a>
        </div>
    </div>
</div>
<footer class="c-footer" data-js-behavior="footerMenu">
  <div class="l-container-p8">
    <div class="c-footer__top">
              <div class="menu-solutions-container"><ul id="menu-solutions" class="menu"><li id="menu-item-1857" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1857"><a href="https://www.innovid.com/solutions/">Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-1771" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1771"><a href="https://www.innovid.com/solutions/primary-ad-serving/">Ad Serving</a></li>
	<li id="menu-item-1858" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1858"><a href="https://www.innovid.com/solutions/creative-management/">Creative Management</a></li>
	<li id="menu-item-1770" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1770"><a href="https://www.innovid.com/solutions/advertising-measurement/">Advertising Measurement</a></li>
	<li id="menu-item-2811" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2811"><a href="https://www.innovid.com/solutions/identity-resolution/">Identity Resolution</a></li>
	<li id="menu-item-1769" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"><a href="https://www.innovid.com/solutions/sell-side-solutions/">Sell-Side Solutions</a></li>
</ul>
</li>
</ul></div>      <div class="menu-resources-container"><ul id="menu-resources" class="menu"><li id="menu-item-3637" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor menu-item-has-children menu-item-3637"><a href="/resources">Resources</a>
<ul class="sub-menu">
	<li id="menu-item-3607" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-3607"><a href="#">Newsroom</a>
	<ul class="sub-menu">
		<li id="menu-item-234" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-234"><a href="/resources/category/news/">News</a></li>
		<li id="menu-item-235" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-235"><a href="/resources/category/reports/">Reports</a></li>
		<li id="menu-item-236" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236"><a href="/resources/category/case-studies/">Case Studies</a></li>
		<li id="menu-item-298" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-298"><a href="/resources/category/blog/" aria-current="page">Blog</a></li>
		<li id="menu-item-3609" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3609"><a href="/resources/category/videos/">Videos</a></li>
	</ul>
</li>
	<li id="menu-item-3606" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3606"><a href="#">Fundamentals</a>
	<ul class="sub-menu">
		<li id="menu-item-2737" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2737"><a href="https://www.innovid.com/resources/fundamentals-of-ctv-advertising/">Fundamentals of CTV</a></li>
		<li id="menu-item-3661" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3661"><a href="/resources/reimagine-tv-advertising/">Reimagine TV Advertising</a></li>
		<li id="menu-item-4390" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4390"><a href="https://www.innovid.com/resources/the-fundamentals-of-converged-tv-measurement/">Converged TV Measurement</a></li>
	</ul>
</li>
</ul>
</li>
</ul></div>      <div class="menu-about-container"><ul id="menu-about" class="menu"><li id="menu-item-192" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-192"><a href="https://www.innovid.com/about/">About</a>
<ul class="sub-menu">
	<li id="menu-item-237" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-237"><a href="/about/#team">Leadership</a></li>
	<li id="menu-item-238" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-238"><a href="/about/#partners">Partners</a></li>
	<li id="menu-item-239" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-239"><a href="/about/#awards">Awards</a></li>
	<li id="menu-item-240" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-240"><a href="/about/#careers">Careers</a></li>
	<li id="menu-item-2042" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2042"><a href="https://www.innovid.com/diversity-equity-inclusion/">Diversity</a></li>
	<li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454"><a href="https://investors.innovid.com/">Investors</a></li>
</ul>
</li>
</ul></div>            <div class="c-footer__newsletter c-footer__newsletter--no-bg">
        <div class="c-footer__newsletter__container c-footer__newsletter__container--no-padding">
          <h5>Subscribe to our newsletter for industry insights, benchmarks, and more.</h5>
                    <p><script src="//marketing.innovid.com/js/forms2/js/forms2.min.js"></script> </p>
<form id="mktoForm_2644"></form>
<p> <script>MktoForms2.loadForm("//marketing.innovid.com", "597-QOT-387", 2644);</script></p>
                  </div>
      </div>
    </div>
    <div class="c-footer__bottom">
      <div class="c-footer__copyright">© 2023 Innovid. All rights reserved.</div>
            <div class="menu-secondary-container"><ul id="menu-secondary" class="menu"><li id="menu-item-201" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-201"><a href="https://www.innovid.com/contact/">Contact</a></li>
<li id="menu-item-272" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-272"><a href="/contact/#offices">Offices</a></li>
<li id="menu-item-983" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-983"><a href="https://www.innovid.com/privacy-policy/">Privacy Policy</a></li>
<li id="menu-item-986" class="opt-out-privacy-popup menu-item menu-item-type-custom menu-item-object-custom menu-item-986"><a>Opt Out</a></li>
<li id="menu-item-1924" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1924"><a href="https://www.innovid.com/innovid-and-consumer-privacy/">Consumer Privacy</a></li>
<li id="menu-item-204" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-204"><a href="https://www.innovid.com/terms-of-use/">Terms of Use</a></li>
</ul></div>      <div class="menu-sns-container"><ul id="menu-sns" class="menu"><li id="menu-item-197" class="facebook menu-item menu-item-type-custom menu-item-object-custom menu-item-197"><a target="_blank" rel="noopener" href="https://www.facebook.com/innovid"><span>Facebook</span></a></li>
<li id="menu-item-198" class="instagram menu-item menu-item-type-custom menu-item-object-custom menu-item-198"><a target="_blank" rel="noopener" href="https://www.instagram.com/innovid/"><span>Instagram</span></a></li>
<li id="menu-item-199" class="twitter menu-item menu-item-type-custom menu-item-object-custom menu-item-199"><a target="_blank" rel="noopener" href="https://twitter.com/innovid"><span>Twitter</span></a></li>
<li id="menu-item-200" class="linkedin menu-item menu-item-type-custom menu-item-object-custom menu-item-200"><a target="_blank" rel="noopener" href="https://www.linkedin.com/company/innovid_2/"><span>Linkedin</span></a></li>
</ul></div>          </div>
  </div>
</footer>
<!-- opt-out code -->

<div id="oo-popup" style="display:none">
  <span class="button b-close">
    <span>X</span>
  </span>
  <div class="oo-header">Opt-Out</div>
  <span id="oo-msg">Click OK to opt-out of Innovid advertising cookies.</span><br><br>
  <div align="right"><span class="button" id="oo-button-ok"><span>OK</span></span></div>
</div>
<!-- end opt-out code -->

<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2529493.js"></script>
<!-- End of HubSpot Embed Code -->
<img alt="Cleantalk Pixel" title="Cleantalk Pixel" id="apbct_pixel" style="display: none;" src="https://moderate2-v4.cleantalk.org/pixel/b4c2c483235ca562c8dc7263e86ae1f9.gif"><script type="text/javascript" src="https://www.innovid.com/wp-content/plugins/duracelltomi-google-tag-manager/dist/js/gtm4wp-form-move-tracker.js?ver=1.19.1" id="gtm4wp-form-move-tracker-js"></script>
<script type="text/javascript" id="app-js-extra">
/* <![CDATA[ */
var Ajax = {"ajax_url":"https:\/\/www.innovid.com\/wp-admin\/admin-ajax.php"};
var Innovid = {"path":"https:\/\/www.innovid.com\/wp-content\/themes\/innovid"};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.innovid.com/wp-content/themes/innovid/public/js/app.js?ver=1704846853" id="app-js"></script>
<script type="text/javascript" src="https://www.innovid.com/wp-content/themes/innovid-2019/assets/dist/main.7a9e8fc471dd93ac20ae.js" id="main.js-js"></script>
</main>
<link rel="stylesheet" href="//demo.innovid.com/site/assets/bPopup.css">
<script src="//demo.innovid.com/site/assets/jquery.bpopup-0.11.0.min.js"></script>
<script>
  (function($) {
    var ooSuccessMsg = "Your settings have been applied. You are now opted-out.<br><br>Note: Deleting your cookies or changing computers or devices<br>after opting-out, will require you to opt-out again.";
    var ooFailureMsg = "An error occured. Please try again later.";
    var ooInitialMsg = "Click OK to opt-out of Innovid advertising cookies.";
    var ooInProgressMsg = "Processing...";

    $(function() {
      $('.opt-out-privacy-popup').on('click', function(e) {
        e.preventDefault();
        $.ooPopUp();
      });

      $('#oo-button-ok').on('click', function(e) {
        e.preventDefault();
        $('#oo-msg').html(ooInProgressMsg);

        $.ajax({
          url: "https://dts.innovid.com/dnt/?action_id=8",
          jsonp: "callback",
          dataType: "jsonp"
        }).done(function() {
          $('#oo-msg').html(ooSuccessMsg);
          $('#oo-button-ok').hide();
          $('#oo-popup').bPopup().reposition(1);
        }).fail(function() {
          $('#oo-msg').html(ooFailureMsg);
          $('#oo-button-ok').hide();
          $('#oo-popup').bPopup().reposition(1);
        });
      });
    });

    $.ooPopUp = function() {
      $('#oo-msg').html(ooInitialMsg);
      $('#oo-button-ok').show();
      var ooPopUp = $('#oo-popup').bPopup();
    };
  })(jQuery);
</script>
</body>

</html>
