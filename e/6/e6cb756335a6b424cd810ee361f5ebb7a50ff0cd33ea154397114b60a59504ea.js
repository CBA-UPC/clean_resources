var RedditPixel_RS=function(t){"use strict";const e={LOG:{value:0,method:console.log},INFO:{value:1,method:console.info},DEBUG:{value:2,method:console.debug},WARN:{value:3,method:console.warn},ERROR:{value:4,method:console.error}};var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};ar o={exports:{}};!function(t,e){var n=9007199254740991,o="[object Arguments]",i="[object Function]",a="[object GeneratorFunction]",u="[object Map]",c="[object Promise]",f="[object Set]",l="[object WeakMap]",s="[object DataView]",p=/^\[object .+?Constructor\]$/,v="object"==typeof r&&r&&r.Object===Object&&r,d="object"==typeof self&&self&&self.Object===Object&&self,h=v||d||Function("return this")(),y=e&&!e.nodeType&&e,b=y&&t&&!t.nodeType&&t,g=b&&b.exports===y;var _,j,w,m=Function.prototype,O=Object.prototype,A=h["__core-js_shared__"],S=(_=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+_:"",k=m.toString,E=O.hasOwnProperty,R=O.toString,I=RegExp("^"+k.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=g?h.Buffer:void 0,$=O.propertyIsEnumerable,x=P?P.isBuffer:void 0,L=(j=Object.keys,w=Object,function(t){return j(w(t))}),F=K(h,"DataView"),T=K(h,"Map"),B=K(h,"Promise"),M=K(h,"Set"),D=K(h,"WeakMap"),C=!$.call({valueOf:1},"valueOf"),U=q(F),G=q(T),N=q(B),W=q(M),V=q(D);unction K(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return z(r)?r:void 0}var Q=function(t){return R.call(t)};function q(t){if(null!=t){try{return k.call(t)}catch(t){}try{return t+""}catch(t){}}return""}F&&Q(new F(new ArrayBuffer(1)))!=s||T&&Q(new T)!=u||B&&Q(B.resolve())!=c||M&&Q(new M)!=f||D&&Q(new D)!=l)&&(Q=;var X=Array.isArray;ar Y=x||function Z(t){var e=tt(t)?R.call(t):"";return e==i||e==a}function tt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=(o,o.exports);const i=n(o.exports);var a={exports:{}};!function(t,e){var n="__lodash_hash_undefined__",o=1,i=2,a=1/0,u=9007199254740991,c="[object Arguments]",f="[object Array]",l="[object Boolean]",s="[object Date]",p="[object Error]",v="[object Function]",d="[object GeneratorFunction]",h="[object Map]",y="[object Number]",b="[object Object]",g="[object Promise]",_="[object RegExp]",j="[object Set]",w="[object String]",m="[object Symbol]",O="[object WeakMap]",A="[object ArrayBuffer]",S="[object DataView]",k=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,E=/^\w*$/,R=/^\./,I=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,P=/\\(\\)?/g,$=/^\[object .+?Constructor\]$/,x=/^(?:0|[1-9]\d*)$/,L={};L["[object Float32Array]"]=L["[object Float64Array]"]=L["[object Int8Array]"]=L["[object Int16Array]"]=L["[object Int32Array]"]=L["[object Uint8Array]"]=L["[object Uint8ClampedArray]"]=L["[object Uint16Array]"]=L["[object Uint32Array]"]=!0,L[c]=L[f]=L[A]=L[l]=L[S]=L[s]=L[p]=L[v]=L[h]=L[y]=L[b]=L[_]=L[j]=L[w]=L[O]=!1;var F="object"==typeof r&&r&&r.Object===Object&&r,T="object"==typeof self&&self&&self.Object===Object&&self,B=F||T||Function("return this")(),M=e&&!e.nodeType&&e,D=M&&t&&!t.nodeType&&t,C=D&&D.exports===M&&F.process,U=),G=U&&U.isTypedArray;function N(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},J=Array.prototype,X=Function.prototype,H=Object.prototype,Y=B["__core-js_shared__"],Z=(q=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",tt=X.toString,et=H.hasOwnProperty,rt=H.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=B.Symbol,it=B.Uint8Array,at=K(Object.getPrototypeOf,Object),ut=H.propertyIsEnumerable,ct=J.splice,ft=Object.getOwnPropertySymbols,lt=K(Object.keys,Object),st=Nt(B,"DataView"),pt=Nt(B,"Map"),vt=Nt(B,"Promise"),dt=Nt(B,"Set"),ht=Nt(B,"WeakMap"),yt=Nt(Object,"create"),bt=Zt(st),gt=Zt(pt),_t=Zt(vt),jt=Zt(dt),wt=Zt(ht),mt=ot?ot.prototype:void 0,Ot=mt?mt.valueOf:void 0,At=mt?mt.toString:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ar=St.prototype.delete=St.prototype.get=St.prototype.has=St.prototype.set=kt.prototype.clear=kt.prototype.delete=kt.prototype.get=kt.prototype.has=kt.prototype.set=Et.prototype.clear=Et.prototype.delete=function(t){return Gt(this,t).delete(t)},Et.prototype.get=function(t){return Gt(this,t).get(t)},Et.prototype.has=Et.prototype.set=Rt.prototype.add=Rt.prototype.push=Rt.prototype.has=function(t){return this.__data__.has(t)},It.prototype.clear=It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=It.prototype.set=var Wt=ft?K(ft,Object):he,Vt=ft?he,zt=zt(new st(new ArrayBuffer(1)))!=S||pt&&zt(new pt)!=h||vt&&zt(vt.resolve())!=g||dt&&zt(new dt)!=j||ht&&zt(new ht)!=O)&&(zt=;var Ht=te(();che=Et;var ne=Array.isArray;tion ce(t){return!!t&&"object"==typeof t}ar le,se=G?(le=G,:ports=(a,a.exports);var u=9007199254740991,c="[object Arguments]",f="[object Function]",l="[object GeneratorFunction]",s="[object Symbol]",p="object"==typeof r&&r&&r.Object===Object&&r,v="object"==typeof self&&self&&self.Object===Object&&self,d=p||v||Function("return this")();ar y=Object.prototype,b=y.hasOwnProperty,g=y.toString,_=d.Symbol,j=y.propertyIsEnumerable,w=_?_.isConcatSpreadable:void 0,m=Math.max; k,E,R=Array.isArray;=E=m(void 0===E?k.length-1:E,0);var P="object"==typeof r&&r&&r.Object===Object&&r,$="object"==typeof self&&self&&self.Object===Object&&self,x=(P||$||Function("return this")()).Symbol,L=x?x.prototype:void 0;L&&L.toString;const F=(t,e="from",r="to",n=!0)=>{const o={};return Array.isArray(t)&&t.forEach((t=>{if(a=t[e],i(a))return;var a;const u=n?t[e].toLowerCase().trim():t[e].trim();if(o[u]){o[u].includes(t[r])||o[u].push(t[r])}else o[u]=[t[r]]})),o};const T=new class{constructor(t,r){this.level=+r||e.ERROR.value,this.scope=t||""}setLogLevelg(...t){this.logBase(t,e.LOG.value)}info(...t){this.logBase(t,e.INFO.value)}debug(...t){this.logBase(t,e.DEBUG.value)}warn(...t){this.logBase(t,e.WARN.value)}error(...t){this.logBase(t,e.ERROR.value)}logBase(t,r){if(this.level<=r){Object.values(e).find(().method(...this.getLogData(t))}}getLogData(t){if(Array.isArray(t)&&t.length>0){let e="%c RS SDK";this.scope&&(e=`${e} - ${this.scope}`);e=`${e} %c ${t[0].trim()}`;const r=[];return r.push(e),r.push("font-weight: bold; background: black; color: white;"),r.push("font-weight: normal;"),r.push(...t.slice(1)),r}return t}}("Reddit Pixel");return t.RedditPixel=class{constructor(t,e,r){e.logLevel&&T.setLogLevel(e.logLevel),this.analytics=e,this.advertiserId=t.advertiserId,this.name="REDDIT_PIXEL",this.eventMappingFromConfig=t.eventMappingFromConfig,({shouldApplyDeviceModeTransformation:this.shouldApplyDeviceModeTransformation,propagateEventsUntransformedOnError:this.propagateEventsUntransformedOnError,destinationId:this.destinationId}=null!=r?r:{})}init(){var t;t=this.advertiserId,function(t,e){if(!t.rdt){var r=t.rdt=r.callQueue=[];var n=e.createElement("script");n.src="https://www.redditstatic.com/ads/pixel.js",n.async=!0,n.setAttribute("data-loader","RS_JS_SDK");var o=e.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}(window,document),window.rdt("init",t)}isLoaded(){return!(!window.rdt||window.rdt.advertiserId!==this.advertiserId)}dentify(t){window.rdt("track","SignUp")}track(t){const{event:e}=t.message;if(!e)return void T.error("Event name is required");const r=F(this.eventMappingFromConfig,"from","to",!1);if(r[e]){const t=e,r);t.forEach(()}else switch(e.toLowerCase()){case"product added":window.rdt("track","AddToCart");break;case"product added to wishlist":window.rdt("track","AddToWishlist");break;case"order completed":window.rdt("track","Purchase");break;case"lead":window.rdt("track","Lead");break;case"view content":window.rdt("track","ViewContent");break;case"search":window.rdt("track","Search");break;default:T.error(`Invalid event ${e}. Track call not supported`)}},Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({});
//# sourceMappingURL=RedditPixel.min.js.map
