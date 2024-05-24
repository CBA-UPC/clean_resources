var LinkedInInsightTag_RS=function(t){"use stricterCase()){case"INFO":e=1;break;case"DEBUG":e=2;break;case"WARN":e=3;break;default:e=4}},info(...t){e<=1&&console.info(...t)},debug(...t){e<=2&&console.log(...t)},warn(...t){e<=3&&console.warn(...t)},error(...t){e<=4&&console.error(...t)}},n="RS_JS_SDK",o=["Request failed with status:"],i=t=>{const e=window.RudderStackGlobals&&window.RudderStackGlobals.errorReporting;e&&t instanceof Error&&e.notify(t)},a=t=>{const e=[];return function(n,o){if(!t||null!=o){if("object"!=typeof o||null===o)return o;for(;e.length>0&&e[e.length-1]!==this;)e.pop();return e.includes(o)?(r.debug(`Circular Reference detected for key: ${n}`),"[Circular Reference]"):(e.push(o),o)}}},u=(t,e)=>{try{return JSON.stringify(t,a(e))}catch(t){return r.warn("Failed to convert the value to a JSON string."),null}},c=(t,e,a)=>{let c;try{c=((t,e,r)=>{let o;try{o="string"==typeof t?t:t instanceof Error||t.message?t.message:u(t)}catch(t){o=""}if("object"==typeof(i=t)&&null!==i&&"target"in i){if(t.target&&"script"!==t.target.localName)return"";if(t.target.dataset&&(t.target.dataset.loader!==n||"true"!==t.target.dataset.isnonnativesdk))return"";if(o=`error in script loading:: src::  ${t.target.src} id:: ${t.target.id}`,"ad-block"===t.target.id)return r.page("RudderJS-Initiated","ad-block page request",{path:"/ad-blocked",title:o},r.sendAdblockPageOptions),""}var i;return`[handleError]::${e||""} "${o}"`})(t,e,a)}catch(e){r.error("[handleError] Exception:: ",e),r.error("[handleError] Original error:: ",u(t)),i(e)}c&&(r.error(c),(t=>!t.message||!o.some((e=>t.message.includes(e))))(t)&&i(t))},s={LOG:{value:0,method:console.log},INFO:{value:1,method:console.info},DEBUG:{value:2,method:console.debug},WARN:{value:3,method:console.warn},ERROR:{value:4,method:console.error}};var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var p={exports:{}};!function(t,e){var r=9007199254740991,n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="[object Map]",u="[object Promise]",c="[object Set]",s="[object WeakMap]",f="[object DataView]",p=/^\[object .+?Constructor\]$/,d="object"==typeof l&&l&&l.Object===Object&&l,h="object"==typeof self&&self&&self.Object===Object&&self,v=d||h||Function("return this")(),y=e&&!e.nodeType&&e,g=y&&t&&!t.nodeType&&t,b=g&&g.exports===y;var _,j,m,O=Function.prototype,w=Object.prototype,A=v["__core-js_shared__"],S=(_=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+_:"",k=O.toString,E=w.hasOwnProperty,I=w.toString,R=RegExp("^"+k.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$=b?v.Buffer:void 0,T=w.propertyIsEnumerable,L=$?$.isBuffer:void 0,N=(j=Object.keys,m=Object,function(t){return j(m(t))}),B=J(v,"DataView"),D=J(v,"Map"),x=J(v,"Promise"),F=J(v,"Set"),M=J(v,"WeakMap"),P=!T.call({valueOf:1},"valueOf"),C=q(B),G=q(D),U=q(x),W=q(F),K=q(M);function z(t){if(!tt(t)||function(t){return!!S&&S in t}(t))return!1;var e=Z(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?R:p;return e.test(q(t))}function J(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return z(r)?r:void 0}var V=function(t){return I.call(t)};function q(t){if(null!=t){try{return k.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function H(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&X(t)}(t)&&E.call(t,"callee")&&(!T.call(t,"callee")||I.call(t)==n)}(B&&V(new B(new ArrayBuffer(1)))!=f||D&&V(new D)!=a||x&&V(x.resolve())!=u||F&&V(new F)!=c||M&&V(new M)!=s)&&(V=function(t){var e=I.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?q(r):void 0;if(n)switch(n){case C:return f;case G:return a;case U:return u;case W:return c;case K:return s}return e});var Q=Array.isArray;function X(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!Z(t)}var Y=L||function(){return!1};function Z(t){var e=tt(t)?I.call(t):"";return e==o||e==i}function tt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=function(t){if(X(t)&&(Q(t)||"string"==typeof t||"function"==typeof t.splice||Y(t)||H(t)))return!t.length;var e=V(t);if(e==a||e==c)return!t.size;if(P||function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||w)}(t))return!N(t).length;for(var r in t)if(E.call(t,r))return!1;return!0}}(p,p.exports);const d=f(p.exports);var h={exports:{}};!function(t,e){var r="__lodash_hash_undefined__",n=1,o=2,i=1/0,a=9007199254740991,u="[object Arguments]",c="[object Array]",s="[object Boolean]",f="[object Date]",p="[object Error]",d="[object Function]",h="[object GeneratorFunction]",v="[object Map]",y="[object Number]",g="[object Object]",b="[object Promise]",_="[object RegExp]",j="[object Set]",m="[object String]",O="[object Symbol]",w="[object WeakMap]",A="[object ArrayBuffer]",S="[object DataView]",k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/,I=/^\./,R=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$=/\\(\\)?/g,T=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,N={};N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N[u]=N[c]=N[A]=N[s]=N[S]=N[f]=N[p]=N[d]=N[v]=N[y]=N[g]=N[_]=N[j]=N[m]=N[w]=!1;var B="object"==typeof l&&l&&l.Object===Object&&l,D="object"==typeof self&&self&&self.Object===Object&&self,x=B||D||Function("return this")(),F=e&&!e.nodeType&&e,M=F&&t&&!t.nodeType&&t,P=M&&M.exports===F&&B.process,C=function(){try{return P&&P.binding("util")}catch(t){}}(),G=C&&C.isTypedArray;function U(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}function W(t,e){for(var r=-1,n=t?t.length:0;++r<n;)if(e(t[r],r,t))return!0;return!1}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function z(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function J(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var q,H=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=x["__core-js_shared__"],Z=(q=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",tt=Q.toString,et=X.hasOwnProperty,rt=X.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=x.Symbol,it=x.Uint8Array,at=J(Object.getPrototypeOf,Object),ut=X.propertyIsEnumerable,ct=H.splice,st=Object.getOwnPropertySymbols,lt=J(Object.keys,Object),ft=Ut(x,"DataView"),pt=Ut(x,"Map"),dt=Ut(x,"Promise"),ht=Ut(x,"Set"),vt=Ut(x,"WeakMap"),yt=Ut(Object,"create"),gt=Zt(ft),bt=Zt(pt),_t=Zt(dt),jt=Zt(ht),mt=Zt(vt),Ot=ot?ot.prototype:void 0,wt=Ot?Ot.valueOf:void 0,At=Ot?Ot.toString:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){var e=-1,r=t?t.length:0;for(this.__data__=new Et;++e<r;)this.add(t[e])}function Rt(t){this.__data__=new kt(t)}function $t(t,e){var r=ne(t)||re(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!et.call(t,i)||o&&("length"==i||Jt(i,n))||r.push(i);return r}function Tt(t,e){for(var r=t.length;r--;)if(ee(t[r][0],e))return r;return-1}function Lt(t,e){for(var r=0,n=(e=Vt(e,t)?[e]:Mt(e)).length;null!=t&&r<n;)t=t[Yt(e[r++])];return r&&r==n?t:void 0}function Nt(t,e){return null!=t&&e in Object(t)}function Bt(t,e,r,i,a){return t===e||(null==t||null==e||!ue(t)&&!ce(e)?t!=t&&e!=e:function(t,e,r,i,a,l){var d=ne(t),h=ne(e),b=c,w=c;d||(b=(b=zt(t))==u?g:b);h||(w=(w=zt(e))==u?g:w);var k=b==g&&!K(t),E=w==g&&!K(e),I=b==w;if(I&&!k)return l||(l=new Rt),d||fe(t)?Pt(t,e,r,i,a,l):function(t,e,r,i,a,u,c){switch(r){case S:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case A:return!(t.byteLength!=e.byteLength||!i(new it(t),new it(e)));case s:case f:case y:return ee(+t,+e);case p:return t.name==e.name&&t.message==e.message;case _:case m:return t==e+"";case v:var l=z;case j:var d=u&o;if(l||(l=V),t.size!=e.size&&!d)return!1;var h=c.get(t);if(h)return h==e;u|=n,c.set(t,e);var g=Pt(l(t),l(e),i,a,u,c);return c.delete(t),g;case O:if(wt)return wt.call(t)==wt.call(e)}return!1}(t,e,b,r,i,a,l);if(!(a&o)){var R=k&&et.call(t,"__wrapped__"),$=E&&et.call(e,"__wrapped__");if(R||$){var T=R?t.value():t,L=$?e.value():e;return l||(l=new Rt),r(T,L,i,a,l)}}if(!I)return!1;return l||(l=new Rt),function(t,e,r,n,i,a){var u=i&o,c=pe(t),s=c.length,l=pe(e),f=l.length;if(s!=f&&!u)return!1;var p=s;for(;p--;){var d=c[p];if(!(u?d in e:et.call(e,d)))return!1}var h=a.get(t);if(h&&a.get(e))return h==e;var v=!0;a.set(t,e),a.set(e,t);var y=u;for(;++p<s;){var g=t[d=c[p]],b=e[d];if(n)var _=u?n(b,g,d,e,t,a):n(g,b,d,t,e,a);if(!(void 0===_?g===b||r(g,b,n,i,a):_)){v=!1;break}y||(y="constructor"==d)}if(v&&!y){var j=t.constructor,m=e.constructor;j==m||!("constructor"in t)||!("constructor"in e)||"function"==typeof j&&j instanceof j&&"function"==typeof m&&m instanceof m||(v=!1)}return a.delete(t),a.delete(e),v}(t,e,r,i,a,l)}(t,e,Bt,r,i,a))}function Dt(t){return!(!ue(t)||(e=t,Z&&Z in e))&&(ie(t)||K(t)?nt:T).test(Zt(t));var e}function xt(t){return"function"==typeof t?t:null==t?he:"object"==typeof t?ne(t)?function(t,e){if(Vt(t)&&Ht(e))return Qt(Yt(t),e);return function(r){var i=function(t,e,r){var n=null==t?void 0:Lt(t,e);return void 0===n?r:n}(r,t);return void 0===i&&i===e?function(t,e){return null!=t&&function(t,e,r){e=Vt(e,t)?[e]:Mt(e);var n,o=-1,i=e.length;for(;++o<i;){var a=Yt(e[o]);if(!(n=null!=t&&r(t,a)))break;t=t[a]}if(n)return n;i=t?t.length:0;return!!i&&ae(i)&&Jt(a,i)&&(ne(t)||re(t))}(t,e,Nt)}(r,t):Bt(e,i,void 0,n|o)}}(t[0],t[1]):function(t){var e=function(t){var e=pe(t),r=e.length;for(;r--;){var n=e[r],o=t[n];e[r]=[n,o,Ht(o)]}return e}(t);if(1==e.length&&e[0][2])return Qt(e[0][0],e[0][1]);return function(r){return r===t||function(t,e,r,i){var a=r.length,u=a,c=!i;if(null==t)return!u;for(t=Object(t);a--;){var s=r[a];if(c&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++a<u;){var l=(s=r[a])[0],f=t[l],p=s[1];if(c&&s[2]){if(void 0===f&&!(l in t))return!1}else{var d=new Rt;if(i)var h=i(f,p,l,t,e,d);if(!(void 0===h?Bt(p,f,i,n|o,d):h))return!1}}return!0}(r,t,e)}}(t):Vt(e=t)?(r=Yt(e),function(t){return null==t?void 0:t[r]}):function(t){return function(e){return Lt(e,t)}}(e);var e,r}function Ft(t){if(!ue(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=qt(t),r=[];for(var n in t)("constructor"!=n||!e&&et.call(t,n))&&r.push(n);return r}function Mt(t){return ne(t)?t:Xt(t)}function Pt(t,e,r,i,a,u){var c=a&o,s=t.length,l=e.length;if(s!=l&&!(c&&l>s))return!1;var f=u.get(t);if(f&&u.get(e))return f==e;var p=-1,d=!0,h=a&n?new It:void 0;for(u.set(t,e),u.set(e,t);++p<s;){var v=t[p],y=e[p];if(i)var g=c?i(y,v,p,e,t,u):i(v,y,p,t,e,u);if(void 0!==g){if(g)continue;d=!1;break}if(h){if(!W(e,(function(t,e){if(!h.has(e)&&(v===t||r(v,t,i,a,u)))return h.add(e)}))){d=!1;break}}else if(v!==y&&!r(v,y,i,a,u)){d=!1;break}}return u.delete(t),u.delete(e),d}function Ct(t){return function(t,e,r){var n=e(t);return ne(t)?n:U(n,r(t))}(t,de,Kt)}function Gt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Dt(r)?r:void 0}St.prototype.clear=function(){this.__data__=yt?yt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(yt){var n=e[t];return n===r?void 0:n}return et.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return yt?void 0!==e[t]:et.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=yt&&void 0===e?r:e,this},kt.prototype.clear=function(){this.__data__=[]},kt.prototype.delete=function(t){var e=this.__data__,r=Tt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ct.call(e,r,1),!0)},kt.prototype.get=function(t){var e=this.__data__,r=Tt(e,t);return r<0?void 0:e[r][1]},kt.prototype.has=function(t){return Tt(this.__data__,t)>-1},kt.prototype.set=function(t,e){var r=this.__data__,n=Tt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new St,map:new(pt||kt),string:new St}},Et.prototype.delete=function(t){return Gt(this,t).delete(t)},Et.prototype.get=function(t){return Gt(this,t).get(t)},Et.prototype.has=function(t){return Gt(this,t).has(t)},Et.prototype.set=function(t,e){return Gt(this,t).set(t,e),this},It.prototype.add=It.prototype.push=function(t){return this.__data__.set(t,r),this},It.prototype.has=function(t){return this.__data__.has(t)},Rt.prototype.clear=function(){this.__data__=new kt},Rt.prototype.delete=function(t){return this.__data__.delete(t)},Rt.prototype.get=function(t){return this.__data__.get(t)},Rt.prototype.has=function(t){return this.__data__.has(t)},Rt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof kt){var n=r.__data__;if(!pt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Et(n)}return r.set(t,e),this};var Wt=st?J(st,Object):ve,Kt=st?function(t){for(var e=[];t;)U(e,Wt(t)),t=at(t);return e}:ve,zt=function(t){return rt.call(t)};function Jt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||L.test(t))&&t>-1&&t%1==0&&t<e}function Vt(t,e){if(ne(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!se(t))||(E.test(t)||!k.test(t)||null!=e&&t in Object(e))}function qt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}function Ht(t){return t==t&&!ue(t)}function Qt(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}(ft&&zt(new ft(new ArrayBuffer(1)))!=S||pt&&zt(new pt)!=v||dt&&zt(dt.resolve())!=b||ht&&zt(new ht)!=j||vt&&zt(new vt)!=w)&&(zt=function(t){var e=rt.call(t),r=e==g?t.constructor:void 0,n=r?Zt(r):void 0;if(n)switch(n){case gt:return S;case bt:return v;case _t:return b;case jt:return j;case mt:return w}return e});var Xt=te((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(se(t))return At?At.call(t):"";var e=t+"";return"0"==e&&1/t==-i?"-0":e}(e);var r=[];return I.test(t)&&r.push(""),t.replace(R,(function(t,e,n,o){r.push(n?o.replace($,"$1"):e||t)})),r}));function Yt(t){if("string"==typeof t||se(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}function Zt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function te(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a),a};return r.cache=new(te.Cache||Et),r}function ee(t,e){return t===e||t!=t&&e!=e}function re(t){return function(t){return ce(t)&&oe(t)}(t)&&et.call(t,"callee")&&(!ut.call(t,"callee")||rt.call(t)==u)}te.Cache=Et;var ne=Array.isArray;function oe(t){return null!=t&&ae(t.length)&&!ie(t)}function ie(t){var e=ue(t)?rt.call(t):"";return e==d||e==h}function ae(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function ue(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ce(t){return!!t&&"object"==typeof t}function se(t){return"symbol"==typeof t||ce(t)&&rt.call(t)==O}var le,fe=G?(le=G,function(t){return le(t)}):function(t){return ce(t)&&ae(t.length)&&!!N[rt.call(t)]};function pe(t){return oe(t)?$t(t):function(t){if(!qt(t))return lt(t);var e=[];for(var r in Object(t))et.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}function de(t){return oe(t)?$t(t,!0):Ft(t)}function he(t){return t}function ve(){return[]}t.exports=function(t,e){return null==t?{}:function(t,e,r){for(var n=-1,o=e.length,i={};++n<o;){var a=e[n],u=t[a];r(u,a)&&(i[a]=u)}return i}(t,Ct(t),xt(e))}}(h,h.exports);var v=9007199254740991,y="[object Arguments]",g="[object Function]",b="[object GeneratorFunction]",_="[object Symbol]",j="object"==typeof l&&l&&l.Object===Object&&l,m="object"==typeof self&&self&&self.Object===Object&&self,O=j||m||Function("return this")();function w(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}var A=Object.prototype,S=A.hasOwnProperty,k=A.toString,E=O.Symbol,I=A.propertyIsEnumerable,R=E?E.isConcatSpreadable:void 0,$=Math.max;function T(t,e,r,n,o){var i=-1,a=t.length;for(r||(r=L),o||(o=[]);++i<a;){var u=t[i];e>0&&r(u)?e>1?T(u,e-1,r,n,o):w(o,u):n||(o[o.length]=u)}return o}function L(t){return x(t)||function(t){return function(t){return F(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=v}(t.length)&&!function(t){var e=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}(t)?k.call(t):"";return e==g||e==b}(t)}(t)}(t)&&S.call(t,"callee")&&(!I.call(t,"callee")||k.call(t)==y)}(t)||!!(R&&t&&t[R])}function N(t){if("string"==typeof t||function(t){return"symbol"==typeof t||F(t)&&k.call(t)==_}(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}var B,D,x=Array.isArray;function F(t){return!!t&&"object"==typeof t}B=function(t,e){return null==t?{}:function(t,e){return function(t,e,r){for(var n=-1,o=e.length,i={};++n<o;){var a=e[n],u=t[a];r(u,a)&&(i[a]=u)}return i}(t=Object(t),e,(function(e,r){return r in t}))}(t,function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(T(e,1),N))},D=$(void 0===D?B.length-1:D,0);var M="object"==typeof l&&l&&l.Object===Object&&l,P="object"==typeof self&&self&&self.Object===Object&&self,C=(M||P||Function("return this")()).Symbol,G=C?C.prototype:void 0;G&&G.toString;const U=(t,e="from",r="to",n=!0)=>{const o={};return Array.isArray(t)&&t.forEach((t=>{if(i=t[e],d(i))return;var i;const a=n?t[e].toLowerCase().trim():t[e].trim();if(o[a]){o[a].includes(t[r])||o[a].push(t[r])}else o[a]=[t[r]]})),o},W=new class{constructor(t,e){this.level=+e||s.ERROR.value,this.scope=t||""}setLogLevel(t){if(t&&"string"==typeof t){const e=t.toUpperCase();this.level=s[e]?s[e].value:this.level}}setScope(t){this.scope=t||this.scope}log(...t){this.logBase(t,s.LOG.value)}info(...t){this.logBase(t,s.INFO.value)}debug(...t){this.logBase(t,s.DEBUG.value)}warn(...t){this.logBase(t,s.WARN.value)}error(...t){this.logBase(t,s.ERROR.value)}logBase(t,e){if(this.level<=e){Object.values(s).find((t=>t.value===e)).method(...this.getLogData(t))}}getLogData(t){if(Array.isArray(t)&&t.length>0){let e="%c RS SDK";this.scope&&(e=`${e} - ${this.scope}`);e=`${e} %c ${t[0].trim()}`;const r=[];return r.push(e),r.push("font-weight: bold; background: black; color: white;"),r.push("font-weight: normal;"),r.push(...t.slice(1)),r}return t}}("Linkedin Insight Tag");return t.LinkedInInsightTag=class{constructor(t,e,r){e.logLevel&&W.setLogLevel(e.logLevel),this.analytics=e,this.name="LINKEDIN_INSIGHT_TAG",this.partnerId=t.partnerId,this.eventToConversionIdMap=t.eventToConversionIdMap,({shouldApplyDeviceModeTransformation:this.shouldApplyDeviceModeTransformation,propagateEventsUntransformedOnError:this.propagateEventsUntransformedOnError,destinationId:this.destinationId}=null!=r?r:{})}init(){((t,e,r={})=>{try{if(document.getElementById(t))return;const o=document.createElement("script");o.src=e,o.async=void 0===r.async||r.async,o.type="text/javascript",o.id=t,!0!==r.skipDatasetAttributes&&(o.setAttribute("data-loader",n),void 0!==r.isNonNativeSDK&&o.setAttribute("data-isNonNativeSDK",r.isNonNativeSDK));const i=document.getElementsByTagName("head");if(i.length>0)i[0].insertBefore(o,i[0].firstChild);else{const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(o,t)}}catch(t){c(t)}})("LinkedIn Insight Tag","https://snap.licdn.com/li.lms-analytics/insight.min.js"),this.partnerId&&(window._linkedin_data_partner_id=this.partnerId)}isLoaded(){return!!window._linkedin_data_partner_id}isReady(){return this.isLoaded()}track(t){const{message:e}=t,{event:r}=e;if(!r)return void W.error("Event name is missing for track call");const n=r.trim(),o=U(this.eventToConversionIdMap,"from","to",!1);if(!o[n])return void W.error(`The "${r}" event is not mapped in the destination dashboard. It'll be skipped`);(o[n]||[]).forEach((t=>{window.lintrk("track",{conversion_id:t})}))}},Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({});
//# sourceMappingURL=LinkedInInsightTag.min.js.map
round-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
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
<link rel="https://api.w.org/" href="https://www.innovid.com/wp-json/" /><link rel="alternate" type="application/json" href="https://www.innovid.com/wp-json/wp/v2/iresource_category/12" />		<script type="text/javascript">
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

<body class="archive tax-iresource_category term-reports term-12">
    
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
		<li id="menu-item-1121" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1121"><a href="/resources/category/reports/" aria-current="page">Reports</a></li>
		<li id="menu-item-1122" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1122"><a href="/resources/category/case-studies/">Case Studies</a></li>
		<li id="menu-item-1123" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1123"><a href="/resources/category/blog/">Blog</a></li>
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
		<li id="menu-item-1508" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1508"><a href="/resources/category/reports" aria-current="page">Reports</a></li>
		<li id="menu-item-1510" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1510"><a href="/resources/category/case-studies">Case Studies</a></li>
		<li id="menu-item-1176" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1176"><a href="/resources/category/blog">Blog</a></li>
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
                        Reports                    </h1>
                                                            <div class="font-sans font-normal text-center text-gray text-xl mt-4">Read the latest Reports.</div>
                                    </div>
                <div></div>
            </div>
        </div>
            <div class="term-archive__featured pb-10">
        <div class="content-feed-large mt-10 mb-16 last:mb-0">
        <div class="max-w-7xl px-6 mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
        
<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/the-converged-tv-disconnect" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Converged TV Disconnect" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/the-converged-tv-disconnect" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    The Converged TV Disconnect: Advertisers On Bridging the Gap Between TV Measurement Insights and Results                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Spending on converged TV advertising is getting bigger. But new Innovid research reveals a converged TV disconnect as advertisers measure and optimize on separate platforms. And that’s hurting ROI. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/2023-retail-benchmarks-report" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Retail Benchmarks" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/2023-retail-benchmarks-report" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Retail (Ad) Therapy: The Roles of CTV & Advanced Video Creatives                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">A look into how Retailers are adapting media & creative strategies today  </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/2023-innovid-roundel-ctv-commerce-report" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Roundel Report" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/2023-innovid-roundel-ctv-commerce-report" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    CTV x Commerce: Media & Creative Strategies to Build Loyalty & Drive Shoppable Experiences                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Innovid and Roundel deep dive into shopper behavior and how advertisers are adapting their CTV and creative strategies to keep up.  </div>
            </div>
</div>
    </div>
    </div>
    </div>
        <div class="term-archive__main-feed bg-gray-lightest pt-10 lg:pt-16 pb-10 lg:pb-24">
                <div class="max-w-7xl mx-auto px-6 flex flex-col xxmd:flex-row justify-center xxmd:justify-between xxmd:items-center">
            <h2 class="font-sans font-normal text-gray text-3xl lg:text-4xl leading-tight text-center xxmd:text-left">
                Explore all Reports            </h2>
            <form action="https://www.innovid.com/resources/category/reports/" class="taxonomy-filter cursor-pointer font-sans flex items-center justify-center xxmd:justify-end my-2" data-js-behavior="submitOnChange" data-el-to-watch="select">
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
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/the-converged-tv-disconnect" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Converged TV Disconnect" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/09/Q4_measurement_report_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/the-converged-tv-disconnect" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    The Converged TV Disconnect: Advertisers On Bridging the Gap Between TV Measurement Insights and Results                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Spending on converged TV advertising is getting bigger. But new Innovid research reveals a converged TV disconnect as advertisers measure and optimize on separate platforms. And that’s hurting ROI. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/2023-retail-benchmarks-report" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Retail Benchmarks" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/06/Retail_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/2023-retail-benchmarks-report" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Retail (Ad) Therapy: The Roles of CTV & Advanced Video Creatives                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">A look into how Retailers are adapting media & creative strategies today  </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/2023-innovid-roundel-ctv-commerce-report" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Roundel Report" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/06/Roundel_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/2023-innovid-roundel-ctv-commerce-report" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    CTV x Commerce: Media & Creative Strategies to Build Loyalty & Drive Shoppable Experiences                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Innovid and Roundel deep dive into shopper behavior and how advertisers are adapting their CTV and creative strategies to keep up.  </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/2023-auto-benchmarks-report" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/06/Benchmarks_Global-Insights_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Auto Benchmarks" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/06/Benchmarks_Global-Insights_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/06/Benchmarks_Global-Insights_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/06/Benchmarks_Global-Insights_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/06/Benchmarks_Global-Insights_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/06/Benchmarks_Global-Insights_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/2023-auto-benchmarks-report" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Shifting Gears: Global CTV & Creative Insights                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">An unprecedented look into how automotive advertisers reach, engage, and drive outcomes across the video landscape </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/2023-general-benchmarks-report" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/05/Benchmarks_Global-Insights_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Global CTV &amp; Creative Insights" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/05/Benchmarks_Global-Insights_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/05/Benchmarks_Global-Insights_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/05/Benchmarks_Global-Insights_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/05/Benchmarks_Global-Insights_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/05/Benchmarks_Global-Insights_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/2023-general-benchmarks-report" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Global CTV & Creative Insights                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">A look into how global advertisers are adapting media & creative strategies today
</div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/converged-tv-measurement-101/" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/04/Fundamentals_Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Converged TV Measurement 101" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/04/Fundamentals_Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/04/Fundamentals_Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/04/Fundamentals_Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/04/Fundamentals_Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/04/Fundamentals_Convered_TV_Measurment_Landing-Page_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/converged-tv-measurement-101/" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Converged TV Measurement 101                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Master the fundamentals of cross-platform measurement to get ahead in the highly fragmented, but highly valuable converged TV space.
</div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/the-hitchhikers-guide-to-converged-tv-measurement/" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/04/Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="The Hitchhiker’s Guide to Converged TV Measurement" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/04/Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/04/Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/04/Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/04/Convered_TV_Measurment_Landing-Page_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/04/Convered_TV_Measurment_Landing-Page_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/the-hitchhikers-guide-to-converged-tv-measurement/" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    The Hitchhiker’s Guide to Converged TV Measurement                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Leverage converged TV measurement with InnovidXP. Download our lookbook to make unified cross-platform measurement a reality today.
</div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/2023-future-of-converged-tv/" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2023/02/ascendant_report_hub_TILE_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="Future of Converged TV" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2023/02/ascendant_report_hub_TILE_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2023/02/ascendant_report_hub_TILE_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2023/02/ascendant_report_hub_TILE_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2023/02/ascendant_report_hub_TILE_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2023/02/ascendant_report_hub_TILE_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/advertising-measurement/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Advertising Measurement            </a>
                            <a href="https://info.innovid.com/2023-future-of-converged-tv/" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    The Future of Converged TV is Now                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Innovid and Ascendant Network surveyed 100+ senior-level marketers to see how media and creative strategies have evolved in the age of converged TV. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/2022-unify-converged-tv" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2022/11/Unify_Xplat_report_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="The Great Unification of Converged TV" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2022/11/Unify_Xplat_report_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2022/11/Unify_Xplat_report_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2022/11/Unify_Xplat_report_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2022/11/Unify_Xplat_report_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2022/11/Unify_Xplat_report_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/2022-unify-converged-tv" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    The Great Unification of Converged TV                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Innovid set out to discover more about the priorities, challenges, and future outlook for unifying converged TV. We surveyed more than 250 brand advertisers and agencies–here’s what we found. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/2022-cpg-report" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="1024" height="576" src="https://www.innovid.com/wp-content/uploads/2022/09/CPG-Marketers-Guide_report_hub_tile_1200x675-1024x576.jpg" class="max-h-full max-w-full w-full" alt="CPG Report" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2022/09/CPG-Marketers-Guide_report_hub_tile_1200x675-1024x576.jpg 1024w, https://www.innovid.com/wp-content/uploads/2022/09/CPG-Marketers-Guide_report_hub_tile_1200x675-300x169.jpg 300w, https://www.innovid.com/wp-content/uploads/2022/09/CPG-Marketers-Guide_report_hub_tile_1200x675-768x432.jpg 768w, https://www.innovid.com/wp-content/uploads/2022/09/CPG-Marketers-Guide_report_hub_tile_1200x675-628x354.jpg 628w, https://www.innovid.com/wp-content/uploads/2022/09/CPG-Marketers-Guide_report_hub_tile_1200x675.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/2022-cpg-report" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Add to Cart: The CPG Guide to CTV                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Discover Innovid’s research into how CPG marketers are leveraging the CTV channel. You’ll find effective strategies, benchmarks, and more.</div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/reconciling-views-on-identity-resolution" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="600" height="300" src="https://www.innovid.com/wp-content/uploads/2021/09/Identity_Infographic_LandingPage_Insights.png" class="max-h-full max-w-full w-full" alt="Identity Resolution" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2021/09/Identity_Infographic_LandingPage_Insights.png 600w, https://www.innovid.com/wp-content/uploads/2021/09/Identity_Infographic_LandingPage_Insights-300x150.png 300w" sizes="(max-width: 600px) 100vw, 600px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/identity-resolution/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                Identity Resolution            </a>
                            <a href="https://info.innovid.com/reconciling-views-on-identity-resolution" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Reconciling Views on Identity Resolution                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Innovid surveyed marketers and consumers to better understand their sentiments toward identity resolution. </div>
            </div>
</div>

<div class="content-card  mb-8">
        <div class="">
        <a class="content-card__image-wrap mb-6" href="https://info.innovid.com/decoding-ctv-measurement-2021" target="__blank" rel="noopener">
            <div class="content-card__image relative w-full flex items-center justify-center  bg-white">
                <img width="600" height="300" src="https://www.innovid.com/wp-content/uploads/2021/07/ANA_Report_Insights.png" class="max-h-full max-w-full w-full" alt="" decoding="async" loading="lazy" srcset="https://www.innovid.com/wp-content/uploads/2021/07/ANA_Report_Insights.png 600w, https://www.innovid.com/wp-content/uploads/2021/07/ANA_Report_Insights-300x150.png 300w" sizes="(max-width: 600px) 100vw, 600px" />                            </div>
        </a>
    </div>
        <div class="content-card__text w-full flex-shrink">
                    <a href="https://www.innovid.com/resources/topic/ctv-advertising/" class="block hover:text-orange-light font-sans font-bold text-orange-medium text-base mb-2">
                CTV Advertising            </a>
                            <a href="https://info.innovid.com/decoding-ctv-measurement-2021" target="__blank" rel="noopener">
                <h3 class="heading font-sans font-bold text-xl text-gray hover:text-orange-medium leading-tight">
                    Decoding CTV Measurement: An In-Depth Look at Reach, Frequency and ROI                </h3>
            </a>
                            <div class="description font-sans font-normal text-base text-gray leading-normal mt-4">Download our first-of-its-kind CTV measurement study for insights, best practices, and a new set of KPIs to guide your CTV strategy. 
</div>
            </div>
</div>
    </div>
    </div>
                <div class="my-4 lg:my-8">
            <nav class="pagination flex items-center justify-center" aria-label="pagination navigation">
    <span aria-current="page" class="page-numbers current"><span>1</span></span>
<a class="page-numbers" href="https://www.innovid.com/resources/category/reports/page/2/"><span>2</span></a>
<a class="page-numbers" href="https://www.innovid.com/resources/category/reports/page/3/"><span>3</span></a>
<a class="next page-numbers" href="https://www.innovid.com/resources/category/reports/page/2/"><div class="next_posts text-orange-medium ml-4"><svg class="inline-block" xmlns="http://www.w3.org/2000/svg" width="10.95" height="18" viewBox="0 0 10.95 18"><title>caret</title><path class="a" d="M2.56,18.5a2,2,0,0,1-1.41-.58,2,2,0,0,1,0-2.83L6.69,9.5,1.14,3.91A2,2,0,0,1,4,1.09l7,7a2,2,0,0,1,0,2.82L4,17.91A2,2,0,0,1,2.56,18.5Z" transform="translate(-0.56 -0.5)"/></svg></div></a></nav>        </div>
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
		<li id="menu-item-235" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-235"><a href="/resources/category/reports/" aria-current="page">Reports</a></li>
		<li id="menu-item-236" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236"><a href="/resources/category/case-studies/">Case Studies</a></li>
		<li id="menu-item-298" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-298"><a href="/resources/category/blog/">Blog</a></li>
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
<img alt="Cleantalk Pixel" title="Cleantalk Pixel" id="apbct_pixel" style="display: none;" src="https://moderate2-v4.cleantalk.org/pixel/f64ea4ee247d5123c5763cf7e8a5745d.gif"><script type="text/javascript" src="https://www.innovid.com/wp-content/plugins/duracelltomi-google-tag-manager/dist/js/gtm4wp-form-move-tracker.js?ver=1.19.1" id="gtm4wp-form-move-tracker-js"></script>
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
