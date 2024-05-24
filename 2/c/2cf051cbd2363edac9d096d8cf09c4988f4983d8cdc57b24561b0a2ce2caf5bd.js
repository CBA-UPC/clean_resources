/*! For license information please see main.bundle.c57bab28.js.LICENSE.txt */
(()=>{var e,t,i={690:e=>{e.exports=function e(t,i,n){or(var r=void 0,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,i){(function(n,o,r,s,l,a,d,c,u){"use strict";var p=e("crypto");i=t.exports=f).sha1=function(e){return f(e)},i.keys=i.MD5=i.keysMD5=var g=p.getHashes?p.getHashes().slice():["sha1","md5"],h=(g.push("passthrough"),["buffer","hex","binary","base64"]);iteToStream=).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,i){(function(e,t,n,o,r,s,l,a,d){!void 0===i?this.base64js={}:i)}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(e,t,i){(function(t,n,o,r,s,l,a,d,c){var u=e("base64-js"),p=e("ieee754");ction h(e,t,i,n){if(n||(B("boolean"==typeof i,"missing or invalid endian"),B(null!=t,"missing offset"),B(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return 32768&(n=f(e,t,i,!0))?-1*(65535-n+1):n}unction m(e,t,i,n){return n||(B("boolean"==typeof i,"missing or invalid endian"),B(t+3<e.length,"Trying to read beyond buffer length")),p.read(e,t,i,23,4)}ction x(e,t,i,n,o){o||(B(null!=t,"missing value"),B("boolean"==typeof n,"missing or invalid endian"),B(null!=i,"missing offset"),B(i+1<e.length,"Trying to write beyond buffer length"),U(t,32767,-32768)),e.length<=i||w(e,0<=t?t:65535+t+1,i,n,o)}unction $(e,t,i,n,o){o||(B(null!=t,"missing value"),B("boolean"==typeof n,"missing or invalid endian"),B(null!=i,"missing offset"),B(i+3<e.length,"Trying to write beyond buffer length"),z(t,34028234663852886e22,-34028234663852886e22)),e.length<=i||p.write(e,t,i,n,23,4)}.Buffer=o,i.SlowBuffer=o,i.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=),o.isEncoding=o.isBuffer=o.byteLength=o.concat=o.prototype.write=function(e,t,i,n){isFinite(t)?isFinite(i)||(n=i,i=void 0):(d=n,n=t,t=i,i=d),t=Number(t)||0;var r,s,l,a,d=this.length-t;switch((!i||d<(i=Number(i)))&&(i=d),n=String(n||"utf8").toLowerCase()){case"hex":r=this,e,t,i);break;case"utf8":case"utf-8":s=this,l=t,a=i,r=o._charsWritten=O(E(e),s,l,a);break;case"ascii":case"binary":r=this,e,t,i);break;case"base64":s=this,l=t,a=i,r=o._charsWritten=O(k(e),s,l,a);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=function(e,t,i,n){return o._charsWritten=O(t),e,i,n)}(this,e,t,i);break;default:throw new Error("Unknown encoding")}return r},o.prototype.toString=function(e,t,i){var n,o,r,s,l=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(i=void 0!==i?Number(i):l.length)===t)return"";switch(e){case"hex":n=l,t,i);break;case"utf8":case"utf-8":n=l,t,i);break;case"ascii":case"binary":n=l,t,i);break;case"base64":o=l,s=i,n=0===(r=t)&&s===o.length?u.fromByteArray(o):u.fromByteArray(o.slice(r,s));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=l,t,i);break;default:throw new Error("Unknown encoding")}return n},o.prototype.toJSON=o.prototype.copy=o.prototype.slice=o.prototype.get=o.prototype.set=o.prototype.readUInt8=o.prototype.readUInt16LE=function(e,t){return f(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return f(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return g(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return g(this,e,!1,t)},o.prototype.readInt8=o.prototype.readInt16LE=function(e,t){return h(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return h(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return v(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return v(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return m(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return m(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return y(this,e,!0,t)},o.prototype.readDoubleBE=o.prototype.writeUInt8=o.prototype.writeUInt16LE=function(e,t,i){w(this,e,t,!0,i)},o.prototype.writeUInt16BE=function(e,t,i){w(this,e,t,!1,i)},o.prototype.writeUInt32LE=function(e,t,i){b(this,e,t,!0,i)},o.prototype.writeUInt32BE=function(e,t,i){b(this,e,t,!1,i)},o.prototype.writeInt8=o.prototype.writeInt16LE=function(e,t,i){x(this,e,t,!0,i)},o.prototype.writeInt16BE=function(e,t,i){x(this,e,t,!1,i)},o.prototype.writeInt32LE=function(e,t,i){_(this,e,t,!0,i)},o.prototype.writeInt32BE=function(e,t,i){_(this,e,t,!1,i)},o.prototype.writeFloatLE=function(e,t,i){$(this,e,t,!0,i)},o.prototype.writeFloatBE=function(e,t,i){$(this,e,t,!1,i)},o.prototype.writeDoubleLE=function(e,t,i){S(this,e,t,!0,i)},o.prototype.writeDoubleBE=o.prototype.fill=o.prototype.inspect=o.prototype.toArrayBuffer=var A=o.prototype;.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,t,i){(function(i,n,o,r,s,l,a,d,c){o=e("buffer").Buffer;var u=new o(4);u.fill(0),t.exports={hash:function(e,t,i,n){for(var r=t(e=o.isBuffer(e)?e:new o(e),n),8*e.length),s=(t=n,new o(i)),l=t?s.writeInt32BE:s.writeInt32LE,a=0;a<r.length;a++)l.call(s,r[a],4*a,!0);return s}}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(e,t,i){(function(t,n,o,r,s,l,a,d,c){o=e("buffer").Buffer;var u=e("./sha"),p=e("./sha256"),f=e("./rng"),g={sha1:u,sha256:p,md5:e("./md5")},h=64,v=new o(h);fill(0),i.createHash=i.createHmac=m,i.randomBytes=var w,b=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],x=for(w in b)x(b[w])}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,t,i){(function(i,n,o,r,s,l,a,d,c){var u=e("./helpers");on y(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}t.exports=).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,t,i){(function(e,i,n,o,r,s,l,a,d){t.exports=).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(e,t,i){(function(i,n,o,r,s,l,a,d,c){var u=e("./helpers");unction f(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}.exports=function(e){return u.hash(e,p,20,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,t,i){(.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,i){(function(e,t,n,o,r,s,l,a,d){i.read=i.write=).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(e,t,i){(.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)},577:(e,t,i)=>{"use strict";i.d(t,{Z:()=>j});var n=i(81),o=i.n(n),r=i(645),s=i.n(r),l=i(667),a=i.n(l),d=new URL(i(915),i.b),c=new URL(i(215),i.b),u=new URL(i(643),i.b),p=new URL(i(320),i.b),f=new URL(i(930),i.b),g=new URL(i(287),i.b),h=new URL(i(964),i.b),v=new URL(i(223),i.b),m=new URL(i(94),i.b),y=new URL(i(193),i.b),w=new URL(i(913),i.b),b=new URL(i(279),i.b),x=new URL(i(510),i.b),_=new URL(i(702),i.b),$=new URL(i(185),i.b),S=new URL(i(186),i.b),A=s()(o()),C=a()(d),R=a()(c),I=a()(u),T=a()(p),E=a()(f),k=a()(g),O=a()(h),L=a()(v),P=a()(m),U=a()(y),z=a()(w),B=a()(b),M=a()(x),F=a()(_),W=a()($),N=a()(S);A.push([e.id,'@font-face{font-family:"Avenir Book";font-style:normal;font-weight:400;src:url('+C+') format("woff")}@font-face{font-family:"Calibre Regular";font-style:normal;font-weight:400;src:url('+R+') format("woff2")}@font-face{font-family:"CircularStd-Book";font-style:normal;font-weight:450;src:url('+I+') format("woff2")}@font-face{font-family:"CircularXX";font-style:normal;font-weight:500;src:url('+T+') format("woff2")}@font-face{font-family:"Grosa";font-style:normal;font-weight:400;src:url('+E+') format("woff2")}@font-face{font-family:"Grosa";font-style:normal;font-weight:500;src:url('+k+') format("woff2")}@font-face{font-family:"Libre Baskerville";font-style:normal;font-weight:400;src:url('+O+') format("woff2")}@font-face{font-family:"Libre Baskerville";font-style:normal;font-weight:700;src:url('+L+') format("woff2")}@font-face{font-family:"MacysSans";font-style:normal;font-weight:400;src:url('+P+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:300;src:url('+U+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:400;src:url('+z+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:500;src:url('+B+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:600;src:url('+M+') format("woff2")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:700;src:url('+F+') format("woff2")}@font-face{font-family:"Swear Text";font-style:normal;font-weight:400;src:url('+W+') format("woff2")}@font-face{font-family:"Swear Text";font-style:normal;font-weight:700;src:url('+N+') format("woff2")}',""]);const j=A},645:667:81:379:569:216:565:795:589:840:(e,t,i)=>{var n={"./ar":[956,228],"./ar.ts":[956,228],"./da":[27,139],"./da.ts":[27,139],"./de":[849,9],"./de.ts":[849,9],"./en-CA":[754,106],"./en-CA.ts":[754,106],"./en-GB":[113,45],"./en-GB.ts":[113,45],"./es":[324,473],"./es.ts":[324,473],"./fr":[936,360],"./fr-CA":[734,916],"./fr-CA.ts":[734,916],"./fr.ts":[936,360],"./hu":[738,137],"./hu.ts":[738,137],"./is":[780,199],"./is.ts":[780,199],"./it":[345,839],"./it.ts":[345,839],"./ja":[218,463],"./ja.ts":[218,463],"./ko":[725,168],"./ko.ts":[725,168],"./nl":[171,677],"./nl.ts":[171,677],"./pt":[99,517],"./pt.ts":[99,517],"./sv":[285,530],"./sv.ts":[285,530],"./zh-CN":[125,449],"./zh-CN.ts":[125,449]};.keys=o.id=840,e.exports=o},915:(e,t,i)=>{"use strict";e.exports=i.p+"126382d4f80eb3eff470.woff"},215:(e,t,i)=>{"use strict";e.exports=i.p+"static/calibre-regular.e472fdda.woff2"},643:(e,t,i)=>{"use strict";e.exports=i.p+"static/circular-book-450.28c77f3e.woff2"},320:(e,t,i)=>{"use strict";e.exports=i.p+"static/circular-xx-500.056b4626.woff2"},287:(e,t,i)=>{"use strict";e.exports=i.p+"static/Grosa-Medium.5cd0c610.woff2"},930:(e,t,i)=>{"use strict";e.exports=i.p+"static/Grosa-Regular.b92ac017.woff2"},223:(e,t,i)=>{"use strict";e.exports=i.p+"static/libre-baskerville-v14-latin-ext_latin-700.f6b9391f.woff2"},964:(e,t,i)=>{"use strict";e.exports=i.p+"static/libre-baskerville-v14-latin-ext_latin-regular.23649c90.woff2"},94:(e,t,i)=>{"use strict";e.exports=i.p+"static/macys-sans-400.9b0861f6.woff2"},193:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-300.514dfdf9.woff2"},279:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-500.76be2cdf.woff2"},510:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-600.f6d165b6.woff2"},702:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-700.1f256dfe.woff2"},913:(e,t,i)=>{"use strict";e.exports=i.p+"static/montserrat-v15-latin-ext_latin-regular.35b478a9.woff2"},186:(e,t,i)=>{"use strict";e.exports=i.p+"static/swear-text-700.d9f87dd9.woff2"},185:696:(e,t,i)=>{"use strict";i.d(t,{wd:()=>k,AM:()=>C,kI:()=>d,WI:()=>T,Bd:()=>n});const n=(e,...t)=>({strTag:!0,strings:e,values:t}),o=(e,t,i)=>{let n=e[0];for(let o=1;o<e.length;o++)n+=t[i?i[o-1]:o-1],n+=e[o];return n},r=e=>{return"string"!=typeof(t=e)&&"strTag"in t?o(e.strings,e.values):e;var t},s="lit-localize-status";class l{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(s,this.__litLocalizeEventHandler)}const a=d=()=>c=({kind:e,elements:t})=>({kind:e,elements:t,finisher),u=class p{esolve(e){this.settled=!0,this._resolve(e)}const f=[];for(let e=0;e<256;e++)f[e]=(e>>4&15).toString(16)+(15&e).toString(16);const g=new WeakMap,h=new Map;function v(e,t,i){var n;if(e){const r=null!==(n=null==i?void 0:i.id)&&void 0!==n?n:function(e){const t="string"==typeof e?e:e.strings;let i=h.get(t);return void 0===i&&(i=function(e,t){return(t?"h":"s")+function(e){let t=0,i=8997,n=0,o=33826,r=0,s=40164,l=0,a=52210;for(let d=0;d<e.length;d++)i^=e.charCodeAt(d),t=435*i,n=435*o,r=435*s,l=435*a,r+=i<<8,l+=o<<8,n+=t>>>16,i=65535&t,r+=n>>>16,o=65535&n,a=l+(r>>>16)&65535,s=65535&r;return f[a>>8]+f[255&a]+f[s>>8]+f[255&s]+f[o>>8]+f[255&o]+f[i>>8]+f[255&i]}("string"==typeof e?e:e.join(""))}(t,"string"!=typeof e&&!("strTag"in e)),h.set(t,i)),i}(t),s=e[r];if(s){if("string"==typeof s)return s;if("strTag"in s)return o(s.strings,t.values,s.values);{let e=g.get(s);return void 0===e&&(e=s.values,g.set(s,e)),{...s,values:e.map(()}}}}return r(t)}et y,w,b,x,_,$="",S=new p;S.resolve();let A=0;const C=e=>(k((),$=w=e.sourceLocale,b=new Set(e.targetLocales),b.add(e.sourceLocale),x=e.loadLocale,{getLocale:R,setLocale:I}),R=()=>$,I=e=>{if(e===(null!=y?y:$))return S.promise;if(!b||!x)throw new Error("Internal error");if(!b.has(e))throw new Error("Invalid locale code");A++;const t=A;return y=e,S.settled&&(S=new p),m({status:"loading",loadingLocale:e}),(e===w?Promise.resolve({templates:void 0}):x(e)).then((i=>{A===t&&($=e,y=void 0,_=i.templates,m({status:"ready",readyLocale:e}),S.resolve())}),(i=>{A===t&&(m({status:"error",errorLocale:e,errorMessage:i.toString()}),S.reject(i))})),S.promise};let T=r,E=!1;function k(e){if(E)throw new Error("lit-localize can only be configured once");T=e,E=!0}},767:(e,t,i)=>{"use strict";i.d(t,{oi:()=>ne,iv:()=>a,dy:()=>B,YP:()=>M});const n=window,o=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;onst a=d=o?e=>e:var c;const u=window,p=u.trustedTypes,f=p?p.emptyScript:"",g=u.reactiveElementPolyfillSupport,h={toAttributefromAttribute,v=m={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:v};ar w;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:y}),(null!==(c=u.reactiveElementVersions)&&void 0!==c?c:u.reactiveElementVersions=[]).push("1.4.2"),i(954);const b=globalThis.trustedTypes,x=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,$="?"+_,S=`<${$}>`,A=document,C=(e="")=>A.createComment(e),R=e=>null===e||"object"!=typeof e&&"function"!=typeof e,I=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,k=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,L=/'/g,P=/"/g,U=/^(?:script|style|textarea|title)$/i,z=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),B=z(1),M=z(2),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),N=new WeakMap,j=A.createTreeWalker(A,129,null,!1),D=(e,t)=>{const i=e.length-1,n=[];let o,r=2===t?"<svg>":"",s=T;for(let t=0;t<i;t++){const i=e[t];let l,a,d=-1,c=0;for(;c<i.length&&(s.lastIndex=c,a=s.exec(i),null!==a);)c=s.lastIndex,s===T?"!--"===a[1]?s=E:void 0!==a[1]?s=k:void 0!==a[2]?(U.test(a[2])&&(o=RegExp("</"+a[2],"g")),s=O):void 0!==a[3]&&(s=O):s===O?">"===a[0]?(s=null!=o?o:T,d=-1):void 0===a[1]?d=-2:(d=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?O:'"'===a[3]?P:L):s===P||s===L?s=O:s===E||s===k?s=T:(s=O,o=void 0);const u=s===O&&e[t+1].startsWith("/>")?" ":"";r+=s===T?i+S:d>=0?(n.push(l),i.slice(0,d)+"$lit$"+i.slice(d)+_+u):i+_+(-2===d?(n.push(void 0),t):u)}const l=r+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(l):l,n]};class G{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,r=0;const s=e.length-1,l=this.parts,[a,d]=D(e,t);if(this.el=G.createElement(a,i),j.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=j.nextNode())&&l.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(_)){const i=d[r++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+"$lit$").split(_),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?J:"?"===t[1]?Y:"@"===t[1]?X:q})}else l.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(U.test(n.tagName)){const e=n.textContent.split(_),t=e.length-1;if(t>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],C()),j.nextNode(),l.push({type:2,index:++o});n.append(e[t],C())}}}else if(8===n.nodeType)if(n.data===$)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(_,e+1));)l.push({type:7,index:o}),e+=_.length-1}o++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function H(e,t,i=e,n){var o,r,s,l;if(t===F)return t;let a=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const d=R(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===d?a=void 0:(a=new d(e),a._$AT(e,i,n)),void 0!==n?(null!==(s=(l=i)._$Cl)&&void 0!==s?s:l._$Cl=[])[n]=a:i._$Cu=a),void 0!==a&&(t=H(e,a._$AS(e,t.values),a,n)),t}class V{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:n}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:A).importNode(i,!0);j.currentNode=o;let r=j.nextNode(),s=0,l=0,a=n[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new K(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new Q(r,this,e)),this.v.push(t),a=n[++l]}s!==(null==a?void 0:a.index)&&(r=j.nextNode(),s++)}return o}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}lass q{constructor(e,t,i,n,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const o=this.strings;let r=!1;if(void 0===o)e=H(this,e,t,0),r=!R(e)||e!==this._$AH&&e!==F,r&&(this._$AH=e);else{const n=e;let s,l;for(e=o[0],s=0;s<o.length-1;s++)l=H(this,n[i+s],t,s),l===F&&(l=this._$AH[s]),r||(r=!R(l)||l!==this._$AH[s]),l===W?e=W:e!==W&&(e+=(null!=l?l:"")+o[s+1]),this._$AH[s]=l}r&&!n&&this.C(e)}C(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class J extends q{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===W?void 0:e}}const Z=b?b.emptyScript:"";class Y extends q{constructor(){super(...arguments),this.type=4}C(e){e&&e!==W?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class X extends q{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=H(this,e,t,0))&&void 0!==i?i:W)===F)return;const n=this._$AH,o=e===W&&n!==W||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==W&&(n===W||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class Q{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const ee=window.litHtmlPolyfillSupport;var te,ie;null==ee||ee(G,K),(null!==(w=globalThis.litHtmlVersions)&&void 0!==w?w:globalThis.litHtmlVersions=[]).push("2.2.2");e.finalized=!0,ne._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:ne});const oe=globalThis.litElementPolyfillSupport;null==oe||oe({LitElement:ne}),(null!==(ie=globalThis.litElementVersions)&&void 0!==ie?ie:globalThis.litElementVersions=[]).push("3.2.0")},954:(e,t,i)=>{"use strict";var n;i.d(t,{Jb:()=>_});const o=window,r=o.trustedTypes,s=r?r.createPolicy("lit-html",{createHTML:):void 0,l=`lit$${(Math.random()+"").slice(9)}$`,a="?"+l,d=`<${a}>`,c=document,u=p=f=Array.isArray,g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,h=/-->/g,v=/>/g,m=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),y=/'/g,w=/"/g,b=/^(?:script|style|textarea|title)$/i,x=_=(x(1),x(2),Symbol.for("lit-noChange")),$=Symbol.for("lit-nothing"),S=new WeakMap,A=c.createTreeWalker(c,129,null,!1),C=L=r?r.emptyScript:"";st B=o.litHtmlPolyfillSupport;null==B||B(R,E),(null!==(n=o.litHtmlVersions)&&void 0!==n?n:o.litHtmlVersions=[]).push("2.4.0")}},n={};.m=i,o.n=o.d=o.f={},o.e=o.u=o.g=),o.o=e={},t="tfp-widgets:",o.l=o.r=((),((),(()=>{"use strict";var e=o(767);const t=i=r s;null===(s=window.HTMLSlotElement)||void 0===s||s.prototype.assignedElements;var l=o(954);const a=(d=class extends var d,c=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let u=class extends e.oi{render(){const{widgetTheme:t="standard",noRegFromWidget:i}=this;return i?e.dy``:e.dy`<span
          class="${a({link:!0,[t]:!0})}"
          ><slot></slot
        ></span>`}};u.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .link {
      text-decoration: underline;
      display: inline-block;
      color: var(--cta-text-color);
      text-transform: var(--cta-text-transform);
    }
    .link.button {
      text-decoration: none;
      display: inline;
      color: var(--button-text-color);
      line-height: 1.25em;
    }
    .link.slim {
      vertical-align: middle;
    }
  `,c([n()],u.prototype,"widgetTheme",void 0),c([n()],u.prototype,"noRegFromWidget",void 0),u=c([t("cta-link")],u);let p=class extends e.oi{;p.styles=e.iv`
    svg {
      display: block;
    }
  `,p=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}([t("t-logo")],p);var f=o(696);const g=var h,v,m;!h||(h={})),v||(v={})),m||(m={}));var y=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let w=class extends e.oi{render(){const{ugDetails:t,vAlignMiddle:i=!0,scale:n=!1}=this,o=a({"ug-text":!0,middle:i,scale:n});return e.dy`${g(null==t?void 0:t.guidance,[[h.RunsOneSizeStepSmall,()=>{var t,i,n;return e.dy`<span class="${o}"
              >${null!==(n=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsOneSizeStepSmall)&&void 0!==n?n:(0,f.WI)("Fit: Runs Small")}</span
            >`}],[h.MayRunOneSizeStepSmall,()=>{var t,i,n;return e.dy`<span class="${o}"
              >${null!==(n=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.mayRunOneSizeStepSmall)&&void 0!==n?n:(0,f.WI)("Fit: Slightly Small")}</span
            >`}],[h.RunsTrueToSizeSmall,()=>{var t,i,n;return e.dy`<span class="${o}"
              >${null!==(n=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsTrueToSizeSmall)&&void 0!==n?n:(0,f.WI)("Fit: True To Size")}</span
            >`}],[h.RunsTrueToSize,()=>{var t,i,n;return e.dy`<span class="${o}"
              >${null!==(n=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsTrueToSize)&&void 0!==n?n:(0,f.WI)("Fit: True To Size")}</span
            >`}],[h.RunsTrueToSizeLarge,()=>{var t,i,n;return e.dy`<span class="${o}"
              >${null!==(n=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsTrueToSizeLarge)&&void 0!==n?n:(0,f.WI)("Fit: True To Size")}</span
            >`}],[h.MayRunOneSizeStepLarge,()=>{var t,i,n;return e.dy`<span class="${o}"
              >${null!==(n=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.mayRunOneSizeStepLarge)&&void 0!==n?n:(0,f.WI)("Fit: Slightly Big")}</span
            >`}],[h.RunsOneSizeStepLarge,()=>{var t,i,n;return e.dy`<span class="${o}"
              >${null!==(n=null===(i=null===(t=this.configs)||void 0===t?void 0:t.messageOverrides)||void 0===i?void 0:i.runsOneSizeStepLarge)&&void 0!==n?n:(0,f.WI)("Fit: Runs Big")}</span
            =>null))}`}};function b(){const e=document.body.dir;return(null==e?void 0:e.length)?e:"ltr"}w.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .ug-text {
      font-weight: 600;
      text-transform: uppercase;
    }
    .ug-text.scale {
      font-weight: var(--ug-scale-ug-text-font-weight);
      text-transform: var(--ug-scale-ug-text-text-transform);
    }
    .ug-text.middle {
      vertical-align: middle;
    }
  `,y([n({type:Object})],w.prototype,"ugDetails",void 0),y([n()],w.prototype,"vAlignMiddle",void 0),y([n()],w.prototype,"scale",void 0),y([n()],w.prototype,"configs",void 0),w=y([(0,f.kI)(),t("ug-text")],w);const{setLocale:x,getLocale:_}=(0,f.AM)({sourceLocale:"en",targetLocales:["ar","da","de","en-CA","en-GB","es","fr","fr-CA","hu","is","it","ja","ko","nl","pt","sv","zh-CN"],load${e}`)}),$=x,S=_;var A=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let C=class extends e.oi{render(){const t=this.ugDetails,i=this.ugScaleStyle,n=this.ugDisplayText,o=this.ugScalePosition;if(!t||!i||!o||void 0===n)return e.dy``;const r=S(),s=["da","fr","hu","it","ja","nl","pt","sv"].includes(r);return e.dy`<div class="scale-wrapper"><div class="scale-svg-wrapper ${i}"><span class="scale-label-small ${i}">${(0,f.WI)("Small",{desc:"A label at the small end of a scale that ranges from small to big. This scale represents how an item fits (small, slightly small, true to size, slightly big or big)."})}</span><div class=${a({"scale-recommendation":!0,[t.guidance]:!0,[i]:!0,"long-translation":s})}><ug-text .ugDetails="${t}" .scale="${!0}" .vAlignMiddle="${!1}"></ug-text></div><div class="svg-wrapper ${i} ${o} ${b()}">${D[t.guidance][i]}</div><span class="scale-label-big ${i}">${(0,f.WI)("Big",{desc:"A label at the big end of a scale that ranges from small to big. This scale represents how an item fits (small, slightly small, true to size, slightly big or big)."})}</span></span></div></div><ug-text .ugDetails="${t}" class=${a({"text-replacement":!0,"text-hidden":!n})}></ug-text>`}};C.styles=e.iv`
    .text-replacement {
      display: none;
    }

    @media (max-width: 169px) {
      .scale-wrapper {
        display: none;
      }

      .text-replacement.text-hidden {
        display: inline-block;
      }
    }

    .scale-svg-wrapper {
      display: grid;
      align-items: center;
      grid-template-columns: auto 1fr;
      gap: 3px;
    }

    .scale-svg-wrapper.BarWithUgText {
      align-items: end;
    }

    .scale-recommendation {
      font-size: var(--ug-scale-ug-text-font-size);
      width: 100%;
      margin-bottom: 3px;
    }

    .scale-recommendation.Gradient {
      display: none;
    }

    .scale-recommendation.RunsTrueToSizeSmall,
    .scale-recommendation.RunsTrueToSize,
    .scale-recommendation.RunsTrueToSizeLarge {
      grid-column-start: 2;
      grid-row-start: 1;
      text-align: center;
    }

    .scale-recommendation.RunsTrueToSizeSmall.long-translation,
    .scale-recommendation.RunsTrueToSize.long-translation,
    .scale-recommendation.RunsTrueToSizeLarge.long-translation {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    .scale-recommendation.RunsOneSizeStepSmall,
    .scale-recommendation.MayRunOneSizeStepSmall {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      text-align: left;
    }

    .scale-recommendation.RunsOneSizeStepLarge,
    .scale-recommendation.MayRunOneSizeStepLarge {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      text-align: right;
    }

    .svg-wrapper {
      display: grid;
      width: 100%;
      grid-row-start: 2;
      grid-column-start: 2;
    }

    .svg-wrapper.rtl svg {
      transform: scaleX(-1);
    }

    .svg-wrapper.BarWithUgText.above {
      max-width: 118px;
    }

    .svg-wrapper.Gradient.above,
    .svg-wrapper.GradientWithUgText.above {
      max-width: 156px;
    }

    .svg-wrapper.MinimalWithUgText.above {
      max-width: 124px;
    }

    svg {
      width: 100%;
    }

    svg.Gradient,
    svg.GradientWithUgText {
      height: 10px;
    }

    svg.MinimalWithUgText {
      height: 11px;
    }

    svg.BarWithUgText {
      height: 16px;
    }

    .scale-label-small,
    .scale-label-big {
      font-size: var(--ug-scale-label-font-size);
      flex-shrink: 0;
      text-transform: var(--ug-scale-label-text-transform);
      color: var(--ug-scale-label-text-color);
    }

    .scale-label-small {
      grid-column-start: 1;
      grid-row-start: 2;
    }

    .scale-label-big {
      grid-column-start: 3;
      grid-row-start: 2;
      justify-self: end;
    }
  `,A([n({type:Object})],C.prototype,"ugDetails",void 0),A([n()],C.prototype,"ugScaleStyle",void 0),A([n()],C.prototype,"ugScalePosition",void 0),A([n()],C.prototype,"ugDisplayText",void 0),C=A([(0,f.kI)(),t("ug-scale")],C);const R=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#rosss_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="6.5"
    y1="0.5"
    x2="6.5"
    y2="9.5"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="rosss_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.705148" stop-color="var(--ug-scale-background-color)" />
      <stop offset="1" stop-color="var(--ug-scale-gradient-color)" />
    </linearGradient>
  </defs>
</svg>`,I=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8 -4.37115e-08C8.55228 -1.95703e-08 9 0.447715 9 1L9 10C9 10.5523 8.55228 11 8 11C7.44771 11 7 10.5523 7 10L7 1C7 0.447715 7.44772 -6.78527e-08 8 -4.37115e-08Z"
    fill="black"
  />
</svg> `,T=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.895431 2 2 2H5.9067C6.44592 2 6.96228 2.21772 7.3387 2.6038L15.068 10.5313C15.8529 11.3363 17.1471 11.3363 17.932 10.5313L25.6613 2.6038C26.0377 2.21772 26.5541 2 27.0933 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M16.5 7L9.13878 0.249999L23.8612 0.25L16.5 7Z" fill="black" />
</svg> `,E=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#mrosss_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="40.5"
    y1="0.5"
    x2="40.5"
    y2="9.5"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="mrosss_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.539119" stop-color="var(--ug-scale-background-color)" />
      <stop offset="0.735372" stop-color="var(--ug-scale-gradient-color)" />
      <stop offset="0.931626" stop-color="var(--ug-scale-background-color)" />
    </linearGradient>
  </defs>
</svg>`,k=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M32 -4.37115e-08C32.5523 -1.95703e-08 33 0.447715 33 1L33 10C33 10.5523 32.5523 11 32 11C31.4477 11 31 10.5523 31 10L31 1C31 0.447715 31.4477 -6.78527e-08 32 -4.37115e-08Z"
    fill="black"
  />
</svg> `,O=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.89543 2 2 2H25.9067C26.4459 2 26.9623 2.21772 27.3387 2.6038L35.068 10.5313C35.8529 11.3363 37.1471 11.3363 37.932 10.5313L45.6613 2.6038C46.0377 2.21772 46.5541 2 47.0933 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M36.5 7L29.1388 0.249999L43.8612 0.25L36.5 7Z" fill="black" />
</svg> `,L=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#rtts_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="77.5"
    y1="0.5"
    x2="77.5"
    y2="9.5"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="rtts_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.239583" stop-color="var(--ug-scale-background-color)" />
      <stop offset="0.493504" stop-color="var(--ug-scale-gradient-color)" />
      <stop offset="0.75" stop-color="var(--ug-scale-background-color)" />
    </linearGradient>
  </defs>
</svg>`,P=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M62 -4.37115e-08C62.5523 -1.95703e-08 63 0.447715 63 1L63 10C63 10.5523 62.5523 11 62 11C61.4477 11 61 10.5523 61 10L61 1C61 0.447715 61.4477 -6.78527e-08 62 -4.37115e-08Z"
    fill="black"
  />
</svg> `,U=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.895431 2 2 2H47.9067C48.4459 2 48.9623 2.21772 49.3387 2.6038L57.068 10.5313C57.8529 11.3363 59.1471 11.3363 59.932 10.5313L67.6613 2.6038C68.0377 2.21772 68.5541 2 69.0933 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M58.5 7L51.1388 0.249999L65.8612 0.25L58.5 7Z" fill="black" />
</svg> `,z=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#mrossl_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="119.5"
    y1="0.5"
    x2="119.5"
    y2="9.5"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="mrossl_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.0474811" stop-color="var(--ug-scale-background-color)" />
      <stop offset="0.236466" stop-color="var(--ug-scale-gradient-color)" />
      <stop offset="0.425451" stop-color="var(--ug-scale-background-color)" />
    </linearGradient>
  </defs>
</svg>`,B=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M92 -4.37115e-08C92.5523 -1.95703e-08 93 0.447715 93 1L93 10C93 10.5523 92.5523 11 92 11C91.4477 11 91 10.5523 91 10L91 1C91 0.447715 91.4477 -6.78527e-08 92 -4.37115e-08Z"
    fill="black"
  />
</svg> `,M=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.895431 2 2 2H70.9067C71.4459 2 71.9623 2.21772 72.3387 2.6038L80.068 10.5313C80.8529 11.3363 82.1471 11.3363 82.932 10.5313L90.6613 2.6038C91.0377 2.21772 91.5541 2 92.0933 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M81.5 7L74.1388 0.249999L88.8612 0.25L81.5 7Z" fill="black" />
</svg> `,F=e.dy`<svg
  viewBox="0 0 156 10"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="Gradient"
>
  <line
    x1="1"
    y1="5"
    x2="155"
    y2="5"
    stroke="url(#rossl_gradient)"
    stroke-width="2"
    stroke-linecap="square"
  />
  <line
    x1="149.5"
    y1="1.09278e-07"
    x2="149.5"
    y2="9"
    stroke="var(--ug-scale-indicator-color)"
    stroke-width="5"
  />
  <defs>
    <linearGradient
      id="rossl_gradient"
      x1="156"
      y1="6"
      x2="0"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-color="var(--ug-scale-gradient-color)" />
      <stop offset="0.221132" stop-color="var(--ug-scale-background-color)" />
    </linearGradient>
  </defs>
</svg>`,W=e.dy`<svg
  class="MinimalWithUgText"
  viewBox="0 0 124 11"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line y1="5.5" x2="124" y2="5.5" stroke="black" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M116 -4.37115e-08C116.552 -1.95703e-08 117 0.447715 117 1L117 10C117 10.5523 116.552 11 116 11C115.448 11 115 10.5523 115 10L115 1C115 0.447715 115.448 -6.78527e-08 116 -4.37115e-08Z"
    fill="black"
  />
</svg> `,N=e.dy`<svg
  class="BarWithUgText"
  viewBox="0 0 118 16"
  preserveAspectRatio="none"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 4C0 2.89543 0.895431 2 2 2H90.9067C91.4459 2 91.9623 2.21772 92.3387 2.6038L100.068 10.5313C100.853 11.3363 102.147 11.3363 102.932 10.5313L110.661 2.6038C111.038 2.21772 111.554 2 112.093 2H116C117.105 2 118 2.89543 118 4V14C118 15.1046 117.105 16 116 16H2C0.895433 16 0 15.1046 0 14V4Z"
    fill="#F3F3F3"
  />
  <path d="M101.5 7L94.1388 0.249999L108.861 0.25L101.5 7Z" fill="black" />
</svg> `;var j;!function(e){e.Gradient="Gradient",e.GradientWithUgText="GradientWithUgText",e.MinimalWithUgText="MinimalWithUgText",e.BarWithUgText="BarWithUgText"}(j||(j={}));const D={[h.RunsOneSizeStepSmall]:{[j.Gradient]:R,[j.GradientWithUgText]:R,[j.MinimalWithUgText]:I,[j.BarWithUgText]:T},[h.MayRunOneSizeStepSmall]:{[j.Gradient]:E,[j.GradientWithUgText]:E,[j.MinimalWithUgText]:k,[j.BarWithUgText]:O},[h.RunsTrueToSizeSmall]:{[j.Gradient]:L,[j.GradientWithUgText]:L,[j.MinimalWithUgText]:P,[j.BarWithUgText]:U},[h.RunsTrueToSize]:{[j.Gradient]:L,[j.GradientWithUgText]:L,[j.MinimalWithUgText]:P,[j.BarWithUgText]:U},[h.RunsTrueToSizeLarge]:{[j.Gradient]:L,[j.GradientWithUgText]:L,[j.MinimalWithUgText]:P,[j.BarWithUgText]:U},[h.MayRunOneSizeStepLarge]:{[j.Gradient]:z,[j.GradientWithUgText]:z,[j.MinimalWithUgText]:B,[j.BarWithUgText]:M},[h.RunsOneSizeStepLarge]:{[j.Gradient]:F,[j.GradientWithUgText]:F,[j.MinimalWithUgText]:W,[j.BarWithUgText]:N}};function G(e,t){return t&&(null==e?void 0:e.replace(/sizePlaceholder/g,t))}function H({alias:e,aliasedMessage:t,aliasedFallback:i,unaliasedMessage:n,unaliasedFallback:o}){var r;return e?null!==(r=function(e,t){return t&&(null==e?void 0:e.replace(/aliasPlaceholder/g,t))}(t,e))&&void 0!==r?r:i:null!=n?n:o}const V=(e,t,i)=>{var n,o;const r=null!==(n=i===m.IncompleteProfile?null==t?void 0:t.incompleteProfileCtaMessageWithNameOverride:void 0)&&void 0!==n?n:null==t?void 0:t.ctaMessageWithNameOverride,s=null!==(o=i===m.IncompleteProfile?null==t?void 0:t.incompleteProfileCtaMessageOverride:void 0)&&void 0!==o?o:null==t?void 0:t.ctaMessageOverride;return H({alias:e,aliasedMessage:r,aliasedFallback:(0,f.WI)(f.Bd`What's ${e}'s Size?`),unaliasedMessage:s,unaliasedFallback:(0,f.WI)("What's My Size?")})},K=(t,i,n)=>H({alias:i,aliasedMessage:G(null==n?void 0:n.hwRecMessageWithNameOverride,t),aliasedFallback:(0,f.WI)(e.dy`True Fit shoppers similar to ${i} buy & keep size ${t}.`),unaliasedMessage:G(null==n?void 0:n.hwRecMessageOverride,t),unaliasedFallback:(0,f.WI)(e.dy`True Fit shoppers similar to you buy & keep size ${t}.`)});function q(t,i){var n,o,r,s,l,d;const c=null==i?void 0:i.universalGuidance,u="button"===(null==t?void 0:t.theme)?Object.assign({displayScale:!1},null===(n=null==t?void 0:t.button)||void 0===n?void 0:n.univGuidance):null==t?void 0:t.univGuidance,p=!1!==(null==u?void 0:u.displayScale);if(!c||!p)return;const f=(null===(r=null===(o=null==t?void 0:t.univGuidance)||void 0===o?void 0:o.scale)||void 0===r?void 0:r.style)||"Gradient",g=!1===(null===(s=null==t?void 0:t.univGuidance)||void 0===s?void 0:s.displayText),h=(null===(d=null===(l=null==t?void 0:t.univGuidance)||void 0===l?void 0:l.scale)||void 0===d?void 0:d.position)||"above";return e.dy`<ug-scale
    .ugDetails=${c}
    .ugScaleStyle=${f}
    .ugDisplayText=${!g}
    .ugScalePosition=${h}
    aria-hidden="true"
    class=${a({[h]:!0,"text-displayed":!g})}
  ></ug-scale>`}var J=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Z=class extends e.oi{render(){return e.dy`<div class="product-widget-wrapper">
      <div class="wrapper-first-row">
        ${this.withSlotBeforeButton?e.dy`<span><slot name="beforeButton"></slot></span>`:null}${this.noRegFromWidget?e.dy``:e.dy`<span class="button-wrapper"
              ><t-logo></t-logo><slot name="afterLogo"></slot
            ></span>`}
      </div>
      <div>
        ${this.withSlotAfterButton?e.dy`<slot name="afterButton"></slot>`:null}
      </div>
    </div>`}};Z.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .product-widget-wrapper {
      display: grid;
      grid-row-gap: 0.333em;
    }
    .product-widget-wrapper .button-wrapper {
      background: var(--button-background-color);
      border: 1px solid #ddd;
      border-color: var(--button-border-color);
      border-radius: var(--button-border-radius);
      box-shadow: var(--button-box-shadow);
      display: flex;
      align-items: center;
      padding: 10px 15px;
    }
    .product-widget-wrapper t-logo {
      display: block;
      vertical-align: middle;
      margin-inline-end: 0.417em;
      -webkit-margin-end: 0.417em;
      width: var(--t-logo-size-button);
    }

    .product-widget-wrapper .wrapper-first-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.333em 0.833em;
    }
  `,J([n()],Z.prototype,"withSlotBeforeButton",void 0),J([n()],Z.prototype,"withSlotAfterButton",void 0),J([n()],Z.prototype,"noRegFromWidget",void 0),Z=J([t("button-product-widget-wrapper")],Z);let Y=class extends e.oi{render(){var t,i,n,o;const r=this.widgetResult;if(!r)return e.dy``;const s=this.noRegFromWidget,l=this.recipientAlias,a=null==r?void 0:r.universalGuidance,d=null==r?void 0:r.heightWeightRecSizeName,c="button",u=!1===(null===(i=null===(t=this.widgetConfigs)||void 0===t?void 0:t.univGuidance)||void 0===i?void 0:i.displayText),p=!!a&&!u,f=null===(o=null===(n=this.widgetConfigs)||void 0===n?void 0:n.univGuidance)||void 0===o?void 0:o.ugText;return e.dy`${q(this.widgetConfigs,this.widgetResult)}
    ${g(r.status,[[m.NoUser,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${p}
            .noRegFromWidget=${s}
          >
            ${p&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${a}"
              .configs=${f}
            ></ug-text>`}
            <cta-link
              slot="afterLogo"
              data-element-id="nouser-cta"
              .widgetTheme="${c}"
              >${V(l,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
          </button-product-widget-wrapper>`],[m.IncompleteProfile,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${p}
            .withSlotAfterButton=${!!d}
            .noRegFromWidget=${s}
          >
            <cta-link
              slot="afterLogo"
              data-element-id="incompleteprofile-cta"
              .widgetTheme="${c}"
              >${V(l,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
            ${p&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${a}"
              .configs=${f}
            ></ug-text>`}
            ${d&&e.dy`<span class="middle" slot="afterButton">
              ${K(d,l,this.widgetConfigs)}
            </span>`}
          </button-product-widget-wrapper>`],[m.InvalidDepartment,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${p}
            .noRegFromWidget=${s}
          >
            ${p&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${a}"
              .configs=${f}
            ></ug-text>`}
            <cta-link
              slot="afterLogo"
              data-element-id="invaliddepartment-cta"
              .widgetTheme="${c}"
              >${V(l,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
          </button-product-widget-wrapper>`],[m.SizeNotAvailable,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${p}
            .noRegFromWidget=${s}
          >
            ${p&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${a}"
              .configs=${f}
            ></ug-text>`}
            <cta-link
              slot="afterLogo"
              data-element-id="sizenotavailable-cta"
              .widgetTheme="${c}"
              >${V(l,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
          </button-product-widget-wrapper>`],[m.UnrecommendableDepartment,()=>e.dy` <button-product-widget-wrapper
            .withSlotBeforeButton=${p}
          >
            ${p&&e.dy`<ug-text
              slot="beforeButton"
              .ugDetails="${a}"
              .configs=${f}
            ></ug-text>`}
            <cta-link
              slot="afterLogo"
              data-element-id="unrecommendabledepartment-cta"
              .widgetTheme="${c}"
              >${V(void 0,this.widgetConfigs,null==r?void 0:r.status)}</cta-link
            >
          </button-product-widget-wrapper>`]])}`}};Y.styles=e.iv`
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 7px;
      column-gap: var(--ug-scale-horizontal-spacing);
    }

    @media (max-width: 169px) {
      ug-scale.text-displayed {
        display: none;
      }
    }

    ug-scale.start {
      flex: 1 0 160px;
      max-width: 180px;
    }

    /* This is for the middle-aligned to components at this level. */
    /* The other components may be middle-aligned in a deeper-level component instead. */
    .middle {
      vertical-align: middle;
    }
  `,J([n({type:Object})],Y.prototype,"widgetResult",void 0),J([n({type:Object})],Y.prototype,"widgetConfigs",void 0),J([n()],Y.prototype,"recipientAlias",void 0),J([n()],Y.prototype,"noRegFromWidget",void 0),Y=J([(0,f.kI)(),t("button-product-widget")],Y);var X=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Q=class extends e.oi{render(){const{size:t,vAlignMiddle:i=!0,showRecommendationUnderline:n=!1}=this;return t?e.dy`<span
      data-element-id="recommended-size"
      class=${a({"size-rec":!0,middle:i,"recommendation-underline":n})}
      >${(0,f.WI)(f.Bd`Size: ${t}`)}</span
    >`:e.dy``}};Q.styles=e.iv`
    :host {
      font-family: inherit;
      text-transform: uppercase;
      font-weight: 600;
    }

    .size-rec.middle {
      vertical-align: middle;
    }

    .size-rec.recommendation-underline {
      text-decoration: underline;
    }
  `,X([n({type:String})],Q.prototype,"size",void 0),X([n()],Q.prototype,"vAlignMiddle",void 0),X([n()],Q.prototype,"showRecommendationUnderline",void 0),Q=X([(0,f.kI)(),t("size-rec")],Q);var ee=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let te=class extends e.oi{render(){var t,i,n;const{vAlignMiddle:o=!0}=this,{taglineMessageOverride:r,incompleteProfileTaglineMessageOverride:s}=null!==(t=this.widgetConfigs)&&void 0!==t?t:{};return e.dy`<span
      class="${a({tagline:!0,middle:o})}"
      >${null!==(n=null!==(i=this.fitRecStatus===m.IncompleteProfile?s:void 0)&&void 0!==i?i:r)&&void 0!==n?n:(0,f.WI)("When you can't try it on.")}</span
    >`}};te.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .tagline.middle {
      vertical-align: middle;
    }
  `,ee([n()],te.prototype,"vAlignMiddle",void 0),ee([n()],te.prototype,"widgetConfigs",void 0),ee([n()],te.prototype,"fitRecStatus",void 0),te=ee([(0,f.kI)(),t("tagline-text")],te);const ie=(e,t)=>H({alias:e,aliasedMessage:null==t?void 0:t.successRecMessageWithNameOverride,aliasedFallback:(0,f.WI)(f.Bd`${e}'s Recommendation`),unaliasedMessage:null==t?void 0:t.successRecMessageOverride,unaliasedFallback:(0,f.WI)("Your Recommendation")});var ne=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let oe=class extends e.oi{render(){return e.dy`<div class="product-widget-wrapper">
      ${this.hideLogo?e.dy``:e.dy`<div>
            <span class="logo-and-first-wrapper"
              ><t-logo></t-logo><slot name="afterLogo-row1-col1"></slot
            ></span>
            <slot name="afterLogo-row1-col2"></slot>
          </div>`}
      <div
        class=${a({"after-logo-row-2":!0,"with-margin-top":!!this.withGapAboveSecondRow})}
      >
        <slot name="afterLogo-row2-col1"></slot>
      </div>
    </div>`}};oe.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .product-widget-wrapper {
      display: inline-flex;
      flex-wrap: wrap;
      column-gap: 0.3em;
      align-items: center;
      vertical-align: middle;
    }
    .product-widget-wrapper .logo-and-first-wrapper {
      display: inline-block;
    }
    .product-widget-wrapper t-logo {
      display: inline-block;
      vertical-align: middle;
      margin-inline-end: 0.3em;
      -webkit-margin-end: 0.3em;
      width: var(--t-logo-size-slim);
    }
    .product-widget-wrapper .after-logo-row-2.with-margin-top {
      margin-top: 0.66667em;
    }
  `,ne([n()],oe.prototype,"withGapAboveSecondRow",void 0),ne([n()],oe.prototype,"hideLogo",void 0),oe=ne([t("slim-product-widget-wrapper")],oe);let re=class extends e.oi{render(){var t,i,n,o,r,s,l,d,c;const u=this.widgetResult;if(!u)return e.dy``;const p=this.noRegFromWidget,h=this.recipientAlias,v=null==u?void 0:u.universalGuidance,y=null==u?void 0:u.heightWeightRecSizeName,w=null===(t=this.widgetConfigs)||void 0===t?void 0:t.theme,b=(e=>{var t;return"excluded"===(null===(t=null==e?void 0:e.slimThemeTagline)||void 0===t?void 0:t.toLowerCase())})(this.widgetConfigs),x=!v&&!b&&!p,_=!1===(null===(n=null===(i=this.widgetConfigs)||void 0===i?void 0:i.univGuidance)||void 0===n?void 0:n.displayText),$=!0===(null===(o=this.widgetConfigs)||void 0===o?void 0:o.recommendationUnderline),S=(null===(l=null===(s=null===(r=this.widgetConfigs)||void 0===r?void 0:r.univGuidance)||void 0===s?void 0:s.scale)||void 0===l?void 0:l.position)||"above",A=null===(c=null===(d=this.widgetConfigs)||void 0===d?void 0:d.univGuidance)||void 0===c?void 0:c.ugText;return e.dy`${g(u.status,[[m.NoUser,()=>{let t=null,i="afterLogo-row1-col1";return v&&!_?(i="afterLogo-row1-col2",t=e.dy`<ug-text
              slot="afterLogo-row1-col1"
              .ugDetails=${v}
              .configs=${A}
            ></ug-text>`):x&&(i="afterLogo-row1-col2",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==u?void 0:u.status}
            ></tagline-text>`),e.dy`${q(this.widgetConfigs,this.widgetResult)}
            <slim-product-widget-wrapper>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="nouser-cta"
                .widgetTheme="${w}"
                .noRegFromWidget=${p}
                >${V(h,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
              >
            </slim-product-widget-wrapper>`}],[m.IncompleteProfile,()=>{let t=null,i=null,n=null,o=null;v||y?v&&!y?_?n="afterLogo-row1-col1":(o="afterLogo-row1-col1",n="afterLogo-row1-col2"):!v&&y?(n="afterLogo-row1-col1",i="afterLogo-row2-col1"):v&&y&&(_?n="afterLogo-row1-col1":(o="afterLogo-row1-col1",n="afterLogo-row1-col2"),i="afterLogo-row2-col1"):(t="afterLogo-row1-col1",n="afterLogo-row1-col2");const r=x&&t?e.dy`<tagline-text
                  slot=${t}
                  .widgetConfigs=${this.widgetConfigs}
                  .fitRecStatus=${null==u?void 0:u.status}
                ></tagline-text>`:null,s=(o&&v?e.dy`<ug-text
                  slot=${o}
                  .ugDetails=${v}
                  .configs=${A}
                ></ug-text>`:null)||r,l=i&&y?e.dy`<span
                  class="hw-rec middle ${S}"
                  slot=${i}
                  >${K(y,h,this.widgetConfigs)}</span
                >`:null;return e.dy`${q(this.widgetConfigs,this.widgetResult)}
            <slim-product-widget-wrapper
              .withGapAboveSecondRow=${!!y}
              .hideLogo=${!s&&p}
            >
              ${s}
              <cta-link
                slot="${n}"
                data-element-id="incompleteprofile-cta"
                .widgetTheme="${w}"
                .noRegFromWidget=${p}
                >${V(h,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
              >
              ${l}
            </slim-product-widget-wrapper> `}],[m.InvalidDepartment,()=>{let t=null,i="afterLogo-row1-col1";return v&&!_?(i="afterLogo-row1-col2",t=e.dy`<ug-text
              slot="afterLogo-row1-col1"
              .ugDetails=${v}
              .configs=${A}
            ></ug-text>`):x&&(i="afterLogo-row1-col2",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==u?void 0:u.status}
            ></tagline-text>`),e.dy`${q(this.widgetConfigs,this.widgetResult)}
            <slim-product-widget-wrapper>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="invaliddepartment-cta"
                .widgetTheme="${w}"
                .noRegFromWidget=${p}
                >${V(h,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
              >
            </slim-product-widget-wrapper>`}],[m.Success,()=>e.dy`<div
            class=${a({"recommendation-underline":$})}
          >
            <slim-product-widget-wrapper data-element-id="success-widget">
              <size-rec
                slot="afterLogo-row1-col1"
                .size="${null==u?void 0:u.size}"
              ></size-rec>
              <span slot="afterLogo-row1-col2" class="middle"
                >${ie(h,this.widgetConfigs)}</span
              >
            </slim-product-widget-wrapper>
          </div>`],[m.EstimationInProgress,()=>e.dy`<slim-product-widget-wrapper
            data-element-id="estimationinprogress-widget"
          >
            <span slot="afterLogo-row1-col1" class="estimation middle"
              >${h?(0,f.WI)(f.Bd`Calculating ${h}'s True Fit…`):(0,f.WI)("Calculating your True Fit…")}</span
            >
          </slim-product-widget-wrapper>`],[m.SizeNotAvailable,()=>{let t=null,i="afterLogo-row1-col1";return v&&!_?(i="afterLogo-row1-col2",t=e.dy`<ug-text
              slot="afterLogo-row1-col1"
              .ugDetails=${v}
              .configs=${A}
            ></ug-text>`):x&&(i="afterLogo-row1-col2",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==u?void 0:u.status}
            ></tagline-text>`),e.dy`${q(this.widgetConfigs,this.widgetResult)}
            <slim-product-widget-wrapper>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="sizenotavailable-cta"
                .widgetTheme="${w}"
                .noRegFromWidget=${p}
                >${V(h,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
              >
            </slim-product-widget-wrapper>`}],[m.UnrecommendableDepartment,()=>{let t=null,i="afterLogo-row1-col1";return v&&!_?(i="afterLogo-row1-col2",t=e.dy`<ug-text
              slot="afterLogo-row1-col1"
              .ugDetails=${v}
              .configs=${A}
            ></ug-text>`):x&&(i="afterLogo-row1-col2",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==u?void 0:u.status}
            ></tagline-text>`),e.dy`<slim-product-widget-wrapper>
            ${t}
            <cta-link
              slot="${i}"
              data-element-id="unrecommendabledepartment-cta"
              .widgetTheme="${w}"
              .noRegFromWidget=${p}
              >${V(void 0,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
            >
          </slim-product-widget-wrapper>`}]])}`}};re.styles=e.iv`
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 7px;
      column-gap: var(--ug-scale-horizontal-spacing);
    }

    @media (max-width: 169px) {
      ug-scale.text-displayed {
        display: none;
      }
    }

    ug-scale.start {
      flex: 1 0 160px;
      max-width: 180px;
    }

    /* This is for the middle-aligned to components at this level. */
    /* The other components may be middle-aligned in a deeper-level component instead. */
    .middle {
      vertical-align: middle;
    }

    .hw-rec {
      margin-top: 0.66667em;
    }

    .recommendation-underline {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  `,ne([n({type:Object})],re.prototype,"widgetResult",void 0),ne([n({type:Object})],re.prototype,"widgetConfigs",void 0),ne([n()],re.prototype,"recipientAlias",void 0),ne([n()],re.prototype,"noRegFromWidget",void 0),re=ne([(0,f.kI)(),t("slim-product-widget")]y(t,i,s),s};let le=class extends e.oi{render(){return e.dy`<div class="product-widget-wrapper">
      <t-logo></t-logo>
      <div class="after-logo-wrapper standard">
        <div class="after-logo-row-1">
          <span><slot name="afterLogo-row1-col1"></slot></span>
          <span><slot name="afterLogo-row1-col2"></slot></span>
        </div>
        <div
          class=${a({"after-logo-row-2":!0,"with-margin-top":!!this.withGapAboveSecondRow})}
        >
          <slot name="afterLogo-row2-col1"></slot>
        </div>
      </div>
    </div>`}};le.styles=e.iv`
    :host {
      font-family: inherit;
    }
    .product-widget-wrapper {
      display: inline-flex;
      align-items: center;
    }
    .product-widget-wrapper t-logo {
      flex: 0 0 auto;
      width: var(--t-logo-size-standard);
      margin-inline-end: 0.5em;
      -webkit-margin-end: 0.5em;
    }
    .product-widget-wrapper .after-logo-row-2.with-margin-top {
      margin-top: 0.25em;
    }
  `,se([n()],le.prototype,"withGapAboveSecondRow",void 0),le=se([t("standard-product-widget-wrapper")],le);let ae=class extends e.oi{render(){var t,i,n,o,r,s,l,d,c;const u=this.widgetResult;if(!u)return e.dy``;const p=this.noRegFromWidget,h=this.recipientAlias,v=null==u?void 0:u.universalGuidance,y=null==u?void 0:u.heightWeightRecSizeName,w=null===(t=this.widgetConfigs)||void 0===t?void 0:t.theme,b=!1===(null===(n=null===(i=this.widgetConfigs)||void 0===i?void 0:i.univGuidance)||void 0===n?void 0:n.displayText),x=!0===(null===(o=this.widgetConfigs)||void 0===o?void 0:o.recommendationUnderline),_=(null===(l=null===(s=null===(r=this.widgetConfigs)||void 0===r?void 0:r.univGuidance)||void 0===s?void 0:s.scale)||void 0===l?void 0:l.position)||"above",$=null===(c=null===(d=this.widgetConfigs)||void 0===d?void 0:d.univGuidance)||void 0===c?void 0:c.ugText;return e.dy`${g(u.status,[[m.NoUser,()=>{let t=null,i="afterLogo-row1-col1";return v?b||(i="afterLogo-row2-col1",t=e.dy`<ug-text
                slot="afterLogo-row1-col1"
                .vAlignMiddle=${!1}
                .ugDetails=${v}
                .configs=${$}
              ></ug-text>`):(i="afterLogo-row2-col1",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .vAlignMiddle=${!1}
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==u?void 0:u.status}
            ></tagline-text>`),e.dy`${q(this.widgetConfigs,this.widgetResult)}
            <standard-product-widget-wrapper>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="nouser-cta"
                .widgetTheme="${w}"
                .noRegFromWidget=${p}
                >${V(h,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
              >
            </standard-product-widget-wrapper>`}],[m.IncompleteProfile,()=>{let t=null,i=null,n=null,o=null;v||y?v&&!y?b?n="afterLogo-row1-col1":(o="afterLogo-row1-col1",n="afterLogo-row2-col1"):!v&&y?(n="afterLogo-row1-col1",i="afterLogo-row2-col1"):v&&y&&(b?n="afterLogo-row1-col1":(o="afterLogo-row1-col1",n="afterLogo-row1-col2"),i="afterLogo-row2-col1"):(t="afterLogo-row1-col1",n="afterLogo-row2-col1");const r=t?e.dy`<tagline-text
                slot=${t}
                .vAlignMiddle=${!1}
                .widgetConfigs=${this.widgetConfigs}
                .fitRecStatus=${null==u?void 0:u.status}
              ></tagline-text>`:null,s=(o&&v?e.dy`<ug-text
                  slot=${o}
                  .vAlignMiddle=${!1}
                  .ugDetails=${v}
                  .configs=${$}
                ></ug-text>`:null)||r,l=i&&y?e.dy`<span
                  class="hw-rec middle ${_}"
                  slot=${i}
                  >${K(y,h,this.widgetConfigs)}</span
                >`:null;return e.dy`${q(this.widgetConfigs,this.widgetResult)}
            <standard-product-widget-wrapper .withGapAboveSecondRow=${!!y}>
              ${s}<cta-link
                slot="${n}"
                data-element-id="incompleteprofile-cta"
                .widgetTheme="${w}"
                .noRegFromWidget=${p}
                >${V(h,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
              >
              ${l}
            </standard-product-widget-wrapper> `}],[m.InvalidDepartment,()=>{let t=null,i="afterLogo-row1-col1";return v?b||(i="afterLogo-row2-col1",t=e.dy`<ug-text
                slot="afterLogo-row1-col1"
                .vAlignMiddle=${!1}
                .ugDetails=${v}
                .configs=${$}
              ></ug-text>`):(i="afterLogo-row2-col1",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .vAlignMiddle=${!1}
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==u?void 0:u.status}
            ></tagline-text>`),e.dy`${q(this.widgetConfigs,this.widgetResult)}
            <standard-product-widget-wrapper>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="invaliddepartment-cta"
                .widgetTheme="${w}"
                .noRegFromWidget=${p}
                >${V(h,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
              >
            </standard-product-widget-wrapper>`}],[m.Success,()=>e.dy`<div
            class=${a({"recommendation-underline":x})}
          >
            <standard-product-widget-wrapper data-element-id="success-widget">
              <size-rec
                slot="afterLogo-row1-col1"
                .size="${null==u?void 0:u.size}"
                .vAlignMiddle=${!1}
                .showRecommendationUnderline="${x}"
              ></size-rec>
              <span slot="afterLogo-row2-col1" class="size-rec-description"
                >${ie(h,this.widgetConfigs)}</span
              >
            </standard-product-widget-wrapper>
          </div>`],[m.EstimationInProgress,()=>e.dy`<standard-product-widget-wrapper
            data-element-id="estimationinprogress-widget"
          >
            <span
              slot="afterLogo-row1-col1"
              class="${a({estimation:!0})}"
              >${h?(0,f.WI)(f.Bd`Calculating ${h}'s True Fit…`):(0,f.WI)("Calculating your True Fit…")}</span
            >
          </standard-product-widget-wrapper>`],[m.SizeNotAvailable,()=>{let t=null,i="afterLogo-row1-col1";return v?b||(i="afterLogo-row2-col1",t=e.dy`<ug-text
                slot="afterLogo-row1-col1"
                .vAlignMiddle=${!1}
                .ugDetails=${v}
                .configs=${$}
              ></ug-text>`):(i="afterLogo-row2-col1",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .vAlignMiddle=${!1}
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==u?void 0:u.status}
            ></tagline-text>`),e.dy`${q(this.widgetConfigs,this.widgetResult)}
            <standard-product-widget-wrapper>
              ${t}
              <cta-link
                slot="${i}"
                data-element-id="sizenotavailable-cta"
                .widgetTheme="${w}"
                .noRegFromWidget=${p}
                >${V(h,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
              >
            </standard-product-widget-wrapper>`}],[m.UnrecommendableDepartment,()=>{let t=null,i="afterLogo-row1-col1";return v?b||(i="afterLogo-row2-col1",t=e.dy`<ug-text
                slot="afterLogo-row1-col1"
                .vAlignMiddle=${!1}
                .ugDetails=${v}
                .configs=${$}
              ></ug-text>`):(i="afterLogo-row2-col1",t=e.dy`<tagline-text
              slot="afterLogo-row1-col1"
              .vAlignMiddle=${!1}
              .widgetConfigs=${this.widgetConfigs}
              .fitRecStatus=${null==u?void 0:u.status}
            ></tagline-text>`),e.dy`<standard-product-widget-wrapper>
            ${t}
            <cta-link
              slot="${i}"
              data-element-id="unrecommendabledepartment-cta"
              .widgetTheme="${w}"
              >${V(void 0,this.widgetConfigs,null==u?void 0:u.status)}</cta-link
            >
          </standard-product-widget-wrapper>`}]])}`}};var de,ce;ae.styles=e.iv`
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 7px;
      column-gap: var(--ug-scale-horizontal-spacing);
    }

    @media (max-width: 169px) {
      ug-scale.text-displayed {
        display: none;
      }
    }

    ug-scale.start {
      flex: 1 0 160px;
      max-width: 180px;
    }

    /* This is for the middle-aligned to components at this level. */
    /* The other components may be middle-aligned in a deeper-level component instead. */
    .middle {
      vertical-align: middle;
    }

    .recommendation-underline {
      text-decoration: underline;
      text-underline-offset: 2px;

      .size-rec,
      .size-rec-description {
        text-decoration: underline;
      }
    }
  `,se([n({type:Object})],ae.prototype,"widgetResult",void 0),se([n({type:Object})],ae.prototype,"widgetConfigs",void 0),se([n()],ae.prototype,"recipientAlias",void 0),se([n()],ae.prototype,"noRegFromWidget",void 0),ae=se([(0,f.kI)(),t("standard-product-widget")],ae);const ue="undefined"!=typeof self?self:globalThis,pe=null!==(de=ue.window)&&void 0!==de?de:{},fe=null!==(ce=ue.document)&&void 0!==ce?ce:{},ge={NODE_ENV:"production",PUBLIC_URL:void 0,WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,TFP_APP_DIST_PUBLIC_URL:"/consumer-ux/7.0-localized-202401251957.40/tfp-app"};let he;function ve(e){he=e}function me(){renown="unknown"}(ye||(ys.splice(0)}trigger(e){this.callbacks.sorEate).getTime()}let xe,_e,$e=null;function Se(e){$e=e}function Ae(){if(null===$e)throw"ScreenSize has not been set";return $e}function Ce(){if(null===$e)throw"ScreenSize has not been set";return"small"===$e?"mobile":"desktop"}function Re(){return xe}function Ie(e){xe=e}functionion Ee(e){_e=e}const ke=fe.location.hash.substring(1).split("&").reduce(((e,t)=>{const[i,n]=t.split("=");return e[decodeURIComponent(i)]=decodeURIComponent(n),e}),{});let Oe,Le,Pe,Ue,ze;const Be=ge.TFP_WIDGETS_CONSUMER_SERVICE_URI,Me=ge.TFP_WIDGETS_CONSUMER_CDN_URI||"https://cdn.truefitcorp.com",Fe=Be||"https://consumer.truefitcorp.com",We=Me,Ne=ge.TFP_WIDGETS_TFP_APP_URI||Me,je=Be||fe.location.origin,De=ke.otherWidgets,Ge=()=>{var e;return Oe||(Oe={iframeId:Ze("iframeId"),tfIntegrationVersion:ke.tfIntegrationVersion,nativeAppSdkIntegration:ke.nativeAppSdkIntegration,type:Ze("type"),storeKey:Ze("storeKey"),cookiesEnabled:(e=Ze("cookiesEnabled"),"true"===e),retailerHref:ke.retailerHref,retailerOrigin:ke.retailerOrigin,screenSize:Ze("screenSize"),deviceType:Ze("deviceType"),integrationPlatform:ke.integrationPlatform,token:ke.token,userId:ke.userId,registered:Je(ke.registered),locale:ke.locale,widgetHidden:Je(ke.widgetHidden),storeExperimentKey:ke.storeExperimentKey,sessionParamOverrides:ke.sessionParamOverrides}),Oe},He=()=>{if(!Le){const e=Ge();if("tfc-fitrec-product"!==e.type)throw new Error(`Expected widget type=tfc-fitrec-product, but found: ${e.type}`);Le=Object.assign(Object.assign({},e),{type:"tfc-fitrec-product",configSet:ke.configSet,configOverride:ke.configOverride,widgetLocation:ke.widgetLocation,styleId:Ze("styleId"),colorId:ke.colorId,context:ke.context,otherWidgets:De,widgetResponse:ke.widgetResponse,sendResponse:Je(ke.sendResponse)})}return Le},Ve=()=>{if(!Ue){const e=Ge();if("tfc-fitrec-size-sampling"!==e.type)throw new Error(`Expected widget type=tfc-fitrec-size-sampling, but found: ${e.type}`);Ue=Object.assign(Object.assign({},e),{type:"tfc-fitrec-size-sampling",configSet:ke.configSet,configOverride:ke.configOverride,otherWidgets:De,widgetResponse:ke.widgetResponse,sendResponse:Je(ke.sendResponse),productInfo:ke.productInfo})}return Ue},Ke=()=>{if(!ze){const e=Ge();if("tfc-fitrec-rollup"!==e.type)throw new Error(`Expected widget type=tfc-fitrec-rollup, but found: ${e.type}`);ze=Object.assign(Object.assign({},e),{type:"tfc-fitrec-rollup",styleId:Ze("styleId"),configSet:ke.configSet,configOverride:ke.configOverride,otherWidgets:De,widgetResponse:ke.widgetResponse,sendResponse:Je(ke.sendResponse)})}return ze},qe=()=>{if(!Pe){const e=Ge();if("api"!==e.type)throw new Error(`Expected widget type=api, but found: ${e.type}`);Pe=Object.assign(Object.assign({},e),{type:"api",iframeId:Ze("iframeId"),checkout:ke.checkout,otherWidgets:De,sessionInfo:ke.sessionInfo})}return Pe};function Je(e){return void 0===e?void 0:"true"===e}function Ze(e){const t=ke[e];if(void 0===t)throw new Error(`Required param [${e}] not found on the hash`);return t}const Ye=()=>{var e;const{deviceType:t,storeKey:i,integrationPlatform:n,nativeAppSdkIntegration:o}=Ge(),r=Te();if(!r)throw new Error("attempted to build url params, but there is no current widget response - this shouldn't be possible");const{configs:s,locale:l,profiles:a}=r,{id:d}=null!==(e=null==a?void 0:a.recipient)&&void 0!==e?e:{},{analytics:{universalAnalyticsConfigs:c},feature:{sfoEnabled:u,emailOptInEnabled:p,includeAgeQuestion:f,quantumMetricEnabled:g,brandSearchMode:h,privacyMessagingEnabled:v,fitDetailsUxMode:m,fitDetailsInFunnel:y,modalHeaderDisplayMode:w,includeShoeIntro:b,apparelIntro:x,heightQuestion:_,weightQuestion:$,saveQuestion:S,stepIndicator:A,suggestedBrands:C},tfpApp:R}=s,I=c&&JSON.stringify(c),T=R?JSON.stringify(R):void 0,E=me(),k=Ae();return{storeId:i,token:E,nativeAppSdkIntegration:o,serviceSecureURI:Fe,cdnSecureURI:We,platform:n,deviceType:t,screenSize:k,recipientProfileId:d,locale:l,shopForOthersEnabled:u,emailOptInEnabled:p,includeAgeQuestion:f,universalAnalyticsConfigs:I,tfpAppConfigs:T,qmEnabled:g,brandSearchMode:h,privacyMessagingEnabled:v,fitDetailsUxMode:m,fitDetailsInFunnel:y,modalHeaderDisplayMode:w,includeShoeIntro:b,apparelIntro:x,heightQuestion:_,weightQuestion:$,saveQuestion:S,stepIndicator:A,suggestedBrands:C}};function Xe(e){return t=this,i=void 0,o=function*(){const{storeKey:t}=Ge(),{checkoutType:i,orderId:n,userId:o,locale:r,deviceType:s,integrationPlatform:l,widgetHidden:a,storeExperimentKey:d,products:c}=e,u={};o&&(u["X-TF-StoreUserId"]=o);const p={};r&&(p.locale=r),yield Lt(),yield It({path:`/profile/public/v3/${t}/checkout`,headers:u,queryParams:p,body:JSON.stringify({checkoutType:i,orderId:n,deviceType:s,integrationPlatform:l,widgetHidden:a,storeExperimentKey:d,products:c})})},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,l)}a((o=o.apply(t,i||[])).next())}));var t,i,n,o}var Qe,et;function tt(e){return t=this,i=void 0,o=function*(){const{storeKey:t}=Ge(),{userId:i,locale:n,widgetHidden:o,storeExperimentKey:r,deviceType:s,integrationPlatform:l,referrerUri:a,retailerReferer:d}=e,c={};i&&(c["X-TF-StoreUserId"]=i);const u={};n&&(u.locale=n),yield Lt(),yield It({path:`/profile/public/v3/${t}/analytics/tracking`,headers:c,queryParams:u,body:JSON.stringify({widgetHidden:o,storeExperimentKey:r,deviceType:s,integrationPlatform:l,referrerUri:a,retailerReferer:d})})},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,l)}a((o=o.apply(t,i||[])).next())}.ERROR="ERRORe.OFF=6]="OFF"}(et||(et={}));const it="true"===ge.TFP_WIDGETS_CONSOLE_LOGGER;pe.tfcLoggingLevel=pe.tfcLoggingLevel||void 0;const nt=ge.TFP_WIDGET!==e?e:et.WARN}pe.tfcLoggingLevel=et[nt];let rt=[];function st(){if(rt.length){const{storeKey:e}=Ge(),t=rt.slice();rt=[],It({path:`/profile/public/v3/${e}/client-log`,body:JSON.stringify({clientLogs:t})})}}const lt=function(e,t,i){let n,o,r,s,l=0;i||(i={});const a=function(){l=!1===i.leading?0:be(),n=null,s=e.apply(o,r),n||(o=null,r=[])},d=function(...t){const d=be();l||!1!==i.leading||(l=d);const c=1e3-(d-l);return o=this,r=t,c<=0||c>1e3?(n&&(clearTimeout(n),n=null),l=d,s=e.apply(o,r),n||(o=null,r=[])):n||!1===i.trailing||(n=setTimeout(a,c)),s};return d.cancel=function(){n&&clearTimeout(n),l=0,n=o=null,r=[]},d}(st,0,{leading:!1});function at(e,...t){console.error(e,...t);const{stack:i,message:n}=e instanceof Error?e:new Error(`${e}`);rt.push({level:Qe.ERROR,message:`${n}`,stack:i})}const dt=Object.assign({trace:(e,...t)=>{ot()<=et.TRACE&&console.trace(e,...t)},debug:(e,...t)=>{ot()<=et.DEBUG&&console.debug(e,...t)},info:(e,...t)=>{ot()<=et.INFO&&console.info(e,...t)},warn:(e,...t)=>{ot()<=et.WARN&&(console.warn(e,...t),rt.push({level:Qe.WARN,message:e}),lt())},error:(e,...t)=>{ot()<=et.ERROR&&(at(e,...t),lt())},error_consoleOnly:(e,...t)=>{ot()<=et.ERROR&&console.error(e,...t)},raise:(e,...t)=>{const i=new Error(e);throw it?console.error(i):ot()<=et.ERROR&&(at(i,...t),st()),i}},it?console:{});function ct(e,t="JSON parsing error"){try{return JSON.parse(e)}catch(e){dt.error(pt(){return ut}function ft(e){ut=Object.assign(Object.assign({},ut),e)}var gt=function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}))};function ht(e){return gt(this,void 0,void 0,(function*(){const{storeKey:t}=Ge(),i=`sourceOrigin=${encodeURIComponent(e)}`;return(yield fetch(`${je}/profile/public/v3/${t}/validate/origin?${i}`,{headers:{"content-type":"application/json; charset=UTF-8"},method:"GET"})).json()}))}letostMessage(e,t);let yt=ye.Unknown;const wt=n)),i.listen(&&i.trigger(t)}};function xt(e){return gt(this,void 0,void 0,(function*(){const{retailerOrigin:t,nativeAppSdkIntegration:i}=Ge();if(i)bt.triggerEvent(e.type,e);else if(t){var n;switch(n={retailerOrigin:t,message:e},vt.push(n),yt===ye.Unknown&&(yt=ye.RequestSent,yt=(yield function(e){return gt(this,void 0,void 0,(function*(){if("true"===ge.TFP_WIDGETS_OFFLINE)return!0;let t;t=De?ht(e):function(e){return gt(this,void 0,void 0,(function*(){const t=pe.parent.frames;for(let e=0;e<t.length;e++){const i=t[e];try{if(i&&pe!==i&&i.location.origin===pe.location.origin&&i.location.hash.includes("iframeId")&&i.tfcValidateOriginPromise)return dt.debug("Found tfcValidateOriginPromise - returning"),i.tfcValidateOriginPromise}catch(e){}}return dt.debug("Didn't find another widget with tfcValidateOriginPromise - calling the service"),ht(e)}))}(e),pe.tfcValidateOriginPromise=t;const i=yield t,{isValid:n}=i;return n||dt.error_consoleOnly(`True Fit: origin [${e}] is not configured to be allowed.`),n}))}(t))?ye.Valid:ye.Invalid),yt){case ye.Invalid:return;case ye.Valid:!function(){for(;vt.length;){const[e,...t]=vt;mt(e),vt=t}}()}}else dt.error("retailerOrigin is missing from the widget hash")}))}pe.tfc=bt;let _t=[];function $t(e){const{retailerOrigin:t,iframeId:i}=Ge();pe.addEventListener("message",(i=>gt(this,void 0,void 0,(function*(){if(i.origin===t||i.origin===location.origin){const t=i.data;switch(t.type){case"tokenUpdate":dt.debug("tokenUpdate event",i),ve(t.token);break;case"widgetRefresh":dt.debug("widgetRefresh event",i),ft(t.currentWidget),e(t.immediateOpen,t.styleIdForCurrentWidget);break;case"screenSizeChange":dt.debug("screenSizeChange event",i),Se(t.newSize),e(!1);break;case"checkout":dt.debug("checkout event",i),Xe(t.checkout);break;case"trackSession":dt.debug("track session event",i),tt(t.sessionInfo);break;case"widgetResponse":dt.debug("widget response",i),Ee(i.data.widgetResponse);break;case"updateOtherWidgets":{dt.debug("updateOtherWidgets event",i);const e=ct(t.otherWidgets,"Received unparsable otherWidgets.");e&&(Dt=e);break}case"idSyncProviderIds":dt.debug("idSyncProviderIds event",i),function(e){var t,i,n,o,r;i=this,n=void 0,r=function*(){const{storeKey:i}=Ge(),n=Te(),o=null===(t=null==n?void 0:n.profiles)||void 0===t?void 0:t.shopper.id;if(o){const t=[];for(const n in e){const r=e[n];t.push(Tt({path:`/profile/public/v3/${i}/id-sync`,body:JSON.stringify({provider:n,providerId:r,shopperProfileId:o})}))}yield Promise.all(t)}},new((o=void 0)||(o=Promise))((function(e,t){function s(e){try{a(r.next(e))}catch(e){t(e)}}function l(e){try{a(r.throw(e))}catch(e){t(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(s,l)}a((r=r.apply(i,n||[])).next())}))}(i.data.idSyncProviderIds);break;case"triggerOpen":dt.debug("triggerOpen event",i),pe.dispatchEvent(new CustomEvent("triggerOpen"));break;default:return void dt.trace("received unhandled message event",i)}_t=_t.filter((e=>t.type!==e.messageType||(e.resolve(i),!1)))}}))),!1),xt({type:"widgetReady",ifra])).next())}))};const At=[e=>!!e.match(/\/profile\/public/v.+\/widget$/)];function Ct(e,t,i=!1){return St(this,void 0,void 0,(function*(){const{path:n,queryParams:o={},headers:r={},body:s}=t;if(!i)some((t=>t(e))))(n)||(e=yield Lt()),!r["X-TF-UserToken"]&&e&&(r["X-TF-UserToken"]=e),t.headers=r}const l=Object.IComponent(t)}`)).join("&"),a=yield fetch(`${je}${n}?${l}`,{headers:Object.assign(Object.assign({},r),{"content-type":"application/json; charset=UTF-8"}),body:s,method:e,credentials:"include"});if(!i){const e=a.headers.get("x-tf-usertoken"),t=a.headers.get("x-tf-usertokenmaxage");if(e&&e!==me()){let i;dt.debug(`calling setToken from doHttp - token: ${e}`),ve(e),t?i=parseInt(t,10):(dt.error("Unexpected Error - x-tf-usertoken header present but not x-tf-usertokenmaxage"),i=63072e3),xt({type:"tokenUpdate",token:e,maxAge:i})}}return a}))}function Rt(e){return St(this,void 0,void 0,(function*(){return Ct("GET",e)}))}function It(e){return St(thisn Ct("POST",e)}))}function Tt(e){return St(this,void 0,void 0,(function*(){return Ct("POST",e,!0)}))}var Et=function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}))};let kt;function Ot(e){return Et(this,void 0,void 0,(function*(){return yield kt,t=e(),kt=null!=kt?kt:t,t;var t}))}function Lt(){return Et(this,void 0,void 0,(function*(){let e=me();if(e||(e=yield function(){return Et(this,void 0,void 0,(function*(){if(!kt){const{storeKey:e}3/${e}/token`})))}return yield kt,me()}))}()),!e)throw"Unable to retrieve a token";return e}))}const{TFP_APP_DIST_PUBLIC_URL:Pt}=ge,Ut=e=>{return`${Pt}/index.html#/${t=e,Object.entries(t).reduce(((e,[t,i])=>`${e}${null!=i?`${e?"&":""}${t}=${encodeURIComponent(i)}`:""}`),"")}`;var t};var zt=function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}))};let Bt;const Mt=[m.NoUser,m.IncompleteProfile,m.InvalidDepartment,m.Success,m.EstimationInProgress,m.SizeNotAvailable,m.UnrecommendableDepartment],Ft=[m.Success,m.Estimatio>Mt.includes(e),Nt=({size:e,universalGuidance:t})=>e?"personal":t?"general":void 0,jt=(e,t)=>{var i;const n=(({productResults:e})=>e?Object.keys(e).reduce(((t,i)=>Object.assign(Object.assign({},t),{[i]:{isWidgetVisible:Wt(e[i]),successType:Nt(e[i])}})),{}):void 0)(t),o=(({configs:e,productResults:t})=>t&&e.feature.autoSizeSelectEnabled?Object.keys(t).reduce(((e,i)=>{const{size:n}=t[i];return n?[...e,{styleId:i,size:n}]:e}),[]):void 0)(t),r=e.hasRegisterWidget?(()=>{const e=Ye([o]])}return i}(e,["token"]);if("string"!=typeof t&&void 0!==t)throw new Error(`Unknown type ${typeof t} for widget token.`);const n=Object.assign(Object.assign({},i),{originWidget:"tfc-fitrec-register"});return{iframeOrigin:Ne,iframePathAndHash:Ut(n),widgetToken:t}})():null,s=null===(i=t.profiles)||void 0===i?void 0:i.shopper.id,l=!!s,a=t.configs.store.idSyncProvidersWithFetchers,d=t.userState;xt(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({type:"widgetResponse",widgetResponse:t},n?{retailerWidgetResult:n}:{}),o?{autoSizeSelect:o}:{}),r?{bannerRegistration:r}:{}),l&&a?{idSyncProvidersWithFetchers:a}:{}),s?{shopperProfileId:s}:{}),d?{userState:d}:{}))};let Dt=De&&ct(De,"Skipping unparsable otherWidgets.");function Gt(e,t){return zt(this,void 0,void 0,(function*(){if("true"===ge.TFP_WIDGETS_OFFLINE)return;if(dt.debug(`[Widget] ${e} updateFitResponse()`),Bt)return dt.debug(`[Widget] ${e} Widget request in flight, awaiting that.`),Bt;const{tfIntegrationVersion:i,deviceType:n,retailerHref:o,cookiesEnabled:r,storeKey:s,sessionParamOverrides:l,integrationPlatform:a,type:d}=Ge();if(!Dt&&"tfc-fitrec-size-sampling"!==d){dt.debug(`[Widget] ${e} Awaiting widgetResponse`),Re()||Ie(function(){return zt(this,void 0,void 0,(function*(){return(yield function(e){return gt(this,void 0,void 0,(function*(){return new Promise((e=>{_t=[..._t,{messageType:"widgetResponse",resolve:e}]}))}))}()).data.widgetResponse}))}());const t=Re();t&&Ee(yield t);const i=Te();return dt.debug(`[Widget] ${e} Resolved widgetResponse`,i),Ie(void 0),i}const c=pt(),u={};i&&(u["x-tf-integration-version"]=i),c.userId&&(u["X-TF-StoreUserId"]=c.userId);const p=Object.assign(Object.assign(Object.assign(Object.assign({},o?{retailerReferer:o}:{}),{analyticsScreenSize:Ae(),cookiesEnabled:r.toString(),deviceType:n}),a?{platform:a}:{}),l?{sessionParamOverrides:l}:{});["locale","registered","widgetHidden","storeExperimentKey","configSet"].forEach((e=>{var t;const i=null===(t=c[e])||void 0===t?void 0:t.toString();i&&(p[e]=i)}));const f=(Dt||[]).reduce((function(e,t){var i;return"tfc-fitrec-register"===t.type?Object.assign(Object.assign({},e),{hasRegisterWidget:!0}):"tfc-fitrec-product"===t.type||"tfc-fitrec-rollup"===t.type?t.style?t.style.startsWith("tfTest-")?e:Object.assign(Object.assign({},e),{productWidgets:[...null!==(i=e.productWidgets)&&void 0!==i?i:[],{style:t.style,context:t.context}]}):(dt.error("Missing style id for other product widget data."),e):(dt.error(`Unexpected type "${t.type}" for other widget data.`),e)}),(null==e?void 0:e.lenWith("tfTest-")))?{produce:e,context:t})))}:{});if(Bt){dt.debug(`[Widget] ${e} Awaiting existing widget request`);const t=yield Bt;return Ee(t),t}dt.debug("[Widget]"+((null==e?void 0:e.length)?` ${e}`:""),"Sending widget request",f),Bt=function({storeKey:e,queryParams:t,headers:i,body:n}){return zt(this,void 0,void 0,(function*(){return(yield Ot((()=>It({path:`/profile/public/v3/${e}/widget`,queryParams:t,headers:i,body:JSON.stringify(n)})))).json()}))}({storeKey:s,queryParams:p,headers:u,body:f});const g=yield Bt;Ee(g),Bt=void 0,dt.debug(`[Widget] ${e} Sending widgetResponse message.`,g),jt(f,g);const h=g.configs.feature.fullScreenPopupZoomEnabled,v="responsive"!==g.deviceType?g.deviceType:void 0;return(v||h)&&xt({type:"deviceTypeUpdate",deviceType:v,fullScreenPopupZoomEnabled:h}),g}))}var Ht=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Vt=clactor(){super()}_determineTheme(){var e,t,i,n,o;return"slim"===(null===(e=this.productWidgetConfigs)||void 0===e?void 0:e.theme)||"button"===(null===(t=this.productWidgetConfigs)||void 0===t?void 0:t.theme)&&(null===(i=this.fitRec)||void 0===i?void 0:i.status)&&Ft.includes(null===(n=this.fitRec)||void 0===n?void 0:n.status)?"slim":null===(o=this.productWidgetConfigs)||void 0===o?void 0:o.theme}render(){var t,i,n,o,r,s,l,a;this.fitRec||(dt.debug(`style ${this.styleId} not found in the widget call response - either the product isn't in an enabled hierarchy, or the user is disabled.`),this._widgetTemplate=void 0);const d=null===(t=this.fitRec)||void 0===t?void 0:t.status;if(d&&!Mt.includes(d))this._widgetTemplate=void 0;else{const t=(null===(o=null===(n=null===(i=this.productWidgetConfigs)||void 0===i?void 0:i.univGuidance)||void 0===n?void 0:n.scale)||void 0===o?void 0:o.position)||"above";switch(this._determineTheme()){case"button":this._widgetTemplate=e.dy`<button-product-widget
            class="${t}"
            .widgetResult=${this.fitRec}
            .widgetConfigs=${this.productWidgetConfigs}
            .recipientAlias=${this.recipientAlias}
            .noRegFromWidget=${this.noRegFromWidget}
          ></button-product-widget>`;break;case"slim":this._widgetTemplate=e.dy`<slim-product-widget
            class="${t}"
            .widgetResult=${this.fitRec}
            .widgetConfigs=${this.productWidgetConfigs}
            .recipientAlias=${this.recipientAlias}
            .noRegFromWidget=${this.noRegFromWidget}
          ></slim-product-widget>`;break;default:this._widgetTemplate=e.dy`<standard-product-widget
            class="${t}"
            .widgetResult=${this.fitRec}
            .widgetConfigs=${this.productWidgetConfigs}
            .recipientAlias=${this.recipientAlias}
            .noRegFromWidget=${this.noRegFromWidget}
          ></standard-product-widget>`}}const c=null===(r=this.fitRec)||void 0===r?void 0:r.universalGuidance,u=null===(s=this.fitRec)||void 0===s?void 0:s.heightWeightRecSizeName,p=!1===(null===(a=null===(l=this.productWidgetConfigs)||void 0===l?void 0:l.univGuidance)||void 0===a?void 0:a.displayText),f=c&&!p;return this.noRegFromWidget&&d!=m.Success&&(d!=m.IncompleteProfile&&!f||d===m.IncompleteProfile&&!f&&!u)?e.dy``:(dt.debug("starting render",performance.now()),this._widgetTemplate?e.dy`<button
        type="button"
        @click="${this.sendOpenEvent}"
        ?disabled="${this.noRegFromWidget}"
      >
        ${this._widgetTemplate}
      </button>`:e.dy``)}};var Kt,qt,Jt,Zt,Yt,Xt,Qt,ei,ti,ii,ni,oi,ri;function si(e,t){switch(t){case Qt.Child:switch(e){case Xt.Male:return Jt.Boys;case Xt.Female:return Jt.Girls;default:return Jt.UnisexKids}case Qt.Adult:switch(e){case Xt.Male:return Jt.Men;case Xt.Female:return Jt.Women;default:return Jt.Unisex}}}function li(e,t,i){if(e===qt.Tops&&t===Yt.DressShirts&&i===Jt.Men)return Zt.DressShirts;if(e===qt.Tops)return Zt.Tops;if(e===qt.Bottoms)return Zt.Bottoms;if(e===qt.Dresses)return Zt.Dresses;if(e===qt.Shoes)return Zt.Shoes;if(e===qt.Bras)return Zt.Bras;if(e===qt.Suits)return Zt.Suits;throw new Error(`Unable to resolve product type from category ${e} and classification ${t}`)}Vt.styles=e.iv`
    /* REVERT - this broke slim and button theme, caused the bottom to be cut off
    need inline-block instead of the default of inline so that firefox doesn't give the empty widget a height 
    :host {
      display: inline-block;
    }
    */

    button {
      font-family: var(--font-family);
      font-size: var(--font-size);
      color: var(--text-color);

      background-color: transparent;
      border: 0;
      padding: 0;
      text-align: start;
      cursor: pointer;
      -webkit-appearance: none;
      border-radius: 0;
      -webkit-border-radius: 0;
    }

    button:active {
      color: inherit;
    }

    button:disabled {
      cursor: default;
    }

    .start {
      flex-direction: row;
      align-items: flex-end;
      flex-wrap: wrap;
    }
  `,Ht([n({type:Object})],Vt.prototype,"productWidgetConfigs",void 0),Ht([n()],Vt.prototype,"recipientAlias",void 0),Ht([n()],Vt.prototype,"styleId",void 0),Ht([n({type:Object})],Vt.prototype,"fitRec",void 0),Ht([n()],Vt.prototype,"sendOpenEvent",void 0),Ht([n()],Vt.prototype,"noRegFromWidget",void 0),Vt=Ht([t("product-widgetenotavailable"}(Kt||(Kt={})),function(e){e.Bottoms="Bottoms",e.Dresses="Dresses",e.Shoes="Shoes",e.Tops="Tops",e.Bras="Bras",e.Suits="Suitss="UnisexKids"}(Jt||(Jt={})),function(e){e.Bottoms="Bottoms",e.Dresses="Dresses",e.Shoes="Shoes",e.Tops="Tops",e.Bras="Bras",e.Suits="Suits",e.DressShirts="DressShirts="NoneOfThese"}(Yt||(Yt={})),function(e){e.Female="Female",e.Male="Male",e.Unisex="Unisex"}(Xt||(Xt={})),function(e){e.Adult="Adult",e.Child="Child{e.YrMo="YrMo"}(ei||(ei={})),function(e){e.Cm="Cm",e.FtIn="FtIn"}(ti||(ti={})),function(e){e.Kg="Kg",e.Lb="Lb",e.StLb="StLb"Cm",e.In="In"}(ni||(ni={})),function(e){e.ExtraLong="ExtraLong",e.Long="Long",e.Regular="Regular",e.Short="Short"}(oi||(oi={})),function(e){e.WayTooShort="WayTooShort",e.TooShort="TooShort",e.JustRight="JustRight",e.TooLong="TooLong",e.WayTooLong="WayTooLong"}(ri||(ri={}));const ai=["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"],di=["ar","da","de","en","en-CA","en-GB","es","fr","fr-CA","hu","is","it","ja","ko","nl","pt","sv","zh-CN"];function ci(e){return di.includes(e)}function ui(e){const[t,i]=e.split(/[_-]/);return[t,i]}function pi(e){const[t,i=""]=ui(e),n=t.toLowerCase(),o=i.toUpperCase();(null==n?void 0:n.length)||dt.error(new Error(`Could not parse a language from the locale code ${e}`));const r="MX"===o||"US"===o?"en":"en-GB",s=[n,o].filter((e=>e)).join("-"),l=ci(s)?s:"en"!==n&&ci(n)?n:r,[a]=ui(l);return function(e){const t=ai.includes(e)?"rtl":"ltr";document.body.dir===t?dt.debug(`Text direction already set to "${t}".`):(dt.debug(`Setting text direction to "${t}".`),document.body.dir=t)}(a),$(l)}var fi;function gi(e){if(e.startsWith("tfTest")){const[t,...i]=e.split("|"),{hwRec:n,ug:o,ageGroup:r,alieturn e[i]=n,e}),{}),l=_i[t];if(l){const e=function(e){if(e)switch(e){case"RS":return hi;case"MRS":return vi;case"TTSS":return mi;case"TTS":return yi;case"TTSL":return wi;case"MRL":return bi;case"RL":return xi}}(o);return e&&(l.universalGuidance=e),!r||"Adult"!==r&&"Child"!==r||(l.ageGroup=r),n&&(l.heightWeightRecSizeName=n),{productResult:l,alias:s}}}}!function(e){e.NoUser="tfTest-nouser",e.IncompleteProfile="tfTest-incompleteprofile",e.SizeNotAvailable="tfTest-sizenotavailable",e.InvalidDepartment="tfTest-invaliddepartment",e.UnrecommendableDepartment="tfTest-unrecommendabledepartment",e.Success="tfTest-success",e.EstimationInProgress="tfTest-estimationinprogress"}(fi||(fi={}));const hi={guidance:h.RunsOneSizeStepSmall,source:v.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},vi={guidance:h.MayRunOneSizeStepSmall,source:v.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},mi={guidance:h.RunsTrueToSizeSmall,source:v.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},yi={guidance:h.RunsTrueToSize,source:v.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},wi={guidance:h.RunsTrueToSizeLarge,source:v.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},bi={guidance:h.MayRunOneSizeStepLarge,source:v.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},xi={guidance:h.RunsOneSizeStepLarge,source:v.Style,score:0,social:{dataCount:1500,isAtMaxDataCount:!1}},_i={[fi.NoUser]:{styleId:fi.NoUser,ageGroup:Qt.Adult,gender:Xt.Female,category:qt.Bottoms,recommendable:!0,status:m.NoUser},[fi.IncompleteProfile]:{styleId:fi.IncompleteProfile,ageGroup:Qt.Adult,gender:Xt.Female,category:qt.Bottoms,recommendable:!0,status:m.IncompleteProfile},[fi.SizeNotAvailable]:{styleId:fi.SizeNotAvailable,ageGroup:Qt.Adult,gender:Xt.Female,category:qt.Bottoms,recommendable:!0,status:m.SizeNotAvailable},[fi.InvalidDepartment]:{styleId:fi.InvalidDepartment,ageGroup:Qt.Adult,gender:Xt.Female,category:qt.Bottoms,recommendable:!0,status:m.InvalidDepartment},[fi.UnrecommendableDepartment]:{styleId:fi.UnrecommendableDepartment,ageGroup:Qt.Adult,gender:Xt.Female,category:qt.Bottoms,recommendable:!0,status:m.UnrecommendableDepartment},[fi.Success]:{styleId:fi.Success,ageGroup:Qt.Adult,gender:Xt.Female,category:qt.Bottoms,recommendable:!0,size:"2",status:m.Success},[fi.EstimationInProgress]:{styleId:fi.EstimationInProgress,ageGroup:Qt.Adult,gender:Xt.Female,category:qt.Bottoms,recommendable:!0,status:m.EstimationInProgress}};var $i=o(690),Si=function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}))},Ai=function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}))};const Ci="Montserrat",Ri={Arial:{family:"Arial",familyRuleDeclaration:"Arial, Helvetica, sans-serif"},AvenirBook:{family:"Avenir Book",familyRuleDeclaration:"'Avenir Book', Montserrat, sans-serif"},CalibreRegular:{family:"Calibre Regular",familyRuleDeclaration:"'Calibre Regular', Montserrat, sans-serif"},CircularBook:{family:"CircularStd-Book",familyRuleDeclaration:"'CircularStd-Book', Montserrat, sans-serif"},CircularXX:{family:"CircularXX",familyRuleDeclaration:"'CircularXX', Montserrat, sans-serif"},Grosa:{family:"Grosa",familyRuleDeclaration:"'Grosa', Montserrat, sans-serif"},LibreBaskerville:{family:"Libre",familyRuleDeclaration:"'Libre Baskerville', serif"},MacysSans:{family:"MacysSans",familyRuleDeclaration:"'MacysSans', Montserrat, sans-serif"},Montserrat:{family:"Montserrat",familyRuleDeclaration:void 0},SwearText:{family:"Swear Text",familyRuleDeclaration:"'Swear Text', Montserrat, serif"},StoreCustomBaseFont:{family:"Store Custom Base Font",familyRuleDeclaration:"'Store Custom Base Font', Montserrat"}},Ii={light:300,regular:400,medium:500,semiBold:600,bold:700},Ti={};function Ei(e){var t,i;return Ai(this,void 0,void 0,(function*(){let n=Ci;const o=null===(t=e.fonts)||void 0===t?void 0:t.base;if(o){n="StoreCustomBaseFont";const e=`${n}-${(0,$i.sha1)(o)}`;Ti[e]||(Ti[e]=function(e,t){return Ai(this,void 0,void 0,(function*(){const{family:i,familyRuleDeclaration:n}=Ri[e];try{if(!i)throw new Error(`Font ${e} does not have a defined family name.`);if(i!==Ci&&!n)throw new Error(`Font ${e} does not have a defined rule declaration.`);const o=yield function(e,t){return Si(this,void 0,void 0,(function*(){return(yield Promise.all(Object.keys(e).map((i=>Si(this,void 0,void 0,(function*(){const n=yield t(i,e[i]);return[i,n]({},e),{[t]:i})),{})}))}(t,((e,t)=>Ai(this,void 0,void 0,(function*(){if(t){const n=new FontFace(i,`url(${t})`,{style:"normal",weight:`${Ii[e]}`}),o=yield n.load();return yield document.fonts.add(o),o}}))));dt.info("All custom fonts finished loading.",o)}catch(e){dt.error("Error loading custom fonts."),dt.error(e)}}))}(n,o)),yield Ti[e]}else if(null===(i=e.product)||void 0===i?void 0:i.font){const t=ont;(e=>e in Ri)(t)?n=t:dt.error(`Unrecognized font "${t}" provided on the product widget configs.`)}const{family:r,familyRuleDeclaration:s}=Ri[n];return dt.info("Using font",r,s),null!=s?s:null}))}function ki(e,t,i){if(void 0===i||""===i)return;const[n,...o]=t;1!==t.length?(e[n]||(e[n]={}),ki(e[n],o,i)):e[n]=i}const Oi={product:"widgets.product",sizeSampling:"widgets.sizeSampling",rollup:"widgets.rollup",fonts:"widgets.fonts"},Li=Object.keys(Oi),Pi={product:{noRegOnPDP:e=>e.noRegOnPDP,theme:e=>e.theme,logoColor:e=>e.logoColor,logoSize:e=>e.logoSize,font:e=>e.font,fontSize:e=>e.fontSize,textColor:e=>e.textColor,ctaTextColor:e=>e.ctaTextColor,alignment:e=>e.alignment,maxWidth:e=>e.maxWidth,ctaTextTransform:e=>e.ctaTextTransform,recommendationUnderline:e=>e.recommendationUnderline,"margin.top":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.top},"margin.right":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.right},"margin.bottom":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.bottom},"margin.left":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.left},"button.textColor":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.textColor},"button.backgroundColor":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.backgroundColor},"button.borderColor":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.borderColor},"button.borderRadius":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.borderRadius},"button.boxShadow":e=>{var t;return null===(t=e.button)||void 0===t?void 0:t.boxShadow},"button.univGuidance.displayScale":e=>{var t,i;return null===(i=null===(t=e.button)||void 0===t?void 0:t.univGuidance)||void 0===i?void 0:i.displayScale},"univGuidance.displayScale":e=>{var t;return null===(t=e.univGuidance)||void 0===t?void 0:t.displayScale},"univGuidance.displayText":e=>{var t;return null===(t=e.univGuidance)||void 0===t?void 0:t.displayText},"univGuidance.scale.indicatorColor":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.indicatorColor},"univGuidance.scale.gradientAccentColor":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.gradientAccentColor},"univGuidance.scale.backgroundColor":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.backgroundColor},"univGuidance.scale.labelColor":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.labelColor},"univGuidance.scale.labelTextTransform":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.labelTextTransform},"univGuidance.scale.position":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.position},"univGuidance.scale.style":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.style},"univGuidance.scale.horizontalSpacing":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.horizontalSpacing},"univGuidance.scale.labelFontSize":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.labelFontSize},"univGuidance.scale.ugTextFontSize":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.ugTextFontSize},"univGuidance.scale.ugTextTextTransform":e=>{var t,i;return null===(i=null===(t=e.univGuidance)||void 0===t?void 0:t.scale)||void 0===i?void 0:i.ugTextTextTransform},"univGuidance.scale.ugTextFontWeight}},sizeSampling:{backgroundColor:e=>e.backgroundColor,borderColor:e=>e.borderColor,caretDisabledColor:e=>e.caretDisabledColor,caretEnabledColor:e=>e.caretEnabledColor,maxWidth:e=>e.maxWidth,linkTextColor:e=>e.linkTextColor,textColor:e=>e.textColor,"margin.top":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.top},"margin.right":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.right},"margin.bottom":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.bottom},"margin.left":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.left}},rollup:{primaryBackgroundColor:e=>e.primaryBackgroundColor,primaryTextColor:e=>e.primaryTextColor,primaryBorderColor:e=>e.primaryBorderColor,explanationBackgroundColor:e=>e.explanationBackgroundColor,explanationTextColor:e=>e.explanationTextColor,explanationIconColor:e=>e.explanationIconColor,maxWidth:e=>e.maxWidth,"margin.top":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.top},"margin.right":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.right},"margin.bottom":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.bottom},"margin.left":e=>{var t;return null===(t=e.margin)||void 0===t?void 0:t.left}},fonts:{"base.light":e=>{var t;return null===(t=e.base)||void 0===t?void 0:t.light},"base.regular":e=>{var t;return null===(t=e.base)||void 0===t?void 0:t.regular},"base.medium":e=>{var t;return null===(t=e.base)||void 0===t?void 0:t.medium},"base.semiBold":e=>{var t;return null===(t=e.base)||void 0===t?void 0:t.semiBo?void 0:t.bold}}},Ui=new RegExp(`^(widgets\\.)(?!${Li.joingetmplingBanner":e,Mi=e=e((t=>Bi(t)in e));function Fi(e,t){var i;dt.debug("Building widget config object.");const n=function(e,t=Li){return Object.entries(e).reduce(((e,[i,n])=>{for(const o of t){const t=Oi[o],r=zi(i);i.startsWith(t)&&ki(e,r.split("."),n)}return e}),{})}(e,t),o=function(e,t="JSON parsing error"){return e&&ct(e,t)}(pt().configOverride,"Skipping unparseable configOverride"),r={widgets:o?Mi(o)?{product:o}:o:void 0};dt.debug("Parsed widget config override object.",r);for(const e of Li){const t=Bi(e),o=null===(i=r.widgets)||void 0===i?void 0:i[t];if(o){const t=Oi[e].split("."),i=Pi[e];for(const[e,r]of Object.entries(i))ki(n,[...t,...e.split(".")],r(o))}}return n}function Wi(e,t){return i=this,n=void 0,r=function*(){const i=yield Ei(e);t.setProperty("--font-family",i)},new((o=void 0)||(o=Promise))((function(e,t){function s(e){try{a(r.next(e))}catch(e){t(e)}}function l(e){try{a(r.throw(e))}catch(e){t(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(s,l)}a((r=r.apply(i,n||[])).next())}));var i,n,o,r}function Ni(e,t){var i,n,o,r,s,l,a,d,c,u,p,f,g,h;const{margin:v,alignment:m,logoColor:y,logoSize:w,fontSize:b,textColor:x,ctaTextTransform:_,ctaTextColor:$,univGuidance:S,button:{textColor:A,backgroundColor:C,borderColor:R,borderRadius:I,boxShadow:T}={}}=e,E=t;E.setProperty("--alignment",null!=m?m:null),E.setProperty("--margin-top",null!==(i=null==v?void 0:v.top)&&void 0!==i?i:null),E.setProperty("--margin-right",null!==(n=null==v?void 0:v.right)&&void 0!==n?n:null),E.setProperty("--margin-bottom",null!==(o=null==v?void 0:v.bottom)&&void 0!==o?o:null),E.setProperty("--margin-left",null!==(r=null==v?void 0:v.left)&&void 0!==r?r:null);const k=null==S?void 0:S.scale,O="white"===y?"#fff":"black"===y?"#000":void 0,L="white"===y?"#000":void 0;E.setProperty("--t-logo-bg-color",null!=O?O:null),E.setProperty("--t-logo-size-button",null!=w?w:null),E.setProperty("--t-logo-size-standard",null!=w?w:null),E.setProperty("--t-logo-size-slim",null!=w?w:null),E.setProperty("--t-logo-text-color",null!=L?L:null),E.setProperty("--font-size",null!=b?b:null),E.setProperty("--text-color",null!=x?x:null),E.setProperty("--cta-text-color",null!=$?$:null),E.setProperty("--cta-text-transform",null!=_?_:null),E.setProperty("--ug-scale-label-text-color",null!==(s=null==k?void 0:k.labelColor)&&void 0!==s?s:null),E.setProperty("--ug-scale-horizontal-spacing",null!==(l=null==k?void 0:k.horizontalSpacing)&&void 0!==l?l:null),E.setProperty("--ug-scale-label-text-transform",null!==(a=null==k?void 0:k.labelTextTransform)&&void 0!==a?a:null),E.setProperty("--ug-scale-gradient-color",null!==(d=null==k?void 0:k.gradientAccentColor)&&void 0!==d?d:null),E.setProperty("--ug-scale-background-color",null!==(c=null==k?void 0:k.backgroundColor)&&void 0!==c?c:null),E.setProperty("--ug-scale-indicator-color",null!==(u=null==k?void 0:k.indicatorColor)&&void 0!==u?u:null),E.setProperty("--ug-scale-label-font-size",null!==(p=null==k?void 0:k.labelFontSize)&&void 0!==p?p:null),E.setProperty("--ug-scale-ug-text-font-size",null!==(f=null==k?void 0:k.ugTextFontSize)&&void 0!==f?f:null),E.setProperty("--ug-scale-ug-text-text-transform",null!==(g=null==k?void 0:k.ugTextTextTransform)&&void 0!==g?g:null),E.setProperty("--ug-scale-ug-text-font-weight",null!==(h=null==k?void 0:k.ugTextFontWeight)&&void 0!==h?h:null),E.setProperty("--button-text-color",null!=A?A:null),E.setProperty("--button-background-color",null!=C?C:null),E.setProperty("--button-border-color",null!=R?R:null),E.setProperty("--button-border-radius",null!=I?I:null),E.setProperty("--button-box-shadow",null!=T?T:null)}function ji(e){switch(e){case Xt.Female:return Xt.Female;case Xt.Male:return Xt.Male;default:return}}var Di=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Gi=class extends e.oi{constructor(){super(),$t(((e,t)=>{t&&this.styleId!=t?this.styleId=t:this.updateFitRec(e)})),pe.addEventListener("resize",(e=>{dt.trace("resize detected - trigger height update",e),this._heightUpdate()})),document.fonts.onloadingdone=()=>{dt.trace("Font loading complete"),this._heightUpdate()},pe.addEventListener("triggerOpen",(e=>{dt.debug("triggerOpen event handling in tf-product-widget",e),this._sendOpenEvent(this._fitRec)}))}updateFitRec(t){var i,n,o,r,s,l,a,d,c;return l=this,a=void 0,c=function*(){const l=null==this?void 0:this.styleId;if(!l)return void(this._fitRec=void 0);const a=yield Gt([l]),d=(null==a?void 0:a.locale)||Ge().locale;d&&(yield pi(d));const c=gi(l);this._fitRec=c?c.productResult:null===(i=null==a?void 0:a.productResults)||void 0===i?void 0:i[l];const{widgets:u={}}=Fi((null==a?void 0:a.configs.widget)||{},["product","fonts"]);let p;Wi(u,this.style).then((()=>{dt.info("Fonts loaded. Updating product widget height."),this._heightUpdate()})),u.product&&(Ni(u.product,this.style),this._widthUpdate(u.product.maxWidth)),(null===(n=null==u?void 0:u.product)||void 0===n?void 0:n.noRegOnPDP)&&(p=yield function(){return e=this,t=void 0,n=function*(){const{storeKey:e}=Ge();yield Lt();const t=yield Rt({path:`/profile/public/v3/${e}/profiles`});if(t.ok)return yield t.json()},new((i=void 0)||(i=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}));var e,t,i,n}());const f=(p?p.length:0)>1,g=(null===(o=null==u?void 0:u.product)||void 0===o?void 0:o.noRegOnPDP)&&!f;var h;this._recipientAlias=(null==c?void 0:c.alias)||(null===(r=null==a?void 0:a.profiles)||void 0===r?void 0:r.recipient.alias),this._fitRec&&Wt(this._fitRec)?this._widgetTemplate=e.dy`<product-widget-element
        .styleId=${this.styleId}
        .recipientAlias=${this._recipientAlias}
        .fitRec=${this._fitRec}
        .productWidgetConfigs=${u.product}
        .sendOpenEvent=${()=>this._sendOpenEvent(this._fitRec)}
        .noRegFromWidget=${g}
      ></product-widget-element>`:this._widgetTemplate=void 0,!c&&(h=null==a?void 0:a.productResults)&&Object.values(h).some((e=>e.status===m.EstimationInProgress))?(dt.debug("There is at least one estimation in progress. Queueing a delayed poll."),setTimeout((()=>this.updateFitRec(t)),3e3)):dt.debug("All widget estimations settled.");const v=null===(s=this._fitRec)||void 0===s?void 0:s.status;t&&v!==m.EstimationInProgress&&this._sendOpenEvent(this._fitRec)},new((d=void 0)||(d=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function n(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof d?o:new d((function(e){e(o)}))).then(i,n)}o((c=c.apply(l,a||[])).next())}))}updated(e){e.has("styleId")&&this.styleId&&this.updateFitRec(!1),this._heightUpdate()}render(){return dt.debug("starting render",performance.now()),this._widgetTemplate?e.dy`<div class="product-widget-wrapper">
      ${this._widgetTemplate}
    </div>`:e.dy``}_heightUpdate(){requestAnimationFrame((()=>{const e=this.getBoundingClientRect().height;if(e!==this._lastHeight){this._lastHeight=e;const{iframeId:t}=He(),i={type:"widgetHeight",height:e,iframeId:t};dt.debug("updated",i,performance.now()),xt(i)}}))}_widthUpdate(e){requestdth",width:e})}))}_sendOpenEvent(e){if(this.styleId&&gi(this.styleId))return;const{iframeId:t,widgetLocation:i}=He(),n=(null==e?void 0:e.gender)&&(null==e?void 0:e.ageGroup)&&si(e.gender,e.ageGroup),o="true"===ge.TFP_WIDGETS_OFFLINE?ge.TFP_WIDGETS_OFFLINE_IFRAME_PATH||"":Ut((()=>{var t;let o;switch(null===(t=this._fitRec)||void 0===t?void 0:t.status){case m.InvalidDepartment:o=Kt.InvalidDepartment;break;case m.Success:o=Kt.FitDetails;break;case m.SizeNotAvailable:o=Kt.SizeNotAvailable}return Object.assign(Object.assign({},Ye()),{gender:(null==e?void 0:e.gender)&&ji(e.gender),ageGroup:null==e?void 0:e.ageGroup,category:null==e?void 0:e.category,department:n,productType:(null==e?void 0:e.category)&&n&&li(e.category,e.classification,n),originWidget:"tfc-fitrec-product",style:(null==e?void 0:e.styleId)&&JSON.stringify([e.styleId]),productWidgetResult:JSON.stringify(e),ips:o,widgetLocation:i})})()),r="true"===ge.TFP_WIDGETS_OFFLINE?ge.TFP_WIDGETS_OFFLINE_IFRAME_ORIGIN||"":Ne,s=Te();xt({type:"appOpen",iframeOrigin:r,iframeId:t,iframePathAndHash:o,widgetToken:me()||("true"===ge.TFP_WIDGETS_OFFLINE?"testtoken":void 0),mobileModalSize:null==s?void 0:s.configs.feature.mobileModalSize})}};Gi.styles=e.iv`
    :host {
      --margin-top: 0;
      --margin-right: 0;
      --margin-bottom: 0;
      --margin-left: 0;
      --alignment: start;

      --font-family: 'Montserrat', sans-serif;
      --font-size: 12px;
      --t-logo-bg-color: #d31245;
      --t-logo-size-standard: 2.333em;
      --t-logo-size-button: 1.1667em;
      --t-logo-size-slim: 1em;
      --t-logo-text-color: #fff;
      --text-color: #000;
      --cta-text-color: #000;
      --cta-text-transform: none;
      --ug-scale-label-font-size: 11px;
      --ug-scale-ug-text-font-size: 10px;
      --ug-scale-ug-text-font-weight: 600;
      --ug-scale-ug-text-text-transform: uppercase;
      --ug-scale-label-text-color: #999;
      --ug-scale-label-text-transform: uppercase;
      --ug-scale-gradient-color: #000;
      --ug-scale-background-color: #ccc;
      --ug-scale-indicator-color: #d31145;
      --ug-scale-horizontal-spacing: 10px;
      --button-text-color: #000;
      --button-background-color: #fff;
      --button-border-color: #ddd;
      --button-border-radius: 5px;
      --button-box-shadow: 0px 0px 0px #ddd;
    }

    .product-widget-wrapper {
      text-align: var(--alignment);
      padding: var(--margin-top) var(--margin-right) var(--margin-bottom)
        var(--margin-left);
    }
  `,Di([n()],Gi.prototype,"styleId",void 0),Di([r()],Gi.prototype,"_widgetTemplate",void 0),Di([r()],Gi.prototype,"_fitRec",void 0),Di([r()],Gi.prototype,"_recipientAlias",void 0),Gi=Di([t("tf-product-widget")],Gi);function Hi(e,t,i){return n=this,o=void 0,s=function*(){const{storeKey:n,integrationPlatform:o}=Ge(),r=Te(),s=null==r?void 0:r.locale,l=(null==r?void 0:r.productResults)&&(null==r?void 0:r.productResults[e]);(null==l?void 0:l.status)&&(yield Lt(),yield It({path:`/profile/public/v3/${n}/analytics/fit-inquiry`,body:JSON.stringify({styleId:e,uiLocale:s,deviceType:Ce(),platform:o,status:null==l?void 0:l.status,context:t,shopForOthersEnabled:null==r?void 0:r.configs.feature.sfoEnabled,kidsEnabled:!0,universalGuidance:i})}))},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{a(s.next(e))}catch(e){t(e)}}function l(e){try{a(s.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,l)}a((s=s.apply(n,o||[])).next())}));var n,o,r,s}var Vi=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let Ki=class extends e.oi{constructor(){super(),this._ugScale=t=>{var i,n,o;if(!t)return;const r=(null===(o=null===(n=null===(i=this._productWidgetConfigs)||void 0===i?void 0:i.univGuidance)||void 0===n?void 0:n.scale)||void 0===o?void 0:o.style)||"Gradient";return e.dy`<ug-scale
      .ugDetails=${t}
      .ugScaleStyle=${r}
      .ugDisplayText=${!1}
      .ugScalePosition=${"above"}
      aria-hidden="true"
    ></ug-scale>`},$t(((e,t)=>{t&&this.styleId!=t?this.styleId=t:this.updateFitRec(e)})),pe.addEventListener("resize",(e=>{dt.trace("resize detected - trigger height update",e),this._heightUpdate()})),document.fonts.onloadingdone=()=>{dt.trace("Font loading complete"),this._heightUpdate()}}updateFitRec(t){var i,n,o,r,s,l,a,d,c;return l=this,a=void 0,c=function*(){const l=null==this?void 0:this.styleId;if(!l)return void(this._fitRec=void 0);const a=yield Gt([l],"rollup");let d;l.startsWith("tfTest-")||(d=yield function(e){return t=this,i=void 0,o=function*(){const{storeKey:t}=Ge(),i=Te(),n=null==i?void 0:i.locale,o=n?`locale=${encodeURIComponent(n)}`:"",r=yield Rt({path:`/profile/public/v3/${t}/products/${e}?${o}`});if(r.ok)return yield r.json()},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,l)}a((o=o.apply(t,i||[])).next())}));var t,i,n,o}(l));const c=(null==a?void 0:a.locale)||Ge().locale;c&&(yield pi(c));const u=gi(l);this._fitRec=(null==u?void 0:u.productResult)||(null===(i=null==a?void 0:a.productResults)||void 0===i?void 0:i[l]),this._isKidsProduct=(null===(n=this._fitRec)||void 0===n?void 0:n.ageGroup)===Qt.Child,this._kidsRollupWidgetEnabled=null==a?void 0:a.configs.feature.kidsRollupWidgetEnabled,this._rollupWidgetMode=null==a?void 0:a.configs.feature.rollupWidgetMode;const{widgets:p={}}=Fi((null==a?void 0:a.configs.widget)||{},["product","fonts","rollup"]);var f;Wi(p,this.style).then((()=>{dt.info("Fonts loaded. Updating size sampling widget height."),this._heightUpdate()})),p.product&&Ni(p.product,this.style),p.rollup&&this._updateConfigProperties(p.rollup),this._universalGuidance=u?null===(o=this._fitRec)||void 0===o?void 0:o.universalGuidance:null==d?void 0:d.universalGuidance,this._fitRec&&(this._fitRec.universalGuidance=void 0,this._fitRec.heightWeightRecSizeName=void 0),this._recipientAlias=(null==u?void 0:u.alias)||(null===(r=null==a?void 0:a.profiles)||void 0===r?void 0:r.recipient.alias),this._fitRec&&Wt(this._fitRec)?(this._widgetTemplate=e.dy` <product-widget-element
        .styleId=${this.styleId}
        .recipientAlias=${this._recipientAlias}
        .fitRec=${this._fitRec}
        .productWidgetConfigs=${p.product}
        .sendOpenEvent=${()=>this._sendOpenEvent(this._fitRec)}
      ></product-widget-element>`,this.styleId&&Hi(this.styleId,"rollup",this._universalGuidance)):this._widgetTemplate=void 0,!u&&(f=null==a?void 0:a.productResults)&&Object.values(f).some((e=>e.status===m.EstimationInProgress))?(dt.debug("There is at least one estimation in progress. Queueing a delayed pollupdateFitRec(t)),3e3)):dt.debug("All widget estimations settled.");const g=null===(s=this._fitRec)||void 0===s?void 0:s.status;t&&g!==m.EstimationInProgress&&this._sendOpenEvent(this._fitRec)},new((d=void 0)||(d=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function n(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof d?o:new d((function(e){e(o)}))).then(i,n)}o((c=c.apply(l,a||[])).next())}))}updated(e){e.has("styleId")&&this.styleId&&this.updateFitRec(!1),this._heightUpdate()}render(){var t,i,n,o,r;if(!this.styleId||!this._fitRec||"Hidden"===this._rollupWidgetMode||this._isKidsProduct&&!this._kidsRollupWidgetEnabled||!this._widgetTemplate)return e.dy``;const s=(null===(n=null===(i=null===(t=this._productWidgetConfigs)||void 0===t?void 0:t.univGuidance)||void 0===i?void 0:i.scale)||void 0===n?void 0:n.style)||"Gradient",l=null===(o=this._universalGuidance)||void 0===o?void 0:o.social,a=null===(r=this._universalGuidance)||void 0===r?void 0:r.source,d=a&&["BrandCategory","BrandClass"].includes(a),c=["MinimalWithUgText","GradientWithUgText","BarWithUgText"].includes(s);return dt.debug("starting render",performance.now()),e.dy`<div class="rollup-widget-wrapper">
      <div class="rollup-widget">
        <button @click=${()=>this._sendOpenEvent(this._fitRec)}>
          <div class="ug-text-wrapper ${c?"hide-ug-text":""}">
            <ug-text .ugDetails=${this._universalGuidance}></ug-text>
          </div>
          <div class="social-text-wrapper">
            ${(null==l?void 0:l.isAtMaxDataCount)?(0,f.WI)("Based on what shoppers bought & kept."):d&&(null==l?void 0:l.dataCount)?(0,f.WI)(`Based on similar items ${null==l?void 0:l.dataCount} shoppers bought & kept.`):(null==l?void 0:l.dataCount)?(0,f.WI)(`Based on what ${null==l?void 0:l.dataCount} shoppers bought & kept.`):e.dy``}
          </div>

          <div class="ug-scale-wrapper">
            ${this._ugScale(this._universalGuidance)}
          </div>
          <div class="rollup-widget-explanation">
            <div class="explanation-svg-wrapper">${qi}</div>

            ${(0,f.WI)("True Fit analyzes millions of purchases every day to learn how styles fit.")}
          </div>
          <div class="widget-wrapper">${this._widgetTemplate}</div>
        </button>
      </div>
    </div>`}_heightUpdate(){requestAnimationFrame((()=>{const e=this.getBoundingClientRect().height;if(e!==this._lastHeight){this._lastHeight=e;const{iframeId:t}=Ke(),i={type:"widgetHeight",height:e,iframeId:t};dt.debug("updated",i,performance.now()),xt(i)}}))}_sendOpenEvent(e){if(this.styleId&&gi(this.styleId))return;const{iframeId:t}=Ke(),i=(null==e?void 0:e.gender)&&(null==e?void 0:e.ageGroup)&&si(e.gender,e.ageGroup),n="true"===ge.TFP_WIDGETS_OFFLINE?ge.TFP_WIDGETS_OFFLINE_IFRAME_PATH||"":Ut((e=>{let t;switch(null==e?void 0:e.status){case m.InvalidDepartment:t=Kt.InvalidDepartment;break;case m.Success:t=Kt.FitDetails;break;case m.SizeNotAvailable:t=Kt.SizeNotAvailable}return Object.assign(Object.assign({},Ye()),{gender:(null==e?void 0:e.gender)&&ji(e.gender),ageGroup:null==e?void 0:e.ageGroup,category:null==e?void 0:e.category,department:i,productType:(null==e?void 0:e.category)&&i&&li(e.category,e.classification,i),originWidget:"tfc-fitrec-rollup",style:(null==e?void 0:e.styleId)&&JSON.stringify([e.styleId]),productWidgetResult:JSON.stringify(e),ips:t})})(e)),o="true"===ge.TFP_WIDGETS_OFFLINE?ge.TFP_WIDGETS_OFFLINE_IFRAME_ORIGIN||"":Ne,r=Te();xt({type:"appOpen",iframeOrigin:o,iframeId:t,iframePathAndHash:n,widgetToken:me()||("true"===ge.TFP_WIDGETS_OFFLINE?"testtoken":void 0),mobileModalSize:null==r?void 0:r.configs.feature.mobileModalSize})}_updateConfigProperties(e){var t,i,n,o;const{primaryTextColor:r,primaryBackgroundColor:s,primaryBorderColor:l,explanationBackgroundColor:a,explanationTextColor:d,explanationIconColor:c,margin:u={},maxWidth:p}=e,f=this.style;f.setProperty("--rollup-primary-text-color",null!=r?r:null),f.setProperty("--rollup-primary-background-color",null!=s?s:null),f.setProperty("--rollup-primary-border-color",null!=l?l:null),f.setProperty("--rollup-explanation-background-color",null!=a?a:null),f.setProperty("--rollup-explanation-text-color",null!=d?d:null),f.setProperty("--rollup-explanation-icon-color",null!=c?c:null),f.setProperty("--rollup-max-width",null!=p?p:null),f.setProperty("--rollup-margin-top",null!==(t=null==u?void 0:u.top)&&void 0!==t?t:null),f.setProperty("--rollup-margin-right",null!==(i=null==u?void 0:u.right)&&void 0!==i?i:null),f.setProperty("--rollup-margin-bottom",null!==(n=null==u?void 0:u.bottom)&&void 0!==n?n:null),f.setProperty("--rollup-margin-left",null!==(o=null==u?void 0:u.left)&&void 0!==o?o:null)}};Ki.styles=e.iv`
    :host {
      --font-family: 'Montserrat', sans-serif;

      --rollup-margin-top: 0;
      --rollup-margin-right: 0;
      --rollup-margin-bottom: 0;
      --rollup-margin-left: 0;
      --rollup-max-width: 430px;

      --rollup-primary-background-color: #fff;
      --rollup-primary-text-color: #272932;
      --rollup-primary-border-color: #ddd;
      --rollup-explanation-background-color: #f8f8f8;
      --rollup-explanation-text-color: #2b2b2b;
      --rollup-explanation-icon-color: #000;

      --font-size: 12px;
      --t-logo-bg-color: #d31245;
      --t-logo-size-standard: 2.333em;
      --t-logo-size-button: 1.1667em;
      --t-logo-size-slim: 1em;
      --t-logo-text-color: #fff;
      --text-color: #000;
      --cta-text-color: #000;
      --cta-text-transform: none;
      --ug-scale-label-font-size: 11px;
      --ug-scale-ug-text-font-size: 10px;
      --ug-scale-ug-text-font-weight: 600;
      --ug-scale-ug-text-text-transform: uppercase;
      --ug-scale-label-text-color: #999;
      --ug-scale-label-text-transform: uppercase;
      --ug-scale-gradient-color: #000;
      --ug-scale-background-color: #ccc;
      --ug-scale-indicator-color: #d31145;
      --ug-scale-horizontal-spacing: 10px;
      --button-text-color: #000;
      --button-background-color: #fff;
      --button-border-color: #ddd;
      --button-border-radius: 5px;
      --button-box-shadow: 0px 0px 0px #ddd;
    }

    .rollup-widget-wrapper {
      padding: var(--rollup-margin-top) var(--rollup-margin-right)
        var(--rollup-margin-bottom) var(--rollup-margin-left);
    }

    .rollup-widget {
      font-family: var(--font-family);
      font-size: 12px;

      max-width: var(--rollup-max-width);
      background-color: var(--rollup-primary-background-color);
      color: var(--rollup-primary-text-color);
      border: 1px solid var(--rollup-primary-border-color);
    }

    button {
      width: 100%;
      height: 100%;
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: transparent;
      border: 0;
      padding: 20px 10px 20px 10px;
      text-align: left;
      cursor: pointer;
      -webkit-appearance: none;
      border-radius: 0;
      -webkit-border-radius: 0;
    }

    button:active {
      color: inherit;
    }

    .rollup-widget-explanation {
      display: flex;
      align-items: center;
      gap: 10px;

      background-color: var(--rollup-explanation-background-color);
      color: var(--rollup-explanation-text-color);

      border-radius: 10px;
      padding: 15px 20px;
    }

    .widget-wrapper,
    .social-text-wrapper,
    .ug-scale-wrapper,
    .ug-text-wrapper {
      width: 100%;
      text-align: center;
    }

    .social-text-wrapper {
      margin-bottom: 10px;
    }

    .widget-wrapper {
      margin-top: 20px;
    }

    ug-scale {
      display: inline-block;
      margin-bottom: 20px;
    }

    .hide-ug-text {
      display: none;
    }

    svg {
      height: 30px;
      width: 30px;
    }
  `,Vi([n()],Ki.prototype,"styleId",void 0),Vi([r()],Ki.prototype,"_widgetTemplate",void 0),Vi([r()],Ki.prototype,"_fitRec",void 0),Vi([r()],Ki.prototype,"_universalGuidance",void 0),Vi([r()],Ki.prototype,"_recipientAlias",void 0),Vi([r()],Ki.prototype,"_isKidsProduct",void 0),Vi([r()],Ki.prototype,"_kidsRollupWidgetEnabled",void 0),Vi([r()],Ki.prototype,"_rollupWidgetMode",void 0),Vi([r()],Ki.prototype,"_productWidgetConfigs",void 0),Ki=Vi([t("tf-rollup-widget")],Ki);const qi=e.YP`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g clip-path="url(#clip0_318_178)">
<path d="M11.9 9.70001H8.5V28H6.9V15.2H3.5V28H3V29.1H3.6H6.9H8.6H11.9H23.6V28H11.9V9.70001ZM4.6 28V16.3H5.7V28H4.6ZM9.6 28V10.8H10.7V28H9.6Z" fill="var(--rollup-explanation-icon-color)"/>
<path d="M23.0002 16.4V5.20001H19.7002V15.2C20.1002 15.2 20.5002 15.2 20.8002 15.3V6.30001H21.9002V15.7C22.3002 15.9 22.7002 16.1 23.0002 16.4Z" fill="var(--rollup-explanation-icon-color)"/>
<path d="M17.4001 15.7V13.6H14.1001V20.8C14.1001 19.6 14.5001 18.4 15.2001 17.5V14.7H16.3001V16.4C16.7001 16.1 17.0001 15.9 17.4001 15.7Z" fill="var(--rollup-explanation-icon-color)"/>
<path d="M28.1001 28.2L24.6001 24.8C25.2001 23.9 25.6001 22.8 25.6001 21.7C25.6001 19.9 24.7001 18.3 23.4001 17.3C23.1001 17 22.7001 16.8 22.3001 16.6C21.9001 16.4 21.6001 16.3 21.2001 16.2C20.8001 16.1 20.5001 16.1 20.1001 16.1C19.3001 16.1 18.6001 16.3 17.9001 16.6C17.5001 16.8 17.1001 17 16.8001 17.3C16.4001 17.6 16.0001 18 15.7001 18.4C15.0001 19.3 14.6001 20.5 14.6001 21.7C14.6001 24.8 17.1001 27.3 20.2001 27.3C21.3001 27.3 22.3001 27 23.2001 26.4L26.6001 29.7C26.8001 30 27.1001 30.1 27.5001 30.1C27.7001 30.1 28.0001 30 28.2001 29.8C28.4001 29.4 28.4001 28.7 28.1001 28.2ZM19.9001 25C18.1001 25 16.6001 23.5 16.6001 21.7C16.6001 20.7 17.0001 19.8 17.7001 19.2C18.3001 18.7 19.1001 18.3 19.9001 18.3C21.7001 18.3 23.2001 19.8 23.2001 21.6C23.3001 23.5 21.8001 25 19.9001 25Z" fill="var(--rollup-explanation-icon-color)"/>
<path d="M14.5001 6.5L21.4001 1.9V3.1L22.5001 3.2L22.6001 0.1L19.6001 0L19.5001 1.1L20.5001 1.2L14.8001 5L12.6001 1.6L1.6001 9L2.2001 9.9L12.3001 3.2L14.5001 6.5Z" fill="var(--rollup-explanation-icon-color)"/>
</g>
<defs>
<clipPath id="clip0_318_178">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
`;var Ji=function(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},Zi=function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function l(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}a((n=n.apply(e,t||[])).next())}))};let Yi=class extends e.oi{constructo._productInfo)}));const{productInfo:e}=Ve();this.updateFitRec(!1,e&&JSON.parse(e));const{retailerOrigin:t}=Ge();pe.addEventListener("message",(e=>Zi(this,void 0,void 0,(function*(){if(e.origin===t||e.origin===location.origin){const t=e.data;"productInfo"===t.type&&(dt.debug("productInfo event",e),this.updateFitRec(!1,JSON.parse(t.productInfo)))}})))),pe.addEventLisheightUpdate()})),document.fonts.onloadingdone=()=>{dt.trace("Font loading complete"),this._heightUpdate()}}updateFitRec(t,i){var n;return Zi(this,void 0,void 0,(function*(){const o=sessionStorage.getItem("TFSizeSamplingBannerDismissed-"+this._storeKey);this._productInfo=i,this._cartInfo=this._getCartInfo(this._productInfo);const{iframeId:r}=Ve();if(!this._cartInfo||"true"===o)return this._fitRecs=void 0,void this._hideBanner();const s=yield Gt(Object.keys(this._cartInfo),"sizeSamplingBanner"),l=(null==s?void 0:s.locale)||Ge().locale;if(l&&(yield pi(l)),this._fitRecs=Object.keys(this._cartInfo).reduce(((e,t)=>{const i=gi(t),n=i?i.productResult:(null==s?void 0:s.productResults)&&(null==s?void 0:s.productResults[t]);return n&&n.recommendable&&n.status!==m.SizeNotAvailable&&Mt.includes(n.status)&&this._cartInfo&&this._cartInfo[t]&&this._cartInfo[t].sizes.length>1&&(e[t]=n),e}),{}),this._index=this._index&&Object.keys(this._fitRecs)[this._index]?this._index:0,0===Object.keys(this._fitRecs).length)return void this._hideBanner();this._sizeSamplingBannerEnabled="off"!==(null==s?void 0:s.configs.feature.sizeSamplingBanner);const{widgets:a={}}=Fi((null==s?void 0:s.configs.widget)||{},["product","fonts","sizeSampling"]);if(Wi(a,thheightUpdate()})),a.product&&Ni(a.product,this.style),a.sizeSampling&&this._updateConfigProperties(a.sizeSampling),this._fitRecs)for(const e in this._fitRecs)this._fitRecs[e].heightWeightRecSizeName=void 0;if(this._currentStyleId=Object.keys(this._fitRecs)[this._index],this._currentStyleId){this._currentFitRec=this._fitRecs[this._currentStyleId];const i=gi(this._currentStyleId);this._recipientAlias=(null==i?void 0:i.alias)||(null===(n=null==s?void 0:s.profiles)||void 0===n?void 0:n.recipient.alias),this._widgetTemplate=e.dy`<product-widget-element
        .styleId=${this._currentStyleId}
        .recipientAlias=${this._recipientAlias}
        .fitRec=${this._currentFitRec}
        .productWidgetConfigs=${a.product}
        ._currentFitRec)}
      ></product-widget-element>`,!i&&(d=null==s?void 0:s.productResults)&&Object.ationInProgress))?(dt.debug("There is at least one estimation in progress. Queueing a delayed polls._productInfo)),3e3)):dt.debug("All widget estimations settled.");const o=this._currentFitRec.status;t&&o!==m.EstimationInProgress&&this._sendOpenEvent(this._currentFitRec),Hi(this._currentStyleId,"sizeSamplingBanner");const l={type:"sizeSamplingBannerDisplay",isDisplayed:!0,iframeId:r};dt.debug("sizeSamplingBannerDisplayEvent",l),xt(l),this._heightUpdate()}var d}))}render(){if(dt.debug("starting render tf-size-sampling-widget",performance.now()),this._fitRecs&&Object.keys(this._fitRecs).length&&void 0!==this._index&&this._cartInfo&&this._currentStyleId&&this._cartInfo[this._currentStyleId]&&this._sizeSamplingBannerEnabled){const t=Object.keys(this._fitRecs).length,i=t>1,n=(0,f.WI)("Dismiss"),o=(0,f.WI)("Dismiss all"),r=this._cartInfo[this._currentStyleId].sizes.length,s=this._cartInfo[this._currentStyleId].styleName,l=(0,f.WI)(f.Bd`You have ${r} sizes for ${s}.`),a=this._index+1;return e.dy`<div class="size-sampling-banner">
        <div class="size-sampling-banner-wrapper">
          ${i?e.dy`<div class="size-sampling-banner-card-stack"></div>`:e.dy``}
          <div class="size-sampling-banner-card">
            <div data-element-id="size-sampling-message">
              ${l}
            </div>
            <div class="product-widget-container">${this._widgetTemplate}</div>
            <div class="link-wrapper">
              ${i?e.dy`<span class="page ${b()}"
                    >${1===a?e.dy`<span class="left-caret ${b()}"
                          ><svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.89795 0.615784L0.752125 5.49997L5.89795 10.4999"
                              stroke="var(--banner-caret-disabled-color)"
                              stroke-linecap="round"
                            /></svg
                        ></span> `:e.dy`<button
                          class="left-caret ${b()}"
                          @click="${()=>{void 0!==this._index&&(this._index--,this.updateFitRec(!1,this._productInfo))}}"
                        >
                          <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.89795 0.615784L0.752125 5.49997L5.89795 10.4999"
                              stroke="var(--banner-caret-enabled-color)"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button> `}<span
                      >${this._index+1} / ${t}</span
                    >${a===t?e.dy`<span class="right-caret ${b()}"
                          ><svg
                            width="8"
                            height="11"
                            viewBox="0 0 8 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.32007 0.615784L6.46589 5.49997L1.32007 10.4999"
                              stroke="var(--banner-caret-disabled-color)"
                              stroke-linecap="round"
                            /></svg
                        ></span> `:e.dy`<button
                          class="right-caret ${b()}"
                          @click="${()=>{void 0!==this._index&&(this._index++,this.updateFitRec(!1,this._productInfo))}}"
                        >
                          <svg
                            width="8"
                            height="11"
                            viewBox="0 0 8 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.32007 0.615784L6.46589 5.49997L1.32007 10.4999"
                              stroke="var(--banner-caret-enabled-color)"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button> `}</span
                  >`:e.dy``}
              <span
                class="dismiss"
                data-element-id="size-sampling-dismiss-message"
                @click="${this._dismissBanner}"
                >${i?o:n}</span
              >
            </div>
          </div>
        </div>
      </div>`}return e.dy``}_heightUpdate(){requestAnimationFrame((()=>{const e=this.getBoundingClientRect().height;if(e!==this._lastHeight){this._lastHeight=e;const{iframeId:t}=Ve(),i={type:"widgetHeight",height:e,iframeId:t};dt.debug("updated",i,performance.now()),xt(i)}}))}_getCartInfo(e){return null==e?void 0:e.reduce(((e,t)=>{const i=e[t.styleId]=e[t.styleId]||{},n=i.sizes=i.sizes||[];return t.size&&!n.includes(t.size)&&n.push(t.size),i.styleName=t.styleName,e}),{})}_sendOpenEvent(e){if(this._currentStyleId&&gi(this._currentStyleId))return;const{iframeId:t}=Ve(),i=(null==e?void 0:e.gender)&&(null==e?void 0:e.ageGroup)&&si(e.gender,e.ageGroup),n="true"===ge.TFP_WIDGETS_OFFLINE?ge.TFP_WIDGETS_OFFLINE_IFRAME_PATH||"":Ut((e=>{let t;switch(null==e?void 0:e.status){case m.InvalidDepartment:t=Kt.InvalidDepartment;break;case m.Success:t=Kt.FitDetails;break;case m.SizeNotAvailable:t=Kt.SizeNotAvailable}return Object.assign(Object.assign({},Ye()),{gender:(null==e?void 0:e.gender)&&ji(e.gender),ageGroup:null==e?void 0:e.ageGroup,category:null==e?void 0:e.category,department:i,productType:(null==e?void 0:e.category)&&i&&li(e.category,e.classification,i),originWidget:"tfc-fitrec-size-sampling",style:(null==e?void 0:e.styleId)&&JSON.stringify([e.styleId]),productWidgetResult:JSON.stringify(e),ips:t})})(e)),o="true"===ge.TFP_WIDGETS_OFFLINE?ge.TFP_WIDGETS_OFFLINE_IFRAME_ORIGIN||"":Ne,r=Te();xt({type:"appOpen",iframeOrigin:o,iframeId:t,iframePathAndHash:n,widgetToken:me()||("true"===ge.TFP_WIDGETS_OFFLINE?"testtoken":void 0),mobileModalSize:null==r?void 0:r.configs.feature.mobileModalSize})}_dismissBanner(){sessionStorage.setItem("TFSizeSamplingBannerDismissed-"+this._storeKey,"true"),this._hideBanner()}_hideBanner(){const{iframeId:e}=Ve(),t={type:"sizeSamplingBannerDisplay",isDisplayed:!1,iframeId:e};dt.debug("sizeSamplingBannerDisplayEvent",t),xt(t);const i={type:"widgetHeight",height:0,iframeId:e};dt.debug("updated",i,performance.now()),xt(i),this._heightUpdate()}_updateConfigProperties(e){var t,i,n,o;const{backgroundColor:r,borderColor:s,margin:l={},maxWidth:a,caretDisabledColor:d,caretEnabledColor:c,linkTextColor:u,textColor:p}=e,f=this.style;f.setProperty("--banner-background-color",null!=r?r:null),f.setProperty("--banner-border-color",null!=s?s:null),f.setProperty("--banner-max-width",null!=a?a:null),f.setProperty("--banner-link-text-color",null!=u?u:null),f.setProperty("--banner-text-color",null!=p?p:null),f.setProperty("--banner-caret-disabled-color",null!=d?d:null),f.setProperty("--banner-caret-enabled-color",null!=c?c:null),f.setProperty("--banner-margin-top",null!==(t=null==l?void 0:l.top)&&void 0!==t?t:null),f.setProperty("--banner-margin-right",null!==(i=null==l?void 0:l.right)&&void 0!==i?i:null),f.setProperty("--banner-margin-bottom",null!==(n=null==l?void 0:l.bottom)&&void 0!==n?n:null),f.setProperty("--banner-margin-left",null!==(o=null==l?void 0:l.left)&&void 0!==o?o:null)}};Yi.styles=e.iv`
    :host {
      --font-family: 'Montserrat', sans-serif;
      --banner-text-color: #000;
      --banner-link-text-color: #000;
      --banner-background-color: #fff;
      --banner-border-color: #ddd;
      --banner-max-width: auto;
      --banner-margin-top: 0;
      --banner-margin-right: 0;
      --banner-margin-bottom: 0;
      --banner-margin-left: 0;
      --banner-caret-disabled-color: #888;
      --banner-caret-enabled-color: #000;

      --font-size: 12px;
      --t-logo-bg-color: #d31245;
      --t-logo-size-standard: 2.333em;
      --t-logo-size-button: 1.1667em;
      --t-logo-size-slim: 1em;
      --t-logo-text-color: #fff;
      --text-color: #000;
      --cta-text-color: #000;
      --cta-text-transform: none;
      --ug-scale-label-font-size: 11px;
      --ug-scale-ug-text-font-size: 10px;
      --ug-scale-ug-text-font-weight: 600;
      --ug-scale-ug-text-text-transform: uppercase;
      --ug-scale-label-text-color: #999;
      --ug-scale-label-text-transform: uppercase;
      --ug-scale-gradient-color: #000;
      --ug-scale-background-color: #ccc;
      --ug-scale-indicator-color: #d31145;
      --ug-scale-horizontal-spacing: 10px;
      --button-text-color: #000;
      --button-background-color: #fff;
      --button-border-color: #ddd;
      --button-border-radius: 5px;
      --button-box-shadow: 0px 0px 0px #ddd;
    }

    .size-sampling-banner {
      max-width: var(--banner-max-width);
      padding: var(--banner-margin-top) var(--banner-margin-right)
        var(--banner-margin-bottom) var(--banner-margin-left);
    }

    .size-sampling-banner-wrapper {
      position: relative;
      padding: 0 7px 7px 0;

      .size-sampling-banner-card-stack {
        border: 1px solid var(--banner-border-color);
        background-color: var(--banner-background-color);
        position: absolute;
        width: calc(100% - 15px);
        height: calc(100% - 15px);
        right: 0;
        bottom: 0;
        z-index: -1;
        margin-bottom: 1px;
      }

      .size-sampling-banner-card {
        border: 1px solid var(--banner-border-color);
        background-color: var(--banner-background-color);
        font-family: var(--font-family);
        color: var(--banner-text-color);
        font-size: 12px;
        padding: 10px;
      }

      .product-widget-container {
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .link-wrapper {
        overflow: hidden;

        .page.rtl {
          float: left;
        }

        .left-caret,
        .right-caret {
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
          border: none;
          background: transparent;
        }

        .left-caret.rtl,
        .right-caret.rtl {
          transform: scaleX(-1);
        }

        .left-caret {
          padding-right: 5px;
          padding-left: 0;
        }

        .right-caret {
          padding-left: 5px;
          padding-right: 0;
        }

        .dismiss {
          float: right;
          color: var(--banner-link-text-color);
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  `,Ji([r()],Yi.prototype,"_widgetTemplate",void 0),Ji([r()],Yi.prototype,"_productInfo",void 0),Ji([r()],Yi.prototype,"_index",void 0),Ji([r()],Yi.prototype,"_cartInfo",void 0),Ji([r()],Yi.prototype,"_currentStyleId",void 0),Ji([r()],Yi.prototype,"_fitRecs",void 0),Ji([r()],Yi.prototype,"_currentFitRec",void 0),Ji([r()],Yi.prototype,"_recipientAlias",void 0),Ji([r()],Yi.prototype,"_sizeSamplingBannerEnabled",void 0),Ji([r()],Yi.prototype,"_storeKey",void 0),Yi=Ji([t("tf-size-sampling-widget")],Yi);var Xi=o(379),Qi=o.n(Xi),en=o(795),tn=o.n(en),nn=o(569),on=o.n(nn),rn=o(565),sn=o.n(rn),ln=o(216),an=o.n(ln),dn=o(589),cn=o.n(dn),un=o(577),pn={};pn.styleTagTransform=cn(),pn.setAttributes=sn(),pn.insert=on().bind(null,"head"),pn.domAPI=tn(),pn.insertStyleElement=an(),Qi()(un.Z,pn),un.Z&&un.Z.locals&&un.Z.locals;const fn=["userId","registered","locale","widgetHidden","storeExperimentKey","configOverride","configSet","colorId"],gn=["userId","registered","locale"],hn=["userId","registered","locale","widgetHidden","storeExperimentKey","configOverride","configSet"],vn=["userId","registered","locale","widgetHidden","storeExperimentKey","configOverride","configSet"],{token:mn,screenSize:yn,type:wn,locale:bn}=Ge();if(bn?pi(bn):dt.warn("The locale is missing from the hash. Unable to initialize localization."),mn&&ve(mn),Se(yn),"tfc-fitrec-product"===wn){const e=He(),t={};fn.forEach((i=>{t[i]=e[i]})),ft(t),dt.debug("before adding tf-product-widget to page",performance.now());const i=fe.createElement("tf-product-widget");i.setAttribute("styleId",e.styleId),fe.body.appendChild(i)}if("tfc-fitrec-size-sampling"===wn){const e=Ve(),t={};hn.forEach((i=>{t[i]=e[i]})),ft(t),dt.debug("before adding tf-size-sampling-widget to page",performance.now());const i=fe.createElement("tf-size-sampling-widget");fe.body.appendChild(i)}if("tfc-fitrec-rollup"===wn){const e=Ke(),t={};vn.forEach((i=>{t[i]=e[i]})),ft(t),dt.debug("before adding tf-rollup-widget to page",performance.now());const i=fe.createElement("tf-rollup-widget");i.setAttribute("styleId",e.styleId),fe.body.appendChild(i)}if({$t((()=>{Gt()}));const e=qe(),{checkout:t,sessionInfo:i,otherWidgets:n}=e;if(t&&Xe(JSON.parse(t)),i&&tt(JSON.parse(i)),n){const t(i=>{t[i]=e[i]})),ft(t),Gt()}}})()})();